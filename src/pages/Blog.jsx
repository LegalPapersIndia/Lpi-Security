import React, { useState } from 'react';
import { Calendar, User, Clock, X, MessageCircle, ArrowRight, Search, Tag, TrendingUp } from 'lucide-react';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const whatsappNumber = "917505266931";

  const blogs = [
    {
      id: 1,
      category: "Legal",
      title: "Why PSARA License is Mandatory for Security in India",
      excerpt: "Understanding the legal framework of the Private Security Agencies Regulation Act...",
      content: "The Private Security Agencies Regulation Act (PSARA) of 2005 is the definitive legal framework for security in India. Hiring an agency without a PSARA license isn't just a safety risk—it’s a legal liability for the client. \n\nAt LPI-Security, we strictly adhere to the following PSARA mandates:\n1. Mandatory Police Verification for every guard.\n2. Standardized health and physical fitness checks.\n3. 160 hours of basic training including fire-fighting and first-aid. \n\nBy choosing a licensed partner, you ensure that your security force is recognized by the state and carries the authority to protect your assets legally.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      date: "Jan 10, 2026",
      author: "Legal Cell",
      readTime: "6 min read"
    },
    {
      id: 2,
      category: "Tech",
      title: "AI vs. Human Guards: The Synergy of Modern Protection",
      excerpt: "Is technology replacing traditional guards? Discover the power of hybrid security...",
      content: "The debate between AI and human guards is over: the winner is the Hybrid Model. AI-driven CCTV systems can process thousands of data points a second, identifying a 'lone loiterer' or 'unattended baggage' far faster than a human eye. \n\nHowever, AI cannot intervene. When our AI detects a perimeter breach, it instantly alerts the on-ground human Rapid Response Team (RRT). This reduction in 'false alarm' fatigue allows our guards to focus on high-priority threats, effectively creating a 360-degree shield that never sleeps.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      date: "Jan 05, 2026",
      author: "Tech Team",
      readTime: "8 min read"
    },
    {
      id: 3,
      category: "Corporate",
      title: "Women's Safety: 24/7 Escort Protocols for IT Parks",
      excerpt: "How LPI-Security is setting new benchmarks for female employee safety in night shifts...",
      content: "Women's safety is a critical KPI for modern HR departments. LPI-Security has developed a specialized 'Safe-Transit' protocol for BPO and IT sectors. \n\nOur service includes:\n1. Verified Guard Escorts for office cabs.\n2. Live GPS tracking shared with the command center.\n3. Panic button integration within employee mobile apps. \n\nWe don't just provide a guard; we provide a safety ecosystem that allows female employees to focus on their work without anxiety, regardless of the hour.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
      date: "Dec 28, 2025",
      author: "Compliance Dept",
      readTime: "5 min read"
    },
    {
        id: 4,
        category: "Industrial",
        title: "Mitigating Theft in Large Warehouses & Logistics Hubs",
        excerpt: "Inside the strategy of 'Loss Prevention' for e-commerce and manufacturing units...",
        content: "Warehouse 'Shrinkage' (theft) costs Indian businesses billions. LPI-Security implements a 'Deep-Layer' strategy. We begin with a vulnerability audit of the loading docks, followed by the installation of smart thermal cameras for night-time perimeter monitoring. Most importantly, we rotate our guard teams frequently to prevent 'insider-familiarity,' ensuring that every check remains as rigorous as the first day of the contract.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        date: "Dec 15, 2025",
        author: "Strategy Lead",
        readTime: "10 min read"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6">
            LPI <span className="text-yellow-500">Knowledge</span> Hub
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Stay updated with the latest trends in security technology, legal mandates, and safety protocols in India.
          </p>
        </div>
        {/* Decorative Watermark */}
        <div className="absolute top-0 right-0 text-[200px] font-black text-white/[0.02] select-none pointer-events-none translate-y-10">
            BLOG
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 flex flex-col lg:flex-row gap-12">
        
        {/* --- LEFT: SIDEBAR (Full Content Strategy) --- */}
        <aside className="lg:w-1/3 space-y-10">
          {/* Search Box */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><Search size={20} className="text-yellow-500"/> Search Articles</h4>
            <input 
                type="text" 
                placeholder="Search keywords..." 
                className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-yellow-500 transition-all outline-none"
            />
          </div>

          {/* Trending Topics */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2"><TrendingUp size={20} className="text-yellow-500"/> Trending Now</h4>
            <ul className="space-y-4">
              {["CCTV AI Integration", "PSARA 2026 Updates", "Night Shift Safety", "Warehouse Loss Prevention"].map((topic, i) => (
                <li key={i} className="flex items-center gap-3 group cursor-pointer">
                  <span className="text-yellow-500 font-bold">0{i+1}.</span>
                  <span className="text-slate-300 group-hover:text-yellow-500 transition-colors text-sm">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2"><Tag size={20} className="text-yellow-500"/> Categories</h4>
            <div className="flex flex-wrap gap-2">
              {["Tech", "Legal", "Industrial", "VIP Protection", "Events", "Training"].map(cat => (
                <span key={cat} className="px-4 py-2 bg-slate-50 hover:bg-yellow-100 rounded-lg text-xs font-bold text-slate-600 cursor-pointer transition-colors uppercase">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* --- RIGHT: BLOG CARDS --- */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-yellow-500 text-slate-900 text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-yellow-600 transition-colors">
                    {blog.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed italic">
                    "{blog.excerpt}"
                </p>
                <button 
                  onClick={() => setSelectedBlog(blog)}
                  className="mt-auto flex items-center gap-2 text-slate-900 font-black uppercase text-xs tracking-wider border-b-2 border-yellow-500 pb-1 w-fit hover:gap-4 transition-all"
                >
                  Read Full Insights <ArrowRight size={16} className="text-yellow-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- DETAILED BLOG MODAL (Full Content) --- */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" onClick={() => setSelectedBlog(null)}></div>
          
          <div className="relative bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[40px] shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-500">
            <button 
              onClick={() => setSelectedBlog(null)}
              className="fixed md:absolute top-6 right-6 p-3 bg-slate-900 text-white rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all z-50 shadow-xl"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-16">
              <div className="flex items-center gap-3 text-yellow-600 font-black text-xs uppercase tracking-[0.2em] mb-6">
                <Tag size={14} /> {selectedBlog.category}
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase italic leading-tight">
                {selectedBlog.title}
              </h2>

              <div className="flex items-center gap-6 mb-12 border-y border-slate-100 py-4">
                 <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold">L</div>
                    <span className="text-sm font-bold text-slate-900">Authored by {selectedBlog.author}</span>
                 </div>
                 <span className="text-slate-300">|</span>
                 <span className="text-sm font-medium text-slate-500 italic">{selectedBlog.readTime}</span>
              </div>
              
              <div className="text-gray-700 leading-[1.8] text-lg space-y-6">
                {selectedBlog.content.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-16 p-10 bg-slate-900 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                <div className="z-10">
                    <h4 className="text-2xl font-black text-white uppercase italic mb-2">Consult Our Experts</h4>
                    <p className="text-slate-400 text-sm">Get a specialized security audit based on this topic.</p>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Query on: ${encodeURIComponent(selectedBlog.title)}`}
                  target="_blank"
                  className="z-10 flex items-center gap-3 bg-yellow-500 text-slate-900 px-10 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-all shadow-xl"
                >
                  <MessageCircle size={20} /> Get Free Advice
                </a>
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;