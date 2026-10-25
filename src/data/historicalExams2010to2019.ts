import { ExamPaper } from '../types/exam';

export const historicalExams2010to2019: ExamPaper[] = [
  // 21. Bangladesh Bank Assistant Director (IT / ICT) 2018
  {
    id: 'bb-ad-it-2018',
    title: 'Assistant Director (IT/ICT), Bangladesh Bank 2018',
    searchQuery: 'Bangladesh Bank Assistant Director AD IT ICT 2018 question paper solution pdf',
    category: 'Bank Senior Officer (IT)' as any,
    jobId: 'BB-AD-IT-2018',
    circularYear: '2017-2018',
    examDate: 'July 14, 2018',
    examBody: 'Bangladesh Bank / DU',
    participatingBanks: ['Bangladesh Bank (Central Bank)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The competitive Bangladesh Bank Assistant Director (IT) written test conducted in 2018. Features multi-threaded banking fund transfer in Java with thread synchronization, dynamic programming for ATM currency dispensing, CIDR /22 subnetting, SQL window subqueries, and central banking focus writing.',
    keyTopics: ['Java Thread Synchronization', 'Dynamic Programming Coin Change', 'CIDR /22 Subnetting', 'SQL Subquery Ranking', 'Core Banking Concurrency', 'Central Bank Policy Focus Writing'],
    sections: [
      {
        id: 'sec-bb-ad18-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        description: 'Computer Science, Algorithms, Databases, Networks & Central Banking Systems',
        questions: [
          {
            id: 'q-bb-ad18-1',
            questionNo: '1 (a)',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a thread-safe Java class `BankAccount` with methods `deposit(double amount)` and `withdraw(double amount)`. Explain how `synchronized` keyword prevents the Lost Update problem when two threads attempt concurrent withdrawals from the same account.',
            solution: `Thread Synchronization & Lost Update Explanation:
1. The Concurrency Issue (Race Condition / Lost Update):
If two threads (Thread 1 withdrawing 5,000 and Thread 2 withdrawing 3,000 from an account with initial balance 10,000) execute concurrently without synchronization:
- Both read balance = 10,000.
- Thread 1 computes 10,000 - 5,000 = 5,000.
- Thread 2 computes 10,000 - 3,000 = 7,000.
- Thread 2 writes 7,000, overwriting Thread 1's deduction. The bank loses BDT 5,000!

2. Prevention via Java Synchronized Monitor Lock:
- Marking the methods as \`synchronized\` forces each thread to acquire the intrinsic monitor lock of the \`BankAccount\` instance before executing.
- Thread 2 is placed in the BLOCKED state until Thread 1 finishes its deduction and releases the lock, guaranteeing strict serializability.`,
            codeSolution: `public class BankAccount {
    private final String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public synchronized void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive.");
        }
        this.balance += amount;
        System.out.println(Thread.currentThread().getName() + " deposited BDT " + amount 
            + ". New Balance: BDT " + this.balance);
    }

    public synchronized boolean withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive.");
        }
        if (this.balance >= amount) {
            this.balance -= amount;
            System.out.println(Thread.currentThread().getName() + " withdrew BDT " + amount 
                + ". Remaining Balance: BDT " + this.balance);
            return true;
        } else {
            System.out.println(Thread.currentThread().getName() + " INSUFFICIENT FUNDS. Failed to withdraw BDT " + amount);
            return false;
        }
    }

    public synchronized double getBalance() {
        return this.balance;
    }
}`,
            solutionLanguage: 'java',
            tags: ['Java', 'Multithreading', 'Synchronization', 'Banking', 'Bangladesh Bank AD'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-bb-ad18-2',
            questionNo: '1 (b)',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Given standard Bangladesh currency banknotes [1000, 500, 200, 100, 50, 20, 10]. Write a Dynamic Programming or Greedy algorithm in Python to dispense a target withdrawal amount with the minimum total number of notes at an ATM booth.',
            solution: 'Canonical coin-change problem. Since Bangladeshi currency denominations form a canonical coin system, the Greedy algorithm produces the optimal minimum number of notes in O(D) time, where D is the number of denominations.',
            codeSolution: `def dispense_atm_cash(amount: int) -> dict:
    """
    Computes minimum banknote count for an ATM withdrawal.
    Bangladeshi currency denominations: 1000, 500, 200, 100, 50, 20, 10
    """
    if amount <= 0 or amount % 10 != 0:
        raise ValueError("Amount must be a positive multiple of 10.")
        
    denominations = [1000, 500, 200, 100, 50, 20, 10]
    note_breakdown = {}
    total_notes = 0
    remaining = amount
    
    for note in denominations:
        if remaining >= note:
            count = remaining // note
            note_breakdown[f"BDT {note}"] = count
            total_notes += count
            remaining %= note
            
    return {
        "requested_amount": amount,
        "total_notes_dispensed": total_notes,
        "note_breakdown": note_breakdown
    }

# Example: Withdraw BDT 18,780
dispense_result = dispense_atm_cash(18780)
print(f"Total Notes: {dispense_result['total_notes_dispensed']}")
for note, qty in dispense_result['note_breakdown'].items():
    print(f"  {note} x {qty} notes")`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Greedy', 'Dynamic Programming', 'ATM Cash Dispense'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ad18-3',
            questionNo: '2',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'An enterprise bank data center is assigned the network block `10.200.0.0/22`. The network architect must carve out subnets with at least 120 host machines per branch. (a) What is the maximum number of such subnets that can be created? (b) What will be the new subnet mask? (c) State the Network, Usable Host Range, and Broadcast Address of the 1st and 8th subnets.',
            solution: `Subnet Calculation for /22:
1. Requirements:
- At least 120 usable hosts per subnet.
- Formula: 2^h - 2 >= 120 => h = 7 bits (2^7 - 2 = 126 usable hosts).
- Total host bits in IPv4: 32 - 7 = 25 network bits (/25 prefix).

2. Number of Subnets:
- Original prefix: /22. New prefix: /25.
- Borrowed bits: 25 - 22 = 3 bits.
- Number of subnets created: 2^3 = 8 equal subnets.

3. New Subnet Mask:
- /25 in dotted decimal: 255.255.255.128.
- Block size in 4th octet: 256 - 128 = 128.
- Note: /22 spans across 3rd octets from 10.200.0.0 to 10.200.3.255.

4. Allocation:
- 1st Subnet:
  * Network: 10.200.0.0
  * Usable Hosts: 10.200.0.1 to 10.200.0.126
  * Broadcast: 10.200.0.127
- 8th Subnet (Last subnet):
  * Network: 10.200.3.128
  * Usable Hosts: 10.200.3.129 to 10.200.3.254
  * Broadcast: 10.200.3.255`,
            tags: ['Networking', 'Subnetting', 'CIDR /22', 'Bangladesh Bank AD'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ad18-4',
            questionNo: '3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: Account(AccNo, CustID, Balance), Transaction(TxnID, AccNo, Amount, TxnDate). Write an SQL query to find the 3rd highest transaction amount carried out in each month of 2018 using Window Functions.',
            solution: 'Window function DENSE_RANK() partitioned by EXTRACT(MONTH FROM TxnDate) and ordered by Amount descending.',
            codeSolution: `WITH MonthlyRankedTxn AS (
    SELECT 
        EXTRACT(MONTH FROM TxnDate) AS TxnMonth,
        TxnID,
        AccNo,
        Amount,
        TxnDate,
        DENSE_RANK() OVER (
            PARTITION BY EXTRACT(MONTH FROM TxnDate)
            ORDER BY Amount DESC
        ) AS rank_in_month
    FROM Transaction
    WHERE TxnDate >= '2018-01-01' AND TxnDate <= '2018-12-31'
)
SELECT TxnMonth, TxnID, AccNo, Amount, TxnDate
FROM MonthlyRankedTxn
WHERE rank_in_month = 3
ORDER BY TxnMonth;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'DENSE_RANK', 'Database'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ad18-5',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'State and explain the 4 Necessary Conditions for Deadlock (Coffman Conditions). Explain how modern operating systems break the Circular Wait condition to guarantee deadlock prevention.',
            solution: `1. Coffman Deadlock Conditions:
1. Mutual Exclusion: At least one resource is held in a non-shareable mode.
2. Hold and Wait: A process currently holding at least one resource is waiting to acquire additional resources held by other processes.
3. No Preemption: Resources cannot be forcibly taken away; they are released only voluntarily by the holding process upon completion.
4. Circular Wait: A closed chain of processes P0, P1, ..., Pn exists such that P0 is waiting for a resource held by P1, P1 is waiting for P2, and Pn is waiting for P0.

2. Breaking Circular Wait:
- Impose a strict total ordering on all resource types: F: R -> N (e.g., Disk=1, Tape=2, Printer=3, Database Lock=4).
- Protocol: A process can only request resources in strictly monotonically increasing order of enumeration.
- Proof of Deadlock Freedom: If a circular wait P0 -> P1 -> ... -> P0 existed, the resource index would have to strictly increase along the cycle, which is a mathematical impossibility.`,
            tags: ['Operating Systems', 'Deadlock', 'Coffman Conditions', 'Circular Wait'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ad18-6',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain Public Key Cryptography and how Digital Certificates (X.509) establish trust in Bangladesh National Public Key Infrastructure (PKI). What role does Certificate Revocation List (CRL) and Online Certificate Status Protocol (OCSP) play?',
            solution: `1. X.509 Digital Certificates:
An electronic credential binding a public key to an entity's verified identity (e.g. Bangladesh Bank server, commercial bank switch). Signed by a trusted Certifying Authority (CA) using its private key.

2. CRL vs. OCSP:
- CRL (Certificate Revocation List): A periodic published list of serial numbers of revoked certificates (due to private key compromise or employee termination). Client downloads the entire list. (Downside: Large bandwidth overhead and caching delay).
- OCSP (Online Certificate Status Protocol): Real-time query protocol (RFC 6960). The client asks the CA responder: "Is certificate serial number X valid right now?" The responder replies instantly with Good, Revoked, or Unknown without downloading full CRLs.`,
            tags: ['Cybersecurity', 'PKI', 'Digital Certificates', 'X.509', 'OCSP'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-bb-ad18-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-bb-ad18-7',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Role of Central Bank in Regulating Mobile Financial Services and Fostering Financial Inclusion in Bangladesh" (Word limit: 300 words).',
            solution: `Key Structure:
- Historical Context: Promulgation of Bangladesh Bank MFS Guidelines in 2011 requiring bank-led or bank-subsidiary models.
- Groundbreaking Impact: MFS platforms (bKash, Rocket, Nagad) turned millions of unbanked citizens into digital wallet holders.
- Central Bank Guardrails: Daily and monthly transaction caps, mandatory biometric e-KYC integration with Election Commission NID, and Anti-Money Laundering (AML) monitoring.
- Interoperability: Establishing National Payment Switch Bangladesh (NPSB) and Binimoy to enable frictionless fund transfers across different banks and MFS wallets.`,
            tags: ['Focus Writing', 'English', 'Central Bank', 'MFS', 'Financial Inclusion'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ad18-8',
            questionNo: '7',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "বাংলাদেশ ব্যাংক দেশের সকল তফসিলি ব্যাংকের তথ্যপ্রযুক্তি নিরাপত্তা কার্যক্রম সার্বক্ষণিকভাবে তদারকি করে। গ্রাহকের আমানত সুরক্ষা এবং জাতীয় পেমেন্ট সুইচের নির্ভরযোগ্যতা রক্ষা করাই কেন্দ্রীয় ব্যাংকের অন্যতম প্রধান দায়িত্ব।"',
            solution: `Standard High-Quality Model Translation:
"Bangladesh Bank continuously monitors the information technology security operations of all scheduled banks in the country. Protecting customers' deposits and safeguarding the reliability of the National Payment Switch constitute among the primary responsibilities of the central bank."`,
            tags: ['Translation', 'Bangla to English', 'Central Bank IT'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 22. Bangladesh Bank Assistant Programmer 2019
  {
    id: 'bb-ap-2019',
    title: 'Assistant Programmer, Bangladesh Bank 2019',
    searchQuery: 'Bangladesh Bank Assistant Programmer 2019 question paper solution pdf',
    category: 'Bank Assistant Programmer',
    jobId: 'BB-AP-2019',
    circularYear: '2019',
    examDate: 'October 18, 2019',
    examBody: 'Bangladesh Bank',
    participatingBanks: ['Bangladesh Bank'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The 2019 Bangladesh Bank Assistant Programmer written examination. Covers SOAP vs REST with WS-Security, PHP PDO secure prepared statements against SQLi, Merge Sort algorithms, OSI vs TCP/IP, and focus writing on digital banking security.',
    keyTopics: ['SOAP vs REST WS-Security', 'SQL Injection Mitigation', 'Merge Sort Algorithm', 'Virtual Memory Paging', 'Focus Writing'],
    sections: [
      {
        id: 'sec-bb-ap19-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-bb-ap19-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'What is SOAP (Simple Object Access Protocol)? Compare SOAP and REST in the context of inter-bank financial communications and National Payment Switch Bangladesh (NPSB). Why is WS-Security in SOAP still favored in legacy core banking switches?',
            solution: `1. SOAP Protocol:
SOAP is a strict XML-based messaging protocol specification for exchanging structured information in decentralized, distributed environments using HTTP, SMTP, or TCP.

2. SOAP vs. REST Comparison:
- Architecture: SOAP is a formal protocol with rigid contracts (WSDL). REST is an architectural style based on HTTP verbs and lightweight payloads (JSON).
- Payload Size: SOAP messages are bulky due to XML envelope overhead. REST with JSON has minimal overhead and faster parsing.
- Transport: SOAP is transport-agnostic (HTTP, SMTP, JMS). REST is tightly bound to HTTP/HTTPS.

3. Why WS-Security in SOAP is favored in Banking Switches:
- End-to-End Message-Level Encryption: While HTTPS only provides point-to-point encryption (traffic is decrypted at intermediary proxies or load balancers), SOAP WS-Security encrypts the XML payload itself with digital signatures and XML Encryption. Even if a message passes through multiple intermediate routing gateways, only the destination bank holds the private key to decrypt sensitive cardholder PIN blocks.
- ACID Transaction Support: SOAP supports WS-AtomicTransaction for distributed two-phase commit across legacy mainframe switches.`,
            tags: ['Software Engineering', 'SOAP', 'REST', 'WS-Security', 'NPSB', 'FinTech'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-bb-ap19-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Database & SQL',
            questionText: 'Explain how SQL Injection occurs in web login forms. Provide an example of vulnerable code and write the secure PHP implementation using PDO with Prepared Statements and Parameterized Queries.',
            solution: "SQL Injection happens when user input is concatenated directly into SQL queries, altering query logic. Prepared statements separate query structure from user data.",
            codeSolution: `<?php
// Secure Login Implementation using PHP Data Objects (PDO)

$host = 'localhost';
$db   = 'cbs_bank';
$user = 'cbs_user';
$pass = 'SecretPass123';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}

function verifyUserLogin($pdo, $username, $passwordInput) {
    $stmt = $pdo->prepare("SELECT user_id, password_hash, role, is_active FROM users WHERE username = :username LIMIT 1");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch();

    if ($user && $user['is_active']) {
        if (password_verify($passwordInput, $user['password_hash'])) {
            return $user;
        }
    }
    return false;
}
?>`,
            solutionLanguage: 'php',
            tags: ['Web Security', 'SQL Injection', 'PHP', 'PDO', 'Prepared Statements'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap19-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C++ program implementing the Merge Sort algorithm on an array of integers. Derive its recurrence relation and analyze its time and space complexity.',
            solution: 'Merge Sort divide-and-conquer implementation with O(N log N) time and O(N) auxiliary space.',
            codeSolution: `#include <iostream>
#include <vector>

void merge(std::vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    std::vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(std::vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    std::vector<int> data = {38, 27, 43, 3, 9, 82, 10};
    mergeSort(data, 0, data.size() - 1);
    std::cout << "Sorted: ";
    for (int x : data) std::cout << x << " ";
    std::cout << "\\n";
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['Algorithms', 'Merge Sort', 'Divide and Conquer', 'C++'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap19-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: Customer(CustID, Name, BranchCode), Account(AccNo, CustID, Balance), Branch(BranchCode, BranchName, District). Write an SQL query to find the Customer Name and Account Balance of the richest customer in each District.',
            solution: 'Join Customer, Account, Branch, and use Window function DENSE_RANK() partitioned by District.',
            codeSolution: `WITH RankedDistrictCustomers AS (
    SELECT 
        b.District,
        c.Name AS CustomerName,
        a.Balance,
        DENSE_RANK() OVER (
            PARTITION BY b.District 
            ORDER BY a.Balance DESC
        ) AS rnk
    FROM Customer c
    JOIN Account a ON c.CustID = a.CustID
    JOIN Branch b ON c.BranchCode = b.BranchCode
)
SELECT District, CustomerName, Balance
FROM RankedDistrictCustomers
WHERE rnk = 1
ORDER BY District;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'DENSE_RANK', 'DBMS'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap19-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain Virtual Memory and Paging in Operating Systems. What is Page Replacement and how does the Least Recently Used (LRU) algorithm compare with First-In-First-Out (FIFO) regarding Belady’s Anomaly?',
            solution: `1. Paging & Page Replacement:
When a page fault occurs and no free memory frames exist in RAM, the OS must choose a victim page to swap out to disk using a Page Replacement Algorithm.

2. LRU vs. FIFO and Belady's Anomaly:
- Belady's Anomaly: The counter-intuitive phenomenon where increasing the number of physical page frames results in an INCREASE in the number of page faults!
- FIFO: Frequently suffers from Belady's anomaly because it evicts the oldest page regardless of how frequently it is accessed.
- LRU (Least Recently Used): Evicts the page that has not been accessed for the longest time. Belady's Anomaly NEVER occurs in LRU because LRU belongs to the class of Stack Algorithms (the set of pages in an n-frame memory is always a subset of pages in an (n+1)-frame memory).`,
            tags: ['Operating Systems', 'Virtual Memory', 'LRU', 'Belady Anomaly'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap19-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare the OSI 7-Layer Architecture with the TCP/IP 4-Layer Architecture. Explain how packet encapsulation and de-encapsulation occur as an HTTP request traverses from the application layer to the physical cable.',
            solution: `1. OSI vs. TCP/IP Mapping:
- OSI Layers 7, 6, 5 (Application, Presentation, Session) map to TCP/IP Application Layer.
- OSI Layer 4 (Transport) maps to TCP/IP Transport Layer (TCP, UDP).
- OSI Layer 3 (Network) maps to TCP/IP Internet Layer (IP, ICMP, ARP).
- OSI Layers 2, 1 (Data Link, Physical) map to TCP/IP Network Access / Link Layer (Ethernet, Wi-Fi).

2. Packet Encapsulation:
- Application Data -> Wrapped with TCP Header (Source/Dest Port, Seq No) = TCP Segment.
- Segment -> Wrapped with IP Header (Source/Dest IP, TTL) = IP Packet.
- Packet -> Wrapped with Ethernet Header (Source/Dest MAC) and FCS trailer (CRC) = Ethernet Frame.
- Frame -> Converted into electrical voltages or optical laser pulses (Bits) and transmitted across physical media.`,
            tags: ['Networking', 'OSI Model', 'TCP/IP', 'Encapsulation'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-bb-ap19-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-bb-ap19-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Future of Open Banking and Interoperable Financial APIs in Bangladesh" (Word limit: 250 words).',
            solution: `Key Structure:
- Concept of Open Banking: Secure sharing of financial data between commercial banks and authorized third-party FinTech providers through standardized APIs with customer consent.
- Regulatory Framework: Bangladesh Bank guidance on API security (OAuth 2.0, mTLS) and customer data sovereignty.
- Catalyzing Innovation: Enables multi-bank personal finance management apps, automated credit scoring, and instant payment initiation.
- Conclusion: Open banking transforms commercial banks from closed silos into dynamic digital financial ecosystems.`,
            tags: ['Focus Writing', 'English', 'Open Banking', 'FinTech APIs'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap19-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "ইন্টারনেট ব্যাংকিং এবং ডিজিটাল ওয়ালেটের জনপ্রিয়তা বৃদ্ধির কারণে লেনদেনের সংখ্যা বহুগুণ বৃদ্ধি পেয়েছে। সার্ভারের ডাউনটাইম শূন্যের কোঠায় নামিয়ে আনতে ব্যাংকগুলোকে ক্লাউড ব্যাকআপ নিশ্চিত করতে হবে।"',
            solution: `Standard High-Quality Model Translation:
"Owing to the surge in popularity of internet banking and digital wallets, the volume of transactions has multiplied significantly. To reduce server downtime to zero, banks must ensure cloud backups."`,
            tags: ['Translation', 'Bangla to English', 'Cloud Backup'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 23. Combined 8 Banks Senior Officer (IT) 2019
  {
    id: 'so-it-combined-2019',
    title: 'SO (IT), Combined 8 Banks 2019',
    searchQuery: 'Combined 8 Banks Senior Officer IT 2019 question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: 'Combined-8Bank-2019',
    circularYear: '2019',
    examDate: 'August 30, 2019',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank', 'Janata Bank', 'Agrani Bank', 'Rupali Bank', 'BDBL', 'BKB', 'RAKUB', 'PKB'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Senior Officer (IT) exam across 8 commercial and specialized banks. High focus on Boyce-Codd Normal Form (BCNF), BGP vs OSPF routing, Depth First Search, SQL audit triggers, and clearing house cybersecurity.',
    keyTopics: ['BCNF Decomposition', 'B+ Tree Node Split', 'BGP vs OSPF', 'Depth First Search', 'SQL Triggers', 'Focus Writing'],
    sections: [
      {
        id: 'sec-c8b19-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-c8b19-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Given the schema R(A, B, C, D) with FDs: { AB -> C, C -> D, D -> A }. (i) Find all Candidate Keys. (ii) Check if R is in BCNF. (iii) If not, decompose R into BCNF.',
            solution: `Step-by-step BCNF Decomposition:
(i) Candidate Keys:
- Closure of {AB}: AB+ = {A, B, C, D}. Hence {AB} is a Candidate Key.
- Closure of {BC}: BC+ = {B, C, D, A}. Hence {BC} is a Candidate Key.
- Closure of {BD}: BD+ = {B, D, A, C}. Hence {BD} is a Candidate Key.
Candidate Keys of R are: {AB}, {BC}, {BD}. Prime attributes are: A, B, C, D.

(ii) BCNF Check:
- AB -> C: AB is a superkey (Valid in BCNF).
- C -> D: C is NOT a superkey (BC+ is, but C alone cannot derive B). Violates BCNF!
- D -> A: D is NOT a superkey. Violates BCNF!
Therefore, relation R is NOT in BCNF.

(iii) Decomposition into BCNF:
1. For violating FD C -> D (C is not a superkey):
   - R1(C, D) with Primary Key C. (In BCNF since C is key of R1).
   - Remaining: R2(A, B, C).
2. Check R2(A, B, C):
   - Dependencies on R2: AB -> C.
   - Candidate key of R2 is {AB}. AB is a superkey of R2.
   - Thus R2(A, B, C) is already in BCNF.
Final Lossless BCNF Relations:
- R1(C, D) [Key: C]
- R2(A, B, C) [Key: AB].`,
            tags: ['DBMS', 'BCNF', 'Normalization', 'Candidate Keys'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-c8b19-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Interior Gateway Protocols (IGP) like OSPF with Exterior Gateway Protocols (EGP) like BGP. Explain why BGP uses Path Vector routing over TCP port 179 instead of Dijkstra link-state routing.',
            solution: `1. OSPF vs. BGP Comparison:
- Domain: OSPF operates INSIDE an autonomous system (single bank WAN intranet). BGP operates BETWEEN independent autonomous systems (inter-bank networks, ISPs, SWIFT gateway).
- Metric: OSPF uses Link Cost (bandwidth). BGP uses Path Vector policy attributes (AS-Path length, Local Preference, Multi-Exit Discriminator).
- Transport: OSPF runs directly over IP (protocol 89). BGP runs over reliable TCP (port 179).

2. Why BGP Uses Path Vector Instead of Link-State (Dijkstra):
- Scalability to Global Internet Scale: Link-state protocols require every router to store the complete topology graph of the entire network. At global scale (1,000,000+ routes), running Dijkstra's algorithm would exhaust router CPU and memory.
- Loop Prevention: In BGP, every routing update contains the complete sequence of Autonomous System numbers (AS-Path). If a router sees its own AS number in the list, it immediately drops the route, eliminating loops without complex graph calculations.
- Policy-Based Routing: Banks require routing based on business contracts and compliance rather than technical shortest path. BGP permits granular policy filtering.`,
            tags: ['Networking', 'OSPF', 'BGP', 'Path Vector', 'Routing Protocols'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-c8b19-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python program implementing Depth First Search (DFS) on a graph using recursion. Explain how DFS can be used to detect cycles in a directed graph representing bank account dependencies.',
            solution: 'Recursive DFS implementation with visited and recursion-stack sets for cycle detection.',
            codeSolution: `def detect_cycle_dfs(graph: dict[str, list[str]]) -> bool:
    """
    Detects cycle in a directed graph using DFS and recursion stack.
    """
    visited = set()
    rec_stack = set()
    
    def dfs(node: str) -> bool:
        visited.add(node)
        rec_stack.add(node)
        
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True # Back-edge found -> Cycle detected!
                
        rec_stack.remove(node)
        return False

    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    return False

# Example: Directed Transaction Loop
txn_graph = {
    'AccA': ['AccB'],
    'AccB': ['AccC'],
    'AccC': ['AccA'] # Cycle!
}
print("Cycle Detected:", detect_cycle_dfs(txn_graph))`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'DFS', 'Cycle Detection', 'Graph Theory'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-c8b19-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Write an SQL trigger that automatically enforces a business constraint: "No customer is permitted to withdraw more than BDT 50,000 in a single transaction from an ATM terminal between 11 PM and 6 AM."',
            solution: 'BEFORE INSERT trigger on Transaction table validating time of day and terminal type.',
            codeSolution: `CREATE OR REPLACE FUNCTION enforce_night_atm_limit()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.TxnType = 'ATM_WITHDRAW' AND NEW.Amount > 50000 THEN
        IF EXTRACT(HOUR FROM NEW.TxnDate) >= 23 OR EXTRACT(HOUR FROM NEW.TxnDate) < 6 THEN
            RAISE EXCEPTION 'Night-time ATM withdrawal limit exceeded (Max: BDT 50,000 between 11 PM and 6 AM).';
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_night_atm_limit
BEFORE INSERT ON Transaction
FOR EACH ROW
EXECUTE FUNCTION enforce_night_atm_limit();`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Triggers', 'Business Logic', 'ATM Security'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-c8b19-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain the working of Linux Shell pipe (`|`) and standard I/O redirection (`>`, `>>`, `2>`). Provide real-world system administrator command examples for analyzing Apache/Nginx web server access logs.',
            solution: `1. Redirection & Pipes:
- Standard Streams: stdin (0), stdout (1), stderr (2).
- \`>\`: Overwrites stdout to a file.
- \`>>\`: Appends stdout to a file.
- \`2>\`: Redirects stderr to a file (e.g. \`2> error.log\`).
- Pipe (\`|\`): Connects the stdout of one process directly to the stdin of the next.

2. Real-World Log Analysis Command:
Find the top 5 IP addresses hitting the bank internet portal with 403 Forbidden errors:
\`cat /var/log/nginx/access.log | grep " 403 " | awk '{print $1}' | sort | uniq -c | sort -nr | head -n 5\``,
            tags: ['Linux', 'Shell Redirection', 'Pipes', 'Log Analysis'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-c8b19-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Differentiate between Monolithic Architecture and Microservices Architecture for a Core Banking platform. How does database management differ between the two (Shared Database vs. Database-per-Service)?',
            solution: `1. Monolith vs Microservices:
- Monolith: All banking modules (Loans, Deposits, Cards, Auth) share a single codebase and a single large relational database schema.
  * Trade-off: High transactional consistency (ACID joins), but single point of failure and difficult to scale independently.
- Microservices: Each domain operates as an autonomous service running in separate containers and maintaining its own isolated database (Database-per-Service).
  * Trade-off: Polyglot persistence and independent scalability, but requires distributed saga patterns to maintain eventual consistency across services.`,
            tags: ['System Design', 'Microservices', 'Monolith', 'Core Banking'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-c8b19-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-c8b19-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Cyber Security Challenges in the Automated Clearing House (BACPS) and Real-Time Settlement Networks" (Word limit: 250 words).',
            solution: `Key Structure:
- Central clearing infrastructure: Bangladesh Automated Clearing House (BACPS) handles electronic cheque clearing (BACIS) and electronic fund transfers (BEFTN).
- Attack Vectors: Digital cheque image alteration, unauthorized batch instruction insertion, and man-in-the-middle transmission tampering.
- Defensive Mandates: Public Key Infrastructure (PKI) digital signatures on all batch clearing files, dedicated private IPsec circuits, and automated dual-authorization (Maker-Checker) controls.`,
            tags: ['Focus Writing', 'English', 'BACPS', 'Clearing House', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-c8b19-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "আটটি রাষ্ট্রায়ত্ত বাণিজ্যিক ও বিশেষায়িত ব্যাংক দেশের অর্থনৈতিক উন্নয়নে একযোগে কাজ করছে। প্রযুক্তিগত উৎকর্ষ সাধনের মাধ্যমে এই ব্যাংকগুলো গ্রাহকদের বিশ্বমানের ব্যাংকিং সেবা প্রদানে অঙ্গীকারবদ্ধ।"',
            solution: `Standard High-Quality Model Translation:
"Eight state-owned commercial and specialized banks are working in concert for the economic development of the country. Through attaining technological excellence, these banks are committed to delivering world-class banking services to their customers."`,
            tags: ['Translation', 'Bangla to English', 'Combined 8 Banks'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 24. Combined 5 Banks Officer (IT) 2018
  {
    id: 'officer-it-combined-2018',
    title: 'Officer (IT), Combined 5 Banks 2018',
    searchQuery: 'Combined 5 Banks Officer IT 2018 question paper pdf',
    category: 'Officer (IT)',
    jobId: 'Combined-5Bank-2018',
    circularYear: '2018',
    examDate: 'November 16, 2018',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank', 'Janata Bank', 'Agrani Bank', 'Rupali Bank', 'BDBL'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Combined Bank Officer (IT) 2018 paper. Covers Operating System CPU Scheduling (Shortest Job First with Gantt Chart), C programming for string manipulation without library functions, Subnetting /25, 3NF normalization, and focus writing on cashless society.',
    keyTopics: ['CPU Scheduling SJF Gantt Chart', 'C String Manipulation', 'Subnetting /25', 'Operating Systems Virtual Memory', 'Focus Writing'],
    sections: [
      {
        id: 'sec-c5b18-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-c5b18-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Consider processes P1, P2, P3, P4 with Arrival Times (0, 1, 2, 3) and Burst Times (8, 4, 9, 5) ms. (a) Draw the Gantt Chart for Preemptive Shortest Remaining Time First (SRTF) scheduling. (b) Calculate the Average Waiting Time and Average Turnaround Time.',
            solution: `Preemptive SRTF Scheduling Calculation:
1. Timeline & Gantt Chart:
- Time 0: Only P1 arrives (Remaining: 8). P1 runs from 0 to 1.
- Time 1: P2 arrives (Burst: 4). P1 remaining is 7. P2 has shorter remaining time (4 < 7). P1 preempted, P2 runs from 1 to 2.
- Time 2: P3 arrives (Burst: 9). P2 remaining is 3. P2 continues.
- Time 3: P4 arrives (Burst: 5). P2 remaining is 2. P2 continues until completion at time 5.
- Time 5: P2 completed! Remaining processes: P1 (7), P3 (9), P4 (5). P4 has shortest remaining time (5). P4 runs from 5 to 10.
- Time 10: P4 completed! Remaining: P1 (7), P3 (9). P1 runs from 10 to 17.
- Time 17: P1 completed! P3 runs from 17 to 26.
Gantt Chart: | P1 (0-1) | P2 (1-5) | P4 (5-10) | P1 (10-17) | P3 (17-26) |

2. Turnaround Time (TAT = Completion - Arrival):
- P1: Completion = 17, TAT = 17 - 0 = 17 ms
- P2: Completion = 5, TAT = 5 - 1 = 4 ms
- P3: Completion = 26, TAT = 26 - 2 = 24 ms
- P4: Completion = 10, TAT = 10 - 3 = 7 ms
Average Turnaround Time = (17 + 4 + 24 + 7) / 4 = 52 / 4 = 13.0 ms.

3. Waiting Time (WT = TAT - Burst Time):
- P1: 17 - 8 = 9 ms
- P2: 4 - 4 = 0 ms
- P3: 24 - 9 = 15 ms
- P4: 7 - 5 = 2 ms
Average Waiting Time = (9 + 0 + 15 + 2) / 4 = 26 / 4 = 6.5 ms.`,
            tags: ['Operating Systems', 'CPU Scheduling', 'SRTF', 'Gantt Chart'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-c5b18-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a program in C to check whether a given string is a Palindrome without using any built-in string library functions (like `strlen()`, `strcpy()`, or `strcmp()`).',
            solution: 'C program measuring length manually and using two pointers (left and right) moving toward the center.',
            codeSolution: `#include <stdio.h>

int main() {
    char str[100];
    int length = 0;
    int isPalindrome = 1;

    printf("Enter a string: ");
    if (scanf("%99s", str) != 1) return 1;

    while (str[length] != '\\0') {
        length++;
    }

    int left = 0;
    int right = length - 1;

    while (left < right) {
        if (str[left] != str[right]) {
            isPalindrome = 0;
            break;
        }
        left++;
        right--;
    }

    if (isPalindrome) {
        printf("The string \\"%s\\" is a PALINDROME.\\n", str);
    } else {
        printf("The string \\"%s\\" is NOT a palindrome.\\n", str);
    }

    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['Programming', 'C Language', 'Palindrome', 'String Manipulation'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-c5b18-3',
            questionNo: '3',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'Given the Class C network block 192.168.1.0/24, divide it into two equal subnets. State: (a) Subnet Mask in slash and dotted-decimal notation, (b) Network Address, Usable Host Range, and Broadcast Address for each subnet.',
            solution: `1. Borrow 1 bit from host portion:
- Original prefix: /24. New prefix: /25.
- Subnet mask: 255.255.255.128.
- Usable hosts per subnet = 2^7 - 2 = 126 hosts.

2. Subnet Details:
- Subnet 1:
  * Network: 192.168.1.0
  * Usable Hosts: 192.168.1.1 to 192.168.1.126
  * Broadcast: 192.168.1.127
- Subnet 2:
  * Network: 192.168.1.128
  * Usable Hosts: 192.168.1.129 to 192.168.1.254
  * Broadcast: 192.168.1.255`,
            tags: ['Networking', 'Subnetting', 'IPv4', 'CIDR /25'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-c5b18-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: Account(AccNo, CustName, Branch, Balance). Write SQL queries to:\n(a) Find the total deposit balance of each branch.\n(b) Find branches whose total deposit exceeds BDT 10,00,000.',
            solution: 'Group by with SUM and HAVING filter.',
            codeSolution: `-- Query (a) and (b)
SELECT Branch, SUM(Balance) AS Total_Deposit
FROM Account
GROUP BY Branch
HAVING SUM(Balance) > 1000000
ORDER BY Total_Deposit DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'GROUP BY', 'HAVING', 'DBMS'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-c5b18-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain Database Normalization: Differentiate between 1NF, 2NF, and 3NF. How does eliminating partial and transitive dependencies prevent insertion, update, and deletion anomalies?',
            solution: `1. First Normal Form (1NF):
Eliminates repeating groups and ensures every column holds atomic (single) values with a designated primary key.

2. Second Normal Form (2NF):
Must be in 1NF, and no non-prime attribute may be partially dependent on a proper subset of any composite candidate key. Eliminates partial dependency.

3. Third Normal Form (3NF):
Must be in 2NF, and no non-prime attribute may transitively depend on another non-prime attribute (X -> Y where X is not a superkey). Eliminates transitive dependency.

4. Prevention of Anomalies:
Separating independent entities into distinct relations prevents having to delete customer data when a branch is removed (deletion anomaly) or repeating branch address across thousands of accounts (update anomaly).`,
            tags: ['DBMS', 'Normalization', '3NF', 'Database Anomalies'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-c5b18-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the working of the Address Resolution Protocol (ARP). What is ARP Spoofing (ARP Poisoning) and how does Dynamic ARP Inspection (DAI) on managed switches prevent it?',
            solution: `1. Address Resolution Protocol (ARP):
Resolves a known Layer 3 logical IP address to a Layer 2 physical MAC address on a local Ethernet broadcast domain using ARP Request (broadcast) and ARP Reply (unicast).

2. ARP Spoofing (Poisoning):
An attacker broadcasts forged gratuitous ARP replies claiming the IP of the default gateway has the attacker's MAC address. Victim workstations poison their ARP caches, routing all outbound internet/banking traffic through the attacker (Man-in-the-Middle).

3. Mitigation with Dynamic ARP Inspection (DAI):
Enterprise managed switches maintain a trusted binding database (via DHCP Snooping). When an ARP packet arrives on an untrusted port, the switch inspects the IP-to-MAC mapping. If it does not match the valid DHCP lease, the packet is instantly dropped.`,
            tags: ['Networking', 'ARP', 'ARP Spoofing', 'Cybersecurity', 'DAI'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-c5b18-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-c5b18-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Transition toward a Cashless Society in Bangladesh: Opportunities and Bottlenecks" (Word limit: 250 words).',
            solution: `Key Points:
- Growth of MFS, debit/credit cards, and internet banking.
- Economic gains: Reduced printing and handling costs of paper banknotes, curtailing counterfeit currency, and expanding the formal tax net.
- Bottlenecks: Resistance by small retail vendors, transaction charges, and cybersecurity anxieties among rural users.
- Conclusion: Universal QR standards (Bangla QR) and financial literacy will drive sustainable adoption.`,
            tags: ['Focus Writing', 'English', 'Cashless Society', 'Digital Economy'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-c5b18-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "প্রযুক্তিনির্ভর ব্যাংকিং সেবা দেশের মানুষের জীবনযাত্রাকে সহজতর করেছে। তবে একই সাথে গ্রাহকদের গোপন পিন এবং ওটিপি কারো সাথে শেয়ার না করার ব্যাপারে কঠোর সতর্কবার্তা প্রদান করা হচ্ছে।"',
            solution: `Standard High-Quality Model Translation:
"Technology-driven banking services have streamlined the livelihood of the country's populace. Nonetheless, stringent advisories are simultaneously being issued to customers against sharing their confidential PINs and OTPs with anyone."`,
            tags: ['Translation', 'Bangla to English', 'Banking Security'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 25. BPSC Non-Cadre Assistant Programmer 2017 (Multiple Ministries)
  {
    id: 'ap-bpsc-2017',
    title: 'Assistant Programmer, BPSC Multiple Ministries 2017',
    searchQuery: 'BPSC Assistant Programmer Multiple Ministries 2017 written question solution pdf',
    category: 'Ministry Assistant Programmer',
    jobId: 'BPSC-AP-2017',
    circularYear: '2016-2017',
    examDate: 'March 11, 2017',
    examBody: 'BPSC (Bangladesh Public Service Commission)',
    participatingBanks: ['Ministry of ICT', 'Ministry of Public Administration', 'Cabinet Division'],
    ministryOrDepartment: 'Multiple Ministries (Non-Cadre)',
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Historic 2017 BPSC Non-Cadre examination for Assistant Programmer. Covers software testing levels (Unit, Integration, System, UAT), cache memory mapping techniques, C linked list algorithms, e-GP public procurement, and English focus writing.',
    keyTopics: ['Computer Bus Architecture', 'Cache Memory Mapping', 'Software Testing Levels', 'Object-Oriented Design', 'e-GP Procurement', 'BPSC Focus Writing'],
    sections: [
      {
        id: 'sec-bpsc17-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-bpsc17-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the four fundamental levels of Software Testing: (1) Unit Testing, (2) Integration Testing, (3) System Testing, and (4) User Acceptance Testing (UAT). Give examples of each level for a National Citizen E-Service Portal.',
            solution: `Software Testing Levels in E-Governance:
1. Unit Testing:
- Scope: Validates individual components or functions in isolation.
- Example: Testing the calculateNIDChecksum() function to ensure valid 10-digit smart NID format.

2. Integration Testing:
- Scope: Verifies the interaction and data flow between integrated software modules.
- Example: Testing the API interface between the Citizen Portal backend and the Central Bank Payment Gateway (NPSB) to verify accurate fee receipt callbacks.

3. System Testing:
- Scope: End-to-end testing of the complete integrated software system against functional and non-functional specifications (security, load, stress).
- Example: Subjecting the citizen portal to 50,000 concurrent virtual requests during peak passport application hours to measure response latency and database connection pool behavior.

4. User Acceptance Testing (UAT):
- Scope: Formal evaluation conducted by end-users or ministry stakeholders to verify if the solution satisfies real operational requirements before commercial launch.
- Example: Ministry section officers verifying that digital land mutation notices and e-signatures comply with the Land Reform Ordinance rules.`,
            tags: ['Software Engineering', 'Testing', 'UAT', 'System Testing', 'BPSC AP'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc17-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Differentiate between Direct Mapping, Fully Associative Mapping, and Set-Associative Mapping in CPU Cache Memory. Which one offers the best compromise between hardware complexity and cache hit ratio?',
            solution: `Cache Mapping Techniques:
1. Direct Mapping:
- Mechanism: Each main memory block maps to exactly ONE specific cache line using formula: Cache line = (Block address) mod (Number of cache lines).
- Advantage: Simple hardware, extremely fast tag comparison (only 1 comparator needed).
- Disadvantage: High Conflict Misses. If two memory blocks frequently accessed map to the same line, they thrash each other out.

2. Fully Associative Mapping:
- Mechanism: A main memory block can be placed in ANY available cache line.
- Advantage: Zero conflict misses, highest cache hit ratio.
- Disadvantage: Very expensive hardware; requires simultaneous parallel tag comparisons across all cache lines using CAM (Content-Addressable Memory).

3. Set-Associative Mapping (Best Compromise):
- Mechanism: Cache is divided into S sets, where each set contains K cache lines (e.g., 4-way or 8-way set associative). A memory block maps to a specific set: Set = (Block address) mod S, but can reside in any line within that set.
- Best Compromise: Balances hardware cost (only K parallel comparators needed) while substantially reducing conflict misses. Modern processors (Intel Core, AMD Ryzen, ARM) universally use 4-way to 16-way set associative caches.`,
            tags: ['Computer Architecture', 'Cache Memory', 'Set Associative', 'Hardware'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-bpsc17-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C program to create a Singly Linked List of government employees, insert an employee record at the end of the list, and display all records.',
            solution: 'C implementation of linked list with dynamic memory allocation using malloc.',
            codeSolution: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct EmployeeNode {
    int empId;
    char name[50];
    struct EmployeeNode* next;
};

struct EmployeeNode* insertEnd(struct EmployeeNode* head, int id, const char* name) {
    struct EmployeeNode* newNode = (struct EmployeeNode*)malloc(sizeof(struct EmployeeNode));
    newNode->empId = id;
    strncpy(newNode->name, name, 49);
    newNode->name[49] = '\\0';
    newNode->next = NULL;

    if (!head) return newNode;

    struct EmployeeNode* curr = head;
    while (curr->next) {
        curr = curr->next;
    }
    curr->next = newNode;
    return head;
}

void printList(struct EmployeeNode* head) {
    struct EmployeeNode* curr = head;
    while (curr) {
        printf("ID: %d | Name: %s -> ", curr->empId, curr->name);
        curr = curr->next;
    }
    printf("NULL\\n");
}

int main() {
    struct EmployeeNode* head = NULL;
    head = insertEnd(head, 101, "Rahim Ahmed");
    head = insertEnd(head, 102, "Fatima Begum");
    head = insertEnd(head, 103, "Tanvir Hasan");

    printList(head);
    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['C Language', 'Data Structures', 'Linked List', 'BPSC'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc17-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: Tender(TenderID, MinistryName, EstimatedCost, SubmissionDeadline, Status). Write SQL queries to:\n(a) Retrieve all tenders floated by "Ministry of Land" with estimated cost above BDT 50,00,000.\n(b) Count the total number of tenders grouped by MinistryName and Status.',
            solution: 'Basic SQL filtering and multi-column grouping.',
            codeSolution: `-- Query (a): Land Ministry high value tenders
SELECT TenderID, MinistryName, EstimatedCost, SubmissionDeadline
FROM Tender
WHERE MinistryName = 'Ministry of Land' 
  AND EstimatedCost > 5000000;

-- Query (b): Tenders grouped by Ministry and Status
SELECT MinistryName, Status, COUNT(TenderID) AS TenderCount
FROM Tender
GROUP BY MinistryName, Status
ORDER BY MinistryName, Status;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'DBMS', 'e-GP', 'BPSC'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc17-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'E-Governance & ICT Laws',
            questionText: 'Explain the e-Government Procurement (e-GP) system of Bangladesh managed by CPTU. How has electronic tendering eliminated physical syndicate cartels and ensured fair competition?',
            solution: `1. e-GP Portal Architecture:
- Managed by Central Procurement Technical Unit (CPTU), IMED, Ministry of Planning.
- Fully web-based workflow for public procurement covering procurement planning, tender publishing, electronic bidding, online evaluation, and contract award.

2. Elimination of Tendering Cartels:
- In the pre-e-GP era, physical tender dropping at government offices was frequently blocked by political muscle and violent tender cartels.
- e-GP enables contractors anywhere in the country to submit encrypted bids online 24/7.
- Bid opening occurs simultaneously through automated decryption keys, eliminating bid tampering and restoring fair economic competition.`,
            tags: ['e-Governance', 'e-GP', 'CPTU', 'Public Procurement', 'BPSC'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc17-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Symmetric Encryption (AES) vs. Asymmetric Encryption (RSA) in the context of government secure data transmission. Why is hybrid encryption implemented in TLS/SSL?',
            solution: `1. Symmetric (AES) vs Asymmetric (RSA):
- Speed: AES is fast, hardware accelerated, ideal for bulk data. RSA is computationally slow due to large modular arithmetic.
- Key Distribution: AES requires sharing secret key beforehand (key exchange vulnerability). RSA public key can be openly published.

2. Hybrid Encryption in TLS:
- Handshake uses RSA/ECDHE to authenticate government server certificates and securely exchange a random temporary symmetric session key.
- Bulk Transmission immediately switches to AES using the negotiated session key for wire-speed encrypted data flow.`,
            tags: ['Cryptography', 'AES', 'RSA', 'TLS', 'Security'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-bpsc17-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-bpsc17-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Role of ICT in Accelerating Public Service Delivery in Bangladesh" (Word limit: 250 words).',
            solution: `Key Structure:
- Paradigm Shift: From cumbersome paper bureaucracy to real-time digital services.
- Flagship Initiatives: National Web Portal (bangladesh.gov.bd), digital birth registration, online driving license renewal, and digital land survey.
- Time, Cost, and Visit (TCV) Reduction: Citizens save millions of travel hours and financial expenses.
- Conclusion: A responsive civil service powered by technology fosters sustainable socioeconomic advancement.`,
            tags: ['Focus Writing', 'English', 'Public Service Delivery', 'e-Governance'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc17-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "ডিজিটাল বাংলাদেশ বিনির্মাণের মাধ্যমে সরকারি সেবা জনগণের দোরগোড়ায় পৌঁছে দেওয়া সম্ভব হয়েছে। ই-গভর্নেন্স বাস্তবায়নের ফলে প্রশাসনিক স্বচ্ছতা নিশ্চিত হচ্ছে।"',
            solution: `Standard High-Quality Model Translation:
"Through the realization of Digital Bangladesh, it has become feasible to deliver public services to the doorsteps of citizens. With the implementation of e-governance, administrative transparency is being ensured."`,
            tags: ['Translation', 'Bangla to English', 'e-Governance'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 26. Janata Bank Executive Officer (IT) / AP 2015
  {
    id: 'janata-bank-it-2015',
    title: 'Executive Officer (IT), Janata Bank 2015',
    searchQuery: 'Janata Bank Executive Officer IT Assistant Programmer 2015 question paper pdf',
    category: 'Officer (IT)',
    jobId: 'JB-EO-IT-2015',
    circularYear: '2015',
    examDate: 'May 29, 2015',
    examBody: 'BUET',
    participatingBanks: ['Janata Bank Limited (now PLC)'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Conducted by BUET for Janata Bank IT. Contains Binary Search Tree insertion and in-order traversal algorithms, complex SQL join operations on banking customer ledgers, virtual memory paging, networking devices, and core banking focus writing.',
    keyTopics: ['Binary Search Tree Operations', 'SQL Joins & Balances', 'Virtual Memory Paging', 'Hub vs Switch vs Router', 'BUET Bank Exam', 'Focus Writing'],
    sections: [
      {
        id: 'sec-jb15-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-jb15-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C or C++ function to insert a new node into a Binary Search Tree (BST) and print the nodes in ascending sorted order using In-Order Traversal.',
            solution: 'BST insertion preserving search invariant (left < root < right) followed by recursive in-order traversal (Left, Root, Right) which naturally prints values in sorted order.',
            codeSolution: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int key;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* createNode(int item) {
    struct TreeNode* temp = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    temp->key = item;
    temp->left = temp->right = NULL;
    return temp;
}

struct TreeNode* insert(struct TreeNode* node, int key) {
    if (node == NULL) return createNode(key);

    if (key < node->key)
        node->left = insert(node->left, key);
    else if (key > node->key)
        node->right = insert(node->right, key);

    return node;
}

void inOrderTraversal(struct TreeNode* root) {
    if (root != NULL) {
        inOrderTraversal(root->left);
        printf("%d ", root->key);
        inOrderTraversal(root->right);
    }
}

int main() {
    struct TreeNode* root = NULL;
    int values[] = {50, 30, 20, 40, 70, 60, 80};
    int n = sizeof(values) / sizeof(values[0]);

    for (int i = 0; i < n; i++) {
        root = insert(root, values[i]);
    }

    printf("In-Order Traversal (Ascending Sorted): ");
    inOrderTraversal(root);
    printf("\\n");

    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['Data Structures', 'BST', 'Binary Search Tree', 'In-Order Traversal'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-jb15-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider tables: Customer(CustID, CustName, BranchID) and Account(AccNo, CustID, Balance). Write an SQL query to retrieve the Customer Name and Account Number of customers whose balance is strictly above the bank-wide average balance.',
            solution: 'Join Customer and Account with a subquery filtering on average balance.',
            codeSolution: `SELECT 
    c.CustName,
    a.AccNo,
    a.Balance
FROM Customer c
JOIN Account a ON c.CustID = a.CustID
WHERE a.Balance > (SELECT AVG(Balance) FROM Account)
ORDER BY a.Balance DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Subquery', 'Joins', 'DBMS'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-jb15-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Hub, Layer 2 Switch, and Layer 3 Router in terms of operating OSI layer, collision domains, broadcast domains, and address filtering mechanisms.',
            solution: `1. Network Device Comparison:
- Hub (Layer 1 Physical):
  * Blind multiport repeater. Single collision domain, single broadcast domain. High packet collisions.
- Layer 2 Switch (Data Link):
  * Micro-segments network using MAC address table. Each port is an independent collision domain; all ports share single broadcast domain. Eliminates collisions.
- Layer 3 Router (Network Layer):
  * Routes packets between different subnets based on IP addresses. Each interface is both an independent collision domain AND an independent broadcast domain. Blocks broadcasts.`,
            tags: ['Networking', 'Hub', 'Switch', 'Router', 'OSI'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-jb15-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Draw and explain the 5-State Process Model in Operating Systems (New, Ready, Running, Waiting/Blocked, Terminated). Explain what information is saved in the Process Control Block (PCB) during context switching.',
            solution: `1. Five Process States:
- New: Process being created.
- Ready: Process loaded in memory waiting for CPU allocation by scheduler.
- Running: Instructions executing on CPU.
- Waiting (Blocked): Process waiting for an I/O event or signal.
- Terminated: Process finished execution, releasing resources.

2. Process Control Block (PCB):
Data structure storing process state, Program Counter (PC), CPU registers, memory limits, and list of open files. During context switching, current register values are saved to the old PCB, and values from the new PCB are restored to CPU registers.`,
            tags: ['Operating Systems', 'Process States', 'PCB', 'Context Switching'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-jb15-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain the ACID properties of database transactions in the context of a bank fund transfer between Account A and Account B. What guarantees Durability in the event of an abrupt power failure?',
            solution: `1. ACID in Fund Transfer (BDT 5,000 from A to B):
- Atomicity: Either both debit from A and credit to B succeed, or neither takes effect.
- Consistency: Sum of balances (A + B) before transfer equals sum after transfer.
- Isolation: Concurrent transactions cannot read intermediate states (e.g. A debited before B credited).
- Durability: Once committed, updates persist permanently even after hardware crashes.

2. Durability Mechanism:
Ensured by Write-Ahead Logging (WAL). Transaction log records are flushed to persistent disk (fsync) BEFORE actual data blocks in RAM are modified. Upon reboot, crash recovery runs Redo operations from the log.`,
            tags: ['DBMS', 'ACID', 'Transactions', 'WAL', 'Durability'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-jb15-6',
            questionNo: '6',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C program to implement Binary Search on a sorted array of integers. What is its time complexity compared to Linear Search?',
            solution: 'Binary search divide-and-conquer implementation in O(log N) time.',
            codeSolution: `#include <stdio.h>

int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // Element not found
}

int main() {
    int data[] = {10, 25, 33, 47, 52, 68, 79, 88, 95};
    int n = sizeof(data) / sizeof(data[0]);
    int target = 52;
    int idx = binarySearch(data, n, target);
    if (idx != -1) printf("Found %d at index %d\\n", target, idx);
    else printf("%d not found\\n", target);
    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['Algorithms', 'Binary Search', 'C Language'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-jb15-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-jb15-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Modernization of State-Owned Commercial Banks: Challenges in Core Banking Adoption" (Word limit: 250 words).',
            solution: `Key Structure:
- Transition from decentralized branch ledger systems to centralized Core Banking Solutions (CBS).
- Legacy challenges: Data migration accuracy, employee retraining, and overcoming resistance to change.
- Connectivity hurdles: Ensuring reliable WAN connections for remote rural branches.
- Conclusion: A unified CBS enables state banks to deliver real-time online banking and compete with private financial institutions.`,
            tags: ['Focus Writing', 'English', 'State Banks', 'CBS Adoption'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-jb15-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "জনতা ব্যাংক দেশের কৃষি ও শিল্প খাতের বিকাশে ব্যাপক অবদান রেখে চলেছে। আধুনিক প্রযুক্তির সহায়তায় প্রতিটি গ্রাহকের কাছে ডিজিটাল সেবা পৌঁছে দেওয়াই এই ব্যাংকের অন্যতম অঙ্গীকার।"',
            solution: `Standard High-Quality Model Translation:
"Janata Bank continues to make substantial contributions to the development of the country's agricultural and industrial sectors. Delivering digital services to every customer through the support of modern technology is one of the premier commitments of this bank."`,
            tags: ['Translation', 'Bangla to English', 'Janata Bank'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 27. Agrani Bank Senior Officer (IT) 2017
  {
    id: 'agrani-bank-so-it-2017',
    title: 'Senior Officer (IT), Agrani Bank 2017',
    searchQuery: 'Agrani Bank Senior Officer IT 2017 question paper solution pdf',
    category: 'Senior Officer (IT)',
    jobId: 'Agrani-SO-IT-2017',
    circularYear: '2016-2017',
    examDate: 'September 22, 2017',
    examBody: 'BIBM',
    participatingBanks: ['Agrani Bank Limited (now PLC)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The 2017 Agrani Bank SO (IT) exam paper. Focuses on Deadlock prevention algorithms (Wait-Die vs Wound-Wait timestamp ordering), Dijkstra algorithm trace, Circular Queue implementation, database indexing, and focus writing on agent banking.',
    keyTopics: ['Deadlock Wait-Die vs Wound-Wait', 'ACID in Core Banking', 'Dijkstra Trace', 'Circular Queue in C', 'Database Concurrency', 'Focus Writing'],
    sections: [
      {
        id: 'sec-ag17-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-ag17-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain Deadlock Prevention using Timestamp Ordering schemes: (1) Wait-Die Scheme (Non-preemptive), and (2) Wound-Wait Scheme (Preemptive). If Transaction T1 (older, timestamp 10) requests a lock held by Transaction T2 (younger, timestamp 20), what happens in both schemes?',
            solution: `Timestamp Ordering Deadlock Schemes:
1. Concept:
Each transaction Ti is assigned a unique monotonically increasing timestamp TS(Ti) upon creation. Older transactions have smaller timestamps.

2. Wait-Die Scheme (Non-preemptive):
- Rule: If an older transaction requests a lock held by a younger transaction, the older is allowed to WAIT. If a younger transaction requests a lock held by an older transaction, the younger transaction DIES (is rolled back and restarted).
- Scenario: T1 (TS=10, older) requests lock held by T2 (TS=20, younger).
  * Action: T1 is older than T2 (TS(T1) < TS(T2)), so T1 is permitted to WAIT. No rollback occurs.

3. Wound-Wait Scheme (Preemptive):
- Rule: If an older transaction requests a lock held by a younger transaction, the older WOUNDS (preempts and aborts) the younger transaction. If a younger transaction requests a lock held by an older transaction, the younger is allowed to WAIT.
- Scenario: T1 (TS=10, older) requests lock held by T2 (TS=20, younger).
  * Action: T1 is older than T2 (TS(T1) < TS(T2)), so T1 WOUNDS T2! T2 is rolled back and releases the lock immediately so T1 can proceed without delay.

4. Starvation Freedom:
Both schemes guarantee freedom from deadlock because cycles cannot form in the Wait-For Graph. Furthermore, when an aborted transaction restarts, it retains its original timestamp, preventing starvation.`,
            tags: ['DBMS', 'Deadlock Prevention', 'Wait-Die', 'Wound-Wait', 'Concurrency'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-ag17-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C program to implement a Circular Queue using an array of fixed size N with `enqueue()` and `dequeue()` operations. Explain how circular modulo arithmetic (`(rear + 1) % N`) prevents memory wastage.',
            solution: 'C implementation of circular queue using front, rear, and modulo arithmetic.',
            codeSolution: `#include <stdio.h>
#define SIZE 5

int items[SIZE];
int front = -1, rear = -1;

int isFull() {
    return ((front == rear + 1) || (front == 0 && rear == SIZE - 1));
}

int isEmpty() {
    return (front == -1);
}

void enqueue(int element) {
    if (isFull()) {
        printf("Queue is FULL!\\n");
        return;
    }
    if (front == -1) front = 0;
    rear = (rear + 1) % SIZE;
    items[rear] = element;
    printf("Enqueued: %d\\n", element);
}

int dequeue() {
    if (isEmpty()) {
        printf("Queue is EMPTY!\\n");
        return -1;
    }
    int element = items[front];
    if (front == rear) {
        front = -1;
        rear = -1; // Reset when queue becomes empty
    } else {
        front = (front + 1) % SIZE;
    }
    return element;
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    printf("Dequeued: %d\\n", dequeue());
    enqueue(40);
    enqueue(50);
    enqueue(60);
    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['Data Structures', 'Circular Queue', 'C Language'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ag17-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Differentiate between Clustered Index and Non-Clustered Index in relational databases. Why can a database table have only one Clustered Index but multiple Non-Clustered Indexes?',
            solution: `1. Clustered vs. Non-Clustered Index:
- Clustered Index:
  * Sorts and physically stores the actual data rows of the table on disk in the order of the clustered key.
  * Leaf level of the B+ Tree contains the actual data records.
  * Since physical records on disk can be sorted in only ONE order, a table can have only ONE Clustered Index (typically on Primary Key).
- Non-Clustered Index:
  * Stored completely separately from physical data rows.
  * Contains sorted index keys and pointers (Row IDs or Clustered Key values) pointing to the actual data location.
  * A table can have multiple Non-Clustered Indexes to optimize different filter columns (e.g. branch, date).`,
            tags: ['DBMS', 'Indexing', 'Clustered Index', 'B+ Tree'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ag17-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: Loan(LoanNo, CustID, BranchCode, Amount, Status). Write an SQL query to retrieve the BranchCode, count of active loans (Status = "ACTIVE"), and total outstanding amount for all branches with total loan amount exceeding BDT 2,00,00,000.',
            solution: 'Group by with filtering on ACTIVE status and HAVING sum condition.',
            codeSolution: `SELECT 
    BranchCode,
    COUNT(LoanNo) AS Active_Loan_Count,
    SUM(Amount) AS Total_Outstanding_Amount
FROM Loan
WHERE Status = 'ACTIVE'
GROUP BY BranchCode
HAVING SUM(Amount) > 20000000
ORDER BY Total_Outstanding_Amount DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Aggregations', 'HAVING', 'Banking'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ag17-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the working principle of the Domain Name System (DNS). Describe DNS Poisoning (DNS Spoofing) and how DNSSEC protects banking clients from being redirected to fraudulent websites.',
            solution: `1. DNS Working Principle:
Hierarchical distributed naming system that translates human-readable hostnames (e.g. www.agranibank.org) into machine-routable IP addresses.

2. DNS Poisoning / Cache Poisoning:
An attacker injects forged IP address mappings into the cache of a local recursive DNS resolver. When banking customers type the bank URL, the poisoned resolver returns the IP of an attacker-controlled phishing clone.

3. DNSSEC Defense:
DNS Security Extensions (DNSSEC) adds cryptographic digital signatures to DNS records using public key cryptography. Resolvers verify the digital signature chain from the Root zone down to the bank domain. Any forged DNS response lacking a valid cryptographic signature is rejected.`,
            tags: ['Networking', 'DNS', 'DNSSEC', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ag17-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain the concept of CPU Scheduling. Differentiate between Preemptive Scheduling and Non-Preemptive Scheduling with examples of algorithms for each.',
            solution: `1. CPU Scheduling:
The process of determining which ready process in memory should be assigned CPU execution time by the short-term dispatcher.

2. Preemptive vs Non-Preemptive:
- Preemptive: The OS kernel can forcibly interrupt a currently running process to allocate CPU to a higher-priority process (e.g., Round Robin, SRTF, Preemptive Priority). Ensures responsiveness in interactive banking systems.
- Non-Preemptive: Once a process starts executing, it retains the CPU until it voluntarily terminates or blocks on I/O (e.g., First-Come First-Served (FCFS), Non-Preemptive SJF). Simple, but lower responsiveness.`,
            tags: ['Operating Systems', 'CPU Scheduling', 'Preemptive', 'Non-Preemptive'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-ag17-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-ag17-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Role of Agent Banking in Catalyzing Agricultural Credit and Rural Economic Empowerment" (Word limit: 250 words).',
            solution: `Key Structure:
- Reaching the Unbanked: Agent banking has extended banking counters to remote rural haats and bazaars across Bangladesh.
- Timely Agricultural Credit: Enabling smallholder farmers to receive crop and livestock loans directly without traveling to urban branch centers.
- Biometric Security: Fingerprint authentication protects rural farmers from fraud.
- Conclusion: Agent banking bridges the formal banking divide and empowers agrarian prosperity.`,
            tags: ['Focus Writing', 'English', 'Agent Banking', 'Rural Economy'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ag17-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "অগ্রণী ব্যাংক গ্রামীণ অর্থনীতি পুনরুজ্জীবিত করতে কৃষক ও ক্ষুদ্র ব্যবসায়ীদের স্বল্প সুদে ঋণ প্রদান করছে। প্রযুক্তি ব্যবহারের ফলে ঋণ বিতরণের প্রক্রিয়া স্বচ্ছ ও হয়রানিমুক্ত হয়েছে।"',
            solution: `Standard High-Quality Model Translation:
"Agrani Bank is providing low-interest credit to farmers and small entrepreneurs to revitalize the rural economy. Due to the adoption of technology, the loan disbursement process has become transparent and free from harassment."`,
            tags: ['Translation', 'Bangla to English', 'Agrani Bank'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 28. Bangladesh Bank Assistant Director (IT) 2013
  {
    id: 'bb-ad-it-2013',
    title: 'Assistant Director (IT), Bangladesh Bank 2013',
    searchQuery: 'Bangladesh Bank Assistant Director AD IT 2013 question paper solution pdf',
    category: 'Bank Senior Officer (IT)' as any,
    jobId: 'BB-AD-IT-2013',
    circularYear: '2012-2013',
    examDate: 'June 21, 2013',
    examBody: 'Bangladesh Bank / BIBM',
    participatingBanks: ['Bangladesh Bank'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The historic 2013 Bangladesh Bank AD (IT) examination. Features Stack implementation using Queues, Relational Algebra, Subnet mask CIDR calculations, Singly Linked List reversal in C, and Focus writing on Mobile Financial Services (MFS) in Bangladesh.',
    keyTopics: ['Stack using Queues', 'Relational Algebra', 'Subnet Mask Calculation', 'MFS & Mobile Banking', 'Data Structures', 'Focus Writing'],
    sections: [
      {
        id: 'sec-bb13-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-bb13-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Implement a Last-In-First-Out (LIFO) Stack data structure using two standard First-In-First-Out (FIFO) Queues in C++ or Python.',
            solution: 'Stack using two queues (q1 and q2). By making push costly or pop costly, we maintain LIFO semantics.',
            codeSolution: `from collections import deque

class StackUsingTwoQueues:
    """
    Implements LIFO Stack using two FIFO Queues (q1, q2).
    """
    def __init__(self):
        self.q1 = deque()
        self.q2 = deque()

    def push(self, x: int) -> None:
        self.q2.append(x)
        while self.q1:
            self.q2.append(self.q1.popleft())
        self.q1, self.q2 = self.q2, self.q1

    def pop(self) -> int:
        if not self.q1:
            raise IndexError("Pop from empty stack")
        return self.q1.popleft()

    def top(self) -> int:
        if not self.q1:
            raise IndexError("Top of empty stack")
        return self.q1[0]

    def is_empty(self) -> bool:
        return len(self.q1) == 0

# Test demonstration
stack = StackUsingTwoQueues()
stack.push(10)
stack.push(20)
stack.push(30)
print(f"Top element: {stack.top()}")       # 30
print(f"Popped: {stack.pop()}")             # 30
print(f"Next Popped: {stack.pop()}")        # 20`,
            solutionLanguage: 'python',
            tags: ['Data Structures', 'Stack', 'Queue', 'LIFO', 'Bangladesh Bank AD'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb13-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Given the banking relation schemas: Branch(BranchName, BranchCity, Assets), Customer(CustomerName, CustomerStreet, CustomerCity), Loan(LoanNumber, BranchName, Amount), Borrower(CustomerName, LoanNumber). Write relational algebra expressions for:\n(a) Find all customers who have a loan with amount > 10,00,000.\n(b) Find the names of all branches located in "Chittagong".\n(c) Find the names of customers who have a loan at the "Agrabad" branch.',
            solution: `Relational Algebra Expressions:
(a) Customers with loan amount > 10,00,000:
π CustomerName ( σ Amount > 1000000 (Borrower ⨝ Loan) )

(b) Branches in "Chittagong":
π BranchName ( σ BranchCity = "Chittagong" (Branch) )

(c) Customers with loan at "Agrabad" branch:
π CustomerName ( σ BranchName = "Agrabad" (Borrower ⨝ Loan) )`,
            tags: ['Relational Algebra', 'DBMS', 'Database Queries', 'Bangladesh Bank AD'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb13-3',
            questionNo: '3',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'An enterprise bank assigns the network block 172.16.0.0/16. The IT department needs to allocate subnets to 30 regional offices, each requiring up to 500 host computers. Determine: (a) The required subnet mask in CIDR and dotted decimal notation, (b) Number of usable hosts per subnet, (c) The network and broadcast address of the first 2 subnets.',
            solution: `Subnet Calculation for 172.16.0.0/16:
1. Requirements:
- At least 500 hosts per subnet.
- Formula: 2^h - 2 >= 500 => h = 9 bits (2^9 - 2 = 510 usable hosts).
- Subnet bits: 32 - 9 = 23 bits (/23 prefix).
- Borrowed bits from /16: 23 - 16 = 7 bits.
- Number of subnets created: 2^7 = 128 subnets (easily accommodates 30 offices).

2. Subnet Mask:
- /23 in dotted decimal: 255.255.254.0.
- Block size in 3rd octet: 256 - 254 = 2.

3. Allocation (First 2 Subnets):
- Subnet 1:
  * Network: 172.16.0.0
  * Usable Hosts: 172.16.0.1 to 172.16.1.254
  * Broadcast: 172.16.1.255
- Subnet 2:
  * Network: 172.16.2.0
  * Usable Hosts: 172.16.2.1 to 172.16.3.254
  * Broadcast: 172.16.3.255`,
            tags: ['Networking', 'Subnetting', 'CIDR /23', 'Bank Math'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb13-4',
            questionNo: '4',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C program to reverse a Singly Linked List iteratively. Analyze its time and space complexity.',
            solution: 'Iterative 3-pointer reversal (prev, curr, next) in O(N) time and O(1) space.',
            codeSolution: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* reverse(struct Node* head) {
    struct Node* prev = NULL;
    struct Node* curr = head;
    struct Node* next = NULL;
    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

void printList(struct Node* head) {
    while (head) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\\n");
}

int main() {
    struct Node* head = (struct Node*)malloc(sizeof(struct Node));
    head->data = 1;
    head->next = (struct Node*)malloc(sizeof(struct Node));
    head->next->data = 2;
    head->next->next = (struct Node*)malloc(sizeof(struct Node));
    head->next->next->data = 3;
    head->next->next->next = NULL;

    printf("Original: "); printList(head);
    head = reverse(head);
    printf("Reversed: "); printList(head);
    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['Data Structures', 'Linked List', 'C Language'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb13-5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionNo: '5',
            questionText: 'Explain the working of Round Robin (RR) CPU scheduling. How does the choice of time quantum (q) affect system performance? What happens when q is extremely large vs. extremely small?',
            solution: `1. Round Robin (RR) Scheduling:
Preemptive scheduling where ready processes are kept in a circular FIFO queue. Each process executes for up to a fixed slice of CPU time called Time Quantum (q). If the process does not complete within q, it is preempted and put at the end of the queue.

2. Impact of Time Quantum:
- If q is extremely large (q -> infinity): Round Robin degenerates into First-Come First-Served (FCFS) scheduling, leading to poor response times and convoy effects.
- If q is extremely small (q -> 0): Causes excessive CPU thrashing due to continuous context switching overhead, wasting CPU cycles.
- Optimum Quantum: Rule of thumb is that 80% of CPU bursts should be shorter than the time quantum.`,
            tags: ['Operating Systems', 'CPU Scheduling', 'Round Robin', 'Time Quantum'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-bb13-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain the Lost Update and Dirty Read problems in database concurrency. How does Two-Phase Locking (2PL) guarantee conflict serializability?',
            solution: `1. Concurrency Problems:
- Lost Update: Two concurrent transactions read the same initial value. Both compute updates and write back, with the second write overwriting the first write without knowledge.
- Dirty Read: Transaction T1 modifies a record. Transaction T2 reads this uncommitted value. If T1 aborts/rolls back, T2 has acted upon invalid data that never legally existed.

2. Two-Phase Locking (2PL):
- Growing Phase: Transaction acquires locks; no locks can be released.
- Shrinking Phase: Transaction releases locks; no new locks can be acquired.
- Conflict Serializability: 2PL guarantees that transactions serialize in the order in which they reach their "Lock Point" (the moment the last lock is acquired), eliminating lost updates and dirty reads.`,
            tags: ['DBMS', 'Concurrency', '2PL', 'Lost Update', 'Dirty Read'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-bb13-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-bb13-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Mobile Financial Services (MFS) as a Catalyst for Financial Inclusivity in Bangladesh" (Word limit: 250 words).',
            solution: `Key Structure:
- Emergence of MFS in 2011 as a landmark financial milestone.
- Overcoming branch geography: Enabling unbanked rural citizens, garment workers, and marginal traders to send and receive funds instantly.
- Socio-economic impact: Deepening formal financial inclusion and empowering women.
- Central Bank oversight: Ensuring systemic liquidity and transaction integrity.`,
            tags: ['Focus Writing', 'English', 'MFS', 'Financial Inclusivity'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb13-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "মোবাইল ফিনান্সিয়াল সার্ভিসের বিকাশের ফলে দেশের প্রত্যন্ত অঞ্চলের মানুষও এখন দ্রুত ও নিরাপদে অর্থ লেনদেন করতে পারছে। এর ফলে অর্থনৈতিক কর্মকাণ্ডে নতুন গতি সঞ্চারিত হয়েছে।"',
            solution: `Standard High-Quality Model Translation:
"With the development of mobile financial services, people in remote areas of the country can now transact money expeditiously and securely. As a result, new dynamism has been infused into economic activities."`,
            tags: ['Translation', 'Bangla to English', 'MFS'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  }
];
