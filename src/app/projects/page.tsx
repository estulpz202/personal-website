import Container from '@/components/common/Container';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/components/projects/projectsData';

/**
 * Page metadata for browser tab display
 */
export const metadata = {
  title: 'Projects | Estuardo Lopez',
  description:
    'Explore my portfolio of software development projects including web applications, full-stack systems, AI tools, and mobile apps.',
};

/**
 * ProjectsPage - Main projects showcase page
 *
 * Displays all portfolio projects in a responsive grid layout.
 */
export default function ProjectsPage() {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50">
        <Container>
          <div className="py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              A showcase of my technical work across web development, full-stack systems, AI, and
              mobile applications. Each project represents unique challenges and solutions.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Projects Grid */}
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
