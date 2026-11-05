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

# Suggestions not yet picked (November 2026)
From search-result snippets only; confirm each is open before adding.

**Restaurants:** OCD (La Liste 2026), Taizu (Ontopo top 5, Mako 2025), Mashya (La Liste 2026),
Café Europa (Ontopo top 5), Chacoli (Ontopo top 5; weakest evidence). Alternates: Pastel, Alena at The Norman.
**Street food:** Sabich Frishman (Frishman 42), Sabich Tchernichovsky (Allenby 45),
Shlomo & Doron hummus (Yishkon 29; possible move to Malan 16), Miznon (Ibn Gabirol 23).
**Dessert:** Anita (Shabazi), Gelalucci (Kikar Masaryk), Padre (Dizengoff Square), Mystic (lowest confidence).
Alternates: Arte (Nahalat Binyamin 11), Bouza.
**Pizza:** La Tigre (Florentin + Basel; Mako readers' best pizza 2025), HaPizza (Bograshov 51), Pizza Eliezer (Ben Yehuda 126).
**Burgers:** M25 (Carmel Market; #2 Time Out 2026), Vitrina (Ibn Gabirol 36), America Burgers (no 2026 confirmation).
Alternates: Stephanie Smash Burger, Wolfnights.

Sources: https://www.ynetnews.com/food/article/bk0kswez11x , https://www.mako.co.il/news-money/consumer/Article-b35412aa74ffa91027.htm ,
https://timeout.co.il/הגלידריות-הכי-טובות/ , https://www.mako.co.il/news-money/consumer/Article-61455d1b0c10a91027.htm ,
https://timeout.co.il/ampm-m25/ , https://www.timeout.com/israel/restaurants/vitrina-ibn-gvirol

# Image sources
Photos are from the places' own sites, Wolt, Time Out, and Google Maps visitor photos
(via atly.com / mapstr.com). Google Maps visitor photos belong to the people who took them;
replace them with official photos before sharing the guide widely.

| Place | File | Source page |
|---|---|---|
| abu-hassan | dish | https://mapstr.com/place/uVayeCRWevg |
| abu-hassan | vibe | https://mapstr.com/place/uVayeCRWevg |
| abu-hassan | logo | https://wolt.com/en/isr/tel-aviv/restaurant/abu-hassan |
| bar51 | dish | https://www.atly.com/location/Bar51 |
| bar51 | vibe | https://www.bar51tlv.com/ |
| bar51 | logo | https://www.bar51tlv.com/ |
| brooklyn | dish | https://www.timeout.com/israel/restaurants/brooklyn-pizza |
| brooklyn | vibe | https://brooklynpizza.co.il/ |
| brooklyn | logo | https://brooklynpizza.co.il/ |
| cafe-popular | dish | https://www.atly.com/location/CafePopular |
| cafe-popular | vibe | https://jacobsamuelhotel.com/cafe-popular |
| cafe-popular | logo | https://ontopo.com/en/il/page/79798974 |
| cassata | dish | https://wolt.com/en/isr/tel-aviv/restaurant/cassata |
| cassata | vibe | https://www.atly.com/location/Cassata |
| cassata | logo | https://wolt.com/en/isr/tel-aviv/restaurant/cassata |
| gdb | dish | https://www.atly.com/location/GDB |
| gdb | vibe | https://www.atly.com/location/GDB |
| habasta | dish | https://www.atly.com/location/HaBasta |
| habasta | vibe | https://www.atly.com/location/HaBasta |
| hakosem | dish | https://www.timeout.com/israel/restaurants/hakosem |
| hakosem | vibe | https://www.atly.com/location/HaKosem2 |
| har-sinai | dish | https://wolt.com/en/isr/tel-aviv/restaurant/pizza-har-sinai |
| har-sinai | vibe | https://www.atly.com/location/PizzaMountSinai |
| har-sinai | logo | https://pizzaharsinai.co.il/ |
| jango | dish | https://wolt.com/en/isr/tel-aviv/restaurant/jango-tel-aviv |
| jango | vibe | https://www.atly.com/location/JangoBurger |
| jango | logo | https://wolt.com/en/isr/tel-aviv/restaurant/jango-tel-aviv |
| jasmino | dish | https://www.atly.com/location/Jasmino |
| jasmino | vibe | https://www.atly.com/location/Jasmino |
| lila | dish | https://wolt.com/en/isr/tel-aviv/restaurant/lila-pizza |
| lila | vibe | https://www.atly.com/location/PizzaLila |
| otello | dish | https://www.atly.com/location/Otello |
| otello | vibe | https://www.atly.com/location/Otello |
| otello | logo | https://wolt.com/en/isr/tel-aviv/restaurant/otellogelato |
| prozdor | dish | https://www.atly.com/location/Prozdor |
| prozdor | vibe | https://www.prozdor.co.il/ |
| prozdor | logo | https://www.prozdor.co.il/ |
| shila | dish | https://www.timeout.com/israel/restaurants/shila |
| shila | vibe | https://www.shila-rest.co.il/ |
| shila | logo | https://www.shila-rest.co.il/ |
| sun-young | dish | https://sunyoung.co.il/ |
| sun-young | vibe | https://www.atly.com/location/SunYoung |
| sun-young | logo | https://sunyoung.co.il/ |
| thai-house | dish | https://www.thai-house.co.il/ |
| thai-house | vibe | https://www.thai-house.co.il/ |
| thai-house | logo | https://www.thai-house.co.il/ |

No logo found for: GDB, HaBasta, HaKosem, Jasmino, Pizza Lila (the site shows initials).
