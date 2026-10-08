export const image = (file: string) =>
  import.meta.env.BASE_URL + "images/monograph-original/" + file + ".jpg";

export const stories = [
  {
    title: "The quiet life of a painting",
    subject: "Art",
    image: "painting",
    by: "A conversation with the canvas",
    time: "8 min read",
  },
  {
    title: "A room of one’s own",
    subject: "Spaces",
    image: "exhibition",
    by: "Inside the contemporary gallery",
    time: "6 min read",
  },
  {
    title: "Colour, without restraint",
    subject: "Art",
    image: "abstract",
    by: "Notes on gesture and feeling",
    time: "5 min read",
  },
];
