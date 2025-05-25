import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import BudgetVisualization from '../components/transparency/BudgetVisualization';
import ChatAssistant from '../components/transparency/ChatAssistant';
import { Button } from '@/components/ui/button';
import { Search, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transparency = () => {
  const [isSeniorMode, setIsSeniorMode] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSeniorMode = () => {
    setIsSeniorMode(!isSeniorMode);
    document.body.classList.toggle('senior-mode', !isSeniorMode);
  };

  const toggleSpeech = () => {
    setIsSpeechActive(!isSpeechActive);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={isSeniorMode ? 'senior-mode' : ''}>
      <Header 
        isSeniorMode={isSeniorMode} 
        toggleSeniorMode={toggleSeniorMode}
        isSpeechActive={isSpeechActive}
        toggleSpeech={toggleSpeech}
        toggleMobileMenu={toggleMobileMenu} 
      />
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        isSeniorMode={isSeniorMode} 
      />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gov-green py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`text-white font-bold mb-6 ${isSeniorMode ? 'text-5xl' : 'text-4xl'}`}>
                Transparent Governance Hub
              </h1>
              <p className={`text-gov-neutrals-gray100 mb-8 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                Access real-time budget data, track projects from fund release to completion, and view 
                city council activities in one transparent platform.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search for budget items, projects, or council meetings..."
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
        
        {/* Budget Visualization Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`font-bold text-gov-green mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
                City Budget and Spending
              </h2>
              <p className={`text-gov-neutrals-gray600 max-w-2xl mx-auto ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                Explore how the city allocates and spends its funds. Our interactive visualizations 
                make complex budget data easy to understand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <BudgetVisualization isSeniorMode={isSeniorMode} />
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gov-neutrals-gray200">
                <h3 className={`font-semibold text-gov-neutrals-gray900 mb-4 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                  Financial Transparency Tools
                </h3>
                <ul className="space-y-4">
                  <li className="border-b border-gov-neutrals-gray200 pb-4">
                    <h4 className={`font-medium text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                      Budget Explorer
                    </h4>
                    <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                      Interactive tool to examine budget allocations and spending trends over time.
                    </p>
                    <Link to="/transparency/budget" className="text-gov-green hover:text-gov-green-700 font-medium flex items-center">
                      <span>Explore</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </li>
                  
                  <li className="border-b border-gov-neutrals-gray200 pb-4">
                    <h4 className={`font-medium text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                      Procurement Tracker
                    </h4>
                    <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                      Track all city procurement activities, bids, and contract awards.
                    </p>
                    <Link to="/transparency/procurement" className="text-gov-green hover:text-gov-green-700 font-medium flex items-center">
                      <span>Track</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </li>
                  
                  <li>
                    <h4 className={`font-medium text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                      Financial Report Archives
                    </h4>
                    <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                      Access past financial reports, audits, and statements.
                    </p>
                    <Link to="/transparency/reports" className="text-gov-green hover:text-gov-green-700 font-medium flex items-center">
                      <span>View Archives</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Monitoring Section */}
        <section className="py-16 bg-gov-neutrals-gray50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`font-bold text-gov-green mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
                Project Monitoring
              </h2>
              <p className={`text-gov-neutrals-gray600 max-w-2xl mx-auto ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                Track the progress of city projects from planning to completion with our "Follow the Money" feature.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gov-neutrals-gray200">
                <div className="h-48 bg-gov-neutrals-gray200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 bg-gov-green text-white px-3 py-1 rounded-br">
                    In Progress
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold">Dasmariñas Public Hospital Expansion</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Progress</span>
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>75%</span>
                  </div>
                  <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5 mb-4">
                    <div className="bg-gov-green h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Budget</span>
                      <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>₱120,000,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Spent</span>
                      <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>₱90,000,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Timeline</span>
                      <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Jan 2025 - Aug 2025</span>
                    </div>
                  </div>
                  <Link to="/transparency/projects/hospital">
                    <Button className="w-full bg-gov-green hover:bg-gov-green-700">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gov-neutrals-gray200">
                <div className="h-48 bg-gov-neutrals-gray200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 bg-gov-yellow text-gov-neutrals-gray900 px-3 py-1 rounded-br">
                    Completed
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold">City-wide Road Rehabilitation</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Progress</span>
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>100%</span>
                  </div>
                  <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5 mb-4">
                    <div className="bg-gov-yellow h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Budget</span>
                      <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>₱85,000,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Final Cost</span>
                      <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>₱82,500,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Timeline</span>
                      <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Aug 2024 - Mar 2025</span>
                    </div>
                  </div>
                  <Link to="/transparency/projects/roads">
                    <Button className="w-full bg-gov-green hover:bg-gov-green-700">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gov-neutrals-gray200">
                <div className="h-48 bg-gov-neutrals-gray200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 bg-gov-green text-white px-3 py-1 rounded-br">
                    In Progress
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold">Smart City Traffic Management</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Progress</span>
                    <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>50%</span>
                  </div>
                  <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5 mb-4">
                    <div className="bg-gov-green h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Budget</span>
                      <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>₱45,000,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Spent</span>
                      <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>₱22,000,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Timeline</span>
                      <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Mar 2025 - Dec 2025</span>
                    </div>
                  </div>
                  <Link to="/transparency/projects/traffic">
                    <Button className="w-full bg-gov-green hover:bg-gov-green-700">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/transparency/projects">
                <Button variant="outline" className="border-gov-green text-gov-green hover:bg-gov-green-50">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* City Council Transparency Section */}
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
      </main>
      
      <Footer isSeniorMode={isSeniorMode} />
      <ChatAssistant isSeniorMode={isSeniorMode} />
    </div>
  );
};

export default Transparency;
