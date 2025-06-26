import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

/**
 * Type definition for experience data
 */
export type Experience = {
  title: string;
  shortTitle: string;
  company: string;
  companyUrl?: string;
  timePeriod: string;
  logoSrc: string;
  highlights: string[];
  skills: string[];
};

interface ExperienceCardProps {
  experience: Experience;
}

/**
 * ExperienceCard - Reusable component for displaying professional experiences
 */
export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { title, shortTitle, company, companyUrl, timePeriod, logoSrc, highlights, skills } =
    experience;

  return (
    <div
      className="
        bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-indigo-100
        pb-4 px-4 pt-0 sm:pb-5 sm:px-5 sm:pt-1 md:pb-6 md:px-6 md:pt-2
      "
    >
      <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-5 md:gap-6">
        {/* Logo & Title/Company */}
        <div className="flex flex-row gap-4 md:gap-0">
          {/* Logo */}
          <div className="flex-shrink-0 mt-5">
            <Image
              src={logoSrc}
              alt={`${company} Logo`}
              width={55}
              height={55}
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[70px] md:h-[70px] rounded-xl"
            />
          </div>

          {/* Title and Company - Only on smaller screens */}
          <div className="md:hidden flex flex-col justify-center">
            <h3 className="text-lg font-bold text-gray-800">{shortTitle}</h3>
            {companyUrl ? (
              <Link
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link font-medium flex items-center gap-1 text-sm"
              >
                {company}
                <Icon name="external-link" className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <span className="text-indigo-600 font-medium text-sm">{company}</span>
            )}
          </div>
        </div>

        <div className="flex-grow w-full">
          {/* Title/Company & TimePeriod - Only on larger screens */}
          <div className="hidden md:flex flex-row items-center justify-between mb-3">
            {/* Title and Company */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              <div className="mt-1.5">
                {companyUrl ? (
                  <Link
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link font-medium flex items-center gap-1 text-[15px]"
                  >
                    {company}
                    <Icon name="external-link" className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-indigo-600 font-medium text-[15px]">{company}</span>
                )}
              </div>
            </div>

            {/* TimePeriod Badge */}
            <span className="bg-white mb-2 px-3 py-1 rounded-full text-gray-700 text-[14.5px] border border-indigo-100 inline-flex items-center">
              <Icon name="calendar" className="w-4 h-4 mr-2 text-indigo-600" />
              {timePeriod}
            </span>
          </div>

          {/* Experience highlights */}
          <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-0.5 sm:mt-0">•</span>
                <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: highlight }} />
              </li>
            ))}
          </ul>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-white text-indigo-600 rounded-full border border-indigo-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
