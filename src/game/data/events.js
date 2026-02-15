/*
  FILE: src/game/data/events.js

  PURPOSE:
  Event/hotspot content for each era.
  Each event has an (x,y) position on the era map + basic content.

  STRUCTURE:
  eventsByEra = {
      era1: [ ...events ],
      era2: [ ...events ],
      ...
  }

  EACH EVENT SHOULD CONTAIN:
  - id
  - title
  - position (x, y on map)
  - summary text
  - images
  - archivesLinks
  - whyItMatters text

  IMPORTANT:
  - This file contains content only.
  - No game logic.
  - Teammates writing history content can safely edit here.
*/

export const EVENTS_BY_ERA = {
  era6: [
    {
      id: "era6-1",
      title: "Post-war Immigration Boom",
      x: 260,
      y: 180,
      summary:
        "After 1945, Canada saw major immigration shifts that reshaped cities, culture, and policy.",
    },
    {
      id: "era6-2",
      title: "Multiculturalism Policy",
      x: 520,
      y: 260,
      summary:
        "Canada adopted multiculturalism as policy, influencing identity, institutions, and public life.",
    },
    {
      id: "era6-3",
      title: "Constitution Act, 1982",
      x: 720,
      y: 360,
      summary:
        "The Constitution was patriated and the Charter of Rights and Freedoms was introduced.",
    },
  ],

  // other eras can be added later:
  era1: [],
  era2: [],
  era3: [],
  era4: [],
  era5: [],
};
