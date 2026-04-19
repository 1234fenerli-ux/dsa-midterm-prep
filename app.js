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

function renderExam() {
  const selectedTestQuestions = getRandomItems(testExamPool, examConfig.testCount);
  const selectedClassicQuestions = getRandomItems(classicExamPool, examConfig.classicCount);

  const examQuestions = [
    ...selectedTestQuestions.map((q) => ({ ...q, type: "test" })),
    ...selectedClassicQuestions.map((q) => ({ ...q, type: "classic" }))
  ];

  let current = 0;
  let score = 0;

  function drawQuestion() {
    const q = examQuestions[current];
    const progress = (current / examQuestions.length) * 100;

    if (q.type === "test") {
      app.innerHTML = `
        <section class="card">
          <div class="exam-header">
            <div>
              <p class="meta">Exam Mode • Test Question</p>
              <h2 style="margin: 6px 0 0;">Question ${current + 1} / ${examQuestions.length}</h2>
            </div>
            <div class="meta">Current Score: ${score}</div>
          </div>

          <div class="progress-bar">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>

          <h3 style="margin-top: 22px;">${q.question}</h3>

          <div class="option-list">
            ${q.options.map((opt) => `
              <button class="option-btn" onclick="submitExamAnswer('${escapeSingleQuotes(opt)}')">
                ${opt}
              </button>
            `).join("")}
          </div>
        </section>
      `;
    } else {
      app.innerHTML = `
        <section class="card">
          <div class="exam-header">
            <div>
              <p class="meta">Exam Mode • Classic Question</p>
              <h2 style="margin: 6px 0 0;">Question ${current + 1} / ${examQuestions.length}</h2>
            </div>
            <div class="meta">Classic Section</div>
          </div>

          <div class="progress-bar">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>

          <h3 style="margin-top: 22px;">${q.question}</h3>

          <div class="feedback" style="margin-top:16px;">
            <strong>Expected Points:</strong>
            <ul style="margin-top:10px; text-align:left;">
              ${q.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
          </div>

          <div style="margin-top:16px;">
            <button class="primary-btn" onclick="submitClassicQuestion()">Next Question</button>
          </div>
        </section>
      `;
    }
  }

  window.submitExamAnswer = function (selected) {
    const q = examQuestions[current];
    if (selected === q.answer) score += 1;
    current += 1;

    if (current < examQuestions.length) {
      drawQuestion();
    } else {
      if (score > state.examBest) state.examBest = score;
      renderStats();

      app.innerHTML = `
        <section class="card">
          <p class="meta">Exam Finished</p>
          <h2>Your Test Score</h2>
          <p class="score">${score} / ${examConfig.testCount}</p>
          <p class="meta">Classic questions were shown with expected answer points for self-evaluation.</p>
          <div style="margin-top: 18px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <button class="primary-btn" onclick="showSection('exam')">Generate New Exam</button>
            <button class="secondary-btn" onclick="showSection('quiz')">Go to Quiz</button>
          </div>
        </section>
      `;
    }
  };

  window.submitClassicQuestion = function () {
    current += 1;

    if (current < examQuestions.length) {
      drawQuestion();
    } else {
      if (score > state.examBest) state.examBest = score;
      renderStats();

      app.innerHTML = `
        <section class="card">
          <p class="meta">Exam Finished</p>
          <h2>Your Test Score</h2>
          <p class="score">${score} / ${examConfig.testCount}</p>
          <p class="meta">Classic questions were shown with expected answer points for self-evaluation.</p>
          <div style="margin-top: 18px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <button class="primary-btn" onclick="showSection('exam')">Generate New Exam</button>
            <button class="secondary-btn" onclick="showSection('quiz')">Go to Quiz</button>
          </div>
        </section>
      `;
    }
  };

  drawQuestion();
}
