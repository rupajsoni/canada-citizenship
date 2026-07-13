/* Canada Citizenship Prep — application logic */
(function () {
  'use strict';

  const t = window.I18N.t;
  const CONFIG = {};

  const LANG = window.I18N.lang();
  const CANADA_FACTS_EN = [
    "Canada is the second-largest country in the world by total area — 9.98 million km².",
    "Canada has more lakes than the rest of the world combined. 🏞️",
    "The word 'Canada' comes from 'kanata,' a Huron-Iroquois word meaning village or settlement.",
    "Basketball was invented in 1891 by Canadian James Naismith, from Almonte, Ontario. 🏀",
    "Canada has the world's longest coastline: over 202,000 km.",
    "The Canadian Charter of Rights and Freedoms (1982) protects your rights as a citizen.",
    "Canada officially became a country on July 1, 1867 — celebrated as Canada Day every year. 🎉",
    "Canada has two official languages: English and French.",
    "The maple leaf on the Canadian flag has 11 points.",
    "Canada's three groups of Indigenous peoples are First Nations, Métis, and Inuit.",
    "The beaver is Canada's national animal and appears on the five-cent coin. 🦫",
    "Hockey is Canada's national winter sport. Lacrosse is the national summer sport. 🏒",
    "The Northern Lights (Aurora Borealis) are visible across much of Canada — especially Yukon and NWT. ✨",
    "Canada shares the world's longest undefended border with the United States: 8,891 km.",
    "Canada was the first country to adopt an official multiculturalism policy, in 1971.",
    "As a new citizen, you can apply for a Canadian passport — one of the world's most powerful. 🛂",
    "Canada spans six time zones — from Newfoundland to Pacific.",
    "Poutine — fries, cheese curds, and gravy — originated in rural Quebec in the 1950s. 🍟",
    "The $1 coin is called the 'loonie' — it features a common loon. The $2 is the 'toonie.'",
    "Universal public health care means most doctor visits are free once you have your provincial health card.",
    "New citizens can get the free Canoo app — it unlocks Parks Canada and hundreds of cultural venues.",
    "The RCMP (Royal Canadian Mounted Police) was founded in 1873 and is Canada's national police force. 🐴",
    "Canada abolished the death penalty in 1976.",
    "Parliament has three parts: the Monarch, the Senate (105 seats), and the House of Commons (338 seats).",
    "Canadians vote for their Member of Parliament — not directly for the Prime Minister.",
    "The Governor General represents the King in Canada and performs key constitutional duties.",
    "Banff was Canada's first national park, established in 1885 in Alberta. 🏔️",
    "Canada has 48 UNESCO World Heritage Sites.",
    "About 3,160 tonnes of water flow over Niagara Falls every second.",
    "Montreal is the second-largest French-speaking city in the world, after Paris. 🥐",
    "The Trans-Canada Highway stretches 7,821 km — Victoria, BC to St. John's, NL.",
    "Canada has contributed to every major UN peacekeeping mission since 1956. 🕊️",
    "Indigenous peoples have lived in Canada for over 15,000 years before European contact.",
    "Your SIN (Social Insurance Number) is required to work and access federal government services.",
    "IRCC offers free English and French language training through LINC and CLIC programs.",
    "The Canadian Human Rights Act protects against discrimination based on race, gender, religion, and more.",
    "Tim Hortons was co-founded in 1964 by a Toronto Maple Leafs defenceman. ☕",
    "Canada has 338 federal electoral districts — each one is called a 'riding.'",
    "Canada borders three oceans: Atlantic, Pacific, and Arctic.",
    "The Canadian Shield is one of the world's oldest geological formations — over 4 billion years old.",
    "Old Quebec City is the only fortified city north of Mexico — a UNESCO World Heritage Site.",
    "As a citizen, you can vote, run for public office, and enter and leave Canada freely.",
    "The Charter protects freedom of expression, religion, peaceful assembly, and association.",
    "The CN Tower in Toronto was the world's tallest free-standing structure from 1976 to 2007.",
    "'O Canada' was written in 1880 but only officially adopted as the national anthem in 1980.",
    "Saskatchewan produces about 60% of Canada's wheat — known as the 'breadbasket of Canada.' 🌾",
    "You can sponsor eligible family members for permanent residency once you're a citizen.",
    "Remembrance Day (November 11) — Canadians observe two minutes of silence at 11 AM. 🌹",
    "The Underground Railroad helped freedom-seeking Americans reach Canada in the 1800s.",
    "The Battle of Vimy Ridge (1917) is considered a defining moment in Canada's national identity. 🎖️",
    "Free public libraries exist in every major Canadian city — your card often unlocks digital resources too.",
    "Canada has over 1,000 protected areas including provincial, territorial, and national parks.",
    "Quebec produces over 70% of the world's maple syrup supply. 🍁",
    "Canada's multiculturalism means you can celebrate your heritage while being fully Canadian.",
    "The Canadian dollar has been stronger than the US dollar at various points in history.",
    "Canada was one of the first countries to legalize same-sex marriage nationwide, in 2005. 🏳️‍🌈",
    "The world's first commercial radio broadcast was made in Montreal in 1920.",
    "Canada's Wonderland in Ontario is one of the most visited theme parks in North America.",
    "Voting in federal elections is free and takes about 5 minutes — find your polling station at elections.ca.",
    "Newfoundland has its own time zone — it's 30 minutes ahead of Atlantic Standard Time. ⏰",
  ];
  const CANADA_FACTS = (LANG === 'fr' && window.CANADA_FACTS_FR) ? window.CANADA_FACTS_FR : CANADA_FACTS_EN;
  // exam:true = confirmed high-frequency in IRCC citizenship test
  const TIMELINE_PAIRS_EN = [
    { year: '1497', event: 'John Cabot reaches the east coast of Canada' },
    { year: '1534', event: 'Jacques Cartier sails up the St. Lawrence River' },
    { year: '1608', event: 'Samuel de Champlain founds Quebec City', exam: true },
    { year: '1759', event: 'Battle of the Plains of Abraham — British defeat French', exam: true },
    { year: '1812', event: 'War of 1812 — Canada repels American invasion', exam: true },
    { year: '1867', event: 'Confederation — Canada becomes a country', exam: true },
    { year: '1869', event: 'Red River Resistance — Louis Riel defends Métis rights' },
    { year: '1873', event: 'RCMP founded; Prince Edward Island joins Canada', exam: true },
    { year: '1885', event: 'Canadian Pacific Railway completed; Northwest Resistance' },
    { year: '1896', event: 'Wilfrid Laurier — first French-Canadian Prime Minister', exam: true },
    { year: '1905', event: 'Alberta and Saskatchewan join Confederation' },
    { year: '1914', event: 'Canada enters the First World War', exam: true },
    { year: '1917', event: 'Battle of Vimy Ridge — defining moment for Canada', exam: true },
    { year: '1918', event: 'Women gain the right to vote in federal elections', exam: true },
    { year: '1929', event: 'The Famous Five — women declared "persons" under law', exam: true },
    { year: '1931', event: 'Statute of Westminster — Canada fully self-governing', exam: true },
    { year: '1939', event: 'Canada enters the Second World War', exam: true },
    { year: '1944', event: 'D-Day — Canadian forces land at Juno Beach', exam: true },
    { year: '1947', event: 'Canadian Citizenship Act — the word "citizen" first used', exam: true },
    { year: '1949', event: 'Newfoundland and Labrador joins Canada', exam: true },
    { year: '1960', event: 'Indigenous peoples gain the right to vote', exam: true },
    { year: '1965', event: 'The Maple Leaf flag is adopted', exam: true },
    { year: '1969', event: 'Official Languages Act — English and French made equal', exam: true },
    { year: '1971', event: 'Canada adopts the world\'s first multiculturalism policy', exam: true },
    { year: '1982', event: 'Charter of Rights and Freedoms is enacted', exam: true },
    { year: '1999', event: 'Nunavut becomes Canada\'s newest territory', exam: true },
  ];
  const TIMELINE_PAIRS = (LANG === 'fr' && window.TIMELINE_PAIRS_FR) ? window.TIMELINE_PAIRS_FR : TIMELINE_PAIRS_EN;

  const STORAGE_KEY = 'ca-citizenship-v6';
  const COURSE_ACTIVE = (LANG === 'fr' && window.COURSE_FR) ? window.COURSE_FR : window.COURSE;
  // French modules not yet translated fall back to the English version so the app
  // never renders a broken/half-empty lesson. COURSE_FR only needs to list the
  // modules that ARE translated; missing ids are filled in from window.COURSE.
  const MODULES = (function () {
    if (LANG !== 'fr' || !window.COURSE_FR) return window.COURSE.modules;
    const frById = {};
    (window.COURSE_FR.modules || []).forEach(m => { frById[m.id] = m; });
    return window.COURSE.modules.map(m => frById[m.id] || m);
  })();
  const EXAM = COURSE_ACTIVE.exam || window.COURSE.exam;
  const Q_BANK = (LANG === 'fr' && window.COURSE_FR && window.COURSE_FR.questionBank) ? window.COURSE_FR.questionBank : window.COURSE.questionBank;

  let state = loadState();
  let view = state.view || 'home';
  let activeModuleId = state.activeModuleId || MODULES[0].id;

  // Deep-link: ?module=hist3 or #hist3 opens that module directly (used by Exam Day new-tab)
  const _hashId = (new URLSearchParams(location.search).get('module')) || location.hash.slice(1);
  if (_hashId && MODULES.find(m => m.id === _hashId)) {
    view = 'module';
    activeModuleId = _hashId;
  }
  let moduleTab = state.moduleTab || 'learn';
  let flashIndex = 0;
  let flashFlipped = false;

  let testQuestions = [];
  let tlState = null;
  let tlTab = 'ref';
  let testAnswers = {};
  let testTimer = null;
  let testSecondsLeft = EXAM.minutes * 60;
  let testFinished = false;

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }

  function saveState() {
    state.view = view;
    state.activeModuleId = activeModuleId;
    state.moduleTab = moduleTab;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function isComplete(id) { return !!(state.completed || {})[id]; }
  function setComplete(id, val) {
    if (!state.completed) state.completed = {};
    state.completed[id] = val;
    saveState();
  }

  function quizScore(id) { return (state.quizScores || {})[id] ?? null; }
  function setQuizScore(id, score, total) {
    if (!state.quizScores) state.quizScores = {};
    state.quizScores[id] = { score, total, at: Date.now() };
    saveState();
  }

  function testHistory() { return state.tests || []; }
  function addTestResult(result) {
    if (!state.tests) state.tests = [];
    state.tests.unshift(result);
    state.tests = state.tests.slice(0, 12);
    saveState();
  }

  function completedCount() { return MODULES.filter(m => isComplete(m.id)).length; }

  function readinessScore() {
    const tests = testHistory();
    if (!tests.length) return null;
    const recent = tests.slice(0, 3);
    const avg = recent.reduce((s, r) => s + r.score / r.total, 0) / recent.length;
    return Math.round(avg * 100);
  }

  function nextIncompleteModule() {
    return MODULES.find(m => !isComplete(m.id)) || MODULES[0];
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${String(s).padStart(2, '0')}s`;
  }

  function navigate(v, modId) {
    if (modId) activeModuleId = modId;
    view = v;
    if (v === 'module') { moduleTab = 'learn'; flashIndex = 0; flashFlipped = false; }
    saveState();
    render();
    document.querySelector('.main-scroll').scrollTop = 0;
    closeSidebar();
  }

  window.navigate = navigate;

  function renderSidebar() {
    const done = completedCount();
    document.getElementById('progress-text').textContent = `${done} / ${MODULES.length}`;
    document.getElementById('progress-fill').style.width = `${Math.round(done / MODULES.length * 100)}%`;

    let html = `<div class="nav-section">${t('nav.sectionOverview')}</div>`;
    html += navItem('home', '⌂', t('nav.dashboard'), t('nav.dashboardSub'), view === 'home');

    html += `<div class="nav-section">${t('nav.sectionLessons')}</div>`;
    MODULES.forEach((m, i) => {
      const active = view === 'module' && activeModuleId === m.id;
      const complete = isComplete(m.id);
      html += `<div class="nav-item${active ? ' active' : ''}${complete ? ' complete' : ''}" onclick="navigate('module','${m.id}')">
        <div class="nav-num">${complete ? '✓' : i + 1}</div>
        <div class="nav-label"><span>${escapeHtml(m.shortTitle)}</span><small>${escapeHtml(m.navSubtitle)}</small></div>
      </div>`;
    });

    html += `<div class="nav-section">${t('nav.sectionVisual')}</div>`;
    html += navItem('map', '🗺', t('nav.map'), t('nav.mapSub'), view === 'map');
    html += navItem('timeline', '📅', t('nav.timeline'), t('nav.timelineSub'), view === 'timeline');

    html += `<div class="nav-section">${t('nav.sectionPractice')}</div>`;
    html += navItem('test', '⏱', t('nav.test'), t('nav.testSub'), view === 'test');
    const count = testHistory().length;
    html += navItem('results', '◷', t('nav.results'), t('nav.resultsSub'), view === 'results', count || '');
    html += navItem('examday', '🎯', t('nav.examday'), t('nav.examdaySub'), view === 'examday');

    html += `<div class="nav-section">${t('nav.sectionAbout')}</div>`;
    html += navItem('about', 'ℹ', t('nav.about'), t('nav.aboutSub'), view === 'about');

    document.getElementById('sidebar-nav').innerHTML = html;
  }

  function navItem(id, icon, label, sub, active, badge) {
    return `<div class="nav-item${active ? ' active' : ''}" onclick="navigate('${id}')">
      <div class="nav-num">${icon}</div>
      <div class="nav-label"><span>${label}</span><small>${sub}</small></div>
      ${badge ? `<span class="nav-badge">${badge}</span>` : ''}
    </div>`;
  }

  function renderHome() {
    const ready = readinessScore();
    const next = nextIncompleteModule();
    const tests = testHistory();
    let ringClass = 'none', ringText = '—', title = t('home.readyDefaultTitle'), sub = t('home.readyDefaultSub');

    if (ready !== null) {
      ringText = ready + '%';
      ringClass = ready >= 75 ? 'high' : ready >= 60 ? 'mid' : 'low';
      title = ready >= 75 ? t('home.readyHighTitle') : ready >= 60 ? t('home.readyMidTitle') : t('home.readyLowTitle');
      sub = t('home.readySub', { n: Math.min(tests.length, 3), s: tests.length !== 1 ? 's' : '', pct: EXAM.passPercent, score: EXAM.passScore, total: EXAM.questions });
    }

    const pathItems = MODULES.map((m, i) => {
      const done = isComplete(m.id);
      const qs = quizScore(m.id);
      const meta = done ? t('home.moduleCompleted') : qs ? t('home.moduleQuizScore', { score: qs.score, total: qs.total }) : m.duration;
      return `<div class="card path-item${done ? ' done' : ''}" onclick="navigate('module','${m.id}')">
        <div class="path-num">${done ? '✓' : i + 1}</div>
        <div><div class="path-title">${escapeHtml(m.title)}</div><div class="path-meta">${meta}</div></div>
      </div>`;
    }).join('');

    document.getElementById('page').innerHTML = `
      <div class="hero-block">
        <div class="eyebrow">${t('home.eyebrow')}</div>
        <h1 class="page-title">${t('home.title')}</h1>
        <p class="page-lead">${t('home.lead')}</p>
      </div>

      <div class="grid-4" style="margin-bottom:24px">
        ${stat(EXAM.questions, t('home.statQuestions'))}
        ${stat(EXAM.minutes, t('home.statMinutes'))}
        ${stat(EXAM.passPercent + '%', t('home.statPass'))}
        ${stat(EXAM.attempts, t('home.statAttempts'))}
      </div>

      <div class="card card-pad readiness-panel">
        <div class="readiness-ring ${ringClass}">${ringText}</div>
        <div>
          <div class="readiness-title">${title}</div>
          <div class="readiness-sub">${sub}</div>
          <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigate('module','${next.id}')">${isComplete(next.id) ? t('home.reviewLessons') : t('home.continueLesson', { title: escapeHtml(next.shortTitle) })}</button>
            <button class="btn btn-secondary" onclick="navigate('test')">${t('home.startExam')}</button>
          </div>
        </div>
      </div>

      <div class="learning-path">
        <div class="section-heading">${t('home.learningPath', { done: completedCount(), total: MODULES.length })}</div>
        <div class="path-grid">${pathItems}</div>
      </div>

      <div class="callout callout-tip" style="margin-top:28px">
        <strong>${t('home.howToStudy')}</strong>
        ${t('home.howToStudyBody')}
      </div>

      <div class="card card-pad tl-home-card" onclick="navigate('timeline')" style="margin-top:16px;cursor:pointer">
        <div class="tl-home-icon">📅</div>
        <div>
          <div class="tl-home-title">${t('home.timelineCardTitle')}</div>
          <div class="tl-home-sub">${t('home.timelineCardSub')}</div>
        </div>
        <div class="tl-home-arrow">→</div>
      </div>

      <div class="card card-pad tl-home-card examday-home-card" onclick="navigate('examday')" style="margin-top:12px;cursor:pointer">
        <div class="tl-home-icon">🎯</div>
        <div>
          <div class="tl-home-title">${t('home.examdayCardTitle')}</div>
          <div class="tl-home-sub">${t('home.examdayCardSub')}</div>
        </div>
        <div class="tl-home-arrow">→</div>
      </div>`;
  }

  function stat(val, label) {
    return `<div class="card stat-card"><div class="stat-value">${val}</div><div class="stat-label">${label}</div></div>`;
  }

  function setModuleTab(tab) {
    moduleTab = tab;
    flashIndex = 0;
    flashFlipped = false;
    saveState();
    renderModule();
  }
  window.setModuleTab = setModuleTab;

  function renderModule() {
    const mod = MODULES.find(m => m.id === activeModuleId);
    if (!mod) return;
    const idx = MODULES.indexOf(mod);
    const done = isComplete(mod.id);
    const qs = quizScore(mod.id);
    const prev = MODULES[idx - 1];
    const next = MODULES[idx + 1];

    const objectives = mod.objectives.map(o => `<li>${escapeHtml(o)}</li>`).join('');
    const sections = window.LessonRender.all(mod.sections, escapeHtml);

    const learnPanel = `
      <div class="objectives"><div class="objectives-title">${t('module.objectives')}</div><ul>${objectives}</ul></div>
      <div class="callout callout-exam"><strong>${t('module.examFocus')}</strong>${escapeHtml(mod.examTip)}</div>
      ${sections}`;

    const cardsPanel = renderFlashcards(mod);
    const quizPanel = renderModuleQuiz(mod);

    let panel = learnPanel;
    if (moduleTab === 'cards') panel = cardsPanel;
    if (moduleTab === 'quiz') panel = quizPanel;

    document.getElementById('page').innerHTML = `
      <div class="module-header">
        <div class="eyebrow">${t('module.lessonOf', { i: idx + 1, n: MODULES.length })}</div>
        <h1 class="page-title">${escapeHtml(mod.title)}</h1>
        <div class="module-meta">
          <span class="chip">${escapeHtml(mod.duration)}</span>
          <span class="chip">${t('module.flashcardsCount', { n: mod.flashcards.length })}</span>
          <span class="chip">${t('module.quizCount', { n: mod.quiz.length })}</span>
          ${done ? `<span class="chip chip-success">${t('module.completed')}</span>` : ''}
          ${qs ? `<span class="chip chip-accent">${t('module.quizBest', { score: qs.score, total: qs.total })}</span>` : ''}
        </div>
      </div>

      <div class="tab-bar">
        <button class="tab-btn${moduleTab === 'learn' ? ' active' : ''}" onclick="setModuleTab('learn')">${t('module.tabLearn')}</button>
        <button class="tab-btn${moduleTab === 'cards' ? ' active' : ''}" onclick="setModuleTab('cards')">${t('module.tabCards')}</button>
        <button class="tab-btn${moduleTab === 'quiz' ? ' active' : ''}" onclick="setModuleTab('quiz')">${t('module.tabQuiz')}</button>
      </div>

      ${panel}

      <div class="module-footer">
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${prev ? `<button class="btn btn-secondary btn-sm" onclick="navigate('module','${prev.id}')">${t('module.previous')}</button>` : ''}
          ${next ? `<button class="btn btn-secondary btn-sm" onclick="navigate('module','${next.id}')">${t('module.next')}</button>` : ''}
        </div>
        <button class="btn ${done ? 'btn-success' : 'btn-primary'}" onclick="toggleComplete('${mod.id}')">${done ? t('module.markedComplete') : t('module.markComplete')}</button>
      </div>`;
  }

  function renderFlashcards(mod) {
    const card = mod.flashcards[flashIndex];
    if (!card) return '<p>No flashcards.</p>';
    return `
      <p style="font-size:14px;color:var(--text-secondary);margin-bottom:8px">${t('flashcards.instructions')}</p>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:16px">${t('flashcards.keyHint')}</p>
      <div class="flashcard-stage">
        <div class="flashcard${flashFlipped ? ' flipped' : ''}" onclick="flipCard()" role="button" tabindex="0" aria-label="${t('flashcards.ariaLabel')}">
          <div class="flashcard-face flashcard-front">
            <div class="fc-label">${t('flashcards.question')}</div>
            <div class="fc-text">${escapeHtml(card.front)}</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="fc-label">${t('flashcards.answer')}</div>
            <div class="fc-text">${escapeHtml(card.back)}</div>
          </div>
        </div>
      </div>
      <div class="fc-controls">
        <button class="btn btn-secondary btn-sm" onclick="prevCard()" ${flashIndex === 0 ? 'disabled' : ''}>${t('flashcards.previous')}</button>
        <span class="fc-progress">${t('flashcards.progress', { i: flashIndex + 1, n: mod.flashcards.length })}</span>
        <button class="btn btn-secondary btn-sm" onclick="nextCard()" ${flashIndex >= mod.flashcards.length - 1 ? 'disabled' : ''}>${t('flashcards.next')}</button>
      </div>`;
  }

  window.flipCard = function () { flashFlipped = !flashFlipped; renderModule(); };
  window.prevCard = function () { if (flashIndex > 0) { flashIndex--; flashFlipped = false; renderModule(); } };
  window.nextCard = function () {
    const mod = MODULES.find(m => m.id === activeModuleId);
    if (flashIndex < mod.flashcards.length - 1) { flashIndex++; flashFlipped = false; renderModule(); }
  };

  function renderModuleQuiz(mod) {
    if (!state.quizAnswers) state.quizAnswers = {};
    const key = mod.id;
    const answers = state.quizAnswers[key] || {};

    const items = mod.quiz.map((q, i) => {
      const chosen = answers[i];
      const answered = chosen !== undefined;
      const opts = q.options.map((opt, oi) => {
        let cls = 'quiz-opt';
        if (answered) {
          if (oi === q.correct) cls += ' correct';
          else if (oi === chosen) cls += ' wrong';
        }
        return `<button class="${cls}" onclick="answerQuiz('${mod.id}',${i},${oi})" ${answered ? 'disabled' : ''}>${escapeHtml(opt)}</button>`;
      }).join('');
      let feedback = '';
      if (answered) {
        feedback = chosen === q.correct
          ? `<div class="quiz-feedback ok">${t('quiz.correct')}</div>`
          : `<div class="quiz-feedback no">${t('quiz.wrongPrefix')}<strong>${escapeHtml(q.options[q.correct])}</strong>${q.explanation ? `<div class="quiz-explanation">${escapeHtml(q.explanation)}</div>` : ''}</div>`;
      }
      return `<div class="card quiz-item"><div class="quiz-q">${i + 1}. ${escapeHtml(q.question)}</div><div class="quiz-options">${opts}</div>${feedback}</div>`;
    }).join('');

    const allDone = mod.quiz.every((_, i) => answers[i] !== undefined);
    const score = mod.quiz.filter((q, i) => answers[i] === q.correct).length;

    return `
      <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">${t('quiz.instructions')}</p>
      ${items}
      ${allDone ? `<div class="callout callout-tip"><strong>${t('quiz.complete', { score, total: mod.quiz.length })}</strong>${score === mod.quiz.length ? t('quiz.perfect') : score >= mod.quiz.length * 0.75 ? t('quiz.strong') : t('quiz.keepReviewing')}</div>` : ''}`;
  }

  window.answerQuiz = function (modId, qIndex, optIndex) {
    if (!state.quizAnswers) state.quizAnswers = {};
    if (!state.quizAnswers[modId]) state.quizAnswers[modId] = {};
    state.quizAnswers[modId][qIndex] = optIndex;
    const mod = MODULES.find(m => m.id === modId);
    const answers = state.quizAnswers[modId];
    if (mod.quiz.every((_, i) => answers[i] !== undefined)) {
      const score = mod.quiz.filter((q, i) => answers[i] === q.correct).length;
      setQuizScore(modId, score, mod.quiz.length);
    }
    saveState();
    renderModule();
  };

  window.toggleComplete = function (id) {
    const now = !isComplete(id);
    setComplete(id, now);
    if (now) showToast(t('module.completeToast'));
    render();
  };

  function showToast(msg) {
    let el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.classList.remove('show'), 2800);
  }

  /* ── Practice exam with multiple choice ── */
  function hashStr(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  }

  function buildMcq(item, qIndex, allItems) {
    const others = allItems.filter(x => x.answer !== item.answer);
    const h = hashStr(item.question);
    const wrong = [0, 1, 2].map(i => others[(h + qIndex + i) % others.length].answer);
    const uniqueWrong = [...new Set(wrong)].slice(0, 3);
    while (uniqueWrong.length < 3) {
      const next = others[(h + uniqueWrong.length + 7) % others.length].answer;
      if (!uniqueWrong.includes(next) && next !== item.answer) uniqueWrong.push(next);
    }
    const options = [item.answer, ...uniqueWrong.slice(0, 3)];
    const order = [0, 1, 2, 3].sort((a, b) => ((h + a) % 10) - ((h + b) % 10));
    const shuffled = order.map(i => options[i]);
    return {
      question: item.question,
      category: item.category,
      options: shuffled,
      correct: shuffled.indexOf(item.answer)
    };
  }

  function renderTest() {
    if (testFinished) { renderTestResults(); return; }
    if (!testQuestions.length) { renderTestIntro(); return; }
    renderTestActive();
  }

  function renderTestIntro() {
    document.getElementById('page').innerHTML = `
      <div class="test-intro">
        <div class="eyebrow">${t('exam.introEyebrow')}</div>
        <h1 class="page-title">${t('exam.introTitle')}</h1>
        <p class="page-lead" style="margin:0 auto">${t('exam.introLead', { q: EXAM.questions, m: EXAM.minutes })}</p>
        <div class="card test-rules card-pad">
          <ul class="fact-list">
            <li>${t('exam.ruleQuestions', { q: EXAM.questions })}</li>
            <li>${t('exam.ruleTimer', { m: EXAM.minutes, format: EXAM.format })}</li>
            <li>${t('exam.rulePass', { score: EXAM.passScore, pct: EXAM.passPercent })}</li>
          </ul>
        </div>
        <button class="btn btn-primary" style="padding:14px 32px;font-size:16px" onclick="startTest()">${t('exam.begin')}</button>
      </div>`;
  }

  window.startTest = function () {
    testQuestions = shuffle(Q_BANK).slice(0, EXAM.questions);
    testAnswers = {};
    testSecondsLeft = EXAM.minutes * 60;
    testFinished = false;
    clearInterval(testTimer);
    testTimer = setInterval(() => {
      testSecondsLeft--;
      if (testSecondsLeft <= 0) { clearInterval(testTimer); submitTest(); }
      else updateTestTimer();
    }, 1000);
    renderTestActive();
  };

  function updateTestTimer() {
    const el = document.getElementById('test-timer');
    if (!el) return;
    const m = Math.floor(testSecondsLeft / 60);
    const s = testSecondsLeft % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    el.className = 'test-timer' + (testSecondsLeft <= 300 ? ' urgent' : testSecondsLeft <= 600 ? ' warn' : '');
  }

  function renderTestActive() {
    const answered = Object.keys(testAnswers).length;
    const pct = Math.round(answered / testQuestions.length * 100);
    const m = Math.floor(testSecondsLeft / 60);
    const s = testSecondsLeft % 60;
    const timerCls = 'test-timer' + (testSecondsLeft <= 300 ? ' urgent' : testSecondsLeft <= 600 ? ' warn' : '');

    const cards = testQuestions.map((q, i) => {
      const chosen = testAnswers[i];
      const opts = q.options.map((opt, oi) => {
        let cls = 'quiz-opt';
        if (chosen !== undefined) {
          if (oi === q.correct) cls += ' correct';
          else if (oi === chosen) cls += ' wrong';
        }
        return `<button class="${cls}" onclick="answerTest(${i},${oi})" ${chosen !== undefined ? 'disabled' : ''}>${escapeHtml(opt)}</button>`;
      }).join('');
      const explanation = (chosen !== undefined && chosen !== q.correct && q.explanation)
        ? `<div class="quiz-explanation">${escapeHtml(q.explanation)}</div>` : '';
      return `<div class="card mcq-card">
        <div class="mcq-category">${escapeHtml(q.category)}</div>
        <div class="mcq-question">${t('exam.questionN', { i: i + 1 })} ${escapeHtml(q.question)}</div>
        <div class="quiz-options">${opts}</div>
        ${explanation}
      </div>`;
    }).join('');

    document.getElementById('page').innerHTML = `
      <div class="test-header">
        <div class="${timerCls}" id="test-timer">${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}</div>
        <div class="test-progress">
          <div class="test-progress-label">${t('exam.answeredOf', { n: answered, m: testQuestions.length })}</div>
          <div class="test-progress-bar"><div class="test-progress-fill" style="width:${pct}%"></div></div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="submitTest()" ${answered === 0 ? 'disabled' : ''}>${t('exam.submit')}</button>
      </div>
      ${cards}`;
  }

  window.answerTest = function (i, oi) {
    testAnswers[i] = oi;
    renderTestActive();
    setTimeout(() => {
      for (let j = i + 1; j < testQuestions.length; j++) {
        if (testAnswers[j] === undefined) {
          document.querySelectorAll('.mcq-card')[j]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          break;
        }
      }
    }, 120);
  };

  window.submitTest = function () {
    clearInterval(testTimer);
    testFinished = true;
    const timeTaken = EXAM.minutes * 60 - testSecondsLeft;
    let score = 0;
    const breakdown = {};
    testQuestions.forEach((q, i) => {
      if (!breakdown[q.category]) breakdown[q.category] = { right: 0, total: 0 };
      breakdown[q.category].total++;
      if (testAnswers[i] === q.correct) { score++; breakdown[q.category].right++; }
    });
    const wrongItems = testQuestions
      .filter((q, i) => testAnswers[i] !== q.correct)
      .slice(0, 6)
      .map(q => ({ question: q.question, answer: q.options[q.correct], category: q.category, explanation: q.explanation || '' }));
    addTestResult({
      date: new Date().toLocaleDateString('en-CA'),
      score, total: testQuestions.length, time: timeTaken, breakdown, wrongItems
    });
    renderTestResults();
    if (score >= EXAM.passScore && !state.supportSeen) {
      state.supportSeen = true;
      saveState();
      setTimeout(showSupportModal, 5000);
    }
  };

  function renderTestResults() {
    const r = testHistory()[0];
    if (!r) { navigate('results'); return; }
    const pct = Math.round(r.score / r.total * 100);
    const scoreCls = pct >= 75 ? 'pass' : pct >= 60 ? 'near' : 'fail';
    const passing = r.score >= EXAM.passScore;
    const verdict = passing ? t('results.verdictPass') : r.score >= EXAM.passScore - 3 ? t('results.verdictClose') : t('results.verdictMore');

    const bd = Object.entries(r.breakdown || {}).map(([cat, v]) => {
      const ratio = v.right / v.total;
      const cls = ratio === 1 ? 'pass' : ratio >= 0.6 ? 'near' : 'fail';
      return `<div class="breakdown-cell"><div class="breakdown-name">${escapeHtml(cat)}</div><div class="breakdown-val ${cls}">${v.right}/${v.total}</div></div>`;
    }).join('');

    let readinessBlock = '';
    if (passing) {
      const wrongs = r.wrongItems || [];
      const wrongsHtml = wrongs.length ? `
        <div class="wrongs-block">
          <div class="wrongs-title">${t('results.lockIn')}</div>
          <p class="wrongs-sub">${t('results.lockInSub')}</p>
          ${wrongs.map(w => `<div class="wrong-item">
            <div class="wrong-q">${escapeHtml(w.question)}</div>
            <div class="wrong-a">${escapeHtml(w.answer)}</div>
            ${w.explanation ? `<div class="wrong-explanation">${escapeHtml(w.explanation)}</div>` : ''}
          </div>`).join('')}
        </div>` : '';

      readinessBlock = `
        <div class="ready-block">
          <div class="ready-heading">${t('results.readyTitle')}</div>
          <p class="ready-body">${t('results.readyBody')}</p>
          <div class="canoo-card">
            <div class="canoo-badge">${t('results.canooBadge')}</div>
            <div class="canoo-content">
              <div class="canoo-title">${t('results.canooTitle')}</div>
              <p class="canoo-body">${t('results.canooBody')}</p>
              <a href="https://canoo.ca" target="_blank" rel="noopener noreferrer" class="canoo-link">${t('results.canooLink')}</a>
            </div>
          </div>
          ${wrongsHtml}
        </div>`;
    }

    document.getElementById('page').innerHTML = `
      <div class="eyebrow">${t('results.examComplete')}</div>
      <div class="card results-hero">
        <div class="results-score ${scoreCls}">${r.score} / ${r.total}</div>
        <div class="results-detail">${t('results.scoreDetail', { pct, passPct: EXAM.passPercent, passScore: EXAM.passScore, total: EXAM.questions })}</div>
        <div class="results-verdict">${verdict}</div>
        <div class="results-detail" style="margin-top:8px">${t('results.timeDetail', { time: formatTime(r.time), date: r.date })}</div>
        <div class="breakdown-grid">${bd}</div>
      </div>
      ${readinessBlock}
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="resetTest()">${t('results.takeAnother')}</button>
        <button class="btn btn-secondary" onclick="navigate('home')">${t('results.dashboard')}</button>
        <button class="btn btn-secondary" onclick="navigate('results')">${t('results.viewHistory')}</button>
        <button class="btn btn-secondary" onclick="shareResult()">${t('results.share')}</button>
      </div>`;
  }

  window.resetTest = function () {
    clearInterval(testTimer);
    testQuestions = [];
    testAnswers = {};
    testFinished = false;
    testSecondsLeft = EXAM.minutes * 60;
    renderTest();
  };

  function renderResults() {
    const tests = testHistory();
    if (!tests.length) {
      document.getElementById('page').innerHTML = `
        <div class="empty-state">
          <h3>${t('results.noExamsTitle')}</h3>
          <p>${t('results.noExamsBody')}</p>
          <button class="btn btn-primary" style="margin-top:16px" onclick="navigate('test')">${t('home.startExam')}</button>
        </div>`;
      return;
    }
    const avg = Math.round(tests.reduce((s, r) => s + r.score / r.total, 0) / tests.length * 100);
    const best = Math.max(...tests.map(r => Math.round(r.score / r.total * 100)));
    const rows = tests.map((tst, i) => {
      const p = Math.round(tst.score / tst.total * 100);
      const cls = p >= 75 ? 'pass' : p >= 60 ? 'near' : 'fail';
      return `<div class="row"><span>${tst.date}${i === 0 ? t('results.latest') : ''}</span><span class="results-score ${cls}" style="font-size:1rem">${tst.score}/${tst.total}</span><span>${formatTime(tst.time)}</span><span>${p}%</span></div>`;
    }).join('');

    document.getElementById('page').innerHTML = `
      <div class="eyebrow">${t('results.progress')}</div>
      <h1 class="page-title">${t('results.historyTitle')}</h1>
      <div class="grid-3" style="margin:24px 0">
        ${statCard(tests.length, t('results.examsTaken'))}
        ${statCard(best + '%', t('results.bestScore'))}
        ${statCard(avg + '%', t('results.avgScore'))}
      </div>
      <div class="card history-table">
        <div class="row header"><span>${t('results.colDate')}</span><span>${t('results.colScore')}</span><span>${t('results.colTime')}</span><span>${t('results.colPercent')}</span></div>
        ${rows}
      </div>
      <div style="margin-top:20px"><button class="btn btn-primary" onclick="navigate('test')">${t('results.takeAnother')}</button></div>`;
  }

  function statCard(val, label) {
    return `<div class="card stat-card"><div class="stat-value" style="font-size:1.5rem">${val}</div><div class="stat-label">${label}</div></div>`;
  }

  // ── MAP ──────────────────────────────────────────────────────────────────
  const PROVINCES = (function () {
    if (LANG !== 'fr' || !window.COURSE_FR || !window.COURSE_FR.provinces) return window.COURSE.provinces;
    const merged = {};
    Object.keys(window.COURSE.provinces).forEach(id => {
      merged[id] = window.COURSE_FR.provinces[id] || window.COURSE.provinces[id];
    });
    return merged;
  })();
  let mapLayer = 'regions';
  let mapSelected = null;

  const REGION_COLORS = { north:'#8aafc0', west:'#7baa82', prairies:'#c4a35a', central:'#8899c8', atlantic:'#7ba8bb' };
  const REGION_NAMES  = { north: t('map.regionNorth'), west: t('map.regionWest'), prairies: t('map.regionPrairies'), central: t('map.regionCentral'), atlantic: t('map.regionAtlantic') };

  const MAP_SHAPES = [
    // id, shape, coords or points, label cx,cy, sublabel, data attrs
    {id:'yt',  shape:'poly',  pts:'8,118 8,226 86,226 86,165 68,118',         lx:47,  ly:182, text:'YT',  sub:'Yukon',        joined:1898, region:'north',    indig:'firstnations'},
    {id:'nwt', shape:'rect',  r:[86,88,168,138],                              lx:170, ly:162, text:'NWT', sub:'N.W.T.',        joined:1870, region:'north',    indig:'firstnations metis inuit'},
    {id:'nu',  shape:'rect',  r:[254,15,240,200],                             lx:374, ly:120, text:'NU',  sub:'Nunavut',       joined:1999, region:'north',    indig:'inuit'},
    {id:'bc',  shape:'rect',  r:[8,226,78,177],                               lx:47,  ly:318, text:'BC',  sub:'Brit. Columbia', joined:1871, region:'west',     indig:'firstnations'},
    {id:'ab',  shape:'rect',  r:[86,226,78,177],                              lx:125, ly:318, text:'AB',  sub:'Alberta',       joined:1905, region:'prairies', indig:'firstnations metis'},
    {id:'sk',  shape:'rect',  r:[164,226,78,177],                             lx:203, ly:318, text:'SK',  sub:'Saskatchewan',  joined:1905, region:'prairies', indig:'firstnations metis'},
    {id:'mb',  shape:'rect',  r:[242,226,78,177],                             lx:281, ly:318, text:'MB',  sub:'Manitoba',      joined:1870, region:'prairies', indig:'firstnations metis'},
    {id:'on',  shape:'rect',  r:[320,194,113,209],                            lx:376, ly:302, text:'ON',  sub:'Ontario',       joined:1867, region:'central',  indig:'firstnations'},
    {id:'qc',  shape:'rect',  r:[433,88,110,315],                             lx:488, ly:252, text:'QC',  sub:'Quebec',        joined:1867, region:'central',  indig:'firstnations inuit'},
    {id:'nl',  shape:'rect',  r:[543,88,88,152],                              lx:587, ly:168, text:'NL',  sub:'Labrador',      joined:1949, region:'atlantic', indig:'inuit firstnations'},
    {id:'nl2', shape:'rect',  r:[595,264,60,52],                              lx:625, ly:294, text:'NL',  sub:'Island',        joined:1949, region:'atlantic', indig:'firstnations'},
    {id:'nb',  shape:'rect',  r:[543,240,72,83],                              lx:579, ly:285, text:'NB',  sub:'New Brunswick', joined:1867, region:'atlantic', indig:'firstnations'},
    {id:'ns',  shape:'poly',  pts:'543,323 615,323 638,356 634,393 590,403 548,380 543,352', lx:582, ly:362, text:'NS', sub:'Nova Scotia', joined:1867, region:'atlantic', indig:'firstnations'},
    {id:'pei', shape:'rect',  r:[558,228,48,18],                              lx:582, ly:238, text:'PEI', sub:'',              joined:1873, region:'atlantic', indig:'firstnations'},
  ];

  // NL island and labrador share the same province data key 'nl'
  const SHAPE_TO_PROV = { nl:'nl', nl2:'nl', yt:'yt', nwt:'nwt', nu:'nu', bc:'bc', ab:'ab', sk:'sk', mb:'mb', on:'on', qc:'qc', nb:'nb', ns:'ns', pei:'pei' };

  function buildProvShape(s) {
    const joined = s.joined;
    const attrs = `id="pshp-${s.id}" class="prov" data-id="${s.id}" data-region="${s.region}" data-joined="${joined}" data-indigenous="${s.indig}" onclick="selectProvince('${s.id}')"`;
    if (s.shape === 'rect') {
      const [x,y,w,h] = s.r;
      return `<rect ${attrs} x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>`;
    }
    return `<polygon ${attrs} points="${s.pts}"/>`;
  }

  function buildMapSVG() {
    const shapes = MAP_SHAPES.map(buildProvShape).join('');
    const labels = MAP_SHAPES.map(s => {
      const hasSub = s.sub && s.id !== 'nl2';
      return `<text class="prov-label" x="${s.lx}" y="${s.ly - (hasSub?5:0)}" pointer-events="none">${s.text}</text>` +
             (hasSub ? `<text class="prov-sublabel" x="${s.lx}" y="${s.ly + 8}" pointer-events="none">${s.sub}</text>` : '');
    }).join('');
    return `<svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" class="canada-map" id="canada-map">
      <rect x="0" y="0" width="680" height="420" fill="#d4eaf5" rx="8"/>
      <rect x="3" y="3" width="674" height="414" fill="#c8e0ed" rx="7"/>
      ${shapes}${labels}
    </svg>`;
  }

  function renderMapInfo(provId) {
    const p = PROVINCES[provId];
    if (!p) return;
    const regionColor = REGION_COLORS[p.region] || '#aaa';
    const regionName = REGION_NAMES[p.region] || p.region;
    const joinedText = p.type === 'territory' ? t('map.becameTerritory', { year: p.joined }) : t('map.joinedConfederation', { year: p.joined });
    const factsHtml = p.facts.map(f => `<li>${escapeHtml(f)}</li>`).join('');
    const tagsHtml = p.tags.map(tag => `<span class="map-tag">${escapeHtml(tag)}</span>`).join('');
    const indigenousHtml = p.indigenous.length
      ? `<div class="map-indigenous-note">${t('map.indigenousPrefix')}${p.indigenous.map(escapeHtml).join('; ')}</div>` : '';
    document.getElementById('map-info').innerHTML = `
      <div class="map-prov-header">
        <div>
          <div class="map-prov-name">${escapeHtml(p.name)}</div>
          <div class="map-prov-region"><span class="map-region-dot" style="background:${regionColor}"></span>${escapeHtml(regionName)}</div>
        </div>
        <div class="map-prov-abbr">${escapeHtml(p.abbr)}</div>
      </div>
      <div class="map-joined">${joinedText}</div>
      ${indigenousHtml}
      <div class="map-tip"><div class="map-tip-label">${t('map.examTip')}</div>${escapeHtml(p.examTip)}</div>
      <ul class="map-facts">${factsHtml}</ul>
      <div class="map-tags">${tagsHtml}</div>`;
  }

  window.selectProvince = function(shapeId) {
    mapSelected = shapeId;
    document.querySelectorAll('.prov').forEach(el => el.classList.remove('selected'));
    // select both shapes for NL
    const provId = SHAPE_TO_PROV[shapeId];
    MAP_SHAPES.filter(s => SHAPE_TO_PROV[s.id] === provId).forEach(s => {
      document.getElementById('pshp-' + s.id)?.classList.add('selected');
    });
    renderMapInfo(provId);
  };

  window.setMapLayer = function(layer) {
    mapLayer = layer;
    const map = document.getElementById('canada-map');
    if (!map) return;
    map.className = `canada-map map-layer-${layer}`;
    document.querySelectorAll('.layer-btn').forEach(b => b.classList.toggle('active', b.dataset.layer === layer));
    // re-apply selection
    if (mapSelected) {
      const provId = SHAPE_TO_PROV[mapSelected];
      MAP_SHAPES.filter(s => SHAPE_TO_PROV[s.id] === provId).forEach(s => {
        document.getElementById('pshp-' + s.id)?.classList.add('selected');
      });
    }
  };

  function buildLegend() {
    if (mapLayer === 'regions') {
      return Object.entries(REGION_COLORS).map(([k,c]) =>
        `<span class="leg-item"><span class="leg-dot" style="background:${c}"></span>${escapeHtml(REGION_NAMES[k])}</span>`).join('');
    }
    if (mapLayer === 'indigenous') {
      return [
        ['#5b8fc9', t('map.legendInuit')], ['#c4862a', t('map.legendMetis')], ['#7db37d', t('map.legendFirstNations')]
      ].map(([c,l]) => `<span class="leg-item"><span class="leg-dot" style="background:${c}"></span>${l}</span>`).join('');
    }
    // history
    return [
      ['#C8102E', t('map.legendFounding')], ['#e05570','1870'], ['#e87a55','1871'], ['#e8a040','1873'],
      ['#7ab37d','1898'], ['#8899c8','1905'], ['#aa6dc8','1949'], ['#555','1999']
    ].map(([c,l]) => `<span class="leg-item"><span class="leg-dot" style="background:${c}"></span>${l}</span>`).join('');
  }

  function renderMap() {
    document.getElementById('page').innerHTML = `
      <div class="hero-block">
        <div class="eyebrow">${t('map.eyebrow')}</div>
        <h1 class="page-title">${t('map.title')}</h1>
        <p class="page-lead">${t('map.lead')}</p>
      </div>
      <div class="map-layers">
        <button class="layer-btn${mapLayer==='regions'?' active':''}" data-layer="regions" onclick="setMapLayer('regions')">${t('map.layerRegions')}</button>
        <button class="layer-btn${mapLayer==='indigenous'?' active':''}" data-layer="indigenous" onclick="setMapLayer('indigenous')">${t('map.layerIndigenous')}</button>
        <button class="layer-btn${mapLayer==='history'?' active':''}" data-layer="history" onclick="setMapLayer('history')">${t('map.layerHistory')}</button>
      </div>
      <div class="map-layout">
        <div class="map-svg-wrap">${buildMapSVG()}</div>
        <div class="map-info" id="map-info">
          <div class="map-info-placeholder"><div style="font-size:2.2rem">🍁</div><div style="margin-top:10px;font-weight:700;font-size:15px">${t('map.placeholderTitle')}</div><div style="margin-top:4px;color:var(--text-muted);font-size:13px">${t('map.placeholderSub')}</div></div>
        </div>
      </div>
      <div class="map-legend"><span class="map-legend-label">${t('map.legendLabel')}</span>${buildLegend()}</div>`;
    // apply initial layer class
    const map = document.getElementById('canada-map');
    if (map) map.className = `canada-map map-layer-${mapLayer}`;
    // restore selection if any
    if (mapSelected) {
      const provId = SHAPE_TO_PROV[mapSelected];
      MAP_SHAPES.filter(s => SHAPE_TO_PROV[s.id] === provId).forEach(s => {
        document.getElementById('pshp-' + s.id)?.classList.add('selected');
      });
      renderMapInfo(provId);
    }
  }

  // ── Pay-what-you-want support modal ──────────────────────────────────────

  window.showSupportModal = showSupportModal;
  function showSupportModal() {
    const overlay = document.createElement('div');
    overlay.id = 'support-overlay';
    overlay.className = 'support-overlay';
    overlay.innerHTML = `
      <div class="support-modal" role="dialog" aria-modal="true" aria-labelledby="support-heading">
        <button class="support-x" onclick="dismissSupport()" aria-label="Close">×</button>
        <div class="support-leaf">🍁</div>
        <h2 class="support-heading" id="support-heading">${t('support.heading')}</h2>
        <p class="support-body">${t('support.body')}</p>
        <p class="support-ask">${t('support.ask')}</p>
        <div class="support-slider-section">
          <input type="range" id="support-slider" class="support-slider" min="0" max="50" value="10" step="1">
          <div class="support-marks"><span>${t('support.markFree')}</span><span>$10</span><span>$25</span><span>$50</span></div>
          <div class="support-amount-row">
            <span class="support-amount" id="support-amount">$10</span>
            <span class="support-amount-sep">·</span>
            <input type="number" id="support-custom" class="support-custom" min="0" max="9999" placeholder="${t('support.customPlaceholder')}">
          </div>
          <div class="support-tier" id="support-tier"></div>
        </div>
        <div id="support-actions"></div>
      </div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('visible')));

    const slider = document.getElementById('support-slider');
    const custom = document.getElementById('support-custom');
    slider.addEventListener('input', function () {
      custom.value = '';
      setSliderFill(slider);
      refreshSupport(parseInt(slider.value, 10));
    });
    custom.addEventListener('input', function () {
      const val = Math.min(9999, Math.max(0, parseInt(custom.value, 10) || 0));
      slider.value = Math.min(50, val);
      setSliderFill(slider);
      refreshSupport(val);
    });
    setSliderFill(slider);
    refreshSupport(10);
  }

  function setSliderFill(slider) {
    const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--accent) ${pct}%, var(--border) ${pct}%)`;
  }

  function refreshSupport(amount) {
    document.getElementById('support-amount').textContent = '$' + amount;
    const tier = document.getElementById('support-tier');
    const actions = document.getElementById('support-actions');

    if (amount === 0) {
      tier.textContent = '';
      actions.innerHTML = `
        <div class="support-farewell">
          <p>${t('support.farewell1')}</p>
          <p>${t('support.farewell2')}</p>
          <p class="support-farewell-sign">${t('support.farewell3')}</p>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:8px" onclick="closeSupportOverlay()">${t('support.close')}</button>`;
    } else {
      const labels = [[4,t('support.tier1')],[9,t('support.tier2')],[19,t('support.tier3')],[34,t('support.tier4')],[50,t('support.tier5')],[Infinity,t('support.tier6')]];
      tier.textContent = labels.find(([max]) => amount <= max)[1];
      const kofi = 'https://ko-fi.com/thesidequest';
      const paypal = `https://www.paypal.me/rupajsoni1/${Math.min(amount, 9999)}`;
      actions.innerHTML = `
        <div class="support-btns">
          <a href="${kofi}" target="_blank" rel="noopener noreferrer" class="support-btn-kofi" onclick="closeSupportOverlay()">
            <span class="support-btn-label">Ko-fi</span>
            <span class="support-btn-amt">$${amount}</span>
          </a>
          <a href="${paypal}" target="_blank" rel="noopener noreferrer" class="support-btn-paypal" onclick="closeSupportOverlay()">
            <span class="support-btn-label">PayPal</span>
            <span class="support-btn-amt">$${amount}</span>
          </a>
        </div>
        <div class="support-qr-row">
          <img class="support-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https%3A%2F%2Fko-fi.com%2Fthesidequest&bgcolor=f7f7f8&color=1a1a1a&margin=4" alt="Scan to pay on mobile" loading="lazy" width="80" height="80">
          <span class="support-qr-note">${t('support.qrNote')}</span>
        </div>
        <button class="support-no-thanks" onclick="dismissSupport()">${t('support.noThanks')}</button>`;
    }
  }

  window.dismissSupport = function () {
    const slider = document.getElementById('support-slider');
    if (slider) { slider.value = 0; setSliderFill(slider); }
    const custom = document.getElementById('support-custom');
    if (custom) custom.value = '';
    const amountEl = document.getElementById('support-amount');
    if (amountEl) amountEl.textContent = '$0';
    refreshSupport(0);
  };

  window.closeSupportOverlay = function () {
    const el = document.getElementById('support-overlay');
    if (!el) return;
    el.classList.remove('visible');
    setTimeout(() => el.remove(), 320);
  };

  window.toggleGapSection = function () {
    const body = document.getElementById('fb-gap-body');
    const arrow = document.getElementById('fb-gap-arrow');
    if (!body) return;
    const open = body.style.display === 'none';
    body.style.display = open ? 'block' : 'none';
    if (arrow) arrow.textContent = open ? t('feedback.gapHide') : t('feedback.gapAdd');
  };

  window.submitFeedback = function () {
    const msg = document.getElementById('fb-message')?.value.trim();
    if (!msg) { showToast(t('feedback.emptyToast')); return; }
    const topic = document.getElementById('fb-topic')?.value || '';
    const gap   = document.getElementById('fb-gap')?.value.trim() || '';
    const consent = document.getElementById('fb-consent')?.checked ? 'yes' : 'no';
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'northbound-feedback',
        message: msg, topic,
        'gap-description': gap,
        'testimonial-consent': consent,
      }),
    }).finally(() => {
      state.feedbackSubmitted = true;
      saveState();
      showToast(t('feedback.sentToast'));
      renderAbout();
    });
  };

  window.shareResult = function () {
    const text = t('common.shareText');
    if (navigator.share) {
      navigator.share({ title: t('common.shareTitle'), text, url: 'https://northboundca.netlify.app' }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(text)
        .then(() => showToast(t('feedback.copiedToast')))
        .catch(() => showToast('northbound.ca'));
    }
  };

  // ─────────────────────────────────────────────────────────────────────────

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function initTimeline() {
    const examPairs = TIMELINE_PAIRS.filter(p => p.exam);
    tlState = {
      pairs: shuffle(examPairs),
      years: shuffle(examPairs.map(p => p.year)),
      solved: new Set(),
      selected: null,
    };
  }

  function renderTlRef() {
    const rows = TIMELINE_PAIRS.map(p =>
      `<div class="tl-ref-row${p.exam ? ' exam-key' : ''}">
        <div class="tl-ref-year">${p.year}</div>
        <div class="tl-ref-event">${escapeHtml(p.event)}</div>
        ${p.exam ? `<div class="tl-ref-badge">${t('timeline.examBadge')}</div>` : ''}
      </div>`
    ).join('');
    return `<div class="tl-ref-list">${rows}</div>
      <div class="tl-ref-legend"><span class="tl-ref-badge">${t('timeline.examBadge')}</span> ${t('timeline.refLegend')}</div>`;
  }

  function renderTlMatch() {
    if (!tlState) initTimeline();
    const { pairs, years, solved, selected } = tlState;
    const allSolved = solved.size === pairs.length;
    const pct = Math.round(solved.size / pairs.length * 100);

    const chips = years.map((y, i) => {
      const isSolved = solved.has(y);
      const isSelected = y === selected;
      return `<button class="tl-chip${isSelected ? ' selected' : ''}${isSolved ? ' solved' : ''}"
        style="--i:${i}" onclick="tlSelectYear('${y}')" aria-label="Year ${y}">${y}</button>`;
    }).join('');

    const rows = pairs.map((p, i) => {
      const isSolved = solved.has(p.year);
      const isTarget = !!(selected && !isSolved);
      return `<div class="tl-event-row${isSolved ? ' solved' : ''}${isTarget ? ' target' : ''}"
        id="tl-row-${i}" onclick="tlDropYear(${i})" style="--row-i:${i}">
        <div class="tl-node"><div class="tl-dot"></div></div>
        <div class="tl-badge ${isSolved ? 'correct' : 'empty'}">${isSolved ? p.year : '????'}</div>
        <div class="tl-event-text">${escapeHtml(p.event)}</div>
        ${isSolved ? '<div class="tl-check">✓</div>' : ''}
      </div>`;
    }).join('');

    return `
      ${allSolved ? `<div class="tl-success-banner">
        ${t('timeline.successBanner', { n: pairs.length })}
        <button class="btn btn-secondary" style="margin-left:16px" onclick="tlReset()">${t('timeline.playAgain')}</button>
      </div>` : ''}
      <div class="tl-pool-card">
        <div class="tl-pool-label">${t('timeline.selectYear')}</div>
        <div class="tl-pool">${chips}</div>
      </div>
      <div class="tl-progress-row">
        <div class="tl-progress-track"><div class="tl-progress-fill" style="width:${pct}%"></div></div>
        <div class="tl-progress-label">${solved.size} <span>/ ${pairs.length}</span></div>
      </div>
      <div class="tl-events-list">${rows}</div>
      <div class="tl-hint">
        ${selected
          ? `<span class="tl-hint-active">${t('timeline.hintSelected', { year: selected })}</span>`
          : allSolved ? `<span>${t('timeline.hintAllSolved')}</span>` : `<span>${t('timeline.hintStart')}</span>`}
      </div>`;
  }

  function renderTimeline() {
    const tabBar = `<div class="tab-bar" style="margin-bottom:24px">
      <button class="tab-btn${tlTab === 'ref' ? ' active' : ''}" onclick="tlSetTab('ref')">${t('timeline.tabAllYears')}</button>
      <button class="tab-btn${tlTab === 'match' ? ' active' : ''}" onclick="tlSetTab('match')">${t('timeline.tabMatchGame')}</button>
    </div>`;

    document.getElementById('page').innerHTML = `
      <div class="hero-block">
        <div class="eyebrow">${t('timeline.eyebrow')}</div>
        <h1 class="page-title">${t('timeline.title')}</h1>
        <p class="page-lead">${t('timeline.lead')}</p>
      </div>
      ${tabBar}
      ${tlTab === 'ref' ? renderTlRef() : renderTlMatch()}
    `;
  }

  window.tlSetTab = function(tab) { tlTab = tab; renderTimeline(); };

  window.tlSelectYear = function(year) {
    if (!tlState || tlState.solved.has(year)) return;
    tlState.selected = tlState.selected === year ? null : year;
    renderTimeline();
  };

  window.tlDropYear = function(rowIdx) {
    if (!tlState || !tlState.selected) return;
    const pair = tlState.pairs[rowIdx];
    if (tlState.solved.has(pair.year)) return;
    if (tlState.selected === pair.year) {
      tlState.solved.add(pair.year);
      tlState.selected = null;
      renderTimeline();
      requestAnimationFrame(() => {
        const row = document.getElementById('tl-row-' + rowIdx);
        if (row) {
          row.classList.add('just-solved');
          setTimeout(() => row && row.classList.remove('just-solved'), 700);
        }
      });
    } else {
      const row = document.getElementById('tl-row-' + rowIdx);
      if (row) {
        row.classList.add('wrong');
        setTimeout(() => row && row.classList.remove('wrong'), 450);
      }
    }
  };

  window.tlReset = function() {
    tlState = null;
    renderTimeline();
  };

  function renderExamDay() {
    function modReadiness(m) {
      const qs = quizScore(m.id);
      if (!qs) return 'unseen';
      const pct = qs.score / qs.total;
      if (pct >= 0.8) return 'strong';
      if (pct >= 0.6) return 'review';
      return 'focus';
    }
    const SIGNAL_ORDER = ['focus', 'unseen', 'review', 'strong'];
    const SIGNAL_LABEL = { focus: t('examday.signalFocus'), review: t('examday.signalReview'), strong: t('examday.signalStrong'), unseen: t('examday.signalUnseen') };
    const SIGNAL_CLS   = { focus: 'signal-focus', review: 'signal-review', strong: 'signal-strong', unseen: 'signal-unseen' };

    const sorted = [...MODULES].sort((a, b) =>
      SIGNAL_ORDER.indexOf(modReadiness(a)) - SIGNAL_ORDER.indexOf(modReadiness(b))
    );

    const hasScores = MODULES.some(m => quizScore(m.id));

    const mapRows = sorted.map(m => {
      const qs = quizScore(m.id);
      const r = modReadiness(m);
      const scoreText = qs ? `${qs.score}/${qs.total}` : '—';
      return `<div class="readiness-row" onclick="document.getElementById('cram-${m.id}').scrollIntoView({behavior:'smooth',block:'start'})">
        <div class="readiness-row-title">${escapeHtml(m.shortTitle)}</div>
        <div class="readiness-row-score">${scoreText}</div>
        <span class="readiness-signal ${SIGNAL_CLS[r]}">${SIGNAL_LABEL[r]}</span>
      </div>`;
    }).join('');

    const mapIntro = hasScores
      ? `<p class="cram-intro">${t('examday.sortedHint')}</p>`
      : `<div class="callout callout-tip" style="margin-top:12px"><strong>${t('examday.noScoresTitle')}</strong> ${t('examday.noScoresBody')}</div>`;

    const cramBlocks = sorted.map(m => {
      const r = modReadiness(m);
      const qaRows = m.flashcards.slice(0, 8).map(fc =>
        `<div class="cram-qa"><div class="cram-q">${escapeHtml(fc.front)}</div><div class="cram-a">${escapeHtml(fc.back)}</div></div>`
      ).join('');
      return `<div class="cram-module" id="cram-${m.id}">
        <div class="cram-module-header">
          <div class="cram-module-title">${escapeHtml(m.title)}</div>
          <span class="readiness-signal ${SIGNAL_CLS[r]}">${SIGNAL_LABEL[r]}</span>
        </div>
        <div class="cram-tip">⚡ ${escapeHtml(m.examTip)}</div>
        <div class="cram-qas">${qaRows}</div>
        <button class="btn btn-secondary btn-sm" style="margin-top:14px" onclick="window.open(location.href.split('#')[0].split('?')[0]+'#${m.id}','_blank')">${t('examday.openLesson')}</button>
      </div>`;
    }).join('');

    document.getElementById('page').innerHTML = `
      <div class="hero-block">
        <div class="eyebrow">${t('examday.eyebrow')}</div>
        <h1 class="page-title">${t('examday.title')}</h1>
        <p class="page-lead">${t('examday.lead')}</p>
      </div>

      <div class="card card-pad" style="margin-bottom:24px">
        <div class="section-heading" style="margin-top:0;margin-bottom:4px">${t('examday.readinessByTopic')}</div>
        ${mapIntro}
        <div class="readiness-map">${mapRows}</div>
      </div>

      <div class="section-heading">${t('examday.cramSheet', { n: MODULES.length })}</div>
      <p class="cram-intro" style="margin-bottom:20px">${t('examday.cramIntro')}${hasScores ? t('examday.cramSortedNote') : t('examday.cramScrollNote')}</p>
      ${cramBlocks}

      <div class="card card-pad" style="text-align:center;margin-top:32px;padding:32px">
        <div style="font-size:28px;margin-bottom:10px">🍁</div>
        <div style="font-weight:700;font-size:17px;margin-bottom:6px">${t('examday.doneTitle')}</div>
        <div style="font-size:14px;color:var(--text-secondary);margin-bottom:20px">${t('examday.doneSub')}</div>
        <button class="btn btn-primary" style="padding:13px 32px;font-size:15px" onclick="navigate('test')">${t('examday.startExam')}</button>
      </div>`;
  }

  function render() {
    renderSidebar();
    if (view === 'home') renderHome();
    else if (view === 'module') renderModule();
    else if (view === 'test') renderTest();
    else if (view === 'results') renderResults();
    else if (view === 'map') renderMap();
    else if (view === 'timeline') renderTimeline();
    else if (view === 'examday') renderExamDay();
    else if (view === 'about') renderAbout();
  }

  function renderAbout() {
    document.getElementById('page').innerHTML = `
      <div class="hero-block">
        <div class="eyebrow">${t('about.eyebrow')}</div>
        <h1 class="page-title">${t('about.title')}</h1>
        <p class="page-lead">${t('about.lead')}</p>
      </div>

      <div class="card card-pad" style="margin-bottom:16px">
        <h2 style="font-size:16px;font-weight:700;margin-bottom:16px;color:var(--text)">${t('about.loopTitle')}</h2>
        <div class="fact-list" style="border:1px solid var(--border);border-radius:var(--radius)">
          <ul style="list-style:none">
            <li>${t('about.loop1')}</li>
            <li>${t('about.loop2')}</li>
            <li>${t('about.loop3')}</li>
            <li>${t('about.loop4')}</li>
            <li>${t('about.loop5')}</li>
            <li>${t('about.loop6')}</li>
          </ul>
        </div>
      </div>

      <div class="grid-2" style="margin-bottom:16px;gap:12px;display:grid;grid-template-columns:1fr 1fr">
        <div class="card card-pad">
          <div style="font-size:22px;margin-bottom:8px">🗺</div>
          <div style="font-weight:700;font-size:14px;margin-bottom:4px">${t('about.mapCardTitle')}</div>
          <div style="font-size:13px;color:var(--text-secondary);line-height:1.5">${t('about.mapCardBody')}</div>
        </div>
        <div class="card card-pad">
          <div style="font-size:22px;margin-bottom:8px">📅</div>
          <div style="font-weight:700;font-size:14px;margin-bottom:4px">${t('about.timelineCardTitle')}</div>
          <div style="font-size:13px;color:var(--text-secondary);line-height:1.5">${t('about.timelineCardBody')}</div>
        </div>
      </div>

      <div class="card card-pad" style="margin-bottom:16px">
        <h2 style="font-size:16px;font-weight:700;margin-bottom:16px;color:var(--text)">${t('about.faqTitle')}</h2>
        <div class="fact-list" style="border:1px solid var(--border);border-radius:var(--radius)">
          <ul style="list-style:none">
            <li>
              <strong>${t('about.faq1q')}</strong><br>
              <span style="color:var(--text-secondary)">${t('about.faq1a')}</span>
            </li>
            <li>
              <strong>${t('about.faq2q')}</strong><br>
              <span style="color:var(--text-secondary)">${t('about.faq2a')}</span>
            </li>
            <li>
              <strong>${t('about.faq3q')}</strong><br>
              <span style="color:var(--text-secondary)">${t('about.faq3a')}</span>
            </li>
            <li>
              <strong>${t('about.faq4q')}</strong><br>
              <span style="color:var(--text-secondary)">${t('about.faq4a')}</span>
            </li>
            <li>
              <strong>${t('about.faq5q')}</strong><br>
              <span style="color:var(--text-secondary)">${t('about.faq5a')}</span>
            </li>
            <li>
              <strong>${t('about.faq6q')}</strong><br>
              <span style="color:var(--text-secondary)">${t('about.faq6a')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="callout callout-tip" style="margin-bottom:16px">
        <strong>${t('about.builtByTitle')}</strong>
        ${t('about.builtByBody')}
      </div>

      <div class="card card-pad" style="margin-bottom:16px">
        <h2 style="font-size:16px;font-weight:700;margin-bottom:8px;color:var(--text)">${t('about.keepGoingTitle')}</h2>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:14px;line-height:1.55">${t('about.keepGoingBody')}</p>
        <div class="footer-pay-row">
          <a href="https://ko-fi.com/thesidequest" target="_blank" rel="noopener noreferrer" class="footer-btn-kofi">Ko-fi ☕</a>
          <a href="https://www.paypal.me/rupajsoni1" target="_blank" rel="noopener noreferrer" class="footer-btn-paypal">PayPal 💙</a>
        </div>
      </div>

      ${state.feedbackSubmitted
        ? `<div class="card card-pad" style="margin-bottom:16px;text-align:center;padding:32px">
             <div style="font-size:24px;margin-bottom:8px">🍁</div>
             <div style="font-weight:700;font-size:15px">${t('feedback.thanksTitle')}</div>
           </div>`
        : `<div class="card card-pad" style="margin-bottom:16px">
             <h2 style="font-size:16px;font-weight:700;margin-bottom:6px;color:var(--text)">${t('feedback.sayTitle')}</h2>
             <p style="font-size:13px;color:var(--text-secondary);margin-bottom:14px;line-height:1.5">${t('feedback.sayLead')}</p>
             <textarea id="fb-message" class="fb-textarea" placeholder="${t('feedback.placeholder')}" rows="3"></textarea>
             <div class="fb-consent-row" style="margin-bottom:16px">
               <input type="checkbox" id="fb-consent" class="fb-checkbox">
               <label for="fb-consent" class="fb-consent-label">${t('feedback.consentLabel')}</label>
             </div>
             <div class="fb-gap-toggle" onclick="toggleGapSection()">
               <span>${t('feedback.gapPrompt')}</span>
               <span id="fb-gap-arrow" class="fb-gap-arrow">${t('feedback.gapAdd')}</span>
             </div>
             <div id="fb-gap-body" class="fb-gap-body" style="display:none">
               <select id="fb-topic" class="fb-select" style="margin-top:10px">
                 <option value="">${t('feedback.topicPlaceholder')}</option>
                 <option value="History">${t('feedback.topicHistory')}</option>
                 <option value="Rights and Responsibilities">${t('feedback.topicRights')}</option>
                 <option value="Government">${t('feedback.topicGovernment')}</option>
                 <option value="Geography">${t('feedback.topicGeography')}</option>
                 <option value="Economy">${t('feedback.topicEconomy')}</option>
                 <option value="Indigenous Peoples">${t('feedback.topicIndigenous')}</option>
                 <option value="Other">${t('feedback.topicOther')}</option>
               </select>
               <input id="fb-gap" class="fb-input" type="text" placeholder="${t('feedback.gapPlaceholder')}" maxlength="200">
             </div>
             <button class="btn btn-primary" style="margin-top:14px" onclick="submitFeedback()">${t('feedback.send')}</button>
           </div>`}`;
  }

  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-backdrop').classList.remove('show');
  }

  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-backdrop').classList.toggle('show');
  });
  document.getElementById('sidebar-backdrop').addEventListener('click', closeSidebar);

  document.addEventListener('keydown', e => {
    if (view !== 'module' || moduleTab !== 'cards') return;
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') prevCard();
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipCard(); }
  });


  (function initFooterFact() {
    const bar = document.querySelector('.footer-fact-bar');
    const el = document.getElementById('footer-fact-text');
    if (!el || !bar) return;
    let currentIdx = Math.floor(Date.now() / 86400000) % CANADA_FACTS.length;
    el.textContent = CANADA_FACTS[currentIdx];
    bar.title = t('footer.clickForFact');
    bar.style.cursor = 'pointer';
    bar.addEventListener('click', () => {
      el.classList.add('swapping');
      setTimeout(() => {
        let next;
        do { next = Math.floor(Math.random() * CANADA_FACTS.length); } while (next === currentIdx);
        currentIdx = next;
        el.textContent = CANADA_FACTS[currentIdx];
        el.classList.remove('swapping');
      }, 200);
    });
  })();

  render();
})();
