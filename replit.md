# Portfolio Website - Gunjan Arora

## Overview
A modern, professional portfolio website for Gunjan Arora showcasing skills, projects, and experience as a Full Stack Developer. Features a sleek dark bluish theme with modern animations and responsive design.

## Tech Stack
- **Framework**: React.js 18.3.1 with Create React App
- **Styling**: Tailwind CSS with custom dark bluish color palette
- **Routing**: React Router DOM v6 (HashRouter)
- **Icons**: Material UI Icons (@mui/icons-material)
- **Animations**: 
  - AOS (Animate On Scroll)
  - CSS Keyframe animations
  - Typewriter Effect
- **Contact**: EmailJS for contact form
- **Other**: Vercel Analytics, React Parallax Tilt

## Design Features
- Dark bluish gradient background with subtle grid pattern
- Glassmorphism cards with backdrop blur effects
- Gradient text and borders
- Custom cursor with glow effect (desktop)
- Smooth scroll navigation
- Floating background shapes with blur
- Modern horizontal navigation header
- Responsive mobile menu

## Project Structure
```
src/
├── components/
│   ├── About/          # About section with services cards
│   ├── Contact/        # Contact form with EmailJS
│   ├── Home/           # Hero section with typewriter
│   ├── Projects/       # Project cards grid
│   ├── Resume/         # Skills & certifications
│   ├── Display.js      # Main content wrapper
│   ├── Navigation.js   # Horizontal navigation header
│   └── ...
├── pages/
│   └── HomePage.js     # Main page component
├── Layout/
│   └── Layout.js       # Layout with cursor & animations
├── assets/             # Images, audio, resume PDF
├── constants/          # Project data
└── styles
    ├── App.css         # Custom styles & cursor
    └── index.css       # Tailwind config & utilities
```

## Color Palette
- **Primary**: Blue shades (#3b82f6, #2563eb, #1d4ed8)
- **Background**: Dark slate (#0f172a, #1e293b, #020617)
- **Accent**: Cyan (#06b6d4), Purple (#8b5cf6), Emerald (#10b981)
- **Text**: White & slate gray variations

## Development Setup

### Environment Variables
- `PORT=5000` - Dev server port
- `HOST=0.0.0.0` - Allow all hosts for Replit proxy
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Disable host check

### Running Locally
```bash
npm install --legacy-peer-deps
npm start
```

## Key Sections
1. **Hero**: Introduction with typewriter, stats, and profile photo
2. **About**: Overview, technologies, and service cards
3. **Resume**: Education, certifications, and skill bars
4. **Projects**: Grid of project cards with hover effects
5. **Contact**: Contact form and social links

## Deployment
Configured for Replit static deployment:
- Build: `npm run build`
- Public directory: `build`

## Recent Changes
- November 28, 2025: Complete redesign with modern dark bluish theme
  - New horizontal navigation replacing sidebar
  - Glassmorphism card design
  - Enhanced animations and hover effects
  - Professional senior developer presentation
  - Mobile-responsive layout
