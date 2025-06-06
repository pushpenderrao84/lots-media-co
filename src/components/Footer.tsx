
import React from 'react';
import { Instagram, Mail, Twitter } from 'lucide-react';
import { Link } from "react-router-dom";
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-soft-white py-12">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center">
          {/* Logo, Description and Social Icons */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/logo/lots-media-co.png" 
                alt="LOTS Media Logo" 
                className="h-12 mr-2 outline outline-[0.5px] outline-[#FAFAFA] rounded-md"
              />
            </Link>
            <p className="text-soft-white/70 mb-4">
              Designs that speak. Stories that connect.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://instagram.com/lotsmediaco" icon={<Instagram size={20} />} />
              <SocialIcon href="mailto:lotsmediaco@gmail.com" icon={<Mail size={20} />} />
              <SocialIcon href="https://x.com/lotsmediaco" icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Newsletter - Right aligned */}
          <div className="flex justify-end">
            <div className="w-full max-w-sm">
              <Newsletter />
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
            <Link to="/feedback" className="text-gray-400 hover:text-white text-sm transition-colors">
              Feedback
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
      className="text-soft-white hover:text-warm-yellow transition-all duration-300"
    >
      {icon}
    </a>
  );
};

export default Footer;
