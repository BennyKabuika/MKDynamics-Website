'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Opportunity } from '../app/function';
import { colors } from '@/app/color';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function OurOpportunity() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false); // <== utiliser une ref stable
  const infiniteOpportunities = [...Opportunity, ...Opportunity];

  // Scroll automatique
  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      if (scrollRef.current && !isPausedRef.current) {
        scrollRef.current.scrollLeft += 0.5;

        // Boucle infinie : reset quand on atteint la moitié
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Scroll manuel + pause temporaire de l'auto scroll
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 320;
      isPausedRef.current = true; // on stoppe temporairement l'auto-scroll

      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });

      // Reprise après 1s
      setTimeout(() => {
        isPausedRef.current = false;
      }, 1000);
    }
  };

  return (
    <section className="w-full px-8 md:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Titres */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium mb-12" style={{ color: colors.Primary }}>
            .OPPORTUNITY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Internship, Student Job & Role
          </h2>
        </motion.div>

        {/* Carrousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-scroll scroll-smooth hide-scrollbar"
          >
            {infiniteOpportunities.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="min-w-[320px] flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % Opportunity.length) * 0.1 }}
              >
                <Link href={item.path} className="block">
                  <div className="relative w-full h-96 border border-gray-300 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chevrons */}
        <div className="flex justify-center mt-8 gap-6">
          <button
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
