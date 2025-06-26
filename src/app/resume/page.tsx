import SectionHeader from '@/components/common/SectionHeader';
import Container from '@/components/common/Container';
import { DownloadButton, SecondaryButton } from '@/components/ui/Button';
import Image from 'next/image';

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
    <main className="py-6 sm:py-8 md:py-10 fade-in-up">
      <Container>
        {/* Page header with title and actions */}
        <div className="mb-6 sm:mb-7 md:mb-8">
          <SectionHeader title="Resume" />
          <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-3 sm:gap-4">
            <p className="text-gray-700 text-sm sm:text-base text-center sm:text-left my-2 sm:my-auto">
              My professional background, skills, and qualifications.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <DownloadButton
                href="/resume.pdf"
                filename="Estuardo_Lopez_Resume.pdf"
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

        {/* Resume Display */}
        <div className="w-full rounded-lg overflow-hidden shadow-sm border border-gray-200">
          {/* Image - For large screens and below */}
          <div className="xl:hidden w-full">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/resume/resume_preview.jpg"
                alt="Estuardo Lopez Resume"
                width={1000}
                height={1294}
                className="w-full h-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Embedded PDF Viewer - For xl screens and above */}
          <div className="hidden xl:block">
            <iframe
              src="/resume.pdf"
              title="Estuardo Lopez Resume"
              width="100%"
              height="1200px"
            ></iframe>
          </div>
        </div>
      </Container>
    </main>
  );
}
