'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { ContactMethod } from './contactData';

/**
 * Props for the ContactMethodCard component
 */
interface ContactMethodCardProps {
  method: ContactMethod;
}

/**
 * ContactMethodCard - Displays a single contact method in a card format
 */
export default function ContactMethodCard({ method }: ContactMethodCardProps) {
  // State for copy feedback
  const [copied, setCopied] = useState(false);

  /**
   * Handle copying text to clipboard
   */
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value).then(
      () => {
        setCopied(true);
        // Reset the copied state after 1 seconds
        setTimeout(() => setCopied(false), 1000);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  return (
    <div className="bg-white rounded-xl px-6 py-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-50 rounded-full p-3 mr-4 mt-2">
          <Icon name={method.icon} className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 pb-1">{method.label}</h3>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex-1">
          {method.url ? (
            <a
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              {method.value}
            </a>
          ) : (
            <p className="text-base text-gray-700">{method.value}</p>
          )}
        </div>

        <button
          onClick={() => handleCopy(method.copy as string)}
          className={`
              p-1.5 rounded-md transition-all duration-200 bg-gray-100 text-gray-700 border border-gray-200
              hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200
              ${copied ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : ''}
            `}
          aria-label={`Copy ${method.label}`}
        >
          <Icon name="copy" className={`w-5 h-5 ${copied ? 'fill-current' : ''}`} />
        </button>
      </div>
    </div>
  );
}
