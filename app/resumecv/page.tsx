"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import { Mail, MapPin, Phone } from "lucide-react";
import ApplyForm from "@/components/applyForm";

export default function ResumeCV() {
  return (
    <>
      <Navbar />
      <section
        className="w-full flex flex-col items-center justify-center py-32"
        style={{ background: backgroundcolors.Tertiary }}
      >
        <MovingLetters text="How to apply ?" />
        <p className="mt-6 text-lg text-center max-w-2xl font-light text-white">
          At MKDynamics, we have the IT Solutions you need - innovative, secure and built for your challenges
        </p>
      </section>
      <ApplyForm/>
      <Footer />
    </>
  );
}