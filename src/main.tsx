import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './lib/emailjs-config';

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

createRoot(document.getElementById("root")!).render(<App />);
