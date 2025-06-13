import { SecondaryButton } from '@/components/ui/Button';

export default function ContactCTA() {
  return (
    <section className="pt-10 pb-12.5 fade-in-up">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ready to Collaborate?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Open to new opportunities — let's connect and discuss how I can contribute to your team.
        </p>

        <div className="flex justify-center">
          <SecondaryButton href="/contact">Get in Touch</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
