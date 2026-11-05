# GoodFood — Where to eat in Tel Aviv

A simple, mobile-friendly English website with restaurant recommendations for
colleagues visiting the JFrog offices in Israel. Each place shows its cuisine,
price level, neighborhood, a short description, what to order, and buttons for
**Reserve**, **Instagram** and **Map**. Visitors can search and filter by cuisine,
area, budget and occasion (near the office, team dinner, quick lunch, …).

There's no build step and no server: it's just `index.html` + `restaurants.js`.

## Editing the list

All content lives in [`restaurants.js`](restaurants.js). Add an object to the
array, commit, and the site updates. The field list is documented at the top of
the file.

For `instagram`, put the handle without `@`. For `reservation`, paste the
full booking link (Ontopo, Tabit, or the restaurant's own site). If either is
left empty, the button falls back to a Google search for that restaurant, so it
still works — but real links are better.

> The seed list is a starting point. Before sending the site out, check each
> place is still open and fill in the real Instagram and booking links.

## Publishing (GitHub Pages)

1. Merge to the default branch (`main`).
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` / `(root)`.
3. The site goes live at `https://<owner>.github.io/goodfood/` — send that link to every visitor.

To preview locally, just open `index.html` in a browser.
