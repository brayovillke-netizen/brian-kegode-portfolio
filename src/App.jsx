
import { useState } from "react";
import "./index.css";

const categories = [
  {
    number: "01",
    tag: "PRODUCTIVITY",
    title: "Digital Tools",
    description:
      "Discover useful online tools and services for productivity, business and personal growth.",
  },
  {
    number: "02",
    tag: "FINTECH",
    title: "Financial Platforms",
    description:
      "Explore financial technology platforms and learn how their products and services work.",
  },
  {
    number: "03",
    tag: "DIGITAL",
    title: "Online Opportunities",
    description:
      "Find digital services and platforms to help you develop skills and explore new opportunities.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site kegova-site">
      <header className="navbar">
        <a
          className="logo"
          href="#home"
          onClick={closeMenu}
          aria-label="Kegova home"
        >
          <span>K</span>
          <div>
            <strong>KEGOVA</strong>
            <small>DIGITAL DISCOVERY</small>
          </div>
        </a>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#discover">Discover</a>
          <a href="#about">About</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "X" : "☰"}
        </button>

        {menuOpen && (
          <nav className="mobile-nav">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#discover" onClick={closeMenu}>Discover</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#partners" onClick={closeMenu}>Partners</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO KEGOVA</p>

            <h1>
              Discover smarter
              <br />
              ways to <span>move forward.</span>
            </h1>

            <h2>Your gateway to useful digital platforms.</h2>

            <p className="hero-text">
              We help people discover digital tools, financial technology
              platforms and online services through straightforward
              information and carefully selected resources.
            </p>

            <div className="hero-buttons">
              <a href="#discover" className="btn primary">
                Explore Platforms →
              </a>
              <a href="#about" className="btn secondary">
                Discover Kegova
              </a>
            </div>

            <p className="kegova-note">
              Independent discovery. Clear information. Smarter choices.
            </p>
          </div>

          <div className="hero-card kegova-hero-card">
            <div className="card-glow"></div>

            <div className="kegova-symbol" aria-hidden="true">
              K<span>.</span>
            </div>

            <div className="hero-card-info">
              <strong>KEGOVA</strong>
              <span>DISCOVER. LEARN. EXPLORE.</span>
            </div>

            <div className="kegova-card-bottom">
              <span>INDEPENDENT DIGITAL DISCOVERY</span>
              <span>KE · GLOBAL</span>
            </div>
          </div>
        </section>

        <section id="discover" className="section">
          <p className="section-label">01 — DISCOVER</p>

          <h2 className="section-title">
            Explore what's <span>possible.</span>
          </h2>

          <p className="contact-text">
            Start with a category that interests you. We're building a useful
            directory of platforms and services, with more resources to be
            added as they are reviewed.
          </p>

          <div className="projects-grid">
            {categories.map((category) => (
              <article className="project-card" key={category.number}>
                <span className="project-number">{category.number}</span>
                <span className="kegova-category-tag">{category.tag}</span>

                <h3>{category.title}</h3>
                <p>{category.description}</p>

                <a className="kegova-text-link" href="#partners">
                  Explore resources <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-label">02 — ABOUT US</p>

          <h2 className="section-title">
            Built around <span>better discovery.</span>
          </h2>

          <div className="about-grid">
            <div>
              <p>
                Kegova is an independent digital discovery and marketing brand
                focused on helping people find useful online platforms and
                services.
              </p>

              <p>
                Our goal is to make discovering digital products simpler
                through accessible information, transparent recommendations
                and useful resources.
              </p>

              <p>
                As we grow, we aim to develop partnerships with reputable
                businesses and connect interested users with services that fit
                their needs.
              </p>
            </div>

            <div className="about-highlight">
              <strong>OUR PRINCIPLES</strong>
              <ul>
                <li>Clear and accessible information</li>
                <li>Responsible recommendations</li>
                <li>Transparent affiliate disclosures</li>
                <li>Trust before commissions</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="partners" className="section">
          <p className="section-label">03 — PARTNERSHIPS</p>

          <h2 className="section-title">
            Let's grow <span>together.</span>
          </h2>

          <p className="contact-text">
            We welcome conversations with legitimate digital businesses,
            software providers and financial technology platforms interested
            in reaching new audiences.
          </p>

          <div className="experience-grid">
            <article className="experience-card">
              <span>FOR BUSINESSES</span>
              <h3>Partnership enquiries</h3>

              <p>
                Interested in working with Kegova? Contact us to discuss
                potential marketing and referral partnerships.
              </p>

              <a className="kegova-text-link" href="#contact">
                Get in touch →
              </a>
            </article>

            <article className="experience-card">
              <span>FOR VISITORS</span>
              <h3>Honest recommendations</h3>

              <p>
                We aim to explain what platforms offer and direct visitors to
                official providers. Partner relationships will be identified
                transparently.
              </p>
            </article>
          </div>

          <p className="kegova-disclosure">
            Kegova is developing its partner directory. No platform should be
            considered an official partner unless that relationship has been
            confirmed.
          </p>
        </section>

        <section id="contact" className="section contact-section">
          <p className="section-label">04 — CONTACT</p>

          <h2 className="section-title">
            Have an idea? <span>Let's talk.</span>
          </h2>

          <p className="contact-text">
            For partnership proposals, business enquiries or feedback, reach
            out to the Kegova team.
          </p>

          <div className="hero-buttons">
            <a
              href="mailto:briankegode129@gmail.com?subject=Kegova%20Business%20Enquiry"
              className="btn primary"
            >
              Email Kegova →
            </a>

            <a
              href="https://www.instagram.com/Kegode129"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              Instagram
            </a>
          </div>

          <p className="kegova-note">
            Email: briankegode129@gmail.com
          </p>
        </section>
      </main>

      <footer>
        <div className="kegova-footer-brand">
          <strong>K.</strong> KEGOVA
        </div>

        <p>
          Copyright © {new Date().getFullYear()} Kegova. All rights reserved.
        </p>

        <p className="kegova-footer-note">
          Independent digital discovery and marketing.
        </p>
      </footer>
    </div>
  );
}

export default App;
