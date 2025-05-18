
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TransparencySectionProps {
  isSeniorMode: boolean;
}

const TransparencySection: React.FC<TransparencySectionProps> = ({ isSeniorMode }) => {
  return (
    <section className="bg-gov-neutrals-gray50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h2 className={`font-bold text-gov-green mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
              Transparent Governance
            </h2>
            <p className={`text-gov-neutrals-gray700 mb-6 ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
              We believe in complete transparency. Our "Follow the Money" feature lets you track how your tax money is being used, from fund allocation to project completion.
            </p>
            
            <div className={`bg-white rounded-lg p-6 mb-6 shadow-sm ${isSeniorMode ? 'p-8' : ''}`}>
              <h3 className={`font-semibold text-gov-neutrals-gray900 mb-3 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>Current Budget Allocation</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>Education</span>
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>35%</span>
                  </div>
                  <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5">
                    <div className="bg-gov-green h-2.5 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>Infrastructure</span>
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>25%</span>
                  </div>
                  <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5">
                    <div className="bg-gov-green h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>Healthcare</span>
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>20%</span>
                  </div>
                  <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5">
                    <div className="bg-gov-green h-2.5 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>Social Services</span>
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>15%</span>
                  </div>
                  <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5">
                    <div className="bg-gov-green h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>Administrative</span>
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>5%</span>
                  </div>
                  <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5">
                    <div className="bg-gov-green h-2.5 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/transparency">
              <Button
                variant="default"
                size={isSeniorMode ? "lg" : "default"}
                className="bg-gov-green hover:bg-gov-green-700"
              >
                Explore Transparency Hub
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <h3 className={`font-semibold text-gov-neutrals-gray900 mb-4 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                  Recent Project Updates
                </h3>
                
                <div className="space-y-6">
                  <div className="border-b border-gov-neutrals-gray200 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-medium text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
                        Dasmariñas Public Hospital Expansion
                      </h4>
                      <span className="badge badge-primary">In Progress</span>
                    </div>
                    <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>
                      Construction is 75% complete. New emergency wing to open next month.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className={`text-gov-neutrals-gray500 ${isSeniorMode ? 'text-base' : 'text-xs'}`}>
                        Budget: ₱120M • Spent: ₱90M
                      </div>
                      <Link to="/transparency/projects/hospital" className={`text-gov-green hover:text-gov-green-700 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-b border-gov-neutrals-gray200 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-medium text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
                        City-wide Road Rehabilitation
                      </h4>
                      <span className="badge badge-secondary">Completed</span>
                    </div>
                    <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>
                      27 kilometers of roads repaved and improved with proper drainage.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className={`text-gov-neutrals-gray500 ${isSeniorMode ? 'text-base' : 'text-xs'}`}>
                        Budget: ₱85M • Final Cost: ₱82.5M
                      </div>
                      <Link to="/transparency/projects/roads" className={`text-gov-green hover:text-gov-green-700 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-medium text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
                        Smart City Traffic Management
                      </h4>
                      <span className="badge badge-primary">In Progress</span>
                    </div>
                    <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>
                      Installing IoT traffic sensors and adaptive signal systems at 15 major intersections.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className={`text-gov-neutrals-gray500 ${isSeniorMode ? 'text-base' : 'text-xs'}`}>
                        Budget: ₱45M • Spent: ₱22M
                      </div>
                      <Link to="/transparency/projects/traffic" className={`text-gov-green hover:text-gov-green-700 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
