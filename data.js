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
    count: "50 QUESTIONS"
  },
  {
    id: "classic-all",
    icon: "✍️",
    title: "Classic Questions — All Lessons",
    description: "Open-ended questions with expected key points.",
    count: "30 QUESTIONS"
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
    question: "Define an algorithm and list its key properties.",
    points: [
      "Finite sequence of well-defined steps",
      "Solves a problem",
      "Takes input and produces output",
      "Terminates / deterministic / unambiguous"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "What is a data structure and why is it important?",
    points: [
      "Way of organizing and storing data",
      "Supports efficient operations",
      "Choice affects performance",
      "Used by algorithms"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "What is the difference between a data structure and an abstract data type (ADT)? Give one ADT and two implementations.",
    points: [
      "ADT defines behavior",
      "Data structure is implementation",
      "Example ADT: stack or queue",
      "Implementations: array and linked list"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "Explain the difference between an array and a linked list.",
    points: [
      "Array uses contiguous memory",
      "Linked list uses nodes and references",
      "Array gives fast indexed access",
      "Linked list is more flexible for updates"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "What are the strengths and weaknesses of arrays?",
    points: [
      "Fast direct access",
      "Good cache behavior / contiguous memory",
      "Insert/delete in middle is expensive",
      "Fixed-size or resizing cost"
    ]
  },
  {
    lesson: "Lesson 1",
    question: "What are the strengths and weaknesses of linked lists?",
    points: [
      "Flexible insertion and deletion",
      "No contiguous memory requirement",
      "Weak random access",
      "Extra pointer memory"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Why do we analyze algorithms instead of only checking whether they are correct?",
    points: [
      "Correct algorithms can still be inefficient",
      "Need to compare solutions",
      "Need to predict performance for large input",
      "Supports scalability decisions"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Explain time complexity and space complexity.",
    points: [
      "Time complexity = runtime growth",
      "Space complexity = memory growth",
      "Both depend on input size",
      "There may be time-space trade-offs"
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
    question: "Compare O(1), O(log n), O(n), O(n log n), and O(n^2) from best to worst.",
    points: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(n^2)"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "What does amortized O(1) mean? Explain using dynamic arrays such as Python lists.",
    points: [
      "Most operations are constant time on average",
      "Occasional resize is expensive",
      "Cost is spread over many cheap appends",
      "Append is amortized O(1)"
    ]
  },
  {
    lesson: "Lesson 2",
    question: "Why do asymptotic notations ignore constant factors for large n?",
    points: [
      "Growth rate matters more for large input",
      "Constants matter less asymptotically",
      "Used for comparing scalability",
      "Focus is on dominant behavior"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Explain the difference between contiguous allocation and linked allocation.",
    points: [
      "Contiguous = consecutive memory cells",
      "Linked = nodes joined by references",
      "Contiguous supports direct access",
      "Linked is flexible when size changes"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Why can expanding contiguous storage be costly?",
    points: [
      "Need larger continuous block",
      "Old values may need copying",
      "Resizing takes extra time",
      "Memory continuity requirement"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "List the basic operations of an abstract list and explain what traversal means.",
    points: [
      "Access, insert, erase, replace",
      "Traversal means moving through elements",
      "Next/previous idea",
      "Navigation after access"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Explain the difference between singly linked lists and doubly linked lists.",
    points: [
      "Singly = next reference only",
      "Doubly = previous and next",
      "Doubly supports backward traversal",
      "Doubly uses more memory"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Why is erasing from the front of a singly linked list O(1), but erasing from the back can be O(n)?",
    points: [
      "Front erase updates head directly",
      "Back erase needs previous node",
      "May require traversal",
      "No direct previous link in singly linked list"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Once you already have a pointer to the kth node in a doubly linked list, why are many operations Θ(1)?",
    points: [
      "No extra search needed",
      "Insert before/after is local pointer change",
      "Erase is local pointer change",
      "Previous and next are directly available"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Explain why concatenating two linked lists can be Θ(1) when a tail pointer is available.",
    points: [
      "Tail of first points to head of second",
      "No need to traverse the first list",
      "Tail pointer is updated",
      "Local pointer change only"
    ]
  },
  {
    lesson: "Lesson 3",
    question: "Why do arrays usually have better cache performance than linked lists?",
    points: [
      "Contiguous memory",
      "Spatial locality",
      "CPU cache friendliness",
      "Linked lists jump across memory"
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
    question: "What is the difference between stack.top() and stack.pop()?",
    points: [
      "top reads top value without removing",
      "pop removes and returns top value",
      "Both act on the top",
      "Both can fail on empty stack"
    ]
  },
  {
    lesson: "Lesson 4",
    question: "Under what condition do both stack.top() and stack.pop() raise an exception?",
    points: [
      "When stack is empty",
      "Top element does not exist",
      "Pop cannot remove from empty stack",
      "This is an error condition / underflow-style issue"
    ]
  },
  {
    lesson: "Lesson 4",
    question: "Name three applications of stacks and explain why a stack is suitable for each.",
    points: [
      "Bracket/tag matching",
      "Function calls",
      "Undo/redo or reverse-Polish calculators",
      "All need most-recent-first behavior"
    ]
  },
  {
    lesson: "Lesson 4",
    question: "Why is using the front of a singly linked list a good way to implement a stack?",
    points: [
      "Push at front is Θ(1)",
      "Pop from front is Θ(1)",
      "Top is head value",
      "No traversal needed"
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
    question: "A student uses a Python list with append() and pop(0) to implement a queue. Is it correct and is it efficient?",
    points: [
      "FIFO behavior is correct",
      "pop(0) is inefficient",
      "Front removal shifts elements",
      "deque or circular array is better"
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
    question: "Which of the following is a key property of a valid algorithm?",
    options: ["It never stops", "It must be finite", "It must use recursion", "It must use arrays"],
    answer: "It must be finite",
    explanation: "An algorithm must terminate after a finite number of steps."
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
    lesson: "Lesson 1",
    question: "What is the time complexity of accessing an array element by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
    explanation: "Array elements are accessed directly by index."
  },
  {
    lesson: "Lesson 1",
    question: "In a fixed-size array of capacity 5, inserting a 6th element causes:",
    options: ["Automatic resize", "Overflow / out-of-bounds error", "O(1) insertion", "Queue underflow"],
    answer: "Overflow / out-of-bounds error",
    explanation: "A fixed-size array cannot grow beyond its capacity."
  },
  {
    lesson: "Lesson 1",
    question: "What is the worst-case time complexity of searching in an unsorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
    explanation: "In the worst case, every element may need to be checked."
  },
  {
    lesson: "Lesson 1",
    question: "Inserting an element at the beginning of an array of n elements usually takes:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(n)",
    explanation: "Existing elements must be shifted."
  },
  {
    lesson: "Lesson 1",
    question: "Appending to the end of a dynamic array such as a Python list is typically:",
    options: ["O(n)", "O(1) amortized", "O(log n)", "O(n^2)"],
    answer: "O(1) amortized",
    explanation: "Resizing is occasional, so the average append cost is amortized O(1)."
  },
  {
    lesson: "Lesson 1",
    question: "Deleting an element from the middle of an array usually takes:",
    options: ["O(1)", "O(log n)", "O(n)", "O(2^n)"],
    answer: "O(n)",
    explanation: "Later elements must shift left."
  },
  {
    lesson: "Lesson 1",
    question: "In a singly linked list, each node stores:",
    options: [
      "Only data",
      "Only a pointer",
      "Data and a pointer to the next node",
      "Data and pointers to both neighbors"
    ],
    answer: "Data and a pointer to the next node",
    explanation: "A singly linked list node stores data and a next reference."
  },
  {
    lesson: "Lesson 1",
    question: "Inserting a node at the head of a singly linked list is typically:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(1)",
    explanation: "Only a few pointers need to be updated."
  },
  {
    lesson: "Lesson 1",
    question: "Why do linked lists usually have weaker random access than arrays?",
    options: [
      "They cannot store values",
      "They require traversal node by node",
      "They are sorted automatically",
      "They always use more CPU"
    ],
    answer: "They require traversal node by node",
    explanation: "To reach a position, you usually must traverse from the head."
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
    question: "What does space complexity describe?",
    options: [
      "How memory usage grows with input size",
      "How many loops a program has",
      "How many classes are defined",
      "How many outputs are printed"
    ],
    answer: "How memory usage grows with input size",
    explanation: "Space complexity measures the growth of memory usage."
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
    lesson: "Lesson 2",
    question: "Which growth rate is better for large n?",
    options: ["O(n^2)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(log n)",
    explanation: "Logarithmic growth scales better than linear, n log n, or quadratic."
  },
  {
    lesson: "Lesson 2",
    question: "Which ordering is correct from best to worst for large n?",
    options: [
      "O(n^2), O(n), O(log n), O(1)",
      "O(1), O(log n), O(n), O(n^2)",
      "O(log n), O(1), O(n^2), O(n)",
      "O(n), O(log n), O(1), O(n^2)"
    ],
    answer: "O(1), O(log n), O(n), O(n^2)",
    explanation: "This is the standard asymptotic ordering."
  },
  {
    lesson: "Lesson 2",
    question: "Binary search has time complexity:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(log n)",
    explanation: "Binary search halves the search space each step."
  },
  {
    lesson: "Lesson 2",
    question: "Linear search has time complexity:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
    explanation: "In the worst case, it scans every element."
  },
  {
    lesson: "Lesson 2",
    question: "Merge sort is listed as:",
    options: ["O(1)", "O(log n)", "O(n log n)", "O(n^2)"],
    answer: "O(n log n)",
    explanation: "Merge sort has O(n log n) time complexity."
  },
  {
    lesson: "Lesson 2",
    question: "Bubble sort is listed as:",
    options: ["O(1)", "O(log n)", "O(n log n)", "O(n^2)"],
    answer: "O(n^2)",
    explanation: "Bubble sort is quadratic in the standard analysis."
  },
  {
    lesson: "Lesson 2",
    question: "What does amortized O(1) append mean for a dynamic array?",
    options: [
      "Every single append is exactly constant time",
      "Most appends are cheap, and occasional resize cost is spread out",
      "Append is always O(n)",
      "Append uses recursion"
    ],
    answer: "Most appends are cheap, and occasional resize cost is spread out",
    explanation: "That is the idea behind amortized O(1)."
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
    lesson: "Lesson 3",
    question: "Why can expanding contiguous storage be costly?",
    options: [
      "Because data may need to be copied to a new larger block",
      "Because linked pointers must be reversed",
      "Because arrays do not support access",
      "Because queues break"
    ],
    answer: "Because data may need to be copied to a new larger block",
    explanation: "Resizing contiguous storage may require copying elements."
  },
  {
    lesson: "Lesson 3",
    question: "In a singly linked list, moving to the previous node is difficult because:",
    options: [
      "Lists are always circular",
      "There is no direct previous pointer",
      "The head is missing",
      "Nodes cannot store data"
    ],
    answer: "There is no direct previous pointer",
    explanation: "Singly linked lists point forward only."
  },
  {
    lesson: "Lesson 3",
    question: "Concatenating two linked lists can be Θ(1) if:",
    options: [
      "The first list has a tail pointer",
      "Both lists are arrays",
      "The lists are sorted",
      "The lists have equal length"
    ],
    answer: "The first list has a tail pointer",
    explanation: "With a tail pointer, you can connect the lists directly."
  },
  {
    lesson: "Lesson 3",
    question: "Allocating and deallocating all nodes in a linked list requires:",
    options: ["Θ(1)", "Θ(log n)", "Θ(n)", "Θ(n^2)"],
    answer: "Θ(n)",
    explanation: "You must visit every node."
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
    question: "Which operation checks whether a stack is empty?",
    options: ["top()", "empty()", "push()", "front()"],
    answer: "empty()",
    explanation: "empty() tests whether the stack has no elements."
  },
  {
    lesson: "Lesson 4",
    question: "Calling pop() on an empty stack is:",
    options: ["Valid", "An error", "Always O(1)", "Traversal"],
    answer: "An error",
    explanation: "Removing from an empty stack is invalid."
  },
  {
    lesson: "Lesson 4",
    question: "Which is a typical stack application?",
    options: [
      "Bank waiting line",
      "Bracket matching",
      "Airport queue",
      "Printer queue"
    ],
    answer: "Bracket matching",
    explanation: "Bracket matching is a classic stack application."
  },
  {
    lesson: "Lesson 4",
    question: "Which real-world example fits LIFO best?",
    options: ["Checkout line", "Stack of plates", "Airport security line", "Ticket queue"],
    answer: "Stack of plates",
    explanation: "The last plate placed on top is the first removed."
  },
  {
    lesson: "Lesson 4",
    question: "Why is using the front of a singly linked list good for stack implementation?",
    options: [
      "Push and pop at the front are Θ(1)",
      "Because stacks need random access",
      "Because arrays cannot implement stacks",
      "Because it becomes FIFO"
    ],
    answer: "Push and pop at the front are Θ(1)",
    explanation: "Front operations in a singly linked list are constant time."
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
    question: "Calling pop() on an empty queue causes:",
    options: ["Overflow", "Underflow", "Recursion", "Traversal"],
    answer: "Underflow",
    explanation: "Removing from an empty queue is underflow."
  },
  {
    lesson: "Lesson 5",
    question: "Why is using append() with pop(0) on a Python list inefficient for a queue?",
    options: [
      "Because append() is invalid",
      "Because pop(0) shifts remaining elements",
      "Because queues require recursion",
      "Because Python lists cannot hold strings"
    ],
    answer: "Because pop(0) shifts remaining elements",
    explanation: "Front removal from a Python list shifts elements and is not O(1)."
  },
  {
    lesson: "Lesson 5",
    question: "Which implementation goal is stated for queue operations?",
    options: ["All operations must be Θ(1)", "All operations must be Θ(n)", "Only pop must be Θ(n)", "Only front must be recursive"],
    answer: "All operations must be Θ(1)",
    explanation: "The queue slides explicitly state this requirement."
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
  },
  {
    lesson: "Lesson 5",
    question: "Which real-world situation best matches queue behavior?",
    options: [
      "Undo history",
      "Stack of books",
      "Bank waiting line",
      "Recursive function calls"
    ],
    answer: "Bank waiting line",
    explanation: "Customers are served in order of arrival."
  },
  {
    lesson: "Lesson 5",
    question: "In the linked-list implementation of a queue, why is removal at the front Θ(1)?",
    options: [
      "Because the head can be updated directly",
      "Because the queue is sorted",
      "Because arrays are used internally",
      "Because the tail is removed"
    ],
    answer: "Because the head can be updated directly",
    explanation: "Removing the front node only updates the head pointer."
  }
];

window.examConfig = {
  classicCount: 7,
  testCount: 3
};
