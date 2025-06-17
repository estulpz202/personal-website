import { getProjectCategories, ProjectCategory } from './projectsData';

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
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange(null)}
          className={`px-3.5 py-1.5 text-sm font-medium border transition-colors rounded-md ${
            activeFilter === null
              ? 'border-indigo-500 bg-indigo-500 text-white'
              : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-200'
          }`}
        >
          All Projects
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`px-3.5 py-1.5 text-sm font-medium border transition-colors rounded-md ${
              activeFilter === category.id
                ? 'border-indigo-500 bg-indigo-500 text-white'
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
