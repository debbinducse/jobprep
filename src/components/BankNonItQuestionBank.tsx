import React, { useState, useMemo, useEffect } from 'react';
import {
  bankNonItExamPapers,
  bankItOperatorExamPapers,
  nonItJobCategories,
  itOperatorCategories,
  nonItSubjects,
  nonItYears,
  NonItJobCategory,
  NonItOrgType,
  NonItQuestionType,
  NonItSubject,
  NonItQuestionItem,
  getTotalNonItQuestionsCount,
  getTotalNonItMcqCount,
  getTotalNonItWrittenCount,
  getTotalItOperatorQuestionsCount,
  getTotalItOperatorMcqCount,
  getTotalItOperatorWrittenCount
} from '../data/bankNonItQuestions';
import {
  Search,
  Filter,
  X,
  FileCheck2,
  HelpCircle,
  CheckCircle2,
  BookOpen,
  Building2,
  Calendar,
  Layers,
  ListChecks,
  PenTool,
  Download,
  Loader2
} from 'lucide-react';
import {
  downloadNonItPaperPdf,
  downloadNonItBulkWrittenPdf
} from '../utils/pdfDownload';

interface BankNonItQuestionBankProps {
  sectionMode?: 'non-it' | 'it-operator';
  initialCategory?: NonItJobCategory | 'All';
  initialOrgType?: NonItOrgType | 'All';
  initialQuestionType?: NonItQuestionType | 'All';
  initialYear?: number | 'All';
  initialSearch?: string;
}

