import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Routing components
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated href to "to" paths for routing
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="w-full">
      {/* --- TOP CONTACT BAR --- */}
      <div className="bg-yellow-500 text-slate-900 py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs md:text-sm font-semibold">
          <div className="flex space-x-6">
            <a href="tel:+917505266931" className="flex items-center gap-2 hover:underline">
              <Phone size={14} /> +91 7505266931
            </a>
            <a href="mailto:contact@lpi-security.in" className="flex items-center gap-2 hover:underline">
              <Mail size={14} /> contact@lpi-security.in
            </a>
            <span className="hidden lg:flex items-center gap-2">
              <MapPin size={14} /> New Delhi, India
            </span>
          </div>
          <div className="flex space-x-4 items-center">
            <span className="hidden md:inline">Follow Us:</span>
            <Facebook size={16} className="cursor-pointer hover:text-white transition-colors" />
            <Twitter size={16} className="cursor-pointer hover:text-white transition-colors" />
            <Linkedin size={16} className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section - Wraps in Link to go Home */}
            <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                lpi-<span className="text-yellow-500">security</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => 
                      `text-sm font-bold uppercase tracking-wider transition-all duration-300 px-1 py-2 rounded-md ${
                        isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-300 hover:text-yellow-500'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link to="/contact">
                  <button className="bg-white text-slate-900 px-6 py-2.5 rounded-sm font-black uppercase text-xs hover:bg-yellow-500 transition-all duration-300 shadow-lg">
                    Emergency Call
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) => 
                    `block px-3 py-4 text-lg font-bold border-b border-slate-800 uppercase ${
                      isActive ? 'text-yellow-500' : 'text-gray-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-6 flex justify-center gap-8 text-yellow-500">
                 <a href="tel:+917505266931"><Phone size={28} /></a>
                 <a href="mailto:contact@lpi-security.in"><Mail size={28} /></a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;