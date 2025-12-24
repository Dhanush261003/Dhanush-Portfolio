import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      
      <div className="logo" >
        <a className="logo-name" href="#">Dhanush S</a>
      </div>

      {/* Desktop Links */}
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Icons */}
      <div className="nav-icons">
        <a href="https://github.com/Dhanush261003" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/dhanu-sh/" target="_blank"><FaLinkedin /></a>
        <a
          href="mailto:dhanushsekar2610@gmail.com?subject=Portfolio%20Contact&body=Hi%20Dhanush,"
          aria-label="Email Dhanush"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
