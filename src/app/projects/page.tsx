import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/components/projects/projectsData';

export default function ProjectsPage() {
  return (
    <main>
      <Container>
        <section className="py-12 fade-in-up">
          <SectionHeader title="Projects" />
          <p className="text-base text-gray-700 mb-6">
            Below are a few selected projects that showcase my technical skills and engineering
            experience. These projects demonstrate my work across fullstack systems, AI, game
            development, and iOS apps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                tech={project.tech}
                links={project.links}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
