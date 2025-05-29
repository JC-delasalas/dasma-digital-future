
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Search, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  isSeniorMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isSeniorMode }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/51e7ae2b-526b-4d7d-92eb-b76065a51ee8.png" 
          alt="Dasmariñas City Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gov-green/90 via-gov-green/80 to-gov-green/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Hero Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className={`font-bold leading-tight ${
                isSeniorMode 
                  ? 'text-4xl md:text-5xl lg:text-6xl' 
                  : 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
              }`}>
                Welcome to the
                <span className="block text-gov-yellow">City of Dasmariñas</span>
              </h1>
              <p className={`max-w-2xl leading-relaxed ${
                isSeniorMode ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
              }`}>
                Your digital gateway to modern government services. Access city services, 
                explore transparent governance, and engage with your community—all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size={isSeniorMode ? "lg" : "default"}
                className={`bg-gov-yellow hover:bg-gov-yellow-600 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isSeniorMode ? 'text-xl py-4 px-8' : 'text-lg py-3 px-6'
                }`}
              >
                <Calendar className="mr-2 h-5 w-5 text-black" />
                Access Services
                <ArrowRight className="ml-2 h-4 w-4 text-black" />
              </Button>
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  size={isSeniorMode ? "lg" : "default"}
                  className={`border-2 border-white text-white hover:bg-white hover:text-gov-green font-semibold transition-all duration-300 ${
                    isSeniorMode ? 'text-xl py-4 px-8' : 'text-lg py-3 px-6'
                  }`}
                >
                  <User className="mr-2 h-5 w-5" />
                  Citizen Dashboard
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className={`font-bold ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>24/7</div>
                <div className={`text-gov-neutrals-gray100 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Online Services</div>
              </div>
              <div className="text-center">
                <div className={`font-bold ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>500K+</div>
                <div className={`text-gov-neutrals-gray100 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Citizens Served</div>
              </div>
              <div className="text-center">
                <div className={`font-bold ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>99.9%</div>
                <div className={`text-gov-neutrals-gray100 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Services Card */}
          <div className="lg:ml-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20">
              <div className="space-y-6">
                <div>
                  <h2 className={`font-bold text-black mb-2 ${
                    isSeniorMode ? 'text-2xl' : 'text-xl'
                  }`}>
                    Quick Services
                  </h2>
                  <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                    Search for services, forms, and information
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services, forms, information..."
                    className={`w-full border-2 border-gov-neutrals-gray200 rounded-xl px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-gov-green focus:border-transparent transition-all text-black ${
                      isSeniorMode ? 'text-lg py-4' : 'text-base py-3'
                    }`}
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gov-green text-white p-2 rounded-lg hover:bg-gov-green-700 transition-colors">
                    <Search size={isSeniorMode ? 20 : 18} />
                  </button>
                </div>

                {/* Popular Services */}
                <div>
                  <p className={`text-gov-neutrals-gray600 mb-3 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>
                    Popular services:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Business Permit',
                      'Birth Certificate',
                      'Property Tax',
                      'City Events',
                      'Barangay Clearance',
                      'Job Opportunities'
                    ].map((service, index) => (
                      <button
                        key={index}
                        className="bg-gov-neutrals-gray50 hover:bg-gov-green-50 hover:text-gov-green text-black px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md text-left"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-semibold text-red-800 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                        Emergency Hotline
                      </h3>
                      <p className={`text-red-600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                        24/7 Emergency Response
                      </p>
                    </div>
                    <div className={`font-bold text-red-800 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                      911
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
