import { redirect } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/components/projects/projectsData';
import Icon from '@/components/ui/Icon';
import { Metadata } from 'next';

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
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Back to projects link */}
      <div className="mb-6">
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

      {/* Basic project information placeholder */}
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600">{project.subtitle}</p>
    </main>
  );
}
