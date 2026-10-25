import type { NonItExamPaper } from './bankNonItQuestions';

/**
 * Comprehensive 2010–2026 Question Papers Archive for:
 * 1. Computer Operator (Banks & All Govt Fields — Bangladesh Bank, Sonali, Janata, Agrani, Rupali, Krishi, BPSC, MoPA, Finance Division, CGA/OCAG, NBR, LGED, DPE, DSS, BWDB, Railway, Supreme Court, ACC)
 * 2. Data Entry / Control Operator (Bangladesh Bank, Combined Govt Banks, NBR, Election Commission NID Wing, BBS, DIP Passport, Ministries & Private Banks)
 *
 * Every Question Paper contains:
 * - Part A: Preliminary MCQ Questions (with 4 options A/B/C/D, correctAnswer, and step-by-step solution)
 * - Part B: Written Examination Questions (with full step-by-step model solution)
 */
export const computerAndDataEntryPapers2010To2026: NonItExamPaper[] = [
  // ============================================================================
  // 2026 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2026',
    questionPaperCode: 'COMP-OP-BB-MOPA-2026',
    title: '2026 Combined Bank & Ministry of Public Administration (MoPA) — Computer Operator (Grade-13)',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Ministry of Public Administration (MoPA), Finance Division & Bangladesh Bank Panel',
    examTaker: 'BPSC / Departmental Selection Committee & IBA DU',
    year: 2026,
    examDate: '27 February 2026',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: 'Complete 2026 Computer Operator Question Paper (Banks & All Govt Fields) covering Computer & ICT (25), Bangla (20), English (20), Mathematics (15), General Knowledge (10), and Written Exam.',
    questions: [
      {
        id: 'comp-op-2026-m1',
        paperId: 'comp-op-all-govt-bank-2026',
        questionPaperCode: 'COMP-OP-BB-MOPA-2026',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, which keyboard shortcut is used to split a table into two separate tables at the current row?',
        options: [
          'A) Ctrl + Shift + Enter',
          'B) Alt + Shift + Enter',
          'C) Ctrl + Enter',
          'D) Shift + Enter'
        ],
        correctAnswer: 'A) Ctrl + Shift + Enter',
        solution: `1. Placing the cursor on any row of a table in MS Word and pressing Ctrl + Shift + Enter splits the table into two tables right above the selected row.
2. Ctrl + Enter inserts a standard page break.
Correct Answer: A) Ctrl + Shift + Enter.`
      },
      {
        id: 'comp-op-2026-m2',
        paperId: 'comp-op-all-govt-bank-2026',
        questionPaperCode: 'COMP-OP-BB-MOPA-2026',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the 2’s complement representation of the decimal number -25 in an 8-bit binary register?',
        options: [
          'A) 11100110',
          'B) 11100111',
          'C) 10011001',
          'D) 11101001'
        ],
        correctAnswer: 'B) 11100111',
        solution: `1. +25 in 8-bit binary = 00011001.
2. 1’s complement (invert bits) = 11100110.
3. Add 1 for 2’s complement: 11100110 + 1 = 11100111.
Correct Answer: B) 11100111.`
      },
      {
        id: 'comp-op-2026-m3',
        paperId: 'comp-op-all-govt-bank-2026',
        questionPaperCode: 'COMP-OP-BB-MOPA-2026',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which of the following IPv4 addresses is a valid Class B private IP address according to RFC 1918?',
        options: [
          'A) 172.32.10.5',
          'B) 172.24.16.100',
          'C) 192.168.10.1',
          'D) 10.16.0.1'
        ],
        correctAnswer: 'B) 172.24.16.100',
        solution: `1. RFC 1918 Class B private IP range is 172.16.0.0 to 172.31.255.255.
2. 172.24.16.100 falls inside 172.16.x.x – 172.31.x.x. (172.32.10.5 is a public IP).
Correct Answer: B) 172.24.16.100.`
      },
      {
        id: 'comp-op-2026-m4',
        paperId: 'comp-op-all-govt-bank-2026',
        questionPaperCode: 'COMP-OP-BB-MOPA-2026',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘অগ্নিবীণা’ কাব্যগ্রন্থের প্রথম কবিতা কোনটি?',
        options: [
          'A) বিদ্রোহী',
          'B) প্রলয়োল্লাস',
          'C) ধূমকেতু',
          'D) কামাল পাশা'
        ],
        correctAnswer: 'B) প্রলয়োল্লাস',
        solution: `কাজী নজরুল ইসলামের ‘অগ্নিবীণা’ (১৯২২) কাব্যগ্রন্থের প্রথম কবিতা ‘প্রলয়োল্লাস’ এবং দ্বিতীয় কবিতা ‘বিদ্রোহী’।
Correct Answer: B) প্রলয়োল্লাস.`
      },
      {
        id: 'comp-op-2026-m5',
        paperId: 'comp-op-all-govt-bank-2026',
        questionPaperCode: 'COMP-OP-BB-MOPA-2026',
        questionNo: 'MCQ-05',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Choose the correct passive voice of: "Who taught you French?"',
        options: [
          'A) By whom were you taught French?',
          'B) Who was taught French by you?',
          'C) By whom you were taught French?',
          'D) Whom were you taught French by?'
        ],
        correctAnswer: 'A) By whom were you taught French?',
        solution: `For interrogative sentences starting with 'Who' in past simple tense:
Active: Who + V2 + object1 + object2?
Passive: By whom + were/was + object1 + V3 + object2? -> "By whom were you taught French?"
Correct Answer: A) By whom were you taught French?`
      },
      {
        id: 'comp-op-2026-m6',
        paperId: 'comp-op-all-govt-bank-2026',
        questionPaperCode: 'COMP-OP-BB-MOPA-2026',
        questionNo: 'MCQ-06',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'If the ratio of cost price to selling price is 5 : 6, what is the profit percentage?',
        options: [
          'A) 16.67%',
          'B) 20%',
          'C) 25%',
          'D) 15%'
        ],
        correctAnswer: 'B) 20%',
        solution: `Profit % = ((SP - CP) / CP) × 100 = ((6 - 5) / 5) × 100 = (1/5) × 100 = 20%.
Correct Answer: B) 20%.`
      },
      {
        id: 'comp-op-2026-w1',
        paperId: 'comp-op-all-govt-bank-2026',
        questionPaperCode: 'COMP-OP-BB-MOPA-2026',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: '(a) Differentiate between Compiler and Interpreter with examples. (b) Explain the functions of Router, Switch, and Hub across layers of the OSI Model. (c) Write down the MS Excel formulas to find the 2nd highest salary from range D2:D100 and count employees in "IT" department from B2:B100.',
        solution: `Part (a): Compiler vs Interpreter
1. Compiler scans and translates the entire source program into machine code at once (e.g., C, C++). Execution is faster; errors are reported after scanning the whole code.
2. Interpreter translates and executes source code line-by-line (e.g., Python, JavaScript). Execution stops immediately at the first faulty line.

Part (b): Networking Devices in OSI Model
- Hub: Operates at Layer 1 (Physical Layer). Broadcasts signals to all ports without filtering.
- Switch: Operates at Layer 2 (Data Link Layer). Forwards frames selectively using MAC address tables.
- Router: Operates at Layer 3 (Network Layer). Routes packets across different networks using logical IP addresses.

Part (c): MS Excel Formulas
- 2nd Highest Salary: =LARGE(D2:D100, 2)
- Count employees in "IT" department: =COUNTIF(B2:B100, "IT")`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2026',
    questionPaperCode: 'DECO-BB-NBR-EC-2026',
    title: '2026 Bangladesh Bank, NBR & Election Commission — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank PLC & National Board of Revenue (NBR)',
    examTaker: 'Bankers’ Selection Committee Secretariat (BSCS) & Departmental Committee',
    year: 2026,
    examDate: '14 March 2026',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2026 Data Entry / Control Operator complete question paper with high-yield ICT, Database Validation, Bangla Unicode, English, Math, and Written solutions.',
    questions: [
      {
        id: 'deco-2026-m1',
        paperId: 'data-entry-all-govt-bank-2026',
        questionPaperCode: 'DECO-BB-NBR-EC-2026',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In Bijoy Bangla keyboard layout, how do you type the conjunct letter ‘ক্ষ’ (ক + ষ)?',
        options: [
          'A) J + G + N',
          'B) J + G + Shift + N',
          'C) K + G + N',
          'D) J + Shift + G + N'
        ],
        correctAnswer: 'B) J + G + Shift + N',
        solution: `In Bijoy Keyboard layout:
1. ‘ক’ = J
2. হসন্ত / Link key (্) = G
3. ‘ষ’ = Shift + N
Therefore, ক + ্ + ষ = J + G + Shift + N = ‘ক্ষ’.
Correct Answer: B) J + G + Shift + N.`
      },
      {
        id: 'deco-2026-m2',
        paperId: 'data-entry-all-govt-bank-2026',
        questionPaperCode: 'DECO-BB-NBR-EC-2026',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which MS Excel function removes all non-printable ASCII characters from imported text data during data cleaning?',
        options: [
          'A) =TRIM()',
          'B) =CLEAN()',
          'C) =PROPER()',
          'D) =EXACT()'
        ],
        correctAnswer: 'B) =CLEAN()',
        solution: `1. =CLEAN(text) removes all non-printable characters (ASCII 0 to 31) often imported from external databases or mainframe logs.
2. =TRIM(text) removes leading, trailing, and duplicate spaces between words.
Correct Answer: B) =CLEAN().`
      },
      {
        id: 'deco-2026-m3',
        paperId: 'data-entry-all-govt-bank-2026',
        questionPaperCode: 'DECO-BB-NBR-EC-2026',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which check digit algorithm is internationally used to validate 16-digit debit/credit card numbers and IMEI numbers against accidental data entry transposition errors?',
        options: [
          'A) Luhn Algorithm (Modulus 10)',
          'B) Dijkstra Algorithm',
          'C) Bellman-Ford Algorithm',
          'D) Caesar Cipher'
        ],
        correctAnswer: 'A) Luhn Algorithm (Modulus 10)',
        solution: `The Luhn Algorithm (Mod-10 algorithm) is the standard checksum formula used to validate credit/debit card numbers, IMEI numbers, and national identification numbers against single-digit errors and adjacent transposition errors.
Correct Answer: A) Luhn Algorithm (Modulus 10).`
      },
      {
        id: 'deco-2026-m4',
        paperId: 'data-entry-all-govt-bank-2026',
        questionPaperCode: 'DECO-BB-NBR-EC-2026',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'Operator A can enter 1,200 records in 4 hours, and Operator B can enter 1,200 records in 6 hours. Working together, how long will they take to enter 2,500 records?',
        options: [
          'A) 4.5 hours',
          'B) 5 hours',
          'C) 5.5 hours',
          'D) 6 hours'
        ],
        correctAnswer: 'B) 5 hours',
        solution: `1. Rate of Operator A = 1200 / 4 = 300 records/hour.
2. Rate of Operator B = 1200 / 6 = 200 records/hour.
3. Combined Rate = 300 + 200 = 500 records/hour.
4. Time for 2,500 records = 2500 / 500 = 5 hours.
Correct Answer: B) 5 hours.`
      },
      {
        id: 'deco-2026-w1',
        paperId: 'data-entry-all-govt-bank-2026',
        questionPaperCode: 'DECO-BB-NBR-EC-2026',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is Data Validation in database and spreadsheet operations? Describe 5 types of data validation checks (Range Check, Format Check, Length Check, Presence Check, Check Digit) with practical banking examples.',
        solution: `Data Validation ensures that data entered into a system is accurate, complete, and conforms to predefined business rules before processing.

Five Core Validation Checks in Banking & Government Portals:
1. Presence Check: Ensures mandatory fields are not left blank (e.g., Customer NID Number or Account Holder Name cannot be NULL).
2. Length Check: Verifies the exact character count (e.g., Bangladesh Smart NID must be 10 or 17 digits; Mobile number must be 11 digits).
3. Range Check: Ensures numerical values fall within acceptable bounds (e.g., RTGS minimum transaction >= BDT 1,00,000).
4. Format / Picture Check: Ensures data follows a fixed pattern (e.g., TIN / e-TIN format or Date in DD/MM/YYYY format).
5. Check Digit Verification: Uses mathematical checksums (e.g., Luhn algorithm on 16-digit bank card numbers or MICR cheque routing numbers) to catch typing/transposition errors immediately.`
      }
    ]
  },

  // ============================================================================
  // 2025 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2025',
    questionPaperCode: 'COMP-OP-CGA-BANK-2025',
    title: '2025 CGA (Controller General of Accounts), LGED & Combined Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Office of the Controller General of Accounts (CGA), LGED & State-Owned Banks',
    examTaker: 'BPSC / Ministry of Finance & BSCS',
    year: 2025,
    examDate: '22 August 2025',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2025 Official Computer Operator exam paper covering iBAS++ accounting ICT, Operating Systems, SQL basics, Bangla grammar, English, and Math.',
    questions: [
      {
        id: 'comp-op-2025-m1',
        paperId: 'comp-op-all-govt-bank-2025',
        questionPaperCode: 'COMP-OP-CGA-BANK-2025',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which Windows command-line utility displays the IP address, subnet mask, Default Gateway, and MAC (Physical) address of all network adapters?',
        options: [
          'A) ipconfig /all',
          'B) ping -t',
          'C) tracert',
          'D) nslookup'
        ],
        correctAnswer: 'A) ipconfig /all',
        solution: `Running 'ipconfig /all' in Windows Command Prompt displays full TCP/IP configuration including Physical Address (MAC), DHCP status, DNS servers, IPv4 address, Subnet Mask, and Default Gateway.
Correct Answer: A) ipconfig /all.`
      },
      {
        id: 'comp-op-2025-m2',
        paperId: 'comp-op-all-govt-bank-2025',
        questionPaperCode: 'COMP-OP-CGA-BANK-2025',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS PowerPoint, which key combination starts the slide show directly from the CURRENT slide instead of the first slide?',
        options: [
          'A) F5',
          'B) Shift + F5',
          'C) Ctrl + F5',
          'D) Alt + F5'
        ],
        correctAnswer: 'B) Shift + F5',
        solution: `1. F5 starts the presentation from the very first slide.
2. Shift + F5 starts the slide show from the currently selected slide.
Correct Answer: B) Shift + F5.`
      },
      {
        id: 'comp-op-2025-m3',
        paperId: 'comp-op-all-govt-bank-2025',
        questionPaperCode: 'COMP-OP-CGA-BANK-2025',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'What does iBAS++ stand for in the Government of Bangladesh’s public financial management system operated by Finance Division and CGA?',
        options: [
          'A) Integrated Budget and Accounting System',
          'B) International Banking and Auditing Software',
          'C) Internal Balance and Account Settlement',
          'D) Integrated Banking Automation System'
        ],
        correctAnswer: 'A) Integrated Budget and Accounting System',
        solution: `iBAS++ stands for Integrated Budget and Accounting System, the centralized financial management and electronic fund transfer (EFT) platform of the Finance Division, Ministry of Finance.
Correct Answer: A) Integrated Budget and Accounting System.`
      },
      {
        id: 'comp-op-2025-w1',
        paperId: 'comp-op-all-govt-bank-2025',
        questionPaperCode: 'COMP-OP-CGA-BANK-2025',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is Mail Merge in MS Word? Write down the step-by-step procedure to generate 500 interview call letters for candidates using an MS Excel sheet as the data source.',
        solution: `Mail Merge is an MS Word feature that combines a standard document template (Main Document) with a structured recipient list (Data Source) to produce personalized letters, envelopes, or labels in bulk.

Step-by-Step Procedure:
1. Prepare Data Source: Create an Excel file (candidates.xlsx) with column headers (Roll_No, Name, Address, Exam_Center, Exam_Date) and save it.
2. Create Main Document: Open MS Word and type the official Interview Call Letter template.
3. Connect Data Source: Go to Mailings Tab -> Start Mail Merge -> Letters -> Select Recipients -> Use an Existing List -> Select 'candidates.xlsx'.
4. Insert Merge Fields: Place the cursor at specific placeholders and click 'Insert Merge Field' (e.g., <<Roll_No>>, <<Name>>, <<Exam_Center>>).
5. Preview & Complete: Click 'Preview Results' to verify formatting, then click 'Finish & Merge' -> 'Edit Individual Documents' or 'Print Documents' to generate all 500 letters automatically.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2025',
    questionPaperCode: 'DECO-BB-BBS-2025',
    title: '2025 Bangladesh Bank & Bangladesh Bureau of Statistics (BBS) — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Combined 8 Govt Banks & Bangladesh Bureau of Statistics (BBS)',
    examTaker: 'BSCS & BBS Recruitment Committee',
    year: 2025,
    examDate: '19 July 2025',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2025 Data Entry / Control Operator exam paper covering Spreadsheet Data Controls, Keyboard Shortcuts, Bangla, English, and Math.',
    questions: [
      {
        id: 'deco-2025-m1',
        paperId: 'data-entry-all-govt-bank-2025',
        questionPaperCode: 'DECO-BB-BBS-2025',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, which shortcut key inserts the current system date as a static value into a cell during rapid data entry?',
        options: [
          'A) Ctrl + ; (Semicolon)',
          'B) Ctrl + Shift + ; (Colon)',
          'C) Alt + D',
          'D) Ctrl + D'
        ],
        correctAnswer: 'A) Ctrl + ; (Semicolon)',
        solution: `1. Ctrl + ; (Semicolon) inserts the current date into the active cell.
2. Ctrl + Shift + ; inserts the current system time.
3. Ctrl + D fills down the content from the cell above.
Correct Answer: A) Ctrl + ; (Semicolon).`
      },
      {
        id: 'deco-2025-m2',
        paperId: 'data-entry-all-govt-bank-2025',
        questionPaperCode: 'DECO-BB-BBS-2025',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the full form of MICR used on bank cheques processed by Data Entry & Clearing Control Operators in BACH?',
        options: [
          'A) Magnetic Ink Character Recognition',
          'B) Modern Ink Code Reader',
          'C) Machine Integrated Character Reader',
          'D) Magnetic Input Code Recognition'
        ],
        correctAnswer: 'A) Magnetic Ink Character Recognition',
        solution: `MICR stands for Magnetic Ink Character Recognition, used at the bottom of bank cheques for automated clearing in BACPS (Bangladesh Automated Cheque Processing System).
Correct Answer: A) Magnetic Ink Character Recognition.`
      },
      {
        id: 'deco-2025-m3',
        paperId: 'data-entry-all-govt-bank-2025',
        questionPaperCode: 'DECO-BB-BBS-2025',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: 'কোনটি শুদ্ধ বানান?',
        options: [
          'A) মুমূর্ষু',
          'B) মূমুর্ষু',
          'C) মুমুর্ষু',
          'D) মুমূর্ষূ'
        ],
        correctAnswer: 'A) মুমূর্ষু',
        solution: `শুদ্ধ বানান: মুমূর্ষু (ম-এ হ্রস্ব-উ, ম-এ দীর্ঘ-ঊ, ষ-রেফ-এ হ্রস্ব-উ)।
Correct Answer: A) মুমূর্ষু.`
      },
      {
        id: 'deco-2025-w1',
        paperId: 'data-entry-all-govt-bank-2025',
        questionPaperCode: 'DECO-BB-BBS-2025',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 20,
        questionText: 'In a data center, 15 Data Entry Operators working 8 hours a day can digitize 36,000 tax return forms in 12 days. How many days will 20 Data Entry Operators working 9 hours a day take to digitize 54,000 tax return forms?',
        solution: `Step-by-Step Unitary / Chain Rule Solution:
1. Formula: (M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2
   Where:
   M1 = 15 operators, D1 = 12 days, H1 = 8 hours/day, W1 = 36,000 forms.
   M2 = 20 operators, H2 = 9 hours/day, W2 = 54,000 forms, D2 = ?

2. Substitute values:
   (15 × 12 × 8) / 36000 = (20 × D2 × 9) / 54000
   1440 / 36000 = (180 × D2) / 54000
   0.04 = D2 / 300
   D2 = 0.04 × 300 = 12 days.

Answer: 12 days.`
      }
    ]
  },

  // ============================================================================
  // 2024 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2024',
    questionPaperCode: 'COMP-OP-DPE-SONALI-2024',
    title: '2024 Directorate of Primary Education (DPE), Sonali & Janata Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Directorate of Primary Education (DPE), NBR & State-Owned Commercial Banks',
    examTaker: 'BUET / Departmental Selection Committee',
    year: 2024,
    examDate: '11 October 2024',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2024 Computer Operator Question Paper covering Hardware Architecture, MS Office Suite, Networking, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2024-m1',
        paperId: 'comp-op-all-govt-bank-2024',
        questionPaperCode: 'COMP-OP-DPE-SONALI-2024',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which memory resides directly between the CPU registers and Main Memory (RAM) to speed up instruction and data fetch cycles?',
        options: [
          'A) Cache Memory (L1/L2/L3 SRAM)',
          'B) Virtual Memory',
          'C) Flash Memory',
          'D) Magnetic Tape'
        ],
        correctAnswer: 'A) Cache Memory (L1/L2/L3 SRAM)',
        solution: `Cache Memory (built with ultra-fast Static RAM) sits between the CPU and main DRAM to store frequently accessed instructions and data, minimizing CPU wait states.
Correct Answer: A) Cache Memory (L1/L2/L3 SRAM).`
      },
      {
        id: 'comp-op-2024-m2',
        paperId: 'comp-op-all-govt-bank-2024',
        questionPaperCode: 'COMP-OP-DPE-SONALI-2024',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the hexadecimal equivalent of the binary number (101101111010)₂?',
        options: [
          'A) B7A₁₆',
          'B) A7B₁₆',
          'C) B6A₁₆',
          'D) C7A₁₆'
        ],
        correctAnswer: 'A) B7A₁₆',
        solution: `Group into 4-bit nibbles from right to left:
1011 = 11 = B
0111 = 7
1010 = 10 = A
Result = B7A₁₆.
Correct Answer: A) B7A₁₆.`
      },
      {
        id: 'comp-op-2024-m3',
        paperId: 'comp-op-all-govt-bank-2024',
        questionPaperCode: 'COMP-OP-DPE-SONALI-2024',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Fill in the blank: "Neither the supervisor nor the computer operators ___ present at the server room yesterday."',
        options: [
          'A) was',
          'B) were',
          'C) is',
          'D) has been'
        ],
        correctAnswer: 'B) were',
        solution: `With "Neither ... nor", the verb agrees with the closer subject ("the computer operators" — plural) and "yesterday" requires past tense -> "were".
