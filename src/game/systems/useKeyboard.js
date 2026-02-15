/*
  FILE: src/game/systems/useKeyboard.js

  PURPOSE:
  Centralized keyboard input handler for the game.

  RESPONSIBILITIES:
  - Track WASD keys.
  - Track arrow keys.
  - Track interaction key (E).
  - Provide a stable reference object that scenes can read every frame.

  IMPORTANT:
  - Should not cause React re-renders every key press.
  - Used by EraScene to move player and detect interaction.
*/
