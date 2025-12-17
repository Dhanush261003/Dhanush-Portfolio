import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* Section Header */}
      <div className="section-header">
        <h2>Featured Projects</h2>
        <span className="underline"></span>
      </div>

      {/* Project Card */}
      <div className="projects-wrapper">
        <div className="project-card">
          {/* Image */}
          <div className="project-image">
            <img
              src="public\icon128.png"
              alt="Web Developer Toolkit"
            />
          </div>

          {/* Content */}
          <div className="project-content">
            <h3>Web Developer Toolkit – Chrome Extension</h3>

            <p>
              A comprehensive Chrome extension built with Manifest V3 providing
              HTML/CSS inspection, color picking, responsive testing, asset
              extraction, SEO checks, and debugging utilities. Features
              interactive UI panels, DOM overlays, real-time element inspectors,
              pixel-level color sampling via Canvas API, and full-page screenshot
              generation.
            </p>

            {/* Tags */}
            <div className="project-tags">
              <span>JavaScript</span>
              <span>Chrome Extension MV3</span>
              <span>DOM Manipulation</span>
              <span>Canvas API</span>
              <span>SEO Analysis</span>
            </div>

            {/* Buttons */}
            <div className="project-actions">
              <a href="#" className="btn-outline">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href="https://github.com/Dhanush261003/Web-Developer-Toolkit" target="_blank" className="btn-outline">
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
