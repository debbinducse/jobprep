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
    // Curated mix featuring the 2026 Combined Bank SO (IT) & Officer (IT) papers first
    return [
      allExamPapers.find(p => p.id === 'so-it-combined-2026'),
      allExamPapers.find(p => p.id === 'officer-it-combined-2026'),
      allExamPapers.find(p => p.id === 'so-it-25104'),
      allExamPapers.find(p => p.id === 'officer-it-25105'),
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
    <div className="space-y-12 pb-8">
      {/* HERO SECTION */}
      <section className="relative rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium">
            <span className="text-emerald-400 font-semibold">2010–2026 National Archive</span>
            <span aria-hidden="true">·</span>
            <span>Private Commercial Banks</span>
            <span aria-hidden="true">·</span>
            <span>Bangladesh Bank & Combined Banks</span>
            <span aria-hidden="true">·</span>
            <span>BPSC Ministries</span>
          </div>

          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Complete Solved IT Recruitment Exam Papers & Question Bank
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Study {allExamPapers.length} authentic 200-mark written examination papers ({totalQuestions} solved questions) for Assistant Programmer, Senior Officer (IT), and Officer (IT) across DBBL, BRAC, Islami Bank, City Bank, EBL, Bangladesh Bank, Combined Govt Banks, and BPSC Ministries.
          </p>

          {/* Hero Search Bar */}
          <form onSubmit={handleHeroSearchSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl pt-1">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                placeholder="Search Job ID (10229, DBBL-AP), SQL queries, VLSM, OAuth 2.0, Dijkstra..."
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Search Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('papers')}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>1. Bank IT Prep ({allExamPapers.length} Papers)</span>
            </button>
            <button
              onClick={() => onNavigate('non-it-questions')}
              className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-white" />
              <span>2. Bank Non-IT Prep (2010–2026 Question Bank)</span>
            </button>
            <button
              onClick={() => onNavigate('it-operator-questions')}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>IT Operator Archive (2010–2026)</span>
            </button>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="mt-10 pt-8 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              {allExamPapers.length}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Complete 200-Mark Exam Papers
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              {totalQuestions}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Step-by-Step Solved Questions
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono tabular-nums">
              12 + 30
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Private Bank + Govt/Ministry Papers
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              3 Modes
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Question Paper · Model Answers · Official Print
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: QUICK ACCESS CARDS TO MAJOR SECTIONS */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Portal Modules & Practice Environments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Organized study workflows for written examination preparation, code verification, and self-assessment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: 40 Complete Exam Papers */}
          <div
            onClick={() => onNavigate('papers')}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 transition-colors cursor-pointer flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>01. Full Examination Booklets</span>
                <span className="font-mono tabular-nums text-slate-700 font-semibold">{allExamPapers.length} Papers</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Complete 200-Mark Exam Papers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Browse complete recruitment papers across Private Banks, Bangladesh Bank, Combined Govt Banks, and BPSC Ministries with 3 dedicated viewing modes: Question Paper Only, Model Answers Only, and Official Hall Print View.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>Open Exam Papers Browser</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Category-Wise Question Bank */}
          <div
            onClick={() => onNavigate('questions')}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 transition-colors cursor-pointer flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>02. Topic & Sector Explorer</span>
                <span className="font-mono tabular-nums text-slate-700 font-semibold">{totalQuestions} Questions</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Category-Wise Question Bank
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filter all {totalQuestions} questions by exam sector (Private Bank AP/SO/Officer, Govt Bank, BPSC Ministry) and 7 core computer science syllabus topics. Every question card features separate Question Only, Step-by-Step Answer, and Code/SQL sub-tabs.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-700">
              <span>Explore Question Bank</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Bank Non-IT Prep Question Bank (2010-2026) */}
          <div
            onClick={() => onNavigate('non-it-questions')}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 transition-colors cursor-pointer flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>03. Bank Non-IT Prep</span>
                <span className="font-mono tabular-nums text-amber-700 font-semibold">2010 – 2026</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Bank Non-IT Question Bank (Govt & Private)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Separate dedicated Question Bank for Senior Officer (General), Officer (General), and Officer (Cash) with full 100-MCQ and Written solutions (2010–2026).
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-700">
              <span>Open Bank Non-IT Question Bank</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXAM SECTORS OVERVIEW */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Browse by Recruitment Sector
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Jump directly to Private Commercial Banks, State-Owned/Combined Banks, or Government Ministries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Private Commercial Banks */}
          <div className="rounded-xl border border-slate-200 p-5 space-y-4 bg-slate-50/60 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-emerald-700">
                Private Commercial Banks (PCBs) · 12 Papers
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Private Bank AP, SO (IT) & Officer (IT)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dutch-Bangla Bank (DBBL), BRAC Bank, Islami Bank (IBBPLC), The City Bank, Eastern Bank (EBL), Prime Bank, Bank Asia, Pubali Bank, Mercantile Bank, UCB, and MTB.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
              <button
                onClick={() => onNavigate('papers', { category: 'Private Bank Assistant Programmer' })}
                className="w-full text-left text-xs font-semibold text-slate-700 hover:text-emerald-700 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Private Bank Assistant Programmer</span>
                <span className="font-mono tabular-nums text-slate-500">4 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('papers', { category: 'Private Bank Senior Officer (IT)' })}
                className="w-full text-left text-xs font-semibold text-slate-700 hover:text-emerald-700 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Private Bank Senior Officer / MTO (IT)</span>
                <span className="font-mono tabular-nums text-slate-500">4 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('papers', { category: 'Private Bank Officer (IT)' })}
                className="w-full text-left text-xs font-semibold text-slate-700 hover:text-emerald-700 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Private Bank Officer / PO (IT)</span>
                <span className="font-mono tabular-nums text-slate-500">4 Papers →</span>
              </button>
            </div>
          </div>

          {/* Government & Combined Banks */}
          <div className="rounded-xl border border-slate-200 p-5 space-y-4 bg-slate-50/60 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-indigo-700">
                Bangladesh Bank & Combined Banks · 25 Papers
              </div>
              <h3 className="text-base font-bold text-slate-900">
                BB & Bankers Selection Committee (BSCS)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Includes the latest 2026 Combined Bank Senior Officer (IT) & Officer (IT) papers, Bangladesh Bank AD (IT) & AP, Sonali, Janata, Agrani, Rupali, BDBL, and Krishi Bank.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
              <button
                onClick={() => onNavigate('papers', { category: 'Bank Assistant Programmer' })}
                className="w-full text-left text-xs font-semibold text-slate-700 hover:text-indigo-700 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Govt Bank Assistant Programmer</span>
                <span className="font-mono tabular-nums text-slate-500">3 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('papers', { category: 'Senior Officer (IT)' })}
                className="w-full text-left text-xs font-semibold text-slate-700 hover:text-indigo-700 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Combined Bank Senior Officer / AD (IT) (incl. 2026)</span>
                <span className="font-mono tabular-nums text-slate-500">11 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('papers', { category: 'Officer (IT)' })}
                className="w-full text-left text-xs font-semibold text-slate-700 hover:text-indigo-700 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>Combined Bank Officer (IT) (incl. 2026)</span>
                <span className="font-mono tabular-nums text-slate-500">11 Papers →</span>
              </button>
            </div>
          </div>

          {/* BPSC Ministries */}
          <div className="rounded-xl border border-slate-200 p-5 space-y-4 bg-slate-50/60 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-amber-700">
                BPSC Non-Cadre Ministries · 5 Papers
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Ministry Assistant Programmer (Grade-9)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Department of ICT (DoICT), Bangladesh Election Commission (NID Wing), National Board of Revenue (NBR), and Combined Ministries under BPSC.
              </p>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
              <button
                onClick={() => onNavigate('papers', { category: 'Ministry Assistant Programmer' })}
                className="w-full text-left text-xs font-semibold text-slate-700 hover:text-amber-700 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>BPSC Ministry Assistant Programmer</span>
                <span className="font-mono tabular-nums text-slate-500">5 Papers →</span>
              </button>
              <button
                onClick={() => onNavigate('questions', { topic: 'E-Governance & ICT Laws' })}
                className="w-full text-left text-xs font-semibold text-slate-700 hover:text-amber-700 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>E-Governance, PKI & Smart Bangladesh</span>
                <span className="font-mono tabular-nums text-slate-500">Topic Bank →</span>
              </button>
              <button
                onClick={() => onNavigate('questions', { topic: 'Programming & Algorithms' })}
                className="w-full text-left text-xs font-semibold text-slate-700 hover:text-amber-700 py-1 flex items-center justify-between cursor-pointer"
              >
                <span>C/C++, Data Structures & Algorithms</span>
                <span className="font-mono tabular-nums text-slate-500">Topic Bank →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED EXAM PAPERS */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Featured 200-Mark Exam Papers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select any paper to view the complete question sheet, step-by-step model answers, and executable code.
            </p>
          </div>

          {/* Interactive Segmented Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl text-xs font-semibold overflow-x-auto">
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
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
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
                className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  {/* Quiet inline metadata (Zero-Pill Discipline) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <span className="text-slate-800 font-semibold">{paper.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">Job ID: {paper.jobId}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{paper.circularYear}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {paper.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono tabular-nums">
                    <span>{paper.examBody}</span>
                    <span>{qCount} Questions · {paper.totalMarks} Marks</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onNavigate('papers', { paperId: paper.id })}
                      className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors text-center whitespace-nowrap cursor-pointer"
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
            className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>View All {allExamPapers.length} Complete Exam Papers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 4: 7 SYLLABUS TOPICS QUICK EXPLORER */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Explore by Computer Science & Banking Syllabus Topic
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Click any syllabus domain to open matching questions with separate Question, Answer, and Code sub-tabs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topicCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onNavigate('questions', { topic: cat.id })}
              className="bg-white rounded-xl border border-slate-200 p-4 text-left hover:border-slate-300 transition-colors flex flex-col justify-between space-y-3 cursor-pointer"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  {getTopicIcon(cat.id)}
                  <span className="text-xs font-bold text-slate-900">{cat.name}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="text-xs font-semibold text-indigo-600 flex items-center gap-1">
                <span>Browse Topic Questions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
