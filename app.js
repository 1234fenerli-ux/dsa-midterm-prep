const app = document.getElementById("app");

const state = {
  selectedStudyIndex: 0,
  mcqStats: {
    correct: 0,
    wrong: 0,
    answered: 0
  }
};

function navigate(page) {
  setActiveNav(page);

  if (page === "home") renderHome();
  if (page === "study") renderStudy();
  if (page === "exam") renderExamMenu();
}

function setActiveNav(page) {
  document.getElementById("nav-home")?.classList.remove("active");
  document.getElementById("nav-study")?.classList.remove("active");
  document.getElementById("nav-exam")?.classList.remove("active");

  if (page === "home") document.getElementById("nav-home")?.classList.add("active");
  if (page === "study") document.getElementById("nav-study")?.classList.add("active");
  if (page === "exam") document.getElementById("nav-exam")?.classList.add("active");
}

function renderHome() {
  app.innerHTML = `
    <section style="max-width:960px;margin:60px auto;text-align:center;">
      <h2 style="font-size:48px;margin-bottom:16px;">Prepare smarter. Understand faster. Perform better.</h2>
      <p style="font-size:20px;color:#666;line-height:1.7;max-width:760px;margin:0 auto;">
        A DSA midterm prep site with lesson-based study notes, classic questions,
        multiple-choice practice, and a mock exam that generates 7 classic + 3 test questions.
      </p>
      <div style="margin-top:28px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button onclick="navigate('study')" style="padding:12px 18px;border:none;border-radius:12px;background:#8c1738;color:#fff;cursor:pointer;font-weight:700;">Go to Study Mode</button>
        <button onclick="navigate('exam')" style="padding:12px 18px;border:1px solid #ccc;border-radius:12px;background:#fff;cursor:pointer;font-weight:700;">Go to Exam Mode</button>
      </div>
    </section>

    <section style="max-width:1100px;margin:30px auto 0;display:grid;grid-template-columns:repeat(3,1fr);gap:18px;">
      <article style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:22px;">
        <div style="font-size:12px;font-weight:700;color:#8c1738;margin-bottom:10px;">STUDY</div>
        <h3 style="margin-top:0;">Lesson-Based Notes</h3>
        <p style="color:#666;line-height:1.6;">Study Lesson 1, Lesson 2, and Lesson 3 in a sidebar-based layout.</p>
      </article>
      <article style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:22px;">
        <div style="font-size:12px;font-weight:700;color:#8c1738;margin-bottom:10px;">EXAM</div>
        <h3 style="margin-top:0;">Classic + MCQ</h3>
        <p style="color:#666;line-height:1.6;">Practice open-ended questions and multiple-choice questions separately.</p>
      </article>
      <article style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:22px;background:#fff8f4;">
        <div style="font-size:12px;font-weight:700;color:#8c1738;margin-bottom:10px;">MOCK MIDTERM</div>
        <h3 style="margin-top:0;">Randomized Each Time</h3>
        <p style="color:#666;line-height:1.6;">Every mock exam pulls 7 classic and 3 test questions from the pool.</p>
      </article>
    </section>
  `;
}

