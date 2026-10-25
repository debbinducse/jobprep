import React, { useState, useMemo, useEffect, useRef } from 'react';
import { allExamPapers, getTotalQuestionCount } from './data/allExams';
import { ExamPaper, TopicCategory } from './types/exam';
import {
  bankNonItExamPapers,
  nonItJobCategories,
  itOperatorCategories,
  NonItJobCategory,
  getTotalNonItQuestionsCount,
  getTotalItOperatorQuestionsCount
} from './data/bankNonItQuestions';
import { HomePage } from './components/HomePage';
import { ExamPaperView } from './components/ExamPaperView';
import { CategoryWiseExplorer } from './components/CategoryWiseExplorer';
import { BankNonItQuestionBank } from './components/BankNonItQuestionBank';
import {
  BookOpen,
  LayoutGrid,
  Search,
  Menu,
  X,
  ShieldAlert,
  ChevronDown,
  Lock,
  Terminal,
  Briefcase,
  Layers,
  Sun,
  Moon,
  FileText
} from 'lucide-react';

type ActivePage =
  | 'home'
  | 'papers'
  | 'questions'
  | 'it-operator-questions'
  | 'non-it-questions';

export function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  // Reading Theme: 'dark' (#0F1115) or 'light' (#F8F6F2), defaulting to dark as requested
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jobprep_theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('jobprep_theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Exam Papers page state (Bank IT Prep)
  const [selectedPaperId, setSelectedPaperId] = useState<string>(allExamPapers[0].id);
  const [paperSectorFilter, setPaperSectorFilter] = useState<string>('All');
  const [paperSearchQuery, setPaperSearchQuery] = useState<string>('');
  const [mobilePaperDrawerOpen, setMobilePaperDrawerOpen] = useState<boolean>(false);

  // Question Bank initial filters (Bank IT Prep)
  const [qbInitialTopic, setQbInitialTopic] = useState<TopicCategory | 'All'>('All');
  const [qbInitialSector, setQbInitialSector] = useState<string>('All');
  const [qbInitialSearch, setQbInitialSearch] = useState<string>('');

  // Bank IT Operator Question Bank (Computer Operator & Data Entry / Control Operator) initial filters
  const [itOpInitialCategory, setItOpInitialCategory] = useState<NonItJobCategory | 'All'>('All');
  const [itOpInitialSearch, setItOpInitialSearch] = useState<string>('');

  // Bank Non-IT Prep Question Bank initial filters
  const [nonItInitialCategory, setNonItInitialCategory] = useState<NonItJobCategory | 'All'>('All');
  const [nonItInitialSearch, setNonItInitialSearch] = useState<string>('');

  // Navbar menus & search state
  const [navSearch, setNavSearch] = useState<string>('');
  const [showSearchDropdown, setShowSearchDropdown] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [itMenuDropdownOpen, setItMenuDropdownOpen] = useState<boolean>(false);
  const [nonItMenuDropdownOpen, setNonItMenuDropdownOpen] = useState<boolean>(false);

  const itMenuRef = useRef<HTMLDivElement>(null);
  const nonItMenuRef = useRef<HTMLDivElement>(null);
  const searchDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (itMenuRef.current && !itMenuRef.current.contains(e.target as Node)) {
        setItMenuDropdownOpen(false);
      }
      if (nonItMenuRef.current && !nonItMenuRef.current.contains(e.target as Node)) {
        setNonItMenuDropdownOpen(false);
      }
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(e.target as Node)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Strict Read-Only Copy/Print/Save Protection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ['c', 'p', 's', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Unified Navigation Handler
  const handleNavigate = (
    page: ActivePage,
    options?: {
      paperId?: string;
      category?: string;
      topic?: TopicCategory | 'All';
      search?: string;
      nonItCategory?: NonItJobCategory | 'All';
    }
  ) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setItMenuDropdownOpen(false);
    setNonItMenuDropdownOpen(false);
    setShowSearchDropdown(false);

    if (options?.paperId) {
      setSelectedPaperId(options.paperId);
    }
    if (options?.category && page === 'papers') {
      setPaperSectorFilter(options.category);
      const matching = allExamPapers.filter(p => {
        if (options.category === 'All') return true;
        if (options.category === 'All Private Bank') return p.category.startsWith('Private Bank');
        if (options.category === 'All Govt Bank') {
          return (
            p.category === 'Officer (IT)' ||
            p.category === 'Senior Officer (IT)' ||
            p.category === 'Bank Assistant Programmer'
          );
        }
        return p.category === options.category;
      });
      if (matching.length > 0 && !options.paperId) {
        setSelectedPaperId(matching[0].id);
      }
    }
    if (page === 'questions') {
      setQbInitialTopic(options?.topic || 'All');
      setQbInitialSector(options?.category || 'All');
      setQbInitialSearch(options?.search ?? '');
    }
    if (page === 'it-operator-questions') {
      setItOpInitialCategory(options?.nonItCategory || 'All');
      setItOpInitialSearch(options?.search ?? '');
    }
    if (page === 'non-it-questions') {
      setNonItInitialCategory(options?.nonItCategory || 'All');
      setNonItInitialSearch(options?.search ?? '');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered papers on the Bank IT Exam Papers page
  const filteredPapers = useMemo(() => {
    return allExamPapers.filter(paper => {
      let matchSector = true;
      if (paperSectorFilter === 'All Private Bank') {
        matchSector = paper.category.startsWith('Private Bank');
      } else if (paperSectorFilter === 'All Govt Bank') {
        matchSector =
          paper.category === 'Officer (IT)' ||
          paper.category === 'Senior Officer (IT)' ||
          paper.category === 'Bank Assistant Programmer';
      } else if (paperSectorFilter !== 'All') {
        matchSector = paper.category === paperSectorFilter;
      }

      const q = paperSearchQuery.toLowerCase();
      const matchSearch =
        !q ||
        paper.title.toLowerCase().includes(q) ||
        paper.jobId.toLowerCase().includes(q) ||
        paper.examDate.toLowerCase().includes(q) ||
        paper.circularYear.toLowerCase().includes(q) ||
        paper.participatingBanks.some(b => b.toLowerCase().includes(q));

      return matchSector && matchSearch;
    });
  }, [paperSectorFilter, paperSearchQuery]);

  const currentPaper: ExamPaper = useMemo(() => {
    return allExamPapers.find(p => p.id === selectedPaperId) || filteredPapers[0] || allExamPapers[0];
  }, [selectedPaperId, filteredPapers]);

  // Navbar quick search results (keeps IT and Non-IT clearly separated in search dropdown)
  const navSearchResults = useMemo(() => {
    const q = navSearch.trim().toLowerCase();
    if (!q) return { itPapers: [], itQuestions: [], nonItQuestions: [] };

    const itPapers = allExamPapers
      .filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.jobId.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.participatingBanks.some(b => b.toLowerCase().includes(q))
      )
      .slice(0, 3);

    const itQuestions: { qId: string; qNo: string; text: string; paper: ExamPaper }[] = [];
    for (const paper of allExamPapers) {
      for (const sec of paper.sections) {
        for (const ques of sec.questions) {
          if (
            ques.questionText.toLowerCase().includes(q) ||
            ques.tags.some(t => t.toLowerCase().includes(q))
          ) {
            itQuestions.push({
              qId: ques.id,
              qNo: ques.questionNo,
              text: ques.questionText,
              paper
            });
            if (itQuestions.length >= 3) break;
          }
        }
        if (itQuestions.length >= 3) break;
      }
      if (itQuestions.length >= 3) break;
    }

    const nonItQuestions: {
      id: string;
      questionNo: string;
      questionType: string;
      category: NonItJobCategory;
      year: number;
      text: string;
    }[] = [];

    for (const np of bankNonItExamPapers) {
      for (const nq of np.questions) {
        if (
          nq.questionText.toLowerCase().includes(q) ||
          nq.subject.toLowerCase().includes(q) ||
          np.title.toLowerCase().includes(q) ||
          np.questionPaperCode.toLowerCase().includes(q)
        ) {
          nonItQuestions.push({
            id: nq.id,
            questionNo: nq.questionNo,
            questionType: nq.questionType,
            category: np.category,
            year: np.year,
            text: nq.questionText
          });
          if (nonItQuestions.length >= 4) break;
        }
      }
      if (nonItQuestions.length >= 4) break;
    }

    return { itPapers, itQuestions, nonItQuestions };
  }, [navSearch]);

  const handleNavSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearch.trim()) {
      if (activePage === 'non-it-questions') {
        handleNavigate('non-it-questions', { search: navSearch.trim() });
      } else {
        handleNavigate('questions', { search: navSearch.trim() });
      }
      setShowSearchDropdown(false);
    }
  };

  const totalItQuestions = useMemo(() => getTotalQuestionCount(), []);
  const totalItOperatorQuestions = useMemo(() => getTotalItOperatorQuestionsCount(), []);
  const totalNonItQuestions = useMemo(() => getTotalNonItQuestionsCount(), []);

  const isBankItActive =
    activePage === 'papers' ||
    activePage === 'questions' ||
    activePage === 'it-operator-questions';

  const isBankNonItActive = activePage === 'non-it-questions';

  return (
    <div
      className="min-h-screen bg-[#F8F6F2] dark:bg-[#14171D] text-[#1A1A1A] dark:text-[#E8E8E8] flex flex-col select-none transition-colors duration-150"
      onContextMenu={e => e.preventDefault()}
      onCopy={e => e.preventDefault()}
      onCut={e => e.preventDefault()}
    >
      {/* =================================================================== */}
      {/* STICKY MODERN NAVBAR WITH 2 MAIN MENUS + GLOBAL SEARCH              */}
      {/* 1. Bank IT Prep | 2. Bank Non-IT Prep                               */}
      {/* =================================================================== */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Brand Wordmark + Two Main Navigation Menus */}
          <div className="flex items-center gap-3 lg:gap-6">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white font-mono font-extrabold text-sm shadow-xs group-hover:from-emerald-500 group-hover:to-teal-700 transition-colors border border-emerald-500/30">
                IT
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold tracking-tight text-white leading-none">
                  Govt IT &amp; <span className="text-emerald-400">BankPrep</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Official Solved Archive
                </div>
              </div>
            </button>

            {/* Desktop Main Navigation: 1. Bank IT Prep | 2. Bank Non-IT Prep */}
            <nav className="hidden lg:flex items-center gap-2">
              {/* MENU 1: BANK IT PREP */}
              <div className="relative" ref={itMenuRef}>
                <button
                  onClick={() => {
                    setItMenuDropdownOpen(prev => !prev);
                    setNonItMenuDropdownOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                    isBankItActive
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>1. Bank IT Prep</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      itMenuDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {itMenuDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 space-y-1">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80">
                      Bank IT Prep Modules ({allExamPapers.length} Papers)
                    </div>

                    <button
                      onClick={() => handleNavigate('papers')}
                      className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        activePage === 'papers'
                          ? 'bg-slate-800 text-emerald-400'
                          : 'text-slate-200 hover:bg-slate-800/70'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        <span>Exam Papers</span>
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        {allExamPapers.length} Papers
                      </span>
                    </button>

                    <button
                      onClick={() => handleNavigate('questions')}
                      className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        activePage === 'questions'
                          ? 'bg-slate-800 text-emerald-400'
                          : 'text-slate-200 hover:bg-slate-800/70'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <LayoutGrid className="w-4 h-4 text-sky-400" />
                        <span>Question Bank</span>
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        {totalItQuestions} Solved
                      </span>
                    </button>

                    {/* Computer Operator & Data Entry / Control Operator (2010–2026) under Bank IT */}
                    <div className="pt-2 mt-1 border-t border-slate-800">
                      <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-between">
                        <span>IT Operator Archive (2010–2026)</span>
                        <span className="font-mono text-[10px] text-slate-400">
                          {totalItOperatorQuestions} Qs
                        </span>
                      </div>
                      <div className="pl-2 space-y-1 mt-1">
                        {itOperatorCategories.map(cat => (
                          <button
                            key={cat}
                            onClick={() =>
                              handleNavigate('it-operator-questions', {
                                nonItCategory: cat,
                                search: ''
                              })
                            }
                            className={`w-full px-3 py-2 rounded-lg text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                              activePage === 'it-operator-questions' && itOpInitialCategory === cat
                                ? 'bg-slate-800 text-emerald-400'
                                : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                            }`}
                          >
                            <span>{cat}</span>
                            <span className="text-[10px] font-mono text-slate-500">MCQ+Written</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* MENU 2: BANK NON-IT PREP */}
              <div className="relative" ref={nonItMenuRef}>
                <button
                  onClick={() => {
                    setNonItMenuDropdownOpen(prev => !prev);
                    setItMenuDropdownOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                    isBankNonItActive
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  <span>2. Bank Non-IT Prep</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      nonItMenuDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {nonItMenuDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 space-y-1">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80">
                      Bank Non-IT Prep (2010 – 2026 Archive)
                    </div>

                    <button
                      onClick={() =>
                        handleNavigate('non-it-questions', { nonItCategory: 'All', search: '' })
                      }
                      className={`w-full px-3 py-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                        activePage === 'non-it-questions' && nonItInitialCategory === 'All'
                          ? 'bg-slate-800 text-amber-400'
                          : 'text-white hover:bg-slate-800/70'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Layers className="w-4 h-4 text-amber-400" />
                        <span>Question Bank (All Non-IT)</span>
                      </span>
                      <span className="font-mono text-[11px] text-amber-300">
                        2010–2026 ({totalNonItQuestions})
                      </span>
                    </button>

                    <div className="pt-1.5 mt-1 border-t border-slate-800">
                      <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Filter by Non-IT Job Category
                      </div>
                      <div className="space-y-0.5 mt-1">
                        {nonItJobCategories.map(cat => (
                          <button
                            key={cat}
                            onClick={() =>
                              handleNavigate('non-it-questions', {
                                nonItCategory: cat,
                                search: ''
                              })
                            }
                            className={`w-full px-3 py-2 rounded-lg text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                              activePage === 'non-it-questions' && nonItInitialCategory === cat
                                ? 'bg-slate-800 text-amber-400'
                                : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                            }`}
                          >
                            <span>{cat}</span>
                            <span className="text-[10px] font-mono text-slate-500">MCQ+Written</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right: Search Bar + Dark/Light Mode Reading Toggle + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Global Search Box */}
            <div className="relative hidden sm:block w-52 md:w-64" ref={searchDropdownRef}>
              <form onSubmit={handleNavSearchSubmit}>
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={navSearch}
                  onChange={e => {
                    setNavSearch(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  onFocus={() => setShowSearchDropdown(true)}
                  placeholder="Search IT or Non-IT questions..."
                  className="w-full pl-8 pr-7 py-1.5 bg-[#181B22] border border-[#2D3139] rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                {navSearch && (
                  <button
                    type="button"
                    onClick={() => {
                      setNavSearch('');
                      setShowSearchDropdown(false);
                    }}
                    className="absolute right-2 top-2 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </form>

              {/* Live Search Dropdown (Separated into Bank IT and Bank Non-IT) */}
              {showSearchDropdown && navSearch.trim().length > 0 && (
                <div className="absolute right-0 mt-2 w-96 bg-[#16181F] border border-[#2D3139] rounded-xl shadow-2xl p-2 z-50 text-xs space-y-2 max-h-[440px] overflow-y-auto">
                  {navSearchResults.itPapers.length === 0 &&
                  navSearchResults.itQuestions.length === 0 &&
                  navSearchResults.nonItQuestions.length === 0 ? (
                    <div className="p-3 text-slate-400 text-center">
                      No matching results for "{navSearch}"
                    </div>
                  ) : (
                    <>
                      {navSearchResults.nonItQuestions.length > 0 && (
                        <div>
                          <div className="px-2.5 py-1 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                            Bank Non-IT Question Bank (2010–2026)
                          </div>
                          {navSearchResults.nonItQuestions.map(item => (
                            <button
                              key={item.id}
                              onClick={() => {
                                handleNavigate('non-it-questions', {
                                  nonItCategory: item.category,
                                  search: navSearch.trim()
                                });
                                setNavSearch('');
                              }}
                              className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors flex flex-col gap-0.5 cursor-pointer"
                            >
                              <span className="font-semibold text-white line-clamp-1">
                                {item.questionNo} ({item.questionType}): {item.text}
                              </span>
                              <span className="text-[11px] text-amber-300/90 font-mono">
                                {item.category} · {item.year}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {navSearchResults.itPapers.length > 0 && (
                        <div className="pt-1 border-t border-[#262A32]">
                          <div className="px-2.5 py-1 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                            Bank IT Exam Papers
                          </div>
                          {navSearchResults.itPapers.map(p => (
                            <button
                              key={p.id}
                              onClick={() => {
                                handleNavigate('papers', { paperId: p.id });
                                setNavSearch('');
                              }}
                              className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors flex flex-col gap-0.5 cursor-pointer"
                            >
                              <span className="font-semibold text-white truncate">{p.title}</span>
                              <span className="text-[11px] text-slate-400 font-mono">
                                {p.category} · Job ID: {p.jobId}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {navSearchResults.itQuestions.length > 0 && (
                        <div className="pt-1 border-t border-[#262A32]">
                          <div className="px-2.5 py-1 text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                            Bank IT Questions
                          </div>
                          {navSearchResults.itQuestions.map(item => (
                            <button
                              key={item.qId}
                              onClick={() => {
                                handleNavigate('questions', { search: navSearch.trim() });
                                setNavSearch('');
                              }}
                              className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors flex flex-col gap-0.5 cursor-pointer"
                            >
                              <span className="font-semibold text-white line-clamp-1">
                                Q{item.qNo}: {item.text}
                              </span>
                              <span className="text-[11px] text-slate-400 font-mono">
                                {item.paper.category} · {item.paper.jobId}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Reading Mode Dark/Light Toggle Icon on Top-Right Corner */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to soft light mode' : 'Switch to reading dark mode'}
              title={theme === 'dark' ? 'Current: Dark Mode (#14171D). Click for Soft Light Mode (#F8F6F2)' : 'Current: Light Mode (#F8F6F2). Click for Dark Mode (#14171D)'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer bg-[#181B22] border-[#2D3139] hover:border-slate-500 text-slate-200 hover:text-white"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="text-[11px] font-medium text-amber-200 hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-sky-400" />
                  <span className="text-[11px] font-medium text-sky-200 hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Sub-Bar Showing Active Section Context & Quick Links */}
        <div className="bg-slate-900 border-t border-slate-800/90">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4 overflow-x-auto text-xs">
            {isBankNonItActive ? (
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="font-bold text-amber-400 pr-2 border-r border-slate-700">
                  2. Bank Non-IT Prep:
                </span>
                <button
                  onClick={() =>
                    handleNavigate('non-it-questions', { nonItCategory: 'All', search: '' })
                  }
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    nonItInitialCategory === 'All'
                      ? 'bg-amber-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  All Non-IT Question Bank (2010–2026)
                </button>
                {nonItJobCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() =>
                      handleNavigate('non-it-questions', { nonItCategory: cat, search: '' })
                    }
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      nonItInitialCategory === cat
                        ? 'bg-amber-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="font-bold text-emerald-400 pr-2 border-r border-slate-700">
                  1. Bank IT Prep:
                </span>
                <button
                  onClick={() => handleNavigate('papers')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    activePage === 'papers'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  Exam Papers ({allExamPapers.length})
                </button>
                <button
                  onClick={() => handleNavigate('questions')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    activePage === 'questions'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  Question Bank ({totalItQuestions})
                </button>
                {itOperatorCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() =>
                      handleNavigate('it-operator-questions', { nonItCategory: cat, search: '' })
                    }
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      activePage === 'it-operator-questions' && itOpInitialCategory === cat
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() =>
                isBankNonItActive
                  ? handleNavigate('papers')
                  : handleNavigate('non-it-questions', { nonItCategory: 'All' })
              }
              className="text-xs font-bold text-amber-400 hover:text-amber-300 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isBankNonItActive
                ? 'Switch to 1. Bank IT Prep →'
                : 'Switch to 2. Bank Non-IT Prep (2010–2026) →'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-5 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleNavSearchSubmit} className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={navSearch}
                onChange={e => setNavSearch(e.target.value)}
                placeholder="Search IT or Non-IT questions..."
                className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
              />
            </form>

            {/* Mobile Menu 1: Bank IT Prep */}
            <div className="space-y-1.5">
              <div className="px-2 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                1. Bank IT Prep
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => handleNavigate('papers')}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer ${
                    activePage === 'papers'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800/70 text-slate-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Exam Papers</span>
                </button>
                <button
                  onClick={() => handleNavigate('questions')}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer ${
                    activePage === 'questions'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800/70 text-slate-200'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Question Bank</span>
                </button>
              </div>

              <div className="px-2 pt-1 text-[11px] font-bold text-slate-400">
                IT Operator Question Bank (2010–2026):
              </div>
              <div className="grid grid-cols-1 gap-1">
                {itOperatorCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() =>
                      handleNavigate('it-operator-questions', { nonItCategory: cat, search: '' })
                    }
                    className={`px-3 py-1.5 rounded-lg text-left text-xs font-semibold cursor-pointer ${
                      activePage === 'it-operator-questions' && itOpInitialCategory === cat
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800/70 text-slate-200'
                    }`}
                  >
                    • {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu 2: Bank Non-IT Prep */}
            <div className="space-y-1.5 pt-3 border-t border-slate-800">
              <div className="px-2 text-xs font-extrabold uppercase tracking-wider text-amber-400">
                2. Bank Non-IT Prep (2010–2026)
              </div>
              <button
                onClick={() =>
                  handleNavigate('non-it-questions', { nonItCategory: 'All', search: '' })
                }
                className={`w-full px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-between cursor-pointer ${
                  activePage === 'non-it-questions' && nonItInitialCategory === 'All'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-800 text-amber-300'
                }`}
              >
                <span>Full Non-IT Question Bank (2010–2026)</span>
                <span className="font-mono">{totalNonItQuestions} Qs</span>
              </button>
              <div className="grid grid-cols-1 gap-1 pt-1">
                {nonItJobCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() =>
                      handleNavigate('non-it-questions', { nonItCategory: cat, search: '' })
                    }
                    className="px-3 py-1.5 rounded-lg text-left text-xs font-semibold bg-slate-800/50 text-slate-300 hover:text-white cursor-pointer"
                  >
                    • {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =================================================================== */}
      {/* MAIN PAGE CONTENT AREA                                              */}
      {/* =================================================================== */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* ----------------------------------------------------------------- */}
        {/* PAGE: HOME                                                        */}
        {/* ----------------------------------------------------------------- */}
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}

        {/* ----------------------------------------------------------------- */}
        {/* PAGE 1A: BANK IT PREP -> EXAM PAPERS (42 COMPLETE PAPERS)          */}
        {/* ----------------------------------------------------------------- */}
        {activePage === 'papers' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#1E1E1E] text-[#1A1A1A] dark:text-[#E8E8E8] rounded-2xl p-5 sm:p-7 border border-[#E6E0D6] dark:border-[#2D3139] space-y-5 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">1. Bank IT Prep · Exam Papers</span>
                    <span aria-hidden="true">·</span>
                    <span>3 Viewing Modes (Question Paper · Model Answers · Official Hall Print)</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#E8E8E8]">
                    Complete 200-Mark Bank &amp; Ministry IT Examination Papers ({allExamPapers.length})
                  </h1>
                </div>

                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-[#4A4A4A] dark:text-[#A0A0A0] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={paperSearchQuery}
                    onChange={e => setPaperSearchQuery(e.target.value)}
                    placeholder="Filter papers by bank, Job ID, year..."
                    className="w-full pl-9 pr-8 py-2 bg-[#F8F6F2] dark:bg-[#16181D] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl text-xs text-[#1A1A1A] dark:text-[#E8E8E8] placeholder-[#4A4A4A] dark:placeholder-[#A0A0A0] focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  {paperSearchQuery && (
                    <button
                      onClick={() => setPaperSearchQuery('')}
                      className="absolute right-2.5 top-2 text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-white cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Filter Chips with Touch-Friendly Horizontal Scroll */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-2 border-t border-[#E6E0D6] dark:border-[#2D3139]">
                {[
                  { id: 'All', label: `All Papers (${allExamPapers.length})` },
                  { id: 'All Private Bank', label: 'All Private Banks (12)' },
                  { id: 'Private Bank Assistant Programmer', label: 'Private Bank AP (4)' },
                  { id: 'Private Bank Senior Officer (IT)', label: 'Private Bank SO IT (4)' },
                  { id: 'Private Bank Officer (IT)', label: 'Private Bank Officer IT (4)' },
                  { id: 'All Govt Bank', label: 'All Govt & Combined Banks (25)' },
                  { id: 'Bank Assistant Programmer', label: 'Govt Bank AP (3)' },
                  { id: 'Senior Officer (IT)', label: 'Govt Senior Officer IT (11)' },
                  { id: 'Officer (IT)', label: 'Govt Officer IT (11)' },
                  { id: 'Ministry Assistant Programmer', label: 'BPSC Ministry AP (5)' },
                  { id: 'Computer Operator', label: 'Computer Operator (2010–2026)' },
                  { id: 'Data Entry / Control Operator', label: 'Data Entry / Control Operator (2010–2026)' }
                ].map(sec => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      setPaperSectorFilter(sec.id);
                      const matching = allExamPapers.filter(p => {
                        if (sec.id === 'All') return true;
                        if (sec.id === 'All Private Bank') return p.category.startsWith('Private Bank');
                        if (sec.id === 'All Govt Bank') {
                          return (
                            p.category === 'Officer (IT)' ||
                            p.category === 'Senior Officer (IT)' ||
                            p.category === 'Bank Assistant Programmer'
                          );
                        }
                        return p.category === sec.id;
                      });
                      if (matching.length > 0) {
                        setSelectedPaperId(matching[0].id);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      paperSectorFilter === sec.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-[#F2EFE9] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-white border border-[#E6E0D6] dark:border-[#2D3139]'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Paper Switcher (Solves Endless Scrolling on Mobile) */}
            <div className="block lg:hidden">
              <button
                onClick={() => setMobilePaperDrawerOpen(prev => !prev)}
                className="w-full p-3.5 bg-white dark:bg-[#1E1E1E] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl flex items-center justify-between font-bold text-xs text-[#1A1A1A] dark:text-[#E8E8E8] shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-2 truncate text-left">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">Selected Paper: {currentPaper.title}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-blue-600 dark:text-blue-400 shrink-0">
                  <span>Browse ({filteredPapers.length})</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobilePaperDrawerOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {mobilePaperDrawerOpen && (
                <div className="mt-2 bg-white dark:bg-[#1E1E1E] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl overflow-hidden max-h-80 overflow-y-auto divide-y divide-[#E6E0D6] dark:divide-[#2D3139] shadow-md">
                  {filteredPapers.map(paper => (
                    <button
                      key={paper.id}
                      onClick={() => {
                        setSelectedPaperId(paper.id);
                        setMobilePaperDrawerOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left p-3 text-xs flex flex-col gap-0.5 transition-colors cursor-pointer ${
                        paper.id === currentPaper.id
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold border-l-3 border-blue-600'
                          : 'text-[#1A1A1A] dark:text-[#E8E8E8] hover:bg-[#F8F6F2] dark:hover:bg-white/5'
                      }`}
                    >
                      <span className="font-semibold line-clamp-1">{paper.title}</span>
                      <span className="text-[11px] text-[#4A4A4A] dark:text-[#A0A0A0] font-mono">
                        {paper.category} · Job ID: {paper.jobId} · {paper.examDate}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Desktop Left Sidebar: Exam Paper Directory */}
              <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] overflow-hidden lg:sticky lg:top-28 shadow-xs">
                <div className="bg-[#F3EFE9] dark:bg-[#16181D] border-b border-[#E6E0D6] dark:border-[#2D3139] px-4 py-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                    Select Exam Paper ({filteredPapers.length})
                  </span>
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold tabular-nums">
                    200 Marks
                  </span>
                </div>

                <div className="max-h-[calc(100vh-14rem)] overflow-y-auto divide-y divide-[#E6E0D6] dark:divide-[#2D3139]">
                  {filteredPapers.length === 0 ? (
                    <div className="p-6 text-center text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
                      No papers match your filter.
                    </div>
                  ) : (
                    filteredPapers.map(paper => {
                      const isSelected = paper.id === currentPaper.id;
                      const qCount = paper.sections.reduce((acc, s) => acc + s.questions.length, 0);
                      return (
                        <button
                          key={paper.id}
                          onClick={() => {
                            setSelectedPaperId(paper.id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`w-full text-left p-3.5 transition-colors flex flex-col gap-1 cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-l-3 border-blue-600'
                              : 'hover:bg-[#F8F6F2] dark:hover:bg-white/5 text-[#1A1A1A] dark:text-[#E8E8E8]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 text-[11px] font-mono tabular-nums">
                            <span
                              className={
                                isSelected ? 'text-blue-700 dark:text-blue-300 font-bold' : 'text-[#4A4A4A] dark:text-[#A0A0A0] font-semibold'
                              }
                            >
                              {paper.jobId} · {paper.circularYear}
                            </span>
                            <span className={isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-[#4A4A4A] dark:text-[#A0A0A0]'}>
                              {qCount} Qs
                            </span>
                          </div>
                          <div className="text-xs font-bold leading-snug line-clamp-2">
                            {paper.title}
                          </div>
                          <div
                            className={`text-[11px] truncate ${
                              isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-[#4A4A4A] dark:text-[#A0A0A0]'
                            }`}
                          >
                            {paper.category}
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </aside>

              {/* Right Main Area: Selected Paper with 3 Viewing Modes */}
              <div className="lg:col-span-8 xl:col-span-9 min-w-0">
                <ExamPaperView paper={currentPaper} />
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* PAGE 1B: BANK IT PREP -> QUESTION BANK                            */}
        {/* ----------------------------------------------------------------- */}
        {activePage === 'questions' && (
          <CategoryWiseExplorer
            onSelectPaper={paperId => handleNavigate('papers', { paperId })}
            initialTopic={qbInitialTopic}
            initialSector={qbInitialSector}
            initialSearch={qbInitialSearch}
          />
        )}

        {/* ----------------------------------------------------------------- */}
        {/* PAGE 1E: BANK IT PREP -> COMPUTER & DATA ENTRY OPERATOR (2010–26) */}
        {/* ----------------------------------------------------------------- */}
        {activePage === 'it-operator-questions' && (
          <BankNonItQuestionBank
            sectionMode="it-operator"
            initialCategory={itOpInitialCategory}
            initialSearch={itOpInitialSearch}
          />
        )}

        {/* ----------------------------------------------------------------- */}
        {/* PAGE 2: BANK NON-IT PREP -> QUESTION BANK (2010–2026)             */}
        {/* ----------------------------------------------------------------- */}
        {activePage === 'non-it-questions' && (
          <BankNonItQuestionBank
            sectionMode="non-it"
            initialCategory={nonItInitialCategory}
            initialSearch={nonItInitialSearch}
          />
        )}
      </main>

      {/* =================================================================== */}
      {/* CLEAN PROFESSIONAL FOOTER                                           */}
      {/* =================================================================== */}
      {/* =================================================================== */}
      {/* CLEAN PROFESSIONAL FOOTER                                           */}
      {/* =================================================================== */}
      <footer className="bg-white dark:bg-[#121418] text-[#4A4A4A] dark:text-[#A0A0A0] border-t border-[#E6E0D6] dark:border-[#262A32] mt-16 transition-colors duration-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              <strong className="text-[#1A1A1A] dark:text-[#E8E8E8]">Govt IT &amp; BankPrep Portal (2010–2026)</strong> · Dedicated Bank IT &amp; Non-IT Reading Archive
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[#4A4A4A] dark:text-[#A0A0A0]">
            <button
              onClick={() => handleNavigate('papers')}
              className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer"
            >
              1. Bank IT Prep ({allExamPapers.length} Papers)
            </button>
            <button
              onClick={() => handleNavigate('non-it-questions', { nonItCategory: 'All' })}
              className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer"
            >
              2. Bank Non-IT Question Bank (2010–2026)
            </button>
            <span className="flex items-center gap-1 text-[#666666] dark:text-[#888888]">
              <Lock className="w-3.5 h-3.5" />
              <span>Read-Only Protected</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
