import { useState } from 'react';
import { Menu, Code, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600" />
            <span className="font-semibold">Dhanush</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('education')} className="hover:text-blue-600 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/Dhanush261003" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/dhanush-s-386375293/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:dhanushsekar2610@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('education')} className="text-left hover:text-blue-600 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 transition-colors">
              Contact
            </button>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/Dhanush261003" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/dhanush-s-386375293/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:dhanushsekar2610@gmail.com" className="hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}