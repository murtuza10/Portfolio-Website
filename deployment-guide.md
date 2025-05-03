# Portfolio Website Deployment Guide

## Building for Production

To build the portfolio website for production, follow these steps after downloading the code:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```
   This will:
   - Build the React frontend with Vite
   - Compile the Express backend with esbuild
   - Place all files in a `dist` directory

3. **Start the production server**:

   On macOS/Linux:
   ```bash
   npm run start
   ```

   On Windows:
   ```bash
   set NODE_ENV=production && node dist/index.js
   ```
   
   Alternatively, you can modify the start script in package.json for Windows compatibility:
   ```json
   "start": "cross-env NODE_ENV=production node dist/index.js"
   ```
   (This requires installing cross-env: `npm install --save-dev cross-env`)

## What's in the Build Output

After running the build command, you'll have a `dist` directory containing:

- **Client files**: Minified and optimized frontend assets
  - HTML, CSS, and JavaScript files
  - Images and other static assets
  - These files are highly optimized for production

- **Server files**: Compiled backend code
  - API endpoints
  - Database connections
  - Server configuration

## Deploying to a Hosting Service

You can deploy this application to various hosting platforms:

### Option 1: Traditional Node.js Hosting (Recommended)

1. **Platforms**: DigitalOcean, Heroku, Render, Railway
2. **Process**:
   - Push your code to GitHub
   - Connect your hosting platform to your repository
   - Set up environment variables (DATABASE_URL, etc.)
   - Deploy using the platform's Node.js deployment options

### Option 2: Static Frontend + Separate Backend

1. **Frontend**: Deploy the `dist/client` folder to Netlify, Vercel, or GitHub Pages
2. **Backend**: Deploy the server separately to a Node.js hosting service
3. **Configuration**: Update API URLs in the frontend to point to your backend

## Environment Variables

Make sure to set these environment variables in your production environment:

- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to "production"
- `PORT`: The port for your server (often set automatically by hosting providers)

## Database Setup

For the PostgreSQL database:

1. Create a PostgreSQL database on your preferred provider (ElephantSQL, Supabase, Neon, etc.)
2. Set the `DATABASE_URL` environment variable to your database connection string
3. Run the database migrations:
   ```bash
   npm run db:push
   ```
4. Seed the database with initial data:
   ```bash
   npm run db:seed
   ```

## Troubleshooting

- **Missing dependencies**: Run `npm install` again if you see missing module errors
- **Database connection issues**: Verify your DATABASE_URL is correct and the database is accessible
- **Port conflicts**: Set a different PORT environment variable if the default port is already in use
- **Build errors**: Check for any TypeScript errors or missing files mentioned in the build output
