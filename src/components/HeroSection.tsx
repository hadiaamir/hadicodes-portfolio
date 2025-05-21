
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          {/* Social media handles like in the reference */}
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 opacity-80">
            {['Instagram', 'TikTok', 'Twitter', 'Twitch'].map((platform, index) => (
              <a 
                key={index} 
                href="#" 
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-purple-400">@</span>
                <span>hadi.codes</span>
              </a>
            ))}
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            FULL-STACK DEVELOPER
            <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
          </h1>
          
          {/* Subheading with arrow similar to reference */}
          <p className="text-xl md:text-2xl text-yellow-300 font-medium flex items-center gap-2">
            FOLLOW ME FOR <span className="inline-block w-8 h-[2px] bg-yellow-300"></span> TECH & CODING CONTENT
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 btn-hover-effect text-lg py-6">
              View My Projects <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="border border-purple-500 hover:bg-purple-500/20 btn-hover-effect text-lg py-6">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
