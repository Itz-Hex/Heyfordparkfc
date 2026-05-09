export type Sponsor = {
  name: string;
  url: string;
};

export type Team = {
  slug: string;
  name: string;
  blurb: string;
  manager: string;
  trainingDay: string;
  trainingTime: string;
  trainingVenue: string;
  matchDay: string;
  league: string;
  heroImage: string;
  gallery: string[];
  sponsors: Sponsor[];
};

const acme = (n: number): Sponsor[] =>
  Array.from({ length: n }, (_, i) => ({
    name: `Acme Corporation ${i + 1}`,
    url: "https://example.com",
  }));

const galleryImages = [
  "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
];

const heroImage = "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=1920&q=80";

const baseTeam = (slug: string, name: string, sponsorCount = 3): Team => ({
  slug,
  name,
  blurb:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  manager: "TBC",
  trainingDay: "TBC",
  trainingTime: "TBC",
  trainingVenue: "TBC",
  matchDay: "TBC",
  league: "TBC",
  heroImage,
  gallery: galleryImages,
  sponsors: acme(sponsorCount),
});

export const teams: Team[] = [
  baseTeam("u7s", "U7s"),
  baseTeam("u8-tigers", "U8 Tigers"),
  baseTeam("u8-aardvarks", "U8 Aardvarks"),
  baseTeam("u9s", "U9s"),
  baseTeam("u10s", "U10s"),
  baseTeam("u11-phantoms", "U11 Phantoms"),
  baseTeam("u11-ravens", "U11 Ravens"),
  baseTeam("u11-sabres", "U11 Sabres"),
  baseTeam("u11-girls", "U11 Girls"),
  baseTeam("u12s", "U12s"),
  baseTeam("u12-girls", "U12 Girls"),
  baseTeam("u13s", "U13s"),
  baseTeam("u14-mavericks", "U14 Mavericks"),
  baseTeam("u14s", "U14s"),
  baseTeam("u15s", "U15s"),
  baseTeam("u16s", "U16s"),
  baseTeam("rising-stars", "Rising Stars", 2),
  baseTeam("wildcats", "Wildcats", 2),
];

export const getTeam = (slug: string) => teams.find((t) => t.slug === slug);
