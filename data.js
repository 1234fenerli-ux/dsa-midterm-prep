const studyLessons = [
  {
    lesson: "Lesson 1",
    title: "What is an Algorithm?",
    points: [
      "An algorithm is a finite sequence of well-defined steps designed to solve a problem.",
      "A proper algorithm takes input, processes it, and produces output.",
      "It should be deterministic and unambiguous.",
      "Correctness and efficiency are both important when evaluating an algorithm.",
      "Typical examples from the slides include finding the maximum element, sorting a list, and searching for a value.",
      "Exam Tip: if a question asks for the definition of an algorithm, mention finite steps, input/output, and problem solving."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "What is a Data Structure?",
    points: [
      "A data structure is a way of organizing and storing data so operations can be performed efficiently.",
      "Different structures support different strengths, such as fast indexed access or easy insertion and deletion.",
      "The choice of data structure directly affects algorithm performance.",
      "In software engineering, algorithms and data structures are closely connected: algorithms operate on data structures.",
      "Exam Tip: connect the structure choice to runtime and memory behavior."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Data Structure vs ADT",
    points: [
      "An Abstract Data Type (ADT) defines behavior and operations, not implementation details.",
      "A data structure is the concrete way data is stored in memory.",
      "For example, stack is an ADT; it can be implemented using an array or a linked list.",
      "Queue is also an ADT and can be implemented in multiple ways.",
      "Exam Tip: if asked for the difference, say ADT = what it does, data structure = how it is built."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Algorithm Analysis Overview",
    points: [
      "Algorithm analysis studies how performance changes as input size grows.",
      "The key ideas are time complexity, space complexity, scalability, and efficiency.",
      "Two correct algorithms may behave very differently when the input becomes large.",
      "Asymptotic notation is used to compare growth rates instead of exact running time.",
      "Exam Tip: always relate analysis to growth with respect to input size n."
    ]
  },
  {
    lesson: "Lesson 1",
    title: "Asymptotic Notation Introduction",
    points: [
      "Big-O gives an upper bound, often discussed as worst-case growth.",
      "Big-Omega gives a lower bound.",
      "Big-Theta gives a tight bound when upper and lower bounds match.",
      "Examples in the slides include linear search as O(n) and binary search as O(log n).",
      "Common examples also include O(1) array access.",
      "Exam Tip: upper bound / lower bound / tight bound wording matters."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Why Do We Analyze Algorithms?",
    points: [
      "A program may work correctly but still be inefficient.",
      "Algorithm analysis helps us compare solutions and predict performance.",
      "It is especially important for scalable systems and large inputs.",
      "Even small inefficiencies can become serious in large systems.",
      "Exam Tip: say analysis helps compare, predict, and scale."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "What is Complexity?",
    points: [
      "Complexity describes how many resources an algorithm needs.",
      "The two main forms are time complexity and space complexity.",
      "Time complexity is about running time growth.",
      "Space complexity is about memory usage growth.",
      "Exam Tip: complexity is not only about time; space also matters."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Time Complexity",
    points: [
      "Time complexity measures how many steps an algorithm takes as input size grows.",
      "It focuses on growth behavior rather than exact seconds.",
      "For example, a loop running n times has O(n) time complexity.",
      "The slides also compare O(1), O(log n), O(n), and O(n²).",
      "Exam Tip: explain time complexity using growth with respect to n."
    ]
  },
  {
    lesson: "Lesson 2",
    title: "Space Complexity",
    points: [
      "Space complexity measures how much memory an algorithm needs.",
      "This includes variables, arrays, and recursive calls.",
      "Some algorithms are fast but use more memory, creating a time-space trade-off.",
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
      "These notations are used to reason about growth rate for large inputs.",
      "Exam Tip: Theta means both upper and lower bounds are of the same order."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Concrete Data Structures",
    points: [
      "The slides list arrays, linked lists, trees, and graphs as data structures.",
      "They also discuss storage approaches such as contiguous, linked, and indexed allocation.",
      "Different storage choices affect flexibility and performance.",
      "Exam Tip: know the difference between the abstract idea and the memory organization."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Memory Allocation",
    points: [
      "Memory allocation describes how data is stored in memory.",
      "The main types in the slides are contiguous allocation, linked allocation, and indexed allocation.",
      "Arrays are the main example of contiguous allocation.",
      "Linked lists are the main example of linked allocation.",
      "Exam Tip: allocation strategy affects both flexibility and runtime."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Contiguous Allocation",
    points: [
      "Contiguous allocation stores elements in consecutive memory locations.",
      "It supports direct index-based access efficiently.",
      "A limitation is that expanding storage may require copying to a new block.",
      "The slides mention Python lists internally growing by creating a bigger array and copying elements.",
      "Exam Tip: fast access is the strength; resizing/copying is the weakness."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Linked Allocation",
    points: [
      "Linked allocation stores data in nodes connected by references.",
      "Each node typically contains a value and one or more links.",
      "It supports flexible structural changes without requiring contiguous memory.",
      "The trade-off is weaker direct access compared with arrays.",
      "Exam Tip: say nodes + references + no contiguous memory requirement."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "List Operations",
    points: [
      "Operations on abstract lists include access, insert, erase, and replace at the kth position.",
      "Traversal means moving to the previous or next element once access is available.",
      "Operations on two lists can include concatenation and checking whether one is a sub-list of another.",
      "Exam Tip: know which operations are structural and which are navigational."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Array vs Linked List Run Times",
    points: [
      "The slides compare operations at the front, arbitrary kth position, and back.",
      "Arrays are strong at direct indexed access.",
      "Linked lists are more flexible for certain insert/erase operations when the location is known.",
      "In a singly linked list, moving backward is difficult because there is no direct previous pointer.",
      "Exam Tip: runtime questions often depend on which position is being discussed."
    ]
  },
  {
    lesson: "Lesson 3",
    title: "Singly vs Doubly Linked Lists",
    points: [
      "A singly linked list stores a reference to the next node only.",
      "A doubly linked list stores references to both previous and next nodes.",
      "Doubly linked lists improve backward traversal but use extra memory.",
      "Exam Tip: mention the trade-off between navigation power and memory cost."
    ]
  },
  {
    lesson: "Lesson 4",
    title: "Stack ADT",
    points: [
      "A stack stores items in linear order and only allows insertion/removal at the top.",
      "The four main operations are push(x), pop(), top(), and empty().",
      "Calling pop() or top() on an empty stack is an error.",
      "Stack behavior follows LIFO: Last In, First Out.",
      "Exam Tip: always connect stack to the word top."
    ]
  },
  {
    lesson: "Lesson 4",
    title: "Stack Applications",
    points: [
      "The slides list parsing, bracket matching, HTML/XML tag matching, function calls, undo/redo, and reverse-Polish calculators.",
      "Stacks are powerful because many nested or reverse-order problems naturally fit LIFO behavior.",
      "Exam Tip: real-life examples are often asked in classic questions."
    ]
  },
  {
    lesson: "Lesson 5",
    title: "Queue ADT",
    points: [
      "A queue is an abstract data type with explicit linear ordering.",
      "The inserted object becomes the back of the queue.",
      "The object that has been in the queue the longest is the front.",
      "The remove operation pop() removes the current front.",
      "Queue behavior follows FIFO: First In, First Out.",
      "Exam Tip: in a queue, insertion and removal happen at opposite ends."
    ]
  },
  {
    lesson: "Lesson 5",
    title: "Queue Operations and Exceptions",
    points: [
      "The main operations are push(x), pop(), front(), and empty().",
      "Calling pop() on an empty queue causes underflow.",
      "Calling front() on an empty queue also causes underflow.",
      "These are undefined operations and must raise an exception.",
      "Exam Tip: underflow is a standard midterm keyword."
    ]
  },
  {
    lesson: "Lesson 5",
    title: "Queue Applications and Circular Arrays",
    points: [
      "Queues are used in client-server systems, waiting lines, grocery stores, banks, airport security, and printer or mail servers.",
      "A circular array implementation is important because it reuses freed positions efficiently.",
      "Without circular behavior, a simple array queue can waste space at the front after deletions.",
      "Exam Tip: circular queue questions often ask why wrap-around is necessary."
    ]
  }
];
const classicPool = [
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
const mcqPool = [
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
    explanation: "The Week 1 slides define an algorithm as a finite sequence of well-defined steps."
  },
  {
    lesson: "Lesson 1",
    question: "Which of the following is listed as a property of an algorithm in the slides?",
    options: [
      "Always recursive",
      "Deterministic and unambiguous",
      "Always O(1)",
      "Stores data contiguously"
    ],
    answer: "Deterministic and unambiguous",
    explanation: "The Week 1 slides explicitly mention deterministic and unambiguous."
  },
  {
    lesson: "Lesson 1",
    question: "Which of the following is NOT given as an example problem for algorithms?",
    options: [
      "Finding the maximum element",
      "Sorting a list",
      "Searching for a value",
      "Allocating network bandwidth in the slides"
    ],
    answer: "Allocating network bandwidth in the slides",
    explanation: "The listed examples are maximum, sorting, and searching."
  },
  {
    lesson: "Lesson 1",
    question: "A data structure is best described as:",
    options: [
      "A lower bound notation",
      "A way of organizing and storing data",
      "A specific CPU instruction",
      "A proof technique"
    ],
    answer: "A way of organizing and storing data",
    explanation: "That is the core definition used in the course introduction."
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
    explanation: "ADT describes what the structure does, not how it is implemented."
  },
  {
    lesson: "Lesson 1",
    question: "Which pair correctly matches an ADT and possible implementations?",
    options: [
      "Queue -> only graph",
      "Stack -> array or linked list",
      "Big-O -> array or tree",
      "Algorithm -> front or back"
    ],
    answer: "Stack -> array or linked list",
    explanation: "The stack slides explicitly discuss array and linked-list implementations."
  },
  {
    lesson: "Lesson 2",
    question: "What is the key question shown in the algorithm analysis slides?",
    options: [
      "How many variables are declared?",
      "How does performance change as input size grows?",
      "How many programming languages support the code?",
      "How many pages are in the lecture notes?"
    ],
    answer: "How does performance change as input size grows?",
    explanation: "This is stated directly in Week 1 analysis slides."
  },
  {
    lesson: "Lesson 2",
    question: "What does time complexity measure?",
    options: [
      "How much memory is used",
      "How many steps an algorithm takes as input grows",
      "How many files are created",
      "How many classes are defined"
    ],
    answer: "How many steps an algorithm takes as input grows",
    explanation: "Week 2 states that time complexity measures how many steps an algorithm takes."
  },
  {
    lesson: "Lesson 2",
    question: "What does space complexity measure?",
    options: [
      "The number of loops in the code",
      "How much memory the algorithm needs",
      "The size of the output only",
      "The number of comparisons only"
    ],
    answer: "How much memory the algorithm needs",
    explanation: "Week 2 explicitly defines space complexity this way."
  },
  {
    lesson: "Lesson 2",
    question: "Which notation is described in the slides as an upper bound?",
    options: ["Big-O", "Big-Omega", "Big-Theta", "FIFO"],
    answer: "Big-O",
    explanation: "The slides define Big-O as an upper bound."
  },
  {
    lesson: "Lesson 2",
    question: "Which notation is described as a tight bound?",
    options: ["Big-O", "Big-Omega", "Big-Theta", "LIFO"],
    answer: "Big-Theta",
    explanation: "Theta is the tight bound in the course notes."
  },
  {
    lesson: "Lesson 2",
    question: "Which notation is described as a lower bound?",
    options: ["Big-O", "Big-Omega", "Big-Theta", "ADT"],
    answer: "Big-Omega",
    explanation: "Omega is presented as the lower bound."
  },
  {
    lesson: "Lesson 2",
    question: "In the slides, which search is matched with O(log n)?",
    options: [
      "Linear search",
      "Binary search",
      "Depth-first search",
      "Hash search"
    ],
    answer: "Binary search",
    explanation: "Week 1 shows Binary Search -> O(log n)."
  },
  {
    lesson: "Lesson 2",
    question: "In the slides, accessing an array element is matched with:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(1)",
    explanation: "Array access is given as the O(1) example."
  },
  {
    lesson: "Lesson 2",
    question: "For large n, which growth rate is generally better?",
    options: ["O(n²)", "O(n)", "O(log n)", "All are equal"],
    answer: "O(log n)",
    explanation: "Logarithmic growth scales better than linear or quadratic growth."
  },
  {
    lesson: "Lesson 3",
    question: "Which of the following is listed as a concrete data structure in Week 3?",
    options: ["Array", "Only ADT", "Only notation", "Only algorithm"],
    answer: "Array",
    explanation: "Week 3 lists arrays, linked lists, trees, and graphs."
  },
  {
    lesson: "Lesson 3",
    question: "Which memory allocation type is prototypically associated with arrays?",
    options: [
      "Linked allocation",
      "Contiguous allocation",
      "Random allocation",
      "Circular allocation"
    ],
    answer: "Contiguous allocation",
    explanation: "Week 3 explicitly gives arrays as the example of contiguous allocation."
  },
  {
    lesson: "Lesson 3",
    question: "Which memory allocation type is prototypically associated with linked lists?",
    options: [
      "Contiguous allocation",
      "Indexed allocation",
      "Linked allocation",
      "Binary allocation"
    ],
    answer: "Linked allocation",
    explanation: "Week 3 gives linked lists as the example of linked allocation."
  },
  {
    lesson: "Lesson 3",
    question: "Why can expanding contiguous storage be costly?",
    options: [
      "Because the CPU stops working",
      "Because data may need to be copied to a new larger block",
      "Because links must be reversed",
      "Because indexing disappears"
    ],
    answer: "Because data may need to be copied to a new larger block",
    explanation: "The slides explain that expansion may require copying data."
  },
  {
    lesson: "Lesson 3",
    question: "What is stored in linked allocation?",
    options: [
      "Only array indices",
      "Data in nodes connected by references",
      "Only contiguous memory blocks",
      "Only mathematical graphs"
    ],
    answer: "Data in nodes connected by references",
    explanation: "That is the Week 3 definition of linked allocation."
  },
  {
    lesson: "Lesson 3",
    question: "Which is one of the listed operations at the kth entry of a list?",
    options: ["Compile", "Insert", "Encrypt", "Hash"],
    answer: "Insert",
    explanation: "The linked list slides list access, insert, erase, and replace."
  },
  {
    lesson: "Lesson 3",
    question: "Traversal means:",
    options: [
      "Sorting all elements",
      "Moving to previous or next elements",
      "Deleting the list",
      "Changing the memory allocator"
    ],
    answer: "Moving to previous or next elements",
    explanation: "This is the definition given in the list operations slides."
  },
  {
    lesson: "Lesson 3",
    question: "Which two list data structures are explicitly reviewed for run-times?",
    options: [
      "Arrays and linked lists",
      "Stacks and heaps",
      "Graphs and trees",
      "Sets and maps"
    ],
    answer: "Arrays and linked lists",
    explanation: "The list slides say these are the most obvious structures for implementing abstract lists."
  },
  {
    lesson: "Lesson 3",
    question: "A singly linked list node directly stores:",
    options: [
      "Previous pointer only",
      "Next reference only",
      "Both previous and next references",
      "An array index only"
    ],
    answer: "Next reference only",
    explanation: "Singly linked lists point forward only."
  },
  {
    lesson: "Lesson 3",
    question: "A doubly linked list differs from a singly linked list because it has:",
    options: [
      "No nodes",
      "Both previous and next links",
      "Only arrays",
      "No traversal"
    ],
    answer: "Both previous and next links",
    explanation: "This is the defining difference shown in the slides."
  },
  {
    lesson: "Lesson 3",
    question: "In the singly linked list runtime table, why is 'previous' difficult?",
    options: [
      "Because the list is circular",
      "Because there is no direct previous link",
      "Because arrays are faster",
      "Because the tail is missing"
    ],
    answer: "Because there is no direct previous link",
    explanation: "In a singly linked list, moving backward may require traversal."
  },
  {
    lesson: "Lesson 4",
    question: "A stack allows insertion and removal only from the:",
    options: ["Front", "Back", "Top", "Middle"],
    answer: "Top",
    explanation: "The stack slides define stack operations around the top."
  },
  {
    lesson: "Lesson 4",
    question: "Which operation puts an item on top of a stack?",
    options: ["pop()", "top()", "push(x)", "front()"],
    answer: "push(x)",
    explanation: "push(x) adds a new item to the top."
  },
  {
    lesson: "Lesson 4",
    question: "Which operation looks at the top item without removing it?",
    options: ["top()", "pop()", "push()", "empty()"],
    answer: "top()",
    explanation: "top() returns the top item without removing it."
  },
  {
    lesson: "Lesson 4",
    question: "Calling pop() on an empty stack is:",
    options: [
      "A normal operation",
      "An error",
      "A sorting step",
      "A traversal step"
    ],
    answer: "An error",
    explanation: "The stack notes say pop() or top() on an empty stack is an error."
  },
  {
    lesson: "Lesson 4",
    question: "Stack behavior follows:",
    options: ["FIFO", "LIFO", "Theta", "O(1)"],
    answer: "LIFO",
    explanation: "Last In, First Out is the key stack rule."
  },
  {
    lesson: "Lesson 4",
    question: "Which is listed as a stack application?",
    options: [
      "Bracket matching",
      "Airport check-in queue",
      "Front() processing",
      "Circular indexing only"
    ],
    answer: "Bracket matching",
    explanation: "Bracket matching is explicitly listed in the stack applications."
  },
  {
    lesson: "Lesson 5",
    question: "In a queue, the inserted object becomes the:",
    options: ["Front", "Back", "Top", "Middle"],
    answer: "Back",
    explanation: "The queue slides say inserted objects become the back."
  },
  {
    lesson: "Lesson 5",
    question: "In a queue, the object in the structure the longest is the:",
    options: ["Back", "Top", "Front", "Center"],
    answer: "Front",
    explanation: "The queue slides define the oldest object as the front."
  },
  {
    lesson: "Lesson 5",
    question: "Queue behavior follows:",
    options: ["LIFO", "FIFO", "DFS", "Theta"],
    answer: "FIFO",
    explanation: "Queue is First-In First-Out."
  },
  {
    lesson: "Lesson 5",
    question: "Which operation returns the front element of a queue?",
    options: ["pop()", "front()", "push()", "top()"],
    answer: "front()",
    explanation: "front() returns the current front element."
  },
  {
    lesson: "Lesson 5",
    question: "Calling front() on an empty queue causes:",
    options: ["Overflow", "Underflow", "Traversal", "Theta"],
    answer: "Underflow",
    explanation: "The queue slides explicitly say front() on an empty queue is underflow."
  },
  {
    lesson: "Lesson 5",
    question: "Why do we need a circular array in queue implementation?",
    options: [
      "To change FIFO into LIFO",
      "To reuse free positions efficiently",
      "To remove the need for front()",
      "To make every operation O(log n)"
    ],
    answer: "To reuse free positions efficiently",
    explanation: "This is the key idea behind circular queue implementation."
  }
];
  {
    lesson: "Lesson 1",
    question: "Which statement is TRUE about algorithms according to the course introduction?",
    options: [
      "They must always be written in Python",
      "They are language-independent problem-solving procedures",
      "They are always data structures",
      "They only work for sorting"
    ],
    answer: "They are language-independent problem-solving procedures",
    explanation: "The same algorithm can be expressed in pseudocode or different programming languages."
  },
  {
    lesson: "Lesson 1",
    question: "Which of the following best explains why data structures are important?",
    options: [
      "They remove the need for algorithms",
      "They determine how efficiently data can be accessed and modified",
      "They always reduce memory to O(1)",
      "They are only needed for linked lists"
    ],
    answer: "They determine how efficiently data can be accessed and modified",
    explanation: "The course emphasizes that structure choice affects efficiency."
  },
  {
    lesson: "Lesson 1",
    question: "If stack is an ADT, what is an array-based stack?",
    options: [
      "Another ADT",
      "A notation",
      "A concrete implementation",
      "A search algorithm"
    ],
    answer: "A concrete implementation",
    explanation: "ADT defines behavior; array-based stack is one implementation."
  },
  {
    lesson: "Lesson 1",
    question: "Which of the following is the BEST match?",
    options: [
      "ADT -> exact memory layout",
      "Data structure -> behavior only",
      "ADT -> operations and behavior",
      "Array -> lower bound notation"
    ],
    answer: "ADT -> operations and behavior",
    explanation: "This is the core distinction presented in the notes."
  },
  {
    lesson: "Lesson 2",
    question: "Why do asymptotic notations ignore constant factors for large n?",
    options: [
      "Because constants are illegal in algorithms",
      "Because growth rate matters more than exact small differences",
      "Because constants only matter in recursion",
      "Because arrays remove constants"
    ],
    answer: "Because growth rate matters more than exact small differences",
    explanation: "Asymptotic analysis focuses on long-run growth behavior."
  },
  {
    lesson: "Lesson 2",
    question: "Which is the best interpretation of O(n)?",
    options: [
      "The algorithm always runs exactly n seconds",
      "The growth is bounded above by a constant multiple of n for large input",
      "The algorithm uses no memory",
      "The algorithm is always recursive"
    ],
    answer: "The growth is bounded above by a constant multiple of n for large input",
    explanation: "That is the idea of an asymptotic upper bound."
  },
  {
    lesson: "Lesson 2",
    question: "Which is the best interpretation of Theta(n)?",
    options: [
      "Growth is both upper- and lower-bounded by n asymptotically",
      "The algorithm is always best-case",
      "The algorithm uses exactly n bytes",
      "The algorithm only works for arrays"
    ],
    answer: "Growth is both upper- and lower-bounded by n asymptotically",
    explanation: "Theta is a tight bound."
  },
  {
    lesson: "Lesson 2",
    question: "Which complexity class usually scales WORSE than O(n log n)?",
    options: ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
    answer: "O(n^2)",
    explanation: "Quadratic growth is worse than n log n for large inputs."
  },
  {
    lesson: "Lesson 2",
    question: "Which pair is correctly ordered from better to worse asymptotic growth?",
    options: [
      "O(n^2), O(n), O(log n)",
      "O(log n), O(n), O(n^2)",
      "O(n), O(1), O(log n)",
      "O(n^2), O(log n), O(1)"
    ],
    answer: "O(log n), O(n), O(n^2)",
    explanation: "This follows the standard growth-rate ordering from the slides."
  },
  {
    lesson: "Lesson 2",
    question: "A time-space trade-off means:",
    options: [
      "Runtime and memory can never both matter",
      "An algorithm may save time by using more memory, or save memory by using more time",
      "Big-O equals Big-Omega",
      "Arrays and linked lists become the same"
    ],
    answer: "An algorithm may save time by using more memory, or save memory by using more time",
    explanation: "That is the standard meaning of a time-space trade-off."
  },
  {
    lesson: "Lesson 3",
    question: "Which structure is naturally associated with direct index-based access?",
    options: ["Linked list", "Queue", "Array", "Stack"],
    answer: "Array",
    explanation: "Contiguous allocation supports efficient indexed access."
  },
  {
    lesson: "Lesson 3",
    question: "Which structure does NOT require contiguous memory?",
    options: ["Array", "Linked list", "Static array", "Index table"],
    answer: "Linked list",
    explanation: "Linked allocation stores nodes separately."
  },
  {
    lesson: "Lesson 3",
    question: "What is one major weakness of linked lists compared with arrays?",
    options: [
      "They cannot store integers",
      "They have weak random/direct access",
      "They cannot grow",
      "They cannot insert elements"
    ],
    answer: "They have weak random/direct access",
    explanation: "You usually need traversal to reach a position in a linked list."
  },
  {
    lesson: "Lesson 3",
    question: "Which operation is likely to benefit from already knowing the target position in a linked list?",
    options: ["Insertion", "Index computation", "Contiguous allocation", "Binary search"],
    answer: "Insertion",
    explanation: "Linked lists can support flexible insertion when the location is already known."
  },
  {
    lesson: "Lesson 3",
    question: "Why might arrays be less flexible than linked lists when size changes often?",
    options: [
      "Arrays cannot store repeated values",
      "Arrays may need resizing and copying",
      "Arrays always require recursion",
      "Arrays cannot be traversed"
    ],
    answer: "Arrays may need resizing and copying",
    explanation: "The Week 3 notes mention growth by allocating a bigger array and copying."
  },
  {
    lesson: "Lesson 3",
    question: "Which list operation means visiting elements one by one?",
    options: ["Concatenation", "Traversal", "Replacement", "Sub-listing"],
    answer: "Traversal",
    explanation: "Traversal means moving through elements in order."
  },
  {
    lesson: "Lesson 3",
    question: "Which of the following is an operation on two lists mentioned in the slides?",
    options: [
      "Concatenation",
      "Compiler optimization",
      "Memory paging",
      "Circular shift only"
    ],
    answer: "Concatenation",
    explanation: "The notes mention concatenation and checking sub-lists."
  },
  {
    lesson: "Lesson 3",
    question: "Why can deleting the last node of a singly linked list take longer than deleting the first node?",
    options: [
      "Because the list is sorted",
      "Because you may need to traverse to find the previous node",
      "Because the head pointer is missing",
      "Because singly linked lists cannot delete nodes"
    ],
    answer: "Because you may need to traverse to find the previous node",
    explanation: "There is no direct previous pointer in a singly linked list."
  },
  {
    lesson: "Lesson 3",
    question: "What extra capability does a doubly linked list provide?",
    options: [
      "Direct O(1) access by index",
      "Backward traversal using previous links",
      "Automatic sorting",
      "No memory overhead"
    ],
    answer: "Backward traversal using previous links",
    explanation: "Doubly linked lists store previous as well as next references."
  },
  {
    lesson: "Lesson 3",
    question: "What is the trade-off of a doubly linked list compared with a singly linked list?",
    options: [
      "Less memory usage",
      "More memory usage for extra links",
      "No traversal possible",
      "Loss of insertion capability"
    ],
    answer: "More memory usage for extra links",
    explanation: "The extra previous pointer costs additional memory."
  },
  {
    lesson: "Lesson 4",
    question: "Which sequence correctly describes stack access?",
    options: [
      "Insert at front, remove at back",
      "Insert and remove only at top",
      "Insert only in the middle",
      "Remove only by index"
    ],
    answer: "Insert and remove only at top",
    explanation: "A stack restricts both insertion and removal to the top."
  },
  {
    lesson: "Lesson 4",
    question: "Which operation checks whether a stack has no elements?",
    options: ["top()", "empty()", "push()", "front()"],
    answer: "empty()",
    explanation: "The slides list empty() as one of the four main stack operations."
  },
  {
    lesson: "Lesson 4",
    question: "Which statement about top() is TRUE?",
    options: [
      "It removes the top item",
      "It returns the top item without removing it",
      "It inserts a new item",
      "It moves the top to the bottom"
    ],
    answer: "It returns the top item without removing it",
    explanation: "top() is a read-only operation on the current top element."
  },
  {
    lesson: "Lesson 4",
    question: "Which problem naturally matches stack behavior?",
    options: [
      "Grocery checkout line",
      "Undo operation history",
      "Airport boarding queue",
      "Bank waiting line"
    ],
    answer: "Undo operation history",
    explanation: "Undo naturally uses the most recent operation first."
  },
  {
    lesson: "Lesson 4",
    question: "HTML/XML tag matching is commonly implemented with a:",
    options: ["Queue", "Stack", "Array only", "Graph"],
    answer: "Stack",
    explanation: "Nested opening/closing tags fit LIFO behavior."
  },
  {
    lesson: "Lesson 4",
    question: "Which of the following is NOT a typical stack application listed in the notes?",
    options: [
      "Function calls",
      "Bracket matching",
      "Reverse-Polish calculators",
      "First-come first-served waiting lines"
    ],
    answer: "First-come first-served waiting lines",
    explanation: "That is a queue-style application, not a stack one."
  },
  {
    lesson: "Lesson 5",
    question: "In a queue, where does insertion happen?",
    options: ["Front", "Back", "Top", "Anywhere"],
    answer: "Back",
    explanation: "The inserted object becomes the back of the queue."
  },
  {
    lesson: "Lesson 5",
    question: "In a queue, pop() removes the:",
    options: ["Back", "Middle", "Front", "Top"],
    answer: "Front",
    explanation: "The remove operation takes away the current front."
  },
  {
    lesson: "Lesson 5",
    question: "Which statement best describes FIFO?",
    options: [
      "Last inserted leaves first",
      "First inserted leaves first",
      "Fastest item leaves first",
      "Front inserted only"
    ],
    answer: "First inserted leaves first",
    explanation: "FIFO means First In, First Out."
  },
  {
    lesson: "Lesson 5",
    question: "Which operation checks whether a queue is empty?",
    options: ["front()", "empty()", "push()", "top()"],
    answer: "empty()",
    explanation: "The queue ADT includes empty() as a basic operation."
  },
  {
    lesson: "Lesson 5",
    question: "Calling pop() on an empty queue causes:",
    options: ["Overflow", "Underflow", "Traversal", "Concatenation"],
    answer: "Underflow",
    explanation: "This is explicitly stated in the queue notes."
  },
  {
    lesson: "Lesson 5",
    question: "Calling front() on an empty queue causes:",
    options: ["Overflow", "Underflow", "Sorting", "Push-back"],
    answer: "Underflow",
    explanation: "front() on an empty queue is also an underflow condition."
  },
  {
    lesson: "Lesson 5",
    question: "Which real-world scenario best matches queue behavior?",
    options: [
      "Undo stack",
      "Bracket nesting",
      "Bank waiting line",
      "Function call stack"
    ],
    answer: "Bank waiting line",
    explanation: "A waiting line is a standard FIFO example."
  },
  {
    lesson: "Lesson 5",
    question: "Why is using append() with pop(0) in a Python list queue considered inefficient?",
    options: [
      "Because append() is forbidden",
      "Because pop(0) can shift the remaining elements",
      "Because Python lists cannot store queues",
      "Because it changes FIFO into LIFO"
    ],
    answer: "Because pop(0) can shift the remaining elements",
    explanation: "The practice notes highlight that front removal from a list can require shifting."
  },
  {
    lesson: "Lesson 5",
    question: "What problem does a circular queue solve?",
    options: [
      "It removes the need for a front pointer",
      "It avoids wasting array positions freed at the front",
      "It makes every operation recursive",
      "It turns a queue into a stack"
    ],
    answer: "It avoids wasting array positions freed at the front",
    explanation: "Circular arrays reuse space efficiently after deletions."
  },
  {
    lesson: "Lesson 5",
    question: "Which statement is TRUE about a circular queue?",
    options: [
      "It must use linked allocation",
      "Its front and rear can wrap around to the beginning",
      "It eliminates underflow",
      "It changes FIFO order"
    ],
    answer: "Its front and rear can wrap around to the beginning",
    explanation: "Wrap-around indexing is the key idea of circular queues."
  }
