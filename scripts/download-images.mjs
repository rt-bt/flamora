import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const imagesDir = path.resolve(process.cwd(), 'public/images');

const missing = [
  { name: 'chicken-leg-grill.jpg', url: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=600&q=80&auto=format&fit=crop' },
  { name: 'peri-peri-fries.jpg', url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&auto=format&fit=crop' },
  { name: 'map-preview.png', url: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format&fit=crop' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  for (const item of missing) {
    const dest = path.join(imagesDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, dest);
      console.log(`✓ Saved ${item.name}`);
    } catch (err) {
      console.error(`Failed ${item.name}:`, err.message);
    }
  }
}

main();
