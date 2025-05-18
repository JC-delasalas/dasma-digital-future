
import React from 'react';
import { Button } from '@/components/ui/button';

interface SeniorModeToggleProps {
  isSeniorMode: boolean;
  toggleSeniorMode: () => void;
}

const SeniorModeToggle: React.FC<SeniorModeToggleProps> = ({ isSeniorMode, toggleSeniorMode }) => {
  return (
    <div className="relative inline-flex">
      <Button 
        onClick={toggleSeniorMode}
        variant="outline"
        size="sm"
        className={`flex items-center space-x-1 font-medium ${
          isSeniorMode 
            ? 'bg-gov-green text-white border-gov-green hover:bg-gov-green-800'
            : 'text-gov-green border-gov-green hover:bg-gov-green-50'
        }`}
      >
        <span className="text-lg">A</span>
        {!isSeniorMode && <span className="hidden md:inline">Senior Mode</span>}
        {isSeniorMode && <span className="hidden md:inline">Standard Mode</span>}
      </Button>
    </div>
  );
};

export default SeniorModeToggle;
