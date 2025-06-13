import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="pt-10 pb-15 fade-in-up">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ready to Collaborate?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Open to new opportunities — let's connect and discuss how I can contribute to your team.
        </p>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-white text-indigo-600 border border-indigo-200 font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center hover:bg-indigo-500 hover:text-white hover:border-indigo-500 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
