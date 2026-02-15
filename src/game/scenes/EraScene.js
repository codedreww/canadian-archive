"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useKeyboard from "../systems/useKeyboard";

const MAX_EVENTS_PER_ERA = 10;
const MIN_EVENTS_PER_ERA = 1;
const HORIZONTAL_SPEED = 3.4;
const VERTICAL_SPEED = 2.8;
const BRANCH_ENTRY_RADIUS = 18;
const ENDPOINT_RADIUS = 7;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export default function EraScene({
  width,
  height,
  eraId,
  eras = [],
  eventsByEra = {},
  paused = false,
  onOpenEvent,
  onPromptChange,
}) {
  const keys = useKeyboard();
  const baselineY = Math.round(height * 0.5);
  const minX = 56;
  const maxX = Math.max(minX + 1, width - 56);
  const branchLength = clamp(
    Math.round(height * 0.26),
    56,
    Math.max(56, Math.floor(height * 0.5) - 34)
  );
  const selectedEra = useMemo(
    () => eras.find((era) => era.id === eraId) ?? eras[0] ?? null,
    [eraId, eras]
  );

  const branches = useMemo(() => {
    if (!selectedEra) return [];

    const selectedEvents = eventsByEra[selectedEra.id] ?? [];
    const totalBranches = clamp(
      selectedEvents.length || 1,
      MIN_EVENTS_PER_ERA,
      MAX_EVENTS_PER_ERA
    );
    const availableWidth = maxX - minX;
    const xGap = totalBranches > 1 ? availableWidth / (totalBranches - 1) : 0;

    const result = [];
    for (let i = 0; i < totalBranches; i += 1) {
      const direction = i % 2 === 0 ? -1 : 1;
      const x = Math.round(minX + i * xGap);
      const endY = baselineY + direction * branchLength;
      const event = selectedEvents[i] ?? null;

      result.push({
        id: `${selectedEra.id}-${i}`,
        eraId: selectedEra.id,
        eraTitle: selectedEra.title,
        x,
        startY: baselineY,
        endY,
        direction,
        event,
      });
    }

    return result;
  }, [baselineY, branchLength, eventsByEra, maxX, minX, selectedEra]);

  const branchesById = useMemo(
    () => new Map(branches.map((branch) => [branch.id, branch])),
    [branches]
  );

  const initialX = useMemo(() => {
    return branches[0]?.x ?? Math.round(width / 2);
  }, [branches, width]);

  const playerRef = useRef({ x: initialX, y: baselineY });
  const [playerPos, setPlayerPos] = useState(() => ({ x: initialX, y: baselineY }));

  const activeBranchIdRef = useRef(null);
  const [activeBranchId, setActiveBranchId] = useState(null);
  const [nearBranchId, setNearBranchId] = useState(null);
  const nearBranchIdRef = useRef(null);
  const promptRef = useRef(null);
  const interactionLatchRef = useRef(false);
  const prevPausedRef = useRef(paused);

  const updatePrompt = useCallback(
    (value) => {
      if (promptRef.current === value) return;
      promptRef.current = value;
      onPromptChange?.(value);
    },
    [onPromptChange]
  );

  useEffect(() => {
    let rafId = null;

    const tick = () => {
      const resumedFromModal = prevPausedRef.current && !paused;
      if (resumedFromModal) {
        const activeBranch = branchesById.get(activeBranchIdRef.current);
        if (activeBranch) {
          // Keep player at the opened event node after closing modal.
          playerRef.current.x = activeBranch.x;
          playerRef.current.y = activeBranch.endY;
          setPlayerPos({ x: activeBranch.x, y: activeBranch.endY });
        } else {
          const restoreX = clamp(playerRef.current.x, minX, maxX);
          playerRef.current.x = restoreX;
          playerRef.current.y = baselineY;
          setPlayerPos({ x: restoreX, y: baselineY });
          activeBranchIdRef.current = null;
          setActiveBranchId(null);
          nearBranchIdRef.current = null;
          setNearBranchId(null);
          updatePrompt(null);
        }
        interactionLatchRef.current = false;
      }
      prevPausedRef.current = paused;

      if (!paused) {
        // Always keep the player inside visible canvas bounds.
        playerRef.current.x = clamp(playerRef.current.x, minX, maxX);
        playerRef.current.y = clamp(playerRef.current.y, 22, height - 22);

        const onBaseline = activeBranchIdRef.current === null;

        if (onBaseline) {
          // Keep player anchored to baseline even without movement input.
          if (playerRef.current.y !== baselineY) {
            playerRef.current.y = baselineY;
            setPlayerPos({ x: playerRef.current.x, y: baselineY });
          }

          const left = keys.current.a || keys.current.arrowleft;
          const right = keys.current.d || keys.current.arrowright;
          const dir = (right ? 1 : 0) - (left ? 1 : 0);

          if (dir !== 0) {
            const nextX = clamp(
              playerRef.current.x + dir * HORIZONTAL_SPEED,
              minX,
              maxX
            );
            if (nextX !== playerRef.current.x) {
              playerRef.current.x = nextX;
              playerRef.current.y = baselineY;
              setPlayerPos({ x: nextX, y: baselineY });
            }
          }

          let nearest = null;
          let bestDistance = Infinity;
          for (const branch of branches) {
            const d = Math.abs(branch.x - playerRef.current.x);
            if (d < bestDistance) {
              bestDistance = d;
              nearest = branch;
            }
          }

          const canEnter = nearest && bestDistance <= BRANCH_ENTRY_RADIUS;
          const nearId = canEnter ? nearest.id : null;
          if (nearId !== nearBranchIdRef.current) {
            nearBranchIdRef.current = nearId;
            setNearBranchId(nearId);
          }

          let nextPrompt = null;
          if (canEnter) {
            if (nearest.direction < 0) {
              nextPrompt = "Press W/Up to climb branch";
            } else {
              nextPrompt = "Press S/Down to climb branch";
            }

            const goUp = keys.current.w || keys.current.arrowup;
            const goDown = keys.current.s || keys.current.arrowdown;
            const wantsBranch =
              (nearest.direction < 0 && goUp) ||
              (nearest.direction > 0 && goDown);

            if (wantsBranch) {
              activeBranchIdRef.current = nearest.id;
              playerRef.current.x = nearest.x;
              setPlayerPos({ x: nearest.x, y: playerRef.current.y });
              setActiveBranchId(nearest.id);
            }
          }

          updatePrompt(nextPrompt);
        } else {
          const branch = branchesById.get(activeBranchIdRef.current);
          if (!branch) {
            activeBranchIdRef.current = null;
            setActiveBranchId(null);
            updatePrompt(null);
            rafId = requestAnimationFrame(tick);
            return;
          }

          // lock x on current branch
          if (playerRef.current.x !== branch.x) {
            playerRef.current.x = branch.x;
            setPlayerPos({ x: branch.x, y: playerRef.current.y });
          }

          const goUp = keys.current.w || keys.current.arrowup;
          const goDown = keys.current.s || keys.current.arrowdown;
          let step = 0;
          if (goUp) step -= VERTICAL_SPEED;
          if (goDown) step += VERTICAL_SPEED;

          // Moving along branch means moving against/with Y depending on branch direction.
          if (branch.direction < 0) {
            const nextY = clamp(
              playerRef.current.y + step,
              branch.endY,
              branch.startY
            );
            if (nextY !== playerRef.current.y) {
              playerRef.current.y = nextY;
              setPlayerPos({ x: branch.x, y: nextY });
            }
          } else {
            const nextY = clamp(
              playerRef.current.y + step,
              branch.startY,
              branch.endY
            );
            if (nextY !== playerRef.current.y) {
              playerRef.current.y = nextY;
              setPlayerPos({ x: branch.x, y: nextY });
            }
          }

          // Return to baseline when reaching it again.
          if (Math.abs(playerRef.current.y - branch.startY) < 0.5) {
            playerRef.current.y = branch.startY;
            setPlayerPos({ x: branch.x, y: branch.startY });

            // If no vertical input now, snap back to baseline mode.
            if (!goUp && !goDown) {
              activeBranchIdRef.current = null;
              setActiveBranchId(null);
              updatePrompt(null);
            }
          }

          const atEnd = Math.abs(playerRef.current.y - branch.endY) <= ENDPOINT_RADIUS;
          let nextPrompt = null;
          if (atEnd) {
            nextPrompt = branch.event
              ? `Press Space • ${branch.event.title}`
              : "No event assigned for this branch";
          } else {
            nextPrompt = "W/S to move on branch";
          }

          updatePrompt(nextPrompt);

          if (atEnd && branch.event && keys.current.space && !interactionLatchRef.current) {
            interactionLatchRef.current = true;
            const eraMeta = selectedEra;
            onOpenEvent?.({ era: eraMeta, event: branch.event });
          }
        }

        if (!keys.current.space) {
          interactionLatchRef.current = false;
        }
      }

      // Keep latch healthy even while paused (modal open).
      if (!keys.current.space) {
        interactionLatchRef.current = false;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    baselineY,
    branches,
    branchesById,
    keys,
    maxX,
    minX,
    onOpenEvent,
    paused,
    height,
    selectedEra,
    updatePrompt,
  ]);

  return (
    <pixiContainer>
      <pixiGraphics
        draw={(g) => {
          g.clear();

          // Main horizontal timeline in the middle.
          g.moveTo(minX, baselineY)
            .lineTo(maxX, baselineY)
            .stroke({ width: 4, color: 0x7dd3fc, alpha: 0.88 });

          for (const branch of branches) {
            const isCurrentEra = branch.eraId === eraId;
            const isNear = branch.id === nearBranchId;
            const isActive = branch.id === activeBranchId;

            g.moveTo(branch.x, branch.startY)
              .lineTo(branch.x, branch.endY)
              .stroke({
                width: isActive ? 4 : 2,
                color: isCurrentEra ? 0xf59e0b : 0x94a3b8,
                alpha: isNear || isActive ? 1 : 0.75,
              });

            g.circle(branch.x, branch.endY, 6).fill({
              color: 0xfbbf24,
              alpha: branch.event ? 0.95 : 0.45,
            });
          }
        }}
      />

      <pixiGraphics
        x={playerPos.x}
        y={playerPos.y}
        draw={(g) => {
          g.clear();
          g.circle(0, 0, 12).fill(0xffffff);
          g.circle(0, 0, 17).stroke({ width: 2, color: 0x38bdf8, alpha: 0.28 });
        }}
      />
    </pixiContainer>
  );
}
