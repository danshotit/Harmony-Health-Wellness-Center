
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-harmony-forest text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/0080d315-b05f-4f0f-ac48-9672db280e3c.png" 
                alt="Harmony Health Wellness Center" 
                className="h-14 mr-2"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to illuminating the path toward mental and emotional well-being. 
              We provide comprehensive behavioral health services that inspire hope, 
              foster resilience, and promote holistic healing.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-harmony-green rounded-full p-2 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-harmony-green rounded-full p-2 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-harmony-green rounded-full p-2 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-harmony-green rounded-full p-2 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#psychiatric" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Psychiatric Services
                </Link>
              </li>
              <li>
                <Link to="/services#psychotherapy" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Psychotherapy
                </Link>
              </li>
              <li>
                <Link to="/services#substance" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Substance Abuse Treatment
                </Link>
              </li>
              <li>
                <Link to="/services#child" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Child & Adolescent Services
                </Link>
              </li>
              <li>
                <Link to="/services#geriatric" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Geriatric Psychiatry
                </Link>
              </li>
              <li>
                <Link to="/services#medmanagement" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Medication Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mt-1 mr-3 text-harmony-gold" size={18} />
                <span>2200 Defense Highway, Suite 307<br />Crofton, MD 21714</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-harmony-gold" size={18} />
                <span>301-494-3139</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-harmony-gold" size={18} />
                <span>240-416-9057</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-harmony-gold" size={18} />
                <a href="mailto:support@harmonyhealthwellnesscenter.org" className="hover:underline">
                  support@harmonyhealthwellnesscenter.org
                </a>
              </li>
              <li className="flex">
                <Clock className="mt-1 mr-3 text-harmony-gold" size={18} />
                <div>
                  <p>Monday - Friday: 9am - 7pm</p>
                  <p>Saturday: 10am - 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>© {currentYear} Harmony Health Wellness Center. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white mr-4">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
