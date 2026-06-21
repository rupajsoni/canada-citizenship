/* Deterministic lesson section renderers — structured data only, no free-form HTML */
window.LessonRender = {
  all(sections, esc) {
    if (!sections || !sections.length) return '';
    return sections.map(s => this.one(s, esc)).join('');
  },

  one(sec, esc) {
    const title = `<div class="content-section"><h3 class="section-title">${esc(sec.title)}</h3>`;
    let body = '';
    const type = sec.type || (sec.items ? 'list' : sec.events ? 'timeline' : 'list');
    switch (type) {
      case 'cards': body = this.cards(sec.cards, esc); break;
      case 'timeline': body = this.timeline(sec.events, esc); break;
      case 'table': body = this.table(sec.headers, sec.rows, esc); break;
      case 'compare': body = this.compare(sec.columns, esc); break;
      case 'checklist': body = this.checklist(sec.items, esc); break;
      case 'statstrip': body = this.statstrip(sec.stats, esc); break;
      default: body = this.list(sec.items || [], esc);
    }
    return title + `<div class="section-body">${body}</div></div>`;
  },

  list(items, esc) {
    return `<div class="card"><ul class="fact-list">${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`;
  },

  checklist(items, esc) {
    return `<div class="card checklist">${items.map(i => `<div class="check-item"><span class="check-icon" aria-hidden="true"></span><span>${esc(i)}</span></div>`).join('')}</div>`;
  },

  cards(cards, esc) {
    return `<div class="card-grid">${cards.map(c => `
      <div class="info-card">
        ${c.num ? `<div class="info-card-num">${c.num}</div>` : ''}
        ${c.tag ? `<div class="info-card-tag">${esc(c.tag)}</div>` : ''}
        <div class="info-card-title">${esc(c.title)}</div>
        <div class="info-card-body">${esc(c.body)}</div>
      </div>`).join('')}</div>`;
  },

  timeline(events, esc) {
    return `<div class="card timeline">${events.map((e, i) => `
      <div class="tl-item${i === events.length - 1 ? ' last' : ''}">
        <div class="tl-marker"><span class="tl-dot"></span></div>
        <div class="tl-content">
          <div class="tl-date">${esc(e.date)}</div>
          <div class="tl-text">${esc(e.text)}</div>
        </div>
      </div>`).join('')}</div>`;
  },

  table(headers, rows, esc) {
    return `<div class="card table-wrap"><table class="data-table"><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  },

  compare(columns, esc) {
    return `<div class="compare-grid">${columns.map(col => `
      <div class="compare-col card">
        <div class="compare-heading">${esc(col.heading)}</div>
        <ul class="compare-list">${col.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      </div>`).join('')}</div>`;
  },

  statstrip(stats, esc) {
    return `<div class="statstrip">${stats.map(s => `<div class="statstrip-item"><div class="statstrip-val">${esc(s.value)}</div><div class="statstrip-lbl">${esc(s.label)}</div></div>`).join('')}</div>`;
  }
};
