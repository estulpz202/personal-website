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
    <section className="py-7 fade-in-up" id="skills">
      <SectionHeader title="Technical Skills" />

      {/* Skills Navigation */}
      <div className="flex overflow-x-auto mb-6 gap-2">
        {Object.entries(skillsData).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-3.75 py-1.75 text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-lg ${
              activeTab === key
                ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm'
            }`}
          >
            {data.title}
          </button>
        ))}
      </div>

      {/* Skills Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 pb-6 pr-6 pl-6 pt-2">
        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-6">
          {skillsData[activeTab].title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {skillsData[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3 hover:border-indigo-200 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <span className="text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
