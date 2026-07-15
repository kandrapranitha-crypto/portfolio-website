import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CardDeck from './components/CardDeck';
import Footer from './components/Footer';

function App() {
  const [currentLang, setCurrentLang] = useState('EN');

  return (
    <div className="app-container">
      {/* Background Grid Overlay System */}
      <div className="grid-overlay">
        <div className="grid-dots" />
        <div className="grid-line-h top" />
        <div className="grid-line-h bottom" />
        <div className="grid-line-v v1" />
        <div className="grid-line-v v2" />
        <div className="grid-line-v v3" />
      </div>

      {/* Navigation Header */}
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* Interactive Main Area */}
      <main className="main-content">
        <CardDeck />
      </main>

      {/* Location/Social Footer */}
      <Footer />
    </div>
  );
}

export default App;
