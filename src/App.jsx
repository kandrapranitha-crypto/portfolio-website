import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardDeck from './components/CardDeck';
import About from './components/About';
import Projects from './components/Projects';
import BlogViewer from './components/BlogViewer';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('highlights');
  const [activeBlog, setActiveBlog] = useState(null);
  const [isHighlightsLeaving, setIsHighlightsLeaving] = useState(false);

  // Transition navigation handler
  const navigateTo = (target) => {
    if (currentView === target) return;

    if (currentView === 'highlights') {
      // Trigger exit transition first
      setIsHighlightsLeaving(true);
      setTimeout(() => {
        setIsHighlightsLeaving(false);
        window.location.hash = target === 'highlights' ? '' : `#${target}`;
      }, 450); // Matches card deck fan transformation time
    } else {
      window.location.hash = target === 'highlights' ? '' : `#${target}`;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentView('about');
        setActiveBlog(null);
      } else if (hash === '#projects') {
        setCurrentView('projects');
        setActiveBlog(null);
      } else if (hash.startsWith('#blog-')) {
        const blogId = hash.replace('#blog-', '');
        setCurrentView('blog');
        setActiveBlog(blogId);
      } else {
        setCurrentView('highlights');
        setActiveBlog(null);
      }
    };

    // Initialize on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app-container">
      {/* Background Grid Overlay System */}
      <div className="grid-overlay">
        <div className="grid-dots" />
        <div className="grid-line-h top" />
        <div className="grid-line-h middle" />
        <div className="grid-line-h bottom" />
        <div className="grid-line-v v1" />
        <div className="grid-line-v v2" />
        <div className="grid-line-v v3" />
      </div>

      {/* Navigation Header */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {/* Interactive Main Area */}
      <main className="main-content">
        {currentView === 'highlights' ? (
          <CardDeck isLeaving={isHighlightsLeaving} />
        ) : currentView === 'about' ? (
          <About />
        ) : currentView === 'blog' ? (
          <BlogViewer activeBlog={activeBlog} />
        ) : (
          <Projects />
        )}
      </main>

      {/* Location/Social Footer */}
      <Footer />
    </div>
  );
}

export default App;
