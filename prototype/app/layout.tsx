import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'First Presbyterian Church of Newark — Modernization Prototype',
  description: 'A clickable concept for a clearer, warmer, and more accessible church website.',
  openGraph: {
    title: 'First Presbyterian Church of Newark',
    description: 'A place to belong. A faith to explore.',
    images: [{ url: '/og.png', width: 1672, height: 941 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Presbyterian Church of Newark',
    description: 'A place to belong. A faith to explore.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
