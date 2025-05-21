# Hadia's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring:
- Light and dark mode themes
- Project showcases
- Contact form with EmailJS integration
- Interactive UI components

## Setup and Installation

1. Clone the repository:
```sh
git clone https://github.com/hadiaamir/hadia-creative-canvas.git
cd hadia-creative-canvas
```

2. Install dependencies:
```sh
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your EmailJS configuration (see `.env.example` for required variables)
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
```sh
npm run dev
```

## EmailJS Integration

This project uses EmailJS for the contact form. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with variables:
   - `{{name}}` - The sender's name
   - `{{title}}` - The subject line
   - `{{message}}` - The message content
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## Deployment

### Netlify

1. Install Netlify CLI (if not already installed):
```sh
npm install -g netlify-cli
```

2. Build the project:
```sh
npm run build
```

3. Deploy using Netlify CLI:
```sh
netlify deploy
```

4. Set up environment variables in Netlify:
   - Go to Site settings > Build & deploy > Environment
   - Add the same environment variables from your `.env` file

### Custom Domain

To use a custom domain:
1. In Netlify, go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS records

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- shadcn/ui
- EmailJS
- React Router
- Font Awesome

## Project Structure

- `/src/components`: Reusable UI components
- `/src/pages`: Page components
- `/src/lib`: Utilities, data, and context
- `/public`: Static assets like images

## License

This project is licensed under the MIT License.
