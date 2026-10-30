import { ExamPaper } from '../types/exam';

export const seniorOfficerItPapers: ExamPaper[] = [
  // 1. Official Printed Paper: Senior Officer (IT), Grade-9 (Job ID-25104) — BSCS / Bangladesh Bank
  {
    id: 'so-it-25104',
    title: 'Senior Officer (IT), Grade-9 (Job ID-25104) — Bangladesh Bank (BSCS)',
    searchQuery: 'SO (IT), Combined Bank (Job ID: 25104) 2026 Bangladesh Bank BSCS Senior Officer IT Grade-9 original question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: '25104',
    circularYear: '2026 (Exam: July 25, 2026)',
    examDate: 'July 25, 2026',
    examBody: "Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS)",
    participatingBanks: [
      'Sonali Bank PLC',
      'Janata Bank PLC',
      'Agrani Bank PLC',
      'Rupali Bank PLC',
      'Bangladesh Development Bank PLC (BDBL)',
      'Bangladesh Krishi Bank (BKB)',
      'Probashi Kallyan Bank (PKB)'
    ],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: "Official verbatim 200-mark written question paper for Bangladesh Bank — Banker's Selection Committee Secretariat (BSCS) Senior Officer (IT), Grade-9 (Job ID-25104). Contains all 6 official sections: (1) Bangla Focus Writing on 4th Industrial Revolution in Banking [10], (2) English Focus Writing on Digital Literacy & Cashless Transactions [10], (3) Bangla-to-English Translation [10], (4) English-to-Bangla Translation [10], (5) General Knowledge 5×2 [10], and (6) 15 Subject Related Technical Questions (15×10 = 150 Marks: Processor Pipelining, Hashing vs Encryption, Cache Compulsory vs Capacity Miss, SQL GROUP BY Employee Query, Unit vs Integration Testing, Circular vs Linear Queue, HTTP 200/403/503 Codes, 4-Variable K-Map SOP, FDM Guard Band Bandwidth, CIDR Subnetting 14.24.74.0/24, Cloud PaaS Model, Tree Terminology, Java Static Recursion Trace, Binary Search on 1M Integers, and Ambiguous Grammar Parse Trees).",
    keyTopics: [
      '4IR in Banking & Digital Literacy Focus Writing',
      'Processor Pipelining & Cache Misses',
      'SQL GROUP BY & AVG(Salary) Query',
      '4-Variable K-Map Σm(0,3,5,7,8,10,11,12,13,14,15)',
      'CIDR Subnetting 14.24.74.0/24 & FDM Guard Bands',
      'Java Static Recursion & Ambiguous Grammar'
    ],
    originalPaperImages: [
      '/assets/aistudio/756590716_927615917024142_5617784651267057381_n_bd4f8499.jpg',
      '/assets/aistudio/753702307_1316226600290659_1517521840682254191_n_dea995e1.jpg',
      '/assets/aistudio/756340606_4446274715688913_6575548999895396662_n_dc6f744d.jpg'
    ],
    sections: [
      {
        id: 'sec-25104-part1',
        name: 'Part 1 (Questions 1–5): Focus Writing, Translation & General Knowledge (50 Marks)',
        marks: 50,
        description: 'There are 6 (six) questions in total. Questions 1 to 5 cover Bangla Focus Writing (10), English Focus Writing (10), Bangla-to-English Translation (10), English-to-Bangla Translation (10), and General Knowledge (5×2 = 10 Marks).',
        questions: [
          {
            id: 'q-25104-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in Bangla:\nবাংলাদেশের ব্যাংকিং খাতে চতুর্থ শিল্পবিপ্লবের (4th Industrial Revolution) প্রভাব: ডিজিটাল রূপান্তরের সম্ভাবনা, আধুনিক প্রযুক্তির ব্যবহার, গ্রাহকসেবার পরিবর্তন এবং সংশ্লিষ্ট প্রযুক্তিগত চ্যালেঞ্জসমূহ বিশ্লেষণ করুন।',
            solution: `প্রমিত মডেল উত্তর (Senior Officer IT, Job ID-25104 — ১০ নম্বর):

১. ভূমিকা:
কৃত্রিম বুদ্ধিমত্তা (AI), মেশিন লার্নিং, ব্লকচেইন, ক্লাউড কম্পিউটিং, ইন্টারনেট অব থিংস (IoT) এবং বিগ ডেটা অ্যানালিটিক্সের সমন্বয়ে সূচিত চতুর্থ শিল্পবিপ্লব (4IR) বাংলাদেশের ব্যাংকিং ও আর্থিক খাতে এক যুগান্তকারী ডিজিটাল রূপান্তরের সূচনা করেছে। সনাতন শাখাভিত্তিক কাগজের ব্যাংকিং আজ স্মার্ট, তাৎক্ষণিক ও গ্রাহককেন্দ্রিক ডিজিটাল ফাইন্যান্সে রূপান্তরিত হচ্ছে।

২. ডিজিটাল রূপান্তরের সম্ভাবনা ও আধুনিক প্রযুক্তির ব্যবহার:
- কৃত্রিম বুদ্ধিমত্তা (AI) ও বিগ ডেটা: গ্রাহকের লেনদেনের আচরণ বিশ্লেষণ করে তাৎক্ষণিক ক্রেডিট স্কোরিং (Alternative Credit Scoring), অটোমেটেড লোন আন্ডাররাইটিং এবং রিয়েল-টাইম জালিয়াতি (Fraud Detection) শনাক্তকরণ সম্ভব হচ্ছে।
- ই-কেওয়াইসি (e-KYC) ও বায়োমেট্রিক যাচাইকরণ: জাতীয় পরিচয়পত্র (NID) সার্ভার ও ফেসিয়াল রিকগনিশন প্রযুক্তির মাধ্যমে কয়েক মিনিটেই ঘরে বসে ব্যাংক হিসাব খোলা যাচ্ছে।
- আন্তঃব্যাংক ডিজিটাল পেমেন্ট অবকাঠামো: বাংলাদেশ ব্যাংকের আরটিজিএস (RTGS), বিইএফটিএন (BEFTN), এনপিএসবি (NPSB) এবং বাংলা কিউআর (Bangla QR)-এর মাধ্যমে ২৪/৭ ক্যাশলেস লেনদেন বিস্তৃত হচ্ছে।
- রোবোটিক প্রসেস অটোমেশন (RPA) ও ক্লাউড ব্যাংকিং: ব্যাক-অফিস ক্লিয়ারিং, রেগুলেটরি রিপোর্টিং এবং অ্যান্টি-মানিলন্ডারিং (AML) স্ক্রিনিং স্বয়ংক্রিয় হওয়ায় ব্যাংকের পরিচালন ব্যয় ও সময় হ্রাস পেয়েছে।

৩. গ্রাহকসেবার পরিবর্তন:
গ্রাহকদের এখন আর সাধারণ ব্যাংকিং সেবার জন্য শাখায় গিয়ে দীর্ঘ লাইনে দাঁড়াতে হয় না। মোবাইল অ্যাপ, ইন্টারনেট ব্যাংকিং, ২৪/৭ এআই চ্যাটবট এবং এজেন্ট ব্যাংকিংয়ের ফলে প্রান্তিক জনগোষ্ঠীও তাৎক্ষণিক ব্যাংকিং সুবিধার আওতায় এসেছে।

৪. সংশ্লিষ্ট প্রযুক্তিগত চ্যালেঞ্জসমূহ:
- সাইবার নিরাপত্তা ও এপিটি (APT) ঝুঁকি: ফিশিং, র‍্যানসমওয়্যার, ডিডস (DDoS) এবং এপিআই (API)কেন্দ্রিক সাইবার হামলার ঝুঁকি বৃদ্ধি।
- ডেটা গোপনীয়তা ও লিগ্যাসি সিস্টেম একীকরণ: পুরনো কোর ব্যাংকিং সফটওয়্যারের (CBS) সাথে আধুনিক ক্লাউড ও মাইক্রোসারভিস আর্কিটেকচারের সমন্বয় সাধন।
- দক্ষ আইটি জনবলের ঘাটতি ও ডিজিটাল বৈষম্য: সাইবার সিকিউরিটি, ডেটা সায়েন্স ও ক্লাউড ইঞ্জিনিয়ারিংয়ে দক্ষ জনবলের অভাব এবং গ্রামীণ জনগোষ্ঠীর ডিজিটাল সাক্ষরতার সীমাবদ্ধতা।

৫. উপসংহার:
চতুর্থ শিল্পবিপ্লবের সুফল পুরোপুরি ঘরে তুলতে হলে বাংলাদেশের ব্যাংকগুলোকে শক্তিশালী সাইবার রেজিলিয়েন্স কাঠামো, জিরো-ট্রাস্ট সিকিউরিটি, দক্ষ আইটি জনবল তৈরি এবং বাংলাদেশ ব্যাংকের আইসিটি সিকিউরিটি গাইডলাইনের কঠোর পরিপালন নিশ্চিত করতে হবে।`,
            tags: ['Focus Writing', 'Bangla', '4IR', 'Banking Transformation', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English:\nThe Importance of Digital Literacy in Expanding Cashless Transactions in Bangladesh: Discuss how digital skills influence financial inclusion, the adoption of digital payment systems, and the challenges of building a cashless economy.',
            solution: `Verified Model Essay (Senior Officer IT, Job ID-25104 — 10 Marks):

1. Introduction:
As Bangladesh accelerates toward a cashless society through National Payment Switch Bangladesh (NPSB), Bangla QR, Mobile Financial Services (MFS), and interoperable payment platforms, physical infrastructure alone cannot guarantee universal adoption. Digital literacy—the ability of citizens and merchants to safely and confidently navigate digital financial tools—serves as the foundational catalyst linking technological innovation with real-world usage.

2. Influence on Financial Inclusion & Digital Payment Adoption:
- Empowering the Unbanked and Marginalized: Millions of rural citizens, smallholders, and micro-merchants possess mobile phones but rely on over-the-counter (OTC) cash agents due to unfamiliarity with app interfaces. Basic digital skills enable them to independently operate MFS wallets, agent banking apps, and e-KYC onboarding.
- Trust and Consumer Confidence: Digitally literate users understand how to verify merchant QR codes, protect One-Time Passwords (OTPs) and PINs, and interpret transaction confirmation alerts. This awareness directly reduces fear of digital fraud and accelerates the shift from cash-on-delivery to instant digital payments.
- MSME Digitization: When small shopkeepers can track digital ledgers and accept Bangla QR payments, they build verifiable transaction histories that unlock formal SME credit from commercial banks.

3. Challenges in Building a Cashless Economy:
- Rural-Urban & Demographic Divide: Lower smartphone penetration, language barriers in English-heavy banking interfaces, and limited digital awareness among elderly and low-income populations hinder nationwide uptake.
- Social Engineering & Cyber Scams: Phishing calls, fake customer-care impersonation, and mobile malware exploit digitally unsophisticated users, eroding public trust in cashless channels.
- Merchant Reluctance & Transaction Costs: Informal merchants often prefer cash to avoid perceived settlement delays or transaction fees.

4. Conclusion:
Building a truly inclusive cashless economy in Bangladesh requires a dual strategy: deploying intuitive, vernacular (Bangla-first) banking interfaces with robust security controls, alongside nationwide grassroots digital financial literacy campaigns led jointly by Bangladesh Bank, commercial banks, and telecom operators.`,
            tags: ['Focus Writing', 'English', 'Digital Literacy', 'Cashless Bangladesh', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-3',
            questionNo: '3',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate the following passage into English:\n“কথায় আছে, সময়ের এক ফোঁড় অসময়ের দশ ফোঁড়। অথচ আমরা আজ করব কাল করব বলে কাজ ফেলে রেখে ভাগ্যের দোহাই দিতে পছন্দ করি। আকাশকুসুম কল্পনা করে জীবনে রাতারাতি সফল হওয়া যায় না। যে জাতি যত বেশি পরিশ্রমী, সে জাতি তত বেশি উন্নত। তাই কথায় কথায় অজুহাত না দেখিয়ে আমাদের এখনই কাজে নেমে পড়া উচিত।”',
            solution: `Verified Model English Translation (10 Marks):

"There goes a proverb that a stitch in time saves nine. Yet, we prefer to put off our work for tomorrow, procrastinating day after day, and then blame our fate. One cannot achieve overnight success in life merely by building castles in the air. The more industrious a nation is, the more prosperous it becomes. Therefore, instead of making excuses at every turn, we should get down to work right now."

Key Idiomatic Mappings Used:
- সময়ের এক ফোঁড় অসময়ের দশ ফোঁড় = A stitch in time saves nine.
- আজ করব কাল করব বলে কাজ ফেলে রাখা = Put off work / procrastinate.
- ভাগ্যের দোহাই দেওয়া = Blame fate.
- আকাশকুসুম কল্পনা করা = Build castles in the air / indulge in pipe dreams.
- রাতারাতি সফল হওয়া = Achieve overnight success.
- কথায় কথায় অজুহাত না দেখিয়ে = Instead of making excuses at every turn.`,
            tags: ['Translation', 'Bangla to English', 'Proverbs', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-4',
            questionNo: '4',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate the following passage into Bangla:\n“He decided to pull out of the agreement at the eleventh hour. This sudden move took everyone by surprise and put the entire project at stake. Had he informed the team beforehand, we could have easily made alternative arrangements. Now, we are left with no other choice but to start everything from scratch. It just goes to show that you cannot always take people at their word.”',
            solution: `প্রমিত বাংলা অনুবাদ (১০ নম্বর):

"সে একেবারে শেষ মুহূর্তে চুক্তি থেকে সরে দাঁড়ানোর সিদ্ধান্ত নিল। তার এই আকস্মিক পদক্ষেপ সবাইকে হতবাক করে দিল এবং পুরো প্রকল্পটিকে ঝুঁকির মুখে ফেলে দিল। সে যদি দলকে আগেভাগেই বিষয়টি জানাত, তবে আমরা সহজেই বিকল্প ব্যবস্থা গ্রহণ করতে পারতাম। এখন একেবারে শূন্য থেকে আবার সবকিছু শুরু করা ছাড়া আমাদের সামনে আর কোনো উপায় নেই। এ থেকেই প্রমাণিত হয় যে মানুষের মুখের কথায় সবসময় বিশ্বাস রাখা যায় না।"

গুরুত্বপূর্ণ বাগধারা ও ফ্রেজসমূহ:
- At the eleventh hour = একেবারে শেষ মুহূর্তে।
- Pull out of the agreement = চুক্তি থেকে সরে দাঁড়ানো / নাম প্রত্যাহার করা।
- Put the entire project at stake = পুরো প্রকল্পটিকে ঝুঁকির মুখে / বিপন্ন অবস্থায় ফেলে দেওয়া।
- Start everything from scratch = একেবারে শূন্য বা গোড়া থেকে সবকিছু শুরু করা।
- Take people at their word = মানুষের মুখের কথায় বিশ্বাস করা।`,
            tags: ['Translation', 'English to Bangla', 'Idioms', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-5',
            questionNo: '5',
            type: 'short_note',
            topicCategory: 'E-Governance & ICT Laws',
            questionText: 'General Knowledge (5 × 2 = 10 Marks):\n5.1 What is the full form of NPSB in the banking sector of Bangladesh?\n5.2 Who is the architect of the National Martyrs’ Memorial in Savar?\n5.3 What is the name of the central bank of the United Kingdom?\n5.4 Which international organization publishes the “World Economic Outlook” report?\n5.5 What is the name of the first submarine communications cable system that Bangladesh is connected to?',
            solution: `Exact Verified Answers (5 × 2 = 10 Marks):

5.1 Full form of NPSB:
Answer: National Payment Switch Bangladesh (operated by Bangladesh Bank; launched on December 27, 2012 to facilitate interbank electronic retail payments across ATMs, POS, and Internet Banking).

5.2 Architect of the National Martyrs' Memorial (Jatiya Smriti Soudho) in Savar:
Answer: Syed Mainul Hossain (সৈয়দ মাইনুল হোসেন).

5.3 Name of the central bank of the United Kingdom:
Answer: Bank of England (founded in 1694; headquartered on Threadneedle Street, London).

5.4 International organization that publishes the "World Economic Outlook" (WEO) report:
Answer: International Monetary Fund (IMF) (published biannually in April and October).

5.5 Name of the first submarine communications cable system that Bangladesh is connected to:
Answer: SEA-ME-WE 4 (South East Asia–Middle East–Western Europe 4; landing station at Cox's Bazar, connected in May 2006).`,
            tags: ['General Knowledge', 'NPSB', 'Bank of England', 'IMF', 'SEA-ME-WE 4', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-25104-part2',
        name: 'Part 2 (Question 6): Subject Related Questions (15 × 10 = 150 Marks)',
        marks: 150,
        description: 'Official 15 Subject Related Computer Science & IT questions (6.1 to 6.15), carrying 10 marks each (15 × 10 = 150 Marks).',
        questions: [
          {
            id: 'q-25104-6-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Why do modern processor designs favor a multi-stage pipelined approach over a single-cycle implementation?',
            solution: `1. Core Architectural Reason:
In a Single-Cycle processor implementation, the clock cycle time (T_cycle) must be stretched to accommodate the slowest instruction in the instruction set (typically a Load Word \`lw\` instruction that sequentially traverses Instruction Fetch -> Register Read -> ALU Execution -> Data Memory Access -> Register Write-Back). Every simpler instruction (such as \`add\` or \`beq\`) is forced to wait for this worst-case critical path delay, leaving hardware functional units idle for most of the cycle.

In contrast, a Multi-Stage Pipelined processor divides instruction execution into k discrete stages (e.g., 5-stage RISC pipeline: IF, ID, EX, MEM, WB) separated by pipeline registers, allowing multiple instructions to overlap in execution simultaneously.

2. Key Advantages of Multi-Stage Pipelining over Single-Cycle:
- Higher Clock Frequency (Shorter Clock Period): The clock period is determined by the delay of the single slowest stage rather than the sum of all stages (T_pipeline ≈ T_single_cycle / k + latch overhead).
- Instruction-Level Parallelism (ILP) & Higher Throughput: While the latency of an individual instruction does not decrease, steady-state throughput approaches 1 instruction per clock cycle (CPI ≈ 1), yielding an ideal speedup close to k (the number of pipeline stages).
- Superior Hardware Utilization: All functional units (Instruction Memory, Register File, ALU, Data Memory) work concurrently on different instructions during every clock tick rather than sitting idle 80% of the time.

3. Example Comparison:
If IF=200ps, ID=100ps, EX=200ps, MEM=200ps, WB=100ps:
- Single-Cycle Clock Period = 200+100+200+200+100 = 800 ps (1.25 GHz).
- 5-Stage Pipelined Clock Period = max(200,100,200,200,100) = 200 ps (5.0 GHz) — achieving up to a 4x instruction throughput improvement.`,
            tags: ['Computer Architecture', 'Processor Pipelining', 'Single-Cycle vs Pipelined', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-6-2',
            questionNo: '6.2',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the operational difference between Hashing and Encryption.',
            solution: `Operational Comparison between Hashing and Encryption:

1. Directionality (One-Way vs. Two-Way):
- Hashing is a strictly ONE-WAY mathematical function: H(M) = d. Given the fixed-length message digest d, it is computationally infeasible (pre-image resistance) to reverse the operation and recover the original input M.
- Encryption is a TWO-WAY reversible cryptographic transformation: C = E(K_e, P) and P = D(K_d, C). Anyone possessing the valid decryption key (symmetric secret key or asymmetric private key) can invert the ciphertext C back to the exact original plaintext P.

2. Primary Security Objective:
- Hashing guarantees DATA INTEGRITY and authenticity verification (detecting whether a file, transaction payload, or password has been altered).
- Encryption guarantees DATA CONFIDENTIALITY (secrecy against unauthorized eavesdroppers in transit or at rest).

3. Output Length:
- Hashing maps arbitrary-length input data into a FIXED-LENGTH digest (e.g., SHA-256 always outputs 256 bits / 32 bytes regardless of whether the input is 4 bytes or 4 GB).
- Encryption produces ciphertext whose size is PROPORTIONAL to the input plaintext size (plus block padding or initialization vector overhead).

4. Key Usage & Standard Examples:
- Hashing: Uses no key (unkeyed hash like SHA-256, SHA-3, bcrypt) or a verification key in HMAC. Used for password storage, digital signature digests, and blockchain Merkle trees.
- Encryption: Always requires cryptographic keys (Symmetric: AES-256, ChaCha20; Asymmetric: RSA, ECC). Used for TLS/HTTPS traffic, database column encryption, and PIN blocks.`,
            tags: ['Cryptography', 'Hashing vs Encryption', 'Information Security', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25104-6-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Explain the difference between a "Compulsory Miss" (Cold Miss) and a "Capacity Miss" in cache memory.',
            solution: `In computer architecture (the Three Cs Cache Miss Model — Compulsory, Capacity, and Conflict misses):

1. Compulsory Miss (Cold-Start Miss / First-Reference Miss):
- Definition: A cache miss that occurs the VERY FIRST TIME a specific memory block is referenced by the CPU. Because the cache starts empty ("cold"), the block has never been brought into the cache before.
- Cause: Inevitable initial loading of instructions or data into cache lines.
- Mitigation: Increasing cache size or associativity cannot eliminate compulsory misses. They can only be reduced by increasing the Cache Block Size (exploiting spatial locality) or using hardware/software Prefetching.

2. Capacity Miss:
- Definition: A cache miss that occurs because the cache is physically TOO SMALL to hold all the active memory blocks (the "working set") required during a program's execution phase. Blocks are evicted even if the cache is fully associative, and later re-referenced.
- Cause: The program's working set size exceeds the total byte capacity of the cache.
- Mitigation: Capacity misses can be reduced by increasing the total physical Cache Size (e.g., larger L2/L3 cache) or restructuring software loops (such as Loop Tiling / Blocking in matrix multiplication) so the active working set fits inside the cache.`,
            tags: ['Computer Architecture', 'Cache Memory', 'Compulsory Miss', 'Capacity Miss', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-6-4',
            questionNo: '6.4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider the following relation:\nEmployee(EmpID, Name, Department, Salary)\nWrite an SQL query to retrieve the Department, the total number of employees, and the average salary for each department. The output should display one record for each department.',
            solution: `To produce exactly one summary row per department containing the department name, total employee count, and average salary, we group the \`Employee\` relation by \`Department\` using \`GROUP BY Department\` and apply the aggregate functions \`COUNT(EmpID)\` (or \`COUNT(*)\`) and \`AVG(Salary)\`.`,
            codeSolution: `-- Official SQL Solution for Question 6.4 (Job ID-25104)
SELECT 
    Department,
    COUNT(EmpID) AS Total_Employees,
    AVG(Salary) AS Average_Salary
FROM Employee
GROUP BY Department;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'GROUP BY', 'COUNT', 'AVG', 'DBMS', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25104-6-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the difference between Unit Testing and Integration Testing.',
            solution: `Comparison between Unit Testing and Integration Testing in Software Engineering:

1. Scope & Target Under Test:
- Unit Testing tests the smallest isolated testable component of software—such as an individual function, method, or class—independently of external dependencies.
- Integration Testing combines multiple individual modules/services and tests their interactions, data flow, interface contracts, and communication pathways as a connected group.

2. Handling of External Dependencies:
- Unit Testing isolates the unit by replacing databases, network sockets, file systems, and third-party APIs with Mocks, Stubs, or Fakes.
- Integration Testing uses real or test-container instances of databases, REST/gRPC APIs, message queues, and file systems to verify that modules work together properly.

3. Primary Defect Types Detected:
- Unit Testing catches algorithmic logic bugs, boundary condition errors, null-pointer exceptions, and incorrect mathematical calculations inside a single method.
- Integration Testing catches interface mismatches, JSON/XML serialization errors, SQL schema incompatibilities, transaction rollback failures, and authentication/authorization handoff bugs between modules.

4. Execution Speed, Cost & Phase:
- Unit Testing is written by developers during coding (often via TDD using JUnit, PyTest, Jest), executes in milliseconds in memory, and is cheap to debug.
- Integration Testing is executed after unit testing (via Top-Down, Bottom-Up, or Sandwich integration), requires test environment setup, runs slower, and is more complex to diagnose.`,
            tags: ['Software Engineering', 'Unit Testing', 'Integration Testing', 'Software QA', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25104-6-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Why is a Circular Queue preferred over a Linear Queue in many operating systems? Explain with one example.',
            solution: `1. Why Circular Queue is Preferred Over Linear Queue:
- Eliminates "False Overflow" (Memory Wastage): In an array-backed Linear Queue of size N, as elements are inserted (` + '`rear++`' + `) and deleted from the front (` + '`front++`' + `), the empty slots before \`front\` can never be reused. Once \`rear == N - 1\`, the linear queue reports "Queue Full (Overflow)" even if all previous N - 1 positions are empty!
- O(1) Operations Without Array Shifting: To reuse space in a linear queue, the OS would have to shift all remaining elements left on every dequeue, degrading performance from O(1) to O(N). A Circular Queue wraps \`rear\` and \`front\` around to index 0 using modulo arithmetic:
  \`rear = (rear + 1) % capacity\` and \`front = (front + 1) % capacity\`.
  This guarantees strict O(1) enqueue and O(1) dequeue while achieving 100% buffer utilization.

2. Operating System Example:
- Round-Robin CPU Scheduling Ready Queue / Keyboard I/O Ring Buffer:
  Suppose an OS Keyboard Driver uses a 5-slot queue \`Q[0..4]\`.
  * 5 keystrokes arrive: \`front = 0, rear = 4\` (Queue full).
  * The CPU processes 3 keystrokes: \`front\` moves to index \`3\`, leaving slots \`0, 1, 2\` free.
  * When a 6th keystroke arrives, a Linear Queue fails (` + '`rear == 4`' + `) or wastes CPU cycles shifting elements. A Circular Queue sets \`rear = (4 + 1) % 5 = 0\` and stores the new keystroke in \`Q[0]\` in O(1) time. The same ring-buffer mechanism is used in Network Interface Card (NIC) DMA packet rings and Round-Robin CPU process scheduling.`,
            tags: ['Data Structures', 'Circular Queue', 'Linear Queue', 'Operating Systems', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25104-6-7',
            questionNo: '6.7',
            type: 'short_note',
            topicCategory: 'Networking & Security',
            questionText: 'What do the following specific HTTP status codes mean? Write down the exact standard text phrase for each:\n(a) 200: ___________________________\n(b) 403: ___________________________\n(c) 503: ___________________________',
            solution: `Exact Standard IETF RFC 9110 / HTTP Reason Phrases & Meanings:

(a) 200: OK
- Meaning: The HTTP request has succeeded. The payload returned in the response depends on the request method used (e.g., for GET, the requested resource is transmitted in the message body).

(b) 403: Forbidden
- Meaning: The server understood the request but refuses to authorize it. Unlike 401 Unauthorized, authenticating will not help; the client does not have access rights/permissions to the content.

(c) 503: Service Unavailable
- Meaning: The server is not ready to handle the request. Common causes are a server that is down for maintenance or is temporarily overloaded with traffic.`,
            tags: ['HTTP Status Codes', 'Web Protocols', 'Networking', '200 OK', '403 Forbidden', '503 Service Unavailable', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25104-6-8',
            questionNo: '6.8',
            type: 'math',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Simplify the following boolean expression using 4 variable K-map\nF(A,B,C,D)= ∑m(0,3,5,7,8,10,11,12,13,14,15).\nDraw the K-map grid, clearly show your groupings (loops), and write the final simplified Sum-of-Products (SOP) expression.',
            solution: `Step-by-Step 4-Variable Karnaugh Map (K-Map) Simplification:

1. Given Minterms:
F(A, B, C, D) = ∑m(0, 3, 5, 7, 8, 10, 11, 12, 13, 14, 15)

2. 4-Variable K-Map Grid (Rows = AB in Gray Code 00, 01, 11, 10; Columns = CD in Gray Code 00, 01, 11, 10):

              CD=00     CD=01     CD=11     CD=10
           +---------+---------+---------+---------+
  AB = 00  |  1 (m0) |  0 (m1) |  1 (m3) |  0 (m2) |
           +---------+---------+---------+---------+
  AB = 01  |  0 (m4) |  1 (m5) |  1 (m7) |  0 (m6) |
           +---------+---------+---------+---------+
  AB = 11  |  1 (m12)|  1 (m13)|  1 (m15)|  1 (m14)|
           +---------+---------+---------+---------+
  AB = 10  |  1 (m8) |  0 (m9) |  1 (m11)|  1 (m10)|
           +---------+---------+---------+---------+

3. Optimal Prime Implicant Groupings (Loops):
- Group 1 (Quad — 4 cells): Cover m0 and m8? Wait: let's check all 1s in the K-map:
  * Row AB=11 has (m12, m13, m15, m14) = (1, 1, 1, 1).
  * Row AB=10 has (m8, m9, m11, m10) = (1, 0, 1, 1).
  Let's form the largest power-of-2 loops covering all 11 minterms:
  * Loop 1 (Quad — 4 cells: m12, m13, m15, m14):
    Entire row AB = 11 -> Simplifies to: AB
  * Loop 2 (Quad — 4 cells: m8, m10, m12, m14):
    Wrap-around left and right columns (CD = 00 and CD = 10) across rows AB = 11 and AB = 10 -> A = 1 and D = 0 -> Simplifies to: AD'
  * Loop 3 (Quad — 4 cells: m3, m7, m15, m11):
    Entire column CD = 11 across all 4 rows -> Simplifies to: CD
  * Loop 4 (Quad — 4 cells: m5, m7, m13, m15):
    Square in rows AB = 01, 11 and columns CD = 01, 11 -> B = 1 and D = 1 -> Simplifies to: BD
  * Loop 5 (Pair — 2 cells: m0, m8):
    Wrap-around top-left (AB=00, CD=00) and bottom-left (AB=10, CD=00) -> B = 0, C = 0, D = 0 -> Simplifies to: B'C'D'

4. Verification of Every Minterm Coverage:
- m0  (0000): Covered by B'C'D'
- m3  (0011): Covered by CD
- m5  (0101): Covered by BD
- m7  (0111): Covered by BD and CD
- m8  (1000): Covered by AD' and B'C'D'
- m10 (1010): Covered by AD'
- m11 (1011): Covered by CD (and AC)
- m12 (1100): Covered by AB and AD'
- m13 (1101): Covered by AB and BD
- m14 (1110): Covered by AB and AD'
- m15 (1111): Covered by AB, BD, CD

5. Final Simplified Sum-of-Products (SOP) Expression:
F(A, B, C, D) = AB + AD' + BD + CD + B'C'D'
(Note: AB is a consensus term covered by AD' + BD, so the minimal 4-term SOP expression is:
F(A, B, C, D) = AD' + BD + CD + B'C'D')`,
            tags: ['Digital Logic', 'K-Map', 'Boolean Algebra', 'SOP Simplification', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-6-9',
            questionNo: '6.9',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'Five channels, each with a 100-kHz bandwidth, are to be multiplexed together. What is the minimum bandwidth of the link if there is a need for a guard band of 10 kHz between the channels to prevent interference?',
            solution: `Frequency-Division Multiplexing (FDM) Bandwidth Calculation (Forouzan Data Communications Standard Problem):

1. Given Parameters:
- Number of channels (N) = 5
- Bandwidth of each channel (B_channel) = 100 kHz
- Number of guard bands required between N channels = N - 1 = 5 - 1 = 4 guard bands
- Bandwidth of each guard band (B_guard) = 10 kHz

2. Formula:
Minimum Link Bandwidth = (N × B_channel) + ((N - 1) × B_guard)

3. Calculation:
- Total Channel Bandwidth = 5 × 100 kHz = 500 kHz
- Total Guard Band Bandwidth = 4 × 10 kHz = 40 kHz
- Minimum Bandwidth of the Link = 500 kHz + 40 kHz = 540 kHz

Answer: The minimum bandwidth of the link is 540 kHz.`,
            tags: ['Data Communications', 'Multiplexing', 'FDM', 'Guard Band', 'Forouzan', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25104-6-10',
            questionNo: '6.10',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'An organization is granted the IPv4 network block 14.24.74.0/24 and needs to segment it into two subnets: Subnet A (requires 120 addresses) and Subnet B (requires 60 addresses). Allocating sequentially from the requirement first to maximize remaining address space, state only the Network Address (with its CIDR mask) and the Broadcast Address for both subnets.',
            solution: `Step-by-Step VLSM / CIDR Subnetting of 14.24.74.0/24:

1. Subnet A (Requires 120 addresses):
- Nearest power of 2 >= 120 is 2^7 = 128 addresses (host bits h = 7).
- CIDR Prefix Mask: 32 - 7 = /25 (Subnet Mask: 255.255.255.128, Block Size = 128).
- Network Address (with CIDR mask): 14.24.74.0/25
- Broadcast Address: 14.24.74.127

2. Subnet B (Requires 60 addresses, allocated sequentially starting at 14.24.74.128):
- Nearest power of 2 >= 60 is 2^6 = 64 addresses (host bits h = 6).
- CIDR Prefix Mask: 32 - 6 = /26 (Subnet Mask: 255.255.255.192, Block Size = 64).
- Network Address (with CIDR mask): 14.24.74.128/26
- Broadcast Address: 14.24.74.191

Required Concise Final Output:
• Subnet A:
  - Network Address: 14.24.74.0/25
  - Broadcast Address: 14.24.74.127
• Subnet B:
  - Network Address: 14.24.74.128/26
  - Broadcast Address: 14.24.74.191`,
            tags: ['Networking', 'Subnetting', 'VLSM', 'CIDR', 'IPv4', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-6-11',
            questionNo: '6.11',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'A startup company wants to launch a new web application. They do not want to manage any underlying hardware, operating systems, or even the runtime environment; they only want to focus on writing and deploying their code. Based on your understanding of Cloud Service Models, which model (IaaS, PaaS, or SaaS) is most appropriate for them? Provide two real-world examples of platforms that provide this specific type of service.',
            solution: `1. Most Appropriate Cloud Service Model:
Answer: PaaS (Platform as a Service).

2. Justification:
- In IaaS (Infrastructure as a Service), the cloud provider manages only physical servers, storage, networking, and virtualization, while the startup must still patch and manage the Operating System, middleware, and runtime environment.
- In SaaS (Software as a Service), the customer consumes a finished end-user software product (e.g., Gmail, Salesforce) and does not write or deploy custom application code.
- In PaaS (Platform as a Service), the cloud provider manages the underlying hardware, virtualization, operating system, databases, web servers, and language runtime environment. The startup developers only manage their application source code and data, making PaaS the exact match for their requirement.

3. Two Real-World Examples of PaaS Platforms:
1. Google App Engine (GAE) / Heroku
2. AWS Elastic Beanstalk / Microsoft Azure App Service`,
            tags: ['Cloud Computing', 'PaaS', 'IaaS vs PaaS vs SaaS', 'System Design', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25104-6-12',
            questionNo: '6.12',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Define the following terms used in tree data structures: (i) Tree, (ii) Leaf Node, (iii) Internal Node, and (iv) Height of a Tree. Provide a suitable example to illustrate each term.',
            solution: `Definitions and Illustrative Example:

Consider the following example Binary Tree rooted at node A:
        A          (Level 0 / Root)
       / \\
      B   C        (Level 1)
     / \\
    D   E          (Level 2)

(i) Tree:
- Definition: A Tree is a non-linear, hierarchical, connected acyclic graph data structure consisting of a finite set of one or more nodes such that there is one specially designated node called the Root, and the remaining nodes are partitioned into k >= 0 disjoint subsets, each of which is itself a tree (subtrees of the root). A tree with N nodes always has exactly N - 1 edges.
- Example: The entire hierarchical structure {A, B, C, D, E} rooted at A is a Tree with 5 nodes and 4 edges.

(ii) Leaf Node (External / Terminal Node):
- Definition: A node in a tree that has NO children (its out-degree or degree of children is 0).
- Example: In the tree above, nodes D, E, and C have no child nodes, so {D, E, C} are Leaf Nodes.

(iii) Internal Node (Non-Terminal / Branch Node):
- Definition: Any node in a tree that has AT LEAST ONE child (i.e., any node that is not a leaf node, including the root if it has children).
- Example: In the tree above, nodes A (children B, C) and B (children D, E) are Internal Nodes.

(iv) Height of a Tree:
- Definition: The length (number of edges) on the longest downward path from the Root node to the deepest Leaf node in the tree. (A tree with only a root node has height 0).
- Example: In the tree above, the longest path from the root A to a leaf is A -> B -> D (or A -> B -> E), which contains 2 edges (3 nodes). Therefore, the Height of the tree is 2 (or 3 if counting levels/nodes by convention; standard edge-based height = 2).`,
            tags: ['Data Structures', 'Trees', 'Leaf Node', 'Internal Node', 'Tree Height', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25104-6-13',
            questionNo: '6.13',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Consider the following Java program and determine the integer value printed by the execution of the main() method.',
            codeSnippet: `class Test {
    static int x = 5;
    public static int fun(int n) {
        if (n <= 1) {
            return 1;
        }
        x = x + 2;
        return fun(n - 1) + x;
    }
    public static void main(String[] args) {
        System.out.println(fun(3));
    }
}`,
            language: 'java',
            solution: `Step-by-Step Execution Trace of \`fun(3)\` (Crucial Detail: \`static int x\` is a single class-level static variable, and in Java binary addition \`fun(n - 1) + x\`, the left operand \`fun(n - 1)\` is completely evaluated BEFORE reading the right operand \`x\`!):

1. Initial State:
   \`Test.x = 5\`

2. Call 1: \`fun(3)\`
   - Is \`3 <= 1\`? False.
   - \`x = x + 2\` => \`x\` becomes \`5 + 2 = 7\`.
   - Evaluates \`return fun(2) + x;\`
   - Java first invokes the left operand \`fun(2)\` before reading \`x\`.

3. Call 2: \`fun(2)\`
   - Is \`2 <= 1\`? False.
   - \`x = x + 2\` => \`x\` becomes \`7 + 2 = 9\`.
   - Evaluates \`return fun(1) + x;\`
   - Java first invokes the left operand \`fun(1)\` before reading \`x\`.

4. Call 3 (Base Case): \`fun(1)\`
   - Is \`1 <= 1\`? True!
   - Returns \`1\` immediately. (\`x\` remains \`9\`).

5. Unwinding Call 2 (\`fun(2)\`):
   - \`fun(1)\` returned \`1\`.
   - Now Java reads the current value of static variable \`x\`, which is \`9\`.
   - \`fun(2)\` returns \`1 + 9 = 10\`.

6. Unwinding Call 1 (\`fun(3)\`):
   - \`fun(2)\` returned \`10\`.
   - Now Java reads the current value of static variable \`x\`, which is STILL \`9\`.
   - \`fun(3)\` returns \`10 + 9 = 19\`.

Final Answer:
The integer value printed by the execution of \`main()\` is: 19`,
            codeSolution: `// Verification in Java:
// Output printed to console: 19
class Test {
    static int x = 5;
    public static int fun(int n) {
        if (n <= 1) {
            return 1;
        }
        x = x + 2;
        return fun(n - 1) + x; // fun(n-1) executes first, mutating static x to 9
    }
    public static void main(String[] args) {
        System.out.println(fun(3)); // Prints: 19
    }
}`,
            solutionLanguage: 'java',
            tags: ['Java', 'Recursion', 'Static Variable', 'Code Trace', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-25104-6-14',
            questionNo: '6.14',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'An array contains one million sorted integers. Which searching algorithm would you choose to find a given element? Justify your answer.',
            solution: `1. Chosen Searching Algorithm:
Answer: Binary Search.

2. Justification:
- Exploiting Sorted Order & Random Access: Because the data structure is an Array (providing O(1) random index access) and the 1,000,000 integers are already SORTED, Binary Search repeatedly divides the search interval in half by comparing the target key with the middle element \`arr[mid]\`.
- Logarithmic Time Complexity O(log₂ n) vs. Linear O(n):
  * For n = 1,000,000 (10^6) elements:
    - Linear Search requires up to 1,000,000 comparisons in the worst case and 500,000 comparisons on average.
    - Binary Search requires at most ⌈log₂(1,000,000)⌉ = 20 comparisons in the worst case (since 2^20 = 1,048,576 > 1,000,000)!
- Space Efficiency: Iterative Binary Search requires O(1) auxiliary memory space, making it fast, cache-friendly, and optimal for a static sorted array of 1 million integers.`,
             codeSolution: `int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1; // high = 999,999
    while (low <= high) {
        int mid = low + (high - low) / 2; // At most 20 iterations for N = 1,000,000
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
            solutionLanguage: 'java',
            tags: ['Algorithms', 'Binary Search', 'Time Complexity', 'Sorted Array', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-25104-6-15',
            questionNo: '6.15',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Consider the grammar:\nE → E + E | E * E | id\nShow that the grammar is ambiguous for the string:\nid + id * id',
            solution: `Proof of Grammar Ambiguity for String \`id + id * id\`:

1. Definition of Ambiguous Grammar:
A Context-Free Grammar (CFG) is ambiguous if there exists at least one string in its language that has TWO OR MORE distinct Parse Trees (or equivalently, two or more distinct Leftmost Derivations).

2. Given Grammar:
   E → E + E
   E → E * E
   E → id
   Target String: \`id + id * id\`

3. Leftmost Derivation 1 (Expanding '+' at the root — treats '*' as higher precedence):
   E ⇒ E + E
     ⇒ id + E
     ⇒ id + E * E
     ⇒ id + id * E
     ⇒ id + id * id

   Parse Tree 1:
          E
        / | \\
       E  +   E
       |    / | \\
      id   E  *  E
           |     |
          id    id
   (Evaluates as: \`id + (id * id)\`)

4. Leftmost Derivation 2 (Expanding '*' at the root — treats '+' as evaluated first):
   E ⇒ E * E
     ⇒ E + E * E
     ⇒ id + E * E
     ⇒ id + id * E
     ⇒ id + id * id

   Parse Tree 2:
            E
          / | \\
         E  *  E
       / | \\   |
      E  +  E  id
      |     |
     id    id
   (Evaluates as: \`(id + id) * id\`)

5. Conclusion:
Since the string \`id + id * id\` produces two structurally distinct parse trees (and two distinct leftmost derivations) yielding different semantic evaluations, the grammar \`E → E + E | E * E | id\` is proved to be AMBIGUOUS.`,
            tags: ['Compiler Design', 'Ambiguous Grammar', 'Parse Tree', 'Leftmost Derivation', 'CFG', 'Job ID 25104'],
            marks: 10,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 2. Job ID: 10185 (Combined Bank Senior Officer IT — Exam May 17, 2024, BIBM)
  {
    id: 'so-it-10185',
    title: 'Senior Officer (IT), Combined Bank (Job ID: 10185) — BIBM Official Paper',
    searchQuery: 'Senior Officer (IT), Combined Bank (Job ID: 10185) 2024 BIBM question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: '10185',
    circularYear: '2023 (Exam: May 17, 2024)',
    examDate: 'May 17, 2024',
    examBody: 'BIBM — Bankers Selection Committee Secretariat (BSCS)',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Bangladesh Development Bank PLC (BDBL)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Authentic BIBM 156-vacancy Senior Officer (IT) Grade-9 written question paper held on May 17, 2024. Features exact scraped questions: Bangla Focus Writing on Severe Heatwaves & Environmental Protection ("তীব্র তাপপ্রবাহ হ্রাসে পরিবেশ সুরক্ষার গুরুত্ব"), English Focus Writing on "Modern Technology and Its Effect on Student Academic Performance", Bi-directional Translations, Analytical Math, and 12 Subject-Related CSE/IT questions (150 Marks) covering ER-to-Relational Many-to-Many mapping, IT Audit Controls (Policies vs Guidelines vs Procedures), BCNF Decomposition, C/C++ Pointer & Recursion Output Tracing, TCP 3-Way Handshake, OSPF vs BGP, SQL Subqueries, and Linux Backup Automation.',
    keyTopics: [
      'তীব্র তাপপ্রবাহ হ্রাসে পরিবেশ সুরক্ষার গুরুত্ব (Focus Writing)',
      'Modern Technology & Student Academic Performance',
      'ER Many-to-Many Relational Mapping',
      'IT Audit: Policies vs Guidelines vs Procedures',
      'BCNF Lossless Decomposition',
      'C/C++ Code Output Tracing',
      'TCP 3-Way Handshake & SYN Cookies',
      'SQL Subqueries & Aggregations'
    ],
    sections: [
      {
        id: 'sec-10185-nontech',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (50 Marks)',
        marks: 50,
        description: 'Official Part 1 (Questions 1 to 5): Bangla Focus Writing, English Focus Writing, Bangla-to-English Translation, English-to-Bangla Translation, and Analytical Mathematics.',
        questions: [
          {
            id: 'q-10185-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in Bangla:\nতীব্র তাপপ্রবাহ হ্রাসে পরিবেশ সুরক্ষার গুরুত্ব: জলবায়ু পরিবর্তন, অপরিকল্পিত নগরায়ন, বৃক্ষনিধন এবং টেকসই সবুজায়নের মাধ্যমে তাপপ্রবাহ নিয়ন্ত্রণের উপায় বিশ্লেষণ করুন।',
            solution: `১. ভূমিকা:
সাম্প্রতিক বছরগুলোতে বাংলাদেশে তীব্র থেকে অতি তীব্র তাপপ্রবাহ (Severe Heatwave) জনজীবন, কৃষি ও জাতীয় অর্থনীতিকে চরম বিপর্যয়ের মুখে ঠেলে দিয়েছে। বৈশ্বিক উষ্ণায়নের পাশাপাশি স্থানীয় পর্যায়ে নির্বিচারে বৃক্ষনিধন, জলাশয় ভরাট এবং অপরিকল্পিত কংক্রিট নগরায়নের ফলে শহরগুলো 'আরবান হিট আইল্যান্ড' (Urban Heat Island)-এ পরিণত হয়েছে।

২. তীব্র তাপপ্রবাহের মূল কারণসমূহ:
- নির্বিচারে বনভূমি ও বৃক্ষ উজাড়: একটি দেশের পরিবেশগত ভারসাম্য রক্ষায় মোট ভূমির অন্তত ২৫ শতাংশ বনভূমি থাকা প্রয়োজন, অথচ নগরায়ন ও শিল্পায়নের চাপে সবুজ আচ্ছাদন দ্রুত হ্রাস পাচ্ছে।
- জলাভূমি ও নদী ভরাট: ঢাকা ও অন্যান্য মহানগরের খাল, পুকুর ও জলাশয় ভরাট করে বহুতল ভবন নির্মাণের ফলে প্রাকৃতিক শীতলীকরণ ব্যবস্থা (Natural Cooling Mechanism) ধ্বংস হয়েছে।
- গ্রিনহাউস গ্যাস নিঃসরণ ও জীবাশ্ম জ্বালানি: শিল্পকারখানা, যানবাহনের কালো ধোঁয়া এবং শীতাতপ নিয়ন্ত্রণ যন্ত্রের (AC) অতিরিক্ত ব্যবহারে বায়ুমণ্ডলের তাপমাত্রা ক্রমাগত বৃদ্ধি পাচ্ছে।

৩. পরিবেশ সুরক্ষার মাধ্যমে তাপপ্রবাহ প্রশমনের উপায়:
- ব্যাপক বনায়ন ও ছাদবাগান (Rooftop Gardening): সড়কদ্বীপ, নদীর তীর ও নগরীর ভবনগুলোর ছাদে দেশীয় ফলদ ও ছায়াদানকারী বৃক্ষ রোপণ।
- জলাধার পুনরুদ্ধার ও সংরক্ষণ: নগরীর দখলকৃত খাল ও জলাশয় উদ্ধার করে পানির স্বাভাবিক প্রবাহ নিশ্চিত করা।
- গ্রিন বিল্ডিং ও নবায়নযোগ্য জ্বালানি: পরিবেশবান্ধব স্থাপত্যশৈলী গ্রহণ এবং সৌরবিদ্যুতের ব্যবহার বৃদ্ধি করা।
- গ্রিন ব্যাংকিং ও পরিবেশবান্ধব অর্থায়ন: বাংলাদেশ ব্যাংকের নির্দেশনা অনুযায়ী পরিবেশ দূষণকারী শিল্পের পরিবর্তে ইটিপি (ETP) ও নবায়নযোগ্য জ্বালানি প্রকল্পে অগ্রাধিকারমূলক অর্থায়ন।

৪. উপসংহার:
প্রকৃতির প্রতি বৈরী আচরণ বন্ধ করে টেকসই পরিবেশ সুরক্ষা নিশ্চিত করা না গেলে তীব্র তাপপ্রবাহ ভবিষ্যতে আরও ভয়াবহ রূপ ধারণ করবে। তাই রাষ্ট্রীয় নীতিমালার কঠোর বাস্তবায়ন ও নাগরিক সচেতনতার সমন্বয়েই একটি বাসযোগ্য সবুজ বাংলাদেশ গড়ে তোলা সম্ভব।`,
            tags: ['Focus Writing in Bangla', 'Heatwave', 'Environment', 'BIBM Authentic', 'Job ID 10185'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English:\nModern Technology and Its Effect on Student Academic Performance: Discuss both the transformative educational advantages and cognitive/behavioral challenges of digital technology on students.',
            solution: `1. Introduction:
Modern digital technology—encompassing high-speed internet, interactive e-learning platforms, artificial intelligence tutors, and smart devices—has fundamentally reshaped the educational landscape. Its impact on student academic performance is profound and multifaceted, presenting both unprecedented learning opportunities and critical cognitive challenges.

2. Positive Impacts on Academic Performance:
- Democratization of Knowledge: Platforms like Coursera, Khan Academy, MIT OpenCourseWare, and digital libraries allow students in remote areas of Bangladesh to access world-class lectures and research papers instantaneously.
- Interactive & Personalized Learning: Adaptive learning software and visual simulations help students grasp complex STEM concepts (such as algorithm visualization, molecular biology, and calculus) at their own pace.
- Collaborative Research: Cloud tools, virtual labs, and academic forums foster global peer-to-peer collaboration and problem-solving skills.

3. Adverse Effects & Challenges:
- Digital Distraction & Diminished Attention Span: Excessive engagement with social media, short-form video reels, and online gaming fragments sustained concentration, leading to procrastination and superficial reading habits.
- Over-Reliance on Automated Tools: Uncritical dependence on generative tools for assignments can erode analytical thinking, original writing skills, and mathematical problem-solving foundations.
- Health & Sleep Deprivation: Prolonged screen exposure late at night disrupts circadian rhythms, directly impairing memory consolidation and classroom alertness.

4. Conclusion:
Technology in education is a double-edged sword. To maximize academic excellence, educational institutions and parents must cultivate digital discipline, integrating technology as an empowering pedagogical aid rather than a substitute for critical human inquiry.`,
            tags: ['Focus Writing in English', 'Modern Technology', 'Academic Performance', 'BIBM Authentic', 'Job ID 10185'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-3',
            questionNo: '3',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate the following passage into English:\n"তথ্যপ্রযুক্তির বিপ্লব আমাদের দৈনন্দিন জীবন ও কর্মক্ষেত্রকে অভাবনীয় গতি দিয়েছে। কিন্তু প্রযুক্তির সুফল তখনই সার্থক হয় যখন তা সাধারণ মানুষের জীবনমান উন্নয়নে ব্যবহৃত হয়। ডিজিটাল বিভাজন দূর করে শহর ও গ্রামের মানুষের মধ্যে সমান সুযোগ তৈরি করাই বর্তমান সময়ের সবচেয়ে বড় চ্যালেঞ্জ। এজন্য প্রয়োজন মানসম্মত কারিগরি শিক্ষা এবং সাশ্রয়ী ইন্টারনেট সেবা।"',
            solution: `Standard High-Quality English Translation:
"The revolution in information technology has imparted unprecedented momentum to our daily lives and workplaces. However, the benefits of technology become truly meaningful only when they are utilized to improve the living standards of common people. Eliminating the digital divide and creating equal opportunities between urban and rural populations is the greatest challenge of the present era. For this purpose, quality technical education and affordable internet services are indispensable."`,
            tags: ['Translation', 'Bangla to English', 'Digital Divide', 'Job ID 10185'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-4',
            questionNo: '4',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate the following passage into Bangla:\n"Continuous integration and automated software testing enable banking engineering teams to deploy critical security patches swiftly without disrupting ongoing financial transactions. At the same time, strict adherence to regulatory compliance and periodic information system audits ensure that customer deposits and sensitive personal records remain resilient against cyber threats."',
            solution: `প্রমিত বাংলা অনুবাদ:
"কন্টিনিউয়াস ইন্টিগ্রেশন এবং স্বয়ংক্রিয় সফটওয়্যার পরীক্ষার ব্যবস্থা ব্যাংকিং প্রকৌশল দলগুলোকে চলমান আর্থিক লেনদেনে কোনো ব্যাঘাত না ঘটিয়ে দ্রুততম সময়ে জরুরি নিরাপত্তা প্যাচ স্থাপন করতে সক্ষম করে তোলে। একই সাথে, নিয়ন্ত্রক সংস্থার নীতিমালার কঠোর অনুসরণ এবং নিয়মিত তথ্য ব্যবস্থা নিরীক্ষা (আইটি অডিট) নিশ্চিত করে যে গ্রাহকদের আমানত এবং সংবেদনশীল ব্যক্তিগত তথ্যসমূহ সাইবার হুমকির বিরুদ্ধে সুরক্ষিত রয়েছে।"`,
            tags: ['Translation', 'English to Bangla', 'Banking IT', 'Job ID 10185'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-5',
            questionNo: '5',
            type: 'math',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Analytical Mathematics & General Knowledge (2 × 5 = 10 Marks):\n5.1 A sum of money invested at compound interest amounts to Tk. 4,624 in 2 years and to Tk. 4,913 in 3 years. Find the rate of interest per annum and the original principal amount.\n5.2 Two pipes A and B can fill a water tank in 24 minutes and 32 minutes respectively. If both the pipes are opened simultaneously, after how many minutes should pipe B be closed so that the tank is full in 18 minutes?',
            solution: `5.1 Compound Interest Solution:
- Amount in 2 years, A₂ = P(1 + r/100)² = 4624  --- (Equation 1)
- Amount in 3 years, A₃ = P(1 + r/100)³ = 4913  --- (Equation 2)
- Dividing Equation (2) by Equation (1):
  1 + r/100 = 4913 / 4624
  r/100 = (4913 - 4624) / 4624 = 289 / 4624 = 1 / 16
  r = 100 / 16 = 6.25% per annum.
- Substituting (1 + r/100) = 17/16 into Equation (1):
  P × (17/16)² = 4624
  P × (289 / 256) = 4624
  P = (4624 × 256) / 289 = 16 × 256 = Tk. 4,096.
- Answer: Rate = 6.25%, Principal = Tk. 4,096.

5.2 Pipes and Cisterns Solution:
- Let pipe B be closed after x minutes.
- Since the tank is completely filled in 18 minutes, pipe A runs for the full 18 minutes, and pipe B runs for x minutes.
- Part filled by Pipe A in 18 minutes = 18 / 24 = 3 / 4.
- Remaining part filled by Pipe B = 1 - 3/4 = 1 / 4.
- Since Pipe B fills the whole tank in 32 minutes:
  x / 32 = 1 / 4  =>  x = 32 / 4 = 8 minutes.
- Answer: Pipe B should be closed after 8 minutes.`,
            tags: ['Analytical Math', 'Compound Interest', 'Pipes & Cisterns', 'BIBM Authentic', 'Job ID 10185'],
            marks: 10,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-10185-tech',
        name: 'Part 2: 6. Subject Related Questions (12 × 12.5 = 150 Marks)',
        marks: 150,
        description: 'Official Part 2 (Questions 6.1 to 6.12): Computer Science, Database Systems, Information Security Audit, Networking, Operating Systems, and Programming.',
        questions: [
          {
            id: 'q-10185-6-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'How is a Many-to-Many (M:N) relationship in an Entity-Relationship (ER) diagram converted into tables in a Relational Database Schema? Illustrate with a banking example of `Customer` and `Loan` entities, clearly showing Primary Keys and Foreign Keys.',
            solution: `1. Rule for Converting M:N Relationship to Relational Schema:
In a relational database, a Many-to-Many (M:N) relationship between two entities A and B cannot be represented directly using a single foreign key in either table without violating First Normal Form (1NF) or causing massive redundancy.
Instead, it is converted by creating a third **Junction / Associative / Bridge Table** whose:
- **Primary Key** is the composite combination of the primary keys of the two participating entities (or a surrogate key with a unique constraint on the pair).
- **Foreign Keys** reference the primary keys of the two original entity tables.
- Any descriptive attributes of the relationship itself are placed in this junction table.

2. Banking Example ('Customer' and 'Loan'):
- Entity 1: Customer(CustID [PK], CustName, NID, Phone)
- Entity 2: Loan(LoanNo [PK], BranchCode, LoanType, TotalAmount)
- Junction Table (Borrower / Customer_Loan):
  CREATE TABLE Borrower (
      CustID VARCHAR(15) NOT NULL,
      LoanNo VARCHAR(15) NOT NULL,
      OwnershipSharePercent DECIMAL(5,2) DEFAULT 100.00,
      PRIMARY KEY (CustID, LoanNo),
      FOREIGN KEY (CustID) REFERENCES Customer(CustID) ON DELETE CASCADE,
      FOREIGN KEY (LoanNo) REFERENCES Loan(LoanNo) ON DELETE CASCADE
  );
This allows one customer to hold multiple loans and one joint loan to be shared by multiple customers seamlessly.`,
            tags: ['DBMS', 'ER Diagram', 'Many-to-Many Mapping', 'BIBM Authentic', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-6-2',
            questionNo: '6.2',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'In the context of Information Systems Governance and IT Security Audit in banks, differentiate between Policies, Standards, Guidelines, and Procedures with one practical banking example for each.',
            solution: `1. Hierarchical Comparison in IT Governance:

| Control Document | Nature | Authority / Scope | Banking Example |
| :--- | :--- | :--- | :--- |
| **Policy** | High-level strategic mandate stating management intent ("What & Why"). | Mandatory; approved by Board of Directors / CISO. | "All customer financial and PII data must be protected against unauthorized access." |
| **Standard** | Specific, quantifiable compulsory rules enforcing the policy. | Mandatory; uniform across all branches and systems. | "All core database backups must be encrypted using AES-256 and passwords must have minimum 12 characters with MFA." |
| **Procedure** | Step-by-step operational instructions to implement a standard ("How"). | Mandatory for operational IT staff. | "Step 1: Log into HSM console; Step 2: Generate key pair; Step 3: Run backup script cbs_dump.sh." |
| **Guideline** | Recommended best practices and advisory tips when strict standards do not apply. | Discretionary / Advisory (Non-mandatory). | "Employees are advised to use passphrases made of memorable words to avoid password fatigue." |`,
            tags: ['IT Governance', 'Information Security Audit', 'Policies vs Procedures', 'BIBM Authentic', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Easy'
          },
          {
            id: 'q-10185-6-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Given the relation R(A, B, C, D, E) with functional dependencies: F = { A -> BCD, BC -> DE, D -> E }. (i) Find all candidate keys of R. (ii) Is the relation in 2NF, 3NF, or BCNF? Justify. (iii) Decompose the relation into BCNF relations, ensuring lossless-join decomposition.',
            solution: `Detailed Mathematical Analysis:
(i) Candidate Key:
- Attribute Closure of {A}:
  A+ = {A, B, C, D, E} (since A -> BCD gives ABCD, and D -> E gives E).
  Therefore, {A} is a candidate key.
- Since A never appears on the right-hand side of any functional dependency, A MUST be part of every candidate key.
- Therefore, the ONLY candidate key of R is {A}.

(ii) Normal Form Analysis:
- 2NF: No non-prime attribute depends on a proper subset of candidate key {A}. Hence R is in 2NF.
- 3NF: In D -> E, D is NOT a superkey and E is NOT prime. Hence R violates 3NF.
- BCNF: For every non-trivial FD X -> Y, X must be a superkey. Both D -> E and BC -> DE violate BCNF.

(iii) Lossless Decomposition into BCNF:
1. Decompose on violating FD D -> E:
   - R1(D, E) with Primary Key D (In BCNF).
   - Remaining relation: R2(A, B, C, D).
2. Check R2(A, B, C, D) with FDs {A -> BCD, BC -> D}:
   - BC -> D violates BCNF because BC is not a superkey of R2.
   - Decompose R2 on BC -> D:
     * R3(B, C, D) with Primary Key (B, C) (In BCNF).
     * R4(A, B, C) with Primary Key A (In BCNF).
Final BCNF Relations: R1(D, E), R3(B, C, D), R4(A, B, C).`,
            tags: ['DBMS', 'BCNF', 'Normalization', 'Functional Dependencies', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Hard'
          },
          {
            id: 'q-10185-6-4',
            questionNo: '6.4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Tables: `Account(AccNo, CustID, AccType, Balance)` and `Transaction(TxnID, AccNo, TxnType, Amount, TxnDate)`. Write an SQL query to find customers who have NEVER made a single transaction greater than BDT 50,000, yet have a cumulative account balance exceeding BDT 5,00,000 across all their accounts.',
            solution: 'Group by CustID, sum the account balances, and filter out any account with a transaction > 50,000 using NOT EXISTS.',
            codeSolution: `SELECT 
    a.CustID,
    COUNT(a.AccNo) AS Total_Accounts,
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
            tags: ['SQL', 'NOT EXISTS', 'Subquery', 'Aggregations', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-6-5',
            questionNo: '6.5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Determine the exact output of the following C program and trace how the pointers modify the array elements step by step:\n\n```c\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = arr;\n    int *q = &arr[3];\n    *p += 5;\n    *(p + 2) = *q - *p;\n    p++;\n    *p = *(q - 1) + 10;\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}\n```',
            solution: `Step-by-Step Pointer Execution Trace:
1. Initial State:
   - arr = {10, 20, 30, 40, 50}
   - p points to arr[0] (value 10).
   - q points to arr[3] (value 40).

2. Statement 1: *p += 5;
   - Modifies arr[0]: 10 + 5 = 15.
   - Array becomes: {15, 20, 30, 40, 50}.

3. Statement 2: *(p + 2) = *q - *p;
   - p + 2 points to arr[2].
   - *q is arr[3] = 40, and *p is arr[0] = 15.
   - arr[2] = 40 - 15 = 25.
   - Array becomes: {15, 20, 25, 40, 50}.

4. Statement 3: p++;
   - p advances to point to arr[1].

5. Statement 4: *p = *(q - 1) + 10;
   - q - 1 points to arr[2] which is now 25.
   - *p (arr[1]) becomes 25 + 10 = 35.
   - Array becomes: {15, 35, 25, 40, 50}.

6. Final Output Printed by Loop:
15 35 25 40 50`,
            tags: ['C Programming', 'Pointer Arithmetic', 'Output Tracing', 'BIBM Authentic', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-6-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the TCP 3-Way Handshake connection establishment process and 4-Way connection termination. What is a SYN Flood attack and how do SYN Cookies mitigate it in banking web portals?',
            solution: `1. TCP 3-Way Handshake:
- **Step 1 (SYN):** Client sends a TCP segment with SYN=1, seq=x to the server (SYN_SENT state).
- **Step 2 (SYN-ACK):** Server allocates buffer space and replies with SYN=1, ACK=1, seq=y, ack=x+1 (SYN_RCVD state).
- **Step 3 (ACK):** Client replies with ACK=1, seq=x+1, ack=y+1. Both endpoints enter the ESTABLISHED state.

2. TCP 4-Way Connection Teardown:
- FIN (Active closer) -> ACK (Passive closer) -> FIN (Passive closer) -> ACK (Active closer enters TIME_WAIT for 2 × MSL to drain delayed packets).

3. SYN Flood Attack & SYN Cookies Mitigation:
- **Attack:** Attacker sends a flood of spoofed SYN segments without completing the final ACK. The server's SYN backlog queue fills up with half-open connections (TCBs), denying legitimate banking customers access.
- **SYN Cookies Defense:** When the SYN queue fills, the server does not allocate memory upon receiving a SYN. Instead, it encodes connection state into the Initial Sequence Number y = Hash(ClientIP, Ports, SecretKey, Timestamp) and sends the SYN-ACK. Memory is allocated ONLY when the client returns a valid ACK with ack = y + 1.`,
            tags: ['Networking', 'TCP 3-Way Handshake', 'SYN Flood', 'SYN Cookies', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Contrast Multi-Threading vs. Multi-Processing in terms of address space, memory overhead, context-switching latency, and IPC mechanisms. Why do modern high-concurrency API gateways use asynchronous non-blocking I/O (Event Loop) over thread-per-request?',
            solution: `1. Multi-Threading vs Multi-Processing:
- **Address Space:** Threads share the parent process's code, data, and heap segments (only having separate stacks and registers). Processes have strictly isolated virtual address spaces.
- **Context Switching:** Thread context switching is fast because the Translation Lookaside Buffer (TLB) and page tables remain unchanged. Process switching flushes the TLB, incurring heavy CPU overhead.
- **IPC:** Threads communicate directly via shared variables (requiring mutexes). Processes require kernel IPC (pipes, sockets, shared memory).

2. Asynchronous Event Loop vs Thread-per-Request:
- Under 10,000+ concurrent connections (C10k problem), allocating 1MB stack per OS thread consumes gigabytes of RAM and causes severe CPU thrashing from context switching.
- An Event Loop (using epoll/kqueue) multiplexes thousands of non-blocking sockets on a single thread, delegating I/O waits to the OS kernel and executing callbacks only when data is ready.`,
            tags: ['Operating Systems', 'Multi-Threading', 'Event Loop', 'Concurrency', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-6-8',
            questionNo: '6.8',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Compare Distance Vector Routing (RIP) vs. Link State Routing (OSPF) vs. Path Vector Routing (BGP). Why do commercial banks configure multi-homed BGP peering with multiple ISPs?',
            solution: `1. Routing Protocol Comparison:
- **RIP (Distance Vector):** Uses Bellman-Ford algorithm; metric is Hop Count (max 15). Exchanges full routing table with immediate neighbors every 30s. Suffers from slow convergence and Count-to-Infinity.
- **OSPF (Link State):** Uses Dijkstra's SPF algorithm; metric is Cost (bandwidth-based). Floods Link State Advertisements (LSAs) within hierarchical areas. Fast convergence; widely used inside bank enterprise WANs.
- **BGP (Path Vector):** Exterior Gateway Protocol (Port 179) routing between Autonomous Systems (AS) using AS-Path, Local Preference, and MED attributes.

2. Multi-Homed BGP in Banking:
Commercial banks acquire their own Autonomous System Number (ASN) and Provider-Independent (PI) IP block from APNIC, peering via eBGP with two or more Tier-1 ISPs. If ISP-1 suffers a fiber cut, BGP automatically withdraws the failed path and converges all incoming internet banking and ATM traffic over ISP-2 without changing public IP addresses.`,
            tags: ['Networking', 'OSPF', 'BGP', 'RIP', 'Routing Protocols', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Hard'
          },
          {
            id: 'q-10185-6-9',
            questionNo: '6.9',
            type: 'math',
            topicCategory: 'Computer Architecture & Digital Logic',
            questionText: 'A computer system has a 32-bit virtual address space and a page size of 4 KB. Physical memory is 16 GB. (a) How many bits are used for the page offset? (b) How many virtual pages and physical frames exist? (c) What is the total size of a single-level page table if each page table entry (PTE) is 4 bytes?',
            solution: `Step-by-Step Calculation:
(a) Page Offset Bits:
- Page Size = 4 KB = 2^12 bytes.
- Therefore, Page Offset requires **12 bits**.

(b) Number of Virtual Pages & Physical Frames:
- Virtual Address = 32 bits => Virtual Page Number (VPN) bits = 32 - 12 = 20 bits.
- Number of Virtual Pages = 2^20 = **1,048,576 (1M pages)**.
- Physical Memory = 16 GB = 2^34 bytes.
- Number of Physical Frames = 2^34 / 2^12 = 2^22 = **4,194,304 (4M frames)**.

(c) Total Size of Single-Level Page Table:
- Number of entries = Number of Virtual Pages = 2^20.
- Size per PTE = 4 bytes.
- Total Page Table Size per process = 2^20 × 4 bytes = **4 MB**.`,
            tags: ['Operating Systems', 'Computer Architecture', 'Paging Math', 'Page Table Size', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-6-10',
            questionNo: '6.10',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a function in C++ or Java to detect whether a Singly Linked List contains a cycle (loop) in O(N) time and O(1) auxiliary space. Explain the mathematical intuition behind Floyd’s Cycle-Finding (Tortoise and Hare) Algorithm.',
            solution: 'Floyd’s Tortoise and Hare algorithm uses a slow pointer moving 1 step at a time and a fast pointer moving 2 steps at a time.',
            codeSolution: `struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

bool hasCycle(ListNode *head) {
    if (!head || !head->next) return false;
    ListNode *slow = head;
    ListNode *fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;          // Moves 1 step
        fast = fast->next->next;    // Moves 2 steps
        if (slow == fast) {
            return true;            // Cycle detected!
        }
    }
    return false;
}`,
            solutionLanguage: 'cpp',
            tags: ['Data Structures', 'Linked List', 'Floyd Cycle Detection', 'Two Pointers', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-6-11',
            questionNo: '6.11',
            type: 'coding',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Write a Bash shell script for a Linux server in a bank data center to automatically back up the database dump directory `/var/backups/cbs/` into a compressed archive named `cbs_backup_YYYYMMDD_HHMMSS.tar.gz` and delete backup archives older than 30 days.',
            solution: 'Production Bash script using tar, date formatting, and find with -mtime +30.',
            codeSolution: `#!/bin/bash
BACKUP_SRC="/var/backups/cbs"
BACKUP_DEST="/mnt/nas_storage/cbs_archives"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ARCHIVE_NAME="cbs_backup_\${TIMESTAMP}.tar.gz"

mkdir -p "\${BACKUP_DEST}"
tar -czf "\${BACKUP_DEST}/\${ARCHIVE_NAME}" -C "\${BACKUP_SRC}" .

if [ $? -eq 0 ]; then
    echo "Backup created: \${BACKUP_DEST}/\${ARCHIVE_NAME}"
else
    echo "Backup failed!" >&2
    exit 1
fi

# Delete backups older than 30 days
find "\${BACKUP_DEST}" -name "cbs_backup_*.tar.gz" -type f -mtime +30 -exec rm -f {} +
exit 0`,
            solutionLanguage: 'bash',
            tags: ['Linux', 'Bash Scripting', 'Backup Automation', 'SysAdmin', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Medium'
          },
          {
            id: 'q-10185-6-12',
            questionNo: '6.12',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Compare Agile Scrum and Waterfall SDLC models. In a core banking migration project where regulatory compliance requirements are strictly fixed versus a customer mobile banking app requiring rapid UI/feature iterations, which model would you choose for each and why?',
            solution: `1. Waterfall vs Agile Scrum:
- **Waterfall Model:** Linear, sequential phases (Requirements -> Design -> Implementation -> Verification -> Maintenance). Best when requirements are 100% deterministic, regulatory audit trails are strict, and architectural changes mid-stream are prohibitively expensive.
- **Agile Scrum:** Iterative development in 2–4 week Sprints with continuous stakeholder feedback, daily standups, and evolving product backlogs.

2. Architectural Selection for Banking Projects:
- **Core Banking Ledger & Regulatory Reporting Migration:** **Waterfall (or Hybrid V-Model)** is preferred because accounting rules, Bangladesh Bank RTGS/BEFTN message formats, and zero-defect data migration scripts must be exhaustively specified and verified upfront before cutover.
- **Customer Mobile Banking App:** **Agile Scrum** is ideal because customer UX expectations, biometric login features, bill-pay integrations, and QR payment workflows benefit from rapid incremental releases and continuous user feedback.`,
            tags: ['Software Engineering', 'SDLC', 'Agile vs Waterfall', 'Banking Projects', 'Job ID 10185'],
            marks: 12.5,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 3. Job ID: 10225 (Combined Bank Senior Officer IT — Circular 2023 / Exam 2025-2026)
  {
    id: 'so-it-10225',
    title: 'Senior Officer (IT), Combined Bank (Job ID: 10225) — BIBM Official Paper',
    searchQuery: 'Senior Officer (IT), Combined Bank (Job ID: 10225) question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: '10225',
    circularYear: '2023 (Exam: 2025-2026)',
    examDate: 'March 15, 2025',
    examBody: 'BIBM — Bankers Selection Committee Secretariat (BSCS)',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC', 'BDBL', 'Probashi Kallyan Bank'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Official BIBM Senior Officer (IT) Grade-9 written question paper for Combined 6 Banks (Job ID: 10225). Structured into Part 1 (Bangla Focus Writing on Cashless Economy, English Focus Writing on APT Cyber Defense, Bi-directional Translations, and GK/Math) and Part 2 (10 Subject-Related CSE/IT questions of 15 marks each covering Two-Phase Commit 2PC, Dijkstra OSPF, SQL SARGability & Query Plans, Strict 2PL, NGFW & DMZ, Saga Pattern, C++ Output Tracing, and 8086 Microprocessor/Cache).',
    keyTopics: [
      'Two-Phase Commit (2PC) & 3PC',
      'Dijkstra SPF & OSPF Routing',
      'SQL SARGability & Execution Plans',
      'Strict 2PL & Thomas Write Rule',
      'NGFW vs Stateful Firewall & DMZ',
      'Saga Pattern & Disaster Recovery Tiers',
      'C++ Virtual Function Output Tracing',
      'APT Cyber Resilience Focus Writing'
    ],
    sections: [
      {
        id: 'sec-10225-nontech',
        name: 'Part 1: Focus Writing, Translation & General Knowledge (50 Marks)',
        marks: 50,
        description: 'Official Part 1 (Questions 1 to 5): Bangla Focus Writing, English Focus Writing, Bangla-to-English Translation, English-to-Bangla Translation, and General Knowledge.',
        questions: [
          {
            id: 'q-10225-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in Bangla:\nস্মার্ট বাংলাদেশ বিনির্মাণে ক্যাশলেস লেনদেন ও ফিনটেক ইকোসিস্টেমের ভূমিকা: সম্ভাবনা, অন্তরায় ও করণীয় বিশ্লেষণ করুন।',
            solution: `১. ভূমিকা:
আধুনিক বিশ্ব অর্থনীতি দ্রুত কাগজের মুদ্রার পরিবর্তে ডিজিটাল ও ক্যাশলেস লেনদেনের দিকে অগ্রসর হচ্ছে। বাংলাদেশেও বাংলা কিউআর (Bangla QR), মোবাইল ফিনান্সিয়াল সার্ভিস (MFS), এনপিএসবি (NPSB) এবং আরটিজিএস (RTGS)-এর প্রসারের ফলে আর্থিক অন্তর্ভুক্তিতে এক যুগান্তকারী পরিবর্তন সূচিত হয়েছে।

২. ক্যাশলেস ইকোসিস্টেমের সুবিধাসমূহ:
- লেনদেনের স্বচ্ছতা ও জবাবদিহিতা: ডিজিটাল ফুটপ্রিন্ট থাকার ফলে কর ফাঁকি রোধ, ছায়া অর্থনীতি নিয়ন্ত্রণ এবং মানি লন্ডারিং প্রতিরোধ সহজতর হয়।
- মুদ্রা ছাপানো ও ব্যবস্থাপনা ব্যয় হ্রাস: কেন্দ্রীয় ব্যাংকের কাগুজে নোট মুদ্রণ, সংরক্ষণ ও পরিবহন বাবদ শত শত কোটি টাকার ব্যয় সাশ্রয় হয়।
- ক্ষুদ্র ও প্রান্তিক উদ্যোক্তাদের ক্ষমতায়ন: ই-কেওয়াইসি (e-KYC) ও ডিজিটাল লেনদেনের তথ্যের ভিত্তিতে ক্ষুদ্র ব্যবসায়ীরা সহজেই জামানতবিহীন ডিজিটাল ন্যানো লোন পেতে পারেন।

৩. প্রধান অন্তরায় ও চ্যালেঞ্জ:
- গ্রামীণ জনগোষ্ঠীর ডিজিটাল সাক্ষরতার অভাব এবং সাইবার প্রতারণা (ফিশিং, ওটিপি জালিয়াতি) সংক্রান্ত ভীতি।
- ক্ষুদ্র ব্যবসায়ীদের কাছে স্মার্টফোন ও নিরবচ্ছিন্ন ইন্টারনেট সংযোগের ব্যয়।

৪. উপসংহার:
আন্তঃব্যাংক ও এমএফএস প্রতিষ্ঠানের মধ্যে পূর্ণাঙ্গ আন্তঃসংযোগ (Interoperability), লেনদেন মাশুল হ্রাস এবং নিশ্ছিদ্র সাইবার নিরাপত্তা নিশ্চিত করার মাধ্যমেই একটি সর্বজনীন ক্যাশলেস অর্থনীতি গড়ে তোলা সম্ভব।`,
            tags: ['Focus Writing in Bangla', 'Cashless Economy', 'FinTech', 'Job ID 10225'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English:\n"Strengthening Cybersecurity against Advanced Persistent Threats (APTs) in Bangladesh Financial Systems" (Word limit: 300 words).',
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
            tags: ['Focus Writing', 'English', 'Cybersecurity', 'APT', 'Banking', 'Job ID 10225'],
            marks: 10,
            difficulty: 'Hard'
          },
          {
            id: 'q-10225-3',
            questionNo: '3',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate the following passage into English:\n"আর্থিক প্রতিষ্ঠানে সাইবার আক্রমণ প্রতিহত করতে হলে প্রতিটি স্তরে কঠোর নজরদারি এবং নিয়মিত নিরাপত্তা নিরীক্ষা নিশ্চিত করা প্রয়োজন। কর্মকর্তাদের ব্যক্তিগত সচেতনতা এবং আধুনিক প্রযুক্তি ব্যবহারের সমন্বয়ই পারে একটি সুরক্ষিত ব্যাংকিং পরিবেশ গড়ে তুলতে।"',
            solution: `Standard High-Quality Model Translation:
"To thwart cyber attacks in financial institutions, ensuring rigorous surveillance and periodic security audits at every layer is indispensable. Only the harmonization of employees' individual awareness and the deployment of advanced technology can foster a secure banking environment."`,
            tags: ['Translation', 'Bangla to English', 'Cybersecurity', 'Job ID 10225'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-4',
            questionNo: '4',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate the following passage into Bangla:\n"In a distributed database environment, maintaining data consistency across multiple geographically separated data centers is a complex engineering challenge. Financial institutions rely on atomic transaction protocols and real-time replication logs to guarantee that no customer transaction is ever lost during a hardware failure."',
            solution: `প্রমিত বাংলা অনুবাদ:
"একটি ডিস্ট্রিবিউটেড ডাটাবেজ পরিবেশে ভৌগোলিকভাবে পৃথক একাধিক ডাটা সেন্টারের মধ্যে তথ্যের সামঞ্জস্য বজায় রাখা একটি জটিল প্রকৌশলগত চ্যালেঞ্জ। হার্ডওয়্যার বিপর্যয়ের সময় কোনো গ্রাহকের লেনদেনের তথ্য যেন কখনোই হারিয়ে না যায়, তা নিশ্চিত করতে আর্থিক প্রতিষ্ঠানগুলো অ্যাটমিক ট্রানজেকশন প্রোটোকল এবং রিয়েল-টাইম রেপ্লিকেশন লগের ওপর নির্ভর করে।"`,
            tags: ['Translation', 'English to Bangla', 'Distributed Systems', 'Job ID 10225'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'General Knowledge (5 × 2 = 10 Marks):\n5.1 What is the full form of BACPS and BEFTN in Bangladesh Bank payment systems?\n5.2 Which protocol and port number are used by the BGP routing daemon?\n5.3 What is the name of Bangladesh Bank’s national interoperable QR payment standard?\n5.4 Which international standard governs Information Security Management Systems (ISMS)?\n5.5 What is the default port number for Oracle Database Listener and PostgreSQL?',
            solution: `5.1 **BACPS:** Bangladesh Automated Clearing House (BACH) -> Bangladesh Automated Cheque Processing Systems; **BEFTN:** Bangladesh Electronic Funds Transfer Network.
5.2 **BGP Protocol & Port:** Border Gateway Protocol uses **TCP Port 179**.
5.3 **National QR Standard:** **Bangla QR**.
5.4 **ISMS International Standard:** **ISO/IEC 27001**.
5.5 **Default Database Ports:** Oracle Database Listener: **TCP Port 1521**; PostgreSQL: **TCP Port 5432**.`,
            tags: ['General Knowledge', 'Banking ICT', 'ISO 27001', 'Bangla QR', 'Job ID 10225'],
            marks: 10,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-10225-tech',
        name: 'Part 2: 6. Subject Related Questions (10 × 15 = 150 Marks)',
        marks: 150,
        description: 'Official Part 2 (Questions 6.1 to 6.10): Distributed Databases, Graph Algorithms, Query Optimization, Concurrency Control, Network Security, and OOP.',
        questions: [
          {
            id: 'q-10225-6-1',
            questionNo: '6.1',
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
            tags: ['Distributed Systems', '2PC', 'Core Banking', 'DBMS Concurrency', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-10225-6-2',
            questionNo: '6.2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a program in Python or Java to implement Dijkstra’s Single Source Shortest Path algorithm on a weighted graph represented as an adjacency list. Explain how this algorithm is utilized in the Open Shortest Path First (OSPF) routing protocol in inter-branch banking networks.',
            solution: 'Dijkstra implementation using min-heap priority queue with O((V + E) log V) time complexity.',
            codeSolution: `import heapq

def dijkstra(graph: dict[str, list[tuple[str, int]]], start_node: str):
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
    return distances, predecessors`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Dijkstra', 'Graph', 'OSPF', 'Networking', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-10225-6-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain SQL Query Optimization and Query Execution Plans. Differentiate between Index Scan, Index Seek, and Full Table Scan. Why does a query like `SELECT * FROM Txn WHERE YEAR(TxnDate) = 2024` prevent index utilization (SARGability)?',
            solution: `1. Query Execution Plan:
The roadmap generated by the DBMS Query Optimizer specifying the exact sequence of low-level physical operators (hash join, nested loop, index seek) to execute an SQL statement.

2. Access Mechanisms:
- Full Table Scan: Reads every block of the table sequentially from disk.
- Index Seek: Traverses the B+ Tree from root to leaf to locate specific qualifying keys in O(log N) time.
- Index Scan: Scans leaf pages of an index sequentially.

3. SARGability (Search Argument Able):
Wrapping an indexed column inside a function (YEAR(TxnDate) = 2024) violates SARGability because the database engine must evaluate the function on EVERY row, forcing a Full Table Scan.
Refactored SARGable query:
WHERE TxnDate >= '2024-01-01' AND TxnDate < '2025-01-01'
This allows an immediate B+ Tree Index Seek range scan.`,
            tags: ['DBMS', 'Query Optimization', 'Indexing', 'SARGability', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-6-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain Concurrency Control in DBMS. Differentiate between Two-Phase Locking (2PL), Strict 2PL, and Rigorous 2PL. How does Timestamp-Ordering (Thomas Write Rule) avoid cascading rollbacks?',
            solution: `1. Two-Phase Locking (2PL) Variants:
- Basic 2PL: Growing Phase (acquire locks) and Shrinking Phase (release locks). Guarantees conflict serializability, but vulnerable to cascading aborts.
- Strict 2PL: All Exclusive (X) locks are held until COMMIT/ABORT. Prevents dirty reads and cascading rollbacks.
- Rigorous 2PL: Both Shared (S) and Exclusive (X) locks are held until transaction completion.

2. Thomas Write Rule:
If transaction T attempts to write Q where TS(T) < W-timestamp(Q), a newer transaction has already overwritten Q. Instead of aborting T, Thomas Write Rule safely ignores the obsolete write and allows T to continue.`,
            tags: ['DBMS', 'Concurrency Control', '2PL', 'Timestamp Ordering', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-10225-6-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Describe Next-Generation Firewalls (NGFW) vs. Traditional Stateful Packet Inspection Firewalls. How is a Demilitarized Zone (DMZ) implemented in commercial bank data centers to isolate public web servers from core banking databases?',
            solution: `1. Stateful Firewall vs. NGFW:
- Stateful Firewalls operate at Layers 3 and 4 (IP and TCP/UDP ports), tracking connection states (SYN_SENT, ESTABLISHED) but remaining blind to application-layer payloads.
- NGFWs operate up to Layer 7, combining stateful inspection with Deep Packet Inspection (DPI), Intrusion Prevention System (IPS), TLS decryption, and application-ID enforcement.

2. Dual-Firewall DMZ Architecture:
- Perimeter Firewall allows inbound Internet traffic (TCP 443) only to Reverse Proxies/API Gateways in the DMZ.
- Internal Core Firewall blocks all direct traffic from the Internet and permits only specific authenticated application server IPs in the DMZ to query internal Core Banking databases on designated ports.`,
            tags: ['Networking', 'Firewalls', 'NGFW', 'DMZ', 'Cybersecurity', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-6-6',
            questionNo: '6.6',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Trace the execution and determine the exact output of the following C++ program demonstrating virtual functions and constructor/destructor order:\n\n```cpp\n#include <iostream>\nusing namespace std;\nclass Base {\npublic:\n    Base() { cout << "B_Con "; }\n    virtual void show() { cout << "B_Show "; }\n    virtual ~Base() { cout << "B_Des "; }\n};\nclass Derived : public Base {\npublic:\n    Derived() { cout << "D_Con "; }\n    void show() override { cout << "D_Show "; }\n    ~Derived() { cout << "D_Des "; }\n};\nint main() {\n    Base* ptr = new Derived();\n    ptr->show();\n    delete ptr;\n    return 0;\n}\n```',
            solution: `Step-by-Step Execution Trace:
1. Base* ptr = new Derived();
   - First invokes the Base constructor -> prints B_Con .
   - Next invokes the Derived constructor -> prints D_Con .
2. ptr->show();
   - Because show() is declared virtual in Base, dynamic dispatch (vtable lookup) calls Derived::show() -> prints D_Show .
3. delete ptr;
   - Because ~Base() is declared virtual, the destructor of Derived runs first (D_Des ), followed by the destructor of Base (B_Des ).

Exact Output:
B_Con D_Con D_Show D_Des B_Des `,
            tags: ['C++', 'OOP', 'Virtual Destructor', 'Polymorphism', 'Output Tracing', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-6-7',
            questionNo: '6.7',
            type: 'math',
            topicCategory: 'Computer Architecture & Digital Logic',
            questionText: 'A system uses a CPU with a base CPI of 1.5 and clock rate of 3 GHz. Main memory access takes 120 clock cycles. The L1 cache has a miss rate of 4% per instruction, and on average each instruction generates 1.3 memory references. Calculate the Effective CPI and the actual MIPS (Million Instructions Per Second) rate.',
            solution: `Step-by-Step Calculation:
1. Miss Penalty = 120 clock cycles.
2. Memory stall cycles per instruction:
   = (Memory references per instruction) × (Miss Rate) × (Miss Penalty)
   = 1.3 × 0.04 × 120
   = 0.052 × 120 = 6.24 cycles.
3. Effective CPI:
   = Base CPI + Memory Stall Cycles
   = 1.5 + 6.24 = **7.74 cycles per instruction**.
4. MIPS (Million Instructions Per Second):
   = Clock Rate / (Effective CPI × 10^6)
   = (3 × 10^9) / (7.74 × 10^6)
   = 3000 / 7.74 ≈ **387.60 MIPS**.`,
            tags: ['Computer Architecture', 'CPI Calculation', 'Cache Memory', 'MIPS', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-10225-6-8',
            questionNo: '6.8',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider tables: `Branch(BranchID, BranchName, City)`, `Account(AccNo, CustID, BranchID, Balance)`, `Loan(LoanNo, CustID, BranchID, Amount)`. Write an SQL query to list all branches where the total loan amount disbursed exceeds the total deposit balance held in that branch.',
            solution: 'Use CTEs or derived subqueries to aggregate total deposits and total loans per branch separately (avoiding fan-out cartesian multiplication) and compare them.',
            codeSolution: `WITH BranchDeposits AS (
    SELECT BranchID, COALESCE(SUM(Balance), 0) AS TotalDeposits
    FROM Account
    GROUP BY BranchID
),
BranchLoans AS (
    SELECT BranchID, COALESCE(SUM(Amount), 0) AS TotalLoans
    FROM Loan
    GROUP BY BranchID
)
SELECT 
    b.BranchID,
    b.BranchName,
    b.City,
    COALESCE(d.TotalDeposits, 0) AS Total_Deposits,
    l.TotalLoans AS Total_Loans
FROM Branch b
JOIN BranchLoans l ON b.BranchID = l.BranchID
LEFT JOIN BranchDeposits d ON b.BranchID = d.BranchID
WHERE l.TotalLoans > COALESCE(d.TotalDeposits, 0)
ORDER BY l.TotalLoans DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'CTE', 'Aggregation', 'Banking Schema', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-6-9',
            questionNo: '6.9',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Consider page reference string: `7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1` for a memory with 3 physical frames. Calculate the number of page faults using (i) FIFO and (ii) Optimal (OPT) page replacement algorithms.',
            solution: `1. FIFO Page Replacement (3 Frames):
- 7 -> [7] (Fault 1)
- 0 -> [7, 0] (Fault 2)
- 1 -> [7, 0, 1] (Fault 3)
- 2 -> [2, 0, 1] (Fault 4 - replaces 7)
- 0 -> Hit
- 3 -> [2, 3, 1] (Fault 5 - replaces 0)
- 0 -> [2, 3, 0] (Fault 6 - replaces 1)
- 4 -> [4, 3, 0] (Fault 7 - replaces 2)
- 2 -> [4, 2, 0] (Fault 8 - replaces 3)
- 3 -> [4, 2, 3] (Fault 9 - replaces 0)
- 0 -> [0, 2, 3] (Fault 10 - replaces 4)
- 3 -> Hit
- 2 -> Hit
- 1 -> [0, 1, 3] (Fault 11 - replaces 2)
- 2 -> [0, 1, 2] (Fault 12 - replaces 3)
- 0 -> Hit
- 1 -> Hit
- 7 -> [7, 1, 2] (Fault 13 - replaces 0)
- 0 -> [7, 0, 2] (Fault 14 - replaces 1)
- 1 -> [7, 0, 1] (Fault 15 - replaces 2)
Total FIFO Page Faults = **15**.

2. Optimal (OPT) Page Replacement (3 Frames):
- First 3 references (7, 0, 1) -> [7, 0, 1] (3 Faults)
- 2 -> replaces 7 (used farthest in future) -> [2, 0, 1] (Fault 4)
- 0 -> Hit
- 3 -> replaces 1 -> [2, 0, 3] (Fault 5)
- 0 -> Hit
- 4 -> replaces 0 -> [2, 4, 3] (Fault 6)
- 2, 3 -> Hits
- 0 -> replaces 4 -> [2, 0, 3] (Fault 7)
- 3, 2 -> Hits
- 1 -> replaces 3 -> [2, 0, 1] (Fault 8)
- 2, 0, 1 -> Hits
- 7 -> replaces 2 -> [7, 0, 1] (Fault 9)
- 0, 1 -> Hits
Total Optimal Page Faults = **9**.`,
            tags: ['Operating Systems', 'Page Replacement', 'FIFO', 'Optimal', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-10225-6-10',
            questionNo: '6.10',
            type: 'short_note',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Write short notes on: (a) Saga Pattern for distributed microservices transactions. (b) Elliptic Curve Cryptography (ECC) vs. RSA. (c) Disaster Recovery Tier Levels (Tier 1 to Tier 4).',
            solution: `(a) Saga Pattern:
A design pattern for managing distributed transactions in microservices without locking resources across nodes. It executes a sequence of local transactions, where each updates its own database. If one step fails, the Saga executes compensating transactions in reverse order to undo changes.

(b) ECC vs RSA:
- ECC (Elliptic Curve Cryptography) provides equivalent cryptographic strength to RSA with significantly smaller key sizes (e.g., 256-bit ECC key equals 3072-bit RSA key).
- ECC offers faster computation, lower memory usage, and reduced network bandwidth.

(c) Disaster Recovery Tiers:
- Tier 1: Basic site with periodic physical tape backups shipped offsite (Days of RTO).
- Tier 2: Hot standby hardware with periodic electronic vaulting (24-48 hours RTO).
- Tier 3: Active-Passive synchronized data replication (Hours of RTO).
- Tier 4: Active-Active dual data center cluster with zero data loss (RPO = 0) and instantaneous automated failover (RTO near zero).`,
            tags: ['Saga Pattern', 'ECC', 'Disaster Recovery', 'System Design', 'Job ID 10225'],
            marks: 15,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 4. Combined Bank 4 Bank Senior Officer (IT)
  {
    id: 'so-it-4bank',
    title: 'Senior Officer (IT), Combined 4 Banks — BIBM Official Paper',
    searchQuery: 'Senior Officer (IT), Combined Bank 4 Bank question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: 'Combined-4-Bank',
    circularYear: '2022-2023',
    examDate: 'September 22, 2023',
    examBody: 'BIBM — Bankers Selection Committee Secretariat (BSCS)',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Authentic BIBM Combined 4 State-Owned Commercial Banks Senior Officer (IT) written question paper. Complete with Part 1 (Bangla Focus Writing, English Focus Writing on AI Fraud Detection, Translations, and Analytical Math) and Part 2 (10 Subject-Related CSE/IT questions of 15 marks each covering ANSI SQL Isolation Levels, BFS Graph Traversal, Prim vs Kruskal MST, PL/pgSQL Fund Transfer Stored Procedure, VLSM Subnetting for 10.150.0.0/21, Zero Trust ZTNA, K-Map Simplification, and Java Exception Handling).',
    keyTopics: [
      'ANSI SQL Isolation Levels',
      'BFS Shortest Hop Graph Traversal',
      'Prim vs Kruskal MST',
      'Transactional Stored Procedure',
      'VLSM Subnetting (10.150.0.0/21)',
      'Zero Trust Network Access (ZTNA)',
      'AI-Powered Fraud Detection'
    ],
    sections: [
      {
        id: 'sec-4bank-nontech',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-4bank-n1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in Bangla:\nরাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকসমূহে ডিজিটাল ব্যাংকিং সেবার প্রসার ও সাইবার নিরাপত্তা ঝুঁকি ব্যবস্থাপনা।',
            solution: `১. ভূমিকা:
দেশের অর্থনীতির মূল চালিকাশক্তি হিসেবে সোনালী, জনতা, অগ্রণী ও রূপালী ব্যাংকের মতো রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকগুলো প্রান্তিক জনগোষ্ঠী থেকে শুরু করে বৃহৎ শিল্পখাতে আর্থিক সেবা প্রদান করে আসছে। কোর ব্যাংকিং সলিউশন (CBS) ও মোবাইল অ্যাপের মাধ্যমে এই ব্যাংকগুলো এখন ডিজিটাল যুগে প্রবেশ করেছে।

২. ডিজিটাল সেবার প্রসার ও সম্ভাবনা:
- অনলাইন আন্তঃশাখা লেনদেন, সরকারি ভাতা ও পেনশন বিতরণ এবং ই-চালান রাজস্ব সংগ্রহ।
- কিউআর কোড ও এটিএম/সিআরএম বুথের মাধ্যমে ২৪ ঘণ্টা ব্যাংকিং সেবা।

৩. সাইবার ঝুঁকি ও করণীয়:
- পুরাতন আইটি অবকাঠামো আধুনিকায়ন, নিয়মিত আইটি অডিট পরিচালনা এবং কর্মকর্তা-কর্মচারীদের সাইবার নিরাপত্তা বিষয়ে প্রশিক্ষণ প্রদান।
- কেন্দ্রীয় ব্যাংকের আইসিটি সিকিউরিটি গাইডলাইন অনুযায়ী নেটওয়ার্ক সেগমেন্টেশন ও ডিজাস্টার রিকভারি (DR) সাইট সচল রাখা।`,
            tags: ['Focus Writing in Bangla', 'State-Owned Banks', 'Cyber Risk', 'Combined 4 Bank'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-7',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English:\n"AI-Powered Fraud Detection in Real-Time Payment Switches: Safeguarding Retail Banking" (Word limit: 300 words).',
            solution: `Key Thematic Analysis:
- Proliferation of instant digital payments through NPSB, Bangla QR, and MFS.
- Limitations of static rule-based fraud detection: Cannot detect novel, fast-evolving social engineering patterns or account takeover frauds.
- Machine Learning models: Supervised classification (Random Forest, XGBoost) and unsupervised anomaly detection (Isolation Forests, Autoencoders) evaluate transactions in under 50 milliseconds.
- Behavioral profiling: Assessing customer geo-velocity, device finger-printing, typing cadence, and spending history.
- Conclusion: Real-time AI fraud detection ensures consumer trust without introducing friction into daily commercial transactions.`,
            tags: ['Focus Writing', 'AI', 'Fraud Detection', 'FinTech', 'English'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-8',
            questionNo: '3',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English:\n"কৃত্রিম বুদ্ধিমত্তা ও মেশিন লার্নিং প্রযুক্তি ব্যবহার করে ব্যাংকিং লেনদেনের গতি ত্বরান্বিত করার পাশাপাশি গ্রাহকদের ব্যক্তিগত তথ্যের সর্বোচ্চ সুরক্ষা প্রদান করা আধুনিক আর্থিক ব্যবস্থার মূল লক্ষ্য।"',
            solution: `Standard High-Quality Model Translation:
"In addition to accelerating the velocity of banking transactions through the application of artificial intelligence and machine learning technologies, providing maximum protection for customers' private data constitutes the primary objective of modern financial systems."`,
            tags: ['Translation', 'Bangla to English', 'AI in Banking'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-4bank-n4',
            questionNo: '4',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into Bangla:\n"Database indexing and query optimization are vital for ensuring that millions of daily ATM and mobile banking requests are processed within milliseconds without exhausting server memory."',
            solution: `প্রমিত বাংলা অনুবাদ:
"সার্ভারের মেমোরি নিঃশেষ না করে প্রতিদিন লক্ষ লক্ষ এটিএম এবং মোবাইল ব্যাংকিং অনুরোধ মিলিসেকেন্ডের মধ্যে সম্পন্ন করা নিশ্চিত করতে ডাটাবেজ ইনডেক্সিং এবং কোয়েরি অপ্টিমাইজেশন অত্যন্ত গুরুত্বপূর্ণ।"`,
            tags: ['Translation', 'English to Bangla', 'Database Indexing'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-4bank-n5',
            questionNo: '5',
            type: 'math',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Analytical Mathematics (2 × 5 = 10 Marks):\n5.1 A businessman borrows Tk. 6,00,000 from a bank at 12% simple interest per annum and lends it immediately to another trader at 12% compound interest compounded half-yearly. How much profit does he make at the end of 1.5 years?\n5.2 In how many ways can a committee of 5 members be formed from 6 IT Officers and 4 General Officers such that the committee includes at least 3 IT Officers?',
            solution: `5.1 Simple vs Half-Yearly Compound Interest:
- Simple Interest paid to bank for 1.5 years:
  SI = 6,00,000 × 0.12 × 1.5 = Tk. 1,08,000.
- Compound Interest received (half-yearly rate = 6%, periods n = 3):
  CI = 6,00,000 × [(1.06)³ - 1] = 6,00,000 × [1.191016 - 1] = Tk. 1,14,609.60.
- Net Profit = 1,14,609.60 - 1,08,000 = **Tk. 6,609.60**.

5.2 Combinatorics Committee Selection:
- Case 1 (3 IT, 2 General): 6C3 × 4C2 = 20 × 6 = 120
- Case 2 (4 IT, 1 General): 6C4 × 4C1 = 15 × 4 = 60
- Case 3 (5 IT, 0 General): 6C5 × 4C0 = 6 × 1 = 6
- Total Ways = 120 + 60 + 6 = **186 ways**.`,
            tags: ['Mathematics', 'Compound Interest', 'Combinatorics', 'Combined 4 Bank'],
            marks: 10,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-4bank-tech',
        name: 'Part 2: 6. Subject Related Questions (10 × 15 = 150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-4bank-1',
            questionNo: '6.1',
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
- Serializable: Prevents ALL anomalies (Dirty, Non-repeatable, and Phantom Reads) by using Range Locks or Two-Phase Locking (2PL). Ensures transactions execute as if strictly serial.`,
            tags: ['DBMS', 'Isolation Levels', 'Concurrency Control', 'ACID', 'Transactions'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-2',
            questionNo: '6.2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a program in Python to implement the Breadth First Search (BFS) algorithm on an unweighted graph to find the shortest path in terms of number of hops from a source branch server to all other branch servers.',
            solution: 'BFS implementation using queue data structure for unweighted shortest hop search.',
            codeSolution: `from collections import deque

def bfs_shortest_path(graph: dict[str, list[str]], start_node: str):
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
    return distance, parent`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'BFS', 'Graph', 'Networking'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-3',
            questionNo: '6.3',
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
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-4',
            questionNo: '6.4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Write a stored procedure in MySQL or PostgreSQL named `ProcessFundTransfer` that transfers amount X from Source Account to Destination Account within a single transaction, checking for sufficient balance and rolling back on any error.',
            solution: 'Transactional stored procedure with row-level FOR UPDATE lock and explicit exception checks.',
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
    IF p_amount <= 0 THEN
        RAISE EXCEPTION 'Transfer amount must be strictly positive.';
    END IF;

    SELECT Balance INTO v_sender_balance
    FROM Account WHERE AccNo = p_sender FOR UPDATE;

    IF v_sender_balance < p_amount THEN
        RAISE EXCEPTION 'Insufficient funds in sender account %.', p_sender;
    END IF;

    UPDATE Account SET Balance = Balance - p_amount WHERE AccNo = p_sender;
    UPDATE Account SET Balance = Balance + p_amount WHERE AccNo = p_receiver;

    INSERT INTO Transaction (AccNo, TxnType, Amount, TxnDate)
    VALUES (p_sender, 'TRANSFER_OUT', p_amount, CURRENT_TIMESTAMP),
           (p_receiver, 'TRANSFER_IN', p_amount, CURRENT_TIMESTAMP);
END;
$$;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Stored Procedure', 'Transactions', 'Row Locking', 'Fund Transfer'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-4bank-5',
            questionNo: '6.5',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'An enterprise bank is allocated the classless network block 10.150.0.0/21. The network architect must carve out subnets for 4 divisions: Head Office (800 hosts), Regional Hub 1 (400 hosts), Regional Hub 2 (200 hosts), and 4 WAN Point-to-Point links (2 hosts each). Determine the VLSM subnet allocation (Network Address, Subnet Mask, Usable Range, Broadcast Address).',
            solution: `VLSM Allocation Steps (Ordered from largest requirement to smallest):
1. Head Office (800 hosts):
- 2^h - 2 >= 800 => h = 10 bits (1022 hosts). Prefix: /22 (255.255.252.0).
- Subnet: 10.150.0.0/22 (Usable: 10.150.0.1 - 10.150.3.254, Broadcast: 10.150.3.255).

2. Regional Hub 1 (400 hosts):
- 2^h - 2 >= 400 => h = 9 bits (510 hosts). Prefix: /23 (255.255.254.0).
- Subnet: 10.150.4.0/23 (Usable: 10.150.4.1 - 10.150.5.254, Broadcast: 10.150.5.255).

3. Regional Hub 2 (200 hosts):
- 2^h - 2 >= 200 => h = 8 bits (254 hosts). Prefix: /24 (255.255.255.0).
- Subnet: 10.150.6.0/24 (Usable: 10.150.6.1 - 10.150.6.254, Broadcast: 10.150.6.255).

4. WAN Point-to-Point Links (4 links, 2 hosts each):
- Prefix: /30 (255.255.255.252).
- WAN 1: 10.150.7.0/30 (Usable: .1 - .2, Broadcast: .3)
- WAN 2: 10.150.7.4/30 (Usable: .5 - .6, Broadcast: .7)
- WAN 3: 10.150.7.8/30 (Usable: .9 - .10, Broadcast: .11)
- WAN 4: 10.150.7.12/30 (Usable: .13 - .14, Broadcast: .15).`,
            tags: ['Networking', 'VLSM', 'Subnetting', 'CIDR', 'Bank Architecture'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-4bank-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain Zero Trust Network Access (ZTNA) and compare it with traditional Virtual Private Networks (VPNs). Why is ZTNA being adopted by Bangladesh commercial banks for remote teller and administrative access?',
            solution: `1. VPN vs. ZTNA:
- Traditional VPN: Places authenticated users directly onto the internal corporate network subnet, creating lateral movement risk if an endpoint is compromised.
- ZTNA: Grants least-privilege, per-session access only to specific authorized applications based on continuous identity verification and device posture, hiding internal network IPs.

2. Adoption in Bangladesh Banking:
Prevents lateral ransomware propagation into Core Banking servers and satisfies Bangladesh Bank ICT Security Guideline requirements for micro-segmentation.`,
            tags: ['Cybersecurity', 'Zero Trust', 'ZTNA', 'VPN', 'Network Architecture'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-6-7',
            questionNo: '6.7',
            type: 'math',
            topicCategory: 'Computer Architecture & Digital Logic',
            questionText: 'Simplify the Boolean function F(A, B, C, D) = Σm(0, 1, 2, 5, 8, 9, 10) + d(4, 12, 15) using a 4-variable Karnaugh Map (K-Map) and write the minimal Sum-of-Products (SOP) expression.',
            solution: `1. 4-Variable K-Map Grid (Rows AB: 00, 01, 11, 10; Columns CD: 00, 01, 11, 10):
- Row 00 (A'B'): m0=1, m1=1, m3=0, m2=1
- Row 01 (A'B): m4=X, m5=1, m7=0, m6=0
- Row 11 (AB): m12=X, m13=0, m15=X, m14=0
- Row 10 (AB'): m8=1, m9=1, m11=0, m10=1

2. Prime Implicant Groupings:
- Group 1 (Quad of corners m0, m2, m8, m10): Simplifies to **B'D'**
- Group 2 (Quad m0, m1, m8, m9): Simplifies to **B'C'**
- Group 3 (Quad m0, m1, m4(X), m5): Simplifies to **A'C'**

3. Final Simplified SOP Expression:
**F(A, B, C, D) = B'D' + B'C' + A'C'**`,
            tags: ['Digital Logic', 'K-Map', 'Dont Care Conditions', 'SOP'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-6-8',
            questionNo: '6.8',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Suppose a disk drive has 200 cylinders numbered 0 to 199. The disk head is currently at cylinder 53. The queue of pending requests in FIFO order is: `98, 183, 37, 122, 14, 124, 65, 67`. Calculate the total head movement (in cylinders) for (a) SSTF (Shortest Seek Time First) and (b) SCAN (moving toward cylinder 0 first).',
            solution: `1. (a) SSTF (Shortest Seek Time First) starting at 53:
- Path: 53 -> 65 -> 67 -> 37 -> 14 -> 98 -> 122 -> 124 -> 183
- Movements:
  |65-53| + |67-65| + |37-67| + |14-37| + |98-14| + |122-98| + |124-122| + |183-124|
  = 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236 cylinders.

2. (b) SCAN (moving toward 0 first) starting at 53:
- Path: 53 -> 37 -> 14 -> 0 -> 65 -> 67 -> 98 -> 122 -> 124 -> 183
- Total Head Movement: (53 - 0) + (183 - 0) = 53 + 183 = 236 cylinders.`,
            tags: ['Operating Systems', 'Disk Scheduling', 'SSTF', 'SCAN'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-4bank-6-9',
            questionNo: '6.9',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Determine the output of the following Java program demonstrating try-catch-finally execution flow when a return statement is inside both try and finally blocks:\n\n```java\npublic class BankExceptionTest {\n    public static int compute(int a, int b) {\n        try {\n            int res = a / b;\n            return res;\n        } catch (ArithmeticException e) {\n            System.out.print("Catch ");\n            return -1;\n        } finally {\n            System.out.print("Finally ");\n        }\n    }\n    public static void main(String[] args) {\n        System.out.print(compute(20, 0) + " ");\n        System.out.print(compute(20, 5));\n    }\n}\n```',
            solution: `Execution Trace:
1. First call compute(20, 0):
   - 20 / 0 throws ArithmeticException.
   - Enters catch block -> prints Catch . Prepares to return -1.
   - Before returning, finally block executes unconditionally -> prints Finally .
   - Returns -1, so main prints -1 .
2. Second call compute(20, 5):
   - 20 / 5 = 4. Prepares to return 4.
   - Before returning, finally block executes -> prints Finally .
   - Returns 4, so main prints 4.

Exact Output:
Catch Finally -1 Finally 4`,
            tags: ['Java', 'Exception Handling', 'Output Tracing', 'Combined 4 Bank'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-4bank-6-10',
            questionNo: '6.10',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Compare B+ Tree Indexing and Hash Indexing in DBMS. For which specific SQL queries (`=`, `<`, `BETWEEN`, `LIKE \'ABC%\'`) is a B+ Tree Index superior to a Hash Index?',
            solution: `1. B+ Tree vs Hash Index:
- **Hash Index:** Maps search keys into buckets using a deterministic hash function h(k). Provides O(1) lookup for exact equality (WHERE AccNo = '10025'), but keys are stored in unsorted hash order.
- **B+ Tree Index:** Stores keys in sorted order across balanced tree levels with doubly-linked leaf pages. Lookup takes O(log N).

2. Query Support Comparison:
- Exact Equality (=): Both support it, Hash is O(1), B+ Tree is O(log N).
- Range Queries (<, >, BETWEEN), Prefix Matching (LIKE 'ABC%'), and ORDER BY: **Only B+ Tree Index** supports these efficiently via sequential leaf node traversal; Hash Index cannot be used for range scans.`,
            tags: ['DBMS', 'B+ Tree vs Hash Index', 'Database Internals'],
            marks: 15,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 5. Combined Bank Senior Officer (IT) 2023
  {
    id: 'so-it-2023',
    title: 'Senior Officer (IT), Combined Bank 2023 — BIBM Official Paper',
    searchQuery: 'Senior Officer (IT), Combined Bank 2023 question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: 'Combined-SO-2023',
    circularYear: '2023',
    examDate: 'November 10, 2023',
    examBody: 'BIBM — Bankers Selection Committee Secretariat (BSCS)',
    participatingBanks: ['Combined State Commercial & Specialized Banks'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'The 2023 Combined Bank Senior Officer (IT) written question paper conducted by BIBM. Structured into Official Part 1 (Bangla & English Focus Writing, Bi-directional Translations, and GK/Math) and Part 2 (10 Subject-Related CSE/IT questions covering SOLID Principles, Wait-For Graph Deadlock Detection, HeapSort C++ implementation, Redis Caching strategies, Recursive CTEs, NIST Incident Response, and Compiler Lexical/Syntax Analysis).',
    keyTopics: ['SOLID Principles', 'Deadlock Detection & Wait-For Graph', 'HeapSort & Priority Queue', 'Redis Caching', 'NIST Incident Response', 'Recursive SQL CTE'],
    sections: [
      {
        id: 'sec-so2023-nontech',
        name: 'Part 1: Focus Writing, Translation & General Knowledge (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-so2023-n1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in Bangla:\nব্যাংকিং খাতে তথ্যপ্রযুক্তি নির্ভর সেবার মানোন্নয়ন এবং গ্রাহকের তথ্য সুরক্ষা।',
            solution: `১. ভূমিকা:
তথ্যপ্রযুক্তির কল্যাণে বাংলাদেশের ব্যাংকিং খাত আজ শাখাভিত্তিক সেবা থেকে বেরিয়ে এসে সার্বক্ষণিক ডিজিটাল ব্যাংকিংয়ে রূপান্তরিত হয়েছে। তবে সেবার পরিধি বাড়ার সাথে সাথে গ্রাহকের ব্যক্তিগত ও আর্থিক তথ্যের গোপনীয়তা রক্ষা করা সবচেয়ে বড় দায়িত্ব হয়ে দাঁড়িয়েছে।

২. সেবার মানোন্নয়ন ও তথ্য সুরক্ষার কৌশল:
- অ্যান্ড-টু-অ্যান্ড এনক্রিপশন (End-to-End Encryption) এবং মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA) বাধ্যতামূলক করা।
- নিয়মিত পেনিট্রেশন টেস্টিং (VAPT) এবং কর্মকর্তা ও গ্রাহকদের ফিশিং ও সোশ্যাল ইঞ্জিনিয়ারিং বিষয়ে সচেতন করা।`,
            tags: ['Focus Writing in Bangla', 'Data Privacy', 'Banking IT'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-7',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English:\n"Cultivating the Human Firewall: Mitigating Social Engineering and Spear-Phishing in Banking" (Word limit: 250 words).',
            solution: `Key Points:
- Technical controls (firewalls, anti-virus) cannot fully prevent breaches when attackers target human psychology (urgency, authority, fear).
- Common vectors: Spear-phishing targeting finance officers, CEO fraud, fake invoice redirections, phone vishing.
- Building the Human Firewall: Continuous interactive phishing simulations, rewarding employees who promptly report suspicious emails, multi-channel verification for high-value fund disbursements.
- Conclusion: Well-trained employees represent the most robust first line of defense in cybersecurity.`,
            tags: ['Focus Writing', 'English', 'Social Engineering', 'Cybersecurity'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-8',
            questionNo: '3',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English:\n"সাইবার ঝুঁকি ব্যবস্থাপনায় আধুনিক ব্যাংকিং প্রতিষ্ঠানগুলো নিয়মিত কর্মীদের সচেতনতামূলক প্রশিক্ষণ প্রদান করছে। কোনো প্রযুক্তিই মানুষের ভুলের শতভাগ বিকল্প হতে পারে না।"',
            solution: `Standard High-Quality Model Translation:
"In cyber risk management, modern banking institutions are regularly imparting awareness training to their employees. No technology can completely substitute for human error."`,
            tags: ['Translation', 'Bangla to English', 'Risk Management'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-so2023-n4',
            questionNo: '4',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into Bangla:\n"Cloud computing offers elastic scalability and cost efficiency, yet financial regulators require strict data residency so that sensitive national financial records never leave sovereign borders."',
            solution: `প্রমিত বাংলা অনুবাদ:
"ক্লাউড কম্পিউটিং নমনীয় সম্প্রসারণশীলতা এবং ব্যয় সাশ্রয়ী সুবিধা প্রদান করে, তবুও আর্থিক নিয়ন্ত্রক সংস্থাগুলো কঠোর ডেটা রেসিডেন্সি বা তথ্য সংরক্ষণ নীতিমালা দাবি করে যাতে সংবেদনশীল জাতীয় আর্থিক তথ্যাদি কখনোই দেশের সার্বভৌম সীমানার বাইরে না যায়।"`,
            tags: ['Translation', 'English to Bangla', 'Cloud Data Residency'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-n5',
            questionNo: '5',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'General Knowledge & Banking ICT (5 × 2 = 10 Marks):\n5.1 What does SWIFT stand for and where is its headquarters located?\n5.2 What is the full form of PCI-DSS in payment card security?\n5.3 Which organization manages the allocation of IPv4/IPv6 addresses in the Asia-Pacific region?\n5.4 What is the maximum payload size of a standard Ethernet frame (MTU)?\n5.5 What does BACH stand for in Bangladesh Bank operations?',
            solution: `5.1 **SWIFT:** Society for Worldwide Interbank Financial Telecommunication; Headquarters: **La Hulpe, Belgium**.
5.2 **PCI-DSS:** Payment Card Industry Data Security Standard.
5.3 **Asia-Pacific IP Registry:** **APNIC** (Asia-Pacific Network Information Centre).
5.4 **Standard Ethernet MTU:** **1500 bytes**.
5.5 **BACH:** Bangladesh Automated Clearing House.`,
            tags: ['General Knowledge', 'SWIFT', 'PCI-DSS', 'APNIC', 'BACH'],
            marks: 10,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-so2023-tech',
        name: 'Part 2: 6. Subject Related Questions (10 × 15 = 150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-so2023-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Explain the SOLID principles of Object-Oriented Software Design with concrete examples relevant to a banking software system (e.g. Payment Processors, Account Types).',
            solution: `1. Single Responsibility Principle (SRP):
A class should have one, and only one, reason to change. Separate Account (domain logic), StatementGenerator (PDF reporting), and SMSNotificationService (alerts).

2. Open/Closed Principle (OCP):
Software entities should be open for extension, but closed for modification. Implement IPaymentGateway in new classes (BkashGateway, NagadGateway) without altering existing checkout code.

3. Liskov Substitution Principle (LSP):
Subtypes must be substitutable for their base types without breaking behavior.

4. Interface Segregation Principle (ISP):
Split bloated interfaces into smaller client-specific interfaces (IRetailAccount, ICorporateLoan).

5. Dependency Inversion Principle (DIP):
High-level modules and low-level modules should both depend on abstractions (interfaces) rather than concrete implementations.`,
            tags: ['Software Engineering', 'SOLID Principles', 'OOP', 'System Design'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-2',
            questionNo: '6.2',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'How are database deadlocks detected in relational databases using Wait-For Graphs (WFG)? What is the difference between Deadlock Prevention, Deadlock Avoidance (Banker’s Algorithm), and Deadlock Detection & Recovery?',
            solution: `1. Wait-For Graph (WFG) Deadlock Detection:
- Directed graph G = (V, E) where vertices V are active transactions and directed edge Ti -> Tj means Ti is waiting for a lock held by Tj.
- A deadlock exists if and only if the WFG contains a directed cycle. The DBMS periodically runs DFS cycle detection and rolls back the lowest-cost victim transaction.

2. Prevention vs. Avoidance vs. Detection:
- Prevention: Eliminates one of the 4 Coffman conditions upfront (e.g. Wait-Die or Wound-Wait timestamp schemes).
- Avoidance: Requires advance knowledge of maximum resource claims (Banker's Algorithm).
- Detection & Recovery: Standard in enterprise RDBMS (Oracle, PostgreSQL, SQL Server) where deadlocks are detected via WFG cycles and resolved via victim rollback.`,
            tags: ['DBMS', 'Operating Systems', 'Deadlock', 'Banker Algorithm', 'WFG'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2023-3',
            questionNo: '6.3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C++ program to implement HeapSort on an integer array. Explain how a Max-Heap is maintained using the `heapify` procedure and derive its overall time complexity.',
            solution: 'HeapSort implementation using max-heapify in O(N log N) worst-case time and O(1) auxiliary space.',
            codeSolution: `#include <iostream>
#include <vector>

void heapify(std::vector<int>& arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest != i) {
        std::swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        std::swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}`,
            solutionLanguage: 'cpp',
            tags: ['Algorithms', 'HeapSort', 'Data Structures', 'C++'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Explain Distributed Caching using Redis in modern core banking architectures. Compare Cache-Aside (Lazy Loading) vs. Write-Through vs. Write-Behind caching strategies. How is Cache Invalidation handled?',
            solution: `1. Caching Strategies:
- Cache-Aside (Lazy Loading): Application checks Redis first; on miss, reads from RDBMS, populates Redis, and returns data.
- Write-Through: Writes synchronously to both Redis and RDBMS, guaranteeing cache consistency.
- Write-Behind: Writes to Redis immediately and asynchronously batches updates to the RDBMS.

2. Cache Invalidation:
Managed via Time-To-Live (TTL) expiration policies and event-driven cache eviction/update upon balance-modifying transactions.`,
            tags: ['Distributed Systems', 'Redis', 'Caching', 'System Design'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-5',
            questionNo: '6.5',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Given table: `Employee(EmpID, EmpName, ManagerID, Salary)`. Write a Recursive Common Table Expression (CTE) in SQL to display the complete management hierarchy path (from CEO down to individual officers) along with their organizational level.',
            solution: 'Recursive SQL CTE combining an anchor member (WHERE ManagerID IS NULL) and a recursive member joined on ManagerID = EmpID.',
            codeSolution: `WITH RECURSIVE OrgHierarchy AS (
    SELECT EmpID, EmpName, ManagerID, 1 AS OrgLevel,
           CAST(EmpName AS VARCHAR(255)) AS HierarchyPath
    FROM Employee WHERE ManagerID IS NULL
    UNION ALL
    SELECT e.EmpID, e.EmpName, e.ManagerID, oh.OrgLevel + 1,
           CAST(CONCAT(oh.HierarchyPath, ' -> ', e.EmpName) AS VARCHAR(255))
    FROM Employee e
    JOIN OrgHierarchy oh ON e.ManagerID = oh.EmpID
)
SELECT EmpID, EmpName, OrgLevel, HierarchyPath
FROM OrgHierarchy ORDER BY OrgLevel, EmpID;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Recursive CTE', 'Hierarchical Query', 'DBMS'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2023-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Outline the NIST Incident Response Lifecycle (SP 800-61). Explain how a bank Security Operations Center (SOC) applies the 4 phases (Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-Incident Activity) during a suspected ransomware outbreak.',
            solution: `1. Preparation: Hardening endpoints, deploying EDR/SIEM, maintaining offline immutable backups.
2. Detection & Analysis: Identifying anomalous file encryption or C2 beaconing, determining IOCs and blast radius.
3. Containment, Eradication & Recovery: Isolating infected VLANs, revoking compromised credentials, re-imaging hosts, and restoring from verified clean backups.
4. Post-Incident Activity: Root-cause forensic report and updating firewall/SIEM detection rules.`,
            tags: ['Cybersecurity', 'NIST', 'Incident Response', 'Ransomware', 'SOC'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'List the phases of a Compiler in order. For the statement `balance = principal + rate * 12.0;`, show the step-by-step output produced by the Lexical Analyzer, Syntax Analyzer, Semantic Analyzer, and Intermediate Code Generator (3-Address Code).',
            solution: `1. Lexical Analyzer (Token Stream):
id1 = id2 + id3 * 12.0 ;

2. Syntax Analyzer (Parse Tree / AST):
Assignment (=) with id1 on left and (+) (id2 and (*)(id3, 12.0)) on right.

3. Semantic Analyzer (Type Checking & Coercion):
Inserts inttofloat(12) if integer constant is used with floating-point operands.

4. Intermediate Code Generator (Three-Address Code):
t1 = id3 * 12.0
t2 = id2 + t1
id1 = t2`,
            tags: ['Compiler Design', 'Three-Address Code', 'Lexical Analysis', 'Syntax Tree'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-6-8',
            questionNo: '6.8',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'A data link layer protocol uses CRC (Cyclic Redundancy Check) with generator polynomial G(x) = x^3 + x + 1 (binary `1011`). If the dataword to be transmitted is `100100`, compute the transmitted codeword.',
            solution: `1. Generator Polynomial: G = 1011 (degree r = 3).
2. Append 3 zeros to dataword 100100 -> 100100000.
3. Modulo-2 Binary Division of 100100000 by 1011:
   - Dividend: 1 0 0 1 0 0 0 0 0 (9 bits)
   - Step 1 (bits 1-4): 1001 XOR 1011 = 0010
   - Bring down bit 5 (0): 0100 (leading 0, XOR 0000 = 100)
   - Bring down bit 6 (0): 1000 XOR 1011 = 0011
   - Bring down bit 7 (0): 0110 (leading 0, XOR 0000 = 110)
   - Bring down bit 8 (0): 1100 XOR 1011 = 0111
   - Bring down bit 9 (0): 1110 XOR 1011 = 0101 -> 3-bit CRC Remainder = 101.
   (Polynomial verification: (x^8 + x^5) mod (x^3 + x + 1) = x^2 + 1 = 101).
4. Transmitted Codeword = Dataword + CRC Remainder = 100100101.`,
            tags: ['Networking', 'CRC Calculation', 'Error Detection', 'Data Link Layer'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-so2023-6-9',
            questionNo: '6.9',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Dynamic Programming solution in C++ or Python for the 0/1 Knapsack Problem given item weights `wt[]`, values `val[]`, and knapsack capacity `W`. State its time and space complexity.',
            solution: 'Bottom-up 2D Dynamic Programming table solving 0/1 Knapsack in O(N * W) time.',
            codeSolution: `def knapsack_01(weights: list[int], values: list[int], W: int) -> int:
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, W + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                )
            else:
                dp[i][w] = dp[i - 1][w]
    return dp[n][W]`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Dynamic Programming', '0/1 Knapsack'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-so2023-6-10',
            questionNo: '6.10',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the DNS resolution process (Recursive vs Iterative queries) when a customer types `https://ebanking.sonalibank.com.bd` into their browser. What is DNS Cache Poisoning (DNS Spoofing) and how does DNSSEC prevent it?',
            solution: `1. DNS Resolution Steps:
- Browser checks local cache and OS hosts/resolver cache.
- Sends a **Recursive Query** to the ISP/Enterprise Recursive Resolver.
- The Resolver performs **Iterative Queries**:
  1. Queries Root Name Server (.) -> returns .bd TLD referral.
  2. Queries .bd TLD Server (BTCL) -> returns .com.bd referral.
  3. Queries Authoritative Name Server for sonalibank.com.bd -> returns the A / AAAA IP address record.

2. DNS Cache Poisoning & DNSSEC:
- **DNS Cache Poisoning:** An attacker injects forged DNS responses with a malicious IP into a resolver's cache, redirecting customers to a phishing clone site.
- **DNSSEC (DNS Security Extensions):** Digitally signs DNS records (RRSIG, DNSKEY, DS records) using public-key cryptography in a chain of trust from the Root Zone down to the domain, allowing resolvers to verify authenticity and reject forged responses.`,
            tags: ['Networking', 'DNS', 'DNSSEC', 'Cybersecurity'],
            marks: 15,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 6. Combined Bank SB & BDBL Senior Officer (IT)
  {
    id: 'so-it-sb-bdbl',
    title: 'Senior Officer (IT), Combined Bank (Sonali Bank & BDBL) — BIBM Official Paper',
    searchQuery: 'Senior Officer (IT), Combined Bank SB BDBL question paper pdf',
    category: 'Senior Officer (IT)',
    jobId: 'Combined-SB-BDBL',
    circularYear: '2022-2023',
    examDate: 'December 23, 2023',
    examBody: 'BIBM — Bankers Selection Committee Secretariat (BSCS)',
    participatingBanks: ['Sonali Bank PLC', 'Bangladesh Development Bank PLC (BDBL)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Descriptive & Technical)',
    summary: 'Authentic BIBM recruitment written paper for Senior Officer (IT) for Sonali Bank and BDBL. Includes Official Part 1 (Bangla Focus Writing, English Focus Writing on ICT Startup & SME Financing, Translations, and GK/Math) and Part 2 (10 Subject-Related CSE/IT questions covering ISO 8583 Financial Switch Messaging, SQL Audit Triggers, Mutex vs Semaphore Race Condition Prevention, Password Hashing with Salt & Argon2/bcrypt, Kahn Topological Sort for EOD Batch Jobs, Paging vs Segmentation & TLB, and REST vs SOAP APIs).',
    keyTopics: ['ISO 8583 Messaging', 'SQL Audit Triggers', 'Cryptographic Hashing (SHA-256 vs bcrypt)', 'Mutex vs Semaphore', 'Topological Sorting', 'TLB Effective Memory Access Time'],
    sections: [
      {
        id: 'sec-sbbdbl-nontech',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (50 Marks)',
        marks: 50,
        questions: [
          {
            id: 'q-sbbdbl-n1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in Bangla:\nউন্নয়ন ও বাণিজ্যিক ব্যাংকিং খাতে ক্ষুদ্র ও মাঝারি শিল্প (SME) এবং আইটি উদ্যোক্তাদের অর্থায়নে ডিজিটাল প্রযুক্তির ভূমিকা।',
            solution: `১. ভূমিকা:
বাংলাদেশের অর্থনৈতিক প্রবৃদ্ধি এবং কর্মসংস্থান সৃষ্টিতে ক্ষুদ্র ও মাঝারি শিল্প (SME) এবং তথ্যপ্রযুক্তি খাতের তরুণ উদ্যোক্তাদের অবদান অপরিসীম। সোনালী ব্যাংক ও বিডিবিএল-এর মতো প্রতিষ্ঠানগুলো এখন ডিজিটাল প্ল্যাটফর্মের মাধ্যমে উদ্যোক্তাদের দ্রুত ঋণ ও আর্থিক সেবা পৌঁছে দিচ্ছে।

২. ডিজিটাল প্রযুক্তির ভূমিকা:
- অনলাইন লোন অ্যাপ্লিকেশন ট্র্যাকিং এবং বিকল্প ক্রেডিট স্কোরিং (Alternative Credit Scoring)।
- নারী ও তরুণ আইটি উদ্যোক্তাদের জন্য স্বল্প সুদে স্টার্টআপ ফান্ড ও রিফাইন্যান্সিং স্কিম।`,
            tags: ['Focus Writing in Bangla', 'SME Financing', 'ICT Startups', 'SB BDBL'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-7',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Focus Writing in English:\n"The Role of Specialized Development Banks (e.g. BDBL) in Catalyzing ICT Entrepreneurship and SME Financing in Bangladesh" (Word limit: 250 words).',
            solution: `Key Thematic Analysis:
- Traditional commercial banks often hesitate to finance early-stage ICT startups due to lack of tangible collateral (land, buildings) despite viable intellectual property (IP).
- Development Financial Institutions (DFIs) like Bangladesh Development Bank PLC (BDBL) are mandated to bridge this funding gap through venture credit, equity participation, and low-interest technology adoption loans.
- Fostering the Fourth Industrial Revolution (4IR): Financing agritech, healthtech, and software export enterprises to diversify foreign currency earnings beyond ready-made garments (RMG).
- Conclusion: Development banks serve as strategic financial enablers for a self-reliant technological ecosystem.`,
            tags: ['Focus Writing', 'English', 'Development Banking', 'ICT Financing'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-8',
            questionNo: '3',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into English:\n"সোনালী ব্যাংক এবং বিডিবিএল দেশের অর্থনৈতিক প্রবৃদ্ধিতে অগ্রণী ভূমিকা পালন করছে। ক্ষুদ্র ও মাঝারি শিল্প উদ্যোক্তাদের সহজে আর্থিক সেবা দিতে এই ব্যাংকগুলো এখন আধুনিক ডিজিটাল প্ল্যাটফর্ম ব্যবহার করছে।"',
            solution: `Standard High-Quality Model Translation:
"Sonali Bank and BDBL are playing pioneering roles in the economic growth of the country. In order to provide financial services smoothly to small and medium enterprise entrepreneurs, these banks are now utilizing modern digital platforms."`,
            tags: ['Translation', 'Bangla to English', 'BDBL', 'SME Financing'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-sbbdbl-n4',
            questionNo: '4',
            type: 'translation',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Translate into Bangla:\n"Every financial switch transaction between ATMs and core banking servers is authenticated using hardware security modules and encrypted PIN blocks to prevent eavesdropping."',
            solution: `প্রমিত বাংলা অনুবাদ:
"তথ্য চুরি বা আড়ি পাতা প্রতিহত করতে এটিএম এবং কোর ব্যাংকিং সার্ভারের মধ্যকার প্রতিটি ফিনান্সিয়াল সুইচ লেনদেন হার্ডওয়্যার সিকিউরিটি মডিউল (HSM) এবং এনক্রিপ্টেড পিন ব্লকের মাধ্যমে যাচাই করা হয়।"`,
            tags: ['Translation', 'English to Bangla', 'HSM Security'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-sbbdbl-n5',
            questionNo: '5',
            type: 'math',
            topicCategory: 'Non-Technical & Language',
            questionText: 'Analytical Mathematics (2 × 5 = 10 Marks):\n5.1 A train 150 meters long passes a telegraph pole in 6 seconds and passes another train of the same length travelling in the opposite direction in 5 seconds. Find the speed of the second train in km/hr.\n5.2 If the price of server hardware increases by 25%, by what percentage must a bank reduce its hardware unit purchase so that the total capital expenditure remains unchanged?',
            solution: `5.1 Relative Speed of Trains:
- Speed of 1st train, v1 = 150 m / 6 s = 25 m/s.
- Total distance to cross 2nd train = 150 + 150 = 300 m.
- Relative speed in opposite direction, v1 + v2 = 300 m / 5 s = 60 m/s.
- Speed of 2nd train, v2 = 60 - 25 = 35 m/s.
- In km/hr: 35 × (18 / 5) = **126 km/hr**.

5.2 Percentage Reduction Formula:
- Reduction % = [R / (100 + R)] × 100 = (25 / 125) × 100 = **20%**.`,
            tags: ['Analytical Math', 'Trains Relative Speed', 'Percentage'],
            marks: 10,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-sbbdbl-tech',
        name: 'Part 2: 6. Subject Related Questions (10 × 15 = 150 Marks)',
        marks: 150,
        questions: [
          {
            id: 'q-sbbdbl-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is the ISO 8583 standard in banking payment systems? Describe its message structure: Message Type Identifier (MTI), Primary Bitmap, and Data Elements. How is an authorization request (MTI 0100) and response (MTI 0110) processed?',
            solution: `1. ISO 8583 Overview:
ISO 8583 is the international standard for Financial Transaction Card Originated Messages governing exchanges between ATMs/POS terminals, acquirer switches, NPSB/Visa/Mastercard, and issuer CBS hosts.

2. Message Structure:
- **MTI (4 digits):** Version, Message Class, Function, Origin (e.g. 0100 = Auth Request, 0110 = Auth Response, 0200 = Financial Request, 0420 = Reversal Advice).
- **Primary & Secondary Bitmaps (64 bits each):** Indicate which of the 128 Data Elements are present in the payload.
- **Key Data Elements:** DE2 (PAN), DE3 (Processing Code), DE4 (Transaction Amount), DE11 (STAN), DE39 (Response Code 00 = Approved, 51 = Insufficient Funds), DE52 (Encrypted PIN Block).`,
            tags: ['FinTech', 'ISO 8583', 'NPSB', 'ATM Switching', 'Payment Systems'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-sbbdbl-2',
            questionNo: '6.2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Write an SQL Trigger in PostgreSQL or MySQL on table `Account(AccNo, Balance, Status)` that automatically logs any balance changes into an audit table `AccountAudit(AuditID, AccNo, OldBalance, NewBalance, ChangedAt, ChangedBy)`.',
            solution: 'Trigger definition capturing BEFORE/AFTER row changes into an immutable audit ledger.',
            codeSolution: `CREATE OR REPLACE FUNCTION log_balance_change()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.Balance <> NEW.Balance THEN
        INSERT INTO AccountAudit (AccNo, OldBalance, NewBalance, ChangedAt, ChangedBy)
        VALUES (OLD.AccNo, OLD.Balance, NEW.Balance, NOW(), CURRENT_USER);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_account_balance_audit
AFTER UPDATE OF Balance ON Account
FOR EACH ROW
EXECUTE FUNCTION log_balance_change();`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Triggers', 'Audit Logging', 'DBMS', 'Banking Security'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Compare Mutex vs. Counting Semaphore in Operating Systems. Explain how they prevent race conditions in multi-threaded bank transaction processing when two threads attempt to withdraw from the same account simultaneously.',
            solution: `1. Mutex vs. Counting Semaphore:
- **Mutex:** Binary lock with strict ownership (only the thread that locks it can unlock it). Protects critical sections.
- **Counting Semaphore:** Integer counter initialized to N controlling concurrent access to a pool of N resources (e.g., DB connection pool).

2. Preventing Lost Update / Race Condition on Account Balance:
Acquiring an account-specific mutex before reading and deducting the balance ensures serialized execution so two concurrent withdrawal threads cannot overdraw the same balance.`,
            tags: ['Operating Systems', 'Concurrency', 'Mutex', 'Semaphore', 'Race Conditions'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain Cryptographic Hashing algorithms. Contrast MD5, SHA-1, and SHA-256. Explain why salting and slow hashing algorithms (bcrypt, Argon2) are required for storing customer internet banking passwords rather than raw SHA-256.',
            solution: `1. Hash Comparison:
- MD5 (128-bit) and SHA-1 (160-bit) suffer from practical collision vulnerabilities and are deprecated.
- SHA-256 (256-bit) is collision-resistant for digital signatures and integrity verification.

2. Salting & Key Stretching (bcrypt / Argon2):
- Unique per-user random salt prevents precomputed Rainbow Table attacks.
- Configurable work factor / memory hardness (Argon2id / bcrypt) slows down GPU brute-force cracking from billions of guesses/sec to a few thousand.`,
            tags: ['Cryptography', 'Password Hashing', 'SHA-256', 'bcrypt', 'Security'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-5',
            questionNo: '6.5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python program to implement Topological Sort on a Directed Acyclic Graph (DAG) using Kahn’s Algorithm (In-degree queue). Explain how it applies to scheduling bank automated batch jobs (EOD - End of Day processing).',
            solution: 'Kahn’s algorithm using in-degree array and queue.',
            codeSolution: `from collections import deque

def topological_sort_kahn(num_jobs: int, dependencies: list[tuple[int, int]]):
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
        raise ValueError("Cycle detected in batch dependencies!")
    return order`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Topological Sort', 'DAG', 'Kahn Algorithm', 'Job Scheduling'],
            marks: 15,
            difficulty: 'Hard'
          },
          {
            id: 'q-sbbdbl-6',
            questionNo: '6.6',
            type: 'math',
            topicCategory: 'Operating Systems & Linux',
            questionText: 'Differentiate between Paging and Segmentation. In a paged memory system, a Translation Lookaside Buffer (TLB) has a hit ratio of 90% and takes 10 ns to search. Main memory access takes 100 ns. Calculate the Effective Memory Access Time (EMAT) for a single-level page table.',
            solution: `1. Paging vs Segmentation:
- Paging divides memory into fixed-size pages/frames (suffers only from internal fragmentation on the last page).
- Segmentation divides memory into logical variable-sized segments (code, stack, heap; suffers from external fragmentation).

2. EMAT Calculation:
- **On TLB Hit (p = 0.90):**
  Time = TLB Lookup + 1 Main Memory Access = 10 ns + 100 ns = 110 ns.
- **On TLB Miss (1 - p = 0.10):**
  Time = TLB Lookup + Page Table Access in RAM + Operand Access in RAM = 10 ns + 100 ns + 100 ns = 210 ns.
- **Effective Memory Access Time (EMAT):**
  EMAT = 0.90 × 110 + 0.10 × 210 = 99 + 21 = 120 ns.`,
            tags: ['Operating Systems', 'Paging', 'TLB', 'EMAT Calculation'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Software Engineering & System Design',
            questionText: 'Compare RESTful APIs vs. SOAP Web Services in banking system integration. Why is SOAP (with WS-Security) still used in legacy interbank settlement interfaces while REST/JSON dominates mobile banking?',
            solution: `1. REST vs SOAP Comparison:
- **SOAP:** Strict XML protocol with WSDL contracts, built-in ACID transaction standards (WS-AtomicTransaction), and message-level encryption/signatures (WS-Security). Ideal for enterprise-to-enterprise legacy core banking and central bank clearing interfaces.
- **REST:** Architectural style over HTTP using lightweight JSON payloads, stateless operations, and standard HTTP verbs (GET, POST, PUT, DELETE). Ideal for mobile banking apps and microservices due to low bandwidth and fast parsing.`,
            tags: ['Web Services', 'REST vs SOAP', 'API Architecture', 'FinTech'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-sbbdbl-6-8',
            questionNo: '6.8',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C function to check whether two strings are anagrams of each other (e.g., `"listen"` and `"silent"`) in O(N) time complexity without sorting.',
            solution: 'Use a 256-element frequency count array in C to increment counts for the first string and decrement for the second.',
            codeSolution: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool areAnagrams(const char *s1, const char *s2) {
    if (strlen(s1) != strlen(s2)) return false;
    int count[256] = {0};
    for (int i = 0; s1[i] != '\\0'; i++) {
        count[(unsigned char)s1[i]]++;
        count[(unsigned char)s2[i]]--;
    }
    for (int i = 0; i < 256; i++) {
        if (count[i] != 0) return false;
    }
    return true;
}`,
            solutionLanguage: 'c',
            tags: ['C Programming', 'Strings', 'Anagram O(N)', 'Algorithms'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-sbbdbl-6-9',
            questionNo: '6.9',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What is ARP Spoofing (ARP Poisoning) in a branch Local Area Network (LAN)? How does Dynamic ARP Inspection (DAI) with DHCP Snooping on managed Layer-2 switches prevent Man-in-the-Middle (MitM) attacks?',
            solution: `1. ARP Spoofing Mechanism:
Because standard ARP (Address Resolution Protocol) is stateless and unauthenticated, an attacker on a branch LAN can broadcast forged Gratuitous ARP replies associating the attacker's MAC address with the Default Gateway's IP address, intercepting all teller traffic (MitM).

2. Prevention via DHCP Snooping & Dynamic ARP Inspection (DAI):
- **DHCP Snooping** builds a trusted hardware Binding Table (MAC Address <-> IP Address <-> Switch Port) from legitimate DHCP ACK messages.
- **Dynamic ARP Inspection (DAI)** intercepts all ARP packets on untrusted switch ports and drops any ARP reply whose IP-to-MAC mapping does not match the DHCP Snooping Binding Table.`,
            tags: ['Networking', 'ARP Spoofing', 'DAI', 'LAN Security'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-sbbdbl-6-10',
            questionNo: '6.10',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Table: `LoginAudit(LogID, UserID, LoginTime, IPAddress, Status)`. Write an SQL query to detect brute-force login attempts by finding all `UserID`s and `IPAddress`es that have recorded 5 or more failed login attempts (`Status = \'FAILED\'`) within a single calendar day.',
            solution: 'Filter on Status = FAILED, group by UserID, IPAddress, and DATE(LoginTime), and filter with HAVING COUNT(*) >= 5.',
            codeSolution: `SELECT 
    UserID,
    IPAddress,
    DATE(LoginTime) AS AttemptDate,
    COUNT(*) AS FailedAttempts,
    MIN(LoginTime) AS FirstAttempt,
    MAX(LoginTime) AS LastAttempt
FROM LoginAudit
WHERE Status = 'FAILED'
GROUP BY UserID, IPAddress, DATE(LoginTime)
HAVING COUNT(*) >= 5
ORDER BY FailedAttempts DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Cybersecurity', 'Brute Force Detection', 'Audit Log'],
            marks: 15,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  }
];

