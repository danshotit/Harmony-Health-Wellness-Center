
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotButton from '../chatbot/ChatbotButton';
import { TooltipProvider } from '@/components/ui/tooltip';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        
        {/* Background element */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{ 
            backgroundImage: 'linear-gradient(135deg, #527f22 0%, #77a845 50%, #c9b16b 100%)',
            opacity: 0.15
          }}
        />
        
        {/* Background pattern overlay */}
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23527f22' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <main className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        
        <ChatbotButton />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
