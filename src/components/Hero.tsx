

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-soft-white overflow-hidden pt-20">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-warm-yellow">Designs</span> that speak.<br />
              <span className="text-warm-yellow">Stories</span> that connect.
            </h1>
            <p className="mt-6 text-lg text-charcoal/80 max-w-lg">
              Professional graphic design services specializing in social media design, branding, and content visuals — blending creativity and storytelling with every project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-warm-yellow text-charcoal hover:bg-charcoal hover:text-soft-white transition-colors h-auto"
              >
                <a href="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-charcoal bg-soft-white text-charcoal hover:bg-charcoal hover:text-soft-white" 
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="aspect-square bg-warm-yellow/80 rounded-3xl overflow-hidden shadow-xl animate-float">
                <div className="absolute inset-0 bg-[url('https://silica.co.in/wp-content/uploads/2022/09/Job-opportunities-after-Diploma-in-graphic-design-842x842.jpg')] bg-cover bg-center opacity-80 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-charcoal rounded-full"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-warm-yellow/30 backdrop-blur-sm rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-warm-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-warm-yellow/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
