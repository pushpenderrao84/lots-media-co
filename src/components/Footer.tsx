
import React from 'react';
import { Instagram, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-soft-white py-12">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/a6e0b97c-98e4-46fd-bb8d-0ef459a48468.png" 
                alt="LOTS Media Logo" 
                className="h-12 mr-2 outline outline-[0.5px] outline-[#FAFAFA] rounded-md"
              />
            </a>
            <p className="mt-2 text-soft-white/70">
              Designs that speak. Stories that connect.
            </p>
          </div>
          
          <div className="flex space-x-2">
            <SocialIcon href="https://instagram.com/lotsmediaco" icon={<Instagram />} />
            <SocialIcon href="mailto:lotsmediaco@gmail.com" icon={<Mail />} />
            <SocialIcon href="https://x.com/lotsmediaco" icon={<Twitter />} />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-soft-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-soft-white/70 text-sm">
            © 2025 LOTS Media. All rights reserved. Designed with love.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="lots-media-visions/edit/main/src/pages/PrivacyPolicy.tsx" className="text-soft-white/70 hover:text-warm-yellow text-sm">Privacy Policy</a>
            <a href="#" className="text-soft-white/70 hover:text-warm-yellow text-sm">Terms of Service</a>
            <a href="#" className="text-soft-white/70 hover:text-warm-yellow text-sm">Cookie Policy</a>
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
