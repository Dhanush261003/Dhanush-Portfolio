import {
  FaCode,
  FaLayerGroup,
  FaTerminal,
  FaPalette,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Section Header */}
      <div className="section-header">
        <h2>Skills & Expertise</h2>
        <span className="underline"></span>
      </div>

      {/* Cards */}
      <div className="skills-grid">
        <div className="skill-card">
          <FaCode className="skill-icon" />
          <h3>Frontend Development</h3>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Responsive UI/UX</li>
            <li>Cross-browser Compatibility</li>
            <li>Component-based Architecture</li>
          </ul>
        </div>

        <div className="skill-card">
          <FaLayerGroup className="skill-icon" />
          <h3>WordPress Development</h3>
          <ul>
            <li>Theme Customization</li>
            <li>Plugin Configuration</li>
            <li>Elementor</li>
            <li>WooCommerce</li>
            <li>Site Optimization</li>
            <li>Maintenance</li>
          </ul>
        </div>

        <div className="skill-card">
          <FaTerminal className="skill-icon" />
          <h3>Programming & Tools</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Debugging</li>
            <li>Code Optimization</li>
            <li>Chrome Extension APIs</li>
            <li>DOM Manipulation</li>
          </ul>
        </div>

        <div className="skill-card">
          <FaPalette className="skill-icon" />
          <h3>Design & UI/UX</h3>
          <ul>
            <li>UI/UX in Figma</li>
            <li>Adobe Photoshop</li>
            <li>Canva</li>
            <li>Digital Design</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
