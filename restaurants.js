/*
 * GoodFood — restaurant list.
 *
 * This is the ONLY file you need to edit to add, remove or update places.
 *
 * Fields:
 *   name         (required) Restaurant name in English
 *   cuisine      (required) Short cuisine label, used for the cuisine filter
 *   area         (required) Neighborhood, used for the area filter
 *   city         (required) "Tel Aviv", "Jaffa", "Netanya", ...
 *   price        1-4  ($ = cheap street food, $$$$ = special occasion)
 *   description  1-3 sentences in plain English for a first-time visitor
 *   mustTry      Optional: dish(es) to order
 *   address      Optional: street address (used for the Maps link)
 *   instagram    Optional: Instagram handle WITHOUT the @ (e.g. "portsaid_tlv")
 *   reservation  Optional: full booking URL (Ontopo / Tabit / restaurant site)
 *   walkIn       Optional: true if the place doesn't take bookings
 *   tags         Optional: any of "near-office", "team-dinner", "vegetarian-friendly",
 *                "kosher", "open-shabbat", "late-night", "breakfast", "quick-lunch",
 *                "special-occasion", "view"
 *   addedBy      Optional: who recommends it
 *
 * If `instagram` or `reservation` is empty the site falls back to a search link,
 * so the buttons always work — but filling in the real links is better.
 */
