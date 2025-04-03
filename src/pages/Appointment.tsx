
import AppointmentForm from '@/components/forms/AppointmentForm';

const Appointment = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-harmony-beige pt-28 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Book an Appointment</h1>
            <p className="text-xl text-harmony-forest">
              Take the first step on your journey to mental wellness. Schedule an appointment with our caring team of professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-harmony-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading">What to Expect</h2>
              <p className="mb-4">
                When you schedule an appointment with Harmony Health Wellness Center, you're taking 
                an important step toward improved mental and emotional well-being. Here's what you 
                can expect from the process:
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-2">Before Your Appointment</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>You'll receive a confirmation email with appointment details</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>You may be asked to complete intake forms online</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Our staff will verify your insurance benefits if applicable</p>
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">During Your First Visit</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Completion of any remaining paperwork</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Comprehensive evaluation of your concerns and needs</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Discussion of treatment options and recommendations</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Development of an initial treatment plan</p>
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-2">After Your Appointment</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Scheduling of follow-up appointments as needed</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Implementation of your personalized treatment plan</p>
                </li>
                <li className="flex items-start">
                  <span className="text-harmony-green font-bold mr-2">•</span>
                  <p>Ongoing assessment and adjustments to your care</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="section-heading">Important Information</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-medium mb-3">What to Bring</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-harmony-green font-bold mr-2">•</span>
                    <p>Photo ID and insurance card</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-harmony-green font-bold mr-2">•</span>
                    <p>List of current medications and dosages</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-harmony-green font-bold mr-2">•</span>
                    <p>Relevant medical records or previous mental health evaluations</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-harmony-green font-bold mr-2">•</span>
                    <p>Payment method for copays or self-pay fees</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-medium mb-3">Insurance & Payment</h3>
                <p className="mb-4">
                  We accept most major insurance plans and offer self-pay options. Payment is 
                  expected at the time of service. We accept credit cards, debit cards, and cash.
                </p>
                <p>
                  For specific questions about insurance coverage or fees, please 
                  contact our office at 301-494-3139.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Cancellation Policy</h3>
                <p className="mb-4">
                  We require 24 hours' notice for appointment cancellations. Late cancellations 
                  or no-shows may be subject to a fee.
                </p>
                <p>
                  If you need to reschedule, please contact us as soon as possible at 301-494-3139.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
