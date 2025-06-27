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
  copyable: boolean;
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
    copyable: true,
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Belleville, NJ, United States',
    icon: 'location',
    copyable: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/estulpz202',
    url: 'https://github.com/estulpz202',
    icon: 'github',
    copyable: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/estuardo-lopez-letona',
    url: 'https://www.linkedin.com/in/estuardo-lopez-letona',
    icon: 'linkedin',
    copyable: true,
  },
];
