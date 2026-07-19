/**
 * Top-level section definitions: the atmosphere, the invitation, and the
 * subsections that make up each part of Dandyland. Copy is editorial and
 * evocative; concrete names (operas, singers, places) come from the
 * project brief and are kept here so they can be edited or moved to a CMS
 * without touching the interface. Representative images point at real
 * artwork in /public/art-images.
 */

export type Ground = "soil" | "aged" | "cream" | "clay" | "pine";

export type Subsection = {
  title: string;
  blurb: string;
  href?: string;
  /** Optional real image path; omit to render an elegant placeholder. */
  image?: string;
  imageAlt?: string;
};

export type Section = {
  slug: string;
  kicker: string;
  title: string;
  lede: string;
  ground: Ground;
  subsections: Subsection[];
};

export const SECTIONS: Record<string, Section> = {
  paintings: {
    slug: "paintings",
    kicker: "The visual center",
    title: "Paintings",
    lede: "For forty years the paintings have come out of the same ground as the songs and the gardens — flowers and animals, lovers and legends, the barefoot mind at work. Browse them as you would walk a bed of flowers, not a catalog.",
    ground: "cream",
    subsections: [
      {
        title: "The Garden",
        blurb: "Flower paintings, botanical details, animals, and the natural cycles of the year. The largest and most-loved body of work.",
        href: "/paintings/garden",
        image: "/flower-images/flowers%2029.jpg",
        imageAlt: "Flower painting from The Garden series",
      },
      {
        title: "Ballads of the Barefoot Mind",
        blurb: "Twelve monumental ballad paintings, each bound to a song — carved and painted frames included, as Dan intends them.",
        href: "/paintings/ballads",
        image: "/art-images/Pretty_Polly_2_oc_lrg.jpg",
        imageAlt: "Pretty Polly — a ballad painting in its carved frame",
      },
      {
        title: "Early Work",
        blurb: "Drawings, studies, and early paintings — the hand learning itself, bound up with family, labor, and place.",
        href: "/paintings/early-work",
        image: "/art-images/drawing-2.jpg",
        imageAlt: "An early drawing",
      },
      {
        title: "Figures, Lovers, and Legends",
        blurb: "Narrative and figurative paintings in which inherited stories, desire, myth, and contemporary bodies overlap.",
        href: "/paintings/figures-and-legends",
        image: "/art-images/pan-1.jpg",
        imageAlt: "Pan — a figure painting",
      },
      {
        title: "Recent Work",
        blurb: "A living room for current paintings and works still wet on the easel.",
        href: "/paintings/recent",
        image: "/art-images/painting-28.jpg",
        imageAlt: "A recent painting",
      },
      {
        title: "The Painted Frame",
        blurb: "On Dan's carved, constructed, and painted frames — where image, craft, architecture, and decoration meet.",
        href: "/paintings",
        image: "/art-images/making-art.jpg",
        imageAlt: "Dan carving a frame",
      },
    ],
  },

  ballads: {
    slug: "ballads",
    kicker: "A listening room",
    title: "Ballads",
    lede: "Part songbook, part oral-history archive. The old songs move from person to person, and Dan carries them forward by changing them — because a tradition only stays alive by being lived in.",
    ground: "pine",
    subsections: [
      {
        title: "The Songbook",
        blurb: "The catalog of ballads Dan sings and has interpreted — lyrics, story, source tradition, and the people he learned them from.",
        href: "/ballads",
        image: "/art-images/Lord-Bateman.jpg",
        imageAlt: "Lord Bateman — a ballad painting",
      },
      {
        title: "Voices Before Us",
        blurb: "The singers, relatives, and mentors in the chain of transmission — family, Jean Ritchie, Chappel Wallin, Doug and Berzilla Wallin, Edna May, and others.",
        href: "/ballads",
        image: "/art-images/danjean1.jpg",
        imageAlt: "Dan and Jean",
      },
      {
        title: "Tape Recorders and Ghosts",
        blurb: "Field recordings, memory, preservation, and the strange afterlife recorded sound gives to forgotten voices.",
        href: "/ballads",
        image: "/art-images/music-keys.jpg",
        imageAlt: "Music and keys",
      },
      {
        title: "The Ancient Sound",
        blurb: "Dan on Appalachian song, oral tradition, electricity, experiment, and why inherited forms must change to survive.",
        href: "/ballads",
        image: "/art-images/Death-of-a-Ballad-Singer.jpg",
        imageAlt: "Death of a Ballad Singer",
      },
      {
        title: "Listen",
        blurb: "A plain index of the recordings, for anyone who wants to go straight to the sound.",
        href: "/ballads",
        image: "/art-images/black-jack.jpg",
        imageAlt: "Black Jack Davey — a ballad painting",
      },
    ],
  },

  stage: {
    slug: "stage",
    kicker: "Before the performance",
    title: "The Stage",
    lede: "Not merely opera. Dan's productions gather composition, theater, movement, costume, painting, design, film, and folklore into single living works. The house lights are down.",
    ground: "aged",
    subsections: [
      {
        title: "The Stone Man",
        blurb: "The opera — synopsis, production history, music, costume and set designs, programs, posters, reviews, and Dan's reflections.",
        href: "/stage/the-stone-man",
        image: "/art-images/opera-2.jpg",
        imageAlt: "A scene from the opera",
      },
      {
        title: "The Secret Commonwealth",
        blurb: "A four-part dance-opera cycle: The Changeling and the Bear · The Road · Love and Time · The Approach of the Mystery.",
        href: "/stage/the-secret-commonwealth",
        image: "/art-images/changeling-and-the-bear-1.jpg",
        imageAlt: "The Changeling and the Bear",
      },
      {
        title: "Other Works",
        blurb: "Further operas, performances, concerts, collaborations, and unrealized projects.",
        href: "/stage",
        image: "/art-images/opera-3.jpg",
        imageAlt: "A performance",
      },
      {
        title: "Behind the Curtain",
        blurb: "Costumes, props, models, drawings, scripts, rehearsals, choreography notes, and production ephemera.",
        href: "/stage",
        image: "/art-images/opera-4.jpg",
        imageAlt: "Behind the curtain",
      },
      {
        title: "Film and Video",
        blurb: "Video installations, museum commissions, performance documentation, and Dan's own filmmaking.",
        href: "/stage",
        image: "/art-images/opera-5.jpg",
        imageAlt: "Performance documentation",
      },
    ],
  },

  sculpture: {
    slug: "sculpture",
    kicker: "Made by hand",
    title: "Sculpture & Things Made",
    lede: "Sculpture, metalwork, ceramics, garden objects, frames, sets, and whole built environments — the places where art crosses over into architecture and the everyday.",
    ground: "soil",
    subsections: [
      {
        title: "Rivera–Dutton Studio",
        blurb: "The collaboration with Jesse Rivera — finished sculpture, works in progress, fabrication, welding, models, and public commissions.",
        href: "/sculpture",
        image: "/art-images/sculpture-2.jpg",
        imageAlt: "A sculpture",
      },
      {
        title: "Creatures",
        blurb: "Animals, turtles, mythic beings, and natural forms in metal and clay.",
        href: "/sculpture",
        image: "/art-images/dragon-2.jpg",
        imageAlt: "A ceramic dragon",
      },
      {
        title: "Figures and Monuments",
        blurb: "Larger figurative and public works.",
        href: "/sculpture",
        image: "/art-images/sculpture-4.jpg",
        imageAlt: "A figurative sculpture",
      },
      {
        title: "Ceramics",
        blurb: "Work made with Rookwood Pottery and other ceramic projects.",
        href: "/sculpture",
        image: "/art-images/ceramics-6.jpg",
        imageAlt: "A ceramic work",
      },
      {
        title: "Built Environments",
        blurb: "Studios, installations, garden structures, sets, and frames — art you can walk inside.",
        href: "/sculpture",
        image: "/art-images/stained-glass.jpg",
        imageAlt: "Stained glass",
      },
      {
        title: "How Things Are Made",
        blurb: "Sketches, clay studies, welding, carving, patination, framing, collaboration — the process itself.",
        href: "/sculpture",
        image: "/art-images/making-art-2.jpg",
        imageAlt: "Making the work",
      },
    ],
  },

  dandyland: {
    slug: "dandyland",
    kicker: "The conceptual center",
    title: "Dandyland",
    lede: "The name Dan gave — only half-jokingly — to the family land outside Somerset: garden, house, animals, studios, ponds, and old woods dappled with hidden meadows. It is both a real place in Kentucky and the imaginative country the whole of this work belongs to.",
    ground: "clay",
    subsections: [
      {
        title: "The Land",
        blurb: "Kentucky red clay, limestone, fossils, geodes, springs, mature woods, birds, farming, and the turning of the seasons.",
        href: "/dandyland",
        image: "/art-images/dandyland-1.jpg",
        imageAlt: "The land at Dandyland",
      },
      {
        title: "The House",
        blurb: "Domestic life, ancestry, family memory, and the relationship between dwelling and art.",
        href: "/dandyland",
        image: "/videos/poster.jpg",
        imageAlt: "The studio building at Dandyland",
      },
      {
        title: "The Gardens",
        blurb: "Flower gardens, moss gardens, stone and water, Japanese influence, tea ceremony, and cultivated wildness.",
        href: "/dandyland",
        image: "/art-images/the-garden-path.jpg",
        imageAlt: "The garden path",
      },
      {
        title: "The Studios",
        blurb: "The painting studio, the sculpture studio, the carriage house, the tools, and spaces that keep evolving.",
        href: "/dandyland",
        image: "/art-images/the-garden-path-2.jpg",
        imageAlt: "Toward the studios",
      },
      {
        title: "The Animals",
        blurb: "Farm animals, wildlife, turtles, and a lifetime of close natural observation.",
        href: "/dandyland",
        image: "/art-images/chicken-1.jpg",
        imageAlt: "A painting of a chicken",
      },
      {
        title: "Dutton Hill",
        blurb: "The family's relationship to the land of the Civil War Battle of Dutton Hill — inherited memory, not detached history.",
        href: "/dandyland",
        image: "/art-images/mowed-field.jpg",
        imageAlt: "The mowed field",
      },
      {
        title: "Map of Dandyland",
        blurb: "An illustrated map, growing over time — places you'll be able to click into for photographs, films, stories, sounds, and seasonal notes.",
        href: "/dandyland",
        image: "/art-images/creek-1.jpg",
        imageAlt: "The creek",
      },
    ],
  },

  dan: {
    slug: "dan",
    kicker: "An intimate portrait",
    title: "Dan Dutton",
    lede: "Painter, composer, singer, sculptor, theater director, set and costume designer, filmmaker, and builder of narrative environments. These are not separate careers — they are one imaginative practice wearing many coats.",
    ground: "cream",
    subsections: [
      {
        title: "The Artist",
        blurb: "One practice, many expressions — an introduction to how the work holds together.",
        href: "/dan",
        image: "/art-images/dan-dutton-bio-pic.jpg",
        imageAlt: "Dan Dutton",
      },
      {
        title: "A Life in Making",
        blurb: "An illustrated timeline: the family farm, first paintings and songs, museum exhibitions, the Speed Museum, a Congressional exhibition, The Stone Man, The Secret Commonwealth, Japan, Ballads of the Barefoot Mind, Rookwood, and Rivera–Dutton.",
        href: "/dan",
        image: "/art-images/dan-retro-bio-pic.jpg",
        imageAlt: "Dan Dutton, earlier years",
      },
      {
        title: "In His Own Words",
        blurb: "Video, audio, and quotations gathered by theme — beauty, farming, ballads, tradition, nature, love, whimsy, making, and death and memory.",
        href: "/dan",
        image: "/art-images/dan-dutton-bio-pic-3.jpg",
        imageAlt: "Dan Dutton",
      },
      {
        title: "The King of Whimsy",
        blurb: "A short visual essay on humor, animals, decorative excess, and the conviction that ordinary life can become art.",
        href: "/dan",
        image: "/art-images/blue-cat.jpg",
        imageAlt: "The Blue Cat",
      },
    ],
  },

  archive: {
    slug: "archive",
    kicker: "The record",
    title: "Archive",
    lede: "A serious research archive for curators, writers, collectors, historians, and longtime followers — clean records, honest filters, and room to grow.",
    ground: "soil",
    subsections: [
      {
        title: "Works",
        blurb: "Searchable records for paintings, sculpture, ceramics, stage works, recordings, film, video, installations, and design.",
        href: "/archive",
        image: "/art-images/painting-10.jpg",
        imageAlt: "A catalogued painting",
      },
      {
        title: "Exhibitions and Performances",
        blurb: "A chronology of exhibitions, concerts, theatrical productions, screenings, and public commissions.",
        href: "/archive",
        image: "/art-images/opera-1.jpg",
        imageAlt: "A performance",
      },
      {
        title: "Essays",
        blurb: "Long-form criticism and catalog writing.",
        href: "/archive",
        image: "/art-images/drawing-5.jpg",
        imageAlt: "A drawing",
      },
      {
        title: "Press",
        blurb: "Interviews, reviews, articles, television appearances, and profiles.",
        href: "/archive",
        image: "/art-images/dan-dutton-1.jpg",
        imageAlt: "Dan Dutton",
      },
      {
        title: "Film and Audio Archive",
        blurb: "Documentation, recordings, interviews, and performance materials.",
        href: "/archive",
        image: "/art-images/music-keys.jpg",
        imageAlt: "Music",
      },
      {
        title: "Documents",
        blurb: "Programs, posters, invitations, catalogs, sketches, correspondence, and production materials.",
        href: "/archive",
        image: "/art-images/tryptych-1.jpg",
        imageAlt: "A triptych",
      },
    ],
  },
};

export const SECTION_ORDER = [
  "paintings",
  "ballads",
  "stage",
  "sculpture",
  "dandyland",
  "dan",
  "archive",
] as const;
