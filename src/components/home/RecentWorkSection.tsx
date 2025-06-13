import Link from 'next/link';
import SectionHeader from '@/components/common/SectionHeader';
import MinimalProjCard from './MinimalProjCard';
import { recentProjs } from './RecentProjData';

export default function RecentWorkSection() {
  return (
    <section className="py-10 fade-in-up">
      <SectionHeader title="Recent Work" />

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

      <div className="mt-6 text-center">
        <Link
          href="/projects"
          className="text-indigo-500 font-medium hover:text-indigo-600 inline-flex items-center group px-1 py-0.5"
        >
          View all projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
