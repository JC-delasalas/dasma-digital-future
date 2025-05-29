
import React from 'react';
import { Bell, Calendar, Home, Menu, Search, Settings, User, FileText, Users, Phone, MessageSquare } from "lucide-react";
import { Link } from 'react-router-dom';
import SeniorModeToggle from '../accessibility/SeniorModeToggle';
import TextToSpeech from '../accessibility/TextToSpeech';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  isSeniorMode: boolean;
  toggleSeniorMode: () => void;
  isSpeechActive: boolean;
  toggleSpeech: () => void;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isSeniorMode, 
  toggleSeniorMode, 
  isSpeechActive, 
  toggleSpeech, 
  toggleMobileMenu 
}) => {
  return (
    <header className="bg-white border-b border-gov-neutrals-gray200 shadow-sm sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center min-w-0 flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gov-green rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="text-white" size={isSeniorMode ? 20 : 16} />
              </div>
              <span className={`ml-3 font-semibold text-gov-green whitespace-nowrap ${isSeniorMode ? 'text-lg xl:text-xl' : 'text-sm xl:text-base'}`}>
                City of Dasmariñas
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center max-w-2xl mx-8">
            <nav className={`${isSeniorMode ? 'text-base xl:text-lg' : 'text-sm xl:text-base'}`}>
              <ul className="flex space-x-1">
                <li>
                  <Link to="/services" className="px-2 xl:px-3 py-2 rounded-md hover:bg-gov-neutrals-gray100 text-gov-neutrals-gray700 hover:text-gov-green transition-colors flex items-center whitespace-nowrap">
                    <Calendar size={isSeniorMode ? 20 : 16} className="mr-1 xl:mr-2" />
                    <span className="hidden xl:inline">E-Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="px-2 xl:px-3 py-2 rounded-md hover:bg-gov-neutrals-gray100 text-gov-neutrals-gray700 hover:text-gov-green transition-colors flex items-center whitespace-nowrap">
                    <FileText size={isSeniorMode ? 20 : 16} className="mr-1 xl:mr-2" />
                    <span className="hidden xl:inline">News</span>
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="px-2 xl:px-3 py-2 rounded-md hover:bg-gov-neutrals-gray100 text-gov-neutrals-gray700 hover:text-gov-green transition-colors flex items-center whitespace-nowrap">
                    <Users size={isSeniorMode ? 20 : 16} className="mr-1 xl:mr-2" />
                    <span className="hidden xl:inline">Programs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/directory" className="px-2 xl:px-3 py-2 rounded-md hover:bg-gov-neutrals-gray100 text-gov-neutrals-gray700 hover:text-gov-green transition-colors flex items-center whitespace-nowrap">
                    <Phone size={isSeniorMode ? 20 : 16} className="mr-1 xl:mr-2" />
                    <span className="hidden xl:inline">Directory</span>
                  </Link>
                </li>
                <li>
                  <Link to="/transparency" className="px-2 xl:px-3 py-2 rounded-md hover:bg-gov-neutrals-gray100 text-gov-neutrals-gray700 hover:text-gov-green transition-colors flex items-center whitespace-nowrap">
                    <Search size={isSeniorMode ? 20 : 16} className="mr-1 xl:mr-2" />
                    <span className="hidden xl:inline">Transparency</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="px-2 xl:px-3 py-2 rounded-md hover:bg-gov-neutrals-gray100 text-gov-neutrals-gray700 hover:text-gov-green transition-colors flex items-center whitespace-nowrap">
                    <User size={isSeniorMode ? 20 : 16} className="mr-1 xl:mr-2" />
                    <span className="hidden xl:inline">Dashboard</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <div className="hidden sm:flex items-center space-x-1">
              <SeniorModeToggle isSeniorMode={isSeniorMode} toggleSeniorMode={toggleSeniorMode} />
              <TextToSpeech isSeniorMode={isSeniorMode} isSpeechActive={isSpeechActive} toggleSpeech={toggleSpeech} />
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gov-neutrals-gray100">
                <Bell size={18} className="text-gov-neutrals-gray700" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gov-neutrals-gray100">
                <Settings size={18} className="text-gov-neutrals-gray700" />
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden rounded-full hover:bg-gov-neutrals-gray100"
              onClick={toggleMobileMenu}
            >
              <Menu size={20} className="text-gov-neutrals-gray700" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
