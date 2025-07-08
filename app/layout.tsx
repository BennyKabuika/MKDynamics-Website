import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
   metadataBase: new URL("https://www.mkdynamics.be/"),
    title: "MKDynamics - Information Technology Solutions",
    description:
    "MKDynamics delivers custom software & mobile apps, cybersecurity, and innovative IT solutions to transform your business.",
    generator: "Next.js",
    applicationName: "MKDynamics",
    openGraph: {
        title: "MKDynamics - Information Technology Solutions",
        description:
          "MKDynamics delivers custom software & mobile apps, cybersecurity, and innovative IT solutions to transform your business.",
        url: "https://www.mkdynamics.be/",
        siteName: "www.mkdynamics.be",
        images: [
            {
                url: "https://www.mkdynamics.be/logo.png",
                width: 1200,
                height: 630,
                alt: "MKDynamics - Information Technology Solutions",
            },
        ],
        locale: "en-GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MKDynamics - Information Technology Solutions",
        description:
        "MKDynamics delivers custom software & mobile apps, cybersecurity, and innovative IT solutions to transform your business.",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },

    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}