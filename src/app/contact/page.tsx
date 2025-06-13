import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';

/**
 * ContactPage - Professional contact information
 *
 * Provides various ways to connect, including email, social profiles,
 * and location. Serves as a straightforward way for visitors to reach out.
 */
export default function ContactPage() {
  return (
    <main>
      <Container>
        <section className="py-12 fade-in-up">
          <SectionHeader title="Contact" />

          {/* Introductory message */}
          <p className="text-base text-gray-700 mb-6">
            Thanks for visiting my portfolio. If you'd like to get in touch — whether about
            opportunities, projects, or just to connect — feel free to reach out. I'm always happy
            to chat.
          </p>

          {/* Contact information */}
          <div className="text-base text-gray-700 mb-6">
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:elopezle@andrew.cmu.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                elopezle@andrew.cmu.edu
              </a>
            </p>

            <p className="mb-2">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/estuardo-lopez-letona"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                linkedin.com/in/estuardo-lopez-letona
              </a>
            </p>

            <p className="mb-2">
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/estulpz202"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                github.com/estulpz202
              </a>
            </p>

            <p className="mb-2">
              <strong>Location:</strong> Essex County, NJ
            </p>
          </div>

          {/* Closing message */}
          <p className="text-base text-gray-700">
            I'll get back to you as soon as I can — thanks again for stopping by!
          </p>
        </section>
      </Container>
    </main>
  );
}
