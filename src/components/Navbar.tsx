
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-gradient">hadicodes</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          <Button variant="outline" className="border border-purple-500 hover:bg-purple-500/20 btn-hover-effect">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button variant="outline" className="border border-purple-500 hover:bg-purple-500/20 w-full">
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
