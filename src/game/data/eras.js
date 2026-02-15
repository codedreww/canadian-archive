/*
  FILE: src/game/data/eras.js

  PURPOSE:
  Contains static metadata about all eras.

  RESPONSIBILITIES:
  - Define era id.
  - Define title and date range.
  - Define background image for each era.
  - Provide description for homepage UI.

  USED BY:
  - Homepage (to render era selection cards).
  - GameRoot (to load background + content for era).
*/

// src/game/data/eras.js
export const ERAS = [
  {
    id: "era1",
    title: "Indigenous Foundations",
    years: "Pre-1500s",
    background: "/bg/era1.png",
  },
  {
    id: "era2",
    title: "Contact & Colonization",
    years: "1500s–1763",
    background: "/bg/era2.png",
  },
  {
    id: "era3",
    title: "British North America",
    years: "1763–1867",
    background: "/bg/era3.png",
  },
  {
    id: "era4",
    title: "Confederation & Nation-Building",
    years: "1867–1914",
    background: "/bg/era4.png",
  },
  {
    id: "era5",
    title: "War & Global Identity",
    years: "1914–1945",
    background: "/bg/era5.png",
  },
  {
    id: "era6",
    title: "Modern & Multicultural Canada and Digital & Reconciliation Era",
    years: "1945–Present",
    background: "/bg/era6.png",
  },
];

export function getEraBackgroundPath(eraId) {
  const era = ERAS.find((e) => e.id === eraId);
  return era?.background ?? null;
}
