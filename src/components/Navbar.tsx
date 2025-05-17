
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled ? "bg-soft-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-padding max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-charcoal z-50 flex items-center">
          <img 
            src="/lovable-uploads/a6e0b97c-98e4-46fd-bb8d-0ef459a48468.png" 
            alt="LOTS Media Logo" 
            className="h-12 mr-2 outline outline-[2px] outline-[#333333] rounded-md"
          />
        </a>

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
      <a 
        href="#about" 
        className="text-charcoal hover:text-warm-yellow transition-colors"
        onClick={onClick}
      >
        About
      </a>
      <a 
        href="#services" 
        className="text-charcoal hover:text-warm-yellow transition-colors"
        onClick={onClick}
      >
        Services
      </a>
      <a 
        href="#portfolio" 
        className="text-charcoal hover:text-warm-yellow transition-colors"
        onClick={onClick}
      >
        Portfolio
      </a>
      <a 
        href="#testimonials" 
        className="text-charcoal hover:text-warm-yellow transition-colors"
        onClick={onClick}
      >
        Testimonials
      </a>
      <a 
        href="#pricing" 
        className="text-charcoal hover:text-warm-yellow transition-colors"
        onClick={onClick}
      >
        Pricing
      </a>
      <a 
        href="#contact" 
        className="text-charcoal hover:text-warm-yellow transition-colors"
        onClick={onClick}
      >
        Contact
      </a>
    </>
  );
};

export default Navbar;
