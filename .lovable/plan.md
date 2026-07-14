## Projects Section Redesign

Rebuild `src/components/sections/Projects.tsx` as a compact 3-column premium grid with a details modal. Update project data to match the spec.

### Layout
- Section: `py-20` (down from `py-36`), header + grid targeting ~1 viewport on desktop.
- Header: eyebrow "Featured Work", title "Featured AI Projects", subtitle "Production-grade Computer Vision and Machine Learning systems designed for real-world deployment."
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, `gap-6`, equal-height cards (`h-full` + flex).

### Card structure (equal height, ~top 55% image / bottom 45% info)
- 16:9 thumbnail (top), overflow-hidden, image zooms on hover.
- Title (single line, `truncate` or clamp-1, `text-lg`).
- Blurb: `line-clamp-2`, muted, short.
- 4–5 tech badges (small, monospace, wrap).
- 3 metric tiles in a `grid-cols-3` compact row (label + value).
- Footer actions: GitHub (icon button, opens repo, `stopPropagation`) + Learn More (primary, opens modal).
- Whole card is clickable → opens modal. GitHub button opens repo in new tab.

### Card visuals / interaction
- Rounded-2xl, `glass` backdrop, soft shadow, subtle border.
- Hover: lift (`-translate-y-1`), image `scale-105`, gradient border glow via absolute layer with `p.accent`, background brightens, buttons animate.
- Reuse existing `TiltCard` for subtle tilt + mouse parallax (already tracks `--mx/--my`).
- Staggered entrance via existing `Reveal` (`delay = 0.08 * idx`), hover-only motion after.

### Details Modal (shadcn Dialog)
- Controlled by local `useState<Project | null>`.
- Content: large screenshot header, then sections — Overview, Architecture (bullet list), Key Features (bullets), Tech Stack (badges), Performance Metrics (grid), plus GitHub + Documentation buttons and default Close.
- Scrollable body (`max-h-[85vh] overflow-y-auto`), does not navigate away.

### Data updates (`src/data/projects.json`)
Align metrics/tech to spec and add modal fields (`features[]`, `architecture[]`, `docs` link kept null when absent):
- Blood Cell: metrics `96.1% mAP@50`, `95.6% Recall`, `89.8% Precision`; tech `YOLO11m, PyTorch, Flask, SQLite`.
- PPE: metrics `25+ FPS`, `Real-Time`, `ByteTrack + ReID`; tech `YOLO26, OpenCV, Flask, SQLite`.
- Retail: metrics `4+ Cameras`, `Cross Camera ReID`, `Real-Time Dashboard`; tech `YOLO11, OSNet, InsightFace, Docker`.

### Files touched
- `src/components/sections/Projects.tsx` — full rewrite (grid + card + modal).
- `src/data/projects.json` — update metrics/tech, add `features`, `architecture`.
- New: `src/components/sections/ProjectModal.tsx` (Dialog wrapper) — keeps Projects.tsx tidy.

### Out of scope
No changes to routing, other sections, or design tokens.
