import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ExamPaper, ExamQuestion } from '../types/exam';
import { NonItExamPaper, NonItQuestionItem } from '../data/bankNonItQuestions';

export interface PdfBlockItem {
  html: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeFilename(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

/**
 * Core engine that renders structured HTML blocks inside an isolated offscreen iframe
 * (avoiding Tailwind v4 oklch parsing issues in html2canvas and ensuring 100% accurate
 * Bangla Unicode, English, Math, and Code font rendering) and packs them onto A4 pages.
 */
async function renderBlocksToPdf(
  headerHtml: string,
  blocks: PdfBlockItem[],
  filename: string,
  footerLabel: string
): Promise<void> {
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.left = '-10000px';
  iframe.style.top = '0';
  iframe.style.width = '794px';
  iframe.style.height = '1123px';
  iframe.style.border = 'none';
  iframe.style.visibility = 'hidden';
  document.body.appendChild(iframe);

  try {
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) {
      throw new Error('Could not initialize PDF rendering context');
    }

    const blocksMarkup = blocks
      .map(
        (b, idx) =>
          `<div class="pdf-block" data-block-idx="${idx}" style="margin-bottom: 14px; background: #ffffff;">${b.html}</div>`
      )
      .join('\n');

    doc.open();
    doc.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Noto+Sans+Bengali:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      width: 730px;
      margin: 0 auto;
      padding: 16px;
      background-color: #ffffff;
      color: #111827;
      font-family: 'Plus Jakarta Sans', 'Noto Sans Bengali', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 13.5px;
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }
    .mono {
      font-family: 'IBM Plex Mono', monospace;
    }
    .header-box {
      border-bottom: 2px solid #111827;
      padding-bottom: 14px;
      margin-bottom: 16px;
      text-align: center;
      background: #ffffff;
    }
    .sec-banner {
      background-color: #f3f4f6;
      border: 1px solid #d1d5db;
      border-left: 4px solid #1d4ed8;
      padding: 8px 12px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 13px;
      color: #111827;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .q-card {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px 14px;
      background-color: #ffffff;
    }
    .q-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f3f4f6;
      padding-bottom: 6px;
      margin-bottom: 8px;
      font-size: 11.5px;
      color: #4b5563;
      font-weight: 600;
    }
    .q-text {
      font-size: 14px;
      font-weight: 600;
      color: #111827;
      white-space: pre-line;
      line-height: 1.65;
    }
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-top: 8px;
    }
    .option-item {
      padding: 6px 10px;
      background-color: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      font-size: 12.5px;
      color: #1f2937;
    }
    .code-box {
      margin-top: 8px;
      padding: 10px 12px;
      background-color: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11.5px;
      color: #0f172a;
      white-space: pre-wrap;
      word-break: break-word;
      line-height: 1.5;
    }
    .sol-box {
      margin-top: 10px;
      padding: 10px 12px;
      background-color: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-left: 3px solid #16a34a;
      border-radius: 6px;
      font-size: 13px;
      color: #111827;
      white-space: pre-line;
      line-height: 1.65;
    }
    .sol-title {
      font-size: 11.5px;
      font-weight: 700;
      color: #15803d;
      text-transform: uppercase;
      margin-bottom: 4px;
      display: block;
    }
  </style>
</head>
<body>
  <div id="pdf-root">
    <div class="pdf-block header-box">${headerHtml}</div>
    ${blocksMarkup}
  </div>
