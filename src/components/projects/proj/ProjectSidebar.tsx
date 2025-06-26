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
    <div className="md:sticky md:top-6 h-full flex flex-col">
      {/* Project Details */}
      <div className="bg-gray-50 rounded-xl p-4 pt-2 sm:p-5 sm:pt-2.5 md:p-6 md:pt-6 shadow-sm border border-gray-100 mb-4 sm:mb-5 md:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
          Project Details
        </h3>

        <div className="space-y-3 sm:space-y-4">
          <div>
            <div className="text-xs sm:text-sm font-medium text-gray-500 mb-0.5 sm:mb-1">
              Timeline
            </div>
            <div className="flex items-center text-sm sm:text-base text-gray-700">
              <Icon name="calendar" className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              {timeline}
            </div>
          </div>

          <div>
            <div className="text-xs sm:text-sm font-medium text-gray-500 mb-0.5 sm:mb-1">
              Organization
            </div>
            <div className="flex items-center text-sm sm:text-base text-gray-700">
              <Icon name="users" className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              {organization}
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-white rounded-xl p-4 pt-2 sm:p-5 sm:pt-2.5 md:p-6 md:pt-6 shadow-sm border border-gray-100 flex-grow flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
          Technologies
        </h3>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tech.map((technology) => (
            <span
              key={technology}
              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs sm:text-sm text-gray-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
