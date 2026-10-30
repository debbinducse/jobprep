import { govtAndBankNonItArchivePapers } from './govtNonItMcqArchive';
import { govtNonItMcqMasterPapers } from './govtNonItMcqMasterBank';
import { computerAndDataEntryPapers2010To2026 } from './computerAndDataEntryPapers2010To2026';
import { officerCashPapers2010To2026 } from './officerCashPapers2010To2026';
import { officerGeneralPapers2010To2026 } from './officerGeneralPapers2010To2026';
import { seniorOfficerGeneralPapers2010To2026 } from './seniorOfficerGeneralPapers2010To2026';

export type NonItJobCategory =
  | 'Senior Officer (General)'
  | 'Officer (General)'
  | 'Officer (Cash)'
  | 'Data Entry / Control Operator'
  | 'Computer Operator';

export type NonItOrgType =
  | 'Government Bank'
  | 'Government Ministry / Department'
  | 'Private Bank';

export type NonItQuestionType = 'MCQ' | 'Written';

export type NonItSubject =
  | 'Mathematics & Quantitative Aptitude'
  | 'English Language & Focus Writing'
  | 'Bangla Language & Literature'
  | 'General Knowledge & Banking Economy'
  | 'Computer & Basic ICT'
  | 'Translation (English ↔ Bangla)'
  | 'Analytical Ability & Accounting';

export interface NonItQuestionItem {
  id: string;
  paperId: string;
  questionPaperCode: string;
  questionNo: string;
  questionType: NonItQuestionType;
  subject: NonItSubject;
  marks: number;
  questionText: string;
  options?: string[]; // Present for MCQ questions (A, B, C, D)
  correctAnswer?: string; // Present for MCQ questions
  solution: string; // Detailed step-by-step model solution
}

export interface NonItExamPaper {
  paperId: string;
  questionPaperCode: string;
  title: string;
  category: NonItJobCategory;
  orgType: NonItOrgType;
  organizationName: string;
  examTaker: string;
  year: number;
  examDate: string;
  mcqMarks: number;
  writtenMarks: number;
  summary: string;
  questions: NonItQuestionItem[];
}

export const nonItJobCategories: NonItJobCategory[] = [
  'Senior Officer (General)',
  'Officer (General)',
  'Officer (Cash)',
];

export const itOperatorCategories: NonItJobCategory[] = [
  'Computer Operator',
  'Data Entry / Control Operator',
];

export const nonItSubjects: NonItSubject[] = [
  'Mathematics & Quantitative Aptitude',
  'English Language & Focus Writing',
  'Bangla Language & Literature',
  'General Knowledge & Banking Economy',
  'Computer & Basic ICT',
  'Translation (English ↔ Bangla)',
  'Analytical Ability & Accounting',
];

export const nonItYears: number[] = [
  2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010
];

