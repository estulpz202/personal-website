import Link from 'next/link';
import SectionHeader from '@/components/common/SectionHeader';
import MinimalProjCard from './MinimalProjCard';
import { recentProjs } from './RecentProjData';
import Icon from '@/components/ui/Icon';

/**
 * RecentWorkSection - Featured projects showcase for homepage
 */
export default function RecentWorkSection() {
  return (
    <section className="pt-10 pb-8 fade-in-up">
      <SectionHeader title="Recent Work" />

      {/* Project cards grid - single column on mobile, two columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recentProjs.map((project) => (
          <MinimalProjCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            href={project.href}
          />
        ))}
      </div>

      {/* "View all" link with animated arrow icon */}
      <div className="mt-6 text-center">
        <Link
          href="/projects"
          className="text-indigo-500 font-medium hover:text-indigo-600 inline-flex items-center group px-1 py-0.5"
        >
          View all projects
          <Icon
            name="arrow-right"
            className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
