'use client';

import { useState } from 'react';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
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
    ? projects.filter((proj) => proj.category.includes(activeFilter))
    : projects;

  return (
    <div>
      <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Display message if no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-6 sm:py-8 md:py-10">
          <p className="text-gray-500 text-sm sm:text-base">No projects found for this category.</p>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
