/**
 * The supplied flower paintings/photographs live in /public/flower-images
 * with inconsistent, space-containing filenames. This module centralizes
 * them as URL-safe paths so the Garden Walk and Paintings section can use
 * them without repeating encoding logic.
 *
 * To add more: drop files in /public/flower-images and list them here.
 */

const FILES = [
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
  "flowers 47.jpg", "flowers 48.jpg",
];

export type Flower = { src: string; alt: string; id: number };

export const FLOWERS: Flower[] = FILES.map((name, i) => ({
  id: i,
  src: `/flower-images/${encodeURIComponent(name)}`,
  alt: `Flower painting by Dan Dutton (${i + 1})`,
}));

export const flowerCount = FLOWERS.length;
