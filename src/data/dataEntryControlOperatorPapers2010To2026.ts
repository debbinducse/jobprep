import type { NonItExamPaper, NonItQuestionItem, NonItSubject } from './bankNonItQuestions';

interface DecoMcqSeed {
  subject: NonItSubject;
  questionText: string;
  options: string[];
  correctAnswer: string;
  solution: string;
}

/**
 * ============================================================================
 * 1. BANGLA LANGUAGE, GRAMMAR, LITERATURE & UNICODE/OFFICIAL TERMINOLOGY POOL
 *    (20 Questions per Paper: MCQ-001 to MCQ-020)
 * ============================================================================
 */
const decoBanglaMasterPool: DecoMcqSeed[] = [
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
    questionText: '‘উদ্যোগ’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?',
    options: ['A) উৎ + যোগ', 'B) উদ + যোগ', 'C) উঃ + যোগ', 'D) উদি + যোগ'],
    correctAnswer: 'A) উৎ + যোগ',
    solution: `ব্যঞ্জনসন্ধির নিয়মানুসারে ত্/দ্-এর পরে ‘য’ থাকলে ত্/দ্ স্থানে ‘দ্’ হয়: উৎ + যোগ = উদ্যোগ। সঠিক উত্তর: A) উৎ + যোগ।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘জ্ঞ’ যুক্তবর্ণটি কোন কোন বর্ণের সমন্বয়ে গঠিত?',
    options: ['A) জ্ + ঞ', 'B) ঞ + জ', 'C) গ্ + ঞ', 'D) জ্ + য'],
    correctAnswer: 'A) জ্ + ঞ',
    solution: `‘জ্ঞ’ (যেমন: বিজ্ঞান, জ্ঞান) যুক্তবর্ণটি জ্ + ঞ (বিজয় কিবোর্ডে U + G + I) যোগে গঠিত। সঠিক উত্তর: A) জ্ + ঞ।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘ক্ষ’ যুক্তবর্ণটি কোন দুটি বর্ণের সমষ্টি?',
    options: ['A) ক্ + ষ', 'B) ক্ + খ', 'C) খ্ + ষ', 'D) ক্ + ছ'],
    correctAnswer: 'A) ক্ + ষ',
    solution: `‘ক্ষ’ (যেমন: শিক্ষা, পরীক্ষা) যুক্তবর্ণটি ক্ + ষ (বিজয় কিবোর্ডে J + G + Shift + N) যোগে গঠিত। সঠিক উত্তর: A) ক্ + ষ।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘হ্ম’ (যেমন: ব্রহ্মপুত্র, ব্রাহ্মণ) যুক্তবর্ণের সঠিক বিশ্লেষণ কোনটি?',
    options: ['A) হ্ + ম', 'B) ম্ + হ', 'C) ক্ষ্ + ম', 'D) হ্ + ণ'],
    correctAnswer: 'A) হ্ + ম',
    solution: `‘হ্ম’ যুক্তবর্ণটি হ্ + ম (বিজয় কিবোর্ডে I + G + M) এর সমন্বয়ে গঠিত। সঠিক উত্তর: A) হ্ + ম।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘ষ্ণ’ (যেমন: কৃষ্ণ, উষ্ণ, তৃষ্ণা) যুক্তবর্ণটি কীভাবে গঠিত?',
    options: ['A) ষ + ণ (ষ + ্ + ণ)', 'B) ষ + ন', 'C) শ + ণ', 'D) স + ণ'],
    correctAnswer: 'A) ষ + ণ (ষ + ্ + ণ)',
    solution: `মূর্ধন্য-ষ এর পর মূর্ধন্য-ণ যুক্ত হয়ে ‘ষ্ণ’ (ষ + ্ + ণ) গঠিত হয়। সঠিক উত্তর: A) ষ + ণ (ষ + ্ + ণ)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'বাংলা বর্ণমালায় মাত্রাহীন বর্ণ কয়টি?',
    options: ['A) ৮টি', 'B) ১০টি', 'C) ১১টি', 'D) ১২টি'],
    correctAnswer: 'B) ১০টি',
    solution: `বাংলা বর্ণমালায় মোট বর্ণ ৫০টি। এর মধ্যে পূর্ণমাত্রা ৩২টি, অর্ধমাত্রা ৮টি এবং মাত্রাহীন বর্ণ ১০টি (স্বরবর্ণ ৪টি: এ, ঐ, ও, ঔ এবং ব্যঞ্জনবর্ণ ৬টি: ঙ, ঞ, ৎ, ং, ঃ, ঁ)। সঠিক উত্তর: B) ১০টি।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'বাংলা একাডেমি আধুনিক বাংলা বানান নিয়ম অনুযায়ী নিচের কোন বানানটি শুদ্ধ?',
    options: ['A) স্বায়ত্তশাসন', 'B) স্বায়ত্বশাসন', 'C) সায়ত্তশাসন', 'D) স্বায়ত্তশ্বাসন'],
    correctAnswer: 'A) স্বায়ত্তশাসন',
    solution: `স্ব + আয়ত্ত + শাসন = স্বায়ত্তশাসন (ত-এ ত ফলা, ব ফলা নয়)। সঠিক উত্তর: A) স্বায়ত্তশাসন।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘উপাত্ত’ (Data) এবং ‘তথ্য’ (Information)-এর মধ্যে মূল সম্পর্ক কী?',
    options: [
      'A) সুশৃঙ্খলভাবে প্রক্রিয়াকৃত উপাত্তই হলো তথ্য',
      'B) তথ্যের কাঁচামালকে উপাত্ত বলা হয় না',
      'C) উপাত্ত ও তথ্য সম্পূর্ণ বিপরীত শব্দ',
      'D) উপাত্ত কেবল মুদ্রিত বইয়ে থাকে'
    ],
    correctAnswer: 'A) সুশৃঙ্খলভাবে প্রক্রিয়াকৃত উপাত্তই হলো তথ্য',
    solution: `সুনির্দিষ্ট ফলাফল পাওয়ার জন্য ব্যবহৃত অগোছালো কাঁচামাল বা Raw Facts হলো উপাত্ত (Data), এবং প্রক্রিয়াকরণের পর অর্থপূর্ণ রূপই হলো তথ্য (Information)। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘নথি’ (File/Record) ও ‘স্মারক’ (Memorandum) শব্দ দুটি দাপ্তরিক বাংলায় কোন অর্থে ব্যবহৃত হয়?',
    options: [
      'A) দাপ্তরিক দলিলপত্রের সংকলন ও পত্রের সূত্র নম্বর',
      'B) ব্যক্তিগত ডায়েরি ও ভ্রমণকাহিনি',
      'C) সাহিত্য সাময়িকী ও উপন্যাস',
      'D) কেবল আদালতের রায়'
    ],
    correctAnswer: 'A) দাপ্তরিক দলিলপত্রের সংকলন ও পত্রের সূত্র নম্বর',
    solution: `সরকারি ও ব্যাংকিং দপ্তরে ফাইল বা রেকর্ড সংকলনকে ‘নথি’ (বর্তমানে ই-নথি) এবং দাপ্তরিক চিঠিপত্রের সূত্রকে ‘স্মারক’ বলা হয়। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘সঞ্চয়’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?',
    options: ['A) সম্ + চয়', 'B) সং + চয়', 'C) সন + চয়', 'D) সঞ + চয়'],
    correctAnswer: 'A) সম্ + চয়',
    solution: `ম্-এর পর চ-বর্গীয় ধ্বনি থাকলে ম্ স্থানে চ-বর্গীয় নাসিক্য ধ্বনি ‘ঞ’ হয়: সম্ + চয় = সঞ্চয়। সঠিক উত্তর: A) সম্ + চয়।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘গবাক্ষ’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?',
    options: ['A) গো + অক্ষ', 'B) গব + অক্ষ', 'C) গাভী + অক্ষ', 'D) গবা + অক্ষ'],
    correctAnswer: 'A) গো + অক্ষ',
    solution: `নিপাতনে সিদ্ধ স্বরসন্ধি: গো + অক্ষ = গবাক্ষ (অর্থ: জানালা)। সঠিক উত্তর: A) গো + অক্ষ।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘আশীর্বাদ’ ও ‘প্রতিযোগিতা’ শব্দ দুটির শুদ্ধ বানান কোনটি?',
    options: [
      'A) আশীর্বাদ, প্রতিযোগিতা',
      'B) আশির্বাদ, প্রতিযোগীতা',
      'C) আশীর্বাদ, প্রতিযোগীতা',
      'D) আর্শীবাদ, প্রতিযোগিতা'
    ],
    correctAnswer: 'A) আশীর্বাদ, প্রতিযোগিতা',
    solution: `আশীঃ + বাদ = আশীর্বাদ (শ-এ দীর্ঘ-ঈ কার ও ব-এ রেফ); প্রতিযোগী + তা = প্রতিযোগিতা (‘তা’ প্রত্যয় যুক্ত হলে শব্দের শেষের দীর্ঘ-ঈ হ্রস্ব-ই কারে রূপান্তরিত হয়)। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘কড়ায় গণ্ডায়’ বাগধারাটির সঠিক অর্থ কী?',
    options: [
      'A) সম্পূর্ণ বা পাই-পাই করে পুরো হিসাব আদায়',
      'B) সামান্য পরিমাণে ছাড় দেওয়া',
      'C) হিসাব ছাড়া ব্যয় করা',
      'D) অনুমানের ওপর নির্ভর করা'
    ],
    correctAnswer: 'A) সম্পূর্ণ বা পাই-পাই করে পুরো হিসাব আদায়',
    solution: `‘কড়ায় গণ্ডায়’ বাগধারার অর্থ সম্পূর্ণ বা পাই-পাই করে পুরো হিসাব বুঝে নেওয়া। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘যার কোনো উপায় নেই’ — এক কথায় প্রকাশ করলে কী হবে?',
    options: ['A) নিরুপায়', 'B) নাচার', 'C) অসহায়', 'D) উপায়হীন'],
    correctAnswer: 'A) নিরুপায়',
    solution: `যার কোনো উপায় নেই = নিরুপায় (নিঃ + উপায়)। সঠিক উত্তর: A) নিরুপায়।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘তিলে তৈল হয়’ — এখানে ‘তিলে’ কোন কারকে কোন বিভক্তি?',
    options: [
      'A) অপাদানে সপ্তমী',
      'B) অধিকরণে সপ্তমী',
      'C) করণে সপ্তমী',
      'D) কর্মে সপ্তমী'
    ],
    correctAnswer: 'A) অপাদানে সপ্তমী',
    solution: `যা থেকে কিছু উৎপন্ন বা নিঃসৃত হয় তা অপাদান কারক (যেমন: তিল থেকে তৈল হয়); কিন্তু ‘তিলে তেল আছে’ বললে অধিকরণে সপ্তমী হয়। সঠিক উত্তর: A) অপাদানে সপ্তমী।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘সোনালি’ ও ‘রুপালি’ শব্দ দুটিতে কোন প্রত্যয় যুক্ত হয়েছে?',
    options: ['A) আলি প্রত্যয়', 'B) লি প্রত্যয়', 'C) ই প্রত্যয়', 'D) ঈ প্রত্যয়'],
    correctAnswer: 'A) আলি প্রত্যয়',
    solution: `সোনা + আলি = সোনালি; রুপা + আলি = রুপালি (বাংলা তদ্ধিত প্রত্যয়)। আধুনিক বানান রীতি অনুযায়ী এগুলোতে হ্রস্ব-ই কার ব্যবহৃত হয়। সঠিক উত্তর: A) আলি প্রত্যয়।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘মহাকুমা’ ও ‘দপ্তর’ শব্দ দুটি কোন ভাষা থেকে বাংলা ভাষায় এসেছে?',
    options: ['A) আরবি ও ফারসি', 'B) পর্তুগিজ', 'C) ফরাসি', 'D) জাপানি'],
    correctAnswer: 'A) আরবি ও ফারসি',
    solution: `প্রশাসনিক ও দাপ্তরিক পরিভাষার ‘মহকুমা’, ‘নগদ’, ‘হিসাব’, ‘দপ্তর’ প্রভৃতি শব্দ আরবি ও ফারসি ভাষা থেকে আগত। সঠিক উত্তর: A) আরবি ও ফারসি।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'বাংলা ভাষায় প্রথম যতিচিহ্ন (Punctuation) সার্থকভাবে ব্যবহার করেন কে?',
    options: [
      'A) ঈশ্বরচন্দ্র বিদ্যাসাগর',
      'B) বঙ্কিমচন্দ্র চট্টোপাধ্যায়',
      'C) রাজা রামমোহন রায়',
      'D) প্রমথ চৌধুরী'
    ],
    correctAnswer: 'A) ঈশ্বরচন্দ্র বিদ্যাসাগর',
    solution: `ঈশ্বরচন্দ্র বিদ্যাসাগর ১৮৪৭ সালে তাঁর ‘বেতাল পঞ্চবিংশতি’ গ্রন্থে সর্বপ্রথম বাংলা গদ্যে যতিচিহ্নের সার্থক প্রয়োগ করেন, এজন্য তাঁকে বাংলা গদ্যের জনক বলা হয়। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'রবীন্দ্রনাথ ঠাকুর তাঁর কোন নাটকটি কাজী নজরুল ইসলামকে উৎসর্গ করেছিলেন?',
    options: ['A) বসন্ত', 'B) রক্তকরবী', 'C) ডাকঘর', 'D) তাসের দেশ'],
    correctAnswer: 'A) বসন্ত',
    solution: `১৯২৩ সালে রবীন্দ্রনাথ ঠাকুর তাঁর ‘বসন্ত’ গীতিনাট্যটি কারাবন্দি কবি কাজী নজরুল ইসলামকে উৎসর্গ করেছিলেন। সঠিক উত্তর: A) বসন্ত।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'ভাষা আন্দোলনের পটভূমিতে রচিত মুনীর চৌধুরীর বিখ্যাত নাটক ‘কবর’ কত সালে এবং কোথায় রচিত হয়?',
    options: [
      'A) ১৯৫৩ সালে ঢাকা কেন্দ্রীয় কারাগারে',
      'B) ১৯৫২ সালে ঢাকা বিশ্ববিদ্যালয়ে',
      'C) ১৯৫৪ সালে বাংলা একাডেমিতে',
      'D) ১৯৫৬ সালে চট্টগ্রাম কলেজে'
    ],
    correctAnswer: 'A) ১৯৫৩ সালে ঢাকা কেন্দ্রীয় কারাগারে',
    solution: `শহীদ বুদ্ধিজীবী মুনীর চৌধুরী ১৯৫৩ সালে কারাবন্দি অবস্থায় ঢাকা কেন্দ্রীয় কারাগারে বসে ভাষা আন্দোলনের পটভূমিতে ‘কবর’ নাটকটি রচনা করেন। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘সংশপ্তক’ ও ‘সারেং বউ’ উপন্যাস দুটির রচয়িতা কে?',
    options: ['A) শহীদুল্লাহ কায়সার', 'B) জহির রায়হান', 'C) শওকত ওসমান', 'D) সৈয়দ ওয়ালীউল্লাহ'],
    correctAnswer: 'A) শহীদুল্লাহ কায়সার',
    solution: `শহীদ বুদ্ধিজীবী ও কথাশিল্পী শহীদুল্লাহ কায়সার রচিত কালজয়ী উপন্যাস হলো ‘সারেং বউ’ (১৯৬২) এবং ‘সংশপ্তক’ (১৯৬৫)। সঠিক উত্তর: A) শহীদুল্লাহ কায়সার।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘আরেক ফাল্গুন’ (ভাষা আন্দোলনভিত্তিক উপন্যাস) এবং ‘জীবন থেকে নেয়া’ চলচ্চিত্রের রচয়িতা কে?',
    options: ['A) জহির রায়হান', 'B) আলমগীর কবির', 'C) খান আতাউর রহমান', 'D) হুমায়ূন আহমেদ'],
    correctAnswer: 'A) জহির রায়হান',
    solution: `জহির রায়হান ভাষা আন্দোলনের পটভূমিতে প্রথম উপন্যাস ‘আরেক ফাল্গুন’ এবং স্বাধিকার আন্দোলনের রূপক চলচ্চিত্র ‘জীবন থেকে নেয়া’ নির্মাণ করেন। সঠিক উত্তর: A) জহির রায়হান।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘অসমাপ্ত আত্মজীবনী’ ও ‘কারাগারের রোজনামচা’ গ্রন্থ দুটির রচয়িতা কে?',
    options: [
      'A) বঙ্গবন্ধু শেখ মুজিবুর রহমান',
      'B) তাজউদ্দীন আহমদ',
      'C) মাওলানা আবদুল হামিদ খান ভাসানী',
      'D) হোসেন শহীদ সোহরাওয়ার্দী'
    ],
    correctAnswer: 'A) বঙ্গবন্ধু শেখ মুজিবুর রহমান',
    solution: `জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের লেখা আত্মজীবনীমূলক গ্রন্থগুলো হলো ‘অসমাপ্ত আত্মজীবনী’ (২০১২), ‘কারাগারের রোজনামচা’ (২০১৭) এবং ‘আমার দেখা নয়াচীন’ (২০২০)। সঠিক উত্তর: A)।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'নিচের কোন শব্দটি ‘সূর্য’ শব্দের সমার্থক শব্দ নয়?',
    options: ['A) অর্ক', 'B) তপন', 'C) অর্ণব', 'D) মিহির'],
    correctAnswer: 'C) অর্ণব',
    solution: `‘অর্ণব’ শব্দের অর্থ সমুদ্র বা সাগর। অন্যদিকে অর্ক, তপন, মিহির, আদিত্য, সবিতা, ভানু, মার্তণ্ড হলো সূর্যের সমার্থক শব্দ। সঠিক উত্তর: C) অর্ণব।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘সৌম্য’ শব্দের সঠিক বিপরীতার্থক শব্দ কোনটি?',
    options: ['A) উগ্র', 'B) শান্ত', 'C) সুন্দর', 'D) কোমল'],
    correctAnswer: 'A) উগ্র',
    solution: `‘সৌম্য’ অর্থ শান্ত বা প্রশান্ত; এর বিপরীতার্থক শব্দ ‘উগ্র’। সঠিক উত্তর: A) উগ্র।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘বীণাপাণি’ (বীণা পাণিতে যার) এবং ‘দশানন’ কোন সমাসের উদাহরণ?',
    options: ['A) বহুব্রীহি সমাস', 'B) কর্মধারয় সমাস', 'C) দ্বিগু সমাস', 'D) অব্যয়ীভাব সমাস'],
    correctAnswer: 'A) বহুব্রীহি সমাস',
    solution: `যে সমাসে সমস্যমান পদগুলোর কোনোটির অর্থ না বুঝিয়ে অন্য কোনো তৃতীয় ব্যক্তি বা বস্তুকে বোঝায় তাকে বহুব্রীহি সমাস বলে (যেমন: বীণাপাণি = সরস্বতী, দশানন = রাবণ)। সঠিক উত্তর: A) বহুব্রীহি সমাস।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: '‘চৌরাস্তা’ (চার রাস্তার সমাহার) ও ‘শতাব্দী’ কোন সমাসের উদাহরণ?',
    options: ['A) দ্বিগু সমাস', 'B) দ্বন্দ্ব সমাস', 'C) বহুব্রীহি সমাস', 'D) তৎপুরুষ সমাস'],
    correctAnswer: 'A) দ্বিগু সমাস',
    solution: `সংখ্যাবাচক শব্দ পূর্বে বসে সমাহার বা সমষ্টি বোঝালে তাকে দ্বিগু সমাস বলে (চৌরাস্তা, শতাব্দী, ত্রিফলা, পঞ্চবটী)। সঠিক উত্তর: A) দ্বিগু সমাস।`
  },
  {
    subject: 'Bangla Language & Literature',
    questionText: 'দাপ্তরিক অনুবাদে “Verify the source data before batch entry”-এর সর্বোত্তম বাংলা অনুবাদ কোনটি?',
    options: [
      'A) ব্যাচ এন্ট্রির পূর্বে মূল উপাত্ত যাচাই করুন',
      'B) ব্যাচ এন্ট্রির পরে ফাইল মুছে ফেলুন',
      'C) মূল উপাত্ত ছাড়া এন্ট্রি সম্পন্ন করুন',
      'D) ডেটাবেস সার্ভার বন্ধ রাখুন'
    ],
    correctAnswer: 'A) ব্যাচ এন্ট্রির পূর্বে মূল উপাত্ত যাচাই করুন',
    solution: `Source data = মূল উপাত্ত/উৎস উপাত্ত; Verify = যাচাই করা; Before batch entry = ব্যাচ এন্ট্রির পূর্বে। সঠিক উত্তর: A)।`
  }
];

