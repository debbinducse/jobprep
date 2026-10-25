import { OfficerMcqQuestionDef } from './types';

export const officerBankingQuestionsPool: OfficerMcqQuestionDef[] = [
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'What is the full abbreviation and primary function of an ATM in commercial banking?',
    options: [
      'A) Automated Teller Machine — provides cash dispensing and account inquiry without branch teller intervention',
      'B) Any Time Money — an internet banking wire service',
      'C) Automatic Transaction Monitor — an internal database trigger',
      'D) Authorized Transfer Mechanism — interbank clearing switch'
    ],
    correctOption: 0,
    solution: 'ATM stands for Automated Teller Machine. It allows bank account holders to withdraw cash, deposit funds, check balances, and perform transfers 24/7 without needing direct bank staff assistance.',
    tags: ['Banking', 'ATM', 'Self-service Banking', 'Hardware'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'What is the 3-digit security code printed on the signature strip on the back of Visa and Mastercard debit/credit cards called?',
    options: [
      'A) PIN (Personal Identification Number)',
      'B) CVV / CVC (Card Verification Value / Code)',
      'C) OTP (One-Time Password)',
      'D) BIC (Bank Identifier Code)'
    ],
    correctOption: 1,
    solution: 'CVV (Card Verification Value) or CVC is a 3-digit (or 4-digit on Amex) cryptographic security code printed on physical payment cards to authenticate Card-Not-Present (CNP) e-commerce transactions.',
    tags: ['Banking', 'CVV', 'Payment Cards', 'Security'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'Which entity serves as the Central Bank and statutory apex regulatory body for all commercial scheduled banks and financial institutions in Bangladesh?',
    options: [
      'A) Ministry of Finance',
      'B) Bangladesh Bank',
      'C) Bangladesh Securities and Exchange Commission (BSEC)',
      'D) Sonali Bank PLC'
    ],
    correctOption: 1,
    solution: 'Bangladesh Bank is the central bank of Bangladesh, established under the Bangladesh Bank Order 1972 (President’s Order No. 127 of 1972) with retrospective effect from 16 December 1971.',
    tags: ['Banking', 'Bangladesh Bank', 'Central Bank', 'Regulatory Bodies'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'What does the abbreviation "NPSB" stand for in Bangladesh’s national financial infrastructure?',
    options: [
      'A) National Payment Switch Bangladesh',
      'B) National Postal Savings Bank',
      'C) Non-Performing Sovereign Bond',
      'D) National Protocol for Scheduled Banks'
    ],
    correctOption: 0,
    solution: 'NPSB stands for National Payment Switch Bangladesh. It is an electronic payment platform operated by Bangladesh Bank that facilitates interoperability among scheduled banks for ATM, POS, and internet banking fund transfers (IBFT).',
    tags: ['Banking', 'NPSB', 'Payment Systems', 'Bangladesh Bank'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'What is the standard MICR (Magnetic Ink Character Recognition) band printed at the bottom of bank checks used for?',
    options: [
      'A) To record biometric thumb impressions',
      'B) To enable high-speed automated machine scanning of check numbers, routing numbers, and account numbers by clearing houses (BACPS)',
      'C) To prevent check paper from tearing',
      'D) To store encrypted QR codes'
    ],
    correctOption: 1,
    solution: 'MICR uses specialized magnetic ink containing iron oxide to print the check number, 9-digit bank routing number, and account number, allowing BACPS automated sorting machines to read and clear checks rapidly with near-zero error rates.',
    tags: ['Banking', 'MICR', 'BACPS', 'Check Clearing', 'Hardware'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'Under the Bangladesh Cyber Security Act, what is the maximum classification level of an ICT infrastructure whose disruption could significantly impact national security, public health, or financial stability?',
    options: [
      'A) Critical Information Infrastructure (CII)',
      'B) Public Utility Network',
      'C) Classified Cloud Repository',
      'D) Strategic Enterprise Domain'
    ],
    correctOption: 0,
    solution: 'Critical Information Infrastructure (CII) refers to any physical or virtual computer infrastructure declared by the Government whose damage, disruption, or destruction would have an incapacitating impact on national security, economy, public health, or financial transactions (e.g., Bangladesh Bank, NID, Power Grid).',
    tags: ['ICT Laws', 'CII', 'Cyber Security Act', 'Infrastructure'],
    difficulty: 'Medium'
  }
];
