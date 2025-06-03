'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

interface MovingLettersProps {
  text?: string;
  className?: string;
}

export const MovingLetters: React.FC<MovingLettersProps> = ({
  text = '',
  className = '',
}) => {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={clsx('flex flex-wrap', className)}>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="text-white font-extrabold text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-tight"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};
