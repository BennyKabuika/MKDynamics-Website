"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from 'framer-motion';
import ButtonDefault from '@/components/Button/ButtonDefault';
import { Services } from '../../app/function';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <section
        className="w-full flex flex-col items-center justify-center py-32"
        style={{ background: backgroundcolors.Tertiary }}
      >
        <MovingLetters text="What we do" />
        <p className="mt-6 text-lg text-center max-w-2xl font-light text-white">
          At MKDynamics, we have the IT Solutions you need - innovative, secure and built for your challenges
        </p>
      </section>
      <section className="w-full px-8 md:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Titres animés et centrés */}

        {/* Cartes carrées */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {Services.map((service, index) => (
            <motion.div
              key={service.id}
              className="w-[390px] h-[390px] bg-white border border-gray-100 shadow-sm flex flex-col items-start p-6"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {/* Icône */}
              <div className="w-20 h-20 relative mb-12">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenu */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-lg mb-2 font-light">
                {service.description}
              </p>

              <Link
                href={service.button.link}
                className="mt-4 text-black text-sm font-medium hover:no-underline"
              >
                {service.button.text}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}