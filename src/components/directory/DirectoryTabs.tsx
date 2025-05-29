
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DirectoryTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSeniorMode: boolean;
}

const DirectoryTabs: React.FC<DirectoryTabsProps> = ({ activeTab, setActiveTab, isSeniorMode }) => {
  const tabs = [
    { id: 'departments', name: 'Departments' },
    { id: 'officials', name: 'City Officials' },
    { id: 'barangays', name: 'Barangays' },
    { id: 'emergency', name: 'Emergency Contacts' }
  ];

  return (
    <div className="mb-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-gov-neutrals-gray100 p-1 mb-6 flex flex-wrap overflow-x-auto">
          {tabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id}
              className={`${isSeniorMode ? 'text-lg py-3 px-5' : ''} whitespace-nowrap`}
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default DirectoryTabs;
