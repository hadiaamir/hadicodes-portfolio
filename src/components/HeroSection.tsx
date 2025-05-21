import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTheme } from '@/lib/context/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          {/* Social media links */}
          <div className="social-links flex gap-6 pb-2 md:pb-0">
            <a href="https://www.youtube.com/@hadicodes" target="_blank" rel="noopener noreferrer" title="YouTube" 
              className={`text-2xl hover:scale-110 transition-all ${
                theme === 'light' ? 'text-gray-700 hover:text-red-600' : 'text-gray-300 hover:text-red-500'
              }`}>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/hadi.codes" target="_blank" rel="noopener noreferrer" title="Instagram"
              className={`text-2xl hover:scale-110 transition-all ${
                theme === 'light' ? 'text-gray-700 hover:text-pink-600' : 'text-gray-300 hover:text-pink-500'
              }`}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@hadi.codes" target="_blank" rel="noopener noreferrer" title="TikTok"
              className={`text-2xl hover:scale-110 transition-all ${
                theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'
              }`}>
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://twitter.com/@hadicodez" target="_blank" rel="noopener noreferrer" title="Twitter"
              className={`text-2xl hover:scale-110 transition-all ${
                theme === 'light' ? 'text-gray-700 hover:text-blue-500' : 'text-gray-300 hover:text-blue-400'
              }`}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          
          {/* Profile image and main heading */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
              <img 
                src="/images/profile pic.jpg" 
                alt="Hadia Amir" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                FULL-STACK DEVELOPER
                <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </h1>
              
              <p className={`mt-4 text-lg max-w-2xl ${
                theme === 'light' ? 'text-gray-700' : 'text-white'
              }`}>
                I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative coding, or if you're looking to hire a developer, feel free to reach out!
              </p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#projects">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 btn-hover-effect text-lg py-6 w-full sm:w-auto">
                View My Projects <ArrowRight className="ml-2" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className={`text-lg py-6 w-full sm:w-auto ${
                theme === 'light'
                  ? 'border border-gray-800 hover:bg-gray-100 text-gray-800'
                  : 'border border-white hover:bg-white/20 text-white'
              }`}>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
