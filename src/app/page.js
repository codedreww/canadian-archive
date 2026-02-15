/*
  FILE: src/app/page.js

  PURPOSE:
  This is the main homepage of the website.
  It is NOT part of the game engine.

  RESPONSIBILITIES:
  - Display all available eras (7 eras total).
  - Show title, introduction, and branding.
  - Allow the user to click/select an era.
  - Navigate to `/era/[eraId]` when an era is selected.

  NOTES:
  - This is regular Next.js UI.
  - No PixiJS or canvas rendering here.
  - Styling handled with Tailwind (or CSS).
  - Era list should come from shared data (e.g., src/game/data/eras.js).

  FLOW:
  User clicks era → router.push("/era/[eraId]") → game launches.
*/
