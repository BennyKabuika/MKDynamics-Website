import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer';
import PageHero from '@/components/site/PageHero';
import { RolesList } from '@/components/home/Careers';
import ButtonDefault from '@/components/Button/ButtonDefault';

export default function OpportunityPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title={<>Grow with <span className="text-gold">MKDynamics</span>.</>}
          image="/media/image9.jpg"
          crumbs={[{ href: '/Opportunity', label: 'Careers' }]}
          lede="Talent can come from anywhere. We offer internships, student jobs and roles to students, self-taught developers and career changers."
        />
        <section className="container-mk grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight md:col-span-4">Open positions</h2>
          <div className="md:col-span-8">
            <RolesList />
            <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl bg-paper-2 p-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-lg">Don&apos;t see your role? Send us a spontaneous application.</p>
              <ButtonDefault label="Apply" href="/resumecv" variant="dark" />
            </div>
          </div>
        </section>
      </main>
      <Footer cta={false} />
    </>
  );
}
