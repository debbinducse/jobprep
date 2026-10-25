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
    <div className="space-y-6">
      {/* Paper Header Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2.5 max-w-3xl">
            {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 font-medium">
              <span className="text-emerald-700 font-bold">{paper.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono font-bold text-slate-900 tabular-nums">Job ID: {paper.jobId}</span>
              <span aria-hidden="true">·</span>
              <span>{paper.grade}</span>
              <span aria-hidden="true">·</span>
              <span>Testing Authority: {paper.examBody}</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {paper.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {paper.summary}
            </p>

            {/* Key Exam Specifications */}
            <div className="pt-1 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-600 font-mono tabular-nums">
              <span><strong>Exam Date:</strong> {paper.examDate}</span>
              <span aria-hidden="true">·</span>
              <span><strong>Duration:</strong> {paper.duration}</span>
              <span aria-hidden="true">·</span>
              <span><strong>Full Marks:</strong> {paper.totalMarks}</span>
              <span aria-hidden="true">·</span>
              <span><strong>Total Questions:</strong> {totalPaperQuestions}</span>
            </div>

            {/* Participating Institutions */}
            <div className="text-xs text-slate-500">
              <strong className="text-slate-700">Participating Institutions: </strong>
              {paper.participatingBanks.join(' · ')}
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-200 whitespace-nowrap shrink-0">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Read-Only</span>
            </div>
          </div>
        </div>

        {/* 3 VIEWING MODES SEGMENTED BAR */}
        <div className="pt-4 border-t border-slate-200 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-700">
              Select Paper Viewing Mode (3 Modes):
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              {activeTab === 'questions' && 'Mode 1: Clean question paper without solutions for independent practice'}
              {activeTab === 'answers' && 'Mode 2: Complete step-by-step verified model solutions'}
              {activeTab === 'official' && 'Mode 3: Official examination booklet hall layout'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('questions')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'questions'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>1. Question Paper Only</span>
            </button>

            <button
              onClick={() => setActiveTab('answers')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'answers'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>2. Model Answers Only</span>
            </button>

            <button
              onClick={() => setActiveTab('official')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'official'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
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
        <div className="space-y-6">
          <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Mode 1: Question Paper Only (Self-Assessment View)
              </h4>
              <p className="text-xs text-slate-600">
                All {totalPaperQuestions} questions ({paper.totalMarks} marks) are shown without solutions so you can practice independently.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('answers')}
              className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Switch to Model Answers →
            </button>
          </div>

          {paper.sections.map((section, sIdx) => (
            <div key={section.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm">
                    Section {String.fromCharCode(65 + sIdx)}: {section.name}
                  </h3>
                  {section.description && <p className="text-xs text-slate-300 mt-0.5">{section.description}</p>}
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 tabular-nums shrink-0">
                  {section.marks} Marks
                </span>
              </div>

              <div className="divide-y divide-slate-200">
                {section.questions.map((q) => (
                  <div key={q.id} className="p-5 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                        <span className="font-mono font-bold text-slate-900 tabular-nums">
                          Question {q.questionNo}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono font-semibold text-slate-800 tabular-nums">{q.marks} Marks</span>
                        <span aria-hidden="true">·</span>
                        <span className="capitalize">{q.type}</span>
                      </div>
                    </div>

                    <p className="text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                      {q.questionText}
                    </p>

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
                      <div className="mt-2">
                        <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3.5 py-1.5 rounded-t-lg">
                          Exam Given Code ({q.language || 'Code'})
                        </div>
                        <pre className="p-4 bg-slate-950 text-emerald-400 rounded-b-lg text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
                          {q.codeSnippet}
                        </pre>
                      </div>
                    )}

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {q.tags.map((t, idx) => (
                          <React.Fragment key={idx}>
                            {idx > 0 && <span aria-hidden="true">·</span>}
                            <span>#{t}</span>
                          </React.Fragment>
                        ))}
                      </div>
                      <button
                        onClick={() => setActiveTab('answers')}
                        className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
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
        <div className="space-y-6">
          <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-emerald-900">
                Mode 2: Complete Step-by-Step Model Answers
              </h4>
              <p className="text-xs text-slate-600">
                Verified theoretical derivations, database normalizations, network calculations, and bilingual translations.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('official')}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Open Official Hall Print View →
            </button>
          </div>

          {paper.sections.map((section, sIdx) => (
            <div key={section.id} className="space-y-4">
              <div className="bg-slate-900 text-white px-5 py-3.5 rounded-xl flex items-center justify-between">
                <h3 className="font-bold text-sm">
                  Section {String.fromCharCode(65 + sIdx)} Model Solutions: {section.name}
                </h3>
                <span className="text-xs font-mono font-bold text-emerald-400 tabular-nums">{section.marks} Marks</span>
              </div>

              {section.questions.map((q) => (
                <div key={q.id} className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                      <span className="font-mono font-bold text-slate-900 tabular-nums">
                        Solution for Question {q.questionNo}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono font-semibold text-slate-800 tabular-nums">{q.marks} Marks</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{q.type}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-lg border border-slate-200 whitespace-pre-line">
                    <strong className="text-slate-900 block mb-1">Question Prompt:</strong>
                    {q.questionText}
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4 text-emerald-600" />
                      <span>Model Answer & Explanation:</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line bg-white p-4 rounded-xl border border-slate-200">
                      {q.solution}
                    </div>
                  </div>

                  {q.codeSolution && (
                    <div className="space-y-1.5 pt-1">
                      <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3.5 py-1.5 rounded-t-lg">
                        Source Code / SQL Solution ({q.solutionLanguage?.toUpperCase() || 'CODE'})
                      </div>
                      <pre className="p-4 bg-slate-950 text-emerald-400 rounded-b-lg text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
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
        <div className="bg-white rounded-xl border border-slate-300 p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center border-b-2 border-slate-900 pb-5 mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {paper.examBody}
            </h2>
            <h3 className="text-base sm:text-lg font-semibold text-slate-800 mt-1">
              Recruitment Examination for the Post of: {paper.category} ({paper.grade})
            </h3>
            <div className="text-xs font-medium text-slate-700 mt-1 font-mono tabular-nums">
              Job ID: {paper.jobId} · Session: {paper.circularYear} · Date: {paper.examDate}
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-900 mt-4 pt-2 border-t border-slate-300 font-mono tabular-nums">
              <span>Time Allowed: {paper.duration}</span>
              <span>Full Marks: {paper.totalMarks}</span>
            </div>
          </div>

          <div className="space-y-8">
            {paper.sections.map((section, sIdx) => (
              <div key={section.id} className="space-y-4">
                <div className="border-b border-slate-800 pb-1.5 flex items-center justify-between">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    Section {String.fromCharCode(65 + sIdx)}: {section.name}
                  </h3>
                  <span className="font-bold text-xs text-slate-900 font-mono tabular-nums">[{section.marks} Marks]</span>
                </div>
                <div className="space-y-6 pt-2">
                  {section.questions.map((q) => (
                    <div key={q.id} className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                          <span className="font-bold mr-2 font-mono">Q{q.questionNo}.</span>
                          {q.questionText}
                        </p>
                        {q.codeSnippet && (
                          <pre className="p-3 bg-slate-900 text-emerald-400 rounded text-xs font-mono overflow-x-auto">
                            {q.codeSnippet}
                          </pre>
                        )}
                      </div>
                      <span className="font-bold text-xs text-slate-900 pl-2 font-mono tabular-nums shrink-0">
                        [{q.marks}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center border-t border-slate-300 mt-12 pt-4 text-xs text-slate-500">
            — End of Official Question Paper —
          </div>
        </div>
      )}
    </div>
  );
};
