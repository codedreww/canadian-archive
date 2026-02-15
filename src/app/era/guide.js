/*
  FILE: src/app/era/[eraId]/page.js

  PURPOSE:
  This page launches the 2D game for a specific era.

  RESPONSIBILITIES:
  - Read eraId from route params.
  - Pass eraId into the game engine (GameRoot).
  - Render the PixiJS game canvas.
  - Optionally show loading state.

  NOTES:
  - This page is the bridge between the website and the game.
  - No heavy game logic here.
  - It should only mount GameRoot and pass the eraId.

  EXAMPLE ROUTES:
  /era/era1
  /era/era6
*/
