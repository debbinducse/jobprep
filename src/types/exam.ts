export type ExamCategory = 
  | 'Officer (IT)' 
  | 'Senior Officer (IT)' 
  | 'Bank Assistant Programmer' 
  | 'Ministry Assistant Programmer'
  | 'Private Bank Officer (IT)'
  | 'Private Bank Senior Officer (IT)'
  | 'Private Bank Assistant Programmer'
  | 'Computer Operator'
  | 'Data Entry / Control Operator';

export type TopicCategory = 
  | 'Programming & Algorithms'
  | 'Database & SQL'
  | 'Networking & Security'
  | 'Operating Systems & Linux'
  | 'Software Engineering & System Design'
  | 'E-Governance & ICT Laws'
  | 'Non-Technical & Language';

export type QuestionType = 
  | 'descriptive' 
  | 'coding' 
  | 'sql' 
  | 'math' 
  | 'mcq' 
  | 'translation' 
  | 'short_note';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface ExamQuestion {
  id: string;
  questionNo: string;
  type: QuestionType;
  topicCategory?: TopicCategory;
  questionText: string;
  subQuestions?: string[];
  codeSnippet?: string;
  language?: string;
  options?: string[]; // For MCQ questions
  correctOption?: number; // 0-indexed
  solution: string;
  codeSolution?: string;
  solutionLanguage?: string;
  tags: string[];
  marks: number;
  difficulty: DifficultyLevel;
}

export interface ExamSection {
  id: string;
  name: string;
  marks: number;
  description?: string;
  questions: ExamQuestion[];
}

export interface ExamPaper {
  id: string;
  title: string;
  searchQuery: string; // The exact user search query string
  category: ExamCategory;
  jobId: string;
  circularYear: string;
  examDate: string;
  examBody: 'BIBM' | 'CTI' | 'Bankers Selection Committee (BSCS)' | 'Bangladesh Bank' | 'BPSC (Bangladesh Public Service Commission)' | 'BUET / University Testing Authority' | string;
  participatingBanks: string[]; // Or Ministries/Departments
  ministryOrDepartment?: string;
  grade: 'Grade 10' | 'Grade 9';
  totalMarks: number;
  duration: string;
  examType: 'Written Exam (Descriptive & Technical)' | 'MCQ Preliminary' | 'Full Combined Paper';
  summary: string;
  keyTopics: string[];
  sections: ExamSection[];
}
