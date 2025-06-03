"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section
        className="w-full flex flex-col items-center justify-center py-32"
        style={{ background: backgroundcolors.Tertiary }}
      >
        <MovingLetters text="Contact Us" />
        <p className="mt-6 text-lg text-center max-w-2xl font-light text-white">
          At MKDynamics, we have the IT Solutions you need - innovative, secure and built for your challenges
        </p>
      </section>
      <ContactForm />

      {/* Section Get in touch */}
      <section className="w-full" style={{ background: backgroundcolors.Quaternary }}>
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <span className="text-sm font-light mb-8 py-20" style={{ color: colors.Primary }}>.GET IN TOUCH</span>
          <h2 className="text-3xl md:text-5xl font-medium text-center mb-16">Let us know if you have any project for us</h2>
          {/* Cartes de contact */}
          <div className="w-full flex justify-center mb-16">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Card 1 */}
              <div className="relative bg-gray-50  p-8 min-h-[220px] min-w-[340px] flex flex-col items-start justify-start mb-16">
                <div className="w-20 h-20  flex items-center justify-center absolute left-8 top-8" style={{ background: backgroundcolors.Tertiary }}>
                  <Mail color="white" size={28} />
                </div>
                <div className="pt-24 pl-2 flex flex-col items-start w-full">
                  <div className="text-xl font-medium text-black mb-5 mt-16">Email address</div>
                  <div className="text-gray-500 text-base">contact@mkdynamics.be</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative bg-gray-50 p-8 min-h-[220px] min-w-[340px] flex flex-col items-start justify-start mb-16">
                <div className="w-20 h-20 bg-black flex items-center justify-center absolute left-8 top-8">
                  <MapPin color="white" size={28} />
                </div>
                <div className="pt-24 pl-2 flex flex-col items-start w-full">
                  <div className="text-xl font-medium text-black mb-5 mt-16">Office address</div>
                  <div className="text-gray-500 text-base">Avenue jean de Bologne 9 1020</div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative bg-gray-50 p-8 min-h-[220px] min-w-[340px] flex flex-col items-start justify-start mb-16">
                <div className="w-20 h-20 flex items-center justify-center absolute left-8 top-8" style={{ background: "#d8e8fa" }}>
                  <Phone color="#1e3a8a" size={28} />
                </div>
                <div className="pt-24 pl-2 flex flex-col items-start w-full">
                  <div className="text-xl font-medium text-black mb-5 mt-16">Phone number</div>
                  <div className="text-gray-500 text-base">+32 476 44 03 47</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Google Map sur toute la largeur et hauteur de la page */}
        <div className="relative w-full min-h-screen mt-8">
          <iframe
            title="MKDynamics Office"
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Avenue%20jean%20de%20Bologne%209%201020&output=embed"
          />
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
        </div>
      </section>
      <Footer />
    </>
  );
}