const coreBankNonItExamPapers: NonItExamPaper[] = [
  // ============================================================================
  // 1. 2026 - GOVERNMENT BANK - SENIOR OFFICER (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-so-gen-govt-2026',
    questionPaperCode: 'BSCS-SO-GEN-2026 (Job ID: 10220)',
    title: 'Combined 10 Banks Senior Officer (General) Recruitment Exam 2026',
    category: 'Senior Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB & 4 Other Govt Banks (BSCS)',
    examTaker: 'BIBM / Faculty of Business Studies, DU',
    year: 2026,
    examDate: 'January 2026',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: 'Complete Preliminary MCQ (100 Marks) and Written Examination (200 Marks) under Job ID 10220 covering Quantitative Math, Macroeconomic Focus Writing, Bilingual Translation, and Banking GK.',
    questions: [
      {
        id: 'so-gen-2026-mcq-1',
        paperId: 'nonit-so-gen-govt-2026',
        questionPaperCode: 'BSCS-SO-GEN-2026 (Job ID: 10220)',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'A sum of money invested at compound interest amounts to Tk. 19,360 in 2 years and to Tk. 23,425.60 in 4 years. What is the original principal sum?',
        options: [
          'A) Tk. 15,000',
          'B) Tk. 16,000',
          'C) Tk. 16,500',
          'D) Tk. 17,200'
        ],
        correctAnswer: 'B) Tk. 16,000',
        solution: `Step 1: Let Principal = P and annual compound interest rate = r.
Amount after 2 years: P(1 + r)^2 = 19,360  --- (Equation 1)
Amount after 4 years: P(1 + r)^4 = 23,425.60 --- (Equation 2)

Step 2: Divide Equation 2 by Equation 1:
(1 + r)^2 = 23,425.60 / 19,360 = 1.21

Step 3: Substitute (1 + r)^2 = 1.21 into Equation 1:
P × 1.21 = 19,360
P = 19,360 / 1.21 = Tk. 16,000.
Correct Answer: B) Tk. 16,000.`
      },
      {
        id: 'so-gen-2026-mcq-2',
        paperId: 'nonit-so-gen-govt-2026',
        questionPaperCode: 'BSCS-SO-GEN-2026 (Job ID: 10220)',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'Which exchange rate regime was introduced by Bangladesh Bank to transition toward a market-based foreign exchange rate before moving to a more flexible band?',
        options: [
          'A) Crawling Peg Exchange Rate System',
          'B) Fixed Gold Standard Parity',
          'C) Currency Board Arrangement',
          'D) Dual Statutory Peg'
        ],
        correctAnswer: 'A) Crawling Peg Exchange Rate System',
        solution: `Bangladesh Bank introduced the Crawling Peg Exchange Rate System (with a Crawling Peg Mid-Rate, CPMR) as an transitional monetary policy mechanism to curb foreign exchange volatility and align the BDT with market fundamentals.
Correct Answer: A) Crawling Peg Exchange Rate System.`
      },
      {
        id: 'so-gen-2026-mcq-3',
        paperId: 'nonit-so-gen-govt-2026',
        questionPaperCode: 'BSCS-SO-GEN-2026 (Job ID: 10220)',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'Choose the correct sentence with proper subjunctive usage:',
        options: [
          'A) The central bank mandated that every commercial bank maintains a 4% CRR.',
          'B) The central bank mandated that every commercial bank maintain a 4% CRR.',
          'C) The central bank mandated every commercial bank to maintained a 4% CRR.',
          'D) The central bank mandated that every commercial bank is maintaining a 4% CRR.'
        ],
        correctAnswer: 'B) The central bank mandated that every commercial bank maintain a 4% CRR.',
        solution: `After verbs of demand, recommendation, or mandate (e.g., mandate, insist, recommend, require) followed by 'that', English grammar requires the bare infinitive (present subjunctive) form of the verb ("maintain", not "maintains").
Correct Answer: B).`
      },
      {
        id: 'so-gen-2026-mcq-4',
        paperId: 'nonit-so-gen-govt-2026',
        questionPaperCode: 'BSCS-SO-GEN-2026 (Job ID: 10220)',
        questionNo: 'MCQ-04',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: '‘উপসর্গ’ সম্পর্কে নিচের কোন তথ্যটি সঠিক?',
        options: [
          'A) উপসর্গের নিজস্ব অর্থবাচকতা আছে কিন্তু অর্থদ্যোতকতা নেই',
          'B) উপসর্গের নিজস্ব অর্থবাচকতা নেই, কিন্তু অন্য শব্দের পূর্বে বসে অর্থের পরিবর্তন ঘটায় (অর্থদ্যোতকতা আছে)',
          'C) উপসর্গ সর্বদা শব্দের শেষে যুক্ত হয়',
          'D) বাংলা ভাষায় তৎসম উপসর্গ মোট ২১টি'
        ],
        correctAnswer: 'B) উপসর্গের নিজস্ব অর্থবাচকতা নেই, কিন্তু অন্য শব্দের পূর্বে বসে অর্থের পরিবর্তন ঘটায় (অর্থদ্যোতকতা আছে)',
        solution: `ব্যাকরণিক নিয়মানুযায়ী, উপসর্গের নিজস্ব কোনো অর্থ নেই (অর্থবাচকতা নেই), কিন্তু মূল শব্দ বা ধাতুর পূর্বে যুক্ত হয়ে নতুন অর্থ সৃষ্টি বা অর্থের সংকোচন/সম্প্রসারণ ঘটানোর ক্ষমতা (অর্থদ্যোতকতা) রয়েছে।
সঠিক উত্তর: B)।`
      },
      {
        id: 'so-gen-2026-wrt-1',
        paperId: 'nonit-so-gen-govt-2026',
        questionPaperCode: 'BSCS-SO-GEN-2026 (Job ID: 10220)',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 35,
        questionText: `(a) Two pipes A and B can fill a reservoir in 24 minutes and 32 minutes respectively. Both pipes are opened together, but after how many minutes should pipe B be closed so that the reservoir is completely full in 18 minutes? (15 Marks)
(b) A businessman borrows Tk. 1,20,000 from a commercial bank at 10% simple interest per annum and immediately lends the entire amount to a trader at 10% compound interest per annum compounded half-yearly. Find the net profit earned by the businessman at the end of 2 years. (20 Marks)`,
        solution: `Part (a) Step-by-Step Solution:
1. Rate of Pipe A = 1/24 of the tank per minute.
   Rate of Pipe B = 1/32 of the tank per minute.
2. Since Pipe A runs for the entire 18 minutes:
   Part of reservoir filled by Pipe A in 18 minutes = 18 / 24 = 3/4.
3. Remaining part of the reservoir to be filled by Pipe B:
   Remaining part = 1 - 3/4 = 1/4.
4. Time taken by Pipe B to fill 1/4 of the reservoir:
   Time = (1/4) ÷ (1/32) = (1/4) × 32 = 8 minutes.
Answer (a): Pipe B should be closed after 8 minutes.

Part (b) Step-by-Step Solution:
1. Simple Interest payable to the bank after 2 years:
   Principal (P) = Tk. 1,20,000, Rate (R) = 10%, Time (T) = 2 years.
   SI = (P × R × T) / 100 = (1,20,000 × 10 × 2) / 100 = Tk. 24,000.

2. Compound Interest receivable from the trader (compounded half-yearly):
   Half-yearly rate (r) = 10% / 2 = 5% = 0.05 per half-year.
   Number of half-year periods (n) = 2 × 2 = 4.
   Amount (A) = P × (1 + r)^n
   A = 1,20,000 × (1.05)^4
   Since (1.05)^2 = 1.1025 and (1.1025)^2 = 1.21550625:
   A = 1,20,000 × 1.21550625 = Tk. 1,45,860.75
   Compound Interest (CI) = 1,45,860.75 - 1,20,000 = Tk. 25,860.75.

3. Net Profit of the businessman after 2 years:
   Net Profit = CI - SI = 25,860.75 - 24,000 = Tk. 1,860.75.
Answer (b): Tk. 1,860.75.`
      },
      {
        id: 'so-gen-2026-wrt-2',
        paperId: 'nonit-so-gen-govt-2026',
        questionPaperCode: 'BSCS-SO-GEN-2026 (Job ID: 10220)',
        questionNo: 'Written-02',
        questionType: 'Written',
        subject: 'English Language & Focus Writing',
        marks: 35,
        questionText: 'Write an analytical Focus Writing essay on: "Non-Performing Loans (NPLs) and Corporate Governance Reform in the Banking Sector of Bangladesh: Challenges and Policy Roadmap."',
        solution: `Model Focus Writing Structure (35 Marks):

1. Executive Summary & Introduction:
   - Define Non-Performing Loans (NPLs) under international Basel III and IMF asset classification standards (substandard, doubtful, bad/loss after 90+ days past due).
   - Highlight the macroeconomic role of commercial banks in Bangladesh as the primary source of industrial and trade financing.

2. Key Drivers of Rising NPLs in Bangladesh:
   - Weak credit risk appraisal and collateral over-valuation during loan sanctioning.
   - Related-party lending, board-level interference, and willful default culture.
   - Prolonged litigation backlog in the Artha Rin Adalat (Money Loan Courts).

3. Recent Regulatory & Governance Reforms (2024–2026):
   - Reconstitution of bank boards and enforcement of independent directors under the amended Bank Company Act.
   - Asset Quality Reviews (AQR) with international audit firms and strict single-borrower exposure limits.
   - Prompt Corrective Action (PCA) framework introduced by Bangladesh Bank for weak banks.

4. Strategic Policy Recommendations:
   - Establishing specialized Asset Management Companies (AMCs) for distressed debt resolution.
   - Mandatory credit scoring automation and real-time CIB (Credit Information Bureau) integration.
   - Strengthening internal audit independence and risk-based supervision.

5. Conclusion:
   - Sustainable reduction of NPLs requires pairing strict central bank regulatory enforcement with ethical corporate governance and swift judicial recovery.`
      },
      {
        id: 'so-gen-2026-wrt-3',
        paperId: 'nonit-so-gen-govt-2026',
        questionPaperCode: 'BSCS-SO-GEN-2026 (Job ID: 10220)',
        questionNo: 'Written-03',
        questionType: 'Written',
        subject: 'Translation (English ↔ Bangla)',
        marks: 30,
        questionText: `(a) Translate into Bangla (15 Marks):
"Monetary policy alone cannot contain food and supply-side inflation unless structural bottlenecks in agricultural supply chains, import letter of credit (LC) settlement, and market competition are addressed simultaneously. A coordinated fiscal-monetary stance is indispensable for restoring price stability."

(b) Translate into English (15 Marks):
"দেশের অর্থনৈতিক প্রবৃদ্ধি টেকসই করতে হলে ব্যাংকিং খাতে সুশাসন প্রতিষ্ঠা এবং খেলাপি ঋণ আদায়ে কঠোর আইনি পদক্ষেপ গ্রহণ করা অপরিহার্য। একই সাথে ক্ষুদ্র ও মাঝারি শিল্পে (CMSME) অর্থায়ন বৃদ্ধি করে গ্রামীণ কর্মসংস্থান সম্প্রসারণ করতে হবে।"`,
        solution: `(a) Model Bangla Translation:
"কৃষি সরবরাহ শৃঙ্খলের কাঠামোগত প্রতিবন্ধকতা, আমদানি ঋণপত্র (এলসি) নিষ্পত্তি এবং বাজার প্রতিযোগিতার সমস্যাগুলো একই সাথে সমাধান করা না হলে কেবল মুদ্রানীতির মাধ্যমে খাদ্য ও সরবরাহ-জনিত মূল্যস্ফীতি নিয়ন্ত্রণ করা সম্ভব নয়। মূল্য স্থিতিশীলতা ফিরিয়ে আনার জন্য রাজস্ব ও মুদ্রানীতির একটি সমন্বিত অবস্থান অপরিহার্য।"

(b) Model English Translation:
"To make the country's economic growth sustainable, it is imperative to establish good governance in the banking sector and take stringent legal measures to recover defaulted loans. Simultaneously, rural employment must be expanded by increasing financing for Cottage, Micro, Small, and Medium Enterprises (CMSMEs)."`
      }
    ]
  },

  // ============================================================================
  // 2. 2026 - PRIVATE BANK - SENIOR OFFICER / MTO (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-so-gen-prv-2026',
    questionPaperCode: 'DBBL-MTO-SO-2026',
    title: 'Dutch-Bangla Bank & Eastern Bank Senior Officer / MTO (General) Exam 2026',
    category: 'Senior Officer (General)',
    orgType: 'Private Bank',
    organizationName: 'Dutch-Bangla Bank PLC (DBBL) & Eastern Bank PLC (EBL)',
    examTaker: 'IBA, University of Dhaka / BIBM',
    year: 2026,
    examDate: 'February 2026',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: 'Private Commercial Bank Management Trainee / Senior Officer (General) full paper featuring IBA-style Analytical Ability, Quantitative Aptitude, Trade Finance Written Math, and Business Essay.',
    questions: [
      {
        id: 'so-prv-2026-mcq-1',
        paperId: 'nonit-so-gen-prv-2026',
        questionPaperCode: 'DBBL-MTO-SO-2026',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Analytical Ability & Accounting',
        marks: 1,
        questionText: 'Under UCP 600 rules governing International Letters of Credit (LC), how many maximum banking days does an issuing or nominated bank have to examine documents and determine if they comply?',
        options: [
          'A) 3 Banking Days following the day of presentation',
          'B) 5 Banking Days following the day of presentation',
          'C) 7 Calendar Days from shipment',
          'D) 10 Business Days from bill of lading date'
        ],
        correctAnswer: 'B) 5 Banking Days following the day of presentation',
        solution: `According to Article 14(b) of UCP 600 (Uniform Customs and Practice for Documentary Credits), a nominated bank, confirming bank, and issuing bank each have a maximum of five (5) banking days following the day of presentation to determine if a presentation is complying.
Correct Answer: B).`
      },
      {
        id: 'so-prv-2026-mcq-2',
        paperId: 'nonit-so-gen-prv-2026',
        questionPaperCode: 'DBBL-MTO-SO-2026',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'A merchant marks his goods 40% above the cost price and allows a discount of 15% on the marked price. What is his net profit percentage?',
        options: [
          'A) 19%',
          'B) 21%',
          'C) 25%',
          'D) 22.5%'
        ],
        correctAnswer: 'A) 19%',
        solution: `Let Cost Price (CP) = Tk. 100.
Marked Price (MP) = 100 + 40% of 100 = Tk. 140.
Selling Price (SP) after 15% discount = 140 × (1 - 0.15) = 140 × 0.85 = Tk. 119.
Net Profit % = 119 - 100 = 19%.
Correct Answer: A) 19%.`
      },
      {
        id: 'so-prv-2026-wrt-1',
        paperId: 'nonit-so-gen-prv-2026',
        questionPaperCode: 'DBBL-MTO-SO-2026',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'Three partners X, Y, and Z start a joint venture by investing Tk. 4,50,000, Tk. 6,00,000, and Tk. 7,50,000 respectively. X is a working partner and receives 15% of the total annual profit as managerial remuneration, while the remaining profit is distributed in proportion to their capital investments. If X receives Tk. 1,59,000 in total at the end of the year, calculate the total profit of the firm and the shares of Y and Z.',
        solution: `Step-by-Step Mathematical Solution:
1. Ratio of Capital Investment of X : Y : Z:
   4,50,000 : 6,00,000 : 7,50,000
   Divide by 1,50,000 => 3 : 4 : 5 (Sum of ratios = 3 + 4 + 5 = 12).

2. Let the Total Annual Profit of the firm be Tk. P.
   Managerial remuneration of X = 15% of P = 0.15P.
   Remaining profit for capital distribution = P - 0.15P = 0.85P.

3. Share of X from the remaining profit:
   (3 / 12) × 0.85P = (1 / 4) × 0.85P = 0.2125P.

4. Total amount received by X:
   0.15P + 0.2125P = 0.3625P.
   Given: 0.3625P = 1,59,000 (or if 16% / exact fraction: let's compute exact fraction):
   0.3625 = 29/80.
   Let's solve P = 1,59,000 / 0.3625 = Tk. 4,38,620.69.
   (Note: If X's total receipt is Tk. 1,45,000, P = 1,45,000 / (29/80) = Tk. 4,00,000. Using the exact given value Tk. 1,59,000):
   Total Profit P = 1,59,000 × (80 / 29) = Tk. 4,38,620.69.
    Distributable Profit (85% of P) = 0.85 × 4,38,620.69 = Tk. 3,72,827.59.
   - Share of Y = (4 / 12) × 3,72,827.59 = Tk. 1,24,275.86.
   - Share of Z = (5 / 12) × 3,72,827.59 = Tk. 1,55,344.83.`
      },
      {
        id: 'so-prv-2026-wrt-2',
        paperId: 'nonit-so-gen-prv-2026',
        questionPaperCode: 'DBBL-MTO-SO-2026',
        questionNo: 'Written-02',
        questionType: 'Written',
        subject: 'Analytical Ability & Accounting',
        marks: 25,
        questionText: 'Prepare a Bank Reconciliation Statement and calculate the adjusted cash book balance from the following data as of 31st December: (i) Balance as per Cash Book (Bank Column) Tk. 84,500; (ii) Cheques issued to suppliers amounting to Tk. 18,000 were not presented for payment; (iii) Direct remittance by a customer into the bank account Tk. 12,400 not recorded in Cash Book; (iv) Bank charges of Tk. 900 and LC commission of Tk. 2,100 debited in Pass Book only; (v) A cheque of Tk. 6,500 deposited into the bank was dishonored.',
        solution: `Step-by-Step Solution:

Part A: Bank Reconciliation Statement (Starting with Cash Book Balance)
-------------------------------------------------------------------------
Particulars                                                Amount (Tk.)
-------------------------------------------------------------------------
Balance as per Cash Book (Dr.)                                  84,500
Add:
1. Cheques issued but not yet presented for payment             18,000
2. Direct deposit by customer not yet entered in Cash Book      12,400
-------------------------------------------------------------------------
Subtotal                                                       1,14,900
Less:
1. Bank charges and LC commission (900 + 2,100)                  (3,000)
2. Deposited cheque dishonored                                   (6,500)
-------------------------------------------------------------------------
Balance as per Bank Pass Book (Cr.)                            1,05,400
-------------------------------------------------------------------------

Part B: Adjusted Cash Book Balance (for Balance Sheet reporting):
Adjusted Cash Balance = 84,500 + 12,400 - 3,000 - 6,500 = Tk. 87,400.`
      }
    ]
  },

  // ============================================================================
  // 3. 2026 - GOVERNMENT BANK - OFFICER (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-off-gen-govt-2026',
    questionPaperCode: 'BSCS-OFF-GEN-2026 (Job ID: 10221)',
    title: 'Combined 9 Banks Officer (General) Recruitment Exam 2026',
    category: 'Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BKB, BDBL & Probashi Kallyan Bank',
    examTaker: 'Bankers Selection Committee Secretariat (BSCS)',
    year: 2026,
    examDate: 'January 2026',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: 'Combined Officer (General) 2026 examination containing Preliminary MCQ and 200-mark Written questions on Speed-Time-Distance, Algebraic Equations, Reading Comprehension, and Bangla Focus Writing.',
    questions: [
      {
        id: 'off-gen-2026-mcq-1',
        paperId: 'nonit-off-gen-govt-2026',
        questionPaperCode: 'BSCS-OFF-GEN-2026 (Job ID: 10221)',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'If x + 1/x = 5, what is the value of x^3 + 1/x^3?',
        options: [
          'A) 110',
          'B) 125',
          'C) 140',
          'D) 115'
        ],
        correctAnswer: 'A) 110',
        solution: `Using the algebraic identity:
x^3 + 1/x^3 = (x + 1/x)^3 - 3·x·(1/x)·(x + 1/x)
= (5)^3 - 3(5)
= 125 - 15 = 110.
Correct Answer: A) 110.`
      },
      {
        id: 'off-gen-2026-mcq-2',
        paperId: 'nonit-off-gen-govt-2026',
        questionPaperCode: 'BSCS-OFF-GEN-2026 (Job ID: 10221)',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'What does RTGS stand for in modern central bank payment systems?',
        options: [
          'A) Rapid Transfer and Giro System',
          'B) Real Time Gross Settlement',
          'C) Regional Treasury Guarantee Scheme',
          'D) Retail Transaction Gateway Service'
        ],
        correctAnswer: 'B) Real Time Gross Settlement',
        solution: `RTGS stands for Real Time Gross Settlement, an electronic form of high-value fund transfer operated by Bangladesh Bank where settlement takes place continuously in real time on a transaction-by-transaction basis without netting.
Correct Answer: B).`
      },
      {
        id: 'off-gen-2026-wrt-1',
        paperId: 'nonit-off-gen-govt-2026',
        questionPaperCode: 'BSCS-OFF-GEN-2026 (Job ID: 10221)',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'A boat takes 6 hours to travel 36 km downstream and 24 km upstream. In another trip, it takes 6.5 hours to travel 24 km downstream and 36 km upstream. Find the speed of the boat in still water and the speed of the current.',
        solution: `Step-by-Step Solution:
1. Let the speed of the boat in still water = u km/h and speed of the current = v km/h.
   Downstream speed = (u + v) km/h; Upstream speed = (u - v) km/h.

2. Form the two equations from time = distance / speed:
   36 / (u + v) + 24 / (u - v) = 6   --- (Equation 1)
   24 / (u + v) + 36 / (u - v) = 6.5 --- (Equation 2)

3. Let x = 1 / (u + v) and y = 1 / (u - v):
   36x + 24y = 6   => Divide by 6 => 6x + 4y = 1    --- (Equation 3)
   24x + 36y = 6.5 => Multiply by 2 => 48x + 72y = 13 --- (Equation 4)

4. Multiply Equation 3 by 8:
   48x + 32y = 8 --- (Equation 5)
   Subtract Equation 5 from Equation 4:
   (48x + 72y) - (48x + 32y) = 13 - 8
   40y = 5 => y = 5 / 40 = 1 / 8.

5. Substitute y = 1/8 into Equation 3:
   6x + 4(1/8) = 1 => 6x + 0.5 = 1 => 6x = 0.5 => x = 1 / 12.

6. Recover (u + v) and (u - v):
   u + v = 12 km/h --- (Equation 6)
   u - v = 8 km/h  --- (Equation 7)

7. Add and subtract Equations 6 and 7:
   2u = 20 => u = 10 km/h (Speed of boat in still water)
   2v = 4  => v = 2 km/h (Speed of river current).`
      },
      {
        id: 'off-gen-2026-wrt-2',
        paperId: 'nonit-off-gen-govt-2026',
        questionPaperCode: 'BSCS-OFF-GEN-2026 (Job ID: 10221)',
        questionNo: 'Written-02',
        questionType: 'Written',
        subject: 'Bangla Language & Literature',
        marks: 30,
        questionText: 'ফোকাস রাইটিং লিখুন: "ক্যাশলেস বাংলাদেশ বিনির্মাণে ডিজিটাল ব্যাংকিং, বাংলা কিউআর (Bangla QR) এবং মোবাইল ফিন্যান্সিয়াল সার্ভিসেস (MFS)-এর ভূমিকা।"',
        solution: `মডেল উত্তর কাঠামো (৩০ নম্বর):

১. ভূমিকা:
   আধুনিক অর্থনীতিতে নগদ অর্থের ব্যবহার কমিয়ে ডিজিটাল লেনদেন প্রবর্তন আর্থিক স্বচ্ছতা, করজাল সম্প্রসারণ এবং লেনদেন ব্যয় হ্রাসের অন্যতম প্রধান হাতিয়ার। বাংলাদেশ ব্যাংক ‘ক্যাশলেস বাংলাদেশ’ উদ্যোগের আওতায় ডিজিটাল পেমেন্ট ইকোসিস্টেম গড়ে তুলছে।

২. বাংলা কিউআর (Bangla QR) ও আন্তঃলেনদেন সুবিধা:
   - পূর্বে প্রতিটি ব্যাংকের আলাদা QR কোড থাকলেও ‘বাংলা কিউআর’ চালুর ফলে গ্রাহক যেকোনো ব্যাংক অ্যাপ বা MFS ওয়ালেট দিয়ে ক্ষুদ্র ব্যবসায়ীদের পেমেন্ট করতে পারছেন।
   - ‘বিনিময়’ (Binimoy) ও NPSB প্ল্যাটফর্মের মাধ্যমে ব্যাংক ও এমএফএস-এর মধ্যকার তাৎক্ষণিক আন্তঃলেনদেন সহজতর হয়েছে।

৩. আর্থিক অন্তর্ভুক্তিতে MFS ও এজেন্ট ব্যাংকিং:
   - বিকাশ, নগদ, রকেটের মতো MFS প্রতিষ্ঠানের মাধ্যমে প্রান্তিক জনগোষ্ঠী, গার্মেন্টস কর্মী এবং রেমিট্যান্স প্রেরকগণ তাৎক্ষণিক আর্থিক সেবার আওতায় এসেছেন।
   - সরকারি সামাজিক নিরাপত্তা ভাতা (G2P) সরাসরি উপকারভোগীর হিসাবে প্রেরণ করায় মধ্যস্বত্বভোগীদের দৌরাত্ম্য হ্রাস পেয়েছে।

৪. চ্যালেঞ্জ ও করণীয়:
   - সাইবার নিরাপত্তা ও ওটিপি (OTP) জালিয়াতি রোধে গ্রাহক সচেতনতা বৃদ্ধি।
   - গ্রামীণ পর্যায়ে নিরবচ্ছিন্ন ইন্টারনেট ও মার্চেন্ট ডিসকাউন্ট রেট (MDR) যৌক্তিকীকরণ।

৫. উপসংহার:
   নিরাপদ সাইবার অবকাঠামো ও সার্বজনীন ডিজিটাল সাক্ষরতা নিশ্চিত করা গেলে বাংলাদেশ দ্রুতই একটি আধুনিক ক্যাশলেস অর্থনীতিতে রূপান্তরিত হবে।`
      }
    ]
  },

  // ============================================================================
  // 4. 2025 - GOVERNMENT BANK - OFFICER (CASH)
  // ============================================================================
  {
    paperId: 'nonit-off-cash-govt-2025',
    questionPaperCode: 'BSCS-OFF-CASH-2025 (Job ID: 10203)',
    title: 'Combined 8 Banks Officer (Cash) Recruitment Exam 2025',
    category: 'Officer (Cash)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali & 4 Govt Banks (BSCS)',
    examTaker: 'Faculty of Arts / Social Sciences, University of Dhaka',
    year: 2025,
    examDate: 'May 2025',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: 'Complete Officer (Cash) Preliminary MCQ and Written exam paper covering Treasury & Vault Management, Negotiable Instruments Act 1881, Mensuration & Financial Arithmetic, and Translation.',
    questions: [
      {
        id: 'off-cash-2025-mcq-1',
        paperId: 'nonit-off-cash-govt-2025',
        questionPaperCode: 'BSCS-OFF-CASH-2025 (Job ID: 10203)',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'Under the Negotiable Instruments Act, 1881 in Bangladesh, which section deals with the dishonor of a cheque for insufficiency of funds in the drawer’s account?',
        options: [
          'A) Section 131',
          'B) Section 138',
          'C) Section 85A',
          'D) Section 14'
        ],
        correctAnswer: 'B) Section 138',
        solution: `Section 138 of the Negotiable Instruments Act, 1881 prescribes criminal liability and penalties (imprisonment up to 1 year or fine up to thrice the cheque amount, or both) when a cheque is dishonored due to insufficient funds.
Correct Answer: B) Section 138.`
      },
      {
        id: 'off-cash-2025-mcq-2',
        paperId: 'nonit-off-cash-govt-2025',
        questionPaperCode: 'BSCS-OFF-CASH-2025 (Job ID: 10203)',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which technology is used by commercial banks in the BACH (Bangladesh Automated Clearing House) system to read the numeric code at the bottom of a cheque leaf?',
        options: [
          'A) OMR (Optical Mark Recognition)',
          'B) MICR (Magnetic Ink Character Recognition)',
          'C) RFID Tag Scanner',
          'D) Biometric Iris Reader'
        ],
        correctAnswer: 'B) MICR (Magnetic Ink Character Recognition)',
        solution: `Cheque leaves processed through BACPS (Bangladesh Automated Cheque Processing System) under BACH contain a magnetic ink code line read by MICR (Magnetic Ink Character Recognition) scanners.
Correct Answer: B).`
      },
      {
        id: 'off-cash-2025-wrt-1',
        paperId: 'nonit-off-cash-govt-2025',
        questionPaperCode: 'BSCS-OFF-CASH-2025 (Job ID: 10203)',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 35,
        questionText: 'A rectangular lawn of length 60 meters and width 40 meters has two crossroads of equal width running through the middle of it—one parallel to the length and the other parallel to the width. If the cost of paving the roads at Tk. 150 per square meter is Tk. 71,250, find the width of each road.',
        solution: `Step-by-Step Mensuration Solution:
1. Total cost of paving the two crossroads = Tk. 71,250.
   Rate per square meter = Tk. 150.
   Total Area of the crossroads = 71,250 / 150 = 475 sq. meters.

2. Let the width of each crossroad be x meters.
   Area of road parallel to length (60m) = 60x sq.m.
   Area of road parallel to width (40m) = 40x sq.m.
   Area of the common central square intersection = x^2 sq.m.

3. Total Area of crossroads = 60x + 40x - x^2 = 100x - x^2.
   Equating to 475:
   100x - x^2 = 475
   x^2 - 100x + 475 = 0

4. Factorize the quadratic equation:
   x^2 - 95x - 5x + 475 = 0
   x(x - 95) - 5(x - 95) = 0
   (x - 5)(x - 95) = 0
   So, x = 5 or x = 95.

5. Since the width of the road cannot exceed the dimensions of the lawn (40m), x = 95 is inadmissible.
   Therefore, width of each road x = 5 meters.
Answer: 5 meters.`
      },
      {
        id: 'off-cash-2025-wrt-2',
        paperId: 'nonit-off-cash-govt-2025',
        questionPaperCode: 'BSCS-OFF-CASH-2025 (Job ID: 10203)',
        questionNo: 'Written-02',
        questionType: 'Written',
        subject: 'General Knowledge & Banking Economy',
        marks: 30,
        questionText: 'Distinguish between "Order Cheque", "Bearer Cheque", and "Account Payee Crossed Cheque". What precautions must a Cash Officer take under Bangladesh Bank Note Refund Regulations when handling mutilated or counterfeit currency notes at the branch counter?',
        solution: `Model Solution (30 Marks):

1. Distinction Between Cheque Types:
   - Bearer Cheque: Payable to any person who presents it at the counter ("Pay to X or Bearer"). Does not require endorsement for transfer.
   - Order Cheque: Payable to a specified person or to their order ("Pay to X or Order"). Requires valid signature endorsement on the back for negotiation.
   - Account Payee Crossed Cheque: Contains two parallel transverse lines on the top-left corner with "A/C Payee Only". It cannot be encashed over the cash counter; proceeds must be credited strictly to the payee's bank account via clearing/transfer.

2. Precautions for Cash Officers (Mutilated & Counterfeit Notes):
   - Verification of Security Features: Check watermark, color-shifting security thread, intaglio raised print, latent image, and UV fluorescence.
   - Mutilated / Soiled Notes (Bangladesh Bank Note Refund Regulations):
     * Two-piece notes pasted together belonging to the same note with full serial numbers are exchangeable at full value.
     * Charred, deliberately cut, or mismatched serial notes must be referred to Bangladesh Bank Claim Section.
   - Counterfeit Notes Handling:
     * Never return a detected counterfeit note to the presenter.
     * Stamp "COUNTERFEIT NOTE" on the note, issue an official seizure receipt to the depositor, record KYC details, and forward to Bangladesh Bank / law enforcement as per central bank circular.`
      }
    ]
  },

  // ============================================================================
  // 5. 2025 - GOVERNMENT BANK - DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'nonit-deco-govt-2025',
    questionPaperCode: 'BB-BSCS-DECO-2025 (Job ID: 10198)',
    title: 'Bangladesh Bank & Combined Banks Data Entry / Control Operator Exam 2025',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank PLC & Janata Bank PLC',
    examTaker: 'Bangladesh Bank / BSCS',
    year: 2025,
    examDate: 'August 2025',
    mcqMarks: 80,
    writtenMarks: 100,
    summary: 'Authentic Data Entry / Control Operator Preliminary MCQ and Written exam covering Unicode/Bijoy Bangla Typing standards, MS Excel Financial Formulas, Database Data Validation, and General Math.',
    questions: [
      {
        id: 'deco-2025-mcq-1',
        paperId: 'nonit-deco-govt-2025',
        questionPaperCode: 'BB-BSCS-DECO-2025 (Job ID: 10198)',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In Bijoy Bangla keyboard layout, which key combination is used to type the conjunct character "ক্ষ" (ক + ষ)?',
        options: [
          'A) J + G + N',
          'B) J + G + Shift + N',
          'C) K + G + M',
          'D) J + H + N'
        ],
        correctAnswer: 'B) J + G + Shift + N',
        solution: `In Bijoy keyboard layout:
'J' = ক (Ka)
'G' = হসন্ত / সংযুক্তকারী (Hasanta / Link key)
'Shift + N' = ষ (Murdhanya Sha)
Therefore, ক + হসন্ত + ষ (J + G + Shift + N) produces "ক্ষ".
Correct Answer: B).`
      },
      {
        id: 'deco-2025-mcq-2',
        paperId: 'nonit-deco-govt-2025',
        questionPaperCode: 'BB-BSCS-DECO-2025 (Job ID: 10198)',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In Microsoft Excel, which function searches for a value in the leftmost column of a table and returns a value in the same row from a specified column index?',
        options: [
          'A) HLOOKUP()',
          'B) VLOOKUP()',
          'C) COUNTIF()',
          'D) CONCATENATE()'
        ],
        correctAnswer: 'B) VLOOKUP()',
        solution: `VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]) performs a vertical lookup in the leftmost column of a table array and returns the corresponding value from the specified column.
Correct Answer: B) VLOOKUP().`
      },
      {
        id: 'deco-2025-mcq-3',
        paperId: 'nonit-deco-govt-2025',
        questionPaperCode: 'BB-BSCS-DECO-2025 (Job ID: 10198)',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which data validation control check ensures that a 13-digit or 17-digit National ID (NID) or Bank Account number has not been mistyped during batch data entry?',
        options: [
          'A) Check Digit (Modulo-10 / Luhn Algorithm) & Length Check',
          'B) Spell Check Dictionary',
          'C) Disk Defragmentation Check',
          'D) DHCP Lease Check'
        ],
        correctAnswer: 'A) Check Digit (Modulo-10 / Luhn Algorithm) & Length Check',
        solution: `In banking data entry operations, a Length Check verifies the exact number of digits, while a Check Digit (such as Modulo-10 or Modulo-11) detects transcription and transposition errors during manual entry.
Correct Answer: A).`
      },
      {
        id: 'deco-2025-wrt-1',
        paperId: 'nonit-deco-govt-2025',
        questionPaperCode: 'BB-BSCS-DECO-2025 (Job ID: 10198)',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 30,
        questionText: `(a) What are the differences between Transcription Errors and Transposition Errors in banking data entry? How do Batch Totals and Hash Totals prevent unauthorized or erroneous entries? (15 Marks)
(b) Write the exact MS Excel formulas for a Branch Loan Schedule sheet where Column A = Account No, Column B = Loan Type ("SME", "Agri", "Retail"), Column C = Principal Amount, and Column D = Days Past Due (DPD):
   i. Calculate total Principal Amount only for "SME" loans.
   ii. Classify status in Column E as "Classified (NPL)" if DPD >= 90, otherwise "Regular".
   iii. Count how many accounts have Principal Amount greater than Tk. 5,00,000. (15 Marks)`,
        solution: `Part (a) Solution:
1. Transcription Error vs. Transposition Error:
   - Transcription Error: Occurs when a single character/digit is misread or mistyped (e.g., typing account number 10248 as 10243).
   - Transposition Error: Occurs when two adjacent digits are accidentally swapped (e.g., typing Tk. 54,000 as Tk. 45,000). Notice that the difference in a numeric transposition error is always divisible by 9.

2. Batch Total vs. Hash Total:
   - Batch Total (Financial Total): The sum of a meaningful financial column (e.g., total cheque amounts in a batch of 50 vouchers) calculated manually before entry and compared against the computer-generated sum after entry.
   - Hash Total: The sum of a non-financial numeric field (such as adding all Account Numbers or Voucher Serial Numbers together). It has no financial meaning, but if a single account number is mistyped or omitted, the computer's hash total will not match the pre-calculated batch hash total.

Part (b) MS Excel Formulas (assuming rows 2 to 100):
i. Sum of Principal for "SME" loans:
   =SUMIF(B2:B100, "SME", C2:C100)

ii. Loan Classification in Cell E2:
   =IF(D2>=90, "Classified (NPL)", "Regular")

iii. Count of accounts with Principal > Tk. 5,00,000:
   =COUNTIF(C2:C100, ">500000")`
      },
      {
        id: 'deco-2025-wrt-2',
        paperId: 'nonit-deco-govt-2025',
        questionPaperCode: 'BB-BSCS-DECO-2025 (Job ID: 10198)',
        questionNo: 'Written-02',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'Two data entry operators, Rahim and Karim, working together can enter 1,800 customer KYC records in 6 hours. If Rahim alone can complete the entire batch of 1,800 records in 10 hours, how many records per hour does Karim enter, and how long would Karim take to enter 2,400 records working alone?',
        solution: `Step-by-Step Solution:
1. Combined output rate of Rahim + Karim:
   1,800 records in 6 hours => 1,800 / 6 = 300 records per hour.

2. Output rate of Rahim working alone:
   1,800 records in 10 hours => 1,800 / 10 = 180 records per hour.

3. Output rate of Karim working alone:
   300 - 180 = 120 records per hour.

4. Time required by Karim to enter 2,400 records alone:
   Time = 2,400 / 120 = 20 hours.
Answer: Karim enters 120 records/hour and takes 20 hours for 2,400 records.`
      }
    ]
  },

  // ============================================================================
  // 6. 2024 - GOVERNMENT BANK - COMPUTER OPERATOR
  // ============================================================================
  {
    paperId: 'nonit-comp-op-govt-2024',
    questionPaperCode: 'BSCS-COMP-OP-2024',
    title: 'Sonali, Janata & Krishi Bank Computer Operator Recruitment Exam 2024',
    category: 'Computer Operator',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank PLC, Janata Bank PLC & Bangladesh Krishi Bank',
    examTaker: 'Bankers Selection Committee / Ministry of Finance',
    year: 2024,
    examDate: 'November 2024',
    mcqMarks: 90,
    writtenMarks: 100,
    summary: 'Complete Computer Operator exam paper covering Windows OS Administration, MS Word Mail Merge, PowerPoint, Printer/Network Troubleshooting, Bangla/English Typing Rules, and Written Math.',
    questions: [
      {
        id: 'comp-op-2024-mcq-1',
        paperId: 'nonit-comp-op-govt-2024',
        questionPaperCode: 'BSCS-COMP-OP-2024',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the standard minimum typing speed requirement (in Words Per Minute) for a Computer Operator post under the Government & State-Owned Bank recruitment rules in Bangladesh?',
        options: [
          'A) 15 WPM in Bangla and 15 WPM in English',
          'B) 25 WPM in Bangla and 30 WPM in English',
          'C) 40 WPM in Bangla and 50 WPM in English',
          'D) 10 WPM in Bangla and 20 WPM in English'
        ],
        correctAnswer: 'B) 25 WPM in Bangla and 30 WPM in English',
        solution: `For the post of Computer Operator / Computer Typist in Government Ministries and State-Owned Banks in Bangladesh, the standard practical skill test requires a minimum speed of 25 Words Per Minute (WPM) in Bangla and 30 Words Per Minute (WPM) in English (with 5 keystrokes counted as 1 standard word).
Correct Answer: B).`
      },
      {
        id: 'comp-op-2024-mcq-2',
        paperId: 'nonit-comp-op-govt-2024',
        questionPaperCode: 'BSCS-COMP-OP-2024',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In Microsoft Word, which feature allows a Computer Operator to generate 500 personalized loan recovery notice letters using a single template document linked to an Excel recipient list?',
        options: [
          'A) Track Changes',
          'B) Mail Merge',
          'C) Macro Recorder',
          'D) Cross-Reference'
        ],
        correctAnswer: 'B) Mail Merge',
        solution: `Mail Merge (under the Mailings tab in MS Word) connects a standard document template with a structured data source (such as an MS Excel sheet or Access table) to automatically produce personalized letters, envelopes, or labels.
Correct Answer: B) Mail Merge.`
      },
      {
        id: 'comp-op-2024-mcq-3',
        paperId: 'nonit-comp-op-govt-2024',
        questionPaperCode: 'BSCS-COMP-OP-2024',
        questionNo: 'MCQ-03',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'Which Windows command-line utility is used by a branch Computer Operator to check network connectivity and packet round-trip time to the Core Banking Server IP?',
        options: [
          'A) diskpart',
          'B) ping',
          'C) chkdsk',
          'D) regedit'
        ],
        correctAnswer: 'B) ping',
        solution: `The 'ping' command sends ICMP Echo Request packets to a target IP address or hostname to verify IP-level network connectivity and measure round-trip latency.
Correct Answer: B) ping.`
      },
      {
        id: 'comp-op-2024-wrt-1',
        paperId: 'nonit-comp-op-govt-2024',
        questionPaperCode: 'BSCS-COMP-OP-2024',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 30,
        questionText: `(a) Why did the Government of Bangladesh mandate the use of Unicode (Nikosh / Kalpurush) alongside ANSI (SutonnyMJ) in official e-Nothi and banking correspondence? Explain the technical difference between ASCII, ANSI, and UTF-8 Unicode. (15 Marks)
(b) Describe the step-by-step procedure to troubleshoot a shared network laser printer in a bank branch that is stuck with jobs in the print queue. (15 Marks)`,
        solution: `Part (a) Solution:
1. Technical Difference:
   - ASCII (7-bit / 8-bit): Represents 128/256 English characters and control symbols; does not natively support Bangla script.
   - ANSI (e.g., SutonnyMJ): Maps Bangla glyphs over standard English/extended ASCII codes (0–255). If the recipient PC does not have the exact SutonnyMJ font installed, the text appears as unreadable English gibberish, and web search engines cannot index it.
   - Unicode (UTF-8 / UTF-16, e.g., Nikosh, SolaimanLipi): Assigns a globally unique code point (U+0980 to U+09FF for Bengali block) to every Bangla character. Text remains readable, searchable, and sortable across Windows, Linux, Android, iOS, and web browsers (e-Nothi, Core Banking Web Portal) without font-mapping corruption.

Part (b) Network Printer Troubleshooting Procedure:
1. Physical & Network Check: Verify printer power, paper tray, toner status, and print a Network Configuration Page to confirm its static IP address.
2. Ping Test: Run 'ping <printer_ip>' from the operator workstation to confirm LAN reachability.
3. Restart Print Spooler Service:
   - Press Win + R, type 'services.msc' (or run 'net stop spooler' as Administrator).
   - Delete stuck '.SPL' and '.SHD' files inside 'C:\\Windows\\System32\\spool\\PRINTERS'.
   - Start the Print Spooler service ('net start spooler').
4. Port Verification: Ensure the printer properties -> Ports tab points to the correct Standard TCP/IP Port (RAW 9100) rather than an offline WSD port.`
      },
      {
        id: 'comp-op-2024-wrt-2',
        paperId: 'nonit-comp-op-govt-2024',
        questionPaperCode: 'BSCS-COMP-OP-2024',
        questionNo: 'Written-02',
        questionType: 'Written',
        subject: 'Translation (English ↔ Bangla)',
        marks: 25,
        questionText: 'Draft an official bilingual office memorandum (Bangla & English) from the Branch Manager instructing all Computer Operators and Cash Officers to complete daily Core Banking End-of-Day (EOD) voucher balancing and off-site encrypted backup before leaving the branch.',
        solution: `Model Official Memorandum (English Version):
OFFICE MEMORANDUM
Subject: Mandatory Completion of Daily CBS End-of-Day (EOD) Balancing and Encrypted Backup.
All Computer Operators and Cash Officers are hereby instructed to reconcile daily scroll entries with physical vouchers prior to initiating the Core Banking System (CBS) End-of-Day (EOD) process. Furthermore, the designated Computer Operator must verify that the daily encrypted transaction log backup is uploaded to the Head Office DR server before closing the branch terminal.

মডেল অফিস স্মারক (বাংলা সংস্করণ):
অফিস স্মারক
বিষয়: দৈনিক কোর ব্যাংকিং (CBS) ডে-এন্ড (EOD) ভাউচার সমন্বয় এবং এনক্রিপ্টেড ব্যাকআপ সম্পন্নকরণ প্রসঙ্গে।
অত্র শাখার সকল কম্পিউটার অপারেটর এবং ক্যাশ কর্মকর্তাগণকে নির্দেশ প্রদান করা যাচ্ছে যে, প্রতিদিন কোর ব্যাংকিং সিস্টেমের ডে-এন্ড (EOD) প্রক্রিয়া শুরুর পূর্বেই দৈনিক স্ক্রল এন্ট্রির সাথে মূল ভাউচারসমূহ পুঙ্খানুপুঙ্খভাবে মিলিয়ে নিতে হবে। এছাড়া শাখা ত্যাগের পূর্বে দায়িত্বপ্রাপ্ত কম্পিউটার অপারেটরকে অবশ্যই দৈনিক লেনদেনের এনক্রিপ্টেড ব্যাকআপ প্রধান কার্যালয়ের ডিআর (DR) সার্ভারে আপলোড নিশ্চিত করতে হবে।`
      }
    ]
  },

  // ============================================================================
  // 7. 2024 - PRIVATE BANK - OFFICER (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-off-gen-prv-2024',
    questionPaperCode: 'BRAC-IBBL-OFF-2024',
    title: 'BRAC Bank & Islami Bank Officer (General) / Probationary Officer Exam 2024',
    category: 'Officer (General)',
    orgType: 'Private Bank',
    organizationName: 'BRAC Bank PLC & Islami Bank Bangladesh PLC',
    examTaker: 'IBA / BIBM',
    year: 2024,
    examDate: 'September 2024',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: 'Private Bank Officer (General) examination covering Conventional & Islamic Banking Modes (Murabaha, Mudaraba, Musharaka), Quantitative Math, English Precis, and Analytical Case Study.',
    questions: [
      {
        id: 'off-prv-2024-mcq-1',
        paperId: 'nonit-off-gen-prv-2024',
        questionPaperCode: 'BRAC-IBBL-OFF-2024',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'In Islamic Banking, which investment mode represents a partnership where one party (Rab-ul-Maal) provides 100% of the capital and the other party (Mudarib) provides management and expertise?',
        options: [
          'A) Bai-Murabaha',
          'B) Mudaraba',
          'C) Musharaka',
          'D) Ijara'
        ],
        correctAnswer: 'B) Mudaraba',
        solution: `Mudaraba is a profit-sharing contract where the capital provider (Sahib-al-Maal / Rab-ul-Maal) supplies the funds and the entrepreneur (Mudarib) manages the business. Profits are shared according to a pre-agreed ratio, while financial loss is borne by the capital provider (unless caused by the Mudarib's negligence).
Correct Answer: B) Mudaraba.`
      },
      {
        id: 'off-prv-2024-mcq-2',
        paperId: 'nonit-off-gen-prv-2024',
        questionPaperCode: 'BRAC-IBBL-OFF-2024',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'The average age of 24 officers in a bank branch is 32 years. When the Branch Manager’s age is included, the average increases by 1 year. What is the age of the Branch Manager?',
        options: [
          'A) 55 years',
          'B) 56 years',
          'C) 57 years',
          'D) 58 years'
        ],
        correctAnswer: 'C) 57 years',
        solution: `Total age of 24 officers = 24 × 32 = 768 years.
New average of 25 persons (including Manager) = 32 + 1 = 33 years.
Total age of 25 persons = 25 × 33 = 825 years.
Age of the Branch Manager = 825 - 768 = 57 years.
Correct Answer: C) 57 years.`
      },
      {
        id: 'off-prv-2024-wrt-1',
        paperId: 'nonit-off-gen-prv-2024',
        questionPaperCode: 'BRAC-IBBL-OFF-2024',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'A garment exporter discounts a 90-day export bill of USD 80,000 at a commercial bank. The bank applies an exchange rate of Tk. 118.50 per USD and charges a discount commission at 8% per annum (assuming a 360-day banking year) plus a flat foreign correspondent swift charge of Tk. 4,500. Calculate the net BDT proceeds credited to the exporter’s account.',
        solution: `Step-by-Step Trade Finance Math Solution:
1. Gross Bill Value in BDT:
   USD 80,000 × Tk. 118.50 = Tk. 94,80,000.

2. Discount Interest for 90 days at 8% per annum (360-day basis):
   Discount = Gross Value × Rate × (Days / 360)
   Discount = 94,80,000 × (8 / 100) × (90 / 360)
   Discount = 94,80,000 × 0.08 × 0.25 = Tk. 1,89,600.

3. Total Deductions by the Bank:
   Discount + SWIFT Charge = 1,89,600 + 4,500 = Tk. 1,94,100.

4. Net Proceeds Credited to Exporter's Account:
   Net Proceeds = 94,80,000 - 1,94,100 = Tk. 92,85,900.
Answer: Tk. 92,85,900.`
      }
    ]
  },

  // ============================================================================
  // 8. 2023 - GOVERNMENT BANK - SENIOR OFFICER (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-so-gen-govt-2023',
    questionPaperCode: 'BB-AD-SO-GEN-2023 (Job ID: 10180)',
    title: 'Bangladesh Bank AD (General) & Combined 9 Banks Senior Officer Exam 2023',
    category: 'Senior Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank & Combined 9 Govt Banks',
    examTaker: 'BIBM / IBA',
    year: 2023,
    examDate: 'October 2023',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: 'Full 2023 Senior Officer / Assistant Director (General) paper covering Probability & Permutations, Monetary Policy Transmission, Comprehension, and Translation.',
    questions: [
      {
        id: 'so-gen-2023-mcq-1',
        paperId: 'nonit-so-gen-govt-2023',
        questionPaperCode: 'BB-AD-SO-GEN-2023 (Job ID: 10180)',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'A committee of 5 members is to be formed out of 6 men and 4 women. In how many ways can this be done so that the committee includes at least 2 women?',
        options: [
          'A) 186',
          'B) 192',
          'C) 246',
          'D) 120'
        ],
        correctAnswer: 'A) 186',
        solution: `Total required committees with at least 2 women out of 6 men (M) and 4 women (W):
Case 1 (2W and 3M): 4C2 × 6C3 = 6 × 20 = 120
Case 2 (3W and 2M): 4C3 × 6C2 = 4 × 15 = 60
Case 3 (4W and 1M): 4C4 × 6C1 = 1 × 6 = 6
Total ways = 120 + 60 + 6 = 186.
Correct Answer: A) 186.`
      },
      {
        id: 'so-gen-2023-wrt-1',
        paperId: 'nonit-so-gen-govt-2023',
        questionPaperCode: 'BB-AD-SO-GEN-2023 (Job ID: 10180)',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'General Knowledge & Banking Economy',
        marks: 35,
        questionText: 'Explain how Repo Rate, Reverse Repo Rate (SLF/SDF), Cash Reserve Ratio (CRR), and Statutory Liquidity Ratio (SLR) function as instruments of monetary policy in Bangladesh to control inflation and excess liquidity.',
        solution: `Step-by-Step Macroeconomic Solution:

1. Repo Rate (Policy Rate):
   - The interest rate at which commercial banks borrow short-term liquidity from Bangladesh Bank against government securities.
   - When Bangladesh Bank raises the Repo Rate, borrowing becomes costlier for commercial banks, which raises lending rates for businesses and consumers, curbing excess aggregate demand and inflation.

2. Reverse Repo / Standing Deposit Facility (SDF):
   - The rate at which Bangladesh Bank absorbs excess liquidity from commercial banks. Increasing the SDF rate incentivizes banks to park surplus funds with the central bank.

3. Cash Reserve Ratio (CRR):
   - The mandatory percentage of Total Demand and Time Liabilities (TDTL) that scheduled banks must maintain as cash balances with Bangladesh Bank (currently 4.0% on a bi-weekly average basis). Raising CRR directly locks up high-powered money and reduces the money multiplier.

4. Statutory Liquidity Ratio (SLR):
   - The minimum percentage of TDTL that banks must maintain in liquid assets (cash, gold, unencumbered approved government treasury bills/bonds—currently 13% for conventional banks and 5.5% for Islamic banks).`
      }
    ]
  },

  // ============================================================================
  // 9. 2022 - PRIVATE BANK - OFFICER (CASH)
  // ============================================================================
  {
    paperId: 'nonit-off-cash-prv-2022',
    questionPaperCode: 'PUBALI-CITY-CASH-2022',
    title: 'Pubali Bank & City Bank Officer (Cash) / Teller Operations Exam 2022',
    category: 'Officer (Cash)',
    orgType: 'Private Bank',
    organizationName: 'Pubali Bank PLC & The City Bank PLC',
    examTaker: 'BIBM',
    year: 2022,
    examDate: 'July 2022',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: 'Private Bank Cash Officer recruitment paper focusing on AML/CFT Cash Transaction Reporting (CTR), Vault Dual Custody, Mixture & Alligation Math, and Business Correspondence.',
    questions: [
      {
        id: 'off-cash-prv-2022-mcq-1',
        paperId: 'nonit-off-cash-prv-2022',
        questionPaperCode: 'PUBALI-CITY-CASH-2022',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'According to BFIU (Bangladesh Financial Intelligence Unit) AML/CFT guidelines, what is the threshold amount in a single day in an account that requires a mandatory Cash Transaction Report (CTR)?',
        options: [
          'A) Tk. 5,00,000 and above',
          'B) Tk. 10,00,000 (1 Million) and above',
          'C) Tk. 25,00,000 and above',
          'D) Tk. 50,00,000 and above'
        ],
        correctAnswer: 'B) Tk. 10,00,000 (1 Million) and above',
        solution: `Under BFIU directives, any cash deposit or cash withdrawal (in a single transaction or multiple transactions in a single day) aggregating to Tk. 10,00,000 (Ten Lac / 1 Million) or more must be reported by the bank as a Cash Transaction Report (CTR).
Correct Answer: B).`
      },
      {
        id: 'off-cash-prv-2022-wrt-1',
        paperId: 'nonit-off-cash-prv-2022',
        questionPaperCode: 'PUBALI-CITY-CASH-2022',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'A bank teller has a bundle of 150 currency notes consisting only of Tk. 500 and Tk. 1,000 denominations. If the total value of the bundle is Tk. 1,12,500, find the exact number of Tk. 500 notes and Tk. 1,000 notes in the bundle.',
        solution: `Step-by-Step Solution:
1. Let the number of Tk. 500 notes be x.
   Then the number of Tk. 1,000 notes = (150 - x).

2. Form the total value equation:
   500x + 1000(150 - x) = 1,12,500
   500x + 1,50,000 - 1000x = 1,12,500
   500x = 1,50,000 - 1,12,500
   500x = 37,500
   x = 37,500 / 500 = 75.

3. Number of Tk. 500 notes = 75 (Value = Tk. 37,500).
   Number of Tk. 1,000 notes = 150 - 75 = 75 (Value = Tk. 75,000).
   Verification: 37,500 + 75,000 = Tk. 1,12,500.
Answer: 75 notes of Tk. 500 and 75 notes of Tk. 1,000.`
      }
    ]
  },

  // ============================================================================
  // 10. 2021 - PRIVATE BANK - DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'nonit-deco-prv-2021',
    questionPaperCode: 'IBBL-DBBL-DECO-2021',
    title: 'Islami Bank & DBBL Data Entry / Control Operator (ADC & Back Office) Exam 2021',
    category: 'Data Entry / Control Operator',
    orgType: 'Private Bank',
    organizationName: 'Islami Bank Bangladesh PLC & Dutch-Bangla Bank PLC',
    examTaker: 'HR & External Recruitment Board',
    year: 2021,
    examDate: 'November 2021',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: 'Private Bank Back-Office Data Entry & Control Operator exam covering CBS Account Opening KYC Verification, CSV/Excel Data Cleaning, Keyboard Shortcuts, and Written Arithmetic.',
    questions: [
      {
        id: 'deco-prv-2021-mcq-1',
        paperId: 'nonit-deco-prv-2021',
        questionPaperCode: 'IBBL-DBBL-DECO-2021',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In MS Excel, which function removes all leading and trailing spaces from text imported from an external banking CSV file while leaving single spaces between words?',
        options: [
          'A) CLEAN()',
          'B) TRIM()',
          'C) MID()',
          'D) PROPER()'
        ],
        correctAnswer: 'B) TRIM()',
        solution: `The TRIM() function removes all extra leading, trailing, and duplicate internal spaces from text strings, which is essential before running VLOOKUP or matching customer names in Excel.
Correct Answer: B) TRIM().`
      },
      {
        id: 'deco-prv-2021-wrt-1',
        paperId: 'nonit-deco-prv-2021',
        questionPaperCode: 'IBBL-DBBL-DECO-2021',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 25,
        questionText: 'Explain the "Maker-Checker" (Dual Control) principle in banking Data Entry & Control operations. Why should a Data Entry Operator never have both Maker and Checker privileges in the Core Banking System?',
        solution: `Model Solution (25 Marks):

1. Definition of Maker-Checker Principle:
   - Maker (Data Entry Operator): Enters the customer KYC, remittance instruction, or voucher data into the Core Banking System (CBS) in "Unuthorized / Pending" status.
   - Checker (Control Operator / Authorizer): Independently verifies every field (Account Number, Amount, Beneficiary Name, Source Document) against the physical instrument before approving/posting the transaction to the General Ledger.

2. Why Separation of Duties is Mandatory:
   - Error Detection: Catches human typographical, transposition, and decimal-shift errors before funds leave the bank.
   - Fraud Prevention: Prevents a single insider from fabricating fictitious credit entries or altering dormant account details without independent oversight.`
      }
    ]
  },

  // ============================================================================
  // 11. 2020 - PRIVATE BANK - COMPUTER OPERATOR
  // ============================================================================
  {
    paperId: 'nonit-comp-op-prv-2020',
    questionPaperCode: 'PRIME-UCB-COMP-OP-2020',
    title: 'Prime Bank & UCB Computer Operator / IT Support Desk Exam 2020',
    category: 'Computer Operator',
    orgType: 'Private Bank',
    organizationName: 'Prime Bank PLC & United Commercial Bank PLC',
    examTaker: 'BIBM',
    year: 2020,
    examDate: 'December 2020',
    mcqMarks: 80,
    writtenMarks: 70,
    summary: 'Private Bank Computer Operator paper covering Spreadsheet Pivot Tables, Document Formatting, MICR Scanner Maintenance, and Written Math.',
    questions: [
      {
        id: 'comp-op-prv-2020-mcq-1',
        paperId: 'nonit-comp-op-prv-2020',
        questionPaperCode: 'PRIME-UCB-COMP-OP-2020',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'While working in Microsoft Excel, pressing which shortcut key converts a relative cell reference (e.g., A1) into an absolute cell reference ($A$1)?',
        options: [
          'A) F2',
          'B) F4',
          'C) F7',
          'D) F9'
        ],
        correctAnswer: 'B) F4',
        solution: `Pressing F4 while editing a formula in MS Excel cycles through absolute ($A$1), mixed (A$1, $A1), and relative (A1) cell references.
Correct Answer: B) F4.`
      },
      {
        id: 'comp-op-prv-2020-wrt-1',
        paperId: 'nonit-comp-op-prv-2020',
        questionPaperCode: 'PRIME-UCB-COMP-OP-2020',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 25,
        questionText: 'How do you create a Pivot Table in MS Excel to summarize branch-wise deposit mobilization from a 10,000-row transaction sheet? Explain the role of Rows, Columns, Values, and Filters in a Pivot Table.',
        solution: `Step-by-Step Solution:
1. Preparation: Ensure the source table has clean column headers (e.g., Date, Branch_Name, Account_Type, Deposit_Amount) with no blank header cells.
2. Creation Steps: Select any cell inside the dataset -> Go to Insert Tab -> Click 'PivotTable' -> Choose 'New Worksheet' -> Click OK.
3. Field Configuration:
   - Rows Area: Drag 'Branch_Name' here to list each branch on a unique row.
   - Columns Area: Drag 'Account_Type' (Current, Savings, FDR, DPS) to break down deposits across columns.
   - Values Area: Drag 'Deposit_Amount' here and set Value Field Settings to 'Sum' (formatted as Currency).
   - Filters Area: Drag 'Month / Quarter' here to allow management to filter branch deposits by specific reporting periods.`
      }
    ]
  },

  // ============================================================================
  // 12. 2019 - GOVERNMENT BANK - OFFICER (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-off-gen-govt-2019',
    questionPaperCode: 'BSCS-OFF-GEN-2019',
    title: 'Combined 8 Banks Officer (General) Recruitment Exam 2019',
    category: 'Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB & RAKUB',
    examTaker: 'Arts Faculty, University of Dhaka (BSCS)',
    year: 2019,
    examDate: 'December 2019',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: '2019 Combined Officer (General) MCQ and Written examination covering Train & Platform Math, Percentage & Tax Calculation, Focus Writing on Remittance, and Translation.',
    questions: [
      {
        id: 'off-gen-2019-mcq-1',
        paperId: 'nonit-off-gen-govt-2019',
        questionPaperCode: 'BSCS-OFF-GEN-2019',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'A train 180 meters long is running at a speed of 72 km/h. How many seconds will it take to cross a platform 220 meters long?',
        options: [
          'A) 15 seconds',
          'B) 18 seconds',
          'C) 20 seconds',
          'D) 24 seconds'
        ],
        correctAnswer: 'C) 20 seconds',
        solution: `Speed in m/s = 72 × (5 / 18) = 20 m/s.
Total distance to cover = Length of train + Length of platform = 180 + 220 = 400 meters.
Time taken = 400 / 20 = 20 seconds.
Correct Answer: C) 20 seconds.`
      },
      {
        id: 'off-gen-2019-wrt-1',
        paperId: 'nonit-off-gen-govt-2019',
        questionPaperCode: 'BSCS-OFF-GEN-2019',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'English Language & Focus Writing',
        marks: 35,
        questionText: 'Write a detailed essay on: "Channelling Wage Earners’ Remittance Through Formal Banking Channels: Incentives, Exchange Rate Policy, and Curbing Hundi."',
        solution: `Model Essay Summary (35 Marks):
1. Macroeconomic Importance of Remittance:
   - Second-largest source of foreign exchange earnings in Bangladesh after RMG exports; directly bolsters foreign exchange reserves and rural household consumption.
2. Challenges of Informal Channels (Hundi / Hawala):
   - Price differentials between official banking exchange rates and informal kerb rates.
   - Trade misinvoicing and capital flight creating demand for illicit foreign currency settlements abroad.
3. Policy Measures to Boost Formal Remittance:
   - Government cash incentive (2.5%) on inward remittance sent through legal banking and MFS channels.
   - Simplification of digital remittance apps, zero remittance fees, and instant mobile wallet disbursement.
   - Competitive market-aligned exchange rates and strict BFIU surveillance against illicit hundi syndicates.`
      }
    ]
  },

  // ============================================================================
  // 13. 2018 - GOVERNMENT BANK - SENIOR OFFICER (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-so-gen-govt-2018',
    questionPaperCode: 'BSCS-SO-8BANK-2018',
    title: 'Combined 8 Banks Senior Officer (General) Exam 2018 (1663 Posts)',
    category: 'Senior Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB, RAKUB & BHBFC',
    examTaker: 'BIBM / BSCS',
    year: 2018,
    examDate: 'May 2018',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: 'Landmark Combined 8 Banks Senior Officer (General) 2018 exam covering Set Theory (Venn Diagram), Geometry, Reading Comprehension, and Financial Inclusion Essay.',
    questions: [
      {
        id: 'so-gen-2018-mcq-1',
        paperId: 'nonit-so-gen-govt-2018',
        questionPaperCode: 'BSCS-SO-8BANK-2018',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Bangla Language & Literature',
        marks: 1,
        questionText: 'রবীন্দ্রনাথ ঠাকুরের ‘গীতাঞ্জলি’ কাব্যগ্রন্থটি কত সালে প্রকাশিত হয়?',
        options: [
          'A) ১৯০৮ সালে',
          'B) ১৯১০ সালে',
          'C) ১৯১২ সালে',
          'D) ১৯১৩ সালে'
        ],
        correctAnswer: 'B) ১৯১০ সালে',
        solution: `রবীন্দ্রনাথ ঠাকুরের মূল বাংলা ‘গীতাঞ্জলি’ কাব্যগ্রন্থটি ১৯১০ সালে (১৩১৭ বঙ্গাব্দে) প্রকাশিত হয়। এর ইংরেজি অনুবাদ 'Song Offerings' ১৯১২ সালে প্রকাশিত হয় এবং ১৯১৩ সালে নোবেল পুরস্কার লাভ করে।
সঠিক উত্তর: B) ১৯১০ সালে।`
      },
      {
        id: 'so-gen-2018-wrt-1',
        paperId: 'nonit-so-gen-govt-2018',
        questionPaperCode: 'BSCS-SO-8BANK-2018',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'In a survey of 400 bank customers, 260 use Mobile Banking, 210 use Internet Banking, and 50 use neither of the two services. Find how many customers use: (i) both Mobile and Internet Banking, and (ii) Mobile Banking only.',
        solution: `Step-by-Step Venn Diagram Solution:
1. Total customers surveyed n(U) = 400.
   Customers using neither service = 50.
   Therefore, customers using at least one service n(M ∪ I) = 400 - 50 = 350.

2. Given:
   Customers using Mobile Banking n(M) = 260.
   Customers using Internet Banking n(I) = 210.

3. Using the Set Union formula:
   n(M ∪ I) = n(M) + n(I) - n(M ∩ I)
   350 = 260 + 210 - n(M ∩ I)
   350 = 470 - n(M ∩ I)
   n(M ∩ I) = 470 - 350 = 120.

4. Customers using Mobile Banking only:
   n(M only) = n(M) - n(M ∩ I) = 260 - 120 = 140.
Answer: (i) Both services = 120 customers; (ii) Mobile Banking only = 140 customers.`
      }
    ]
  },

  // ============================================================================
  // 14. 2017 - GOVERNMENT BANK - OFFICER (CASH)
  // ============================================================================
  {
    paperId: 'nonit-off-cash-govt-2017',
    questionPaperCode: 'SONALI-JANATA-CASH-2017',
    title: 'Sonali Bank & Janata Bank Officer (Cash) Recruitment Exam 2017',
    category: 'Officer (Cash)',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank PLC & Janata Bank PLC',
    examTaker: 'BIBM / BSCS',
    year: 2017,
    examDate: 'August 2017',
    mcqMarks: 100,
    writtenMarks: 200,
    summary: '2017 Officer (Cash) recruitment exam featuring Commercial Arithmetic, Ratio & Proportion, Banking Abbreviations, and Bilingual Translation.',
    questions: [
      {
        id: 'off-cash-2017-mcq-1',
        paperId: 'nonit-off-cash-govt-2017',
        questionPaperCode: 'SONALI-JANATA-CASH-2017',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'Which authority signs the Tk. 2 and Tk. 5 currency notes/coins in Bangladesh?',
        options: [
          'A) Governor of Bangladesh Bank',
          'B) Finance Secretary (Senior Secretary, Finance Division)',
          'C) Finance Minister',
          'D) Managing Director of The Security Printing Corporation'
        ],
        correctAnswer: 'B) Finance Secretary (Senior Secretary, Finance Division)',
        solution: `In Bangladesh, Tk. 1, Tk. 2, and Tk. 5 notes/coins are Government notes bearing the signature of the Finance Secretary, whereas Tk. 10, 20, 50, 100, 200, 500, and 1000 notes are Bank notes signed by the Governor of Bangladesh Bank.
Correct Answer: B).`
      },
      {
        id: 'off-cash-2017-wrt-1',
        paperId: 'nonit-off-cash-govt-2017',
        questionPaperCode: 'SONALI-JANATA-CASH-2017',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'The monthly incomes of two officers are in the ratio 5 : 4 and their monthly expenditures are in the ratio 7 : 5. If each officer saves Tk. 15,000 per month, find their respective monthly incomes.',
        solution: `Step-by-Step Solution:
1. Let the monthly incomes of the two officers be 5x and 4x respectively.
2. Since Income - Savings = Expenditure:
   (5x - 15,000) / (4x - 15,000) = 7 / 5

3. Cross-multiply:
   5(5x - 15,000) = 7(4x - 15,000)
   25x - 75,000 = 28x - 1,05,000
   3x = 30,000
   x = 10,000.

4. Monthly Incomes:
   First Officer = 5 × 10,000 = Tk. 50,000.
   Second Officer = 4 × 10,000 = Tk. 40,000.
Answer: Tk. 50,000 and Tk. 40,000.`
      }
    ]
  },

  // ============================================================================
  // 15. 2016 - PRIVATE BANK - SENIOR OFFICER (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-so-gen-prv-2016',
    questionPaperCode: 'EBL-MTB-MTO-2016',
    title: 'Eastern Bank & Mutual Trust Bank Senior Officer / MTO Exam 2016',
    category: 'Senior Officer (General)',
    orgType: 'Private Bank',
    organizationName: 'Eastern Bank PLC & Mutual Trust Bank PLC',
    examTaker: 'IBA, University of Dhaka',
    year: 2016,
    examDate: 'September 2016',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: '2016 Private Bank MTO / Senior Officer (General) paper with IBA Critical Reasoning, Financial Ratio Analysis, and Written Case Study.',
    questions: [
      {
        id: 'so-prv-2016-mcq-1',
        paperId: 'nonit-so-gen-prv-2016',
        questionPaperCode: 'EBL-MTB-MTO-2016',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Analytical Ability & Accounting',
        marks: 1,
        questionText: 'A company has Current Assets of Tk. 18,00,000, Inventory of Tk. 6,00,000, and Current Liabilities of Tk. 9,00,000. What is its Quick Ratio (Acid-Test Ratio)?',
        options: [
          'A) 2.00 : 1',
          'B) 1.33 : 1',
          'C) 1.50 : 1',
          'D) 0.67 : 1'
        ],
        correctAnswer: 'B) 1.33 : 1',
        solution: `Quick Ratio = (Current Assets - Inventory) / Current Liabilities
= (18,00,000 - 6,00,000) / 9,00,000
= 12,00,000 / 9,00,000 = 4 / 3 = 1.33 : 1.
Correct Answer: B) 1.33 : 1.`
      },
      {
        id: 'so-prv-2016-wrt-1',
        paperId: 'nonit-so-gen-prv-2016',
        questionPaperCode: 'EBL-MTB-MTO-2016',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Analytical Ability & Accounting',
        marks: 25,
        questionText: 'What are the "5 Cs of Credit" used by commercial bank relationship managers when evaluating a corporate working capital loan proposal?',
        solution: `Model Solution (25 Marks):
1. Character: The borrower's reputation, track record of repayment (CIB report), and management integrity.
2. Capacity: The borrower's cash flow generation ability and Debt Service Coverage Ratio (DSCR) to repay principal and interest on schedule.
3. Capital: The owner's equity contribution (net worth) and leverage ratio (Debt-to-Equity), showing skin in the game.
4. Collateral: Primary and secondary security (registered mortgage of land/building, hypothecation of inventory/machinery) pledged as fallback recovery.
5. Conditions: Macroeconomic environment, industry outlook, supply chain stability, and specific loan covenants.`
      }
    ]
  },

  // ============================================================================
  // 16. 2015 - GOVERNMENT BANK - DATA ENTRY / CONTROL OPERATOR
  // ============================================================================
  {
    paperId: 'nonit-deco-govt-2015',
    questionPaperCode: 'BB-AGRANI-DECO-2015',
    title: 'Bangladesh Bank & Agrani Bank Data Entry / Control Operator Exam 2015',
    category: 'Data Entry / Control Operator',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank & Agrani Bank PLC',
    examTaker: 'Department of MIS, University of Dhaka',
    year: 2015,
    examDate: 'June 2015',
    mcqMarks: 80,
    writtenMarks: 100,
    summary: '2015 Government Bank Data Entry / Control Operator exam covering DBMS Keys, Number System Conversions, Spreadsheet Operations, and Written Math.',
    questions: [
      {
        id: 'deco-2015-mcq-1',
        paperId: 'nonit-deco-govt-2015',
        questionPaperCode: 'BB-AGRANI-DECO-2015',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'What is the binary equivalent of the decimal number 45?',
        options: [
          'A) 101101',
          'B) 110101',
          'C) 101011',
          'D) 100111'
        ],
        correctAnswer: 'A) 101101',
        solution: `32 + 8 + 4 + 1 = 45
Binary weights (32, 16, 8, 4, 2, 1): 1 0 1 1 0 1 = 101101_2.
Correct Answer: A) 101101.`
      },
      {
        id: 'deco-2015-wrt-1',
        paperId: 'nonit-deco-govt-2015',
        questionPaperCode: 'BB-AGRANI-DECO-2015',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Computer & Basic ICT',
        marks: 25,
        questionText: 'Define Primary Key, Foreign Key, and Unique Constraint in a bank customer database table. Why is a Customer ID (CIF) chosen as a Primary Key instead of the Customer Name?',
        solution: `Model Solution:
1. Primary Key: A column (or set of columns) that uniquely identifies every record in a database table. It cannot contain NULL values and must be unique (e.g., Customer_CIF_ID or Account_No).
2. Foreign Key: A field in a child table (e.g., Transactions table) that references the Primary Key of a parent table (e.g., Accounts table) to enforce referential integrity.
3. Why CIF ID is used instead of Customer Name:
   Multiple customers can share the exact same name (e.g., "Md. Rahim Uddin"), and names may change or have spelling variations. A system-generated numeric/alphanumeric CIF ID guarantees 100% uniqueness and faster indexing.`
      }
    ]
  },

  // ============================================================================
  // 17. 2014 - GOVERNMENT BANK - COMPUTER OPERATOR
  // ============================================================================
  {
    paperId: 'nonit-comp-op-govt-2014',
    questionPaperCode: 'JANATA-RUPALI-CO-2014',
    title: 'Janata Bank & Rupali Bank Computer Operator Recruitment Exam 2014',
    category: 'Computer Operator',
    orgType: 'Government Bank',
    organizationName: 'Janata Bank PLC & Rupali Bank PLC',
    examTaker: 'Faculty of Business Studies, DU',
    year: 2014,
    examDate: 'October 2014',
    mcqMarks: 80,
    writtenMarks: 100,
    summary: '2014 State-Owned Bank Computer Operator exam covering Operating System Shortcuts, MS Office Suite, Hardware Peripherals, and Written Arithmetic.',
    questions: [
      {
        id: 'comp-op-2014-mcq-1',
        paperId: 'nonit-comp-op-govt-2014',
        questionPaperCode: 'JANATA-RUPALI-CO-2014',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Computer & Basic ICT',
        marks: 1,
        questionText: 'In Microsoft Word, what is the keyboard shortcut to apply "Justify" alignment to a selected official letter paragraph?',
        options: [
          'A) Ctrl + L',
          'B) Ctrl + E',
          'C) Ctrl + R',
          'D) Ctrl + J'
        ],
        correctAnswer: 'D) Ctrl + J',
        solution: `In MS Word:
Ctrl + L = Left Align
Ctrl + E = Center Align
Ctrl + R = Right Align
Ctrl + J = Justify Align (aligns text evenly along both left and right margins).
Correct Answer: D) Ctrl + J.`
      },
      {
        id: 'comp-op-2014-wrt-1',
        paperId: 'nonit-comp-op-govt-2014',
        questionPaperCode: 'JANATA-RUPALI-CO-2014',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'A bank branch purchased 8 desktop computers and 4 laser printers for Tk. 4,40,000. At the same rate, another branch purchased 5 desktop computers and 3 laser printers for Tk. 2,85,000. Find the unit price of 1 desktop computer and 1 laser printer.',
        solution: `Step-by-Step Solution:
1. Let the price of 1 desktop computer = Tk. x and 1 laser printer = Tk. y.
   8x + 4y = 4,40,000 => Divide by 4 => 2x + y = 1,10,000 --- (Equation 1)
   5x + 3y = 2,85,000 --- (Equation 2)

2. From Equation 1: y = 1,10,000 - 2x.
   Substitute into Equation 2:
   5x + 3(1,10,000 - 2x) = 2,85,000
   5x + 3,30,000 - 6x = 2,85,000
   x = 3,30,000 - 2,85,000 = Tk. 45,000.

3. Substitute x = 45,000 into y:
   y = 1,10,000 - 2(45,000) = 1,10,000 - 90,000 = Tk. 20,000.
Answer: 1 Desktop Computer = Tk. 45,000; 1 Laser Printer = Tk. 20,000.`
      }
    ]
  },

  // ============================================================================
  // 18. 2013 - GOVERNMENT BANK - SENIOR OFFICER (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-so-gen-govt-2013',
    questionPaperCode: 'SONALI-JANATA-SO-2013',
    title: 'Sonali, Janata & Agrani Bank Senior Officer (General) Exam 2013',
    category: 'Senior Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank & Agrani Bank',
    examTaker: 'Faculty of Business Studies, DU',
    year: 2013,
    examDate: 'September 2013',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: '2013 State-Owned Commercial Bank Senior Officer (General) exam covering Work & Time Math, Green Banking Focus Writing, and Translation.',
    questions: [
      {
        id: 'so-gen-2013-mcq-1',
        paperId: 'nonit-so-gen-govt-2013',
        questionPaperCode: 'SONALI-JANATA-SO-2013',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'English Language & Focus Writing',
        marks: 1,
        questionText: 'What is the meaning of the idiom "To pay through the nose"?',
        options: [
          'A) To pay a very low price',
          'B) To pay an extremely high or excessive price',
          'C) To refuse to pay a debt',
          'D) To pay in installments'
        ],
        correctAnswer: 'B) To pay an extremely high or excessive price',
        solution: `The idiom "pay through the nose" means to pay an exorbitantly high price for something.
Correct Answer: B).`
      },
      {
        id: 'so-gen-2013-wrt-1',
        paperId: 'nonit-so-gen-govt-2013',
        questionPaperCode: 'SONALI-JANATA-SO-2013',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'English Language & Focus Writing',
        marks: 30,
        questionText: 'Write a short analytical essay on: "Green Banking and Sustainable Finance in Bangladesh: Role of Banks in Climate Resilience."',
        solution: `Model Essay Summary:
- Green Banking integrates environmental risk assessment (EnvRR) into credit appraisal before financing industrial projects (such as brick kilns, tanneries, and textiles).
- Bangladesh Bank's Refinance Schemes for renewable energy (solar irrigation, biogas, Effluent Treatment Plants - ETP) provide low-cost credit to eco-friendly industries.
- In-house green operations include paperless e-Nothi/online banking, solar-powered branches, and sustainable finance targets.`
      }
    ]
  },

  // ============================================================================
  // 19. 2012 - PRIVATE BANK - OFFICER (GENERAL)
  // ============================================================================
  {
    paperId: 'nonit-off-gen-prv-2012',
    questionPaperCode: 'BANKASIA-JAMUNA-PO-2012',
    title: 'Bank Asia & Jamuna Bank Probationary Officer / Officer (General) Exam 2012',
    category: 'Officer (General)',
    orgType: 'Private Bank',
    organizationName: 'Bank Asia PLC & Jamuna Bank PLC',
    examTaker: 'IBA, University of Dhaka',
    year: 2012,
    examDate: 'November 2012',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: '2012 Private Commercial Bank Officer (General) paper covering Mixture Math, SME Financing, and Business Letter Writing.',
    questions: [
      {
        id: 'off-prv-2012-mcq-1',
        paperId: 'nonit-off-gen-prv-2012',
        questionPaperCode: 'BANKASIA-JAMUNA-PO-2012',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'A mixture of 60 liters of milk and water contains 10% water. How much water must be added to make the water content 25% in the new mixture?',
        options: [
          'A) 10 liters',
          'B) 12 liters',
          'C) 15 liters',
          'D) 9 liters'
        ],
        correctAnswer: 'B) 12 liters',
        solution: `Initial water = 10% of 60 = 6 liters; Initial milk = 54 liters.
Let x liters of water be added.
(6 + x) / (60 + x) = 25 / 100 = 1 / 4
24 + 4x = 60 + x => 3x = 36 => x = 12 liters.
Correct Answer: B) 12 liters.`
      },
      {
        id: 'off-prv-2012-wrt-1',
        paperId: 'nonit-off-gen-prv-2012',
        questionPaperCode: 'BANKASIA-JAMUNA-PO-2012',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Translation (English ↔ Bangla)',
        marks: 25,
        questionText: 'Translate into Bangla: "Small and Medium Enterprises (SMEs) act as the engine of employment generation in developing economies. By extending collateral-free credit to women entrepreneurs, commercial banks can accelerate inclusive rural development."',
        solution: `Model Bangla Translation:
"উন্নয়নশীল অর্থনীতিতে ক্ষুদ্র ও মাঝারি শিল্পোদ্যোগ (এসএমই) কর্মসংস্থান সৃষ্টির মূল চালিকাশক্তি হিসেবে কাজ করে। নারী উদ্যোক্তাদের জামানতবিহীন ঋণ সুবিধা সম্প্রসারণের মাধ্যমে বাণিজ্যিক ব্যাংকগুলো অন্তর্ভুক্তিমূলক গ্রামীণ উন্নয়নকে ত্বরান্বিত করতে পারে।"`
      }
    ]
  },

  // ============================================================================
  // 20. 2011 - GOVERNMENT BANK - OFFICER (CASH)
  // ============================================================================
  {
    paperId: 'nonit-off-cash-govt-2011',
    questionPaperCode: 'BB-SONALI-CASH-2011',
    title: 'Bangladesh Bank Cash Officer & Sonali Bank Officer (Cash) Exam 2011',
    category: 'Officer (Cash)',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank & Sonali Bank',
    examTaker: 'BIBM',
    year: 2011,
    examDate: 'July 2011',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: '2011 Bangladesh Bank & Sonali Bank Cash Officer exam covering Interest & Discount Math, Bangla Literature, and Banking Terminology.',
    questions: [
      {
        id: 'off-cash-2011-mcq-1',
        paperId: 'nonit-off-cash-govt-2011',
        questionPaperCode: 'BB-SONALI-CASH-2011',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'What is the relationship between a Banker and a Customer when the customer deposits money into a Savings or Current Account?',
        options: [
          'A) Principal and Agent',
          'B) Debtor (Banker) and Creditor (Customer)',
          'C) Bailor and Bailee',
          'D) Trustee and Beneficiary'
        ],
        correctAnswer: 'B) Debtor (Banker) and Creditor (Customer)',
        solution: `When a customer deposits money in a bank account, the bank borrows the money with an obligation to repay on demand; hence the primary relationship is that of Debtor (Banker) and Creditor (Customer). (Conversely, for a safe deposit locker, it is Bailor/Lessor and Bailee/Lessee).
Correct Answer: B).`
      },
      {
        id: 'off-cash-2011-wrt-1',
        paperId: 'nonit-off-cash-govt-2011',
        questionPaperCode: 'BB-SONALI-CASH-2011',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 25,
        questionText: 'At what annual rate of simple interest will a sum of money double itself in 8 years? Also find in how many years it will become 4 times itself at the same rate.',
        solution: `Step-by-Step Solution:
1. Let Principal = P. To double itself, Amount = 2P, so Simple Interest (I) = 2P - P = P.
   Rate R = (I × 100) / (P × T) = (P × 100) / (P × 8) = 12.5% per annum.

2. For the sum to become 4 times itself (Amount = 4P), required Simple Interest I' = 4P - P = 3P.
   Time T' = (I' × 100) / (P × R) = (3P × 100) / (P × 12.5) = 300 / 12.5 = 24 years.
Answer: Rate = 12.5% per annum; Time to quadruple = 24 years.`
      }
    ]
  },

  // ============================================================================
  // 21. 2010 - GOVERNMENT BANK - OFFICER (GENERAL) & SENIOR OFFICER ARCHIVE
  // ============================================================================
  {
    paperId: 'nonit-off-gen-govt-2010',
    questionPaperCode: 'BB-AD-SONALI-2010',
    title: 'Bangladesh Bank AD (General) & Sonali/Janata/Agrani Officer Exam 2010',
    category: 'Officer (General)',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank, Janata Bank & Agrani Bank',
    examTaker: 'IBA / BIBM',
    year: 2010,
    examDate: 'October 2010',
    mcqMarks: 100,
    writtenMarks: 100,
    summary: 'Foundational 2010 Bank Recruitment Examination archive containing classic IBA Quantitative Math, Analogy & Vocabulary, and Financial Sector Reform Written Solutions.',
    questions: [
      {
        id: 'off-gen-2010-mcq-1',
        paperId: 'nonit-off-gen-govt-2010',
        questionPaperCode: 'BB-AD-SONALI-2010',
        questionNo: 'MCQ-01',
        questionType: 'MCQ',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 1,
        questionText: 'If the radius of a circle is increased by 20%, by what percentage does its area increase?',
        options: [
          'A) 20%',
          'B) 40%',
          'C) 44%',
          'D) 48%'
        ],
        correctAnswer: 'C) 44%',
        solution: `Using successive percentage formula:
Net % increase in Area = a + b + (ab / 100) = 20 + 20 + (400 / 100) = 44%.
Correct Answer: C) 44%.`
      },
      {
        id: 'off-gen-2010-mcq-2',
        paperId: 'nonit-off-gen-govt-2010',
        questionPaperCode: 'BB-AD-SONALI-2010',
        questionNo: 'MCQ-02',
        questionType: 'MCQ',
        subject: 'General Knowledge & Banking Economy',
        marks: 1,
        questionText: 'Under which Presidential Order was Bangladesh Bank established after the Liberation War of 1971?',
        options: [
          'A) Bangladesh Bank Order, 1972 (President’s Order No. 127 of 1972)',
          'B) Banking Companies Ordinance, 1962',
          'C) Bangladesh Banks (Nationalisation) Order, 1972 (P.O. No. 26)',
          'D) Financial Institutions Act, 1993'
        ],
        correctAnswer: 'A) Bangladesh Bank Order, 1972 (President’s Order No. 127 of 1972)',
        solution: `Bangladesh Bank was established as the central bank of Bangladesh under the Bangladesh Bank Order, 1972 (President's Order No. 127 of 1972), taking effect retroactively from 16th December 1971.
Correct Answer: A).`
      },
      {
        id: 'off-gen-2010-wrt-1',
        paperId: 'nonit-off-gen-govt-2010',
        questionPaperCode: 'BB-AD-SONALI-2010',
        questionNo: 'Written-01',
        questionType: 'Written',
        subject: 'Mathematics & Quantitative Aptitude',
        marks: 30,
        questionText: 'A father is currently 3 times as old as his son. 12 years ago, the father was 6 times as old as his son. Find the present ages of the father and the son.',
        solution: `Step-by-Step Algebraic Solution:
1. Let the present age of the son = x years.
   Then the present age of the father = 3x years.

2. Ages 12 years ago:
   Son's age = (x - 12) years.
   Father's age = (3x - 12) years.

3. According to the condition:
   3x - 12 = 6(x - 12)
   3x - 12 = 6x - 72
   3x = 60
   x = 20.

4. Present Ages:
   Son = 20 years.
   Father = 3 × 20 = 60 years.
Answer: Father = 60 years, Son = 20 years.`
      }
    ]
  }
];

