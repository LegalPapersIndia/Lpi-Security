import React from 'react'
import HeroCarousel from '../Components/Hero'
import AboutUs from '../Components/About'
import WhyChooseUs from '../Components/whyus'
import FAQ from '../Components/Faq'

const Home = () => {
  return (
    <div>
        <HeroCarousel />
        <AboutUs />
        <WhyChooseUs />
        <FAQ />
    </div>
  )
}

export default Home