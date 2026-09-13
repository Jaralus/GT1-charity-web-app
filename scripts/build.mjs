// Builds src/ into a self-contained, minified dist/ folder.
// Usage: npm run build

import { buildSync } from 'esbuild';
import { mkdirSync, cpSync, copyFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

buildSync({
  entryPoints: [path.join(srcDir, 'app.js')],
  outfile: path.join(distDir, 'app.js'),
  minify: true,
  bundle: false,
  logLevel: 'info',
});

buildSync({
  entryPoints: [path.join(srcDir, 'styles.css')],
  outfile: path.join(distDir, 'styles.css'),
  minify: true,
  bundle: false,
  logLevel: 'info',
});

copyFileSync(path.join(srcDir, 'index.html'), path.join(distDir, 'index.html'));
cpSync(path.join(srcDir, 'audio'), path.join(distDir, 'audio'), { recursive: true });

console.log('Build complete: dist/');
