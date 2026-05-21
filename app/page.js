'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  profile,
  summary,
  stats,
  experience,
  skillGroups,
  work,
  education,
} from '@/lib/data';

const Globe = dynamic(() => import('@/components/Globe'), { ssr: false });

const ArrowUR = () => (
  <svg className="arrow" width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowDown = () => (
  <svg className="arrow" width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M7 2v9M3 7l4 4 4-4" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  const root = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // hero load sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-status', { y: 16, opacity: 0, duration: 0.6 })
        .from('.hero-name .ln > span', {
          yPercent: 110, opacity: 0, duration: 1, stagger: 0.12,
        }, '-=0.2')
        .from('.hero-role', { y: 14, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('.hero-tagline', { y: 18, opacity: 0, duration: 0.7 }, '-=0.35')
        .from('.hero-actions .btn', { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('.hero-meta span', { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.35')
        .from('.globe-wrap', { opacity: 0, scale: 0.9, duration: 1.6, ease: 'power2.out' }, 0)
        .from('.scroll-cue', { opacity: 0, duration: 0.6 }, '-=0.2');

      // generic reveal-on-scroll
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%' },
        });
      });
      gsap.utils.toArray('.reveal-l').forEach((el) => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%' },
        });
      });

      // staggered groups
      gsap.utils.toArray('[data-stagger]').forEach((grp) => {
        gsap.to(grp.children, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.09,
          scrollTrigger: { trigger: grp, start: 'top 84%' },
        });
      });

      // scroll progress bar
      gsap.to('.progress', {
        width: '100%', ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      <div className="progress" />

      {/* ---------------- NAV ---------------- */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="dot" />
            gidraf<span className="slash">.</span>dev
          </a>
          <div className="nav-links">
            <a href="#about">/ about</a>
            <a href="#work">/ experience</a>
            <a href="#skills">/ skills</a>
            <a href="#projects">/ projects</a>
            <a href="#contact">/ contact</a>
            <a className="nav-cta" href={profile.resume} download>
              Résumé ↓
            </a>
          </div>
          <a className="nav-burger" href={profile.resume} download>
            RÉSUMÉ ↓
          </a>
        </div>
      </nav>

      {/* ---------------- HERO ---------------- */}
      <header className="hero" id="top">
        <div className="globe-wrap">
          <Globe />
        </div>
        <div className="shell hero-inner">
          <div className="hero-status">
            <span className="pulse" />
            {profile.available}
          </div>

          <h1 className="hero-name">
            <span className="ln"><span>Gidraf Orenja</span></span>
            <span className="ln"><span><em>Mtange</em></span></span>
          </h1>
          <div className="hero-role">{profile.title} · Nairobi, Kenya</div>

          <p className="hero-tagline">
            I design <strong>high-availability, API-driven platforms</strong> — and the
            delivery practices that let teams ship them continuously.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.resume} download>
              Download Résumé <ArrowDown />
            </a>
            <a className="btn btn-ghost" href="#work">
              View Experience <ArrowUR />
            </a>
          </div>

          <div className="hero-meta">
            <span><b>9+</b> years in software</span>
            <span><b>FinTech</b> · Payments · Agri-tech</span>
            <span><b>Architecture</b> · Microservices · CI/CD</span>
          </div>
        </div>

        <div className="scroll-cue">
          <span>scroll</span>
          <span className="bar" />
        </div>
      </header>

      {/* ---------------- ABOUT ---------------- */}
      <section className="section" id="about">
        <div className="shell">
          <div className="about-grid">
            <div className="about-body reveal-l">
              <div className="eyebrow">01 — Profile</div>
              <h2 className="section-title">
                Engineering platforms that<br />outlast the project.
              </h2>
              <p style={{ marginTop: 26 }}>{summary}</p>
              <p className="signature">— building for scale, shipping with discipline.</p>
            </div>
            <div className="stat-stack" data-stagger>
              {stats.map((s) => (
                <div className="stat reveal" key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- EXPERIENCE ---------------- */}
      <section className="section" id="work">
        <div className="shell">
          <div className="section-head reveal">
            <div className="eyebrow">02 — Experience</div>
            <h2 className="section-title">Six years, five teams,<br />one throughline.</h2>
            <p className="section-lead">
              From card payments to core banking to agri-tech — a consistent pattern of
              architecting reliable systems and lifting how teams deliver.
            </p>
          </div>

          <div className="timeline">
            {experience.map((job, i) => (
              <div className="job reveal" key={job.company + i}>
                <div className="job-node" />
                <article className="job-card">
                  <div className="job-top">
                    <h3 className="job-company">{job.company}</h3>
                    <span className="job-period">{job.period}</span>
                  </div>
                  <div className="job-sub">
                    <span className="role">{job.role}</span>
                    <span className="sep">/</span>
                    <span>{job.division}</span>
                    <span className="sep">/</span>
                    <span>{job.location}</span>
                  </div>
                  {job.summary && <p className="job-summary">{job.summary}</p>}
                  <ul className="job-points">
                    {job.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                  <div className="job-tags">
                    {job.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section className="section" id="skills">
        <div className="shell">
          <div className="section-head reveal">
            <div className="eyebrow">03 — Capabilities</div>
            <h2 className="section-title">A full-stack toolkit,<br />weighted to the backend.</h2>
            <p className="section-lead">
              Languages, frameworks and practices used to design, build, test and operate
              production systems.
            </p>
          </div>
          <div className="skills-grid" data-stagger>
            {skillGroups.map((g, i) => (
              <div className="skill-card reveal" key={g.label}>
                <div className="skill-label">
                  <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                  {g.label}
                </div>
                <div className="skill-items">
                  {g.items.map((it) => (
                    <span className="skill-pill" key={it}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section className="section" id="projects">
        <div className="shell">
          <div className="section-head reveal">
            <div className="eyebrow">04 — Selected Work</div>
            <h2 className="section-title">Platforms in production.</h2>
            <p className="section-lead">
              Products built on — or built by — the foundations and teams I&apos;ve
              contributed to.
            </p>
          </div>
          <div className="work-grid" data-stagger>
            {work.map((w) => (
              <a
                className="work-card reveal"
                key={w.name}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="work-kind">{w.kind}</span>
                <span className="work-name">{w.name}</span>
                <span className="work-note">{w.note}</span>
                <span className="work-link">
                  {w.linkLabel} <ArrowUR />
                </span>
              </a>
            ))}
          </div>

          <div className="edu-row reveal" style={{ marginTop: 40 }}>
            {education.map((e) => (
              <div className="edu-card" key={e.title}>
                <div className="edu-title">{e.title}</div>
                <div className="edu-org">{e.org}</div>
                {e.period && <div className="edu-period">{e.period}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section className="section contact" id="contact">
        <div className="shell">
          <div className="reveal">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              05 — Get in touch
            </div>
            <h2 className="section-title">
              Let&apos;s build something<br />reliable together.
            </h2>
            <a className="contact-mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact-actions">
              <a className="btn btn-primary" href={profile.resume} download>
                Download Résumé <ArrowDown />
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUR />
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUR />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="footer-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.resume} download>Résumé</a>
          </div>
          <span>{profile.location} · {profile.phone}</span>
        </div>
      </footer>
    </main>
  );
}
