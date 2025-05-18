
import React from 'react';
import { FileText, Download, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { ServiceRequirement } from '../../types/services';

interface ServiceRequirementListProps {
  requirements: ServiceRequirement[];
  isSeniorMode: boolean;
}

const ServiceRequirementList: React.FC<ServiceRequirementListProps> = ({ requirements, isSeniorMode }) => {
  return (
    <div>
      <h2 className={`font-semibold ${isSeniorMode ? 'text-2xl' : 'text-xl'} mb-4`}>
        Required Documents
      </h2>
      
      <p className="text-gov-neutrals-gray600 mb-6">
        Please prepare the following documents before proceeding with your application. All documents must be valid and up to date.
      </p>
      
      <div className="space-y-4 mb-8">
        {requirements.map((requirement, index) => (
          <div 
            key={index}
            className="bg-white border border-gov-neutrals-gray200 rounded-lg p-4"
          >
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gov-green-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                <FileText className="h-5 w-5 text-gov-green" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h3 className={`font-medium ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                    {requirement.name}
                  </h3>
                  
                  {requirement.mandatory && (
                    <span className="ml-3 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                      Required
                    </span>
                  )}
                  
                  {requirement.info && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="ml-2">
                          <HelpCircle className="h-4 w-4 text-gov-neutrals-gray400" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        {requirement.info}
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
                
                <p className="text-gov-neutrals-gray600 mb-3">
                  {requirement.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                  {requirement.template && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-gov-green border-gov-green hover:bg-gov-green-50"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download Template
                    </Button>
                  )}
                  
                  {requirement.example && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-gov-neutrals-gray700 border-gov-neutrals-gray300"
                    >
                      View Example
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gov-neutrals-gray50 p-6 rounded-lg">
        <h3 className={`font-medium mb-4 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
          Document Submission Guidelines
        </h3>
        
        <ul className="list-disc list-inside space-y-2 text-gov-neutrals-gray700">
          <li>All documents must be clear and legible</li>
          <li>For online submission, please upload files in PDF or JPG format (maximum 5MB per file)</li>
          <li>For in-person submission, bring original documents and photocopies</li>
          <li>All non-English documents must have an English translation</li>
          <li>Official IDs must not be expired</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceRequirementList;
