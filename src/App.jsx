import React, { useEffect } from 'react';
import "./App.css";

function App() {
  useEffect(() => {
    // We wait 100ms to ensure the DOM is fully painted
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("BOOM! Visible:", entry.target.id);
              entry.target.classList.add('reveal-visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      const targets = document.querySelectorAll('.reveal-hidden');

      if (targets.length === 0) {
        console.warn("Wait... I can't find any elements with class 'reveal-hidden'!");
      }

      targets.forEach((target) => observer.observe(target));
    }, 100);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="portfolio-wrapper">
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-logo">RM</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#stack">Technical Stack</a>
          <a href="#projects">Case Study</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <p className="hero-sub">A Professional Portfolio</p>
        <div className="divider"></div>
        <h1>RAJASHREE MEDHI</h1>
        <p className="hero-sub tagline">Software Developer | BCA Student</p>
      </header>

      {/* ABOUT ME SECTION */}
      <section id="about" className="reveal-hidden">
        <div className="section-header">
          <div className="accent-bar"></div>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-container">
          <div className="about-text">
            {/* ADD THIS BACK: */}
            <h3>Building Impactful Digital Experiences</h3>
            <p>
              I’m a BCA student passionate about software development and emerging technologies. I enjoy learning new skills, building projects, and turning ideas into functional applications. My goal is to grow as a developer and create meaningful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNICAL STACK SECTION */}
      <section id="stack" className="reveal-hidden">
        <div className="section-header">
          <div className="accent-bar"></div>
          <h2 className="section-title">Technical Stack</h2>
        </div>

        <div className="skills-grid">
          {/* FRONTEND */}
          <div className="skill-item">
            <span className="meta-label">FRONTEND</span>
            <h3>Client Side</h3>
            <p>React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS.</p>
          </div>

          {/* BACKEND & DATABASE */}
          <div className="skill-item">
            <span className="meta-label">BACKEND & DATA</span>
            <h3>Architecture</h3>
            <p>Node.js, Express.js, and Supabase for real-time cloud database management.</p>
          </div>

          {/* TOOLS & DEPLOYMENT */}
          <div className="skill-item">
            <span className="meta-label">TOOLS & CLOUD</span>
            <h3>Engineering</h3>
            <p>Git & GitHub, REST APIs, and seamless deployment via Vercel.</p>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section id="projects" className="reveal-hidden">
        <div className="section-header">
          <div className="accent-bar"></div>
          <h2 className="section-title">Case Study</h2>
        </div>
        <div className="project-presentation-card">
          <div className="project-main-content">
            <h3 className="project-name">Dentist Appointment Booking System</h3>
            <p className="project-intro">
              Developed a full-stack web application that enables users to book dental appointments efficiently.
              The system allows patients to browse available dentists, select suitable time slots, and manage
              bookings through an intuitive and responsive interface.
            </p>

            <div className="project-metadata-grid">
              <div className="meta-item">
                <span className="meta-label">FEATURES</span>
                <p>Real-time scheduling, dentist listing, and secure data management.</p>
              </div>
              <div className="meta-item">
                <span className="meta-label">FUNCTIONALITY</span>
                <p>Ensures smooth interaction between frontend and backend.</p>
              </div>
              <div className="meta-item">
                <span className="meta-label">OUTCOME</span>
                <p>Simplified management and reduced manual scheduling via automation.</p>
              </div>
            </div>

            <div className="tech-tag-row">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">Supabase</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>THANK YOU</h2>
        <p className="footer-sub">Let's Build Something Meaningful Together</p>
        <a href="rajashreemedhi52@gmail.com" className="contact-link">rajashreemedhi52@gmail.com</a>
      </footer>
    </div>
  );
}

export default App;
