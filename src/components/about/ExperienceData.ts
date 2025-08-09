import { Experience } from './ExperienceCard';

/**
 * Professional experience data
 */
export const experiences: Experience[] = [
  {
    title: 'CS and Mobile Development Instructor',
    shortTitle: 'CS & Mobile Dev Instructor',
    company: 'Prime Factors Learning Lab',
    companyUrl: 'https://primefactors.org/',
    timePeriod: 'Summer 2025',
    logoSrc: '/images/logos/pfl_logo.jpg',
    highlights: [
      'Created and taught a comprehensive program for 30 students, covering binary systems, data structures, GitHub workflows, and mobile app development using Swift and Python',
      'Guided a student team in developing a fullstack iOS application with backend integration, aiming for App Store release (<a href="/projects/gcode-academy" class="link">Gcode Academy</a>)',
    ],
    skills: ['SwiftUI', 'Fullstack', 'Python', 'GitHub'],
  },
  {
    title: 'CS and Mobile Development Instructor',
    shortTitle: 'CS & Mobile Dev Instructor',
    company: 'Prime Factors Learning Lab',
    companyUrl: 'https://primefactors.org/',
    timePeriod: 'Summer 2024',
    logoSrc: '/images/logos/pfl_logo.jpg',
    highlights: [
      'Taught core CS and mobile dev, guiding a team in creating a frontend iOS app prototype (<a href="/projects/the-pack" class="link">The Pack</a>)',
    ],
    skills: ['SwiftUI', 'Communication'],
  },
];
