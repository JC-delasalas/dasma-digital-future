
import React from 'react';
import { Bell, Calendar, Home, Menu, Search, Settings, User } from "lucide-react";
import { Link } from 'react-router-dom';
import SeniorModeToggle from '../accessibility/SeniorModeToggle';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  isSeniorMode: boolean;
  toggleSeniorMode: () => void;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSeniorMode, toggleSeniorMode, toggleMobileMenu }) => {
  return (
    <header className="bg-white border-b border-gov-neutrals-gray200 shadow-sm sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 bg-gov-green rounded-lg flex items-center justify-center">
                <Home className="text-white" size={20} />
              </div>
              <span className={`ml-2 font-semibold text-gov-green hidden md:inline ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
                City of Dasmariñas
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className={`mx-4 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              <ul className="flex space-x-1">
                <li>
                  <Link to="/services" className="px-3 py-2 rounded-md hover:bg-gov-neutrals-gray100 text-gov-neutrals-gray700 hover:text-gov-green transition-colors flex items-center">
                    <Calendar size={isSeniorMode ? 24 : 18} className="mr-2" />
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/transparency" className="px-3 py-2 rounded-md hover:bg-gov-neutrals-gray100 text-gov-neutrals-gray700 hover:text-gov-green transition-colors flex items-center">
                    <Search size={isSeniorMode ? 24 : 18} className="mr-2" />
                    <span>Transparency</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-gov-neutrals-gray100 text-gov-neutrals-gray700 hover:text-gov-green transition-colors flex items-center">
                    <User size={isSeniorMode ? 24 : 18} className="mr-2" />
                    <span>My Dashboard</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <SeniorModeToggle isSeniorMode={isSeniorMode} toggleSeniorMode={toggleSeniorMode} />
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gov-neutrals-gray100">
                <Bell size={20} className="text-gov-neutrals-gray700" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gov-neutrals-gray100">
                <Settings size={20} className="text-gov-neutrals-gray700" />
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full hover:bg-gov-neutrals-gray100"
              onClick={toggleMobileMenu}
            >
              <Menu size={24} className="text-gov-neutrals-gray700" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
