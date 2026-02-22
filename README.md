<<<<<<< HEAD
# Synth AI - Business Automation Platform 🚀

A stunning, modern landing page for an AI-powered business automation SaaS platform. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek black background with emerald green accents
- 🌊 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Lightning Fast** - Built with Next.js 14 and optimized for performance
- 🎯 **Complete Sections**:
  - Hero with animated dashboard preview
  - Social proof
  - Feature cards with glassmorphism
  - How it works timeline
  - Interactive product preview/audit dashboard
  - About section
  - CTA section
  - Contact form
  - Footer

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. **Navigate to the project folder:**
```bash
cd synth-website
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

1. **Push your code to GitHub**

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

That's it! Your site will be live in minutes.

## 📁 Project Structure

```
synth-website/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section with dashboard
│   ├── SocialProof.tsx       # Company logos
│   ├── Features.tsx          # Feature cards
│   ├── HowItWorks.tsx        # Timeline steps
│   ├── ProductPreview.tsx    # Audit dashboard preview
│   ├── About.tsx             # About section
│   ├── CTASection.tsx        # Call to action
│   ├── Contact.tsx           # Contact form
│   └── Footer.tsx            # Footer
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primaryBg: "#0B0B0B",      // Main background
  accentGreen: "#10B981",    // Primary accent
  accentGlow: "#059669",     // Hover states
  // ... more colors
}
```

### Fonts

Fonts are loaded from Google Fonts in `app/globals.css`. Change them by updating the `@import` statement.

### Content

Edit the component files to change text, add sections, or modify layouts.

## 📝 TODO / Future Enhancements

- [ ] Add file upload functionality
- [ ] Connect contact form to backend
- [ ] Add pricing page
- [ ] Implement authentication
- [ ] Add blog section
- [ ] Create actual audit engine integration

## 🐛 Common Issues

**Issue:** Styles not loading
- Solution: Make sure Tailwind is properly configured and `globals.css` is imported

**Issue:** Animations not working
- Solution: Check that Framer Motion is installed: `npm install framer-motion`

**Issue:** Build errors
- Solution: Delete `.next` folder and `node_modules`, then run `npm install` again

## 📄 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

This is a template project. Feel free to fork and customize!

---

Built with ❤️ by the Synth team
=======
# synth-frontend
Frontend for Synth — AI-powered business audit &amp; automation platform.
>>>>>>> 0e7e8f9be2e028e5e26a4b2c99b1db102505110b
