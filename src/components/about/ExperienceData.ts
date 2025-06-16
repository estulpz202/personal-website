import { Experience } from './ExperienceCard';

/**
 * Professional experience data
 */
export const experiences: Experience[] = [
  {
    title: 'CS and Mobile Development Instructor',
    company: 'Prime Factors Learning Lab',
    companyUrl: 'https://primefactors.org/',
    period: 'Summer 2024',
    logoSrc: '/PfL_logo.jpg',
    highlights: [
      'Designed CS curriculum for 30 high school students covering fundamentals, hardware, and mobile dev',
      'Taught UI/UX design, Swift programming, and Git version control best practices',
      'Led student team through full development cycle of <a href="/projects/the-pack" class="link">The Pack</a>, a dog care management app',
    ],
    skills: ['Swift', 'GitHub', 'SDLC', 'Communication', 'Team Management'],
  },
];
