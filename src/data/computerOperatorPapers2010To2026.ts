import type { NonItExamPaper, NonItQuestionItem, NonItSubject } from './bankNonItQuestions';

interface CompOpMcqSeed {
  subject: NonItSubject;
  questionText: string;
  options: string[];
  correctAnswer: string;
  solution: string;
}

/**
 * ============================================================================
 * 1. BANGLA LANGUAGE, GRAMMAR, LITERATURE & OFFICIAL TERMINOLOGY POOL
 *    (20 Questions per Computer Operator Paper: MCQ-001 to MCQ-020)
 * ============================================================================
 */
const compOpBanglaMasterPool: CompOpMcqSeed[] = [
  {
    subject: 'Bangla Language & Literature',
    questionText: 'কোনটি শুদ্ধ বানান?',
    options: ['A) মুমূর্ষু', 'B) মূমুর্ষু', 'C) মুমুর্ষু', 'D) মুমূর্ষূ'],
    correctAnswer: 'A) মুমূর্ষু',
    solution: `শুদ্ধ বানান ‘মুমূর্ষু’ (ম-এ হ্রস্ব-উ, ম-এ দীর্ঘ-ঊ, ষ-রেফ-এ হ্রস্ব-উ)। সঠিক উত্তর: A) মুমূর্ষু।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘অগ্নিবীণা’ কাব্যগ্রন্থের প্রথম কবিতা কোনটি?',
    options: ['A) বিদ্রোহী', 'B) প্রলয়োল্লাস', 'C) ধূমকেতু', 'D) কামাল পাশা'],
    correctAnswer: 'B) প্রলয়োল্লাস',
    solution: `কাজী নজরুল ইসলামের ‘অগ্নিবীণা’ (১৯২২) কাব্যগ্রন্থের প্রথম কবিতা ‘প্রলয়োল্লাস’ এবং দ্বিতীয় কবিতা ‘বিদ্রোহী’। সঠিক উত্তর: B) প্রলয়োল্লাস।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'বাংলা বর্ণমালায় অর্ধমাত্রার বর্ণ কয়টি এবং মাত্রাহীন বর্ণ কয়টি?',
    options: [
      'A) অর্ধমাত্রা ৮টি এবং মাত্রাহীন ১০টি',
      'B) অর্ধমাত্রা ১০টি এবং মাত্রাহীন ৮টি',
      'C) অর্ধমাত্রা ৭টি এবং মাত্রাহীন ১১টি',
      'D) অর্ধমাত্রা ৯টি এবং মাত্রাহীন ১০টি'
    ],
    correctAnswer: 'A) অর্ধমাত্রা ৮টি এবং মাত্রাহীন ১০টি',
    solution: `বাংলা বর্ণমালায় মোট ৫০টি বর্ণের মধ্যে পূর্ণমাত্রার বর্ণ ৩২টি, অর্ধমাত্রার বর্ণ ৮টি (ঋ, খ, গ, ণ, থ, ধ, প, শ) এবং মাত্রাহীন বর্ণ ১০টি। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘ক্ষ’ এবং ‘জ্ঞ’ যুক্তবর্ণ দুটির সঠিক বিশ্লেষণ কোনটি?',
    options: [
      'A) ক্ষ = ক্ + ষ এবং জ্ঞ = জ্ + ঞ',
      'B) ক্ষ = ক্ + খ এবং জ্ঞ = গ্ + ঞ',
      'C) ক্ষ = খ্ + ষ এবং জ্ঞ = ঞ + জ',
      'D) ক্ষ = ক্ + ষ এবং জ্ঞ = জ্ + য'
    ],
    correctAnswer: 'A) ক্ষ = ক্ + ষ এবং জ্ঞ = জ্ + ঞ',
    solution: `‘ক্ষ’ = ক্ + ষ (বিজয় কিবোর্ডে J + G + Shift + N) এবং ‘জ্ঞ’ = জ্ + ঞ (বিজয় কিবোর্ডে U + G + I)। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘হ্ম’ (যেমন: ব্রাহ্মণ, ব্রহ্মপুত্র) এবং ‘ষ্ণ’ (যেমন: উষ্ণ, তৃষ্ণা) যুক্তবর্ণ দুটি কীভাবে গঠিত?',
    options: [
      'A) হ্ম = হ্ + ম এবং ষ্ণ = ষ + ণ (ষ + ্ + ণ)',
      'B) হ্ম = ম্ + হ এবং ষ্ণ = ষ + ন',
      'C) হ্ম = ক্ষ্ + ম এবং ষ্ণ = শ + ণ',
      'D) হ্ম = হ্ + ণ এবং ষ্ণ = স + ণ'
    ],
    correctAnswer: 'A) হ্ম = হ্ + ম এবং ষ্ণ = ষ + ণ (ষ + ্ + ণ)',
    solution: `‘হ্ম’ গঠিত হয় হ্ + ম দ্বারা (বিজয় কিবোর্ডে I + G + M) এবং ‘ষ্ণ’ গঠিত হয় ষ + ্ + ণ দ্বারা। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘উচ্ছ্বাস’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?',
    options: ['A) উৎ + শ্বাস', 'B) উচ + শ্বাস', 'C) উচ্ছ + বাস', 'D) উদ + ছাস'],
    correctAnswer: 'A) উৎ + শ্বাস',
    solution: `ব্যঞ্জনসন্ধির নিয়মানুসারে ত্/দ্-এর পর তালব্য ‘শ’ থাকলে ত্/দ্ স্থানে ‘চ’ এবং ‘শ’ স্থানে ‘ছ’ হয়: উৎ + শ্বাস = উচ্ছ্বাস। সঠিক উত্তর: A) উৎ + শ্বাস।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘গবেষণা’ এবং ‘নাভিক’ শব্দ দুটির সঠিক সন্ধি বিচ্ছেদ কোনটি?',
    options: [
      'A) গো + এষণা এবং নৌ + ইক',
      'B) গব + এষণা এবং নভ + ইক',
      'C) গো + ষনা এবং নাভি + ক',
      'D) গবা + এষণা এবং না + ভিক'
    ],
    correctAnswer: 'A) গো + এষণা এবং নৌ + ইক',
    solution: `স্বরসন্ধির নিয়মানুসারে: গো + এষণা = গবেষণা এবং নৌ + ইক = নাবিক। সঠিক উত্তর: A) গো + এষণা এবং নৌ + ইক।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'বাংলা একাডেমি প্রমিত বাংলা বানান রীতি অনুযায়ী নিচের কোন বানানগুচ্ছটি সম্পূর্ণ শুদ্ধ?',
    options: [
      'A) স্বায়ত্তশাসন, শ্রদ্ধাঞ্জলি, সহযোগিতা',
      'B) স্বায়ত্বশাসন, শ্রদ্ধাঞ্জলী, সহযোগীতা',
      'C) সায়ত্তশাসন, শ্রদ্ধাঞ্জলি, সহযোগীতা',
      'D) স্বায়ত্তশাসন, শ্রদ্ধাঞ্জলী, সহযোগিতা'
    ],
    correctAnswer: 'A) স্বায়ত্তশাসন, শ্রদ্ধাঞ্জলি, সহযোগিতা',
    solution: `শুদ্ধ বানান: স্বায়ত্তশাসন (ত-এ ত ফলা), শ্রদ্ধাঞ্জলি (‘অঞ্জলি’ শব্দের শেষে হ্রস্ব-ই কার), এবং সহযোগিতা (‘তা’ প্রত্যয় যুক্ত হলে ঈ-কার হ্রস্ব-ই কার হয়)। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'সরকারি দাপ্তরিক কাজে ব্যবহৃত ‘Memorandum’ ও ‘Circular’-এর প্রমিত বাংলা পরিভাষা কী?',
    options: [
      'A) স্মারকলিপি/স্মারক ও পরিপত্র',
      'B) প্রজ্ঞাপন ও অধ্যাদেশ',
      'C) কার্যবিবরণী ও ইশতেহার',
      'D) প্রতিবেদন ও চুক্তিপত্র'
    ],
    correctAnswer: 'A) স্মারকলিপি/স্মারক ও পরিপত্র',
    solution: `দাপ্তরিক পরিভাষায় Memorandum = স্মারক/স্মারকলিপি, Circular = পরিপত্র, এবং Notification = প্রজ্ঞাপন। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘অনুকম্পা’ ও ‘অধ্যক্ষ’ শব্দের ইংরেজি দাপ্তরিক পরিভাষা ও সন্ধি বিশ্লেষণের ক্ষেত্রে ‘অধ্যক্ষ’-এর সন্ধি বিচ্ছেদ কোনটি?',
    options: ['A) অধি + অক্ষ', 'B) অধ্য + অক্ষ', 'C) অধঃ + অক্ষ', 'D) অ + দক্ষ'],
    correctAnswer: 'A) অধি + অক্ষ',
    solution: `ই-কারের পর ই-ভিন্ন অন্য স্বরধ্বনি থাকলে ই-কার স্থানে ‘য’ (্য) ফলা হয়: অধি + অক্ষ = অধ্যক্ষ। সঠিক উত্তর: A) অধি + অক্ষ।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘তিলে তৈল হয়’ এবং ‘তিলে তেল আছে’ — বাক্য দুটিতে ‘তিলে’ যথাক্রমে কোন কারক?',
    options: [
      'A) প্রথমটি অপাদান কারক এবং দ্বিতীয়টি অধিকরণ কারক',
      'B) প্রথমটি অধিকরণ কারক এবং দ্বিতীয়টি অপাদান কারক',
      'C) উভয়ই করণ কারক',
      'D) প্রথমটি কর্ম কারক এবং দ্বিতীয়টি অপাদান কারক'
    ],
    correctAnswer: 'A) প্রথমটি অপাদান কারক এবং দ্বিতীয়টি অধিকরণ কারক',
    solution: `তিল থেকে তেল উৎপন্ন হওয়া বোঝালে অপাদান কারক (‘তিলে তৈল হয়’) এবং তিলের ভেতর তেলের অবস্থান বোঝালে অধিকরণ কারক (‘তিলে তেল আছে’)। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘চাঁদের হাট’ এবং ‘অরণ্যে রোদন’ বাগধারা দুটির সঠিক অর্থ কী?',
    options: [
      'A) প্রিয়জন সমাগম এবং নিষ্ফল আবেদন',
      'B) পূর্ণিমার বাজার এবং বনে ভ্রমণ',
      'C) অত্যন্ত দুর্লভ বস্তু এবং গোপন কান্না',
      'D) ক্ষণস্থায়ী আনন্দ এবং বিপদের আশঙ্কা'
    ],
    correctAnswer: 'A) প্রিয়জন সমাগম এবং নিষ্ফল আবেদন',
    solution: `‘চাঁদের হাট’ অর্থ প্রিয়জন বা আত্মীয়-স্বজনের আনন্দময় সমাগম; ‘অরণ্যে রোদন’ অর্থ নিষ্ফল আবেদন বা বৃথা চেষ্টা। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘যা সহজে অতিক্রম করা যায় না’ — এক কথায় প্রকাশ কী হবে?',
    options: ['A) দুরতিক্রম্য', 'B) অনতিক্রম্য', 'C) দুর্গম', 'D) অপ্রতিরোধ্য'],
    correctAnswer: 'A) দুরতিক্রম্য',
    solution: `যা সহজে অতিক্রম করা যায় না = দুরতিক্রম্য; আর যা কখনোই অতিক্রম করা যায় না = অনতিক্রম্য। সঠিক উত্তর: A) দুরতিক্রম্য।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘বীণাপাণি’ (বীণা পাণিতে যার) এবং ‘উপকূল’ (কূলের সমীপে) যথাক্রমে কোন সমাসের উদাহরণ?',
    options: [
      'A) বহুব্রীহি সমাস এবং অব্যয়ীভাব সমাস',
      'B) কর্মধারয় সমাস এবং তৎপুরুষ সমাস',
      'C) দ্বিগু সমাস এবং দ্বন্দ্ব সমাস',
      'D) তৎপুরুষ সমাস এবং বহুব্রীহি সমাস'
    ],
    correctAnswer: 'A) বহুব্রীহি সমাস এবং অব্যয়ীভাব সমাস',
    solution: `‘বীণাপাণি’ (সরস্বতী দেবীকে নির্দেশ করে) = ব্যধিকরণ বহুব্রীহি সমাস; ‘উপকূল’ (কূলের সমীপে, ‘উপ’ অব্যয় যোগে) = অব্যয়ীভাব সমাস। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘সংশপ্তক’ উপন্যাস এবং ‘কবর’ নাটকের রচয়িতা যথাক্রমে কে কে?',
    options: [
      'A) শহীদুল্লাহ কায়সার এবং মুনীর চৌধুরী',
      'B) জহির রায়হান এবং সৈয়দ শামসুল হক',
      'C) শওকত ওসমান এবং সেলিম আল দীন',
      'D) সৈয়দ ওয়ালীউল্লাহ এবং নূরুল মোমেন'
    ],
    correctAnswer: 'A) শহীদুল্লাহ কায়সার এবং মুনীর চৌধুরী',
    solution: `‘সংশপ্তক’ ও ‘সারেং বউ’ উপন্যাসের রচয়িতা শহীদুল্লাহ কায়সার এবং ভাষা আন্দোলনভিত্তিক নাটক ‘কবর’ (১৯৫৩)-এর রচয়িতা মুনীর চৌধুরী। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'মুনীর চৌধুরী উদ্ভাবিত বাংলা টাইপরাইটার কিবোর্ড লেআউটটির নাম কী এবং কত সালে এটি উদ্ভাবিত হয়?',
    options: [
      'A) মুনীর অপটিমা (Munir Optima), ১৯৬৫ সালে',
      'B) বিজয় কিবোর্ড, ১৯৮৮ সালে',
      'C) অভ্র ফনেটিক, ২০০৩ সালে',
      'D) জাতীয় কিবোর্ড, ১৯৯৫ সালে'
    ],
    correctAnswer: 'A) মুনীর অপটিমা (Munir Optima), ১৯৬৫ সালে',
    solution: `শহীদ বুদ্ধিজীবী ও ভাষাবিজ্ঞানী মুনীর চৌধুরী ১৯৬৫ সালে পূর্ব জার্মানির অপটিমা কোম্পানির সহযোগিতায় প্রথম বিজ্ঞানসম্মত বাংলা টাইপরাইটার কিবোর্ড ‘মুনীর অপটিমা’ উদ্ভাবন করেন। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'রবীন্দ্রনাথ ঠাকুরের ‘গীতাঞ্জলি’ কাব্যগ্রন্থটি কত সালে প্রকাশিত হয় এবং কত সালে তিনি নোবেল পুরস্কার লাভ করেন?',
    options: [
      'A) ১৯১০ সালে প্রকাশ এবং ১৯১৩ সালে নোবেল লাভ',
      'B) ১৯০৮ সালে প্রকাশ এবং ১৯১২ সালে নোবেল লাভ',
      'C) ১৯১২ সালে প্রকাশ এবং ১৯১৪ সালে নোবেল লাভ',
      'D) ১৯০৫ সালে প্রকাশ এবং ১৯১৩ সালে নোবেল লাভ'
    ],
    correctAnswer: 'A) ১৯১০ সালে প্রকাশ এবং ১৯১৩ সালে নোবেল লাভ',
    solution: `বাংলা ‘গীতাঞ্জলি’ ১৯১০ সালে প্রকাশিত হয়, এর ইংরেজি অনুবাদ ‘Song Offerings’ ১৯১২ সালে লন্ডনে প্রকাশিত হয় এবং ১৯১৩ সালে রবীন্দ্রনাথ সাহিত্যে নোবেল পুরস্কার পান। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘অসমাপ্ত আত্মজীবনী’ এবং ‘কারাগারের রোজনামচা’ গ্রন্থ দুটির রচয়িতা কে?',
    options: [
      'A) বঙ্গবন্ধু শেখ মুজিবুর রহমান',
      'B) তাজউদ্দীন আহমদ',
      'C) শেরে বাংলা এ কে ফজলুল হক',
      'D) মওলানা আবদুল হামিদ খান ভাসানী'
    ],
    correctAnswer: 'A) বঙ্গবন্ধু শেখ মুজিবুর রহমান',
    solution: `বঙ্গবন্ধু শেখ মুজিবুর রহমানের আত্মজীবনীমূলক গ্রন্থসমূহ হলো ‘অসমাপ্ত আত্মজীবনী’ (২০১২), ‘কারাগারের রোজনামচা’ (২০১৭) এবং ‘আমার দেখা নয়াচীন’ (২০২০)। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘হরতাল’ এবং ‘আনারস’ শব্দ দুটি কোন কোন ভাষা থেকে বাংলা ভাষায় এসেছে?',
    options: [
      'A) যথাক্রমে গুজরাটি ও পর্তুগিজ',
      'B) যথাক্রমে ফারসি ও আরবি',
      'C) যথাক্রমে তুর্কি ও ফরাসি',
      'D) যথাক্রমে জাপানি ও ওলন্দাজ'
    ],
    correctAnswer: 'A) যথাক্রমে গুজরাটি ও পর্তুগিজ',
    solution: `‘হরতাল’ শব্দটি গুজরাটি ভাষা থেকে এবং ‘আনারস’, ‘আলপিন’, ‘আলমারি’, ‘চাবি’, ‘পাউরুটি’ শব্দগুলো পর্তুগিজ ভাষা থেকে বাংলায় এসেছে। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘সৌম্য’ এবং ‘অনুগ্রহ’ শব্দ দুটির সঠিক বিপরীতার্থক শব্দ কোনটি?',
    options: [
      'A) উগ্র এবং নিগ্রহ',
      'B) শান্ত এবং গ্রহণ',
      'C) সুন্দর এবং বিগ্রহ',
      'D) কোমল এবং বর্জন'
    ],
    correctAnswer: 'A) উগ্র এবং নিগ্রহ',
    solution: `‘সৌম্য’ শব্দের বিপরীত ‘উগ্র’ এবং ‘অনুগ্রহ’ শব্দের বিপরীত ‘নিগ্রহ’। সঠিক উত্তর: A) উগ্র এবং নিগ্রহ।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'মুক্তিযুদ্ধভিত্তিক উপন্যাস ‘রাইফেল রোটি আওরাত’ এবং ‘আগুনের পরশমণি’-এর রচয়িতা যথাক্রমে কে কে?',
    options: [
      'A) আনোয়ার পাশা এবং হুমায়ূন আহমেদ',
      'B) শওকত ওসমান এবং জহির রায়হান',
      'C) সৈয়দ শামসুল হক এবং সেলিনা হোসেন',
      'D) রশীদ করিম এবং আল মাহমুদ'
    ],
    correctAnswer: 'A) আনোয়ার পাশা এবং হুমায়ূন আহমেদ',
    solution: `মুক্তিযুদ্ধ চলাকালে রচিত প্রথম উপন্যাস ‘রাইফেল রোটি আওরাত’-এর লেখক শহীদ বুদ্ধিজীবী আনোয়ার পাশা এবং ‘আগুনের পরশমণি’-এর লেখক হুমায়ূন আহমেদ। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'বাংলা গদ্যে সর্বপ্রথম বিরামচিহ্ন বা যতিচিহ্নের সার্থক প্রয়োগ করেন কে এবং কোন গ্রন্থে?',
    options: [
      'A) ঈশ্বরচন্দ্র বিদ্যাসাগর — ‘বেতাল পঞ্চবিংশতি’ (১৮৪৭)',
      'B) বঙ্কিমচন্দ্র চট্টোপাধ্যায় — ‘দুর্গেশনন্দিনী’ (১৮৬৫)',
      'C) প্রমথ চৌধুরী — ‘বীরবলের হালখাতা’',
      'D) মীর মশাররফ হোসেন — ‘বিষাদ সিন্ধু’'
    ],
    correctAnswer: 'A) ঈশ্বরচন্দ্র বিদ্যাসাগর — ‘বেতাল পঞ্চবিংশতি’ (১৮৪৭)',
    solution: `ঈশ্বরচন্দ্র বিদ্যাসাগর ১৮৪৭ সালে ‘বেতাল পঞ্চবিংশতি’ গ্রন্থে বাংলা গদ্যে প্রথম যতিচিহ্নের সার্থক ব্যবহার করেন। সঠিক উত্তর: A)।`
  }
];

/**
 * ============================================================================
 * 2. ENGLISH LANGUAGE, GRAMMAR, VOCABULARY & CORRESPONDENCE POOL
 *    (20 Questions per Computer Operator Paper: MCQ-021 to MCQ-040)
 * ============================================================================
 */
const compOpEnglishMasterPool: CompOpMcqSeed[] = [
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correctly spelled word frequently used in official and administrative correspondence:',
    options: ['A) Questionnaire', 'B) Questionaire', 'C) Questionnare', 'D) Questionnair'],
    correctAnswer: 'A) Questionnaire',
    solution: `The correct spelling has double 'n' and ends in '-aire': Q-u-e-s-t-i-o-n-n-a-i-r-e. Correct Answer: A) Questionnaire.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Identify the correct spelling among the following options:',
    options: ['A) Maintenance', 'B) Maintainance', 'C) Maintenence', 'D) Mentenance'],
    correctAnswer: 'A) Maintenance',
    solution: `Although derived from 'maintain', the noun is spelled M-a-i-n-t-e-n-a-n-c-e. Correct Answer: A) Maintenance.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct passive voice of: "Who taught you French?"',
    options: [
      'A) By whom were you taught French?',
      'B) Who was taught French by you?',
      'C) By whom you were taught French?',
      'D) Whom were you taught French by?'
    ],
    correctAnswer: 'A) By whom were you taught French?',
    solution: `Active: Who + V2 + object1 + object2? -> Passive: By whom + were/was + object1 + V3 + object2? = "By whom were you taught French?". Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct passive form of: "Please upload the encrypted backup file to the server."',
    options: [
      'A) You are requested to upload the encrypted backup file to the server.',
      'B) Let the encrypted backup file be uploaded.',
      'C) The encrypted backup file should be uploaded by you.',
      'D) You are ordered to upload the encrypted backup file.'
    ],
    correctAnswer: 'A) You are requested to upload the encrypted backup file to the server.',
    solution: `Imperative sentences starting with "Please" change into "You are requested to + base verb..." in passive voice. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Fill in the blank with the appropriate preposition: "The Computer Operator must abide ___ the ICT security guidelines of the bank."',
    options: ['A) by', 'B) with', 'C) to', 'D) in'],
    correctAnswer: 'A) by',
    solution: `The phrasal verb "abide by" means to comply with or follow rules, laws, or decisions. Correct Answer: A) by.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Fill in the blank: "Senior management prefers automated cloud backups ___ manual tape drives."',
    options: ['A) to', 'B) than', 'C) over', 'D) from'],
    correctAnswer: 'A) to',
    solution: `The verb "prefer" (as well as senior, junior, superior, inferior, prior) takes the preposition "to", never "than". Correct Answer: A) to.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Select the correct verb form: "Neither the Branch Manager nor the Computer Operators ___ present at the server maintenance briefing yesterday."',
    options: ['A) were', 'B) was', 'C) is', 'D) has been'],
    correctAnswer: 'A) were',
    solution: `With "Neither... nor", the verb agrees with the closer subject ("Computer Operators", plural) and the time marker "yesterday" requires past tense ("were"). Correct Answer: A) were.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Select the correct verb form: "The Computer Operator, along with three Cash Officers, ___ completed the daily EOD reconciliation."',
    options: ['A) has', 'B) have', 'C) are', 'D) were'],
    correctAnswer: 'A) has',
    solution: `When a singular subject ("The Computer Operator") is followed by "along with / together with / as well as", the verb agrees with the first singular subject ("has"). Correct Answer: A) has.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Complete the conditional sentence: "Had the operator enabled autosave, the document ___ lost during the power outage."',
    options: [
      'A) would not have been',
      'B) would not be',
      'C) will not be',
      'D) had not been'
    ],
    correctAnswer: 'A) would not have been',
    solution: `Third Conditional (Inverted Past Perfect: "Had + Subject + V3") takes "would have + V3" (passive: "would not have been lost") in the main clause. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct indirect speech of: The IT Manager said to the operator, "Did you verify the printer IP configuration?"',
    options: [
      'A) The IT Manager asked the operator whether he had verified the printer IP configuration.',
      'B) The IT Manager told the operator if he verified the printer IP configuration.',
      'C) The IT Manager asked the operator did he verify the printer IP configuration.',
      'D) The IT Manager asked the operator whether he has verified the printer IP configuration.'
    ],
    correctAnswer: 'A) The IT Manager asked the operator whether he had verified the printer IP configuration.',
    solution: `In Yes/No interrogative narration, Past Indefinite ("Did you verify") shifts to Past Perfect ("whether/if he had verified") in statement word order. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What is the meaning of the idiom "Null and void"?',
    options: [
      'A) Invalid or legally non-binding',
      'B) Completely full',
      'C) Temporarily postponed',
      'D) Confidential and encrypted'
    ],
    correctAnswer: 'A) Invalid or legally non-binding',
    solution: `"Null and void" means having no legal force, invalid, or cancelled. Correct Answer: A) Invalid or legally non-binding.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What does the idiom "At the eleventh hour" mean?',
    options: [
      'A) At the very last possible moment before a deadline',
      'B) At 11:00 AM sharp',
      'C) Well ahead of schedule',
      'D) Every eleven hours'
    ],
    correctAnswer: 'A) At the very last possible moment before a deadline',
    solution: `"At the eleventh hour" means at the latest possible moment before it is too late. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What is the closest synonym of the word "METICULOUS"?',
    options: [
      'A) Extremely careful and precise about details',
      'B) Careless and hasty',
      'C) Ambiguous and vague',
      'D)Temporary and fragile'
    ],
    correctAnswer: 'A) Extremely careful and precise about details',
    solution: `"Meticulous" means showing great attention to detail; very thorough and precise. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What is the antonym of the word "OBSOLETE"?',
    options: [
      'A) Contemporary / Up-to-date',
      'B) Outdated',
      'C) Archaic',
      'D) Extinct'
    ],
    correctAnswer: 'A) Contemporary / Up-to-date',
    solution: `"Obsolete" means no longer in use or out of date (e.g., floppy disks); its antonym is modern, contemporary, or up-to-date. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Which one-word substitution refers to "A document written by hand rather than typed or printed"?',
    options: ['A) Manuscript', 'B) Holography', 'C) Bibliography', 'D) Lexicon'],
    correctAnswer: 'A) Manuscript',
    solution: `A "Manuscript" (from Latin manu scriptus) is a book, document, or piece of text written by hand before printing or typing. Correct Answer: A) Manuscript.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Fill in the blank: "It is high time we ___ all legacy office workstations to UTF-8 Unicode."',
    options: ['A) migrated', 'B) migrate', 'C) will migrate', 'D) have migrated'],
    correctAnswer: 'A) migrated',
    solution: `After the structure "It is time / It is high time + subject", the verb must be in the Past Subjunctive (V2 form: "migrated"). Correct Answer: A) migrated.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Fill in the blank: "Look forward to", "With a view to", and "Be accustomed to" are always followed by:',
    options: [
      'A) Verb + ing (Gerund)',
      'B) Base form of verb (V1)',
      'C) Past participle (V3)',
      'D) Modal auxiliary'
    ],
    correctAnswer: 'A) Verb + ing (Gerund)',
    solution: `In phrases like "with a view to", "look forward to", and "be used/accustomed to", "to" functions as a preposition and takes a Gerund (Verb + ing). Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct sentence with proper parallel structure:',
    options: [
      'A) The Computer Operator is responsible for typing official letters, maintaining spreadsheets, and troubleshooting network printers.',
      'B) The Computer Operator is responsible for typing official letters, maintain spreadsheets, and to troubleshoot network printers.',
      'C) The Computer Operator is responsible to type official letters, maintaining spreadsheets, and printer troubleshooting.',
      'D) The Computer Operator is responsible for type letters, maintaining spreadsheet, and troubleshoot printers.'
    ],
    correctAnswer: 'A) The Computer Operator is responsible for typing official letters, maintaining spreadsheets, and troubleshooting network printers.',
    solution: `Parallelism requires matching grammatical forms in a series of gerunds: "typing..., maintaining..., and troubleshooting...". Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'In formal official letters, if the salutation is "Dear Sir / Madam", what is the standard complimentary close?',
    options: [
      'A) Yours faithfully,',
      'B) Yours affectionately,',
      'C) Yours lovingly,',
      'D) Cordially yours,'
    ],
    correctAnswer: 'A) Yours faithfully,',
    solution: `In British & Bangladesh official correspondence, "Dear Sir/Madam" pairs with "Yours faithfully," whereas "Dear Mr./Ms. [Surname]" pairs with "Yours sincerely,". Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Identify the correct tag question: "Let us verify the spreadsheet formulas before printing, ___?"',
    options: ['A) shall we', 'B) will you', 'C) don’t we', 'D) aren’t we'],
    correctAnswer: 'A) shall we',
    solution: `Proposals beginning with "Let us (Let's)" always take the question tag "shall we?". Correct Answer: A) shall we.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct article usage: "He works as ___ Computer Operator in ___ state-owned commercial bank."',
    options: ['A) a, a', 'B) an, a', 'C) the, an', 'D) a, an'],
    correctAnswer: 'A) a, a',
    solution: `Both "Computer" and "state-owned" begin with consonant sounds, so both take the indefinite article "a". Correct Answer: A) a, a.`
  }
];

/**
 * ============================================================================
 * 3. GENERAL KNOWLEDGE, BANGLADESH AFFAIRS, E-GOVERNANCE & BANKING POOL
 *    (15 Questions per Computer Operator Paper: MCQ-061 to MCQ-075)
 * ============================================================================
 */
const compOpGkAndBankingPool: CompOpMcqSeed[] = [
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Under which Presidential Order was Bangladesh Bank established as the central bank of Bangladesh?',
    options: [
      'A) Bangladesh Bank Order, 1972 (President’s Order No. 127 of 1972)',
      'B) Bangladesh Banks (Nationalisation) Order, 1972 (P.O. No. 26)',
      'C) Bank Company Act, 1991',
      'D) Financial Institutions Act, 1993'
    ],
    correctAnswer: 'A) Bangladesh Bank Order, 1972 (President’s Order No. 127 of 1972)',
    solution: `Bangladesh Bank was established by the Bangladesh Bank Order, 1972 (P.O. No. 127 of 1972) with retrospective effect from 16 December 1971. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What is the full form of BACH, operated by Bangladesh Bank for automated cheque clearing and electronic fund transfers?',
    options: [
      'A) Bangladesh Automated Clearing House',
      'B) Banking Account Control Hub',
      'C) Bangladesh Association of Clearing Houses',
      'D) Bank Automated Credit Holding'
    ],
    correctAnswer: 'A) Bangladesh Automated Clearing House',
    solution: `BACH (Bangladesh Automated Clearing House) is the national clearing platform comprising BACPS (Cheque Processing) and BEFTN (Electronic Funds Transfer). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What is the minimum threshold amount for a single domestic customer transaction through Bangladesh Bank’s RTGS (Real-Time Gross Settlement) system?',
    options: [
      'A) BDT 1,00,000 (One Lac Taka)',
      'B) BDT 50,000',
      'C) BDT 5,00,000',
      'D) BDT 10,00,000'
    ],
    correctAnswer: 'A) BDT 1,00,000 (One Lac Taka)',
    solution: `RTGS settles high-value interbank transactions instantaneously in real time with a minimum floor of BDT 1,00,000. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Which interbank payment switch operated by Bangladesh Bank enables instant interoperability across ATM, POS, Internet Banking (IBFT), and MFS channels?',
    options: [
      'A) NPSB (National Payment Switch Bangladesh)',
      'B) BACPS',
      'C) SWIFT',
      'D) UNCTAD ASYCUDA'
    ],
    correctAnswer: 'A) NPSB (National Payment Switch Bangladesh)',
    solution: `NPSB (National Payment Switch Bangladesh), launched in December 2012, routes real-time retail card, ATM, POS, and IBFT transactions across banks. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Where is Bangladesh’s first National Tier-IV Fault-Tolerant Data Center (4TDC) located?',
    options: [
      'A) Kaliakoir Hi-Tech Park, Gazipur',
      'B) Agargaon ICT Tower, Dhaka',
      'C) Jashore Software Technology Park',
      'D) Sylhet Electronic City'
    ],
    correctAnswer: 'A) Kaliakoir Hi-Tech Park, Gazipur',
    solution: `Bangladesh's Uptime Institute certified Tier-IV National Data Center is located at Bangabandhu Hi-Tech City, Kaliakoir, Gazipur, with 99.995% availability. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Where is the Government of Bangladesh’s Disaster Recovery Data Center (DRDC) for the National Data Center located?',
    options: [
      'A) Sheikh Hasina Software Technology Park, Jashore',
      'B) Cox’s Bazar Landing Station',
      'C) Kuakata Landing Station',
      'D) Chattogram EPZ'
    ],
    correctAnswer: 'A) Sheikh Hasina Software Technology Park, Jashore',
    solution: `The national Disaster Recovery Data Center (DRDC) is hosted in Jashore to provide geographical redundancy for e-Governance and banking systems. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What is the name of the paperless electronic file and document management system used across all Ministries, Divisions, and Directorates of Bangladesh?',
    options: [
      'A) e-Nothi (ই-নথি / D-Nothi)',
      'B) e-GP',
      'C) iBAS++',
      'D) ASYCUDA World'
    ],
    correctAnswer: 'A) e-Nothi (ই-নথি / D-Nothi)',
    solution: `e-Nothi (and Digital Nothi / D-Nothi) is the government-wide electronic file management system implemented by a2i and BCC for paperless decision-making. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Which integrated financial management software is used by the Ministry of Finance and CGA in Bangladesh for national budget execution, EFT salary, and pension disbursement?',
    options: [
      'A) iBAS++ (Integrated Budget and Accounting System)',
      'B) e-Mutation',
      'C) EkPay',
      'D) BACH-II'
    ],
    correctAnswer: 'A) iBAS++ (Integrated Budget and Accounting System)',
    solution: `iBAS++ is the centralized government accounting, budgeting, and Electronic Fund Transfer (EFT) payroll/pension platform under the Finance Division. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Which public procurement portal is mandated by BPPA (formerly CPTU) for paperless electronic government tendering in Bangladesh?',
    options: [
      'A) e-GP (Electronic Government Procurement)',
      'B) e-Nothi',
      'C) e-PORCHA',
      'D) e-Return'
    ],
    correctAnswer: 'A) e-GP (Electronic Government Procurement)',
    solution: `e-GP (eprocure.gov.bd) is the national Electronic Government Procurement portal managed by Bangladesh Public Procurement Authority (BPPA). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Where are Bangladesh’s two Submarine Cable Landing Stations (SEA-ME-WE 4 and SEA-ME-WE 5) located?',
    options: [
      'A) Cox’s Bazar (SMW-4) and Kuakata, Patuakhali (SMW-5)',
      'B) Chattogram and Mongla',
      'C) Teknaf and Bhola',
      'D) Sitakunda and Payra'
    ],
    correctAnswer: 'A) Cox’s Bazar (SMW-4) and Kuakata, Patuakhali (SMW-5)',
    solution: `Bangladesh's first submarine cable (SEA-ME-WE 4, 2006) lands at Cox's Bazar, and the second submarine cable (SEA-ME-WE 5, 2017) lands at Kuakata, Patuakhali. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Which statutory authority under the ICT Division regulates Certifying Authorities (CAs) and issues Digital Signature Certificates (PKI) in Bangladesh?',
    options: [
      'A) Controller of Certifying Authorities (CCA)',
      'B) BTRC',
      'C) BFIU',
      'D) BASIS'
    ],
    correctAnswer: 'A) Controller of Certifying Authorities (CCA)',
    solution: `The Office of the Controller of Certifying Authorities (CCA), established under the ICT Act 2006, licenses and regulates PKI Digital Signature providers in Bangladesh. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Which notes/coins in Bangladesh are "Government Notes" signed by the Senior Secretary of the Finance Division rather than the Governor of Bangladesh Bank?',
    options: [
      'A) Tk. 1, Tk. 2, and Tk. 5 notes/coins',
      'B) Tk. 10 and Tk. 20 notes',
      'C) Tk. 50 and Tk. 100 notes',
      'D) Tk. 500 and Tk. 1000 notes'
    ],
    correctAnswer: 'A) Tk. 1, Tk. 2, and Tk. 5 notes/coins',
    solution: `Tk. 1, Tk. 2, and Tk. 5 are Government currency notes signed by the Finance Secretary; Tk. 10 to Tk. 1000 are Bank Notes signed by the Governor of Bangladesh Bank. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'According to BFIU AML/CFT directives, cash deposits or withdrawals in an account aggregating to at least how much in a single day must be reported as a Cash Transaction Report (CTR)?',
    options: [
      'A) BDT 10,00,000 (Ten Lac Taka) and above',
      'B) BDT 5,00,000 and above',
      'C) BDT 20,00,000 and above',
      'D) BDT 50,00,000 and above'
    ],
    correctAnswer: 'A) BDT 10,00,000 (Ten Lac Taka) and above',
    solution: `Any single or multiple cash transactions in a single day totaling BDT 10,00,000 or more require mandatory CTR reporting to BFIU. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'How many digits are there in a MICR (Magnetic Ink Character Recognition) Cheque Routing Number used in Bangladesh’s BACPS clearing system?',
    options: ['A) 9 digits', 'B) 7 digits', 'C) 11 digits', 'D) 13 digits'],
    correctAnswer: 'A) 9 digits',
    solution: `A Bangladesh Bank MICR Routing Number has 9 digits: Bank Code (3 digits) + District Code (2 digits) + Branch Code (3 digits) + Check Digit (1 digit). Correct Answer: A) 9 digits.`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'How many characters are there in a standard SWIFT / BIC code used in international banking and Letter of Credit (LC) transmissions?',
    options: [
      'A) 8 or 11 alphanumeric characters',
      'B) 6 numeric digits',
      'C) 16 numeric digits',
      'D) 24 characters'
    ],
    correctAnswer: 'A) 8 or 11 alphanumeric characters',
    solution: `A SWIFT/BIC code consists of 8 characters (head office: 4-letter bank code + 2-letter country code BD + 2-character location code) or 11 characters (with 3-character branch code). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Which Article of the Constitution of the People’s Republic of Bangladesh establishes the Bangladesh Public Service Commission (BPSC)?',
    options: [
      'A) Article 137',
      'B) Article 118',
      'C) Article 127',
      'D) Article 102'
    ],
    correctAnswer: 'A) Article 137',
    solution: `Article 137 of the Constitution of Bangladesh provides for the establishment of Public Service Commissions, while Article 118 establishes the Election Commission and Article 127 establishes the Auditor-General. Correct Answer: A) Article 137.`
  }
];

/**
 * ============================================================================
 * 4. COMPUTER OPERATOR SPECIALIZED ICT, OFFICE AUTOMATION, OS & NETWORKING POOL
 *    (25 Questions per Computer Operator Paper: MCQ-076 to MCQ-100)
 * ============================================================================
 */
const compOpComputerAndIctPool: CompOpMcqSeed[] = [
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What is the mandatory minimum practical typing speed (in Words Per Minute) for a "Computer Operator" (Grade-13 / Grade-11) under Bangladesh Government & State-Owned Bank Recruitment Rules?',
    options: [
      'A) 25 WPM in Bangla and 30 WPM in English',
      'B) 20 WPM in Bangla and 20 WPM in English',
      'C) 15 WPM in Bangla and 20 WPM in English',
      'D) 35 WPM in Bangla and 40 WPM in English'
    ],
    correctAnswer: 'A) 25 WPM in Bangla and 30 WPM in English',
    solution: `Under Bangladesh Public Service Commission (BPSC), MoPA, and State-Owned Bank Recruitment Rules, the post of Computer Operator requires at least 25 WPM in Bangla and 30 WPM in English (where 5 keystrokes = 1 standard word). Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Word, which keyboard shortcut splits a table into two separate tables right above the currently selected row?',
    options: [
      'A) Ctrl + Shift + Enter',
      'B) Ctrl + Enter',
      'C) Shift + Enter',
      'D) Alt + Shift + Enter'
    ],
    correctAnswer: 'A) Ctrl + Shift + Enter',
    solution: `Placing the cursor in a table row and pressing Ctrl + Shift + Enter splits the table into two separate tables at that row (whereas Ctrl + Enter inserts a Page Break). Correct Answer: A) Ctrl + Shift + Enter.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Word, which feature allows a Computer Operator to generate hundreds of personalized interview call letters or loan recovery notices by linking a single Word template to an MS Excel recipient list?',
    options: [
      'A) Mail Merge (Mailings Tab)',
      'B) Track Changes',
      'C) Cross-Reference',
      'D) SmartArt'
    ],
    correctAnswer: 'A) Mail Merge (Mailings Tab)',
    solution: `Mail Merge connects a main Word document template with a structured data source (Excel/CSV/Access) to automatically produce personalized letters, emails, envelopes, or labels. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Word, which keyboard shortcut is used to copy ONLY the formatting (Format Painter) of selected text, and which shortcut pastes that formatting?',
    options: [
      'A) Ctrl + Shift + C (Copy Formatting) and Ctrl + Shift + V (Paste Formatting)',
      'B) Ctrl + C and Ctrl + V',
      'C) Alt + C and Alt + V',
      'D) Ctrl + Alt + C and Ctrl + Alt + V'
    ],
    correctAnswer: 'A) Ctrl + Shift + C (Copy Formatting) and Ctrl + Shift + V (Paste Formatting)',
    solution: `Ctrl + Shift + C copies the font/paragraph formatting of the selected text, and Ctrl + Shift + V applies that formatting to target text. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Word, what is the default Gutter Margin used for when preparing official government reports or bound audit registers?',
    options: [
      'A) Extra margin space added to the side or top margin for book/file binding',
      'B) Space between two columns of text',
      'C) Space reserved for footnotes at the bottom',
      'D) Space outside the printable paper edge'
    ],
    correctAnswer: 'A) Extra margin space added to the side or top margin for book/file binding',
    solution: `A Gutter margin adds extra white space to the binding side (Left or Top, or Inside margin for mirrored pages) so that hole-punching or spiral/book binding does not obscure printed text. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Word, why would a Computer Operator insert a "Section Break (Next Page)" instead of a regular "Page Break (Ctrl + Enter)"?',
    options: [
      'A) To apply different page orientation (Portrait vs Landscape) or different headers/page numbering within the same document',
      'B) To check spelling automatically',
      'C) To reduce the file size of embedded images',
      'D) To convert text into a table'
    ],
    correctAnswer: 'A) To apply different page orientation (Portrait vs Landscape) or different headers/page numbering within the same document',
    solution: `Section Breaks divide a document into independent layout sections, allowing one page to be Portrait with Roman numerals (i, ii) and the next page to be Landscape for wide financial tables or Arabic numerals (1, 2, 3). Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Word, what are the keyboard shortcuts for applying Subscript (e.g., H₂O) and Superscript (e.g., x²) to selected text?',
    options: [
      'A) Ctrl + = (Subscript) and Ctrl + Shift + + (Superscript)',
      'B) Alt + = and Alt + Shift + +',
      'C) Ctrl + [ and Ctrl + ]',
      'D) Ctrl + D and Ctrl + Shift + D'
    ],
    correctAnswer: 'A) Ctrl + = (Subscript) and Ctrl + Shift + + (Superscript)',
    solution: `In MS Word, Ctrl + = toggles Subscript, and Ctrl + Shift + + (Plus) toggles Superscript. (Ctrl + [ and Ctrl + ] decrease/increase font size by 1 point). Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, which formula returns the 2nd highest salary from the range D2:D250?',
    options: [
      'A) =LARGE(D2:D250, 2)',
      'B) =MAX(D2:D250, 2)',
      'C) =HIGH(D2:D250, 2)',
      'D) =RANK(D2:D250, 2)'
    ],
    correctAnswer: 'A) =LARGE(D2:D250, 2)',
    solution: `=LARGE(array, k) returns the k-th largest value in a dataset. Thus =LARGE(D2:D250, 2) returns the 2nd highest salary, while =SMALL(D2:D250, 2) returns the 2nd lowest. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, while editing a formula, pressing which Function Key cycles a cell reference through Relative (A1), Absolute ($A$1), and Mixed (A$1 / $A1) modes?',
    options: ['A) F4', 'B) F2', 'C) F7', 'D) F9'],
    correctAnswer: 'A) F4',
    solution: `Pressing F4 while editing an Excel formula locks/unlocks row and column dollar signs ($A$1 -> A$1 -> $A1 -> A1). Correct Answer: A) F4.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, what is the keyboard shortcut to insert the current static DATE, and what is the shortcut to insert the current static TIME?',
    options: [
      'A) Ctrl + ; (Date) and Ctrl + Shift + ; (Time)',
      'B) Ctrl + D (Date) and Ctrl + T (Time)',
      'C) Alt + ; (Date) and Alt + Shift + ; (Time)',
      'D) F5 (Date) and Shift + F5 (Time)'
    ],
    correctAnswer: 'A) Ctrl + ; (Date) and Ctrl + Shift + ; (Time)',
    solution: `Ctrl + ; (Semicolon) inserts the current system date; Ctrl + Shift + ; (Colon) inserts the current system time. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, why do advanced Computer Operators often prefer the combination =INDEX(..., MATCH(...)) over =VLOOKUP(...)?',
    options: [
      'A) INDEX-MATCH can look up values to the LEFT of the lookup column and does not break when columns are inserted or deleted',
      'B) VLOOKUP cannot work on numeric values',
      'C) INDEX-MATCH does not require any cell ranges',
      'D) VLOOKUP only works on up to 50 rows'
    ],
    correctAnswer: 'A) INDEX-MATCH can look up values to the LEFT of the lookup column and does not break when columns are inserted or deleted',
    solution: `VLOOKUP requires the lookup column to be the leftmost column of the table_array and uses a hardcoded col_index_num. INDEX-MATCH can look up in any direction (left or right) and dynamically references the return column. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, which tool summarizes, groups, and cross-tabulates 50,000 rows of branch transaction records into an interactive summary report without writing complex formulas?',
    options: [
      'A) PivotTable (Insert Tab -> PivotTable)',
      'B) Text to Columns',
      'C) Goal Seek',
      'D) Watch Window'
    ],
    correctAnswer: 'A) PivotTable (Insert Tab -> PivotTable)',
    solution: `A PivotTable dynamically aggregates large tabular datasets by dragging fields into Rows, Columns, Values (Sum/Count/Average), and Filters areas. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS PowerPoint, which key starts the Slide Show from the VERY FIRST slide, and which key starts the Slide Show from the CURRENT slide?',
    options: [
      'A) F5 (from Beginning) and Shift + F5 (from Current Slide)',
      'B) F7 (from Beginning) and Shift + F7 (from Current Slide)',
      'C) F2 (from Beginning) and Ctrl + F2 (from Current Slide)',
      'D) F11 (from Beginning) and Shift + F11 (from Current Slide)'
    ],
    correctAnswer: 'A) F5 (from Beginning) and Shift + F5 (from Current Slide)',
    solution: `In MS PowerPoint, pressing F5 launches the presentation from Slide 1, whereas pressing Shift + F5 starts the presentation from the currently active slide. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS PowerPoint, which view allows a Computer Operator to place the bank’s official logo, header, and font theme in ONE place so it automatically appears consistently on every slide?',
    options: [
      'A) Slide Master View (View Tab -> Slide Master)',
      'B) Slide Sorter View',
      'C) Notes Page View',
      'D) Reading View'
    ],
    correctAnswer: 'A) Slide Master View (View Tab -> Slide Master)',
    solution: `Slide Master controls the global layout, background graphics, logos, fonts, and footer placeholders across all slides in a presentation. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In the Bijoy Bangla keyboard layout, which key acts as the "Link Key / Hasanta (্)" to form conjunct characters (যুক্তবর্ণ), and which key sequence types ‘ক্ষ’?',
    options: [
      'A) Link Key = G; and ‘ক্ষ’ = J + G + Shift + N',
      'B) Link Key = H; and ‘ক্ষ’ = K + H + N',
      'C) Link Key = F; and ‘ক্ষ’ = J + F + N',
      'D) Link Key = V; and ‘ক্ষ’ = J + V + Shift + M'
    ],
    correctAnswer: 'A) Link Key = G; and ‘ক্ষ’ = J + G + Shift + N',
    solution: `In Bijoy layout, 'G' is the Hasanta/Link key (্). Since J = ক and Shift + N = ষ, typing J + G + Shift + N produces ‘ক্ষ’. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What is the official Unicode hexadecimal block assigned to the Bengali (Bangla) script, and which shortcut switches Bijoy Keyboard to Unicode mode?',
    options: [
      'A) U+0980 to U+09FF; and Ctrl + Alt + V',
      'B) U+0900 to U+097F; and Ctrl + Alt + B',
      'C) U+0000 to U+007F; and F12',
      'D) U+0A00 to U+0A7F; and Alt + Shift'
    ],
    correctAnswer: 'A) U+0980 to U+09FF; and Ctrl + Alt + V',
    solution: `The Unicode Bengali block is U+0980–U+09FF. In Bijoy Bayanno, Ctrl + Alt + V enables Bijoy Unicode mode (for Nikosh/e-Nothi), while Ctrl + Alt + B enables Bijoy Classic ANSI mode (for SutonnyMJ). Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What is the 8-bit 2’s complement binary representation of the decimal number -25?',
    options: ['A) 11100111', 'B) 11100110', 'C) 10011001', 'D) 11101001'],
    correctAnswer: 'A) 11100111',
    solution: `1) +25 in 8-bit binary = 00011001.
