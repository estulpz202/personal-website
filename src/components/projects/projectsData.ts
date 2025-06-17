/**
 * ProjectCategory - Types of projects
 */
export type ProjectCategory = 'fullstack' | 'ai' | 'mobile' | 'web';

/**
 * Project - Core project data structure
 */
export interface Project {
  slug: string; // URL-friendly identifier
  title: string; // Project name
  subtitle: string; // Short tagline
  description: string; // Brief project overview
  imageUrl: string; // Main project image
  category: ProjectCategory[]; // Project categories for filtering
  tech: string[]; // Technologies used
  highlights: string[]; // Key accomplishments/features
  links: {
    // External links
    label: string;
    url: string;
    icon?: string;
  }[];
  year: number; // When project was completed
}

/**
 * Projects data for portfolio display
 */
export const projects: Project[] = [
  {
    slug: 'personal-website',
    title: 'Personal Website',
    subtitle: 'Modern Portfolio with Next.js',
    description:
      'A responsive personal portfolio website built with Next.js and Tailwind CSS, featuring a clean design, project showcase, and contact functionality.',
    imageUrl: '/images/projects/website.jpg',
    category: ['web'],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Designed and developed a responsive portfolio website with a modern, minimalist aesthetic',
      'Implemented with Next.js and App Router for improved SEO and performance',
      'Utilized Tailwind CSS for responsive design and consistent styling',
      'Created custom components for project showcase, skills visualization, and navigation',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/estulpz202/personal-website', icon: 'github' },
    ],
    year: 2025,
  },
  {
    slug: 'hive',
    title: 'Hive',
    subtitle: 'Strategic Board Game Implementation',
    description:
      'A full-stack implementation of the award-winning Hive board game with a Python backend and React frontend, featuring responsive design and advanced game logic.',
    imageUrl: '/images/projects/hive.jpg',
    category: ['fullstack'],
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'REST APIs', 'Poetry', 'Pytest'],
    highlights: [
      'Developed a full-stack Hive game with a Python backend (FastAPI, Pytest, Poetry) and React (TypeScript) frontend',
      'Designed a modular MVC-style system with separation between game logic, API endpoints, and UI',
      'Managed robust REST API design and scalable game state with clear schemas',
      'Implemented turn-based gameplay with a responsive hex grid, drag/zoom, action highlights, and graph-based movement logic',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/estulpz202/hive-game', icon: 'github' },
      {
        label: 'Demo',
        url: 'https://www.loom.com/share/97c65783f69949c595e1f93234da9af1',
        icon: 'external-link',
      },
    ],
    year: 2025,
  },
  {
    slug: 'gcode-agent',
    title: 'Gcode Agent',
    subtitle: 'LLM-Powered Recruitment Chatbot',
    description:
      "An AI agent built with Mastra to support PFLL's recruiting efforts. Focused on backend behavior, DevOps workflows, and LLM features like retrieval-augmented generation.",
    imageUrl: '/images/projects/gcode_agent.jpg',
    category: ['ai'],
    tech: ['TypeScript', 'Docker', 'LLM', 'Mastra', 'GitHub Actions', 'Codespaces'],
    highlights: [
      'Explored the Mastra framework and gained exposure to behavior-driven backend design with LLMs and RAG',
      'Gained hands-on experience with Docker, Codespaces, and GitHub Actions for development, testing, and CI',
      'Worked under mentorship to understand modular backend design and infrastructure setup in an AI agent context',
    ],
    links: [],
    year: 2025,
  },
  {
    slug: 'santorini',
    title: 'Santorini',
    subtitle: 'Strategy Board Game Implementation',
    description:
      'A complete digital implementation of the Santorini board game with a Java backend and React frontend, featuring comprehensive technical documentation.',
    imageUrl: '/images/projects/santorini.jpg',
    category: ['fullstack'],
    tech: ['Java', 'React', 'TypeScript', 'NanoHTTPD', 'UML'],
    highlights: [
      'Built a full-stack Santorini game with a Java backend (NanoHTTPD) and a React (TypeScript) frontend',
      'Authored comprehensive technical documentation, including UML class diagrams, object/domain models, and sequence diagrams to support future extensibility',
      'Private repository per academic policy. Access available upon request at elopezle@andrew.cmu.edu',
    ],
    links: [
      {
        label: 'Demo',
        url: 'https://www.loom.com/share/0322bac9ec2d42238ad54261231d5f29',
        icon: 'external-link',
      },
    ],
    year: 2025,
  },
  {
    slug: 'the-pack',
    title: 'The Pack',
    subtitle: 'iOS Pet Care Management App',
    description:
      'An iOS application designed to help dog owners track, learn about, and manage pet care responsibilities with an intuitive user interface.',
    imageUrl: '/images/projects/the.png',
    category: ['mobile'],
    tech: ['Swift', 'Xcode', 'GitHub'],
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
        icon: 'external-link',
      },
    ],
    year: 2024,
  },
];

/**
 * Get all project categories with counts
 */
export function getProjectCategories(): { id: ProjectCategory; label: string; count: number }[] {
  const categories: ProjectCategory[] = ['fullstack', 'ai', 'mobile', 'web'];
  const labels: Record<ProjectCategory, string> = {
    fullstack: 'Full-Stack',
    ai: 'AI & ML',
    mobile: 'Mobile',
    web: 'Web Development',
  };

  return categories.map((cat) => ({
    id: cat,
    label: labels[cat],
    count: projects.filter((p) => p.category.includes(cat)).length,
  }));
}
