import type { APIRoute } from 'astro';
import { routesRegistry } from '../seo/registry';

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];

  const urls = Object.values(routesRegistry).map((route) => {
    return `  <url>
    <loc>${route.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
