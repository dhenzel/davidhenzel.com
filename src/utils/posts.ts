import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Published blog posts.
 *
 * Always excludes drafts. On the PRODUCTION build (Cloudflare sets
 * CF_PAGES_BRANCH=main) it also hides posts whose pubDate is still in the
 * future, so a future-dated post stays hidden on the live site until a rebuild
 * happens on or after its date. A scheduled daily rebuild
 * (.github/workflows/scheduled-publish.yml) is what makes it go live automatically.
 *
 * On preview branch deploys and local dev the future-date filter is skipped, so
 * you can always review upcoming posts before they publish.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const now = Date.now();
  const isProduction = process.env.CF_PAGES_BRANCH === 'main';
  return (await getCollection('blog', ({ data }) => !data.draft)).filter(
    (p) => !isProduction || p.data.pubDate.valueOf() <= now
  );
}
