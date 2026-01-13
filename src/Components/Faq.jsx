import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Replace with your actual business number (include 91 prefix without + or spaces)
  const whatsappNumber = "917505266931"; 
  const businessName = "LPI-Security";
  
  // Encoded message for the WhatsApp link
  const whatsappMessage = encodeURIComponent(`Hello ${businessName}, I have a query regarding your security services. Please assist me.`);

  const faqs = [
    {
      question: "Are your security guards PSARA licensed?",
      answer: "Yes, LPI-Security is fully compliant with the Private Security Agencies (Regulation) Act. All our personnel undergo background verification by local police authorities and are trained according to government-mandated standards."
    },
    {
      question: "What industries do you provide security for?",
      answer: "We provide comprehensive security solutions for IT parks, residential townships, manufacturing plants, retail malls, and high-profile private events across India."
    },
    {
      question: "Do you offer 24/7 technical support for CCTV systems?",
      answer: "Absolutely. Our technical response team is available 24/7. If your surveillance system faces a downtime, our on-site technicians are dispatched within 4 hours to resolve the issue."
    },
    {
      question: "How do you ensure the quality of guards on site?",
      answer: "We conduct surprise night audits and weekly supervisor visits. Additionally, our guards use a digital 'Patrol Management System' that tracks their movement in real-time via GPS."
    },
    {
      question: "What is your emergency response time?",
      answer: "For clients subscribed to our Rapid Response service, our average intervention time in Tier-1 cities (Delhi, Mumbai, Bangalore) is between 12 to 18 minutes."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="text-yellow-500 w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
            Common <span className="text-yellow-500">Inquiries</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold ${activeIndex === index ? 'text-yellow-600' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {activeIndex === index ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-slate-400" />}
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 pt-0 text-gray-600 leading-relaxed bg-slate-50/50 border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- WHATSAPP REDIRECT SECTION --- */}
        <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-center border-b-4 border-yellow-500 shadow-2xl">
          <p className="text-gray-400 font-medium mb-2 uppercase tracking-widest text-xs">Need Instant Help?</p>
          <h4 className="text-2xl font-bold text-white mb-6">Still have questions? Chat with us now.</h4>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-black uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={24} fill="currentColor" />
            Chat on WhatsApp
          </a>
          
          <p className="mt-4 text-slate-500 text-sm">
            Our security consultants are online 24/7
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;