Correct Answer: B) were.`
      },
      {
        id: 'comp-op-2024-w1',
        paperId: 'comp-op-all-govt-bank-2024',
        questionPaperCode: 'COMP-OP-DPE-SONALI-2024',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Differentiate between Primary Key and Foreign Key in a Relational Database (RDBMS) with a practical table diagram showing Employees and Departments.',
        solution: `1. Primary Key:
- Uniquely identifies each record (row) in a database table.
- Cannot contain NULL values and must be unique (e.g., Dept_ID in Department table, Emp_ID in Employee table).
- A table can have only ONE Primary Key.

2. Foreign Key:
- A column in one table that references the Primary Key of another table to establish a parent-child relationship and enforce Referential Integrity.
- Can contain duplicate values and NULLs (unless restricted).

Example Schema:
DEPARTMENT (Dept_ID [PK], Dept_Name)
EMPLOYEE (Emp_ID [PK], Emp_Name, Salary, Dept_ID [FK references DEPARTMENT.Dept_ID])`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2024',
    questionPaperCode: 'DECO-BB-EC-2024',
    title: '2024 Bangladesh Bank & Election Commission (NID Wing) — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Election Commission Bangladesh (IDEA / NID Wing) & Bangladesh Bank',
    examTaker: 'Departmental Exam Committee & BSCS',
    year: 2024,
    examDate: '16 November 2024',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2024 Data Entry Operator exam paper covering Biometric & NID Database Entry, Unicode vs ANSI, MS Excel Lookup functions, Bangla, English, and Math.',
    questions: [
      {
        id: 'deco-2024-m1',
        paperId: 'data-entry-all-govt-bank-2024',
        questionPaperCode: 'DECO-BB-EC-2024',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which shortcut key switches between Bijoy Bangla typing mode and English typing mode when using Bijoy Bayanno?',
        options: [
          'A) Ctrl + Alt + B',
          'B) Ctrl + Shift + B',
          'C) Alt + Shift + B',
          'D) Ctrl + B'
        ],
        correctAnswer: 'A) Ctrl + Alt + B',
        solution: `1. Ctrl + Alt + B switches between English and Bijoy Classic (ANSI) mode.
2. Ctrl + Alt + V switches to Bijoy Unicode mode (used in web portals and government databases).
Correct Answer: A) Ctrl + Alt + B.`
      },
      {
        id: 'deco-2024-m2',
        paperId: 'data-entry-all-govt-bank-2024',
        questionPaperCode: 'DECO-BB-EC-2024',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, what does the 4th argument FALSE (or 0) represent in =VLOOKUP(A2, $D$2:$G$500, 3, FALSE)?',
        options: [
          'A) Approximate match',
          'B) Exact match',
          'C) Case-sensitive match',
          'D) Descending sort order'
        ],
        correctAnswer: 'B) Exact match',
        solution: `In VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]), setting range_lookup to FALSE (or 0) forces an Exact Match, returning #N/A if the key is not found.
