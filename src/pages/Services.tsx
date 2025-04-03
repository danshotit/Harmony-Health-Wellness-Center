
import { Link } from 'react-router-dom';
import { 
  Brain,
  Users, 
  HeartPulse, 
  Leaf, 
  PersonStanding, 
  Pill, 
  BadgeDollarSign, 
  Activity 
} from 'lucide-react';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-harmony-beige pt-28 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Our Services</h1>
            <p className="text-xl text-harmony-forest">
              We provide a comprehensive range of behavioral health services to address 
              the full spectrum of mental and emotional health needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Comprehensive Care</h2>
              <p className="mb-4 text-lg">
                At Harmony Health Wellness Center, we believe in providing holistic care that 
                addresses all aspects of mental and emotional well-being. Our comprehensive 
                services are designed to support your unique journey to healing.
              </p>
              <p className="mb-4">
                Our team of experienced professionals utilizes evidence-based approaches to 
                create personalized treatment plans that address your specific needs and goals.
              </p>
              <p>
                Whether you're seeking help for depression, anxiety, substance use, relationship 
                challenges, or other behavioral health concerns, we're here to provide the support 
                and expertise you need to thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-harmony-beige p-6 rounded-lg text-center">
                <Brain className="h-10 w-10 mx-auto text-harmony-green mb-3" />
                <h3 className="font-medium">Psychiatric Services</h3>
              </div>
              
              <div className="bg-harmony-beige p-6 rounded-lg text-center">
                <Users className="h-10 w-10 mx-auto text-harmony-green mb-3" />
                <h3 className="font-medium">Psychotherapy</h3>
              </div>
              
              <div className="bg-harmony-beige p-6 rounded-lg text-center">
                <HeartPulse className="h-10 w-10 mx-auto text-harmony-green mb-3" />
                <h3 className="font-medium">Addiction Treatment</h3>
              </div>
              
              <div className="bg-harmony-beige p-6 rounded-lg text-center">
                <Leaf className="h-10 w-10 mx-auto text-harmony-green mb-3" />
                <h3 className="font-medium">Holistic Healing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychiatric Services */}
      <section id="psychiatric" className="py-16 bg-harmony-beige">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Brain className="h-10 w-10 text-harmony-green mr-4" />
            <h2 className="text-3xl font-serif font-semibold">Psychiatric Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Diagnostic Evaluations</h3>
              <p>
                Comprehensive psychiatric assessments to accurately diagnose mental health conditions 
                and establish a foundation for effective treatment planning. Our evaluations include 
                detailed history-taking, symptom analysis, and when appropriate, psychological testing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Medication Management</h3>
              <p>
                Expert medication services provided by our psychiatrists to help manage symptoms of 
                various mental health conditions. We carefully monitor medication efficacy and side 
                effects, making adjustments as needed to optimize your treatment outcomes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Adult Psychiatry</h3>
              <p>
                Specialized care for adults dealing with depression, anxiety, bipolar disorder, 
                PTSD, and other psychiatric conditions. Our approach integrates medication management 
                with therapeutic interventions to address both symptoms and underlying causes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Addiction Psychiatry</h3>
              <p>
                Treatment for substance use disorders that addresses both addiction and any co-occurring 
                mental health conditions. Our dual-diagnosis approach ensures comprehensive care for 
                the complex relationship between substance use and mental health.
              </p>
            </div>
          </div>
          
          <div className="bg-harmony-gold/20 p-6 rounded-lg border-l-4 border-harmony-gold">
            <h3 className="text-xl font-medium mb-2">Our Psychiatric Approach</h3>
            <p>
              We believe in a patient-centered approach to psychiatric care that considers the whole person—not 
              just symptoms. Our psychiatrists work collaboratively with therapists and other providers to 
              ensure integrated treatment that addresses all aspects of your well-being. We emphasize education, 
              empowerment, and partnership in the treatment process.
            </p>
          </div>
        </div>
      </section>

      {/* Psychotherapy Services */}
      <section id="psychotherapy" className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Users className="h-10 w-10 text-harmony-green mr-4" />
            <h2 className="text-3xl font-serif font-semibold">Psychotherapy Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="card-service">
              <h3 className="text-xl font-medium mb-3">Individual Therapy</h3>
              <p className="mb-4">
                One-on-one therapy sessions tailored to your specific needs and goals. Our therapists 
                utilize various evidence-based approaches including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Cognitive-Behavioral Therapy (CBT)</li>
                <li>Dialectical Behavior Therapy (DBT)</li>
                <li>Acceptance and Commitment Therapy (ACT)</li>
                <li>Mindfulness-Based Cognitive Therapy</li>
                <li>Trauma-Focused Therapies</li>
              </ul>
            </div>
            
            <div className="card-service">
              <h3 className="text-xl font-medium mb-3">Group Therapy</h3>
              <p className="mb-4">
                Therapeutic groups that provide support, connection, and skill-building in a 
                collaborative environment. Our current groups include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Anxiety Management</li>
                <li>Depression Support</li>
                <li>DBT Skills Group</li>
                <li>Substance Recovery</li>
                <li>Grief and Loss</li>
              </ul>
            </div>
            
            <div className="card-service">
              <h3 className="text-xl font-medium mb-3">Family Therapy</h3>
              <p className="mb-4">
                Sessions that address family dynamics, communication patterns, and relationship 
                challenges. Our approach helps families:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Improve communication skills</li>
                <li>Resolve conflicts effectively</li>
                <li>Build stronger relationships</li>
                <li>Navigate life transitions</li>
                <li>Support a family member's recovery</li>
              </ul>
            </div>
            
            <div className="card-service">
              <h3 className="text-xl font-medium mb-3">Couples Therapy</h3>
              <p className="mb-4">
                Specialized therapy for couples seeking to improve their relationship. Our therapists help couples:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Enhance communication</li>
                <li>Rebuild trust and intimacy</li>
                <li>Resolve ongoing conflicts</li>
                <li>Navigate major life transitions</li>
                <li>Strengthen their emotional connection</li>
              </ul>
            </div>
            
            <div className="card-service">
              <h3 className="text-xl font-medium mb-3">Trauma Therapy</h3>
              <p className="mb-4">
                Specialized treatment for individuals who have experienced trauma. Our trauma-informed approaches include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>EMDR (Eye Movement Desensitization and Reprocessing)</li>
                <li>Trauma-Focused CBT</li>
                <li>Somatic Experiencing</li>
                <li>Narrative Therapy</li>
                <li>Mindfulness-Based Interventions</li>
              </ul>
            </div>
            
            <div className="card-service">
              <h3 className="text-xl font-medium mb-3">Coping & Life Skills</h3>
              <p className="mb-4">
                Practical skill-building sessions to enhance emotional regulation and life management. Focus areas include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Stress management techniques</li>
                <li>Emotional regulation skills</li>
                <li>Assertive communication</li>
                <li>Boundary setting</li>
                <li>Problem-solving strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section id="specialized" className="py-16 bg-harmony-beige">
        <div className="container-custom">
          <h2 className="section-heading-center mb-12">Specialized Services</h2>
          
          <div className="space-y-12">
            {/* Child & Adolescent Services */}
            <div id="child" className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Leaf className="h-10 w-10 text-harmony-green mr-4" />
                <h3 className="text-2xl font-serif font-medium">Child & Adolescent Services</h3>
              </div>
              
              <p className="mb-4">
                Specialized mental health care for children and adolescents, addressing the unique 
                developmental and emotional needs of young people. Our services include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Child & Adolescent Psychiatry</h4>
                  <p>
                    Expert psychiatric care for children and teenagers, including evaluation, 
                    diagnosis, and medication management when appropriate. We specialize in ADHD, 
                    anxiety disorders, depression, behavioral problems, and autism spectrum disorders.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Child & Family Therapy</h4>
                  <p>
                    Age-appropriate therapeutic interventions for children and adolescents, along 
                    with family therapy to address systemic factors. Our approaches include play 
                    therapy, art therapy, and cognitive-behavioral techniques adapted for younger clients.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Substance Abuse Treatment */}
            <div id="substance" className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <HeartPulse className="h-10 w-10 text-harmony-green mr-4" />
                <h3 className="text-2xl font-serif font-medium">Substance Abuse Treatment</h3>
              </div>
              
              <p className="mb-4">
                Comprehensive treatment for substance use disorders, addressing both addiction and 
                any co-occurring mental health conditions. Our integrated approach includes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Outpatient Addiction Treatment</h4>
                  <p>
                    Structured outpatient programs for individuals struggling with substance use 
                    disorders. Our treatment incorporates individual therapy, group support, family 
                    involvement, and when needed, medication-assisted treatment.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Dual Diagnosis Treatment</h4>
                  <p>
                    Specialized care for individuals with co-occurring substance use and mental health 
                    disorders. Our integrated approach ensures that both conditions are addressed 
                    simultaneously for optimal recovery outcomes.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Geriatric Psychiatry */}
            <div id="geriatric" className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <PersonStanding className="h-10 w-10 text-harmony-green mr-4" />
                <h3 className="text-2xl font-serif font-medium">Geriatric Psychiatry</h3>
              </div>
              
              <p className="mb-4">
                Specialized mental health services for older adults, addressing the unique psychological 
                and emotional aspects of aging. Our geriatric services include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Assessment & Treatment</h4>
                  <p>
                    Comprehensive evaluation and treatment of mental health conditions common in older 
                    adults, including depression, anxiety, cognitive disorders, and adjustment to age-related 
                    changes and losses.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Memory & Cognitive Evaluation</h4>
                  <p>
                    Specialized assessment of memory concerns and cognitive changes, with appropriate 
                    referrals for neuropsychological testing when indicated. We work closely with 
                    neurologists and primary care providers to ensure comprehensive care.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Medical Condition Support */}
            <div id="medical" className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Activity className="h-10 w-10 text-harmony-green mr-4" />
                <h3 className="text-2xl font-serif font-medium">Consultation-Liaison Psychiatry</h3>
              </div>
              
              <p className="mb-4">
                Specialized psychiatric support for individuals dealing with medical conditions that 
                impact mental health, or mental health conditions that complicate medical treatment. 
                Our services include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Medical-Psychiatric Integration</h4>
                  <p>
                    Expert care for the psychological aspects of chronic illness, including adaptation 
                    to diagnosis, coping with symptoms and treatment, and managing stress related 
                    to health conditions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Provider Collaboration</h4>
                  <p>
                    Close coordination with medical providers to ensure integrated, whole-person care. 
                    We communicate regularly with your healthcare team to align treatment approaches 
                    and optimize both physical and mental health outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading-center mb-12">Additional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Medication Management */}
            <div id="medmanagement" className="bg-harmony-beige p-8 rounded-lg">
              <Pill className="h-12 w-12 text-harmony-green mb-4" />
              <h3 className="text-2xl font-serif font-medium mb-3">Medication Management</h3>
              <p className="mb-4">
                Ongoing medication services provided by our psychiatrists and nurse practitioners 
                to ensure optimal treatment outcomes. Our medication management includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Regular monitoring of medication effectiveness and side effects</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Adjustment of dosages and medications as needed</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Education about medications and their effects</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Coordination with therapists for integrated care</p>
                </li>
              </ul>
            </div>
            
            {/* Financial Counseling */}
            <div className="bg-harmony-beige p-8 rounded-lg">
              <BadgeDollarSign className="h-12 w-12 text-harmony-green mb-4" />
              <h3 className="text-2xl font-serif font-medium mb-3">Insurance & Financial Support</h3>
              <p className="mb-4">
                Assistance with navigating insurance coverage and financial considerations for 
                mental health treatment. Our support includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Verification of insurance benefits</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Explanation of coverage and costs</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Sliding scale fee options for eligible individuals</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Assistance with billing questions and concerns</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-harmony-green to-harmony-green-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Ready to Start Your Journey to Wellness?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Our team is here to provide the compassionate, expert care you deserve. 
            Take the first step toward healing today.
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

export default Services;
