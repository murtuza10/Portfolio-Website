# Deployment Guide for Portfolio Website

This document provides detailed instructions for deploying the portfolio website to various platforms. Follow these steps to ensure a smooth deployment process.

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- PostgreSQL database

## Environment Setup

1. Create a `.env` file in the project root with the following variables:

```
DATABASE_URL=postgresql://username:password@hostname:port/database_name
```

Replace the placeholders with your actual database credentials.

## Building the Project

### Option 1: Using Standard Build Process

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

### Option 2: Using Custom Build Script (includes config)

```bash
# Install dependencies
npm install

# Build using custom build script
node --experimental-modules build-with-config.js
```

## Running in Production

```bash
# Start the production server
NODE_ENV=production node dist/index.js
```

## Platform-Specific Deployment

### Deploy to Vercel

1. Set up environment variables in the Vercel dashboard
2. Connect your GitHub repository
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Deploy to Railway

1. Create a new project in Railway
2. Connect to your GitHub repository
3. Add a PostgreSQL database service
4. Configure environment variables:
   - `DATABASE_URL` - Use the Railway-provided PostgreSQL connection string
5. Deploy your application

### Deploy to Heroku

1. Create a new Heroku app
2. Add the Heroku PostgreSQL add-on
3. Set up your environment variables in Heroku's dashboard
4. Deploy using the Heroku CLI or GitHub integration

```bash
# Using Heroku CLI
heroku git:remote -a your-app-name
git push heroku main
```

## Database Migration and Seeding

To set up or update your database schema in production:

```bash
# Run database migrations
npm run db:push

# Seed the database with initial data
npm run db:seed
```

## Troubleshooting

- **Database Connection Issues**: Verify your DATABASE_URL is correctly formatted and accessible from your deployment environment.
- **Build Errors**: Check for any TypeScript errors before deploying.
- **Missing Content**: Ensure that the database has been properly seeded.

## Maintenance

To update the portfolio content:

1. Modify the data in `db/update-portfolio.ts`
2. Run `npm run db:update` to update the content

## Contact

If you encounter any issues, please contact Murtuza at the email provided in the portfolio contact section.
