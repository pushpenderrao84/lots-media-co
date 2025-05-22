
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex-grow">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-warm-yellow">Join</span> Us<br />
        </h1>
        
        <div className="max-w-none">
          <p className="text-lg text-charcoal/80 mb-10 mt-6 max-w-2xl">
            We're a creative powerhouse that designs bold, meaningful experiences. If you're passionate about storytelling, design, tech, or media — we'd love to hear from you.
          </p>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-4">No Open Roles Currently</h3>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              We're not hiring at the moment — but we're always excited to connect with passionate creators, editors, designers, and strategists.
            </p>
            <p className="text-charcoal/70 mb-6 max-w-xl mx-auto">
              Feel free to send us your portfolio for future opportunities.
            </p>

            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-charcoal bg-soft-white text-charcoal hover:bg-charcoal hover:text-soft-white" 
            >
              <a href="mailto:lotsmediaco@gmail.com">Send Us Your Portfolio</a>
            </Button>
            
            <br/><br/>
            <p className="mt-6 text-charcoal/80 ">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Careers;
