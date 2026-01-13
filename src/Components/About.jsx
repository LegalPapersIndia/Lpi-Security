import React from 'react';
import { ShieldCheck, Users, History, Briefcase } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: <History className="text-yellow-500" /> },
    { label: 'Security Experts', value: '500+', icon: <Users className="text-yellow-500" /> },
    { label: 'Clients Served', value: '1200+', icon: <ShieldCheck className="text-yellow-500" /> },
    { label: 'Projects Done', value: '250+', icon: <Briefcase className="text-yellow-500" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Section: History & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800" 
              alt="Security Team" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-slate-900 p-8 hidden md:block border-l-4 border-yellow-500">
              <p className="text-white font-bold text-xl italic">"Securing India's Future Since 2009"</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2">Our Story</h2>
            <h3 className="text-4xl font-black text-slate-900 uppercase mb-6">Established Excellence in <span className="text-yellow-500">LPI-Security</span></h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2009, LPI-Security began with a mission to redefine the private security landscape in India. What started as a small team of retired military personnel has grown into a premier security provider, serving corporate hubs, high-profile events, and residential complexes across the nation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our history is built on the foundation of discipline, integrity, and advanced technology. We don't just provide guards; we provide peace of mind through a meticulously curated portfolio of risk management services.
            </p>
          </div>
        </div>

        {/* Middle Section: Stats/Portfolio Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-100 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h4 className="text-3xl font-black text-slate-900">{stat.value}</h4>
              <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lower Section: Team & Values */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-black text-slate-900 uppercase">Meet Our <span className="text-yellow-500">Leadership</span></h3>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Team Member 1 */}
          <div className="bg-slate-50 overflow-hidden group">
            <div className="h-80 overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                alt="CEO"
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-slate-900">Vikram Singh</h5>
              <p className="text-yellow-600 font-medium text-sm">Founder & Managing Director</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-slate-50 overflow-hidden group">
            <div className="h-80 overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                alt="Operations Head"
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-slate-900">Anjali Sharma</h5>
              <p className="text-yellow-600 font-medium text-sm">Head of Operations</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-slate-50 overflow-hidden group">
            <div className="h-80 overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                alt="Technical Head"
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-slate-900">Rajesh Khanna</h5>
              <p className="text-yellow-600 font-medium text-sm">Chief Security Strategist</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;