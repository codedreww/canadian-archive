ARCHITECTURE OVERVIEW

app/ → Website routing & era selection
game/ → 2D game runtime (PixiJS)
game/scenes → Playable worlds
game/systems → Input & movement systems
game/data → Historical content & era metadata
ui/ → HTML overlays on top of canvas

FLOW:
Homepage → Select Era → /era/[eraId] → GameRoot → EraScene → EventModal
