import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="education-section">
      {/* Section Header */}
      <div className="section-header">
        <h2>Education</h2>
        <span className="underline"></span>
      </div>

      <div className="education-list">
        {/* Item 1 */}
        <div className="education-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>

          <div className="edu-content">
            <h3>SRM Institute of Science and Technology</h3>
            <span className="edu-location">Kattangulathur</span>

            <p className="edu-degree">M.Sc. Information Technology</p>

            <div className="edu-meta">
              <span>2024 – Present</span>
              <span className="cgpa">CGPA: 8.48</span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="education-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>

          <div className="edu-content">
            <h3>Sri Sankara Arts & Science College</h3>
            <span className="edu-location">Kanchipuram</span>

            <p className="edu-degree">BCA – Computer Application</p>

            <div className="edu-meta">
              <span>2021 – 2024</span>
              <span className="cgpa">CGPA: 7.60</span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="education-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>

          <div className="edu-content">
            <h3>Govt. C M Subbaraya Mudhaliyar Hr Sec School</h3>
            <span className="edu-location">Kanchipuram</span>

            <p className="edu-degree">HSC</p>

            <div className="edu-meta">
              <span>2020 – 2021</span>
              <span className="cgpa">Percentage: 76%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
