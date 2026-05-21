import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Get all flower image paths
export function getAllFlowerImages(): string[] {
  const images: string[] = [];
  
  // Add capitalized Flowers (2-6)
  for (let i = 2; i <= 6; i++) {
    images.push(`/flower-images/Flowers ${i}.jpg`);
  }
  
  // Add lowercase flowers (7-48)
  for (let i = 7; i <= 48; i++) {
    images.push(`/flower-images/flowers ${i}.jpg`);
  }
  
  return images;
}

// Get random subset of flowers
export function getRandomFlowers(count: number): string[] {
  const allFlowers = getAllFlowerImages();
  const shuffled = allFlowers.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, allFlowers.length));
}

// Group flowers into clusters
export function groupIntoClusters(images: string[], minSize = 2, maxSize = 6): string[][] {
  const shuffled = [...images].sort(() => Math.random() - 0.5);
  const clusters: string[][] = [];
  
  let i = 0;
  while (i < shuffled.length) {
    const clusterSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    clusters.push(shuffled.slice(i, i + clusterSize));
    i += clusterSize;
  }
  
  return clusters;
}

// Detect if device prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

