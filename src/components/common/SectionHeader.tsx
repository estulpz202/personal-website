// A reusable section header component with consistent styling
// Use this on any page where you want a section title (About, Projects, etc.)

export default function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-2">
      {title}
    </h2>
  );
}
