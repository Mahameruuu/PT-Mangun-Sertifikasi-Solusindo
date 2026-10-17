import type { APIRoute } from 'astro';

// Selama demo, halaman memakai <meta name="robots" content="noindex">.
// robots.txt tetap mengizinkan crawl agar mesin pencari bisa membaca tag noindex tersebut.
export const GET: APIRoute = ({ site }) => {
  const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';
  const lines = ['User-agent: *', 'Allow: /'];
  if (allowIndexing) lines.push('', `Sitemap: ${new URL('sitemap-index.xml', site).href}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
