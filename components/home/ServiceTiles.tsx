import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Services } from '@/app/function';
import ServiceIcon from '../site/ServiceIcon';
import Hl from '../site/Hl';

const lift =
  'transition-[transform,background-color,box-shadow] duration-200 ease-out motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1';

export default function ServiceTiles({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-paper">
      <div className="container-mk py-20 md:py-28">
        {heading && (
          <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
            <h2 className="reveal font-display text-[clamp(2.25rem,1.3rem+3.4vw,4.25rem)] font-bold leading-[1] tracking-display md:col-span-7">
              Everything your business needs to go <Hl on="light">digital</Hl>.
            </h2>
            <p className="reveal text-lg text-ink-2 md:col-span-4 md:col-start-9">
              Five disciplines under one roof, so your product is designed, built and secured by the same team.
            </p>
          </div>
        )}

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Services.map((s) => (
            <li key={s.id} className="reveal">
              <Link
                href={s.link}
                className={`group flex h-full sm:min-h-[280px] flex-col rounded-3xl bg-paper-2 p-7 hover:bg-white hover:shadow-[0_18px_40px_-18px_rgba(5,22,84,0.35)] md:p-8 ${lift}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
                  <ServiceIcon name={s.icon} size={26} />
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-ink-2">{s.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-navy">
                  Learn more
                  <ArrowRight
                    aria-hidden
                    size={18}
                    className="transition-transform duration-200 ease-out-quart group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </span>
              </Link>
            </li>
          ))}
          <li className="reveal">
            <Link
              href="/contact"
              className={`group flex h-full sm:min-h-[280px] flex-col rounded-3xl bg-gold p-7 text-night hover:bg-gold-2 md:p-8 ${lift}`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-night text-gold">
                <ArrowUpRight aria-hidden size={26} strokeWidth={1.75} />
              </span>
              <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">Not sure where to start?</h3>
              <p className="mt-3">Tell us about your idea or your problem. We&apos;ll help you find the right mix.</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold">
                Let&apos;s talk
                <ArrowRight aria-hidden size={18} className="transition-transform duration-200 ease-out-quart group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