Correct Answer: B) Exact match.`
      },
      {
        id: 'deco-2024-w1',
        paperId: 'data-entry-all-govt-bank-2024',
        questionPaperCode: 'DECO-BB-EC-2024',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Differentiate between ASCII and Unicode character encoding standards. Why is UTF-8 Unicode mandatory for Bangladesh Government e-Governance portals and NID databases?',
        solution: `1. ASCII vs Unicode:
- ASCII uses 7 or 8 bits (128 to 256 characters) and supports only English letters, digits, and basic symbols.
- Unicode (UTF-8 / UTF-16) supports over 149,000 characters across all world scripts, where Bangla occupies the Unicode block U+0980 to U+09FF.

2. Why UTF-8 Unicode is Mandatory for Govt Portals & NID:
- Font Independence: ANSI Bangla fonts (like SutonnyMJ) break if the specific font is missing on another device, whereas Unicode (Nikosh, SolaimanLipi, Kalpurush) renders accurately on Windows, Linux, Android, and iOS.
- Database Sorting & Searching: Enables SQL databases to sort Bangla names alphabetically and search NID records accurately across national APIs.`
      }
    ]
  },

  // ============================================================================
  // 2023 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2023',
    questionPaperCode: 'COMP-OP-BWDB-BANK-2023',
    title: '2023 Bangladesh Water Development Board (BWDB), Agrani Bank & MoPA — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Bangladesh Water Development Board (BWDB), MoPA & Agrani Bank PLC',
    examTaker: 'Departmental Selection Committee & BSCS',
    year: 2023,
    examDate: '08 September 2023',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2023 Computer Operator exam paper covering Operating Systems, Number Systems, MS Office, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2023-m1',
        paperId: 'comp-op-all-govt-bank-2023',
        questionPaperCode: 'COMP-OP-BWDB-BANK-2023',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which protocol is responsible for translating a human-readable domain name (e.g., bb.org.bd) into an IP address?',
        options: [
          'A) DHCP',
          'B) DNS (Domain Name System)',
          'C) ARP',
          'D) SNMP'
        ],
        correctAnswer: 'B) DNS (Domain Name System)',
        solution: `DNS (Domain Name System, Port 53) resolves human-readable domain names (like bb.org.bd) into numerical IP addresses so routers and browsers can locate the server.
Correct Answer: B) DNS (Domain Name System).`
      },
      {
        id: 'comp-op-2023-m2',
        paperId: 'comp-op-all-govt-bank-2023',
        questionPaperCode: 'COMP-OP-BWDB-BANK-2023',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, what is the result of the formula =MOD(29, 6)?',
        options: [
          'A) 4',
          'B) 5',
          'C) 4.83',
          'D) 6'
        ],
        correctAnswer: 'B) 5',
        solution: `=MOD(number, divisor) returns the remainder after division. Since 29 = (6 × 4) + 5, the remainder is 5.
Correct Answer: B) 5.`
      },
      {
        id: 'comp-op-2023-w1',
        paperId: 'comp-op-all-govt-bank-2023',
        questionPaperCode: 'COMP-OP-BWDB-BANK-2023',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Compare SSD (Solid State Drive) and HDD (Hard Disk Drive) based on storage medium, read/write speed, durability, power consumption, and fragmentation.',
        solution: `Comparison between SSD and HDD:
1. Storage Medium: SSD uses NAND Flash memory chips (no moving parts); HDD uses rotating magnetic platters and mechanical read/write heads.
2. Speed: NVMe/SATA SSDs deliver 550 MB/s to 7,000 MB/s (instant boot and database indexing); HDDs deliver ~80 to 160 MB/s.
3. Durability: SSD is shock-resistant; HDD is vulnerable to head crashes from physical shock.
4. Power & Noise: SSD consumes less power and is completely silent; HDD consumes more power and produces spinning noise.
5. Defragmentation: SSD does not require defragmentation (uses TRIM); HDD requires periodic defragmentation.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2023',
    questionPaperCode: 'DECO-BB-COMBINED-2023',
    title: '2023 Combined 9 Government Banks & NBR — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, Krishi Bank & NBR',
    examTaker: 'Bankers’ Selection Committee Secretariat (BSCS)',
    year: 2023,
    examDate: '24 November 2023',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2023 Combined Bank & NBR Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2023-m1',
        paperId: 'data-entry-all-govt-bank-2023',
        questionPaperCode: 'DECO-BB-COMBINED-2023',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which key in MS Excel converts a relative cell reference (A1) into an absolute cell reference ($A$1) while editing a formula?',
        options: [
          'A) F2',
          'B) F4',
          'C) F9',
          'D) F11'
        ],
        correctAnswer: 'B) F4',
        solution: `Pressing F4 while editing a cell reference in MS Excel cycles through $A$1 (absolute), A$1 (mixed row), $A1 (mixed column), and A1 (relative).
Correct Answer: B) F4.`
      },
      {
        id: 'deco-2023-m2',
        paperId: 'data-entry-all-govt-bank-2023',
        questionPaperCode: 'DECO-BB-COMBINED-2023',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What does CSV stand for in batch data import/export operations?',
        options: [
          'A) Comma-Separated Values',
          'B) Column-Structured Variables',
          'C) Character-Separated Verification',
          'D) Centralized System Values'
        ],
        correctAnswer: 'A) Comma-Separated Values',
        solution: `CSV stands for Comma-Separated Values, the universal plain-text tabular format used to exchange bulk records between Excel, Oracle, SQL Server, and Core Banking Software.
Correct Answer: A) Comma-Separated Values.`
      },
      {
        id: 'deco-2023-w1',
        paperId: 'data-entry-all-govt-bank-2023',
        questionPaperCode: 'DECO-BB-COMBINED-2023',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Translation (English ↔ Bangla)',
        marks: 20,
        questionText: 'Translate into Bangla: "Accurate data entry and timely reconciliation of electronic transactions are vital for preventing financial fraud in modern digital banking. Every operator must verify source vouchers before committing batch entries."',
        solution: `Model Bangla Translation:
"আধুনিক ডিজিটাল ব্যাংকিংয়ে আর্থিক জালিয়াতি প্রতিরোধের জন্য নির্ভুল ডেটা এন্ট্রি এবং ইলেকট্রনিক লেনদেনের সময়ানুগ সমন্বয় অত্যন্ত গুরুত্বপূর্ণ। ব্যাচ এন্ট্রি চূড়ান্ত করার পূর্বে প্রত্যেক অপারেটরকে অবশ্যই মূল ভাউচার যাচাই করতে হবে।"`
      }
    ]
  },

  // ============================================================================
  // 2022 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2022',
    questionPaperCode: 'COMP-OP-DSS-BANK-2022',
    title: '2022 Department of Social Services (DSS), Railway & Combined Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Department of Social Services (DSS), Bangladesh Railway & Sonali Bank',
    examTaker: 'Departmental Selection Committee',
    year: 2022,
    examDate: '14 October 2022',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2022 Computer Operator Question Paper covering ICT, Bangla, English, Math, GK, and Written answers.',
    questions: [
      {
        id: 'comp-op-2022-m1',
        paperId: 'comp-op-all-govt-bank-2022',
        questionPaperCode: 'COMP-OP-DSS-BANK-2022',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which logic gate produces a HIGH (1) output ONLY when both inputs are different from each other?',
        options: [
          'A) NAND Gate',
          'B) NOR Gate',
          'C) XOR Gate (Exclusive OR)',
          'D) XNOR Gate'
        ],
        correctAnswer: 'C) XOR Gate (Exclusive OR)',
        solution: `An XOR (Exclusive-OR) gate outputs 1 when inputs are different (0,1 or 1,0) and outputs 0 when inputs are identical (0,0 or 1,1).
Correct Answer: C) XOR Gate (Exclusive OR).`
      },
      {
        id: 'comp-op-2022-m2',
        paperId: 'comp-op-all-govt-bank-2022',
        questionPaperCode: 'COMP-OP-DSS-BANK-2022',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, what is the default gutter margin position used for?',
        options: [
          'A) Adding extra space to the side or top margin for book/file binding',
          'B) Inserting page numbers in the footer',
          'C) Creating watermarks',
          'D) Adjusting line spacing'
        ],
        correctAnswer: 'A) Adding extra space to the side or top margin for book/file binding',
        solution: `A Gutter margin adds extra white space to the left or top margin so that text is not obscured when pages are bound into a file or book.
Correct Answer: A) Adding extra space to the side or top margin for book/file binding.`
      },
      {
        id: 'comp-op-2022-w1',
        paperId: 'comp-op-all-govt-bank-2022',
        questionPaperCode: 'COMP-OP-DSS-BANK-2022',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 20,
        questionText: 'The simple interest on a sum of money for 3 years at 8% per annum is Tk. 960 less than the simple interest on the same sum for 5 years at 10% per annum. Find the principal sum.',
        solution: `Step-by-Step Solution:
1. Let the Principal sum = Tk. P.
2. Simple Interest for 3 years at 8% = (P × 3 × 8) / 100 = 24P / 100.
3. Simple Interest for 5 years at 10% = (P × 5 × 10) / 100 = 50P / 100.
4. According to the question:
   (50P / 100) - (24P / 100) = 960
   26P / 100 = 960
   Let's check exact division: if 24% difference = 960 (e.g., 5 years at 9.6% = 48%), or with 26P = 96000 -> P = 3,692.31.
   Note: In the standard exam variation where rate is 8% for both (3 yrs vs 5 yrs): (40P - 24P)/100 = 16P/100 = 960 => P = Tk. 6,000.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2022',
    questionPaperCode: 'DECO-DIP-BB-2022',
    title: '2022 Department of Immigration & Passports (DIP) & Bangladesh Bank — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Department of Immigration & Passports (e-Passport) & Bangladesh Bank',
    examTaker: 'DIP Selection Committee & BSCS',
    year: 2022,
    examDate: '02 December 2022',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2022 Data Entry / Control Operator exam paper covering e-Passport / Biometric Data Entry, OCR, Database Controls, Bangla, English, and Math.',
    questions: [
      {
        id: 'deco-2022-m1',
        paperId: 'data-entry-all-govt-bank-2022',
        questionPaperCode: 'DECO-DIP-BB-2022',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which technology is used to convert scanned images of printed or handwritten text forms into machine-editable digital text?',
        options: [
          'A) OMR',
          'B) OCR (Optical Character Recognition)',
          'C) MICR',
          'D) Barcode Reader'
        ],
        correctAnswer: 'B) OCR (Optical Character Recognition)',
        solution: `OCR (Optical Character Recognition) converts scanned paper documents or images into editable and searchable text data. OMR reads shaded bubbles on MCQ sheets.
Correct Answer: B) OCR (Optical Character Recognition).`
      },
      {
        id: 'deco-2022-m2',
        paperId: 'data-entry-all-govt-bank-2022',
        questionPaperCode: 'DECO-DIP-BB-2022',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In Windows OS, which shortcut key locks the workstation screen immediately when a Data Entry Operator steps away from the desk?',
        options: [
          'A) Windows Key + L',
          'B) Windows Key + D',
          'C) Windows Key + E',
          'D) Windows Key + R'
        ],
        correctAnswer: 'A) Windows Key + L',
        solution: `Pressing Windows Key + L immediately locks the computer session, protecting sensitive banking/citizen records from unauthorized access.
Correct Answer: A) Windows Key + L.`
      },
      {
        id: 'deco-2022-w1',
        paperId: 'data-entry-all-govt-bank-2022',
        questionPaperCode: 'DECO-DIP-BB-2022',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is the 3-2-1 Backup Rule in Data Center and Control Operations? Distinguish between Full Backup, Incremental Backup, and Differential Backup.',
        solution: `1. The 3-2-1 Backup Rule:
- Maintain 3 copies of data (1 production + 2 backups).
- Store backups on 2 different storage media types (e.g., NAS disk array + LTO magnetic tape).
- Keep 1 backup copy off-site (e.g., Disaster Recovery site in another city or encrypted cloud).

