
import React from 'react';

interface ProgramsHeroProps {
  isSeniorMode: boolean;
}

const ProgramsHero: React.FC<ProgramsHeroProps> = ({ isSeniorMode }) => {
  return (
    <section className="bg-gradient-to-br from-gov-green via-gov-green-700 to-gov-green-800 py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <h1 className={`text-white font-bold leading-tight ${
              isSeniorMode ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'
            }`}>
              Programs & Projects
            </h1>
            <div className="w-24 h-1 bg-gov-yellow mx-auto rounded-full"></div>
          </div>
          
          <p className={`text-gov-neutrals-gray100 max-w-3xl mx-auto leading-relaxed ${
            isSeniorMode ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
          }`}>
            Discover our ongoing modernization initiatives, community programs, and development projects 
            that are transforming Dasmariñas into a smart, sustainable city.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className={`font-bold text-white mb-2 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                Smart City Initiative
              </div>
              <p className={`text-gov-neutrals-gray100 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                Digital transformation for better governance
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className={`font-bold text-white mb-2 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                Infrastructure Projects
              </div>
              <p className={`text-gov-neutrals-gray100 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                Building sustainable communities
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className={`font-bold text-white mb-2 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                Community Programs
              </div>
              <p className={`text-gov-neutrals-gray100 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                Empowering citizens through engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
