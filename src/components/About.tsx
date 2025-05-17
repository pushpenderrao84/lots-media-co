
import React from 'react';
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="section-padding bg-soft-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              <div className={cn(
                "w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-warm-yellow",
                "before:content-[''] before:absolute before:inset-0 before:bg-warm-yellow/20 before:z-10"
              )}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzaWduZXJ8fHx8fHwxNjg0MTUwNDc3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500" 
                  alt="Designer Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-charcoal rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-warm-yellow rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-warm-yellow">Me</span>
            </h2>
            <p className="text-lg mb-6 text-charcoal/90">
              Hi, I'm Jessica Davis, a graphic designer passionate about crafting visuals that communicate clearly and leave a lasting impression.
            </p>
            <p className="text-lg mb-6 text-charcoal/90">
              With over 5 years of experience in the creative industry, I specialize in social media design, branding, and content visuals — blending creativity and storytelling with every project. My goal is to help businesses and content creators establish a strong visual identity that resonates with their audience.
            </p>
            <p className="text-lg text-charcoal/90">
              I believe that great design is not just about making things look good, but about solving problems and creating meaningful connections. Whether you're a small business looking to establish your brand or a content creator wanting to stand out, I'm here to help you achieve your goals.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-warm-yellow"></div>
                <p className="font-semibold">5+ Years Experience</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-warm-yellow"></div>
                <p className="font-semibold">150+ Projects</p>
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
};

export default About;
