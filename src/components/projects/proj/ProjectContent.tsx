/**
 * Props for the ProjectContent component
 */
interface ProjectContentProps {
  description: string;
  highlights: string[];
}

/**
 * ProjectContent - Displays the main content area for a project
 * Contains the project overview and key highlights
 */
export default function ProjectContent({ description, highlights }: ProjectContentProps) {
  return (
    <div className="bg-white rounded-xl p-4 pt-2 sm:p-5 sm:pt-2.5 md:p-6 md:pt-6 shadow-sm border border-gray-100 h-full">
      {/* Project overview */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Overview</h2>
      <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
        {description}
      </p>

      {/* Key highlights */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Highlights</h3>
      <ul className="space-y-3 sm:space-y-4">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <span
              className="
                inline-flex justify-center items-center w-5 h-5 sm:w-6 sm:h-6 rounded-full
                bg-indigo-100 text-indigo-600 mt-0.5 mr-2 sm:mr-3 text-[10px] sm:text-xs font-medium flex-shrink-0
              "
            >
              {index + 1}
            </span>
            <span className="text-sm sm:text-base text-gray-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
