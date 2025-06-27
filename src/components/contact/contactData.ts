import { IconName } from '@/components/ui/Icon';

/**
 * Contact method data structure
 */
export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  url?: string;
  icon: IconName;
  copyValue: string;
}

/**
 * Contact methods data for the contact page
 */
export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'elopezle@andrew.cmu.edu',
    url: 'mailto:elopezle@andrew.cmu.edu',
    icon: 'email',
    copyValue: 'elopezle@andrew.cmu.edu',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Belleville, NJ, United States',
    icon: 'location',
    copyValue: 'Belleville, NJ, United States',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/estulpz202',
    url: 'https://github.com/estulpz202',
    icon: 'github',
    copyValue: 'https://github.com/estulpz202',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/estuardo-lopez-letona',
    url: 'https://www.linkedin.com/in/estuardo-lopez-letona',
    icon: 'linkedin',
    copyValue: 'https://www.linkedin.com/in/estuardo-lopez-letona',
  },
];
