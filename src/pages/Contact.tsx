
import { useState, FormEvent } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form would submit these values:", formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-harmony-beige pt-28 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Contact Us</h1>
            <p className="text-xl text-harmony-forest">
              We're here to answer your questions and support your journey to wellness. 
              Reach out to us through any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div className="bg-harmony-beige p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-harmony-green rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Our Location</h3>
              <p className="text-harmony-forest">
                2200 Defense Highway<br />
                Suite 307<br />
                Crofton, MD 21714
              </p>
              <a 
                href="https://maps.google.com/?q=2200+Defense+Highway+Suite+307+Crofton+MD+21714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 text-harmony-green font-medium inline-block hover:underline"
              >
                Get Directions
              </a>
            </div>
            
            {/* Phone */}
            <div className="bg-harmony-beige p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-harmony-green rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Phone Numbers</h3>
              <p className="text-harmony-forest mb-2">
                Main: <a href="tel:301-494-3139" className="hover:underline">301-494-3139</a>
              </p>
              <p className="text-harmony-forest mb-2">
                Alt: <a href="tel:240-416-9057" className="hover:underline">240-416-9057</a>
              </p>
              <p className="text-harmony-forest">
                Fax: 301-444-9322
              </p>
            </div>
            
            {/* Email */}
            <div className="bg-harmony-beige p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-harmony-green rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Email Us</h3>
              <p className="text-harmony-forest mb-2">
                <a 
                  href="mailto:support@harmonyhealthwellnesscenter.org" 
                  className="hover:underline break-words"
                >
                  support@harmonyhealthwellnesscenter.org
                </a>
              </p>
              <p className="text-harmony-forest text-sm mt-4">
                We typically respond to emails within 24-48 business hours.
              </p>
            </div>
            
            {/* Hours */}
            <div className="bg-harmony-beige p-6 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto bg-harmony-green rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-2">Office Hours</h3>
              <ul className="text-harmony-forest space-y-1">
                <li>Monday: 9am - 7pm</li>
                <li>Tuesday: 9am - 7pm</li>
                <li>Wednesday: 9am - 7pm</li>
                <li>Thursday: 9am - 7pm</li>
                <li>Friday: 9am - 7pm</li>
                <li>Saturday: 10am - 2pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-harmony-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading">Send Us a Message</h2>
              <p className="mb-8">
                Have a question or need more information? Fill out the form below and we'll get 
                back to you as soon as possible. For urgent matters, please call our office directly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name*</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message*</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-harmony-green hover:bg-harmony-green-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="section-heading">Find Us</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[400px] mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.4048370284067!2d-76.79290492394009!3d38.99089334623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7eb2e7f8fff87%3A0x3b513c28778d9acc!2s2200%20Defense%20Hwy%20%23307%2C%20Crofton%2C%20MD%2021114!5e0!3m2!1sen!2sus!4v1688653839158!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harmony Health Wellness Center Location"
                />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Connect With Us</h3>
                <p className="mb-6">
                  Follow us on social media for mental health tips, resources, and updates about our services.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-harmony-green/10 hover:bg-harmony-green text-harmony-green hover:text-white rounded-full p-3 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-harmony-green/10 hover:bg-harmony-green text-harmony-green hover:text-white rounded-full p-3 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-harmony-green/10 hover:bg-harmony-green text-harmony-green hover:text-white rounded-full p-3 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-harmony-green/10 hover:bg-harmony-green text-harmony-green hover:text-white rounded-full p-3 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-harmony-beige p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Do you accept insurance?</h3>
              <p>
                Yes, we accept most major insurance plans including BlueCross BlueShield, Aetna, 
                Cigna, and Medicare. Please contact our office for verification of your specific 
                insurance coverage or to discuss self-pay options.
              </p>
            </div>
            
            <div className="bg-harmony-beige p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">How do I schedule an appointment?</h3>
              <p>
                You can schedule an appointment by calling our office at 301-494-3139, using our 
                online booking form, or sending us an email. New patients are asked to arrive 
                15 minutes before their appointment to complete intake paperwork.
              </p>
            </div>
            
            <div className="bg-harmony-beige p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">What should I bring to my first appointment?</h3>
              <p>
                Please bring your insurance card, photo ID, a list of current medications, and any 
                relevant medical records or previous mental health evaluations. If you're a minor, 
                a parent or guardian must accompany you.
              </p>
            </div>
            
            <div className="bg-harmony-beige p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">What is your cancellation policy?</h3>
              <p>
                We require 24 hours' notice for appointment cancellations. Late cancellations or 
                no-shows may be subject to a fee. We understand that emergencies happen, so please 
                contact us as soon as possible if you need to reschedule.
              </p>
            </div>
            
            <div className="bg-harmony-beige p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Do you offer telehealth services?</h3>
              <p>
                Yes, we offer secure video appointments for many of our services. Telehealth can 
                be a convenient option for follow-up appointments, therapy sessions, and some 
                evaluations. Please ask about telehealth availability for your specific needs.
              </p>
            </div>
            
            <div className="bg-harmony-beige p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">How long are the appointments?</h3>
              <p>
                Initial psychiatric evaluations typically last 60 minutes. Follow-up medication 
                management appointments are usually 15-30 minutes. Therapy sessions are typically 
                45-50 minutes. The length may vary based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
