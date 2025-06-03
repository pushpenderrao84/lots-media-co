
import React from 'react';
import { Instagram, Mail, Twitter } from 'lucide-react';
import { Link } from "react-router-dom";
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-soft-white py-12">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <a href="#" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/a6e0b97c-98e4-46fd-bb8d-0ef459a48468.png" 
                alt="LOTS Media Logo" 
                className="h-12 mr-2 outline outline-[0.5px] outline-[#FAFAFA] rounded-md"
              />
            </a>
            <p className="text-soft-white/70 mb-4">
              Designs that speak. Stories that connect.
            </p>
            <div className="flex space-x-2">
              <SocialIcon href="https://instagram.com/lotsmediaco" icon={<Instagram />} />
              <SocialIcon href="mailto:lotsmediaco@gmail.com" icon={<Mail />} />
              <SocialIcon href="https://x.com/lotsmediaco" icon={<Twitter />} />
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <Newsletter />
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
                <Link to="/services" className="block text-gray-400 hover:text-white text-sm transition-colors">
                  Services
                </Link>
                <Link to="/portfolio" className="block text-gray-400 hover:text-white text-sm transition-colors">
                  Portfolio
                </Link>
                <Link to="/pricing" className="block text-gray-400 hover:text-white text-sm transition-colors">
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-soft-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-soft-white/70 text-sm">
            © 2025 LOTS Media. All rights reserved. Designed with love.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
            <Link to="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-warm-yellow/5 p-3 rounded-full hover:bg-charcoal text-soft-white transition-colors group"
    >
      <span className="text-charcoal group-hover:bg-charcoal text-soft-white transition-colors">
        {icon}
      </span>
    </a>
  );
};

export default Footer;
