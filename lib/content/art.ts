/**
 * Catalog of Dan Dutton's supplied artwork in /public/art-images, grouped
 * into the sections of the site. Categorization is by filename (confirmed
 * against the images). To recategorize, move a filename between the arrays.
 *
 * Titles are prettified from filenames, except the ballad paintings, which
 * carry their proper ballad names.
 */

export type Art = {
  src: string;
  title: string;
  /** Year (or range) where documented. */
  year?: string;
  /** Medium where documented (filename suffixes: _oc = oil on canvas, _iw = ink & watercolor). */
  medium?: string;
  /** A short provenance or story note, shown in the lightbox. */
  note?: string;
};

const DIR = "/art-images/";

function src(file: string): string {
  return DIR + encodeURIComponent(file);
}

/** Prettify a filename into a title: strip extension/suffixes, title-case. */
function pretty(file: string): string {
  return file
    .replace(/\.[a-z]+$/i, "")
    .replace(/_(oc|iw)_?(lrg)?$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b(oc|iw|lrg|o)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function build(files: string[]): Art[] {
  return files.map((f) => ({ src: src(f), title: pretty(f) }));
}

/** Explicit title overrides where the pretty name isn't quite right. */
function withTitles(entries: [string, string][]): Art[] {
  return entries.map(([f, title]) => ({ src: src(f), title }));
}

// ── Paintings ──────────────────────────────────────────────────────────

/**
 * Ballads of the Barefoot Mind — the ballad paintings. Twelve monumental
 * oils (commissioned by 21c Museum Hotels, 2003; shown 2006) with a
 * companion set of ink-and-watercolors. Metadata from the artist's records.
 */
export const BALLAD_PAINTINGS: Art[] = [
  {
    src: src("Death-of-a-Ballad-Singer.jpg"),
    title: "Death of a Ballad Singer",
    year: "1984",
    medium: "acrylic pigment on linen",
    note: "Painted after the death of Chappel Wallin — Death reaches for, but cannot catch, the bird-soul of music. Private collection.",
  },
  {
    src: src("Fox-on-the-Town-O.jpg"),
    title: "Fox on the Town-O",
    year: "1986",
    medium: "acrylic and pigment on wood cutouts",
    note: "The ballad his father sang.",
  },
  { src: src("The-Fox.jpg"), title: "The Fox" },
  {
    src: src("Lord-Bateman.jpg"),
    title: "Lord Bateman",
    year: "2006",
    medium: "ink and watercolor",
    note: "Learned from Chappel Wallin, who sang a very interesting text of it.",
  },
  {
    src: src("Polly_Vaughn_oc_lrg.jpg"),
    title: "Polly Vaughn",
    medium: "oil on canvas",
  },
  {
    src: src("Pretty_Polly_2_oc_lrg.jpg"),
    title: "Pretty Polly",
    medium: "oil on canvas",
  },
  {
    src: src("Renardyne_oc_lrg.jpg"),
    title: "Renardyne",
    medium: "oil on canvas",
  },
  {
    src: src("Tam_Lin_iw.jpg"),
    title: "Tam Lin",
    medium: "ink and watercolor",
  },
  {
    src: src("Tamlin_oc_lrg.jpg"),
    title: "Tam Lin",
    medium: "oil on canvas",
  },
  {
    src: src("How_came_that_blood_iw.jpg"),
    title: "How Came That Blood",
    medium: "ink and watercolor",
  },
  {
    src: src("barbara-ellen.jpg"),
    title: "Barbara Ellen",
    year: "2006",
    medium: "ink and watercolor",
    note: "The ballad his mother sang.",
  },
  { src: src("black-jack.jpg"), title: "Black Jack Davey" },
  { src: src("black-jack-2.jpg"), title: "Black Jack Davey II" },
  {
    src: src("danjean1.jpg"),
    title: "Dan Dutton and Jean Ritchie",
    year: "c. 1980s",
    medium: "photograph",
  },
];

/** Figures, Lovers, and Legends — paintings only. */
export const FIGURE_PAINTINGS: Art[] = [
  ...withTitles([["pan-1.jpg", "Pan in the Pasture"]]),
  ...build([
    "aunt-lou-1.jpg", "aunt-lou-2.jpg", "aunt-lou-3.jpg", "aunt-lou-4.jpg",
    "aunt-lou-5.jpg", "aunt-lou-6.jpg", "aunt-lou-7.jpg",
  ]),
  ...withTitles([["the-faun.jpeg", "The Faun"]]),
];

/** The Pan series in sculpture — bronze figures and ceramic creatures. */
export const PAN_SCULPTURE: Art[] = withTitles([
  ["pan-2.jpg", "Pan (snail)"],
  ["pan-3.jpg", "Pan (snails)"],
  ["pan-4.jpg", "Pan"],
  ["pan-5.jpg", "Pan"],
  ["pan-6.jpg", "Pan"],
  ["pan-7.jpg", "Pan"],
]);

/** Animals & nature paintings — shown alongside the flowers in The Garden. */
export const GARDEN_ANIMALS: Art[] = build([
  "birds-1.jpg", "birds-2.jpg", "birds-3.jpg", "birds-4.jpg", "birds-5.jpg",
  "birds-6.jpg", "blue-cat.jpg", "bear-and-cat.jpg", "chicken-1.jpg",
  "chicken-2.jpg", "frog-1.jpg", "rabbit-1.jpg", "rabbit-2.jpg",
  "dragonfly.jpg", "nest.jpg", "mushrooms.jpg",
  "little-thistle-1.jpg", "little-thistle-2.jpg", "little-thistle-3.jpg",
]);

/** General paintings — recent & other works. */
export const GENERAL_PAINTINGS: Art[] = [
  {
    src: src("Tobacco.jpg"),
    title: "Tobacco",
    year: "1984",
    medium: "oil on board",
    note: "The last crop of tobacco raised on the Dutton family farm. Private collection.",
  },
  ...build([
    "painting 1.jpg", "painting-2.jpg", "painting-3.jpg", "painting 5.jpg",
    "painting-5.jpg", "painting-6.jpg", "painting-7.jpg", "painting-8.jpg",
    "painting-9.jpg", "painting-10.jpg", "painting-11.jpg", "painting-12.jpg",
    "painting-14.jpg", "painting-15.jpg", "painting-16.jpg", "painting-17.jpg",
    "painting-18.jpg", "painting-19.jpg", "painting-20.jpg", "painting-21.jpg",
    "painting-22.jpg", "painting-23.jpg", "painting-24.jpg", "painting-25.jpg",
    "painting-26.jpg", "painting-27.jpg", "painting-28.jpg", "painting-29.jpg",
    "painting-30.jpg", "painting-31.jpg", "painting-32.jpg", "paintings-33.jpg",
    "paintings-34.jpg", "paintings-35.jpg",
    "tryptych-1.jpg", "tryptych-2.jpg", "tryptych-3.jpg",
  ]),
];

/** Drawings & studies. */
export const DRAWINGS: Art[] = build([
  "drawing-1.jpg", "drawing-2.jpg", "drawing-3.jpg", "drawing-4.jpg",
  "drawing-5.jpg", "drawing-6.jpg", "drawing-7.jpg", "drawing-8.jpg",
  "drawings-9.jpg",
]);

// ── Sculpture & Things Made ────────────────────────────────────────────

export const SCULPTURE: Art[] = [
  ...build([
    "sculpture-1.jpg", "sculpture-2.jpg", "sculpture-3.jpg", "sculpture-4.jpg",
    "sculpture-5.jpg", "earth-mother.jpg", "earth-mother-2.jpg",
    "dragon-1.jpg", "dragon-2.jpg", "dragon-3.jpg", "stained-glass.jpg",
  ]),
  ...PAN_SCULPTURE,
];

export const CERAMICS: Art[] = build([
  "ceramic-9.jpg", "ceramic-10.jpg", "ceramic-11.jpg", "ceramic-14.jpg",
  "ceramic-15.jpg", "ceramic-16.jpg", "ceramic-17.jpg", "ceramic-18.jpg",
  "ceramic-19.jpg", "ceramic-20.jpg", "ceramic-21.jpg",
  "ceramics-1.jpg", "ceramics-2.jpg", "ceramics-3.jpg", "ceramics-4.jpg",
  "ceramics-5.jpg", "ceramics-6.jpg", "ceramics-7.jpg", "ceramics-8.jpg",
  "ceramics-9.jpg", "ceramics-10.jpg", "ceramics-23.jpg", "ceramics-24.jpg",
  "cermics-26.jpg", "ceramics-27.jpg", "ceramics-28.jpg", "ceramics-29.jpg",
  "ceramics-30.jpg", "tile.jpg", "tile-2.jpg", "tile-3.jpg",
]);

// ── Stage ──────────────────────────────────────────────────────────────

export const STAGE_PHOTOS: Art[] = [
  ...build(["opera-1.jpg", "opera-2.jpg", "opera-3.jpg", "opera-4.jpg", "opera-5.jpg"]),
  ...withTitles([["changeling-and-the-bear-1.jpg", "The Changeling and the Bear"]]),
];

// ── Dandyland (the land) ───────────────────────────────────────────────

export const LAND_PHOTOS: Art[] = withTitles([
  ["dandyland-1.jpg", "Dandyland"],
  ["the-garden-path.jpg", "The Garden Path"],
  ["the-garden-path-2.jpg", "The Garden Path II"],
  ["creek-1.jpg", "The Creek"],
  ["creek-2.jpg", "The Creek II"],
  ["creek-3.jpg", "The Creek III"],
  ["mowed-field.jpg", "The Mowed Field"],
  ["silo.jpg", "The Silo"],
]);

// ── Dan ────────────────────────────────────────────────────────────────

/** Portraits of Dan, most-current first. */
export const DAN_PORTRAITS: Art[] = build([
  "dan-dutton-bio-pic.jpg", "dan-dutton-bio-pic-2.jpg", "dan-dutton-bio-pic-3.jpg",
  "dan-dutton-bio-pic-4.jpg", "dan-dutton-1.jpg",
]);

/** Retrospective / younger portraits. */
export const DAN_RETRO: Art[] = build([
  "dan-retro-bio-pic.jpg", "dan-retro-bio-pic-2.jpg", "dan-retro-bio-pic-4.jpg",
]);

/** Process — Dan making the work. */
export const MAKING: Art[] = build(["making-art.jpg", "making-art-2.jpg", "music-keys.jpg"]);

/** A single hero portrait for the Dan section / studio. */
export const DAN_HERO = DAN_PORTRAITS[0];