/**
 * ============================================================================
 * 2. ENGLISH LANGUAGE, GRAMMAR & DATA OPERATIONS VOCABULARY POOL
 *    (20 Questions per Paper: MCQ-021 to MCQ-040)
 * ============================================================================
 */
const decoEnglishMasterPool: DecoMcqSeed[] = [
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Identify the correct spelling frequently tested in Data Entry & Bank Recruitment exams:',
    options: ['A) Questionnaire', 'B) Questionaire', 'C) Questionnare', 'D) Questionnair'],
    correctAnswer: 'A) Questionnaire',
    solution: `The correct spelling has double 'n' and ends with '-aire': Q-u-e-s-t-i-o-n-n-a-i-r-e. Correct Answer: A) Questionnaire.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correctly spelled word:',
    options: ['A) Maintenance', 'B) Maintainance', 'C) Maintenence', 'D) Maintanance'],
    correctAnswer: 'A) Maintenance',
    solution: `Although derived from 'maintain', the noun form is spelled M-a-i-n-t-e-n-a-n-c-e. Correct Answer: A) Maintenance.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Fill in the blank: "Neither the Data Control Supervisor nor the operators ___ present in the server room yesterday."',
    options: ['A) was', 'B) were', 'C) is', 'D) has been'],
    correctAnswer: 'B) were',
    solution: `With 'Neither ... nor', the verb agrees with the nearer subject ('the operators', plural), and 'yesterday' requires past tense -> 'were'. Correct Answer: B) were.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct passive voice of: "The operator has verified all the customer records."',
    options: [
      'A) All the customer records have been verified by the operator.',
      'B) All the customer records has been verified by the operator.',
      'C) All the customer records were verified by the operator.',
      'D) All the customer records are being verified by the operator.'
    ],
    correctAnswer: 'A) All the customer records have been verified by the operator.',
    solution: `Present Perfect Active (has/have + V3) converts to Passive as (have/has + been + V3). Since 'All the customer records' is plural, we use 'have been verified'. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Select the appropriate preposition: "Every Data Entry Operator must abide ___ the information security guidelines of Bangladesh Bank."',
    options: ['A) by', 'B) with', 'C) to', 'D) in'],
    correctAnswer: 'A) by',
    solution: `'Abide by' is a fixed phrasal verb meaning to comply with or follow rules/guidelines. Correct Answer: A) by.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Fill in the blank with the right preposition: "The new software is compatible ___ both Windows 11 and Linux servers."',
    options: ['A) with', 'B) to', 'C) for', 'D) on'],
    correctAnswer: 'A) with',
    solution: `'Compatible with' means capable of existing or operating together without conflict. Correct Answer: A) with.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct verb form: "The number of digitized tax files ___ increased significantly this fiscal year."',
    options: ['A) has', 'B) have', 'C) are', 'D) were'],
    correctAnswer: 'A) has',
    solution: `'The number of + plural noun' takes a singular verb ('has'), whereas 'A number of + plural noun' takes a plural verb ('have'). Correct Answer: A) has.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What is the synonym of the word "METICULOUS" (a key quality of a Data Control Operator)?',
    options: [
      'A) Extremely careful and precise about details',
      'B) Careless and hasty',
      'C) Ambiguous',
      'D) Negligent'
    ],
    correctAnswer: 'A) Extremely careful and precise about details',
    solution: `'Meticulous' means showing great attention to detail; very thorough and accurate. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What is the antonym of the word "REDUNDANT" in database and text editing?',
    options: ['A) Essential / Concise', 'B) Repetitive', 'C) Duplicate', 'D) Superfluous'],
    correctAnswer: 'A) Essential / Concise',
    solution: `'Redundant' means unnecessary or duplicated; its antonym is 'Essential', 'Necessary', or 'Concise'. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What does the idiom "BY LEAPS AND BOUNDS" mean?',
    options: ['A) Very rapidly', 'B) Very slowly', 'C) Secretly', 'D) Reluctantly'],
    correctAnswer: 'A) Very rapidly',
    solution: `'By leaps and bounds' means with startlingly rapid progress. Correct Answer: A) Very rapidly.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Complete the conditional sentence: "If the operator had backed up the database before the power outage, the branch ___ any transaction logs."',
    options: [
      'A) would not have lost',
      'B) will not lose',
      'C) would not lose',
      'D) did not lost'
    ],
    correctAnswer: 'A) would not have lost',
    solution: `Third Conditional structure: If + Past Perfect (had + V3), main clause takes 'would/could/might + have + V3' ('would not have lost'). Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct indirect speech: The supervisor said to the operator, "Do not share your CBS login password with anyone."',
    options: [
      'A) The supervisor instructed the operator not to share his CBS login password with anyone.',
      'B) The supervisor said to the operator to not sharing password.',
      'C) The supervisor asked the operator if he shared his password.',
      'D) The supervisor told that do not share password.'
    ],
    correctAnswer: 'A) The supervisor instructed the operator not to share his CBS login password with anyone.',
    solution: `Negative imperative sentences convert to indirect speech using 'instructed/advised/ordered + object + not to + base verb'. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'One-word substitution: "A person or system that compiles and verifies statistical data for official records" is related to:',
    options: ['A) Enumeration / Tabulation', 'B) Calligraphy', 'C) Cartography', 'D) Lexicography'],
    correctAnswer: 'A) Enumeration / Tabulation',
    solution: `Tabulation is the systematic arrangement of data into rows and columns; Enumeration is counting/recording census or survey data. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Identify the correct sentence:',
    options: [
      'A) One of the computers in the lab is out of order.',
      'B) One of the computers in the lab are out of order.',
      'C) One of the computer in the lab is out of order.',
      'D) One of the computers in the lab were out of order.'
    ],
    correctAnswer: 'A) One of the computers in the lab is out of order.',
    solution: `'One of the' is always followed by a plural noun ('computers') and a singular verb ('is'). Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Fill in the blank: "It is high time we ___ manual ledger books with automated database software."',
    options: ['A) replaced', 'B) replace', 'C) have replaced', 'D) will replace'],
    correctAnswer: 'A) replaced',
    solution: `After 'It is time / It is high time + subject', the verb must be in the Past Simple tense ('replaced'). Correct Answer: A) replaced.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Which word is closest in meaning to "DISCREPANCY" (e.g., a discrepancy between voucher amount and entered amount)?',
    options: ['A) Inconsistency / Difference', 'B) Harmony', 'C) Agreement', 'D) Precision'],
    correctAnswer: 'A) Inconsistency / Difference',
    solution: `A 'discrepancy' is a lack of compatibility or an unexpected difference between two figures or facts that should match. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Select the correct preposition: "The Data Control Officer is entrusted ___ the responsibility of verifying daily batch totals."',
    options: ['A) with', 'B) to', 'C) at', 'D) by'],
    correctAnswer: 'A) with',
    solution: `A person is 'entrusted with' a task/duty (or a task is 'entrusted to' a person). Correct Answer: A) with.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct spelling:',
    options: ['A) Miscellaneous', 'B) Miscelaneous', 'C) Miscellanous', 'D) Misscellaneous'],
    correctAnswer: 'A) Miscellaneous',
    solution: `The correct spelling is M-i-s-c-e-l-l-a-n-e-o-u-s. Correct Answer: A) Miscellaneous.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Fill in the blank: "No sooner had the operator pressed Ctrl + S ___ the UPS battery alarm sounded."',
    options: ['A) than', 'B) when', 'C) then', 'D) before'],
    correctAnswer: 'A) than',
    solution: `Correlative conjunction rule: 'No sooner had ... than' (whereas 'Hardly/Scarcely had ... when'). Correct Answer: A) than.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What is the passive form of: "Who uploaded the CSV file to the central server?"',
    options: [
      'A) By whom was the CSV file uploaded to the central server?',
      'B) By whom the CSV file was uploaded to the central server?',
      'C) Who was uploaded the CSV file?',
      'D) Whom was the CSV file uploaded by to the server?'
    ],
    correctAnswer: 'A) By whom was the CSV file uploaded to the central server?',
    solution: `Interrogative sentences starting with 'Who' in simple past convert to 'By whom + was/were + subject + V3?'. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What is the meaning of the phrase "NULL AND VOID"?',
    options: ['A) Legally invalid and having no binding force', 'B) Valid and permanent', 'C) Partially approved', 'D) Confidential'],
    correctAnswer: 'A) Legally invalid and having no binding force',
    solution: `'Null and void' means having no legal force; invalid or cancelled. Correct Answer: A).`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Choose the correct article: "He is ___ honors graduate in Computer Science and works at ___ utility company."',
    options: ['A) an, a', 'B) a, an', 'C) the, an', 'D) an, an'],
    correctAnswer: 'A) an, a',
    solution: `'Honors' begins with a silent 'h' (vowel sound -> 'an'), while 'utility' begins with a consonant 'yu' sound (-> 'a'). Correct Answer: A) an, a.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'What is the noun form of the verb "VERIFY"?',
    options: ['A) Verification', 'B) Verifiable', 'C) Verifyingly', 'D) Verifierly'],
    correctAnswer: 'A) Verification',
    solution: `Verb: Verify; Noun: Verification; Adjective: Verifiable / Verified. Correct Answer: A) Verification.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Select the correct word: "Unauthorized personnel are strictly prohibited ___ entering the Data Center."',
    options: ['A) from', 'B) to', 'C) in', 'D) for'],
    correctAnswer: 'A) from',
    solution: `'Prohibit from + gerund (-ing)' is the standard grammatical construction. Correct Answer: A) from.`
  },
  {
    subject: 'English Language & Focus Writing',
    questionText: 'Identify the part of speech of the underlined word: "Please <u>audit</u> the batch report before submission."',
    options: ['A) Verb', 'B) Noun', 'C) Adjective', 'D) Adverb'],
    correctAnswer: 'A) Verb',
    solution: `In the imperative clause 'Please audit the batch report', 'audit' functions as a transitive action verb. Correct Answer: A) Verb.`
  }
];

