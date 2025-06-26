import Image from 'next/image';
import ProjectLinks from './ProjectLinks';

/**
 * Props for the ProjectHero component
 */
interface ProjectHeroProps {
  title: string;
  subtitle: string;
  bannerImageUrl: string;
  categories: string[];
  links: {
    label: string;
    url: string;
    icon?: string;
  }[];
}

/**
 * ProjectHero - Displays the hero banner for a project detail page
 * Shows the project banner image, title, and categories in an attractive banner format
 */
export default function ProjectHero({
  title,
  subtitle,
  bannerImageUrl,
  categories,
  links,
}: ProjectHeroProps) {
  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        {/* Banner Image */}
        <div className="relative h-64 w-full">
          <Image src={bannerImageUrl} alt={`${title} project banner`} fill priority />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/65 to-transparent"></div>

          {/* Project title on image */}
          <div className="absolute bottom-0 left-0 right-0 pl-5.5 pb-3.5">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
          </div>
        </div>

        {/* Project subtitle and categories */}
        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between mb-1">
            <p className="text-gray-600">{subtitle}</p>
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-2.5 py-1 text-[15px] rounded-full bg-gray-100 text-gray-600"
                >
                  {category === 'ai'
                    ? 'AI & ML'
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>
          </div>

          {/* Project links */}
          <ProjectLinks links={links} />
        </div>
      </div>
    </div>
  );
}
