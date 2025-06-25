import Link from 'next/link';

/**
 * Props for the MinimalProjectCard component
 */
interface MinimalProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  href: string;
}

/**
 * MinimalProjectCard - Simplified project card for homepage display
 */
export default function MinimalProjectCard({
  title,
  description,
  tech,
  href,
}: MinimalProjectCardProps) {
  return (
    <Link href={href} className="block group h-full">
      <div
        className="bg-white rounded-lg px-4 sm:px-5 pt-1.5 pb-3 sm:pb-3.5 border border-gray-200 
        shadow-sm hover:shadow-md hover:border-gray-300 
        active:shadow-md active:border-gray-300
        transition-all duration-300 h-full flex flex-col"
      >
        <h3
          className="text-base sm:text-lg font-semibold text-gray-800 
          group-hover:text-indigo-600 group-active:text-indigo-600 transition-colors"
        >
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 mt-1.5 sm:mt-2 mb-3 sm:mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tech.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs bg-gray-50 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
