
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSeniorMode = () => {
    setIsSeniorMode(!isSeniorMode);
    document.body.classList.toggle('senior-mode', !isSeniorMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={isSeniorMode ? 'senior-mode' : ''}>
      <Header 
        isSeniorMode={isSeniorMode} 
        toggleSeniorMode={toggleSeniorMode} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        isSeniorMode={isSeniorMode} 
      />
      
      <main>
        <Hero isSeniorMode={isSeniorMode} />
        <ServiceHighlights isSeniorMode={isSeniorMode} />
        <TransparencySection isSeniorMode={isSeniorMode} />
        <CitizenDashboardPreview isSeniorMode={isSeniorMode} />
        <AccessibilityFeatures isSeniorMode={isSeniorMode} />
        <CallToAction isSeniorMode={isSeniorMode} />
      </main>
      
      <Footer isSeniorMode={isSeniorMode} />
    </div>
  );
};

export default Index;