/**
 * ============================================================================
 * 3. GENERAL KNOWLEDGE, BANKING AUTOMATION & E-GOVERNANCE POOL
 *    (15 Questions per Paper: MCQ-061 to MCQ-075)
 * ============================================================================
 */
const decoGkAndBankingPool: DecoMcqSeed[] = [
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What does BACH stand for in Bangladesh Bank’s automated payment infrastructure?',
    options: [
      'A) Bangladesh Automated Clearing House',
      'B) Banking Account Control Hub',
      'C) Bangladesh Association of Clearing Houses',
      'D) Bank Automated Credit Holding'
    ],
    correctAnswer: 'A) Bangladesh Automated Clearing House',
    solution: `BACH stands for Bangladesh Automated Clearing House, launched in October 2010, comprising BACPS (Automated Cheque Processing) and BEFTN (Electronic Funds Transfer). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What does RTGS stand for in high-value interbank electronic banking in Bangladesh?',
    options: [
      'A) Real-Time Gross Settlement',
      'B) Rapid Transfer and General System',
      'C) Regional Transaction Gateway Service',
      'D) Real-Time General Clearing'
    ],
    correctAnswer: 'A) Real-Time Gross Settlement',
    solution: `RTGS stands for Real-Time Gross Settlement, introduced by Bangladesh Bank in October 2015 for instant settlement of high-value interbank transactions (BDT 1,00,000 and above). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What does BEFTN stand for in bulk salary, dividend, and EFT data processing?',
    options: [
      'A) Bangladesh Electronic Funds Transfer Network',
      'B) Bank Electronic File Transfer Node',
      'C) Bangladesh External Financial Transaction Network',
      'D) Binary Electronic Fund Terminal Network'
    ],
    correctAnswer: 'A) Bangladesh Electronic Funds Transfer Network',
    solution: `BEFTN stands for Bangladesh Electronic Funds Transfer Network, used for batch electronic credit/debit transfers such as government salaries, EFT pensions, and utility bills. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What does NPSB stand for in Bangladesh Bank’s interoperable ATM, POS, and Internet Banking switch?',
    options: [
      'A) National Payment Switch Bangladesh',
      'B) National Portal for Smart Banking',
      'C) Network Protocol for Scheduled Banks',
      'D) National Processing Server Board'
    ],
    correctAnswer: 'A) National Payment Switch Bangladesh',
    solution: `NPSB (National Payment Switch Bangladesh), launched in December 2012, enables instant interbank ATM, POS, and IBFT (Internet Banking Fund Transfer) transactions. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What does iBAS++ stand for in the Government of Bangladesh’s public financial management system?',
    options: [
      'A) Integrated Budget and Accounting System',
      'B) International Banking and Auditing Software',
      'C) Internal Balance and Account Settlement',
      'D) Integrated Banking Automation System'
    ],
    correctAnswer: 'A) Integrated Budget and Accounting System',
    solution: `iBAS++ stands for Integrated Budget and Accounting System, operated by the Finance Division (Ministry of Finance) and CGA for government budget execution, bill submission, and G2P EFT payments. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Where is Bangladesh’s first Tier-IV National Data Center (Four-Tier NDC) located?',
    options: [
      'A) Kaliakoir Hi-Tech Park, Gazipur',
      'B) Agargaon ICT Tower, Dhaka',
      'C) Jashore Sheikh Hasina Software Technology Park',
      'D) Sylhet Electronic City'
    ],
    correctAnswer: 'A) Kaliakoir Hi-Tech Park, Gazipur',
    solution: `The Tier-IV National Data Center (operated by BDCCL with 99.995% fault-tolerant uptime) is located at Bangabandhu Hi-Tech City, Kaliakoir, Gazipur. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Under which Presidential Order was Bangladesh Bank established after the Liberation War?',
    options: [
      'A) Bangladesh Bank Order, 1972 (President’s Order No. 127 of 1972)',
      'B) Bank Company Act, 1991',
      'C) Negotiable Instruments Act, 1881',
      'D) Financial Institutions Act, 1993'
    ],
    correctAnswer: 'A) Bangladesh Bank Order, 1972 (President’s Order No. 127 of 1972)',
    solution: `Bangladesh Bank was established under the Bangladesh Bank Order, 1972 (P.O. No. 127 of 1972), effective retroactively from 16 December 1971. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'How many digits are there in a modern Smart National Identity (Smart NID) card number issued by the Election Commission of Bangladesh?',
    options: ['A) 10 digits (or 17 digits in legacy birth-year prefixed format)', 'B) 8 digits', 'C) 12 digits', 'D) 15 digits'],
    correctAnswer: 'A) 10 digits (or 17 digits in legacy birth-year prefixed format)',
    solution: `Smart NID cards use a unique 10-digit identification number, while older NID numbers have 17 digits (13 digits with the 4-digit birth year prepended). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'How many digits are in the MICR Routing Number printed at the bottom of a bank cheque in Bangladesh?',
    options: ['A) 9 digits', 'B) 7 digits', 'C) 11 digits', 'D) 13 digits'],
    correctAnswer: 'A) 9 digits',
    solution: `Every BACPS cheque in Bangladesh carries a 9-digit Routing Number (3-digit Bank Code + 2-digit District Code + 3-digit Branch Code + 1 Check Digit). Correct Answer: A) 9 digits.`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What does e-KYC stand for in digital customer onboarding at banks and MFS providers?',
    options: [
      'A) Electronic Know Your Customer',
      'B) External Key Yield Control',
      'C) Electronic Key Your Code',
      'D) Enterprise Knowledge Yardstick Check'
    ],
    correctAnswer: 'A) Electronic Know Your Customer',
    solution: `e-KYC (Electronic Know Your Customer) allows paperless account opening using biometric fingerprint/facial verification against the Election Commission NID database under BFIU guidelines. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What is the full form of CIB maintained by Bangladesh Bank for verifying borrower credit history?',
    options: [
      'A) Credit Information Bureau',
      'B) Central Investment Board',
      'C) Commercial Inquiry Branch',
      'D) Customer Identification Bank'
    ],
    correctAnswer: 'A) Credit Information Bureau',
    solution: `CIB stands for Credit Information Bureau at Bangladesh Bank, which maintains an online database of credit facilities and default status of borrowers across all banks and NBFIs. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Which government agency conducts the decennial Population and Housing Census in Bangladesh?',
    options: [
      'A) Bangladesh Bureau of Statistics (BBS)',
      'B) Bangladesh Institute of Development Studies (BIDS)',
      'C) National Board of Revenue (NBR)',
      'D) Election Commission Secretariat'
    ],
    correctAnswer: 'A) Bangladesh Bureau of Statistics (BBS)',
    solution: `The Bangladesh Bureau of Statistics (BBS) under the Statistics and Informatics Division (SID), Ministry of Planning, conducts the national Population and Housing Census (including the 2022 Digital Census using tablets/CAPI). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What is the name of the paperless electronic file management system used across all Ministries, Directorates, and Government Offices in Bangladesh?',
    options: ['A) e-Nothi (ই-নথি / D-Nothi)', 'B) e-GP', 'C) e-Mutation', 'D) EkPay'],
    correctAnswer: 'A) e-Nothi (ই-নথি / D-Nothi)',
    solution: `e-Nothi (and its upgraded version D-Nothi / Digital Nothi) developed under a2i and ICT Division is the official paperless file movement and decision-making system in government offices. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'Which authority issues Digital Signature Certificates (PKI) licenses in Bangladesh under the ICT Act?',
    options: [
      'A) Controller of Certifying Authorities (CCA)',
      'B) Bangladesh Telecommunication Regulatory Commission (BTRC)',
      'C) Bangladesh Computer Council (BCC)',
      'D) Department of Patents, Designs and Trademarks'
    ],
    correctAnswer: 'A) Controller of Certifying Authorities (CCA)',
    solution: `The Office of the Controller of Certifying Authorities (CCA) under the ICT Division regulates and licenses Certifying Authorities (CAs) for Digital Signatures in Bangladesh. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What is the length of a standard SWIFT BIC (Bank Identifier Code) used in international wire transfers and LC messaging?',
    options: ['A) 8 or 11 alphanumeric characters', 'B) 4 digits', 'C) 16 digits', 'D) 24 characters'],
    correctAnswer: 'A) 8 or 11 alphanumeric characters',
    solution: `A SWIFT BIC consists of 8 characters (4-letter bank code + 2-letter country code BD + 2-character location code) or 11 characters when the 3-character branch code is appended. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'In which year did Bangladesh officially launch the e-Passport (Electronic Passport with embedded microprocessor chip)?',
    options: ['A) 22 January 2020', 'B) 16 December 2016', 'C) 26 March 2018', 'D) 1 January 2022'],
    correctAnswer: 'A) 22 January 2020',
    solution: `Bangladesh inaugurated the e-Passport service on 22 January 2020 (becoming the first country in South Asia and 119th in the world to introduce e-Passports). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What does BFIU stand for in anti-money laundering and suspicious transaction reporting?',
    options: [
      'A) Bangladesh Financial Intelligence Unit',
      'B) Banking Fraud Investigation Unit',
      'C) Bangladesh Fiscal Inspection Union',
      'D) Bank Foreign Investment Unit'
    ],
    correctAnswer: 'A) Bangladesh Financial Intelligence Unit',
    solution: `BFIU stands for Bangladesh Financial Intelligence Unit, the central agency responsible for analyzing Cash Transaction Reports (CTRs) and Suspicious Transaction Reports (STRs). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What is the cash transaction threshold in a single account in a single day that triggers a mandatory Cash Transaction Report (CTR) to BFIU?',
    options: [
      'A) BDT 10,00,000 (10 Lakh) or more',
      'B) BDT 1,00,000 (1 Lakh) or more',
      'C) BDT 50,00,000 (50 Lakh) or more',
      'D) BDT 5,00,000 (5 Lakh) or more'
    ],
    correctAnswer: 'A) BDT 10,00,000 (10 Lakh) or more',
    solution: `Under BFIU directives, any cash deposit or withdrawal (single or multiple transactions) aggregating to BDT 10 Lakh or above in an account in a single day must be reported via Monthly CTR. Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What does TIN / e-TIN stand for in National Board of Revenue (NBR) tax administration?',
    options: [
      'A) Taxpayer’s Identification Number',
      'B) Transaction Index Number',
      'C) Trade Incorporation Number',
      'D) Treasury Invoice Number'
    ],
    correctAnswer: 'A) Taxpayer’s Identification Number',
    solution: `e-TIN stands for Electronic Taxpayer's Identification Number (a 12-digit unique number issued by NBR). Correct Answer: A).`
  },
  {
    subject: 'General Knowledge & Banking Economy',
    questionText: 'What does BIN stand for under the Value Added Tax and Supplementary Duty Act, 2012 operated by NBR?',
    options: [
      'A) Business Identification Number (13-digit e-BIN)',
      'B) Bank Index Number',
      'C) Branch Identification Node',
      'D) Budgetary Input Number'
    ],
    correctAnswer: 'A) Business Identification Number (13-digit e-BIN)',
    solution: `Under the online VAT system (IVOS) of NBR, every VAT-registered entity is assigned a 13-digit Business Identification Number (BIN). Correct Answer: A).`
  }
];