2) 1’s complement (invert bits) = 11100110.
3) Add 1 for 2’s complement = 11100110 + 1 = 11100111. Correct Answer: A) 11100111.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which pair of logic gates are known as "Universal Gates" because any Boolean function or digital circuit can be constructed using only gates of that single type?',
    options: [
      'A) NAND and NOR gates',
      'B) AND and OR gates',
      'C) XOR and XNOR gates',
      'D) NOT and Buffer gates'
    ],
    correctAnswer: 'A) NAND and NOR gates',
    solution: `NAND and NOR gates are Universal Gates because NOT, AND, OR, XOR, and flip-flop circuits can be implemented using solely NAND gates or solely NOR gates. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which type of ultra-fast semiconductor memory is placed directly between the CPU registers and main RAM (using Static RAM / SRAM cells) to minimize processor wait states?',
    options: [
      'A) Cache Memory (L1 / L2 / L3 Cache)',
      'B) Virtual Memory (Pagefile)',
      'C) EEPROM',
      'D) Magnetic Tape'
    ],
    correctAnswer: 'A) Cache Memory (L1 / L2 / L3 Cache)',
    solution: `Cache Memory is built from high-speed flip-flop SRAM and stores frequently accessed instructions and data between the CPU and slower DRAM. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'At which layers of the 7-layer ISO/OSI Reference Model do a Hub, a Layer-2 Switch, and a Router operate respectively?',
    options: [
      'A) Hub: Layer 1 (Physical), Switch: Layer 2 (Data Link), Router: Layer 3 (Network)',
      'B) Hub: Layer 2, Switch: Layer 3, Router: Layer 4',
      'C) Hub: Layer 1, Switch: Layer 1, Router: Layer 2',
      'D) Hub: Layer 3, Switch: Layer 2, Router: Layer 1'
    ],
    correctAnswer: 'A) Hub: Layer 1 (Physical), Switch: Layer 2 (Data Link), Router: Layer 3 (Network)',
    solution: `A Hub broadcasts electrical bits at Layer 1 (Physical); a Switch forwards frames using MAC addresses at Layer 2 (Data Link); a Router routes packets using logical IP addresses at Layer 3 (Network). Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which of the following IPv4 addresses is a valid Class B Private IP address according to RFC 1918, and what is the usable host count of a /26 subnet (255.255.255.192)?',
    options: [
      'A) 172.24.16.100; and 62 usable hosts',
      'B) 172.32.10.5; and 64 usable hosts',
      'C) 192.168.1.1; and 30 usable hosts',
      'D) 10.10.1.1; and 126 usable hosts'
    ],
    correctAnswer: 'A) 172.24.16.100; and 62 usable hosts',
    solution: `1) RFC 1918 Class B private range is 172.16.0.0 to 172.31.255.255, so 172.24.16.100 is valid.
