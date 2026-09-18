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
    <section className="bg-paper">
      <div className="container-mk pb-12 pt-32 md:pb-16 md:pt-40">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="fade-rise mb-8 text-sm text-ink-2" style={{ ['--d' as string]: '0ms' }}>
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden className="text-gold-ink">
                    /
                  </span>
                  <Link href={c.href} className="hover:text-ink">
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
            <div className="fade-rise text-lg leading-relaxed text-ink-2 md:col-span-4 md:pb-2" style={{ ['--d' as string]: '250ms' }}>
              {lede}
            </div>
          )}
        </div>
        {children}
      </div>
      {image && (
        <div className="container-mk">
          <div
            className="fade-rise relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-paper-2 md:aspect-[21/9]"
            style={{ ['--d' as string]: '350ms' }}
          >
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1320px) 1240px, 100vw" className="object-cover" />
          </div>
        </div>
      )}
    </section>
  );
}
