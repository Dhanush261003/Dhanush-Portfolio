import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <p className="mb-6 text-gray-700">
                I'm Dhanush, a beginner web developer currently pursuing MSc in Information Technology 
                at SRM Institute of Science and Technology. With a strong foundation in frontend development 
                and a passion for creating user-friendly web solutions, I'm constantly expanding my skillset 
                and taking on new challenges.
              </p>
              <p className="mb-6 text-gray-700">
                My journey began with a BCA in Computer Application, where I developed a solid understanding 
                of programming fundamentals. Since then, I've been building projects that solve real-world 
                problems, always focusing on clean code and great user experiences.
              </p>
              <p className="text-gray-700">
                I'm a fast learner with strong attention to detail, and I enjoy collaborating with teams 
                to bring ideas to life. When I'm not coding, I'm exploring new web technologies and design 
                trends to stay ahead in this ever-evolving field.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY1ODIwNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Developer workspace"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}