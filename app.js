const app = document.getElementById("app");

const state = {
  selectedStudyIndex: 0
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
    <section style="max-width:900px;margin:60px auto;text-align:center;">
      <h2 style="font-size:48px;margin-bottom:16px;">DSA Midterm Prep</h2>
      <p style="font-size:20px;color:#666;line-height:1.6;">
        Study core topics, practice classic questions, solve multiple-choice questions,
        and generate a mock midterm.
      </p>
      <div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button onclick="navigate('study')" style="padding:12px 18px;border:none;border-radius:12px;background:#8c1738;color:#fff;cursor:pointer;">Go to Study</button>
        <button onclick="navigate('exam')" style="padding:12px 18px;border:1px solid #ccc;border-radius:12px;background:#fff;cursor:pointer;">Go to Exam</button>
      </div>
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
  if (!list.length) {
    app.innerHTML = `<section style="max-width:900px;margin:60px auto;"><h2>No MCQ questions found</h2></section>`;
    return;
  }

  app.innerHTML = `
    <section style="max-width:900px;margin:40px auto;">
      <h2>Multiple Choice</h2>
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
          <div id="feedback-${i}" style="margin-top:12px;"></div>
        </article>
      `).join("")}
    </section>
  `;
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
          <div style="margin-top:14px;padding:14px;border:1px solid #ddd;border-radius:12px;background:#fafafa;">
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

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderMock() {
  const classic = (window.classicPool || []).slice(0, 7);
  const mcq = (window.mcqPool || []).slice(0, 3);
  const questions = shuffleArray([
    ...classic.map(q => ({ ...q, type: "classic" })),
    ...mcq.map(q => ({ ...q, type: "mcq" }))
  ]);

  let current = 0;
  let score = 0;

  function draw() {
    const q = questions[current];
    if (!q) return;

    app.innerHTML = `
      <section style="max-width:900px;margin:40px auto;">
        <h2>Mock Midterm</h2>
        <p>Question ${current + 1} / ${questions.length}</p>

        <article style="background:#fff;border:1px solid #ddd;border-radius:18px;padding:22px;">
          <div style="color:#888;font-size:13px;font-weight:700;">${q.lesson} · ${q.type.toUpperCase()}</div>
          <h3>${q.question}</h3>

          ${q.type === "mcq" ? `
            <div style="display:grid;gap:10px;margin-top:14px;">
              ${q.options.map(opt => `
                <button onclick="answerMock('${escapeQuotes(opt)}')" style="text-align:left;padding:12px;border:1px solid #ddd;border-radius:12px;background:#fff;cursor:pointer;">
                  ${opt}
                </button>
              `).join("")}
            </div>
          ` : `
            <textarea id="mockClassicBox" placeholder="Write your answer here..." style="width:100%;min-height:140px;margin-top:14px;padding:12px;border:1px solid #ddd;border-radius:12px;"></textarea>
            <div style="margin-top:14px;padding:14px;border:1px solid #ddd;border-radius:12px;background:#fafafa;">
              <strong>Expected key points</strong>
              <ul>
                ${q.points.map(point => `<li>${point}</li>`).join("")}
              </ul>
            </div>
            <button onclick="nextClassicMock()" style="margin-top:14px;padding:10px 14px;border:none;border-radius:12px;background:#8c1738;color:#fff;cursor:pointer;">
              Next Question
            </button>
          `}
        </article>
      </section>
    `;
  }

  window.answerMock = function(selected) {
    const q = questions[current];
    if (selected === q.answer) score++;
    current++;
    if (current < questions.length) draw();
    else finish();
  };

  window.nextClassicMock = function() {
    current++;
    if (current < questions.length) draw();
    else finish();
  };

  function finish() {
    app.innerHTML = `
      <section style="max-width:900px;margin:60px auto;text-align:center;">
        <h2>Mock Midterm Complete</h2>
        <p style="font-size:22px;">MCQ Score: ${score} / 3</p>
        <button onclick="navigate('exam')" style="margin-top:16px;padding:12px 18px;border:none;border-radius:12px;background:#8c1738;color:#fff;cursor:pointer;">
          Back to Exam
        </button>
      </section>
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

navigate("home");
