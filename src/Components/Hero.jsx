import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const slides = [
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2023/4/304140210/CY/XG/DE/19229924/bouncers-security-guard-for-mall-500x500.png",
      title: "Elite Corporate Security",
      subtitle: "Protecting your assets with India's most trained professionals.",
    },
    {
      image: "https://www.security101.com/hubfs/Intelligent-and-collaborative-video-surveillance-systems.png",
      title: "Smart CCTV Surveillance",
      subtitle: "24/7 high-tech monitoring for your home and business.",
    },
    {
      image: "https://3.imimg.com/data3/WU/HB/GLADMIN-16625139/demos-event-500x500.jpg",
      title: "Special Event Protection",
      subtitle: "Comprehensive crowd management for high-profile events.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYFlNTGkVq51C-d3vcwp17G8i78XRkPYbtQ&s",
      title: "Rapid Response Units",
      subtitle: "Instant mobile patrol and emergency intervention across the city.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative h-[600px] md:h-[80vh] w-full overflow-hidden group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 animate-fade-in-up">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 font-light">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-3 rounded-sm font-bold uppercase transition-all shadow-xl">
                Our Services
              </button>
              </Link>
              <Link to="/Contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-sm font-bold uppercase transition-all">
                Contact Us
              </button>
                </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 z-30 text-white p-2 bg-black/30 hover:bg-yellow-500 hover:text-slate-900 rounded-full transition-all"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 z-30 text-white p-2 bg-black/30 hover:bg-yellow-500 hover:text-slate-900 rounded-full transition-all"
      >
        <ChevronRight size={30} />
      </button>

      {/* Bottom Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-yellow-500 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;