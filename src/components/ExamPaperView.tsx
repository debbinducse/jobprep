import React, { useState } from 'react';
import { ExamPaper } from '../types/exam';
import { 
  FileCheck2,
  FileQuestion,
  HelpCircle,
  Download,
  Loader2
} from 'lucide-react';
import { downloadItExamPaperPdf } from '../utils/pdfDownload';

interface ExamPaperViewProps {
  paper: ExamPaper;
}

export const ExamPaperView: React.FC<ExamPaperViewProps> = ({ 
  paper
}: ExamPaperViewProps) => {
  // 3 Viewing Modes: 'questions' | 'answers' | 'official'
  const [activeTab, setActiveTab] = useState<'questions' | 'answers' | 'official'>('questions');
  const [selectedSectionId, setSelectedSectionId] = useState<string>('all');
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: number }>({});
  const [downloadingPdf, setDownloadingPdf] = useState<'questions' | 'solutions' | null>(null);
  const [showOriginalScans, setShowOriginalScans] = useState<boolean>(false);

  const totalPaperQuestions = paper.sections.reduce((acc, s) => acc + s.questions.length, 0);
  const writtenQuestionCount = paper.sections.reduce(
    (acc, s) => acc + s.questions.filter(q => q.type !== 'mcq').length,
    0
  );
  const displayedSections = selectedSectionId === 'all'
    ? paper.sections
    : paper.sections.filter(s => s.id === selectedSectionId);

  const handleDownloadPdf = async (includeSolutions: boolean) => {
    if (downloadingPdf) return;
    setDownloadingPdf(includeSolutions ? 'solutions' : 'questions');
    try {
      await downloadItExamPaperPdf(paper, { includeSolutions, writtenOnly: true });
    } finally {
      setDownloadingPdf(null);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Paper Header Card */}
      <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 sm:p-7 space-y-5 shadow-xs transition-colors duration-200">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2.5 max-w-3xl">
            {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-medium">
              <span className="text-blue-600 dark:text-blue-400 font-bold">{paper.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono font-bold text-[#1A1A1A] dark:text-[#E8E8E8] tabular-nums">Job ID: {paper.jobId}</span>
              <span aria-hidden="true">·</span>
              <span>{paper.grade}</span>
              <span aria-hidden="true">·</span>
              <span>Testing Body: {paper.examBody}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#E8E8E8] leading-snug">
              {paper.title}
            </h2>

            <p className="text-sm sm:text-[15.5px] text-[#4A4A4A] dark:text-[#A0A0A0] leading-relaxed">
              {paper.summary}
            </p>

            {/* Key Exam Specifications */}
            <div className="pt-1 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-[#4A4A4A] dark:text-[#A0A0A0] font-mono tabular-nums">
              <span><strong className="text-[#1A1A1A] dark:text-[#E8E8E8]">Date:</strong> {paper.examDate}</span>
              <span aria-hidden="true">·</span>
              <span><strong className="text-[#1A1A1A] dark:text-[#E8E8E8]">Duration:</strong> {paper.duration}</span>
              <span aria-hidden="true">·</span>
              <span><strong className="text-[#1A1A1A] dark:text-[#E8E8E8]">Total:</strong> {paper.totalMarks} Marks</span>
              <span aria-hidden="true">·</span>
              <span><strong className="text-[#1A1A1A] dark:text-[#E8E8E8]">Questions:</strong> {totalPaperQuestions}</span>
            </div>

            {/* Participating Institutions */}
            <div className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
              <strong className="text-[#1A1A1A] dark:text-[#E8E8E8]">Institutions: </strong>
              {paper.participatingBanks.join(' · ')}
            </div>
          </div>

          {/* Right Action Controls: Written PDF Download */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {paper.originalPaperImages && paper.originalPaperImages.length > 0 && (
              <button
                type="button"
                onClick={() => setShowOriginalScans(prev => !prev)}
                className="px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs min-h-[38px]"
              >
                <FileQuestion className="w-3.5 h-3.5" />
                <span>
                  {showOriginalScans
                    ? 'Hide Scanned Question Paper'
                    : `View Original Scanned Paper (${paper.originalPaperImages.length} Pages)`}
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={() => handleDownloadPdf(false)}
              disabled={downloadingPdf !== null}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs min-h-[38px]"
              title="Download Written Question Paper PDF (Questions Only)"
            >
              {downloadingPdf === 'questions' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {downloadingPdf === 'questions'
                  ? 'Generating PDF...'
                  : writtenQuestionCount > 0
                  ? 'Download Written Questions PDF'
                  : 'Download Question Paper PDF'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleDownloadPdf(true)}
              disabled={downloadingPdf !== null}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs min-h-[38px]"
              title="Download Written Questions + Verified Model Solutions PDF"
            >
              {downloadingPdf === 'solutions' ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {downloadingPdf === 'solutions'
                  ? 'Generating Solutions PDF...'
                  : writtenQuestionCount > 0
                  ? 'Download Written + Solutions PDF'
                  : 'Download Paper + Solutions PDF'}
              </span>
            </button>
          </div>
        </div>

        {/* Original Scanned Paper Viewer (when available and toggled) */}
        {paper.originalPaperImages && paper.originalPaperImages.length > 0 && showOriginalScans && (
          <div className="pt-4 border-t border-[#E6E0D6] dark:border-[#2D3139] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                Original Scanned Question Paper Sheets (Bangladesh Bank / BSCS — Job ID: {paper.jobId})
              </h3>
              <span className="text-xs font-mono text-[#4A4A4A] dark:text-[#A0A0A0]">
                {paper.originalPaperImages.length} Pages
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paper.originalPaperImages.map((imgSrc, idx) => (
                <div
                  key={imgSrc}
                  className="rounded-xl overflow-hidden border border-[#E6E0D6] dark:border-[#2D3139] bg-[#F8F6F2] dark:bg-[#16181D] flex flex-col"
                >
                  <div className="px-3 py-2 border-b border-[#E6E0D6] dark:border-[#2D3139] text-xs font-mono font-bold text-[#1A1A1A] dark:text-[#E8E8E8] flex items-center justify-between">
                    <span>Original Question Paper — Page {idx + 1}</span>
                    <span className="text-blue-600 dark:text-blue-400">Job ID-{paper.jobId}</span>
                  </div>
                  <img
                    src={imgSrc}
                    alt={`${paper.title} - Original Question Paper Page ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3 VIEWING MODES SEGMENTED BAR */}
        <div className="pt-4 border-t border-[#E6E0D6] dark:border-[#2D3139] space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
              Select Paper Viewing Mode:
            </span>
            <span className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] hidden sm:inline">
              {activeTab === 'questions' && 'Mode 1: Clean questions for self-testing'}
              {activeTab === 'answers' && 'Mode 2: Step-by-step verified model solutions'}
              {activeTab === 'official' && 'Mode 3: Examination hall print layout'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 bg-[#F2EFE9] dark:bg-[#16181D] rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] overflow-x-auto">
            <button
              onClick={() => setActiveTab('questions')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                activeTab === 'questions'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>1. Question Paper Only</span>
            </button>

            <button
              onClick={() => setActiveTab('answers')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                activeTab === 'answers'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>2. Model Answers Only</span>
            </button>

            <button
              onClick={() => setActiveTab('official')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                activeTab === 'official'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-[#4A4A4A] dark:text-[#A0A0A0] hover:text-[#1A1A1A] dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
              }`}
            >
              <FileQuestion className="w-4 h-4" />
              <span>3. Official Hall Print View</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: QUESTION PAPER ONLY                              */}
      {/* ======================================================== */}
      {activeTab === 'questions' && (
        <div className="space-y-6 sm:space-y-8">
          <div className="p-4 bg-white dark:bg-[#1E1E1E] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div>
              <h4 className="text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
                Mode 1: Question Paper Only (Self-Assessment View)
              </h4>
              <p className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] mt-0.5">
                All {totalPaperQuestions} questions ({paper.totalMarks} marks) are presented cleanly without solutions.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleDownloadPdf(false)}
                disabled={downloadingPdf !== null}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Questions PDF</span>
              </button>
              <button
                onClick={() => setActiveTab('answers')}
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Switch to Model Answers →
              </button>
            </div>
          </div>

          {paper.sections.length > 1 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <button
                onClick={() => setSelectedSectionId('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  selectedSectionId === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-[#1E1E1E] text-[#4A4A4A] dark:text-[#A0A0A0] border border-[#E6E0D6] dark:border-[#2D3139]'
                }`}
              >
                All Sections ({totalPaperQuestions} Questions)
              </button>
              {paper.sections.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSectionId(s.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    selectedSectionId === s.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-[#1E1E1E] text-[#4A4A4A] dark:text-[#A0A0A0] border border-[#E6E0D6] dark:border-[#2D3139]'
                  }`}
                >
                  Part {String.fromCharCode(65 + idx)} ({s.questions.length} Qs)
                </button>
              ))}
            </div>
          )}

          {displayedSections.map((section, sIdx) => (
            <div key={section.id} className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] overflow-hidden shadow-xs">
              <div className="bg-[#F2EFE9] dark:bg-[#14161B] border-b border-[#E6E0D6] dark:border-[#2D3139] px-5 py-3.5 flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm text-[#1A1A1A] dark:text-[#E8E8E8]">
                    {section.name}
                  </h3>
                  {section.description && <p className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] mt-0.5">{section.description}</p>}
                </div>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums shrink-0">
                  {section.marks} Marks
                </span>
              </div>

              <div className="divide-y divide-[#E6E0D6] dark:divide-[#2D3139]">
                {section.questions.map((q) => (
                  <div key={q.id} className="p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
                        <span className="font-mono font-bold text-[#1A1A1A] dark:text-[#E8E8E8] tabular-nums">
                          Question {q.questionNo}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">{q.marks} Marks</span>
                        <span aria-hidden="true">·</span>
                        <span className="capitalize">{q.type}</span>
                      </div>
                    </div>

                    <p className="text-[16.5px] sm:text-[17px] font-medium text-[#1A1A1A] dark:text-[#E8E8E8] leading-[1.7] whitespace-pre-line">
                      {q.questionText}
                    </p>

                    {q.options && q.options.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {q.options.map((opt, oIdx) => {
                            const hasAnswered = userAnswers[q.id] !== undefined;
                            const isSelected = userAnswers[q.id] === oIdx;
                            const isCorrect = q.correctOption !== undefined ? oIdx === q.correctOption : false;

                            let optStyle = 'bg-[#F8F6F2] dark:bg-[#16181D] border-[#E6E0D6] dark:border-[#2D3139] text-[#1A1A1A] dark:text-[#E8E8E8] hover:border-blue-500/60';
                            if (hasAnswered) {
                              if (isCorrect) {
                                optStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
                              } else if (isSelected) {
                                optStyle = 'bg-red-50 dark:bg-red-950/40 border-red-500 text-red-900 dark:text-red-200';
                              } else {
                                optStyle = 'bg-[#F8F6F2]/60 dark:bg-[#16181D]/60 border-[#E6E0D6]/50 dark:border-[#2D3139]/50 text-[#888888] dark:text-[#666666]';
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
                                className={`p-3 rounded-xl border text-left text-sm leading-relaxed transition-all cursor-pointer flex items-center justify-between ${optStyle}`}
                              >
                                <span>{opt}</span>
                                {hasAnswered && isCorrect && (
                                  <span className="text-[11px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded ml-2 shrink-0">
                                    Correct
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {q.codeSnippet && (
                      <div className="mt-3">
                        <div className="text-xs font-mono text-[#4A4A4A] dark:text-[#A0A0A0] bg-[#F2EFE9] dark:bg-[#16181D] px-3.5 py-1.5 rounded-t-lg border border-b-0 border-[#E6E0D6] dark:border-[#2D3139]">
                          Exam Given Code ({q.language || 'Code'})
                        </div>
                        <pre className="p-4 bg-[#F1F3F5] dark:bg-[#14171D] text-[#0F172A] dark:text-[#34D399] rounded-b-lg text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed border border-[#E6E0D6] dark:border-[#2D3139]">
                          {q.codeSnippet}
                        </pre>
                      </div>
                    )}

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
                      <div className="flex flex-wrap items-center gap-1.5 font-mono">
                        {q.tags.map((t, idx) => (
                          <React.Fragment key={idx}>
                            {idx > 0 && <span aria-hidden="true">·</span>}
                            <span>#{t}</span>
                          </React.Fragment>
                        ))}
                      </div>
                      <button
                        onClick={() => setActiveTab('answers')}
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        View Answer →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: MODEL ANSWERS ONLY                               */}
      {/* ======================================================== */}
      {activeTab === 'answers' && (
        <div className="space-y-6 sm:space-y-8">
          <div className="p-4 bg-white dark:bg-[#1E1E1E] border border-[#E6E0D6] dark:border-[#2D3139] rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div>
              <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400">
                Mode 2: Complete Step-by-Step Model Answers
              </h4>
              <p className="text-xs text-[#4A4A4A] dark:text-[#A0A0A0] mt-0.5">
                Verified theoretical derivations, database normalizations, network calculations, and code implementations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleDownloadPdf(true)}
                disabled={downloadingPdf !== null}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Solutions PDF</span>
              </button>
              <button
                onClick={() => setActiveTab('official')}
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Open Official Hall Print View →
              </button>
            </div>
          </div>

          {paper.sections.length > 1 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <button
                onClick={() => setSelectedSectionId('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  selectedSectionId === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-[#1E1E1E] text-[#4A4A4A] dark:text-[#A0A0A0] border border-[#E6E0D6] dark:border-[#2D3139]'
                }`}
              >
                All Sections ({totalPaperQuestions} Solutions)
              </button>
              {paper.sections.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSectionId(s.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    selectedSectionId === s.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-[#1E1E1E] text-[#4A4A4A] dark:text-[#A0A0A0] border border-[#E6E0D6] dark:border-[#2D3139]'
                  }`}
                >
                  Part {String.fromCharCode(65 + idx)} ({s.questions.length} Qs)
                </button>
              ))}
            </div>
          )}

          {displayedSections.map((section, sIdx) => (
            <div key={section.id} className="space-y-5">
              <div className="bg-[#F2EFE9] dark:bg-[#14161B] border border-[#E6E0D6] dark:border-[#2D3139] px-5 py-3.5 rounded-xl flex items-center justify-between">
                <h3 className="font-bold text-sm text-[#1A1A1A] dark:text-[#E8E8E8]">
                  Model Solutions: {section.name}
                </h3>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">{section.marks} Marks</span>
              </div>

              {section.questions.map((q) => (
                <div key={q.id} className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-5 sm:p-7 space-y-5 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#E6E0D6] dark:border-[#2D3139] pb-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
                      <span className="font-mono font-bold text-[#1A1A1A] dark:text-[#E8E8E8] tabular-nums">
                        Solution for Question {q.questionNo}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 tabular-nums">{q.marks} Marks</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{q.type}</span>
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <div className="text-xs sm:text-sm text-[#1A1A1A] dark:text-[#E8E8E8] bg-[#F8F6F2] dark:bg-[#15171C] p-4 rounded-xl border border-[#E6E0D6] dark:border-[#2D3139] whitespace-pre-line leading-relaxed">
                    <strong className="text-blue-600 dark:text-blue-400 block mb-1 font-semibold">Question Prompt:</strong>
                    {q.questionText}
                  </div>

                  {/* Answer Body - Reading-Friendly 16.5px & 1.7 line height */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>Model Answer &amp; Explanation:</span>
                    </div>
                    <div className="text-[16.5px] sm:text-[17px] text-[#1A1A1A] dark:text-[#E8E8E8] leading-[1.75] whitespace-pre-line bg-white dark:bg-[#1E1E1E] p-4 sm:p-5 rounded-xl border border-[#E6E0D6] dark:border-[#2D3139]">
                      {q.solution}
                    </div>
                  </div>

                  {q.codeSolution && (
                    <div className="space-y-1.5 pt-1">
                      <div className="text-xs font-mono text-[#4A4A4A] dark:text-[#A0A0A0] bg-[#F2EFE9] dark:bg-[#16181D] px-3.5 py-1.5 rounded-t-lg border border-b-0 border-[#E6E0D6] dark:border-[#2D3139]">
                        Source Code / SQL Solution ({q.solutionLanguage?.toUpperCase() || 'CODE'})
                      </div>
                      <pre className="p-4 bg-[#F1F3F5] dark:bg-[#14171D] text-[#0F172A] dark:text-[#34D399] rounded-b-lg text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed border border-[#E6E0D6] dark:border-[#2D3139]">
                        {q.codeSolution}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 3: OFFICIAL HALL PRINT VIEW                         */}
      {/* ======================================================== */}
      {activeTab === 'official' && (
        <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] p-6 sm:p-10 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#E6E0D6] dark:border-[#2D3139]">
            <span className="text-xs font-bold text-[#4A4A4A] dark:text-[#A0A0A0]">
              Official A4 Examination Print Format
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => handleDownloadPdf(false)}
                disabled={downloadingPdf !== null}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Questions PDF</span>
              </button>
              <button
                type="button"
                onClick={() => handleDownloadPdf(true)}
                disabled={downloadingPdf !== null}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download With Solutions PDF</span>
              </button>
            </div>
          </div>
          <div className="text-center border-b-2 border-[#1A1A1A] dark:border-[#E8E8E8] pb-5 mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#E8E8E8]">
              {paper.examBody}
            </h2>
            <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] dark:text-[#E8E8E8] mt-1">
              Recruitment Examination: {paper.category} ({paper.grade})
            </h3>
            <div className="text-xs font-medium text-[#4A4A4A] dark:text-[#A0A0A0] mt-1 font-mono tabular-nums">
              Job ID: {paper.jobId} · Session: {paper.circularYear} · Date: {paper.examDate}
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-[#1A1A1A] dark:text-[#E8E8E8] mt-4 pt-2 border-t border-[#E6E0D6] dark:border-[#2D3139] font-mono tabular-nums">
              <span>Time Allowed: {paper.duration}</span>
              <span>Full Marks: {paper.totalMarks}</span>
            </div>
          </div>

          <div className="space-y-8">
            {paper.sections.map((section, sIdx) => (
              <div key={section.id} className="space-y-4">
                <div className="border-b border-[#1A1A1A] dark:border-[#E8E8E8] pb-1.5 flex items-center justify-between">
                  <h3 className="font-bold text-sm sm:text-base text-[#1A1A1A] dark:text-[#E8E8E8]">
                    Section {String.fromCharCode(65 + sIdx)}: {section.name}
                  </h3>
                  <span className="font-bold text-xs text-blue-600 dark:text-blue-400 font-mono tabular-nums">[{section.marks} Marks]</span>
                </div>
                <div className="space-y-6 pt-2">
                  {section.questions.map((q) => (
                    <div key={q.id} className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <p className="text-[16px] sm:text-[16.5px] font-medium text-[#1A1A1A] dark:text-[#E8E8E8] leading-[1.7] whitespace-pre-line">
                          <span className="font-bold mr-2 font-mono text-blue-600 dark:text-blue-400">Q{q.questionNo}.</span>
                          {q.questionText}
                        </p>
                        {q.codeSnippet && (
                          <pre className="p-3 bg-[#F1F3F5] dark:bg-[#14171D] text-[#0F172A] dark:text-[#34D399] rounded text-xs font-mono overflow-x-auto border border-[#E6E0D6] dark:border-[#2D3139]">
                            {q.codeSnippet}
                          </pre>
                        )}
                      </div>
                      <span className="font-bold text-xs text-blue-600 dark:text-blue-400 pl-2 font-mono tabular-nums shrink-0">
                        [{q.marks}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center border-t border-[#E6E0D6] dark:border-[#2D3139] mt-12 pt-4 text-xs text-[#4A4A4A] dark:text-[#A0A0A0]">
            — End of Official Question Paper —
          </div>
        </div>
      )}
    </div>
  );
};
