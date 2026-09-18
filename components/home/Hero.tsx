import Image from 'next/image';
import ButtonDefault from '../Button/ButtonDefault';

const facts = [
  { value: '50+', label: 'successful projects and counting' },
  { value: '5', label: 'disciplines under one roof' },
  { value: 'BE', label: 'based in Ternat, near Brussels' },
];

export default function Hero() {
  return (
    <section className="on-navy relative isolate overflow-hidden bg-night text-on-navy">
      <Image
        src="/media/image7.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--night)_0%,rgba(4,10,36,0.92)_38%,rgba(4,10,36,0.45)_75%,rgba(4,10,36,0.25)_100%),linear-gradient(0deg,var(--night)_0%,transparent_35%)]"
      />

      <div className="container-mk flex min-h-[100svh] flex-col justify-end pb-10 pt-32 md:pb-14">
        <h1 className="max-w-5xl font-display text-[clamp(3rem,1.2rem+6.2vw,7rem)] font-bold leading-[0.95] tracking-display">
          <span className="line-mask">
            <span style={{ ['--i' as string]: 0 }}>Design, build</span>
          </span>
          <span className="line-mask">
            <span style={{ ['--i' as string]: 1 }}>
              and <span className="text-gold">secure</span> your
            </span>
          </span>
          <span className="line-mask">
            <span style={{ ['--i' as string]: 2 }}>digital business.</span>
          </span>
        </h1>

        <div className="fade-rise mt-8 max-w-xl" style={{ ['--d' as string]: '450ms' }}>
          <p className="text-lg leading-relaxed text-on-navy-2 md:text-xl">
            Websites, mobile apps, design, automation and cybersecurity. One Belgian team, from the first sketch to the
            last penetration test.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonDefault label="Start a project" href="/contact" />
            <ButtonDefault label="Our services" href="/servicess" variant="ghost" />
          </div>
        </div>

        <dl
          className="fade-rise mt-16 grid grid-cols-3 gap-4 border-t border-line-navy pt-6 md:mt-24 md:max-w-3xl"
          style={{ ['--d' as string]: '650ms' }}
        >
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-bold tabular-nums text-gold md:text-5xl">{f.value}</span>
                <span className="mt-1 block text-sm text-on-navy-2 md:text-base">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
