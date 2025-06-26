import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
   metadataBase: new URL("https://www.mkdynamics.be/"),
    title: "MKDynamics - Information Technology Solutions",
    description:
    "MKDYNAMICS excels in crafting custom software and mobile apps, ensuring digital security through cybersecurity services, transforming businesses with innovation ...",
    generator: "Next.js",
    applicationName: "MKDynamics",
    keywords: [
        "IT services",
        "Software development",
        "Cybersecurity solutions",
        "Digital transformation",
        "Custom software solutions",
        "Web development",
        "Mobile app development",
        "Cloud computing",
        "Enterprise software",
        "Digital security",
        "Tech innovation",
        "IT consulting",
        "Business IT solutions",
        "Software engineering",
        "Full-stack development",
        "App development",
        "Technology solutions",
        "System integration",
        "Digital strategy",
        "Business technology services",
    ],
    openGraph: {
        title: "MKDynamics - Information Technology Solutions",
        description:
      "MKDYNAMICS excels in crafting custom software and mobile apps, ensuring digital security through cybersecurity services, transforming businesses with innovation ...",
        url: "https://www.mkdynamics.be/",
        siteName: "www.mkdynamics.be",
        images: [
            {
                url: "./public/logo.png",
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
      "MKDYNAMICS excels in crafting custom software and mobile apps, ensuring digital security through cybersecurity services, transforming businesses with innovation ...",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}