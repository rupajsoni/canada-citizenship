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
        { front: 'At what age can Canadians vote in federal elections?', back: '18 years of age and older.' },
        { front: 'Name the six categories of rights in the Charter.', back: 'Fundamental freedoms, democratic rights, mobility rights, legal rights, equality rights, and language rights.' },
        { front: 'What are two responsibilities of Canadian citizens?', back: 'Obey the law, pay taxes, vote, serve on jury, respect others\' rights, and help defend Canada.' },
        { front: 'Which section of the Constitution protects Aboriginal and treaty rights?', back: 'Section 35 of the Constitution Act, 1982.' },
        { front: 'What does the "equality rights" category protect against?', back: 'Discrimination based on race, national or ethnic origin, colour, religion, sex, age, or mental or physical disability.' }
      ],
      quiz: [
        {
          question: 'Which document contains the Canadian Charter of Rights and Freedoms?',
          options: ['Constitution Act, 1867', 'Constitution Act, 1982', 'Official Languages Act, 1969', 'Statute of Westminster, 1931'],
          correct: 1
        },
        {
          question: 'Which province is the only officially bilingual province?',
          options: ['Quebec', 'Ontario', 'New Brunswick', 'Manitoba'],
          correct: 2
        },
        {
          question: 'The right to vote is an example of which category of rights?',
          options: ['Mobility rights', 'Legal rights', 'Language rights', 'Democratic rights'],
          correct: 3
        },
        {
          question: 'The right to live and work anywhere in Canada is called:',
          options: ['A democratic right', 'A legal right', 'A mobility right', 'An equality right'],
          correct: 2
        },
        {
          question: 'Freedom of religion, expression, and peaceful assembly fall under:',
          options: ['Legal rights', 'Equality rights', 'Democratic rights', 'Fundamental freedoms'],
          correct: 3
        },
        {
          question: 'What is the minimum voting age in a Canadian federal election?',
          options: ['16', '17', '18', '21'],
          correct: 2
        },
        {
          question: 'Which section of the Constitution Act, 1982 recognizes Aboriginal and treaty rights?',
          options: ['Section 15', 'Section 33', 'Section 35', 'Section 91'],
          correct: 2
        },
        {
          question: 'Equality rights protect Canadians from discrimination based on which of the following?',
          options: ['Income and social class', 'Race, religion, sex, age, or disability', 'Province of residence', 'Language spoken at home'],
          correct: 1
        },
        {
          question: 'What is one responsibility unique to Canadian citizens (not just residents)?',
          options: ['Using public parks and libraries', 'Paying provincial sales tax', 'Serving on a jury when called', 'Attending public school'],
          correct: 2
        },
        {
          question: 'The right to a fair and public hearing in a court is an example of:',
          options: ['A mobility right', 'A democratic right', 'A legal right', 'A language right'],
          correct: 2
        },
        {
          question: 'The Official Languages Act (1969) established that:',
          options: ['Only Quebec may use French in government', 'English and French are Canada\'s two official languages', 'All provinces must be bilingual', 'Indigenous languages are official languages'],
          correct: 1
        },
        {
          question: 'Which statement about the Canadian Charter of Rights and Freedoms is true?',
          options: ['It applies only to federal government actions', 'It was enacted in 1867', 'It protects rights and freedoms from government interference', 'It replaced the Bill of Rights in 1965'],
          correct: 2
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
        { front: 'Who was Louis Riel?', back: 'A Métis leader who led the Red River Resistance (1869–70) and the Northwest Resistance (1885).' },
        { front: 'What is the basis for Aboriginal rights in Canada?', back: 'Section 35 of the Constitution Act, 1982.' },
        { front: 'Where do Inuit peoples primarily live?', back: 'In the Arctic regions, including Nunavut, NWT, northern Quebec, and Labrador.' },
        { front: 'What was the purpose of residential schools?', back: 'A government policy to forcibly assimilate Indigenous children — a deeply harmful chapter in Canadian history.' },
        { front: 'What does the Canadian Multiculturalism Act (1988) recognize?', back: 'That cultural diversity is a fundamental characteristic and value of Canadian society.' },
        { front: 'What international group of French-speaking nations does Canada belong to?', back: 'La Francophonie.' }
      ],
      quiz: [
        {
          question: 'What are the three groups of Aboriginal peoples in Canada?',
          options: ['Inuit, Cree, and Métis', 'First Nations, Métis, and Inuit', 'Haudenosaunee, Algonquin, and Inuit', 'First Nations, Mohawk, and Inuit'],
          correct: 1
        },
        {
          question: 'What does the word "Inuit" mean?',
          options: ['"The land"', '"Our home"', '"The people"', '"The north"'],
          correct: 2
        },
        {
          question: 'Where do the majority of Métis people live?',
          options: ['Atlantic Canada', 'British Columbia', 'Northern territories only', 'The Prairie provinces (MB, SK, AB)'],
          correct: 3
        },
        {
          question: 'The Inuit primarily live in which region of Canada?',
          options: ['The Prairie provinces', 'Southern Ontario', 'The Arctic', 'The Atlantic coast'],
          correct: 2
        },
        {
          question: 'Aboriginal and treaty rights are protected under which section of the Constitution?',
          options: ['Section 15', 'Section 33', 'Section 35', 'Section 91'],
          correct: 2
        },
        {
          question: 'Who was Louis Riel?',
          options: ['Canada\'s first French-Canadian Prime Minister', 'A Métis leader who fought for the rights of his people', 'The founder of New France', 'A Loyalist leader who settled Ontario'],
          correct: 1
        },
        {
          question: 'Residential schools in Canada were designed to:',
          options: ['Teach Indigenous children in their own languages', 'Train Indigenous peoples as government officials', 'Forcibly assimilate Indigenous children into European-Canadian culture', 'Provide university education to First Nations leaders'],
          correct: 2
        },
        {
          question: 'The Canadian Multiculturalism Act (1988) recognizes:',
          options: ['English as Canada\'s primary language', 'Cultural diversity as a fundamental value of Canadian society', 'Quebec as a distinct society', 'Indigenous self-government rights'],
          correct: 1
        },
        {
          question: 'Most Canadians live in cities, particularly in:',
          options: ['The Prairie provinces', 'The Pacific coast', 'The Quebec City–Windsor corridor', 'The Atlantic provinces'],
          correct: 2
        },
        {
          question: 'Nunavut is significant to Inuit peoples because:',
          options: ['It is the largest province by area', 'It was created in 1867 as the first Indigenous territory', 'It was established in 1999 as the Inuit homeland', 'It is the only territory with an official Indigenous language'],
          correct: 2
        },
        {
          question: 'Canada\'s approximate population is:',
          options: ['15 million', '28 million', '38 million', '52 million'],
          correct: 2
        },
        {
          question: '"First Nations" refers to:',
          options: ['Only Inuit peoples of the Arctic', 'All Aboriginal peoples together', 'Indigenous peoples who are neither Métis nor Inuit', 'People who arrived in Canada before Confederation'],
          correct: 2
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
        { front: 'What happened at the Battle of the Plains of Abraham (1759)?', back: 'British forces under General Wolfe defeated the French under Montcalm, ending French military power in North America.' },
        { front: 'When did Confederation take place?', back: 'July 1, 1867.' },
        { front: 'Name the four founding provinces.', back: 'Ontario, Quebec, Nova Scotia, and New Brunswick.' },
        { front: 'Who was Canada\'s first Prime Minister?', back: 'Sir John A. Macdonald.' },
        { front: 'Who first mapped Canada\'s east coast for England, and when?', back: 'John Cabot, 1497.' },
        { front: 'What did the Quebec Act of 1774 protect?', back: 'The French language, Roman Catholic religion, and French civil law in Quebec.' },
        { front: 'Where did United Empire Loyalists settle after the American Revolution?', back: 'Nova Scotia, New Brunswick, and present-day Ontario.' },
        { front: 'What is Canada\'s national motto and what does it mean?', back: '"A Mari Usque Ad Mare" — "From Sea to Sea."' },
        { front: 'What colony did Jacques Cartier claim for France in 1534?', back: 'He sailed into the Gulf of St. Lawrence and claimed the land for France.' }
      ],
      quiz: [
        {
          question: 'When did Canada become a self-governing Dominion?',
          options: ['July 1, 1776', 'July 1, 1867', 'July 1, 1931', 'July 1, 1982'],
          correct: 1
        },
        {
          question: 'The Quebec Act of 1774 allowed French Canadians to keep which of the following?',
          options: ['Only English common law', 'Language, religion, and civil law', 'Independence from Britain', 'A republican government'],
          correct: 1
        },
        {
          question: 'Who was the first European since the Vikings to map Canada\'s east coast (1497)?',
          options: ['Jacques Cartier', 'Samuel de Champlain', 'John Cabot', 'Henry Hudson'],
          correct: 2
        },
        {
          question: 'Who founded Quebec City and in what year?',
          options: ['Jacques Cartier, 1534', 'John Cabot, 1497', 'Samuel de Champlain, 1608', 'Louis de Frontenac, 1672'],
          correct: 2
        },
        {
          question: 'Which were the four founding provinces of Confederation in 1867?',
          options: [
            'Ontario, Quebec, Nova Scotia, and Prince Edward Island',
            'Ontario, Quebec, Nova Scotia, and New Brunswick',
            'Quebec, New Brunswick, Manitoba, and British Columbia',
            'Ontario, Nova Scotia, New Brunswick, and Newfoundland'
          ],
          correct: 1
        },
        {
          question: 'Who was Canada\'s first Prime Minister?',
          options: ['Sir Wilfrid Laurier', 'Sir George-Étienne Cartier', 'Sir John A. Macdonald', 'Louis Riel'],
          correct: 2
        },
        {
          question: 'United Empire Loyalists came to Canada after:',
          options: ['The War of 1812', 'The American Revolution', 'The Battle of the Plains of Abraham', 'The Red River Resistance'],
          correct: 1
        },
        {
          question: 'What happened at the Battle of the Plains of Abraham (1759)?',
          options: [
            'Canada officially gained independence from Britain',
            'British forces under Wolfe defeated French forces under Montcalm, ending French military power in North America',
            'Canadian women gained the right to vote',
            'The four founding provinces signed Confederation'
          ],
          correct: 1
        },
        {
          question: 'New France developed primarily around which industry?',
          options: ['The fishing industry', 'The fur trade', 'Gold mining', 'Farming the Prairies'],
          correct: 1
        },
        {
          question: 'What does the motto "A Mari Usque Ad Mare" mean?',
          options: ['"Strong and free"', '"True North"', '"From sea to sea"', '"Peace, order, and good government"'],
          correct: 2
        },
        {
          question: 'Canada became a Dominion in 1867, meaning it:',
          options: [
            'Broke completely from British rule',
            'Remained connected to the Crown while becoming self-governing',
            'Merged with the United States',
            'Became an independent French territory'
          ],
          correct: 1
        },
        {
          question: 'The Constitutional Act of 1791 divided Canada into:',
          options: ['English Canada and French Canada', 'Upper Canada and Lower Canada', 'East Canada and West Canada', 'Canada East and Canada West'],
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
        { front: 'What made western settlement possible after 1885?', back: 'Completion of the Canadian Pacific Railway (CPR).' },
        { front: 'Why did British Columbia join Confederation in 1871?', back: 'It was promised a transcontinental railway.' },
        { front: 'What happened to Louis Riel after the Northwest Resistance?', back: 'He was tried for treason and executed in 1885.' },
        { front: 'Who was the first French Canadian Prime Minister?', back: 'Sir Wilfrid Laurier (1896–1911).' },
        { front: 'When did the Klondike Gold Rush occur?', back: 'The 1890s — prospectors flooded Yukon\'s Klondike region.' },
        { front: 'In what year was the CPR completed?', back: '1885.' },
        { front: 'When did Saskatchewan and Alberta join Confederation?', back: '1905.' },
        { front: 'What led to Manitoba joining Confederation in 1870?', back: 'The Red River Resistance led by Louis Riel.' },
        { front: 'When did Prince Edward Island join Confederation?', back: '1873.' }
      ],
      quiz: [
        {
          question: 'The Canadian Pacific Railway was completed in which year?',
          options: ['1867', '1871', '1885', '1896'],
          correct: 2
        },
        {
          question: 'Who was Canada\'s first French Canadian Prime Minister?',
          options: ['Pierre Trudeau', 'Sir John A. Macdonald', 'Sir Wilfrid Laurier', 'Lester B. Pearson'],
          correct: 2
        },
        {
          question: 'Manitoba entered Confederation in 1870 as a result of:',
          options: ['The Klondike Gold Rush', 'The Red River Resistance led by Louis Riel', 'The completion of the CPR', 'The Fenian Raids'],
          correct: 1
        },
        {
          question: 'Why did British Columbia join Confederation in 1871?',
          options: [
            'It was promised the right to mine gold freely',
            'It wanted to protect the French language',
            'It was threatened with American annexation',
            'It was promised a transcontinental railway'
          ],
          correct: 3
        },
        {
          question: 'What happened to Louis Riel after the 1885 Northwest Resistance?',
          options: ['He was exiled to France', 'He became a senator', 'He was executed for treason', 'He was pardoned by the government'],
          correct: 2
        },
        {
          question: 'The Klondike Gold Rush of the 1890s took place in which territory?',
          options: ['Northwest Territories', 'Nunavut', 'Yukon', 'British Columbia'],
          correct: 2
        },
        {
          question: 'Saskatchewan and Alberta both joined Confederation in:',
          options: ['1870', '1885', '1898', '1905'],
          correct: 3
        },
        {
          question: 'Prince Edward Island joined Confederation in:',
          options: ['1867', '1870', '1871', '1873'],
          correct: 3
        },
        {
          question: 'Newfoundland and Labrador, the last province, joined Confederation in:',
          options: ['1873', '1905', '1931', '1949'],
          correct: 3
        },
        {
          question: 'The Chinese Head Tax was imposed on Chinese immigrants in the early 1900s. The Government of Canada later:',
          options: ['Expanded the tax to all Asian immigrants', 'Issued an apology and acknowledged it was wrong', 'Made it a permanent policy', 'Extended it to Japanese immigrants only'],
          correct: 1
        },
        {
          question: 'Sir Wilfrid Laurier is known for:',
          options: [
            'Completing the CPR in 1885',
            'Leading Canada in the First World War',
            'Being the first French Canadian Prime Minister and overseeing massive western immigration',
            'Introducing the Charter of Rights and Freedoms'
          ],
          correct: 2
        },
        {
          question: 'Canada\'s National Policy under Sir John A. Macdonald focused on:',
          options: [
            'Establishing French as the national language',
            'Building the transcontinental railway and settling the West',
            'Negotiating independence from Britain',
            'Expanding the Senate to 150 members'
          ],
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
            'Lester B. Pearson introduced Medicare and won the Nobel Peace Prize in 1957.',
            'Terry Fox ran the Marathon of Hope (1980) to raise funds for cancer research.',
            'Tommy Douglas, "the father of Medicare," introduced universal healthcare in Saskatchewan.'
          ]
        }
      ],
      flashcards: [
        { front: 'Why is the Battle of Vimy Ridge significant?', back: 'All four divisions of the Canadian Corps fought together for the first time — April 9, 1917.' },
        { front: 'Which beach did Canadians storm on D-Day?', back: 'Juno Beach, Normandy, France — June 6, 1944.' },
        { front: 'Which was the last province to join Canada, and when?', back: 'Newfoundland and Labrador, 1949.' },
        { front: 'When was the current Canadian flag adopted?', back: '1965.' },
        { front: 'When was Nunavut created?', back: '1999.' },
        { front: 'Who won the Nobel Peace Prize in 1957 for creating UN peacekeeping?', back: 'Lester B. Pearson.' },
        { front: 'When did women gain the right to vote in federal elections?', back: '1918.' },
        { front: 'What did Terry Fox do in 1980?', back: 'Ran the Marathon of Hope to raise awareness and funds for cancer research.' },
        { front: 'When was the Charter of Rights and Freedoms enacted?', back: '1982 (Constitution Act, 1982).' },
        { front: 'What was the "Persons Case" of 1929?', back: 'A ruling that women are legally recognized as "persons" and could be appointed to the Senate.' }
      ],
      quiz: [
        {
          question: 'Why is April 9, 1917 (Vimy Ridge) significant in Canadian history?',
          options: [
            'Canada officially declared war on Germany',
            'All four divisions of the Canadian Corps fought together for the first time',
            'Canadian women gained the right to vote',
            'Canada signed the Treaty of Versailles'
          ],
          correct: 1
        },
        {
          question: 'When did women gain the right to vote in Canadian federal elections?',
          options: ['1916', '1918', '1929', '1945'],
          correct: 1
        },
        {
          question: 'What happened on June 6, 1944 (D-Day)?',
          options: [
            'Canadians fought at Vimy Ridge',
            'Canada declared war on Japan',
            'Canadian forces stormed Juno Beach in Normandy',
            'Canadian troops entered Berlin'
          ],
          correct: 2
        },
        {
          question: 'Which was the last province to join Confederation, and when?',
          options: ['Prince Edward Island, 1873', 'Manitoba, 1870', 'British Columbia, 1871', 'Newfoundland and Labrador, 1949'],
          correct: 3
        },
        {
          question: 'Who won the Nobel Peace Prize in 1957 for helping create UN peacekeeping forces?',
          options: ['John Diefenbaker', 'Tommy Douglas', 'Pierre Trudeau', 'Lester B. Pearson'],
          correct: 3
        },
        {
          question: 'When was the current Canadian flag (the Maple Leaf) adopted?',
          options: ['1945', '1952', '1965', '1967'],
          correct: 2
        },
        {
          question: 'When was Nunavut created?',
          options: ['1949', '1967', '1982', '1999'],
          correct: 3
        },
        {
          question: 'The Winnipeg General Strike of 1919 was:',
          options: [
            'A military protest against conscription',
            'One of Canada\'s largest labour actions in history',
            'A protest against Confederation',
            'A strike by railway workers against the CPR'
          ],
          correct: 1
        },
        {
          question: 'Terry Fox ran the Marathon of Hope in 1980 to:',
          options: [
            'Celebrate Canada\'s centennial',
            'Set a world running record',
            'Raise awareness and funding for cancer research',
            'Promote cross-country tourism'
          ],
          correct: 2
        },
        {
          question: 'The "Persons Case" of 1929 ruled that:',
          options: [
            'Indigenous peoples had the right to vote',
            'Women were legally recognized as persons eligible for Senate appointments',
            'Quebec could maintain its civil law system',
            'Canada had full independence from Britain'
          ],
          correct: 1
        },
        {
          question: 'Canada\'s role in the Battle of the Atlantic (WWII) was to:',
          options: [
            'Lead the D-Day landings at Normandy',
            'Drop atomic weapons on Japan',
            'Protect Allied supply convoys crossing the ocean to Britain',
            'Invade the Italian beaches'
          ],
          correct: 2
        },
        {
          question: 'The Charter of Rights and Freedoms was enacted in:',
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
        { front: 'Who is Canada\'s head of government?', back: 'The Prime Minister.' },
        { front: 'What are the three parts of Parliament?', back: 'The Crown, the Senate (105 senators), and the House of Commons (338 Members).' },
        { front: 'How many senators does Canada have?', back: '105.' },
        { front: 'How many Members of Parliament are elected?', back: '338.' },
        { front: 'What does "responsible government" mean?', back: 'The Cabinet must hold the confidence (support) of a majority of elected Members of Parliament.' },
        { front: 'Who represents the Sovereign at the provincial level?', back: 'The Lieutenant Governor.' },
        { front: 'What are Canada\'s three branches of government?', back: 'Executive (PM and Cabinet), Legislative (Parliament), and Judicial (courts).' },
        { front: 'Name a federal responsibility.', back: 'National defence, criminal law, banking, immigration, or interprovincial trade.' },
        { front: 'Name a provincial responsibility.', back: 'Education, health care delivery, highways, or natural resources.' }
      ],
      quiz: [
        {
          question: 'Who is Canada\'s head of state?',
          options: ['The Prime Minister', 'The Governor General', 'The Sovereign (King Charles III)', 'The Chief Justice of Canada'],
          correct: 2
        },
        {
          question: 'Who represents the Sovereign at the federal level in Canada?',
          options: ['The Prime Minister', 'The Speaker of the Senate', 'The Governor General', 'The Chief Justice'],
          correct: 2
        },
        {
          question: 'Who represents the Sovereign at the provincial level?',
          options: ['The Premier', 'The Lieutenant Governor', 'The Attorney General', 'The Provincial Chief Justice'],
          correct: 1
        },
        {
          question: 'How many senators are in the Canadian Senate?',
          options: ['50', '105', '308', '338'],
          correct: 1
        },
        {
          question: 'How many seats are in the House of Commons?',
          options: ['105', '265', '308', '338'],
          correct: 3
        },
        {
          question: 'What does "responsible government" mean?',
          options: [
            'The government must produce a balanced budget each year',
            'The Cabinet must hold the confidence of a majority of elected MPs',
            'The King personally approves all federal legislation',
            'The Senate can block any bill from the House of Commons'
          ],
          correct: 1
        },
        {
          question: 'Which of the following is a federal (not provincial) responsibility?',
          options: ['Education', 'Health care delivery', 'National defence', 'Property rights'],
          correct: 2
        },
        {
          question: 'Which of the following is a provincial (not federal) responsibility?',
          options: ['Criminal law', 'Currency and banking', 'National defence', 'Education'],
          correct: 3
        },
        {
          question: 'What must happen for a bill to become law in Canada?',
          options: [
            'The Prime Minister signs it into law',
            'It passes the House of Commons, the Senate, and receives Royal Assent',
            'A national referendum must approve it',
            'The Supreme Court reviews and approves it'
          ],
          correct: 1
        },
        {
          question: 'A "minority government" is one where:',
          options: [
            'The governing party won more than half of all seats',
            'Two parties govern in a formal coalition',
            'The governing party has the most seats but fewer than half',
            'The Governor General appoints a PM without an election'
          ],
          correct: 2
        },
        {
          question: 'What are Canada\'s three branches of government?',
          options: [
            'Federal, provincial, and municipal',
            'Monarchy, Parliament, and the courts',
            'Executive, legislative, and judicial',
            'Senate, House of Commons, and Cabinet'
          ],
          correct: 2
        },
        {
          question: 'The Senate\'s function in lawmaking is to:',
          options: [
            'Elect the Prime Minister',
            'Propose the national budget',
            'Provide "sober second thought" on legislation',
            'Approve appointments to the Supreme Court'
          ],
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
        { front: 'What is a polling station?', back: 'The place where eligible voters go to cast their ballot.' },
        { front: 'How many federal ridings are there?', back: '338.' },
        { front: 'What should you do if you do not receive a voter information card?', back: 'Contact Elections Canada to confirm you are on the voters list.' },
        { front: 'What is a returning officer?', back: 'The official who administers the federal election in each riding.' },
        { front: 'What is Elections Canada?', back: 'The independent agency that administers federal elections.' },
        { front: 'What is "first-past-the-post"?', back: 'The candidate with the most votes in a riding wins the seat, even without a majority.' },
        { front: 'What is a majority government?', back: 'A government where the ruling party holds more than half the seats in the House of Commons.' },
        { front: 'By law, how often must a federal election be held?', back: 'At least every five years (constitutional maximum).' }
      ],
      quiz: [
        {
          question: 'Who is entitled to vote in a Canadian federal election?',
          options: [
            'Any resident of Canada aged 18 or older',
            'Canadian citizens aged 18 or older',
            'Canadian citizens aged 16 or older',
            'Anyone who pays Canadian income taxes'
          ],
          correct: 1
        },
        {
          question: 'What is a polling station?',
          options: [
            'The office where candidates register to run',
            'The place where eligible voters cast their ballot',
            'The central office where election results are tallied',
            'The Elections Canada regional headquarters'
          ],
          correct: 1
        },
        {
          question: 'What is a returning officer?',
          options: [
            'The leader of a political party',
            'An MP who wins re-election',
            'The official who administers the election in a riding',
            'The head of Elections Canada nationally'
          ],
          correct: 2
        },
        {
          question: 'By law, how often must a federal election be held in Canada?',
          options: ['Every two years', 'Every three years', 'Every four years', 'At least every five years'],
          correct: 3
        },
        {
          question: 'How many federal electoral ridings (constituencies) are there?',
          options: ['105', '265', '308', '338'],
          correct: 3
        },
        {
          question: 'Which agency is responsible for administering federal elections in Canada?',
          options: ['The Privy Council Office', 'The Department of Justice', 'Elections Canada', 'The Governor General\'s Office'],
          correct: 2
        },
        {
          question: 'What is the role of the Leader of the Official Opposition?',
          options: [
            'To assist the Prime Minister in governing',
            'To scrutinize the government and present an alternative platform',
            'To chair debates in the Senate',
            'To represent Canada in international negotiations'
          ],
          correct: 1
        },
        {
          question: 'A "majority government" means the governing party:',
          options: [
            'Won every riding in Canada',
            'Has more than half the seats in the House of Commons',
            'Has the support of all Senate members',
            'Has governed for more than one term'
          ],
          correct: 1
        },
        {
          question: 'Under "first-past-the-post," who wins a riding?',
          options: [
            'The candidate who gets more than 50% of votes',
            'The party with the most votes nationally',
            'The candidate with the most votes in that riding',
            'The incumbent MP, unless defeated by 10% or more'
          ],
          correct: 2
        },
        {
          question: 'If you do not receive a voter information card before an election, you should:',
          options: [
            'You cannot vote without the card',
            'Contact your local MP',
            'Contact Elections Canada to confirm your registration',
            'Register at the polling station on election day only'
          ],
          correct: 2
        },
        {
          question: 'Members of Parliament are elected by:',
          options: [
            'The Governor General',
            'The Prime Minister',
            'Canadian citizens in their ridings through a general election',
            'Provincial legislatures'
          ],
          correct: 2
        },
        {
          question: 'What is a minority government in Canada?',
          options: [
            'A government formed by a party with more than half of all seats',
            'A government formed by two parties in a formal coalition',
            'A government where the leading party has the most seats but fewer than half',
            'A government appointed by the Governor General without an election'
          ],
          correct: 2
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
        { front: 'What does "rule of law" mean?', back: 'Everyone, including the government, must obey the law. No one is above it.' },
        { front: 'What is presumption of innocence?', back: 'An accused person is considered innocent until proven guilty in court.' },
        { front: 'Where can you get help if you cannot afford a lawyer?', back: 'Legal Aid Services, available in most communities.' },
        { front: 'What is the RCMP?', back: 'The Royal Canadian Mounted Police — Canada\'s national police force (the "Mounties").' },
        { front: 'Who makes federal laws in Canada?', back: 'Parliament (the House of Commons and the Senate).' },
        { front: 'What is the difference between a summary offence and an indictable offence?', back: 'Summary = minor offence, lighter penalty. Indictable = serious crime, may involve a jury trial.' },
        { front: 'If arrested, what rights do you have?', back: 'The right to remain silent and the right to speak to a lawyer without delay.' },
        { front: 'What does a jury do?', back: 'A group of citizens who decide whether an accused person is guilty or not guilty.' }
      ],
      quiz: [
        {
          question: 'What does "rule of law" mean in Canada?',
          options: [
            'The police decide who is guilty',
            'Everyone, including the government, must follow the law',
            'Laws apply only to Canadian citizens',
            'The King is above the law'
          ],
          correct: 1
        },
        {
          question: 'What is "presumption of innocence"?',
          options: [
            'Police may hold suspects without charge indefinitely',
            'A person is innocent until proven guilty in court',
            'The Crown must always accept a guilty plea',
            'Citizens cannot be arrested without a warrant'
          ],
          correct: 1
        },
        {
          question: 'If you are arrested in Canada, you have the right to:',
          options: [
            'Refuse to identify yourself to police',
            'Remain silent and speak to a lawyer without delay',
            'Request a non-jury trial in all cases',
            'Leave the country immediately'
          ],
          correct: 1
        },
        {
          question: 'Who makes federal laws in Canada?',
          options: ['The RCMP', 'The Supreme Court', 'The Governor General', 'Parliament (the House of Commons and Senate)'],
          correct: 3
        },
        {
          question: 'A crime in Canada is an offence against:',
          options: ['The individual victim only', 'The provincial government', 'Society as a whole', 'The federal Crown corporation'],
          correct: 2
        },
        {
          question: 'If you cannot afford a lawyer, you should contact:',
          options: ['Elections Canada', 'The Senate', 'Legal Aid', 'The Office of the Governor General'],
          correct: 2
        },
        {
          question: 'What is the RCMP?',
          options: [
            'Canada\'s immigration enforcement agency',
            'Canada\'s national police force',
            'A provincial policing organization',
            'A military police unit'
          ],
          correct: 1
        },
        {
          question: 'A "summary offence" is:',
          options: [
            'A serious crime that requires a jury trial',
            'A civil dispute between individuals',
            'A minor offence with a lighter penalty',
            'An offence that can only be tried in federal court'
          ],
          correct: 2
        },
        {
          question: 'An "indictable offence" is:',
          options: [
            'A minor traffic violation',
            'A civil dispute between individuals',
            'A serious crime that may involve a jury trial',
            'A bylaw infraction'
          ],
          correct: 2
        },
        {
          question: 'The Supreme Court of Canada is:',
          options: [
            'Responsible for making new laws',
            'Appointed by the Senate',
            'The highest court and final authority on Canadian law',
            'Only involved in election disputes'
          ],
          correct: 2
        },
        {
          question: 'What is the role of the police in Canada\'s justice system?',
          options: [
            'To create laws for the country',
            'To sentence offenders after a trial',
            'To enforce laws, maintain peace, and arrest those suspected of crimes',
            'To provide legal aid to accused persons'
          ],
          correct: 2
        },
        {
          question: 'The principle that no one is above the law applies to:',
          options: ['Only private citizens', 'Only government officials', 'Only corporations', 'Everyone, including the government and the Sovereign'],
          correct: 3
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
        { front: 'When was the current Canadian flag adopted?', back: '1965.' },
        { front: 'When did "O Canada" become the official national anthem?', back: '1980.' },
        { front: 'What are Canada\'s two official national sports?', back: 'Hockey (winter) and lacrosse (summer).' },
        { front: 'What is the Order of Canada?', back: 'Canada\'s highest civilian honour for outstanding achievement, established 1967.' },
        { front: 'When is Remembrance Day and what does the poppy symbolize?', back: 'November 11 — the poppy symbolizes remembrance of Canadians who died in war.' },
        { front: 'What is Canada\'s national animal?', back: 'The beaver.' },
        { front: 'What is Canada\'s national motto?', back: '"A Mari Usque Ad Mare" — "From Sea to Sea."' },
        { front: 'What is the Victoria Cross?', back: 'Canada\'s highest military decoration for bravery in battle.' },
        { front: 'How many points does the maple leaf on the Canadian flag have?', back: '11 points.' }
      ],
      quiz: [
        {
          question: 'When was the current Canadian flag (the Maple Leaf) adopted?',
          options: ['1945', '1952', '1965', '1967'],
          correct: 2
        },
        {
          question: 'When did "O Canada" officially become the national anthem?',
          options: ['1867', '1927', '1965', '1980'],
          correct: 3
        },
        {
          question: 'What is Canada\'s national animal?',
          options: ['The moose', 'The loon', 'The beaver', 'The bison'],
          correct: 2
        },
        {
          question: 'What are Canada\'s two official national sports?',
          options: ['Football and basketball', 'Baseball and curling', 'Hockey (winter) and lacrosse (summer)', 'Soccer and hockey'],
          correct: 2
        },
        {
          question: 'What is Canada\'s national motto?',
          options: ['"Peace, Order, and Good Government"', '"True North, Strong and Free"', '"A Mari Usque Ad Mare" — From Sea to Sea', '"My Home and Native Land"'],
          correct: 2
        },
        {
          question: 'The Order of Canada was established in:',
          options: ['1867', '1945', '1967', '1982'],
          correct: 2
        },
        {
          question: 'The Order of Canada is:',
          options: [
            'A military combat medal',
            'Canada\'s highest civilian honour for outstanding achievement',
            'An award given automatically to all new citizens',
            'A government decoration for elected MPs'
          ],
          correct: 1
        },
        {
          question: 'When is Remembrance Day observed?',
          options: ['July 1', 'October 31', 'November 11', 'December 26'],
          correct: 2
        },
        {
          question: 'The poppy is worn on Remembrance Day to symbolize:',
          options: [
            'Canadian independence',
            'The national flower of Canada',
            'Remembrance of Canadians who died in wars',
            'Canada\'s agricultural heritage'
          ],
          correct: 2
        },
        {
          question: 'The Victoria Cross is:',
          options: [
            'Canada\'s highest civilian honour',
            'An award for new citizens',
            'Canada\'s highest military decoration for bravery',
            'The symbol on the Canadian flag'
          ],
          correct: 2
        },
        {
          question: 'The maple leaf on the Canadian flag has how many points?',
          options: ['9', '11', '13', '15'],
          correct: 1
        },
        {
          question: 'The flag of Canada is predominantly which two colours?',
          options: ['Blue and white', 'Green and white', 'Red and white', 'Blue and red'],
          correct: 2
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
        { front: 'Which region is known as Canada\'s breadbasket?', back: 'The Prairie provinces (Alberta, Saskatchewan, Manitoba).' },
        { front: 'How many provinces and territories does Canada have?', back: '10 provinces and 3 territories (13 total).' },
        { front: 'What trade agreement replaced NAFTA in 2020?', back: 'CUSMA — Canada-United States-Mexico Agreement.' },
        { front: 'Which province has the largest population?', back: 'Ontario.' },
        { front: 'What is British Columbia known for?', back: 'Forestry products and Pacific trade with Asia.' },
        { front: 'What is Alberta known for?', back: 'Oil sands and energy production.' },
        { front: 'What international groups is Canada a member of?', back: 'G7, G20, NATO, Commonwealth, La Francophonie, UN, and NORAD.' }
      ],
      quiz: [
        {
          question: 'Canada\'s largest trading partner is:',
          options: ['China', 'The United Kingdom', 'Mexico', 'The United States'],
          correct: 3
        },
        {
          question: 'Which province is the smallest by area?',
          options: ['Nova Scotia', 'New Brunswick', 'Prince Edward Island', 'Newfoundland and Labrador'],
          correct: 2
        },
        {
          question: 'Which province is the largest by land area?',
          options: ['Ontario', 'British Columbia', 'Alberta', 'Quebec'],
          correct: 3
        },
        {
          question: 'Which province has the largest population in Canada?',
          options: ['British Columbia', 'Alberta', 'Quebec', 'Ontario'],
          correct: 3
        },
        {
          question: 'What trade agreement replaced NAFTA between Canada, the US, and Mexico in 2020?',
          options: ['The Trans-Pacific Partnership', 'The G7 Trade Agreement', 'CUSMA (Canada-United States-Mexico Agreement)', 'The Commonwealth Free Trade Act'],
          correct: 2
        },
        {
          question: 'Canada has how many provinces and territories?',
          options: ['10 provinces and 2 territories', '9 provinces and 3 territories', '10 provinces and 3 territories', '11 provinces and 2 territories'],
          correct: 2
        },
        {
          question: 'Which region is known as Canada\'s breadbasket?',
          options: ['British Columbia', 'The Atlantic provinces', 'The Prairie provinces (AB, SK, MB)', 'Central Canada'],
          correct: 2
        },
        {
          question: 'What are Canada\'s three territories?',
          options: [
            'Alberta, Saskatchewan, and Manitoba',
            'Yukon, Northwest Territories, and Nunavut',
            'Nunavut, Labrador, and Yukon',
            'British Columbia, Yukon, and Northwest Territories'
          ],
          correct: 1
        },
        {
          question: 'British Columbia is known primarily for:',
          options: ['Oil sands and energy production', 'Wheat and canola farming', 'Forestry and Pacific trade with Asia', 'Mining gold in the Klondike'],
          correct: 2
        },
        {
          question: 'Alberta is known primarily for:',
          options: ['Fishing and seafood', 'Forestry products', 'Oil sands and energy production', 'Automotive manufacturing'],
          correct: 2
        },
        {
          question: 'Canada is a member of which of the following international organizations?',
          options: [
            'NATO, G7, Commonwealth, La Francophonie, and the United Nations',
            'NATO, the European Union, Commonwealth, and the G7',
            'ASEAN, NATO, G20, and the United Nations',
            'OPEC, G7, Commonwealth, and NATO'
          ],
          correct: 0
        },
        {
          question: 'Quebec is Canada\'s largest province and is notable for:',
          options: [
            'Having the largest population in Canada',
            'Being the first province to join Confederation',
            'Its majority French-speaking population and civil law system',
            'Having Canada\'s largest oil reserves'
          ],
          correct: 2
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
    },

    // ── RIGHTS & RESPONSIBILITIES (expanded) ──────────────────────────────
    {
      question: 'Which category of right includes freedom of religion, expression, and peaceful assembly?',
      options: ['Democratic rights', 'Legal rights', 'Fundamental freedoms', 'Equality rights'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'Which Charter right protects Canadians from discrimination based on race, sex, or disability?',
      options: ['Mobility rights', 'Democratic rights', 'Language rights', 'Equality rights'],
      correct: 3, category: 'Rights'
    },
    {
      question: 'Which Charter right allows Canadians to live and work in any province?',
      options: ['Fundamental freedoms', 'Mobility rights', 'Democratic rights', 'Equality rights'],
      correct: 1, category: 'Rights'
    },
    {
      question: 'The right to speak to a lawyer after being arrested falls under which Charter category?',
      options: ['Mobility rights', 'Equality rights', 'Legal rights', 'Democratic rights'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'Which responsibility is legally required of Canadian citizens when called by a court?',
      options: ['Volunteering in the community', 'Serving on a jury', 'Running for public office', 'Learning both official languages'],
      correct: 1, category: 'Rights'
    },
    {
      question: 'What does the Canadian Multiculturalism Act (1988) affirm?',
      options: ['That French is the only official language', 'That cultural diversity is a fundamental Canadian value', 'That all immigrants must learn an official language within one year', 'That Aboriginal peoples are the only recognized minority'],
      correct: 1, category: 'Rights'
    },
    {
      question: 'Under language rights in the Charter, English and French have equal status:',
      options: ['In all workplaces across Canada', 'In dealings with the federal government', 'In every province and territory', 'Only in New Brunswick and Quebec'],
      correct: 1, category: 'Rights'
    },
    {
      question: 'The right to vote and to run as a candidate for public office falls under which Charter category?',
      options: ['Fundamental freedoms', 'Legal rights', 'Democratic rights', 'Equality rights'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'Which of the following is a responsibility (not just a right) of Canadian citizenship?',
      options: ['Receiving Employment Insurance', 'Using public libraries', 'Defending Canada if the need arises', 'Collecting child tax benefits'],
      correct: 2, category: 'Rights'
    },
    {
      question: 'Which right protects a Canadian from unreasonable search and seizure by the government?',
      options: ['Democratic rights', 'Mobility rights', 'Legal rights', 'Equality rights'],
      correct: 2, category: 'Rights'
    },

    // ── HISTORY (expanded) ────────────────────────────────────────────────
    {
      question: 'When did Jacques Cartier claim the St. Lawrence region for France?',
      options: ['1497', '1534', '1608', '1634'],
      correct: 1, category: 'History'
    },
    {
      question: 'Who founded Quebec City in 1608?',
      options: ['Jacques Cartier', 'John Cabot', 'Samuel de Champlain', 'Henry Hudson'],
      correct: 2, category: 'History'
    },
    {
      question: 'New France\'s economy was primarily based on:',
      options: ['Cod fishing', 'Fur trade', 'Agriculture', 'Timber export'],
      correct: 1, category: 'History'
    },
    {
      question: 'The Constitutional Act of 1791 divided Canada into:',
      options: ['Quebec and Ontario', 'Upper Canada (English) and Lower Canada (French)', 'British Canada and French Canada', 'Nova Scotia and New Brunswick'],
      correct: 1, category: 'History'
    },
    {
      question: 'Responsible government was first achieved in Canada in which province, in 1848?',
      options: ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick'],
      correct: 2, category: 'History'
    },
    {
      question: 'Which 1864 meeting of colonial leaders led directly to Confederation?',
      options: ['The Quebec Conference', 'The Charlottetown Conference', 'The Ottawa Convention', 'The London Conference'],
      correct: 1, category: 'History'
    },
    {
      question: 'Why did United Empire Loyalists come to Canada after the American Revolution?',
      options: ['They were fleeing religious persecution', 'They remained loyal to the British Crown and chose to leave the new United States', 'They were recruited by the French government', 'They were Métis settlers returning to their homeland'],
      correct: 1, category: 'History'
    },
    {
      question: 'During the War of 1812, Canada defended against invasion by:',
      options: ['France', 'Spain', 'The United States', 'Russia'],
      correct: 2, category: 'History'
    },
    {
      question: 'The Winnipeg General Strike of 1919 is significant because:',
      options: ['It led to Manitoba joining Confederation', 'It was one of the largest labour actions in Canadian history', 'It resulted in women gaining the right to vote', 'It sparked construction of the CPR'],
      correct: 1, category: 'History'
    },
    {
      question: 'Tommy Douglas is celebrated in Canadian history for:',
      options: ['Leading Canada in the Second World War', 'Introducing universal health care (Medicare) in Saskatchewan', 'Completing the Canadian Pacific Railway', 'Winning the Nobel Peace Prize'],
      correct: 1, category: 'History'
    },
    {
      question: 'Terry Fox is remembered for:',
      options: ['Running the Marathon of Hope across Canada to raise money for cancer research', 'Winning gold for Canada at the 1980 Olympics', 'Leading the Métis resistance in 1885', 'Founding the Order of Canada'],
      correct: 0, category: 'History'
    },
    {
      question: 'When Canada declared war in the Second World War, it did so:',
      options: ['The same day as Britain, August 4, 1939', 'One week after Britain, independently — showing its autonomy', 'Only after the United States joined in December 1941', 'On D-Day, June 6, 1944'],
      correct: 1, category: 'History'
    },
    {
      question: 'The Klondike Gold Rush took place in the 1890s in which territory?',
      options: ['Northwest Territories', 'Nunavut', 'Yukon', 'British Columbia'],
      correct: 2, category: 'History'
    },
    {
      question: 'The North-West Mounted Police (founded 1873) was the predecessor to which organization?',
      options: ['The Canadian Army', 'The Royal Canadian Mounted Police (RCMP)', 'The Ontario Provincial Police', 'The Department of National Defence'],
      correct: 1, category: 'History'
    },
    {
      question: 'Canada sent troops to the Korean War (1950–1953) as part of:',
      options: ['A British Empire force', 'A United Nations force defending South Korea', 'A bilateral agreement with the United States only', 'A NATO defensive mission in Europe'],
      correct: 1, category: 'History'
    },
    {
      question: 'How many United Empire Loyalists came to Canada after the American Revolution?',
      options: ['About 5,000', 'About 15,000', 'About 40,000 to 50,000', 'About 100,000'],
      correct: 2, category: 'History'
    },
    {
      question: 'Sir John A. Macdonald\'s "National Policy" (1879) introduced:',
      options: ['Free trade with the United States', 'Protective tariffs to encourage Canadian industry and settle the West', 'Abolition of the Senate', 'A referendum on Quebec sovereignty'],
      correct: 1, category: 'History'
    },
    {
      question: 'The patriation of the Constitution in 1982 was significant because:',
      options: ['Canada became a republic for the first time', 'Canada gained full constitutional independence from Britain and the Charter of Rights was enacted', 'Quebec officially became a bilingual province', 'The Senate was replaced by an elected body'],
      correct: 1, category: 'History'
    },
    {
      question: 'General Isaac Brock is remembered as a hero of which conflict?',
      options: ['The Battle of Vimy Ridge (1917)', 'The War of 1812', 'The Northwest Resistance (1885)', 'The Boer War (1899–1902)'],
      correct: 1, category: 'History'
    },
    {
      question: 'What was the significance of the Quebec Act of 1774?',
      options: ['It gave Quebec independence from British rule', 'It allowed French Canadians to keep their language, Catholic religion, and civil law', 'It united Upper and Lower Canada into one province', 'It established the first elected assembly in New France'],
      correct: 1, category: 'History'
    },

    // ── GOVERNMENT (expanded) ────────────────────────────────────────────
    {
      question: 'How many judges serve on the Supreme Court of Canada?',
      options: ['7', '9', '11', '13'],
      correct: 1, category: 'Government'
    },
    {
      question: 'Until what age do Canadian senators serve?',
      options: ['65', '70', '75', 'There is no retirement age'],
      correct: 2, category: 'Government'
    },
    {
      question: 'What is the main role of the Senate in Canada\'s Parliament?',
      options: ['To elect the Prime Minister', 'To provide "sober second thought" on legislation passed by the House of Commons', 'To appoint the Governor General', 'To represent provincial governments federally'],
      correct: 1, category: 'Government'
    },
    {
      question: 'What is a "Premier" in Canada?',
      options: ['The Deputy Prime Minister at the federal level', 'The head of government of a province or territory', 'The ceremonial representative of the Crown in a province', 'A senior Cabinet minister in the federal government'],
      correct: 1, category: 'Government'
    },
    {
      question: 'How is the Prime Minister selected in Canada?',
      options: ['Elected directly by Canadians in a national vote', 'The Governor General appoints the leader who has the most seats in the House of Commons', 'Chosen by the Senate from among its members', 'Appointed by the King of Canada personally'],
      correct: 1, category: 'Government'
    },
    {
      question: 'Which level of government is responsible for immigration in Canada?',
      options: ['Provincial', 'Municipal', 'Federal', 'Territorial only'],
      correct: 2, category: 'Government'
    },
    {
      question: 'Which level of government delivers health care in Canada?',
      options: ['Federal', 'Municipal', 'Provincial and territorial', 'Jointly by federal and municipal'],
      correct: 2, category: 'Government'
    },
    {
      question: 'What is a Member of Parliament\'s (MP\'s) primary role?',
      options: ['To appoint judges to the Supreme Court', 'To represent their riding in the House of Commons and vote on legislation', 'To administer provincial programs', 'To advise the Governor General on appointments'],
      correct: 1, category: 'Government'
    },
    {
      question: 'Which level of government manages local roads, parks, and water services?',
      options: ['Federal', 'Provincial', 'Municipal (local)', 'Territorial'],
      correct: 2, category: 'Government'
    },
    {
      question: 'What happens when a government loses a confidence vote in the House of Commons?',
      options: ['The Governor General automatically dissolves Parliament for 90 days', 'The Prime Minister must resign or ask the Governor General to call an election', 'The Senate takes over government temporarily', 'The Supreme Court appoints a caretaker government'],
      correct: 1, category: 'Government'
    },
    {
      question: 'What is the role of the Speaker of the House of Commons?',
      options: ['To vote on all legislation on behalf of the Prime Minister', 'To control debate, maintain order, and represent the House in official ceremonies', 'To serve as acting Prime Minister during elections', 'To review bills before they go to the Senate'],
      correct: 1, category: 'Government'
    },
    {
      question: 'Who appoints senators in Canada?',
      options: ['The Prime Minister directly', 'The Governor General on the advice of the Prime Minister', 'The provincial premiers by joint agreement', 'Canadian citizens through a special senatorial election'],
      correct: 1, category: 'Government'
    },

    // ── GEOGRAPHY (expanded) ─────────────────────────────────────────────
    {
      question: 'Where do the majority of Canadians live?',
      options: ['In rural farming communities', 'In cities, especially in the Quebec City to Windsor corridor', 'Along the Pacific coast', 'In the northern territories'],
      correct: 1, category: 'Geography'
    },
    {
      question: 'What is Canada\'s approximate population?',
      options: ['About 20 million', 'About 28 million', 'About 38 million', 'About 50 million'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'By land area, Canada is the ___ largest country in the world.',
      options: ['Largest', 'Second largest', 'Third largest', 'Fourth largest'],
      correct: 1, category: 'Geography'
    },
    {
      question: 'Which province is known for its forestry industry and Pacific Ocean trade routes?',
      options: ['Alberta', 'Saskatchewan', 'Manitoba', 'British Columbia'],
      correct: 3, category: 'Geography'
    },
    {
      question: 'What trade agreement replaced NAFTA between Canada, the U.S., and Mexico in 2020?',
      options: ['CETA', 'CUSMA (Canada-United States-Mexico Agreement)', 'FTAA', 'TPP'],
      correct: 1, category: 'Geography'
    },
    {
      question: 'Canada is a member of all of the following EXCEPT:',
      options: ['NATO', 'The Commonwealth', 'The European Union', 'The United Nations'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'Which city hosted the Confederation conferences of 1864, earning it the title "Birthplace of Confederation"?',
      options: ['Halifax', 'Quebec City', 'Charlottetown', 'Ottawa'],
      correct: 2, category: 'Geography'
    },

    // ── SYMBOLS & CULTURE (expanded) ──────────────────────────────────────
    {
      question: 'On what date is Canada Day celebrated, and what does it mark?',
      options: ['July 4 — independence from Britain', 'July 1 — the anniversary of Confederation in 1867', 'November 11 — the end of the First World War', 'October 1 — the first national election'],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'What does the poppy symbolize in Canada, especially on November 11?',
      options: ['The national flower of Canada', 'Remembrance of Canadians who died in wars', 'The symbol of the Order of Canada', 'Peace between Canada and France after WWI'],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'What is the Victoria Cross?',
      options: ['The highest civilian honour in Canada', 'Canada\'s highest military decoration for bravery', 'A medal awarded to all veterans of the First World War', 'A provincial honour given by Lieutenant Governors'],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'Where is the Memorial Chamber that honours Canadians who died in wars?',
      options: ['At the National War Museum in Ottawa', 'Inside the Peace Tower on Parliament Hill', 'At the National Archives of Canada', 'At the Canadian War Cemetery in Normandy'],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'What are the two colours of the Canadian flag?',
      options: ['Red, white, and blue', 'Red and white', 'Red, white, and green', 'Blue and white'],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'What is the Royal Canadian Mounted Police (RCMP) also commonly called?',
      options: ['The Redcoats', 'The Mounties', 'The Rangers', 'The Dominion Police'],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'The Commonwealth is an organization of how many countries?',
      options: ['27', '38', '54', '72'],
      correct: 2, category: 'Symbols'
    },
    {
      question: 'What is La Francophonie?',
      options: ['A Quebec provincial cultural organization', 'An international organization of French-speaking nations', 'A French-language broadcasting network', 'The official French language bureau in the federal government'],
      correct: 1, category: 'Symbols'
    },

    // ── ELECTIONS (expanded) ──────────────────────────────────────────────
    {
      question: 'Who may stand as a candidate in a Canadian federal election?',
      options: ['Any Canadian resident aged 18 or older', 'Any Canadian citizen aged 18 or older', 'Any Canadian citizen aged 21 or older', 'Any permanent resident aged 18 or older'],
      correct: 1, category: 'Elections'
    },
    {
      question: 'What is a federal "riding" (or constituency) in Canada?',
      options: ['A political party\'s regional headquarters', 'An electoral district represented by one Member of Parliament', 'A polling station location', 'A geographic unit used only for census purposes'],
      correct: 1, category: 'Elections'
    },
    {
      question: 'In the "first-past-the-post" electoral system, who wins a riding?',
      options: ['The candidate who receives more than 50% of votes', 'The candidate with the most votes, even without a majority', 'The candidate chosen by the party leader', 'The candidate with the most campaign funds raised'],
      correct: 1, category: 'Elections'
    },
    {
      question: 'What should you do if you do not receive a voter information card before a federal election?',
      options: ['You are not eligible to vote in that election', 'Wait until election day and ask at the polling station', 'Contact Elections Canada to confirm you are on the voters list', 'Contact your Member of Parliament\'s office'],
      correct: 2, category: 'Elections'
    },
    {
      question: 'What is a "majority government" in Canada?',
      options: ['A government supported by more than two parties', 'A party that holds more than half of all seats in the House of Commons', 'A government with more than 75% approval in polls', 'A party that won more total votes than any other party'],
      correct: 1, category: 'Elections'
    },
    {
      question: 'Voting in Canadian federal elections is:',
      options: ['Mandatory by law for all citizens 18+', 'A right and a civic responsibility, but not legally required', 'Only open to citizens who filed income taxes that year', 'Open to all permanent residents 18+'],
      correct: 1, category: 'Elections'
    },
    {
      question: 'After a federal election, how is the government formed?',
      options: ['The King appoints the PM based on a popularity vote', 'The party with the most seats in the House of Commons is invited to form the government', 'The Senate votes on which party should govern', 'The Governor General holds a second vote among elected MPs'],
      correct: 1, category: 'Elections'
    },

    // ── JUSTICE (expanded) ───────────────────────────────────────────────
    {
      question: 'What is a "summary offence" in Canadian law?',
      options: ['The most serious type of crime, tried before a judge and jury', 'A minor criminal offence dealt with quickly in lower courts', 'A civil dispute between two private parties', 'An offence that results in automatic deportation'],
      correct: 1, category: 'Justice'
    },
    {
      question: 'What is an "indictable offence" in Canadian law?',
      options: ['A minor traffic or parking violation', 'A civil dispute between neighbours', 'A serious crime that may result in a trial by jury', 'An administrative penalty issued by a government agency'],
      correct: 2, category: 'Justice'
    },
    {
      question: 'Who is primarily responsible for enforcing laws in Canada?',
      options: ['Parliament', 'The courts', 'Police forces, including the RCMP', 'The Governor General'],
      correct: 2, category: 'Justice'
    },
    {
      question: 'Canadian citizens 18 and older may be called to:',
      options: ['Attend mandatory military training each year', 'Serve on a jury — a civic duty', 'Pay a special civic tax each year', 'Serve as a returning officer in every federal election'],
      correct: 1, category: 'Justice'
    },
    {
      question: 'What is the role of the Supreme Court of Canada?',
      options: ['To pass new legislation when Parliament is deadlocked', 'To serve as the highest court of appeal and interpret the Constitution', 'To review all bills before they receive Royal Assent', 'To elect the Chief Justice and appoint other judges'],
      correct: 1, category: 'Justice'
    },
    {
      question: 'What does "rule of law" mean in Canada?',
      options: ['Only private citizens must obey the law, not elected officials', 'No person or institution — including the government — is above the law', 'The King is the supreme lawmaker in Canada', 'Laws only apply if passed by a two-thirds majority of Parliament'],
      correct: 1, category: 'Justice'
    },
    {
      question: 'What is "habeas corpus" in Canadian law?',
      options: ['The right to a speedy trial within 24 hours', 'The right not to be held in prison without just cause', 'The right to confront witnesses in open court', 'The right to refuse to testify against oneself'],
      correct: 1, category: 'Justice'
    },

    // ── RICHMOND HILL LIBRARY Q-BANK — gap fill ───────────────────────────
    // History
    {
      question: 'Approximately how many Canadians served in the First World War?',
      options: ['About 7,000', 'About 60,000', 'More than 600,000', '8 million'],
      correct: 2, category: 'History'
    },
    {
      question: 'Quebec experienced an era of rapid change in the 1960s. What is this called?',
      options: ['The West Movement', 'The Quiet Revolution', 'La Francophonie', 'The Referendum'],
      correct: 1, category: 'History'
    },
    {
      question: 'What is the significance of the discovery of insulin by Sir Frederick Banting and Charles Best?',
      options: ['It cured all forms of diabetes permanently', 'It has saved millions of lives worldwide', 'It was Canada\'s first medical export', 'It won Canada its first Nobel Prize'],
      correct: 1, category: 'History'
    },
    {
      question: 'Who are the Acadians?',
      options: ['Aboriginal peoples of the Arctic', 'Descendants of French colonists who settled in the Maritime provinces beginning in 1604', 'English-speaking Loyalists who came from the United States', 'Métis people of the Prairie provinces'],
      correct: 1, category: 'History'
    },
    {
      question: 'Who is considered the Father of Manitoba?',
      options: ['Sir John A. Macdonald', 'Sam Steele', 'George-Étienne Cartier', 'Louis Riel'],
      correct: 3, category: 'History'
    },
    {
      question: 'Who was General Sir Arthur Currie?',
      options: ['A military leader of the Métis in the 19th century', 'The founder of the RCMP', 'Canada\'s greatest soldier in the First World War', 'The first Canadian to win the Victoria Cross'],
      correct: 2, category: 'History'
    },
    {
      question: 'Who led Quebec into Confederation?',
      options: ['Sir Wilfrid Laurier', 'Sir John A. Macdonald', 'Sir George-Étienne Cartier', 'Sir Louis-Hippolyte La Fontaine'],
      correct: 2, category: 'History'
    },
    {
      question: 'Who was Sir Louis-Hippolyte La Fontaine?',
      options: ['The first French-Canadian Prime Minister of Canada', 'A champion of democracy and French language rights, and first leader of a responsible government in the Canadas', 'The leader of the Quiet Revolution in Quebec', 'Canada\'s first Governor General'],
      correct: 1, category: 'History'
    },
    {
      question: 'Who was Sir Sam Steele?',
      options: ['A Métis leader in the Northwest Resistance', 'A great frontier hero, Mounted Policeman and soldier of Canada', 'The Father of Manitoba', 'Canada\'s first Minister of Justice'],
      correct: 1, category: 'History'
    },
    {
      question: 'Who were the Voyageurs?',
      options: ['Explorers who searched for the Northwest Passage', 'Montreal-based traders who travelled by canoe through Canada\'s interior', 'European immigrants who arrived in the 1700s', 'Settlers who came during the Klondike Gold Rush'],
      correct: 1, category: 'History'
    },
    {
      question: 'What did the Constitutional Act of 1791 establish?',
      options: ['The Canadian Charter of Rights and Freedoms', 'The Dominion of Canada', 'Legislative assemblies elected by the people, dividing Canada into Upper and Lower Canada', 'Equal rights for women in Canada'],
      correct: 2, category: 'History'
    },
    {
      question: 'When did the British North America Act come into effect, creating the Dominion of Canada?',
      options: ['1763', '1791', '1867', '1931'],
      correct: 2, category: 'History'
    },

    // Government
    {
      question: 'What is a law called before it is officially passed?',
      options: ['A decree', 'A bill', 'A statute', 'A mandate'],
      correct: 1, category: 'Government'
    },
    {
      question: 'What do you promise when you take the Oath of Citizenship?',
      options: ['To learn both official languages fluently', 'To pledge allegiance to the King, observe the laws of Canada, and fulfil the duties of a Canadian citizen', 'To renounce all other citizenships', 'To serve in the Canadian Armed Forces if called upon'],
      correct: 1, category: 'Government'
    },
    {
      question: 'Who are the founding peoples of Canada?',
      options: ['Métis, French and British', 'Inuit, Aboriginal and European', 'Aboriginal, French and British', 'First Nations, French and English'],
      correct: 2, category: 'Government'
    },
    {
      question: 'Who has major responsibilities for governance on First Nations reserves?',
      options: ['The federal government alone', 'Municipal governments', 'Band chiefs and councillors', 'Provincial and territorial governments'],
      correct: 2, category: 'Government'
    },
    {
      question: 'Name two key documents that together contain the rights and freedoms of Canadians.',
      options: ['The Constitution Act, 1867 and the Official Languages Act', 'The Canadian Charter of Rights and Freedoms and the Magna Carta', 'The British North America Act and the War Measures Act', 'The Statute of Westminster and the Constitution Act, 1867'],
      correct: 1, category: 'Government'
    },
    {
      question: 'Who is Canada\'s Head of State?',
      options: ['The Prime Minister', 'The Governor General', 'His Majesty the King', 'The Chief Justice of the Supreme Court'],
      correct: 2, category: 'Government'
    },

    // Justice
    {
      question: 'What does "presumption of innocence" mean in Canada\'s justice system?',
      options: ['Everyone is guilty until proven innocent', 'Guilt is decided by a jury alone', 'Everyone is innocent until proven guilty', 'Only citizens are presumed innocent'],
      correct: 2, category: 'Justice'
    },
    {
      question: 'In Canada, are you allowed to question the police about their service or conduct?',
      options: ['No, police conduct is not open to public discussion', 'Yes, but only about service, not conduct', 'Yes, you may question both their service and conduct', 'Only through a lawyer in a formal complaint'],
      correct: 2, category: 'Justice'
    },
    {
      question: 'What is the highest court in Canada?',
      options: ['The Federal Court of Canada', 'The Court of Queen\'s Bench', 'The Supreme Court of Canada', 'The Court of Appeal'],
      correct: 2, category: 'Justice'
    },
    {
      question: 'What is the role of the courts in Canada?',
      options: ['To enforce laws through police action', 'To create laws when Parliament is not in session', 'To settle disputes and interpret laws independently', 'To advise the Prime Minister on constitutional matters'],
      correct: 2, category: 'Justice'
    },

    // Elections
    {
      question: 'Who must you tell how you voted in a federal election?',
      options: ['Your employer if requested', 'An Elections Canada official', 'A police officer if asked', 'No one — your vote is secret'],
      correct: 3, category: 'Elections'
    },
    {
      question: 'What is a voter information card?',
      options: ['A card that lists all candidates in your riding', 'A form that tells you when and where to vote', 'Your official proof of citizenship for voting', 'A card issued after you have voted'],
      correct: 1, category: 'Elections'
    },
    {
      question: 'What should you do if you do not receive a voter information card before an election?',
      options: ['You cannot vote without one', 'Go to the nearest police station', 'Contact your Member of Parliament', 'Call Elections Canada or visit their website'],
      correct: 3, category: 'Elections'
    },
    {
      question: 'Which province was the first to grant women the right to vote?',
      options: ['Ontario', 'British Columbia', 'Manitoba', 'Quebec'],
      correct: 2, category: 'Elections'
    },

    // Geography
    {
      question: 'What are the five regions of Canada?',
      options: ['Midwest, North, South, East and West', 'Maritimes, Ontario, Quebec, Prairies and British Columbia', 'Atlantic, Central, Prairie, West Coast and North', 'East, West, Central, Arctic and Coastal'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'About one-third of all Canadians live in which province?',
      options: ['Quebec', 'British Columbia', 'Alberta', 'Ontario'],
      correct: 3, category: 'Geography'
    },
    {
      question: 'What are the three main types of industry in Canada?',
      options: ['Farming, fishing and technology', 'Tourism, government and retail', 'Natural resources, manufacturing and services', 'Mining, construction and transportation'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'What is Canada\'s largest trading partner?',
      options: ['China', 'United Kingdom', 'United States of America', 'Japan'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'Where are the Great Lakes located?',
      options: ['Between Quebec and the United States', 'Between Ontario and the United States', 'In the Prairie provinces', 'Between Manitoba and the United States'],
      correct: 1, category: 'Geography'
    },
    {
      question: 'What is the largest and busiest port in Canada?',
      options: ['Port of Halifax', 'Port of Montreal', 'Port of Vancouver', 'Port of Toronto'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'Which province has its own time zone, 30 minutes ahead of Atlantic Standard Time?',
      options: ['Nova Scotia', 'Prince Edward Island', 'New Brunswick', 'Newfoundland and Labrador'],
      correct: 3, category: 'Geography'
    },
    {
      question: 'Which province is the smallest in land size?',
      options: ['Nova Scotia', 'New Brunswick', 'Prince Edward Island', 'Newfoundland and Labrador'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'Which province is the main producer of pulp and paper and hydro-electricity?',
      options: ['Ontario', 'British Columbia', 'Manitoba', 'Quebec'],
      correct: 3, category: 'Geography'
    },
    {
      question: 'Which region covers more than one-third of Canada\'s total land area?',
      options: ['Central Canada', 'The Prairie provinces', 'Atlantic Canada', 'The Northern territories'],
      correct: 3, category: 'Geography'
    },
    {
      question: 'Which region is known as the industrial and manufacturing heartland of Canada?',
      options: ['Atlantic provinces', 'Prairie provinces', 'Central Canada', 'West Coast'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'Which region of Canada is known for both fertile agricultural land and valuable energy resources?',
      options: ['Central Canada', 'The Prairie provinces', 'British Columbia', 'The Northern territories'],
      correct: 1, category: 'Geography'
    },
    {
      question: 'Which three countries are signatories to the CUSMA (formerly NAFTA) trade agreement?',
      options: ['Canada, United Kingdom and United States', 'Canada, United States and Japan', 'Canada, Mexico and United States', 'Canada, Denmark and Mexico'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'What is a major river in Quebec?',
      options: ['The Fraser River', 'The Saskatchewan River', 'The St. Lawrence River', 'The Ottawa River'],
      correct: 2, category: 'Geography'
    },
    {
      question: 'Why is trade with other countries important to Canada?',
      options: ['It allows Canadians to travel abroad more easily', 'It enhances the economy and raises the standard of living', 'It eliminates the need for domestic manufacturing', 'It brings cheaper goods from overseas'],
      correct: 1, category: 'Geography'
    },

    // Symbols & Culture
    {
      question: 'What are the first words of Canada\'s national anthem?',
      options: ['"O Canada! Our province and native land!"', '"O Canada! Our home and native land!"', '"From far and wide, O Canada"', '"We stand on guard for thee"'],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'What is the name of Canada\'s Royal Anthem?',
      options: ['"O Canada"', '"La Marseillaise"', '"God Save the King"', '"The Maple Leaf Forever"'],
      correct: 2, category: 'Symbols'
    },
    {
      question: 'What does the Remembrance Day poppy represent?',
      options: ['The sacrifices of the Fathers of Confederation', 'The Canadian flag adopted in 1965', 'The sacrifice of Canadians who have served or died in wars', 'The Indigenous peoples of Canada'],
      correct: 2, category: 'Symbols'
    },
    {
      question: 'When is Remembrance Day observed in Canada?',
      options: ['October 31', 'July 1', 'December 26', 'November 11'],
      correct: 3, category: 'Symbols'
    },
    {
      question: 'What is the highest military honour a Canadian can receive?',
      options: ['The Order of Canada', 'The Purple Cross', 'The Medal of Bravery', 'The Victoria Cross'],
      correct: 3, category: 'Symbols'
    },
    {
      question: 'What is a Francophone?',
      options: ['A person who speaks English as their first language', 'A person who speaks French as their first language', 'A person who is bilingual in English and French', 'Any resident of the province of Quebec'],
      correct: 1, category: 'Symbols'
    },
    {
      question: 'Which provincial flag features the fleur-de-lys?',
      options: ['New Brunswick', 'Manitoba', 'Ontario', 'Quebec'],
      correct: 3, category: 'Symbols'
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
