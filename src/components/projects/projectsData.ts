/**
 * Comprehensive project data for the portfolio.
 * Contains detailed information about each project.
 * This data is used on both the projects page and individual project detail pages.
 */
export const projects = [
  {
    slug: 'hive',
    title: 'Hive',
    description:
      'Developed a full-stack Hive game with a Python backend (FastAPI) and React frontend. Implemented modular MVC architecture, REST API, and responsive UI with advanced game logic.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'REST APIs', 'Poetry', 'Pytest'],
    highlights: [
      'Developed a full-stack Hive game with a Python backend (FastAPI, Pytest, Poetry) and React (TypeScript) frontend.',
      'Designed a modular MVC-style system with separation between game logic, API endpoints, and UI.',
      'Managed robust REST API design and scalable game state with clear schemas.',
      'Implemented turn-based gameplay with a responsive hex grid, drag/zoom, action highlights, and graph-based movement logic.',
    ],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/estulpz202/hive-game' },
      { label: 'Demo Video', url: 'https://www.loom.com/share/97c65783f69949c595e1f93234da9af1' },
    ],
  },
  {
    slug: 'recruiting-ai-agent',
    title: 'Recruiting AI Agent',
    description:
      'Contributing to an LLM-powered chatbot for PFLL recruitment. Leading backend development with Mastra, Firebase integration, API design, and CI/CD workflows.',
    tech: ['TypeScript', 'Firebase', 'Docker', 'LLM', 'Mastra', 'GitHub Actions'],
    highlights: [
      'Contributing to an LLM-powered chatbot built with the Mastra framework (TypeScript) for PFLL recruitment.',
      'Leading backend development under mentorship, focusing on system architecture, UML design, Firebase integration, API development, and frontend-backend connectivity.',
      'Utilizes Docker, Codespaces, Vitest, and GitHub Actions for reproducibility, testing, and CI/CD.',
    ],
    links: [],
  },
  {
    slug: 'santorini',
    title: 'Santorini',
    description:
      'Built a full-stack Santorini game with a Java backend and React frontend. Designed comprehensive technical documentation and extensible architecture.',
    tech: ['Java', 'React', 'TypeScript', 'NanoHTTPD', 'UML'],
    highlights: [
      'Built a full-stack Santorini game with a Java backend (NanoHTTPD) and a React (TypeScript) frontend.',
      'Authored comprehensive technical documentation, including UML class diagrams, object/domain models, and sequence diagrams to support future extensibility.',
      'Private repository per academic policy. Access available upon request at elopezle@andrew.cmu.edu.',
    ],
    links: [
      { label: 'Demo Video', url: 'https://www.loom.com/share/0322bac9ec2d42238ad54261231d5f29' },
    ],
  },
  {
    slug: 'the-pack',
    title: 'The Pack',
    description:
      'Developed an iOS app to help dog owners track and manage pet care. Led development with Swift in Xcode, focusing on UI and user experience.',
    tech: ['Swift', 'Xcode', 'GitHub'],
    highlights: [
      'Developed an iOS app called The Pack to help dog owners track, learn about, and manage pet care.',
      'Led development using Swift in Xcode, utilizing GitHub for version control and task management.',
      'Prioritized results over strict GitHub best practices due to team experience level and timeline.',
    ],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/pflc3/ThePackApp' },
      {
        label: 'Demo Video',
        url: 'https://www.loom.com/share/3ef12a5b6511473c98ca58ffe85ad8f7?sid=d4634914-4af4-45fd-982e-2447691a2b84',
      },
    ],
  },
];
