// download-helper.js
// This script helps prepare project files for download

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Directories to include in download
const includeDirs = [
  'client',
  'server',
  'db',
  'shared',
  'public'
];

// Files to include in download
const includeFiles = [
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  '.env.example',
  'vite.config.ts',
  'postcss.config.js',
  'tailwind.config.ts',
  'drizzle.config.ts',
  'components.json',
  'config.js',
  'config.d.ts',
  'build-with-config.js',
  'deployment-guide.md',
  'download-instructions.txt'
];

// Create download directory
const downloadDir = path.join(process.cwd(), 'download');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir);
}

// Helper to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy directories
for (const dir of includeDirs) {
  const srcDir = path.join(process.cwd(), dir);
  const destDir = path.join(downloadDir, dir);
  
  if (fs.existsSync(srcDir)) {
    console.log(`Copying directory: ${dir}`);
    copyDir(srcDir, destDir);
  }
}

// Copy individual files
for (const file of includeFiles) {
  const srcFile = path.join(process.cwd(), file);
  const destFile = path.join(downloadDir, file);
  
  if (fs.existsSync(srcFile)) {
    console.log(`Copying file: ${file}`);
    fs.copyFileSync(srcFile, destFile);
  }
}

// Create .env.example file
const envExampleContent = 'DATABASE_URL=postgresql://username:password@hostname:port/database_name';
fs.writeFileSync(path.join(downloadDir, '.env.example'), envExampleContent);

console.log('\nDownload package prepared successfully!');
console.log(`Files are available in the '${downloadDir}' directory`);
console.log('Follow the instructions in download-instructions.txt to set up the project.');
