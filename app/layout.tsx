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
    authors: [{ name: "MKDynamics", url: "https://www.mkdynamics.be/" }],
    creator: "MKDynamics",
    publisher: "MKDynamics",
    robots: "index, follow",
    openGraph: {
        title: "MKDynamics - Information Technology Solutions",
        description:
          "MKDynamics delivers custom software & mobile apps, cybersecurity, and innovative IT solutions to transform your business.",
        url: "https://www.mkdynamics.be/",
        siteName: "MKDynamics",
        images: [
            {
                url: "https://www.mkdynamics.be/mklogo.png",
                width: 1200,
                height: 630,
                alt: "MKDynamics - Information Technology Solutions",
            },
        ],
        locale: "en-GB",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "MKDynamics - Information Technology Solutions",
        description:
        "MKDynamics delivers custom software & mobile apps, cybersecurity, and innovative IT solutions to transform your business.",
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