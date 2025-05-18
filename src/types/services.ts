
export type ServiceType = 'fully-online' | 'hybrid' | 'in-person';

export interface ServiceFee {
  name: string;
  amount: number;
}

export interface ServiceRequirement {
  name: string;
  description: string;
  mandatory: boolean;
  template?: boolean;
  example?: boolean;
  info?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  mode: 'online' | 'in-person';
  isCompletion?: boolean;
  estimatedDuration?: string;
  tagalog?: string;
  note?: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  type: ServiceType;
  homeServiceEligible: boolean;
  office: string;
  contact: string;
  officeHours: string;
  processingTime: string;
  legalBasis: string;
  fees?: ServiceFee[];
  requirements: ServiceRequirement[];
  processSteps: ProcessStep[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
  services: Service[];
}
