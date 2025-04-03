import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, HeartPulse, Brain, Users, Leaf, Award, Clock, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion } from 'framer-motion';
import HealingTree from '@/components/animations/HealingTree';

const Home = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.scroll-animate').forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      document.querySelectorAll('.scroll-animate').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (isScrolling || !testimonialsRef.current) return;
    
    setIsScrolling(true);
    const scrollAmount = direction === 'left' ? -350 : 350;
    testimonialsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    
    setTimeout(() => setIsScrolling(false), 500);
  };

  const MotionLink = motion(Link);
  
  return (
    <>
      <section className="relative bg-gradient-to-br from-harmony-green to-harmony-green-dark text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
          className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6 max-w-lg">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight"
            >
              Discover the Strength & Resilience Within You
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl opacity-90"
            >
              At Harmony Health Wellness Center, we are dedicated to illuminating the path toward mental and emotional well-being.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <MotionLink 
                to="/appointment" 
                className="bg-white text-harmony-forest py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition-all text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Book Appointment
              </MotionLink>
              <MotionLink 
                to="/services" 
                className="bg-harmony-gold text-harmony-forest py-3 px-6 rounded-md font-medium hover:bg-harmony-gold-dark transition-all text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Our Services
              </MotionLink>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-harmony-gold/30 rounded-2xl blur-xl transform rotate-3"></div>
              <img 
                src="/lovable-uploads/0080d315-b05f-4f0f-ac48-9672db280e3c.png" 
                alt="Harmony Health" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-harmony-beige to-transparent"></div>
      </section>

      <section className="section-padding bg-harmony-beige overflow-hidden">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading-center"
          >
            Our Healing Approach
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-12 text-lg"
          >
            Like a tree that grows and flourishes, our holistic approach nurtures your mental wellness
            from the roots up, creating a strong foundation for lasting health.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-square max-w-md mx-auto">
                <HealingTree className="w-full h-full" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h3 className="text-2xl font-serif font-medium">Growth & Resilience</h3>
              <p className="text-gray-700">
                Just as a tree grows stronger through challenges, our therapeutic approaches help you 
                develop resilience and inner strength to face life's difficulties.
              </p>
              
              <h3 className="text-2xl font-serif font-medium">Deep Roots, Strong Support</h3>
              <p className="text-gray-700">
                We believe in addressing the root causes of mental health challenges, not just treating symptoms.
                Our comprehensive approach creates a strong foundation for lasting wellness.
              </p>
              
              <h3 className="text-2xl font-serif font-medium">Flourishing Together</h3>
              <p className="text-gray-700">
                In the nurturing environment of Harmony Health, you'll find the support, guidance, and 
                tools needed to heal, grow, and flourish into your full potential.
              </p>
              
              <MotionLink 
                to="/services" 
                className="bg-harmony-green text-white py-3 px-6 rounded-md font-medium hover:bg-harmony-green-dark transition-colors inline-block shadow-lg hover:shadow-xl mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Approach
              </MotionLink>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading-center"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-12 text-lg"
          >
            We provide comprehensive behavioral health services that inspire hope, 
            foster resilience, and promote holistic healing.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Psychiatric Services",
                description: "Comprehensive psychiatric evaluations, medication management, and ongoing treatment for a wide range of mental health conditions.",
                link: "/services#psychiatric",
                details: "Our board-certified psychiatrists provide specialized care for conditions including depression, anxiety, bipolar disorder, ADHD, and more. We focus on evidence-based approaches and personalized treatment plans."
              },
              {
                icon: Users,
                title: "Psychotherapy",
                description: "Individual and group therapy sessions focused on addressing emotional challenges and developing healthy coping mechanisms.",
                link: "/services#psychotherapy",
                details: "Our therapeutic approaches include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Mindfulness-Based Therapy, and more. Sessions are available both in-person and via telehealth."
              },
              {
                icon: HeartPulse,
                title: "Substance Abuse Treatment",
                description: "Specialized programs for substance abuse recovery, including therapy, medical management, and ongoing support.",
                link: "/services#substance",
                details: "Our comprehensive approach addresses the physical, psychological, and social aspects of addiction. We offer detoxification support, rehabilitation programs, and long-term recovery maintenance."
              },
              {
                icon: Leaf,
                title: "Child & Adolescent Services",
                description: "Age-appropriate mental health care for children and teenagers, addressing developmental and emotional needs.",
                link: "/services#child",
                details: "Our child specialists provide gentle, age-appropriate care for issues such as anxiety, depression, behavioral problems, ADHD, autism spectrum disorders, and family adjustment challenges."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="card-service group relative"
              >
                <Collapsible 
                  open={selectedService === index}
                  onOpenChange={() => setSelectedService(selectedService === index ? null : index)}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="w-12 h-12 bg-harmony-green/10 rounded-lg flex items-center justify-center group-hover:bg-harmony-green/20 transition-colors">
                      <service.icon className="text-harmony-green h-6 w-6" />
                    </div>
                    <CollapsibleTrigger asChild>
                      <button className="w-8 h-8 rounded-full bg-harmony-green/10 flex items-center justify-center text-harmony-green hover:bg-harmony-green/20 transition-colors">
                        {selectedService === index ? "-" : "+"}
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <CollapsibleContent className="pb-4">
                    <div className="bg-harmony-green/5 p-4 rounded-lg mb-4">
                      <p className="text-gray-700">{service.details}</p>
                    </div>
                  </CollapsibleContent>
                  <Link to={service.link} className="text-harmony-green font-medium flex items-center hover:underline">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Collapsible>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:col-span-2 lg:col-span-1 flex items-center justify-center"
            >
              <MotionLink 
                to="/services" 
                className="btn-outline flex items-center space-x-2 px-8"
                whileHover={{ scale: 1.05, backgroundColor: "#527f22", color: "white" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Services</span>
                <ArrowRight className="h-4 w-4" />
              </MotionLink>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading-center"
          >
            Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-6 text-lg"
          >
            Hear from individuals who have transformed their lives through our care
          </motion.p>
          
          <div className="relative">
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="h-6 w-6 transform rotate-180 text-harmony-green" />
            </button>
            
            <div 
              ref={testimonialsRef}
              className="flex overflow-x-auto scroll-smooth gap-6 py-8 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                {
                  name: "Sarah J.",
                  role: "Therapy Client",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  quote: "The compassionate care I received at Harmony Health has completely transformed my approach to managing anxiety. I've developed coping skills that have changed my life."
                },
                {
                  name: "Michael T.",
                  role: "Recovery Program",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  quote: "After struggling with addiction for years, the team at Harmony Health provided the structured support and guidance I needed to reclaim my life and rebuild relationships."
                },
                {
                  name: "Rebecca L.",
                  role: "Parent of Child Client",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                  quote: "The child specialists helped our daughter navigate her anxiety with such compassion. We've seen remarkable improvements in her confidence and happiness."
                },
                {
                  name: "David K.",
                  role: "Psychiatric Services",
                  image: "https://randomuser.me/api/portraits/men/56.jpg",
                  quote: "Finding the right medication balance was a journey, but the psychiatrists here were patient and persistent. For the first time in decades, I feel stable and hopeful."
                },
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-harmony-beige to-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-harmony-gold"
                    />
                    <div>
                      <h4 className="font-medium text-harmony-forest">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </motion.div>
              ))}
            </div>
            
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-harmony-green" />
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-harmony-forest text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0">
              <h2 className="section-heading text-white">Our Mission</h2>
              <p className="text-lg mb-6">
                Our mission is to illuminate the path to mental and emotional well-being, empowering individuals 
                to embrace their true potential and lead fulfilling lives.
              </p>
              <p className="mb-8">
                We are dedicated to providing compassionate and comprehensive behavioral health services that 
                inspire hope, foster resilience, and promote holistic healing. We support your journey toward 
                a brighter, more balanced future with an optimistic outlook, believing in every individual's 
                inherent strength and resilience.
              </p>
              <MotionLink 
                to="/about" 
                className="bg-harmony-gold text-harmony-forest py-3 px-6 rounded-md font-medium hover:bg-harmony-gold-dark transition-colors inline-block shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </MotionLink>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: "Expert Care",
                  description: "Board-certified professionals with extensive experience in behavioral health."
                },
                {
                  icon: Users,
                  title: "Personalized Approach",
                  description: "Treatment plans tailored to your unique needs and circumstances."
                },
                {
                  icon: HeartPulse,
                  title: "Holistic Healing",
                  description: "Addressing the physical, emotional, and social aspects of mental health."
                },
                {
                  icon: Clock,
                  title: "Ongoing Support",
                  description: "Continuous care and resources for your mental wellness journey."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  whileHover={{ y: -5, backgroundColor: "#1a563e" }}
                  className="bg-harmony-forest-light p-6 rounded-lg shadow-md border border-white/10 transition-all"
                >
                  <feature.icon className="h-10 w-10 text-harmony-gold mb-4" />
                  <h3 className="text-xl font-serif font-medium mb-2">{feature.title}</h3>
                  <p className="text-white/80">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading-center"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            At Harmony Health & Wellness Center, we are more than just a service provider
            — we are your trusted partner in mental well-being.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Care",
                description: "Our team provides a full spectrum of mental health services under one roof."
              },
              {
                title: "Compassionate Team",
                description: "Our professionals are dedicated to supporting, uplifting, and guiding you."
              },
              {
                title: "Evidence-Based Practices",
                description: "We utilize proven therapeutic approaches tailored to your specific needs."
              },
              {
                title: "Inclusive Environment",
                description: "We welcome all individuals regardless of background or identity."
              },
              {
                title: "Flexible Scheduling",
                description: "Evening and weekend appointments available to accommodate busy lives."
              },
              {
                title: "Insurance Accepted",
                description: "We work with most major insurance plans to make care accessible."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 12px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderColor: "#527f22"
                }}
                className="p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-300"
              >
                <Check className="h-8 w-8 text-harmony-green mb-4" />
                <h3 className="text-xl font-serif font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-harmony-green to-harmony-green-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container-custom text-center relative z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-serif font-semibold mb-6"
          >
            Take the First Step Toward Healing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto mb-8"
          >
            Your journey to mental wellness begins with a single step. 
            We're here to walk alongside you every step of the way.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <MotionLink 
              to="/appointment" 
              className="bg-white text-harmony-forest py-3 px-8 rounded-md font-medium hover:bg-opacity-90 transition-all text-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book an Appointment
            </MotionLink>
            <MotionLink 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-medium hover:bg-white/10 transition-all text-center"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </MotionLink>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
