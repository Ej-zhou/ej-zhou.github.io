# Cinematic Cartography — agent notes

## Data file
- Source of truth: `data.json` (movies array). Each entry: `name`, `place`, `display_place`, `lat`, `lon`, `director`, `year`, `link`, `checked`, `cannes`.
- Source CSV: `Cinematic Cartography 07a73f99e9c348ca823995e3e7d27acc_all.csv` (city-level only).
- Errata snapshot file: `cartography-errata.json` (usually `{}`; user-flagged errata live in browser localStorage).

## No two films at the same coordinate
Each entry must have a unique `(lat, lon)` (to 4 decimal places, ~11m). Two films sharing a position collide on the map.

When adding or editing a film:
1. After writing, run a quick clash scan (`collections.defaultdict` grouped by rounded lat/lon) to confirm uniqueness.
2. If a clash exists, **research further** — find a specific neighborhood, filming location, or in-film setting that distinguishes the entry. Don't just nudge coordinates blindly; pick a place that is actually meaningful for that film.
3. Acceptable distinguishers, in priority order: (a) named in-film setting, (b) confirmed filming location, (c) a representative neighborhood matching the film's milieu (label clearly as approximate in `display_place`).
4. If the setting is genuinely fictional/virtual (e.g. animated, simulated worlds), pin to a meaningful proxy: director's home base, filming location, or a representative city for the diegesis. Note this in `display_place`.

## Style conventions
- No em-dashes (`—`) anywhere in `display_place` or any user-facing text. Use colons, commas, parentheses, semicolons, slashes, or middots. En-dashes (`–`) in ranges are technically fine but prefer slashes for safety.
- For Sinophone/Japanese/Korean films, name field uses `English Title (中文片名)` or `English Title (日本語)`. Director names use English/pinyin form (e.g. `Bi Gan`, `Hou Hsiao-hsien`, `Kiyoshi Kurosawa`).
- Co-directors: separate with ` & ` (e.g. `Javier Ambrossi & Javier Calvo`).
- `display_place` should be specific and informative: include era/setting context where useful (`(1986)`, `(WWI)`, `(fictional)`), but avoid the literal word "placeholder" in finished entries.

## Deployment
- Repo is `~/Movies/ej-zhou.github.io/`, deployed via GitHub Pages on `main`. After editing, commit with a concise `cinema: …` message and push. The user expects a backup file (e.g. `data.json.bak`) before destructive batch changes.
