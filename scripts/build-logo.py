"""Rebuilds src/assets/brand/logo.svg from the client's raster logo (SYNAPSE·TECH, 2048×676 JPG).
The letters are Montserrat outlines placed at the positions measured on the original; the S is a trace
(orange top, cyan below) redrawn from its measured geometry. Classes s-a / s-b (trace halves, pathLength 1) and n-a / n-b (nodes) let ui/Logo.astro draw the S on load.
Colors come from CSS:
  - letters "YNAPSE": currentColor
  - S top + top node: var(--logo-a)   (orange)
  - S bottom, dot, "TECH": var(--logo-b)  (cyan)
Needs fonttools and Montserrat[wght].ttf (github.com/google/fonts/tree/main/ofl/montserrat):
  python3 scripts/build-logo.py path/to/Montserrat[wght].ttf
"""
import sys
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

OUT = Path(__file__).resolve().parent.parent / 'src/assets/brand/logo.svg'
font = instantiateVariableFont(TTFont(sys.argv[1]), {'wght': 430})
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()

# Measured on the original (px): cap height 143, baseline y=409, left edge of each letter.
CAP, BASE = 143, 409
scale = CAP / font['OS/2'].sCapHeight
# (letter, left, right) per glyph; each glyph is stretched horizontally to the measured width.
letters = [('Y', 420, 552, 'w'), ('N', 577, 695, 'w'), ('A', 717, 864, 'w'), ('P', 887, 999, 'w'), ('S', 1022, 1131, 'w'),
           ('E', 1162, 1260, 'w'), ('T', 1343, 1457, 'b'), ('E', 1483, 1582, 'b'), ('C', 1605, 1731, 'b'), ('H', 1761, 1875, 'b')]

paths = {'w': [], 'b': []}
for ch, left, right, group in letters:
    g = glyphs[cmap[ord(ch)]]
    bp = BoundsPen(glyphs); g.draw(bp)
    x_min, _, x_max, _ = bp.bounds
    sx = (right + 1 - left) / (x_max - x_min)
    pen = SVGPathPen(glyphs, ntos=lambda v: f'{v:.1f}'.rstrip('0').rstrip('.'))
    g.draw(TransformPen(pen, (sx, 0, 0, -scale, left - x_min * sx, BASE)))
    paths[group].append(pen.getCommands())

# The S trace: stroke 14, top line y=275, middle y=337.5, bottom y=400.5; orange until the leftmost point.
stroke = 'fill="none" stroke-width="14"'
s_top = 'M373.5 275H212.3A31.25 31.25 0 0 0 181 306.3'
s_bottom = 'M181 306.3A31.25 31.25 0 0 0 212.3 337.5H354A31.5 31.5 0 0 1 354 400.5H190.5'

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="160 252 1730 172" role="img">
  <circle class="n-a" cx="373.5" cy="274.5" r="17.5" fill="var(--logo-a, #ff7323)"/>
  <path class="s-a" pathLength="1" d="{s_top}" {stroke} stroke="var(--logo-a, #ff7323)"/>
  <path class="s-b" pathLength="1" d="{s_bottom}" {stroke} stroke="var(--logo-b, #17e5fc)"/>
  <circle class="n-b" cx="190.5" cy="400" r="18.5" fill="var(--logo-b, #17e5fc)"/>
  <path d="{''.join(paths['w'])}" fill="currentColor"/>
  <circle cx="1309.5" cy="337.5" r="12.5" fill="var(--logo-b, #17e5fc)"/>
  <path d="{''.join(paths['b'])}" fill="var(--logo-b, #17e5fc)"/>
</svg>
'''
OUT.write_text(svg)
print(OUT, len(svg), 'bytes')
