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
        {projects.items.map((project: any, i: number) => (
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
                  {project.features.map((feat: any, j: number) => (
                    <div key={j} className="project-feature-item">
                      <span className="project-feature-title">{feat.title}</span>
                      <span className="project-feature-desc">{feat.description}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="project-tech-tags" style={{ marginTop: '1.5rem' }}>
                {project.technologies.map((t: string, k: number) => (
                  <span key={k} className="project-tech-tag">{t}</span>
                ))}
              </div>

              {/* Store buttons row */}
              {project.storeLinks && (
                <div style={{ marginTop: '2rem' }}>
                  <div className="project-store-btns" style={{ marginTop: 0 }}>
                    {project.storeLinks.playStore && (
                      <a
                        href={project.storeLinks.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-store-btn"
                      >
                        <Image
                          src={`/${project.storeLinks.playStoreIcon || 'images/googlplay.jpg'}`}
                          alt="Google Play"
                          width={20}
                          height={20}
                        />
                        <span>Get on Play Store</span>
                      </a>
                    )}
                    {project.storeLinks.appStore && (
                      <a
                        href={project.storeLinks.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-store-btn secondary"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                        <span>App Store</span>
                      </a>
                    )}
                  </div>
                  <p className="project-store-caption">It&apos;s free. It takes 2 minutes. Your parents will thank you.</p>
                </div>
              )}

              {/* Visit Site link (only show if no store links) */}
              {project.links?.live && !project.storeLinks && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-btn"
                >
                  Visit Site&nbsp;→
                </a>
              )}
            </div>

            {/* Right: image */}
            <div className="project-image-wrapper">
              <div className="project-image-inner">
                <Image
                  src={`/${project.image}`}
                  alt={project.name}
                  fill
                  className="project-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
