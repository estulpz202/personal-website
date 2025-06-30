import { PrimaryButton } from '@/components/ui/Button';

/**
 * LifeCTA - Contact call-to-action section
 *
 * Prompts visitors to reach out and connect
 */
export default function LifeCTA() {
  return (
    <section className="py-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Let's Connect</h2>
        <p className="text-base text-gray-700 mb-5 max-w-2xl mx-auto">
          Thanks for taking a moment to learn more about me beyond my technical work. I'm always
          open to connecting about shared interests or new opportunities.
        </p>
        <PrimaryButton href="/contact">Contact Me</PrimaryButton>
      </div>
    </section>
  );
}
