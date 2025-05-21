import React from 'react';
import { useTheme } from '@/lib/context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`${
      theme === 'light' 
        ? 'bg-white border-t border-gray-200' 
        : 'bg-black border-t border-gray-800'
    } py-8 px-4 transition-colors duration-300`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-center md:text-left mb-4 md:mb-0">
            <div className="mr-4 rounded-full overflow-hidden w-16 h-16 border-2 border-purple-400 flex-shrink-0">
              <img 
                src="/images/profile pic.jpg" 
                alt="Hadia Amir" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <a href="#" className={`text-xl font-bold ${
                theme === 'light' ? 'text-gray-800' : ''
              } text-gradient`}>hadicodes</a>
              <p className={`${
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              } mt-1 text-sm`}>Full-Stack Developer</p>
            </div>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className={`${
              theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-400 hover:text-white'
            } transition-colors`}>Instagram</a>
            <a href="#" className={`${
              theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-400 hover:text-white'
            } transition-colors`}>TikTok</a>
            <a href="#" className={`${
              theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-400 hover:text-white'
            } transition-colors`}>Twitter</a>
            <a href="#" className={`${
              theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-400 hover:text-white'
            } transition-colors`}>Twitch</a>
          </div>
        </div>
        
        <div className={`text-center ${
          theme === 'light' ? 'text-gray-500' : 'text-gray-500'
        } text-sm mt-8`}>
          © {new Date().getFullYear()} hadicodes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
