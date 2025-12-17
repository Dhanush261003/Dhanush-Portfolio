export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
        <span className="underline"></span>
      </div>

      <div className="about-content">
        {/* Left Text */}
        <div className="about-text">
          <p>
            I'm Dhanush, a beginner web developer currently pursuing MSc in
            Information Technology at SRM Institute of Science and Technology.
            With a strong foundation in frontend development and a passion for
            creating user-friendly web solutions, I'm constantly expanding my
            skillset and taking on new challenges.
          </p>

          <p>
            My journey began with a BCA in Computer Application, where I
            developed a solid understanding of programming fundamentals. Since
            then, I've been building projects that solve real-world problems,
            always focusing on clean code and great user experiences.
          </p>

          <p>
            I'm a fast learner with strong attention to detail, and I enjoy
            collaborating with teams to bring ideas to life. When I'm not
            coding, I explore new web technologies and design trends.
          </p>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img
            src="dhanush_photo.jpg"
            alt="Developer"
          />
        </div>
      </div>
    </section>
  );
}
