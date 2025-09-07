import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Services from '../components/Services';
import About from '../components/About';
import Solution from '../components/Solution';
import Phases from '../components/Phases';
import Challenges from '../components/Challenges';
import { assets } from '../assets/assets';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import VideoWithTransition from '../components/VideoWithTransition';

const Home = () => {
  return (
    <div className="w-full h-full ">
       <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Services />
      <About />
      <Solution />
      <Phases />
      <Challenges />
      <VideoWithTransition />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home