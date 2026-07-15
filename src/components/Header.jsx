import React from 'react';
import './Header.css';

export default function Header({ currentLang, setCurrentLang }) {
  return (
    <header className="site-header">
      {/* Column 1: Logo & Title */}
      <div className="header-logo-section">
        <a href="/" className="header-logo">
          <span className="logo-name">Marius Ballot</span>
          <span className="logo-title"> — FullStack Tinkerer</span>
        </a>
      </div>

      {/* Column 2: Navigation Links */}
      <nav className="header-nav-section">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#highlights" className="nav-link">
              Highlights
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              More Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* Column 3: Language and CTA */}
      <div className="header-actions-section">
        <div className="lang-switcher">
          <button 
            className={`lang-btn ${currentLang === 'EN' ? 'active' : ''}`}
            onClick={() => setCurrentLang('EN')}
          >
            EN
          </button>
          <span className="lang-separator">-</span>
          <button 
            className={`lang-btn ${currentLang === 'FR' ? 'active' : ''}`}
            onClick={() => setCurrentLang('FR')}
          >
            FR
          </button>
        </div>
        <a href="#contact" className="contact-btn">
          Get In Touch
        </a>
      </div>
    </header>
  );
}
