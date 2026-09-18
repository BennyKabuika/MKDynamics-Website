import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';

// Self-hosted (latin subset) so builds never depend on reaching Google Fonts.
const sans = localFont({
  src: './fonts/SchibstedGrotesk-Variable.woff2',
  weight: '400 900',
  variable: '--font-sans',
  display: 'swap',
});
const display = localFont({
  src: './fonts/BricolageGrotesque-Variable.woff2',
  weight: '200 800',
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mkdynamics.be/'),
  title: 'MKDynamics - Information Technology Solutions',
  description:
    'MKDynamics delivers custom software & mobile apps, cybersecurity, and innovative IT solutions to transform your business.',
  generator: 'Next.js',
  applicationName: 'MKDynamics',
  authors: [{ name: 'MKDynamics', url: 'https://www.mkdynamics.be/' }],
  creator: 'MKDynamics',
  publisher: 'MKDynamics',
  robots: 'index, follow',
  openGraph: {
    title: 'MKDynamics - Information Technology Solutions',
    description:
      'MKDynamics delivers custom software & mobile apps, cybersecurity, and innovative IT solutions to transform your business.',
    url: 'https://www.mkdynamics.be/',
    siteName: 'MKDynamics',
    images: [
      {
        url: 'https://www.mkdynamics.be/mklogo.png',
        width: 1200,
        height: 630,
        alt: 'MKDynamics - Information Technology Solutions',
      },
    ],
    locale: 'en-GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'MKDynamics - Information Technology Solutions',
    description:
      'MKDynamics delivers custom software & mobile apps, cybersecurity, and innovative IT solutions to transform your business.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#051654" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy focus:px-4 focus:py-3 focus:text-on-navy"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
