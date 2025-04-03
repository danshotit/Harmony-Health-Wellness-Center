
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotInterfaceProps {
  onClose: () => void;
}

// Predefined responses for the demo chatbot
const botResponses = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello! Welcome to Harmony Health Wellness Center. How can I assist you today?"
  },
  {
    keywords: ["appointment", "schedule", "book"],
    response: "I'd be happy to help you schedule an appointment. You can book directly through our appointment page or call us at 301-494-3139. Would you like me to guide you to our online booking form?"
  },
  {
    keywords: ["services", "offer", "provide", "help with"],
    response: "We offer a range of mental health services including psychiatric evaluations, medication management, individual and group therapy, substance abuse treatment, and specialized services for children, adolescents, and older adults. Which service are you interested in learning more about?"
  },
  {
    keywords: ["location", "address", "where", "find"],
    response: "Our center is located at 2200 Defense Highway, Suite 307, Crofton, MD 21714. We're open Monday-Friday from 9AM to 7PM and Saturday from 10AM to 2PM. Would you like directions?"
  },
  {
    keywords: ["insurance", "covered", "payment", "cost", "price"],
    response: "We accept most major insurance plans including BlueCross BlueShield, Aetna, Cigna, and Medicare. For specific questions about coverage or self-pay options, please contact our office at 301-494-3139."
  },
  {
    keywords: ["therapist", "psychiatrist", "doctor", "provider"],
    response: "Our team consists of licensed psychiatrists, psychologists, and therapists specializing in various areas of mental health. All providers are board-certified with extensive experience in their fields. Would you like to know more about a specific provider or specialty?"
  },
  {
    keywords: ["emergency", "crisis", "urgent", "suicide", "harm"],
    response: "If you're experiencing a mental health emergency or crisis, please call 988 (National Suicide Prevention Lifeline) or go to your nearest emergency room immediately. Our office can provide follow-up care once the immediate crisis is addressed."
  }
];

// Fallback responses when no keywords match
const fallbackResponses = [
  "I appreciate your question. For more detailed information, please call our office at 301-494-3139 or email us at support@harmonyhealthwellnesscenter.org.",
  "Thank you for reaching out. That's a great question that might require more personalized attention. Would you like to schedule a consultation with one of our providers?",
  "I understand you're looking for information. To better assist you, it might be helpful to speak directly with our staff. Would you like me to provide contact information?",
  "Thank you for your message. For the most accurate and personalized response, I recommend contacting our office directly at 301-494-3139."
];

const ChatbotInterface = ({ onClose }: ChatbotInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your virtual assistant at Harmony Health Wellness Center. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate bot thinking and generate response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };
  
  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for keyword matches
    for (const item of botResponses) {
      if (item.keywords.some(keyword => input.includes(keyword))) {
        return item.response;
      }
    }
    
    // Return a random fallback response if no keywords match
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  };
  
  return (
    <div className="fixed bottom-24 right-5 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 z-50">
      {/* Chat header */}
      <div className="bg-harmony-green px-4 py-3 text-white">
        <h3 className="font-medium">Harmony Health Assistant</h3>
        <p className="text-xs text-white/80">Ask me anything about our services</p>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map(message => (
          <div
            key={message.id}
            className={cn(
              "max-w-[80%] rounded-lg p-3 mb-3",
              message.isBot 
                ? "bg-white text-gray-800 shadow-sm ml-0" 
                : "bg-harmony-green text-white mr-0 ml-auto"
            )}
          >
            <p>{message.content}</p>
            <p className="text-xs mt-1 opacity-70">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        ))}
        
        {isTyping && (
          <div className="bg-white max-w-[80%] rounded-lg p-3 mb-3 shadow-sm">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-harmony-green animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-harmony-green animate-bounce delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-harmony-green animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat input */}
      <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button 
            type="submit" 
            size="icon"
            className="bg-harmony-green hover:bg-harmony-green-dark"
            disabled={isTyping || !inputMessage.trim()}
          >
            {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          This is a demo assistant. For urgent matters, please call us directly.
        </p>
      </form>
    </div>
  );
};

export default ChatbotInterface;
