import Image from 'next/image';
import Link from 'next/link';

// Simple CTA button component for hero section
const CTAButton = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="px-6 py-3 rounded-md font-medium transition-all bg-indigo-500 text-white hover:bg-indigo-600"
  >
    {label}
  </Link>
);

export default function HeroSection() {
  return (
    <section className="py-20 fade-in-up">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Hero content */}
        <div className="md:w-2/3 text-center md:text-left">
          {/* Name and title */}
          <div className="mb-6">
            <h1 className="text-5xl font-extrabold mb-4">Estuardo Lopez</h1>
            <h2 className="text-2xl text-gray-600 font-medium">Software Engineer</h2>
          </div>

          {/* Education */}
          <div className="bg-gray-50 border-l-4 border-indigo-500 pl-4 pr-4 py-3 mb-8 max-w-xl flex justify-between items-center">
            <div>
              <p className="text-lg text-gray-700">
                Computer Science @ <span className="font-semibold">Carnegie Mellon University</span>
              </p>
              <p className="text-gray-600">
                Software Engineering Concentration • History Minor • 2027
              </p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <Image
                src="/cmu_logo.jpg"
                alt="Carnegie Mellon University logo"
                width={56}
                height={56}
              />
            </div>
          </div>

          {/* Short bio */}
          <p className="text-base text-gray-700 mb-8 max-w-2xl">
            Building meaningful software with a focus on clean code, thoughtful design, and real
            world impact. Passionate about full-stack development, systems programming, OOP, and
            collaborative engineering. Always learning, both by design and by curiosity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <CTAButton href="/about" label="About Me" />
            <CTAButton href="/projects" label="View Projects" />
            <CTAButton href="/resume" label="Resume" />
          </div>
        </div>

        {/* Headshot */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 blur-md opacity-20 transform -rotate-6 scale-105"></div>
            <Image
              src="/headshot.jpg"
              alt="Estuardo Lopez"
              width={280}
              height={280}
              className="rounded-full relative border-4 border-white shadow-lg object-cover z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
