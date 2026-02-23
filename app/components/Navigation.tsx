'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Experience', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="nav-logo"
        style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
      >
        Syed Ismail
      </button>

      {/* Center links */}
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <button
              onClick={() => scrollTo(item.href)}
              className="nav-link"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="mailto:syedismailgp@gmail.com"
        className="nav-cta"
      >
        Hire Me &nbsp;→
      </a>
    </nav>
  );
}
