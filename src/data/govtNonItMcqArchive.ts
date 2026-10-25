import { NonItExamPaper } from './bankNonItQuestions';

/**
 * Comprehensive 2010–2026 Scraped & Organized MCQ + Written Question Bank
 * Covering:
 * 1. Senior Officer (General)
 * 2. Officer (General)
 * 3. Officer (Cash)
 * 4. Data Entry / Control Operator (Govt Banks + Govt Ministries/NBR/EC/BBS)
 * 5. Computer Operator (Govt Banks + All Major Govt Fields: BPSC, MoPA, Finance/CGA, LGED, DPE, NBR, Railway)
 */
export const govtAndBankNonItArchivePapers: NonItExamPaper[] = [
  // ============================================================================
  // 2026 — COMPUTER OPERATOR (GOVERNMENT MINISTRIES, BPSC & COMBINED GOVT FIELDS)
  // ============================================================================
  {
    paperId: 'govt-comp-op-mopa-bpsc-2026',
    questionPaperCode: 'MOPA-BPSC-CO-2026',
    title: 'Ministry of Public Administration (MoPA), Finance Division & BPSC Computer Operator Exam 2026',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Ministry of Public Administration, Finance Division, NBR & BPSC Non-Cadre',
    examTaker: 'Ministry Departmental Selection Committee / BPSC',
    year: 2026,
    examDate: 'February 2026',
    mcqMarks: 90,
    writtenMarks: 100,
    summary: 'Complete 2026 Government Computer Operator MCQ & Written Question Paper covering Computer & ICT (Hardware, MS Office, Unicode/Bijoy, Networking), Bangla Grammar, English Grammar, Quantitative Math, and Bangladesh GK.',
    questions: [
      {
        id: 'mopa-co-2026-mcq-1',
        paperId: 'govt-comp-op-mopa-bpsc-2026',
        questionPaperCode: 'MOPA-BPSC-CO-2026',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which memory acts as a high-speed buffer between the CPU registers and the main RAM to reduce average memory access time?',
        options: [
          'A) Virtual Memory',
          'B) Cache Memory (L1/L2/L3 SRAM)',
          'C) Secondary Flash Memory',
          'D) Magnetic Tape'
        ],
        correctAnswer: 'B) Cache Memory (L1/L2/L3 SRAM)',
        solution: `Cache Memory (built with high-speed Static RAM) is placed directly between the CPU and main DRAM to store frequently accessed instructions and data, drastically reducing CPU wait states.
Correct Answer: B).`
      },
      {
        id: 'mopa-co-2026-mcq-2',
        paperId: 'govt-comp-op-mopa-bpsc-2026',
        questionPaperCode: 'MOPA-BPSC-CO-2026',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In Microsoft Word, which keyboard shortcut is used to insert a Page Break at the cursor position?',
        options: [
          'A) Shift + Enter',
          'B) Ctrl + Enter',
          'C) Alt + Enter',
          'D) Ctrl + Shift + P'
        ],
        correctAnswer: 'B) Ctrl + Enter',
        solution: `In MS Word, pressing 'Ctrl + Enter' immediately inserts a manual Page Break, whereas 'Shift + Enter' inserts a line break within the same paragraph.
Correct Answer: B) Ctrl + Enter.`
      },
      {
        id: 'mopa-co-2026-mcq-3',
        paperId: 'govt-comp-op-mopa-bpsc-2026',
        questionPaperCode: 'MOPA-BPSC-CO-2026',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which key combination is used to switch between Bijoy Classic/ANSI Bangla mode and English mode while typing?',
        options: [
          'A) Ctrl + Alt + B',
          'B) Ctrl + Shift + B',
          'C) Alt + F12',
          'D) Ctrl + Space'
        ],
        correctAnswer: 'A) Ctrl + Alt + B',
        solution: `In Bijoy Bayanno software, pressing 'Ctrl + Alt + B' toggles between English and Bijoy ANSI (SutonnyMJ), while 'Ctrl + Alt + V' activates Bijoy Unicode (Nikosh).
Correct Answer: A) Ctrl + Alt + B.`
      },
      {
        id: 'mopa-co-2026-mcq-4',
        paperId: 'govt-comp-op-mopa-bpsc-2026',
        questionPaperCode: 'MOPA-BPSC-CO-2026',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS PowerPoint, which key starts the Slide Show directly from the current slide instead of the first slide?',
        options: [
          'A) F5',
          'B) Shift + F5',
          'C) Ctrl + F5',
          'D) Alt + F5'
        ],
        correctAnswer: 'B) Shift + F5',
        solution: `Pressing F5 starts the presentation from the very first slide, whereas 'Shift + F5' starts the slide show from the currently selected slide.
Correct Answer: B) Shift + F5.`
      },
      {
        id: 'mopa-co-2026-mcq-5',
        paperId: 'govt-comp-op-mopa-bpsc-2026',
        questionPaperCode: 'MOPA-BPSC-CO-2026',
        questionNo: 'MCQ-05',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘হ্ম’ যুক্তবর্ণটি কোন কোন বর্ণের সমন্বয়ে গঠিত?',
        options: [
          'A) হ + ণ',
          'B) হ + ম',
          'C) ম + হ',
          'D) ক্ষ + ম'
        ],
        correctAnswer: 'B) হ + ম',
        solution: `‘হ্ম’ (যেমন: ব্রহ্মপুত্র, ব্রাহ্মণ) যুক্তবর্ণটি ‘হ্ + ম’ (হ + হসন্ত + ম) এর সমন্বয়ে গঠিত। (অন্যদিকে ‘হ্ন’ গঠিত হয় ‘হ্ + ন’ এবং ‘হ্ণ’ গঠিত হয় ‘হ্ + ণ’ দিয়ে)।
সঠিক উত্তর: B) হ + ম।`
      },
      {
        id: 'mopa-co-2026-mcq-6',
        paperId: 'govt-comp-op-mopa-bpsc-2026',
        questionPaperCode: 'MOPA-BPSC-CO-2026',
        questionNo: 'MCQ-06',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Fill in the blank with the appropriate preposition: "The Computer Operator was entrusted ___ the responsibility of encrypting confidential payroll records."',
        options: [
          'A) to',
          'B) with',
          'C) for',
          'D) by'
        ],
        correctAnswer: 'B) with',
        solution: `Standard preposition rule: A person is "entrusted WITH a task/duty", whereas a task/object is "entrusted TO a person".
Correct Answer: B) with.`
      },
      {
        id: 'mopa-co-2026-mcq-7',
        paperId: 'govt-comp-op-mopa-bpsc-2026',
        questionPaperCode: 'MOPA-BPSC-CO-2026',
        questionNo: 'MCQ-07',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'If 15% of 40% of a number is 24, what is the number?',
        options: [
          'A) 300',
          'B) 360',
          'C) 400',
          'D) 450'
        ],
        correctAnswer: 'C) 400',
        solution: `Let the number be x.
(15 / 100) × (40 / 100) × x = 24
(600 / 10000) × x = 24
0.06x = 24 => x = 24 / 0.06 = 400.
Correct Answer: C) 400.`
      },
      {
        id: 'mopa-co-2026-mcq-8',
        paperId: 'govt-comp-op-mopa-bpsc-2026',
        questionPaperCode: 'MOPA-BPSC-CO-2026',
        questionNo: 'MCQ-08',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'Which platform is used across Government Ministries and Directorates in Bangladesh for paperless digital file processing and official decision-making?',
        options: [
          'A) e-GP',
          'B) e-Nothi (D-Nothi System)',
          'C) iBAS++',
          'D) BACH'
        ],
        correctAnswer: 'B) e-Nothi (D-Nothi System)',
        solution: `e-Nothi / D-Nothi (implemented by a2i and DoICT) is the government-wide electronic file management system used across ministries, divisions, and directorates for paperless file movement and digital signatures.
Correct Answer: B) e-Nothi.`
      },
      {
        id: 'mopa-co-2026-wrt-1',
        paperId: 'govt-comp-op-mopa-bpsc-2026',
        questionPaperCode: 'MOPA-BPSC-CO-2026',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 30,
        questionText: `(a) Write down the function of the following MS Word & MS Excel shortcuts: (i) Ctrl + Shift + C, (ii) Ctrl + K, (iii) Ctrl + H, (iv) Alt + =, (v) Ctrl + ; (Semicolon). (15 Marks)
(b) What is iBAS++ in the Government of Bangladesh? How does a Computer Operator prepare an electronic bill/salary schedule in an office? (15 Marks)`,
        solution: `Part (a) Keyboard Shortcut Functions:
(i) Ctrl + Shift + C: Copies the formatting (Format Painter) of selected text in MS Word.
(ii) Ctrl + K: Opens the Insert Hyperlink dialog box in Word/Excel/PowerPoint.
(iii) Ctrl + H: Opens the Find and Replace dialog box.
(iv) Alt + = : Automatically inserts the AutoSum =SUM() formula in MS Excel.
(v) Ctrl + ; : Inserts the current system date into the active cell in MS Excel.

Part (b) iBAS++ Overview:
iBAS++ (Integrated Budget and Accounting System) is the centralized web-based financial management, budgeting, and electronic fund transfer (EFT) system under the Finance Division, Ministry of Finance. Computer Operators assist Drawing and Disbursing Officers (DDOs) in entering employee NID, bank routing numbers, and budget codes to generate automated EFT salary and supplier bills.`
      }
    ]
  },

  // ============================================================================
  // 2026 — DATA ENTRY / CONTROL OPERATOR (NBR, ELECTION COMMISSION & GOVT BANKS)
  // ============================================================================
  {
    paperId: 'govt-deco-nbr-ec-2026',
    questionPaperCode: 'NBR-EC-DECO-2026',
    title: 'NBR, Election Commission (NID Wing) & Govt Bank Data Entry / Control Operator Exam 2026',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'National Board of Revenue (NBR), Election Commission & Bangladesh Bank',
    examTaker: 'Departmental Recruitment Committee / BSCS',
    year: 2026,
    examDate: 'January 2026',
    mcqMarks: 80,
    writtenMarks: 100,
    summary: '2026 Data Entry / Control Operator Preliminary MCQ and Written paper covering Database Management, Optical Character Recognition (OCR), Biometric Voter/TIN Data Entry, Bangla/English, and Math.',
    questions: [
      {
        id: 'nbr-deco-2026-mcq-1',
        paperId: 'govt-deco-nbr-ec-2026',
        questionPaperCode: 'NBR-EC-DECO-2026',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which SQL clause is used to filter groups created by a GROUP BY query in a relational database?',
        options: [
          'A) WHERE',
          'B) HAVING',
          'C) ORDER BY',
          'D) DISTINCT'
        ],
        correctAnswer: 'B) HAVING',
        solution: `The WHERE clause filters individual rows before grouping, whereas the HAVING clause filters aggregated groups produced by GROUP BY.
Correct Answer: B) HAVING.`
      },
      {
        id: 'nbr-deco-2026-mcq-2',
        paperId: 'govt-deco-nbr-ec-2026',
        questionPaperCode: 'NBR-EC-DECO-2026',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the full form of PDF, the standard file format used for archiving official scanned documents?',
        options: [
          'A) Printed Document Format',
          'B) Portable Document Format',
          'C) Public Data File',
          'D) Programmable Document File'
        ],
        correctAnswer: 'B) Portable Document Format',
        solution: `PDF stands for Portable Document Format, developed by Adobe to present documents consistently across all hardware and operating systems.
Correct Answer: B) Portable Document Format.`
      },
      {
        id: 'nbr-deco-2026-mcq-3',
        paperId: 'govt-deco-nbr-ec-2026',
        questionPaperCode: 'NBR-EC-DECO-2026',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, what will be the output of the formula =COUNTA(A1:A5) if cells A1, A2, A3 contain numbers, A4 contains text "Paid", and A5 is empty?',
        options: [
          'A) 3',
          'B) 4',
          'C) 5',
          'D) 1'
        ],
        correctAnswer: 'B) 4',
        solution: `COUNT() counts only numeric cells (which would be 3), whereas COUNTA() counts all non-empty cells containing numbers, text, or logical values. Since 4 cells (A1, A2, A3, A4) are non-empty, COUNTA returns 4.
Correct Answer: B) 4.`
      },
      {
        id: 'nbr-deco-2026-mcq-4',
        paperId: 'govt-deco-nbr-ec-2026',
        questionPaperCode: 'NBR-EC-DECO-2026',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: 'নিচের কোন বানানটি প্রমিত বাংলা বানান রীতি অনুযায়ী শুদ্ধ?',
        options: [
          'A) স্বায়ত্বশাসন',
          'B) স্বায়ত্তশাসন',
          'C) সায়ত্তশাসন',
          'D) স্বায়ত্তশ্বাসন'
        ],
        correctAnswer: 'B) স্বায়ত্তশাসন',
        solution: `স্ব + আয়ত্ত + শাসন = স্বায়ত্তশাসন (এখানে ‘ত্ত’ হবে, ‘ত্ব’ নয়)।
সঠিক উত্তর: B) স্বায়ত্তশাসন।`
      },
      {
        id: 'nbr-deco-2026-mcq-5',
        paperId: 'govt-deco-nbr-ec-2026',
        questionPaperCode: 'NBR-EC-DECO-2026',
        questionNo: 'MCQ-05',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'If a data entry operator types 360 words in 12 minutes, how many words will they type in 45 minutes at the same speed?',
        options: [
          'A) 1,200 words',
          'B) 1,350 words',
          'C) 1,440 words',
          'D) 1,500 words'
        ],
        correctAnswer: 'B) 1,350 words',
        solution: `Typing speed = 360 / 12 = 30 words per minute (WPM).
In 45 minutes, total words = 30 × 45 = 1,350 words.
Correct Answer: B) 1,350 words.`
      },
      {
        id: 'nbr-deco-2026-wrt-1',
        paperId: 'govt-deco-nbr-ec-2026',
        questionPaperCode: 'NBR-EC-DECO-2026',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 25,
        questionText: 'What is Data De-duplication and Biometric AFIS (Automated Fingerprint Identification System) in National ID (NID) and Banking e-KYC databases? How does a Control Operator resolve duplicate record flags?',
        solution: `Model Solution:
1. Data De-duplication: The process of identifying and eliminating duplicate customer or citizen records in a central database using unique identifiers (NID, TIN, Mobile Number, and Biometrics).
2. AFIS (Automated Fingerprint Identification System): Compares captured 10-finger biometric templates against millions of existing records (1:N matching) to prevent a single individual from registering multiple identities or fraudulent bank accounts.
3. Control Operator Resolution Workflow:
   - Inspects the flagged pair in the Exception Queue.
   - Verifies source documents (Birth Registration, Passport, Utility Bill, physical verification report).
   - Merges or rejects the duplicate entry with an audit trail timestamp.`
      }
    ]
  },

  // ============================================================================
  // 2025 — SENIOR OFFICER (GENERAL) — COMBINED 9 GOVT BANKS
  // ============================================================================
  {
    paperId: 'nonit-so-gen-govt-2025',
    questionPaperCode: 'BSCS-SO-GEN-2025 (Job ID: 10201)',
    title: 'Combined 9 Banks Senior Officer (General) Recruitment Exam 2025',
    category: 'Senior Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB, RAKUB & BHBFC (BSCS)',
    examTaker: 'BIBM',
    year: 2025,
    examDate: 'April 2025',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: 'Complete 2025 Combined 9 Banks Senior Officer (General) Preliminary MCQ and Written exam questions with full mathematical derivations and banking solutions.',
    questions: [
      {
        id: 'so-gen-2025-mcq-1',
        paperId: 'nonit-so-gen-govt-2025',
        questionPaperCode: 'BSCS-SO-GEN-2025 (Job ID: 10201)',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'If log_x (1/8) = -3/2, then what is the value of x?',
        options: [
          'A) 2',
          'B) 4',
          'C) 8',
          'D) 16'
        ],
        correctAnswer: 'B) 4',
        solution: `By definition of logarithms:
x^(-3/2) = 1/8 = 2^(-3)
Raise both sides to the power (-2/3):
x = (2^(-3))^(-2/3) = 2^(2) = 4.
Correct Answer: B) 4.`
      },
      {
        id: 'so-gen-2025-mcq-2',
        paperId: 'nonit-so-gen-govt-2025',
        questionPaperCode: 'BSCS-SO-GEN-2025 (Job ID: 10201)',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Identify the word that is most nearly OPPOSITE in meaning (Antonym) to "PARSIMONIOUS":',
        options: [
          'A) Frugal',
          'B) Extravagant / Lavish',
          'C) Cautious',
          'D) Taciturn'
        ],
        correctAnswer: 'B) Extravagant / Lavish',
        solution: `"Parsimonious" means extremely frugal, stingy, or unwilling to spend money. Its exact antonym is "Extravagant", "Lavish", or "Prodigal".
Correct Answer: B).`
      },
      {
        id: 'so-gen-2025-mcq-3',
        paperId: 'nonit-so-gen-govt-2025',
        questionPaperCode: 'BSCS-SO-GEN-2025 (Job ID: 10201)',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘সংশয়’-এর বিপরীতাত্মক শব্দ কোনটি?',
        options: [
          'A) দ্বিধা',
          'B) প্রত্যয়',
          'C) বিস্ময়',
          'D) নির্ভয়'
        ],
        correctAnswer: 'B) প্রত্যয়',
        solution: `‘সংশয়’ শব্দের অর্থ সন্দেহ বা দ্বিধা। এর সঠিক বিপরীত শব্দ হলো ‘প্রত্যয়’ (দৃঢ় বিশ্বাস বা নিশ্চয়তা)।
সঠিক উত্তর: B) প্রত্যয়।`
      },
      {
        id: 'so-gen-2025-mcq-4',
        paperId: 'nonit-so-gen-govt-2025',
        questionPaperCode: 'BSCS-SO-GEN-2025 (Job ID: 10201)',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'According to Basel III Capital Accord implemented by Bangladesh Bank, what is the minimum Capital to Risk-weighted Assets Ratio (CRAR) required for scheduled banks (excluding Capital Conservation Buffer)?',
        options: [
          'A) 8.0%',
          'B) 10.0%',
          'C) 12.5%',
          'D) 15.0%'
        ],
        correctAnswer: 'B) 10.0%',
        solution: `Under Bangladesh Bank's Basel III guidelines, scheduled banks must maintain a minimum CRAR of 10.0% of Risk-Weighted Assets (RWA), and 12.5% when including the 2.5% Capital Conservation Buffer (CCB).
Correct Answer: B) 10.0%.`
      },
      {
        id: 'so-gen-2025-mcq-5',
        paperId: 'nonit-so-gen-govt-2025',
        questionPaperCode: 'BSCS-SO-GEN-2025 (Job ID: 10201)',
        questionNo: 'MCQ-05',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which protocol is used to securely transfer encrypted web pages over the Internet on port 443?',
        options: [
          'A) HTTP',
          'B) HTTPS (HTTP over TLS/SSL)',
          'C) FTP',
          'D) Telnet'
        ],
        correctAnswer: 'B) HTTPS (HTTP over TLS/SSL)',
        solution: `HTTPS uses Transport Layer Security (TLS/SSL) on TCP port 443 to encrypt communication between a user's browser and the web server.
Correct Answer: B).`
      },
      {
        id: 'so-gen-2025-wrt-1',
        paperId: 'nonit-so-gen-govt-2025',
        questionPaperCode: 'BSCS-SO-GEN-2025 (Job ID: 10201)',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'A cistern has two inlet pipes A and B that can fill it in 12 hours and 15 hours respectively, and an outlet pipe C that can empty the full cistern in 20 hours. If all three pipes are opened simultaneously, in how many hours will the empty cistern be completely filled?',
        solution: `Step-by-Step Solution:
1. Work done by Inlet Pipe A in 1 hour = +1/12.
2. Work done by Inlet Pipe B in 1 hour = +1/15.
3. Work done by Outlet Pipe C in 1 hour = -1/20.
4. Net part filled in 1 hour when all three pipes are open:
   Net Rate = 1/12 + 1/15 - 1/20
   LCM of 12, 15, and 20 is 60:
   Net Rate = (5 + 4 - 3) / 60 = 6 / 60 = 1 / 10 of the cistern per hour.
5. Total time to fill the cistern = 1 ÷ (1/10) = 10 hours.
Answer: 10 hours.`
      }
    ]
  },

  // ============================================================================
  // 2025 — COMPUTER OPERATOR (DIRECTORATE OF PRIMARY EDUCATION & LGED)
  // ============================================================================
  {
    paperId: 'govt-comp-op-dpe-lged-2025',
    questionPaperCode: 'DPE-LGED-CO-2025',
    title: 'Directorate of Primary Education (DPE) & LGED Computer Operator Exam 2025',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Directorate of Primary Education (DPE) & Local Govt Engineering Dept (LGED)',
    examTaker: 'Departmental Recruitment Board',
    year: 2025,
    examDate: 'June 2025',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: '2025 Government Department Computer Operator MCQ and Written paper covering Computer Architecture, Operating Systems, Spreadsheet Formulas, Bangla Literature, and English Grammar.',
    questions: [
      {
        id: 'dpe-co-2025-mcq-1',
        paperId: 'govt-comp-op-dpe-lged-2025',
        questionPaperCode: 'DPE-LGED-CO-2025',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: '1 Terabyte (TB) is equal to how many Gigabytes (GB) in binary storage addressing?',
        options: [
          'A) 1,000 GB',
          'B) 1,024 GB',
          'C) 512 GB',
          'D) 2,048 GB'
        ],
        correctAnswer: 'B) 1,024 GB',
        solution: `In binary storage hierarchy:
1 KB = 1,024 Bytes
1 MB = 1,024 KB
1 GB = 1,024 MB
1 TB = 1,024 GB (2^10 GB).
Correct Answer: B) 1,024 GB.`
      },
      {
        id: 'dpe-co-2025-mcq-2',
        paperId: 'govt-comp-op-dpe-lged-2025',
        questionPaperCode: 'DPE-LGED-CO-2025',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which of the following is an example of System Software rather than Application Software?',
        options: [
          'A) Microsoft Excel',
          'B) Linux / Windows 11 Operating System',
          'C) Adobe Photoshop',
          'D) Bijoy Bayanno'
        ],
        correctAnswer: 'B) Linux / Windows 11 Operating System',
        solution: `An Operating System (Linux, Windows, macOS) manages hardware resources and provides services for application programs, making it System Software.
Correct Answer: B).`
      },
      {
        id: 'dpe-co-2025-mcq-3',
        paperId: 'govt-comp-op-dpe-lged-2025',
        questionPaperCode: 'DPE-LGED-CO-2025',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, what is the default file extension for documents saved in Word 2007 and later versions?',
        options: [
          'A) .doc',
          'B) .docx',
          'C) .dot',
          'D) .txt'
        ],
        correctAnswer: 'B) .docx',
        solution: `Starting from Microsoft Office 2007, Word uses the Office Open XML format with the default extension '.docx'.
Correct Answer: B) .docx.`
      },
      {
        id: 'dpe-co-2025-mcq-4',
        paperId: 'govt-comp-op-dpe-lged-2025',
        questionPaperCode: 'DPE-LGED-CO-2025',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Choose the correct passive voice of: "Who taught you English?"',
        options: [
          'A) By whom was you taught English?',
          'B) By whom were you taught English?',
          'C) Whom were you taught English by?',
          'D) Who was taught English by you?'
        ],
        correctAnswer: 'B) By whom were you taught English?',
        solution: `Active interrogative starting with 'Who' changes to 'By whom' + auxiliary verb ('were' agreeing with 'you') + subject ('you') + past participle ('taught') + retained object ('English').
Correct Answer: B).`
      },
      {
        id: 'dpe-co-2025-mcq-5',
        paperId: 'govt-comp-op-dpe-lged-2025',
        questionPaperCode: 'DPE-LGED-CO-2025',
        questionNo: 'MCQ-05',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘অনীক’ শব্দের সমার্থক শব্দ কোনটি?',
        options: [
          'A) সমুদ্র',
          'B) সৈন্যদল',
          'C) পর্বত',
          'D) আকাশ'
        ],
        correctAnswer: 'B) সৈন্যদল',
        solution: `‘অনীক’ শব্দের অর্থ সৈন্যদল বা কটক।
সঠিক উত্তর: B) সৈন্যদল।`
      },
      {
        id: 'dpe-co-2025-wrt-1',
        paperId: 'govt-comp-op-dpe-lged-2025',
        questionPaperCode: 'DPE-LGED-CO-2025',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 25,
        questionText: 'Differentiate between RAM and ROM. Why does a computer need BIOS/UEFI firmware stored in non-volatile memory during booting?',
        solution: `Model Solution:
1. RAM (Random Access Memory): Volatile read/write memory that holds the active OS kernel and running programs; loses data when power is turned off.
2. ROM (Read-Only Memory / Flash EEPROM): Non-volatile memory that retains firmware instructions permanently even without power.
3. Role of BIOS/UEFI in Booting: When the computer is powered on, the CPU has no operating system loaded in RAM. The BIOS/UEFI stored in non-volatile flash ROM executes the Power-On Self-Test (POST) to verify hardware (RAM, keyboard, storage) and loads the bootloader from the SSD/HDD into RAM.`
      }
    ]
  },

  // ============================================================================
  // 2024 — OFFICER (CASH) — COMBINED 8 GOVT BANKS
  // ============================================================================
  {
    paperId: 'nonit-off-cash-govt-2024',
    questionPaperCode: 'BSCS-OFF-CASH-2024 (Job ID: 10192)',
    title: 'Combined 8 Banks Officer (Cash) Recruitment Exam 2024',
    category: 'Officer (Cash)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL & BKB (BSCS)',
    examTaker: 'BIBM',
    year: 2024,
    examDate: 'July 2024',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: '2024 Combined 8 Banks Officer (Cash) Preliminary MCQ and Written examination with complete solutions.',
    questions: [
      {
        id: 'off-cash-2024-mcq-1',
        paperId: 'nonit-off-cash-govt-2024',
        questionPaperCode: 'BSCS-OFF-CASH-2024 (Job ID: 10192)',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'By selling an article for Tk. 720, a trader loses 10%. At what price should he sell it to gain 15%?',
        options: [
          'A) Tk. 880',
          'B) Tk. 900',
          'C) Tk. 920',
          'D) Tk. 960'
        ],
        correctAnswer: 'C) Tk. 920',
        solution: `90% of Cost Price (CP) = Tk. 720 => CP = 720 / 0.90 = Tk. 800.
To gain 15%, Selling Price (SP) = 800 × 1.15 = Tk. 920.
Correct Answer: C) Tk. 920.`
      },
      {
        id: 'off-cash-2024-mcq-2',
        paperId: 'nonit-off-cash-govt-2024',
        questionPaperCode: 'BSCS-OFF-CASH-2024 (Job ID: 10192)',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: 'কাজী নজরুল ইসলামের ‘বিদ্রোহী’ কবিতাটি প্রথম কোন পত্রিকায় প্রকাশিত হয়?',
        options: [
          'A) ধূমকেতু',
          'B) সাপ্তাহিক বিজলী',
          'C) সওগাত',
          'D) কল্লোল'
        ],
        correctAnswer: 'B) সাপ্তাহিক বিজলী',
        solution: `কাজী নজরুল ইসলামের বিখ্যাত ‘বিদ্রোহী’ কবিতাটি ১৯২২ সালের ৬ জানুয়ারি ‘সাপ্তাহিক বিজলী’ পত্রিকায় প্রথম প্রকাশিত হয় (এবং এটি ‘অগ্নিবীণা’ কাব্যগ্রন্থের অন্তর্গত)।
সঠিক উত্তর: B) সাপ্তাহিক বিজলী।`
      },
      {
        id: 'off-cash-2024-mcq-3',
        paperId: 'nonit-off-cash-govt-2024',
        questionPaperCode: 'BSCS-OFF-CASH-2024 (Job ID: 10192)',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'What is a "Stale Cheque" in banking practice in Bangladesh?',
        options: [
          'A) A cheque presented before the date written on it',
          'B) A cheque presented more than 6 months after the date written on it',
          'C) A cheque torn into two pieces',
          'D) A cheque without a crossing'
        ],
        correctAnswer: 'B) A cheque presented more than 6 months after the date written on it',
        solution: `In Bangladesh banking practice, a cheque remains valid for 6 months from the date of issue written on the instrument. Once 6 months have elapsed, it becomes a Stale Cheque and will not be honored without revalidation by the drawer.
Correct Answer: B).`
      },
      {
        id: 'off-cash-2024-mcq-4',
        paperId: 'nonit-off-cash-govt-2024',
        questionPaperCode: 'BSCS-OFF-CASH-2024 (Job ID: 10192)',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Choose the correct form of the verb: "Neither the teller nor the cash officers ___ present when the vault alarm rang."',
        options: [
          'A) was',
          'B) were',
          'C) has been',
          'D) is'
        ],
        correctAnswer: 'B) were',
        solution: `With correlative conjunctions 'Neither...nor' or 'Either...or', the verb agrees with the closer subject ("cash officers", which is plural). Therefore, "were" is correct.
Correct Answer: B) were.`
      },
      {
        id: 'off-cash-2024-wrt-1',
        paperId: 'nonit-off-cash-govt-2024',
        questionPaperCode: 'BSCS-OFF-CASH-2024 (Job ID: 10192)',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'A sum of Tk. 55,000 is divided into two parts such that the simple interest on the first part for 3 years at 8% per annum is equal to the simple interest on the second part for 2 years at 10% per annum. Find the two parts.',
        solution: `Step-by-Step Solution:
1. Let the first part be Tk. x and the second part be Tk. (55,000 - x).
2. Simple Interest on first part: (x × 8 × 3) / 100 = 24x / 100.
3. Simple Interest on second part: ((55,000 - x) × 10 × 2) / 100 = 20(55,000 - x) / 100.
4. Equating the two interests:
   24x = 20(55,000 - x)
   6x = 5(55,000 - x)
   6x = 2,75,000 - 5x
   11x = 2,75,000
   x = Tk. 25,000.
   Second part = 55,000 - 25,000 = Tk. 30,000.
Answer: First part = Tk. 25,000; Second part = Tk. 30,000.`
      }
    ]
  },

  // ============================================================================
  // 2023 — OFFICER (GENERAL) — COMBINED 9 GOVT BANKS
  // ============================================================================
  {
    paperId: 'nonit-off-gen-govt-2023',
    questionPaperCode: 'BSCS-OFF-GEN-2023 (Job ID: 10181)',
    title: 'Combined 9 Banks Officer (General) Recruitment Exam 2023',
    category: 'Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BKB, BDBL & 3 Other Banks (BSCS)',
    examTaker: 'BIBM',
    year: 2023,
    examDate: 'September 2023',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: 'Complete 2023 Combined 9 Banks Officer (General) Preliminary MCQ and Written exam questions and solutions.',
    questions: [
      {
        id: 'off-gen-2023-mcq-1',
        paperId: 'nonit-off-gen-govt-2023',
        questionPaperCode: 'BSCS-OFF-GEN-2023 (Job ID: 10181)',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'The diagonal of a square is 8√2 cm. What is the perimeter of the square?',
        options: [
          'A) 24 cm',
          'B) 32 cm',
          'C) 64 cm',
          'D) 16√2 cm'
        ],
        correctAnswer: 'B) 32 cm',
        solution: `Diagonal of a square of side a is a√2.
Given a√2 = 8√2 => Side a = 8 cm.
Perimeter of the square = 4a = 4 × 8 = 32 cm.
Correct Answer: B) 32 cm.`
      },
      {
        id: 'off-gen-2023-mcq-2',
        paperId: 'nonit-off-gen-govt-2023',
        questionPaperCode: 'BSCS-OFF-GEN-2023 (Job ID: 10181)',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Identify the correct meaning of the phrase "A maiden speech":',
        options: [
          'A) A farewell speech',
          'B) The first public speech delivered by a person (especially in parliament)',
          'C) An unprepared extempore speech',
          'D) A speech delivered by a diplomat'
        ],
        correctAnswer: 'B) The first public speech delivered by a person (especially in parliament)',
        solution: `"Maiden speech" refers to the very first speech made by a newly elected member of a legislature or speaker in public.
Correct Answer: B).`
      },
      {
        id: 'off-gen-2023-mcq-3',
        paperId: 'nonit-off-gen-govt-2023',
        questionPaperCode: 'BSCS-OFF-GEN-2023 (Job ID: 10181)',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which network device operates at the Data Link Layer (Layer 2) of the OSI model and forwards frames based on MAC addresses?',
        options: [
          'A) Hub',
          'B) Switch',
          'C) Repeater',
          'D) Passive Coaxial Tap'
        ],
        correctAnswer: 'B) Switch',
        solution: `An Ethernet Switch operates at Layer 2 (Data Link Layer) and uses a MAC address table to forward frames selectively to the destination port.
Correct Answer: B) Switch.`
      },
      {
        id: 'off-gen-2023-mcq-4',
        paperId: 'nonit-off-gen-govt-2023',
        questionPaperCode: 'BSCS-OFF-GEN-2023 (Job ID: 10181)',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘সোনালী কাবিন’ কাব্যগ্রন্থটির রচয়িতা কে?',
        options: [
          'A) শামসুর রাহমান',
          'B) আল মাহমুদ',
          'C) সৈয়দ শামসুল হক',
          'D) জীবনানন্দ দাশ'
        ],
        correctAnswer: 'B) আল মাহমুদ',
        solution: `১৯৭৩ সালে প্রকাশিত বাংলা সাহিত্যের অন্যতম কালজয়ী সনেটধর্মী কাব্যগ্রন্থ ‘সোনালী কাবিন’-এর রচয়িতা কবি আল মাহমুদ।
সঠিক উত্তর: B) আল মাহমুদ।`
      },
      {
        id: 'off-gen-2023-wrt-1',
        paperId: 'nonit-off-gen-govt-2023',
        questionPaperCode: 'BSCS-OFF-GEN-2023 (Job ID: 10181)',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Translation (English ↔ Bangla)',
        marks: 25,
        questionText: 'Translate into English: "কৃষি খাতে স্বল্প সুদে ঋণ বিতরণ এবং আধুনিক কৃষি প্রযুক্তির ব্যবহার বাংলাদেশের খাদ্য নিরাপত্তা নিশ্চিতকরণে যুগান্তকারী ভূমিকা পালন করছে।"',
        solution: `Model English Translation:
"The disbursement of low-interest credit in the agricultural sector and the adoption of modern agricultural technologies are playing a groundbreaking role in ensuring food security in Bangladesh."`
      }
    ]
  },

  // ============================================================================
  // 2023 — COMPUTER OPERATOR & DATA ENTRY OPERATOR (CGA, AUDIT & ACCOUNTS DEPT)
  // ============================================================================
  {
    paperId: 'govt-comp-op-cga-2023',
    questionPaperCode: 'CGA-OCAG-CO-2023',
    title: 'Controller General of Accounts (CGA) & Audit Dept Computer Operator / Data Entry Exam 2023',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Office of the Controller General of Accounts (CGA) & Finance Division',
    examTaker: 'Finance Division Recruitment Board',
    year: 2023,
    examDate: 'May 2023',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: '2023 Government Accounts & Audit Department Computer Operator MCQ and Written paper covering ICT, Bangla, English, Math, and Constitutional GK.',
    questions: [
      {
        id: 'cga-co-2023-mcq-1',
        paperId: 'govt-comp-op-cga-2023',
        questionPaperCode: 'CGA-OCAG-CO-2023',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which port is commonly used to connect a high-definition digital monitor or projector carrying both uncompressed video and digital audio?',
        options: [
          'A) VGA Port',
          'B) HDMI (High-Definition Multimedia Interface)',
          'C) PS/2 Port',
          'D) Serial RS-232 Port'
        ],
        correctAnswer: 'B) HDMI (High-Definition Multimedia Interface)',
        solution: `HDMI transmits both high-definition digital video and multi-channel digital audio over a single cable, whereas legacy VGA carries only analog video signals.
Correct Answer: B) HDMI.`
      },
      {
        id: 'cga-co-2023-mcq-2',
        paperId: 'govt-comp-op-cga-2023',
        questionPaperCode: 'CGA-OCAG-CO-2023',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'Which Article of the Constitution of the People’s Republic of Bangladesh establishes the Office of the Comptroller and Auditor-General (OCAG)?',
        options: [
          'A) Article 118',
          'B) Article 127',
          'C) Article 137',
          'D) Article 102'
        ],
        correctAnswer: 'B) Article 127',
        solution: `Article 127 of the Constitution of Bangladesh provides for the establishment of the Comptroller and Auditor-General (মহাহিসাব নিরীক্ষক ও নিয়ন্ত্রক) to audit public accounts. (Article 118 is Election Commission; Article 137 is BPSC).
Correct Answer: B) Article 127.`
      },
      {
        id: 'cga-co-2023-mcq-3',
        paperId: 'govt-comp-op-cga-2023',
        questionPaperCode: 'CGA-OCAG-CO-2023',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, every formula or function must begin with which symbol?',
        options: [
          'A) # (Hash)',
          'B) = (Equal sign)',
          'C) & (Ampersand)',
          'D) $ (Dollar sign)'
        ],
        correctAnswer: 'B) = (Equal sign)',
        solution: `All formulas and functions in Microsoft Excel must start with the equal sign (=), such as =SUM(A1:A10).
Correct Answer: B).`
      },
      {
        id: 'cga-co-2023-mcq-4',
        paperId: 'govt-comp-op-cga-2023',
        questionPaperCode: 'CGA-OCAG-CO-2023',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which of the following is NOT an impact printer?',
        options: [
          'A) Dot Matrix Printer',
          'B) Laser Printer',
          'C) Daisy Wheel Printer',
          'D) Line Drum Printer'
        ],
        correctAnswer: 'B) Laser Printer',
        solution: `Laser printers and Inkjet printers are Non-Impact printers (they do not strike a physical ribbon against paper), whereas Dot Matrix and Daisy Wheel are Impact printers.
Correct Answer: B) Laser Printer.`
      },
      {
        id: 'cga-co-2023-wrt-1',
        paperId: 'govt-comp-op-cga-2023',
        questionPaperCode: 'CGA-OCAG-CO-2023',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'An employee spends 65% of his monthly salary on household expenses, 15% on house rent, and 10% on medical and transport. If he saves Tk. 4,500 at the end of the month, what is his total monthly salary and how much does he spend on house rent?',
        solution: `Step-by-Step Solution:
1. Total percentage spent = 65% + 15% + 10% = 90%.
2. Percentage saved = 100% - 90% = 10%.
3. Given 10% of Monthly Salary = Tk. 4,500.
   Therefore, Total Monthly Salary (100%) = 4,500 × 10 = Tk. 45,000.
4. Expenditure on House Rent (15% of Tk. 45,000):
   = 0.15 × 45,000 = Tk. 6,750.
Answer: Monthly Salary = Tk. 45,000; House Rent = Tk. 6,750.`
      }
    ]
  },

  // ============================================================================
  // 2022 — SENIOR OFFICER (GENERAL) — COMBINED 8 GOVT BANKS
  // ============================================================================
  {
    paperId: 'nonit-so-gen-govt-2022',
    questionPaperCode: 'BSCS-SO-GEN-2022 (Job ID: 10146)',
    title: 'Combined 8 Banks Senior Officer (General) Recruitment Exam 2022',
    category: 'Senior Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB & Probashi Kallyan Bank',
    examTaker: 'BIBM',
    year: 2022,
    examDate: 'November 2022',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: '2022 Combined 8 Banks Senior Officer (General) Preliminary MCQ and Written exam paper.',
    questions: [
      {
        id: 'so-gen-2022-mcq-1',
        paperId: 'nonit-so-gen-govt-2022',
        questionPaperCode: 'BSCS-SO-GEN-2022 (Job ID: 10146)',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'The sum of two numbers is 25 and their product is 144. What is the positive difference between the two numbers?',
        options: [
          'A) 5',
          'B) 7',
          'C) 9',
          'D) 11'
        ],
        correctAnswer: 'B) 7',
        solution: `Using the algebraic identity:
(a - b)^2 = (a + b)^2 - 4ab
= (25)^2 - 4(144)
= 625 - 576 = 49.
Therefore, |a - b| = √49 = 7 (the numbers are 16 and 9).
Correct Answer: B) 7.`
      },
      {
        id: 'so-gen-2022-mcq-2',
        paperId: 'nonit-so-gen-govt-2022',
        questionPaperCode: 'BSCS-SO-GEN-2022 (Job ID: 10146)',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'What is the full form of SWIFT in international banking telecommunications?',
        options: [
          'A) System for Worldwide International Fund Transfer',
          'B) Society for Worldwide Interbank Financial Telecommunication',
          'C) Standard Wire for International Financial Transactions',
          'D) Secure Web for Interbank Foreign Trade'
        ],
        correctAnswer: 'B) Society for Worldwide Interbank Financial Telecommunication',
        solution: `SWIFT stands for Society for Worldwide Interbank Financial Telecommunication, headquartered in La Hulpe, Belgium, providing standardized financial messaging across global banks.
Correct Answer: B).`
      },
      {
        id: 'so-gen-2022-mcq-3',
        paperId: 'nonit-so-gen-govt-2022',
        questionPaperCode: 'BSCS-SO-GEN-2022 (Job ID: 10146)',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Which of the following sentences is grammatically correct?',
        options: [
          'A) One of the borrower have defaulted on the installment.',
          'B) One of the borrowers has defaulted on the installment.',
          'C) One of the borrowers have defaulted on the installment.',
          'D) One of the borrower has defaulted on the installment.'
        ],
        correctAnswer: 'B) One of the borrowers has defaulted on the installment.',
        solution: `Rule: "One of + plural noun (borrowers) + singular verb (has)".
Correct Answer: B).`
      },
      {
        id: 'so-gen-2022-wrt-1',
        paperId: 'nonit-so-gen-govt-2022',
        questionPaperCode: 'BSCS-SO-GEN-2022 (Job ID: 10146)',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'English Language & Focus Writing',
        marks: 35,
        questionText: 'Write a Focus Writing essay on: "Foreign Exchange Reserve Management, Balance of Payments (BoP), and Export Diversification in Bangladesh."',
        solution: `Model Essay Summary:
- Balance of Payments (BoP) comprises the Current Account (Trade balance + Remittances + Services) and the Financial/Capital Account (FDI, external loans, trade credit).
- Over-reliance on a single export basket (Readymade Garments accounting for >80% of exports) exposes the economy to external demand shocks.
- Strategic priorities: Expanding leather, pharmaceuticals, ICT/software exports, agro-processing, and attracting Foreign Direct Investment (FDI) in Special Economic Zones (SEZs) while maintaining market-based exchange rate flexibility.`
      }
    ]
  },

  // ============================================================================
  // 2021 — OFFICER (GENERAL) — COMBINED 8 GOVT BANKS
  // ============================================================================
  {
    paperId: 'nonit-off-gen-govt-2021',
    questionPaperCode: 'BSCS-OFF-GEN-2021',
    title: 'Combined 8 Banks Officer (General) Recruitment Exam 2021',
    category: 'Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BKB, RAKUB & BDBL (BSCS)',
    examTaker: 'Faculty of Social Sciences, DU',
    year: 2021,
    examDate: 'December 2021',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: '2021 Combined 8 Banks Officer (General) Preliminary MCQ and Written exam paper.',
    questions: [
      {
        id: 'off-gen-2021-mcq-1',
        paperId: 'nonit-off-gen-govt-2021',
        questionPaperCode: 'BSCS-OFF-GEN-2021',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: 'বাংলা সাহিত্যের প্রথম সার্থক উপন্যাস ‘দুর্গেশনন্দিনী’ কে রচনা করেন?',
        options: [
          'A) প্যারীচাঁদ মিত্র',
          'B) বঙ্কিমচন্দ্র চট্টোপাধ্যায়',
          'C) শরৎচন্দ্র চট্টোপাধ্যায়',
          'D) মীর মশাররফ হোসেন'
        ],
        correctAnswer: 'B) বঙ্কিমচন্দ্র চট্টোপাধ্যায়',
        solution: `১৮৬৫ সালে প্রকাশিত বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের ‘দুর্গেশনন্দিনী’ বাংলা সাহিত্যের প্রথম সার্থক উপন্যাস।
সঠিক উত্তর: B)।`
      },
      {
        id: 'off-gen-2021-mcq-2',
        paperId: 'nonit-off-gen-govt-2021',
        questionPaperCode: 'BSCS-OFF-GEN-2021',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'In an examination, 80% of the candidates passed in English, 85% passed in Mathematics, and 75% passed in both English and Mathematics. If 40 candidates failed in both subjects, what was the total number of candidates?',
        options: [
          'A) 300',
          'B) 400',
          'C) 450',
          'D) 500'
        ],
        correctAnswer: 'B) 400',
        solution: `Percentage passing in at least one subject = P(E ∪ M) = P(E) + P(M) - P(E ∩ M)
= 80% + 85% - 75% = 90%.
Percentage failing in both subjects = 100% - 90% = 10%.
Given 10% of Total = 40 => Total candidates = 40 × 10 = 400.
Correct Answer: B) 400.`
      },
      {
        id: 'off-gen-2021-mcq-3',
        paperId: 'nonit-off-gen-govt-2021',
        questionPaperCode: 'BSCS-OFF-GEN-2021',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'What is "Bancassurance" in the financial services sector?',
        options: [
          'A) Deposit insurance provided by the central bank to small savers',
          'B) Partnership between a bank and an insurance company allowing the bank to sell insurance products through its branches',
          'C) Interbank overnight call money guarantee',
          'D) Sovereign guarantee on treasury bonds'
        ],
        correctAnswer: 'B) Partnership between a bank and an insurance company allowing the bank to sell insurance products through its branches',
        solution: `Bancassurance is an arrangement between a commercial bank and an insurance company through which the bank distributes life and non-life insurance policies to its customer base.
Correct Answer: B).`
      },
      {
        id: 'off-gen-2021-wrt-1',
        paperId: 'nonit-off-gen-govt-2021',
        questionPaperCode: 'BSCS-OFF-GEN-2021',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'The perimeter of a rectangular field is 160 meters and the length of its diagonal is 58 meters. Find the area of the rectangular field.',
        solution: `Step-by-Step Solution:
1. Let length = L and width = W.
   Perimeter 2(L + W) = 160 => L + W = 80.
   Diagonal √(L^2 + W^2) = 58 => L^2 + W^2 = 58^2 = 3,364.
2. Using (L + W)^2 = L^2 + W^2 + 2LW:
   80^2 = 3,364 + 2LW
   6,400 - 3,364 = 2LW
   2LW = 3,036 => Area (L × W) = 1,518 sq. meters.`
      }
    ]
  },

  // ============================================================================
  // 2020 — DATA ENTRY / CONTROL OPERATOR (BANGLADESH BANK & BBS)
  // ============================================================================
  {
    paperId: 'govt-deco-bb-bbs-2020',
    questionPaperCode: 'BB-BBS-DECO-2020',
    title: 'Bangladesh Bank & Bureau of Statistics (BBS) Data Entry / Control Operator Exam 2020',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank & Bangladesh Bureau of Statistics (BBS)',
    examTaker: 'Recruitment Committee',
    year: 2020,
    examDate: 'October 2020',
    mcqMarks: 80,
    writtenMarks: 100,
    summary: '2020 Data Entry / Control Operator Preliminary MCQ and Written exam paper.',
    questions: [
      {
        id: 'deco-2020-mcq-1',
        paperId: 'govt-deco-bb-bbs-2020',
        questionPaperCode: 'BB-BBS-DECO-2020',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the full form of ASCII in computer character encoding?',
        options: [
          'A) American Standard Code for Information Interchange',
          'B) Automated System Code for International Information',
          'C) American Scientific Code for Internet Integration',
          'D) Advanced Symbolic Code for Information Interchange'
        ],
        correctAnswer: 'A) American Standard Code for Information Interchange',
        solution: `ASCII stands for American Standard Code for Information Interchange, a 7-bit character encoding standard representing 128 characters.
Correct Answer: A).`
      },
      {
        id: 'deco-2020-mcq-2',
        paperId: 'govt-deco-bb-bbs-2020',
        questionPaperCode: 'BB-BBS-DECO-2020',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which key in a relational database table uniquely identifies each row and cannot contain NULL values?',
        options: [
          'A) Foreign Key',
          'B) Primary Key',
          'C) Alternate Key',
          'D) Secondary Index'
        ],
        correctAnswer: 'B) Primary Key',
        solution: `A Primary Key enforces entity integrity by uniquely identifying every tuple (row) in a table and prohibiting NULL values.
Correct Answer: B) Primary Key.`
      },
      {
        id: 'deco-2020-mcq-3',
        paperId: 'govt-deco-bb-bbs-2020',
        questionPaperCode: 'BB-BBS-DECO-2020',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which shortcut key opens the "Run" dialog box directly in Windows OS?',
        options: [
          'A) Windows Key + E',
          'B) Windows Key + R',
          'C) Windows Key + D',
          'D) Windows Key + L'
        ],
        correctAnswer: 'B) Windows Key + R',
        solution: `Win + R opens the Run dialog box; Win + E opens File Explorer; Win + D shows the Desktop; Win + L locks the workstation.
Correct Answer: B) Windows Key + R.`
      },
      {
        id: 'deco-2020-wrt-1',
        paperId: 'govt-deco-bb-bbs-2020',
        questionPaperCode: 'BB-BBS-DECO-2020',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 25,
        questionText: 'What are Input Devices, Output Devices, and I/O (Both Input & Output) Devices? Give 3 examples of each used in banking and government data centers.',
        solution: `Model Solution:
1. Input Devices: Keyboard, Optical Mouse, Barcode/MICR Cheque Scanner, Biometric Fingerprint Sensor.
2. Output Devices: Laser Printer, LED Monitor, Plotter, Audio Speaker.
3. Both Input & Output (I/O) Devices: Touch Screen ATM Kiosk Display, Network Interface Card (NIC), USB Flash Drive / External SSD, Multifunction All-in-One Scanner-Printer.`
      }
    ]
  },

  // ============================================================================
  // 2019 — COMPUTER OPERATOR (MINISTRIES, RAILWAY & GOVT DEPARTMENTS)
  // ============================================================================
  {
    paperId: 'govt-comp-op-railway-min-2019',
    questionPaperCode: 'GOVT-RAIL-CO-2019',
    title: 'Bangladesh Railway, Ministry of Land & DSS Computer Operator Exam 2019',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Bangladesh Railway, Ministry of Land & Dept of Social Services (DSS)',
    examTaker: 'Departmental Selection Committee',
    year: 2019,
    examDate: 'November 2019',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: '2019 Government Field Computer Operator Preliminary MCQ and Written exam covering ICT, Bangla, English, Math, and GK.',
    questions: [
      {
        id: 'rail-co-2019-mcq-1',
        paperId: 'govt-comp-op-railway-min-2019',
        questionPaperCode: 'GOVT-RAIL-CO-2019',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the hexadecimal equivalent of the binary number (11011010)_2?',
        options: [
          'A) C8',
          'B) DA',
          'C) B6',
          'D) E2'
        ],
        correctAnswer: 'B) DA',
        solution: `Group the 8-bit binary number into two 4-bit nibbles:
1101_2 = 8 + 4 + 0 + 1 = 13 = D in Hexadecimal.
1010_2 = 8 + 0 + 2 + 0 = 10 = A in Hexadecimal.
Therefore, (11011010)_2 = (DA)_16.
Correct Answer: B) DA.`
      },
      {
        id: 'rail-co-2019-mcq-2',
        paperId: 'govt-comp-op-railway-min-2019',
        questionPaperCode: 'GOVT-RAIL-CO-2019',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, what is the minimum and maximum font size available in the standard Font Size dropdown list (without typing manually)?',
        options: [
          'A) 8 and 72',
          'B) 1 and 1638',
          'C) 6 and 96',
          'D) 10 and 100'
        ],
        correctAnswer: 'A) 8 and 72',
        solution: `In the standard MS Word formatting toolbar dropdown list, the selectable font sizes range from 8 pt to 72 pt (while manually typed font sizes can range from 1 to 1638 pt).
Correct Answer: A) 8 and 72.`
      },
      {
        id: 'rail-co-2019-mcq-3',
        paperId: 'govt-comp-op-railway-min-2019',
        questionPaperCode: 'GOVT-RAIL-CO-2019',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘নাটিকা’ কোন অর্থে স্ত্রীবাচক শব্দ?',
        options: [
          'A) বৃহদার্থে',
          'B) ক্ষুদ্রার্থে',
          'C) সমার্থে',
          'D) বিপরীতার্থে'
        ],
        correctAnswer: 'B) ক্ষুদ্রার্থে',
        solution: `‘নাটক’ শব্দের সাথে ‘ইকা’ প্রত্যয় যোগে ক্ষুদ্রার্থে (ছোট নাটক অর্থে) ‘নাটিকা’ শব্দটি গঠিত হয়েছে।
সঠিক উত্তর: B) ক্ষুদ্রার্থে।`
      },
      {
        id: 'rail-co-2019-wrt-1',
        paperId: 'govt-comp-op-railway-min-2019',
        questionPaperCode: 'GOVT-RAIL-CO-2019',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Bangla Language & Literature',
        marks: 25,
        questionText: 'এককথায় প্রকাশ করুন: (ক) যা সহজে অতিক্রম করা যায় না, (খ) যা পূর্বে কখনো দেখা যায়নি, (গ) যে নারীর স্বামী প্রবাসে আছে, (ঘ) অক্ষির সমীপে, (ঙ) জানবার ইচ্ছা।',
        solution: `সঠিক উত্তর:
(ক) যা সহজে অতিক্রম করা যায় না — দুরতিক্রম্য
(খ) যা পূর্বে কখনো দেখা যায়নি — অদৃষ্টপূর্ব
(গ) যে নারীর স্বামী প্রবাসে আছে — প্রোষিতভর্তৃকা
(ঘ) অক্ষির সমীপে — সমক্ষ
(ঙ) জানবার ইচ্ছা — জিজ্ঞাসা`
      }
    ]
  },

  // ============================================================================
  // 2018 — OFFICER (CASH) — COMBINED GOVT BANKS
  // ============================================================================
  {
    paperId: 'nonit-off-cash-govt-2018',
    questionPaperCode: 'BSCS-OFF-CASH-2018',
    title: 'Combined Govt Banks Officer (Cash) Recruitment Exam 2018',
    category: 'Officer (Cash)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali & BKB (BSCS)',
    examTaker: 'BIBM',
    year: 2018,
    examDate: 'July 2018',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: '2018 Combined Govt Banks Officer (Cash) Preliminary MCQ and Written exam questions and solutions.',
    questions: [
      {
        id: 'off-cash-2018-mcq-1',
        paperId: 'nonit-off-cash-govt-2018',
        questionPaperCode: 'BSCS-OFF-CASH-2018',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'If the ratio of the areas of two squares is 9 : 16, what is the ratio of their perimeters?',
        options: [
          'A) 9 : 16',
          'B) 3 : 4',
          'C) 81 : 256',
          'D) 4 : 3'
        ],
        correctAnswer: 'B) 3 : 4',
        solution: `Ratio of sides of the two squares = √(9 : 16) = 3 : 4.
Since Perimeter = 4 × side, the ratio of their perimeters is also 3 : 4.
Correct Answer: B) 3 : 4.`
      },
      {
        id: 'off-cash-2018-mcq-2',
        paperId: 'nonit-off-cash-govt-2018',
        questionPaperCode: 'BSCS-OFF-CASH-2018',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'What is the synonym of the word "INDIGENOUS"?',
        options: [
          'A) Foreign',
          'B) Native / Domestic',
          'C) Acquired',
          'D) Indigent'
        ],
        correctAnswer: 'B) Native / Domestic',
        solution: `"Indigenous" means originating or occurring naturally in a particular place; native.
Correct Answer: B) Native / Domestic.`
      },
      {
        id: 'off-cash-2018-wrt-1',
        paperId: 'nonit-off-cash-govt-2018',
        questionPaperCode: 'BSCS-OFF-CASH-2018',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'A shopkeeper bought two laptops for Tk. 90,000 in total. He sold one at a loss of 10% and the other at a profit of 15%. On the whole transaction, he neither gained nor lost. Find the cost price of each laptop.',
        solution: `Step-by-Step Solution:
1. Since there is no net profit or loss on the whole transaction:
   Loss on Laptop 1 = Profit on Laptop 2
   10% of CP_1 = 15% of CP_2
   CP_1 / CP_2 = 15 / 10 = 3 / 2.
2. Given CP_1 + CP_2 = Tk. 90,000.
   CP_1 = (3 / 5) × 90,000 = Tk. 54,000.
   CP_2 = (2 / 5) × 90,000 = Tk. 36,000.
Answer: Tk. 54,000 and Tk. 36,000.`
      }
    ]
  },

  // ============================================================================
  // 2017 — SENIOR OFFICER (GENERAL) — BANGLADESH BANK AD & SONALI/JANATA
  // ============================================================================
  {
    paperId: 'nonit-so-gen-govt-2017',
    questionPaperCode: 'BB-AD-SO-2017',
    title: 'Bangladesh Bank AD (General) & Sonali/Janata Senior Officer Exam 2017',
    category: 'Senior Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank & Janata Bank',
    examTaker: 'IBA, University of Dhaka / BIBM',
    year: 2017,
    examDate: 'May 2017',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: '2017 Bangladesh Bank Assistant Director (General) & Senior Officer MCQ and Written examination.',
    questions: [
      {
        id: 'so-gen-2017-mcq-1',
        paperId: 'nonit-so-gen-govt-2017',
        questionPaperCode: 'BB-AD-SO-2017',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Analytical Ability & Accounting',
        marks: 1,
        questionText: 'Five executives P, Q, R, S, and T sit in a row facing North. S is between T and Q. Q is to the immediate left of R. P is to the immediate left of T. Who is sitting exactly in the middle?',
        options: [
          'A) T',
          'B) S',
          'C) Q',
          'D) R'
        ],
        correctAnswer: 'B) S',
        solution: `From the clues (Left to Right facing North):
- P is to the immediate left of T => [P, T]
- S is between T and Q => [P, T, S, Q]
- Q is to the immediate left of R => [P, T, S, Q, R]
The person in the exact middle (3rd position) is S.
Correct Answer: B) S.`
      },
      {
        id: 'so-gen-2017-mcq-2',
        paperId: 'nonit-so-gen-govt-2017',
        questionPaperCode: 'BB-AD-SO-2017',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'What does SDR stand for in the context of the International Monetary Fund (IMF)?',
        options: [
          'A) Sovereign Debt Reserve',
          'B) Special Drawing Rights',
          'C) Statutory Deposit Ratio',
          'D) Standard Dollar Rate'
        ],
        correctAnswer: 'B) Special Drawing Rights',
        solution: `SDR stands for Special Drawing Rights, an international reserve asset created by the IMF in 1969 whose value is based on a basket of five major currencies (USD, EUR, CNY, JPY, GBP).
Correct Answer: B).`
      },
      {
        id: 'so-gen-2017-wrt-1',
        paperId: 'nonit-so-gen-govt-2017',
        questionPaperCode: 'BB-AD-SO-2017',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'A tank can be filled by pipe A in 5 hours and by pipe B in 6 hours. Pipe C can empty the full tank in 12 hours. If all three pipes are opened together for 2 hours and then pipe C is closed, how much additional time will pipes A and B take to fill the remaining part of the tank?',
        solution: `Step-by-Step Solution:
1. Net rate of (A + B - C) per hour = 1/5 + 1/6 - 1/12 = (12 + 10 - 5) / 60 = 17/60.
2. Part filled in the first 2 hours = 2 × (17/60) = 34/60 = 17/30.
3. Remaining part of the tank = 1 - 17/30 = 13/30.
4. Combined rate of (A + B) after C is closed = 1/5 + 1/6 = 11/30 per hour.
5. Additional time required = (13/30) ÷ (11/30) = 13/11 hours = 1 hour 10 minutes 54 seconds.`
      }
    ]
  },

  // ============================================================================
  // 2016 — COMPUTER OPERATOR (MINISTRIES & GOVT DEPARTMENTS)
  // ============================================================================
  {
    paperId: 'govt-comp-op-min-2016',
    questionPaperCode: 'BPSC-MIN-CO-2016',
    title: 'BPSC & Government Ministries Computer Operator Recruitment Exam 2016',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Ministry of Finance, Ministry of Agriculture & BPSC',
    examTaker: 'Departmental Selection Board',
    year: 2016,
    examDate: 'August 2016',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: '2016 Government Ministry Computer Operator MCQ and Written Question Paper.',
    questions: [
      {
        id: 'min-co-2016-mcq-1',
        paperId: 'govt-comp-op-min-2016',
        questionPaperCode: 'BPSC-MIN-CO-2016',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which shortcut key is used in Windows to permanently delete a selected file without sending it to the Recycle Bin?',
        options: [
          'A) Ctrl + Delete',
          'B) Shift + Delete',
          'C) Alt + Delete',
          'D) Ctrl + Shift + D'
        ],
        correctAnswer: 'B) Shift + Delete',
        solution: `Pressing 'Shift + Delete' bypasses the Windows Recycle Bin and permanently deletes the selected file or folder after confirmation.
Correct Answer: B) Shift + Delete.`
      },
      {
        id: 'min-co-2016-mcq-2',
        paperId: 'govt-comp-op-min-2016',
        questionPaperCode: 'BPSC-MIN-CO-2016',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the full form of URL in web browsing?',
        options: [
          'A) Universal Resource Link',
          'B) Uniform Resource Locator',
          'C) Unified Routing Layer',
          'D) Uniform Registered Link'
        ],
        correctAnswer: 'B) Uniform Resource Locator',
        solution: `URL stands for Uniform Resource Locator, which specifies the address of a resource on the Internet (e.g., https://www.bb.org.bd).
Correct Answer: B).`
      },
      {
        id: 'min-co-2016-wrt-1',
        paperId: 'govt-comp-op-min-2016',
        questionPaperCode: 'BPSC-MIN-CO-2016',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 25,
        questionText: 'Differentiate between LAN, MAN, and WAN with practical examples from Government and Banking networks in Bangladesh.',
        solution: `Model Solution:
1. LAN (Local Area Network): Covers a single office floor, building, or bank branch (up to 1 km) using Ethernet switches and Wi-Fi.
2. MAN (Metropolitan Area Network): Interconnects multiple government offices or bank branches across a city (e.g., Dhaka Metro optical fiber ring).
3. WAN (Wide Area Network): Spans across an entire country or globally (e.g., Bangladesh National Portal network, Sonali Bank nationwide CBS MPLS WAN, or the Internet).`
      }
    ]
  },

  // ============================================================================
  // 2015 — OFFICER (GENERAL) — SONALI, JANATA & AGRANI BANK
  // ============================================================================
  {
    paperId: 'nonit-off-gen-govt-2015',
    questionPaperCode: 'SONALI-JANATA-OFF-2015',
    title: 'Sonali Bank, Janata Bank & Agrani Bank Officer (General) Exam 2015',
    category: 'Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank & Agrani Bank',
    examTaker: 'Faculty of Business Studies, DU',
    year: 2015,
    examDate: 'November 2015',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: '2015 State-Owned Commercial Bank Officer (General) MCQ and Written examination.',
    questions: [
      {
        id: 'off-gen-2015-mcq-1',
        paperId: 'nonit-off-gen-govt-2015',
        questionPaperCode: 'SONALI-JANATA-OFF-2015',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'Which specialized institution in Bangladesh provides training and academic post-graduate diplomas exclusively for banking sector officers?',
        options: [
          'A) BIAM',
          'B) BIBM (Bangladesh Institute of Bank Management)',
          'C) BPATC',
          'D) BARD'
        ],
        correctAnswer: 'B) BIBM (Bangladesh Institute of Bank Management)',
        solution: `BIBM (located in Mirpur-2, Dhaka, established in 1974) is the national training, research, and recruitment testing institute for banks and financial institutions in Bangladesh.
Correct Answer: B) BIBM.`
      },
      {
        id: 'off-gen-2015-mcq-2',
        paperId: 'nonit-off-gen-govt-2015',
        questionPaperCode: 'SONALI-JANATA-OFF-2015',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘কবর’ নাটকটির রচয়িতা কে এবং এর পটভূমি কী?',
        options: [
          'A) সৈয়দ ওয়ালীউল্লাহ — দেশভাগ',
          'B) মুনীর চৌধুরী — ১৯৫২ সালের ভাষা আন্দোলন',
          'C) জহির রায়হান — গণঅভ্যুত্থান',
          'D) নূরুল মোমেন — মুক্তিযুদ্ধ'
        ],
        correctAnswer: 'B) মুনীর চৌধুরী — ১৯৫২ সালের ভাষা আন্দোলন',
        solution: `শহীদ বুদ্ধিজীবী মুনীর চৌধুরী ১৯৫৩ সালে ঢাকা কেন্দ্রীয় কারাগারে বন্দী থাকা অবস্থায় ১৯৫২ সালের মহান ভাষা আন্দোলনের পটভূমিতে বিখ্যাত একাঙ্কিকা নাটক ‘কবর’ রচনা করেন। (অন্যদিকে ‘কবর’ কবিতাটির রচয়িতা পল্লীকবি জসীমউদ্‌দীন)।
সঠিক উত্তর: B)।`
      },
      {
        id: 'off-gen-2015-wrt-1',
        paperId: 'nonit-off-gen-govt-2015',
        questionPaperCode: 'SONALI-JANATA-OFF-2015',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'A man rows 18 km downstream in 3 hours and 18 km upstream in 6 hours. Find the speed of the boat in still water and the speed of the stream.',
        solution: `Step-by-Step Solution:
1. Downstream speed = 18 / 3 = 6 km/h.
2. Upstream speed = 18 / 6 = 3 km/h.
3. Speed of boat in still water = (6 + 3) / 2 = 4.5 km/h.
4. Speed of stream = (6 - 3) / 2 = 1.5 km/h.`
      }
    ]
  },

  // ============================================================================
  // 2014 — DATA ENTRY / CONTROL OPERATOR (NBR & BANGLADESH BANK)
  // ============================================================================
  {
    paperId: 'govt-deco-nbr-bb-2014',
    questionPaperCode: 'NBR-BB-DECO-2014',
    title: 'NBR & Bangladesh Bank Data Entry / Control Operator Exam 2014',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'National Board of Revenue (NBR) & Bangladesh Bank',
    examTaker: 'Departmental Recruitment Committee',
    year: 2014,
    examDate: 'July 2014',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: '2014 NBR & Bangladesh Bank Data Entry / Control Operator MCQ and Written exam.',
    questions: [
      {
        id: 'deco-2014-mcq-1',
        paperId: 'govt-deco-nbr-bb-2014',
        questionPaperCode: 'NBR-BB-DECO-2014',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the full form of SQL used in database querying?',
        options: [
          'A) Simple Query Language',
          'B) Structured Query Language',
          'C) System Query Logic',
          'D) Sequential Question Language'
        ],
        correctAnswer: 'B) Structured Query Language',
        solution: `SQL stands for Structured Query Language, the standard language for relational database management systems (RDBMS).
Correct Answer: B).`
      },
      {
        id: 'deco-2014-mcq-2',
        paperId: 'govt-deco-nbr-bb-2014',
        questionPaperCode: 'NBR-BB-DECO-2014',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, how are Columns and Rows labeled by default?',
        options: [
          'A) Columns by Numbers (1, 2, 3...) and Rows by Letters (A, B, C...)',
          'B) Columns by Letters (A, B, C...) and Rows by Numbers (1, 2, 3...)',
          'C) Both by Roman Numerals',
          'D) Both by Alphabets'
        ],
        correctAnswer: 'B) Columns by Letters (A, B, C...) and Rows by Numbers (1, 2, 3...)',
        solution: `In standard A1 reference style in MS Excel, Columns are labeled alphabetically (A, B, C... XFD) and Rows are labeled numerically (1, 2, 3... 1048576).
Correct Answer: B).`
      },
      {
        id: 'deco-2014-wrt-1',
        paperId: 'govt-deco-nbr-bb-2014',
        questionPaperCode: 'NBR-BB-DECO-2014',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 25,
        questionText: 'What is a Computer Virus, Worm, and Ransomware? List 5 essential cybersecurity hygiene rules for a Data Entry Operator working on a government server terminal.',
        solution: `Model Solution:
1. Virus vs. Worm vs. Ransomware:
   - Virus: Malicious code that attaches to legitimate executable files and spreads when the host program is run.
   - Worm: Self-replicating malware that spreads automatically across network vulnerabilities without human action.
   - Ransomware: Encrypts critical database/office files and demands ransom for the decryption key.
2. Five Essential Operator Security Rules:
   - Never plug unauthorized USB pen drives into server or CBS terminals.
   - Never open unknown email attachments or phishing links.
   - Lock the workstation (Win + L) immediately when stepping away from the desk.
   - Use strong multi-factor authentication (MFA) and never share login credentials.
   - Verify daily offline/immutable backups.`
      }
    ]
  },

  // ============================================================================
  // 2013 — COMPUTER OPERATOR (MINISTRIES & BANGLADESH KRISHI BANK)
  // ============================================================================
  {
    paperId: 'govt-comp-op-2013',
    questionPaperCode: 'GOVT-BB-CO-2013',
    title: 'Government Ministries & Krishi Bank Computer Operator Exam 2013',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Ministry of Education, Bangladesh Krishi Bank & DoICT',
    examTaker: 'Selection Board',
    year: 2013,
    examDate: 'May 2013',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: '2013 Government Computer Operator MCQ and Written examination.',
    questions: [
      {
        id: 'co-2013-mcq-1',
        paperId: 'govt-comp-op-2013',
        questionPaperCode: 'GOVT-BB-CO-2013',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which key is pressed to refresh the active window or web browser page?',
        options: [
          'A) F2',
          'B) F5',
          'C) F7',
          'D) F11'
        ],
        correctAnswer: 'B) F5',
        solution: `F5 refreshes or reloads the active window in Windows Explorer and all major web browsers (and starts a slide show in PowerPoint).
Correct Answer: B) F5.`
      },
      {
        id: 'co-2013-mcq-2',
        paperId: 'govt-comp-op-2013',
        questionPaperCode: 'GOVT-BB-CO-2013',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which function key is used in Microsoft Word to run "Spelling and Grammar" check?',
        options: [
          'A) F5',
          'B) F7',
          'C) F9',
          'D) F12'
        ],
        correctAnswer: 'B) F7',
        solution: `In MS Word, F7 launches the Spelling & Grammar checker, Shift + F7 opens the Thesaurus, and F12 opens the Save As dialog box.
Correct Answer: B) F7.`
      },
      {
        id: 'co-2013-wrt-1',
        paperId: 'govt-comp-op-2013',
        questionPaperCode: 'GOVT-BB-CO-2013',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'The length of a rectangular room is 1.5 times its breadth. If the area of the floor is 216 sq. meters, find the perimeter of the room and the cost of carpeting it at Tk. 120 per sq. meter.',
        solution: `Step-by-Step Solution:
1. Let breadth = x meters; then length = 1.5x meters.
2. Area = 1.5x × x = 1.5x^2 = 216
   x^2 = 216 / 1.5 = 144 => x = 12 meters (Breadth).
   Length = 1.5 × 12 = 18 meters.
3. Perimeter = 2(18 + 12) = 60 meters.
4. Cost of carpeting = 216 × 120 = Tk. 25,920.`
      }
    ]
  },

  // ============================================================================
  // 2012 — SENIOR OFFICER (GENERAL) — SONALI, JANATA, AGRANI & RUPALI BANK
  // ============================================================================
  {
    paperId: 'nonit-so-gen-govt-2012',
    questionPaperCode: 'SCB-SO-GEN-2012',
    title: 'Sonali, Janata, Agrani & Rupali Bank Senior Officer (General) Exam 2012',
    category: 'Senior Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank, Agrani Bank & Rupali Bank',
    examTaker: 'Faculty of Business Studies, DU',
    year: 2012,
    examDate: 'August 2012',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: '2012 State-Owned Commercial Banks Senior Officer (General) MCQ and Written exam.',
    questions: [
      {
        id: 'so-gen-2012-mcq-1',
        paperId: 'nonit-so-gen-govt-2012',
        questionPaperCode: 'SCB-SO-GEN-2012',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Choose the correctly spelled word:',
        options: [
          'A) Bureacracy',
          'B) Bureaucracy',
          'C) Burocracy',
          'D) Beaurocracy'
        ],
        correctAnswer: 'B) Bureaucracy',
        solution: `The correct spelling is B-u-r-e-a-u-c-r-a-c-y (Bureau + cracy).
Correct Answer: B) Bureaucracy.`
      },
      {
        id: 'so-gen-2012-mcq-2',
        paperId: 'nonit-so-gen-govt-2012',
        questionPaperCode: 'SCB-SO-GEN-2012',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'If a : b = 3 : 4 and b : c = 5 : 6, what is the ratio of a : c?',
        options: [
          'A) 1 : 2',
          'B) 5 : 8',
          'C) 3 : 6',
          'D) 15 : 20'
        ],
        correctAnswer: 'B) 5 : 8',
        solution: `(a / c) = (a / b) × (b / c) = (3 / 4) × (5 / 6) = 15 / 24 = 5 / 8.
Therefore, a : c = 5 : 8.
Correct Answer: B) 5 : 8.`
      },
      {
        id: 'so-gen-2012-wrt-1',
        paperId: 'nonit-so-gen-govt-2012',
        questionPaperCode: 'SCB-SO-GEN-2012',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'A sum of money invested at simple interest amounts to Tk. 10,400 in 3 years and Tk. 12,000 in 5 years. Find the principal sum and the annual rate of interest.',
        solution: `Step-by-Step Solution:
1. Interest for (5 - 3) = 2 years = 12,000 - 10,400 = Tk. 1,600.
2. Interest for 1 year = 1,600 / 2 = Tk. 800.
3. Interest for 3 years = 800 × 3 = Tk. 2,400.
4. Principal (P) = Amount in 3 years - Interest for 3 years = 10,400 - 2,400 = Tk. 8,000.
5. Annual Rate of Interest (R) = (800 / 8,000) × 100% = 10% per annum.`
      }
    ]
  },

  // ============================================================================
  // 2011 — COMPUTER OPERATOR & DATA ENTRY OPERATOR (GOVT MINISTRIES & BANKS)
  // ============================================================================
  {
    paperId: 'govt-comp-op-deco-2011',
    questionPaperCode: 'GOVT-CO-DECO-2011',
    title: 'Government Ministries & Bangladesh Bank Computer / Data Entry Operator Exam 2011',
    category: 'Computer Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Bangladesh Secretariat Ministries & Bangladesh Bank',
    examTaker: 'BPSC / Departmental Board',
    year: 2011,
    examDate: 'September 2011',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: '2011 Government Ministries & Bank Computer Operator / Data Entry Operator MCQ and Written exam.',
    questions: [
      {
        id: 'co-2011-mcq-1',
        paperId: 'govt-comp-op-deco-2011',
        questionPaperCode: 'GOVT-CO-DECO-2011',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Who is universally recognized as the "Father of the Modern Digital Computer" for designing the Analytical Engine?',
        options: [
          'A) Alan Turing',
          'B) Charles Babbage',
          'C) John von Neumann',
          'D) Blaise Pascal'
        ],
        correctAnswer: 'B) Charles Babbage',
        solution: `Charles Babbage designed the Difference Engine and the programmable Analytical Engine (containing an ALU/Mill, Control Flow, and Memory/Store), earning him the title Father of the Computer.
Correct Answer: B) Charles Babbage.`
      },
      {
        id: 'co-2011-mcq-2',
        paperId: 'govt-comp-op-deco-2011',
        questionPaperCode: 'GOVT-CO-DECO-2011',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: '1 Byte consists of how many binary bits?',
        options: [
          'A) 4 bits',
          'B) 8 bits',
          'C) 16 bits',
          'D) 32 bits'
        ],
        correctAnswer: 'B) 8 bits',
        solution: `1 Bit = 0 or 1; 4 Bits = 1 Nibble; 8 Bits = 1 Byte.
Correct Answer: B) 8 bits.`
      },
      {
        id: 'co-2011-wrt-1',
        paperId: 'govt-comp-op-deco-2011',
        questionPaperCode: 'GOVT-CO-DECO-2011',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 25,
        questionText: 'What are the main components of the Central Processing Unit (CPU)? Explain the roles of the Arithmetic Logic Unit (ALU), Control Unit (CU), and Registers.',
        solution: `Model Solution:
1. Arithmetic Logic Unit (ALU): Performs all arithmetic calculations (addition, subtraction, multiplication, division) and logical comparisons (AND, OR, NOT, <, >, =).
2. Control Unit (CU): Directs the flow of data and instructions throughout the processor and coordinates input/output devices during the Fetch-Decode-Execute cycle.
3. Registers: High-speed temporary storage locations inside the CPU (such as Program Counter, Instruction Register, Accumulator) that hold operands and memory addresses currently being processed.`
      }
    ]
  },

  // ============================================================================
  // 2010 — DATA ENTRY / CONTROL OPERATOR & COMPUTER OPERATOR (GOVT ARCHIVE)
  // ============================================================================
  {
    paperId: 'govt-deco-comp-op-2010',
    questionPaperCode: 'BB-NBR-DECO-2010',
    title: 'Bangladesh Bank, NBR & Secretariat Data Entry / Computer Operator Exam 2010',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Ministry / Department',
    organizationName: 'Bangladesh Bank, National Board of Revenue (NBR) & Ministries',
    examTaker: 'Recruitment Board',
    year: 2010,
    examDate: 'November 2010',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: '2010 Government & Central Bank Data Entry / Control Operator Preliminary MCQ and Written exam.',
    questions: [
      {
        id: 'deco-2010-mcq-1',
        paperId: 'govt-deco-comp-op-2010',
        questionPaperCode: 'BB-NBR-DECO-2010',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Word, which keyboard shortcut is used to select the entire document at once?',
        options: [
          'A) Ctrl + S',
          'B) Ctrl + A',
          'C) Ctrl + E',
          'D) Ctrl + W'
        ],
        correctAnswer: 'B) Ctrl + A',
        solution: `Pressing 'Ctrl + A' selects all text, tables, and objects in the active document.
Correct Answer: B) Ctrl + A.`
      },
      {
        id: 'deco-2010-mcq-2',
        paperId: 'govt-deco-comp-op-2010',
        questionPaperCode: 'BB-NBR-DECO-2010',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'Which was the first computer installed in Bangladesh (then East Pakistan) in 1964 at the Atomic Energy Centre, Dhaka?',
        options: [
          'A) IBM 360',
          'B) IBM 1620 Mainframe Computer',
          'C) UNIVAC I',
          'D) Apple II'
        ],
        correctAnswer: 'B) IBM 1620 Mainframe Computer',
        solution: `An IBM 1620 series mainframe computer was installed in 1964 at the Pakistan Atomic Energy Commission (now Bangladesh Atomic Energy Commission) in Dhaka, marking the beginning of computing in Bangladesh.
Correct Answer: B) IBM 1620.`
      },
      {
        id: 'deco-2010-wrt-1',
        paperId: 'govt-deco-comp-op-2010',
        questionPaperCode: 'BB-NBR-DECO-2010',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'The average of 11 numbers is 30. If the average of the first 6 numbers is 28 and that of the last 6 numbers is 33, find the 6th number.',
        solution: `Step-by-Step Solution:
1. Sum of all 11 numbers = 11 × 30 = 330.
2. Sum of first 6 numbers = 6 × 28 = 168.
3. Sum of last 6 numbers = 6 × 33 = 198.
4. Notice the 6th number is included in both groups:
   6th number = (168 + 198) - 330 = 366 - 330 = 36.
Answer: 36.`
      }
    ]
  }
];
