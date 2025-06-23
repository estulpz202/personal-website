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
 * Global 404 Not Found page - Displays when any route doesn't exist across the site
 */
export default function NotFound() {
  return (
    <main className="flex items-center justify-center bg-white overflow-hidden pt-26">
      <div className="max-w-lg mx-auto px-6 text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
            <Icon name="warning" className="w-10 h-10 text-red-500" />
          </div>
        </div>

        {/* Error Content */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-slate-900 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">Well... this is awkward</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Looks like you're a few commits ahead of the site. Let's get you back to something that
            exists.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton href="/" className="px-6 py-3 text-base font-medium min-w-[140px]">
            Go Home
          </PrimaryButton>

          <SecondaryButton
            href="/projects"
            className="px-6 py-3 text-base font-medium min-w-[140px]"
          >
            View Projects
          </SecondaryButton>
        </div>
      </div>
    </main>
  );
}
