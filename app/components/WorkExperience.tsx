'use client';

import { workExperience } from '../theme';
import SplitText from './ui/SplitText';

export default function WorkExperience() {
  return (
    <section id="work" className="experience-section">
      <h2 className="section-heading">
        <SplitText
          text={workExperience.title}
          delay={35}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          style={{ fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit', color: 'inherit' }}
        />
      </h2>

      <div className="exp-grid">
        {/* Label col */}
        <div>
          <span className="section-label">Where I&apos;ve worked</span>
        </div>

        {/* Experience list */}
        <div>
          {workExperience.positions.map((pos, i) => (
            <div key={i} className="exp-item">
              <div>
                <p className="exp-role">{pos.role}</p>
                <p className="exp-company">{pos.company} · {pos.type}</p>
                <ul className="exp-bullets">
                  {pos.responsibilities.map((r, j) => (
                    <li key={j} className="exp-bullet">{r}</li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {pos.technologies.map((t, k) => (
                    <span key={k} className="exp-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="exp-duration">{pos.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
