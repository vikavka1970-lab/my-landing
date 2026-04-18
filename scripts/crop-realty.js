import sharp from 'sharp';
import fs from 'fs';

const SRC = 'images/portfolio-realty.png';
const DST = 'images/portfolio-realty.png';
const BACKUP = 'images/portfolio-realty.backup.png';

const meta = await sharp(SRC).metadata();
console.log(`Source: ${meta.width}×${meta.height}`);

const downW = 128;
const downH = meta.height;
const { data } = await sharp(SRC)
  .resize(downW, downH, { kernel: 'nearest' })
  .greyscale()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Use MAX brightness per row — empty blocks have no bright pixels (no text/icons)
const rowMax = new Array(downH);
for (let y = 0; y < downH; y++) {
  let max = 0;
  for (let x = 0; x < downW; x++) {
    const v = data[y * downW + x];
    if (v > max) max = v;
  }
  rowMax[y] = max;
}

const FLAT_MAX = 50;
const MIN_RUN = 400;

const runs = [];
let runStart = null;
for (let y = 0; y < downH; y++) {
  if (rowMax[y] < FLAT_MAX) {
    if (runStart === null) runStart = y;
  } else {
    if (runStart !== null && (y - runStart) >= MIN_RUN) {
      runs.push({ start: runStart, end: y, length: y - runStart });
    }
    runStart = null;
  }
}
if (runStart !== null && (downH - runStart) >= MIN_RUN) {
  runs.push({ start: runStart, end: downH, length: downH - runStart });
}

console.log('Flat (empty) runs found:');
runs.forEach(r => console.log(`  rows ${r.start}–${r.end} (${r.length}px, ${(r.length / meta.height * 100).toFixed(1)}%)`));

if (!runs.length) {
  console.log('No empty block detected.');
  process.exit(0);
}

// Pick the largest run — that's the "empty video block"
const biggest = runs.sort((a, b) => b.length - a.length)[0];

const pad = 30;
const cutStart = Math.max(0, biggest.start - pad);
const cutEnd = Math.min(meta.height, biggest.end + pad);
const topH = cutStart;
const bottomH = meta.height - cutEnd;
const newH = topH + bottomH;

console.log(`\nCutting rows ${cutStart}..${cutEnd} (${cutEnd - cutStart}px).`);
console.log(`New height: ${newH} (was ${meta.height}).`);

if (!fs.existsSync(BACKUP)) {
  fs.copyFileSync(SRC, BACKUP);
  console.log(`Backup saved: ${BACKUP}`);
}

const topBuf = await sharp(SRC)
  .extract({ left: 0, top: 0, width: meta.width, height: topH })
  .toBuffer();

const bottomBuf = await sharp(SRC)
  .extract({ left: 0, top: cutEnd, width: meta.width, height: bottomH })
  .toBuffer();

await sharp({
  create: {
    width: meta.width,
    height: newH,
    channels: 3,
    background: { r: 15, g: 53, b: 32 },
  },
})
  .composite([
    { input: topBuf, top: 0, left: 0 },
    { input: bottomBuf, top: topH, left: 0 },
  ])
  .png()
  .toFile(DST + '.tmp');

fs.renameSync(DST + '.tmp', DST);
console.log(`\nSaved: ${DST}`);
