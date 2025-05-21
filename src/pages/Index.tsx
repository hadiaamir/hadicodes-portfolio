import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useTheme } from '@/lib/context/ThemeContext';

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${
      theme === 'light' 
        ? 'bg-gray-100 text-gray-900' 
        : 'bg-black text-white'
    } overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className={`h-full w-full ${
          theme === 'light'
            ? 'bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_2%,rgba(240,240,240,1)_3%,rgba(240,240,240,1)_97%,rgba(255,255,255,0)_98%,rgba(255,255,255,0)_100%)]'
            : 'bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_2%,rgba(33,33,33,1)_3%,rgba(33,33,33,1)_97%,rgba(0,0,0,0)_98%,rgba(0,0,0,0)_100%)]'
        }`} />
        <div className="absolute inset-0" style={{ 
          backgroundImage: theme === 'light'
            ? 'linear-gradient(rgba(200, 200, 200, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 200, 200, 0.1) 1px, transparent 1px)'
            : 'linear-gradient(rgba(40, 40, 40, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 40, 40, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
