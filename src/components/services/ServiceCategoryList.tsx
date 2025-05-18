
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ServiceCategory, ServiceType } from '../../types/services';

interface ServiceCategoryListProps {
  category: ServiceCategory;
  isSeniorMode: boolean;
}

const ServiceCategoryList: React.FC<ServiceCategoryListProps> = ({ category, isSeniorMode }) => {
  const getServiceTypeBadge = (type: ServiceType) => {
    switch(type) {
      case 'fully-online':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Fully Online</Badge>;
      case 'hybrid':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Online + In-Person</Badge>;
      case 'in-person':
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">In-Person Only</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div>
      <p className="text-gov-neutrals-gray600 mb-6">{category.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.services.map((service) => (
          <Link 
            key={service.id} 
            to={`/services/${category.id}/${service.id}`}
            className="bg-white border border-gov-neutrals-gray200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                {service.name}
              </h3>
              <div>
                {getServiceTypeBadge(service.type)}
              </div>
            </div>
            
            <p className={`text-gov-neutrals-gray600 mb-4 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              {service.shortDescription}
            </p>
            
            <div className="text-gov-green font-medium flex items-center">
              View Service Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            
            {service.homeServiceEligible && (
              <div className="mt-4 text-gov-neutrals-gray900 bg-gov-yellow-50 p-2 rounded-md text-sm flex items-center">
                <span className="inline-block w-2 h-2 bg-gov-yellow rounded-full mr-2"></span>
                Available for Home Visit upon request
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategoryList;
