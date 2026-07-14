/* Découvrir le Canada: contenu du cours en français.
   Mirrors the shape of content.js exactly. window.COURSE_FR.modules only needs to
   list modules that ARE translated: app.js falls back to the English module (by id)
   for any module not present here, so the app never renders a half-translated lesson.
   Terminology is sourced from the official "Découvrir le Canada" guide (canada.ca),
   see glossary in the translation notes; do not paraphrase fixed/official terms. */
window.COURSE_FR = {
  exam: {
    questions: 20,
    minutes: 45,
    passScore: 15,
    passPercent: 75,
    attempts: 3,
    format: 'Examen en ligne surveillé (webcam) pour la plupart des candidats en 2026'
  },

  modules: [
    {
      id: 'rights',
      title: 'Droits et responsabilités liés à la citoyenneté',
      shortTitle: 'Droits et devoirs',
      navSubtitle: 'Charte et langues officielles',
      duration: '8 minutes',
      objectives: [
        'Cerner les six catégories de droits protégés par la Charte canadienne des droits et libertés',
        'Distinguer les types de droits à partir d\'une mise en situation à l\'examen',
        'Nommer les principales responsabilités liées à la citoyenneté canadienne'
      ],
      examTip: 'Les examinateurs demandent souvent quelle catégorie de droit s\'applique, par exemple, la liberté de circulation et d\'établissement, les garanties juridiques ou les droits démocratiques.',
      sections: [
        {
          title: 'Charte canadienne des droits et libertés',
          type: 'list',
          items: [
            'La Charte fait partie de la Loi constitutionnelle de 1982 et protège les droits et libertés des Canadiens.',
            'La Loi sur les langues officielles (1969) confirme que l\'anglais et le français sont les deux langues officielles du Canada.',
            'Le Nouveau-Brunswick est la seule province officiellement bilingue.',
            'Le Québec est la seule province à majorité francophone.'
          ]
        },
        {
          title: 'Les six catégories de droits',
          type: 'cards',
          cards: [
            { num: 1, title: 'Libertés fondamentales', body: 'Expression, religion, réunion pacifique, presse et association.' },
            { num: 2, title: 'Droits démocratiques', body: 'Voter et se porter candidat à partir de 18 ans.' },
            { num: 3, title: 'Liberté de circulation et d\'établissement', body: 'Vivre et travailler partout au Canada; entrer au pays ou en sortir librement.' },
            { num: 4, title: 'Garanties juridiques', body: 'Procès équitable, protection contre les fouilles abusives, droit à un avocat.' },
            { num: 5, title: 'Droits à l\'égalité', body: 'Traitement égal sans discrimination fondée sur la race, l\'origine, la couleur, la religion, le sexe, l\'âge ou le handicap.' },
            { num: 6, title: 'Droits linguistiques', body: 'L\'anglais et le français ont un statut égal dans les rapports avec le gouvernement fédéral.' }
          ]
        },
        {
          title: 'Responsabilités des citoyens',
          type: 'checklist',
          items: [
            'Respecter les lois et payer ses impôts',
            'Voter aux élections fédérales, provinciales et locales',
            'Faire partie d\'un jury lorsqu\'on est appelé à le faire',
            'Respecter les droits et libertés d\'autrui',
            'Aider les autres membres de la communauté',
            'Défendre le Canada si le besoin se présentait'
          ]
        },
        {
          title: 'Le serment de citoyenneté',
          type: 'list',
          items: [
            'Les nouveaux citoyens prêtent le serment de citoyenneté lors d\'une cérémonie de citoyenneté.',
            'Le serment engage une allégeance envers « Sa Majesté le roi Charles Trois, roi du Canada, à ses héritiers et successeurs ».',
            'Il engage à observer fidèlement les lois du Canada, y compris la Constitution, qui reconnaît et confirme les droits ancestraux et issus de traités des Premières Nations, des Métis et des Inuits.',
            'En 2021, le serment a été modifié pour inclure explicitement une référence aux peuples autochtones et à leurs droits, la première modification en plus de 60 ans.'
          ]
        }
      ],
      flashcards: [
        { front: 'Quel document protège les droits et libertés des Canadiens?', back: 'La Charte canadienne des droits et libertés, qui fait partie de la Loi constitutionnelle de 1982.' },
        { front: 'Nommez les deux langues officielles du Canada.', back: 'L\'anglais et le français.' },
        { front: 'Quelle province est la seule officiellement bilingue?', back: 'Le Nouveau-Brunswick.' },
        { front: 'Quel type de droit permet de vivre et de travailler partout au Canada?', back: 'Un droit relatif à la liberté de circulation et d\'établissement.' },
        { front: 'Quel type de droit comprend le droit à un procès équitable?', back: 'Une garantie juridique.' },
        { front: 'À quel âge les Canadiens peuvent-ils voter aux élections fédérales?', back: '18 ans et plus.' },
        { front: 'Nommez les six catégories de droits prévues dans la Charte.', back: 'Les libertés fondamentales, les droits démocratiques, la liberté de circulation et d\'établissement, les garanties juridiques, les droits à l\'égalité et les droits linguistiques.' },
        { front: 'Quelles sont deux responsabilités des citoyens canadiens?', back: 'Respecter les lois, payer ses impôts, voter, faire partie d\'un jury, respecter les droits d\'autrui et contribuer à la défense du Canada.' },
        { front: 'Quel article de la Constitution protège les droits ancestraux et issus de traités?', back: 'L\'article 35 de la Loi constitutionnelle de 1982.' },
        { front: 'Contre quoi les « droits à l\'égalité » protègent-ils?', back: 'La discrimination fondée sur la race, l\'origine nationale ou ethnique, la couleur, la religion, le sexe, l\'âge ou les déficiences mentales ou physiques.' },
        { front: 'Que promet le serment de citoyenneté?', back: 'Allégeance à Sa Majesté le roi Charles Trois et l\'observation fidèle des lois du Canada, y compris la Constitution, qui reconnaît les droits ancestraux et issus de traités.' },
        { front: 'Quand le serment de citoyenneté a-t-il été modifié pour inclure les peuples autochtones?', back: '2021 : le serment a été modifié pour reconnaître explicitement les droits ancestraux et issus de traités des Premières Nations, des Métis et des Inuits.' }
      ],
      quiz: [
        {
          question: 'Quel document contient la Charte canadienne des droits et libertés?',
          options: ['Loi constitutionnelle de 1867', 'Loi constitutionnelle de 1982', 'Loi sur les langues officielles (1969)', 'Statut de Westminster (1931)'],
          correct: 1
        },
        {
          question: 'Quelle province est la seule officiellement bilingue?',
          options: ['Québec', 'Ontario', 'Nouveau-Brunswick', 'Manitoba'],
          correct: 2
        },
        {
          question: 'Le droit de vote est un exemple de quelle catégorie de droits?',
          options: ['Liberté de circulation et d\'établissement', 'Garanties juridiques', 'Droits linguistiques', 'Droits démocratiques'],
          correct: 3
        },
        {
          question: 'Le droit de vivre et de travailler partout au Canada s\'appelle :',
          options: ['Un droit démocratique', 'Une garantie juridique', 'Un droit relatif à la liberté de circulation et d\'établissement', 'Un droit à l\'égalité'],
          correct: 2
        },
        {
          question: 'La liberté de religion, d\'expression et de réunion pacifique relève de :',
          options: ['Garanties juridiques', 'Droits à l\'égalité', 'Droits démocratiques', 'Libertés fondamentales'],
          correct: 3
        },
        {
          question: 'Quel est l\'âge minimum pour voter à une élection fédérale canadienne?',
          options: ['16', '17', '18', '21'],
          correct: 2
        },
        {
          question: 'Quel article de la Loi constitutionnelle de 1982 reconnaît les droits ancestraux et issus de traités?',
          options: ['Article 15', 'Article 33', 'Article 35', 'Article 91'],
          correct: 2
        },
        {
          question: 'Les droits à l\'égalité protègent les Canadiens contre la discrimination fondée sur lequel des éléments suivants?',
          options: ['Le revenu et la classe sociale', 'La race, la religion, le sexe, l\'âge ou le handicap', 'La province de résidence', 'La langue parlée à la maison'],
          correct: 1
        },
        {
          question: 'Quelle est une responsabilité propre aux citoyens canadiens (et non simplement aux résidents)?',
          options: ['Utiliser les parcs et bibliothèques publics', 'Payer la taxe de vente provinciale', 'Faire partie d\'un jury lorsque appelé à le faire', 'Fréquenter une école publique'],
          correct: 2
        },
        {
          question: 'Le droit à une audience équitable et publique devant un tribunal est un exemple de :',
          options: ['Un droit à la mobilité', 'Un droit démocratique', 'Une garantie juridique', 'Un droit linguistique'],
          correct: 2
        },
        {
          question: 'La Loi sur les langues officielles (1969) a établi que :',
          options: ['Seul le Québec peut utiliser le français au gouvernement', 'L\'anglais et le français sont les deux langues officielles du Canada', 'Toutes les provinces doivent être bilingues', 'Les langues autochtones sont des langues officielles'],
          correct: 1
        },
        {
          question: 'Quel énoncé à propos de la Charte canadienne des droits et libertés est vrai?',
          options: ['Elle s\'applique uniquement aux actions du gouvernement fédéral', 'Elle a été adoptée en 1867', 'Elle protège les droits et libertés contre l\'ingérence du gouvernement', 'Elle a remplacé la Déclaration des droits en 1965'],
          correct: 2
        },
        {
          question: 'Que doivent promettre les nouveaux Canadiens en prêtant le serment de citoyenneté?',
          options: [
            'Allégeance au premier ministre et à la constitution canadienne',
            'Allégeance à Sa Majesté le roi Charles Trois et l\'observation fidèle des lois du Canada',
            'Allégeance au peuple canadien et l\'engagement à voter à toutes les élections',
            'Allégeance à la Couronne et l\'engagement à payer les impôts canadiens'
          ],
          correct: 1
        },
        {
          question: 'Quand le serment de citoyenneté a-t-il été modifié pour la dernière fois, et qu\'a-t-on ajouté?',
          options: [
            '1982 : la Charte des droits a été ajoutée',
            '1965 : la feuille d\'érable a été ajoutée comme symbole',
            '2021 : la reconnaissance explicite des peuples autochtones et des droits issus de traités a été ajoutée',
            '1999 : une référence au Nunavut à titre de nouveau territoire a été ajoutée'
          ],
          correct: 2
        }
      ]
    },
    {
      id: 'whoweare',
      title: `Qui sommes-nous : peuples autochtones et diversité`,
      shortTitle: `Qui sommes-nous`,
      navSubtitle: `Premières Nations, Métis, Inuits`,
      duration: `7 minutes`,
      objectives: [
        `Nommer et distinguer les trois principaux groupes de peuples autochtones du Canada`,
        `Comprendre les droits autochtones prévus par la Constitution`,
        `Décrire l'engagement du Canada envers le multiculturalisme`
      ],
      examTip: `Sachez où vivent principalement les Métis et les Inuits, ainsi que la signification du mot « Inuit ».`,
      sections: [
        {
          title: `Trois peuples autochtones`,
          type: 'compare',
          columns: [
            { heading: `Premières Nations`, points: [`Le plus grand groupe au Canada`, `Des centaines de nations à travers le pays`, `Droits prévus à l'article 35 de la Loi constitutionnelle de 1982`] },
            { heading: `Métis`, points: [`Héritage mixte, à la fois européen et des Premières Nations`, `Vivent principalement au Manitoba, en Saskatchewan et en Alberta`, `Louis Riel a mené la résistance de la rivière Rouge (1869-1870)`] },
            { heading: `Inuits`, points: [`Vivent dans les régions arctiques`, `Le mot Inuit signifie « le peuple »`, `Le Nunavut est leur territoire d'origine (devenu territoire en 1999)`] }
          ]
        },
        {
          title: `Pensionnats autochtones et réconciliation`,
          type: 'list',
          items: [
            `Les pensionnats autochtones étaient des écoles financées par le gouvernement et administrées par des Églises, qui séparaient de force les enfants autochtones de leur famille, une politique d'assimilation profondément néfaste.`,
            `La Commission de vérité et réconciliation (CVR) a documenté cette histoire et publié 94 appels à l'action en 2015, exhortant les gouvernements et les institutions à faire progresser la réconciliation.`,
            `Le Canada a adopté la Déclaration des Nations Unies sur les droits des peuples autochtones (DNUDPA) en 2016.`,
            `Le 30 septembre est chaque année la Journée nationale de la vérité et de la réconciliation (Journée du chandail orange), un jour férié fédéral depuis 2021.`
          ]
        },
        {
          title: `Diversité et appartenance internationale`,
          type: 'list',
          items: [
            `La population du Canada est d'environ 38 millions d'habitants; la plupart des Canadiens vivent en ville, surtout dans le corridor Québec-Windsor.`,
            `La Loi sur le multiculturalisme canadien (1988) reconnaît la diversité culturelle comme une valeur fondamentale.`,
            `Le Canada est membre du Commonwealth (54 pays) et de la Francophonie (pays francophones du monde entier).`
          ]
        }
      ],
      flashcards: [
        { front: `Nommez les trois principaux groupes de peuples autochtones du Canada.`, back: `Les Premières Nations, les Métis et les Inuits.` },
        { front: `Que signifie le mot « Inuit »?`, back: `« Le peuple ».` },
        { front: `Où vivent la plupart des Métis?`, back: `Dans les provinces des Prairies : le Manitoba, la Saskatchewan et l'Alberta.` },
        { front: `Qui était Louis Riel?`, back: `Un chef métis qui a mené la résistance de la rivière Rouge (1869-1870) et la résistance du Nord-Ouest (1885).` },
        { front: `Quel est le fondement des droits autochtones au Canada?`, back: `L'article 35 de la Loi constitutionnelle de 1982.` },
        { front: `Où vivent principalement les Inuits?`, back: `Dans les régions arctiques, notamment le Nunavut, les Territoires du Nord-Ouest, le nord du Québec et le Labrador.` },
        { front: `Quel était le but des pensionnats autochtones?`, back: `Une politique gouvernementale visant à assimiler de force les enfants autochtones, un chapitre profondément néfaste de l'histoire canadienne.` },
        { front: `Que reconnaît la Loi sur le multiculturalisme canadien (1988)?`, back: `Que la diversité culturelle est une caractéristique et une valeur fondamentale de la société canadienne.` },
        { front: `À quel regroupement international de pays francophones le Canada appartient-il?`, back: `La Francophonie.` },
        { front: `Que sont les 94 appels à l'action de la CVR?`, back: `Des recommandations publiées en 2015 par la Commission de vérité et réconciliation, exhortant les gouvernements et les institutions à faire progresser la réconciliation avec les peuples autochtones.` },
        { front: `Quand a lieu la Journée nationale de la vérité et de la réconciliation?`, back: `Le 30 septembre (aussi appelée Journée du chandail orange), devenu jour férié fédéral en 2021.` }
      ],
      quiz: [
        {
          question: `Quels sont les trois groupes de peuples autochtones du Canada?`,
          options: [`Les Inuits, les Cris et les Métis`, `Les Premières Nations, les Métis et les Inuits`, `Les Haudenosaunees, les Algonquins et les Inuits`, `Les Premières Nations, les Mohawks et les Inuits`],
          correct: 1
        },
        {
          question: `Que signifie le mot « Inuit »?`,
          options: [`« La terre »`, `« Notre maison »`, `« Le peuple »`, `« Le nord »`],
          correct: 2
        },
        {
          question: `Où vit la majorité des Métis?`,
          options: [`Le Canada atlantique`, `La Colombie-Britannique`, `Uniquement dans les territoires du Nord`, `Les provinces des Prairies (MB, SK, AB)`],
          correct: 3
        },
        {
          question: `Les Inuits vivent principalement dans quelle région du Canada?`,
          options: [`Les provinces des Prairies`, `Le sud de l'Ontario`, `L'Arctique`, `La côte atlantique`],
          correct: 2
        },
        {
          question: `Les droits ancestraux et issus de traités sont protégés par quel article de la Constitution?`,
          options: [`Article 15`, `Article 33`, `Article 35`, `Article 91`],
          correct: 2
        },
        {
          question: `Qui était Louis Riel?`,
          options: [`Le premier premier ministre canadien-français du Canada`, `Un chef métis qui a défendu les droits de son peuple`, `Le fondateur de la Nouvelle-France`, `Un chef loyaliste qui a colonisé l'Ontario`],
          correct: 1
        },
        {
          question: `Les pensionnats autochtones au Canada avaient pour but de :`,
          options: [`Enseigner aux enfants autochtones dans leur propre langue`, `Former les Autochtones comme fonctionnaires du gouvernement`, `Assimiler de force les enfants autochtones à la culture euro-canadienne`, `Offrir une formation universitaire aux dirigeants des Premières Nations`],
          correct: 2
        },
        {
          question: `La Loi sur le multiculturalisme canadien (1988) reconnaît :`,
          options: [`L'anglais comme langue principale du Canada`, `La diversité culturelle comme valeur fondamentale de la société canadienne`, `Le Québec comme société distincte`, `Les droits à l'autonomie gouvernementale autochtone`],
          correct: 1
        },
        {
          question: `La plupart des Canadiens vivent en ville, particulièrement dans :`,
          options: [`Les provinces des Prairies`, `La côte du Pacifique`, `Le corridor Québec-Windsor`, `Les provinces de l'Atlantique`],
          correct: 2
        },
        {
          question: `Le Nunavut est important pour les Inuits parce que :`,
          options: [`C'est la plus grande province en superficie`, `Il a été créé en 1867 comme premier territoire autochtone`, `Il a été créé en 1999 comme territoire d'origine des Inuits`, `C'est le seul territoire ayant une langue autochtone officielle`],
          correct: 2
        },
        {
          question: `La population approximative du Canada est de :`,
          options: [`15 millions`, `28 millions`, `38 millions`, `52 millions`],
          correct: 2
        },
        {
          question: `« Premières Nations » désigne :`,
          options: [`Uniquement les Inuits de l'Arctique`, `L'ensemble des peuples autochtones`, `Les peuples autochtones qui ne sont ni métis ni inuits`, `Les personnes arrivées au Canada avant la Confédération`],
          correct: 2
        },
        {
          question: `Qu'a produit la Commission de vérité et réconciliation (CVR) en 2015?`,
          options: [
            `Une modification constitutionnelle reconnaissant l'autonomie gouvernementale autochtone`,
            `94 appels à l'action exhortant les gouvernements et les institutions à faire progresser la réconciliation`,
            `Des excuses officielles signées par tous les premiers ministres provinciaux`,
            `Un nouveau cadre de traités pour les revendications territoriales autochtones`
          ],
          correct: 1
        },
        {
          question: `Quand la Journée nationale de la vérité et de la réconciliation est-elle célébrée au Canada?`,
          options: [`Le 1er juillet`, `Le 11 novembre`, `Le 30 septembre`, `Le 21 juin`],
          correct: 2
        }
      ]
    },
    {
      id: 'hist1',
      title: `Histoire : des débuts à la Confédération (1497-1867)`,
      shortTitle: `Débuts de l'histoire`,
      navSubtitle: `Exploration jusqu'à 1867`,
      duration: `10 minutes`,
      objectives: [
        `Situer les principaux explorateurs, batailles et lois sur une ligne du temps, des premiers contacts à la Confédération`,
        `Expliquer comment les communautés françaises et britanniques ont coexisté après 1763`,
        `Nommer les quatre provinces fondatrices et le premier premier ministre`
      ],
      examTip: `Faits fréquents à l'examen : Jean Cabot (1497), fondation de Québec en 1608, plaines d'Abraham en 1759, Confédération le 1er juillet 1867.`,
      sections: [
        {
          title: `Ligne du temps : de l'exploration à la Confédération`,
          type: 'timeline',
          events: [
            { date: `1497`, text: `Jean Cabot, naviguant au service de l'Angleterre, cartographie la côte Est du Canada.` },
            { date: `1534`, text: `Jacques Cartier revendique la région du Saint-Laurent au nom de la France.` },
            { date: `1608`, text: `Samuel de Champlain fonde la ville de Québec, le premier établissement européen permanent.` },
            { date: `1759`, text: `Bataille des plaines d'Abraham : la victoire britannique met fin au régime militaire français.` },
            { date: `1763`, text: `Traité de Paris : la France cède le Canada à la Grande-Bretagne.` },
            { date: `1774`, text: `Acte de Québec : les Canadiens français conservent leur langue, la religion catholique et le droit civil.` },
            { date: `1791`, text: `Acte constitutionnel : création du Haut-Canada (anglophone) et du Bas-Canada (francophone).` },
            { date: `1812–14`, text: `Guerre de 1812 : les États-Unis envahissent le Canada; le chef Tecumseh, un chef shawnee, s'allie aux forces britanniques et canadiennes. Le Canada défend avec succès son territoire.` },
            { date: `1839`, text: `Le rapport de lord Durham recommande l'union du Haut-Canada et du Bas-Canada (menant à l'Acte d'Union de 1841).` },
            { date: `1848`, text: `Premier gouvernement responsable obtenu en Nouvelle-Écosse.` },
            { date: `1867`, text: `Confédération : le Canada devient un dominion autonome le 1er juillet. Provinces fondatrices : Ontario, Québec, Nouvelle-Écosse, Nouveau-Brunswick. Sir John A. Macdonald devient le premier premier ministre.` }
          ]
        },
        {
          title: `Loyalistes de l'Empire-Uni et loyalistes noirs`,
          type: 'list',
          items: [
            `Après la Révolution américaine, environ 40 000 à 50 000 loyalistes de l'Empire-Uni sont venus s'établir au Canada.`,
            `Environ 3 000 loyalistes noirs (hommes et femmes affranchis et esclaves en fuite) sont aussi venus s'établir en Nouvelle-Écosse et au Nouveau-Brunswick, ce qui en fait l'un des premiers groupes de colons noirs au Canada.`,
            `En 1792, certains Néo-Écossais noirs ont quitté le Canada pour aider à établir la ville de Freetown, en Sierra Leone.`,
            `La Nouvelle-France s'est développée autour de la traite des fourrures et des alliances avec les Premières Nations.`,
            `Devise nationale : « A Mari Usque Ad Mare » (« D'un océan à l'autre »).`
          ]
        }
      ],
      flashcards: [
        { front: `Qui a fondé la ville de Québec, et en quelle année?`, back: `Samuel de Champlain, en 1608.` },
        { front: `Que s'est-il passé à la bataille des plaines d'Abraham (1759)?`, back: `Les forces britanniques du général Wolfe ont vaincu les Français sous Montcalm, mettant fin à la puissance militaire française en Amérique du Nord.` },
        { front: `Quand a eu lieu la Confédération?`, back: `Le 1er juillet 1867.` },
        { front: `Nommez les quatre provinces fondatrices.`, back: `L'Ontario, le Québec, la Nouvelle-Écosse et le Nouveau-Brunswick.` },
        { front: `Qui était le premier premier ministre du Canada?`, back: `Sir John A. Macdonald.` },
        { front: `Qui a cartographié en premier la côte Est du Canada pour l'Angleterre, et quand?`, back: `Jean Cabot, en 1497.` },
        { front: `Que protégeait l'Acte de Québec de 1774?`, back: `La langue française, la religion catholique romaine et le droit civil français au Québec.` },
        { front: `Où se sont établis les loyalistes de l'Empire-Uni après la Révolution américaine?`, back: `En Nouvelle-Écosse, au Nouveau-Brunswick et dans l'actuel Ontario.` },
        { front: `Quelle est la devise nationale du Canada et que signifie-t-elle?`, back: `« A Mari Usque Ad Mare » (« D'un océan à l'autre »).` },
        { front: `Quel territoire Jacques Cartier a-t-il revendiqué pour la France en 1534?`, back: `Il a navigué dans le golfe du Saint-Laurent et a revendiqué le territoire au nom de la France.` },
        { front: `Qui étaient les loyalistes noirs?`, back: `Environ 3 000 personnes noires affranchies venues en Nouvelle-Écosse et au Nouveau-Brunswick après la Révolution américaine. En 1792, certaines sont parties aider à établir Freetown, en Sierra Leone.` },
        { front: `Quelle est l'importance du chef Tecumseh dans l'histoire canadienne?`, back: `Un chef shawnee qui s'est allié aux forces britanniques et canadiennes pendant la guerre de 1812, aidant à défendre le Canada contre l'invasion américaine.` },
        { front: `Qu'a recommandé lord Durham dans son rapport de 1839?`, back: `Il a recommandé d'unir le Haut-Canada et le Bas-Canada, ce qui a mené à l'Acte d'Union (1841) et, éventuellement, à un gouvernement responsable.` }
      ],
      quiz: [
        {
          question: `Quand le Canada est-il devenu un dominion autonome?`,
          options: [`Le 1er juillet 1776`, `Le 1er juillet 1867`, `Le 1er juillet 1931`, `Le 1er juillet 1982`],
          correct: 1
        },
        {
          question: `L'Acte de Québec de 1774 permettait aux Canadiens français de conserver lequel des éléments suivants?`,
          options: [`Uniquement la common law anglaise`, `La langue, la religion et le droit civil`, `L'indépendance à l'égard de la Grande-Bretagne`, `Un gouvernement républicain`],
          correct: 1
        },
        {
          question: `Qui fut le premier Européen, depuis les Vikings, à cartographier la côte Est du Canada (1497)?`,
          options: [`Jacques Cartier`, `Samuel de Champlain`, `Jean Cabot`, `Henry Hudson`],
          correct: 2
        },
        {
          question: `Qui a fondé la ville de Québec, et en quelle année?`,
          options: [`Jacques Cartier, 1534`, `Jean Cabot, 1497`, `Samuel de Champlain, 1608`, `Louis de Frontenac, 1672`],
          correct: 2
        },
        {
          question: `Quelles étaient les quatre provinces fondatrices de la Confédération en 1867?`,
          options: [
            `L'Ontario, le Québec, la Nouvelle-Écosse et l'Île-du-Prince-Édouard`,
            `L'Ontario, le Québec, la Nouvelle-Écosse et le Nouveau-Brunswick`,
            `Le Québec, le Nouveau-Brunswick, le Manitoba et la Colombie-Britannique`,
            `L'Ontario, la Nouvelle-Écosse, le Nouveau-Brunswick et Terre-Neuve`
          ],
          correct: 1
        },
        {
          question: `Qui était le premier premier ministre du Canada?`,
          options: [`Sir Wilfrid Laurier`, `Sir George-Étienne Cartier`, `Sir John A. Macdonald`, `Louis Riel`],
          correct: 2
        },
        {
          question: `Les loyalistes de l'Empire-Uni sont venus au Canada après :`,
          options: [`La guerre de 1812`, `La Révolution américaine`, `La bataille des plaines d'Abraham`, `La résistance de la rivière Rouge`],
          correct: 1
        },
        {
          question: `Que s'est-il passé à la bataille des plaines d'Abraham (1759)?`,
          options: [
            `Le Canada a officiellement obtenu son indépendance de la Grande-Bretagne`,
            `Les forces britanniques sous Wolfe ont vaincu les forces françaises sous Montcalm, mettant fin à la puissance militaire française en Amérique du Nord`,
            `Les Canadiennes ont obtenu le droit de vote`,
            `Les quatre provinces fondatrices ont signé la Confédération`
          ],
          correct: 1
        },
        {
          question: `La Nouvelle-France s'est développée principalement autour de quelle industrie?`,
          options: [`L'industrie de la pêche`, `La traite des fourrures`, `L'exploitation minière de l'or`, `L'agriculture des Prairies`],
          correct: 1
        },
        {
          question: `Que signifie la devise « A Mari Usque Ad Mare »?`,
          options: [`« Forts et libres »`, `« Le vrai Nord »`, `« D'un océan à l'autre »`, `« Paix, ordre et bon gouvernement »`],
          correct: 2
        },
        {
          question: `Le Canada est devenu un dominion en 1867, ce qui signifie qu'il :`,
          options: [
            `S'est complètement affranchi de l'autorité britannique`,
            `Est demeuré lié à la Couronne tout en devenant autonome`,
            `S'est uni aux États-Unis`,
            `Est devenu un territoire français indépendant`
          ],
          correct: 1
        },
        {
          question: `L'Acte constitutionnel de 1791 a divisé le Canada en :`,
          options: [`Canada anglais et Canada français`, `Haut-Canada et Bas-Canada`, `Canada Est et Canada Ouest`, `Canada-Est et Canada-Ouest`],
          correct: 1
        },
        {
          question: `Les loyalistes noirs sont arrivés au Canada bien avant que les explorateurs européens n'entrent en contact avec les peuples autochtones.`,
          options: [`Vrai`, `Faux`],
          correct: 1
        },
        {
          question: `En 1792, certains Néo-Écossais noirs ont quitté le Canada pour aider à établir quelle ville?`,
          options: [`Accra, au Ghana`, `Freetown, en Sierra Leone`, `Lagos, au Nigeria`, `Le Cap, en Afrique du Sud`],
          correct: 1
        },
        {
          question: `Le chef Tecumseh a aidé les soldats britanniques et canadiens pendant la guerre de 1812.`,
          options: [`Vrai`, `Faux`],
          correct: 0
        },
        {
          question: `Le rapport de lord Durham de 1839 recommandait que le Haut-Canada et le Bas-Canada demeurent séparés en permanence.`,
          options: [`Vrai`, `Faux`],
          correct: 1
        },
        {
          question: `Qu'a recommandé le rapport de lord Durham (1839)?`,
          options: [`Séparer en permanence le Haut-Canada et le Bas-Canada`, `Accorder la pleine indépendance aux deux Canadas`, `Unir le Haut-Canada et le Bas-Canada sous un seul gouvernement`, `Créer une république bilingue franco-anglaise`],
          correct: 2
        }
      ]
    },
    {
      id: 'hist2',
      title: `Histoire : bâtir la nation (1867-1914)`,
      shortTitle: `Bâtir la nation`,
      navSubtitle: `Chemin de fer et expansion`,
      duration: `7 minutes`,
      objectives: [
        `Expliquer l'expansion vers l'Ouest et le rôle du chemin de fer transcontinental`,
        `Décrire l'importance de Louis Riel dans l'histoire canadienne`,
        `Situer la place de sir Wilfrid Laurier dans l'histoire politique canadienne`
      ],
      examTip: `L'achèvement du Chemin de fer Canadien Pacifique (1885) et le sort de Louis Riel reviennent souvent à l'examen.`,
      sections: [
        {
          title: `Ligne du temps : bâtir la nation (1867-1914)`,
          type: 'timeline',
          events: [
            { date: `1869–70`, text: `Résistance de la rivière Rouge : Louis Riel mène les Métis; le Manitoba entre dans la Confédération (1870).` },
            { date: `1871`, text: `La Colombie-Britannique se joint à la Confédération avec la promesse d'un chemin de fer transcontinental.` },
            { date: `1873`, text: `L'Île-du-Prince-Édouard se joint à la Confédération.` },
            { date: `1885`, text: `Achèvement du Chemin de fer Canadien Pacifique : le Canada est relié d'un océan à l'autre; la colonisation de l'Ouest devient possible.` },
            { date: `1885`, text: `Résistance du Nord-Ouest : Louis Riel est capturé, jugé pour haute trahison et exécuté.` },
            { date: `1896–1911`, text: `Sir Wilfrid Laurier, premier premier ministre canadien-français, préside à une immigration massive vers l'Ouest.` }
          ]
        }
      ],
      flashcards: [
        { front: `Qu'est-ce qui a rendu possible la colonisation de l'Ouest après 1885?`, back: `L'achèvement du Chemin de fer Canadien Pacifique (CFCP).` },
        { front: `Pourquoi la Colombie-Britannique s'est-elle jointe à la Confédération en 1871?`, back: `On lui a promis un chemin de fer transcontinental.` },
        { front: `Qu'est-il arrivé à Louis Riel après la résistance du Nord-Ouest?`, back: `Il a été jugé pour haute trahison et exécuté en 1885.` },
        { front: `Qui était le premier premier ministre canadien-français?`, back: `Sir Wilfrid Laurier (1896-1911).` },
        { front: `Quand a eu lieu la ruée vers l'or du Klondike?`, back: `Dans les années 1890 : les prospecteurs ont afflué vers la région du Klondike, au Yukon.` },
        { front: `En quelle année le CFCP a-t-il été achevé?`, back: `1885.` },
        { front: `Quand la Saskatchewan et l'Alberta se sont-elles jointes à la Confédération?`, back: `1905.` },
        { front: `Qu'est-ce qui a mené à l'entrée du Manitoba dans la Confédération en 1870?`, back: `La résistance de la rivière Rouge menée par Louis Riel.` },
        { front: `Quand l'Île-du-Prince-Édouard s'est-elle jointe à la Confédération?`, back: `1873.` }
      ],
      quiz: [
        {
          question: `En quelle année le Chemin de fer Canadien Pacifique a-t-il été achevé?`,
          options: [`1867`, `1871`, `1885`, `1896`],
          correct: 2
        },
        {
          question: `Qui était le premier premier ministre canadien-français du Canada?`,
          options: [`Pierre Trudeau`, `Sir John A. Macdonald`, `Sir Wilfrid Laurier`, `Lester B. Pearson`],
          correct: 2
        },
        {
          question: `Le Manitoba est entré dans la Confédération en 1870 à la suite de :`,
          options: [`La ruée vers l'or du Klondike`, `La résistance de la rivière Rouge menée par Louis Riel`, `L'achèvement du CFCP`, `Les raids féniens`],
          correct: 1
        },
        {
          question: `Pourquoi la Colombie-Britannique s'est-elle jointe à la Confédération en 1871?`,
          options: [
            `On lui a promis le droit d'exploiter librement l'or`,
            `Elle voulait protéger la langue française`,
            `Elle était menacée d'annexion américaine`,
            `On lui a promis un chemin de fer transcontinental`
          ],
          correct: 3
        },
        {
          question: `Qu'est-il arrivé à Louis Riel après la résistance du Nord-Ouest de 1885?`,
          options: [`Il a été exilé en France`, `Il est devenu sénateur`, `Il a été exécuté pour haute trahison`, `Il a été gracié par le gouvernement`],
          correct: 2
        },
        {
          question: `La ruée vers l'or du Klondike, dans les années 1890, a eu lieu dans quel territoire?`,
          options: [`Les Territoires du Nord-Ouest`, `Le Nunavut`, `Le Yukon`, `La Colombie-Britannique`],
          correct: 2
        },
        {
          question: `La Saskatchewan et l'Alberta se sont toutes deux jointes à la Confédération en :`,
          options: [`1870`, `1885`, `1898`, `1905`],
          correct: 3
        },
        {
          question: `L'Île-du-Prince-Édouard s'est jointe à la Confédération en :`,
          options: [`1867`, `1870`, `1871`, `1873`],
          correct: 3
        },
        {
          question: `Terre-Neuve-et-Labrador, la dernière province, s'est jointe à la Confédération en :`,
          options: [`1873`, `1905`, `1931`, `1949`],
          correct: 3
        },
        {
          question: `La taxe d'entrée chinoise a été imposée aux immigrants chinois au début des années 1900. Le gouvernement du Canada a ensuite :`,
          options: [`Étendu la taxe à tous les immigrants asiatiques`, `Présenté des excuses et reconnu que c'était une erreur`, `En a fait une politique permanente`, `L'a étendue uniquement aux immigrants japonais`],
          correct: 1
        },
        {
          question: `Sir Wilfrid Laurier est reconnu pour :`,
          options: [
            `Avoir achevé le CFCP en 1885`,
            `Avoir dirigé le Canada pendant la Première Guerre mondiale`,
            `Avoir été le premier premier ministre canadien-français et supervisé une immigration massive vers l'Ouest`,
            `Avoir instauré la Charte des droits et libertés`
          ],
          correct: 2
        },
        {
          question: `La Politique nationale du Canada sous sir John A. Macdonald visait principalement à :`,
          options: [
            `Établir le français comme langue nationale`,
            `Construire le chemin de fer transcontinental et coloniser l'Ouest`,
            `Négocier l'indépendance à l'égard de la Grande-Bretagne`,
            `Élargir le Sénat à 150 membres`
          ],
          correct: 1
        }
      ]
    },
    {
      id: 'hist3',
      title: `Histoire : les guerres et l'ère moderne`,
      shortTitle: `Histoire moderne`,
      navSubtitle: `Des guerres mondiales à aujourd'hui`,
      duration: `10 minutes`,
      objectives: [
        `Expliquer comment les guerres mondiales ont façonné l'identité et l'indépendance du Canada`,
        `Se rappeler des grandes étapes de l'après-guerre, dont le drapeau, l'hymne et la Charte`,
        `Identifier des personnalités marquantes de l'ère moderne, comme Lester B. Pearson et Terry Fox`
      ],
      examTip: `La crête de Vimy (9 avril 1917), la plage Juno le jour J, ainsi que les années 1949, 1965, 1980, 1982 et 1999 reviennent souvent.`,
      sections: [
        {
          title: `Ligne du temps : les guerres et le Canada moderne`,
          type: 'timeline',
          events: [
            { date: `1917`, text: `Bataille de la crête de Vimy (9 avril) : les quatre divisions canadiennes combattent ensemble pour la première fois, un moment déterminant pour la nation.` },
            { date: `1918`, text: `Le gouvernement de sir Robert Borden accorde aux femmes le droit de vote aux élections fédérales.` },
            { date: `1921`, text: `Agnes Macphail devient la première femme élue à la Chambre des communes.` },
            { date: `1939–45`, text: `Seconde Guerre mondiale : le Canada déclare la guerre de façon indépendante; ses forces débarquent à la plage Juno lors du jour J, le 6 juin 1944. À la fin de la guerre, le Canada possède la troisième marine en importance au monde et a contribué plus que tout autre pays du Commonwealth à l'effort aérien allié.` },
            { date: `1940`, text: `Le Québec accorde le droit de vote provincial aux femmes (la dernière province à le faire), en grande partie grâce aux efforts de Thérèse Casgrain et d'autres militantes.` },
            { date: `1949`, text: `Terre-Neuve-et-Labrador devient la dernière province à se joindre à la Confédération.` },
            { date: `1957`, text: `Lester B. Pearson remporte le prix Nobel de la paix pour son rôle dans le maintien de la paix des Nations Unies.` },
            { date: `1965`, text: `Adoption du drapeau canadien actuel.` },
            { date: `1980`, text: `« Ô Canada » devient l'hymne national officiel.` },
            { date: `1982`, text: `Rapatriement de la Loi constitutionnelle; entrée en vigueur de la Charte des droits et libertés.` },
            { date: `1999`, text: `Création du Nunavut comme territoire et patrie des Inuits.` }
          ]
        },
        {
          title: `Canadiens marquants`,
          type: 'list',
          items: [
            `Sir Robert Borden a dirigé le Canada pendant la Première Guerre mondiale et a accordé aux femmes le droit de vote aux élections fédérales en 1918.`,
            `Agnes Macphail, agricultrice et enseignante, est devenue la première femme élue à la Chambre des communes en 1921.`,
            `Thérèse Casgrain a défendu les droits des femmes au Québec; ses efforts ont contribué à ce que le Québec, dernière province à le faire, accorde le droit de vote provincial aux femmes en 1940.`,
            `Lester B. Pearson a remporté le prix Nobel de la paix en 1957 pour avoir créé les forces de maintien de la paix de l'ONU, et a fait adopter le drapeau canadien actuel.`,
            `Tommy Douglas, « le père de l'assurance-maladie », a instauré les soins de santé universels en Saskatchewan.`,
            `Terry Fox a couru le Marathon de l'espoir (1980) pour amasser des fonds pour la recherche sur le cancer.`,
            `Adrienne Clarkson, d'origine chinoise, a été gouverneure générale (1999-2005), la première Canadienne d'origine asiatique à occuper ce poste. Elle a créé la Coupe Clarkson en 2005.`
          ]
        }
      ],
      flashcards: [
        { front: `Pourquoi la bataille de la crête de Vimy est-elle importante?`, back: `Les quatre divisions du Corps canadien ont combattu ensemble pour la première fois, le 9 avril 1917.` },
        { front: `Quelle plage les Canadiens ont-ils prise d'assaut le jour J?`, back: `La plage Juno, en Normandie, en France, le 6 juin 1944.` },
        { front: `Quelle a été la dernière province à se joindre au Canada, et quand?`, back: `Terre-Neuve-et-Labrador, en 1949.` },
        { front: `Quand le drapeau canadien actuel a-t-il été adopté?`, back: `1965.` },
        { front: `Quand le Nunavut a-t-il été créé?`, back: `1999.` },
        { front: `Qui a remporté le prix Nobel de la paix en 1957 pour la création des forces de maintien de la paix de l'ONU?`, back: `Lester B. Pearson.` },
        { front: `Quand les femmes ont-elles obtenu le droit de vote aux élections fédérales?`, back: `1918.` },
        { front: `Qu'a fait Terry Fox en 1980?`, back: `Il a couru le Marathon de l'espoir pour sensibiliser la population et amasser des fonds pour la recherche sur le cancer.` },
        { front: `Quand la Charte des droits et libertés est-elle entrée en vigueur?`, back: `1982 (Loi constitutionnelle de 1982).` },
        { front: `Qu'était l'« affaire personne » de 1929?`, back: `Une décision reconnaissant légalement les femmes comme des « personnes » pouvant être nommées au Sénat.` },
        { front: `Quel premier ministre a accordé aux femmes le droit de vote aux élections fédérales?`, back: `Sir Robert Borden, en 1918.` },
        { front: `Qui a été la première femme élue à la Chambre des communes, et quand?`, back: `Agnes Macphail, en 1921.` },
        { front: `Qui était Thérèse Casgrain?`, back: `Une militante québécoise dont les efforts ont contribué à l'obtention du droit de vote provincial pour les femmes au Québec en 1940, la dernière province à l'accorder.` },
        { front: `Quelle province a été la dernière à accorder aux femmes le droit de vote provincial?`, back: `Le Québec, en 1940.` },
        { front: `Qui était Adrienne Clarkson, et quelle est son importance historique?`, back: `Gouverneure générale du Canada de 1999 à 2005; la première Canadienne d'origine asiatique à occuper ce poste. Elle a créé la Coupe Clarkson en 2005.` },
        { front: `Quel était le rang naval du Canada à la fin de la Seconde Guerre mondiale?`, back: `Le Canada possédait la troisième marine en importance au monde.` },
        { front: `Comment la contribution aérienne du Canada se comparait-elle à celle des autres pays du Commonwealth pendant la Seconde Guerre mondiale?`, back: `Le Canada a contribué plus que tout autre pays du Commonwealth à l'effort aérien allié.` }
      ],
      quiz: [
        {
          question: `Pourquoi le 9 avril 1917 (crête de Vimy) est-il important dans l'histoire canadienne?`,
          options: [
            `Le Canada a officiellement déclaré la guerre à l'Allemagne`,
            `Les quatre divisions du Corps canadien ont combattu ensemble pour la première fois`,
            `Les Canadiennes ont obtenu le droit de vote`,
            `Le Canada a signé le traité de Versailles`
          ],
          correct: 1
        },
        {
          question: `Quand les femmes ont-elles obtenu le droit de vote aux élections fédérales canadiennes?`,
          options: [`1916`, `1918`, `1929`, `1945`],
          correct: 1
        },
        {
          question: `Que s'est-il passé le 6 juin 1944 (jour J)?`,
          options: [
            `Les Canadiens ont combattu à la crête de Vimy`,
            `Le Canada a déclaré la guerre au Japon`,
            `Les forces canadiennes ont pris d'assaut la plage Juno, en Normandie`,
            `Les troupes canadiennes sont entrées à Berlin`
          ],
          correct: 2
        },
        {
          question: `Quelle a été la dernière province à se joindre à la Confédération, et quand?`,
          options: [`L'Île-du-Prince-Édouard, 1873`, `Le Manitoba, 1870`, `La Colombie-Britannique, 1871`, `Terre-Neuve-et-Labrador, 1949`],
          correct: 3
        },
        {
          question: `Qui a remporté le prix Nobel de la paix en 1957 pour avoir contribué à créer les forces de maintien de la paix de l'ONU?`,
          options: [`John Diefenbaker`, `Tommy Douglas`, `Pierre Trudeau`, `Lester B. Pearson`],
          correct: 3
        },
        {
          question: `Quand le drapeau canadien actuel (la feuille d'érable) a-t-il été adopté?`,
          options: [`1945`, `1952`, `1965`, `1967`],
          correct: 2
        },
        {
          question: `Quand le Nunavut a-t-il été créé?`,
          options: [`1949`, `1967`, `1982`, `1999`],
          correct: 3
        },
        {
          question: `La grève générale de Winnipeg de 1919 était :`,
          options: [
            `Une manifestation militaire contre la conscription`,
            `L'une des plus importantes actions ouvrières de l'histoire du Canada`,
            `Une manifestation contre la Confédération`,
            `Une grève des cheminots contre le CFCP`
          ],
          correct: 1
        },
        {
          question: `Terry Fox a couru le Marathon de l'espoir en 1980 pour :`,
          options: [
            `Célébrer le centenaire du Canada`,
            `Établir un record mondial de course`,
            `Sensibiliser la population et amasser des fonds pour la recherche sur le cancer`,
            `Promouvoir le tourisme à travers le pays`
          ],
          correct: 2
        },
        {
          question: `L'« affaire personne » de 1929 a établi que :`,
          options: [
            `Les peuples autochtones avaient le droit de vote`,
            `Les femmes étaient légalement reconnues comme des personnes admissibles à une nomination au Sénat`,
            `Le Québec pouvait conserver son régime de droit civil`,
            `Le Canada avait obtenu sa pleine indépendance à l'égard de la Grande-Bretagne`
          ],
          correct: 1
        },
        {
          question: `Le rôle du Canada dans la bataille de l'Atlantique (Seconde Guerre mondiale) était de :`,
          options: [
            `Diriger les débarquements du jour J en Normandie`,
            `Larguer des armes atomiques sur le Japon`,
            `Protéger les convois de ravitaillement alliés traversant l'océan vers la Grande-Bretagne`,
            `Envahir les plages italiennes`
          ],
          correct: 2
        },
        {
          question: `La Charte des droits et libertés est entrée en vigueur en :`,
          options: [`1965`, `1980`, `1982`, `1999`],
          correct: 2
        },
        {
          question: `Le Canada a contribué plus que tout autre pays du Commonwealth à l'effort aérien allié pendant la Seconde Guerre mondiale.`,
          options: [`Vrai`, `Faux`],
          correct: 0
        },
        {
          question: `À la fin de la Seconde Guerre mondiale, le Canada possédait la troisième marine en importance au monde.`,
          options: [`Vrai`, `Faux`],
          correct: 0
        },
        {
          question: `Quel premier ministre a accordé aux femmes le droit de vote aux élections fédérales canadiennes?`,
          options: [`Sir Wilfrid Laurier`, `Sir John A. Macdonald`, `Sir Robert Borden`, `William Lyon Mackenzie King`],
          correct: 2
        },
        {
          question: `Agnes Macphail est devenue la première femme élue à la Chambre des communes en 1921.`,
          options: [`Vrai`, `Faux`],
          correct: 0
        },
        {
          question: `Le Québec a été la dernière province à accorder aux femmes le droit de vote provincial. Cela s'est produit en :`,
          options: [`1918`, `1929`, `1940`, `1948`],
          correct: 2
        },
        {
          question: `On se souvient de Thérèse Casgrain pour :`,
          options: [
            `Avoir été la première première ministre du Canada`,
            `Avoir milité pour le droit de vote provincial des femmes au Québec`,
            `Avoir fondé l'Ordre du Canada`,
            `Avoir dirigé le mouvement suffragiste canadien à l'échelle fédérale`
          ],
          correct: 1
        },
        {
          question: `Adrienne Clarkson a été la première gouverneure générale d'origine asiatique.`,
          options: [`Vrai`, `Faux`],
          correct: 0
        }
      ]
    },
    {
      id: 'govt',
      title: `Comment fonctionne le gouvernement canadien`,
      shortTitle: `Gouvernement`,
      navSubtitle: `Institutions et paliers`,
      duration: `10 minutes`,
      objectives: [
        `Distinguer le chef d'État du chef du gouvernement`,
        `Décrire les trois pouvoirs et les trois paliers de gouvernement`,
        `Expliquer les rôles du Sénat et de la Chambre des communes`
      ],
      examTip: `Connaissez les trois éléments du Parlement, les 105 sénateurs, les 338 députés et la signification du gouvernement responsable.`,
      sections: [
        {
          title: `Comment le Canada est gouverné`,
          type: 'cards',
          cards: [
            { tag: `Chef d'État`, title: `Le souverain`, body: `Le roi Charles III, représenté à l'échelle fédérale par la gouverneure générale (actuellement Mary Simon) et à l'échelle provinciale par les lieutenants-gouverneurs.` },
            { tag: `Chef du gouvernement`, title: `Premier ministre`, body: `Chef du parti ayant le plus grand nombre de sièges à la Chambre des communes. Actuellement : Mark Carney (Parti libéral), assermenté en mars 2025.` },
            { tag: `Parlement`, title: `Trois éléments`, body: `La Couronne, le Sénat (105 sénateurs) et la Chambre des communes (338 députés élus).` }
          ]
        },
        {
          title: `Les trois pouvoirs du gouvernement`,
          type: 'table',
          headers: [`Pouvoir`, `Qui`, `Rôle`],
          rows: [
            [`Exécutif`, `Premier ministre et Cabinet`, `Proposer et appliquer les lois; diriger le gouvernement`],
            [`Législatif`, `Parlement`, `Débattre et adopter les lois`],
            [`Judiciaire`, `Tribunaux (Cour suprême au sommet)`, `Interpréter et appliquer les lois, neuf juges à la Cour suprême`]
          ]
        },
        {
          title: `Les trois paliers de gouvernement`,
          type: 'compare',
          columns: [
            { heading: `Fédéral`, points: [`Défense nationale`, `Droit criminel et opérations bancaires`, `Immigration`, `Commerce interprovincial`] },
            { heading: `Provincial`, points: [`Éducation et soins de santé`, `Autoroutes`, `Ressources naturelles`, `Institutions municipales`] },
            { heading: `Municipal`, points: [`Routes et parcs locaux`, `Police locale`, `Distribution de l'eau et collecte des déchets`] }
          ]
        },
        {
          title: `Le gouvernement responsable`,
          type: 'list',
          items: [
            `Le Sénat offre un « second examen objectif » des projets de loi; les sénateurs sont nommés jusqu'à l'âge de 75 ans.`,
            `Le gouvernement responsable signifie que le Cabinet doit conserver la confiance de la majorité des députés élus à la Chambre des communes.`
          ]
        }
      ],
      flashcards: [
        { front: `Qui est le chef d'État du Canada?`, back: `Le souverain (le roi Charles III).` },
        { front: `Qui est l'actuelle gouverneure générale du Canada?`, back: `Mary Simon, nommée en juillet 2021, la première Autochtone à occuper le poste de gouverneure générale.` },
        { front: `Qui est l'actuel premier ministre du Canada?`, back: `Mark Carney (Parti libéral), assermenté premier ministre en mars 2025.` },
        { front: `Qui est le chef du gouvernement du Canada?`, back: `Le premier ministre.` },
        { front: `Quels sont les trois éléments du Parlement?`, back: `La Couronne, le Sénat (105 sénateurs) et la Chambre des communes (338 députés).` },
        { front: `Combien de sénateurs le Canada compte-t-il?`, back: `105.` },
        { front: `Combien de députés sont élus?`, back: `338.` },
        { front: `Que signifie « gouvernement responsable »?`, back: `Le Cabinet doit conserver la confiance (l'appui) de la majorité des députés élus.` },
        { front: `Qui représente le souverain à l'échelle provinciale?`, back: `Le lieutenant-gouverneur.` },
        { front: `Quels sont les trois pouvoirs du gouvernement canadien?`, back: `L'exécutif (premier ministre et Cabinet), le législatif (Parlement) et le judiciaire (tribunaux).` },
        { front: `Nommez une responsabilité fédérale.`, back: `La défense nationale, le droit criminel, les opérations bancaires, l'immigration ou le commerce interprovincial.` },
        { front: `Nommez une responsabilité provinciale.`, back: `L'éducation, la prestation des soins de santé, les autoroutes ou les ressources naturelles.` }
      ],
      quiz: [
        {
          question: `Qui est le chef d'État du Canada?`,
          options: [`Le premier ministre`, `La gouverneure générale`, `Le souverain (le roi Charles III)`, `Le juge en chef du Canada`],
          correct: 2
        },
        {
          question: `Qui représente le souverain à l'échelle fédérale au Canada?`,
          options: [`Le premier ministre`, `Le président du Sénat`, `La gouverneure générale`, `Le juge en chef`],
          correct: 2
        },
        {
          question: `Qui représente le souverain à l'échelle provinciale?`,
          options: [`Le premier ministre provincial`, `Le lieutenant-gouverneur`, `Le procureur général`, `Le juge en chef provincial`],
          correct: 1
        },
        {
          question: `Combien de sénateurs compte le Sénat canadien?`,
          options: [`50`, `105`, `308`, `338`],
          correct: 1
        },
        {
          question: `Combien de sièges compte la Chambre des communes?`,
          options: [`105`, `265`, `308`, `338`],
          correct: 3
        },
        {
          question: `Que signifie « gouvernement responsable »?`,
          options: [
            `Le gouvernement doit présenter un budget équilibré chaque année`,
            `Le Cabinet doit conserver la confiance de la majorité des députés élus`,
            `Le roi approuve personnellement toutes les lois fédérales`,
            `Le Sénat peut bloquer tout projet de loi de la Chambre des communes`
          ],
          correct: 1
        },
        {
          question: `Laquelle des réponses suivantes est une responsabilité fédérale (et non provinciale)?`,
          options: [`L'éducation`, `La prestation des soins de santé`, `La défense nationale`, `Les droits de propriété`],
          correct: 2
        },
        {
          question: `Laquelle des réponses suivantes est une responsabilité provinciale (et non fédérale)?`,
          options: [`Le droit criminel`, `La monnaie et les opérations bancaires`, `La défense nationale`, `L'éducation`],
          correct: 3
        },
        {
          question: `Que doit-il se passer pour qu'un projet de loi devienne une loi au Canada?`,
          options: [
            `Le premier ministre le signe pour en faire une loi`,
            `Il doit être adopté par la Chambre des communes, le Sénat, et recevoir la sanction royale`,
            `Un référendum national doit l'approuver`,
            `La Cour suprême doit l'examiner et l'approuver`
          ],
          correct: 1
        },
        {
          question: `Un « gouvernement minoritaire » est un gouvernement où :`,
          options: [
            `Le parti au pouvoir a remporté plus de la moitié des sièges`,
            `Deux partis gouvernent dans le cadre d'une coalition officielle`,
            `Le parti au pouvoir détient le plus grand nombre de sièges, mais moins de la moitié`,
            `La gouverneure générale nomme un premier ministre sans élection`
          ],
          correct: 2
        },
        {
          question: `Quels sont les trois pouvoirs du gouvernement canadien?`,
          options: [
            `Fédéral, provincial et municipal`,
            `La monarchie, le Parlement et les tribunaux`,
            `Exécutif, législatif et judiciaire`,
            `Le Sénat, la Chambre des communes et le Cabinet`
          ],
          correct: 2
        },
        {
          question: `Le rôle du Sénat dans le processus législatif est de :`,
          options: [
            `Élire le premier ministre`,
            `Proposer le budget national`,
            `Offrir un « second examen objectif » des projets de loi`,
            `Approuver les nominations à la Cour suprême`
          ],
          correct: 2
        },
        {
          question: `Qui est l'actuelle gouverneure générale du Canada?`,
          options: [`David Johnston`, `Julie Payette`, `Mary Simon`, `Adrienne Clarkson`],
          correct: 2
        },
        {
          question: `Quelle est la portée historique de la nomination de Mary Simon comme gouverneure générale en 2021?`,
          options: [
            `Elle est la première femme à occuper le poste de gouverneure générale`,
            `Elle est la première Autochtone à occuper le poste de gouverneure générale`,
            `Elle est la première gouverneure générale née à l'extérieur du Canada`,
            `Elle est la plus jeune gouverneure générale de l'histoire canadienne`
          ],
          correct: 1
        },
        {
          question: `Qui est l'actuel premier ministre du Canada?`,
          options: [`Justin Trudeau`, `Pierre Poilievre`, `Mark Carney`, `Jagmeet Singh`],
          correct: 2
        }
      ]
    },
    {
      id: 'elections',
      title: `Élections et démocratie`,
      shortTitle: `Élections`,
      navSubtitle: `Voter et élections`,
      duration: `6 minutes`,
      objectives: [
        `Indiquer qui peut voter aux élections fédérales`,
        `Définir le vocabulaire électoral clé utilisé à l'examen`,
        `Décrire comment se forment les gouvernements fédéraux`
      ],
      examTip: `Des expressions exactes comme « bureau de vote » et « directeur du scrutin » apparaissent au vrai examen.`,
      sections: [
        {
          title: `L'essentiel sur les élections`,
          type: 'statstrip',
          stats: [
            { value: `4 ans`, label: `Mandat maximal` },
            { value: `338`, label: `Circonscriptions` },
            { value: `18 ans et +`, label: `Âge de voter` },
            { value: `Citoyen`, label: `Condition requise` }
          ]
        },
        {
          title: `Termes clés et processus`,
          type: 'table',
          headers: [`Terme`, `Signification`],
          rows: [
            [`Élections Canada`, `Organisme indépendant qui administre les élections fédérales`],
            [`Directeur du scrutin`, `Fonctionnaire qui dirige l'élection dans chaque circonscription`],
            [`Bureau de vote`, `Endroit où vous déposez votre bulletin de vote en personne`],
            [`Système majoritaire uninominal à un tour`, `Le candidat ayant obtenu le plus de votes remporte la circonscription`],
            [`Gouvernement majoritaire`, `Le parti détient plus de la moitié des sièges à la Chambre des communes`],
            [`Gouvernement minoritaire`, `Le parti détient le plus grand nombre de sièges, mais moins de la moitié`]
          ]
        },
        {
          title: `Si vous ne recevez pas de carte d'information de l'électeur`,
          type: 'list',
          items: [`Communiquez avec Élections Canada avant le jour du scrutin pour confirmer que vous êtes sur la liste électorale.`]
        }
      ],
      flashcards: [
        { front: `Qui peut voter à une élection fédérale?`, back: `Les citoyens canadiens âgés de 18 ans ou plus.` },
        { front: `Qu'est-ce qu'un bureau de vote?`, back: `L'endroit où les électeurs admissibles vont déposer leur bulletin de vote.` },
        { front: `Combien y a-t-il de circonscriptions fédérales?`, back: `338.` },
        { front: `Que devriez-vous faire si vous ne recevez pas de carte d'information de l'électeur?`, back: `Communiquer avec Élections Canada pour confirmer que vous êtes sur la liste électorale.` },
        { front: `Qu'est-ce qu'un directeur du scrutin?`, back: `Le fonctionnaire qui administre l'élection fédérale dans chaque circonscription.` },
        { front: `Qu'est-ce qu'Élections Canada?`, back: `L'organisme indépendant qui administre les élections fédérales.` },
        { front: `Qu'est-ce que le système majoritaire uninominal à un tour?`, back: `Le candidat ayant obtenu le plus de votes dans une circonscription remporte le siège, même sans majorité.` },
        { front: `Qu'est-ce qu'un gouvernement majoritaire?`, back: `Un gouvernement où le parti au pouvoir détient plus de la moitié des sièges à la Chambre des communes.` },
        { front: `Selon la loi, à quelle fréquence une élection fédérale doit-elle avoir lieu?`, back: `Au moins tous les cinq ans (maximum constitutionnel).` }
      ],
      quiz: [
        {
          question: `Qui a le droit de voter à une élection fédérale canadienne?`,
          options: [
            `Tout résident du Canada âgé de 18 ans ou plus`,
            `Les citoyens canadiens âgés de 18 ans ou plus`,
            `Les citoyens canadiens âgés de 16 ans ou plus`,
            `Toute personne qui paie de l'impôt sur le revenu au Canada`
          ],
          correct: 1
        },
        {
          question: `Qu'est-ce qu'un bureau de vote?`,
          options: [
            `Le bureau où les candidats s'inscrivent pour se présenter`,
            `L'endroit où les électeurs admissibles déposent leur bulletin de vote`,
            `Le bureau central où les résultats de l'élection sont compilés`,
            `Le bureau régional d'Élections Canada`
          ],
          correct: 1
        },
        {
          question: `Qu'est-ce qu'un directeur du scrutin?`,
          options: [
            `Le chef d'un parti politique`,
            `Un député réélu`,
            `Le fonctionnaire qui administre l'élection dans une circonscription`,
            `Le directeur national d'Élections Canada`
          ],
          correct: 2
        },
        {
          question: `Selon la loi, à quelle fréquence une élection fédérale doit-elle avoir lieu au Canada?`,
          options: [`Tous les deux ans`, `Tous les trois ans`, `Tous les quatre ans`, `Au moins tous les cinq ans`],
          correct: 3
        },
        {
          question: `Combien y a-t-il de circonscriptions électorales fédérales?`,
          options: [`105`, `265`, `308`, `338`],
          correct: 3
        },
        {
          question: `Quel organisme est responsable de l'administration des élections fédérales au Canada?`,
          options: [`Le Bureau du Conseil privé`, `Le ministère de la Justice`, `Élections Canada`, `Le Bureau de la gouverneure générale`],
          correct: 2
        },
        {
          question: `Quel est le rôle du chef de l'opposition officielle?`,
          options: [
            `Aider le premier ministre à gouverner`,
            `Examiner attentivement le gouvernement et présenter un programme de rechange`,
            `Présider les débats au Sénat`,
            `Représenter le Canada dans les négociations internationales`
          ],
          correct: 1
        },
        {
          question: `Un « gouvernement majoritaire » signifie que le parti au pouvoir :`,
          options: [
            `A remporté toutes les circonscriptions du Canada`,
            `Détient plus de la moitié des sièges à la Chambre des communes`,
            `A l'appui de tous les membres du Sénat`,
            `A gouverné pendant plus d'un mandat`
          ],
          correct: 1
        },
        {
          question: `Selon le système majoritaire uninominal à un tour, qui remporte une circonscription?`,
          options: [
            `Le candidat qui obtient plus de 50 % des votes`,
            `Le parti ayant obtenu le plus de votes à l'échelle nationale`,
            `Le candidat ayant obtenu le plus de votes dans cette circonscription`,
            `Le député sortant, à moins d'être défait par 10 % ou plus`
          ],
          correct: 2
        },
        {
          question: `Si vous ne recevez pas de carte d'information de l'électeur avant une élection, vous devriez :`,
          options: [
            `Vous ne pouvez pas voter sans la carte`,
            `Communiquer avec votre député local`,
            `Communiquer avec Élections Canada pour confirmer votre inscription`,
            `Vous inscrire uniquement au bureau de vote le jour de l'élection`
          ],
          correct: 2
        },
        {
          question: `Les députés sont élus par :`,
          options: [
            `La gouverneure générale`,
            `Le premier ministre`,
            `Les citoyens canadiens de leur circonscription lors d'une élection générale`,
            `Les assemblées législatives provinciales`
          ],
          correct: 2
        },
        {
          question: `Qu'est-ce qu'un gouvernement minoritaire au Canada?`,
          options: [
            `Un gouvernement formé par un parti détenant plus de la moitié de tous les sièges`,
            `Un gouvernement formé par deux partis dans le cadre d'une coalition officielle`,
            `Un gouvernement où le parti au pouvoir détient le plus grand nombre de sièges, mais moins de la moitié`,
            `Un gouvernement nommé par la gouverneure générale sans élection`
          ],
          correct: 2
        },
        {
          question: `Personne (y compris les membres de votre famille, votre employeur ou un représentant syndical) n'a le droit d'exiger que vous révéliez votre vote.`,
          options: [`Vrai`, `Faux`],
          correct: 0
        },
        {
          question: `Si vous ne recevez pas de carte d'information de l'électeur avant le jour du scrutin, il est trop tard pour être ajouté à la liste électorale.`,
          options: [`Vrai`, `Faux`],
          correct: 1
        }
      ]
    },
    {
      id: 'justice',
      title: `Le système de justice`,
      shortTitle: `Justice`,
      navSubtitle: `Droit et tribunaux`,
      duration: `5 minutes`,
      objectives: [
        `Énoncer les principes fondamentaux comme la primauté du droit et la présomption d'innocence`,
        `Décrire le lien entre la police, les tribunaux et le Parlement dans le processus législatif`,
        `Reconnaître l'aide juridique et le rôle de la Gendarmerie royale du Canada`
      ],
      examTip: `« Innocent jusqu'à preuve du contraire » et « primauté du droit » figurent parmi les questions les plus fréquentes de cette section.`,
      sections: [
        {
          title: `Principes fondamentaux`,
          type: 'cards',
          cards: [
            { title: `Primauté du droit`, body: `Tout le monde, y compris le gouvernement, doit respecter la loi.` },
            { title: `Présomption d'innocence`, body: `Une personne accusée est innocente jusqu'à preuve du contraire devant un tribunal.` },
            { title: `Droit à un avocat`, body: `Le procès équitable et la représentation juridique sont protégés par la Charte.` }
          ]
        },
        {
          title: `Qui fait quoi`,
          type: 'table',
          headers: [`Institution`, `Rôle`],
          rows: [
            [`Parlement`, `Adopte les lois`],
            [`Police (y compris la GRC)`, `Fait respecter les lois`],
            [`Tribunaux`, `Interprètent et appliquent les lois`],
            [`Aide juridique`, `Soutien pour les personnes ne pouvant pas payer un avocat`],
            [`Jury`, `Les citoyens de 18 ans et plus peuvent être appelés à y siéger, une responsabilité civique`]
          ]
        },
        {
          title: `Types d'infractions`,
          type: 'list',
          items: [
            `Les infractions sommaires sont mineures; les actes criminels sont graves et peuvent impliquer un procès devant jury.`,
            `La Gendarmerie royale du Canada (GRC) est le service de police national du Canada (les « Mounties »).`
          ]
        }
      ],
      flashcards: [
        { front: `Que signifie « primauté du droit »?`, back: `Tout le monde, y compris le gouvernement, doit respecter la loi. Personne n'est au-dessus d'elle.` },
        { front: `Qu'est-ce que la présomption d'innocence?`, back: `Une personne accusée est considérée comme innocente jusqu'à preuve du contraire devant un tribunal.` },
        { front: `Où pouvez-vous obtenir de l'aide si vous ne pouvez pas payer un avocat?`, back: `Les services d'aide juridique, offerts dans la plupart des communautés.` },
        { front: `Qu'est-ce que la GRC?`, back: `La Gendarmerie royale du Canada : le service de police national du Canada (les « Mounties »).` },
        { front: `Qui adopte les lois fédérales au Canada?`, back: `Le Parlement (la Chambre des communes et le Sénat).` },
        { front: `Quelle est la différence entre une infraction sommaire et un acte criminel?`, back: `Infraction sommaire = infraction mineure, peine plus légère. Acte criminel = crime grave, pouvant impliquer un procès devant jury.` },
        { front: `Si vous êtes arrêté, quels droits avez-vous?`, back: `Le droit de garder le silence et le droit de parler à un avocat sans délai.` },
        { front: `Que fait un jury?`, back: `Un groupe de citoyens qui décide si une personne accusée est coupable ou non coupable.` }
      ],
      quiz: [
        {
          question: `Que signifie « primauté du droit » au Canada?`,
          options: [
            `La police décide qui est coupable`,
            `Tout le monde, y compris le gouvernement, doit respecter la loi`,
            `Les lois s'appliquent uniquement aux citoyens canadiens`,
            `Le roi est au-dessus des lois`
          ],
          correct: 1
        },
        {
          question: `Qu'est-ce que la « présomption d'innocence »?`,
          options: [
            `La police peut détenir des suspects indéfiniment sans les accuser`,
            `Une personne est innocente jusqu'à preuve du contraire devant un tribunal`,
            `La Couronne doit toujours accepter un plaidoyer de culpabilité`,
            `Les citoyens ne peuvent être arrêtés sans mandat`
          ],
          correct: 1
        },
        {
          question: `Si vous êtes arrêté au Canada, vous avez le droit de :`,
          options: [
            `Refuser de vous identifier à la police`,
            `Garder le silence et parler à un avocat sans délai`,
            `Demander un procès sans jury dans tous les cas`,
            `Quitter le pays immédiatement`
          ],
          correct: 1
        },
        {
          question: `Qui adopte les lois fédérales au Canada?`,
          options: [`La GRC`, `La Cour suprême`, `La gouverneure générale`, `Le Parlement (la Chambre des communes et le Sénat)`],
          correct: 3
        },
        {
          question: `Un crime au Canada est une infraction contre :`,
          options: [`Uniquement la victime`, `Le gouvernement provincial`, `La société dans son ensemble`, `La société d'État fédérale`],
          correct: 2
        },
        {
          question: `Si vous ne pouvez pas payer un avocat, vous devriez communiquer avec :`,
          options: [`Élections Canada`, `Le Sénat`, `L'aide juridique`, `Le Bureau de la gouverneure générale`],
          correct: 2
        },
        {
          question: `Qu'est-ce que la GRC?`,
          options: [
            `L'organisme d'application des lois sur l'immigration du Canada`,
            `Le service de police national du Canada`,
            `Un organisme de police provincial`,
            `Une unité de police militaire`
          ],
          correct: 1
        },
        {
          question: `Une « infraction sommaire » est :`,
          options: [
            `Un crime grave nécessitant un procès devant jury`,
            `Un différend civil entre des particuliers`,
            `Une infraction mineure avec une peine plus légère`,
            `Une infraction qui ne peut être jugée qu'en cour fédérale`
          ],
          correct: 2
        },
        {
          question: `Un « acte criminel » est :`,
          options: [
            `Une infraction routière mineure`,
            `Un différend civil entre des particuliers`,
            `Un crime grave pouvant impliquer un procès devant jury`,
            `Une infraction à un règlement municipal`
          ],
          correct: 2
        },
        {
          question: `La Cour suprême du Canada est :`,
          options: [
            `Responsable de l'adoption de nouvelles lois`,
            `Nommée par le Sénat`,
            `Le plus haut tribunal et l'autorité ultime en matière de droit canadien`,
            `Impliquée uniquement dans les litiges électoraux`
          ],
          correct: 2
        },
        {
          question: `Quel est le rôle de la police dans le système de justice du Canada?`,
          options: [
            `Créer les lois du pays`,
            `Condamner les contrevenants après un procès`,
            `Faire respecter les lois, maintenir la paix et arrêter les personnes soupçonnées de crimes`,
            `Fournir une aide juridique aux personnes accusées`
          ],
          correct: 2
        },
        {
          question: `Le principe selon lequel nul n'est au-dessus des lois s'applique à :`,
          options: [`Uniquement les citoyens privés`, `Uniquement les représentants du gouvernement`, `Uniquement les entreprises`, `Tout le monde, y compris le gouvernement et le souverain`],
          correct: 3
        }
      ]
    },
    {
      id: 'symbols',
      title: `Symboles, hymne et distinctions`,
      shortTitle: `Symboles`,
      navSubtitle: `Drapeau, hymne, distinctions`,
      duration: `7 minutes`,
      objectives: [
        `Se rappeler les dates et faits liés aux symboles nationaux et à l'hymne`,
        `Nommer les deux sports nationaux officiels et l'animal national`,
        `Décrire l'Ordre du Canada et le jour du Souvenir`
      ],
      examTip: `Le drapeau (1965), l'hymne (1980), les deux sports nationaux et l'Ordre du Canada (1967) sont des faits à fort rendement.`,
      sections: [
        {
          title: `Symboles nationaux en un coup d'œil`,
          type: 'table',
          headers: [`Symbole`, `Détail`],
          rows: [
            [`Drapeau`, `Feuille d'érable rouge et blanche, adopté en 1965`],
            [`Hymne`, `« Ô Canada », officiel depuis 1980`],
            [`Animal`, `Le castor`],
            [`Sports`, `Le hockey (hiver) et la crosse (été), tous deux officiels`],
            [`Devise`, `« A Mari Usque Ad Mare » (D'un océan à l'autre)`],
            [`Police`, `Gendarmerie royale du Canada (les Mounties)`]
          ]
        },
        {
          title: `Distinctions et souvenir`,
          type: 'cards',
          cards: [
            { title: `Ordre du Canada`, body: `Plus haute distinction civile pour une réalisation exceptionnelle, créé en 1967.` },
            { title: `Croix de Victoria`, body: `Plus haute décoration militaire pour bravoure.` },
            { title: `Tour de la Paix`, body: `Tour centrale du Parlement; la Chapelle du Souvenir honore les soldats morts au combat.` },
            { title: `Jour du Souvenir`, body: `Le 11 novembre : le coquelicot est le symbole du souvenir.` }
          ]
        },
        {
          title: `Principaux jours fériés canadiens`,
          type: 'table',
          headers: [`Jour férié`, `Date`, `Ce qu'il souligne`],
          rows: [
            [`Fête du Canada`, `1er juillet`, `Anniversaire de la Confédération : le Canada est devenu un pays le 1er juillet 1867`],
            [`Fête de Victoria`, `Lundi précédant le 25 mai`, `Honore la reine Victoria; souligne aussi l'anniversaire du souverain actuel`],
            [`Jour du Souvenir`, `11 novembre`, `Se souvient des Canadiens morts à la guerre; le coquelicot est porté`],
            [`Journée nationale des peuples autochtones`, `21 juin`, `Souligne le patrimoine, les cultures et les contributions des peuples autochtones`],
            [`Journée de la vérité et de la réconciliation`, `30 septembre (Journée du chandail orange)`, `Jour férié fédéral depuis 2021; honore les survivants des pensionnats autochtones`]
          ]
        }
      ],
      flashcards: [
        { front: `Quand le drapeau canadien actuel a-t-il été adopté?`, back: `1965.` },
        { front: `Quand « Ô Canada » est-il devenu l'hymne national officiel?`, back: `1980.` },
        { front: `Quels sont les deux sports nationaux officiels du Canada?`, back: `Le hockey (hiver) et la crosse (été).` },
        { front: `Qu'est-ce que l'Ordre du Canada?`, back: `La plus haute distinction civile du Canada pour une réalisation exceptionnelle, créée en 1967.` },
        { front: `Quand a lieu le jour du Souvenir, et que symbolise le coquelicot?`, back: `Le 11 novembre : le coquelicot symbolise le souvenir des Canadiens morts à la guerre.` },
        { front: `Quel est l'animal national du Canada?`, back: `Le castor.` },
        { front: `Quelle est la devise nationale du Canada?`, back: `« A Mari Usque Ad Mare » (« D'un océan à l'autre »).` },
        { front: `Qu'est-ce que la Croix de Victoria?`, back: `La plus haute décoration militaire du Canada pour bravoure au combat.` },
        { front: `Combien de pointes compte la feuille d'érable du drapeau canadien?`, back: `11 pointes.` },
        { front: `Que célèbre-t-on le 1er juillet?`, back: `La fête du Canada : l'anniversaire de la Confédération (le 1er juillet 1867, lorsque le Canada est devenu un pays).` },
        { front: `Que célèbre la fête de Victoria?`, back: `L'anniversaire de la reine Victoria et, selon la tradition, l'anniversaire du souverain régnant. Elle a lieu le lundi précédant le 25 mai.` },
        { front: `Quand a lieu la Journée nationale des peuples autochtones?`, back: `Le 21 juin : elle souligne le patrimoine, les cultures et les contributions des peuples autochtones du Canada.` }
      ],
      quiz: [
        {
          question: `Quand le drapeau canadien actuel (la feuille d'érable) a-t-il été adopté?`,
          options: [`1945`, `1952`, `1965`, `1967`],
          correct: 2
        },
        {
          question: `Quand « Ô Canada » est-il officiellement devenu l'hymne national?`,
          options: [`1867`, `1927`, `1965`, `1980`],
          correct: 3
        },
        {
          question: `Quel est l'animal national du Canada?`,
          options: [`L'orignal`, `Le plongeon huard`, `Le castor`, `Le bison`],
          correct: 2
        },
        {
          question: `Quels sont les deux sports nationaux officiels du Canada?`,
          options: [`Le football et le basketball`, `Le baseball et le curling`, `Le hockey (hiver) et la crosse (été)`, `Le soccer et le hockey`],
          correct: 2
        },
        {
          question: `Quelle est la devise nationale du Canada?`,
          options: [`« Paix, ordre et bon gouvernement »`, `« Le vrai Nord fort et libre »`, `« A Mari Usque Ad Mare » (D'un océan à l'autre)`, `« Mon foyer et ma terre natale »`],
          correct: 2
        },
        {
          question: `L'Ordre du Canada a été créé en :`,
          options: [`1867`, `1945`, `1967`, `1982`],
          correct: 2
        },
        {
          question: `L'Ordre du Canada est :`,
          options: [
            `Une médaille militaire de combat`,
            `La plus haute distinction civile du Canada pour une réalisation exceptionnelle`,
            `Une distinction accordée automatiquement à tous les nouveaux citoyens`,
            `Une décoration gouvernementale pour les députés élus`
          ],
          correct: 1
        },
        {
          question: `Quand a lieu le jour du Souvenir?`,
          options: [`Le 1er juillet`, `Le 31 octobre`, `Le 11 novembre`, `Le 26 décembre`],
          correct: 2
        },
        {
          question: `Le coquelicot est porté le jour du Souvenir pour symboliser :`,
          options: [
            `L'indépendance canadienne`,
            `La fleur nationale du Canada`,
            `Le souvenir des Canadiens morts à la guerre`,
            `Le patrimoine agricole du Canada`
          ],
          correct: 2
        },
        {
          question: `La Croix de Victoria est :`,
          options: [
            `La plus haute distinction civile du Canada`,
            `Une distinction pour les nouveaux citoyens`,
            `La plus haute décoration militaire du Canada pour bravoure`,
            `Le symbole sur le drapeau canadien`
          ],
          correct: 2
        },
        {
          question: `Combien de pointes compte la feuille d'érable du drapeau canadien?`,
          options: [`9`, `11`, `13`, `15`],
          correct: 1
        },
        {
          question: `Quelles sont les deux couleurs dominantes du drapeau du Canada?`,
          options: [`Bleu et blanc`, `Vert et blanc`, `Rouge et blanc`, `Bleu et rouge`],
          correct: 2
        },
        {
          question: `Que célèbre la fête du Canada (1er juillet)?`,
          options: [
            `La fin de la Seconde Guerre mondiale`,
            `L'anniversaire de la reine Victoria`,
            `L'anniversaire de la Confédération : le Canada devenant un pays en 1867`,
            `L'adoption du drapeau canadien en 1965`
          ],
          correct: 2
        },
        {
          question: `Que célèbre la fête de Victoria?`,
          options: [
            `Le premier accord de Confédération du Canada`,
            `L'anniversaire de la reine Victoria et du souverain régnant`,
            `La fondation de la ville de Victoria, en Colombie-Britannique`,
            `La victoire du Canada lors de la Première Guerre mondiale`
          ],
          correct: 1
        }
      ]
    },
    {
      id: 'economy',
      title: `Économie et régions du Canada`,
      shortTitle: `Économie et régions`,
      navSubtitle: `Commerce et géographie`,
      duration: `9 minutes`,
      objectives: [
        `Cerner les principales relations et ententes commerciales du Canada`,
        `Associer les provinces et régions à leurs industries et faits clés`,
        `Répondre aux questions courantes de géographie sur les provinces et les territoires`
      ],
      examTip: `Les États-Unis comme partenaire commercial, les Prairies comme grenier à blé, le Québec comme plus grande province et l'Île-du-Prince-Édouard comme plus petite sont des questions fréquentes.`,
      sections: [
        {
          title: `Commerce et appartenance internationale`,
          type: 'list',
          items: [
            `Le Canada a une économie de marché fondée sur la libre entreprise.`,
            `Les États-Unis sont le plus important partenaire commercial du Canada.`,
            `L'ACEUM (Accord Canada-États-Unis-Mexique) a remplacé l'ALENA en 2020.`,
            `Membre du G7, du G20, de l'OTAN, du Commonwealth, de la Francophonie, de l'ONU et du NORAD.`
          ]
        },
        {
          title: `L'essentiel sur la géographie`,
          type: 'statstrip',
          stats: [
            { value: `10 + 3`, label: `Provinces et territoires` },
            { value: `Québec`, label: `Plus grande province` },
            { value: `Î.-P.-É.`, label: `Plus petite province` },
            { value: `Ontario`, label: `La plus peuplée` }
          ]
        },
        {
          title: `Régions du Canada`,
          type: 'compare',
          columns: [
            { heading: `Atlantique`, points: [`Pêches et tourisme`, `L'Î.-P.-É. est la plus petite province`, `Terre-Neuve s'est jointe en dernier (1949)`] },
            { heading: `Centre`, points: [`Ontario et Québec`, `Le plus de fabrication`, `Ottawa est la capitale`] },
            { heading: `Prairies`, points: [`Grenier à blé du Canada`, `Ressources pétrolières de l'Alberta`, `La plupart des Métis y vivent`] },
            { heading: `Ouest et Nord`, points: [`Colombie-Britannique : foresterie, commerce avec le Pacifique`, `Nunavut (1999) : territoire d'origine des Inuits`, `Grands Lacs : commerce et eau douce`] }
          ]
        },
        {
          title: `Géographie physique`,
          type: 'table',
          headers: [`Élément`, `Faits clés`],
          rows: [
            [`Trois océans`, `Le Canada est bordé par l'océan Pacifique (à l'ouest), l'océan Atlantique (à l'est) et l'océan Arctique (au nord)`],
            [`Les cinq Grands Lacs`, `Supérieur, Michigan, Huron, Érié, Ontario; partagés avec les États-Unis; le plus grand réseau d'eau douce au monde`],
            [`Fleuve Saint-Laurent`, `Relie les Grands Lacs à l'océan Atlantique; la principale artère commerciale et de transport du centre du Canada`],
            [`Baie d'Hudson`, `Vaste mer intérieure du nord du Canada, reliée à l'Atlantique`],
            [`Fleuve Fraser`, `Cours d'eau important de la Colombie-Britannique, se jetant dans le Pacifique`],
            [`Corridor Québec-Windsor`, `La région la plus densément peuplée du Canada, s'étendant à travers le Québec et l'Ontario`]
          ]
        },
        {
          title: `Capitales des provinces et des territoires`,
          type: 'table',
          headers: [`Province ou territoire`, `Capitale`],
          rows: [
            [`Ontario`, `Toronto`],
            [`Québec`, `Ville de Québec`],
            [`Colombie-Britannique`, `Victoria (pas Vancouver)`],
            [`Alberta`, `Edmonton (pas Calgary)`],
            [`Nouveau-Brunswick`, `Fredericton (pas Saint John ni Moncton)`],
            [`Nouvelle-Écosse`, `Halifax`],
            [`Île-du-Prince-Édouard`, `Charlottetown`],
            [`Terre-Neuve-et-Labrador`, `St. John's`],
            [`Manitoba`, `Winnipeg`],
            [`Saskatchewan`, `Regina`],
            [`Yukon`, `Whitehorse`],
            [`Territoires du Nord-Ouest`, `Yellowknife`],
            [`Nunavut`, `Iqaluit`]
          ]
        },
        {
          title: `Parcs nationaux`,
          type: 'list',
          items: [
            `Le parc national Banff (Alberta), créé en 1885, a été le premier parc national du Canada.`,
            `L'Alberta compte cinq parcs nationaux : Banff, Jasper, Elk Island, Waterton Lakes et Wood Buffalo.`,
            `Le Canada compte 37 parcs nationaux représentant chaque province et territoire.`
          ]
        }
      ],
      flashcards: [
        { front: `Quel est le plus important partenaire commercial du Canada?`, back: `Les États-Unis.` },
        { front: `Quelle province est la plus grande en superficie?`, back: `Le Québec.` },
        { front: `Quelle province est la plus petite en superficie?`, back: `L'Île-du-Prince-Édouard.` },
        { front: `Quelle région est reconnue comme le grenier à blé du Canada?`, back: `Les provinces des Prairies (Alberta, Saskatchewan, Manitoba).` },
        { front: `Combien de provinces et territoires le Canada compte-t-il?`, back: `10 provinces et 3 territoires (13 au total).` },
        { front: `Quel accord commercial a remplacé l'ALENA en 2020?`, back: `L'ACEUM : l'Accord Canada-États-Unis-Mexique.` },
        { front: `Quelle province a la population la plus nombreuse?`, back: `L'Ontario.` },
        { front: `Pour quoi la Colombie-Britannique est-elle reconnue?`, back: `Les produits forestiers et le commerce avec l'Asie via le Pacifique.` },
        { front: `Pour quoi l'Alberta est-elle reconnue?`, back: `Les sables bitumineux et la production énergétique.` },
        { front: `De quels groupes internationaux le Canada est-il membre?`, back: `Le G7, le G20, l'OTAN, le Commonwealth, la Francophonie, l'ONU et le NORAD.` },
        { front: `Nommez les cinq Grands Lacs.`, back: `Supérieur, Michigan, Huron, Érié et Ontario. Ils sont partagés avec les États-Unis et forment le plus grand réseau d'eau douce au monde.` },
        { front: `Quels sont les trois océans qui bordent le Canada?`, back: `L'océan Pacifique (à l'ouest), l'océan Atlantique (à l'est) et l'océan Arctique (au nord).` },
        { front: `Qu'est-ce que le corridor Québec-Windsor?`, back: `La région la plus densément peuplée du Canada, s'étendant à travers le Québec et l'Ontario.` },
        { front: `Quel a été le premier parc national du Canada, et quand a-t-il été créé?`, back: `Le parc national Banff (Alberta), créé en 1885.` },
        { front: `Combien de parcs nationaux l'Alberta compte-t-elle? Nommez-les.`, back: `Cinq : Banff, Jasper, Elk Island, Waterton Lakes et Wood Buffalo.` },
        { front: `Quelle est la capitale de la Colombie-Britannique?`, back: `Victoria (pas Vancouver).` },
        { front: `Quelle est la capitale du Nouveau-Brunswick?`, back: `Fredericton.` },
        { front: `Quelle est la capitale de l'Alberta?`, back: `Edmonton (pas Calgary).` },
        { front: `Quelle est la capitale de l'Île-du-Prince-Édouard?`, back: `Charlottetown.` }
      ],
      quiz: [
        {
          question: `Le plus important partenaire commercial du Canada est :`,
          options: [`La Chine`, `Le Royaume-Uni`, `Le Mexique`, `Les États-Unis`],
          correct: 3
        },
        {
          question: `Quelle province est la plus petite en superficie?`,
          options: [`La Nouvelle-Écosse`, `Le Nouveau-Brunswick`, `L'Île-du-Prince-Édouard`, `Terre-Neuve-et-Labrador`],
          correct: 2
        },
        {
          question: `Quelle province est la plus grande en superficie terrestre?`,
          options: [`L'Ontario`, `La Colombie-Britannique`, `L'Alberta`, `Le Québec`],
          correct: 3
        },
        {
          question: `Quelle province a la population la plus nombreuse au Canada?`,
          options: [`La Colombie-Britannique`, `L'Alberta`, `Le Québec`, `L'Ontario`],
          correct: 3
        },
        {
          question: `Quel accord commercial a remplacé l'ALENA entre le Canada, les États-Unis et le Mexique en 2020?`,
          options: [
            `Le Partenariat transpacifique`,
            `L'accord commercial du G7`,
            `L'ACEUM (Accord Canada-États-Unis-Mexique)`,
            `La Loi sur le libre-échange du Commonwealth`
          ],
          correct: 2
        },
        {
          question: `Combien de provinces et de territoires le Canada compte-t-il?`,
          options: [`10 provinces et 2 territoires`, `9 provinces et 3 territoires`, `10 provinces et 3 territoires`, `11 provinces et 2 territoires`],
          correct: 2
        },
        {
          question: `Quelle région est reconnue comme le grenier à blé du Canada?`,
          options: [`La Colombie-Britannique`, `Les provinces de l'Atlantique`, `Les provinces des Prairies (AB, SK, MB)`, `Le centre du Canada`],
          correct: 2
        },
        {
          question: `Quels sont les trois territoires du Canada?`,
          options: [
            `L'Alberta, la Saskatchewan et le Manitoba`,
            `Le Yukon, les Territoires du Nord-Ouest et le Nunavut`,
            `Le Nunavut, le Labrador et le Yukon`,
            `La Colombie-Britannique, le Yukon et les Territoires du Nord-Ouest`
          ],
          correct: 1
        },
        {
          question: `La Colombie-Britannique est principalement reconnue pour :`,
          options: [`Les sables bitumineux et la production énergétique`, `La culture du blé et du canola`, `La foresterie et le commerce avec l'Asie via le Pacifique`, `L'exploitation minière de l'or au Klondike`],
          correct: 2
        },
        {
          question: `L'Alberta est principalement reconnue pour :`,
          options: [`La pêche et les fruits de mer`, `Les produits forestiers`, `Les sables bitumineux et la production énergétique`, `La fabrication automobile`],
          correct: 2
        },
        {
          question: `Le Canada est membre de laquelle des organisations internationales suivantes?`,
          options: [
            `L'OTAN, le G7, le Commonwealth, la Francophonie et l'ONU`,
            `L'OTAN, l'Union européenne, le Commonwealth et le G7`,
            `L'ANASE, l'OTAN, le G20 et l'ONU`,
            `L'OPEP, le G7, le Commonwealth et l'OTAN`
          ],
          correct: 0
        },
        {
          question: `Le Québec est la plus grande province du Canada et se distingue par :`,
          options: [
            `Sa population, la plus nombreuse au Canada`,
            `Le fait d'avoir été la première province à se joindre à la Confédération`,
            `Sa population majoritairement francophone et son régime de droit civil`,
            `Ses réserves de pétrole, les plus importantes au Canada`
          ],
          correct: 2
        },
        {
          question: `Quels sont les trois océans qui bordent le Canada?`,
          options: [`Pacifique, Atlantique et Indien`, `Pacifique, Atlantique et Arctique`, `Arctique, Atlantique et Austral`, `Pacifique, Arctique et Caraïbes`],
          correct: 1
        },
        {
          question: `Laquelle des réponses suivantes nomme correctement les cinq Grands Lacs?`,
          options: [
            `Supérieur, Michigan, Huron, Érié, Ontario`,
            `Supérieur, Huron, Érié, Ontario, Georgian`,
            `Michigan, Huron, Érié, Ontario, Winnipeg`,
            `Supérieur, Michigan, Érié, Ottawa, Ontario`
          ],
          correct: 0
        },
        {
          question: `Les Grands Lacs sont importants pour le Canada parce qu'ils :`,
          options: [
            `Forment la frontière naturelle entre le Canada et l'Alaska`,
            `Contiennent de l'eau douce et offrent d'importantes voies navigables pour le commerce`,
            `Sont la principale source d'hydroélectricité du Canada`,
            `Ont été le site des premiers établissements français`
          ],
          correct: 1
        },
        {
          question: `Le premier parc national du Canada, créé en 1885, est :`,
          options: [`Jasper`, `Banff`, `Waterton Lakes`, `Elk Island`],
          correct: 1
        },
        {
          question: `L'Alberta compte cinq parcs nationaux, dont Banff.`,
          options: [`Vrai`, `Faux`],
          correct: 0
        },
        {
          question: `La région la plus densément peuplée du Canada est :`,
          options: [
            `Le corridor des provinces des Prairies`,
            `La côte du Pacifique, de Vancouver à Victoria`,
            `Le corridor Québec-Windsor`,
            `Les provinces de l'Atlantique le long de la baie de Fundy`
          ],
          correct: 2
        },
        {
          question: `Quelle est la capitale de la Colombie-Britannique?`,
          options: [`Vancouver`, `Victoria`, `Kelowna`, `Surrey`],
          correct: 1
        },
        {
          question: `Quelle est la capitale du Nouveau-Brunswick?`,
          options: [`Saint John`, `Moncton`, `Fredericton`, `Bathurst`],
          correct: 2
        },
        {
          question: `Quelle est la capitale de l'Alberta?`,
          options: [`Calgary`, `Red Deer`, `Lethbridge`, `Edmonton`],
          correct: 3
        }
      ]
    }
  ],

  questionBank: [
    // ── DROITS ET RESPONSABILITÉS ──────────────────────────────────────────
    { question: `Quel document protège les droits et libertés des Canadiens?`, options: [`La Loi constitutionnelle de 1867`, `La Charte canadienne des droits et libertés`, `La Loi sur les langues officielles`, `La Déclaration canadienne des droits (1960)`], correct: 1, category: `Droits` },
    { question: `En quelle année la Charte canadienne des droits et libertés est-elle entrée en vigueur?`, options: [`1867`, `1965`, `1982`, `1999`], correct: 2, category: `Droits` },
    { question: `Quelles sont les deux langues officielles du Canada?`, options: [`L'anglais et l'inuktitut`, `Le français et le cri`, `L'anglais et le français`, `L'anglais et le mohawk`], correct: 2, category: `Droits` },
    { question: `Quelle est la seule province officiellement bilingue au Canada?`, options: [`Québec`, `Ontario`, `Nouveau-Brunswick`, `Manitoba`], correct: 2, category: `Droits` },
    { question: `Le droit de circuler et de travailler partout au Canada s'appelle :`, options: [`Un droit démocratique`, `Une garantie juridique`, `Un droit relatif à la liberté de circulation et d'établissement`, `Un droit à l'égalité`], correct: 2, category: `Droits` },
    { question: `Le droit de vote est un exemple de quelle catégorie de droits?`, options: [`Liberté de circulation et d'établissement`, `Droits démocratiques`, `Droits linguistiques`, `Garanties juridiques`], correct: 1, category: `Droits` },
    { question: `Quel article de la Loi constitutionnelle de 1982 reconnaît et confirme les droits ancestraux et issus de traités?`, options: [`Article 15`, `Article 33`, `Article 35`, `Article 91`], correct: 2, category: `Droits` },
    { question: `Quel est l'âge minimum pour voter à une élection fédérale canadienne?`, options: [`16`, `17`, `18`, `21`], correct: 2, category: `Droits` },
    { question: `La liberté de conscience, de religion, de pensée et d'expression est protégée par quelle partie de la Constitution?`, options: [`La Loi constitutionnelle de 1867`, `La Charte des droits et libertés`, `La Loi sur les langues officielles`, `Le Statut de Westminster`], correct: 1, category: `Droits` },
    { question: `Quelle est une responsabilité de la citoyenneté canadienne (et non simplement un droit)?`, options: [`Recevoir de l'aide sociale`, `Respecter la loi et faire partie d'un jury`, `Utiliser les parcs publics`, `Recevoir des soins de santé`], correct: 1, category: `Droits` },

    // ── HISTOIRE ────────────────────────────────────────────────────────────
    { question: `Quand le Canada est-il devenu un dominion autonome?`, options: [`Le 1er juillet 1776`, `Le 1er juillet 1867`, `Le 1er juillet 1931`, `Le 1er juillet 1982`], correct: 1, category: `Histoire` },
    { question: `Qui a été le premier premier ministre du Canada?`, options: [`Sir Wilfrid Laurier`, `Louis Riel`, `Sir John A. Macdonald`, `Jean Cabot`], correct: 2, category: `Histoire` },
    { question: `Quelles étaient les quatre provinces fondatrices de la Confédération en 1867?`, options: [`L'Ontario, le Québec, la Nouvelle-Écosse et l'Île-du-Prince-Édouard`, `L'Ontario, le Québec, la Nouvelle-Écosse et le Nouveau-Brunswick`, `Le Québec, le Nouveau-Brunswick, le Manitoba et la Colombie-Britannique`, `L'Ontario, la Nouvelle-Écosse, le Nouveau-Brunswick et Terre-Neuve`], correct: 1, category: `Histoire` },
    { question: `Qui ont été les premiers Européens à atteindre le Canada?`, options: [`Les Français, sous Jacques Cartier`, `Les Anglais, sous Jean Cabot`, `Les Vikings nordiques`, `Les Portugais, sous John Fernandes`], correct: 2, category: `Histoire` },
    { question: `Qui a cartographié en premier la côte Est du Canada pour l'Angleterre en 1497?`, options: [`Jacques Cartier`, `Samuel de Champlain`, `Jean Cabot`, `Henry Hudson`], correct: 2, category: `Histoire` },
    { question: `Quelle est l'importance de la bataille de la crête de Vimy (9 avril 1917)?`, options: [`Le Canada a officiellement obtenu son indépendance de la Grande-Bretagne`, `Les quatre divisions du Corps canadien ont combattu ensemble pour la première fois`, `Les Canadiennes ont obtenu le droit de vote`, `Le Canada a signé le Statut de Westminster`], correct: 1, category: `Histoire` },
    { question: `Quand les femmes ont-elles obtenu le droit de vote aux élections fédérales canadiennes?`, options: [`1916`, `1918`, `1929`, `1945`], correct: 1, category: `Histoire` },
    { question: `Quelle a été l'importance du 6 juin 1944 (jour J) pour le Canada?`, options: [`Les Canadiens ont combattu à la crête de Vimy`, `Le Canada a déclaré la guerre à l'Allemagne`, `Les forces canadiennes ont pris d'assaut la plage Juno en Normandie pour libérer l'Europe de l'Ouest`, `L'armistice de la guerre de Corée a été signé`], correct: 2, category: `Histoire` },
    { question: `Quelle a été la dernière province à se joindre à la Confédération, et en quelle année?`, options: [`Le Manitoba, 1870`, `La Colombie-Britannique, 1871`, `L'Île-du-Prince-Édouard, 1873`, `Terre-Neuve-et-Labrador, 1949`], correct: 3, category: `Histoire` },
    { question: `Quel événement a mené à l'entrée du Manitoba dans la Confédération en 1870?`, options: [`La ruée vers l'or du Klondike`, `La résistance de la rivière Rouge menée par Louis Riel`, `L'achèvement du CFCP`, `La résistance du Nord-Ouest de 1885`], correct: 1, category: `Histoire` },
    { question: `En quelle année le Chemin de fer Canadien Pacifique (CFCP) a-t-il été achevé?`, options: [`1867`, `1871`, `1885`, `1896`], correct: 2, category: `Histoire` },
    { question: `Qui a été le premier premier ministre canadien-français du Canada?`, options: [`Pierre Trudeau`, `Sir Wilfrid Laurier`, `Louis-Hippolyte LaFontaine`, `Louis Riel`], correct: 1, category: `Histoire` },
    { question: `La ruée vers l'or du Klondike, dans les années 1890, a eu lieu dans quel territoire?`, options: [`Les Territoires du Nord-Ouest`, `Le Nunavut`, `Le Yukon`, `La Colombie-Britannique`], correct: 2, category: `Histoire` },
    { question: `Qui a remporté le prix Nobel de la paix en 1957 pour avoir contribué à établir les forces de maintien de la paix des Nations Unies?`, options: [`John Diefenbaker`, `Tommy Douglas`, `Lester B. Pearson`, `Pierre Trudeau`], correct: 2, category: `Histoire` },
    { question: `Qu'est-ce que le Statut de Westminster (1931) a accordé au Canada?`, options: [`Sa première constitution écrite`, `La pleine indépendance législative à l'égard de la Grande-Bretagne`, `Le suffrage universel pour les femmes`, `Le contrôle de l'immigration`], correct: 1, category: `Histoire` },
    { question: `Qu'est-ce que le jour du Souvenir, et quand a-t-il lieu?`, options: [`La fête du Canada : le 1er juillet, célébrant la Confédération`, `Le jour de la Victoire en Europe : le 8 mai`, `Un jour pour honorer les Canadiens morts à la guerre : le 11 novembre`, `L'anniversaire de la Charte des droits : le 17 avril`], correct: 2, category: `Histoire` },
    { question: `Où se sont établis les loyalistes de l'Empire-Uni après la Révolution américaine?`, options: [`Le Québec et la Colombie-Britannique`, `La Nouvelle-Écosse, le Nouveau-Brunswick et l'Ontario`, `Le Manitoba et la Saskatchewan`, `Les Territoires du Nord-Ouest`], correct: 1, category: `Histoire` },
    { question: `Quels sont les trois groupes de peuples autochtones du Canada?`, options: [`Les Inuits, les Cris et les Métis`, `Les Premières Nations, les Métis et les Inuits`, `Les Haudenosaunees, les Algonquins et les Inuits`, `Les Premières Nations, les Mohawks et les Inuits`], correct: 1, category: `Histoire` },
    { question: `L'« affaire personne » de 1929 a établi que :`, options: [`Les peuples autochtones avaient des droits issus de traités`, `Les femmes étaient légalement reconnues comme des « personnes » pouvant siéger au Sénat`, `Les Canadiens français avaient des droits linguistiques hors Québec`, `Le Canada avait obtenu sa pleine indépendance en politique étrangère`], correct: 1, category: `Histoire` },
    { question: `Samuel de Champlain est connu comme :`, options: [`Le premier premier ministre du Canada`, `Le père de la Nouvelle-France`, `L'explorateur qui a cartographié l'Arctique`, `Le chef du mouvement patriote`], correct: 1, category: `Histoire` },
    { question: `Le rôle du Canada dans la bataille de l'Atlantique (Seconde Guerre mondiale) était de :`, options: [`Diriger les débarquements du jour J`, `Protéger les convois de ravitaillement alliés traversant l'océan vers la Grande-Bretagne`, `Libérer la France avec des troupes terrestres`, `Commander le théâtre du Pacifique contre le Japon`], correct: 1, category: `Histoire` },

    // ── GOUVERNEMENT ──────────────────────────────────────────────────────
    { question: `Qui est le chef d'État du Canada?`, options: [`Le premier ministre`, `La gouverneure générale`, `Le souverain (le roi Charles III)`, `Le juge en chef du Canada`], correct: 2, category: `Gouvernement` },
    { question: `Qui représente le souverain à l'échelle fédérale au Canada?`, options: [`Le premier ministre`, `Le président du Sénat`, `La gouverneure générale`, `Le juge en chef du Canada`], correct: 2, category: `Gouvernement` },
    { question: `Qui représente le souverain à l'échelle provinciale?`, options: [`Le premier ministre provincial`, `Le lieutenant-gouverneur`, `Le procureur général`, `Le juge en chef de la province`], correct: 1, category: `Gouvernement` },
    { question: `Combien de sièges compte le Sénat canadien?`, options: [`50`, `105`, `308`, `338`], correct: 1, category: `Gouvernement` },
    { question: `Combien de sièges compte la Chambre des communes?`, options: [`105`, `265`, `308`, `338`], correct: 3, category: `Gouvernement` },
    { question: `Que signifie « gouvernement responsable » au Canada?`, options: [`Le gouvernement doit présenter un budget équilibré chaque année`, `Le Cabinet doit conserver la confiance de la majorité des députés élus`, `Le roi approuve personnellement toutes les lois fédérales`, `Le Sénat peut opposer son veto à tout projet de loi de la Chambre des communes`], correct: 1, category: `Gouvernement` },
    { question: `Le système de gouvernement du Canada se décrit le mieux comme :`, options: [`Une république avec un président élu`, `Un État fédéral doté d'une démocratie parlementaire et d'une monarchie constitutionnelle`, `Un État unitaire dirigé par un premier ministre et un Sénat`, `Une démocratie directe avec des référendums nationaux réguliers`], correct: 1, category: `Gouvernement` },
    { question: `Laquelle des réponses suivantes est une responsabilité fédérale (et non provinciale)?`, options: [`L'éducation`, `La prestation des soins de santé`, `La défense nationale`, `La propriété et les droits civils`], correct: 2, category: `Gouvernement` },
    { question: `Laquelle des réponses suivantes est une responsabilité provinciale (et non fédérale)?`, options: [`La monnaie et les opérations bancaires`, `La défense nationale`, `L'éducation`, `Le droit criminel`], correct: 2, category: `Gouvernement` },
    { question: `Quel est le rôle du Cabinet dans le gouvernement du Canada?`, options: [`Approuver les nominations à la Cour suprême`, `Diriger l'opposition officielle et demander des comptes au gouvernement`, `Un groupe de ministres choisis par le premier ministre pour diriger les ministères`, `L'ensemble des députés élus`], correct: 2, category: `Gouvernement` },
    { question: `Que doit-il se passer pour qu'un projet de loi devienne une loi au Canada?`, options: [`Le premier ministre le signe pour en faire une loi`, `Il doit être adopté par la Chambre des communes, le Sénat, et recevoir la sanction royale`, `Un référendum national doit l'approuver`, `La Cour suprême doit l'examiner et l'approuver`], correct: 1, category: `Gouvernement` },
    { question: `Qu'est-ce qu'un gouvernement minoritaire au Canada?`, options: [`Un gouvernement ayant remporté plus de la moitié de tous les sièges`, `Un gouvernement formé par une coalition de partis`, `Le parti détenant le plus grand nombre de sièges, mais moins de la moitié`, `Un gouvernement nommé par la gouverneure générale sans élection`], correct: 2, category: `Gouvernement` },
    { question: `Quel est le rôle de la gouverneure générale?`, options: [`Diriger le gouvernement fédéral à titre de chef du gouvernement`, `Représenter le souverain, accorder la sanction royale aux projets de loi et assermenter le premier ministre`, `Présider les débats à la Chambre des communes`, `Agir à titre de chef de la Cour suprême`], correct: 1, category: `Gouvernement` },
    { question: `Les trois pouvoirs du gouvernement du Canada sont :`, options: [`La monarchie, le Parlement et les tribunaux`, `Fédéral, provincial et municipal`, `Exécutif, législatif et judiciaire`, `Le Sénat, les Communes et la gouverneure générale`], correct: 2, category: `Gouvernement` },

    // ── GÉOGRAPHIE ────────────────────────────────────────────────────────
    { question: `Quelle est la capitale du Canada?`, options: [`Toronto`, `Montréal`, `Ottawa`, `Vancouver`], correct: 2, category: `Géographie` },
    { question: `Quels sont les trois territoires du Canada?`, options: [`L'Alberta, la Saskatchewan et le Manitoba`, `Le Yukon, les Territoires du Nord-Ouest et le Nunavut`, `Le Nunavut, le Labrador et le Yukon`, `La Colombie-Britannique, le Yukon et les Territoires du Nord-Ouest`], correct: 1, category: `Géographie` },
    { question: `Quelle province a la population la plus nombreuse au Canada?`, options: [`La Colombie-Britannique`, `L'Alberta`, `Le Québec`, `L'Ontario`], correct: 3, category: `Géographie` },
    { question: `Quelle province est la plus grande en superficie terrestre?`, options: [`L'Ontario`, `La Colombie-Britannique`, `L'Alberta`, `Le Québec`], correct: 3, category: `Géographie` },
    { question: `Quelle province est la plus petite en superficie?`, options: [`La Nouvelle-Écosse`, `Le Nouveau-Brunswick`, `L'Île-du-Prince-Édouard`, `Terre-Neuve-et-Labrador`], correct: 2, category: `Géographie` },
    { question: `Qu'est-ce que le Nunavut, et quand a-t-il été créé?`, options: [`Une réserve des Premières Nations, créée en 1970`, `Le plus grand territoire du Canada, créé en 1999 comme territoire d'origine des Inuits`, `Une nouvelle province détachée du Québec en 1999`, `Un territoire créé pour les Métis en 1949`], correct: 1, category: `Géographie` },
    { question: `Le plus important partenaire commercial du Canada est :`, options: [`La Chine`, `Le Royaume-Uni`, `Le Mexique`, `Les États-Unis`], correct: 3, category: `Géographie` },
    { question: `Pourquoi les Grands Lacs sont-ils importants pour le Canada?`, options: [`Ils forment la frontière naturelle avec l'Alaska`, `Ils sont la principale source d'hydroélectricité du Canada`, `Ils contiennent de l'eau douce et offrent d'importantes voies navigables pour le commerce`, `Ils sont le site des premiers établissements français`], correct: 2, category: `Géographie` },

    // ── SYMBOLES ET CULTURE ───────────────────────────────────────────────
    { question: `Quel est l'animal national du Canada?`, options: [`L'orignal`, `Le plongeon huard`, `Le castor`, `Le bison`], correct: 2, category: `Symboles` },
    { question: `Quand le drapeau canadien actuel (la feuille d'érable) a-t-il été adopté?`, options: [`1945`, `1952`, `1965`, `1967`], correct: 2, category: `Symboles` },
    { question: `Quels sont les deux sports nationaux officiels du Canada?`, options: [`Le football et le basketball`, `Le baseball et le curling`, `Le hockey (hiver) et la crosse (été)`, `Le soccer et le hockey`], correct: 2, category: `Symboles` },
    { question: `Quelle est la devise nationale du Canada?`, options: [`« Paix, ordre et bon gouvernement »`, `« A Mari Usque Ad Mare » (D'un océan à l'autre)`, `« Mon foyer et ma terre natale »`, `« Le vrai Nord fort et libre »`], correct: 1, category: `Symboles` },
    { question: `L'Ordre du Canada est :`, options: [`Une médaille militaire décernée pour service de combat`, `La plus haute distinction du Canada pour une réalisation exceptionnelle par des civils`, `Une distinction accordée à tous les nouveaux citoyens lors de leur naturalisation`, `Une décoration gouvernementale pour les élus`], correct: 1, category: `Symboles` },
    { question: `En quelle année l'hymne national « Ô Canada » a-t-il été officiellement adopté?`, options: [`1867`, `1927`, `1965`, `1980`], correct: 3, category: `Symboles` },

    // ── ÉLECTIONS ─────────────────────────────────────────────────────────
    { question: `Qu'est-ce qu'un bureau de vote?`, options: [`Le bureau central où les résultats de l'élection sont compilés`, `Le bureau où les candidats s'inscrivent pour se présenter`, `L'endroit où les électeurs admissibles vont déposer leur bulletin de vote`, `Le bureau régional d'Élections Canada`], correct: 2, category: `Élections` },
    { question: `Qu'est-ce qu'un directeur du scrutin?`, options: [`Le chef d'un parti politique participant à une élection`, `Le fonctionnaire qui administre l'élection fédérale dans une circonscription`, `Un député réélu pour un second mandat`, `Le directeur national d'Élections Canada`], correct: 1, category: `Élections` },
    { question: `Selon la loi, à quelle fréquence une élection fédérale doit-elle avoir lieu au Canada?`, options: [`Tous les deux ans`, `Tous les trois ans`, `Au moins tous les cinq ans`, `Au moins tous les quatre ans`], correct: 3, category: `Élections` },
    { question: `Quel organisme est responsable de l'administration des élections fédérales au Canada?`, options: [`Le Bureau du Conseil privé`, `Le ministère de la Justice`, `Élections Canada`, `Le Bureau de la gouverneure générale`], correct: 2, category: `Élections` },
    { question: `Quel est le rôle du chef de l'opposition officielle?`, options: [`Aider le premier ministre à gouverner`, `Examiner attentivement le gouvernement et présenter un programme de rechange`, `Présider les débats au Sénat`, `Représenter le Canada dans les négociations internationales`], correct: 1, category: `Élections` },

    // ── JUSTICE ───────────────────────────────────────────────────────────
    { question: `Que signifie « présomption d'innocence » en droit canadien?`, options: [`La police peut détenir quiconque pour interrogatoire sans accusation`, `Une personne accusée d'un crime est innocente jusqu'à preuve du contraire devant un tribunal`, `La Couronne doit toujours accepter un plaidoyer de culpabilité`, `Les citoyens ne peuvent être arrêtés sans mandat`], correct: 1, category: `Justice` },
    { question: `Si vous êtes arrêté au Canada, vous avez le droit de :`, options: [`Refuser de comparaître devant le tribunal`, `Être jugé dans les 24 heures`, `Garder le silence et parler à un avocat sans délai`, `Demander un procès devant jury dans tous les cas`], correct: 2, category: `Justice` },
    { question: `Qui adopte les lois fédérales au Canada?`, options: [`La police et la GRC`, `Le Parlement (la Chambre des communes et le Sénat)`, `La Cour suprême du Canada`, `La gouverneure générale agissant seule`], correct: 1, category: `Justice` },
    { question: `Un crime au Canada est considéré comme une infraction contre :`, options: [`Uniquement la victime`, `Le gouvernement provincial`, `La société dans son ensemble`, `La société d'État fédérale`], correct: 2, category: `Justice` },
    { question: `Si vous ne pouvez pas payer un avocat, vous devriez communiquer avec :`, options: [`Élections Canada`, `L'aide juridique`, `Le Sénat`, `Le Bureau de la gouverneure générale`], correct: 1, category: `Justice` },

    // ── DROITS ET RESPONSABILITÉS (suite) ─────────────────────────────────
    { question: `Quelle catégorie de droits comprend la liberté de religion, d'expression et de réunion pacifique?`, options: [`Droits démocratiques`, `Garanties juridiques`, `Libertés fondamentales`, `Droits à l'égalité`], correct: 2, category: `Droits` },
    { question: `Quel droit de la Charte protège les Canadiens contre la discrimination fondée sur la race, le sexe ou le handicap?`, options: [`Liberté de circulation et d'établissement`, `Droits démocratiques`, `Droits linguistiques`, `Droits à l'égalité`], correct: 3, category: `Droits` },
    { question: `Quel droit de la Charte permet aux Canadiens de vivre et de travailler dans n'importe quelle province?`, options: [`Libertés fondamentales`, `Liberté de circulation et d'établissement`, `Droits démocratiques`, `Droits à l'égalité`], correct: 1, category: `Droits` },
    { question: `Le droit de parler à un avocat après une arrestation relève de quelle catégorie de la Charte?`, options: [`Liberté de circulation et d'établissement`, `Droits à l'égalité`, `Garanties juridiques`, `Droits démocratiques`], correct: 2, category: `Droits` },
    { question: `Quelle responsabilité est légalement exigée des citoyens canadiens lorsque appelés par un tribunal?`, options: [`Faire du bénévolat dans la communauté`, `Faire partie d'un jury`, `Se porter candidat à une charge publique`, `Apprendre les deux langues officielles`], correct: 1, category: `Droits` },
    { question: `Qu'affirme la Loi sur le multiculturalisme canadien (1988)?`, options: [`Que le français est la seule langue officielle`, `Que la diversité culturelle est une valeur fondamentale canadienne`, `Que tous les immigrants doivent apprendre une langue officielle en un an`, `Que les peuples autochtones sont la seule minorité reconnue`], correct: 1, category: `Droits` },
    { question: `Selon les droits linguistiques prévus par la Charte, l'anglais et le français ont un statut égal :`, options: [`Dans tous les milieux de travail au Canada`, `Dans les rapports avec le gouvernement fédéral`, `Dans toutes les provinces et tous les territoires`, `Uniquement au Nouveau-Brunswick et au Québec`], correct: 1, category: `Droits` },
    { question: `Le droit de voter et de se porter candidat à une charge publique relève de quelle catégorie de la Charte?`, options: [`Libertés fondamentales`, `Garanties juridiques`, `Droits démocratiques`, `Droits à l'égalité`], correct: 2, category: `Droits` },
    { question: `Laquelle des réponses suivantes est une responsabilité (et non simplement un droit) de la citoyenneté canadienne?`, options: [`Recevoir l'assurance-emploi`, `Utiliser les bibliothèques publiques`, `Défendre le Canada si le besoin se présentait`, `Recevoir des prestations fiscales pour enfants`], correct: 2, category: `Droits` },
    { question: `Quel droit protège un Canadien contre les fouilles et saisies abusives par le gouvernement?`, options: [`Droits démocratiques`, `Liberté de circulation et d'établissement`, `Garanties juridiques`, `Droits à l'égalité`], correct: 2, category: `Droits` },

    // ── HISTOIRE (suite) ──────────────────────────────────────────────────
    { question: `Quand Jacques Cartier a-t-il revendiqué la région du Saint-Laurent au nom de la France?`, options: [`1497`, `1534`, `1608`, `1634`], correct: 1, category: `Histoire` },
    { question: `Qui a fondé la ville de Québec en 1608?`, options: [`Jacques Cartier`, `Jean Cabot`, `Samuel de Champlain`, `Henry Hudson`], correct: 2, category: `Histoire` },
    { question: `L'économie de la Nouvelle-France reposait principalement sur :`, options: [`La pêche à la morue`, `La traite des fourrures`, `L'agriculture`, `L'exportation de bois`], correct: 1, category: `Histoire` },
    { question: `L'Acte constitutionnel de 1791 a divisé le Canada en :`, options: [`Québec et Ontario`, `Haut-Canada (anglophone) et Bas-Canada (francophone)`, `Canada britannique et Canada français`, `Nouvelle-Écosse et Nouveau-Brunswick`], correct: 1, category: `Histoire` },
    { question: `Dans quelle province le gouvernement responsable a-t-il été obtenu en premier au Canada, en 1848?`, options: [`Ontario`, `Québec`, `Nouvelle-Écosse`, `Nouveau-Brunswick`], correct: 2, category: `Histoire` },
    { question: `Quelle rencontre de 1864 entre dirigeants coloniaux a mené directement à la Confédération?`, options: [`La Conférence de Québec`, `La Conférence de Charlottetown`, `La Convention d'Ottawa`, `La Conférence de Londres`], correct: 1, category: `Histoire` },
    { question: `Pourquoi les loyalistes de l'Empire-Uni sont-ils venus au Canada après la Révolution américaine?`, options: [`Ils fuyaient les persécutions religieuses`, `Ils sont restés fidèles à la Couronne britannique et ont choisi de quitter les nouveaux États-Unis`, `Ils ont été recrutés par le gouvernement français`, `C'étaient des colons métis retournant dans leur patrie`], correct: 1, category: `Histoire` },
    { question: `Pendant la guerre de 1812, quel pays a envahi le Canada?`, options: [`La France`, `L'Espagne`, `Les États-Unis`, `La Russie`], correct: 2, category: `Histoire` },
    { question: `La grève générale de Winnipeg de 1919 est importante parce que :`, options: [`Elle a mené à l'entrée du Manitoba dans la Confédération`, `Elle a été l'une des plus importantes actions ouvrières de l'histoire canadienne`, `Elle a permis aux femmes d'obtenir le droit de vote`, `Elle a déclenché la construction du CFCP`], correct: 1, category: `Histoire` },
    { question: `Tommy Douglas est reconnu dans l'histoire canadienne pour :`, options: [`Avoir dirigé le Canada pendant la Seconde Guerre mondiale`, `Avoir instauré les soins de santé universels (l'assurance-maladie) en Saskatchewan`, `Avoir achevé le Chemin de fer Canadien Pacifique`, `Avoir remporté le prix Nobel de la paix`], correct: 1, category: `Histoire` },
    { question: `On se souvient de Terry Fox pour :`, options: [`Avoir couru le Marathon de l'espoir à travers le Canada pour amasser des fonds pour la recherche sur le cancer`, `Avoir remporté l'or pour le Canada aux Jeux olympiques de 1980`, `Avoir dirigé la résistance métisse en 1885`, `Avoir fondé l'Ordre du Canada`], correct: 0, category: `Histoire` },
    { question: `Quand le Canada a-t-il déclaré la guerre lors de la Seconde Guerre mondiale?`, options: [`Le même jour que la Grande-Bretagne, le 4 août 1939`, `Une semaine après la Grande-Bretagne, de façon indépendante, ce qui démontrait son autonomie`, `Seulement après l'entrée en guerre des États-Unis en décembre 1941`, `Le jour J, le 6 juin 1944`], correct: 1, category: `Histoire` },
    { question: `La ruée vers l'or du Klondike a eu lieu dans les années 1890 dans quel territoire?`, options: [`Les Territoires du Nord-Ouest`, `Le Nunavut`, `Le Yukon`, `La Colombie-Britannique`], correct: 2, category: `Histoire` },
    { question: `La Police à cheval du Nord-Ouest (fondée en 1873) était le précurseur de quelle organisation?`, options: [`L'Armée canadienne`, `La Gendarmerie royale du Canada (GRC)`, `La Police provinciale de l'Ontario`, `Le ministère de la Défense nationale`], correct: 1, category: `Histoire` },
    { question: `Le Canada a envoyé des troupes à la guerre de Corée (1950-1953) dans le cadre de :`, options: [`Une force de l'Empire britannique`, `Une force des Nations Unies défendant la Corée du Sud`, `Un accord bilatéral avec les États-Unis seulement`, `Une mission défensive de l'OTAN en Europe`], correct: 1, category: `Histoire` },
    { question: `Combien de loyalistes de l'Empire-Uni sont venus au Canada après la Révolution américaine?`, options: [`Environ 5 000`, `Environ 15 000`, `Environ 40 000 à 50 000`, `Environ 100 000`], correct: 2, category: `Histoire` },
    { question: `La « Politique nationale » (1879) de sir John A. Macdonald a instauré :`, options: [`Le libre-échange avec les États-Unis`, `Des tarifs protecteurs pour encourager l'industrie canadienne et coloniser l'Ouest`, `L'abolition du Sénat`, `Un référendum sur la souveraineté du Québec`], correct: 1, category: `Histoire` },
    { question: `Le rapatriement de la Constitution en 1982 était important parce que :`, options: [`Le Canada est devenu une république pour la première fois`, `Le Canada a obtenu sa pleine indépendance constitutionnelle à l'égard de la Grande-Bretagne et la Charte des droits est entrée en vigueur`, `Le Québec est officiellement devenu une province bilingue`, `Le Sénat a été remplacé par un organe élu`], correct: 1, category: `Histoire` },
    { question: `Le général Isaac Brock est reconnu comme un héros de quel conflit?`, options: [`La bataille de la crête de Vimy (1917)`, `La guerre de 1812`, `La résistance du Nord-Ouest (1885)`, `La guerre des Boers (1899-1902)`], correct: 1, category: `Histoire` },
    { question: `Quelle était l'importance de l'Acte de Québec de 1774?`, options: [`Il a donné au Québec son indépendance envers la domination britannique`, `Il a permis aux Canadiens français de conserver leur langue, la religion catholique et le droit civil`, `Il a uni le Haut-Canada et le Bas-Canada en une seule province`, `Il a établi la première assemblée élue en Nouvelle-France`], correct: 1, category: `Histoire` },

    // ── GOUVERNEMENT (suite) ──────────────────────────────────────────────
    { question: `Combien de juges siègent à la Cour suprême du Canada?`, options: [`7`, `9`, `11`, `13`], correct: 1, category: `Gouvernement` },
    { question: `Jusqu'à quel âge les sénateurs canadiens siègent-ils?`, options: [`65 ans`, `70 ans`, `75 ans`, `Il n'y a pas d'âge de retraite`], correct: 2, category: `Gouvernement` },
    { question: `Quel est le rôle principal du Sénat au sein du Parlement du Canada?`, options: [`Élire le premier ministre`, `Offrir un « second examen objectif » des lois adoptées par la Chambre des communes`, `Nommer la gouverneure générale`, `Représenter les gouvernements provinciaux à l'échelle fédérale`], correct: 1, category: `Gouvernement` },
    { question: `Qu'est-ce qu'un « premier ministre provincial » au Canada?`, options: [`Le vice-premier ministre à l'échelle fédérale`, `Le chef du gouvernement d'une province ou d'un territoire`, `Le représentant cérémonial de la Couronne dans une province`, `Un ministre principal du Cabinet fédéral`], correct: 1, category: `Gouvernement` },
    { question: `Comment le premier ministre est-il choisi au Canada?`, options: [`Élu directement par les Canadiens lors d'un vote national`, `La gouverneure générale nomme le chef du parti détenant le plus grand nombre de sièges à la Chambre des communes`, `Choisi par le Sénat parmi ses membres`, `Nommé personnellement par le roi du Canada`], correct: 1, category: `Gouvernement` },
    { question: `Quel palier de gouvernement est responsable de l'immigration au Canada?`, options: [`Provincial`, `Municipal`, `Fédéral`, `Territorial seulement`], correct: 2, category: `Gouvernement` },
    { question: `Quel palier de gouvernement assure la prestation des soins de santé au Canada?`, options: [`Fédéral`, `Municipal`, `Provincial et territorial`, `Conjointement par le fédéral et le municipal`], correct: 2, category: `Gouvernement` },
    { question: `Quel est le rôle principal d'un député?`, options: [`Nommer les juges de la Cour suprême`, `Représenter sa circonscription à la Chambre des communes et voter sur les lois`, `Administrer les programmes provinciaux`, `Conseiller la gouverneure générale sur les nominations`], correct: 1, category: `Gouvernement` },
    { question: `Quel palier de gouvernement gère les routes locales, les parcs et les services d'eau?`, options: [`Fédéral`, `Provincial`, `Municipal (local)`, `Territorial`], correct: 2, category: `Gouvernement` },
    { question: `Que se passe-t-il lorsqu'un gouvernement perd un vote de confiance à la Chambre des communes?`, options: [`La gouverneure générale dissout automatiquement le Parlement pour 90 jours`, `Le premier ministre doit démissionner ou demander à la gouverneure générale de déclencher une élection`, `Le Sénat prend temporairement le pouvoir`, `La Cour suprême nomme un gouvernement intérimaire`], correct: 1, category: `Gouvernement` },
    { question: `Quel est le rôle du président de la Chambre des communes?`, options: [`Voter sur toutes les lois au nom du premier ministre`, `Diriger les débats, maintenir l'ordre et représenter la Chambre lors des cérémonies officielles`, `Agir comme premier ministre intérimaire pendant les élections`, `Réviser les projets de loi avant leur envoi au Sénat`], correct: 1, category: `Gouvernement` },
    { question: `Qui nomme les sénateurs au Canada?`, options: [`Le premier ministre directement`, `La gouverneure générale, sur avis du premier ministre`, `Les premiers ministres provinciaux, par accord conjoint`, `Les citoyens canadiens, par une élection sénatoriale spéciale`], correct: 1, category: `Gouvernement` },

    // ── GÉOGRAPHIE (suite) ────────────────────────────────────────────────
    { question: `Où vit la majorité des Canadiens?`, options: [`Dans des communautés agricoles rurales`, `En ville, surtout dans le corridor Québec-Windsor`, `Le long de la côte du Pacifique`, `Dans les territoires du Nord`], correct: 1, category: `Géographie` },
    { question: `Quelle est la population approximative du Canada?`, options: [`Environ 20 millions`, `Environ 28 millions`, `Environ 38 millions`, `Environ 50 millions`], correct: 2, category: `Géographie` },
    { question: `En superficie, le Canada est le ___ plus grand pays du monde.`, options: [`Plus grand`, `Deuxième plus grand`, `Troisième plus grand`, `Quatrième plus grand`], correct: 1, category: `Géographie` },
    { question: `Quelle province est reconnue pour son industrie forestière et ses routes commerciales vers le Pacifique?`, options: [`L'Alberta`, `La Saskatchewan`, `Le Manitoba`, `La Colombie-Britannique`], correct: 3, category: `Géographie` },
    { question: `Quel accord commercial a remplacé l'ALENA entre le Canada, les États-Unis et le Mexique en 2020?`, options: [`L'AECG`, `L'ACEUM (Accord Canada-États-Unis-Mexique)`, `La ZLEA`, `Le PTP`], correct: 1, category: `Géographie` },
    { question: `Le Canada est membre de tous les groupes suivants, SAUF :`, options: [`L'OTAN`, `Le Commonwealth`, `L'Union européenne`, `Les Nations Unies`], correct: 2, category: `Géographie` },
    { question: `Quelle ville a accueilli les conférences de la Confédération de 1864, lui valant le titre de « berceau de la Confédération »?`, options: [`Halifax`, `La ville de Québec`, `Charlottetown`, `Ottawa`], correct: 2, category: `Géographie` },

    // ── SYMBOLES ET CULTURE (suite) ───────────────────────────────────────
    { question: `À quelle date la fête du Canada est-elle célébrée, et que souligne-t-elle?`, options: [`Le 4 juillet : l'indépendance à l'égard de la Grande-Bretagne`, `Le 1er juillet : l'anniversaire de la Confédération en 1867`, `Le 11 novembre : la fin de la Première Guerre mondiale`, `Le 1er octobre : la première élection nationale`], correct: 1, category: `Symboles` },
    { question: `Que symbolise le coquelicot au Canada, particulièrement le 11 novembre?`, options: [`La fleur nationale du Canada`, `Le souvenir des Canadiens morts à la guerre`, `Le symbole de l'Ordre du Canada`, `La paix entre le Canada et la France après la Première Guerre mondiale`], correct: 1, category: `Symboles` },
    { question: `Qu'est-ce que la Croix de Victoria?`, options: [`La plus haute distinction civile du Canada`, `La plus haute décoration militaire du Canada pour bravoure`, `Une médaille remise à tous les anciens combattants de la Première Guerre mondiale`, `Une distinction provinciale remise par les lieutenants-gouverneurs`], correct: 1, category: `Symboles` },
    { question: `Où se trouve la Chapelle du Souvenir qui honore les Canadiens morts à la guerre?`, options: [`Au Musée canadien de la guerre à Ottawa`, `À l'intérieur de la Tour de la Paix, sur la Colline du Parlement`, `Aux Archives nationales du Canada`, `Au cimetière militaire canadien en Normandie`], correct: 1, category: `Symboles` },
    { question: `Quelles sont les deux couleurs du drapeau canadien?`, options: [`Rouge, blanc et bleu`, `Rouge et blanc`, `Rouge, blanc et vert`, `Bleu et blanc`], correct: 1, category: `Symboles` },
    { question: `Comment appelle-t-on aussi communément la Gendarmerie royale du Canada (GRC)?`, options: [`Les Habits rouges`, `Les Mounties`, `Les Rangers`, `La Police du Dominion`], correct: 1, category: `Symboles` },
    { question: `Le Commonwealth est une organisation de combien de pays?`, options: [`27`, `38`, `54`, `72`], correct: 2, category: `Symboles` },
    { question: `Qu'est-ce que la Francophonie?`, options: [`Un organisme culturel provincial québécois`, `Une organisation internationale des nations francophones`, `Un réseau de diffusion de langue française`, `Le bureau officiel de la langue française du gouvernement fédéral`], correct: 1, category: `Symboles` },

    // ── ÉLECTIONS (suite) ─────────────────────────────────────────────────
    { question: `Qui peut se porter candidat à une élection fédérale canadienne?`, options: [`Tout résident canadien âgé de 18 ans ou plus`, `Tout citoyen canadien âgé de 18 ans ou plus`, `Tout citoyen canadien âgé de 21 ans ou plus`, `Tout résident permanent âgé de 18 ans ou plus`], correct: 1, category: `Élections` },
    { question: `Qu'est-ce qu'une « circonscription » fédérale au Canada?`, options: [`Le siège régional d'un parti politique`, `Une circonscription électorale représentée par un député`, `L'emplacement d'un bureau de vote`, `Une unité géographique utilisée uniquement à des fins de recensement`], correct: 1, category: `Élections` },
    { question: `Dans le système électoral majoritaire uninominal à un tour, qui remporte une circonscription?`, options: [`Le candidat qui obtient plus de 50 % des votes`, `Le candidat ayant obtenu le plus de votes, même sans majorité`, `Le candidat choisi par le chef du parti`, `Le candidat ayant amassé le plus de fonds de campagne`], correct: 1, category: `Élections` },
    { question: `Que devriez-vous faire si vous ne recevez pas de carte d'information de l'électeur avant une élection fédérale?`, options: [`Vous n'êtes pas admissible à voter à cette élection`, `Attendre le jour de l'élection et demander au bureau de vote`, `Communiquer avec Élections Canada pour confirmer que vous êtes sur la liste électorale`, `Communiquer avec le bureau de votre député`], correct: 2, category: `Élections` },
    { question: `Qu'est-ce qu'un « gouvernement majoritaire » au Canada?`, options: [`Un gouvernement appuyé par plus de deux partis`, `Un parti détenant plus de la moitié de tous les sièges à la Chambre des communes`, `Un gouvernement ayant plus de 75 % d'appui dans les sondages`, `Un parti ayant obtenu plus de votes que tout autre parti`], correct: 1, category: `Élections` },
    { question: `Voter aux élections fédérales canadiennes est :`, options: [`Obligatoire par la loi pour tous les citoyens de 18 ans et plus`, `Un droit et une responsabilité civique, mais non exigé par la loi`, `Réservé aux citoyens ayant produit une déclaration de revenus cette année-là`, `Ouvert à tous les résidents permanents de 18 ans et plus`], correct: 1, category: `Élections` },
    { question: `Après une élection fédérale, comment le gouvernement est-il formé?`, options: [`Le roi nomme le premier ministre selon un vote de popularité`, `Le parti détenant le plus grand nombre de sièges à la Chambre des communes est invité à former le gouvernement`, `Le Sénat vote pour déterminer quel parti doit gouverner`, `La gouverneure générale tient un second vote parmi les députés élus`], correct: 1, category: `Élections` },

    // ── JUSTICE (suite) ───────────────────────────────────────────────────
    { question: `Qu'est-ce qu'une « infraction sommaire » en droit canadien?`, options: [`Le type de crime le plus grave, jugé devant un juge et un jury`, `Une infraction criminelle mineure traitée rapidement devant les tribunaux inférieurs`, `Un différend civil entre deux parties privées`, `Une infraction entraînant une expulsion automatique`], correct: 1, category: `Justice` },
    { question: `Qu'est-ce qu'un « acte criminel » en droit canadien?`, options: [`Une infraction mineure de stationnement ou de circulation`, `Un différend civil entre voisins`, `Un crime grave pouvant mener à un procès devant jury`, `Une pénalité administrative imposée par un organisme gouvernemental`], correct: 2, category: `Justice` },
    { question: `Qui est principalement responsable de faire respecter les lois au Canada?`, options: [`Le Parlement`, `Les tribunaux`, `Les corps policiers, y compris la GRC`, `La gouverneure générale`], correct: 2, category: `Justice` },
    { question: `Les citoyens canadiens de 18 ans et plus peuvent être appelés à :`, options: [`Suivre un entraînement militaire obligatoire chaque année`, `Faire partie d'un jury, un devoir civique`, `Payer une taxe civique spéciale chaque année`, `Agir comme directeur du scrutin à chaque élection fédérale`], correct: 1, category: `Justice` },
    { question: `Quel est le rôle de la Cour suprême du Canada?`, options: [`Adopter de nouvelles lois lorsque le Parlement est dans une impasse`, `Agir comme la plus haute cour d'appel et interpréter la Constitution`, `Réviser tous les projets de loi avant qu'ils ne reçoivent la sanction royale`, `Élire le juge en chef et nommer les autres juges`], correct: 1, category: `Justice` },
    { question: `Que signifie « primauté du droit » au Canada?`, options: [`Seuls les citoyens privés doivent respecter la loi, pas les élus`, `Aucune personne ni institution (y compris le gouvernement) n'est au-dessus des lois`, `Le roi est le législateur suprême du Canada`, `Les lois ne s'appliquent que si elles sont adoptées par une majorité des deux tiers du Parlement`], correct: 1, category: `Justice` },
    { question: `Qu'est-ce que l'« habeas corpus » en droit canadien?`, options: [`Le droit à un procès rapide dans les 24 heures`, `Le droit de ne pas être emprisonné sans motif valable`, `Le droit de confronter les témoins en cour publique`, `Le droit de refuser de témoigner contre soi-même`], correct: 1, category: `Justice` },

    // ── BANQUE DE QUESTIONS COMPLÉMENTAIRE : combler les lacunes ──────────
    // Histoire
    { question: `Environ combien de Canadiens ont servi pendant la Première Guerre mondiale?`, options: [`Environ 7 000`, `Environ 60 000`, `Plus de 600 000`, `8 millions`], correct: 2, category: `Histoire` },
    { question: `Le Québec a connu une époque de changements rapides dans les années 1960. Comment appelle-t-on cette période?`, options: [`Le mouvement de l'Ouest`, `La Révolution tranquille`, `La Francophonie`, `Le référendum`], correct: 1, category: `Histoire` },
    { question: `Quelle est l'importance de la découverte de l'insuline par sir Frederick Banting et Charles Best?`, options: [`Elle a guéri définitivement toutes les formes de diabète`, `Elle a sauvé des millions de vies à travers le monde`, `C'était la première exportation médicale du Canada`, `Elle a valu au Canada son premier prix Nobel`], correct: 1, category: `Histoire` },
    { question: `Qui sont les Acadiens?`, options: [`Des peuples autochtones de l'Arctique`, `Des descendants de colons français établis dans les provinces maritimes à partir de 1604`, `Des loyalistes anglophones venus des États-Unis`, `Des Métis des provinces des Prairies`], correct: 1, category: `Histoire` },
    { question: `Qui est considéré comme le père du Manitoba?`, options: [`Sir John A. Macdonald`, `Sam Steele`, `George-Étienne Cartier`, `Louis Riel`], correct: 3, category: `Histoire` },
    { question: `Qui était le général sir Arthur Currie?`, options: [`Un chef militaire métis au XIXe siècle`, `Le fondateur de la GRC`, `Le plus grand soldat canadien de la Première Guerre mondiale`, `Le premier Canadien à recevoir la Croix de Victoria`], correct: 2, category: `Histoire` },
    { question: `Qui a mené le Québec vers la Confédération?`, options: [`Sir Wilfrid Laurier`, `Sir John A. Macdonald`, `Sir George-Étienne Cartier`, `Sir Louis-Hippolyte La Fontaine`], correct: 2, category: `Histoire` },
    { question: `Qui était sir Louis-Hippolyte La Fontaine?`, options: [`Le premier premier ministre canadien-français du Canada`, `Un défenseur de la démocratie et des droits linguistiques francophones, et premier chef d'un gouvernement responsable dans les Canadas`, `Le chef de la Révolution tranquille au Québec`, `Le premier gouverneur général du Canada`], correct: 1, category: `Histoire` },
    { question: `Qui était sir Sam Steele?`, options: [`Un chef métis lors de la résistance du Nord-Ouest`, `Un grand héros de la frontière, policier monté et soldat du Canada`, `Le père du Manitoba`, `Le premier ministre de la Justice du Canada`], correct: 1, category: `Histoire` },
    { question: `Qui étaient les voyageurs?`, options: [`Des explorateurs à la recherche du passage du Nord-Ouest`, `Des commerçants montréalais qui parcouraient l'intérieur du Canada en canot`, `Des immigrants européens arrivés au XVIIIe siècle`, `Des colons venus pendant la ruée vers l'or du Klondike`], correct: 1, category: `Histoire` },
    { question: `Qu'a établi l'Acte constitutionnel de 1791?`, options: [`La Charte canadienne des droits et libertés`, `Le Dominion du Canada`, `Des assemblées législatives élues par la population, divisant le Canada en Haut-Canada et Bas-Canada`, `L'égalité des droits pour les femmes au Canada`], correct: 2, category: `Histoire` },
    { question: `Quand l'Acte de l'Amérique du Nord britannique est-il entré en vigueur, créant le Dominion du Canada?`, options: [`1763`, `1791`, `1867`, `1931`], correct: 2, category: `Histoire` },

    // Gouvernement
    { question: `Comment appelle-t-on une loi avant son adoption officielle?`, options: [`Un décret`, `Un projet de loi`, `Une loi`, `Un mandat`], correct: 1, category: `Gouvernement` },
    { question: `Que promettez-vous en prêtant le serment de citoyenneté?`, options: [`D'apprendre couramment les deux langues officielles`, `De prêter allégeance au roi, d'observer les lois du Canada et de remplir les obligations d'un citoyen canadien`, `De renoncer à toute autre citoyenneté`, `De servir dans les Forces armées canadiennes si appelé à le faire`], correct: 1, category: `Gouvernement` },
    { question: `Quels sont les peuples fondateurs du Canada?`, options: [`Les Métis, les Français et les Britanniques`, `Les Inuits, les Autochtones et les Européens`, `Les Autochtones, les Français et les Britanniques`, `Les Premières Nations, les Français et les Anglais`], correct: 2, category: `Gouvernement` },
    { question: `Qui a d'importantes responsabilités de gouvernance dans les réserves des Premières Nations?`, options: [`Le gouvernement fédéral seul`, `Les gouvernements municipaux`, `Les chefs de bande et les conseillers`, `Les gouvernements provinciaux et territoriaux`], correct: 2, category: `Gouvernement` },
    { question: `Nommez deux documents clés qui, ensemble, contiennent les droits et libertés des Canadiens.`, options: [`La Loi constitutionnelle de 1867 et la Loi sur les langues officielles`, `La Charte canadienne des droits et libertés et la Magna Carta`, `L'Acte de l'Amérique du Nord britannique et la Loi sur les mesures de guerre`, `Le Statut de Westminster et la Loi constitutionnelle de 1867`], correct: 1, category: `Gouvernement` },
    { question: `Qui est le chef d'État du Canada?`, options: [`Le premier ministre`, `La gouverneure générale`, `Sa Majesté le roi`, `Le juge en chef de la Cour suprême`], correct: 2, category: `Gouvernement` },

    // Justice
    { question: `Que signifie « présomption d'innocence » dans le système de justice du Canada?`, options: [`Tout le monde est coupable jusqu'à preuve du contraire`, `La culpabilité est déterminée uniquement par un jury`, `Tout le monde est innocent jusqu'à preuve du contraire`, `Seuls les citoyens sont présumés innocents`], correct: 2, category: `Justice` },
    { question: `Au Canada, avez-vous le droit de questionner la police au sujet de son service ou de sa conduite?`, options: [`Non, la conduite policière ne peut faire l'objet de discussions publiques`, `Oui, mais seulement au sujet du service, pas de la conduite`, `Oui, vous pouvez questionner à la fois leur service et leur conduite`, `Seulement par l'entremise d'un avocat, dans une plainte officielle`], correct: 2, category: `Justice` },
    { question: `Quel est le plus haut tribunal du Canada?`, options: [`La Cour fédérale du Canada`, `La Cour du Banc de la Reine`, `La Cour suprême du Canada`, `La Cour d'appel`], correct: 2, category: `Justice` },
    { question: `Quel est le rôle des tribunaux au Canada?`, options: [`Faire respecter les lois par l'action policière`, `Créer des lois lorsque le Parlement ne siège pas`, `Régler les différends et interpréter les lois de façon indépendante`, `Conseiller le premier ministre sur les questions constitutionnelles`], correct: 2, category: `Justice` },

    // Élections
    { question: `À qui devez-vous dire comment vous avez voté à une élection fédérale?`, options: [`À votre employeur, si demandé`, `À un représentant d'Élections Canada`, `À un policier, si demandé`, `À personne, votre vote est secret`], correct: 3, category: `Élections` },
    { question: `Qu'est-ce qu'une carte d'information de l'électeur?`, options: [`Une carte énumérant tous les candidats de votre circonscription`, `Un formulaire indiquant quand et où voter`, `Votre preuve officielle de citoyenneté pour voter`, `Une carte remise après avoir voté`], correct: 1, category: `Élections` },
    { question: `Que devriez-vous faire si vous ne recevez pas de carte d'information de l'électeur avant une élection?`, options: [`Vous ne pouvez pas voter sans elle`, `Vous rendre au poste de police le plus près`, `Communiquer avec votre député`, `Appeler Élections Canada ou visiter son site Web`], correct: 3, category: `Élections` },
    { question: `Quelle province a été la première à accorder aux femmes le droit de vote?`, options: [`Ontario`, `Colombie-Britannique`, `Manitoba`, `Québec`], correct: 2, category: `Élections` },

    // Géographie
    { question: `Quelles sont les cinq régions du Canada?`, options: [`Midwest, Nord, Sud, Est et Ouest`, `Maritimes, Ontario, Québec, Prairies et Colombie-Britannique`, `Atlantique, Centre, Prairies, Côte Ouest et Nord`, `Est, Ouest, Centre, Arctique et Côtier`], correct: 2, category: `Géographie` },
    { question: `Environ le tiers des Canadiens vivent dans quelle province?`, options: [`Québec`, `Colombie-Britannique`, `Alberta`, `Ontario`], correct: 3, category: `Géographie` },
    { question: `Quels sont les trois principaux types d'industrie au Canada?`, options: [`L'agriculture, la pêche et la technologie`, `Le tourisme, le gouvernement et le commerce de détail`, `Les ressources naturelles, la fabrication et les services`, `L'exploitation minière, la construction et le transport`], correct: 2, category: `Géographie` },
    { question: `Quel est le plus important partenaire commercial du Canada?`, options: [`La Chine`, `Le Royaume-Uni`, `Les États-Unis d'Amérique`, `Le Japon`], correct: 2, category: `Géographie` },
    { question: `Où se trouvent les Grands Lacs?`, options: [`Entre le Québec et les États-Unis`, `Entre l'Ontario et les États-Unis`, `Dans les provinces des Prairies`, `Entre le Manitoba et les États-Unis`], correct: 1, category: `Géographie` },
    { question: `Quel est le plus grand et le plus achalandé des ports du Canada?`, options: [`Le port d'Halifax`, `Le port de Montréal`, `Le port de Vancouver`, `Le port de Toronto`], correct: 2, category: `Géographie` },
    { question: `Quelle province a son propre fuseau horaire, 30 minutes en avance sur l'heure normale de l'Atlantique?`, options: [`Nouvelle-Écosse`, `Île-du-Prince-Édouard`, `Nouveau-Brunswick`, `Terre-Neuve-et-Labrador`], correct: 3, category: `Géographie` },
    { question: `Quelle province est la plus petite en superficie terrestre?`, options: [`Nouvelle-Écosse`, `Nouveau-Brunswick`, `Île-du-Prince-Édouard`, `Terre-Neuve-et-Labrador`], correct: 2, category: `Géographie` },
    { question: `Quelle province est le principal producteur de pâtes et papiers et d'hydroélectricité?`, options: [`Ontario`, `Colombie-Britannique`, `Manitoba`, `Québec`], correct: 3, category: `Géographie` },
    { question: `Quelle région couvre plus du tiers de la superficie totale du Canada?`, options: [`Le centre du Canada`, `Les provinces des Prairies`, `Le Canada atlantique`, `Les territoires du Nord`], correct: 3, category: `Géographie` },
    { question: `Quelle région est reconnue comme le cœur industriel et manufacturier du Canada?`, options: [`Les provinces de l'Atlantique`, `Les provinces des Prairies`, `Le centre du Canada`, `La côte Ouest`], correct: 2, category: `Géographie` },
    { question: `Quelle région du Canada est reconnue à la fois pour ses terres agricoles fertiles et ses précieuses ressources énergétiques?`, options: [`Le centre du Canada`, `Les provinces des Prairies`, `La Colombie-Britannique`, `Les territoires du Nord`], correct: 1, category: `Géographie` },
    { question: `Quels sont les trois pays signataires de l'ACEUM (anciennement l'ALENA)?`, options: [`Le Canada, le Royaume-Uni et les États-Unis`, `Le Canada, les États-Unis et le Japon`, `Le Canada, le Mexique et les États-Unis`, `Le Canada, le Danemark et le Mexique`], correct: 2, category: `Géographie` },
    { question: `Quel est un cours d'eau important au Québec?`, options: [`Le fleuve Fraser`, `La rivière Saskatchewan`, `Le fleuve Saint-Laurent`, `La rivière des Outaouais`], correct: 2, category: `Géographie` },
    { question: `Pourquoi le commerce avec d'autres pays est-il important pour le Canada?`, options: [`Il permet aux Canadiens de voyager plus facilement à l'étranger`, `Il stimule l'économie et améliore le niveau de vie`, `Il élimine le besoin de fabrication nationale`, `Il permet d'obtenir des biens moins chers de l'étranger`], correct: 1, category: `Géographie` },

    // Dirigeants actuels et serment
    { question: `Qui est l'actuel premier ministre du Canada?`, options: [`Justin Trudeau`, `Pierre Poilievre`, `Mark Carney`, `Jagmeet Singh`], correct: 2, category: `Gouvernement` },
    { question: `Qui est l'actuelle gouverneure générale du Canada?`, options: [`Julie Payette`, `David Johnston`, `Adrienne Clarkson`, `Mary Simon`], correct: 3, category: `Gouvernement` },
    { question: `Quelle est la portée historique de la nomination de Mary Simon, gouverneure générale depuis 2021?`, options: [`Elle est la première femme à occuper le poste de gouverneure générale`, `Elle est la première personne née à l'extérieur du Canada à occuper le poste`, `Elle est la première Autochtone à occuper le poste de gouverneure générale`, `Elle est la plus jeune gouverneure générale de l'histoire canadienne`], correct: 2, category: `Gouvernement` },
    { question: `Quel parti le premier ministre Mark Carney dirige-t-il?`, options: [`Le Parti conservateur`, `Le Nouveau Parti démocratique`, `Le Parti libéral`, `Le Parti vert`], correct: 2, category: `Gouvernement` },
    { question: `Que doivent promettre les nouveaux Canadiens en prêtant le serment de citoyenneté?`, options: [`Allégeance au premier ministre et au Parlement du Canada`, `Allégeance à Sa Majesté le roi et l'observation fidèle des lois du Canada`, `Allégeance au peuple canadien et l'engagement à voter à toutes les élections`, `Allégeance au Canada et l'engagement à payer les impôts fédéraux`], correct: 1, category: `Droits` },
    { question: `Quel changement important a été apporté au serment de citoyenneté en 2021?`, options: [`Il a retiré l'allégeance au roi pour ne mentionner que le Canada`, `Il a ajouté une reconnaissance explicite des peuples autochtones et des droits issus de traités`, `Il exigeait que les nouveaux citoyens prêtent serment dans les deux langues officielles`, `Il a ajouté un engagement à servir dans les Forces armées canadiennes`], correct: 1, category: `Droits` },
    { question: `Quand la Journée nationale de la vérité et de la réconciliation (Journée du chandail orange) est-elle devenue un jour férié fédéral?`, options: [`2015`, `2018`, `2021`, `2022`], correct: 2, category: `Histoire` },

    // Symboles et culture
    { question: `Quels sont les premiers mots de l'hymne national du Canada?`, options: [`« Ô Canada! Notre province et terre natale! »`, `« Ô Canada! Terre de nos aïeux, »`, `« De près et de loin, ô Canada »`, `« Nous te protégerons »`], correct: 1, category: `Symboles` },
    { question: `Quel est le nom de l'hymne royal du Canada?`, options: [`« Ô Canada »`, `« La Marseillaise »`, `« Dieu protège le Roi »`, `« The Maple Leaf Forever »`], correct: 2, category: `Symboles` },
    { question: `Que représente le coquelicot du jour du Souvenir?`, options: [`Les sacrifices des Pères de la Confédération`, `Le drapeau canadien adopté en 1965`, `Le sacrifice des Canadiens ayant servi ou étant morts à la guerre`, `Les peuples autochtones du Canada`], correct: 2, category: `Symboles` },
    { question: `Quand le jour du Souvenir est-il observé au Canada?`, options: [`Le 31 octobre`, `Le 1er juillet`, `Le 26 décembre`, `Le 11 novembre`], correct: 3, category: `Symboles` },
    { question: `Quelle est la plus haute distinction militaire qu'un Canadien peut recevoir?`, options: [`L'Ordre du Canada`, `La Croix pourpre`, `La Médaille de la bravoure`, `La Croix de Victoria`], correct: 3, category: `Symboles` },
    { question: `Qu'est-ce qu'un francophone?`, options: [`Une personne dont la langue maternelle est l'anglais`, `Une personne dont la langue maternelle est le français`, `Une personne bilingue en anglais et en français`, `Tout résident de la province de Québec`], correct: 1, category: `Symboles` },
    { question: `Quel drapeau provincial arbore la fleur de lys?`, options: [`Nouveau-Brunswick`, `Manitoba`, `Ontario`, `Québec`], correct: 3, category: `Symboles` },
    { question: `Que commémore la fête du Canada (1er juillet)?`, options: [`L'adoption du drapeau canadien`, `La victoire du Canada lors de la Seconde Guerre mondiale`, `L'anniversaire de la Confédération en 1867`, `L'anniversaire de la reine Victoria`], correct: 2, category: `Symboles` },
    { question: `Que souligne la fête de Victoria?`, options: [`L'anniversaire de la reine Victoria et celui du souverain régnant`, `La fondation de Victoria, en Colombie-Britannique`, `La première élection fédérale du Canada`, `La signature de l'Acte de l'Amérique du Nord britannique`], correct: 0, category: `Symboles` },
    { question: `Quand a lieu la Journée nationale des peuples autochtones?`, options: [`Le 1er juillet`, `Le 21 juin`, `Le 30 septembre`, `Le 11 octobre`], correct: 1, category: `Symboles` },

    // ── LOYALISTES NOIRS ET GUERRE DE 1812 ────────────────────────────────
    { question: `Les loyalistes noirs sont arrivés au Canada bien avant que les explorateurs européens n'entrent en contact avec les peuples autochtones.`, options: [`Vrai`, `Faux`], correct: 1, category: `Histoire` },
    { question: `Environ combien de loyalistes noirs sont venus en Nouvelle-Écosse et au Nouveau-Brunswick après la Révolution américaine?`, options: [`Environ 500`, `Environ 3 000`, `Environ 15 000`, `Environ 40 000`], correct: 1, category: `Histoire` },
    { question: `En 1792, certains Néo-Écossais noirs ont quitté le Canada pour aider à établir quelle ville?`, options: [`Accra, au Ghana`, `Lagos, au Nigeria`, `Freetown, en Sierra Leone`, `Le Cap, en Afrique du Sud`], correct: 2, category: `Histoire` },
    { question: `Le chef Tecumseh a aidé les soldats britanniques et canadiens pendant la guerre de 1812.`, options: [`Vrai`, `Faux`], correct: 0, category: `Histoire` },

    // ── LORD DURHAM ────────────────────────────────────────────────────────
    { question: `Le rapport de lord Durham de 1839 recommandait que le Haut-Canada et le Bas-Canada demeurent séparés en permanence.`, options: [`Vrai`, `Faux`], correct: 1, category: `Histoire` },
    { question: `Qu'a recommandé le rapport de lord Durham (1839)?`, options: [`La pleine indépendance des deux Canadas`, `L'union du Haut-Canada et du Bas-Canada sous un seul gouvernement`, `La séparation permanente du Haut-Canada et du Bas-Canada`, `La création d'une république bilingue`], correct: 1, category: `Histoire` },

    // ── SUFFRAGE DES FEMMES (provincial et Canadiens marquants) ───────────
    { question: `Quel premier ministre a accordé aux femmes le droit de vote aux élections fédérales canadiennes?`, options: [`Sir Wilfrid Laurier`, `Sir John A. Macdonald`, `William Lyon Mackenzie King`, `Sir Robert Borden`], correct: 3, category: `Histoire` },
    { question: `Agnes Macphail est devenue la première femme élue à la Chambre des communes en 1921.`, options: [`Vrai`, `Faux`], correct: 0, category: `Histoire` },
    { question: `Le Québec a été la dernière province à accorder aux femmes le droit de vote provincial. Cela s'est produit en :`, options: [`1918`, `1929`, `1940`, `1949`], correct: 2, category: `Histoire` },
    { question: `Grâce au travail de Thérèse Casgrain et d'autres, quelle province a accordé le droit de vote provincial aux femmes en 1940?`, options: [`Ontario`, `Nouvelle-Écosse`, `Québec`, `Nouveau-Brunswick`], correct: 2, category: `Histoire` },
    { question: `Adrienne Clarkson a été la première gouverneure générale d'origine asiatique.`, options: [`Vrai`, `Faux`], correct: 0, category: `Histoire` },

    // ── FAITS SUR LA SECONDE GUERRE MONDIALE ───────────────────────────────
    { question: `Le Canada a contribué plus que tout autre pays du Commonwealth à l'effort aérien allié pendant la Seconde Guerre mondiale.`, options: [`Vrai`, `Faux`], correct: 0, category: `Histoire` },
    { question: `À la fin de la Seconde Guerre mondiale, le Canada possédait la troisième marine en importance au monde.`, options: [`Vrai`, `Faux`], correct: 0, category: `Histoire` },

    // ── GÉOGRAPHIE PHYSIQUE ────────────────────────────────────────────────
    { question: `Quels sont les trois océans qui bordent le Canada?`, options: [`Pacifique, Atlantique et Indien`, `Pacifique, Atlantique et Arctique`, `Arctique, Atlantique et Austral`, `Pacifique, Arctique et Caraïbes`], correct: 1, category: `Géographie` },
    { question: `Laquelle des réponses suivantes nomme correctement les cinq Grands Lacs?`, options: [`Supérieur, Michigan, Huron, Érié, Ontario`, `Supérieur, Huron, Érié, Ontario, Georgian`, `Michigan, Huron, Érié, Ontario, Winnipeg`, `Supérieur, Michigan, Érié, Ottawa, Ontario`], correct: 0, category: `Géographie` },
    { question: `La région la plus densément peuplée du Canada est :`, options: [`Le corridor des provinces des Prairies`, `La côte du Pacifique, de Vancouver à Victoria`, `Le corridor Québec-Windsor`, `Les provinces de l'Atlantique le long de la baie de Fundy`], correct: 2, category: `Géographie` },
    { question: `Le premier parc national du Canada, créé en 1885, est :`, options: [`Jasper`, `Waterton Lakes`, `Banff`, `Elk Island`], correct: 2, category: `Géographie` },
    { question: `L'Alberta compte cinq parcs nationaux, dont Banff.`, options: [`Vrai`, `Faux`], correct: 0, category: `Géographie` },

    // ── CAPITALES DES PROVINCES (pièges classiques) ────────────────────────
    { question: `Quelle est la capitale de la Colombie-Britannique?`, options: [`Vancouver`, `Kelowna`, `Victoria`, `Surrey`], correct: 2, category: `Géographie` },
    { question: `Quelle est la capitale du Nouveau-Brunswick?`, options: [`Saint John`, `Moncton`, `Bathurst`, `Fredericton`], correct: 3, category: `Géographie` },
    { question: `Quelle est la capitale de l'Alberta?`, options: [`Calgary`, `Red Deer`, `Edmonton`, `Lethbridge`], correct: 2, category: `Géographie` },
    { question: `Quelle est la capitale de l'Île-du-Prince-Édouard?`, options: [`Summerside`, `Charlottetown`, `Cavendish`, `Montague`], correct: 1, category: `Géographie` },
    { question: `Quelle est la capitale de la Nouvelle-Écosse?`, options: [`Sydney`, `Truro`, `Dartmouth`, `Halifax`], correct: 3, category: `Géographie` },

    // ── ÉLECTIONS (Vrai/Faux) ──────────────────────────────────────────────
    { question: `Personne (y compris les membres de votre famille, votre employeur ou un représentant syndical) n'a le droit d'exiger que vous révéliez votre vote.`, options: [`Vrai`, `Faux`], correct: 0, category: `Élections` },
    { question: `Si vous ne recevez pas de carte d'information de l'électeur avant le jour du scrutin, il est trop tard pour être ajouté à la liste électorale.`, options: [`Vrai`, `Faux`], correct: 1, category: `Élections` }
  ],

  provinces: {
    yt: {
      name: `Yukon`, abbr: `YT`, type: 'territory',
      region: 'north', joined: 1898,
      indigenous: [`Premières Nations (diverses Premières Nations du Yukon)`],
      facts: [
        `La ruée vers l'or du Klondike (1896-1898) : a attiré des dizaines de milliers de prospecteurs`,
        `L'un des trois territoires fédéraux (pas une province)`,
        `Partage une frontière avec l'Alaska (É.-U.)`,
        `Whitehorse est la capitale`
      ],
      examTip: `La ruée vers l'or (Klondike, Yukon) est une question fréquente en histoire, survenue dans les années 1890.`,
      tags: [`Territoire`, `Ruée vers l'or 1890s`]
    },
    nwt: {
      name: `Territoires du Nord-Ouest`, abbr: `T.N.-O.`, type: 'territory',
      region: 'north', joined: 1870,
      indigenous: [`Premières Nations (Dénés et autres)`, `Métis`, `Inuits`],
      facts: [
        `Deuxième plus grand territoire : plusieurs peuples autochtones`,
        `Le Nunavut a été détaché des T.N.-O. en 1999`,
        `Aurores boréales visibles ici`,
        `Yellowknife est la capitale`
      ],
      examTip: `Le Nunavut a été séparé des T.N.-O. en 1999. Connaissez cette distinction.`,
      tags: [`Territoire`, `Multi-autochtone`]
    },
    nu: {
      name: `Nunavut`, abbr: `NU`, type: 'territory',
      region: 'north', joined: 1999,
      indigenous: [`Inuits`],
      facts: [
        `Créé en 1999 : le plus récent et le plus grand territoire du Canada`,
        `Territoire d'origine des Inuits (« Inuit » signifie « le peuple »)`,
        `« Nunavut » signifie « Notre Terre » en inuktitut`,
        `Le plus grand de toutes les provinces et de tous les territoires en superficie`,
        `Climat arctique : soleil de minuit en été, aurores boréales en hiver`
      ],
      examTip: `★ TRÈS FRÉQUENT : le Nunavut a été créé en 1999 comme territoire d'origine des Inuits. Présent dans presque tous les examens.`,
      tags: [`Territoire`, `Créé en 1999`, `Territoire d'origine des Inuits`, `Plus grand territoire`]
    },
    bc: {
      name: `Colombie-Britannique`, abbr: `BC`, type: 'province',
      region: 'west', joined: 1871,
      indigenous: [`Premières Nations (nombreuses nations côtières et de l'intérieur)`],
      facts: [
        `S'est jointe en 1871 : on lui avait promis un chemin de fer transcontinental (CFCP)`,
        `Le plus grand producteur de produits forestiers du Canada`,
        `Porte d'entrée vers la région Asie-Pacifique : côte du Pacifique`,
        `Vancouver est la plus grande ville; Victoria est la capitale`
      ],
      examTip: `La C.-B. s'est jointe en 1871 grâce à la promesse du chemin de fer. Foresterie = C.-B.`,
      tags: [`Province`, `Jointe en 1871`, `Foresterie`, `Côte du Pacifique`]
    },
    ab: {
      name: `Alberta`, abbr: `AB`, type: 'province',
      region: 'prairies', joined: 1905,
      indigenous: [`Premières Nations`, `Métis`],
      facts: [
        `Province des Prairies : fait partie du MB, de la SK et de l'AB (le grenier à blé du Canada)`,
        `Grand producteur de sables bitumineux : le cœur énergétique du Canada`,
        `Les Métis vivent principalement dans les provinces des Prairies`,
        `Calgary et Edmonton sont les grandes villes; Edmonton est la capitale`
      ],
      examTip: `Métis = provinces des Prairies (AB, SK, MB). Alberta = sables bitumineux.`,
      tags: [`Province`, `Prairies`, `Jointe en 1905`, `Territoire métis`, `Sables bitumineux`]
    },
    sk: {
      name: `Saskatchewan`, abbr: `SK`, type: 'province',
      region: 'prairies', joined: 1905,
      indigenous: [`Premières Nations`, `Métis`],
      facts: [
        `Le cœur du grenier à blé du Canada : culture du blé et du canola`,
        `Province des Prairies : plaines planes idéales pour l'agriculture`,
        `Les Métis vivent principalement ici, ainsi qu'au MB et en AB`,
        `La résistance du Nord-Ouest de Louis Riel (1885) a eu lieu ici`,
        `Regina est la capitale; Saskatoon est la plus grande ville`
      ],
      examTip: `SK = grenier à blé. La résistance du Nord-Ouest (Louis Riel, 1885) a eu lieu ici.`,
      tags: [`Province`, `Prairies`, `Jointe en 1905`, `Territoire métis`, `Grenier à blé`]
    },
    mb: {
      name: `Manitoba`, abbr: `MB`, type: 'province',
      region: 'prairies', joined: 1870,
      indigenous: [`Premières Nations`, `Métis`],
      facts: [
        `Première province des Prairies : jointe en 1870 après la résistance de la rivière Rouge`,
        `Louis Riel a mené la résistance de la rivière Rouge ici (1869-1870)`,
        `Les Métis vivent principalement dans les provinces des Prairies (MB, SK, AB)`,
        `La grève générale de Winnipeg de 1919 : l'une des plus importantes actions ouvrières du Canada`,
        `Winnipeg est la capitale et la plus grande ville`
      ],
      examTip: `Le MB s'est joint en 1870 après la résistance de la rivière Rouge de Louis Riel, question très fréquente.`,
      tags: [`Province`, `Prairies`, `Jointe en 1870`, `Territoire métis`, `Rivière Rouge 1869`]
    },
    on: {
      name: `Ontario`, abbr: `ON`, type: 'province',
      region: 'central', joined: 1867,
      indigenous: [`Premières Nations (Haudenosaunees, Ojibwés, Cris et autres)`],
      facts: [
        `Province fondatrice : l'une des quatre provinces d'origine à la Confédération (1867)`,
        `La province la plus peuplée du Canada`,
        `Ottawa (la capitale du Canada) se trouve en Ontario`,
        `Toronto est la plus grande ville du Canada`,
        `1793 : le Haut-Canada (Ontario) a été le premier à abolir l'esclavage dans l'Empire britannique`
      ],
      examTip: `ON : fondatrice en 1867, la plus peuplée, contient Ottawa (la capitale).`,
      tags: [`Province`, `Fondatrice en 1867`, `La plus peuplée`, `Ottawa (capitale)`]
    },
    qc: {
      name: `Québec`, abbr: `QC`, type: 'province',
      region: 'central', joined: 1867,
      indigenous: [`Premières Nations (Cris, Mohawks, Innus, autres)`, `Inuits (grand nord)`],
      facts: [
        `Province fondatrice : l'une des quatre provinces d'origine (1867)`,
        `Seule province à majorité francophone`,
        `Plus grande province en superficie au Canada`,
        `Principal producteur de pâtes et papiers du Canada`,
        `Suit le droit civil (et non la common law comme les autres provinces)`,
        `L'Acte de Québec (1774) a préservé la langue française, la religion catholique et le droit civil`
      ],
      examTip: `QC : fondatrice en 1867, seule majorité française, la PLUS GRANDE en superficie, pâtes et papiers, droit civil.`,
      tags: [`Province`, `Fondatrice en 1867`, `Majorité française`, `Plus grande superficie`, `Droit civil`, `Pâtes et papiers`]
    },
    nl: {
      name: `Terre-Neuve-et-Labrador`, abbr: `NL`, type: 'province',
      region: 'atlantic', joined: 1949,
      indigenous: [`Innus`, `Inuits`, `Mi'kmaq`],
      facts: [
        `Dernière province à se joindre à la Confédération : 1949`,
        `Deux parties : le Labrador (continental) et l'île de Terre-Neuve`,
        `Jean Cabot a débarqué près d'ici en 1497 : premier Européen à cartographier la côte Est du Canada`,
        `Région de pêche atlantique; historiquement reconnue pour la pêche à la morue`,
        `St. John's (sur l'île) est la capitale provinciale`
      ],
      examTip: `★ TRÈS FRÉQUENT : T.-N.-L. a été la DERNIÈRE province à se joindre, en 1949.`,
      tags: [`Province`, `Jointe en DERNIER : 1949`, `Atlantique`, `Province en deux parties`]
    },
    nb: {
      name: `Nouveau-Brunswick`, abbr: `NB`, type: 'province',
      region: 'atlantic', joined: 1867,
      indigenous: [`Mi'kmaq`, `Wolastoqiyik (Malécites)`],
      facts: [
        `Province fondatrice : l'une des quatre provinces d'origine (1867)`,
        `Seule province officiellement bilingue au Canada (anglais et français)`,
        `Fait partie du Canada atlantique : économie de pêche et de foresterie`,
        `La baie de Fundy (partagée avec la N.-É.) a les marées les plus hautes au monde`
      ],
      examTip: `★ TRÈS FRÉQUENT : le N.-B. est la SEULE province officiellement bilingue.`,
      tags: [`Province`, `Fondatrice en 1867`, `SEULE province bilingue`, `Atlantique`]
    },
    ns: {
      name: `Nouvelle-Écosse`, abbr: `NS`, type: 'province',
      region: 'atlantic', joined: 1867,
      indigenous: [`Mi'kmaq`],
      facts: [
        `Province fondatrice : l'une des quatre provinces d'origine (1867)`,
        `Le gouvernement responsable au Canada a débuté ici en premier (1848)`,
        `Province péninsulaire à la longue histoire maritime et de pêche`,
        `Halifax est la capitale provinciale et un port important`,
        `La baie de Fundy (partagée avec le N.-B.) a les marées les plus hautes au monde`
      ],
      examTip: `N.-É. : province fondatrice en 1867. Le gouvernement responsable a débuté ici en premier (1848).`,
      tags: [`Province`, `Fondatrice en 1867`, `Atlantique`, `Gouvernement responsable : 1848`]
    },
    pei: {
      name: `Île-du-Prince-Édouard`, abbr: `PEI`, type: 'province',
      region: 'atlantic', joined: 1873,
      indigenous: [`Mi'kmaq`],
      facts: [
        `Plus petite province en superficie au Canada`,
        `S'est jointe à la Confédération en 1873`,
        `Île dans le golfe du Saint-Laurent`,
        `Charlottetown a accueilli les conférences de la Confédération de 1864`,
        `Reconnue pour sa terre rouge, ses pommes de terre et son homard`
      ],
      examTip: `Î.-P.-É. : la PLUS PETITE province. Charlottetown = berceau de la Confédération (pourparlers de 1864).`,
      tags: [`Province`, `La PLUS PETITE province`, `Jointe en 1873`, `Atlantique`, `Île`]
    }
  }
};

