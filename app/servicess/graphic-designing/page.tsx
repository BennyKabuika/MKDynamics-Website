"use client";
import Navbar from "@/components/Navbar/Navbar";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import Footer from "@/components/footer";
import { Services } from "../../function";
import Image from "next/image";
import ButtonDefault from "@/components/Button/ButtonDefault";
import { useRouter } from "next/navigation";

export default function GraphicDesign() {
  
  const design = Services.find((item) => item.title?.toLowerCase() === "graphicdesign") || Services[2];
    const router = useRouter();

    const navigateToContact = () => {
        router.push('/contact');
    };
  return (
    <>
      <Navbar />
      <section
        className="w-full flex flex-col items-center justify-center py-32"
        style={{ background: backgroundcolors.Tertiary }}
      >
        <MovingLetters text="Services" />
        <p className="mt-6 text-lg text-center max-w-2xl font-light text-white">
          At MKDynamics, we have the IT Solutions you need - innovative, secure and built for your challenges
        </p>
      </section>

      {/* Bloc d'information */}
      <section className="w-full py-16 px-4" style={{ background: backgroundcolors.Quaternary }}>
        <div className="max-w-4xl mx-auto p-8">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 pt-10">{design.title}</h1>
          {/* Description */}
          <p className="text-gray-500 text-lg mb-10 font-light">
            In a world where visual impact is everything, great design is no longer a luxury — it’s a necessity. From branding to digital interfaces, graphic design shapes how customers perceive and engage with your business. At MKDynamics, we create compelling visuals that communicate your identity, enhance user experience, and build lasting impressions. Whether it’s for web, mobile, print, or social media, our design team transforms ideas into eye-catching, functional graphics that drive results and elevate your brand.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">Logo Design</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            A logo is more than just a symbol — it&apos;s the visual cornerstone of your brand identity. It communicates who you are, what you stand for, and sets the tone for how customers perceive your business. At MKDynamics, we design logos that are clean, memorable, and versatile across all mediums — from websites and mobile apps to business cards and social media. Whether you&apos;re launching a new brand or refreshing an existing one, our goal is to create a mark that captures your essence and leaves a lasting impression.
          </p>
          {/* Images côte à côte */}
          <div className="w-full flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
              <Image src="/image2.jpeg" alt="Design 1" fill className="object-cover rounded-2xl" />
            </div>
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
              <Image src="/image3.jpeg" alt="Design 2" fill className="object-cover rounded-2xl" />
            </div>
          </div>
          
          {/* Recommended Skills */}
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">Brochure and Flyers</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            A flyer is a succinct and visually compelling printed material designed to promote events, special offers, or services. Its concise format and eye-catching design enable rapid dissemination and immediate engagement with the intended audience. A business card is a compact, professional card that contains essential contact information and branding for an individual or organization. It serves as a tangible introduction, facilitating networking and fostering professional relationships. Together, flyers and business cards play vital roles in marketing and communication strategies, combining broad outreach with personal connection.
          </p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">Flyers and Business Card</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            A mobile web application is a website optimized for smartphones and tablets, accessible through a mobile browser without needing to be downloaded from an app store. Built using responsive web technologies like HTML5, CSS3, and JavaScript, mobile web apps adapt to various screen sizes and offer fast access across all devices. While they don&apos;t have full access to native device features, they are cost-effective, easy to maintain, and ideal for businesses seeking broad accessibility without the overhead of app store deployment. At MKDynamics, we design high-performing mobile web apps that provide a smooth user experience on any device, anywhere.
          </p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">Custom Illustration</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            We offer original, tailor-made illustrated graphics crafted from the ground up to perfectly align with your unique requirements and preferred style. Based on your feedback, our illustrations can be adapted for various uses, including landing pages, social media posts, and infographics, ensuring a consistent and impactful visual identity.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-16 flex justify-center">
            <ButtonDefault label="Let's talk" onClick={(navigateToContact)}/>
        </div>
      </section>
      <Footer />
    </>
  );
}