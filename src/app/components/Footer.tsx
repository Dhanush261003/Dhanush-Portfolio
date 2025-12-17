import { Github, Linkedin, Mail, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-400" />
            <span>Dhanush</span>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/Dhanush261003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhanush-s-386375293/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:dhanushsekar2610@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dhanush. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}