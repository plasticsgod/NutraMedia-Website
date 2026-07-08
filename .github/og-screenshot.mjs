import { chromium } from 'playwright';

// Renders the home page hero and writes social-card.png (1200x630 CSS px @2x = 2400x1260).
const URL = process.env.TARGET_URL || 'http://127.0.0.1:8080/index.html';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 900 },
  deviceScaleFactor: 2,
});

await page.goto(URL, { waitUntil: 'networkidle', timeout: 45000 });

// Make sure the web fonts (Space Grotesk / Instrument Serif) are painted before the shot.
try { await page.evaluate(() => document.fonts && document.fonts.ready); } catch {}
await page.waitForTimeout(700);

// Crop the top of the hero to the standard 1.91:1 share ratio.
await page.screenshot({
  path: 'social-card.png',
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

await browser.close();
console.log('Wrote social-card.png');
