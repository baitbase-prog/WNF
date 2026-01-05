import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import offer from '@/content/offer';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: offer.seo.title,
  description: offer.seo.description,
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: offer.seo.title,
    description: offer.seo.description,
    url: 'https://example.com',
    siteName: offer.agency.name,
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: offer.media.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: offer.seo.title,
    description: offer.seo.description,
    images: ['/og.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fontSans.variable} antialiased`}>{children}
        {/* Analytics placeholder: add your script tag here when ready */}
      </body>
    </html>
  );
}