window.CANADA_FACTS_FR = [
  `Le Canada est le deuxième plus grand pays du monde en superficie totale, avec 9,98 millions de km².`,
  `Le Canada compte plus de lacs que le reste du monde réuni. 🏞️`,
  `Le mot « Canada » vient de « kanata », un mot huron-iroquois signifiant village ou établissement.`,
  `Le basketball a été inventé en 1891 par le Canadien James Naismith, originaire d'Almonte, en Ontario. 🏀`,
  `Le Canada a le plus long littoral au monde : plus de 202 000 km.`,
  `La Charte canadienne des droits et libertés (1982) protège vos droits en tant que citoyen.`,
  `Le Canada est officiellement devenu un pays le 1er juillet 1867, célébré chaque année comme la fête du Canada. 🎉`,
  `Le Canada a deux langues officielles : l'anglais et le français.`,
  `La feuille d'érable du drapeau canadien compte 11 pointes.`,
  `Les trois groupes de peuples autochtones du Canada sont les Premières Nations, les Métis et les Inuits.`,
  `Le castor est l'animal national du Canada et figure sur la pièce de cinq cents. 🦫`,
  `Le hockey est le sport national d'hiver du Canada. La crosse est le sport national d'été. 🏒`,
  `Les aurores boréales sont visibles dans une grande partie du Canada, surtout au Yukon et dans les T.N.-O. ✨`,
  `Le Canada partage avec les États-Unis la plus longue frontière non défendue au monde : 8 891 km.`,
  `Le Canada a été le premier pays à adopter une politique officielle de multiculturalisme, en 1971.`,
  `En tant que nouveau citoyen, vous pouvez demander un passeport canadien, l'un des plus puissants au monde. 🛂`,
  `Le Canada s'étend sur six fuseaux horaires, de Terre-Neuve au Pacifique.`,
  `La poutine (frites, fromage en grains et sauce) est née dans le Québec rural dans les années 1950. 🍟`,
  `La pièce de 1 $ est appelée « huard » : elle représente un plongeon huard. La pièce de 2 $ est le « deux dollars » (toonie).`,
  `Les soins de santé publics universels signifient que la plupart des visites chez le médecin sont gratuites une fois que vous avez votre carte d'assurance-maladie provinciale.`,
  `Les nouveaux citoyens peuvent obtenir l'application gratuite Canoo, qui donne accès à Parcs Canada et à des centaines de lieux culturels.`,
  `La GRC (Gendarmerie royale du Canada) a été fondée en 1873 et est le service de police national du Canada. 🐴`,
  `Le Canada a aboli la peine de mort en 1976.`,
  `Le Parlement comprend trois éléments : le souverain, le Sénat (105 sièges) et la Chambre des communes (338 sièges).`,
  `Les Canadiens votent pour leur député, pas directement pour le premier ministre.`,
  `La gouverneure générale représente le roi au Canada et exerce des fonctions constitutionnelles clés.`,
  `Banff a été le premier parc national du Canada, créé en 1885 en Alberta. 🏔️`,
  `Le Canada compte 48 sites du patrimoine mondial de l'UNESCO.`,
  `Environ 3 160 tonnes d'eau s'écoulent chaque seconde aux chutes du Niagara.`,
  `Montréal est la deuxième ville francophone en importance au monde, après Paris. 🥐`,
  `La route Transcanadienne s'étend sur 7 821 km, de Victoria (C.-B.) à St. John's (T.-N.-L.).`,
  `Le Canada a contribué à toutes les grandes missions de maintien de la paix de l'ONU depuis 1956. 🕊️`,
  `Les peuples autochtones vivent au Canada depuis plus de 15 000 ans avant le contact européen.`,
  `Votre NAS (numéro d'assurance sociale) est requis pour travailler et accéder aux services du gouvernement fédéral.`,
  `IRCC offre une formation linguistique gratuite en anglais et en français grâce aux programmes LINC et CLIC.`,
  `La Loi canadienne sur les droits de la personne protège contre la discrimination fondée sur la race, le sexe, la religion et plus encore.`,
  `Tim Hortons a été cofondé en 1964 par un défenseur des Maple Leafs de Toronto. ☕`,
  `Le Canada compte 338 circonscriptions électorales fédérales, chacune est appelée une « circonscription ».`,
  `Le Canada est bordé par trois océans : l'Atlantique, le Pacifique et l'Arctique.`,
  `Le Bouclier canadien est l'une des plus anciennes formations géologiques au monde, avec plus de 4 milliards d'années.`,
  `Le Vieux-Québec est la seule ville fortifiée au nord du Mexique, un site du patrimoine mondial de l'UNESCO.`,
  `En tant que citoyen, vous pouvez voter, vous porter candidat à une charge publique, et entrer au Canada ou en sortir librement.`,
  `La Charte protège la liberté d'expression, de religion, de réunion pacifique et d'association.`,
  `La Tour CN à Toronto a été la plus haute structure autoportante au monde de 1976 à 2007.`,
  `« Ô Canada » a été écrit en 1880, mais n'a été officiellement adopté comme hymne national qu'en 1980.`,
  `La Saskatchewan produit environ 60 % du blé du Canada, on l'appelle le « grenier à blé du Canada ». 🌾`,
  `Une fois citoyen, vous pouvez parrainer des membres admissibles de votre famille pour la résidence permanente.`,
  `Le jour du Souvenir (11 novembre) : les Canadiens observent deux minutes de silence à 11 h. 🌹`,
  `Le chemin de fer clandestin a aidé des Américains en quête de liberté à atteindre le Canada au XIXe siècle.`,
  `La bataille de la crête de Vimy (1917) est considérée comme un moment déterminant de l'identité nationale du Canada. 🎖️`,
  `Des bibliothèques publiques gratuites existent dans toutes les grandes villes canadiennes, et votre carte donne souvent accès à des ressources numériques aussi.`,
  `Le Canada compte plus de 1 000 aires protégées, incluant des parcs provinciaux, territoriaux et nationaux.`,
  `Le Québec produit plus de 70 % de l'approvisionnement mondial en sirop d'érable. 🍁`,
  `Le multiculturalisme canadien signifie que vous pouvez célébrer votre héritage tout en étant pleinement Canadien.`,
  `Le dollar canadien a été plus fort que le dollar américain à plusieurs moments de l'histoire.`,
  `Le Canada a été l'un des premiers pays à légaliser le mariage entre personnes de même sexe à l'échelle nationale, en 2005. 🏳️‍🌈`,
  `La première émission de radio commerciale au monde a été diffusée à Montréal en 1920.`,
  `Canada's Wonderland, en Ontario, est l'un des parcs à thème les plus visités en Amérique du Nord.`,
  `Voter aux élections fédérales est gratuit et prend environ 5 minutes, trouvez votre bureau de vote sur elections.ca.`,
  `Terre-Neuve a son propre fuseau horaire, il est 30 minutes en avance sur l'heure normale de l'Atlantique. ⏰`,
];

