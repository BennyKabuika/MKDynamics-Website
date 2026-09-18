'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hl from '../site/Hl';

const tabs = {
  mission:
    'Our mission at MKDynamics is to provide comprehensive digital solutions — from web and app development to design and cybersecurity — empowering businesses to thrive with innovative, all-in-one IT services.',
  vision:
    'To be a leading digital partner recognized for delivering innovative, secure, and comprehensive IT solutions that empower businesses worldwide to grow confidently in a fast-evolving digital landscape.',
};

type Tab = keyof typeof tabs;

export default function Statement() {
  const [tab, setTab] = useState<Tab>('mission');

  return (
    <section className="bg-paper">
      <div className="container-mk grid gap-14 py-20 md:grid-cols-12 md:py-28">
        <h2 className="reveal font-display text-[clamp(2rem,1.2rem+2.8vw,3.75rem)] font-bold leading-[1.05] tracking-display md:col-span-10">
          A trusted partner for <Hl on="light">secure</Hl> digital growth.
        </h2>
        <p className="reveal max-w-xl text-lg leading-relaxed text-ink-2 md:col-span-5">
          MKDynamics is a trusted security firm specializing in comprehensive IT and cybersecurity solutions. Security
          is not an add-on here: it shapes how we design and build everything we deliver.
        </p>

        <div className="reveal md:col-span-6 md:col-start-7 md:-mt-2">
          <div role="tablist" aria-label="Mission and vision" className="flex gap-8 border-b border-line">
            {(Object.keys(tabs) as Tab[]).map((key) => (
              <button
                key={key}
                role="tab"
                id={`tab-${key}`}
                aria-selected={tab === key}
                aria-controls="statement-panel"
                onClick={() => setTab(key)}
                className="relative -mb-px pb-4 font-display text-xl font-bold capitalize text-ink-2 transition-colors duration-150 hover:text-ink aria-selected:text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:rounded-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-out-quart aria-selected:after:scale-x-100 motion-reduce:after:transition-none"
              >
                {key}
              </button>
            ))}
          </div>
          <p
            key={tab}
            id="statement-panel"
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            className="fade-rise mt-6 min-h-[8.5rem] text-lg leading-relaxed text-ink-2"
            style={{ ['--d' as string]: '0ms' }}
          >
            {tabs[tab]}
          </p>
          <Link href="/about" className="mt-6 inline-block font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8">
            More about us
          </Link>
        </div>
      </div>
    </section>
  );
}
