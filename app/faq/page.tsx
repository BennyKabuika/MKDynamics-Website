import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer';
import PageHero from '@/components/site/PageHero';
import { FAQData } from '../function';

export default function FAQ() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title={<>Frequently asked <span className="text-gold">questions</span></>}
          crumbs={[{ href: '/faq', label: 'FAQ' }]}
          lede={
            <>
              Can&apos;t find your answer? Write to{' '}
              <a href="mailto:contact@mkdynamics.be" className="text-on-navy underline decoration-gold">
                contact@mkdynamics.be
              </a>
              .
            </>
          }
        />
        <section className="container-mk py-16 md:py-24">
          <div className="mx-auto max-w-4xl space-y-3">
            {FAQData.map((item, i) => (
              <details key={item.id} className="group rounded-2xl bg-paper-2 px-6 transition-colors duration-200 open:bg-navy open:text-on-navy md:px-8" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-xl font-bold tracking-tight md:text-2xl [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden
                    className="relative mt-2 h-4 w-4 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-4 after:w-0.5 after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-200 after:ease-out group-open:after:scale-y-0 motion-reduce:after:transition-none"
                  />
                </summary>
                <p className="max-w-[65ch] pb-8 text-lg leading-relaxed text-on-navy-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
