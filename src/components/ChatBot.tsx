import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = ({ onBookNow }: { onBookNow?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to Sadeedesh Beach Resort. How can I assist you with your beachfront getaway today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = {
    greeting: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    booking: ['book', 'reservation', 'reserve', 'availability', 'room', 'stay'],
    pricing: ['price', 'cost', 'rate', 'fee', 'charge', 'expensive', 'cheap'],
    amenities: ['facilities', 'amenities', 'services', 'spa', 'gym', 'pool', 'wifi', 'parking'],
    location: ['location', 'address', 'where', 'directions', 'map'],
    contact: ['contact', 'phone', 'email', 'call', 'reach']
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (botResponses.greeting.some(word => message.includes(word))) {
      return "Hello! I'm here to help you with Sadeedesh Beach Resort. You can ask me about beachfront rooms, resort amenities, pricing, or make a booking!";
    }
    
    if (botResponses.booking.some(word => message.includes(word))) {
      // Trigger booking page after response
      setTimeout(() => {
        if (onBookNow) {
          onBookNow();
          setIsOpen(false);
        }
      }, 2000);
      return "I'd be happy to help you with booking at Sadeedesh Beach Resort! Let me redirect you to our booking page where you can select your beachfront stay dates, room type, and resort facilities.";
    }
    
    if (botResponses.pricing.some(word => message.includes(word))) {
      return "Sadeedesh Beach Resort room rates are: Beach Garden Retreat ($149), Ocean View Twin ($199), Beachfront Suite ($229), Oceanfront King Suite ($299), Beach Family Villa ($349), and Royal Beach Penthouse ($599). All rates are per night.";
    }
    
    if (botResponses.amenities.some(word => message.includes(word))) {
      return "Sadeedesh Beach Resort offers premium beachfront amenities including: Free WiFi, Beachside Spa & Wellness center, Ocean-view Fitness gym, Fine dining restaurants, Beach activities, Valet parking, and 24/7 concierge service. What specific amenity interests you?";
    }
    
    if (botResponses.location.some(word => message.includes(word))) {
      return "Sadeedesh Beach Resort is located at 123 Beachfront Boulevard, Coastal Paradise. We're right on the beach with complimentary valet parking for all guests.";
    }
    
    if (botResponses.contact.some(word => message.includes(word))) {
      return "You can reach us at +1 (555) 123-4567 or email reservations@grandvistahotel.com. Our reception is available 24/7 for your convenience.";
    }
    
    return "I'd be happy to help you with Sadeedesh Beach Resort! You can ask me about beachfront room bookings, pricing, resort amenities, location, or contact information. What would you like to know about your beach getaway?";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        data-chat-toggle
        className="fixed bottom-6 left-6 bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-linear-to-r from-orange-500 to-pink-500 text-white p-4 rounded-t-2xl flex items-center gap-3">
            <Bot size={24} />
            <div>
              <h3 className="font-semibold resort-logo">Sadeedesh Beach Resort</h3>
              <p className="text-xs text-orange-100">Online now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' ? 'bg-linear-to-r from-orange-500 to-pink-500' : 'bg-gray-200'
                  }`}>
                    {message.sender === 'user' ? 
                      <User size={16} className="text-white" /> : 
                      <Bot size={16} className="text-gray-600" />
                    }
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-linear-to-r from-orange-500 to-pink-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot size={16} className="text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-200 outline-none text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;