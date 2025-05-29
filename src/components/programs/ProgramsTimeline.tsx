
import React from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

interface ProgramsTimelineProps {
  isSeniorMode: boolean;
}

const ProgramsTimeline: React.FC<ProgramsTimelineProps> = ({ isSeniorMode }) => {
  const programs = [
    {
      id: 1,
      title: "Digital Transformation Initiative",
      description: "Complete digitization of government services and processes",
      status: "ongoing",
      startDate: "January 2024",
      endDate: "December 2025",
      budget: "₱500M",
      beneficiaries: "All residents",
      progress: 65
    },
    {
      id: 2,
      title: "Smart Traffic Management System",
      description: "AI-powered traffic lights and monitoring system",
      status: "planning",
      startDate: "March 2024",
      endDate: "September 2024",
      budget: "₱200M",
      beneficiaries: "Daily commuters",
      progress: 15
    },
    {
      id: 3,
      title: "Community Health Centers Upgrade",
      description: "Modernization of 12 community health centers",
      status: "completed",
      startDate: "June 2023",
      endDate: "November 2023",
      budget: "₱180M",
      beneficiaries: "50,000+ residents",
      progress: 100
    },
    {
      id: 4,
      title: "Free WiFi in Public Spaces",
      description: "High-speed internet access in parks and plazas",
      status: "ongoing",
      startDate: "August 2023",
      endDate: "May 2024",
      budget: "₱75M",
      beneficiaries: "Students & public",
      progress: 80
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'ongoing': return '○';
      case 'planning': return '◐';
      default: return '○';
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`font-bold text-center mb-12 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
            Project Timeline
          </h2>
          
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={program.id} className="relative">
                {/* Timeline line */}
                {index < programs.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gov-neutrals-gray200"></div>
                )}
                
                <div className="flex items-start">
                  {/* Timeline dot */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold mr-6 ${
                    program.status === 'completed' ? 'bg-green-500' :
                    program.status === 'ongoing' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}>
                    {getStatusIcon(program.status)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className={`font-bold text-gov-neutrals-gray900 mb-2 lg:mb-0 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
                        {program.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(program.status)}`}>
                        {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                      </span>
                    </div>
                    
                    <p className={`text-gov-neutrals-gray600 mb-6 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                      {program.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="text-gov-green mr-2" />
                        <div>
                          <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Duration</p>
                          <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                            {program.startDate} - {program.endDate}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Users size={16} className="text-gov-green mr-2" />
                        <div>
                          <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Beneficiaries</p>
                          <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                            {program.beneficiaries}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin size={16} className="text-gov-green mr-2" />
                        <div>
                          <p className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Budget</p>
                          <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                            {program.budget}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Progress</span>
                        <span className={`text-gov-green font-bold ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                          {program.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2">
                        <div 
                          className="bg-gov-green h-2 rounded-full transition-all duration-300"
                          style={{ width: `${program.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsTimeline;
