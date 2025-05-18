
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, User, Users } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Service } from '../../types/services';
import { format } from 'date-fns';

interface AppointmentBookingProps {
  service: Service;
  isSeniorMode: boolean;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ service, isSeniorMode }) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [bookingType, setBookingType] = useState<'self' | 'representative'>('self');
  const [isHomeSevice, setIsHomeSevice] = useState(false);
  const [prioritySelection, setPrioritySelection] = useState<string | null>(null);

  // Mock time slots
  const morningSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
  const afternoonSlots = ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'];

  const priorityOptions = [
    { id: 'senior', label: 'Senior Citizen' },
    { id: 'pwd', label: 'Person with Disability (PWD)' },
    { id: 'pregnant', label: 'Pregnant' },
  ];

  return (
    <div>
      <h2 className={`font-semibold ${isSeniorMode ? 'text-2xl' : 'text-xl'} mb-4`}>
        Book an Appointment
      </h2>
      
      <p className="text-gov-neutrals-gray600 mb-6">
        Schedule an appointment for this service. You will receive a confirmation via SMS and email.
      </p>
      
      <Tabs defaultValue="self" onValueChange={(value) => setBookingType(value as 'self' | 'representative')}>
        <TabsList className="mb-6">
          <TabsTrigger value="self">Book for Myself</TabsTrigger>
          <TabsTrigger value="representative">Book for Someone Else</TabsTrigger>
        </TabsList>
        
        <TabsContent value="self">
          <p className="mb-4">You are booking this appointment for yourself.</p>
        </TabsContent>
        
        <TabsContent value="representative">
          <div className="bg-gov-yellow-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium mb-2 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Representative Booking
            </h3>
            <p className="mb-4">
              You are booking on behalf of someone else. Please be prepared to provide their information and your authorization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Representative Full Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2" 
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Relationship to Applicant</label>
                <select className="w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2">
                  <option value="">Select relationship</option>
                  <option value="family">Family Member</option>
                  <option value="caregiver">Caregiver</option>
                  <option value="authorized">Authorized Representative</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Applicant Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2" 
                  placeholder="Applicant's full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Number</label>
                <input 
                  type="text" 
                  className="w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2" 
                  placeholder="Applicant's contact number"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {service.homeServiceEligible && (
        <div className="mb-6 flex items-start">
          <Checkbox 
            id="homeService" 
            checked={isHomeSevice}
            onCheckedChange={(checked) => setIsHomeSevice(checked === true)}
            className="mr-2 mt-1"
          />
          <div>
            <label 
              htmlFor="homeService" 
              className={`font-medium block ${isSeniorMode ? 'text-lg' : ''}`}
            >
              Request Home Service
            </label>
            <p className="text-gov-neutrals-gray600 text-sm">
              This service is eligible for home visits for seniors and PWDs.
              Additional documentation may be required.
            </p>
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`font-medium mb-3 ${isSeniorMode ? 'text-lg' : ''}`}>Priority Status</h3>
        <p className="mb-3 text-sm text-gov-neutrals-gray600">
          Select if any of these apply to you for priority scheduling:
        </p>
        
        <div className="space-y-2">
          {priorityOptions.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="radio"
                id={option.id}
                name="priority"
                className="mr-2"
                checked={prioritySelection === option.id}
                onChange={() => setPrioritySelection(option.id)}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className={`font-medium mb-3 ${isSeniorMode ? 'text-lg' : ''}`}>
            <CalendarIcon className="inline-block mr-2" />
            Select Date
          </h3>
          <div className="border border-gov-neutrals-gray200 rounded-lg p-1">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => {
                // Disable weekends and past dates
                const day = date.getDay();
                return date < new Date() || day === 0 || day === 6;
              }}
              className="rounded-md"
            />
          </div>
        </div>
        
        <div>
          <h3 className={`font-medium mb-3 ${isSeniorMode ? 'text-lg' : ''}`}>
            <Clock className="inline-block mr-2" />
            Select Time
          </h3>
          
          {!date ? (
            <div className="border border-gov-neutrals-gray200 rounded-lg p-6 h-full flex items-center justify-center bg-gov-neutrals-gray50">
              <p className="text-gov-neutrals-gray500 text-center">
                Please select a date first to view available time slots
              </p>
            </div>
          ) : (
            <div className="border border-gov-neutrals-gray200 rounded-lg p-4">
              <p className="mb-3 text-sm font-medium">
                Available slots for {format(date, 'EEEE, MMMM d, yyyy')}:
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Morning</h4>
                <div className="grid grid-cols-3 gap-2">
                  {morningSlots.map((slot) => (
                    <button
                      key={slot}
                      className={`py-2 px-3 text-sm rounded-md transition-colors ${
                        timeSlot === slot 
                          ? 'bg-gov-green text-white' 
                          : 'bg-gov-neutrals-gray100 hover:bg-gov-neutrals-gray200'
                      }`}
                      onClick={() => setTimeSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Afternoon</h4>
                <div className="grid grid-cols-3 gap-2">
                  {afternoonSlots.map((slot) => (
                    <button
                      key={slot}
                      className={`py-2 px-3 text-sm rounded-md transition-colors ${
                        timeSlot === slot 
                          ? 'bg-gov-green text-white' 
                          : 'bg-gov-neutrals-gray100 hover:bg-gov-neutrals-gray200'
                      }`}
                      onClick={() => setTimeSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {date && timeSlot && (
        <div className="mb-8">
          <h3 className={`font-medium mb-3 ${isSeniorMode ? 'text-lg' : ''}`}>Appointment Details</h3>
          <div className="bg-gov-neutrals-gray50 p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <CalendarIcon className="h-10 w-10 text-gov-green" />
              </div>
              
              <div className="flex-1">
                <p className="text-lg font-medium">
                  {format(date, 'EEEE, MMMM d, yyyy')} at {timeSlot}
                </p>
                <p className="text-gov-neutrals-gray600">
                  {service.office} • {service.name}
                </p>
              </div>
              
              <div className="ml-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setDate(undefined);
                    setTimeSlot('');
                  }}
                >
                  Change
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg border border-gov-neutrals-gray200 p-6">
        <h3 className={`font-medium mb-3 ${isSeniorMode ? 'text-lg' : ''}`}>Additional Information</h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Special Requests or Accommodations</label>
          <textarea 
            className="w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2 h-24" 
            placeholder="Enter any special requirements or accommodations you need..."
          ></textarea>
        </div>
        
        <div className="mb-6 flex items-start">
          <Checkbox 
            id="reminders" 
            defaultChecked={true}
            className="mr-2 mt-1"
          />
          <div>
            <label htmlFor="reminders" className="font-medium block">Send Reminders</label>
            <p className="text-gov-neutrals-gray600 text-sm">
              Receive SMS and email reminders 24 hours before your appointment.
            </p>
          </div>
        </div>
        
        <div className="mb-6 flex items-start">
          <Checkbox 
            id="terms" 
            className="mr-2 mt-1"
          />
          <div>
            <label htmlFor="terms" className="font-medium block">I agree to the Terms and Conditions</label>
            <p className="text-gov-neutrals-gray600 text-sm">
              I confirm that all information provided is accurate and complete.
              I understand that failure to arrive on time may result in rescheduling.
            </p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button className="bg-gov-green hover:bg-gov-green-700" size="lg">
            Confirm Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
