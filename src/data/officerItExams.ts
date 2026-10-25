import { ExamPaper } from '../types/exam';

export const officerItPapers: ExamPaper[] = [
  // NEW: 2026 Combined 9 Banks Officer (IT)
  {
    id: 'officer-it-combined-2026',
    title: 'Officer (IT), Combined 9 Banks & FIs (2026 Written Exam)',
    searchQuery: '2026 Combined Bank Officer IT written question solution pdf BSCS Bangladesh Bank',
    category: 'Officer (IT)',
    jobId: 'BSCS-OIT-2026',
    circularYear: '2026 (Combined 9 Banks)',
    examDate: 'August 28, 2026',
    examBody: 'Bankers Selection Committee Secretariat (BSCS) / Bangladesh Bank',
    participatingBanks: [
      'Sonali Bank PLC',
      'Janata Bank PLC',
      'Agrani Bank PLC',
      'Rupali Bank PLC',
      'Bangladesh Krishi Bank (BKB)',
      'Rajshahi Krishi Unnayan Bank (RAKUB)',
      'Bangladesh Development Bank PLC (BDBL)',
      'Probashi Kallyan Bank (PKB)',
      'Bangladesh House Building Finance Corporation (BHBFC)'
    ],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Complete 2026 BSCS Combined 9 Banks Officer (IT) 200-mark written examination paper. Covers Database Normalization (1NF to BCNF) & Non-Performing Loan (NPL) SQL Queries, Priority Queue Min-Heap for RTGS Transaction Scheduling, CIDR Subnetting & ARP/TLS Security, Software Testing Cyclomatic Complexity, Virtual Memory Page Replacement (LRU), e-KYC Biometric Architecture, and Data Privacy/AML Compliance Focus Writing.',
    keyTopics: [
      'Database Normalization & NPL SQL',
      'Priority Queue Heap for RTGS',
      'CIDR /26 Branch Subnetting',
      'Cyclomatic Complexity & Testing',
      'LRU Page Replacement & Linux',
      'Data Privacy & AML/KYC Compliance'
    ],
    sections: [
      {
        id: 'sec-oit2026-tech',
        name: 'Part A: Core IT & Computer Science (140 Marks)',
        marks: 140,
        description: 'DBMS & SQL, Programming & Data Structures, Networking & Security, Software Testing, Operating Systems, and Banking Technology',
        questions: [
          {
            id: 'q-oit2026-1',
            questionNo: '1',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider the following unnormalized Bank Loan table:\nLoanRecord(LoanID, CustomerID, CustomerName, CustomerPhone_List, BranchCode, BranchName, BranchCity, SanctionAmount, OverdueMonths)\n(a) Normalize this relation step-by-step from 1NF to 2NF and 3NF/BCNF, clearly identifying primary and foreign keys.\n(b) Write an SQL query on the normalized tables to list each BranchName, total number of classified Non-Performing Loans (where OverdueMonths >= 6), and total SanctionAmount of those classified loans for branches where the classified loan total exceeds BDT 50,00,000.',
            solution: `(a) Step-by-Step Normalization (1NF -> 2NF -> 3NF/BCNF):
1. First Normal Form (1NF):
   - Problem: \`CustomerPhone_List\` is a multi-valued attribute.
   - Fix: Decompose multi-valued phone numbers into a separate table \`CustomerPhones(CustomerID, PhoneNumber)\` so all attributes are atomic.
2. Second Normal Form (2NF):
   - Problem: Partial dependencies on composite keys.
   - Fix: Separate Customer attributes and Loan attributes:
     * \`Customers(CustomerID [PK], CustomerName)\`
     * \`CustomerPhones(CustomerID [FK], PhoneNumber, PRIMARY KEY(CustomerID, PhoneNumber))\`
3. Third Normal Form (3NF / BCNF):
   - Problem: Transitive dependency inside Loans: \`LoanID -> BranchCode -> (BranchName, BranchCity)\`.
   - Final 3NF/BCNF Schema:
     * \`Branches(BranchCode [PK], BranchName, BranchCity)\`
     * \`Customers(CustomerID [PK], CustomerName)\`
     * \`CustomerPhones(CustomerID [FK], PhoneNumber [PK])\`
     * \`Loans(LoanID [PK], CustomerID [FK], BranchCode [FK], SanctionAmount, OverdueMonths)\`

(b) SQL Query for Classified Non-Performing Loans (NPL >= 6 Months Overdue):`,
            codeSolution: `-- 2026 Combined Bank Officer (IT) - Normalized Schema & NPL Reporting Query
SELECT 
    b.BranchCode,
    b.BranchName,
    b.BranchCity,
    COUNT(l.LoanID) AS Classified_NPL_Count,
    SUM(l.SanctionAmount) AS Total_Classified_Amount_BDT
FROM Branches b
JOIN Loans l ON b.BranchCode = l.BranchCode
WHERE l.OverdueMonths >= 6
GROUP BY b.BranchCode, b.BranchName, b.BranchCity
HAVING SUM(l.SanctionAmount) > 5000000
ORDER BY Total_Classified_Amount_BDT DESC;`,
            solutionLanguage: 'sql',
            tags: ['DBMS', 'Normalization', 'BCNF', 'SQL', 'GROUP BY', 'HAVING', '2026 Exam'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-oit2026-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'In a Core Banking Payment Switch, interbank transactions are prioritized as follows: Priority 1 = RTGS High-Value Settlement, Priority 2 = NPSB Instant Retail Transfer, Priority 3 = BEFTN Regular Batch. Write a C++ or Python program using a Priority Queue (Min-Heap) to enqueue incoming transactions and process them in strict priority order (breaking ties by earliest arrival timestamp).',
            solution: 'A Min-Heap stores tuples of (priority_level, arrival_sequence, transaction_id, amount_bdt). Enqueue (heappush) and Dequeue (heappop) each run in O(log N) time.',
            codeSolution: `import heapq
from dataclasses import dataclass, field

@dataclass(order=True)
class BankTransaction:
    priority: int              # 1 = RTGS, 2 = NPSB, 3 = BEFTN
    arrival_seq: int           # Tie-breaker: FIFO order within same priority
    txn_id: str = field(compare=False)
    channel: str = field(compare=False)
    amount_bdt: float = field(compare=False)

class PaymentSwitchDispatcher:
    def __init__(self):
        self.min_heap: list[BankTransaction] = []
        self.seq_counter = 0

    def enqueue_transaction(self, txn_id: str, channel: str, priority: int, amount_bdt: float):
        self.seq_counter += 1
        txn = BankTransaction(priority, self.seq_counter, txn_id, channel, amount_bdt)
        heapq.heappush(self.min_heap, txn)

    def process_next(self) -> BankTransaction | None:
        if not self.min_heap:
            return None
        return heapq.heappop(self.min_heap)

# Demonstration
switch = PaymentSwitchDispatcher()
switch.enqueue_transaction("TXN-101", "BEFTN", priority=3, amount_bdt=45000)
switch.enqueue_transaction("TXN-102", "RTGS",  priority=1, amount_bdt=2500000)
switch.enqueue_transaction("TXN-103", "NPSB",  priority=2, amount_bdt=80000)
switch.enqueue_transaction("TXN-104", "RTGS",  priority=1, amount_bdt=5000000)

while (txn := switch.process_next()) is not None:
    print(f"Dispatched [{txn.channel} | Priority {txn.priority}] {txn.txn_id}: BDT {txn.amount_bdt:,.2f}")`,
            solutionLanguage: 'python',
            tags: ['Data Structures', 'Priority Queue', 'Min-Heap', 'RTGS', 'Python', '2026 Exam'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-oit2026-3',
            questionNo: '3',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'A newly opened regional bank branch is assigned the network address 192.168.50.0/24. The IT Officer needs to create 4 equal-sized subnets for: (1) Teller & Cash Counters, (2) Back-Office & Loan Desk, (3) ATM & POS Switch VLAN, and (4) Branch CCTV & IP Phones.\n(a) Calculate the new Subnet Mask in CIDR and dotted decimal format, total hosts per subnet, and usable hosts per subnet.\n(b) Write the complete Subnet Table (Network ID, First Usable IP, Last Usable IP, and Broadcast IP) for all 4 subnets.',
            solution: `(a) Subnet Calculation:
- Given network: 192.168.50.0/24
- Required equal subnets: 4 -> Borrow s = 2 bits since 2^2 = 4 subnets.
- New Prefix Length: /24 + 2 = /26
- Dotted Decimal Subnet Mask: 255.255.255.192 (since 128 + 64 = 192).
- Remaining host bits (h): 32 - 26 = 6 bits.
- Total IP addresses per subnet (Block Size): 2^6 = 64 addresses.
- Usable Host IPs per subnet: 2^6 - 2 = 62 usable hosts.

(b) Complete 4-Subnet Allocation Table:
1. Subnet 1 (Teller & Cash Counters):
   - Network ID: 192.168.50.0/26
   - Usable Host Range: 192.168.50.1 — 192.168.50.62
   - Broadcast Address: 192.168.50.63
2. Subnet 2 (Back-Office & Loan Desk):
   - Network ID: 192.168.50.64/26
   - Usable Host Range: 192.168.50.65 — 192.168.50.126
   - Broadcast Address: 192.168.50.127
3. Subnet 3 (ATM & POS Switch VLAN):
   - Network ID: 192.168.50.128/26
   - Usable Host Range: 192.168.50.129 — 192.168.50.190
   - Broadcast Address: 192.168.50.191
4. Subnet 4 (Branch CCTV & IP Phones):
   - Network ID: 192.168.50.192/26
   - Usable Host Range: 192.168.50.193 — 192.168.50.254
   - Broadcast Address: 192.168.50.255`,
            tags: ['Networking', 'Subnetting', 'CIDR', 'IPv4', 'VLAN', '2026 Exam'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-oit2026-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Differentiate between Black-Box Testing and White-Box Testing in banking software QA. Given an ATM Cash Dispensing control flow graph with 11 edges (E = 11), 9 nodes (N = 9), and 1 connected component (P = 1), calculate McCabe’s Cyclomatic Complexity V(G) and state the minimum number of independent basis path test cases required.',
            solution: `1. Black-Box Testing vs. White-Box Testing:
- Black-Box Testing (Specification-Based):
  * Tests software functionality without inspecting internal source code structure.
  * Techniques: Equivalence Partitioning, Boundary Value Analysis (e.g. testing 4-digit PIN or minimum BDT 500 ATM withdrawal), Decision Table Testing.
- White-Box Testing (Code/Structural-Based):
  * Examines internal control flow, branches, loops, and SQL query construction.
  * Techniques: Statement Coverage, Branch Coverage, Path Coverage, Cyclomatic Complexity Analysis.

2. McCabe’s Cyclomatic Complexity Calculation:
- Formula: V(G) = E - N + 2P
- Given:
  * Number of Edges (E) = 11
  * Number of Nodes (N) = 9
  * Connected Components (P) = 1
- Calculation:
  V(G) = 11 - 9 + (2 * 1) = 2 + 2 = 4.
- Interpretation:
  There are exactly 4 linearly independent basis paths through the ATM Cash Dispensing module. Therefore, at least 4 independent unit test cases are required to achieve 100% basis path coverage.`,
            tags: ['Software Engineering', 'Software Testing', 'Cyclomatic Complexity', 'QA', '2026 Exam'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-oit2026-5',
            questionNo: '5',
            type: 'math',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'A database server uses Demand Paging with 3 physical page frames in RAM. Given the page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, calculate the total number of Page Faults and Page Hit Ratio using the Least Recently Used (LRU) page replacement algorithm.',
            solution: `Step-by-Step LRU Frame Trace (3 Frames, Initially Empty):
Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2 (Total references = 13)

1. Ref 7 -> [7, -, -] (Fault #1)
2. Ref 0 -> [7, 0, -] (Fault #2)
3. Ref 1 -> [7, 0, 1] (Fault #3)
4. Ref 2 -> Replace LRU (7) -> [2, 0, 1] (Fault #4)
5. Ref 0 -> Already in frame [2, 0, 1] (HIT #1 - 0 becomes most recent)
6. Ref 3 -> Replace LRU (1) -> [2, 0, 3] (Fault #5)
7. Ref 0 -> Already in frame [2, 0, 3] (HIT #2 - 0 becomes most recent)
8. Ref 4 -> Replace LRU (2) -> [4, 0, 3] (Fault #6)
9. Ref 2 -> Replace LRU (3) -> [4, 0, 2] (Fault #7)
10. Ref 3 -> Replace LRU (0) -> [4, 3, 2] (Fault #8)
11. Ref 0 -> Replace LRU (4) -> [0, 3, 2] (Fault #9)
12. Ref 3 -> Already in frame [0, 3, 2] (HIT #3)
13. Ref 2 -> Already in frame [0, 3, 2] (HIT #4)

Summary Results:
- Total Page References = 13
- Total Page Faults (LRU) = 9
- Total Page Hits = 4
- Page Hit Ratio = 4 / 13 = 30.77%
- Page Fault Ratio = 9 / 13 = 69.23%`,
            tags: ['Operating Systems', 'Virtual Memory', 'LRU', 'Page Replacement', '2026 Exam'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-oit2026-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'E-Governance & ICT Laws',
            questionText: 'Explain the end-to-end architecture of Electronic Know Your Customer (e-KYC) in Bangladesh banks. How does a bank verify a customer’s NID and biometric fingerprint/facial data against the Election Commission (BEC) NID Server while complying with data privacy guidelines?',
            solution: `1. e-KYC Architecture under BFIU / Bangladesh Bank Guidelines:
- Step 1 (Data Capture): Customer provides 10-digit Smart NID / 17-digit NID number and Date of Birth via bank branch tablet or mobile app, along with live facial photograph (liveness detection) or fingerprint scan via ISO-certified biometric scanner.
- Step 2 (Encrypted Gateway Transmission): The bank’s e-KYC middleware encrypts the payload using TLS 1.3 and digital signature certificates and transmits a verification request via a dedicated VPN/leased line to the Bangladesh Election Commission (BEC) Porichoy / NID Verification Gateway.
- Step 3 (Identity Matching): The NID server matches demographic fields and biometric templates and returns a signed verification response (Verified / Not Matched) without exposing the raw national database.
- Step 4 (AML & Sanctions Screening): The customer profile is automatically screened against UN/BFIU Domestic & International Sanctions Lists and PEP (Politically Exposed Persons) databases before instant account activation.

2. Data Privacy Safeguards:
- Biometric templates are never stored in raw image format on client devices.
- Role-Based Access Control (RBAC) and immutable audit trails log every NID query to prevent unauthorized employee snooping.`,
            tags: ['e-KYC', 'E-Governance', 'Data Privacy', 'Biometrics', 'Banking IT', '2026 Exam'],
            marks: 20,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-oit2026-nontech',
        name: 'Part B: Focus Writing, Banking Math & Translation (60 Marks)',
        marks: 60,
        description: 'English Focus Writing on Data Privacy & AML/KYC, Analytical Banking Math, and Bilingual Translation',
        questions: [
          {
            id: 'q-oit2026-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English (250 Words): "Why Data Privacy and Regulatory Compliance (AML & KYC) Are Vital for Banking Stability in the Digital Era."',
            solution: `Model Essay Outline:

1. Introduction:
In an era dominated by instant digital payments, cloud-hosted banking channels, and open-banking APIs, customer data has become the most valuable asset in financial services. Consequently, robust Data Privacy protection and strict adherence to Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations are foundational pillars of national banking stability.

2. Protecting Public Trust through Data Privacy:
- Banking thrives entirely on depositor confidence. Data breaches exposing National ID details, account balances, or card credentials lead to identity theft, financial fraud, and systemic reputational damage.
- Implementing end-to-end encryption (AES-256, TLS 1.3), data masking in non-production environments, and strict principle-of-least-privilege access protects customers from both external hackers and insider threats.

3. Safeguarding Macroeconomic Integrity via AML & KYC:
- Rigorous e-KYC onboarding prevents shell accounts, synthetic identity fraud, and illicit terror financing.
- Real-time AML transaction monitoring protects Bangladeshi banks from correspondent banking de-risking, international SWIFT sanctions, and illicit capital flight.

4. Conclusion:
Data privacy and regulatory compliance are not merely legal checkboxes; they are strategic imperatives that safeguard depositor wealth and ensure the resilience of Bangladesh's financial sector.`,
            tags: ['Focus Writing', 'Data Privacy', 'AML', 'KYC', 'Banking Stability', '2026 Exam'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-oit2026-8',
            questionNo: '8',
            type: 'math',
            topicCategory: 'Non-Technical & Language',
            questionText: 'A bank grants an SME IT hardware loan of BDT 5,00,000 at an annual interest rate of 10% compounded annually for 3 years. (a) What is the total compound amount after 3 years if paid as a lump sum? (b) If the bank deducts a 1% processing fee upfront on the principal, what is the net disbursed amount?',
            solution: `(a) Compound Amount after 3 Years:
- Principal (P) = BDT 5,00,000
- Rate (r) = 10% = 0.10 per annum
- Time (n) = 3 years
- Formula: A = P * (1 + r)^n
  A = 5,00,000 * (1 + 0.10)^3
  A = 5,00,000 * 1.331
  A = BDT 6,65,500
- Total Compound Interest = 6,65,500 - 5,00,000 = BDT 1,65,500.

(b) Net Disbursed Amount after 1% Upfront Processing Fee:
- Processing Fee = 1% of 5,00,000 = BDT 5,000
- Net Disbursed Amount = 5,00,000 - 5,000 = BDT 4,95,000.`,
            tags: ['Mathematics', 'Compound Interest', 'Banking Math', '2026 Exam'],
            marks: 20,
            difficulty: 'Easy'
          },
          {
            id: 'q-oit2026-9',
            questionNo: '9',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "কৃত্রিম বুদ্ধিমত্তা বা এআই ব্যাংকিং খাতে গ্রাহক সেবার মান উন্নয়ন এবং জালিয়াতি শনাক্তকরণে নতুন দিগন্ত উন্মোচন করেছে। তবে প্রযুক্তির এই সুফল ধরে রাখতে হলে সাইবার নিরাপত্তা জোরদার করা এবং গ্রাহকের তথ্যের গোপনীয়তা নিশ্চিত করা অপরিহার্য।"',
            solution: `Standard Model English Translation:
"Artificial Intelligence (AI) has opened a new horizon in the banking sector for improving customer service quality and detecting fraud. However, to sustain the benefits of this technology, strengthening cybersecurity and ensuring the privacy of customer data are indispensable."`,
            tags: ['Translation', 'Bangla to English', 'AI in Banking', '2026 Exam'],
            marks: 20,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 1. Job ID: 10229
  {
    id: 'officer-it-10229',
    title: 'Officer (IT), Combined Bank (Job ID: 10229)',
    searchQuery: 'Officer (IT), Combined Bank (Job ID: 10229) question paper pdf',
    category: 'Officer (IT)',
    jobId: '10229',
    circularYear: '2023 (Recruitment 2024-2025)',
    examDate: 'August 18, 2024',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Probashi Kallyan Bank'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Recruitment examination conducted by BIBM under Bankers Selection Committee for Officer (IT). Heavily focused on Core Banking Systems (CBS), database aggregation, OOP concepts, networking subnetting, and cyber resilience.',
    keyTopics: ['Core Banking Systems', 'SQL Grouping & Having', 'Subnetting VLSM', 'Object Oriented Programming', 'B-Tree Indexing', 'Digital Banking Security'],
    sections: [
      {
        id: 'sec-10229-tech',
        name: 'Technical & Departmental IT (150 Marks)',
        marks: 150,
        description: 'Computer Science, Database Management, Networking, Software Engineering and FinTech',
        questions: [
          {
            id: 'q-10229-1',
            questionNo: '1 (a)',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider the banking database tables: Account(AccNo, CustID, AccType, Balance, BranchCode) and Transaction(TxnID, AccNo, TxnDate, TxnType, Amount). Write an SQL query to find the account numbers, customer IDs, and total withdrawal amounts for all Savings accounts ("SB") that have carried out more than 3 withdrawals in the month of July 2024 with a cumulative withdrawal amount exceeding BDT 1,00,000.',
            solution: 'To calculate the cumulative withdrawal amount for Savings accounts with specific constraints, we join Account and Transaction, filter on account type ("SB"), withdrawal transactions ("DR" / "Debit"), and the transaction date range. Then we group by AccNo and CustID, filtering the groups with the HAVING clause.',
            codeSolution: `-- SQL Solution for Combined Bank Officer (IT) Job ID: 10229
SELECT 
    a.AccNo,
    a.CustID,
    SUM(t.Amount) AS Total_Withdrawal_Amount,
    COUNT(t.TxnID) AS Withdrawal_Count
FROM Account a
JOIN Transaction t ON a.AccNo = t.AccNo
WHERE a.AccType = 'SB'
  AND t.TxnType IN ('DR', 'Debit', 'Withdrawal')
  AND t.TxnDate >= '2024-07-01' 
  AND t.TxnDate <= '2024-07-31'
GROUP BY a.AccNo, a.CustID
HAVING COUNT(t.TxnID) > 3 
   AND SUM(t.Amount) > 100000
ORDER BY Total_Withdrawal_Amount DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'DBMS', 'Banking Transaction', 'GROUP BY', 'HAVING'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-2',
            questionNo: '1 (b)',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'What is a B-Tree and B+ Tree? Why are B+ Trees preferred over Binary Search Trees (BST) or AVL Trees for implementing database indexes in Core Banking Systems (CBS)?',
            solution: `1. Definition:
- A B-Tree is a self-balancing search tree where internal nodes can have more than two children and store multiple keys.
- A B+ Tree is an extension where:
  * All data records/pointers reside only in leaf nodes.
  * Leaf nodes are linked sequentially as a doubly linked list, enabling rapid range scans.
  * Internal nodes only store routing keys for indexing.

2. Why B+ Trees are preferred over BST/AVL in Database Indexing:
- Disk Block / I/O Efficiency: Databases reside on secondary storage (SSD/HDD) where disk access is orders of magnitude slower than RAM. A BST has high height (O(log2 N)), needing many disk I/O operations. A B+ Tree has a very high branching factor (fan-out of 100 to 1000+), resulting in a tree height of only 3 to 4 levels for millions of records, requiring at most 3-4 disk reads.
- Range Query Performance: In banking operations (e.g., retrieving transactions between two dates, balance statements), B+ Tree leaf nodes are connected via pointers. Once the first matching record is found, the system performs a sequential leaf traversal without traversing up and down the tree.
- Predictable Search Latency: Every search path from root to leaf has the exact same depth, ensuring uniform response times for high-volume banking transactions.`,
            tags: ['Data Structures', 'DBMS', 'B+ Tree', 'Indexing', 'Core Banking'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-3',
            questionNo: '2 (a)',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'A commercial bank branch is assigned the network IP block 172.16.20.0/24. The branch manager needs to divide this network into 6 separate departments (ATM, Teller counters, Loan Department, IT Server room, Guest Wi-Fi, and Management). Each department requires up to 25 host machines. (i) Determine the required subnet mask in slash notation and dotted decimal. (ii) List the Network Address, Usable Host Range, and Broadcast Address for the first 3 subnets.',
            solution: `Calculation Steps:
1. Subnet requirements:
- Number of subnets required: 6.
- Host machines needed per subnet: 25.
- Formula for host capacity: 2^h - 2 >= 25 => h = 5 bits (2^5 - 2 = 30 usable hosts, which satisfies >= 25).
- With 32 total bits in IPv4: 32 - 5 = 27 network bits (/27).
- Number of created subnets with /27: 2^(27 - 24) = 2^3 = 8 subnets (which accommodates the 6 required departments).

2. Subnet Mask:
- Slash notation: /27
- Dotted decimal: 255.255.255.224 (since 128 + 64 + 32 = 224).
- Block size (Magic Number): 256 - 224 = 32.

3. Subnet Allocation Table (First 3 Subnets):
- Subnet 1 (ATM):
  * Network Address: 172.16.20.0
  * Usable Host Range: 172.16.20.1 to 172.16.20.30
  * Broadcast Address: 172.16.20.31
- Subnet 2 (Teller Counters):
  * Network Address: 172.16.20.32
  * Usable Host Range: 172.16.20.33 to 172.16.20.62
  * Broadcast Address: 172.16.20.63
- Subnet 3 (Loan Department):
  * Network Address: 172.16.20.64
  * Usable Host Range: 172.16.20.65 to 172.16.20.94
  * Broadcast Address: 172.16.20.95`,
            tags: ['Networking', 'Subnetting', 'IPv4', 'VLSM', 'CIDR'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-4',
            questionNo: '2 (b)',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a program in Python or C++ to validate whether a given 16-digit credit/debit card number is valid using the Luhn Algorithm (Mod 10 formula) frequently used in bank payment gateways.',
            solution: 'The Luhn Algorithm validates card numbers: (1) Reverse the digits. (2) Double every second digit starting from the rightmost second position. (3) If doubling results in a number > 9, subtract 9. (4) Sum all digits. (5) If the total modulo 10 equals 0, the card number is valid.',
            codeSolution: `def is_valid_luhn(card_number_str: str) -> bool:
    """
    Validates a banking card number using the Luhn (Mod 10) algorithm.
    Time Complexity: O(N), Space Complexity: O(1)
    """
    cleaned = card_number_str.replace(" ", "").replace("-", "")
    if not cleaned.isdigit() or len(cleaned) < 13:
        return False
        
    total_sum = 0
    reverse_digits = cleaned[::-1]
    
    for i, char in enumerate(reverse_digits):
        digit = int(char)
        # Double every second digit (index 1, 3, 5...)
        if i % 2 == 1:
            doubled = digit * 2
            total_sum += (doubled - 9) if doubled > 9 else doubled
        else:
            total_sum += digit
            
    return (total_sum % 10) == 0

# Test Case Demonstration
sample_card = "4532015112830366"
print(f"Card {sample_card} validity: {is_valid_luhn(sample_card)}")`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Python', 'FinTech', 'Luhn Algorithm', 'Payment Security'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-5',
            questionNo: '3 (a)',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the 2-Factor Authentication (2FA) mechanism and the cryptographic difference between SMS OTP and Time-based One-Time Password (TOTP, RFC 6238) in banking internet applications. Which one is more secure against SIM swapping attacks?',
            solution: `1. 2FA Mechanism:
Two-Factor Authentication verifies user identity by requiring two distinct factors from:
- Something you know (PIN, password)
- Something you have (hardware token, mobile authenticator app, smart card)
- Something you are (biometrics: fingerprint, facial scan).

2. SMS OTP vs. TOTP (RFC 6238):
- SMS OTP:
  * Server generates a random 6-digit number, stores it in cache with TTL (e.g., 3 mins), and transmits it in cleartext over the telecom SMS cellular network (SS7 protocol).
  * Vulnerabilities: SS7 interception, SIM swap fraud, mobile malware with SMS read permissions.
- TOTP (RFC 6238):
  * Based on HMAC-based One-Time Password (HOTP).
  * Both server and client authenticator app share a pre-shared secret key (K) established during QR registration.
  * Counter is computed as T = floor(Current Unix Timestamp / Time Step X), where X is typically 30 seconds.
  * OTP = Truncate(HMAC-SHA1(K, T)) mod 10^6.
  * Generated locally on the user device without network transmission.

3. Defense against SIM Swapping:
TOTP is completely immune to SIM swapping attacks because the shared secret resides in the local application enclave, independent of the telecom carrier or phone number. SMS OTP is completely compromised once an attacker successfully executes a SIM swap at a mobile operator store.`,
            tags: ['Cybersecurity', 'TOTP', '2FA', 'FinTech', 'Information Security'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-6',
            questionNo: '3 (b)',
            type: 'short_note',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Write short notes on any three: (i) ACID properties vs. BASE in distributed banking databases. (ii) Real-Time Gross Settlement (RTGS) vs BEFTN in Bangladesh Bank. (iii) Deadlock conditions in Operating Systems. (iv) Zero Trust Architecture (ZTA).',
            solution: `(i) ACID vs. BASE:
- ACID (Atomicity, Consistency, Isolation, Durability) guarantees strict transactional accuracy for core financial ledger entries (e.g. transfer between two accounts).
- BASE (Basically Available, Soft-state, Eventual consistency) prioritizes 100% uptime and horizontal scalability for read-heavy non-financial systems (e.g., transaction history browsing).

(ii) RTGS vs. BEFTN in Bangladesh:
- RTGS (Real-Time Gross Settlement): Settles individual high-value transactions (minimum BDT 1,00,000) instantly and gross on a one-to-one real-time basis via Bangladesh Bank gateway.
- BEFTN (Bangladesh Electronic Funds Transfer Network): Operates in batch clearing cycles (typically 2-3 sessions per day) for low-to-medium retail credit and debit transfers.

(iii) Four Coffman Deadlock Conditions:
1. Mutual Exclusion: At least one resource must be non-shareable.
2. Hold and Wait: A process holds resources while requesting additional ones.
3. No Preemption: Resources cannot be forcibly seized from a process.
4. Circular Wait: A closed loop of processes where each waits for a resource held by the next.

(iv) Zero Trust Architecture (ZTA):
A security model based on the principle "Never Trust, Always Verify." Every request, whether originating inside or outside the bank perimeter, must be authenticated, authorized, and encrypted before access is granted.`,
            tags: ['Operating Systems', 'FinTech', 'RTGS', 'BEFTN', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-10229-6b',
            questionNo: '3 (c)',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the SOLID design principles in Object-Oriented Software Engineering. Provide a concrete banking code scenario demonstrating the Single Responsibility Principle (SRP) and Open/Closed Principle (OCP).',
            solution: `1. SOLID Principles Overview:
- S (Single Responsibility Principle): A class should have one, and only one, reason to change.
- O (Open/Closed Principle): Software entities should be open for extension, but closed for modification.
- L (Liskov Substitution Principle): Subtypes must be substitutable for their base types without altering program correctness.
- I (Interface Segregation Principle): Clients should not be forced to depend upon interfaces they do not use.
- D (Dependency Inversion Principle): High-level modules should not depend on low-level modules; both should depend on abstractions.

2. Banking Code Application (SRP & OCP):
- Violation: A single class \`AccountManager\` that handles balance calculations, database saving, and SMS alert sending violates SRP.
- Refactoring for SRP: Split into \`Account\` (domain entity), \`AccountRepository\` (persistence), and \`NotificationService\` (messaging).
- Applying OCP: Define an interface \`InterestCalculator\` with method \`calculateInterest(Account a)\`. If the bank introduces a new account type (e.g. Senior Citizen Fixed Deposit), create a new class implementing the interface without modifying existing working calculation engines.`,
            tags: ['Software Engineering', 'SOLID', 'OOP', 'System Design'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-10229-nontech',
        name: 'Language, Translation & Focus Writing (50 Marks)',
        marks: 50,
        description: 'Focus writing on contemporary technological challenges in Bangladesh banking, plus bilingual translation.',
        questions: [
          {
            id: 'q-10229-7',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Building Cyber Resilience and Zero Trust Architecture in the Banking Sector of Bangladesh" (Word limit: 300 words).',
            solution: `Outline & Key Model Points:
1. Introduction:
The banking sector in Bangladesh has experienced exponential digital transformation with the widespread adoption of Core Banking Solutions (CBS), National Payment Switch Bangladesh (NPSB), and mobile financial services. However, this interconnectedness expands the digital attack surface, making legacy perimeter-based security obsolete.

2. Principles of Zero Trust in Banking:
Zero Trust operates on the dictum "Never Trust, Always Verify." Instead of trusting users inside the intranet, every access request must be strictly validated using multi-factor authentication (MFA), least-privilege role-based access control (RBAC), and micro-segmentation of critical database servers.

3. Key Components for Cyber Resilience:
- Core System Hardening: Enforcing continuous patch management, database encryption at rest (AES-256) and in transit (TLS 1.3).
- 24/7 Security Operations Center (SOC): Implementing AI-driven SIEM (Security Information and Event Management) and SOAR tools to detect anomalous transaction patterns in real time.
- Business Continuity & Disaster Recovery (DR): Maintaining synchronized near-DR and far-DR centers with automated failover testing.
- Employee Training: Cultivating human firewall capabilities to prevent phishing and social engineering exploits.

4. Conclusion:
Cyber resilience is no longer merely an IT concern; it is a fundamental pillar of financial stability. By adopting Zero Trust frameworks and proactive threat intelligence, Bangladesh's financial institutions can ensure sustainable digital growth while preserving public trust.`,
            tags: ['Focus Writing', 'English', 'Cybersecurity', 'Banking'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-8',
            questionNo: '5 (a)',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate the following passage into English: "সাইবার নিরাপত্তা বর্তমানে যেকোনো আর্থিক প্রতিষ্ঠানের জন্য সর্বাধিক গুরুত্বপূর্ণ চ্যালেঞ্জ। কেন্দ্রীয় ব্যাংকের গাইডলাইন অনুসারে প্রতিটি বাণিজ্যিক ব্যাংককে তাদের ডাটা সেন্টারের নিরাপত্তা বৃদ্ধি এবং সন্দেহজনক লেনদেন শনাক্তকরণে আধুনিক সফটওয়্যার ব্যবহার করতে হবে। গ্রাহকদের গোপনীয় তথ্য সুরক্ষিত রাখা এবং সাইবার আক্রমণের ঝুঁকি কমানোই ডিজিটাল ব্যাংকিং ব্যবস্থার প্রধান লক্ষ্য।"',
            solution: `Standard High-Quality Model Translation:
"Cybersecurity is currently the foremost critical challenge for any financial institution. In accordance with the guidelines of the central bank, every commercial bank must enhance the security of its data centers and utilize modern software for identifying suspicious transactions. Safeguarding customers' confidential data and mitigating the risks of cyber attacks represent the primary objectives of the digital banking system."`,
            tags: ['Translation', 'Bangla to English', 'Banking IT'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-9',
            questionNo: '5 (b)',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate the following passage into Bengali: "Modern Core Banking Solutions (CBS) enable real-time transaction processing across distributed branches. However, network latency and database deadlocks must be managed efficiently through optimized indexing, connection pooling, and fault-tolerant architecture."',
            solution: `প্রমিত প্রাতিষ্ঠানিক বাংলা অনুবাদ:
"আধুনিক কোর ব্যাংকিং সলিউশন (সিবিএস) বিভিন্ন শাখায় তাৎক্ষণিক বা রিয়েল-টাইম লেনদেন নিষ্পত্তির সুবিধা প্রদান করে। তবে নেটওয়ার্কের বিলম্ব (ল্যাটেন্সি) এবং ডাটাবেজের অচলাবস্থা (ডেডলক) দক্ষভাবে মোকাবিলার জন্য অপ্টিমাইজড ইনডেক্সিং, কানেকশন পুলিং এবং ত্রুটিসহনশীল (ফল্ট-টলারেন্ট) আর্কিটেকচার নিশ্চিত করা অপরিহার্য।"`,
            tags: ['Translation', 'English to Bangla', 'Core Banking'],
            marks: 15,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 2. Job ID: 10209
  {
    id: 'officer-it-10209',
    title: 'Officer (IT), Combined Bank (Job ID: 10209)',
    searchQuery: 'Officer (IT), Combined Bank (Job ID: 10209) question paper pdf',
    category: 'Officer (IT)',
    jobId: '10209',
    circularYear: '2022 (Exam 2024)',
    examDate: 'June 07, 2024',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Written test for Officer (IT) under Combined Banks for Sonali Bank PLC & Janata Bank PLC. Features relational schema normalization, OSI layer troubleshooting, BFS/DFS traversal, stack parentheses parsing, CPU scheduling, and banking math.',
    keyTopics: ['DBMS Normalization', 'Breadth First Search', 'OSI vs TCP/IP', 'C/C++ Strings', 'Financial Word Problems', 'Round Robin Scheduling'],
    sections: [
      {
        id: 'sec-10209-tech',
        name: 'Technical IT Departmental (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-10209-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Given the relation schema: LoanApplication(AppID, ClientNID, ClientName, BranchCode, BranchName, LoanAmount, InterestRate, ApprovalStatus) with functional dependencies: AppID -> {ClientNID, BranchCode, LoanAmount, ApprovalStatus}, ClientNID -> ClientName, BranchCode -> {BranchName, InterestRate}. (a) Identify the Candidate Key. (b) Explain why the relation is not in 2NF and 3NF. (c) Decompose the relation into 3NF relations.',
            solution: `Step-by-step Solution:
(a) Candidate Key:
- Computing the attribute closure of {AppID}:
  AppID+ = {AppID, ClientNID, BranchCode, LoanAmount, ApprovalStatus}
  Since ClientNID -> ClientName, we get ClientName.
  Since BranchCode -> {BranchName, InterestRate}, we get BranchName, InterestRate.
  Therefore, AppID+ = all attributes of the relation.
  Candidate Key = {AppID}.

(b) Normal Form Violations:
- 2NF Check: In 2NF, no non-prime attribute should be partially dependent on a proper subset of any candidate key. Since the candidate key is single-attribute {AppID}, there is NO partial dependency. Hence, the relation is already in 2NF.
- 3NF Check: A relation in 2NF is in 3NF if for every functional dependency X -> Y, either X is a superkey or Y is a prime attribute.
  * In ClientNID -> ClientName, ClientNID is NOT a superkey and ClientName is NOT prime. (Transitive Dependency)
  * In BranchCode -> {BranchName, InterestRate}, BranchCode is NOT a superkey and the right-hand attributes are NOT prime. (Transitive Dependency)
  Therefore, the relation violates 3NF.

(c) Decompose into 3NF:
We decompose to eliminate transitive dependencies:
1. Client(ClientNID, ClientName) -- Primary Key: ClientNID
2. Branch(BranchCode, BranchName, InterestRate) -- Primary Key: BranchCode
3. LoanApplication(AppID, ClientNID, BranchCode, LoanAmount, ApprovalStatus) -- Primary Key: AppID, Foreign Keys: ClientNID, BranchCode.
All decomposed relations are lossless-join and dependency-preserving.`,
            tags: ['DBMS', 'Normalization', 'Functional Dependencies', '3NF'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-10209-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C or C++ function to check if a given string containing brackets "()", "{}", and "[]" is balanced or not using a Stack data structure.',
            solution: 'Balanced parentheses check using standard Stack: push opening brackets onto the stack; when a closing bracket is encountered, verify if the top matches the corresponding pair.',
            codeSolution: `#include <iostream>
#include <stack>
#include <string>

bool isBalanced(const std::string& expr) {
    std::stack<char> s;
    for (char ch : expr) {
        if (ch == '(' || ch == '{' || ch == '[') {
            s.push(ch);
        } else if (ch == ')' || ch == '}' || ch == ']') {
            if (s.empty()) return false;
            char top = s.top();
            s.pop();
            if ((ch == ')' && top != '(') ||
                (ch == '}' && top != '{') ||
                (ch == ']' && top != '[')) {
                return false;
            }
        }
    }
    return s.empty();
}

int main() {
    std::string test1 = "{[()]}";
    std::string test2 = "{[(])}";
    std::cout << test1 << ": " << (isBalanced(test1) ? "Balanced" : "Not Balanced") << "\\n";
    std::cout << test2 << ": " << (isBalanced(test2) ? "Balanced" : "Not Balanced") << "\\n";
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['Data Structures', 'Stack', 'C++', 'Balanced Parentheses'],
            marks: 20,
            difficulty: 'Easy'
          },
          {
            id: 'q-10209-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Differentiate between TCP and UDP in terms of header size, reliability, flow control, and speed. Name two banking application protocols that use TCP and explain why.',
            solution: `1. Comparison:
- Header Size: TCP header is 20-60 bytes (variable options); UDP header is fixed at 8 bytes.
- Reliability: TCP provides guaranteed delivery via sequence numbers, ACKs, and retransmissions. UDP is connectionless and best-effort with no delivery guarantee.
- Flow & Congestion Control: TCP incorporates sliding window flow control and slow-start congestion avoidance. UDP has neither.
- Speed/Overhead: TCP has higher latency due to 3-way handshake and ACK processing; UDP has minimal latency and minimal overhead.

2. Banking Applications using TCP:
- HTTPS / TLS (Port 443): Internet banking, API gateway calls, and web portals rely on HTTPS over TCP because financial transactions cannot tolerate dropped, duplicated, or out-of-order packets.
- Financial Switch / ISO 8583 Messaging (e.g. ATM/POS switches): Financial switch messages between banks and Visa/Mastercard/NPSB use TCP sockets to guarantee that every authorization request and settlement message arrives accurately and predictably.`,
            tags: ['Networking', 'TCP/IP', 'UDP', 'Protocols', 'Banking Systems'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-10209-3b',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Given the banking database tables: Branch(BranchID, BranchName, City), Customer(CustID, CustName, City), Account(AccNo, CustID, BranchID, Balance, OpenDate). Write SQL queries to:\n(a) Find the names of customers who have accounts in all branches located in "Dhaka".\n(b) Find the branch that holds the highest total balance among all branches.',
            solution: `(a) Relational Division in SQL:
To find customers who hold an account in ALL branches in Dhaka, we use GROUP BY with a COUNT of distinct branches matching the total count of Dhaka branches.

(b) Subquery / Aggregation with LIMIT or FETCH FIRST:
Group by BranchID, compute SUM(Balance), and order descending.`,
            codeSolution: `-- Query (a): Customers with accounts in ALL Dhaka branches
SELECT c.CustID, c.CustName
FROM Customer c
JOIN Account a ON c.CustID = a.CustID
JOIN Branch b ON a.BranchID = b.BranchID
WHERE b.City = 'Dhaka'
GROUP BY c.CustID, c.CustName
HAVING COUNT(DISTINCT b.BranchID) = (
    SELECT COUNT(*) 
    FROM Branch 
    WHERE City = 'Dhaka'
);

-- Query (b): Branch with the highest cumulative balance
SELECT 
    b.BranchID, 
    b.BranchName, 
    b.City, 
    SUM(a.Balance) AS Total_Branch_Balance
FROM Branch b
JOIN Account a ON b.BranchID = a.BranchID
GROUP BY b.BranchID, b.BranchName, b.City
ORDER BY Total_Branch_Balance DESC
LIMIT 1;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Relational Division', 'Aggregations', 'DBMS'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-10209-3c',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Consider 4 processes P1, P2, P3, P4 arriving at time 0 with CPU burst times 8ms, 4ms, 9ms, and 5ms respectively. Draw the Gantt chart and compute average waiting time and turnaround time for Round Robin (RR) scheduling with time quantum q = 3ms.',
            solution: `Execution Schedule (RR, Quantum = 3ms):
- At t=0: Queue: P1, P2, P3, P4
- P1 executes 0 to 3 (remaining: 5). Queue: P2, P3, P4, P1
- P2 executes 3 to 6 (remaining: 1). Queue: P3, P4, P1, P2
- P3 executes 6 to 9 (remaining: 6). Queue: P4, P1, P2, P3
- P4 executes 9 to 12 (remaining: 2). Queue: P1, P2, P3, P4
- P1 executes 12 to 15 (remaining: 2). Queue: P2, P3, P4, P1
- P2 executes 15 to 16 (remaining: 0 -> P2 Finishes at 16). Queue: P3, P4, P1
- P3 executes 16 to 19 (remaining: 3). Queue: P4, P1, P3
- P4 executes 19 to 21 (remaining: 0 -> P4 Finishes at 21). Queue: P1, P3
- P1 executes 21 to 23 (remaining: 0 -> P1 Finishes at 23). Queue: P3
- P3 executes 23 to 26 (remaining: 0 -> P3 Finishes at 26).

Turnaround Time (TAT = Completion - Arrival = Completion):
- P1: 23ms
- P2: 16ms
- P3: 26ms
- P4: 21ms
Average Turnaround Time = (23 + 16 + 26 + 21) / 4 = 86 / 4 = 21.5 ms.

Waiting Time (WT = TAT - Burst Time):
- P1: 23 - 8 = 15 ms
- P2: 16 - 4 = 12 ms
- P3: 26 - 9 = 17 ms
- P4: 21 - 5 = 16 ms
Average Waiting Time = (15 + 12 + 17 + 16) / 4 = 60 / 4 = 15.0 ms.`,
            tags: ['Operating Systems', 'CPU Scheduling', 'Round Robin', 'Gantt Chart'],
            marks: 30,
            difficulty: 'Medium'
          },
          {
            id: 'q-10209-3d',
            questionNo: '6',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C++ program implementing a Class Hierarchy for a Bank Account system demonstrating: (i) Abstract Base Class `Account`, (ii) Pure virtual method `calculateMonthlyInterest()`, (iii) Derived classes `SavingsAccount` and `CurrentAccount`.',
            solution: 'C++ Object-Oriented Polymorphic hierarchy with pure virtual function and destructor.',
            codeSolution: `#include <iostream>
#include <string>

class Account {
protected:
    std::string accountNumber;
    double balance;
public:
    Account(const std::string& accNo, double bal) : accountNumber(accNo), balance(bal) {}
    virtual ~Account() {}

    virtual double calculateMonthlyInterest() = 0; // Pure virtual function

    void displayBalance() const {
        std::cout << "Account " << accountNumber << " | Balance: BDT " << balance << "\\n";
    }
};

class SavingsAccount : public Account {
    double annualInterestRate; // e.g. 0.06 for 6%
public:
    SavingsAccount(const std::string& accNo, double bal, double rate)
        : Account(accNo, bal), annualInterestRate(rate) {}

    double calculateMonthlyInterest() override {
        double monthly = (balance * annualInterestRate) / 12.0;
        balance += monthly;
        return monthly;
    }
};

class CurrentAccount : public Account {
public:
    CurrentAccount(const std::string& accNo, double bal) : Account(accNo, bal) {}

    double calculateMonthlyInterest() override {
        return 0.0; // Current accounts typically earn zero interest
    }
};

int main() {
    Account* acc1 = new SavingsAccount("SB-1001", 50000.0, 0.06);
    Account* acc2 = new CurrentAccount("CA-2001", 120000.0);

    std::cout << "Monthly Interest for SB-1001: BDT " << acc1->calculateMonthlyInterest() << "\\n";
    acc1->displayBalance();

    std::cout << "Monthly Interest for CA-2001: BDT " << acc2->calculateMonthlyInterest() << "\\n";
    acc2->displayBalance();

    delete acc1;
    delete acc2;
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['OOP', 'C++', 'Polymorphism', 'Abstract Class', 'Inheritance'],
            marks: 30,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-10209-nontech',
        name: 'Math & Language (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-10209-4',
            questionNo: '7 (a)',
            type: 'math',
            topicCategory: 'Non-Technical & Language',
            questionText: 'A bank offers compound interest at 8% per annum compounded semi-annually. A customer deposits BDT 2,50,000 for 2 years. Calculate the total compound interest earned at maturity.',
            solution: `Formula:
A = P * (1 + r/n)^(n*t)
Where:
- Principal (P) = BDT 2,50,000
- Annual rate (r) = 8% = 0.08
- Compounding periods per year (n) = 2 (semi-annual)
- Time in years (t) = 2
- Total periods = n * t = 2 * 2 = 4
- Rate per period = r/n = 0.08 / 2 = 0.04 (4%)

Calculation:
A = 2,50,000 * (1 + 0.04)^4
  = 2,50,000 * (1.04)^4
  = 2,50,000 * 1.16985856
  = BDT 2,92,464.64

Total Compound Interest (CI) = A - P
  = 2,92,464.64 - 2,50,000
  = BDT 42,464.64.`,
            tags: ['Mathematics', 'Compound Interest', 'Banking Math'],
            marks: 20,
            difficulty: 'Easy'
          },
          {
            id: 'q-10209-5',
            questionNo: '7 (b)',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Prospects of Central Bank Digital Currency (CBDC / Digital Taka) for Financial Inclusion in Bangladesh" (Word limit: 250 words).',
            solution: `Key Model Points:
1. Introduction:
Central Bank Digital Currency (CBDC) represents a digital form of sovereign fiat currency issued directly by the central bank. As Bangladesh advances toward a cashless society, the introduction of 'Digital Taka' offers revolutionary opportunities for the national financial landscape.

2. Benefits & Inclusion:
- Interoperability & Fee-less Transfers: A retail CBDC enables seamless, low-cost or zero-cost peer-to-peer and merchant transactions, overcoming the interoperability walls between competing private MFS operators.
- Financial Inclusion for Marginalized Populations: Through offline transaction capabilities using cryptographic secure elements on smartcards or basic feature phones, citizens in remote riverine and hill tracts without internet connectivity can participate in formal banking.
- Government G2P Social Safety Nets: Direct delivery of social safety net allowances straight to citizens' digital wallets eliminates administrative leakage and middleman commissions.

3. Challenges & Safeguards:
- Cybersecurity & System Availability: Ensuring 100% resilient distributed ledger or centralized cryptographic architecture against state-sponsored intrusions.
- Commercial Bank Disintermediation: Preventing rapid deposit migration from commercial banks to central bank wallets during periods of financial stress.

4. Conclusion:
With robust cryptographic protection, progressive regulatory frameworks, and public awareness campaigns, Digital Taka can serve as the cornerstone of Smart Bangladesh 2041.`,
            tags: ['Focus Writing', 'CBDC', 'FinTech', 'Digital Taka'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10209-6',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "আমাদের দেশের অধিকাংশ বাণিজ্যিক ব্যাংকে এখন কোর ব্যাংকিং সিস্টেম ব্যবহৃত হচ্ছে। এই সিস্টেমের নিরাপত্তা নিশ্চিত করতে নিয়মিত সাইবার অডিট পরিচালনা করা আবশ্যক। গ্রাহকদের সচেতনতা বৃদ্ধি করা ছাড়া সাইবার অপরাধ সম্পূর্ণ প্রতিরোধ করা সম্ভব নয়।"',
            solution: `প্রমিত প্রাতিষ্ঠানিক ইংরেজি অনুবাদ:
"Core Banking Systems are now utilized in most commercial banks of our country. In order to ensure the security of this system, conducting regular cyber audits is imperative. It is not possible to completely prevent cyber crimes without enhancing customer awareness."`,
            tags: ['Translation', 'Bangla to English', 'Banking IT'],
            marks: 15,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 3. Job ID: 25105 (2026 Exam)
  {
    id: 'officer-it-25105',
    title: 'Officer (IT), Combined Bank (Job ID: 25105) — 2026 Exam',
    searchQuery: 'Officer (IT), Combined Bank (Job ID: 25105) 2026 question paper pdf',
    category: 'Officer (IT)',
    jobId: '25105',
    circularYear: '2026 (Exam: July 31, 2026)',
    examDate: 'July 31, 2026',
    examBody: 'Bankers Selection Committee (BSCS)',
    participatingBanks: ['Sonali Bank PLC', 'Agrani Bank PLC', 'Probashi Kallyan Bank'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The 64-vacancy recruitment exam for Officer (IT) conducted on July 31, 2026. Highly updated questions covering Microservices architecture, API gateways, Asymmetric Encryption (RSA), SQL Window functions, Doubly Linked Lists, Banker’s Deadlock Algorithm, and Bangla focus writing.',
    keyTopics: ['Microservices in Banking', 'RSA Encryption', 'SQL Window Functions (DENSE_RANK)', 'RESTful APIs', 'Cloud Disaster Recovery', 'Banker Algorithm'],
    sections: [
      {
        id: 'sec-25105-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-25105-1',
            questionNo: '1',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: Employee(EmpID, EmpName, DepartmentID, Salary, JoiningDate). Write an SQL query using Window Functions to find the 2nd highest salary in each department along with the employee details without using subqueries or LIMIT/OFFSET.',
            solution: 'Window functions like DENSE_RANK() partition the data by DepartmentID and order by Salary descending. A Common Table Expression (CTE) or outer filter selects records where the rank equals 2.',
            codeSolution: `WITH RankedSalaries AS (
    SELECT 
        EmpID,
        EmpName,
        DepartmentID,
        Salary,
        JoiningDate,
        DENSE_RANK() OVER (
            PARTITION BY DepartmentID 
            ORDER BY Salary DESC
        ) AS salary_rank
    FROM Employee
)
SELECT 
    EmpID,
    EmpName,
    DepartmentID,
    Salary,
    JoiningDate
FROM RankedSalaries
WHERE salary_rank = 2;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'DENSE_RANK', 'Database'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the working principle of the RSA asymmetric cryptosystem. Given two prime numbers p = 3 and q = 11, and encryption key e = 7: (i) Compute the modulus n and totient function phi(n). (ii) Find the private decryption key d. (iii) If plaintext message M = 2, find the ciphertext C.',
            solution: `RSA Mathematical Steps:
1. Modulus n & Totient phi(n):
- n = p * q = 3 * 11 = 33
- phi(n) = (p - 1) * (q - 1) = (3 - 1) * (11 - 1) = 2 * 10 = 20.

2. Calculate Private Key d:
- d is the modular multiplicative inverse of e modulo phi(n):
  (d * e) mod phi(n) = 1 => (d * 7) mod 20 = 1.
- Testing integers for d:
  d = 1: 7 mod 20 != 1
  d = 2: 14 mod 20 != 1
  d = 3: 21 mod 20 = 1!
- Therefore, private key d = 3.

3. Encryption of Plaintext M = 2:
- Ciphertext C = M^e mod n
  C = 2^7 mod 33
  2^7 = 128
  128 / 33 = 3 with remainder (128 - 99) = 29.
- Therefore, Ciphertext C = 29.

4. Verification (Decryption):
- M = C^d mod n = 29^3 mod 33
  29 = -4 (mod 33)
  (-4)^3 = -64
  -64 mod 33 = -64 + 66 = 2. (Matches original plaintext M = 2).`,
            tags: ['Cryptography', 'RSA', 'Information Security', 'Asymmetric Encryption'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-25105-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Contrast Monolithic Architecture vs. Microservices Architecture for a modern internet banking platform. Highlight how API Gateways and Service Meshes provide security and traffic management.',
            solution: `1. Monolithic vs. Microservices:
- Monolithic: All services (accounts, cards, loans, notifications, user auth) are coupled in a single unified codebase and deployment binary.
  * Pros: Simple initial deployment, straightforward end-to-end debugging.
  * Cons: Single point of failure (a crash in loan module can down the entire banking app), difficult to scale individual high-traffic endpoints, slower release cycles.
- Microservices: Broken down into independent, loosely coupled services communicating via REST APIs or gRPC.
  * Pros: Independent deployment, fault isolation, polyglot technology stack, horizontal scaling of busy services (e.g. payment switch).
  * Cons: Distributed transaction complexity (requires SAGA patterns instead of 2PC), network latency, complex monitoring.

2. Role of API Gateway & Service Mesh:
- API Gateway (North-South Traffic): Acts as the single entry point for web/mobile clients. Handles SSL termination, rate limiting to prevent DDoS, authentication token validation (JWT), and request routing.
- Service Mesh (East-West Traffic): Dedicated infrastructure layer (e.g. Istio) between microservices handling mutual TLS (mTLS) zero-trust encryption, circuit breaking, and distributed tracing.`,
            tags: ['Software Engineering', 'Microservices', 'API Gateway', 'FinTech Architecture'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-3b',
            questionNo: '4',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C++ program to insert a node at the beginning and delete a node from the end of a Doubly Linked List. Explain why Doubly Linked Lists are favored for browser history and LRU Cache implementations.',
            solution: 'C++ Doubly Linked List with head, tail, prev, and next pointers.',
            codeSolution: `#include <iostream>

struct Node {
    int data;
    Node* prev;
    Node* next;
    Node(int val) : data(val), prev(nullptr), next(nullptr) {}
};

class DoublyLinkedList {
private:
    Node* head;
    Node* tail;
public:
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}

    // Insert at front: O(1)
    void insertFront(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
    }

    // Delete from back: O(1)
    void deleteBack() {
        if (!tail) {
            std::cout << "List is empty!\\n";
            return;
        }
        Node* temp = tail;
        if (head == tail) {
            head = tail = nullptr;
        } else {
            tail = tail->prev;
            tail->next = nullptr;
        }
        delete temp;
    }

    void display() const {
        Node* curr = head;
        while (curr) {
            std::cout << curr->data << " <-> ";
            curr = curr->next;
        }
        std::cout << "NULL\\n";
    }
};

int main() {
    DoublyLinkedList dll;
    dll.insertFront(30);
    dll.insertFront(20);
    dll.insertFront(10);
    std::cout << "List after insertions: ";
    dll.display();

    dll.deleteBack();
    std::cout << "List after deleting back: ";
    dll.display();
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['Data Structures', 'Doubly Linked List', 'C++', 'LRU Cache'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-3c',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain the Banker’s Algorithm for Deadlock Avoidance. Given 5 processes (P0-P4) and 3 resource types (A=10, B=5, C=7 instances), explain how the safety algorithm verifies whether a state is safe or unsafe.',
            solution: `1. Banker's Algorithm Overview:
Developed by Edsger Dijkstra, the Banker's algorithm tests for safety by simulating the allocation of predetermined maximum possible amounts of all resources, and then makes an "s-state" check to test for possible activities, before deciding whether allocation should be allowed to continue.

2. Data Structures:
- Available[m]: Vector of available instances of each resource.
- Max[n][m]: Maximum demand of each process.
- Allocation[n][m]: Currently allocated instances to each process.
- Need[n][m]: Remaining needed instances: Need[i][j] = Max[i][j] - Allocation[i][j].

3. Safety Algorithm Steps:
- Let Work = Available and Finish[i] = False for all i.
- Find an index i such that Finish[i] == False and Need[i] <= Work.
- If such i exists:
  * Work = Work + Allocation[i]
  * Finish[i] = True
  * Repeat until all processes are finished.
- If Finish[i] == True for all i, the system is in a SAFE state and deadlock is avoided.`,
            tags: ['Operating Systems', 'Deadlock', 'Banker Algorithm', 'Resource Allocation'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-25105-3d',
            questionNo: '6',
            type: 'short_note',
            topicCategory: 'Networking & Security',
            questionText: 'Write short notes on: (a) JSON Web Token (JWT) architecture. (b) ISO 8583 financial transaction message format. (c) NAT vs. PAT in enterprise perimeter routing.',
            solution: `(a) JSON Web Token (JWT):
A compact, URL-safe means of representing claims to be transferred between two parties. Composed of Header (alg, typ), Payload (claims: sub, exp, roles), and Signature (HMAC-SHA256 or RSA) separated by dots. Widely used in stateless authentication for banking mobile APIs.

(b) ISO 8583 Standard:
The international standard for financial transaction card originated interchange messaging. Defines Message Type Identifier (MTI, e.g. 0100 auth request, 0200 financial request), Bitmaps (Primary and Secondary indicating present data fields), and Data Elements (Card number, processing code, amount, terminal ID).

(c) NAT vs PAT:
- NAT (Network Address Translation): Translates private IP addresses to public IPs on a 1-to-1 basis. Requires multiple public IPs for multiple hosts.
- PAT (Port Address Translation / NAT Overload): Maps multiple private IP addresses to a SINGLE public IP by assigning unique TCP/UDP port numbers. Essential for commercial branches where hundreds of tellers share one ISP connection.`,
            tags: ['Security', 'JWT', 'ISO 8583', 'Networking', 'PAT'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-25105-nontech',
        name: 'Focus Writing & General Knowledge (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-25105-4',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'বাংলা ফোকাস রাইটিং: "স্মার্ট ব্যাংকিং ও ক্যাশলেস বাংলাদেশ বিনির্মাণে এআই ও ফিনটেকের ভূমিকা" (শব্দসীমা: ২৫০-৩০০ শব্দ)।',
            solution: `মডেল রচনা সংক্ষেপ ও মূল পয়েন্ট:
১. ভূমিকা:
তথ্যপ্রযুক্তির দ্রুত বিকাশের সাথে সাথে ঐতিহ্যবাহী ব্যাংকিং ব্যবস্থা ডিজিটাল এবং স্মার্ট ব্যাংকিংয়ে রূপান্তরিত হচ্ছে। প্রধানমন্ত্রী ঘোষিত 'স্মার্ট বাংলাদেশ ২০৪১' রূপকল্পের অন্যতম প্রধান স্তম্ভ হলো ক্যাশলেস অর্থনীতি, যার মূল চালিকাশক্তি ফিনটেক ও কৃত্রিম বুদ্ধিমত্তা (AI)।

২. স্মার্ট ব্যাংকিংয়ে ফিনটেকের অবদান:
- বাংলা কিউআর (Bangla QR) এবং বিনিময় (Binimoy) ইন্টারঅপারেবল প্ল্যাটফর্মের মাধ্যমে ক্ষুদ্র ব্যবসায়ী ও প্রান্তিক গ্রাহকদের সহজে ডিজিটাল লেনদেনের আওতায় আনা সম্ভব হয়েছে।
- মোবাইল ফিনান্সিয়াল সার্ভিস (MFS) এবং ইন্টারনেট ব্যাংকিং শাখাহীন ব্যাংকিং সেবাকে প্রতিটি নাগরিকের দোরগোড়ায় পৌঁছে দিয়েছে।

৩. কৃত্রিম বুদ্ধিমত্তার (AI) প্রয়োগ:
- ফ্রড ডিটেকশন ও ঝুঁকি ব্যবস্থাপনা: এআই অ্যালগরিদম তাৎক্ষণিকভাবে অস্বাভাবিক লেনদেনের প্যাটার্ন শনাক্ত করে সাইবার জালিয়াতি প্রতিহত করে।
- অটোমেটেড ক্রেডিট স্কোরিং: বিকল্প ডেটা বিশ্লেষণের মাধ্যমে ক্ষুদ্র ও মাঝারি উদ্যোক্তাদের তাৎক্ষণিক জামানতবিহীন ঋণ সুবিধা প্রদান।
- চ্যাটবট ও ২৪/৭ গ্রাহক সেবা: প্রাকৃতিক ভাষা প্রক্রিয়াকরণ (NLP) নির্ভর ভার্চুয়াল অ্যাসিস্ট্যান্ট গ্রাহকদের ব্যাংকিং অভিজ্ঞতা সহজতর করেছে।

৪. উপসংহার:
নিরাপদ সাইবার পরিকাঠামো এবং আর্থিক সাক্ষরতা নিশ্চিত করা গেলে ফিনটেক ও এআই-এর যুগোপযোগী ব্যবহার বাংলাদেশকে একটি গতিশীল ক্যাশলেস ও অন্তর্ভুক্তিমূলক অর্থনীতিতে পরিণত করবে।`,
            tags: ['Focus Writing', 'Bangla', 'Smart Banking', 'FinTech'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-5',
            questionNo: '8 (a)',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into Bengali: "FinTech innovations have transformed the financial landscape by offering seamless mobile payment solutions, automated credit scoring, and biometric verification. To safeguard depositors, regulatory compliance and continuous cyber threat intelligence are indispensable."',
            solution: `প্রমিত প্রাতিষ্ঠানিক বাংলা অনুবাদ:
"ফিনটেক উদ্ভাবনসমূহ স্বাচ্ছন্দ্যময় মোবাইল পেমেন্ট সমাধান, স্বয়ংক্রিয় ক্রেডিট স্কোরিং এবং বায়োমেট্রিক যাচাইকরণের সুযোগ প্রদানের মাধ্যমে সামগ্রিক আর্থিক প্রেক্ষাপটকে আমূল বদলে দিয়েছে। আমানতকারীদের অর্থ সুরক্ষিত রাখতে নিয়ন্ত্রক সংস্থার নিয়মকানুন প্রতিপালন এবং সার্বক্ষণিক সাইবার হুমকি সংক্রান্ত তথ্য পর্যবেক্ষণ অপরিহার্য।"`,
            tags: ['Translation', 'English to Bangla', 'FinTech'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-6',
            questionNo: '8 (b)',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "বাংলাদেশ ব্যাংক কর্তৃক চালুকৃত ইন্টারঅপারেবল ডিজিটাল পেমেন্ট প্ল্যাটফর্ম ক্ষুদ্র ব্যবসায়ী ও প্রান্তিক জনগোষ্ঠীকে ডিজিটাল লেনদেনে অন্তর্ভুক্ত করতে গুরুত্বপূর্ণ ভূমিকা রাখছে।"',
            solution: `Standard High-Quality Model Translation:
"The interoperable digital payment platform launched by Bangladesh Bank is playing a significant role in incorporating small entrepreneurs and marginalized communities into digital transactions."`,
            tags: ['Translation', 'Bangla to English', 'Interoperable Payments'],
            marks: 10,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 4. Officer (IT), Combined Bank 2025 Based on 2023
  {
    id: 'officer-it-2025-base23',
    title: 'Officer (IT), Combined Bank 2025 Based on 2023',
    searchQuery: 'Officer (IT), Combined Bank 2025 Based on 2023 question paper pdf',
    category: 'Officer (IT)',
    jobId: 'Combined-2025-B23',
    circularYear: '2023-2025',
    examDate: 'February 24, 2025',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC', 'BDBL'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Combined Bank Officer (IT) exam paper modeled on the updated 2023 base curriculum with 2025 question format. Focuses on Core Banking System high availability, Python algorithms, SQL subqueries, IPv6 migration, and Agile Scrum.',
    keyTopics: ['Disaster Recovery (RTO & RPO)', 'Kadane Algorithm', 'SQL Subqueries', 'IPv6 Addressing', 'Cloud Migration', 'Agile Scrum'],
    sections: [
      {
        id: 'sec-2025b23-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-2025b23-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Define Recovery Time Objective (RTO) and Recovery Point Objective (RPO) in banking disaster recovery planning. Explain how Synchronous vs. Asynchronous database replication affects both RTO and RPO.',
            solution: `1. RTO & RPO Definitions:
- RTO (Recovery Time Objective): The maximum acceptable duration of time that a banking system can remain offline after a disaster or outage before normal operations are restored. (Measures acceptable downtime).
- RPO (Recovery Point Objective): The maximum acceptable age of data that can be lost when an outage occurs. (Measures acceptable data loss in minutes/seconds).

2. Impact of Replication Mechanisms:
- Synchronous Replication:
  * Mechanism: A transaction is only committed on the primary database after the secondary DR database has acknowledged write completion.
  * RPO: Zero (RPO = 0), meaning absolute zero data loss, essential for financial ledgers.
  * Trade-off: Higher write latency due to round-trip network delays between data centers.
- Asynchronous Replication:
  * Mechanism: The primary database commits the transaction immediately and pushes transaction log changes to the DR site in the background.
  * RPO: Small delta (e.g. RPO = few seconds/minutes) depending on network queue lag.
  * Trade-off: Faster transaction throughput, but in the event of an abrupt hard disaster, the latest un-replicated transactions might be lost.`,
            tags: ['Disaster Recovery', 'RTO', 'RPO', 'DBMS', 'High Availability'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2025b23-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python program to find the contiguous subarray with the largest sum using Kadane’s Algorithm. Analyze its time and space complexity.',
            solution: 'Kadane’s algorithm iterates through the array while maintaining the maximum sum ending at the current position and the global maximum sum observed so far. Operates in O(N) time and O(1) space.',
            codeSolution: `def max_subarray_sum(nums: list[int]) -> tuple[int, list[int]]:
    """
    Finds the maximum subarray sum using Kadane's Algorithm.
    Time Complexity: O(N), Space Complexity: O(1)
    """
    if not nums:
        return 0, []
        
    max_so_far = nums[0]
    curr_max = nums[0]
    
    start = 0
    end = 0
    temp_start = 0
    
    for i in range(1, len(nums)):
        if nums[i] > curr_max + nums[i]:
            curr_max = nums[i]
            temp_start = i
        else:
            curr_max += nums[i]
            
        if curr_max > max_so_far:
            max_so_far = curr_max
            start = temp_start
            end = i
            
    return max_so_far, nums[start : end + 1]

# Example execution
data = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max_sum, subarray = max_subarray_sum(data)
print(f"Maximum Sum: {max_sum}, Subarray: {subarray}")`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Python', 'Kadane', 'Dynamic Programming'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2025b23-3',
            questionNo: '3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider tables: Customer(CustID, Name, BranchID), Account(AccNo, CustID, AccType, Balance). Write an SQL query to find customers who hold both a Savings ("SB") and a Fixed Deposit ("FD") account, and display their Total Balance across both accounts.',
            solution: 'We group by Customer, filter using HAVING with conditional aggregations to ensure presence of both SB and FD accounts, and sum the balances.',
            codeSolution: `SELECT 
    c.CustID,
    c.Name,
    SUM(a.Balance) AS Total_Combined_Balance
FROM Customer c
JOIN Account a ON c.CustID = a.CustID
WHERE a.AccType IN ('SB', 'FD')
GROUP BY c.CustID, c.Name
HAVING COUNT(DISTINCT a.AccType) = 2
ORDER BY Total_Combined_Balance DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'HAVING', 'GROUP BY', 'Database'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2025b23-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain IPv6 address architecture and compare it with IPv4. Describe the Dual-Stack transition mechanism used by Bangladesh commercial banks during IPv6 migration.',
            solution: `1. IPv6 vs IPv4 Comparison:
- Address Space: IPv4 uses 32-bit addresses (~4.29 billion addresses); IPv6 uses 128-bit addresses (~3.4 x 10^38 addresses), completely eliminating address exhaustion.
- Notation: IPv4 is written in dotted-decimal (e.g., 192.168.1.1); IPv6 uses 8 groups of 4 hexadecimal digits separated by colons (e.g., 2001:0db8:85a3::8a2e:0370:7334).
- Header: IPv6 has a simplified, fixed 40-byte base header without checksum field, accelerating router processing.
- Security: IPsec is built natively into IPv6 standards.

2. Dual-Stack Transition Mechanism:
Dual-Stack allows bank network devices (routers, core firewalls, web servers) to run IPv4 and IPv6 protocol stacks concurrently.
- If a client supports IPv6, the DNS resolver returns an AAAA record, and traffic flows over native IPv6.
- If a legacy legacy branch ATM only supports IPv4, DNS returns an A record, and traffic routes over IPv4 without disruption.`,
            tags: ['Networking', 'IPv6', 'Dual Stack', 'CIDR'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2025b23-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the Agile Scrum framework for software engineering in financial application development. Differentiate between Product Backlog, Sprint Backlog, Sprint Planning, and Daily Standup.',
            solution: `1. Agile Scrum Framework:
Scrum is an iterative, incremental agile development framework focused on delivering working software in fixed-length timeboxes called Sprints (typically 2 to 4 weeks).

2. Core Artifacts:
- Product Backlog: Prioritized list of all features, technical requirements, bug fixes, and user stories maintained by the Product Owner.
- Sprint Backlog: Subset of product backlog items committed by the development team for completion during the current active Sprint.

3. Core Ceremonies:
- Sprint Planning: Meeting where the team estimates effort (story points) and agrees on the Sprint Goal.
- Daily Standup (Daily Scrum): 15-minute time-boxed synchronizing meeting where each member answers: What did I accomplish yesterday? What will I do today? What blockers are impeding my progress?
- Sprint Review & Retrospective: Review demonstrates working increments to stakeholders; Retrospective inspects team processes for continuous improvement.`,
            tags: ['Software Engineering', 'Agile', 'Scrum', 'SDLC'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-2025b23-6',
            topicCategory: 'Operating Systems & Linux',
            questionNo: '6',
            type: 'descriptive',
            questionText: 'Explain Process Synchronization in Operating Systems. Differentiate between Mutex and Counting Semaphore with appropriate code/pseudocode.',
            solution: `1. Process Synchronization & Critical Section:
A critical section is a piece of code that accesses shared resources (such as bank balances or shared memory buffers). Synchronization prevents race conditions by guaranteeing Mutual Exclusion.

2. Mutex vs. Counting Semaphore:
- Mutex (Mutual Exclusion Lock):
  * Binary locking mechanism.
  * Ownership concept: Only the thread that locked the mutex can unlock it.
- Counting Semaphore:
  * Integer variable counter (S) accessed only via atomic operations: wait() (or P()) and signal() (or V()).
  * Controls access to a finite pool of identical resources (e.g. database connection pool of size N).
  * No thread ownership: Any thread can signal to increment the count.`,
            tags: ['Operating Systems', 'Process Synchronization', 'Mutex', 'Semaphore'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-2025b23-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-2025b23-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Role of FinTech and Agent Banking in Deepening Financial Inclusion in Rural Bangladesh" (Word limit: 300 words).',
            solution: `Key Points:
- Introduction: Despite robust GDP growth, a vast segment of Bangladesh's rural population previously lacked access to conventional brick-and-mortar bank branches.
- Agent Banking Revolution: Introduced by Bangladesh Bank, agent banking outlets have expanded into rural union parishads, enabling biometric deposits, remittances, and utility payments.
- Synergies with FinTech: Integration with MFS (bKash, Nagad, Rocket) and micro-credit disbursement algorithms enables smallholder farmers and cottage enterprises to access formal credit.
- Economic Impact: Channeling expatriate remittances through formal channels and mobilizing rural savings into productive investments.
- Conclusion: Strengthening rural digital literacy and expanding cyber safeguards are vital to securing an inclusive economic foundation.`,
            tags: ['Focus Writing', 'English', 'Agent Banking', 'Rural Inclusion'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2025b23-8',
            questionNo: '8 (a)',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "তথ্যপ্রযুক্তির আধুনিকায়ন ব্যাংকিং খাতে স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করেছে। কেন্দ্রীয় ব্যাংকের কঠোর নীতিমালা বাণিজ্যিক ব্যাংকগুলোর সার্বিক ঝুঁকি কমাতে সাহায্য করছে।"',
            solution: `Standard High-Quality Model Translation:
"The modernization of information technology has ensured transparency and accountability in the banking sector. The stringent guidelines of the central bank are assisting commercial banks in mitigating their overall risks."`,
            tags: ['Translation', 'Bangla to English', 'Banking IT'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-2025b23-9',
            questionNo: '8 (b)',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into Bengali: "Automated teller machines and internet banking portals must be protected by resilient encryption protocols and real-time monitoring to prevent fraudulent fund withdrawals."',
            solution: `প্রমিত প্রাতিষ্ঠানিক বাংলা অনুবাদ:
"অননুমোদিত বা প্রতারণামূলক অর্থ উত্তোলন প্রতিহত করতে এটিএম (অটোমেটেড টেলার মেশিন) এবং ইন্টারনেট ব্যাংকিং পোর্টালগুলোকে শক্তিশালী এনক্রিপশন প্রোটোকল ও রিয়েল-টাইম নজরদারির মাধ্যমে সুরক্ষিত রাখতে হবে।"`,
            tags: ['Translation', 'English to Bangla', 'ATM Security'],
            marks: 10,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 5. Job ID: 10184
  {
    id: 'officer-it-10184',
    title: 'Officer (IT), Combined Bank (Job ID: 10184)',
    searchQuery: 'Officer (IT), Combined Bank (Job ID: 10184) question paper pdf',
    category: 'Officer (IT)',
    jobId: '10184',
    circularYear: '2021 (Exam: Oct 4, 2024)',
    examDate: 'October 04, 2024',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Recruitment examination held on October 4, 2024, for Combined Banks Officer (IT). Tested core networking subnetting math, SQL joins, Dijkstra algorithm theory, Linux file permissions, and translation.',
    keyTopics: ['Subnetting Block Size', 'SQL Multi-table Joins', 'Dijkstra & OSPF', 'Operating System Paging', 'Linux Permissions', 'English Translation'],
    sections: [
      {
        id: 'sec-10184-tech',
        name: 'Technical IT Departmental (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-10184-1',
            questionNo: '1',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'A bank network administrator is given the class C network 192.168.10.0/24 and needs to divide it into 4 equal subnets. (a) How many bits need to be borrowed? (b) What is the new subnet mask in dotted-decimal format? (c) State the Network Address, Valid Host Range, and Broadcast Address of the 2nd subnet.',
            solution: `Subnetting Steps:
(a) Bits to borrow:
- Formula: 2^n >= Number of subnets
- 2^n >= 4 => n = 2 bits borrowed from the host portion.

(b) New Subnet Mask:
- Default Class C prefix: /24
- New prefix: /24 + 2 = /26
- Binary mask: 11111111.11111111.11111111.11000000
- Dotted decimal: 255.255.255.192.

(c) 2nd Subnet Details:
- Magic number (Block size) = 256 - 192 = 64.
- 1st Subnet: 192.168.10.0 to 192.168.10.63
- 2nd Subnet:
  * Network Address: 192.168.10.64
  * First Usable Host: 192.168.10.65
  * Last Usable Host: 192.168.10.126
  * Broadcast Address: 192.168.10.127.`,
            tags: ['Networking', 'Subnetting', 'IPv4', 'CIDR', 'Bank Exam Math'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Schema: Customer(CustID, CustName, City), Account(AccNo, CustID, Balance), Branch(BranchID, BranchName, City). Write an SQL query to retrieve the Customer Name and Account Number of customers who have opened an account in a branch located in the same city they reside in, and whose account balance is greater than 50,000.',
            solution: 'Join Customer, Account, and Branch on their keys, then filter where Customer.City = Branch.City and Balance > 50000.',
            codeSolution: `SELECT 
    c.CustName,
    a.AccNo,
    c.City AS Customer_City,
    b.BranchName,
    a.Balance
FROM Customer c
JOIN Account a ON c.CustID = a.CustID
JOIN Branch b ON a.BranchID = b.BranchID
WHERE c.City = b.City 
  AND a.Balance > 50000
ORDER BY a.Balance DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Joins', 'DBMS'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10184-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C or C++ function to perform In-order, Pre-order, and Post-order Traversals of a Binary Tree. Explain their time complexity.',
            solution: 'Recursive depth-first traversals of a binary tree with O(N) time and O(H) auxiliary stack space.',
            codeSolution: `#include <iostream>

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

// In-order: Left -> Root -> Right
void inOrder(TreeNode* root) {
    if (!root) return;
    inOrder(root->left);
    std::cout << root->val << " ";
    inOrder(root->right);
}

// Pre-order: Root -> Left -> Right
void preOrder(TreeNode* root) {
    if (!root) return;
    std::cout << root->val << " ";
    preOrder(root->left);
    preOrder(root->right);
}

// Post-order: Left -> Right -> Root
void postOrder(TreeNode* root) {
    if (!root) return;
    postOrder(root->left);
    postOrder(root->right);
    std::cout << root->val << " ";
}

int main() {
    TreeNode* root = new TreeNode(10);
    root->left = new TreeNode(5);
    root->right = new TreeNode(20);
    
    std::cout << "In-order: "; inOrder(root); std::cout << "\\n";
    std::cout << "Pre-order: "; preOrder(root); std::cout << "\\n";
    std::cout << "Post-order: "; postOrder(root); std::cout << "\\n";
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['Data Structures', 'Binary Tree', 'Tree Traversal', 'C++'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10184-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain Linux File Permissions (rwx) and octal notation. If a file has permission `chmod 754 transaction.log`, explain what permissions are granted to the Owner, Group, and Others.',
            solution: `1. Linux Permissions Representation:
- r (Read) = 4
- w (Write) = 2
- x (Execute) = 1

2. Deciphering 754:
- Owner (Digit 1 = 7): 4 + 2 + 1 = Read, Write, Execute (rwx). The file creator can read, modify, and execute the file.
- Group (Digit 2 = 5): 4 + 0 + 1 = Read and Execute (r-x). Members of the group can read and execute, but cannot modify the file.
- Others (Digit 3 = 4): 4 + 0 + 0 = Read only (r--). All other system users can only view file contents without modify or execute permissions.`,
            tags: ['Linux', 'Operating Systems', 'File Permissions', 'chmod'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain the concept of Virtual Memory and Paging in Operating Systems. What is a Page Fault and how does the OS handle it?',
            solution: `1. Virtual Memory & Paging:
Virtual memory provides an illusion of a large contiguous physical memory by mapping virtual addresses to physical RAM frames using Page Tables.

2. Page Fault Handling Steps:
1. CPU attempts to access a virtual page whose valid-invalid bit in the page table is set to 'invalid' (not in physical RAM).
2. Trap generated to OS kernel (Page Fault interrupt).
3. OS checks whether access is illegal (terminate) or valid page in backing storage.
4. OS locates a free physical frame in RAM (or evicts a page using LRU/FIFO).
5. Schedules disk I/O to read the required page from swap disk into the free frame.
6. Updates Page Table entry (sets frame number and valid bit = 1).
7. Restarts the faulting CPU instruction seamlessly.`,
            tags: ['Operating Systems', 'Virtual Memory', 'Paging', 'Page Fault'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10184-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Differentiate between Black-box Testing and White-box Testing. Describe Equivalence Partitioning and Boundary Value Analysis (BVA) with an example of validating a bank withdrawal amount (BDT 500 to 50,000).',
            solution: `1. Black-box vs White-box Testing:
- Black-box Testing: Tests functionality without knowledge of internal code structure or logic. Focuses on inputs and expected outputs.
- White-box Testing: Tests internal code paths, branches, conditions, and loops with full visibility into the source code.

2. Equivalence Partitioning & BVA for Range [500, 50000]:
- Equivalence Classes:
  * Invalid Low: Amount < 500 (e.g. 400)
  * Valid: 500 <= Amount <= 50000 (e.g. 15000)
  * Invalid High: Amount > 50000 (e.g. 60000)
- Boundary Value Analysis (BVA):
  * Just below min: 499 (Reject)
  * Min boundary: 500 (Accept)
  * Just above min: 501 (Accept)
  * Nominal: 25000 (Accept)
  * Just below max: 49999 (Accept)
  * Max boundary: 50000 (Accept)
  * Just above max: 50001 (Reject).`,
            tags: ['Software Engineering', 'Testing', 'BVA', 'Quality Assurance'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-10184-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-10184-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Mitigating Cyber Risks in the Financial Sector of Bangladesh" (Word limit: 250 words).',
            solution: `Key Points:
- Increasing reliance on SWIFT, RTGS, and mobile financial networks.
- Emerging threats: Ransomware attacks, phishing scams, ATM skimming, credential harvesting.
- Institutional safeguards: Implementing multi-factor authentication, Security Operations Centers (SOC), network micro-segmentation, and regular third-party vulnerability assessments.
- Regulatory compliance: Adhering strictly to Bangladesh Bank ICT Security Guidelines.`,
            tags: ['Focus Writing', 'English', 'Cybersecurity', 'Financial Risk'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10184-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate the following passage into Bengali: "Online transaction security relies fundamentally on asymmetric key cryptography and transport layer security. Without continuous employee training and stringent identity verification, even the most sophisticated firewalls cannot prevent security breaches caused by social engineering."',
            solution: `প্রমিত প্রাতিষ্ঠানিক বাংলা অনুবাদ:
"অনলাইন লেনদেনের নিরাপত্তা মূলত অ্যাসিমেট্রিক কি ক্রিপ্টোগ্রাফি এবং ট্রান্সপোর্ট লেয়ার সিকিউরিটির (টিএলএস) ওপর নির্ভরশীল। কর্মচারীদের সার্বক্ষণিক প্রশিক্ষণ এবং কঠোর পরিচয় যাচাইকরণ নিশ্চিত না করা গেলে, সামাজিক প্রকৌশল (সোশ্যাল ইঞ্জিনিয়ারিং) দ্বারা সৃষ্ট নিরাপত্তা লঙ্ঘন অত্যন্ত আধুনিক ফায়ারওয়াল দিয়েও প্রতিহত করা সম্ভব নয়।"`,
            tags: ['Translation', 'English to Bangla', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 6. Job ID: 10152
  {
    id: 'officer-it-10152',
    title: 'Officer (IT), Combined Bank (Job ID: 10152)',
    searchQuery: 'Officer (IT), Combined Bank (Job ID: 10152) question paper pdf',
    category: 'Officer (IT)',
    jobId: '10152',
    circularYear: '2023 (Exam: Oct 14, 2023)',
    examDate: 'October 14, 2023',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Rupali Bank PLC'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The landmark BIBM exam held on October 14, 2023. Contains the exact verified SQL code analysis problem, matrix operations programming, multiplexing comparisons, hypervisors, and BCNF normalization.',
    keyTopics: ['SQL Code Analysis', 'Matrix Multiplication', 'TDM vs FDM vs WDM', 'Hypervisors', 'Web Caching & VPN', 'BCNF Decomposition'],
    sections: [
      {
        id: 'sec-10152-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-10152-1',
            questionNo: '1',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Analyze the following SQL query and explain in detail what it performs, line-by-line, including the conditions checked by WHERE and HAVING:\n\nSELECT department_name, AVG(salary) as average_salary \nFROM employees e \nJOIN department d ON e.department_id = d.department_id \nWHERE salary > (SELECT AVG(salary) FROM employees) \nGROUP BY department_name \nHAVING COUNT(*) > 2 \nORDER BY average_salary DESC;',
            solution: `Detailed Query Analysis:
1. SELECT department_name, AVG(salary) as average_salary:
   Specifies the projected columns: the department name and the arithmetic average of salaries of qualifying employees in that department, aliased as average_salary.

2. FROM employees e JOIN department d ON e.department_id = d.department_id:
   Performs an INNER JOIN between the 'employees' table (aliased as 'e') and 'department' table (aliased as 'd') based on matching department_id values.

3. WHERE salary > (SELECT AVG(salary) FROM employees):
   Row-level filtering before aggregation. It executes a subquery to calculate the global company-wide average salary across all employees. Only employees earning strictly more than this global average are retained for subsequent aggregation.

4. GROUP BY department_name:
   Groups the remaining high-earning employee records by department name.

5. HAVING COUNT(*) > 2:
   Group-level filtering applied after aggregation. Discards any department group that contains 2 or fewer above-average earning employees. Only departments with strictly more than 2 such employees are included.

6. ORDER BY average_salary DESC:
   Sorts the final resulting departments in descending order of their calculated average_salary (highest paying department first).`,
            tags: ['SQL', 'Query Analysis', 'Subquery', 'HAVING', 'BIBM Authentic'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a program in C or Python to compute matrix multiplication of two matrices A (m x k) and B (k x n), and find the maximum element in the resultant matrix C.',
            solution: 'Standard matrix multiplication algorithm with dimension validation and peak value search.',
            codeSolution: `def multiply_matrices(A, B):
    m = len(A)
    k1 = len(A[0])
    k2 = len(B)
    n = len(B[0])
    
    if k1 != k2:
        raise ValueError("Matrix dimensions mismatch for multiplication!")
        
    C = [[0 for _ in range(n)] for _ in range(m)]
    max_val = float('-inf')
    
    for i in range(m):
        for j in range(n):
            for p in range(k1):
                C[i][j] += A[i][p] * B[p][j]
            if C[i][j] > max_val:
                max_val = C[i][j]
                
    return C, max_val

mat_A = [[1, 2], [3, 4]]
mat_B = [[5, 6], [7, 8]]
res_C, maximum = multiply_matrices(mat_A, mat_B)
print("Result Matrix C:", res_C)
print("Maximum Element:", maximum)`,
            solutionLanguage: 'python',
            tags: ['Programming', 'Matrix', 'Python', 'Algorithms'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the working principles and compare: (a) Time Division Multiplexing (TDM) (b) Frequency Division Multiplexing (FDM) (c) Wavelength Division Multiplexing (WDM). Which one is used in optical fiber communication in bank inter-branch networks?',
            solution: `1. Principles & Comparison:
- FDM (Frequency Division Multiplexing):
  * Mechanism: The total bandwidth of the medium is divided into non-overlapping frequency bands. Multiple signals are transmitted simultaneously on different carrier frequencies.
  * Domain: Analog signals (e.g. traditional radio/cable).
- TDM (Time Division Multiplexing):
  * Mechanism: The entire bandwidth is allocated to each channel for a fraction of time (time slot) in round-robin fashion.
  * Domain: Digital signals (e.g., T1/E1 digital lines).
- WDM (Wavelength Division Multiplexing):
  * Mechanism: Optical equivalent of FDM. Multiple optical carrier signals of different wavelengths (colors) of laser light are combined onto a single optical fiber strand using prisms or optical couplers.
  * Domain: Optical fiber networks.

2. Technology used in Bank Inter-Branch Optical Networks:
WDM (Dense WDM / DWDM) is used in bank inter-branch fiber backbones and data center interconnects (DCI) because it delivers terabit bandwidth capacity without requiring new physical fiber laying.`,
            tags: ['Networking', 'Multiplexing', 'TDM', 'FDM', 'WDM', 'Optical Fiber'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'What is a Hypervisor in cloud computing and server virtualization? Compare Type-1 (Bare Metal) vs. Type-2 (Hosted) Hypervisors. Give examples of each used in banking enterprise data centers.',
            solution: `1. Definition:
A Hypervisor (Virtual Machine Monitor, VMM) is software, firmware, or hardware that creates and runs virtual machines by abstracting physical CPU, memory, and storage.

2. Comparison:
- Type-1 Hypervisor (Bare-Metal):
  * Runs directly on physical host hardware without any underlying operating system.
  * High performance, minimal latency, low overhead, and robust security.
  * Examples: VMware ESXi, Microsoft Hyper-V Server, KVM.
  * Use in Banking: Primary choice for running Core Banking database servers and high-volume transaction processing clusters.
- Type-2 Hypervisor (Hosted):
  * Runs as an application on top of an existing host operating system (e.g. Windows/Linux).
  * Has OS overhead and is less suited for mission-critical enterprise workloads.
  * Examples: Oracle VirtualBox, VMware Workstation.
  * Use in Banking: Developer testing environments, software QA staging.`,
            tags: ['Cloud Computing', 'Virtualization', 'Hypervisor', 'Operating Systems'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Define Boyce-Codd Normal Form (BCNF). How is BCNF stricter than 3NF? Provide an example of a relation that is in 3NF but fails BCNF.',
            solution: `1. Definition:
A relation R is in BCNF if for every non-trivial functional dependency X -> Y, X is a SUPERKEY of R.

2. Difference from 3NF:
In 3NF, the condition allows Y to be a prime attribute (part of a candidate key) even if X is not a superkey. BCNF removes this relaxation: the left-hand determinant X MUST be a superkey without exception.

3. Example:
Relation: StudentAdvisor(StudentID, Subject, AdvisorName)
- Candidate Keys: {StudentID, Subject}
- Dependencies:
  1. {StudentID, Subject} -> AdvisorName
  2. AdvisorName -> Subject (Each advisor advises only one subject)
- 3NF Check: In AdvisorName -> Subject, AdvisorName is not a superkey, but Subject is a prime attribute (part of candidate key {StudentID, Subject}). Hence, it is in 3NF!
- BCNF Check: In AdvisorName -> Subject, AdvisorName is NOT a superkey. Therefore, BCNF is VIOLATED.
- Decomposition into BCNF:
  * R1(AdvisorName, Subject) - PK: AdvisorName
  * R2(StudentID, AdvisorName) - PK: {StudentID, AdvisorName}`,
            tags: ['DBMS', 'Normalization', 'BCNF', '3NF'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-10152-6',
            questionNo: '6',
            type: 'short_note',
            topicCategory: 'Networking & Security',
            questionText: 'Write short notes on: (a) TCP 3-Way Handshake and SYN Flood attack. (b) Clustered vs. Non-Clustered Indexes in Relational Databases.',
            solution: `(a) TCP 3-Way Handshake & SYN Flood:
1. Handshake: Client sends SYN -> Server responds with SYN-ACK -> Client replies with ACK.
2. SYN Flood: Attacker floods the server with SYN requests with spoofed IPs, never sending the concluding ACK. The server's backlog queue becomes exhausted with half-open connections, causing Denial of Service (DoS) for legitimate banking clients. Mitigated using SYN Cookies.

(b) Clustered vs Non-Clustered Index:
- Clustered Index: Alters the physical ordering of table rows on disk to match the index key. Only ONE clustered index per table (typically Primary Key). Leaf nodes contain the actual data rows.
- Non-Clustered Index: Creates a separate index structure pointing to the physical data rows (via Row ID or clustered key). A table can have multiple non-clustered indexes.`,
            tags: ['Networking', 'TCP Handshake', 'DBMS', 'Indexing'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-10152-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-10152-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Imperative of Green Banking and Energy-Efficient Data Centers in Bangladesh" (Word limit: 250 words).',
            solution: `Key Model Points:
- Environmental Impact: Traditional data centers consume substantial megawatts of power for compute clusters and continuous air conditioning.
- Green Banking Concept: Adopting paperless branch operations, energy-efficient server hardware (80 Plus Titanium power units), server virtualization to increase utilization, and solar-powered branch ATMs.
- Regulatory Push: Bangladesh Bank directives on Green Financing and ESG compliance for commercial financial institutions.
- Conclusion: Green computing reduces operating expenditures (OPEX) while supporting national sustainability targets.`,
            tags: ['Focus Writing', 'Green Banking', 'Energy Efficient'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "সাইবার অপরাধীরা এখন কৃত্রিম বুদ্ধিমত্তা ব্যবহার করে অত্যাধুনিক ফিশিং ইমেইল তৈরি করছে। ব্যাংক কর্মকর্তাদের সতর্ক থাকতে হবে এবং যেকোনো অস্বাভাবিক অনুরোধের সত্যতা যাচাই করতে হবে।"',
            solution: `Standard High-Quality Model Translation:
"Cyber criminals are now utilizing artificial intelligence to craft sophisticated phishing emails. Bank officials must remain vigilant and verify the authenticity of any unusual requests."`,
            tags: ['Translation', 'Bangla to English', 'Phishing'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 7. SB 2021 ET-CTI 11/12/2021
  {
    id: 'officer-it-sb-2021',
    title: 'Officer (IT), SB 2021 ET-CTI 11/12/2021',
    searchQuery: 'Officer (IT), SB 2021 ET-CTI 11/12/2021 question paper pdf',
    category: 'Officer (IT)',
    jobId: 'SB-2021-CTI',
    circularYear: '2021',
    examDate: 'December 11, 2021',
    examBody: 'CTI',
    participatingBanks: ['Sonali Bank Limited (now Sonali Bank PLC)'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The authentic Sonali Bank Officer (IT) written test conducted by CTI on December 11, 2021. Features web caching, VPN tunneling, bus topology, matrix row/column summation, relational database queries, and bank security.',
    keyTopics: ['Web Caching', 'VPN Tunneling', 'Bus vs Star Topology', 'Matrix Row & Column Sum', 'CIA Triad in Banking', 'SQL Aggregations'],
    sections: [
      {
        id: 'sec-sb2021-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-sb2021-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is Web Caching and why is it implemented in branch banking systems? Explain how forward proxy cache vs. reverse proxy cache operates.',
            solution: `1. Definition:
Web Caching is the temporary storage of web documents (HTML pages, scripts, images, API responses) closer to the client to reduce server load, decrease latency, and conserve network bandwidth.

2. Benefits in Branch Banking:
- Lowers WAN link utilization between remote rural branches and the central CBS data center.
- Accelerates banking UI response times for tellers and customers.
- Ensures high availability during momentary network spikes.

3. Forward vs. Reverse Proxy:
- Forward Proxy Cache: Sits in front of bank employee workstations. When tellers request external banking circulars or web resources, the forward proxy intercepts the request and serves cached copies, hiding internal client IP addresses.
- Reverse Proxy Cache: Sits in front of the central banking web/application servers. It intercepts incoming customer internet banking requests, terminates SSL/TLS, serves static cached assets, and distributes dynamic load among application servers.`,
            tags: ['Web Technologies', 'Web Caching', 'Proxy Servers', 'Networking'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-sb2021-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a program in C to take an M x N matrix from the user, calculate and display the sum of each row, the sum of each column, and the grand average of all elements in the matrix.',
            solution: 'C program allocating 2D array, taking inputs, and running nested loops for row sums, column sums, and grand average.',
            codeSolution: `#include <stdio.h>

int main() {
    int m, n, i, j;
    printf("Enter number of rows (M) and columns (N): ");
    if (scanf("%d %d", &m, &n) != 2 || m <= 0 || n <= 0) {
        printf("Invalid dimensions.\\n");
        return 1;
    }

    int matrix[m][n];
    long long grandTotal = 0;

    printf("Enter the matrix elements (%d x %d):\\n", m, n);
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            scanf("%d", &matrix[i][j]);
            grandTotal += matrix[i][j];
        }
    }

    // Display Row Sums
    printf("\\n--- Row Sums ---\\n");
    for (i = 0; i < m; i++) {
        int rowSum = 0;
        for (j = 0; j < n; j++) {
            rowSum += matrix[i][j];
        }
        printf("Row %d Sum = %d\\n", i + 1, rowSum);
    }

    // Display Column Sums
    printf("\\n--- Column Sums ---\\n");
    for (j = 0; j < n; j++) {
        int colSum = 0;
        for (i = 0; i < m; i++) {
            colSum += matrix[i][j];
        }
        printf("Column %d Sum = %d\\n", j + 1, colSum);
    }

    // Grand Average
    double average = (double)grandTotal / (m * n);
    printf("\\nGrand Total = %lld\\n", grandTotal);
    printf("Grand Average = %.2f\\n", average);

    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['Programming', 'C Language', 'Matrix Operations', 'CTI Authentic'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-sb2021-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the working principle of a Virtual Private Network (VPN). Contrast IPsec VPN vs. SSL/TLS VPN in the context of connecting branch ATMs and remote bank employees.',
            solution: `1. VPN Working Principle:
A VPN creates an encrypted, secure virtual tunnel across an untrusted public network (the Internet). It encapsulates private IP packets inside routable public IP packets (tunneling), encrypts the payload, and authenticates both endpoints using digital certificates or pre-shared keys.

2. IPsec vs. SSL/TLS VPN:
- IPsec VPN (Network Layer / Layer 3):
  * Operates at the network layer, transparent to higher applications.
  * Requires dedicated VPN client software or router-to-router hardware appliances.
  * Ideal for Site-to-Site connectivity: Connecting branch routers and offsite ATM booths securely to the bank headquarters data center.
- SSL/TLS VPN (Application/Transport Layer / Layer 4-7):
  * Runs directly through standard web browsers without needing complex software installations.
  * Provides granular per-application access rather than full network access.
  * Ideal for Remote Work / Telecommuting: Allowing remote bank loan officers or managers to access internal web intranets securely from home laptops.`,
            tags: ['Networking', 'VPN', 'IPsec', 'SSL/TLS', 'Security'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-sb2021-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Schema: Employee(EmpID, Name, DeptID, Salary), Department(DeptID, DeptName). Write SQL queries to:\n(a) Find the department name where the maximum salary is paid.\n(b) Find the names of employees whose salary is higher than the average salary of their respective department.',
            solution: `(a) Highest paying department query using subquery or LIMIT.
(b) Correlated subquery comparing employee salary with the average of that employee's specific department.`,
            codeSolution: `-- Query (a): Department with maximum salary
SELECT d.DeptName, MAX(e.Salary) AS Max_Salary
FROM Department d
JOIN Employee e ON d.DeptID = e.DeptID
GROUP BY d.DeptName
ORDER BY Max_Salary DESC
LIMIT 1;

-- Query (b): Employees earning above departmental average
SELECT e.EmpID, e.Name, e.Salary, e.DeptID
FROM Employee e
WHERE e.Salary > (
    SELECT AVG(sub.Salary)
    FROM Employee sub
    WHERE sub.DeptID = e.DeptID
);`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Correlated Subquery', 'Aggregations', 'DBMS'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-sb2021-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Bus, Star, and Mesh network topologies in terms of cable requirement, fault tolerance, installation complexity, and scalability. Why is Star topology ubiquitous in commercial bank branches?',
            solution: `1. Topology Comparison:
- Bus Topology: Single central backbone cable. Low cost, but single point of failure (cable break halts the entire network), difficult troubleshooting.
- Star Topology: All nodes connect to a central switch/hub. If one cable fails, only that workstation is affected. Highly scalable and easy to troubleshoot.
- Mesh Topology: Every node connects to every other node (n*(n-1)/2 links). Highest fault tolerance and redundancy, but prohibitive cabling cost and complexity.

2. Why Star Topology is Ubiquitous in Bank Branches:
- Fault Isolation: A faulty teller workstation cable does not bring down the rest of the branch counters.
- Central Management: Network administrators can monitor, enable/disable ports, and enforce VLANs directly on the managed central switch.
- Cost Efficiency: Standard twisted-pair Cat6 cables and Gigabit Ethernet switches offer the optimum price-to-performance ratio.`,
            tags: ['Networking', 'Topology', 'Star Topology', 'LAN'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-sb2021-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the CIA Triad (Confidentiality, Integrity, Availability) in Information Security. Describe one banking control mechanism used to ensure each pillar.',
            solution: `1. Confidentiality:
- Principle: Ensuring sensitive information is accessible only to authorized entities.
- Banking Control: Strong encryption (AES-256 for data at rest, TLS 1.3 for data in transit) and Role-Based Access Control (RBAC) ensuring tellers cannot view unauthorized executive accounts.

2. Integrity:
- Principle: Guaranteeing accuracy, consistency, and trustworthiness of data over its entire lifecycle without unauthorized tampering.
- Banking Control: Cryptographic hashing (SHA-256) and Digital Signatures on financial switch transactions preventing message tampering between ATM and Core Banking switch.

3. Availability:
- Principle: Ensuring authorized users have timely and reliable access to information and services whenever needed.
- Banking Control: Redundant hardware components (dual power supplies, RAID-10 storage), load balancers, and hot-standby Disaster Recovery (DR) data centers with automated failover.`,
            tags: ['Cybersecurity', 'CIA Triad', 'Information Security', 'Banking Controls'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-sb2021-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-sb2021-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Role of State-Owned Commercial Banks in Digital Transformation of Bangladesh" (Word limit: 250 words).',
            solution: `Key Points:
- Scale & Reach: State-Owned Commercial Banks (Sonali, Janata, Agrani, Rupali) operate thousands of branches across both urban hubs and remote rural grassroots.
- Government Service Delivery: SOCBs disburse civil service pensions, social safety net allowances, teacher salaries, and utility revenue collection.
- Digital Innovations: Introduction of apps like Sonali e-Sheba, Sonali e-Wallet, web payment gateways, and integration with National Payment Switch Bangladesh (NPSB).
- Conclusion: Transforming state-owned banks digitally guarantees that the benefits of Smart Bangladesh reach all citizens equally.`,
            tags: ['Focus Writing', 'English', 'State Banks', 'Digital Transformation'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-sb2021-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "সোনালী ব্যাংক দেশের সর্ববৃহৎ রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংক। আধুনিক তথ্যপ্রযুক্তি ব্যবহারের মাধ্যমে গ্রাহক সেবার মান বৃদ্ধি এবং সরকারি রাজস্ব সংগ্রহ সহজতর করা হয়েছে।"',
            solution: `Standard High-Quality Model Translation:
"Sonali Bank is the largest state-owned commercial bank in the country. Through the utilization of modern information technology, the quality of customer service has been enhanced and government revenue collection has been streamlined."`,
            tags: ['Translation', 'Bangla to English', 'Sonali Bank'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 8. Combined Bank 2020
  {
    id: 'officer-it-2020',
    title: 'Officer (IT), Combined Bank 2020',
    searchQuery: 'Officer (IT), Combined Bank 2020 question paper pdf',
    category: 'Officer (IT)',
    jobId: 'Combined-2020',
    circularYear: '2020',
    examDate: 'November 20, 2020',
    examBody: 'Bankers Selection Committee (BSCS)',
    participatingBanks: ['Sonali Bank', 'Janata Bank', 'Agrani Bank', 'Rupali Bank', 'BDBL', 'RAKUB'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Combined Bank Officer (IT) exam paper from the 2020 recruitment cycle. Covers relational algebra, singly linked list operations, round robin CPU scheduling, OSI troubleshooting, symmetric vs asymmetric encryption, and bank network design.',
    keyTopics: ['Relational Algebra', 'Linked List Operations', 'Round Robin Scheduling', 'Subnet Mask Calculation', 'OSI 7 Layers', 'Focus Writing'],
    sections: [
      {
        id: 'sec-2020-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-2020-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Write relational algebra expressions for the banking database: Branch(BranchName, BranchCity, Assets), Customer(CustomerName, CustomerStreet, CustomerCity), Loan(LoanNumber, BranchName, Amount), Borrower(CustomerName, LoanNumber):\n(a) Find all customers who have a loan at the "Motijheel" branch.\n(b) Find all loan numbers for loans with an amount greater than 5,00,000.\n(c) Find the names of all customers who live in the same city as their branch.',
            solution: `Relational Algebra Expressions:
(a) Customers with a loan at "Motijheel" branch:
π CustomerName ( σ BranchName = "Motijheel" (Borrower ⨝ Loan) )

(b) Loan numbers with amount > 5,00,000:
π LoanNumber ( σ Amount > 500000 (Loan) )

(c) Customers living in the same city as their branch:
π CustomerName ( σ CustomerCity = BranchCity (Customer ⨝ Borrower ⨝ Loan ⨝ Branch) )`,
            tags: ['Relational Algebra', 'DBMS', 'Database Queries'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2020-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C function to reverse a Singly Linked List iteratively. Provide the structure definition of the node.',
            solution: 'Standard three-pointer iterative linked list reversal: prev, curr, next.',
            codeSolution: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* reverseList(struct Node* head) {
    struct Node* prev = NULL;
    struct Node* current = head;
    struct Node* next = NULL;
    
    while (current != NULL) {
        next = current->next; // Store next node
        current->next = prev; // Reverse current node's pointer
        prev = current;       // Move prev one step forward
        current = next;       // Move current one step forward
    }
    return prev; // New head of reversed list
}`,
            solutionLanguage: 'c',
            tags: ['Data Structures', 'Linked List', 'C Language'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2020-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'List the 7 layers of the OSI model in order. For each layer, specify: (i) Primary function, (ii) Data unit (PDU), (iii) One representative protocol or hardware device.',
            solution: `1. Physical Layer:
- Function: Transmission of raw bits over physical transmission medium.
- PDU: Bit. Device: Repeater, Hub, Cables.

2. Data Link Layer:
- Function: Reliable node-to-node framing, physical MAC addressing, error detection (CRC).
- PDU: Frame. Device/Protocol: Switch, Bridge, Ethernet (802.3).

3. Network Layer:
- Function: Logical IP addressing and packet routing across multiple networks.
- PDU: Packet. Device/Protocol: Router, IPv4, IPv6, ICMP, OSPF.

4. Transport Layer:
- Function: End-to-end process communication, flow control, segmentation, error recovery.
- PDU: Segment (TCP) / Datagram (UDP). Protocols: TCP, UDP.

5. Session Layer:
- Function: Establishing, managing, and terminating dialogue sessions between applications.
- PDU: Data. Protocols: RPC, NetBIOS.

6. Presentation Layer:
- Function: Data translation, character encoding (ASCII/Unicode), compression, and encryption.
- PDU: Data. Protocols: TLS/SSL, JPEG, MPEG.

7. Application Layer:
- Function: User interface and network services interface.
- PDU: Data. Protocols: HTTP/HTTPS, FTP, SMTP, DNS.`,
            tags: ['Networking', 'OSI Model', 'Protocols', 'Network Layers'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-2020-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Symmetric-Key Cryptography vs. Asymmetric-Key Cryptography in terms of key count, computation speed, key distribution challenges, and algorithms. Explain how Hybrid Cryptography combines both in HTTPS.',
            solution: `1. Comparison:
- Key Count: Symmetric uses 1 shared secret key for both encryption and decryption. Asymmetric uses a mathematically linked key pair: Public Key for encryption, Private Key for decryption.
- Computation Speed: Symmetric (e.g. AES) is extremely fast and hardware-accelerated. Asymmetric (e.g. RSA, ECC) is computationally intensive (approx. 1000x slower).
- Key Distribution: Symmetric suffers from the chicken-and-egg key exchange problem. Asymmetric solves key distribution because public keys can be broadcast freely.
- Algorithms: Symmetric: AES-256, DES, 3DES, ChaCha20. Asymmetric: RSA, ECC, Diffie-Hellman.

2. Hybrid Cryptography in HTTPS (TLS):
- Handshake: The browser and bank server use Asymmetric cryptography (RSA or ECDHE) to authenticate the server certificate and securely negotiate a random temporary session key.
- Bulk Data Transfer: Once the session key is securely shared, they switch to high-speed Symmetric encryption (AES-GCM) to encrypt all subsequent banking transactions and HTML payloads.`,
            tags: ['Cryptography', 'Security', 'AES', 'RSA', 'HTTPS'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2020-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'What is a Deadlock in Operating Systems? Explain the difference between Deadlock Prevention and Deadlock Detection. Describe the Resource Allocation Graph (RAG) and how cycles indicate deadlocks.',
            solution: `1. Definition:
A deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process in the set.

2. Prevention vs Detection:
- Prevention: Eliminates at least one of the 4 necessary Coffman conditions (e.g. enforcing strict resource ordering to prevent Circular Wait). Ensures a deadlock can NEVER occur, but reduces resource utilization.
- Detection & Recovery: Allows processes to enter deadlock, periodically runs detection algorithms (e.g. cycle check on Wait-For Graph), and recovers by process termination or resource preemption.

3. Resource Allocation Graph (RAG):
- Directed graph with Process vertices (circles) and Resource vertices (rectangles containing dots for instances).
- Request Edge: Process -> Resource.
- Assignment Edge: Resource instance -> Process.
- Rule: If resources have only single instances, a CYCLE in the graph is both a necessary and SUFFICIENT condition for deadlock! If resources have multiple instances, a cycle is necessary but not sufficient.`,
            tags: ['Operating Systems', 'Deadlock', 'RAG', 'Concurrency'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2020-6',
            questionNo: '6',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: Account(AccNo, CustName, Branch, Balance). Write SQL queries to:\n(a) Find the second highest balance in the table without using LIMIT or OFFSET.\n(b) Find all branches having average account balance greater than 1,00,000.',
            solution: `(a) Second highest balance using MAX with subquery.
(b) GROUP BY with HAVING clause on AVG(Balance).`,
            codeSolution: `-- Query (a): Second highest balance
SELECT MAX(Balance) AS Second_Highest_Balance
FROM Account
WHERE Balance < (SELECT MAX(Balance) FROM Account);

-- Query (b): Branches with average balance > 100,000
SELECT Branch, AVG(Balance) AS Average_Balance
FROM Account
GROUP BY Branch
HAVING AVG(Balance) > 100000;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'DBMS', 'Subquery', 'HAVING'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-2020-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-2020-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Transition from Traditional Banking to Omnichannel Digital Banking in Bangladesh" (Word limit: 250 words).',
            solution: `Key Points:
- Shift from branch physical queues to anytime, anywhere banking.
- Omnichannel integration: Harmonizing mobile apps, web portals, ATM/CRM kiosks, and call center channels into a unified real-time customer profile.
- Financial Inclusion: Rapid onboarding via e-KYC and biometric verification.
- Cyber Challenges: Guarding customer authentication and continuous disaster recovery preparedness.`,
            tags: ['Focus Writing', 'English', 'Digital Banking', 'Omnichannel'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2020-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "ডিজিটাল লেনদেনের প্রসারের ফলে গ্রাহকদের ব্যাংকিং অভিজ্ঞতা দ্রুত ও সহজতর হয়েছে। তবে একই সাথে ফিশিং এবং অনলাইন প্রতারণা রোধে সচেতনতা বৃদ্ধি করা অত্যন্ত জরুরি।"',
            solution: `Standard High-Quality Model Translation:
"With the proliferation of digital transactions, customers' banking experience has become faster and easier. However, at the same time, raising awareness is of paramount importance to prevent phishing and online frauds."`,
            tags: ['Translation', 'Bangla to English', 'Digital Banking'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  }
];
