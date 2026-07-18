---
name: portfolio-builder
description: Update the Abin Sumesh John portfolio site in this repo. Use when editing the static Vite/React portfolio, translating resume or GitHub content into site sections, separating data from presentation, or preparing the site for a later dynamic source.
---

# Portfolio Builder

## Overview

Keep this skill short and practical. Load the reference map first, then update the content source before touching the UI.

## Workflow

1. Read [`references/content-map.md`](references/content-map.md) before making edits.
2. Keep user-facing copy in `src/content/portfolio.ts`.
3. Change `src/App.tsx` only when the layout or component structure needs to change.
4. Preserve the static-to-dynamic seam by updating the content source interface instead of hardcoding data in multiple components.
5. Prefer small, data-driven edits over broad rewrites.

## Token-Saving Rules

- Reuse the existing content schema instead of restating resume details in multiple places.
- Add new copy to the content file first, then let the UI render from that data.
- If the user asks for a future dynamic upgrade, swap the content source adapter rather than redesigning the page.

## Current Structure

- Static app shell: Vite + React + TypeScript.
- Canonical content: `src/content/portfolio.ts`.
- Reference map: `references/content-map.md`.

## Resources

### references/
Use the reference map for the canonical content order, current profile facts, and update rules.
