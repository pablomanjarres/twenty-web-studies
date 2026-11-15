export const image = (file: string) =>
  import.meta.env.BASE_URL + "images/monograph-original/" + file + ".jpg";

export const stories = [
  {
    title: "The quiet life of a painting",
    subject: "Art",
    image: "painting",
    alt: "Figures in robes gathered around a mother and child in a richly coloured classical painting",
    by: "A conversation with the canvas",
    time: "8 min read",
    excerpt:
      "Hung in a side room for a century, a crowded nativity rewards the visitor who stays long enough for its quieter figures to come forward.",
  },
  {
    title: "A room of one’s own",
    subject: "Spaces",
    image: "exhibition",
    detail: true,
    alt: "Mixed-media figures on an orange field in a white gallery",
    by: "Inside the contemporary gallery",
    time: "6 min read",
    excerpt:
      "The new contemporary wing trades wall labels for long sightlines, and asks what a gallery owes the work it holds.",
  },
  {
    title: "Colour, without restraint",
    subject: "Art",
    image: "abstract",
    alt: "Yellow, black and white paint pooling in a fluid abstract pour",
    by: "Notes on gesture and feeling",
    time: "5 min read",
    excerpt:
      "Paint left to find its own level: a studio note on pours, accidents and the discipline of letting go.",
  },
];

export const filters = ["All stories", "Art", "Spaces"];
