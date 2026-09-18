import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';

type Variant = 'primary' | 'dark' | 'ghost';

interface ButtonDefaultProps {
  label: string;
  href?: string;
  type?: 'button' | 'submit';
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-night hover:bg-gold-2',
  dark: 'bg-navy text-on-navy hover:bg-navy-2',
  ghost: 'border border-current text-current hover:bg-white/10',
};

export default function ButtonDefault({
  label,
  href,
  type = 'button',
  variant = 'primary',
  loading = false,
  disabled = false,
  onClick,
  className = '',
}: ButtonDefaultProps) {
  const classes = `group inline-flex h-14 items-center gap-3 rounded-full pl-7 pr-6 text-base font-semibold transition-[background-color,color,transform] duration-150 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:active:scale-100 ${variants[variant]} ${className}`;

  const icon = loading ? (
    <Loader2 aria-hidden size={18} className="animate-spin" />
  ) : (
    <ArrowRight
      aria-hidden
      size={18}
      className="transition-transform duration-200 ease-out-quart [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1 motion-reduce:transition-none"
    />
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} aria-busy={loading} className={classes}>
      {label}
      {icon}
    </button>
  );
}
