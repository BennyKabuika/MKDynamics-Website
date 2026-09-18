import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer';
import PageHero from '@/components/site/PageHero';
import Hl from '@/components/site/Hl';
import ApplyForm from '@/components/applyForm';

export default function ResumeCV() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title={<>Apply to <Hl on="light">MKDynamics</Hl>.</>}
          crumbs={[
            { href: '/Opportunity', label: 'Careers' },
            { href: '/resumecv', label: 'Apply' },
          ]}
          lede="Send your CV for an internship, a student job or a role. Tell us which field you want to grow in."
        />
        <section className="container-mk grid gap-16 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <ApplyForm />
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <div className="rounded-3xl bg-paper-2 p-7">
              <h2 className="text-xl font-semibold">Questions first?</h2>
              <p className="mt-2 text-ink-2">
                Email{' '}
                <a href="mailto:contact@mkdynamics.be" className="text-ink underline">
                  contact@mkdynamics.be
                </a>{' '}
                and we&apos;ll be happy to tell you more.
              </p>
            </div>
          </aside>
        </section>
      </main>
      <Footer cta={false} />
    </>
  );
}
