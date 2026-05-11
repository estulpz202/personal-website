import { Experience } from './ExperienceCard';

/**
 * Professional experience data
 */
export const experiences: Experience[] = [
  {
    title: 'Technology Developer Intern',
    shortTitle: 'Tech Developer Intern',
    company: 'Barclays',
    companyUrl: 'https://search.jobs.barclays/internships-technology',
    timePeriod: 'Summer 2026',
    logoSrc: '/images/logos/bcs_logo.svg',
    highlights: [
      'Incoming Technology Developer Intern at Barclays for Summer 2026, working within a global fintech environment.',
    ],
    skills: ['FinTech', 'Backend', 'Scale', 'Collaboration'],
  },
  {
    title: 'CS and Mobile Development Instructor',
    shortTitle: 'CS & Mobile Dev Instructor',
    company: 'Prime Factors Learning Lab',
    companyUrl: 'https://primefactors.org/',
    timePeriod: 'Summer 2024 & 2025',
    logoSrc: '/images/logos/pfl_logo.jpg',
    highlights: [
      'Designed and taught a full CS curriculum across two summers for 30+ students, covering binary systems, data structures, Git workflows, and mobile development with Swift and Python',
      'Led a student team in building a fullstack iOS application with backend integration, aiming for App Store release (<a href="/projects/swift-academy" class="link">Swift Academy</a>)',
    ],
    skills: ['SwiftUI', 'Fullstack', 'Python', 'GitHub'],
  },
  // {
  //   title: 'CS and Mobile Development Instructor',
  //   shortTitle: 'CS & Mobile Dev Instructor',
  //   company: 'Prime Factors Learning Lab',
  //   companyUrl: 'https://primefactors.org/',
  //   timePeriod: 'Summer 2024',
  //   logoSrc: '/images/logos/pfl_logo.jpg',
  //   highlights: [
  //     'Taught core CS and mobile dev, guiding a team in creating a frontend iOS app prototype (<a href="/projects/the-pack" class="link">The Pack</a>)',
  //   ],
  //   skills: ['SwiftUI', 'Communication'],
  // },
];
