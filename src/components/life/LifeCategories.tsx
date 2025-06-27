import Icon from '@/components/ui/Icon';

/**
 * Category data for the life interests section
 */
interface CategoryItem {
  icon: 'dumbbell' | 'mountains' | 'teaching' | 'paw';
  title: string;
  description: string;
}

/**
 * Interest categories data
 */
const categories: CategoryItem[] = [
  {
    icon: 'dumbbell',
    title: 'Martial Arts',
    description: 'Wrestling, boxing, and grappling',
  },
  {
    icon: 'mountains',
    title: 'Outdoors',
    description: 'Hiking, kayaking, and sports',
  },
  {
    icon: 'teaching',
    title: 'Teaching',
    description: 'Mentoring and community building',
  },
  {
    icon: 'paw',
    title: 'Dogs',
    description: 'My three canine companions',
  },
];

/**
 * LifeCategories - Visual category section with icons
 *
 * Displays the main interest categories with visual icons and brief descriptions
 */
export default function LifeCategories() {
  return (
    <section className="py-8 fade-in-up">
      <div className="grid grid-cols-4 gap-6 mb-12">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="bg-indigo-50 rounded-full p-5 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Icon name={category.icon} className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.title}</h3>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
