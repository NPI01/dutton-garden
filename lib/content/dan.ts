/**
 * Biographical content for Dan Dutton, drawn from the supplied source
 * material (docs/dan-dutton-bio-source.txt): the artist's own interview
 * quotes, exhibition records, and press. Facts only — no invented
 * biography. Edit here, not in the pages.
 */

export type TimelineEntry = { year: string; text: string };

export const TIMELINE: TimelineEntry[] = [
  {
    year: "1959",
    text: "Born near Somerset, Kentucky, on a 200-year-old family farm — land the Dutton family has held since before the Civil War Battle of Dutton Hill was fought on it.",
  },
  {
    year: "1962",
    text: "Begins painting at age three. The songs come at five or six — beating a muffin tin flat with a hammer in the yard, keeping time with a melody only he could hear.",
  },
  {
    year: "c. 1973",
    text: "Sells his first paintings at fourteen. At fifteen, hears Jean Ritchie sing at the first Berea Craft Fair and is, in his word, awestruck.",
  },
  {
    year: "c. 1976",
    text: "Builds his first studio at seventeen and begins making a living from his art, on his own terms.",
  },
  {
    year: "1980s",
    text: "Shows visual and video installation art at the J.B. Speed Art Museum in Louisville, which commissions two video works: A Day in the Life of the Artist and Water, an installed environment.",
  },
  {
    year: "1984",
    text: "Paints Tobacco — the last crop of tobacco raised on the family farm — and Death of a Ballad Singer, after the passing of his mentor Chappel Wallin.",
  },
  {
    year: "1985",
    text: "A one-man show fills the rotunda of the US Congressional Office Building in Washington.",
  },
  {
    year: "1990",
    text: "The Stone Man — the first of nine operas, composed at twenty-nine — premieres with Kentucky Opera at the Kentucky Center for the Arts, then tours the state.",
  },
  {
    year: "1995–2000",
    text: "The Secret Commonwealth, a four-part cycle of dance operas, is staged across Kentucky. The first three parts are filmed and broadcast by Kentucky Educational Television; part one is nominated for an Emmy, and KET's films are still used in Kentucky's public schools.",
  },
  {
    year: "1997",
    text: "Travels to Japan, playing old Appalachian ballads on dulcimer and guitar for Japanese audiences. Long study of the sacred tea ceremony follows him home into the moss gardens at Dandyland.",
  },
  {
    year: "2003",
    text: "21c Museum Hotels commissions twelve scenes from traditional ballads — the seed of Ballads of the Barefoot Mind.",
  },
  {
    year: "2006",
    text: "Ballads of the Barefoot Mind opens at 21c Museum, Louisville: twelve monumental oils in carved and painted frames, twelve ink-and-watercolors, and new recordings of the ballads, performed live through the opening weekend.",
  },
  {
    year: "A season away",
    text: "Artist in residence for Rookwood Pottery, creating a new line of ceramics — and meeting Jesse Rivera, a metal worker and highly skilled welder.",
  },
  {
    year: "2016",
    text: "Rivera–Dutton Sculpture Studio is founded in the 200-year-old carriage house. Their bronze turtles now line Turtle Bale Spring at Alys Beach, Florida.",
  },
  {
    year: "Now",
    text: "Lives and works at Dandyland, Somerset — the last of the Duttons still on the land, his studio a quarter mile from the Dutton's Hill monument — raising a new 40-by-80-foot studio with sixteen-foot ceilings.",
  },
];

export type Quote = { theme: string; text: string; context?: string };

/** Dan, in his own words — from interviews for his site. */
export const QUOTES: Quote[] = [
  {
    theme: "Farming",
    text: "Both of my parents were farmers. They were devoted to the land, but, and maybe because of this, they appreciated beauty and art.",
  },
  {
    theme: "Ballads",
    text: "As a child, I remember my parents and older people in my community singing these songs. I can remember closing my eyes and listening to them, and I'd see the story like a film.",
    context: "On the murder ballads of Kentucky",
  },
  {
    theme: "Nature",
    text: "I studied the natural sciences nearly as closely as I do the arts. The two are inherently connected, and all created, visual imagery ultimately springs from the natural world.",
  },
  {
    theme: "Tradition",
    text: "My feeling for the ballads was and is that they must incorporate and process every cultural change in order to truly live on.",
    context: "On learning from Jean Ritchie — and departing from her",
  },
  {
    theme: "Making",
    text: "I cover the canvas with a coat of reddish brown, draw with dark brown, then develop the contours with white and monochrome browns until it's like a sepia photo. The colors are then laid on in transparent layers.",
    context: "On how the ballad paintings are built",
  },
  {
    theme: "Memory",
    text: "Tape recorders can produce ghosts, and maybe that's the best thing they are able to do.",
  },
  {
    theme: "Whimsy",
    text: "I am the king of whimsy!",
    context: "When asked if the Alys Beach turtles could be a bit more whimsical",
  },
  {
    theme: "Folks",
    text: "Either we're all folks or none of us are.",
    context: "On the label “folk music”",
  },
];

export type Mentor = { name: string; relation: string; note: string };

/** The chain of transmission — the singers Dan learned from. */
export const MENTORS: Mentor[] = [
  {
    name: "His mother & father",
    relation: "the first singers",
    note: "Farmers to the core, who sang while they worked. His mother sang Barbara Ellen and Babes in the Woods; his father sang The Fox on the Town-O, and kept fox hounds not to kill but to listen — he hunted for what he called the sweet music of the chase.",
  },
  {
    name: "Jean Ritchie",
    relation: "the great teacher",
    note: "Dan first heard her at fifteen and brought her wildflowers until she put up with his questions. She taught him the dulcimer — bum-biddy-bum, her hand over his — and sang entire ballads one-on-one, knowing full well he might change the tune, change the words, paint it, or fire it into a ceramic.",
  },
  {
    name: "Chappel Wallin",
    relation: "the stump singer",
    note: "Found not up a holler but in the phone book, aged 89. He called the ballads “old love songs,” sat knee to knee slapping time, and sang in the booming voice of a man once hired to sing from stumps until a crowd gathered. A half-remembered snippet on Dan's tape later let Sheila Kay Adams reconstruct The Grey Cock — a ballad thought lost in America.",
  },
  {
    name: "Doug & Berzilla Wallin",
    relation: "the family line",
    note: "Chappel's nephew and sister-in-law. Doug sang The Darby Ram, which Dan memorized in a single hearing. Berzilla sang him a wonderful song no one had heard of — and he forgot it almost immediately. So it goes.",
  },
  {
    name: "Edna May",
    relation: "of Winchester",
    note: "Visited often; taught him several songs.",
  },
];

/** Institutions and public places holding or showing the work. */
export const COLLECTIONS: string[] = [
  "Brown-Forman Corporation, Louisville, Kentucky",
  "LeBlond Company, Cincinnati, Ohio",
  "Berea College Art Museum, Berea, Kentucky",
  "21c Museum, Louisville, Kentucky",
  "Alys Beach, Florida — the bronze turtles of Turtle Bale Spring",
  "Private collections",
];
