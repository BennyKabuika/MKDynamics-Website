'use client';

import React from 'react';
import { Services } from '../app/function';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from '@/app/color';
import { motion } from 'framer-motion';
import ButtonDefault from '@/components/Button/ButtonDefault';
import { useRouter } from 'next/navigation';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function OurServices() {

  const router = useRouter();
  const navigateToService = () => {
    router.push('/servicess');
  };
  return (
    <section className="w-full px-8 md:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Titres animés et centrés */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-sm font-medium mb-12" style={{ color: colors.Primary }}>
            .OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-12">
            Different IT Solutions
          </h2>
        </motion.div>

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
        <motion.div
            className="mt-12 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            >
            <ButtonDefault label="More Services" onClick={(navigateToService)} />
        </motion.div>

      </div>
    </section>
  );
}
