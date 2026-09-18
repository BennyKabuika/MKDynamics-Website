import Image from 'next/image';
import { ReactNode } from 'react';
import ButtonDefault from '../Button/ButtonDefault';

/** Two-column reading layout: sticky aside on the left, prose on the right. */
export function Article({ aside, children }: { aside: ReactNode; children: ReactNode }) {
  return (
    <section className="container-mk grid gap-12 py-16 md:grid-cols-12 md:py-24">
      <aside className="md:col-span-4">
        <div className="md:sticky md:top-28">{aside}</div>
      </aside>
      <div className="prose-mk md:col-span-8">{children}</div>
    </section>
  );
}

export function ImagePair({ images }: { images: [string, string] }) {
  return (
    <div className="!mt-12 grid gap-4 sm:grid-cols-2">
      {images.map((src) => (
        <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-2">
          <Image src={src} alt="" fill sizes="(min-width: 768px) 420px, 100vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function AsideCta({
  title,
  text,
  label,
  href,
}: {
  title: string;
  text: string;
  label: string;
  href: string;
}) {
  return (
    <div className="rounded-3xl bg-navy p-7 text-on-navy on-navy">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mb-6 mt-2 text-on-navy-2">{text}</p>
      <ButtonDefault label={label} href={href} />
    </div>
  );
}

export function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="mb-12 hidden md:block">
      <h2 className="mb-4 text-sm font-medium text-ink-2">On this page</h2>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className="font-medium text-ink hover:text-navy hover:underline hover:decoration-gold hover:decoration-2">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
