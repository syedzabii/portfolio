'use client';

import { skills } from '../theme';
import SplitText from './ui/SplitText';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-heading">
        <SplitText
          text={skills.title}
          delay={35}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          style={{ fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit', color: 'inherit' }}
        />
      </h2>

      <div className="skills-grid">
        {skills.categories.map((category, i) => (
          <div key={i}>
            <p className="skill-category-label">{category.name}</p>
            <ul className="skill-items">
              {category.items.map((item, j) => (
                <li key={j} className="skill-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
