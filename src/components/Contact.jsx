import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Section Header */}
      <div className="section-header">
        <h2>Get In Touch</h2>
        <span className="underline"></span>
      </div>

      <h3 className="contact-title">Let's Work Together</h3>

      <p className="contact-desc">
        I'm always interested in hearing about new projects and opportunities.
        Whether you have a question or just want to say hi, feel free to reach
        out!
      </p>

      <div className="contact-grid">
        {/* Phone */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <div>
            <h4>Phone</h4>
            <a href="tel:+918124474699">+91 81244 74699</a>
          </div>
        </div>

        {/* Email */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div>
            <h4>Email</h4>
            <a href="mailto:dhanushsekar2610@gmail.com">
              dhanushsekar2610@gmail.com
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaGithub />
          </div>
          <div>
            <h4>GitHub</h4>
            <a
              href="https://github.com/Dhanush261003"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Dhanush261003
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaLinkedinIn />
          </div>
          <div>
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/dhanu-sh/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/dhanu-sh
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

