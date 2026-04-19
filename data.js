const topics = [
  {
    title: "Algorithm vs Data Structure",
    content:
      "An algorithm is a step-by-step problem-solving method. A data structure is a way to organize and store data efficiently."
  },
  {
    title: "Big-O Complexity",
    content:
      "Big-O notation describes how runtime or memory usage grows as input size increases."
  },
  {
    title: "Arrays",
    content:
      "Arrays store elements in contiguous memory and provide fast index-based access, but insertions and deletions can be costly."
  },
  {
    title: "Linked Lists",
    content:
      "Linked lists store nodes connected by references. They are flexible for insertions, but random access is slow."
  },
  {
    title: "Stacks",
    content:
      "Stack is a LIFO structure. Common operations are push, pop, and peek."
  },
  {
    title: "Queues",
    content:
      "Queue is a FIFO structure. Common operations are enqueue, dequeue, and front."
  }
];

const flashcards = [
  { front: "LIFO", back: "Last In, First Out" },
  { front: "FIFO", back: "First In, First Out" },
  { front: "Big-O", back: "A notation for asymptotic growth rate" },
  { front: "Stack", back: "A linear structure using push and pop" },
  { front: "Queue", back: "A linear structure using enqueue and dequeue" },
  { front: "Linked List", back: "A chain of connected nodes" }
];

const questions = [
  {
    question: "Which rule does a stack follow?",
    options: ["FIFO", "LIFO", "Sorted Order", "Random Access"],
    answer: "LIFO",
    explanation: "A stack removes the most recently added item first."
  },
  {
    question: "Which operation adds an item to a queue?",
    options: ["push", "peek", "enqueue", "pop"],
    answer: "enqueue",
    explanation: "Queue insertion is called enqueue."
  },
  {
    question: "What does Big-O usually describe?",
    options: ["Code color", "Growth of complexity", "Memory address", "Variable type"],
    answer: "Growth of complexity",
    explanation: "Big-O explains how time or space grows with input size."
  },
  {
    question: "Which structure is made of nodes connected by references?",
    options: ["Array", "Linked List", "Stack Frame", "Matrix"],
    answer: "Linked List",
    explanation: "Linked lists consist of nodes linked to each other."
  },
  {
    question: "Which data structure follows FIFO?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    answer: "Queue",
    explanation: "The first inserted element leaves the queue first."
  },
  {
    question: "Which structure provides fast direct access by index?",
    options: ["Linked List", "Queue", "Array", "Stack"],
    answer: "Array",
    explanation: "Arrays support efficient random access using indices."
  }
];
