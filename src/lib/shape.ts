// Builds SVG/CSS path strings for the "cut-into" shapes of the reference:
// a polygon whose every corner is rounded with its own radius (convex or concave).

export type Pt = readonly [number, number];

/** Rounded polygon path. Each corner is softened with a quadratic curve `radius` px long on both sides. */
export function roundedPolygon(points: readonly Pt[], radii: readonly number[]): string {
  const n = points.length;
  const parts: string[] = [];

  for (let i = 0; i < n; i++) {
    const prev = points[(i - 1 + n) % n];
    const cur = points[i];
    const next = points[(i + 1) % n];
    const lenIn = Math.hypot(cur[0] - prev[0], cur[1] - prev[1]);
    const lenOut = Math.hypot(next[0] - cur[0], next[1] - cur[1]);
    const r = Math.min(radii[i] ?? 0, lenIn / 2, lenOut / 2);

    const a: Pt = [cur[0] - ((cur[0] - prev[0]) / lenIn) * r, cur[1] - ((cur[1] - prev[1]) / lenIn) * r];
    const b: Pt = [cur[0] + ((next[0] - cur[0]) / lenOut) * r, cur[1] + ((next[1] - cur[1]) / lenOut) * r];

    parts.push(`${i === 0 ? 'M' : 'L'} ${f(a[0])} ${f(a[1])}`);
    parts.push(r > 0 ? `Q ${f(cur[0])} ${f(cur[1])} ${f(b[0])} ${f(b[1])}` : `L ${f(b[0])} ${f(b[1])}`);
  }

  return parts.join(' ') + ' Z';
}

const f = (v: number) => Math.round(v * 100) / 100;

export interface NotchOptions {
  width: number;
  height: number;
  /** Size of the area cut out of the top-left corner. */
  notchW: number;
  notchH: number;
  /** Horizontal run of the step between notch and photo top; 0 = vertical step. */
  slant?: number;
  /** Outer corner radius (0 for edge-to-edge photos). */
  radius?: number;
  /** Radius of the two joints of the step. */
  joint?: number;
}

/** Photo outline with a notch taken out of its top-left corner. */
export function notchPath({ width: W, height: H, notchW, notchH, slant = 0, radius = 28, joint = 28 }: NotchOptions): string {
  const points: Pt[] = [
    [0, notchH],
    [notchW, notchH],
    [notchW + slant, 0],
    [W, 0],
    [W, H],
    [0, H],
  ];
  return roundedPolygon(points, [radius, joint, joint, radius, radius, radius]);
}
