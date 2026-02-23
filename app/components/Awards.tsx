'use client';

import { awards } from '../theme';
import SplitText from './ui/SplitText';

export default function Awards() {
  return (
    <section id="awards" className="awards-section">
      <h2 className="section-heading">
        <SplitText
          text={awards.title}
          delay={35}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          style={{ fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit', color: 'inherit' }}
        />
      </h2>

      <div className="awards-list">
        {awards.items.map((award, i) => (
          <div key={i} className="award-item">
            <div>
              <p className="award-title">{award.title}</p>
              <p className="award-desc">{award.description}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
              <span className="award-year">{award.year}</span>
              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="award-link"
                >
                  View →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
