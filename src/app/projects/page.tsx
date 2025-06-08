import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectsPage() {
  // Define project data
  const projects = [
    {
      title: 'Hive',
      description:
        'Developed a full-stack Hive game with a Python backend (FastAPI) and React frontend. Implemented modular MVC architecture, REST API, and responsive UI with advanced game logic.',
      tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'REST APIs', 'Poetry', 'Pytest'],
      links: [
        { label: 'GitHub Repo', url: 'https://github.com/estulpz202/hive-game' },
        { label: 'Demo Video', url: 'https://www.loom.com/share/97c65783f69949c595e1f93234da9af1' },
      ],
    },
    {
      title: 'Recruiting AI Agent',
      description:
        'Contributing to an LLM-powered chatbot for PFLL recruitment. Leading backend development with Mastra, Firebase integration, API design, and CI/CD workflows.',
      tech: ['TypeScript', 'Firebase', 'Docker', 'LLM', 'Mastra', 'GitHub Actions'],
      links: [],
    },
    {
      title: 'Santorini',
      description:
        'Built a full-stack Santorini game with a Java backend and React frontend. Designed comprehensive technical documentation and extensible architecture.',
      tech: ['Java', 'React', 'TypeScript', 'NanoHTTPD', 'UML'],
      links: [
        { label: 'Demo Video', url: 'https://www.loom.com/share/0322bac9ec2d42238ad54261231d5f29' },
      ],
    },
    {
      title: 'The Pack',
      description:
        'Developed an iOS app to help dog owners track and manage pet care. Led development with Swift in Xcode, focusing on UI and user experience.',
      tech: ['Swift', 'Xcode', 'GitHub'],
      links: [
        { label: 'GitHub Repo', url: 'https://github.com/pflc3/ThePackApp' },
        {
          label: 'Demo Video',
          url: 'https://www.loom.com/share/3ef12a5b6511473c98ca58ffe85ad8f7?sid=d4634914-4af4-45fd-982e-2447691a2b84',
        },
      ],
    },
  ];

  return (
    <main>
      <Container>
        <section className="py-12">
          <SectionHeader title="Projects" />
          <p className="text-base text-gray-700 mb-6">
            Below are a few selected projects that showcase my technical skills and engineering
            experience. These projects demonstrate my work across fullstack systems, AI, game
            development, and iOS apps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                links={project.links}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
