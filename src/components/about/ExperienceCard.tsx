import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

/**
 * Type definition for experience data
 */
export type Experience = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
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
  const { title, company, companyUrl, period, logoSrc, highlights, skills } = experience;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl pb-6 pl-6 pr-6 pt-2 border border-indigo-100">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Logo */}
        <div className="flex-shrink-0 mt-5">
          <Image
            src={logoSrc}
            alt={`${company} Logo`}
            width={70}
            height={70}
            className="rounded-xl"
          />
        </div>

        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <div className="mt-1.5">
                {companyUrl ? (
                  <Link
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors flex items-center gap-1 text-sm"
                  >
                    {company}
                    <Icon name="external-link" className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-indigo-600 font-medium text-sm">{company}</span>
                )}
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="bg-white px-3 py-1 rounded-full text-gray-700 text-sm border border-indigo-100 inline-flex items-center">
                <Icon name="calendar" className="w-3.5 h-3.5 mr-1.5 text-indigo-500" />
                {period}
              </span>
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-500 mr-2 mt-1">•</span>
                <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: highlight }} />
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-3 py-1 text-xs bg-white text-indigo-600 rounded-full border border-indigo-200"
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
