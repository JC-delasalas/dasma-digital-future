
import React from 'react';
import { MessageSquare, Phone, MessageCircle } from 'lucide-react';

interface SupportHeroProps {
  isSeniorMode: boolean;
}

const SupportHero: React.FC<SupportHeroProps> = ({ isSeniorMode }) => {
  return (
    <section className="bg-gov-green py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-white font-bold mb-6 ${isSeniorMode ? 'text-5xl' : 'text-4xl'}`}>
            Support & Feedback
          </h1>
          <p className={`text-gov-neutrals-gray100 mb-12 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            We're here to help! Get assistance with city services, report issues, or share your feedback with us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <MessageSquare size={32} className="mx-auto mb-4 text-gov-yellow" />
              <h3 className={`font-bold mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Live Chat</h3>
              <p className={`${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                Chat with our support team for immediate assistance
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Phone size={32} className="mx-auto mb-4 text-gov-yellow" />
              <h3 className={`font-bold mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Call Center</h3>
              <p className={`${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                Call us at (046) 416-HELP for phone support
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <MessageCircle size={32} className="mx-auto mb-4 text-gov-yellow" />
              <h3 className={`font-bold mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Report Issues</h3>
              <p className={`${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                Submit anonymous reports and feedback forms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
