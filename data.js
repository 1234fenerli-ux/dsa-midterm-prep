window.studyLessons = [
  {
    lesson: "Lesson 1",
    title: "What is an Algorithm?",
    points: [
      "An algorithm is a finite sequence of well-defined steps used to solve a problem.",
      "It takes input, processes it, and produces output.",
      "It must terminate after a finite number of steps."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "What is a Data Structure?",
    points: [
      "A data structure is a way of organizing and storing data.",
      "Different structures support different operations efficiently.",
      "The choice of structure affects performance."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Time Complexity",
    points: [
      "Time complexity describes how runtime grows as input size increases.",
      "It focuses on growth, not exact running time.",
      "Examples include O(1), O(log n), O(n), and O(n^2)."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Stack",
    points: [
      "A stack follows LIFO.",
      "Main operations are push, pop, and top.",
      "Stacks are used in recursion and undo systems."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Queue",
    points: [
      "A queue follows FIFO.",
      "Main operations are enqueue/push, dequeue/pop, and front.",
      "Queues are used in scheduling and waiting-line systems."
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
    description: "Open-ended practice.",
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
      "Finite sequence of steps",
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