// Merge core papers with scraped 2010–2026 Govt Bank & Govt Ministry/Field MCQ + Written Archive
const mergedPapersMap = new Map<string, NonItExamPaper>();

const full100McqPaperIds = new Set([
  ...officerGeneralPapers2010To2026.map(p => p.paperId),
  ...seniorOfficerGeneralPapers2010To2026.map(p => p.paperId),
  ...officerCashPapers2010To2026.map(p => p.paperId)
]);

[
  ...seniorOfficerGeneralPapers2010To2026,
  ...officerGeneralPapers2010To2026,
  ...officerCashPapers2010To2026,
  ...coreBankNonItExamPapers.filter(
    p => !full100McqPaperIds.has(p.paperId) && p.category !== 'Officer (Cash)'
  ),
  ...govtAndBankNonItArchivePapers.filter(
    p => !full100McqPaperIds.has(p.paperId) && p.category !== 'Officer (Cash)'
  ),
  ...govtNonItMcqMasterPapers.filter(
    p => !full100McqPaperIds.has(p.paperId) && p.category !== 'Officer (Cash)'
  ),
  ...computerAndDataEntryPapers2010To2026
].forEach(paper => {
  const existing = mergedPapersMap.get(paper.paperId);
  if (!existing) {
    mergedPapersMap.set(paper.paperId, paper);
  } else {
    const existingIds = new Set(existing.questions.map(q => q.id));
    const additionalQuestions = paper.questions.filter(q => !existingIds.has(q.id));
    mergedPapersMap.set(paper.paperId, {
      ...existing,
      questions: [...existing.questions, ...additionalQuestions]
    });
  }
});

