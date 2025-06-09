import SectionHeader from '@/components/common/SectionHeader';

export default function ResumePage() {
  return (
    <main>
      <section className="py-12 px-4 max-w-5xl mx-auto fade-in-up">
        <SectionHeader title="Resume" />
        <p className="text-base text-gray-700 mb-6">
          View my resume below. If the preview does not load, you can also{' '}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link">
            download the PDF
          </a>
          .
        </p>
      </section>

      {/* PDF Viewer nicely centered and limited in width */}
      <section className="mb-12 px-4 fade-in-up">
        <div className="max-w-screen-lg mx-auto border rounded overflow-hidden shadow">
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="1200px"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </section>
    </main>
  );
}
