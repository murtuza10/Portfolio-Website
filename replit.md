# Portfolio Website Project

## Overview
A full-stack portfolio website built with React, Express, TypeScript and PostgreSQL. Features a modern UI with dark mode support, responsive design, and comprehensive portfolio sections including projects, experience, skills, and contact functionality.

## Project Architecture
- **Frontend**: React with TypeScript, Vite build system
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Replit hosting with automated workflows

## Key Features
- Modern portfolio website with sections for:
  - Hero/About section with profile information
  - Experience and education display
  - Skills and tools showcase
  - Projects portfolio with detailed information
  - Contact form functionality
  - Resume download capability
- Dark mode support
- Responsive design
- Real-time contact form submissions stored in database
- Database-driven portfolio content management

## Recent Changes (Migration from Replit Agent)
### July 22, 2025 - Migration Completed
✓ Successfully migrated project from Replit Agent to standard Replit environment
✓ All dependencies properly installed and functioning  
✓ PostgreSQL database created and properly configured
✓ Database schema pushed and seeded with portfolio data
✓ Express server running on port 5000 with Vite frontend integration
✓ View counter functionality working with database integration
✓ Client-server separation maintained with proper security practices
✓ Migration completed successfully - project fully operational

### Enhanced UI Implementation (July 22, 2025)
✓ Implemented advanced visual design with modern animations using Framer Motion
✓ Added comprehensive view counter functionality with PostgreSQL database integration
✓ Created dynamic theme provider with light/dark mode toggle
✓ Enhanced Hero section with typewriter effect, floating animations, and glassmorphism design
✓ Developed advanced project cards with filtering, hover effects, and category-based organization
✓ Implemented responsive navigation bar with smooth scroll and theme toggle
✓ Added animated backgrounds, gradient effects, and micro-interactions throughout
✓ ViewCounter component displays real-time visitor statistics with elegant animations

## Architecture Details
### Frontend Structure
- `client/src/pages/` - Page components (Home, 404)
- `client/src/components/` - Reusable components (Hero, About, Contact, etc.)
- `client/src/components/ui/` - shadcn/ui component library
- `client/src/lib/` - Utility functions and configurations
- `client/src/data/` - Portfolio data and configuration

### Backend Structure  
- `server/index.ts` - Main Express server setup
- `server/routes.ts` - API route definitions
- `server/storage.ts` - Storage interface and implementations
- `server/vite.ts` - Vite dev server integration

### Database Schema
- `portfolio` - Main portfolio data (profile, education, skills, projects)
- `messages` - Contact form submissions
- `resume` - Resume file information

## User Preferences
- Clean, modern design with professional appearance
- Database-driven content management
- Responsive design for all devices
- Fast loading and performance optimization

## Development Commands
- `npm run dev` - Start development server (frontend + backend)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run db:seed` - Seed database with initial data
- `npm run db:update` - Update portfolio data in database

## Environment Setup
- Node.js 20 with npm package management
- PostgreSQL database integration
- Environment variables configured for database connection
- Proper CORS and security middleware configured