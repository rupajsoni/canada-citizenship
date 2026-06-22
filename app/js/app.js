/* Canada Citizenship Prep — application logic */
(function () {
  'use strict';

  const CONFIG = { tipsUrl: '', partnersUrl: '' };
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
        <button class="tab-btn${moduleTab === 'quiz' ? ' active' : ''}" onclick="setModuleTab('quiz')">Check understanding</button>
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
      <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">Answer all questions without guessing randomly—this checks understanding before you move on.</p>
      ${items}
      ${allDone ? `<div class="callout callout-tip"><strong>Quiz complete</strong>You scored ${score} out of ${mod.quiz.length}. Review flashcards for any missed concepts.</div>` : ''}`;
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
    addTestResult({
      date: new Date().toLocaleDateString('en-CA'),
      score, total: testQuestions.length, time: timeTaken, breakdown
    });
    renderTestResults();
  };

  function renderTestResults() {
    const r = testHistory()[0];
    if (!r) { navigate('results'); return; }
    const pct = Math.round(r.score / r.total * 100);
    const scoreCls = pct >= 75 ? 'pass' : pct >= 60 ? 'near' : 'fail';
    const verdict = r.score >= EXAM.passScore ? 'You meet the passing threshold—excellent work.' : r.score >= EXAM.passScore - 3 ? 'Close to passing—review your weaker topics and try again.' : 'More study recommended—work through lessons and flashcards.';

    const bd = Object.entries(r.breakdown || {}).map(([cat, v]) => {
      const ratio = v.right / v.total;
      const cls = ratio === 1 ? 'pass' : ratio >= 0.6 ? 'near' : 'fail';
      return `<div class="breakdown-cell"><div class="breakdown-name">${escapeHtml(cat)}</div><div class="breakdown-val ${cls}">${v.right}/${v.total}</div></div>`;
    }).join('');

    document.getElementById('page').innerHTML = `
      <div class="eyebrow">Exam complete</div>
      <div class="card results-hero">
        <div class="results-score ${scoreCls}">${r.score} / ${r.total}</div>
        <div class="results-detail">${pct}% · Official pass mark is ${EXAM.passPercent}% (${EXAM.passScore}/${EXAM.questions})</div>
        <div class="results-verdict">${verdict}</div>
        <div class="results-detail" style="margin-top:8px">Time: ${formatTime(r.time)} · ${r.date}</div>
        <div class="breakdown-grid">${bd}</div>
      </div>
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

  function render() {
    renderSidebar();
    if (view === 'home') renderHome();
    else if (view === 'module') renderModule();
    else if (view === 'test') renderTest();
    else if (view === 'results') renderResults();
    else if (view === 'map') renderMap();
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

  (function initLinks() {
    const tips = document.getElementById('lnk-tips');
    const partners = document.getElementById('lnk-partners');
    if (CONFIG.tipsUrl) tips.href = CONFIG.tipsUrl;
    else tips.addEventListener('click', e => { e.preventDefault(); });
    if (CONFIG.partnersUrl) partners.href = CONFIG.partnersUrl;
    else partners.addEventListener('click', e => { e.preventDefault(); });
  })();

  render();
})();
