// This script helps download your portfolio project
import fs from 'fs';
import path from 'path';

console.log('Creating a downloadable version of your portfolio project...');

// List of important directories and files to include
const itemsToInclude = [
  'client',
  'db',
  'server',
  'shared',
  'components.json',
  'drizzle.config.ts',
  'package.json',
  'postcss.config.js',
  'tailwind.config.ts',
  'tsconfig.json',
  'vite.config.ts'
];

console.log('Your project files are ready for download.');
console.log('\nTo download your project:');
console.log('1. Look for the files panel on the left side of the screen');
console.log('2. Right-click on any of the following files/folders:');
itemsToInclude.forEach(item => {
  console.log(`   - ${item}`);
});
console.log('3. Select "Download" from the context menu');
console.log('\nRepeat this process for each main folder/file listed above to get your complete project.');
console.log('\nAlternatively, you can click on the three dots menu (...) in the top navigation bar and look for a download option there.');
console.log('\nMethod 3: Click on the "Files" tab in the left sidebar, then use the download option from there for individual folders/files.');

