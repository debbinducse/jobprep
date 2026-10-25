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
  X
} from 'lucide-react';

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

  // Flatten all questions with paper metadata and determine topic category if not explicitly set
  const allCategorizedQuestions = useMemo(() => {
    const list: { question: ExamQuestion; paper: ExamPaper; derivedTopic: TopicCategory }[] = [];

    allExamPapers.forEach(paper => {
      paper.sections.forEach(sec => {
        sec.questions.forEach(q => {
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
    <div className="space-y-6">
      {/* Top Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="text-emerald-400 font-semibold">Bank IT Prep Question Bank</span>
              <span aria-hidden="true">·</span>
              <span>{allExamPapers.length} Full Exam Papers (2010–2026)</span>
              <span aria-hidden="true">·</span>
              <span>7 Syllabus Domains</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Topic & Sector Question Explorer (Preliminary 100-MCQ & Written)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Filter authentic recruitment questions across Private Commercial Banks, Bangladesh Bank, Combined Govt Banks, BPSC Ministries, Computer Operator, and Data Entry / Control Operator (full 2010–2026 100-MCQ Preliminary sets). Every question features 3 dedicated sub-tabs: <strong>Question Only</strong>, <strong>Step-by-Step Model Answer</strong>, and <strong>Code / SQL</strong>.
            </p>
          </div>

          <div className="bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800 text-right shrink-0">
            <span className="text-xs text-slate-400 font-medium block">Matching Questions</span>
            <span className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums">
              {filteredQuestions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Filter Control Deck */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-5">
        {/* Row 1: Search & Sector Filter */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <span>1. Filter by Recruitment Sector:</span>
            </span>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search DBBL, BRAC, SQL, VLSM, Java..."
                className="w-full text-xs pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { id: 'All', label: `All IT Sectors (${allExamPapers.length} Papers)` },
              { id: 'All Private Bank IT', label: 'All Private Bank IT (12)' },
              { id: 'Private Bank Assistant Programmer', label: 'Private Bank AP (4)' },
              { id: 'Private Bank Senior Officer (IT)', label: 'Private Bank SO (4)' },
              { id: 'Private Bank Officer (IT)', label: 'Private Bank Officer (4)' },
              { id: 'All Assistant Programmer', label: 'All Assistant Programmer' },
              { id: 'Bank Assistant Programmer', label: 'Govt Bank AP (3)' },
              { id: 'Ministry Assistant Programmer', label: 'Ministry AP (BPSC) (5)' },
              { id: 'Senior Officer (IT)', label: 'Govt Senior Officer IT (11)' },
              { id: 'Officer (IT)', label: 'Govt Officer IT (11)' },
              { id: 'Computer Operator', label: 'Computer Operator (2010–2026)' },
              { id: 'Data Entry / Control Operator', label: 'Data Entry / Control Operator (2010–2026)' }
            ].map(sec => (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedSector === sec.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: 7 Syllabus Topic Filters */}
        <div className="pt-4 border-t border-slate-100 space-y-2.5">
          <span className="text-xs font-bold text-slate-700 block">
            2. Filter by Syllabus Topic (7 Core Domains):
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            <button
              onClick={() => setSelectedTopic('All')}
              className={`p-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                selectedTopic === 'All'
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="text-xs font-bold whitespace-nowrap truncate">All 7 Topics</div>
              <div className={`text-[11px] truncate ${selectedTopic === 'All' ? 'text-slate-300' : 'text-slate-500'}`}>
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
                      ? 'bg-slate-900 border-slate-900 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    {getTopicIcon(cat.id)}
                    <span className="text-xs font-bold truncate">{cat.name.split(',')[0]}</span>
                  </div>
                  <div className={`text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {cat.id}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 3: Question Format (Preliminary MCQ vs Written) & Year Filter (2010–2026) */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-700 mr-1">
              3. Question Format:
            </span>
            {[
              { id: 'All', label: 'All Questions (MCQ + Written)' },
              { id: 'mcq', label: 'Preliminary MCQ Sets (100 MCQ/Paper)' },
              { id: 'descriptive', label: 'Written & Practical Questions' }
            ].map(qt => (
              <button
                key={qt.id}
                onClick={() => setSelectedQType(qt.id as 'All' | 'mcq' | 'descriptive')}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  selectedQType === qt.id
                    ? 'bg-indigo-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {qt.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1">
            <span className="text-xs font-bold text-slate-700 mr-1">Year:</span>
            <button
              onClick={() => setSelectedYear('All')}
              className={`text-[11px] px-2 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                selectedYear === 'All'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All (2010–2026)
            </button>
            {[
              '2026', '2025', '2024', '2023', '2022', '2021', '2020',
              '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'
            ].map(yr => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`text-[11px] font-mono px-2 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                  selectedYear === yr
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions List with 3 Sub-Tabs */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-xl border border-slate-200 space-y-3">
            <p className="text-sm font-semibold text-slate-700">
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
              className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
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
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors"
              >
                {/* Question Card Top Metadata Bar (Zero-Pill Unboxed Metadata) */}
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    <span className="font-mono font-bold text-slate-900 tabular-nums">
                      Q{q.questionNo}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-slate-900">{paper.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-medium">{derivedTopic}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">Job ID: {paper.jobId}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono font-semibold text-slate-800 tabular-nums">{q.marks} Marks</span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => onSelectPaper(paper.id)}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>Open Full Paper</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 3 Sub-Tabs Segmented Bar */}
                <div className="border-b border-slate-200 bg-slate-100/80 px-5 py-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1 overflow-x-auto">
                    <button
                      onClick={() => setSubTab(q.id, 'question')}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        currentSubTab === 'question'
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Question Only</span>
                    </button>

                    <button
                      onClick={() => setSubTab(q.id, 'answer')}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        currentSubTab === 'answer'
                          ? 'bg-emerald-700 text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Step-by-Step Model Answer</span>
                    </button>

                    <button
                      onClick={() => setSubTab(q.id, 'code')}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        currentSubTab === 'code'
                          ? 'bg-indigo-700 text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Code / SQL</span>
                    </button>
                  </div>

                  <span className="text-xs text-slate-500 hidden md:inline truncate max-w-xs">
                    {paper.title}
                  </span>
                </div>

                {/* Sub-Tab Content Body */}
                <div className="p-5">
                  {/* SUB-TAB 1: QUESTION ONLY */}
                  {currentSubTab === 'question' && (
                    <div className="space-y-4">
                      <div className="text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                        {q.questionText}
                      </div>

                      {q.options && q.options.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {q.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800"
                            >
                              {opt}
                            </div>
                          ))}
                        </div>
                      )}

                      {q.codeSnippet && (
                        <div className="mt-3">
                          <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3.5 py-1.5 rounded-t-lg">
                            Given Code Snippet ({q.language || 'Code'})
                          </div>
                          <pre className="p-4 bg-slate-950 text-emerald-400 rounded-b-lg text-xs font-mono overflow-x-auto leading-relaxed border-x border-b border-slate-800">
                            {q.codeSnippet}
                          </pre>
                        </div>
                      )}

                      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          {q.tags.map((t, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && <span aria-hidden="true">·</span>}
                              <span>#{t}</span>
                            </React.Fragment>
                          ))}
                        </div>
                        <button
                          onClick={() => setSubTab(q.id, 'answer')}
                          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
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
                        <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                          <FileCheck2 className="w-4 h-4 text-emerald-600" />
                          <span>Verified Step-by-Step Model Answer</span>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-200">
                          {q.solution}
                        </div>
                      </div>

                      {q.codeSolution && (
                        <div className="flex justify-end">
                          <button
                            onClick={() => setSubTab(q.id, 'code')}
                            className="text-xs font-semibold text-indigo-700 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
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
                          <div className="flex items-center justify-between bg-slate-900 text-slate-300 px-4 py-2 rounded-t-lg text-xs font-mono">
                            <span>{q.solutionLanguage?.toUpperCase() || 'CODE'} Implementation</span>
                            <span className="text-slate-400">Read-Only</span>
                          </div>
                          <pre className="p-4 bg-slate-950 text-emerald-400 rounded-b-lg text-xs font-mono overflow-x-auto leading-relaxed border-x border-b border-slate-800">
                            {q.codeSolution}
                          </pre>
                        </div>
                      ) : (
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                          <div className="text-xs font-semibold text-slate-700">
                            Descriptive / Theoretical Solution:
                          </div>
                          <div className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
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
            <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold text-slate-700">
                Showing <strong className="font-mono">{displayedQuestions.length}</strong> of{' '}
                <strong className="font-mono">{filteredQuestions.length}</strong> matching questions
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVisibleCount(prev => prev + 100)}
                  className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Load Next 100 Questions →
                </button>
                <button
                  onClick={() => setVisibleCount(filteredQuestions.length)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
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
