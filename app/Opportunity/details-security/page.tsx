import RoleLayout from '@/components/site/RoleLayout';
import { ImagePair } from '@/components/site/Article';

export default function SecurityInternship() {
  return (
    <RoleLayout id={3} lede="Secure, innovate, lead. Hands-on penetration testing next to experienced consultants.">
      <p className="lead">
        At MKDynamics, cybersecurity is more than protection — it’s about understanding vulnerabilities, anticipating
        threats, and fortifying digital assets against evolving risks.
      </p>
      <p>
        Whether you’re fascinated by network security, ethical hacking, or web application testing, we provide an
        environment where curious minds can develop hands-on skills, work on real penetration testing projects, and help
        safeguard critical infrastructure. As a security consultancy intern, you’ll collaborate with experienced
        consultants, analyze systems from multiple angles, and help clients strengthen their defenses.
      </p>

      <h2>Why do we recruit security profiles?</h2>
      <p>
        Security is the backbone of every digital solution. Identifying weaknesses in external networks, internal
        infrastructures, or web applications can mean the difference between resilience and breach. We recruit interns in
        security consultancy to bring fresh curiosity, rigorous methodology, and ethical hacking skills to the table. By
        integrating penetration testing early and continuously, we help clients meet compliance and proactively defend
        against cyber threats.
      </p>
      <ImagePair images={['/media/image4.jpg', '/media/image10.jpg']} />

      <h2>Recommended profile</h2>
      <ul>
        <li>Student in cybersecurity, computer science, information technology, or related fields</li>
        <li>Deep interest in ethical hacking, penetration testing, and network security</li>
        <li>Analytical and problem-solving mindset with attention to detail</li>
        <li>Motivated to learn professional pentesting methodologies and tools</li>
        <li>Responsible and ethical approach to sensitive information</li>
        <li>Comfortable working both independently and in teams</li>
        <li>Eager to engage with external/internal network and web app testing projects</li>
      </ul>

      <h2>Recommended skills</h2>
      <h3>Technical skills</h3>
      <ul>
        <li>
          Experience or willingness to learn tools like Nmap and Wireshark (network scanning, traffic analysis), Burp Suite
          and OWASP ZAP (web app testing), Metasploit, Nikto and SQLmap (exploitation), and environments such as Kali Linux
        </li>
        <li>Solid understanding of network protocols (TCP/IP, DNS, HTTP/S) and architectures</li>
        <li>Knowledge of common vulnerabilities (OWASP Top 10, network weaknesses)</li>
        <li>Familiarity with penetration testing standards (OSSTMM, PTES, NIST)</li>
        <li>Basic scripting (Python, Bash, PowerShell) for task automation</li>
        <li>Knowledge of security fundamentals: firewalls, IDS/IPS, encryption</li>
        <li>Experience with Linux and Windows operating systems</li>
        <li>Strong documentation and reporting skills</li>
      </ul>
      <h3>Soft skills</h3>
      <ul>
        <li>Curiosity and eagerness to learn in a fast-changing field</li>
        <li>Strong analytical thinking and attention to detail</li>
        <li>Clear communication for technical and non-technical stakeholders</li>
        <li>Team player with professional ethics and discretion</li>
        <li>Time management and task prioritization</li>
      </ul>

      <h2>Extras to boost your profile</h2>
      <ul>
        <li>Personal pentesting labs or CTF platforms (HackTheBox, TryHackMe)</li>
        <li>Relevant certifications (CompTIA Security+, CEH, OSCP — even in progress)</li>
        <li>Understanding of cloud security and DevSecOps (bonus)</li>
        <li>Familiarity with compliance and security frameworks (GDPR, ISO 27001)</li>
        <li>Knowledge of the software development lifecycle for web app security insight</li>
      </ul>
    </RoleLayout>
  );
}
