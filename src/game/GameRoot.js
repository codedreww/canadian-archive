/*
  FILE: src/game/GameRoot.js

  PURPOSE:
  This is the main controller for the game runtime.

  RESPONSIBILITIES:
  - Load era data based on eraId.
  - Control which game "mode" is active:
      • Exploring map
      • Event modal open
      • Paused state (if needed)
  - Render the Pixi Stage.
  - Pass data into scenes (EraScene).
  - Manage global game state (current event, visited events, etc.).

  THINK OF THIS AS:
  The "Game Manager".

  IMPORTANT:
  - GameRoot does NOT draw the map.
  - GameRoot does NOT handle player movement directly.
  - It coordinates scenes and state.
*/