/**
 * ============================================================================
 * 4. COMPUTER, DATA ENTRY OPERATIONS, BIJOY/UNICODE, EXCEL, DBMS & ICT POOL
 *    (25 Questions per Paper: MCQ-076 to MCQ-100)
 * ============================================================================
 */
const decoComputerAndIctPool: DecoMcqSeed[] = [
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In Bijoy Bangla keyboard layout, which key sequence is pressed to type the conjunct letter ‘ক্ষ’ (ক + ষ)?',
    options: ['A) J + G + N', 'B) J + G + Shift + N', 'C) K + G + N', 'D) J + Shift + G + N'],
    correctAnswer: 'B) J + G + Shift + N',
    solution: `In Bijoy keyboard layout: ‘ক’ = J, হসন্ত/Link key (্) = G, and ‘ষ’ = Shift + N. Therefore, J + G + Shift + N produces ‘ক্ষ’. Correct Answer: B) J + G + Shift + N.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In Bijoy Bayanno software, which keyboard shortcut switches directly between English and Bijoy Classic (ANSI) typing mode?',
    options: ['A) Ctrl + Alt + B', 'B) Ctrl + Alt + V', 'C) Ctrl + Shift + B', 'D) Alt + Shift + B'],
    correctAnswer: 'A) Ctrl + Alt + B',
    solution: `Ctrl + Alt + B toggles Bijoy Classic (ANSI, e.g., SutonnyMJ font), whereas Ctrl + Alt + V toggles Bijoy Unicode (Nikosh font). Correct Answer: A) Ctrl + Alt + B.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In Bijoy Bayanno, which keyboard shortcut activates Bijoy Unicode typing mode (used for Nikosh font and web/government databases)?',
    options: ['A) Ctrl + Alt + V', 'B) Ctrl + Alt + B', 'C) Ctrl + Alt + U', 'D) Shift + F12'],
    correctAnswer: 'A) Ctrl + Alt + V',
    solution: `Ctrl + Alt + V switches Bijoy Bayanno into Unicode mode, which is mandatory for typing Bangla in e-Nothi, iBAS++, NID portals, and Unicode documents. Correct Answer: A) Ctrl + Alt + V.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In Avro Keyboard software, which single function key toggles between English and Bangla typing mode by default?',
    options: ['A) F12', 'B) F10', 'C) F8', 'D) F5'],
    correctAnswer: 'A) F12',
    solution: `In Avro Keyboard, pressing the F12 key (or Ctrl + Space) switches between English and Bangla Unicode input mode. Correct Answer: A) F12.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What is the official Unicode hexadecimal code block allocated for the Bengali (Bangla) script?',
    options: [
      'A) U+0980 to U+09FF',
      'B) U+0000 to U+007F',
      'C) U+0900 to U+097F',
      'D) U+0A00 to U+0A7F'
    ],
    correctAnswer: 'A) U+0980 to U+09FF',
    solution: `In the Unicode Standard, U+0980 to U+09FF is the official Bengali (Bangla) block (whereas U+0900–U+097F is Devanagari and U+0000–U+007F is Basic Latin ASCII). Correct Answer: A) U+0980 to U+09FF.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which MS Excel function removes all non-printable ASCII characters (codes 0 to 31) from text imported from mainframe or external database logs?',
    options: ['A) =CLEAN()', 'B) =TRIM()', 'C) =PROPER()', 'D) =EXACT()'],
    correctAnswer: 'A) =CLEAN()',
    solution: `=CLEAN(text) strips non-printable control characters, whereas =TRIM(text) removes leading, trailing, and extra spaces between words. Correct Answer: A) =CLEAN().`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, which function removes all leading and trailing spaces from a customer’s name while leaving only a single space between words?',
    options: ['A) =TRIM()', 'B) =LEFT()', 'C) =MID()', 'D) =SUBSTITUTE()'],
    correctAnswer: 'A) =TRIM()',
    solution: `=TRIM(A2) is essential in data cleaning before running VLOOKUP so hidden trailing spaces do not cause #N/A match failures. Correct Answer: A) =TRIM().`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, which keyboard shortcut inserts the current system DATE as a static value into the active cell?',
    options: [
      'A) Ctrl + ; (Semicolon)',
      'B) Ctrl + Shift + ; (Colon)',
      'C) Ctrl + D',
      'D) Alt + D'
    ],
    correctAnswer: 'A) Ctrl + ; (Semicolon)',
    solution: `Ctrl + ; inserts the current static date, while Ctrl + Shift + ; inserts the current static time. Correct Answer: A) Ctrl + ; (Semicolon).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, which function key converts a relative cell reference (A1) into an absolute cell reference ($A$1) while editing a formula?',
    options: ['A) F4', 'B) F2', 'C) F7', 'D) F9'],
    correctAnswer: 'A) F4',
    solution: `Pressing F4 while editing a formula cycles through $A$1 (both locked), A$1 (row locked), $A1 (column locked), and A1 (relative). Correct Answer: A) F4.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, pressing which key places the active cell directly into Edit Mode without overwriting its existing contents?',
    options: ['A) F2', 'B) F1', 'C) F5', 'D) F11'],
    correctAnswer: 'A) F2',
    solution: `Pressing F2 places the cursor at the end of the current cell's formula or text for quick in-cell editing. Correct Answer: A) F2.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, what is the keyboard shortcut to select the ENTIRE COLUMN of the active cell?',
    options: [
      'A) Ctrl + Spacebar',
      'B) Shift + Spacebar',
      'C) Ctrl + A',
      'D) Alt + Spacebar'
    ],
    correctAnswer: 'A) Ctrl + Spacebar',
    solution: `Ctrl + Spacebar selects the entire column; Shift + Spacebar selects the entire row. Correct Answer: A) Ctrl + Spacebar.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Excel, what does the 4th argument FALSE (or 0) specify in the formula =VLOOKUP(B2, $E$2:$H$1000, 4, FALSE)?',
    options: [
      'A) Exact Match lookup',
      'B) Approximate Match lookup',
      'C) Reverse order lookup',
      'D) Case-sensitive lookup'
    ],
    correctAnswer: 'A) Exact Match lookup',
    solution: `Setting the 4th argument (range_lookup) of VLOOKUP to FALSE (or 0) forces an Exact Match, returning #N/A if the account/NID key is not found. Correct Answer: A) Exact Match lookup.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which MS Excel feature restricts a cell so a Data Entry Operator can only enter a 10-digit or 17-digit number or pick from a predefined drop-down list?',
    options: [
      'A) Data Validation (Data Tab -> Data Validation)',
      'B) Goal Seek',
      'C) Scenario Manager',
      'D) Consolidation'
    ],
    correctAnswer: 'A) Data Validation (Data Tab -> Data Validation)',
    solution: `Data Validation enforces input constraints (List, Whole Number, Text Length, Date range, Custom Formula) and displays custom error alerts on invalid entry. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which check-digit algorithm is universally used to validate 16-digit Debit/Credit card numbers and IMEI numbers against typing transposition errors?',
    options: [
      'A) Luhn Algorithm (Modulus-10 Checksum)',
      'B) Bubble Sort Algorithm',
      'C) Binary Search Algorithm',
      'D) Round Robin Scheduling'
    ],
    correctAnswer: 'A) Luhn Algorithm (Modulus-10 Checksum)',
    solution: `The Luhn Algorithm (Mod-10) detects any single-digit mistyped error and almost all adjacent digit transposition errors during card/account number entry. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In a Relational Database (RDBMS), which key uniquely identifies each record in a table and CANNOT contain NULL values?',
    options: ['A) Primary Key', 'B) Foreign Key', 'C) Alternate Key', 'D) Secondary Index'],
    correctAnswer: 'A) Primary Key',
    solution: `A Primary Key enforces entity integrity by ensuring every row is uniquely identifiable and never NULL (e.g., Account_No or NID_No). Correct Answer: A) Primary Key.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What does CSV stand for when importing or exporting batch transaction records between MS Excel and an Oracle/SQL Server database?',
    options: [
      'A) Comma-Separated Values',
      'B) Column-Structured Variables',
      'C) Character-Separated Verification',
      'D) Centralized System Values'
    ],
    correctAnswer: 'A) Comma-Separated Values',
    solution: `CSV stands for Comma-Separated Values, a lightweight plain-text tabular format where fields are separated by commas and rows by newlines. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which technology converts scanned images of printed or typewritten paper documents into machine-editable text?',
    options: [
      'A) OCR (Optical Character Recognition)',
      'B) OMR (Optical Mark Recognition)',
      'C) MICR (Magnetic Ink Character Recognition)',
      'D) Plotter'
    ],
    correctAnswer: 'A) OCR (Optical Character Recognition)',
    solution: `OCR (Optical Character Recognition) recognizes character shapes on scanned forms and converts them into editable text, whereas OMR detects shaded MCQ bubbles. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which scanner technology is used to evaluate shaded pencil/pen bubbles on Preliminary MCQ answer sheets and census forms?',
    options: [
      'A) OMR (Optical Mark Recognition)',
      'B) OCR',
      'C) MICR',
      'D) Joy Stick'
    ],
    correctAnswer: 'A) OMR (Optical Mark Recognition)',
    solution: `OMR (Optical Mark Recognition) senses reflected light intensity to detect filled bubbles on standardized OMR sheets. Correct Answer: A) OMR (Optical Mark Recognition).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In Windows OS, which shortcut key immediately locks the computer screen when a Data Entry Operator steps away from the desk?',
    options: [
      'A) Windows Logo Key + L',
      'B) Windows Logo Key + D',
      'C) Windows Logo Key + E',
      'D) Windows Logo Key + R'
    ],
    correctAnswer: 'A) Windows Logo Key + L',
    solution: `Pressing Windows + L immediately locks the workstation session, preventing unauthorized access to open banking or citizen databases. Correct Answer: A) Windows Logo Key + L.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Word, which keyboard shortcut splits a table into two separate tables at the currently selected row?',
    options: [
      'A) Ctrl + Shift + Enter',
      'B) Ctrl + Enter',
      'C) Shift + Enter',
      'D) Alt + Enter'
    ],
    correctAnswer: 'A) Ctrl + Shift + Enter',
    solution: `In MS Word, Ctrl + Shift + Enter splits a table at the current row (or inserts a column break), whereas Ctrl + Enter inserts a Page Break. Correct Answer: A) Ctrl + Shift + Enter.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Word, what is the keyboard shortcut to open the "Find and Replace" dialog box directly?',
    options: ['A) Ctrl + H', 'B) Ctrl + F', 'C) Ctrl + G', 'D) Ctrl + R'],
    correctAnswer: 'A) Ctrl + H',
    solution: `Ctrl + H opens the Find and Replace tab directly, Ctrl + F opens Find/Navigation, and Ctrl + G opens Go To. Correct Answer: A) Ctrl + H.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In MS Word, which shortcut key applies "Justify" alignment to a paragraph of an official letter?',
    options: ['A) Ctrl + J', 'B) Ctrl + E', 'C) Ctrl + L', 'D) Ctrl + R'],
    correctAnswer: 'A) Ctrl + J',
    solution: `Ctrl + J justifies text evenly between left and right margins (Ctrl + L = Left, Ctrl + E = Center, Ctrl + R = Right). Correct Answer: A) Ctrl + J.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In Government Recruitment Practical Typing Tests in Bangladesh, 1 standard "Word" is calculated as how many keystrokes (including spaces)?',
    options: [
      'A) 5 keystrokes = 1 Word',
      'B) 10 keystrokes = 1 Word',
      'C) 3 keystrokes = 1 Word',
      'D) 8 keystrokes = 1 Word'
    ],
    correctAnswer: 'A) 5 keystrokes = 1 Word',
    solution: `Under BPSC and MoPA recruitment rules, Gross WPM = (Total Keystrokes ÷ 5) ÷ Time in Minutes. Every 5 keystrokes count as 1 standard word. Correct Answer: A) 5 keystrokes = 1 Word.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What is the minimum required typing speed in Bangla and English for a Government "Data Entry / Control Operator" under Bangladesh Recruitment Rules?',
    options: [
      'A) 20 WPM in Bangla and 20 WPM in English',
      'B) 25 WPM in Bangla and 30 WPM in English',
      'C) 15 WPM in Bangla and 15 WPM in English',
      'D) 35 WPM in Bangla and 40 WPM in English'
    ],
    correctAnswer: 'A) 20 WPM in Bangla and 20 WPM in English',
    solution: `For Data Entry / Control Operator (Grade-16 / Grade-13/14 in Banks), the statutory practical typing speed requirement is 20 Words Per Minute in Bangla and 20 Words Per Minute in English (whereas for Computer Operator it is 25 WPM Bangla and 30 WPM English). Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'In SQL, which command is used to modify existing records in a database table (such as correcting a customer’s phone number)?',
    options: [
      'A) UPDATE table_name SET column = value WHERE condition;',
      'B) ALTER TABLE',
      'C) MODIFY RECORD',
      'D) INSERT INTO'
    ],
    correctAnswer: 'A) UPDATE table_name SET column = value WHERE condition;',
    solution: `The DML command UPDATE ... SET ... WHERE modifies existing row values in a table, whereas ALTER TABLE modifies the schema structure. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What happens if a Data Control Operator runs an SQL "UPDATE" or "DELETE" statement WITHOUT a "WHERE" clause?',
    options: [
      'A) Every single row in the entire table gets updated or deleted',
      'B) Only the first row is affected',
      'C) SQL throws a syntax error and refuses to run',
      'D) Only NULL rows are affected'
    ],
    correctAnswer: 'A) Every single row in the entire table gets updated or deleted',
    solution: `Omitting the WHERE clause in an UPDATE or DELETE query applies the modification or deletion to all rows in the table. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which verification method requires two different operators to key in the exact same batch of source forms independently so the system can flag any mismatch?',
    options: [
      'A) Double-Key Verification (Key-to-Disk Verification)',
      'B) Single-Pass Visual Skimming',
      'C) Parity Bit Shifting',
      'D) Defragmentation'
    ],
    correctAnswer: 'A) Double-Key Verification (Key-to-Disk Verification)',
    solution: `Double-Key Entry / Verification is the gold standard in critical banking, census, and tax data entry: Operator 1 enters the record, Operator 2 re-keys it, and the control software alerts immediately if any keystroke differs. Correct Answer: A).`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which Windows command-line tool displays the IPv4 address, Subnet Mask, Default Gateway, and Physical (MAC) Address of the computer?',
    options: ['A) ipconfig /all', 'B) ping', 'C) tracert', 'D) chkdsk'],
    correctAnswer: 'A) ipconfig /all',
    solution: `Running 'ipconfig /all' in Command Prompt displays complete network adapter details including the 48-bit MAC (Physical) address and DHCP lease status. Correct Answer: A) ipconfig /all.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'What is the 8-bit 2’s complement binary representation of the negative integer -18?',
    options: ['A) 11101110', 'B) 11101101', 'C) 10010010', 'D) 11110010'],
    correctAnswer: 'A) 11101110',
    solution: `1) +18 in 8-bit binary = 00010010.
2) 1’s complement (invert bits) = 11101101.
3) Add 1 for 2’s complement = 11101110. Correct Answer: A) 11101110.`
  },
  {
    subject: 'Computer & Basic ICT',
    questionText: 'Which RAID level uses "Disk Mirroring" (writing identical data to two drives simultaneously) to provide 100% instant fault tolerance for a database server?',
    options: ['A) RAID 1', 'B) RAID 0', 'C) RAID 5', 'D) RAID 2'],
    correctAnswer: 'A) RAID 1',
    solution: `RAID 1 performs Disk Mirroring (exact duplicate on a second disk); RAID 0 is striping without fault tolerance; RAID 5 is block-level striping with distributed parity. Correct Answer: A) RAID 1.`
  }
];

