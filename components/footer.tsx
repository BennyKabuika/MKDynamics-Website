'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { backgroundcolors, colors } from '@/app/color';
import  ButtonDefault  from '../components/Button/ButtonDefault'; 
import logo from '@/public/logo.png'; 
import { useRouter } from 'next/navigation';

export default function Footer() {
    const router = useRouter();
    
  const NavigateToContact = () => {
    router.push('/contact');
  };

  return (
    <footer className="text-white py-16 px-8 md:px-16" style={{ backgroundColor: backgroundcolors.Secondary }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Colonne 1 - Logo et description */}
        <div>
          <Image src={logo} alt="Logo" width={150} height={50} className="mb-12" />
          <p className="text-sm mb-12 text-gray-500">
            In today’s fast-moving tech landscape, MKDynamics partners with you to deliver tailored IT
            solutions that protect, connect, and empower your business.
          </p>
          <ButtonDefault label="Get In Touch" onClick={(NavigateToContact)} />
        </div>

        {/* Colonne 2 - Get in Touch */}
        <div>
          <h4 className="text-lg font-semibold mb-12">Get in touch</h4>
          <div className="mb-4">
            <a href="tel:+32475440347" className="flex items-center gap-3 hover:underline">
              <Phone size={20} style={{color : colors.Primary}} />
              +32 475 44 03 47
            </a>
            <p className="text-xs text-gray-500 mt-1">Phone number</p>
          </div>
          <div className="border-t border-gray-800 my-4"></div>
          <div className="mb-4">
            <a href="mailto:contact@mkdynamics.be" className="flex items-center gap-3 hover:underline">
              <Mail size={20} style={{color : colors.Primary}} />
              contact@mkdynamics.be
            </a>
            <p className="text-xs text-gray-500 mt-1">Email address</p>
          </div>
          <div className="border-t border-gray-800 my-4"></div>
          <div>
            <a
              href="https://www.google.com/maps?q=Avenue+Jean+de+Bologne+9,+1020+Brussels"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              <MapPin size={20} style={{color : colors.Primary}} />
              Brussels, BE
            </a>
            <p className="text-xs text-gray-500 mt-1">Avenue Jean de Bologne 9, 1020 Brussels</p>
          </div>
        </div>

        {/* Colonne 3 - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-12">Quick links</h4>
          <ul className="space-y-4 text-sm" >
            <li>
              <Link href="/" className="hover:cursor-pointer" style={{ color: backgroundcolors.Quaternary }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:cursor-pointer" style={{ color: backgroundcolors.Quaternary }}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:cursor-pointer" style={{ color: backgroundcolors.Quaternary }}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:cursor-pointer" style={{ color: backgroundcolors.Quaternary }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 4 - Office Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-12">Office hours</h4>
          <p className="text-sm text-gray-500">
            Monday - Friday <br />
            <span className="font-bold text-white">8 AM - 4 AM</span>
          </p>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-gray-800 pt-6">
        <p className="text-sm text-left text-gray-300">
          © MKDYNAMICS 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
