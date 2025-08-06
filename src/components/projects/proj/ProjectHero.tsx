import Image from 'next/image';
import ProjectLinks from './ProjectLinks';

/**
 * Props for the ProjectHero component
 */
interface ProjectHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
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
  imageUrl,
  bannerImageUrl,
  categories,
  links,
}: ProjectHeroProps) {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        {/* Banner Image */}
        <div className="relative h-48 sm:h-56 md:h-64 w-full">
          <Image
            src={bannerImageUrl}
            alt={`${title} project banner`}
            fill
            priority
            className="hidden sm:block object-cover"
          />
          <Image
            src={imageUrl}
            alt={`${title} project banner`}
            fill
            priority
            className={`sm:hidden object-cover ${title === 'The Pack' || title === 'Santorini' || title === 'Gcode Academy' ? 'object-center' : 'object-top'}`}
          />

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/65 to-transparent"></div>

          {/* Project title on image */}
          <div className="absolute bottom-0 left-0 right-0 pl-4 sm:pl-5.5 pb-2.5 sm:pb-3.5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{title}</h1>
          </div>
        </div>

        {/* Project subtitle and categories */}
        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between mb-1">
            <p className="text-sm sm:text-base text-gray-600">{subtitle}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-2 sm:px-2.5 py-0.75 sm:py-1 text-[13px] sm:text-[15px] rounded-full bg-gray-100 text-gray-600"
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
