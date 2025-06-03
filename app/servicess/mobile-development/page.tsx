"use client";
import Navbar from "@/components/Navbar/Navbar";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import Footer from "@/components/footer";
import { Services } from "../../function";
import Image from "next/image";
import ButtonDefault from "@/components/Button/ButtonDefault";
import { useRouter } from "next/navigation";

export default function About() {
  
  const design = Services.find((item) => item.title?.toLowerCase() === "mobileapp") || Services[1];
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
            In today’s digital-first world, mobile applications are essential for engaging users, streamlining operations, and scaling your business. At MKDynamics, we craft intuitive, high-performance mobile apps tailored to your needs—whether for iOS, Android, or cross-platform solutions. From concept to deployment, we ensure your app delivers seamless user experiences, robust security, and real business value. Your vision, powered by cutting-edge mobile technology.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">What Is a Native Mobile Application ?</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            A native application is built specifically for a particular operating system—like iOS or Android—using platform-specific languages and tools. This approach allows apps to fully leverage the device’s hardware, deliver superior performance, and offer a smoother, more responsive user experience. Native apps are ideal when speed, offline access, and seamless integration with device features like the camera or GPS are critical. At MKDynamics, we develop robust native apps that align perfectly with your users’ expectations and your business goals.
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
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">What Is a Hybrid App ?</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            Hybrid applications combine the best of both web and native technologies. Built using web languages like HTML, CSS, and JavaScript, they are wrapped in a native shell that allows them to run seamlessly on multiple platforms—iOS, Android, and beyond. This approach enables faster development, easier maintenance, and reduced costs, while still offering access to device features like the camera or push notifications. At MKDynamics, we build high-performing hybrid apps that balance efficiency, scalability, and a consistent user experience across all devices.
          </p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">What Is a Mobile Web Application ?</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            A mobile web application is a website optimized for smartphones and tablets, accessible through a mobile browser without needing to be downloaded from an app store. Built using responsive web technologies like HTML5, CSS3, and JavaScript, mobile web apps adapt to various screen sizes and offer fast access across all devices. While they don&apos;t have full access to native device features, they are cost-effective, easy to maintain, and ideal for businesses seeking broad accessibility without the overhead of app store deployment. At MKDynamics, we design high-performing mobile web apps that provide a smooth user experience on any device, anywhere.
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