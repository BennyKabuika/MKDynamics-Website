'use client';


import ButtonDefault from '../Button/ButtonDefault';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { MovingLetters } from '../../app/animations/MovingLetters';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const NavigateToContact = () => {
    router.push('/contact');
  };
  return (
    <header className="relative w-full h-[90vh] flex items-center justify-start px-8 md:px-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background3.jpeg"
          alt="Header Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-white space-y-10">
        <MovingLetters text="Build the Future of Your Business with Smart Tech" />

        <ButtonDefault
          label="Let's Talk to us"
          onClick={(NavigateToContact)}
          icon={<ArrowRight color="white" size={20} />}
        />
      </div>
    </header>
  );
}
