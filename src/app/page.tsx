import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';

export default function HomePage() {
  return (
    <main>
      <Container>
        {/* Hero / Intro */}
        <section className="py-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Estuardo Lopez</h1>
          <p className="text-lg text-gray-600">
            Computer Science @ CMU | SWE Concentration & History Minor
          </p>
        </section>

        {/* About Preview Section */}
        <section className="py-12">
          <SectionHeader title="About Me" />
          <p className="text-base text-gray-700">
            I'm a Computer Science student passionate about building meaningful software, with a strong
            foundation in systems programming, algorithms, fullstack development, and impactful projects.
          </p>
        </section>

        {/* Projects Preview Section */}
        <section className="py-12">
          <SectionHeader title="Projects" />
          <p className="text-base text-gray-700">
            Explore my portfolio of fullstack applications, AI agents, game development, and more.
          </p>
        </section>
      </Container>
    </main>
  );
}
