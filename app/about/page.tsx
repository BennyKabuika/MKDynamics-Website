import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer';
import PageHero from '@/components/site/PageHero';
import Hl from '@/components/site/Hl';
import ButtonDefault from '@/components/Button/ButtonDefault';

const values = [
  {
    title: 'Motivation',
    text: 'Enthusiasm and determination fuel progress. Each project is approached with genuine emotional and intellectual commitment, because only true motivation can overcome challenges and push us to achieve excellence.',
  },
  {
    title: 'Knowledge',
    text: 'We continuously invest in learning, technology watch and skill development, so our solutions are rooted in a solid understanding of your challenges.',
  },
  {
    title: 'Dedication',
    text: 'More than a service, we offer a genuine partnership where our client’s success is our own goal, reflected in our rigor, availability and perseverance.',
  },
  {
    title: 'Youthful energy',
    text: 'A bold mindset focused on the future. Youth is not an age — it’s a mindset driven by curiosity, creativity and agility in an ever-evolving world.',
  },
  {
    title: 'Network',
    text: 'Our network of partners, clients and experts is a resource we mobilize to co-create high-quality solutions. Great achievements are always collective.',
  },
  {
    title: 'Agility',
    text: 'Flexible and adaptive working methods that meet challenges while staying strategically focused, in how we think, plan and communicate.',
  },
  {
    title: 'Mission',
    text: 'Every solution we deliver is designed to genuinely improve performance, visibility and long-term success. We strive to inspire, transform and build sustainable value.',
  },
  {
    title: 'Integrity',
    text: 'Ethics, transparency and responsibility sit at the heart of our relationships. Trust is not claimed — it is earned through honesty, reliability and accountability.',
  },
  {
    title: 'Creativity',
    text: 'Fresh perspectives, bold ideas and tailor-made solutions. We reject one-size-fits-all approaches in favor of exploration and innovation.',
  },
  {
    title: 'Synergy',
    text: 'Aligning skills, visions and energy to go further, faster and stronger, hand in hand with clients and teams.',
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title={<>Trusted IT for apps, websites, design and <Hl on="light">security</Hl>.</>}
          crumbs={[{ href: '/about', label: 'About' }]}
          lede="At MKDynamics, we have the IT solutions you need: innovative, secure and built for your challenges."
          image="/media/image12.jpg"
          imageAlt="The MKDynamics team gathered around a table"
        />

        <section className="container-mk grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <p className="reveal font-display text-[clamp(1.75rem,1.2rem+2vw,3rem)] font-bold leading-[1.1] tracking-display md:col-span-9">
            In today’s fast-moving tech landscape, MKDynamics partners with you to deliver tailored IT solutions that
            protect, connect and empower your business.
          </p>
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-12 md:grid-cols-12">
            <div className="reveal border-t-2 border-ink pt-6 md:col-span-6">
              <h2 className="font-display text-2xl font-bold tracking-tight">Our mission</h2>
              <p className="mt-3 text-lg text-ink-2">
                To provide comprehensive digital solutions — from web and app development to design and cybersecurity —
                empowering businesses to thrive with innovative, all-in-one IT services.
              </p>
            </div>
            <div className="reveal border-t-2 border-ink pt-6 md:col-span-6">
              <h2 className="font-display text-2xl font-bold tracking-tight">Our vision</h2>
              <p className="mt-3 text-lg text-ink-2">
                To be a leading digital partner recognized for delivering innovative, secure, and comprehensive IT
                solutions that empower businesses worldwide to grow confidently in a fast-evolving digital landscape.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-paper-2">
          <div className="container-mk py-20 md:py-28">
            <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
              <h2 className="font-display text-[clamp(2.25rem,1.4rem+3vw,4rem)] font-bold leading-none tracking-display md:col-span-6">
                What we <Hl on="light">stand for</Hl>
              </h2>
              <div className="md:col-span-5 md:col-start-8">
                <p className="text-lg text-ink-2">Ten values that shape how we work with clients, partners and each other.</p>
              </div>
            </div>
            <dl className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="reveal border-t border-line py-8">
                  <dt className="font-display text-xl font-bold tracking-tight">{v.title}</dt>
                  <dd className="mt-2 text-ink-2">{v.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="container-mk grid gap-10 py-20 md:grid-cols-12 md:items-center md:py-28">
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl md:col-span-7">
            <Image src="/media/image13.jpg" alt="Two colleagues celebrating a result" fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
          </div>
          <div className="reveal md:col-span-4 md:col-start-9">
            <p className="font-display text-7xl font-bold tabular-nums tracking-display text-navy">50+</p>
            <p className="mt-2 text-lg text-ink-2">successful projects and counting, across web, mobile, design and security.</p>
            <ButtonDefault label="Our services" href="/servicess" className="mt-8" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
