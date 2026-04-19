const app = document.getElementById("app");

const state = {
  page: "home",
  selectedStudyIndex: 0
};

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function setActiveNav(page) {
  const home = document.getElementById("nav-home");
  const study = document.getElementById("nav-study");
  const exam = document.getElementById("nav-exam");

  if (!home || !study || !exam) return;

  home.classList.remove("active");
  study.classList.remove("active");
  exam.classList.remove("active");

  if (page === "home") home.classList.add("active");
  if (page === "study") study.classList.add("active");
  if (page === "exam") exam.classList.add("active");
}

function navigate(page) {
  state.page = page;
  setActiveNav(page);

  if (page === "home") renderHome();
  if (page === "study") renderStudy();
  if (page === "exam") renderExamMenu();
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <h2>Prepare smarter. Understand faster. Perform better.</h2>
      <p>
        A clean DSA midterm prep site with lesson-based study mode,
        exam practice, and a randomized mock exam that generates
        <strong>7 classic + 3 multiple-choice questions</strong> from a pool.
      </p>
      <div class="hero-actions">
        <button class="primary-btn" onclick="navigate('study')">Go to Study Mode →</button>
        <button class="secondary-btn" onclick="navigate('exam')">Go to Exam Mode →</button>
      </div>
    </section>

    <h2 class="section-heading">What’s Inside</h2>
    <p class="section-sub">
      Lesson-focused study notes, classic questions, multiple-choice sets,
      and a mock exam engine that generates a fresh exam each time.
    </p>

    <section class="grid-3">
      <article class="card">
        <div class="badge">Study</div>
        <h3>Lesson-Based Notes</h3>
        <p>Study Lesson 1, Lesson 2, and Lesson 3 through a sidebar-based layout.</p>
      </article>
      <article class="card">
        <div class="badge">Exam</div>
        <h3>Classic + MCQ</h3>
        <p>Practice open-ended questions and multiple-choice questions separately.</p>
      </article>
      <article class="card exam-card highlight">
        <div class="badge">Mock Midterm</div>
        <h3>Randomized Each Time</h3>
        <p>Every mock exam pulls <strong>7 classic</strong> and <strong>3 test</strong> questions from the pool.</p>
      </article>
    </section>
  `;
}

function renderStudy() {
  const lessons = safeArray(window.studyLessons);

  if (!lessons.length) {
    app.innerHTML = `
      <article class="result-card">
        <h2>Study content is missing</h2>
        <p class="small-note">Your <code>data.js</code> file does not currently provide a valid <code>studyLessons</code> array.</p>
      </article>
    `;
    return;
  }

  if (state.selectedStudyIndex >= lessons.length) {
    state.selectedStudyIndex = 0;
  }

  const grouped = {
    "Lesson 1": lessons.map((x, i) => ({ ...x, index: i })).filter(x => x.lesson === "Lesson 1"),
    "Lesson 2": lessons.map((x, i) => ({ ...x, index: i })).filter(x => x.lesson === "Lesson 2"),
    "Lesson 3": lessons.map((x, i) => ({ ...x, index: i })).filter(x => x.lesson === "Lesson 3"),
    "Lesson 4": lessons.map((x, i) => ({ ...x, index: i })).filter(x => x.lesson === "Lesson 4"),
    "Lesson 5": lessons.map((x, i) => ({ ...x, index: i })).filter(x => x.lesson === "Lesson 5")
  };

  const current = lessons[state.selectedStudyIndex];

  app.innerHTML = `
    <div class="study-layout">
      <aside class="study-sidebar">
        <h3>Study Topics</h3>
        ${Object.entries(grouped)
          .filter(([, items]) => items.length)
          .map(([group, items]) => `
            <div class="lesson-group">
              <div class="lesson-group-title">${group}</div>
              ${items.map(item => `
                <button
                  class="lesson-link ${state.selectedStudyIndex === item.index ? "active" : ""}"
                  onclick="selectStudy(${item.index})"
                >
                  ${item.title}
                </button>
              `).join("")}
            </div>
          `).join("")}
      </aside>

      <section class="study-content">
        <div class="eyebrow">${current.lesson}</div>
        <h2>${current.title}</h2>
        <div class="divider"></div>
        <ul>
          ${safeArray(current.points).map(p => `<li>${p}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;
}

function selectStudy(index) {
  state.selectedStudyIndex = index;
  renderStudy();
}

function renderExamMenu() {
  const catalog = safeArray(window.examCatalog);

  if (!catalog.length) {
    app.innerHTML = `
      <article class="result-card">
        <h2>Exam content is missing</h2>
        <p class="small-note">Your <code>data.js</code> file does not currently provide a valid <code>examCatalog</code> array.</p>
      </article>
    `;
    return;
  }

  app.innerHTML = `
    <div class="exam-head">
      <h2>Exam Mode</h2>
      <p>Select a format. Practice by lesson, by type, or generate a randomized mock midterm.</p>
    </div>

    <section class="grid-3">
      ${catalog.map(item => `
        <article class="card exam-card ${item.highlight ? "highlight" : ""}">
          <div style="font-size:28px; margin-bottom:14px;">${item.icon || "•"}</div>
          <h3>${item.title || "Untitled"}</h3>
          <p>${item.description || ""}</p>
          <span class="count">${item.count || ""}</span>
          <div style="margin-top:16px;">
            <button class="${item.highlight ? "primary-btn" : "outline-btn"}" onclick="openExam('${item.id}')">Open →</button>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function openExam(id) {
  const mcq = safeArray(window.mcqPool);
  const classic = safeArray(window.classicPool);

  if (id === "mcq-all") return renderMCQ(mcq, "Multiple Choice — All Lessons");
  if (id === "mcq-1") return renderMCQ(mcq.filter(q => q.lesson === "Lesson 1"), "Multiple Choice — Lesson 1");
  if (id === "mcq-2") return renderMCQ(mcq.filter(q => q.lesson === "Lesson 2"), "Multiple Choice — Lesson 2");
  if (id === "mcq-3") return renderMCQ(mcq.filter(q => q.lesson === "Lesson 3"), "Multiple Choice — Lesson 3");

  if (id === "classic-all") return renderClassic(classic, "Classic Questions — All Lessons");
  if (id === "classic-1") return renderClassic(classic.filter(q => q.lesson === "Lesson 1"), "Classic Questions — Lesson 1");
  if (id === "classic-2") return renderClassic(classic.filter(q => q.lesson === "Lesson 2"), "Classic Questions — Lesson 2");
  if (id === "classic-3") return renderClassic(classic.filter(q => q.lesson === "Lesson 3"), "Classic Questions — Lesson 3");

  if (id === "mock-midterm") return renderMockMidterm();
}

function renderMCQ(list, title) {
  if (!list.length) {
    app.innerHTML = `
      <article class="result-card">
        <h2>${title}</h2>
        <p class="small-note">No questions found for this section.</p>
        <div class="actions-row">
          <button class="secondary-btn" onclick="navigate('exam')">← Back to Exam Menu</button>
        </div>
      </article>
    `;
    return;
  }

  app.innerHTML = `
    <div class="exam-head">
      <h2>${title}</h2>
      <p>Choose the correct answer. You get instant feedback for each question.</p>
    </div>

    ${list.map((q, i) => `
      <article class="question-card">
        <div class="question-meta">${q.lesson || ""} · Question ${i + 1}</div>
        <h3>${q.question}</h3>
        <div class="option-list">
          ${safeArray(q.options).map(opt => `
            <button class="option-btn" id="mcq-${i}-${safeId(opt)}"
              onclick="checkMCQ(${i}, '${escapeQuotes(opt)}', '__ACTIVE_MCQ__')">
              ${opt}
            </button>
          `).join("")}
        </div>
        <div id="feedback-${i}"></div>
      </article>
    `).join("")}

    <div class="actions-row">
      <button class="secondary-btn" onclick="navigate('exam')">← Back to Exam Menu</button>
    </div>
  `;

  window.__ACTIVE_MCQ__ = list;
}

function checkMCQ(index, selected, bucketName) {
  const list = safeArray(window[bucketName]);
  const q = list[index];
  if (!q) return;

  const feedback = document.getElementById(`feedback-${index}`);
  if (!feedback || feedback.dataset.done === "1") return;

  feedback.dataset.done = "1";

  safeArray(q.options).forEach(opt => {
    const btn = document.getElementById(`mcq-${index}-${safeId(opt)}`);
    if (!btn) return;
    btn.disabled = true;
    if (opt === q.answer) btn.classList.add("correct");
    if (opt === selected && opt !== q.answer) btn.classList.add("wrong");
  });

  if (selected === q.answer) {
    feedback.innerHTML = `<div class="feedback">Correct. ${q.explanation || ""}</div>`;
  } else {
    feedback.innerHTML = `<div class="feedback">Wrong. Correct answer: <strong>${q.answer}</strong>. ${q.explanation || ""}</div>`;
  }
}

function renderClassic(list, title) {
  if (!list.length) {
    app.innerHTML = `
      <article class="result-card">
        <h2>${title}</h2>
        <p class="small-note">No questions found for this section.</p>
        <div class="actions-row">
          <button class="secondary-btn" onclick="navigate('exam')">← Back to Exam Menu</button>
        </div>
      </article>
    `;
    return;
  }

  app.innerHTML = `
    <div class="exam-head">
      <h2>${title}</h2>
      <p>Write your own answer, then compare it with the expected key points.</p>
    </div>

    ${list.map((q, i) => `
      <article class="question-card">
        <div class="question-meta">${q.lesson || ""} · Classic Question ${i + 1}</div>
        <h3>${q.question}</h3>
        <textarea class="classic-input" placeholder="Write your answer here..."></textarea>
        <div class="classic-points">
          <strong>Expected key points</strong>
          <ul>
            ${safeArray(q.points).map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      </article>
    `).join("")}

    <div class="actions-row">
      <button class="secondary-btn" onclick="navigate('exam')">← Back to Exam Menu</button>
    </div>
  `;
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getRandomItems(arr, count) {
  return shuffleArray(arr).slice(0, count);
}

function renderMockMidterm() {
  const classic = safeArray(window.classicPool);
  const mcq = safeArray(window.mcqPool);
  const config = window.examConfig || { classicCount: 7, testCount: 3 };

  if (!classic.length || !mcq.length) {
    app.innerHTML = `
      <article class="result-card">
        <h2>Mock exam unavailable</h2>
        <p class="small-note">Your question pools are missing or invalid in <code>data.js</code>.</p>
        <div class="actions-row">
          <button class="secondary-btn" onclick="navigate('exam')">← Back to Exam Menu</button>
        </div>
      </article>
    `;
    return;
  }

  const selectedClassic = getRandomItems(classic, config.classicCount).map(q => ({ ...q, type: "classic" }));
  const selectedTests = getRandomItems(mcq, config.testCount).map(q => ({ ...q, type: "mcq" }));
  const mixedExam = shuffleArray([...selectedClassic, ...selectedTests]);

  let current = 0;
  let testCorrect = 0;
  let classicAnswered = 0;

  function draw() {
    const q = mixedExam[current];
    const progress = (current / mixedExam.length) * 100;

    app.innerHTML = `
      <div class="exam-head">
        <h2>Mock Midterm</h2>
        <p>Randomized exam generated from the pool: <strong>${config.classicCount} classic + ${config.testCount} multiple-choice</strong>.</p>
      </div>

      <div class="exam-toolbar">
        <div class="progress-wrap">
          <div class="progress-text">Progress: ${current + 1} / ${mixedExam.length}</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>
        </div>
        <div class="small-note">
          MCQ correct: <strong>${testCorrect}</strong> ·
          Classic answered: <strong>${classicAnswered}</strong>
        </div>
      </div>

      <article class="question-card">
        <div class="question-meta">${q.lesson || ""} · ${q.type === "classic" ? "Classic" : "Multiple Choice"} · Question ${current + 1}</div>
        <h3>${q.question}</h3>

        ${
          q.type === "classic"
            ? `
              <textarea id="classic-box" class="classic-input" placeholder="Write your answer here..."></textarea>
              <div class="classic-points">
                <strong>Expected key points</strong>
                <ul>${safeArray(q.points).map(p => `<li>${p}</li>`).join("")}</ul>
              </div>
              <div class="actions-row" style="justify-content:flex-start;">
                <button class="primary-btn" onclick="nextClassic()">Next Question →</button>
              </div>
            `
            : `
              <div class="option-list">
                ${safeArray(q.options).map(opt => `
                  <button class="option-btn" onclick="answerMockMCQ('${escapeQuotes(opt)}')">${opt}</button>
                `).join("")}
              </div>
            `
        }
      </article>
    `;
  }

  window.nextClassic = function () {
    const box = document.getElementById("classic-box");
    const val = box ? box.value.trim() : "";
    if (val !== "") classicAnswered += 1;
    current += 1;
    if (current < mixedExam.length) draw();
    else showMockResult();
  };

  window.answerMockMCQ = function (selected) {
    if (selected === mixedExam[current].answer) testCorrect += 1;
    current += 1;
    if (current < mixedExam.length) draw();
    else showMockResult();
  };

  function showMockResult() {
    app.innerHTML = `
      <article class="result-card">
        <h2>Mock Midterm Complete</h2>
        <div class="result-score">${testCorrect} / ${config.testCount}</div>
        <p class="small-note">Your score in the multiple-choice section</p>

        <div class="result-split">
          <div class="card">
            <h3>MCQ Performance</h3>
            <p><strong>Correct:</strong> ${testCorrect} / ${config.testCount}</p>
            <p class="small-note">These were automatically scored.</p>
          </div>
          <div class="card">
            <h3>Classic Performance</h3>
            <p><strong>Answered:</strong> ${classicAnswered} / ${config.classicCount}</p>
            <p class="small-note">Use the expected key points to self-evaluate your written answers.</p>
          </div>
        </div>

        <div class="actions-row">
          <button class="primary-btn" onclick="renderMockMidterm()">Generate New Mock Exam</button>
          <button class="secondary-btn" onclick="navigate('exam')">Back to Exam Menu</button>
        </div>
      </article>
    `;
  }

  draw();
}

function safeId(str) {
  return String(str).replace(/[^a-zA-Z0-9]/g, "_");
}

function escapeQuotes(str) {
  return String(str).replace(/'/g, "\\'");
}

window.navigate = navigate;
window.selectStudy = selectStudy;
window.openExam = openExam;
window.checkMCQ = checkMCQ;
window.renderMockMidterm = renderMockMidterm;

navigate("home");
