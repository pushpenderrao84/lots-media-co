
import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

interface AboutProps {
  isHomePage?: boolean;
}

const About = ({ isHomePage = false }: AboutProps) => {
  const content = (
    <section id="about" className="section-padding bg-soft-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between">
          <div className="md:w-2/5 relative flex justify-center md:justify-between items-center mb-6 md:mb-0">
             <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-warm-yellow">
                <img 
                  src="https://selecttraining.ae/wp-content/uploads/2024/01/team-building-for-graphic-designers-1063x800.png" 
                  alt="Designing Team Photo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-warm-yellow/20 rounded-full pointer-events-none z-10" />
               </div>
          </div>
          
          <div className="md:w-3/5 self-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-warm-yellow">Us</span>
            </h2>
            <p className="text-lg mb-6 text-charcoal/90">
              Hi, we're LOTS Media — a creative team passionate about telling visual stories that truly connect.
            </p>
            <p className="text-lg mb-6 text-charcoal/90">
              With a blend of strategic design and artistic flair, we specialize in branding, content creation, and digital media solutions tailored to both brands and creators. Whether you're launching something new or looking to refresh your presence, we're here to help you craft visuals that resonate, inspire, and leave a lasting impact.
            </p>
            <p className="text-lg text-charcoal/90">
              We believe great storytelling is the key to meaningful connection. That's why every project we take on is designed not just to look good, but to elevate your message and build lasting relationships with your audience. Let's create something memorable together.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-warm-yellow"></div>
                <p className="font-semibold">3+ Years Experience</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-warm-yellow"></div>
                <p className="font-semibold">50+ Projects</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-warm-yellow"></div>
                <p className="font-semibold">100% Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (isHomePage) {
    return content;
  }

  return (
    <>
      <Navbar />
      {content}
      <Footer />
    </>
  );
};

export default About;
