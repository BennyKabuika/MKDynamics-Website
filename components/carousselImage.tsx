'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { backgroundcolors } from '@/app/color';

const logos = [
  '/atos.jpeg',
  '/eurostar.jpeg',
  '/kpmg.jpeg',
];

export default function CarrouselImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current && listRef.current) {
      const clone = listRef.current.cloneNode(true) as HTMLUListElement;
      clone.setAttribute('aria-hidden', 'true');
      containerRef.current.appendChild(clone);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full inline-flex flex-nowrap overflow-hidden h-32 md:h-40 lg:h-48 xl:h-56 2xl:h-64 relative"
      style={{ backgroundColor: backgroundcolors.Tertiary }} // optionnel
    >
      <ul
        ref={listRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={160}
              height={80}
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
