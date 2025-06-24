import SectionHeader from '@/components/common/SectionHeader';
import Container from '@/components/common/Container';
import { DownloadButton, SecondaryButton } from '@/components/ui/Button';

/**
 * Page metadata for browser tab display
 */
export const metadata = {
  title: 'Resume',
};

/**
 * ResumePage - Professional resume/CV display
 */
export default function ResumePage() {
  return (
    <main className="py-10 fade-in-up">
      <Container>
        {/* Page header with title and actions */}
        <div className="mb-8">
          <SectionHeader title="Resume" />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-gray-700 my-auto">
              My professional background, skills, and qualifications.
            </p>
            <div className="flex gap-3">
              <DownloadButton
                href="/resume.pdf"
                filename="Estuardo-Lopez-Resume.pdf"
                size="small"
                icon="download"
              >
                Download PDF
              </DownloadButton>

              <SecondaryButton href="/resume.pdf" external={true} size="small" icon="external-link">
                Open in New Tab
              </SecondaryButton>
            </div>
          </div>
        </div>

        {/* Embedded PDF viewer */}
        <div className="w-full rounded-lg overflow-hidden shadow-sm">
          <iframe
            src="/resume.pdf"
            title="Estuardo Lopez Resume"
            width="100%"
            height="1200px"
          ></iframe>
        </div>
      </Container>
    </main>
  );
}
