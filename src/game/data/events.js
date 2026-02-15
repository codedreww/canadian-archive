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
        {
          src: "/eras_1_images/head_smashed_in_buffalo_jump.jpg",
          alt: "Head-Smashed-In Buffalo Jump (Alberta)",
        },
      ],
      sources: [
        {
          label: "Head-Smashed-In Buffalo Jump (c. 3800 BCE, Alberta)",
          href: "https://whc.unesco.org/en/list/158/" ,
          note: "UNESCO World Heritage Centre. Head-Smashed-In Buffalo Jump. Archaeological site preserving thousands of years of Plains Indigenous communal hunting practices.",
        },
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
        {
          src: "/eras_1_images/writing_on_stone.jpg",
          alt: "Writing-on-Stone rock art (Alberta)",
        },
      ],
      sources: [
        {
          label: "Writing-on-Stone / Áísínai’pi Rock Art (1050 BCE–1800s, Alberta)",
          href: "https://parks.canada.ca/culture/spm-whs/sites-canada/sec02t",
          note: "Parks Canada. Writing-on-Stone Provincial Park / Áísínai’pi. Rock art landscape preserving Indigenous stories, knowledge, and spiritual meaning.",
        },
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
        {
          src: "/eras_1_images/thule_expansion.jpg",
          alt: "Thule migration across the Arctic",
        },
      ],
      sources: [
        {
          label: "Thule Expansion Across the Arctic (c. 1200 CE)",
          href: "https://thecanadianencyclopedia.ca/en/article/thule-culture",
          note: "The Canadian Encyclopedia. Thule Culture. Archaeological evidence linking ancient Arctic lifeways to Inuit communities today.",
        },
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
        {
          src: "/eras_1_images/wampum_belts.jpg",
          alt: "Haudenosaunee wampum belts",
        },
      ],
      sources: [
        {
          label: "Great Law of Peace & Wampum Belts (Haudenosaunee Confederacy)",
          href: "https://canadiangeographic.ca/articles/laws-braided-into-belts-three-haudenosaunee-wampum-belts-you-should-know/",
          note: "Canadian Geographic. Wampum belts as mnemonic records preserving Haudenosaunee laws, treaties, and governance traditions.",
        },
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
        {
          src: "/eras_1_images/droulers_tsiionhiakwatha.jpg",
          alt: "Droulers-Tsiionhiakwatha village site (Québec)",
        },
      ],
      sources: [
        {
          label: "Droulers-Tsiionhiakwatha Village (c. 1450 CE, Québec)",
          href: "https://www.pc.gc.ca/apps/dfhd/page_nhs_eng.aspx?id=11811",
          note: "Parks Canada. Droulers-Tsiionhiakwatha National Historic Site. Preserved St. Lawrence Iroquoian agricultural village remains.",
        },
      ]
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
        {
          src: "/eras_1_images/port_au_choix.jpg",
          alt: "Port au Choix Maritime Archaic Cemetery",
        },
      ],
      sources: [
        {
          label: "Port au Choix Maritime Archaic Cemetery (c. 4400 BCE, Newfoundland & Labrador)",
          href: "https://www.pc.gc.ca/apps/dfhd/page_nhs_eng.aspx?id=231",
          note: "Parks Canada. Port au Choix National Historic Site. Coastal burial grounds preserving Maritime Archaic lifeways.",
        },
      ]
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
        {
          src: "/eras_1_images/serpent_mounds.jpg",
          alt: "Serpent Mounds burial complex (Ontario)",
        },
      ],
      sources: [
        {
          label: "Serpent Mounds Burial Complex (c. 50 BCE, Ontario)",
          href: "https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=14407",
          note: "Historic Places Canada. Serpent Mounds. Sacred burial complex preserving ceremonial and ancestral practices.",
        },
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
        {
          src: "/eras_1_images/maize_cultivation.jpg",
          alt: "Early maize cultivation in southern Ontario",
        },
      ],
      sources: [
        {
          label: "Early Maize Cultivation in Southern Ontario (c. 500 CE)",
          href: "https://ontarioarchaeology.org/wp-content/uploads/oa025-04_noble.pdf",
          note: "Ontario Archaeological Society. Evidence of early maize cultivation and horticultural transition in the Great Lakes region.",
        },
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
      images: [
        {
          src: "/eras_2_images/cartier_gaspe_1534.jpg",
          alt: "Jacques Cartier at Gaspé (1534)",
        },
      ],
      sources: [
        {
          label: "Jacques Cartier’s First Voyage (1534)",
          href: "https://www.cwjefferys.ca/jacques-cartier-erects-a-cross-at-gaspe-1534",
          note: "C.W. Jefferys. Jacques Cartier erects a cross at Gaspé, 1534. Illustration depicting France’s claim to the territory and the beginning of sustained European interest in Canada.",
        },
      ],
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
      images: [
        {
          src: "/eras_2_images/founding_quebec_1608.jpg",
          alt: "Founding of Quebec City (1608)",
        },
      ],
      sources: [
        {
          label: "Founding of Quebec City (1608)",
          href: "https://commons.wikimedia.org/wiki/File:Fondation_de_la_ville_de_Quebec_par_Samuel_de_Champlain_en_1608.jpg",
          note: "Wikimedia Commons. Samuel de Champlain founding Quebec City in 1608, establishing the capital of New France and a centre of the fur trade.",
        },
      ],
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
      images: [
        {
          src: "/eras_2_images/beaver_wars_1640s.jpg",
          alt: "Beaver Wars (fur trade conflicts)",
        },
      ],
      sources: [
        {
          label: "Beaver Wars (c. 1640s)",
          href: "https://en.wikipedia.org/wiki/Beaver_Wars#/media/File:Champlain-Deffaite-des-Yroquois-au-Lac-Champlain-couleur.png",
          note: "Illustration of conflicts between the Haudenosaunee, French, and allied Indigenous nations over control of the fur trade in the Great Lakes and St. Lawrence regions.",
        },
      ],
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
      images: [
        {
          src: "/eras_2_images/hbc_1670.jpg",
          alt: "Hudson’s Bay Company (1670)",
        },
      ],
      sources: [
        {
          label: "Creation of the Hudson’s Bay Company (1670)",
          href: "https://en.wikipedia.org/wiki/Hudson%27s_Bay_Company#/media/File:In_1671_the_Hudson's_Bay_Company_sold_its_first_furs,_in_London.png",
          note: "Hudson’s Bay Company’s early fur trade operations following its 1670 royal charter granting control over Rupert’s Land.",
        },
      ],
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
      images: [
        {
          src: "/eras_2_images/great_peace_montreal_1701.jpg",
          alt: "Great Peace of Montreal (1701)",
        },
      ],
      sources: [
        {
          label: "Great Peace of Montreal (1701)",
          href: "https://interestsinthefurtrade.weebly.com/the-great-peace-of-montreal.html",
          note: "Peace treaty between France and more than 30 Indigenous nations ending decades of conflict and strengthening diplomatic and trade alliances.",
        },
      ],
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
      images: [
        {
          src: "/eras_2_images/plains_of_abraham_1759.jpg",
          alt: "Plains of Abraham (1759)",
        },
      ],
      sources: [
        {
          label: "Battle of the Plains of Abraham (1759)",
          href: "https://commons.wikimedia.org/wiki/File:PlainesAbraham.jpg",
          note: "Wikimedia Commons. British victory over French forces at Quebec City, leading to British control of New France.",
        },
      ],
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
        {
          src: "/eras_3_images/royal_proclamation_1763.jpg",
          alt: "Royal Proclamation of 1763",
        },
      ],
      sources: [
        {
          label: "Image : Royal Proclamation, King George III of England",
          note: "Issued October 7, 1763. Broadside. Library and Archives Canada / e010778430.",
        },
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
        {
          src: "/eras_3_images/quebec_act_1774.jpg",
          alt: "Quebec Act of 1774",
        },
      ],

      sources: [
        {
          label: "Quebec Act, 1774",
          href: "https://thecanadianencyclopedia.ca/en/article/quebec-act",
          note: 'Dagenais, Maxime. "Quebec Act, 1774". The Canadian Encyclopedia, 11 May 2020, Historica Canada. Accessed 15 February 2026.',
        },
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
        {
          src: "/eras_3_images/constitutional_act_1791.jpg",
          alt: "Constitutional Act 1791",
        },
      ],
      sources: [
        {
          label: "Constitutional Act, 1791",
          href: "https://www.thecanadianencyclopedia.ca/en/article/constitutional-act-1791",
          note: 'Tousignant, Pierre. "Constitutional Act, 1791". The Canadian Encyclopedia, 23 April 2020, Historica Canada. Accessed 15 February 2026.',
        },
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
        {
          src: "/eras_3_images/war_of_1812.jpg",
          alt: "War of 1812",
        },
      ],
      sources: [
        {
          label: "Image: The Battle of New Orleans",
          href: "http://thecanadianencyclopedia.ca/en/article/war-of-1812",
          note: "This painting by Edward Percy Moran depicts the last major confrontation of the War of 1812, the Battle of New Orleans. The battle is best remembered for General Andrew Jackson's stiff resistance to British incursion and for the death of British Major General Edward Pakenham.(courtesy Library of Congress / LC-USZC2-3796)",
        },
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
        {
          src: "/eras_3_images/rebellions_1837.jpg",
          alt: "Rebellions of 1837–1838",
        },
      ],
      sources: [
        {
          label:
            "Image: attle of St. Eustache Front view of the Church of St. Eustache Occupied by the Insurgents. ",
          href: "http://thecanadianencyclopedia.ca/en/article/battle-of-st-eustache",
          note: "The Artillery Forcing an Entrance, Artist: Lord Charles Beauclerk, 14 December 1837. Bound in volume entitled, 'Lithographic Views of Military Operations in Canada'. A. Flint: London, 1840. Library and Archives Canada, Acc. No. 1992-566-2",
        },
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
        {
          src: "/eras_3_images/act_of_union_1840.jpg",
          alt: "Act of Union 1840",
        },
      ],
      sources: [
        {
          label: "Act of Union (1840)",
          href: "http://thecanadianencyclopedia.ca/en/article/act-of-union",
          note: "Monet, Jacques. Act of Union united Upper and Lower Canada into the Province of Canada and laid groundwork for responsible government.",
        },
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
      images: [
        {
          src: "/eras_4_images/confederation_1867.jpg",
          alt: "Canadian Confederation (1867)",
        },
      ],
      sources: [
        {
          label: "Canadian Confederation (1867)",
          href: "https://en.wikipedia.org/wiki/Canadian_Confederation#/media/File:Fathers_of_Confederation_LAC_c001855.jpg",
          note: "Library and Archives Canada. Fathers of Confederation. Formation of the Dominion of Canada uniting Ontario, Quebec, Nova Scotia, and New Brunswick.",
        },
      ],
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
      images: [
        {
          src: "/eras_4_images/indian_act_1876.jpg",
          alt: "Indian Act (1876)",
        },
      ],
      sources: [
        {
          label: "Indian Act (1876)",
          href: "https://www.timetoast.com/timelines/the-indian-act_tanish",
          note: "Legislation granting the Canadian government control over Indigenous governance, lands, and legal status.",
        },
      ],
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
      images: [
        {
          src: "/eras_4_images/residential_schools_1883.jpg",
          alt: "Residential school system expansion (1883)",
        },
      ],
      sources: [
        {
          label: "Residential School System Expansion (1880s)",
          href: "https://en.wikipedia.org/wiki/Canadian_Indian_residential_school_system",
          note: "Government-supported church-run schools aimed at assimilating Indigenous children and suppressing languages and cultures.",
        },
      ],
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
      images: [
        {
          src: "/eras_4_images/banff_national_park_1885.jpg",
          alt: "Banff National Park (1885)",
        },
      ],
      sources: [
        {
          label: "Banff National Park Established (1885)",
          href: "https://en.wikipedia.org/wiki/Banff_National_Park",
          note: "Canada’s first national park, established following the discovery of natural hot springs and the expansion of the railway.",
        },
      ],
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
      images: [
        {
          src: "/eras_4_images/alberta_saskatchewan_1905.jpg",
          alt: "Alberta and Saskatchewan become provinces (1905)",
        },
      ],
      sources: [
        {
          label: "Alberta & Saskatchewan Become Provinces (1905)",
          href: "https://commons.wikimedia.org/wiki/File:Canada_provinces_1905-1912.png",
          note: "Map showing the creation of Alberta and Saskatchewan, marking western expansion and prairie settlement.",
        },
      ],
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
      images: [
        {
          src: "/eras_4_images/canada_enters_ww1_1914.jpg",
          alt: "Canada enters World War I (1914)",
        },
      ],
      sources: [
        {
          label: "Canada Enters World War I (1914)",
          href: "https://en.wikipedia.org/wiki/Canada_in_World_War_I#/media/File:48th_Highlanders,_12th_Infantry,_&_10th_Royal_leave_Toronto_for_camp_(LOC_ggbain.16977).jpg",
          note: "Library of Congress image. Canadian troops departing for war following Britain’s declaration, marking Canada’s global military involvement.",
        },
      ],
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
      images: [
        {
          src: "/eras_5_images/BattleOfVimyRidge.jpg",
          alt: "Battle of Vimy Ridge",
        },
      ],
      sources: [
        {
          label: "Battle of Vimy Ridge (April 9-12, 1917)",
          href: "https://commons.wikimedia.org/wiki/File:Richard_Jack-The_Taking_of_Vimy_Ridge_(CWM_19710261-0160).jpg",
          note: 'Tousignant, Pierre. "Constitutional Act, 1791". The Canadian Encyclopedia, 23 April 2020, Historica Canada. Accessed 15 February 2026.',
        },
      ],
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
      images: [
        {
          src: "/eras_5_images/Anti-conscription_parade_at_Victoria_Square.jpg",
          alt: "Conscription Crisis 1917",
        },
      ],
      sources: [
        {
          label: "Conscription Crisis (1917)",
          href: "https://commons.wikimedia.org/w/index.php?curid=8302392",
          note: "Unknown author. Library and Archives Canada image. Public Domain. Wikimedia Commons.",
        },
      ],
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
      images: [
        {
          src: "/eras_5_images/Women's_suffrage.jpg",
          alt: "Women gain federal voting rights in 1918",
        },
      ],
      sources: [
        {
          label: "Women’s Suffrage Movement",
          href: "https://www.govexec.com/management/2019/06/what-womens-suffrage-tells-us-about-empowerment/157450/",
          note: "Government Executive. 'What Women’s Suffrage Tells Us About Empowerment.' 2019.",
        },
      ],
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
      images: [
        {
          src: "/eras_5_images/PeaceTreaty.jpg",
          alt: "Canada and Treaty of Versailles",
        },
      ],
      sources: [
        {
          label: "Paris Peace Treaty (1919)",
          href: "https://wartimecanada.ca/sites/default/files/documents/CanadaPeace.1919.pdf",
          note: "Government of Canada. Canada Peace Treaty document, 1919.",
        },
      ],
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
      images: [
        {
          src: "/eras_5_images/WinnipegGeneralStrike.jpg",
          alt: "Winnipeg General Strike of 1919",
        },
      ],
      sources: [
        {
          label: "Winnipeg General Strike (1919)",
          href: "https://commons.wikimedia.org/w/index.php?curid=3127577",
          note: "Foote, L.B. Winnipeg General Strike photograph. Library and Archives Canada. Public Domain.",
        },
      ],
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
      images: [
        {
          src: "/eras_5_images/Great_depression.jpg",
          alt: "The Great Depression in Canada",
        },
      ],
      sources: [
        {
          label: "Great Depression Relief March (c. 1930)",
          href: "https://thecanadianencyclopedia.ca/en/article/great-depression",
          note: "Library and Archives Canada. The Single Men's Unemployed Association march in Toronto. Courtesy of The Canadian Encyclopedia.",
        },
      ],
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
      images: [
        {
          src: "/eras_5_images/world_war_2.jpg",
          alt: "World War II in Canada",
        },
      ],
      sources: [
        {
          label: "Canadian Sherman Tanks in France (1944)",
          href: "https://www.warmuseum.ca/remembrance-day-resources/canada-and-the-second-world-war",
          note: "Grant, Lieut. Donald I. Department of National Defence / Library and Archives Canada.",
        },
      ],
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
      images: [
        {
          src: "/eras_5_images/Internment_of_japanese_canadians.jpg",
          alt: "Internment of Japanese Canadians",
        },
      ],
      sources: [
        {
          label: "Japanese Canadian Internment Relocation (1942)",
          href: "https://thecanadianencyclopedia.ca/en/article/internment-of-japanese-canadians",
          note: "Library and Archives Canada. Japanese Canadians being relocated in British Columbia, 1942.",
        },
      ],
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
        {
          src: "/eras_6_images/citizenship_act_1947.jpg",
          alt: "Canadian Citizenship Act 1947",
        },
      ],
      sources: [
        {
          label: "Canadian Citizenship Act (1947)",
          href: "https://thecanadianencyclopedia.ca/en/article/citizenship",
          note: "The Canadian Encyclopedia. The Citizenship Act created a distinct Canadian citizenship, strengthening national identity and legal independence.",
        },
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
        {
          src: "/eras_6_images/alouette_1_1962.jpg",
          alt: "Alouette 1 Satellite 1962",
        },
      ],
      sources: [
        {
          label: "Alouette 1 Satellite Launch (1962)",
          href: "https://ingeniumcanada.org/channel/articles/alouette-gentille-alouette-alouette-je-te-lancerai-or-how-the-cold-war-propelled",
          note: "Ingenium Canada. Alouette 1 made Canada the third country to design and launch its own satellite, advancing space science and communications research.",
        },
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
        {
          src: "/eras_6_images/universal_healthcare_1966.jpg",
          alt: "Universal Healthcare Canada 1966",
        },
      ],
      sources: [
        {
          label: "Universal Healthcare – Medical Care Act (1966)",
          href: "https://brighttax.com/blog/how-healthcare-in-canada-actually-works/",
          note: "Medical Care Act established universal publicly funded healthcare, ensuring access regardless of income and becoming a defining national social policy.",
        },
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
        {
          src: "/eras_6_images/constitution_act_1982.jpg",
          alt: "Constitution Act 1982 and Charter of Rights",
        },
      ],
      sources: [
        {
          label: "Constitution Act & Charter of Rights and Freedoms (1982)",
          href: "https://thecanadianencyclopedia.ca/en/article/constitution-act-1867",
          note: "The Canadian Encyclopedia. Patriation of the Constitution granted Canada full legal independence and introduced the Charter of Rights and Freedoms.",
        },
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
        {
          src: "/eras_6_images/calgary_olympics_1988.jpg",
          alt: "Calgary Winter Olympics 1988",
        },
      ],
      sources: [
        {
          label: "Calgary Winter Olympics (1988)",
          href: "https://en.wikipedia.org/wiki/1988_Winter_Olympics",
          note: "Calgary hosted Canada’s first Winter Olympics, elevating the city’s global profile and advancing winter sport infrastructure.",
        },
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
        {
          src: "/eras_6_images/archie_search_engine_1990.jpg",
          alt: "Archie Search Engine 1990",
        },
      ],
      sources: [
        {
          label: "Archie Search Engine Invented (1990)",
          href: "https://www.rellify.com/blog/evolution-of-search-engines",
          note: "Developed at McGill University, Archie became the world’s first internet search engine, transforming how information is discovered online.",
        },
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
        {
          src: "/eras_6_images/java_1995.jpg",
          alt: "Java programming language release 1995",
        },
      ],
      sources: [
        {
        label: "Java Programming Language Released (1995)",
        href: "https://en.wikipedia.org/wiki/Java_(programming_language)",
        note: "Created by James Gosling, a University of Calgary alumnus, Java became one of the world’s most widely used programming languages.",
      },
      ],
    },
  ],
};
