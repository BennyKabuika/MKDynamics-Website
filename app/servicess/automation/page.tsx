import ServiceLayout from '@/components/site/ServiceLayout';
import { ImagePair } from '@/components/site/Article';

const sections = [
  { id: 'monitoring', label: 'Log monitoring & alerting' },
  { id: 'scripts', label: 'Custom scripts' },
  { id: 'email', label: 'Email automation' },
];

export default function Automation() {
  return (
    <ServiceLayout
      title="Automation"
      lede="Custom workflows that save time, reduce human error and let your operations scale."
      image="/media/image5.jpg"
      imageAlt="An open-plan office with people at their workstations"
      sections={sections}
    >
      <p className="lead">In today’s fast-paced world, automation isn’t a luxury — it’s a necessity.</p>
      <p>
        We develop custom automation workflows to help businesses and individuals save time, reduce human error, and
        scale operations efficiently. From cybersecurity to marketing and data processing, our solutions let your systems
        work smarter, not harder.
      </p>

      <h2 id="monitoring">Automated log monitoring & alerting</h2>
      <p>
        Detect threats before they become problems. Our automation scripts scan email attachments and logs for malicious
        indicators in real time. Whether you&apos;re running a small business or performing pentests, we provide alerts,
        reports, and escalations directly to your inbox or dashboard — 24/7, without lifting a finger.
      </p>
      <ImagePair images={['/media/image2.jpg', '/media/image13.jpg']} />

      <h2 id="scripts">Custom scripts for routine tasks</h2>
      <p>
        Repetitive tasks kill productivity. We build tailored scripts to automate everything from daily reporting to
        database backups, file organization, and even scheduling social media posts. Automations are designed to match
        your specific workflows — across IT, marketing, customer service, and beyond.
      </p>

      <h2 id="email">Smart email automation & follow-ups</h2>
      <p>
        Need to send emails to hundreds of clients based on behavior, time, or data input? We develop automated systems
        for outreach, follow-ups, and even quote generation. Whether you&apos;re nurturing leads or conducting surveys, your
        communication becomes timely, relevant, and fully hands-off.
      </p>
    </ServiceLayout>
  );
}
