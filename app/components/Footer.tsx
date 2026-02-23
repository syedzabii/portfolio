'use client';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        <span className="footer-name">© 2025 Syed Ismail Zabiulla</span>

        <div className="footer-links">
          <a
            href="mailto:syedismailgp@gmail.com"
            className="footer-link"
          >
            syedismailgp@gmail.com
          </a>
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
    </footer>
  );
}
