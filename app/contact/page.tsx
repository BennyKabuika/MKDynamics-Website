import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer';
import PageHero from '@/components/site/PageHero';
import ContactForm from '@/components/contactForm';

const details = [
  { label: 'Email', value: 'contact@mkdynamics.be', href: 'mailto:contact@mkdynamics.be' },
  { label: 'Phone', value: '+32 475 44 03 47', href: 'tel:+32475440347' },
  {
    label: 'Office',
    value: 'Assesteenweg 116 Boîte A, 1740 Ternat',
    href: 'https://www.google.com/maps?q=Assesteenweg+116+A+1740+Ternat',
  },
  { label: 'Hours', value: 'Monday to Friday, 8 AM – 4 PM' },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title={<>Let&apos;s talk about <span className="text-gold">your project</span>.</>}
          crumbs={[{ href: '/contact', label: 'Contact' }]}
          lede="Innovative, secure and built for your challenges. Tell us where you are and where you want to go."
        />
        <section className="container-mk grid gap-16 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <dl className="rounded-3xl bg-paper-2 px-7 py-3">
              {details.map((d) => (
                <div key={d.label} className="border-b border-line py-5 last:border-0">
                  <dt className="text-sm text-ink-2">{d.label}</dt>
                  <dd className="mt-1 text-lg">
                    {d.href ? (
                      <a
                        href={d.href}
                        className="hover:underline"
                        {...(d.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>
        <section className="container-mk pb-16 md:pb-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-paper-2 md:aspect-[21/8]">
            <iframe
              title="Map of the MKDynamics office in Ternat"
              className="absolute inset-0 h-full w-full grayscale"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Assesteenweg%20116%20A%201740%20Ternat%20&output=embed"
            />
          </div>
        </section>
      </main>
      <Footer cta={false} />
    </>
  );
}
