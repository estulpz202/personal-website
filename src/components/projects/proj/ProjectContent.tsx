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
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
      {/* Project overview */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
      <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>

      {/* Key highlights */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Highlights</h3>
      <ul className="space-y-4">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex justify-center items-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 mt-0.5 mr-3 text-xs font-medium flex-shrink-0">
              {index + 1}
            </span>
            <span className="text-gray-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
