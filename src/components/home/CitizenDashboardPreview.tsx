
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, User, Bell, Info } from 'lucide-react';

interface CitizenDashboardPreviewProps {
  isSeniorMode: boolean;
}

const CitizenDashboardPreview: React.FC<CitizenDashboardPreviewProps> = ({ isSeniorMode }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`font-bold text-gov-green mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
            Citizen Dashboard
          </h2>
          <p className={`text-gov-neutrals-gray600 max-w-xl mx-auto ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
            Manage your city services, track applications, and receive personalized updates through your secure citizen portal.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gov-neutrals-gray200">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/4 bg-gov-green-50 p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gov-green rounded-full flex items-center justify-center text-white">
                  <User size={24} />
                </div>
                <div>
                  <h3 className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>Juan Dela Cruz</h3>
                  <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>Verified Citizen</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm">
                  <User size={isSeniorMode ? 24 : 20} className="text-gov-green" />
                  <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Profile</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/70 transition-colors">
                  <FileText size={isSeniorMode ? 24 : 20} className="text-gov-green" />
                  <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Documents</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/70 transition-colors">
                  <Bell size={isSeniorMode ? 24 : 20} className="text-gov-green" />
                  <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Notifications</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/70 transition-colors">
                  <Info size={isSeniorMode ? 24 : 20} className="text-gov-green" />
                  <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Help</span>
                </a>
              </nav>
            </div>
            
            <div className="lg:w-3/4 p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gov-neutrals-gray50 p-6 rounded-lg border border-gov-neutrals-gray200">
                  <h4 className={`font-semibold text-gov-neutrals-gray900 mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                    Recent Applications
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <div>
                        <p className={`font-medium ${isSeniorMode ? 'text-lg' : 'text-base'}`}>Business Permit Renewal</p>
                        <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Submitted: May 15, 2025</p>
                      </div>
                      <span className="badge badge-primary">In Review</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <p className={`font-medium ${isSeniorMode ? 'text-lg' : 'text-base'}`}>Building Permit</p>
                        <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Submitted: Apr 30, 2025</p>
                      </div>
                      <span className="badge badge-secondary">Approved</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gov-neutrals-gray50 p-6 rounded-lg border border-gov-neutrals-gray200">
                  <h4 className={`font-semibold text-gov-neutrals-gray900 mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                    Upcoming Appointments
                  </h4>
                  <ul className="space-y-4">
                    <li>
                      <p className={`font-medium ${isSeniorMode ? 'text-lg' : 'text-base'}`}>Health Department</p>
                      <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>May 22, 2025 • 10:30 AM</p>
                      <div className="flex mt-2 space-x-2">
                        <button className={`text-gov-green hover:text-gov-green-700 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Reschedule</button>
                        <button className={`text-red-500 hover:text-red-700 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Cancel</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gov-green-50 p-6 rounded-lg border border-gov-green-100 mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                    Property Tax Assessment
                  </h4>
                  <span className={`text-gov-green font-medium ${isSeniorMode ? 'text-lg' : 'text-base'}`}>Due: June 30, 2025</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>Payment Status</span>
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>₱8,500 / ₱12,750</span>
                  </div>
                  <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5">
                    <div className="bg-gov-green h-2.5 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button variant="outline" size={isSeniorMode ? "lg" : "default"} className="mr-2">
                    Payment History
                  </Button>
                  <Button variant="default" size={isSeniorMode ? "lg" : "default"} className="bg-gov-green hover:bg-gov-green-700">
                    Pay Now
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/dashboard">
                  <Button variant="default" size={isSeniorMode ? "lg" : "default"} className="bg-gov-yellow hover:bg-gov-yellow-600 text-gov-neutrals-gray900">
                    Access Full Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenDashboardPreview;
