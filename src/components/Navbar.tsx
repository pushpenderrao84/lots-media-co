
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on pages that need different header behavior
  const needsLightBackground = location.pathname === '/services' || location.pathname === '/testimonials';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Preload the logo image
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/a6e0b97c-98e4-46fd-bb8d-0ef459a48468.png";
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled 
          ? "bg-soft-white shadow-md py-3" 
          : needsLightBackground 
            ? "bg-soft-white/90 backdrop-blur-sm py-3" 
            : "bg-transparent py-5"
      )}
    >
      <div className="container-padding max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-charcoal z-50 flex items-center">
          <img 
            src="/lovable-uploads/a6e0b97c-98e4-46fd-bb8d-0ef459a48468.png" 
            alt="LOTS Media Logo" 
            className="h-12 mr-2 outline outline-[0.5px] outline-[#333333] rounded-md"
            loading="eager"
            fetchPriority="high"
          />
      </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50"
        >
          <Menu />
        </Button>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-soft-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="flex flex-col space-y-6 items-center">
            <NavLinks onClick={() => setIsMobileMenuOpen(false)} />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      <Link to="/about" className="text-charcoal hover:text-warm-yellow transition-colors">
        About
      </Link>
      <Link to="/services" className="text-charcoal hover:text-warm-yellow transition-colors">
        Services
      </Link>
      <Link to="/portfolio" className="text-charcoal hover:text-warm-yellow transition-colors">
        Portfolio
      </Link>
      <Link to="/testimonials" className="text-charcoal hover:text-warm-yellow transition-colors">
        Testimonials
      </Link>
      <Link to="/pricing" className="text-charcoal hover:text-warm-yellow transition-colors">
        Pricing
      </Link>
      <Link to="/contact" className="text-charcoal hover:text-warm-yellow transition-colors">
        Contact
      </Link>
    </>
  );
};

export default Navbar;
