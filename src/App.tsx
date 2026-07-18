import { useEffect, useState } from 'react';
import {
  portfolioContent,
  staticPortfolioContentSource,
  type PortfolioContent,
} from './content/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [content, setContent] = useState<PortfolioContent>(portfolioContent);

  useEffect(() => {
    let active = true;

    void staticPortfolioContentSource.get().then((next) => {
      if (active) {
        setContent(next);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (!elements.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index, 14) * 70}ms`);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="page-glow page-glow--left" aria-hidden="true" />
      <div className="page-glow page-glow--right" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Go to top of page">
          <span className="brand-mark">ASJ</span>
          <span>
            <strong>{content.name}</strong>
            <small>{content.headline}</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="page">
        <section className="hero panel panel--hero" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow">DevOps-first application lifecycle profile</p>
            <h1>{content.name}</h1>
            <p className="headline">{content.headline}</p>
            <p className="summary">{content.summary}</p>

            <div className="cta-row">
              <a className="button button--primary" href="#experience">
                View my experience
              </a>
              <a className="button button--secondary" href="#projects">
                Explore Pathfinder
              </a>
              <a className="button button--secondary" href={content.resumeUrl}>
                Request resume
              </a>
              <a
                className="button button--secondary"
                href={content.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>

            <ul className="contact-line" aria-label="Contact details">
              <li>
                <span>Email</span>
                <a href={`mailto:${content.email}`}>{content.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={`tel:${content.phone.replace(/[^+\d]/g, '')}`}>{content.phone}</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={content.linkedin} target="_blank" rel="noreferrer">
                  Profile
                </a>
              </li>
              <li>
                <span>Location</span>
                <span>{content.location}</span>
              </li>
              <li>
                <span>GitHub</span>
                <a href={content.github} target="_blank" rel="noreferrer">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          <aside className="hero-aside">
            <div className="panel-card panel-card--accent" data-reveal>
              <p className="card-kicker">Quick snapshot</p>
              <div className="stat-grid">
                {content.stats.map((stat) => (
                  <article key={stat.label} className="stat-card" data-reveal>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="panel-card" data-reveal>
              <p className="card-kicker">Where I add value</p>
              <ul className="focus-list">
                {content.focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section id="about" className="panel" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Application lifecycle support with a DevOps-first mindset.</h2>
          </div>

          <div className="two-column">
            <div className="panel-card" data-reveal>
              <p>
                I build reliable systems that stay stable under pressure. My experience is
                strongest in DevOps, release automation, Linux operations, SQL workflows, and
                data-driven problem solving, with additional depth in backend support and
                industrial engineering.
              </p>
              <p>
                I like work that sits at the seam between deployment, operations, code, and
                business outcomes: the kind of systems where reliability, traceability, and
                delivery discipline matter just as much as the feature itself.
              </p>
            </div>

            <div className="panel-card" data-reveal>
              <p className="card-kicker">Profile shape</p>
              <ul className="tag-cloud">
                {[
                  'DevOps and release automation',
                  'Linux operations and reliability',
                  'Developer and backend support',
                  'Data analysis and reporting',
                  'Process improvement and analytics',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="panel" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Banking and telecom delivery across the application lifecycle.</h2>
          </div>

          <div className="timeline">
            {content.experience.map((job) => (
              <article
                key={`${job.company}-${job.role}`}
                className="timeline-item panel-card"
                data-reveal
              >
                <div className="timeline-topline">
                  <div>
                    <p className="card-kicker">{job.company}</p>
                    <h3>{job.role}</h3>
                  </div>
                  <div className="timeline-meta">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <p className="muted">{job.summary}</p>
                <ul className="bullet-list">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="panel" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work that reflects product thinking and applied technical depth.</h2>
          </div>

          <div className="card-grid">
            {content.projects.map((project) => (
              <article key={project.name} className="panel-card project-card" data-reveal>
                <p className="card-kicker">{project.context}</p>
                <h3>{project.name}</h3>
                <p className="muted">{project.summary}</p>
                <ul className="bullet-list">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <ul className="pill-row" aria-label={`${project.name} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="panel" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Focused capability areas for DevOps, development, and analysis.</h2>
          </div>

          <div className="skills-grid">
            {content.skills.map((group) => (
              <article key={group.category} className="panel-card" data-reveal>
                <p className="card-kicker">{group.category}</p>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="panel" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Engineering foundations with analytics depth.</h2>
          </div>

          <div className="card-grid card-grid--education">
            {content.education.map((item) => (
              <article key={`${item.school}-${item.degree}`} className="panel-card" data-reveal>
                <p className="card-kicker">{item.school}</p>
                <h3>{item.degree}</h3>
                <p className="muted">
                  {item.location} | {item.period}
                </p>
                <ul className="bullet-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel panel--split" data-reveal>
          <article className="panel-card" data-reveal>
            <p className="card-kicker">Certifications</p>
            <ul className="bullet-list">
              {content.certifications.map((cert) => (
                <li key={cert.title}>
                  <strong>{cert.title}:</strong> {cert.detail}
                </li>
              ))}
            </ul>
          </article>

          <article className="panel-card" data-reveal>
            <p className="card-kicker">Recognition & leadership</p>
            <ul className="bullet-list">
              {content.recognition.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.detail}
                </li>
              ))}
              {content.leadership.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.detail}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="contact" className="panel contact-panel" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Open to DevOps, IT development, and application support opportunities.</h2>
          </div>

          <div className="panel-card contact-card" data-reveal>
            <p>
              I’m open to roles that combine deployment, automation, application support, and
              production reliability. The portfolio is static today, but the content layer is
              already separated from the UI for future updates.
            </p>

            <div className="cta-row">
              <a className="button button--primary" href={`mailto:${content.email}`}>
                {content.email}
              </a>
              <a className="button button--secondary" href={content.linkedin} target="_blank" rel="noreferrer">
                LinkedIn profile
              </a>
              <a className="button button--secondary" href={content.github} target="_blank" rel="noreferrer">
                GitHub profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>{content.name}</span>
        <span>Static-first today. Dynamic-ready tomorrow.</span>
      </footer>
    </div>
  );
}

export default App;
