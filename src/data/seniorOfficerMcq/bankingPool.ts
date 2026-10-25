import { McqQuestionDef } from './types';

export const bankingQuestionsPool: McqQuestionDef[] = [
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'What is the minimum transaction amount threshold for high-value interbank fund transfers processed through Bangladesh Bank’s Real-Time Gross Settlement (BD-RTGS) system?',
    options: [
      'A) Tk. 10,000',
      'B) Tk. 50,000',
      'C) Tk. 100,000 (1 Lakh)',
      'D) No minimum limit for individual retail customers'
    ],
    correctOption: 2,
    solution: 'Bangladesh Bank’s BD-RTGS system is designed for instantaneous, irrevocable settlement of large-value and time-critical interbank payments. The standard minimum transaction threshold for domestic currency transfers is Tk. 100,000 (1 Lakh BDT), with no upper ceiling.',
    tags: ['Banking', 'RTGS', 'Payment Systems', 'Bangladesh Bank'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'Which national interbank electronic payment platform in Bangladesh enables automated interbank check clearing (BACPS) and electronic direct credit/debit fund transfers (BEFTN)?',
    options: [
      'A) National Payment Switch Bangladesh (NPSB)',
      'B) Bangladesh Automated Clearing Operations (BACH)',
      'C) Binimoy Interoperable Digital Transaction Platform',
      'D) MFS Switch Gateway'
    ],
    correctOption: 1,
    solution: 'BACH (Bangladesh Automated Clearing House) is the umbrella infrastructure hosting two state-of-the-art engines: BACPS (Bangladesh Automated Cheque Processing System) and BEFTN (Bangladesh Electronic Funds Transfer Network).',
    tags: ['Banking', 'BACH', 'BEFTN', 'NPSB', 'Bangladesh Bank'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'Where is the National Tier-IV Data Center of Bangladesh located, which holds Uptime Institute Tier-IV certification for 99.995% uptime availability?',
    options: [
      'A) Agargaon, Dhaka',
      'B) Kaliakoir Hi-Tech Park, Gazipur',
      'C) Bangabandhu Hi-Tech City, Sylhet',
      'D) Cox’s Bazar Cable Landing Station'
    ],
    correctOption: 1,
    solution: 'The 4-Tier National Data Center is situated at Bangabandhu Hi-Tech City in Kaliakoir, Gazipur. It is the 7th largest data center in the world and the first in South Asia with Tier-IV Design and Facility certification.',
    tags: ['ICT Bangladesh', 'Tier-IV Data Center', 'Infrastructure', 'Kaliakoir'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'What is the name of the official Interoperable Digital Transaction Platform (IDTP) launched in Bangladesh to facilitate seamless money transfers between Banks and MFS providers (such as bKash, Rocket, Nagad)?',
    options: [
      'A) Surokkha',
      'B) Binimoy',
      'C) Nagorik',
      'D) Ekpay'
    ],
    correctOption: 1,
    solution: '"Binimoy" is the national Interoperable Digital Transaction Platform (IDTP) developed jointly by the ICT Division and Bangladesh Bank to allow interoperable peer-to-peer (P2P), person-to-merchant (P2M), and bank-to-MFS transactions.',
    tags: ['Banking', 'Binimoy', 'MFS', 'IDTP', 'Fintech'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'Under the Bangladesh Bank Guidelines on ICT Security for Scheduled Banks and Financial Institutions, how often must scheduled commercial banks perform external Vulnerability Assessment and Penetration Testing (VAPT)?',
    options: [
      'A) Once every 5 years',
      'B) At least once annually (or upon major system architectural changes)',
      'C) Only when an active breach occurs',
      'D) Once every 3 months for all workstations'
    ],
    correctOption: 1,
    solution: 'Bangladesh Bank ICT Security guidelines mandate that all scheduled banks and financial institutions conduct comprehensive external VAPT assessments on critical internet-facing banking systems and Core Banking Systems (CBS) at least once every calendar year or immediately following major infrastructural modifications.',
    tags: ['Cybersecurity', 'Bangladesh Bank', 'VAPT', 'ICT Security Guidelines'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'E-Governance & ICT Laws',
    questionText: 'Bangabandhu Satellite-1 (BS-1), the first geostationary communications satellite of Bangladesh, was launched into orbit on May 11, 2018, from which launch site?',
    options: [
      'A) Baikonur Cosmodrome, Kazakhstan',
      'B) Kennedy Space Center, Florida, USA',
      'C) Guiana Space Centre, Kourou, French Guiana',
      'D) Satish Dhawan Space Centre, Sriharikota, India'
    ],
    correctOption: 1,
    solution: 'Bangabandhu Satellite-1 was manufactured by Thales Alenia Space and launched into orbital slot 119.1° East on a SpaceX Falcon 9 rocket from Kennedy Space Center (LC-39A) in Florida, USA, on May 11, 2018.',
    tags: ['ICT Bangladesh', 'Bangabandhu Satellite', 'General Knowledge'],
    difficulty: 'Easy'
  }
];
