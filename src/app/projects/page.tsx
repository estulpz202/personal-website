import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/components/projects/projectsData';

/**
 * Page metadata for browser tab display
 */
export const metadata = {
  title: 'Projects | Estuardo Lopez',
};

/**
 * Custom container with wider max-width for projects display
 */
function ProjectsContainer({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
}

/**
 * ProjectsPage - Main projects showcase page
 *
 * Displays all portfolio projects in a responsive grid layout.
 */
export default function ProjectsPage() {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <ProjectsContainer>
          <div className="py-16">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              A showcase of my technical work across full-stack systems, AI, web development, and
              mobile applications. Each project represents unique challenges and solutions.
            </p>
          </div>
        </ProjectsContainer>
      </div>

      <ProjectsContainer>
        {/* Projects Grid */}
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </ProjectsContainer>
    </main>
  );
}