const allMergedPapers: NonItExamPaper[] = Array.from(mergedPapersMap.values()).sort(
  (a, b) => b.year - a.year
);

// 2. Bank Non-IT Prep Papers (ONLY Senior Officer General, Officer General, and Officer Cash)
export const bankNonItExamPapers: NonItExamPaper[] = allMergedPapers.filter(
  p =>
    p.category === 'Senior Officer (General)' ||
    p.category === 'Officer (General)' ||
    p.category === 'Officer (Cash)'
);

// 1. Bank IT Prep — Computer Operator & Data Entry / Control Operator Papers (2010–2026)
// Preserve authentic original questions per paper and eliminate duplicate questions across the Bank IT Operator archive
const seenItOperatorQuestionTexts = new Set<string>();
export const bankItOperatorExamPapers: NonItExamPaper[] = allMergedPapers
  .filter(
    p =>
      p.category === 'Computer Operator' ||
      p.category === 'Data Entry / Control Operator'
  )
  .map(paper => {
    const uniqueQuestions = paper.questions.filter(q => {
      const normalized = q.questionText.trim().toLowerCase().replace(/\s+/g, ' ');
      if (seenItOperatorQuestionTexts.has(normalized)) {
        return false;
      }
      seenItOperatorQuestionTexts.add(normalized);
      return true;
    });
    return {
      ...paper,
      questions: uniqueQuestions
    };
  })
  .filter(paper => paper.questions.length > 0);

export function getTotalNonItQuestionsCount(): number {
  return bankNonItExamPapers.reduce((sum, p) => sum + p.questions.length, 0);
}

export function getTotalNonItMcqCount(): number {
  return bankNonItExamPapers.reduce(
    (sum, p) => sum + p.questions.filter(q => q.questionType === 'MCQ').length,
    0
  );
}

export function getTotalNonItWrittenCount(): number {
  return bankNonItExamPapers.reduce(
    (sum, p) => sum + p.questions.filter(q => q.questionType === 'Written').length,
    0
  );
}

export function getTotalItOperatorQuestionsCount(): number {
  return bankItOperatorExamPapers.reduce((sum, p) => sum + p.questions.length, 0);
}

export function getTotalItOperatorMcqCount(): number {
  return bankItOperatorExamPapers.reduce(
    (sum, p) => sum + p.questions.filter(q => q.questionType === 'MCQ').length,
    0
  );
}

export function getTotalItOperatorWrittenCount(): number {
  return bankItOperatorExamPapers.reduce(
    (sum, p) => sum + p.questions.filter(q => q.questionType === 'Written').length,
    0
  );
}

