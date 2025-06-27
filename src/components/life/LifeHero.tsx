import Image from 'next/image';
import SectionHeader from '@/components/common/SectionHeader';

/**
 * LifeHero - Banner hero section for the Life page
 *
 * Features a full-width banner image with text overlay and introduction
 */
export default function LifeHero() {
  return (
    <section className="py-12 fade-in-up">
      <SectionHeader title="Life Beyond Code" />

      <div className="relative w-full h-80 mb-8 overflow-hidden rounded-xl">
        <Image
          src="/images/life/grad.jpg"
          alt="Life banner - outdoor scene"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Estuardo Lopez</h2>
          <p className="text-xl max-w-2xl">Developer, athlete, mentor, and lifelong learner</p>
        </div>
      </div>

      <p className="text-base text-gray-700 mb-10 max-w-3xl">
        While I'm passionate about building software, I believe that who we are outside of work
        shapes how we collaborate and create. The experiences, communities, and interests that
        define me beyond tech have taught me valuable lessons about resilience, creativity, and
        human connection.
      </p>
    </section>
  );
}
