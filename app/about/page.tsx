"use client";

import Navbar from "@/components/Navbar/Navbar";
import {MovingLetters} from "@/app/animations/MovingLetters";
import ButtonDefault from "@/components/Button/ButtonDefault";
import CarousselImage from "@/components/carousselImage";
import { backgroundcolors, colors } from '@/app/color';
import Footer from "@/components/footer";
import { Timeline } from "../animations/timeline";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";



const World = dynamic(() => import("../animations/globe").then(mod => mod.World), {
  ssr: false,
});

const globeConfig = {
  globeColor: "#051654",
  emissive: "#051654",
  emissiveIntensity: 0.1,
  shininess: 0.9,
};
const globeData = [
  {
    order: 1,
    startLat: 48.85,
    startLng: 2.35,
    endLat: 40.71,
    endLng: -74.01,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 2,
    startLat: 50.85,
    startLng: 6.35,
    endLat: 35.68,
    endLng: 139.76,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 3,
    startLat: 51.51,   // London
    startLng: -0.13,
    endLat: -33.87,    // Sydney
    endLng: 151.21,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 4,
    startLat: 40.41,   // Madrid
    startLng: -3.70,
    endLat: 55.75,     // Moscow
    endLng: 37.62,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 5,
    startLat: 52.52,   // Berlin
    startLng: 13.40,
    endLat: -23.55,    // São Paulo
    endLng: -46.63,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 6,
    startLat: 34.05,   // Los Angeles
    startLng: -118.24,
    endLat: 1.29,      // Singapore
    endLng: 103.85,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 7,
    startLat: 19.43,   // Mexico City
    startLng: -99.13,
    endLat: 55.86,     // Beijing
    endLng: 4.35,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 8,
    startLat: 28.61,   // New Delhi
    startLng: 77.20,
    endLat: 59.93,     // Saint Petersburg
    endLng: 30.33,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 9,
    startLat: -26.20,  // Johannesburg
    startLng: 28.04,
    endLat: 35.68,     // Tokyo
    endLng: 139.76,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 10,
    startLat: -33.92,  // Cape Town
    startLng: 18.42,
    endLat: 37.77,     // San Francisco
    endLng: -122.42,
    arcAlt: 0.2,
    color: "#87CEEB"
  },
  {
    order: 11, // Rome → Nairobi (Europe → Afrique)
    startLat: 41.90, startLng: 12.50,
    endLat: -1.29, endLng: 36.82,
    arcAlt: 0.2, color: "#87CEEB"
  },
  {
    order: 12, // Ottawa → Le Caire (Amérique du Nord → Afrique)
    startLat: 45.42, startLng: -75.69,
    endLat: 30.04, endLng: 31.24,
    arcAlt: 0.2, color: "#87CEEB"
  },
];

