window.studyLessons = [
  {
    lesson: "Lesson 1",
    title: "What is an Algorithm?",
    points: [
      "An algorithm is a finite sequence of well-defined steps used to solve a problem.",
      "It takes input, processes it, and produces output.",
      "It must terminate."
    ]
  }
];

window.examCatalog = [
  {
    id: "mcq-all",
    icon: "Ⓐ",
    title: "Multiple Choice — All Lessons",
    description: "Mixed multiple-choice practice.",
    count: "1 QUESTION"
  },
  {
    id: "classic-all",
    icon: "✍️",
    title: "Classic Questions — All Lessons",
    description: "Open-ended questions.",
    count: "1 QUESTION"
  },
  {
    id: "mock-midterm",
    icon: "🎓",
    title: "Mock Midterm",
    description: "Randomized exam mode: 7 classic + 3 multiple-choice questions.",
    count: "10 QUESTIONS",
    highlight: true
  }
];

window.classicPool = [
  {
    lesson: "Lesson 1",
    question: "Define an algorithm.",
    points: [
      "Finite steps",
      "Solves a problem",
      "Input/output",
      "Terminates"
    ]
  }
];

window.mcqPool = [
  {
    lesson: "Lesson 1",
    question: "Which best defines an algorithm?",
    options: [
      "A random list of commands",
      "A finite sequence of well-defined steps",
      "A memory table",
      "A linked node"
    ],
    answer: "A finite sequence of well-defined steps",
    explanation: "That is the correct definition."
  }
];

window.examConfig = {
  classicCount: 7,
  testCount: 3
};
