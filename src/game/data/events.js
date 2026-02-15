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
  // other eras can be added later:
  era1: [
    {
    id: "era1-1",
    title: "Head-Smashed-In Buffalo Jump (c. 3800 BCE)",
    x: 90,
    y: 150,
    summary:
      "Plains Indigenous peoples used deep knowledge of bison behaviour and the land to drive herds over cliffs for food and resources. The site preserves thousands of years of communal hunting practices and remains one of the best archaeological records of sustainable land use in North America.",
    whyItMatters: [
      "Demonstrates advanced ecological knowledge and planning.",
      "Shows cooperative large-scale food procurement systems.",
      "Provides strong archaeological evidence of sustainable land use.",
    ],
    images: [
      { src: "/eras_1_images/head_smashed_in_buffalo_jump.jpg", alt: "Head-Smashed-In Buffalo Jump (Alberta)" }
    ],
  },
  {
    id: "era1-2",
    title: "Writing-on-Stone / Áísínai’pi Rock Art (c. 1050 BCE – mid-1800s)",
    x: 210,
    y: 540,
    summary:
      "The Milk River Valley became a major site of Indigenous rock art-making over centuries, preserving thousands of engravings and paintings tied to place, story, and meaning.",
    whyItMatters: [
      "Preserves visual storytelling and place-based knowledge.",
      "Documents long-term cultural continuity across generations.",
      "Supports identity, learning, and reconciliation through heritage preservation.",
    ],
    images: [
      { src: "/eras_1_images/writing_on_stone.jpg", alt: "Writing-on-Stone rock art (Alberta)" }
    ],
  },
  {
    id: "era1-3",
    title: "Thule Expansion Across the Arctic (c. 1200 CE)",
    x: 330,
    y: 160,
    summary:
      "Ancestors of the Inuit migrated east from Alaska across Arctic Canada, bringing technologies like large skin boats and dog teams that supported long-distance travel and successful Arctic hunting.",
    whyItMatters: [
      "Links ancient Arctic lifeways to Inuit communities today.",
      "Highlights technological innovation for survival in extreme environments.",
      "Explains long-distance migration and settlement across the Arctic.",
    ],
    images: [
      { src: "/eras_1_images/thule_expansion.jpg", alt: "Thule migration across the Arctic" }
    ],
  },
  {
    id: "era1-4",
    title: "Great Law of Peace & Wampum Belts (c. 1000 CE)",
    x: 450,
    y: 530,
    summary:
      "Haudenosaunee laws and governance were preserved through oral tradition and wampum belts—beaded records that hold treaties, values, and governance principles across generations.",
    whyItMatters: [
      "Shows advanced Indigenous governance and diplomatic systems.",
      "Preserves treaty traditions and nation-to-nation relationships.",
      "Highlights knowledge systems beyond written colonial records.",
    ],
    images: [
      { src: "/eras_1_images/wampum_belts.jpg", alt: "Haudenosaunee wampum belts" }
    ],
  },
  {
    id: "era1-5",
    title: "Droulers-Tsiionhiakwatha Village (c. 1450 CE)",
    x: 570,
    y: 170,
    summary:
      "A large, well-preserved St. Lawrence Iroquoian farming village with longhouse footprints, storage pits, and food remains documenting advanced agriculture and daily life before European settlement.",
    whyItMatters: [
      "Shows organized village planning and advanced agriculture.",
      "Provides strong archaeological evidence of pre-contact societies.",
      "Strengthens accurate understanding of Indigenous innovation and permanence.",
    ],
    images: [
      { src: "/eras_1_images/droulers_tsiionhiakwatha.jpg", alt: "Droulers-Tsiionhiakwatha village site (Québec)" }
    ],
  },
  {
    id: "era1-6",
    title: "Port au Choix Maritime Archaic Cemetery (c. 4400 BCE)",
    x: 690,
    y: 550,
    summary:
      "Maritime Archaic peoples created burial grounds on coastal terraces at Port au Choix, leaving exceptionally rich archaeological evidence of coastal lifeways and sea-based harvesting preserved in the landscape.",
    whyItMatters: [
      "Preserves rare evidence of early coastal Indigenous lifeways.",
      "Shows long-term relationship with marine environments.",
      "Strengthens understanding of early Atlantic Indigenous history.",
    ],
    images: [
      { src: "/eras_1_images/port_au_choix.jpg", alt: "Port au Choix Maritime Archaic Cemetery" }
    ],
  },
  {
    id: "era1-7",
    title: "Serpent Mounds (Rice Lake, Ontario) (c. 50 BCE)",
    x: 810,
    y: 155,
    summary:
      "A sacred burial complex forming a distinctive serpentine shape, preserving rare evidence of ceremony, community gathering, and ancestral honouring long before written colonial records.",
    whyItMatters: [
      "Provides physical proof of long-standing Indigenous ceremonial traditions.",
      "Documents burial practices and community gathering sites.",
      "Supports respectful commemoration and accurate historical education.",
    ],
    images: [
      { src: "/eras_1_images/serpent_mounds.jpg", alt: "Serpent Mounds burial complex (Ontario)" }
    ],
  },
  {
    id: "era1-8",
    title: "Corn (Maize) Cultivation Begins in Southern Ontario (c. 500 CE)",
    x: 930,
    y: 535,
    summary:
      "Indigenous communities began cultivating corn in southern Ontario, marking a shift toward horticulture that supported larger longhouse villages and more permanent community life in the Great Lakes–St. Lawrence region.",
    whyItMatters: [
      "Documents Indigenous agricultural innovation and food systems.",
      "Explains growth of permanent villages and longhouse communities.",
      "Provides verifiable evidence of early food production systems.",
    ],
    images: [
      { src: "/eras_1_images/maize_cultivation.jpg", alt: "Early maize cultivation in southern Ontario" }
    ],
  },


  ],
  era2: [
    {
    id: "era2-1",
    title: "Jacques Cartier’s First Voyage (1534)",
    x: 90,
    y: 150,
    summary:
      "In 1534, Jacques Cartier reached the Gaspé Peninsula and claimed the land for France, starting long-term European interest in the region.",
    whyItMatters: [
      "Marks an early French claim and exploration milestone.",
      "Helps explain why France expanded settlement later.",
      "Connects to early contact between Europeans and Indigenous peoples.",
    ],
    images: [{ src: "/eras_2_images/cartier_gaspe_1534.jpg", alt: "Jacques Cartier at Gaspé (1534)" }],
  },
  {
    id: "era2-2",
    title: "Founding of Quebec City (1608)",
    x: 210,
    y: 540,
    summary:
      "In 1608, Samuel de Champlain founded Quebec City, which became the capital of New France and a major centre of the fur trade.",
    whyItMatters: [
      "Represents the growth of permanent French settlement.",
      "Anchored political power and trade networks in New France.",
      "Shaped alliances, conflict, and cultural development in the region.",
    ],
    images: [{ src: "/eras_2_images/founding_quebec_1608.jpg", alt: "Founding of Quebec City (1608)" }],
  },
  {
    id: "era2-3",
    title: "Beaver Wars Begin (c. 1640s)",
    x: 330,
    y: 160,
    summary:
      "Beginning in the 1640s, conflicts in the Great Lakes and St. Lawrence regions intensified over control of fur trade routes, involving the Haudenosaunee, the French, and their Indigenous allies.",
    whyItMatters: [
      "Explains major shifts in Indigenous alliances and territory.",
      "Shows how the fur trade shaped conflict and diplomacy.",
      "Helps understand the long-term impact of colonial trade competition.",
    ],
    images: [{ src: "/eras_2_images/beaver_wars_1640s.jpg", alt: "Beaver Wars (fur trade conflicts)" }],
  },
  {
    id: "era2-4",
    title: "Creation of the Hudson’s Bay Company (1670)",
    x: 450,
    y: 530,
    summary:
      "In 1670, the British Crown chartered the Hudson’s Bay Company, granting it control over trade in Rupert’s Land and expanding the fur trade across northern Canada.",
    whyItMatters: [
      "Created one of the most powerful trading companies in North America.",
      "Expanded British economic influence across northern territories.",
      "Shaped settlement, mapping, and relationships with Indigenous nations.",
    ],
    images: [{ src: "/eras_2_images/hbc_1670.jpg", alt: "Hudson’s Bay Company (1670)" }],
  },
  {
    id: "era2-5",
    title: "Great Peace of Montreal (1701)",
    x: 570,
    y: 170,
    summary:
      "In 1701, France and more than 30 Indigenous nations signed a peace agreement in Montreal, helping end decades of conflict and strengthening diplomacy and trade.",
    whyItMatters: [
      "Highlights Indigenous diplomacy and nation-to-nation agreements.",
      "Reduced conflict and stabilized regional trade networks.",
      "A key example of negotiation shaping Canadian history.",
    ],
    images: [{ src: "/eras_2_images/great_peace_montreal_1701.jpg", alt: "Great Peace of Montreal (1701)" }],
  },
  {
    id: "era2-6",
    title: "Battle of the Plains of Abraham (1759)",
    x: 690,
    y: 550,
    summary:
      "In 1759, British forces defeated the French near Quebec City at the Plains of Abraham, leading to British control of New France.",
    whyItMatters: [
      "Major turning point that shifted Canada from French to British rule.",
      "Changed politics, language, and law across the region.",
      "Sets up the transition into the next era of British North America.",
    ],
    images: [{ src: "/eras_2_images/plains_of_abraham_1759.jpg", alt: "Plains of Abraham (1759)" }],
  },
],
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
};
