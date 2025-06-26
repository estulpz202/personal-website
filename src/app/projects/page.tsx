import FilteredProjects from '@/components/projects/FilteredProjects';

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
 * Displays all portfolio projects in a responsive grid layout with filtering options.
 */
export default function ProjectsPage() {
  return (
    <main className="pb-8 sm:pb-10 fade-in-up">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <ProjectsContainer>
          <div className="py-10 sm:py-12 md:py-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">My Projects</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl">
              A showcase of my technical work across fullstack systems, AI, web development, and
              mobile applications. Each project represents unique challenges and solutions.
            </p>
          </div>
        </ProjectsContainer>
      </div>

      <ProjectsContainer>
        {/* Projects Section with Filtering */}
        <div className="py-5 sm:py-6.5 md:py-8">
          <FilteredProjects />
        </div>
      </ProjectsContainer>
    </main>
  );
}
