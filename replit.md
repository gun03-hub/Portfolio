# Portfolio Website - Gunjan Arora

## Overview
This is a personal portfolio website for Gunjan Arora, a 2nd Year CS Student at University of Delhi. The portfolio showcases skills, projects, resume, and contact information through a clean, modern design.

## Tech Stack
- **Framework**: React.js 18.3.1 with Create React App
- **Styling**: Tailwind CSS with custom configuration
- **Routing**: React Router DOM v6 (HashRouter)
- **Icons**: Material UI Icons (@mui/icons-material)
- **Animations**: 
  - AOS (Animate On Scroll)
  - GSAP
  - Typewriter Effect
  - React Typed
- **Other Libraries**: 
  - EmailJS for contact form
  - Vercel Analytics
  - Lottie Player for animations
  - React Parallax Tilt

## Project Structure
```
src/
├── components/        # Reusable components
│   ├── About/        # About section
│   ├── Activities/   # Activity cards (Spotify, Code)
│   ├── Contact/      # Contact form
│   ├── Home/         # Home/Welcome section
│   ├── Projects/     # Projects showcase
│   ├── Resume/       # Resume section with skills
│   └── ...           # Other UI components
├── pages/            # Page components
├── Layout/           # Layout wrapper
├── assets/           # Images, audio, files
├── constants/        # App constants
├── hooks/            # Custom React hooks
└── utils/            # Utility functions

public/               # Static assets
```

## Development Setup

### Environment Variables
The following environment variables are configured for development:
- `PORT=5000` - Dev server port
- `HOST=0.0.0.0` - Allow all hosts for Replit proxy
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Disable host check for iframe preview
- `WDS_SOCKET_PORT=0` - WebSocket configuration

### Running the App
The app runs automatically via the "Start application" workflow.

To manually start:
```bash
npm start
```

The development server will start on port 5000 and is accessible through the Replit webview.

## Key Features
- Responsive design with sidebar navigation
- Smooth scrolling and animations
- Sections: Welcome, About, Resume, Projects, Contact
- Downloadable CV/Resume
- GitHub and LinkedIn integration
- Project showcase with tech stack tags
- Contact form with EmailJS integration
- Skill progress bars

## Dependencies
All dependencies are installed with `--legacy-peer-deps` flag due to compatibility between React 18 and Material UI v4/v5 packages.

Key packages:
- react & react-dom (^18.3.1)
- react-router-dom (^6.25.0)
- @mui/material & @mui/icons-material (v5)
- tailwindcss (configured)
- axios, emailjs-com
- Animation libraries (aos, gsap, typewriter-effect, react-typed)

## Deployment
Configured for Replit autoscale deployment with `npm start` command.

## Notes
- Uses HashRouter for client-side routing compatibility
- Vercel Analytics is configured to ignore localhost events
- Some console warnings about DOM nesting are present but don't affect functionality
- Material UI v4 packages in package.json are not actually used (project uses v5)

## Last Updated
November 28, 2025 - Initial Replit setup completed