</body>
</html>`);
    doc.close();

    // Wait for fonts to load inside the iframe
    if (doc.fonts && doc.fonts.ready) {
      await Promise.race([
        doc.fonts.ready,
        new Promise(resolve => setTimeout(resolve, 1200))
      ]);
    } else {
      await new Promise(resolve => setTimeout(resolve, 400));
    }

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pageWidthMm = 210;
    const pageHeightMm = 297;
    const marginX = 12;
    const marginTop = 12;
    const marginBottom = 16;
    const usableWidthMm = pageWidthMm - marginX * 2; // 186mm
    const usableHeightMm = pageHeightMm - marginTop - marginBottom; // 269mm

    const blockNodes = Array.from(doc.querySelectorAll('.pdf-block')) as HTMLElement[];
    let currentY = marginTop;
    let pageCount = 1;

    for (let i = 0; i < blockNodes.length; i++) {
      const node = blockNodes[i];
      const canvas = await html2canvas(node, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      const imgWidthPx = canvas.width;
      const imgHeightPx = canvas.height;
      const blockHeightMm = (imgHeightPx * usableWidthMm) / imgWidthPx;

      // Case 1: Single block fits within a single page height
      if (blockHeightMm <= usableHeightMm) {
        if (currentY + blockHeightMm > pageHeightMm - marginBottom && currentY > marginTop + 5) {
          pdf.addPage();
          pageCount++;
          currentY = marginTop;
        }
        const imgData = canvas.toDataURL('image/jpeg', 0.92);
        pdf.addImage(imgData, 'JPEG', marginX, currentY, usableWidthMm, blockHeightMm);
        currentY += blockHeightMm + 3.5;
      } else {
        // Case 2: Oversized block (e.g. a very long solution) — slice cleanly across pages
        let remainingHeightPx = imgHeightPx;
        let sourceYPx = 0;

        while (remainingHeightPx > 0) {
          const availableMmOnPage = pageHeightMm - marginBottom - currentY;
          if (availableMmOnPage < 30 && currentY > marginTop + 5) {
            pdf.addPage();
            pageCount++;
            currentY = marginTop;
          }

          const currentAvailMm = pageHeightMm - marginBottom - currentY;
          const maxSlicePx = Math.floor((currentAvailMm * imgWidthPx) / usableWidthMm);
          const sliceHeightPx = Math.min(remainingHeightPx, Math.max(100, maxSlicePx));
          const sliceHeightMm = (sliceHeightPx * usableWidthMm) / imgWidthPx;

          const sliceCanvas = document.createElement('canvas');
          sliceCanvas.width = imgWidthPx;
          sliceCanvas.height = sliceHeightPx;
          const ctx = sliceCanvas.getContext('2d');
          if (ctx) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
            ctx.drawImage(
              canvas,
              0,
              sourceYPx,
              imgWidthPx,
              sliceHeightPx,
              0,
              0,
              imgWidthPx,
              sliceHeightPx
            );
            const sliceData = sliceCanvas.toDataURL('image/jpeg', 0.92);
            pdf.addImage(sliceData, 'JPEG', marginX, currentY, usableWidthMm, sliceHeightMm);
          }

          remainingHeightPx -= sliceHeightPx;
          sourceYPx += sliceHeightPx;
          currentY += sliceHeightMm + 3.5;

          if (remainingHeightPx > 0) {
            pdf.addPage();
            pageCount++;
            currentY = marginTop;
          }
        }
      }
    }

    // Add page footers across all pages
    const totalPages = pdf.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
      pdf.setPage(p);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      pdf.setTextColor(100, 116, 139);
      pdf.text(
        `${footerLabel} — Govt IT & Bank Prep Portal`,
        marginX,
        pageHeightMm - 7
      );
      pdf.text(
        `Page ${p} of ${totalPages}`,
        pageWidthMm - marginX,
        pageHeightMm - 7,
        { align: 'right' }
      );
    }

    pdf.save(`${sanitizeFilename(filename)}.pdf`);
  } finally {
    if (iframe.parentNode) {
      iframe.parentNode.removeChild(iframe);
    }
  }
}

/**
 * 1. Download Bank IT Exam Paper as PDF (Written Questions Only or Written + Solutions)
 */
export async function downloadItExamPaperPdf(
  paper: ExamPaper,
  options: {
    includeSolutions: boolean;
    writtenOnly?: boolean;
  }
): Promise<void> {
  const { includeSolutions, writtenOnly = true } = options;

  // Filter sections for written questions if writtenOnly is requested; fallback to all if paper is pure MCQ
  const hasWrittenQuestions = paper.sections.some(sec =>
    sec.questions.some(q => q.type !== 'mcq')
  );
  const filterToWritten = writtenOnly && hasWrittenQuestions;

  const activeSections = paper.sections
    .map(sec => ({
      ...sec,
      questions: filterToWritten
        ? sec.questions.filter(q => q.type !== 'mcq')
        : sec.questions
    }))
    .filter(sec => sec.questions.length > 0);

  const totalQs = activeSections.reduce((acc, s) => acc + s.questions.length, 0);
  const totalMarks = activeSections.reduce(
    (acc, s) => acc + s.questions.reduce((qSum, q) => qSum + q.marks, 0),
    0
  );

  const docTypeLabel = filterToWritten
    ? includeSolutions
      ? 'Written Examination Paper with Verified Model Solutions'
      : 'Official Written Examination Question Paper'
    : includeSolutions
    ? 'Complete Examination Paper with Verified Model Solutions'
    : 'Official Examination Question Paper';

  const headerHtml = `
    <div style="font-size: 11px; font-weight: 700; color: #1d4ed8; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
      Govt IT &amp; Bank Prep National Portal · ${escapeHtml(docTypeLabel)}
    </div>
    <div style="font-size: 18px; font-weight: 800; color: #111827; line-height: 1.3; margin-bottom: 4px;">
      ${escapeHtml(paper.title)}
    </div>
    <div style="font-size: 12px; color: #374151; font-weight: 600; margin-bottom: 6px;">
      Testing Authority: ${escapeHtml(paper.examBody)} · Position: ${escapeHtml(paper.category)} (${escapeHtml(paper.grade)})
    </div>
    <div style="font-size: 11.5px; color: #4b5563; margin-bottom: 8px;">
      <strong>Participating Institutions:</strong> ${escapeHtml(paper.participatingBanks.join(', '))}
    </div>
    <div class="mono" style="display: flex; justify-content: space-between; border-top: 1px solid #d1d5db; padding-top: 6px; font-size: 11.5px; font-weight: 700; color: #111827;">
      <span>Job ID: ${escapeHtml(paper.jobId)}</span>
      <span>Exam Date: ${escapeHtml(paper.examDate)}</span>
      <span>Questions: ${totalQs}</span>
      <span>Marks: ${totalMarks}</span>
    </div>
  `;

  const blocks: PdfBlockItem[] = [];

  activeSections.forEach((sec, sIdx) => {
    blocks.push({
      html: `
        <div class="sec-banner">
          <span>Section ${String.fromCharCode(65 + sIdx)}: ${escapeHtml(sec.name)}</span>
          <span class="mono">${sec.questions.reduce((a, b) => a + b.marks, 0)} Marks</span>
        </div>
      `
    });

    sec.questions.forEach(q => {
      const optionsHtml =
        q.options && q.options.length > 0
          ? `<div class="options-grid">
              ${q.options
                .map(opt => `<div class="option-item">${escapeHtml(opt)}</div>`)
                .join('')}
            </div>`
          : '';

      const snippetHtml = q.codeSnippet
        ? `<div class="code-box"><strong>Given Code (${escapeHtml(q.language || 'Code')}):</strong>\n${escapeHtml(q.codeSnippet)}</div>`
        : '';

      const solutionHtml = includeSolutions
        ? `<div class="sol-box">
            <span class="sol-title">✓ Verified Model Answer &amp; Explanation:</span>
            ${escapeHtml(q.solution)}
          </div>
          ${
            q.codeSolution
              ? `<div class="code-box"><strong>Source Code / SQL Implementation (${escapeHtml(
                  q.solutionLanguage || 'Code'
                )}):</strong>\n${escapeHtml(q.codeSolution)}</div>`
              : ''
          }`
        : '';

      blocks.push({
        html: `
          <div class="q-card">
            <div class="q-meta">
              <span class="mono" style="color: #111827; font-weight: 700;">Question ${escapeHtml(q.questionNo)}</span>
              <span>${escapeHtml(q.topicCategory || 'Core IT')} · <strong class="mono" style="color: #1d4ed8;">[${q.marks} Marks]</strong></span>
            </div>
            <div class="q-text">${escapeHtml(q.questionText)}</div>
            ${optionsHtml}
            ${snippetHtml}
            ${solutionHtml}
          </div>
        `
      });
    });
  });

  const suffix = includeSolutions ? 'written-with-solutions' : 'written-questions';
  await renderBlocksToPdf(
    headerHtml,
    blocks,
    `${paper.jobId}-${paper.category}-${suffix}`,
    `${paper.jobId} · ${paper.category}`
  );
}

/**
 * 2. Download Filtered Bank IT Written Questions from Question Bank Explorer
 */
export async function downloadItFilteredQuestionsPdf(
  items: { question: ExamQuestion; paper: ExamPaper; derivedTopic: string }[],
  filterSummary: string,
  includeSolutions: boolean
): Promise<void> {
  const totalMarks = items.reduce((acc, item) => acc + item.question.marks, 0);

  const headerHtml = `
    <div style="font-size: 11px; font-weight: 700; color: #1d4ed8; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
      Govt IT &amp; Bank Prep National Portal · Custom Written Question Bank PDF
    </div>
    <div style="font-size: 18px; font-weight: 800; color: #111827; line-height: 1.3; margin-bottom: 4px;">
      Bank &amp; Ministry IT Written Question Bank (${includeSolutions ? 'Questions + Model Answers' : 'Questions Only'})
    </div>
    <div style="font-size: 12px; color: #374151; font-weight: 600; margin-bottom: 8px;">
      Filter Scope: ${escapeHtml(filterSummary)}
    </div>
    <div class="mono" style="display: flex; justify-content: space-between; border-top: 1px solid #d1d5db; padding-top: 6px; font-size: 11.5px; font-weight: 700; color: #111827;">
      <span>Archive: 2010–2026</span>
      <span>Total Questions: ${items.length}</span>
      <span>Total Marks: ${totalMarks}</span>
    </div>
  `;

  const blocks: PdfBlockItem[] = items.map((item, idx) => {
    const q = item.question;
    const p = item.paper;

    const snippetHtml = q.codeSnippet
      ? `<div class="code-box"><strong>Given Code:</strong>\n${escapeHtml(q.codeSnippet)}</div>`
      : '';

    const solutionHtml = includeSolutions
      ? `<div class="sol-box">
          <span class="sol-title">✓ Verified Model Answer:</span>
          ${escapeHtml(q.solution)}
        </div>
        ${
          q.codeSolution
            ? `<div class="code-box"><strong>Code / SQL Solution:</strong>\n${escapeHtml(
                q.codeSolution
              )}</div>`
            : ''
        }`
      : '';

    return {
      html: `
        <div class="q-card">
          <div class="q-meta">
            <span class="mono" style="color: #111827; font-weight: 700;">#${idx + 1} (Q${escapeHtml(q.questionNo)}) · ${escapeHtml(p.category)} (${escapeHtml(p.circularYear)})</span>
            <span class="mono">Job ID: ${escapeHtml(p.jobId)} · <strong style="color: #1d4ed8;">[${q.marks} Marks]</strong></span>
          </div>
          <div class="q-text">${escapeHtml(q.questionText)}</div>
          ${snippetHtml}
          ${solutionHtml}
        </div>
      `
    };
  });

  const suffix = includeSolutions ? 'written-solutions' : 'written-questions';
  await renderBlocksToPdf(
    headerHtml,
    blocks,
    `bank-it-${filterSummary}-${suffix}`,
    `Bank IT Written Archive · ${filterSummary}`
  );
}

/**
 * 3. Download Bank Non-IT (or IT Operator) Written Exam Paper as PDF
 */
export async function downloadNonItPaperPdf(
  paper: NonItExamPaper,
  options: {
    includeSolutions: boolean;
    writtenOnly?: boolean;
  }
): Promise<void> {
  const { includeSolutions, writtenOnly = true } = options;

  const writtenQuestions = paper.questions.filter(q => q.questionType === 'Written');
  const targetQuestions =
    writtenOnly && writtenQuestions.length > 0 ? writtenQuestions : paper.questions;

  const totalMarks = targetQuestions.reduce((acc, q) => acc + q.marks, 0);

  const docTypeLabel =
    writtenOnly && writtenQuestions.length > 0
      ? includeSolutions
        ? 'Part B: Written Examination Paper with Verified Solutions'
        : 'Part B: Official Written Examination Question Paper'
      : includeSolutions
      ? 'Complete Examination Paper with Verified Solutions'
      : 'Official Examination Question Paper';

  const headerHtml = `
    <div style="font-size: 11px; font-weight: 700; color: #047857; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
      Govt IT &amp; Bank Prep National Portal · ${escapeHtml(docTypeLabel)}
    </div>
    <div style="font-size: 18px; font-weight: 800; color: #111827; line-height: 1.3; margin-bottom: 4px;">
      ${escapeHtml(paper.title)}
    </div>
    <div style="font-size: 12px; color: #374151; font-weight: 600; margin-bottom: 6px;">
      Category: ${escapeHtml(paper.category)} · Sector: ${escapeHtml(paper.orgType)} · Testing Body: ${escapeHtml(paper.examTaker)}
    </div>
    <div style="font-size: 11.5px; color: #4b5563; margin-bottom: 8px;">
      <strong>Participating Banks / Institutions:</strong> ${escapeHtml(paper.organizationName)}
    </div>
    <div class="mono" style="display: flex; justify-content: space-between; border-top: 1px solid #d1d5db; padding-top: 6px; font-size: 11.5px; font-weight: 700; color: #111827;">
      <span>Paper ID: ${escapeHtml(paper.questionPaperCode)}</span>
      <span>Date: ${escapeHtml(paper.examDate)}</span>
      <span>Written Questions: ${targetQuestions.length}</span>
      <span>Total Marks: ${totalMarks}</span>
    </div>
  `;

  const blocks: PdfBlockItem[] = targetQuestions.map(q => {
    const optionsHtml =
      q.options && q.options.length > 0
        ? `<div class="options-grid">
            ${q.options
              .map(opt => `<div class="option-item">${escapeHtml(opt)}</div>`)
              .join('')}
          </div>`
        : '';

    const solutionHtml = includeSolutions
      ? `<div class="sol-box">
          <span class="sol-title">✓ Verified Step-by-Step Model Solution:</span>
          ${q.correctAnswer ? `<strong>Correct Answer: ${escapeHtml(q.correctAnswer)}</strong>\n\n` : ''}${escapeHtml(q.solution)}
        </div>`
      : '';

    return {
      html: `
        <div class="q-card">
          <div class="q-meta">
            <span class="mono" style="color: #111827; font-weight: 700;">Question ${escapeHtml(q.questionNo)} (${escapeHtml(q.questionType)})</span>
            <span>${escapeHtml(q.subject)} · <strong class="mono" style="color: #047857;">[${q.marks} Marks]</strong></span>
          </div>
          <div class="q-text">${escapeHtml(q.questionText)}</div>
          ${optionsHtml}
          ${solutionHtml}
        </div>
      `
    };
  });

  const suffix = includeSolutions ? 'written-with-solutions' : 'written-questions';
  await renderBlocksToPdf(
    headerHtml,
    blocks,
    `${paper.questionPaperCode}-${paper.category}-${suffix}`,
    `${paper.questionPaperCode} · ${paper.category} (${paper.year})`
  );
}

/**
 * 4. Download Bulk Filtered Bank Non-IT Written Questions across multiple papers
 */
export async function downloadNonItBulkWrittenPdf(
  groups: { paper: NonItExamPaper; writtenList: NonItQuestionItem[] }[],
  filterTitle: string,
  includeSolutions: boolean
): Promise<void> {
  const validGroups = groups.filter(g => g.writtenList.length > 0);
  const totalQs = validGroups.reduce((acc, g) => acc + g.writtenList.length, 0);
  const totalMarks = validGroups.reduce(
    (acc, g) => acc + g.writtenList.reduce((s, q) => s + q.marks, 0),
    0
  );

  const headerHtml = `
    <div style="font-size: 11px; font-weight: 700; color: #047857; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
      Govt IT &amp; Bank Prep National Portal · Bank Non-IT Written Exam Archive
    </div>
    <div style="font-size: 18px; font-weight: 800; color: #111827; line-height: 1.3; margin-bottom: 4px;">
      ${escapeHtml(filterTitle)} — Written Question Bank (${includeSolutions ? 'With Solutions' : 'Questions Only'})
    </div>
    <div class="mono" style="display: flex; justify-content: space-between; border-top: 1px solid #d1d5db; padding-top: 6px; margin-top: 8px; font-size: 11.5px; font-weight: 700; color: #111827;">
      <span>Exam Papers Included: ${validGroups.length}</span>
      <span>Written Questions: ${totalQs}</span>
      <span>Total Marks: ${totalMarks}</span>
    </div>
  `;

  const blocks: PdfBlockItem[] = [];

  validGroups.forEach(({ paper, writtenList }) => {
    blocks.push({
      html: `
        <div class="sec-banner">
          <span>${escapeHtml(paper.title)} (${escapeHtml(paper.questionPaperCode)})</span>
          <span class="mono">${escapeHtml(String(paper.year))} · ${writtenList.length} Written Qs</span>
        </div>
      `
    });

    writtenList.forEach(q => {
      const solutionHtml = includeSolutions
        ? `<div class="sol-box">
            <span class="sol-title">✓ Verified Step-by-Step Model Solution:</span>
            ${escapeHtml(q.solution)}
          </div>`
        : '';

      blocks.push({
        html: `
          <div class="q-card">
            <div class="q-meta">
              <span class="mono" style="color: #111827; font-weight: 700;">${escapeHtml(paper.questionPaperCode)} · Q-${escapeHtml(q.questionNo)}</span>
              <span>${escapeHtml(q.subject)} · <strong class="mono" style="color: #047857;">[${q.marks} Marks]</strong></span>
            </div>
            <div class="q-text">${escapeHtml(q.questionText)}</div>
            ${solutionHtml}
          </div>
        `
      });
    });
  });

  const suffix = includeSolutions ? 'written-with-solutions' : 'written-questions';
  await renderBlocksToPdf(
    headerHtml,
    blocks,
    `bank-non-it-${filterTitle}-${suffix}`,
    `Bank Non-IT Written Archive · ${filterTitle}`
  );
}
