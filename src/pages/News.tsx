
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import NewsHero from '../components/news/NewsHero';
import NewsGrid from '../components/news/NewsGrid';
import NewsTabs from '../components/news/NewsTabs';

const News = () => {
  const [isSeniorMode, setIsSeniorMode] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleSeniorMode = () => {
    setIsSeniorMode(!isSeniorMode);
    document.body.classList.toggle('senior-mode', !isSeniorMode);
  };

  const toggleSpeech = () => {
    setIsSpeechActive(!isSpeechActive);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={isSeniorMode ? 'senior-mode' : ''}>
      <Header 
        isSeniorMode={isSeniorMode} 
        toggleSeniorMode={toggleSeniorMode}
        isSpeechActive={isSpeechActive}
        toggleSpeech={toggleSpeech}
        toggleMobileMenu={toggleMobileMenu} 
      />
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        isSeniorMode={isSeniorMode} 
      />
      
      <main>
        <NewsHero isSeniorMode={isSeniorMode} />
        <div className="container mx-auto px-4 py-8">
          <NewsTabs 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory}
            isSeniorMode={isSeniorMode}
          />
          <NewsGrid 
            activeCategory={activeCategory}
            isSeniorMode={isSeniorMode}
          />
        </div>
      </main>
      
      <Footer isSeniorMode={isSeniorMode} />
    </div>
  );
};

export default News;