function renderStudy() {
  const lessons = window.studyLessons || [];
  if (!lessons.length) {
    app.innerHTML = `<section style="max-width:900px;margin:60px auto;"><h2>Study content is missing</h2></section>`;
    return;
  }

  if (state.selectedStudyIndex >= lessons.length) state.selectedStudyIndex = 0;
  const current = lessons[state.selectedStudyIndex];

  app.innerHTML = `
    <div style="display:grid;grid-template-columns:300px 1fr;gap:20px;max-width:1200px;margin:40px auto;">
      <aside style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:18px;">
        <h3 style="margin-top:0;">Study Topics</h3>
        ${lessons.map((lesson, i) => `
          <button
            onclick="selectStudy(${i})"
            style="
              display:block;
              width:100%;
              text-align:left;
              margin-bottom:10px;
              padding:12px;
              border:none;
              border-radius:12px;
              cursor:pointer;
              background:${i === state.selectedStudyIndex ? '#f7e9ed' : 'transparent'};
              color:${i === state.selectedStudyIndex ? '#8c1738' : '#333'};
              font-weight:${i === state.selectedStudyIndex ? '700' : '400'};
            "
          >
            ${lesson.title}
          </button>
        `).join("")}
      </aside>

      <section style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:28px;">
        <div style="color:#888;text-transform:uppercase;font-size:13px;font-weight:700;">${current.lesson}</div>
        <h2 style="font-size:42px;color:#8c1738;margin:10px 0 16px;">${current.title}</h2>
        <hr style="border:none;border-top:1px solid #ddd;margin-bottom:20px;">
        <ul style="line-height:1.8;font-size:18px;">
          ${current.points.map(point => `<li>${point}</li>`).join("")}
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
  const catalog = window.examCatalog || [];
  if (!catalog.length) {
    app.innerHTML = `<section style="max-width:900px;margin:60px auto;"><h2>Exam content is missing</h2></section>`;
    return;
  }

  app.innerHTML = `
    <section style="max-width:1200px;margin:40px auto;">
      <h2 style="font-size:42px;color:#8c1738;margin-bottom:10px;">Exam Mode</h2>
      <p style="color:#666;font-size:18px;margin-bottom:24px;">Choose a format.</p>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;">
        ${catalog.map(item => `
          <article style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:22px;">
            <div style="font-size:28px;margin-bottom:14px;">${item.icon}</div>
            <h3 style="margin-top:0;">${item.title}</h3>
            <p style="color:#666;line-height:1.6;">${item.description}</p>
            <div style="margin-top:12px;color:#999;font-size:13px;font-weight:700;">${item.count}</div>
            <div style="margin-top:16px;">
              <button onclick="openExam('${item.id}')" style="padding:10px 14px;border:none;border-radius:12px;background:${item.highlight ? '#8c1738' : '#111'};color:#fff;cursor:pointer;">
                Open
              </button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function openExam(id) {
  if (id === "mcq-all") renderMCQ();
  else if (id === "classic-all") renderClassic();
  else if (id === "mock-midterm") renderMock();
}

function renderMCQ() {
  const list = window.mcqPool || [];
  state.mcqStats = { correct: 0, wrong: 0, answered: 0 };

  if (!list.length) {
    app.innerHTML = `<section style="max-width:900px;margin:60px auto;"><h2>No MCQ questions found</h2></section>`;
    return;
  }

  app.innerHTML = `
    <section style="max-width:900px;margin:40px auto;">
      <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:18px;">
        <h2 style="margin:0;">Multiple Choice</h2>
        <div id="mcq-stats" style="display:flex;gap:10px;flex-wrap:wrap;">
          ${renderMCQStats()}
        </div>
      </div>

      ${list.map((q, i) => `
        <article style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:22px;margin-bottom:18px;">
          <div style="color:#888;font-size:13px;font-weight:700;">${q.lesson}</div>
          <h3>${q.question}</h3>
          <div style="display:grid;gap:10px;">
            ${q.options.map(opt => `
              <button onclick="checkMCQ(${i}, '${escapeQuotes(opt)}')" id="mcq-${i}-${safeId(opt)}"
                style="text-align:left;padding:12px;border:1px solid #ddd;border-radius:12px;background:#fff;cursor:pointer;">
                ${opt}
              </button>
            `).join("")}
          </div>

          <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;">
            <button onclick="toggleMCQAnswer(${i})" style="padding:9px 12px;border:1px solid #ccc;border-radius:10px;background:#fff;cursor:pointer;">
              Show / Hide Answer
            </button>
          </div>

          <div id="answerbox-${i}" style="display:none;margin-top:12px;padding:12px;border:1px solid #ddd;border-radius:12px;background:#fafafa;">
            <strong>Correct answer:</strong> ${q.answer}<br>
            <span>${q.explanation}</span>
          </div>

          <div id="feedback-${i}" style="margin-top:12px;"></div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderMCQStats() {
  return `
    <div style="padding:8px 12px;border-radius:999px;background:#f3f3f5;">Answered: <strong>${state.mcqStats.answered}</strong></div>
    <div style="padding:8px 12px;border-radius:999px;background:#eef8f1;">Correct: <strong>${state.mcqStats.correct}</strong></div>
    <div style="padding:8px 12px;border-radius:999px;background:#fff0f0;">Wrong: <strong>${state.mcqStats.wrong}</strong></div>
  `;
}

function updateMCQStats() {
  const el = document.getElementById("mcq-stats");
  if (el) el.innerHTML = renderMCQStats();
}

function toggleMCQAnswer(index) {
  const box = document.getElementById(`answerbox-${index}`);
  if (!box) return;
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function checkMCQ(index, selected) {
  const q = window.mcqPool[index];
  const feedback = document.getElementById(`feedback-${index}`);
  if (feedback.dataset.done === "1") return;
  feedback.dataset.done = "1";

  q.options.forEach(opt => {
    const btn = document.getElementById(`mcq-${index}-${safeId(opt)}`);
    if (!btn) return;
    btn.disabled = true;
    if (opt === q.answer) btn.style.background = "#e8f7ee";
    if (opt === selected && opt !== q.answer) btn.style.background = "#fdecec";
  });

  state.mcqStats.answered += 1;
  if (selected === q.answer) state.mcqStats.correct += 1;
  else state.mcqStats.wrong += 1;
  updateMCQStats();

  feedback.innerHTML = selected === q.answer
    ? `<div style="padding:12px;border:1px solid #cde8d5;border-radius:12px;background:#f3fbf5;">Correct. ${q.explanation}</div>`
    : `<div style="padding:12px;border:1px solid #f0caca;border-radius:12px;background:#fff5f5;">Wrong. Correct answer: <strong>${q.answer}</strong>. ${q.explanation}</div>`;
}

function renderClassic() {
  const list = window.classicPool || [];
  if (!list.length) {
    app.innerHTML = `<section style="max-width:900px;margin:60px auto;"><h2>No classic questions found</h2></section>`;
    return;
  }

  app.innerHTML = `
    <section style="max-width:900px;margin:40px auto;">
      <h2>Classic Questions</h2>
      ${list.map((q, i) => `
        <article style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:22px;margin-bottom:18px;">
          <div style="color:#888;font-size:13px;font-weight:700;">${q.lesson}</div>
          <h3>${q.question}</h3>
          <textarea placeholder="Write your answer here..." style="width:100%;min-height:120px;margin-top:12px;padding:12px;border:1px solid #ddd;border-radius:12px;"></textarea>

          <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;">
            <button onclick="toggleClassicAnswer(${i})" style="padding:9px 12px;border:1px solid #ccc;border-radius:10px;background:#fff;cursor:pointer;">
              Show / Hide Answer Guide
            </button>
          </div>

          <div id="classic-answer-${i}" style="display:none;margin-top:14px;padding:14px;border:1px solid #ddd;border-radius:12px;background:#fafafa;">
            <strong>Expected key points</strong>
            <ul>
              ${q.points.map(point => `<li>${point}</li>`).join("")}
            </ul>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function toggleClassicAnswer(index) {
  const box = document.getElementById(`classic-answer-${index}`);
  if (!box) return;
  box.style.display = box.style.display === "none" ? "block" : "block" ? (box.style.display === "block" ? "none" : "block") : "none";
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderMock() {
  const cfg = window.examConfig || { classicCount: 7, testCount: 3 };
  const classic = shuffleArray(window.classicPool || []).slice(0, cfg.classicCount);
  const mcq = shuffleArray(window.mcqPool || []).slice(0, cfg.testCount);
  const questions = [
    ...mcq.map(q => ({ ...q, type: "mcq" })),
    ...classic.map(q => ({ ...q, type: "classic" }))
  ];

  let current = 0;
  let score = 0;
  let timer = 15 * 60;
  let intervalId = null;
  const savedClassicAnswers = [];

  function startTimer() {
    intervalId = setInterval(() => {
      timer--;
      const timerEl = document.getElementById("mock-timer");
      if (timerEl) timerEl.textContent = formatTime(timer);
      if (timer <= 0) {
        clearInterval(intervalId);
        finish();
      }
    }, 1000);
  }

  function draw() {
    const q = questions[current];
    if (!q) return;

    const progressPercent = Math.round((current / questions.length) * 100);

    app.innerHTML = `
      <section style="max-width:900px;margin:40px auto;">
        <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:16px;">
          <div>
            <h2 style="margin:0;">Mock Midterm</h2>
            <p style="margin:8px 0 0;color:#666;">Question ${current + 1} / ${questions.length}</p>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <div style="padding:10px 14px;border-radius:12px;background:#fff;border:1px solid #ddd;">Timer: <strong id="mock-timer">${formatTime(timer)}</strong></div>
            <div style="padding:10px 14px;border-radius:12px;background:#fff;border:1px solid #ddd;">MCQ Score: <strong>${score}</strong> / ${cfg.testCount}</div>
          </div>
        </div>

        <div style="height:12px;background:#ece8eb;border-radius:999px;overflow:hidden;margin-bottom:18px;">
          <div style="height:100%;width:${progressPercent}%;background:#8c1738;"></div>
        </div>

        <article style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:22px;">
          <div style="color:#888;font-size:13px;font-weight:700;">${q.lesson} · ${q.type.toUpperCase()}</div>
          <h3>${q.question}</h3>

          ${
            q.type === "mcq" ? `
              <div style="display:grid;gap:10px;margin-top:14px;">
                ${q.options.map(opt => `
                  <button onclick="answerMock('${escapeQuotes(opt)}')" style="text-align:left;padding:12px;border:1px solid #ddd;border-radius:12px;background:#fff;cursor:pointer;">
                    ${opt}
                  </button>
                `).join("")}
              </div>

              <div style="margin-top:14px;">
                <button onclick="toggleMockAnswer()" style="padding:9px 12px;border:1px solid #ccc;border-radius:10px;background:#fff;cursor:pointer;">
                  Show / Hide Answer
                </button>
              </div>

              <div id="mock-answer-box" style="display:none;margin-top:12px;padding:12px;border:1px solid #ddd;border-radius:12px;background:#fafafa;">
                <strong>Correct answer:</strong> ${q.answer}<br>
                <span>${q.explanation}</span>
              </div>
            ` : `
              <textarea id="mockClassicBox" placeholder="Write your answer here..." style="width:100%;min-height:140px;margin-top:14px;padding:12px;border:1px solid #ddd;border-radius:12px;"></textarea>

              <div style="margin-top:14px;">
                <button onclick="toggleMockClassicGuide()" style="padding:9px 12px;border:1px solid #ccc;border-radius:10px;background:#fff;cursor:pointer;">
                  Show / Hide Answer Guide
                </button>
              </div>

              <div id="mock-classic-guide" style="display:none;margin-top:14px;padding:14px;border:1px solid #ddd;border-radius:12px;background:#fafafa;">
                <strong>Expected key points</strong>
                <ul>
                  ${q.points.map(point => `<li>${point}</li>`).join("")}
                </ul>
              </div>

              <button onclick="nextClassicMock()" style="margin-top:14px;padding:10px 14px;border:none;border-radius:12px;background:#8c1738;color:#fff;cursor:pointer;">
                Next Question
              </button>
            `
          }
        </article>
      </section>
    `;
  }

  window.toggleMockAnswer = function() {
    const box = document.getElementById("mock-answer-box");
    if (!box) return;
    box.style.display = box.style.display === "none" ? "block" : "none";
  };

  window.toggleMockClassicGuide = function() {
    const box = document.getElementById("mock-classic-guide");
    if (!box) return;
    box.style.display = box.style.display === "none" ? "block" : "none";
  };

  window.answerMock = function(selected) {
    const q = questions[current];
    if (selected === q.answer) score++;
    current++;
    if (current < questions.length) draw();
    else finish();
  };

  window.nextClassicMock = function() {
    const box = document.getElementById("mockClassicBox");
    savedClassicAnswers.push(box ? box.value.trim() : "");
    current++;
    if (current < questions.length) draw();
    else finish();
  };

  function finish() {
    if (intervalId) clearInterval(intervalId);

    const totalClassicAnswered = savedClassicAnswers.filter(x => x.length > 0).length;
    const totalClassic = cfg.classicCount;
    const totalMCQ = cfg.testCount;
    const percent = Math.round((score / totalMCQ) * 100);

    app.innerHTML = `
      <section style="max-width:900px;margin:60px auto;">
        <article style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:30px;text-align:center;">
          <h2 style="margin-top:0;">Mock Midterm Complete</h2>
          <p style="font-size:34px;font-weight:700;color:#8c1738;margin:12px 0;">${score} / ${totalMCQ}</p>
          <p style="color:#666;">MCQ score</p>

          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:24px;text-align:left;">
            <div style="padding:16px;border:1px solid #ddd;border-radius:14px;background:#fafafa;">
              <strong>Correct</strong>
              <div style="font-size:24px;margin-top:6px;">${score}</div>
            </div>
            <div style="padding:16px;border:1px solid #ddd;border-radius:14px;background:#fafafa;">
              <strong>Wrong</strong>
              <div style="font-size:24px;margin-top:6px;">${totalMCQ - score}</div>
            </div>
            <div style="padding:16px;border:1px solid #ddd;border-radius:14px;background:#fafafa;">
              <strong>Success</strong>
              <div style="font-size:24px;margin-top:6px;">${percent}%</div>
            </div>
          </div>

          <div style="margin-top:18px;padding:16px;border:1px solid #ddd;border-radius:14px;background:#fafafa;text-align:left;">
            <strong>Classic answers written</strong>
            <div style="font-size:22px;margin-top:8px;">${totalClassicAnswered} / ${totalClassic}</div>
          </div>

          <div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            <button onclick="renderMock()" style="padding:12px 18px;border:none;border-radius:12px;background:#8c1738;color:#fff;cursor:pointer;font-weight:700;">
              Retry Mock
            </button>
            <button onclick="navigate('exam')" style="padding:12px 18px;border:1px solid #ccc;border-radius:12px;background:#fff;cursor:pointer;font-weight:700;">
              Back to Exam
            </button>
          </div>
        </article>
      </section>
    `;
  }

  startTimer();
  draw();
}

function formatTime(totalSeconds) {
  const safe = Math.max(0, totalSeconds);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
window.toggleMCQAnswer = toggleMCQAnswer;
window.toggleClassicAnswer = toggleClassicAnswer;
window.renderMock = renderMock;

navigate("home");
