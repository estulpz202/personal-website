'use client';

import { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

/**
 * List of notable courses
 */
const courses = [
  'Parallel and Sequential DS & Algos',
  'Foundations of SWE',
  'Princ of Software Construction',
  'Princ of Imperative Computation',
  'Intro to Computer Systems',
  'Great Ideas in Theoretical CS',
  'Princ of Functional Programming',
  'Mathematical Foundations for CS',
];

/**
 * List of notable courses with shorter names for mobile view
 */
const coursesShort = [
  'Parallel and Sequential DS & Algos',
  'Foundations of SWE',
  'Software Construction',
  'Imperative Computation',
  'Computer Systems',
  'Great Ideas in Theoretical CS',
  'Functional Programming',
  'Math Foundations for CS',
];

/**
 * Campus activities
 */
const activities = ['Acts2Fellowship', 'SALSA', 'Grappling Club'];

/**
 * EducationSection - Displays academic background and notable details
 */
export default function EducationSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="pt-2 sm:pt-2.5 md:pt-3 pb-5 sm:pb-6 md:pb-7">
      <SectionHeader title="Education" />

      <div className={`relative h-[235px] perspective flip-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Flip card Container */}
        <div className="flip-card-inner">
          {/* Front Side */}
          <div
            className="
              flip-card-front bg-white rounded-xl shadow-sm border border-gray-200
              pb-4 sm:pb-5 md:pb-6 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 md:pt-5
              cursor-pointer hover:shadow-md active:shadow-md transition-all duration-300
            "
            onClick={() => setIsFlipped(true)}
          >
            <div className="flex items-start">
              {/* University logo */}
              <div className="flex-shrink-0 mt-5">
                <Image
                  src="/images/logos/cmu_logo.jpg"
                  alt="CMU Logo"
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[70px] md:h-[70px] rounded-lg"
                />
              </div>

              {/* University info */}
              <div className="ml-3 sm:ml-4 md:ml-5 flex-grow text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    Carnegie Mellon University
                  </h3>
                  <span className="text-gray-600 text-sm sm:text-base -mt-2 md:mt-2.5">
                    Aug 2023 - May 2027
                  </span>
                </div>

                <p className="text-indigo-600 font-medium mt-1 text-base sm:text-lg">
                  B.S. in Computer Science
                </p>

                <p className="hidden sm:block text-gray-700 text-sm sm:text-base">
                  Concentration in SWE • Minor in Social & Political History
                </p>
                <p className="sm:hidden text-gray-700 text-sm">Concentration in SWE</p>
                <p className="sm:hidden text-gray-700 text-sm">
                  Minor in Social & Political History
                </p>

                <div className="flex items-center mt-3 sm:mt-4">
                  <span className="bg-indigo-50 text-indigo-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-medium">
                    QPA: 3.54
                  </span>
                </div>
              </div>
            </div>

            {/* Flip indicator */}
            <div
              className="
                absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-indigo-600 bg-gray-50 rounded-full
                flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 shadow-sm border border-gray-100
                hover:bg-indigo-50 active:bg-indigo-50 hover:scale-105 active:scale-105 transition-all duration-200
              "
            >
              <span className="text-xs sm:text-sm">Details</span>
              <Icon name="flip-right" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>

          {/* Back Side */}
          <div
            className="
              flip-card-back bg-white rounded-xl shadow-sm border border-gray-200
              pb-4 sm:pb-5 md:pb-6 px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 md:pt-5
              cursor-pointer hover:shadow-md active:shadow-md transition-all duration-300 text-left
            "
            onClick={() => setIsFlipped(false)}
          >
            <div className="flex h-full sm:pl-2">
              {/* Campus Involvement - Hidden on mobile, visible on larger screens */}
              <div className="hidden sm:block w-[20%]">
                <h4 className="text-gray-800 text-base mb-3 tracking-wider">Campus Involvement</h4>
                <ul className="space-y-3">
                  {activities.map((activity) => (
                    <li key={activity} className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span className="text-gray-700 text-sm font-medium">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Separator - hidden on mobile, visible on larger screens */}
              <div className="hidden sm:block w-[10%] w-px bg-gray-100 ml-8 md:ml-10 mr-9 md:mr-12"></div>

              {/* Coursework - Full width on mobile, 70% on larger screens */}
              <div className="sm:w-[70%]">
                <h4 className="text-gray-800 text-sm sm:text-base mb-2 sm:mb-3 tracking-wider">
                  Coursework
                </h4>

                {/* Desktop view courses */}
                <div className="hidden sm:flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="inline-block px-3 py-1 mb-1.5 text-xs bg-gray-100 text-gray-700 font-medium rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                {/* Mobile view courses (shorter names) */}
                <div className="sm:hidden flex flex-wrap gap-1.5">
                  {coursesShort.map((course) => (
                    <span
                      key={course}
                      className="inline-block px-2 py-0.5 mb-1.5 text-[10px] bg-gray-100 text-gray-700 font-medium rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Back indicator */}
            <div
              className="
                absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-indigo-600 bg-gray-50 rounded-full
                flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 shadow-sm border border-gray-100
                hover:bg-indigo-50 active:bg-indigo-50 hover:scale-105 active:scale-105 transition-all duration-200
              "
            >
              <span className="text-xs sm:text-sm">Back</span>
              <Icon name="flip-left" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
