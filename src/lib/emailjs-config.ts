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

export const EMAILJS_CONFIG = {
 SERVICE_ID: 'service_d7njs0h', // Replace with your EmailJS service ID
 TEMPLATE_ID: 'template_rllam76', // Replace with your EmailJS template ID
 PUBLIC_KEY: 'Eg8gfL1sQgv6aBDjM', // Replace with your EmailJS public key
};

// When you set up your EmailJS template, make sure to include these variables:
// - {{name}} (the sender's name)
// - {{message}} (the message content)
// - {{title}} (the subject/title of the message) 