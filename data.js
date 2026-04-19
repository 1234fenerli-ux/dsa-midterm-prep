window.studyLessons = [
  {
    lesson: "Lesson 1",
    title: "What is an Algorithm?",
    points: [
      "An algorithm is a finite, clear, and ordered sequence of steps used to solve a problem.",
      "It takes input, processes it, and produces output.",
      "A valid algorithm must terminate after a finite number of steps.",
      "Algorithms are language-independent: the same idea can be written in pseudocode or different programming languages.",
      "Typical examples include finding a maximum value, sorting a list, and searching for a target.",
      "Exam Tip: mention finite steps, input/output, correctness, and termination."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "What is a Data Structure?",
    points: [
      "A data structure is a way of organizing, storing, and managing data.",
      "Its main purpose is to make access, insertion, deletion, and traversal more efficient.",
      "Different problems require different structures.",
      "The choice of data structure directly affects performance.",
      "Algorithms and data structures work together: algorithms operate on stored data.",
      "Exam Tip: connect the structure choice to efficiency."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Data Structure vs ADT",
    points: [
      "An Abstract Data Type (ADT) defines behavior and operations, not implementation details.",
      "A data structure is the concrete way data is stored in memory.",
      "For example, stack is an ADT; it can be implemented using an array or a linked list.",
      "Queue is also an ADT with multiple implementations.",
      "Exam Tip: ADT = what it does, data structure = how it is built."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Arrays",
    points: [
      "Arrays store elements in contiguous memory locations.",
      "Direct indexed access is very fast, usually O(1).",
      "Insertion or deletion in the middle can be expensive because elements may need to be shifted.",
      "Array size is often fixed in simple implementations.",
      "Exam Tip: arrays are strong at access, weaker at structural updates."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Linked Lists",
    points: [
      "A linked list is made of nodes connected by references.",
      "It does not require contiguous memory.",
      "Insertion and deletion can be flexible if the position is already known.",
      "Direct/random access is weak because traversal is usually required.",
      "Exam Tip: linked list = flexible updates, weak direct access."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Array vs Linked List",
    points: [
      "Arrays use contiguous memory; linked lists use nodes and references.",
      "Arrays provide fast indexed access.",
      "Linked lists are better for some insert/delete operations.",
      "Arrays may require shifting during insertion and deletion.",
      "Exam Tip: explain the trade-off, do not say one is always better."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Why Analyze Algorithms?",
    points: [
      "Two algorithms may both be correct, but one may be much faster.",
      "Algorithm analysis helps compare solutions.",
      "It focuses on how performance grows as input size increases.",
      "The two main resources are time and space.",
      "Exam Tip: analysis is about comparison, scalability, and efficiency."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Time Complexity",
    points: [
      "Time complexity measures how running time grows with input size.",
      "It focuses on growth, not exact seconds.",
      "Common classes include O(1), O(log n), O(n), O(n log n), and O(n^2).",
      "For large inputs, growth rate matters more than constants.",
      "Exam Tip: explain time complexity using growth with respect to n."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Space Complexity",
    points: [
      "Space complexity measures how memory usage grows with input size.",
      "It includes extra memory used by the algorithm.",
      "Some algorithms are fast but memory-heavy.",
      "This creates a time-space trade-off.",
      "Exam Tip: do not confuse memory cost with runtime cost."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Big-O, Big-Omega, Big-Theta",
    points: [
      "Big-O is an asymptotic upper bound.",
      "Big-Omega is an asymptotic lower bound.",
      "Big-Theta is a tight asymptotic bound.",
      "These notations compare growth rates for large inputs.",
      "Exam Tip: Theta means upper and lower bounds match."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Growth Rates",
    points: [
      "Typical ordering is O(1) < O(log n) < O(n) < O(n log n) < O(n^2).",
      "Better growth means better scalability for large inputs.",
      "An algorithm that seems fine for small n may become inefficient later.",
      "Exam Tip: ranking complexity classes is a common exam task."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Memory Allocation",
    points: [
      "Memory allocation describes how data is stored in memory.",
      "Main styles discussed in the slides are contiguous allocation and linked allocation.",
      "Arrays are associated with contiguous allocation.",
      "Linked lists are associated with linked allocation.",
      "Exam Tip: allocation strategy affects both flexibility and performance."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Contiguous Allocation",
    points: [
      "Contiguous allocation stores elements in consecutive memory locations.",
      "It supports direct access efficiently.",
      "Expanding storage may require allocating a bigger block and copying old values.",
      "This is one reason resizing can be costly.",
      "Exam Tip: fast access is the strength; resizing/copying is the weakness."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Linked Allocation",
    points: [
      "Linked allocation stores data in nodes connected by references.",
      "It supports flexible structural changes.",
      "It does not require contiguous memory.",
      "The trade-off is slower direct access compared with arrays.",
      "Exam Tip: say nodes + references + no contiguous memory requirement."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "List Operations",
    points: [
      "Typical list operations include access, insert, erase, and replace at the kth position.",
      "Traversal means moving through elements one by one.",
      "Operations on two lists can include concatenation and checking sub-lists.",
      "Exam Tip: know which operations are structural and which are navigational."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Singly vs Doubly Linked Lists",
    points: [
      "A singly linked list stores a next reference only.",
      "A doubly linked list stores both previous and next references.",
      "Doubly linked lists improve backward traversal.",
      "They use more memory because of the extra pointer.",
      "Exam Tip: navigation power vs memory cost."
    ]
  },
  {
    lesson: "Lesson 4",
    title: "Stack ADT",
    points: [
      "A stack allows insertion and removal only at the top.",
      "The main operations are push(x), pop(), top(), and empty().",
      "Stack behavior follows LIFO: Last In, First Out.",
      "Calling pop() or top() on an empty stack is an error.",
      "Exam Tip: always connect stack to the word top."
    ]
  },
  {
    lesson: "Lesson 4",
    title: "Stack Applications",
    points: [
      "Typical applications include bracket matching, function calls, undo/redo, and expression parsing.",
      "Stacks are useful when the most recent item should be processed first.",
      "Nested structures are often handled using stacks.",
      "Exam Tip: know at least two real-world examples."
    ]
  },
  {
    lesson: "Lesson 5",
    title: "Queue ADT",
    points: [
      "A queue is a linear structure with insertion at the back and removal at the front.",
      "Queue behavior follows FIFO: First In, First Out.",
      "The main operations are push/enqueue, pop/dequeue, front(), and empty().",
      "The oldest inserted object is at the front.",
      "Exam Tip: insertion and removal happen at opposite ends."
    ]
  },
  {
    lesson: "Lesson 5",
    title: "Queue Underflow",
    points: [
      "Calling pop() on an empty queue causes underflow.",
      "Calling front() on an empty queue also causes underflow.",
      "This must be treated as an exception/error.",
      "Exam Tip: underflow is a standard keyword in queue questions."
    ]
  },
  {
    lesson: "Lesson 5",
    title: "Circular Queue",
    points: [
      "A circular queue is an array-based queue that wraps around at the end of the array.",
      "Its purpose is to reuse free positions efficiently.",
      "Without circular behavior, front deletions can waste space.",
      "Front and rear move circularly using wrap-around logic.",
      "Exam Tip: circular queue = space reuse in array-based queue implementation."
    ]
  }
];

window.examCatalog = [
  {
    id: "mcq-all",
    icon: "Ⓐ",
    title: "Multiple Choice — All Lessons",
    description: "Mixed multiple-choice practice from all lessons.",
    count: "21 QUESTIONS"
  },
  {
    id: "classic-all",
    icon: "✍️",
    title: "Classic Questions — All Lessons",
    description: "Open-ended questions with expected key points.",
    count: "20 QUESTIONS"
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
    question: "What is the difference between a data structure and an abstract data type (ADT)? Give one example of an ADT and two different data structures that can implement it.",
    points: [
      "ADT defines behavior/operations",
      "Data structure is the concrete implementation",
      "Example ADT: stack or queue",
      "Possible implementations: array and linked list"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "Define an algorithm and list its key properties.",
    points: [
      "Finite sequence of well-defined steps",
      "Solves a problem",
      "Takes input and produces output",
      "Deterministic / unambiguous"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "Explain why algorithms and data structures matter in software engineering.",
    points: [
      "Affect performance",
      "Affect scalability",
      "Correctness alone is not enough",
      "Structure choice influences algorithm efficiency"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Why do we analyze algorithms instead of only checking whether they work correctly?",
    points: [
      "Correct algorithms can still be inefficient",
      "Need to compare solutions",
      "Need to predict growth for large inputs",
      "Supports scalable system design"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Explain the difference between time complexity and space complexity.",
    points: [
      "Time complexity = running time growth",
      "Space complexity = memory growth",
      "Both depend on input size",
      "There may be trade-offs"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Explain Big-O, Big-Omega, and Big-Theta.",
    points: [
      "Big-O = upper bound",
      "Big-Omega = lower bound",
      "Big-Theta = tight bound",
      "All describe asymptotic growth"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Compare O(1), O(log n), O(n), and O(n²) from best to worst for large n.",
    points: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Explain the difference between contiguous allocation and linked allocation.",
    points: [
      "Contiguous = consecutive memory",
      "Linked = nodes connected by references",
      "Contiguous supports direct access",
      "Linked is more flexible structurally"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Why can expanding contiguous storage be costly?",
    points: [
      "May need a larger continuous block",
      "Existing data may need copying",
      "Resizing can be expensive"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "List the basic operations of an abstract list and explain what traversal means.",
    points: [
      "Access, insert, erase, replace",
      "Traversal = moving through previous/next elements",
      "Navigation after access"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Compare arrays and linked lists in terms of access and structural updates.",
    points: [
      "Arrays: fast indexed access",
      "Linked lists: flexible insertion/deletion",
      "Arrays may require shifting",
      "Linked lists need traversal for access"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Explain the difference between singly linked lists and doubly linked lists.",
    points: [
      "Singly has next only",
      "Doubly has previous and next",
      "Doubly improves backward traversal",
      "Doubly uses more memory"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "In a singly linked list, why is erasing from the front O(1) while erasing from the back can be O(n)?",
    points: [
      "Front erase updates head directly",
      "Back erase requires finding previous node",
      "Traversal may be needed",
      "No direct previous pointer in singly linked list"
    ]
  },
  {
    lesson: "Lesson 4",
    question: "Explain the stack ADT and name its four main operations.",
    points: [
      "Linear structure",
      "Top-based insertion/removal",
      "push, pop, top, empty",
      "Follows LIFO"
    ]
  },
  {
    lesson: "Lesson 4",
    question: "Explain LIFO and give one real-world example of stack behavior.",
    points: [
      "Last In, First Out",
      "Most recent item removed first",
      "Example: stack of plates / undo-redo / function calls"
    ]
  },
  {
    lesson: "Lesson 4",
    question: "Name three applications of stacks and explain why a stack is suitable for each.",
    points: [
      "Bracket/tag matching",
      "Function calls",
      "Undo/redo or reverse-Polish calculators",
      "All use most-recent-first behavior"
    ]
  },
  {
    lesson: "Lesson 5",
    question: "Explain the queue ADT and name its main operations.",
    points: [
      "Linear ordered structure",
      "Back for insertion, front for removal",
      "push, pop, front, empty",
      "Follows FIFO"
    ]
  },
  {
    lesson: "Lesson 5",
    question: "Explain FIFO and give one real-world example of queue behavior.",
    points: [
      "First In, First Out",
      "Oldest item leaves first",
      "Example: grocery line / bank queue / airport security"
    ]
  },
  {
    lesson: "Lesson 5",
    question: "A student uses a Python list with append() and pop(0) to implement a queue. Is this correct and is it efficient?",
    points: [
      "FIFO behavior is correct",
      "pop(0) is inefficient",
      "Front removal shifts elements",
      "deque / circular approach is better for O(1)-style behavior"
    ]
  },
  {
    lesson: "Lesson 5",
    question: "What is a circular array and why do we need it in array-based queue implementations?",
    points: [
      "Wrap-around array logic",
      "Reuses freed positions",
      "Avoids wasting front space",
      "Improves queue efficiency"
    ]
  }
];

window.mcqPool = [
  {
    lesson: "Lesson 1",
    question: "Which statement best defines an algorithm?",
    options: [
      "A random list of commands",
      "A finite sequence of well-defined steps used to solve a problem",
      "A memory address table",
      "A structure that stores nodes"
    ],
    answer: "A finite sequence of well-defined steps used to solve a problem",
    explanation: "The course defines an algorithm as a finite sequence of well-defined steps."
  },
  {
    lesson: "Lesson 1",
    question: "Which statement best describes an ADT?",
    options: [
      "It defines memory addresses",
      "It defines behavior without specifying implementation details",
      "It is always implemented as an array",
      "It always has O(1) complexity"
    ],
    answer: "It defines behavior without specifying implementation details",
    explanation: "ADT describes what a structure does, not how it is implemented."
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
    explanation: "Linked lists use nodes and references."
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
    question: "Which memory allocation type is associated with arrays?",
    options: [
      "Linked allocation",
      "Contiguous allocation",
      "Random allocation",
      "Binary allocation"
    ],
    answer: "Contiguous allocation",
    explanation: "Arrays are the main example of contiguous allocation."
  },
  {
    lesson: "Lesson 3",
    question: "Which memory allocation type is associated with linked lists?",
    options: [
      "Contiguous allocation",
      "Indexed allocation",
      "Linked allocation",
      "Static allocation"
    ],
    answer: "Linked allocation",
    explanation: "Linked lists are the main example of linked allocation."
  },
  {
    lesson: "Lesson 3",
    question: "What is traversal?",
    options: [
      "Sorting all elements",
      "Moving through elements one by one",
      "Deleting the structure",
      "Resizing an array"
    ],
    answer: "Moving through elements one by one",
    explanation: "Traversal means visiting elements in sequence."
  },
  {
    lesson: "Lesson 3",
    question: "What extra capability does a doubly linked list provide?",
    options: [
      "Direct O(1) indexed access",
      "Backward traversal using previous links",
      "Automatic sorting",
      "No memory overhead"
    ],
    answer: "Backward traversal using previous links",
    explanation: "Doubly linked lists store previous as well as next references."
  },
  {
    lesson: "Lesson 4",
    question: "A stack follows which rule?",
    options: ["FIFO", "LIFO", "Theta", "Circular"],
    answer: "LIFO",
    explanation: "Stacks follow Last In, First Out."
  },
  {
    lesson: "Lesson 4",
    question: "Which operation adds an item to the top of a stack?",
    options: ["front()", "push(x)", "pop()", "empty()"],
    answer: "push(x)",
    explanation: "push(x) adds a new item to the top."
  },
  {
    lesson: "Lesson 4",
    question: "Which operation returns the top item without removing it?",
    options: ["top()", "pop()", "push()", "front()"],
    answer: "top()",
    explanation: "top() returns the current top element."
  },
  {
    lesson: "Lesson 4",
    question: "Which is a typical stack application?",
    options: [
      "Bank waiting line",
      "Bracket matching",
      "Airport queue",
      "Round-robin scheduling"
    ],
    answer: "Bracket matching",
    explanation: "Bracket matching is a classic stack application."
  },
  {
    lesson: "Lesson 5",
    question: "A queue follows which rule?",
    options: ["LIFO", "FIFO", "Random", "Sorted"],
    answer: "FIFO",
    explanation: "Queues follow First In, First Out."
  },
  {
    lesson: "Lesson 5",
    question: "Where does insertion happen in a queue?",
    options: ["Front", "Back", "Top", "Middle"],
    answer: "Back",
    explanation: "The inserted object becomes the back of the queue."
  },
  {
    lesson: "Lesson 5",
    question: "Where does removal happen in a queue?",
    options: ["Back", "Middle", "Front", "Top"],
    answer: "Front",
    explanation: "Queue pop/dequeue removes the current front."
  },
  {
    lesson: "Lesson 5",
    question: "Calling front() on an empty queue causes:",
    options: ["Overflow", "Underflow", "Traversal", "Replacement"],
    answer: "Underflow",
    explanation: "front() on an empty queue is underflow."
  },
  {
    lesson: "Lesson 5",
    question: "Why is a circular queue useful?",
    options: [
      "It changes FIFO to LIFO",
      "It avoids wasting free positions in an array-based queue",
      "It removes the need for front()",
      "It makes every operation recursive"
    ],
    answer: "It avoids wasting free positions in an array-based queue",
    explanation: "Circular queues reuse open positions efficiently."
  }
];

window.examConfig = {
  classicCount: 7,
  testCount: 3
};
