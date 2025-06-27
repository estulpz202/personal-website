import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import ContactMethodCard from '@/components/contact/ContactMethodCard';
import { contactMethods } from '@/components/contact/contactData';

/**
 * Page metadata for browser tab display
 */
export const metadata = {
  title: 'Contact',
};

/**
 * ContactPage - Professional contact information
 *
 * Provides various ways to connect, including email, location, and social profiles,
 */
export default function ContactPage() {
  return (
    <main>
      <Container>
        <section className="py-10 fade-in-up">
          <SectionHeader title="Contact" />

          {/* Introductory message */}
          <p className="text-base text-gray-700 mb-8">
            Thanks for stopping by. If you're interested in connecting—whether about opportunities,
            projects, or just to chat—feel free to reach out. I'm always open to a good
            conversation.
          </p>

          {/* Contact cards grid */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {contactMethods.map((method) => (
              <ContactMethodCard key={method.id} method={method} />
            ))}
          </div>

          {/* Decorative graphic */}
          <div className="flex justify-center mb-8">
            <div className="w-80 h-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent rounded-full"></div>
          </div>

          {/* Closing message */}
          <p className="text-base text-gray-700 text-center">
            Thanks again for visiting! I'll be in touch very soon and look forward to connecting.
          </p>
        </section>
      </Container>
    </main>
  );
}
