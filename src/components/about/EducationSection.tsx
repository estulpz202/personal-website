'use client';

import { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';

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
    <section className="py-10 fade-in-up">
      <SectionHeader title="Education" />

      <div className="relative h-[220px] perspective">
        {/* Card Container */}
        <div
          className={`absolute w-full h-full transform-style-3d transition-transform duration-700 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 backface-hidden cursor-pointer hover:border-indigo-200 transition-colors"
            onClick={() => setIsFlipped(true)}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-5">
                <Image
                  src="/cmu_logo.jpg"
                  alt="Carnegie Mellon University Logo"
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
              </div>
              <div className="ml-5 flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Carnegie Mellon University
                  </h3>
                  <span className="text-gray-600 text-base font-normal">Aug 2023 - May 2027</span>
                </div>
                <p className="text-indigo-600 font-medium mt-1">B.S. in Computer Science</p>
                <p className="text-gray-600">
                  Concentration in SWE • Minor in Social & Political History
                </p>
                <p className="text-gray-700 mt-2">QPA: 3.65</p>
              </div>
            </div>

            {/* Flip indicator */}
            <div className="absolute bottom-4 right-4 text-indigo-400 bg-gray-50 rounded-full p-2 shadow-sm border border-gray-100 hover:bg-indigo-50 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 14.25L3 9.75M3 9.75L7.5 5.25M3 9.75H16.5C18.7091 9.75 20.5 11.5409 20.5 13.75V14.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 backface-hidden rotate-y-180 cursor-pointer hover:border-indigo-200 transition-colors"
            onClick={() => setIsFlipped(false)}
          >
            <div className="flex h-full">
              {/* Campus Involvement */}
              <div className="w-2/5 border-r border-gray-100 pr-4">
                <h4 className="font-medium text-gray-800 mb-3 text-sm uppercase tracking-wider">
                  Campus Involvement
                </h4>
                <ul className="space-y-3">
                  {activities.map((activity) => (
                    <li key={activity} className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework */}
              <div className="w-3/5 pl-6">
                <h4 className="font-medium text-gray-800 mb-3 text-sm uppercase tracking-wider">
                  Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="inline-block px-2.5 py-0.5 mb-1.5 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Back indicator */}
            <div className="absolute bottom-4 right-4 text-indigo-400 bg-gray-50 rounded-full p-2 shadow-sm border border-gray-100 hover:bg-indigo-50 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 9.75L21 14.25M21 14.25L16.5 18.75M21 14.25H7.5C5.29086 14.25 3.5 12.4591 3.5 10.25V9.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for 3D transforms */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
