import puppeteer from 'puppeteer';

const BASE = 'http://localhost:8765';

const shots = [
  { url: '/index.html',   name: 'index',   vp: 'desktop' },
  { url: '/index.html',   name: 'index',   vp: 'mobile'  },
  { url: '/pricing.html', name: 'pricing', vp: 'desktop' },
  { url: '/pricing.html', name: 'pricing', vp: 'mobile'  },
];

const VP = {
  desktop: { width: 1280, height: 900, deviceScaleFactor: 1 },
  mobile:  { width: 390,  height: 844, deviceScaleFactor: 1, isMobile: true },
};

const browser = await puppeteer.launch({ headless: true });
for (const s of shots) {
  const page = await browser.newPage();
  await page.setViewport(VP[s.vp]);
  await page.goto(BASE + s.url + '?v=' + Date.now(), { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1200));
  // trigger all fade-ups
  await page.evaluate(() => {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  });
  await new Promise(r => setTimeout(r, 300));
  const out = `review-${s.name}-${s.vp}.png`;
  await page.screenshot({ path: out, fullPage: true });
  console.log('saved', out);
  await page.close();
}
await browser.close();
