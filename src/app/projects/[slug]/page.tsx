import { notFound } from 'next/navigation';
import { projects } from '@/components/projects/projectsData';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Link from 'next/link';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * ProjectPage - Individual project detail page
 *
 * Renders a detailed page for a specific project based on the URL slug
 * Returns 404 if the project is not found
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  // Extract and find the project data based on the URL slug
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  // Return 404 if no matching project is found
  if (!project) {
    notFound();
  }

  return (
    <main>
      <Container>
        <section className="py-12 fade-in-up">
          {/* Project title as page header */}
          <SectionHeader title={project.title} />

          {/* Project description */}
          <p className="text-base text-gray-700 mb-6">{project.description}</p>

          {/* Technologies used */}
          <div className="text-base text-gray-700 mb-6">
            <strong>Technologies:</strong> {project.tech.join(', ')}
          </div>

          {/* Key project highlights as a bulleted list */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <strong className="block mb-2">Highlights:</strong>
              <ul className="list-disc pl-5 text-base text-gray-700">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="mb-2">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* External links to repositories, demos, etc. */}
          {project.links && project.links.length > 0 && (
            <div className="mb-6">
              <strong className="block mb-2">Links:</strong>
              <ul className="list-disc pl-5 text-base text-gray-700">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation back to the main projects page */}
          <Link href="/projects" className="link text-sm">
            ← Back to Projects
          </Link>
        </section>
      </Container>
    </main>
  );
}
