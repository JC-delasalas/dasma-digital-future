
import React from 'react';
import { Search } from 'lucide-react';

interface DirectoryHeroProps {
  isSeniorMode: boolean;
}

const DirectoryHero: React.FC<DirectoryHeroProps> = ({ isSeniorMode }) => {
  return (
    <section className="bg-gov-green py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-white font-bold mb-6 ${isSeniorMode ? 'text-5xl' : 'text-4xl'}`}>
            City Directory
          </h1>
          <p className={`text-gov-neutrals-gray100 mb-8 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Find contact information for city departments, officials, barangays, and emergency services.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex">
              <input
                type="text"
                placeholder="Search departments, officials, or contact information..."
                className={`flex-1 border border-gov-neutrals-gray300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gov-green ${isSeniorMode ? 'text-xl py-3' : ''}`}
              />
              <button className="bg-gov-green text-white px-4 rounded-r-lg hover:bg-gov-green-700 transition-colors">
                <Search size={isSeniorMode ? 24 : 20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectoryHero;
