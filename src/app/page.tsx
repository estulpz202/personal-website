import Image from "next/image";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-8 items-start py-12">
      <h1 className="text-4xl font-bold tracking-tight">
        Estuardo Lopez Letona
      </h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-300">
        CS @ Carnegie Mellon | SWE Concentration | History Minor
      </h2>

      <p className="text-lg leading-relaxed max-w-prose">
        I'm a software engineer passionate about building impactful, user-centered
        systems. I've worked across full-stack apps, AI agents, and teaching roles — 
        and I'm always exploring ways to make tech more accessible and effective.
      </p>

      <div className="flex gap-4 pt-4">
        <a
          href="/projects"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
        >
          View Projects
        </a>
        <a
          href="/resume"
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-900"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
