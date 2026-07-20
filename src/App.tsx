import { useEffect, useState } from 'react';
import {
  portfolioContent,
  staticPortfolioContentSource,
  type PortfolioContent,
  type ProjectItem,
  type SkillItem,
} from './content/portfolio';

type Route = 'home' | 'experience' | 'skills' | 'projects' | 'resume';

const navItems: Array<{ label: string; route: Route }> = [
  { label: 'About', route: 'home' },
  { label: 'Experience', route: 'experience' },
  { label: 'Skills', route: 'skills' },
  { label: 'Projects', route: 'projects' },
  { label: 'Resume', route: 'resume' },
];

const routeTitles: Record<Route, string> = {
  home: 'About',
  experience: 'Experience',
  skills: 'Skills',
  projects: 'Projects',
  resume: 'Resume',
};

const simpleIconCatalog: Record<string, string> = {
  ansible: 'https://cdn.simpleicons.org/ansible/EE0000',
  bitbucket: 'https://cdn.simpleicons.org/bitbucket/0052CC',
  confluence: 'https://cdn.simpleicons.org/confluence/172B4D',
  flask: 'https://cdn.simpleicons.org/flask/000000',
  git: 'https://cdn.simpleicons.org/git/F05032',
  jira: 'https://cdn.simpleicons.org/jira/0052CC',
  jenkins: 'https://cdn.simpleicons.org/jenkins/D24939',
  linux: 'https://cdn.simpleicons.org/linux/FCC624',
  oracle: 'https://cdn.simpleicons.org/oracle/F80000',
  powerbi: 'https://cdn.simpleicons.org/powerbi/F2C811',
  python: 'https://cdn.simpleicons.org/python/3776AB',
  sonarqube: 'https://cdn.simpleicons.org/sonarqube/4E9BCD',
};

const artPresets: Record<
  string,
  { start: string; end: string; accent: string; accentSoft: string; label: string }
> = {
  default: {
    start: '#1e293b',
    end: '#334155',
    accent: '#1d4ed8',
    accentSoft: '#93c5fd',
    label: '#e2e8f0',
  },
  'hero-portrait': {
    start: '#0f172a',
    end: '#1e3a8a',
    accent: '#60a5fa',
    accentSoft: '#cbd5e1',
    label: '#f8fafc',
  },
  pathfinder: {
    start: '#0f766e',
    end: '#1d4ed8',
    accent: '#f59e0b',
    accentSoft: '#bae6fd',
    label: '#ecfeff',
  },
  'alarm-chattering': {
    start: '#0f172a',
    end: '#475569',
    accent: '#f97316',
    accentSoft: '#fde68a',
    label: '#f8fafc',
  },
  'lean-automation': {
    start: '#1e3a8a',
    end: '#0f766e',
    accent: '#a855f7',
    accentSoft: '#bfdbfe',
    label: '#eff6ff',
  },
};

