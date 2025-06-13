export default function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-indigo-500 fade-in-up">
      {title}
    </h2>
  );
}
