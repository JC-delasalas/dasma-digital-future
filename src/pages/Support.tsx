
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import SupportHero from '../components/support/SupportHero';
import ContactForm from '../components/support/ContactForm';
import FAQ from '../components/support/FAQ';

const Support = () => {
  const [isSeniorMode, setIsSeniorMode] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <SupportHero isSeniorMode={isSeniorMode} />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm isSeniorMode={isSeniorMode} />
            <FAQ isSeniorMode={isSeniorMode} />
          </div>
        </div>
      </main>
      
      <Footer isSeniorMode={isSeniorMode} />
    </div>
  );
};

export default Support;
