export const image = (name: string) =>
  `${import.meta.env.BASE_URL}images/salt/${name}.jpg`;
export type MenuFeature = {
  image: string;
  alt: string;
  label: string;
  title: string;
  note: string;
};
const kitchenFeature: MenuFeature = {
  image: `${import.meta.env.BASE_URL}images/salt/prawns-v2.png`,
  alt: "Grilled Atlantic prawns with wild garlic butter and charred lemon on an ivory plate",
  label: "The kitchen’s favourite",
  title: "Wild garlic prawns",
  note: "Best shared. Extra bread recommended.",
};
export const menuFeatures: Record<string, MenuFeature> = {
  Dinner: kitchenFeature,
  Lunch: kitchenFeature,
  Drinks: {
    image: `${import.meta.env.BASE_URL}images/salt/cocktails-v3.png`,
    alt: "A sea-lettuce martini and blood-orange spritz on a white ceramic tray",
    label: "From the bar",
    title: "A little coastal spirit",
    note: "Something crisp. Something bright.",
  },
};
type Dish = { name: string; note: string; price: number };
export type MenuSection = { title: string; dishes: Dish[] };
export const menus: Record<string, MenuSection[]> = {
  Dinner: [
    {
      title: "From the sea",
      dishes: [
        {
          name: "Oysters on ice",
          note: "Six rock oysters, shallot vinegar, lemon",
          price: 18,
        },
        {
          name: "Wild garlic prawns",
          note: "Atlantic prawns, garlic butter, warm sourdough",
          price: 16,
        },
        {
          name: "The day’s catch",
          note: "Day-boat fish, sea herbs, new potatoes",
          price: 26,
        },
        {
          name: "Crab on toast",
          note: "White crab, brown butter, pickled fennel",
          price: 17,
        },
      ],
    },
    {
      title: "From the garden",
      dishes: [
        {
          name: "Late tomatoes & burrata",
          note: "Basil, cold-pressed olive oil, grilled bread",
          price: 14,
        },
        {
          name: "Charred summer greens",
          note: "Toasted almonds, lemon, parsley",
          price: 12,
        },
        {
          name: "Roast cauliflower",
          note: "Tahini, golden raisins, green herbs",
          price: 16,
        },
      ],
    },
    {
      title: "A sweet finish",
      dishes: [
        { name: "Lemon posset", note: "Shortbread, lemon zest", price: 8 },
        {
          name: "Warm chocolate tart",
          note: "Flaky sea salt, vanilla cream",
          price: 9,
        },
      ],
    },
  ],
  Lunch: [
    {
      title: "Something from the sea",
      dishes: [
        {
          name: "Salt fish & chips",
          note: "Day-boat haddock, crisp potatoes, tartare",
          price: 21,
        },
        {
          name: "The crab sandwich",
          note: "White crab, lemon mayo, toasted brioche",
          price: 16,
        },
        {
          name: "Wild garlic prawns",
          note: "Garlic butter, sourdough, a wedge of lemon",
          price: 16,
        },
      ],
    },
    {
      title: "Something green",
      dishes: [
        {
          name: "Burrata & tomatoes",
          note: "Basil, olive oil, grilled bread",
          price: 14,
        },
        {
          name: "Warm lentil salad",
          note: "Roasted carrots, herbs, mustard dressing",
          price: 12,
        },
      ],
    },
    {
      title: "A little extra",
      dishes: [
        { name: "Sea salt fries", note: "Rosemary, malt vinegar", price: 5 },
        { name: "Lemon posset", note: "Shortbread, lemon zest", price: 8 },
      ],
    },
  ],
  Drinks: [
    {
      title: "At the bar",
      dishes: [
        {
          name: "Salt martini",
          note: "Gin, dry vermouth, sea lettuce",
          price: 12,
        },
        {
          name: "Coastal spritz",
          note: "Blood orange, sparkling wine, soda",
          price: 11,
        },
        {
          name: "Ginger & the sea",
          note: "Ginger beer, lime, rosemary · alcohol free",
          price: 7,
        },
        {
          name: "A cold local beer",
          note: "Crisp pale ale, brewed around the corner",
          price: 6,
        },
      ],
    },
    {
      title: "By the glass",
      dishes: [
        {
          name: "Picpoul de Pinet",
          note: "Languedoc, France · white",
          price: 8,
        },
        {
          name: "Muscadet Sèvre et Maine",
          note: "Loire, France · white",
          price: 9,
        },
        { name: "Provence rosé", note: "Provence, France · rosé", price: 9 },
      ],
    },
    {
      title: "After dinner",
      dishes: [
        { name: "Espresso", note: "A short, strong finish", price: 3 },
        { name: "Earl Grey tea", note: "Loose leaf, a pot for one", price: 4 },
      ],
    },
  ],
};
