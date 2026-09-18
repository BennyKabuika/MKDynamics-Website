import RoleLayout from '@/components/site/RoleLayout';
import { ImagePair } from '@/components/site/Article';

export default function DesignInternship() {
  return (
    <RoleLayout id={1} lede="Design, create, inspire. Work on live projects alongside developers and strategists.">
      <p className="lead">
        At MKDynamics, design is more than aesthetics — it&apos;s how we solve problems, tell stories, and elevate user
        experiences.
      </p>
      <p>
        Whether you&apos;re into UI/UX, branding, or digital illustration, we give creative minds the space to explore,
        learn, and shape real-world products. As a design intern, you&apos;ll work on live projects, collaborate with
        developers and strategists, and bring bold ideas to life.
      </p>

      <h2>Why do we recruit design profiles?</h2>
      <p>
        Design is at the heart of every digital solution. A powerful user interface, a strong brand identity, or a
        thoughtful user journey can make the difference between average and exceptional. We recruit design interns to
        bring fresh perspectives, challenge conventions, and craft visual experiences that connect with real users. By
        integrating design from the ground up, we ensure our solutions aren’t just functional — they’re beautiful,
        intuitive, and impactful.
      </p>
      <ImagePair images={['/media/designer.jpg', '/media/image1.jpg']} />

      <h2>Recommended profile</h2>
      <ul>
        <li>Student in graphic design, visual arts, communication design, or a related creative field</li>
        <li>Passionate about visual creation with a good aesthetic sense</li>
        <li>Creative and curious, able to propose innovative ideas</li>
        <li>Motivated to learn and adapt quickly in a professional environment</li>
        <li>Organized and detail-oriented, even under tight deadlines</li>
        <li>Open to feedback and able to work well in a team</li>
        <li>Available for diverse tasks (branding, print/digital media, social networks…)</li>
      </ul>

      <h2>Recommended skills</h2>
      <h3>Technical skills</h3>
      <ul>
        <li>
          Proficiency in Adobe Creative Suite: Photoshop (photo editing, compositing), Illustrator (vector creation,
          logos, illustrations), InDesign (layout, multi-page documents)
        </li>
        <li>Basic knowledge of typography, color theory, and layout principles</li>
        <li>Understanding of web design / UI/UX basics (a plus for digital work)</li>
        <li>Knowledge of print formats and printing rules</li>
        <li>Ability to create visuals adapted for social media platforms</li>
        <li>Familiarity with tools like Canva or Figma (bonus)</li>
        <li>Basic skills in simple animation (GIFs, basic motion design) are a plus</li>
      </ul>
      <h3>Soft skills</h3>
      <ul>
        <li>Creativity and strong aesthetic sense</li>
        <li>Good communication skills (ability to clearly present ideas)</li>
        <li>Team spirit and ability to collaborate with marketing, developers and clients</li>
        <li>Autonomy and organization</li>
        <li>Ability to meet deadlines</li>
        <li>Willingness to learn continuously and improve</li>
      </ul>

      <h2>Extras to boost your profile</h2>
      <ul>
        <li>Online portfolio (Behance, Dribbble, personal website)</li>
        <li>Real experience (even personal or volunteer projects)</li>
        <li>Professional English skills</li>
        <li>Awareness of current graphic design trends</li>
      </ul>
    </RoleLayout>
  );
}
