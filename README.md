# V4 Building Solutions - Next.js Website

A modern, responsive website for V4 Building Solutions built with Next.js 16 and TailwindCSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + custom CSS
│   ├── layout.tsx       # Root layout with metadata
│   └── page.js          # Main home page
└── components/
    ├── Header.jsx       # Navigation with mega menu
    ├── Hero.jsx         # Hero section
    ├── Services.jsx     # Services grid
    ├── Gallery.jsx      # Project carousel
    ├── Testimonials.jsx # Client testimonials
    ├── Footer.jsx       # Footer with contact info
    ├── ContactModal.jsx # Contact form modal
    ├── WhatsAppButton.jsx # Floating WhatsApp button
    └── ServicePages.jsx # Individual service pages
```

## 🖼️ Adding Project Images

Place your project images in the `public/images/` directory:

```
public/
├── V4_Logo.jpg          # Company logo ✅
├── images/
│   ├── L1.jpg
│   ├── Nimal Front View.jpg
│   ├── wash area_L.jpg
│   ├── Living Room_1_R1.jpg
│   ├── 07.jpg
│   ├── living L1.jpg
│   └── Upper_Living.jpg
```

## 🌐 Deploy to Vercel

### Option 1: GitHub Integration (Recommended)
1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## ✨ Features

- ✅ Responsive design (mobile-first)
- ✅ Glassmorphism effects
- ✅ Animated hero section
- ✅ Mega menu navigation
- ✅ Project gallery carousel
- ✅ Contact form with Google Sheets integration
- ✅ WhatsApp floating button
- ✅ SEO optimized
- ✅ Fast loading with Next.js optimizations

## 🔧 Configuration

### Google Analytics
Update the GA tracking ID in `layout.tsx`:
```tsx
src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"
```

### Contact Form
The form submits to a Google Apps Script. Update the endpoint in `ContactModal.jsx` if needed.

## 📞 Contact

V4 Building Solutions
- Phone: +91 4885 298455, +91 9746 011 785
- Email: v4buildingsolutions@gmail.com
- Address: 1st Floor, Vibins Complex, Calicut Road, Kunnamkulam, Thrissur, 680503
