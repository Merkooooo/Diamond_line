import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const sourceDir = 'C:\\Users\\Meris\\Desktop\\diamon line';
const targetDir = path.join(process.cwd(), 'public', 'assets');

async function processImages() {
  try {
    await fs.mkdir(targetDir, { recursive: true });
    
    // Process root directory
    const files = await fs.readdir(sourceDir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const sourcePath = path.join(sourceDir, file);
        const baseName = path.basename(file, ext);
        // kebab case
        const kebabName = baseName.replace(/\s+/g, '-').toLowerCase();
        const targetPath = path.join(targetDir, `${kebabName}.webp`);
        
        await sharp(sourcePath)
          .webp({ quality: 80 })
          .toFile(targetPath);
        
        console.log(`Converted ${file} to ${kebabName}.webp`);
      }
    }
    
    // Process prikljucki subdirectory
    const subSourceDir = path.join(sourceDir, 'prikljucki');
    const subTargetDir = path.join(targetDir, 'prikljucki');
    
    try {
      const subFiles = await fs.readdir(subSourceDir);
      if (subFiles.length > 0) {
        await fs.mkdir(subTargetDir, { recursive: true });
        for (const file of subFiles) {
          const ext = path.extname(file).toLowerCase();
          if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            const sourcePath = path.join(subSourceDir, file);
            const baseName = path.basename(file, ext);
            const kebabName = baseName.replace(/\s+/g, '-').toLowerCase();
            const targetPath = path.join(subTargetDir, `${kebabName}.webp`);
            
            await sharp(sourcePath)
              .webp({ quality: 80 })
              .toFile(targetPath);
            
            console.log(`Converted prikljucki/${file} to prikljucki/${kebabName}.webp`);
          }
        }
      }
    } catch (e) {
      console.log('No prikljucki folder found or error reading it', e);
    }
    
    console.log('Image processing complete.');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
