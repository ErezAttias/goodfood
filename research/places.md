# Research notes: places on the list

Researched November 2026 from search-result summaries. Several hosts (timeout.co.il,
ontopo.com) could not be opened directly from the cloud session, so items marked
**unsure** or **unverified** still need a check.

## Next step: photos and logos
Plan: Google Places API (New) for a food photo and an atmosphere photo per place
(show the photographer credit Google requires), and the official website for logos.
Needs `GOOGLE_MAPS_API_KEY` in the environment and wider network access
(at least places.googleapis.com and lh3.googleusercontent.com, Full for logos).
Save to `images/<slug>/{logo,dish,vibe}.jpg` and reference them in `restaurants.js`.

## Status and open questions
| Place | Status | Notes |
|---|---|---|
| Shila | open | Moved in 2025 from Ben Yehuda 182 to Gymnasia Isrotel, Montefiore 9. Site: shila-rest.co.il |
| HaBasta | open | MENA 50 Best (#14 2022, #48 2023). Possible IG @basta_tlv (unverified) |
| Bar 51 | unsure | HaYarkon 59, under Renoma Hotel. Site: bar51tlv.com |
| Sun Young | unsure | INK Hotel, Brenner 14. Coverage mostly ~2021, check it's still open |
| Café Popular (downstairs bar) | unsure | Dizengoff 197, Jacob Samuel Hotel. Ontopo: ontopo.com/en/il/page/79798974 |
| Thai House | open | Bograshov 8. Site: thai-house.co.il |
| Jasmino | unsure | Allenby 99. Time Out reported a fire; confirm it reopened |
| Abu Hassan | open | HaDolfin 1 (original); closed Saturdays |
| HaKosem | open | Shlomo HaMelech 1; kosher; short Fridays |
| Pizza Har Sinai | open | Nahalat Binyamin 55 |
| Brooklyn Pizza | open | Dizengoff 276 (also King George 88, Yehuda HaLevi) |
| Pizza Lila | unsure | Building collapsed; temporary move to Shenkin (address unknown). Possible IG @pizza_lila (unverified) |
| GDB | open | Ibn Gabirol 22 (also Bnei Efraim 209); not kosher |
| Prozdor | open | Mendele Mokher Sfarim 6 |
| Jango | unsure | Hillel HaZaken 12 per Time Out list; sources 2023 or older |
| Cassata | unsure | Yehuda HaLevi 12, Park HaMesila. IG cassata.telaviv (from a listing) |
| Otello | open | Dizengoff 165 + branches |

## Sources
- Shila: https://www.jpost.com/consumerism/article-844028 , https://www.isrotel.com/isrotel-hotels/tel-aviv/gymnasia/
- HaBasta: https://theworlds50best.com/mena/en/the-list/11-20/habasta.html
- Bar 51: https://www.timeout.com/israel/bars/bar-51
- Sun Young: https://timeout.co.il/סאן-יאנג/
- Café Popular: https://www.jacobsamuelhotel.com/cafe-popular , https://ontopo.com/en/il/page/79798974
- Thai House: https://www.timeout.com/israel/restaurants/thai-house
- Jasmino: https://www.timeout.com/israel/restaurants/jasmino
- Abu Hassan: https://en.wikipedia.org/wiki/Abu_Hassan_(restaurant)
- HaKosem: https://www.timeout.com/israel/restaurants/hakosem
- Pizza Har Sinai: https://www.israelhayom.co.il/food/food-news/article/20915466
- Brooklyn Pizza: https://www.timeout.com/israel/restaurants/brooklyn-pizza
- Pizza Lila: https://www.ice.co.il/food/news/article/1108502
- GDB: https://www.jpost.com/consumerism/article-897845
- Prozdor: https://www.timeout.com/israel/restaurants/prozdor
- Jango: https://timeout.co.il/גאנגו-ביקורת/
- Cassata: https://www.ynetnews.com/culture/article/rjjhok00zxx
- Otello: https://www.timeout.com/israel/restaurants/otello-gelato
