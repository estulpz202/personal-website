import Link from 'next/link';
import SectionHeader from '@/components/common/SectionHeader';
import SkillsIcon from './SkillsIcon';
import Icon from '@/components/ui/Icon';
import { homeSkillsData, Skill } from './SkillsData';

/**
 * Single skill card component
 */
const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md active:shadow-md transition-shadow">
      {skill.icon && (
        <div className="flex-shrink-0">
          <SkillsIcon name={skill.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      )}
      <span className="font-medium text-gray-700 text-xs sm:text-sm">{skill.name}</span>
    </div>
  );
};

/**
 * SkillsSectionHome - Compact skills display for the home page
 */
export default function SkillsSectionHome() {
  return (
    <section className="pt-6 sm:pt-7 md:pt-8 pb-8 sm:pb-9 md:pb-10">
      <SectionHeader title="Technical Highlights" />

      {/* Skills categories grid - single column on mobile, three columns on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {homeSkillsData.map((category) => (
          <div key={category.title} className="space-y-2 sm:space-y-3">
            {/* Category title */}
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-1.5 sm:mb-2">
              {category.title}
            </h3>

            {/* Skills list for this category */}
            <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* "More" link with animated arrow icon */}
      <div className="mt-5 sm:mt-6 text-center">
        <Link
          href="/about"
          className="text-indigo-600 font-medium hover:text-indigo-700 active:text-indigo-700 inline-flex items-center group px-1 py-0.5"
        >
          More about me
          <Icon
            name="arrow-right"
            className="w-4 h-4 sm:w-5 sm:h-5 ml-1 transform transition-transform group-hover:translate-x-1 group-active:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
