import Image from 'next/image';

/**
 * Props for the ProjectHero component
 */
interface ProjectHeroProps {
  title: string;
  subtitle: string;
  bannerImageUrl: string;
  categories: string[];
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
}: ProjectHeroProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        {/* Banner Image */}
        <div className="relative h-64 w-full">
          <Image
            src={bannerImageUrl}
            alt={`${title} project banner`}
            className="object-cover"
            fill
            priority
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>

          {/* Project title on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/90 text-gray-800"
                >
                  {category === 'ai'
                    ? 'AI & ML'
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-white">{title}</h1>
          </div>
        </div>

        {/* Project basic info */}
        <div className="p-6">
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
