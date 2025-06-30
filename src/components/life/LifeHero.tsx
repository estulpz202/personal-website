import Image from 'next/image';

/**
 * LifeHero - Hero section for the Life page
 */
export default function LifeHero() {
  return (
    <section>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        {/* Banner Hero */}
        <div className="relative w-full h-[155px] sm:h-[220px] md:h-[305px]">
          <Image
            src="/images/life/hs_grad.jpg"
            alt="Graduation with friends"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Estuardo Lopez</h2>
            <p className="text-base sm:text-lg md:text-xl">
              Developer, mentor, athlete, and friend
            </p>
          </div>
        </div>

        {/* Overview */}
        <p className="text-sm sm:text-base text-gray-700 p-4 sm:p-5">
          While I love building software, my life outside of tech shapes how I collaborate and
          create. My experiences in athletics, teaching, and community have taught me valuable
          lessons about resilience, creativity, and human connection that I bring to every project.
        </p>
      </div>
    </section>
  );
}
