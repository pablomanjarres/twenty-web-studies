export const image = (file: string) =>
  import.meta.env.BASE_URL + "images/salt/" + file + ".jpg";

export const menu: {
  [key: string]: { name: string; description: string; price: string }[];
} = {
  "From the sea": [
    {
      name: "Oysters on ice",
      description: "Six rock oysters, shallot vinegar, lemon",
      price: "18",
    },
    {
      name: "Wild garlic prawns",
      description: "Atlantic prawns, warm garlic butter, sourdough",
      price: "16",
    },
    {
      name: "The catch of the day",
      description: "Market fish, lemon, herbs, a little sea salt",
      price: "24",
    },
    {
      name: "Crab on toast",
      description: "White crab, brown butter, pickled fennel",
      price: "17",
    },
    {
      name: "Salt fish & chips",
      description: "Day-boat haddock, crisp potatoes, tartare",
      price: "21",
    },
  ],
  "From the garden": [
    {
      name: "Burrata & late tomatoes",
      description: "Creamy burrata, basil, olive oil, grilled bread",
      price: "14",
    },
    {
      name: "Charred summer greens",
      description: "Tender greens, toasted almonds, lemon dressing",
      price: "12",
    },
    {
      name: "Roasted cauliflower",
      description: "Tahini, golden raisins, green herbs",
      price: "16",
    },
    {
      name: "Heirloom beetroot",
      description: "Whipped goat cheese, walnuts, dill",
      price: "13",
    },
  ],
  "Something sweet": [
    {
      name: "Lemon posset",
      description: "Shortbread, lemon zest, a spoonful of sunshine",
      price: "8",
    },
    {
      name: "Warm chocolate tart",
      description: "Dark chocolate, flaky sea salt, vanilla cream",
      price: "9",
    },
    {
      name: "Strawberries & cream",
      description: "Local berries, whipped cream, fresh mint",
      price: "8",
    },
  ],
};
