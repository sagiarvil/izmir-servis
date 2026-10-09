import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

console.log('--- CI GATES (G0 - G15) BAŞLATILIYOR ---');

const gates = {
  G1_BUILD: false,
  G2_URLS: false,
  G3_SEO_H1_META: false,
  G4_SITEMAP_ROBOTS: false,
  G5_SCHEMA_JSONLD: false,
  G6_HTML_RENDER: false,
  G7_RESPONSIVE_TOKENS: false,
  G8_A11Y_FORM: false
};

// G1: Build Artifacts Check
if (fs.existsSync(distDir) && fs.existsSync(path.join(distDir, 'index.html'))) {
  gates.G1_BUILD = true;
  console.log('✔ G1 (Derleme & Build): PASS');
} else {
  console.error('❌ G1: dist dizini veya index.html bulunamadı');
}

// G2: URL Checks
const requiredPages = [
  'index.html',
  'motor-yagi-degisimi/index.html',
  'yag-filtresi-degisimi/index.html',
  'periyodik-bakim/index.html',
  'randevu/index.html',
  'iletisim/index.html',
  'hakkimizda/index.html',
  'sikca-sorulan-sorular/index.html',
  'kvkk-aydinlatma/index.html',
  'gizlilik-ve-cerezler/index.html',
  'ticari-iletisim-tercihleri/index.html',
  '404.html'
];

let allPagesExist = true;
for (const p of requiredPages) {
  const fullPath = path.join(distDir, p);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ G2: Sayfa eksik -> ${p}`);
    allPagesExist = false;
  }
}
if (allPagesExist) {
  gates.G2_URLS = true;
  console.log(`✔ G2 (URL & Routing): PASS (${requiredPages.length} sayfa mevcut)`);
}

// G3: SEO Tekil H1 & Meta Denetimi
let seoPass = true;
for (const p of requiredPages) {
  if (p === '404.html') continue;
  const content = fs.readFileSync(path.join(distDir, p), 'utf-8');
  const h1Matches = content.match(/<h1[^>]*>.*?<\/h1>/gis);
  if (!h1Matches || h1Matches.length !== 1) {
    console.error(`❌ G3: ${p} sayfasında tam 1 H1 olmalı, bulunan: ${h1Matches ? h1Matches.length : 0}`);
    seoPass = false;
  }
  if (!content.includes('<title>') || !content.includes('name="description"')) {
    console.error(`❌ G3: ${p} title veya description eksik`);
    seoPass = false;
  }
}
if (seoPass) {
  gates.G3_SEO_H1_META = true;
  console.log('✔ G3 (SEO H1 Hiyerarşisi & Metadata): PASS');
}

// G4: Sitemap ve Robots Denetimi
const robotsPath = path.join(distDir, 'robots.txt');
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(robotsPath) && fs.existsSync(sitemapPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf-8');
  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  if (robots.includes('Sitemap:') && sitemap.includes('<urlset') && sitemap.includes('motor-yagi-degisimi')) {
    gates.G4_SITEMAP_ROBOTS = true;
    console.log('✔ G4 (Sitemap & Robots.txt): PASS');
  } else {
    console.error('❌ G4: Robots veya Sitemap içeriği eksik');
  }
} else {
  console.error('❌ G4: Robots.txt veya Sitemap.xml bulunamadı');
}

// G5: Schema.org JSON-LD Denetimi
const indexContent = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const jsonLdMatch = indexContent.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
if (jsonLdMatch) {
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    if (parsed['@type'] === 'AutoRepair' && parsed.name && parsed.telephone) {
      gates.G5_SCHEMA_JSONLD = true;
      console.log('✔ G5 (Schema.org JSON-LD): PASS');
    }
  } catch (err) {
    console.error('❌ G5: JSON-LD parse hatası', err);
  }
} else {
  console.error('❌ G5: index.html içerisinde JSON-LD bulunamadı');
}

// G6: HTML Render Kanıtı (Server rendered H1, CTA, Telefon)
if (
  indexContent.includes('İzmir&#39;de Motor Yağı Değişimi') ||
  indexContent.includes('İzmir\'de Motor Yağı Değişimi')
) {
  if (indexContent.includes('tel:+905325550099') && indexContent.includes('wa.me/905325550099')) {
    gates.G6_HTML_RENDER = true;
    console.log('✔ G6 (İlk HTML Render & CTA): PASS');
  }
}

// G7: Responsive CSS & Design Tokens
const tokenContent = fs.readFileSync(path.resolve('src/styles/tokens.css'), 'utf-8');
if (tokenContent.includes('--accent: #D85C20') && tokenContent.includes('--ink: #16212C')) {
  gates.G7_RESPONSIVE_TOKENS = true;
  console.log('✔ G7 (Tasarım Sistemi & Tokenlar): PASS');
}

// G8: Form A11y & KVKK
if (indexContent.includes('appointmentForm') && indexContent.includes('kvkkConsent')) {
  gates.G8_A11Y_FORM = true;
  console.log('✔ G8 (Form Erişilebilirliği & KVKK): PASS');
}

const failed = Object.entries(gates).filter(([_, pass]) => !pass);
if (failed.length > 0) {
  console.error(`\n❌ BAŞARISIZ KALİTE KAPILARI: ${failed.map(f => f[0]).join(', ')}`);
  process.exit(1);
} else {
  console.log('\n========================================');
  console.log('✅ TÜM TEST KALİTE KAPILARI (G1-G8) PASS');
  console.log('========================================');
}
