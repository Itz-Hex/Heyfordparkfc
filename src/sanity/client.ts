import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "rzjt6rbe",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function isSanityImage(src: any): boolean {
  return !!(src && typeof src === "object" && (src.asset || src._type === "image"));
}

export function resolveImage(src: any, width = 1600): string | undefined {
  if (!src) return undefined;
  if (typeof src === "string") return src;
  if (isSanityImage(src)) {
    try {
      return urlFor(src).width(width).url();
    } catch {
      return undefined;
    }
  }
  return undefined;
}