/**
 * ============================================================================
 * 5. DYNAMIC YEAR-SPECIFIC MATHEMATICS & DATA ENTRY APTITUDE GENERATOR
 *    (20 Questions per Paper: MCQ-041 to MCQ-060)
 * ============================================================================
 */
function buildDecoDynamicMathPool(paper: NonItExamPaper, paperIndex: number): DecoMcqSeed[] {
  const offset = paperIndex % 17;
  const mathSeeds: DecoMcqSeed[] = [];

  // 1. Typing Speed WPM & Keystrokes Calculation
  const keystrokesPerHr = 15000 + (offset % 5) * 1500; // 15000, 16500, 18000, 19500, 21000
  const wpm1 = keystrokesPerHr / (5 * 60); // 50, 55, 60, 65, 70 WPM
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `In a practical data entry test, an operator types ${keystrokesPerHr.toLocaleString()} keystrokes in 1 hour. Given that 5 keystrokes equal 1 standard word, what is the operator’s gross typing speed in Words Per Minute (WPM)?`,
    options: [
      `A) ${wpm1 - 5} WPM`,
      `B) ${wpm1} WPM`,
      `C) ${wpm1 + 5} WPM`,
      `D) ${wpm1 + 10} WPM`
    ],
    correctAnswer: `B) ${wpm1} WPM`,
    solution: `1) Total standard words typed in 1 hour = ${keystrokesPerHr.toLocaleString()} ÷ 5 = ${(keystrokesPerHr / 5).toLocaleString()} words.
2) Speed in Words Per Minute (WPM) = ${(keystrokesPerHr / 5).toLocaleString()} ÷ 60 minutes = ${wpm1} WPM.
Correct Answer: B) ${wpm1} WPM.`
  });

  // 2. Net WPM with Error Penalty
  const grossWords10Min = 450 + (offset % 4) * 50; // 450, 500, 550, 600 words in 10 mins
  const errors10Min = 20 + (offset % 3) * 10; // 20, 30, 40 errors
  const netWpm2 = (grossWords10Min - errors10Min) / 10;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `During a 10-minute typing test, a Data Entry Operator types ${grossWords10Min} gross words with ${errors10Min} uncorrected word errors. If 1 word is deducted per error, what is the operator’s Net Typing Speed in WPM?`,
    options: [
      `A) ${netWpm2 - 2} WPM`,
      `B) ${netWpm2} WPM`,
      `C) ${grossWords10Min / 10} WPM`,
      `D) ${netWpm2 + 3} WPM`
    ],
    correctAnswer: `B) ${netWpm2} WPM`,
    solution: `Gross WPM = ${grossWords10Min} ÷ 10 = ${grossWords10Min / 10} WPM.
Error penalty per minute = ${errors10Min} ÷ 10 = ${errors10Min / 10} WPM.
Net WPM = ${grossWords10Min / 10} - ${errors10Min / 10} = ${netWpm2} WPM.
Correct Answer: B) ${netWpm2} WPM.`
  });

  // 3. Two Operators Working Together (Work & Time)
  const hrsA = 4;
  const hrsB = 6;
  const batchSize = 1200 + (offset % 4) * 600; // 1200, 1800, 2400, 3000
  const rateA = batchSize / hrsA;
  const rateB = batchSize / hrsB;
  const targetRecords = (rateA + rateB) * 5;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `Operator A can enter ${batchSize.toLocaleString()} KYC forms in ${hrsA} hours, while Operator B can enter the same ${batchSize.toLocaleString()} forms in ${hrsB} hours. Working together at their respective rates, how many hours will they take to enter ${targetRecords.toLocaleString()} forms?`,
    options: [
      'A) 4 hours',
      'B) 5 hours',
      'C) 5.5 hours',
      'D) 6 hours'
    ],
    correctAnswer: 'B) 5 hours',
    solution: `1) Hourly rate of Operator A = ${batchSize} ÷ ${hrsA} = ${rateA} forms/hour.
2) Hourly rate of Operator B = ${batchSize} ÷ ${hrsB} = ${rateB} forms/hour.
3) Combined hourly rate = ${rateA} + ${rateB} = ${rateA + rateB} forms/hour.
4) Time required for ${targetRecords.toLocaleString()} forms = ${targetRecords} ÷ ${rateA + rateB} = 5 hours.
Correct Answer: B) 5 hours.`
  });

  // 4. Chain Rule (M1*D1*H1 / W1 = M2*D2*H2 / W2)
  const formsW1 = 36000;
  const formsW2 = 54000;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `In a data processing wing, 15 Data Entry Operators working 8 hours a day can digitize ${formsW1.toLocaleString()} tax return files in 12 days. How many days will 20 operators working 9 hours a day take to digitize ${formsW2.toLocaleString()} files?`,
    options: [
      'A) 10 days',
      'B) 12 days',
      'C) 14 days',
      'D) 15 days'
    ],
    correctAnswer: 'B) 12 days',
    solution: `Using the work-rate chain formula (M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂:
(15 × 12 × 8) / 36,000 = (20 × D₂ × 9) / 54,000
=> 1,440 / 36,000 = (180 × D₂) / 54,000
=> 0.04 = D₂ / 300 => D₂ = 12 days.
Correct Answer: B) 12 days.`
  });

  // 5. Binary to Decimal & Hexadecimal Conversion Math
  const decNum = 45 + (offset % 6) * 4; // 45, 49, 53, 57, 61, 65
  const binStr = decNum.toString(2);
  const wrongBin1 = (decNum + 2).toString(2);
  const wrongBin2 = (decNum - 2).toString(2);
  const wrongBin3 = (decNum + 4).toString(2);
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `What is the binary equivalent of the decimal number (${decNum})₁₀?`,
    options: [
      `A) (${wrongBin1})₂`,
      `B) (${binStr})₂`,
      `C) (${wrongBin2})₂`,
      `D) (${wrongBin3})₂`
    ],
    correctAnswer: `B) (${binStr})₂`,
    solution: `Converting decimal ${decNum} to base-2 (binary) by successive division by 2 gives (${binStr})₂.
Correct Answer: B) (${binStr})₂.`
  });

  // 6. Percentage Error Rate & Accuracy in Data Verification
  const totalBatch6 = 4000 + (offset % 4) * 1000; // 4000, 5000, 6000, 7000
  const errorRatePct = 1.5;
  const validRecords6 = totalBatch6 * (1 - errorRatePct / 100);
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `Out of a batch of ${totalBatch6.toLocaleString()} entered customer records, an automated validation script flagged ${errorRatePct}% of the records as containing format errors. How many records passed validation cleanly?`,
    options: [
      `A) ${(validRecords6 - 40).toLocaleString()}`,
      `B) ${validRecords6.toLocaleString()}`,
      `C) ${(totalBatch6 - 30).toLocaleString()}`,
      `D) ${(validRecords6 + 20).toLocaleString()}`
    ],
    correctAnswer: `B) ${validRecords6.toLocaleString()}`,
    solution: `Error records = ${errorRatePct}% of ${totalBatch6.toLocaleString()} = ${(totalBatch6 * errorRatePct) / 100}.
Cleanly validated records = ${totalBatch6.toLocaleString()} - ${(totalBatch6 * errorRatePct) / 100} = ${validRecords6.toLocaleString()}.
Correct Answer: B) ${validRecords6.toLocaleString()}.`
  });

  // 7. Set Theory / Venn Diagram (Passing Both Bangla & English Typing)
  const passBangla = 80;
  const passEng = 75;
  const failBoth = 15;
  const passBothPct = passBangla + passEng - (100 - failBoth); // 70%
  const passBothCount = 350 + (offset % 4) * 70; // 350, 420, 490, 560
  const totalCandidates7 = (passBothCount * 100) / passBothPct; // 500, 600, 700, 800
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `In a Data Entry Operator practical test, ${passBangla}% passed in Bangla typing, ${passEng}% passed in English typing, and ${failBoth}% failed in both tests. If ${passBothCount} candidates passed in both sections, how many candidates appeared in total?`,
    options: [
      `A) ${totalCandidates7 - 100} candidates`,
      `B) ${totalCandidates7} candidates`,
      `C) ${totalCandidates7 + 50} candidates`,
      `D) ${totalCandidates7 + 100} candidates`
    ],
    correctAnswer: `B) ${totalCandidates7} candidates`,
    solution: `1) Percentage passing at least one test = 100% - ${failBoth}% = 85%.
2) Percentage passing BOTH tests = ${passBangla}% + ${passEng}% - 85% = ${passBothPct}%.
3) Given ${passBothPct}% of Total = ${passBothCount} => Total Candidates = (${passBothCount} × 100) ÷ ${passBothPct} = ${totalCandidates7}.
Correct Answer: B) ${totalCandidates7} candidates.`
  });

  // 8. Profit & Loss on Computer Hardware Procurement
  const cpPrinter = 16000 + (offset % 4) * 2000;
  const lossPrice = cpPrinter * 0.9;
  const gainPrice = cpPrinter * 1.15;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `By selling a laser printer for Tk. ${lossPrice.toLocaleString()}, an IT supplier loses 10%. At what price must he sell it to make a profit of 15%?`,
    options: [
      `A) Tk. ${(gainPrice - 600).toLocaleString()}`,
      `B) Tk. ${gainPrice.toLocaleString()}`,
      `C) Tk. ${(gainPrice + 600).toLocaleString()}`,
      `D) Tk. ${cpPrinter.toLocaleString()}`
    ],
    correctAnswer: `B) Tk. ${gainPrice.toLocaleString()}`,
    solution: `1) At 10% loss, 90% of Cost Price (CP) = Tk. ${lossPrice.toLocaleString()} => CP = ${lossPrice} ÷ 0.90 = Tk. ${cpPrinter.toLocaleString()}.
2) Selling Price for 15% profit = 1.15 × ${cpPrinter.toLocaleString()} = Tk. ${gainPrice.toLocaleString()}.
Correct Answer: B) Tk. ${gainPrice.toLocaleString()}.`
  });

  // 9. Simple & Compound Interest Difference (2 Years)
  const principal9 = 20000 + (offset % 5) * 10000; // 20k, 30k, 40k, 50k, 60k
  const rate9 = 10;
  const diff9 = principal9 * Math.pow(rate9 / 100, 2);
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `What is the difference between Compound Interest (compounded annually) and Simple Interest on Tk. ${principal9.toLocaleString()} at ${rate9}% per annum for 2 years?`,
    options: [
      `A) Tk. ${diff9 - 50}`,
      `B) Tk. ${diff9}`,
      `C) Tk. ${diff9 + 100}`,
      `D) Tk. ${diff9 * 2}`
    ],
    correctAnswer: `B) Tk. ${diff9}`,
    solution: `For 2 years, CI - SI = P × (r / 100)² = ${principal9.toLocaleString()} × (10 / 100)² = ${principal9.toLocaleString()} × 0.01 = Tk. ${diff9}.
Correct Answer: B) Tk. ${diff9}.`
  });

  // 10. Algebraic Identity (x + 1/x)
  const k10 = 4 + (offset % 3); // 4, 5, 6
  const sq10 = k10 * k10 - 2;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `If x + (1/x) = ${k10}, what is the value of x² + (1/x²)?`,
    options: [
      `A) ${sq10 - 2}`,
      `B) ${sq10}`,
      `C) ${sq10 + 2}`,
      `D) ${sq10 + 4}`
    ],
    correctAnswer: `B) ${sq10}`,
    solution: `x² + 1/x² = (x + 1/x)² - 2 = ${k10}² - 2 = ${k10 * k10} - 2 = ${sq10}.
Correct Answer: B) ${sq10}.`
  });

  // 11. Weighted Average of Operator Batch Entries
  const avg10Ops = 240 + (offset % 3) * 10; // 240, 250, 260
  const avg15Ops = avg10Ops + 20; // 260, 270, 280
  const combinedAvg = (10 * avg10Ops + 15 * avg15Ops) / 25;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `In a data center, the average hourly entry of 10 junior operators is ${avg10Ops} records, and the average hourly entry of 15 senior operators is ${avg15Ops} records. What is the combined average hourly entry of all 25 operators?`,
    options: [
      `A) ${combinedAvg - 4} records`,
      `B) ${combinedAvg} records`,
      `C) ${combinedAvg + 4} records`,
      `D) ${(avg10Ops + avg15Ops) / 2} records`
    ],
    correctAnswer: `B) ${combinedAvg} records`,
    solution: `Total records per hour = (10 × ${avg10Ops}) + (15 × ${avg15Ops}) = ${10 * avg10Ops + 15 * avg15Ops}.
Combined average of 25 operators = ${10 * avg10Ops + 15 * avg15Ops} ÷ 25 = ${combinedAvg} records.
Correct Answer: B) ${combinedAvg} records.`
  });

  // 12. Simultaneous Linear Equations (Computers & Printers Cost)
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'A bank branch purchased 8 desktop computers and 4 laser printers for Tk. 4,40,000. At the same unit rates, another branch purchased 5 desktop computers and 3 laser printers for Tk. 2,85,000. What is the unit price of 1 desktop computer?',
    options: [
      'A) Tk. 40,000',
      'B) Tk. 45,000',
      'C) Tk. 50,000',
      'D) Tk. 42,000'
    ],
    correctAnswer: 'B) Tk. 45,000',
    solution: `Let 1 desktop = x and 1 printer = y.
1) 8x + 4y = 4,40,000 => 2x + y = 1,10,000 => y = 1,10,000 - 2x.
2) 5x + 3(1,10,000 - 2x) = 2,85,000 => 3,30,000 - x = 2,85,000 => x = Tk. 45,000.
Correct Answer: B) Tk. 45,000.`
  });

  // 13. Data Backup Storage Size Calculation
  const recordsCount = 512000;
  const bytesPerRecord = 2048; // 2 KB
  // 512,000 * 2 KB = 1,024,000 KB = 1,000 MB
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `A bank branch database table contains 5,12,000 customer records. If each record occupies exactly 2 Kilobytes (2 KB = 2,048 Bytes) of storage, how many Megabytes (MB) of disk space are required to store the table (where 1 MB = 1,024 KB)?`,
    options: [
      'A) 500 MB',
      'B) 1,000 MB',
      'C) 1,024 MB',
      'D) 2,000 MB'
    ],
    correctAnswer: 'B) 1,000 MB',
    solution: `Total size in KB = 5,12,000 × 2 KB = 10,24,000 KB.
Since 1 MB = 1,024 KB, size in MB = 10,24,000 ÷ 1,024 = 1,000 MB.
Correct Answer: B) 1,000 MB.`
  });

  // 14. Ratio & Proportion of Valid vs Rejected Cheques
  const ratioValid = 19;
  const ratioRejected = 1;
  const totalCheques14 = 2400 + (offset % 4) * 400; // 2400, 2800, 3200, 3600
  const rejectedCount14 = totalCheques14 / 20;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `In a BACH clearing batch of ${totalCheques14.toLocaleString()} scanned cheques, the ratio of honored cheques to rejected cheques is ${ratioValid} : ${ratioRejected}. How many cheques were rejected?`,
    options: [
      `A) ${rejectedCount14 - 20}`,
      `B) ${rejectedCount14}`,
      `C) ${rejectedCount14 + 20}`,
      `D) ${rejectedCount14 * 2}`
    ],
    correctAnswer: `B) ${rejectedCount14}`,
    solution: `Sum of ratio parts = ${ratioValid} + ${ratioRejected} = 20.
Number of rejected cheques = (1 / 20) × ${totalCheques14.toLocaleString()} = ${rejectedCount14}.
Correct Answer: B) ${rejectedCount14}.`
  });

  // 15. Train Crossing a Bridge / Platform
  const trainL = 180;
  const platformL = 220;
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: `A train ${trainL} meters long is running at a speed of 72 km/h. How many seconds will it take to cross a platform ${platformL} meters long?`,
    options: [
      'A) 18 seconds',
      'B) 20 seconds',
      'C) 22 seconds',
      'D) 25 seconds'
    ],
    correctAnswer: 'B) 20 seconds',
    solution: `Speed = 72 km/h = 72 × (5/18) = 20 m/s.
Total distance = ${trainL} + ${platformL} = 400 meters.
Time = 400 ÷ 20 = 20 seconds. Correct Answer: B) 20 seconds.`
  });

  // 16. Pipes & Cisterns (Server Cooling / Tank Math)
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'Two pipes A and B can fill a water tank in 20 minutes and 30 minutes respectively, while a third pipe C can empty the full tank in 60 minutes. If all three pipes are opened simultaneously, in how many minutes will the empty tank be filled?',
    options: [
      'A) 12 minutes',
      'B) 15 minutes',
      'C) 18 minutes',
      'D) 20 minutes'
    ],
    correctAnswer: 'B) 15 minutes',
    solution: `Net part filled in 1 minute = (1/20) + (1/30) - (1/60) = (3 + 2 - 1) / 60 = 4 / 60 = 1 / 15.
Hence, the tank will be completely filled in 15 minutes. Correct Answer: B) 15 minutes.`
  });

  // 17. Age Problem
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'A father is currently 3 times as old as his son. 12 years ago, the father was 6 times as old as his son. What is the present age of the son?',
    options: [
      'A) 16 years',
      'B) 20 years',
      'C) 24 years',
      'D) 18 years'
    ],
    correctAnswer: 'B) 20 years',
    solution: `Let son's present age = x, father's present age = 3x.
12 years ago: 3x - 12 = 6(x - 12) => 3x - 12 = 6x - 72 => 3x = 60 => x = 20 years.
Correct Answer: B) 20 years.`
  });

  // 18. Successive Percentage Change
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'If the length of a rectangular server room is increased by 20% and its width is decreased by 10%, what is the net percentage change in its floor area?',
    options: [
      'A) 10% increase',
      'B) 8% increase',
      'C) 6% increase',
      'D) 8% decrease'
    ],
    correctAnswer: 'B) 8% increase',
    solution: `Net % change = a + b + (ab / 100) = +20 - 10 + ((20 × -10) / 100) = 10 - 2 = +8% increase.
Correct Answer: B) 8% increase.`
  });

  // 19. HCF / Greatest Batch Partition Size
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'What is the greatest number of equal batch packets into which 144 tax files, 180 customs files, and 216 audit files can be divided without mixing categories?',
    options: [
      'A) 24',
      'B) 36',
      'C) 18',
      'D) 72'
    ],
    correctAnswer: 'B) 36',
    solution: `HCF of 144, 180, and 216:
144 = 36 × 4; 180 = 36 × 5; 216 = 36 × 6.
Hence, HCF = 36. Correct Answer: B) 36.`
  });

  // 20. Exponent Equation
  mathSeeds.push({
    subject: 'Mathematics & Quantitative Aptitude',
    questionText: 'If 2^(x + 3) + 2^x = 72, what is the value of x?',
    options: [
      'A) 2',
      'B) 3',
      'C) 4',
      'D) 5'
    ],
    correctAnswer: 'B) 3',
    solution: `Factor out 2^x: 2^x(2³ + 1) = 72 => 2^x(8 + 1) = 72 => 9 × 2^x = 72 => 2^x = 8 = 2³ => x = 3.
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
 * for any Data Entry / Control Operator exam paper (2010–2026):
 * - MCQ-001 to MCQ-020: Bangla Language & Literature (20)
 * - MCQ-021 to MCQ-040: English Language & Focus Writing (20)
 * - MCQ-041 to MCQ-060: Mathematics & Quantitative Aptitude (20)
 * - MCQ-061 to MCQ-075: General Knowledge & Banking Economy (15)
 * - MCQ-076 to MCQ-100: Computer, Data Entry Operations & Basic ICT (25)
 */
export function buildFull100DecoMcqQuestions(
  paper: NonItExamPaper,
  paperIndex: number
): NonItQuestionItem[] {
  const existingMcqs = paper.questions.filter(q => q.questionType === 'MCQ');

  const pickSectionItems = (
    targetSubject: NonItSubject,
    count: number,
    masterPool: DecoMcqSeed[],
    offset: number
  ): DecoMcqSeed[] => {
    const chosen: DecoMcqSeed[] = [];
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
    decoBanglaMasterPool,
    paperIndex * 3
  );
  const english20 = pickSectionItems(
    'English Language & Focus Writing',
    20,
    decoEnglishMasterPool,
    paperIndex * 3 + 1
  );
  const math20 = pickSectionItems(
    'Mathematics & Quantitative Aptitude',
    20,
    buildDecoDynamicMathPool(paper, paperIndex),
    paperIndex * 2
  );
  const gk15 = pickSectionItems(
    'General Knowledge & Banking Economy',
    15,
    decoGkAndBankingPool,
    paperIndex * 2 + 1
  );
  const ict25 = pickSectionItems(
    'Computer & Basic ICT',
    25,
    decoComputerAndIctPool,
    paperIndex * 4
  );

  const ordered100Seeds: DecoMcqSeed[] = [
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
 * Ensures every Data Entry / Control Operator paper also has a rich Written & Practical set
 */
export function buildFullDecoWrittenQuestions(
  paper: NonItExamPaper,
  paperIndex: number
): NonItQuestionItem[] {
  const existingWritten = paper.questions.filter(q => q.questionType === 'Written');
  const supplementaryWritten: Omit<NonItQuestionItem, 'id' | 'paperId' | 'questionPaperCode' | 'questionNo'>[] = [
    {
      questionType: 'Written',
      subject: 'Computer & Basic ICT',
      marks: 20,
      questionText:
        'What is Data Validation in spreadsheet and database operations? Explain 5 essential validation checks (Presence Check, Length Check, Range Check, Format Check, and Check Digit / Luhn Mod-10) with practical banking examples.',
      solution: `1. Presence Check: Ensures mandatory fields (e.g., Customer NID, Account Holder Name) cannot be left NULL.
2. Length Check: Enforces exact character counts (e.g., 10 or 17 digits for NID; 11 digits for BD mobile numbers; 9 digits for MICR Routing Number).
3. Range Check: Validates that numeric values fall within permissible bounds (e.g., RTGS amount >= BDT 1,00,000).
4. Format / Picture Check: Ensures structured input masks (e.g., Date in DD/MM/YYYY format or e-TIN 12-digit numeric mask).
5. Check Digit Verification: Computes a mathematical modulus check digit (e.g., Luhn Mod-10 on 16-digit debit/credit card numbers) to detect single-digit and transposition typing errors immediately.`
    },
    {
      questionType: 'Written',
      subject: 'Computer & Basic ICT',
      marks: 20,
      questionText:
        'Write down the exact MS Excel formulas for a bank branch payroll & transaction sheet (rows 2 to 500): (a) Clean extra spaces and non-printable characters from Customer Name in A2, (b) Look up Account Balance from sheet "Accounts!A2:D500" (4th column) using Account_No in B2 with exact match, (c) Count how many transactions in E2:E500 exceed Tk. 1,00,000, and (d) Sum total deposits in E2:E500 where Branch_Code in C2:C500 is "DHK-101".',
      solution: `Exact MS Excel Formulas:
(a) Clean non-printable characters and extra spaces:
    =TRIM(CLEAN(A2))

(b) Exact match VLOOKUP for Account Balance (4th column):
    =VLOOKUP(B2, Accounts!$A$2:$D$500, 4, FALSE)

(c) Count transactions exceeding Tk. 1,00,000:
    =COUNTIF(E2:E500, ">100000")

(d) Conditional Sum for Branch_Code "DHK-101":
    =SUMIF(C2:C500, "DHK-101", E2:E500)`
    },
    {
      questionType: 'Written',
      subject: 'Computer & Basic ICT',
      marks: 20,
      questionText:
        'Differentiate between ANSI Bangla encoding (e.g., SutonnyMJ) and UTF-8 Unicode Bangla encoding (e.g., Nikosh / Kalpurush). How are Gross WPM and Net WPM calculated in the Practical Typing Test for Data Entry / Control Operator recruitment?',
      solution: `1. ANSI vs UTF-8 Unicode Bangla Encoding:
- ANSI (8-bit font-dependent): Maps Bangla glyphs over standard English ASCII codes. If the specific font (SutonnyMJ) is not installed on another PC or mobile browser, the text appears as unreadable English/symbol gibberish.
- UTF-8 Unicode (U+0980 to U+09FF): Assigns universal platform-independent code points to Bangla characters. Mandatory for e-Nothi, iBAS++, NID databases, and web portals because it allows accurate SQL sorting, searching, and cross-device rendering.

2. Practical Typing Speed & Accuracy Calculation:
- Standard Word = 5 keystrokes (including spaces).
- Gross WPM = (Total Keystrokes ÷ 5) ÷ Exam Duration in Minutes (10 mins).
- Net WPM = Gross WPM - (Uncorrected Word Errors ÷ Exam Duration in Minutes).
- Minimum Qualifying Speed for Data Entry / Control Operator: 20 WPM in Bangla and 20 WPM in English.`
    },
    {
      questionType: 'Written',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: 20,
      questionText: `In a central data processing unit, 15 Data Entry Operators working 8 hours daily can digitize ${(36000 + (paperIndex % 3) * 9000).toLocaleString()} KYC vouchers in 12 days. How many days will 20 operators working 9 hours daily take to digitize ${(54000 + (paperIndex % 3) * 13500).toLocaleString()} vouchers?`,
      solution: `Step-by-Step Chain Rule Solution:
1. Formula: (M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂
2. Here ratio W₂ / W₁ = 1.5 (i.e., 3 / 2).
3. D₂ = D₁ × (M₁ / M₂) × (H₁ / H₂) × (W₂ / W₁)
   = 12 × (15 / 20) × (8 / 9) × (3 / 2)
   = 12 × (3 / 4) × (8 / 9) × (3 / 2) = 12 days.
Answer: 12 days.`
    },
    {
      questionType: 'Written',
      subject: 'Translation (English ↔ Bangla)',
      marks: 20,
      questionText:
        'Translate into Bangla: "Accurate data entry, double-key verification, and timely reconciliation of electronic transactions are indispensable for preventing financial fraud in modern core banking systems. Every operator must verify source vouchers before committing batch entries to the central server."',
      solution: `Model Bangla Translation:
"আধুনিক কোর ব্যাংকিং ব্যবস্থায় আর্থিক জালিয়াতি প্রতিরোধের জন্য নির্ভুল ডেটা এন্ট্রি, ডাবল-কি যাচাইকরণ এবং ইলেকট্রনিক লেনদেনের সময়ানুগ সমন্বয় অপরিহার্য। কেন্দ্রীয় সার্ভারে ব্যাচ এন্ট্রি চূড়ান্ত করার পূর্বে প্রত্যেক অপারেটরকে অবশ্যই মূল ভাউচার যাচাই করতে হবে।"`
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
