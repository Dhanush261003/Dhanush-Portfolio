import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-logo">&lt;&gt;</span> Dhanush
        </div>

        <div className="footer-icons">
          <a href="https://github.com/Dhanush261003" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dhanush-s-386375293/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="mailto:dhanushsekar2610@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-right">
          © 2025 Dhanush. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
