
import React from 'react';
import { ProcessStep, ServiceType } from '../../types/services';
import { CheckCircle, Calendar, FileText, User, Clock } from 'lucide-react';

interface ServiceProcessFlowProps {
  steps: ProcessStep[];
  isSeniorMode: boolean;
  serviceType: ServiceType;
}

const ServiceProcessFlow: React.FC<ServiceProcessFlowProps> = ({ steps, isSeniorMode, serviceType }) => {
  return (
    <div>
      <h2 className={`font-semibold ${isSeniorMode ? 'text-2xl' : 'text-xl'} mb-4`}>
        Process Flow
      </h2>
      
      <div className="flex mb-6 gap-6 flex-wrap">
        <div className="inline-flex items-center">
          <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
          <span>Online Step</span>
        </div>
        <div className="inline-flex items-center">
          <span className="w-4 h-4 rounded-full bg-orange-500 mr-2"></span>
          <span>In-Person Step</span>
        </div>
        <div className="inline-flex items-center">
          <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
          <span>Completion</span>
        </div>
      </div>
      
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="mb-10 relative">
            {index < steps.length - 1 && (
              <div 
                className="absolute left-6 top-12 bottom-0 w-0.5 bg-gov-neutrals-gray200"
                style={{ height: 'calc(100% - 24px)' }}
              ></div>
            )}
            
            <div className="flex">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0
                ${step.mode === 'online' ? 'bg-blue-100 text-blue-700' : ''}
                ${step.mode === 'in-person' ? 'bg-orange-100 text-orange-700' : ''}
                ${step.isCompletion ? 'bg-green-100 text-green-700' : ''}
              `}>
                {step.isCompletion ? (
                  <CheckCircle className="h-6 w-6" />
                ) : step.mode === 'online' ? (
                  <FileText className="h-6 w-6" />
                ) : (
                  <User className="h-6 w-6" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <h3 className={`font-medium ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                    Step {index + 1}: {step.title}
                  </h3>
                  
                  {step.estimatedDuration && (
                    <div className="inline-flex items-center text-gov-neutrals-gray600 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{step.estimatedDuration}</span>
                    </div>
                  )}
                </div>
                
                <p className={`text-gov-neutrals-gray600 mb-3 ${isSeniorMode ? 'text-lg' : ''}`}>
                  {step.description}
                </p>
                
                {step.tagalog && (
                  <div className="bg-gov-neutrals-gray50 p-3 rounded-md mb-3">
                    <span className="text-sm text-gov-neutrals-gray500 block mb-1">Filipino Translation:</span>
                    <p className="text-gov-neutrals-gray700">{step.tagalog}</p>
                  </div>
                )}
                
                {step.note && (
                  <div className="bg-yellow-50 p-3 rounded-md text-gov-neutrals-gray700 text-sm">
                    <strong>Note:</strong> {step.note}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {serviceType === 'hybrid' && (
        <div className="mt-8 bg-gov-neutrals-gray50 p-6 rounded-lg">
          <h3 className={`font-medium mb-4 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Online vs In-Person Steps
          </h3>
          
          <div className="space-y-4">
            <p>
              This service requires both online and in-person interactions. The steps marked with blue can be completed online,
              while the steps marked with orange require you to visit our office.
            </p>
            
            <div>
              <h4 className="font-medium mb-2">For Online Steps:</h4>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Create an account or log in to our portal</li>
                <li>Fill out all required forms completely</li>
                <li>Upload clear scanned copies of your documents</li>
                <li>Pay applicable fees online if needed</li>
                <li>Book your appointment for the in-person steps</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">For In-Person Steps:</h4>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Bring a printout of your application reference number</li>
                <li>Bring all original documents for verification</li>
                <li>Arrive 15 minutes before your scheduled appointment</li>
                <li>Follow the guidance of our staff for any additional requirements</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceProcessFlow;
