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
    <main className="py-6 mb-2 sm:py-8 sm:mb-4 md:py-10 md:mb-6 fade-in-up">
      <Container>
        <SectionHeader title="Contact" />

        {/* Introductory message */}
        <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-7 md:mb-8">
          Thanks for stopping by. If you're interested in connecting—whether about opportunities,
          projects, or just to chat—feel free to reach out. I'm always open to a good conversation.
        </p>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-7 md:mb-8">
          {contactMethods.map((method) => (
            <ContactMethodCard key={method.id} method={method} />
          ))}
        </div>

        {/* Decorative graphic */}
        <div className="flex justify-center mb-6 sm:mb-7 md:mb-8">
          <div className="w-64 sm:w-80 md:w-96 h-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent rounded-full"></div>
        </div>

        {/* Closing message */}
        <p className="text-sm sm:text-base text-gray-700 text-center">
          Thanks again for visiting! I'll be in touch very soon and look forward to connecting.
        </p>
      </Container>
    </main>
  );
}
