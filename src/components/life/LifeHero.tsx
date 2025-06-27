import Image from 'next/image';

/**
 * LifeHero - Hero section for the Life page
 */
export default function LifeHero() {
  return (
    <section>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        {/* Banner Hero */}
        <div className="relative w-full h-[305px]">
          <Image
            src="/images/life/hs_grad.jpg"
            alt="Graduation with friends"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Estuardo Lopez</h2>
            <p className="text-xl">Developer, mentor, athlete, and friend</p>
          </div>
        </div>

        {/* Overview */}
        <p className="text-base text-gray-700 p-5">
          While I love building software, my life outside of tech shapes how I collaborate and
          create. My experiences in athletics, teaching, and community have taught me valuable
          lessons about resilience, creativity, and human connection that I bring to every project.
        </p>
      </div>
    </section>
  );
}
