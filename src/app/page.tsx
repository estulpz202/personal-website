import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';

export default function HomePage() {
  return (
    <main>
      <Container>
        {/* Hero / Intro */}
        <section className="py-12 text-center fade-in-up">
          <h1 className="text-5xl font-extrabold mb-4">Estuardo Lopez</h1>
          <p className="text-lg text-gray-600">
            Computer Science @ CMU | SWE Concentration & History Minor
          </p>
        </section>

        {/* About Preview Section */}
        <section className="py-12 fade-in-up">
          <SectionHeader title="About Me" />
          <p className="text-base text-gray-700">
            I'm a Computer Science student passionate about building meaningful software, with a
            strong foundation in systems programming, algorithms, fullstack development, and
            impactful projects. I thrive in purpose-driven teams and enjoy contributing to software
            with real-world impact.
          </p>
        </section>

        {/* Projects Preview Section */}
        <section className="py-12 fade-in-up">
          <SectionHeader title="Projects" />
          <p className="text-base text-gray-700">
            Explore my portfolio of fullstack applications, AI agents, game development, and more.
            These projects showcase my technical skills and collaborative engineering experience.
          </p>
        </section>
      </Container>
    </main>
  );
}
