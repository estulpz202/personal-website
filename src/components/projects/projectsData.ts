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
      'A Python and React fullstack implementation of Hive, featuring a responsive UI, modular backend, and advanced game logic.',
    imageUrl: '/images/projects/hive.jpg',
    bannerImageUrl: '/images/projects/hive_banner.jpg',
    category: ['fullstack'],
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'REST APIs', 'Pytest', 'Poetry'],
    highlights: [
      'Developed a fullstack Hive game with a Python backend (FastAPI, Pytest, Poetry) and React (TypeScript) frontend',
      'Designed a modular MVC-style system with separation between game logic, API endpoints, and UI',
      'Managed robust REST API design and scalable game state with clear schemas',
      'Implemented turn-based gameplay with a responsive hex grid, drag/zoom, action highlights, and graph-based movement logic',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/estulpz202/hive-game', icon: 'github' },
      {
        label: 'Demo',
        url: 'https://www.loom.com/share/97c65783f69949c595e1f93234da9af1',
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
      'An AI recruitment agent built with Mastra. Focused on backend behavior, DevOps workflows, and LLM features like retrieval-augmented generation.',
    imageUrl: '/images/projects/gcode_agent.jpg',
    bannerImageUrl: '/images/projects/gcode_agent_banner.jpg',
    category: ['ai'],
    tech: ['Mastra', 'LLM', 'CI/CD', 'TypeScript', 'GitHub Actions', 'Docker', 'Codespaces'],
    highlights: [
      'Explored the Mastra framework and gained exposure to behavior-driven backend design with LLMs and RAG',
      'Gained hands-on experience with Docker, Codespaces, and GitHub Actions for development, testing, and CI',
      'Worked under mentorship to understand modular backend design and infrastructure setup in an AI agent context',
    ],
    links: [],
    timeline: 'March 2025 - May 20255',
    organization: 'PFLL',
  },
  {
    slug: 'personal-website',
    title: 'Personal Website',
    subtitle: 'Modern Portfolio Site',
    description:
      'A responsive personal portfolio website built with Next.js and Tailwind CSS, featuring a clean design, project showcase, and contact functionality.',
    imageUrl: '/images/projects/website.jpg',
    bannerImageUrl: '/images/projects/website_banner.jpg',
    category: ['web'],
    tech: ['Next.js', 'Tailwind CSS', 'Vercel', 'React', 'TypeScript'],
    highlights: [
      'Designed and developed a responsive portfolio website with a modern, minimalist aesthetic',
      'Implemented with Next.js and App Router for improved SEO and performance',
      'Utilized Tailwind CSS for responsive design and consistent styling',
      'Created custom components for project showcase, skills visualization, and navigation',
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
      'Built Santorini with a Java backend and React frontend, supported by comprehensive technical documentation.',
    imageUrl: '/images/projects/santorini.jpg',
    bannerImageUrl: '/images/projects/santorini_banner.jpg',
    category: ['fullstack'],
    tech: ['Java', 'NanoHTTPD', 'UML', 'React', 'TypeScript'],
    highlights: [
      'Built a fullstack Santorini game with a Java backend (NanoHTTPD) and a React (TypeScript) frontend',
      'Authored comprehensive technical documentation, including UML class diagrams, object/domain models, and sequence diagrams to support future extensibility',
      'Private repository per academic policy. Access available upon request at elopezle@andrew.cmu.edu',
    ],
    links: [
      {
        label: 'Demo',
        url: 'https://www.loom.com/share/0322bac9ec2d42238ad54261231d5f29',
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
      'An intuitive iOS app built with Swift to help users manage and track pet care routines. Developed with a student team.',
    imageUrl: '/images/projects/thepack.jpg',
    bannerImageUrl: '/images/projects/thepack_banner.jpg',
    category: ['mobile'],
    tech: ['Swift', 'UI/UX Design', 'Xcode', 'GitHub', 'Leadership'],
    highlights: [
      'Developed an iOS app called The Pack to help dog owners track, learn about, and manage pet care',
      'Led development using Swift in Xcode, utilizing GitHub for version control and task management',
      'Prioritized results over strict GitHub best practices due to team experience level and timeline',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/pflc3/ThePackApp', icon: 'github' },
      {
        label: 'Demo',
        url: 'https://www.loom.com/share/3ef12a5b6511473c98ca58ffe85ad8f7?sid=d4634914-4af4-45fd-982e-2447691a2b84',
        icon: 'video',
      },
    ],
    timeline: 'June 2024 - August 2024',
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
