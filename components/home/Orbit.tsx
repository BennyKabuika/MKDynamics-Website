'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Services } from '@/app/function';
import ServiceIcon from '../site/ServiceIcon';

const R = 44; // node orbit radius, % of the stage

/**
 * Signature: the logo's atom as a living diagram. The five services ride one
 * ring around the mark; picking one (or waiting) brings it into focus.
 */
export default function Orbit() {
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (touched || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % Services.length), 4500);
    return () => clearInterval(t);
  }, [touched, paused]);

  const pick = (i: number) => {
    setTouched(true);
    setActive(i);
  };

  const service = Services[active];

  return (
    <section className="on-navy relative overflow-hidden bg-night text-on-navy">
      <div className="container-mk grid items-center gap-14 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <h2 className="reveal font-display text-[clamp(2.25rem,1.3rem+3.4vw,4.25rem)] font-bold leading-[1] tracking-display">
            One team, a <span className="text-gold">full circle</span> of expertise.
          </h2>
          <p className="reveal mt-6 max-w-md text-lg text-on-navy-2">
            Design, development and security feed each other. Nothing gets lost between agencies, because there is only
            one.
          </p>

          <div className="mt-10 min-h-[190px] border-t border-line-navy pt-8" aria-live="polite">
            <p key={service.id} className="fade-rise" style={{ ['--d' as string]: '0ms' }}>
              <span className="flex items-center gap-3 font-display text-2xl font-bold md:text-3xl">
                <ServiceIcon name={service.icon} size={28} className="shrink-0 text-gold" />
                {service.title}
              </span>
              <span className="mt-3 block max-w-md text-on-navy-2">{service.summary}</span>
              <Link
                href={service.link}
                className="group mt-5 inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-2"
              >
                Discover {service.title.toLowerCase()}
                <ArrowRight aria-hidden size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </p>
          </div>
        </div>

        <div
          className={`relative mx-auto aspect-square w-full max-w-[560px] md:col-span-6 md:col-start-7 ${paused ? 'orbit-paused' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* the atom's rings */}
          {[0, 60, 120].map((deg) => (
            <div
              key={deg}
              aria-hidden
              className="absolute left-[8%] top-[33%] h-[34%] w-[84%] rounded-[50%] border border-[rgba(242,178,51,0.3)]"
              style={{ rotate: `${deg}deg` }}
            />
          ))}
          <div aria-hidden className="absolute inset-[6%] rounded-full border border-dashed border-line-navy" />

          <div className="absolute left-1/2 top-1/2 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy shadow-[0_0_80px_10px_rgba(242,178,51,0.18)]">
            <Image src="/media/mark.png" alt="" width={120} height={120} className="h-[70%] w-[70%]" />
          </div>

          <ul className="orbit-spin absolute inset-0" aria-label="Our services">
            {Services.map((s, i) => {
              const a = (i / Services.length) * 2 * Math.PI - Math.PI / 2;
              const on = i === active;
              return (
                <li
                  key={s.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${50 + R * Math.cos(a)}%`, top: `${50 + R * Math.sin(a)}%` }}
                >
                  <div className="orbit-counter">
                    <button
                      type="button"
                      onClick={() => pick(i)}
                      aria-pressed={on}
                      aria-label={s.title}
                      className={`flex h-14 w-14 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-300 ease-out-quart md:h-16 md:w-16 ${
                        on
                          ? 'scale-110 border-gold bg-gold text-night'
                          : 'border-line-navy bg-navy text-on-navy hover:border-gold hover:text-gold'
                      }`}
                    >
                      <ServiceIcon name={s.icon} size={24} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