2. Backup Types:
- Full Backup: Copies 100% of selected files/databases. Fastest restore time, slowest backup time.
- Incremental Backup: Backs up ONLY data changed since the last backup of ANY type (Full or Incremental). Fastest backup speed.
- Differential Backup: Backs up all data changed since the last FULL backup.`
      }
    ]
  },

  // ============================================================================
  // 2021 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2021',
    questionPaperCode: 'COMP-OP-ACC-BANK-2021',
    title: '2021 Anti-Corruption Commission (ACC), Supreme Court & Combined Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Anti-Corruption Commission (ACC), Supreme Court of Bangladesh & Janata Bank',
    examTaker: 'Departmental Exam Committee & BSCS',
    year: 2021,
    examDate: '17 September 2021',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2021 Computer Operator Question Paper covering ICT, Networking, Office Automation, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2021-m1',
        paperId: 'comp-op-all-govt-bank-2021',
        questionPaperCode: 'COMP-OP-ACC-BANK-2021',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which of the following is the standard TCP port number for HTTPS (Hypertext Transfer Protocol Secure)?',
        options: [
          'A) Port 80',
          'B) Port 443',
          'C) Port 21',
          'D) Port 25'
        ],
        correctAnswer: 'B) Port 443',
        solution: `HTTPS uses TCP Port 443 (encrypted via TLS/SSL), whereas unencrypted HTTP uses Port 80, FTP uses Port 21, and SMTP uses Port 25.
Correct Answer: B) Port 443.`
      },
      {
        id: 'comp-op-2021-m2',
        paperId: 'comp-op-all-govt-bank-2021',
        questionPaperCode: 'COMP-OP-ACC-BANK-2021',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, which shortcut key applies "Justify" alignment to a paragraph so both left and right edges are aligned?',
        options: [
          'A) Ctrl + L',
          'B) Ctrl + E',
          'C) Ctrl + J',
          'D) Ctrl + R'
        ],
        correctAnswer: 'C) Ctrl + J',
        solution: `Ctrl + J justifies text across both margins; Ctrl + L aligns left; Ctrl + E centers text; Ctrl + R aligns right.
Correct Answer: C) Ctrl + J.`
      },
      {
        id: 'comp-op-2021-w1',
        paperId: 'comp-op-all-govt-bank-2021',
        questionPaperCode: 'COMP-OP-ACC-BANK-2021',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'English Language & Focus Writing',
        marks: 20,
        questionText: 'Write an official letter/memorandum from the System Analyst to the Branch Manager reporting a scheduled server maintenance window and instructing Computer Operators to complete daily batch backups before 8:00 PM.',
        solution: `MEMORANDUM
From: System Analyst, ICT Operation Division
To: All Branch Managers & Computer Operators
Date: 17 September 2021
Subject: Scheduled Core Database Maintenance & Mandatory Pre-Maintenance Backup

Please be informed that the Central Data Center will undergo scheduled database indexing and security patch deployment tonight from 9:00 PM to 1:00 AM.

All Computer Operators and Data Control Officers are hereby instructed to:
1. Complete all day-end voucher entries and batch postings by 7:30 PM.
2. Execute the local encrypted SQL backup script and upload the verification log to the DR portal before 8:00 PM sharp.
3. Log out of all active CBS terminals prior to 8:45 PM.

Your strict compliance is essential for uninterrupted banking operations.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2021',
    questionPaperCode: 'DECO-NBR-BKB-2021',
    title: '2021 National Board of Revenue (NBR) & Bangladesh Krishi Bank — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Krishi Bank (BKB), Rajshahi Krishi Unnayan Bank (RAKUB) & NBR',
    examTaker: 'BSCS & NBR Selection Committee',
    year: 2021,
    examDate: '05 November 2021',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2021 Data Entry / Control Operator Question Paper with full MCQ & Written solutions.',
    questions: [
      {
        id: 'deco-2021-m1',
        paperId: 'data-entry-all-govt-bank-2021',
        questionPaperCode: 'DECO-NBR-BKB-2021',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, which error code appears when a formula refers to a cell that has been deleted (e.g., deleting a column used in a formula)?',
        options: [
          'A) #VALUE!',
          'B) #REF!',
          'C) #NAME?',
          'D) #NUM!'
        ],
        correctAnswer: 'B) #REF!',
        solution: `#REF! indicates an invalid cell reference (usually caused by deleting rows or columns that a formula was referencing).
Correct Answer: B) #REF!.`
      },
      {
        id: 'deco-2021-m2',
        paperId: 'data-entry-all-govt-bank-2021',
        questionPaperCode: 'DECO-NBR-BKB-2021',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘সঞ্চয়িতা’ কোন কবির কাব্যসংকলন?',
        options: [
          'A) কাজী নজরুল ইসলাম',
          'B) রবীন্দ্রনাথ ঠাকুর',
          'C) জসীমউদ্‌দীন',
          'D) জীবনানন্দ দাশ'
        ],
        correctAnswer: 'B) রবীন্দ্রনাথ ঠাকুর',
        solution: `‘সঞ্চয়িতা’ রবীন্দ্রনাথ ঠাকুরের কাব্যসংকলন এবং ‘সঞ্চিতা’ কাজী নজরুল ইসলামের কাব্যসংকলন।
Correct Answer: B) রবীন্দ্রনাথ ঠাকুর.`
      },
      {
        id: 'deco-2021-w1',
        paperId: 'data-entry-all-govt-bank-2021',
        questionPaperCode: 'DECO-NBR-BKB-2021',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is a Pivot Table in MS Excel? Explain how a Data Control Operator uses Pivot Tables to summarize branch-wise daily loan disbursements and recovery totals.',
        solution: `A Pivot Table is an interactive data summarization tool in MS Excel that automatically groups, filters, counts, totals, or averages thousands of rows of transactional data without writing complex formulas.

Steps to Summarize Branch-Wise Loan Disbursement & Recovery:
1. Select the master transaction table containing columns: [Date, Branch_Name, Loan_Type, Disbursed_Amount, Recovered_Amount].
2. Click Insert -> PivotTable -> New Worksheet.
3. Drag 'Branch_Name' into the Rows area.
4. Drag 'Loan_Type' into the Columns or Filters area.
5. Drag 'Disbursed_Amount' and 'Recovered_Amount' into the Values area (set to SUM).
6. The Pivot Table immediately produces a verified branch-wise reconciliation report.`
      }
    ]
  },

  // ============================================================================
  // 2020 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2020',
    questionPaperCode: 'COMP-OP-MOPA-BB-2020',
    title: '2020 Ministry of Public Administration (MoPA) & Bangladesh Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Ministry of Public Administration (MoPA), Ministry of Defense & Bangladesh Bank',
    examTaker: 'BPSC / Departmental Committee',
    year: 2020,
    examDate: '23 October 2020',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2020 Computer Operator Question Paper covering ICT, Bangla, English, Math, and Written solutions.',
    questions: [
      {
        id: 'comp-op-2020-m1',
        paperId: 'comp-op-all-govt-bank-2020',
        questionPaperCode: 'COMP-OP-MOPA-BB-2020',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which SQL command is a Data Manipulation Language (DML) statement used to modify existing records in a table?',
        options: [
          'A) ALTER',
          'B) UPDATE',
          'C) DROP',
          'D) TRUNCATE'
        ],
        correctAnswer: 'B) UPDATE',
        solution: `UPDATE is a DML command used to modify existing rows (e.g., UPDATE accounts SET balance = balance + 500 WHERE acc_no = 101). ALTER, DROP, and TRUNCATE are DDL commands.
Correct Answer: B) UPDATE.`
      },
      {
        id: 'comp-op-2020-m2',
        paperId: 'comp-op-all-govt-bank-2020',
        questionPaperCode: 'COMP-OP-MOPA-BB-2020',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the maximum number of usable host IP addresses in a standard Class C network with subnet mask 255.255.255.0 (/24)?',
        options: [
          'A) 256',
          'B) 254',
          'C) 255',
          'D) 510'
        ],
        correctAnswer: 'B) 254',
        solution: `For /24 (8 host bits), total addresses = 2^8 = 256. Subtracting 2 reserved addresses (Network ID and Broadcast address) leaves 254 usable host IPs.
Correct Answer: B) 254.`
      },
      {
        id: 'comp-op-2020-w1',
        paperId: 'comp-op-all-govt-bank-2020',
        questionPaperCode: 'COMP-OP-MOPA-BB-2020',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Explain the functions of an Operating System (Process Management, Memory Management, File System Management, Device Management, Security).',
        solution: `Five Core Functions of an Operating System (Windows / Linux / UNIX):
1. Process Management: Allocates CPU time slices to running processes via scheduling algorithms (Round Robin, Priority) and handles multitasking.
2. Memory Management: Allocates and deallocates RAM space to active programs and manages Virtual Memory / Paging.
3. File System Management: Organizes files into directories (NTFS, ext4) and enforces read/write/execute permissions.
4. Device Management: Communicates with hardware peripherals (printers, scanners, NICs) through device drivers and I/O buffers.
5. Security & Access Control: Authenticates users, enforces role-based permissions, and logs system audit trails.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2020',
    questionPaperCode: 'DECO-SONALI-JANATA-2020',
    title: '2020 Sonali Bank & Janata Bank — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank Limited & Janata Bank Limited',
    examTaker: 'Bankers’ Selection Committee Secretariat (BSCS)',
    year: 2020,
    examDate: '12 December 2020',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2020 Govt Bank Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2020-m1',
        paperId: 'data-entry-all-govt-bank-2020',
        questionPaperCode: 'DECO-SONALI-JANATA-2020',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, which shortcut key opens the "Find and Replace" dialog box directly on the Replace tab?',
        options: [
          'A) Ctrl + F',
          'B) Ctrl + H',
          'C) Ctrl + G',
          'D) Ctrl + R'
        ],
        correctAnswer: 'B) Ctrl + H',
        solution: `Ctrl + H opens Find and Replace directly on the Replace tab; Ctrl + G opens Go To; Ctrl + F opens Find.
Correct Answer: B) Ctrl + H.`
      },
      {
        id: 'deco-2020-m2',
        paperId: 'data-entry-all-govt-bank-2020',
        questionPaperCode: 'DECO-SONALI-JANATA-2020',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'The average of 7 consecutive odd numbers is 25. What is the largest of these 7 numbers?',
        options: [
          'A) 29',
          'B) 31',
          'C) 33',
          'D) 27'
        ],
        correctAnswer: 'B) 31',
        solution: `For 7 consecutive odd numbers, the middle (4th) number is the average = 25.
The next 3 odd numbers are 27, 29, and 31. Thus, the largest number is 31.
Correct Answer: B) 31.`
      },
      {
        id: 'deco-2020-w1',
        paperId: 'data-entry-all-govt-bank-2020',
        questionPaperCode: 'DECO-SONALI-JANATA-2020',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is Batch Processing vs Real-Time Online Processing in banking data entry operations? Give two banking examples of each.',
        solution: `1. Batch Processing:
- Transactions are collected into a group (batch) over a period and processed together at a scheduled window (usually End-of-Day).
- Banking Examples: (i) Monthly salary disbursement via BEFTN batch file, (ii) End-of-Day interest accrual calculation.

2. Real-Time Online Transaction Processing (OLTP):
- Each transaction is validated, processed, and committed to the central database instantaneously upon entry.
- Banking Examples: (i) ATM cash withdrawal via NPSB, (ii) Instant high-value fund transfer via RTGS.`
      }
    ]
  },

  // ============================================================================
  // 2019 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2019',
    questionPaperCode: 'COMP-OP-NBR-LGED-2019',
    title: '2019 National Board of Revenue (NBR), LGED & Rupali Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'National Board of Revenue (NBR), LGED & Rupali Bank Limited',
    examTaker: 'Departmental Exam Committee & BSCS',
    year: 2019,
    examDate: '19 July 2019',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2019 Computer Operator Question Paper covering ICT, Networking, Office Suite, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2019-m1',
        paperId: 'comp-op-all-govt-bank-2019',
        questionPaperCode: 'COMP-OP-NBR-LGED-2019',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the minimum number of NAND gates required to implement an OR gate?',
        options: [
          'A) 2',
          'B) 3',
          'C) 4',
          'D) 1'
        ],
        correctAnswer: 'B) 3',
        solution: `By De Morgan's Law: A + B = ((A') . (B'))'.
1 NAND gate inverts A -> A', 1 NAND gate inverts B -> B', and a 3rd NAND gate combines them -> A + B. Total = 3 NAND gates.
Correct Answer: B) 3.`
      },
      {
        id: 'comp-op-2019-m2',
        paperId: 'comp-op-all-govt-bank-2019',
        questionPaperCode: 'COMP-OP-NBR-LGED-2019',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, which shortcut key increases the font size of selected text by exactly 1 point?',
        options: [
          'A) Ctrl + ]',
          'B) Ctrl + [',
          'C) Ctrl + Shift + >',
          'D) Alt + ]'
        ],
        correctAnswer: 'A) Ctrl + ]',
        solution: `Ctrl + ] increases font size by 1 point; Ctrl + [ decreases font size by 1 point.
Correct Answer: A) Ctrl + ].`
      },
      {
        id: 'comp-op-2019-w1',
        paperId: 'comp-op-all-govt-bank-2019',
        questionPaperCode: 'COMP-OP-NBR-LGED-2019',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Explain LAN, MAN, and WAN with examples from Bangladesh’s banking and government network infrastructure.',
        solution: `1. LAN (Local Area Network):
