import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const imagesDir = path.resolve(process.cwd(), 'public/images');

const assets = [
  { name: 'whole-grilled-chicken.jpg', url: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=85&auto=format&fit=crop' },
  { name: 'chicken-seekh-kebab.jpg', url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=85&auto=format&fit=crop' },
  { name: 'crispy-chicken-1pc.jpg', url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=85&auto=format&fit=crop' },
  { name: 'crispy-chicken-2pc.jpg', url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=85&auto=format&fit=crop' },
  { name: 'crispy-chicken-4pc.jpg', url: 'https://images.unsplash.com/photo-1605237750186-70933beb9f6f?w=800&q=85&auto=format&fit=crop' },
  { name: 'crispy-chicken-6pc.jpg', url: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=85&auto=format&fit=crop' },
  { name: 'flamora-solo-combo.jpg', url: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=85&auto=format&fit=crop' },
  { name: 'leg-combo.jpg', url: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=800&q=85&auto=format&fit=crop' },
  { name: 'tikka-combo.jpg', url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&q=85&auto=format&fit=crop' },
  { name: 'seekh-combo.jpg', url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=85&auto=format&fit=crop' },
  { name: 'flamora-duo-combo.jpg', url: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=85&auto=format&fit=crop' },
  { name: 'flamora-family-combo.jpg', url: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=800&q=85&auto=format&fit=crop' },
  { name: 'flamora-signature-combo.jpg', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=85&auto=format&fit=crop' },
  { name: 'big-feast-combo.jpg', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85&auto=format&fit=crop' },
  { name: 'regular-fries.jpg', url: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=85&auto=format&fit=crop' },
  { name: 'coleslaw.jpg', url: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=800&q=85&auto=format&fit=crop' },
  { name: 'extra-dip.jpg', url: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=800&q=85&auto=format&fit=crop' },
  { name: 'onion-lemon.jpg', url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=85&auto=format&fit=crop' },
  { name: 'coke-drink.jpg', url: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&q=85&auto=format&fit=crop' },
  { name: 'pepsi-drink.jpg', url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=85&auto=format&fit=crop' },
  { name: 'sevenup-drink.jpg', url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=85&auto=format&fit=crop' },
  { name: 'lemon-drink.jpg', url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=85&auto=format&fit=crop' },
  { name: 'mineral-water.jpg', url: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=800&q=85&auto=format&fit=crop' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} food assets...`);
  for (const asset of assets) {
    const dest = path.join(imagesDir, asset.name);
    try {
      await download(asset.url, dest);
      console.log(`✓ Saved ${asset.name}`);
    } catch (e) {
      console.error(`✗ Error downloading ${asset.name}: ${e.message}`);
    }
  }
  console.log('Finished downloading all food photography assets!');
}

run();
