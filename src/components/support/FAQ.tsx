
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  isSeniorMode: boolean;
}

const FAQ: React.FC<FAQProps> = ({ isSeniorMode }) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How do I apply for a business permit online?",
      answer: "You can apply for a business permit through our E-Services portal. Click on 'Services' in the main menu, select 'Business Permits', and follow the step-by-step process. You'll need to upload required documents and pay the applicable fees online."
    },
    {
      question: "What are the office hours for City Hall?",
      answer: "City Hall is open Monday to Friday from 8:00 AM to 5:00 PM. Some services have extended hours until 7:00 PM on weekdays. We're closed on weekends and national holidays."
    },
    {
      question: "How can I request a barangay clearance?",
      answer: "Barangay clearances can be requested online through the E-Services portal or in person at your respective barangay office. Online applications are processed within 2-3 business days."
    },
    {
      question: "How do I track my application status?",
      answer: "You can track your application status by logging into your citizen dashboard or using the tracking feature on the Services page with your reference number."
    },
    {
      question: "What payment methods are accepted for online services?",
      answer: "We accept major credit cards, debit cards, GCash, PayMaya, and online banking transfers. All payments are processed securely through our encrypted payment gateway."
    },
    {
      question: "How do I report a non-emergency issue in my area?",
      answer: "You can report non-emergency issues through this contact form, the chat assistant, or by calling our general hotline at (046) 416-HELP. For emergencies, always call 911."
    },
    {
      question: "Can I schedule an appointment with city officials?",
      answer: "Yes, appointments can be scheduled through the Directory page by contacting the respective office directly, or through the online appointment booking system available in the E-Services section."
    },
    {
      question: "Is there a mobile app for city services?",
      answer: "Yes! Our mobile app is available for download on both iOS and Android devices. You can find the download links in the footer of this website."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className={`font-bold text-gov-neutrals-gray900 mb-6 ${isSeniorMode ? 'text-3xl' : 'text-2xl'}`}>
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gov-neutrals-gray200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className={`w-full text-left p-4 flex justify-between items-center hover:bg-gov-neutrals-gray50 rounded-lg transition-colors ${isSeniorMode ? 'text-lg' : 'text-base'}`}
            >
              <span className="font-medium text-gov-neutrals-gray900 pr-4">
                {item.question}
              </span>
              {openItem === index ? (
                <ChevronUp size={20} className="text-gov-green flex-shrink-0" />
              ) : (
                <ChevronDown size={20} className="text-gov-green flex-shrink-0" />
              )}
            </button>
            
            {openItem === index && (
              <div className="px-4 pb-4">
                <p className={`text-gov-neutrals-gray600 leading-relaxed ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gov-green-50 rounded-lg">
        <p className={`text-gov-neutrals-gray700 ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
          <strong>Still need help?</strong> Our support team is available Monday-Friday, 8:00 AM - 5:00 PM. 
          Call us at <a href="tel:(046)416-HELP" className="text-gov-green hover:underline">(046) 416-HELP</a> or 
          use the live chat feature in the bottom right corner.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
