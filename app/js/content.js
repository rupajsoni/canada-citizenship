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
