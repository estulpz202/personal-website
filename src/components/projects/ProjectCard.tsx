'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Props for the ProjectCard component
 */
interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; url: string }[];
}

/**
 * ProjectCard - Interactive project display for the projects page
 *
 * Renders a clickable card showing project details with hover effects.
 * The entire card navigates to the project detail page, while maintaining
 * accessibility and allowing direct access to external links.
 */
export default function ProjectCard({ slug, title, description, tech, links }: ProjectCardProps) {
  const router = useRouter();

  // Navigation handler for clicking on the card
  const handleCardClick = useCallback(() => {
    router.push(`/projects/${slug}`);
  }, [router, slug]);

  return (
    <div
      onClick={handleCardClick}
      className="group proj-card-link border rounded-lg shadow-sm hover:shadow-lg transition-transform transform hover:scale-[1.025] fade-in-up relative"
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Main content area with title, description and technologies */}
      <div className="p-6 pb-16">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[color:var(--accent-color)] transition-colors">
          {title}
        </h3>
        <p className="text-base text-gray-700 mb-4">{description}</p>
        <div className="text-sm text-gray-600 mb-4">
          <strong>Technologies:</strong> {tech.join(', ')}
        </div>
      </div>

      {/* Footer with external links and "more details" indicator */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pt-4 border-t border-gray-100 bg-white rounded-b-lg">
        <div className="flex justify-between items-center text-sm">
          <div
            className="flex flex-wrap gap-4"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="text-sm text-gray-600 group-hover:text-[color:var(--accent-color)] transition-colors">
            More details →
          </span>
        </div>
      </div>
    </div>
  );
}