2) A /26 subnet leaves 32 - 26 = 6 host bits => 2^6 - 2 = 64 - 2 = 62 usable hosts. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What are the standard default TCP/UDP port numbers for HTTPS, SSH, DNS, and RDP (Windows Remote Desktop) respectively?',
    options: [
      'A) HTTPS: 443, SSH: 22, DNS: 53, RDP: 3389',
      'B) HTTPS: 80, SSH: 21, DNS: 25, RDP: 8080',
      'C) HTTPS: 443, SSH: 23, DNS: 110, RDP: 1433',
      'D) HTTPS: 8443, SSH: 22, DNS: 67, RDP: 3306'
    ],
    correctAnswer: 'A) HTTPS: 443, SSH: 22, DNS: 53, RDP: 3389',
    solution: `Standard well-known ports: HTTPS = 443, SSH = 22 (Telnet = 23, FTP = 20/21, SMTP = 25), DNS = 53, and Windows Remote Desktop Protocol (RDP) = 3389. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'When a shared network laser printer in a bank branch gets stuck with corrupted print jobs in the queue, which Windows service should the Computer Operator restart via services.msc or command prompt?',
    options: [
      'A) Print Spooler (spoolsv.exe / net stop spooler & net start spooler)',
      'B) Windows Defender Firewall',
      'C) Task Scheduler',
      'D) Disk Defragmenter'
    ],
    correctAnswer: 'A) Print Spooler (spoolsv.exe / net stop spooler & net start spooler)',
    solution: `Stopping the Print Spooler service, clearing stuck .SPL/.SHD files from C:\\Windows\\System32\\spool\\PRINTERS, and restarting Print Spooler resolves stuck print queues immediately. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In SQL, which clause is used to filter grouped aggregate results (such as finding bank branches HAVING total deposits > 50,00,000) after a GROUP BY clause?',
    options: [
      'A) HAVING clause',
      'B) WHERE clause',
      'C) ORDER BY clause',
      'D) DISTINCT clause'
    ],
    correctAnswer: 'A) HAVING clause',
    solution: `In SQL, the WHERE clause filters individual rows before grouping, whereas the HAVING clause filters groups created by GROUP BY based on aggregate functions (SUM, COUNT, AVG). Correct Answer: A) HAVING clause.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What is the fundamental difference between SQL commands TRUNCATE, DELETE, and DROP on a database table?',
    options: [
      'A) DELETE removes filtered rows (DML, can rollback); TRUNCATE empties all rows keeping table structure (DDL); DROP deletes the entire table and schema (DDL)',
      'B) DROP only removes one row; DELETE removes the schema; TRUNCATE renames the table',
      'C) All three commands are identical',
      'D) TRUNCATE supports a WHERE clause whereas DELETE does not'
    ],
    correctAnswer: 'A) DELETE removes filtered rows (DML, can rollback); TRUNCATE empties all rows keeping table structure (DDL); DROP deletes the entire table and schema (DDL)',
    solution: `DELETE is a DML command that supports a WHERE clause; TRUNCATE is a fast DDL command that removes all rows while preserving the table schema; DROP completely removes both data and table definition from the database. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which Windows command-line tools are used to (i) display full IP & MAC address configuration, (ii) flush the local DNS resolver cache, and (iii) trace the hop-by-hop router path to a server?',
    options: [
      'A) (i) ipconfig /all, (ii) ipconfig /flushdns, (iii) tracert',
      'B) (i) ping, (ii) chkdsk, (iii) diskpart',
      'C) (i) netstat, (ii) format, (iii) tasklist',
      'D) (i) nslookup, (ii) sfc /scannow, (iii) regedit'
    ],
    correctAnswer: 'A) (i) ipconfig /all, (ii) ipconfig /flushdns, (iii) tracert',
    solution: `ipconfig /all shows IP, subnet, gateway, DNS, and MAC address; ipconfig /flushdns clears stale DNS entries; tracert traces each Layer-3 router hop to the destination. Correct Answer: A).`
  }
];

