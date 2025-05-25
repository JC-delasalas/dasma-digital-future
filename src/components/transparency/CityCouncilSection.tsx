
import React from 'react';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CityCouncilSectionProps {
  isSeniorMode: boolean;
}

const CityCouncilSection: React.FC<CityCouncilSectionProps> = ({ isSeniorMode }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`font-bold text-gov-green mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
            City Council Transparency
          </h2>
          <p className={`text-gov-neutrals-gray600 max-w-2xl mx-auto ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Stay informed about city council activities, ordinances, and voting records.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gov-neutrals-gray200">
            <h3 className={`font-semibold text-gov-neutrals-gray900 mb-6 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
              Upcoming Council Meetings
            </h3>
            
            <div className="space-y-6">
              <div className="border-b border-gov-neutrals-gray200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-medium text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                    Regular City Council Session
                  </h4>
                  <span className="badge badge-primary">Live Stream Available</span>
                </div>
                <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                  <strong>Date:</strong> May 25, 2025 • <strong>Time:</strong> 10:00 AM • <strong>Location:</strong> City Hall Main Chamber
                </p>
                <div className={`mb-3 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                  <strong>Agenda:</strong>
                  <ul className="list-disc pl-5 mt-1 text-gov-neutrals-gray600">
                    <li>Budget amendment for public works projects</li>
                    <li>Review of transportation infrastructure plan</li>
                    <li>Public hearing on new community center proposal</li>
                  </ul>
                </div>
                <Button variant="outline" size="sm" className="border-gov-green text-gov-green hover:bg-gov-green-50">
                  Add to Calendar
                </Button>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-medium text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                    Special Committee Meeting: Public Safety
                  </h4>
                  <span className="badge badge-primary">Live Stream Available</span>
                </div>
                <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                  <strong>Date:</strong> May 27, 2025 • <strong>Time:</strong> 2:00 PM • <strong>Location:</strong> City Hall Conference Room 3
                </p>
                <div className={`mb-3 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                  <strong>Agenda:</strong>
                  <ul className="list-disc pl-5 mt-1 text-gov-neutrals-gray600">
                    <li>Emergency response system upgrade proposal</li>
                    <li>Quarterly public safety performance review</li>
                    <li>Discussion on community policing initiatives</li>
                  </ul>
                </div>
                <Button variant="outline" size="sm" className="border-gov-green text-gov-green hover:bg-gov-green-50">
                  Add to Calendar
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gov-neutrals-gray200">
              <h3 className={`font-semibold text-gov-neutrals-gray900 mb-4 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                Recent Ordinances
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/transparency/ordinances/123" className="block hover:bg-gov-neutrals-gray50 p-2 rounded">
                    <h4 className={`font-medium text-gov-neutrals-gray900 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                      Ordinance No. 2025-42
                    </h4>
                    <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                      Water conservation measures during dry season
                    </p>
                    <p className={`text-gov-neutrals-gray500 mt-1 ${isSeniorMode ? 'text-sm' : 'text-xs'}`}>
                      Passed: May 10, 2025
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/transparency/ordinances/122" className="block hover:bg-gov-neutrals-gray50 p-2 rounded">
                    <h4 className={`font-medium text-gov-neutrals-gray900 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                      Ordinance No. 2025-41
                    </h4>
                    <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                      Solar panel incentives for residential buildings
                    </p>
                    <p className={`text-gov-neutrals-gray500 mt-1 ${isSeniorMode ? 'text-sm' : 'text-xs'}`}>
                      Passed: May 3, 2025
                    </p>
                  </Link>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <Link to="/transparency/ordinances" className="text-gov-green hover:text-gov-green-700 font-medium">
                  View All Ordinances
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gov-neutrals-gray200">
              <h3 className={`font-semibold text-gov-neutrals-gray900 mb-4 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                City Council Documents
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/transparency/documents/meeting-minutes" className="flex items-center p-2 hover:bg-gov-neutrals-gray50 rounded">
                    <Download className="h-5 w-5 mr-2 text-gov-green" />
                    <span className={`${isSeniorMode ? 'text-base' : 'text-sm'}`}>Meeting Minutes Archive</span>
                  </Link>
                </li>
                <li>
                  <Link to="/transparency/documents/voting-records" className="flex items-center p-2 hover:bg-gov-neutrals-gray50 rounded">
                    <Download className="h-5 w-5 mr-2 text-gov-green" />
                    <span className={`${isSeniorMode ? 'text-base' : 'text-sm'}`}>Council Voting Records</span>
                  </Link>
                </li>
                <li>
                  <Link to="/transparency/documents/resolutions" className="flex items-center p-2 hover:bg-gov-neutrals-gray50 rounded">
                    <Download className="h-5 w-5 mr-2 text-gov-green" />
                    <span className={`${isSeniorMode ? 'text-base' : 'text-sm'}`}>Resolutions and Proclamations</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityCouncilSection;
