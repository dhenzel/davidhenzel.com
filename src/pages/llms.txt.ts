import type { APIContext } from 'astro';
import { getPublishedPosts } from '../utils/posts';
import { companies } from '../data/companies';

const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '');

export async function GET(context: APIContext) {
  const site = (context.site?.href ?? 'https://davidhenzel.com/').replace(/\/$/, '');
  const posts = (await getPublishedPosts()).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const focus = companies.filter((c) => c.status === 'focus');
  const active = companies.filter((c) => c.status !== 'focus' && c.status !== 'exited');
  const exited = companies.filter((c) => c.status === 'exited');

  const companyLine = (c: (typeof companies)[number]) =>
    `- ${c.url ? `[${c.name}](${c.url})` : c.name} — ${c.oneLiner ? stripHtml(c.oneLiner) : stripHtml(c.description)}`;

  const text = `# davidhenzel.com

> David Henzel is a serial entrepreneur building companies since 1999 and rebuilding them around AI since 2024. Creator of the Love Not Fear operating system for conscious leadership. Originally from Wiesbaden, Germany; lived in Los Angeles; now based in Bodrum, Türkiye. He runs a portfolio of 15+ companies across AI, growth, and conscious leadership, and helps other companies become AI-native through Relote.

The full text of every essay is available in one file at ${site}/llms-full.txt.

## Pages

- [Home](${site}/) — who David is and the current focus
- [About](${site}/about) — his story, beliefs, values, and personal operating system
- [Ventures](${site}/companies) — the full portfolio: current focus, active companies, and exits
- [Blog](${site}/blog) — essays on building companies, self-leadership, and Love Not Fear
- [Speaking](${site}/speaking) — talk topics and past appearances
- [Contact](${site}/contact) — book a call or email dh@davidhenzel.com

## Current focus

${focus.map(companyLine).join('\n')}

## Active portfolio

${active.map(companyLine).join('\n')}

## Exits & earlier

${exited.map(companyLine).join('\n')}

## Essays

${posts
  .map(
    (p) =>
      `- [${p.data.title}](${site}/blog/${p.id}/) (${p.data.pubDate.toISOString().slice(0, 10)}) — ${p.data.description}`
  )
  .join('\n')}

## Core values

1. First Things First — Always prioritize health and your loved ones.
2. Own It — Always do your best. Be impeccable with your word.
3. Create Impact — Enrich the lives of everybody we come in touch with.
4. Unconditional Love — Make decisions out of love, not fear.
5. Simplicity — Be authentic. Only do and buy things that matter.

## Contact

- Email: dh@davidhenzel.com
- Twitter/X: https://twitter.com/davidhenzel
- LinkedIn: https://www.linkedin.com/in/davidhenzel
- Instagram: https://www.instagram.com/davidhenzel
`;

  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
