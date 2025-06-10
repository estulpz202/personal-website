import { notFound } from 'next/navigation';
import { projects } from '@/components/projects/projectsData';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Link from 'next/link';

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Container>
        <section className="py-12 fade-in-up">
          <SectionHeader title={project.title} />

          <p className="text-base text-gray-700 mb-6">{project.description}</p>

          <div className="text-base text-gray-700 mb-6">
            <strong>Technologies:</strong> {project.tech.join(', ')}
          </div>

          {/* Add Highlights section */}
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

          {/* Links section */}
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

          <Link href="/projects" className="link text-sm">
            ← Back to Projects
          </Link>
        </section>
      </Container>
    </main>
  );
}
