
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface NewsTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isSeniorMode: boolean;
}

const NewsTabs: React.FC<NewsTabsProps> = ({ activeCategory, setActiveCategory, isSeniorMode }) => {
  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'traffic', name: 'Traffic' },
    { id: 'weather', name: 'Weather' },
    { id: 'programs', name: 'Programs' },
    { id: 'health', name: 'Health' },
    { id: 'announcements', name: 'Announcements' }
  ];

  return (
    <div className="mb-8">
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="bg-gov-neutrals-gray100 p-1 mb-6 flex flex-wrap overflow-x-auto">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className={`${isSeniorMode ? 'text-lg py-3 px-5' : ''} whitespace-nowrap`}
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default NewsTabs;
