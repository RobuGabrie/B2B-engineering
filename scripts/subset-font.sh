#!/bin/sh
# Cuts a variable font down to the characters this site uses (Latin, Latin-1, Romanian diacritics,
# typographic punctuation, arrows) and the weight range it uses, as one woff2 in src/assets/fonts/.
# One small file per family instead of Fontsource's latin + latin-ext pair (Romanian needs both).
# Sources (OFL, licenses next to the fonts): github.com/google/fonts/tree/main/ofl/{unbounded,manrope,ibmplexmono}
# Needs: pip install fonttools brotli.
# Usage: sh scripts/subset-font.sh <Font.ttf> <output-name> <min:max weight, or - for a static font>
#   sh scripts/subset-font.sh Unbounded[wght].ttf unbounded-ro-wght 400:800
#   sh scripts/subset-font.sh Manrope[wght].ttf manrope-ro-wght 400:700
#   sh scripts/subset-font.sh IBMPlexMono-Regular.ttf plex-mono-ro-400 -
set -e
tmp="$1"
if [ "$3" != "-" ]; then
  tmp="$(mktemp -d)/font.ttf"
  python3 -m fontTools.varLib.instancer "$1" "wght=$3" -o "$tmp" -q
fi
python3 -m fontTools.subset "$tmp" \
  --unicodes="U+0020-007E,U+00A0-00FF,U+0102-0103,U+015E-015F,U+0162-0163,U+0218-021B,U+2013-2014,U+2018-201E,U+2022,U+2026,U+20AC,U+2190-2193,U+2304,U+2715" \
  --layout-features='*' --flavor=woff2 \
  --output-file="$(dirname "$0")/../src/assets/fonts/$2.woff2"
