import React, { useState } from 'react';
import { ExamPaper } from '../types/exam';
import { 
  Lock,
  FileCheck2,
  FileQuestion,
  HelpCircle
} from 'lucide-react';

interface ExamPaperViewProps {
  paper: ExamPaper;
}

export const ExamPaperView: React.FC<ExamPaperViewProps> = ({ 
  paper
}) => {
  // 3 Viewing Modes: 'questions' | 'answers' | 'official'
  const [activeTab, setActiveTab] = useState<'questions' | 'answers' | 'official'>('questions');

  const totalPaperQuestions = paper.sections.reduce((acc, s) => acc + s.questions.length, 0);

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

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="px-3 py-1.5 bg-[#F2EFE9] dark:bg-[#16181D] text-[#4A4A4A] dark:text-[#A0A0A0] rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-[#E6E0D6] dark:border-[#2D3139] whitespace-nowrap shrink-0">
              <Lock className="w-3.5 h-3.5 text-[#666666] dark:text-[#888888]" />
              <span>Read-Only Study</span>
            </div>
          </div>
        </div>

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
            <button
              onClick={() => setActiveTab('answers')}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Switch to Model Answers →
            </button>
          </div>

          {paper.sections.map((section, sIdx) => (
            <div key={section.id} className="bg-white dark:bg-[#1E1E1E] rounded-2xl border border-[#E6E0D6] dark:border-[#2D3139] overflow-hidden shadow-xs">
              <div className="bg-[#F2EFE9] dark:bg-[#14161B] border-b border-[#E6E0D6] dark:border-[#2D3139] px-5 py-3.5 flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm text-[#1A1A1A] dark:text-[#E8E8E8]">
                    Section {String.fromCharCode(65 + sIdx)}: {section.name}
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {q.options.map((opt, oIdx) => (
                          <div
                            key={oIdx}
                            className="p-3 rounded-xl bg-[#F8F6F2] dark:bg-[#16181D] border border-[#E6E0D6] dark:border-[#2D3139] text-sm text-[#1A1A1A] dark:text-[#E8E8E8] leading-relaxed"
                          >
                            {opt}
                          </div>
                        ))}
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
            <button
              onClick={() => setActiveTab('official')}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Open Official Hall Print View →
            </button>
          </div>

          {paper.sections.map((section, sIdx) => (
            <div key={section.id} className="space-y-5">
              <div className="bg-[#F2EFE9] dark:bg-[#14161B] border border-[#E6E0D6] dark:border-[#2D3139] px-5 py-3.5 rounded-xl flex items-center justify-between">
                <h3 className="font-bold text-sm text-[#1A1A1A] dark:text-[#E8E8E8]">
                  Section {String.fromCharCode(65 + sIdx)} Model Solutions: {section.name}
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
