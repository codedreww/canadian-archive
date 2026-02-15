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
  era3: [
    {
    id: "era3-1",
    title: "Royal Proclamation of 1763",
    x: 90,
    y: 150,
    summary:
      "After the Seven Years’ War, Britain issued the Royal Proclamation of 1763, claiming much of North America and setting rules for governing new territories. It also recognized Indigenous land rights west of the Appalachian Mountains and required treaties before settlement.",
    whyItMatters: [
      "Shaped British–Indigenous relations and treaty processes.",
      "Established early frameworks for colonial governance.",
      "Laid foundations for Canada’s constitutional development.",
    ],
    images: [
      { src: "/eras_3_images/royal_proclamation_1763.jpg", alt: "Royal Proclamation of 1763" }
    ],
  },
  {
    id: "era3-2",
    title: "Quebec Act (1774)",
    x: 210,
    y: 540,
    summary:
      "The Quebec Act guaranteed freedom of worship for Catholics and restored French civil law and property rights to secure loyalty of the French-speaking population in Quebec under British rule.",
    whyItMatters: [
      "Protected French language, religion, and legal traditions.",
      "Strengthened loyalty of French Canadians to Britain.",
      "Influenced tensions leading to the American Revolutionary War.",
    ],
    images: [
      { src: "/eras_3_images/quebec_act_1774.jpg", alt: "Quebec Act of 1774" }
    ],
  },
  {
    id: "era3-3",
    title: "Constitutional Act (1791)",
    x: 330,
    y: 160,
    summary:
      "The Constitutional Act divided Quebec into Upper Canada and Lower Canada, each with its own elected assembly, marking the beginning of representative government in British North America.",
    whyItMatters: [
      "Introduced representative government structures.",
      "Created separate English and French political regions.",
      "Influenced later political reforms and self-government.",
    ],
    images: [
      { src: "/eras_3_images/constitutional_act_1791.jpg", alt: "Constitutional Act 1791" }
    ],
  },
  {
    id: "era3-4",
    title: "War of 1812 (1812–1814)",
    x: 450,
    y: 530,
    summary:
      "The War of 1812 was fought between the United States and Great Britain, with battles occurring across Upper and Lower Canada, the Great Lakes, and Atlantic regions.",
    whyItMatters: [
      "Helped preserve British North America from U.S. annexation.",
      "Strengthened a distinct Canadian identity.",
      "Demonstrated cooperation between British forces, settlers, and Indigenous allies.",
    ],
    images: [
      { src: "/eras_3_images/war_of_1812.jpg", alt: "War of 1812" }
    ],
  },
  {
    id: "era3-5",
    title: "Rebellions of 1837–1838",
    x: 570,
    y: 170,
    summary:
      "Uprisings in Upper and Lower Canada led by reformers protesting political corruption and lack of responsible government. Though suppressed, they exposed weaknesses in colonial governance.",
    whyItMatters: [
      "Revealed demand for political reform and self-government.",
      "Led to the Durham Report and calls for responsible government.",
      "Influenced the evolution of democratic institutions in Canada.",
    ],
    images: [
      { src: "/eras_3_images/rebellions_1837.jpg", alt: "Rebellions of 1837–1838" }
    ],
  },
  {
    id: "era3-6",
    title: "Act of Union (1840)",
    x: 690,
    y: 550,
    summary:
      "The Act of Union merged Upper and Lower Canada into the Province of Canada with a single legislature, aiming to unify governance and eventually leading toward responsible government.",
    whyItMatters: [
      "United Upper and Lower Canada into one political entity.",
      "Paved the way for responsible government reforms.",
      "Set the stage for cooperation between French and English political leaders.",
    ],
    images: [
      { src: "/eras_3_images/act_of_union_1840.jpg", alt: "Act of Union 1840" }
    ],
  },
  ],
  era4: [
   {
    id: "era4-1",
    title: "Canadian Confederation (1867)",
    x: 90,
    y: 150,
    summary:
      "In 1867, Canada became a country when Ontario, Quebec, Nova Scotia, and New Brunswick united to form the Dominion of Canada.",
    whyItMatters: [
      "Marks the formation of Canada as a self-governing dominion.",
      "Created the foundation for federal government and national expansion.",
      "A key turning point in Canadian political identity.",
    ],
    images: [{ src: "/eras_4_images/confederation_1867.jpg", alt: "Canadian Confederation (1867)" }],
  },
  {
    id: "era4-2",
    title: "Indian Act Passed (1876)",
    x: 210,
    y: 540,
    summary:
      "In 1876, the Indian Act gave the Canadian government extensive control over many aspects of Indigenous peoples’ governance, land, and daily life.",
    whyItMatters: [
      "A major law shaping Indigenous–Crown relations in Canada.",
      "Affected governance systems and control over reserve lands.",
      "Its impacts continue to be felt today.",
    ],
    images: [{ src: "/eras_4_images/indian_act_1876.jpg", alt: "Indian Act (1876)" }],
  },
  {
    id: "era4-3",
    title: "Residential School System Expansion (1883)",
    x: 330,
    y: 160,
    summary:
      "Beginning in the 1880s, the government expanded church-run residential schools to assimilate Indigenous children and suppress Indigenous languages and cultures.",
    whyItMatters: [
      "Explains a major policy that caused long-term harm to Indigenous communities.",
      "Central to understanding colonial institutions in Canada.",
      "Important for truth, education, and reconciliation.",
    ],
    images: [{ src: "/eras_4_images/residential_schools_1883.jpg", alt: "Residential school system expansion (1883)" }],
  },
  {
    id: "era4-4",
    title: "Banff National Park Established (1885)",
    x: 450,
    y: 530,
    summary:
      "In 1885, Banff became Canada’s first national park after hot springs were discovered near the Rocky Mountains, helping grow tourism and conservation.",
    whyItMatters: [
      "Canada’s first national park and a major conservation milestone.",
      "Helped shape tourism and rail expansion in Western Canada.",
      "Set a precedent for future protected areas.",
    ],
    images: [{ src: "/eras_4_images/banff_national_park_1885.jpg", alt: "Banff National Park (1885)" }],
  },
  {
    id: "era4-5",
    title: "Alberta and Saskatchewan Become Provinces (1905)",
    x: 570,
    y: 170,
    summary:
      "In 1905, Alberta and Saskatchewan officially joined Confederation as provinces, expanding Canada’s governance across the Prairies.",
    whyItMatters: [
      "Represents major westward growth and nation-building.",
      "Shaped Prairie settlement, government, and economy.",
      "A key step in building modern Canada’s provinces.",
    ],
    images: [{ src: "/eras_4_images/alberta_saskatchewan_1905.jpg", alt: "Alberta and Saskatchewan become provinces (1905)" }],
  },
  {
    id: "era4-6",
    title: "Canada Enters World War I (1914)",
    x: 690,
    y: 550,
    summary:
      "In 1914, Canada entered World War I after Britain declared war, beginning a major period of military mobilization and global involvement.",
    whyItMatters: [
      "A turning point in Canada’s national identity and international role.",
      "Led to major social, political, and economic changes at home.",
      "Sets up the next era’s major war-related events and impacts.",
    ],
    images: [{ src: "/eras_4_images/canada_enters_ww1_1914.jpg", alt: "Canada enters World War I (1914)" }],
  },


  ],
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
    title: "Canadian Citizenship Act (1947)",
    x: 90,
    y: 150,
    summary:
      "The Canadian Citizenship Act created a distinct Canadian citizenship for the first time, allowing people to hold a national identity separate from British subject status.",
    whyItMatters: [
      "Established a unique Canadian national identity.",
      "Marked a shift toward full legal independence.",
      "Strengthened the idea of Canadian citizenship and belonging.",
    ],
    images: [
      { src: "/eras_6_images/citizenship_act_1947.jpg", alt: "Canadian Citizenship Act 1947" }
    ],
  },
  {
    id: "era6-2",
    title: "Alouette 1 Satellite (1962)",
    x: 210,
    y: 540,
    summary:
      "Canada launched Alouette 1 in 1962, becoming the third nation in the world to design and build its own satellite and entering the space age.",
    whyItMatters: [
      "Showcased Canadian innovation in science and technology.",
      "Advanced research on the ionosphere and communications.",
      "Positioned Canada as a leader in space research.",
    ],
    images: [
      { src: "/eras_6_images/alouette_1_1962.jpg", alt: "Alouette 1 Satellite 1962" }
    ],
  },
  {
    id: "era6-3",
    title: "Universal Healthcare (Medical Care Act, 1966)",
    x: 330,
    y: 160,
    summary:
      "The Medical Care Act of 1966 established universal healthcare in Canada, ensuring access to essential medical services regardless of income.",
    whyItMatters: [
      "Made healthcare a fundamental right for Canadians.",
      "Reduced inequality in access to medical services.",
      "Became a defining feature of Canadian social policy.",
    ],
    images: [
      { src: "/eras_6_images/universal_healthcare_1966.jpg", alt: "Universal Healthcare Canada 1966" }
    ],
  },
  {
    id: "era6-4",
    title: "Constitution Act & Charter of Rights (1982)",
    x: 450,
    y: 530,
    summary:
      "The Constitution Act of 1982 gave Canada full legal independence from Britain and introduced the Canadian Charter of Rights and Freedoms.",
    whyItMatters: [
      "Completed Canada’s constitutional independence.",
      "Protected fundamental rights and freedoms.",
      "Strengthened democratic governance and rule of law.",
    ],
    images: [
      { src: "/eras_6_images/constitution_act_1982.jpg", alt: "Constitution Act 1982 and Charter of Rights" }
    ],
  },
  {
    id: "era6-5",
    title: "Calgary Winter Olympics (1988)",
    x: 570,
    y: 170,
    summary:
      "Calgary hosted the 1988 Winter Olympics, marking Canada’s first time hosting the Winter Games and boosting national pride and global recognition.",
    whyItMatters: [
      "Put Calgary on the global stage for sports and tourism.",
      "Boosted infrastructure and economic development.",
      "Strengthened national unity through international sport.",
    ],
    images: [
      { src: "/eras_6_images/calgary_olympics_1988.jpg", alt: "Calgary Winter Olympics 1988" }
    ],
  },
  {
    id: "era6-6",
    title: "Archie Search Engine (1990)",
    x: 690,
    y: 550,
    summary:
      "Developed at McGill University, Archie became the world’s first internet search engine, transforming how information could be located online.",
    whyItMatters: [
      "Pioneered search technology on the early internet.",
      "Influenced how modern search engines function today.",
      "Highlighted Canada’s contribution to global computing innovation.",
    ],
    images: [
      { src: "/eras_6_images/archie_search_engine_1990.jpg", alt: "Archie Search Engine 1990" }
    ],
  },
  {
    id: "era6-7",
    title: "Invention of Java (1995)",
    x: 810,
    y: 155,
    summary:
      "James Gosling, a University of Calgary alumnus, released Java in 1995, a programming language that now powers billions of devices worldwide.",
    whyItMatters: [
      "Revolutionized software development and cross-platform applications.",
      "Became one of the most widely used programming languages globally.",
      "Showcased Canadian influence on global technology innovation.",
    ],
    images: [
      { src: "/eras_6_images/java_1995.jpg", alt: "Java programming language release 1995" }
    ],
  },
  ],
};
