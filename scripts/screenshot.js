/**
 * screenshot.js — делает скриншот сайта для портфолио
 *
 * Использование:
 *   npm run screenshot -- <url> <имя-файла>
 *
 * Примеры:
 *   npm run screenshot -- https://example.com realty-site
 *   npm run screenshot -- https://example.com realty-site --mobile
 *   npm run screenshot -- https://example.com realty-site --all
 *
 * Флаги:
 *   (без флага)  — только десктоп (1280×900)
 *   --mobile     — только мобайл  (390×844)
 *   --all        — десктоп + мобайл
 *
 * Результат сохраняется в папку images/
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, '..', 'images');

// ─── Аргументы ──────────────────────────────────────────
const args = process.argv.slice(2);
const url      = args[0];
const filename = args[1];
const flags    = args.slice(2);

const wantMobile  = flags.includes('--mobile');
const wantAll     = flags.includes('--all');
const wantDesktop = !wantMobile || wantAll;

if (!url || !filename) {
  console.error(`
Использование:
  npm run screenshot -- <url> <имя-файла> [--mobile] [--all]

Примеры:
  npm run screenshot -- https://example.com realty-site
  npm run screenshot -- https://example.com realty-site --all
`);
  process.exit(1);
}

// ─── Конфигурация размеров ───────────────────────────────
const VIEWPORTS = {
  desktop: { width: 1280, height: 900,  suffix: '' },
  mobile:  { width: 390,  height: 844,  suffix: '-mobile', isMobile: true },
};

// ─── Основная функция ────────────────────────────────────
async function takeScreenshot(viewport, name) {
  const outputFile = path.join(IMAGES_DIR, `${name}${viewport.suffix}.png`);

  console.log(`📸 Снимаю ${viewport.width}×${viewport.height}: ${url}`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({
    width:             viewport.width,
    height:            viewport.height,
    deviceScaleFactor: 2,           // Retina — чёткая картинка
    isMobile:          !!viewport.isMobile,
  });

  // Ждём полной загрузки и анимаций
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500)); // доп. пауза для CSS-анимаций

  await page.screenshot({
    path:     outputFile,
    fullPage: flags.includes('--full'),  // --full для полной страницы, иначе только топ
  });

  await browser.close();

  console.log(`✅ Сохранено: images/${path.basename(outputFile)}`);
  return outputFile;
}

// ─── Запуск ──────────────────────────────────────────────
(async () => {
  if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const tasks = [];
  if (wantDesktop || wantAll) tasks.push(['desktop', VIEWPORTS.desktop]);
  if (wantMobile  || wantAll) tasks.push(['mobile',  VIEWPORTS.mobile]);

  for (const [, viewport] of tasks) {
    await takeScreenshot(viewport, filename);
  }

  console.log('\n🎉 Готово! Файлы в папке images/');
})();
