'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ButtonDefault from '@/components/Button/ButtonDefault';
import { backgroundcolors, colors } from '@/app/color';
import { motion, AnimatePresence } from 'framer-motion';
import { Router } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  const missionText =
    'Our mission at MKDYNAMICS is to provide comprehensive digital solutions — from web and app development to design and cybersecurity — empowering businesses to thrive with innovative, all-in-one IT services.';

  const visionText =
    'To be a leading digital partner recognized for delivering innovative, secure, and comprehensive IT solutions that empower businesses worldwide to grow confidently in a fast-evolving digital landscape.';

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const NavigateToAbout = () => {
    router.push('/about');
  };
  

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className="relative w-full min-h-[90vh] px-8 md:px-16 py-12"
      style={{ backgroundColor: backgroundcolors.Quaternary }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-12 gap-x-16">
        {/* Ligne 1 */}
        <motion.div className="flex items-center" variants={fadeIn}>
          <p className="text-sm font-medium" style={{ color: colors.Primary }}>
            .ABOUT OUR COMPANY
          </p>
        </motion.div>

        <motion.div variants={fadeIn}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-snug pb-24 max-w-full ">
            MKDynamics is a trusted security firm specializing in comprehensive IT and cybersecurity solutions.
          </h1>
        </motion.div>

        {/* Ligne 2 */}
        <motion.div variants={fadeIn}>
          <div className="flex gap-6 mb-6">
            <button
            style={{color: colors.Tertiary}}
              className={`text-2xl font-normal ${
                activeTab === 'mission'
                  ? 'cursor-default'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('mission')}
              aria-selected={activeTab === 'mission'}
            >
              Mission
            </button>
            <button
              className={`text-2xl font-normal ${
                activeTab === 'vision'
                  ? ' text-white cursor-default'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('vision')}
              aria-selected={activeTab === 'vision'}
            >
              Vision
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'mission' ? (
              <motion.p
                key="mission"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-base leading-relaxed f"
                style={{ color: colors.Quaternary }}
              >
                {missionText}
              </motion.p>
            ) : (
              <motion.p
                key="vision"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-base leading-relaxed"
                style={{ color: colors.Quaternary }}
              >
                {visionText}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div className="relative flex justify-center items-start w-full" variants={fadeIn}>
          <Image
            src="/image1.jpeg"
            alt="MKDynamics visual"
            width={1200}
            height={900}
            className="object-cover rounded-lg"
          />

          <div
            className="absolute right-4 md:right-6 rounded shadow-lg flex flex-col items-center justify-center text-white font-semibold p-4 md:p-6"
            style={{
                backgroundColor: backgroundcolors.Tertiary,
                top: '-40px',
                width: 'clamp(150px, 30vw, 240px)',
                height: 'clamp(140px, 25vw, 200px)',
                textAlign: 'center',
            }}
            >
            <span className="text-4xl md:text-6xl leading-none font-normal">50+</span>
            <span className="text-sm md:text-lg mt-1 font-normal">
                successful projects and counting
            </span>
            </div>


        </motion.div>

        {/* Ligne 3 */}
        <motion.div variants={fadeIn}>
          <ButtonDefault label="About Us" onClick={NavigateToAbout} />
        </motion.div>

        <div /> {/* Vide pour coller la grille */}
      </div>
    </motion.header>
  );
}
