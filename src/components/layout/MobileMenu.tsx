
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, Home, Search, Settings, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isSeniorMode: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isSeniorMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden animate-fade-in">
      <div className="absolute right-0 top-0 h-full w-3/4 bg-white shadow-lg">
        <div className="p-4 flex justify-between items-center border-b border-gov-neutrals-gray200">
          <h2 className={`font-semibold ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={24} className="text-gov-neutrals-gray700" />
          </Button>
        </div>
        <nav className="p-4">
          <ul className={`space-y-4 ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
            <li>
              <Link to="/" className="flex items-center p-2 hover:bg-gov-neutrals-gray100 rounded-lg" onClick={onClose}>
                <Home size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center p-2 hover:bg-gov-neutrals-gray100 rounded-lg" onClick={onClose}>
                <Calendar size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/transparency" className="flex items-center p-2 hover:bg-gov-neutrals-gray100 rounded-lg" onClick={onClose}>
                <Search size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green" />
                <span>Transparency</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center p-2 hover:bg-gov-neutrals-gray100 rounded-lg" onClick={onClose}>
                <User size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green" />
                <span>My Dashboard</span>
              </Link>
            </li>
          </ul>

          <div className="border-t border-gov-neutrals-gray200 mt-6 pt-4">
            <div className="flex justify-between">
              <Button variant="outline" size={isSeniorMode ? "lg" : "default"} className="w-[48%]" onClick={onClose}>
                <Bell size={isSeniorMode ? 24 : 20} className="mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size={isSeniorMode ? "lg" : "default"} className="w-[48%]" onClick={onClose}>
                <Settings size={isSeniorMode ? 24 : 20} className="mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
