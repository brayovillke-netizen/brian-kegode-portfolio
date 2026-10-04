// src/App.jsx

import { useState } from "react";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">

        <div className="logo">
          <span>BK</span>

          <div>
            <strong>KEGODE</strong>
            <small>PORTFOLIO</small>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav className="mobile-nav">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        )}

      </header>


      <main>

        {/* ================= HERO ================= */}
        <section id="home" className="hero">

          <div className="hero-content">

            <p className="eyebrow">
              HELLO, I'M
            </p>

            <h1>
              Brian <span>Kegode</span>
            </h1>

            <h2>
              Actuarial Science Student &amp; Tech Enthusiast
            </h2>

            <p className="hero-text">
              I am passionate about actuarial science, data, finance,
              insurance and technology. I enjoy turning ideas into practical
              solutions through analytical thinking and technology.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn primary"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="btn secondary"
              >
                Contact Me
              </a>

              <a
                href="/Brian_Kegode_CV.pdf"
                className="btn secondary"
                download
              >
                Download CV
              </a>

            </div>

          </div>


          {/* ================= PROFILE ================= */}
          <div className="hero-card">

            <div className="card-glow"></div>

            <img
              src="/images/profile.jpg"
              alt="Brian Kegode"
              className="profile-image"
            />

            <div className="hero-card-info">

              <strong>
                BRIAN KEGODE
              </strong>

              <span>
                ACTUARIAL • DATA • TECHNOLOGY
              </span>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section id="about" className="section">

          <p className="section-label">
            01 — ABOUT
          </p>

          <h2 className="section-title">
            Building a future where
            <span> numbers meet technology.</span>
          </h2>

          <div className="about-grid">

            <div>

              <p>
                I am an Actuarial Science student at Karatina University
                with a strong interest in mathematics, statistics, finance,
                insurance, data analysis and technology.
              </p>

              <p>
                My goal is to become a highly skilled actuarial professional
                while developing strong technological and analytical
                capabilities.
              </p>

              <p>
                I believe the future belongs to professionals who can
                understand both numbers and technology.
              </p>

            </div>


            <div className="about-highlight">

              <strong>
                MY FOCUS
              </strong>

              <ul>
                <li>Actuarial Science</li>
                <li>Data &amp; Analytics</li>
                <li>Finance &amp; Insurance</li>
                <li>Technology</li>
              </ul>

            </div>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}
        <section id="education" className="section">

          <p className="section-label">
            02 — EDUCATION
          </p>

          <h2 className="section-title">
            My <span>academic journey.</span>
          </h2>

          <div className="timeline">

            <div className="timeline-item">

              <span className="timeline-year">
                CURRENT
              </span>

              <div>

                <h3>
                  Karatina University
                </h3>

                <p>
                  Bachelor of Science in Actuarial Science
                </p>

                <small>
                  Developing skills in probability, statistics,
                  financial mathematics, risk management and
                  actuarial modelling.
                </small>

              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-year">
                HIGH SCHOOL
              </span>

              <div>

                <h3>
                  Nyang'ori Boys High School
                </h3>

                <p>
                  Secondary Education
                </p>

                <small>
                  Built a strong foundation in mathematics,
                  sciences and analytical thinking.
                </small>

              </div>

            </div>

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section">

          <p className="section-label">
            03 — EXPERIENCE
          </p>

          <h2 className="section-title">
            Experience that <span>shapes me.</span>
          </h2>

          <div className="experience-grid">

            <div className="experience-card">

              <span>
                EXPERIENCE 01
              </span>

              <h3>
                Match Masters Company
              </h3>

              <p>
                Gained practical workplace experience involving
                production deadlines, workplace safety procedures
                and documentation.
              </p>

            </div>


            <div className="experience-card">

              <span>
                EXPERIENCE 02
              </span>

              <h3>
                Hotel Experience
              </h3>

              <p>
                Developed customer service, teamwork, communication
                and problem-solving skills through hospitality work.
              </p>

            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section">

          <p className="section-label">
            04 — PROJECTS
          </p>

          <h2 className="section-title">
            Things I am <span>building.</span>
          </h2>

          <div className="projects-grid">

            {/* KEGODE FX */}
            <div className="project-card featured">

              <span className="project-number">
                01
              </span>

              <h3>
                Kegode FX
              </h3>

              <p>
                A developing financial technology platform combining
                financial markets, technology and user-focused design.
              </p>

              <div className="tags">
                <span>Python</span>
                <span>FastAPI</span>
                <span>React</span>
                <span>Finance</span>
              </div>

              <div className="project-action">
                Kegode FX — Coming Online →
              </div>

            </div>


            {/* DATA ANALYSIS */}
            <div className="project-card">

              <span className="project-number">
                02
              </span>

              <h3>
                Data Analysis Projects
              </h3>

              <p>
                Exploring statistical analysis, data visualization
                and analytical techniques using modern tools.
              </p>

              <div className="tags">
                <span>Python</span>
                <span>Statistics</span>
                <span>Excel</span>
              </div>

            </div>


            {/* FINANCIAL MODELLING */}
            <div className="project-card">

              <span className="project-number">
                03
              </span>

              <h3>
                Financial Modelling
              </h3>

              <p>
                Applying financial mathematics, actuarial concepts
                and modelling techniques to real-world problems.
              </p>

              <div className="tags">
                <span>Actuarial</span>
                <span>Finance</span>
                <span>Excel</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}
        <section id="skills" className="section">

          <p className="section-label">
            05 — SKILLS
          </p>

          <h2 className="section-title">
            Tools I use to <span>create.</span>
          </h2>

          <div className="skills-grid">

            <div className="skill">
              <strong>Excel</strong>
              <span>Financial &amp; Data Analysis</span>
            </div>

            <div className="skill">
              <strong>Python</strong>
              <span>Programming &amp; Analytics</span>
            </div>

            <div className="skill">
              <strong>Data Analysis</strong>
              <span>Statistics &amp; Visualization</span>
            </div>

            <div className="skill">
              <strong>Actuarial Science</strong>
              <span>Risk &amp; Financial Mathematics</span>
            </div>

            <div className="skill">
              <strong>Web Development</strong>
              <span>React &amp; Modern Web Apps</span>
            </div>

            <div className="skill">
              <strong>Financial Modelling</strong>
              <span>Finance &amp; Quantitative Analysis</span>
            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact-section">

          <p className="section-label">
            06 — CONTACT
          </p>

          <h2 className="section-title">
            Let's <span>connect.</span>
          </h2>

          <p className="contact-text">
            Whether you want to discuss actuarial science, technology,
            data, collaboration or an opportunity, feel free to reach out.
          </p>

          <div className="contact-links">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/Kegode129"
              target="_blank"
              rel="noreferrer"
              className="social-contact instagram"
            >

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.2"
                  fill="currentColor"
                />
              </svg>

              <span>
                Instagram
              </span>

            </a>


            {/* TIKTOK */}
            <a
              href="https://www.tiktok.com/@brayovill"
              target="_blank"
              rel="noreferrer"
              className="social-contact tiktok"
            >

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M15.5 3c.3 2.4 1.7 4.1 4 4.4v3.1c-1.5-.1-2.8-.6-4-1.4v6.2c0 4-2.5 6.2-6 6.2-3 0-5.5-2.1-5.5-5.4 0-3.4 2.6-5.7 5.9-5.7.4 0 .8 0 1.2.1v3.2c-.4-.1-.7-.2-1.1-.2-1.4 0-2.5.9-2.5 2.5 0 1.5 1.1 2.4 2.3 2.4 1.6 0 2.5-1 2.5-2.9V3h3.2z"
                  fill="currentColor"
                />
              </svg>

              <span>
                TikTok
              </span>

            </a>


            {/* PHONE */}
            <a
              href="tel:0700413388"
              className="social-contact phone"
            >

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M6.6 2.8 9.2 2c.8-.2 1.6.2 1.9.9l1.2 2.9c.3.7.1 1.5-.5 2l-1.7 1.4c1 2 2.5 3.5 4.5 4.5l1.4-1.7c.5-.6 1.3-.8 2-.5l2.9 1.2c.7.3 1.1 1.1.9 1.9l-.8 2.6c-.2.7-.9 1.2-1.6 1.2C10.3 18.4 5.6 13.7 4.2 4.4c-.1-.7.4-1.4 1.2-1.6h1.2z"
                  fill="currentColor"
                />
              </svg>

              <span>
                Call
              </span>

            </a>


            {/* GMAIL */}
            <a
              href="mailto:briankegode129@gmail.com"
              className="social-contact gmail"
            >

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M4.5 6 12 12l7.5-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <path
                  d="M4.5 18V6M19.5 18V6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

              </svg>

              <span>
                Gmail
              </span>

            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer>

        <div>
          <strong>BK</strong> KEGODE
        </div>

        <p>
          © 2026 Brian Kegode. Built with ambition &amp; technology.
        </p>

      </footer>

    </div>
  );
}

export default App;