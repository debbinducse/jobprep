import { ExamPaper, ExamSection, TopicCategory } from '../types/exam';
import { officerItPapers } from './officerItExams';
import { seniorOfficerItPapers } from './seniorOfficerItExams';
import { assistantProgrammerPapers } from './assistantProgrammerExams';
import { historicalExams2010to2019 } from './historicalExams2010to2019';
import { privateBankPapers } from './privateBankExams';
import { bankItOperatorExamPapers } from './bankNonItQuestions';
import { seniorOfficerItPreliminaryMcqPapers } from './seniorOfficerMcq';
import { officerItPreliminaryMcqPapers } from './officerItMcq';
import { assistantProgrammerPreliminaryMcqPapers } from './assistantProgrammerMcq';

export const computerAndDataEntryItExamPapers: ExamPaper[] = bankItOperatorExamPapers.map(p => {
  const mcqQuestions = p.questions.filter(q => q.questionType === 'MCQ');
  const writtenQuestions = p.questions.filter(q => q.questionType === 'Written');

  const mapSubjectToTopic = (subject: string, questionText: string): TopicCategory => {
    const t = questionText.toLowerCase();
    if (subject.includes('Computer')) {
      if (
        t.includes('sql') ||
        t.includes('database') ||
        t.includes('rdbms') ||
        t.includes('primary key') ||
        t.includes('foreign key') ||
        t.includes('vlookup') ||
        t.includes('excel') ||
        t.includes('csv') ||
        t.includes('data validation') ||
        t.includes('table') ||
        t.includes('clean(') ||
        t.includes('trim(')
      ) {
        return 'Database & SQL';
      }
      if (
        t.includes('ip ') ||
        t.includes('ipv4') ||
        t.includes('ipconfig') ||
        t.includes('dns') ||
        t.includes('dhcp') ||
        t.includes('topology') ||
        t.includes('router') ||
        t.includes('switch') ||
        t.includes('network') ||
        t.includes('osi')
      ) {
        return 'Networking & Security';
      }
      if (
        t.includes('unicode') ||
        t.includes('bijoy') ||
        t.includes('avro') ||
        t.includes('nid') ||
        t.includes('e-nothi') ||
        t.includes('ibas') ||
        t.includes('micr') ||
        t.includes('omr') ||
        t.includes('ocr') ||
        t.includes('luhn') ||
        t.includes('wpm') ||
        t.includes('typing')
      ) {
        return 'E-Governance & ICT Laws';
      }
      if (
        t.includes('binary') ||
        t.includes('hexadecimal') ||
        t.includes('complement') ||
        t.includes('logic gate') ||
        t.includes('xor') ||
        t.includes('compiler') ||
        t.includes('algorithm')
      ) {
        return 'Programming & Algorithms';
      }
      if (t.includes('system software') || t.includes('application software') || t.includes('raid')) {
        return 'Software Engineering & System Design';
      }
      return 'Operating Systems & Linux';
    }
    if (subject.includes('General Knowledge')) {
      if (
        t.includes('bach') ||
        t.includes('rtgs') ||
        t.includes('beftn') ||
        t.includes('npsb') ||
        t.includes('ibas') ||
        t.includes('e-nothi') ||
        t.includes('data center') ||
        t.includes('nid') ||
        t.includes('e-kyc') ||
        t.includes('e-passport') ||
        t.includes('cca') ||
        t.includes('micr')
      ) {
        return 'E-Governance & ICT Laws';
      }
    }
    return 'Non-Technical & Language';
  };

  const sections: ExamSection[] = [];

  if (mcqQuestions.length > 0) {
    sections.push({
      id: `${p.paperId}-sec-mcq`,
      name: `Part A: Preliminary MCQ Examination (${mcqQuestions.length} Questions)`,
      marks: p.mcqMarks || mcqQuestions.length,
      description: `Full Preliminary Multiple Choice Question Set (${mcqQuestions.length} MCQs: Bangla, English, Mathematics, General Knowledge & Banking, Computer & Data Entry ICT) with 4 options and verified solutions.`,
      questions: mcqQuestions.map(q => ({
        id: q.id,
        questionNo: q.questionNo,
        type: 'mcq',
        topicCategory: mapSubjectToTopic(q.subject, q.questionText),
        questionText: q.questionText,
        options: q.options,
        solution: q.correctAnswer ? `Verified Correct Option: ${q.correctAnswer}\n\n${q.solution}` : q.solution,
        tags: [p.category, 'Preliminary MCQ', q.subject, String(p.year), p.questionPaperCode],
        marks: q.marks,
        difficulty: 'Medium'
      }))
    });
  }

  if (writtenQuestions.length > 0) {
    sections.push({
      id: `${p.paperId}-sec-written`,
      name: 'Part B: Written & Practical Examination',
      marks: p.writtenMarks || writtenQuestions.reduce((acc, q) => acc + q.marks, 0),
      description: 'Written descriptive, IT practical, math, and translation questions with complete model answers.',
      questions: writtenQuestions.map(q => ({
        id: q.id,
        questionNo: q.questionNo,
        type: 'descriptive',
        topicCategory: mapSubjectToTopic(q.subject, q.questionText),
        questionText: q.questionText,
        solution: q.solution,
        tags: [p.category, 'Written Exam', q.subject, String(p.year), p.questionPaperCode],
        marks: q.marks,
        difficulty: 'Medium'
      }))
    });
  }

  return {
    id: p.paperId,
    title: p.title,
    searchQuery: `${p.title} ${p.questionPaperCode}`,
    category: p.category === 'Computer Operator' ? 'Computer Operator' : 'Data Entry / Control Operator',
    jobId: p.questionPaperCode,
    circularYear: String(p.year),
    examDate: p.examDate,
    examBody: p.examTaker,
    participatingBanks: [p.organizationName],
    grade: 'Grade 10',
    totalMarks: (p.mcqMarks || 0) + (p.writtenMarks || 0),
    duration: '90 Minutes (MCQ) + 120 Minutes (Written)',
    examType: 'Full Combined Paper',
    summary: p.summary,
    keyTopics: ['Computer & Basic ICT', 'Bangla & English', 'Quantitative Math', 'General Knowledge'],
    sections
  };
});

