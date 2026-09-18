import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer';
import PageHero from '@/components/site/PageHero';
import Hl from '@/components/site/Hl';
import ServiceTiles from '@/components/home/ServiceTiles';
import Orbit from '@/components/home/Orbit';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title={<>IT solutions, <Hl on="light">end to end</Hl>.</>}
          image="/media/image10.jpg"
          crumbs={[{ href: '/servicess', label: 'Services' }]}
          lede="Innovative, secure and built for your challenges: from your first website to a full security assessment."
        />
        <ServiceTiles heading={false} />
        <Orbit />
      </main>
      <Footer />
    </>
  );
}
