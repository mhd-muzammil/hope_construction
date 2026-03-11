import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const publicDir = './public';
const dirs = ['sm', 'md', 'lg'];

async function optimize() {
  const files = await fs.readdir(publicDir);
  const images = files.filter(f => f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.jpg'));

  for (const d of dirs) {
    await fs.mkdir(path.join(publicDir, d), { recursive: true });
  }

  for (const file of images) {
    const filePath = path.join(publicDir, file);
    const parsed = path.parse(file);
    const baseName = parsed.name;
    const webpName = `${baseName}.webp`;

    console.log(`Processing ${file}...`);

    // Original size converted to webp
    await sharp(filePath).webp({ quality: 75 }).toFile(path.join(publicDir, webpName));

    // sm: 400w
    await sharp(filePath).resize({ width: 400, withoutEnlargement: true }).webp({ quality: 75 }).toFile(path.join(publicDir, 'sm', webpName));
    
    // md: 800w
    await sharp(filePath).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 75 }).toFile(path.join(publicDir, 'md', webpName));
    
    // lg: 1200w
    await sharp(filePath).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 75 }).toFile(path.join(publicDir, 'lg', webpName));
  }
}

optimize().then(() => console.log('Done')).catch(console.error);
