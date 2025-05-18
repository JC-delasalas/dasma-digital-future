
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, FileText, CheckCircle, Clock, MapPin, Phone, Calendar as CalendarIcon } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { serviceCategories } from '../data/serviceCategories';
import { Service, ProcessStep } from '../types/services';
import ServiceRequirementList from '../components/services/ServiceRequirementList';
import ServiceProcessFlow from '../components/services/ServiceProcessFlow';
import AppointmentBooking from '../components/services/AppointmentBooking';

const ServiceDetails: React.FC = () => {
  const { categoryId, serviceId } = useParams<{ categoryId: string, serviceId: string }>();
  const [isSeniorMode, setIsSeniorMode] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [service, setService] = useState<Service | null>(null);
  const [category, setCategory] = useState<string>('');
  
  useEffect(() => {
    if (categoryId && serviceId) {
      const foundCategory = serviceCategories.find(cat => cat.id === categoryId);
      if (foundCategory) {
        setCategory(foundCategory.name);
        const foundService = foundCategory.services.find(svc => svc.id === serviceId);
        if (foundService) {
          setService(foundService);
        }
      }
    }
  }, [categoryId, serviceId]);

  const toggleSeniorMode = () => {
    setIsSeniorMode(!isSeniorMode);
  };

  const toggleSpeech = () => {
    setIsSpeechActive(!isSpeechActive);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getServiceTypeFull = (type: string | undefined) => {
    switch(type) {
      case 'fully-online': return 'Fully Online';
      case 'hybrid': return 'Online + In-Person';
      case 'in-person': return 'In-Person Only';
      default: return '';
    }
  };

  const getServiceTypeIcon = (type: string | undefined) => {
    switch(type) {
      case 'fully-online': return <FileText className="h-8 w-8 text-green-600" />;
      case 'hybrid': return <Calendar className="h-8 w-8 text-blue-600" />;
      case 'in-person': return <MapPin className="h-8 w-8 text-orange-600" />;
      default: return null;
    }
  };

  if (!service) {
    return (
      <div className={isSeniorMode ? 'senior-mode' : ''}>
        <Header 
          isSeniorMode={isSeniorMode} 
          toggleSeniorMode={toggleSeniorMode}
          isSpeechActive={isSpeechActive}
          toggleSpeech={toggleSpeech}
          toggleMobileMenu={toggleMobileMenu}
        />
        <main className="min-h-screen bg-gov-neutrals-gray50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Service not found</h2>
            <p className="mb-6">The service you're looking for doesn't exist or has been moved.</p>
            <Link to="/services">
              <Button>Return to Services</Button>
            </Link>
          </div>
        </main>
        <Footer isSeniorMode={isSeniorMode} />
      </div>
    );
  }

  return (
    <div className={isSeniorMode ? 'senior-mode' : ''}>
      <Header 
        isSeniorMode={isSeniorMode} 
        toggleSeniorMode={toggleSeniorMode}
        isSpeechActive={isSpeechActive}
        toggleSpeech={toggleSpeech}
        toggleMobileMenu={toggleMobileMenu}
      />
      
      <main className="min-h-screen bg-gov-neutrals-gray50 pb-16">
        <div className="bg-gov-green py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-gov-neutrals-gray100 mb-4">
              <Link to="/services" className="hover:text-white">Services</Link>
              <span className="mx-2">›</span>
              <Link to={`/services/${categoryId}`} className="hover:text-white">{category}</Link>
              <span className="mx-2">›</span>
              <span className="text-white">{service.name}</span>
            </div>
            
            <h1 className={`text-white font-bold ${isSeniorMode ? 'text-5xl' : 'text-4xl'} mb-4`}>
              {service.name}
            </h1>
            
            <div className="flex items-center">
              <div className="bg-white/10 rounded-lg p-2 inline-flex items-center">
                {getServiceTypeIcon(service.type)}
                <span className="ml-2 text-white font-medium">
                  {getServiceTypeFull(service.type)}
                </span>
              </div>
              
              {service.homeServiceEligible && (
                <div className="ml-4 bg-gov-yellow/20 text-gov-yellow rounded-lg p-2 inline-flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Available for Home Visit</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-md">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-transparent border-b w-full justify-start px-6 rounded-none">
                <TabsTrigger 
                  value="details"
                  className={`${isSeniorMode ? 'text-lg' : ''} pb-4`}
                >
                  Service Details
                </TabsTrigger>
                <TabsTrigger 
                  value="requirements"
                  className={`${isSeniorMode ? 'text-lg' : ''} pb-4`}
                >
                  Requirements
                </TabsTrigger>
                <TabsTrigger 
                  value="process"
                  className={`${isSeniorMode ? 'text-lg' : ''} pb-4`}
                >
                  Process Flow
                </TabsTrigger>
                <TabsTrigger 
                  value="booking"
                  className={`${isSeniorMode ? 'text-lg' : ''} pb-4`}
                >
                  Book Appointment
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="p-6">
                <h2 className={`font-semibold ${isSeniorMode ? 'text-2xl' : 'text-xl'} mb-4`}>
                  About this Service
                </h2>
                <div className={`prose max-w-none ${isSeniorMode ? 'text-lg' : ''}`}>
                  <p className="mb-4">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gov-neutrals-gray50 p-5 rounded-lg">
                      <h3 className={`font-medium mb-3 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Service Information</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gov-neutrals-gray600 mt-0.5 mr-3" />
                          <div>
                            <span className="font-medium block">Processing Time</span>
                            <span className="text-gov-neutrals-gray600">{service.processingTime}</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <MapPin className="h-5 w-5 text-gov-neutrals-gray600 mt-0.5 mr-3" />
                          <div>
                            <span className="font-medium block">Office</span>
                            <span className="text-gov-neutrals-gray600">{service.office}</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Phone className="h-5 w-5 text-gov-neutrals-gray600 mt-0.5 mr-3" />
                          <div>
                            <span className="font-medium block">Contact</span>
                            <span className="text-gov-neutrals-gray600">{service.contact}</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CalendarIcon className="h-5 w-5 text-gov-neutrals-gray600 mt-0.5 mr-3" />
                          <div>
                            <span className="font-medium block">Office Hours</span>
                            <span className="text-gov-neutrals-gray600">{service.officeHours}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gov-neutrals-gray50 p-5 rounded-lg">
                      <h3 className={`font-medium mb-3 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Legal Basis</h3>
                      <p className="text-gov-neutrals-gray600 mb-2">{service.legalBasis}</p>
                      
                      <h3 className={`font-medium mb-3 mt-6 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Fees</h3>
                      {service.fees?.length ? (
                        <ul className="space-y-2">
                          {service.fees.map((fee, index) => (
                            <li key={index} className="flex justify-between">
                              <span>{fee.name}</span>
                              <span className="font-medium">₱{fee.amount.toFixed(2)}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gov-neutrals-gray600">No fees required</p>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="requirements" className="p-6">
                <ServiceRequirementList 
                  requirements={service.requirements} 
                  isSeniorMode={isSeniorMode} 
                />
              </TabsContent>
              
              <TabsContent value="process" className="p-6">
                <ServiceProcessFlow 
                  steps={service.processSteps} 
                  isSeniorMode={isSeniorMode}
                  serviceType={service.type}
                />
              </TabsContent>
              
              <TabsContent value="booking" className="p-6">
                <AppointmentBooking 
                  service={service}
                  isSeniorMode={isSeniorMode} 
                />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mt-8">
            <h2 className={`font-semibold ${isSeniorMode ? 'text-2xl' : 'text-xl'} mb-4`}>Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-gov-green">
                <h3 className={`font-medium mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Chat Support</h3>
                <p className="text-gov-neutrals-gray600 mb-3">Get immediate assistance through our chat service.</p>
                <Button variant="outline" className="w-full">Chat Now</Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-gov-green">
                <h3 className={`font-medium mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>Call Hotline</h3>
                <p className="text-gov-neutrals-gray600 mb-3">Speak directly with our support staff.</p>
                <Button variant="outline" className="w-full">Call (046) 123-4567</Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-gov-green">
                <h3 className={`font-medium mb-2 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>FAQ</h3>
                <p className="text-gov-neutrals-gray600 mb-3">Browse frequently asked questions about this service.</p>
                <Button variant="outline" className="w-full">View FAQs</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer isSeniorMode={isSeniorMode} />
    </div>
  );
};

export default ServiceDetails;
