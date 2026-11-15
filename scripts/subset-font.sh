#!/bin/sh
# Builds src/assets/fonts/unbounded-ro-wght.woff2: Unbounded (variable weight) cut down to the characters
# this site uses (Latin, Latin-1, Romanian diacritics, typographic punctuation, arrows) and weights 400–800. One ~44 KB file
# instead of Fontsource's latin + latin-ext (~170 KB), which kept the hero headline from painting on phones.
# Source: https://github.com/google/fonts/tree/main/ofl/unbounded (OFL, see src/assets/fonts/OFL-Unbounded.txt)
# Needs: pip install fonttools brotli.   Usage: sh scripts/subset-font.sh path/to/Unbounded[wght].ttf
set -e
tmp="$(mktemp -d)/unbounded.ttf"
python3 -m fontTools.varLib.instancer "$1" wght=400:800 -o "$tmp" -q
python3 -m fontTools.subset "$tmp" \
  --unicodes="U+0020-007E,U+00A0-00FF,U+0102-0103,U+015E-015F,U+0162-0163,U+0218-021B,U+2013-2014,U+2018-201E,U+2022,U+2026,U+20AC,U+2190-2193" \
  --layout-features='*' --flavor=woff2 \
  --output-file="$(dirname "$0")/../src/assets/fonts/unbounded-ro-wght.woff2"
