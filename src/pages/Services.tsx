
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ServiceCategoryList from '../components/services/ServiceCategoryList';
import { serviceCategories } from '../data/serviceCategories';

const Services: React.FC = () => {
  const [isSeniorMode, setIsSeniorMode] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const toggleSeniorMode = () => {
    setIsSeniorMode(!isSeniorMode);
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
      
      <main className="min-h-screen bg-gov-neutrals-gray50 pb-16">
        <div className="bg-gov-green py-12">
          <div className="container mx-auto px-4">
            <h1 className={`text-white font-bold ${isSeniorMode ? 'text-5xl' : 'text-4xl'} mb-4`}>
              City Government Services
            </h1>
            <p className={`text-gov-neutrals-gray100 max-w-3xl ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
              Access all government services, track your applications, and book appointments. We offer both online and in-person services to meet your needs.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className={`font-semibold ${isSeniorMode ? 'text-2xl' : 'text-xl'} mb-6`}>Find Services by Category</h2>
            
            <Tabs defaultValue={activeCategory} onValueChange={(value) => setActiveCategory(value)} className="w-full">
              <TabsList className="bg-gov-neutrals-gray100 p-1 mb-6 flex flex-wrap overflow-x-auto">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className={`${isSeniorMode ? 'text-lg py-3 px-5' : ''} whitespace-nowrap`}
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {serviceCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <ServiceCategoryList 
                    category={category} 
                    isSeniorMode={isSeniorMode} 
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className={`font-semibold ${isSeniorMode ? 'text-2xl' : 'text-xl'} mb-4`}>Need Assistance?</h2>
              <p className="text-gov-neutrals-gray600 mb-4">
                Our support team is available to help you navigate services or answer any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn-primary inline-flex items-center justify-center">
                  Chat with Support
                </a>
                <a href="#" className="btn-outline inline-flex items-center justify-center">
                  Call Hotline
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className={`font-semibold ${isSeniorMode ? 'text-2xl' : 'text-xl'} mb-4`}>Track Your Applications</h2>
              <p className="text-gov-neutrals-gray600 mb-4">
                Enter your reference number to check the status of your application or appointment.
              </p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter reference number" 
                  className="flex-1 border border-gov-neutrals-gray300 rounded-lg px-4 py-2"
                />
                <button className="btn-primary">Track</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer isSeniorMode={isSeniorMode} />
    </div>
  );
};

export default Services;
