import ServiceLayout from '@/components/site/ServiceLayout';
import { ImagePair } from '@/components/site/Article';

const sections = [
  { id: 'logo', label: 'Logo design' },
  { id: 'print', label: 'Brochures, flyers & business cards' },
  { id: 'illustration', label: 'Custom illustration' },
];

export default function GraphicDesigning() {
  return (
    <ServiceLayout
      title="Graphic Designing"
      lede="Visuals that communicate your identity on web, mobile, print and social media."
      image="/media/designer.jpg"
      imageAlt="A designer working on a brand layout at a large monitor"
      sections={sections}
    >
      <p className="lead">
        In a world where visual impact is everything, great design is no longer a luxury — it’s a necessity.
      </p>
      <p>
        From branding to digital interfaces, graphic design shapes how customers perceive and engage with your business.
        We create compelling visuals that communicate your identity, enhance user experience, and build lasting
        impressions. Whether it’s for web, mobile, print, or social media, we transform ideas into eye-catching,
        functional graphics that elevate your brand.
      </p>

      <h2 id="logo">Logo design</h2>
      <p>
        A logo is more than just a symbol — it&apos;s the visual cornerstone of your brand identity. It communicates who
        you are, what you stand for, and sets the tone for how customers perceive your business.
      </p>
      <p>
        We design logos that are clean, memorable, and versatile across all mediums — from websites and mobile apps to
        business cards and social media. Whether you&apos;re launching a new brand or refreshing an existing one, our goal
        is a mark that captures your essence.
      </p>
      <ImagePair images={['/media/image12.jpg', '/media/image4.jpg']} />

      <h2 id="print">Brochures, flyers and business cards</h2>
      <p>
        A flyer is a succinct and visually compelling printed material designed to promote events, special offers, or
        services. Its concise format and eye-catching design enable rapid distribution and immediate engagement with the
        intended audience.
      </p>
      <p>
        A business card is a compact, professional card that contains essential contact information and branding for an
        individual or organization. It serves as a tangible introduction, facilitating networking and fostering
        professional relationships. Together, flyers and business cards combine broad outreach with personal connection.
      </p>

      <h2 id="illustration">Custom illustration</h2>
      <p>
        We offer original, tailor-made illustrated graphics crafted from the ground up to align with your unique
        requirements and preferred style. Based on your feedback, our illustrations can be adapted for various uses,
        including landing pages, social media posts, and infographics, ensuring a consistent and impactful visual
        identity.
      </p>
    </ServiceLayout>
  );
}
