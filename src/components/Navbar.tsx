import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/lib/context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

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
      isScrolled 
        ? theme === 'light'
          ? 'bg-white/90 shadow-sm backdrop-blur-md py-2'
          : 'bg-black/80 dark:bg-slate-950/80 backdrop-blur-md py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className={`text-xl md:text-2xl font-bold ${
            theme === 'light' ? 'text-gray-800' : ''
          } text-gradient`}>hadicodes</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className={`transition-colors ${
            theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
          }`}>About</a>
          <a href="#projects" className={`transition-colors ${
            theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
          }`}>Projects</a>
          <a href="#contact" className={`transition-colors ${
            theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
          }`}>Contact</a>
          <ThemeToggle />
          <a 
            href="/assets/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className={`${
              theme === 'light' 
                ? 'border border-gray-800 hover:bg-gray-100 text-gray-800' 
                : 'border border-white hover:bg-white/20 text-white'
            } btn-hover-effect`}>
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${
              theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 py-4 shadow-lg ${
          theme === 'light'
            ? 'bg-white/95 backdrop-blur-md'
            : 'bg-black/95 dark:bg-slate-950/95 backdrop-blur-md'
        }`}>
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className={`py-2 transition-colors ${
                theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className={`py-2 transition-colors ${
                theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`py-2 transition-colors ${
                theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="/assets/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className={`w-full ${
                theme === 'light'
                  ? 'border border-purple-600 hover:bg-purple-50 text-purple-700'
                  : 'border border-purple-500 hover:bg-purple-500/20 text-white'
              }`}>
                Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
