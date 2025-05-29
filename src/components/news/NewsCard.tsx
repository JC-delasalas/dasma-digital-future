
import React from 'react';
import { Calendar, ArrowUp } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured: boolean;
}

interface NewsCardProps {
  news: NewsItem;
  isSeniorMode: boolean;
  featured: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, isSeniorMode, featured }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      traffic: 'bg-red-100 text-red-800',
      weather: 'bg-blue-100 text-blue-800',
      programs: 'bg-green-100 text-green-800',
      health: 'bg-purple-100 text-purple-800',
      announcements: 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <article className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${featured ? 'col-span-1 lg:col-span-1' : ''}`}>
      <div className="relative">
        <img 
          src={news.image} 
          alt={news.title}
          className={`w-full object-cover ${featured ? 'h-48' : 'h-40'}`}
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
            {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className={`p-6 ${featured ? 'p-8' : ''}`}>
        <div className="flex items-center text-gov-neutrals-gray500 mb-3">
          <Calendar size={16} className="mr-2" />
          <span className={`${isSeniorMode ? 'text-base' : 'text-sm'}`}>
            {formatDate(news.date)}
          </span>
        </div>
        
        <h3 className={`font-bold text-gov-neutrals-gray900 mb-3 ${
          isSeniorMode ? (featured ? 'text-2xl' : 'text-xl') : (featured ? 'text-xl' : 'text-lg')
        }`}>
          {news.title}
        </h3>
        
        <p className={`text-gov-neutrals-gray600 mb-4 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
          {news.excerpt}
        </p>
        
        <button className="inline-flex items-center text-gov-green hover:text-gov-green-700 font-medium transition-colors">
          <span className={`${isSeniorMode ? 'text-lg' : 'text-base'}`}>Read More</span>
          <ArrowUp size={16} className="ml-2 rotate-45" />
        </button>
      </div>
    </article>
  );
};

export default NewsCard;
