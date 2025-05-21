
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-0 relative">
      {/* Gradient background element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-2">GET IN TOUCH</h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl">
            I'm currently available for freelance work and full-time opportunities.
            If you have a project that needs some creative coding, or if you're looking
            to hire a developer, feel free to reach out!
          </p>
          
          <div className="w-full max-w-md p-6 bg-gray-900/50 rounded-lg gradient-border mt-4">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 btn-hover-effect"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
