import { ExamPaper } from '../types/exam';

export const officerItPapers: ExamPaper[] = [
  // 1. Job ID: 25105 (Officer IT, Grade-10, 2026)
  {
    id: 'officer-it-25105',
    title: 'Officer (IT), Grade-10 (Job ID-25105) — Bangladesh Bank (BSCS)',
    searchQuery: 'Bangladesh Bank BSCS Officer IT Grade 10 Job ID 25105 written question paper solution',
    category: 'Officer (IT)',
    jobId: '25105',
    circularYear: '2025 (Exam 2026)',
    examDate: 'July 31, 2026',
    examBody: 'Bangladesh Bank — Banker\'s Selection Committee Secretariat (BSCS)',
    participatingBanks: [
      'Sonali Bank PLC',
      'Janata Bank PLC',
      'Agrani Bank PLC',
      'Rupali Bank PLC',
      'Bangladesh Krishi Bank',
      'Bangladesh Development Bank PLC'
    ],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BSCS Paper — 6 Questions)',
    summary: 'Official Bangladesh Bank BSCS Written Question Paper for Officer (IT), Grade-10 (Job ID-25105). Structured in two official parts: Part 1 (Questions 1 to 5: Focus Writing in Bangla & English, Passage Translation, and 5 General Knowledge items — 50 Marks) and Part 2 (Question 6: Subject Related Questions 6.1 to 6.10 — 10 x 15 = 150 Marks).',
    keyTopics: [
      'RISC vs CISC Architecture',
      'Symmetric vs Asymmetric Encryption',
      'Page Fault & Thrashing in OS',
      'SQL HAVING & Aggregate Query',
      'Black-Box vs White-Box Testing',
      'Stack vs Queue Operations',
      'TCP vs UDP & Port Numbers',
      'Boolean Algebra & De Morgan Theorem',
      'NRZ-L, NRZ-I & Manchester Line Coding',
      'IPv4 Subnetting (/26 Fixed-Length)',
      'Java OOP Polymorphism & Output Trace',
      'Binary Search Tree (BST) Insertion'
    ],
    sections: [
      {
        id: 'sec-25105-general',
        name: 'Part 1: Focus Writing, Translation & General Knowledge (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'There are 6 (six) questions in total. Questions 1 to 5 carry 10 marks each (5 x 10 = 50 Marks).',
        questions: [
          {
            id: 'q-25105-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Focus Writing in Bangla (10 Marks):
বাংলাদেশের অর্থনৈতিক উন্নয়নে ডিজিটাল ব্যাংকিং ও মোবাইল ফাইন্যান্সিয়াল সার্ভিসেস (MFS)-এর ভূমিকা: আর্থিক অন্তর্ভুক্তি, ক্যাশলেস লেনদেন এবং সাইবার নিরাপত্তা ঝুঁকি আলোচনা করুন।`,
            solution: `ফোকাস রাইটিং: বাংলাদেশের অর্থনৈতিক উন্নয়নে ডিজিটাল ব্যাংকিং ও মোবাইল ফাইন্যান্সিয়াল সার্ভিসেস (MFS)-এর ভূমিকা

১. ভূমিকা:
বিংশ শতাব্দীর প্রথাগত ব্যাংকিং ব্যবস্থা থেকে বেরিয়ে এসে একবিংশ শতাব্দীর বাংলাদেশে ডিজিটাল ব্যাংকিং এবং মোবাইল ফাইন্যান্সিয়াল সার্ভিসেস (MFS) এক নীরব অর্থনৈতিক বিপ্লব ঘটিয়েছে। বাংলাদেশ ব্যাংকের প্রত্যক্ষ তত্ত্বাবধানে বিকাশ, নগদ, রকেট এবং উপায়-এর মতো সেবাগুলো দেশের প্রান্তিক জনগোষ্ঠীকে আনুষ্ঠানিক আর্থিক খাতের আওতায় নিয়ে এসেছে।

২. আর্থিক অন্তর্ভুক্তি (Financial Inclusion) ও গ্রামীণ অর্থনীতি:
পূর্বে যেখানে একটি ব্যাংক হিসাব খোলার জন্য জেলা বা উপজেলা সদরের শাখায় যেতে হতো, বর্তমানে ই-কেওয়াইসি (e-KYC) প্রযুক্তির কল্যাণে মাত্র কয়েক মিনিটে ঘরে বসেই মোবাইল হিসাব খোলা সম্ভব হচ্ছে। গার্মেন্টস কর্মীদের বেতন ভাতা, প্রবাসীদের প্রেরিত রেমিট্যান্স, কৃষি ভর্তুকি এবং সামাজিক নিরাপত্তা বেষ্টনীর ভাতা সরাসরি উপকারভোগীর মোবাইল অ্যাকাউন্টে পৌঁছে যাচ্ছে।

৩. ক্যাশলেস লেনদেন ও বাংলা কিউআর (Bangla QR):
নগদ টাকার মুদ্রণ ও পরিবহন ব্যয় কমাতে বাংলাদেশ ব্যাংক 'ক্যাশলেস বাংলাদেশ' উদ্যোগ গ্রহণ করেছে। বাংলা কিউআর (Bangla QR), এনপিএসবি (NPSB), বিইএফটিএন (BEFTN), আরটিজিএস (RTGS) এবং বিনিময় (Binimoy) প্ল্যাটফর্মের মাধ্যমে আন্তঃব্যাংক ও আন্তঃএমএফএস লেনদেন তাৎক্ষণিক ও সহজতর হয়েছে।

৪. সাইবার নিরাপত্তা ঝুঁকি ও চ্যালেঞ্জসমূহ:
ডিজিটাল লেনদেন বৃদ্ধির সাথে সাথে ওটিপি (OTP) প্রতারণা, ফিশিং লিংক, সিম ক্লোনিং এবং ম্যালওয়্যার আক্রমণের ঝুঁকি বৃদ্ধি পেয়েছে। অনেক গ্রাহকের ডিজিটাল সাক্ষরতার অভাবকে কাজে লাগিয়ে প্রতারক চক্র অর্থ হাতিয়ে নিচ্ছে।

৫. উত্তরণের উপায় ও উপসংহার:
ডিজিটাল ব্যাংকিং ও এমএফএস খাতকে নিরাপদ রাখতে মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA), কৃত্রিম বুদ্ধিমত্তাভিত্তিক ফ্রড ডিটেকশন সিস্টেম এবং গ্রাহক সচেতনতা বৃদ্ধি অপরিহার্য। প্রযুক্তির সঠিক ব্যবহার ও কঠোর সাইবার নিরাপত্তা নিশ্চিত করা গেলে ডিজিটাল ব্যাংকিং বাংলাদেশের অর্থনৈতিক প্রবৃদ্ধিকে আরও গতিশীল করবে।`,
            tags: ['Focus Writing Bangla', 'Digital Banking', 'MFS', 'Financial Inclusion'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Focus Writing in English (10 Marks):
Cybersecurity Challenges in the Banking Sector of Bangladesh: Analyze the emerging threats to Core Banking Systems (CBS), the role of Security Operations Centers (SOC), and regulatory compliance frameworks.`,
            solution: `Focus Writing: Cybersecurity Challenges in the Banking Sector of Bangladesh

1. Introduction:
As the banking sector of Bangladesh rapidly transitions toward cloud-native Core Banking Systems (CBS), Open Banking APIs, and 24/7 real-time payment switches, the attack surface for cyber adversaries has expanded dramatically. Protecting critical financial infrastructure is no longer solely an IT issue—it is a matter of national economic security.

2. Emerging Threat Landscape:
Modern financial institutions face sophisticated, multi-vector threats:
- Advanced Persistent Threats (APTs) and state-sponsored attacks targeting SWIFT and RTGS gateways.
- Ransomware campaigns capable of encrypting critical database clusters and halting branch operations.
- Distributed Denial of Service (DDoS) attacks aimed at disrupting internet banking portals and mobile apps.
- Insider threats and social engineering (spear-phishing, credential harvesting) targeting privileged IT administrators.

3. Role of Security Operations Centers (SOC) and Zero-Trust Architecture:
To combat these threats, commercial banks must establish 24/7 Security Operations Centers (SOC) equipped with Security Information and Event Management (SIEM) and Extended Detection and Response (XDR) tools. Adopting a Zero-Trust Architecture—enforcing strict Identity and Access Management (IAM), micro-segmentation, and Principle of Least Privilege (PoLP)—ensures that lateral movement within the bank's internal network is blocked.

4. Regulatory Compliance and Conclusion:
Strict adherence to Bangladesh Bank's ICT Security Guidelines (Version 4.0), ISO/IEC 27001, and PCI-DSS standards is mandatory. Regular Vulnerability Assessment and Penetration Testing (VAPT), automated Disaster Recovery (DR) drills, and continuous employee cybersecurity training will fortify Bangladesh's financial ecosystem against evolving cyber threats.`,
            tags: ['Focus Writing English', 'Cybersecurity', 'Core Banking', 'SOC'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Translate the following passage into English (10 Marks):
"তথ্যপ্রযুক্তির এই যুগে ডেটা বা উপাত্তকে বলা হয় আধুনিক অর্থনীতির নতুন জ্বালানি। ব্যাংকিং খাতে প্রতিদিন লক্ষ লক্ষ গ্রাহকের লেনদেনের যে বিশাল উপাত্ত তৈরি হয়, তা সঠিকভাবে বিশ্লেষণ করতে পারলে গ্রাহকসেবার মান বহুগুণ বৃদ্ধি করা সম্ভব। তবে গ্রাহকের ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করা প্রতিটি আর্থিক প্রতিষ্ঠানের নৈতিক ও আইনি দায়িত্ব।"`,
            solution: `English Translation:
"In this era of information technology, data is called the new fuel of the modern economy. If the massive volume of transaction data generated daily by millions of customers in the banking sector can be analyzed properly, the quality of customer service can be enhanced manifold. However, protecting the privacy of customers' personal information is the moral and legal responsibility of every financial institution."`,
            tags: ['Translation', 'Bangla to English', 'Data Privacy'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25105-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Translate the following passage into Bangla (10 Marks):
"Artificial intelligence is no longer a futuristic concept; it is actively transforming how banks assess credit risk and detect fraudulent transactions in real time. Nevertheless, over-reliance on automated algorithms without human oversight can lead to systemic bias and unexpected operational failures."`,
            solution: `Bangla Translation:
"কৃত্রিম বুদ্ধিমত্তা এখন আর কোনো ভবিষ্যৎ কল্পনা নয়; এটি ব্যাংকগুলো কীভাবে ঋণের ঝুঁকি মূল্যায়ন করে এবং তাৎক্ষণিকভাবে প্রতারণামূলক লেনদেন শনাক্ত করে, তাকে সক্রিয়ভাবে বদলে দিচ্ছে। তা সত্ত্বেও, মানবিক তদারকি ছাড়া স্বয়ংক্রিয় অ্যালগরিদমের ওপর অতিরিক্ত নির্ভরশীলতা প্রাতিষ্ঠানিক পক্ষপাতিত্ব এবং অপ্রত্যাশিত পরিচালনাগত ব্যর্থতার কারণ হতে পারে।"`,
            tags: ['Translation', 'English to Bangla', 'Artificial Intelligence'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25105-5',
            questionNo: '5.1 – 5.5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `5. General Knowledge (5 x 2 = 10 Marks):
5.1 What is the full form of BEFTN in the banking sector of Bangladesh?
5.2 Which organization operates the National Data Center (Tier IV) of Bangladesh located in Kaliakoir, Gazipur?
5.3 What is the name of the interoperable digital payment platform launched by Bangladesh Bank connecting banks and MFS providers?
5.4 Which protocol is used to securely transfer files over an SSH connection?
5.5 In which year was the Bangladesh Bank Order (President's Order No. 127) promulgated?`,
            solution: `Answers to Question 5 (General Knowledge):

5.1 BEFTN stands for: Bangladesh Electronic Funds Transfer Network.
5.2 Bangladesh Data Center Company Limited (BDCCL) under the ICT Division.
5.3 Binimoy (বিনিময়).
5.4 SFTP (SSH File Transfer Protocol / Secure File Transfer Protocol) or SCP (Secure Copy Protocol).
5.5 1972 (December 16, 1972).`,
            tags: ['General Knowledge', 'BEFTN', 'Binimoy', 'Bangladesh Bank'],
            marks: 10,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-25105-subject',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.10) — (15 x 10 = 150 Marks)',
        marks: 150,
        description: 'Official Subject Related CSE/IT Questions (10 Questions x 15 Marks = 150 Marks).',
        questions: [
          {
            id: 'q-25105-6-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Differentiate between RISC (Reduced Instruction Set Computer) and CISC (Complex Instruction Set Computer) architectures. Give two examples of processors for each architecture.',
            solution: `Comparison between RISC and CISC Architectures:

1. Instruction Set & Format:
- RISC: Uses a small, highly optimized set of simple instructions of fixed length (typically 32 bits) that execute in a single clock cycle.
- CISC: Uses a large set of complex instructions of variable length (1 to 15 bytes) that may take multiple clock cycles to execute.

2. Memory Access Model:
- RISC: Follows a strict Load/Store architecture—only LOAD and STORE instructions access memory; all arithmetic and logical operations work solely on CPU registers.
- CISC: Allows direct memory-to-memory and register-to-memory operations within a single arithmetic instruction.

3. Hardware vs Compiler Complexity:
- RISC: Hardware control unit is hardwired and simple; complexity lies in the compiler to optimize instruction scheduling and pipelining.
- CISC: Uses a complex microprogrammed control unit in hardware to decode multi-step instructions.

4. Registers & Pipelining:
- RISC: Contains a large number of general-purpose registers (32+) and achieves high instruction pipeline throughput (CPI close to 1).
- CISC: Contains fewer general-purpose registers (8–16) and pipelining is more complex due to variable instruction lengths.

5. Real-World Processor Examples:
- RISC Examples: ARM Cortex series (Apple M1/M2/M3), RISC-V, MIPS, IBM PowerPC.
- CISC Examples: Intel x86/x86-64 (Core i7/i9, Xeon), AMD Ryzen/EPYC, Motorola 68000.`,
            tags: ['Computer Architecture', 'RISC vs CISC', 'Processors'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-25105-6-2',
            questionNo: '6.2',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the key operational differences between Symmetric Key Encryption and Asymmetric Key Encryption. Why do modern TLS/HTTPS connections use a hybrid combination of both?',
            solution: `1. Operational Differences:
- Key Usage: Symmetric encryption uses a single shared secret key for both encryption and decryption (e.g., AES-256, ChaCha20, 3DES). Asymmetric encryption uses a mathematically related key pair: a Public Key for encryption and a Private Key for decryption (e.g., RSA, ECC).
- Computational Speed: Symmetric algorithms rely on fast bitwise XOR, substitution, and permutation operations, making them 100 to 1,000 times faster than asymmetric algorithms, which rely on modular exponentiation or elliptic curve point multiplication.
- Key Exchange Problem: Symmetric encryption requires a secure pre-existing channel to share the secret key (requires N(N-1)/2 keys for N parties). Asymmetric encryption solves key distribution publicly (requires only 2N keys for N parties).

2. Why TLS/HTTPS Uses a Hybrid Approach:
- During the TLS Handshake, Asymmetric Cryptography (RSA or ECDHE) is used to authenticate the bank server's digital certificate and securely exchange/establish an ephemeral shared session key over an untrusted public network.
- Once the session key is established, TLS switches to Symmetric Encryption (such as AES-GCM) for all bulk application data transfer to achieve high throughput and low latency.`,
            tags: ['Cryptography', 'Symmetric vs Asymmetric', 'TLS', 'Security'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-25105-6-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'What is a "Page Fault" in virtual memory management? Explain the concept of "Thrashing" in an operating system and how the Working-Set Model helps prevent it.',
            solution: `1. Page Fault:
A Page Fault occurs when a running process attempts to access a virtual memory page that is currently not mapped to any physical RAM frame (its valid/invalid bit in the Page Table is set to 'invalid'). The MMU triggers a trap to the OS kernel, which locates the page on secondary storage (swap space/disk), loads it into a free physical frame, updates the page table, and restarts the instruction.

2. Thrashing:
Thrashing is a severe performance degradation state where a process (or the entire system) spends more time paging (swapping pages in and out between RAM and disk) than executing actual CPU instructions.
- Cause: When the degree of multiprogramming is too high, each process receives fewer physical frames than its minimum locality requirement. Processes continuously fault and steal frames from one another, causing CPU utilization to plummet while disk I/O saturates at 100%.

3. Prevention via the Working-Set Model:
- Peter Denning's Working-Set Model defines a process's Working Set W(t, Delta) as the set of distinct pages referenced by the process during the most recent Delta virtual time window.
- The OS monitors the size of each process's working set |W_i|. If the sum of all working sets exceeds total available physical frames (Sum |W_i| > M), the OS suspends/swaps out one or more processes completely and reallocates their frames to remaining active processes, immediately eliminating thrashing.`,
            tags: ['Operating Systems', 'Page Fault', 'Thrashing', 'Virtual Memory'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-6-4',
            questionNo: '6.4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: `Consider the following relation:
Account(AccNo, CustomerName, BranchName, Balance)
Write an SQL query to retrieve the BranchName, the total number of accounts, and the total deposit balance for each branch that has more than 50 accounts and an average account balance greater than 25,000. Sort the result by total deposit balance in descending order.`,
            solution: `We group the records by BranchName, compute COUNT(AccNo) and SUM(Balance), and filter the aggregated groups using the HAVING clause for both COUNT(AccNo) > 50 and AVG(Balance) > 25000.`,
            codeSolution: `SELECT 
    BranchName,
    COUNT(AccNo) AS Total_Accounts,
    SUM(Balance) AS Total_Deposit_Balance
FROM Account
GROUP BY BranchName
HAVING COUNT(AccNo) > 50 
   AND AVG(Balance) > 25000
ORDER BY Total_Deposit_Balance DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'GROUP BY', 'HAVING', 'Aggregate Functions'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-25105-6-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'Differentiate between Black-Box Testing and White-Box Testing in software engineering. Mention two specific testing techniques used in each approach.',
            solution: `Comparison between Black-Box Testing and White-Box Testing:

1. Core Definition & Internal Knowledge:
- Black-Box Testing (Behavioral/Functional Testing): The tester evaluates the software against functional specifications by providing inputs and verifying outputs without any knowledge of the internal source code, control flow, or data structures.
- White-Box Testing (Structural/Glass-Box Testing): The tester has full visibility into the internal source code, logic branches, loops, and architecture, designing test cases to exercise specific code paths.

2. Performed By & SDLC Phase:
- Black-Box: Typically performed by independent QA Engineers and business analysts during System Testing and User Acceptance Testing (UAT).
- White-Box: Typically performed by Software Developers during Unit Testing and early Integration Testing.

3. Specific Testing Techniques:
- Black-Box Techniques:
  (i) Equivalence Partitioning (dividing input data into valid and invalid equivalence classes).
  (ii) Boundary Value Analysis (testing at the exact minimum/maximum edges of input ranges).
- White-Box Techniques:
  (i) Statement & Branch Coverage (ensuring every line of code and every true/false branch is executed).
  (ii) Basis Path Testing using McCabe's Cyclomatic Complexity V(G) = E - N + 2P.`,
            tags: ['Software Engineering', 'Black-Box Testing', 'White-Box Testing', 'QA'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-25105-6-6',
            questionNo: '6.6',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Convert the infix expression A + B * (C ^ D - E) ^ (F + G * H) - I into its equivalent postfix (Reverse Polish Notation) expression using a stack. Show the step-by-step state of the operator stack and output string.',
            solution: `Operator Precedence & Associativity:
1. '^' (Exponentiation): Highest precedence, Right-to-Left associative.
2. '*', '/' (Multiplication/Division): Medium precedence, Left-to-Right associative.
3. '+', '-' (Addition/Subtraction): Lowest precedence, Left-to-Right associative.

Step-by-Step Stack Conversion Table:
- Scan 'A': Output = A | Stack = empty
- Scan '+': Output = A | Stack = +
- Scan 'B': Output = A B | Stack = +
- Scan '*': Output = A B | Stack = + *
- Scan '(': Output = A B | Stack = + * (
- Scan 'C': Output = A B C | Stack = + * (
- Scan '^': Output = A B C | Stack = + * ( ^
- Scan 'D': Output = A B C D | Stack = + * ( ^
- Scan '-': Pop '^', push '-' -> Output = A B C D ^ | Stack = + * ( -
- Scan 'E': Output = A B C D ^ E | Stack = + * ( -
- Scan ')': Pop until '(' -> Output = A B C D ^ E - | Stack = + *
- Scan '^': Output = A B C D ^ E - | Stack = + * ^
- Scan '(': Output = A B C D ^ E - | Stack = + * ^ (
- Scan 'F': Output = A B C D ^ E - F | Stack = + * ^ (
- Scan '+': Output = A B C D ^ E - F | Stack = + * ^ ( +
- Scan 'G': Output = A B C D ^ E - F G | Stack = + * ^ ( +
- Scan '*': Output = A B C D ^ E - F G | Stack = + * ^ ( + *
- Scan 'H': Output = A B C D ^ E - F G H | Stack = + * ^ ( + *
- Scan ')': Pop '*', '+' -> Output = A B C D ^ E - F G H * + | Stack = + * ^
- Scan '-': Pop '^', '*', '+' then push '-' -> Output = A B C D ^ E - F G H * + ^ * + | Stack = -
- Scan 'I': Output = A B C D ^ E - F G H * + ^ * + I | Stack = -
- End of expression: Pop '-' ->

Final Postfix Expression:
A B C D ^ E - F G H * + ^ * + I -`,
            tags: ['Data Structures', 'Stack', 'Infix to Postfix'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare TCP and UDP transport layer protocols. State the default port numbers and transport protocol (TCP or UDP) used by: (a) HTTPS, (b) DNS, and (c) SSH.',
            solution: `1. TCP vs UDP Comparison:
- Connection Orientation: TCP (Transmission Control Protocol) is connection-oriented (requires 3-way handshake before data transfer); UDP (User Datagram Protocol) is connectionless.
- Reliability & Ordering: TCP guarantees reliable, in-order delivery using sequence numbers, ACKs, and retransmission; UDP provides best-effort delivery without ordering or retransmission guarantees.
- Flow & Congestion Control: TCP uses sliding window flow control and congestion avoidance (AIMD/Cubic); UDP has no built-in flow or congestion control.
- Header Overhead: TCP has a minimum 20-byte header; UDP has a lightweight fixed 8-byte header.

2. Default Port Numbers & Transport Protocols:
(a) HTTPS (Hypertext Transfer Protocol Secure): Port 443 — Uses TCP (HTTP/3 also uses UDP/QUIC on 443).
(b) DNS (Domain Name System): Port 53 — Uses UDP for standard name resolution queries (< 512 bytes) and TCP for zone transfers (AXFR) or large DNSSEC responses.
(c) SSH (Secure Shell): Port 22 — Uses TCP.`,
            tags: ['Networking', 'TCP vs UDP', 'Ports', 'HTTPS', 'DNS', 'SSH'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-25105-6-8',
            questionNo: '6.8',
            type: 'math',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Simplify the following 4-variable Boolean function using a Karnaugh Map (K-map): F(A, B, C, D) = Sum m(0, 1, 2, 4, 5, 6, 8, 9, 12, 13, 14). State the simplified Sum-of-Products (SOP) expression.',
            solution: `1. 4-Variable K-Map Grid Representation (Rows = AB, Columns = CD in Gray Code 00, 01, 11, 10):

         CD=00   CD=01   CD=11   CD=10
AB=00 |  1 (m0)  1 (m1)  0 (m3)  1 (m2)
AB=01 |  1 (m4)  1 (m5)  0 (m7)  1 (m6)
AB=11 |  1 (m12) 1 (m13) 0 (m15) 1 (m14)
AB=10 |  1 (m8)  1 (m9)  0 (m11) 0 (m10)

2. Optimal Groupings (Prime Implicants):
- Group 1 (Octet of 8 cells): Columns CD=00 and CD=01 across all four rows AB=00, 01, 11, 10 -> Minterms (0, 1, 4, 5, 12, 13, 8, 9).
  * AB changes across all 4 rows (eliminated), D changes from 0 to 1 (eliminated), C remains 0 -> Term 1 = C'

- Group 2 (Quad of 4 cells): Minterms (0, 2, 4, 6) in rows AB=00, 01 and corners CD=00, 10.
  * A is fixed at 0 (A'), B changes (eliminated), C changes (eliminated), D is fixed at 0 (D') -> Term 2 = A'D'

- Group 3 (Quad of 4 cells): Minterms (4, 6, 12, 14) in rows AB=01, 11 and corners CD=00, 10.
  * A changes (eliminated), B is fixed at 1 (B), C changes (eliminated), D is fixed at 0 (D') -> Term 3 = BD'

3. Final Simplified SOP Expression:
F(A, B, C, D) = C' + A'D' + BD'`,
            tags: ['Digital Logic', 'K-Map', 'Boolean Simplification'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-25105-6-9',
            questionNo: '6.9',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'A bank branch is allocated the IPv4 network block 192.168.50.0/24 and needs to divide it into 4 equal-sized subnets for 4 departments. Determine for each subnet: (i) CIDR Subnet Mask, (ii) Network Address, (iii) First and Last Usable Host IP, and (iv) Broadcast Address.',
            solution: `1. Subnetting Calculation:
- Given network block: 192.168.50.0/24.
- Number of equal subnets required = 4 = 2^2 -> Borrow 2 bits from the host portion.
- New CIDR prefix length = /24 + 2 = /26.
- Dotted Decimal Subnet Mask = 255.255.255.192 (since 128 + 64 = 192).
- Block size (hosts per subnet) = 2^(32 - 26) = 2^6 = 64 addresses per subnet (62 usable hosts).

2. Address Plan for All 4 Subnets:
- Subnet 1:
  * Network Address: 192.168.50.0/26
  * Usable Host Range: 192.168.50.1 – 192.168.50.62
  * Broadcast Address: 192.168.50.63

- Subnet 2:
  * Network Address: 192.168.50.64/26
  * Usable Host Range: 192.168.50.65 – 192.168.50.126
  * Broadcast Address: 192.168.50.127

- Subnet 3:
  * Network Address: 192.168.50.128/26
  * Usable Host Range: 192.168.50.129 – 192.168.50.190
  * Broadcast Address: 192.168.50.191

- Subnet 4:
  * Network Address: 192.168.50.192/26
  * Usable Host Range: 192.168.50.193 – 192.168.50.254
  * Broadcast Address: 192.168.50.255`,
            tags: ['Subnetting', 'IPv4', 'Computer Networks'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-25105-6-10',
            questionNo: '6.10',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Construct a Binary Search Tree (BST) by inserting the following sequence of keys in the given order: 50, 30, 70, 20, 40, 60, 80, 35. Then write down the Pre-order, In-order, and Post-order traversal sequences of the constructed BST.',
            solution: `1. Step-by-Step BST Construction:
- Insert 50: Becomes Root node.
- Insert 30: 30 < 50 -> Left child of 50.
- Insert 70: 70 > 50 -> Right child of 50.
- Insert 20: 20 < 50, 20 < 30 -> Left child of 30.
- Insert 40: 40 < 50, 40 > 30 -> Right child of 30.
- Insert 60: 60 > 50, 60 < 70 -> Left child of 70.
- Insert 80: 80 > 50, 80 > 70 -> Right child of 70.
- Insert 35: 35 < 50, 35 > 30, 35 < 40 -> Left child of 40.

Tree Structure Diagram:
          50
        /    \\
      30      70
     /  \\    /  \\
   20   40  60   80
       /
      35

2. Tree Traversals:
- Pre-order Traversal (Root -> Left -> Right):
  50, 30, 20, 40, 35, 70, 60, 80

- In-order Traversal (Left -> Root -> Right — always sorted in ascending order for a BST):
  20, 30, 35, 40, 50, 60, 70, 80

- Post-order Traversal (Left -> Right -> Root):
  20, 35, 40, 30, 60, 80, 70, 50`,
            tags: ['Data Structures', 'BST', 'Tree Traversal'],
            marks: 15,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 2. Job ID: 10184 (Combined Bank Officer IT — Official BIBM Question Paper, Oct 4, 2024)
  {
    id: 'officer-it-10184',
    title: 'Officer (IT), Combined 5 Banks (Job ID-10184) — BIBM Official Paper',
    searchQuery: 'Combined Bank Officer IT Job ID 10184 BIBM written question paper solution October 4 2024',
    category: 'Officer (IT)',
    jobId: '10184',
    circularYear: '2023 (Exam Oct 4, 2024)',
    examDate: 'October 4, 2024',
    examBody: 'BIBM (Bangladesh Institute of Bank Management)',
    participatingBanks: [
      'Sonali Bank PLC',
      'Janata Bank PLC',
      'Agrani Bank PLC',
      'Bangladesh Development Bank PLC',
      'Bangladesh Krishi Bank'
    ],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BIBM Question Paper)',
    summary: 'Authentic BIBM Written Question Paper for Combined 5 Banks Officer (IT) (Job ID: 10184, held on October 4, 2024). Contains Part 1 (Bangla & English Focus Writing, Translation, and Analytical Math — 50 Marks) and Part 2 (12 Subject Related CSE/IT Questions: 12-bit DAC resolution over 0–3.3V, Stack Infix-to-Postfix evaluation of P = 12 / (7 - 3) + 2, Hash Table Linear Probing for {23, 43, 13, 27, 33}, OOP Encapsulation & Inheritance, OS Deadlock conditions, 64 KB Direct-Mapped Cache bit calculation, CMMI Maturity Levels, /26 Subnetting, Graph representations, Binary Tree Traversals, Linux chmod permissions, and Multi-table SQL Join — 150 Marks).',
    keyTopics: [
      '12-bit DAC Resolution (0 to 3.3V)',
      'Infix to Postfix P = 12 / (7 - 3) + 2',
      'Hash Table Linear Probing {23, 43, 13, 27, 33}',
      'OOP Encapsulation & Inheritance',
      'OS Resource Deadlock Conditions',
      '64 KB Direct-Mapped Cache Total Bits',
      'CMMI Maturity Levels 1 to 5',
      'Class C /26 Subnetting',
      'Adjacency Matrix vs Adjacency List',
      'Linux File Permissions (chmod 754)',
      'Multi-Table SQL Join'
    ],
    sections: [
      {
        id: 'sec-10184-general',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official BIBM General & Language Section: Focus Writing in Bangla & English, Passage Translation, and Analytical Mathematics.',
        questions: [
          {
            id: 'q-10184-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Focus Writing in Bangla (10 Marks):
ক্যাশলেস বাংলাদেশ বিনির্মাণে ডিজিটাল পেমেন্ট ইকোসিস্টেমের ভূমিকা ও সাইবার নিরাপত্তা চ্যালেঞ্জ।`,
            solution: `ক্যাশলেস বাংলাদেশ বিনির্মাণে ডিজিটাল পেমেন্ট ইকোসিস্টেমের ভূমিকা ও সাইবার নিরাপত্তা চ্যালেঞ্জ

১. ভূমিকা:
আধুনিক অর্থনীতির অন্যতম প্রধান চালিকাশক্তি হলো দ্রুত, নিরাপদ ও স্বচ্ছ লেনদেন ব্যবস্থা। বাংলাদেশ ব্যাংক ২০২৭ সালের মধ্যে দেশের মোট লেনদেনের ৭৫ শতাংশ ক্যাশলেস বা নগদবিহীন করার লক্ষ্যমাত্রা নির্ধারণ করেছে।

২. ডিজিটাল পেমেন্ট ইকোসিস্টেমের উপাদান:
বাংলা কিউআর (Bangla QR), ন্যাশনাল পেমেন্ট সুইচ বাংলাদেশ (NPSB), রিয়েল টাইম গ্রস সেটেলমেন্ট (RTGS), বিইএফটিএন (BEFTN) এবং মোবাইল ফাইন্যান্সিয়াল সার্ভিসেস (MFS)-এর সমন্বয়ে বাংলাদেশে একটি শক্তিশালী পেমেন্ট ইকোসিস্টেম গড়ে উঠেছে। ক্ষুদ্র দোকানি থেকে শুরু করে বৃহৎ কর্পোরেট প্রতিষ্ঠান পর্যন্ত সবাই এখন তাৎক্ষণিক ডিজিটাল লেনদেনের সুবিধা পাচ্ছে।

৩. সাইবার নিরাপত্তা চ্যালেঞ্জ ও প্রতিকার:
ক্যাশলেস লেনদেনের প্রসারের সাথে সাথে ফিশিং, সোশ্যাল ইঞ্জিনিয়ারিং এবং ম্যালওয়্যার আক্রমণের ঝুঁকি বেড়েছে। এই চ্যালেঞ্জ মোকাবিলায় টু-ফ্যাক্টর অথেনটিকেশন (2FA), এন্ড-টু-এন্ড এনক্রিপশন, পিসিআই-ডিএসএস (PCI-DSS) কমপ্লায়েন্স এবং গ্রাহক পর্যায়ে ডিজিটাল সাক্ষরতা বৃদ্ধি অপরিহার্য।`,
            tags: ['Focus Writing Bangla', 'Cashless Bangladesh', 'BIBM 10184'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10184-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Focus Writing in English (10 Marks):
"Mitigating Cyber Risks in the Financial Sector of Bangladesh."`,
            solution: `Focus Writing: Mitigating Cyber Risks in the Financial Sector of Bangladesh

The rapid digitization of banking services in Bangladesh—spanning internet banking, mobile apps, real-time interbank switches, and cloud-hosted APIs—has brought unprecedented convenience to millions of citizens. However, it has simultaneously exposed financial institutions to sophisticated cyber threats.

To mitigate these risks effectively, banks must move from reactive defense to proactive cyber resilience:
1. Defense-in-Depth & Zero Trust: Implementing Next-Generation Firewalls (NGFW), Web Application Firewalls (WAF), network micro-segmentation, and multi-factor authentication (MFA) for all privileged accounts.
2. Continuous Threat Monitoring: Establishing a 24/7 Security Operations Center (SOC) integrated with SIEM and automated threat intelligence feeds to detect anomalies in real time.
3. Regular Audits & VAPT: Conducting periodic Vulnerability Assessment and Penetration Testing (VAPT) alongside strict adherence to Bangladesh Bank's ICT Security Guidelines.
4. Human Firewall: Since social engineering remains the primary entry point for attackers, mandatory cybersecurity awareness training for both bank employees and customers is crucial.`,
            tags: ['Focus Writing English', 'Cyber Risk Mitigation', 'BIBM 10184'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10184-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Translate the following passage into English (10 Marks):
"ব্যাংকিং খাতে খেলাপি ঋণ বাংলাদেশের অর্থনীতির অন্যতম প্রধান সমস্যা। ঋণ অনুমোদনের পূর্বে গ্রাহকের সঠিক তথ্য যাচাই এবং কেন্দ্রীয় ডেটাবেজের মাধ্যমে ঋণগ্রহীতার সক্ষমতা মূল্যায়ন করা হলে খেলাপি ঋণের পরিমাণ অনেকাংশেই কমিয়ে আনা সম্ভব।"`,
            solution: `English Translation:
"Non-performing loans (defaulted loans) in the banking sector are one of the major problems of Bangladesh's economy. If customer information is properly verified prior to loan approval and the borrower's creditworthiness is assessed through a centralized database, the volume of non-performing loans can be reduced to a large extent."`,
            tags: ['Translation', 'Bangla to English', 'BIBM 10184'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Translate the following passage into Bangla (10 Marks):
"Cloud computing allows financial institutions to scale their infrastructure on demand while reducing capital expenditure on physical data centers. However, banks must ensure strict data sovereignty and encryption standards before migrating sensitive customer records to third-party cloud providers."`,
            solution: `Bangla Translation:
"ক্লাউড কম্পিউটিং আর্থিক প্রতিষ্ঠানগুলোকে ভৌত ডেটা সেন্টারের মূলধনী ব্যয় হ্রাস করার পাশাপাশি চাহিদা অনুযায়ী তাদের অবকাঠামো সম্প্রসারণের সুযোগ দেয়। তবে তৃতীয় পক্ষের ক্লাউড সেবাদাতার কাছে গ্রাহকের সংবেদনশীল তথ্য স্থানান্তরের পূর্বে ব্যাংকগুলোকে অবশ্যই কঠোর ডেটা সার্বভৌমত্ব এবং এনক্রিপশন মানদণ্ড নিশ্চিত করতে হবে।"`,
            tags: ['Translation', 'English to Bangla', 'BIBM 10184'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-5',
            questionNo: '5.1 – 5.2',
            type: 'math',
            topicCategory: 'Focus Writing & Language',
            questionText: `Analytical Mathematics (2 x 5 = 10 Marks):
5.1 In a survey of 100 IT professionals in a bank, 65 know Java, 55 know Python, and 15 know neither of the two languages. How many professionals know both Java and Python?
5.2 Two fair six-sided dice are rolled simultaneously. What is the probability that the sum of the numbers on the two faces is either 7 or 11?`,
            solution: `Solution to 5.1 (Set Theory / Inclusion-Exclusion):
- Total professionals, n(U) = 100
- Number who know neither = 15
- Therefore, number who know at least one language, n(J U P) = 100 - 15 = 85.
- Given n(J) = 65 and n(P) = 55.
- By Inclusion-Exclusion Principle:
  n(J intersect P) = n(J) + n(P) - n(J U P) = 65 + 55 - 85 = 120 - 85 = 35.
Answer 5.1: 35 professionals know both Java and Python.

Solution to 5.2 (Probability):
- Total possible outcomes when rolling two 6-sided dice = 6 x 6 = 36.
- Outcomes with sum = 7: {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)} -> 6 outcomes.
- Outcomes with sum = 11: {(5,6), (6,5)} -> 2 outcomes.
- Since the two events are mutually exclusive, total favorable outcomes = 6 + 2 = 8.
- Probability P(sum = 7 or 11) = 8 / 36 = 2 / 9.
Answer 5.2: 2/9 (or approximately 0.2222).`,
            tags: ['Mathematics', 'Probability', 'Set Theory', 'BIBM 10184'],
            marks: 10,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-10184-subject',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.12) — (12 x 12.5 = 150 Marks)',
        marks: 150,
        description: 'Official BIBM Subject Related CSE/IT Questions from the October 4, 2024 examination.',
        questions: [
          {
            id: 'q-10184-6-1',
            questionNo: '6.1',
            type: 'math',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'You are required to convert a 12-bit digital number to an analogue voltage over the voltage range of 0 to 3.3V with a Digital-to-Analogue Converter (DAC). What is the resolution (step size) of the analogue output?',
            solution: `Given Data:
- Number of bits of the DAC, n = 12 bits
- Full-Scale Voltage Range, V_FS = 3.3V - 0V = 3.3V
- Total number of discrete levels = 2^12 = 4096 levels (or 2^12 - 1 = 4095 steps)

Calculation of DAC Resolution (Step Size / LSB Weight):
1. Using 2^n levels formula:
   Resolution = V_FS / 2^n = 3.3 V / 4096 = 0.000805664 V = 0.8057 mV (or 805.66 microvolts)

2. Using (2^n - 1) full-scale steps formula:
   Resolution = V_FS / (2^12 - 1) = 3.3 V / 4095 = 0.00080586 V = 0.8059 mV

Answer: The resolution of the analogue output is 0.8057 mV (approx. 0.81 mV per LSB).`,
            tags: ['Digital Electronics', 'DAC Resolution', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-2',
            questionNo: '6.2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Convert the infix expression P = 12 / (7 - 3) + 2 to a postfix expression using a stack and evaluate the postfix expression step-by-step.',
            solution: `Part 1: Infix to Postfix Conversion of P = 12 / (7 - 3) + 2
- Read '12' (operand) -> Output: 12 | Stack: empty
- Read '/' (operator) -> Output: 12 | Stack: /
- Read '(' -> Output: 12 | Stack: / (
- Read '7' (operand) -> Output: 12 7 | Stack: / (
- Read '-' (operator) -> Output: 12 7 | Stack: / ( -
- Read '3' (operand) -> Output: 12 7 3 | Stack: / ( -
- Read ')' -> Pop until '(' -> Output: 12 7 3 - | Stack: /
- Read '+' -> '/' has higher precedence than '+', so pop '/' and push '+' -> Output: 12 7 3 - / | Stack: +
- Read '2' (operand) -> Output: 12 7 3 - / 2 | Stack: +
- End of input -> Pop '+' ->
Postfix Expression: 12 7 3 - / 2 +

Part 2: Step-by-Step Evaluation of Postfix Expression (12 7 3 - / 2 +) using Operand Stack:
1. Scan 12: Push 12 -> Stack = [12]
2. Scan 7: Push 7 -> Stack = [12, 7]
3. Scan 3: Push 3 -> Stack = [12, 7, 3]
4. Scan '-': Pop 3 and 7, compute 7 - 3 = 4, push 4 -> Stack = [12, 4]
5. Scan '/': Pop 4 and 12, compute 12 / 4 = 3, push 3 -> Stack = [3]
6. Scan 2: Push 2 -> Stack = [3, 2]
7. Scan '+': Pop 2 and 3, compute 3 + 2 = 5, push 5 -> Stack = [5]

Final Evaluated Value: 5`,
            tags: ['Data Structures', 'Stack', 'Infix to Postfix', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-3',
            questionNo: '6.3',
            type: 'math',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Insert the keys {23, 43, 13, 27, 33} into a hash table of size 10 (indices 0 to 9) using the hash function h(k) = k mod 10 and resolve collisions using Linear Probing. Show the final state of the hash table.',
            solution: `Linear Probing Formula:
h(k, i) = (h(k) + i) mod 10, for probe index i = 0, 1, 2, ..., 9.

Step-by-Step Key Insertion:
1. Insert 23:
   - h(23) = 23 mod 10 = 3. Index 3 is empty -> Place 23 at Index 3.
2. Insert 43:
   - h(43) = 43 mod 10 = 3 (Collision at Index 3!).
   - Probe i = 1: (3 + 1) mod 10 = 4. Index 4 is empty -> Place 43 at Index 4.
3. Insert 13:
   - h(13) = 13 mod 10 = 3 (Collision at Index 3!).
   - Probe i = 1: Index 4 is occupied (43).
   - Probe i = 2: (3 + 2) mod 10 = 5. Index 5 is empty -> Place 13 at Index 5.
4. Insert 27:
   - h(27) = 27 mod 10 = 7. Index 7 is empty -> Place 27 at Index 7.
5. Insert 33:
   - h(33) = 33 mod 10 = 3 (Collision at Index 3!).
   - Probe i = 1 (Index 4 occupied), i = 2 (Index 5 occupied).
   - Probe i = 3: (3 + 3) mod 10 = 6. Index 6 is empty -> Place 33 at Index 6.

Final Hash Table State (Size 10):
- Index 0: [ Empty ]
- Index 1: [ Empty ]
- Index 2: [ Empty ]
- Index 3: [ 23 ]
- Index 4: [ 43 ]
- Index 5: [ 13 ]
- Index 6: [ 33 ]
- Index 7: [ 27 ]
- Index 8: [ Empty ]
- Index 9: [ Empty ]`,
            tags: ['Data Structures', 'Hashing', 'Linear Probing', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-4',
            questionNo: '6.4',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Explain the advantages of Encapsulation and Inheritance in Object-Oriented Programming (OOP) with suitable C++ or Java examples.',
            solution: `1. Encapsulation:
- Definition: Binding data fields (attributes) and the methods that manipulate them into a single class unit while restricting direct external access to internal state using access modifiers ('private').
- Advantages:
  * Data Hiding & Security: Prevents unauthorized or accidental corruption of sensitive state (e.g., an account balance cannot be set to a negative number directly).
  * Validation & Auditability: Public setter/getter methods enforce business rules before modifying internal fields.

2. Inheritance:
- Definition: A mechanism where a derived/child class acquires the properties and behaviors of a base/parent class ('extends' in Java, ':' in C++).
- Advantages:
  * Code Reusability: Common attributes and methods (e.g., accountNumber, deposit()) are written once in the base class and reused across SavingsAccount, CurrentAccount, and LoanAccount.
  * Runtime Polymorphism: Enables method overriding and dynamic dispatch.`,
            codeSolution: `// Java Example Demonstrating Encapsulation and Inheritance
class BankAccount {
    private String accountNo;
    private double balance; // Encapsulated private field

    public BankAccount(String accountNo, double initialBalance) {
        this.accountNo = accountNo;
        this.balance = Math.max(0, initialBalance);
    }

    public double getBalance() { return balance; }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
}

// Inheritance: SavingsAccount inherits from BankAccount
class SavingsAccount extends BankAccount {
    private double interestRate;

    public SavingsAccount(String accountNo, double initialBalance, double interestRate) {
        super(accountNo, initialBalance);
        this.interestRate = interestRate;
    }

    public void addYearlyInterest() {
        double interest = getBalance() * (interestRate / 100.0);
        deposit(interest);
    }
}`,
            solutionLanguage: 'java',
            tags: ['OOP', 'Encapsulation', 'Inheritance', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'State the four necessary (Coffman) conditions for a resource deadlock to occur in an Operating System. How can deadlock be prevented by invalidating each condition?',
            solution: `1. The Four Necessary Conditions for Deadlock (Coffman Conditions):
A deadlock can arise if and only if all four of the following conditions hold simultaneously:
(i) Mutual Exclusion: At least one resource must be held in a non-shareable mode (only one process can use the resource at a time).
(ii) Hold and Wait: A process must be currently holding at least one resource and requesting additional resources that are currently being held by other processes.
(iii) No Preemption: Resources cannot be forcibly taken away from a process holding them; they can only be released voluntarily by the process after completing its task.
(iv) Circular Wait: A closed chain of processes {P0, P1, ..., Pn} exists such that P0 is waiting for a resource held by P1, P1 is waiting for P2, ..., and Pn is waiting for a resource held by P0.

2. Deadlock Prevention Strategies:
- Invalidating Hold and Wait: Require a process to request and be allocated all its required resources before execution begins, or allow a process to request resources only when it currently holds none.
- Invalidating No Preemption: If a process holding certain resources requests another resource that cannot be immediately allocated, all resources currently held by that process are implicitly preempted (released).
- Invalidating Circular Wait (Most Practical): Impose a strict total ordering of all resource types R = {R1, R2, ..., Rm} and require every process to request resources strictly in increasing numerical order of enumeration.`,
            tags: ['Operating Systems', 'Deadlock', 'Coffman Conditions', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-6',
            questionNo: '6.6',
            type: 'math',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Calculate the total number of bits required to implement a direct-mapped cache memory of data capacity 64 KB with 4-word blocks in a 32-bit byte-addressed architecture (assume 1 word = 4 bytes and 1 valid bit per block).',
            solution: `Given Parameters:
- Cache Data Capacity = 64 KB = 2^16 bytes
- Block size = 4 words = 4 x 4 bytes = 16 bytes = 2^4 bytes
- Physical memory address size = 32 bits
- Valid bit per block = 1 bit

Step-by-Step Calculation:
1. Number of Cache Blocks (Lines):
   Number of blocks = Cache Capacity / Block Size = 2^16 bytes / 2^4 bytes = 2^12 = 4096 blocks.

2. Address Bit Partitioning (32-bit byte address):
   - Byte Offset within a 16-byte block = log2(16) = 4 bits.
   - Cache Index bits = log2(4096) = 12 bits.
   - Tag bits = 32 - 12 - 4 = 16 bits.

3. Bits per Cache Block (Line):
   - Data bits per block = 4 words x 32 bits/word = 128 bits.
   - Tag bits per block = 16 bits.
   - Valid bit per block = 1 bit.
   - Total bits per block = 128 + 16 + 1 = 145 bits.

4. Total Bits Required for the Entire Cache:
   Total Cache Bits = 4096 blocks x 145 bits/block
                    = 593,920 bits (or 580 Kb / 72.5 KB).`,
            tags: ['Computer Architecture', 'Cache Memory', 'Direct-Mapped Cache', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Medium'
          },
          {
            id: 'q-10184-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'Explain the five Maturity Levels of the Capability Maturity Model Integration (CMMI). Compare the Waterfall Model with Agile Software Development.',
            solution: `1. The 5 Maturity Levels of CMMI:
- Level 1 — Initial: Processes are unpredictable, ad-hoc, poorly controlled, and reactive. Success depends on individual heroics.
- Level 2 — Managed: Processes are characterized for individual projects (requirements management, project planning, configuration management) and is often reactive.
- Level 3 — Defined: Processes are well-characterized, standardized across the entire organization, documented in standards, procedures, tools, and methods (includes Verification & Validation).
- Level 4 — Quantitatively Managed: Processes are measured and controlled using statistical and quantitative techniques.
- Level 5 — Optimizing: Focuses on continuous process improvement through incremental and innovative technological improvements and defect prevention.

2. Waterfall vs Agile Comparison:
- Structure: Waterfall is linear and sequential (Requirements -> Design -> Code -> Test -> Deploy); Agile is iterative and incremental (1–4 week Sprints).
- Change Management: Waterfall resists requirement changes once a phase is signed off; Agile embraces changing requirements even late in development.
- Customer Involvement: Waterfall involves the client mainly at the beginning and final UAT; Agile involves the Product Owner continuously in every Sprint Review.`,
            tags: ['Software Engineering', 'CMMI', 'Waterfall vs Agile', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-8',
            questionNo: '6.8',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'A bank network administrator is given the Class C network 192.168.10.0/24 and needs to divide it into 4 equal subnets. State the new subnet mask, network address, usable host range, and broadcast address for each of the 4 subnets.',
            solution: `1. Subnetting Parameters:
- Base Network: 192.168.10.0/24
- Required Subnets: 4 = 2^2 -> Borrow 2 host bits.
- New Prefix & Subnet Mask: /26 -> 255.255.255.192
- Block Size = 2^(8 - 6) = 64 addresses per subnet (62 usable hosts per subnet).

2. Subnet Table:
- Subnet 1:
  * Network Address: 192.168.10.0/26
  * Usable Host Range: 192.168.10.1 – 192.168.10.62
  * Broadcast Address: 192.168.10.63

- Subnet 2:
  * Network Address: 192.168.10.64/26
  * Usable Host Range: 192.168.10.65 – 192.168.10.126
  * Broadcast Address: 192.168.10.127

- Subnet 3:
  * Network Address: 192.168.10.128/26
  * Usable Host Range: 192.168.10.129 – 192.168.10.190
  * Broadcast Address: 192.168.10.191

- Subnet 4:
  * Network Address: 192.168.10.192/26
  * Usable Host Range: 192.168.10.193 – 192.168.10.254
  * Broadcast Address: 192.168.10.255`,
            tags: ['Networking', 'Subnetting', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-9',
            questionNo: '6.9',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Compare Adjacency Matrix and Adjacency List representations of a graph G(V, E) in terms of space complexity, edge lookup time, and suitability for sparse vs dense graphs.',
            solution: `Comparison between Adjacency Matrix and Adjacency List for Graph G(V, E):

1. Space Complexity:
- Adjacency Matrix: Uses a V x V two-dimensional array -> O(V^2) space regardless of the number of edges.
- Adjacency List: Uses an array of V lists containing pointers to adjacent vertices -> O(V + E) space.

2. Edge Lookup Time (Checking if edge (u, v) exists):
- Adjacency Matrix: O(1) constant time lookup by checking Matrix[u][v].
- Adjacency List: O(degree(u)) time (up to O(V) in the worst case) as we must traverse u's adjacency list.

3. Iterating Over All Neighbors of Vertex u:
- Adjacency Matrix: O(V) time because the entire row u must be scanned.
- Adjacency List: O(degree(u)) time, visiting only actual neighbors.

4. Suitability:
- Adjacency Matrix is preferred for Dense Graphs (where E is close to V^2) or small graphs requiring fast O(1) edge existence checks.
- Adjacency List is strongly preferred for Sparse Graphs (where E << V^2, such as road networks or financial transaction graphs) to save memory and speed up BFS/DFS (O(V + E) vs O(V^2)).`,
            tags: ['Data Structures', 'Graphs', 'Adjacency Matrix vs List', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-10',
            questionNo: '6.10',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write C/C++ functions to perform In-order, Pre-order, and Post-order traversals of a Binary Tree.',
            solution: 'Recursive C/C++ functions for Pre-order (Root-Left-Right), In-order (Left-Root-Right), and Post-order (Left-Right-Root) binary tree traversals, each running in O(N) time complexity and O(H) auxiliary stack space.',
            codeSolution: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

// 1. Pre-order Traversal (Root -> Left -> Right)
void preOrder(struct Node* root) {
    if (root == NULL) return;
    printf("%d ", root->data);
    preOrder(root->left);
    preOrder(root->right);
}

// 2. In-order Traversal (Left -> Root -> Right)
void inOrder(struct Node* root) {
    if (root == NULL) return;
    inOrder(root->left);
    printf("%d ", root->data);
    inOrder(root->right);
}

// 3. Post-order Traversal (Left -> Right -> Root)
void postOrder(struct Node* root) {
    if (root == NULL) return;
    postOrder(root->left);
    postOrder(root->right);
    printf("%d ", root->data);
}`,
            solutionLanguage: 'c',
            tags: ['Binary Tree', 'Tree Traversal', 'C Programming', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-11',
            questionNo: '6.11',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Explain Linux File Permissions (r, w, x) across Owner, Group, and Others. What is the exact meaning of the command "chmod 754 transaction.log"?',
            solution: `1. Linux Permission Categories & Bits:
Every file/directory in Linux has three permission classes:
- Owner (User - u): The creator/owner of the file.
- Group (g): Users belonging to the file's assigned group.
- Others (o): All other system users.

Each class has 3 permission bits:
- Read (r = 4): View file contents or list directory entries.
- Write (w = 2): Modify file contents or create/delete files in a directory.
- Execute (x = 1): Run the file as a program/script or enter (cd into) a directory.

2. Meaning of "chmod 754 transaction.log":
- First digit 7 (Owner): 4 + 2 + 1 = rwx (Read, Write, and Execute permissions for the Owner).
- Second digit 5 (Group): 4 + 0 + 1 = r-x (Read and Execute permissions for Group members; no Write).
- Third digit 4 (Others): 4 + 0 + 0 = r-- (Read-only permission for Others; no Write or Execute).
- Resulting symbolic permission string: -rwxr-xr--`,
            tags: ['Linux', 'Operating Systems', 'File Permissions', 'chmod', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10184-6-12',
            questionNo: '6.12',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: `Consider the following three banking relations:
Customer(CustID, CustName, City)
Account(AccNo, CustID, BranchID, Balance)
Branch(BranchID, BranchName, City)
Write an SQL query to find the names of customers, their branch names, and account balances for all customers who hold an account in a branch located in the exact same city where they reside and have a balance greater than 50,000.`,
            solution: 'We join Customer, Account, and Branch on their foreign keys (CustID and BranchID), then filter using a WHERE clause checking c.City = b.City and a.Balance > 50000.',
            codeSolution: `SELECT 
    c.CustName,
    b.BranchName,
    c.City AS Customer_And_Branch_City,
    a.Balance
FROM Customer c
INNER JOIN Account a ON c.CustID = a.CustID
INNER JOIN Branch b ON a.BranchID = b.BranchID
WHERE c.City = b.City
  AND a.Balance > 50000
ORDER BY a.Balance DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Multi-Table Join', 'BIBM 10184 Real Question'],
            marks: 12.5,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 3. Job ID: 10152 (Combined 10 Banks Officer IT — Official BIBM Paper, Oct 14, 2023)
  {
    id: 'officer-it-10152',
    title: 'Officer (IT), Combined 10 Banks (Job ID-10152) — BIBM Official Paper',
    searchQuery: 'Combined Bank Officer IT Job ID 10152 BIBM written question paper solution October 14 2023',
    category: 'Officer (IT)',
    jobId: '10152',
    circularYear: '2021 Base (Exam Oct 14, 2023)',
    examDate: 'October 14, 2023',
    examBody: 'BIBM (Bangladesh Institute of Bank Management)',
    participatingBanks: [
      'Sonali Bank PLC',
      'Janata Bank PLC',
      'Agrani Bank PLC',
      'Rupali Bank PLC',
      'BDBL',
      'BKB',
      'RAKUB',
      'Probashi Kallyan Bank',
      'Ansar-VDP Unnayan Bank',
      'Karma Sangsthan Bank'
    ],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BIBM Question Paper)',
    summary: 'Authentic BIBM Written Question Paper for Combined 10 Banks Officer (IT) (Job ID: 10152, held on October 14, 2023). Features the exact BIBM written math problem on a father dividing Tk. 25,000 between two sons A and B (8% compound vs 10% simple profit), the exact SQL subquery analysis on employees/department, CMMI Level 3 Verification & Validation in software testing, Packet Sniffing vs Packet Spoofing, Matrix Multiplication, TDM vs FDM vs WDM, and Hypervisors.',
    keyTopics: [
      'Father Property Tk 25,000 Math (Compound vs Simple)',
      'SQL Subquery & HAVING Analysis',
      'CMMI Level 3 Verification & Validation',
      'Packet Sniffing vs Packet Spoofing',
      'Matrix Multiplication in C',
      'TDM vs FDM vs WDM Multiplexing',
      'Type-1 vs Type-2 Hypervisors',
      'BCNF vs 3NF Normalization',
      'Clustered vs Non-Clustered Index',
      'TCP 3-Way Handshake & SYN Flood'
    ],
    sections: [
      {
        id: 'sec-10152-general',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official BIBM General Section including Focus Writing, Translations, and the exact October 14, 2023 Written Mathematics problem.',
        questions: [
          {
            id: 'q-10152-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Focus Writing in Bangla (10 Marks):
সবুজ ব্যাংকিং (Green Banking) এবং পরিবেশবান্ধব টেকসই অর্থায়নে তথ্যপ্রযুক্তির ভূমিকা।`,
            solution: `সবুজ ব্যাংকিং (Green Banking) এবং পরিবেশবান্ধব টেকসই অর্থায়নে তথ্যপ্রযুক্তির ভূমিকা

১. ভূমিকা:
জলবায়ু পরিবর্তনের বিরূপ প্রভাব মোকাবিলা এবং পরিবেশের ভারসাম্য রক্ষায় ব্যাংকিং খাতের একটি যুগান্তকারী উদ্যোগ হলো 'গ্রিন ব্যাংকিং' বা সবুজ ব্যাংকিং। কাগজবিহীন (Paperless) ব্যাংকিং কার্যক্রম পরিচালনা এবং পরিবেশবান্ধব প্রকল্পে অর্থায়নই এর মূল লক্ষ্য।

২. তথ্যপ্রযুক্তির মাধ্যমে পেপারলেস ব্যাংকিং:
অনলাইন ব্যাংকিং, ই-স্টেটমেন্ট, ডিজিটাল লোন অ্যাপ্লিকেশন, ই-কেওয়াইসি এবং মোবাইল ব্যাংকিং অ্যাপ ব্যবহারের ফলে ব্যাংকগুলোতে কাগজের ব্যবহার বিপুল পরিমাণে হ্রাস পেয়েছে। এছাড়া সৌরবিদ্যুৎ চালিত এটিএম বুথ এবং শক্তি-সাশ্রয়ী (Energy-Efficient) ডেটা সেন্টার স্থাপনের মাধ্যমে কার্বন নিঃসরণ কমানো হচ্ছে।

৩. উপসংহার:
বাংলাদেশ ব্যাংকের নির্দেশনা অনুযায়ী টেকসই ও পরিবেশবান্ধব অর্থায়ন নিশ্চিত করতে তথ্যপ্রযুক্তির সর্বোচ্চ ব্যবহার এবং গ্রিন ব্যাংকিং নীতিমালার সফল বাস্তবায়ন অপরিহার্য।`,
            tags: ['Focus Writing Bangla', 'Green Banking', 'BIBM 10152'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Focus Writing in English (10 Marks):
"The Imperative of Green Banking and Energy-Efficient Data Centers in Bangladesh."`,
            solution: `Focus Writing: The Imperative of Green Banking and Energy-Efficient Data Centers in Bangladesh

Green Banking refers to banking practices that promote environmentally sustainable investments and reduce the internal carbon footprint of financial institutions. In Bangladesh, one of the most climate-vulnerable nations in the world, green banking is both an environmental necessity and a regulatory priority championed by Bangladesh Bank.

A critical yet often overlooked aspect of green banking is green IT infrastructure. Enterprise bank data centers run thousands of servers, storage arrays, and cooling units 24/7. By adopting server virtualization, cloud consolidation, hot/cold aisle containment, and solar-powered branch/ATM infrastructure, banks can drastically lower their Power Usage Effectiveness (PUE) ratio. Combined with paperless workflows—such as e-KYC, digital signatures, and automated electronic statements—IT-driven green banking paves the way for a sustainable financial future.`,
            tags: ['Focus Writing English', 'Green Data Centers', 'BIBM 10152'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-3',
            questionNo: '3 & 4',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `3. Translate into English (5 Marks):
"প্রযুক্তিগত উদ্ভাবন ব্যাংকিং সেবাকে মানুষের হাতের মুঠোয় নিয়ে এসেছে, কিন্তু একই সাথে তথ্যের নিরাপত্তা নিশ্চিত করার চ্যালেঞ্জও বাড়িয়ে দিয়েছে।"

4. Translate into Bangla (5 Marks):
"Financial inclusion cannot be achieved merely by opening bank accounts; it requires affordable digital financial services tailored to the needs of rural citizens."`,
            solution: `3. English Translation:
"Technological innovation has brought banking services to the fingertips of people, but at the same time, it has increased the challenge of ensuring information security."

4. Bangla Translation:
"কেবল ব্যাংক হিসাব খোলার মাধ্যমেই আর্থিক অন্তর্ভুক্তি অর্জন করা সম্ভব নয়; এর জন্য গ্রামীণ নাগরিকদের চাহিদার সাথে সামঞ্জস্যপূর্ণ ও সাশ্রয়ী ডিজিটাল আর্থিক সেবা প্রয়োজন।"`,
            tags: ['Translation', 'BIBM 10152'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-10152-5',
            questionNo: '5.1',
            type: 'math',
            topicCategory: 'Focus Writing & Language',
            questionText: `Official BIBM Written Mathematics Question (10 Marks):
A father has divided his property between his two sons A and B. A invests the amount at a compound profit of 8% p.a. B invests the amount at 10% p.a. simple profit. At the end of 2 years, the profit received by B is Taka 1336 more than the interest received by A. Find A's share in the father's property if the total property is Taka 25,000.`,
            solution: `Step-by-Step Mathematical Solution:
1. Let A's share in the father's property be Taka x.
   Since the total property is Taka 25,000, B's share = Taka (25,000 - x).

2. Compound Profit received by A after 2 years at 8% p.a.:
   Compound Profit of A = x * [(1 + 8/100)^2 - 1]
                        = x * [(1.08)^2 - 1]
                        = x * [1.1664 - 1]
                        = 0.1664x

3. Simple Profit received by B after 2 years at 10% p.a.:
   Simple Profit of B = (25,000 - x) * (10 / 100) * 2
                      = (25,000 - x) * 0.20
                      = 5,000 - 0.20x

4. According to the question, B's profit is Taka 1336 more than A's profit:
   (5,000 - 0.20x) - 0.1664x = 1336
   => 5,000 - 0.3664x = 1336
   => 0.3664x = 5,000 - 1336
   => 0.3664x = 3,664
   => x = 3,664 / 0.3664 = 10,000

5. Verification:
   - A's share = Taka 10,000 -> Compound profit at 8% for 2 years = 10,000 * 0.1664 = Taka 1,664.
   - B's share = Taka 15,000 -> Simple profit at 10% for 2 years = 15,000 * 0.20 = Taka 3,000.
   - Difference = 3,000 - 1,664 = Taka 1,336 (Matches exactly!).

Answer: A's share in the father's property is Taka 10,000.`,
            tags: ['Written Math', 'Compound Interest', 'BIBM 10152 Real Question'],
            marks: 10,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-10152-subject',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.10) — (10 x 15 = 150 Marks)',
        marks: 150,
        description: 'Official BIBM Subject Related CSE/IT Questions from the Combined 10 Banks Officer (IT) (Job ID: 10152) exam.',
        questions: [
          {
            id: 'q-10152-6-1',
            questionNo: '6.1',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: `Explain step-by-step what the following SQL query does and state the order of execution of its clauses:
SELECT department_name, AVG(salary) AS average_salary
FROM employees e
JOIN department d ON e.department_id = d.department_id
WHERE salary > (SELECT AVG(salary) FROM employees)
GROUP BY department_name
HAVING COUNT(*) > 2
ORDER BY average_salary DESC;`,
            solution: `1. What the SQL Query Does:
This query retrieves the name of each department and the average salary of its above-average earners, specifically for departments that have more than 2 employees earning above the company-wide average salary, sorted from highest to lowest average salary.

2. Step-by-Step Logical Execution Order of Clauses:
- Step 1 (Subquery in WHERE): Executes (SELECT AVG(salary) FROM employees) to compute the overall company-wide average salary across all employees.
- Step 2 (FROM & JOIN): Joins the 'employees' table (aliased as e) and 'department' table (aliased as d) matching rows where e.department_id = d.department_id.
- Step 3 (WHERE): Filters the joined rows, keeping ONLY individual employees whose salary is strictly greater than the company-wide average salary.
- Step 4 (GROUP BY): Groups the remaining (above-average earning) employee rows by 'department_name'.
- Step 5 (HAVING): Filters the grouped departments, retaining ONLY those departments that have more than 2 employees (COUNT(*) > 2) who passed the WHERE filter.
- Step 6 (SELECT): Computes AVG(salary) as 'average_salary' for each qualifying department group.
- Step 7 (ORDER BY): Sorts the final result set by 'average_salary' in descending order.`,
            tags: ['SQL', 'Query Execution Order', 'Subquery', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-6-2',
            questionNo: '6.2',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: `Verification and validation are two key process areas at CMMI Level 3. For both of these areas, provide:
1. A precise definition.
2. A description of how you can fulfill these areas in your software testing activities.`,
            solution: `1. Definitions (CMMI Level 3 — Defined):
- Verification ("Are we building the product right?"):
  Verification is the process of evaluating software work products (requirements, design documents, source code) against their specified technical requirements and standards to ensure that each phase of the SDLC is built according to the specifications of the previous phase.
- Validation ("Are we building the right product?"):
  Validation is the process of evaluating the final integrated software system in its intended operational environment to ensure that it fulfills the actual business needs and expectations of the end user/customer.

2. How to Fulfill Verification and Validation in Software Testing Activities:
- Fulfilling Verification in Testing:
  * Conducting formal Peer Reviews, Walkthroughs, and Fagan Inspections of requirement specs, ER diagrams, and source code.
  * Executing automated Static Code Analysis (SonarQube), Unit Testing (JUnit/pytest), and Integration Testing against API contracts.
- Fulfilling Validation in Testing:
  * Conducting End-to-End System Testing, User Acceptance Testing (UAT), Beta Testing, and Operational Readiness Testing (ORT) with real banking business scenarios and actual end-users.`,
            tags: ['Software Engineering', 'CMMI Level 3', 'Verification vs Validation', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10152-6-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is the difference between Packet Sniffing (Snooping) and Packet Spoofing in computer networks? How can a bank protect its network against both attacks?',
            solution: `1. Difference between Packet Sniffing and Packet Spoofing:
- Packet Sniffing (Passive Attack / Eavesdropping):
  * Nature: A passive reconnaissance attack where an attacker captures and inspects data packets flowing across a network segment using tools like Wireshark or tcpdump (by placing the NIC in promiscuous mode).
  * Goal: To steal unencrypted credentials, session tokens, or sensitive financial data without altering the packet stream.
  * Security Property Violated: Confidentiality.

- Packet Spoofing (Active Attack / Masquerading):
  * Nature: An active attack where an attacker crafts and injects counterfeit packets into the network with a forged source IP address, MAC address (ARP Spoofing), or DNS reply.
  * Goal: To impersonate a trusted server/host, bypass IP-based access control lists, perform Man-in-the-Middle (MitM) interception, or launch reflection DDoS attacks.
  * Security Property Violated: Integrity and Authenticity.

2. Countermeasures in a Banking Network:
- Against Packet Sniffing: Enforce end-to-end encryption (TLS 1.3, SSH, IPsec VPN) so captured payloads are unreadable ciphertext; use switched networks with VLAN segmentation instead of shared hubs.
- Against Packet Spoofing: Enable Dynamic ARP Inspection (DAI) and DHCP Snooping on Layer-2 switches, Ingress/Egress packet filtering (BCP 38), and cryptographic mutual authentication (mTLS / Digital Signatures).`,
            tags: ['Network Security', 'Packet Sniffing', 'Packet Spoofing', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10152-6-4',
            questionNo: '6.4',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a complete C program to multiply two matrices A (of size R1 x C1) and B (of size R2 x C2) after validating the matrix multiplication compatibility condition.',
            solution: 'Two matrices A (R1 x C1) and B (R2 x C2) are compatible for multiplication if and only if C1 == R2. The resulting product matrix C has dimensions R1 x C2, and each element C[i][j] = Sum_{k=0 to C1-1} A[i][k] * B[k][j] in O(R1 * C1 * C2) time.',
            codeSolution: `#include <stdio.h>

int main() {
    int r1 = 2, c1 = 3, r2 = 3, c2 = 2;
    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int B[3][2] = {{7, 8}, {9, 1}, {2, 3}};
    int C[2][2] = {0};

    if (c1 != r2) {
        printf("Matrix multiplication not possible: C1 != R2\\n");
        return 1;
    }

    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            C[i][j] = 0;
            for (int k = 0; k < c1; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    printf("Product Matrix C (%dx%d):\\n", r1, c2);
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            printf("%d ", C[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['C Programming', 'Matrix Multiplication', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10152-6-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Time-Division Multiplexing (TDM), Frequency-Division Multiplexing (FDM), and Wavelength-Division Multiplexing (WDM) in data communications.',
            solution: `Comparison of Multiplexing Techniques:

1. Frequency-Division Multiplexing (FDM):
- Signal Type: Analog technique.
- Mechanism: The total bandwidth of the communication link is divided into multiple non-overlapping frequency sub-channels separated by guard bands. Each user transmits simultaneously on their assigned frequency band.
- Applications: FM/AM Radio broadcasting, Cable TV, first-generation cellular (1G).

2. Wavelength-Division Multiplexing (WDM):
- Signal Type: Optical analog technique over fiber-optic cables.
- Mechanism: Combines multiple optical carrier signals of different wavelengths (colors of laser light) onto a single optical fiber using a prism/diffraction multiplexer, and splits them at the receiver.
- Applications: Submarine optical cables (SEA-ME-WE 4/5), SONET/SDH backbone networks (DWDM supports 80–160+ channels per fiber).

3. Time-Division Multiplexing (TDM):
- Signal Type: Digital technique.
- Mechanism: All channels share the entire bandwidth of the link, but time is divided into recurrent frames of fixed time slots. In Synchronous TDM, each source gets a dedicated slot per frame; in Statistical TDM, slots are allocated dynamically on demand.
- Applications: ISDN, T1/E1 digital telephone lines, SONET.`,
            tags: ['Data Communication', 'TDM', 'FDM', 'WDM', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10152-6-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'What is Virtualization? Differentiate between Type-1 (Bare-Metal) and Type-2 (Hosted) Hypervisors with real-world examples.',
            solution: `1. Virtualization:
Virtualization is an abstraction layer technology that decouples physical hardware resources (CPU, RAM, Storage, NIC) from operating systems, allowing multiple isolated Virtual Machines (VMs) to run concurrently on a single physical host server.

2. Type-1 (Bare-Metal) vs Type-2 (Hosted) Hypervisors:
- Architecture:
  * Type-1 Hypervisor runs directly on the bare-metal physical server hardware without any underlying host OS.
  * Type-2 Hypervisor runs as an application layer on top of a conventional Host Operating System (such as Windows, macOS, or Linux).
- Performance & Hardware Overhead:
  * Type-1 has near-native hardware performance and minimal latency because it communicates directly with CPU virtualization extensions (Intel VT-x / AMD-V).
  * Type-2 incurs higher latency and resource overhead because all I/O and memory requests pass through the Host OS kernel.
- Fault Isolation & Security:
  * Type-1 is highly secure; a crash in one guest VM does not affect other VMs.
  * In Type-2, if the underlying Host OS crashes or is compromised, all running guest VMs fail simultaneously.
- Real-World Examples:
  * Type-1 Examples: VMware ESXi, Microsoft Hyper-V, Linux KVM, Citrix XenServer.
  * Type-2 Examples: Oracle VirtualBox, VMware Workstation / Fusion, Parallels Desktop.`,
            tags: ['Cloud Computing', 'Virtualization', 'Hypervisors', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10152-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Define Functional Dependency. Differentiate between Third Normal Form (3NF) and Boyce-Codd Normal Form (BCNF) with a suitable relational schema example.',
            solution: `1. Functional Dependency (X -> Y):
In a relation R, attribute set Y is functionally dependent on attribute set X if and only if each X value is associated with precisely one Y value at any given time.

2. Difference between 3NF and BCNF:
- Third Normal Form (3NF): A relation R is in 3NF if it is in 2NF and for every non-trivial functional dependency X -> Y, at least one of the following holds:
  (a) X is a superkey of R, OR
  (b) Y is a prime attribute (each attribute in Y is part of some candidate key).
- Boyce-Codd Normal Form (BCNF): A relation R is in BCNF if for EVERY non-trivial functional dependency X -> Y, X MUST be a superkey of R (condition (b) for prime attributes is removed).

3. Example Showing a Relation in 3NF but NOT in BCNF:
Consider Enrollment(StudentID, Course, Instructor) with FDs:
- FD1: {StudentID, Course} -> Instructor (Candidate Key = {StudentID, Course})
- FD2: Instructor -> Course (Each instructor teaches only one course, and Course is a prime attribute).
Here, FD2 satisfies 3NF because Course is a prime attribute, but violates BCNF because 'Instructor' is NOT a superkey. To convert to BCNF, decompose into R1(Instructor, Course) and R2(StudentID, Instructor).`,
            tags: ['DBMS', 'Normalization', '3NF vs BCNF', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-6-8',
            questionNo: '6.8',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Differentiate between a Clustered Index and a Non-Clustered Index in a relational database. Why can a database table have only one Clustered Index?',
            solution: `1. Clustered Index vs Non-Clustered Index:
- Physical Data Ordering:
  * A Clustered Index determines and sorts the actual physical storage order of data rows on disk pages. The leaf nodes of a Clustered Index ARE the actual data pages.
  * A Non-Clustered Index stores a separate B+ Tree structure containing the indexed key columns along with a row locator/pointer (RowID or Clustered Key) pointing to the actual data row.
- Lookup Speed:
  * Clustered Index is faster for range queries (BETWEEN, >, <) and primary key lookups because rows are stored contiguously on disk without extra pointer hops.
  * Non-Clustered Index requires an additional bookmark/key lookup to fetch non-indexed columns from the base table (unless it is a covering index).

2. Why a Table Can Have Only One Clustered Index:
Because the actual table rows on disk can physically be sorted in only ONE sequential order at any given time. To sort the same data in additional orders, separate Non-Clustered Index structures with pointers must be created (up to 999 per table in SQL Server).`,
            tags: ['DBMS', 'Clustered vs Non-Clustered Index', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10152-6-9',
            questionNo: '6.9',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: `Determine the exact output of the following C program and trace the pointer operations step-by-step:
#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;
    printf("%d\\n", *p++);
    printf("%d\\n", *++p);
    printf("%d\\n", ++*p);
    printf("%d\\n", *(p + 1));
    return 0;
}`,
            solution: `Step-by-Step Pointer Execution Trace:
Initially: arr = {10, 20, 30, 40, 50}, and pointer p points to arr[0] (value 10).

1. Statement 1: printf("%d\\n", *p++);
   - Postfix increment p++ has higher precedence than *, so p++ returns the current address (arr[0]) to be dereferenced, and THEN increments p to point to arr[1].
   - Output 1: 10 (and now p points to arr[1] = 20).

2. Statement 2: printf("%d\\n", *++p);
   - Prefix increment ++p increments pointer p first so p now points to arr[2], and then dereferences it.
   - Output 2: 30 (and p points to arr[2] = 30).

3. Statement 3: printf("%d\\n", ++*p);
   - Dereferences p first (*p is arr[2] = 30), and increments the value stored at arr[2] from 30 to 31. Pointer p remains at arr[2].
   - Output 3: 31 (now arr = {10, 20, 31, 40, 50}, p points to arr[2]).

4. Statement 4: printf("%d\\n", *(p + 1));
   - Reads the element at p + 1, which is arr[3].
   - Output 4: 40.

Final Printed Output:
10
30
31
40`,
            tags: ['C Programming', 'Pointers', 'Output Tracing', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10152-6-10',
            questionNo: '6.10',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the TCP 3-Way Handshake connection establishment mechanism with sequence and acknowledgment numbers. How does a TCP SYN Flood attack exploit this mechanism, and how do SYN Cookies mitigate it?',
            solution: `1. TCP 3-Way Handshake:
- Step 1 (SYN): Client sends a TCP segment with SYN=1 and an Initial Sequence Number (Seq = x) to the Server. Client enters SYN_SENT state.
- Step 2 (SYN-ACK): Server allocates a TCB buffer in its SYN backlog queue, replies with SYN=1, ACK=1, its own initial sequence number (Seq = y), and Acknowledgment number (Ack = x + 1). Server enters SYN_RCVD state.
- Step 3 (ACK): Client responds with ACK=1, Seq = x + 1, Ack = y + 1. Both enter ESTABLISHED state.

2. How TCP SYN Flood Exploits the Handshake:
An attacker sends thousands of spoofed SYN packets (Step 1) with fake source IP addresses and never sends the final ACK (Step 3). The server allocates memory in its half-open connection backlog queue (SYN_RCVD) for each spoofed SYN until the queue fills up completely, denying legitimate banking clients from connecting.

3. Mitigation via SYN Cookies:
With SYN Cookies enabled, the server does NOT allocate a TCB buffer upon receiving a SYN. Instead, it encodes the connection state (client IP/port, timestamp, MSS, and a cryptographic hash secret) directly into the 32-bit server sequence number 'y' sent in the SYN-ACK. Memory is allocated ONLY after the client returns a valid ACK (Ack = y + 1) that passes hash verification.`,
            tags: ['Networking', 'TCP 3-Way Handshake', 'SYN Flood', 'BIBM 10152 Real Question'],
            marks: 15,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 4. Job ID: 10229 (Officer IT, Combined Bank — Aug 18, 2024)
  {
    id: 'officer-it-10229',
    title: 'Officer (IT), Combined Bank (Job ID-10229) — BIBM Official Format',
    searchQuery: 'Officer (IT), Combined Bank (Job ID: 10229) question paper pdf',
    category: 'Officer (IT)',
    jobId: '10229',
    circularYear: '2023 (Exam Aug 18, 2024)',
    examDate: 'August 18, 2024',
    examBody: 'BIBM (Bangladesh Institute of Bank Management)',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Probashi Kallyan Bank'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BSCS / BIBM Format)',
    summary: 'Recruitment examination conducted by BIBM under Bankers Selection Committee for Officer (IT) (Job ID: 10229). Structured in official Part 1 (Focus Writing in Bangla & English, Translation, and Analytical Math — 50 Marks) and Part 2 (Subject Related Questions 6.1–6.10 covering SQL HAVING, B+ Tree Indexing, /27 Subnetting, Java OOP Polymorphism, QuickSort Partitioning, and ISO 27001 / PCI-DSS — 150 Marks).',
    keyTopics: [
      'SQL Grouping & HAVING on Withdrawals',
      'B-Tree vs B+ Tree in Core Banking',
      'Subnetting 172.16.20.0/24 into /27',
      'Java Runtime Polymorphism & Upcasting',
      'QuickSort Lomuto Partitioning & Complexity',
      'PCI-DSS, HSM & Tokenization',
      'Deadlock Banker Algorithm',
      'DNS Resolution & ARP'
    ],
    sections: [
      {
        id: 'sec-10229-general',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official Part 1: Bangla Focus Writing, English Focus Writing, Bi-directional Translation, and Analytical Math.',
        questions: [
          {
            id: 'q-10229-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: 'Focus Writing in Bangla (10 Marks): বাংলাদেশে এজেন্ট ব্যাংকিং ও গ্রামীণ অর্থনীতির রূপান্তরে তথ্যপ্রযুক্তির অবদান।',
            solution: `বাংলাদেশে এজেন্ট ব্যাংকিং ও গ্রামীণ অর্থনীতির রূপান্তরে তথ্যপ্রযুক্তির অবদান

১. ভূমিকা:
বাংলাদেশের গ্রামীণ ও প্রত্যন্ত অঞ্চলের ব্যাংকিং সেবাবঞ্চিত মানুষকে আনুষ্ঠানিক ব্যাংকিং চ্যানেলে অন্তর্ভুক্ত করার লক্ষ্যে ২০১৩ সালে বাংলাদেশ ব্যাংক এজেন্ট ব্যাংকিং নীতিমালা প্রবর্তন করে। তথ্যপ্রযুক্তির (বায়োমেট্রিক ফিঙ্গারপ্রিন্ট ডিভাইস, পস টার্মিনাল ও রিয়েল-টাইম কোর ব্যাংকিং সংযোগ) কল্যাণে এটি আজ গ্রামীণ অর্থনীতির অন্যতম প্রধান স্তম্ভে পরিণত হয়েছে।

২. প্রবাসী রেমিট্যান্স ও ক্ষুদ্র সঞ্চয়:
এজেন্ট ব্যাংকিং আউটলেটের মাধ্যমে প্রবাসীদের পাঠানো রেমিট্যান্স দ্রুত ও নিরাপদে গ্রামের বাড়িতে পৌঁছে যাচ্ছে। পাশাপাশি গ্রামীণ নারীদের ক্ষুদ্র সঞ্চয় এবং কৃষি ও এসএমই ঋণ বিতরণে এজেন্ট ব্যাংকিং অভূতপূর্ব সাফল্য দেখিয়েছে।`,
            tags: ['Focus Writing Bangla', 'Agent Banking', 'Job ID 10229'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: 'Focus Writing in English (10 Marks): Role of Artificial Intelligence and Machine Learning in Detecting Banking Fraud and Anti-Money Laundering (AML).',
            solution: `Role of AI and Machine Learning in Detecting Banking Fraud and AML

Traditional rule-based fraud detection systems rely on static thresholds (such as flagging any transaction above BDT 5,00,000), which generate excessive false positives and fail to catch sophisticated, low-value distributed attacks.

Modern Machine Learning (ML) models analyze real-time behavioral features—device fingerprinting, geolocation velocity, merchant category, and historical spending patterns—within milliseconds. Unsupervised anomaly detection algorithms (such as Isolation Forests and Autoencoders) identify zero-day fraud patterns, while Graph Neural Networks (GNNs) uncover complex circular money-laundering rings across multiple mule accounts.`,
            tags: ['Focus Writing English', 'AI in Banking', 'AML', 'Job ID 10229'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-3-4-5',
            questionNo: '3, 4 & 5',
            type: 'math',
            topicCategory: 'Focus Writing & Language',
            questionText: `3. Translate into English (10 Marks):
"একটি দেশের কেন্দ্রীয় ব্যাংক মুদ্রানীতি প্রণয়ন এবং তফসিলি ব্যাংকগুলোর তদারকির মাধ্যমে সামষ্টিক অর্থনৈতিক স্থিতিশীলতা বজায় রাখে।"

4. Translate into Bangla (10 Marks):
"Data backup and disaster recovery planning are critical for ensuring uninterrupted banking operations during natural calamities or cyber incidents."

5. Analytical Math (10 Marks):
A server cluster processes a batch of 12,000 transactions in 40 minutes using 6 worker nodes. How many additional worker nodes of the same capacity are required to process 27,000 transactions in 30 minutes?`,
            solution: `3. English Translation:
"The central bank of a country maintains macroeconomic stability by formulating monetary policy and supervising scheduled banks."

4. Bangla Translation:
"প্রাকৃতিক দুর্যোগ বা সাইবার হামলার সময় নিরবচ্ছিন্ন ব্যাংকিং কার্যক্রম নিশ্চিত করার জন্য ডেটা ব্যাকআপ এবং ডিজাস্টার রিকভারি পরিকল্পনা অত্যন্ত গুরুত্বপূর্ণ।"

5. Analytical Math Solution:
- Rate of 1 worker node = 12,000 / (6 nodes * 40 minutes) = 50 transactions per minute.
- In 30 minutes, 1 worker node can process = 50 * 30 = 1,500 transactions.
- Total worker nodes needed for 27,000 transactions in 30 minutes = 27,000 / 1,500 = 18 nodes.
- Additional worker nodes required = 18 - 6 = 12 worker nodes.`,
            tags: ['Translation', 'Math', 'Job ID 10229'],
            marks: 30,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-10229-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.10) — (10 x 15 = 150 Marks)',
        marks: 150,
        description: 'Computer Science, Database Management, Networking, Software Engineering and FinTech (150 Marks).',
        questions: [
          {
            id: 'q-10229-6-1',
            questionNo: '6.1',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider the banking database tables: Account(AccNo, CustID, AccType, Balance, BranchCode) and Transaction(TxnID, AccNo, TxnDate, TxnType, Amount). Write an SQL query to find the account numbers, customer IDs, and total withdrawal amounts for all Savings accounts ("SB") that have carried out more than 3 withdrawals in the month of July 2024 with a cumulative withdrawal amount exceeding BDT 1,00,000.',
            solution: 'Join Account and Transaction on AccNo, filter by AccType = \'SB\', withdrawal transaction type, and July 2024 dates, then group by AccNo and CustID with HAVING COUNT(TxnID) > 3 AND SUM(Amount) > 100000.',
            codeSolution: `SELECT 
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
            tags: ['SQL', 'DBMS', 'GROUP BY', 'HAVING'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-6-2',
            questionNo: '6.2',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'What is a B-Tree and B+ Tree? Why are B+ Trees preferred over Binary Search Trees (BST) or AVL Trees for implementing database indexes in Core Banking Systems (CBS)?',
            solution: `1. Definition:
- A B-Tree is a self-balancing multi-way search tree where internal nodes store both routing keys and data pointers.
- A B+ Tree stores all actual data records/pointers exclusively in leaf nodes, while internal nodes store only routing keys, and leaf nodes are linked sequentially as a doubly linked list.

2. Why B+ Trees are Preferred in Core Banking Databases:
- Disk Block / I/O Efficiency: High fan-out (100 to 1000+ keys per node) keeps tree height to 3–4 levels for millions of rows, requiring at most 3–4 disk page reads.
- Sequential Range Scans: Linked leaf nodes allow date-range account statement queries to scan sequentially without traversing back up the tree.`,
            tags: ['Data Structures', 'DBMS', 'B+ Tree', 'Indexing'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-6-3',
            questionNo: '6.3',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'A commercial bank branch is assigned the network IP block 172.16.20.0/24. The branch manager needs to divide this network into 6 separate departments, each requiring up to 25 host machines. (i) Determine the required subnet mask in slash notation and dotted decimal. (ii) List the Network Address, Usable Host Range, and Broadcast Address for the first 3 subnets.',
            solution: `1. Subnet Mask Calculation:
- Hosts needed per subnet = 25 -> 2^5 - 2 = 30 >= 25 (5 host bits).
- Prefix = 32 - 5 = /27 (creates 2^3 = 8 subnets, accommodating 6 departments).
- Dotted Decimal Mask = 255.255.255.224 (Block size = 32).

2. First 3 Subnets:
- Subnet 1: Network 172.16.20.0/27 | Hosts 172.16.20.1 – 172.16.20.30 | Broadcast 172.16.20.31
- Subnet 2: Network 172.16.20.32/27 | Hosts 172.16.20.33 – 172.16.20.62 | Broadcast 172.16.20.63
- Subnet 3: Network 172.16.20.64/27 | Hosts 172.16.20.65 – 172.16.20.94 | Broadcast 172.16.20.95`,
            tags: ['Networking', 'Subnetting', 'IPv4'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-6-4',
            questionNo: '6.4',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Explain Runtime Polymorphism (Dynamic Method Dispatch) in Java/C++. Write a program demonstrating a base class BankAccount and derived classes SavingsAccount and FixedDepositAccount overriding calculateInterest().',
            solution: 'Runtime polymorphism resolves overridden method calls at runtime based on the actual object instance rather than the reference variable type.',
            codeSolution: `abstract class BankAccount {
    protected String accountHolder;
    protected double principalBalance;

    public BankAccount(String accountHolder, double principalBalance) {
        this.accountHolder = accountHolder;
        this.principalBalance = principalBalance;
    }

    public abstract double calculateInterest();
}

class SavingsAccount extends BankAccount {
    public SavingsAccount(String holder, double balance) { super(holder, balance); }
    @Override
    public double calculateInterest() { return principalBalance * 0.055; }
}

class FixedDepositAccount extends BankAccount {
    public FixedDepositAccount(String holder, double balance) { super(holder, balance); }
    @Override
    public double calculateInterest() { return principalBalance * 0.0925; }
}`,
            solutionLanguage: 'java',
            tags: ['OOP', 'Polymorphism', 'Java'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10229-6-5',
            questionNo: '6.5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a function to implement the QuickSort partitioning algorithm. State the best-case, average-case, and worst-case time complexities of QuickSort and explain when the worst case occurs.',
            solution: 'Best/Average Case: O(N log N). Worst Case: O(N^2) when the array is already sorted and the first/last element is chosen as pivot. Mitigated via Randomized Pivot or Median-of-Three.',
            codeSolution: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    return i + 1;
}`,
            solutionLanguage: 'c',
            tags: ['Algorithms', 'QuickSort', 'Sorting'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-6-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the role of Hardware Security Modules (HSM), Tokenization, and PCI-DSS Compliance in securing ATM and Payment Card transactions.',
            solution: `1. HSM (Hardware Security Module): Tamper-resistant physical appliance (FIPS 140-3 Level 3) that stores cryptographic master keys and verifies ATM PIN blocks without exposing keys in host RAM.
2. Tokenization: Replaces the 16-digit Primary Account Number (PAN) with a surrogate token so merchants never store raw card numbers.
3. PCI-DSS Compliance: Enforces 12 security requirements including encrypted PAN transmission, never storing CVV/PIN blocks after authorization, and regular quarterly ASV scans.`,
            tags: ['Cybersecurity', 'PCI-DSS', 'HSM', 'Tokenization'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Differentiate between Preemptive and Non-Preemptive CPU Scheduling. Given 4 processes P1(Arrival=0, Burst=8), P2(Arrival=1, Burst=4), P3(Arrival=2, Burst=9), P4(Arrival=3, Burst=5), calculate the Average Waiting Time using Shortest Remaining Time First (SRTF).',
            solution: `SRTF Gantt Chart Execution:
- t=0 to 1: P1 runs (remaining=7)
- t=1 to 5: P2 runs to completion (Burst=4 < 7). P2 Finish = 5, Turnaround = 5 - 1 = 4, Waiting = 0.
- t=5 to 10: P4 runs to completion (Burst=5 < P1's 7 and P3's 9). P4 Finish = 10, Turnaround = 10 - 3 = 7, Waiting = 7 - 5 = 2.
- t=10 to 17: P1 runs to completion. P1 Finish = 17, Turnaround = 17 - 0 = 17, Waiting = 17 - 8 = 9.
- t=17 to 26: P3 runs to completion. P3 Finish = 26, Turnaround = 26 - 2 = 24, Waiting = 24 - 9 = 15.

Average Waiting Time = (9 + 0 + 15 + 2) / 4 = 26 / 4 = 6.5 ms.`,
            tags: ['Operating Systems', 'CPU Scheduling', 'SRTF'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10229-6-8',
            questionNo: '6.8',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain the ACID properties of a database transaction using a bank fund transfer of BDT 50,000 from Account A to Account B. How does Write-Ahead Logging (WAL) guarantee Atomicity and Durability?',
            solution: `1. ACID Properties:
- Atomicity: Both debit(A, 50000) and credit(B, 50000) succeed or both roll back.
- Consistency: Total money supply A + B remains invariant before and after the transfer.
- Isolation: Concurrent transactions cannot see an intermediate state where A is debited but B is not yet credited.
- Durability: Committed changes survive power loss.

2. Write-Ahead Logging (WAL):
Before dirty pages are flushed to disk, UNDO and REDO log records are forced to non-volatile disk. During crash recovery (ARIES), uncommitted transactions are rolled back using UNDO logs (Atomicity) and committed transactions are replayed using REDO logs (Durability).`,
            tags: ['DBMS', 'ACID', 'WAL'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10229-6-9',
            questionNo: '6.9',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is ARP (Address Resolution Protocol)? Explain why ARP is stateless and how ARP Cache Poisoning (ARP Spoofing) enables a Man-in-the-Middle (MitM) attack on a local subnet.',
            solution: `1. ARP: Maps a known 32-bit IPv4 address to a 48-bit MAC address within a broadcast domain via an ARP Request (Broadcast FF:FF:FF:FF:FF:FF) and ARP Reply (Unicast).
2. ARP Cache Poisoning: Because standard ARP is stateless and accepts unsolicited Gratuitous ARP replies without authentication, an attacker sends forged ARP replies claiming the Default Gateway's IP belongs to the attacker's MAC address. Victim traffic then routes through the attacker's host (MitM).
3. Defense: Dynamic ARP Inspection (DAI) combined with DHCP Snooping on managed switches.`,
            tags: ['Networking', 'ARP Spoofing', 'DAI'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10229-6-10',
            questionNo: '6.10',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'Compare Microservices Architecture with Monolithic Architecture for a Core Banking & Mobile Banking platform. Discuss API Gateway, Circuit Breaker, and Database-per-Service patterns.',
            solution: `1. Monolithic vs Microservices:
- Monolithic bundles all banking modules (Auth, Ledger, Loans, Cards) in a single deployable artifact sharing one database.
- Microservices decouple each business domain into independent services with isolated databases (Database-per-Service).
2. Key Patterns:
- API Gateway: Single entry point handling TLS termination, JWT validation, and rate limiting.
- Circuit Breaker: Trips open when a downstream service fails repeatedly, returning fast fallback responses instead of cascading thread exhaustion.`,
            tags: ['Software Architecture', 'Microservices', 'Circuit Breaker'],
            marks: 15,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 5. Job ID: 10209 (Officer IT, Combined 8 Banks — 2024)
  {
    id: 'officer-it-10209',
    title: 'Officer (IT), Combined 8 Banks (Job ID-10209) — BSCS / BIBM',
    searchQuery: 'Combined Bank Officer IT Job ID 10209 written question paper solution pdf',
    category: 'Officer (IT)',
    jobId: '10209',
    circularYear: '2023 (Exam 2024)',
    examDate: 'May 17, 2024',
    examBody: 'BIBM (Bangladesh Institute of Bank Management)',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC', 'BDBL', 'BKB', 'RAKUB', 'PKB'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BSCS / BIBM Format)',
    summary: 'Combined 8 Banks Officer (IT) (Job ID: 10209) written exam paper. Structured in Part 1 (Focus Writing, Translation, and Math — 50 Marks) and Part 2 (Subject Related CSE/IT Questions 6.1–6.10 covering Linked List Cycle Detection, Dijkstra Shortest Path, SQL Self-Join & Correlated Subquery, Banker\'s Algorithm, and RAID Levels — 150 Marks).',
    keyTopics: [
      'Floyd Cycle Detection in Linked List',
      'Dijkstra Shortest Path Algorithm',
      'SQL Self-Join (Employee earning more than Manager)',
      'Banker Algorithm Safe Sequence',
      'RAID 0, RAID 1, RAID 5, RAID 10',
      'OS Page Replacement (FIFO vs LRU)'
    ],
    sections: [
      {
        id: 'sec-10209-general',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official Part 1: Focus Writing in Bangla & English, Translation, and Analytical Math (50 Marks).',
        questions: [
          {
            id: 'q-10209-1-5',
            questionNo: '1 – 5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `1. Focus Writing in Bangla (10 Marks): স্মার্ট বাংলাদেশ বিনির্মাণে ক্যাশলেস সোসাইটি ও ফিনটেক (FinTech)-এর ভূমিকা।
2. Focus Writing in English (10 Marks): Data Privacy and Protection in Digital Banking: Challenges and Regulatory Measures.
3. Translate into English (10 Marks): "ডিজিটাল লেনদেনের নিরাপত্তা নিশ্চিত করতে গ্রাহক সচেতনতা এবং শক্তিশালী সাইবার প্রতিরক্ষা ব্যবস্থার কোনো বিকল্প নেই।"
4. Translate into Bangla (10 Marks): "Interoperability among banks and mobile financial service providers is essential for building an inclusive digital economy."
5. Analytical Math (10 Marks): If the simple interest on a certain sum of money for 3 years at 6% per annum is Taka 900, what will be the compound interest on the same sum for 2 years at 10% per annum?`,
            solution: `1 & 2. Focus Writing Key Points:
- FinTech ecosystems (Bangla QR, NPSB, RTGS, Binimoy) accelerate financial velocity and reduce cash-handling overhead.
- Data privacy requires encryption at rest (AES-256), encryption in transit (TLS 1.3), role-based access control, and strict data localization for core banking ledgers.

3. English Translation:
"There is no alternative to customer awareness and a strong cyber defense system to ensure the security of digital transactions."

4. Bangla Translation:
"একটি অন্তর্ভুক্তিমূলক ডিজিটাল অর্থনীতি গড়ে তোলার জন্য ব্যাংক এবং মোবাইল ফাইন্যান্সিয়াল সার্ভিস প্রদানকারীদের মধ্যে আন্তঃসংযোগ অপরিহার্য।"

5. Analytical Math Solution:
- Principal P = (Simple Interest * 100) / (r * t) = (900 * 100) / (6 * 3) = 90,000 / 18 = Taka 5,000.
- Compound Interest on Taka 5,000 for 2 years at 10% p.a.:
  CI = 5,000 * [(1 + 10/100)^2 - 1] = 5,000 * [1.21 - 1] = 5,000 * 0.21 = Taka 1,050.`,
            tags: ['Focus Writing', 'Translation', 'Compound Interest', 'Job ID 10209'],
            marks: 50,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-10209-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.10) — (10 x 15 = 150 Marks)',
        marks: 150,
        description: 'Official Part 2: 10 Subject Related CSE/IT Questions (150 Marks).',
        questions: [
          {
            id: 'q-10209-6-1',
            questionNo: '6.1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C/C++ function to detect whether a Singly Linked List contains a cycle (loop) in O(N) time and O(1) auxiliary space using Floyd\'s Tortoise and Hare Algorithm.',
            solution: 'Maintain two pointers (slow and fast) starting at head. Move slow by 1 step and fast by 2 steps per iteration. If fast == slow, a cycle exists; if fast reaches NULL, no cycle exists.',
            codeSolution: `struct Node {
    int data;
    struct Node* next;
};

int hasCycle(struct Node* head) {
    struct Node *slow = head, *fast = head;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return 1; // Cycle detected
    }
    return 0; // No cycle
}`,
            solutionLanguage: 'c',
            tags: ['Linked List', 'Floyd Cycle Detection', 'Algorithms'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10209-6-2',
            questionNo: '6.2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Given the table Employee(EmpID, EmpName, Salary, ManagerID, DeptID), write: (a) an SQL query using a Self-Join to find all employees who earn more than their direct manager, and (b) an SQL query to find employees who earn the highest salary in their respective department.',
            solution: 'Part (a) joins Employee e with Employee m on e.ManagerID = m.EmpID and compares e.Salary > m.Salary. Part (b) uses a correlated subquery or GROUP BY (DeptID).',
            codeSolution: `-- (a) Employees earning more than their direct Manager
SELECT e.EmpName AS Employee_Name, e.Salary AS Emp_Salary,
       m.EmpName AS Manager_Name, m.Salary AS Mgr_Salary
FROM Employee e
JOIN Employee m ON e.ManagerID = m.EmpID
WHERE e.Salary > m.Salary;

-- (b) Employees earning the highest salary in each department
SELECT e.EmpID, e.EmpName, e.DeptID, e.Salary
FROM Employee e
WHERE e.Salary = (
    SELECT MAX(e2.Salary)
    FROM Employee e2
    WHERE e2.DeptID = e.DeptID
);`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Self-Join', 'Correlated Subquery'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10209-6-3',
            questionNo: '6.3',
            type: 'math',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Given memory page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2 and 3 physical page frames (initially empty). Calculate the total number of Page Faults using: (a) FIFO Page Replacement and (b) LRU Page Replacement.',
            solution: `Reference String (13 references): 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2 | Frames = 3.

(a) FIFO (First-In, First-Out) Trace:
1. 7 -> [7] (Fault 1)
2. 0 -> [7, 0] (Fault 2)
3. 1 -> [7, 0, 1] (Fault 3)
4. 2 -> Evict 7 -> [2, 0, 1] (Fault 4)
5. 0 -> Hit! [2, 0, 1]
6. 3 -> Evict 0 -> [2, 3, 1] (Fault 5)
7. 0 -> Evict 1 -> [2, 3, 0] (Fault 6)
8. 4 -> Evict 2 -> [4, 3, 0] (Fault 7)
9. 2 -> Evict 3 -> [4, 2, 0] (Fault 8)
10. 3 -> Evict 0 -> [4, 2, 3] (Fault 9)
11. 0 -> Evict 4 -> [0, 2, 3] (Fault 10)
12. 3 -> Hit!
13. 2 -> Hit!
Total FIFO Page Faults = 10.

(b) LRU (Least Recently Used) Trace:
1. 7 -> [7] (Fault 1)
2. 0 -> [7, 0] (Fault 2)
3. 1 -> [7, 0, 1] (Fault 3)
4. 2 -> Evict 7 (LRU) -> [2, 0, 1] (Fault 4)
5. 0 -> Hit!
6. 3 -> Evict 1 (LRU) -> [2, 0, 3] (Fault 5)
7. 0 -> Hit!
8. 4 -> Evict 2 (LRU) -> [4, 0, 3] (Fault 6)
9. 2 -> Evict 3 (LRU) -> [4, 0, 2] (Fault 7)
10. 3 -> Evict 0 (LRU) -> [4, 3, 2] (Fault 8)
11. 0 -> Evict 4 (LRU) -> [0, 3, 2] (Fault 9)
12. 3 -> Hit!
13. 2 -> Hit!
Total LRU Page Faults = 9.`,
            tags: ['Operating Systems', 'Page Replacement', 'FIFO vs LRU'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10209-6-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Compare RAID 0, RAID 1, RAID 5, and RAID 10 in terms of disk utilization efficiency, fault tolerance, read/write performance, and minimum number of disks required. Which RAID level is recommended for a Core Banking Database redo log volume?',
            solution: `1. RAID Level Comparison:
- RAID 0 (Striping): Min 2 disks | 100% capacity | 0 disk fault tolerance | Fastest read/write.
- RAID 1 (Mirroring): Min 2 disks | 50% capacity | Survives 1 disk failure | Fast read, normal write.
- RAID 5 (Striping with Distributed Parity): Min 3 disks | (N-1)/N capacity | Survives 1 disk failure | Suffers write penalty (4 I/Os per random write).
- RAID 10 (Stripe of Mirrors): Min 4 disks | 50% capacity | Survives 1 disk failure per mirrored pair | High read/write IOPS with no parity calculation penalty.

2. Recommendation for Core Banking Database Redo Logs:
RAID 10 is strongly recommended because database transaction logs are write-intensive and mission-critical; RAID 10 provides both high write throughput (no RAID 5 parity write penalty) and rapid rebuild times on disk failure.`,
            tags: ['Storage Architecture', 'RAID Levels', 'Core Banking'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10209-6-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Explain Dijkstra\'s Single-Source Shortest Path algorithm. Why does Dijkstra\'s algorithm fail on graphs with negative-weight edges, and which algorithm should be used instead?',
            solution: `1. Dijkstra's Algorithm:
Uses a greedy strategy with a Min-Priority Queue to repeatedly extract the unvisited vertex u with the smallest tentative distance dist[u] and relax all outgoing edges (u, v): if dist[u] + w(u, v) < dist[v], update dist[v]. Time complexity: O((V + E) log V).

2. Why Dijkstra Fails with Negative Edges:
Dijkstra assumes that once a vertex u is extracted from the priority queue and marked visited, its shortest distance dist[u] is final because adding positive edge weights can only increase path cost. If a negative edge exists downstream, a later path could reduce the distance to an already-finalized vertex.

3. Alternative for Negative Edges:
The Bellman-Ford Algorithm (O(V * E) time) relaxes all E edges V - 1 times and correctly handles negative edge weights as well as detecting negative-weight cycles.`,
            tags: ['Algorithms', 'Dijkstra', 'Bellman-Ford', 'Graphs'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10209-6-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the step-by-step process of DNS resolution when a user types "https://www.bb.org.bd" into a web browser. Differentiate between Recursive and Iterative DNS queries.',
            solution: `1. DNS Resolution Steps:
- Step 1: Browser checks its local DNS cache and OS hosts file / stub resolver cache.
- Step 2 (Recursive Query): If not cached, the OS stub resolver sends a Recursive Query to the ISP/Enterprise Recursive DNS Resolver.
- Step 3 (Iterative Queries by Resolver):
  (a) Resolver queries a Root DNS Server (.) -> Root returns referral to the '.bd' ccTLD server.
  (b) Resolver queries the '.bd' / '.org.bd' TLD Name Server -> Returns referral to the Authoritative Name Server for 'bb.org.bd'.
  (c) Resolver queries the Authoritative Name Server for 'www.bb.org.bd' -> Receives the IPv4 'A' record (and IPv6 'AAAA' record).
- Step 4: Resolver caches the record for its TTL duration and returns the IP address to the client browser.`,
            tags: ['Networking', 'DNS Resolution', 'Recursive vs Iterative'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10209-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is SQL Injection (SQLi)? Show a vulnerable login query example and explain how Prepared Statements (Parameterized Queries) completely prevent SQL Injection.',
            solution: `1. Vulnerable Dynamic SQL Query:
String query = "SELECT * FROM users WHERE username = '" + user + "' AND password = '" + pass + "'";
If an attacker enters: ' OR '1'='1' --
The query becomes: SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = '...'
Since '1'='1' is always TRUE, authentication is bypassed completely.

2. Prevention via Prepared Statements:
With Parameterized Queries (SELECT * FROM users WHERE username = ? AND password = ?), the database compiles the SQL execution plan first, and user input is bound strictly as a literal scalar parameter—never interpreted as executable SQL syntax.`,
            tags: ['Security', 'SQL Injection', 'Prepared Statements'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10209-6-8',
            questionNo: '6.8',
            type: 'math',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Convert the decimal number (-43)_10 into an 8-bit binary representation using: (i) Sign-Magnitude, (ii) 1\'s Complement, and (iii) 2\'s Complement. Why do modern CPUs universally use 2\'s Complement?',
            solution: `1. Binary of +43 in 8 bits:
   43 = 32 + 8 + 2 + 1 = 00101011_2

2. Representations of (-43)_10:
   (i) Sign-Magnitude (flip MSB to 1): 10101011_2
   (ii) 1's Complement (invert all bits of +43): 11010100_2
   (iii) 2's Complement (add 1 to 1's complement): 11010100 + 1 = 11010101_2

3. Why Modern CPUs Use 2's Complement:
   - Single unique representation for zero (00000000), unlike Sign-Magnitude and 1's Complement which have both +0 and -0.
   - Subtraction A - B is performed using the exact same adder circuitry as A + (-B) without end-around carry hardware.`,
            tags: ['Digital Logic', '2s Complement', 'Number Systems'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10209-6-9',
            questionNo: '6.9',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'Explain Coupling and Cohesion in software design. Why is "High Cohesion and Loose Coupling" the foundational principle of modular software engineering?',
            solution: `1. Definitions:
- Cohesion: Measures how strongly related and focused the responsibilities of a single module/class are (intra-module concept).
- Coupling: Measures the degree of interdependence between different modules/classes (inter-module concept).

2. Why High Cohesion and Loose Coupling is Ideal:
- High Functional Cohesion ensures each class has a Single Responsibility, making it easier to understand, test, and maintain.
- Loose Coupling (achieved via interfaces and Dependency Injection) ensures that modifying the internal implementation of one module (e.g., switching SMS gateway provider) does not cause ripple-effect breakages across other banking modules.`,
            tags: ['Software Engineering', 'Cohesion vs Coupling', 'Modular Design'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-10209-6-10',
            questionNo: '6.10',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C/C++ or Python function to check whether a given string of brackets "(", ")", "{", "}", "[", "]" is balanced using a Stack.',
            solution: 'Push opening brackets onto the stack. Upon encountering a closing bracket, check if the stack is non-empty and the top matches the corresponding opening bracket. At the end, the stack must be empty.',
            codeSolution: `def is_balanced_brackets(s: str) -> bool:
    stack = []
    matching = {')': '(', '}': '{', ']': '['}
    for ch in s:
        if ch in '({[':
            stack.append(ch)
        elif ch in ')}]':
            if not stack or stack[-1] != matching[ch]:
                return False
            stack.pop()
    return len(stack) == 0`,
            solutionLanguage: 'python',
            tags: ['Data Structures', 'Stack', 'Balanced Parentheses'],
            marks: 15,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 6. Historical Combined & Sonali/Janata Officer (IT) Archive (2020–2023)
  {
    id: 'officer-it-sb-2021',
    title: 'Officer (IT), Sonali Bank & Janata Bank (Job ID-10128 — 2021-2022)',
    searchQuery: 'Sonali Bank Janata Bank Officer IT 2021 2022 BIBM written question paper solution',
    category: 'Officer (IT)',
    jobId: '10128',
    circularYear: '2020-2021',
    examDate: 'December 17, 2021',
    examBody: 'BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BSCS / BIBM Format)',
    summary: 'BIBM Written Examination for Officer (IT) in Sonali Bank & Janata Bank. Covers Part 1 (Focus Writing, Translation, and Math — 50 Marks) and Part 2 (Subject Related CSE/IT Questions 6.1–6.10: OSI vs TCP/IP Layers, Database Triggers & Stored Procedures, Binary Search vs Interpolation Search, Hamming Code Error Correction, and Compiler Phases — 150 Marks).',
    keyTopics: [
      'OSI 7-Layer vs TCP/IP Model',
      'Database Trigger vs Stored Procedure',
      'Hamming Code (7,4) Single-Bit Error Correction',
      'Phases of a Compiler',
      'Fibonacci Dynamic Programming vs Recursion',
      'IPv4 vs IPv6 Header Comparison'
    ],
    sections: [
      {
        id: 'sec-sb21-general',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official Part 1: Bangla & English Focus Writing, Translation, and Analytical Math (50 Marks).',
        questions: [
          {
            id: 'q-sb21-1-5',
            questionNo: '1 – 5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `1. Focus Writing in Bangla (10 Marks): রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকগুলোর অটোমেশন ও গ্রাহকসেবার মানোন্নয়ন।
2. Focus Writing in English (10 Marks): E-Commerce Growth and Secure Online Payment Gateways in Bangladesh.
3. Translate into English (10 Marks): "তথ্যপ্রযুক্তির সঠিক প্রয়োগের মাধ্যমে রাষ্ট্রায়ত্ত ব্যাংকগুলোর সেবার মান বেসরকারি ব্যাংকের সমকক্ষ করে তোলা সম্ভব।"
4. Translate into Bangla (10 Marks): "A robust disaster recovery site ensures business continuity when the primary data center experiences an outage."
5. Analytical Math (10 Marks): A train 150 meters long is running at a speed of 68 km/hr. In what time will it pass a man who is running at 8 km/hr in the same direction in which the train is going?`,
            solution: `1–4. Translation & Focus Writing Solutions:
- English Translation (Q3): "Through the proper application of information technology, the service quality of state-owned banks can be made on par with private banks."
- Bangla Translation (Q4): "প্রাথমিক ডেটা সেন্টারে কোনো বিপর্যয় ঘটলে একটি শক্তিশালী ডিজাস্টার রিকভারি সাইট ব্যবসায়িক ধারাবাহিকতা নিশ্চিত করে।"

5. Analytical Math Solution:
- Relative speed (same direction) = (68 - 8) km/hr = 60 km/hr.
- Convert to m/s: 60 * (5 / 18) = 50 / 3 m/s.
- Time taken to pass the man = Distance (length of train) / Relative Speed = 150 / (50 / 3) = (150 * 3) / 50 = 9 seconds.`,
            tags: ['Focus Writing', 'Translation', 'Relative Speed Math'],
            marks: 50,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-sb21-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.10) — (10 x 15 = 150 Marks)',
        marks: 150,
        description: 'Official Part 2: 10 Subject Related CSE/IT Questions (150 Marks).',
        questions: [
          {
            id: 'q-sb21-6-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Draw and compare the 7-layer OSI Reference Model with the TCP/IP Protocol Suite. State the protocol data unit (PDU) and key networking devices operating at Layers 1, 2, 3, and 4.',
            solution: `1. Layer PDU & Device Mapping:
- Layer 1 (Physical): PDU = Bit | Devices = Hub, Repeater, Modem, Fiber/UTP Cable.
- Layer 2 (Data Link): PDU = Frame | Devices = Layer-2 Switch, Bridge, NIC (MAC addressing, VLAN).
- Layer 3 (Network): PDU = Packet / Datagram | Devices = Router, Layer-3 Switch (IP addressing, OSPF/BGP).
- Layer 4 (Transport): PDU = Segment (TCP) / Datagram (UDP) | Devices = Stateful Firewall, Load Balancer.
- Layers 5, 6, 7 (Session, Presentation, Application): PDU = Data / Message (HTTP, SMTP, DNS, SSH).`,
            tags: ['Networking', 'OSI Model', 'TCP/IP'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-sb21-6-2',
            questionNo: '6.2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Differentiate between a Stored Procedure and a Database Trigger. Write an SQL/PL-SQL Trigger that automatically logs an audit entry into Account_Audit(AccNo, OldBalance, NewBalance, ChangedAt) whenever an Account balance is updated.',
            solution: 'A Stored Procedure is invoked explicitly by an application or user, whereas a Trigger executes automatically (implicitly) in response to a DML event (INSERT, UPDATE, DELETE).',
            codeSolution: `CREATE OR REPLACE TRIGGER trg_account_balance_audit
AFTER UPDATE OF Balance ON Account
FOR EACH ROW
BEGIN
    INSERT INTO Account_Audit (AccNo, OldBalance, NewBalance, ChangedAt)
    VALUES (:OLD.AccNo, :OLD.Balance, :NEW.Balance, SYSDATE);
END;`,
            solutionLanguage: 'sql',
            tags: ['DBMS', 'PL/SQL', 'Triggers', 'Stored Procedures'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-sb21-6-3',
            questionNo: '6.3',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'A 7-bit even-parity Hamming code is received as 1 1 0 0 1 1 0 (bit positions 1 to 7 from left to right). Determine whether there is an error, locate the corrupted bit position if any, and state the original 4-bit data word.',
            solution: `Bit Positions: b1=1, b2=1, b3=0, b4=0, b5=1, b6=1, b7=0.
Even Parity Check Bits Calculation:
- c1 = b1 XOR b3 XOR b5 XOR b7 = 1 XOR 0 XOR 1 XOR 0 = 0
- c2 = b2 XOR b3 XOR b6 XOR b7 = 1 XOR 0 XOR 1 XOR 0 = 0
- c4 = b4 XOR b5 XOR b6 XOR b7 = 0 XOR 1 XOR 1 XOR 0 = 0

Since Syndrome (c4 c2 c1) = 000_2 = 0, there is NO single-bit error in the received codeword.
Original 4-bit data bits (at positions b3, b5, b6, b7) = 0 1 1 0.`,
            tags: ['Data Communication', 'Hamming Code', 'Error Correction'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-sb21-6-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'List and explain the 6 phases of a Compiler, illustrating how the statement "balance = principal + rate * 10" is transformed through each phase.',
            solution: `1. Lexical Analyzer (Scanner): Converts source characters into tokens: id1 = id2 + id3 * 10.
2. Syntax Analyzer (Parser): Builds the Parse Tree / Abstract Syntax Tree (AST) verifying grammar rules.
3. Semantic Analyzer: Performs type checking and inserts inttofloat(10) coercion if rate is float.
4. Intermediate Code Generator: Produces Three-Address Code (t1 = inttofloat(10); t2 = id3 * t1; t3 = id2 + t2; id1 = t3).
5. Code Optimizer: Eliminates redundant temporaries (t1 = id3 * 10.0; id1 = id2 + t1).
6. Target Code Generator: Emits machine/assembly instructions (LDDF, MULF, ADDF, STDF).`,
            tags: ['Compiler Design', 'Compiler Phases', 'Three-Address Code'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-sb21-6-5',
            questionNo: '6.5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Why does a naive recursive function for the N-th Fibonacci number take exponential O(2^N) time? Write an optimized O(N) time and O(1) space iterative/dynamic programming solution in C.',
            solution: 'Naive recursion recomputes overlapping subproblems fib(k) exponentially many times. Storing only the last two states reduces time to O(N) and space to O(1).',
            codeSolution: `#include <stdio.h>

long long fibonacci(int n) {
    if (n <= 1) return n;
    long long prev2 = 0, prev1 = 1, curr = 0;
    for (int i = 2; i <= n; i++) {
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return curr;
}`,
            solutionLanguage: 'c',
            tags: ['Dynamic Programming', 'Fibonacci', 'C Programming'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-sb21-6-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare IPv4 and IPv6 packet headers. Why was the Header Checksum field removed from the IPv6 header?',
            solution: `1. IPv4 vs IPv6 Header Comparison:
- Address Size: IPv4 uses 32-bit addresses (4.3 billion); IPv6 uses 128-bit hexadecimal addresses (3.4 x 10^38).
- Header Length: IPv4 has a variable 20–60 byte header with 12+ fields; IPv6 has a streamlined fixed 40-byte base header with only 8 fields.
- Fragmentation: IPv4 allows routers to fragment packets en route; IPv6 removes router fragmentation (performed only by source host via Path MTU Discovery).

2. Why Header Checksum Was Removed in IPv6:
In IPv4, every router must recompute the header checksum at every hop because the TTL field decrements by 1. Since Layer-2 (Ethernet CRC-32) and Layer-4 (TCP/UDP checksums) already verify integrity, removing the Layer-3 checksum in IPv6 significantly accelerates hardware router packet forwarding.`,
            tags: ['Networking', 'IPv4 vs IPv6', 'Packet Header'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-sb21-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Differentiate between a Process and a Thread. Explain User-Level Threads vs Kernel-Level Threads.',
            solution: `1. Process vs Thread:
- A Process is an independent program in execution with its own isolated virtual address space (Code, Data, Heap, Stack, PCB). Context switching between processes is heavy because TLB/page tables must be flushed.
- A Thread is a lightweight unit of CPU utilization within a process. Threads of the same process share the Code, Data, Heap, and open file descriptors while maintaining their own Program Counter, Registers, and Stack.

2. User-Level vs Kernel-Level Threads:
- User-Level Threads are managed by a user-space library without kernel awareness (fast switching, but if one thread makes a blocking system call, the entire process blocks).
- Kernel-Level Threads are scheduled directly by the OS kernel across multiple CPU cores concurrently.`,
            tags: ['Operating Systems', 'Process vs Thread', 'Multithreading'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-sb21-6-8',
            questionNo: '6.8',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Explain the difference between INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, and FULL OUTER JOIN with Venn diagrams and SQL examples.',
            solution: `- INNER JOIN: Returns only rows with matching keys in both tables A and B.
- LEFT OUTER JOIN: Returns all rows from left table A, plus matched rows from B (NULLs where B has no match).
- RIGHT OUTER JOIN: Returns all rows from right table B, plus matched rows from A.
- FULL OUTER JOIN: Returns all rows from both A and B, filling NULLs on whichever side lacks a match.`,
            codeSolution: `SELECT c.CustID, c.CustName, a.AccNo, a.Balance
FROM Customer c
LEFT OUTER JOIN Account a ON c.CustID = a.CustID;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Joins', 'DBMS'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-sb21-6-9',
            questionNo: '6.9',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is a Firewall? Differentiate between Stateless Packet Filtering Firewalls, Stateful Inspection Firewalls, and Web Application Firewalls (WAF).',
            solution: `- Stateless Packet Filter (Layer 3/4): Inspects each packet in isolation against static ACL rules (Source/Dest IP, Port) without tracking connection state.
- Stateful Inspection Firewall (Layer 3/4): Maintains a state table of active TCP handshakes and UDP flows, allowing return traffic only if it matches an established session.
- Web Application Firewall (WAF — Layer 7): Inspects HTTP/HTTPS payloads to block application-layer attacks such as SQL Injection (SQLi), Cross-Site Scripting (XSS), and CSRF.`,
            tags: ['Network Security', 'Firewalls', 'WAF'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-sb21-6-10',
            questionNo: '6.10',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C program to check whether a given integer or string is a Palindrome without using built-in string reversal functions.',
            solution: 'Use two pointers starting at the left (index 0) and right (index n-1) ends of the string, comparing characters while moving inward in O(N) time and O(1) space.',
            codeSolution: `#include <stdio.h>
#include <string.h>

int isPalindrome(const char *str) {
    int left = 0;
    int right = strlen(str) - 1;
    while (left < right) {
        if (str[left] != str[right]) return 0;
        left++;
        right--;
    }
    return 1;
}`,
            solutionLanguage: 'c',
            tags: ['C Programming', 'Palindrome', 'Two Pointers'],
            marks: 15,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 7. Combined Bank Officer (IT) 2025 (Based on 2023)
  {
    id: 'officer-it-2025-base23',
    title: 'Officer (IT), Combined Bank 2025 (Based on 2023 Circular) — BIBM Official Format',
    searchQuery: 'Officer (IT), Combined Bank 2025 Based on 2023 question paper pdf',
    category: 'Officer (IT)',
    jobId: 'Combined-2025-B23',
    circularYear: '2023 (Exam 2025)',
    examDate: 'January 24, 2025',
    examBody: 'BIBM (Bangladesh Institute of Bank Management)',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC', 'BKB'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BSCS / BIBM Format)',
    summary: 'BIBM Written Examination for Combined Bank Officer (IT) 2025 (Based on 2023 Circular). Structured in Part 1 (Questions 1–5: Focus Writing in Bangla & English, Translation, and Analytical Math — 50 Marks) and Part 2 (Question 6: Subject Related CSE/IT Questions 6.1–6.6 covering AVL Tree Rotations, SQL Window Ranking, VLSM /25 Subnetting, Deadlock Avoidance, and AES vs RSA — 150 Marks).',
    keyTopics: [
      'AVL Tree Rotations (LL, RR, LR, RL)',
      'SQL ROW_NUMBER vs RANK vs DENSE_RANK',
      'OS Banker Algorithm Safe State',
      'VLAN Tagging (IEEE 802.1Q) & Trunking',
      'Digital Logic Half Adder & Full Adder',
      'Merge Sort O(N log N) Algorithm'
    ],
    sections: [
      {
        id: 'sec-2025b23-general',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official Part 1: Bangla & English Focus Writing, Translation, and Analytical Math (50 Marks).',
        questions: [
          {
            id: 'q-2025b23-1-5',
            questionNo: '1 – 5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `1. Focus Writing in Bangla (10 Marks): ব্যাংকিং খাতে কৃত্রিম বুদ্ধিমত্তা (AI) ও বিগ ডেটা অ্যানালিটিক্সের ব্যবহার।
2. Focus Writing in English (10 Marks): "Strengthening National Payment Switch Bangladesh (NPSB) for Interoperable Retail Banking."
3. Translate into English (10 Marks): "আর্থিক খাতে সাইবার নিরাপত্তা নিশ্চিত করতে নিয়মিত আইটি অডিট এবং কর্মীদের প্রশিক্ষণ অত্যন্ত জরুরি।"
4. Translate into Bangla (10 Marks): "Real-time gross settlement systems have eliminated settlement risk in high-value interbank transactions."
5. Analytical Math (10 Marks): A tank has two inlet pipes A and B that can fill it in 12 minutes and 15 minutes respectively, and an outlet pipe C that can empty the full tank in 20 minutes. If all three pipes are opened simultaneously when the tank is empty, in how many minutes will the tank be completely filled?`,
            solution: `1–4. Translation & Focus Writing Solutions:
- English Translation (Q3): "Regular IT audits and employee training are essential to ensure cybersecurity in the financial sector."
- Bangla Translation (Q4): "রিয়েল-টাইম গ্রস সেটেলমেন্ট সিস্টেম উচ্চ-মূল্যের আন্তঃব্যাংক লেনদেনে নিষ্পত্তি ঝুঁকি দূর করেছে।"

5. Analytical Math Solution:
- Net part filled in 1 minute when A, B, and C are open = (1/12) + (1/15) - (1/20)
  = (5 + 4 - 3) / 60 = 6 / 60 = 1 / 10.
- Therefore, the tank will be completely filled in 10 minutes.`,
            tags: ['Focus Writing', 'Translation', 'Pipes and Cisterns Math'],
            marks: 50,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-2025b23-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.6) — 150 Marks',
        marks: 150,
        description: 'Official Part 2: Subject Related CSE/IT Questions (150 Marks).',
        questions: [
          {
            id: 'q-2025b23-6-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'What is an AVL Tree? Define the Balance Factor of a node and explain the four types of AVL rotations (LL, RR, LR, RL) used to restore balance after insertion.',
            solution: `- An AVL Tree is a self-balancing Binary Search Tree where for every node, the Balance Factor BF = Height(Left Subtree) - Height(Right Subtree) is strictly in {-1, 0, +1}.
- Four Rotations:
  (i) LL (Left-Left) Imbalance (BF = +2, Left child BF >= 0): Single Right Rotation.
  (ii) RR (Right-Right) Imbalance (BF = -2, Right child BF <= 0): Single Left Rotation.
  (iii) LR (Left-Right) Imbalance (BF = +2, Left child BF = -1): Left Rotation on left child followed by Right Rotation on root.
  (iv) RL (Right-Left) Imbalance (BF = -2, Right child BF = +1): Right Rotation on right child followed by Left Rotation on root.`,
            tags: ['Data Structures', 'AVL Tree', 'Rotations'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-2025b23-6-2',
            questionNo: '6.2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Differentiate between ROW_NUMBER(), RANK(), and DENSE_RANK() in SQL. Show the exact output of all three functions on the salary values [90000, 80000, 80000, 70000] ordered descending.',
            solution: `Output on Salaries [90000, 80000, 80000, 70000]:
- Salary 90000: ROW_NUMBER = 1 | RANK = 1 | DENSE_RANK = 1
- Salary 80000: ROW_NUMBER = 2 | RANK = 2 | DENSE_RANK = 2
- Salary 80000: ROW_NUMBER = 3 | RANK = 2 | DENSE_RANK = 2
- Salary 70000: ROW_NUMBER = 4 | RANK = 4 (skips 3) | DENSE_RANK = 3 (no gap)`,
            codeSolution: `SELECT 
    EmpName,
    Salary,
    ROW_NUMBER() OVER (ORDER BY Salary DESC) AS Row_Num,
    RANK() OVER (ORDER BY Salary DESC) AS Rnk,
    DENSE_RANK() OVER (ORDER BY Salary DESC) AS Dense_Rnk
FROM Employees;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'RANK vs DENSE_RANK'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-2025b23-6-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is a Virtual LAN (VLAN)? Explain the difference between an Access Port and an IEEE 802.1Q Trunk Port on a managed Layer-2 switch in a bank branch network.',
            solution: `- VLAN (Virtual Local Area Network): Logically segments a physical Layer-2 switch into multiple isolated broadcast domains (e.g., VLAN 10 for Teller PCs, VLAN 20 for ATM terminals, VLAN 30 for Guest Wi-Fi).
- Access Port: Belongs to a single VLAN and carries untagged Ethernet frames to end-host devices.
- Trunk Port (IEEE 802.1Q): Carries traffic for multiple VLANs simultaneously between switches or from a switch to a router (Router-on-a-Stick) by inserting a 4-byte 802.1Q VLAN Tag into the Ethernet frame header.`,
            tags: ['Networking', 'VLAN', 'IEEE 802.1Q', 'Trunking'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-2025b23-6-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Design a Full Adder combinational circuit. Provide its Truth Table and Boolean expressions for Sum (S) and Carry-Out (C_out).',
            solution: `Truth Table for Full Adder (Inputs: A, B, C_in | Outputs: Sum, C_out):
- Sum (S) = A XOR B XOR C_in
- Carry-Out (C_out) = AB + BC_in + AC_in = AB + C_in(A XOR B)
A Full Adder can be constructed using two Half Adders and one OR gate.`,
            tags: ['Digital Logic', 'Full Adder', 'Boolean Algebra'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-2025b23-6-5',
            questionNo: '6.5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C/C++ function to merge two sorted subarrays in the Merge Sort algorithm. Why is Merge Sort guaranteed to run in O(N log N) time even in the worst case?',
            solution: 'Merge Sort always divides the array into two equal halves (log2 N levels) and merges N elements linearly at each level: T(N) = 2T(N/2) + Theta(N) = Theta(N log N) regardless of initial input distribution.',
            codeSolution: `void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2];
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}`,
            solutionLanguage: 'c',
            tags: ['Algorithms', 'Merge Sort', 'Divide and Conquer'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-2025b23-6-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'Explain the SOLID principles of Object-Oriented Design.',
            solution: `- S (Single Responsibility Principle): A class should have one, and only one, reason to change.
- O (Open/Closed Principle): Software entities should be open for extension, but closed for modification.
- L (Liskov Substitution Principle): Subtypes must be substitutable for their base types without altering program correctness.
- I (Interface Segregation Principle): Clients should not be forced to depend on fat interfaces they do not use.
- D (Dependency Inversion Principle): High-level modules should not depend on low-level modules; both should depend on abstractions.`,
            tags: ['Software Engineering', 'SOLID Principles', 'OOP'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 8. Combined Bank Officer (IT) 2020 (Official BSCS Archive)
  {
    id: 'officer-it-2020',
    title: 'Officer (IT), Combined 5 Banks 2020 — BSCS Official Paper',
    searchQuery: 'Officer (IT), Combined Bank 2020 question paper pdf',
    category: 'Officer (IT)',
    jobId: 'Combined-2020',
    circularYear: '2019-2020',
    examDate: 'November 28, 2020',
    examBody: 'Banker\'s Selection Committee Secretariat (BSCS)',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Rupali Bank PLC', 'BDBL', 'BKB'],
    grade: 'Grade 10',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BSCS Format)',
    summary: 'Official BSCS Written Examination for Combined 5 Banks Officer (IT) 2020. Structured into Part 1 (Questions 1–5: Focus Writing, Translation, and Analytical Math — 50 Marks) and Part 2 (Question 6: Subject Related CSE/IT Questions 6.1–6.6 covering Breadth-First Search vs Depth-First Search, SQL HAVING & Subqueries, CSMA/CD vs CSMA/CA, Paging Address Translation, and Software Testing Levels — 150 Marks).',
    keyTopics: [
      'BFS vs DFS Graph Traversal',
      'CSMA/CD (IEEE 802.3) vs CSMA/CA (IEEE 802.11)',
      'Logical to Physical Paging Address Translation',
      'SQL HAVING & Aggregate Subqueries',
      'DMA (Direct Memory Access) Controller',
      'Three-Schema DBMS Architecture'
    ],
    sections: [
      {
        id: 'sec-oit2020-general',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official Part 1: Bangla & English Focus Writing, Translation, and Analytical Math (50 Marks).',
        questions: [
          {
            id: 'q-oit2020-1-5',
            questionNo: '1 – 5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `1. Focus Writing in Bangla (10 Marks): ই-কমার্স ও অনলাইন ব্যাংকিংয়ের প্রসারে জাতীয় অর্থনীতিতে ইতিবাচক পরিবর্তন।
2. Focus Writing in English (10 Marks): "Digital Transformation of State-Owned Commercial Banks in Bangladesh."
3. Translate into English (10 Marks): "প্রযুক্তির দ্রুত পরিবর্তনের সাথে তাল মিলিয়ে ব্যাংক কর্মকর্তাদের দক্ষতা বৃদ্ধি করা সময়ের দাবি।"
4. Translate into Bangla (10 Marks): "Electronic fund transfer networks have significantly reduced the time and cost of clearing interbank cheques."
5. Analytical Math (10 Marks): The ratio of the present ages of a father and his son is 7:2. After 10 years, their ages will be in the ratio of 9:4. What are their present ages?`,
            solution: `1–4. Translation Solutions:
- English Translation (Q3): "Upgrading the skills of bank officers to keep pace with rapid technological changes is the demand of the time."
- Bangla Translation (Q4): "ইলেকট্রনিক ফান্ড ট্রান্সফার নেটওয়ার্ক আন্তঃব্যাংক চেক ক্লিয়ারিংয়ের সময় ও ব্যয় উল্লেখযোগ্যভাবে কমিয়ে এনেছে।"

5. Analytical Math Solution:
- Let present ages be 7x and 2x.
- After 10 years: (7x + 10) / (2x + 10) = 9 / 4
  => 28x + 40 = 18x + 90
  => 10x = 50 => x = 5.
- Father's present age = 7 * 5 = 35 years; Son's present age = 2 * 5 = 10 years.`,
            tags: ['Focus Writing', 'Translation', 'Age Word Problem'],
            marks: 50,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-oit2020-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.6) — 150 Marks',
        marks: 150,
        description: 'Official Part 2: Subject Related CSE/IT Questions (150 Marks).',
        questions: [
          {
            id: 'q-oit2020-6-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Compare Breadth-First Search (BFS) and Depth-First Search (DFS) graph traversal algorithms in terms of data structure used, time/space complexity, and shortest-path optimality on unweighted graphs.',
            solution: `- Data Structure: BFS uses a FIFO Queue; DFS uses a LIFO Stack (or recursion).
- Time & Space Complexity: Both take O(V + E) time with adjacency lists and O(V) space.
- Shortest Path: BFS guarantees finding the shortest path (minimum number of edges) from source to all vertices in an unweighted graph; DFS does not guarantee shortest paths.`,
            tags: ['Algorithms', 'BFS vs DFS', 'Graphs'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-oit2020-6-2',
            questionNo: '6.2',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Differentiate between CSMA/CD (Carrier Sense Multiple Access with Collision Detection) and CSMA/CA (Collision Avoidance). Why cannot wireless Wi-Fi (IEEE 802.11) networks use CSMA/CD?',
            solution: `- CSMA/CD (IEEE 802.3 Wired Ethernet): Stations listen before transmitting and monitor the wire while transmitting to detect voltage spikes caused by collisions, sending a jam signal and backing off via Binary Exponential Backoff.
- Why Wi-Fi Cannot Use CSMA/CD:
  1. Half-Duplex Radio Transceivers: A wireless NIC cannot transmit and listen on the same frequency simultaneously because its own transmitted signal overwhelms any incoming collision signal.
  2. Hidden Terminal Problem: Station A and Station C may both be in range of Access Point B but out of range of each other, so they cannot detect collisions at B. Hence Wi-Fi uses CSMA/CA with RTS/CTS and ACKs.`,
            tags: ['Networking', 'CSMA/CD vs CSMA/CA', 'IEEE 802.11'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-oit2020-6-3',
            questionNo: '6.3',
            type: 'math',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Consider a paging system with a page size of 4 KB (2^12 bytes) and a 32-bit logical address space. (a) How many bits are used for the Page Offset and Page Number? (b) If a process generates logical address 20500 (decimal) and page 5 is mapped to physical frame 12, what is the corresponding physical memory address?',
            solution: `(a) Bit Partitioning:
- Page Size = 4 KB = 4096 bytes = 2^12 bytes -> Page Offset d = 12 bits.
- Page Number p = 32 - 12 = 20 bits (2^20 = 1,048,576 pages).

(b) Logical Address 20500 Translation:
- Page Number p = floor(20500 / 4096) = 5.
- Page Offset d = 20500 mod 4096 = 20500 - (5 * 4096) = 20500 - 20480 = 20.
- Given Page 5 maps to Frame f = 12:
  Physical Address = (Frame Number * Page Size) + Offset
                   = (12 * 4096) + 20 = 49152 + 20 = 49172.`,
            tags: ['Operating Systems', 'Paging', 'Address Translation'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-oit2020-6-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'What is Direct Memory Access (DMA)? Explain how a DMA Controller transfers large blocks of data between an I/O device and main memory without continuous CPU intervention (Cycle Stealing vs Burst Mode).',
            solution: `- Without DMA (Programmed/Interrupt I/O), the CPU must execute instructions to move every single byte/word between the I/O controller buffer and RAM.
- With DMA: The CPU initializes the DMA Controller with the I/O device address, target RAM starting address, and byte count. The DMA controller takes control of the memory bus directly (via Bus Request BR and Bus Grant BG signals), transfers the entire block to RAM, and raises a single interrupt to the CPU upon completion.`,
            tags: ['Computer Architecture', 'DMA', 'I/O Systems'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-oit2020-6-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain the ANSI/SPARC Three-Schema Architecture of a DBMS (External, Conceptual, and Internal levels) and differentiate between Logical Data Independence and Physical Data Independence.',
            solution: `1. Three-Schema Levels:
- External (View) Level: Custom database views tailored to specific user groups (e.g., bank teller view vs auditor view).
- Conceptual (Logical) Level: Community-wide logical schema describing all entities, data types, relationships, and constraints.
- Internal (Physical) Level: Physical storage structures, B+ Tree indexes, block allocation, and byte compression on disk.

2. Data Independence:
- Physical Data Independence: Ability to modify the Internal schema (e.g., adding an index or moving data files to SSD) without altering the Conceptual schema.
- Logical Data Independence: Ability to modify the Conceptual schema (e.g., adding a new column or splitting a table) without breaking External views or application programs.`,
            tags: ['DBMS', 'Three-Schema Architecture', 'Data Independence'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-oit2020-6-6',
            questionNo: '6.6',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Differentiate between the SQL WHERE clause and HAVING clause, and between DELETE, TRUNCATE, and DROP commands.',
            solution: `1. WHERE vs HAVING:
- WHERE filters individual rows BEFORE grouping (GROUP BY) and cannot contain aggregate functions.
- HAVING filters aggregated groups AFTER GROUP BY and uses aggregate functions (COUNT, SUM, AVG).

2. DELETE vs TRUNCATE vs DROP:
- DELETE (DML): Removes specific rows matching a WHERE condition; logs each row deletion; can be rolled back; fires DELETE triggers.
- TRUNCATE (DDL): Deallocates all data pages of a table rapidly; resets identity counters; keeps table schema intact.
- DROP (DDL): Completely removes the table data, schema definition, indexes, and constraints from the database catalog.`,
            codeSolution: `DELETE FROM Transaction_Temp WHERE Status = 'CANCELLED';
TRUNCATE TABLE Staging_Import_Logs;
DROP TABLE Deprecated_Audit_2015;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'DELETE vs TRUNCATE vs DROP', 'WHERE vs HAVING'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  }
];

