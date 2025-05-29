
import React from 'react';
import NewsCard from './NewsCard';

interface NewsGridProps {
  activeCategory: string;
  isSeniorMode: boolean;
}

const NewsGrid: React.FC<NewsGridProps> = ({ activeCategory, isSeniorMode }) => {
  // Sample news data - in a real app, this would come from an API
  const newsItems = [
    {
      id: 1,
      title: "City Government Launches Digital Services Portal",
      excerpt: "Residents can now access government services online through our new digital platform.",
      category: "announcements",
      date: "2024-01-15",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Traffic Advisory: Road Construction on Governor's Drive",
      excerpt: "Expect delays along Governor's Drive from January 20-25 due to road maintenance.",
      category: "traffic",
      date: "2024-01-14",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "Weather Alert: Heavy Rainfall Expected",
      excerpt: "PAGASA warns of heavy rainfall in Cavite province this weekend.",
      category: "weather",
      date: "2024-01-13",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "Free Healthcare Program Registration Now Open",
      excerpt: "Senior citizens and PWDs can register for the city's enhanced healthcare program.",
      category: "health",
      date: "2024-01-12",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 5,
      title: "Skills Training Program for Youth",
      excerpt: "The city launches a new skills training program for out-of-school youth.",
      category: "programs",
      date: "2024-01-11",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 6,
      title: "City Hall Operating Hours Extended",
      excerpt: "Selected services now available until 7 PM on weekdays.",
      category: "announcements",
      date: "2024-01-10",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div>
      {/* Featured News */}
      {featuredNews.length > 0 && (
        <div className="mb-12">
          <h2 className={`font-bold mb-6 ${isSeniorMode ? 'text-3xl' : 'text-2xl'}`}>Featured News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((item) => (
              <NewsCard 
                key={item.id} 
                news={item} 
                isSeniorMode={isSeniorMode}
                featured={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Regular News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularNews.map((item) => (
          <NewsCard 
            key={item.id} 
            news={item} 
            isSeniorMode={isSeniorMode}
            featured={false}
          />
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className={`text-gov-neutrals-gray500 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            No news items found for this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
