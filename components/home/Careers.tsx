import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Opportunity } from '@/app/function';
import ButtonDefault from '../Button/ButtonDefault';

export function StatusBadge({ status, dark = false }: { status: string; dark?: boolean }) {
  const open = status === 'Available';
  const tone = open ? (dark ? 'text-[#6fdc9c]' : 'text-success') : dark ? 'text-on-navy-2' : 'text-ink-2';
  return (
    <span className={`inline-flex items-center gap-2 text-sm font-semibold ${tone}`}>
      <span aria-hidden className={`h-2 w-2 rounded-full ${open ? (dark ? 'bg-[#6fdc9c]' : 'bg-success') : 'bg-[#9aa1ad]'}`} />
      {open ? 'Open' : 'Closed'}
    </span>
  );
}

export function RolesList({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark';
  return (
    <ul className={`border-t ${dark ? 'border-line-navy' : 'border-ink'}`}>
      {Opportunity.map((role) => (
        <li key={role.id} className={`border-b ${dark ? 'border-line-navy' : 'border-line'}`}>
          <Link
            href={role.path}
            className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-6 transition-colors duration-150 md:grid-cols-[2fr_1fr_1fr_auto] md:py-8"
          >
            <span>
              <span className="block font-display text-2xl font-bold tracking-tight md:text-3xl">{role.title}</span>
              <span className={dark ? 'text-on-navy-2' : 'text-ink-2'}>{role.tagline}</span>
            </span>
            <span className={`hidden md:block ${dark ? 'text-on-navy-2' : 'text-ink-2'}`}>
              {role.type} · {role.field}
            </span>
            <span className="order-last col-span-2 md:order-none md:col-span-1">
              <StatusBadge status={role.status} dark={dark} />
            </span>
            <span
              aria-hidden
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-[background-color,border-color,color] duration-200 ease-out ${
                dark
                  ? 'border-line-navy group-hover:border-gold group-hover:bg-gold group-hover:text-night'
                  : 'border-line group-hover:border-navy group-hover:bg-navy group-hover:text-on-navy'
              }`}
            >
              <ArrowRight size={18} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Careers() {
  return (
    <section className="bg-paper">
      <div className="container-mk pb-20 md:pb-28">
        <div className="on-navy grid gap-10 overflow-hidden rounded-[2rem] bg-navy p-8 text-on-navy md:grid-cols-12 md:p-14">
          <div className="md:col-span-5">
            <h2 className="reveal font-display text-[clamp(2.25rem,1.3rem+3.4vw,4rem)] font-bold leading-[1] tracking-display">
              Want to grow <span className="text-gold">with us</span>?
            </h2>
            <p className="reveal mt-6 max-w-sm text-lg text-on-navy-2">
              Internships, student jobs and roles for students, self-taught talent and career changers.
            </p>
            <ButtonDefault label="All opportunities" href="/Opportunity" className="reveal mt-8" />
          </div>
          <div className="md:col-span-7">
            <RolesList tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
