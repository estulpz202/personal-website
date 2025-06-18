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
 * Generate metadata for the project detail page
 */
export async function generateMetadata({ params }: ProjectDetailParams): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  // Redirect to non-existent path if project not found
  if (!project) {
    redirect('/project-not-found');
  }

  return {
    title: `${project.title}`,
  };
}

/**
 * Generate static paths for all projects
 */
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * ProjectDetailPage - Displays detailed information about a specific project
 */
export default async function ProjectDetailPage({ params }: ProjectDetailParams) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    redirect('/project-not-found');
  }

  return (
    <main className="pb-16">
      {/* Header with Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        <Link
          href="/projects"
          className="inline-flex items-center text-[15px] text-indigo-600 hover:text-indigo-700 group"
        >
          <Icon
            name="arrow-left"
            className="w-4.5 h-4.5 mr-1 group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </Link>
      </div>

      {/* Project Hero Banner with Links */}
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        bannerImageUrl={project.bannerImageUrl}
        categories={project.category}
        links={project.links}
      />

      {/* Project Content Area - Grid with equal height columns */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:grid-rows-1 auto-rows-min">
          {/* Main Content - Takes 2/3 on medium screens */}
          <div className="md:col-span-2 h-full">
            <ProjectContent description={project.description} highlights={project.highlights} />
          </div>

          {/* Sidebar - Takes 1/3 on medium screens */}
          <div className="h-full">
            <ProjectSidebar
              timeline={project.timeline}
              organization={project.organization}
              tech={project.tech}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
