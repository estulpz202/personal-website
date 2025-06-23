import { getProjectCategories, ProjectCategory } from './projectsData';

/**
 * Props for the ProjectFilter component
 */
interface ProjectFilterProps {
  onFilterChange: (category: ProjectCategory | null) => void;
  activeFilter: ProjectCategory | null;
}

/**
 * ProjectFilter - A component that handles category filtering
 */
export default function ProjectFilter({ onFilterChange, activeFilter }: ProjectFilterProps) {
  const categories = getProjectCategories();

  return (
    <div className="mb-6">
      <div className="flex overflow-x-auto gap-2">
        <button
          onClick={() => onFilterChange(null)}
          className={`px-3.75 py-1.75 text-sm font-medium whitespace-nowrap border transition-all duration-200 rounded-lg ${
            activeFilter === null
              ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
              : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-200'
          }`}
        >
          All Projects
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`px-3.75 py-1.75 text-sm font-medium whitespace-nowrap border transition-all duration-200 rounded-lg ${
              activeFilter === category.id
                ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
