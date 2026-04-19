const studyLessons = [
  {
    lesson: "Lesson 1",
    title: "What is an Algorithm?",
    points: [
      "An algorithm is a finite and clear sequence of steps.",
      "It is used to solve a problem.",
      "It has input, process, and output.",
      "Correctness and finiteness are essential properties."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "What is a Data Structure?",
    points: [
      "A data structure is a way of organizing and storing data.",
      "It improves access, insertion, deletion, and traversal efficiency.",
      "Different problems require different structures.",
      "It strongly affects performance."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Abstract Data Type (ADT)",
    points: [
      "An ADT defines behavior and operations.",
      "It does not define implementation details.",
      "It separates interface from implementation.",
      "Stack and queue are classic ADT examples."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Arrays",
    points: [
      "Arrays use contiguous memory.",
      "Indexed access is fast, usually O(1).",
      "Middle insertion and deletion can be expensive.",
      "Shifting elements may be required."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Linked Lists",
    points: [
      "Linked lists are made of nodes connected by references.",
      "They do not require contiguous memory.",
      "Direct indexed access is weak.",
      "Insertion and deletion can be flexible when the position is known."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Array vs Linked List",
    points: [
      "Arrays are strong at direct indexed access.",
      "Linked lists are flexible for structural updates.",
      "Arrays use contiguous memory; linked lists use nodes and pointers.",
      "Each has different performance trade-offs."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Why Analyze Algorithms?",
    points: [
      "A correct algorithm may still be too slow.",
      "Analysis helps compare different solutions.",
      "It focuses on resource usage as input grows.",
      "Time and space are the main concerns."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Time Complexity",
    points: [
      "Time complexity describes runtime growth.",
      "It depends on input size.",
      "Exact seconds are less important than growth rate.",
      "Big-O is commonly used for this analysis."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Space Complexity",
    points: [
      "Space complexity describes memory growth.",
      "It includes extra memory used by the algorithm.",
      "An algorithm may be fast but memory-heavy.",
      "Time-space trade-offs are common."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Big-O, Big-Omega, Big-Theta",
    points: [
      "Big-O is an upper bound.",
      "Big-Omega is a lower bound.",
      "Big-Theta is a tight bound.",
      "These are asymptotic notations."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Growth Rates",
    points: [
      "O(1) grows slower than O(log n).",
      "O(log n) grows slower than O(n).",
      "O(n) grows slower than O(n^2).",
      "Growth-rate comparison is a common exam topic."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Stacks",
    points: [
      "A stack is a linear structure.",
      "It follows LIFO: Last In, First Out.",
      "Main operations are push, pop, and top.",
      "It is used in undo/redo and function calls."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Queues",
    points: [
      "A queue is a linear structure.",
      "It follows FIFO: First In, First Out.",
      "Main operations are enqueue, dequeue/pop, and front.",
      "It is used in scheduling and waiting-line systems."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Circular Queue",
    points: [
      "A circular queue is useful in array-based implementations.",
      "It wraps around instead of wasting free positions.",
      "It improves space efficiency.",
      "Front and rear move circularly."
    ]
  }
];

const examCatalog = [
  {
    id: "mcq-all",
    icon: "Ⓐ",
    title: "Multiple Choice — All Lessons",
    description: "Mixed multiple-choice practice from all lessons.",
    count: "8+ QUESTIONS"
  },
  {
    id: "mcq-1",
    icon: "Ⓐ",
    title: "Multiple Choice — Lesson 1",
    description: "Algorithms, data structures, ADT, arrays, and linked lists.",
    count: "POOL"
  },
  {
    id: "mcq-2",
    icon: "Ⓐ",
    title: "Multiple Choice — Lesson 2",
    description: "Complexity, analysis, asymptotic notation, and growth rates.",
    count: "POOL"
  },
  {
    id: "mcq-3",
    icon: "Ⓐ",
    title: "Multiple Choice — Lesson 3",
    description: "Stacks, queues, FIFO, LIFO, and circular queue logic.",
    count: "POOL"
  },
  {
    id: "classic-all",
    icon: "✍️",
    title: "Classic Questions — All Lessons",
    description: "Open-ended and comparison questions with expected key points.",
    count: "12+ QUESTIONS"
  },
  {
    id: "classic-1",
    icon: "✍️",
    title: "Classic Questions — Lesson 1",
    description: "Definitions, comparisons, and structure logic.",
    count: "POOL"
  },
  {
    id: "classic-2",
    icon: "✍️",
    title: "Classic Questions — Lesson 2",
    description: "Complexity logic, asymptotic notation, and comparisons.",
    count: "POOL"
  },
  {
    id: "classic-3",
    icon: "✍️",
    title: "Classic Questions — Lesson 3",
    description: "Stack and queue logic, operations, and use cases.",
    count: "POOL"
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

const mcqPool = [
  {
    lesson: "Lesson 1",
    question: "Which statement best defines an algorithm?",
    options: [
      "A random list of commands",
      "A finite sequence of steps used to solve a problem",
      "A memory address table",
      "A type of linked node"
    ],
    answer: "A finite sequence of steps used to solve a problem",
    explanation: "An algorithm is a clear and finite problem-solving procedure."
  },
  {
    lesson: "Lesson 1",
    question: "What is the main purpose of a data structure?",
    options: [
      "To decorate code",
      "To organize and store data efficiently",
      "To replace algorithms",
      "To avoid memory usage"
    ],
    answer: "To organize and store data efficiently",
    explanation: "Data structures help store and manage data efficiently."
  },
  {
    lesson: "Lesson 1",
    question: "Which structure gives fast direct access by index?",
    options: ["Linked List", "Queue", "Array", "Stack"],
    answer: "Array",
    explanation: "Arrays provide direct indexed access."
  },
  {
    lesson: "Lesson 1",
    question: "Which statement is true for linked lists?",
    options: [
      "They always use contiguous memory",
      "They are made of nodes connected by references",
      "They provide O(1) random access",
      "They are only used as stacks"
    ],
    answer: "They are made of nodes connected by references",
    explanation: "Linked lists use nodes and pointers/references."
  },
  {
    lesson: "Lesson 2",
    question: "What does time complexity describe?",
    options: [
      "Code style",
      "Runtime growth as input size increases",
      "The number of variables",
      "Output formatting"
    ],
    answer: "Runtime growth as input size increases",
    explanation: "Time complexity measures how runtime scales with input size."
  },
  {
    lesson: "Lesson 2",
    question: "Which notation is usually used for worst-case growth?",
    options: ["Big-O", "Big-Omega", "Big-Theta", "FIFO"],
    answer: "Big-O",
    explanation: "Big-O is commonly used for worst-case analysis."
  },
  {
    lesson: "Lesson 2",
    question: "Which notation represents a lower bound?",
    options: ["Big-O", "Big-Omega", "Big-Theta", "LIFO"],
    answer: "Big-Omega",
    explanation: "Big-Omega describes a lower bound."
  },
  {
    lesson: "Lesson 2",
    question: "Which notation means the upper and lower bounds match?",
    options: ["Big-O", "Big-Omega", "Big-Theta", "O(1)"],
    answer: "Big-Theta",
    explanation: "Big-Theta is a tight asymptotic bound."
  },
  {
    lesson: "Lesson 3",
    question: "Which structure follows LIFO?",
    options: ["Queue", "Stack", "Array", "Graph"],
    answer: "Stack",
    explanation: "Stacks follow Last In, First Out."
  },
  {
    lesson: "Lesson 3",
    question: "Which structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Heap"],
    answer: "Queue",
    explanation: "Queues follow First In, First Out."
  },
  {
    lesson: "Lesson 3",
    question: "Which operation returns the front element of a queue?",
    options: ["top", "front", "push", "popBack"],
    answer: "front",
    explanation: "front returns the first queue element without removing it."
  },
  {
    lesson: "Lesson 3",
    question: "Why is a circular queue useful?",
    options: [
      "It changes FIFO into LIFO",
      "It avoids wasting free array positions",
      "It removes the need for arrays",
      "It sorts the queue automatically"
    ],
    answer: "It avoids wasting free array positions",
    explanation: "Circular queues reuse open array positions efficiently."
  }
];

const classicPool = [
  {
    lesson: "Lesson 1",
    question: "Explain the difference between an algorithm and a data structure.",
    points: [
      "Algorithm = step-by-step solution method",
      "Data structure = way of organizing and storing data",
      "Algorithms operate on data structures",
      "Both affect performance"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "What is an Abstract Data Type (ADT)?",
    points: [
      "Defines behavior and operations",
      "Hides implementation details",
      "Separates interface from implementation",
      "Examples: stack, queue"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "Compare arrays and linked lists.",
    points: [
      "Array uses contiguous memory",
      "Linked list uses nodes and references",
      "Array has fast indexed access",
      "Linked list is flexible for insertion/deletion"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "Why can insertion in the middle of an array be expensive?",
    points: [
      "Elements may need to be shifted",
      "Contiguous layout matters",
      "Runtime can increase with size"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Explain why algorithm analysis is important.",
    points: [
      "Correct algorithms may differ in efficiency",
      "Analysis compares solutions",
      "Focuses on growth with input size",
      "Time and space matter"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Explain time complexity.",
    points: [
      "Describes runtime growth",
      "Depends on input size",
      "Used to compare efficiency",
      "Often expressed with Big-O"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Compare Big-O, Big-Omega, and Big-Theta.",
    points: [
      "Big-O = upper bound",
      "Big-Omega = lower bound",
      "Big-Theta = tight bound",
      "All are asymptotic notations"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Rank O(1), O(log n), O(n), and O(n^2) from best to worst.",
    points: [
      "O(1) best",
      "Then O(log n)",
      "Then O(n)",
      "Then O(n^2)"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Explain the stack data structure and its operations.",
    points: [
      "LIFO rule",
      "push adds an item",
      "pop removes the top item",
      "top returns the top item without removing it"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Explain the queue data structure and its operations.",
    points: [
      "FIFO rule",
      "enqueue inserts at the back",
      "dequeue/pop removes from the front",
      "front returns the first item"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Why is a circular queue useful?",
    points: [
      "Reuses empty positions",
      "Improves array-based queue efficiency",
      "Uses wrap-around indexing"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Compare stacks and queues.",
    points: [
      "Stack uses LIFO",
      "Queue uses FIFO",
      "Insertion/removal positions differ",
      "Use cases are different"
    ]
  }
];

const examConfig = {
  classicCount: 7,
  testCount: 3
};
