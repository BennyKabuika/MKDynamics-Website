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
  
  const design = Services.find((item) => item.title?.toLowerCase() === "security") || Services[3];
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
            Security consultancy involves expert advisory services aimed at helping organizations identify, assess, and manage their cybersecurity risks. By analyzing existing security measures and potential vulnerabilities, consultants develop tailored strategies and solutions to protect critical assets, ensure regulatory compliance, and enhance overall security posture. Their guidance enables businesses to proactively defend against emerging threats and respond effectively to security incidents.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">External Network Penetration Testing</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            External Network Penetration Testing involves a comprehensive and authorized security assessment of an organization’s external-facing IT infrastructure. The goal is to identify vulnerabilities that could be exploited by attackers to gain unauthorized access or disrupt services. This testing simulates real-world cyberattacks on internet-exposed systems such as firewalls, web servers, and routers, providing actionable insights to strengthen defenses and reduce risk.
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
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">Internal Network Penetration Testing</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            Internal Network Penetration Testing is a controlled and authorized security evaluation performed within an organization’s internal IT environment. This testing simulates an attacker with inside access attempting to exploit vulnerabilities in systems, applications, and network configurations. The objective is to identify weaknesses that could lead to unauthorized data access, privilege escalation, or lateral movement, helping organizations strengthen their internal defenses and reduce the risk of insider threats.
          </p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">Web Application Penetration Testing</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            Web Application Penetration Testing is a systematic and authorized assessment designed to identify security vulnerabilities within web applications. By simulating real-world attacks, this testing uncovers weaknesses such as injection flaws, authentication issues, and misconfigurations that could be exploited to compromise data integrity, confidentiality, or availability. The findings provide actionable recommendations to enhance application security and protect sensitive information from cyber threats.
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