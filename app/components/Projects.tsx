'use client';

import { projects } from '../theme';
import Image from 'next/image';
import SplitText from './ui/SplitText';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">
        <SplitText
          text={projects.title}
          delay={35}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          style={{ fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit', color: 'inherit' }}
        />
      </h2>

      <div>
        {projects.items.map((project, i) => (
          <div key={i} className={`project-card${i === 0 ? ' first-card' : ''}`}>
            {/* Left: info */}
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Featured Project
              </p>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>

              {project.features && (
                <div className="project-features-list">
                  {project.features.map((feat, j) => (
                    <div key={j} className="project-feature-item">
                      <span className="project-feature-title">{feat.title}</span>
                      <span className="project-feature-desc">{feat.description}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="project-tech-tags" style={{ marginTop: '1.5rem' }}>
                {project.technologies.map((t, k) => (
                  <span key={k} className="project-tech-tag">{t}</span>
                ))}
              </div>

              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-btn"
                >
                  Visit Site &nbsp;→
                </a>
              )}
            </div>

            {/* Right: image */}
            <div className="project-image-wrapper">
              <Image
                src="/images/project_image.jpg"
                alt={project.name}
                fill
                className="object-cover"
                style={{ opacity: 0.9 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
