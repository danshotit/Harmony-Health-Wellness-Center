
import { Link } from 'react-router-dom';
import { Users, Award, Heart, Target, Clock, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-harmony-beige pt-28 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">About Us</h1>
            <p className="text-xl text-harmony-forest">
              At Harmony Health Wellness Center, we are more than just a behavioral health service provider
              — we are a beacon of hope dedicated to illuminating the path toward mental and emotional well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <p className="mb-4 text-lg">
                Harmony Health Wellness Center was founded with a simple yet powerful vision: to create a 
                space where individuals could find comprehensive, compassionate care for their mental and 
                emotional health needs.
              </p>
              <p className="mb-4">
                Our team of dedicated professionals recognized a growing need for integrated behavioral health 
                services that addressed the full spectrum of mental wellness—from medication management to 
                psychotherapy, substance abuse treatment, and beyond.
              </p>
              <p>
                Since our founding, we have been committed to providing evidence-based care in a warm, 
                welcoming environment where every individual is treated with dignity and respect. 
                We believe in the resilience of the human spirit and the transformative power of proper support 
                and guidance on the journey to wellness.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
                  alt="Harmony Health Wellness Center" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-harmony-gold p-6 rounded-lg shadow-lg">
                <p className="text-harmony-forest font-serif font-medium text-xl">
                  "Guiding you toward a life of balance and resilience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-harmony-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-harmony-green/10 rounded-full flex items-center justify-center mr-4">
                  <Target className="text-harmony-green h-6 w-6" />
                </div>
                <h2 className="text-2xl font-serif font-medium">Our Mission</h2>
              </div>
              <p className="mb-4">
                Our mission is to create a safe and nurturing environment where clients can embark on a 
                transformative journey of self-discovery and growth.
              </p>
              <p>
                We are dedicated to providing compassionate and comprehensive behavioral health services 
                that inspire hope, foster resilience, and promote holistic healing. We support your journey 
                toward a brighter, more balanced future with an optimistic outlook, believing in every 
                individual's inherent strength and resilience.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-harmony-green/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-harmony-green h-6 w-6" />
                </div>
                <h2 className="text-2xl font-serif font-medium">Our Values</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p><strong>Compassion:</strong> We approach every individual with empathy, understanding, and genuine care.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p><strong>Excellence:</strong> We are committed to providing the highest quality of evidence-based care.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p><strong>Respect:</strong> We honor the dignity, uniqueness, and autonomy of each person we serve.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p><strong>Integrity:</strong> We maintain the highest ethical standards in all our practices and interactions.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p><strong>Growth:</strong> We believe in the capacity for positive change and personal development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading-center">Our Team</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Our team of compassionate professionals is here to guide you on your transformative journey of healing, growth, and self-discovery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="aspect-w-3 aspect-h-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Dr. Sarah Johnson" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-medium">Dr. Sarah Johnson</h3>
                    <p className="text-white/80">Medical Director, Psychiatrist</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Dr. Johnson specializes in adult psychiatry with over 15 years of experience treating mood disorders, 
                  anxiety, and PTSD. She takes a holistic approach to mental health treatment.
                </p>
                <p className="text-harmony-green font-medium">Education: MD, Harvard Medical School</p>
              </div>
            </div>
            
             Team Member 2 
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="aspect-w-3 aspect-h-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" 
                  alt="Dr. Michael Davis" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-medium">Dr. Michael Davis</h3>
                    <p className="text-white/80">Child & Adolescent Psychiatrist</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Dr. Davis is dedicated to helping children and adolescents navigate mental health challenges. 
                  He specializes in ADHD, autism spectrum disorders, and childhood anxiety.
                </p>
                <p className="text-harmony-green font-medium">Education: MD, Johns Hopkins University</p>
              </div>
            </div>
            
             Team Member 3 
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="aspect-w-3 aspect-h-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                  alt="Jennifer Rodriguez" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-medium">Jennifer Rodriguez, LCSW</h3>
                    <p className="text-white/80">Lead Therapist</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Jennifer is an experienced therapist specializing in cognitive-behavioral therapy, trauma-informed care, 
                  and family therapy. She creates a warm, supportive environment for healing.
                </p>
                <p className="text-harmony-green font-medium">Education: MSW, University of Maryland</p>
              </div>
            </div>
            
             Team Member 4 
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="aspect-w-3 aspect-h-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="Dr. James Wilson" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-medium">Dr. James Wilson</h3>
                    <p className="text-white/80">Addiction Specialist</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Dr. Wilson brings over a decade of experience in addiction medicine, helping individuals overcome 
                  substance use disorders through evidence-based approaches and compassionate care.
                </p>
                <p className="text-harmony-green font-medium">Education: MD, Yale School of Medicine</p>
              </div>
            </div>*/}
            
            {/* Team Member 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="aspect-w-3 aspect-h-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Dr. Virginia W. Kamau, DNP, PMHNP-BC" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-medium">Dr. Virginia W. Kamau, DNP, PMHNP-BC</h3>
                    <p className="text-white/80">Psychiatric Mental Health Nurse Practitioner</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Dr. Kamau is currently board certified in Psychiatric Mental Health Nurse Practitioner (PMHNP) for over 3 years. Experience ranges from child and adult care in an outpatient clinic addressing mental health crisis stabilization and substance abuse treatment. 
                </p>
                <p className="text-harmony-green font-medium">Education: Dr. Kamau received her Bachelor of Science in Nursing at Shenandoah University in Virginia </p>
              </div>
            </div>
            
            {/* Team Member 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="aspect-w-3 aspect-h-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Dr. Maseray Bayoh, DNP, APRN, PMHNP-BC" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-medium">Dr. Maseray Bayoh, DNP, APRN, PMHNP-BC</h3>
                    <p className="text-white/80">Psychiatric Nurse Practitioner</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                Dr. Maseray Bayoh is an accomplished Psychiatric Nurse Practitioner with extensive experience in psychiatric and geriatric care. Known for her exceptional clinical expertise, leadership, and dedication to patient-centered care, she has made significant contributions across various healthcare settings.
                </p>
                <p className="text-harmony-green font-medium"> Education: Dr. Bayoh earned her Doctor of Nursing Practice (DNP) from Walden University in 2024, building upon a strong academic foundation that includes a Master of Science in Nursing from the same institution and a Bachelor of Science in Nursing from Chamberlain University. Her nursing journey began with an Associate Degree in Nursing from Howard Community College.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-harmony-beige">
        <div className="container-custom">
          <h2 className="section-heading-center">What Our Clients Say</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Read about the experiences of individuals who have found hope and healing at Harmony Health Wellness Center.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-harmony-gold h-6 w-6 mr-2" />
                <h3 className="text-lg font-medium">Life-Changing Support</h3>
              </div>
              <p className="mb-4 text-gray-600 italic">
                "The team at Harmony Health has been instrumental in my recovery journey. 
                Their compassionate approach and expertise helped me overcome challenges I've 
                struggled with for years. I'm forever grateful."
              </p>
              <p className="font-medium">— Sarah T.</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-harmony-gold h-6 w-6 mr-2" />
                <h3 className="text-lg font-medium">Exceptional Care</h3>
              </div>
              <p className="mb-4 text-gray-600 italic">
                "After years of struggling to find the right help for my son, we found Harmony Health. 
                Dr. Kamau and her amazing team provided understanding, patience, and effective treatment that 
                has made a world of difference."
              </p>
              <p className="font-medium">— Michael R.</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-harmony-gold h-6 w-6 mr-2" />
                <h3 className="text-lg font-medium">Professional & Caring</h3>
              </div>
              <p className="mb-4 text-gray-600 italic">
                "The level of professionalism and genuine care at Harmony Health is unmatched. 
                I've never felt rushed during appointments, and they truly listen to my concerns. 
                The medication management has been life-changing."
              </p>
              <p className="font-medium">— Jamie L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-harmony-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Take the first step toward mental wellness with our caring team of professionals. 
            We're here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/appointment" className="bg-white text-harmony-forest py-3 px-8 rounded-md font-medium hover:bg-opacity-90 transition-colors text-center">
              Book an Appointment
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-medium hover:bg-white/10 transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
