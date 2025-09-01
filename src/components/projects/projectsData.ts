/**
 * ProjectCategory - Types of projects
 */
export type ProjectCategory = 'fullstack' | 'ai' | 'web' | 'mobile';

/**
 * Project - Core project data structure
 */
export interface Project {
  slug: string; // URL-friendly identifier
  aliases?: string[]; // Optional alternate slugs that should route to this project
  title: string; // Project name
  subtitle: string; // Short tagline
  description: string; // Brief project overview
  imageUrl: string; // Main project image
  bannerImageUrl: string; // Banner image for detail page
  centerImage: boolean; // Whether to center the image display instead of aligning to top
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
  shortTimeline: string; // Shortened timeline for medium screens
  organization: string; // Organization or context
}

/**
 * Projects data for portfolio display
 */
export const projects: Project[] = [
  {
    slug: 'swift-academy',
    aliases: ['gcode-academy'],
    title: 'Swift Academy',
    subtitle: 'Educational iOS App',
    description:
      'A learning platform making Swift and iOS development accessible through a progression-based path with integrated AI assistance.',
    imageUrl: '/images/projects/swift_academy.jpg',
    bannerImageUrl: '/images/projects/swift_academy_banner.jpg',
    centerImage: true,
    category: ['mobile', 'ai', 'fullstack'],
    tech: ['SwiftUI', 'Python', 'FastAPI', 'OpenAI API', 'UI/UX', 'GitHub'],
    highlights: [
      'Created a Swift education app with a visually distinctive zig-zag lesson path, planned for App Store release',
      'Integrated an AI Code Coach using Python, FastAPI, and OpenAI API for personalized programming support',
      'Applied a modular MVVM architecture for scalability and clear separation of concerns',
      'Built a modern authentication system with animated visuals and a smooth user experience',
    ],
    links: [
      { label: 'Frontend GitHub', url: 'https://github.com/pflc3/swift-academy', icon: 'github' },
      {
        label: 'Backend GitHub',
        url: 'https://github.com/pflc3/swift-academy-agent',
        icon: 'github',
      },
    ],
    timeline: 'June 2025 - Present',
    shortTimeline: 'Jun 2025 - Present',
    organization: 'PFLL',
  },
  {
    slug: 'hive',
    title: 'Hive',
    subtitle: 'Strategic Board Game',
    description:
      'A Python and React fullstack implementation of Hive. Features a responsive UI, modular backend, and advanced game logic.',
    imageUrl: '/images/projects/hive.jpg',
    bannerImageUrl: '/images/projects/hive_banner.jpg',
    centerImage: false,
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
    shortTimeline: 'Apr - May 2025',
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
    centerImage: false,
    category: ['ai'],
    tech: ['Mastra', 'LLM', 'CI/CD', 'TypeScript', 'Docker', 'GitHub Actions', 'RAG'],
    highlights: [
      'Worked under mentorship to improve backend architecture and DevOps workflows for an LLM-powered chatbot',
      'Explored Mastra and behavior-based design patterns using retrieval-augmented generation (RAG)',
      'Built experience with Docker, Codespaces, and GitHub Actions for local development, testing, and CI',
    ],
    links: [],
    timeline: 'March 2025 - May 2025',
    shortTimeline: 'Mar - May 2025',
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
    centerImage: false,
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
    shortTimeline: 'May - Jun 2025',
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
    centerImage: true,
    category: ['fullstack'],
    tech: ['Java', 'NanoHTTPD', 'React', 'TS', 'UML'],
    highlights: [
      'Built a fullstack Santorini game with a Java backend (NanoHTTPD) and React (TypeScript) frontend',
      'Implemented scalable, testable architecture with clean APIs and detailed UML documentation (class diagrams, sequence diagrams, domain/object models)',
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
    shortTimeline: 'Mar - Apr 2025',
    organization: 'CMU 17-214',
  },
  {
    slug: 'the-pack',
    title: 'The Pack',
    subtitle: 'Pet Care iOS App',
    description:
      'An iOS frontend prototype built with SwiftUI to help dog owners manage pet care, created in collaboration with a student team.',
    imageUrl: '/images/projects/thepack.jpg',
    bannerImageUrl: '/images/projects/thepack_banner.jpg',
    centerImage: true,
    category: ['mobile'],
    tech: ['SwiftUI', 'GitHub', 'Xcode', 'Leadership'],
    highlights: [
      'Led development of a pet care tracking app, from ideation to a polished frontend',
      'Mentored high school students in Swift, Xcode, UI/UX design, and GitHub collaboration',
      'Focused on clean UI, maintainable code, and adaptable workflows to match student experience levels',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/pflc3/ThePackApp', icon: 'github' },
      { label: 'Demo', url: 'https://vimeo.com/1094857073', icon: 'video' },
    ],
    timeline: 'June 2024 - Aug 2024',
    shortTimeline: 'Jun - Aug 2024',
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
