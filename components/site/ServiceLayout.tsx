import { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer';
import PageHero from './PageHero';
import { Article, AsideCta, Toc } from './Article';

interface ServiceLayoutProps {
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  sections: { id: string; label: string }[];
  children: ReactNode;
}

export default function ServiceLayout({ title, lede, image, imageAlt, sections, children }: ServiceLayoutProps) {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          title={title}
          lede={lede}
          crumbs={[{ href: '/servicess', label: 'Services' }]}
          image={image}
          imageAlt={imageAlt}
        />
        <Article
          aside={
            <>
              <Toc items={sections} />
              <AsideCta
                title="Need this for your business?"
                text="Tell us about your project and we'll propose the right approach."
                label="Let's talk"
                href="/contact"
              />
            </>
          }
        >
          {children}
        </Article>
      </main>
      <Footer />
    </>
  );
}
