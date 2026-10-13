
import { useState } from "react";
import "./index.css";

const services = [
  {
    number: "01",
    icon: "💻",
    title: "Digital Solutions",
    description:
      "Explore digital tools, software and online services designed to make work and everyday life easier.",
    tag: "TECHNOLOGY",
  },
  {
    number: "02",
    icon: "📊",
    title: "Financial Technology",
    description:
      "Discover financial platforms and digital services, with clear information to help you make informed choices.",
    tag: "FINTECH",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Digital Opportunities",
    description:
      "Find online platforms, useful resources and opportunities to learn, connect and grow.",
    tag: "OPPORTUNITY",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site kegode-site">
      <header className="navbar">
        <a
          className="logo"
          href="#home"
          aria-label="Kegode Technologies home"
          onClick={closeMenu}
        >
          <span className="logo-mark">K</span>
          <div className="logo-copy">
            <strong>KEGODE</strong>
            <small>TECHNOLOGIES</small>
          </div>
        </a>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Connect <span>↗</span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <nav className="mobile-nav">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#partners" onClick={closeMenu}>Partners</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              TECHNOLOGY FOR WHAT'S NEXT
            </div>

            <h1>
              Ideas into impact.
              <br />
              <span>Technology into</span>
              <br />
              opportunity.
            </h1>

            <p className="hero-text">
              Welcome to Kegode Technologies. We connect people with useful
              digital solutions, emerging technologies and online platforms
              that open up new possibilities.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn primary">
                Explore Our Services <span>→</span>
              </a>
              <a href="#about" className="btn secondary">
                Discover Our Vision
              </a>
            </div>

            <div className="hero-trust">
              <span className="trust-icon">✦</span>
              <span>Innovation</span>
              <span className="trust-divider">/</span>
              <span>Access</span>
              <span className="trust-divider">/</span>
              <span>Opportunity</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orb orb-one"></div>
            <div className="visual-orb orb-two"></div>

            <div className="tech-panel">
              <div className="panel-top">
                <div className="panel-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="panel-label">THE DIGITAL FUTURE</span>
              </div>

              <div className="big-k">K<span>.</span></div>

              <div className="panel-brand">
                <strong>KEGODE</strong>
                <span>TECHNOLOGIES</span>
              </div>

              <div className="panel-line"></div>

              <div className="panel-bottom">
                <span>THINK BIGGER.</span>
                <span>BUILD SMARTER.</span>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon blue-icon">✦</span>
              <div>
                <strong>Think digitally</strong>
                <small>Explore new possibilities</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon purple-icon">↗</span>
              <div>
                <strong>Move forward</strong>
                <small>Ideas meet opportunity</small>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div>
            <strong>01</strong>
            <span>Curiosity drives innovation</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Technology creates possibilities</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Trust builds lasting value</span>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="section-label">01 / WHAT WE DO</p>
            <h2 className="section-title">
              Technology with <span>purpose.</span>
            </h2>
            <p className="section-intro">
              We're building a digital destination for discovering services,
              platforms and resources that can help people move forward.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>

                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a className="service-link" href="#partners">
                  Discover more <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-visual">
            <div className="about-gradient"></div>
            <div className="about-monogram">K<span>.</span></div>
            <div className="about-caption">
              <span>OUR MINDSET</span>
              <strong>Think beyond today.</strong>
            </div>
          </div>

          <div className="about-content">
            <p className="section-label">02 / WHO WE ARE</p>
            <h2 className="section-title">
              Built for a <span>digital world.</span>
            </h2>

            <p>
              Kegode Technologies is an emerging technology and digital
              discovery brand focused on connecting people with useful online
              platforms, services and ideas.
            </p>

            <p>
              Our vision is to make technology easier to discover and
              understand while exploring responsible partnerships and
              practical digital solutions.
            </p>

            <ul className="principles-list">
              <li><span>✓</span> Clear and accessible information</li>
              <li><span>✓</span> Responsible digital recommendations</li>
              <li><span>✓</span> Transparent business relationships</li>
              <li><span>✓</span> Long-term trust and value</li>
            </ul>

            <a className="btn primary" href="#contact">
              Get to Know Us <span>→</span>
            </a>
          </div>
        </section>

        <section id="partners" className="section partners-section">
          <div className="partners-banner">
            <div className="partners-glow"></div>
            <p className="section-label">03 / PARTNER WITH US</p>
            <h2>
              Good ideas grow
              <br />
              <span>when we connect.</span>
            </h2>
            <p>
              Are you a digital business, software provider or technology
              platform? Let's explore opportunities to create value together.
            </p>
            <a href="#contact" className="btn light-btn">
              Discuss a Partnership <span>↗</span>
            </a>
          </div>

          <p className="disclosure">
            Kegode Technologies is developing its partner directory. No company
            is represented as an official partner unless that relationship has
            been confirmed. Some future links may be affiliate links, which
            will be disclosed where applicable.
          </p>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="section-label">04 / CONTACT</p>
            <h2 className="section-title">
              Let's make <span>something happen.</span>
            </h2>
            <p className="section-intro">
              Have a business proposal, partnership idea or question? We'd like
              to hear from you.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">✉</div>
            <div className="contact-card-copy">
              <strong>Start a conversation</strong>
              <span>Business enquiries and partnerships</span>
              <a href="mailto:briankegode129@gmail.com">
                briankegode129@gmail.com
              </a>
            </div>
            <a
              className="contact-arrow"
              href="mailto:briankegode129@gmail.com?subject=Kegode%20Technologies%20Business%20Enquiry"
              aria-label="Email Kegode Technologies"
            >
              ↗
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.instagram.com/Kegode129"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a href="mailto:briankegode129@gmail.com">
              Email ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          <span className="footer-mark">K</span>
          <span>
            <strong>KEGODE</strong>
            <small>TECHNOLOGIES</small>
          </span>
        </a>

        <p>
          © {new Date().getFullYear()} Kegode Technologies. All rights reserved.
        </p>

        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
