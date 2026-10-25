import { OfficerMcqQuestionDef } from './types';

export const officerCsQuestionsPool2: OfficerMcqQuestionDef[] = [
  // Computer Hardware & Storage
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'Which RAID (Redundant Array of Independent Disks) configuration provides disk mirroring for fault tolerance with 50% storage efficiency?',
    options: [
      'A) RAID 0',
      'B) RAID 1',
      'C) RAID 5',
      'D) RAID 10'
    ],
    correctOption: 1,
    solution: 'RAID 1 creates an exact duplicate copy (mirror) of data on two or more drives. If one drive fails, the mirror continues operating seamlessly with zero downtime, though usable capacity is 50%. RAID 0 is striping without redundancy.',
    tags: ['Programming & Algorithms', 'Hardware', 'RAID', 'Storage', 'Fault Tolerance'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the fastest memory type located closest to the CPU core inside a modern microprocessor?',
    options: [
      'A) Dynamic RAM (DRAM)',
      'B) Level 1 (L1) Cache (SRAM)',
      'C) Solid State Drive (NVMe SSD)',
      'D) ROM BIOS'
    ],
    correctOption: 1,
    solution: 'Level 1 (L1) Cache built using Static RAM (SRAM) is located directly on the processor core and operates at the processor’s clock frequency with latency as low as 1 nanosecond (sub-cycle access).',
    tags: ['Programming & Algorithms', 'Hardware', 'Cache Memory', 'SRAM', 'Architecture'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What is the sum output and carry output of a 1-bit Digital Half Adder for binary inputs A = 1 and B = 1?',
    options: [
      'A) Sum = 0, Carry = 0',
      'B) Sum = 1, Carry = 0',
      'C) Sum = 0, Carry = 1',
      'D) Sum = 1, Carry = 1'
    ],
    correctOption: 2,
    solution: 'A Half Adder computes: Sum = A ⊕ B (XOR), Carry = A · B (AND). For A = 1 and B = 1: Sum = 1 ⊕ 1 = 0, Carry = 1 · 1 = 1 (representing binary 10₂ = decimal 2).',
    tags: ['Programming & Algorithms', 'Digital Logic', 'Half Adder', 'Binary Addition'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which command-line utility utilizes ICMP Echo Request and Echo Reply packets to verify basic network connectivity and latency to a remote server?',
    options: [
      'A) netstat',
      'B) ping',
      'C) ipconfig',
      'D) nslookup'
    ],
    correctOption: 1,
    solution: 'The `ping` utility sends ICMP (Internet Control Message Protocol) type 8 (Echo Request) packets to the destination IP and waits for ICMP type 0 (Echo Reply) to measure round-trip time and packet loss.',
    tags: ['Networking & Security', 'ICMP', 'ping', 'Network Troubleshooting'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the primary difference between POP3 and IMAP email retrieval protocols?',
    options: [
      'A) POP3 downloads messages to the local device and typically deletes them from the server, while IMAP synchronizes emails across multiple devices in real-time',
      'B) POP3 encrypts messages while IMAP sends plaintext only',
      'C) POP3 is for sending mail, while IMAP is for receiving mail',
      'D) IMAP operates only over UDP port 25'
    ],
    correctOption: 0,
    solution: 'POP3 (Post Office Protocol v3) downloads emails to the local client and historically removes them from the server. IMAP (Internet Message Access Protocol) synchronizes messages directly on the mail server so changes reflect across all connected clients.',
    tags: ['Networking & Security', 'Email Protocols', 'POP3', 'IMAP'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which HTTP response status code indicates "404"?',
    options: [
      'A) 200 OK',
      'B) 404 Not Found',
      'C) 500 Internal Server Error',
      'D) 301 Moved Permanently'
    ],
    correctOption: 1,
    solution: 'HTTP status code 404 indicates that the client was able to communicate with a given server, but the server could not find what was requested (Not Found).',
    tags: ['Networking & Security', 'HTTP', 'Status Codes', 'Web Technologies'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In software testing, what type of testing is executed to confirm that a recent program code modification or bug fix has not adversely affected existing functional features?',
    options: [
      'A) Stress Testing',
      'B) Regression Testing',
      'C) Alpha Testing',
      'D) Acceptance Testing'
    ],
    correctOption: 1,
    solution: 'Regression Testing is the re-execution of previously passed test suites to guarantee that recent code enhancements or patches have not introduced new defects or broken existing capabilities.',
    tags: ['Software Engineering & System Design', 'Software Testing', 'Regression Testing', 'QA'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In banking IT operations, what does "End-of-Day (EOD) Processing" in a Core Banking System (CBS) refer to?',
    options: [
      'A) Backing up user browser histories at 5:00 PM',
      'B) Automated batch sequence that balances ledgers, computes daily interest accruals, posts fees, and rolls the banking business date forward',
      'C) Shutting down server power to save electricity at night',
      'D) Disconnecting branch teller terminals from the network'
    ],
    correctOption: 1,
    solution: 'EOD (End of Day) is a mission-critical automated batch processing cycle in Core Banking Solutions (CBS) where transactions are finalized, daily general ledger balances reconciled, interest calculated, and the system accounting date advanced to the next business day.',
    tags: ['Software Engineering & System Design', 'Core Banking', 'CBS', 'EOD', 'Banking IT'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'What SQL command is used to permanently save all changes made during the current transaction to the database?',
    options: [
      'A) ROLLBACK',
      'B) COMMIT',
      'C) SAVEPOINT',
      'D) CHECKPOINT'
    ],
    correctOption: 1,
    solution: 'The `COMMIT` transaction control command makes all pending data modifications performed during the current transaction permanent and visible to other database connections.',
    tags: ['Database & SQL', 'TCL', 'COMMIT', 'Transactions'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'Which Linux command is used to display a detailed long-format listing of files including permissions, owner, size, and modification timestamp?',
    options: [
      'A) ls -l',
      'B) dir /w',
      'C) cat -a',
      'D) ps -ef'
    ],
    correctOption: 0,
    solution: '`ls -l` produces a long listing displaying file types, permission bits (e.g. -rwxr-xr-x), link counts, owner username, owner group, size in bytes, and last modification date.',
    tags: ['Operating Systems & Linux', 'Linux', 'ls', 'Commands'],
    difficulty: 'Easy'
  },
  // Additional Officer IT Core Questions
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the first octet range for IPv4 Class B network addresses?',
    options: [
      'A) 1 to 126',
      'B) 128 to 191',
      'C) 192 to 223',
      'D) 224 to 239'
    ],
    correctOption: 1,
    solution: 'Class A addresses start with binary 0 (1 to 126); Class B addresses start with binary 10 (128 to 191); Class C starts with binary 110 (192 to 223); Class D (multicast) starts with 1110 (224 to 239).',
    tags: ['Networking & Security', 'IPv4', 'Class B', 'IP Addressing'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'Which port number does DNS (Domain Name System) primarily listen on for client name resolution queries?',
    options: [
      'A) TCP/UDP Port 53',
      'B) TCP Port 25',
      'C) UDP Port 67',
      'D) TCP Port 110'
    ],
    correctOption: 0,
    solution: 'DNS uses port 53 (predominantly UDP for standard client queries, and TCP for zone transfers and responses exceeding 512 bytes).',
    tags: ['Networking & Security', 'DNS', 'Port 53', 'Protocols'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'What is the numeric octal permission for granting Read, Write, and Execute permissions to the Owner, and Read and Execute permissions to Group and Others?',
    options: [
      'A) 777',
      'B) 755',
      'C) 644',
      'D) 700'
    ],
    correctOption: 1,
    solution: 'Read = 4, Write = 2, Execute = 1. Owner: 4+2+1 = 7. Group: 4+1 = 5. Others: 4+1 = 5. Octal mode = 755 (rwxr-xr-x).',
    tags: ['Operating Systems & Linux', 'Linux', 'chmod', 'Permissions'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'What is the key difference between CHAR and VARCHAR SQL data types?',
    options: [
      'A) CHAR is fixed-length and pads unused space with blanks, whereas VARCHAR is variable-length and stores only actual characters',
      'B) CHAR stores numbers while VARCHAR stores text',
      'C) VARCHAR cannot store spaces',
      'D) CHAR has a maximum limit of 8 characters'
    ],
    correctOption: 0,
    solution: 'CHAR(n) allocates fixed storage of n bytes padding shorter strings with spaces. VARCHAR(n) is variable-length, using only the bytes necessary to store the string plus a 1-2 byte length prefix.',
    tags: ['Database & SQL', 'SQL Data Types', 'CHAR', 'VARCHAR'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'How is the two’s complement of a binary number calculated?',
    options: [
      'A) Inverting all bits (one’s complement) and adding 1 to the least significant bit (LSB)',
      'B) Adding 10 to the binary number',
      'C) Shifting all bits left by 1 position',
      'D) Inverting the most significant bit only'
    ],
    correctOption: 0,
    solution: 'To obtain the 2’s complement of a binary number: 1) Invert all bits (0 becomes 1 and 1 becomes 0 to form 1’s complement); 2) Add 1 to the LSB.',
    tags: ['Programming & Algorithms', 'Number Systems', 'Twos Complement', 'Binary Arithmetic'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'In Microsoft Excel, what is the correct syntax for the VLOOKUP function?',
    options: [
      'A) =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
      'B) =VLOOKUP(table_array, lookup_value, row_index_num)',
      'C) =VLOOKUP(col_index_num, lookup_value, table_array)',
      'D) =VLOOKUP(lookup_value, range, sum_range)'
    ],
    correctOption: 0,
    solution: 'VLOOKUP syntax is: `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`, where range_lookup is TRUE for approximate match or FALSE for exact match.',
    tags: ['Software Engineering & System Design', 'Excel', 'VLOOKUP', 'Productivity'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What malicious software covertly records keyboard keystrokes to steal bank passwords, PINs, and credit card credentials?',
    options: [
      'A) Keylogger (Spyware)',
      'B) Computer Worm',
      'C) Logic Bomb',
      'D) Rootkit'
    ],
    correctOption: 0,
    solution: 'A Keylogger is a surveillance software or hardware device that logs every key pressed on a keyboard, allowing cybercriminals to capture passwords, credit card numbers, and confidential banking data.',
    tags: ['Networking & Security', 'Cybersecurity', 'Keylogger', 'Spyware'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Programming & Algorithms',
    questionText: 'What optical recognition technology is widely used in recruitment and competitive exams to evaluate objective multiple-choice answer sheets?',
    options: [
      'A) OMR (Optical Mark Recognition)',
      'B) OCR (Optical Character Recognition)',
      'C) MICR (Magnetic Ink Character Recognition)',
      'D) Barcode Scanner'
    ],
    correctOption: 0,
    solution: 'OMR (Optical Mark Recognition) scans marked pencil or pen bubbles on predefined paper sheets to detect choices by measuring reflected light transmission.',
    tags: ['Programming & Algorithms', 'Hardware', 'OMR', 'Data Processing'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What is the maximum data transfer rate of the SuperSpeed USB 3.0 standard?',
    options: [
      'A) 480 Mbps',
      'B) 5 Gbps',
      'C) 10 Gbps',
      'D) 1 Gbps'
    ],
    correctOption: 1,
    solution: 'USB 2.0 (High-Speed) supports 480 Mbps. USB 3.0 (SuperSpeed) achieves a maximum theoretical signaling rate of 5 Gbps (5,000 Mbps).',
    tags: ['Networking & Security', 'Hardware', 'USB 3.0', 'Data Transfer'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Software Engineering & System Design',
    questionText: 'Which Microsoft Word feature allows users to produce personalized bulk customer letters, loan notices, or envelopes by merging a template document with a spreadsheet database?',
    options: [
      'A) Mail Merge',
      'B) Track Changes',
      'C) AutoText',
      'D) Macro Recording'
    ],
    correctOption: 0,
    solution: 'Mail Merge enables batch generation of personalized documents (letters, statements, envelopes) by linking a master document template to a data source (e.g. an Excel sheet or Access table).',
    tags: ['Software Engineering & System Design', 'MS Word', 'Mail Merge', 'Office Productivity'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Database & SQL',
    questionText: 'Which SQL operator is used in a WHERE clause to search for a specified pattern in a column using wildcards (% and _)?',
    options: [
      'A) LIKE',
      'B) MATCH',
      'C) IN',
      'D) BETWEEN'
    ],
    correctOption: 0,
    solution: 'The `LIKE` operator performs pattern matching using wildcard characters: `%` matches zero or more characters, and `_` matches exactly one character.',
    tags: ['Database & SQL', 'SQL', 'LIKE', 'Wildcards'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Operating Systems & Linux',
    questionText: 'In Windows operating systems, what is the file name of the Command Prompt interpreter?',
    options: [
      'A) cmd.exe',
      'B) command.com',
      'C) terminal.exe',
      'D) bash.exe'
    ],
    correctOption: 0,
    solution: '`cmd.exe` is the default 32/64-bit command-line interpreter in modern Windows NT-based operating systems (Windows 7, 10, 11, and Windows Server).',
    tags: ['Operating Systems & Linux', 'Windows', 'cmd', 'CLI'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Networking & Security',
    questionText: 'What network device connects two distinct local area networks (LANs) that may utilize different protocols, operating up to Layer 7 of the OSI model?',
    options: [
      'A) Gateway',
      'B) Repeater',
      'C) Passive Hub',
      'D) Bridge'
    ],
    correctOption: 0,
    solution: 'A Gateway translates between disparate network architectures and protocols across multiple OSI layers, such as connecting a local Core Banking LAN to an external SWIFT or card network.',
    tags: ['Networking & Security', 'Hardware', 'Gateway', 'OSI Model'],
    difficulty: 'Easy'
  }
];
