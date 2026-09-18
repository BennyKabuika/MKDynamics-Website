import { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer';
import PageHero from './PageHero';
import { Article, AsideCta } from './Article';
import { StatusBadge } from '../home/Careers';
import { Opportunity } from '@/app/function';

export default function RoleLayout({ id, lede, children }: { id: number; lede: string; children: ReactNode }) {
  const role = Opportunity.find((o) => o.id === id)!;
  const open = role.status === 'Available';

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title={role.title}
          lede={lede}
          crumbs={[{ href: '/Opportunity', label: 'Careers' }]}
          image={role.image}
          imageAlt=""
        />
        <Article
          aside={
            <>
              <dl className="mb-6 grid grid-cols-3 gap-4 rounded-3xl bg-paper-2 p-7 md:grid-cols-1 md:gap-6">
                <div>
                  <dt className="text-sm text-ink-2">Type</dt>
                  <dd className="mt-1 font-medium">{role.type}</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-2">Field</dt>
                  <dd className="mt-1 font-medium">{role.field}</dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-2">Status</dt>
                  <dd className="mt-1">
                    <StatusBadge status={role.status} />
                  </dd>
                </div>
              </dl>
              <AsideCta
                title={open ? 'Interested?' : 'Applications are closed'}
                text={
                  open
                    ? 'Send us your CV and tell us what you want to learn.'
                    : 'This internship is not open right now. You can still send a spontaneous application.'
                }
                label={open ? 'Apply now' : 'Apply spontaneously'}
                href="/resumecv"
              />
            </>
          }
        >
          {children}
        </Article>
      </main>
      <Footer cta={false} />
    </>
  );
}
