export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  body: string[];
};

export const news: Article[] = [
  {
    slug: "u14-mavericks-cup-run",
    title: "U14 Mavericks reach county cup quarter-final",
    excerpt:
      "A late winner against Witney sees the Mavericks through to the last eight of the Oxfordshire Cup.",
    date: "2026-05-04",
    author: "Mike Gill",
    category: "Match report",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1920&q=80",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
  },
  {
    slug: "wildcats-spring-festival",
    title: "Wildcats spring festival draws record turnout",
    excerpt:
      "Over 60 girls aged 7–11 came down to Heyford Park for our biggest Wildcats session of the year.",
    date: "2026-04-26",
    author: "Stuart Simpson",
    category: "Club news",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
  },
  {
    slug: "new-floodlights-heyford",
    title: "New floodlights now live at Heyford Park",
    excerpt:
      "After a long install, our new floodlights at Heyford Park are switched on for evening training.",
    date: "2026-04-12",
    author: "Matt Parkinson",
    category: "Facilities",
    image:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1920&q=80",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    slug: "sponsorship-thank-you",
    title: "Thank you to our 2025/26 sponsors",
    excerpt:
      "Every team at HPFC is now backed by a local business — here's what their support means to us.",
    date: "2026-03-30",
    author: "Juliette Miller",
    category: "Sponsorship",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1920&q=80",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    ],
  },
  {
    slug: "rising-stars-summer-dates",
    title: "Rising Stars summer dates announced",
    excerpt:
      "Free football for 4–7 year olds returns through the summer holidays. Here are the dates.",
    date: "2026-03-18",
    author: "Paul McMahon",
    category: "Club news",
    image:
      "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?auto=format&fit=crop&w=1920&q=80",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
];

export const getArticle = (slug: string) => news.find((a) => a.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
