import React from 'react';
import { Shield, Award, Users, Calendar, CheckCircle, Star, Target, TrendingUp } from 'lucide-react';

const DetailedAboutUs = () => {
  const achievements = [
    { year: '2009', label: 'Founded in Delhi', icon: <Calendar className="text-yellow-500" /> },
    { year: '500+', label: 'Successful Events', icon: <Star className="text-yellow-500" /> },
    { year: '1200+', label: 'Permanent Sites', icon: <CheckCircle className="text-yellow-500" /> },
    { year: '24/7', label: 'Response Hub', icon: <Shield className="text-yellow-500" /> },
  ];

  const securedEvents = [
    {
      title: "G20 Summit Support",
      description: "Provided peripheral surveillance and crowd control management for international delegates.",
      image: "https://i0.wp.com/oecd-development-matters.org/wp-content/uploads/2022/12/India-G20-Development-matters.jpg?fit=1200%2C595&ssl=1"
    },
    {
      title: "IPL Season Security",
      description: "Managed stadium entry points and VIP lounge protection for three consecutive seasons.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBxWTRkLY_Hq6ySsLHZLGjZ_wklkpLgMteQ&s"
    }
  ];

  return (
    <div className="bg-white pt-10">
      {/* 1. OUR HISTORY SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4">The Legacy</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-6 leading-tight uppercase italic">Our <span className="text-yellow-500 underline decoration-4 underline-offset-8">History</span></h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              LPI-Security was established in 2009 with a singular focus: to bring military-grade discipline to the private sector. Starting with a small team of 15 retired army personnel, we have evolved into a national leader in security.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-yellow-500 pl-4">
              "Over the last decade, we have transitioned from traditional guarding to AI-driven surveillance, ensuring that our clients are always two steps ahead of any threat."
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://www.promansecuritech.com/wp-content/themes/astra/images/banner-2.jpg" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Founding Team" 
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* 2. SUCCESS METRICS (Data Visualization) */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors">
                <span className="text-white group-hover:text-slate-900 transition-colors">{item.icon}</span>
              </div>
              <h4 className="text-4xl font-black text-white mb-2">{item.year}</h4>
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECURED EVENTS SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Secured <span className="text-yellow-500">Portfolio</span></h2>
          <p className="text-gray-500 mt-4">We've protected some of India's most high-profile gatherings.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {securedEvents.map((event, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl">
              <img src={event.image} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" alt={event.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                <h4 className="text-2xl font-bold mb-2">{event.title}</h4>
                <p className="text-gray-300 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CERTIFICATIONS SECTION */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-black uppercase mb-12">Authorized & <span className="text-yellow-500">Certified</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-b-4 border-yellow-500 shadow-sm flex flex-col items-center">
               <Shield size={48} className="text-slate-900 mb-4" />
               <h5 className="font-bold text-lg mb-2">PSARA License</h5>
               <p className="text-gray-500 text-sm italic">Ministry of Home Affairs Authorized (No. 1234/2024)</p>
            </div>
            <div className="bg-white p-8 border-b-4 border-yellow-500 shadow-sm flex flex-col items-center">
               <Award size={48} className="text-slate-900 mb-4" />
               <h5 className="font-bold text-lg mb-2">ISO 9001:2015</h5>
               <p className="text-gray-500 text-sm italic">Quality Management Systems Certified</p>
            </div>
            <div className="bg-white p-8 border-b-4 border-yellow-500 shadow-sm flex flex-col items-center">
               <Users size={48} className="text-slate-900 mb-4" />
               <h5 className="font-bold text-lg mb-2">NSIC Registered</h5>
               <p className="text-gray-500 text-sm italic">National Small Industries Corporation (MSME)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET OUR TEAM SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black uppercase mb-16">The Minds Behind <span className="text-yellow-500">Protection</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Maj. Gen. (Retd) V.K. Singh", role: "Chief Advisor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" },
            { name: "Rohit Deshmukh", role: "Director of Ops", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" },
            { name: "Sanya Malhotra", role: "Risk Assessment Head", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" },
            { name: "Arjun Khanna", role: "Tactical Trainer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" }
          ].map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-96 overflow-hidden rounded-xl mb-4 relative">
                <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt={member.name} />
                <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h5 className="text-xl font-bold text-slate-900">{member.name}</h5>
              <p className="text-yellow-600 font-bold uppercase text-[10px] tracking-[0.2em]">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default DetailedAboutUs;