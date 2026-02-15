"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useKeyboard from "../systems/useKeyboard";

const MAX_EVENTS_PER_ERA = 10;
const MIN_EVENTS_PER_ERA = 1;
const HORIZONTAL_SPEED = 1.9;
const VERTICAL_SPEED = 1.5;
const BRANCH_ENTER_RADIUS = 18;
const BRANCH_EXIT_RADIUS = 28;
const ENDPOINT_RADIUS = 7;
const NODE_INFO_ENTER_DISTANCE = 44;
const NODE_INFO_EXIT_DISTANCE = 62;
const BRANCH_LENGTH_SCALE = 0.75;
const PLAYER_MOVE_EPSILON = 0.05;
const PLAYER_FRAME_INTERVAL_MS = 240;
const PLAYER_SPRITE_WIDTH = 56;
const PLAYER_SPRITE_HEIGHT = 96;
const PLAYER_BOB_PX = 2;
const PLAYER_SPRITES_BY_ERA = {
  era1: ["/sprites/era1/era1_idle.svg", "/sprites/era1/era1_walk.svg"],
  era2: ["/sprites/era2/era2_idle.svg", "/sprites/era2/era2_walk.svg"],
  era3: ["/sprites/era3/soldier_idle.svg", "/sprites/era3/soldier_walk.svg"],
  era4: ["/sprites/era4/era4_idle.svg", "/sprites/era4/era4_walk.svg"],
  era5: ["/sprites/era5/era5_idle.svg", "/sprites/era5/era5_walk.svg"],
  era6: ["/sprites/era6/era6_idle.svg", "/sprites/era6/era6_walk.svg"],
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function colorNumberToCss(color, fallback = "#f59e0b") {
  if (typeof color !== "number" || Number.isNaN(color)) return fallback;
  return `#${color.toString(16).padStart(6, "0")}`;
}

function isSameNodeFocus(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  return a.event?.id === b.event?.id && a.atNode === b.atNode;
}

export default function EraScene({
  width,
  height,
  eraId,
  eras = [],
  eventsByEra = {},
  paused = false,
  onOpenEvent,
  onNodeFocusChange,
}) {
  const keys = useKeyboard();
  const baselineY = Math.round(height * 0.5);
  const minX = 56;
  const maxX = Math.max(minX + 1, width - 56);
  const branchLength = Math.max(
    1,
    Math.round(
      clamp(
        Math.round(height * 0.26),
        56,
        Math.max(56, Math.floor(height * 0.5) - 34),
      ) * BRANCH_LENGTH_SCALE,
    ),
  );
  const selectedEra = useMemo(
    () => eras.find((era) => era.id === eraId) ?? eras[0] ?? null,
    [eraId, eras],
  );

  const branches = useMemo(() => {
    if (!selectedEra) return [];

    const selectedEvents = eventsByEra[selectedEra.id] ?? [];
    const totalBranches = clamp(
      selectedEvents.length || 1,
      MIN_EVENTS_PER_ERA,
      MAX_EVENTS_PER_ERA,
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
    [branches],
  );

  const initialX = useMemo(() => {
    return branches[0]?.x ?? Math.round(width / 2);
  }, [branches, width]);

  const playerRef = useRef({ x: initialX, y: baselineY });
  const [playerPos, setPlayerPos] = useState(() => ({
    x: initialX,
    y: baselineY,
  }));
  const [playerFrameIndex, setPlayerFrameIndex] = useState(0);
  const [playerFacing, setPlayerFacing] = useState(1);
  const [isPlayerMoving, setIsPlayerMoving] = useState(false);

  const activeBranchIdRef = useRef(null);
  const [activeBranchId, setActiveBranchId] = useState(null);
  const [nearBranchId, setNearBranchId] = useState(null);
  const nearBranchIdRef = useRef(null);
  const nearNodeBranchIdRef = useRef(null);
  const nodeFocusRef = useRef(null);
  const interactionLatchRef = useRef(false);
  const prevPausedRef = useRef(paused);
  const isPlayerMovingRef = useRef(false);
  const playerFacingRef = useRef(1);
  const playerFrameIndexRef = useRef(0);

  const playerFrames = useMemo(
    () => PLAYER_SPRITES_BY_ERA[selectedEra?.id] ?? null,
    [selectedEra?.id],
  );
  const usingSpritePlayer = Boolean(playerFrames?.length);
  const activeEraColor = colorNumberToCss(selectedEra?.pathColor, "#f59e0b");

  const setPlayerFrame = useCallback((nextIndex) => {
    if (nextIndex === playerFrameIndexRef.current) return;
    playerFrameIndexRef.current = nextIndex;
    setPlayerFrameIndex(nextIndex);
  }, []);

  useEffect(() => {
    // Reset character animation state when switching eras.
    isPlayerMovingRef.current = false;
    setIsPlayerMoving(false);
    playerFacingRef.current = 1;
    setPlayerFacing(1);
    setPlayerFrame(0);
  }, [selectedEra?.id, setPlayerFrame]);

  useEffect(() => {
    if (!usingSpritePlayer || !isPlayerMoving || !playerFrames?.length) {
      setPlayerFrame(0);
      return undefined;
    }

    // Instant switch to walk frame when movement starts.
    setPlayerFrame(1 % playerFrames.length);

    const intervalId = window.setInterval(() => {
      const nextFrame = (playerFrameIndexRef.current + 1) % playerFrames.length;
      setPlayerFrame(nextFrame);
    }, PLAYER_FRAME_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [isPlayerMoving, playerFrames, setPlayerFrame, usingSpritePlayer]);

  const updateNodeFocus = useCallback(
    (value) => {
      if (isSameNodeFocus(nodeFocusRef.current, value)) return;
      nodeFocusRef.current = value;
      onNodeFocusChange?.(value);
    },
    [onNodeFocusChange],
  );

  useEffect(() => {
    let rafId = null;

    const tick = () => {
      const prevX = playerRef.current.x;
      const prevY = playerRef.current.y;

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
          nearNodeBranchIdRef.current = null;
          updateNodeFocus(null);
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

          if (nearNodeBranchIdRef.current !== null) {
            nearNodeBranchIdRef.current = null;
          }
          updateNodeFocus(null);

          const left = keys.current.a || keys.current.arrowleft;
          const right = keys.current.d || keys.current.arrowright;
          const dir = (right ? 1 : 0) - (left ? 1 : 0);

          if (dir !== 0) {
            const nextX = clamp(
              playerRef.current.x + dir * HORIZONTAL_SPEED,
              minX,
              maxX,
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

          const prevNearBranch = nearBranchIdRef.current
            ? (branchesById.get(nearBranchIdRef.current) ?? null)
            : null;

          let nearBranch = null;
          if (prevNearBranch) {
            const distToPrev = Math.abs(prevNearBranch.x - playerRef.current.x);
            if (distToPrev <= BRANCH_EXIT_RADIUS) {
              nearBranch = prevNearBranch;
            }
          }
          if (!nearBranch && nearest && bestDistance <= BRANCH_ENTER_RADIUS) {
            nearBranch = nearest;
          }

          const nearId = nearBranch?.id ?? null;
          if (nearId !== nearBranchIdRef.current) {
            nearBranchIdRef.current = nearId;
            setNearBranchId(nearId);
          }

          if (nearBranch) {
            const goUp = keys.current.w || keys.current.arrowup;
            const goDown = keys.current.s || keys.current.arrowdown;
            const wantsBranch =
              (nearBranch.direction < 0 && goUp) ||
              (nearBranch.direction > 0 && goDown);

            if (wantsBranch) {
              activeBranchIdRef.current = nearBranch.id;
              playerRef.current.x = nearBranch.x;
              setPlayerPos({ x: nearBranch.x, y: playerRef.current.y });
              setActiveBranchId(nearBranch.id);
            }
          }
        } else {
          const branch = branchesById.get(activeBranchIdRef.current);
          if (!branch) {
            activeBranchIdRef.current = null;
            setActiveBranchId(null);
            nearNodeBranchIdRef.current = null;
            updateNodeFocus(null);
            rafId = requestAnimationFrame(tick);
            return;
          }

          // Lock x on current branch.
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
              branch.startY,
            );
            if (nextY !== playerRef.current.y) {
              playerRef.current.y = nextY;
              setPlayerPos({ x: branch.x, y: nextY });
            }
          } else {
            const nextY = clamp(
              playerRef.current.y + step,
              branch.startY,
              branch.endY,
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
              nearNodeBranchIdRef.current = null;
              updateNodeFocus(null);
            }
          }

          const atEnd =
            Math.abs(playerRef.current.y - branch.endY) <= ENDPOINT_RADIUS;
          const distanceToEnd = Math.abs(playerRef.current.y - branch.endY);
          const holdingNodeRadius = nearNodeBranchIdRef.current === branch.id;
          const nodeRadius = holdingNodeRadius
            ? NODE_INFO_EXIT_DISTANCE
            : NODE_INFO_ENTER_DISTANCE;

          const nearNode =
            Boolean(branch.event) &&
            (distanceToEnd <= nodeRadius ||
              activeBranchIdRef.current === branch.id);
          if (nearNode) {
            nearNodeBranchIdRef.current = branch.id;
            updateNodeFocus({ event: branch.event, atNode: atEnd });
          } else {
            if (holdingNodeRadius) {
              nearNodeBranchIdRef.current = null;
            }
            updateNodeFocus(null);
          }

          if (
            atEnd &&
            branch.event &&
            keys.current.space &&
            !interactionLatchRef.current
          ) {
            interactionLatchRef.current = true;
            const eraMeta = selectedEra;
            onOpenEvent?.({ era: eraMeta, event: branch.event });
          }
        }

        if (!keys.current.space) {
          interactionLatchRef.current = false;
        }
      }

      const deltaX = playerRef.current.x - prevX;
      const deltaY = playerRef.current.y - prevY;
      const moved =
        Math.abs(deltaX) > PLAYER_MOVE_EPSILON ||
        Math.abs(deltaY) > PLAYER_MOVE_EPSILON;

      if (moved !== isPlayerMovingRef.current) {
        isPlayerMovingRef.current = moved;
        setIsPlayerMoving(moved);
      }

      if (Math.abs(deltaX) > PLAYER_MOVE_EPSILON) {
        const nextFacing = deltaX > 0 ? 1 : -1;
        if (nextFacing !== playerFacingRef.current) {
          playerFacingRef.current = nextFacing;
          setPlayerFacing(nextFacing);
        }
      }

      if (usingSpritePlayer && !moved) {
        setPlayerFrame(0);
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
      updateNodeFocus(null);
    };
  }, [
    baselineY,
    branches,
    branchesById,
    height,
    keys,
    maxX,
    minX,
    onOpenEvent,
    paused,
    playerFrames,
    selectedEra,
    setPlayerFrame,
    updateNodeFocus,
    usingSpritePlayer,
  ]);

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="absolute inset-0 block"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="baseline-core-gradient"
            x1={`${minX}`}
            y1={`${baselineY}`}
            x2={`${maxX}`}
            y2={`${baselineY}`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        <line
          x1={minX}
          y1={baselineY}
          x2={maxX}
          y2={baselineY}
          stroke="#0b1220"
          strokeWidth="12"
          strokeOpacity="0.55"
          strokeLinecap="round"
        />
        <line
          x1={minX}
          y1={baselineY}
          x2={maxX}
          y2={baselineY}
          stroke="url(#baseline-core-gradient)"
          strokeWidth="5"
          strokeOpacity="0.95"
          strokeLinecap="round"
        />
        <line
          x1={minX}
          y1={baselineY}
          x2={maxX}
          y2={baselineY}
          stroke="#f8fafc"
          strokeWidth="1.5"
          strokeOpacity="0.38"
          strokeDasharray="10 14"
          strokeLinecap="round"
        />

        {branches.map((branch) => {
          const isCurrentEra = branch.eraId === eraId;
          const isNear = branch.id === nearBranchId;
          const isActive = branch.id === activeBranchId;
          const branchColor = isCurrentEra ? activeEraColor : "#94a3b8";
          const isHighlighted = isNear || isActive;
          const branchCoreWidth = isActive ? 5 : isNear ? 4.5 : 4;
          const branchShadowWidth = isActive ? 10 : 8;
          const endpointOuterRadius = isActive ? 11 : isNear ? 10 : 9;
          const endpointInnerRadius = isActive ? 7.5 : isNear ? 7 : 6.5;
          const hasEvent = Boolean(branch.event);
          const endpointFill = hasEvent ? "#fbbf24" : "#94a3b8";
          const endpointStroke = hasEvent ? "#f59e0b" : "#64748b";
          const endpointOpacity = hasEvent ? 0.98 : 0.52;

          return (
            <g key={branch.id}>
              <line
                x1={branch.x}
                y1={branch.startY}
                x2={branch.x}
                y2={branch.endY}
                stroke="#0b1220"
                strokeWidth={branchShadowWidth}
                strokeOpacity={isActive ? 0.62 : 0.5}
                strokeLinecap="round"
              />
              <line
                x1={branch.x}
                y1={branch.startY}
                x2={branch.x}
                y2={branch.endY}
                stroke={branchColor}
                strokeWidth={branchCoreWidth}
                strokeOpacity={isHighlighted ? 1 : 0.84}
                strokeLinecap="round"
              />
              <circle
                cx={branch.x}
                cy={branch.startY}
                r={5}
                fill="#0b1220"
                fillOpacity="0.64"
              />
              <circle
                cx={branch.x}
                cy={branch.startY}
                r={isHighlighted ? 3.4 : 3}
                fill={branchColor}
                fillOpacity={isHighlighted ? 0.96 : 0.8}
              />
              <circle
                cx={branch.x}
                cy={branch.endY}
                r={endpointOuterRadius}
                fill="#0b1220"
                fillOpacity={isHighlighted ? 0.62 : 0.52}
              />
              <circle
                cx={branch.x}
                cy={branch.endY}
                r={endpointInnerRadius}
                fill={endpointFill}
                fillOpacity={endpointOpacity}
                stroke={endpointStroke}
                strokeWidth="2"
              />
              {hasEvent && (
                <circle
                  cx={branch.x}
                  cy={branch.endY}
                  r={isActive ? 2.7 : 2.2}
                  fill="#fff7ed"
                  fillOpacity={0.85}
                />
              )}
              {isHighlighted && (
                <circle
                  cx={branch.x}
                  cy={branch.endY}
                  r={endpointOuterRadius + 3}
                  fill="none"
                  stroke={branchColor}
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                />
              )}
            </g>
          );
        })}
      </svg>

      {usingSpritePlayer ? (
        <div
          aria-hidden="true"
          className="absolute [image-rendering:pixelated]"
          style={{
            width: `${PLAYER_SPRITE_WIDTH}px`,
            height: `${PLAYER_SPRITE_HEIGHT}px`,
            left: `${playerPos.x}px`,
            top: `${playerPos.y}px`,
            transform: `translate(-50%, -100%) translateY(${
              isPlayerMoving && playerFrameIndex % 2 === 1 ? PLAYER_BOB_PX : 0
            }px) scaleX(${playerFacing})`,
            filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.45))",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={playerFrames[playerFrameIndex] ?? playerFrames[0]}
            alt=""
            className="h-full w-full object-contain [image-rendering:pixelated]"
          />
        </div>
      ) : (
        <div
          className="absolute h-6 w-6 rounded-full border-2 border-white bg-white shadow-[0_0_0_6px_rgba(56,189,248,0.28)]"
          style={{
            left: `${playerPos.x}px`,
            top: `${playerPos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
}
