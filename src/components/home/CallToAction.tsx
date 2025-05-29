
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  isSeniorMode: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ isSeniorMode }) => {
  return (
    <section className="py-16 bg-gov-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className={`font-bold mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
            Ready to Experience Digital Dasmariñas?
          </h2>
          <p className={`max-w-2xl mx-auto mb-8 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Join thousands of citizens who are already accessing government services online.
            Create your secure citizen account in just a few minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button 
                variant="default" 
                size={isSeniorMode ? "lg" : "default"}
                className="bg-gov-yellow hover:bg-gov-yellow-600 text-black font-semibold sm:mr-4"
              >
                Create Citizen Account
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size={isSeniorMode ? "lg" : "default"}
                className="bg-transparent border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300"
              >
                Explore Services
              </Button>
            </Link>
          </div>
          <div className={`mt-8 flex flex-col sm:flex-row justify-center items-center gap-2 ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
            <span>Need assistance?</span>
            <a href="tel:+6346123456" className="flex items-center text-gov-yellow hover:text-gov-yellow-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call our Hotline: +63 (46) 123-456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
