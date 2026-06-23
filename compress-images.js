const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'images', 'hero');
const MAX_WIDTH = 1920;

async function processImages() {
  try {
    const files = fs.readdirSync(targetDir);
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        const filePath = path.join(targetDir, file);
        const stats = fs.statSync(filePath);
        
        // Only process files larger than 500KB to save time, or just process all. Let's process all.
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        const webpPath = path.join(targetDir, `${basename}.webp`);
        
        console.log(`Processing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);
        
        await sharp(filePath)
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(webpPath);
          
        console.log(` -> Created ${basename}.webp`);
      }
    }
    console.log('All images compressed successfully!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