/**
 * ============================================================================
 * 5. DYNAMIC YEAR-SPECIFIC MATHEMATICS & COMPUTER OPERATOR APTITUDE GENERATOR
 *    (20 Questions per Computer Operator Paper: MCQ-041 to MCQ-060)
 * ============================================================================
 */
function buildCompOpDynamicMathPool(paper: NonItExamPaper, paperIndex: number): CompOpMcqSeed[] {
  const offset = paperIndex % 17;
  const mathSeeds: CompOpMcqSeed[] = [];

  // 1. Computer Operator Practical Typing Speed & Keystrokes Math
  const keystrokesPerHr = 16500 + (offset % 5) * 1500; // 16500, 18000, 19500, 21000, 22500
  const wpm1 = keystrokesPerHr / (5 * 60); // 55, 60, 65, 70, 75 WPM
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `In a Computer Operator practical typing examination, a candidate types ${keystrokesPerHr.toLocaleString()} keystrokes in 1 hour. Given that 5 keystrokes equal 1 standard word, what is the candidate’s gross typing speed in Words Per Minute (WPM)?`,
    options: [
      `A) ${wpm1 - 5} WPM`,
      `B) ${wpm1} WPM`,
      `C) ${wpm1 + 5} WPM`,
      `D) ${wpm1 + 10} WPM`
    ],
    correctAnswer: `B) ${wpm1} WPM`,
    solution: `1) Total standard words typed in 1 hour = ${keystrokesPerHr.toLocaleString()} ÷ 5 = ${(keystrokesPerHr / 5).toLocaleString()} words.
2) Gross typing speed in WPM = ${(keystrokesPerHr / 5).toLocaleString()} ÷ 60 minutes = ${wpm1} WPM.
Correct Answer: B) ${wpm1} WPM.`
  });

  // 2. Net WPM Calculation with Uncorrected Error Penalty
  const grossWords10Min = 480 + (offset % 4) * 40; // 480, 520, 560, 600 words in 10 mins
  const errors10Min = 30 + (offset % 3) * 10; // 30, 40, 50
  const netWpm2 = (grossWords10Min - errors10Min) / 10;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `During a 10-minute English typing test for Computer Operator recruitment, a candidate types ${grossWords10Min} gross words with ${errors10Min} uncorrected errors. If 1 word is deducted for each error, what is the Net Typing Speed in WPM?`,
    options: [
      `A) ${netWpm2 - 3} WPM`,
      `B) ${netWpm2} WPM`,
      `C) ${grossWords10Min / 10} WPM`,
      `D) ${netWpm2 + 4} WPM`
    ],
    correctAnswer: `B) ${netWpm2} WPM`,
    solution: `Gross WPM = ${grossWords10Min} ÷ 10 = ${grossWords10Min / 10} WPM.
Penalty per minute = ${errors10Min} ÷ 10 = ${errors10Min / 10} WPM.
Net WPM = ${grossWords10Min / 10} - ${errors10Min / 10} = ${netWpm2} WPM.
Correct Answer: B) ${netWpm2} WPM.`
  });

  // 3. Network File Transfer Bandwidth Math (Mbps vs Megabytes)
  const fileSizeMB = 150 + (offset % 4) * 50; // 150, 200, 250, 300 MB
  const linkSpeedMbps = 100; // 100 Megabits per second = 12.5 MB/s
  const transferSeconds = (fileSizeMB * 8) / linkSpeedMbps;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `A Computer Operator uploads an encrypted CBS database backup of ${fileSizeMB} Megabytes (MB) over a dedicated ${linkSpeedMbps} Mbps (Megabits per second) link operating at 100% efficiency (where 1 Byte = 8 bits). How many seconds will the upload take?`,
    options: [
      `A) ${transferSeconds / 2} seconds`,
      `B) ${transferSeconds} seconds`,
      `C) ${transferSeconds + 8} seconds`,
      `D) ${fileSizeMB / 10} seconds`
    ],
    correctAnswer: `B) ${transferSeconds} seconds`,
    solution: `1) Convert ${fileSizeMB} Megabytes (MB) into Megabits (Mb): ${fileSizeMB} × 8 = ${fileSizeMB * 8} Megabits.
2) Upload time at ${linkSpeedMbps} Mbps = ${fileSizeMB * 8} ÷ ${linkSpeedMbps} = ${transferSeconds} seconds.
Correct Answer: B) ${transferSeconds} seconds.`
  });

  // 4. Simultaneous Linear Equations (Desktops & Laser Printers Cost)
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'A bank branch purchased 8 desktop computers and 4 laser printers for Tk. 4,40,000. At the same unit rates, another branch purchased 5 desktop computers and 3 laser printers for Tk. 2,85,000. What is the unit price of 1 desktop computer and 1 laser printer?',
    options: [
      'A) Desktop: Tk. 45,000; Printer: Tk. 20,000',
      'B) Desktop: Tk. 40,000; Printer: Tk. 30,000',
      'C) Desktop: Tk. 50,000; Printer: Tk. 10,000',
      'D) Desktop: Tk. 42,000; Printer: Tk. 26,000'
    ],
    correctAnswer: 'A) Desktop: Tk. 45,000; Printer: Tk. 20,000',
    solution: `1) 8x + 4y = 4,40,000 => 2x + y = 1,10,000 => y = 1,10,000 - 2x.
2) 5x + 3(1,10,000 - 2x) = 2,85,000 => 3,30,000 - x = 2,85,000 => x = Tk. 45,000.
3) y = 1,10,000 - 90,000 = Tk. 20,000.
Correct Answer: A) Desktop: Tk. 45,000; Printer: Tk. 20,000.`
  });

  // 5. Binary, Octal & Hexadecimal Number System Conversion
  const decVal = 156 + (offset % 5) * 12; // 156, 168, 180, 192, 204
  const hexVal = decVal.toString(16).toUpperCase();
  const binVal = decVal.toString(2);
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `What are the hexadecimal and 8-bit binary equivalents of the decimal number (${decVal})₁₀?`,
    options: [
      `A) (${hexVal})₁₆ and (${binVal})₂`,
      `B) (${(decVal + 4).toString(16).toUpperCase()})₁₆ and (${(decVal + 4).toString(2)})₂`,
      `C) (${(decVal - 4).toString(16).toUpperCase()})₁₆ and (${(decVal - 4).toString(2)})₂`,
      `D) (${hexVal})₁₆ and (${(decVal + 1).toString(2)})₂`
    ],
    correctAnswer: `A) (${hexVal})₁₆ and (${binVal})₂`,
    solution: `Dividing ${decVal} by 16 gives ${Math.floor(decVal / 16)} with remainder ${decVal % 16} => (${hexVal})₁₆.
In 8-bit binary, ${decVal} = (${binVal})₂.
Correct Answer: A) (${hexVal})₁₆ and (${binVal})₂.`
  });

  // 6. Two Operators Working Together
  const batchForms = 1800 + (offset % 4) * 600; // 1800, 2400, 3000, 3600
  const rA = batchForms / 4;
  const rB = batchForms / 6;
  const target6 = (rA + rB) * 6;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `Computer Operator A can format ${batchForms.toLocaleString()} official audit tables in 4 hours, while Operator B can format the same ${batchForms.toLocaleString()} tables in 6 hours. Working together, how many hours will they take to format ${target6.toLocaleString()} tables?`,
    options: [
      'A) 5 hours',
      'B) 6 hours',
      'C) 6.5 hours',
      'D) 7.5 hours'
    ],
    correctAnswer: 'B) 6 hours',
    solution: `Hourly rate of A = ${batchForms} ÷ 4 = ${rA} tables/hr; Hourly rate of B = ${batchForms} ÷ 6 = ${rB} tables/hr.
Combined hourly rate = ${rA} + ${rB} = ${rA + rB} tables/hr.
Time for ${target6.toLocaleString()} tables = ${target6} ÷ ${rA + rB} = 6 hours.
Correct Answer: B) 6 hours.`
  });

  // 7. Venn Diagram / Set Theory (Mobile Banking & Internet Banking)
  const totalCust = 400 + (offset % 3) * 100; // 400, 500, 600
  const mCust = Math.round(totalCust * 0.65);
  const iCust = Math.round(totalCust * 0.55);
  const neitherCust = Math.round(totalCust * 0.10);
  const atLeastOne = totalCust - neitherCust;
  const bothCust = mCust + iCust - atLeastOne;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `In a survey of ${totalCust} bank customers, ${mCust} use Mobile Banking, ${iCust} use Internet Banking, and ${neitherCust} use neither service. How many customers use BOTH Mobile and Internet Banking?`,
    options: [
      `A) ${bothCust - 20}`,
      `B) ${bothCust}`,
      `C) ${bothCust + 20}`,
      `D) ${mCust - bothCust}`
    ],
    correctAnswer: `B) ${bothCust}`,
    solution: `1) Customers using at least one service n(M ∪ I) = ${totalCust} - ${neitherCust} = ${atLeastOne}.
2) n(M ∩ I) = n(M) + n(I) - n(M ∪ I) = ${mCust} + ${iCust} - ${atLeastOne} = ${bothCust}.
Correct Answer: B) ${bothCust}.`
  });

  // 8. Committee / Combination Math
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'An IT evaluation committee of 5 members is to be formed out of 6 System Analysts and 4 Computer Operators. In how many ways can this be done so that the committee includes at least 2 Computer Operators?',
    options: ['A) 186', 'B) 192', 'C) 246', 'D) 120'],
    correctAnswer: 'A) 186',
    solution: `Case 1 (2 Operators & 3 Analysts): 4C2 × 6C3 = 6 × 20 = 120.
Case 2 (3 Operators & 2 Analysts): 4C3 × 6C2 = 4 × 15 = 60.
Case 3 (4 Operators & 1 Analyst): 4C4 × 6C1 = 1 × 6 = 6.
Total ways = 120 + 60 + 6 = 186. Correct Answer: A) 186.`
  });

  // 9. Profit & Loss Percentage
  const cpRatio = 5;
  const spRatio = 6;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `If the ratio of the cost price of a network switch to its selling price is ${cpRatio} : ${spRatio}, what is the profit percentage?`,
    options: ['A) 16.67%', 'B) 20%', 'C) 25%', 'D) 15%'],
    correctAnswer: 'B) 20%',
    solution: `Profit % = ((SP - CP) / CP) × 100 = ((6 - 5) / 5) × 100 = 20%.
Correct Answer: B) 20%.`
  });

  // 10. Compound vs Simple Interest Difference
  const p10 = 30000 + (offset % 4) * 10000; // 30k, 40k, 50k, 60k
  const diff10 = p10 * 0.01; // at 10% for 2 years
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `What is the difference between Compound Interest (compounded annually) and Simple Interest on Tk. ${p10.toLocaleString()} at 10% per annum for 2 years?`,
    options: [
      `A) Tk. ${diff10 - 100}`,
      `B) Tk. ${diff10}`,
      `C) Tk. ${diff10 + 100}`,
      `D) Tk. ${diff10 * 2}`
    ],
    correctAnswer: `B) Tk. ${diff10}`,
    solution: `For 2 years, CI - SI = P × (r / 100)² = ${p10.toLocaleString()} × (10 / 100)² = ${p10.toLocaleString()} × 0.01 = Tk. ${diff10}.
Correct Answer: B) Tk. ${diff10}.`
  });

  // 11. Average Age Inclusion Problem
  const nOfficers = 24;
  const avgAge = 32 + (offset % 3); // 32, 33, 34
  const managerAge = (nOfficers + 1) * (avgAge + 1) - nOfficers * avgAge;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `The average age of ${nOfficers} staff members in a bank branch is ${avgAge} years. When the Branch Manager’s age is included, the average increases by 1 year. What is the age of the Branch Manager?`,
    options: [
      `A) ${managerAge - 2} years`,
      `B) ${managerAge} years`,
      `C) ${managerAge + 1} years`,
      `D) ${managerAge + 3} years`
    ],
    correctAnswer: `B) ${managerAge} years`,
    solution: `Total age of ${nOfficers} staff = ${nOfficers} × ${avgAge} = ${nOfficers * avgAge}.
Total age of ${nOfficers + 1} persons = ${nOfficers + 1} × ${avgAge + 1} = ${(nOfficers + 1) * (avgAge + 1)}.
Branch Manager's age = ${(nOfficers + 1) * (avgAge + 1)} - ${nOfficers * avgAge} = ${managerAge} years.
Correct Answer: B) ${managerAge} years.`
  });

  // 12. Algebraic Identity (x - 1/x to x^3 - 1/x^3)
  const k12 = 3 + (offset % 3); // 3, 4, 5
  const cubeVal = Math.pow(k12, 3) + 3 * k12; // 36, 76, 140
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `If x - (1/x) = ${k12}, what is the value of x³ - (1/x³)?`,
    options: [
      `A) ${Math.pow(k12, 3) - 3 * k12}`,
      `B) ${cubeVal}`,
      `C) ${Math.pow(k12, 3)}`,
      `D) ${cubeVal + 6}`
    ],
    correctAnswer: `B) ${cubeVal}`,
    solution: `x³ - 1/x³ = (x - 1/x)³ + 3·x·(1/x)(x - 1/x) = ${k12}³ + 3(${k12}) = ${Math.pow(k12, 3)} + ${3 * k12} = ${cubeVal}.
Correct Answer: B) ${cubeVal}.`
  });

  // 13. Train Crossing Platform
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'A train 180 meters long is running at a speed of 72 km/h. How many seconds will it take to cross a platform 220 meters long?',
    options: ['A) 15 seconds', 'B) 20 seconds', 'C) 22 seconds', 'D) 25 seconds'],
    correctAnswer: 'B) 20 seconds',
    solution: `Speed = 72 × (5 / 18) = 20 m/s.
Total distance = 180 + 220 = 400 m.
Time = 400 ÷ 20 = 20 seconds. Correct Answer: B) 20 seconds.`
  });

  // 14. Income & Expenditure Ratio Problem
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'The monthly incomes of two Computer Operators are in the ratio 5 : 4 and their monthly expenditures are in the ratio 7 : 5. If each saves Tk. 15,000 per month, what are their monthly incomes?',
    options: [
      'A) Tk. 45,000 and Tk. 36,000',
      'B) Tk. 50,000 and Tk. 40,000',
      'C) Tk. 55,000 and Tk. 44,000',
      'D) Tk. 60,000 and Tk. 48,000'
    ],
    correctAnswer: 'B) Tk. 50,000 and Tk. 40,000',
    solution: `(5x - 15,000) / (4x - 15,000) = 7 / 5
=> 25x - 75,000 = 28x - 1,05,000 => 3x = 30,000 => x = 10,000.
Incomes = 5x = Tk. 50,000 and 4x = Tk. 40,000. Correct Answer: B).`
  });

  // 15. Mensuration: Percentage Increase in Circle Area
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'If the radius of a circular optical disk platter is increased by 20%, by what percentage does its surface area increase?',
    options: ['A) 20%', 'B) 40%', 'C) 44%', 'D) 48%'],
    correctAnswer: 'C) 44%',
    solution: `Successive percentage change = 20 + 20 + (20 × 20) / 100 = 40 + 4 = 44%.
Correct Answer: C) 44%.`
  });

  // 16. Pipes & Tank Problem
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively, while a third pipe C can empty the full tank in 60 minutes. If all three pipes are opened simultaneously, in how many minutes will the tank be filled?',
    options: ['A) 12 minutes', 'B) 15 minutes', 'C) 18 minutes', 'D) 24 minutes'],
    correctAnswer: 'B) 15 minutes',
    solution: `Net part filled in 1 min = (1/20) + (1/30) - (1/60) = (3 + 2 - 1)/60 = 4/60 = 1/15 => 15 minutes.
Correct Answer: B) 15 minutes.`
  });

  // 17. Logarithmic Evaluation
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'What is the value of log₂(64) + log₁₀(0.001)?',
    options: ['A) 3', 'B) 4', 'C) 6', 'D) 9'],
    correctAnswer: 'A) 3',
    solution: `log₂(64) = log₂(2⁶) = 6; and log₁₀(0.001) = log₁₀(10⁻³) = -3.
Sum = 6 + (-3) = 3. Correct Answer: A) 3.`
  });

  // 18. Right Triangle / Pythagoras Ladder Problem
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'A 13-meter network cable ladder leans against a vertical server room wall with its foot 5 meters from the base of the wall. At what height does the top of the ladder touch the wall?',
    options: ['A) 10 meters', 'B) 12 meters', 'C) 11 meters', 'D) 9 meters'],
    correctAnswer: 'B) 12 meters',
    solution: `By Pythagoras theorem: Height = √(13² - 5²) = √(169 - 25) = √144 = 12 meters.
Correct Answer: B) 12 meters.`
  });

  // 19. Simple Interest Doubling & Quadrupling Time
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'A sum of money doubles itself in 8 years at simple interest. In how many years will it become 4 times itself at the same annual rate?',
    options: ['A) 16 years', 'B) 24 years', 'C) 20 years', 'D) 32 years'],
    correctAnswer: 'B) 24 years',
    solution: `To double (gain 1P interest) takes 8 years. To become 4 times itself (gain 3P interest) at simple interest takes 3 × 8 = 24 years.
Correct Answer: B) 24 years.`
  });

  // 20. Exponent Equation
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'If 2^(x + 3) + 2^x = 72, what is the value of x?',
    options: ['A) 2', 'B) 3', 'C) 4', 'D) 5'],
    correctAnswer: 'B) 3',
    solution: `2^x(2³ + 1) = 72 => 9 × 2^x = 72 => 2^x = 8 = 2³ => x = 3.
Correct Answer: B) 3.`
  });

  return mathSeeds;
}

