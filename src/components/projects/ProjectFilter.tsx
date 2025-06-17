import { getProjectCategories, ProjectCategory } from './projectsData';

interface ProjectFilterProps {
  onFilterChange: (category: ProjectCategory | null) => void;
  activeFilter: ProjectCategory | null;
}

/**
 * ProjectFilter - A component that handles category filtering
 *
 * Features a clean tab-like UI for filtering projects by category
 */
export default function ProjectFilter({ onFilterChange, activeFilter }: ProjectFilterProps) {
  const categories = getProjectCategories();

  return (
    <div className="pb-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange(null)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeFilter === null
              ? 'bg-indigo-100 text-indigo-700'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === category.id
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
