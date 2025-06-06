import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Estuardo Lopez - Personal Website',
  description: 'Computer Science @ CMU | SWE Concentration & History Minor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
