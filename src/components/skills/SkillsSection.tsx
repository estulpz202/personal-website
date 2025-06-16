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
    <section className="py-10 fade-in-up" id="skills">
      <SectionHeader title="Technical Skills" />

      {/* Skills Navigation */}
      <div className="flex overflow-x-auto mb-6 pb-2 gap-2">
        {Object.entries(skillsData).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === key
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {data.title}
          </button>
        ))}
      </div>

      {/* Skills Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{skillsData[activeTab].title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3 hover:border-indigo-200 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              <span className="text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
