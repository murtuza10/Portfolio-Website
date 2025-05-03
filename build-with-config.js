// build-with-config.js
import { execSync } from 'child_process';

console.log('Building the portfolio website with configuration file...');

// Run the Vite build for the frontend
console.log('\n1. Building the frontend with Vite...');
try {
  execSync('vite build', { stdio: 'inherit' });
  console.log('Frontend build completed successfully.');
} catch (error) {
  console.error('Frontend build failed:', error);
  process.exit(1);
}

// Build the backend with config.js included
console.log('\n2. Building the backend with config.js...');
try {
  execSync('esbuild server/index.ts config.js --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });
  console.log('Backend build completed successfully.');
} catch (error) {
  console.error('Backend build failed:', error);
  process.exit(1);
}

console.log('\nBuild completed! Your project is ready for deployment.');
console.log('To run the production build: node dist/index.js');
