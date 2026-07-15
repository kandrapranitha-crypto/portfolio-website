import './Header.css';

export default function Header({ currentView, onNavigate, currentLang, setCurrentLang }) {
  return (
    <header className="site-header">
      {/* Column 1: Logo & Title */}
      <div className="header-logo-section">
        <a
          href="/"
          className="header-logo"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('highlights');
          }}
        >
          <span className="logo-name">Pranitha Reddy</span>
          <span className="logo-title"> — Storytelling & Community</span>
        </a>
      </div>

      {/* Column 2: Navigation Links */}
      <nav className="header-nav-section">
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="#highlights"
              className={`nav-link ${currentView === 'highlights' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('highlights');
              }}
            >
              Highlights
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className={`nav-link ${currentView === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className={`nav-link ${currentView === 'projects' || currentView === 'blog' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('projects');
              }}
            >
              More Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* Column 3: Language and CTA */}
      <div className="header-actions-section">
        <a
          href="#contact"
          className="contact-btn"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('about'); // Links to about section/contact info
          }}
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
}
