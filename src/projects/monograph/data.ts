export const image = (name: string) =>
  import.meta.env.BASE_URL + "images/monograph/" + name;
export interface Story {
  id: string;
  category: string;
  title: string;
  deck: string;
  file: string;
  alt: string;
  credit: string;
  creditUrl: string;
  caption: string;
  paragraphs: string[];
}
export const stories: Story[] = [
  {
    id: "room",
    category: "Spaces",
    title: "The room becomes the work",
    deck: "A gallery is never quite an empty room. On colour, distance, and the space between pictures.",
    file: "exhibition.jpg",
    alt: "Orange and multicoloured Robert Rauschenberg works in a white LACMA gallery",
    credit: "Mike Von / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/inside-white-building-with-multicolored-paintings-v9-ZW3VONcw",
    caption: "Robert Rauschenberg works at LACMA, photographed by Mike Von.",
    paragraphs: [
      "The first thing we notice is the interval. A white wall holds a bright orange field, then a pause, then another picture. The room edits the encounter before a visitor has read a label. Floor, light, doorway and distance become part of the experience of looking.",
      "In this photograph of Robert Rauschenberg’s work at LACMA, the gallery gives each surface a different rhythm. From far away, colour becomes architecture. Move closer and a second kind of attention begins: edges, printed marks, textures, the small decisions that the larger view cannot hold.",
      "An exhibition photograph offers two pictures at once. There is the work on the wall, and there is the space around it. Neither replaces the other. The empty stretch of plaster is a measure of scale; the floor is a record of where a body might stand. Even the doorway suggests a next chapter.",
      "We can return to that interval in an ordinary room. Leave a little space around a single object. Observe how its outline changes in morning light. Let the surroundings remain visible. Looking slowly begins with recognising that the frame extends beyond the thing we came to see.",
    ],
  },
  {
    id: "colour",
    category: "Art",
    title: "A colour in motion",
    deck: "Pigment finds its own edges. A short visual study of colour before it settles.",
    file: "fluid-v2.jpg",
    alt: "Ochre and plum pigment flowing in translucent clouds",
    credit: "engin akyurt / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/yellow-and-purple-abstract-painting-8__60enqNCY",
    caption: "Acrylic colours and ink in water, photographed by engin akyurt.",
    paragraphs: [
      "A pigment cloud has no permanent outline. The ochre plume in this photograph opens like a curtain, while violet threads travel through the lighter water above. Some areas are dense enough to feel solid. Others nearly disappear.",
      "The camera pauses a process that keeps moving. We see a moment, rather than a finished painting: colour spreading, neighbouring colour entering, an edge loosening. The distinction between figure and background lasts only as long as we choose to hold it.",
      "This is a useful way to look at any painted surface. Begin with a boundary. Follow it until it dissolves or meets another mark. Instead of asking what the image resembles, observe the pressure, transparency and direction of the colour itself.",
    ],
  },
  {
    id: "stone",
    category: "Art",
    title: "What stone remembers",
    deck: "A shoulder, a gesture, a trace of light. Reading a sculpture without rushing to its label.",
    file: "sculpture-v2.jpg",
    alt: "Close view of a pale stone figure with a raised arm inside the Metropolitan Museum of Art",
    credit: "Hester Qiang / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/white-concrete-statue-during-daytime-UuWz7Xynby4",
    caption:
      "Sculpture at the Metropolitan Museum of Art, photographed by Hester Qiang.",
    paragraphs: [
      "The arm carries the eye across the surface. Light collects on the shoulder and thins into shadow at the elbow. From this angle, the figure is less a single silhouette than a sequence of curved planes.",
      "Stone invites an unusually slow reading. A small change in position alters the relation between foreground and background. The museum columns in this photograph become a second set of verticals, placing the body inside an architectural rhythm.",
      "Before naming the gesture, we can notice its construction. Where is the weight? Which edge is crisp, and which is worn? What does the light reveal that a frontal view would hide? These questions do not replace a work’s history. They prepare us to meet it with more attention.",
    ],
  },
  {
    id: "tools",
    category: "Studio",
    title: "At the edge of a canvas",
    deck: "A brush is a small archive: pigment in the ferrule, worn bristles, the residue of work.",
    file: "brushes-v2.jpg",
    alt: "Close view of used painting brushes with colourful paint on their handles",
    credit: "Rajesh Kavasseri / Unsplash",
    creditUrl: "https://unsplash.com/photos/photo-of-paint-brushes-4yLQ5daPzuk",
    caption: "Paint brushes photographed by Rajesh Kavasseri.",
    paragraphs: [
      "A finished picture conceals many of its tools. Here, those tools become the subject. A wide brush leans against narrower ones, and yesterday’s colours remain on their handles. The group feels both practical and accidental.",
      "A studio object records use differently from an exhibition object. It is held, cleaned, set down and picked up again. Its surface changes through repetition. Paint accumulates where a hand does not quite reach; bristles gradually acquire a preferred direction.",
      "Looking at these traces is a way to see time inside a material. A brush does not describe the whole painting it helped make. It offers a smaller story: contact, pressure, adjustment, return.",
    ],
  },
];
export const issues = [
  {
    name: "Issue 04",
    theme: "Ways of looking",
    order: ["room", "colour", "stone", "tools"],
  },
  {
    name: "Issue 03",
    theme: "Material matters",
    order: ["stone", "tools", "colour", "room"],
  },
  {
    name: "Issue 02",
    theme: "Inside the studio",
    order: ["tools", "colour", "room", "stone"],
  },
];
export const exhibitions = [
  {
    dates: "11.08.2018 — 10.02.2019",
    title: "Rauschenberg: In and About L.A.",
    venue: "LACMA · Los Angeles",
    url: "https://www.lacma.org/art/exhibition/rauschenberg-and-about-la",
  },
  {
    dates: "09.04.2023 — 12.08.2023",
    title: "Georgia O’Keeffe: To See Takes Time",
    venue: "MoMA · New York",
    url: "https://www.moma.org/calendar/exhibitions/5493",
  },
  {
    dates: "03.02.2023 — 07.05.2023",
    title: "Georgia O’Keeffe, Photographer",
    venue: "Cincinnati Art Museum",
    url: "https://www.cincinnatiartmuseum.org/art/exhibitions/exhibition-archive/2023/georgia-o-keeffe-photographer/",
  },
];
