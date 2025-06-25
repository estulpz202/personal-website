import { SecondaryButton } from '@/components/ui/Button';

/**
 * ContactCTA - Call to action section encouraging visitor engagement
 */
export default function ContactCTA() {
  return (
    <section className="pt-10 sm:pt-12 md:pt-14 pb-13 sm:pb-16 md:pb-19">
      {/* Gradient background container with CTA content */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 text-center">
        <h2 className="text-xl sm:text-[22px] md:text-2xl font-bold mb-2 sm:mb-3">
          Ready to Collaborate?
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 max-w-2xl mx-auto">
          Open to new opportunities — let's connect and discuss how I can contribute to your team.
        </p>

        <div className="flex justify-center">
          <SecondaryButton href="/contact">Get in Touch</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
