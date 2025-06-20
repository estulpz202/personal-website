/**
 * ProjectCategory - Types of projects
 */
export type ProjectCategory = 'fullstack' | 'ai' | 'web' | 'mobile';

/**
 * Project - Core project data structure
 */
export interface Project {
  slug: string; // URL-friendly identifier
  title: string; // Project name
  subtitle: string; // Short tagline
  description: string; // Brief project overview
  imageUrl: string; // Main project image
  bannerImageUrl: string; // Banner image for detail page
  category: ProjectCategory[]; // Project categories for filtering
  tech: string[]; // Technologies used
  highlights: string[]; // Key accomplishments/features
  links: {
    // External links
    label: string;
    url: string;
    icon?: string;
  }[];
  timeline: string; // Timeline of the project
  organization: string; // Organization or context
}

/**
 * Projects data for portfolio display
 */
export const projects: Project[] = [
  {
    slug: 'hive',
    title: 'Hive',
    subtitle: 'Strategic Board Game',
    description:
      'A Python and React fullstack implementation of Hive. Features a responsive UI, modular backend, and advanced game logic.',
    imageUrl: '/images/projects/hive.jpg',
    bannerImageUrl: '/images/projects/hive_banner.jpg',
    category: ['fullstack'],
    tech: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'RESTful APIs',
      'Pytest',
      'HTML/CSS',
      'Poetry',
    ],
    highlights: [
      'Developed a fullstack Hive game with a Python backend (FastAPI, Pytest, Poetry) and React (TypeScript) frontend',
      'Used a modular MVC-style system with separation between game logic, API endpoints, and UI',
      'Managed robust REST API design and scalable game state with clear schemas',
      'Implemented turn-based gameplay with a responsive hex grid, drag/zoom, action highlights, and graph-based logic',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/estulpz202/hive-game', icon: 'github' },
      {
        label: 'Demo',
        url: 'https://vimeo.com/1094803625',
        icon: 'video',
      },
    ],
    timeline: 'April 2025 - May 2025',
    organization: 'Personal Project',
  },
  {
    slug: 'gcode-agent',
    title: 'Gcode Agent',
    subtitle: 'LLM Recruitment Chatbot',
    description:
      "An AI assistant built with the Mastra framework to support PFLL's student outreach efforts.",
    imageUrl: '/images/projects/gcode_agent.jpg',
    bannerImageUrl: '/images/projects/gcode_agent_banner.jpg',
    category: ['ai'],
    tech: ['Mastra', 'LLM', 'CI/CD', 'TypeScript', 'Docker', 'GitHub Actions', 'RAG'],
    highlights: [
      'Worked under mentorship to improve backend architecture and DevOps workflows for an LLM-powered chatbot',
      'Explored Mastra and behavior-based design patterns using retrieval-augmented generation (RAG)',
      'Built experience with Docker, Codespaces, and GitHub Actions for local development, testing, and CI',
    ],
    links: [],
    timeline: 'March 2025 - May 2025',
    organization: 'PFLL',
  },
  {
    slug: 'personal-website',
    title: 'Personal Website',
    subtitle: 'Developer Showcase',
    description:
      'A fully responsive site built with Next.js and Tailwind CSS to highlight my work, skills, and personal story.',
    imageUrl: '/images/projects/website.jpg',
    bannerImageUrl: '/images/projects/website_banner.jpg',
    category: ['web'],
    tech: ['Next.js', 'Tailwind CSS', 'Vercel', 'React', 'TypeScript', 'UI/UX'],
    highlights: [
      'Built with Next.js App Router for fast routing, SEO optimization, and layout control',
      'Styled using Tailwind CSS utility classes for a consistent, modern, and responsive design',
      'Deployed with Vercel and developed reusable React components, dynamic routing, and smooth animations',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/estulpz202/personal-website', icon: 'github' },
    ],
    timeline: 'May 2025 - June 2025',
    organization: 'Personal Project',
  },
  {
    slug: 'santorini',
    title: 'Santorini',
    subtitle: 'Strategic Board Game',
    description:
      'Santorini with a Java backend and React frontend, supported by detailed UML documentation and scalable software design.',
    imageUrl: '/images/projects/santorini.jpg',
    bannerImageUrl: '/images/projects/santorini_banner.jpg',
    category: ['fullstack'],
    tech: ['Java', 'NanoHTTPD', 'React', 'TypeScript', 'UML'],
    highlights: [
      'Built a fullstack Santorini game using a Java backend (NanoHTTPD) and React (TypeScript) frontend',
      'Designed a scalable, testable system using SWE best practices and clean API architecture',
      'Authored comprehensive UML documentation, including class diagrams, sequence diagrams, and domain/object models',
      'Private repository per academic policy — available upon request at elopezle@andrew.cmu.edu',
    ],
    links: [
      {
        label: 'Demo',
        url: 'https://vimeo.com/1094829961',
        icon: 'video',
      },
    ],
    timeline: 'March 2025 - April 2025',
    organization: 'CMU 17-214',
  },
  {
    slug: 'the-pack',
    title: 'The Pack',
    subtitle: 'iOS Pet Care App',
    description:
      'An  app built with Swift to help dog owners stay on top of pet care, developed in collaboration with a student team.',
    imageUrl: '/images/projects/thepack.jpg',
    bannerImageUrl: '/images/projects/thepack_banner.jpg',
    category: ['mobile'],
    tech: ['Swift', 'UI/UX Design', 'Xcode', 'GitHub', 'Leadership'],
    highlights: [
      'Led development of an iOS app for tracking and organizing daily pet care tasks',
      'Mentored high school students through the full app lifecycle, from ideation to implementation',
      'Developed in Swift with Xcode, focusing on clean UI, readable code, and team collaboration through GitHub Projects',
      'Adapted workflows to fit student experience, prioritizing results over strict GitHub conventions',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/pflc3/ThePackApp', icon: 'github' },
      {
        label: 'Demo',
        url: 'https://vimeo.com/1094857073',
        icon: 'video',
      },
    ],
    timeline: 'June 2024 - Aug 2024',
    organization: 'PFLL',
  },
];

/**
 * Get all project categories for filtering
 */
export function getProjectCategories(): { id: ProjectCategory; label: string }[] {
  const categories: ProjectCategory[] = ['fullstack', 'ai', 'web', 'mobile'];
  const labels: Record<ProjectCategory, string> = {
    fullstack: 'Fullstack',
    ai: 'AI & ML',
    web: 'Web Development',
    mobile: 'Mobile',
  };

  return categories.map((cat) => ({
    id: cat,
    label: labels[cat],
  }));
}
