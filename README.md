🚀 Modern Portfolio Website
A beautiful, responsive portfolio website built with Next.js, React, and Tailwind CSS.

✨ Features
🎨 Modern gradient design with glassmorphism effects
📱 Fully responsive (mobile, tablet, desktop)
⚡ Lightning-fast performance with Next.js
🎯 Smooth scrolling navigation
📧 Working contact form with email integration
🌈 Animated skill bars and interactive elements
🎭 Project showcase with hover effects
🔗 Social media integration
🛠️ Tech Stack
Framework: Next.js 14
Styling: Tailwind CSS
Icons: Lucide React
Email: Nodemailer
Deployment: Vercel
📦 Installation
Clone the repository
bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
Install dependencies
bash
npm install
Set up environment variables Create a .env.local file in the root directory:
env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password
Run the development server
bash
npm run dev
Open http://localhost:3000 in your browser.

🎨 Customization
Personal Information
Update the following files with your information:

components/Hero.jsx

Your name
Title/role
Social media links
components/About.jsx

Bio description
Stats (projects, experience, clients)
components/Skills.jsx

Your tech skills and proficiency levels
components/Projects.jsx

Project details, descriptions, and links
components/Contact.jsx

Contact information (email, phone, location)
Colors & Theme
Modify colors in tailwind.config.js and component files. Current theme uses purple/pink gradients.

Images
Replace emoji placeholders in projects with actual images:

jsx
// In Projects.jsx, replace:
<div className="text-5xl">🛒</div>

// With:
<img src="/images/project1.jpg" alt="Project" />
📧 Email Setup
Option 1: Gmail (Development)
Enable 2-Factor Authentication in your Google Account
Generate App Password: https://myaccount.google.com/apppasswords
Add credentials to .env.local
Option 2: SendGrid (Production - Recommended)
bash
npm install @sendgrid/mail
Update app/api/contact/route.js:

javascript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
Option 3: Resend (Modern Alternative)
bash
npm install resend
🚀 Deployment
Deploy to Vercel (Recommended)
Install Vercel CLI
bash
npm i -g vercel
Deploy
bash
vercel
Or connect your GitHub repository to Vercel for automatic deployments.

Environment Variables on Vercel
Add these in your Vercel project settings:

EMAIL_USER
EMAIL_PASS
📁 Project Structure
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js       # Contact form API
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   └── page.js                # Homepage
├── components/
│   ├── Navbar.jsx             # Navigation bar
│   ├── Hero.jsx               # Hero section
│   ├── About.jsx              # About section
│   ├── Skills.jsx             # Skills section
│   ├── Projects.jsx           # Projects showcase
│   ├── Contact.jsx            # Contact form
│   └── Footer.jsx             # Footer
├── public/                    # Static files
├── .env.local                 # Environment variables
├── tailwind.config.js         # Tailwind configuration
├── package.json               # Dependencies
└── README.md                  # Documentation
🎯 Performance Optimization
✅ Lazy loading images
✅ Optimized animations
✅ Minimal JavaScript bundle
✅ Server-side rendering
✅ Static generation where possible
🐛 Troubleshooting
Issue: Contact form not working

Check email credentials in .env.local
Verify 2FA and App Password for Gmail
Check console for error messages
Issue: Styles not loading

Run npm install again
Clear .next folder and rebuild
Check Tailwind configuration
Issue: Build errors

Update all dependencies: npm update
Check Node.js version (recommend v18+)
📝 License
MIT License - feel free to use this for your own portfolio!

🤝 Contributing
Contributions, issues, and feature requests are welcome!

👨‍💻 Author
Your Name

GitHub: @yourusername
LinkedIn: Your Name
Email: your.email@example.com
🌟 Show your support
Give a ⭐️ if you like this project!

Built with ❤️ using Next.js, React, and Tailwind CSS

