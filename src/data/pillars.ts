export interface Pillar {
  slug: string;
  /** business or personal track */
  track: 'business' | 'personal';
  title: string;
  blurb: string;
  /** The venture(s) this pillar funnels toward */
  venture: string;
  /** Existing post tags that map into this pillar (lowercased) */
  tagMatches: string[];
}

// Five recurring themes, grounded in the Context Engine content-pillar map.
// Pillars 1–3 are the business track; 4–5 the personal track.
export const pillars: Pillar[] = [
  {
    slug: 'ai-native-company',
    track: 'business',
    title: 'Building the AI-Native Company',
    blurb:
      'How to rebuild an organization on AI, better systems, and a context layer, from someone doing it live, not selling a course about it.',
    venture: 'Relote / Context Engine',
    tagMatches: ['ai', 'systems', 'automation', 'product management', 'technology'],
  },
  {
    slug: 'culture-without-fear',
    track: 'business',
    title: 'Culture Without Fear',
    blurb:
      'Build a company where people do their best work out of love, not fear. Culture, team, retention, and org development.',
    venture: 'Love Not Fear · upcoach',
    tagMatches: ['leadership', 'coaching', 'management', 'communication', 'culture', 'hiring'],
  },
  {
    slug: 'operators-notebook',
    track: 'business',
    title: "The Operator's Notebook",
    blurb:
      'The plays a serial entrepreneur actually runs to grow, keep, and support customers. Tips and tricks, no theory. Every one ships with a next action.',
    venture: 'LTVplus · Shortlist · WinbackEngine',
    tagMatches: ['entrepreneurship', 'startups', 'productivity', 'marketing', 'networking', 'sales', 'growth'],
  },
  {
    slug: 'founders-operating-system',
    track: 'personal',
    title: "The Founder's Operating System",
    blurb:
      'Get yourself to your A-game (vision, mission, values, goals, habits), and put your own agent and context engine to work on your life, not just your company.',
    venture: 'Love Not Fear · personal Context Engines',
    tagMatches: ['goal setting', 'planning', 'personal growth', 'resilience', 'purpose', 'habits', 'productivity'],
  },
  {
    slug: 'love-vs-fear',
    track: 'personal',
    title: 'Love vs. Fear',
    blurb:
      'The decision axis underneath everything, choosing from love rather than fear. Self-leadership, the stories, and the spiritual layer.',
    venture: 'Love Not Fear',
    tagMatches: ['love not fear', 'spirituality', 'relationships', 'marriage', 'stoicism', 'philosophy', 'mindset', 'self-leadership', 'values'],
  },
];

export function pillarForTags(tags: string[] = []): Pillar | undefined {
  const t = tags.map((tag) => tag.toLowerCase());
  return pillars.find((p) => p.tagMatches.some((m) => t.includes(m)));
}

export function pillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
