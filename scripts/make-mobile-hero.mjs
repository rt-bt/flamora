import sharp from 'sharp';

async function makeMobileHero() {
  const width = 640;
  const height = 500;

  // 1. Clean chicken grill with zero text (extracted from x: 360 to 840, y: 60 to 445)
  const chicken = await sharp('references/desktop-design.png')
    .extract({ left: 360, top: 60, width: 480, height: 385 })
    .resize(440, height, { fit: 'cover' })
    .toBuffer();

  // 2. Base canvas 640x500 solid #0F0F0F
  const baseCanvas = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 15, g: 15, b: 15, alpha: 1 }
    }
  }).png().toBuffer();

  // 3. Composite chicken on the right side (x: 200 to 640)
  const chickenPlaced = await sharp(baseCanvas)
    .composite([
      { input: chicken, left: 200, top: 0 }
    ])
    .png()
    .toBuffer();

  // 4. Smooth gradient fade on left (x: 180 to 380) and soft bottom fade into #0F0F0F
  const svgOverlay = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="leftFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0F0F0F" stop-opacity="1" />
          <stop offset="35%" stop-color="#0F0F0F" stop-opacity="1" />
          <stop offset="50%" stop-color="#0F0F0F" stop-opacity="0.95" />
          <stop offset="65%" stop-color="#0F0F0F" stop-opacity="0.4" />
          <stop offset="82%" stop-color="#0F0F0F" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="80%" stop-color="#0F0F0F" stop-opacity="0" />
          <stop offset="100%" stop-color="#0F0F0F" stop-opacity="1" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#leftFade)" />
      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#bottomFade)" />
    </svg>
  `;

  await sharp(chickenPlaced)
    .composite([
      { input: Buffer.from(svgOverlay), blend: 'over' }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/images/hero-mobile-bg.jpg');

  console.log('✓ Successfully created hero-mobile-bg.jpg with perfect chicken positioning and zero text!');
}

makeMobileHero().catch(console.error);
