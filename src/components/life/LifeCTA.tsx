import Link from 'next/link';
import Icon from '@/components/ui/Icon';

/**
 * LifeCallToAction - Contact CTA section
 *
 * Prompts visitors to reach out and connect
 */
export default function LifeCTA() {
  return (
    <section className="py-8 fade-in-up mb-6">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h2>
        <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
          Thanks for taking the time to learn a little more about who I am beyond tech. If you'd
          like to connect—whether about CS, AI, martial arts, teaching, dogs, or anything else—I'm
          always up for a good conversation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          <Icon name="mail" className="w-5 h-5 mr-2" />
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