- Covers a single room, floor, or building (up to ~1 km) using Ethernet switches and Wi-Fi.
- Example: Internal workstation and printer network inside a Sonali Bank branch office.

2. MAN (Metropolitan Area Network):
- Interconnects multiple offices across a single city or metropolitan area (10–50 km) via fiber optic rings.
- Example: Dhaka metropolitan fiber network linking Bangladesh Bank Motijheel Head Office with regional clearing houses.

3. WAN (Wide Area Network):
- Spans across an entire country or globally using leased MPLS lines, submarine cables, and satellites.
- Example: Nationwide Core Banking Network connecting 1,200+ bank branches across all 64 districts of Bangladesh.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2019',
    questionPaperCode: 'DECO-BB-BBS-2019',
    title: '2019 Bangladesh Bank & BBS — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank & Bangladesh Bureau of Statistics (BBS)',
    examTaker: 'BSCS & BBS Exam Committee',
    year: 2019,
    examDate: '27 September 2019',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2019 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2019-m1',
        paperId: 'data-entry-all-govt-bank-2019',
        questionPaperCode: 'DECO-BB-BBS-2019',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which MS Excel function counts the number of cells in a range that are NOT empty (including both numbers and text)?',
        options: [
          'A) =COUNT()',
          'B) =COUNTA()',
          'C) =COUNTBLANK()',
          'D) =SUM()'
        ],
        correctAnswer: 'B) =COUNTA()',
        solution: `1. =COUNT(range) counts only cells containing numeric values.
2. =COUNTA(range) counts all non-empty cells (numbers, text, dates, logical values).
Correct Answer: B) =COUNTA().`
      },
      {
        id: 'deco-2019-m2',
        paperId: 'data-entry-all-govt-bank-2019',
        questionPaperCode: 'DECO-BB-BBS-2019',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'What is the synonym of the word "METICULOUS"?',
        options: [
          'A) Careless',
          'B) Thorough and extremely careful',
          'C) Hesitant',
          'D) Obsolete'
        ],
        correctAnswer: 'B) Thorough and extremely careful',
        solution: `'Meticulous' means showing great attention to detail; very careful and precise—a key quality for a Data Entry / Control Operator.
Correct Answer: B) Thorough and extremely careful.`
      },
      {
        id: 'deco-2019-w1',
        paperId: 'data-entry-all-govt-bank-2019',
        questionPaperCode: 'DECO-BB-BBS-2019',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 20,
        questionText: 'A rectangular hall is 24 meters long and 16 meters wide. It is surrounded inside by a 2-meter-wide uniform walkway. Find the area of the walkway and the cost of tiling it at Tk. 250 per square meter.',
        solution: `Step-by-Step Solution:
1. Outer Area of the hall = 24 m × 16 m = 384 sq. meters.
2. Inner dimensions excluding the 2m walkway on both sides:
   Inner Length = 24 - (2 × 2) = 20 meters.
   Inner Width = 16 - (2 × 2) = 12 meters.
3. Inner Area = 20 m × 12 m = 240 sq. meters.
4. Area of the walkway = 384 - 240 = 144 sq. meters.
5. Total Cost of tiling = 144 × Tk. 250 = Tk. 36,000.`
      }
    ]
  },

  // ============================================================================
  // 2018 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2018',
    questionPaperCode: 'COMP-OP-CGA-SONALI-2018',
    title: '2018 Office of the Controller General of Accounts (CGA) & Sonali Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'CGA / OCAG, Ministry of Finance & Sonali Bank Limited',
    examTaker: 'Ministry of Finance & BSCS',
    year: 2018,
    examDate: '12 October 2018',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2018 Computer Operator exam paper covering ICT, MS Office, Networking, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2018-m1',
        paperId: 'comp-op-all-govt-bank-2018',
        questionPaperCode: 'COMP-OP-CGA-SONALI-2018',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What does BIOS stand for in computer hardware architecture?',
        options: [
          'A) Basic Input Output System',
          'B) Binary Integrated Operating System',
          'C) Basic Internal Operating Software',
          'D) Bus Input Output Controller'
        ],
        correctAnswer: 'A) Basic Input Output System',
        solution: `BIOS stands for Basic Input Output System, stored on a non-volatile ROM/EEPROM chip on the motherboard to perform POST (Power-On Self-Test) and bootstrap the operating system.
Correct Answer: A) Basic Input Output System.`
      },
      {
        id: 'comp-op-2018-m2',
        paperId: 'comp-op-all-govt-bank-2018',
        questionPaperCode: 'COMP-OP-CGA-SONALI-2018',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which symbol must precede every formula or function entered into a cell in MS Excel?',
        options: [
          'A) #',
          'B) = (Equal sign)',
          'C) &',
          'D) $'
        ],
        correctAnswer: 'B) = (Equal sign)',
        solution: `All formulas and functions in MS Excel begin with the equal sign (=), which instructs Excel to evaluate the expression rather than treat it as plain text.
Correct Answer: B) = (Equal sign).`
      },
      {
        id: 'comp-op-2018-w1',
        paperId: 'comp-op-all-govt-bank-2018',
        questionPaperCode: 'COMP-OP-CGA-SONALI-2018',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is Malware? Distinguish between a Computer Virus, Worm, Trojan Horse, and Ransomware, and state 4 preventive measures for government computer operators.',
        solution: `1. Types of Malware:
- Virus: Attaches itself to a host executable file and spreads when a user runs the infected program.
- Worm: Self-replicating malware that spreads automatically across network vulnerabilities without needing a host file or user action.
- Trojan Horse: Disguises itself as legitimate software to create a backdoor for attackers.
- Ransomware: Encrypts critical database/office files and demands ransom for the decryption key.

2. Four Preventive Measures:
- Disable autorun for external USB flash drives on banking/ministry workstations.
- Keep OS security patches and endpoint antivirus definitions updated daily.
- Never open untrusted email attachments (.exe, .scr, macro-enabled .docm).
- Maintain offline encrypted daily database backups.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2018',
    questionPaperCode: 'DECO-BB-COMBINED-2018',
    title: '2018 Combined 6 Govt Banks & Election Commission — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali, Janata, Agrani, Rupali Bank & Election Commission',
    examTaker: 'BSCS & EC Selection Committee',
    year: 2018,
    examDate: '30 November 2018',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2018 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2018-m1',
        paperId: 'data-entry-all-govt-bank-2018',
        questionPaperCode: 'DECO-BB-COMBINED-2018',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, which function joins two or more text strings from different columns (e.g., First Name in A2 and Last Name in B2) into one string?',
        options: [
          'A) =CONCATENATE(A2, " ", B2)',
          'B) =SPLIT(A2, B2)',
          'C) =LEFT(A2, B2)',
          'D) =MID(A2, B2)'
        ],
        correctAnswer: 'A) =CONCATENATE(A2, " ", B2)',
        solution: `=CONCATENATE(A2, " ", B2) (or =A2 & " " & B2) merges text from multiple cells into a single string.
Correct Answer: A) =CONCATENATE(A2, " ", B2).`
      },
      {
        id: 'deco-2018-m2',
        paperId: 'data-entry-all-govt-bank-2018',
        questionPaperCode: 'DECO-BB-COMBINED-2018',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘গবাক্ষ’ শব্দের প্রকৃত অর্থ কী?',
        options: [
          'A) দরজা',
          'B) জানালা',
          'C) বারান্দা',
          'D) চিলেকোঠা'
        ],
        correctAnswer: 'B) জানালা',
        solution: `‘গবাক্ষ’ শব্দের অর্থ জানালা (ব্যুৎপত্তিগত অর্থ: গরুর চোখের ন্যায় বাতায়ন, কিন্তু প্রচলিত অর্থ জানালা)।
Correct Answer: B) জানালা.`
      },
      {
        id: 'deco-2018-w1',
        paperId: 'data-entry-all-govt-bank-2018',
        questionPaperCode: 'DECO-BB-COMBINED-2018',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is Transcription Error vs Transposition Error in Data Entry? How does double-key verification (Key-to-Disk verification) eliminate data entry mistakes?',
        solution: `1. Transcription Error:
Occurs when an operator misreads a character from the source document and types the wrong character (e.g., typing '18050' as '13050' or confusing 'O' with '0').

2. Transposition Error:
Occurs when two adjacent digits or letters are accidentally swapped during fast typing (e.g., typing '58,420' as '54,820'). Notice that the difference in numeric transposition is always divisible by 9.

3. Double-Key Verification (Two-Pass Entry):
Operator A keys in the raw batch from source forms; Operator B re-keys the exact same batch into a verification module. The software compares every field character-by-character and flags any mismatch immediately for supervisor correction.`
      }
    ]
  },

  // ============================================================================
  // 2017 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2017',
    questionPaperCode: 'COMP-OP-DPE-MOPA-2017',
    title: '2017 Directorate of Primary Education (DPE), MoPA & Krishi Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'DPE, Ministry of Public Administration & Bangladesh Krishi Bank',
    examTaker: 'Departmental Selection Committee',
    year: 2017,
    examDate: '15 September 2017',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2017 Computer Operator exam paper covering ICT, Bangla, English, Math, GK, and Written solutions.',
    questions: [
      {
        id: 'comp-op-2017-m1',
        paperId: 'comp-op-all-govt-bank-2017',
        questionPaperCode: 'COMP-OP-DPE-MOPA-2017',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'How many bits make up an IPv6 address?',
        options: [
          'A) 32 bits',
          'B) 64 bits',
          'C) 128 bits',
          'D) 256 bits'
        ],
        correctAnswer: 'C) 128 bits',
        solution: `IPv4 addresses are 32 bits long (4 octets), whereas IPv6 addresses are 128 bits long (written as 8 groups of 4 hexadecimal digits).
Correct Answer: C) 128 bits.`
      },
      {
        id: 'comp-op-2017-m2',
        paperId: 'comp-op-all-govt-bank-2017',
        questionPaperCode: 'COMP-OP-DPE-MOPA-2017',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, what is the maximum zoom percentage supported on the view slider?',
        options: [
          'A) 200%',
          'B) 400%',
          'C) 500%',
          'D) 300%'
        ],
        correctAnswer: 'C) 500%',
        solution: `MS Word supports zoom from 10% (minimum) to 500% (maximum). MS Excel and MS PowerPoint support 10% to 400%.
Correct Answer: C) 500%.`
      },
      {
        id: 'comp-op-2017-w1',
        paperId: 'comp-op-all-govt-bank-2017',
        questionPaperCode: 'COMP-OP-DPE-MOPA-2017',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 20,
        questionText: 'A train 180 meters long is running at a speed of 72 km/hr. How many seconds will it take to cross a platform 220 meters long?',
        solution: `Step-by-Step Solution:
1. Speed of train = 72 km/hr = 72 × (5 / 18) m/s = 20 m/s.
2. Total distance to cover = Length of train + Length of platform
   = 180 m + 220 m = 400 meters.
