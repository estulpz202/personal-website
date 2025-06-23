import { SecondaryButton } from '@/components/ui/Button';

/**
 * ContactCTA - Call-to-action section encouraging visitor engagement
 */
export default function ContactCTA() {
  return (
    <section className="pt-14 pb-19 fade-in-up">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Collaborate?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Open to new opportunities — let's connect and discuss how I can contribute to your team.
        </p>

        <div className="flex justify-center">
          <SecondaryButton href="/contact">Get in Touch</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
