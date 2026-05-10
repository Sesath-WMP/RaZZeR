import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'src/img/arts');
const outputDir = path.join(__dirname, 'src/img/arts-thumbnails');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function processDirectory(currentPath, currentOutput) {
  if (!fs.existsSync(currentOutput)) {
    fs.mkdirSync(currentOutput, { recursive: true });
  }

  const files = fs.readdirSync(currentPath);

  for (const file of files) {
    const filePath = path.join(currentPath, file);
    const outputPath = path.join(currentOutput, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath, outputPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        if (!fs.existsSync(outputPath)) {
          console.log(`Generating thumbnail for ${file}`);
          sharp(filePath)
            .resize({ width: 600, withoutEnlargement: true })
            .toFile(outputPath)
            .catch(err => console.error(`Error processing ${file}:`, err));
        }
      }
    }
  }
}

console.log('Starting thumbnail generation...');
processDirectory(inputDir, outputDir);
