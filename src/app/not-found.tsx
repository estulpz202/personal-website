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
      <main className="w-full max-w-lg mx-auto px-6 py-12 sm:py-16 md:py-20 text-center">
        {/* Error Icon */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-50 flex items-center justify-center">
            <Icon name="warning" className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
          </div>
        </div>

        {/* Error Content */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">
            Well... this is awkward
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto">
            Looks like you are a few commits ahead. Let's get you back to something that exists.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton
            href="/"
            className="px-5 py-2.5 sm:px-6 sm:py-3 text-base font-medium sm:min-w-[155px] text-center"
          >
            Go Home
          </PrimaryButton>
          <SecondaryButton
            href="/projects"
            className="px-5 py-2.5 sm:px-6 sm:py-3 text-base font-medium sm:min-w-[155px] text-center"
          >
            View Projects
          </SecondaryButton>
        </div>
      </main>
    </div>
  );
}
