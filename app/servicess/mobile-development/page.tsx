import ServiceLayout from '@/components/site/ServiceLayout';
import { ImagePair } from '@/components/site/Article';

const sections = [
  { id: 'native', label: 'Native applications' },
  { id: 'hybrid', label: 'Hybrid apps' },
  { id: 'mobile-web', label: 'Mobile web applications' },
];

export default function MobileDevelopment() {
  return (
    <ServiceLayout
      title="Mobile App Development"
      lede="Intuitive, high-performance apps for iOS, Android or both, from concept to deployment."
      image="/media/image7.jpg"
      imageAlt="A developer testing an app on a desktop screen"
      sections={sections}
    >
      <p className="lead">
        In today’s digital-first world, mobile applications are essential for engaging users, streamlining operations,
        and scaling your business.
      </p>
      <p>
        At MKDynamics, we craft intuitive, high-performance mobile apps tailored to your needs — whether for iOS, Android,
        or cross-platform solutions. From concept to deployment, we ensure your app delivers seamless user experiences,
        robust security, and real business value.
      </p>

      <h2 id="native">What is a native mobile application?</h2>
      <p>
        A native application is built specifically for a particular operating system — like iOS or Android — using
        platform-specific languages and tools. This approach allows apps to fully leverage the device’s hardware, deliver
        superior performance, and offer a smoother, more responsive user experience.
      </p>
      <p>
        Native apps are ideal when speed, offline access, and seamless integration with device features like the camera
        or GPS are critical. We develop robust native apps that align with your users’ expectations and your business
        goals.
      </p>
      <ImagePair images={['/media/image11.jpg', '/media/image6.jpg']} />

      <h2 id="hybrid">What is a hybrid app?</h2>
      <p>
        Hybrid applications combine the best of web and native technologies. Built using web languages like HTML, CSS,
        and JavaScript, they are wrapped in a native shell that allows them to run on multiple platforms — iOS, Android,
        and beyond.
      </p>
      <p>
        This approach enables faster development, easier maintenance, and reduced costs, while still offering access to
        device features like the camera or push notifications. We build hybrid apps that balance efficiency, scalability,
        and a consistent user experience across all devices.
      </p>

      <h2 id="mobile-web">What is a mobile web application?</h2>
      <p>
        A mobile web application is a website optimized for smartphones and tablets, accessible through a mobile browser
        without needing to be downloaded from an app store. Built using responsive web technologies like HTML5, CSS3, and
        JavaScript, mobile web apps adapt to various screen sizes and offer fast access across all devices.
      </p>
      <p>
        While they don&apos;t have full access to native device features, they are cost-effective, easy to maintain, and
        ideal for businesses seeking broad accessibility without the overhead of app store deployment.
      </p>
    </ServiceLayout>
  );
}
