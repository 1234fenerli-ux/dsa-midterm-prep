// ---------- TOPIC CONTENT ----------
const topics = [
  {
    title: "Lesson 1 - Algorithms and Data Structures",
    content: "Algorithms are step-by-step procedures for solving problems. Data structures organize and store data efficiently."
  },
  {
    title: "Lesson 1 - Abstract Data Types",
    content: "An ADT defines operations and behavior, but not the implementation details."
  },
  {
    title: "Lesson 1 - Arrays",
    content: "Arrays use contiguous memory and provide fast random access."
  },
  {
    title: "Lesson 1 - Linked Lists",
    content: "Linked lists store data in nodes connected by references."
  },
  {
    title: "Lesson 2 - Time Complexity",
    content: "Time complexity describes how runtime grows as input size increases."
  },
  {
    title: "Lesson 2 - Space Complexity",
    content: "Space complexity describes how memory usage grows with input size."
  },
  {
    title: "Lesson 2 - Big-O, Omega, Theta",
    content: "Big-O is an upper bound, Omega is a lower bound, and Theta is a tight bound."
  },
  {
    title: "Lesson 3 - Stacks",
    content: "Stacks follow LIFO. Main operations are push, pop, and top."
  },
  {
    title: "Lesson 3 - Queues",
    content: "Queues follow FIFO. Main operations are enqueue, dequeue, and front."
  },
  {
    title: "Lesson 3 - Circular Queue",
    content: "Circular queues reuse empty spaces efficiently in array-based implementations."
  }
];

// ---------- FLASHCARDS ----------
const flashcards = [
  { front: "Algorithm", back: "A finite sequence of steps to solve a problem" },
  { front: "Data Structure", back: "A way to organize and store data efficiently" },
  { front: "ADT", back: "Abstract Data Type; behavior without implementation details" },
  { front: "Array", back: "Contiguous memory structure with fast indexed access" },
  { front: "Linked List", back: "A structure made of nodes connected by references" },
  { front: "Big-O", back: "Upper bound, usually used for worst-case growth" },
  { front: "Big-Omega", back: "Lower bound on asymptotic growth" },
  { front: "Big-Theta", back: "Tight bound on asymptotic growth" },
  { front: "Stack", back: "A LIFO data structure" },
  { front: "Queue", back: "A FIFO data structure" },
  { front: "LIFO", back: "Last In, First Out" },
  { front: "FIFO", back: "First In, First Out" }
];

// ---------- PRACTICE QUIZ POOL ----------
const quizPool = [
  {
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
    explanation: "Queue follows First In First Out."
  },
  {
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Array", "Graph"],
    answer: "Stack",
    explanation: "Stack follows Last In First Out."
  },
  {
    question: "Which structure provides fast direct access by index?",
    options: ["Linked List", "Queue", "Array", "Stack"],
    answer: "Array",
    explanation: "Arrays provide direct indexed access."
  },
  {
    question: "Which notation usually describes worst-case growth?",
    options: ["Big-O", "Big-Omega", "Big-Theta", "LIFO"],
    answer: "Big-O",
    explanation: "Big-O is commonly used for worst-case analysis."
  },
  {
    question: "Which notation represents a lower bound?",
    options: ["Big-O", "Big-Omega", "Big-Theta", "FIFO"],
    answer: "Big-Omega",
    explanation: "Omega gives the lower bound."
  },
  {
    question: "Which notation means both upper and lower bounds match?",
    options: ["Big-O", "Big-Omega", "Big-Theta", "O(1)"],
    answer: "Big-Theta",
    explanation: "Theta represents a tight asymptotic bound."
  },
  {
    question: "What is the main advantage of arrays?",
    options: ["Easy middle insertion", "Fast direct access", "Always dynamic size", "Uses pointers"],
    answer: "Fast direct access",
    explanation: "Arrays are strong at indexed access."
  },
  {
    question: "What is the main advantage of linked lists?",
    options: ["Fast random access", "Flexible insertion and deletion", "Smaller memory always", "Built-in sorting"],
    answer: "Flexible insertion and deletion",
    explanation: "Linked lists are more flexible for structural updates."
  },
  {
    question: "Which operation removes the top of a stack?",
    options: ["push", "front", "pop", "enqueue"],
    answer: "pop",
    explanation: "pop removes the top item."
  },
  {
    question: "Which operation adds an item to a queue?",
    options: ["push", "enqueue", "top", "peek"],
    answer: "enqueue",
    explanation: "enqueue inserts at the back of a queue."
  }
];

