/**
 * Content model for Dandyland.
 *
 * Every artwork, ballad, stage work, recording, and archive entry is
 * data-driven and typed so a CMS can be layered on later without changing
 * the interface. Media use a small shared vocabulary of asset references
 * with explicit expected paths; missing assets render as elegant
 * placeholders (see components/media/asset-placeholder).
 */

export type MediaImage = {
  /** Public path (may not exist yet — renders a placeholder if missing). */
  src: string;
  alt: string;
  /** Optional intrinsic size to prevent layout shift. */
  width?: number;
  height?: number;
  caption?: string;
  credit?: string;
  /** Marks an image whose file has not yet been supplied. */
  placeholder?: boolean;
};

export type AudioTrack = {
  slug: string;
  title: string;
  src: string;
  duration?: string;
  performer?: string;
  transcript?: string;
  placeholder?: boolean;
};

export type VideoAsset = {
  src: string;
  title: string;
  poster?: string;
  captions?: string;
  placeholder?: boolean;
};

export type PersonReference = {
  name: string;
  relation?: string;
  note?: string;
};

export type Production = {
  title?: string;
  year?: string;
  venue?: string;
  role?: string;
  note?: string;
};

export type ArchiveDocument = {
  title: string;
  kind?: string;
  image?: MediaImage;
};

export type MediaAsset = MediaImage | AudioTrack | VideoAsset;

export type Availability = "available" | "unavailable" | "inquire";

export type PaintingSeries =
  | "garden"
  | "ballads"
  | "early-work"
  | "figures-and-legends"
  | "recent";

export type Artwork = {
  slug: string;
  title: string;
  year?: number | string;
  medium?: string;
  dimensions?: string;
  series?: PaintingSeries;
  description?: string;
  images: MediaImage[];
  detailImages?: MediaImage[];
  frameIncluded?: boolean;
  relatedBalladSlug?: string;
  relatedAudio?: AudioTrack[];
  relatedWorks?: string[];
  collection?: string;
  availability?: Availability;
  featured?: boolean;
};

export type Ballad = {
  slug: string;
  title: string;
  summary?: string;
  lyrics?: string;
  provenance?: string;
  learnedFrom?: PersonReference[];
  recordings?: AudioTrack[];
  relatedArtwork?: string[];
  notes?: string;
};

export type StageWork = {
  slug: string;
  title: string;
  year?: string;
  type?: string;
  cycle?: string;
  synopsis?: string;
  productionHistory?: Production[];
  images?: MediaImage[];
  videos?: VideoAsset[];
  audio?: AudioTrack[];
  documents?: ArchiveDocument[];
};

export type Sculpture = {
  slug: string;
  title: string;
  year?: string;
  materials?: string;
  dimensions?: string;
  location?: string;
  collaborator?: string;
  description?: string;
  images: MediaImage[];
  processImages?: MediaImage[];
  availability?: Availability;
};

export type AlmanacEntry = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  body: string;
  categories?: string[];
  images?: MediaImage[];
  audio?: AudioTrack[];
  video?: VideoAsset[];
};

export type ArchiveItem = {
  slug: string;
  title: string;
  date?: string;
  category: string;
  medium?: string;
  series?: string;
  description?: string;
  media?: MediaAsset[];
  relatedWorks?: string[];
  rightsNote?: string;
};

/** A room object on the Studio hub that leads into a section. */
export type StudioDoorway = {
  id: string;
  object: string;
  label: string;
  href: string;
  note: string;
  /** Focal position on the studio scene, in % (for the interactive hub). */
  x: number;
  y: number;
};
