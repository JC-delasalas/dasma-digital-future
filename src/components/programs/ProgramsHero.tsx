
import React from 'react';

interface ProgramsHeroProps {
  isSeniorMode: boolean;
}

const ProgramsHero: React.FC<ProgramsHeroProps> = ({ isSeniorMode }) => {
  return (
    <section className="bg-gov-green py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-white font-bold mb-6 ${isSeniorMode ? 'text-5xl' : 'text-4xl'}`}>
            Programs & Projects
          </h1>
          <p className={`text-gov-neutrals-gray100 mb-8 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Discover our ongoing modernization initiatives, community programs, and development projects 
            that are transforming Dasmariñas into a smart, sustainable city.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
