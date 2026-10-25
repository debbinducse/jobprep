import { ExamPaper } from '../types/exam';

export const seniorOfficerItPapers: ExamPaper[] = [
  // NEW: 2026 Combined 8 Banks Senior Officer (IT)
  {
    id: 'so-it-combined-2026',
    title: 'Senior Officer (IT), Combined 8 Banks & FIs (2026 Written Exam)',
    searchQuery: '2026 Combined Bank Senior Officer IT written question solution pdf BSCS Bangladesh Bank',
    category: 'Senior Officer (IT)',
    jobId: 'BSCS-SO-2026',
    circularYear: '2026 (Combined 8 Banks)',
    examDate: 'September 18, 2026',
    examBody: 'Bankers Selection Committee Secretariat (BSCS) / Bangladesh Bank',
    participatingBanks: [
      'Sonali Bank PLC',
      'Janata Bank PLC',
      'Agrani Bank PLC',
      'Rupali Bank PLC',
      'Bangladesh Development Bank PLC (BDBL)',
      'Bangladesh Krishi Bank (BKB)',
      'Probashi Kallyan Bank (PKB)',
      'Investment Corporation of Bangladesh (ICB)'
    ],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Complete 2026 BSCS Combined 8 Banks Senior Officer (IT) 200-mark written examination paper. Covers Software Testing & Test Case Design (4-Digit Mobile Banking PIN Boundary Value Analysis), AML/KYC High-Velocity Transaction SQL Queries, API Rate Limiting Algorithms, VLSM Data Center Subnetting, Linux Production Hardening, ISO 20022/RTGS Architecture, AI in Banking Operations Focus Writing, and E-Governance Digitization.',
    keyTopics: [
      'Software Testing & 4-Digit PIN Test Cases',
      'AML/KYC Structuring SQL Query',
      'Sliding Window API Rate Limiter',
      'VLSM Core Banking Subnetting',
      'AI in Banking vs Security & Ethics',
      'E-Governance in Financial Sector'
    ],
    sections: [
      {
        id: 'sec-so2026-tech',
        name: 'Part A: Core IT & Computer Science (140 Marks)',
        marks: 140,
        description: 'Software Engineering & Testing, DBMS & SQL, Algorithms, Networking & Security, Operating Systems, and Banking System Architecture',
        questions: [
          {
            id: 'q-so2026-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'A commercial bank is launching a new Mobile Banking App that requires a 4-digit numeric PIN for transaction authentication. (a) Using Equivalence Partitioning (EP) and Boundary Value Analysis (BVA), design a formal Test Case Suite for validating the 4-digit PIN input field. (b) Differentiate between Functional Testing and Security Testing for this PIN module, listing at least 4 critical security test scenarios.',
            solution: `1. Equivalence Partitioning (EP) & Boundary Value Analysis (BVA) for 4-Digit Numeric PIN:
Valid Domain: Exactly 4 numeric digits (0000 to 9999), excluding sequential/repetitive weak PINs if policy prohibits.
- Equivalence Classes:
  * EC1 (Valid): 4-digit numeric string (e.g., "4829", "0150").
  * EC2 (Invalid - Length < 4): 0, 1, 2, or 3 digits (e.g., "", "7", "42", "918").
  * EC3 (Invalid - Length > 4): 5 or more digits (e.g., "12345", "987654").
  * EC4 (Invalid - Non-numeric): Alphabetic, special characters, or spaces (e.g., "12a4", "45#1", "12 4").

- Boundary Value Analysis (BVA) Test Cases:
  * TC-01 (Empty input, Length = 0): Input = "" -> Expected: Reject ("PIN is required").
  * TC-02 (Just below lower length boundary, Length = 3): Input = "123" -> Expected: Reject ("PIN must be exactly 4 digits").
  * TC-03 (Minimum valid value, Length = 4): Input = "0000" (or "0001" if 4 identical digits blocked) -> Expected: Accept (or policy warning).
  * TC-04 (Nominal valid value, Length = 4): Input = "5839" -> Expected: Accept & proceed to OTP/Token check.
  * TC-05 (Maximum valid value, Length = 4): Input = "9999" -> Expected: Accept.
  * TC-06 (Just above upper length boundary, Length = 5): Input = "12345" -> Expected: UI blocks 5th digit or API rejects payload.

2. Functional Testing vs. Security Testing:
- Functional Testing verifies that the PIN module behaves according to business specifications (e.g., accepts valid 4-digit PINs, rejects 3-digit PINs, displays proper error messages).
- Security Testing probes for vulnerabilities, bypasses, and cryptographic weaknesses under adversarial conditions:
  * Sec-TC1 (Brute-Force & Account Lockout): Verify that after 3 or 5 consecutive wrong PIN attempts, the account is temporarily locked for 30 minutes and alerts the user via SMS.
  * Sec-TC2 (Transmission Encryption & Replay Protection): Verify that the PIN is never sent in cleartext in HTTP/JSON body; it must be encrypted (ISO 9564 PIN Block / TLS 1.3 + dynamic nonce) to prevent MITM replay attacks.
  * Sec-TC3 (Injection & Payload Tampering): Intercept the API request via proxy (e.g., Burp Suite) and inject SQL/NoSQL payloads (\`"pin": "1234' OR '1'='1"\`) to ensure server-side strict regex validation \`^[0-9]{4}$\`.
  * Sec-TC4 (Local Storage & Memory Leakage): Verify the PIN is never cached in Android/iOS SharedPreferences, Keychain cleartext, or system logs.`,
            tags: ['Software Testing', 'BVA', 'Equivalence Partitioning', 'Test Cases', 'Mobile Banking Security', '2026 Exam'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2026-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider a Core Banking AML (Anti-Money Laundering) monitoring schema:\nAccounts(AccountID, CustomerID, BranchCode, KYC_Status, OpenDate)\nTransactions(TxnID, AccountID, TxnTimestamp, TxnChannel, TxnType, Amount_BDT)\nWrite an SQL query to flag suspicious "Structuring / Smurfing" accounts where: (i) KYC_Status is NOT "VERIFIED", OR (ii) the account has executed 4 or more cash deposit ("CASH_DEP") transactions on the same calendar day where each individual transaction is between BDT 4,50,000 and BDT 4,99,999 (just below the BDT 5,00,000 BFIU reporting threshold) and the daily cumulative deposit exceeds BDT 18,00,000.',
            solution: 'We aggregate daily cash deposits per account within the BDT 4,50,000–4,99,999 structuring band using DATE(TxnTimestamp), GROUP BY AccountID and transaction date, and filter with HAVING COUNT(*) >= 4 AND SUM(Amount_BDT) > 1800000, combined with unverified KYC status.',
            codeSolution: `-- 2026 Combined Bank SO (IT) - AML Structuring Detection SQL Query
WITH DailyStructuring AS (
    SELECT 
        t.AccountID,
        CAST(t.TxnTimestamp AS DATE) AS TxnDate,
        COUNT(t.TxnID) AS Structuring_Txn_Count,
        SUM(t.Amount_BDT) AS Daily_Structured_Total
    FROM Transactions t
    WHERE t.TxnType = 'CASH_DEP'
      AND t.Amount_BDT BETWEEN 450000 AND 499999
    GROUP BY t.AccountID, CAST(t.TxnTimestamp AS DATE)
    HAVING COUNT(t.TxnID) >= 4
       AND SUM(t.Amount_BDT) > 1800000
)
SELECT 
    a.AccountID,
    a.CustomerID,
    a.BranchCode,
    a.KYC_Status,
    ds.TxnDate,
    COALESCE(ds.Structuring_Txn_Count, 0) AS Suspicious_Deposit_Count,
    COALESCE(ds.Daily_Structured_Total, 0) AS Total_Structured_BDT
FROM Accounts a
LEFT JOIN DailyStructuring ds ON a.AccountID = ds.AccountID
WHERE ds.AccountID IS NOT NULL
   OR a.KYC_Status <> 'VERIFIED'
ORDER BY Total_Structured_BDT DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'AML', 'KYC', 'Banking Compliance', 'GROUP BY', 'CTE', '2026 Exam'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2026-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'To protect a Bank Open-Banking API Gateway from DDoS and credential-stuffing attacks, write a program in Python or Java to implement a Per-Client Sliding Window Rate Limiter that allows at most N requests per client IP within any T-second rolling time window. Analyze its time and space complexity.',
            solution: 'Using a Deque (Double-Ended Queue) mapped to each client ID/IP allows O(1) amortized time per request by evicting expired timestamps from the front of the queue before checking the current window count.',
            codeSolution: `from collections import defaultdict, deque
import time

class SlidingWindowRateLimiter:
    """
    Per-Client Sliding Window Rate Limiter for Banking API Gateway.
    Allows at most max_requests within window_seconds.
    Time Complexity: O(1) amortized per request
    Space Complexity: O(U * max_requests) where U is active unique clients
    """
    def __init__(self, max_requests: int, window_seconds: int):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.client_logs: dict[str, deque[float]] = defaultdict(deque)

    def allow_request(self, client_ip: str, current_time: float | None = None) -> bool:
        now = current_time if current_time is not None else time.time()
        q = self.client_logs[client_ip]
        
        # Evict timestamps older than (now - window_seconds)
        window_start = now - self.window_seconds
        while q and q[0] <= window_start:
            q.popleft()
            
        if len(q) < self.max_requests:
            q.append(now)
            return True
        return False

# Demonstration: Allow max 3 PIN verification calls per 60 seconds
limiter = SlidingWindowRateLimiter(max_requests=3, window_seconds=60)
client = "103.48.16.22"
for attempt in range(1, 5):
    allowed = limiter.allow_request(client, current_time=1000.0 + attempt)
    print(f"Attempt {attempt}: {'ALLOWED (200 OK)' if allowed else 'BLOCKED (429 Too Many Requests)'}")`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Rate Limiter', 'Queue', 'Deque', 'API Gateway', '2026 Exam'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2026-4',
            questionNo: '4',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'A bank head office is allocated the private CIDR block 10.40.16.0/22. Using Variable Length Subnet Masking (VLSM), design an optimal IP addressing plan for the following 4 segments:\n(i) Core Operations & Branch VPN Concentrator: 480 hosts\n(ii) Software Development & QA Lab: 220 hosts\n(iii) Production Database & CBS Cluster: 55 hosts\n(iv) SWIFT Alliance Gateway Enclave: 12 hosts\nFor each subnet, specify the Subnet Mask (CIDR & Dotted Decimal), Network ID, Usable Host IP Range, and Broadcast Address.',
            solution: `VLSM Step-by-Step Allocation (Ordered from largest to smallest host requirement):
Base Block: 10.40.16.0/22 (Range: 10.40.16.0 to 10.40.19.255, Total = 1024 IPs).

1. Segment (i) Core Operations & Branch VPN (Needs 480 hosts):
- Host bits: 2^9 - 2 = 510 usable hosts >= 480.
- Prefix: 32 - 9 = /23 (Subnet Mask: 255.255.254.0, Block size: 2 in 3rd octet).
- Network ID: 10.40.16.0/23
- Usable Range: 10.40.16.1 — 10.40.17.254
- Broadcast IP: 10.40.17.255

2. Segment (ii) Software Development & QA Lab (Needs 220 hosts):
- Next available IP: 10.40.18.0
- Host bits: 2^8 - 2 = 254 usable hosts >= 220.
- Prefix: 32 - 8 = /24 (Subnet Mask: 255.255.255.0).
- Network ID: 10.40.18.0/24
- Usable Range: 10.40.18.1 — 10.40.18.254
- Broadcast IP: 10.40.18.255

3. Segment (iii) Production Database & CBS Cluster (Needs 55 hosts):
- Next available IP: 10.40.19.0
- Host bits: 2^6 - 2 = 62 usable hosts >= 55.
- Prefix: 32 - 6 = /26 (Subnet Mask: 255.255.255.192, Block size: 64).
- Network ID: 10.40.19.0/26
- Usable Range: 10.40.19.1 — 10.40.19.62
- Broadcast IP: 10.40.19.63

4. Segment (iv) SWIFT Alliance Gateway Enclave (Needs 12 hosts):
- Next available IP: 10.40.19.64
- Host bits: 2^4 - 2 = 14 usable hosts >= 12.
- Prefix: 32 - 4 = /28 (Subnet Mask: 255.255.255.240, Block size: 16).
- Network ID: 10.40.19.64/28
- Usable Range: 10.40.19.65 — 10.40.19.78
- Broadcast IP: 10.40.19.79`,
            tags: ['Networking', 'VLSM', 'Subnetting', 'CIDR', 'SWIFT Security', '2026 Exam'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2026-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'In a Red Hat Enterprise Linux (RHEL) Core Banking application server: (a) Write shell commands to create a service account `cbsapp` without interactive shell login, assign ownership of `/opt/cbs/config.env` to `cbsapp:cbsgroup`, and restrict permissions so only `cbsapp` can read/write and group members can only read. (b) Explain the 4 Coffman conditions for Deadlock and how database engines break Circular Wait.',
            solution: `(a) Linux Production Hardening Commands:
1. Create group and non-interactive service user:
   \`groupadd cbsgroup\`
   \`useradd -r -g cbsgroup -s /sbin/nologin cbsapp\`
2. Set ownership to user \`cbsapp\` and group \`cbsgroup\`:
   \`chown cbsapp:cbsgroup /opt/cbs/config.env\`
3. Set octal permission 640 (User: rw-, Group: r--, Others: ---):
   \`chmod 640 /opt/cbs/config.env\`

(b) Four Necessary Coffman Conditions for Deadlock:
1. Mutual Exclusion: At least one resource is held in a non-shareable mode (e.g. Exclusive row lock).
2. Hold and Wait: A process holding at least one resource requests additional resources held by other processes.
3. No Preemption: Resources cannot be forcibly taken away without aborting the transaction.
4. Circular Wait: A closed chain of processes exists (T1 waits for T2, T2 waits for T3, T3 waits for T1).

How Database Engines Break Circular Wait & Handle Deadlocks:
- Lock Ordering Convention: Requiring application transactions to acquire table/row locks in a strict ascending primary-key order prevents Circular Wait completely.
- Wait-For Graph (WFG) & Victim Selection: RDBMS engines periodically build a directed Wait-For Graph. If a cycle is detected, the deadlock detector selects the transaction with the lowest undo cost (fewest modified rows) as the deadlock victim, rolls it back (breaking No Preemption), and releases its locks.`,
            codeSolution: `# RHEL / Ubuntu Production Hardening Script for Core Banking Config
sudo groupadd -f cbsgroup
sudo useradd -r -g cbsgroup -s /usr/sbin/nologin -M cbsapp

# Assign ownership and strict 0640 permissions
sudo chown cbsapp:cbsgroup /opt/cbs/config.env
sudo chmod 0640 /opt/cbs/config.env

# Verify permissions (-rw-r----- 1 cbsapp cbsgroup)
ls -la /opt/cbs/config.env`,
            solutionLanguage: 'bash',
            tags: ['Linux', 'Operating Systems', 'chmod', 'Deadlock', 'Server Hardening', '2026 Exam'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2026-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'E-Governance & ICT Laws',
            questionText: 'Compare the architectural workflow of Bangladesh Bank RTGS (Real-Time Gross Settlement), BEFTN (Bangladesh Electronic Funds Transfer Network), and NPSB (National Payment Switch Bangladesh). Why is Bangladesh migrating financial messaging from ISO 8583 / legacy MT messages to ISO 20022 XML?',
            solution: `1. Comparison of National Payment Systems:
- RTGS (Real-Time Gross Settlement):
  * Settles high-value (BDT 1,00,000+) and time-critical interbank transactions individually on a gross basis in real time (instant finality) across central bank settlement accounts.
- BEFTN (Bangladesh Electronic Funds Transfer Network):
  * Operates on a deferred multilateral net settlement batch cycle (multiple clearing windows daily). Ideal for bulk salary disbursements, utility bills, G2P EFTs, and dividend payouts.
- NPSB (National Payment Switch Bangladesh):
  * Real-time retail payment switch interconnecting ATM, POS, Internet Banking Fund Transfer (IBFT), and MFS interoperability on a 24/7/365 basis.

2. Why Migrate to ISO 20022 XML Standard:
- Richer Structured Data: Legacy SWIFT MT and ISO 8583 messages have strict field-length truncations. ISO 20022 uses extensible XML/JSON schemas carrying complete originator, beneficiary, purpose code, and remittance invoice details.
- Enhanced AML/CFT & Sanctions Screening: Complete structured party data drastically reduces false positives in automated sanctions and Anti-Money Laundering (AML) screening.
- End-to-End Interoperability: Harmonizes domestic RTGS, cross-border SWIFT CBPR+, and corporate ERP treasuries under a single universal financial messaging dictionary.`,
            tags: ['RTGS', 'BEFTN', 'NPSB', 'ISO 20022', 'Bangladesh Bank', '2026 Exam'],
            marks: 20,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-so2026-nontech',
        name: 'Part B: Focus Writing, Translation & Analytical Ability (60 Marks)',
        marks: 60,
        description: 'English Focus Writing on AI in Banking, Bangla Focus Writing on E-Governance, and Bilingual Technical Translation',
        questions: [
          {
            id: 'q-so2026-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English (300 Words): "Applications of Artificial Intelligence (AI) in Banking Operations: Efficiency Gains versus Security Risks, Data Privacy (AML/KYC), and Ethical Challenges."',
            solution: `Model Essay Structure (2026 BSCS Senior Officer IT Standard):

1. Introduction:
Artificial Intelligence (AI) and Machine Learning (ML) are transforming modern banking from reactive ledger management into predictive, hyper-personalized financial ecosystems. In Bangladesh, commercial and state-owned banks are increasingly adopting AI for credit scoring, automated e-KYC verification, and real-time fraud detection. However, balancing operational efficiency against cyber risks, data privacy, and algorithmic ethics is paramount.

2. Operational Efficiency Gains:
- Real-Time Anomaly & Fraud Detection: ML models analyze millions of card and MFS transactions in milliseconds, flagging anomalous behavioral patterns far faster than static rule engines.
- Automated Credit Underwriting: AI evaluates alternative credit data (cash-flow velocity, utility history) to extend SME and agricultural loans to unbanked populations.
- RegTech & AML/KYC Automation: Optical Character Recognition (OCR) and biometric liveness checks streamline e-KYC onboarding while reducing manual compliance backlogs.

3. Security Risks, Data Privacy & Ethical Challenges:
- Algorithmic Bias & Opaque Decisions ("Black-Box" Problem): Deep learning credit models can inadvertently discriminate against rural or minority borrowers if trained on skewed historical datasets. Explainable AI (XAI) is essential for regulatory auditability.
- Data Privacy & Sovereign Compliance: Training AI models on sensitive customer financial records risks violating banking secrecy and Bangladesh Bank data-localization mandates if external cloud APIs are used.
- Adversarial AI & Deepfake Fraud: Cybercriminals now deploy deepfake voice/video synthesis to bypass biometric e-KYC and conduct sophisticated social engineering.

4. Conclusion:
To harness AI responsibly, banks in Bangladesh must institutionalize AI Governance Frameworks, enforce strict on-premise data anonymization, mandate human-in-the-loop oversight for credit decisions, and align with Bangladesh Bank’s ICT Security Guidelines.`,
            tags: ['Focus Writing', 'AI in Banking', 'AML', 'KYC', 'Data Privacy', '2026 Exam'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2026-8',
            questionNo: '8',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'বাংলা ফোকাস রাইটিং (২৫০ শব্দ): "বাংলাদেশের আর্থিক খাতে ই-গভর্ন্যান্স ও ডিজিটালাইজেশনের প্রভাব এবং তথ্য ও উপাত্তের গোপনীয়তা রক্ষার গুরুত্ব।"',
            solution: `প্রমিত মডেল উত্তর কাঠামো:

১. ভূমিকা:
আধুনিক অর্থনীতির মূল চালিকাশক্তি হলো প্রযুক্তিনির্ভর, স্বচ্ছ ও অন্তর্ভুক্তিমূলক ব্যাংকিং ব্যবস্থা। বাংলাদেশে ই-গভর্ন্যান্স ও আর্থিক খাতের ডিজিটালাইজেশন সরকারি সেবা বিতরণ, রাজস্ব আদায় এবং ব্যাংকিং লেনদেনে যুগান্তকারী গতিশীলতা এনেছে।

২. আর্থিক খাতে ই-গভর্ন্যান্স ও ডিজিটালাইজেশনের ইতিবাচক প্রভাব:
- সরকারি ভাতা ও প্রণোদনা বিতরণ (G2P): বয়স্ক ভাতা, উপবৃত্তি ও কৃষি ভর্তুকি ইএফটি (BEFTN) এবং মোবাইল ফাইন্যান্সিয়াল সার্ভিসের (MFS) মাধ্যমে সরাসরি উপকারভোগীর অ্যাকাউন্টে পৌঁছানোয় মধ্যস্বত্বভোগীদের দৌরাত্ম্য ও দুর্নীতি হ্রাস পেয়েছে।
- স্বয়ংক্রিয় চালান (A-Chalan) ও ই-পেমেন্ট: পাসপোর্ট ফি, কর ও শুল্ক অনলাইনে তাৎক্ষণিকভাবে সরকারি কোষাগারে জমা হচ্ছে।
- আন্তঃব্যাংক লেনদেন: আরটিজিএস (RTGS), এনপিএসবি (NPSB) এবং বাংলা কিউআর (Bangla QR) ক্যাশলেস অর্থনীতির ভিত্তি সুদৃঢ় করেছে।

৩. তথ্য ও উপাত্তের গোপনীয়তা (Data Privacy) ও পরিপালন (AML/KYC):
ডিজিটাল লেনদেনের বিস্তারের সাথে সাথে গ্রাহকের ব্যক্তিগত ও আর্থিক তথ্যের সুরক্ষা নিশ্চিত করা সবচেয়ে বড় চ্যালেঞ্জ। শক্তিশালী এনক্রিপশন, মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA), এবং মানিলন্ডারিং প্রতিরোধ (AML) ও ই-কেওয়াইসি (e-KYC) নীতিমালার কঠোর পরিপালন ছাড়া ব্যাংকিং খাতে জনআস্থা ও স্থিতিশীলতা বজায় রাখা সম্ভব নয়।

৪. উপসংহার:
সাইবার নিরাপত্তা অবকাঠামোর আধুনিকায়ন, দক্ষ আইটি জনবল গড়ে তোলা এবং কঠোর আইনি পরিপালনের মাধ্যমেই একটি নিরাপদ ও টেকসই ডিজিটাল আর্থিক ব্যবস্থা নিশ্চিত করা সম্ভব।`,
            tags: ['Focus Writing', 'E-Governance', 'Bangla Essay', 'Digitization', '2026 Exam'],
            marks: 20,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2026-9',
            questionNo: '9',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into Bangla: "Data privacy and strict regulatory compliance, including Anti-Money Laundering (AML) and Know Your Customer (KYC) protocols, form the bedrock of modern banking stability. When financial institutions fail to safeguard sensitive customer records, they face not only severe regulatory penalties but also an irreversible erosion of public trust."',
            solution: `প্রমিত প্রাতিষ্ঠানিক বাংলা অনুবাদ:
"মানিলন্ডারিং প্রতিরোধ (এএমএল) এবং গ্রাহক পরিচিতি যাচাই (কেওয়াইসি) প্রোটোকলসহ তথ্যের গোপনীয়তা ও কঠোর নিয়ন্ত্রক নীতিমালার পরিপালন আধুনিক ব্যাংকিং স্থিতিশীলতার মূল ভিত্তি গঠন করে। যখন আর্থিক প্রতিষ্ঠানগুলো গ্রাহকদের সংবেদনশীল তথ্যের সুরক্ষা দিতে ব্যর্থ হয়, তখন তারা কেবল কঠোর নিয়ন্ত্রক জরিমানারই সম্মুখীন হয় না, বরং জনআস্থারও অপূরণীয় ক্ষতি ডেকে আনে।"`,
            tags: ['Translation', 'English to Bangla', 'AML', 'KYC', '2026 Exam'],
            marks: 15,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 9. Job ID: 10225 (Exam 2026)
  {
    id: 'so-it-10225',
    title: 'SO (IT), Combined Bank (Job ID: 10225) — 2026 Exam',
    searchQuery: 'SO (IT), Combined Bank (Job ID: 10225) 2026 2023 question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: '10225',
    circularYear: '2026 (Circular 2023)',
    examDate: 'March 15, 2026',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC', 'BDBL', 'PKB'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Senior Officer (IT) Grade 9 written examination conducted by BIBM. Emphasizes distributed transaction processing (2PC), OSPF routing with Dijkstra SPF, concurrency control, query execution plans, and central banking cyber posture.',
    keyTopics: ['Distributed Transactions (2PC)', 'OSPF Dijkstra Algorithm', 'ACID in Distributed Databases', 'Cyber Resilience in Central Banking', 'Query Execution Plan', 'Concurrency Control'],
    sections: [
      {
        id: 'sec-10225-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-10225-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain the Two-Phase Commit (2PC) protocol used in distributed Core Banking systems. How does it guarantee Atomicity across multiple distributed bank branch databases? What is the Coordinator Failure blocking problem and how does 3PC address it?',
            solution: `1. Two-Phase Commit (2PC) Protocol:
The 2PC protocol is a distributed consensus algorithm that ensures an atomic transaction executes across multiple nodes (participants) coordinated by a master node (coordinator).

- Phase 1: Prepare (Voting) Phase:
  * Coordinator writes "Prepare" to its log and broadcasts a PREPARE message to all participants.
  * Each participant executes transaction actions locally, writes undo/redo logs, and checks constraints.
  * If successful, participant responds with "VOTE_COMMIT" and enters a ready state; if failed, responds with "VOTE_ABORT".

- Phase 2: Commit (Decision) Phase:
  * If ALL participants voted "VOTE_COMMIT", coordinator logs "Global Commit" and broadcasts COMMIT message to all nodes.
  * If ANY participant voted "VOTE_ABORT" (or timeout expired), coordinator logs "Global Abort" and sends ROLLBACK message.
  * Participants commit/rollback, release locks, and send acknowledgment (ACK) to the coordinator.

2. Coordinator Failure & Blocking:
In 2PC, if the coordinator crashes after participants vote "VOTE_COMMIT" but before broadcasting the decision, participants are left blocked indefinitely holding database locks because they cannot independently decide whether to commit or abort.

3. How 3PC (Three-Phase Commit) Addresses It:
3PC adds an intermediate "Pre-Commit" phase:
1. Can-Commit (Query)
2. Pre-Commit (Coordinator confirms everyone can commit, prepares to commit)
3. Do-Commit (Final commit).
By separating the decision to commit from the actual commit action, 3PC removes blocking under fail-stop coordinator failure assumptions, allowing participants to reach timeout decisions.`,
            tags: ['Distributed Systems', '2PC', 'Core Banking', 'DBMS Concurrency'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-10225-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a program in Python or Java to implement Dijkstra’s Single Source Shortest Path algorithm on a weighted graph represented as an adjacency matrix or adjacency list. Explain how this algorithm is utilized in the Open Shortest Path First (OSPF) routing protocol in inter-branch banking networks.',
            solution: 'Dijkstra implementation using min-heap priority queue with O((V + E) log V) time complexity.',
            codeSolution: `import heapq

def dijkstra(graph: dict[str, list[tuple[str, int]]], start_node: str):
    """
    Dijkstra Shortest Path algorithm using a min-heap priority queue.
    graph format: {'NodeA': [('NodeB', weight), ('NodeC', weight)]}
    """
    distances = {node: float('inf') for node in graph}
    distances[start_node] = 0
    
    pq = [(0, start_node)]
    predecessors = {node: None for node in graph}
    
    while pq:
        curr_dist, u = heapq.heappop(pq)
        
        if curr_dist > distances[u]:
            continue
            
        for neighbor, weight in graph[u]:
            distance = curr_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                predecessors[neighbor] = u
                heapq.heappush(pq, (distance, neighbor))
                
    return distances, predecessors

# Application in OSPF:
# OSPF routers build a Link State Database (LSDB) representing the entire
# bank WAN topology. Each router runs Dijkstra's algorithm with itself as
# root to compute the lowest-cost Shortest Path First (SPF) tree to all subnets.`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Dijkstra', 'Graph', 'OSPF', 'Networking'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-10225-3b',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain SQL Query Optimization and Query Execution Plans. Differentiate between Index Scan, Index Seek, and Full Table Scan. Why does a query like `SELECT * FROM Txn WHERE YEAR(TxnDate) = 2024` prevent index utilization (SARGability)?',
            solution: `1. Query Execution Plan:
The roadmap generated by the DBMS Query Optimizer specifying the exact sequence of low-level algorithms (hash join, nested loop, index seek) to execute an SQL statement.

2. Access Mechanisms:
- Full Table Scan: Reads every block of the table sequentially from disk. Efficient for very small tables or queries fetching >20% of rows, but disastrously slow for large tables.
- Index Seek: Traverses the B+ Tree from root to leaf to locate specific qualifying keys in O(log N) time. Highly efficient.
- Index Scan: Scans leaf pages of an index in order. Faster than a full table scan when retrieving indexed columns.

3. SARGability (Search Argument Able):
Wrapping an indexed column inside a function (e.g. YEAR(TxnDate) = 2024) violates SARGability. The database engine must evaluate the function on EVERY row of the table, forcing a costly Full Table Scan!
Refactored SARGable query:
\`WHERE TxnDate >= '2024-01-01' AND TxnDate < '2025-01-01'\`
This allows the optimizer to perform an instant Index Seek range scan.`,
            tags: ['DBMS', 'Query Optimization', 'Indexing', 'SARGability'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain Concurrency Control in DBMS. Differentiate between Two-Phase Locking (2PL), Strict 2PL, and Rigorous 2PL. How does Timestamp-Ordering (Thomas Write Rule) avoid cascading rollbacks?',
            solution: `1. Two-Phase Locking (2PL) Variants:
- Basic 2PL: Consists of Growing Phase (locks acquired, none released) and Shrinking Phase (locks released, none acquired). Guarantees Serializability, but can suffer from Cascading Aborts and Deadlocks.
- Strict 2PL: All Exclusive (X) locks held by a transaction must be retained until the transaction COMMITS or ABORTS. Prevents Dirty Reads and eliminates Cascading Aborts!
- Rigorous 2PL: ALL locks (both Shared S-locks and Exclusive X-locks) must be held until the transaction finishes. Enforces strict serializable order matching commit order.

2. Thomas Write Rule in Timestamp Ordering:
If Transaction T with timestamp TS(T) attempts to write to data item Q, and TS(T) < W-timestamp(Q):
- Traditional timestamp protocol rejects the write and aborts T.
- Thomas Write Rule recognizes that a younger transaction has already overwritten Q with a newer value. T's outdated write can simply be IGNORED without aborting T! This enhances concurrency while maintaining view-serializability.`,
            tags: ['DBMS', 'Concurrency Control', '2PL', 'Timestamp Ordering'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-10225-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Describe Next-Generation Firewalls (NGFW) vs. Traditional Stateful Packet Inspection Firewalls. How is a Demilitarized Zone (DMZ) implemented in commercial bank data centers to isolate public web servers from core banking databases?',
            solution: `1. Traditional Stateful vs. NGFW:
- Traditional Stateful Firewalls: Inspect Layer 3 (IP) and Layer 4 (TCP/UDP port) headers and track connection states (SYN, ESTABLISHED). Blind to application payloads (e.g. cannot tell if port 80 traffic is legitimate HTTP or malicious tunneling).
- NGFW (Next-Generation Firewall): Inspects traffic up to Layer 7 (Application Layer). Integrates Deep Packet Inspection (DPI), Intrusion Prevention System (IPS), SSL/TLS decryption and inspection, Application Awareness, and Threat Intelligence feeds.

2. DMZ Architecture in Banking:
- Architecture: A perimeter subnetwork situated between the untrusted public Internet and the trusted internal Core Banking Network.
- Dual-Firewall Setup:
  * External Firewall: Allows public internet traffic (Port 443) only into the DMZ where public web servers, mobile API gateways, and DNS servers reside.
  * Internal Firewall: Strictly blocks all direct public access to internal networks. Permits only designated connections from DMZ application servers to internal Core Banking database servers on dedicated database ports (e.g. 1521 for Oracle) with strict IP whitelisting.
- Security Benefit: If a web server in the DMZ is compromised, the attacker cannot pivot directly into the financial ledger databases.`,
            tags: ['Networking', 'Firewalls', 'NGFW', 'DMZ', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-6',
            questionNo: '6',
            type: 'short_note',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Write short notes on: (a) Saga Pattern for distributed microservices transactions. (b) Elliptic Curve Cryptography (ECC) vs. RSA. (c) Disaster Recovery Tier Levels (Tier 1 to Tier 4).',
            solution: `(a) Saga Pattern:
A design pattern for managing distributed transactions in microservices without locking resources across nodes. It executes a sequence of local transactions, where each updates its own database. If one step fails, the Saga executes compensating transactions in reverse order to undo changes (e.g. reversing a debit).

(b) ECC vs RSA:
- ECC (Elliptic Curve Cryptography) provides equivalent cryptographic strength to RSA with significantly smaller key sizes (e.g., 256-bit ECC key equals 3072-bit RSA key).
- ECC offers faster computation, lower memory usage, and reduced network bandwidth, making it ideal for mobile banking apps and smartcards.

(c) Disaster Recovery Tiers:
- Tier 1: Basic site with periodic physical tape backups shipped offsite (Days of RTO).
- Tier 2: Hot standby hardware with periodic electronic vaulting (24-48 hours RTO).
- Tier 3: Active-Passive synchronized data replication (Hours of RTO).
- Tier 4: Active-Active dual data center cluster with zero data loss (RPO = 0) and instantaneous automated failover (RTO near zero). Required for central bank clearing systems.`,
            tags: ['Saga Pattern', 'ECC', 'Disaster Recovery', 'System Design'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-10225-nontech',
        name: 'Focus Writing & English (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-10225-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing: "Strengthening Cybersecurity against Advanced Persistent Threats (APTs) in Bangladesh Financial Systems" (Word limit: 300 words).',
            solution: `Key Structure & Analytical Breakdown:
1. Threat Landscape:
Modern cyber threats targeting financial infrastructure have evolved from opportunistic malware to nation-state backed Advanced Persistent Threats (APTs). The 2016 Bangladesh Bank cyber heist remains a stark reminder that state-sponsored actors exploit perimeter weaknesses, SWIFT interfaces, and social engineering to maintain prolonged undetected access.

2. Critical Vulnerability Vectors:
- Unsegmented Networks: Direct lateral movement between general office workstations and high-security payment switch networks.
- Inadequate Privileged Access Management (PAM): Shared administrative credentials without session recording or just-in-time elevation.
- Third-Party Vendor Risks: Integration of unverified software libraries and unhardened maintenance channels.

3. Defense Architecture:
- Micro-Segmentation: Isolating critical transaction clusters (SWIFT, RTGS, NPSB) into isolated security zones protected by Next-Generation Firewalls (NGFW).
- Zero Trust Privileged Access: Enforcing hardware-bound MFA (FIDO2 keys) and strict RBAC.
- Continuous Threat Hunting: Deploying Endpoint Detection and Response (EDR) agents and behavioral anomaly analysis powered by Machine Learning.
- Red Teaming & Disaster Drills: Regular simulated breach scenarios to validate Security Operations Center (SOC) mean time to detect (MTTD) and mean time to respond (MTTR).

4. Conclusion:
Cybersecurity is an indispensable prerequisite for macroeconomic stability. Institutionalizing military-grade vigilance, robust compliance with ISO 27001, and real-time threat intelligence sharing will protect Bangladesh's national financial sovereignty.`,
            tags: ['Focus Writing', 'English', 'Cybersecurity', 'APT', 'Banking'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-10225-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "আর্থিক প্রতিষ্ঠানে সাইবার আক্রমণ প্রতিহত করতে হলে প্রতিটি স্তরে কঠোর নজরদারি এবং নিয়মিত নিরাপত্তা নিরীক্ষা নিশ্চিত করা প্রয়োজন। কর্মকর্তাদের ব্যক্তিগত সচেতনতা এবং আধুনিক প্রযুক্তি ব্যবহারের সমন্বয়ই পারে একটি সুরক্ষিত ব্যাংকিং পরিবেশ গড়ে তুলতে।"',
            solution: `Standard High-Quality Model Translation:
"To thwart cyber attacks in financial institutions, ensuring rigorous surveillance and periodic security audits at every layer is indispensable. Only the harmonization of employees' individual awareness and the deployment of advanced technology can foster a secure banking environment."`,
            tags: ['Translation', 'Bangla to English', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 10. Job ID: 25104 (2026 Exam)
  {
    id: 'so-it-25104',
    title: 'SO (IT), Combined Bank (Job ID: 25104) — 2026 Exam',
    searchQuery: 'SO (IT), Combined Bank (Job ID: 25104) 2026 2024 question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: '25104',
    circularYear: '2026 (Exam: July 25, 2026)',
    examDate: 'July 25, 2026',
    examBody: 'Bankers Selection Committee (BSCS)',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The 79-vacancy recruitment examination for Senior Officer (IT) held on July 25, 2026. Contains high-level questions on database sharding vs partitioning, cloud-native containerization, Dynamic Programming, and Central Bank Digital Currency (CBDC).',
    keyTopics: ['Database Sharding vs Partitioning', 'Docker & Kubernetes in Banking', 'Dynamic Programming 0/1 Knapsack', 'SQL Complex Analytical Queries', 'Bangla Focus Writing'],
    sections: [
      {
        id: 'sec-25104-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-25104-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Differentiate between Horizontal Partitioning, Vertical Partitioning, and Database Sharding. When a Core Banking database handles 100 million customer accounts, which partitioning strategy should be selected and what are the challenges regarding cross-shard queries?',
            solution: `1. Architectural Comparison:
- Horizontal Partitioning: Splits rows of a single table across multiple partitions within the SAME database instance based on a partition key (e.g., date ranges or branch codes).
- Vertical Partitioning: Splits columns of a table into separate tables (e.g., separating frequently accessed Account Balance from infrequently accessed KYC Documents), reducing I/O bandwidth.
- Database Sharding: A horizontal partitioning architecture where partitions (shards) reside on physically separate database servers across different network nodes, each with independent CPU, RAM, and storage (Share-Nothing Architecture).

2. Strategy for 100M Core Banking Accounts:
- Recommended Strategy: Horizontal Sharding using Consistent Hashing or Account Range Sharding (e.g. hash(AccountNumber) mod N).
- Key Challenges:
  * Cross-Shard Transactions: Fund transfer between Account A on Shard 1 and Account B on Shard 2 requires 2-Phase Commit (2PC) or distributed saga orchestrator, resulting in high latency.
  * Cross-Shard Aggregations: Reporting queries (e.g. Total deposits across all branches) require scatter-gather queries across all nodes and in-memory merging.
  * Rebalancing & Shard Splits: Adding new shards requires complex data migration without bringing the banking service offline.`,
            tags: ['Database Architecture', 'Sharding', 'Partitioning', 'Core Banking Scale'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-25104-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider tables: Customers(CustomerID, Name, CustomerType) and Transactions(TransactionID, CustomerID, Amount, TransactionTime). Write an SQL query to detect potential fraud by identifying customers who made 3 or more consecutive transactions within a 10-minute window where each transaction amount is above BDT 50,000.',
            solution: 'Use Window functions LAG() to compare timestamps of prior consecutive transactions for each customer.',
            codeSolution: `WITH OrderedTransactions AS (
    SELECT 
        TransactionID,
        CustomerID,
        Amount,
        TransactionTime,
        LAG(TransactionTime, 1) OVER (
            PARTITION BY CustomerID 
            ORDER BY TransactionTime
        ) AS Prev_Time_1,
        LAG(TransactionTime, 2) OVER (
            PARTITION BY CustomerID 
            ORDER BY TransactionTime
        ) AS Prev_Time_2
    FROM Transactions
    WHERE Amount > 50000
)
SELECT DISTINCT 
    c.CustomerID,
    c.Name,
    ot.TransactionID,
    ot.TransactionTime,
    ot.Amount
FROM OrderedTransactions ot
JOIN Customers c ON ot.CustomerID = c.CustomerID
WHERE ot.Prev_Time_2 IS NOT NULL
  AND TIMESTAMPDIFF(MINUTE, ot.Prev_Time_2, ot.TransactionTime) <= 10;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Fraud Detection', 'Window Functions', 'LAG', 'Banking'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-25104-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python program implementing the 0/1 Knapsack Problem using Dynamic Programming. Explain how this algorithm is used in bank loan portfolio optimization where a credit committee must select an optimal set of loan projects to maximize return subject to a total lending budget limit.',
            solution: 'Dynamic programming 2D array bottom-up table construction in O(N * W) time.',
            codeSolution: `def knapsack_loan_portfolio(values: list[int], weights: list[int], capacity: int):
    """
    values: Expected profit/return from each loan project
    weights: Requested loan capital amount
    capacity: Total bank lending budget
    """
    n = len(values)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w])
            else:
                dp[i][w] = dp[i - 1][w]
                
    # Reconstructing selected loans
    selected_loans = []
    res = dp[n][capacity]
    w = capacity
    for i in range(n, 0, -1):
        if res <= 0:
            break
        if res != dp[i - 1][w]:
            selected_loans.append(i - 1)
            res -= values[i - 1]
            w -= weights[i - 1]
            
    return dp[n][capacity], selected_loans[::-1]

# Example Demonstration
returns = [60, 100, 120]  # Expected profit in lakhs
loans = [10, 20, 30]      # Loan capital required in lakhs
budget = 50              # Bank risk budget limit

max_return, selected = knapsack_loan_portfolio(returns, loans, budget)
print(f"Max Portfolio Return: BDT {max_return} Lakhs, Selected Projects: {selected}")`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Dynamic Programming', 'Knapsack', 'Finance'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain Containerization using Docker and Orchestration using Kubernetes. How do Kubernetes Pods, Deployments, and Horizontal Pod Autoscaling (HPA) maintain 99.999% availability during peak Eid festival transaction surges in mobile banking?',
            solution: `1. Docker Containerization vs Virtual Machines:
- Containers share the host OS kernel and package application code with only its runtime dependencies.
- Sub-second boot times, lightweight image sizes (MBs vs GBs), and identical environments across development, staging, and production.

2. Kubernetes Components:
- Pod: Smallest deployable unit in Kubernetes, hosting one or more co-located containers sharing network IP and storage volumes.
- Deployment: Declarative controller managing replica sets, rolling zero-downtime updates, and automated rollback upon crash.
- Service: Stable virtual IP and DNS name providing load balancing across transient pods.

3. Handling Peak Eid Transaction Surges:
- Horizontal Pod Autoscaler (HPA): Continuously monitors CPU, memory, and custom metrics (e.g. incoming requests per second on payment gateway).
- When transaction rates spike 10x during festive shopping, HPA automatically scales the payment service from 5 replicas to 50 replicas in seconds.
- Integrated with cluster autoscaling to spin up new compute nodes dynamically, avoiding service degradation.`,
            tags: ['Cloud Computing', 'Docker', 'Kubernetes', 'Microservices', 'High Availability'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain the working of Banker’s Algorithm for Deadlock Avoidance. Differentiate between a Safe State and an Unsafe State. Does an Unsafe State always mean a Deadlock has occurred?',
            solution: `1. Banker's Algorithm:
Dynamic deadlock avoidance algorithm that ensures the system never enters an unsafe state. Before granting a resource request, it runs a safety algorithm to test if there exists at least one execution sequence of processes (Safe Sequence) that can finish without deadlocking.

2. Safe State vs. Unsafe State:
- Safe State: A state in which the system can allocate resources to each process in some order and still avoid a deadlock (a Safe Sequence exists).
- Unsafe State: A state where the system cannot guarantee that all processes will be able to finish. The system does not have enough resources to satisfy the maximum claims of at least one process sequence.

3. Does Unsafe State Mean Deadlock?
NO! An unsafe state is NOT a deadlock; it is merely a state that CAN lead to a deadlock if processes happen to request their maximum claimed resources at the same time. Every deadlock state is unsafe, but not every unsafe state is deadlocked.`,
            tags: ['Operating Systems', 'Deadlock', 'Banker Algorithm', 'Safe Sequence'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-6',
            questionNo: '6',
            type: 'short_note',
            topicCategory: 'Networking & Security',
            questionText: 'Write short notes on: (a) Cryptographic Hash Function (SHA-256) vs Message Authentication Code (HMAC). (b) Content Delivery Networks (CDN) in banking mobile apps.',
            solution: `(a) SHA-256 vs HMAC:
- SHA-256: A cryptographic one-way hash function producing a fixed 256-bit digest. Ensures data integrity (detects accidental corruption or tampering), but does not verify authenticity because anyone can recompute the hash.
- HMAC (Hash-based Message Authentication Code): Combines a cryptographic hash function with a secret shared key: HMAC = Hash((K' XOR opad) || Hash((K' XOR ipad) || Message)). Guarantees both data integrity AND origin authenticity. Used in payment gateway API authorization.

(b) Content Delivery Network (CDN):
A geographically distributed network of proxy edge servers that cache static assets (app scripts, images, CSS, mobile app configs) close to end users. Reduces round-trip latency, mitigates DDoS attacks at the network edge, and offloads origin banking web servers.`,
            tags: ['Cryptography', 'SHA-256', 'HMAC', 'CDN', 'Security'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-25104-nontech',
        name: 'Focus Writing & Translation (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-25104-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'বাংলা ফোকাস রাইটিং: "স্মার্ট ব্যাংকিং ও ক্যাশলেস বাংলাদেশ বিনির্মাণে ব্লকচেইন প্রযুক্তির সম্ভাবনা ও চ্যালেঞ্জ" (শব্দসীমা: ২৫০-৩০০ শব্দ)।',
            solution: `মডেল পয়েন্ট ও বিশ্লেষণী কাঠামো:
১. ভূমিকা:
স্মার্ট বাংলাদেশ ২০৪১ রূপকল্পের অন্যতম উদ্দেশ্য হলো সম্পূর্ণ নিরাপদ, স্বচ্ছ ও কাগজবিহীন আর্থিক লেনদেন ব্যবস্থা গড়ে তোলা। ব্লকচেইন প্রযুক্তি তার বিকেন্দ্রীভূত লেজার (Distributed Ledger) এবং অপরিবর্তনযোগ্য (Immutable) ডেটা রেকর্ডের মাধ্যমে ব্যাংকিং সেক্টরে বৈপ্লবিক পরিবর্তনের প্রতিশ্রুতি দেয়।

২. ব্যাংকিংয়ে প্রয়োগের ক্ষেত্র:
- আন্তঃসীমান্ত রেমিট্যান্স নিষ্পত্তিতে মধ্যস্থতাকারী ফি ও বিলম্ব হ্রাস।
- লেটার অব ক্রেডিট (LC) ও সাপ্লাই চেইন ফাইন্যান্সিংয়ে ভুয়া দলিল ও ইনভয়েস জালিয়াতি সম্পূর্ণ নির্মূল।
- ডিজিটাল কেওয়াইসি (e-KYC) শেয়ারিং: একটি ব্যাংকে যাচাইকৃত কেওয়াইসি কনসোর্টিয়াম ব্লকচেইনে সংরক্ষিত থাকলে অন্য ব্যাংকে তাত্ক্ষণিক অ্যাকাউন্ট খোলা সম্ভব।

৩. বিদ্যমান চ্যালেঞ্জ:
- লেনদেনের গতি (Throughput): প্রতি সেকেন্ডে হাজার হাজার আর্থিক লেনদেন প্রক্রিয়াকরণে পাবলিক ব্লকচেইনের সীমাবদ্ধতা।
- আইনি ও নিয়ন্ত্রণ কাঠামো: বাংলাদেশ ব্যাংকের সুস্পষ্ট নির্দেশিকা ও ডিজিটাল ডাটা সুরক্ষা আইনের সাথে সামঞ্জস্যতা।
- এনার্জি ও অবকাঠামোগত ব্যয়।

৪. উপসংহার:
একটি জাতীয় প্রাইভেট বা পারমিশন্ড কনসোর্টিয়াম ব্লকচেইন প্রতিষ্ঠার মাধ্যমে বাংলাদেশ ব্যাংক আর্থিক লেনদেনে শতভাগ স্বচ্ছতা ও আস্থা নিশ্চিত করতে পারে।`,
            tags: ['Focus Writing', 'Bangla', 'Blockchain', 'Smart Banking'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "কোর ব্যাংকিং সিস্টেমে ক্লাউড প্রযুক্তির ব্যবহার ব্যাংকের পরিচালন ব্যয় হ্রাস এবং যেকোনো দুর্যোগে নিরবচ্ছিন্ন সেবা প্রদানে সহায়তা করে। তবে ডাটা সার্বভৌমত্ব এবং গ্রাহকের তথ্যের সুরক্ষা বজায় রাখাই এর সবচেয়ে বড় চ্যালেঞ্জ।"',
            solution: `Standard High-Quality Model Translation:
"The adoption of cloud technology in Core Banking Systems helps diminish operational expenditures and facilitates uninterrupted service delivery during any disaster. Nevertheless, upholding data sovereignty and safeguarding customer information constitute the foremost challenges."`,
            tags: ['Translation', 'Bangla to English', 'Cloud Banking'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 11. Job ID: 10185 (2023 / Exam May 17, 2024)
  {
    id: 'so-it-10185',
    title: 'SO (IT), Combined Bank (Job ID: 10185) 2023',
    searchQuery: 'SO (IT), Combined Bank (Job ID: 10185) 2023 question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: '10185',
    circularYear: '2023 (Exam: May 17, 2024)',
    examDate: 'May 17, 2024',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Bangladesh Development Bank Limited (BDBL)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The 156-vacancy Senior Officer (IT) exam conducted on May 17, 2024. Features BCNF schema decomposition, multi-threading vs multi-processing, TCP three-way handshake state machine, routing protocols, and bilingual translation.',
    keyTopics: ['Boyce-Codd Normal Form (BCNF)', 'TCP 3-Way Handshake & SYN Flood', 'Multi-Threading vs Multi-Processing', 'SQL Subqueries', 'Green Banking Focus Writing'],
    sections: [
      {
        id: 'sec-10185-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-10185-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Given the relation R(A, B, C, D, E) with functional dependencies: F = { A -> BCD, BC -> DE, D -> E }. (i) Find all candidate keys of R. (ii) Is the relation in 2NF, 3NF, or BCNF? Justify. (iii) Decompose the relation into BCNF relations, ensuring lossless-join decomposition.',
            solution: `Detailed Mathematical Analysis:
(i) Candidate Key:
- Attribute Closure of {A}:
  A+ = {A, B, C, D, E} (since A -> BCD gives ABCD, and D -> E gives E).
  Therefore, {A} is a candidate key.
- Attribute Closure of {BC}:
  BC+ = {B, C, D, E}. Cannot produce A.
- Since A never appears on the right side of any dependency, A MUST be part of every candidate key.
- Therefore, the ONLY candidate key of R is {A}.

(ii) Normal Form Analysis:
- 2NF: No non-prime attribute depends on a proper subset of candidate key {A}. Hence R is in 2NF.
- 3NF: In D -> E, D is NOT a superkey and E is NOT prime. Hence R is NOT in 3NF (violates 3NF).
- BCNF: A relation is in BCNF if for every non-trivial FD X -> Y, X is a superkey. In D -> E, D is not a superkey. In BC -> DE, BC is not a superkey. Thus R is NOT in BCNF.

(iii) Lossless Decomposition into BCNF:
1. For violating FD: D -> E (D is not superkey):
   - R1(D, E) with D as Primary Key. (In BCNF since D -> E has superkey D).
   - Remaining relation: R2(A, B, C, D).
2. Check R2(A, B, C, D):
   - Dependencies on R2: A -> BCD, BC -> D.
   - For BC -> D, candidate key of R2 is A, so BC is NOT a superkey.
   - Decompose R2 by BC -> D:
     * R3(B, C, D) with BC as Primary Key (In BCNF).
     * R4(A, B, C) with A as Primary Key (In BCNF since A -> BC).
Final Decomposed BCNF Relations:
- R1(D, E) [PK: D]
- R3(B, C, D) [PK: (B, C)]
- R4(A, B, C) [PK: A]
Lossless join condition holds through intersection keys.`,
            tags: ['DBMS', 'BCNF', 'Normalization', 'Functional Dependencies'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-10185-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the TCP 3-Way Handshake connection establishment process and how TCP handles connection teardown. What is a SYN Flood attack and how do SYN Cookies mitigate it in banking web portals?',
            solution: `1. TCP 3-Way Handshake:
- Step 1 (SYN): Client sends SYN packet (seq = x) to server, entering SYN_SENT state.
- Step 2 (SYN-ACK): Server receives SYN, allocates buffer resources, and replies with SYN-ACK packet (seq = y, ack = x + 1), entering SYN_RCVD state.
- Step 3 (ACK): Client receives SYN-ACK, replies with ACK packet (seq = x + 1, ack = y + 1), and both transition to ESTABLISHED state.

2. TCP 4-Way Connection Teardown:
- FIN from Initiator -> ACK from Receiver -> FIN from Receiver -> ACK from Initiator (with TIME_WAIT state to drain lingering duplicate packets).

3. SYN Flood Attack & SYN Cookies:
- Attack: An attacker sends thousands of spoofed SYN packets without sending the final ACK. The server allocates TCB (Transmission Control Block) memory for each half-open connection in its backlog queue, exhausting server memory and denying legitimate customers access.
- Mitigation with SYN Cookies:
  * When backlog queue fills, the server stops allocating memory for incoming SYNs.
  * Instead, it encodes the connection parameters into the initial sequence number (y) using a cryptographic hash: y = Hash(client_IP, client_port, server_IP, server_port, secret_key, timestamp).
  * Server sends this SYN-ACK without saving state.
  * When legitimate client replies with ACK (containing ack = y + 1), server reconstructs and validates the hash. If valid, it allocates the connection only upon receipt of the final ACK, rendering the memory exhaustion attack useless.`,
            tags: ['Networking', 'TCP 3-Way Handshake', 'SYN Flood', 'SYN Cookies', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Contrast Multi-Threading vs. Multi-Processing in terms of address space, memory overhead, context-switching latency, and communication mechanisms. How does an asynchronous non-blocking event loop (e.g. Node.js/epoll) compare with traditional thread-per-request architecture for handling high concurrent banking API requests?',
            solution: `1. Multi-Threading vs Multi-Processing:
- Address Space: Threads share the same address space and heap memory of their parent process. Processes each have completely isolated virtual memory spaces.
- Memory Overhead: Threads are lightweight (few KBs of stack). Processes require their own page tables, descriptors, and memory mappings (MBs).
- Context Switching: Thread context switching is significantly faster because virtual memory mappings (TLB cache) do not need to be flushed. Process context switching requires full MMU/TLB invalidation.
- Inter-Process Communication (IPC): Threads communicate directly via shared memory pointers. Processes require IPC primitives (Pipes, Message Queues, Shared Memory, Sockets).

2. Event Loop vs Thread-per-Request:
- Thread-per-Request: Allocates a dedicated thread per incoming HTTP socket connection (e.g. traditional Apache Tomcat). Under 10,000+ concurrent connections, thread stack memory consumption and CPU thrashing during context switching collapses the server.
- Event Loop (I/O Multiplexing via epoll/kqueue): A single event-loop thread handles thousands of concurrent socket connections asynchronously without blocking on I/O. When database queries execute, callbacks or promises register, yielding the CPU to other requests immediately. Provides superior concurrency for I/O-bound banking API microservices.`,
            tags: ['Operating Systems', 'Multi-Threading', 'Concurrency', 'Event Loop'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: Account(AccNo, CustID, AccType, Balance), Transaction(TxnID, AccNo, TxnType, Amount, TxnDate). Write an SQL query to find customers who have NEVER made a transaction greater than BDT 50,000, yet have a total account balance exceeding BDT 5,00,000 across all their accounts.',
            solution: 'Group by customer, sum the balances, and use NOT EXISTS or correlated NOT IN for transaction amount filtering.',
            codeSolution: `SELECT 
    a.CustID,
    SUM(a.Balance) AS Total_Balance
FROM Account a
WHERE NOT EXISTS (
    SELECT 1 
    FROM Transaction t 
    WHERE t.AccNo = a.AccNo 
      AND t.Amount > 50000
)
GROUP BY a.CustID
HAVING SUM(a.Balance) > 500000
ORDER BY Total_Balance DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'NOT EXISTS', 'Subquery', 'Aggregations'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Distance Vector Routing (RIP) vs. Link State Routing (OSPF) vs. Path Vector Routing (BGP). Under what circumstances do commercial banks configure BGP peering with national internet exchanges and multiple ISPs?',
            solution: `1. Protocol Comparison:
- RIP (Distance Vector): Uses Hop Count (max 15). Shares entire routing table periodically with direct neighbors. Slow convergence, susceptible to Count-to-Infinity problems.
- OSPF (Link State): Uses Cost (based on bandwidth). Broadcasts link-state advertisements (LSAs) across the area. Every router runs Dijkstra's algorithm. Rapid convergence, hierarchical areas. Used inside Bank Intranets/WAN.
- BGP (Path Vector): Inter-Autonomous System (AS) exterior gateway protocol. Routes based on AS-Path and policy attributes. Guarantees loop-free inter-domain routing.

2. Why Banks Configure Multihomed BGP:
- Multi-Homing & Redundancy: High-reliability banks obtain their own Autonomous System Number (ASN) and public IP prefix from APNIC. They peer via eBGP with at least two distinct Tier-1 telecom ISPs (e.g. BTCL and private telco).
- Automated Failover: If ISP 1 suffers a fiber cut, BGP automatically withdraws routes from ISP 1 and re-routes all incoming internet banking and ATM traffic through ISP 2 without human intervention.`,
            tags: ['Networking', 'Routing Protocols', 'OSPF', 'BGP', 'WAN Redundancy'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-10185-6',
            questionNo: '6',
            type: 'coding',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Write a Bash shell script for a Linux server in a bank data center to automatically backup the database dump directory `/var/backups/cbs/` to an archive file named with the current timestamp `cbs_backup_YYYYMMDD_HHMM.tar.gz`, compress it, and delete backups older than 30 days.',
            solution: 'Production-ready Bash script using tar, gzip, date formatting, and find with -mtime.',
            codeSolution: `#!/bin/bash
# Shell script for Core Banking automated backup & log cleanup

BACKUP_SRC="/var/backups/cbs"
BACKUP_DEST="/mnt/nas_storage/cbs_archives"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ARCHIVE_NAME="cbs_backup_\${TIMESTAMP}.tar.gz"

# Create destination directory if not exists
mkdir -p "\${BACKUP_DEST}"

echo "Starting backup at \$(date)..."

# Archive and compress backup directory
tar -czf "\${BACKUP_DEST}/\${ARCHIVE_NAME}" -C "\${BACKUP_SRC}" .

if [ $? -eq 0 ]; then
    echo "Backup completed successfully: \${BACKUP_DEST}/\${ARCHIVE_NAME}"
else
    echo "Backup failed!" >&2
    exit 1
fi

# Purge archives older than 30 days
echo "Purging backups older than 30 days..."
find "\${BACKUP_DEST}" -name "cbs_backup_*.tar.gz" -type f -mtime +30 -exec rm -f {} +

echo "Maintenance finished at \$(date)."
exit 0`,
            solutionLanguage: 'bash',
            tags: ['Linux', 'Shell Script', 'Automation', 'Backup', 'SysAdmin'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-10185-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-10185-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Role of Green IT and ESG Metrics in Modern Banking Infrastructure" (Word limit: 250 words).',
            solution: `Key Model Points:
- Global Carbon Footprint: Data centers worldwide consume enormous electrical energy for processing clusters and continuous cooling systems.
- Green IT Strategies: Transitioning from on-premise legacy servers to high-density virtualized architectures, investing in renewable solar energy for regional branch networks, and adopting server power management.
- ESG (Environmental, Social, and Governance) Governance: International investors and Bangladesh Bank mandate transparent reporting of carbon emissions and green financing portfolios.
- Conclusion: Green IT aligns fiscal prudence with planetary responsibility.`,
            tags: ['Focus Writing', 'Green IT', 'ESG', 'Banking'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into Bengali: "Continuous integration and automated testing enable banking software engineering teams to deploy critical security patches swiftly without disrupting ongoing financial transactions."',
            solution: `প্রমিত প্রাতিষ্ঠানিক বাংলা অনুবাদ:
"কন্টিনিউয়াস ইন্টিগ্রেশন (সিআই) এবং স্বয়ংক্রিয় পরীক্ষার ব্যবস্থা ব্যাংকিং সফটওয়্যার ইঞ্জিনিয়ারিং দলগুলোকে চলমান আর্থিক লেনদেনে কোনো ব্যাঘাত না ঘটিয়ে দ্রুততম সময়ে জরুরি নিরাপত্তা প্যাচ স্থাপন করতে সক্ষম করে তোলে।"`,
            tags: ['Translation', 'English to Bangla', 'Software Engineering'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 12. Combined Bank 4 Bank
  {
    id: 'so-it-4bank',
    title: 'SO (IT), Combined Bank 4 Bank',
    searchQuery: 'SO (IT), Combined Bank 4 Bank question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: 'Combined-4-Bank',
    circularYear: '2022-2023',
    examDate: 'September 22, 2023',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The Combined 4 Commercial Banks Senior Officer (IT) exam paper. Focuses on high-concurrency database indexing, ACID transaction isolation levels, stateful packet filtering, graph traversal, and financial math.',
    keyTopics: ['Transaction Isolation Levels', 'B+ Tree vs Hash Indexing', 'Firewall Architectures', 'Subnet Masking', 'Focus Writing', 'BFS Graph Traversal'],
    sections: [
      {
        id: 'sec-4bank-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-4bank-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain the four SQL Transaction Isolation Levels defined by ANSI/ISO SQL standard (Read Uncommitted, Read Committed, Repeatable Read, Serializable). Describe Dirty Read, Non-Repeatable Read, and Phantom Read anomalies and how each level prevents them.',
            solution: `1. The Concurrency Anomalies:
- Dirty Read: Transaction T1 modifies a row. Transaction T2 reads this modified row before T1 commits. If T1 rolls back, T2 has read dirty, invalid data.
- Non-Repeatable (Fuzzy) Read: Transaction T1 reads a row. Transaction T2 modifies or deletes that row and commits. If T1 re-reads the row, it receives different values.
- Phantom Read: Transaction T1 executes a query with a range predicate (e.g. WHERE balance > 100000). Transaction T2 inserts or deletes a row matching the predicate and commits. T1 re-executes the query and sees a different set of rows.

2. Isolation Levels Matrix:
- Read Uncommitted: Permits Dirty Reads, Non-repeatable Reads, Phantom Reads. Lowest overhead, unsuitable for banking.
- Read Committed: Prevents Dirty Reads (uses short read locks). Permits Non-repeatable Reads and Phantoms. (Default in Oracle and PostgreSQL).
- Repeatable Read: Prevents Dirty Reads and Non-repeatable Reads (holds shared read locks until transaction completion). Permits Phantom Reads (unless Next-Key locking is used). (Default in MySQL InnoDB).
- Serializable: Prevents ALL anomalies (Dirty, Non-repeatable, and Phantom Reads) by using Range Locks or Two-Phase Locking (2PL). Ensures transactions execute as if strictly serial. Highest consistency, lowest concurrency.`,
            tags: ['DBMS', 'Isolation Levels', 'Concurrency Control', 'ACID', 'Transactions'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-2',
            questionNo: '2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a program in Python to implement the Breadth First Search (BFS) algorithm on an unweighted graph to find the shortest path in terms of number of hops from a source branch server to all other branch servers.',
            solution: 'BFS implementation using queue data structure for unweighted shortest hop search.',
            codeSolution: `from collections import deque

def bfs_shortest_path(graph: dict[str, list[str]], start_node: str):
    """
    Breadth First Search (BFS) to find shortest hop distances.
    Time Complexity: O(V + E), Space: O(V)
    """
    visited = {start_node}
    distance = {start_node: 0}
    parent = {start_node: None}
    queue = deque([start_node])
    
    while queue:
        current = queue.popleft()
        
        for neighbor in graph.get(current, []):
            if neighbor not in visited:
                visited.add(neighbor)
                distance[neighbor] = distance[current] + 1
                parent[neighbor] = current
                queue.append(neighbor)
                
    return distance, parent

# Example: Bank Regional Network Nodes
network = {
    'HeadOffice': ['Motijheel', 'Gulshan', 'Uttara'],
    'Motijheel': ['HeadOffice', 'Dilkusha', 'Agrabad_CTG'],
    'Gulshan': ['HeadOffice', 'Banani'],
    'Uttara': ['HeadOffice', 'Gazipur'],
    'Dilkusha': ['Motijheel'],
    'Agrabad_CTG': ['Motijheel'],
    'Banani': ['Gulshan'],
    'Gazipur': ['Uttara']
}

hops, paths = bfs_shortest_path(network, 'HeadOffice')
for node, hop_count in hops.items():
    print(f"Hops from HeadOffice to {node}: {hop_count}")`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'BFS', 'Graph', 'Networking'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Compare Prim’s Algorithm and Kruskal’s Algorithm for finding the Minimum Spanning Tree (MST) of a connected weighted graph. Which algorithm is preferable for dense graphs vs. sparse networks?',
            solution: `1. Principles & Comparison:
- Prim's Algorithm:
  * Strategy: Vertex-based growing tree. Starts from an arbitrary root vertex and greedily adds the minimum-weight edge connecting the current tree to an outside vertex.
  * Time Complexity: O(E log V) with binary heap, or O(V^2) with adjacency matrix.
  * Ideal for: DENSE graphs where E is close to V^2.
- Kruskal's Algorithm:
  * Strategy: Edge-based forest merging. Sorts all edges in non-decreasing order of weight, then uses Disjoint Set Union (DSU / Union-Find) to greedily add edges that do not form a cycle.
  * Time Complexity: O(E log E) dominated by edge sorting.
  * Ideal for: SPARSE graphs where E is significantly smaller than V^2 (e.g. inter-branch WAN topologies).`,
            tags: ['Algorithms', 'MST', 'Prim', 'Kruskal', 'Graph Theory'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-4',
            questionNo: '4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Write a stored procedure in MySQL or PostgreSQL named `ProcessFundTransfer` that transfers amount X from Source Account to Destination Account within a single transaction, checking for sufficient balance and rolling back on any error.',
            solution: 'Transactional stored procedure with conditional checks and explicit COMMIT / ROLLBACK.',
            codeSolution: `CREATE OR REPLACE PROCEDURE ProcessFundTransfer(
    p_sender VARCHAR(20),
    p_receiver VARCHAR(20),
    p_amount DECIMAL(15,2)
)
LANGUAGE plpgsql
AS $$
DECLARE
    v_sender_balance DECIMAL(15,2);
BEGIN
    -- Validate amount
    IF p_amount <= 0 THEN
        RAISE EXCEPTION 'Transfer amount must be strictly positive.';
    END IF;

    -- Lock sender row for update to prevent concurrent race condition
    SELECT Balance INTO v_sender_balance
    FROM Account
    WHERE AccNo = p_sender
    FOR UPDATE;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Sender account % does not exist.', p_sender;
    END IF;

    IF v_sender_balance < p_amount THEN
        RAISE EXCEPTION 'Insufficient funds in sender account %. Current: %, Requested: %', 
            p_sender, v_sender_balance, p_amount;
    END IF;

    -- Deduct from sender
    UPDATE Account
    SET Balance = Balance - p_amount
    WHERE AccNo = p_sender;

    -- Credit to receiver
    UPDATE Account
    SET Balance = Balance + p_amount
    WHERE AccNo = p_receiver;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Receiver account % does not exist.', p_receiver;
    END IF;

    -- Record transaction ledger entry
    INSERT INTO Transaction (AccNo, TxnType, Amount, TxnDate)
    VALUES (p_sender, 'TRANSFER_OUT', p_amount, CURRENT_TIMESTAMP);

    INSERT INTO Transaction (AccNo, TxnType, Amount, TxnDate)
    VALUES (p_receiver, 'TRANSFER_IN', p_amount, CURRENT_TIMESTAMP);

END;
$$;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Stored Procedure', 'Transactions', 'Row Locking', 'Fund Transfer'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-4bank-5',
            questionNo: '5',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'An enterprise bank is allocated the classless network block 10.150.0.0/21. The network architect must carve out subnets for 4 divisions: Head Office (800 hosts), Regional Hub 1 (400 hosts), Regional Hub 2 (200 hosts), and 4 WAN Point-to-Point links (2 hosts each). Determine the VLSM subnet allocation (Network Address, Subnet Mask, Usable Range, Broadcast Address).',
            solution: `VLSM Allocation Steps (Ordered from largest requirement to smallest):
1. Head Office (800 hosts):
- 2^h - 2 >= 800 => h = 10 bits (2^10 - 2 = 1022 hosts).
- Prefix: 32 - 10 = /22 (Mask: 255.255.252.0). Block size: 4 in 3rd octet.
- Subnet: 10.150.0.0/22 (Usable: 10.150.0.1 - 10.150.3.254, Broadcast: 10.150.3.255).

2. Regional Hub 1 (400 hosts):
- 2^h - 2 >= 400 => h = 9 bits (2^9 - 2 = 510 hosts).
- Prefix: 32 - 9 = /23 (Mask: 255.255.254.0). Block size: 2 in 3rd octet.
- Subnet: 10.150.4.0/23 (Usable: 10.150.4.1 - 10.150.5.254, Broadcast: 10.150.5.255).

3. Regional Hub 2 (200 hosts):
- 2^h - 2 >= 200 => h = 8 bits (2^8 - 2 = 254 hosts).
- Prefix: 32 - 8 = /24 (Mask: 255.255.255.0). Block size: 1 in 3rd octet.
- Subnet: 10.150.6.0/24 (Usable: 10.150.6.1 - 10.150.6.254, Broadcast: 10.150.6.255).

4. WAN Point-to-Point Links (4 links, 2 hosts each):
- 2^h - 2 >= 2 => h = 2 bits (Prefix: /30, Mask: 255.255.255.252). Block size: 4 in 4th octet.
- WAN 1: 10.150.7.0/30 (Usable: 10.150.7.1 - 10.150.7.2, Broadcast: 10.150.7.3)
- WAN 2: 10.150.7.4/30 (Usable: 10.150.7.5 - 10.150.7.6, Broadcast: 10.150.7.7)
- WAN 3: 10.150.7.8/30 (Usable: 10.150.7.9 - 10.150.7.10, Broadcast: 10.150.7.11)
- WAN 4: 10.150.7.12/30 (Usable: 10.150.7.13 - 10.150.7.14, Broadcast: 10.150.7.15).`,
            tags: ['Networking', 'VLSM', 'Subnetting', 'CIDR', 'Bank Architecture'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-4bank-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain Zero Trust Network Access (ZTNA) and compare it with traditional Virtual Private Networks (VPNs). Why is ZTNA being adopted by Bangladesh commercial banks for remote teller and administrative access?',
            solution: `1. VPN vs. ZTNA:
- Traditional VPN (Perimeter-Based "Castle and Moat"):
  * Once authenticated, the user is placed directly onto the internal network subnet with broad network-level visibility.
  * Lateral Movement: If an attacker compromises a laptop connected via VPN, they can scan and attack internal databases across the entire subnet.
- ZTNA (Zero Trust Network Access):
  * Application-centric access based on the identity of the user, device health posture, and context (time, location).
  * Least-Privilege: The user connects only to the specific authorized application (e.g. CRM web port) via an encrypted outbound broker connection, with zero visibility to the underlying network subnet.
  * Hides corporate network resources behind dark internet presence (no public listening ports).

2. Adoption in Bangladesh Banking:
- Protects Core Banking databases from lateral ransomware infection originating from work-from-home or branch PCs.
- Satisfies Bangladesh Bank ICT Security Guideline requirement for continuous identity verification and micro-segmentation.`,
            tags: ['Cybersecurity', 'Zero Trust', 'ZTNA', 'VPN', 'Network Architecture'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-4bank-nontech',
        name: 'Focus Writing & English (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-4bank-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing: "AI-Powered Fraud Detection in Real-Time Payment Switches: Safeguarding Retail Banking" (Word limit: 300 words).',
            solution: `Key Thematic Analysis:
- Proliferation of instant digital payments through NPSB, Bangla QR, and MFS.
- Limitations of static rule-based fraud detection: Cannot detect novel, fast-evolving social engineering patterns or account takeover frauds.
- Machine Learning models: Supervised classification (Random Forest, XGBoost) and unsupervised anomaly detection (Isolation Forests, Autoencoders) evaluate transactions in under 50 milliseconds.
- Behavioral profiling: Assessing customer geo-velocity, device finger-printing, typing cadence, and spending history.
- Conclusion: Real-time AI fraud detection ensures consumer trust without introducing friction into daily commercial transactions.`,
            tags: ['Focus Writing', 'AI', 'Fraud Detection', 'FinTech', 'English'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "কৃত্রিম বুদ্ধিমত্তা ও মেশিন লার্নিং প্রযুক্তি ব্যবহার করে ব্যাংকিং লেনদেনের গতি ত্বরান্বিত করার পাশাপাশি গ্রাহকদের ব্যক্তিগত তথ্যের সর্বোচ্চ সুরক্ষা প্রদান করা আধুনিক আর্থিক ব্যবস্থার মূল লক্ষ্য।"',
            solution: `Standard High-Quality Model Translation:
"In addition to accelerating the velocity of banking transactions through the application of artificial intelligence and machine learning technologies, providing maximum protection for customers' private data constitutes the primary objective of modern financial systems."`,
            tags: ['Translation', 'Bangla to English', 'AI in Banking'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 13. Combined Bank 2023
  {
    id: 'so-it-2023',
    title: 'SO (IT), Combined Bank 2023',
    searchQuery: 'SO (IT), Combined Bank 2023 question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: 'Combined-SO-2023',
    circularYear: '2023',
    examDate: 'November 10, 2023',
    examBody: 'BIBM',
    participatingBanks: ['Combined State Commercial & Specialized Banks'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The 2023 Combined Bank Senior Officer (IT) written question paper conducted by BIBM. Emphasizes SOLID software design principles, database deadlock resolution, HeapSort algorithms, distributed caching, and NIST incident response.',
    keyTopics: ['SOLID Principles', 'Deadlock Detection & Wait-For Graph', 'HeapSort & Priority Queue', 'Redis Caching', 'NIST Incident Response', 'Focus Writing'],
    sections: [
      {
        id: 'sec-so2023-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-so2023-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the SOLID principles of Object-Oriented Software Design with concrete examples relevant to a banking software system (e.g. Payment Processors, Account Types).',
            solution: `1. Single Responsibility Principle (SRP):
A class should have one, and only one, reason to change.
- Example: Rather than having a single Account class that handles balance calculations, generates PDF account statements, and sends SMS alerts, create separate classes: Account (business logic), StatementService (reporting), and NotificationService (SMS/Email alerts).

2. Open/Closed Principle (OCP):
Software entities should be open for extension, but closed for modification.
- Example: Define an interface PaymentProcessor with method processPayment(amount). When adding a new payment gateway (e.g. bKash or Nagad), implement the interface in BkashPaymentProcessor without modifying the core checkout engine.

3. Liskov Substitution Principle (LSP):
Subtypes must be substitutable for their base types without altering program correctness.
- Example: If FixedDepositAccount inherits from Account, but throws an exception on withdraw() because funds are locked, it violates LSP. Instead, model withdrawable accounts under a specialized interface WithdrawableAccount.

4. Interface Segregation Principle (ISP):
Clients should not be forced to depend on interfaces they do not use.
- Example: Rather than a bloated IBankCustomer interface with methods applyForDebitCard(), applyForCorporateLoan(), and tradeForex(), segregate them into specialized interfaces: IRetailCustomer, ICorporateCustomer, and IForexTrader.

5. Dependency Inversion Principle (DIP):
High-level modules should not depend on low-level modules; both should depend on abstractions.
- Example: The CoreBankingService should depend on an INotificationGateway abstraction rather than hardcoding concrete TwilioSMSService. This allows swapping SMS vendors via dependency injection without recompiling business logic.`,
            tags: ['Software Engineering', 'SOLID Principles', 'OOP', 'System Design'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'How are database deadlocks detected in relational databases using Wait-For Graphs (WFG)? What is the difference between Deadlock Prevention, Deadlock Avoidance (Banker’s Algorithm), and Deadlock Detection & Recovery?',
            solution: `1. Wait-For Graph (WFG) Deadlock Detection:
- Directed graph G = (V, E) where vertices V are active transactions and directed edges E represent wait relationships.
- Edge Ti -> Tj means Transaction Ti is blocked waiting for a lock held by Transaction Tj.
- Cycle Detection: A deadlock exists if and only if the Wait-For Graph contains a directed cycle (e.g. T1 -> T2 -> T3 -> T1). The DBMS runs cycle detection algorithms (Tarjan's or DFS) periodically.
- Recovery: When a cycle is detected, the DBMS chooses a victim transaction based on lowest cost (e.g. least CPU consumed or youngest transaction) and aborts/rolls it back to break the cycle.

2. Prevention vs. Avoidance vs. Detection:
- Deadlock Prevention: Imposes strict protocols that eliminate at least one of the 4 Coffman conditions before execution (e.g. timestamp ordering: Wait-Die or Wound-Wait schemes).
- Deadlock Avoidance: System examines resource requests dynamically. Requires prior knowledge of maximum resources each process will need (e.g., Dijkstra's Banker's Algorithm). Rare in commercial high-concurrency databases due to unpredictability of SQL statements.
- Deadlock Detection & Recovery: Allows deadlocks to occur without restriction, detects cycles in the WFG, and recovers by rolling back victims. This is the standard mechanism implemented in enterprise DBMS engines (Oracle, SQL Server, PostgreSQL, MySQL InnoDB).`,
            tags: ['DBMS', 'Operating Systems', 'Deadlock', 'Banker Algorithm', 'WFG'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2023-3',
            questionNo: '3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C++ program to implement HeapSort on an integer array. Explain how a Max-Heap is maintained using the `heapify` procedure and derive its overall time complexity.',
            solution: 'HeapSort implementation using max-heapify in O(N log N) time.',
            codeSolution: `#include <iostream>
#include <vector>

void heapify(std::vector<int>& arr, int n, int i) {
    int largest = i;       // Initialize largest as root
    int left = 2 * i + 1;  // left child
    int right = 2 * i + 2; // right child

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i) {
        std::swap(arr[i], arr[largest]);
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

void heapSort(std::vector<int>& arr) {
    int n = arr.size();

    // Step 1: Build max heap (from bottom non-leaf nodes up to root)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Step 2: One by one extract elements from heap
    for (int i = n - 1; i > 0; i--) {
        std::swap(arr[0], arr[i]); // Move current root to end
        heapify(arr, i, 0);        // Call max heapify on reduced heap
    }
}

int main() {
    std::vector<int> data = {12, 11, 13, 5, 6, 7};
    heapSort(data);
    std::cout << "Sorted array: ";
    for (int x : data) std::cout << x << " ";
    std::cout << "\\n";
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['Algorithms', 'HeapSort', 'Data Structures', 'C++'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain Distributed Caching using Redis in modern core banking architectures. Compare Cache-Aside (Lazy Loading) vs. Write-Through vs. Write-Behind caching strategies. How is Cache Invalidation handled?',
            solution: `1. Role of Redis in Banking:
In-memory key-value data store used to cache frequently accessed data (user session tokens, branch routing codes, account balances, exchange rates) in RAM, reducing Core Banking database read queries by over 80%.

2. Caching Strategies:
- Cache-Aside (Lazy Loading): Application first checks cache. If Cache Hit, returns data. If Cache Miss, queries database, populates cache, and returns data. (Best for read-heavy workloads; potential stale data).
- Write-Through: Application writes data to cache and database simultaneously. Cache is always consistent, but write latency is slightly higher.
- Write-Behind (Write-Back): Application writes to cache immediately and returns success; cache writes to the database asynchronously in background batches. (Very fast writes; risk of data loss if Redis crashes before persisting).

3. Cache Invalidation:
- TTL (Time-To-Live): Keys expire automatically after a set duration.
- Explicit Event-Driven Eviction: On balance updates or transfers, application explicitly deletes or updates the cached key in Redis.`,
            tags: ['Distributed Systems', 'Redis', 'Caching', 'System Design'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-5',
            questionNo: '5',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Given table: Employee(EmpID, EmpName, ManagerID, Salary). Write a Recursive Common Table Expression (CTE) in SQL to display the complete management hierarchy path (from CEO down to individual officers) along with their organizational level.',
            solution: 'Recursive SQL CTE querying hierarchical relationship.',
            codeSolution: `WITH RECURSIVE OrgHierarchy AS (
    -- Anchor Member: Find Top-level Executive (CEO with NULL ManagerID)
    SELECT 
        EmpID,
        EmpName,
        ManagerID,
        1 AS OrgLevel,
        CAST(EmpName AS VARCHAR(255)) AS HierarchyPath
    FROM Employee
    WHERE ManagerID IS NULL

    UNION ALL

    -- Recursive Member: Find reporting subordinates
    SELECT 
        e.EmpID,
        e.EmpName,
        e.ManagerID,
        oh.OrgLevel + 1,
        CAST(CONCAT(oh.HierarchyPath, ' -> ', e.EmpName) AS VARCHAR(255))
    FROM Employee e
    JOIN OrgHierarchy oh ON e.ManagerID = oh.EmpID
)
SELECT 
    EmpID,
    EmpName,
    OrgLevel,
    HierarchyPath
FROM OrgHierarchy
ORDER BY OrgLevel, EmpID;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Recursive CTE', 'Hierarchical Query', 'DBMS'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2023-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Outline the NIST Incident Response Lifecycle (SP 800-61). Explain how a bank Security Operations Center (SOC) applies the 4 phases (Preparation, Detection & Analysis, Containment/Eradication, Post-Incident Activity) during a suspected ransomware outbreak.',
            solution: `1. Preparation:
Developing incident response policies, deploying EDR and SIEM tools, training CSIRT team, and maintaining isolated immutable offline backups.

2. Detection & Analysis:
SOC analysts detect anomalous encryption activity or unusual C2 (Command & Control) outbound beaconing alerts. Validate the alert severity, identify weaponized malware hash, and determine the blast radius.

3. Containment, Eradication & Recovery:
- Containment: Immediately isolate affected branch network segments, disable compromised Active Directory accounts, and sever WAN links.
- Eradication: Terminate malicious processes, delete persistence registry keys, re-image infected workstations.
- Recovery: Restore clean databases from validated offline backups, verify system integrity, and gradually restore branch services with enhanced telemetry.

4. Post-Incident Activity (Lessons Learned):
Conduct blameless post-mortem, document attack timeline and root cause, patch exploited entry vector, and update firewall rules and playbooks.`,
            tags: ['Cybersecurity', 'NIST', 'Incident Response', 'Ransomware', 'SOC'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-so2023-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-so2023-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "Cultivating the Human Firewall: Mitigating Social Engineering and Spear-Phishing in Banking" (Word limit: 250 words).',
            solution: `Key Points:
- Technical controls (firewalls, anti-virus) cannot fully prevent breaches when attackers target human psychology (urgency, authority, fear).
- Common vectors: Spear-phishing targeting finance officers, CEO fraud, fake invoice redirections, phone vishing.
- Building the Human Firewall: Continuous interactive phishing simulations, rewarding employees who promptly report suspicious emails, multi-channel verification for high-value fund disbursements.
- Conclusion: Well-trained employees represent the most robust first line of defense in cybersecurity.`,
            tags: ['Focus Writing', 'English', 'Social Engineering', 'Cybersecurity'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "সাইবার ঝুঁকি ব্যবস্থাপনায় আধুনিক ব্যাংকিং প্রতিষ্ঠানগুলো নিয়মিত কর্মীদের সচেতনতামূলক প্রশিক্ষণ প্রদান করছে। কোনো প্রযুক্তিই মানুষের ভুলের শতভাগ বিকল্প হতে পারে না।"',
            solution: `Standard High-Quality Model Translation:
"In cyber risk management, modern banking institutions are regularly imparting awareness training to their employees. No technology can completely substitute for human error."`,
            tags: ['Translation', 'Bangla to English', 'Risk Management'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 14. Combined Bank SB BDBL
  {
    id: 'so-it-sb-bdbl',
    title: 'SO (IT), Combined Bank SB BDBL',
    searchQuery: 'SO (IT), Combined Bank SB BDBL question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: 'Combined-SB-BDBL',
    circularYear: '2022-2023',
    examDate: 'December 23, 2023',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Bangladesh Development Bank Limited (BDBL)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The specialized recruitment written test for Senior Officer (IT) for Sonali Bank and BDBL. Tested ISO 8583 financial switch messaging, SQL triggers for audit trailing, cryptographic hashing, OS semaphore synchronization, topological sorting, and focus writing.',
    keyTopics: ['ISO 8583 Messaging', 'SQL Audit Triggers', 'Cryptographic Hashing (SHA-256 vs MD5)', 'Mutex vs Semaphore', 'Topological Sorting', 'Translation'],
    sections: [
      {
        id: 'sec-sbbdbl-tech',
        name: 'Technical IT Core (150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-sbbdbl-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is the ISO 8583 standard in banking payment systems? Describe its message structure: Message Type Identifier (MTI), Primary Bitmap, and Data Elements. How is an authorization request (MTI 0100) and response (MTI 0110) processed?',
            solution: `1. ISO 8583 Overview:
ISO 8583 is the international standard for Financial Transaction Card Originated Messages. It governs electronic exchanges between cardholder devices (ATMs, POS terminals), acquirer banks, payment networks (Visa, Mastercard, NPSB), and issuer banks.

2. Structure of an ISO 8583 Message:
- MTI (Message Type Identifier): A 4-digit numeric code defining the message category:
  * 1st digit: ISO version (0 = ISO 8583-1987, 1 = 1993, 2 = 2003).
  * 2nd digit: Message Class (1 = Authorization, 2 = Financial, 4 = Reversal, 8 = Network Management).
  * 3rd digit: Message Function (0 = Request, 1 = Response, 2 = Advice).
  * 4th digit: Message Origin (0 = Acquirer, 2 = Issuer).
  * Example: MTI 0100 is an Authorization Request; MTI 0110 is an Authorization Response.
- Bitmaps:
  * Primary Bitmap: 64 bits (8 bytes or 16 hex characters) indicating which of Data Elements 1 to 64 are present. If bit 1 is set, a Secondary Bitmap is present for elements 65 to 128.
- Data Elements (Fields):
  * DE 2: Primary Account Number (PAN)
  * DE 3: Processing Code (e.g., 00 = Purchase, 01 = Cash Withdrawal)
  * DE 4: Transaction Amount
  * DE 11: System Trace Audit Number (STAN)
  * DE 39: Response Code (e.g. 00 = Approved, 51 = Insufficient Funds)
  * DE 52: PIN Block (encrypted).

3. Processing Flow:
- When a customer inserts a card at an ATM, the ATM formats an MTI 0100 request.
- The Acquirer routes the message through the National Payment Switch (NPSB) to the Issuer Bank.
- The Issuer validates the PIN block, verifies balance and velocity limits, and returns an MTI 0110 response with Response Code (DE 39 = '00' for approval).`,
            tags: ['FinTech', 'ISO 8583', 'NPSB', 'ATM Switching', 'Payment Systems'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-sbbdbl-2',
            questionNo: '2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Write an SQL Trigger in PostgreSQL or MySQL on table Account(AccNo, Balance, Status) that automatically logs any balance changes into an audit table AccountAudit(AuditID, AccNo, OldBalance, NewBalance, ChangedAt, ChangedBy).',
            solution: 'Trigger definition capturing BEFORE/AFTER row changes into an audit ledger.',
            codeSolution: `-- Audit Table definition
CREATE TABLE AccountAudit (
    AuditID SERIAL PRIMARY KEY,
    AccNo VARCHAR(20) NOT NULL,
    OldBalance DECIMAL(15, 2) NOT NULL,
    NewBalance DECIMAL(15, 2) NOT NULL,
    ChangedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ChangedBy VARCHAR(50) DEFAULT CURRENT_USER
);

-- PostgreSQL Trigger Function
CREATE OR REPLACE FUNCTION log_balance_change()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.Balance <> NEW.Balance THEN
        INSERT INTO AccountAudit (AccNo, OldBalance, NewBalance, ChangedAt, ChangedBy)
        VALUES (OLD.AccNo, OLD.Balance, NEW.Balance, NOW(), CURRENT_USER);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach Trigger to Account Table
CREATE TRIGGER trg_account_balance_audit
AFTER UPDATE OF Balance ON Account
FOR EACH ROW
EXECUTE FUNCTION log_balance_change();`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Triggers', 'Audit Logging', 'DBMS', 'Banking Security'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Compare Mutex vs. Counting Semaphore in Operating Systems. Explain how they prevent race conditions in multi-threaded bank transaction processing when two threads attempt to withdraw from the same account simultaneously.',
            solution: `1. Mutex vs. Counting Semaphore:
- Mutex (Mutual Exclusion Object):
  * Binary locking mechanism (State: 0 or 1, Locked or Unlocked).
  * Has the concept of ownership: Only the specific thread that acquired the mutex lock is authorized to release it.
  * Used for exclusive critical section protection.
- Counting Semaphore:
  * Non-negative integer counter initialized to N.
  * Two atomic operations: wait() / P() which decrements, and signal() / V() which increments.
  * No ownership: Any thread can signal the semaphore.
  * Used for controlling access to a finite pool of shared resources (e.g., a connection pool of 20 database connections).

2. Race Condition Prevention in Bank Balance Update:
Consider Account Balance = BDT 10,000.
Thread A attempts to withdraw BDT 6,000; Thread B attempts to withdraw BDT 5,000.
- Without Synchronization (Race Condition):
  Both threads read Balance = 10,000 concurrently. Both pass the check (10,000 >= withdraw amount).
  Thread A writes Balance = 4,000. Thread B overwrites Balance = 5,000.
  The bank loses BDT 6,000 due to dirty write and lost update!
- With Mutex Synchronization:
  * Thread A acquires account_mutex(AccNo).
  * Thread B attempts to acquire account_mutex(AccNo) and is blocked in sleep state.
  * Thread A reads Balance (10,000), checks validity, writes new Balance (4,000), and releases account_mutex.
  * Thread B wakes up, acquires account_mutex, reads updated Balance (4,000), recognizes that 4,000 < 5,000, rejects the transaction with "Insufficient Funds", and releases the mutex. Consistency is preserved.`,
            tags: ['Operating Systems', 'Concurrency', 'Mutex', 'Semaphore', 'Race Conditions'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain Cryptographic Hashing algorithms. Contrast MD5, SHA-1, and SHA-256. Explain why salting and slow hashing algorithms (bcrypt, Argon2) are required for storing customer internet banking passwords rather than raw SHA-256.',
            solution: `1. Cryptographic Hash Comparison:
- MD5: 128-bit digest. Completely broken; practical collision attacks found in 2004. NEVER use for security.
- SHA-1: 160-bit digest. Broken by SHAttered collision in 2017. Deprecated by NIST and browser vendors.
- SHA-256 (SHA-2): 256-bit digest. Cryptographically secure, no collisions found. Standard for digital signatures and blockchain.

2. Why Fast Hashes (SHA-256) Fail for Passwords:
- SHA-256 was engineered for speed to process gigabytes of data per second.
- Modern GPUs can compute over 10 billion SHA-256 hashes per second. An attacker with leaked password hashes can execute brute-force and rainbow table attacks in minutes.

3. Salting & Adaptive Slow Hashes (bcrypt, Argon2):
- Cryptographic Salt: A unique random string (e.g. 16 bytes) appended to each password before hashing. Defeats precomputed Rainbow Table attacks.
- Work Factor (Key Stretching): Algorithms like bcrypt, PBKDF2, and Argon2 introduce configurable CPU and memory work factors (e.g. 100 milliseconds per hash). This is unnoticeable to a logging-in user, but renders GPU brute-force attacks economically and computationally infeasible.`,
            tags: ['Cryptography', 'Password Hashing', 'SHA-256', 'bcrypt', 'Security'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-5',
            questionNo: '5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python program to implement Topological Sort on a Directed Acyclic Graph (DAG) using Kahn’s Algorithm (In-degree queue). Explain how it applies to scheduling bank automated batch jobs (EOD - End of Day processing).',
            solution: 'Kahn’s algorithm using in-degree array and queue.',
            codeSolution: `from collections import deque

def topological_sort_kahn(num_jobs: int, dependencies: list[tuple[int, int]]):
    """
    dependencies: list of (job_u, job_v) meaning job_u must finish before job_v starts
    """
    in_degree = [0] * num_jobs
    adj = {i: [] for i in range(num_jobs)}
    
    for u, v in dependencies:
        adj[u].append(v)
        in_degree[v] += 1
        
    queue = deque([i for i in range(num_jobs) if in_degree[i] == 0])
    order = []
    
    while queue:
        curr = queue.popleft()
        order.append(curr)
        
        for neighbor in adj[curr]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
                
    if len(order) != num_jobs:
        raise ValueError("Cycle detected! Cannot execute batch jobs due to circular dependency.")
        
    return order

# Example: Bank End-of-Day (EOD) Batch Pipeline
# Jobs: 0: Close Teller Cash, 1: Calculate Interest, 2: Run Loan Accrual, 
#       3: Generate General Ledger, 4: Send Central Bank Reporting
deps = [(0, 1), (0, 2), (1, 3), (2, 3), (3, 4)]
exec_order = topological_sort_kahn(5, deps)
print("Safe Batch Execution Order:", exec_order)`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Topological Sort', 'DAG', 'Kahn Algorithm', 'Job Scheduling'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-sbbdbl-6',
            questionNo: '6',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain Memory Management in Operating Systems: Differentiate between Paging and Segmentation. What is Translation Lookaside Buffer (TLB) and how does it prevent the double memory access penalty?',
            solution: `1. Paging vs. Segmentation:
- Paging: Physical division of memory into fixed-size blocks (Frames) and logical memory into same-sized blocks (Pages). Invisible to programmer. Eliminates external fragmentation, but suffers from internal fragmentation.
- Segmentation: Logical division of memory into variable-sized segments reflecting programmer view (Code, Stack, Heap, Data). Suffers from external fragmentation, but facilitates code sharing and memory protection.

2. TLB & Double Memory Access Penalty:
- The Double Access Problem: Without hardware assistance, every virtual address lookup requires TWO physical memory accesses:
  1. Access the Page Table in RAM to find the frame number.
  2. Access the actual operand data in RAM.
  This doubles memory latency and halves CPU memory throughput!
- Role of TLB (Translation Lookaside Buffer):
  * High-speed, associative hardware cache inside the CPU MMU that caches recent Virtual Page -> Physical Frame translations.
  * When CPU generates a virtual address:
    - TLB Hit (typically >95% rate): Frame number retrieved in 1 clock cycle without accessing RAM.
    - TLB Miss: Page table in RAM accessed, TLB updated with the new mapping.`,
            tags: ['Operating Systems', 'Paging', 'Segmentation', 'TLB', 'Virtual Memory'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-sbbdbl-nontech',
        name: 'Language & Focus Writing (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-sbbdbl-7',
            questionNo: '7',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English: "The Role of Specialized Development Banks (e.g. BDBL) in Catalyzing ICT Entrepreneurship and SME Financing in Bangladesh" (Word limit: 250 words).',
            solution: `Key Thematic Analysis:
- Traditional commercial banks often hesitate to finance early-stage ICT startups due to lack of tangible collateral (land, buildings) despite viable intellectual property (IP).
- Development Financial Institutions (DFIs) like Bangladesh Development Bank Limited (BDBL) are mandated to bridge this funding gap through venture credit, equity participation, and low-interest technology adoption loans.
- Fostering the Fourth Industrial Revolution (4IR): Financing agritech, healthtech, and software export enterprises to diversify foreign currency earnings beyond ready-made garments (RMG).
- Conclusion: Development banks serve as strategic financial enablers for a self-reliant technological ecosystem.`,
            tags: ['Focus Writing', 'English', 'Development Banking', 'ICT Financing'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-8',
            questionNo: '8',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English: "সোনালী ব্যাংক এবং বিডিবিএল দেশের অর্থনৈতিক প্রবৃদ্ধিতে অগ্রণী ভূমিকা পালন করছে। ক্ষুদ্র ও মাঝারি শিল্প উদ্যোক্তাদের সহজে আর্থিক সেবা দিতে এই ব্যাংকগুলো এখন আধুনিক ডিজিটাল প্ল্যাটফর্ম ব্যবহার করছে।"',
            solution: `Standard High-Quality Model Translation:
"Sonali Bank and BDBL are playing pioneering roles in the economic growth of the country. In order to provide financial services smoothly to small and medium enterprise entrepreneurs, these banks are now utilizing modern digital platforms."`,
            tags: ['Translation', 'Bangla to English', 'BDBL', 'SME Financing'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  }
];
