import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import Main from '@/components/main';
import OurServices from '@/components/ourServices';
import CarousselImage from '@/components/carousselImage';
import OurOpportunity from '@/components/ourOpportunity';
import Footer from '@/components/footer';
import { HeroParallaxDemo } from '@/components/showRealisations';


export default function Home() {
  return (
    <>
      
      <Navbar />
      <Header />
      <Main />
      <OurServices />
      <CarousselImage />
      <OurOpportunity />
      <HeroParallaxDemo />
      <Footer />
    </>
  );
}