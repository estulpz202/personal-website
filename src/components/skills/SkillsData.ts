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
    ],
  },
  {
    title: 'Fullstack',
    skills: [
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Firebase', icon: 'firebase' },
      // { name: 'Node.js', icon: 'nodejs' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'SwiftUI', icon: 'swiftui' },
      // { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      { name: 'GitHub', icon: 'github' },
      { name: 'Agile & Scrum', icon: 'scrum' },
      { name: 'LLM API', icon: 'llmapi' },
      { name: 'DevOps', icon: 'devops' },
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
      { name: 'JavaScript' },
      { name: 'HTML/CSS' },
      { name: 'Swift' },
      { name: 'Standard ML' },
    ],
  },
  tech: {
    title: 'Frameworks & Technologies',
    skills: [
      { name: 'FastAPI' },
      { name: 'RESTful APIs' },
      { name: 'Next.js' },
      { name: 'React' },
      // { name: 'Node.js' },
      { name: 'Firebase' },
      { name: 'SwiftUI' },
      { name: 'LLM APIs' },
      { name: 'Tailwind CSS' },
    ],
  },
  tools: {
    title: 'Tools & Practices',
    skills: [
      { name: 'GitHub' },
      { name: 'Agile + Scrum' },
      { name: 'CI/CD' },
      { name: 'CLI Tools' },
      { name: 'Test + Debug' },
      { name: 'DevOps' },
      { name: 'UI/UX Principles' },
      // { name: 'Package Managers' },
      { name: 'Docker' },
    ],
  },
  cs_soft: {
    title: 'CS & Soft Skills',
    skills: [
      { name: 'OOP' },
      { name: 'Functional Prog.' },
      { name: 'DS + Algos' },
      { name: 'Basic Networking' },
      { name: 'Communication' },
      { name: 'Collaboration' },
      { name: 'Adaptability' },
      { name: 'Organization' },
    ],
  },
};
