import React, { useState, useMemo } from 'react';
import { allExamPapers, topicCategories, getTotalQuestionCount } from '../data/allExams';
import { TopicCategory } from '../types/exam';
import { NonItJobCategory } from '../data/bankNonItQuestions';
import {
  BookOpen,
  Database,
  Network,
  ArrowRight,
  Search,
  Code2,
  Terminal,
  ShieldCheck,
  Languages,
  LayoutList,
  Briefcase
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'papers' | 'questions' | 'non-it-questions' | 'it-operator-questions', options?: {
    paperId?: string;
    category?: string;
    topic?: TopicCategory | 'All';
    search?: string;
    nonItCategory?: NonItJobCategory | 'All';
  }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate
}) => {
  const [heroSearch, setHeroSearch] = useState('');
  const [featuredGroup, setFeaturedGroup] = useState<'all' | 'private' | 'govt' | 'ministry'>('all');

  const totalQuestions = useMemo(() => getTotalQuestionCount(), []);

  const featuredPapers = useMemo(() => {
    if (featuredGroup === 'private') {
      return allExamPapers.filter(p => p.category.startsWith('Private Bank')).slice(0, 6);
    }
    if (featuredGroup === 'govt') {
      return allExamPapers.filter(p =>
        p.category === 'Officer (IT)' ||
        p.category === 'Senior Officer (IT)' ||
        p.category === 'Bank Assistant Programmer'
      ).slice(0, 6);
    }
    if (featuredGroup === 'ministry') {
      return allExamPapers.filter(p => p.category === 'Ministry Assistant Programmer').slice(0, 6);
    }
    // Curated mix featuring the official BSCS Job ID-25104, 25105, 10225, 10229, DBBL & Bangladesh Bank papers
    return [
      allExamPapers.find(p => p.id === 'so-it-25104'),
      allExamPapers.find(p => p.id === 'officer-it-25105'),
      allExamPapers.find(p => p.id === 'so-it-10225'),
      allExamPapers.find(p => p.id === 'officer-it-10229'),
      allExamPapers.find(p => p.id === 'pcb-dbbl-ap-2024'),
      allExamPapers.find(p => p.id === 'ap-bangladesh-bank')
    ].filter(Boolean) as typeof allExamPapers;
  }, [featuredGroup]);

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      onNavigate('questions', { search: heroSearch.trim() });
    } else {
      onNavigate('papers');
    }
  };

  const getTopicIcon = (topic: TopicCategory) => {
    switch (topic) {
      case 'Programming & Algorithms': return <Code2 className="w-4 h-4 text-sky-400" />;
      case 'Database & SQL': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Networking & Security': return <Network className="w-4 h-4 text-indigo-400" />;
      case 'Operating Systems & Linux': return <Terminal className="w-4 h-4 text-amber-400" />;
      case 'Software Engineering & System Design': return <LayoutList className="w-4 h-4 text-cyan-400" />;
      case 'E-Governance & ICT Laws': return <ShieldCheck className="w-4 h-4 text-teal-400" />;
      case 'Non-Technical & Language': return <Languages className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div className="space-y-10 sm:space-y-12 pb-8">
      {/* HERO SECTION */}
      <section className="relative rounded-2xl bg-white dark:bg-[#1E1E1E] border border-[#E6E0D6] dark:border-[#2D3139] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs transition-colors duration-200">
        <div className="max-w-3xl space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">2010–2026 National Archive</span>
            <span aria-hidden="true">·</span>
            <span>Private Commercial Banks</span>
            <span aria-hidden="true">·</span>
            <span>Bangladesh Bank &amp; Combined Banks</span>
            <span aria-hidden="true">·</span>
            <span>BPSC Ministries</span>
          </div>

          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] dark:text-[#E8E8E8] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Govt IT &amp; Bank Prep Portal
          </h1>

          <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold leading-snug">
            Complete Solved Papers &amp; Question Bank for Bank IT and Non-IT Jobs
          </p>

          <p className="text-sm sm:text-[16px] text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed max-w-2xl">
            Complete solved question bank for Bangladesh Bank, Combined Banks &amp; Ministry exams. Covers Bank IT and Non-IT positions with written, MCQ, and detailed solutions (2010–2026).
          </p>

          {/* Hero Search Bar */}
          <form onSubmit={handleHeroSearchSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl pt-1">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#4A4A4A] dark:text-[#A0A0A0] absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                placeholder="Search Job ID (10229, DBBL-AP), SQL queries, VLSM, OAuth 2.0, Dijkstra..."
                className="w-full pl-10 pr-4 py-3 bg-[#F8F6F2] dark:bg-[#16181D] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl text-sm text-[#1A1A1A] dark:text-[#E8E8E8] placeholder-[#4A4A4A] dark:placeholder-[#A0A0A0] focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-xs min-h-[44px]"
            >
              <span>Search Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('papers')}
              className="px-4 py-2.5 bg-[#F2EFE9] dark:bg-[#16181D] hover:bg-white dark:hover:bg-white/10 text-[#1A1A1A] dark:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>1. Bank IT Prep ({allExamPapers.length} Papers)</span>
            </button>
            <button
              onClick={() => onNavigate('non-it-questions')}
              className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Briefcase className="w-4 h-4 text-white" />
              <span>2. Bank Non-IT Prep (2010–2026 Question Bank)</span>
            </button>
            <button
              onClick={() => onNavigate('it-operator-questions')}
              className="px-4 py-2.5 bg-[#F2EFE9] dark:bg-[#16181D] hover:bg-white dark:hover:bg-white/10 text-[#1A1A1A] dark:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>IT Operator Archive (2010–2026)</span>
            </button>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="mt-10 pt-8 border-t border-[#E6E0D6] dark:border-[#2D3139] grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-[#E8E8E8] font-mono tabular-nums">
              {allExamPapers.length}
            </div>
            <div className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] mt-1">
              Complete 200-Mark Exam Papers
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              {totalQuestions}
            </div>
            <div className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] mt-1">
              Step-by-Step Solved Questions
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono tabular-nums">
              12 + 30
            </div>
            <div className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] mt-1">
              Private Bank + Govt/Ministry Papers
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono tabular-nums">
              3 Modes
            </div>
            <div className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] mt-1">
              Question Paper · Model Answers · Official Print
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: QUICK ACCESS CARDS TO MAJOR SECTIONS */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
              Portal Modules &amp; Practice Environments
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0]">
              Organized study workflows for written examination preparation, code verification, and self-assessment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: 42 Complete Exam Papers */}
          <div
            onClick={() => onNavigate('papers')}
            className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-6 hover:border-blue-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-5 shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium">
                <span>01. Full Examination Booklets</span>
                <span className="font-mono tabular-nums text-blue-600 dark:text-blue-400 font-semibold">{allExamPapers.length} Papers</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                Complete 200-Mark Exam Papers
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
                Browse complete recruitment papers across Private Banks, Bangladesh Bank, Combined Govt Banks, and BPSC Ministries with 3 dedicated viewing modes: Question Paper Only, Model Answers Only, and Official Hall Print View.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E6E0D6] dark:border-[#2D3139] flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Open Exam Papers Browser</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Category-Wise Question Bank */}
          <div
            onClick={() => onNavigate('questions')}
            className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-6 hover:border-blue-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-5 shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium">
                <span>02. Topic &amp; Sector Explorer</span>
                <span className="font-mono tabular-nums text-blue-600 dark:text-blue-400 font-semibold">{totalQuestions} Questions</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                Category-Wise Question Bank
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
                Filter all {totalQuestions} questions by exam sector (Private Bank AP/SO/Officer, Govt Bank, BPSC Ministry) and 7 core computer science syllabus topics with separate Question, Step-by-Step Answer, and Code/SQL sub-tabs.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E6E0D6] dark:border-[#2D3139] flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Explore Question Bank</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Bank Non-IT Prep Question Bank (2010-2026) */}
          <div
            onClick={() => onNavigate('non-it-questions')}
            className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-6 hover:border-amber-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-5 shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium">
                <span>03. Bank Non-IT Prep</span>
                <span className="font-mono tabular-nums text-amber-600 dark:text-amber-400 font-semibold">2010 – 2026</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                Bank Non-IT Question Bank (Govt &amp; Private)
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
                Dedicated Question Bank for Senior Officer (General), Officer (General), and Officer (Cash) with full 100-MCQ and Written solutions (2010–2026).
              </p>
            </div>
            <div className="pt-3 border-t border-[#E6E0D6] dark:border-[#2D3139] flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
              <span>Open Bank Non-IT Question Bank</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXAM SECTORS OVERVIEW */}
      <section className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-6 sm:p-8 space-y-6 shadow-xs transition-colors duration-200">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
              Browse by Recruitment Sector
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0]">
              Jump directly to Private Commercial Banks, State-Owned/Combined Banks, or Government Ministries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Private Commercial Banks */}
          <div className="rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 space-y-4 bg-[#F8F6F2] dark:bg-[#16181D] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                Private Commercial Banks (PCBs) · 12 Papers
              </div>
              <h3 className="text-base font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                Private Bank AP, SO (IT) &amp; Officer (IT)
              </h3>
              <p className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
                Dutch-Bangla Bank (DBBL), BRAC Bank, Islami Bank (IBBPLC), The City Bank, Eastern Bank (EBL), Prime Bank, Bank Asia, Pubali Bank, Mercantile Bank, UCB, and MTB.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-[#E6E0D6] dark:border-[#2D3139]">
              <button
                onClick={() => onNavigate('papers', { category: 'Private Bank Assistant Programmer' })}
                className="w-full text-left text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] hover:text-blue-600 dark:hover:text-blue-400 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Private Bank Assistant Programmer</span>
                <span className="font-mono tabular-nums text-[#4A4A4A] dark:text-[#A0A0A0]">4 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('papers', { category: 'Private Bank Senior Officer (IT)' })}
                className="w-full text-left text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] hover:text-blue-600 dark:hover:text-blue-400 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Private Bank Senior Officer / MTO (IT)</span>
                <span className="font-mono tabular-nums text-[#4A4A4A] dark:text-[#A0A0A0]">4 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('papers', { category: 'Private Bank Officer (IT)' })}
                className="w-full text-left text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] hover:text-blue-600 dark:hover:text-blue-400 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Private Bank Officer / PO (IT)</span>
                <span className="font-mono tabular-nums text-[#4A4A4A] dark:text-[#A0A0A0]">4 Papers →</span>
              </button>
            </div>
          </div>

          {/* Government & Combined Banks */}
          <div className="rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 space-y-4 bg-[#F8F6F2] dark:bg-[#16181D] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                Bangladesh Bank &amp; Combined Banks · 25 Papers
              </div>
              <h3 className="text-base font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                BB &amp; Bankers Selection Committee (BSCS)
              </h3>
              <p className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
                Includes 2026 Combined Bank Senior Officer (IT) &amp; Officer (IT) papers, Bangladesh Bank AD (IT) &amp; AP, Sonali, Janata, Agrani, Rupali, BDBL, and Krishi Bank.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-[#E6E0D6] dark:border-[#2D3139]">
              <button
                onClick={() => onNavigate('papers', { category: 'Bank Assistant Programmer' })}
                className="w-full text-left text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] hover:text-blue-600 dark:hover:text-blue-400 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Govt Bank Assistant Programmer</span>
                <span className="font-mono tabular-nums text-[#4A4A4A] dark:text-[#A0A0A0]">3 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('papers', { category: 'Senior Officer (IT)' })}
                className="w-full text-left text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] hover:text-blue-600 dark:hover:text-blue-400 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Combined Bank Senior Officer / AD (IT) (incl. 2026)</span>
                <span className="font-mono tabular-nums text-[#4A4A4A] dark:text-[#A0A0A0]">11 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('papers', { category: 'Officer (IT)' })}
                className="w-full text-left text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] hover:text-blue-600 dark:hover:text-blue-400 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Combined Bank Officer (IT) (incl. 2026)</span>
                <span className="font-mono tabular-nums text-[#4A4A4A] dark:text-[#A0A0A0]">11 Papers →</span>
              </button>
            </div>
          </div>

          {/* BPSC Ministries */}
          <div className="rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 space-y-4 bg-[#F8F6F2] dark:bg-[#16181D] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                BPSC Non-Cadre Ministries · 5 Papers
              </div>
              <h3 className="text-base font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                Ministry Assistant Programmer (Grade-9)
              </h3>
              <p className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
                Department of ICT (DoICT), Bangladesh Election Commission (NID Wing), National Board of Revenue (NBR), and Combined Ministries under BPSC.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-[#E6E0D6] dark:border-[#2D3139]">
              <button
                onClick={() => onNavigate('papers', { category: 'Ministry Assistant Programmer' })}
                className="w-full text-left text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] hover:text-amber-600 dark:hover:text-amber-400 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>BPSC Ministry Assistant Programmer</span>
                <span className="font-mono tabular-nums text-[#4A4A4A] dark:text-[#A0A0A0]">5 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('questions', { topic: 'E-Governance & ICT Laws' })}
                className="w-full text-left text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] hover:text-amber-600 dark:hover:text-amber-400 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>E-Governance, PKI &amp; Smart Bangladesh</span>
                <span className="font-mono tabular-nums text-[#4A4A4A] dark:text-[#A0A0A0]">Topic Bank →</span>
              </button>
              <button
                onClick={() => onNavigate('questions', { topic: 'Programming & Algorithms' })}
                className="w-full text-left text-xs font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] hover:text-amber-600 dark:hover:text-amber-400 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>C/C++, Data Structures &amp; Algorithms</span>
                <span className="font-mono tabular-nums text-[#4A4A4A] dark:text-[#A0A0A0]">Topic Bank →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED EXAM PAPERS */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
              Featured 200-Mark Exam Papers
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0]">
              Select any paper to view the complete question sheet, step-by-step model answers, and executable code.
            </p>
          </div>

          {/* Interactive Segmented Filter */}
          <div className="flex items-center gap-1 p-1 bg-[#F2EFE9] dark:bg-[#16181D] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl text-xs font-semibold overflow-x-auto">
            {[
              { id: 'all', label: '2026 & Curated Highlights' },
              { id: 'govt', label: 'Govt & Combined Banks (25)' },
              { id: 'private', label: 'Private Banks (12)' },
              { id: 'ministry', label: 'BPSC Ministries (5)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFeaturedGroup(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  featuredGroup === tab.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredPapers.map(paper => {
            const qCount = paper.sections.reduce((s, sec) => s + sec.questions.length, 0);
            return (
              <div
                key={paper.id}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 hover:border-blue-500/50 transition-colors flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-2.5">
                  {/* Quiet inline metadata (Zero-Pill Discipline) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{paper.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">Job ID: {paper.jobId}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{paper.circularYear}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] dark:text-[#E8E8E8] leading-snug">
                    {paper.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0] line-clamp-2 leading-relaxed">
                    {paper.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[#E6E0D6] dark:border-[#2D3139]">
                  <div className="flex items-center justify-between text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-mono tabular-nums">
                    <span>{paper.examBody}</span>
                    <span>{qCount} Qs · {paper.totalMarks} Marks</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onNavigate('papers', { paperId: paper.id })}
                      className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors text-center whitespace-nowrap cursor-pointer shadow-xs"
                    >
                      Open Exam Paper
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center pt-2">
          <button
            onClick={() => onNavigate('papers')}
            className="px-5 py-2.5 bg-white dark:bg-[#1E1E1E] hover:bg-[#F8F6F2] dark:hover:bg-[#252830] text-[#1A1A1A] dark:text-[#E8E8E8] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-xs min-h-[44px]"
          >
            <span>View All {allExamPapers.length} Complete Exam Papers</span>
            <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </button>
        </div>
      </section>

      {/* SECTION 4: 7 SYLLABUS TOPICS QUICK EXPLORER */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
            Explore by Computer Science &amp; Banking Syllabus Topic
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0]">
            Click any syllabus domain to open matching questions with separate Question, Answer, and Code sub-tabs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topicCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onNavigate('questions', { topic: cat.id })}
              className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 text-left hover:border-blue-500/50 transition-colors flex flex-col justify-between space-y-3 cursor-pointer shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {getTopicIcon(cat.id)}
                  <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">{cat.name}</span>
                </div>
                <p className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                <span>Browse Topic Questions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS & PREPARATION GUIDE (SEO & Crawlability) */}
      <section className="space-y-5 pt-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span>Bangladesh Bank &amp; Ministry Recruitment Guide</span>
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
            Frequently Asked Questions — Bank IT &amp; Non-IT Exam Preparation
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0]">
            Essential guidelines for candidates preparing for Bangladesh Bank IT, Combined Govt Banks, and BPSC Ministry examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 sm:p-6 space-y-2.5 shadow-xs">
            <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
              How to prepare for Bangladesh Bank IT job preparation and Combined Bank Officer (IT) exams?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
              Bank IT recruitment exams (Senior Officer IT, Officer IT, Assistant Programmer) require thorough mastery of Database Management &amp; SQL, Data Structures &amp; Algorithms, Computer Networks &amp; Subnetting (VLSM), Software Engineering, and Operating Systems. Practicing authentic past 200-mark written questions from 2010 to 2026 is the most effective approach.
            </p>
          </article>

          <article className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 sm:p-6 space-y-2.5 shadow-xs">
            <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
              Where can I find Combined Bank Officer IT questions and written solutions in Bangladesh?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
              This portal provides 42 full 200-mark solved exam papers covering Bangladesh Bank, Combined 8/10 Govt Banks, Private Commercial Banks (DBBL, BRAC, MTB), and BPSC Ministries. Each question includes verified step-by-step explanations, mathematics workings, and executable SQL/code snippets.
            </p>
          </article>

          <article className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 sm:p-6 space-y-2.5 shadow-xs">
            <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
              What is included in the Bank Non-IT exam question bank?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
              Our Bank Non-IT archive covers Senior Officer (General), Officer (General), and Officer (Cash) positions. It includes full Preliminary 100-MCQ sets (Bengali, English, Math, General Knowledge, Banking) and 12-question written sets (Focus Writing, Critical Math, and Comprehension).
            </p>
          </article>

          <article className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 sm:p-6 space-y-2.5 shadow-xs">
            <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
              Are Computer Operator and Data Entry Operator bank exams covered?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
              Yes, complete Preliminary MCQs and written test solutions for Computer Operator and Data Entry / Control Operator across Bangladesh Bank, Sonali Bank, Janata Bank, and Govt Ministries (2010–2026) are fully organized and searchable.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};
