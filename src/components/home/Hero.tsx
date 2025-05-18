
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  isSeniorMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isSeniorMode }) => {
  return (
    <section className={`bg-gov-green py-16 md:py-24 ${isSeniorMode ? 'spacing' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${isSeniorMode ? 'text-5xl md:text-6xl' : ''}`}>
              Welcome to the City of Dasmariñas
            </h1>
            <p className={`text-gov-neutrals-gray100 mb-8 max-w-lg ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
              Your digital gateway to government services and information. Access city services, explore transparent governance, and engage with your community—all in one place.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isSeniorMode ? 'space-y-4 sm:space-y-0' : ''}`}>
              <Button
                variant="default"
                size={isSeniorMode ? "lg" : "default"}
                className="bg-gov-yellow hover:bg-gov-yellow-600 text-gov-neutrals-gray900 sm:mr-4"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Access Services
              </Button>
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  size={isSeniorMode ? "lg" : "default"}
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <User className="mr-2 h-5 w-5" />
                  Citizen Dashboard
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className={`font-semibold mb-4 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                Quick Search
              </h2>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Search for services, forms, information..."
                  className={`flex-1 border border-gov-neutrals-gray300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gov-green ${isSeniorMode ? 'text-xl py-3' : ''}`}
                />
                <button className="bg-gov-green text-white px-4 rounded-r-lg hover:bg-gov-green-700 transition-colors">
                  <Search size={isSeniorMode ? 24 : 20} />
                </button>
              </div>
              <div>
                <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gov-neutrals-gray100 text-gov-neutrals-gray700 px-3 py-1 rounded-full text-sm hover:bg-gov-green-50 hover:text-gov-green cursor-pointer">Business Permit</span>
                  <span className="bg-gov-neutrals-gray100 text-gov-neutrals-gray700 px-3 py-1 rounded-full text-sm hover:bg-gov-green-50 hover:text-gov-green cursor-pointer">Birth Certificate</span>
                  <span className="bg-gov-neutrals-gray100 text-gov-neutrals-gray700 px-3 py-1 rounded-full text-sm hover:bg-gov-green-50 hover:text-gov-green cursor-pointer">Property Tax</span>
                  <span className="bg-gov-neutrals-gray100 text-gov-neutrals-gray700 px-3 py-1 rounded-full text-sm hover:bg-gov-green-50 hover:text-gov-green cursor-pointer">City Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
