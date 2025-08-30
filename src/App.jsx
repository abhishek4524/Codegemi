// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Solution from './components/Solution';
import Phases from './components/Phases';
import Challenges from './components/Challenges';
import { assets } from './assets/assets';
import Team from './components/Team';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
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
      <div style={{ marginTop: '2em' }}>
        <video autoPlay muted loop style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
          <source src={assets.TuringIntroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;