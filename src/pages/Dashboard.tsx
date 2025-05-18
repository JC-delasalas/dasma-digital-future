
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, FileText, Home, Settings, Info, User, Search, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isSeniorMode, setIsSeniorMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState('overview');

  const toggleSeniorMode = () => {
    setIsSeniorMode(!isSeniorMode);
    document.body.classList.toggle('senior-mode', !isSeniorMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={isSeniorMode ? 'senior-mode' : ''}>
      <Header 
        isSeniorMode={isSeniorMode} 
        toggleSeniorMode={toggleSeniorMode} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        isSeniorMode={isSeniorMode} 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gov-neutrals-gray200 overflow-hidden">
              <div className="bg-gov-green p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gov-green">
                    <User size={28} />
                  </div>
                  <div>
                    <h2 className={`font-semibold ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>Juan Dela Cruz</h2>
                    <p className={`${isSeniorMode ? 'text-base' : 'text-sm'}`}>Verified Citizen</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <nav className="space-y-2">
                  <button 
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg ${
                      activeSidebarItem === 'overview' 
                        ? 'bg-gov-green-50 text-gov-green' 
                        : 'hover:bg-gov-neutrals-gray50 text-gov-neutrals-gray700'
                    }`}
                    onClick={() => setActiveSidebarItem('overview')}
                  >
                    <Home size={isSeniorMode ? 24 : 20} />
                    <span className={`font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Overview</span>
                  </button>
                  
                  <button 
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg ${
                      activeSidebarItem === 'documents' 
                        ? 'bg-gov-green-50 text-gov-green' 
                        : 'hover:bg-gov-neutrals-gray50 text-gov-neutrals-gray700'
                    }`}
                    onClick={() => setActiveSidebarItem('documents')}
                  >
                    <FileText size={isSeniorMode ? 24 : 20} />
                    <span className={`font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Documents</span>
                  </button>
                  
                  <button 
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg ${
                      activeSidebarItem === 'appointments' 
                        ? 'bg-gov-green-50 text-gov-green' 
                        : 'hover:bg-gov-neutrals-gray50 text-gov-neutrals-gray700'
                    }`}
                    onClick={() => setActiveSidebarItem('appointments')}
                  >
                    <Calendar size={isSeniorMode ? 24 : 20} />
                    <span className={`font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Appointments</span>
                  </button>
                  
                  <button 
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg ${
                      activeSidebarItem === 'notifications' 
                        ? 'bg-gov-green-50 text-gov-green' 
                        : 'hover:bg-gov-neutrals-gray50 text-gov-neutrals-gray700'
                    }`}
                    onClick={() => setActiveSidebarItem('notifications')}
                  >
                    <Bell size={isSeniorMode ? 24 : 20} />
                    <span className={`font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Notifications</span>
                    <span className="bg-gov-yellow text-gov-neutrals-gray900 text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">3</span>
                  </button>
                  
                  <button 
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg ${
                      activeSidebarItem === 'settings' 
                        ? 'bg-gov-green-50 text-gov-green' 
                        : 'hover:bg-gov-neutrals-gray50 text-gov-neutrals-gray700'
                    }`}
                    onClick={() => setActiveSidebarItem('settings')}
                  >
                    <Settings size={isSeniorMode ? 24 : 20} />
                    <span className={`font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Settings</span>
                  </button>
                  
                  <button 
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg ${
                      activeSidebarItem === 'help' 
                        ? 'bg-gov-green-50 text-gov-green' 
                        : 'hover:bg-gov-neutrals-gray50 text-gov-neutrals-gray700'
                    }`}
                    onClick={() => setActiveSidebarItem('help')}
                  >
                    <Info size={isSeniorMode ? 24 : 20} />
                    <span className={`font-medium ${isSeniorMode ? 'text-xl' : 'text-base'}`}>Help</span>
                  </button>
                </nav>
                
                <div className="mt-6 p-4 bg-gov-neutrals-gray50 rounded-lg">
                  <h3 className={`font-medium text-gov-neutrals-gray900 mb-2 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>Need assistance?</h3>
                  <p className={`text-gov-neutrals-gray600 mb-3 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                    Our support team is here to help with any questions about your dashboard.
                  </p>
                  <Button className="w-full bg-gov-green hover:bg-gov-green-700">
                    <Info className="mr-2 h-4 w-4" /> Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gov-neutrals-gray200 overflow-hidden mb-8">
              <div className="p-6 border-b border-gov-neutrals-gray200">
                <h1 className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-3xl' : 'text-2xl'}`}>
                  Citizen Dashboard
                </h1>
                <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                  Welcome back, Juan! Here's an overview of your city services.
                </p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gov-green-50 p-4 rounded-lg border border-gov-green-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-medium text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                          Applications
                        </h3>
                        <p className={`text-gov-green font-bold ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>2</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg">
                        <FileText className="text-gov-green" size={isSeniorMode ? 24 : 20} />
                      </div>
                    </div>
                    <p className={`text-gov-neutrals-gray600 mt-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                      1 pending, 1 approved
                    </p>
                  </div>
                  
                  <div className="bg-gov-yellow-50 p-4 rounded-lg border border-gov-yellow-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-medium text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                          Appointments
                        </h3>
                        <p className={`text-gov-yellow-700 font-bold ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>1</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg">
                        <Calendar className="text-gov-yellow-700" size={isSeniorMode ? 24 : 20} />
                      </div>
                    </div>
                    <p className={`text-gov-neutrals-gray600 mt-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                      Next: May 22, 10:30 AM
                    </p>
                  </div>
                  
                  <div className="bg-gov-neutrals-gray100 p-4 rounded-lg border border-gov-neutrals-gray200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-medium text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                          Notifications
                        </h3>
                        <p className={`text-gov-neutrals-gray700 font-bold ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>3</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg">
                        <Bell className="text-gov-neutrals-gray700" size={isSeniorMode ? 24 : 20} />
                      </div>
                    </div>
                    <p className={`text-gov-neutrals-gray600 mt-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                      2 new since last login
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className={`font-semibold text-gov-neutrals-gray900 mb-4 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                    Your Recent Applications
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gov-neutrals-gray200">
                      <thead className="bg-gov-neutrals-gray50">
                        <tr>
                          <th scope="col" className={`px-6 py-3 text-left text-gov-neutrals-gray500 ${isSeniorMode ? 'text-base' : 'text-xs'} uppercase tracking-wider`}>
                            Application
                          </th>
                          <th scope="col" className={`px-6 py-3 text-left text-gov-neutrals-gray500 ${isSeniorMode ? 'text-base' : 'text-xs'} uppercase tracking-wider`}>
                            Submitted
                          </th>
                          <th scope="col" className={`px-6 py-3 text-left text-gov-neutrals-gray500 ${isSeniorMode ? 'text-base' : 'text-xs'} uppercase tracking-wider`}>
                            Status
                          </th>
                          <th scope="col" className={`px-6 py-3 text-left text-gov-neutrals-gray500 ${isSeniorMode ? 'text-base' : 'text-xs'} uppercase tracking-wider`}>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gov-neutrals-gray200">
                        <tr>
                          <td className={`px-6 py-4 whitespace-nowrap ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                            <div className="font-medium text-gov-neutrals-gray900">Business Permit Renewal</div>
                            <div className="text-gov-neutrals-gray500">Application #BP-2025-1284</div>
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap ${isSeniorMode ? 'text-base' : 'text-sm'} text-gov-neutrals-gray500`}>
                            May 15, 2025
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap`}>
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gov-yellow-100 text-gov-yellow-800">
                              In Review
                            </span>
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm`}>
                            <Button variant="link" className="text-gov-green hover:text-gov-green-700 p-0">
                              Track Status
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className={`px-6 py-4 whitespace-nowrap ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                            <div className="font-medium text-gov-neutrals-gray900">Building Permit</div>
                            <div className="text-gov-neutrals-gray500">Application #BP-2025-0983</div>
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap ${isSeniorMode ? 'text-base' : 'text-sm'} text-gov-neutrals-gray500`}>
                            Apr 30, 2025
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap`}>
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gov-green-100 text-gov-green-800">
                              Approved
                            </span>
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm`}>
                            <Button variant="link" className="text-gov-green hover:text-gov-green-700 p-0">
                              Download
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gov-neutrals-gray50 p-6 rounded-lg border border-gov-neutrals-gray200">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                        Upcoming Appointment
                      </h2>
                      <Link to="/dashboard/appointments" className="text-gov-green hover:text-gov-green-700 text-sm font-medium">
                        View All
                      </Link>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gov-neutrals-gray200 mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className={`font-medium text-gov-neutrals-gray900 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                            Health Department
                          </h3>
                          <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                            Medical Certificate Application
                          </p>
                        </div>
                        <span className="bg-gov-yellow-100 text-gov-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Upcoming
                        </span>
                      </div>
                      <div className={`flex items-center mb-3 text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                        <Calendar size={16} className="mr-1" />
                        May 22, 2025 at 10:30 AM
                      </div>
                      <div className={`flex items-center mb-4 text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                        <MapPin size={16} className="mr-1" />
                        City Health Office, 2nd Floor, City Hall
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="text-gov-green border-gov-green hover:bg-gov-green-50">
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50">
                          Cancel
                        </Button>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gov-green hover:bg-gov-green-700">
                      Schedule New Appointment
                    </Button>
                  </div>
                  
                  <div className="bg-gov-neutrals-gray50 p-6 rounded-lg border border-gov-neutrals-gray200">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                        Property Tax Assessment
                      </h2>
                      <Link to="/dashboard/taxes" className="text-gov-green hover:text-gov-green-700 text-sm font-medium">
                        Full Details
                      </Link>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg border border-gov-neutrals-gray200 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                          Total Assessment for 2025
                        </div>
                        <div className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                          ₱12,750.00
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <div className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                          Paid to Date
                        </div>
                        <div className={`font-semibold text-gov-green ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                          ₱8,500.00
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <div className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                          Remaining Balance
                        </div>
                        <div className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                          ₱4,250.00
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-1">
                        <div className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                          Next Payment Due
                        </div>
                        <div className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                          June 30, 2025
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className={`flex justify-between mb-1 ${isSeniorMode ? 'text-base' : 'text-xs'} text-gov-neutrals-gray600`}>
                          <span>Payment Progress</span>
                          <span>67%</span>
                        </div>
                        <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2">
                          <div className="bg-gov-green h-2 rounded-full" style={{ width: '67%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gov-yellow hover:bg-gov-yellow-600 text-gov-neutrals-gray900">
                      Make Payment
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className={`font-semibold text-gov-neutrals-gray900 mb-4 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                    City Map & Services
                  </h2>
                  <div className="bg-gov-neutrals-gray100 rounded-lg h-64 flex items-center justify-center border border-gov-neutrals-gray200 mb-4">
                    <div className="text-center">
                      <MapPin className="h-10 w-10 text-gov-green mx-auto mb-2" />
                      <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                        Interactive city map will be displayed here
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Link to="/services/map">
                      <Button variant="outline" className="border-gov-green text-gov-green hover:bg-gov-green-50">
                        Explore City Map
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button className="bg-gov-green hover:bg-gov-green-700">
                        All City Services
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer isSeniorMode={isSeniorMode} />
    </div>
  );
};

export default Dashboard;
