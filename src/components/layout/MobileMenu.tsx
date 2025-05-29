
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, Home, Search, Settings, User, X, FileText, Users, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SeniorModeToggle from '../accessibility/SeniorModeToggle';
import TextToSpeech from '../accessibility/TextToSpeech';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isSeniorMode: boolean;
  toggleSeniorMode: () => void;
  isSpeechActive: boolean;
  toggleSpeech: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  isSeniorMode, 
  toggleSeniorMode, 
  isSpeechActive, 
  toggleSpeech 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden animate-fade-in">
      <div className="absolute right-0 top-0 h-full w-4/5 sm:w-3/4 max-w-sm bg-white shadow-lg overflow-y-auto">
        <div className="p-4 flex justify-between items-center border-b border-gov-neutrals-gray200">
          <h2 className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gov-neutrals-gray100">
            <X size={24} className="text-gov-neutrals-gray700" />
          </Button>
        </div>
        
        <nav className="p-4">
          <ul className={`space-y-2 ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
            <li>
              <Link to="/" className="flex items-center p-3 hover:bg-gov-neutrals-gray100 rounded-lg transition-colors" onClick={onClose}>
                <Home size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green flex-shrink-0" />
                <span className="text-gov-neutrals-gray700">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center p-3 hover:bg-gov-neutrals-gray100 rounded-lg transition-colors" onClick={onClose}>
                <Calendar size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green flex-shrink-0" />
                <span className="text-gov-neutrals-gray700">E-Services</span>
              </Link>
            </li>
            <li>
              <Link to="/news" className="flex items-center p-3 hover:bg-gov-neutrals-gray100 rounded-lg transition-colors" onClick={onClose}>
                <FileText size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green flex-shrink-0" />
                <span className="text-gov-neutrals-gray700">News & Advisories</span>
              </Link>
            </li>
            <li>
              <Link to="/programs" className="flex items-center p-3 hover:bg-gov-neutrals-gray100 rounded-lg transition-colors" onClick={onClose}>
                <Users size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green flex-shrink-0" />
                <span className="text-gov-neutrals-gray700">Programs & Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/directory" className="flex items-center p-3 hover:bg-gov-neutrals-gray100 rounded-lg transition-colors" onClick={onClose}>
                <Phone size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green flex-shrink-0" />
                <span className="text-gov-neutrals-gray700">Directory</span>
              </Link>
            </li>
            <li>
              <Link to="/transparency" className="flex items-center p-3 hover:bg-gov-neutrals-gray100 rounded-lg transition-colors" onClick={onClose}>
                <Search size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green flex-shrink-0" />
                <span className="text-gov-neutrals-gray700">Transparency</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center p-3 hover:bg-gov-neutrals-gray100 rounded-lg transition-colors" onClick={onClose}>
                <User size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green flex-shrink-0" />
                <span className="text-gov-neutrals-gray700">Citizen Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/support" className="flex items-center p-3 hover:bg-gov-neutrals-gray100 rounded-lg transition-colors" onClick={onClose}>
                <MessageSquare size={isSeniorMode ? 24 : 20} className="mr-3 text-gov-green flex-shrink-0" />
                <span className="text-gov-neutrals-gray700">Support & Feedback</span>
              </Link>
            </li>
          </ul>

          {/* Accessibility Controls for Mobile */}
          <div className="border-t border-gov-neutrals-gray200 mt-6 pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                Accessibility
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                Senior Mode
              </span>
              <SeniorModeToggle isSeniorMode={isSeniorMode} toggleSeniorMode={toggleSeniorMode} />
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                Text to Speech
              </span>
              <TextToSpeech 
                isSeniorMode={isSeniorMode} 
                isSpeechActive={isSpeechActive} 
                toggleSpeech={toggleSpeech} 
              />
            </div>
          </div>

          <div className="border-t border-gov-neutrals-gray200 mt-6 pt-4">
            <div className="flex flex-col space-y-2">
              <Button 
                variant="outline" 
                size={isSeniorMode ? "lg" : "default"} 
                className="w-full justify-start text-gov-neutrals-gray700 border-gov-neutrals-gray300 hover:bg-gov-neutrals-gray100" 
                onClick={onClose}
              >
                <Bell size={isSeniorMode ? 24 : 20} className="mr-2" />
                Notifications
              </Button>
              <Button 
                variant="outline" 
                size={isSeniorMode ? "lg" : "default"} 
                className="w-full justify-start text-gov-neutrals-gray700 border-gov-neutrals-gray300 hover:bg-gov-neutrals-gray100" 
                onClick={onClose}
              >
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