export const BankNonItQuestionBank: React.FC<BankNonItQuestionBankProps> = ({
  sectionMode = 'non-it',
  initialCategory = 'All',
  initialOrgType = 'All',
  initialQuestionType = 'All',
  initialYear = 'All',
  initialSearch = ''
}) => {
  const isItOperatorMode = sectionMode === 'it-operator';
  const activePapersSource = isItOperatorMode ? bankItOperatorExamPapers : bankNonItExamPapers;
  const activeCategoriesList = isItOperatorMode ? itOperatorCategories : nonItJobCategories;
  const [selectedCategory, setSelectedCategory] = useState<NonItJobCategory | 'All'>(initialCategory);
  const [selectedYear, setSelectedYear] = useState<number | 'All'>(initialYear);
  const [selectedOrgType, setSelectedOrgType] = useState<NonItOrgType | 'All'>(initialOrgType);
  const [selectedQuestionType, setSelectedQuestionType] = useState<NonItQuestionType | 'All'>(initialQuestionType);
  const [selectedSubject, setSelectedSubject] = useState<NonItSubject | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);

  // Per-question view tab ('question' | 'solution')
  const [questionViewTabs, setQuestionViewTabs] = useState<{ [qId: string]: 'question' | 'solution' }>({});
  // Interactive MCQ option selection for self-testing
  const [selectedMcqOptions, setSelectedMcqOptions] = useState<{ [qId: string]: string }>({});
  // Paper-level section filter override ('both' | 'mcq' | 'written')
  const [paperSectionTab, setPaperSectionTab] = useState<{ [paperId: string]: 'both' | 'mcq' | 'written' }>({});
  // Per-paper 100-MCQ range filter ('all' | '1-25' | '26-50' | '51-70' | '71-90' | '91-100')
  const [paperMcqRange, setPaperMcqRange] = useState<{
    [paperId: string]: 'all' | '1-25' | '26-50' | '51-70' | '71-90' | '91-100';
  }>({});
  // Per-paper Written section range filter ('all' | 'focus' | 'math' | 'comp' | 'trans')
  const [paperWrittenRange, setPaperWrittenRange] = useState<{
    [paperId: string]: 'all' | 'focus' | 'math' | 'comp' | 'trans';
  }>({});
  // PDF Download loading states
  const [downloadingPaperKey, setDownloadingPaperKey] = useState<string | null>(null);
  const [downloadingBulkMode, setDownloadingBulkMode] = useState<'questions' | 'solutions' | null>(null);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setSelectedOrgType(initialOrgType);
  }, [initialOrgType]);

  useEffect(() => {
    setSelectedQuestionType(initialQuestionType);
  }, [initialQuestionType]);

  useEffect(() => {
    setSelectedYear(initialYear);
  }, [initialYear]);

  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  const totalArchiveQuestions = useMemo(
    () => (isItOperatorMode ? getTotalItOperatorQuestionsCount() : getTotalNonItQuestionsCount()),
    [isItOperatorMode]
  );
  const totalArchiveMcq = useMemo(
    () => (isItOperatorMode ? getTotalItOperatorMcqCount() : getTotalNonItMcqCount()),
    [isItOperatorMode]
  );
  const totalArchiveWritten = useMemo(
    () => (isItOperatorMode ? getTotalItOperatorWrittenCount() : getTotalNonItWrittenCount()),
    [isItOperatorMode]
  );

  // Filter papers and their inner questions while keeping MCQ & Written grouped under the same Question Paper ID
  const filteredPapersWithQuestions = useMemo(() => {
    const qLower = searchQuery.trim().toLowerCase();

    return activePapersSource
      .filter(paper => {
        const matchCategory = selectedCategory === 'All' || paper.category === selectedCategory;
        const matchYear = selectedYear === 'All' || paper.year === selectedYear;
        const matchOrg = selectedOrgType === 'All' || paper.orgType === selectedOrgType;
        return matchCategory && matchYear && matchOrg;
      })
      .map(paper => {
        const matchingQuestions = paper.questions.filter(q => {
          const matchQType = selectedQuestionType === 'All' || q.questionType === selectedQuestionType;
          const matchSubject = selectedSubject === 'All' || q.subject === selectedSubject;
          const matchSearch =
            !qLower ||
            q.questionText.toLowerCase().includes(qLower) ||
            q.solution.toLowerCase().includes(qLower) ||
            q.questionPaperCode.toLowerCase().includes(qLower) ||
            paper.title.toLowerCase().includes(qLower) ||
            paper.organizationName.toLowerCase().includes(qLower) ||
            q.subject.toLowerCase().includes(qLower);

          return matchQType && matchSubject && matchSearch;
        });

        const mcqList = matchingQuestions.filter(q => q.questionType === 'MCQ');
        const writtenList = matchingQuestions.filter(q => q.questionType === 'Written');

        return {
          paper,
          mcqList,
          writtenList,
          totalMatching: matchingQuestions.length
        };
      })
      .filter(group => group.totalMatching > 0);
  }, [activePapersSource, selectedCategory, selectedYear, selectedOrgType, selectedQuestionType, selectedSubject, searchQuery]);

  const totalMatchingQuestions = useMemo(
    () => filteredPapersWithQuestions.reduce((acc, g) => acc + g.totalMatching, 0),
    [filteredPapersWithQuestions]
  );

  const getQuestionTab = (qId: string): 'question' | 'solution' => {
    return questionViewTabs[qId] || 'question';
  };

  const setQuestionTab = (qId: string, tab: 'question' | 'solution') => {
    setQuestionViewTabs(prev => ({ ...prev, [qId]: tab }));
  };

  const expandAllSolutions = () => {
    const next: { [key: string]: 'question' | 'solution' } = {};
    filteredPapersWithQuestions.forEach(g => {
      g.mcqList.forEach(q => { next[q.id] = 'solution'; });
      g.writtenList.forEach(q => { next[q.id] = 'solution'; });
    });
    setQuestionViewTabs(next);
  };

  const collapseAllSolutions = () => {
    setQuestionViewTabs({});
  };

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSelectedYear('All');
    setSelectedOrgType('All');
    setSelectedQuestionType('All');
    setSelectedSubject('All');
    setSearchQuery('');
  };

  const renderQuestionCard = (q: NonItQuestionItem) => {
    const activeTab = getQuestionTab(q.id);
    const chosenOption = selectedMcqOptions[q.id];

    return (
      <div
        key={q.id}
        className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] overflow-hidden shadow-xs hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors"
      >
        {/* Question Metadata Top Bar */}
        <div className="bg-[#FAF8F5] dark:bg-[#16181D] border-b border-[#E6E0D6] dark:border-[#2D3139] px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2.5 text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono font-bold text-[#1A1A1A] dark:text-[#E8E8E8] tabular-nums">
              {q.questionNo}
            </span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span
              className={`font-bold ${
                q.questionType === 'MCQ' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400'
              }`}
            >
              {q.questionType === 'MCQ' ? 'Preliminary MCQ' : 'Written Exam'}
            </span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span className="font-medium text-[#1A1A1A] dark:text-[#E8E8E8]">{q.subject}</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span className="font-mono font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] tabular-nums">
              {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
            </span>
          </div>

          {/* Question / Detailed Solution Sub-Tabs */}
          <div className="flex items-center gap-1 bg-[#F8F6F2] dark:bg-[#14171D] p-1 rounded-lg border border-[#E6E0D6] dark:border-[#2D3139]">
            <button
              onClick={() => setQuestionTab(q.id, 'question')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer min-h-[34px] ${
                activeTab === 'question'
                  ? 'bg-[#1A1A1A] dark:bg-blue-600 text-white shadow-xs'
                  : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8]'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Question</span>
            </button>
            <button
              onClick={() => setQuestionTab(q.id, 'solution')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer min-h-[34px] ${
                activeTab === 'solution'
                  ? 'bg-emerald-600 dark:bg-emerald-600 text-white shadow-xs'
                  : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8]'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Detailed Solution</span>
            </button>
          </div>
        </div>

        {/* Question & Solution Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="text-[16.5px] sm:text-[17px] font-medium text-[#1A1A1A] dark:text-[#E8E8E8] leading-[1.7] whitespace-pre-line font-sans">
            {q.questionText}
          </div>

          {/* If MCQ, render interactive 4 options with >= 44px touch targets */}
          {q.questionType === 'MCQ' && q.options && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {q.options.map((opt, idx) => {
                const isSelected = chosenOption === opt;
                const isCorrect = q.correctAnswer === opt;
                const showResult = Boolean(chosenOption) || activeTab === 'solution';

                let optionStyle =
                  'bg-[#FAF8F5] dark:bg-[#16181D] border-[#E6E0D6] dark:border-[#2D3139] text-[#1A1A1A] dark:text-[#E8E8E8] hover:border-blue-500/50';
                if (showResult) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-500/10 border-emerald-500 dark:border-emerald-500 text-emerald-900 dark:text-emerald-300 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-500/10 border-rose-500 dark:border-rose-500 text-rose-900 dark:text-rose-300';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      setSelectedMcqOptions(prev => ({
                        ...prev,
                        [q.id]: opt
                      }))
                    }
                    className={`min-h-[44px] p-3 rounded-lg border text-left text-[15px] sm:text-[16px] leading-relaxed transition-colors flex items-center justify-between gap-2.5 cursor-pointer ${optionStyle}`}
                  >
                    <span>{opt}</span>
                    {showResult && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Action Footer when on Question Tab */}
          {activeTab === 'question' && (
            <div className="pt-3 border-t border-[#E6E0D6] dark:border-[#2D3139] flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-[#4A4A4A] dark:text-[#A0A0A0]">
                Paper ID: {q.questionPaperCode}
              </span>
              <button
                onClick={() => setQuestionTab(q.id, 'solution')}
                className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-2 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-colors cursor-pointer min-h-[38px] flex items-center"
              >
                View Step-by-Step Solution →
              </button>
            </div>
          )}

          {/* Detailed Step-by-Step Solution Box */}
          {activeTab === 'solution' && (
            <div className="mt-4 pt-4 border-t border-[#E6E0D6] dark:border-[#2D3139] space-y-3">
              {q.questionType === 'MCQ' && q.correctAnswer && (
                <div className="px-4 py-2.5 bg-emerald-900/90 dark:bg-emerald-950 text-white rounded-lg text-xs font-bold flex items-center justify-between border border-emerald-700/60">
                  <span>Verified Correct Option: {q.correctAnswer}</span>
                  <span className="font-mono text-emerald-300">1 Mark</span>
                </div>
              )}

              <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4" />
                <span>Step-by-Step Model Solution & Explanation:</span>
              </div>

              <div className="text-[16.5px] sm:text-[17px] text-[#1A1A1A] dark:text-[#E8E8E8] leading-[1.7] whitespace-pre-line bg-[#FAF8F5] dark:bg-[#16181D] p-5 rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] font-sans">
                {q.solution}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Hero Header */}
      <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 sm:p-8 border border-[#E6E0D6] dark:border-[#2D3139] shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium">
              <span className={isItOperatorMode ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-amber-600 dark:text-amber-400 font-semibold'}>
                {isItOperatorMode
                  ? 'Bank IT Prep · Computer & Data Entry Operator Archive'
                  : 'Bank Non-IT Prep Archive'}
              </span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>2010 – 2026 Complete Question Bank</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>Govt Banks · Ministries · Private Banks</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-[#1A1A1A] dark:text-white">
              {isItOperatorMode
                ? 'Computer Operator & Data Entry / Control Operator Question Bank (2010–2026)'
                : 'Bank Non-IT Question Bank (2010–2026)'}
            </h1>
            <p className="text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
              {isItOperatorMode ? (
                <>
                  Complete Preliminary <strong>MCQ ({totalArchiveMcq})</strong> and <strong>Written ({totalArchiveWritten})</strong> questions with detailed step-by-step solutions for <strong>Computer Operator (Full 100-MCQ + Written Sets)</strong> and <strong>Data Entry / Control Operator (Full 100-MCQ + Written Sets)</strong> across Bangladesh Bank, Combined Govt Banks, BPSC Ministries, and Private Banks (2010–2026).
                </>
              ) : (
                <>
                  Complete Preliminary <strong>MCQ ({totalArchiveMcq})</strong> and <strong>Written ({totalArchiveWritten})</strong> questions with detailed step-by-step solutions for <strong>Senior Officer (General) (Full 100-MCQ + 12-Written 100/200-Mark Sets)</strong>, <strong>Officer (General) (Full 100-MCQ + 12-Written 100/200-Mark Sets)</strong>, and <strong>Officer (Cash) (Full 100-MCQ + 12-Written 100/200-Mark Sets)</strong> (2010–2026).
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-[#FAF8F5] dark:bg-[#14171D] px-4 py-3 rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] text-right">
              <span className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium block">Matching Papers</span>
              <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                {filteredPapersWithQuestions.length}
              </span>
            </div>
            <div className="bg-[#FAF8F5] dark:bg-[#14171D] px-4 py-3 rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] text-right">
              <span className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium block">Matching Questions</span>
              <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono tabular-nums">
                {totalMatchingQuestions} / {totalArchiveQuestions}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Filter Deck */}
      <div className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 space-y-5 shadow-xs">
        {/* Top Row: Search Bar + Quick Expand/Collapse + Reset */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E6E0D6] dark:border-[#2D3139]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
            <Filter className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>
              {isItOperatorMode
                ? 'Filter Computer Operator & Data Entry Operator Questions (2010–2026)'
                : 'Filter Bank Non-IT Question Bank (2010–2026)'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="w-4 h-4 text-[#767676] dark:text-[#6B7280] absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search math, translation, Bijoy, VLOOKUP, Job ID..."
                className="w-full pl-9 pr-8 py-2.5 bg-[#FAF8F5] dark:bg-[#16181D] border border-[#E6E0D6] dark:border-[#2D3139] rounded-lg text-xs text-[#1A1A1A] dark:text-[#E8E8E8] placeholder-[#767676] dark:placeholder-[#6B7280] focus:outline-none focus:border-blue-500 min-h-[40px]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-[#767676] hover:text-[#1A1A1A] dark:hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={expandAllSolutions}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
            >
              Show All Solutions
            </button>
            <button
              onClick={collapseAllSolutions}
              className="px-3.5 py-2 bg-[#FAF8F5] dark:bg-[#16181D] hover:bg-[#EAE6DF] dark:hover:bg-[#252830] text-[#1A1A1A] dark:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139] rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
            >
              Hide Solutions
            </button>
            <button
              onClick={resetAllFilters}
              className="px-3.5 py-2 bg-[#1A1A1A] hover:bg-black dark:bg-[#2D3139] dark:hover:bg-[#383D47] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap min-h-[40px]"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Filter 1: Job Category */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>1. Job Category:</span>
          </label>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 min-h-[36px] ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-[#FAF8F5] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139]'
              }`}
            >
              <span>
                {isItOperatorMode ? 'All IT Operator Categories' : 'All 3 Non-IT Categories'}
              </span>
              <span className="font-mono text-[11px] opacity-80">({activePapersSource.length} Papers)</span>
            </button>
            {activeCategoriesList.map(cat => {
              const catPapersCount = activePapersSource.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 min-h-[36px] ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-[#FAF8F5] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="font-mono text-[11px] opacity-80">({catPapersCount})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter 2, 3, 4: Organization Type, Question Type (Written / MCQ), and Subject */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-[#E6E0D6] dark:border-[#2D3139]">
          {/* Organization Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>2. Organization Type:</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  { id: 'All', label: 'All Sectors' },
                  { id: 'Government Bank', label: 'Govt Bank' },
                  { id: 'Government Ministry / Department', label: 'Govt Ministry' },
                  { id: 'Private Bank', label: 'Private Bank' }
                ] as const
              ).map(org => (
                <button
                  key={org.id}
                  onClick={() => setSelectedOrgType(org.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer min-h-[36px] ${
                    selectedOrgType === org.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-[#FAF8F5] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139]'
                  }`}
                >
                  {org.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question Type (Written / MCQ) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] flex items-center gap-1.5">
              <ListChecks className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>3. Question Type (MCQ / Written):</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'All', label: 'All (MCQ + Written)' },
                { id: 'MCQ', label: 'MCQ Only' },
                { id: 'Written', label: 'Written Only' }
              ].map(qt => (
                <button
                  key={qt.id}
                  onClick={() => setSelectedQuestionType(qt.id as NonItQuestionType | 'All')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer min-h-[36px] ${
                    selectedQuestionType === qt.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-[#FAF8F5] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139]'
                  }`}
                >
                  {qt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Subject / Topic */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>4. Subject / Topic:</span>
            </label>
            <select
              value={selectedSubject}
              onChange={e => setSelectedSubject(e.target.value as NonItSubject | 'All')}
              className="w-full px-3 py-2 bg-[#FAF8F5] dark:bg-[#16181D] border border-[#E6E0D6] dark:border-[#2D3139] rounded-lg text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] focus:outline-none focus:border-blue-500 min-h-[40px]"
            >
              <option value="All">All Subjects & Topics (7 Domains)</option>
              {nonItSubjects.map(subj => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter 5: Exam Year (2010 – 2026) */}
        <div className="space-y-2 pt-3 border-t border-[#E6E0D6] dark:border-[#2D3139]">
          <label className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>5. Exam Year (2010 – 2026):</span>
          </label>
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedYear('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer min-h-[34px] ${
                selectedYear === 'All'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-[#FAF8F5] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139]'
              }`}
            >
              All Years (2010–2026)
            </button>
            {nonItYears.map(yr => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer tabular-nums min-h-[34px] ${
                  selectedYear === yr
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-[#FAF8F5] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139]'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Written Question PDF Download Bar (Bulk Filtered Export) */}
        <div className="pt-4 border-t border-[#E6E0D6] dark:border-[#2D3139] flex flex-wrap items-center justify-between gap-3 bg-[#FAF8F5] dark:bg-[#16181D] -mx-5 -mb-5 px-5 py-3.5 rounded-b-xl">
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>
                {isItOperatorMode
                  ? 'Computer Operator & Data Entry Written Question PDF Download'
                  : 'Bank Non-IT Written Question PDF Download (Senior Officer, Officer & Cash)'}
              </span>
            </div>
            <p className="text-[11px] text-[#4A4A4A] dark:text-[#A0A0A0]">
              Download all Part B Written Examination Papers matching your current filter ({filteredPapersWithQuestions.filter(g => g.writtenList.length > 0).length} Papers) or download individual papers below.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              disabled={downloadingBulkMode !== null || filteredPapersWithQuestions.every(g => g.writtenList.length === 0)}
              onClick={async () => {
                if (downloadingBulkMode) return;
                setDownloadingBulkMode('questions');
                try {
                  const title = `${selectedCategory === 'All' ? (isItOperatorMode ? 'Computer & Data Entry Operator' : 'Bank Non-IT (SO, Officer, Cash)') : selectedCategory} — Written Question Bank (${selectedYear === 'All' ? '2010–2026' : selectedYear})`;
                  await downloadNonItBulkWrittenPdf(filteredPapersWithQuestions, title, false);
                } finally {
                  setDownloadingBulkMode(null);
                }
              }}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs min-h-[38px]"
            >
              {downloadingBulkMode === 'questions' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {downloadingBulkMode === 'questions'
                  ? 'Generating Written PDF...'
                  : 'Download Written Questions PDF'}
              </span>
            </button>

            <button
              type="button"
              disabled={downloadingBulkMode !== null || filteredPapersWithQuestions.every(g => g.writtenList.length === 0)}
              onClick={async () => {
                if (downloadingBulkMode) return;
                setDownloadingBulkMode('solutions');
                try {
                  const title = `${selectedCategory === 'All' ? (isItOperatorMode ? 'Computer & Data Entry Operator' : 'Bank Non-IT (SO, Officer, Cash)') : selectedCategory} — Written Questions & Solutions (${selectedYear === 'All' ? '2010–2026' : selectedYear})`;
                  await downloadNonItBulkWrittenPdf(filteredPapersWithQuestions, title, true);
                } finally {
                  setDownloadingBulkMode(null);
                }
              }}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs min-h-[38px]"
            >
              {downloadingBulkMode === 'solutions' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {downloadingBulkMode === 'solutions'
                  ? 'Generating Solutions PDF...'
                  : 'Download Written + Solutions PDF'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Grouped Question Papers Stream */}
      {filteredPapersWithQuestions.length === 0 ? (
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] p-12 text-center space-y-3">
          <p className="text-base font-semibold text-[#1A1A1A] dark:text-[#E8E8E8]">
            No Bank Non-IT questions found matching your selected filter combination.
          </p>
          <button
            onClick={resetAllFilters}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer min-h-[44px]"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredPapersWithQuestions.map(({ paper, mcqList, writtenList }) => {
            const currentPaperMode = paperSectionTab[paper.paperId] || 'both';
            const showMcqSection =
              mcqList.length > 0 && (currentPaperMode === 'both' || currentPaperMode === 'mcq');
            const showWrittenSection =
              writtenList.length > 0 && (currentPaperMode === 'both' || currentPaperMode === 'written');

            // Determine active range when a paper has a full 100-MCQ Preliminary set
            const isFull100McqSet = mcqList.length >= 50 && selectedSubject === 'All' && !searchQuery.trim();
            const isItOperatorPaper =
              paper.category === 'Computer Operator' ||
              paper.category === 'Data Entry / Control Operator';
            const defaultRange = filteredPapersWithQuestions.length === 1 ? 'all' : '1-25';
            const activeRange = paperMcqRange[paper.paperId] || defaultRange;

            const displayedMcqList = !isFull100McqSet
              ? mcqList
              : activeRange === 'all'
              ? mcqList
              : isItOperatorPaper
              ? activeRange === '1-25'
                ? mcqList.slice(0, 20)
                : activeRange === '26-50'
                ? mcqList.slice(20, 40)
                : activeRange === '51-70'
                ? mcqList.slice(40, 60)
                : activeRange === '71-90'
                ? mcqList.slice(60, 75)
                : mcqList.slice(75, 100)
              : activeRange === '1-25'
              ? mcqList.slice(0, 25)
              : activeRange === '26-50'
              ? mcqList.slice(25, 50)
              : activeRange === '51-70'
              ? mcqList.slice(50, 70)
              : activeRange === '71-90'
              ? mcqList.slice(70, 90)
              : mcqList.slice(90, 100);

            return (
              <section
                key={paper.paperId}
                className="bg-[#FAF8F5] dark:bg-[#16181D] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] overflow-hidden shadow-xs"
              >
                {/* Shared Question Paper Header Banner */}
                <div className="bg-white dark:bg-[#1E1E1E] border-b border-[#E6E0D6] dark:border-[#2D3139] p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A4A4A] dark:text-[#A0A0A0]">
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                          Question Paper ID: {paper.questionPaperCode}
                        </span>
                        <span aria-hidden="true" className="opacity-40">·</span>
                        <span className="text-[#1A1A1A] dark:text-white font-semibold">{paper.category}</span>
                        <span aria-hidden="true" className="opacity-40">·</span>
                        <span>{paper.orgType}</span>
                        <span aria-hidden="true" className="opacity-40">·</span>
                        <span className="font-mono tabular-nums">Year: {paper.year}</span>
                      </div>

                      <h2 className="text-base sm:text-xl font-bold text-[#1A1A1A] dark:text-white">
                        {paper.title}
                      </h2>

                      <p className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
                        <strong>Institutions:</strong> {paper.organizationName} ·{' '}
                        <strong>Exam Taker:</strong> {paper.examTaker} ·{' '}
                        <strong>Exam Date:</strong> {paper.examDate}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {/* Per-Paper Written PDF Download Buttons */}
                      <button
                        type="button"
                        disabled={downloadingPaperKey !== null}
                        onClick={async () => {
                          const key = `${paper.paperId}-q`;
                          setDownloadingPaperKey(key);
                          try {
                            await downloadNonItPaperPdf(paper, { includeSolutions: false, writtenOnly: true });
                          } finally {
                            setDownloadingPaperKey(null);
                          }
                        }}
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs min-h-[36px]"
                        title="Download Part B Written Question Paper PDF (Questions Only)"
                      >
                        {downloadingPaperKey === `${paper.paperId}-q` ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Download className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {downloadingPaperKey === `${paper.paperId}-q`
                            ? 'Saving PDF...'
                            : 'Written Questions PDF'}
                        </span>
                      </button>

                      <button
                        type="button"
                        disabled={downloadingPaperKey !== null}
                        onClick={async () => {
                          const key = `${paper.paperId}-s`;
                          setDownloadingPaperKey(key);
                          try {
                            await downloadNonItPaperPdf(paper, { includeSolutions: true, writtenOnly: true });
                          } finally {
                            setDownloadingPaperKey(null);
                          }
                        }}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs min-h-[36px]"
                        title="Download Part B Written Questions + Model Solutions PDF"
                      >
                        {downloadingPaperKey === `${paper.paperId}-s` ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Download className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {downloadingPaperKey === `${paper.paperId}-s`
                            ? 'Saving PDF...'
                            : 'Written + Solutions PDF'}
                        </span>
                      </button>

                      {/* Per-Paper Section Switcher (Both / Preliminary MCQ / Written) */}
                      <div className="flex items-center gap-1 bg-[#F8F6F2] dark:bg-[#14171D] p-1 rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] shrink-0">
                        <button
                          onClick={() =>
                            setPaperSectionTab(prev => ({ ...prev, [paper.paperId]: 'both' }))
                          }
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer min-h-[34px] ${
                            currentPaperMode === 'both'
                              ? 'bg-blue-600 text-white font-bold shadow-xs'
                              : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8]'
                          }`}
                        >
                          MCQ + Written ({mcqList.length + writtenList.length})
                        </button>
                        {mcqList.length > 0 && (
                          <button
                            onClick={() =>
                              setPaperSectionTab(prev => ({ ...prev, [paper.paperId]: 'mcq' }))
                            }
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer min-h-[34px] ${
                              currentPaperMode === 'mcq'
                                ? 'bg-blue-600 text-white font-bold shadow-xs'
                                : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8]'
                            }`}
                          >
                            Part A: MCQ ({mcqList.length})
                          </button>
                        )}
                        {writtenList.length > 0 && (
                          <button
                            onClick={() =>
                              setPaperSectionTab(prev => ({ ...prev, [paper.paperId]: 'written' }))
                            }
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer min-h-[34px] ${
                              currentPaperMode === 'written'
                                ? 'bg-emerald-600 text-white font-bold shadow-xs'
                                : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8]'
                            }`}
                          >
                            Part B: Written ({writtenList.length})
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paper Content Body: Separate MCQ Section & Written Section under the same Paper ID */}
                <div className="p-4 sm:p-6 space-y-6">
                  {/* PART A: PRELIMINARY MCQ SECTION */}
                  {showMcqSection && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6E0D6] dark:border-[#2D3139] pb-3">
                        <div className="flex items-center gap-2">
                          <ListChecks className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1A1A1A] dark:text-[#E8E8E8]">
                            Part A — Preliminary MCQ Section ({paper.questionPaperCode})
                          </h3>
                        </div>
                        <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                          {mcqList.length} Preliminary MCQ Questions · Full Paper Marks: {paper.mcqMarks}
                        </span>
                      </div>

                      {/* 100-MCQ Subject & Question Range Navigator */}
                      {isFull100McqSet && (
                        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] p-3 flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                            100-MCQ Set Navigator (Jump by Subject / Question No.):
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {(isItOperatorPaper
                              ? ([
                                  { id: '1-25', label: 'MCQ 001–020: Bangla (20)' },
                                  { id: '26-50', label: 'MCQ 021–040: English (20)' },
                                  { id: '51-70', label: 'MCQ 041–060: Math (20)' },
                                  { id: '71-90', label: 'MCQ 061–075: GK & Banking (15)' },
                                  { id: '91-100', label: 'MCQ 076–100: Computer & ICT (25)' },
                                  { id: 'all', label: `Show All ${mcqList.length} MCQs (001–100)` }
                                ] as const)
                              : ([
                                  { id: '1-25', label: 'MCQ 001–025: Bangla (25)' },
                                  { id: '26-50', label: 'MCQ 026–050: English (25)' },
                                  { id: '51-70', label: 'MCQ 051–070: Math (20)' },
                                  { id: '71-90', label: 'MCQ 071–090: GK & Banking (20)' },
                                  { id: '91-100', label: 'MCQ 091–100: ICT (10)' },
                                  { id: 'all', label: `Show All ${mcqList.length} MCQs (001–100)` }
                                ] as const)
                            ).map(rng => (
                              <button
                                key={rng.id}
                                type="button"
                                onClick={() =>
                                  setPaperMcqRange(prev => ({
                                    ...prev,
                                    [paper.paperId]: rng.id
                                  }))
                                }
                                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer min-h-[34px] ${
                                  activeRange === rng.id
                                    ? 'bg-blue-600 text-white shadow-xs'
                                    : 'bg-[#FAF8F5] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139]'
                                }`}
                              >
                                {rng.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        {displayedMcqList.map(q => renderQuestionCard(q))}
                      </div>

                      {isFull100McqSet && activeRange !== 'all' && (
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl px-4 py-3">
                          <span className="text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8]">
                            Showing {displayedMcqList.length} of {mcqList.length} Preliminary MCQs in this Question Set ({paper.questionPaperCode}).
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setPaperMcqRange(prev => ({
                                ...prev,
                                [paper.paperId]: 'all'
                              }))
                            }
                            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer min-h-[40px]"
                          >
                            Expand All {mcqList.length} MCQs (MCQ-001 to MCQ-100) →
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* PART B: WRITTEN EXAMINATION SECTION */}
                  {showWrittenSection && (() => {
                    const isFull12WrittenSet =
                      writtenList.length >= 10 && selectedSubject === 'All' && !searchQuery.trim();
                    const activeWrtRange = paperWrittenRange[paper.paperId] || 'all';
                    const displayedWrittenList = !isFull12WrittenSet
                      ? writtenList
                      : activeWrtRange === 'all'
                      ? writtenList
                      : activeWrtRange === 'focus'
                      ? writtenList.slice(0, 2)
                      : activeWrtRange === 'math'
                      ? writtenList.slice(2, 8)
                      : activeWrtRange === 'comp'
                      ? writtenList.slice(8, 10)
                      : writtenList.slice(10, 12);

                    return (
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6E0D6] dark:border-[#2D3139] pb-3">
                          <div className="flex items-center gap-2">
                            <PenTool className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1A1A1A] dark:text-[#E8E8E8]">
                              Part B — Written Examination Section ({paper.questionPaperCode})
                            </h3>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mr-1">
                              {writtenList.length} Written {writtenList.length === 1 ? 'Question' : 'Questions'} · Full Marks: {paper.writtenMarks}
                            </span>
                            <button
                              type="button"
                              disabled={downloadingPaperKey !== null}
                              onClick={async () => {
                                const key = `${paper.paperId}-q`;
                                setDownloadingPaperKey(key);
                                try {
                                  await downloadNonItPaperPdf(paper, { includeSolutions: false, writtenOnly: true });
                                } finally {
                                  setDownloadingPaperKey(null);
                                }
                              }}
                              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              <span>Download Questions PDF</span>
                            </button>
                            <button
                              type="button"
                              disabled={downloadingPaperKey !== null}
                              onClick={async () => {
                                const key = `${paper.paperId}-s`;
                                setDownloadingPaperKey(key);
                                try {
                                  await downloadNonItPaperPdf(paper, { includeSolutions: true, writtenOnly: true });
                                } finally {
                                  setDownloadingPaperKey(null);
                                }
                              }}
                              className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              <span>With Solutions PDF</span>
                            </button>
                          </div>
                        </div>

                        {/* 12-Question Written Set Navigator */}
                        {isFull12WrittenSet && (
                          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] p-3 flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                              Written Paper Navigator ({writtenList.length} Questions • {paper.writtenMarks} Marks):
                            </span>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {(
                                [
                                  { id: 'all', label: `All ${writtenList.length} Written Questions (01–12)` },
                                  { id: 'focus', label: 'Written 01–02: Focus Writing (Eng & Ban)' },
                                  { id: 'math', label: 'Written 03–08: Written Math (6 Problems)' },
                                  { id: 'comp', label: 'Written 09–10: Comprehension & Argument' },
                                  { id: 'trans', label: 'Written 11–12: Translation & Banking Case' }
                                ] as const
                              ).map(wRng => (
                                <button
                                  key={wRng.id}
                                  type="button"
                                  onClick={() =>
                                    setPaperWrittenRange(prev => ({
                                      ...prev,
                                      [paper.paperId]: wRng.id
                                    }))
                                  }
                                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer min-h-[34px] ${
                                    activeWrtRange === wRng.id
                                      ? 'bg-emerald-600 text-white shadow-xs'
                                      : 'bg-[#FAF8F5] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139]'
                                  }`}
                                >
                                  {wRng.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="space-y-4">
                          {displayedWrittenList.map(q => renderQuestionCard(q))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
};
