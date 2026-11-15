# Studii de caz / Case studies

The "Studii de caz & demo-uri" section appears on a page as soon as there is at least one case in that language.

1. Put the cover photo next to the file, e.g. `pick-to-light.jpg`.
2. Create `pick-to-light.ro.md` (and `pick-to-light.en.md` for the English page):

```md
---
lang: ro
title: Pick-to-Light într-un depozit de piese auto
summary: 120 de locații de raft cu lumini care arată operatorului de unde ia piesa.
vertical: automation        # iot | vision | rnd | automation
cover: ./pick-to-light.jpg
coverAlt: Raft de depozit cu lumini portocalii pe fiecare locație
video: https://www.youtube.com/watch?v=XXXXXXXXXXX   # optional; YouTube or .mp4
results:
  - Erori de picking -80%
  - Instalat în 3 săptămâni
order: 1                    # the lowest number is the big featured case
---
```

The body of the file is not shown yet (reserved for a future case page).
