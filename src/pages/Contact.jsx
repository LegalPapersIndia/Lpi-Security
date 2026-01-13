 import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "917505266931";
  // REPLACE THIS WITH YOUR ACTUAL EMAIL
  const targetEmail = "udit9407@gmail.com"; 

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* --- HEADER SECTION --- */}
      <div className="bg-slate-900 py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          Get in <span className="text-yellow-500">Touch</span>
        </h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
          Ready to secure your future? Our experts are available 24/7 for consultations and emergency deployments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- LEFT COLUMN: CONTACT INFO --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 h-full">
              <h3 className="text-2xl font-black text-slate-900 uppercase mb-8 border-b-4 border-yellow-500 w-fit pb-2">
                Office Info
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-2xl h-fit">
                    <MapPin className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Headquarters</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      F-2 , Sector 8 , Noida 
                      Uttar Pradesh, India - 201301
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-2xl h-fit">
                    <Phone className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Call Support</h5>
                    <p className="text-slate-600 text-sm">+91 7505266931</p>
                    <p className="text-slate-400 text-xs mt-1 italic">Toll Free: 1800-123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-2xl h-fit">
                    <Mail className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Email Us</h5>
                    <p className="text-slate-600 text-sm font-medium">contact@lpi-security.in</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-2xl h-fit">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Work Hours</h5>
                    <p className="text-slate-600 text-sm">Mon - Sat: 09:00 - 19:00</p>
                    <p className="text-green-600 text-[10px] font-black uppercase mt-1">24/7 Field Support Active</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-900 rounded-3xl text-center">
                <ShieldCheck className="text-yellow-500 mx-auto mb-3" size={40} />
                <p className="text-white text-xs font-bold uppercase tracking-widest leading-tight">
                  PSARA REGISTERED AGENCY <br /> 
                  <span className="text-slate-500 font-medium">LICENSE: 1234/2026</span>
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-xl border border-slate-100">
              <h3 className="text-3xl font-black text-slate-900 uppercase italic mb-8">
                Send a <span className="text-yellow-500">Security Inquiry</span>
              </h3>
              
              {/* FormSubmit.co Endpoint */}
              <form action={`https://formsubmit.co/${targetEmail}`} method="POST" className="space-y-6">
                
                {/* FormSubmit Configurations */}
                <input type="hidden" name="_subject" value="New Security Inquiry - LPI Website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://yourwebsite.com/thanks" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-1">Full Name</label>
                    <input 
                      type="text" name="name" required
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-yellow-500 rounded-2xl p-4 transition-all outline-none font-medium" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-1">Phone Number</label>
                    <input 
                      type="tel" name="phone" required
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-yellow-500 rounded-2xl p-4 transition-all outline-none font-medium" 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" name="email" required
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-yellow-500 rounded-2xl p-4 transition-all outline-none font-medium" 
                    placeholder="john@company.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">Required Service</label>
                  <select 
                    name="service"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-yellow-500 rounded-2xl p-4 transition-all outline-none font-medium text-slate-500"
                  >
                    <option>Corporate Guarding</option>
                    <option>Event Security / Bouncers</option>
                    <option>Executive VIP Protection</option>
                    <option>CCTV / Electronic Surveillance</option>
                    <option>Industrial Security</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">Your Message</label>
                  <textarea 
                    name="message" rows="5" required
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-yellow-500 rounded-2xl p-4 transition-all outline-none font-medium" 
                    placeholder="Tell us about your security requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-slate-900 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <Send size={20} /> Request a Quote
                </button>
              </form>

              <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-slate-100">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Or Instant Chat:</p>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold uppercase text-xs hover:scale-105 transition-transform shadow-md"
                >
                  <MessageCircle size={18} /> WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- GOOGLE MAPS PLACEHOLDER --- */}
      <div className="w-full h-[450px] bg-slate-200 grayscale border-t border-slate-300">
         {/* You can replace this iframe with your specific Google Maps embed code */}
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.3033497832166!2d77.31967657533406!3d28.595428075685028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2290a24adc2aa39f%3A0x6393f050e681d51e!2sLegal%20Papers%20India!5e1!3m2!1sen!2sin!4v1768302593862!5m2!1sen!2sin" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
         </iframe>
      </div>
    </div>
  );
};

export default Contact;