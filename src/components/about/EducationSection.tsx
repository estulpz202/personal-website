'use client';

import { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

/**
 * List of notable courses
 */
const courses = [
  'Principles of Software Construction',
  'Introduction to Computer Systems',
  'Principles of Imperative Computation',
  'Great Ideas in Theoretical CS',
  'Principles of Functional Programming',
  'Mathematical Foundations for CS',
];

/**
 * Campus activities
 */
const activities = ['Acts2Fellowship', 'Spanish and Latin Student Association', 'Grappling Club'];

/**
 * EducationSection - Displays academic background and notable coursework
 */
export default function EducationSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="pt-3 pb-7 fade-in-up">
      <SectionHeader title="Education" />

      <div className={`relative h-[235px] perspective flip-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Card Container */}
        <div className="flip-card-inner">
          {/* Front Side */}
          <div
            className="flip-card-front bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-all duration-300"
            onClick={() => setIsFlipped(true)}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-5">
                <Image
                  src="/images/logos/cmu_logo.jpg"
                  alt="Carnegie Mellon University Logo"
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
              </div>
              <div className="ml-5 flex-grow text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-xl font-bold">Carnegie Mellon University</h3>
                  <span className="text-gray-600 mt-1">Aug 2023 - May 2027</span>
                </div>
                <p className="text-indigo-600 font-medium mt-1 text-lg">B.S. in Computer Science</p>
                <p className="text-gray-700">
                  Concentration in SWE • Minor in Social & Political History
                </p>
                <div className="flex items-center mt-4">
                  <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded text-sm font-medium">
                    QPA: 3.65
                  </span>
                </div>
              </div>
            </div>

            {/* Flip indicator */}
            <div className="absolute bottom-4 right-4 text-indigo-500 bg-gray-50 rounded-full px-3 py-2 shadow-sm border border-gray-100 hover:bg-indigo-50 hover:scale-105 transition-all duration-200 flex items-center gap-1">
              <span className="text-sm">Details</span>
              <Icon name="flip-right" className="w-5 h-5" />
            </div>
          </div>

          {/* Back Side */}
          <div
            className="flip-card-back bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-all duration-300 text-left"
            onClick={() => setIsFlipped(false)}
          >
            <div className="flex h-full pl-4">
              {/* Campus Involvement */}
              <div className="w-[34%] border-r border-gray-100 pr-4">
                <h4 className="text-gray-800 mb-3 tracking-wider">Campus Involvement</h4>
                <ul className="space-y-3">
                  {activities.map((activity) => (
                    <li key={activity} className="flex items-center">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-700 text-sm font-medium">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework */}
              <div className="w-[66%] pl-6">
                <h4 className="text-gray-800 mb-3 tracking-wider">Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="inline-block px-3 py-1 mb-1.5 text-xs bg-gray-100 text-gray-700 font-medium rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Back indicator */}
            <div className="absolute bottom-4 right-4 text-indigo-500 bg-gray-50 rounded-full px-3 py-2 shadow-sm border border-gray-100 hover:bg-indigo-50 hover:scale-105 transition-all duration-200 flex items-center gap-1">
              <span className="text-sm">Back</span>
              <Icon name="flip-left" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
