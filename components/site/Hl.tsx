import { ReactNode } from 'react';

/** Accent word in a heading: gold ink on dark grounds, a gold marker on light ones (gold text fails contrast on white). */
export default function Hl({ children, on = 'dark' }: { children: ReactNode; on?: 'dark' | 'light' }) {
  if (on === 'light') {
    return (
      <span className="bg-[linear-gradient(transparent_58%,var(--gold)_58%,var(--gold)_92%,transparent_92%)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
        {children}
      </span>
    );
  }
  return <span className="text-gold">{children}</span>;
}
