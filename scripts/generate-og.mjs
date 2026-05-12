import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '../public/og-banner.png');
const logoPath = join(__dirname, '../public/mkappworks.png');

const W = 1200;
const H = 630;

// Stacked layout: logo centered, "mkappworks" centered below, subtitle below that.
// mkappworks is the anchor: its visual centre (baseline − cap-height/2) sits at H/2 = 315.
// Cap-height at font-size 80 ≈ 56px → baseline = 315 + 28 = 343.
// Logo floats above: baseline(343) − cap(56) − gap(24) − logo(100) = 163.
const LOGO_SIZE = 100;
const LOGO_X = W / 2 - LOGO_SIZE / 2;  // 550 — horizontally centered
const TEXT_X = W / 2;                   // 600 — horizontally centered
const TEXT_Y = Math.round(H / 2 + 28);  // 343 — vertically centered
const LOGO_Y = TEXT_Y - 56 - 24 - LOGO_SIZE; // 163

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="1.5" fill="rgba(255,255,255,0.07)"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="#0d0d0d"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect x="0" y="0" width="${W}" height="4" fill="#84cc16"/>
  <text x="${TEXT_X}" y="${TEXT_Y}" font-family="monospace" font-size="80" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="-3">mkappworks</text>
  <text x="${W / 2}" y="${TEXT_Y + 56}" font-family="monospace" font-size="22" fill="rgba(255,255,255,0.4)" text-anchor="middle">apps · tools · writing</text>
  <text x="${W - 48}" y="${H - 40}" font-family="monospace" font-size="18" fill="rgba(255,255,255,0.6)" text-anchor="end">mkappworks.com</text>
</svg>`;

const logoBuffer = await sharp(logoPath).resize(LOGO_SIZE, LOGO_SIZE).toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: logoBuffer, left: Math.round(LOGO_X), top: Math.round(LOGO_Y) }])
  .png()
  .toFile(out);

console.log('✓ og-banner.png written to public/');
