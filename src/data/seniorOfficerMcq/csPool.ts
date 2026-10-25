import { McqQuestionDef } from './types';

export const csQuestionsPool: McqQuestionDef[] = [
  // Database & SQL
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which normal form is specifically designed to eliminate transitive functional dependencies in a relational schema?',
    options: [
      'A) First Normal Form (1NF)',
      'B) Second Normal Form (2NF)',
      'C) Third Normal Form (3NF)',
      'D) Boyce-Codd Normal Form (BCNF)'
    ],
    correctOption: 2,
    solution: 'Third Normal Form (3NF) requires a relation to be in 2NF and have no transitive functional dependencies (i.e., non-prime attributes must not depend on other non-prime attributes). 1NF eliminates repeating groups, 2NF eliminates partial dependencies, and BCNF is a stricter version of 3NF where every determinant must be a super key.',
    tags: ['DBMS', 'Normalization', '3NF', 'Transitive Dependency', 'Relational Schema'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'In a B+ Tree index of order m used in relational database management systems, where are data pointers to actual records stored?',
    options: [
      'A) In all internal nodes and leaf nodes equally',
      'B) Only in the root node and leaf nodes',
      'C) Exclusively in the leaf nodes',
      'D) Only in the non-leaf internal nodes'
    ],
    correctOption: 2,
    solution: 'In a B+ Tree, internal nodes store only search key values and tree pointers to direct searches. Actual record pointers (or data rows in clustered indexes) are stored exclusively in the leaf nodes. Furthermore, leaf nodes are linked sequentially (typically via a doubly linked list) to enable rapid range queries.',
    tags: ['DBMS', 'B+ Tree', 'Indexing', 'Data Structures', 'Storage'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which SQL clause is used to filter groups created by the GROUP BY clause, as opposed to filtering individual rows?',
    options: [
      'A) WHERE',
      'B) HAVING',
      'C) ORDER BY',
      'D) QUALIFY'
    ],
    correctOption: 1,
    solution: 'HAVING filters summarized groups formed by GROUP BY after aggregate functions (such as COUNT, SUM, AVG) are computed. The WHERE clause filters individual rows before grouping takes place.',
    tags: ['SQL', 'HAVING', 'GROUP BY', 'Queries', 'Aggregations'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'What is the phenomenon where a transaction reads uncommitted changes made by another concurrent transaction that is later rolled back?',
    options: [
      'A) Dirty Read',
      'B) Non-repeatable Read',
      'C) Phantom Read',
      'D) Lost Update'
    ],
    correctOption: 0,
    solution: 'A Dirty Read (Read Uncommitted anomaly) occurs when Transaction A reads data modified by Transaction B before Transaction B commits. If Transaction B rolls back, Transaction A has operated on invalid ("dirty") data.',
    tags: ['DBMS', 'ACID', 'Concurrency', 'Dirty Read', 'Transaction Isolation'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Under the Strict Two-Phase Locking (Strict 2PL) protocol, when are exclusive locks released?',
    options: [
      'A) Immediately after the write operation completes',
      'B) During the shrinking phase before commit',
      'C) Only after the transaction commits or aborts',
      'D) Whenever another transaction requests a shared lock'
    ],
    correctOption: 2,
    solution: 'Strict 2PL requires that all exclusive (write) locks held by a transaction be kept until the transaction explicitly terminates (commits or aborts). This guarantees strict schedules and completely eliminates cascading rollbacks (cascadelessness).',
    tags: ['DBMS', 'Concurrency', '2PL', 'Locking', 'Serializability'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which relational algebra operation finds tuples that exist in relation R but do not exist in relation S (assuming R and S are union-compatible)?',
    options: [
      'A) Cartesian Product (R × S)',
      'B) Set Difference (R − S)',
      'C) Natural Join (R ⋈ S)',
      'D) Projection (π)'
    ],
    correctOption: 1,
    solution: 'The Set Difference operation (R − S) returns all tuples that appear in relation R but not in relation S. Both relations must be union-compatible (same degree and corresponding attribute domains).',
    tags: ['DBMS', 'Relational Algebra', 'Set Difference', 'Tuple Calculus'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'In SQL, what is the key functional difference between UNION and UNION ALL?',
    options: [
      'A) UNION allows different numbers of columns while UNION ALL does not',
      'B) UNION removes duplicate rows via an implicit sorting/hash step, whereas UNION ALL retains all duplicates',
      'C) UNION ALL sorts the output automatically while UNION maintains insertion order',
      'D) UNION applies only to numeric columns while UNION ALL handles all data types'
    ],
    correctOption: 1,
    solution: 'UNION combines the result sets of two queries and eliminates duplicate rows (incurring performance overhead due to distinct sorting/hashing). UNION ALL concatenates the result sets directly without removing duplicates, making it significantly faster.',
    tags: ['SQL', 'UNION', 'UNION ALL', 'Query Performance'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'A relation R(A, B, C, D) has the functional dependencies: A → B, B → C, and C → D. What is the candidate key for R?',
    options: [
      'A) Only attribute D',
      'B) Attribute B only',
      'C) Attribute A only',
      'D) Attribute combination (A, D)'
    ],
    correctOption: 2,
    solution: 'Taking the attribute closure of A: A+ = {A, B, C, D} because A → B, B → C, and C → D. Since A can determine all attributes in the relation and no proper subset of A can do so, A is the unique candidate key.',
    tags: ['DBMS', 'Functional Dependency', 'Attribute Closure', 'Candidate Key'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which ACID property guarantees that all transactions committed to the database will survive a subsequent power outage or system crash?',
    options: [
      'A) Atomicity',
      'B) Consistency',
      'C) Isolation',
      'D) Durability'
    ],
    correctOption: 3,
    solution: 'Durability ensures that once a transaction has committed, its updates are permanently recorded in non-volatile storage (via Write-Ahead Logging / WAL) and will not be lost even in the event of a system crash or power failure.',
    tags: ['DBMS', 'ACID', 'Durability', 'Transactions', 'WAL'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'In Oracle / PostgreSQL, which SQL window function assigns consecutive ranks without skipping rank numbers in the case of ties?',
    options: [
      'A) ROW_NUMBER()',
      'B) RANK()',
      'C) DENSE_RANK()',
      'D) NTILE()'
    ],
    correctOption: 2,
    solution: 'DENSE_RANK() assigns rankings without gaps. For example, if two rows tie for 1st place, both receive rank 1, and the next row receives rank 2. In contrast, RANK() would skip to rank 3.',
    tags: ['SQL', 'Window Functions', 'DENSE_RANK', 'Analytics'],
    difficulty: 'Medium'
  },

  // Data Structures & Algorithms
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the worst-case time complexity of standard QuickSort algorithm with first-element pivot selection?',
    options: [
      'A) O(n log n)',
      'B) O(n)',
      'C) O(n²)',
      'D) O(log n)'
    ],
    correctOption: 2,
    solution: 'When the input array is already sorted or reverse sorted, picking the first element as pivot produces completely unbalanced partitions of sizes 0 and n-1, leading to a recurrence relation of T(n) = T(n-1) + O(n), which resolves to O(n²). The average case is O(n log n).',
    tags: ['Algorithms', 'QuickSort', 'Time Complexity', 'Sorting'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Which tree traversal of a Binary Search Tree (BST) produces nodes in ascending sorted order?',
    options: [
      'A) Preorder (Root, Left, Right)',
      'B) Inorder (Left, Root, Right)',
      'C) Postorder (Left, Right, Root)',
      'D) Level Order (Breadth-First)'
    ],
    correctOption: 1,
    solution: 'Inorder traversal visits the left subtree, then the root node, and then the right subtree. Because a BST maintains Left < Root < Right, an inorder traversal visits keys in strictly ascending sorted order.',
    tags: ['Data Structures', 'BST', 'Tree Traversal', 'Inorder'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the maximum balance factor allowed for any node in an AVL balanced search tree?',
    options: [
      'A) 0 only',
      'B) -1, 0, or +1',
      'C) -2 to +2',
      'D) Any non-negative integer'
    ],
    correctOption: 1,
    solution: 'An AVL tree is a self-balancing BST where the height difference between the left and right subtrees (Balance Factor = Height(Left) - Height(Right)) of every node must be strictly -1, 0, or +1. If it becomes -2 or +2, rotations (LL, RR, LR, RL) are performed.',
    tags: ['Data Structures', 'AVL Tree', 'Balance Factor', 'Rotations'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Which graph algorithm finds the single-source shortest paths in a directed graph that may contain negative edge weights (provided there is no negative-weight cycle)?',
    options: [
      'A) Dijkstra’s Algorithm',
      'B) Bellman-Ford Algorithm',
      'C) Prim’s Algorithm',
      'D) Kruskal’s Algorithm'
    ],
    correctOption: 1,
    solution: 'The Bellman-Ford algorithm relaxes all edges V-1 times and can correctly handle graphs with negative edge weights as well as detect negative weight cycles. Dijkstra’s algorithm fails on negative weight edges.',
    tags: ['Algorithms', 'Graph Theory', 'Bellman-Ford', 'Shortest Path'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What data structure is fundamentally utilized to convert an arithmetic expression from Infix notation to Postfix (Reverse Polish) notation?',
    options: [
      'A) FIFO Queue',
      'B) Min-Heap',
      'C) LIFO Stack',
      'D) Circular Doubly Linked List'
    ],
    correctOption: 2,
    solution: 'Edsger Dijkstra’s Shunting-yard algorithm utilizes a Stack to hold operators until higher or equal precedence operators are processed, outputting operands directly.',
    tags: ['Data Structures', 'Stack', 'Infix to Postfix', 'Expressions'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the worst-case time complexity of searching for an element in a balanced Red-Black tree containing n elements?',
    options: [
      'A) O(1)',
      'B) O(log n)',
      'C) O(n)',
      'D) O(n log n)'
    ],
    correctOption: 1,
    solution: 'In a Red-Black tree, the longest path from the root to any leaf is no more than twice the shortest path, guaranteeing a maximum height of 2 * log₂(n + 1). Hence, Search, Insertion, and Deletion are all guaranteed to take O(log n) time in the worst case.',
    tags: ['Data Structures', 'Red-Black Tree', 'Time Complexity', 'Binary Search'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Kadane’s algorithm solves which classic algorithmic problem in optimal O(n) time?',
    options: [
      'A) Maximum Subarray Sum Problem',
      'B) Longest Increasing Subsequence',
      'C) Matrix Chain Multiplication',
      'D) Travelling Salesperson Problem'
    ],
    correctOption: 0,
    solution: 'Kadane’s algorithm computes the maximum sum of a contiguous subarray in an array of numbers in linear O(n) time by maintaining running local maximums and global maximums.',
    tags: ['Algorithms', 'Kadane', 'Dynamic Programming', 'Arrays'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the full condition for detecting that a circular queue of capacity N implemented via an array is completely full?',
    options: [
      'A) front == rear',
      'B) (rear + 1) % N == front',
      'C) rear == N - 1',
      'D) front == (rear + 1)'
    ],
    correctOption: 1,
    solution: 'In a circular queue of size N using one empty slot as a boundary separator, the queue is full when (rear + 1) % N == front. The queue is empty when front == rear.',
    tags: ['Data Structures', 'Circular Queue', 'Array Implementation'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Which sorting algorithm is guaranteed to be stable and has a guaranteed worst-case time complexity of O(n log n)?',
    options: [
      'A) HeapSort',
      'B) QuickSort',
      'C) MergeSort',
      'D) SelectionSort'
    ],
    correctOption: 2,
    solution: 'MergeSort employs divide-and-conquer to achieve O(n log n) comparisons in all cases (best, average, and worst). It is stable because elements with equal keys maintain their relative original input order. HeapSort and QuickSort are not inherently stable.',
    tags: ['Algorithms', 'MergeSort', 'Stability', 'Divide and Conquer'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In a min-heap with n elements stored in an array (1-indexed), where is the parent of an element at index i located?',
    options: [
      'A) 2 * i',
      'B) 2 * i + 1',
      'C) Math.floor(i / 2)',
      'D) i - 1'
    ],
    correctOption: 2,
    solution: 'In a 1-indexed binary heap array, for any node at index i: the parent is at floor(i / 2), the left child is at 2*i, and the right child is at 2*i + 1.',
    tags: ['Data Structures', 'Heap', 'Array Indexing', 'Binary Heap'],
    difficulty: 'Easy'
  },

  // Computer Networks & Security
  {
    topicCategory: 'Networking & Security',
    questionText: 'How many usable host IP addresses are available in an IPv4 subnet configured with the CIDR prefix /27?',
    options: [
      'A) 32',
      'B) 30',
      'C) 62',
      'D) 14'
    ],
    correctOption: 1,
    solution: 'An IPv4 address has 32 bits. With a /27 prefix, the number of host bits is 32 - 27 = 5. Total addresses = 2⁵ = 32. Subtracting 2 reserved addresses (1 for Subnet ID and 1 for Subnet Directed Broadcast) leaves 32 - 2 = 30 usable host IP addresses.',
    tags: ['Networking', 'IPv4', 'Subnetting', 'CIDR', 'VLSM'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which OSI layer is responsible for logical addressing, packet routing across disparate networks, and path determination?',
    options: [
      'A) Data Link Layer (Layer 2)',
      'B) Network Layer (Layer 3)',
      'C) Transport Layer (Layer 4)',
      'D) Session Layer (Layer 5)'
    ],
    correctOption: 1,
    solution: 'The Network Layer (Layer 3) handles end-to-end logical addressing (IP addresses) and chooses the best physical paths across interconnected networks via routing protocols (OSPF, BGP, RIP).',
    tags: ['Networking', 'OSI Model', 'Layer 3', 'Routing', 'IP'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the sequence of control packets exchanged during a standard TCP Three-Way Handshake to establish a reliable connection?',
    options: [
      'A) ACK -> SYN -> SYN-ACK',
      'B) SYN -> ACK -> SYN-ACK',
      'C) SYN -> SYN-ACK -> ACK',
      'D) FIN -> FIN-ACK -> ACK'
    ],
    correctOption: 2,
    solution: 'To establish a TCP session: 1) Client sends SYN (Synchronize Sequence Number). 2) Server responds with SYN-ACK (Synchronize + Acknowledgment). 3) Client sends ACK (Acknowledgment). Connection is then established (ESTABLISHED state).',
    tags: ['Networking', 'TCP', 'Three-Way Handshake', 'Protocols'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which well-known port is utilized by the Border Gateway Protocol (BGP) for establishing peering sessions between Autonomous Systems?',
    options: [
      'A) TCP Port 179',
      'B) UDP Port 520',
      'C) TCP Port 22',
      'D) UDP Port 161'
    ],
    correctOption: 0,
    solution: 'BGP (Border Gateway Protocol) uses TCP port 179 to communicate between routers in different autonomous systems. RIP uses UDP 520, SSH uses TCP 22, and SNMP uses UDP 161.',
    tags: ['Networking', 'BGP', 'Routing Protocols', 'Ports'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which asymmetric cryptographic algorithm relies on the mathematical difficulty of factoring large composite prime integers?',
    options: [
      'A) AES (Advanced Encryption Standard)',
      'B) RSA (Rivest-Shamir-Adleman)',
      'C) DES (Data Encryption Standard)',
      'D) SHA-256'
    ],
    correctOption: 1,
    solution: 'RSA is an asymmetric public-key cryptosystem whose security relies on the integer factorization problem of the product of two very large prime numbers. AES and DES are symmetric key block ciphers, and SHA-256 is a cryptographic hash function.',
    tags: ['Cybersecurity', 'Cryptography', 'RSA', 'Asymmetric Encryption'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'In digital signatures, how does the sender sign a document and how does the receiver verify the signature?',
    options: [
      'A) Sender signs with receiver’s public key; receiver verifies with sender’s private key',
      'B) Sender signs with sender’s private key; receiver verifies with sender’s public key',
      'C) Sender signs with sender’s public key; receiver verifies with receiver’s private key',
      'D) Both parties use a shared symmetric secret key'
    ],
    correctOption: 1,
    solution: 'A digital signature provides non-repudiation, integrity, and authentication. The sender hashes the message and encrypts the hash with their own Private Key. The receiver decrypts the signature using the sender’s Public Key and compares the hash with the message hash.',
    tags: ['Cybersecurity', 'Digital Signature', 'PKI', 'Cryptography'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which protocol operates at the Data Link layer to resolve a known 32-bit IPv4 address into its corresponding 48-bit MAC hardware address?',
    options: [
      'A) DNS',
      'B) DHCP',
      'C) ARP (Address Resolution Protocol)',
      'D) ICMP'
    ],
    correctOption: 2,
    solution: 'ARP (Address Resolution Protocol) broadcasts an inquiry across the local Ethernet segment asking "Who has IP X.X.X.X? Tell MAC Y:Y:Y:Y". The matching host replies with its physical MAC address.',
    tags: ['Networking', 'ARP', 'Data Link Layer', 'MAC Address'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What type of cyber attack injects malicious JavaScript into legitimate web pages viewed by other users to hijack their session tokens?',
    options: [
      'A) SQL Injection (SQLi)',
      'B) Cross-Site Scripting (XSS)',
      'C) Cross-Site Request Forgery (CSRF)',
      'D) Denial of Service (DoS)'
    ],
    correctOption: 1,
    solution: 'Cross-Site Scripting (XSS) occurs when an application includes untrusted user input in a web page without proper escaping, allowing attackers to execute malicious client-side scripts in victims\' browsers to steal cookies or session tokens.',
    tags: ['Cybersecurity', 'XSS', 'Web Security', 'OWASP Top 10'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which private IPv4 address range is designated by RFC 1918 for Class B private internal networks?',
    options: [
      'A) 10.0.0.0 to 10.255.255.255',
      'B) 172.16.0.0 to 172.31.255.255',
      'C) 192.168.0.0 to 192.168.255.255',
      'D) 169.254.0.0 to 169.254.255.255'
    ],
    correctOption: 1,
    solution: 'RFC 1918 specifies three private address blocks: Class A: 10.0.0.0/8 (10.0.0.0 - 10.255.255.255); Class B: 172.16.0.0/12 (172.16.0.0 - 172.31.255.255); Class C: 192.168.0.0/16 (192.168.0.0 - 192.168.255.255).',
    tags: ['Networking', 'RFC 1918', 'Private IP', 'IPv4'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which routing protocol uses Dijkstra’s Shortest Path First algorithm and converges rapidly without routing loops inside an Autonomous System?',
    options: [
      'A) RIP v2',
      'B) OSPF (Open Shortest Path First)',
      'C) BGP-4',
      'D) EGP'
    ],
    correctOption: 1,
    solution: 'OSPF is an open standard Link-State interior gateway protocol (IGP) that runs Dijkstra’s algorithm on every router’s synchronized link-state database (LSDB) to compute shortest path trees. RIP is a distance-vector protocol limited to 15 hops.',
    tags: ['Networking', 'OSPF', 'Dijkstra', 'Link State Routing'],
    difficulty: 'Medium'
  },

  // Operating Systems & Linux
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'Which of the following is NOT one of the four necessary Coffman conditions for a deadlock to occur in an operating system?',
    options: [
      'A) Mutual Exclusion',
      'B) Hold and Wait',
      'C) Preemptive Resource Deallocation',
      'D) Circular Wait'
    ],
    correctOption: 2,
    solution: 'The four Coffman conditions are: 1) Mutual Exclusion, 2) Hold and Wait, 3) No Preemption (resources cannot be forcibly taken away), and 4) Circular Wait. "Preemptive Resource Deallocation" would actually prevent deadlock, not cause it.',
    tags: ['Operating Systems', 'Deadlock', 'Coffman Conditions', 'Concurrency'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What is the numeric octal permission for a Linux file to have read and write permissions for the owner, and read-only for group and others?',
    options: [
      'A) 755',
      'B) 644',
      'C) 664',
      'D) 777'
    ],
    correctOption: 1,
    solution: 'Read = 4, Write = 2, Execute = 1. Owner: Read + Write = 4 + 2 = 6. Group: Read = 4. Others: Read = 4. Combining them yields octal permission 644 (rw-r--r--). 755 is rwxr-xr-x.',
    tags: ['Linux', 'chmod', 'File Permissions', 'Octal'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What CPU scheduling algorithm provides the minimum average waiting time for a given set of stationary processes?',
    options: [
      'A) First-Come, First-Served (FCFS)',
      'B) Shortest Job First (SJF)',
      'C) Round Robin with small quantum',
      'D) Priority Scheduling'
    ],
    correctOption: 1,
    solution: 'Shortest Job First (SJF) is provably optimal in giving the minimum average waiting time for a given set of processes because scheduling shorter tasks ahead of longer tasks minimizes the cumulative waiting time.',
    tags: ['Operating Systems', 'CPU Scheduling', 'SJF', 'Optimal Scheduling'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'Bélády’s Anomaly occurs in virtual memory systems when increasing the number of page frames leads to an unexpected increase in page faults under which replacement algorithm?',
    options: [
      'A) Optimal Page Replacement (OPT)',
      'B) Least Recently Used (LRU)',
      'C) First-In, First-Out (FIFO)',
      'D) Least Frequently Used (LFU)'
    ],
    correctOption: 2,
    solution: 'Bélády’s Anomaly is a known flaw of the FIFO page replacement algorithm where allocating more physical page frames causes more page faults for certain reference strings. Stack algorithms like LRU and OPT are immune to this anomaly.',
    tags: ['Operating Systems', 'Virtual Memory', 'FIFO', 'Belady Anomaly'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What does the Linux command `kill -9 <PID>` signal to the target process?',
    options: [
      'A) SIGINT (Graceful keyboard interrupt)',
      'B) SIGTERM (Request termination allowing cleanup)',
      'C) SIGKILL (Immediate unconditional termination by kernel that cannot be caught or ignored)',
      'D) SIGHUP (Hangup signal to reload configuration)'
    ],
    correctOption: 2,
    solution: 'Signal 9 is SIGKILL. Unlike SIGTERM (signal 15), SIGKILL cannot be caught, handled, or ignored by the process; the Linux kernel immediately terminates the process and reclaims its resources.',
    tags: ['Linux', 'Signals', 'SIGKILL', 'Process Management'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'In operating systems, a thread that has terminated execution but whose parent process has not yet read its exit status via `wait()` is called a:',
    options: [
      'A) Orphan process',
      'B) Zombie process',
      'C) Daemon process',
      'D) Swapped process'
    ],
    correctOption: 1,
    solution: 'A Zombie (defunct) process is a process that has completed execution via exit(), but still has an entry in the process table so that its parent can read its exit status. An Orphan process is one whose parent process has died before it terminates (it is adopted by systemd/init PID 1).',
    tags: ['Operating Systems', 'Zombie Process', 'Process States', 'Linux'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'Which memory management hardware unit translates virtual logical addresses generated by the CPU into physical RAM addresses?',
    options: [
      'A) ALU',
      'B) MMU (Memory Management Unit)',
      'C) DMA Controller',
      'D) BIOS / UEFI'
    ],
    correctOption: 1,
    solution: 'The Memory Management Unit (MMU) is a computer hardware component that performs translation of virtual addresses to physical memory addresses using page tables and the Translation Lookaside Buffer (TLB).',
    tags: ['Operating Systems', 'MMU', 'Paging', 'Virtual Memory'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'In synchronization, what primitive consists of an integer variable that can only be accessed through two standard atomic operations: wait() and signal()?',
    options: [
      'A) Spinlock',
      'B) Semaphore',
      'C) Pipe',
      'D) Message Queue'
    ],
    correctOption: 1,
    solution: 'A Semaphore (invented by Edsger Dijkstra) is a synchronization tool consisting of an integer value modified solely via two indivisible atomic operations: P() or wait() (decrements), and V() or signal() (increments).',
    tags: ['Operating Systems', 'Semaphore', 'Synchronization', 'Dijkstra'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What Linux command displays real-time disk space usage for all mounted filesystems in human-readable gigabytes and megabytes?',
    options: [
      'A) du -sh *',
      'B) df -h',
      'C) free -m',
      'D) fdisk -l'
    ],
    correctOption: 1,
    solution: '`df -h` (Disk Free, human-readable) displays available and used disk space on all mounted filesystems. `du -sh` shows disk usage of specific directories, while `free -m` displays RAM memory statistics.',
    tags: ['Linux', 'Commands', 'Disk Management', 'df'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'In Banker’s algorithm for deadlock avoidance, a system state is formally defined as "Safe" if:',
    options: [
      'A) There are no processes currently holding any resources',
      'B) All resource requests can be satisfied simultaneously immediately',
      'C) There exists at least one safe execution sequence of processes that allows all processes to finish without deadlock',
      'D) Every process has already finished executing'
    ],
    correctOption: 2,
    solution: 'A state is safe if there exists a safe sequence <P1, P2, ..., Pn> such that for each Pi, the resources that Pi can still request can be satisfied by currently available resources plus resources held by all Pj where j < i.',
    tags: ['Operating Systems', 'Bankers Algorithm', 'Deadlock Avoidance', 'Safe State'],
    difficulty: 'Hard'
  },

  // Software Engineering & OOP
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'Which SOLID object-oriented design principle states that software entities (classes, modules, functions) should be open for extension, but closed for modification?',
    options: [
      'A) Single Responsibility Principle (SRP)',
      'B) Open/Closed Principle (OCP)',
      'C) Liskov Substitution Principle (LSP)',
      'D) Dependency Inversion Principle (DIP)'
    ],
    correctOption: 1,
    solution: 'Bertrand Meyer’s Open/Closed Principle (OCP) asserts that a class should be easily extendable to introduce new behavior (via inheritance or polymorphism/interfaces) without modifying its existing, tested source code.',
    tags: ['Software Engineering', 'SOLID', 'OCP', 'System Design'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'Which creational design pattern ensures that a class has only one instance throughout the entire application lifecycle and provides a global access point to it?',
    options: [
      'A) Factory Method',
      'B) Singleton Pattern',
      'C) Prototype Pattern',
      'D) Adapter Pattern'
    ],
    correctOption: 1,
    solution: 'The Singleton pattern restricts class instantiation to a single object and provides a synchronized global accessor (commonly used for Database Connection Pools and Logger instances in banking applications).',
    tags: ['System Design', 'Design Patterns', 'Singleton', 'OOP'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In black-box software testing, which test design technique tests values at the extreme ends of input boundaries (such as Min, Min+1, Max-1, Max)?',
    options: [
      'A) Equivalence Partitioning (EP)',
      'B) Boundary Value Analysis (BVA)',
      'C) Mutation Testing',
      'D) Cyclomatic Complexity Testing'
    ],
    correctOption: 1,
    solution: 'Boundary Value Analysis (BVA) is a black-box test design technique based on the empirical observation that software errors cluster around the edges and extreme limits of input ranges rather than at central nominal values.',
    tags: ['Software Engineering', 'Testing', 'BVA', 'Black Box Testing'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In Agile Scrum framework, what is the maximum recommended time-boxed duration for the daily Stand-Up meeting?',
    options: [
      'A) 15 Minutes',
      'B) 30 Minutes',
      'C) 45 Minutes',
      'D) 60 Minutes'
    ],
    correctOption: 0,
    solution: 'In Scrum, the Daily Scrum (Stand-Up) is strictly time-boxed to a maximum of 15 minutes to keep the development team synchronized on three questions: what was done yesterday, what will be done today, and any impediments.',
    tags: ['Software Engineering', 'Agile', 'Scrum', 'Standup'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'What type of polymorphism is achieved in C++ or Java via method overriding with virtual functions at runtime?',
    options: [
      'A) Compile-time (Static) Polymorphism',
      'B) Run-time (Dynamic) Polymorphism',
      'C) Ad-hoc Polymorphism',
      'D) Coercion Polymorphism'
    ],
    correctOption: 1,
    solution: 'Runtime (Dynamic) Polymorphism is resolved at execution time via dynamic dispatch and virtual method tables (vtable), where a call to an overridden method is directed to the actual subclass implementation.',
    tags: ['OOP', 'Polymorphism', 'Method Overriding', 'Java', 'C++'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'Which behavioral design pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically?',
    options: [
      'A) Decorator Pattern',
      'B) Observer Pattern',
      'C) Strategy Pattern',
      'D) Facade Pattern'
    ],
    correctOption: 1,
    solution: 'The Observer design pattern (Publish-Subscribe model) notifies all registered subscriber objects automatically whenever the subject/publisher object undergoes a state mutation (e.g., UI event listeners or account transaction notifications).',
    tags: ['System Design', 'Design Patterns', 'Observer Pattern', 'OOP'],
    difficulty: 'Medium'
  },

  // Computer Architecture & Digital Logic
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Which logic gate produces a HIGH output (1) if and only if an odd number of its binary inputs are HIGH (1)?',
    options: [
      'A) AND Gate',
      'B) NOR Gate',
      'C) XOR (Exclusive OR) Gate',
      'D) NAND Gate'
    ],
    correctOption: 2,
    solution: 'An XOR gate outputs 1 when the inputs are different (for 2 inputs) or when an odd number of inputs are 1 (for multi-input parity generators and binary addition half-adders).',
    tags: ['Digital Logic', 'Logic Gates', 'XOR', 'Computer Architecture'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Which two logic gates are known as "Universal Gates" because any Boolean logic function can be realized using only that single gate type?',
    options: [
      'A) AND and OR',
      'B) NAND and NOR',
      'C) XOR and XNOR',
      'D) NOT and AND'
    ],
    correctOption: 1,
    solution: 'NAND and NOR gates are universal gates because combinations of either gate alone can synthesize all three fundamental Boolean operations: NOT, AND, and OR.',
    tags: ['Digital Logic', 'Universal Gates', 'NAND', 'NOR'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the minimum number of 2-to-1 Multiplexers required to build a 4-to-1 Multiplexer?',
    options: [
      'A) 2',
      'B) 3',
      'C) 4',
      'D) 5'
    ],
    correctOption: 1,
    solution: 'To construct a 4-to-1 MUX from 2-to-1 MUXes, 2 MUXes are used in the first stage (controlled by select bit S0) and 1 MUX is used in the second stage (controlled by select bit S1). Total required = 2 + 1 = 3.',
    tags: ['Digital Logic', 'Multiplexer', 'Computer Architecture'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In CPU Cache architecture, what principle explains why a CPU that accesses memory address X is highly likely to access adjacent addresses (X+1, X+2) in the near future?',
    options: [
      'A) Temporal Locality',
      'B) Spatial Locality',
      'C) Branch Prediction',
      'D) Cache Coherence'
    ],
    correctOption: 1,
    solution: 'Spatial Locality states that if a memory location is referenced, nearby memory locations are likely to be referenced soon (e.g., executing contiguous sequential instructions or iterating through an array). Temporal Locality refers to referencing the exact same location repeatedly.',
    tags: ['Computer Architecture', 'Cache', 'Spatial Locality', 'Memory Hierarchy'],
    difficulty: 'Medium'
  }
];
