/* Discover Canada — structured course content */
window.COURSE = {
  exam: {
    questions: 20,
    minutes: 45,
    passScore: 15,
    passPercent: 75,
    attempts: 3,
    format: 'Online proctored exam (webcam) for most applicants in 2026'
  },

  modules: [
    {
      id: 'rights',
      title: 'Rights and Responsibilities of Citizenship',
      shortTitle: 'Rights & Duties',
      navSubtitle: 'Charter and official languages',
      duration: '8 minutes',
      objectives: [
        'Identify the six categories of rights protected by the Canadian Charter of Rights and Freedoms',
        'Distinguish between types of rights when given a scenario on the exam',
        'Name core responsibilities that accompany Canadian citizenship'
      ],
      examTip: 'Examiners often ask which category of right applies—for example, mobility, legal, or democratic rights.',
      sections: [
        {
          title: 'The Canadian Charter of Rights and Freedoms',
          items: [
            'The Charter is part of the Constitution Act, 1982 and protects the rights and freedoms of Canadians.',
            'Six categories of rights: (1) Fundamental freedoms—expression, religion, peaceful assembly, press, and association; (2) Democratic rights—vote and stand for office at age 18 and older; (3) Mobility rights—live and work anywhere in Canada and enter or leave the country freely; (4) Legal rights—fair trial, protection from unreasonable search, right to a lawyer; (5) Equality rights—equal treatment without discrimination based on race, national or ethnic origin, colour, religion, sex, age, or mental or physical disability; (6) Language rights—English and French have equal status in dealings with the federal government.',
            'The Official Languages Act (1969) confirms English and French as Canada\'s two official languages.',
            'New Brunswick is the only officially bilingual province.',
            'Quebec is the only province with a majority French-speaking population.'
          ]
        },
        {
          title: 'Responsibilities of Citizens',
          items: [
            'Obey the law, pay taxes, and vote in federal, provincial, and local elections.',
            'Serve on a jury when called, respect the rights and freedoms of others, and contribute to the community.',
            'Defend Canada if the need should ever arise.'
          ]
        }
      ],
      flashcards: [
        { front: 'What document protects the rights and freedoms of Canadians?', back: 'The Canadian Charter of Rights and Freedoms, part of the Constitution Act, 1982.' },
        { front: 'Name Canada\'s two official languages.', back: 'English and French.' },
        { front: 'Which province is the only officially bilingual province?', back: 'New Brunswick.' },
        { front: 'What type of right allows you to live and work anywhere in Canada?', back: 'A mobility right.' },
        { front: 'What type of right includes the right to a fair trial?', back: 'A legal right.' },
        { front: 'At what age can Canadians vote in federal elections?', back: '18 years of age and older.' }
      ],
      quiz: [
        {
          question: 'Which document contains the Canadian Charter of Rights and Freedoms?',
          options: ['Constitution Act, 1982', 'Official Languages Act, 1969', 'Quebec Act, 1774', 'Statute of Westminster, 1931'],
          correct: 0
        },
        {
          question: 'Which province is officially bilingual?',
          options: ['Quebec', 'New Brunswick', 'Ontario', 'Manitoba'],
          correct: 1
        },
        {
          question: 'The right to vote is an example of which category of rights?',
          options: ['Mobility rights', 'Democratic rights', 'Language rights', 'Equality rights'],
          correct: 1
        }
      ]
    },
    {
      id: 'whoweare',
      title: 'Who We Are: Indigenous Peoples and Diversity',
      shortTitle: 'Who We Are',
      navSubtitle: 'First Nations, Métis, Inuit',
      duration: '7 minutes',
      objectives: [
        'Name and distinguish the three main groups of Indigenous peoples in Canada',
        'Understand Aboriginal rights under the Constitution',
        'Describe Canada\'s commitment to multiculturalism'
      ],
      examTip: 'Know where Métis and Inuit peoples primarily live, and the meaning of the word "Inuit."',
      sections: [
        {
          title: 'Indigenous Peoples',
          items: [
            'Three main groups: First Nations (hundreds of nations across Canada), Métis (mixed European and First Nations heritage, mainly in the Prairie provinces), and Inuit (Arctic peoples—the word Inuit means "the people").',
            'Aboriginal rights are recognized under Section 35 of the Constitution Act, 1982.',
            'Residential schools were part of a harmful assimilation policy—a significant and painful chapter in Canadian history.',
            'Louis Riel was a prominent Métis leader who led the Red River Resistance (1869–1870).'
          ]
        },
        {
          title: 'Diversity and International Membership',
          items: [
            'Canada\'s population is approximately 38 million; most Canadians live in cities, especially in the Quebec City–Windsor corridor.',
            'The Canadian Multiculturalism Act (1988) recognizes cultural diversity as a fundamental value.',
            'Canada is a member of the Commonwealth (54 countries, most formerly part of the British Empire) and La Francophonie (French-speaking nations worldwide).'
          ]
        }
      ],
      flashcards: [
        { front: 'Name the three main groups of Aboriginal peoples in Canada.', back: 'First Nations, Métis, and Inuit.' },
        { front: 'What does the word "Inuit" mean?', back: '"The people."' },
        { front: 'Where do most Métis people live?', back: 'The Prairie provinces: Manitoba, Saskatchewan, and Alberta.' },
        { front: 'Who was Louis Riel?', back: 'A famous Métis leader who led the Red River Resistance.' },
        { front: 'What is the basis for Aboriginal rights in Canada?', back: 'Section 35 of the Constitution Act, 1982.' }
      ],
      quiz: [
        {
          question: 'Where do the majority of Métis people live?',
          options: ['Atlantic Canada', 'Prairie provinces', 'British Columbia', 'Northern territories only'],
          correct: 1
        },
        {
          question: 'The Inuit primarily live in which region?',
          options: ['Prairie provinces', 'The Arctic', 'Southern Ontario', 'Atlantic coast'],
          correct: 1
        },
        {
          question: 'Aboriginal rights are protected under which part of the Constitution?',
          options: ['Section 35', 'Section 91', 'The Quebec Act', 'The Official Languages Act'],
          correct: 0
        }
      ]
    },
    {
      id: 'hist1',
      title: 'History: Beginnings to Confederation (1497–1867)',
      shortTitle: 'Early History',
      navSubtitle: 'Exploration to 1867',
      duration: '10 minutes',
      objectives: [
        'Place key explorers, battles, and acts on a timeline from first contact to Confederation',
        'Explain how French and British communities coexisted after 1763',
        'Name the four founding provinces and first Prime Minister'
      ],
      examTip: 'High-frequency facts: John Cabot (1497), Quebec City founded 1608, Plains of Abraham 1759, Confederation July 1, 1867.',
      sections: [
        {
          title: 'European Exploration and New France',
          items: [
            '1497 — John Cabot, sailing for England, mapped Canada\'s east coast.',
            '1534 — Jacques Cartier claimed the St. Lawrence region for France.',
            '1608 — Samuel de Champlain founded Quebec City, the first permanent European settlement.',
            'New France developed around the fur trade and alliances with First Nations.'
          ]
        },
        {
          title: 'British Rule and Coexistence',
          items: [
            '1759 — Battle of the Plains of Abraham: British victory ended French military rule in North America.',
            '1763 — Treaty of Paris: France ceded Canada to Britain.',
            '1774 — Quebec Act: French Canadians retained their language, Catholic religion, and civil law.',
            'After the American Revolution, approximately 40,000 to 50,000 United Empire Loyalists came to Canada.',
            '1791 — Constitutional Act divided the colony into Upper Canada (English) and Lower Canada (French).',
            '1848 — Responsible government first achieved in Nova Scotia: the executive must maintain the confidence of the elected assembly.'
          ]
        },
        {
          title: 'Confederation',
          items: [
            'July 1, 1867 — Canada became a self-governing Dominion (now celebrated as Canada Day).',
            'Founding provinces: Ontario, Quebec, Nova Scotia, and New Brunswick.',
            'First Prime Minister: Sir John A. Macdonald.',
            'National motto: "A Mari Usque Ad Mare" — "From Sea to Sea."'
          ]
        }
      ],
      flashcards: [
        { front: 'Who founded Quebec City and in what year?', back: 'Samuel de Champlain, 1608.' },
        { front: 'What happened at the Battle of the Plains of Abraham (1759)?', back: 'The British defeated the French, ending French military power in North America.' },
        { front: 'When did Confederation take place?', back: 'July 1, 1867.' },
        { front: 'Name the four founding provinces.', back: 'Ontario, Quebec, Nova Scotia, and New Brunswick.' },
        { front: 'Who was Canada\'s first Prime Minister?', back: 'Sir John A. Macdonald.' }
      ],
      quiz: [
        {
          question: 'When did Canada become a self-governing Dominion?',
          options: ['July 1, 1867', 'April 9, 1917', 'July 1, 1982', 'November 11, 1918'],
          correct: 0
        },
        {
          question: 'The Quebec Act of 1774 allowed French Canadians to keep which of the following?',
          options: ['Only English common law', 'Language, religion, and civil law', 'Independence from Britain', 'A republican government'],
          correct: 1
        },
        {
          question: 'Who was the first European since the Vikings to map Canada\'s east coast (1497)?',
          options: ['Jacques Cartier', 'John Cabot', 'Samuel de Champlain', 'General Wolfe'],
          correct: 1
        }
      ]
    },
    {
      id: 'hist2',
      title: 'History: Building the Nation (1867–1914)',
      shortTitle: 'Nation Building',
      navSubtitle: 'Railway and expansion',
      duration: '7 minutes',
      objectives: [
        'Explain westward expansion and the role of the transcontinental railway',
        'Describe the significance of Louis Riel in Canadian history',
        'Identify Sir Wilfrid Laurier\'s place in Canadian political history'
      ],
      examTip: 'The completion of the Canadian Pacific Railway (1885) and Louis Riel\'s fate are frequently tested.',
      sections: [
        {
          title: 'Westward Expansion',
          items: [
            '1869–1870 — Red River Resistance: Louis Riel led the Métis; Manitoba entered Confederation in 1870.',
            '1871 — British Columbia joined Confederation with the promise of a transcontinental railway.',
            '1873 — Prince Edward Island joined Confederation.',
            '1885 — Canadian Pacific Railway completed, linking Canada from coast to coast and enabling western settlement.',
            '1885 — Northwest Resistance: Louis Riel was captured, tried for treason, and executed—deeply divisive across the country.',
            '1896–1911 — Sir Wilfrid Laurier served as Canada\'s first French Canadian Prime Minister during a period of large-scale immigration to the West.'
          ]
        }
      ],
      flashcards: [
        { front: 'What made western settlement possible after 1885?', back: 'Completion of the Canadian Pacific Railway.' },
        { front: 'Why did British Columbia join Confederation in 1871?', back: 'In exchange for the promise of a transcontinental railway.' },
        { front: 'What happened to Louis Riel after the Northwest Resistance?', back: 'He was tried for treason and executed in 1885.' },
        { front: 'Who was the first French Canadian Prime Minister?', back: 'Sir Wilfrid Laurier (1896–1911).' }
      ],
      quiz: [
        {
          question: 'The Canadian Pacific Railway was completed in which year?',
          options: ['1867', '1871', '1885', '1914'],
          correct: 2
        },
        {
          question: 'Who was Canada\'s first French Canadian Prime Minister?',
          options: ['Sir John A. Macdonald', 'Lester B. Pearson', 'Sir Wilfrid Laurier', 'Pierre Trudeau'],
          correct: 2
        },
        {
          question: 'Manitoba entered Confederation partly as a result of which event?',
          options: ['Klondike Gold Rush', 'Red River Resistance', 'War of 1812', 'Dieppe Raid'],
          correct: 1
        }
      ]
    },
    {
      id: 'hist3',
      title: 'History: Wars and the Modern Era',
      shortTitle: 'Modern History',
      navSubtitle: 'World wars to today',
      duration: '10 minutes',
      objectives: [
        'Explain how the World Wars shaped Canadian identity and independence',
        'Recall major post-war milestones including the flag, anthem, and Charter',
        'Identify notable modern figures such as Lester B. Pearson and Terry Fox'
      ],
      examTip: 'Vimy Ridge (April 9, 1917), Juno Beach on D-Day, and the years 1949, 1965, 1980, 1982, and 1999 appear often.',
      sections: [
        {
          title: 'First World War (1914–1918)',
          items: [
            'April 9, 1917 — Battle of Vimy Ridge: all four divisions of the Canadian Corps fought together for the first time—a defining moment in national identity.',
            '1918 — Women gained the right to vote in federal elections (some provinces granted it earlier).',
            '1919 — Winnipeg General Strike: one of the largest labour actions in Canadian history.'
          ]
        },
        {
          title: 'Second World War (1939–1945)',
          items: [
            'Canada declared war independently, demonstrating full sovereignty.',
            'June 6, 1944 — D-Day: Canadian forces landed at Juno Beach in Normandy, France.',
            'The Battle of the Atlantic and Dieppe Raid (1942) are also significant.'
          ]
        },
        {
          title: 'Post-War and Contemporary Canada',
          items: [
            '1949 — Newfoundland and Labrador became the last province to join Confederation.',
            'Lester B. Pearson won the Nobel Peace Prize (1957) for his role in United Nations peacekeeping; as Prime Minister he introduced the new flag (1965) and Medicare.',
            '1980 — "O Canada" became the official national anthem.',
            '1982 — Constitution Act patriated; Charter of Rights and Freedoms enacted.',
            '1999 — Nunavut created as a territory and Inuit homeland.',
            'Terry Fox ran the Marathon of Hope (1980) to raise cancer awareness.'
          ]
        }
      ],
      flashcards: [
        { front: 'Why is Vimy Ridge significant?', back: 'All four Canadian divisions fought together for the first time, April 9, 1917.' },
        { front: 'Which beach did Canadians land on during D-Day?', back: 'Juno Beach, Normandy, France, June 6, 1944.' },
        { front: 'Which was the last province to join Canada?', back: 'Newfoundland and Labrador, 1949.' },
        { front: 'When was the current Canadian flag adopted?', back: '1965.' },
        { front: 'When was Nunavut created?', back: '1999.' }
      ],
      quiz: [
        {
          question: 'When did women gain the federal vote in Canada?',
          options: ['1916', '1918', '1945', '1982'],
          correct: 1
        },
        {
          question: 'Who is associated with United Nations peacekeeping and the Nobel Peace Prize (1957)?',
          options: ['Sir John A. Macdonald', 'Lester B. Pearson', 'Terry Fox', 'Louis Riel'],
          correct: 1
        },
        {
          question: 'When was the Charter of Rights and Freedoms enacted?',
          options: ['1965', '1980', '1982', '1999'],
          correct: 2
        }
      ]
    },
    {
      id: 'govt',
      title: 'How Canadian Government Works',
      shortTitle: 'Government',
      navSubtitle: 'Institutions and levels',
      duration: '10 minutes',
      objectives: [
        'Distinguish head of state from head of government',
        'Describe the three branches and three levels of government',
        'Explain the roles of the Senate and House of Commons'
      ],
      examTip: 'Know the three parts of Parliament, 105 senators, 338 Members of Parliament, and the meaning of responsible government.',
      sections: [
        {
          title: 'System of Government',
          items: [
            'Canada is a constitutional monarchy, a parliamentary democracy, and a federal state.',
            'Head of State: the Sovereign (King Charles III), represented federally by the Governor General and provincially by Lieutenant Governors.',
            'Head of Government: the Prime Minister, leader of the party with the most seats in the House of Commons.',
            'Parliament consists of the Crown, the Senate, and the House of Commons.'
          ]
        },
        {
          title: 'Three Branches',
          items: [
            'Executive — Prime Minister and Cabinet propose and administer laws.',
            'Legislative — Parliament debates and passes laws.',
            'Judicial — courts interpret and apply laws; the Supreme Court of Canada is the final appeal.'
          ]
        },
        {
          title: 'Senate, House of Commons, and Federalism',
          items: [
            '105 senators appointed until age 75; the Senate provides "sober second thought" on legislation.',
            '338 elected Members of Parliament, each representing one riding.',
            'Federal responsibilities include defence, criminal law, banking, immigration, and interprovincial trade.',
            'Provincial responsibilities include education, health care, highways, and natural resources.',
            'Municipal governments handle local roads, parks, police, water, and waste collection.',
            'The Supreme Court of Canada has nine judges.'
          ]
        }
      ],
      flashcards: [
        { front: 'Who is Canada\'s head of state?', back: 'The Sovereign (King Charles III).' },
        { front: 'What are the three parts of Parliament?', back: 'The Crown, the Senate, and the House of Commons.' },
        { front: 'How many senators does Canada have?', back: '105.' },
        { front: 'How many Members of Parliament are elected?', back: '338.' },
        { front: 'What does responsible government mean?', back: 'The Cabinet must hold the confidence of a majority of elected Members in the House of Commons.' }
      ],
      quiz: [
        {
          question: 'Who represents the Sovereign at the federal level?',
          options: ['The Prime Minister', 'The Governor General', 'The Chief Justice', 'The Speaker of the Senate'],
          correct: 1
        },
        {
          question: 'How many members sit in the House of Commons?',
          options: ['105', '338', '100', '50'],
          correct: 1
        },
        {
          question: 'Which is a provincial responsibility?',
          options: ['National defence', 'Immigration', 'Education', 'Banking'],
          correct: 2
        }
      ]
    },
    {
      id: 'elections',
      title: 'Elections and Democracy',
      shortTitle: 'Elections',
      navSubtitle: 'Voting and elections',
      duration: '6 minutes',
      objectives: [
        'State who may vote in federal elections',
        'Define key election vocabulary used on the test',
        'Describe how federal governments are formed'
      ],
      examTip: 'Exact phrases such as "polling station" and "returning officer" appear on the real exam.',
      sections: [
        {
          title: 'Federal Elections',
          items: [
            'Federal elections must be held at least every four years.',
            '338 electoral districts (ridings); each elects one Member of Parliament.',
            'Eligible voters: Canadian citizens aged 18 and older who are on the voters list.',
            'Elections Canada is the independent agency that administers federal elections.',
            'A returning officer runs the election in each riding.',
            'A polling station is where you cast your ballot in person.',
            'If you do not receive a voter information card, contact Elections Canada.',
            'First-past-the-post: the candidate with the most votes wins the riding.',
            'A majority government holds more than half the seats; a minority government has the most seats but less than half.'
          ]
        }
      ],
      flashcards: [
        { front: 'Who may vote in a federal election?', back: 'Canadian citizens who are 18 years of age or older.' },
        { front: 'What is a polling station?', back: 'The place where you go to vote.' },
        { front: 'How many federal ridings are there?', back: '338.' },
        { front: 'What should you do if you do not receive a voter information card?', back: 'Contact Elections Canada.' }
      ],
      quiz: [
        {
          question: 'What is a returning officer?',
          options: ['Leader of the Opposition', 'Official who runs the election in a riding', 'Member of the Senate', 'Head of Elections Canada'],
          correct: 1
        },
        {
          question: 'How often must federal elections be held?',
          options: ['Every two years', 'At least every four years', 'Every six years', 'Only when the King requests'],
          correct: 1
        },
        {
          question: 'What is a minority government?',
          options: ['A government with more than half the seats', 'A government with the most seats but less than half', 'A government without a Prime Minister', 'A government appointed by the Senate'],
          correct: 1
        }
      ]
    },
    {
      id: 'justice',
      title: 'The Justice System',
      shortTitle: 'Justice',
      navSubtitle: 'Law and courts',
      duration: '5 minutes',
      objectives: [
        'State foundational principles such as the rule of law and presumption of innocence',
        'Describe how police, courts, and Parliament relate to lawmaking',
        'Identify Legal Aid and the role of the Royal Canadian Mounted Police'
      ],
      examTip: '"Innocent until proven guilty" and "rule of law" are among the most common questions in this section.',
      sections: [
        {
          title: 'Principles and Institutions',
          items: [
            'Rule of law: everyone, including the government, must obey the law.',
            'Presumption of innocence: an accused person is innocent until proven guilty in court.',
            'Right to a fair trial and to legal counsel are protected under the Charter.',
            'Summary offences are minor; indictable offences are serious and may involve a jury.',
            'Serving on a jury when called is a civic responsibility for citizens 18 and older.',
            'Legal Aid provides assistance in most communities if you cannot afford a lawyer.',
            'Police enforce laws, courts interpret them, and Parliament makes them.',
            'The Royal Canadian Mounted Police (RCMP) is the national police force, also known as the Mounties.'
          ]
        }
      ],
      flashcards: [
        { front: 'What does "rule of law" mean?', back: 'Everyone, including the government, must obey the law.' },
        { front: 'What is presumption of innocence?', back: 'An accused person is considered innocent until proven guilty in court.' },
        { front: 'Where can you get help if you cannot afford a lawyer?', back: 'Legal Aid Services, available in most communities.' },
        { front: 'What is the RCMP?', back: 'The Royal Canadian Mounted Police—Canada\'s national police force.' }
      ],
      quiz: [
        {
          question: 'Who makes federal laws in Canada?',
          options: ['The police', 'Parliament', 'The Supreme Court', 'The Governor General alone'],
          correct: 1
        },
        {
          question: 'If you cannot pay for a lawyer, you should contact:',
          options: ['Elections Canada', 'Legal Aid', 'The Senate', 'Immigration, Refugees and Citizenship Canada'],
          correct: 1
        },
        {
          question: 'A crime in Canada is considered an offence against:',
          options: ['Only the victim', 'The whole community', 'The police', 'The Prime Minister'],
          correct: 1
        }
      ]
    },
    {
      id: 'symbols',
      title: 'Symbols, Anthem, and Honours',
      shortTitle: 'Symbols',
      navSubtitle: 'Flag, anthem, honours',
      duration: '7 minutes',
      objectives: [
        'Recall dates and facts about national symbols and the anthem',
        'Name both official national sports and the national animal',
        'Describe the Order of Canada and Remembrance Day'
      ],
      examTip: 'The flag (1965), anthem (1980), both national sports, and the Order of Canada (1967) are high-yield facts.',
      sections: [
        {
          title: 'National Symbols',
          items: [
            'National flag: red and white with a maple leaf, adopted 1965.',
            'National anthem: "O Canada," official since 1980 (French lyrics date to 1880).',
            'National animal: the beaver.',
            'Official national sports: hockey (winter) and lacrosse (summer)—both are recognized.',
            'National motto: "A Mari Usque Ad Mare" ("From Sea to Sea").',
            'Royal Canadian Mounted Police serve as a national symbol and federal police force.'
          ]
        },
        {
          title: 'Honours and Remembrance',
          items: [
            'Peace Tower: central tower of Parliament in Ottawa; houses the Memorial Chamber honouring war dead.',
            'Order of Canada: highest civilian honour, established 1967 for outstanding achievement.',
            'Victoria Cross: highest military decoration for bravery.',
            'Remembrance Day: November 11, honouring those who served and died; the poppy is the symbol of remembrance.'
          ]
        }
      ],
      flashcards: [
        { front: 'When was the current flag adopted?', back: '1965.' },
        { front: 'When did "O Canada" become the official anthem?', back: '1980.' },
        { front: 'What are Canada\'s two official national sports?', back: 'Hockey (winter) and lacrosse (summer).' },
        { front: 'What is the Order of Canada?', back: 'Canada\'s highest civilian honour, established 1967.' },
        { front: 'When is Remembrance Day?', back: 'November 11.' }
      ],
      quiz: [
        {
          question: 'Canada\'s national animal is the:',
          options: ['Moose', 'Beaver', 'Bear', 'Loon'],
          correct: 1
        },
        {
          question: 'The Order of Canada was established in:',
          options: ['1867', '1965', '1967', '1982'],
          correct: 2
        },
        {
          question: '"A Mari Usque Ad Mare" means:',
          options: ['True North Strong and Free', 'From Sea to Sea', 'Peace, Order, and Good Government', 'God Save the King'],
          correct: 1
        }
      ]
    },
    {
      id: 'economy',
      title: 'Economy and Regions of Canada',
      shortTitle: 'Economy & Regions',
      navSubtitle: 'Trade and geography',
      duration: '9 minutes',
      objectives: [
        'Identify Canada\'s major trading relationships and agreements',
        'Associate provinces and regions with key industries and facts',
        'Answer common geography questions about provinces and territories'
      ],
      examTip: 'The United States as trading partner, Prairie breadbasket, Quebec as largest province, and Prince Edward Island as smallest are common questions.',
      sections: [
        {
          title: 'Economy and Trade',
          items: [
            'Canada has a market economy based on free enterprise.',
            'The United States is Canada\'s largest trading partner.',
            'CUSMA (Canada-United States-Mexico Agreement) replaced NAFTA in 2020.',
            'Canada belongs to the G7, G20, NATO, Commonwealth, La Francophonie, United Nations, and NORAD.'
          ]
        },
        {
          title: 'Regions and Provinces',
          items: [
            'Atlantic Canada: fisheries; Bay of Fundy tides; Prince Edward Island is the smallest province; Newfoundland and Labrador joined last (1949).',
            'Central Canada: Ontario and Quebec; most manufacturing; Ottawa is the capital; Quebec is largest by area.',
            'Prairie provinces: Manitoba, Saskatchewan, Alberta—major agricultural region; Alberta has major oil resources.',
            'British Columbia: Pacific coast, forestry, gateway to Asia-Pacific trade.',
            'North: Yukon, Northwest Territories, Nunavut (created 1999, largest territory, Inuit homeland).',
            'Canada has 10 provinces and 3 territories.',
            'The Great Lakes provide fresh water and shipping routes shared with the United States.',
            'Quebec is the main producer of pulp and paper.'
          ]
        }
      ],
      flashcards: [
        { front: 'Who is Canada\'s largest trading partner?', back: 'The United States.' },
        { front: 'Which province is largest by area?', back: 'Quebec.' },
        { front: 'Which province is smallest by area?', back: 'Prince Edward Island.' },
        { front: 'Which region is known as Canada\'s breadbasket?', back: 'The Prairie provinces.' },
        { front: 'How many provinces and territories does Canada have?', back: '10 provinces and 3 territories.' }
      ],
      quiz: [
        {
          question: 'Canada\'s largest trading partner is:',
          options: ['United Kingdom', 'United States', 'China', 'France'],
          correct: 1
        },
        {
          question: 'Which province is the smallest by area?',
          options: ['Nova Scotia', 'Prince Edward Island', 'New Brunswick', 'Yukon'],
          correct: 1
        },
        {
          question: 'Nunavut was created in which year?',
          options: ['1949', '1967', '1982', '1999'],
          correct: 3
        }
      ]
    }
  ],

  questionBank: [
    { question: 'What are the three groups of Aboriginal peoples in Canada?', answer: 'First Nations, Métis, and Inuit', category: 'History' },
    { question: 'When did Canada become a self-governing Dominion?', answer: 'July 1, 1867', category: 'History' },
    { question: 'Name the four founding provinces of Confederation.', answer: 'Ontario, Quebec, Nova Scotia, and New Brunswick', category: 'History' },
    { question: 'Who was Canada\'s first Prime Minister?', answer: 'Sir John A. Macdonald', category: 'History' },
    { question: 'What does responsible government mean?', answer: 'The Cabinet must have the support of a majority of elected Members of Parliament', category: 'Government' },
    { question: 'How many senators are in the Senate?', answer: '105', category: 'Government' },
    { question: 'How many Members of Parliament are in the House of Commons?', answer: '338', category: 'Government' },
    { question: 'Who is Canada\'s head of state?', answer: 'The Sovereign (King Charles III)', category: 'Government' },
    { question: 'What document protects the rights and freedoms of Canadians?', answer: 'The Canadian Charter of Rights and Freedoms (Constitution Act, 1982)', category: 'Rights' },
    { question: 'In what year did the Charter of Rights and Freedoms come into effect?', answer: '1982', category: 'Rights' },
    { question: 'What is Canada\'s national animal?', answer: 'The beaver', category: 'Symbols' },
    { question: 'When was the current Canadian flag adopted?', answer: '1965', category: 'Symbols' },
    { question: 'What are Canada\'s two official languages?', answer: 'English and French', category: 'Rights' },
    { question: 'Which is the only officially bilingual province?', answer: 'New Brunswick', category: 'Rights' },
    { question: 'Why is the Battle of Vimy Ridge significant?', answer: 'All four divisions of the Canadian Corps fought together for the first time on April 9, 1917', category: 'History' },
    { question: 'When did women gain the right to vote in federal elections?', answer: '1918', category: 'History' },
    { question: 'What happened on D-Day, June 6, 1944?', answer: 'Canadian and Allied forces landed at Juno Beach in Normandy to liberate Europe', category: 'History' },
    { question: 'Which province was the last to join Confederation, and when?', answer: 'Newfoundland and Labrador, 1949', category: 'History' },
    { question: 'What is the Order of Canada?', answer: 'Canada\'s highest civilian honour for outstanding achievement, established 1967', category: 'Symbols' },
    { question: 'What are Canada\'s two official national sports?', answer: 'Hockey (winter) and lacrosse (summer)', category: 'Symbols' },
    { question: 'What is Canada\'s largest trading partner?', answer: 'The United States', category: 'Geography' },
    { question: 'Which province has the largest population?', answer: 'Ontario', category: 'Geography' },
    { question: 'Which province is the largest by area?', answer: 'Quebec', category: 'Geography' },
    { question: 'Which province is the smallest by area?', answer: 'Prince Edward Island', category: 'Geography' },
    { question: 'What is the role of the Governor General?', answer: 'Represents the Sovereign in Canada and grants Royal Assent to bills', category: 'Government' },
    { question: 'What does presumption of innocence mean?', answer: 'An accused person is innocent until proven guilty in court', category: 'Justice' },
    { question: 'What is the minimum voting age in Canada?', answer: '18 years of age', category: 'Elections' },
    { question: 'What is a returning officer?', answer: 'The official who administers the election in each riding', category: 'Elections' },
    { question: 'What is Nunavut, and when was it created?', answer: 'Canada\'s largest territory, created in 1999 as an Inuit homeland', category: 'Geography' },
    { question: 'Who won the Nobel Peace Prize for helping to create UN peacekeeping?', answer: 'Lester B. Pearson, 1957', category: 'History' },
    { question: 'What type of right is the right to live and work anywhere in Canada?', answer: 'A mobility right', category: 'Rights' },
    { question: 'What is a polling station?', answer: 'The place where you go to vote', category: 'Elections' },
    { question: 'What is Canada\'s national motto?', answer: '"A Mari Usque Ad Mare" — From Sea to Sea', category: 'Symbols' },
    { question: 'Who first mapped Canada\'s east coast for England in 1497?', answer: 'John Cabot', category: 'History' },
    { question: 'Why are the Great Lakes important to Canada?', answer: 'They provide fresh water and waterways for trade and transportation', category: 'Geography' }
  ]
};
