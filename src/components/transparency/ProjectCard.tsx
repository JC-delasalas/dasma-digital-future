
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  isSeniorMode: boolean;
  title: string;
  status: 'In Progress' | 'Completed';
  progress: number;
  budget: string;
  spent?: string;
  finalCost?: string;
  timeline: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  isSeniorMode,
  title,
  status,
  progress,
  budget,
  spent,
  finalCost,
  timeline,
  link
}) => {
  const statusColor = status === 'Completed' ? 'bg-gov-yellow text-gov-neutrals-gray900' : 'bg-gov-green text-white';
  const progressColor = status === 'Completed' ? 'bg-gov-yellow' : 'bg-gov-green';

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gov-neutrals-gray200">
      <div className="h-48 bg-gov-neutrals-gray200 relative overflow-hidden">
        <div className={`absolute top-0 left-0 px-3 py-1 rounded-br ${statusColor}`}>
          {status}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Progress</span>
          <span className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{progress}%</span>
        </div>
        <div className="w-full bg-gov-neutrals-gray200 rounded-full h-2.5 mb-4">
          <div className={`${progressColor} h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Budget</span>
            <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{budget}</span>
          </div>
          <div className="flex justify-between">
            <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
              {status === 'Completed' ? 'Final Cost' : 'Spent'}
            </span>
            <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
              {status === 'Completed' ? finalCost : spent}
            </span>
          </div>
          <div className="flex justify-between">
            <span className={`text-gov-neutrals-gray600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>Timeline</span>
            <span className={`text-gov-neutrals-gray900 font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>{timeline}</span>
          </div>
        </div>
        <Link to={link}>
          <Button className="w-full bg-gov-green hover:bg-gov-green-700">
            View Project Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
