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
      'Designed curriculum for 30 high school students covering CS fundamentals, hardware concepts, and mobile app development',
      'Guided student teams through complete development cycles from concept to deployment',
      'Taught UI/UX principles, Swift programming, and version control for <a href="/projects/the-pack" class="text-indigo-600 hover:text-indigo-800 transition-colors">The Pack</a> app',
    ],
    skills: ['Swift', 'GitHub', 'SDLC', 'Communication', 'Team Management'],
  },
];
