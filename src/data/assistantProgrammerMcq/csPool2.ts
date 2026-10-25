import { ApMcqQuestionDef } from './types';

export const apCsQuestionsPool2: ApMcqQuestionDef[] = [
  // Advanced Programming & Web Architecture
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'What is the idempotent characteristic of HTTP methods in RESTful API design?',
    options: [
      'A) The method can only be called once per session',
      'B) Making multiple identical requests produces the exact same side-effects and resource state on the server as making a single request',
      'C) The request executes in constant O(1) time',
      'D) The request automatically encrypts all payload parameters'
    ],
    correctOption: 1,
    solution: 'An HTTP method is idempotent if executing it multiple times leaves the system in the exact same state as executing it once. GET, PUT, and DELETE are idempotent; POST is not idempotent because repeated requests create multiple duplicate resources.',
    tags: ['Software Engineering', 'REST APIs', 'Idempotence', 'HTTP Methods'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'According to Eric Brewer’s CAP Theorem in distributed data systems, what three properties cannot be simultaneously guaranteed in the presence of network partitions?',
    options: [
      'A) Consistency, Availability, and Partition Tolerance',
      'B) Concurrency, Atomicity, and Performance',
      'C) Confidentiality, Availability, and Privacy',
      'D) Compression, Archiving, and Persistence'
    ],
    correctOption: 0,
    solution: 'The CAP theorem states that any distributed data store can simultaneously provide at most two of the three guarantees: Consistency (every read receives the most recent write or an error), Availability (every non-failing node returns a response), and Partition Tolerance (the system continues to operate despite dropped messages).',
    tags: ['System Design', 'CAP Theorem', 'Distributed Systems', 'Databases'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'What type of NoSQL database is MongoDB categorized as, and what binary document format does it utilize for data storage?',
    options: [
      'A) Graph Database using RDF Triples',
      'B) Document-Oriented Database using BSON (Binary JSON)',
      'C) Key-Value Store using RocksDB SSTables',
      'D) Wide-Column Store using Apache Cassandra CQL'
    ],
    correctOption: 1,
    solution: 'MongoDB is a leading Document-Oriented NoSQL database that stores data as JSON-like documents with flexible schemas in BSON (Binary JSON) format, which supports rich data types and fast traversal.',
    tags: ['Database & SQL', 'NoSQL', 'MongoDB', 'BSON', 'Document Store'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'What is the primary operational role of Redis in high-concurrency government portal and banking applications?',
    options: [
      'A) Long-term cold data archiving',
      'B) In-memory key-value data structure store used as a high-speed Cache, Session Manager, and Message Broker',
      'C) Relational schema normalization engine',
      'D) Operating system bootloader'
    ],
    correctOption: 1,
    solution: 'Redis (Remote Dictionary Server) is an open-source, in-memory data store providing sub-millisecond response times. It is heavily utilized in banking and e-government portals for caching database query results, user session state, and rate-limiting counters.',
    tags: ['Database & SQL', 'Redis', 'Caching', 'In-Memory Store', 'Performance'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What is the fundamental architectural difference between Docker Containerization and traditional Hardware Virtual Machines (Hypervisors)?',
    options: [
      'A) Containers package the guest operating system kernel, whereas VMs share the host kernel',
      'B) Containers share the host operating system kernel and isolate user spaces using Linux cgroups and namespaces, whereas VMs run a complete guest OS on top of a hypervisor',
      'C) Containers are only compatible with Windows while VMs only run on Linux',
      'D) VMs use less memory and boot faster than containers'
    ],
    correctOption: 1,
    solution: 'Containers are lightweight because they share the underlying host OS kernel and isolate processes using kernel features (namespaces and cgroups), eliminating the overhead of running a full guest OS that traditional Type-1/Type-2 Hypervisor VMs require.',
    tags: ['Operating Systems', 'Docker', 'Containers', 'Virtualization', 'DevOps'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the Garbage Collection mechanism in the Java Virtual Machine (JVM) primarily responsible for?',
    options: [
      'A) Automatically reclaiming memory allocated to heap objects that are no longer reachable by any active reference in the application',
      'B) Deleting empty files from the local hard drive',
      'C) Releasing local variables on the call stack at function return',
      'D) Terminating deadlocked threads forcefully'
    ],
    correctOption: 0,
    solution: 'The JVM Garbage Collector automatically identifies and reclaims heap memory occupied by unreachable objects, eliminating manual memory management (e.g., free() in C/C++) and preventing memory leaks.',
    tags: ['Programming', 'Java', 'JVM', 'Garbage Collection', 'Memory Management'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In algorithm analysis, if a divide-and-conquer algorithm satisfies the recurrence relation T(n) = 2T(n/2) + O(n), what is its asymptotic time complexity by the Master Theorem?',
    options: [
      'A) O(n)',
      'B) O(n log n)',
      'C) O(n²)',
      'D) O(log n)'
    ],
    correctOption: 1,
    solution: 'Applying the Master Theorem: T(n) = aT(n/b) + f(n) with a = 2, b = 2, and f(n) = O(n). We calculate n^(log_b(a)) = n^(log₂2) = n¹. Since f(n) = Θ(n^(log_b(a))), this corresponds to Case 2, giving T(n) = Θ(n log n) (the exact recurrence of MergeSort).',
    tags: ['Algorithms', 'Master Theorem', 'Recurrence Relations', 'Time Complexity'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What type of SQL injection attack occurs when malicious SQL code is executed directly in database query strings via unvalidated form inputs, and what is the primary defensive coding pattern against it?',
    options: [
      'A) In-band SQLi; defended by using Parameterized Queries (Prepared Statements) with bound parameters',
      'B) Blind SQLi; defended by using client-side JavaScript validations only',
      'C) Out-of-band SQLi; defended by turning off database logging',
      'D) Reflected SQLi; defended by increasing RAM memory'
    ],
    correctOption: 0,
    solution: 'SQL Injection happens when user inputs are directly concatenated into SQL query strings. The industry-standard mitigation is using Parameterized Queries (Prepared Statements), which treat user input strictly as literal values rather than executable SQL syntax.',
    tags: ['Cybersecurity', 'SQL Injection', 'Prepared Statements', 'Secure Coding'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In Agile software development, what artifact contains an ordered, prioritized list of all features, technical enhancements, and bug fixes desired in the product?',
    options: [
      'A) Sprint Burndown Chart',
      'B) Product Backlog',
      'C) Velocity Matrix',
      'D) Definition of Done (DoD)'
    ],
    correctOption: 1,
    solution: 'The Product Backlog is an evolving, prioritized list of deliverables (user stories, features, bug fixes) managed by the Product Owner that guides what the Scrum team will develop in future sprints.',
    tags: ['Software Engineering', 'Agile', 'Scrum', 'Product Backlog'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In C++, what keyword is used in a base class method declaration to ensure that calls to the method through a base class pointer or reference will be dynamically dispatched to the derived class implementation at runtime?',
    options: [
      'A) static',
      'B) virtual',
      'C) inline',
      'D) friend'
    ],
    correctOption: 1,
    solution: 'The `virtual` keyword enables dynamic dispatch (runtime polymorphism) by using a virtual method table (vtable). When a method is declared virtual, C++ resolves the call based on the runtime type of the pointed-to object rather than the static type of the pointer.',
    tags: ['Programming', 'C++', 'Virtual Functions', 'Polymorphism', 'OOP'],
    difficulty: 'Medium'
  },
  // Additional Assistant Programmer Core Questions
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In C programming, what does the expression `sizeof("Hello")` return on a standard compiler?',
    options: [
      'A) 5 bytes',
      'B) 6 bytes (including terminating null character \\0)',
      'C) 4 bytes',
      'D) 8 bytes'
    ],
    correctOption: 1,
    solution: 'In C, string literals include an implicit null terminator `\\0`. Therefore, "Hello" consists of \'H\', \'e\', \'l\', \'l\', \'o\', and \'\\0\', taking exactly 6 bytes in memory.',
    tags: ['Programming', 'C Language', 'sizeof', 'Strings'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What data structure is fundamentally used by web browsers to implement the "Back" and "Forward" navigation buttons?',
    options: [
      'A) A single FIFO Queue',
      'B) Two LIFO Stacks (Back Stack and Forward Stack)',
      'C) A Binary Search Tree',
      'D) A Hash Map'
    ],
    correctOption: 1,
    solution: 'Browsers use two Stacks. When navigating to a new URL, the current page is pushed onto the Back Stack. Clicking "Back" pops from the Back Stack and pushes onto the Forward Stack.',
    tags: ['Data Structures', 'Stack', 'Applications', 'Web Browsers'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'In SQL database queries, what is a Correlated Subquery?',
    options: [
      'A) A subquery that executes independently once before the outer query runs',
      'B) A subquery that references columns from the outer query table, executing repeatedly for each row evaluated by the outer query',
      'C) A query that joins tables across two separate database servers',
      'D) A query that creates a temporary stored view'
    ],
    correctOption: 1,
    solution: 'A Correlated Subquery references columns from the outer query. Because it depends on the outer row values, the database engine must evaluate the subquery once for each row processed by the outer query.',
    tags: ['Database & SQL', 'SQL', 'Correlated Subquery', 'Query Performance'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In Python, what is the evaluated output of the list comprehension: `[x**2 for x in range(5) if x % 2 != 0]`?',
    options: [
      'A) [0, 4, 16]',
      'B) [1, 9]',
      'C) [1, 4, 9]',
      'D) [1, 9, 25]'
    ],
    correctOption: 1,
    solution: '`range(5)` generates integers 0, 1, 2, 3, 4. The filter `if x % 2 != 0` selects odd numbers: 1 and 3. Squaring them yields `1**2 = 1` and `3**2 = 9`. Result: `[1, 9]`.',
    tags: ['Programming', 'Python', 'List Comprehensions'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which normal form is specifically defined to eliminate Multivalued Dependencies (MVDs) in a relational database?',
    options: [
      'A) Third Normal Form (3NF)',
      'B) Boyce-Codd Normal Form (BCNF)',
      'C) Fourth Normal Form (4NF)',
      'D) Fifth Normal Form (5NF)'
    ],
    correctOption: 2,
    solution: 'Fourth Normal Form (4NF) requires BCNF compliance and addresses relations containing independent multivalued facts (X ->> Y), decomposing them to prevent redundant Cartesian combinations.',
    tags: ['Database & SQL', '4NF', 'Normalization', 'Multivalued Dependency'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the asymptotic time complexity of Dijkstra’s single-source shortest path algorithm implemented using an adjacency list and a Binary Min-Heap?',
    options: [
      'A) O(V²)',
      'B) O((V + E) log V)',
      'C) O(V × E)',
      'D) O(V log V)'
    ],
    correctOption: 1,
    solution: 'With an adjacency list and a binary min-heap priority queue, extracting minimum vertices takes O(V log V) and relaxing edges with decrease-key operations takes O(E log V), yielding total time O((V + E) log V).',
    tags: ['Algorithms', 'Dijkstra', 'Graph Theory', 'Time Complexity'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which HTTP response security header is configured on web servers to defend against Clickjacking attacks by preventing pages from being embedded in unauthorized iframes?',
    options: [
      'A) X-Frame-Options (or Content-Security-Policy frame-ancestors)',
      'B) Strict-Transport-Security (HSTS)',
      'C) Access-Control-Allow-Origin',
      'D) X-XSS-Protection'
    ],
    correctOption: 0,
    solution: '`X-Frame-Options: DENY` or `SAMEORIGIN` (and CSP `frame-ancestors`) instructs modern web browsers not to render the page inside `<frame>`, `<iframe>`, or `<object>` tags on external domains, mitigating Clickjacking.',
    tags: ['Cybersecurity', 'Clickjacking', 'HTTP Headers', 'Web Security'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'Which SOLID principle asserts that derived classes must be completely substitutable for their base class without altering the correctness of the program?',
    options: [
      'A) Single Responsibility Principle',
      'B) Open/Closed Principle',
      'C) Liskov Substitution Principle (LSP)',
      'D) Dependency Inversion Principle'
    ],
    correctOption: 2,
    solution: 'Barbara Liskov’s Liskov Substitution Principle (LSP) states that if S is a subtype of T, then objects of type T may be replaced with objects of type S without breaking application behavior or violating pre/post-conditions.',
    tags: ['Software Engineering', 'SOLID', 'LSP', 'OOP'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the worst-case time complexity of constructing a Binary Heap from an unordered array of n elements using the bottom-up Floyd’s Build-Heap algorithm?',
    options: [
      'A) O(n log n)',
      'B) O(n) linear time',
      'C) O(log n)',
      'D) O(n²)'
    ],
    correctOption: 1,
    solution: 'Floyd’s bottom-up Build-Heap algorithm runs minHeapify from the lowest non-leaf node upwards. Because the number of nodes decreases exponentially with height, the mathematical summation of nodes times height converges to linear O(n) time.',
    tags: ['Algorithms', 'Binary Heap', 'Build Heap', 'Time Complexity'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the maximum standard Maximum Transmission Unit (MTU) size for standard Ethernet frame payloads, and what is the resulting Maximum Segment Size (MSS) for IPv4 TCP packets?',
    options: [
      'A) MTU = 1500 bytes; MSS = 1460 bytes',
      'B) MTU = 1000 bytes; MSS = 960 bytes',
      'C) MTU = 65535 bytes; MSS = 65495 bytes',
      'D) MTU = 1460 bytes; MSS = 1420 bytes'
    ],
    correctOption: 0,
    solution: 'Standard Ethernet MTU is 1,500 bytes. Subtracting 20 bytes for the standard IPv4 header and 20 bytes for the standard TCP header leaves a Maximum Segment Size (MSS) of 1,500 - 40 = 1,460 bytes.',
    tags: ['Networking & Security', 'MTU', 'MSS', 'TCP/IP', 'Ethernet'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In software architecture, what is a Reverse Proxy server (such as Nginx or HAProxy) primarily utilized for?',
    options: [
      'A) A client-side browser plugin that caches search histories',
      'B) A server positioned in front of backend web servers to handle load balancing, SSL/TLS termination, request routing, and DDoS mitigation',
      'C) A hardware replacement for local hard drives',
      'D) A database compiler for stored procedures'
    ],
    correctOption: 1,
    solution: 'A Reverse Proxy sits in front of internal web application servers, intercepting incoming client requests to distribute traffic loads across multiple servers, terminate SSL certificates, and cache static assets.',
    tags: ['System Design', 'Reverse Proxy', 'Nginx', 'Load Balancing', 'Architecture'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'What is the function of a SAVEPOINT statement inside an uncommitted database transaction?',
    options: [
      'A) Permanently writes all modifications to disk storage',
      'B) Creates a designated point within a transaction to which the transaction can be rolled back selectively without aborting the entire transaction',
      'C) Closes all database connections immediately',
      'D) Deletes all temporary tables'
    ],
    correctOption: 1,
    solution: '`SAVEPOINT savepoint_name` establishes a named milestone within an active transaction. Using `ROLLBACK TO SAVEPOINT savepoint_name` reverses work performed after that savepoint while maintaining all preceding operations.',
    tags: ['Database & SQL', 'TCL', 'SAVEPOINT', 'Transactions'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In Java, what is the fundamental difference between testing two String variables with `==` versus `.equals()`?',
    options: [
      'A) `==` compares whether both variables refer to the exact same memory address, while `.equals()` compares the actual textual character contents',
      'B) `==` is case-insensitive while `.equals()` is case-sensitive',
      'C) `.equals()` only works for numbers',
      'D) `==` creates a deep copy of the string'
    ],
    correctOption: 0,
    solution: 'In Java, `==` tests for reference equality (whether both references point to the same object in the heap or String pool). The `.equals()` method tests for value equality (whether both Strings contain the identical sequence of characters).',
    tags: ['Programming', 'Java', 'Strings', 'Memory Equality'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What keyboard shortcut sends the SIGINT (Signal 2) interrupt signal to gracefully terminate a running foreground process in a Linux terminal?',
    options: [
      'A) Ctrl + C',
      'B) Ctrl + Z',
      'C) Ctrl + D',
      'D) Ctrl + L'
    ],
    correctOption: 0,
    solution: 'Ctrl + C sends `SIGINT` to interrupt and stop the foreground process. Ctrl + Z sends `SIGTSTP` to suspend/pause the process into the background, and Ctrl + D sends an EOF (End-Of-File) character.',
    tags: ['Operating Systems & Linux', 'Linux', 'Signals', 'SIGINT'],
    difficulty: 'Easy'
  }
];
