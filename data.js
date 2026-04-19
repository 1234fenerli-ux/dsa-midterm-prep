window.studyLessons = [
  {
    lesson: "Lesson 1",
    title: "What is an Algorithm?",
    points: [
      "An algorithm is a finite sequence of well-defined steps used to solve a problem.",
      "It takes input, processes it, and produces output.",
      "It must terminate (finite steps).",
      "It should be deterministic and unambiguous."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "What is a Data Structure?",
    points: [
      "A data structure organizes and stores data.",
      "It enables efficient operations.",
      "Choice affects performance."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Time Complexity",
    points: [
      "Measures runtime growth with input size.",
      "Focus is on growth, not exact time.",
      "Examples: O(1), O(n), O(log n), O(n^2)."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Stack",
    points: [
      "LIFO structure (Last In First Out).",
      "Operations: push, pop, top.",
      "Used in recursion, undo systems."
    ]
  }
];

window.examCatalog = [
  {
    id: "mock",
    icon: "🎓",
    title: "Mock Midterm",
    description: "7 classic + 3 test questions",
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
      "Deterministic"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "What is time complexity?",
    points: [
      "Runtime growth",
      "Depends on input size",
      "Big-O notation"
    ]
  }
];

window.mcqPool = [
  {
    lesson: "Lesson 1",
    question: "Which is an algorithm?",
    options: [
      "Random steps",
      "Finite defined steps",
      "Memory table",
      "Pointer list"
    ],
    answer: "Finite defined steps",
    explanation: "Correct definition of algorithm."
  }
];

window.examConfig = {
  classicCount: 7,
  testCount: 3
};
