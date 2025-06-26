"use client"
import Navbar from "@/components/Navbar/Navbar";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import Footer from "@/components/footer";
import { Opportunity } from "../../function";
import Image from "next/image";
import ButtonDefault from "@/components/Button/ButtonDefault";
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function About() {

  const design = Opportunity.find((item) => item.type?.toLowerCase() === "security") || Opportunity[2];
  const router = useRouter();
  const ApplyCV = () => {
    router.push('/resumecv');
  };
  return (
    <>
      <Navbar />
      <section
        className="w-full flex flex-col items-center justify-center py-32"
        style={{ background: backgroundcolors.Tertiary }}
      >
        <MovingLetters text="Different Opportunity" />
        <p className="mt-6 text-lg text-center max-w-2xl font-light text-white">
          At MKDynamics, we have the IT Solutions you need - innovative, secure and built for your challenges
        </p>
      </section>


      <section className="w-full py-16 px-4" style={{ background: backgroundcolors.Quaternary }}>
        <div className="max-w-4xl mx-auto p-8">

          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div>
              <span className="text-sm font-medium text-gray-500 uppercase" style={{color : colors.Primary}}>Type</span>
              <div className="text-lg font-light text-black">{design.type}</div>
            </div>
            <div className="hidden md:block h-8 border-l border-gray-200 mx-6" />
            <div>
              <span className="text-sm font-medium text-gray-500 uppercase" style={{color : colors.Primary}}>Status</span>
              <div className={`text-lg font-light ${design.status === "Available" ? "text-green-600" : "text-red-600"}`}>{design.status}</div>
            </div>
          </div>

          <div className="border-b border-gray-200 my-6" />

          <h1 className="text-3xl md:text-5xl font-medium mb-6 pt-10">{design.title}</h1>

          <p className="text-gray-500 text-lg mb-10 font-light">
            At MKDynamics, cybersecurity is more than just protection — it’s about understanding vulnerabilities, anticipating threats, and fortifying digital assets against evolving risks. Whether you’re fascinated by network security, ethical hacking, or web application testing, we provide a dynamic environment where curious minds can develop hands-on skills, work on real penetration testing projects, and contribute to safeguarding critical infrastructures. As a security consultancy intern, you’ll collaborate with experienced consultants, analyze systems from multiple angles, and help clients strengthen their defenses.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why do we recruit security consultancy profiles?</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            At MKDynamics, security is the backbone of every digital solution. Identifying weaknesses in external networks, internal infrastructures, or web applications can mean the difference between resilience and breach. We recruit interns in security consultancy to bring fresh curiosity, rigorous methodology, and ethical hacking skills to the table. By integrating penetration testing early and continuously, we ensure our clients not only meet compliance but also proactively defend against cyber threats — making their digital environments safer, smarter, and more robust.
          </p>

          <div className="w-full flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
              <Image src="/image4.jpeg" alt="Security 1" fill className="object-cover rounded-2xl" />
            </div>
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
              <Image src="/image10.jpeg" alt="Security 2" fill className="object-cover rounded-2xl" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Recommended Profile  in Security Consultancy (Penetration Testing)</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2 font-light">
            <li>Student studying cybersecurity, computer science, information technology, or related fields</li>
            <li>Deep interest in ethical hacking, penetration testing, and network security</li>
            <li>Analytical and problem-solving mindset with attention to detail</li>
            <li>Motivated to learn professional pentesting methodologies and tools</li>
            <li>Responsible and ethical approach to sensitive information</li>
            <li>Comfortable working both independently and in teams</li>
            <li>Eager to engage with external/internal network and web app testing projects</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Recommended Skills</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2 ">
            <li><b>Technical skills</b></li>
            <ul className="list-disc pl-6 space-y-1">
              <li>Experience or willingness to learn tools like:</li>
              <ul className="list-disc pl-6 font-light">
                <li>Nmap, Wireshark for network scanning and traffic analysis</li>
                <li>Burp Suite, OWASP ZAP for web app testing</li>
                <li>IMetasploit, Nikto, SQLmap for exploitation</li>
                <li>Penetration testing environments (e.g., Kali Linux)</li>
              </ul>
              <li>Solid understanding of network protocols (TCP/IP, DNS, HTTP/S) and architectures</li>
              <li>Knowledge of common vulnerabilities (OWASP Top 10, network weaknesses)</li>
              <li>Familiarity with penetration testing standards (OSSTMM, PTES, NIST)</li>
              <li>Basic scripting (Python, Bash, PowerShell) for task automation</li>
              <li>Knowledge of security fundamentals: firewalls, IDS/IPS, encryption</li>
              <li>Experience with Linux and Windows operating systems</li>
              <li>Strong documentation and reporting skills</li>
            </ul>
            <li><b>Soft skills</b></li>
            <ul className="list-disc pl-6 space-y-1">
              <li>Curiosity and eagerness to learn in a fast-changing field</li>
              <li>Strong analytical thinking and attention to detail</li>
              <li>Clear communication skills for technical and non-technical stakeholders</li>
              <li>Team player with professional ethics and discretion</li>
              <li>Time management and task prioritization</li>
            </ul>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Extras to Boost Your Profile</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Personal pentesting labs or CTF platforms (HackTheBox, TryHackMe)</li>
            <li>Relevant certifications (CompTIA Security+, CEH, OSCP – even in progress)</li>
            <li>Understanding of cloud security and DevSecOps (bonus)</li>
            <li>Familiarity with compliance and security frameworks (GDPR, ISO 27001)</li>
            <li>Knowledge of software development lifecycle for web app security insight</li>
          </ul>
        </div>
      </section>
      <div className="flex items-center justify-center mt-20">
        <ButtonDefault
                label="Apply now !"
                onClick={(ApplyCV)}
                icon={<ArrowRight color="white" size={20} />}
              />
        </div>
      <Footer />
    </>
  );
}