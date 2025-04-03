
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img 
            src="/lovable-uploads/0080d315-b05f-4f0f-ac48-9672db280e3c.png"
            alt="Harmony Health Wellness Center" 
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "font-medium transition-colors",
              isActive('/') 
                ? "text-harmony-green" 
                : "text-harmony-forest hover:text-harmony-green"
            )}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "font-medium transition-colors",
              isActive('/about') 
                ? "text-harmony-green" 
                : "text-harmony-forest hover:text-harmony-green"
            )}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={cn(
              "font-medium transition-colors",
              isActive('/services') 
                ? "text-harmony-green" 
                : "text-harmony-forest hover:text-harmony-green"
            )}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "font-medium transition-colors",
              isActive('/contact') 
                ? "text-harmony-green" 
                : "text-harmony-forest hover:text-harmony-green"
            )}
          >
            Contact
          </Link>
          <Link 
            to="/appointment" 
            className="btn-primary"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-harmony-forest" />
          ) : (
            <Menu className="h-6 w-6 text-harmony-forest" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 pt-20">
            <nav className="flex flex-col items-center space-y-6 p-4">
              <Link 
                to="/" 
                className={cn(
                  "text-lg font-medium",
                  isActive('/') ? "text-harmony-green" : "text-harmony-forest"
                )}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "text-lg font-medium",
                  isActive('/about') ? "text-harmony-green" : "text-harmony-forest"
                )}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={cn(
                  "text-lg font-medium",
                  isActive('/services') ? "text-harmony-green" : "text-harmony-forest"
                )}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={cn(
                  "text-lg font-medium",
                  isActive('/contact') ? "text-harmony-green" : "text-harmony-forest"
                )}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link 
                to="/appointment" 
                className="btn-primary w-full text-center"
                onClick={closeMenu}
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
