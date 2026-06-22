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
          title: 'Canadian Charter of Rights and Freedoms',
          type: 'list',
          items: [
            'The Charter is part of the Constitution Act, 1982 and protects the rights and freedoms of Canadians.',
            'The Official Languages Act (1969) confirms English and French as Canada\'s two official languages.',
            'New Brunswick is the only officially bilingual province.',
            'Quebec is the only province with a majority French-speaking population.'
          ]
        },
        {
          title: 'Six categories of rights',
          type: 'cards',
          cards: [
            { num: 1, title: 'Fundamental freedoms', body: 'Expression, religion, peaceful assembly, press, and association.' },
            { num: 2, title: 'Democratic rights', body: 'Vote and stand for office at age 18 and older.' },
            { num: 3, title: 'Mobility rights', body: 'Live and work anywhere in Canada; enter or leave the country freely.' },
            { num: 4, title: 'Legal rights', body: 'Fair trial, protection from unreasonable search, right to a lawyer.' },
            { num: 5, title: 'Equality rights', body: 'Equal treatment without discrimination based on race, origin, colour, religion, sex, age, or disability.' },
            { num: 6, title: 'Language rights', body: 'English and French have equal status in dealings with the federal government.' }
          ]
        },
        {
          title: 'Responsibilities of citizens',
          type: 'checklist',
          items: [
            'Obey the law and pay taxes',
            'Vote in federal, provincial, and local elections',
            'Serve on a jury when called',
            'Respect the rights and freedoms of others',
            'Help others in the community',
            'Defend Canada if the need should ever arise'
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
          title: 'Three Indigenous peoples',
          type: 'compare',
          columns: [
            { heading: 'First Nations', points: ['Largest group in Canada', 'Hundreds of nations across the country', 'Rights under Section 35 of the Constitution Act, 1982'] },
            { heading: 'Métis', points: ['Mixed European and First Nations heritage', 'Mainly live in Manitoba, Saskatchewan, and Alberta', 'Louis Riel led the Red River Resistance (1869–1870)'] },
            { heading: 'Inuit', points: ['Live in the Arctic regions', 'The word Inuit means "the people"', 'Nunavut is their homeland (territory since 1999)'] }
          ]
        },
        {
          title: 'Residential schools and reconciliation',
          type: 'list',
          items: [
            'Residential schools were part of a harmful assimilation policy—a significant and painful chapter in Canadian history.',
            'Understanding this history is part of knowing who Canada is today.'
          ]
        },
        {
          title: 'Diversity and international membership',
          type: 'list',
          items: [
            'Canada\'s population is approximately 38 million; most Canadians live in cities, especially in the Quebec City–Windsor corridor.',
            'The Canadian Multiculturalism Act (1988) recognizes cultural diversity as a fundamental value.',
            'Canada is a member of the Commonwealth (54 countries) and La Francophonie (French-speaking nations worldwide).'
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
          title: 'Timeline: exploration to Confederation',
          type: 'timeline',
          events: [
            { date: '1497', text: 'John Cabot, sailing for England, maps Canada\'s east coast.' },
            { date: '1534', text: 'Jacques Cartier claims the St. Lawrence region for France.' },
            { date: '1608', text: 'Samuel de Champlain founds Quebec City—the first permanent European settlement.' },
            { date: '1759', text: 'Battle of the Plains of Abraham: British victory ends French military rule.' },
            { date: '1763', text: 'Treaty of Paris: France cedes Canada to Britain.' },
            { date: '1774', text: 'Quebec Act: French Canadians retain language, Catholic religion, and civil law.' },
            { date: '1791', text: 'Constitutional Act creates Upper Canada (English) and Lower Canada (French).' },
            { date: '1848', text: 'Responsible government first achieved in Nova Scotia.' },
            { date: '1867', text: 'Confederation: Canada becomes a self-governing Dominion on July 1. Founding provinces: Ontario, Quebec, Nova Scotia, New Brunswick. Sir John A. Macdonald becomes first Prime Minister.' }
          ]
        },
        {
          title: 'United Empire Loyalists',
          type: 'list',
          items: [
            'After the American Revolution, approximately 40,000 to 50,000 United Empire Loyalists came to Canada.',
            'New France had developed around the fur trade and alliances with First Nations.',
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
          title: 'Timeline: building the nation (1867–1914)',
          type: 'timeline',
          events: [
            { date: '1869–70', text: 'Red River Resistance: Louis Riel leads the Métis; Manitoba enters Confederation (1870).' },
            { date: '1871', text: 'British Columbia joins Confederation with the promise of a transcontinental railway.' },
            { date: '1873', text: 'Prince Edward Island joins Confederation.' },
            { date: '1885', text: 'Canadian Pacific Railway completed—Canada linked coast to coast; western settlement becomes possible.' },
            { date: '1885', text: 'Northwest Resistance: Louis Riel captured, tried for treason, and executed.' },
            { date: '1896–1911', text: 'Sir Wilfrid Laurier, first French Canadian Prime Minister, presides over massive western immigration.' }
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
          title: 'Timeline: wars and modern Canada',
          type: 'timeline',
          events: [
            { date: '1917', text: 'Battle of Vimy Ridge (April 9): all four Canadian divisions fight together—a defining national moment.' },
            { date: '1918', text: 'Women gain the right to vote in federal elections.' },
            { date: '1939–45', text: 'Second World War: Canada declares war independently; forces land at Juno Beach on D-Day, June 6, 1944.' },
            { date: '1949', text: 'Newfoundland and Labrador becomes the last province to join Confederation.' },
            { date: '1957', text: 'Lester B. Pearson wins Nobel Peace Prize for United Nations peacekeeping.' },
            { date: '1965', text: 'Current Canadian flag adopted.' },
            { date: '1980', text: '"O Canada" becomes the official national anthem.' },
            { date: '1982', text: 'Constitution Act patriated; Charter of Rights and Freedoms enacted.' },
            { date: '1999', text: 'Nunavut created as a territory and Inuit homeland.' }
          ]
        },
        {
          title: 'Notable Canadians',
          type: 'list',
          items: [
            'Lester B. Pearson also introduced Medicare as Prime Minister.',
            'Terry Fox ran the Marathon of Hope (1980) to raise cancer awareness.',
            '1919 Winnipeg General Strike: one of the largest labour actions in Canadian history.'
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
          title: 'How Canada is governed',
          type: 'cards',
          cards: [
            { tag: 'Head of state', title: 'The Sovereign', body: 'King Charles III, represented federally by the Governor General and provincially by Lieutenant Governors.' },
            { tag: 'Head of government', title: 'Prime Minister', body: 'Leader of the party with the most seats in the House of Commons.' },
            { tag: 'Parliament', title: 'Three parts', body: 'The Crown, the Senate (105 senators), and the House of Commons (338 elected Members).' }
          ]
        },
        {
          title: 'Three branches of government',
          type: 'table',
          headers: ['Branch', 'Who', 'Role'],
          rows: [
            ['Executive', 'Prime Minister and Cabinet', 'Propose and administer laws; run government'],
            ['Legislative', 'Parliament', 'Debate and pass laws'],
            ['Judicial', 'Courts (Supreme Court at top)', 'Interpret and apply laws—nine judges at the Supreme Court']
          ]
        },
        {
          title: 'Three levels of government',
          type: 'compare',
          columns: [
            { heading: 'Federal', points: ['National defence', 'Criminal law and banking', 'Immigration', 'Interprovincial trade'] },
            { heading: 'Provincial', points: ['Education and health care', 'Highways', 'Natural resources', 'Municipal institutions'] },
            { heading: 'Municipal', points: ['Local roads and parks', 'Local police', 'Water and waste collection'] }
          ]
        },
        {
          title: 'Responsible government',
          type: 'list',
          items: [
            'The Senate provides "sober second thought" on legislation; senators are appointed until age 75.',
            'Responsible government means the Cabinet must hold the confidence of a majority of elected Members in the House of Commons.'
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
          title: 'Election essentials',
          type: 'statstrip',
          stats: [
            { value: '4 years', label: 'Maximum term' },
            { value: '338', label: 'Ridings' },
            { value: '18+', label: 'Voting age' },
            { value: 'Citizen', label: 'Must be' }
          ]
        },
        {
          title: 'Key terms and process',
          type: 'table',
          headers: ['Term', 'Meaning'],
          rows: [
            ['Elections Canada', 'Independent agency that administers federal elections'],
            ['Returning officer', 'Official who runs the election in each riding'],
            ['Polling station', 'Place where you cast your ballot in person'],
            ['First-past-the-post', 'Candidate with the most votes wins the riding'],
            ['Majority government', 'Party holds more than half the seats in the House of Commons'],
            ['Minority government', 'Party has the most seats but less than half']
          ]
        },
        {
          title: 'If you do not receive a voter card',
          type: 'list',
          items: ['Contact Elections Canada before election day to confirm you are on the voters list.']
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
          title: 'Foundational principles',
          type: 'cards',
          cards: [
            { title: 'Rule of law', body: 'Everyone, including the government, must obey the law.' },
            { title: 'Presumption of innocence', body: 'An accused person is innocent until proven guilty in court.' },
            { title: 'Right to counsel', body: 'Fair trial and legal representation are protected under the Charter.' }
          ]
        },
        {
          title: 'Who does what',
          type: 'table',
          headers: ['Institution', 'Role'],
          rows: [
            ['Parliament', 'Makes laws'],
            ['Police (including RCMP)', 'Enforce laws'],
            ['Courts', 'Interpret and apply laws'],
            ['Legal Aid', 'Help for those who cannot afford a lawyer'],
            ['Jury', 'Citizens 18+ may be called to serve—civic responsibility']
          ]
        },
        {
          title: 'Types of offences',
          type: 'list',
          items: [
            'Summary offences are minor; indictable offences are serious and may involve a jury trial.',
            'The Royal Canadian Mounted Police (RCMP) is Canada\'s national police force—the Mounties.'
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
          title: 'National symbols at a glance',
          type: 'table',
          headers: ['Symbol', 'Detail'],
          rows: [
            ['Flag', 'Red and white maple leaf—adopted 1965'],
            ['Anthem', '"O Canada"—official since 1980'],
            ['Animal', 'The beaver'],
            ['Sports', 'Hockey (winter) and lacrosse (summer)—both official'],
            ['Motto', '"A Mari Usque Ad Mare" — From Sea to Sea'],
            ['Police', 'Royal Canadian Mounted Police (Mounties)']
          ]
        },
        {
          title: 'Honours and remembrance',
          type: 'cards',
          cards: [
            { title: 'Order of Canada', body: 'Highest civilian honour for outstanding achievement—established 1967.' },
            { title: 'Victoria Cross', body: 'Highest military decoration for bravery.' },
            { title: 'Peace Tower', body: 'Central tower of Parliament; Memorial Chamber honours war dead.' },
            { title: 'Remembrance Day', body: 'November 11—the poppy is the symbol of remembrance.' }
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
          title: 'Trade and membership',
          type: 'list',
          items: [
            'Canada has a market economy based on free enterprise.',
            'The United States is Canada\'s largest trading partner.',
            'CUSMA (Canada-United States-Mexico Agreement) replaced NAFTA in 2020.',
            'Member of: G7, G20, NATO, Commonwealth, La Francophonie, United Nations, and NORAD.'
          ]
        },
        {
          title: 'Geography essentials',
          type: 'statstrip',
          stats: [
            { value: '10 + 3', label: 'Provinces & territories' },
            { value: 'Quebec', label: 'Largest province' },
            { value: 'PEI', label: 'Smallest province' },
            { value: 'Ontario', label: 'Most populous' }
          ]
        },
        {
          title: 'Regions of Canada',
          type: 'compare',
          columns: [
            { heading: 'Atlantic', points: ['Fisheries and tourism', 'PEI is smallest province', 'Newfoundland joined last (1949)'] },
            { heading: 'Central', points: ['Ontario and Quebec', 'Most manufacturing', 'Ottawa is the capital'] },
            { heading: 'Prairies', points: ['Breadbasket of Canada', 'Alberta oil resources', 'Most Métis live here'] },
            { heading: 'West & North', points: ['British Columbia: forestry, Pacific trade', 'Nunavut (1999): Inuit homeland', 'Great Lakes: trade and fresh water'] }
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
    // ── RIGHTS & RESPONSIBILITIES ─────────────────────────────────────────
    {
      question: 'Which document protects the rights and freedoms of Canadians?',
      options: ['The Constitution Act, 1867', 'The Canadian Charter of Rights and Freedoms', 'The Official Languages Act', 'The Canadian Bill of Rights (1960)'],
      correct: 1, category: 'Rights'
    },
    {
      question: 'In what year did the Canadian Charter of Rights and Freedoms come into effect?',
      options: ['1867', '1965', '1982', '1999'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'What are Canada\'s two official languages?',
      options: ['English and Inuktitut', 'French and Cree', 'English and French', 'English and Mohawk'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'Which is the only officially bilingual province in Canada?',
      options: ['Quebec', 'Ontario', 'New Brunswick', 'Manitoba'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'The right to move and work anywhere in Canada is called:',
      options: ['A democratic right', 'A legal right', 'A mobility right', 'An equality right'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'The right to vote in elections is an example of which category of rights?',
      options: ['Mobility rights', 'Democratic rights', 'Language rights', 'Legal rights'],
      correct: 1, category: 'Rights'
    },
    {
      question: 'Which section of the Constitution Act, 1982 recognizes and affirms Aboriginal and treaty rights?',
      options: ['Section 15', 'Section 33', 'Section 35', 'Section 91'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'What is the minimum voting age in a Canadian federal election?',
      options: ['16', '17', '18', '21'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'Freedom of conscience, religion, thought, and expression are protected under which part of the Constitution?',
      options: ['The Constitution Act, 1867', 'The Charter of Rights and Freedoms', 'The Official Languages Act', 'The Statute of Westminster'],
      correct: 1, category: 'Rights'
    },
    {
      question: 'What is one responsibility of Canadian citizenship (NOT just a right)?',
      options: ['Receiving social assistance', 'Obeying the law and serving on jury duty', 'Using public parks', 'Receiving health care'],
      correct: 1, category: 'Rights'
    },
    // ── HISTORY ──────────────────────────────────────────────────────────
    {
      question: 'When did Canada become a self-governing Dominion?',
      options: ['July 1, 1776', 'July 1, 1867', 'July 1, 1931', 'July 1, 1982'],
      correct: 1, category: 'History'
    },
    {
      question: 'Who was Canada\'s first Prime Minister?',
      options: ['Sir Wilfrid Laurier', 'Louis Riel', 'Sir John A. Macdonald', 'John Cabot'],
      correct: 2, category: 'History'
    },
    {
      question: 'Which were the four founding provinces of Confederation in 1867?',
      options: [
        'Ontario, Quebec, Nova Scotia, and Prince Edward Island',
        'Ontario, Quebec, Nova Scotia, and New Brunswick',
        'Quebec, New Brunswick, Manitoba, and British Columbia',
        'Ontario, Nova Scotia, New Brunswick, and Newfoundland'
      ],
      correct: 1, category: 'History'
    },
    {
      question: 'Who were the first Europeans to reach Canada?',
      options: ['The French, under Jacques Cartier', 'The English, under John Cabot', 'The Norse Vikings', 'The Portuguese, under John Fernandes'],
      correct: 2, category: 'History'
    },
    {
      question: 'Who first mapped Canada\'s east coast on behalf of England in 1497?',
      options: ['Jacques Cartier', 'Samuel de Champlain', 'John Cabot', 'Henry Hudson'],
      correct: 2, category: 'History'
    },
    {
      question: 'What is the significance of the Battle of Vimy Ridge (April 9, 1917)?',
      options: [
        'Canada officially gained independence from Britain',
        'All four divisions of the Canadian Corps fought together for the first time',
        'Canadian women gained the right to vote',
        'Canada signed the Statute of Westminster'
      ],
      correct: 1, category: 'History'
    },
    {
      question: 'When did women gain the right to vote in Canadian federal elections?',
      options: ['1916', '1918', '1929', '1945'],
      correct: 1, category: 'History'
    },
    {
      question: 'What was the significance of June 6, 1944 (D-Day) for Canada?',
      options: [
        'Canadians fought at Vimy Ridge',
        'Canada declared war on Germany',
        'Canadian forces stormed Juno Beach in Normandy to liberate Western Europe',
        'The Korean War armistice was signed'
      ],
      correct: 2, category: 'History'
    },
    {
      question: 'Which was the last province to join Confederation, and in what year?',
      options: ['Manitoba, 1870', 'British Columbia, 1871', 'Prince Edward Island, 1873', 'Newfoundland and Labrador, 1949'],
      correct: 3, category: 'History'
    },
    {
      question: 'What event led to Manitoba joining Confederation in 1870?',
      options: ['The Klondike Gold Rush', 'The Red River Resistance led by Louis Riel', 'The completion of the CPR', 'The Northwest Resistance of 1885'],
      correct: 1, category: 'History'
    },
    {
      question: 'In what year was the Canadian Pacific Railway (CPR) completed?',
      options: ['1867', '1871', '1885', '1896'],
      correct: 2, category: 'History'
    },
    {
      question: 'Who was Canada\'s first French-Canadian Prime Minister?',
      options: ['Pierre Trudeau', 'Sir Wilfrid Laurier', 'Louis-Hippolyte LaFontaine', 'Louis Riel'],
      correct: 1, category: 'History'
    },
    {
      question: 'The Klondike Gold Rush of the 1890s took place in which territory?',
      options: ['Northwest Territories', 'Nunavut', 'Yukon', 'British Columbia'],
      correct: 2, category: 'History'
    },
    {
      question: 'Who won the Nobel Peace Prize in 1957 for helping establish United Nations peacekeeping forces?',
      options: ['John Diefenbaker', 'Tommy Douglas', 'Lester B. Pearson', 'Pierre Trudeau'],
      correct: 2, category: 'History'
    },
    {
      question: 'What did the Statute of Westminster (1931) grant Canada?',
      options: ['Its first written constitution', 'Full legislative independence from Britain', 'Universal suffrage for women', 'Control over immigration'],
      correct: 1, category: 'History'
    },
    {
      question: 'What is Remembrance Day and when is it observed?',
      options: [
        'Canada Day — July 1, celebrating Confederation',
        'Victory in Europe Day — May 8',
        'A day to honor Canadians who died in wars — November 11',
        'The anniversary of the Charter of Rights — April 17'
      ],
      correct: 2, category: 'History'
    },
    {
      question: 'Where did United Empire Loyalists settle after the American Revolution?',
      options: ['Quebec and British Columbia', 'Nova Scotia, New Brunswick, and Ontario', 'Manitoba and Saskatchewan', 'The Northwest Territories'],
      correct: 1, category: 'History'
    },
    {
      question: 'What are the three groups of Aboriginal peoples in Canada?',
      options: ['Inuit, Cree, and Métis', 'First Nations, Métis, and Inuit', 'Haudenosaunee, Algonquin, and Inuit', 'First Nations, Mohawk, and Inuit'],
      correct: 1, category: 'History'
    },
    {
      question: 'The "Persons Case" of 1929 established that:',
      options: [
        'Aboriginal peoples had treaty rights',
        'Women were legally recognized as "persons" and could serve in the Senate',
        'French Canadians had language rights outside Quebec',
        'Canada had full independence in foreign policy'
      ],
      correct: 1, category: 'History'
    },
    {
      question: 'Samuel de Champlain is known as:',
      options: ['The first Prime Minister of Canada', 'The Father of New France', 'The explorer who mapped the Arctic', 'The leader of the Patriote movement'],
      correct: 1, category: 'History'
    },
    {
      question: 'Canada\'s role at the Battle of the Atlantic (WWII) was to:',
      options: [
        'Lead the D-Day landings',
        'Protect Allied supply convoys crossing the ocean to Britain',
        'Liberate France with ground troops',
        'Command the Pacific theatre against Japan'
      ],
      correct: 1, category: 'History'
    },
    // ── GOVERNMENT ────────────────────────────────────────────────────────
    {
      question: 'Who is Canada\'s head of state?',
      options: ['The Prime Minister', 'The Governor General', 'The Sovereign (King Charles III)', 'The Chief Justice of Canada'],
      correct: 2, category: 'Government'
    },
    {
      question: 'Who represents the Sovereign at the federal level in Canada?',
      options: ['The Prime Minister', 'The Speaker of the Senate', 'The Governor General', 'The Chief Justice of Canada'],
      correct: 2, category: 'Government'
    },
    {
      question: 'Who represents the Sovereign at the provincial level?',
      options: ['The Premier', 'The Lieutenant Governor', 'The Attorney General', 'The Chief Justice of the province'],
      correct: 1, category: 'Government'
    },
    {
      question: 'How many seats are in the Canadian Senate?',
      options: ['50', '105', '308', '338'],
      correct: 1, category: 'Government'
    },
    {
      question: 'How many seats are in the House of Commons?',
      options: ['105', '265', '308', '338'],
      correct: 3, category: 'Government'
    },
    {
      question: 'What does "responsible government" mean in Canada?',
      options: [
        'The government must produce a balanced budget each year',
        'The Cabinet must hold the confidence of a majority of elected MPs',
        'The King personally approves all federal legislation',
        'The Senate can veto any bill from the House of Commons'
      ],
      correct: 1, category: 'Government'
    },
    {
      question: 'Canada\'s system of government is best described as:',
      options: [
        'A republic with an elected president',
        'A federal state with a parliamentary democracy and a constitutional monarchy',
        'A unitary state governed by a prime minister and Senate',
        'A direct democracy with regular national referendums'
      ],
      correct: 1, category: 'Government'
    },
    {
      question: 'Which of the following is a federal (not provincial) responsibility?',
      options: ['Education', 'Health care delivery', 'National defence', 'Property and civil rights'],
      correct: 2, category: 'Government'
    },
    {
      question: 'Which of the following is a provincial (not federal) responsibility?',
      options: ['Currency and banking', 'National defence', 'Education', 'Criminal law'],
      correct: 2, category: 'Government'
    },
    {
      question: 'What is the role of the Cabinet in Canada\'s government?',
      options: [
        'To approve appointments to the Supreme Court',
        'To lead the official opposition and hold the government accountable',
        'A group of ministers chosen by the Prime Minister to head government departments',
        'The full body of elected Members of Parliament'
      ],
      correct: 2, category: 'Government'
    },
    {
      question: 'What must happen for a bill to become law in Canada?',
      options: [
        'The Prime Minister signs it into law',
        'It passes the House of Commons, the Senate, and receives Royal Assent',
        'A national referendum must approve it',
        'The Supreme Court reviews and approves it'
      ],
      correct: 1, category: 'Government'
    },
    {
      question: 'What is a minority government in Canada?',
      options: [
        'A government that won more than half of all seats',
        'A government formed by a coalition of parties',
        'The party with the most seats but fewer than half of all seats',
        'A government appointed by the Governor General without an election'
      ],
      correct: 2, category: 'Government'
    },
    {
      question: 'What is the role of the Governor General?',
      options: [
        'To lead the federal government as head of government',
        'To represent the Sovereign, grant Royal Assent to bills, and swear in the Prime Minister',
        'To preside over debates in the House of Commons',
        'To serve as the head of the Supreme Court'
      ],
      correct: 1, category: 'Government'
    },
    {
      question: 'Canada\'s three branches of government are:',
      options: [
        'Monarchy, Parliament, and Courts',
        'Federal, provincial, and municipal',
        'Executive, Legislative, and Judicial',
        'Senate, Commons, and Governor General'
      ],
      correct: 2, category: 'Government'
    },
    // ── GEOGRAPHY ────────────────────────────────────────────────────────
    {
      question: 'What is the capital city of Canada?',
      options: ['Toronto', 'Montreal', 'Ottawa', 'Vancouver'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'What are Canada\'s three territories?',
      options: [
        'Alberta, Saskatchewan, and Manitoba',
        'Yukon, Northwest Territories, and Nunavut',
        'Nunavut, Labrador, and Yukon',
        'British Columbia, Yukon, and Northwest Territories'
      ],
      correct: 1, category: 'Geography'
    },
    {
      question: 'Which province has the largest population in Canada?',
      options: ['British Columbia', 'Alberta', 'Quebec', 'Ontario'],
      correct: 3, category: 'Geography'
    },
    {
      question: 'Which province is the largest by land area?',
      options: ['Ontario', 'British Columbia', 'Alberta', 'Quebec'],
      correct: 3, category: 'Geography'
    },
    {
      question: 'Which province is the smallest by area?',
      options: ['Nova Scotia', 'New Brunswick', 'Prince Edward Island', 'Newfoundland and Labrador'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'What is Nunavut, and when was it established?',
      options: [
        'A First Nations reserve, established in 1970',
        'Canada\'s largest territory, created in 1999 as the Inuit homeland',
        'A new province carved from Quebec in 1999',
        'A territory established for Métis peoples in 1949'
      ],
      correct: 1, category: 'Geography'
    },
    {
      question: 'Canada\'s largest trading partner is:',
      options: ['China', 'The United Kingdom', 'Mexico', 'The United States'],
      correct: 3, category: 'Geography'
    },
    {
      question: 'Why are the Great Lakes important to Canada?',
      options: [
        'They form the natural border with Alaska',
        'They are the main source of Canada\'s hydro-electric power',
        'They contain fresh water and provide major waterways for trade',
        'They are the site of the original French settlements'
      ],
      correct: 2, category: 'Geography'
    },
    // ── SYMBOLS & CULTURE ─────────────────────────────────────────────────
    {
      question: 'What is Canada\'s national animal?',
      options: ['The moose', 'The loon', 'The beaver', 'The bison'],
      correct: 2, category: 'Symbols'
    },
    {
      question: 'When was the current Canadian flag (the Maple Leaf) adopted?',
      options: ['1945', '1952', '1965', '1967'],
      correct: 2, category: 'Symbols'
    },
    {
      question: 'What are Canada\'s two official national sports?',
      options: ['Football and basketball', 'Baseball and curling', 'Hockey (winter) and lacrosse (summer)', 'Soccer and hockey'],
      correct: 2, category: 'Symbols'
    },
    {
      question: 'What is Canada\'s national motto?',
      options: ['"Peace, Order, and Good Government"', '"A Mari Usque Ad Mare" (From Sea to Sea)', '"My Home and Native Land"', '"True North, Strong and Free"'],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'The Order of Canada is:',
      options: [
        'A military medal awarded for combat service',
        'Canada\'s highest honour for outstanding achievement by civilians',
        'An award given to all new citizens upon naturalization',
        'A government decoration for elected officials'
      ],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'The national anthem "O Canada" was officially adopted in which year?',
      options: ['1867', '1927', '1965', '1980'],
      correct: 3, category: 'Symbols'
    },
    // ── ELECTIONS ─────────────────────────────────────────────────────────
    {
      question: 'What is a polling station?',
      options: [
        'The central office where election results are tallied',
        'The office where candidates register to run',
        'The place where eligible voters go to cast their ballot',
        'The Elections Canada regional headquarters'
      ],
      correct: 2, category: 'Elections'
    },
    {
      question: 'What is a returning officer?',
      options: [
        'The leader of a political party contesting an election',
        'The official who administers the federal election in a riding',
        'An MP who is re-elected to a second term',
        'The head of Elections Canada nationally'
      ],
      correct: 1, category: 'Elections'
    },
    {
      question: 'By law, how often must a federal election be held in Canada?',
      options: ['Every two years', 'Every three years', 'At least every five years', 'At least every four years'],
      correct: 3, category: 'Elections'
    },
    {
      question: 'Which agency is responsible for administering federal elections in Canada?',
      options: ['The Privy Council Office', 'The Department of Justice', 'Elections Canada', 'The Governor General\'s Office'],
      correct: 2, category: 'Elections'
    },
    {
      question: 'What is the role of the Leader of the Official Opposition?',
      options: [
        'To assist the Prime Minister in governing',
        'To scrutinize the government and present an alternative platform',
        'To chair debates in the Senate',
        'To represent Canada in international negotiations'
      ],
      correct: 1, category: 'Elections'
    },
    // ── JUSTICE ───────────────────────────────────────────────────────────
    {
      question: 'What does "presumption of innocence" mean in Canadian law?',
      options: [
        'Police may detain anyone for questioning without charge',
        'A person accused of a crime is innocent until proven guilty in court',
        'The Crown must always accept a guilty plea',
        'Citizens may not be arrested without a warrant'
      ],
      correct: 1, category: 'Justice'
    },
    {
      question: 'If you are arrested in Canada, you have the right to:',
      options: [
        'Refuse to appear in court',
        'Be tried within 24 hours',
        'Remain silent and speak to a lawyer without delay',
        'Request a trial by jury in all cases'
      ],
      correct: 2, category: 'Justice'
    },
    {
      question: 'Who makes federal laws in Canada?',
      options: ['The police and RCMP', 'Parliament (the House of Commons and Senate)', 'The Supreme Court of Canada', 'The Governor General acting alone'],
      correct: 1, category: 'Justice'
    },
    {
      question: 'A crime in Canada is considered an offence against:',
      options: ['The individual victim only', 'The provincial government', 'Society as a whole', 'The federal Crown corporation'],
      correct: 2, category: 'Justice'
    },
    {
      question: 'If you cannot afford a lawyer, you should contact:',
      options: ['Elections Canada', 'Legal Aid', 'The Senate', 'The Office of the Governor General'],
      correct: 1, category: 'Justice'
    }
  ],

  provinces: {
    yt: {
      name: 'Yukon', abbr: 'YT', type: 'territory',
      region: 'north', joined: 1898,
      indigenous: ['First Nations (diverse Yukon First Nations)'],
      facts: [
        'Klondike Gold Rush (1896–98) — drew tens of thousands of prospectors',
        'One of three federal territories (not a province)',
        'Shares border with Alaska (USA)',
        'Whitehorse is the capital'
      ],
      examTip: 'Gold Rush (Klondike, Yukon) is a common history question — happened 1890s.',
      tags: ['Territory', 'Gold Rush 1890s']
    },
    nwt: {
      name: 'Northwest Territories', abbr: 'NWT', type: 'territory',
      region: 'north', joined: 1870,
      indigenous: ['First Nations (Dene and others)', 'Métis', 'Inuit'],
      facts: [
        'Second largest territory — multi-Indigenous peoples',
        'Nunavut was carved out of NWT in 1999',
        'Aurora borealis (northern lights) visible here',
        'Yellowknife is the capital'
      ],
      examTip: 'Nunavut was split from the NWT in 1999. Know the distinction.',
      tags: ['Territory', 'Multi-Indigenous']
    },
    nu: {
      name: 'Nunavut', abbr: 'NU', type: 'territory',
      region: 'north', joined: 1999,
      indigenous: ['Inuit'],
      facts: [
        'Created in 1999 — Canada\'s newest and largest territory',
        'Homeland of the Inuit people ("Inuit" means "the people")',
        '"Nunavut" means "Our Land" in Inuktitut',
        'Largest of all provinces/territories by area',
        'Arctic — midnight sun in summer, aurora borealis in winter'
      ],
      examTip: '★ HIGH YIELD: Nunavut created 1999 as Inuit homeland. On almost every exam.',
      tags: ['Territory', 'Created: 1999', 'Inuit homeland', 'Largest territory']
    },
    bc: {
      name: 'British Columbia', abbr: 'BC', type: 'province',
      region: 'west', joined: 1871,
      indigenous: ['First Nations (many coastal and interior nations)'],
      facts: [
        'Joined 1871 — was promised a transcontinental railway (CPR)',
        'Canada\'s largest producer of forest products',
        'Gateway to the Asia-Pacific region — Pacific coast',
        'Vancouver is the largest city; Victoria is the capital'
      ],
      examTip: 'BC joined 1871 because of the railway promise. Forestry = BC.',
      tags: ['Province', 'Joined: 1871', 'Forestry', 'Pacific coast']
    },
    ab: {
      name: 'Alberta', abbr: 'AB', type: 'province',
      region: 'prairies', joined: 1905,
      indigenous: ['First Nations', 'Métis'],
      facts: [
        'Prairie province — part of MB, SK, AB (Canada\'s breadbasket region)',
        'Major oil sands producer — Canada\'s energy heartland',
        'Métis people live primarily in the Prairie provinces',
        'Calgary and Edmonton are major cities; Edmonton is the capital'
      ],
      examTip: 'Métis = Prairie provinces (AB, SK, MB). Alberta = oil sands.',
      tags: ['Province', 'Prairies', 'Joined: 1905', 'Métis territory', 'Oil sands']
    },
    sk: {
      name: 'Saskatchewan', abbr: 'SK', type: 'province',
      region: 'prairies', joined: 1905,
      indigenous: ['First Nations', 'Métis'],
      facts: [
        'Heart of Canada\'s breadbasket — wheat and canola farming',
        'Prairie province — flat plains ideal for agriculture',
        'Métis people live primarily here and in MB and AB',
        'Louis Riel\'s 1885 Northwest Resistance happened here',
        'Regina is the capital; Saskatoon is the largest city'
      ],
      examTip: 'SK = breadbasket. Northwest Resistance (Louis Riel, 1885) happened here.',
      tags: ['Province', 'Prairies', 'Joined: 1905', 'Métis territory', 'Breadbasket']
    },
    mb: {
      name: 'Manitoba', abbr: 'MB', type: 'province',
      region: 'prairies', joined: 1870,
      indigenous: ['First Nations', 'Métis'],
      facts: [
        'First Prairie province — joined 1870 after the Red River Resistance',
        'Louis Riel led the Red River Resistance here (1869–70)',
        'Métis people live primarily in Prairie provinces (MB, SK, AB)',
        'Winnipeg General Strike of 1919 — one of Canada\'s largest labour actions',
        'Winnipeg is the capital and largest city'
      ],
      examTip: 'MB joined 1870 after Louis Riel\'s Red River Resistance — very common question.',
      tags: ['Province', 'Prairies', 'Joined: 1870', 'Métis territory', 'Red River 1869']
    },
    on: {
      name: 'Ontario', abbr: 'ON', type: 'province',
      region: 'central', joined: 1867,
      indigenous: ['First Nations (Haudenosaunee, Ojibwe, Cree, and others)'],
      facts: [
        'Founding province — one of four original provinces at Confederation (1867)',
        'Most populous province in Canada',
        'Ottawa (Canada\'s capital) is in Ontario',
        'Toronto is Canada\'s largest city',
        '1793: Upper Canada (Ontario) first to abolish slavery in the British Empire'
      ],
      examTip: 'ON: founding 1867, most populous, contains Ottawa (the capital city).',
      tags: ['Province', 'Founding: 1867', 'Most populous', 'Ottawa (capital)']
    },
    qc: {
      name: 'Quebec', abbr: 'QC', type: 'province',
      region: 'central', joined: 1867,
      indigenous: ['First Nations (Cree, Mohawk, Innu, others)', 'Inuit (far north)'],
      facts: [
        'Founding province — one of four original provinces (1867)',
        'Only province with a French-speaking majority',
        'Largest province by area in Canada',
        'Canada\'s main pulp and paper producer',
        'Follows civil law (not common law like other provinces)',
        'Quebec Act (1774) preserved French language, Catholic religion, civil law'
      ],
      examTip: 'QC: founding 1867, only French majority, LARGEST by area, pulp & paper, civil law.',
      tags: ['Province', 'Founding: 1867', 'French majority', 'Largest area', 'Civil law', 'Pulp & paper']
    },
    nl: {
      name: 'Newfoundland and Labrador', abbr: 'NL', type: 'province',
      region: 'atlantic', joined: 1949,
      indigenous: ['Innu', 'Inuit', 'Mi\'kmaq'],
      facts: [
        'Last province to join Confederation — 1949',
        'Two parts: Labrador (mainland) and the Island of Newfoundland',
        'John Cabot landed near here in 1497 — first European to map Canada\'s east coast',
        'Atlantic fishing region; historically famous for the cod fishery',
        'St. John\'s (on the island) is the provincial capital'
      ],
      examTip: '★ HIGH YIELD: NL was the LAST province to join, in 1949.',
      tags: ['Province', 'Joined LAST: 1949', 'Atlantic', 'Two-part province']
    },
    nb: {
      name: 'New Brunswick', abbr: 'NB', type: 'province',
      region: 'atlantic', joined: 1867,
      indigenous: ['Mi\'kmaq', 'Wolastoqiyik (Maliseet)'],
      facts: [
        'Founding province — one of four original provinces (1867)',
        'Only officially bilingual province in Canada (English and French)',
        'Part of Atlantic Canada — fishing and forestry economy',
        'Bay of Fundy (shared with NS) has the world\'s highest tides'
      ],
      examTip: '★ HIGH YIELD: NB is the ONLY officially bilingual province.',
      tags: ['Province', 'Founding: 1867', 'ONLY bilingual province', 'Atlantic']
    },
    ns: {
      name: 'Nova Scotia', abbr: 'NS', type: 'province',
      region: 'atlantic', joined: 1867,
      indigenous: ['Mi\'kmaq'],
      facts: [
        'Founding province — one of four original provinces (1867)',
        'Responsible government in Canada first started here (1848)',
        'Peninsula province with a long maritime and fishing history',
        'Halifax is the provincial capital and a major port',
        'Bay of Fundy (shared with NB) has the world\'s highest tides'
      ],
      examTip: 'NS: founding province 1867. Responsible government started here first (1848).',
      tags: ['Province', 'Founding: 1867', 'Atlantic', 'Responsible govt: 1848']
    },
    pei: {
      name: 'Prince Edward Island', abbr: 'PEI', type: 'province',
      region: 'atlantic', joined: 1873,
      indigenous: ['Mi\'kmaq'],
      facts: [
        'Smallest province by area in Canada',
        'Joined Confederation in 1873',
        'Island in the Gulf of St. Lawrence',
        'Charlottetown hosted the 1864 Confederation Conferences',
        'Famous for red soil, potatoes, and lobster'
      ],
      examTip: 'PEI: SMALLEST province. Charlottetown = birthplace of Confederation (1864 talks).',
      tags: ['Province', 'SMALLEST province', 'Joined: 1873', 'Atlantic', 'Island']
    }
  }
};
