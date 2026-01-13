import React from 'react';
import { Shield, Camera, Users, Truck, Eye, Zap, MessageCircle, ChevronRight } from 'lucide-react';

const Services = () => {
  const whatsappNumber = "917505266931";
  const whatsappMsg = encodeURIComponent("Hello LPI-Security, I am interested in your services. Please provide more details.");

  const serviceList = [
    {
      title: "Executive & VIP Protection",
      description: "Elite Personal Security Officers (PSOs) and bouncers for celebrities, high-net-worth individuals, and corporate leaders. Our team is trained in defensive driving and threat neutralization.",
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      image: "https://www.westminstersecurity.co.uk/wp-content/uploads/executive-security.jpg",
      features: ["Armed & Unarmed PSOs", "Travel Security", "Threat Assessment"]
    },
    {
      title: "Smart Surveillance (CCTV)",
      description: "State-of-the-art AI-integrated CCTV monitoring. We provide end-to-end installation and 24/7 remote monitoring for retail, warehouses, and homes.",
      icon: <Camera className="w-8 h-8 text-yellow-500" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCseBxbu6zr6tn3hnx77bDC9ZX0Wn90wcqQ&s",
      features: ["AI Face Recognition", "Night Vision IR", "Remote Mobile Access"]
    },
    {
      title: "Event Security Management",
      description: "Comprehensive crowd control and security for weddings, concerts, and corporate exhibitions. We handle entry-exit logistics and emergency medical coordination.",
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_r_HBGhX4U3xZVaq3cN2XFNL453qQdKCmw&s",
      features: ["Crowd Control", "Baggage Scanning", "Emergency Protocols"]
    },
    {
      title: "Corporate & Industrial Guarding",
      description: "Reliable uniformed guards for IT parks, factories, and commercial hubs. Our guards are PSARA certified and trained in fire-fighting and first-aid.",
      icon: <Eye className="w-8 h-8 text-yellow-500" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhetQnj8fZ9iXowB0_3CqK3ShQVInV8ORoMQ&s",
      features: ["24/7 Shift Rotation", "Biometric Access Control", "Patrol Logging"]
    },
    {
      title: "Cash-in-Transit",
      description: "Secure movement of cash and valuables for banks and jewelry showrooms using GPS-tracked armored vehicles and armed escorts.",
      icon: <Truck className="w-8 h-8 text-yellow-500" />,
      image: "https://adv-security.ca/wp-content/uploads/2023/03/Armoured-Vehicle-Still.jpg",
      features: ["GPS Live Tracking", "Armed Escorts", "Tamper-proof Locks"]
    },
    {
      title: "Fire & Safety Audits",
      description: "Specialized risk assessment and fire safety training for high-rise buildings and industrial plants to ensure compliance with Indian safety laws.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztL4ofOcj9hmVk4lRMk76NMFrEPKZXjbImw&s",
      features: ["Fire Drills", "Equipment Inspection", "Compliance Certification"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic">
            Professional <span className="text-yellow-500">Security Solutions</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Delivering peace of mind through a blend of human vigilance and advanced technological systems.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group">
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs font-bold text-slate-500 uppercase">
                      <ChevronRight size={14} className="text-yellow-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* WhatsApp Button per Service */}
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-yellow-500 hover:text-slate-900 text-white w-full py-4 rounded-xl font-bold uppercase transition-all"
                >
                  <MessageCircle size={18} />
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp Action Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold px-0 group-hover:px-2 whitespace-nowrap">
          Contact Support
        </span>
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};

export default Services;