'use client';

import SplitText from './ui/SplitText';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>

        {/* Big name with SplitText animation */}
        <h1 className="display-name" style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
          <SplitText
            text="Syed Ismail"
            delay={45}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,80px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.1}
            rootMargin="0px"
            style={{
              fontSize: 'inherit',
              fontWeight: 'inherit',
              lineHeight: 'inherit',
              letterSpacing: 'inherit',
              color: 'inherit',
            }}
          />
        </h1>

        <div className="hero-divider" />

        <div className="hero-bottom-row">
          {/* Tagline */}
          <div>
            <span className="hero-tag">Full Stack Developer · Bengaluru, India</span>
            <p className="hero-tagline">
              Building modern web &amp; mobile applications with Next.js, Node.js, and cloud technologies.
            </p>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end', flexShrink: 0 }}>
            <a
              href="mailto:syedismailgp@gmail.com"
              className="nav-cta"
              style={{ fontSize: '0.85rem' }}
            >
              Get in touch &nbsp;→
            </a>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://github.com/syedzabii"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/syd-ismail"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
