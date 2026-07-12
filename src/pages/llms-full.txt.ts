import type { APIContext } from 'astro';
import { getPublishedPosts } from '../utils/posts';

// Strip the raw-HTML figure blocks (diagrams) from post bodies — they carry
// no text content beyond the alt, which we keep.
function markdownForLlms(body: string): string {
  return body
    .replace(/<figure>[\s\S]*?alt="([^"]*)"[\s\S]*?<\/figure>/g, (_, alt) => `*Figure: ${alt}*`)
    .trim();
}

export async function GET(context: APIContext) {
  const site = (context.site?.href ?? 'https://davidhenzel.com/').replace(/\/$/, '');
  const posts = (await getPublishedPosts()).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const sections = posts.map((p) => {
    const meta = [
      `URL: ${site}/blog/${p.id}/`,
      `Published: ${p.data.pubDate.toISOString().slice(0, 10)}`,
      p.data.tags?.length ? `Tags: ${p.data.tags.join(', ')}` : null,
    ]
      .filter(Boolean)
      .join('\n');
    return `# ${p.data.title}\n\n${meta}\n\n${p.data.description}\n\n${markdownForLlms(p.body ?? '')}`;
  });

  const text = `# davidhenzel.com — full essay archive

> Every published essay by David Henzel, in full, in markdown. See ${site}/llms.txt for the site overview.

---

${sections.join('\n\n---\n\n')}
`;

  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
