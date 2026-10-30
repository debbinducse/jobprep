import React, { useState, useMemo, useEffect } from 'react';
import { allExamPapers, topicCategories } from '../data/allExams';
import { ExamPaper, ExamQuestion, TopicCategory } from '../types/exam';
import { 
  Code2, 
  Database, 
  Network, 
  Terminal, 
  LayoutList, 
  ShieldCheck, 
  Languages, 
  Search, 
  FileCheck2, 
  HelpCircle, 
  ExternalLink, 
  Filter,
  X,
  Download,
  Loader2
} from 'lucide-react';
import {
  downloadItFilteredQuestionsPdf,
  downloadItExamPaperPdf
} from '../utils/pdfDownload';

interface CategoryWiseExplorerProps {
  onSelectPaper: (paperId: string) => void;
  initialTopic?: TopicCategory | 'All';
  initialSector?: string;
  initialSearch?: string;
}

export const CategoryWiseExplorer: React.FC<CategoryWiseExplorerProps> = ({
  onSelectPaper,
  initialTopic = 'All',
  initialSector = 'All',
  initialSearch = ''
}) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicCategory | 'All'>(initialTopic);
  const [selectedSector, setSelectedSector] = useState<string>(initialSector);
  const [selectedQType, setSelectedQType] = useState<'All' | 'mcq' | 'descriptive'>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [visibleCount, setVisibleCount] = useState<number>(60);
  const [activeQuestionSubTabs, setActiveQuestionSubTabs] = useState<{ [qId: string]: 'question' | 'answer' | 'code' }>({});
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: number }>({});
  const [downloadingBulk, setDownloadingBulk] = useState<'questions' | 'solutions' | null>(null);
  const [downloadingPaperId, setDownloadingPaperId] = useState<string | null>(null);

  useEffect(() => {
    if (initialTopic) setSelectedTopic(initialTopic);
  }, [initialTopic]);

  useEffect(() => {
    if (initialSector) setSelectedSector(initialSector);
  }, [initialSector]);

  useEffect(() => {
    if (initialSearch !== undefined) setSearchQuery(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    setVisibleCount(60);
  }, [selectedTopic, selectedSector, selectedQType, selectedYear, searchQuery]);

  // Flatten all questions with paper metadata, determine topic category, and deduplicate by normalized question text
  const allCategorizedQuestions = useMemo(() => {
    const list: { question: ExamQuestion; paper: ExamPaper; derivedTopic: TopicCategory }[] = [];
    const seenQuestions = new Set<string>();

    allExamPapers.forEach(paper => {
      paper.sections.forEach(sec => {
        sec.questions.forEach(q => {
          const normKey = q.questionText
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim();
          if (seenQuestions.has(normKey)) {
            return;
          }
          seenQuestions.add(normKey);

          let derived: TopicCategory = q.topicCategory || 'Programming & Algorithms';

          if (!q.topicCategory) {
            const tagsStr = q.tags.join(' ').toLowerCase();
            const textStr = q.questionText.toLowerCase();

            if (tagsStr.includes('sql') || tagsStr.includes('dbms') || tagsStr.includes('normaliz') || textStr.includes('select ') || tagsStr.includes('bcnf')) {
              derived = 'Database & SQL';
            } else if (tagsStr.includes('network') || tagsStr.includes('subnet') || tagsStr.includes('ip') || tagsStr.includes('dns') || tagsStr.includes('tcp') || tagsStr.includes('firewall')) {
              derived = 'Networking & Security';
            } else if (tagsStr.includes('linux') || tagsStr.includes('operating') || tagsStr.includes('deadlock') || tagsStr.includes('semaphore') || tagsStr.includes('mutex') || tagsStr.includes('bash')) {
              derived = 'Operating Systems & Linux';
            } else if (tagsStr.includes('sdlc') || tagsStr.includes('agile') || tagsStr.includes('solid') || tagsStr.includes('microservice') || tagsStr.includes('rest') || tagsStr.includes('software')) {
              derived = 'Software Engineering & System Design';
            } else if (tagsStr.includes('e-nothi') || tagsStr.includes('e-governance') || tagsStr.includes('pki') || tagsStr.includes('data center') || tagsStr.includes('ict act')) {
              derived = 'E-Governance & ICT Laws';
            } else if (tagsStr.includes('translation') || tagsStr.includes('focus writing') || tagsStr.includes('math') || tagsStr.includes('interest')) {
              derived = 'Non-Technical & Language';
            }
          }

          list.push({ question: q, paper, derivedTopic: derived });
        });
      });
    });

    return list;
  }, []);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return allCategorizedQuestions.filter(item => {
      const matchTopic = selectedTopic === 'All' || item.derivedTopic === selectedTopic;
      
      let matchSector = true;
      if (selectedSector === 'All Private Bank IT') {
        matchSector = item.paper.category.startsWith('Private Bank');
      } else if (selectedSector === 'Private Bank Assistant Programmer') {
        matchSector = item.paper.category === 'Private Bank Assistant Programmer';
      } else if (selectedSector === 'Private Bank Senior Officer (IT)') {
        matchSector = item.paper.category === 'Private Bank Senior Officer (IT)';
      } else if (selectedSector === 'Private Bank Officer (IT)') {
        matchSector = item.paper.category === 'Private Bank Officer (IT)';
      } else if (selectedSector === 'Bank Assistant Programmer') {
        matchSector = item.paper.category === 'Bank Assistant Programmer';
      } else if (selectedSector === 'Ministry Assistant Programmer') {
        matchSector = item.paper.category === 'Ministry Assistant Programmer';
      } else if (selectedSector === 'All Assistant Programmer') {
        matchSector = item.paper.category.includes('Assistant Programmer');
      } else if (selectedSector === 'Officer (IT)') {
        matchSector = item.paper.category === 'Officer (IT)';
      } else if (selectedSector === 'Senior Officer (IT)') {
        matchSector = item.paper.category === 'Senior Officer (IT)';
      } else if (selectedSector === 'Computer Operator') {
        matchSector = item.paper.category === 'Computer Operator';
      } else if (selectedSector === 'Data Entry / Control Operator') {
        matchSector = item.paper.category === 'Data Entry / Control Operator';
      }

      const matchQType =
        selectedQType === 'All' ||
        (selectedQType === 'mcq' && item.question.type === 'mcq') ||
        (selectedQType === 'descriptive' && item.question.type !== 'mcq');

      const matchYear =
        selectedYear === 'All' || item.paper.circularYear.includes(selectedYear);

      const qLower = searchQuery.toLowerCase();
      const matchSearch = !searchQuery || (
        item.question.questionText.toLowerCase().includes(qLower) ||
        item.question.solution.toLowerCase().includes(qLower) ||
        item.paper.title.toLowerCase().includes(qLower) ||
        item.paper.jobId.toLowerCase().includes(qLower) ||
        item.paper.circularYear.toLowerCase().includes(qLower) ||
        item.paper.examDate.toLowerCase().includes(qLower) ||
        item.paper.category.toLowerCase().includes(qLower) ||
        item.question.tags.some(t => t.toLowerCase().includes(qLower))
      );

      return matchTopic && matchSector && matchQType && matchYear && matchSearch;
    });
  }, [allCategorizedQuestions, selectedTopic, selectedSector, selectedQType, selectedYear, searchQuery]);

  const displayedQuestions = useMemo(
    () => filteredQuestions.slice(0, visibleCount),
    [filteredQuestions, visibleCount]
  );

  const getSubTab = (qId: string): 'question' | 'answer' | 'code' => {
    return activeQuestionSubTabs[qId] || 'question';
  };

  const setSubTab = (qId: string, tab: 'question' | 'answer' | 'code') => {
    setActiveQuestionSubTabs(prev => ({ ...prev, [qId]: tab }));
  };

  const getTopicIcon = (topic: TopicCategory) => {
    switch (topic) {
      case 'Programming & Algorithms': return <Code2 className="w-4 h-4 text-indigo-500" />;
      case 'Database & SQL': return <Database className="w-4 h-4 text-emerald-500" />;
      case 'Networking & Security': return <Network className="w-4 h-4 text-blue-500" />;
      case 'Operating Systems & Linux': return <Terminal className="w-4 h-4 text-purple-500" />;
      case 'Software Engineering & System Design': return <LayoutList className="w-4 h-4 text-amber-500" />;
      case 'E-Governance & ICT Laws': return <ShieldCheck className="w-4 h-4 text-teal-500" />;
      case 'Non-Technical & Language': return <Languages className="w-4 h-4 text-rose-500" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top Header Banner */}
      <div className="bg-white dark:bg-[#1E1E1E] text-[#1A1A1A] dark:text-[#E8E8E8] rounded-2xl p-5 sm:p-7 border border-[#E6E0D6] dark:border-[#2D3139] shadow-xs transition-colors duration-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Bank IT Prep Question Bank</span>
              <span aria-hidden="true">·</span>
              <span>{allExamPapers.length} Full Exam Papers (2010–2026)</span>
              <span aria-hidden="true">·</span>
              <span>7 Syllabus Domains</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#E8E8E8]">
              Topic &amp; Sector Question Explorer (Preliminary 100-MCQ &amp; Written)
            </h1>
            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
              Filter authentic recruitment questions across Private Commercial Banks, Bangladesh Bank, Combined Govt Banks, BPSC Ministries, Computer Operator, and Data Entry / Control Operator. Every question features 3 dedicated sub-tabs: <strong>Question Only</strong>, <strong>Step-by-Step Model Answer</strong>, and <strong>Code / SQL</strong>.
            </p>
          </div>

          <div className="bg-[#F8F6F2] dark:bg-[#14161B] px-4 py-3 rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] text-right shrink-0">
            <span className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium block">Matching Questions</span>
            <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              {filteredQuestions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Filter Control Deck */}
      <div className="bg-white dark:bg-[#1E1E1E] p-5 sm:p-6 rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] space-y-5 shadow-xs transition-colors duration-200">
        {/* Row 1: Search & Sector Filter */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>1. Filter by Recruitment Sector:</span>
            </span>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#4A4A4A] dark:text-[#A0A0A0] absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search DBBL, BRAC, SQL, VLSM, Java..."
                className="w-full text-xs pl-9 pr-8 py-2 bg-[#F8F6F2] dark:bg-[#16181D] border border-[#E6E0D6] dark:border-[#2D3139] rounded-lg text-[#1A1A1A] dark:text-[#E8E8E8] placeholder-[#4A4A4A] dark:placeholder-[#A0A0A0] focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[
              { id: 'All', label: `All IT Sectors (${allExamPapers.length} Papers)` },
              { id: 'All Private Bank IT', label: 'All Private Bank IT (12)' },
              { id: 'Private Bank Assistant Programmer', label: 'Private Bank AP (4)' },
              { id: 'Private Bank Senior Officer (IT)', label: 'Private Bank SO (4)' },
              { id: 'Private Bank Officer (IT)', label: 'Private Bank Officer (4)' },
              { id: 'All Assistant Programmer', label: 'All Assistant Programmer (100 MCQ & Written)' },
              { id: 'Bank Assistant Programmer', label: 'Govt Bank AP (100 MCQ & Written)' },
              { id: 'Ministry Assistant Programmer', label: 'Ministry AP BPSC (100 MCQ & Written)' },
              { id: 'Senior Officer (IT)', label: 'Senior Officer IT (100 MCQ & Written Archive)' },
              { id: 'Officer (IT)', label: 'Officer IT (100 MCQ & Written Archive)' },
              { id: 'Computer Operator', label: 'Computer Operator (2010–2026)' },
              { id: 'Data Entry / Control Operator', label: 'Data Entry / Control Operator (2010–2026)' }
            ].map(sec => (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedSector === sec.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-[#F2EFE9] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-white border border-[#E6E0D6] dark:border-[#2D3139]'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: 7 Syllabus Topic Filters */}
        <div className="pt-4 border-t border-[#E6E0D6] dark:border-[#2D3139] space-y-2.5">
          <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] block">
            2. Filter by Syllabus Topic (7 Core Domains):
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            <button
              onClick={() => setSelectedTopic('All')}
              className={`p-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                selectedTopic === 'All'
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                  : 'bg-[#F8F6F2] dark:bg-[#16181D] border-[#E6E0D6] dark:border-[#2D3139] text-[#1A1A1A] dark:text-[#E8E8E8] hover:border-blue-500/50'
              }`}
            >
              <div className="text-xs font-bold whitespace-nowrap truncate">All 7 Topics</div>
              <div className={`text-[11px] truncate ${selectedTopic === 'All' ? 'text-blue-100' : 'text-[#4A4A4A] dark:text-[#A0A0A0]'}`}>
                Complete Syllabus
              </div>
            </button>

            {topicCategories.map(cat => {
              const isSelected = selectedTopic === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedTopic(cat.id)}
                  className={`p-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                      : 'bg-[#F8F6F2] dark:bg-[#16181D] border-[#E6E0D6] dark:border-[#2D3139] text-[#1A1A1A] dark:text-[#E8E8E8] hover:border-blue-500/50'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    {getTopicIcon(cat.id)}
                    <span className="text-xs font-bold truncate">{cat.name.split(',')[0]}</span>
                  </div>
                  <div className={`text-[11px] truncate ${isSelected ? 'text-blue-100' : 'text-[#4A4A4A] dark:text-[#A0A0A0]'}`}>
                    {cat.id}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 3: Question Format (Preliminary MCQ vs Written) & Year Filter (2010–2026) */}
        <div className="pt-4 border-t border-[#E6E0D6] dark:border-[#2D3139] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] mr-1">
              3. Format:
            </span>
            {[
              { id: 'All', label: 'All Questions' },
              { id: 'mcq', label: 'Preliminary MCQ Sets' },
              { id: 'descriptive', label: 'Written & Practical Questions' }
            ].map(qt => (
              <button
                key={qt.id}
                onClick={() => setSelectedQType(qt.id as 'All' | 'mcq' | 'descriptive')}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  selectedQType === qt.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-[#F2EFE9] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-white border border-[#E6E0D6] dark:border-[#2D3139]'
                }`}
              >
                {qt.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">Year:</span>
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="text-xs px-2.5 py-1.5 bg-[#F8F6F2] dark:bg-[#16181D] border border-[#E6E0D6] dark:border-[#2D3139] rounded-lg text-[#1A1A1A] dark:text-[#E8E8E8] focus:outline-none focus:border-blue-500 font-mono"
            >
              <option value="All">All Years (2010–2026)</option>
              {['2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'].map(yr => (
                <option key={yr} value={yr}>{yr}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Direct Written Question PDF Download Bar */}
        <div className="pt-4 border-t border-[#E6E0D6] dark:border-[#2D3139] flex flex-wrap items-center justify-between gap-3 bg-[#FAF8F5] dark:bg-[#16181D] -mx-5 sm:-mx-6 -mb-5 sm:-mb-6 px-5 sm:px-6 py-3.5 rounded-b-2xl">
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Bank IT Written Question PDF Download (Current Filter Selection)</span>
            </div>
            <p className="text-[11px] text-[#4A4A4A] dark:text-[#A0A0A0]">
              Export clean A4 printable Written Question sets (or with verified SQL/code &amp; step-by-step model solutions).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              disabled={downloadingBulk !== null || filteredQuestions.length === 0}
              onClick={async () => {
                if (downloadingBulk) return;
                setDownloadingBulk('questions');
                try {
                  const writtenItems = filteredQuestions.filter(i => i.question.type !== 'mcq');
                  const targetItems = writtenItems.length > 0 ? writtenItems : filteredQuestions;
                  const summary = `${selectedSector} · Topic: ${selectedTopic} · Year: ${selectedYear}`;
                  await downloadItFilteredQuestionsPdf(targetItems, summary, false);
                } finally {
                  setDownloadingBulk(null);
                }
              }}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs min-h-[38px]"
            >
              {downloadingBulk === 'questions' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {downloadingBulk === 'questions'
                  ? 'Preparing Written PDF...'
                  : 'Download Written Questions PDF'}
              </span>
            </button>

            <button
              type="button"
              disabled={downloadingBulk !== null || filteredQuestions.length === 0}
              onClick={async () => {
                if (downloadingBulk) return;
                setDownloadingBulk('solutions');
                try {
                  const writtenItems = filteredQuestions.filter(i => i.question.type !== 'mcq');
                  const targetItems = writtenItems.length > 0 ? writtenItems : filteredQuestions;
                  const summary = `${selectedSector} · Topic: ${selectedTopic} · Year: ${selectedYear}`;
                  await downloadItFilteredQuestionsPdf(targetItems, summary, true);
                } finally {
                  setDownloadingBulk(null);
                }
              }}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs min-h-[38px]"
            >
              {downloadingBulk === 'solutions' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {downloadingBulk === 'solutions'
                  ? 'Preparing Solutions PDF...'
                  : 'Download Written + Solutions PDF'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Questions List with 3 Sub-Tabs */}
      <div className="space-y-5">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] space-y-3">
            <p className="text-base font-semibold text-[#1A1A1A] dark:text-[#E8E8E8]">
              No questions found matching your current filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedSector('All');
                setSelectedTopic('All');
                setSelectedQType('All');
                setSelectedYear('All');
                setSearchQuery('');
              }}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer min-h-[44px]"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <>
          {displayedQuestions.map(({ question: q, paper, derivedTopic }) => {
            const currentSubTab = getSubTab(q.id);

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] overflow-hidden shadow-xs hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors"
              >
                {/* Question Card Top Metadata Bar */}
                <div className="bg-[#FAF8F5] dark:bg-[#16181D] border-b border-[#E6E0D6] dark:border-[#2D3139] px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono font-bold text-[#1A1A1A] dark:text-[#E8E8E8] tabular-nums">
                      Q{q.questionNo}
                    </span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="font-semibold text-[#1A1A1A] dark:text-[#E8E8E8]">{paper.category}</span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{derivedTopic}</span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="font-mono tabular-nums">Job ID: {paper.jobId}</span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="font-mono font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] tabular-nums">{q.marks} Marks</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      disabled={downloadingPaperId === paper.id}
                      onClick={async () => {
                        if (downloadingPaperId) return;
                        setDownloadingPaperId(paper.id);
                        try {
                          await downloadItExamPaperPdf(paper, { includeSolutions: true, writtenOnly: true });
                        } finally {
                          setDownloadingPaperId(null);
                        }
                      }}
                      className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer min-h-[32px]"
                      title="Download full Written Question Paper + Model Solutions PDF"
                    >
                      {downloadingPaperId === paper.id ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Download className="w-3.5 h-3.5" />
                      )}
                      <span>{downloadingPaperId === paper.id ? 'Saving PDF...' : 'Written Paper PDF'}</span>
                    </button>

                    <button
                      onClick={() => onSelectPaper(paper.id)}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer min-h-[36px]"
                    >
                      <span>Open Full Paper</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 3 Sub-Tabs Segmented Bar */}
                <div className="border-b border-[#E6E0D6] dark:border-[#2D3139] bg-[#F8F6F2] dark:bg-[#181B20] px-4 sm:px-5 py-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
                    <button
                      onClick={() => setSubTab(q.id, 'question')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                        currentSubTab === 'question'
                          ? 'bg-[#1A1A1A] dark:bg-[#2563EB] text-white shadow-xs'
                          : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Question Only</span>
                    </button>

                    <button
                      onClick={() => setSubTab(q.id, 'answer')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                        currentSubTab === 'answer'
                          ? 'bg-emerald-600 dark:bg-emerald-600 text-white shadow-xs'
                          : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Step-by-Step Model Answer</span>
                    </button>

                    <button
                      onClick={() => setSubTab(q.id, 'code')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                        currentSubTab === 'code'
                          ? 'bg-blue-600 dark:bg-blue-600 text-white shadow-xs'
                          : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Code / SQL</span>
                    </button>
                  </div>

                  <span className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] hidden md:inline truncate max-w-xs font-mono">
                    {paper.title}
                  </span>
                </div>

                {/* Sub-Tab Content Body */}
                <div className="p-5 sm:p-6">
                  {/* SUB-TAB 1: QUESTION ONLY */}
                  {currentSubTab === 'question' && (
                    <div className="space-y-4">
                      <div className="text-[16.5px] sm:text-[17px] font-medium text-[#1A1A1A] dark:text-[#E8E8E8] leading-[1.7] whitespace-pre-line">
                        {q.questionText}
                      </div>

                      {q.options && q.options.length > 0 && (
                        <div className="space-y-3 pt-2">
                          <div className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium flex items-center justify-between">
                            <span>Select an option to test your answer:</span>
                            {userAnswers[q.id] !== undefined && (
                              <button
                                onClick={() => setUserAnswers(prev => {
                                  const next = { ...prev };
                                  delete next[q.id];
                                  return next;
                                })}
                                className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                              >
                                Try Again / Reset
                              </button>
                            )}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {q.options.map((opt, oIdx) => {
                              const hasAnswered = userAnswers[q.id] !== undefined;
                              const isSelected = userAnswers[q.id] === oIdx;
                              const isCorrect = q.correctOption !== undefined ? oIdx === q.correctOption : false;

                              let cardStyle = 'bg-[#FAF8F5] dark:bg-[#16181D] border-[#E6E0D6] dark:border-[#2D3139] text-[#1A1A1A] dark:text-[#E8E8E8] hover:border-blue-500/60';
                              if (hasAnswered) {
                                if (isCorrect) {
                                  cardStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
                                } else if (isSelected) {
                                  cardStyle = 'bg-red-50 dark:bg-red-950/40 border-red-500 text-red-900 dark:text-red-200';
                                } else {
                                  cardStyle = 'bg-[#FAF8F5]/60 dark:bg-[#16181D]/60 border-[#E6E0D6]/50 dark:border-[#2D3139]/50 text-[#888888] dark:text-[#666666]';
                                }
                              }

                              return (
                                <button
                                  key={oIdx}
                                  type="button"
                                  onClick={() => {
                                    if (q.correctOption !== undefined) {
                                      setUserAnswers(prev => ({ ...prev, [q.id]: oIdx }));
                                    }
                                  }}
                                  className={`p-3.5 rounded-xl border text-left text-[15px] sm:text-[16px] min-h-[46px] flex items-center justify-between transition-all cursor-pointer ${cardStyle}`}
                                >
                                  <span>{opt}</span>
                                  {hasAnswered && isCorrect && (
                                    <span className="text-xs bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-md ml-2 shrink-0">
                                      Correct
                                    </span>
                                  )}
                                  {hasAnswered && isSelected && !isCorrect && (
                                    <span className="text-xs bg-red-600 text-white font-bold px-2 py-0.5 rounded-md ml-2 shrink-0">
                                      Your Choice
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                          {userAnswers[q.id] !== undefined && (
                            <div className="p-2.5 rounded-lg bg-[#F2EFE9] dark:bg-[#16181D] border border-[#E6E0D6] dark:border-[#2D3139] flex items-center justify-between text-xs">
                              <span className={userAnswers[q.id] === q.correctOption ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-amber-600 dark:text-amber-400 font-semibold'}>
                                {userAnswers[q.id] === q.correctOption
                                  ? '✓ Excellent! Your selected answer is correct.'
                                  : `Notice: The verified answer is Option ${String.fromCharCode(65 + (q.correctOption ?? 0))}.`}
                              </span>
                              <button
                                onClick={() => setSubTab(q.id, 'answer')}
                                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer shrink-0 ml-2"
                              >
                                Read Explanation →
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {q.codeSnippet && (
                        <div className="mt-3">
                          <div className="text-xs font-mono text-slate-400 bg-slate-900 px-4 py-2 rounded-t-lg">
                            Given Code Snippet ({q.language || 'Code'})
                          </div>
                          <pre className="p-4 bg-[#14171D] text-emerald-400 rounded-b-lg text-sm font-mono overflow-x-auto leading-relaxed border-x border-b border-[#2D3139]">
                            {q.codeSnippet}
                          </pre>
                        </div>
                      )}

                      <div className="pt-3 border-t border-[#E6E0D6] dark:border-[#2D3139] flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
                          {q.tags.map((t, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && <span aria-hidden="true" className="opacity-40">·</span>}
                              <span>#{t}</span>
                            </React.Fragment>
                          ))}
                        </div>
                        <button
                          onClick={() => setSubTab(q.id, 'answer')}
                          className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] flex items-center"
                        >
                          View Step-by-Step Model Answer →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SUB-TAB 2: MODEL ANSWER */}
                  {currentSubTab === 'answer' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                          <FileCheck2 className="w-4 h-4" />
                          <span>Verified Step-by-Step Model Answer</span>
                        </div>
                        <div className="text-[16.5px] sm:text-[17px] text-[#1A1A1A] dark:text-[#E8E8E8] leading-[1.7] whitespace-pre-line bg-[#FAF8F5] dark:bg-[#16181D] p-5 rounded-xl border border-[#E6E0D6] dark:border-[#2D3139]">
                          {q.solution}
                        </div>
                      </div>

                      {q.codeSolution && (
                        <div className="flex justify-end">
                          <button
                            onClick={() => setSubTab(q.id, 'code')}
                            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline bg-blue-50 dark:bg-blue-950/40 px-3 py-2 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] flex items-center"
                          >
                            Switch to Code / SQL Implementation →
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SUB-TAB 3: CODE / SQL IMPLEMENTATION */}
                  {currentSubTab === 'code' && (
                    <div className="space-y-3">
                      {q.codeSolution ? (
                        <div>
                          <div className="flex items-center justify-between bg-slate-900 text-slate-300 px-4 py-2.5 rounded-t-lg text-xs font-mono">
                            <span>{q.solutionLanguage?.toUpperCase() || 'CODE'} Implementation</span>
                            <span className="text-emerald-400">Verified Solution</span>
                          </div>
                          <pre className="p-4 bg-[#14171D] text-emerald-400 rounded-b-lg text-sm font-mono overflow-x-auto leading-relaxed border-x border-b border-[#2D3139]">
                            {q.codeSolution}
                          </pre>
                        </div>
                      ) : (
                        <div className="p-5 bg-[#FAF8F5] dark:bg-[#16181D] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] space-y-2">
                          <div className="text-xs font-semibold text-[#4A4A4A] dark:text-[#A0A0A0]">
                            Descriptive / Theoretical Solution:
                          </div>
                          <div className="text-[16.5px] sm:text-[17px] text-[#1A1A1A] dark:text-[#E8E8E8] whitespace-pre-line leading-[1.7]">
                            {q.solution}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {filteredQuestions.length > visibleCount && (
            <div className="bg-white dark:bg-[#1E1E1E] p-5 rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold text-[#4A4A4A] dark:text-[#A0A0A0]">
                Showing <strong className="font-mono text-[#1A1A1A] dark:text-[#E8E8E8]">{displayedQuestions.length}</strong> of{' '}
                <strong className="font-mono text-[#1A1A1A] dark:text-[#E8E8E8]">{filteredQuestions.length}</strong> matching questions
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVisibleCount(prev => prev + 100)}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer min-h-[44px]"
                >
                  Load Next 100 Questions →
                </button>
                <button
                  onClick={() => setVisibleCount(filteredQuestions.length)}
                  className="px-4 py-2.5 bg-[#1A1A1A] hover:bg-black dark:bg-[#2D3139] dark:hover:bg-[#383D47] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer min-h-[44px]"
                >
                  Show All ({filteredQuestions.length})
                </button>
              </div>
            </div>
          )}
          </>
        )}
      </div>
    </div>
  );
};