const timelineData = [
  {
    title: "Motivation",
    content: (
      <p>
        Motivation is the driving force behind every member of our team. At MKDYNAMICS, we believe
        that enthusiasm and determination fuel progress. Each project is approached with genuine
        emotional and intellectual commitment, because only true motivation can overcome challenges
        and push us to achieve excellence.
      </p>
    ),
    image: "/image12.jpeg",
  },
  {
    title: "Knowledge",
    content: (
      <p>
        Knowledge is the foundation of our expertise. We continuously invest in learning,
        technological watch, and skill development. By cultivating deep, up-to-date knowledge, we
        provide our clients with relevant and innovative solutions rooted in a solid understanding
        of their challenges.
      </p>
    ),
    image: "/image8.jpeg",
  },
  {
    title: "Dedication",
    content: (
      <p>
        Our dedication is shown through full commitment to every project. More than a service, we
        offer a genuine partnership where our client’s success is our own goal. This loyalty is
        reflected in our rigor, availability, and constant perseverance throughout the
        collaboration.
      </p>
    ),
    image: "/image9.jpeg",
  },
  {
    title: "Youthful Energy",
    content: (
      <p>
        We foster a youthful, bold mindset focused on the future. This energy pushes us to challenge
        the status quo, explore new ideas, and stay dynamic. At MKDYNAMICS, youth is not an age —
        it’s a mindset driven by curiosity, creativity, and agility in an ever-evolving world.
      </p>
    ),
    image: "/image10.jpeg",
  },
  {
    title: "Network",
    content: (
      <p>
        We believe in the power of connections. Our strong network of partners, clients, and experts
        is a valuable resource we mobilize to co-create high-quality solutions. Collaboration,
        listening, and trust are central to our approach, because we know that great achievements
        are always collective.
      </p>
    ),
    image: "/image7.jpeg",
  },
  {
    title: "Agility",
    content: (
      <p>
        In a fast-changing world, agility is a necessity. We&apos;ve adopted flexible and adaptive
        working methods to meet challenges while staying strategically focused. Our agility is
        reflected not just in our processes, but in how we think, plan, and communicate.
      </p>
    ),
    image: "/image11.jpeg",
  },
  {
    title: "Mission",
    content: (
      <p>
        Our mission is clear: to create lasting, positive impact for our clients. Every solution we
        deliver is designed to genuinely improve performance, visibility, and long-term success. We
        don’t just aim to satisfy — we strive to inspire, transform, and build sustainable value.
      </p>
    ),
    image: "/image12.jpeg",
  },
  {
    title: "Integrity",
    content: (
      <p>
        Integrity guides every action we take. We place ethics, transparency, and responsibility at
        the heart of our professional relationships. At MKDYNAMICS, trust is not claimed — it is
        earned through honesty, reliability, and accountability.
      </p>
    ),
    image: "/image8.jpeg",
  },
  {
    title: "Creativity",
    content: (
      <p>
        Creativity is our core strength. We tackle every challenge with fresh perspectives, bold
        ideas, and tailor-made solutions. We reject one-size-fits-all approaches in favor of
        exploration and innovation. That’s how we create truly distinctive value.
      </p>
    ),
    image: "/image9.jpeg",
  },
  {
    title: "Synergy",
    content: (
      <p>
        We believe the whole is greater than the sum of its parts. Synergy is the art of aligning
        skills, visions, and energy to go further, faster, and stronger. By working hand in hand
        with clients and teams, we build a high-performance, trust-based ecosystem.
      </p>
    ),
    image: "/image10.jpeg",
  },
];


export default function About() {

  const router = useRouter();
  const navigateToServices = () => {
    router.push('/servicess');
  };
  return (
    <>
      <Navbar />

      
      <section
        className="w-full flex flex-col items-center justify-center py-32"
        style={{ background: backgroundcolors.Tertiary }}
      >
        <MovingLetters text="About Company" />
        <p className="mt-6 text-lg text-center max-w-2xl font-light text-white">
          At MKDynamics, we have the IT Solutions you need - innovative, secure and built for your challenges
        </p>
      </section>

      
      <section className="w-full flex flex-col md:flex-row items-stretch justify-center py-20 gap-8" style={{ background: backgroundcolors.Quaternary }}>
        <div className="flex-1 flex flex-col items-start justify-center px-8">
          <span className="text-sm font-normal mb-12" style={{color : colors.Primary}}>.ABOUT OUR COMPANY</span>
          <h2 className="text-5xl md:text-6xl font-normal mb-6">
            Trusted IT Solutions for apps, websites, design and security
          </h2>
          <div className="w-full flex justify-center">
            <div
              style={{
                width: "100%",
                maxWidth: 500,
                aspectRatio: "1/1",
                minHeight: 250,
              }}
            >
              <World globeConfig={globeConfig} data={globeData} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start px-8 gap-8">
          <div>
            <h3 className="text-2xl font-normal mb-2">Our mission</h3>
            <p className="text-gray-400">
              Our mission at MKDYNAMICS is to provide comprehensive digital solutions — from web and app development to design and cybersecurity — empowering businesses to thrive with innovative, all-in-one IT services.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-normal mb-2">Our vision</h3>
            <p className="text-gray-400">
              To be a leading digital partner recognized for delivering innovative, secure, and comprehensive IT solutions that empower businesses worldwide to grow confidently in a fast-evolving digital landscape.
            </p>
          </div>
          <div className="mt-4">
            <ButtonDefault label="Our Services" onClick={(navigateToServices)} />
          </div>
        </div>
      </section>
      
      <CarousselImage />
      <section className="w-full py-16 bg-white" style={{ background: backgroundcolors.Quaternary }}>
        <h2 className="text-sm font-normal mb-6 text-center" style={{color : colors.Primary}}>
          .OUR VALUES
        </h2>
        <Timeline data={timelineData} />
      </section>
      <Footer />
      
    </>
  );
}