
import React from 'react';
import { Calendar, FileText, MapPin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceHighlightsProps {
  isSeniorMode: boolean;
}

const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ isSeniorMode }) => {
  const services = [
    {
      title: 'Document Requests',
      description: 'Apply for birth certificates, business permits, and other official documents online.',
      icon: <FileText size={isSeniorMode ? 32 : 24} />,
      link: '/services/documents'
    },
    {
      title: 'Schedule Appointments',
      description: 'Book appointments with city departments and avoid waiting in line.',
      icon: <Calendar size={isSeniorMode ? 32 : 24} />,
      link: '/services/appointments'
    },
    {
      title: 'Report Issues',
      description: 'Report neighborhood issues like potholes, flooding, or street light outages.',
      icon: <MessageSquare size={isSeniorMode ? 32 : 24} />,
      link: '/services/report'
    },
    {
      title: 'City Map',
      description: 'Explore interactive city maps showing public facilities and services.',
      icon: <MapPin size={isSeniorMode ? 32 : 24} />,
      link: '/services/map'
    }
  ];

  return (
    <section className={`py-16 ${isSeniorMode ? 'spacing' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`font-bold text-gov-green mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
            Popular Services
          </h2>
          <p className={`text-gov-neutrals-gray600 max-w-xl mx-auto ${isSeniorMode ? 'text-xl' : 'text-base'}`}>
            Access our most frequently used online services. Save time by completing these transactions from the comfort of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="service-card animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className={`font-semibold mb-2 text-gov-neutrals-gray900 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                {service.title}
              </h3>
              <p className={`text-gov-neutrals-gray600 flex-grow ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                {service.description}
              </p>
              <div className={`mt-4 text-gov-green font-medium flex items-center ${isSeniorMode ? 'text-lg' : 'text-sm'}`}>
                Access Service
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
