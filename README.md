# GoodFood — Eat Tel Aviv

A short, mobile-first English guide to the best places to eat and drink in Tel Aviv,
for colleagues visiting the JFrog offices in Israel. Four lists: **Restaurants**,
**Street food**, **Bars** and **Dessert**. Each place shows its logo, a food photo and
an atmosphere photo, its Hebrew name (to show a taxi driver), why we picked it, what
to order, and buttons for **Book a table**, **Instagram** and **Directions**.

No build step and no server: `index.html` + `restaurants.js` + `images/`.

## Editing the list

All content lives in [`restaurants.js`](restaurants.js); fields are documented at the
top of the file. Photos go in `images/<place>/` as `logo`, `dish` and `vibe` files and
are referenced from the place's entry. A place without photos shows a placeholder.

Each tab can be linked directly: `#restaurants`, `#street`, `#bars`, `#sweets`.

## Publishing (GitHub Pages)

1. Merge to the default branch (`main`).
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` / `(root)`.
3. The site goes live at `https://<owner>.github.io/goodfood/` — send that link to every visitor.

To preview locally, just open `index.html` in a browser.
