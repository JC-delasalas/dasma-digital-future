
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';

interface ProjectMonitoringProps {
  isSeniorMode: boolean;
}

const ProjectMonitoring: React.FC<ProjectMonitoringProps> = ({ isSeniorMode }) => {
  const projects = [
    {
      title: "Dasmariñas Public Hospital Expansion",
      status: "In Progress" as const,
      progress: 75,
      budget: "₱120,000,000",
      spent: "₱90,000,000",
      timeline: "Jan 2025 - Aug 2025",
      link: "/transparency/projects/hospital"
    },
    {
      title: "City-wide Road Rehabilitation",
      status: "Completed" as const,
      progress: 100,
      budget: "₱85,000,000",
      finalCost: "₱82,500,000",
      timeline: "Aug 2024 - Mar 2025",
      link: "/transparency/projects/roads"
    },
    {
      title: "Smart City Traffic Management",
      status: "In Progress" as const,
      progress: 50,
      budget: "₱45,000,000",
      spent: "₱22,000,000",
      timeline: "Mar 2025 - Dec 2025",
      link: "/transparency/projects/traffic"
    }
  ];

  return (
    <section className="py-16 bg-gov-neutrals-gray50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`font-bold text-gov-green mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
            Project Monitoring
          </h2>
          <p className={`text-gov-neutrals-gray600 max-w-2xl mx-auto ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Track the progress of city projects from planning to completion with our "Follow the Money" feature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              isSeniorMode={isSeniorMode}
              {...project}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/transparency/projects">
            <Button variant="outline" className="border-gov-green text-gov-green hover:bg-gov-green-50">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectMonitoring;