// ---------- TEST EXAM POOL ----------
const testExamPool = [
  {
    question: "Which structure is based on nodes connected by references?",
    options: ["Array", "Linked List", "Stack Frame", "Matrix"],
    answer: "Linked List",
    explanation: "Linked lists use nodes and references."
  },
  {
    question: "What does time complexity describe?",
    options: [
      "How code looks",
      "How runtime grows with input size",
      "Memory address location",
      "Data type conversion"
    ],
    answer: "How runtime grows with input size",
    explanation: "Time complexity measures runtime growth."
  },
  {
    question: "Which operation returns the front item of a queue without removing it?",
    options: ["pop", "top", "front", "push"],
    answer: "front",
    explanation: "front returns the first element in a queue."
  },
  {
    question: "What is an ADT?",
    options: [
      "A hardware unit",
      "A behavior definition without implementation details",
      "A memory address table",
      "A type of queue only"
    ],
    answer: "A behavior definition without implementation details",
    explanation: "ADT defines allowed operations and behavior."
  },
  {
    question: "Why can insertion in the middle of an array be expensive?",
    options: [
      "Because arrays use nodes",
      "Because elements may need to be shifted",
      "Because arrays are always circular",
      "Because arrays have no indices"
    ],
    answer: "Because elements may need to be shifted",
    explanation: "Middle insertion often requires shifting elements."
  },
  {
    question: "Which structure is best matched with LIFO?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack",
    explanation: "LIFO is the defining rule of stacks."
  },
  {
    question: "What is the purpose of a circular queue?",
    options: [
      "To turn FIFO into LIFO",
      "To avoid wasting unused array positions",
      "To replace arrays completely",
      "To sort the queue automatically"
    ],
    answer: "To avoid wasting unused array positions",
    explanation: "Circular queues reuse array positions efficiently."
  },
  {
    question: "Which complexity is generally better for large n?",
    options: ["O(n^2)", "O(n)", "O(1)", "O(n log n)"],
    answer: "O(1)",
    explanation: "Constant time is the most efficient among these options."
  }
];

// ---------- CLASSIC EXAM POOL ----------
const classicExamPool = [
  {
    question: "Explain the difference between an algorithm and a data structure.",
    points: [
      "Algorithm: procedure or sequence of steps",
      "Data structure: way of organizing data",
      "Algorithms operate on data structures",
      "Both affect performance and design"
    ]
  },
  {
    question: "Explain the difference between an array and a linked list.",
    points: [
      "Array uses contiguous memory",
      "Linked list uses nodes and references",
      "Array gives fast indexed access",
      "Linked list is more flexible for insertion/deletion"
    ]
  },
  {
    question: "What is an Abstract Data Type (ADT)?",
    points: [
      "Defines behavior and operations",
      "Does not define implementation details",
      "Separates interface from implementation",
      "Examples include stack and queue"
    ]
  },
  {
    question: "Explain time complexity and why it matters.",
    points: [
      "Measures runtime growth",
      "Depends on input size",
      "Used to compare algorithms",
      "Helps choose efficient solutions"
    ]
  },
  {
    question: "Compare Big-O, Big-Omega, and Big-Theta.",
    points: [
      "Big-O is an upper bound",
      "Big-Omega is a lower bound",
      "Big-Theta is a tight bound",
      "They describe asymptotic growth"
    ]
  },
  {
    question: "Explain the stack data structure and its main operations.",
    points: [
      "Stack follows LIFO",
      "push adds an element",
      "pop removes the top element",
      "top returns the top without removing"
    ]
  },
  {
    question: "Explain the queue data structure and its main operations.",
    points: [
      "Queue follows FIFO",
      "enqueue inserts at the back",
      "dequeue/pop removes from the front",
      "front returns first element without removing"
    ]
  },
  {
    question: "What is traversal in a data structure?",
    points: [
      "Visiting elements one by one",
      "Used to inspect or process data",
      "Can apply to arrays and linked structures"
    ]
  },
  {
    question: "Why is a circular queue useful?",
    points: [
      "Efficient array-based queue implementation",
      "Reuses empty spaces",
      "Avoids wasted positions at the front",
      "Uses wrap-around logic"
    ]
  },
  {
    question: "Why can linked lists be better than arrays in some cases?",
    points: [
      "Flexible insertion and deletion",
      "No need for contiguous memory",
      "Good when size changes frequently",
      "Trade-off: slower direct access"
    ]
  },
  {
    question: "What is underflow in linear data structures?",
    points: [
      "Removing from an empty structure",
      "Can happen in stacks and queues",
      "Should be handled with checks or exceptions"
    ]
  },
  {
    question: "Explain why direct indexing is fast in arrays.",
    points: [
      "Contiguous memory layout",
      "Address can be computed directly",
      "No traversal required"
    ]
  }
];

// ---------- RANDOM EXAM SETTINGS ----------
const examConfig = {
  classicCount: 7,
  testCount: 3
};