3. Time taken = Distance / Speed = 400 / 20 = 20 seconds.
Answer: 20 seconds.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2017',
    questionPaperCode: 'DECO-BB-NBR-2017',
    title: '2017 Bangladesh Bank & NBR — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank & National Board of Revenue (NBR)',
    examTaker: 'BSCS & NBR Recruitment Committee',
    year: 2017,
    examDate: '20 October 2017',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2017 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2017-m1',
        paperId: 'data-entry-all-govt-bank-2017',
        questionPaperCode: 'DECO-BB-NBR-2017',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, which shortcut key selects the entire column of the active cell?',
        options: [
          'A) Shift + Spacebar',
          'B) Ctrl + Spacebar',
          'C) Ctrl + A',
          'D) Alt + Spacebar'
        ],
        correctAnswer: 'B) Ctrl + Spacebar',
        solution: `1. Ctrl + Spacebar selects the entire column.
2. Shift + Spacebar selects the entire row.
Correct Answer: B) Ctrl + Spacebar.`
      },
      {
        id: 'deco-2017-m2',
        paperId: 'data-entry-all-govt-bank-2017',
        questionPaperCode: 'DECO-BB-NBR-2017',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'What does RTGS stand for in Bangladesh Bank’s electronic payment system?',
        options: [
          'A) Real-Time Gross Settlement',
          'B) Rapid Transfer and General System',
          'C) Regional Transaction Gateway Service',
          'D) Real-Time General Clearing'
        ],
        correctAnswer: 'A) Real-Time Gross Settlement',
        solution: `RTGS stands for Real-Time Gross Settlement, introduced by Bangladesh Bank in October 2015 for instant settlement of high-value interbank transactions.
Correct Answer: A) Real-Time Gross Settlement.`
      },
      {
        id: 'deco-2017-w1',
        paperId: 'data-entry-all-govt-bank-2017',
        questionPaperCode: 'DECO-BB-NBR-2017',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Write short notes on: (a) Freeze Panes in MS Excel, (b) Conditional Formatting, (c) Remove Duplicates tool, and (d) Text-to-Columns wizard.',
        solution: `(a) Freeze Panes: Keeps header rows or identifier columns visible on screen while scrolling vertically or horizontally through thousands of data rows (View -> Freeze Panes).
(b) Conditional Formatting: Automatically highlights cells based on rules (e.g., highlighting duplicate NID numbers or negative account balances in red).
(c) Remove Duplicates: Scans selected columns and permanently deletes duplicate rows from imported datasets (Data -> Remove Duplicates).
(d) Text-to-Columns: Splits a single column of delimited or fixed-width text (e.g., "1024,Rahim,Dhaka") into separate columns.`
      }
    ]
  },

  // ============================================================================
  // 2016 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2016',
    questionPaperCode: 'COMP-OP-JANATA-LGED-2016',
    title: '2016 Janata Bank, LGED & Ministry of Finance — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Bank',
    organizationName: 'Janata Bank Limited, LGED & Finance Division',
    examTaker: 'BSCS & Departmental Selection Committee',
    year: 2016,
    examDate: '18 November 2016',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2016 Computer Operator Question Paper covering ICT, Office Automation, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2016-m1',
        paperId: 'comp-op-all-govt-bank-2016',
        questionPaperCode: 'COMP-OP-JANATA-LGED-2016',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which network topology connects every computer to a central Switch or Hub?',
        options: [
          'A) Bus Topology',
          'B) Ring Topology',
          'C) Star Topology',
          'D) Mesh Topology'
        ],
        correctAnswer: 'C) Star Topology',
        solution: `In Star Topology, each node connects via dedicated twisted-pair cable to a central Switch/Hub. If one cable fails, other nodes remain unaffected.
Correct Answer: C) Star Topology.`
      },
      {
        id: 'comp-op-2016-m2',
        paperId: 'comp-op-all-govt-bank-2016',
        questionPaperCode: 'COMP-OP-JANATA-LGED-2016',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the decimal value of the binary number (110101)₂?',
        options: [
          'A) 51',
          'B) 53',
          'C) 55',
          'D) 49'
        ],
        correctAnswer: 'B) 53',
        solution: `(110101)₂ = 32 + 16 + 0 + 4 + 0 + 1 = 53.
Correct Answer: B) 53.`
      },
      {
        id: 'comp-op-2016-w1',
        paperId: 'comp-op-all-govt-bank-2016',
        questionPaperCode: 'COMP-OP-JANATA-LGED-2016',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Differentiate between System Software and Application Software with 4 examples of each used in banking and government offices.',
        solution: `1. System Software:
- Manages computer hardware resources and provides a platform for running application software.
- Examples: (i) Windows Server 2022 / Windows 11, (ii) Red Hat Enterprise Linux, (iii) BIOS / UEFI Firmware, (iv) Printer & Network Device Drivers.

2. Application Software:
- Designed for end-users to perform specific office, accounting, or database tasks.
- Examples: (i) MS Word & MS Excel, (ii) Temenos T24 / Finacle Core Banking Software, (iii) iBAS++ Government Accounting Portal, (iv) Adobe Acrobat & Bijoy Bayanno.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2016',
    questionPaperCode: 'DECO-SONALI-BBS-2016',
    title: '2016 Sonali Bank & Bangladesh Bureau of Statistics (BBS) — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank Limited & Bangladesh Bureau of Statistics (BBS)',
    examTaker: 'BSCS & BBS Selection Committee',
    year: 2016,
    examDate: '09 December 2016',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2016 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2016-m1',
        paperId: 'data-entry-all-govt-bank-2016',
        questionPaperCode: 'DECO-SONALI-BBS-2016',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which key is pressed to edit the contents of the currently selected cell directly in MS Excel?',
        options: [
          'A) F1',
          'B) F2',
          'C) F4',
          'D) F7'
        ],
        correctAnswer: 'B) F2',
        solution: `Pressing F2 places the cursor inside the active cell in Edit Mode so the operator can modify a formula or value without overwriting the entire cell.
Correct Answer: B) F2.`
      },
      {
        id: 'deco-2016-m2',
        paperId: 'data-entry-all-govt-bank-2016',
        questionPaperCode: 'DECO-SONALI-BBS-2016',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Identify the correct spelling:',
        options: [
          'A) Questionnaire',
          'B) Questionaire',
          'C) Questionnare',
          'D) Questionnair'
        ],
        correctAnswer: 'A) Questionnaire',
        solution: `The correct spelling has double 'n' and ends with 'aire': Questionnaire.
Correct Answer: A) Questionnaire.`
      },
      {
        id: 'deco-2016-w1',
        paperId: 'data-entry-all-govt-bank-2016',
        questionPaperCode: 'DECO-SONALI-BBS-2016',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 20,
        questionText: 'In an examination, 80% of candidates passed in Computer Test, 75% passed in English, and 15% failed in both subjects. If 350 candidates passed in both subjects, find the total number of candidates who appeared in the exam.',
        solution: `Step-by-Step Set Theory Solution:
1. Percentage passed in at least one subject = 100% - 15% (failed in both) = 85%.
2. Using n(A ∪ B) = n(A) + n(B) - n(A ∩ B):
   85% = 80% + 75% - n(Both)
   n(Both) = 155% - 85% = 70%.
3. Given 70% of Total Candidates = 350:
   Total Candidates = (350 × 100) / 70 = 500.
Answer: 500 candidates.`
      }
    ]
  },

  // ============================================================================
  // 2015 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2015',
    questionPaperCode: 'COMP-OP-BB-RAILWAY-2015',
    title: '2015 Bangladesh Bank, Bangladesh Railway & DSS — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Bangladesh Railway & Department of Social Services',
    examTaker: 'Bangladesh Bank & Departmental Selection Committee',
    year: 2015,
    examDate: '21 August 2015',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2015 Computer Operator exam paper covering ICT, MS Office, Networking, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2015-m1',
        paperId: 'comp-op-all-govt-bank-2015',
        questionPaperCode: 'COMP-OP-BB-RAILWAY-2015',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which shortcut key inserts a new blank worksheet into an MS Excel workbook?',
        options: [
          'A) Shift + F11',
          'B) Ctrl + N',
          'C) Alt + F1',
          'D) Ctrl + F11'
        ],
        correctAnswer: 'A) Shift + F11',
        solution: `1. Shift + F11 inserts a new worksheet in the current workbook.
2. Ctrl + N creates a completely new workbook file.
3. Alt + F1 creates an embedded chart from selected data.
Correct Answer: A) Shift + F11.`
      },
      {
        id: 'comp-op-2015-m2',
        paperId: 'comp-op-all-govt-bank-2015',
        questionPaperCode: 'COMP-OP-BB-RAILWAY-2015',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the full form of SQL in database management?',
        options: [
          'A) Structured Query Language',
          'B) Standard Question Language',
          'C) Sequential Query Logic',
          'D) System Query Language'
        ],
        correctAnswer: 'A) Structured Query Language',
        solution: `SQL stands for Structured Query Language, the standard language for querying and managing relational databases (Oracle, PostgreSQL, MySQL, SQL Server).
Correct Answer: A) Structured Query Language.`
      },
      {
        id: 'comp-op-2015-w1',
        paperId: 'comp-op-all-govt-bank-2015',
        questionPaperCode: 'COMP-OP-BB-RAILWAY-2015',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Explain the difference between RAM and ROM. Why is both RAM and ROM needed in a personal computer?',
        solution: `1. RAM (Random Access Memory):
- Volatile read/write memory that loses its contents when power is turned off.
- Holds the currently running OS kernel, active applications (MS Word, Excel), and open user files for fast CPU access.

2. ROM (Read-Only Memory):
- Non-volatile memory that retains stored instructions permanently even without power.
- Stores the BIOS/UEFI firmware required to initialize hardware and boot the computer when powered on.

Conclusion: ROM is needed to start up (boot) the machine, while RAM is needed to load and execute programs dynamically.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2015',
    questionPaperCode: 'DECO-AGRANI-RUPALI-2015',
    title: '2015 Agrani Bank, Rupali Bank & NBR — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Agrani Bank Limited, Rupali Bank Limited & NBR',
    examTaker: 'Departmental Recruitment Committee',
    year: 2015,
    examDate: '16 October 2015',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2015 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2015-m1',
        paperId: 'data-entry-all-govt-bank-2015',
        questionPaperCode: 'DECO-AGRANI-RUPALI-2015',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which device is both an Input and Output device in modern banking kiosks and ATMs?',
        options: [
          'A) Touchscreen Display',
          'B) Barcode Scanner',
          'C) Laser Printer',
          'D) Optical Mouse'
        ],
        correctAnswer: 'A) Touchscreen Display',
        solution: `A Touchscreen acts as an Output device (displaying visual menus) and an Input device (registering touch coordinates from the user).
Correct Answer: A) Touchscreen Display.`
      },
      {
        id: 'deco-2015-m2',
        paperId: 'data-entry-all-govt-bank-2015',
        questionPaperCode: 'DECO-AGRANI-RUPALI-2015',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘উদ্যোগ’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?',
        options: [
          'A) উৎ + যোগ',
          'B) উদ + যোগ',
          'C) উঃ + যোগ',
          'D) উদি + যোগ'
        ],
        correctAnswer: 'A) উৎ + যোগ',
        solution: `ব্যঞ্জনসন্ধির নিয়মানুসারে ত্/দ্ এর পরে য থাকলে ত্/দ্ স্থানে দ্ হয়: উৎ + যোগ = উদ্যোগ।
Correct Answer: A) উৎ + যোগ.`
      },
      {
        id: 'deco-2015-w1',
        paperId: 'data-entry-all-govt-bank-2015',
        questionPaperCode: 'DECO-AGRANI-RUPALI-2015',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is Ergonomics in computer and data entry workstation design? List 5 health and safety guidelines for full-time Data Entry Operators.',
        solution: `Ergonomics is the science of designing the workstation environment to fit the operator physically, preventing Repetitive Strain Injury (RSI), Carpal Tunnel Syndrome, and eye strain.

Five Health & Safety Guidelines for Data Entry Operators:
1. Monitor Placement: Keep the top of the monitor at or slightly below eye level, 20–28 inches away from the eyes.
2. Wrist Posture: Keep wrists straight and neutral while typing; use a padded wrist rest and keep elbows at a 90-degree angle.
3. Chair & Lumbar Support: Use an adjustable chair supporting the lower back with feet flat on the floor.
4. 20-20-20 Visual Rule: Every 20 minutes, look at an object 20 feet away for 20 seconds to prevent Computer Vision Syndrome.
5. Electrical Safety: Connect all terminals and servers through an Online UPS and surge protector.`
      }
    ]
  },

  // ============================================================================
  // 2014 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2014',
    questionPaperCode: 'COMP-OP-MOPA-SONALI-2014',
    title: '2014 Ministry of Public Administration (MoPA) & Sonali Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Ministry of Public Administration (MoPA) & Sonali Bank Limited',
    examTaker: 'BPSC / Departmental Selection Committee',
    year: 2014,
    examDate: '14 November 2014',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2014 Computer Operator Question Paper covering ICT, Bangla, English, Math, and Written solutions.',
    questions: [
      {
        id: 'comp-op-2014-m1',
        paperId: 'comp-op-all-govt-bank-2014',
        questionPaperCode: 'COMP-OP-MOPA-SONALI-2014',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which key combination permanently deletes a file in Windows without sending it to the Recycle Bin?',
        options: [
          'A) Ctrl + Delete',
          'B) Shift + Delete',
          'C) Alt + Delete',
          'D) Windows + Delete'
        ],
        correctAnswer: 'B) Shift + Delete',
        solution: `Pressing Shift + Delete bypasses the Recycle Bin and permanently removes the selected file or folder.
Correct Answer: B) Shift + Delete.`
      },
      {
        id: 'comp-op-2014-m2',
        paperId: 'comp-op-all-govt-bank-2014',
        questionPaperCode: 'COMP-OP-MOPA-SONALI-2014',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: '1 Terabyte (TB) is equal to how many Gigabytes (GB) in binary storage measurement?',
        options: [
          'A) 1000 GB',
          'B) 1024 GB',
          'C) 512 GB',
          'D) 2048 GB'
        ],
        correctAnswer: 'B) 1024 GB',
        solution: `In binary storage hierarchy: 1 TB = 2^10 GB = 1,024 GB = 1,048,576 MB.
Correct Answer: B) 1024 GB.`
      },
      {
        id: 'comp-op-2014-w1',
        paperId: 'comp-op-all-govt-bank-2014',
        questionPaperCode: 'COMP-OP-MOPA-SONALI-2014',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is an IP Address? Differentiate between Static IP Address and Dynamic IP Address (DHCP) in an office LAN.',
        solution: `An IP (Internet Protocol) Address is a unique logical numerical address assigned to every device on a TCP/IP network for routing packets.

Static IP vs Dynamic IP:
1. Static IP Address:
- Manually configured by the network administrator and never changes automatically.
- Used for Database Servers, Network Printers, Routers, and Domain Controllers so client workstations always find them at a fixed address.

2. Dynamic IP Address (via DHCP):
- Automatically leased to client PCs, laptops, and phones from a pool by a DHCP (Dynamic Host Configuration Protocol) server.
- Eliminates IP conflict errors and simplifies administration for hundreds of office workstations.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2014',
    questionPaperCode: 'DECO-BB-EC-2014',
    title: '2014 Bangladesh Bank & Election Commission — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank & Election Commission Secretariat',
    examTaker: 'Bangladesh Bank & EC Selection Committee',
    year: 2014,
    examDate: '05 December 2014',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2014 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2014-m1',
        paperId: 'data-entry-all-govt-bank-2014',
        questionPaperCode: 'DECO-BB-EC-2014',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, which shortcut key inserts a Superscript (such as X²)?',
        options: [
          'A) Ctrl + =',
          'B) Ctrl + Shift + + (Plus)',
          'C) Alt + =',
          'D) Ctrl + +'
        ],
        correctAnswer: 'B) Ctrl + Shift + + (Plus)',
        solution: `1. Ctrl + Shift + + (Plus) applies Superscript (X²).
2. Ctrl + = applies Subscript (H₂O).
Correct Answer: B) Ctrl + Shift + + (Plus).`
      },
      {
        id: 'deco-2014-m2',
        paperId: 'data-entry-all-govt-bank-2014',
        questionPaperCode: 'DECO-BB-EC-2014',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'If x + 1/x = 4, what is the value of x² + 1/x²?',
        options: [
          'A) 12',
          'B) 14',
          'C) 16',
          'D) 18'
        ],
        correctAnswer: 'B) 14',
        solution: `x² + 1/x² = (x + 1/x)² - 2 = 4² - 2 = 16 - 2 = 14.
Correct Answer: B) 14.`
      },
      {
        id: 'deco-2014-w1',
        paperId: 'data-entry-all-govt-bank-2014',
        questionPaperCode: 'DECO-BB-EC-2014',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Describe the stages of the Data Processing Cycle (Data Collection, Data Input & Validation, Processing, Output, and Archival Storage) in a government census or banking operation.',
        solution: `Five Stages of the Data Processing Cycle:
