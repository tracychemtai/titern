Titern Concrete Solutions – Digital Showcase
This is a high-performance Next.js application developed for Titern Concrete Solutions. It features a cinematic user interface, advanced GSAP-driven parallax effects, and a server-side contact system.

🛠 Tech Stack
Framework: Next.js 15 (App Router)

Styling: Tailwind CSS v4

Animations: GSAP (GreenSock Animation Platform) + ScrollTrigger

Backend: Next.js Route Handlers + Resend (Email Infrastructure)

Icons/Assets: Custom industrial photography & Lucide React

🚀 Key Features Implemented
1. Cinematic Navigation
Fullscreen Entrance: A high-impact, fullscreen sidebar menu with backdrop blurring.

Micro-interactions: Hover-triggered italics and staggered text reveals for a premium "editorial" feel.

2. Intelligent Parallax Grid (Products)
Adaptive Animation: * Desktop: Features multi-speed parallax scrolling where items move at different rates relative to the scroll speed.

Tablet/Mobile: GSAP parallax is automatically disabled for screens under 1024px to prevent "scroll-reversing" glitches and address-bar jitter. Instead, it uses a clean, high-performance CSS fade-in reveal.

Asymmetric Layout: An intentional grid system that creates a modern, architectural visual flow.

3. Functional Contact System
Serverless Emailing: Integrated with Resend via Next.js API Routes.

Interactive Forms: Custom-styled input fields with animated "growing" borders on focus.

Validation: Real-time feedback for "Sending", "Success", and "Error" states.

📦 Installation & Setup
Clone and Install:

Bash
npm install
Environment Variables: Create a .env.local file and add your Resend API key:

Code snippet
RESEND_API_KEY=re_your_api_key_here
Run Development Server:

Bash
npm run dev
🏗 Project Structure
app/api/contact/route.ts: Server-side logic for handling project inquiries.

components/ProductsPage.tsx: The core product showcase featuring gsap.matchMedia for responsive animations.

components/ContactPage.tsx: The lead generation form with state management and API integration.

app/globals.css: Tailwind v4 configuration and hardware-acceleration utility classes.

🌐 Deployment
This project is optimized for the Vercel Platform.

To deploy:

Push your code to GitHub.

Import the project into Vercel.

Add your RESEND_API_KEY to the Vercel Environment Variables.

Titern Concrete Solutions – Building the foundation of Kenya with structural excellence