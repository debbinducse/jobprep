export interface MCQItem {
  id: string;
  sourceExam: string;
  category: 'Officer (IT)' | 'Senior Officer (IT)';
  subject: 'Computer Science' | 'Database' | 'Networking' | 'Cybersecurity' | 'Bangla' | 'English' | 'Math';
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
}

export const bankItMcqBank: MCQItem[] = [
  {
    id: 'mcq-1',
    sourceExam: 'Officer (IT) Job ID: 10184 (2024)',
    category: 'Officer (IT)',
    subject: 'Networking',
    question: 'How many usable host IP addresses are available in a subnet with prefix /27?',
    options: ['32', '30', '28', '16'],
    correctAnswer: 1,
    explanation: 'Formula for usable host addresses is 2^(32 - prefix) - 2. For /27, 2^(32 - 27) - 2 = 2^5 - 2 = 32 - 2 = 30 usable host IP addresses.'
  },
  {
    id: 'mcq-2',
    sourceExam: 'SO (IT) Job ID: 10185 (2024)',
    category: 'Senior Officer (IT)',
    subject: 'Database',
    question: 'Which normal form strictly eliminates transitive functional dependencies for non-prime attributes?',
    options: ['First Normal Form (1NF)', 'Second Normal Form (2NF)', 'Third Normal Form (3NF)', 'BCNF'],
    correctAnswer: 2,
    explanation: '3NF requires that a relation is in 2NF and no non-prime attribute is transitively dependent on any candidate key (X -> Y where X is not a superkey and Y is not a prime attribute).'
  },
  {
    id: 'mcq-3',
    sourceExam: 'Officer (IT) Job ID: 10152 (BIBM 2023)',
    category: 'Officer (IT)',
    subject: 'Computer Science',
    question: 'What is the time complexity of searching an element in a balanced B+ Tree of order m containing N records?',
    options: ['O(N)', 'O(log_m N)', 'O(N log N)', 'O(1)'],
    correctAnswer: 1,
    explanation: 'The height of a B+ Tree with fan-out m is proportional to log_m N. Searching takes O(log_m N) disk access steps, ensuring extremely fast database indexing.'
  },
  {
    id: 'mcq-4',
    sourceExam: 'SO (IT) Job ID: 10225 (BIBM)',
    category: 'Senior Officer (IT)',
    subject: 'Networking',
    question: 'Which routing protocol is an interior gateway protocol (IGP) based on Dijkstra’s Shortest Path First algorithm?',
    options: ['RIP', 'BGP', 'OSPF', 'EGP'],
    correctAnswer: 2,
    explanation: 'OSPF (Open Shortest Path First) is a link-state routing protocol that utilizes Dijkstra’s algorithm to calculate the shortest path tree across autonomous systems.'
  },
  {
    id: 'mcq-5',
    sourceExam: 'Officer (IT) Job ID: 10229 (2024)',
    category: 'Officer (IT)',
    subject: 'Cybersecurity',
    question: 'What is the default port number used by HTTPS with TLS encryption in banking web portals?',
    options: ['80', '8080', '443', '22'],
    correctAnswer: 2,
    explanation: 'HTTPS (Hypertext Transfer Protocol Secure) operates over TCP port 443 by default.'
  },
  {
    id: 'mcq-6',
    sourceExam: 'SO (IT) Combined Bank 4 Bank',
    category: 'Senior Officer (IT)',
    subject: 'Database',
    question: 'Which SQL clause is used to filter aggregated records produced by a GROUP BY clause?',
    options: ['WHERE', 'HAVING', 'ORDER BY', 'LIMIT'],
    correctAnswer: 1,
    explanation: 'WHERE filters individual records before grouping; HAVING filters aggregated groups after the GROUP BY operation.'
  },
  {
    id: 'mcq-7',
    sourceExam: 'Officer (IT) SB 2021 ET-CTI (11/12/2021)',
    category: 'Officer (IT)',
    subject: 'Networking',
    question: 'Which multiplexing technique divides the total optical fiber bandwidth by transmitting multiple light signals at distinct wavelengths?',
    options: ['TDM', 'FDM', 'WDM', 'CDM'],
    correctAnswer: 2,
    explanation: 'Wavelength Division Multiplexing (WDM) combines multiple optical carrier signals onto a single optical fiber by using different wavelengths (colors) of laser light.'
  },
  {
    id: 'mcq-8',
    sourceExam: 'SO (IT) Job ID: 25104 (2026)',
    category: 'Senior Officer (IT)',
    subject: 'Cybersecurity',
    question: 'In asymmetric public-key cryptography (e.g. RSA), which key is used by the sender to encrypt a confidential message intended only for the recipient?',
    options: ['Sender Private Key', 'Recipient Public Key', 'Sender Public Key', 'Recipient Private Key'],
    correctAnswer: 1,
    explanation: 'To ensure confidentiality, the sender encrypts the plaintext with the Recipient’s Public Key. Only the recipient holding their corresponding Private Key can decrypt it.'
  },
  {
    id: 'mcq-9',
    sourceExam: 'Officer (IT) Job ID: 25105 (2026)',
    category: 'Officer (IT)',
    subject: 'Database',
    question: 'Which ACID property guarantees that all database updates in a banking fund transfer either complete fully or have no effect at all?',
    options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
    correctAnswer: 0,
    explanation: 'Atomicity ensures "all-or-nothing" execution. If a debit succeeds but the corresponding credit fails, the entire transaction is rolled back.'
  },
  {
    id: 'mcq-10',
    sourceExam: 'SO (IT) Combined Bank SB BDBL',
    category: 'Senior Officer (IT)',
    subject: 'Computer Science',
    question: 'What is the message type identifier (MTI) for an Authorization Request in the ISO 8583 banking standard?',
    options: ['0200', '0100', '0110', '0800'],
    correctAnswer: 1,
    explanation: 'In ISO 8583, MTI 0100 specifies an Authorization Request (e.g. ATM PIN verification or POS swipe), and MTI 0110 is the corresponding Authorization Response.'
  }
];