function rotatePool<T>(pool: T[], startOffset: number): T[] {
  if (pool.length === 0) return [];
  const shift = ((startOffset % pool.length) + pool.length) % pool.length;
  return [...pool.slice(shift), ...pool.slice(0, shift)];
}

/**
 * Builds a complete, ordered 100-MCQ Preliminary Question Set (MCQ-001 to MCQ-100)
 * for any Computer Operator exam paper (2010–2026):
 * - MCQ-001 to MCQ-020: Bangla Language & Literature (20)
 * - MCQ-021 to MCQ-040: English Language & Focus Writing (20)
 * - MCQ-041 to MCQ-060: Mathematics & Quantitative Aptitude (20)
 * - MCQ-061 to MCQ-075: General Knowledge & Banking Economy (15)
 * - MCQ-076 to MCQ-100: Computer, Office Automation, OS, Networking & ICT (25)
 */
export function buildFull100ComputerOperatorMcqQuestions(
  paper: NonItExamPaper,
  paperIndex: number
): NonItQuestionItem[] {
  const existingMcqs = paper.questions.filter(q => q.questionType === 'MCQ');

  const pickSectionItems = (
    targetSubject: NonItSubject,
    count: number,
    masterPool: CompOpMcqSeed[],
    offset: number
  ): CompOpMcqSeed[] => {
    const chosen: CompOpMcqSeed[] = [];
    const seen = new Set<string>();

    // First preserve existing curated MCQs for this paper that match targetSubject
    for (const eq of existingMcqs) {
      if (eq.subject === targetSubject && chosen.length < count) {
        const key = eq.questionText.trim();
        if (!seen.has(key)) {
          seen.add(key);
          chosen.push({
            subject: targetSubject,
            questionText: eq.questionText,
            options:
              eq.options && eq.options.length === 4
                ? eq.options
                : ['A) Option A', 'B) Option B', 'C) Option C', 'D) Option D'],
            correctAnswer: eq.correctAnswer || 'A) Option A',
            solution: eq.solution
          });
        }
      }
    }

    // Fill remaining up to `count` from rotated masterPool
    const rotated = rotatePool(masterPool, offset);
    for (const seed of rotated) {
      if (chosen.length >= count) break;
      const key = seed.questionText.trim();
      if (!seen.has(key)) {
        seen.add(key);
        chosen.push(seed);
      }
    }

    return chosen;
  };

  const bangla20 = pickSectionItems(
    'Bangla Language & Literature',
    20,
    compOpBanglaMasterPool,
    paperIndex * 3
  );
  const english20 = pickSectionItems(
    'English Language & Focus Writing',
    20,
    compOpEnglishMasterPool,
    paperIndex * 3 + 1
  );
  const math20 = pickSectionItems(
    'Mathematics & Quantitative Aptitude',
    20,
    buildCompOpDynamicMathPool(paper, paperIndex),
    paperIndex * 2
  );
  const gk15 = pickSectionItems(
    'General Knowledge & Banking Economy',
    15,
    compOpGkAndBankingPool,
    paperIndex * 2 + 1
  );
  const ict25 = pickSectionItems(
    'Computer & Basic ICT',
    25,
    compOpComputerAndIctPool,
    paperIndex * 4
  );

  const ordered100Seeds: CompOpMcqSeed[] = [
    ...bangla20,
    ...english20,
    ...math20,
    ...gk15,
    ...ict25
  ];

  return ordered100Seeds.slice(0, 100).map((seed, idx) => {
    const qNum = idx + 1;
    return {
      id: `${paper.paperId}-mcq-${String(qNum).padStart(3, '0')}`,
      paperId: paper.paperId,
      questionPaperCode: paper.questionPaperCode,
      questionNo: `MCQ-${String(qNum).padStart(3, '0')}`,
      questionType: 'MCQ',
      subject: seed.subject,
      marks: 1,
      questionText: seed.questionText,
      options: seed.options,
      correctAnswer: seed.correctAnswer,
      solution: seed.solution
    };
  });
}

