import { McqQuestionDef } from './types';

export const csQuestionsPool2: McqQuestionDef[] = [
  // Additional Core Computer Science & Banking ICT Questions
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the message format standard specified by ISO 8583 used universally in electronic banking systems for point-of-sale (POS) and ATM card transactions?',
    options: [
      'A) JSON Web Token (JWT)',
      'B) Financial Transaction Card Originated Messages',
      'C) SOAP XML Envelope',
      'D) ASN.1 Protocol Buffers'
    ],
    correctOption: 1,
    solution: 'ISO 8583 is the international standard for Financial Transaction Card Originated Messages that governs transaction routing and format between ATMs, POS terminals, and Core Banking card switches.',
    tags: ['E-Banking', 'ISO 8583', 'ATM Switch', 'Financial Protocols'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which message authentication code algorithm is used in Time-Based One-Time Password (TOTP, RFC 6238) for two-factor authentication in banking applications?',
    options: [
      'A) MD5 Checksum',
      'B) HMAC-SHA1 or HMAC-SHA256 based on moving 30-second time steps',
      'C) Caesar Cipher',
      'D) CRC-32 Cyclic Redundancy'
    ],
    correctOption: 1,
    solution: 'RFC 6238 defines TOTP as an extension of HOTP where the moving counter is computed as current Unix epoch time divided by the step interval T0 (typically 30 seconds), hashed via HMAC-SHA1 or HMAC-SHA256.',
    tags: ['Cybersecurity', '2FA', 'TOTP', 'RFC 6238', 'MFA'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'What type of database lock allows multiple transactions to read a record simultaneously, but prevents any transaction from writing to or modifying it?',
    options: [
      'A) Exclusive Lock (X-Lock)',
      'B) Shared Lock (S-Lock)',
      'C) Intent Exclusive Lock (IX)',
      'D) Schema Modification Lock'
    ],
    correctOption: 1,
    solution: 'A Shared Lock (S-Lock) permits concurrent read operations by multiple transactions. No transaction can acquire an Exclusive Lock (X-Lock) on that data item until all Shared Locks are released.',
    tags: ['DBMS', 'Locking', 'Shared Lock', 'Concurrency Control'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which SQL constraint ensures that the values entered into a specific column satisfy a defined Boolean logical predicate expression?',
    options: [
      'A) FOREIGN KEY',
      'B) NOT NULL',
      'C) CHECK',
      'D) UNIQUE'
    ],
    correctOption: 2,
    solution: 'The CHECK constraint validates that all values stored in a column satisfy a specific boolean condition (e.g., CHECK (balance >= 0) or CHECK (age >= 18)).',
    tags: ['SQL', 'Constraints', 'CHECK', 'Database Integrity'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the recurrence relation and asymptotic time complexity for Strassen’s Matrix Multiplication algorithm?',
    options: [
      'A) T(n) = 8T(n/2) + O(n²), giving O(n³)',
      'B) T(n) = 7T(n/2) + O(n²), giving O(n^2.807)',
      'C) T(n) = 4T(n/2) + O(n), giving O(n²)',
      'D) T(n) = 2T(n/2) + O(1), giving O(n)'
    ],
    correctOption: 1,
    solution: 'Strassen’s algorithm reduces the number of sub-matrix multiplications from 8 to 7, resulting in T(n) = 7T(n/2) + O(n²). Applying the Master Theorem gives O(n^(log₂7)) ≈ O(n^2.807), improving upon standard O(n³) matrix multiplication.',
    tags: ['Algorithms', 'Divide and Conquer', 'Strassen', 'Master Theorem'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In a graph with V vertices and E edges, what is the time complexity of finding a Minimum Spanning Tree using Kruskal’s algorithm with a Disjoint Set Union (DSU) by rank?',
    options: [
      'A) O(V²)',
      'B) O(E log E) or O(E log V)',
      'C) O(V + E)',
      'D) O(V log V)'
    ],
    correctOption: 1,
    solution: 'Kruskal’s algorithm first sorts all edges in O(E log E) time. Then it iterates through sorted edges using Disjoint Set Union (Union-Find with path compression and union by rank) in nearly O(E α(V)) time. Thus the bottleneck is edge sorting: O(E log E), which is equivalent to O(E log V).',
    tags: ['Algorithms', 'Kruskal', 'MST', 'DSU', 'Graph Theory'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What is the purpose of the Linux `/proc` filesystem in modern Linux distributions?',
    options: [
      'A) To store static configuration files for installed system services',
      'B) A virtual pseudo-filesystem created on the fly in memory that exposes kernel data structures and process runtime information',
      'C) To store temporary swap files during low RAM conditions',
      'D) A permanent block storage directory for user home directories'
    ],
    correctOption: 1,
    solution: '`/proc` is a pseudo-filesystem (procfs) dynamically generated in RAM by the Linux kernel. It does not occupy disk space and acts as an interface to internal kernel status, hardware information (cpuinfo, meminfo), and active process parameters (/proc/[PID]).',
    tags: ['Linux', 'procfs', 'Kernel', 'Filesystem Hierarchy'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'Which scheduling phenomenon describes the situation where low-priority processes block access to a shared resource needed by a high-priority process because a medium-priority process preempts the low-priority one?',
    options: [
      'A) Starvation',
      'B) Priority Inversion',
      'C) Convoy Effect',
      'D) Thrashing'
    ],
    correctOption: 1,
    solution: 'Priority Inversion occurs when a lower-priority task holds a shared lock needed by a higher-priority task, but the lower-priority task cannot finish because medium-priority tasks preempt it. It is solved via Priority Inheritance protocols.',
    tags: ['Operating Systems', 'Priority Inversion', 'Real-time Systems', 'Locks'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In microservices architecture, which architectural pattern intercepts all incoming client API requests and handles cross-cutting concerns like authentication, SSL termination, and rate limiting?',
    options: [
      'A) Circuit Breaker Pattern',
      'B) API Gateway Pattern',
      'C) Saga Pattern',
      'D) CQRS (Command Query Responsibility Segregation)'
    ],
    correctOption: 1,
    solution: 'An API Gateway acts as a single entry point for clients, routing requests to appropriate backend microservices while centrally managing SSL termination, token validation, caching, and rate limiting.',
    tags: ['System Design', 'API Gateway', 'Microservices', 'Architecture'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'Which UML diagram models the dynamic sequence of message exchanges between objects over time in a software system?',
    options: [
      'A) Class Diagram',
      'B) Sequence Diagram',
      'C) Component Diagram',
      'D) Deployment Diagram'
    ],
    correctOption: 1,
    solution: 'A UML Sequence Diagram is an interaction diagram that shows how processes operate with one another and in what sequential order of messages over time.',
    tags: ['Software Engineering', 'UML', 'Sequence Diagram', 'System Design'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the primary function of the Domain Name System (DNS) Resource Record type "MX"?',
    options: [
      'A) Maps an IPv4 address to a domain name',
      'B) Specifies the mail server responsible for accepting incoming email messages on behalf of a domain',
      'C) Defines an alias to a canonical name',
      'D) Holds an IPv6 128-bit address'
    ],
    correctOption: 1,
    solution: 'MX (Mail Exchange) records specify which mail servers are designated to accept email deliveries for the recipient domain name. "A" maps to IPv4, "AAAA" maps to IPv6, and "CNAME" specifies canonical aliases.',
    tags: ['Networking', 'DNS', 'MX Record', 'Email Infrastructure'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the purpose of the SYN flood attack, and what mechanism is commonly used on servers to mitigate it without allocating TCB state?',
    options: [
      'A) Overloading CPU arithmetic units; mitigated by overclocking',
      'B) Exhausting half-open connection memory queues; mitigated by SYN Cookies',
      'C) Tampering with DNS caches; mitigated by DNSSEC',
      'D) Saturating physical fiber cables; mitigated by load balancing'
    ],
    correctOption: 1,
    solution: 'A SYN flood floods the server with TCP SYN packets from spoofed IPs to exhaust the backlog queue of half-open connections. SYN Cookies mitigate this by encoding the connection parameters into the initial sequence number (ISN), deferring TCB state allocation until the final ACK arrives.',
    tags: ['Cybersecurity', 'SYN Flood', 'SYN Cookies', 'DDoS Mitigation'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'In virtual memory systems, what is "Thrashing"?',
    options: [
      'A) A malware attack encrypting user directories',
      'B) A state where the CPU spends more time swapping pages in and out of secondary storage than executing actual application instructions',
      'C) Overheating of the physical memory hardware',
      'D) Sudden loss of power to non-volatile RAM'
    ],
    correctOption: 1,
    solution: 'Thrashing occurs when the total working sets of active processes exceed the physical memory available. High page fault rates force the OS to spend virtually all its time paging data between RAM and swap disk, causing CPU utilization to drop drastically.',
    tags: ['Operating Systems', 'Virtual Memory', 'Thrashing', 'Paging'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'In database recovery, what does the Write-Ahead Logging (WAL) protocol mandate?',
    options: [
      'A) Changes to database buffers must be written to disk before log records are generated',
      'B) Log records containing undo/redo info must be flushed to non-volatile disk before the corresponding database page is written to disk',
      'C) All read queries must write a log record',
      'D) Logs are written only once every 24 hours at midnight'
    ],
    correctOption: 1,
    solution: 'Write-Ahead Logging (WAL) mandates that before an in-memory modified database page is flushed to disk, the log records describing the update (both before-image for undo and after-image for redo) must be written to non-volatile storage.',
    tags: ['DBMS', 'WAL', 'Database Recovery', 'ACID Durability'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the worst-case space complexity of recursive Depth-First Search (DFS) on a general tree of height h?',
    options: [
      'A) O(1)',
      'B) O(h) due to the call stack depth',
      'C) O(2^h)',
      'D) O(h²)'
    ],
    correctOption: 1,
    solution: 'The maximum memory required by recursive DFS corresponds to the maximum recursion depth on the execution call stack, which is equal to the height h of the tree, giving O(h) space complexity.',
    tags: ['Algorithms', 'DFS', 'Recursion', 'Space Complexity'],
    difficulty: 'Easy'
  }
];
