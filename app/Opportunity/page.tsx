import Navbar from "@/components/Navbar/Navbar";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import Footer from "@/components/footer";
import { Opportunity } from "../function"; // <-- adapte le chemin si besoin
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <section
        className="w-full flex flex-col items-center justify-center py-32"
        style={{ background: backgroundcolors.Tertiary }}
      >
        <MovingLetters text="Opportunity" />
        <p className="mt-6 text-lg text-center max-w-2xl font-light text-white">
          At MKDynamics, we have the IT Solutions you need - innovative, secure and built for your challenges
        </p>
      </section>
      {/* Affichage des opportunités */}
      <section className="w-full py-20" style={{ background: backgroundcolors.Quaternary }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {Opportunity.map((item, idx) => (
            <Link href={item.path} className="block" key={idx}>
              <div className="relative w-full h-96 border border-gray-300 rounded-xl overflow-hidden mb-4 group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <div className="flex gap-6 text-sm text-gray-700">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500">Type</span>
                  <span>{item.type}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500">Status</span>
                  <span
                    className={`font-medium ${
                      item.status === 'Available' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}