/* Canada Citizenship Prep — application logic */
(function () {
  'use strict';

  const CONFIG = {};

  const CANADA_FACTS = [
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
  const TIMELINE_PAIRS = [
    { year: '1497', event: 'John Cabot reaches the east coast of Canada' },
    { year: '1608', event: 'Samuel de Champlain founds Quebec City' },
    { year: '1759', event: 'Battle of the Plains of Abraham — British defeat French' },
    { year: '1867', event: 'Confederation — Canada becomes a country' },
    { year: '1885', event: 'Canadian Pacific Railway completed' },
    { year: '1905', event: 'Alberta and Saskatchewan join Confederation' },
    { year: '1914', event: 'Canada enters the First World War' },
    { year: '1939', event: 'Canada enters the Second World War' },
    { year: '1949', event: 'Newfoundland and Labrador joins Canada' },
    { year: '1965', event: 'The Maple Leaf flag is adopted' },
    { year: '1982', event: 'Charter of Rights and Freedoms is enacted' },
    { year: '1999', event: 'Nunavut becomes Canada\'s newest territory' },
  ];

  const STORAGE_KEY = 'ca-citizenship-v6';
  const MODULES = window.COURSE.modules;
  const EXAM = window.COURSE.exam;
  const Q_BANK = window.COURSE.questionBank;

  let state = loadState();
  let view = state.view || 'home';
  let activeModuleId = state.activeModuleId || MODULES[0].id;
  let moduleTab = state.moduleTab || 'learn';
  let flashIndex = 0;
  let flashFlipped = false;

  let testQuestions = [];
  let tlState = null;
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
    const avg = recent.reduce((s, t) => s + t.score / t.total, 0) / recent.length;
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

    let html = '<div class="nav-section">Overview</div>';
    html += navItem('home', '⌂', 'Dashboard', 'Your study plan', view === 'home');

    html += '<div class="nav-section">Lessons</div>';
    MODULES.forEach((m, i) => {
      const active = view === 'module' && activeModuleId === m.id;
      const complete = isComplete(m.id);
      html += `<div class="nav-item${active ? ' active' : ''}${complete ? ' complete' : ''}" onclick="navigate('module','${m.id}')">
        <div class="nav-num">${complete ? '✓' : i + 1}</div>
        <div class="nav-label"><span>${escapeHtml(m.shortTitle)}</span><small>${escapeHtml(m.navSubtitle)}</small></div>
      </div>`;
    });

    html += '<div class="nav-section">Visual</div>';
    html += navItem('map', '🗺', 'Canada Map', 'Geography & regions', view === 'map');

    html += '<div class="nav-section">Practice</div>';
    html += navItem('test', '⏱', 'Practice Exam', 'Timed simulation', view === 'test');
    html += navItem('timeline', '📅', 'Timeline Match', 'Drag years to events', view === 'timeline');
    const count = testHistory().length;
    html += navItem('results', '◷', 'Results', 'Score history', view === 'results', count || '');

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
    let ringClass = 'none', ringText = '—', title = 'Take a practice exam', sub = 'Your readiness score appears after you complete at least one timed practice exam.';

    if (ready !== null) {
      ringText = ready + '%';
      ringClass = ready >= 75 ? 'high' : ready >= 60 ? 'mid' : 'low';
      title = ready >= 75 ? 'You are exam-ready' : ready >= 60 ? 'Almost there—review weak topics' : 'Keep studying—focus on lessons';
      sub = `Based on your last ${Math.min(tests.length, 3)} practice exam${tests.length !== 1 ? 's' : ''}. You need ${EXAM.passPercent}% (${EXAM.passScore}/${EXAM.questions}) on the official test.`;
    }

    const pathItems = MODULES.map((m, i) => {
      const done = isComplete(m.id);
      const qs = quizScore(m.id);
      const meta = done ? 'Completed' : qs ? `Quiz: ${qs.score}/${qs.total}` : m.duration;
      return `<div class="card path-item${done ? ' done' : ''}" onclick="navigate('module','${m.id}')">
        <div class="path-num">${done ? '✓' : i + 1}</div>
        <div><div class="path-title">${escapeHtml(m.title)}</div><div class="path-meta">${meta}</div></div>
      </div>`;
    }).join('');

    document.getElementById('page').innerHTML = `
      <div class="hero-block">
        <div class="eyebrow">Study dashboard</div>
        <h1 class="page-title">Canadian Citizenship Test Preparation</h1>
        <p class="page-lead">Structured lessons, flashcards, and timed practice exams based on <em>Discover Canada</em>. Free for everyone—study at your own pace using proven active-learning methods.</p>
      </div>

      <div class="grid-4" style="margin-bottom:24px">
        ${stat(EXAM.questions, 'Questions')}
        ${stat(EXAM.minutes, 'Minutes')}
        ${stat(EXAM.passPercent + '%', 'To pass')}
        ${stat(EXAM.attempts, 'Attempts allowed')}
      </div>

      <div class="card card-pad readiness-panel">
        <div class="readiness-ring ${ringClass}">${ringText}</div>
        <div>
          <div class="readiness-title">${title}</div>
          <div class="readiness-sub">${sub}</div>
          <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
            <button class="btn btn-primary" onclick="navigate('module','${next.id}')">${isComplete(next.id) ? 'Review lessons' : 'Continue lesson → ' + escapeHtml(next.shortTitle)}</button>
            <button class="btn btn-secondary" onclick="navigate('test')">Start practice exam</button>
          </div>
        </div>
      </div>

      <div class="learning-path">
        <div class="section-heading">Learning path — ${completedCount()} of ${MODULES.length} complete</div>
        <div class="path-grid">${pathItems}</div>
      </div>

      <div class="callout callout-tip" style="margin-top:28px">
        <strong>How to study effectively</strong>
        Read each lesson, practice with flashcards (active recall), then complete the module quiz. Finish with a full timed practice exam when all modules are done.
      </div>

      <div class="card card-pad tl-home-card" onclick="navigate('timeline')" style="margin-top:16px;cursor:pointer">
        <div class="tl-home-icon">📅</div>
        <div>
          <div class="tl-home-title">Timeline Match</div>
          <div class="tl-home-sub">Match 12 key dates to their historical events. Tap a year, tap an event.</div>
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
      <div class="objectives"><div class="objectives-title">Learning objectives</div><ul>${objectives}</ul></div>
      <div class="callout callout-exam"><strong>Exam focus</strong>${escapeHtml(mod.examTip)}</div>
      ${sections}`;

    const cardsPanel = renderFlashcards(mod);
    const quizPanel = renderModuleQuiz(mod);

    let panel = learnPanel;
    if (moduleTab === 'cards') panel = cardsPanel;
    if (moduleTab === 'quiz') panel = quizPanel;

    document.getElementById('page').innerHTML = `
      <div class="module-header">
        <div class="eyebrow">Lesson ${idx + 1} of ${MODULES.length}</div>
        <h1 class="page-title">${escapeHtml(mod.title)}</h1>
        <div class="module-meta">
          <span class="chip">${escapeHtml(mod.duration)}</span>
          <span class="chip">${mod.flashcards.length} flashcards</span>
          <span class="chip">${mod.quiz.length} quiz questions</span>
          ${done ? '<span class="chip chip-success">Completed</span>' : ''}
          ${qs ? `<span class="chip chip-accent">Quiz best: ${qs.score}/${qs.total}</span>` : ''}
        </div>
      </div>

      <div class="tab-bar">
        <button class="tab-btn${moduleTab === 'learn' ? ' active' : ''}" onclick="setModuleTab('learn')">Learn</button>
        <button class="tab-btn${moduleTab === 'cards' ? ' active' : ''}" onclick="setModuleTab('cards')">Flashcards</button>
        <button class="tab-btn${moduleTab === 'quiz' ? ' active' : ''}" onclick="setModuleTab('quiz')">Practice</button>
      </div>

      ${panel}

      <div class="module-footer">
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${prev ? `<button class="btn btn-secondary btn-sm" onclick="navigate('module','${prev.id}')">← Previous</button>` : ''}
          ${next ? `<button class="btn btn-secondary btn-sm" onclick="navigate('module','${next.id}')">Next →</button>` : ''}
        </div>
        <button class="btn ${done ? 'btn-success' : 'btn-primary'}" onclick="toggleComplete('${mod.id}')">${done ? '✓ Marked complete' : 'Mark lesson complete'}</button>
      </div>`;
  }

  function renderFlashcards(mod) {
    const card = mod.flashcards[flashIndex];
    if (!card) return '<p>No flashcards.</p>';
    return `
      <p style="font-size:14px;color:var(--text-secondary);margin-bottom:8px">Click the card to flip. Answer in your head before revealing.</p>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:16px"><kbd>Space</kbd> flip · <kbd>←</kbd> <kbd>→</kbd> previous / next</p>
      <div class="flashcard-stage">
        <div class="flashcard${flashFlipped ? ' flipped' : ''}" onclick="flipCard()" role="button" tabindex="0" aria-label="Flashcard">
          <div class="flashcard-face flashcard-front">
            <div class="fc-label">Question</div>
            <div class="fc-text">${escapeHtml(card.front)}</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="fc-label">Answer</div>
            <div class="fc-text">${escapeHtml(card.back)}</div>
          </div>
        </div>
      </div>
      <div class="fc-controls">
        <button class="btn btn-secondary btn-sm" onclick="prevCard()" ${flashIndex === 0 ? 'disabled' : ''}>← Previous</button>
        <span class="fc-progress">${flashIndex + 1} / ${mod.flashcards.length}</span>
        <button class="btn btn-secondary btn-sm" onclick="nextCard()" ${flashIndex >= mod.flashcards.length - 1 ? 'disabled' : ''}>Next →</button>
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
          ? '<div class="quiz-feedback ok">Correct—well done.</div>'
          : `<div class="quiz-feedback no">Not quite. The correct answer is: ${escapeHtml(q.options[q.correct])}</div>`;
      }
      return `<div class="card quiz-item"><div class="quiz-q">${i + 1}. ${escapeHtml(q.question)}</div><div class="quiz-options">${opts}</div>${feedback}</div>`;
    }).join('');

    const allDone = mod.quiz.every((_, i) => answers[i] !== undefined);
    const score = mod.quiz.filter((q, i) => answers[i] === q.correct).length;

    return `
      <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">Exam-level practice questions for this topic. Answer each one, then review what you missed before moving on.</p>
      ${items}
      ${allDone ? `<div class="callout callout-tip"><strong>Practice complete — ${score}/${mod.quiz.length}</strong>${score === mod.quiz.length ? ' Perfect score! You\'re ready to move on.' : score >= mod.quiz.length * 0.75 ? ' Strong result. Review the ones you missed, then move on.' : ' Keep reviewing — retake this drill until you\'re hitting 10/12 or better.'}</div>` : ''}`;
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
    if (now) showToast('Lesson marked complete — nice work.');
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
        <div class="eyebrow">Practice exam</div>
        <h1 class="page-title">Timed Practice Exam</h1>
        <p class="page-lead" style="margin:0 auto">Simulates the official ${EXAM.questions}-question, ${EXAM.minutes}-minute citizenship test. Select the best answer for each question.</p>
        <div class="card test-rules card-pad">
          <ul class="fact-list">
            <li>${EXAM.questions} multiple-choice questions drawn from the full question bank</li>
            <li>${EXAM.minutes}-minute countdown timer (${EXAM.format})</li>
            <li>Passing score: ${EXAM.passScore} correct (${EXAM.passPercent}%)—same as the official exam</li>
          </ul>
        </div>
        <button class="btn btn-primary" style="padding:14px 32px;font-size:16px" onclick="startTest()">Begin practice exam</button>
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
      return `<div class="card mcq-card">
        <div class="mcq-category">${escapeHtml(q.category)}</div>
        <div class="mcq-question">Question ${i + 1}. ${escapeHtml(q.question)}</div>
        <div class="quiz-options">${opts}</div>
      </div>`;
    }).join('');

    document.getElementById('page').innerHTML = `
      <div class="test-header">
        <div class="${timerCls}" id="test-timer">${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}</div>
        <div class="test-progress">
          <div class="test-progress-label">${answered} of ${testQuestions.length} answered</div>
          <div class="test-progress-bar"><div class="test-progress-fill" style="width:${pct}%"></div></div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="submitTest()" ${answered === 0 ? 'disabled' : ''}>Submit exam</button>
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
      .map(q => ({ question: q.question, answer: q.options[q.correct], category: q.category }));
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
    const verdict = passing ? 'You meet the passing threshold—excellent work.' : r.score >= EXAM.passScore - 3 ? 'Close to passing—review your weaker topics and try again.' : 'More study recommended—work through lessons and flashcards.';

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
          <div class="wrongs-title">Lock these in before test day</div>
          <p class="wrongs-sub">These came up in your last practice — a quick review and you're golden.</p>
          ${wrongs.map(w => `<div class="wrong-item">
            <div class="wrong-q">${escapeHtml(w.question)}</div>
            <div class="wrong-a">${escapeHtml(w.answer)}</div>
          </div>`).join('')}
        </div>` : '';

      readinessBlock = `
        <div class="ready-block">
          <div class="ready-heading">You're ready for the real thing. 🍁</div>
          <p class="ready-body">Your practice score clears the official passing threshold. You've put in the work — go book it.</p>
          <div class="canoo-card">
            <div class="canoo-badge">New citizen perk</div>
            <div class="canoo-content">
              <div class="canoo-title">Once you pass — download Canoo</div>
              <p class="canoo-body">Canoo is a free app for new Canadian citizens, giving you access to Parks Canada, museums, cultural sites, and hundreds of experiences across the country. Eligible within your first year of citizenship.</p>
              <a href="https://canoo.ca" target="_blank" rel="noopener noreferrer" class="canoo-link">Learn more at canoo.ca →</a>
            </div>
          </div>
          ${wrongsHtml}
        </div>`;
    }

    document.getElementById('page').innerHTML = `
      <div class="eyebrow">Exam complete</div>
      <div class="card results-hero">
        <div class="results-score ${scoreCls}">${r.score} / ${r.total}</div>
        <div class="results-detail">${pct}% · Official pass mark is ${EXAM.passPercent}% (${EXAM.passScore}/${EXAM.questions})</div>
        <div class="results-verdict">${verdict}</div>
        <div class="results-detail" style="margin-top:8px">Time: ${formatTime(r.time)} · ${r.date}</div>
        <div class="breakdown-grid">${bd}</div>
      </div>
      ${readinessBlock}
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="resetTest()">Take another exam</button>
        <button class="btn btn-secondary" onclick="navigate('home')">Dashboard</button>
        <button class="btn btn-secondary" onclick="navigate('results')">View history</button>
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
          <h3>No practice exams yet</h3>
          <p>Complete a timed practice exam to track your readiness over time.</p>
          <button class="btn btn-primary" style="margin-top:16px" onclick="navigate('test')">Start practice exam</button>
        </div>`;
      return;
    }
    const avg = Math.round(tests.reduce((s, t) => s + t.score / t.total, 0) / tests.length * 100);
    const best = Math.max(...tests.map(t => Math.round(t.score / t.total * 100)));
    const rows = tests.map((t, i) => {
      const p = Math.round(t.score / t.total * 100);
      const cls = p >= 75 ? 'pass' : p >= 60 ? 'near' : 'fail';
      return `<div class="row"><span>${t.date}${i === 0 ? ' · latest' : ''}</span><span class="results-score ${cls}" style="font-size:1rem">${t.score}/${t.total}</span><span>${formatTime(t.time)}</span><span>${p}%</span></div>`;
    }).join('');

    document.getElementById('page').innerHTML = `
      <div class="eyebrow">Progress</div>
      <h1 class="page-title">Practice Exam History</h1>
      <div class="grid-3" style="margin:24px 0">
        ${statCard(tests.length, 'Exams taken')}
        ${statCard(best + '%', 'Best score')}
        ${statCard(avg + '%', 'Average score')}
      </div>
      <div class="card history-table">
        <div class="row header"><span>Date</span><span>Score</span><span>Time</span><span>Percent</span></div>
        ${rows}
      </div>
      <div style="margin-top:20px"><button class="btn btn-primary" onclick="navigate('test')">Take another exam</button></div>`;
  }

  function statCard(val, label) {
    return `<div class="card stat-card"><div class="stat-value" style="font-size:1.5rem">${val}</div><div class="stat-label">${label}</div></div>`;
  }

  // ── MAP ──────────────────────────────────────────────────────────────────
  const PROVINCES = window.COURSE.provinces;
  let mapLayer = 'regions';
  let mapSelected = null;

  const REGION_COLORS = { north:'#8aafc0', west:'#7baa82', prairies:'#c4a35a', central:'#8899c8', atlantic:'#7ba8bb' };
  const REGION_NAMES  = { north:'Northern Canada', west:'British Columbia', prairies:'Prairie Provinces', central:'Central Canada', atlantic:'Atlantic Canada' };

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
    const joinedText = p.type === 'territory' ? `Became territory: ${p.joined}` : `Joined Confederation: ${p.joined}`;
    const factsHtml = p.facts.map(f => `<li>${escapeHtml(f)}</li>`).join('');
    const tagsHtml = p.tags.map(t => `<span class="map-tag">${escapeHtml(t)}</span>`).join('');
    const indigenousHtml = p.indigenous.length
      ? `<div class="map-indigenous-note">🌿 Indigenous: ${p.indigenous.map(escapeHtml).join('; ')}</div>` : '';
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
      <div class="map-tip"><div class="map-tip-label">⚡ Exam tip</div>${escapeHtml(p.examTip)}</div>
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
        ['#5b8fc9','Inuit territory'],['#c4862a','Métis territory'],['#7db37d','First Nations (all)']
      ].map(([c,l]) => `<span class="leg-item"><span class="leg-dot" style="background:${c}"></span>${l}</span>`).join('');
    }
    // history
    return [
      ['#C8102E','1867 (founding)'],['#e05570','1870'],['#e87a55','1871'],['#e8a040','1873'],
      ['#7ab37d','1898'],['#8899c8','1905'],['#aa6dc8','1949'],['#555','1999']
    ].map(([c,l]) => `<span class="leg-item"><span class="leg-dot" style="background:${c}"></span>${l}</span>`).join('');
  }

  function renderMap() {
    document.getElementById('page').innerHTML = `
      <div class="hero-block">
        <div class="eyebrow">Visual study aid</div>
        <h1 class="page-title">Canada — Interactive Map</h1>
        <p class="page-lead">Click any province or territory to see exam-relevant facts. Use layers to study geography, Indigenous peoples, and history.</p>
      </div>
      <div class="map-layers">
        <button class="layer-btn${mapLayer==='regions'?' active':''}" data-layer="regions" onclick="setMapLayer('regions')">Regions</button>
        <button class="layer-btn${mapLayer==='indigenous'?' active':''}" data-layer="indigenous" onclick="setMapLayer('indigenous')">Indigenous peoples</button>
        <button class="layer-btn${mapLayer==='history'?' active':''}" data-layer="history" onclick="setMapLayer('history')">When they joined</button>
      </div>
      <div class="map-layout">
        <div class="map-svg-wrap">${buildMapSVG()}</div>
        <div class="map-info" id="map-info">
          <div class="map-info-placeholder"><div style="font-size:2.2rem">🍁</div><div style="margin-top:10px;font-weight:700;font-size:15px">Click a province or territory</div><div style="margin-top:4px;color:var(--text-muted);font-size:13px">See exam facts, Indigenous peoples, and when it joined</div></div>
        </div>
      </div>
      <div class="map-legend"><span class="map-legend-label">Legend:</span>${buildLegend()}</div>`;
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

  function showSupportModal() {
    const overlay = document.createElement('div');
    overlay.id = 'support-overlay';
    overlay.className = 'support-overlay';
    overlay.innerHTML = `
      <div class="support-modal" role="dialog" aria-modal="true" aria-labelledby="support-heading">
        <button class="support-x" onclick="dismissSupport()" aria-label="Close">×</button>
        <div class="support-leaf">🍁</div>
        <h2 class="support-heading" id="support-heading">You're ready.</h2>
        <p class="support-body">You just hit passing on a full practice exam. The lessons, the flashcards, all of it — it's working. You put in the work.</p>
        <p class="support-ask">This guide is free and always will be. If it helped you get here, you decide what it's worth.</p>
        <div class="support-slider-section">
          <input type="range" id="support-slider" class="support-slider" min="0" max="50" value="10" step="1">
          <div class="support-marks"><span>Free</span><span>$10</span><span>$25</span><span>$50</span></div>
          <div class="support-amount-row">
            <span class="support-amount" id="support-amount">$10</span>
            <span class="support-amount-sep">·</span>
            <input type="number" id="support-custom" class="support-custom" min="0" max="9999" placeholder="or type amount">
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
          <p>That's completely fine.</p>
          <p>I built this because I wanted to make the citizenship test less overwhelming. If it helped you get here — that's everything.</p>
          <p class="support-farewell-sign">Go ace the real thing. Canada's lucky to have you. Good luck. 🍁</p>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:8px" onclick="closeSupportOverlay()">Close</button>`;
    } else {
      const labels = [[4,'That\'s a kind thought.'],[9,'Buy me a coffee. Really sweet of you.'],[19,'That\'s genuinely kind of you.'],[34,'This is generous. Thank you.'],[50,'You didn\'t have to. This means a lot.'],[Infinity,'Incredibly generous. Thank you so much.']];
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
          <span class="support-qr-note">On your phone? Scan for Apple Pay, Visa, or Mastercard via Ko-fi.</span>
        </div>
        <button class="support-no-thanks" onclick="dismissSupport()">I'd rather not right now</button>`;
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
    tlState = {
      pairs: shuffle(TIMELINE_PAIRS),
      years: shuffle(TIMELINE_PAIRS.map(p => p.year)),
      solved: new Set(),
      selected: null,
    };
  }

  function renderTimeline() {
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

    document.getElementById('page').innerHTML = `
      <div class="hero-block">
        <div class="eyebrow">Interactive practice</div>
        <h1 class="page-title">Timeline Match</h1>
        <p class="page-lead">Tap a year to select it, then tap its matching event.</p>
      </div>

      ${allSolved ? `<div class="tl-success-banner">
        🎉 All ${pairs.length} dates matched — Canadian history unlocked.
        <button class="btn btn-secondary" style="margin-left:16px" onclick="tlReset()">Play again</button>
      </div>` : ''}

      <div class="tl-pool-card">
        <div class="tl-pool-label">Select a year</div>
        <div class="tl-pool">${chips}</div>
      </div>

      <div class="tl-progress-row">
        <div class="tl-progress-track"><div class="tl-progress-fill" style="width:${pct}%"></div></div>
        <div class="tl-progress-label">${solved.size} <span>/ ${pairs.length}</span></div>
      </div>

      <div class="tl-events-list">${rows}</div>

      <div class="tl-hint">
        ${selected
          ? `<span class="tl-hint-active"><em>${selected}</em> selected — now tap its event</span>`
          : allSolved ? `<span>All matched. Well done.</span>` : `<span>Tap a year above to begin</span>`}
      </div>
    `;
  }

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

  function render() {
    renderSidebar();
    if (view === 'home') renderHome();
    else if (view === 'module') renderModule();
    else if (view === 'test') renderTest();
    else if (view === 'results') renderResults();
    else if (view === 'map') renderMap();
    else if (view === 'timeline') renderTimeline();
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
    bar.title = 'Click for another fact';
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
