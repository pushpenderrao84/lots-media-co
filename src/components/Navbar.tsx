
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on pages that need dark header
  const needsDarkHeader = location.pathname === '/services' || location.pathname === '/testimonials';

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
    img.src = "/logo/lots-media-co.png";
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled 
          ? needsDarkHeader 
            ? "bg-charcoal shadow-md py-3" 
            : "bg-soft-white shadow-md py-3"
          : needsDarkHeader 
            ? "bg-charcoal py-5" 
            : "bg-transparent py-5"
      )}
    >
      <div className="container-padding max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className={cn(
        "text-2xl font-bold z-50 flex items-center",
        needsDarkHeader ? "text-soft-white" : "text-charcoal"
      )}>
          <img 
            src="/logo/lots-media-co.png" 
            alt="LOTS Media Logo" 
            className="h-12 mr-2 outline outline-[0.5px] outline-[#333333] rounded-md"
            loading="eager"
            fetchPriority="high"
          />
      </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLinks isDark={needsDarkHeader} />
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50"
        >
          <Menu className={needsDarkHeader ? "text-soft-white" : "text-charcoal"} />
        </Button>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
          needsDarkHeader ? "bg-charcoal" : "bg-soft-white",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="flex flex-col space-y-6 items-center">
            <NavLinks onClick={() => setIsMobileMenuOpen(false)} isDark={needsDarkHeader} />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ onClick, isDark = false }: { onClick?: () => void; isDark?: boolean }) => {
  const linkClass = isDark 
    ? "text-soft-white hover:text-warm-yellow transition-colors" 
    : "text-charcoal hover:text-warm-yellow transition-colors";
    
  return (
    <>
      <Link to="/about" className={linkClass} onClick={onClick}>
        About
      </Link>
      <Link to="/services" className={linkClass} onClick={onClick}>
        Services
      </Link>
      <Link to="/portfolio" className={linkClass} onClick={onClick}>
        Portfolio
      </Link>
      <Link to="/testimonials" className={linkClass} onClick={onClick}>
        Testimonials
      </Link>
      <Link to="/pricing" className={linkClass} onClick={onClick}>
        Pricing
      </Link>
      <Link to="/contact" className={linkClass} onClick={onClick}>
        Contact
      </Link>
    </>
  );
};

export default Navbar;
