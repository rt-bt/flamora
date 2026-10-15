import sharp from 'sharp';

const src = 'references/desktop-design.png';

async function cropAll() {
  // 1. Signature 4 Food Cards (clean food photos only, no card borders or text)
  await sharp(src)
    .extract({ left: 35, top: 541, width: 238, height: 140 })
    .toFile('public/images/flame-grills.jpg');

  await sharp(src)
    .extract({ left: 288, top: 541, width: 228, height: 140 })
    .toFile('public/images/crispy-favourites.jpg');

  await sharp(src)
    .extract({ left: 531, top: 541, width: 226, height: 140 })
    .toFile('public/images/kebabs-tikka.jpg');

  await sharp(src)
    .extract({ left: 770, top: 541, width: 222, height: 140 })
    .toFile('public/images/veggie-fire.jpg');

  // 2. Combo Feast with the Starburst "MEALS FROM ₹99" badge
  await sharp(src)
    .extract({ left: 420, top: 785, width: 600, height: 245 })
    .toFile('public/images/combo-club.jpg');

  // 3. Restaurant Interior with smooth left fade into #F4EBD6
  await sharp(src)
    .extract({ left: 600, top: 1055, width: 424, height: 215 })
    .toFile('public/images/restaurant-interior.jpg');

  // 4. Map Preview
  await sharp(src)
    .extract({ left: 347, top: 1324, width: 216, height: 92 })
    .toFile('public/images/map-preview.png');

  // 5. Handshake
  await sharp(src)
    .extract({ left: 885, top: 1335, width: 90, height: 75 })
    .toFile('public/images/franchise-handshake.png');

  console.log('✓ All card assets cropped cleanly!');
}

cropAll().catch(console.error);
