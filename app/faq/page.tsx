"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors } from '@/app/color';
import { FAQData } from "../function";
import { useState } from "react";
import ContactForm from "@/components/contactForm";

// Composant FAQItem
function FAQItem({
  question,
  answer,
  defaultOpen = false,
  isLast = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  isLast?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white border border-gray-100 rounded-xl mb-6">
      <button
        className="w-full flex justify-between items-center text-left font-normal focus:outline-none py-4 px-4"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{question}</span>
        <span className="ml-4 text-2xl select-none">{open ? "−" : "+"}</span>
      </button>
      {/* Ligne séparatrice entre question et réponse */}
      <div className="border-b border-gray-200 mx-4 mb-4" />
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 px-4 text-gray-600">{answer}</div>
      </div>
    </div>
  );
}

const leftFAQ = FAQData.slice(0, 4);
const rightFAQ = FAQData.slice(4, 8);

export default function FAQ() {
  return (
    <>
      <Navbar />
      <section
        className="w-full flex flex-col items-center justify-center py-32"
        style={{ background: backgroundcolors.Tertiary }}
      >
        <MovingLetters text="FAQ Page" />
        <p className="mt-6 text-lg text-center max-w-2xl font-light text-white">
          At MKDynamics, we have the IT Solutions you need - innovative, secure and built for your challenges
        </p>
      </section>
      <section className="w-full py-20" id="faq" style={{ background: backgroundcolors.Quaternary }}>
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-0">
            {leftFAQ.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                defaultOpen={idx === 0}
                isLast={idx === leftFAQ.length - 1}
              />
            ))}
          </div>
          {/* Colonne droite */}
          <div className="flex flex-col gap-0">
            {rightFAQ.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                defaultOpen={idx === 0}
                isLast={idx === rightFAQ.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
      <ContactForm/>
      <Footer />
    </>
  );
}