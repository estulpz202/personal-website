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
      <div className="bg-white rounded-lg px-5 pt-1.5 pb-3.5 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 h-full flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-500 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-700 mt-2 mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
