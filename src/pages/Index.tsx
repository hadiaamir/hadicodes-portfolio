
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_2%,rgba(33,33,33,1)_3%,rgba(33,33,33,1)_97%,rgba(0,0,0,0)_98%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(40, 40, 40, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 40, 40, 0.1) 1px, transparent 1px)',
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
