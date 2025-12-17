import { motion } from 'motion/react';
import { Code, Palette, Terminal, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive UI/UX', 'Cross-browser Compatibility', 'Component-based Architecture']
  },
  {
    title: 'WordPress Development',
    icon: Layers,
    skills: ['Theme Customization', 'Plugin Configuration', 'Elementor', 'WooCommerce', 'Site Optimization', 'Maintenance']
  },
  {
    title: 'Programming & Tools',
    icon: Terminal,
    skills: ['JavaScript', 'Python', 'Debugging', 'Code Optimization', 'Chrome Extension APIs', 'DOM Manipulation']
  },
  {
    title: 'Design & UI/UX',
    icon: Palette,
    skills: ['UI/UX in Figma', 'Adobe Photoshop', 'Canva', 'Digital Design', 'Wireframing', 'Prototyping']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <category.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}