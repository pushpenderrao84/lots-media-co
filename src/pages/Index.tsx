
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Animate on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-soft-white">
      <Navbar />
      <Hero />

      <div className="animate-on-scroll" id="about">
        <About isHomePage={true} />
      </div>

      <div className="animate-on-scroll" id="services">
        <Services isHomePage={true} />
      </div>

      <div className="animate-on-scroll" id="portfolio">
        <Portfolio isHomePage={true} />
      </div>

      <div className="animate-on-scroll" id="testimonials">
        <Testimonials isHomePage={true} />
      </div>

      {/* Reduced gap by removing the animate-on-scroll div wrapper */}
      <div id="pricing">
        <Pricing isHomePage={true} />
      </div>

      {/* Directly attach Contact section with no gap */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
