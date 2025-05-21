import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/lib/context/ThemeContext';

const AboutSection = () => {
  const { theme } = useTheme();
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "MongoDB", "PostgreSQL", 
    "Tailwind CSS", "GraphQL", "Docker", "AWS"
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-0 relative">
      {/* Gradient background element */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className={`text-2xl font-bold ${
              theme === 'light' ? 'text-gray-800' : ''
            } text-gradient mb-2`}>ABOUT ME</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className={`text-lg ${
                theme === 'light' ? 'text-gray-700' : 'text-white'
              }`}>
                I'm a passionate Full Stack Developer with a focus on creating beautiful, functional, 
                and high-performance web applications. With several years of experience in both frontend 
                and backend technologies, I bring ideas to life with clean code and attention to detail.
              </p>
              <p className={`text-lg ${
                theme === 'light' ? 'text-gray-700' : 'text-white'
              }`}>
                When I'm not coding, you can find me sharing tech content across social media, 
                helping others learn to code, and staying up-to-date with the latest in the tech world.
              </p>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'light'
                        ? 'bg-gray-100 text-gray-800 border border-gray-200 hover:border-purple-500'
                        : 'bg-gray-800 text-white border border-gray-700 hover:border-purple-500'
                    } transition-colors`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
