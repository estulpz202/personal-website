import Link from 'next/link';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; url: string }[];
}

export default function ProjectCard({ slug, title, description, tech, links }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block group proj-card-link"
      aria-label={`View project: ${title}`}
    >
      <div className="border rounded-lg p-6 shadow-sm group-hover:shadow-lg transition-transform transform group-hover:scale-[1.02] fade-in-up">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[color:var(--accent-color)] transition-colors">
          {title}
        </h3>
        <p className="text-base text-gray-700 mb-4">{description}</p>
        <div className="text-sm text-gray-600 mb-4">
          <strong>Technologies:</strong> {tech.join(', ')}
        </div>
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-4 text-sm">
            {links.map((link) => (
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
        )}
      </div>
    </Link>
  );
}
