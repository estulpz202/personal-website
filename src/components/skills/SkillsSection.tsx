'use client';

import { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import { skillsData } from './SkillsData';
import Icon from '@/components/ui/Icon';

/**
 * SkillsSection - Comprehensive skills display for the about page
 */
export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('languages');

  /**
   * Renders proficiency indicator bars
   */
  const renderProficiency = (level: number = 3) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-1.5 h-6 rounded-sm ${i <= level ? 'bg-indigo-500' : 'bg-gray-200'}`}
          />
        ))}
      </div>
    );
  };

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
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-indigo-100 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{skillsData[activeTab].title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between hover:border-indigo-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-indigo-500 text-lg">•</span>
                <span className="text-gray-800 font-medium">{skill.name}</span>
              </div>
              {renderProficiency(skill.proficiency)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center text-gray-600 text-sm">
        <p className="flex items-center justify-center gap-1">
          {/* <Icon name="info" className="w-4 h-4" /> */}
          Proficiency levels based on practical experience and project work
        </p>
      </div>
    </section>
  );
}
