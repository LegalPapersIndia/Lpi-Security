import React from 'react';
import { Link } from 'react-router-dom'; // Added for internal navigation
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Linkedin, 
  ShieldCheck, ArrowRight, MessageCircle 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappNumber = "917505266931"; 
  const whatsappMessage = encodeURIComponent("Hello LPI-Security, I need urgent security assistance.");

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    "Corporate Guarding",
    "Event Security & Bouncers",
    "Electronic Surveillance",
    "Executive Protection (PSO)",
    "Armed Guard Services",
    "Risk Assessment"
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tighter uppercase">
              lpi-<span className="text-yellow-500">security</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              India's premier security provider specializing in corporate protection, 
              event management, and smart surveillance systems. PSARA Licensed & ISO Certified.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all">
                <Linkedin size={18} />
              </a>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-green-500 hover:text-white transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links - Updated to use Link */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-yellow-500 pl-3 uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name} className="flex items-center group">
                  <ArrowRight size={14} className="mr-2 text-yellow-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  <Link to={item.path} className="hover:text-yellow-500 transition-colors uppercase font-bold tracking-tighter">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-yellow-500 pl-3 uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              {services.map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-default">
                   {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-yellow-500 pl-3 uppercase tracking-wider text-white">Contact Us</h4>
            <div className="space-y-5 text-sm text-slate-400">
              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-500 shrink-0" size={20} />
                <p> F-2 , Sector 8 , Noida 
                      Uttar Pradesh, India - 201301</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-500 shrink-0" size={20} />
                <p>+91 7505266931</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-500 shrink-0" size={20} />
                <p>info@lpi-security.in</p>
              </div>
              <div className="pt-4">
                <div className="bg-slate-800 p-4 rounded-xl border-b-2 border-yellow-500 group hover:bg-slate-700 transition-colors">
                  <p className="text-white font-bold text-xs uppercase mb-1">Emergency 24/7 Helpline</p>
                  <p className="text-yellow-500 text-lg font-black tracking-widest group-hover:scale-105 transition-transform origin-left">7505266931</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} LPI-Security Services Pvt Ltd.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-2 text-slate-400 font-bold">
              <ShieldCheck size={16} className="text-yellow-500" />
              PSARA REGISTERED
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;