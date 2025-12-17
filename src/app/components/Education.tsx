import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: 'SRM Institute of Science and Technology',
    location: 'Kattangulathur',
    degree: 'M.Sc. Information Technology',
    period: '2024 – Present',
    grade: 'CGPA: 8.48'
  },
  {
    institution: 'Sri Sankara Arts & Science College',
    location: 'Kanchipuram',
    degree: 'BCA – Computer Application',
    period: '2021 – 2024',
    grade: 'CGPA: 7.60'
  },
  {
    institution: 'Govt. C M Subbaraya Mudhaliyar Hr Sec School',
    location: 'Kanchipuram',
    degree: 'HSC',
    period: '2020 – 2021',
    grade: 'Percentage: 76%'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{edu.institution}</h3>
                    <p className="text-gray-600 mb-2">{edu.location}</p>
                    <p className="mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{edu.period}</span>
                      <span className="text-blue-600">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
