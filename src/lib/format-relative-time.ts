const UNITS: { unit: string; ms: number }[] = [
  { unit: "y", ms: 1000 * 60 * 60 * 24 * 365 },
  { unit: "mo", ms: 1000 * 60 * 60 * 24 * 30 },
  { unit: "w", ms: 1000 * 60 * 60 * 24 * 7 },
  { unit: "d", ms: 1000 * 60 * 60 * 24 },
  { unit: "h", ms: 1000 * 60 * 60 },
  { unit: "m", ms: 1000 * 60 },
];

export function formatRelativeTime(iso: string, now: Date = new Date()) {
  const diffMs = now.getTime() - new Date(iso).getTime();

  for (const { unit, ms } of UNITS) {
    const value = Math.floor(diffMs / ms);
    if (value >= 1) {
      return `${value}${unit} ago`;
    }
  }

  return "just now";
}
