/**
 * The supplied flower paintings/photographs live in /public/flower-images
 * with inconsistent, space-containing filenames. This module centralizes
 * them as URL-safe paths so the Garden Walk and Paintings section can use
 * them without repeating encoding logic.
 *
 * To add more: drop files in /public/flower-images and list them here.
 */

const FILES = [
  "Dogwood.jpg", "Orchid.jpg",
  "Flowers 2.jpg", "Flowers 3.jpg", "Flowers 4.jpg", "Flowers 5.jpg",
  "Flowers 6.jpg", "flowers 7.jpg", "flowers 8.jpg", "flowers 10.jpg",
  "flowers 11.jpg", "flowers 12.jpg", "flowers 13.jpg", "flowers 14.jpg",
  "flowers 15.jpg", "flowers 16.jpg", "flowers 17.jpg", "flowers 18.jpg",
  "flowers 19.jpg", "flowers 20.jpg", "flowers 21.jpg", "flowers 22.jpg",
  "flowers 23.jpg", "flowers 24.jpg", "flowers 25.jpg", "flowers 26.jpg",
  "flowers 27.jpg", "flowers 28.jpg", "flowers 29.jpg", "flowers 30.jpg",
  "flowers 31.jpg", "flowers 32.jpg", "flowers 33.jpg", "flowers 34.jpg",
  "flowers 35.jpg", "flowers 36.jpg", "flowers 37.jpg", "flowers 38.jpg",
  "flowers 39.jpg", "flowers 40.jpg", "flowers 41.jpg", "flowers 42.jpg",
  "flowers 43.jpg", "flowers 44.jpg", "flowers 45.jpg", "flowers 46.jpg",
  "flowers 47.jpg", "flowers 48.jpg", "flowers 49.jpg", "flowers 50.jpg",
  "flowers 51.jpg", "flowers 53.jpg", "flowers 54.jpg", "flowers 55.jpg",
  "flowers 56.jpg", "flowers 57.jpg", "flowers 58.jpg", "flowers 59.jpg",
  "flowers 60.jpg", "flowers 61.jpg", "flowers 62.jpg", "flowers 63.jpg",
  "flowers 64.jpg", "flowers 65.jpg", "flowers 66.jpg", "flowers 67.jpg",
  "flowers 68.jpg", "flowers 69.jpg", "flowers 70.jpg", "flowers 80.jpg",
  "flowers 81.jpg", "flowers 82.jpg", "flowers 83.jpg", "flowers 84.jpg",
  "flowers 85.jpg", "flowers 86.jpg", "flowers 87.jpg", "flowers 88.jpg",
  "flowers 90.jpg", "flowers 91.jpg", "flowers 92.jpg", "flowers 93.jpg",
  "flowers 94.jpg", "flowers 95.jpg",
];

/** URL-safe path for a flower filename (used e.g. for the rotating bg). */
export function flowerSrc(name: string): string {
  return `/flower-images/${encodeURIComponent(name)}`;
}

export type Flower = { src: string; alt: string; id: number };

export const FLOWERS: Flower[] = FILES.map((name, i) => ({
  id: i,
  src: `/flower-images/${encodeURIComponent(name)}`,
  alt: `Flower painting by Dan Dutton (${i + 1})`,
}));

export const flowerCount = FLOWERS.length;
