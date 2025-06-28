'use client'
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { colors, backgroundcolors } from '../../app/color';
import ButtonDefault from '../Button/ButtonDefault';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [pageMenuOpen, setPageMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPageMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setPageMenuOpen(false);
    }, 200);
  };

  const NavigateToAbout = () => {
    router.push('/about');
  };
  const NavigateToContact = () => {
    router.push('/contact');
  };
    

  return (
    <nav className="w-full" style={{ background: backgroundcolors.Primary }}>
      <div className="mx-auto flex items-center justify-between h-32 px-4 max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo2.png" alt="Logo" width={220} height={220} />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-12 ">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/Opportunity', label: 'Opportunity' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group font-light text-gray-800 transition-colors duration-300"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-full h-px bg-current transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}

          {/* Dropdown Pages */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center font-light focus:outline-none transition-all duration-300 ease-in-out group"
              style={{ color: colors.Primary }}
              type="button"
            >
              Page
              <span
                className={`ml-1 transition-transform duration-300 ${
                  pageMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <ChevronDown size={18} />
              </span>
            </button>
            <div
              className={`
                absolute left-1/2 -translate-x-1/2 mt-3 w-96 bg-white rounded-lg py-4 px-6 flex flex-col gap-4 z-50
                transition-all duration-300
                ${
                  pageMenuOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'
                }
              `}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/faq', label: 'FAQ' },
                { href: '/servicess', label: 'Service' },
                { href: '/Opportunity', label: 'Opportunity' },
                { href: '/resumecv', label: 'Apply now' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-light text-gray-800 hover:text-primary transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <ButtonDefault
            label="Get Started"
            onClick={(NavigateToContact)}
            icon={<ArrowRight color="white" size={20} />}
          />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/Opportunity', label: 'Opportunity' },
            { href: '/contact', label: 'Contact' },
            { href: '/faq', label: 'FAQ' },
            { href: '/servicess', label: 'Service' },
            { href: '/resumecv', label: 'Apply now' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-medium text-gray-800 hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
