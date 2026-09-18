'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ButtonDefault from '../Button/ButtonDefault';

const links = [
  { href: '/servicess', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/Opportunity', label: 'Careers' },
  { href: '/faq', label: 'FAQ' },
];

export function Logo({ tone = 'ink' }: { tone?: 'ink' | 'light' }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="MKDynamics home">
      <Image src="/media/mark.png" alt="" width={36} height={36} priority />
      <span className={`font-display text-xl font-bold tracking-tight ${tone === 'light' ? 'text-on-navy' : 'text-ink'}`}>
        MKDynamics
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);
  // Only the home hero is dark: float over it, go white once scrolled and everywhere else.
  const dark = open || (pathname === '/' && !scrolled);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color] duration-200 ease-out ${
        open
          ? 'on-navy border-line-navy bg-night text-on-navy'
          : dark
            ? 'on-navy border-transparent bg-transparent text-on-navy'
            : `bg-paper text-ink ${scrolled ? 'border-line' : 'border-transparent'}`
      }`}
    >
      <div className="container-mk flex h-[76px] items-center justify-between gap-8">
        <Logo tone={dark ? 'light' : 'ink'} />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={`relative py-2 text-[15px] font-medium transition-colors duration-150 ease-out ${
                    dark
                      ? 'text-on-navy-2 hover:text-on-navy aria-[current=page]:text-on-navy'
                      : 'text-ink-2 hover:text-ink aria-[current=page]:text-ink'
                  } after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gold after:transition-transform after:duration-200 after:ease-out-quart hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 motion-reduce:after:transition-none`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonDefault label="Let's talk" href="/contact" className="h-11 !pl-5 !pr-4 text-[15px]" />
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[76px] bg-night transition-[opacity,transform] duration-200 ease-out md:hidden motion-reduce:transition-none ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="container-mk flex h-full flex-col justify-between pb-10 pt-6">
          <ul>
            {[{ href: '/', label: 'Home' }, ...links, { href: '/contact', label: 'Contact' }].map(({ href, label }) => (
              <li key={href} className="border-b border-line-navy">
                <Link
                  href={href}
                  aria-current={pathname === href ? 'page' : undefined}
                  className="flex items-center justify-between py-5 font-display text-3xl font-semibold tracking-tight aria-[current=page]:text-gold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-1 text-on-navy-2">
            <a href="mailto:contact@mkdynamics.be" className="block text-lg text-on-navy">
              contact@mkdynamics.be
            </a>
            <a href="tel:+32475440347" className="block">
              +32 475 44 03 47
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
