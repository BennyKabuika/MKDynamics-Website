"use client";
import Navbar from "@/components/Navbar/Navbar";
import { MovingLetters } from "@/app/animations/MovingLetters";
import { backgroundcolors, colors } from '@/app/color';
import Footer from "@/components/footer";
import { Services } from "../../function";
import Image from "next/image";
import ButtonDefault from "@/components/Button/ButtonDefault";
import { useRouter } from "next/navigation";

export default function About() {
  // On prend la première opportunité de type "design" (adapte selon ta structure)
  const design = Services.find((item) => item.title?.toLowerCase() === "design") || Services[0];
    const router = useRouter();

    const navigateToContact = () => {
        router.push('/contact');
    };
  return (
    <>
      <Navbar />
      <section
        className="w-full flex flex-col items-center justify-center py-32"
        style={{ background: backgroundcolors.Tertiary }}
      >
        <MovingLetters text="Services" />
        <p className="mt-6 text-lg text-center max-w-2xl font-light text-white">
          At MKDynamics, we have the IT Solutions you need - innovative, secure and built for your challenges
        </p>
      </section>

      {/* Bloc d'information */}
      <section className="w-full py-16 px-4" style={{ background: backgroundcolors.Quaternary }}>
        <div className="max-w-4xl mx-auto p-8">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 pt-10">{design.title}</h1>
          {/* Description */}
          <p className="text-gray-500 text-lg mb-10 font-light">
            Website development is now a major strategic challenge for any business or organization looking to increase it&apos;s visibility, improve it&apos;s communication and offer accessible online services. From graphic design to technical implementation, including ergonomics and security, each stage of web development requires a rigorous approach tailored to user needs. In a constantly evolving digitql environment, having a high-performance, secure and responsive website has become essential to ensure an effective and competitive digital presence.
          </p>
          {/* Why recruit */}
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">What Is A Landing Page ?</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            A landing page is a dedicated web page created to capture visitors&apos; attention and encourage them to take a specific action, such as signing up for a newsletter, downloading an eBook, or making a purchase. Unlike a website&apos;s homepage, which may have multiple goals and links, a landing page is laser-focused on one conversion goal.
          </p>
          {/* Images côte à côte */}
          <div className="w-full flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
              <Image src="/image2.jpeg" alt="Design 1" fill className="object-cover rounded-2xl" />
            </div>
            <div className="flex-1 h-72 relative rounded-2xl overflow-hidden">
              <Image src="/image3.jpeg" alt="Design 2" fill className="object-cover rounded-2xl" />
            </div>
          </div>
          
          <p className="text-1xl md:text-2xl font-medium mb-4">A well-designed landing page typically includes:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2 font-light">
            <li>A clear and compelling headline that grabs attention immediately.</li>
            <li>A brief, persuasive subheadline that supports the main message.</li>
            <li>High-quality visuals or videos that explain or reinforce the offer</li>
            <li>A concise description of the value proposition — what users gain by taking action.</li>
            <li>A strong call-to-action (CTA) — usually in the form of a button like “Sign Up Now” or “Get Started.”</li>
            <li>A form or interactive element to collect user information.</li>
            <li>Social proof, such as testimonials or trust badges, to build credibility.</li>
          </ul>
          <p className="text-lg md:text-1xl font-light mb-4 text-gray-500">Landing pages are often optimized for conversions through A/B testing, SEO, and mobile responsiveness, making them essential tools in digital marketing strategies.</p>
          {/* Recommended Skills */}
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">What Is an E-commerce website</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            An e-commerce website is an online platform that allows users to browse, select, and purchase products or services over the internet. It serves as a virtual storefront where businesses showcase their offerings, manage inventory, process payments, and handle customer interactions.
          </p>
          <p className="text-1xl md:text-2xl font-medium mb-4">A typical E-commerce website includes:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2 font-light ">
            <ul className="list-disc pl-6 space-y-1">
              <li>Homepage – The main entry point that highlights featured products, promotions, or categories.</li>
              <li>Product pages – Detailed descriptions, images, pricing, and customer reviews for individual items.</li>
              <li>Search and filtering tools – Allowing users to easily find products by category, brand, price, or other attributes.</li>
              <li>Shopping cart – Where customers can review and manage selected products before checkout.</li>
              <li>Secure checkout process – Integrated with payment gateways for smooth and safe transactions</li>
              <li>User account section – For tracking orders, saving favorites, and managing personal details</li>
              <li>Customer support features – Such as live chat, FAQs, return policies, and contact forms</li>
              <li>Mobile optimization – Ensuring usability and responsiveness across all devices.</li>
              <li>Backend dashboard (for admins) – For managing products, orders, customers, and analytics.</li>
            </ul>
            <p className="text-lg md:text-1xl font-light mb-4 text-gray-500 pt-10">E-commerce websites can range from small boutique stores to large-scale marketplaces like Amazon. They are designed to provide a seamless shopping experience that builds trust, encourages purchases, and fosters customer loyalty.</p>
          </ul>
          {/* Extras */}
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-32">What Is Website</h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            A website is a collection of publicly accessible, interlinked web pages hosted on a single domain name. A standard website is designed to present information, promote a business or individual, showcase services, or share content with visitors. Unlike an e-commerce site, it is not primarily focused on selling products online.
          </p>
          <p className="text-1xl md:text-2xl font-medium mb-4">Typical features of a general website include:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Homepage – The main entry point that introduces the purpose or identity of the website.</li>
            <li>About page – Information about the company, organization, or individual behind the website.</li>
            <li>Services or offerings – Detailed descriptions of what is provided, often with supporting visuals</li>
            <li>Contact page – Includes a form, phone number, email address, and possibly a map or social links.</li>
            <li>Blog or news section – Optional, but often used to share updates, articles, or insights.</li>
            <li>Responsive design – Ensures the website looks and functions well on all devices.</li>
            <li>Navigation menu – A clear, user-friendly structure to help visitors move through the site.</li>
            <li>SEO optimization – So the site appears in search engine results and attracts organic traffic.</li>
            <li>Visual branding – Colors, fonts, and layouts that align with the site&apos;s identity and message.</li>
          </ul>
          <p className="text-lg md:text-1xl font-light mb-4 text-gray-500 pt-10">This type of website is ideal for businesses, professionals, creatives, or organizations that want to establish an online presence, build credibility, and provide information to potential clients or visitors.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-16 flex justify-center">
            <ButtonDefault label="Let's talk" onClick={(navigateToContact)}/>
        </div>
        
      </section>
      <Footer />
    </>
  );
}