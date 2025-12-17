import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="max-w-33xl mx-auto">
            <div>
              <h3 className="mb-4 text-center text-center">Let's Work Together</h3>
              <p className="text-gray-700 mb-8 text-center text-center">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-white rounded-lg p-6 shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <a href="tel:+918124474699" className="text-blue-600 hover:underline">
                      +91 8124474699
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg p-6 shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a href="mailto:dhanushsekar2610@gmail.com" className="text-blue-600 hover:underline break-all">
                      dhanushsekar2610@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg p-6 shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Github className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">GitHub</p>
                    <a href="https://github.com/Dhanush261003" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                      github.com/Dhanush261003
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg p-6 shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/dhanush-s-386375293/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                      linkedin.com/in/dhanush-s-386375293
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}