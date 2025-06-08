// A simple reusable layout Container to wrap page content
// Keeps consistent max width and horizontal padding across pages

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-5xl mx-auto px-4 py-8">{children}</div>;
}
