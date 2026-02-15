/*
  FILE: src/game/scenes/EraScene.js

  PURPOSE:
  This is the playable top-down world for a selected era.

  RESPONSIBILITIES:
  - Render the era background image.
  - Render player character.
  - Handle player movement (WASD).
  - Render event hotspots (based on era data).
  - Detect proximity to hotspots.
  - Trigger interaction when player presses E.
  - Notify GameRoot when an event is opened.

  THIS FILE CONTAINS:
  - Canvas drawing logic (PixiJS).
  - Movement system integration.
  - Interaction detection.

  DOES NOT CONTAIN:
  - Article content UI (handled by UI overlay).
  - Routing logic (handled in app/).
*/
