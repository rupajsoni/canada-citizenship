/* Découvrir le Canada — contenu du cours en français.
   Mirrors the shape of content.js exactly. window.COURSE_FR.modules only needs to
   list modules that ARE translated — app.js falls back to the English module (by id)
   for any module not present here, so the app never renders a half-translated lesson.
   Terminology is sourced from the official "Découvrir le Canada" guide (canada.ca) —
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
      examTip: 'Les examinateurs demandent souvent quelle catégorie de droit s\'applique — par exemple, la liberté de circulation et d\'établissement, les garanties juridiques ou les droits démocratiques.',
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
            'En 2021, le serment a été modifié pour inclure explicitement une référence aux peuples autochtones et à leurs droits — la première modification en plus de 60 ans.'
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
        { front: 'Quand le serment de citoyenneté a-t-il été modifié pour inclure les peuples autochtones?', back: '2021 — le serment a été modifié pour reconnaître explicitement les droits ancestraux et issus de traités des Premières Nations, des Métis et des Inuits.' }
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
          question: 'Que le serment de citoyenneté exige-t-il des nouveaux Canadiens de promettre?',
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
            '1982 — la Charte des droits a été ajoutée',
            '1965 — la feuille d\'érable a été ajoutée comme symbole',
            '2021 — la reconnaissance explicite des peuples autochtones et des droits issus de traités a été ajoutée',
            '1999 — une référence au Nunavut à titre de nouveau territoire a été ajoutée'
          ],
          correct: 2
        }
      ]
    }
  ]
};
