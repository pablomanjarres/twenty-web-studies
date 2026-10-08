export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/soundroom/${name}.jpg`;

export const releases = [
  {
    title: "Between lines",
    artist: "Mila Sol",
    genre: "Leftfield electronic",
    image: "frequency",
    className: "sr-lines",
    duration: "4:32",
  },
  {
    title: "Slow bloom",
    artist: "The Sunday People",
    genre: "Alternative soul",
    image: "artist",
    className: "sr-bloom",
    duration: "3:48",
  },
  {
    title: "Night drive",
    artist: "Coda Club",
    genre: "After-hours house",
    image: "chrome",
    className: "sr-drive",
    duration: "5:16",
  },
  {
    title: "Open skies",
    artist: "Eli Wave",
    genre: "Live sessions",
    image: "concert",
    className: "sr-skies",
    duration: "4:07",
  },
];
