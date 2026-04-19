const app = document.getElementById("app");
const stats = document.getElementById("stats");

const state = {
  quizAnswered: 0,
  quizCorrect: 0,
  examBest: 0
};

function renderStats() {
  stats.innerHTML = `
    <div class="stat-card">
      <p class="stat-label">Topics</p>
      <p class="stat-value">${topics.length}</p>
    </div>
    <div class="stat-card">
      <p class="stat-label">Flashcards</p>
      <p class="stat-value">${flashcards.length}</p>
    </div>
    <div class="stat-card">
      <p class="stat-label">Quiz Score</p>
      <p class="stat-value">${state.quizCorrect}/${state.quizAnswered}</p>
    </div>
    <div class="stat-card">
      <p class="stat-label">Best Exam</p>
      <p class="stat-value">${state.examBest}/${questions.length}</p>
    </div>
  `;
}

function showSection(section) {
  if (section === "topics") renderTopics();
  if (section === "flashcards") renderFlashcards();
  if (section === "quiz") renderQuiz();
  if (section === "exam") renderExam();
}

function renderTopics() {
  app.innerHTML = `
    <h2 class="section-title">Core Topics</h2>
    <div class="topic-grid">
      ${topics
        .map(
          (topic) => `
            <section class="card">
              <h3>${topic.title}</h3>
              <p>${topic.content}</p>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFlashcards() {
  app.innerHTML = `
    <h2 class="section-title">Flashcards</h2>
    <p class="meta">Click a card to flip it.</p>
    <div class="flash-grid">
      ${flashcards
        .map(
          (card, index) => `
            <section class="card flashcard" id="flashcard-${index}" data-side="front" onclick="flipCard(${index})">
              <div>
                <div>${card.front}</div>
                <small>Tap to reveal</small>
              </div>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function flipCard(index) {
  const el = document.getElementById(`flashcard-${index}`);
  const side = el.getAttribute("data-side");

  if (side === "front") {
    el.innerHTML = `
      <div>
        <div>${flashcards[index].back}</div>
        <small>Tap to flip back</small>
      </div>
    `;
    el.setAttribute("data-side", "back");
  } else {
    el.innerHTML = `
      <div>
        <div>${flashcards[index].front}</div>
        <small>Tap to reveal</small>
      </div>
    `;
    el.setAttribute("data-side", "front");
  }
}

function renderQuiz() {
  app.innerHTML = `
    <h2 class="section-title">Practice Quiz</h2>
    ${questions
      .map(
        (q, i) => `
          <section class="card">
            <p class="meta">Question ${i + 1}</p>
            <h3>${q.question}</h3>
            <div class="option-list">
              ${q.options
                .map(
                  (opt) => `
                    <button class="option-btn" id="q${i}-${escapeForId(opt)}" onclick="checkAnswer(${i}, '${escapeSingleQuotes(opt)}')">
                      ${opt}
                    </button>
                  `
                )
                .join("")}
            </div>
            <div id="feedback-${i}"></div>
          </section>
        `
      )
      .join("")}
  `;
}

function checkAnswer(index, selected) {
  const q = questions[index];
  const feedback = document.getElementById(`feedback-${index}`);

  const buttons = q.options.map((opt) =>
    document.getElementById(`q${index}-${escapeForId(opt)}`)
  );

  if (feedback.dataset.answered === "true") return;

  feedback.dataset.answered = "true";
  state.quizAnswered += 1;

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent.trim() === q.answer) btn.classList.add("correct");
    if (btn.textContent.trim() === selected && selected !== q.answer) btn.classList.add("wrong");
  });

  if (selected === q.answer) {
    state.quizCorrect += 1;
    feedback.innerHTML = `<div class="feedback correct">Correct. ${q.explanation}</div>`;
  } else {
    feedback.innerHTML = `<div class="feedback wrong">Wrong. Correct answer: ${q.answer}. ${q.explanation}</div>`;
  }

  renderStats();
}

function renderExam() {
  let current = 0;
  let score = 0;

  function drawQuestion() {
    const q = questions[current];
    const progress = ((current) / questions.length) * 100;

    app.innerHTML = `
      <section class="card">
        <div class="exam-header">
          <div>
            <p class="meta">Exam Mode</p>
            <h2 style="margin: 6px 0 0;">Question ${current + 1} / ${questions.length}</h2>
          </div>
          <div class="meta">Current Score: ${score}</div>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>

        <h3 style="margin-top: 22px;">${q.question}</h3>

        <div class="option-list">
          ${q.options
            .map(
              (opt) => `
                <button class="option-btn" onclick="submitExamAnswer('${escapeSingleQuotes(opt)}')">
                  ${opt}
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  window.submitExamAnswer = function (selected) {
    if (selected === questions[current].answer) score += 1;
    current += 1;

    if (current < questions.length) {
      drawQuestion();
    } else {
      if (score > state.examBest) state.examBest = score;
      renderStats();

      app.innerHTML = `
        <section class="card">
          <p class="meta">Exam Finished</p>
          <h2>Your Result</h2>
          <p class="score">${score} / ${questions.length}</p>
          <p class="meta">
            ${score === questions.length ? "Perfect score." : "Good job. Review weak areas and retry."}
          </p>
          <div style="margin-top: 18px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <button class="primary-btn" onclick="showSection('exam')">Retry Exam</button>
            <button class="secondary-btn" onclick="showSection('quiz')">Go to Quiz</button>
          </div>
        </section>
      `;
    }
  };

  drawQuestion();
}

function escapeSingleQuotes(str) {
  return str.replace(/'/g, "\\'");
}

function escapeForId(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "_");
}

renderStats();
showSection("topics");
