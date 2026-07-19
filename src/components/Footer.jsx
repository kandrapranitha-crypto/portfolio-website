import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Column 1: Socials */}
      <div className="footer-socials-section">
        {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
          Github
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link">
          X
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
          LinkedIn
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
          Youtube
        </a> */}
      </div>

      {/* Column 2: Spacer */}
      <div className="footer-spacer-section">
        <p className='quote'>Storytelling is not something we do. Storytelling is who we are. ― Carmine Gallo</p>
      </div>

      {/* Column 3: Location / Copyright */}
      <div className="footer-location-section">
      </div>
    </footer>
  );
}
