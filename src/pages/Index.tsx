
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import TransparencySection from '../components/home/TransparencySection';
import CitizenDashboardPreview from '../components/home/CitizenDashboardPreview';
import AccessibilityFeatures from '../components/home/AccessibilityFeatures';
import CallToAction from '../components/home/CallToAction';

const Index = () => {
  const [isSeniorMode, setIsSeniorMode] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSeniorMode = () => {
    const newSeniorMode = !isSeniorMode;
    setIsSeniorMode(newSeniorMode);
    document.body.classList.toggle('senior-mode', newSeniorMode);
  };

  const toggleSpeech = () => {
    setIsSpeechActive(!isSpeechActive);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isSeniorMode ? 'senior-mode' : ''}`}>
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
        toggleSeniorMode={toggleSeniorMode}
        isSpeechActive={isSpeechActive}
        toggleSpeech={toggleSpeech}
      />
      
      <main className="relative">
        <Hero isSeniorMode={isSeniorMode} />
        
        <div className="space-y-0">
          <ServiceHighlights isSeniorMode={isSeniorMode} />
          <TransparencySection isSeniorMode={isSeniorMode} />
          <CitizenDashboardPreview isSeniorMode={isSeniorMode} />
          <AccessibilityFeatures isSeniorMode={isSeniorMode} />
          <CallToAction isSeniorMode={isSeniorMode} />
        </div>
      </main>
      
      <Footer isSeniorMode={isSeniorMode} />
    </div>
  );
};

export default Index;
