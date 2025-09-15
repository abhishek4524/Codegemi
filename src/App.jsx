// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlogGrid from './pages/BlogGrid';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Cart from './pages/Cart';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from './pages/Login';
import HireMe from './pages/Signup';
import AuthPage from './pages/DevLogin';

function App() {
  return (
    <div className="w-full h-full ">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogGrid />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<HireMe />} />
        <Route path="/developer/login" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;