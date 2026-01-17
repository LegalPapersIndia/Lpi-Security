import React from 'react';
import { 
  ShieldCheck, Users, History, Briefcase, Award, Target, Eye, 
  CheckCircle2, Rocket, Landmark, ShieldAlert, Zap, Quote, Building2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: <History className="text-yellow-500" /> },
    { label: 'Security Experts', value: '500+', icon: <Users className="text-yellow-500" /> },
    { label: 'Clients Served', value: '1200+', icon: <ShieldCheck className="text-yellow-500" /> },
    { label: 'Projects Done', value: '250+', icon: <Briefcase className="text-yellow-500" /> },
  ];

  const values = [
    { title: "Uncompromising Integrity", desc: "We adhere to the highest ethical standards, ensuring transparency in every operation.", icon: <ShieldCheck className="w-8 h-8 text-yellow-500" /> },
    { title: "Proactive Vigilance", desc: "Our team is trained to identify and neutralize threats before they manifest into risks.", icon: <Eye className="w-8 h-8 text-yellow-500" /> },
    { title: "Client-Centricity", desc: "Every security plan is tailor-made to fit the specific DNA of your organization.", icon: <Target className="w-8 h-8 text-yellow-500" /> },
  ];

  const timeline = [
    { year: "2009", title: "The Foundation", desc: "Started with 10 ex-military officers focusing on residential safety." },
    { year: "2014", title: "Corporate Expansion", desc: "Launched our specialized Corporate Risk Management wing." },
    { year: "2019", title: "Tech Integration", desc: "Introduced AI-driven surveillance and real-time tracking systems." },
    { year: "2024", title: "National Presence", desc: "Operating across 15+ states with over 500+ certified experts." },
  ];

  const team = [
    { name: "Vikram Singh", role: "Founder & Managing Director", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" },
    { name: "Anjali Sharma", role: "Head of Operations", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" },
    { name: "Rajesh Khanna", role: "Chief Security Strategist", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6z_d9lGWm6fHIBphcR95mlF8YWN-_38oug&s" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. History & Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
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
              Founded in 2009, LPI-Security began with a mission to redefine the private security landscape in India. What started as a small team of retired military personnel has grown into a premier security provider, serving corporate hubs, high-profile events, and industrial zones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-yellow-500 pl-4">
                <h4 className="font-bold text-slate-900">Our Mission</h4>
                <p className="text-sm text-gray-500">To provide unparalleled protection through a blend of human intelligence and cutting-edge technology.</p>
              </div>
              <div className="border-l-2 border-yellow-500 pl-4">
                <h4 className="font-bold text-slate-900">Our Vision</h4>
                <p className="text-sm text-gray-500">To be the most trusted security partner in Asia, recognized for our discipline and innovation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {values.map((v, i) => (
            <div key={i} className="p-8 border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform">{v.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{v.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. The Journey Timeline */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 uppercase">Our <span className="text-yellow-500">Journey</span></h3>
            <p className="text-gray-500 mt-2">Evolution of excellence over the decades</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {timeline.map((item, i) => (
              <div key={i} className="relative p-6 bg-slate-900 text-white rounded-lg">
                <span className="text-yellow-500 font-black text-2xl">{item.year}</span>
                <h4 className="font-bold mt-2 mb-2 text-lg">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
                {i !== timeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-yellow-500 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-gray-100 mb-28 bg-slate-50/50">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h4 className="text-4xl font-black text-slate-900">{stat.value}</h4>
              <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 5. Process / Methodology Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28 items-center">
          <div>
            <h3 className="text-3xl font-black text-slate-900 uppercase mb-8">The LPI <span className="text-yellow-500">Methodology</span></h3>
            <div className="space-y-6">
              {[
                { icon: <ShieldAlert />, title: "Risk Assessment", desc: "Detailed analysis of vulnerabilities before deployment." },
                { icon: <Zap />, title: "Rapid Response", desc: "24/7 Command Center support with a sub-10 min response time." },
                { icon: <Building2 />, title: "On-Site Management", desc: "Dedicated supervisors for every major project account." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 flex items-center justify-center text-slate-900 rounded">
                    {step.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-slate-900 uppercase">{step.title}</h5>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-10 rounded-2xl text-white relative">
            <h3 className="text-2xl font-bold mb-6">Recruitment Standards</h3>
            <ul className="space-y-4">
              {['Ex-Servicemen Background Checks', 'Psychometric Testing', 'Biometric Attendance Integration', 'Monthly Drill Audits'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <CheckCircle2 className="text-yellow-500 w-5 h-5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <Award className="w-32 h-32 text-white/5 absolute bottom-4 right-4" />
          </div>
        </div>

        {/* 6. Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-black text-slate-900 uppercase">Meet Our <span className="text-yellow-500">Leadership</span></h3>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
          {team.map((member, i) => (
            <div key={i} className="bg-slate-50 overflow-hidden group shadow-lg">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={member.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 text-center bg-white border-t-4 border-yellow-500">
                <h5 className="text-xl font-bold text-slate-900">{member.name}</h5>
                <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 7. Testimonial Teaser */}
        <div className="bg-yellow-500 p-12 rounded-3xl mb-28 relative overflow-hidden">
          <Quote className="absolute top-4 left-4 w-24 h-24 text-black/10" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-2xl font-medium text-slate-900 italic mb-6">
              "LPI-Security transformed our industrial safety protocols. Their transition from traditional guarding to tech-enabled surveillance saved us 20% in annual losses."
            </p>
            <span className="font-bold uppercase tracking-widest text-slate-800">— Director, National Logistics Corp</span>
          </div>
        </div>

        {/* 8. Final Call to Action */}
        <div className="text-center py-16 bg-slate-900 rounded-3xl">
          <h3 className="text-3xl font-black text-white mb-4">WANT TO JOIN THE LPI FAMILY?</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Whether you are looking for elite security services or a career in professional protection, we are ready to talk.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-black py-4 px-10 rounded-sm uppercase tracking-widest transition-all">
              Inquire Now
            </button>
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-black py-4 px-10 rounded-sm uppercase tracking-widest transition-all">
              View Careers
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;