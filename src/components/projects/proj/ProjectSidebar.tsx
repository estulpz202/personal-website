import Icon from '@/components/ui/Icon';

/**
 * Props for the ProjectSidebar component
 */
interface ProjectSidebarProps {
  timeline: string;
  organization: string;
  tech: string[];
}

/**
 * ProjectSidebar - Displays sidebar with project metadata
 * Contains project details and technologies used
 */
export default function ProjectSidebar({ timeline, organization, tech }: ProjectSidebarProps) {
  return (
    <div className="sticky top-6 h-full flex flex-col">
      {/* Project Details */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium text-gray-600 mb-1">Timeline</div>
            <div className="flex items-center text-gray-800">
              <Icon name="calendar" className="w-4 h-4 mr-2 text-gray-400" />
              {timeline}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-600 mb-1">Organization</div>
            <div className="flex items-center text-gray-800">
              <Icon name="users" className="w-4 h-4 mr-2 text-gray-400" />
              {organization}
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {tech.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
