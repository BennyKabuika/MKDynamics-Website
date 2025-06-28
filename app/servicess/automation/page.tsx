"use client";
import Navbar from "@/components/Navbar/Navbar";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import Footer from "@/components/footer";
import { Services } from "../../function";
import Image from "next/image";
import ButtonDefault from "@/components/Button/ButtonDefault";
import { useRouter } from "next/navigation";

export default function Automation() {
  
  const design = Services.find((item) => item.title?.toLowerCase() === "automation") || Services[4];
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

      <section className="w-full py-16 px-4" style={{ background: backgroundcolors.Quaternary }}>
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 pt-10">{design.title}</h1>
            
            <p className="text-gray-500 text-lg mb-10 font-light">
            In today’s fast-paced world, automation isn’t a luxury—it’s a necessity. At MKDynamics, we develop custom automation workflows to help businesses and individuals save time, reduce human error, and scale operations efficiently. From cybersecurity to marketing and data processing, our solutions are built to let your systems work smarter—not harder.
            </p>

            <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">Automated Log Monitoring & Alerting</h2>
            <p className="text-gray-500 text-lg mb-10 font-light">
            Detect threats before they become problems. Our automation scripts scan email attachments and logs for malicious indicators in real-time. Whether you&apos;re running a small business or performing pentests, we provide alerts, reports, and escalations directly to your inbox or dashboard—24/7, without lifting a finger.
            </p>

            <div className="w-full flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
                <Image src="/image2.jpeg" alt="Automation Example 1" fill className="object-cover rounded-2xl" />
            </div>
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
                <Image src="/image3.jpeg" alt="Automation Example 2" fill className="object-cover rounded-2xl" />
            </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">Custom Scripts for Routine Tasks</h2>
            <p className="text-gray-500 text-lg mb-10 font-light">
            Repetitive tasks kill productivity. We build tailored scripts to automate everything from daily reporting to database backups, file organization, and even scheduling social media posts. Automations are designed to match your specific workflows—across IT, marketing, customer service, and beyond.
            </p>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">Smart Email Automation & Follow-Ups</h2>
            <p className="text-gray-500 text-lg mb-10 font-light">
            Need to send emails to hundreds of clients based on behavior, time, or data input? We develop automated systems for outreach, follow-ups, and even quote generation. Whether you&apos;re nurturing leads or conducting surveys, your communication becomes timely, relevant, and fully hands-off.
            </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 flex justify-center">
            <ButtonDefault label="Let's Talk" onClick={navigateToContact} />
        </div>
        </section>
      <Footer />
    </>
  );
}