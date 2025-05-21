// EmailJS configuration
// You need to create an account at emailjs.com and set up a service and template

// Email service setup instructions:
// 1. Sign up at https://www.emailjs.com/
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with variables:
//    - {{name}} for the sender's name
//    - {{message}} for the message content
//    - {{title}} for the subject/title
// 4. Get your service ID, template ID, and user ID (public key)
// 5. Replace the placeholder values below

// For security reasons, values are stored in environment variables (.env file)
// that are not committed to the repository
export const EMAILJS_CONFIG = {
 SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
 TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
 PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

// When you set up your EmailJS template, make sure to include these variables:
// - {{name}} (the sender's name)
// - {{message}} (the message content)
// - {{title}} (the subject/title of the message) 