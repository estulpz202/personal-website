'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import { Project, ProjectCategory } from './projectsData';

/**
 * Props for the ProjectCard component
 */
interface ProjectCardProps {
  project: Project;
}

/**
 * Category badge colors mapped by category type
 */
const categoryColors: Record<ProjectCategory, { bg: string; text: string }> = {
  fullstack: { bg: 'bg-blue-100', text: 'text-blue-700' },
  ai: { bg: 'bg-purple-100', text: 'text-purple-700' },
  mobile: { bg: 'bg-green-100', text: 'text-green-700' },
  web: { bg: 'bg-amber-100', text: 'text-amber-700' },
};

/**
 * ProjectCard - Displays a single project with image, details, and links
 *
 * Features a clean, modern design with hover effects and category badges.
 * The entire card is clickable to navigate to the project detail page.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  // Navigation handler for clicking on the card
  const handleCardClick = useCallback(() => {
    router.push(`/projects/${project.slug}`);
  }, [router, project.slug]);

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Project Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={`${project.title} project screenshot`}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          fill
        />

        {/* Category badges overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {project.category.map((cat) => (
            <span
              key={cat}
              className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[cat].bg} ${categoryColors[cat].text}`}
            >
              {cat === 'ai' ? 'AI & ML' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{project.description}</p>

        {/* Tech stack */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-1">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-gray-100 rounded-md text-xs text-gray-700">
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 bg-gray-100 rounded-md text-xs text-gray-700">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer with links and "View Details" */}
      <div className="px-5 py-3 border-t border-gray-100 flex justify-between items-center">
        <div
          className="flex items-center gap-3"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          {project.links.slice(0, 2).map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
              aria-label={link.label}
            >
              {/* <Icon name={link.icon || 'external-link'} className="w-5 h-5" /> */}
            </a>
          ))}
        </div>
        <div className="flex items-center text-indigo-600 text-sm font-medium">
          View Details
          <Icon
            name="arrow-right"
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}
