'use client';

import { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import { skillsData } from './SkillsData';

/**
 * SkillsSection - Comprehensive skills display for the about page
 */
export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('languages');

  return (
    <section className="py-5 sm:py-6 md:py-7">
      <SectionHeader title="Technical Skills" />

      {/* Skills Navigation - Scrollable tabs */}
      <div className="flex overflow-x-auto mb-4 sm:mb-5 md:mb-6 gap-1.5 sm:gap-2 no-scrollbar">
        {Object.entries(skillsData).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`
              px-3 py-1.25 sm:px-3.75 sm:py-1.75 text-xs sm:text-sm font-medium 
              whitespace-nowrap transition-all duration-200 rounded-lg
              ${
                activeTab === key
                  ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm'
              }
            `}
          >
            {data.title}
          </button>
        ))}
      </div>

      {/* Skills Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 pb-4 px-4 pt-0 sm:pb-5 sm:px-5 md:pt-1 md:pb-6 md:px-6 md:pt-2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 sm:mt-4 mb-4 sm:mb-5 md:mb-6">
          {skillsData[activeTab].title}
        </h3>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
          {skillsData[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="
                bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-100 
                flex items-center gap-2 sm:gap-3 hover:border-indigo-200 transition-colors\
              "
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-600"></div>
              <span className="text-sm sm:text-base text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