export const allExamPapers: ExamPaper[] = [
  ...assistantProgrammerPreliminaryMcqPapers,
  ...officerItPreliminaryMcqPapers,
  ...seniorOfficerItPreliminaryMcqPapers,
  ...seniorOfficerItPapers,
  ...officerItPapers,
  ...privateBankPapers,
  ...assistantProgrammerPapers,
  ...historicalExams2010to2019,
  ...computerAndDataEntryItExamPapers
];

// Helper to get total question count
export const getTotalQuestionCount = (): number => {
  return allExamPapers.reduce((sum, paper) => {
    return sum + paper.sections.reduce((secSum, sec) => secSum + sec.questions.length, 0);
  }, 0);
};

// Helper to get all unique tags
export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  allExamPapers.forEach(paper => {
    paper.sections.forEach(sec => {
      sec.questions.forEach(q => {
        q.tags.forEach(t => tagSet.add(t));
      });
    });
  });
  return Array.from(tagSet).sort();
};

export const topicCategories: { id: TopicCategory; name: string; description: string }[] = [
  {
    id: 'Programming & Algorithms',
    name: 'Programming, Data Structures & Algorithms',
    description: 'C, C++, Java, Python, Matrix operations, Heaps, Trees, Dynamic Programming, Kadane, BFS/DFS, Dijkstra'
  },
  {
    id: 'Database & SQL',
    name: 'Database Management & SQL',
    description: 'Relational Schemas, Normalization (1NF to BCNF), Complex Queries, Aggregations, Window Functions, Triggers, Partitioning'
  },
  {
    id: 'Networking & Security',
    name: 'Networking, Cyber Security & Protocols',
    description: 'Subnetting, VLSM / CIDR calculations, OSI & TCP/IP, Firewalls, VPNs, Cryptography (RSA/AES), TOTP, DNS, ISO 8583'
  },
  {
    id: 'Operating Systems & Linux',
    name: 'Operating Systems, Concurrency & Linux',
    description: 'Linux shell commands, file permissions, Mutex vs Semaphore, Deadlock detection (WFG), CPU Scheduling, Virtual Memory'
  },
  {
    id: 'Software Engineering & System Design',
    name: 'Software Engineering & System Design',
    description: 'SDLC (Waterfall vs Agile Scrum), Microservices, API Gateways, SOLID Principles, UML Diagrams, Core Banking Architecture'
  },
  {
    id: 'E-Governance & ICT Laws',
    name: 'E-Governance, Digital Bangladesh & ICT Laws',
    description: 'National e-Nothi, Tier-IV Data Center, Digital Signatures (PKI/CCA), Cyber Security Act, Smart Bangladesh 2041'
  },
  {
    id: 'Non-Technical & Language',
    name: 'Focus Writing, Translation & Aptitude',
    description: 'Bilingual translation (English to Bangla & Bangla to English), Analytical Math, Compound Interest, Focus Writing'
  }
];

