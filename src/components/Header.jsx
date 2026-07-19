import { useState } from 'react';
import './Header.css';

export default function Header({ currentView, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNav = (e, target) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <>
      <header className="site-header">
        {/* Column 1: Logo & Title */}
        <div className="header-logo-section">
          <a
            href="/"
            className="header-logo"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              onNavigate('highlights');
            }}
          >
            <span className="logo-name">Pranitha Reddy</span>
            <span className="logo-title"> — Storytelling & Community</span>
          </a>
        </div>

        {/* Column 2: Navigation Links (Desktop) */}
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

        {/* Column 3: Language and CTA (Desktop) */}
        <div className="header-actions-section">
          <a
            href="mailto:kandrapranitha@gmail.com"
            className="contact-btn"
          >
            Get In Touch
          </a>
        </div>

        {/* Hamburger Toggle (Mobile Only) */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="bar line-1"></span>
          <span className="bar line-2"></span>
          <span className="bar line-3"></span>
        </button>
      </header>

      {/* Sidebar Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div className="sidebar-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Collapsible Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-sidebar-nav">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a
                href="#highlights"
                className={`mobile-nav-link ${currentView === 'highlights' ? 'active' : ''}`}
                onClick={(e) => handleMobileNav(e, 'highlights')}
              >
                Highlights
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#about"
                className={`mobile-nav-link ${currentView === 'about' ? 'active' : ''}`}
                onClick={(e) => handleMobileNav(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="mobile-nav-item">
              <a
                href="#projects"
                className={`mobile-nav-link ${currentView === 'projects' || currentView === 'blog' ? 'active' : ''}`}
                onClick={(e) => handleMobileNav(e, 'projects')}
              >
                More Projects
              </a>
            </li>
          </ul>
        </nav>
        <div className="mobile-sidebar-actions">
          <a
            href="mailto:kandrapranitha@gmail.com"
            className="contact-btn mobile-contact-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
}
