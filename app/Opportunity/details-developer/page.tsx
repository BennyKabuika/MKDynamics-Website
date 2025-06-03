import Navbar from "@/components/Navbar/Navbar";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import Footer from "@/components/footer";
import { Opportunity } from "../../function";
import Image from "next/image";

export default function About() {
  // On prend la première opportunité de type "design" (adapte selon ta structure)
  const design = Opportunity.find((item) => item.type?.toLowerCase() === "developer") || Opportunity[1];

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

      {/* Bloc d'information */}
      <section className="w-full py-16 px-4" style={{ background: backgroundcolors.Quaternary }}>
        <div className="max-w-4xl mx-auto p-8">
          {/* Type & Status */}
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
          {/* Séparateur */}
          <div className="border-b border-gray-200 my-6" />
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-medium mb-6 pt-10">{design.title}</h1>
          {/* Description */}
          <p className="text-gray-500 text-lg mb-10 font-light">
            At MKDynamics, we believe in giving opportunities to passionate developers — whether you&apos;re a student, a self-taught coder, or in career transition. We offer flexible internship programs that let you gain real-world experience, grow your skills, and contribute to meaningful projects, wherever you are in your learning journey.
          </p>
          {/* Why recruit */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why do we offer open internship opportunities?</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            At MKDynamics, we believe talent can come from anywhere — not just from degrees or traditional paths. By offering internships to self-taught developers, students, or those switching careers, we aim to create a more inclusive and dynamic tech ecosystem. We see internships not just as training, but as a way to discover passionate individuals, share real-world experience, and build the next generation of creators who think differently, learn fast, and care about impact.
          </p>
          {/* Images côte à côte */}
          <div className="w-full flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
              <Image src="/image2.jpeg" alt="Developer 1" fill className="object-cover rounded-2xl" />
            </div>
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
              <Image src="/image5.jpeg" alt="Developer 2" fill className="object-cover rounded-2xl" />
            </div>
          </div>
          {/* Recommended Profile */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Recommended Developer Profiles</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2 font-light">
            <li>Web development students or bootcamp graduates</li>
            <li>Self-taught developers with GitHub or portfolio projects</li>
            <li>Junior developers looking for real-world experience</li>
            <li>Career changers with a strong motivation to learn</li>
          </ul>
          {/* Recommended Skills */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Core Skills We Value</h2>
          <h3 className="text-sm md:text-sm font-light mb-4 text-gray-500">You don’t need to master them all — but the more you’re familiar with, the better:</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2 ">
            <li><b>Frontend</b></li>
            <ul className="list-disc pl-6 space-y-1">
              <li>HTML / CSS / JavaScript</li>
              <li>React or Next.js (preferred)</li>
              <li>Tailwind CSS (nice to have)</li>
              <li>Git & GitHub basics</li>
            </ul>
            <li><b>Backend (optional but appreciated)</b></li>
            <ul className="list-disc pl-6 space-y-1">
              <li>Node.js or Express</li>
              <li>Firebase, Supabase, or simple APIs</li>
              <li>Basic understanding of databases (MongoDB, PostgreSQL, etc.)</li>
            </ul>
            <li><b>Bonus</b></li>
            <ul className="list-disc pl-6 space-y-1">
              <li>Working with REST APIs</li>
              <li>Debugging skills</li>
              <li>Good code organization and a love for clean UI</li>
            </ul>
          </ul>
          {/* Extras */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What we offer in return</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Real client projects and mentorship</li>
            <li>Code reviews & best practices</li>
            <li>Flexible remote collaboration</li>
            <li>A chance to learn design, security, or full-stack workflows if you’re curious</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}