/**
 * Ensures every Computer Operator paper (2010–2026) also has a complete Written & Practical set
 */
export function buildFullComputerOperatorWrittenQuestions(
  paper: NonItExamPaper,
  paperIndex: number
): NonItQuestionItem[] {
  const existingWritten = paper.questions.filter(q => q.questionType === 'Written');
  const supplementaryWritten: Omit<
    NonItQuestionItem,
    'id' | 'paperId' | 'questionPaperCode' | 'questionNo'
  >[] = [
    {
      questionType: 'Written',
      subject: 'Computer & Basic ICT',
      marks: 20,
      questionText:
        '(a) Differentiate between Compiler and Interpreter with examples. (b) Explain the functions of Hub, Layer-2 Switch, and Router across layers of the ISO/OSI Model. (c) Write the step-by-step procedure to troubleshoot a shared network laser printer stuck with jobs in the print queue.',
      solution: `Part (a): Compiler vs Interpreter
1. Compiler scans and translates the entire source program into machine code at once (e.g., C, C++). Execution is faster; syntax errors are listed after scanning the full code.
2. Interpreter translates and executes source code line-by-line (e.g., Python, JavaScript). Execution halts immediately at the first faulty statement.

Part (b): Networking Devices in OSI Model
- Hub (Layer 1 - Physical): Broadcasts electrical signals to all ports indiscriminately.
- Switch (Layer 2 - Data Link): Inspects 48-bit MAC addresses and forwards frames selectively to the target port.
- Router (Layer 3 - Network): Routes packets across different subnets/networks using logical IP addresses.

Part (c): Shared Network Printer Troubleshooting
1. Verify physical power, paper tray, toner, and LAN IP reachability via 'ping <printer_ip>'.
2. Open 'services.msc' (or run 'net stop spooler' as Administrator).
3. Delete corrupted '.SPL' and '.SHD' files from 'C:\\Windows\\System32\\spool\\PRINTERS'.
4. Restart the service ('net start spooler') and verify Standard TCP/IP Port (RAW 9100).`
    },
    {
      questionType: 'Written',
      subject: 'Computer & Basic ICT',
      marks: 20,
      questionText:
        'Write down the exact MS Excel formulas for a bank branch payroll & deposit sheet (rows 2 to 250): (a) Find the 2nd highest salary in D2:D250, (b) Look up Employee Grade from "HR!A2:E250" (5th column) using Emp_ID in A2 with exact match, (c) Count employees in "IT" department in B2:B250 whose salary in D2:D250 exceeds 50,000, and (d) Calculate net salary after 10% Provident Fund deduction on Basic Salary in C2.',
      solution: `Exact MS Excel Formulas:
(a) 2nd Highest Salary:
    =LARGE(D2:D250, 2)

(b) Exact-match VLOOKUP for Employee Grade (5th column):
    =VLOOKUP(A2, HR!$A$2:$E$250, 5, FALSE)

(c) Multiple-criteria count (IT Department AND Salary > 50,000):
    =COUNTIFS(B2:B250, "IT", D2:D250, ">50000")

(d) Net Salary after 10% PF deduction on Basic Salary in C2:
    =C2 - (C2 * 10%)   [or =C2 * 0.90]`
    },
    {
      questionType: 'Written',
      subject: 'Computer & Basic ICT',
      marks: 20,
      questionText:
        'Explain the technical difference between ASCII, ANSI Bangla (SutonnyMJ), and UTF-8 Unicode Bangla (Nikosh). Why is UTF-8 Unicode mandatory for e-Nothi, iBAS++, and Core Banking Web Portals in Bangladesh?',
      solution: `1. Technical Comparison:
- ASCII (7-bit / 8-bit): Encodes 128/256 English characters and control codes; has no native support for Bangla script.
- ANSI Bangla (e.g., SutonnyMJ): Overwrites standard ASCII character slots (128–255) with Bangla font glyphs. If the viewing device lacks the SutonnyMJ font, the document displays unreadable English/symbol gibberish.
- UTF-8 Unicode (e.g., Nikosh, Kalpurush): Uses the globally standardized Bengali Unicode block (U+0980 to U+09FF).

2. Why UTF-8 Unicode is Mandatory in e-Nothi & Banking:
- Cross-Platform Readability: Renders identically on Windows, Linux, Android, iOS, and web browsers without font-mapping corruption.
- Database Search & Indexing: Enables accurate SQL WHERE/LIKE searching, sorting, and national NID/e-KYC verification.`
    },
    {
      questionType: 'Written',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: 20,
      questionText: `A bank branch purchased 8 desktop computers and 4 laser printers for Tk. ${(440000 + (paperIndex % 3) * 40000).toLocaleString()}. At the same rate, another branch purchased 5 desktop computers and 3 laser printers for Tk. ${(285000 + (paperIndex % 3) * 25000).toLocaleString()}. Find the unit price of 1 desktop computer and 1 laser printer.`,
      solution: `Step-by-Step Algebraic Solution:
1. Let the unit price of 1 desktop computer = Tk. x and 1 laser printer = Tk. y.
2. Forming the two simultaneous equations:
   8x + 4y = ${440000 + (paperIndex % 3) * 40000}  =>  2x + y = ${110000 + (paperIndex % 3) * 10000}  --- (i)
   5x + 3y = ${285000 + (paperIndex % 3) * 25000}  --- (ii)
3. Substituting y = ${110000 + (paperIndex % 3) * 10000} - 2x into (ii):
   5x + 3(${110000 + (paperIndex % 3) * 10000} - 2x) = ${285000 + (paperIndex % 3) * 25000}
   x = Tk. ${45000 + (paperIndex % 3) * 5000} (1 Desktop Computer)
   y = Tk. 20,000 (1 Laser Printer).`
    },
    {
      questionType: 'Written',
      subject: 'Translation (English ↔ Bangla)',
      marks: 20,
      questionText:
        'Draft a bilingual Official Memorandum (Bangla & English) instructing all branch Computer Operators to complete daily Core Banking End-of-Day (EOD) voucher reconciliation and upload encrypted off-site backups before closing the workstation.',
      solution: `Official Memorandum (English):
OFFICE MEMORANDUM
Subject: Mandatory Daily CBS End-of-Day (EOD) Reconciliation and Off-Site Encrypted Backup.
All Computer Operators are hereby instructed to verify daily transaction scrolls against physical vouchers prior to running the Core Banking System (CBS) End-of-Day (EOD) batch. Furthermore, operators must ensure that the encrypted daily database backup is uploaded to the Head Office Disaster Recovery (DR) server before shutting down branch terminals.

অফিস স্মারক (বাংলা):
অফিস স্মারক
বিষয়: দৈনিক কোর ব্যাংকিং (CBS) ডে-এন্ড (EOD) ভাউচার সমন্বয় এবং এনক্রিপ্টেড ব্যাকআপ সংরক্ষণ প্রসঙ্গে।
সকল কম্পিউটার অপারেটরকে নির্দেশ প্রদান করা যাচ্ছে যে, প্রতিদিন কোর ব্যাংকিং সিস্টেমের ডে-এন্ড (EOD) প্রক্রিয়া শুরুর পূর্বেই দৈনিক লেনদেনের স্ক্রল ও মূল ভাউচারসমূহ পুঙ্খানুপুঙ্খভাবে যাচাই করতে হবে। এছাড়া ওয়ার্কস্টেশন বন্ধ করার পূর্বে দৈনিক ডাটাবেজের এনক্রিপ্টেড ব্যাকআপ প্রধান কার্যালয়ের ডিজাস্টার রিকভারি (DR) সার্ভারে আপলোড নিশ্চিত করতে হবে।`
    }
  ];

  const seenTexts = new Set(existingWritten.map(q => q.questionText.trim()));
  const combined = [...existingWritten];

  for (const item of supplementaryWritten) {
    if (combined.length >= 5) break;
    if (!seenTexts.has(item.questionText.trim())) {
      seenTexts.add(item.questionText.trim());
      combined.push({
        id: `${paper.paperId}-wrt-${String(combined.length + 1).padStart(2, '0')}`,
        paperId: paper.paperId,
        questionPaperCode: paper.questionPaperCode,
        questionNo: `Written-${String(combined.length + 1).padStart(2, '0')}`,
        ...item
      });
    }
  }

  return combined.map((q, idx) => ({
    ...q,
    id: `${paper.paperId}-wrt-${String(idx + 1).padStart(2, '0')}`,
    paperId: paper.paperId,
    questionPaperCode: paper.questionPaperCode,
    questionNo: `Written-${String(idx + 1).padStart(2, '0')}`
  }));
}