// Scraped queries lookup
export const userSearchQueries = [
  // Officer IT
  {
    category: 'Officer (IT)',
    query: 'Officer (IT), Combined Bank (Job ID: 10229) question paper pdf',
    paperId: 'officer-it-10229',
    jobId: '10229',
    year: '2023-2024',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT), Combined Bank (Job ID: 10209) question paper pdf',
    paperId: 'officer-it-10209',
    jobId: '10209',
    year: '2022-2024',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT), Combined Bank (Job ID: 25105) question paper pdf',
    paperId: 'officer-it-25105',
    jobId: '25105',
    year: '2025-2026',
    marks: 200,
    testingBody: 'Bankers Selection Committee'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT), Combined Bank 2025 Based on 2023 question paper pdf',
    paperId: 'officer-it-2025-base23',
    jobId: 'Combined-2025-B23',
    year: '2025',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT), Combined Bank (Job ID: 10184) question paper pdf',
    paperId: 'officer-it-10184',
    jobId: '10184',
    year: '2021-2024',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT), Combined Bank (Job ID: 10152) question paper pdf',
    paperId: 'officer-it-10152',
    jobId: '10152',
    year: '2023',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT), SB 2021 ET-CTI 11/12/2021 question paper pdf',
    paperId: 'officer-it-sb-2021',
    jobId: 'SB-2021-CTI',
    year: '2021',
    marks: 200,
    testingBody: 'CTI'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT), Combined Bank 2020 question paper pdf',
    paperId: 'officer-it-2020',
    jobId: 'Combined-2020',
    year: '2020',
    marks: 200,
    testingBody: 'Bankers Selection Committee'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT) Combined 9 Banks 2026 Preliminary 100 MCQ Question Paper',
    paperId: 'officer-it-prelim-2026',
    jobId: 'BSCS-OIT-2026-PRELIM',
    year: '2026',
    marks: 100,
    testingBody: 'BSCS / Bangladesh Bank'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT) Combined Banks 2025 Preliminary 100 MCQ Question Paper (Job ID: 25105)',
    paperId: 'officer-it-prelim-2025',
    jobId: '25105-PRELIM',
    year: '2025',
    marks: 100,
    testingBody: 'Bankers Selection Committee'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT) Combined 8 Banks 2024 Preliminary 100 MCQ Question Paper (Job ID: 10229)',
    paperId: 'officer-it-prelim-2024',
    jobId: '10229-PRELIM',
    year: '2024',
    marks: 100,
    testingBody: 'BIBM / Bankers Selection Committee'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT) Combined 8 Banks 2023 Preliminary 100 MCQ Question Paper (Job ID: 10209)',
    paperId: 'officer-it-prelim-2023',
    jobId: '10209-PRELIM',
    year: '2023',
    marks: 100,
    testingBody: 'BIBM / Bankers Selection Committee'
  },
  {
    category: 'Officer (IT)',
    query: 'Officer (IT) Preliminary 100 MCQ Full Question Paper Archive (2010–2026)',
    paperId: 'officer-it-prelim-2026',
    jobId: 'OIT-PRELIM-ARCHIVE',
    year: '2010-2026',
    marks: 100,
    testingBody: 'BSCS / Bangladesh Bank / BIBM'
  },

  // Senior Officer (SO) IT
  {
    category: 'Senior Officer (IT)',
    query: 'SO (IT), Combined Bank (Job ID: 10225) 2023 question paper pdf',
    paperId: 'so-it-10225',
    jobId: '10225',
    year: '2023-2026',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'SO (IT), Combined Bank (Job ID: 25104) 2024 question paper pdf',
    paperId: 'so-it-25104',
    jobId: '25104',
    year: '2024-2026',
    marks: 200,
    testingBody: 'Bankers Selection Committee'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'SO (IT), Combined Bank (Job ID: 10185) 2023 question paper pdf',
    paperId: 'so-it-10185',
    jobId: '10185',
    year: '2023-2024',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'SO (IT), Combined Bank 4 Bank question paper pdf',
    paperId: 'so-it-4bank',
    jobId: 'Combined-4-Bank',
    year: '2022-2023',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'SO (IT), Combined Bank 2023 question paper pdf',
    paperId: 'so-it-2023',
    jobId: 'Combined-SO-2023',
    year: '2023',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'SO (IT), Combined Bank SB BDBL question paper pdf',
    paperId: 'so-it-sb-bdbl',
    jobId: 'Combined-SB-BDBL',
    year: '2022-2023',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'Senior Officer (IT) Combined Banks 2026 Preliminary 100 MCQ Question Paper',
    paperId: 'so-it-prelim-2026',
    jobId: 'BSCS-SO-2026-PRELIM',
    year: '2026',
    marks: 100,
    testingBody: 'BSCS / Bangladesh Bank'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'Senior Officer (IT) Combined 9 Banks 2025 Preliminary 100 MCQ Question Paper (Job ID: 25104)',
    paperId: 'so-it-prelim-2025',
    jobId: '25104-PRELIM',
    year: '2025',
    marks: 100,
    testingBody: 'Bankers Selection Committee Secretariat'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'Senior Officer (IT) Combined Banks 2024 Preliminary 100 MCQ Question Paper (Job ID: 10225)',
    paperId: 'so-it-prelim-2024',
    jobId: '10225-PRELIM',
    year: '2024',
    marks: 100,
    testingBody: 'BIBM'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'Senior Officer (IT) Combined 8 Banks 2023 Preliminary 100 MCQ Question Paper (Job ID: 10185)',
    paperId: 'so-it-prelim-2023',
    jobId: '10185-PRELIM',
    year: '2023',
    marks: 100,
    testingBody: 'BIBM'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'Bangladesh Bank Assistant Director AD IT / Senior Officer IT 2021 Preliminary 100 MCQ',
    paperId: 'so-it-prelim-2021',
    jobId: 'BB-AD-IT-2021-PRELIM',
    year: '2021',
    marks: 100,
    testingBody: 'Bangladesh Bank / DU IBA'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'Senior Officer (IT) Preliminary 100 MCQ Full Question Paper Archive (2010–2026)',
    paperId: 'so-it-prelim-2026',
    jobId: 'SO-IT-PRELIM-ARCHIVE',
    year: '2010-2026',
    marks: 100,
    testingBody: 'BSCS / Bangladesh Bank / BIBM'
  },

  // Assistant Programmer (Bank & Ministry)
  {
    category: 'Bank Assistant Programmer',
    query: 'Assistant Programmer BPSC & Combined Govt Banks 2026 Preliminary 100 MCQ Question Paper',
    paperId: 'ap-prelim-2026',
    jobId: 'BPSC-AP-2026-PRELIM',
    year: '2026',
    marks: 100,
    testingBody: 'BPSC / BSCS'
  },
  {
    category: 'Bank Assistant Programmer',
    query: 'Assistant Programmer Bangladesh Bank & Combined Banks 2025 Preliminary 100 MCQ Question Paper',
    paperId: 'ap-prelim-2025',
    jobId: 'BB-AP-2025-PRELIM',
    year: '2025',
    marks: 100,
    testingBody: 'Bangladesh Bank / BSCS'
  },
  {
    category: 'Ministry Assistant Programmer',
    query: 'Assistant Programmer DoICT ICT Division 2024 Preliminary 100 MCQ Question Paper',
    paperId: 'ap-prelim-2024',
    jobId: 'DoICT-AP-2024-PRELIM',
    year: '2024',
    marks: 100,
    testingBody: 'BPSC / DoICT'
  },
  {
    category: 'Ministry Assistant Programmer',
    query: 'BPSC Assistant Programmer Various Ministries 2023 Preliminary 100 MCQ Question Paper',
    paperId: 'ap-prelim-2023',
    jobId: 'BPSC-AP-2023-PRELIM',
    year: '2023',
    marks: 100,
    testingBody: 'BPSC'
  },
  {
    category: 'Bank Assistant Programmer',
    query: 'Assistant Programmer Preliminary 100 MCQ Full Question Paper Archive (2010–2026)',
    paperId: 'ap-prelim-2026',
    jobId: 'AP-PRELIM-ARCHIVE',
    year: '2010-2026',
    marks: 100,
    testingBody: 'BPSC / Bangladesh Bank / BSCS'
  },
  {
    category: 'Bank Assistant Programmer',
    query: 'Assistant Programmer Bangladesh Bank written question solution pdf',
    paperId: 'ap-bangladesh-bank',
    jobId: 'BB-AP-2024',
    year: '2023-2024',
    marks: 200,
    testingBody: 'Bangladesh Bank'
  },
  {
    category: 'Bank Assistant Programmer',
    query: 'Assistant Programmer Combined Bank Bankers Selection Committee question paper pdf',
    paperId: 'ap-combined-banks',
    jobId: 'Combined-Bank-AP-2023',
    year: '2022-2023',
    marks: 200,
    testingBody: 'Bankers Selection Committee'
  },
  {
    category: 'Ministry Assistant Programmer',
    query: 'BPSC Assistant Programmer Different Ministries Non-Cadre written question solution pdf',
    paperId: 'ap-bpsc-ministries',
    jobId: 'BPSC-AP-Govt-Depts',
    year: '2022-2024',
    marks: 200,
    testingBody: 'BPSC'
  },
  {
    category: 'Ministry Assistant Programmer',
    query: 'ICT Division Assistant Programmer Department of ICT written question solution pdf',
    paperId: 'ap-ict-division',
    jobId: 'DoICT-AP-2024',
    year: '2023-2024',
    marks: 200,
    testingBody: 'BPSC / DoICT'
  },
  {
    category: 'Ministry Assistant Programmer',
    query: 'Election Commission Bangladesh Assistant Programmer written question solution pdf',
    paperId: 'ap-election-commission',
    jobId: 'EC-AP-2023',
    year: '2022-2023',
    marks: 200,
    testingBody: 'BPSC / BUET'
  },
  {
    category: 'Ministry Assistant Programmer',
    query: 'National Board of Revenue NBR Assistant Programmer written question solution pdf',
    paperId: 'ap-nbr-finance',
    jobId: 'NBR-AP-Finance',
    year: '2023-2024',
    marks: 200,
    testingBody: 'BPSC / NBR'
  },

  // Historical Exam Papers (2010 - 2019)
  {
    category: 'Bank Senior Officer (IT)',
    query: 'Bangladesh Bank Assistant Director AD IT ICT 2018 question paper solution pdf',
    paperId: 'bb-ad-it-2018',
    jobId: 'BB-AD-IT-2018',
    year: '2018',
    marks: 200,
    testingBody: 'Bangladesh Bank / DU'
  },
  {
    category: 'Bank Assistant Programmer',
    query: 'Bangladesh Bank Assistant Programmer 2019 question paper solution pdf',
    paperId: 'bb-ap-2019',
    jobId: 'BB-AP-2019',
    year: '2019',
    marks: 200,
    testingBody: 'Bangladesh Bank'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'Combined 8 Banks Senior Officer IT 2019 question paper pdf',
    paperId: 'so-it-combined-2019',
    jobId: 'Combined-8Bank-2019',
    year: '2019',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Officer (IT)',
    query: 'Combined 5 Banks Officer IT 2018 question paper pdf',
    paperId: 'officer-it-combined-2018',
    jobId: 'Combined-5Bank-2018',
    year: '2018',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Ministry Assistant Programmer',
    query: 'BPSC Assistant Programmer Multiple Ministries 2017 written question solution pdf',
    paperId: 'ap-bpsc-2017',
    jobId: 'BPSC-AP-2017',
    year: '2017',
    marks: 200,
    testingBody: 'BPSC'
  },
  {
    category: 'Officer (IT)',
    query: 'Janata Bank Executive Officer IT Assistant Programmer 2015 question paper pdf',
    paperId: 'janata-bank-it-2015',
    jobId: 'JB-EO-IT-2015',
    year: '2015',
    marks: 200,
    testingBody: 'BUET'
  },
  {
    category: 'Senior Officer (IT)',
    query: 'Agrani Bank Senior Officer IT 2017 question paper solution pdf',
    paperId: 'agrani-bank-so-it-2017',
    jobId: 'Agrani-SO-IT-2017',
    year: '2017',
    marks: 200,
    testingBody: 'BIBM'
  },
  {
    category: 'Bank Senior Officer (IT)',
    query: 'Bangladesh Bank Assistant Director AD IT 2013 question paper solution pdf',
    paperId: 'bb-ad-it-2013',
    jobId: 'BB-AD-IT-2013',
    year: '2013',
    marks: 200,
    testingBody: 'Bangladesh Bank / BIBM'
  }
];
