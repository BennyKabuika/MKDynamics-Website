"use client"
import Navbar from "@/components/Navbar/Navbar";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import Footer from "@/components/footer";
import { Opportunity } from "../../function";
import Image from "next/image";
import ButtonDefault from "@/components/Button/ButtonDefault";
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  const design = Opportunity.find((item) => item.type?.toLowerCase() === "design") || Opportunity[0];
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
            At MKDynamics, design is more than aesthetics — it&apos;s how we solve problems, tell stories, and elevate user experiences. Whether you&apos;re into UI/UX, branding, or digital illustration, we give creative minds the space to explore, learn, and shape real-world products. As a design intern, you&apos;ll work on live projects, collaborate with developers and strategists, and bring bold ideas to life.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why do we recruit design profiles?</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            At MKDynamics, design is at the heart of every digital solution. A powerful user interface, a strong brand identity, or a thoughtful user journey can make the difference between average and exceptional. We recruit design interns and creatives to bring fresh perspectives, challenge conventions, and craft visual experiences that connect with real users. By integrating design from the ground up, we ensure our solutions aren’t just functional — they’re beautiful, intuitive, and impactful.
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Recommended Profile for a Graphic Designer</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2 font-light">
            <li>Student studying graphic design, visual arts, communication design, or a related creative field</li>
            <li>Passionate about visual creation with a good aesthetic sense</li>
            <li>Creative and curious, able to propose innovative ideas</li>
            <li>Motivated to learn and adapt quickly in a professional environment</li>
            <li>Organized and detail-oriented, even under tight deadlines</li>
            <li>Open to feedback and able to work well in a team</li>
            <li>Available for diverse tasks (branding, print/digital media, social networks…)</li>
          </ul>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Recommended Skills</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2 ">
            <li><b>Technical skills (hard skills)</b></li>
            <ul className="list-disc pl-6 space-y-1">
              <li>Proficiency in Adobe Creative Suite:</li>
              <ul className="list-disc pl-6 font-light">
                <li>Photoshop (photo editing, compositing)</li>
                <li>Illustrator (vector creation, logos, illustrations)</li>
                <li>InDesign (layout design, multi-page documents)</li>
              </ul>
              <li>Basic knowledge of typography, color theory, and layout principles</li>
              <li>Understanding of web design / UI/UX basics (a plus for digital jobs)</li>
              <li>Knowledge of print formats and printing rules</li>
              <li>Ability to create visuals adapted for social media platforms</li>
              <li>Familiarity with other tools like Canva or Figma (bonus)</li>
              <li>Basic skills in simple animation (e.g., GIFs, basic motion design) = plus</li>
            </ul>
            <li><b>Soft skills</b></li>
            <ul className="list-disc pl-6 space-y-1">
              <li>Creativity and strong aesthetic sense</li>
              <li>Good communication skills (ability to clearly present ideas)</li>
              <li>Team spirit and ability to collaborate with other departments (marketing, developers, clients)</li>
              <li>Autonomy and organization</li>
              <li>Ability to meet deadlines</li>
              <li>Willingness to learn continuously and improve</li>
            </ul>
          </ul>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Extras to Boost Your Profile</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Online portfolio (Behance, Dribbble, personal website)</li>
            <li>Real experience (even personal or volunteer projects)</li>
            <li>Professional English skills (often requested)</li>
            <li>Awareness of current graphic design trends</li>
          </ul>
        </div>
        <div className="flex items-center justify-center mt-20">
          <ButtonDefault
                  label="Apply now !"
                  onClick={(ApplyCV)}
                  icon={<ArrowRight color="white" size={20} />}
                />
        </div>
        
      </section>
      <Footer />
    </>
  );
}