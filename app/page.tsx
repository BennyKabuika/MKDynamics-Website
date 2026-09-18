import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/footer';
import Hero from '@/components/home/Hero';
import Logos from '@/components/home/Logos';
import Statement from '@/components/home/Statement';
import Orbit from '@/components/home/Orbit';
import ServiceTiles from '@/components/home/ServiceTiles';
import Careers from '@/components/home/Careers';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Logos />
        <Statement />
        <Orbit />
        <ServiceTiles />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