window.RESTAURANTS = [
  {
    name: "Port Said",
    cuisine: "Israeli / Mediterranean",
    area: "City Center",
    city: "Tel Aviv",
    price: 2,
    description:
      "Chef Eyal Shani's loud, fun bar-restaurant next to the Great Synagogue. Sharing plates, vinyl records and a young crowd spilling onto the street. The quintessential Tel Aviv night out.",
    mustTry: "Roasted cauliflower, beef sinia, anything off the daily specials board",
    address: "Har Sinai St 5, Tel Aviv",
    instagram: "",
    reservation: "",
    walkIn: true,
    tags: ["late-night", "vegetarian-friendly"],
  },
  {
    name: "Miznon",
    cuisine: "Israeli Street Food",
    area: "City Center",
    city: "Tel Aviv",
    price: 1,
    description:
      "The original location of Eyal Shani's pita empire (now also in NYC, Paris and Vienna). Order at the counter, grab a seat if you can, eat with your hands.",
    mustTry: "Whole roasted cauliflower, minute steak pita, ratatouille pita",
    address: "Ibn Gabirol St 23, Tel Aviv",
    instagram: "",
    reservation: "",
    walkIn: true,
    tags: ["quick-lunch", "vegetarian-friendly"],
  },
  {
    name: "Claro",
    cuisine: "Mediterranean Bistro",
    area: "Sarona",
    city: "Tel Aviv",
    price: 3,
    description:
      "Chef Ran Shmueli's market-driven restaurant in a restored Templer building in Sarona. Big, warm space that works great for a team dinner, close to the Tel Aviv office.",
    mustTry: "Taboon-baked dishes, seasonal vegetables, fish of the day",
    address: "HaArba'a St 23, Sarona, Tel Aviv",
    instagram: "",
    reservation: "",
    tags: ["near-office", "team-dinner", "vegetarian-friendly"],
  },
  {
    name: "Sarona Market",
    cuisine: "Food Hall",
    area: "Sarona",
    city: "Tel Aviv",
    price: 2,
    description:
      "Indoor gourmet food hall with dozens of stalls — something for everyone. Easiest option for a quick lunch near the Tel Aviv office, and great for picking up local treats to take home.",
    mustTry: "Walk around and graze",
    address: "Kalman Magen St 3, Tel Aviv",
    instagram: "",
    reservation: "",
    walkIn: true,
    tags: ["near-office", "quick-lunch", "vegetarian-friendly"],
  },
  {
    name: "Taizu",
    cuisine: "Pan-Asian",
    area: "Menachem Begin",
    city: "Tel Aviv",
    price: 4,
    description:
      "Chef Yuval Ben Neriah's dramatic, temple-like dining room serving Southeast Asian and Indian-inspired street food, refined. Book well in advance.",
    mustTry: "Tasting menu, dim sum, cocktails at the bar",
    address: "Menachem Begin Rd 23, Tel Aviv",
    instagram: "",
    reservation: "",
    tags: ["special-occasion", "team-dinner"],
  },
  {
    name: "Shila",
    cuisine: "Seafood",
    area: "North Tel Aviv",
    city: "Tel Aviv",
    price: 3,
    description:
      "Chef Sharon Cohen's long-running seafood and bar spot on Ben Yehuda. Buzzing atmosphere, excellent raw bar, a local favorite for years.",
    mustTry: "Sashimi and crudo, grilled fish, the 'Shila' prawns",
    address: "Ben Yehuda St 182, Tel Aviv",
    instagram: "",
    reservation: "",
    tags: ["team-dinner", "late-night"],
  },
  {
    name: "OCD",
    cuisine: "Tasting Menu",
    area: "South Tel Aviv",
    city: "Tel Aviv",
    price: 4,
    description:
      "An intimate counter-seating chef's table with a single multi-course menu. For a once-in-a-trip experience — seats are very limited and usually book out weeks ahead.",
    mustTry: "There's only one menu — just go",
    address: "",
    instagram: "",
    reservation: "https://www.ocdtlv.com/ocd-en",
    tags: ["special-occasion"],
  },
  {
    name: "HaBasta",
    cuisine: "Market Bistro",
    area: "Carmel Market",
    city: "Tel Aviv",
    price: 3,
    description:
      "Tiny wine bar and kitchen on the edge of the Carmel Market. Menu changes daily based on what the market has, with a serious natural-wine list.",
    mustTry: "Whatever is on today's board, plus a glass of wine",
    address: "HaShomer St 4, Tel Aviv",
    instagram: "",
    reservation: "",
    tags: ["vegetarian-friendly"],
  },
  {
    name: "Mashya",
    cuisine: "Modern Moroccan / Israeli",
    area: "Beach / Mendeli",
    city: "Tel Aviv",
    price: 3,
    description:
      "Chef Yossi Shitrit's modern take on Moroccan-Jewish cooking, a block from the beach. Great for a relaxed but impressive dinner.",
    mustTry: "Freekeh, lamb dishes, the bread",
    address: "Mendeli St 5, Tel Aviv",
    instagram: "",
    reservation: "",
    tags: ["team-dinner"],
  },
  {
    name: "Tzfon Abraxas",
    cuisine: "Israeli / Mediterranean",
    area: "Lilienblum",
    city: "Tel Aviv",
    price: 2,
    description:
      "Another Eyal Shani classic — bar seating facing the open kitchen, very loud music, very good food. Fun for small groups.",
    mustTry: "Whole roasted cauliflower, tomato salad, 'Mama's' focaccia",
    address: "Lilienblum St 40, Tel Aviv",
    instagram: "",
    reservation: "",
    tags: ["late-night", "vegetarian-friendly"],
  },
  {
    name: "HaKosem",
    cuisine: "Falafel & Shawarma",
    area: "City Center",
    city: "Tel Aviv",
    price: 1,
    description:
      "One of the city's most loved falafel stands. Expect a line at lunch and a free falafel ball handed to you while you wait.",
    mustTry: "Falafel in pita, sabich, shawarma",
    address: "Shlomo HaMelech St 1, Tel Aviv",
    instagram: "",
    reservation: "",
    walkIn: true,
    tags: ["quick-lunch", "vegetarian-friendly"],
  },
  {
    name: "Benedict",
    cuisine: "Breakfast",
    area: "Rothschild",
    city: "Tel Aviv",
    price: 2,
    description:
      "All-day breakfast spot — eggs every way imaginable. A good introduction to the huge Israeli breakfast.",
    mustTry: "Israeli breakfast, shakshuka, eggs Benedict",
    address: "Rothschild Blvd 29, Tel Aviv",
    instagram: "",
    reservation: "",
    tags: ["breakfast", "vegetarian-friendly"],
  },
  {
    name: "Abu Hassan",
    cuisine: "Hummus",
    area: "Jaffa",
    city: "Jaffa",
    price: 1,
    description:
      "A legendary Jaffa hummus joint. No menu, shared tables, fast service. Go before lunch — it closes when the hummus runs out.",
    mustTry: "Msabaha, hummus with ful",
    address: "HaDolfin St 1, Jaffa",
    instagram: "",
    reservation: "",
    walkIn: true,
    tags: ["quick-lunch", "vegetarian-friendly"],
  },
  {
    name: "Dr. Shakshuka",
    cuisine: "North African",
    area: "Jaffa",
    city: "Jaffa",
    price: 1,
    description:
      "Casual Libyan-Jewish spot in old Jaffa, famous for shakshuka served bubbling in the pan. Combine with a walk through the Jaffa flea market.",
    mustTry: "Shakshuka, couscous",
    address: "Beit Eshel St 3, Jaffa",
    instagram: "",
    reservation: "",
    walkIn: true,
    tags: ["vegetarian-friendly"],
  },
  {
    name: "Manta Ray",
    cuisine: "Seafood",
    area: "Alma Beach",
    city: "Tel Aviv",
    price: 3,
    description:
      "Right on the sand between Tel Aviv and Jaffa with a view of the sea. Ideal for a sunset dinner or a long weekend brunch.",
    mustTry: "Mezze selection, grilled fish",
    address: "Alma Beach, Tel Aviv",
    instagram: "",
    reservation: "",
    tags: ["view", "team-dinner", "breakfast"],
  },
];
