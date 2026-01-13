import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import DetailedAboutUs from './pages/About'; 
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTop from './Components/ScrollToTop';


const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Place it here */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<DetailedAboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;