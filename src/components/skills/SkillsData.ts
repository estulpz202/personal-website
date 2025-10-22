/**
 * Type definitions for a single skill, category, and skills data
 */
export type Skill = {
  name: string;
  icon?: string; // Optional: icon name for the home page
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type SkillsDataType = Record<string, SkillCategory>;

/**
 * Home page skills data
 */
export const homeSkillsData: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Java', icon: 'java' },
      { name: 'C', icon: 'c' },
      { name: 'Swift', icon: 'swift' },
    ],
  },
  {
    title: 'Technologies',
    skills: [
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'SQL & MySQL', icon: 'mysql' },
      { name: 'Firebase', icon: 'firebase' },
      // { name: 'Node.js', icon: 'nodejs' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'SwiftUI', icon: 'swiftui' },
      // { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    title: 'Dev & Systems',
    skills: [
      { name: 'GitHub', icon: 'github' },
      { name: 'Agile & Scrum', icon: 'scrum' },
      { name: 'Data Pipelines & ETL', icon: 'data' },
      { name: 'DevOps (CI/CD, Docker)', icon: 'devops' },
      { name: 'LLMs', icon: 'llm' },
      // { name: 'Testing', icon: 'testing' },
    ],
  },
];

/**
 * Comprehensive skills data for the about page
 */
export const skillsData: SkillsDataType = {
  languages: {
    title: 'Programming Languages',
    skills: [
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'C' },
      { name: 'Swift' },

      { name: 'JavaScript' },
      { name: 'HTML/CSS' },
      { name: 'Standard ML' },
    ],
  },
  tech: {
    title: 'Technologies & Frameworks',
    skills: [
      { name: 'FastAPI' },
      { name: 'SQL + MySQL' },
      { name: 'Firebase' },
      { name: 'Next.js' },
      { name: 'SwiftUI' },

      { name: 'RESTful APIs' },
      { name: 'React' },
      { name: 'Tailwind CSS' },
      // { name: 'Node.js' },
    ],
  },
  dev: {
    title: 'Develeopment & Systems',
    skills: [
      { name: 'GitHub' },
      { name: 'Agile + Scrum' },
      { name: 'Data Pipelines + ETL' },
      { name: 'DevOps + CI/CD' },
      { name: 'Docker' },
      { name: 'LLMs' },

      { name: 'Test + Debug' },
      { name: 'UI/UX' },
      // { name: 'CLI Tools' },
      // { name: 'Package Managers' },
    ],
  },
  core_team: {
    title: 'CS Core & Teamwork',
    skills: [
      { name: 'OOP' },
      { name: 'DS + Algos' },
      { name: 'Design Principles' },
      { name: 'Functional Prog.' },

      { name: 'Communication' },
      { name: 'Collaboration' },
      { name: 'Adaptability' },
      { name: 'Organization' },
    ],
  },
};