function getRouteFromHash(hash: string): Route {
  const cleaned = hash.replace(/^#\/?/, '').replace(/^\/+/, '').trim().toLowerCase();

  if (!cleaned || cleaned === 'about' || cleaned === 'home') {
    return 'home';
  }

  if (cleaned.startsWith('experience')) {
    return 'experience';
  }

  if (cleaned.startsWith('skills')) {
    return 'skills';
  }

  if (cleaned.startsWith('projects')) {
    return 'projects';
  }

  if (cleaned.startsWith('resume')) {
    return 'resume';
  }

  return 'home';
}

function routeHref(route: Route) {
  return route === 'home' ? '#/' : `#/${route}`;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toSvgDataUri(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function pickPreset(key: string) {
  return artPresets[key] ?? artPresets.default;
}

function buildArtwork(title: string, subtitle: string, key: string) {
  const preset = pickPreset(key);
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);

  return toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${preset.start}" />
          <stop offset="100%" stop-color="${preset.end}" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stop-color="${preset.accent}" stop-opacity="0.7" />
          <stop offset="100%" stop-color="${preset.accent}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" />
      <circle cx="930" cy="160" r="210" fill="url(#glow)" />
      <circle cx="165" cy="760" r="180" fill="${preset.accent}" fill-opacity="0.18" />
      <rect x="70" y="70" width="360" height="24" rx="12" fill="${preset.label}" fill-opacity="0.2" />
      <rect x="70" y="116" width="240" height="14" rx="7" fill="${preset.label}" fill-opacity="0.14" />
      <rect x="70" y="214" width="1060" height="490" rx="40" fill="${preset.label}" fill-opacity="0.1" stroke="${preset.label}" stroke-opacity="0.16" />
      <rect x="110" y="254" width="550" height="62" rx="18" fill="${preset.label}" fill-opacity="0.18" />
      <rect x="110" y="344" width="300" height="18" rx="9" fill="${preset.label}" fill-opacity="0.18" />
      <rect x="110" y="382" width="390" height="18" rx="9" fill="${preset.label}" fill-opacity="0.12" />
      <rect x="110" y="444" width="170" height="170" rx="28" fill="${preset.accent}" fill-opacity="0.18" stroke="${preset.accentSoft}" stroke-opacity="0.5" />
      <rect x="308" y="444" width="170" height="170" rx="28" fill="${preset.label}" fill-opacity="0.11" />
      <rect x="506" y="444" width="170" height="170" rx="28" fill="${preset.accent}" fill-opacity="0.13" />
      <rect x="110" y="656" width="420" height="22" rx="11" fill="${preset.label}" fill-opacity="0.18" />
      <text x="110" y="760" fill="${preset.label}" fill-opacity="0.96" font-family="Space Grotesk, Arial, sans-serif" font-size="64" font-weight="700">${safeTitle}</text>
      <text x="110" y="822" fill="${preset.label}" fill-opacity="0.72" font-family="IBM Plex Sans, Arial, sans-serif" font-size="28" font-weight="500">${safeSubtitle}</text>
    </svg>
  `);
}

function buildSkillFallbackIcon(name: string, iconKey: string) {
  const preset = pickPreset(iconKey);
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

  return toSvgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="${escapeXml(name)}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${preset.start}" />
          <stop offset="100%" stop-color="${preset.end}" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="28" fill="url(#bg)" />
      <circle cx="88" cy="40" r="26" fill="${preset.accent}" fill-opacity="0.24" />
      <path d="M26 86c16-26 40-36 76-30" fill="none" stroke="${preset.accentSoft}" stroke-width="8" stroke-linecap="round" stroke-opacity="0.5" />
      <text x="64" y="78" text-anchor="middle" fill="#ffffff" font-family="Space Grotesk, Arial, sans-serif" font-size="34" font-weight="700">${escapeXml(initials || name.slice(0, 2).toUpperCase())}</text>
    </svg>
  `);
}

function resolveSkillIcon(item: SkillItem) {
  return simpleIconCatalog[item.iconKey];
}

function buildResumeDownload(content: PortfolioContent) {
  const lines: string[] = [
    content.name,
    content.headline,
    content.location,
    content.email,
    content.phone,
    '',
    'Professional Summary',
    content.summary,
    '',
    'Experience',
  ];

  content.experience.forEach((job) => {
    lines.push(
      `${job.role} | ${job.company} | ${job.location} | ${job.period}`,
      job.summary,
      ...job.bullets.map((bullet) => `- ${bullet}`),
      '',
    );
  });

  lines.push('Projects');
  content.projects.forEach((project) => {
    lines.push(
      `${project.name} | ${project.context}`,
      project.summary,
      ...project.bullets.map((bullet) => `- ${bullet}`),
      `Tags: ${project.tags.join(', ')}`,
      '',
    );
  });

  lines.push('Skills');
  content.skills.forEach((group) => {
    lines.push(`${group.category}: ${group.items.map((item) => item.name).join(', ')}`);
  });

  lines.push('', 'Education');
  content.education.forEach((item) => {
    lines.push(
      `${item.degree} | ${item.school} | ${item.location} | ${item.period}`,
      ...item.details.map((detail) => `- ${detail}`),
      '',
    );
  });

  lines.push('Certifications');
  content.certifications.forEach((item) => {
    lines.push(`- ${item.title}: ${item.detail}`);
  });

  lines.push('', 'Recognition');
  content.recognition.forEach((item) => {
    lines.push(`- ${item.title}: ${item.detail}`);
  });

  lines.push('', 'Leadership');
  content.leadership.forEach((item) => {
    lines.push(`- ${item.title}: ${item.detail}`);
  });

  return `data:text/plain;charset=utf-8,${encodeURIComponent(lines.join('\n'))}`;
}

function App() {
  const [content, setContent] = useState<PortfolioContent>(portfolioContent);
  const [route, setRoute] = useState<Route>(() => getRouteFromHash(window.location.hash));

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
    const handleHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const title = `${content.name} | ${routeTitles[route]}`;
    document.title = title;
    window.scrollTo(0, 0);
  }, [content.name, route]);

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
        threshold: 0.15,
        rootMargin: '0px 0px -6% 0px',
      },
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index, 16) * 60}ms`);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [route, content]);

  const heroArt = buildArtwork(content.name, content.headline, 'hero-portrait');
  const resumeDownload = buildResumeDownload(content);

  return (
    <div className="site-shell">
      <div className="page-glow page-glow--left" aria-hidden="true" />
      <div className="page-glow page-glow--right" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href={routeHref('home')} aria-label="Go to home page">
          <span className="brand-mark">ASJ</span>
          <span>
            <strong>{content.name}</strong>
            <small>{content.headline}</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Primary">
          {navItems.map((item) => {
            const href = routeHref(item.route);
            const isActive = route === item.route;

            return (
              <a key={item.route} href={href} aria-current={isActive ? 'page' : undefined}>
                {item.label}
              </a>
            );
          })}
        </nav>
      </header>

      <main className="page" id="top">
        {route === 'home' && <HomePage content={content} heroArt={heroArt} />}
        {route === 'experience' && <ExperiencePage content={content} />}
        {route === 'skills' && <SkillsPage content={content} />}
        {route === 'projects' && <ProjectsPage content={content} />}
        {route === 'resume' && <ResumePage content={content} resumeDownload={resumeDownload} />}
      </main>

      <footer className="footer">
        <span>{content.name}</span>
        <span>{content.location}</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

function HomePage({ content, heroArt }: { content: PortfolioContent; heroArt: string }) {
  const pageCards = [
    {
      label: 'Experience',
      route: 'experience' as const,
      summary: 'Timeline of delivery, support, and production ownership across banking and telecom.',
    },
    {
      label: 'Skills',
      route: 'skills' as const,
      summary: 'Compact visual skill groups with logos and clearly labeled capability areas.',
    },
    {
      label: 'Projects',
      route: 'projects' as const,
      summary: 'Selected work with image previews and concise project context.',
    },
    {
      label: 'Resume',
      route: 'resume' as const,
      summary: 'A fuller resume page with download access and detailed background.',
    },
  ];

  return (
    <>
      <section className="page-hero" data-reveal>
        <div className="hero-copy">
          <p className="eyebrow">About</p>
          <h1>{content.name}</h1>
          <p className="headline">{content.headline}</p>
          <p className="summary">{content.summary}</p>

          <div className="cta-row">
            <a className="button button--primary" href={routeHref('experience')}>
              Explore experience
            </a>
            <a className="button button--secondary" href={routeHref('projects')}>
              View projects
            </a>
            <a className="button button--secondary" href={routeHref('resume')}>
              Open resume
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
              <span>GitHub</span>
              <a href={content.github} target="_blank" rel="noreferrer">
                Profile
              </a>
            </li>
          </ul>
        </div>

        <aside className="hero-aside">
          <figure className="media-card media-card--hero" data-reveal>
            <img src={heroArt} alt={content.heroImage.alt} />
            <figcaption>
              <span className="card-kicker">Professional snapshot</span>
              <strong>Structured delivery, release discipline, and support that stays stable under pressure.</strong>
            </figcaption>
          </figure>

          <div className="panel-card panel-card--accent" data-reveal>
            <p className="card-kicker">Quick snapshot</p>
            <div className="stat-grid">
              {content.stats.map((stat) => (
                <article key={stat.label} className="stat-card">
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

      <section className="route-launchpad" data-reveal>
        {pageCards.map((item, index) => (
          <a key={item.route} className="route-card" href={routeHref(item.route)} data-reveal>
            <span className="route-card__index">0{index + 1}</span>
            <span className="route-card__title">{item.label}</span>
            <span className="route-card__summary">{item.summary}</span>
            <span className="route-card__link">Open page</span>
          </a>
        ))}
      </section>

      <section className="about-grid" data-reveal>
        <article className="panel-card" data-reveal>
          <p className="card-kicker">About</p>
          <h2>Application lifecycle support with a delivery-first mindset.</h2>
          <p>
            I build reliable systems that stay stable under pressure. My experience is strongest in
            DevOps, release automation, Linux operations, SQL workflows, and data-driven problem
            solving, with additional depth in backend support and industrial engineering.
          </p>
          <p>
            I like work that sits between deployment, operations, code, and business outcomes:
            systems where reliability, traceability, and delivery discipline matter just as much
            as the feature itself.
          </p>
        </article>

        <article className="panel-card" data-reveal>
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
        </article>
      </section>
    </>
  );
}

function ExperiencePage({ content }: { content: PortfolioContent }) {
  return (
    <>
      <section className="page-header" data-reveal>
        <div>
          <p className="eyebrow">Experience</p>
          <h1>Banking and telecom delivery across the application lifecycle.</h1>
          <p className="section-lede">
            A professional record focused on release discipline, support ownership, automation, and
            production stability.
          </p>
        </div>

        <aside className="panel-card page-sidecard" data-reveal>
          <p className="card-kicker">Core strengths</p>
          <ul className="focus-list">
            {content.focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="timeline" data-reveal>
        {content.experience.map((job) => (
          <article key={`${job.company}-${job.role}`} className="panel-card timeline-item" data-reveal>
            <div className="timeline-topline">
              <div>
                <p className="card-kicker">{job.company}</p>
                <h2>{job.role}</h2>
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
      </section>
    </>
  );
}

function SkillsPage({ content }: { content: PortfolioContent }) {
  return (
    <>
      <section className="page-header" data-reveal>
        <div>
          <p className="eyebrow">Skills</p>
          <h1>Visual skill groups for delivery, development, and analysis.</h1>
          <p className="section-lede">
            Compact logo treatment keeps the page readable while still giving each skill an image
            presence.
          </p>
        </div>

        <aside className="panel-card page-sidecard" data-reveal>
          <p className="card-kicker">How to read this page</p>
          <p className="muted">
            Brand icons are used where available. Less common tools fall back to a clean generated
            badge so every skill still has a visual marker.
          </p>
        </aside>
      </section>

      <section className="skills-grid" data-reveal>
        {content.skills.map((group) => (
          <article key={group.category} className="panel-card skill-group" data-reveal>
            <p className="card-kicker">{group.category}</p>
            <ul className="skill-list">
              {group.items.map((item) => (
                <SkillTile key={item.name} item={item} />
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}

function SkillTile({ item }: { item: SkillItem }) {
  const [failed, setFailed] = useState(false);
  const remoteSrc = resolveSkillIcon(item);
  const fallbackSrc = buildSkillFallbackIcon(item.name, item.iconKey);
  const src = !failed && remoteSrc ? remoteSrc : fallbackSrc;

  return (
    <li className="skill-chip">
      <span className="skill-chip__icon">
        <img src={src} alt="" aria-hidden="true" onError={() => setFailed(true)} />
      </span>
      <span>{item.name}</span>
    </li>
  );
}

function ProjectsPage({ content }: { content: PortfolioContent }) {
  return (
    <>
      <section className="page-header" data-reveal>
        <div>
          <p className="eyebrow">Projects</p>
          <h1>Selected work with clearer visuals and stronger context.</h1>
          <p className="section-lede">
            The project cards are image-led so each piece gets more breathing room and a more
            polished presentation.
          </p>
        </div>
      </section>

      <section className="project-grid" data-reveal>
        {content.projects.map((project, index) => (
          <article
            key={project.name}
            className={`panel-card project-card ${index === 0 ? 'project-card--featured' : ''}`}
            data-reveal
          >
            <figure className="media-card project-media">
              <img src={buildArtwork(project.name, project.context, project.image.key)} alt={project.image.alt} />
            </figure>
            <p className="card-kicker">{project.context}</p>
            <h2>{project.name}</h2>
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
      </section>
    </>
  );
}

function ResumePage({
  content,
  resumeDownload,
}: {
  content: PortfolioContent;
  resumeDownload: string;
}) {
  return (
    <>
      <section className="resume-hero" data-reveal>
        <div>
          <p className="eyebrow">Resume</p>
          <h1>A fuller professional summary with a direct download option.</h1>
          <p className="section-lede">
            This page collects the key resume sections in a structured layout while still keeping
            the page readable on desktop and mobile.
          </p>
          <div className="cta-row">
            <a className="button button--primary" href={resumeDownload} download={content.resumeDownloadName}>
              Download resume
            </a>
            <a className="button button--secondary" href={`mailto:${content.email}`}>
              Email me
            </a>
            <a className="button button--secondary" href={content.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="panel-card page-sidecard" data-reveal>
          <p className="card-kicker">Contact</p>
          <ul className="contact-stack">
            <li>
              <span>Email</span>
              <a href={`mailto:${content.email}`}>{content.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${content.phone.replace(/[^+\d]/g, '')}`}>{content.phone}</a>
            </li>
            <li>
              <span>Location</span>
              <span>{content.location}</span>
            </li>
          </ul>
        </aside>
      </section>

      <section className="resume-grid" data-reveal>
        <article className="panel-card resume-panel" data-reveal>
          <p className="card-kicker">Summary</p>
          <p>{content.summary}</p>
        </article>

        <article className="panel-card resume-panel" data-reveal>
          <p className="card-kicker">Focus areas</p>
          <ul className="tag-cloud">
            {content.focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="resume-section" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Career timeline</h2>
        </div>
        <div className="timeline">
          {content.experience.map((job) => (
            <article key={`${job.company}-${job.role}`} className="panel-card timeline-item" data-reveal>
              <div className="timeline-topline">
                <div>
                  <p className="card-kicker">{job.company}</p>
                  <h2>{job.role}</h2>
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

      <section className="resume-section" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected project work</h2>
        </div>
        <div className="project-grid project-grid--resume">
          {content.projects.map((project) => (
            <article key={project.name} className="panel-card project-card" data-reveal>
              <figure className="media-card project-media">
                <img src={buildArtwork(project.name, project.context, project.image.key)} alt={project.image.alt} />
              </figure>
              <p className="card-kicker">{project.context}</p>
              <h2>{project.name}</h2>
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

      <section className="resume-section" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Capability groups</h2>
        </div>
        <div className="skills-grid skills-grid--resume">
          {content.skills.map((group) => (
            <article key={group.category} className="panel-card skill-group" data-reveal>
              <p className="card-kicker">{group.category}</p>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <SkillTile key={item.name} item={item} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-grid resume-grid--three" data-reveal>
        <article className="panel-card resume-panel" data-reveal>
          <p className="card-kicker">Education</p>
          {content.education.map((item) => (
            <div key={`${item.school}-${item.degree}`} className="resume-list-block">
              <h3>{item.degree}</h3>
              <p className="muted">
                {item.school} | {item.location} | {item.period}
              </p>
              <ul className="bullet-list">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        <article className="panel-card resume-panel" data-reveal>
          <p className="card-kicker">Certifications</p>
          <ul className="bullet-list">
            {content.certifications.map((cert) => (
              <li key={cert.title}>
                <strong>{cert.title}:</strong> {cert.detail}
              </li>
            ))}
          </ul>
        </article>

        <article className="panel-card resume-panel" data-reveal>
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
    </>
  );
}

export default App;
