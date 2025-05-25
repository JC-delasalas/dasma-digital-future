
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, HelpCircle } from 'lucide-react';

interface ChatAssistantProps {
  isSeniorMode: boolean;
}

const faqs = [
  {
    question: "How is the city budget allocated?",
    answer: "The city budget is allocated based on priority sectors: Education (35%), Infrastructure (25%), Healthcare (20%), Social Services (15%), and Administrative costs (5%). This allocation is determined through careful planning and community consultation."
  },
  {
    question: "Can I track specific projects?",
    answer: "Yes! You can track individual projects through our 'Follow the Money' feature. Each project shows real-time progress, spending updates, and completion timelines. Visit the Project Monitoring section for details."
  },
  {
    question: "How often is budget data updated?",
    answer: "Budget data is updated monthly, with major projects updated weekly. Real-time spending information is available for all ongoing projects through our transparent tracking system."
  },
  {
    question: "Where can I find council meeting minutes?",
    answer: "Council meeting minutes are available in the City Council Documents section. You can download meeting minutes, voting records, and view upcoming meeting agendas with live stream information."
  },
  {
    question: "How can I request budget information?",
    answer: "You can search for specific budget items using our search tool above, download reports in CSV/PDF format, or contact the City Treasury Office for detailed information requests."
  },
  {
    question: "How do I book an appointment for city services?",
    answer: "You can book appointments through our Services section. Select the service you need, choose an available time slot, and receive a confirmation with all the required documents listed."
  },
  {
    question: "What services are available online?",
    answer: "Many services are available online including permit applications, bill payments, document requests, and appointment bookings. Visit our Services page to see the full list of digital services."
  },
  {
    question: "How can I contact city offices?",
    answer: "You can contact city offices through our directory in the Services section, call our main hotline at (046) 416-5252, or visit offices during business hours Monday to Friday 8AM-5PM."
  }
];

const ChatAssistant: React.FC<ChatAssistantProps> = ({ isSeniorMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I\'m your city assistant. I can help you with budget information, city services, and answer questions about our projects. How can I assist you today?'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages(prev => [...prev, { type: 'user', text: inputText }]);
      
      // Simple FAQ matching
      const matchedFaq = faqs.find(faq => 
        faq.question.toLowerCase().includes(inputText.toLowerCase()) ||
        inputText.toLowerCase().includes(faq.question.toLowerCase().split(' ')[0]) ||
        inputText.toLowerCase().includes('service') && faq.question.toLowerCase().includes('service') ||
        inputText.toLowerCase().includes('appointment') && faq.question.toLowerCase().includes('appointment') ||
        inputText.toLowerCase().includes('contact') && faq.question.toLowerCase().includes('contact')
      );
      
      setTimeout(() => {
        if (matchedFaq) {
          setMessages(prev => [...prev, { type: 'bot', text: matchedFaq.answer }]);
        } else {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            text: 'Thank you for your question! For specific inquiries not covered in our FAQs, please contact the City Treasury Office at (046) 416-5252 or visit our office during business hours. You can also browse our FAQ section below for common questions.'
          }]);
        }
      }, 1000);
      
      setInputText('');
    }
  };

  const handleFaqClick = (faq: typeof faqs[0]) => {
    setMessages(prev => [
      ...prev,
      { type: 'user', text: faq.question },
      { type: 'bot', text: faq.answer }
    ]);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full shadow-lg transition-all duration-300 ${
            isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gov-green hover:bg-gov-green-700'
          } ${isSeniorMode ? 'w-16 h-16' : 'w-12 h-12 sm:w-14 sm:h-14'}`}
        >
          {isOpen ? (
            <X className={isSeniorMode ? 'h-8 w-8' : 'h-5 w-5 sm:h-6 sm:w-6'} />
          ) : (
            <MessageCircle className={isSeniorMode ? 'h-8 w-8' : 'h-5 w-5 sm:h-6 sm:w-6'} />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-16 right-4 sm:bottom-24 sm:right-6 bg-white rounded-lg shadow-xl border border-gray-200 z-40 transition-all duration-300 ${
          isSeniorMode 
            ? 'w-[calc(100vw-2rem)] sm:w-96 h-[70vh] sm:h-[500px]' 
            : 'w-[calc(100vw-2rem)] sm:w-80 h-[60vh] sm:h-96'
        } max-h-[80vh]`}
        >
          {/* Header */}
          <div className="bg-gov-green text-white p-3 sm:p-4 rounded-t-lg">
            <h3 className={`font-semibold ${isSeniorMode ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'}`}>
              City Assistant
            </h3>
            <p className={`${isSeniorMode ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} opacity-90`}>
              Ask me about budget, services, and projects
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 200px)' }}>
            <div className="space-y-2 sm:space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-2 sm:p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-gov-green text-white'
                        : 'bg-gray-100 text-gray-800'
                    } ${isSeniorMode ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          <div className="border-t p-2 sm:p-3">
            <h4 className={`font-medium text-gray-700 mb-2 ${isSeniorMode ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
              <HelpCircle className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Quick Questions:
            </h4>
            <div className="space-y-1 max-h-16 sm:max-h-20 overflow-y-auto">
              {faqs.slice(0, 4).map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleFaqClick(faq)}
                  className={`text-left w-full p-1 sm:p-2 hover:bg-gray-50 rounded text-gov-green hover:text-gov-green-700 transition-colors ${
                    isSeniorMode ? 'text-xs sm:text-sm' : 'text-xs'
                  } truncate`}
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t p-2 sm:p-3">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about budget, services..."
                className={`flex-1 border border-gray-300 rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-gov-green ${
                  isSeniorMode ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                }`}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-gov-green hover:bg-gov-green-700 px-2 sm:px-3"
              >
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
