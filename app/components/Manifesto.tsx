'use client';

export default function Manifesto() {
    return (
        <section
            id="about"
            style={{ borderTop: '1px solid #222', padding: '0 2rem' }}
        >
            <div className="manifesto-section" style={{ padding: '8rem 0' }}>
                <div className="manifesto-inner">
                    {/* Label col */}
                    <div className="manifesto-label-col">
                        <span className="section-label">Who I am</span>
                    </div>

                    {/* Text col */}
                    <div>
                        <p className="manifesto-text">
                            Software is more than code.
                            It&apos;s decisions made under pressure,
                            systems that scale, and products that genuinely help people.
                        </p>
                        <p className="manifesto-text" style={{ marginTop: '1.5rem' }}>
                            I build full-stack applications that are fast, clean, and built
                            for the long run — from vendor dashboards to mobile-first experiences.
                            Three years in, I still care about the craft.
                        </p>
                        <a
                            href="https://github.com/syedzabii"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="manifesto-read-link"
                        >
                            See my work &nbsp;→
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
