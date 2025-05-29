
import React from 'react';
import { TrendingUp, Users, Calendar, CheckCircle } from 'lucide-react';

interface ProgramsStatsProps {
  isSeniorMode: boolean;
}

const ProgramsStats: React.FC<ProgramsStatsProps> = ({ isSeniorMode }) => {
  const stats = [
    {
      icon: CheckCircle,
      value: '45',
      label: 'Completed Projects',
      color: 'text-green-600'
    },
    {
      icon: Calendar,
      value: '28',
      label: 'Ongoing Programs',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      value: '12,500+',
      label: 'Citizens Served',
      color: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      value: '₱2.8B',
      label: 'Total Investment',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-16 bg-gov-neutrals-gray50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <h3 className={`font-bold ${isSeniorMode ? 'text-3xl' : 'text-2xl'} text-gov-neutrals-gray900 mb-2`}>
                {stat.value}
              </h3>
              <p className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsStats;
