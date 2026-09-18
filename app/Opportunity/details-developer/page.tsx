import RoleLayout from '@/components/site/RoleLayout';
import { ImagePair } from '@/components/site/Article';

export default function DeveloperInternship() {
  return (
    <RoleLayout id={2} lede="Build, innovate, impact. Gain real-world experience on meaningful client projects.">
      <p className="lead">
        We believe in giving opportunities to passionate developers — whether you&apos;re a student, a self-taught coder,
        or in career transition.
      </p>
      <p>
        We offer flexible internship programs that let you gain real-world experience, grow your skills, and contribute to
        meaningful projects, wherever you are in your learning journey.
      </p>

      <h2>Why do we offer open internship opportunities?</h2>
      <p>
        We believe talent can come from anywhere — not just from degrees or traditional paths. By offering internships to
        self-taught developers, students, or those switching careers, we aim to create a more inclusive and dynamic tech
        ecosystem. We see internships not just as training, but as a way to discover passionate individuals, share
        real-world experience, and build the next generation of creators who think differently, learn fast, and care about
        impact.
      </p>
      <ImagePair images={['/media/image2.jpg', '/media/image5.jpg']} />

      <h2>Recommended developer profiles</h2>
      <ul>
        <li>Web development students or bootcamp graduates</li>
        <li>Self-taught developers with GitHub or portfolio projects</li>
        <li>Junior developers looking for real-world experience</li>
        <li>Career changers with a strong motivation to learn</li>
      </ul>

      <h2>Core skills we value</h2>
      <p>You don’t need to master them all — but the more you’re familiar with, the better.</p>
      <h3>Frontend</h3>
      <ul>
        <li>HTML / CSS / JavaScript</li>
        <li>React or Next.js (preferred)</li>
        <li>Tailwind CSS (nice to have)</li>
        <li>Git & GitHub basics</li>
      </ul>
      <h3>Backend (optional but appreciated)</h3>
      <ul>
        <li>Node.js or Express</li>
        <li>Firebase, Supabase, or simple APIs</li>
        <li>Basic understanding of databases (MongoDB, PostgreSQL, etc.)</li>
      </ul>
      <h3>Bonus</h3>
      <ul>
        <li>Working with REST APIs</li>
        <li>Debugging skills</li>
        <li>Good code organization and a love for clean UI</li>
      </ul>

      <h2>What we offer in return</h2>
      <ul>
        <li>Real client projects and mentorship</li>
        <li>Code reviews & best practices</li>
        <li>Flexible remote collaboration</li>
        <li>A chance to learn design, security, or full-stack workflows if you’re curious</li>
      </ul>
    </RoleLayout>
  );
}
