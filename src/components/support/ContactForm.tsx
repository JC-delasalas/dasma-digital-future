
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ContactFormProps {
  isSeniorMode: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isSeniorMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: '',
    anonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your feedback! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      subject: '',
      message: '',
      anonymous: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className={`font-bold text-gov-neutrals-gray900 mb-6 ${isSeniorMode ? 'text-3xl' : 'text-2xl'}`}>
        Contact Us
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block font-medium text-gov-neutrals-gray700 mb-2 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={formData.anonymous}
              className={`w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gov-green ${isSeniorMode ? 'text-lg py-3' : ''} ${formData.anonymous ? 'bg-gray-100' : ''}`}
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className={`block font-medium text-gov-neutrals-gray700 mb-2 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={formData.anonymous}
              className={`w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gov-green ${isSeniorMode ? 'text-lg py-3' : ''} ${formData.anonymous ? 'bg-gray-100' : ''}`}
              placeholder="Enter your email"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block font-medium text-gov-neutrals-gray700 mb-2 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gov-green ${isSeniorMode ? 'text-lg py-3' : ''}`}
              placeholder="Enter your phone number"
            />
          </div>
          
          <div>
            <label className={`block font-medium text-gov-neutrals-gray700 mb-2 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={`w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gov-green ${isSeniorMode ? 'text-lg py-3' : ''}`}
            >
              <option value="">Select a category</option>
              <option value="general">General Inquiry</option>
              <option value="complaint">Complaint</option>
              <option value="suggestion">Suggestion</option>
              <option value="technical">Technical Support</option>
              <option value="emergency">Emergency Report</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className={`block font-medium text-gov-neutrals-gray700 mb-2 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gov-green ${isSeniorMode ? 'text-lg py-3' : ''}`}
            placeholder="Brief description of your inquiry"
          />
        </div>
        
        <div>
          <label className={`block font-medium text-gov-neutrals-gray700 mb-2 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={`w-full border border-gov-neutrals-gray300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gov-green resize-vertical ${isSeniorMode ? 'text-lg' : ''}`}
            placeholder="Please provide detailed information about your inquiry or feedback..."
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
            id="anonymous"
            className="mr-3 h-4 w-4 text-gov-green focus:ring-gov-green border-gray-300 rounded"
          />
          <label htmlFor="anonymous" className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
            Submit anonymously (name and email will not be collected)
          </label>
        </div>
        
        <Button 
          type="submit" 
          size={isSeniorMode ? "lg" : "default"}
          className="w-full bg-gov-green hover:bg-gov-green-700"
        >
          <Send size={isSeniorMode ? 24 : 20} className="mr-2" />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