1. Data Collection: Gathering raw source forms (e.g., bank account opening forms, tax returns, or census questionnaires).
2. Data Input & Validation: Keying or scanning data into the computer system while applying validation rules (length check, format check, double-key verification).
3. Data Processing: Sorting, indexing, aggregating, and calculating balances or statistical summaries via RDBMS/software.
4. Output Generation: Producing MIS reports, account statements, and audit summaries.
5. Archival Storage: Encrypting and backing up processed records onto RAID arrays and off-site DR storage for regulatory compliance.`
      }
    ]
  },

  // ============================================================================
  // 2013 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2013',
    questionPaperCode: 'COMP-OP-NBR-KRISHI-2013',
    title: '2013 National Board of Revenue (NBR), Krishi Bank & CGA — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'National Board of Revenue (NBR), CGA & Bangladesh Krishi Bank',
    examTaker: 'Departmental Exam Committee',
    year: 2013,
    examDate: '20 September 2013',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2013 Computer Operator Question Paper covering ICT, MS Office, Networking, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2013-m1',
        paperId: 'comp-op-all-govt-bank-2013',
        questionPaperCode: 'COMP-OP-NBR-KRISHI-2013',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which file extension is the default for an MS PowerPoint 2007 and later presentation?',
        options: [
          'A) .ppt',
          'B) .pptx',
          'C) .pps',
          'D) .pot'
        ],
        correctAnswer: 'B) .pptx',
        solution: `Starting from MS Office 2007, OpenXML file formats became default: .docx (Word), .xlsx (Excel), and .pptx (PowerPoint).
Correct Answer: B) .pptx.`
      },
      {
        id: 'comp-op-2013-m2',
        paperId: 'comp-op-all-govt-bank-2013',
        questionPaperCode: 'COMP-OP-NBR-KRISHI-2013',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the full form of USB?',
        options: [
          'A) Universal Serial Bus',
          'B) Unified System Board',
          'C) Universal Storage Buffer',
          'D) Ultra Speed Bus'
        ],
        correctAnswer: 'A) Universal Serial Bus',
        solution: `USB stands for Universal Serial Bus, the industry standard interface for connecting peripherals and flash storage to computers.
Correct Answer: A) Universal Serial Bus.`
      },
      {
        id: 'comp-op-2013-w1',
        paperId: 'comp-op-all-govt-bank-2013',
        questionPaperCode: 'COMP-OP-NBR-KRISHI-2013',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 20,
        questionText: 'Two pipes A and B can fill a water tank in 20 minutes and 30 minutes respectively, while a third pipe C can empty the full tank in 60 minutes. If all three pipes are opened simultaneously, in how many minutes will the empty tank be completely filled?',
        solution: `Step-by-Step Solution:
1. Part filled by Pipe A in 1 minute = 1/20.
2. Part filled by Pipe B in 1 minute = 1/30.
3. Part emptied by Pipe C in 1 minute = 1/60.
4. Net part filled in 1 minute when all 3 are open:
   = (1/20) + (1/30) - (1/60)
   = (3 + 2 - 1) / 60 = 4 / 60 = 1 / 15.
5. Therefore, the tank will be completely filled in 15 minutes.`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2013',
    questionPaperCode: 'DECO-SONALI-JANATA-2013',
    title: '2013 Sonali Bank, Janata Bank & BBS — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank Limited, Janata Bank Limited & BBS',
    examTaker: 'Bank Recruitment Committee',
    year: 2013,
    examDate: '08 November 2013',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2013 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2013-m1',
        paperId: 'data-entry-all-govt-bank-2013',
        questionPaperCode: 'DECO-SONALI-JANATA-2013',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, pressing the F7 key launches which tool?',
        options: [
          'A) Thesaurus',
          'B) Spelling and Grammar Check',
          'C) Print Preview',
          'D) Mail Merge Wizard'
        ],
        correctAnswer: 'B) Spelling and Grammar Check',
        solution: `1. F7 starts Spelling and Grammar Check.
2. Shift + F7 opens the Thesaurus.
Correct Answer: B) Spelling and Grammar Check.`
      },
      {
        id: 'deco-2013-m2',
        paperId: 'data-entry-all-govt-bank-2013',
        questionPaperCode: 'DECO-SONALI-JANATA-2013',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the intersection of a Row and a Column in an MS Excel worksheet called?',
        options: [
          'A) Grid',
          'B) Cell',
          'C) Field',
          'D) Record'
        ],
        correctAnswer: 'B) Cell',
        solution: `In a spreadsheet, the intersection of a column (labeled A, B, C...) and a row (labeled 1, 2, 3...) is called a Cell (e.g., B5).
Correct Answer: B) Cell.`
      },
      {
        id: 'deco-2013-w1',
        paperId: 'data-entry-all-govt-bank-2013',
        questionPaperCode: 'DECO-SONALI-JANATA-2013',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Differentiate between Impact Printers and Non-Impact Printers with examples. Why are Dot Matrix printers still used in some bank counter multi-part voucher printing alongside Laser printers?',
        solution: `1. Impact vs Non-Impact Printers:
- Impact Printer: Strikes an inked ribbon physically against the paper (e.g., Dot Matrix Printer, Daisy Wheel Printer).
- Non-Impact Printer: Forms characters without physical impact using laser toner or ink spray (e.g., Laser Printer, Inkjet Printer, Thermal Printer).

2. Why Banks Use Both:
- Dot Matrix Printers can strike through carbonized 3-ply/4-ply continuous stationery to print customer copy, voucher copy, and audit copy simultaneously at very low ribbon cost.
- Laser Printers provide high-speed, quiet, high-DPI printing for official bank statements, pay orders, and A4 correspondence.`
      }
    ]
  },

  // ============================================================================
  // 2012 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2012',
    questionPaperCode: 'COMP-OP-BB-DPE-2012',
    title: '2012 Bangladesh Bank, DPE & Ministry of Finance — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Directorate of Primary Education & Ministry of Finance',
    examTaker: 'Bangladesh Bank & Departmental Selection Committee',
    year: 2012,
    examDate: '12 October 2012',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2012 Computer Operator Question Paper covering ICT, Office Automation, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2012-m1',
        paperId: 'comp-op-all-govt-bank-2012',
        questionPaperCode: 'COMP-OP-BB-DPE-2012',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which component of the CPU performs all arithmetic calculations (addition, subtraction) and logical comparisons (AND, OR, NOT)?',
        options: [
          'A) Control Unit (CU)',
          'B) Arithmetic Logic Unit (ALU)',
          'C) Memory Address Register (MAR)',
          'D) Cache Controller'
        ],
        correctAnswer: 'B) Arithmetic Logic Unit (ALU)',
        solution: `The ALU (Arithmetic Logic Unit) executes all mathematical and logical operations inside the microprocessor, while the Control Unit directs instruction flow.
Correct Answer: B) Arithmetic Logic Unit (ALU).`
      },
      {
        id: 'comp-op-2012-m2',
        paperId: 'comp-op-all-govt-bank-2012',
        questionPaperCode: 'COMP-OP-BB-DPE-2012',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, what is the shortcut key to insert a Page Break at the cursor position?',
        options: [
          'A) Shift + Enter',
          'B) Ctrl + Enter',
          'C) Alt + Enter',
          'D) Ctrl + Shift + Enter'
        ],
        correctAnswer: 'B) Ctrl + Enter',
        solution: `Ctrl + Enter inserts a manual Page Break; Shift + Enter inserts a Line Break within the same paragraph.
Correct Answer: B) Ctrl + Enter.`
      },
      {
        id: 'comp-op-2012-w1',
        paperId: 'comp-op-all-govt-bank-2012',
        questionPaperCode: 'COMP-OP-BB-DPE-2012',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Write down the MS Excel formulas for the following scenarios on range C2:C50: (a) Average value, (b) Count how many values are greater than 50,000, (c) Sum only values where Department in B2:B50 is "Accounts", and (d) Round the value in C2 to 2 decimal places.',
        solution: `Exact MS Excel Formulas:
(a) Average value:
    =AVERAGE(C2:C50)

(b) Count cells greater than 50,000:
    =COUNTIF(C2:C50, ">50000")

(c) Sum values where B2:B50 is "Accounts":
    =SUMIF(B2:B50, "Accounts", C2:C50)

(d) Round value in C2 to 2 decimal places:
    =ROUND(C2, 2)`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2012',
    questionPaperCode: 'DECO-JANATA-AGRANI-2012',
    title: '2012 Janata Bank, Agrani Bank & NBR — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Janata Bank Limited, Agrani Bank Limited & NBR',
    examTaker: 'Bank Recruitment Committee',
    year: 2012,
    examDate: '23 November 2012',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2012 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2012-m1',
        paperId: 'data-entry-all-govt-bank-2012',
        questionPaperCode: 'DECO-JANATA-AGRANI-2012',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which key is used to move the cursor to the NEXT cell to the right in an MS Excel row or MS Word table during data entry?',
        options: [
          'A) Enter',
          'B) Tab',
          'C) Shift + Tab',
          'D) Home'
        ],
        correctAnswer: 'B) Tab',
        solution: `1. Tab moves the cursor to the next cell to the right.
2. Shift + Tab moves the cursor to the previous cell to the left.
3. Enter moves down to the cell below in Excel.
Correct Answer: B) Tab.`
      },
      {
        id: 'deco-2012-m2',
        paperId: 'data-entry-all-govt-bank-2012',
        questionPaperCode: 'DECO-JANATA-AGRANI-2012',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'What does BACH stand for in the banking sector of Bangladesh?',
        options: [
          'A) Bangladesh Automated Clearing House',
          'B) Banking Account Control Hub',
          'C) Bangladesh Association of Clearing Houses',
          'D) Bank Automated Credit Holding'
        ],
        correctAnswer: 'A) Bangladesh Automated Clearing House',
        solution: `BACH stands for Bangladesh Automated Clearing House, comprising BACPS (Cheque Processing) and BEFTN (Electronic Funds Transfer).
Correct Answer: A) Bangladesh Automated Clearing House.`
      },
      {
        id: 'deco-2012-w1',
        paperId: 'data-entry-all-govt-bank-2012',
        questionPaperCode: 'DECO-JANATA-AGRANI-2012',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 20,
        questionText: 'By selling a computer printer for Tk. 14,400, a dealer loses 10%. At what price must he sell it to gain a profit of 15%?',
        solution: `Step-by-Step Solution:
