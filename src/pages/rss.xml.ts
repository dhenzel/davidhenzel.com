import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { getPublishedPosts } from '../utils/posts';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  const sorted = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: "David Henzel's Blog",
    description:
      'Essays and reflections on entrepreneurship, leadership, and building companies.',
    site: context.site!,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body ?? ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'figure', 'figcaption']),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ['src', 'alt', 'width', 'height'],
        },
        transformTags: {
          img: (tagName, attribs) => ({
            tagName,
            attribs: {
              ...attribs,
              src: attribs.src?.startsWith('/')
                ? new URL(attribs.src, context.site!).href
                : attribs.src,
            },
          }),
          a: (tagName, attribs) => ({
            tagName,
            attribs: {
              ...attribs,
              href: attribs.href?.startsWith('/')
                ? new URL(attribs.href, context.site!).href
                : attribs.href,
            },
          }),
        },
      }),
    })),
    customData: '<language>en-us</language>',
  });
}
