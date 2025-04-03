
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';
import ChatbotInterface from './ChatbotInterface';

const ChatbotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <Button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 rounded-full w-14 h-14 shadow-lg bg-harmony-green hover:bg-harmony-green-dark"
        aria-label="Open chat assistant"
      >
        {isChatOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {isChatOpen && <ChatbotInterface onClose={toggleChat} />}
    </>
  );
};

export default ChatbotButton;
