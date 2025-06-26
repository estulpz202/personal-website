import { PrimaryButton } from '@/components/ui/Button';

/**
 * BeyondCodeSection - CTA section linking to personal life page
 */
export default function BeyondCodeSection() {
  return (
    <section className="py-11 sm:py-13 md:py-15">
      <div className="bg-white rounded-xl sm:rounded-2xl py-6 sm:py-7 md:py-8 px-6 sm:px-8 md:px-10 border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-left md:max-w-lg lg:max-w-xl mb-5 sm:mb-6 md:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Beyond the Code</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              There's more to me than just programming. Explore my life through family, martial
              arts, and the passions that shape how I live and grow.
            </p>
          </div>

          <PrimaryButton href="/life">My Life</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
