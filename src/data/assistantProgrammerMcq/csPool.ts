import { ApMcqQuestionDef } from './types';

export const apCsQuestionsPool: ApMcqQuestionDef[] = [
  // Object-Oriented Programming & Software Engineering
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In Java or C++, what is the primary technical difference between an Abstract Class and an Interface (prior to Java 8 default methods)?',
    options: [
      'A) An abstract class can hold instance variables (state) and concrete method implementations with constructors, whereas an interface can only declare method signatures and constants',
      'B) An interface allows multiple implementations while an abstract class can never be inherited',
      'C) Interfaces are faster at runtime because they bypass the virtual method table',
      'D) Abstract classes can only have private methods'
    ],
    correctOption: 0,
    solution: 'An abstract class can maintain state via instance variables, provide non-abstract concrete methods, constructors, and access modifiers. An interface defines a pure contract containing only public abstract method signatures and public static final constants (though Java 8+ added default and static methods). A class can implement multiple interfaces but inherit from only one abstract class.',
    tags: ['Programming', 'OOP', 'Java', 'Abstract Class', 'Interface'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'Which SOLID design principle is violated when a single class handles database persistence, HTTP request routing, and business transaction logging simultaneously?',
    options: [
      'A) Open/Closed Principle (OCP)',
      'B) Single Responsibility Principle (SRP)',
      'C) Interface Segregation Principle (ISP)',
      'D) Liskov Substitution Principle (LSP)'
    ],
    correctOption: 1,
    solution: 'The Single Responsibility Principle (SRP) states that a class should have one, and only one, reason to change. Combining data persistence, HTTP transport routing, and logging gives the class multiple divergent responsibilities.',
    tags: ['Software Engineering', 'SOLID', 'SRP', 'System Design', 'Clean Code'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'What structural design pattern wraps an existing class with a new interface to make incompatible class interfaces work together seamlessly?',
    options: [
      'A) Adapter Pattern',
      'B) Factory Method Pattern',
      'C) Singleton Pattern',
      'D) Observer Pattern'
    ],
    correctOption: 0,
    solution: 'The Adapter (Wrapper) design pattern translates the interface of a legacy or third-party service into another interface that client code expects, enabling collaboration without modifying existing source code.',
    tags: ['Design Patterns', 'Adapter Pattern', 'Structural Patterns', 'OOAD'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In software testing metrics, what does McCabe’s Cyclomatic Complexity measure in a program control flow graph?',
    options: [
      'A) The total number of lines of source code (SLOC)',
      'B) The number of linearly independent execution paths through a program module: V(G) = E - N + 2P',
      'C) The memory consumption during recursive function calls',
      'D) The number of database query roundtrips'
    ],
    correctOption: 1,
    solution: 'Cyclomatic Complexity measures the structural complexity of a program by calculating the number of linearly independent paths: V(G) = E - N + 2P (where E = edges, N = nodes, and P = connected components, or simply Decision Points + 1).',
    tags: ['Software Engineering', 'Testing', 'Cyclomatic Complexity', 'McCabe', 'White Box'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In Git version control, what command safely moves uncommitted local working directory modifications into temporary storage so that you can switch branches cleanly?',
    options: [
      'A) git stash',
      'B) git reset --hard',
      'C) git clean -f',
      'D) git branch -m'
    ],
    correctOption: 0,
    solution: '`git stash` takes uncommitted changes (both staged and unstaged) and saves them on a temporary stack, reverting your working directory to match the HEAD commit so you can switch branches or pull updates.',
    tags: ['Software Engineering', 'Git', 'Version Control', 'DevOps'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'Which architectural style structures a large enterprise application as a collection of small, loosely coupled, independently deployable services communicating over lightweight HTTP REST or gRPC APIs?',
    options: [
      'A) Monolithic Architecture',
      'B) Microservices Architecture',
      'C) Peer-to-Peer Architecture',
      'D) Client-Server Mainframe'
    ],
    correctOption: 1,
    solution: 'Microservices architecture decomposes applications into distinct bounded-context services, each managing its own data store and deployable independently to achieve high horizontal scalability and continuous delivery.',
    tags: ['System Design', 'Microservices', 'Enterprise Architecture', 'APIs'],
    difficulty: 'Easy'
  },

  // Data Structures & Algorithms
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In a self-balancing AVL search tree, what rotation sequence is performed when an insertion occurs in the right subtree of the left child (LR imbalance)?',
    options: [
      'A) Single Left (LL) Rotation',
      'B) Single Right (RR) Rotation',
      'C) Left-Right (LR) Double Rotation (Left rotation on left child, then Right rotation on parent)',
      'D) Right-Left (RL) Double Rotation'
    ],
    correctOption: 2,
    solution: 'An LR imbalance occurs when a node has a balance factor of +2 and its left child has a balance factor of -1. It is rebalanced by first performing a Left Rotation on the left child, followed by a Right Rotation on the parent node.',
    tags: ['Data Structures', 'AVL Tree', 'Tree Rotations', 'Algorithms'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the optimal average time complexity of searching and inserting in a Hash Table with a uniform hash function and load factor α < 1?',
    options: [
      'A) O(1) constant time',
      'B) O(log n)',
      'C) O(n)',
      'D) O(n log n)'
    ],
    correctOption: 0,
    solution: 'Under simple uniform hashing, average search, insertion, and deletion operations in a hash table take O(1) constant time because the hash function directly indexes into the bucket array.',
    tags: ['Data Structures', 'Hash Table', 'Time Complexity', 'Hashing'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Which algorithmic paradigm does Floyd-Warshall’s All-Pairs Shortest Path algorithm use, and what is its time complexity on a graph with V vertices?',
    options: [
      'A) Greedy Approach with O(V² log V)',
      'B) Dynamic Programming with O(V³)',
      'C) Divide and Conquer with O(V log V)',
      'D) Branch and Bound with O(2^V)'
    ],
    correctOption: 1,
    solution: 'Floyd-Warshall is a classic Dynamic Programming algorithm that considers every vertex k as an intermediate node, computing shortest paths between all pairs (i, j) with recurrence dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]) in O(V³) time.',
    tags: ['Algorithms', 'Floyd-Warshall', 'Dynamic Programming', 'Graph Theory'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the maximum number of nodes in a full binary tree of depth k (where depth of root node is 0)?',
    options: [
      'A) 2^k',
      'B) 2^(k+1) - 1',
      'C) 2k + 1',
      'D) k²'
    ],
    correctOption: 1,
    solution: 'A full binary tree of height/depth k has: Level 0 = 1 node, Level 1 = 2 nodes, ..., Level k = 2^k nodes. The total sum is a geometric progression: 1 + 2 + 4 + ... + 2^k = 2^(k+1) - 1 nodes.',
    tags: ['Data Structures', 'Binary Tree', 'Tree Mathematics'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Which graph traversal algorithm uses a Queue and finds the shortest path in terms of edge count in an unweighted graph?',
    options: [
      'A) Depth-First Search (DFS)',
      'B) Breadth-First Search (BFS)',
      'C) Topological Sort',
      'D) Prim’s Algorithm'
    ],
    correctOption: 1,
    solution: 'BFS visits vertices level by level using a FIFO Queue, guaranteeing that the first time an unvisited vertex is reached from the source represents the shortest path in an unweighted graph.',
    tags: ['Algorithms', 'BFS', 'Graph Theory', 'Queue'],
    difficulty: 'Easy'
  },

  // Database Systems & Advanced SQL
  {
    topicCategory: 'Database & SQL',
    questionText: 'A relation R(A, B, C) has functional dependencies: AB → C and C → B. Is relation R in BCNF, and why?',
    options: [
      'A) Yes, because all functional dependencies are valid',
      'B) No, because in C → B, attribute C is not a superkey of relation R',
      'C) Yes, because it satisfies 1NF and 2NF',
      'D) No, because AB is not composite'
    ],
    correctOption: 1,
    solution: 'The candidate keys of R are AB and AC. For BCNF, for every non-trivial functional dependency X → Y, X must be a superkey. In C → B, C is not a superkey (it only determines B, not A), so R is in 3NF (since B is a prime attribute) but NOT in BCNF.',
    tags: ['Database & SQL', 'BCNF', 'Normalization', 'Functional Dependency'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'What type of database index physically reorders the actual data rows of the table on disk to match the order of the indexed column(s)?',
    options: [
      'A) Non-Clustered Index',
      'B) Clustered Index',
      'C) Bitmap Index',
      'D) Full-Text Index'
    ],
    correctOption: 1,
    solution: 'A Clustered Index determines the physical storage sequence of data rows in the database data pages. Because physical rows can only be arranged in one order, a table can possess only one Clustered Index.',
    tags: ['Database & SQL', 'Indexing', 'Clustered Index', 'Storage'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'In relational database transactions, what isolation level prevents Dirty Reads and Non-Repeatable Reads, but may still permit Phantom Reads under the ANSI/ISO SQL standard?',
    options: [
      'A) Read Uncommitted',
      'B) Read Committed',
      'C) Repeatable Read',
      'D) Serializable'
    ],
    correctOption: 2,
    solution: 'Repeatable Read guarantees that any data read during the transaction remains unchanged by concurrent transactions (preventing dirty and non-repeatable reads). However, new rows inserted by concurrent transactions that match search ranges can still appear as Phantom Reads.',
    tags: ['Database & SQL', 'ACID', 'Isolation Levels', 'Repeatable Read'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'What is the role of a Database Trigger in an enterprise banking DBMS?',
    options: [
      'A) An automated stored procedure that executes automatically in response to specified DML events (INSERT, UPDATE, DELETE) on a table',
      'B) A hardware switch that disconnects slow client connections',
      'C) A command that compiles C++ code into binary',
      'D) A backup utility that runs only at system shutdown'
    ],
    correctOption: 0,
    solution: 'A Trigger is a special type of stored procedure automatically invoked (fired) when an event (INSERT, UPDATE, or DELETE) occurs on an associated database table, commonly utilized for audit logging and complex constraint enforcement.',
    tags: ['Database & SQL', 'Triggers', 'Audit Logging', 'Enterprise DBMS'],
    difficulty: 'Easy'
  },

  // Operating Systems & System Programming
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What is the primary difference between a Process and a Thread in operating systems?',
    options: [
      'A) A process has its own dedicated address space and system resources, while multiple threads of the same process share the same memory address space, code, and data segments',
      'B) Threads can run independently across different computers while processes cannot',
      'C) Context switching between processes is much faster than between threads',
      'D) A thread has separate file descriptors and heap memory from its parent process'
    ],
    correctOption: 0,
    solution: 'A process is an executing program with an independent virtual address space, file handles, and security context. A thread is a lightweight unit of CPU execution within a process; all threads in a process share the same text, data, and heap segments, having only private stacks and registers.',
    tags: ['Operating Systems', 'Processes', 'Threads', 'Concurrency', 'Memory'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'In Linux shell scripting, what is the special variable `$?` used for?',
    options: [
      'A) The Process ID (PID) of the current script',
      'B) The exit status of the most recently executed foreground command (0 for success, non-zero for error)',
      'C) The total count of command-line arguments passed to the script',
      'D) The username of the currently logged-in user'
    ],
    correctOption: 1,
    solution: '`$?` holds the numerical exit status code of the last executed foreground pipeline/command. An exit code of 0 indicates successful execution, while any positive integer (1 to 255) signifies an error.',
    tags: ['Operating Systems & Linux', 'Linux', 'Bash Scripting', 'Exit Status'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'Which page replacement algorithm replaces the page that will not be used for the longest period of time in the future, providing the absolute minimum page fault rate?',
    options: [
      'A) Least Recently Used (LRU)',
      'B) Optimal Page Replacement (OPT / MIN)',
      'C) First-In, First-Out (FIFO)',
      'D) Second-Chance Clock Algorithm'
    ],
    correctOption: 1,
    solution: 'The Optimal (OPT/Bélády’s) algorithm replaces the page whose next reference will occur farthest in the future. Because it requires impossible future knowledge in real-time OSs, it serves as the theoretical benchmark against which LRU and others are compared.',
    tags: ['Operating Systems', 'Virtual Memory', 'Page Replacement', 'Optimal Algorithm'],
    difficulty: 'Medium'
  },

  // Cybersecurity & Web Technologies
  {
    topicCategory: 'Networking & Security',
    questionText: 'What security mechanism prevents a malicious website from sending unauthorized API requests on behalf of an authenticated user using their existing browser cookies?',
    options: [
      'A) Anti-CSRF Tokens (Synchronizer Token Pattern or SameSite cookies)',
      'B) HTTPS TLS Encryption',
      'C) Minifying CSS files',
      'D) Responsive Web Design'
    ],
    correctOption: 0,
    solution: 'Cross-Site Request Forgery (CSRF) exploits ambient browser credential sharing (cookies). Anti-CSRF synchronizer tokens and `SameSite=Strict/Lax` cookie attributes ensure that state-changing requests originate from the trusted application domain.',
    tags: ['Cybersecurity', 'CSRF', 'Web Security', 'OWASP', 'Tokens'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'In JSON Web Token (JWT) architecture, what are the three dot-separated components that compose a valid token?',
    options: [
      'A) Header, Payload, and Signature',
      'B) Host, Port, and Path',
      'C) Username, Password, and Domain',
      'D) Public Key, Private Key, and Salt'
    ],
    correctOption: 0,
    solution: 'A standard JWT consists of three Base64URL-encoded parts separated by periods: `Header.Payload.Signature`. The header specifies the algorithm (e.g. HS256), the payload contains claims, and the signature verifies authenticity.',
    tags: ['Cybersecurity', 'JWT', 'Authentication', 'APIs', 'Web Architecture'],
    difficulty: 'Easy'
  }
];
