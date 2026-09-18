import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Navbar/Navbar';
import ButtonDefault from './Button/ButtonDefault';

const sitemap = [
  { href: '/servicess', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/Opportunity', label: 'Careers' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer({ cta = true }: { cta?: boolean }) {
  return (
    <footer className="on-navy bg-navy text-on-navy">
      {cta && (
        <div className="border-b border-line-navy">
          <div className="container-mk grid gap-10 py-20 md:grid-cols-12 md:items-end md:py-28">
            <h2 className="reveal font-display text-[clamp(2.75rem,1.5rem+4.6vw,6rem)] font-bold leading-[0.95] tracking-display md:col-span-8">
              Let&apos;s go further, <span className="text-gold">together</span>.
            </h2>
            <div className="reveal md:col-span-4 md:justify-self-end">
              <p className="mb-6 max-w-sm text-lg text-on-navy-2">
                Have a project in mind? Tell us what you want to build or protect, and we&apos;ll plan the next step
                together.
              </p>
              <ButtonDefault label="Start a project" href="/contact" />
            </div>
          </div>
        </div>
      )}

      <div className="container-mk grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-on-navy-2">
            Tailored IT solutions that protect, connect and empower your business.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h3 className="mb-4 text-sm font-semibold text-gold">Site</h3>
          <ul className="space-y-2.5">
            {sitemap.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-on-navy-2 transition-colors duration-150 hover:text-on-navy">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h3 className="mb-4 text-sm font-semibold text-gold">Contact</h3>
          <ul className="space-y-2.5">
            <li>
              <a href="mailto:contact@mkdynamics.be" className="hover:underline">
                contact@mkdynamics.be
              </a>
            </li>
            <li>
              <a href="tel:+32475440347" className="hover:underline">
                +32 475 44 03 47
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps?q=Assesteenweg+116+A+1740+Ternat"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex gap-1 text-on-navy-2 hover:text-on-navy"
              >
                Assesteenweg 116 Boîte A
                <br />
                1740 Ternat, Belgium
                <ArrowUpRight aria-hidden size={16} className="mt-1 shrink-0" />
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-4 text-sm font-semibold text-gold">Office hours</h3>
          <p className="text-on-navy-2">
            Monday to Friday
            <br />
            <span className="text-on-navy">8 AM – 4 PM</span>
          </p>
        </div>
      </div>

      <div className="container-mk flex flex-col gap-2 border-t border-line-navy py-6 text-sm text-on-navy-2 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} MKDynamics. All rights reserved.</p>
        <p>Ternat, Belgium</p>
      </div>
    </footer>
  );
}
