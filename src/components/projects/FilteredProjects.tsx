'use client';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { projects, ProjectCategory } from './projectsData';

/**
 * FilteredProjects - A client component that manages project filtering
 *
 * Handles state and filtering logic while keeping the main page as a server component
 */
export default function FilteredProjects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | null>(null);

  // Filter projects based on the selected category
  const filteredProjects = activeFilter
    ? projects.filter((project) => project.category.includes(activeFilter))
    : projects;

  return (
    <div>
      <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Display message if no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No projects found for this category.</p>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
