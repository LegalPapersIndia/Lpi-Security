import React from 'react';
import { ShieldCheck, Zap, Award, Clock, Target, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Ex-Military Personnel",
      desc: "Our core team consists of retired veterans ensuring high-level discipline and tactical expertise.",
      icon: <Award className="text-yellow-500 w-10 h-10" />,
    },
    {
      title: "Rapid Response Units",
      desc: "Average emergency response time of under 15 minutes across major Indian metros.",
      icon: <Zap className="text-yellow-500 w-10 h-10" />,
    },
    {
      title: "ISO 9001 Certified",
      desc: "Internationally recognized standards for quality management and security operations.",
      icon: <ShieldCheck className="text-yellow-500 w-10 h-10" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-3">Core Competitive Edge</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase italic">Why India Trusts <span className="text-yellow-500">LPI-Security</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Fact Cards */}
          <div className="space-y-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-6 p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-yellow-500 transition-all group">
                <div className="shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Visual Data Representation */}
          <div className="bg-slate-800 p-8 rounded-2xl border-2 border-yellow-500/20 relative">
            <h4 className="text-2xl font-bold mb-8 text-center uppercase tracking-tight">Our Performance Metrics</h4>
            
            {/* Visual Bars */}
            <div className="space-y-6">
              {[
                { label: 'Guard Training Compliance', value: '100%', width: 'w-full' },
                { label: 'Client Retention Rate', value: '98%', width: 'w-[98%]' },
                { label: 'Technology Adoption', value: '92%', width: 'w-[92%]' },
                { label: 'Emergency Success Rate', value: '99.9%', width: 'w-[99.9%]' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-300">{stat.label}</span>
                    <span className="text-sm font-bold text-yellow-500">{stat.value}</span>
                  </div>
                  <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                    <div className={`${stat.width} bg-gradient-to-r from-yellow-600 to-yellow-400 h-full rounded-full transition-all duration-1000`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-slate-900/50 p-4 rounded-lg flex items-center gap-3">
                <Clock className="text-yellow-500" size={20} />
                <span className="text-xs font-bold uppercase">24/7 Operations</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg flex items-center gap-3">
                <Target className="text-yellow-500" size={20} />
                <span className="text-xs font-bold uppercase">PAN India Support</span>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -top-10 -right-10 opacity-10">
              <ShieldCheck size={200} />
            </div>
          </div>

        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
           {/* You would place simple text or SVGs of logos here */}
           <div className="flex items-center gap-2 text-xl font-bold italic"><CheckCircle2 className="text-yellow-500" /> PSARA LICENSED</div>
           <div className="flex items-center gap-2 text-xl font-bold italic"><CheckCircle2 className="text-yellow-500" /> MSME REGISTERED</div>
           <div className="flex items-center gap-2 text-xl font-bold italic"><CheckCircle2 className="text-yellow-500" /> ISO CERTIFIED</div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;