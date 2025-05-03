# Deployment Guide for Portfolio Website

This document provides detailed instructions for deploying the portfolio website to various platforms. Follow these steps to ensure a smooth deployment process.

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- PostgreSQL database

## Environment Setup

### Development Environment

1. Create a `.env` file in the project root with the following variables:

```
DATABASE_URL=postgresql://username:password@hostname:port/database_name
```

Replace the placeholders with your actual database credentials.

### Production Environment

For production deployment, you have two options for setting environment variables:

#### Option 1: Using a .env file in production

1. Create a `.env` file in the same directory as your deployed application
2. Add your production database URL:

```
DATABASE_URL=postgresql://username:password@hostname:port/database_name
NODE_ENV=production
```

#### Option 2: Setting environment variables in your hosting platform (Recommended)

Most hosting platforms provide a way to set environment variables in their dashboard:

1. **Vercel**: Go to your project settings → Environment Variables → Add the variables
2. **Railway**: Navigate to your project → Variables → Add `DATABASE_URL`
3. **Heroku**: Use `heroku config:set DATABASE_URL=your_connection_string`

This is generally more secure as it keeps sensitive information out of your codebase.

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
