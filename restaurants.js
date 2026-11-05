/*
 * GoodFood — the list. This is the only file you edit to change what's on the site.
 *
 * Four lists: "restaurants", "street", "bars", "sweets".
 * Each place:
 *   name       English name (required)
 *   hebrew     Hebrew name — shown so guests can show it to a taxi driver
 *   kind       Short cuisine / type label ("Seafood", "Cocktail bar")
 *   area       Neighborhood
 *   price      1-4
 *   why        2-3 sentences: why it's on the list
 *   order      What to order
 *   address    Street address (used for directions)
 *   instagram  Handle without @
 *   reserve    Full booking URL (Ontopo / Tabit / own site). Leave "" if walk-in.
 *   walkIn     true if they don't take bookings
 *   logo       Path to logo image, e.g. "images/port-said/logo.png"
 *   dish       Path to a food photo, e.g. "images/port-said/dish.jpg"
 *   vibe       Path to an atmosphere photo, e.g. "images/port-said/vibe.jpg"
 *
 * Missing photos/logo show a placeholder. Missing instagram/reserve fall back to a search.
 */
window.GOODFOOD = {
  restaurants: [
    {
      name: "Port Said",
      hebrew: "פורט סעיד",
      kind: "Israeli · Bar food",
      area: "Center",
      price: 2,
      why: "Eyal Shani's loud, joyful bar-restaurant next to the Great Synagogue. Vinyl on the speakers, a crowd spilling onto the street, sharing plates that change daily. If you only have one night, this is the one.",
      order: "Roasted cauliflower, beef sinia, whatever's on the board",
      address: "Har Sinai St 5, Tel Aviv",
      instagram: "",
      reserve: "",
      walkIn: true,
    },
    {
      name: "Taizu",
      hebrew: "טאיזו",
      kind: "Pan-Asian",
      area: "Menachem Begin",
      price: 4,
      why: "A dramatic, temple-like room serving Southeast Asian street food, refined. Our go-to for a big night out with the team. Book two to three weeks ahead.",
      order: "The tasting menu, and cocktails at the bar first",
      address: "Menachem Begin Rd 23, Tel Aviv",
      instagram: "",
      reserve: "",
    },
    {
      name: "Shila",
      hebrew: "שילה",
      kind: "Seafood",
      area: "North",
      price: 3,
      why: "Sharon Cohen's seafood bar on Ben Yehuda has been packed for years for a reason. Excellent raw bar, buzzing room, great for groups of four to six.",
      order: "Crudo, the shrimp, fish of the day",
      address: "Ben Yehuda St 182, Tel Aviv",
      instagram: "",
      reserve: "",
    },
    {
      name: "Claro",
      hebrew: "קלארו",
      kind: "Mediterranean",
      area: "Sarona",
      price: 3,
      why: "Market-driven cooking in a restored 19th-century stone building in Sarona. A short walk from the Tel Aviv office, which makes it the easy answer for a team dinner.",
      order: "Anything from the taboon oven",
      address: "HaArba'a St 23, Tel Aviv",
      instagram: "",
      reserve: "",
    },
  ],
  street: [
    {
      name: "Miznon",
      hebrew: "מזנון",
      kind: "Pita",
      area: "Center",
      price: 1,
      why: "The original branch of the pita bar now in New York and Paris. Order at the counter, find a stool, eat with your hands.",
      order: "Whole cauliflower, minute-steak pita",
      address: "Ibn Gabirol St 23, Tel Aviv",
      instagram: "",
      walkIn: true,
    },
    {
      name: "HaKosem",
      hebrew: "הקוסם",
      kind: "Falafel",
      area: "Center",
      price: 1,
      why: "Some of the best falafel in the city. There's a line at lunch, and they hand you a hot falafel ball while you wait.",
      order: "Falafel in pita, or the sabich",
      address: "Shlomo HaMelech St 1, Tel Aviv",
      instagram: "",
      walkIn: true,
    },
    {
      name: "Abu Hassan",
      hebrew: "אבו חסן",
      kind: "Hummus",
      area: "Jaffa",
      price: 1,
      why: "The legendary Jaffa hummus joint. No menu, shared tables, ten minutes start to finish. Go before 1pm; it closes when the hummus runs out.",
      order: "Msabaha",
      address: "HaDolfin St 1, Jaffa",
      instagram: "",
      walkIn: true,
    },
  ],
  bars: [
    {
      name: "Imperial",
      hebrew: "אימפריאל",
      kind: "Cocktail bar",
      area: "Beachfront",
      price: 3,
      why: "A small colonial-style cocktail bar in an old hotel by the beach, regularly on the world's best-bars lists. Seats fill fast after 9pm.",
      order: "Ask the bartender for something with arak",
      address: "HaYarkon St 66, Tel Aviv",
      instagram: "",
      reserve: "",
    },
    {
      name: "Bellboy",
      hebrew: "בלבוי",
      kind: "Cocktail bar",
      area: "Center",
      price: 3,
      why: "Over-the-top theatrical cocktails in a dark velvet room. Fun to bring visitors who think they've seen every cocktail.",
      order: "Whatever arrives with smoke",
      address: "Berdichevsky St 14, Tel Aviv",
      instagram: "",
      reserve: "",
    },
  ],
  sweets: [
    {
      name: "Anita",
      hebrew: "אניטה",
      kind: "Gelato",
      area: "Neve Tzedek",
      price: 1,
      why: "The city's favorite gelato, with a dozen-long line on summer nights. Combine it with a walk through Neve Tzedek's little streets.",
      order: "Pistachio, and one wild seasonal flavor",
      address: "Shabazi St 42, Tel Aviv",
      instagram: "",
      walkIn: true,
    },
    {
      name: "Abulafia",
      hebrew: "אבולעפיה",
      kind: "Bakery",
      area: "Jaffa",
      price: 1,
      why: "A Jaffa institution baking around the clock since 1879. Grab something warm on your way to the port.",
      order: "Sesame ka'ak and a sweet pastry",
      address: "Yefet St 7, Jaffa",
      instagram: "",
      walkIn: true,
    },
  ],
};