window.TIMELINE_PAIRS_FR = [
  { year: `1497`, event: `Jean Cabot atteint la côte Est du Canada` },
  { year: `1534`, event: `Jacques Cartier remonte le fleuve Saint-Laurent` },
  { year: `1608`, event: `Samuel de Champlain fonde la ville de Québec`, exam: true },
  { year: `1759`, event: `Bataille des plaines d'Abraham : les Britanniques vainquent les Français`, exam: true },
  { year: `1812`, event: `Guerre de 1812 : le Canada repousse l'invasion américaine`, exam: true },
  { year: `1867`, event: `Confédération : le Canada devient un pays`, exam: true },
  { year: `1869`, event: `Résistance de la rivière Rouge : Louis Riel défend les droits des Métis` },
  { year: `1873`, event: `Fondation de la GRC; l'Île-du-Prince-Édouard se joint au Canada`, exam: true },
  { year: `1885`, event: `Achèvement du Chemin de fer Canadien Pacifique; résistance du Nord-Ouest` },
  { year: `1896`, event: `Wilfrid Laurier : premier premier ministre canadien-français`, exam: true },
  { year: `1905`, event: `L'Alberta et la Saskatchewan se joignent à la Confédération` },
  { year: `1914`, event: `Le Canada entre dans la Première Guerre mondiale`, exam: true },
  { year: `1917`, event: `Bataille de la crête de Vimy : moment déterminant pour le Canada`, exam: true },
  { year: `1918`, event: `Les femmes obtiennent le droit de vote aux élections fédérales`, exam: true },
  { year: `1929`, event: `Les Célèbres cinq : les femmes déclarées « personnes » par la loi`, exam: true },
  { year: `1931`, event: `Statut de Westminster : le Canada devient pleinement autonome`, exam: true },
  { year: `1939`, event: `Le Canada entre dans la Seconde Guerre mondiale`, exam: true },
  { year: `1944`, event: `Jour J : les forces canadiennes débarquent à la plage Juno`, exam: true },
  { year: `1947`, event: `Loi sur la citoyenneté canadienne : le mot « citoyen » utilisé pour la première fois`, exam: true },
  { year: `1949`, event: `Terre-Neuve-et-Labrador se joint au Canada`, exam: true },
  { year: `1960`, event: `Les peuples autochtones obtiennent le droit de vote`, exam: true },
  { year: `1965`, event: `Le drapeau à la feuille d'érable est adopté`, exam: true },
  { year: `1969`, event: `Loi sur les langues officielles : l'anglais et le français deviennent égaux`, exam: true },
  { year: `1971`, event: `Le Canada adopte la première politique de multiculturalisme au monde`, exam: true },
  { year: `1982`, event: `La Charte des droits et libertés entre en vigueur`, exam: true },
  { year: `1999`, event: `Le Nunavut devient le plus récent territoire du Canada`, exam: true },
];
