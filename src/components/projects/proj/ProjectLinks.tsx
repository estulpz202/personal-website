import Icon, { IconName } from '@/components/ui/Icon';

/**
 * ProjectLink - Structure for a project external link
 */
interface ProjectLink {
  label: string;
  url: string;
  icon?: string;
}

/**
 * Props for the ProjectLinks component
 */
interface ProjectLinksProps {
  links: ProjectLink[];
}

/**
 * ProjectLinks - Displays external links for a project
 * Shows GitHub, demo, or other external links with appropriate icons
 */
export default function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="mt-5">
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center link"
          >
            <Icon
              name={(link.icon || 'external-link') as IconName}
              className="w-4.25 h-4.25 mr-1.5"
            />
            <span className="text-[15px]">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
