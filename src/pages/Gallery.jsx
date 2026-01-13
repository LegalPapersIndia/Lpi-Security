import React, { useState } from 'react';
import { Camera, Shield, Users, Building2, Zap, MessageCircle } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    { name: 'All', icon: <Camera size={16} /> },
    { name: 'On-Site Guarding', icon: <Shield size={16} /> },
    { name: 'Event Security', icon: <Users size={16} /> },
    { name: 'Control Room', icon: <Zap size={16} /> },
    { name: 'Corporate', icon: <Building2 size={16} /> },
  ];

  const galleryData = [
    { id: 1, category: 'On-Site Guarding', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvdl4iiMeQarCNBKzit5OxtuhQXT4X6nZ-g&s', title: 'Industrial Night Patrol' },
    { id: 2, category: 'Event Security', image: 'https://sesecurityservices.co.uk/wp-content/uploads/2023/02/crowd.png', title: 'VIP Concert Security' },
    { id: 3, category: 'Control Room', image: 'https://www.electrosonic.com/hs-fs/hubfs/Audiovisual%20Build%20Services-1.jpg?width=1200&height=628&name=Audiovisual%20Build%20Services-1.jpg', title: '24/7 Monitoring Hub' },
    { id: 4, category: 'Corporate', image: 'https://www.securitylinkindia.com/wp-content/uploads/2025/09/Corporate-Park-Video-Security-Command-and-Control-Center-1024x684.jpg', title: 'Tech Park Access Control' },
    { id: 5, category: 'On-Site Guarding', image: 'https://gurgaonprotectionforce.com/wp-content/uploads/2026/01/Night-patrolling-by-Indian-security-guards.png', title: 'Trained Personnel' },
    { id: 6, category: 'Event Security', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4teKHz_z6I4FxdsKeqXsqO8wq6f5oh81BGw&s', title: 'Crowd Management' },
    { id: 7, category: 'Control Room', image: 'https://activu.com/wp-content/uploads/2020/12/cropped-IMG_1576-crop-scaled-1-800x533.jpg', title: 'Surveillance Wall' },
    { id: 8, category: 'Corporate', image: 'https://americansafesecurity.com/wp-content/uploads/2023/02/high-rise-building.webp', title: 'High-Rise Protection' },
  ];

  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  const whatsappNumber = "917505266931";

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
          Our <span className="text-yellow-500">Operations</span> Gallery
        </h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-medium">
          A visual showcase of our elite forces, high-tech control rooms, and secured client sites across India.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-12 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all ${
                filter === cat.name 
                ? 'bg-yellow-500 text-slate-900 shadow-lg scale-105' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-xl break-inside-avoid shadow-md border border-slate-100"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-yellow-500 text-xs font-black uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold uppercase italic">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 px-4">
        <div className="bg-yellow-500 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h2 className="text-3xl font-black text-slate-900 uppercase leading-none">Ready to secure <br/>your assets?</h2>
            <p className="text-slate-800 mt-3 font-bold">Connect with our security experts today.</p>
          </div>
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl"
          >
            <MessageCircle size={20} />
            Hire Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;