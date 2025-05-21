
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-gradient">hadicodes</a>
            <p className="text-gray-400 mt-1 text-sm">Full-Stack Developer</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">TikTok</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitch</a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} hadicodes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
