
import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Users, User } from 'lucide-react';

interface DirectoryCardProps {
  data: any;
  type: string;
  isSeniorMode: boolean;
}

const DirectoryCard: React.FC<DirectoryCardProps> = ({ data, type, isSeniorMode }) => {
  const renderDepartmentCard = () => (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <h3 className={`font-bold text-gov-neutrals-gray900 mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
        {data.name}
      </h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <User size={16} className="text-gov-green mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Department Head</p>
            <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{data.head}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Phone size={16} className="text-gov-green mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Phone</p>
            <a href={`tel:${data.phone}`} className={`text-gov-green hover:underline ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
              {data.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <MessageSquare size={16} className="text-gov-green mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Email</p>
            <a href={`mailto:${data.email}`} className={`text-gov-green hover:underline ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
              {data.email}
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin size={16} className="text-gov-green mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Location</p>
            <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{data.location}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="text-gov-green mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Office Hours</p>
            <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{data.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOfficialsCard = () => (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <h3 className={`font-bold text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
        {data.name}
      </h3>
      <p className={`text-gov-green font-medium mb-4 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
        {data.position}
      </p>
      <div className="space-y-3">
        <div className="flex items-center">
          <Phone size={16} className="text-gov-green mr-3" />
          <a href={`tel:${data.phone}`} className={`text-gov-green hover:underline ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
            {data.phone}
          </a>
        </div>
        <div className="flex items-center">
          <MessageSquare size={16} className="text-gov-green mr-3" />
          <a href={`mailto:${data.email}`} className={`text-gov-green hover:underline ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
            {data.email}
          </a>
        </div>
        <div className="flex items-center">
          <MapPin size={16} className="text-gov-green mr-3" />
          <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{data.office}</p>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="text-gov-green mr-3" />
          <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{data.hours}</p>
        </div>
      </div>
    </div>
  );

  const renderBarangayCard = () => (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <h3 className={`font-bold text-gov-neutrals-gray900 mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
        {data.name}
      </h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <User size={16} className="text-gov-green mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Barangay Captain</p>
            <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{data.captain}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Phone size={16} className="text-gov-green mr-3" />
          <a href={`tel:${data.phone}`} className={`text-gov-green hover:underline ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
            {data.phone}
          </a>
        </div>
        <div className="flex items-center">
          <MessageSquare size={16} className="text-gov-green mr-3" />
          <a href={`mailto:${data.email}`} className={`text-gov-green hover:underline ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
            {data.email}
          </a>
        </div>
        <div className="flex items-center">
          <MapPin size={16} className="text-gov-green mr-3" />
          <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{data.address}</p>
        </div>
        <div className="flex items-center">
          <Users size={16} className="text-gov-green mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Population</p>
            <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{data.population}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmergencyCard = () => (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border-l-4 border-red-500">
      <h3 className={`font-bold text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
        {data.name}
      </h3>
      <p className={`text-red-600 font-medium mb-4 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
        {data.service}
      </p>
      <div className="space-y-3">
        <div className="flex items-center">
          <Phone size={16} className="text-red-600 mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Emergency Hotline</p>
            <a href={`tel:${data.phone}`} className={`text-red-600 hover:underline font-bold ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              {data.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <Phone size={16} className="text-gov-green mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Direct Line</p>
            <a href={`tel:${data.alternatePhone}`} className={`text-gov-green hover:underline ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
              {data.alternatePhone}
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <MessageSquare size={16} className="text-gov-green mr-3" />
          <a href={`mailto:${data.email}`} className={`text-gov-green hover:underline ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
            {data.email}
          </a>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="text-gov-green mr-3" />
          <div>
            <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Response Time</p>
            <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{data.response}</p>
          </div>
        </div>
      </div>
    </div>
  );

  switch (type) {
    case 'departments': return renderDepartmentCard();
    case 'officials': return renderOfficialsCard();
    case 'barangays': return renderBarangayCard();
    case 'emergency': return renderEmergencyCard();
    default: return renderDepartmentCard();
  }
};

export default DirectoryCard;
