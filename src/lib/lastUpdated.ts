import { execSync } from 'node:child_process';

/** Date of the latest commit (falls back to build time), e.g. "Nov 17, 2026". */
export function lastUpdated(): string {
  let date = new Date();
  try {
    const iso = execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim();
    if (iso) date = new Date(iso);
  } catch {
    // not a git checkout — use build time
  }
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/Los_Angeles',
  }).format(date);
}
