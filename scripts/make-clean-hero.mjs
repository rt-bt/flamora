import sharp from 'sharp';

async function makeCleanHero() {
  const width = 1024;
  const height = 388; // Exactly top: 58 to 446, ending right before the cream section

  // Crop from desktop-design.png starting at top: 58 (below navbar) down to 446
  const heroBuffer = await sharp('references/desktop-design.png')
    .extract({ left: 0, top: 58, width, height })
    .toBuffer();

  // Dark smoke/charcoal gradient covering left side text (0 to 440px), fading smoothly into transparent by 560px
  // The right side (chicken grill on live charcoal flames + "Good Food Brings People Together") stays 100% untouched!
  const svgOverlay = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="leftFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0F0F0F" stop-opacity="1" />
          <stop offset="38%" stop-color="#0F0F0F" stop-opacity="1" />
          <stop offset="48%" stop-color="#0F0F0F" stop-opacity="0.95" />
          <stop offset="56%" stop-color="#0F0F0F" stop-opacity="0.45" />
          <stop offset="64%" stop-color="#0F0F0F" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#leftFade)" />
    </svg>
  `;

  await sharp(heroBuffer)
    .composite([
      { input: Buffer.from(svgOverlay), blend: 'over' }
    ])
    .toFile('public/images/hero-clean-bg.jpg');

  console.log('✓ Successfully generated hero-clean-bg.jpg with exact bounds!');
}

makeCleanHero().catch(console.error);
