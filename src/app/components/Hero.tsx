import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">
              Hi, I'm <span className="text-blue-600">Dhanush</span>
            </h1>
            <h2 className="mb-8 text-gray-700">
              Web Developer & MSc IT Student
            </h2>
            <p className="mb-12 text-gray-600 max-w-2xl mx-auto">
              I'm a beginner web developer passionate about creating engaging web experiences. 
              Currently pursuing MSc in Information Technology at SRM Institute of Science and Technology, 
              I specialize in React.js, WordPress development, and building practical tools for developers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact}>
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}