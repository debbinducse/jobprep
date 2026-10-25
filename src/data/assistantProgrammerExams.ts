import { ExamPaper } from '../types/exam';

export const assistantProgrammerPapers: ExamPaper[] = [
  // 15. Bangladesh Bank Assistant Programmer
  {
    id: 'ap-bangladesh-bank',
    title: 'Assistant Programmer, Bangladesh Bank',
    searchQuery: 'Assistant Programmer Bangladesh Bank written question solution pdf',
    category: 'Bank Assistant Programmer',
    jobId: 'BB-AP-2024',
    circularYear: '2023-2024',
    examDate: 'February 10, 2024',
    examBody: 'Bangladesh Bank',
    participatingBanks: ['Bangladesh Bank (Central Bank)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The prestigious Bangladesh Bank Assistant Programmer Grade 9 written examination. Features All-Pairs Shortest Path dynamic programming, Min-Heap implementation, complex SQL overdraft interest calculation, CIDR /23 subnet division, stateful firewalls, and central banking IT focus writing.',
    keyTopics: ['Min-Heap Construction', 'Floyd-Warshall Dynamic Programming', 'SQL Overdraft & Interest', 'CIDR /23 Subnetting', 'Stateful Firewalls', 'DNS Resolution', 'Focus Writing'],
    sections: [
      {
        id: 'sec-bb-ap-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        description: 'Computer Science, Algorithms, Databases, Networks & Central Banking Systems',
        questions: [
          {
            id: 'q-bb-ap-1',
            questionNo: '1 (a)',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write an algorithm or C program to convert an unsorted array of integers into a Min-Heap (Heapify process). Analyze its Big-O time and space complexity.',
            solution: `Min-Heap Algorithm & Time Complexity Explanation:
1. Concept:
In a Min-Heap, for every node i, the key at parent node is less than or equal to the keys of its children: A[parent(i)] <= A[i].
Given an array of size N, leaf nodes start at index floor(N/2). Leaves already satisfy the heap property trivially.
Therefore, building a heap bottom-up begins at the last non-leaf node, index floor(N/2) - 1, and calls minHeapify() in reverse order down to root index 0.

2. Complexity Analysis:
- Individual minHeapify() takes O(h) where h is the node height.
- Total time complexity: T(N) = Sum_{h=0 to floor(log N)} ceil(N / 2^(h+1)) * O(h) = O(N) linear time! (Even though naive upper bound looks like O(N log N)).
- Auxiliary Space: O(log N) recursive call stack space, or O(1) iterative.`,
            codeSolution: `#include <stdio.h>

void minHeapify(int arr[], int n, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest])
        smallest = left;

    if (right < n && arr[right] < arr[smallest])
        smallest = right;

    if (smallest != i) {
        int temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;

        // Recursively heapify the affected sub-tree
        minHeapify(arr, n, smallest);
    }
}

void buildMinHeap(int arr[], int n) {
    for (int i = (n / 2) - 1; i >= 0; i--) {
        minHeapify(arr, n, i);
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    buildMinHeap(arr, n);

    printf("Min-Heap array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['Data Structures', 'Heap', 'C Programming', 'Bangladesh Bank AP'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-bb-ap-2',
            questionNo: '1 (b)',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Explain the Dynamic Programming approach to solve the All-Pairs Shortest Path (APSP) problem using the Floyd-Warshall Algorithm. Show the recurrence relation and state its time complexity compared to running Dijkstra algorithm V times.',
            solution: `Floyd-Warshall Algorithm Explanation:
1. Dynamic Programming Formulation:
Let d[k][i][j] be the shortest path from vertex i to vertex j using only intermediate vertices from the set {1, 2, ..., k}.
- Base Case: For k = 0 (no intermediate vertices allowed), d[0][i][j] = weight of direct edge (i, j), or 0 if i = j, or infinity if no edge exists.
- Recurrence Relation:
  d[k][i][j] = min( d[k-1][i][j], d[k-1][i][k] + d[k-1][k][j] )

2. Time and Space Complexity:
- Floyd-Warshall runs in O(V^3) time and O(V^2) space using three nested loops over k, i, and j.
- It operates seamlessly on dense graphs and works with negative edge weights (as long as there are no negative cycles).

3. Comparison with Repeated Dijkstra:
- If we run Dijkstra's algorithm V times (once for every vertex):
  * Using Fibonacci Heap: O(V * (V log V + E)) = O(V^2 log V + V*E). For sparse graphs where E << V^2, repeated Dijkstra is faster: O(V^2 log V).
  * However, Dijkstra FAILS if the graph contains negative edge weights, whereas Floyd-Warshall handles negative weights and easily detects negative cycles (if d[i][i] < 0).`,
            tags: ['Algorithms', 'Dynamic Programming', 'Floyd Warshall', 'Graph Theory'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-bb-ap-3',
            questionNo: '2 (a)',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: BankAccount(AccNo, CustID, Balance, OverdraftLimit, BranchID). An account is allowed an overdraft if Balance < 0 up to -OverdraftLimit. Write an SQL query to calculate: (i) Total number of overdraft accounts per branch, (ii) Total overdraft amount utilized, and (iii) List only branches where total overdraft utilized exceeds BDT 5,00,000.',
            solution: 'Filter accounts where Balance < 0, calculate utilized overdraft as ABS(Balance), group by BranchID, and filter using HAVING clause.',
            codeSolution: `-- Bangladesh Bank AP SQL Solution
SELECT 
    BranchID,
    COUNT(AccNo) AS Overdraft_Accounts_Count,
    SUM(ABS(Balance)) AS Total_Overdraft_Utilized,
    AVG(ABS(Balance)) AS Avg_Overdraft_Per_Account
FROM BankAccount
WHERE Balance < 0 
  AND ABS(Balance) <= OverdraftLimit
GROUP BY BranchID
HAVING SUM(ABS(Balance)) > 500000
ORDER BY Total_Overdraft_Utilized DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'DBMS', 'Overdraft', 'Banking Queries'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-4',
            questionNo: '2 (b)',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'Bangladesh Bank allocates the network block 10.150.0.0/23 to its secure payment switch cluster. It needs to divide this block into 4 equal subnets. (i) What is the new subnet mask in dotted-decimal format? (ii) How many usable IP addresses are available per subnet? (iii) Find the Network Address and Broadcast Address for each of the 4 subnets.',
            solution: `Calculation for /23 divided into 4 equal subnets:
1. Subnet Bits:
- 4 subnets requires 2^n >= 4 => n = 2 bits borrowed from host portion.
- Original prefix: /23.
- New prefix: 23 + 2 = /25.

2. New Subnet Mask:
- Dotted decimal: 255.255.255.128.

3. Usable IP Addresses per Subnet:
- Host bits remaining: 32 - 25 = 7 bits.
- Usable IPs = 2^7 - 2 = 128 - 2 = 126 usable hosts per subnet.

4. The 4 Subnets Allocation:
- Subnet 1: 10.150.0.0/25 (Usable: 10.150.0.1 - 10.150.0.126, Broadcast: 10.150.0.127)
- Subnet 2: 10.150.0.128/25 (Usable: 10.150.0.129 - 10.150.0.254, Broadcast: 10.150.0.255)
- Subnet 3: 10.150.1.0/25 (Usable: 10.150.1.1 - 10.150.1.126, Broadcast: 10.150.1.127)
- Subnet 4: 10.150.1.128/25 (Usable: 10.150.1.129 - 10.150.1.254, Broadcast: 10.150.1.255)`,
            tags: ['Networking', 'Subnetting', 'CIDR /23', 'Payment Switch'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-5',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is a Firewall? Contrast Stateful Packet Inspection (SPI) firewalls with Stateless Packet Filtering firewalls. Explain how DNS Recursive Resolution differs from Iterative Resolution.',
            solution: `1. Firewall:
A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.

2. Stateful (SPI) vs. Stateless Firewalls:
- Stateless Packet Filtering: Inspects each packet in isolation (Source IP, Destination IP, Port, Protocol) without knowing if it belongs to an existing established TCP session. It cannot detect spoofed packets or TCP state anomalies.
- Stateful Packet Inspection (SPI): Maintains an in-memory State Table tracking all active TCP/UDP connections. When an internal client initiates an outbound connection, the firewall dynamically allows corresponding return packets while blocking unsolicited inbound connections.

3. DNS Recursive vs. Iterative Resolution:
- Recursive Resolution: The client resolver asks the local DNS server (e.g. 8.8.8.8) to find the answer. The local DNS server does all the legwork (queries Root, TLD, and Authoritative servers) and returns the final resolved IP address to the client.
- Iterative Resolution: The querying server asks other DNS servers for the best answer it knows. The queried server returns a referral (e.g. "I do not know, ask the .bd TLD server at IP X.X.X.X"), and the requester itself continues making subsequent queries until it reaches the authoritative server.`,
            tags: ['Networking', 'Firewalls', 'DNS', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-6',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain High Availability (HA) cluster architecture in Core Banking data centers. Differentiate between Active-Active vs. Active-Passive clustering and describe the split-brain scenario.',
            solution: `1. Active-Active vs. Active-Passive Clustering:
- Active-Passive (Primary/Standby):
  * Node A processes 100% of transaction load. Node B is idle or in continuous warm sync (synchronous replication).
  * Heartbeat line monitors Node A health. If Node A fails, automated clustering software (e.g. Pacemaker/Corosync) fails over IP and services to Node B.
- Active-Active (Multi-Master):
  * Both Node A and Node B actively process incoming transactions simultaneously behind a load balancer.
  * Provides superior hardware utilization and zero failover delay, but requires complex distributed locking and conflict resolution.

2. The Split-Brain Problem & Quorum:
- Split-Brain: Occurs when the private heartbeat network between Node A and Node B fails, but both nodes remain alive. Each node mistakenly concludes the other has died and both attempt to claim the shared storage volume and active VIP. This results in catastrophic data corruption!
- Quorum & Fencing (STONITH): Resolved by introducing a 3rd witness/arbitrator node (Quorum = (Total/2) + 1) and STONITH (Shoot The Other Node In The Head) fencing to physically power off the isolated node.`,
            tags: ['System Design', 'High Availability', 'Clustering', 'Core Banking'],
            marks: 25,
            difficulty: 'Hard'
          }
        ]
      },
      {
        id: 'sec-bb-ap-nontech',
        name: 'Focus Writing & Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-bb-ap-7',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Role of Central Bank in Governing Cyber Risk and Resilient National Payment Systems" (Word limit: 300 words).',
            solution: `Key Thematic Analysis:
- The Central Bank as Regulatory Guardian: Bangladesh Bank enforces ICT Security Guidelines across all scheduled commercial banks and financial institutions.
- Interoperable Backbone: Supervising National Payment Switch Bangladesh (NPSB), Real-Time Gross Settlement (RTGS), and BEFTN.
- Mandating Security Operations Centers (SOC): Requiring 24/7 SIEM monitoring, threat intelligence sharing, and simulated breach testing.
- Protecting Sovereignty: Guarding against state-sponsored advanced persistent threats (APTs) and ensuring continuous business continuity for macroeconomic stability.`,
            tags: ['Focus Writing', 'English', 'Central Bank', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-8',
            questionNo: '6',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "বাংলাদেশ ব্যাংক দেশের আর্থিক খাতের স্থিতিশীলতা রক্ষায় নিয়মিত তদারকি ও পরিদর্শন পরিচালনা করে। সাইবার ঝুঁকি ব্যবস্থাপনায় কোনো ধরনের অবহেলা পরিলক্ষিত হলে সংশ্লিষ্ট প্রতিষ্ঠানের বিরুদ্ধে কঠোর প্রশাসনিক ব্যবস্থা গ্রহণ করা হয়।"',
            solution: `Standard High-Quality Model Translation:
"Bangladesh Bank conducts regular supervision and inspections to safeguard the stability of the country's financial sector. If any negligence is observed in cyber risk management, stern administrative measures are instituted against the respective institution."`,
            tags: ['Translation', 'Bangla to English', 'Bangladesh Bank'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 16. Combined Bank Assistant Programmer (BSCS)
  {
    id: 'ap-combined-banks',
    title: 'Assistant Programmer, Combined Bank (BSCS)',
    searchQuery: 'Assistant Programmer Combined Bank Bankers Selection Committee question paper pdf',
    category: 'Bank Assistant Programmer',
    jobId: 'Combined-Bank-AP-2023',
    circularYear: '2022-2023',
    examDate: 'September 15, 2023',
    examBody: 'Bankers Selection Committee (BSCS)',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC', 'BDBL'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The recruitment test for Assistant Programmer across state-owned commercial banks. Tests Object-Oriented Polymorphism, REST API idempotency, SQL Window functions, Bellman-Ford algorithm, Linux permissions, and banking cybersecurity.',
    keyTopics: ['Polymorphism & Virtual Functions', 'B-Tree vs Hash Index', 'RESTful API Methods & Idempotency', 'Bellman-Ford Algorithm', 'Core Banking Infrastructure'],
    sections: [
      {
        id: 'sec-cb-ap-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-cb-ap-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Demonstrate Runtime Polymorphism using Virtual Functions and Abstract Classes in C++ or Java for a banking payment processor supporting CreditCard, MFS (bKash/Nagad), and InternetBanking.',
            solution: 'Implementation of abstract class/interface PaymentMethod with virtual processTransaction() method overridden in derived classes.',
            codeSolution: `#include <iostream>
#include <string>
#include <vector>

// Abstract Base Class
class PaymentProcessor {
public:
    virtual void processPayment(double amount) = 0; // Pure virtual function
    virtual ~PaymentProcessor() {} // Virtual destructor
};

class CardPayment : public PaymentProcessor {
    std::string cardNumber;
public:
    CardPayment(std::string card) : cardNumber(card) {}
    void processPayment(double amount) override {
        std::cout << "[Card] Processed BDT " << amount 
                  << " via Card ending in " << cardNumber.substr(cardNumber.length() - 4) << "\\n";
    }
};

class MfsPayment : public PaymentProcessor {
    std::string walletNumber;
public:
    MfsPayment(std::string wallet) : walletNumber(wallet) {}
    void processPayment(double amount) override {
        std::cout << "[MFS] Processed BDT " << amount 
                  << " via Wallet: " << walletNumber << "\\n";
    }
};

int main() {
    std::vector<PaymentProcessor*> paymentQueue;
    paymentQueue.push_back(new CardPayment("4532015112830366"));
    paymentQueue.push_back(new MfsPayment("01711223344"));

    for (PaymentProcessor* p : paymentQueue) {
        p->processPayment(5000.00);
        delete p;
    }
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['OOP', 'Polymorphism', 'C++', 'Abstract Class', 'Payment Gateway'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-cb-ap-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the RESTful architectural constraints. Compare HTTP methods: GET, POST, PUT, PATCH, and DELETE in terms of Idempotency and Safety in banking API gateways.',
            solution: `1. RESTful Architectural Constraints:
- Client-Server Separation
- Statelessness (each request contains all context necessary)
- Cacheability
- Uniform Interface (URI identification, self-descriptive messages, HATEOAS)
- Layered System (gateways, load balancers, proxies transparent to client)

2. HTTP Methods Matrix:
- GET: Safe (does not alter server state) & Idempotent (calling N times returns identical result). Used for fetching balance or account statements.
- POST: Unsafe & Non-Idempotent (calling N times creates N distinct records). Used for initiating a fund transfer.
- PUT: Unsafe & Idempotent (completely replaces resource; calling N times leaves state unchanged). Used for replacing full customer profile.
- PATCH: Unsafe & Non-Idempotent in general (applies partial delta update). Used for changing mobile phone number or email.
- DELETE: Unsafe & Idempotent (deleting resource once or 5 times leaves resource deleted).`,
            tags: ['Software Engineering', 'REST API', 'HTTP Methods', 'Idempotency'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-cb-ap-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python program to implement the Bellman-Ford Shortest Path algorithm on a directed weighted graph. Explain how it detects negative weight cycles.',
            solution: 'Bellman-Ford algorithm relaxing all edges V-1 times and checking for further reductions.',
            codeSolution: `def bellman_ford(num_vertices: int, edges: list[tuple[int, int, int]], source: int):
    """
    edges: list of (u, v, weight)
    """
    dist = [float('inf')] * num_vertices
    dist[source] = 0
    
    # Relax all edges (V - 1) times
    for _ in range(num_vertices - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                
    # Check for negative-weight cycles (Vth iteration)
    for u, v, w in edges:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            raise ValueError("Graph contains a negative weight cycle!")
            
    return dist

# Test Graph
edge_list = [(0, 1, 4), (0, 2, 5), (1, 2, -3), (2, 3, 3)]
distances = bellman_ford(4, edge_list, 0)
print("Shortest distances from source 0:", distances)`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Bellman Ford', 'Graph Theory', 'Python'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-cb-ap-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: Branch(BranchID, BranchName, Zone), Account(AccNo, BranchID, Balance). Write SQL queries to:\n(a) Find the average account balance of each Zone.\n(b) Find the Top 3 branches in each Zone having highest total deposit using Window Functions.',
            solution: 'Group by with aggregation and DENSE_RANK() partitioned by Zone.',
            codeSolution: `-- Query (a): Average Balance by Zone
SELECT b.Zone, AVG(a.Balance) AS Avg_Zone_Balance
FROM Branch b
JOIN Account a ON b.BranchID = a.BranchID
GROUP BY b.Zone;

-- Query (b): Top 3 Branches per Zone
WITH RankedBranches AS (
    SELECT 
        b.Zone,
        b.BranchID,
        b.BranchName,
        SUM(a.Balance) AS Total_Deposit,
        DENSE_RANK() OVER (
            PARTITION BY b.Zone 
            ORDER BY SUM(a.Balance) DESC
        ) AS rnk
    FROM Branch b
    JOIN Account a ON b.BranchID = a.BranchID
    GROUP BY b.Zone, b.BranchID, b.BranchName
)
SELECT Zone, BranchID, BranchName, Total_Deposit
FROM RankedBranches
WHERE rnk <= 3
ORDER BY Zone, rnk;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'DENSE_RANK', 'DBMS'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-cb-ap-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Compare B-Tree Index vs. Hash Index in Relational Databases in terms of space overhead, exact match lookup time, range query capability, and disk I/O efficiency. Which is preferable for bank ledger transactions?',
            solution: `1. Index Architecture Comparison:
- Exact Match Lookup: Hash Index achieves O(1) average time via hash bucket calculation. B-Tree takes O(log N) tree traversal.
- Range Queries: Hash Index CANNOT perform range queries (e.g. BETWEEN date1 AND date2) because hashes do not preserve sorting order. B-Tree leaf nodes are ordered sequentially as a doubly linked list, executing range scans in O(log N + K).
- Space Overhead: B-Tree has lower fragmentation and predictable fan-out. Hash tables require re-hashing and bucket chaining.

2. Ledger Transactions Preference:
B-Tree (specifically B+ Tree) is universally preferred for banking ledgers because almost all financial queries are range-based (date intervals, account number prefixes, balance thresholds).`,
            tags: ['DBMS', 'Indexing', 'B-Tree', 'Hash Index'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-cb-ap-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain the working of Linux Cron daemon for scheduled job automation in bank data centers. Give standard 5-field cron syntax examples for: (i) Running a script every midnight, (ii) Running a script every 15 minutes during branch working hours (9 AM - 5 PM, Sunday - Thursday).',
            solution: `1. Cron Daemon:
Linux background daemon that executes scheduled commands at specified dates and times based on configuration tables (crontab).

2. Cron Syntax (5 Fields):
\`Minute (0-59) | Hour (0-23) | Day-of-Month (1-31) | Month (1-12) | Day-of-Week (0-7, 0 or 7=Sun)\`

3. Schedule Configurations:
(i) Every midnight (00:00 every day):
\`0 0 * * * /opt/scripts/daily_interest_accrual.sh\`

(ii) Every 15 minutes during branch working hours (9 AM - 5 PM, Sunday to Thursday in Bangladesh):
\`*/15 9-17 * * 0-4 /opt/scripts/sync_teller_transactions.sh\``,
            tags: ['Linux', 'Cron', 'Automation', 'SysAdmin'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-cb-ap-nontech',
        name: 'Focus Writing & Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-cb-ap-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Digital Literacy and Cybersecurity Awareness: The Twin Pillars of Financial Inclusivity in Bangladesh" (Word limit: 250 words).',
            solution: `Key Points:
- Unprecedented growth in Mobile Financial Services (MFS) and agent banking across rural Bangladesh.
- The literacy gap: First-time digital banking users are often vulnerable to OTP social engineering and PIN sharing scams.
- Institutional responsibility: Scheduled banks must run mass media campaigns and design intuitive, vernacular user interfaces.
- Conclusion: Equitable financial inclusion is sustainable only when bolstered by user confidence and digital literacy.`,
            tags: ['Focus Writing', 'English', 'Financial Inclusion', 'Cybersecurity Awareness'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-cb-ap-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকগুলো গ্রামীণ অর্থনীতির চালিকাশক্তি হিসেবে কাজ করছে। অনলাইন ব্যাংকিং এবং মোবাইল ফিনান্সিয়াল সার্ভিসের মাধ্যমে প্রান্তিক জনগোষ্ঠীর সঞ্চয়কে জাতীয় অর্থনীতিতে অন্তর্ভুক্ত করা সম্ভব হয়েছে।"',
            solution: `Standard High-Quality Model Translation:
"State-owned commercial banks are functioning as the driving engine of the rural economy. Through online banking and mobile financial services, it has become possible to integrate the savings of marginalized communities into the national economy."`,
            tags: ['Translation', 'Bangla to English', 'State Commercial Banks'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 17. BPSC Assistant Programmer (Different Ministries & Departments)
  {
    id: 'ap-bpsc-ministries',
    title: 'Assistant Programmer, BPSC (Different Ministries & Departments)',
    searchQuery: 'BPSC Assistant Programmer Different Ministries Non-Cadre written question solution pdf',
    category: 'Ministry Assistant Programmer',
    jobId: 'BPSC-AP-Govt-Depts',
    circularYear: '2022-2024',
    examDate: 'May 20, 2024',
    examBody: 'BPSC (Bangladesh Public Service Commission)',
    participatingBanks: ['Ministry of Public Administration (MoPA)', 'Cabinet Division', 'Ministry of Land', 'BBS', 'DSHE'],
    ministryOrDepartment: 'Different Ministries & Departments (Non-Cadre Grade 9)',
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Official BPSC recruitment exam for Assistant Programmer under various government ministries and departments. Covers Software Development Life Cycle (Agile vs Waterfall), e-Nothi / electronic filing architecture, Linux server commands, relational normalization, and Cyber Security Act provisions.',
    keyTopics: ['SDLC (Agile Scrum vs Waterfall)', 'UML Sequence Diagrams for e-Nothi', 'Linux System Administration & Chmod', 'Relational Normalization 3NF', 'Smart Bangladesh e-Governance', 'Cyber Security Act 2023'],
    sections: [
      {
        id: 'sec-bpsc-ap-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-bpsc-ap-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Compare the Waterfall Model vs. Agile Scrum Framework for developing e-Governance software in government ministries. Draw a Use Case diagram or describe the key actors and flows in the national e-Nothi (electronic filing) system.',
            solution: `1. Waterfall vs. Agile Scrum in Ministry IT Projects:
- Waterfall Model:
  * Linear sequential phases (Requirements -> Design -> Implementation -> Verification -> Maintenance).
  * Best for: Government procurement contracts where complete specifications and tender documents (RFP) are legally frozen beforehand.
  * Disadvantage: High risk of failure if citizen requirements change mid-project; late testing phase.
- Agile Scrum:
  * Iterative and incremental delivery in 2-4 week Sprints.
  * Best for: Modern citizen-facing portals (e.g. MyGov, digital land mutation) where feedback and policy updates occur frequently.
  * Advantage: Working software delivered early and continuously; flexible adaptation to Ministry circulars.

2. National e-Nothi System Actors and Workflow:
- Actors: Dealing Assistant (DA), Section Officer (SO), Deputy Secretary (DS), Joint Secretary (JS), Secretary, and Citizen/Applicant.
- Core Flow:
  1. Citizen submits online application or Dak (letter) is scanned into the system.
  2. Dealing Assistant generates a new digital Nothi (file), drafts remarks/notes (Notey-Nothisthito), and flags relevant rules.
  3. Section Officer examines the note, attaches digital references, and forwards it to Deputy Secretary.
  4. Higher authorities (DS/JS/Secretary) review the file history, add digital signatures (PKI certified), and grant approval or return with observations.
  5. Automated notification and status update pushed to the citizen via SMS/Email.`,
            tags: ['Software Engineering', 'SDLC', 'Agile', 'e-Nothi', 'e-Governance', 'BPSC'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc-ap-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain Linux File Permissions in octal and symbolic representation. What do permissions 755 and 644 mean? Write Bash/Linux shell commands to: (a) Recursively change ownership of `/var/www/govapp` to user `nginx` and group `nginx`. (b) Find all `.log` files in `/var/log` larger than 50MB and delete files older than 30 days. (c) Monitor live memory usage and running processes.',
            solution: `Linux Administration & Commands Solution:
1. File Permissions:
- Permissions are split into 3 groups: Owner, Group, Others. Each has Read (4), Write (2), Execute (1).
- 755: Owner has Read+Write+Execute (4+2+1=7); Group has Read+Execute (4+0+1=5); Others have Read+Execute (5). Typically used for executable directories and web root folders.
- 644: Owner has Read+Write (4+2=6); Group has Read (4); Others have Read (4). Typically used for standard web files (HTML, PHP, config).

2. Shell Commands:
(a) Change ownership recursively:
sudo chown -R nginx:nginx /var/www/govapp

(b) Find logs > 50MB and older than 30 days, then delete:
find /var/log -type f -name "*.log" -size +50M -mtime +30 -exec rm -f {} \\;

(c) Monitor live memory and processes:
top
free -h -w
htop`,
            codeSolution: `#!/bin/bash
# Script: gov_server_maintenance.sh

# Change ownership
sudo chown -R nginx:nginx /var/www/govapp
sudo chmod -R 755 /var/www/govapp

# Delete archive logs older than 30 days
find /var/log -type f -name "*.log" -size +50M -mtime +30 -exec rm -f {} \\;

echo "Government application server maintenance completed successfully."`,
            solutionLanguage: 'bash',
            tags: ['Operating Systems', 'Linux', 'Bash Scripting', 'BPSC Server Admin'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc-ap-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'E-Governance & ICT Laws',
            questionText: 'What are Digital Signatures and Public Key Infrastructure (PKI)? Explain how Certifying Authorities (CA) under the Controller of Certifying Authorities (CCA) Bangladesh validate digital signatures for official government gazettes and e-Tender (e-GP) documents.',
            solution: `1. Digital Signatures & PKI:
A digital signature is a cryptographic mechanism providing Authenticity, Non-Repudiation, and Integrity for electronic documents.
- Mechanism:
  * The signer generates a hash digest of the document: H = SHA-256(Doc).
  * The hash is encrypted using the signer's Private Key: Signature = Encrypt(H, PrivateKey).
  * The recipient decrypts the signature using the signer's Public Key to retrieve H, computes SHA-256(Doc), and compares the two digests. If equal, the document is genuine and has not been tampered with.

2. Role of CCA and Root CA in Bangladesh:
- In Bangladesh, the Controller of Certifying Authorities (CCA) operates the Root CA under the Information and Communication Technology Act, 2006.
- Licensed CAs (such as Dohatec, BCC, etc.) issue Digital Signature Certificates (DSC) bound to officials' National IDs (NID) on secure cryptographic USB tokens (FIPS 140-2 Level 3 hardware).
- When a government engineer approves a tender in e-GP or a Secretary issues a digital gazette, the USB token signs the hash locally. The e-GP portal validates the certificate path up to the Bangladesh National Root CA and verifies timestamping and CRL (Certificate Revocation List).`,
            tags: ['Cybersecurity', 'Digital Signature', 'PKI', 'e-GP', 'ICT Act'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc-ap-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Schema for Ministry Land Mutation: Application(AppID, CitizenNID, MouzaID, KhatianNo, SubmissionDate, Status), Citizen(CitizenNID, Name, MobileNo, District). Write an SQL query to retrieve the District name, total number of pending applications (Status = "PENDING"), and count of unique citizens waiting for mutation, ordered by pending count descending.',
            solution: 'Join Application and Citizen, filter on PENDING, group by District, and sort.',
            codeSolution: `SELECT 
    c.District,
    COUNT(a.AppID) AS Total_Pending_Applications,
    COUNT(DISTINCT a.CitizenNID) AS Unique_Citizens_Waiting
FROM Application a
JOIN Citizen c ON a.CitizenNID = c.CitizenNID
WHERE a.Status = 'PENDING'
GROUP BY c.District
ORDER BY Total_Pending_Applications DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'e-Governance', 'Aggregation', 'Land Mutation', 'BPSC'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc-ap-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'E-Governance & ICT Laws',
            questionText: 'Discuss the key provisions of the Cyber Security Act 2023 of Bangladesh regarding critical information infrastructure (CII) protection, digital forensic investigations, and penalties for unauthorized access to state portals.',
            solution: `1. Critical Information Infrastructure (CII):
- Definition: Any physical or virtual information system, network, or data center whose incapacitation would have a debilitating impact on national security, economy, public health, or sovereignty (e.g. Bangladesh Bank, NBR, Election Commission NID, Power Grid, e-GP).
- Mandatory Safeguards: Mandatory periodic cybersecurity audits and compliance with national cybersecurity agency guidelines.

2. Digital Forensics & Investigation Powers:
- Authorizes establishment of National Cyber Security Agency and forensic laboratories.
- Regulates lawful interception and chain of custody for digital evidence presented in judicial proceedings.

3. Penalties for Illegal Access:
- Unauthorized penetration, hacking, or denial-of-service targeting designated CII carries severe punitive prison terms and financial fines.`,
            tags: ['ICT Laws', 'Cyber Security Act', 'CII', 'e-Governance', 'Bangladesh'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc-ap-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the Architecture of BanglaGovNet and Info-Sarker projects. How do these fiber optic backbones interconnect Union Digital Centers (UDC), Upazila complexes, and Ministry Secretariats?',
            solution: `1. BanglaGovNet & Info-Sarker (Phases I, II, III):
- Strategic Objectives: Establishing a nationwide high-speed government intranet linking all 64 districts, 492 Upazilas, and thousands of Union Parishads to the National Data Center.
- Core Infrastructure:
  * Dense Wavelength Division Multiplexing (DWDM) optical fiber cables laid along railway and road right-of-ways.
  * Government IP-VPN connecting ministries, directorates, and field administration.
- Citizen Service Delivery:
  * Empowers Union Digital Centers (UDCs) to issue digital birth certificates, land records (Khatian), and social allowances locally without villagers traveling to district headquarters.`,
            tags: ['e-Governance', 'Info-Sarker', 'BanglaGovNet', 'Networking', 'BPSC'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-bpsc-ap-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-bpsc-ap-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'বাংলা ফোকাস রাইটিং: "স্মার্ট বাংলাদেশ ২০৪১ রূপকল্প বাস্তবায়নে ই-নথি ও ডিজিটাল পাবলিক সার্ভিসের ভূমিকা" (শব্দসীমা: ২৫০-৩০০ শব্দ)।',
            solution: `মডেল পয়েন্ট ও মূল কাঠামো:
১. ভূমিকা:
ডিজিটাল বাংলাদেশ থেকে স্মার্ট বাংলাদেশ ২০৪১-এ উত্তরণের মূল ভিত্তি হলো একটি নাগরিক-বান্ধব, কাগজবিহীন এবং স্বচ্ছ সরকারি সেবা কাঠামো গড়ে তোলা।

২. ই-নথি ও মাইগভ প্ল্যাটফর্মের প্রভাব:
- আমলাতান্ত্রিক জটিলতা ও ফাইল আটকে থাকার সংস্কৃতি দূরীকরণ।
- ডিজিটাল নথিতে প্রতিটি স্তরের কর্মকর্তার সিদ্ধান্তের সময় ও স্বাক্ষর অপরিবর্তনযোগ্যভাবে সংরক্ষিত থাকে, যা প্রাতিষ্ঠানিক জবাবদিহিতা নিশ্চিত করে।
- মাইগভ (MyGov) পোর্টালের মাধ্যমে শত শত নাগরিক সেবা একটিমাত্র ডিজিটাল ছাতার নিচে চলে এসেছে।

৩. স্মার্ট সিটিজেন ও ক্যাশলেস সমাজ:
- সেবা গ্রহণে ঘুষ ও দালালের দৌরাত্ম্য বন্ধ হয়েছে।
- প্রত্যন্ত অঞ্চলের নাগরিকরা ইউনিয়ন ডিজিটাল সেন্টার (UDC) থেকে সহজে সেবা পাচ্ছেন।

৪. উপসংহার:
দক্ষ সরকারি কর্মকর্তা তৈরি এবং নিরবচ্ছিন্ন সাইবার পরিকাঠামো নিশ্চিত করার মাধ্যমেই স্মার্ট গভর্নেন্স পূর্ণতা লাভ করবে।`,
            tags: ['Focus Writing', 'Bangla', 'Smart Bangladesh', 'e-Governance'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc-ap-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "সরকারি দপ্তরের কার্যক্রমে তথ্যপ্রযুক্তির প্রয়োগে স্বচ্ছতা ও গতিশীলতা বৃদ্ধি পেয়েছে। ই-জিপি ব্যবস্থার মাধ্যমে সরকারি ক্রয় প্রক্রিয়ায় অনিয়ম রোধ করা সম্ভব হয়েছে।"',
            solution: `Standard High-Quality Model Translation:
"The application of information technology in government departmental operations has augmented transparency and dynamism. Through the e-GP system, preventing irregularities in the public procurement process has become feasible."`,
            tags: ['Translation', 'Bangla to English', 'e-GP', 'Public Procurement'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 18. ICT Division / DoICT Assistant Programmer
  {
    id: 'ap-ict-division',
    title: 'Assistant Programmer, ICT Division (DoICT)',
    searchQuery: 'ICT Division Assistant Programmer Department of ICT written question solution pdf',
    category: 'Ministry Assistant Programmer',
    jobId: 'DoICT-AP-2024',
    circularYear: '2023-2024',
    examDate: 'August 12, 2024',
    examBody: 'BPSC (Bangladesh Public Service Commission)',
    participatingBanks: ['Department of Information and Communication Technology (DoICT)', 'ICT Division'],
    ministryOrDepartment: 'Ministry of Posts, Telecommunications and Information Technology',
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The technical examination for Assistant Programmer under the Department of ICT (DoICT). Features Model-View-Controller (MVC) architecture, JSON Web Tokens (JWT) authentication flow, database stored procedures, National Data Center Tier-IV standards, OWASP web security, and bilingual translation.',
    keyTopics: ['MVC Architecture', 'JWT Authentication', 'Stored Procedures in PostgreSQL', 'Tier-IV Data Center', 'OWASP Top 10', 'Smart Bangladesh 2041'],
    sections: [
      {
        id: 'sec-doict-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-doict-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Database & SQL',
            questionText: 'Write a Stored Procedure in PostgreSQL or MySQL that receives CitizenNID, ServiceID, and FeeAmount. It verifies if the citizen exists, logs a transaction record, updates the service application status to "PAID", and returns the generated Transaction Reference Number. Handle exceptions with transaction rollback.',
            solution: 'Stored Procedure with transaction block and exception handling.',
            codeSolution: `-- Stored Procedure for Citizen Service Payment in PostgreSQL
CREATE OR REPLACE PROCEDURE process_citizen_payment(
    p_citizen_nid VARCHAR(20),
    p_service_id INT,
    p_fee_amount DECIMAL(10,2),
    OUT p_txn_ref VARCHAR(50)
)
LANGUAGE plpgsql
AS $$
DECLARE
    v_citizen_exists BOOLEAN;
BEGIN
    SELECT EXISTS(SELECT 1 FROM Citizens WHERE nid = p_citizen_nid) INTO v_citizen_exists;
    
    IF NOT v_citizen_exists THEN
        RAISE EXCEPTION 'Citizen with NID % does not exist in National Database.', p_citizen_nid;
    END IF;

    p_txn_ref := 'TXN-GOV-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0');

    INSERT INTO PaymentLogs (txn_ref, citizen_nid, service_id, amount, payment_time, status)
    VALUES (p_txn_ref, p_citizen_nid, p_service_id, p_fee_amount, NOW(), 'SUCCESS');

    UPDATE ServiceApplications
    SET payment_status = 'PAID',
        txn_ref = p_txn_ref,
        updated_at = NOW()
    WHERE service_id = p_service_id AND citizen_nid = p_citizen_nid;

    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE NOTICE 'Payment processing failed: %', SQLERRM;
        p_txn_ref := NULL;
END;
$$;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Stored Procedure', 'PostgreSQL', 'DoICT', 'e-Governance'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-doict-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the architecture and security tiers of the National Data Center (Tier-IV) established in Kaliakair, Gazipur. What does a 99.995% uptime availability guarantee imply in terms of annual allowable downtime?',
            solution: `1. Tier-IV National Data Center Kaliakair:
- Tier-IV (Uptime Institute Standard) is the highest classification of data center fault tolerance.
- Architecture:
  * 2N+1 or 2(N+1) Full Redundancy: Every power path, cooling loop, backup diesel generator, and network backbone uplink is completely duplicated and physically separated.
  * Fault Tolerant: System continues running uninterrupted even during an unplanned catastrophic outage of an entire primary power or cooling subsystem.
  * Dual Power Feeds: Dual independent utility grid connections backed by redundant UPS clusters and on-site fuel reserves for continuous operation.

2. Uptime 99.995% Mathematical Calculation:
- Total minutes in a standard year (365 days):
  365 days * 24 hours/day * 60 minutes/hour = 525,600 minutes.
- Unavailability percentage = 100% - 99.995% = 0.005%.
- Allowable annual downtime:
  525,600 minutes * 0.00005 = 26.28 minutes per year (or ~0.86 seconds per day!).`,
            tags: ['Data Center', 'Tier IV', 'High Availability', 'ICT Division'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-doict-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the Model-View-Controller (MVC) architectural pattern. How does it separate concerns in modern web application frameworks (such as Laravel or Spring Boot)? Trace the request-response lifecycle when a citizen queries their passport status.',
            solution: `1. MVC Components:
- Model: Manages data logic, business rules, and database entity relationships (e.g. PassportApplication entity).
- View: Renders the user interface (HTML/CSS/JSON) presented to the citizen browser or mobile app.
- Controller: Intercepts incoming HTTP requests, processes input parameters, calls Model methods, and selects the appropriate View to return.

2. Citizen Passport Query Lifecycle:
1. Citizen enters Tracking Number and clicks "Submit" -> Browser issues HTTP GET to /passport/status?id=1001.
2. Route maps to PassportController::showStatus(id).
3. Controller validates input format and queries PassportModel::findById(1001).
4. Model executes SQL query against database and returns domain object.
5. Controller passes data to status.view template or formats JSON response.
6. Web server delivers rendered HTML/JSON to the citizen device.`,
            tags: ['Software Engineering', 'MVC', 'Web Architecture', 'DoICT'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-doict-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Discuss the OWASP Top 10 Web Application Vulnerabilities with special emphasis on SQL Injection (SQLi) and Cross-Site Scripting (XSS). Provide code examples of vulnerable code and corresponding secure parameterized remediation.',
            solution: `1. SQL Injection (SQLi):
- Vulnerability: Unsanitized user inputs concatenated directly into SQL command strings.
  * Vulnerable Code: \`query = "SELECT * FROM Users WHERE user = '" + input + "' AND pass = '" + pass + "'"\`
  * Exploit input: \`' OR '1'='1\` dumps all records.
- Secure Remediation (Prepared Statements):
  * Use parameterized queries with bound variables:
  * \`SELECT * FROM Users WHERE user = ? AND pass = ?\`

2. Cross-Site Scripting (XSS):
- Vulnerability: Application includes untrusted user data in a web page without proper validation or escaping, allowing attackers to execute arbitrary JavaScript in victim browsers.
- Types: Stored XSS, Reflected XSS, DOM-based XSS.
- Remediation: Context-aware HTML entity encoding, Content Security Policy (CSP) headers, and modern reactive frontend frameworks (React/Angular) that escape strings by default.`,
            tags: ['Cybersecurity', 'OWASP Top 10', 'SQLi', 'XSS', 'Web Security'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-doict-5',
            questionNo: '5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python script using the `requests` library to fetch JSON data from a government REST API endpoint (`https://api.mygov.bd/v1/services`), parse the array of services, filter services categorized under "Education", and display their names and service fees.',
            solution: 'Python script handling HTTP GET, response status validation, and list comprehension filtering.',
            codeSolution: `import requests

def fetch_education_services(api_url: str):
    try:
        response = requests.get(api_url, timeout=10)
        response.raise_for_status() # Raise error for bad HTTP codes (4xx, 5xx)
        
        data = response.json()
        services = data.get("services", [])
        
        edu_services = [s for s in services if s.get("category") == "Education"]
        
        print(f"Total Education Services Found: {len(edu_services)}")
        print("-" * 50)
        for svc in edu_services:
            name = svc.get("name")
            fee = svc.get("fee_bdt", 0)
            print(f"Service: {name:<35} | Fee: BDT {fee}")
            
    except requests.exceptions.RequestException as e:
        print(f"Network / API Error: {e}")

# Example invocation
fetch_education_services("https://api.mygov.bd/v1/services")`,
            solutionLanguage: 'python',
            tags: ['Python', 'REST API', 'JSON', 'DoICT'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-doict-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'What is CI/CD (Continuous Integration and Continuous Deployment)? Explain how an automated CI/CD pipeline (using GitLab CI or GitHub Actions) accelerates government software delivery while enforcing automated unit testing and security code scanning.',
            solution: `1. Definition:
- CI (Continuous Integration): Developers merge code changes into a shared central repository multiple times a day. Each merge triggers an automated build and test pipeline.
- CD (Continuous Delivery/Deployment): Automatically stages or deploys validated code into staging or production environments.

2. Typical Pipeline Stages:
1. Build: Compile source code and assemble Docker containers.
2. Unit & Integration Testing: Run test suites (e.g. pytest, JUnit) to verify logic and prevent regressions.
3. SAST & Dependency Scanning: Static Application Security Testing (e.g. SonarQube) scans for vulnerabilities and hardcoded secrets.
4. Deploy: Deploys container image into Kubernetes cluster with zero downtime via rolling updates.`,
            tags: ['DevOps', 'CI/CD', 'Software Engineering', 'Automation'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-doict-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-doict-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Vision of Smart Bangladesh 2041: Building Smart Citizens, Smart Government, Smart Society, and Smart Economy" (Word limit: 250 words).',
            solution: `Key Structure:
- Four Pillars of Smart Bangladesh 2041:
  1. Smart Citizen: Tech-savvy population with high digital literacy and 21st-century problem-solving capabilities.
  2. Smart Government: Paperless, predictive e-governance utilizing AI analytics for proactive citizen welfare delivery.
  3. Smart Society: Equitable, inclusive community where digital services bridge urban-rural divides.
  4. Smart Economy: 100% cashless, knowledge-based economy with robust tech innovation, software exports, and high GDP contribution from ICT industries.
- Conclusion: Transforming Bangladesh into a self-reliant digital powerhouse.`,
            tags: ['Focus Writing', 'English', 'Smart Bangladesh 2041', 'ICT Division'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-doict-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "আইসিটি বিভাগ দেশের তরুণ প্রজন্মকে দক্ষ মানবসম্পদে রূপান্তরের জন্য বিভিন্ন প্রশিক্ষণ কর্মসূচি পরিচালনা করছে। ফ্রিল্যান্সিং ও সফটওয়্যার রফতানি দেশের বৈদেশিক মুদ্রা অর্জনে নতুন দিগন্ত উন্মোচন করেছে।"',
            solution: `Standard High-Quality Model Translation:
"The ICT Division is executing diverse training programs to transform the country's young generation into skilled human resources. Freelancing and software exports have unlocked a new horizon in earning foreign currency for the nation."`,
            tags: ['Translation', 'Bangla to English', 'ICT Division', 'Freelancing'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 19. Bangladesh Election Commission Assistant Programmer
  {
    id: 'ap-election-commission',
    title: 'Assistant Programmer, Bangladesh Election Commission',
    searchQuery: 'Election Commission Bangladesh Assistant Programmer written question solution pdf',
    category: 'Ministry Assistant Programmer',
    jobId: 'EC-AP-2023',
    circularYear: '2022-2023',
    examDate: 'December 02, 2023',
    examBody: 'BPSC / BUET',
    participatingBanks: ['Bangladesh Election Commission Secretariat'],
    ministryOrDepartment: 'Election Commission Secretariat',
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Election Commission Assistant Programmer exam. Focuses on Biometric Voter Registration Database (AFIS), deduplication algorithms, database partitioning for 120 million citizen records, Electronic Voting Machine (EVM) firmware security, and bilingual translation.',
    keyTopics: ['AFIS Biometrics', 'Database Partitioning 120M Records', 'SQL Indexing B+ Tree', 'Data Privacy', 'EVM Security', 'Focus Writing'],
    sections: [
      {
        id: 'sec-ec-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-ec-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'The National Voter Database stores records of over 120 million citizens, including demographic data and 10-finger biometric minutiae. Discuss how Range and Hash Partitioning can be applied to optimize query performance when searching by Division, District, Upazila, and NID Number.',
            solution: `1. Composite Partitioning Strategy for 120M Voter Database:
To support both regional election reporting and instant 1-to-1 NID verification:
- Primary Level (Range Partitioning by Region / Division):
  * The database is divided into 8 main range partitions corresponding to the 8 administrative divisions of Bangladesh.
  * Queries like "List all voters in Upazila X of District Y" execute Partition Pruning, scanning only the relevant regional partition and ignoring 85%+ of the database blocks.
- Secondary Level (Hash Sub-partitioning on NID Number):
  * Within each regional partition, rows are distributed across 16 hash sub-partitions using hash(NID_Number).
  * This guarantees uniform disk I/O distribution and prevents hot-spot disks during nationwide election voter lookups.

2. Global vs. Local Indexes:
- Local Partitioned Indexes: Created on (District_Code, Upazila_Code, Voter_No). Highly efficient for localized polling center tallying.
- Unique Global Index: Created on NID_Number to guarantee nationwide uniqueness across all partitions and ensure sub-second lookups for citizen verification API calls.`,
            tags: ['Database', 'Partitioning', 'Election Commission', 'Large Scale Systems'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-ec-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Explain Automated Fingerprint Identification Systems (AFIS). Describe the concept of Minutiae Extraction (Bifurcations and Ridge Endings) and how 1:N Biometric Deduplication prevents fraudulent duplicate voter registrations.',
            solution: `1. Fingerprint Minutiae Points:
- Ridge Ending: Point where a ridge terminates abruptly.
- Ridge Bifurcation: Point where a single ridge forks or branches into two distinct ridges.
- Minutiae Representation: Each point is encoded as a coordinate vector (x, y, theta, type).

2. 1:N Biometric Deduplication Algorithm:
- When a new applicant registers, their 10 fingerprint templates are compared against the entire 120M repository.
- Fast Pre-filtering: Fingerprints are first classified into pattern classes (Loop, Whorl, Arch) and ridge density bins, eliminating 90% of candidates instantly.
- Minutiae Matching: High-performance GPU clusters run geometric point-pattern matching on remaining candidates. If match score exceeds threshold, the system flags duplicate voter registration.`,
            tags: ['Algorithms', 'Biometrics', 'AFIS', 'Election Commission'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-ec-3',
            questionNo: '3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider tables: Voter(VoterID, NID, Name, PollingCenterID, Age), PollingCenter(CenterID, CenterName, UpazilaID, Capacity). Write SQL queries to:\n(a) Identify any Polling Centers where the total assigned voters exceed its Capacity by more than 10%.\n(b) Find the average age of voters in each Polling Center.',
            solution: 'Join Voter and PollingCenter, compute aggregations with GROUP BY and HAVING.',
            codeSolution: `-- Query (a): Overcrowded Polling Centers
SELECT 
    pc.CenterID,
    pc.CenterName,
    pc.Capacity,
    COUNT(v.VoterID) AS Total_Voters,
    (COUNT(v.VoterID) - pc.Capacity) AS Excess_Voters
FROM PollingCenter pc
JOIN Voter v ON pc.CenterID = v.PollingCenterID
GROUP BY pc.CenterID, pc.CenterName, pc.Capacity
HAVING COUNT(v.VoterID) > (pc.Capacity * 1.10)
ORDER BY Excess_Voters DESC;

-- Query (b): Average Voter Age per Center
SELECT 
    pc.CenterID,
    pc.CenterName,
    ROUND(AVG(v.Age), 1) AS Average_Voter_Age
FROM PollingCenter pc
JOIN Voter v ON pc.CenterID = v.PollingCenterID
GROUP BY pc.CenterID, pc.CenterName;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Aggregations', 'HAVING', 'Election Commission'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ec-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Describe the security architecture of Electronic Voting Machines (EVMs) used in Bangladesh. Explain why EVMs are standalone, non-networked devices without Wi-Fi, Bluetooth, or Internet connectivity, and how One-Time Programmable (OTP) microcontrollers prevent code tampering.',
            solution: `1. Standalone Architecture:
- EVMs are strictly closed, air-gapped systems completely devoid of wired Ethernet, Wi-Fi, cellular radio, or Bluetooth hardware modules.
- Being non-networked renders remote hacking, denial of service, or wireless ballot interception physically impossible.

2. One-Time Programmable (OTP) Chips:
- Firmware is burned permanently into OTP microcontrollers at the fabrication factory.
- Once burned, the memory cannot be overwritten, flashed, or modified via software updates or external cables.

3. Ballot Unit & Control Unit Communication:
- The Ballot Unit and Control Unit communicate via proprietary encrypted physical serial cables using custom cryptographic handshakes. Any cable tampering or unauthorized third-party device insertion halts the machine immediately with a tamper alarm.`,
            tags: ['Cybersecurity', 'EVM', 'Air-Gap', 'Election Security'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ec-5',
            questionNo: '5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C or Python program to validate a Bangladeshi National ID (NID) number format (supporting both legacy 10-digit Smart NID and 17-digit birth-year prefixed NID). Check that all characters are digits and length is exactly 10 or 17.',
            solution: 'String format validation and length verification.',
            codeSolution: `def validate_bangladesh_nid(nid_str: str) -> bool:
    """
    Validates Bangladesh National ID (NID).
    Valid formats:
    - 10-digit Smart NID
    - 13-digit legacy (without birth year) or 17-digit (with 4-digit birth year prefix)
    """
    cleaned = nid_str.strip()
    
    if not cleaned.isdigit():
        return False
        
    length = len(cleaned)
    if length == 10:
        return True # Modern Smart NID
    elif length == 17:
        # Check that first 4 digits represent a plausible birth year (1900 - current year)
        birth_year = int(cleaned[:4])
        if 1900 <= birth_year <= 2026:
            return True
            
    return False

# Test cases
print(validate_bangladesh_nid("19922615481234567")) # True (17-digit)
print(validate_bangladesh_nid("8234567890"))        # True (10-digit Smart NID)
print(validate_bangladesh_nid("12345ABCDE"))        # False (Alpha characters)`,
            solutionLanguage: 'python',
            tags: ['Python', 'NID Validation', 'Election Commission'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ec-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'E-Governance & ICT Laws',
            questionText: 'Explain the technical and privacy requirements of National Identity (NID) Verification Service APIs used by commercial banks and telecom operators for e-KYC and SIM registration.',
            solution: `1. NID Verification API Architecture:
- Operated by Election Commission / NIDW data center.
- Provides secure RESTful web service endpoints over dedicated leased lines or IPsec VPNs.
- High-volume throughput handling millions of biometric/demographic queries daily.

2. Verification Modes:
- Demographic Lookup: Returns citizen name, father name, address, and photo based on NID + Date of Birth.
- Biometric 1:1 Match: Client submits finger minutiae template along with NID; server matches against stored template and returns MATCH/NO-MATCH binary status.

3. Privacy & Data Protection Safeguards:
- Consent Requirement: Citizen consent must be obtained prior to querying.
- Role-Based Access: Commercial entities cannot view raw database rows; only verification flags or restricted KYC fields are returned.
- Immutable Audit Logging: Every API hit is logged with client IP, certificate ID, and timestamp.`,
            tags: ['e-KYC', 'NID API', 'Data Privacy', 'Election Commission'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-ec-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-ec-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Role of Biometric National Identity (NID) in Strengthening Governance and Preventing Identity Fraud in Bangladesh" (Word limit: 250 words).',
            solution: `Key Structure:
- Evolution: Transition from manual paper voter cards to high-security biometric Smart NID cards.
- Multi-Sector Governance: NID is the single source of truth for bank account opening (e-KYC), passport issuance, land ownership registration, SIM card verification, and social safety net cash transfers.
- Eliminating Ghost Beneficiaries: Biometric fingerprint and iris matching has eliminated millions of ghost beneficiaries from safety net programs.
- Conclusion: NID is the fundamental digital bedrock of transparent public administration.`,
            tags: ['Focus Writing', 'English', 'NID', 'Governance'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ec-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "নির্বাচন কমিশনের জাতীয় ভোটার ডাটাবেজ দেশের অন্যতম গুরুত্বপূর্ণ তথ্য পরিকাঠামো। এই ডাটাবেজের গোপনীয়তা ও সার্বিক নিরাপত্তা বজায় রাখা জাতীয় সুরক্ষার অবিচ্ছেদ্য অংশ।"',
            solution: `Standard High-Quality Model Translation:
"The national voter database of the Election Commission is one of the most vital critical information infrastructures of the country. Upholding the confidentiality and comprehensive security of this database is an integral part of national security."`,
            tags: ['Translation', 'Bangla to English', 'Election Commission'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 20. National Board of Revenue (NBR) & Ministry of Finance Assistant Programmer
  {
    id: 'ap-nbr-finance',
    title: 'Assistant Programmer, NBR & Ministry of Finance',
    searchQuery: 'National Board of Revenue NBR Assistant Programmer written question solution pdf',
    category: 'Ministry Assistant Programmer',
    jobId: 'NBR-AP-Finance',
    circularYear: '2023-2024',
    examDate: 'October 21, 2024',
    examBody: 'BPSC',
    participatingBanks: ['National Board of Revenue (NBR)', 'Ministry of Finance'],
    ministryOrDepartment: 'Internal Resources Division, Ministry of Finance',
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The NBR / Ministry of Finance Assistant Programmer written test. Highlights automated income tax bracket computation, e-TIN / e-Return authentication, database window functions, ASYCUDA World customs integration, and financial integrity audit logs.',
    keyTopics: ['Tax Computation Algorithm', 'SQL Window Functions', 'e-Return Security', 'ACID Transactions', 'ASYCUDA World Customs', 'Financial Audit Logging'],
    sections: [
      {
        id: 'sec-nbr-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-nbr-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python program to calculate the progressive individual income tax in Bangladesh based on the tax brackets: (1) First BDT 3,50,000: 0%, (2) Next BDT 1,00,000: 5%, (3) Next BDT 3,00,000: 10%, (4) Next BDT 4,00,000: 15%, (5) Next BDT 5,00,000: 20%, (6) Remaining balance: 25%. Ensure clean input validation.',
            solution: 'Progressive tax computation algorithm traversing tax slabs sequentially.',
            codeSolution: `def calculate_bd_income_tax(taxable_income: float, is_female_or_senior: bool = False) -> dict:
    """
    Computes progressive individual income tax for Bangladesh.
    """
    if taxable_income < 0:
        raise ValueError("Income cannot be negative.")
        
    initial_slab = 400000.0 if is_female_or_senior else 350000.0
    
    slabs = [
        (initial_slab, 0.00),
        (100000.0, 0.05),
        (300000.0, 0.10),
        (400000.0, 0.15),
        (500000.0, 0.20),
        (float('inf'), 0.25)
    ]
    
    remaining = taxable_income
    total_tax = 0.0
    breakdown = []
    
    for slab_limit, rate in slabs:
        if remaining <= 0:
            break
            
        taxable_in_slab = min(remaining, slab_limit)
        tax_amount = taxable_in_slab * rate
        total_tax += tax_amount
        
        breakdown.append({
            "slab_amount": taxable_in_slab,
            "rate_percent": int(rate * 100),
            "tax": tax_amount
        })
        
        remaining -= taxable_in_slab
        
    return {
        "taxable_income": taxable_income,
        "total_tax_payable": round(total_tax, 2),
        "breakdown": breakdown
    }

# Example: Annual Income BDT 12,00,000
result = calculate_bd_income_tax(1200000)
print(f"Total Tax Payable: BDT {result['total_tax_payable']}")
for b in result['breakdown']:
    print(f"  Slab BDT {b['slab_amount']:,.0f} @ {b['rate_percent']}% = BDT {b['tax']:,.0f}")`,
            solutionLanguage: 'python',
            tags: ['Programming', 'Python', 'Tax Calculation', 'NBR', 'Ministry of Finance'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-nbr-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: TaxReturn(ReturnID, TIN, TaxZone, AssessmentYear, TotalIncome, TaxPaid, SubmissionTime). Write an SQL query using Window Functions to find the Top 2 highest taxpayers in each TaxZone for Assessment Year "2023-2024".',
            solution: 'Partition by TaxZone and rank by TotalIncome descending using DENSE_RANK().',
            codeSolution: `WITH RankedTaxpayers AS (
    SELECT 
        TaxZone,
        TIN,
        TotalIncome,
        TaxPaid,
        DENSE_RANK() OVER (
            PARTITION BY TaxZone 
            ORDER BY TotalIncome DESC
        ) AS rank_in_zone
    FROM TaxReturn
    WHERE AssessmentYear = '2023-2024'
)
SELECT TaxZone, TIN, TotalIncome, TaxPaid
FROM RankedTaxpayers
WHERE rank_in_zone <= 2
ORDER BY TaxZone, rank_in_zone;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'DENSE_RANK', 'Tax Assessment', 'NBR'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-nbr-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the Architecture of ASYCUDA World (Automated System for Customs Data) used by NBR across seaports, land customs, and airports. How does it handle electronic Manifest filing, Bill of Entry processing, and automated customs duty calculation?',
            solution: `1. ASYCUDA World Architecture:
- Developed by UNCTAD, ASYCUDA World is a web-native client-server customs administration system built on Java and Oracle DBMS.
- Integrated via XML web services with port authorities, shipping agents, and Bangladesh Bank RTGS.

2. Core Functional Workflow:
1. Shipping Manifest: Shipping agents submit electronic manifests prior to vessel arrival at Chittagong or Mongla Port.
2. Bill of Entry (B/E): Importers/C&F agents submit electronic declarations with HS Codes (Harmonized System).
3. Automated Duty Calculation: System computes Customs Duty (CD), Supplementary Duty (SD), VAT, and Advance Income Tax (AIT) automatically based on tariff schedules.
4. Risk Management (Selectivity Engine): Classifies declarations into Green (Direct clearance without physical check), Yellow (Document review only), and Red (Physical container inspection).
5. E-Payment: Integrates with commercial bank portals for direct treasury account duty credit.`,
            tags: ['e-Governance', 'ASYCUDA World', 'Customs', 'NBR', 'System Architecture'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-nbr-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the security mechanisms required for the National Taxpayer e-Return web portal (`etaxnbr.gov.bd`). How are password security, OTP verification, and session timeout implemented to prevent unauthorized access to sensitive tax returns?',
            solution: `1. Security Layers for e-Return:
- TLS 1.3 Encryption: All communications encrypted using HTTPS with HSTS headers to prevent downgrade attacks.
- Multi-Factor Authentication (MFA): Login requires biometric-verified mobile phone OTP matched with the taxpayer's National ID (NID).
- Cryptographic Password Hashing: User passwords salted and hashed using bcrypt with high work factor.
- Automatic Session Timeout: Idle sessions terminate automatically after 15 minutes to prevent unauthorized viewing on shared cyber cafe PCs.
- Tamper-Proof Audit Logging: Every view, modification, and submission of tax returns logs IP address, user agent, and timestamp into an append-only audit trail.`,
            tags: ['Cybersecurity', 'e-Return', 'MFA', 'Tax Security', 'NBR'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-nbr-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Define Database Normalization. Explain 1NF, 2NF, 3NF, and BCNF with a taxpayer assessment schema scenario. Why is normalization essential for tax data integrity?',
            solution: `1. Purpose of Normalization:
Eliminates data redundancy and prevents Insert, Update, and Delete anomalies in tax records.

2. Normal Forms:
- 1NF: Every attribute must hold only atomic (indivisible) values, and each record must have a unique primary key.
- 2NF: Must be in 1NF, and no non-prime attribute should be partially dependent on any candidate key (applies to composite keys).
- 3NF: Must be in 2NF, and no transitive dependency exists (non-prime attribute must not depend on another non-prime attribute).
- BCNF: Stricter version of 3NF where for every functional dependency X -> Y, X must be a SUPERKEY.`,
            tags: ['DBMS', 'Normalization', '3NF', 'BCNF'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-nbr-6',
            questionNo: '6',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python program to parse an electronic customs invoice containing line items with quantity, unit price, and customs duty percentage, and compute the total invoice value, total duty payable, and grand total.',
            solution: 'Data parsing and financial calculation in Python.',
            codeSolution: `def compute_customs_invoice(line_items: list[dict]) -> dict:
    """
    line_items format: [{'item': 'Router', 'qty': 10, 'unit_price': 15000, 'duty_pct': 15}]
    """
    total_goods_val = 0.0
    total_duty = 0.0
    
    for item in line_items:
        item_val = item['qty'] * item['unit_price']
        duty_amt = item_val * (item['duty_pct'] / 100.0)
        
        total_goods_val += item_val
        total_duty += duty_amt
        
    grand_total = total_goods_val + total_duty
    return {
        "total_goods_value": round(total_goods_val, 2),
        "total_customs_duty": round(total_duty, 2),
        "grand_total_payable": round(grand_total, 2)
    }

# Sample Execution
items = [
    {"item": "Enterprise Server", "qty": 5, "unit_price": 450000, "duty_pct": 5},
    {"item": "Cisco Core Switch", "qty": 10, "unit_price": 280000, "duty_pct": 10}
]
res = compute_customs_invoice(items)
print("Goods Value: BDT", res["total_goods_value"])
print("Customs Duty: BDT", res["total_customs_duty"])
print("Grand Total: BDT", res["grand_total_payable"])`,
            solutionLanguage: 'python',
            tags: ['Python', 'Customs Duty', 'Financial Calculation', 'NBR'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-nbr-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-nbr-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Automating Revenue Administration: The Economic Impact of e-TIN, e-Return, and Electronic Fiscal Devices (EFD)" (Word limit: 250 words).',
            solution: `Key Thematic Analysis:
- Digital Transformation in Revenue: Overcoming manual tax filing barriers and harassment through automated e-Return portals.
- Broadening the Tax Base: Linking e-TIN with bank accounts, trade licenses, and vehicle registrations expands voluntary compliance.
- Value Added Tax (VAT) Automation: Deploying Electronic Fiscal Devices (EFD) and Sales Data Controllers (SDC) in retail outlets transmits VAT collection directly to NBR servers in real time.
- Economic Impact: Increasing the tax-to-GDP ratio to fund national mega-projects and sovereign development.`,
            tags: ['Focus Writing', 'English', 'Revenue Automation', 'NBR'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-nbr-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "অনলাইন আয়কর রিটার্ন দাখিলের সুবিধা চালু হওয়ায় করদাতারা ঘরে বসেই দ্রুত কর পরিশোধ করতে পারছেন। এর ফলে রাজস্ব আদায়ে গতিশীলতা এসেছে এবং সরকারি কার্যক্রমে স্বচ্ছতা নিশ্চিত হয়েছে।"',
            solution: `Standard High-Quality Model Translation:
"With the introduction of online income tax return submission facilities, taxpayers are able to pay taxes expeditiously from their homes. Consequently, momentum has been infused into revenue mobilization and transparency in government operations has been ensured."`,
            tags: ['Translation', 'Bangla to English', 'NBR', 'e-Return'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  }
];
