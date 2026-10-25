import { ExamPaper } from '../types/exam';

export const privateBankPapers: ExamPaper[] = [
  // ============================================================================
  // PART A: PRIVATE BANK ASSISTANT PROGRAMMER (4 FULL 200-MARK PAPERS)
  // ============================================================================

  // 29. Dutch-Bangla Bank PLC (DBBL) Assistant Programmer
  {
    id: 'pcb-dbbl-ap-2024',
    title: 'Assistant Programmer, Dutch-Bangla Bank PLC (DBBL)',
    searchQuery: 'Dutch Bangla Bank DBBL Assistant Programmer written question solution pdf',
    category: 'Private Bank Assistant Programmer',
    jobId: 'DBBL-AP-2024',
    circularYear: '2023-2024',
    examDate: 'May 10, 2024',
    examBody: 'BIBM / IBA (DU)',
    participatingBanks: ['Dutch-Bangla Bank PLC (DBBL)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Competitive recruitment exam for Assistant Programmer at Dutch-Bangla Bank PLC (DBBL). Heavy emphasis on Nexus Payment Switch ISO 8583 socket programming, Oracle PL/SQL ATM Fast Track triggers, LRU cache implementation for Rocket MFS, VLSM subnetting for 5000+ ATM booths, and PCI-DSS compliance.',
    keyTopics: ['Nexus Switch ISO 8583', 'Oracle PL/SQL ATM Triggers', 'LRU Cache Doubly Linked List', 'SQL Fraud Window Functions', 'VLSM Subnetting /20', 'PCI-DSS & HSM Security'],
    sections: [
      {
        id: 'sec-dbbl-ap-tech',
        name: 'Technical IT & Software Engineering Core (150 Marks)',
        marks: 150,
        description: 'Core Banking Switch Programming, Oracle PL/SQL, Data Structures, Networking & Payment Card Security',
        questions: [
          {
            id: 'q-dbbl-ap-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Dutch-Bangla Bank’s Rocket MFS and NexusPay gateway cache active user session tokens in memory. Write a C++ or Java implementation of an LRU (Least Recently Used) Cache of capacity K supporting `get(key)` and `put(key, value)` in strictly O(1) time complexity using a Hash Map and Doubly Linked List.',
            solution: `1. Architectural Design for O(1) LRU Cache:
- A Doubly Linked List maintains keys in order of recency: Most Recently Used (MRU) at the Head, Least Recently Used (LRU) at the Tail.
- A Hash Map (\`unordered_map<int, Node*>\`) stores the direct memory pointer to each node in the Doubly Linked List for O(1) lookup.
- On \`get(key)\`: Look up node in Hash Map in O(1), detach it from its current position, and move it to the Head.
- On \`put(key, value)\`: If key exists, update value and move to Head. If capacity is full, evict Tail.prev node and remove from Hash Map in O(1).`,
            codeSolution: `#include <iostream>
#include <unordered_map>

class LRUCache {
    struct Node {
        int key, value;
        Node *prev, *next;
        Node(int k, int v) : key(k), value(v), prev(nullptr), next(nullptr) {}
    };

    int capacity;
    std::unordered_map<int, Node*> cacheMap;
    Node *head, *tail;

    void removeNode(Node* node) {
        node->prev->next = node->next;
        node->next->prev = node->prev;
    }

    void insertAtHead(Node* node) {
        node->next = head->next;
        node->next->prev = node;
        head->next = node;
        node->prev = head;
    }

public:
    LRUCache(int cap) : capacity(cap) {
        head = new Node(-1, -1);
        tail = new Node(-1, -1);
        head->next = tail;
        tail->prev = head;
    }

    int get(int key) {
        if (cacheMap.find(key) == cacheMap.end()) return -1;
        Node* node = cacheMap[key];
        removeNode(node);
        insertAtHead(node);
        return node->value;
    }

    void put(int key, int value) {
        if (cacheMap.find(key) != cacheMap.end()) {
            Node* existing = cacheMap[key];
            existing->value = value;
            removeNode(existing);
            insertAtHead(existing);
            return;
        }
        if ((int)cacheMap.size() == capacity) {
            Node* lru = tail->prev;
            cacheMap.erase(lru->key);
            removeNode(lru);
            delete lru;
        }
        Node* newNode = new Node(key, value);
        insertAtHead(newNode);
        cacheMap[key] = newNode;
    }
};

int main() {
    LRUCache nexusCache(2);
    nexusCache.put(101, 50000);
    nexusCache.put(102, 75000);
    std::cout << "Session 101 Balance: " << nexusCache.get(101) << "\\n";
    nexusCache.put(103, 90000); // Evicts key 102
    std::cout << "Session 102 (Evicted): " << nexusCache.get(102) << "\\n";
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['Data Structures', 'LRU Cache', 'C++', 'DBBL', 'Doubly Linked List'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-dbbl-ap-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider DBBL ATM Fast Track tables: CardAccount(CardNo, AccNo, DailyLimit, Status) and AtmTransaction(TxnID, CardNo, BoothID, Amount, TxnTime). Write an Oracle PL/SQL or PostgreSQL Trigger that fires BEFORE INSERT on `AtmTransaction` to verify that: (i) The card status is "ACTIVE", and (ii) The cumulative withdrawal amount for that card on the current calendar day does not exceed `DailyLimit`.',
            solution: 'A BEFORE INSERT row-level trigger queries the CardAccount status and sums today’s existing withdrawals from AtmTransaction, raising an exception if the new withdrawal breaches the daily limit.',
            codeSolution: `CREATE OR REPLACE FUNCTION check_atm_daily_limit()
RETURNS TRIGGER AS $$
DECLARE
    v_status VARCHAR(20);
    v_daily_limit DECIMAL(15, 2);
    v_today_total DECIMAL(15, 2);
BEGIN
    -- 1. Fetch Card Status and Daily Limit
    SELECT Status, DailyLimit INTO v_status, v_daily_limit
    FROM CardAccount
    WHERE CardNo = NEW.CardNo;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Invalid Nexus Card Number: %', NEW.CardNo;
    END IF;

    IF v_status <> 'ACTIVE' THEN
        RAISE EXCEPTION 'Card % is currently %. Transaction declined.', NEW.CardNo, v_status;
    END IF;

    -- 2. Compute today's cumulative withdrawal for this card
    SELECT COALESCE(SUM(Amount), 0) INTO v_today_total
    FROM AtmTransaction
    WHERE CardNo = NEW.CardNo
      AND DATE(TxnTime) = DATE(NEW.TxnTime);

    -- 3. Validate Daily Limit
    IF (v_today_total + NEW.Amount) > v_daily_limit THEN
        RAISE EXCEPTION 'Daily ATM Withdrawal Limit Exceeded! Limit: BDT %, Already Withdrawn Today: BDT %',
            v_daily_limit, v_today_total;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_enforce_atm_daily_limit
BEFORE INSERT ON AtmTransaction
FOR EACH ROW
EXECUTE FUNCTION check_atm_daily_limit();`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'PL/SQL', 'Triggers', 'ATM Switch', 'DBBL'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-dbbl-ap-3',
            questionNo: '3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Using the `AtmTransaction(TxnID, CardNo, BoothID, City, Amount, TxnTime)` table, write an SQL query using Window Functions to detect "Impossible Travel Card Skimming Fraud": find all pairs of consecutive transactions by the same `CardNo` that occurred in two different cities (`City`) within less than 15 minutes of each other.',
            solution: 'Use LAG() partitioned by CardNo ordered by TxnTime to retrieve the previous transaction city and timestamp, then filter where previous city <> current city and time difference < 15 minutes.',
            codeSolution: `WITH CardActivityWithLag AS (
    SELECT 
        TxnID,
        CardNo,
        BoothID,
        City AS Current_City,
        Amount,
        TxnTime AS Current_Time,
        LAG(City, 1) OVER (
            PARTITION BY CardNo 
            ORDER BY TxnTime
        ) AS Previous_City,
        LAG(TxnTime, 1) OVER (
            PARTITION BY CardNo 
            ORDER BY TxnTime
        ) AS Previous_Time
    FROM AtmTransaction
)
SELECT 
    CardNo,
    TxnID,
    Previous_City,
    Current_City,
    Previous_Time,
    Current_Time,
    Amount,
    TIMESTAMPDIFF(MINUTE, Previous_Time, Current_Time) AS Minutes_Elapsed
FROM CardActivityWithLag
WHERE Previous_City IS NOT NULL
  AND Previous_City <> Current_City
  AND TIMESTAMPDIFF(MINUTE, Previous_Time, Current_Time) < 15
ORDER BY Current_Time DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'LAG', 'Fraud Detection', 'DBBL'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-dbbl-ap-4',
            questionNo: '4',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'DBBL is allocated the private IPv4 block `10.120.0.0/20` for its nationwide ATM and Fast Track network. (a) Calculate the total number of available IPv4 addresses in this `/20` block. (b) If each ATM Fast Track booth requires a `/29` subnet (to connect ATM 1, ATM 2, CRM, Router, IP Camera, and UPS Monitor), how many `/29` ATM booth subnets can be created from this `/20` block? (c) Write the Network Address, Usable Host IP Range, and Broadcast Address for the first two `/29` subnets.',
            solution: `Step-by-step CIDR & VLSM Calculation:
(a) Total IPv4 Addresses in 10.120.0.0/20:
- Host bits = 32 - 20 = 12 bits.
- Total IP addresses = 2^12 = 4,096 addresses (spanning 10.120.0.0 to 10.120.15.255).

(b) Number of /29 ATM Booth Subnets:
- Bits borrowed from /20 to reach /29 = 29 - 20 = 9 subnet bits.
- Total /29 subnets = 2^9 = 512 ATM Booth Subnets!
- Usable hosts per /29 subnet = 2^(32 - 29) - 2 = 2^3 - 2 = 8 - 2 = 6 usable IPs (exact fit for the 6 devices per booth).
- Subnet Mask for /29: 255.255.255.248 (Block size = 8).

(c) First Two /29 Subnets:
- Subnet 1 (Booth #1):
  * Network Address: 10.120.0.0/29
  * Usable Host Range: 10.120.0.1 to 10.120.0.6
  * Broadcast Address: 10.120.0.7
- Subnet 2 (Booth #2):
  * Network Address: 10.120.0.8/29
  * Usable Host Range: 10.120.0.9 to 10.120.0.14
  * Broadcast Address: 10.120.0.15`,
            tags: ['Networking', 'VLSM', 'Subnetting', 'CIDR /20', 'ATM Network'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-dbbl-ap-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is a Hardware Security Module (HSM) and PCI-DSS in payment card processing? Explain how a 4-digit customer ATM PIN is encrypted into an ANSI X9.8 (ISO-0) PIN Block at the ATM EPP (Encrypting PIN Pad) and verified by the Issuer HSM without ever exposing the cleartext PIN in main server memory.',
            solution: `1. PCI-DSS & Hardware Security Module (HSM):
- PCI-DSS (Payment Card Industry Data Security Standard) mandates strict controls for storing, transmitting, and processing Primary Account Numbers (PAN) and cardholder data.
- An HSM is a tamper-resistant, FIPS 140-2 Level 3 certified physical cryptographic appliance that performs PIN translation, key generation, and MAC validation inside protected hardware memory.

2. ISO-0 (ANSI X9.8) PIN Block Construction:
- At the ATM booth, the customer types their PIN on the physical Encrypting PIN Pad (EPP).
- Block 1 (PIN Field, 16 hex digits): \`0 + PIN_Length + PIN + F_Padding\` (e.g., for PIN 1234: \`041234FFFFFFFFFF\`).
- Block 2 (PAN Field, 16 hex digits): \`0000 + 12 rightmost digits of PAN excluding check digit\`.
- The EPP XORs Block 1 and Block 2 to create the 64-bit Cleartext PIN Block, and immediately encrypts it inside the keypad using the Terminal Working Key (TPK / ZPK) via 3DES or AES.

3. Zero-Cleartext Verification at Issuer HSM:
- When the ISO 8583 message (DE 52) reaches the bank switch, the encrypted PIN block is passed to the Host HSM along with the PAN and the stored PVV (PIN Verification Value) or encrypted PIN offset.
- The HSM decrypts and compares the PIN strictly inside its hardware crypto-processor boundary and returns only a boolean "MATCH / NO-MATCH" response to the Core Banking server. The cleartext PIN never enters OS RAM or logs.`,
            tags: ['Cybersecurity', 'HSM', 'PCI-DSS', 'PIN Block', 'ISO 8583'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-dbbl-ap-6',
            questionNo: '6',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a multi-threaded Java or Python program demonstrating a Producer-Consumer transaction queue using `BlockingQueue` (or `Condition` lock) where ATM Switch threads enqueue incoming ISO 8583 messages and Core Banking Worker threads dequeue and process them safely.',
            solution: 'Thread-safe Producer-Consumer pattern using bounded BlockingQueue to provide automatic backpressure during peak transaction spikes.',
            codeSolution: `import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class NexusSwitchProcessor {
    private static final int QUEUE_CAPACITY = 100;
    private static final BlockingQueue<String> isoMessageQueue = new ArrayBlockingQueue<>(QUEUE_CAPACITY);

    // Producer: ATM Listener Thread
    static class AtmReceiver implements Runnable {
        @Override
        public void run() {
            try {
                for (int i = 1; i <= 5; i++) {
                    String msg = "MTI0200|STAN:000" + i + "|AMT:5000";
                    isoMessageQueue.put(msg); // Blocks if queue is full
                    System.out.println("[ATM Ingress] Enqueued: " + msg);
                }
                isoMessageQueue.put("SHUTDOWN");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }

    // Consumer: Core Banking Worker Thread
    static class SwitchWorker implements Runnable {
        @Override
        public void run() {
            try {
                while (true) {
                    String msg = isoMessageQueue.take(); // Blocks if queue is empty
                    if ("SHUTDOWN".equals(msg)) break;
                    System.out.println("[Worker] Authorized & Settled: " + msg);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {
        Thread producer = new Thread(new AtmReceiver());
        Thread consumer = new Thread(new SwitchWorker());
        producer.start();
        consumer.start();
        producer.join();
        consumer.join();
    }
}`,
            solutionLanguage: 'java',
            tags: ['Java', 'Multithreading', 'BlockingQueue', 'Producer Consumer', 'DBBL'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-dbbl-ap-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-dbbl-ap-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Scaling Real-Time Retail Banking Infrastructure: Lessons from ATM Fast Tracks, Mobile Financial Services, and QR Payments in Bangladesh" (Word limit: 300 words).',
            solution: `Key Analytical Points:
1. Pioneer Digital Footprint:
Private commercial banks in Bangladesh—spearheaded by Dutch-Bangla Bank's nationwide ATM Fast Tracks, Rocket MFS, and NexusPay—revolutionized retail banking by shifting millions of daily over-the-counter cash transactions to automated 24/7 digital channels.

2. High-Throughput Architectural Demands:
- Handling festive surges (Eid and salary disbursement weeks) requires horizontally scalable payment switches, active-active database clusters, and resilient fiber/wireless dual-SIM redundancy at every remote ATM booth.
- Cash Recycling Machines (CRMs) allow real-time cash deposits that are immediately credited and recycled for subsequent withdrawals, optimizing cash-in-transit logistics.

3. Security & Interoperability:
- Transitioning from magnetic stripe cards to EMV chip-and-PIN and contactless NFC cards eliminated skimming vulnerabilities.
- Integration with Bangla QR and NPSB enables seamless cross-bank interoperability.

4. Conclusion:
Sustaining high-availability digital banking infrastructure demands continuous investment in automated failover systems, AI fraud analytics, and zero-trust cybersecurity.`,
            tags: ['Focus Writing', 'English', 'Retail Banking', 'ATM Fast Track', 'DBBL'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-dbbl-ap-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "বেসরকারি বাণিজ্যিক ব্যাংকগুলো আধুনিক প্রযুক্তিনির্ভর ব্যাংকিং সেবা প্রদানে অগ্রণী ভূমিকা পালন করছে। এটিএম এবং সিআরএম বুথের বিস্তৃতির ফলে গ্রাহকরা যেকোনো সময় তাৎক্ষণিক নগদ অর্থ জমা ও উত্তোলন করতে পারছেন।"',
            solution: `Standard High-Quality Model Translation:
"Private commercial banks are playing a pioneering role in delivering modern technology-driven banking services. Owing to the expansion of ATM and CRM booths, customers are able to deposit and withdraw cash instantaneously at any time."`,
            tags: ['Translation', 'Bangla to English', 'Private Bank', 'CRM'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 30. BRAC Bank PLC Assistant Programmer / Software Engineer
  {
    id: 'pcb-brac-ap-2024',
    title: 'Assistant Programmer / Software Engineer, BRAC Bank PLC',
    searchQuery: 'BRAC Bank Assistant Programmer Software Engineer IT written question solution pdf',
    category: 'Private Bank Assistant Programmer',
    jobId: 'BBL-AP-2024',
    circularYear: '2024',
    examDate: 'June 14, 2024',
    examBody: 'BRAC Bank Technology / BIBM',
    participatingBanks: ['BRAC Bank PLC'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'BRAC Bank Technology Division written test for Assistant Programmer / Software Engineer (Astha Digital Banking & SME Tech). Focuses on Event-Driven Microservices with Kafka, API Rate Limiting algorithms, OAuth 2.0 PKCE flows, Recursive CTE SQL queries, and Kubernetes autoscaling.',
    keyTopics: ['Apache Kafka Event-Driven Architecture', 'API Rate Limiter Algorithm', 'OAuth 2.0 & PKCE', 'SQL Recursive CTE', 'Kubernetes HPA', 'SOLID Design Patterns'],
    sections: [
      {
        id: 'sec-brac-ap-tech',
        name: 'Technical IT & Cloud Engineering Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-brac-ap-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'To protect the BRAC Bank "Astha" mobile banking API Gateway from brute-force and DDoS abuse, implement a Token Bucket or Sliding Window Rate Limiter in Python or Java that allows at most `N` requests per `T` seconds for each unique `client_id`.',
            solution: 'Sliding Window Log / Token Bucket Rate Limiter using a per-client deque of timestamps to evict expired requests older than T seconds and enforce the capacity limit in O(1) amortized time.',
            codeSolution: `import time
from collections import defaultdict, deque

class SlidingWindowRateLimiter:
    """
    Allows at most max_requests within window_seconds per client_id.
    """
    def __init__(self, max_requests: int, window_seconds: int):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.client_logs = defaultdict(deque)

    def allow_request(self, client_id: str, current_time: float = None) -> bool:
        if current_time is None:
            current_time = time.time()
            
        timestamps = self.client_logs[client_id]
        
        # Evict timestamps outside the current sliding window
        while timestamps and (current_time - timestamps[0]) >= self.window_seconds:
            timestamps.popleft()
            
        if len(timestamps) < self.max_requests:
            timestamps.append(current_time)
            return True
            
        return False # Rate limit exceeded (HTTP 429 Too Many Requests)

# Demonstration: Max 3 requests per 10 seconds
limiter = SlidingWindowRateLimiter(max_requests=3, window_seconds=10)
for i in range(1, 6):
    allowed = limiter.allow_request("user_nid_998877", current_time=100.0 + i)
    print(f"Request #{i} at t={100+i}s -> {'200 OK' if allowed else '429 Too Many Requests'}")`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Rate Limiter', 'API Gateway', 'Python', 'BRAC Bank'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-brac-ap-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain Event-Driven Architecture using Apache Kafka in a digital banking super-app. What are Topics, Partitions, Consumer Groups, and Offset commits? How do you guarantee exact ordering of debit/credit events for a single bank account across multiple partitions?',
            solution: `1. Core Apache Kafka Concepts:
- Topic: Logical channel or feed name to which event records are published (e.g., \`fund-transfer-events\`).
- Partition: A Topic is split into multiple ordered, immutable append-only logs called Partitions distributed across brokers for horizontal throughput.
- Consumer Group: A cluster of microservice instances that cooperatively consume partitions. Each partition is assigned to at most ONE consumer instance within a group.
- Offset: Unique sequential integer ID assigned to each message within a partition.

2. Guaranteeing Strict Ordering per Bank Account:
- Kafka guarantees strict FIFO message ordering ONLY within a single partition, not across different partitions.
- To ensure that a customer's Deposit event followed by a Withdrawal event are processed in exact chronological order, use the \`AccountNumber\` as the Kafka Message Partition Key:
  \`Target_Partition = MurmurHash2(AccountNumber) mod Num_Partitions\`
- Because all events for the same \`AccountNumber\` hash to the exact same partition, they are always routed to the same partition and consumed sequentially by a single consumer thread.`,
            tags: ['System Design', 'Apache Kafka', 'Microservices', 'Event-Driven', 'BRAC Bank'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-brac-ap-3',
            questionNo: '3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider SME Loan tables: SmeLoan(LoanID, EnterpriseName, Sector, DisbursedAmount,DisburseDate) and Repayment(RepayID, LoanID, PaidAmount, PaidDate). Write an SQL query to list all SME Sectors where the total overdue unpaid balance across all loans in that sector exceeds BDT 50,00,000, showing Total Disbursed, Total Repaid, and Recovery Percentage.',
            solution: 'Use a subquery or CTE to aggregate repayments per loan first (to avoid fan-out multiplication), then join with SmeLoan and group by Sector.',
            codeSolution: `WITH LoanRepaymentSummary AS (
    SELECT 
        LoanID,
        SUM(PaidAmount) AS Loan_Paid_Total
    FROM Repayment
    GROUP BY LoanID
)
SELECT 
    s.Sector,
    COUNT(s.LoanID) AS Total_Loans,
    SUM(s.DisbursedAmount) AS Total_Disbursed,
    SUM(COALESCE(r.Loan_Paid_Total, 0)) AS Total_Repaid,
    SUM(s.DisbursedAmount - COALESCE(r.Loan_Paid_Total, 0)) AS Total_Outstanding,
    ROUND(
        (SUM(COALESCE(r.Loan_Paid_Total, 0)) * 100.0) / NULLIF(SUM(s.DisbursedAmount), 0), 
        2
    ) AS Recovery_Percentage
FROM SmeLoan s
LEFT JOIN LoanRepaymentSummary r ON s.LoanID = r.LoanID
GROUP BY s.Sector
HAVING SUM(s.DisbursedAmount - COALESCE(r.Loan_Paid_Total, 0)) > 5000000
ORDER BY Total_Outstanding DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'CTE', 'LEFT JOIN', 'SME Banking', 'BRAC Bank'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-brac-ap-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the OAuth 2.0 Authorization Code Flow with PKCE (Proof Key for Code Exchange, RFC 7636). Why is PKCE mandatory for native mobile banking apps (iOS/Android) and Single Page Applications (SPAs)?',
            solution: `1. The Vulnerability in Mobile Apps without PKCE:
- Mobile apps cannot safely store a static \`client_secret\` because app binaries can be decompiled.
- Furthermore, malicious apps on a user's phone can register the same custom URL scheme (e.g., \`astha://callback\`) and intercept the Authorization Code returned by the authorization server.

2. How PKCE Solves Authorization Code Interception:
- Step 1 (Code Verifier): Before initiating login, the mobile app generates a high-entropy cryptographic random string called \`code_verifier\`.
- Step 2 (Code Challenge): The app hashes the verifier using SHA-256 and Base64-URL encodes it:
  \`code_challenge = BASE64URL(SHA256(code_verifier))\`.
- Step 3 (Authorization Request): App sends \`code_challenge\` and \`code_challenge_method=S256\` to the \`/authorize\` endpoint.
- Step 4 (Token Exchange): After user authentication, the app sends the received Authorization Code along with the original plaintext \`code_verifier\` to the \`/token\` endpoint over TLS.
- Step 5 (Verification): The server hashes the received \`code_verifier\` with SHA-256 and compares it against the stored \`code_challenge\`. Even if malware intercepted the authorization code, it cannot exchange it for an Access Token without the secret \`code_verifier\`.`,
            tags: ['Cybersecurity', 'OAuth 2.0', 'PKCE', 'Mobile Security', 'Authentication'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-brac-ap-5',
            questionNo: '5',
            type: 'coding',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Demonstrate the Strategy or Factory Design Pattern in Java or C++ for a multi-channel banking notification service that dynamically dispatches alerts via SMS, Email, or Push Notification based on customer preference.',
            solution: 'Strategy Pattern decouples notification channel algorithms behind a common interface.',
            codeSolution: `public class BankingNotificationEngine {

    // Strategy Interface
    public interface NotificationStrategy {
        void sendAlert(String recipient, String message);
    }

    public static class SmsNotification implements NotificationStrategy {
        public void sendAlert(String recipient, String message) {
            System.out.println("[SMS Gateway] To " + recipient + ": " + message);
        }
    }

    public static class PushNotification implements NotificationStrategy {
        public void sendAlert(String recipient, String message) {
            System.out.println("[Firebase FCM Push] Device " + recipient + ": " + message);
        }
    }

    public static class AlertDispatcher {
        private NotificationStrategy strategy;

        public void setStrategy(NotificationStrategy strategy) {
            this.strategy = strategy;
        }

        public void notifyCustomer(String target, String text) {
            if (strategy == null) throw new IllegalStateException("Strategy not configured");
            strategy.sendAlert(target, text);
        }
    }

    public static void main(String[] args) {
        AlertDispatcher dispatcher = new AlertDispatcher();
        dispatcher.setStrategy(new PushNotification());
        dispatcher.notifyCustomer("device_token_88a", "BDT 15,000 transferred via NPSB.");
    }
}`,
            solutionLanguage: 'java',
            tags: ['Software Engineering', 'Design Patterns', 'Strategy Pattern', 'Java', 'OOP'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-brac-ap-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'What is a Multi-Stage Docker Build and why is it critical for banking microservices security? Compare a standard Node/Java Dockerfile with a distroless/alpine multi-stage build.',
            solution: `1. Purpose of Multi-Stage Docker Builds:
- In a single-stage Dockerfile, build tools (Maven, Gradle, GCC,源码, Git, curl, bash) remain inside the final production container image, inflating image size (800MB+) and creating a massive attack surface if a container is breached.
- Multi-stage builds use a temporary \`builder\` stage to compile source code into a standalone binary/JAR, and then copy ONLY the compiled artifact into a minimal runtime image (e.g., Alpine or Google Distroless).

2. Security Benefits in Banking:
- Eliminates shell binaries (\`/bin/sh\`, \`curl\`, \`wget\`), preventing attackers from executing remote shell commands even if an RCE vulnerability exists.
- Reduces image size by 85–90%, enabling rapid Kubernetes Horizontal Pod Autoscaling (HPA) image pulls during peak banking traffic.`,
            tags: ['Docker', 'Containers', 'DevSecOps', 'Kubernetes', 'Cloud Security'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-brac-ap-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-brac-ap-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Digitizing SME Banking: How Alternative Credit Scoring and FinTech Empower Cottage, Micro, Small, and Medium Enterprises (CMSME) in Bangladesh" (Word limit: 300 words).',
            solution: `Key Analytical Points:
- CMSMEs form the backbone of Bangladesh's employment and GDP, yet historically faced a massive financing gap due to lack of formal financial statements and land collateral.
- Digital Credit Scoring: Private banks now leverage machine learning models that analyze alternative data—such as mobile wallet cashflows, e-commerce merchant sales, utility payment regularity, and digital inventory turnover—to assess creditworthiness in minutes.
- Digital Loan Origination Systems (LOS): Field officers use tablet apps with biometric NID verification to onboard rural entrepreneurs paperlessly.
- Conclusion: Data-driven SME lending democratizes access to capital and accelerates grassroots industrialization.`,
            tags: ['Focus Writing', 'English', 'SME Banking', 'Credit Scoring', 'BRAC Bank'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-brac-ap-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "ক্ষুদ্র ও মাঝারি উদ্যোক্তাদের সহজ শর্তে ঋণ প্রদানের মাধ্যমে বেসরকারি ব্যাংকগুলো দেশের কর্মসংস্থান সৃষ্টিতে গুরুত্বপূর্ণ অবদান রাখছে। ডিজিটাল ব্যাংকিং অ্যাপের মাধ্যমে গ্রাহকরা এখন ঘরে বসেই এফডিআর খোলা এবং ফান্ড ট্রান্সফার সম্পন্ন করতে পারছেন।"',
            solution: `Standard High-Quality Model Translation:
"By extending credit on flexible terms to small and medium entrepreneurs, private banks are making a vital contribution to employment generation in the country. Through digital banking applications, customers can now open FDRs and execute fund transfers right from the comfort of their homes."`,
            tags: ['Translation', 'Bangla to English', 'SME Financing', 'Digital Banking'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 31. Islami Bank Bangladesh PLC (IBBPLC) Assistant Programmer
  {
    id: 'pcb-ibbl-ap-2023',
    title: 'Assistant Programmer, Islami Bank Bangladesh PLC (IBBPLC)',
    searchQuery: 'Islami Bank Bangladesh PLC IBBL Assistant Programmer written question solution pdf',
    category: 'Private Bank Assistant Programmer',
    jobId: 'IBBL-AP-2023',
    circularYear: '2023',
    examDate: 'November 24, 2023',
    examBody: 'IBA (DU) / IBBPLC',
    participatingBanks: ['Islami Bank Bangladesh PLC (IBBPLC)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Assistant Programmer examination for Islami Bank Bangladesh PLC (IBBPLC), the largest private commercial bank in Bangladesh. Covers Mudaraba weightage profit calculation algorithms, SQL queries on investment and deposit schemas, BCNF normalization of CellFin wallet tables, Dijkstra routing, and Linux batch automation.',
    keyTopics: ['Mudaraba Profit Distribution Algorithm', 'SQL Investment Queries', 'CellFin Wallet Normalization', 'Dijkstra Shortest Path', 'Linux EOD Batch Script', 'Islamic FinTech'],
    sections: [
      {
        id: 'sec-ibbl-ap-tech',
        name: 'Technical IT & Banking Software Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-ibbl-ap-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'In Islamic Core Banking (eIBS), Mudaraba savings depositors receive profit based on their Daily Product (average daily balance) and the deposit type’s Weightage factor. Write a Python program that takes a list of accounts `(acc_no, avg_balance, weightage)` and total distributable profit pool `P`, and computes the exact profit share for each account.',
            solution: 'Compute Weighted Product = avg_balance * weightage for each account, sum total weighted products, and allocate profit proportionally: Profit_i = P * (Weighted_Product_i / Total_Weighted_Product).',
            codeSolution: `def distribute_mudaraba_profit(accounts: list[dict], profit_pool: float) -> list[dict]:
    """
    accounts: [{'acc_no': 'MSA-101', 'avg_balance': 200000.0, 'weightage': 0.85}, ...]
    profit_pool: Total Shariah-compliant distributable profit pool
    """
    total_weighted_balance = sum(
        acc['avg_balance'] * acc['weightage'] for acc in accounts
    )
    
    if total_weighted_balance <= 0:
        raise ValueError("Total weighted balance must be positive.")
        
    results = []
    for acc in accounts:
        weighted_bal = acc['avg_balance'] * acc['weightage']
        profit_share = profit_pool * (weighted_bal / total_weighted_balance)
        results.append({
            "acc_no": acc['acc_no'],
            "avg_balance": acc['avg_balance'],
            "weightage": acc['weightage'],
            "profit_earned": round(profit_share, 2)
        })
        
    return results

# Test Case
depositors = [
    {"acc_no": "MSA-1001", "avg_balance": 100000, "weightage": 0.75},
    {"acc_no": "MTDR-2002", "avg_balance": 500000, "weightage": 1.10}
]
allocation = distribute_mudaraba_profit(depositors, profit_pool=31250.0)
for row in allocation:
    print(f"Account {row['acc_no']}: Profit = BDT {row['profit_earned']}")`,
            solutionLanguage: 'python',
            tags: ['Python', 'Islamic Banking', 'Mudaraba Algorithm', 'FinTech', 'IBBPLC'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ibbl-ap-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Given tables: Branch(BranchCode, BranchName, Zone), Depositor(CustID, CustName, City), Account(AccNo, CustID, BranchCode, DepositType, Balance). Write SQL queries to:\n(a) Find all Zones where total Mudaraba Term Deposit ("MTDR") balance exceeds BDT 50,00,00,000.\n(b) Find customers who hold accounts in more than 2 different branches.',
            solution: 'Multi-table joins with GROUP BY and HAVING COUNT(DISTINCT BranchCode) > 2.',
            codeSolution: `-- Query (a): Zones with MTDR balance > 50 Crore
SELECT 
    b.Zone,
    COUNT(a.AccNo) AS Total_MTDR_Accounts,
    SUM(a.Balance) AS Total_Zone_MTDR_Balance
FROM Branch b
JOIN Account a ON b.BranchCode = a.BranchCode
WHERE a.DepositType = 'MTDR'
GROUP BY b.Zone
HAVING SUM(a.Balance) > 500000000
ORDER BY Total_Zone_MTDR_Balance DESC;

-- Query (b): Customers holding accounts in > 2 distinct branches
SELECT 
    d.CustID,
    d.CustName,
    COUNT(DISTINCT a.BranchCode) AS Branch_Count,
    SUM(a.Balance) AS Total_Customer_Balance
FROM Depositor d
JOIN Account a ON d.CustID = a.CustID
GROUP BY d.CustID, d.CustName
HAVING COUNT(DISTINCT a.BranchCode) > 2;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'GROUP BY', 'HAVING', 'DBMS', 'IBBPLC'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ibbl-ap-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'A mobile wallet relation is defined as: `WalletTxn(TxnID, WalletMobile, UserNID, UserName, MerchantID, MerchantName, MerchantCategory, Amount, TxnDate)`. Identify the functional dependencies, explain the redundancy anomalies (Insertion, Update, Deletion), and normalize the schema into 3NF.',
            solution: `1. Functional Dependencies:
- \`TxnID -> {WalletMobile, MerchantID, Amount, TxnDate}\`
- \`WalletMobile -> {UserNID, UserName}\`
- \`MerchantID -> {MerchantName, MerchantCategory}\`

2. Redundancy Anomalies in Unnormalized Table:
- Update Anomaly: If a merchant updates its \`MerchantName\`, millions of historical transaction rows must be updated simultaneously or data becomes inconsistent.
- Insertion Anomaly: A new merchant cannot be registered in the database until they process at least one transaction (since \`TxnID\` is the primary key).
- Deletion Anomaly: Deleting the only transaction of a merchant inadvertently deletes the merchant's master profile.

3. 3NF Decomposition:
- \`WalletUser(WalletMobile, UserNID, UserName)\` [PK: WalletMobile]
- \`Merchant(MerchantID, MerchantName, MerchantCategory)\` [PK: MerchantID]
- \`WalletTxn(TxnID, WalletMobile, MerchantID, Amount, TxnDate)\` [PK: TxnID, FK: WalletMobile, MerchantID].`,
            tags: ['DBMS', 'Normalization', '3NF', 'CellFin', 'Database Design'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ibbl-ap-4',
            questionNo: '4',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C++ program to check if a Singly Linked List contains a loop/cycle using Floyd’s Tortoise and Hare (Slow and Fast Pointer) algorithm in O(N) time and O(1) auxiliary space.',
            solution: 'Two pointers (slow moving 1 step, fast moving 2 steps); if they meet, a cycle exists.',
            codeSolution: `#include <iostream>

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

bool hasCycle(Node* head) {
    if (!head || !head->next) return false;
    Node* slow = head;
    Node* fast = head;

    while (fast && fast->next) {
        slow = slow->next;          // 1 hop
        fast = fast->next->next;    // 2 hops
        if (slow == fast) {
            return true;            // Cycle detected
        }
    }
    return false;
}

int main() {
    Node* n1 = new Node(10);
    Node* n2 = new Node(20);
    Node* n3 = new Node(30);
    n1->next = n2;
    n2->next = n3;
    n3->next = n1; // Creates cycle

    std::cout << "Cycle Present: " << (hasCycle(n1) ? "Yes" : "No") << "\\n";
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['Data Structures', 'Linked List', 'Floyd Cycle Detection', 'C++'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ibbl-ap-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the working of Digital Signatures and QR Code payment verification in mobile banking apps like CellFin. How does asymmetric key cryptography prevent a merchant from forging or altering the payment amount in a signed dynamic QR code?',
            solution: `1. Dynamic vs Static QR Codes:
- Static QR: Contains only the Merchant ID. Customer manually inputs the amount.
- Dynamic QR: Generated per invoice by the bank server, embedding Merchant ID, Invoice No, Exact Amount, Timestamp, and a Cryptographic Digital Signature.

2. Cryptographic Verification Flow:
- Generation: Bank backend constructs payload \`P = "MERCH102|INV99|AMT1500|TS1710000"\`, computes \`H = SHA256(P)\`, and signs \`Sig = Sign_PrivateKey(H)\`. The QR encodes \`P || Sig\`.
- Verification: When the customer scans the QR, the app verifies \`Sig\` using the bank's embedded Public Key.
- Tamper Immunity: If a dishonest actor alters \`AMT1500\` to \`AMT9500\`, the SHA-256 hash changes completely, causing signature verification to fail immediately.`,
            tags: ['Cryptography', 'Digital Signature', 'QR Payment', 'CellFin', 'Security'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ibbl-ap-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Differentiate between Process and Thread in Operating Systems. Explain what happens during a Context Switch and why excessive context switching leads to CPU Thrashing in high-load database servers.',
            solution: `1. Process vs Thread:
- Process: Independent execution unit with its own isolated virtual address space, file descriptors, and page table.
- Thread: Lightweight execution unit within a process sharing the same heap memory, code segment, and open files, having only its own stack and registers.

2. Context Switch & Thrashing:
- During a context switch, the OS kernel saves CPU registers and program counter into the current Process Control Block (PCB), flushes/updates the Translation Lookaside Buffer (TLB), and loads the next process's PCB.
- If thousands of concurrent database connections spawn individual OS threads, the CPU spends more clock cycles saving/restoring registers and handling cache misses than executing actual SQL queries (Thrashing). Mitigated by Connection Pooling (e.g., PgBouncer / HikariCP).`,
            tags: ['Operating Systems', 'Process vs Thread', 'Context Switch', 'Connection Pooling'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-ibbl-ap-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-ibbl-ap-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Digital Transformation in Islamic Banking: Expanding Remittance and Financial Inclusion through Mobile Super-Apps" (Word limit: 300 words).',
            solution: `Key Analytical Points:
- Islamic banking holds over one-fourth of the entire banking deposit and investment market share in Bangladesh.
- Digital Super-Apps (such as CellFin and mCash) integrate virtual Visa/Mastercard debit cards, inward foreign remittance recepción, utility bill payments, and instant BEFTN/NPSB transfers into a single mobile interface.
- Empowering Expatriates: Seamless API integration with global exchange houses channels billions of dollars of wage earners' remittances legally and instantaneously to rural beneficiary accounts.
- Conclusion: Combining ethical Shariah-compliant finance with state-of-the-art FinTech strengthens macroeconomic resilience.`,
            tags: ['Focus Writing', 'English', 'Islamic FinTech', 'Remittance', 'IBBPLC'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ibbl-ap-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "প্রবাসীদের প্রেরিত রেমিট্যান্স দেশের বৈদেশিক মুদ্রার রিজার্ভ বৃদ্ধিতে সবচেয়ে বড় ভূমিকা রাখে। ব্যাংকিং চ্যানেলে দ্রুত ও নিরাপদে অর্থ প্রেরণ নিশ্চিত করতে আধুনিক অ্যাপ ও এপিআই প্রযুক্তি ব্যবহৃত হচ্ছে।"',
            solution: `Standard High-Quality Model Translation:
"Remittances sent by expatriates play the most significant role in augmenting the country's foreign exchange reserves. Modern applications and API technologies are being utilized to ensure rapid and secure fund transfers through formal banking channels."`,
            tags: ['Translation', 'Bangla to English', 'Remittance', 'Banking API'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 32. The City Bank PLC Assistant Programmer (Citytouch & Card Switch)
  {
    id: 'pcb-city-ap-2024',
    title: 'Assistant Programmer, The City Bank PLC (Citytouch & Card Switch)',
    searchQuery: 'City Bank Assistant Programmer Associate Software Engineer IT question solution pdf',
    category: 'Private Bank Assistant Programmer',
    jobId: 'CBL-AP-2024',
    circularYear: '2024',
    examDate: 'August 02, 2024',
    examBody: 'The City Bank IT / BIBM',
    participatingBanks: ['The City Bank PLC'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Assistant Programmer / Associate Software Engineer recruitment exam at The City Bank PLC. Focuses on Credit Card Dual-Message vs Single-Message settlement, Binary Search Tree validation, SQL deadlock prevention in billing cycles, OWASP API Security Top 10, and WAF/DMZ architecture.',
    keyTopics: ['Dual-Message Card Settlement', 'BST Validation & LCA', 'SQL Billing Deadlocks', 'OWASP API Security (BOLA)', 'WAF & Reverse Proxy', 'Digital Nano-Loans'],
    sections: [
      {
        id: 'sec-city-ap-tech',
        name: 'Technical IT & Software Engineering Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-city-ap-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C++ or Java function `isValidBST(TreeNode* root)` to determine if a given Binary Tree is a valid Binary Search Tree (BST) in O(N) time. Explain why simply checking `left->val < root->val && right->val > root->val` at each local node is insufficient.',
            solution: 'A valid BST requires ALL nodes in the left subtree to be strictly smaller than root, not just the immediate left child. We pass `[minVal, maxVal]` range bounds recursively down the tree.',
            codeSolution: `#include <iostream>
#include <climits>

struct TreeNode {
    long val;
    TreeNode *left, *right;
    TreeNode(long x) : val(x), left(nullptr), right(nullptr) {}
};

bool validateRange(TreeNode* node, long minVal, long maxVal) {
    if (!node) return true;
    if (node->val <= minVal || node->val >= maxVal) {
        return false;
    }
    return validateRange(node->left, minVal, node->val) &&
           validateRange(node->right, node->val, maxVal);
}

bool isValidBST(TreeNode* root) {
    return validateRange(root, LONG_MIN, LONG_MAX);
}

int main() {
    TreeNode* root = new TreeNode(50);
    root->left = new TreeNode(30);
    root->right = new TreeNode(70);
    root->right->left = new TreeNode(40); // Invalid! 40 < 50 in right subtree

    std::cout << "Is Valid BST: " << (isValidBST(root) ? "True" : "False") << "\\n";
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['Data Structures', 'BST', 'Trees', 'C++', 'City Bank'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-city-ap-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'In Credit and Debit Card Payment Switches (AMEX / Visa / Mastercard), differentiate between Single-Message System (SMS) and Dual-Message System (DMS). Why do ATM cash withdrawals use Single-Message while POS retail purchases typically use Dual-Message (Authorization followed by Batch Clearing)?',
            solution: `1. Single-Message System (SMS):
- Authorization and financial clearing occur in a SINGLE message pair (e.g., ISO 8583 MTI 0200 Financial Request & 0210 Response).
- Used in ATM Cash Withdrawals: Because physical cash is dispensed immediately and irreversibly, the customer's account balance is debited in real time.

2. Dual-Message System (DMS):
- Step 1 (Real-Time Authorization - MTI 0100/0110): When a card is swiped at a retail POS or e-commerce checkout, the issuer bank verifies available credit limit and places a "Hold / Lien" (earmark) on the amount, reducing Available Balance without posting to the ledger.
- Step 2 (End-of-Day Batch Clearing & Settlement): At the end of the business day, the merchant submits a batch of captured sales drafts (clearing file) to the acquirer. Only then are the actual funds posted and settled.
- Why POS uses DMS: Allows tips/adjustments (hotels, restaurants, fuel stations), instant voiding before batch close, and currency conversion rate finalization.`,
            tags: ['FinTech', 'Payment Switch', 'AMEX', 'Visa', 'ISO 8583', 'City Bank'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-city-ap-3',
            questionNo: '3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: CreditCard(CardID, CustID, CreditLimit, CurrentUsed), CardStatement(StmtID, CardID, BillingMonth, StatementAmount, MinDue, PaidAmount, DueDate). Write an SQL query to identify customers who have paid at least `MinDue` but less than `StatementAmount` (Revolver customers subject to interest) for 3 consecutive billing months in 2024.',
            solution: 'Filter rows where PaidAmount >= MinDue AND PaidAmount < StatementAmount, then use ROW_NUMBER or LAG over BillingMonth to identify 3 consecutive months.',
            codeSolution: `WITH RevolverMonths AS (
    SELECT 
        c.CustID,
        cs.CardID,
        cs.BillingMonth, -- Integer YYYYMM e.g. 202401, 202402, 202403
        LAG(cs.BillingMonth, 1) OVER (PARTITION BY cs.CardID ORDER BY cs.BillingMonth) AS PrevMonth1,
        LAG(cs.BillingMonth, 2) OVER (PARTITION BY cs.CardID ORDER BY cs.BillingMonth) AS PrevMonth2
    FROM CreditCard c
    JOIN CardStatement cs ON c.CardID = cs.CardID
    WHERE cs.PaidAmount >= cs.MinDue
      AND cs.PaidAmount < cs.StatementAmount
      AND cs.BillingMonth BETWEEN 202401 AND 202412
)
SELECT DISTINCT CustID, CardID
FROM RevolverMonths
WHERE PrevMonth2 IS NOT NULL
  AND (BillingMonth - PrevMonth1 = 1)
  AND (PrevMonth1 - PrevMonth2 = 1);`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'Credit Card Analytics', 'City Bank'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-city-ap-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is BOLA (Broken Object Level Authorization / IDOR) in the OWASP API Security Top 10? Illustrate how an attacker could exploit BOLA in a banking statement endpoint `GET /api/v1/accounts/{account_id}/statement` and write the backend authorization check to prevent it.',
            solution: `1. BOLA / IDOR Vulnerability:
- Broken Object Level Authorization occurs when an API endpoint authenticates the user's JWT token, but fails to verify whether the authenticated user actually OWNS the specific resource ID (\`account_id\`) requested in the URL or body.
- Exploit: User A logs in legitimately and receives a valid JWT. User A changes the URL from \`/api/v1/accounts/1001/statement\` to \`/api/v1/accounts/1002/statement\` and views User B's confidential bank statement!

2. Remediation (Object-Level Ownership Validation):
- Extract the authenticated \`user_id\` directly from the cryptographically verified JWT claims on the server side (never trust client headers).
- Query the database with an ownership predicate:
  \`SELECT * FROM Statements WHERE account_id = :req_acc_id AND owner_user_id = :jwt_user_id;\`
- If no matching ownership record exists, return \`HTTP 403 Forbidden\` or \`404 Not Found\`.`,
            tags: ['Cybersecurity', 'OWASP API Top 10', 'BOLA', 'IDOR', 'API Security'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-city-ap-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Differentiate between a Reverse Proxy (e.g., Nginx / HAProxy) and a Web Application Firewall (WAF). How are they deployed in tandem inside a bank’s DMZ perimeter?',
            solution: `1. Reverse Proxy vs WAF:
- Reverse Proxy: Sits in front of backend application servers to provide Load Balancing (Round-Robin, Least Connections), SSL/TLS Termination, HTTP Caching, and Gzip compression.
- Web Application Firewall (WAF): Layer 7 security appliance that inspects HTTP/HTTPS request headers, query parameters, and JSON/XML payloads against OWASP Top 10 attack signatures (SQL Injection, XSS, Command Injection, Log4Shell) and blocks botnet traffic.

2. Tandem Deployment in Bank DMZ:
\`Internet Client -> DDoS Scrubber -> External NGFW -> WAF -> Reverse Proxy / API Gateway -> Internal Firewall -> Core Microservices\``,
            tags: ['Networking', 'WAF', 'Reverse Proxy', 'DMZ', 'Security Architecture'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-city-ap-6',
            questionNo: '6',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python function to mask sensitive Primary Account Numbers (PAN) and Mobile Numbers in banking application logs (e.g., converting `"Card 4532015112830366 used"` into `"Card 453201******0366 used"`, preserving only the first 6 BIN digits and last 4 digits as required by PCI-DSS).',
            solution: 'Regular expression replacement preserving 6-digit issuer BIN and 4 trailing digits.',
            codeSolution: `import re

def mask_pci_pan_in_log(log_line: str) -> str:
    """
    PCI-DSS compliant masking: masks middle 6 digits of any 16-digit card number,
    retaining first 6 (BIN) and last 4 digits.
    """
    pattern = re.compile(r'\\b(\\d{6})(\\d{6})(\\d{4})\\b')
    return pattern.sub(r'\\1******\\3', log_line)

# Test Case
raw_log = "Auth Request for Card 3759876543210098 and Card 4532015112830366 Approved."
safe_log = mask_pci_pan_in_log(raw_log)
print(safe_log)`,
            solutionLanguage: 'python',
            tags: ['Python', 'Regex', 'PCI-DSS', 'Log Sanitization', 'Security'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-city-ap-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-city-ap-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "AI-Driven Digital Nano-Lending: Transforming Micro-Credit Accessibility in Bangladesh" (Word limit: 300 words).',
            solution: `Key Analytical Points:
- Digital Nano-Loans (such as City Bank & bKash's Digital Nano Loan) allow mobile wallet users to borrow collateral-free micro-loans (e.g., BDT 500 to BDT 50,000) instantaneously through their phones.
- Real-Time Credit Assessment: AI credit risk engines evaluate mobile transaction velocity, airtime top-ups, and repayment history in under 3 seconds.
- Eliminating Predatory Informal Lenders: Provides emergency liquidity to small traders, students, and wage earners at regulated central bank interest rates.
- Conclusion: Collaborations between commercial banks and MFS providers represent the future of embedded finance.`,
            tags: ['Focus Writing', 'English', 'Nano Loan', 'Embedded Finance', 'City Bank'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-city-ap-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "ডিজিটাল ন্যানো লোন সেবা চালুর মাধ্যমে সাধারণ মানুষ কোনো জামানত ছাড়াই মোবাইল অ্যাপের সাহায্যে তাৎক্ষণিক ক্ষুদ্র ঋণ গ্রহণ করতে পারছেন। এটি আর্থিক অন্তর্ভুক্তির ক্ষেত্রে একটি যুগান্তকারী পদক্ষেপ।"',
            solution: `Standard High-Quality Model Translation:
"With the launch of digital nano-loan services, ordinary citizens can obtain instant micro-credit via mobile applications without any collateral. This is a groundbreaking milestone in the realm of financial inclusion."`,
            tags: ['Translation', 'Bangla to English', 'Digital Nano Loan'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // PART B: PRIVATE BANK SENIOR OFFICER (IT) / MTO (IT) (4 FULL 200-MARK PAPERS)
  // ============================================================================

  // 33. Dutch-Bangla Bank PLC (DBBL) Senior Officer (IT)
  {
    id: 'pcb-dbbl-so-it-2024',
    title: 'Senior Officer (IT / Infrastructure & Networking), Dutch-Bangla Bank PLC',
    searchQuery: 'Dutch Bangla Bank DBBL Senior Officer IT Hardware Networking question solution pdf',
    category: 'Private Bank Senior Officer (IT)',
    jobId: 'DBBL-SO-IT-2024',
    circularYear: '2024',
    examDate: 'April 19, 2024',
    examBody: 'BIBM',
    participatingBanks: ['Dutch-Bangla Bank PLC (DBBL)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Senior Officer (IT) written exam for DBBL focusing on Enterprise Data Center infrastructure, RAID 10 vs RAID 5/6 storage math, OSPF multi-area routing, database backup & Point-in-Time Recovery (PITR), SIEM/EDR cyber defense, and C programming.',
    keyTopics: ['RAID 10 vs RAID 6 Storage', 'OSPF Multi-Area Routing', 'Database PITR Recovery', 'DDoS BGP Blackholing', 'C IP Validator', 'ATM Uptime'],
    sections: [
      {
        id: 'sec-dbbl-so-tech',
        name: 'Technical IT & Infrastructure Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-dbbl-so-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'A bank data center SAN storage array contains eight (8) 4TB enterprise SSD drives. Calculate the usable storage capacity, fault tolerance (maximum simultaneous drive failures tolerated), and write performance penalty for: (i) RAID 0, (ii) RAID 5, (iii) RAID 6, and (iv) RAID 10. Why is RAID 10 universally mandated for Core Banking database redo/transaction logs?',
            solution: `1. Storage & Fault Tolerance Calculations (8 drives x 4TB = 32TB raw):
(i) RAID 0 (Striping only):
- Usable Capacity: 8 * 4TB = 32 TB (100%).
- Fault Tolerance: 0 drives (single drive failure destroys entire array).

(ii) RAID 5 (Striping with Single Distributed Parity):
- Usable Capacity: (N - 1) * 4TB = 7 * 4TB = 28 TB.
- Fault Tolerance: Up to 1 drive failure.
- Write Penalty: 4 I/O operations per write (Read old data, Read old parity, Write new data, Write new parity).

(iii) RAID 6 (Striping with Dual Distributed Parity):
- Usable Capacity: (N - 2) * 4TB = 6 * 4TB = 24 TB.
- Fault Tolerance: Up to 2 simultaneous drive failures.
- Write Penalty: 6 I/O operations per write.

(iv) RAID 10 (Stripe of Mirrors, RAID 1+0):
- Usable Capacity: (N / 2) * 4TB = 4 * 4TB = 16 TB (50%).
- Fault Tolerance: At least 1 drive failure, and up to 4 drives if they fail in different mirror pairs.
- Write Penalty: Only 2 I/O operations (no parity calculation overhead).

2. Why RAID 10 is Mandated for Core Banking Redo Logs:
Core banking databases are write-intensive. RAID 5/6 suffer from severe parity write penalties and prolonged array rebuild times during which a second drive failure causes catastrophic data loss. RAID 10 delivers maximum write IOPS and instant mirror reconstruction without parity math.`,
            tags: ['Storage', 'RAID 10', 'Data Center', 'SAN', 'DBBL SO IT'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-dbbl-so-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Compare Full Backup, Incremental Backup, and Differential Backup in enterprise database administration. Explain how Write-Ahead Logging (WAL / Archive Redo Logs) enables Point-in-Time Recovery (PITR) if an accidental `DROP TABLE` or data corruption occurs at 2:47 PM.',
            solution: `1. Backup Types Comparison:
- Full Backup: Complete copy of all database datafiles. Slowest backup time, fastest restoration (only 1 backup set needed).
- Incremental Backup: Copies only data blocks that changed since the LAST backup of ANY type (Full or Incremental). Fastest backup time, slowest restore (requires Full + every subsequent Incremental in sequence).
- Differential Backup: Copies all data blocks changed since the LAST FULL backup. Moderate backup size, fast restore (requires only Last Full + Latest Differential).

2. Point-in-Time Recovery (PITR) at 2:47 PM:
- Suppose the last nightly Full Backup completed at 12:00 AM.
- Step 1: Restore the 12:00 AM Full Backup to a staging instance.
- Step 2: Replay the continuous Archive Redo Logs (WAL segments) generated between 12:00 AM and 2:46:59 PM (stopping just 1 second before the accidental \`DROP TABLE\` transaction commit ID).
- Step 3: Open the database with resetlogs. Zero transactions between midnight and 2:46:59 PM are lost.`,
            tags: ['DBMS', 'Backup & Recovery', 'PITR', 'WAL', 'Oracle DBA'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-dbbl-so-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain OSPF Multi-Area Architecture in a nationwide bank network. What are Area 0 (Backbone Area), ABR (Area Border Router), and ASBR (Autonomous System Boundary Router)? How does multi-area OSPF reduce routing table size and SPF recalculation overhead?',
            solution: `1. OSPF Hierarchical Components:
- Area 0 (Backbone Area): The central core area to which all other regional OSPF areas (e.g., Area 1 Dhaka, Area 2 Chittagong, Area 3 Sylhet) must connect.
- ABR (Area Border Router): Router sitting at the boundary between Area 0 and a regional area. Summarizes regional routes and injects Type-3 Summary LSAs.
- ASBR (Autonomous System Boundary Router): Router connecting the OSPF network to external non-OSPF networks (e.g., BGP ISP links or Bangladesh Bank extranet).

2. Scalability Benefits:
- Link-State Isolation: If a branch link flaps in Area 2 (Chittagong), Link-State Advertisements (Type-1/Type-2 LSAs) and Dijkstra SPF recalculations are contained strictly inside Area 2. Routers in Dhaka (Area 1) do not waste CPU recalculating their SPF trees.
- Route Summarization: ABRs aggregate hundreds of branch subnets into a single summary CIDR block, shrinking routing tables.`,
            tags: ['Networking', 'OSPF', 'ABR', 'Routing', 'WAN Architecture'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-dbbl-so-4',
            questionNo: '4',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C or Python function to validate whether a given string is a strictly valid IPv4 address (e.g. `"172.16.254.1"` is valid, whereas `"256.1.1.1"`, `"192.168.01.1"`, or `"10.1.1"` are invalid).',
            solution: 'Split by dot, verify exactly 4 octets, ensure numeric digits without leading zeros, and check range 0 <= val <= 255.',
            codeSolution: `def is_valid_ipv4(ip: str) -> bool:
    parts = ip.split(".")
    if len(parts) != 4:
        return False
        
    for part in parts:
        if not part.isdigit():
            return False
        # Reject leading zeros like "01"
        if len(part) > 1 and part[0] == '0':
            return False
        val = int(part)
        if val < 0 or val > 255:
            return False
            
    return True

# Test Cases
for candidate in ["172.16.254.1", "256.100.0.1", "192.168.01.1"]:
    print(f"{candidate:<16} -> {is_valid_ipv4(candidate)}")`,
            solutionLanguage: 'python',
            tags: ['Programming', 'IPv4 Validation', 'Python', 'Networking'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-dbbl-so-5',
            questionNo: '5',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: ServerLog(LogID, ServerIP, CpuLoad, MemoryUsage, LogTime). Write an SQL query to find all production servers (`ServerIP`) whose average CPU load over the last 1 hour exceeded 85% across at least 10 log intervals.',
            solution: 'Filter by LogTime >= NOW() - INTERVAL 1 HOUR, group by ServerIP, and filter with HAVING.',
            codeSolution: `SELECT 
    ServerIP,
    COUNT(LogID) AS Sample_Count,
    ROUND(AVG(CpuLoad), 2) AS Avg_CPU_Load,
    MAX(MemoryUsage) AS Peak_Memory_Usage
FROM ServerLog
WHERE LogTime >= CURRENT_TIMESTAMP - INTERVAL '1 hour'
GROUP BY ServerIP
HAVING COUNT(LogID) >= 10
   AND AVG(CpuLoad) > 85.0
ORDER BY Avg_CPU_Load DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Infrastructure Monitoring', 'GROUP BY', 'HAVING'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-dbbl-so-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Differentiate between SIEM (Security Information and Event Management), SOAR (Security Orchestration, Automation, and Response), and EDR (Endpoint Detection and Response) in a modern Bank Security Operations Center (SOC).',
            solution: `1. SIEM (e.g., Splunk, IBM QRadar, Elastic SIEM):
- Aggregates, normalizes, and correlates security logs from firewalls, routers, active directory, and databases across the bank to trigger alerts on suspicious patterns.

2. EDR (e.g., CrowdStrike Falcon, Microsoft Defender for Endpoint):
- Lightweight agent installed on endpoints (teller PCs, servers) that monitors real-time process behavior, memory injection, and file encryption, capable of isolating an infected host from the network immediately.

3. SOAR:
- Connects SIEM alerts with automated incident response playbooks. For example, when SIEM detects a brute-force attack from an external IP, SOAR automatically queries threat intelligence and pushes a block rule to the perimeter firewall without waiting for human intervention.`,
            tags: ['Cybersecurity', 'SOC', 'SIEM', 'SOAR', 'EDR'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-dbbl-so-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-dbbl-so-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Engineering High Availability and Disaster Resilience in Nationwide ATM and Digital Banking Networks" (Word limit: 250 words).',
            solution: `Key Analytical Points:
- Downtime in retail banking directly erodes public confidence and halts commerce.
- Redundancy at every layer: Dual fiber + 4G M2M cellular router failover at ATM booths, active-active core switches, and geographically separated Near-DR and Far-DR data centers.
- Proactive telemetry: Real-time SNMP/ICMP monitoring of cash cassettes, receipt printers, and UPS battery health to dispatch maintenance engineers before outages occur.`,
            tags: ['Focus Writing', 'English', 'High Availability', 'ATM Network'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-dbbl-so-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "নিরবচ্ছিন্ন ব্যাংকিং সেবা নিশ্চিত করতে মূল ডাটা সেন্টারের পাশাপাশি একটি শক্তিশালী ডিজাস্টার রিকভারি সেন্টার পরিচালনা করা প্রতিটি ব্যাংকের জন্য বাধ্যতামূলক।"',
            solution: `Standard High-Quality Model Translation:
"To ensure uninterrupted banking services, operating a robust Disaster Recovery Center alongside the primary Data Center is mandatory for every bank."`,
            tags: ['Translation', 'Bangla to English', 'Disaster Recovery'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 34. Eastern Bank PLC (EBL) Senior Officer (IT & Digital Banking - Skybanking)
  {
    id: 'pcb-ebl-so-it-2024',
    title: 'Senior Officer (IT & Digital Banking), Eastern Bank PLC (EBL)',
    searchQuery: 'Eastern Bank EBL Senior Officer IT Skybanking written question solution pdf',
    category: 'Private Bank Senior Officer (IT)',
    jobId: 'EBL-SO-IT-2024',
    circularYear: '2024',
    examDate: 'July 19, 2024',
    examBody: 'EBL Assessment Center / BIBM',
    participatingBanks: ['Eastern Bank PLC (EBL)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Eastern Bank PLC (EBL) Senior Officer (IT) recruitment paper. Covers Mutual TLS (mTLS) API Gateway security, SQL Window running totals, Dynamic Programming Edit Distance for e-KYC fuzzy name matching, MVCC database concurrency, and VLAN 802.1Q trunking.',
    keyTopics: ['mTLS & API Gateway', 'SQL Running Totals', 'Levenshtein Edit Distance DP', 'MVCC Concurrency', 'IEEE 802.1Q VLAN', 'Open Banking'],
    sections: [
      {
        id: 'sec-ebl-so-tech',
        name: 'Technical IT & Digital Banking Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-ebl-so-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Differentiate between standard One-Way TLS and Mutual TLS (mTLS). Why is mTLS mandatory for Server-to-Server B2B payment API integrations between Eastern Bank Skybanking, bKash/Nagad, and Bangladesh Bank RTGS?',
            solution: `1. One-Way TLS vs Mutual TLS (mTLS):
- Standard One-Way TLS: Only the Server presents its X.509 digital certificate to prove its identity to the client browser. The client remains anonymous at the TLS layer (authenticating later via passwords/tokens).
- Mutual TLS (mTLS): Both the Server AND the Client present X.509 certificates during the TLS handshake. Both parties cryptographically verify each other's certificate chain and private key possession before a single byte of HTTP traffic is exchanged.

2. Why mTLS is Mandatory for B2B Banking APIs:
- Eliminates API key theft risks: Even if an attacker steals a Bearer token or API key, they cannot establish a TCP/TLS connection to the payment gateway without possessing the client bank's private key stored in its HSM.
- Prevents Man-in-the-Middle (MitM) spoofing across inter-bank leased lines.`,
            tags: ['Cybersecurity', 'mTLS', 'TLS', 'API Security', 'EBL'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ebl-so-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Given table: LedgerEntry(EntryID, AccNo, TxnDate, SignedAmount) where deposits are positive and withdrawals are negative. Write an SQL query using Window Functions to generate an account statement for account `"EBL-5001"` showing `EntryID`, `TxnDate`, `SignedAmount`, and the cumulative `RunningBalance` after each transaction.',
            solution: 'Use SUM(SignedAmount) OVER (PARTITION BY AccNo ORDER BY TxnDate, EntryID ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW).',
            codeSolution: `SELECT 
    EntryID,
    AccNo,
    TxnDate,
    SignedAmount AS Transaction_Amount,
    SUM(SignedAmount) OVER (
        PARTITION BY AccNo 
        ORDER BY TxnDate, EntryID
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS Running_Balance
FROM LedgerEntry
WHERE AccNo = 'EBL-5001'
ORDER BY TxnDate, EntryID;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'Running Balance', 'Ledger', 'EBL'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ebl-so-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'During automated e-KYC onboarding, a customer’s name on their NID ("MOHAMMAD RAHIM") may have minor spelling variations compared to their utility bill ("MUHAMMAD RAHIM"). Write a Python function to compute the Levenshtein Edit Distance between two strings using Dynamic Programming.',
            solution: '2D Dynamic Programming matrix computing minimum insertions, deletions, and substitutions in O(M * N) time.',
            codeSolution: `def edit_distance(s1: str, s2: str) -> int:
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],     # Deletion
                    dp[i][j - 1],     # Insertion
                    dp[i - 1][j - 1]  # Substitution
                )
    return dp[m][n]

name_nid = "MOHAMMAD RAHIM"
name_doc = "MUHAMMAD RAHIM"
dist = edit_distance(name_nid, name_doc)
print(f"Edit Distance: {dist}")`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Dynamic Programming', 'Edit Distance', 'e-KYC', 'Python'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-ebl-so-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'What is Multi-Version Concurrency Control (MVCC) in modern relational databases (Oracle, PostgreSQL)? How does MVCC achieve "Readers never block Writers, and Writers never block Readers" without using shared read locks?',
            solution: `1. MVCC Architecture:
- Instead of overwriting a data row in-place when an \`UPDATE\` occurs, the DBMS creates a new version (tuple) of the row tagged with the transaction ID (\`xmin\`/\`SCN\`) and retains the old version in Undo/Rollback segments.

2. Non-Blocking Snapshot Reads:
- When a \`SELECT\` query starts, it is assigned a consistent point-in-time Snapshot Transaction ID.
- If another transaction concurrently updates the same row, the reader simply reads the older committed version visible to its snapshot, while the writer writes to the new version.
- Consequently, read-only reporting queries on Skybanking never block real-time fund transfer updates!`,
            tags: ['DBMS', 'MVCC', 'Concurrency Control', 'PostgreSQL', 'Oracle'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-ebl-so-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain Virtual Local Area Networks (VLANs) and IEEE 802.1Q Trunking in a commercial bank head office. Differentiate between Access Ports and Trunk Ports, and explain how Inter-VLAN routing is performed using a Layer-3 Switch (SVI) or Router-on-a-Stick.',
            solution: `1. VLAN Segmentation in Banking:
Logically segments a physical switch into isolated broadcast domains (e.g., VLAN 10: Core Servers, VLAN 20: Teller PCs, VLAN 30: Guest Wi-Fi, VLAN 40: CCTV/IP Phones).

2. Access Port vs Trunk Port (IEEE 802.1Q):
- Access Port: Carries traffic for a SINGLE VLAN only. Frames are untagged. Connected to end-user PCs or printers.
- Trunk Port: Carries traffic for MULTIPLE VLANs simultaneously across a single physical uplink between switches. Inserts a 4-byte IEEE 802.1Q header tag (containing the 12-bit VLAN ID) into the Ethernet frame.

3. Inter-VLAN Routing:
- Layer-3 Switch SVI (Switched Virtual Interface): Performs hardware-accelerated routing in ASICs using virtual VLAN interfaces, delivering wire-speed throughput with minimal latency.`,
            tags: ['Networking', 'VLAN', 'IEEE 802.1Q', 'Layer 3 Switch'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ebl-so-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Compare IaaS, PaaS, and SaaS cloud service models using concrete banking examples. What are the key data sovereignty requirements mandated by Bangladesh Bank for commercial banks adopting cloud services?',
            solution: `1. Cloud Models in Banking:
- IaaS (Infrastructure as a Service): Virtualized compute, storage, and networking (e.g., hosting disaster recovery VMs). Bank manages OS, database, and apps.
- PaaS (Platform as a Service): Managed database or container runtime (e.g., Managed Kubernetes / RDS). Bank manages only application code and data.
- SaaS (Software as a Service): Complete turnkey software (e.g., Microsoft 365 corporate email, cloud CRM).

2. Data Sovereignty & Regulatory Compliance:
- Primary customer financial data, KYC records, and transaction ledgers of Bangladeshi citizens MUST reside physically within the geographical borders of Bangladesh to ensure legal jurisdiction and central bank auditability.`,
            tags: ['Cloud Computing', 'IaaS', 'PaaS', 'SaaS', 'Data Sovereignty'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-ebl-so-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-ebl-so-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Evolution of Lifestyle Banking Apps: Merging E-Commerce, Travel, and Financial Services" (Word limit: 250 words).',
            solution: `Key Analytical Points:
- Modern private bank apps (like EBL Skybanking and Citytouch) have evolved beyond basic balance inquiries into comprehensive lifestyle ecosystems.
- Customers book airline tickets, pay tuition fees, manage lounge access, request positive pay cheque clearance, and block/unblock debit cards instantly.
- API-first architecture allows seamless integration with ridesharing, food delivery, and insurance partners.`,
            tags: ['Focus Writing', 'English', 'Digital Banking', 'Skybanking'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ebl-so-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "আধুনিক মোবাইল ব্যাংকিং অ্যাপগুলো শুধুমাত্র লেনদেনের মাধ্যম নয়, বরং গ্রাহকের প্রাত্যহিক জীবনযাত্রার একটি পূর্ণাঙ্গ ডিজিটাল প্ল্যাটফর্মে পরিণত হয়েছে।"',
            solution: `Standard High-Quality Model Translation:
"Modern mobile banking applications are no longer merely mediums for transactions; rather, they have evolved into comprehensive digital platforms for customers' everyday lifestyles."`,
            tags: ['Translation', 'Bangla to English', 'Mobile Banking'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 35. Prime Bank & Bank Asia Senior Officer (IT)
  {
    id: 'pcb-prime-bankasia-so-it-2023',
    title: 'Senior Officer (IT / Core Banking), Prime Bank & Bank Asia PLC',
    searchQuery: 'Prime Bank Bank Asia Senior Officer IT Core Banking question solution pdf',
    category: 'Private Bank Senior Officer (IT)',
    jobId: 'PBL-BA-SO-IT-2023',
    circularYear: '2023',
    examDate: 'October 27, 2023',
    examBody: 'BIBM / IBA',
    participatingBanks: ['Prime Bank PLC', 'Bank Asia PLC'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Senior Officer (IT) recruitment paper for Prime Bank and Bank Asia. Focuses on 3-Tier Core Banking Architecture, Materialized Views for Central Bank RIT reporting, Agent Banking commission engine in Java, Linux firewall hardening, and TLS 1.3 certificate pinning.',
    keyTopics: ['3-Tier CBS Architecture', 'SQL Materialized Views', 'Agent Banking OOP Engine', 'Linux Hardening & LVM', 'TLS 1.3 & Certificate Pinning', 'Agent Banking Focus Writing'],
    sections: [
      {
        id: 'sec-pblba-so-tech',
        name: 'Technical IT & Core Banking Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-pblba-so-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Differentiate between a standard SQL `VIEW` and a `MATERIALIZED VIEW` in Oracle / PostgreSQL. Why are Materialized Views essential for generating Bangladesh Bank Rationalized Input Templates (RIT) and executive MIS dashboards without slowing down daytime OLTP branch transactions?',
            solution: `1. Standard View vs Materialized View:
- Standard View: A virtual table storing only the SQL query definition. Every time a user queries the view, the underlying base tables are joined and aggregated on-the-fly. Zero disk storage, but high CPU/I/O cost on large tables.
- Materialized View: Physically pre-computes and stores the query result set on disk like a real table. Can be indexed and refreshed periodically (\`REFRESH FAST ON COMMIT\` or nightly scheduled \`REFRESH COMPLETE\`).

2. Role in Banking OLTP vs OLAP/MIS:
- Running heavy multi-million-row aggregations for central bank RIT regulatory reporting directly against live Core Banking tables during banking hours causes lock contention and slows teller operations.
- Materialized Views pre-aggregate balances during off-peak hours, allowing MIS dashboards to load in milliseconds.`,
            tags: ['DBMS', 'Materialized View', 'Oracle', 'MIS Reporting', 'Core Banking'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-pblba-so-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider Agent Banking tables: AgentOutlet(OutletID, OutletName, District, MasterAccountNo) and AgentTxn(TxnID, OutletID, TxnType, Amount, CommissionEarned, TxnDate). Write an SQL query to find the Top 5 Agent Outlets in each District based on total `CommissionEarned` in Q1 2024, displaying only outlets with at least 100 transactions.',
            solution: 'Filter Q1 2024, group by OutletID and District with HAVING COUNT >= 100, and rank within each District using DENSE_RANK().',
            codeSolution: `WITH QualifiedOutlets AS (
    SELECT 
        o.District,
        o.OutletID,
        o.OutletName,
        COUNT(t.TxnID) AS Total_Txns,
        SUM(t.CommissionEarned) AS Total_Commission,
        DENSE_RANK() OVER (
            PARTITION BY o.District 
            ORDER BY SUM(t.CommissionEarned) DESC
        ) AS District_Rank
    FROM AgentOutlet o
    JOIN AgentTxn t ON o.OutletID = t.OutletID
    WHERE t.TxnDate >= '2024-01-01' AND t.TxnDate <= '2024-03-31'
    GROUP BY o.District, o.OutletID, o.OutletName
    HAVING COUNT(t.TxnID) >= 100
)
SELECT District, District_Rank, OutletID, OutletName, Total_Txns, Total_Commission
FROM QualifiedOutlets
WHERE District_Rank <= 5
ORDER BY District, District_Rank;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'Agent Banking', 'Bank Asia'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-pblba-so-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Java or C++ program to implement a thread-safe Singleton `DatabaseConnectionPool` manager using Double-Checked Locking and `volatile` keyword.',
            solution: 'Double-checked locking ensures lazy initialization and thread safety without synchronization overhead on every getInstance() call.',
            codeSolution: `public class DatabaseConnectionPool {
    private static volatile DatabaseConnectionPool instance;
    private final String dbUrl;

    private DatabaseConnectionPool() {
        this.dbUrl = "jdbc:oracle:thin:@//cbs-prod-scan:1521/CBSPROD";
    }

    public static DatabaseConnectionPool getInstance() {
        if (instance == null) {
            synchronized (DatabaseConnectionPool.class) {
                if (instance == null) {
                    instance = new DatabaseConnectionPool();
                }
            }
        }
        return instance;
    }

    public String getConnectionInfo() {
        return "Connected to " + dbUrl;
    }

    public static void main(String[] args) {
        DatabaseConnectionPool pool = DatabaseConnectionPool.getInstance();
        System.out.println(pool.getConnectionInfo());
    }
}`,
            solutionLanguage: 'java',
            tags: ['Java', 'Design Patterns', 'Singleton', 'Multithreading', 'Prime Bank'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-pblba-so-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is SSL/TLS Certificate Pinning in mobile banking applications (iOS/Android)? How does Certificate Pinning protect customers from Man-in-the-Middle (MitM) attacks even if a user’s device is infected with a rogue Root CA certificate?',
            solution: `1. The Rogue Root CA Threat:
- Standard TLS trusts any certificate signed by any Root CA installed in the mobile OS trust store.
- If malware or an attacker tricks a user into installing a custom proxy Root CA (e.g., Charles Proxy, Burp Suite, or corporate spyware) on their phone, the attacker can intercept and decrypt all HTTPS traffic.

2. How Certificate Pinning Prevents MitM:
- The mobile banking app hardcodes (pins) the cryptographic SHA-256 hash of the bank server's exact Subject Public Key Info (SPKI) inside the compiled mobile application binary.
- During the TLS handshake, the app compares the server certificate's public key hash directly against the pinned hash. If they do not match, the app immediately aborts the connection—even if the OS claims the certificate is trusted!`,
            tags: ['Cybersecurity', 'Certificate Pinning', 'TLS', 'Mobile Security'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-pblba-so-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain Logical Volume Manager (LVM) in Linux enterprise servers. Define Physical Volume (PV), Volume Group (VG), and Logical Volume (LV), and write the commands to extend an online `/var/lib/oracle` logical volume by 100GB without unmounting or stopping the database.',
            solution: `1. LVM Architecture:
- Physical Volume (PV): Raw physical disk or partition initialized for LVM (e.g., \`/dev/sdb\`).
- Volume Group (VG): Pool of storage combining multiple PVs into a single virtual disk pool (e.g., \`vg_cbs\`).
- Logical Volume (LV): Virtual partition carved out of a VG and mounted as a filesystem (e.g., \`/dev/vg_cbs/lv_oracle\`).

2. Online Volume Extension Commands (Zero Downtime):
\`\`\`bash
# 1. Extend the Logical Volume by 100GB
sudo lvextend -L +100G /dev/vg_cbs/lv_oracle

# 2. Resize the filesystem online (ext4 or xfs)
sudo resize2fs /dev/vg_cbs/lv_oracle
# (Or xfs_growfs /var/lib/oracle for XFS filesystems)
\`\`\``,
            tags: ['Linux', 'LVM', 'Storage Management', 'SysAdmin'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-pblba-so-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the 3-Tier Architecture of an Enterprise Core Banking System (Presentation Tier, Application/Middleware Tier, and Database Tier). Why must client teller browsers never connect directly to the Database Tier?',
            solution: `1. Three Tiers:
- Presentation Tier: Branch teller web UI and customer mobile apps.
- Application / Middleware Tier (WebLogic / JBoss / Spring Boot): Enforces business rules, Maker-Checker authorization, interest calculations, and connection pooling.
- Data Tier (Oracle RAC / Enterprise DB): Stores transactional ledgers on SAN storage.

2. Why Direct Client-to-DB Connection is Prohibited:
- Exposes database ports (e.g. 1521) to workstation networks, enabling direct ransomware or SQL client exploitation.
- Bypasses business logic and Maker-Checker audit controls.
- Exhausts database memory due to thousands of direct persistent TCP connections.`,
            tags: ['System Design', '3-Tier Architecture', 'Core Banking', 'Security'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-pblba-so-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-pblba-so-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Pioneer Role of Private Commercial Banks in Agent Banking and Rural Financial Empowerment" (Word limit: 250 words).',
            solution: `Key Analytical Points:
- Bank Asia pioneered Agent Banking in Bangladesh in 2014, setting a model now adopted across the industry.
- Biometric POS devices and real-time Core Banking integration allow rural citizens to open accounts, collect foreign remittances, and pay utility bills at union digital centers and local बाजार outlets.
- Mobilizes rural deposits and channels agricultural and micro-enterprise credit without the high overhead of full brick-and-mortar branches.`,
            tags: ['Focus Writing', 'English', 'Agent Banking', 'Bank Asia'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-pblba-so-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "এজেন্ট ব্যাংকিং চালুর ফলে দেশের প্রত্যন্ত অঞ্চলের মানুষ বিশেষ করে নারীরা সহজেই ব্যাংকিং সেবার আওতায় আসছেন এবং গ্রামীণ অর্থনীতি শক্তিশালী হচ্ছে।"',
            solution: `Standard High-Quality Model Translation:
"Owing to the introduction of agent banking, people in remote regions of the country—particularly women—are easily coming under the umbrella of banking services, thereby strengthening the rural economy."`,
            tags: ['Translation', 'Bangla to English', 'Agent Banking'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 36. UCB & Mutual Trust Bank (MTB) Senior Officer / MTO (IT)
  {
    id: 'pcb-ucb-mtb-so-it-2024',
    title: 'Senior Officer / MTO (IT), UCB & Mutual Trust Bank PLC',
    searchQuery: 'UCB Mutual Trust Bank MTB Senior Officer MTO IT written question solution pdf',
    category: 'Private Bank Senior Officer (IT)',
    jobId: 'UCB-MTB-SO-IT-2024',
    circularYear: '2024',
    examDate: 'September 06, 2024',
    examBody: 'BIBM',
    participatingBanks: ['United Commercial Bank PLC (UCB)', 'Mutual Trust Bank PLC (MTB)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Combined Private Bank Senior Officer / Management Trainee Officer (IT) recruitment test for UCB and MTB. Covers Saga Choreography vs Orchestration, Blue-Green vs Canary deployments, SQL EXISTS vs IN optimization, DHCP DORA & Spanning Tree Protocol (RSTP), and binary search algorithms.',
    keyTopics: ['Saga Orchestration vs Choreography', 'Blue-Green vs Canary Deployment', 'SQL EXISTS vs IN', 'STP / RSTP & DHCP DORA', 'Binary SearchRotated Array', 'AI in Banking'],
    sections: [
      {
        id: 'sec-ucbmtb-so-tech',
        name: 'Technical IT & Enterprise Architecture Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-ucbmtb-so-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'In distributed microservices banking architectures, compare the Saga Choreography pattern vs. Saga Orchestration pattern for handling a cross-service fund transfer (Account Service -> Fraud Check Service -> NPSB Switch Service -> Notification Service). How are compensating transactions triggered upon failure?',
            solution: `1. Saga Choreography (Event-Driven Decentralization):
- No central coordinator. Each microservice listens to domain events on a message broker (Kafka/RabbitMQ) and publishes new events upon completing its local transaction.
- Pros: Simple for 2-3 services, no single point of failure.
- Cons: Cyclic dependencies and "event spaghetti" when workflows exceed 4+ services; difficult to track overall transaction state.

2. Saga Orchestration (Centralized State Machine):
- A dedicated \`TransferOrchestrator\` service manages the workflow state machine. It sends commands sequentially to Account Service (Reserve Funds), Fraud Service (Validate), and Switch Service (Settle).
- Compensating Rollback: If Switch Service returns a timeout/decline, the Orchestrator explicitly invokes \`Compensate_RefundAccount()\` on the Account Service to release the reserved funds cleanly. Preferred for mission-critical banking workflows.`,
            tags: ['System Design', 'Saga Pattern', 'Microservices', 'UCB', 'MTB'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-ucbmtb-so-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Compare Blue-Green Deployment, Canary Deployment, and Rolling Update strategies for releasing a new version of a mobile banking backend with zero downtime.',
            solution: `1. Blue-Green Deployment:
- Two identical production environments: "Blue" (current live v1.0) and "Green" (new v2.0).
- Once Green passes smoke tests, the Load Balancer switches 100% of traffic from Blue to Green instantaneously. Instant rollback by switching router back to Blue.

2. Canary Deployment:
- Gradually routes a small subset (e.g., 2% or internal bank employees) of live traffic to v2.0 while 98% stays on v1.0.
- Automated telemetry monitors error rates and latency; if healthy, traffic ramps up to 10%, 50%, and 100%. Minimizes blast radius of undetected bugs.

3. Rolling Update:
- Replaces v1.0 pods with v2.0 pods incrementally one batch at a time inside the same cluster without requiring double hardware capacity.`,
            tags: ['DevOps', 'Blue-Green Deployment', 'Canary Deployment', 'Zero Downtime'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ucbmtb-so-3',
            questionNo: '3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Explain why `NOT IN (SELECT ...)` can return zero rows unexpectedly when the subquery contains `NULL` values, whereas `NOT EXISTS` handles `NULL` safely. Write an SQL query using `NOT EXISTS` to find all active bank branches that had zero loan defaults in the year 2024.',
            solution: `1. The NULL Trap in NOT IN:
- \`WHERE x NOT IN (10, 20, NULL)\` evaluates to \`x <> 10 AND x <> 20 AND x <> NULL\`.
- In SQL three-valued logic, \`x <> NULL\` is always \`UNKNOWN\`, causing the entire \`WHERE\` clause to evaluate to false and return 0 rows! \`NOT EXISTS\` checks row existence boolean and is immune to NULLs.`,
            codeSolution: `SELECT 
    b.BranchID,
    b.BranchName,
    b.City
FROM Branch b
WHERE b.Status = 'ACTIVE'
  AND NOT EXISTS (
      SELECT 1 
      FROM Loan l
      WHERE l.BranchID = b.BranchID
        AND l.LoanStatus = 'DEFAULTED'
        AND l.DefaultDate >= '2024-01-01'
        AND l.DefaultDate <= '2024-12-31'
  );`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'NOT EXISTS', 'NULL Handling', 'Query Optimization'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ucbmtb-so-4',
            questionNo: '4',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C++ or Python function to search for a target transaction ID in a Rotated Sorted Array (e.g. `[45, 50, 60, 10, 20, 30, 40]`) in strictly O(log N) time complexity using modified Binary Search.',
            solution: 'At any mid index in a rotated sorted array, at least one half (left or right) is guaranteed to be strictly sorted. Check which half is sorted and narrow the binary search bounds accordingly.',
            codeSolution: `def search_rotated_array(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
            
        # Left half is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right half is sorted
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
                
    return -1

arr = [45, 50, 60, 10, 20, 30, 40]
print("Index of 20:", search_rotated_array(arr, 20))`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Binary Search', 'Rotated Array', 'Python'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ucbmtb-so-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the DHCP DORA process and Spanning Tree Protocol (STP / RSTP, IEEE 802.1w). What is a Layer-2 Broadcast Storm in a branch LAN and how does STP prevent it?',
            solution: `1. DHCP DORA Process:
- Discover (Client broadcast 255.255.255.255) -> Offer (Server unicast/broadcast IP lease offer) -> Request (Client requests offered IP) -> Acknowledge (Server confirms lease & subnet/gateway/DNS options).

2. Broadcast Storm & Spanning Tree Protocol (STP / RSTP):
- Because Ethernet Layer-2 frames have no TTL (Time-To-Live) field, a physical cable loop between redundant switches causes broadcast frames (ARP, DHCP) to circulate infinitely, saturating 100% of switch backplane bandwidth in seconds.
- STP elects a Root Bridge and places redundant loop ports into a Blocking/Discarding state, logically converting the physical mesh into a loop-free tree. If the primary link fails, RSTP transitions the backup port to Forwarding in under 1 second.`,
            tags: ['Networking', 'DHCP', 'STP', 'RSTP', 'Broadcast Storm'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ucbmtb-so-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'What is a Zombie Process vs. an Orphan Process in Linux? How does a system administrator identify and clean up zombie processes on a production application server?',
            solution: `1. Orphan vs Zombie Process:
- Orphan Process: A child process whose parent process has terminated or crashed while the child is still running. The \`init\` / \`systemd\` process (PID 1) immediately adopts orphan processes and waits for their exit status.
- Zombie (Defunct) Process: A process that has completed execution via \`exit()\`, but its entry remains in the kernel process table because its parent process has not yet called \`wait()\` or \`waitpid()\` to read its exit status code.

2. Identification & Remediation:
- Identified in \`ps aux\` or \`top\` with state \`Z\` or \`<defunct>\`.
- Since a zombie is already dead, \`kill -9 <zombie_pid>\` has no effect. Instead, send \`SIGCHLD\` to the parent process (\`kill -s SIGCHLD <ppid>\`) or restart the buggy parent process so \`systemd\` reaps the zombies.`,
            tags: ['Linux', 'Operating Systems', 'Zombie Process', 'Orphan Process'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-ucbmtb-so-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-ucbmtb-so-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Conversational AI and Generative AI in Transforming Customer Service and Operations in Private Commercial Banks" (Word limit: 250 words).',
            solution: `Key Analytical Points:
- 24/7 multilingual Bangla and English NLP chatbots resolve over 70% of routine customer queries (card blocking, balance check, branch locators) without call center wait times.
- Internal AI copilots assist credit analysts in summarizing lengthy corporate loan proposals and detecting document discrepancies.
- Strict guardrails are essential to prevent hallucination and protect customer PII data privacy.`,
            tags: ['Focus Writing', 'English', 'AI in Banking', 'Customer Experience'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-ucbmtb-so-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "গ্রাহক সেবার মান উন্নয়নে কৃত্রিম বুদ্ধিমত্তা ও চ্যাটবট প্রযুক্তির ব্যবহার ব্যাংকিং খাতে এক নতুন দিগন্তের সূচনা করেছে।"',
            solution: `Standard High-Quality Model Translation:
"The utilization of artificial intelligence and chatbot technologies in enhancing the quality of customer service has ushered in a new horizon in the banking sector."`,
            tags: ['Translation', 'Bangla to English', 'AI Chatbots'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // PART C: PRIVATE BANK OFFICER (IT) / PO (IT) (4 FULL 200-MARK PAPERS)
  // ============================================================================

  // 37. Dutch-Bangla Bank PLC (DBBL) Probationary Officer / Officer (IT)
  {
    id: 'pcb-dbbl-po-it-2023',
    title: 'Probationary Officer / Officer (IT), Dutch-Bangla Bank PLC (DBBL)',
    searchQuery: 'Dutch Bangla Bank DBBL Probationary Officer IT written question solution pdf',
    category: 'Private Bank Officer (IT)',
    jobId: 'DBBL-PO-IT-2023',
    circularYear: '2023',
    examDate: 'December 08, 2023',
    examBody: 'BIBM / IBA (DU)',
    participatingBanks: ['Dutch-Bangla Bank PLC (DBBL)'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Probationary Officer / Officer (IT) examination at Dutch-Bangla Bank PLC. Covers C programming (Matrix diagonal sums & prime numbers), SQL joins, Stack infix-to-postfix evaluation, Operating System TLB Effective Access Time (EAT) calculation, and payment clearing workflows.',
    keyTopics: ['C Matrix Diagonal Sum', 'SQL Multi-Table Joins', 'Infix to Postfix Stack', 'TLB Effective Access Time Math', 'MICR & BACPS Clearing', 'Focus Writing'],
    sections: [
      {
        id: 'sec-dbbl-po-tech',
        name: 'Technical IT Departmental (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-dbbl-po-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C program to input a square matrix of size `N x N` and calculate the sum of its Principal (Primary) Diagonal and Secondary (Anti) Diagonal elements without double-counting the center element when `N` is odd.',
            solution: 'Iterate i from 0 to N-1, summing mat[i][i] and mat[i][N-1-i], subtracting the center element mat[N/2][N/2] once if N is odd.',
            codeSolution: `#include <stdio.h>

int main() {
    int n = 3;
    int mat[3][3] = {
        {10, 20, 30},
        {40, 50, 60},
        {70, 80, 90}
    };

    int primarySum = 0, secondarySum = 0;
    for (int i = 0; i < n; i++) {
        primarySum += mat[i][i];
        secondarySum += mat[i][n - 1 - i];
    }

    int combinedTotal = primarySum + secondarySum;
    if (n % 2 == 1) {
        combinedTotal -= mat[n / 2][n / 2]; // Avoid double counting center
    }

    printf("Primary Diagonal Sum: %d\\n", primarySum);
    printf("Secondary Diagonal Sum: %d\\n", secondarySum);
    printf("Unique Diagonal Elements Total: %d\\n", combinedTotal);
    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['C Language', 'Matrix Operations', 'Arrays', 'DBBL PO IT'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-dbbl-po-2',
            questionNo: '2',
            type: 'math',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'In a paged virtual memory system, a Translation Lookaside Buffer (TLB) lookup takes 2 ns and a main memory (RAM) access takes 100 ns. If the TLB Hit Ratio is 90%, calculate the Effective Memory Access Time (EAT). What is the EAT if the TLB Hit Ratio is improved to 98%?',
            solution: `Step-by-step EAT Calculation:
1. Formula:
- On TLB Hit: Time = TLB Lookup + 1 RAM Access = 2 + 100 = 102 ns.
- On TLB Miss: Time = TLB Lookup + 1 RAM Access (for Page Table) + 1 RAM Access (for Data) = 2 + 100 + 100 = 202 ns.
- Effective Access Time (EAT) = p * (Hit Time) + (1 - p) * (Miss Time)

2. Case 1: 90% Hit Ratio (p = 0.90):
- EAT = 0.90 * (102) + 0.10 * (202)
- EAT = 91.8 + 20.2 = 112.0 ns.

3. Case 2: 98% Hit Ratio (p = 0.98):
- EAT = 0.98 * (102) + 0.02 * (202)
- EAT = 99.96 + 4.04 = 104.0 ns.`,
            tags: ['Operating Systems', 'TLB', 'Virtual Memory', 'EAT Math'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-dbbl-po-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Convert the infix algebraic expression `A + B * (C ^ D - E) ^ (F + G * H) - I` into Postfix (Reverse Polish Notation) using a Stack. Also evaluate the postfix expression `6 5 2 3 + 8 * + 3 + *` step-by-step.',
            solution: `1. Infix to Postfix Conversion:
- Operator precedence: \`^\` (highest) > \`*\`, \`/\` > \`+\`, \`-\` (lowest).
- Resulting Postfix Expression:
  \`A B C D ^ E - F G H * + ^ * + I -\`

2. Postfix Evaluation of \`6 5 2 3 + 8 * + 3 + *\`:
- Push 6, 5, 2, 3 -> Stack: [6, 5, 2, 3]
- Encounter \`+\`: Pop 3 and 2 -> 2 + 3 = 5. Push 5 -> Stack: [6, 5, 5]
- Push 8 -> Stack: [6, 5, 5, 8]
- Encounter \`*\`: Pop 8 and 5 -> 5 * 8 = 40. Push 40 -> Stack: [6, 5, 40]
- Encounter \`+\`: Pop 40 and 5 -> 5 + 40 = 45. Push 45 -> Stack: [6, 45]
- Push 3 -> Stack: [6, 45, 3]
- Encounter \`+\`: Pop 3 and 45 -> 45 + 3 = 48. Push 48 -> Stack: [6, 48]
- Encounter \`*\`: Pop 48 and 6 -> 6 * 48 = 288.
Final Result = 288.`,
            tags: ['Data Structures', 'Stack', 'Postfix Evaluation', 'Infix to Postfix'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-dbbl-po-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Tables: Customer(CustID, CustName, Phone), Account(AccNo, CustID, Branch, Balance), Loan(LoanID, CustID, Branch, LoanAmount). Write an SQL query to find all customers who have a Deposit Account in "Motijheel" branch AND also have a Loan in "Motijheel" branch.',
            solution: 'Join Customer, Account, and Loan on CustID and filter both branches on Motijheel, or use INTERSECT.',
            codeSolution: `SELECT DISTINCT 
    c.CustID,
    c.CustName,
    c.Phone,
    a.Balance AS Deposit_Balance,
    l.LoanAmount AS Loan_Amount
FROM Customer c
JOIN Account a ON c.CustID = a.CustID
JOIN Loan l ON c.CustID = l.CustID
WHERE a.Branch = 'Motijheel'
  AND l.Branch = 'Motijheel';`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Joins', 'INTERSECT', 'Banking Queries'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-dbbl-po-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'E-Governance & ICT Laws',
            questionText: 'Explain the working of MICR (Magnetic Ink Character Recognition) and CTS (Cheque Truncation System) in the Bangladesh Automated Cheque Processing System (BACPS). How has cheque truncation eliminated the physical movement of paper cheques across districts?',
            solution: `1. MICR Code Structure:
- Printed at the bottom of cheques using iron-oxide magnetic ink (E-13B font).
- Contains Cheque Serial Number, 9-digit Routing Number (Bank + District + Branch code), Account Number, and Transaction Code.

2. Cheque Truncation System (CTS) in BACPS:
- When a customer deposits a cheque at a presenting bank branch, a specialized CTS scanner captures front/back grayscale and UV images along with the MICR line data.
- The physical paper cheque is halted (truncated) at the presenting branch.
- The digital image signed with the bank's PKI certificate is transmitted through the BACPS clearing house to the paying bank for verification and settlement (HV clearing within hours, RV clearing same day).`,
            tags: ['Banking Technology', 'BACPS', 'MICR', 'Cheque Truncation'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-dbbl-po-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Classful IPv4 Addressing (Class A, B, C, D, E) with Classless Inter-Domain Routing (CIDR). List the RFC 1918 Private IPv4 address ranges used inside bank intranets.',
            solution: `1. Classful vs CIDR:
- Classful Addressing: Fixed octet boundaries (/8 for Class A, /16 for Class B, /24 for Class C), which caused massive IP address wastage.
- CIDR: Allows variable-length prefix masks anywhere from /1 to /32, enabling route aggregation (supernetting) and VLSM subnetting.

2. RFC 1918 Private IPv4 Ranges:
- Class A Private Block: \`10.0.0.0/8\` (\`10.0.0.0\` – \`10.255.255.255\`)
- Class B Private Block: \`172.16.0.0/12\` (\`172.16.0.0\` – \`172.31.255.255\`)
- Class C Private Block: \`192.168.0.0/16\` (\`192.168.0.0\` – \`192.168.255.255\`).`,
            tags: ['Networking', 'IPv4', 'CIDR', 'RFC 1918'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-dbbl-po-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-dbbl-po-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Financial Inclusion through Fast Track, ATM, and Mobile Banking Networks in Bangladesh" (Word limit: 250 words).',
            solution: `Key Analytical Points:
- Bridging the urban-rural divide with 24/7 automated banking kiosks and mobile wallets.
- Empowering garment workers, students, and rural remittance recipients with low-cost digital accounts.
- Reducing branch congestion and cash handling costs while enhancing transaction transparency.`,
            tags: ['Focus Writing', 'English', 'Financial Inclusion', 'DBBL'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-dbbl-po-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "তথ্যপ্রযুক্তির প্রসারের ফলে ব্যাংকিং সেবা এখন আর শহরের শাখাগুলোর মধ্যে সীমাবদ্ধ নেই, বরং দেশের প্রতিটি গ্রামে পৌঁছে গেছে।"',
            solution: `Standard High-Quality Model Translation:
"Owing to the expansion of information technology, banking services are no longer confined within urban branches; rather, they have reached every village across the country."`,
            tags: ['Translation', 'Bangla to English', 'Rural Banking'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 38. Islami Bank Bangladesh PLC (IBBPLC) Officer (IT)
  {
    id: 'pcb-ibbl-officer-it-2024',
    title: 'Officer (IT) / Field Officer (Computer), Islami Bank Bangladesh PLC',
    searchQuery: 'Islami Bank IBBL Officer IT Field Officer Computer question solution pdf',
    category: 'Private Bank Officer (IT)',
    jobId: 'IBBL-OFF-IT-2024',
    circularYear: '2024',
    examDate: 'March 08, 2024',
    examBody: 'IBBPLC / IBA',
    participatingBanks: ['Islami Bank Bangladesh PLC (IBBPLC)'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Officer (IT) recruitment examination for Islami Bank Bangladesh PLC. Covers C programming (Iterative vs Recursive Fibonacci), SQL UNION vs UNION ALL and aggregations, Subnetting /27 for 8 branches, OOP Overloading vs Overriding, CPU Cache levels, and malware defense.',
    keyTopics: ['Fibonacci DP vs Recursion', 'SQL UNION vs UNION ALL', 'Subnetting /27', 'Overloading vs Overriding', 'CPU Cache L1/L2/L3', 'Malware & Phishing Defense'],
    sections: [
      {
        id: 'sec-ibbl-off-tech',
        name: 'Technical IT Departmental (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-ibbl-off-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C program to generate the first `N` Fibonacci numbers using an Iterative O(N) approach with O(1) space. Why does naive recursion `fib(n) = fib(n-1) + fib(n-2)` have exponential O(2^N) time complexity?',
            solution: 'Naive recursion recomputes overlapping subproblems (e.g. fib(3) is recomputed many times). Iterative tracking of prev1 and prev2 solves it in O(N) time and O(1) space.',
            codeSolution: `#include <stdio.h>

void printFibonacci(int n) {
    long long a = 0, b = 1, next;
    printf("First %d Fibonacci Numbers: ", n);
    for (int i = 1; i <= n; i++) {
        printf("%lld ", a);
        next = a + b;
        a = b;
        b = next;
    }
    printf("\\n");
}

int main() {
    printFibonacci(10);
    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['C Language', 'Fibonacci', 'Dynamic Programming', 'Complexity'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ibbl-off-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Differentiate between `UNION` and `UNION ALL` in SQL in terms of duplicate elimination and sorting performance. Write an SQL query using `UNION ALL` to combine active Savings depositors from `DhakaAccount` and `ChittagongAccount` tables who have a balance above BDT 1,00,000.',
            solution: 'UNION performs an expensive sort/hash pass to eliminate duplicate rows, whereas UNION ALL simply appends result sets with O(1) overhead.',
            codeSolution: `SELECT AccNo, CustName, 'Dhaka' AS Region, Balance
FROM DhakaAccount
WHERE Status = 'ACTIVE' AND Balance > 100000

UNION ALL

SELECT AccNo, CustName, 'Chittagong' AS Region, Balance
FROM ChittagongAccount
WHERE Status = 'ACTIVE' AND Balance > 100000
ORDER BY Balance DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'UNION ALL', 'Query Performance', 'DBMS'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ibbl-off-3',
            questionNo: '3',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'Divide the Class C network `192.168.50.0/24` into 8 equal subnets for 8 sub-branches. Determine: (i) Bits borrowed and new CIDR prefix, (ii) New Subnet Mask in dotted decimal, (iii) Number of usable hosts per subnet, and (iv) Network, Usable Host Range, and Broadcast address of the 1st and 8th subnets.',
            solution: `Calculation:
(i) 2^n = 8 => n = 3 bits borrowed. New CIDR prefix = /24 + 3 = /27.
(ii) Subnet Mask: 255.255.255.224 (Block size = 256 - 224 = 32).
(iii) Usable hosts per subnet: 2^(32 - 27) - 2 = 2^5 - 2 = 30 usable hosts.
(iv) Subnets:
- 1st Subnet: Network 192.168.50.0, Usable 192.168.50.1 – 192.168.50.30, Broadcast 192.168.50.31.
- 8th Subnet: Network 192.168.50.224, Usable 192.168.50.225 – 192.168.50.254, Broadcast 192.168.50.255.`,
            tags: ['Networking', 'Subnetting', 'CIDR /27', 'IPv4'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ibbl-off-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Differentiate between Method Overloading (Compile-Time Polymorphism) and Method Overriding (Run-Time Polymorphism) in Object-Oriented Programming with code examples.',
            solution: `1. Method Overloading (Compile-Time / Static Polymorphism):
- Multiple methods in the SAME class share the same name but differ in parameter count or parameter data types. Resolved by the compiler at compile time.
- Example: \`deposit(double cash)\` vs \`deposit(String chequeNo, double amount)\`.

2. Method Overriding (Run-Time / Dynamic Polymorphism):
- A derived subclass provides a specific implementation of a virtual method already defined in its base class with the exact same signature. Resolved at runtime via Virtual Method Table (vtable).`,
            tags: ['OOP', 'Polymorphism', 'Overloading', 'Overriding'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ibbl-off-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain the memory hierarchy in modern computer architecture (Registers, L1/L2/L3 Cache, Main RAM, NVMe SSD). What is Spatial Locality vs. Temporal Locality of reference?',
            solution: `1. Memory Hierarchy (Fastest/Smallest to Slowest/Largest):
CPU Registers (< 1 ns) -> L1 Cache (~1 ns) -> L2 Cache (~4 ns) -> L3 Shared Cache (~10 ns) -> DDR5 Main RAM (~80 ns) -> NVMe SSD (~20,000 ns).

2. Locality of Reference:
- Temporal Locality: If a memory address is accessed once, it is highly likely to be accessed again in the near future (e.g., loop counter variables or frequently queried branch codes).
- Spatial Locality: If a memory location is accessed, nearby contiguous memory addresses are likely to be accessed soon (e.g., sequential array traversal).`,
            tags: ['Computer Architecture', 'Cache Memory', 'Locality of Reference'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ibbl-off-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Differentiate between Virus, Worm, Trojan Horse, and Ransomware. Outline 4 critical technical defenses a bank branch must maintain to prevent Ransomware encryption of branch servers.',
            solution: `1. Malware Classifications:
- Virus: Attaches to legitimate host files and requires human action (opening a file) to spread.
- Worm: Self-replicating standalone malware that propagates automatically across network vulnerabilities (e.g., WannaCry via SMB port 445) without human interaction.
- Trojan Horse: Disguises itself as legitimate utility software while opening covert backdoors.
- Ransomware: Encrypts victim files/databases using strong cryptography (AES+RSA) and demands ransom for the decryption key.

2. Four Bank Defenses against Ransomware:
1. Immutable Air-Gapped / Offline Backups (3-2-1 backup rule).
2. Disabling unused SMBv1/RDP ports and strict VLAN segmentation.
3. Deploying Endpoint Detection and Response (EDR) with behavioral anti-encryption blocking.
4. Email attachment sandboxing and disabling Microsoft Office macros by Group Policy.`,
            tags: ['Cybersecurity', 'Ransomware', 'Malware', 'Branch Security'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-ibbl-off-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-ibbl-off-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Cybersecurity Awareness for Retail Banking Customers in Bangladesh" (Word limit: 250 words).',
            solution: `Key Analytical Points:
- Customers are frequently targeted by vishing calls impersonating bank officials asking for OTPs or PINs.
- Banks must educate users via SMS broadcasts, app banners, and community workshops that no bank official ever asks for an OTP, CVV, or password.
- Promoting biometric login and app-based transaction verification over insecure SMS channels.`,
            tags: ['Focus Writing', 'English', 'Customer Awareness', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ibbl-off-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "কোনো অবস্থাতেই ব্যাংকের গোপন পিন, পাসওয়ার্ড কিংবা ওটিপি অন্য কারো সাথে শেয়ার করা উচিত নয়। গ্রাহকের সামান্য অসচেতনতা বড় ধরনের আর্থিক ক্ষতির কারণ হতে পারে।"',
            solution: `Standard High-Quality Model Translation:
"Under no circumstances should confidential banking PINs, passwords, or OTPs be shared with anyone else. Even a minor lapse in customer vigilance can lead to severe financial loss."`,
            tags: ['Translation', 'Bangla to English', 'OTP Security'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 39. Pubali Bank & Mercantile Bank Officer / Junior Officer (IT)
  {
    id: 'pcb-pubali-mercantile-officer-it-2024',
    title: 'Officer / Junior Officer (IT), Pubali Bank & Mercantile Bank PLC',
    searchQuery: 'Pubali Bank Mercantile Bank Officer Junior Officer IT Computer question solution pdf',
    category: 'Private Bank Officer (IT)',
    jobId: 'PBL-MBL-OFF-IT-2024',
    circularYear: '2024',
    examDate: 'May 31, 2024',
    examBody: 'BIBM',
    participatingBanks: ['Pubali Bank PLC', 'Mercantile Bank PLC'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Recruitment test conducted by BIBM for Officer / Junior Officer (IT / Computer) at Pubali Bank PLC and Mercantile Bank PLC. Covers Singly Linked List operations, E-R Modeling & Keys, SQL Duplicate detection, HTTP Status Codes, and essential Linux administration commands.',
    keyTopics: ['Linked List Deletion in C', 'DBMS Keys (Super, Candidate, Primary)', 'SQL Duplicate Detection', 'HTTP Status Codes', 'Linux grep/awk/find', 'Focus Writing'],
    sections: [
      {
        id: 'sec-pblmbl-off-tech',
        name: 'Technical IT Departmental (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-pblmbl-off-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C function to delete a node with a given key `targetKey` from a Singly Linked List, properly handling the edge case where the head node itself holds the target key and freeing memory.',
            solution: 'Check head node first; otherwise traverse with prev and curr pointers, unlink curr, and call free(curr).',
            codeSolution: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* deleteByKey(struct Node* head, int targetKey) {
    if (head == NULL) return NULL;

    // Case 1: Head node holds the target key
    if (head->data == targetKey) {
        struct Node* temp = head;
        head = head->next;
        free(temp);
        return head;
    }

    // Case 2: Search for target key tracking previous node
    struct Node* prev = head;
    struct Node* curr = head->next;
    while (curr != NULL && curr->data != targetKey) {
        prev = curr;
        curr = curr->next;
    }

    if (curr != NULL) {
        prev->next = curr->next;
        free(curr);
    }
    return head;
}`,
            solutionLanguage: 'c',
            tags: ['C Language', 'Linked List', 'Memory Management', 'Pubali Bank'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-pblmbl-off-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Define and differentiate between Super Key, Candidate Key, Primary Key, Alternate Key, and Foreign Key in a relational banking database `Customer(CustID, NID, PassportNo, Name, BranchCode)`.',
            solution: `1. Super Key: Any attribute or set of attributes that uniquely identifies a tuple (e.g., \`{CustID}\`, \`{NID}\`, \`{CustID, Name}\`, \`{NID, BranchCode}\`).
2. Candidate Key: A minimal Super Key with no redundant attributes (e.g., \`{CustID}\`, \`{NID}\`, \`{PassportNo}\`).
3. Primary Key: The specific Candidate Key chosen by the database designer as the principal unique identifier (e.g., \`CustID\`). Cannot be NULL.
4. Alternate (Secondary) Key: Candidate keys that were not chosen as the Primary Key (e.g., \`NID\`, \`PassportNo\`).
5. Foreign Key: An attribute in one table (\`BranchCode\` in \`Customer\`) that references the Primary Key of another table (\`Branch\`) to enforce Referential Integrity.`,
            tags: ['DBMS', 'Database Keys', 'Relational Model', 'Mercantile Bank'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-pblmbl-off-3',
            questionNo: '3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: CustomerKYC(KycID, CustName, MobileNo, NID, CreatedAt). Due to a data entry glitch, some customers were registered multiple times with the same `NID`. Write an SQL query to: (a) Find all duplicate `NID` values and their occurrence counts, and (b) Delete duplicate rows keeping only the earliest (`MIN(KycID)`) record for each `NID`.',
            solution: 'Use GROUP BY and HAVING COUNT(*) > 1 to find duplicates, and a self-join or subquery on MIN(KycID) to delete redundant rows.',
            codeSolution: `-- (a) Find duplicate NIDs
SELECT NID, COUNT(*) AS Duplicate_Count
FROM CustomerKYC
GROUP BY NID
HAVING COUNT(*) > 1;

-- (b) Delete duplicate rows keeping only the lowest KycID per NID
DELETE FROM CustomerKYC
WHERE KycID NOT IN (
    SELECT MIN(KycID)
    FROM CustomerKYC
    GROUP BY NID
);`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Duplicate Removal', 'Data Cleaning', 'DBMS'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-pblmbl-off-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the meaning and banking API use case of the following HTTP Status Codes: (i) 200 OK vs 201 Created, (ii) 400 Bad Request, (iii) 401 Unauthorized vs 403 Forbidden, (iv) 429 Too Many Requests, and (v) 500 Internal Server Error vs 502 Bad Gateway vs 504 Gateway Timeout.',
            solution: `(i) 200 OK: Standard successful GET/PUT response. 201 Created: New resource successfully created via POST (e.g. new fund transfer record).
(ii) 400 Bad Request: Malformed JSON syntax or failed input validation (e.g. negative transfer amount).
(iii) 401 Unauthorized: Unauthenticated request (missing or expired JWT token). 403 Forbidden: Authenticated user lacks permission to access the resource (e.g. teller trying to access admin config).
(iv) 429 Too Many Requests: Client exceeded API rate limit.
(v) 500: Unhandled exception in backend code. 502 Bad Gateway: Reverse proxy received invalid response from upstream server. 504 Gateway Timeout: Upstream Core Banking server failed to respond within timeout window.`,
            tags: ['HTTP Status Codes', 'REST API', 'Web Engineering'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-pblmbl-off-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'What is the difference between `kill -15` (`SIGTERM`) and `kill -9` (`SIGKILL`) in Linux? Why should a database administrator always attempt `SIGTERM` before resorting to `SIGKILL` on a database process?',
            solution: `1. SIGTERM (Signal 15 - Graceful Termination):
- Can be caught and handled by the application process.
- When sent to a database or banking server, the process stops accepting new connections, finishes in-flight transactions, flushes dirty buffers to disk, closes open file descriptors cleanly, and exits.

2. SIGKILL (Signal 9 - Immediate Forced Kill):
- Cannot be caught, blocked, or ignored by the process; handled directly by the Linux kernel, which forcibly terminates the process in mid-execution.
- Risk: Leaves shared memory segments corrupted and forces a lengthy crash-recovery WAL replay upon restart.`,
            tags: ['Linux', 'Signals', 'SIGTERM', 'SIGKILL', 'SysAdmin'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-pblmbl-off-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Real-Time Gross Settlement (RTGS), Bangladesh Electronic Funds Transfer Network (BEFTN), and National Payment Switch Bangladesh (NPSB) in terms of settlement speed, transaction floor/ceiling limits, and use cases.',
            solution: `1. RTGS:
- Speed: Instant real-time gross settlement (within seconds).
- Limit: High-value transactions (Minimum BDT 1,00,000; no upper ceiling). Operates during banking hours for inter-bank corporate and treasury settlements.

2. BEFTN:
- Speed: Batch-based ACH clearing (settled in multiple daily batch cycles).
- Limit: Any amount (ideal for bulk corporate payroll, dividend payouts, EFT credit/debit). Zero or minimal fee.

3. NPSB:
- Speed: Instant 24/7/365 real-time retail switch.
- Limit: Retail inter-bank ATM, POS, and Internet Banking fund transfers (IBFT) up to prescribed per-transaction/daily retail limits.`,
            tags: ['FinTech', 'RTGS', 'BEFTN', 'NPSB', 'Payment Systems'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-pblmbl-off-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-pblmbl-off-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Paperless Banking and Green FinTech Initiatives in Private Commercial Banks" (Word limit: 250 words).',
            solution: `Key Analytical Points:
- Replacing paper account opening forms with biometric e-KYC and digital statements (e-Statements).
- Solar-powered ATM booths and cloud server virtualization to reduce carbon footprint.
- Financing eco-friendly effluent treatment plants (ETP) and renewable energy projects under Bangladesh Bank refinance schemes.`,
            tags: ['Focus Writing', 'English', 'Paperless Banking', 'Green FinTech'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-pblmbl-off-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "ই-কেওয়াইসি প্রযুক্তির মাধ্যমে এখন মাত্র কয়েক মিনিটেই জাতীয় পরিচয়পত্র ও আঙুলের ছাপ যাচাই করে নতুন ব্যাংক হিসাব খোলা সম্ভব হচ্ছে।"',
            solution: `Standard High-Quality Model Translation:
"Through e-KYC technology, it is now possible to open a new bank account in just a few minutes by verifying the National ID card and fingerprints."`,
            tags: ['Translation', 'Bangla to English', 'e-KYC'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 40. Combined Private Commercial Banks Officer (IT) (BRAC, City, Bank Asia, Dhaka Bank)
  {
    id: 'pcb-combined-private-officer-it-2024',
    title: 'Officer (IT), Combined Private Commercial Banks (BRAC, City, Bank Asia, Dhaka Bank)',
    searchQuery: 'Private Bank Officer IT BRAC Bank City Bank Dhaka Bank question solution pdf',
    category: 'Private Bank Officer (IT)',
    jobId: 'PCB-OFF-IT-2024',
    circularYear: '2024',
    examDate: 'August 23, 2024',
    examBody: 'BIBM / Private Bank Assessment Center',
    participatingBanks: ['BRAC Bank PLC', 'The City Bank PLC', 'Bank Asia PLC', 'Dhaka Bank PLC'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Comprehensive Private Commercial Bank Officer (IT) recruitment paper. Covers Python Hash Map frequency algorithms, SQL Date/Time filtering, QuickSort partitioning, CORS & JWT vs Cookie session management, IT Server Analytical Math, and bilingual translation.',
    keyTopics: ['Hash Map Frequency Algorithm', 'QuickSort Partitioning', 'CORS & Session vs JWT', 'SQL Monthly Aggregation', 'Analytical Server Math', 'Cashless Retail Banking'],
    sections: [
      {
        id: 'sec-pcb-off-tech',
        name: 'Technical IT & Analytical Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-pcb-off-1',
            questionNo: '1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python or Java program to find the first non-repeating character in a transaction reference string (e.g. `"SWIFTTXNS"` -> `"W"`) in O(N) time complexity using a Hash Map / Frequency Counter.',
            solution: 'Two-pass hash map count: Pass 1 records character frequencies; Pass 2 returns the first character with count == 1.',
            codeSolution: `from collections import Counter

def first_non_repeating_char(s: str) -> str:
    freq = Counter(s)
    for ch in s:
        if freq[ch] == 1:
            return ch
    return ""

# Test Case
ref = "SWIFTTXNS"
print("First unique character:", first_non_repeating_char(ref))`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Hash Map', 'Strings', 'Python'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-pcb-off-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Explain the Divide-and-Conquer mechanism of QuickSort. Why is QuickSort’s worst-case time complexity O(N^2), when does it occur, and how does Randomized Pivot Selection or Median-of-Three guarantee O(N log N) expected performance?',
            solution: `1. QuickSort Partitioning:
Selects a pivot element and partitions the array in-place so that elements smaller than the pivot move to its left and larger elements move to its right.

2. Worst-Case O(N^2) Scenario:
Occurs when the array is already sorted (or reverse-sorted) and the first or last element is naively chosen as pivot. This produces maximally unbalanced partitions of size \`0\` and \`N-1\`, leading to recurrence \`T(N) = T(N-1) + O(N) = O(N^2)\`.

3. Mitigation:
- Choosing a Random Pivot or the Median-of-Three (median of first, middle, and last elements) ensures balanced splits on average, guaranteeing \`O(N log N)\` time.`,
            tags: ['Algorithms', 'QuickSort', 'Complexity Analysis', 'Sorting'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-pcb-off-3',
            questionNo: '3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: DigitalPayment(PaymentID, CustID, Channel, Amount, Status, CreatedAt). Write an SQL query to generate a channel-wise performance report for the year 2024 showing `Channel` (e.g. QR, NPSB, BEFTN), Total Transactions, Successful Transactions (`Status = "SUCCESS"`), Success Rate Percentage, and Total Successful Volume.',
            solution: 'Use conditional aggregation CASE WHEN Status = "SUCCESS" inside COUNT and SUM.',
            codeSolution: `SELECT 
    Channel,
    COUNT(PaymentID) AS Total_Attempts,
    SUM(CASE WHEN Status = 'SUCCESS' THEN 1 ELSE 0 END) AS Successful_Txns,
    ROUND(
        SUM(CASE WHEN Status = 'SUCCESS' THEN 1 ELSE 0 END) * 100.0 / COUNT(PaymentID),
        2
    ) AS Success_Rate_Pct,
    SUM(CASE WHEN Status = 'SUCCESS' THEN Amount ELSE 0 END) AS Total_Success_Volume
FROM DigitalPayment
WHERE CreatedAt >= '2024-01-01' AND CreatedAt <= '2024-12-31'
GROUP BY Channel
ORDER BY Total_Success_Volume DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Conditional Aggregation', 'CASE WHEN', 'Digital Banking'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-pcb-off-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'What is CORS (Cross-Origin Resource Sharing) in web security? Compare Server-Side Session Cookies (`HttpOnly`, `Secure`, `SameSite=Strict`) vs. Stateless JWT Bearer Tokens for authenticating internet banking web applications.',
            solution: `1. CORS (Cross-Origin Resource Sharing):
Browser security mechanism enforcing the Same-Origin Policy. A bank API server sets \`Access-Control-Allow-Origin: https://ibanking.bank.com\` so malicious third-party websites cannot read authenticated API responses via XHR/Fetch in the victim's browser.

2. HttpOnly Session Cookies vs Stateless JWT:
- HttpOnly + Secure + SameSite=Strict Cookie: Immune to JavaScript XSS token theft (since \`document.cookie\` cannot access \`HttpOnly\` cookies) and protected against CSRF via \`SameSite=Strict\`. Easily revoked on the server via Redis session deletion.
- Stateless JWT in \`localStorage\`: Vulnerable to XSS extraction if any script injection exists on the page, and cannot be easily revoked before expiration without maintaining a server-side blacklist.`,
            tags: ['Web Security', 'CORS', 'HttpOnly Cookies', 'JWT', 'CSRF'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-pcb-off-5',
            questionNo: '5',
            type: 'math',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Quantitative IT Aptitude: Server A can process a nightly batch of 6,00,000 bank transactions in 4 hours, while Server B can process the same batch in 6 hours. (a) If both servers work together in parallel with 100% load balancing efficiency, how many hours and minutes will it take to finish the batch? (b) If Server A stops after 1 hour of joint operation, how much additional time will Server B take alone to complete the remaining transactions?',
            solution: `Step-by-step Analytical Solution:
(a) Parallel Execution Time:
- Server A rate = 1/4 batch per hour (1,50,000 txns/hr).
- Server B rate = 1/6 batch per hour (1,00,000 txns/hr).
- Combined rate = 1/4 + 1/6 = 5/12 batch per hour (2,50,000 txns/hr).
- Total time together = 12 / 5 hours = 2.4 hours = 2 hours and 24 minutes.

(b) Server A stops after 1 hour:
- Work completed in 1st hour together = 5/12 of the batch (2,50,000 txns).
- Remaining work = 1 - 5/12 = 7/12 of the batch (3,50,000 txns).
- Time taken by Server B alone (at 1/6 batch/hr) = (7/12) / (1/6) = 7/2 hours = 3.5 hours (3 hours 30 minutes).`,
            tags: ['Analytical Math', 'Time and Work', 'Batch Processing', 'Bank Aptitude'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-pcb-off-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare WPA2-PSK vs. WPA3-Enterprise (802.1X with RADIUS Server) for corporate Wi-Fi security inside a commercial bank head office.',
            solution: `1. WPA2-PSK (Pre-Shared Key) Weakness:
- All users share a single static Wi-Fi password. Vulnerable to offline dictionary brute-force attacks via 4-way handshake capture (KRACK) and insider password sharing.

2. WPA3-Enterprise (IEEE 802.1X / EAP-TLS):
- Authenticates every employee individually against an Active Directory / RADIUS server using unique user credentials or device certificates.
- Assigns dynamic per-session encryption keys and enforces Forward Secrecy (SAE), ensuring one employee cannot decrypt another colleague's wireless traffic.`,
            tags: ['Networking', 'Wi-Fi Security', 'WPA3', 'RADIUS', '802.1X'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-pcb-off-nontech',
        name: 'Focus Writing & Bilingual Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-pcb-off-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Rise of Banking Super-Apps and Bangla QR in Accelerating Cashless Retail Commerce" (Word limit: 250 words).',
            solution: `Key Analytical Points:
- Interoperable Bangla QR eliminates the need for merchants to display multiple proprietary QR stands on their counters.
- Banking Super-Apps unify CASA accounts, credit cards, DPS/FDR, and MFS transfers under a single biometric login.
- Lowering MDR (Merchant Discount Rate) fees incentivizes small grocery stores, pharmacies, and rickshaw/transport operators to accept digital payments.`,
            tags: ['Focus Writing', 'English', 'Bangla QR', 'Super Apps'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-pcb-off-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "বাংলা কিউআর কোড চালুর ফলে ক্রেতারা যেকোনো ব্যাংকের অ্যাপ বা মোবাইল ওয়ালেট ব্যবহার করে অতি সহজেই দোকানের বিল পরিশোধ করতে পারছেন।"',
            solution: `Standard High-Quality Model Translation:
"With the introduction of Bangla QR code, shoppers can effortlessly pay retail store bills using any bank's application or mobile wallet."`,
            tags: ['Translation', 'Bangla to English', 'Bangla QR'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  }
];
