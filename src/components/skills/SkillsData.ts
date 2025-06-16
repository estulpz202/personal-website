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
    title: 'Full Stack',
    skills: [
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      { name: 'GitHub', icon: 'github' },
      { name: 'LLM API', icon: 'llmapi' },
      { name: 'DevOps', icon: 'devops' },
      { name: 'Testing', icon: 'testing' },
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
      { name: 'HTML/CSS' },
      { name: 'JavaScript' },
      { name: 'Swift' },
      { name: 'Standard ML' },
    ],
  },
  tech: {
    title: 'Technologies & Development',
    skills: [
      { name: 'FastAPI' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'REST API Design' },
      { name: 'React' },
      { name: 'LLM API Integration' },
      { name: 'System Design' },
      { name: 'Tailwind CSS' },
      { name: 'UI/UX Design' },
    ],
  },
  tools: {
    title: 'Tools & Practices',
    skills: [
      { name: 'GitHub' },
      { name: 'CI/CD' },
      { name: 'DevOps' },
      { name: 'Testing' },
      { name: 'Git' },
      { name: 'Command Line' },
      { name: 'Code Review' },
      { name: 'Package Managers' },
    ],
  },
  cs: {
    title: 'Computer Science',
    skills: [
      { name: 'Algorithms' },
      { name: 'Data Structures' },
      { name: 'Object-Oriented Programming' },
      { name: 'Functional Programming' },
      { name: 'Computer Architecture' },
      { name: 'Basic Networking' },
    ],
  },
  soft: {
    title: 'Soft Skills',
    skills: [
      { name: 'Communication' },
      { name: 'Collaboration' },
      { name: 'Adaptability' },
      { name: 'Organization' },
      { name: 'Leadership' },
      { name: 'Team Management' },
    ],
  },
};
