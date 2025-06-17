import Icon from '@/components/ui/Icon';
import { PrimaryButton } from '@/components/ui/Button';

/**
 * BeyondCodeSection - Section linking to personal life page
 * Provides a glimpse into the person behind the professional
 */
export default function BeyondCodeSection() {
  return (
    <section className="py-10 fade-in-up">
      <div className="bg-white rounded-2xl py-8 px-10 border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-left md:max-w-xl mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Beyond the Code</h2>
            <p className="text-gray-700">
              There's more to me than just programming. Explore my life through family, martial
              arts, teaching, and the passions that shape how I live and grow.
            </p>
          </div>

          <PrimaryButton href="/life" className="group flex items-center">
            <span>Meet the Person</span>
            <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              <Icon name="arrow-right" className="w-5 h-5" />
            </div>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
