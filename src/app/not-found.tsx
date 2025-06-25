import Icon from '@/components/ui/Icon';
import { Metadata } from 'next';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button';

/**
 * Page metadata for browser tab display
 */
export const metadata: Metadata = {
  title: 'Page Not Found',
};

/**
 * Error 404 NotFoundPage - Displays when any route doesn't exist
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-100px)] pb-8 sm:pb-10 items-center justify-center fade-in-up">
      <main className="w-full max-w-xl mx-auto px-6 py-12 sm:py-16 md:py-20 text-center">
        {/* Error Icon */}
        <div className="mb-6.5 sm:mb-8.5 flex justify-center">
          <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-red-50 flex items-center justify-center">
            <Icon name="warning" className="w-9 h-9 sm:w-11 sm:h-11 text-red-500" />
          </div>
        </div>

        {/* Error Content */}
        <div className="mb-6.5 sm:mb-8.5">
          <h1 className="text-[42px] sm:text-[54px] font-bold text-gray-900 mb-1.25 sm:mb-2.25">
            404
          </h1>
          <h2 className="text-[22px] sm:text-[27px] font-semibold text-gray-700 mb-3.5 sm:mb-4.5">
            Well... this is awkward
          </h2>
          <p className="text-[17px] sm:text-[19px] text-gray-500 leading-relaxed mb-6.5 sm:mb-8.5 max-w-md mx-auto">
            Looks like you are a few commits ahead. Let's get you back to something that exists.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton
            href="/"
            className="px-5.2 py-2.7 sm:px-6.4 sm:py-3.4 text-base sm:text-[16.5px] font-medium sm:min-w-[155px] text-center"
          >
            Go Home
          </PrimaryButton>
          <SecondaryButton
            href="/projects"
            className="x-5.2 py-2.7 sm:px-6.4 sm:py-3.4 text-base sm:text-[16.5px] font-medium sm:min-w-[155px] text-center"
          >
            View Projects
          </SecondaryButton>
        </div>
      </main>
    </div>
  );
}
