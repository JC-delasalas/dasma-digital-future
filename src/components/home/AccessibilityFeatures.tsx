import React from 'react';
import { Button } from '@/components/ui/button';
import { Volume, Users, Bot } from 'lucide-react';

interface AccessibilityFeaturesProps {
  isSeniorMode: boolean;
}

const AccessibilityFeatures: React.FC<AccessibilityFeaturesProps> = ({ isSeniorMode }) => {
  return (
    <section className={`py-16 bg-gov-neutrals-gray50 ${isSeniorMode ? 'spacing' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className={`text-gov-yellow-700 font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
            Inclusive by Design
          </span>
          <h2 className={`font-bold text-gov-green mt-2 mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
            Accessibility Features
          </h2>
          <p className={`text-gov-neutrals-gray600 max-w-2xl mx-auto ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
            Our platform is built to be accessible for all citizens, including seniors and persons with disabilities. 
            We've implemented features to make digital governance truly inclusive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature-card">
            <div className="bg-gov-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-gov-yellow-700" />
            </div>
            <h3 className={`font-semibold text-gov-neutrals-gray900 mb-3 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
              Senior Mode
            </h3>
            <p className={`text-gov-neutrals-gray600 mb-4 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              Activate larger text, simplified navigation, and enhanced contrast with a single click for easier reading and interaction.
            </p>
            <Button variant="outline" size={isSeniorMode ? "lg" : "default"} className="border-gov-green text-gov-green hover:bg-gov-green-50">
              Learn More
            </Button>
          </div>
          
          <div className="feature-card">
            <div className="bg-gov-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Volume className="h-6 w-6 text-gov-yellow-700" />
            </div>
            <h3 className={`font-semibold text-gov-neutrals-gray900 mb-3 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
              Text-to-Speech
            </h3>
            <p className={`text-gov-neutrals-gray600 mb-4 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              Simply select any text on the page and let our text-to-speech technology read it aloud in either English or Filipino.
            </p>
            <Button variant="outline" size={isSeniorMode ? "lg" : "default"} className="border-gov-green text-gov-green hover:bg-gov-green-50">
              Learn More
            </Button>
          </div>
          
          <div className="feature-card">
            <div className="bg-gov-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-gov-yellow-700" />
            </div>
            <h3 className={`font-semibold text-gov-neutrals-gray900 mb-3 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
              AI Assistance
            </h3>
            <p className={`text-gov-neutrals-gray600 mb-4 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              Get help navigating the site through our AI assistant that provides step-by-step guidance for all services.
            </p>
            <Button variant="outline" size={isSeniorMode ? "lg" : "default"} className="border-gov-green text-gov-green hover:bg-gov-green-50">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="default" size={isSeniorMode ? "lg" : "default"} className="bg-gov-yellow hover:bg-gov-yellow-600 text-gov-neutrals-gray900">
            Explore All Accessibility Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityFeatures;
