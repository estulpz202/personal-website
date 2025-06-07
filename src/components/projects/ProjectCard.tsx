// A reusable ProjectCard component to display project info consistently

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; url: string }[];
}

export default function ProjectCard({ title, description, tech, links }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
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
              className="text-blue-600 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
