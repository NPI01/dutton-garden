/**
 * Images shown in the footer's rotating gallery. Drop files into
 * /public/footer-images and list their filenames here.
 */
const FILES = [
  "Flowers 5.jpg",
  "flowers 8.jpg",
  "flowers 38.jpg",
  "flowers 61.jpg",
  "flowers 63.jpg",
  "Tobacco.jpg",
  "aunt-lou-1.jpg",
  "painting-7.jpg",
  "painting-20.jpg",
  "painting-22.jpg",
  "painting-23.jpg",
  "paintings-35.jpg",
  "drawing-1.jpg",
  "ceramic-17.jpg",
  "sculpture-3.jpg",
  "opera-2.jpg",
];

export const FOOTER_IMAGES: string[] = FILES.map(
  (name) => `/footer-images/${encodeURIComponent(name)}`
);
