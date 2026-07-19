import type { StudioDoorway } from "./types";

/**
 * The objects in Dan's studio that serve as entrances to each section.
 * Positions are percentages over the studio scene; every doorway also
 * appears in an accessible list so nothing depends on the scene alone.
 */
export const DOORWAYS: StudioDoorway[] = [
  {
    id: "easel",
    object: "The easel",
    label: "Paintings",
    href: "/paintings",
    note: "flowers, ballads, figures & legends",
    x: 26,
    y: 46,
  },
  {
    id: "songbook",
    object: "The songbook & tape recorder",
    label: "Ballads",
    href: "/ballads",
    note: "the barefoot mind, sung aloud",
    x: 61,
    y: 62,
  },
  {
    id: "curtain",
    object: "The stage curtain",
    label: "Stage",
    href: "/stage",
    note: "the Stone Man, the Secret Commonwealth",
    x: 82,
    y: 34,
  },
  {
    id: "workbench",
    object: "The workbench & metal creature",
    label: "Sculpture",
    href: "/sculpture",
    note: "things made of clay, iron & fire",
    x: 44,
    y: 72,
  },
  {
    id: "window",
    object: "The garden door",
    label: "Dandyland",
    href: "/dandyland",
    note: "the land, the house, the animals",
    x: 12,
    y: 30,
  },
  {
    id: "portrait",
    object: "The chair & coat",
    label: "Dan",
    href: "/dan",
    note: "the artist, in his own words",
    x: 72,
    y: 78,
  },
  {
    id: "cabinet",
    object: "The cabinet of tapes & papers",
    label: "Archive",
    href: "/archive",
    note: "the record of the work",
    x: 90,
    y: 66,
  },
  {
    id: "notebook",
    object: "The open notebook",
    label: "Almanac",
    href: "/almanac",
    note: "this season at Dandyland",
    x: 36,
    y: 22,
  },
];
