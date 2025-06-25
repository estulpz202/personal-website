/**
 * HeroSection - Primary introduction section for the homepage
 */
import Image from 'next/image';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-14 sm:pb-18 md:pb-22">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
        {/* Left/Bottom side: Personal information and call-to-actions */}
        <div className="md:w-2/3 text-center md:text-left">
          {/* Name and professional title */}
          <div className="mb-4 sm:mb-5 md:mb-6">
            <h1 className="text-4xl sm:text-[42px] md:text-5xl font-extrabold mb-3 md:mb-4">
              Estuardo Lopez
            </h1>
            <h2 className="text-xl sm:text-[22px] md:text-2xl text-gray-600 font-medium">
              Software Engineer
            </h2>
          </div>

          {/* Education background */}
          <div
            className="bg-gray-50 border-l-4 border-indigo-600
            pl-3 sm:pl-4 pr-3 sm:pr-4 py-2.5 sm:py-3 mb-6 sm:mb-7 md:mb-8
            max-w-xl flex justify-between items-center"
          >
            <div className="flex flex-col text-left">
              <p className="hidden lg:block text-lg text-gray-700">
                Computer Science @ <span className="font-semibold">Carnegie Mellon University</span>
              </p>
              <p className="lg:hidden text-base sm:text-lg text-gray-700">
                CS @ <span className="font-semibold">Carnegie Mellon University</span>
              </p>
              <p className="hidden sm:block text-base text-gray-600">
                SWE Concentration • History Minor • 2027
              </p>
              <p className="sm:hidden text-sm text-gray-600">SWE Minor • History Minor • 2027</p>
            </div>
            <div className="flex-shrink-0 ml-3 sm:ml-4">
              <Image
                src="/images/logos/cmu_logo.jpg"
                alt="CMU logo"
                width={48}
                height={48}
                className="w-[48px] h-[48px] sm:w-[52px] sm:hw-[52px]-[52px] md:w-[56px] md:h-[56px]"
              />
            </div>
          </div>

          {/* Professional summary and interests */}
          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-7 md:mb-8 max-w-xl">
            Building meaningful software with a focus on thoughtful design and real world impact.
            Passionate about fullstack development, especially backend systems and collaborative
            engineering. Always learning, both by design and by curiosity.
          </p>

          {/* Navigation buttons to key sections */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <PrimaryButton href="/projects">View Projects</PrimaryButton>
            <SecondaryButton href="/about">About Me</SecondaryButton>
            <div className="hidden sm:block">
              <SecondaryButton href="/resume">Resume</SecondaryButton>
            </div>
          </div>
        </div>

        {/* Right/Top side: Profile photo */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 to-indigo-600 blur-md opacity-20 transform -rotate-6 scale-105"></div>
            <Image
              src="/images/profile/headshot.jpg"
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
