import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Crumb {
  href: string;
  label: string;
}

interface PageHeroProps {
  title: ReactNode;
  lede?: ReactNode;
  crumbs?: Crumb[];
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export default function PageHero({ title, lede, crumbs = [], image, imageAlt = '', children }: PageHeroProps) {
  return (
    <section className="on-navy relative isolate overflow-hidden bg-night text-on-navy">
      {image && (
        <>
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover opacity-50" />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--night)_0%,rgba(4,10,36,0.88)_45%,rgba(4,10,36,0.5)_100%),linear-gradient(0deg,var(--night)_0%,transparent_45%)]"
          />
        </>
      )}
      <div className={`container-mk pb-14 pt-36 md:pb-20 md:pt-44 ${image ? 'md:min-h-[72vh] md:flex md:flex-col md:justify-end' : ''}`}>
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="fade-rise mb-8 text-sm text-on-navy-2" style={{ ['--d' as string]: '0ms' }}>
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-on-navy">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden className="text-gold">
                    /
                  </span>
                  <Link href={c.href} className="hover:text-on-navy">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="font-display text-[clamp(2.75rem,1.4rem+5vw,6.25rem)] font-bold leading-[0.95] tracking-display md:col-span-8">
            <span className="line-mask">
              <span>{title}</span>
            </span>
          </h1>
          {lede && (
            <div className="fade-rise text-lg leading-relaxed text-on-navy-2 md:col-span-4 md:pb-2" style={{ ['--d' as string]: '250ms' }}>
              {lede}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
