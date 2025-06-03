'use client';

import { ArrowRight } from 'lucide-react';
import { colors } from '../../app/color';

interface ButtonDefaultProps {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default function ButtonDefault({ label, onClick, icon }: ButtonDefaultProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center border rounded-full overflow-hidden transition-all duration-300"
      style={{ borderColor: colors.Primary, height: 50, width: 200 }}
    >
      <span
        className="flex items-center justify-center font-extralight transition-all duration-300"
        style={{
          background: 'white',
          color: 'black',
          width: '70%',  
          height: '100%',
          fontSize: 14,
          fontWeight: 400,
        }}
      >
        {label}
      </span>
      <span
        className="flex items-center justify-center transition-all duration-300"
        style={{
          background: colors.Primary,
          width: '30%',
          height: '100%',
          padding: '0 12px',
        }}
      >
        {icon || <ArrowRight color="white" size={24} />}
      </span>

      <style jsx>{`
        button:hover span:first-child {
          background: ${colors.Primary};
          color: white;
        }
      `}</style>
    </button>
  );
}
