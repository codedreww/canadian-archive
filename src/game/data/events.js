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
      images: [{ src: "/eras_6_images/world_wars_era.png", alt: "Test image 1", caption: "Caption 1" }],
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
  era5: [
    {
      id: "era5-1",
      title: "Battle of Vimy Ridge (April 9-12, 1917)",
      x: 90,
      y: 150,
      summary:
        "The Battle of Vimy Ridge (April 1917) was a major First World War victory where Canadian forces captured a heavily fortified German position in France. It became a defining moment of national pride and unity, marking Canada's emergence as a strong force on the world stage.",
      whyItMatters: [
        "Preserves firsthand accounts of soldiers and wartime experiences.",
        "Documents a defining moment in Canadian national identity.",
        "Helps future generations understand the human cost of war, especially in Canada.",
      ],
      images: [{ src: "/eras_5_images/BattleOfVimyRidge.jpg", alt: "Battle of Vimy Ridge" }],
    },
    {
      id: "era5-2",
      title: "Conscription Crisis (1917)",
      x: 210,
      y: 540,
      summary:
        "The Conscription Crisis of 1917 occurred when Canada introduced mandatory military service during World War I due to troop shortages. The policy deeply divided the country, with strong opposition in Quebec and among French Canadians, revealing lasting linguistic and cultural tensions.",
      whyItMatters: [
        "Records political divisions and linguistic tensions in Canada.",
        "Helps explain historical roots of French-English relations.",
        "Provides lessons on balancing national needs with civil liberties.",
      ],
      images: [{ src: "/eras_5_images/Anti-conscription_parade_at_Victoria_Square.jpg", alt: "Conscription Crisis 1917" }],
    },
    {
      id: "era5-3",
      title: "Women Gain Federal Voting Rights (1918)",
      x: 330,
      y: 160,
      summary:
        "In 1918, most Canadian women gained the right to vote in federal elections; several minority groups were still excluded, marking a major milestone in the fight for gender equality. This reform expanded democratic participation and paved the way for women to run for federal office in 1919.",
      whyItMatters: [
        "Preserves the struggle for gender equality and democratic inclusion.",
        "Documents activism that expanded voting rights.",
        "Helps future generations understand how rights evolve over time.",
      ],
      images: [{ src: "/eras_5_images/Women's_suffrage.jpg", alt: "Women gain federal voting rights in 1918" }],
    },
    {
      id: "era5-4",
      title: "Canada Signs Treaty of Versailles (1919)",
      x: 450,
      y: 530,
      summary:
        "In 1919, Canada signed the Treaty of Versailles independently rather than as part of Britain, marking its growing autonomy on the world stage. The country also gained its own seat in the League of Nations, signaling increased international recognition.",
      whyItMatters: [
        "Marks Canada's emergence as an independent international actor.",
        "Documents diplomatic history and nation-building milestones.",
        "Helps trace Canada's development in global governance.",
      ],
      images: [{ src: "/eras_5_images/PeaceTreaty.jpg", alt: "Canada and Treaty of Versailles" }],
    },
    {
      id: "era5-5",
      title: "Winnipeg General Strike (1919)",
      x: 570,
      y: 170,
      summary:
        "The Winnipeg General Strike of 1919 was one of Canada's largest labour protests, with over 30,000 workers walking off the job to demand better wages and working conditions. It highlighted deep economic inequality and helped advance labour rights in Canada.",
      whyItMatters: [
        "Preserves labour history and workers' rights movements.",
        "Documents economic inequality and social tensions.",
        "Provides context for modern labour laws and workplace protections.",
      ],
      images: [{ src: "/eras_5_images/WinnipegGeneralStrike.jpg", alt: "Winnipeg General Strike of 1919" }],
    },
    {
      id: "era5-6",
      title: "The Great Depression (1929-1939)",
      x: 690,
      y: 550,
      summary:
        "The Great Depression (1929-1939) was a severe economic crisis marked by mass unemployment, business failures, and widespread poverty across Canada. Prairie droughts and Dust Bowl conditions worsened hardship, leading to relief programs and protests demanding government support.",
      whyItMatters: [
        "Records economic hardship and survival strategies.",
        "Helps policymakers understand impacts of financial crises.",
        "Preserves personal stories of resilience and community support.",
      ],
      images: [{ src: "/eras_5_images/Great_depression.jpg", alt: "The Great Depression in Canada" }],
    },
    {
      id: "era5-7",
      title: "World War II (1939-1945)",
      x: 810,
      y: 155,
      summary:
        "World War II (1939-1945) saw Canada declare war independently and play a major role through military campaigns such as the D-Day landings and the Battle of the Atlantic. The war boosted industrial production, expanded roles for women in the workforce, and strengthened Canada's international standing.",
      whyItMatters: [
        "Documents Canada's global role and military contributions.",
        "Preserves experiences of soldiers and civilians on the home front.",
        "Helps future generations understand the consequences of global conflict.",
      ],
      images: [{ src: "/eras_5_images/world_war_2.jpg", alt: "World War II in Canada" }],
    },
    {
      id: "era5-8",
      title: "Internment of Japanese Canadians (1942-1949)",
      x: 930,
      y: 535,
      summary:
        "The internment of Japanese Canadians (1942-1949) involved the forced relocation and confinement of over 20,000 people of Japanese descent during World War II. Their property was confiscated, and the policy is now recognized as a grave violation of civil rights.",
      whyItMatters: [
        "Preserves evidence of civil rights violations and injustice.",
        "Ensures accountability and recognition of historical wrongs.",
        "Educates future generations to prevent similar discrimination.",
      ],
      images: [{src: "/eras_5_images/Internment_of_japanese_canadians.jpg", alt: "Internment of Japanese Canadians" }],
    },
  ],
};
