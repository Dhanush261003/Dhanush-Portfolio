export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <h1>
        Hi, I'm <span>Dhanush</span>
      </h1>

      <h2>Web Developer & MSc IT Student</h2>

      <p>
        I'm a beginner web developer passionate about creating engaging web
        experiences. Currently pursuing MSc in Information Technology at SRM
        Institute of Science and Technology. I specialize in React.js,
        WordPress development, and building practical tools for developers.
      </p>

      <div className="hero-buttons">
        <button
          className="btn-primary"
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </button>

        <button
          className="btn-secondary"
          onClick={() => scrollToSection("projects")}
        >
          View My Work
        </button>
      </div>

      <div className="scroll">⌄</div>
    </section>
  );
}