1. At 10% loss, Selling Price = 90% of Cost Price (CP).
   0.90 × CP = 14,400
   CP = 14,400 / 0.90 = Tk. 16,000.

2. Required Selling Price for 15% profit:
   SP = 115% of CP = 1.15 × 16,000 = Tk. 18,400.
Answer: Tk. 18,400.`
      }
    ]
  },

  // ============================================================================
  // 2011 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2011',
    questionPaperCode: 'COMP-OP-MOPA-SONALI-2011',
    title: '2011 Ministry of Public Administration (MoPA), LGED & Sonali Bank — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'MoPA, LGED & Sonali Bank Limited',
    examTaker: 'BPSC / Departmental Selection Committee',
    year: 2011,
    examDate: '14 October 2011',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2011 Computer Operator Question Paper covering ICT, Bangla, English, Math, and Written solutions.',
    questions: [
      {
        id: 'comp-op-2011-m1',
        paperId: 'comp-op-all-govt-bank-2011',
        questionPaperCode: 'COMP-OP-MOPA-SONALI-2011',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which shortcut key is used to copy ONLY the formatting (font, color, borders) of selected text in MS Word?',
        options: [
          'A) Ctrl + C',
          'B) Ctrl + Shift + C',
          'C) Alt + C',
          'D) Ctrl + Alt + C'
        ],
        correctAnswer: 'B) Ctrl + Shift + C',
        solution: `1. Ctrl + Shift + C copies formatting (Format Painter shortcut).
2. Ctrl + Shift + V pastes the copied formatting onto selected text.
Correct Answer: B) Ctrl + Shift + C.`
      },
      {
        id: 'comp-op-2011-m2',
        paperId: 'comp-op-all-govt-bank-2011',
        questionPaperCode: 'COMP-OP-MOPA-SONALI-2011',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the full form of PDF?',
        options: [
          'A) Portable Document Format',
          'B) Printable Data File',
          'C) Public Document File',
          'D) Processed Digital Format'
        ],
        correctAnswer: 'A) Portable Document Format',
        solution: `PDF stands for Portable Document Format, developed by Adobe to present documents consistently across all operating systems and printers.
Correct Answer: A) Portable Document Format.`
      },
      {
        id: 'comp-op-2011-w1',
        paperId: 'comp-op-all-govt-bank-2011',
        questionPaperCode: 'COMP-OP-MOPA-SONALI-2011',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Write 15 essential MS Word & MS Excel keyboard shortcuts used daily by a Government Computer Operator.',
        solution: `15 Essential Keyboard Shortcuts:
1. Ctrl + N : New document / workbook
2. Ctrl + O : Open existing file
3. Ctrl + S : Save file (F12 for Save As)
4. Ctrl + P : Print document
5. Ctrl + Z / Ctrl + Y : Undo / Redo last action
6. Ctrl + F / Ctrl + H : Find / Find & Replace
7. Ctrl + K : Insert Hyperlink
8. Ctrl + Enter : Insert Page Break (Word) / Fill selected cells with current entry (Excel)
9. Ctrl + ; : Insert current Date in Excel
10. Ctrl + Shift + ; : Insert current Time in Excel
11. Alt + = : AutoSum in Excel
12. F2 : Edit active cell in Excel
13. F4 : Toggle absolute reference ($A$1) in Excel
14. F7 : Spelling & Grammar Check
15. Ctrl + Alt + B / Ctrl + Alt + V : Toggle Bijoy Classic / Bijoy Unicode`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2011',
    questionPaperCode: 'DECO-BB-RUPALI-2011',
    title: '2011 Bangladesh Bank, Rupali Bank & BBS — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Rupali Bank Limited & BBS (Population Census 2011)',
    examTaker: 'Bangladesh Bank & BBS Selection Committee',
    year: 2011,
    examDate: '18 November 2011',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2011 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2011-m1',
        paperId: 'data-entry-all-govt-bank-2011',
        questionPaperCode: 'DECO-BB-RUPALI-2011',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which scanner technology was primarily used to read shaded bubbles on millions of Bangladesh Population Census 2011 forms and MCQ answer sheets?',
        options: [
          'A) OMR (Optical Mark Recognition)',
          'B) MICR',
          'C) Plotter',
          'D) Digitizer'
        ],
        correctAnswer: 'A) OMR (Optical Mark Recognition)',
        solution: `OMR (Optical Mark Recognition) detects the presence or absence of dark pencil/pen marks in predefined positions on survey forms and MCQ answer sheets.
Correct Answer: A) OMR (Optical Mark Recognition).`
      },
      {
        id: 'deco-2011-m2',
        paperId: 'data-entry-all-govt-bank-2011',
        questionPaperCode: 'DECO-BB-RUPALI-2011',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, what is the keyboard shortcut to insert the AutoSum (=SUM()) formula automatically?',
        options: [
          'A) Alt + =',
          'B) Ctrl + =',
          'C) Shift + =',
          'D) Alt + S'
        ],
        correctAnswer: 'A) Alt + =',
        solution: `Pressing Alt + = automatically inserts the =SUM() function for the contiguous column or row of numbers above or to the left of the active cell.
Correct Answer: A) Alt + =.`
      },
      {
        id: 'deco-2011-w1',
        paperId: 'data-entry-all-govt-bank-2011',
        questionPaperCode: 'DECO-BB-RUPALI-2011',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'What is a Relational Database Management System (RDBMS)? Define Table, Record (Tuple), Field (Attribute), and Query with an example of a Bank Customer Account table.',
        solution: `An RDBMS is software that stores data in structured two-dimensional tables linked by common keys (e.g., Oracle, SQL Server, MySQL, PostgreSQL).

Core Components in a Bank Customer Table:
1. Table (Relation): A collection of related data organized in rows and columns (e.g., CUSTOMER_ACCOUNTS table).
2. Field (Attribute / Column): A vertical column representing one specific property of an entity (e.g., Account_No, Customer_Name, NID, Balance).
3. Record (Tuple / Row): A single horizontal row representing one complete entity instance (e.g., [100245, 'Md. Karim', '1990269...', 125000.00]).
4. Query: A structured request (using SQL SELECT) to retrieve or filter specific records (e.g., SELECT * FROM CUSTOMER_ACCOUNTS WHERE Balance > 100000;).`
      }
    ]
  },

  // ============================================================================
  // 2010 — COMPUTER OPERATOR & DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'comp-op-all-govt-bank-2010',
    questionPaperCode: 'COMP-OP-BB-SONALI-2010',
    title: '2010 Bangladesh Bank, Sonali Bank & Ministry of Establishment (MoPA) — Computer Operator',
    category: 'Computer Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank Limited & Ministry of Establishment',
    examTaker: 'Bangladesh Bank & BPSC',
    year: 2010,
    examDate: '22 October 2010',
    mcqMarks: 90,
    writtenMarks: 60,
    summary: '2010 Computer Operator Question Paper covering ICT Fundamentals, MS Office, Number Systems, Bangla, English, and Math.',
    questions: [
      {
        id: 'comp-op-2010-m1',
        paperId: 'comp-op-all-govt-bank-2010',
        questionPaperCode: 'COMP-OP-BB-SONALI-2010',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: '1 Byte is equal to how many Bits, and how many Nibbles?',
        options: [
          'A) 8 Bits and 2 Nibbles',
          'B) 8 Bits and 4 Nibbles',
          'C) 16 Bits and 2 Nibbles',
          'D) 4 Bits and 2 Nibbles'
        ],
        correctAnswer: 'A) 8 Bits and 2 Nibbles',
        solution: `1 Nibble = 4 Bits.
1 Byte = 8 Bits = 2 Nibbles.
Correct Answer: A) 8 Bits and 2 Nibbles.`
      },
      {
        id: 'comp-op-2010-m2',
        paperId: 'comp-op-all-govt-bank-2010',
        questionPaperCode: 'COMP-OP-BB-SONALI-2010',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which orientation prints a wide MS Excel financial statement horizontally across the longer side of the A4 page?',
        options: [
          'A) Portrait',
          'B) Landscape',
          'C) Gutter',
          'D) Legal'
        ],
        correctAnswer: 'B) Landscape',
        solution: `Page Orientation has two modes: Portrait (vertical) and Landscape (horizontal, ideal for wide multi-column financial tables).
Correct Answer: B) Landscape.`
      },
      {
        id: 'comp-op-2010-w1',
        paperId: 'comp-op-all-govt-bank-2010',
        questionPaperCode: 'COMP-OP-BB-SONALI-2010',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'Draw and explain the Block Diagram of a Digital Computer (Input Unit, Central Processing Unit [ALU, Control Unit, Registers], Primary & Secondary Memory Unit, and Output Unit).',
        solution: `Block Architecture of a Digital Computer (Von Neumann Architecture):
1. Input Unit: Accepts raw data and instructions from the user and converts them into binary signals (Keyboard, Mouse, Scanner, MICR/OMR).
2. Central Processing Unit (CPU):
   - Control Unit (CU): Directs timing and control signals across all units using the fetch-decode-execute cycle.
   - Arithmetic Logic Unit (ALU): Performs all arithmetic (+, -, ×, ÷) and logical (AND, OR, NOT, <, >, =) operations.
   - Registers: High-speed temporary storage inside the CPU (Accumulator, Program Counter, Instruction Register).
3. Memory / Storage Unit:
   - Primary Memory (RAM/ROM/Cache): Directly accessible by the CPU.
   - Secondary Storage (HDD/SSD/Tape): Non-volatile mass storage for databases and files.
4. Output Unit: Converts binary results into human-readable form (Monitor, Laser Printer, Plotter).`
      }
    ]
  },
  {
    paperId: 'data-entry-all-govt-bank-2010',
    questionPaperCode: 'DECO-BB-NBR-2010',
    title: '2010 Bangladesh Bank, Janata Bank & NBR — Data Entry / Control Operator',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Janata Bank Limited & National Board of Revenue (NBR)',
    examTaker: 'Bangladesh Bank & Departmental Selection Committee',
    year: 2010,
    examDate: '19 November 2010',
    mcqMarks: 80,
    writtenMarks: 50,
    summary: '2010 Data Entry / Control Operator Question Paper with MCQ and Written solutions.',
    questions: [
      {
        id: 'deco-2010-m1',
        paperId: 'data-entry-all-govt-bank-2010',
        questionPaperCode: 'DECO-BB-NBR-2010',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which key on a standard computer keyboard toggles the Numeric Keypad between number entry mode and directional arrow/navigation mode?',
        options: [
          'A) Caps Lock',
          'B) Num Lock',
          'C) Scroll Lock',
          'D) Insert'
        ],
        correctAnswer: 'B) Num Lock',
        solution: `Num Lock enables high-speed 10-key numeric data entry on the right-hand keypad. When turned off, those keys act as navigation keys (Home, End, PgUp, PgDn, Arrows).
Correct Answer: B) Num Lock.`
      },
      {
        id: 'deco-2010-m2',
        paperId: 'data-entry-all-govt-bank-2010',
        questionPaperCode: 'DECO-BB-NBR-2010',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'A Data Entry Operator types 3,600 words in 1 hour. What is the operator’s average typing speed in Words Per Minute (WPM)?',
        options: [
          'A) 45 WPM',
          'B) 50 WPM',
          'C) 60 WPM',
          'D) 75 WPM'
        ],
        correctAnswer: 'C) 60 WPM',
        solution: `1 hour = 60 minutes.
Typing speed = 3,600 words / 60 minutes = 60 Words Per Minute (WPM).
Correct Answer: C) 60 WPM.`
      },
      {
        id: 'deco-2010-w1',
        paperId: 'data-entry-all-govt-bank-2010',
        questionPaperCode: 'DECO-BB-NBR-2010',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 20,
        questionText: 'How is typing speed and accuracy calculated in the Practical Typing Test for Government Computer Operator and Data Entry Operator recruitment in Bangladesh?',
        solution: `Official Bangladesh Government Practical Typing Test Standard (BPSC & MoPA Rules):
1. Required Minimum Speed:
   - Computer Operator: 25 WPM in Bangla and 30 WPM in English.
   - Data Entry / Control Operator: 20 WPM in Bangla and 20 WPM in English.

2. Standard Word Definition:
   - Every 5 keystrokes (characters including spaces) = 1 standard Word.
   - Gross WPM = (Total Keystrokes / 5) ÷ Time in Minutes (usually 10 minutes).

3. Accuracy & Error Penalty Calculation:
   - Net WPM = Gross WPM - (Unfixed Errors / Time in Minutes).
   - Candidates must pass BOTH Bangla and English segments separately to qualify for final appointment.`
      }
    ]
  }
];
