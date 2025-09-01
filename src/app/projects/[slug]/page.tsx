import { redirect } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/components/projects/projectsData';
import Icon from '@/components/ui/Icon';
import { Metadata } from 'next';
import ProjectHero from '@/components/projects/proj/ProjectHero';
import ProjectContent from '@/components/projects/proj/ProjectContent';
import ProjectSidebar from '@/components/projects/proj/ProjectSidebar';

/**
 * Props for the ProjectDetailParams component
 */
interface ProjectDetailParams {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Find a project by its main slug or any of its aliases
 * Returns the project object if found, undefined if not found
 */
function findProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug || project.aliases?.includes(slug));
}

/**
 * Generate metadata for the project detail page
 * This runs before the page renders to set the HTML <title> tag
 */
export async function generateMetadata({ params }: ProjectDetailParams): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  // If no project found, redirect to 404
  if (!project) {
    redirect('/project-not-found');
  }

  return {
    title: `${project.title}`,
  };
}

/**
 * Generate static paths for all projects at build time
 * This tells Next.js which URLs to pre-build as static pages
 *
 * For each project, we generate paths for:
 * - The main slug
 * - All aliases
 *
 * This ensures both /projects/swift-academy and /projects/gcode-academy
 * are valid URLs that Next.js knows how to handle
 */
export function generateStaticParams() {
  const allSlugs: { slug: string }[] = [];

  projects.forEach((project) => {
    // Add the main slug
    allSlugs.push({ slug: project.slug });

    // Add all aliases (if any exist)
    if (project.aliases) {
      project.aliases.forEach((alias) => {
        allSlugs.push({ slug: alias });
      });
    }
  });

  return allSlugs;
}

/**
 * Custom container with thinner max-width for project detail display
 */
function ProjectContainer({ children }: { children: React.ReactNode }) {
  return <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
}

/**
 * ProjectDetailPage - Displays detailed information about a specific project
 */
export default async function ProjectDetailPage({ params }: ProjectDetailParams) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  // If no project found with this slug or alias, go to 404
  if (!project) {
    redirect('/project-not-found');
  }

  if (slug !== project.slug) {
    redirect(`/projects/${project.slug}`);
  }
  // If user accessed via an alias, redirect to main slug
  // Ensures: Consistency, better SEO (search engines see one canonical URL), and analytics use the main URL
  if (slug !== project.slug) {
    redirect(`/projects/${project.slug}`);
  }

  return (
    <main className="py-6 sm:py-8 md:py-10 fade-in-up">
      <ProjectContainer>
        {/* Header with Back Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center pt-1.5 sm:pt-2 pb-3 sm:pb-4 text-sm sm:text-[15px] text-indigo-600 hover:text-indigo-700 active:text-indigo-700 group"
        >
          <Icon
            name="arrow-left"
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 mr-1 group-hover:-translate-x-1 group-active:-translate-x-1 transition-transform"
          />
          Back to Projects
        </Link>

        {/* Project Hero Banner */}
        <ProjectHero
          title={project.title}
          subtitle={project.subtitle}
          imageUrl={project.imageUrl}
          bannerImageUrl={project.bannerImageUrl}
          centerImage={project.centerImage}
          categories={project.category}
          links={project.links}
        />

        {/* Project Content Area - Grid with equal height columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-6 sm:gap-7 md:gap-8 auto-rows-min">
          {/* Main Content - Takes 2/3 on medium screens and above */}
          <div className="md:col-span-2 h-full">
            <ProjectContent description={project.description} highlights={project.highlights} />
          </div>

          {/* Sidebar - Takes 1/3 on medium screens and above */}
          <div className="h-full">
            <ProjectSidebar
              timeline={project.timeline}
              shortTimeline={project.shortTimeline}
              organization={project.organization}
              tech={project.tech}
            />
          </div>
        </div>
      </ProjectContainer>
    </main>
  );
}
