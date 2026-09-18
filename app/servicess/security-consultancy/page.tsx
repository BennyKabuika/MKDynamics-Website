import ServiceLayout from '@/components/site/ServiceLayout';
import { ImagePair } from '@/components/site/Article';

const sections = [
  { id: 'external', label: 'External network testing' },
  { id: 'internal', label: 'Internal network testing' },
  { id: 'web-app', label: 'Web application testing' },
];

export default function SecurityConsultancy() {
  return (
    <ServiceLayout
      title="Security Consultancy"
      lede="Authorized penetration testing that finds weaknesses before attackers do."
      image="/media/image10.jpg"
      imageAlt="Consultants focused on their screens during an assessment"
      sections={sections}
    >
      <p className="lead">
        Security consultancy helps organizations identify, assess, and manage their cybersecurity risks.
      </p>
      <p>
        By analyzing existing security measures and potential vulnerabilities, we develop tailored strategies and
        solutions to protect critical assets, ensure regulatory compliance, and enhance your overall security posture.
        Our guidance enables businesses to proactively defend against emerging threats and respond effectively to
        security incidents.
      </p>

      <h2 id="external">External network penetration testing</h2>
      <p>
        A comprehensive and authorized security assessment of an organization’s external-facing IT infrastructure. The
        goal is to identify vulnerabilities that could be exploited by attackers to gain unauthorized access or disrupt
        services. This testing simulates real-world cyberattacks on internet-exposed systems such as firewalls, web
        servers, and routers, providing actionable insights to strengthen defenses and reduce risk.
      </p>
      <ImagePair images={['/media/image4.jpg', '/media/image6.jpg']} />

      <h2 id="internal">Internal network penetration testing</h2>
      <p>
        A controlled and authorized security evaluation performed within an organization’s internal IT environment. This
        testing simulates an attacker with inside access attempting to exploit vulnerabilities in systems, applications,
        and network configurations. The objective is to identify weaknesses that could lead to unauthorized data access,
        privilege escalation, or lateral movement, helping you strengthen internal defenses and reduce the risk of
        insider threats.
      </p>

      <h2 id="web-app">Web application penetration testing</h2>
      <p>
        A systematic and authorized assessment designed to identify security vulnerabilities within web applications. By
        simulating real-world attacks, this testing uncovers weaknesses such as injection flaws, authentication issues,
        and misconfigurations that could be exploited to compromise data integrity, confidentiality, or availability. The
        findings provide actionable recommendations to enhance application security and protect sensitive information.
      </p>
    </ServiceLayout>
  );
}
