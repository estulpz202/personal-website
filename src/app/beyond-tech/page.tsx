import Image from 'next/image';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';

export default function BeyondTechPage() {
  return (
    <main>
      <Container>
        {/* Page Intro */}
        <section className="py-12 text-center fade-in-up">
          <SectionHeader title="Beyond Tech" />
          <Image
            src="/headshot.jpg"
            alt="Professional headshot"
            width={190}
            height={190}
            className="rounded-full mb-6 mx-auto object-cover"
          />
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            While I'm passionate about building software, I believe that who we are outside of work
            shapes how we collaborate and lead. Here's a look at some of the experiences,
            communities, and interests that have shaped me beyond tech.
          </p>
        </section>

        {/* Personal Narrative */}
        <section className="py-12 fade-in-up">
          <SectionHeader title="A Few Things That Drive Me" />
          <p className="text-base text-gray-700 mb-6">
            Martial arts has been a big part of my life. I wrestled throughout high school,
            eventually serving as Varsity Captain and helping lead our team through tournaments and
            challenging seasons. Wrestling taught me resilience, discipline, and how to support a
            team—lessons I carry into my work today. Since then, I've explored boxing, grappling,
            and other martial arts styles. I'm also an active member of the CMU Grappling Club,
            where I get to keep learning and teaching.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Image
              src="/wrestling_team.jpg"
              alt="Wrestling team"
              width={450}
              height={340}
              className="object-cover rounded"
            />
            <Image
              src="/wrestling_lift.JPG"
              alt="Wrestling competition"
              width={350}
              height={340}
              className="object-cover rounded"
            />
          </div>

          <p className="text-base text-gray-700 mb-6">
            I also love being outdoors and staying active — whether hiking up Bear Mountain,
            kayaking with family and friends, or playing volleyball or spikeball. I'm curious about
            fitness and nutrition as well — it helps me bring energy and balance into my daily life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Image
              src="/kayaking.JPG"
              alt="Kayaking with family and friends"
              width={450}
              height={340}
              className="object-cover rounded"
            />
            <Image
              src="/bear_mountain.jpg"
              alt="Hiking on Bear Mountain"
              width={350}
              height={340}
              className="object-cover rounded"
            />
          </div>

          <p className="text-base text-gray-700 mb-6">
            At home, I'm a huge dog person. We have three amazing dogs, and they always bring joy
            (and chaos) to the house. Whether it's training them, taking them on walks, or watching
            them pile onto their bed together — they never fail to make me smile.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Image
              src="/dogs.jpg"
              alt="My three dogs on their bed"
              width={450}
              height={340}
              className="object-cover rounded"
            />
            <Image
              src="/kane_sunglasses.jpg"
              alt="My dog Kane wearing sunglasses"
              width={350}
              height={340}
              className="object-cover rounded"
            />
          </div>

          <p className="text-base text-gray-700 mb-6">
            When I'm winding down, you'll probably find me playing board games, catching up on
            movies (big MCU fan), or learning something new — whether it's about AI, computer
            science, or world history. I'm also pursuing a History minor at CMU, because I think
            understanding the past helps us shape better futures.
          </p>
        </section>

        {/* Leadership Story */}
        <section className="py-12 fade-in-up">
          <SectionHeader title="Teaching & Leadership" />
          <p className="text-base text-gray-700 mb-6">
            Teaching and mentorship are important to me. One of the most rewarding experiences I've
            had was teaching CS and mobile development to high school students through Prime Factors
            Learning Lab. I designed and delivered the curriculum and mentored teams through their
            first app development projects — watching their confidence grow was incredibly
            fulfilling.
          </p>

          <p className="text-base text-gray-700 mb-6">
            I also helped design and run a <strong>Tech Escape Room</strong> for high school
            students — a creative and fun way to get them thinking about problem-solving and
            teamwork.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Image
              src="/gcode_teaching.jpg"
              alt="Teaching students at GCode"
              width={400}
              height={340}
              className="object-cover rounded"
            />
            <Image
              src="/pfll_escaperoom.jpg"
              alt="Tech Escape Room"
              width={400}
              height={340}
              className="object-cover rounded"
            />
          </div>

          <p className="text-base text-gray-700 mb-6">
            Earlier leadership experiences — from Peer Leadership in high school to wrestling
            captain, to organizing community events with the Red Cross and Glamour Gals — have
            shaped how I think about impact and community. Today, I'm involved with Acts2Fellowship
            (faith and mentorship) and SALSA (uplifting Latino and Spanish-speaking communities) at
            CMU.
          </p>
        </section>

        {/* Personal Life / Family */}
        <section className="py-12 fade-in-up">
          <SectionHeader title="Family & Community" />
          <p className="text-base text-gray-700 mb-6">
            Family is very important to me, and I'm grateful to be surrounded by people who support
            and inspire me. I love spending time with them — whether it's celebrating the holidays
            or welcoming new members into the family. This past year, I got to meet and hold my
            newborn nephew — an experience I'll never forget.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Image
              src="/christmas.jpg"
              alt="Family Christmas photo"
              width={430}
              height={340}
              className="object-cover rounded"
            />
            <Image
              src="/nephew.jpg"
              alt="Holding my newborn nephew"
              width={370}
              height={340}
              className="object-cover rounded"
            />
          </div>

          <p className="text-base text-gray-700 mb-6">
            Thanks for taking the time to learn a little more about who I am beyond tech. If you'd
            like to connect — whether about CS, AI, martial arts, teaching, dogs, or anything else —
            I'm always up for a conversation.
          </p>
        </section>
      </Container>
    </main>
  );
}
