import ServiceLayout from '@/components/site/ServiceLayout';
import { ImagePair } from '@/components/site/Article';

const sections = [
  { id: 'landing-page', label: 'Landing pages' },
  { id: 'e-commerce', label: 'E-commerce websites' },
  { id: 'website', label: 'Business websites' },
];

export default function WebsiteDevelopment() {
  return (
    <ServiceLayout
      title="Website Development"
      lede="High-performance, secure and responsive websites that make your business visible."
      image="/media/image2.jpg"
      imageAlt="Developers working together on laptops"
      sections={sections}
    >
      <p className="lead">
        Website development is now a major strategic challenge for any business or organization looking to increase its
        visibility, improve its communication and offer accessible online services.
      </p>
      <p>
        From graphic design to technical implementation, including ergonomics and security, each stage of web development
        requires a rigorous approach tailored to user needs. In a constantly evolving digital environment, having a
        high-performance, secure and responsive website has become essential to ensure an effective and competitive
        digital presence.
      </p>

      <h2 id="landing-page">What is a landing page?</h2>
      <p>
        A landing page is a dedicated web page created to capture visitors&apos; attention and encourage them to take a
        specific action, such as signing up for a newsletter, downloading an eBook, or making a purchase. Unlike a
        website&apos;s homepage, which may have multiple goals and links, a landing page is laser-focused on one
        conversion goal.
      </p>
      <h3>A well-designed landing page typically includes:</h3>
      <ul>
        <li>A clear and compelling headline that grabs attention immediately.</li>
        <li>A brief, persuasive subheadline that supports the main message.</li>
        <li>High-quality visuals or videos that explain or reinforce the offer.</li>
        <li>A concise description of the value proposition — what users gain by taking action.</li>
        <li>A strong call-to-action (CTA) — usually a button like “Sign Up Now” or “Get Started.”</li>
        <li>A form or interactive element to collect user information.</li>
        <li>Social proof, such as testimonials or trust badges, to build credibility.</li>
      </ul>
      <p>
        Landing pages are often optimized for conversions through A/B testing, SEO, and mobile responsiveness, making
        them essential tools in digital marketing strategies.
      </p>
      <ImagePair images={['/media/image3.jpg', '/media/image11.jpg']} />

      <h2 id="e-commerce">What is an e-commerce website?</h2>
      <p>
        An e-commerce website is an online platform that allows users to browse, select, and purchase products or
        services over the internet. It serves as a virtual storefront where businesses showcase their offerings, manage
        inventory, process payments, and handle customer interactions.
      </p>
      <h3>A typical e-commerce website includes:</h3>
      <ul>
        <li><strong>Homepage</strong> – the main entry point that highlights featured products, promotions, or categories.</li>
        <li><strong>Product pages</strong> – detailed descriptions, images, pricing, and customer reviews for individual items.</li>
        <li><strong>Search and filtering tools</strong> – allowing users to easily find products by category, brand, price, or other attributes.</li>
        <li><strong>Shopping cart</strong> – where customers can review and manage selected products before checkout.</li>
        <li><strong>Secure checkout process</strong> – integrated with payment gateways for smooth and safe transactions.</li>
        <li><strong>User account section</strong> – for tracking orders, saving favorites, and managing personal details.</li>
        <li><strong>Customer support features</strong> – such as live chat, FAQs, return policies, and contact forms.</li>
        <li><strong>Mobile optimization</strong> – ensuring usability and responsiveness across all devices.</li>
        <li><strong>Backend dashboard</strong> (for admins) – for managing products, orders, customers, and analytics.</li>
      </ul>
      <p>
        E-commerce websites can range from small boutique stores to large-scale marketplaces. They are designed to
        provide a seamless shopping experience that builds trust, encourages purchases, and fosters customer loyalty.
      </p>

      <h2 id="website">What is a website?</h2>
      <p>
        A website is a collection of publicly accessible, interlinked web pages hosted on a single domain name. A standard
        website is designed to present information, promote a business or individual, showcase services, or share
        content with visitors. Unlike an e-commerce site, it is not primarily focused on selling products online.
      </p>
      <h3>Typical features of a general website include:</h3>
      <ul>
        <li><strong>Homepage</strong> – the main entry point that introduces the purpose or identity of the website.</li>
        <li><strong>About page</strong> – information about the company, organization, or individual behind the website.</li>
        <li><strong>Services or offerings</strong> – detailed descriptions of what is provided, often with supporting visuals.</li>
        <li><strong>Contact page</strong> – includes a form, phone number, email address, and possibly a map or social links.</li>
        <li><strong>Blog or news section</strong> – optional, but often used to share updates, articles, or insights.</li>
        <li><strong>Responsive design</strong> – ensures the website looks and functions well on all devices.</li>
        <li><strong>Navigation menu</strong> – a clear, user-friendly structure to help visitors move through the site.</li>
        <li><strong>SEO optimization</strong> – so the site appears in search engine results and attracts organic traffic.</li>
        <li><strong>Visual branding</strong> – colors, fonts, and layouts that align with the site&apos;s identity and message.</li>
      </ul>
      <p>
        This type of website is ideal for businesses, professionals, creatives, or organizations that want to establish
        an online presence, build credibility, and provide information to potential clients or visitors.
      </p>
    </ServiceLayout>
  );
}
