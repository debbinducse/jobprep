import { OfficerMcqQuestionDef } from './types';

export const officerCsQuestionsPool: OfficerMcqQuestionDef[] = [
  // Database & SQL
  {
    topicCategory: 'Database & SQL',
    questionText: 'What is the fundamental difference between the SQL TRUNCATE and DROP commands?',
    options: [
      'A) TRUNCATE removes all rows while keeping the table structure intact; DROP deletes both data and the table definition',
      'B) TRUNCATE can be rolled back in all databases whereas DROP cannot',
      'C) TRUNCATE is a DML statement whereas DROP is a DCL statement',
      'D) TRUNCATE deletes one row at a time with where clause support'
    ],
    correctOption: 0,
    solution: 'TRUNCATE is a DDL command that quickly removes all rows from a table by deallocating the data pages, leaving the table structure, columns, and constraints intact. DROP removes both the table data and its entire definition from the database catalog.',
    tags: ['Database & SQL', 'SQL', 'TRUNCATE', 'DROP', 'DDL'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which key in a relational database uniquely identifies a tuple (row) within a relation and cannot accept NULL values?',
    options: [
      'A) Foreign Key',
      'B) Primary Key',
      'C) Secondary Index Key',
      'D) Composite Foreign Key'
    ],
    correctOption: 1,
    solution: 'A Primary Key enforces Entity Integrity; it uniquely identifies each record in a database table and strictly forbids NULL values. A Unique Key allows one NULL value in many RDBMSs.',
    tags: ['Database & SQL', 'Keys', 'Primary Key', 'Integrity Constraints'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which category of SQL commands does the GRANT and REVOKE commands belong to?',
    options: [
      'A) DDL (Data Definition Language)',
      'B) DML (Data Manipulation Language)',
      'C) DCL (Data Control Language)',
      'D) TCL (Transaction Control Language)'
    ],
    correctOption: 2,
    solution: 'Data Control Language (DCL) commands manage permissions and user access rights within the database system. The two primary DCL commands are GRANT (provides privileges) and REVOKE (withdraws privileges).',
    tags: ['Database & SQL', 'SQL Categories', 'DCL', 'GRANT', 'REVOKE'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'In a bank customer database, which SQL query correctly retrieves the total number of distinct cities where account holders reside?',
    options: [
      'A) SELECT COUNT(City) FROM Accounts;',
      'B) SELECT COUNT(DISTINCT City) FROM Accounts;',
      'C) SELECT DISTINCT(COUNT City) FROM Accounts;',
      'D) SELECT COUNT(*) WHERE City IS UNIQUE FROM Accounts;'
    ],
    correctOption: 1,
    solution: 'The syntax `COUNT(DISTINCT column_name)` counts only unique, non-null values in the specified column, eliminating duplicate occurrences.',
    tags: ['Database & SQL', 'SQL', 'COUNT', 'DISTINCT', 'Queries'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which type of JOIN returns all records from the left table and the matched records from the right table, filling with NULL when no match is found?',
    options: [
      'A) INNER JOIN',
      'B) LEFT OUTER JOIN',
      'C) RIGHT OUTER JOIN',
      'D) CROSS JOIN'
    ],
    correctOption: 1,
    solution: 'A LEFT OUTER JOIN (or simply LEFT JOIN) returns all rows from the left table regardless of whether there is a corresponding match in the right table. For non-matching rows, right table columns return NULL.',
    tags: ['Database & SQL', 'SQL Joins', 'LEFT JOIN', 'Relational Queries'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'A relation is in Second Normal Form (2NF) if and only if it is in 1NF and:',
    options: [
      'A) It has no transitive dependencies',
      'B) Every non-prime attribute is fully functionally dependent on the primary key (no partial dependencies)',
      'C) Every determinant is a candidate key',
      'D) All multi-valued dependencies are eliminated'
    ],
    correctOption: 1,
    solution: '2NF requires 1NF compliance and the elimination of partial dependencies, meaning no non-prime attribute can depend on a proper subset of any candidate key (only relevant when candidate keys are composite).',
    tags: ['Database & SQL', 'Normalization', '2NF', 'Partial Dependency'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which of the following database constraints ensures Referential Integrity between two related tables?',
    options: [
      'A) CHECK Constraint',
      'B) UNIQUE Constraint',
      'C) FOREIGN KEY Constraint',
      'D) NOT NULL Constraint'
    ],
    correctOption: 2,
    solution: 'A Foreign Key constraint maintains referential integrity by ensuring that a value in a child table column must match an existing primary/unique key value in the referenced parent table, or be NULL.',
    tags: ['Database & SQL', 'Foreign Key', 'Referential Integrity'],
    difficulty: 'Easy'
  },

  // Computer Networks & Security
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the standard physical port and default transmission rate for Gigabit Ethernet (1000BASE-T) over Category 5e/6 UTP cable?',
    options: [
      'A) RJ-11 connector up to 100 Mbps',
      'B) RJ-45 connector up to 1000 Mbps (1 Gbps)',
      'C) BNC connector up to 10 Mbps',
      'D) DB-9 serial connector up to 1 Gbps'
    ],
    correctOption: 1,
    solution: 'Gigabit Ethernet (1000BASE-T) uses 8-pin RJ-45 (Registered Jack 45) connectors over 4 twisted pairs of Cat5e/Cat6 copper cabling to achieve speeds up to 1,000 Mbps (1 Gbps) over distances up to 100 meters.',
    tags: ['Networking & Security', 'Ethernet', 'RJ-45', 'Cabling', 'Hardware'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which network topology connects every computer to a central network device (such as a Switch or Hub), where a cable failure only affects one workstation?',
    options: [
      'A) Bus Topology',
      'B) Ring Topology',
      'C) Star Topology',
      'D) Mesh Topology'
    ],
    correctOption: 2,
    solution: 'In a Star topology, all nodes are individually connected to a central device (switch/hub). If a single peripheral cable fails, only that workstation is disconnected, leaving the rest of the LAN unaffected.',
    tags: ['Networking & Security', 'Network Topology', 'Star Topology', 'LAN'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the default subnet mask for a traditional Class C IPv4 network address?',
    options: [
      'A) 255.0.0.0 (/8)',
      'B) 255.255.0.0 (/16)',
      'C) 255.255.255.0 (/24)',
      'D) 255.255.255.255 (/32)'
    ],
    correctOption: 2,
    solution: 'Class C IPv4 addresses (range 192.0.0.0 to 223.255.255.255) dedicate 24 bits for the Network ID and 8 bits for the Host ID, corresponding to the default subnet mask 255.255.255.0 (/24).',
    tags: ['Networking & Security', 'IPv4', 'Class C', 'Subnet Mask'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which network protocol dynamically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to client devices joining a bank branch LAN?',
    options: [
      'A) DNS (Domain Name System)',
      'B) DHCP (Dynamic Host Configuration Protocol)',
      'C) SNMP (Simple Network Management Protocol)',
      'D) ARP (Address Resolution Protocol)'
    ],
    correctOption: 1,
    solution: 'DHCP operates on UDP ports 67 (server) and 68 (client) using the DORA process (Discover, Offer, Request, Acknowledge) to dynamically lease IP configurations to network hosts.',
    tags: ['Networking & Security', 'DHCP', 'DORA', 'IP Configuration'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the default port number used by HTTPS (Hypertext Transfer Protocol Secure) for encrypted web traffic using TLS/SSL?',
    options: [
      'A) Port 80',
      'B) Port 443',
      'C) Port 8080',
      'D) Port 22'
    ],
    correctOption: 1,
    solution: 'Standard unencrypted HTTP uses port 80. Secure HTTPS utilizes TCP port 443, securing web communications with cryptographic protocols (TLS/SSL). SSH uses port 22.',
    tags: ['Networking & Security', 'HTTPS', 'Ports', 'TLS', 'Web Protocols'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What type of network hardware device operates at Data Link Layer (Layer 2) and forwards frames based on hardware MAC addresses?',
    options: [
      'A) Repeater',
      'B) Network Switch',
      'C) Passive Hub',
      'D) Gateway'
    ],
    correctOption: 1,
    solution: 'A Layer 2 Switch maintains a MAC address table (CAM table) to forward incoming Ethernet frames directly to the specific destination port, breaking up collision domains. Hubs broadcast to all ports blindly.',
    tags: ['Networking & Security', 'Switch', 'Layer 2', 'MAC Address', 'Hardware'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the name of the social engineering attack where fraudulent emails pretending to be from a reputable bank trick users into revealing login credentials or OTPs?',
    options: [
      'A) Man-in-the-Middle',
      'B) Phishing',
      'C) SQL Injection',
      'D) Brute Force'
    ],
    correctOption: 1,
    solution: 'Phishing is a deceptive social engineering cyberattack where perpetrators send counterfeit emails or spoofed websites mimicking authentic financial institutions to harvest passwords, credit card numbers, and banking credentials.',
    tags: ['Networking & Security', 'Cybersecurity', 'Phishing', 'Social Engineering'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'In asymmetric public-key cryptography, if User A wants to send an encrypted confidential message to User B that only User B can read, which key must User A use to encrypt it?',
    options: [
      'A) User A’s Private Key',
      'B) User A’s Public Key',
      'C) User B’s Public Key',
      'D) User B’s Private Key'
    ],
    correctOption: 2,
    solution: 'For confidentiality, the sender encrypts the plaintext using the recipient\'s (User B\'s) Public Key. Because public and private keys are mathematically paired, only User B\'s matching Private Key can decrypt the ciphertext.',
    tags: ['Networking & Security', 'Cryptography', 'Public Key', 'Encryption'],
    difficulty: 'Medium'
  },

  // Operating Systems & System Architecture
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What firmware program stored in non-volatile ROM/flash memory initializes and tests computer hardware components during the Power-On Self-Test (POST) when a PC boots up?',
    options: [
      'A) Kernel',
      'B) BIOS / UEFI',
      'C) Master Boot Record (MBR)',
      'D) Device Driver'
    ],
    correctOption: 1,
    solution: 'BIOS (Basic Input/Output System) or UEFI is firmware stored on a ROM/flash chip on the motherboard. It performs the POST (Power-On Self-Test) to verify hardware readiness and locates the bootloader on storage drives.',
    tags: ['Operating Systems & Linux', 'BIOS', 'UEFI', 'Booting', 'Hardware'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'Which Linux command is used to display the current absolute directory path in the terminal?',
    options: [
      'A) dir',
      'B) path',
      'C) pwd',
      'D) whereami'
    ],
    correctOption: 2,
    solution: '`pwd` stands for "Print Working Directory" and outputs the current full filesystem path of the active working directory.',
    tags: ['Operating Systems & Linux', 'Linux', 'pwd', 'Commands'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'In Windows Operating Systems, which utility/shortcut opens the Task Manager to inspect running processes, CPU, and RAM consumption?',
    options: [
      'A) Ctrl + Alt + Delete (or Ctrl + Shift + Esc)',
      'B) Alt + F4',
      'C) Windows + L',
      'D) Windows + R -> cmd'
    ],
    correctOption: 0,
    solution: 'Ctrl + Shift + Esc directly launches the Windows Task Manager, while Ctrl + Alt + Del opens the Windows security screen with a Task Manager option.',
    tags: ['Operating Systems & Linux', 'Windows', 'Task Manager', 'Shortcuts'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What is the main advantage of the NTFS filesystem compared to the legacy FAT32 filesystem in Windows?',
    options: [
      'A) FAT32 supports files larger than 4GB whereas NTFS cannot',
      'B) NTFS supports individual file sizes greater than 4GB, file encryption (EFS), compression, and access control permissions (ACLs)',
      'C) FAT32 is faster for multi-terabyte enterprise server volumes',
      'D) NTFS does not require journaling'
    ],
    correctOption: 1,
    solution: 'FAT32 has a hard maximum single file size limit of 4 GB and lacks security access control lists (ACLs). NTFS supports very large files (up to 16 TB+), journaling for crash recovery, file-level permissions, and encryption.',
    tags: ['Operating Systems & Linux', 'Filesystems', 'NTFS', 'FAT32'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What is the primary function of Virtual Memory in modern operating systems?',
    options: [
      'A) To permanently back up files to cloud storage',
      'B) To allow execution of processes that require more memory than physical RAM by swapping pages to secondary storage',
      'C) To accelerate CPU arithmetic calculations via hardware floating point',
      'D) To protect BIOS firmware from power spikes'
    ],
    correctOption: 1,
    solution: 'Virtual Memory creates an illusion of a very large contiguous memory space for programs by utilizing a portion of secondary disk storage (swap space or pagefile.sys) to supplement physical RAM.',
    tags: ['Operating Systems & Linux', 'Virtual Memory', 'RAM', 'Paging'],
    difficulty: 'Medium'
  },

  // Programming & Data Structures
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What data structure operates under the Last-In, First-Out (LIFO) access principle?',
    options: [
      'A) Queue',
      'B) Stack',
      'C) Binary Heap',
      'D) Linked List'
    ],
    correctOption: 1,
    solution: 'A Stack is a LIFO (Last-In, First-Out) data structure where both insertion (push) and deletion (pop) occur at the same end, called the "top". A Queue is FIFO (First-In, First-Out).',
    tags: ['Programming & Algorithms', 'Data Structures', 'Stack', 'LIFO'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the average and worst-case time complexity of searching for a key in a sorted array of n elements using Binary Search?',
    options: [
      'A) O(1)',
      'B) O(log n)',
      'C) O(n)',
      'D) O(n log n)'
    ],
    correctOption: 1,
    solution: 'Binary Search halves the search interval with each comparison, yielding an average and worst-case time complexity of O(log₂ n). Linear search on unsorted arrays takes O(n).',
    tags: ['Programming & Algorithms', 'Binary Search', 'Time Complexity', 'Algorithms'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In C programming, what does the unary operator `*` represent when applied to a pointer variable (e.g., `*ptr`)?',
    options: [
      'A) Address-of operator (extracts the memory address)',
      'B) Dereference operator (accesses the value stored at the address pointed to)',
      'C) Bitwise multiplication operator',
      'D) Memory deallocation command'
    ],
    correctOption: 1,
    solution: 'The `&` operator is the address-of operator, while the `*` operator dereferences the pointer, accessing or modifying the value stored at the memory address contained in the pointer variable.',
    tags: ['Programming & Algorithms', 'C Language', 'Pointers', 'Dereference'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Which of the following sorting algorithms compares adjacent elements and swaps them if they are in the wrong order, repeatedly passing through the list?',
    options: [
      'A) Bubble Sort',
      'B) Merge Sort',
      'C) Quick Sort',
      'D) Heap Sort'
    ],
    correctOption: 0,
    solution: 'Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order, causing larger elements to "bubble" to the end with O(n²) time complexity.',
    tags: ['Programming & Algorithms', 'Bubble Sort', 'Sorting', 'Algorithms'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'In object-oriented programming (OOP), what principle refers to bundling data (attributes) and methods that operate on that data into a single unit, restricting direct access from outside?',
    options: [
      'A) Inheritance',
      'B) Encapsulation',
      'C) Polymorphism',
      'D) Composition'
    ],
    correctOption: 1,
    solution: 'Encapsulation is the OOP principle of bundling data and methods into a class and restricting direct access to components (e.g. using private access modifiers with public getter/setter methods) to prevent unintended external interference.',
    tags: ['Programming & Algorithms', 'OOP', 'Encapsulation', 'Software Engineering'],
    difficulty: 'Easy'
  },

  // Number Systems & Office ICT
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the binary representation of the decimal integer 25?',
    options: [
      'A) 11001',
      'B) 10101',
      'C) 11011',
      'D) 10011'
    ],
    correctOption: 0,
    solution: 'Converting 25 to binary: 25 / 2 = 12 rem 1; 12 / 2 = 6 rem 0; 6 / 2 = 3 rem 0; 3 / 2 = 1 rem 1; 1 / 2 = 0 rem 1. Reading remainders from bottom to top yields 11001₂ (16 + 8 + 0 + 0 + 1 = 25).',
    tags: ['Programming & Algorithms', 'Number Systems', 'Binary', 'Decimal'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In Microsoft Excel, what symbol is used before row and column identifiers to designate an Absolute Cell Reference (e.g., preventing the reference from shifting when copied)?',
    options: [
      'A) # (Hash)',
      'B) $ (Dollar sign)',
      'C) & (Ampersand)',
      'D) @ (At sign)'
    ],
    correctOption: 1,
    solution: 'The dollar sign `$` locks column and row references in Excel (e.g., `$A$1` creates an absolute reference that remains fixed when formulas are copied or dragged to other cells).',
    tags: ['Software Engineering & System Design', 'Excel', 'Spreadsheet', 'Absolute Reference'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'Which keyboard shortcut in Microsoft Word aligns selected paragraph text to "Justified" (flush with both left and right margins)?',
    options: [
      'A) Ctrl + E',
      'B) Ctrl + L',
      'C) Ctrl + J',
      'D) Ctrl + R'
    ],
    correctOption: 2,
    solution: 'Ctrl + J aligns text to Justify. Ctrl + L aligns Left, Ctrl + R aligns Right, and Ctrl + E aligns Center.',
    tags: ['Software Engineering & System Design', 'MS Word', 'Shortcuts', 'Productivity'],
    difficulty: 'Easy'
  }
];
