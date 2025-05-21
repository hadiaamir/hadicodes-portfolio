import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/context/ThemeContext';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

const ContactSection = () => {
  const { theme } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSending(true);
    setError(null);
    
    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      form.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
      .then((result) => {
        console.log('Email sent!', result.text);
        setIsSending(false);
        setIsSent(true);
        if (form.current) form.current.reset();
        
        // Reset the success message after 5 seconds
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setIsSending(false);
        setError('Failed to send message. Please try again later.');
      });
  };
  
  return (
    <section id="contact" className="py-20 px-4 md:px-0 relative">
      {/* Gradient background element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center gap-8">
          <div>
            <h2 className={`text-2xl font-bold ${
              theme === 'light' ? 'text-gray-800' : ''
            } text-gradient mb-2`}>GET IN TOUCH</h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          
          <p className={`text-xl ${
            theme === 'light' ? 'text-gray-700' : 'text-white'
          } max-w-2xl`}>
            I'm currently available for freelance work and full-time opportunities.
            If you have a project that needs some creative coding, or if you're looking
            to hire a developer, feel free to reach out!
          </p>
          
          <div className={`w-full max-w-md p-6 rounded-lg mt-4 ${
            theme === 'light' 
              ? 'bg-white shadow-md border border-gray-200' 
              : 'bg-gray-900/50 gradient-border'
          }`}>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-1 text-left ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    theme === 'light'
                      ? 'bg-gray-50 border border-gray-300 text-gray-900'
                      : 'bg-gray-800 border border-gray-700 text-white'
                  }`}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="title" className={`block text-sm font-medium mb-1 text-left ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>Subject</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    theme === 'light'
                      ? 'bg-gray-50 border border-gray-300 text-gray-900'
                      : 'bg-gray-800 border border-gray-700 text-white'
                  }`}
                  placeholder="Subject of your message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-1 text-left ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none ${
                    theme === 'light'
                      ? 'bg-gray-50 border border-gray-300 text-gray-900'
                      : 'bg-gray-800 border border-gray-700 text-white'
                  }`}
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              
              {error && (
                <div className="text-red-500 text-sm text-left">
                  {error}
                </div>
              )}
              
              {isSent && (
                <div className="text-green-500 text-sm text-left">
                  Your message has been sent successfully!
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 btn-hover-effect"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </Button>
              
              <div className={`text-xs text-center mt-4 ${
                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Or email me directly at: <a 
                  href="mailto:hadi.aamir8@gmail.com" 
                  className={`font-medium ${
                    theme === 'light' ? 'text-purple-700' : 'text-purple-400'
                  }`}
                >
                  hadi.aamir8@gmail.com
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
