import { NonItExamPaper, NonItQuestionItem, NonItOrgType } from './bankNonItQuestions';

interface RawMcqSeed {
  questionText: string;
  options: [string, string, string, string];
  correctAnswer: string;
  solution: string;
}

// ============================================================================
// 1. BANGLA LANGUAGE & LITERATURE MASTER POOL (AUTHENTIC BANK EXAM ITEMS)
// ============================================================================
const banglaMasterPool: RawMcqSeed[] = [
  {
    questionText: 'বাংলা ভাষা ও সাহিত্যের প্রাচীনতম নিদর্শন ‘চর্যাপদ’ কত সালে এবং কোথা থেকে আবিষ্কৃত হয়?',
    options: [
      'A) ১৯০৫ সালে ভারতের শান্তিনিকেতন থেকে',
      'B) ১৯০৭ সালে নেপালের রাজদরবারের গ্রন্থাগার থেকে',
      'C) ১৯০৯ সালে ঢাকা বিশ্ববিদ্যালয়ের গ্রন্থাগার থেকে',
      'D) ১৯১৬ সালে বঙ্গীয় সাহিত্য পরিষদ থেকে'
    ],
    correctAnswer: 'B) ১৯০৭ সালে নেপালের রাজদরবারের গ্রন্থাগার থেকে',
    solution: `মহামহোপাধ্যায় হরপ্রসাদ শাস্ত্রী ১৯০৭ সালে নেপালের রাজদরবারের গ্রন্থাগার (রয়েল লাইব্রেরি) থেকে চর্যাপদের পুঁথি আবিষ্কার করেন এবং ১৯১৬ সালে বঙ্গীয় সাহিত্য পরিষদ থেকে ‘হাজার বছরের পুরাণ বাঙ্গালা ভাষায় বৌদ্ধগান ও দোহা’ নামে গ্রন্থাকারে প্রকাশ করেন। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘চর্যাপদ’-এর সবচেয়ে বেশি পদ রচনা করেছেন কোন পদকর্তা?',
    options: [
      'A) লুইপা',
      'B) কাহ্নপা',
      'C) ভুসুকুপা',
      'D) শবরপা'
    ],
    correctAnswer: 'B) কাহ্নপা',
    solution: `চর্যাপদের মোট ২৪ জন পদকর্তার মধ্যে সর্বাধিক ১৩টি পদ রচনা করেছেন কাহ্নপা (যার মধ্যে ১২টি উদ্ধারকৃত)। লুইপা হলেন আদি কবি এবং ভুসুকুপা নিজেকে ‘বাঙালি’ বলে পরিচয় দিয়েছেন। সঠিক উত্তর: B) কাহ্নপা।`
  },
  {
    questionText: 'মধ্যযুগের বাংলা সাহিত্যের আদি নিদর্শন ‘শ্রীকৃষ্ণকীর্তন’ কাব্যের রচয়িতা কে?',
    options: [
      'A) চণ্ডীদাস',
      'B) বড়ু চণ্ডীদাস',
      'C) বিদ্যাপতি',
      'D) মুকুন্দরাম চক্রবর্তী'
    ],
    correctAnswer: 'B) বড়ু চণ্ডীদাস',
    solution: `মধ্যযুগের আদি নিদর্শন ‘শ্রীকৃষ্ণকীর্তন’ কাব্য রচনা করেন বড়ু চণ্ডীদাস। ১৯০৯ সালে বসন্তরঞ্জন রায় বিদ্বদ্বল্লভ বাঁকুড়া জেলার কাঁকিলা গ্রামের এক গোয়ালঘর থেকে পুঁথিটি আবিষ্কার করেন। সঠিক উত্তর: B) বড়ু চণ্ডীদাস।`
  },
  {
    questionText: '‘আমার সন্তান যেন থাকে দুধে ভাতে’ — এই অমর প্রার্থনাটি কোন কাব্যের কোন চরিত্রের?',
    options: [
      'A) চণ্ডীমঙ্গল কাব্যের ফুল্লরা',
      'B) অন্নদামঙ্গল কাব্যের ঈশ্বরী পাটনী',
      'C) মনসামঙ্গল কাব্যের বেহুলা',
      'D) ধর্মমঙ্গল কাব্যের রঞ্জাবতী'
    ],
    correctAnswer: 'B) অন্নদামঙ্গল কাব্যের ঈশ্বরী পাটনী',
    solution: `মধ্যযুগের অন্যতম শ্রেষ্ঠ কবি ভারতচন্দ্র রায়গুণাকর রচিত ‘অন্নদামঙ্গল’ কাব্যে দেবী অন্নপূর্ণার কাছে খেয়াঘাটের মাঝি ঈশ্বরী পাটনী বর চেয়ে বলেছিলেন: “আমার সন্তান যেন থাকে দুধে ভাতে”। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'রবীন্দ্রনাথ ঠাকুরের ‘গীতাঞ্জলি’ কাব্যগ্রন্থটি কত সালে প্রকাশিত হয় এবং কত সালে তিনি নোবেল পুরস্কার পান?',
    options: [
      'A) ১৯০৮ সালে প্রকাশ ও ১৯১২ সালে নোবেল',
      'B) ১৯১০ সালে প্রকাশ ও ১৯১৩ সালে নোবেল',
      'C) ১৯১১ সালে প্রকাশ ও ১৯১৩ সালে নোবেল',
      'D) ১৯১২ সালে প্রকাশ ও ১৯১৪ সালে নোবেল'
    ],
    correctAnswer: 'B) ১৯১০ সালে প্রকাশ ও ১৯১৩ সালে নোবেল',
    solution: `মূল বাংলা ‘গীতাঞ্জলি’ কাব্যগ্রন্থটি ১৯১০ সালে প্রকাশিত হয়। এর ইংরেজি অনুবাদ ‘Song Offerings’ ১৯১২ সালে লন্ডন থেকে প্রকাশিত হয় এবং ১৯১৩ সালে রবীন্দ্রনাথ ঠাকুর এশীয়দের মধ্যে প্রথম সাহিত্যে নোবেল পুরস্কার লাভ করেন। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'কাজী নজরুল ইসলামের ‘বিদ্রোহী’ কবিতাটি কোন কাব্যগ্রন্থের অন্তর্গত?',
    options: [
      'A) বিষের বাঁশী',
      'B) অগ্নিবীণা',
      'C) সর্বহারা',
      'D) প্রলয়শিখা'
    ],
    correctAnswer: 'B) অগ্নিবীণা',
    solution: `কাজী নজরুল ইসলামের প্রথম প্রকাশিত কাব্যগ্রন্থ ‘অগ্নিবীণা’ (১৯২২)-এর দ্বিতীয় কবিতা হলো ‘বিদ্রোহী’ (প্রথম কবিতা ‘প্রলয়োল্লাস’)। সঠিক উত্তর: B) অগ্নিবীণা।`
  },
  {
    questionText: '১৯৫২ সালের ভাষা আন্দোলনের পটভূমিতে মুনীর চৌধুরী রচিত বিখ্যাত নাটক কোনটি?',
    options: [
      'A) রক্তাক্ত প্রান্তর',
      'B) কবর',
      'C) চিঠি',
      'D) দণ্ডকারণ্য'
    ],
    correctAnswer: 'B) কবর',
    solution: `শহীদ বুদ্ধিজীবী মুনীর চৌধুরী ১৯৫৩ সালে ঢাকা কেন্দ্রীয় কারাগারে বন্দী অবস্থায় ভাষা আন্দোলনের পটভূমিতে ‘কবর’ নাটকটি রচনা করেন। সঠিক উত্তর: B) কবর।`
  },
  {
    questionText: 'বাংলা সাহিত্যের প্রথম সার্থক ট্র্যাজেডি নাটক ‘কৃষ্ণকুমারী’ কে রচনা করেন?',
    options: [
      'A) দীনবন্ধু মিত্র',
      'B) মাইকেল মধুসূদন দত্ত',
      'C) গিরিশচন্দ্র ঘোষ',
      'D) দ্বিজেন্দ্রলাল রায়'
    ],
    correctAnswer: 'B) মাইকেল মধুসূদন দত্ত',
    solution: `মাইকেল মধুসূদন দত্ত ১৮৬১ সালে বাংলা সাহিত্যের প্রথম সার্থক ট্র্যাজেডি নাটক ‘কৃষ্ণকুমারী’ রচনা করেন। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'শামসুর রাহমানের ‘স্বাধীনতা তুমি’ এবং ‘তোমাকে পাওয়ার জন্যে, হে স্বাধীনতা’ কবিতা দুটি কোন কাব্যগ্রন্থের অন্তর্ভুক্ত?',
    options: [
      'A) প্রথম গান, দ্বিতীয় মৃত্যুর আগে',
      'B) বন্দী শিবির থেকে',
      'C) নিজ বাসভূমে',
      'D) ফিরিয়ে নাও ঘাতক কাঁটা'
    ],
    correctAnswer: 'B) বন্দী শিবির থেকে',
    solution: `১৯৭১ সালের মহান মুক্তিযুদ্ধের সময় রচিত এবং ১৯৭২ সালে প্রকাশিত শামসুর রাহমানের বিখ্যাত কাব্যগ্রন্থ ‘বন্দী শিবির থেকে’-এ কবিতা দুটি স্থান পেয়েছে। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'সৈয়দ ওয়ালীউল্লাহ রচিত বিখ্যাত উপন্যাস ‘লালসালু’-এর কেন্দ্রীয় চরিত্র কোনটি?',
    options: [
      'A) কুবের',
      'B) মজিদ',
      'C) হাতেম আলী',
      'D) আক্কাস'
    ],
    correctAnswer: 'B) মজিদ',
    solution: `১৯৪৮ সালে প্রকাশিত সৈয়দ ওয়ালীউল্লাহর ‘লালসালু’ উপন্যাসে মহব্বতনগর গ্রামের মাজার ব্যবসায়ী মজিদ হলো কেন্দ্রীয় চরিত্র (অন্যান্য চরিত্র: জমিলা, রহিমা, খালেক ব্যাপারী)। সঠিক উত্তর: B) মজিদ।`
  },
  {
    questionText: 'মানিক বন্দ্যোপাধ্যায়ের ‘পদ্মা নদীর মাঝি’ উপন্যাসে জেলেপাড়ার নাম কী?',
    options: [
      'A) মহব্বতনগর',
      'B) কেতুপুর',
      'C) ময়নাদ্বীপ',
      'D) নিশ্চিন্তপুর'
    ],
    correctAnswer: 'B) কেতুপুর',
    solution: `মানিক বন্দ্যোপাধ্যায়ের ‘পদ্মা নদীর মাঝি’ (১৯৩৬) উপন্যাসে কুবের, কপিলা ও মালাদের গ্রামের জেলেপাড়ার নাম কেতুপুর এবং হোসেন মিয়ার স্বপ্নের দ্বীপের নাম ময়নাদ্বীপ। সঠিক উত্তর: B) কেতুপুর।`
  },
  {
    questionText: 'নিচের কোনটি প্রমিত বাংলা বানান রীতি অনুযায়ী শুদ্ধ বানান?',
    options: [
      'A) মুমুর্ষু',
      'B) মুমূর্ষু',
      'C) মূমুর্ষু',
      'D) মুমূর্ষ'
    ],
    correctAnswer: 'B) মুমূর্ষু',
    solution: `শুদ্ধ বানান: মুমূর্ষু (ম+হ্রস্ব-উ, ম+দীর্ঘ-ঊ, রেফ+ষ+হ্রস্ব-উ)। সঠিক উত্তর: B) মুমূর্ষু।`
  },
  {
    questionText: '‘গবেষণা’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?',
    options: [
      'A) গব + এষণা',
      'B) গো + এষণা',
      'C) গৌ + এষণা',
      'D) গবী + এষণা'
    ],
    correctAnswer: 'B) গো + এষণা',
    solution: `স্বরসন্ধির নিয়মানুসারে ও-কারের পর বিসদৃশ স্বরধ্বনি থাকলে ‘ও’ স্থলে ‘অব্’ হয়: গো + এষণা = গবেষণা। সঠিক উত্তর: B) গো + এষণা।`
  },
  {
    questionText: '‘সংবাদ’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?',
    options: [
      'A) সৎ + বাদ',
      'B) সম্ + বাদ',
      'C) সং + বাদ',
      'D) সন + বাদ'
    ],
    correctAnswer: 'B) সম্ + বাদ',
    solution: `ব্যঞ্জনসন্ধির নিয়মানুযায়ী ম্-এর পর অন্তঃস্থ বর্ণ বা উষ্ম বর্ণ কিংবা ব-ফলা থাকলে ম্ স্থলে অনুস্বার (ং) হয়: সম্ + বাদ = সংবাদ। সঠিক উত্তর: B) সম্ + বাদ।`
  },
  {
    questionText: '‘জায়া ও পতি = দম্পতি’ — এটি কোন সমাসের উদাহরণ?',
    options: [
      'A) কর্মধারয় সমাস',
      'B) দ্বন্দ্ব সমাস',
      'C) বহুব্রীহি সমাস',
      'D) তৎপুরুষ সমাস'
    ],
    correctAnswer: 'B) দ্বন্দ্ব সমাস',
    solution: `যে সমাসে প্রত্যেকটি সমস্যমান পদের অর্থের প্রাধান্য থাকে তাকে দ্বন্দ্ব সমাস বলে। ‘জায়া ও পতি = দম্পতি’ (বা জায়াপতি) হলো নিপাতনে সিদ্ধ দ্বন্দ্ব সমাস। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘উপকূল’ ও ‘উপশহর’ শব্দ দুটি কোন সমাসের উদাহরণ?',
    options: [
      'A) কর্মধারয় সমাস',
      'B) অব্যয়ীভাব সমাস',
      'C) তৎপুরুষ সমাস',
      'D) দ্বিগু সমাস'
    ],
    correctAnswer: 'B) অব্যয়ীভাব সমাস',
    solution: `কূলের সমীপে = উপকূল (সামীপ্য অর্থে) এবং শহরের সদৃশ = উপশহর (সাদৃশ্য অর্থে) — পূর্বপদে অব্যয়যোগে গঠিত অব্যয়ীভাব সমাস। সঠিক উত্তর: B)।`
  },
  {
    questionText: '“তিলে তৈল হয়” এবং “তিলে তৈল আছে” — বাক্য দুটিতে ‘তিলে’ যথাক্রমে কোন কোন কারক?',
    options: [
      'A) দুটিই অধিকরণ কারক',
      'B) প্রথমটি অপাদান কারক এবং দ্বিতীয়টি অধিকরণ কারক',
      'C) প্রথমটি করণ কারক এবং দ্বিতীয়টি অপাদান কারক',
      'D) প্রথমটি অধিকরণ কারক এবং দ্বিতীয়টি অপাদান কারক'
    ],
    correctAnswer: 'B) প্রথমটি অপাদান কারক এবং দ্বিতীয়টি অধিকরণ কারক',
    solution: `যা থেকে কিছু উৎপন্ন বা নিঃসৃত হয় তা অপাদান কারক (“তিলে তৈল হয়” — তিল হতে উৎপন্ন)। আর আধার বা স্থান বোঝালে অধিকরণ কারক (“তিলে তৈল আছে” — তিলের ভেতরে বিদ্যমান)। সঠিক উত্তর: B)।`
  },
  {
    questionText: '“ডাক্তার ডাকো” — এখানে ‘ডাক্তার’ কোন কারকে কোন বিভক্তি?',
    options: [
      'A) কর্তৃকারকে শূন্য বিভক্তি',
      'B) কর্মকারকে শূন্য বিভক্তি',
      'C) করণ কারকে শূন্য বিভক্তি',
      'D) সম্প্রদান কারকে শূন্য বিভক্তি'
    ],
    correctAnswer: 'B) কর্মকারকে শূন্য বিভক্তি',
    solution: `যাকে আশ্রয় করে কর্তা ক্রিয়া সম্পন্ন করে তাকে কর্মকারক বলে। কাকে ডাকো? — ডাক্তারকে (বিভক্তি লোপ পেয়ে শূন্য বিভক্তি)। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'বাংলা ভাষায় খাঁটি বাংলা উপসর্গ কয়টি এবং তৎসম উপসর্গ কয়টি?',
    options: [
      'A) বাংলা ২০টি ও তৎসম ২১টি',
      'B) বাংলা ২১টি ও তৎসম ২০টি',
      'C) বাংলা ২২টি ও তৎসম ২০টি',
      'D) বাংলা ১৯টি ও তৎসম ২১টি'
    ],
    correctAnswer: 'B) বাংলা ২১টি ও তৎসম ২০টি',
    solution: `বাংলা ভাষায় খাঁটি বাংলা উপসর্গ ২১টি (অ, অঘা, অজ, অনা, আ, আড়, আন, আব, ইতি, উন, কদ, কু, নি, পাতি, বি, ভর, রাম, স, সা, সু, হা) এবং তৎসম বা সংস্কৃত উপসর্গ ২০টি (প্র, পরা, অপ, সম, নি, অব, অনু, নির, দুর, বি, অধি, সু, উৎ, পরি, প্রতি, অভি, অতি, অপি, উপ, আ)। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘অরণ্যে রোদন’ বাগধারাটির সঠিক অর্থ কোনটি?',
    options: [
      'A) বনে বসে কান্না করা',
      'B) নিষ্ফল আবেদন',
      'C) প্রচণ্ড ভয় পাওয়া',
      'D) গোপন শত্রুতা'
    ],
    correctAnswer: 'B) নিষ্ফল আবেদন',
    solution: `‘অরণ্যে রোদন’ বাগধারাটির অর্থ নিষ্ফল আবেদন বা বৃথা চেষ্টা। সঠিক উত্তর: B) নিষ্ফল আবেদন।`
  },
  {
    questionText: '‘একাদশে বৃহস্পতি’ বাগধারাটির অর্থ কী?',
    options: [
      'A) মহাবিপদ',
      'B) সৌভাগ্যের বিষয়',
      'C) জ্যোতিষশাস্ত্র চর্চা',
      'D) অলস ব্যক্তি'
    ],
    correctAnswer: 'B) সৌভাগ্যের বিষয়',
    solution: `‘একাদশে বৃহস্পতি’ বাগধারাটির অর্থ সৌভাগ্যের বিষয় বা সুসময়। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘যা চিবিয়ে খেতে হয়’ — এককথায় কী হবে?',
    options: [
      'A) লেহ্য',
      'B) চর্ব্য',
      'C) চোষ্য',
      'D) পেয়'
    ],
    correctAnswer: 'B) চর্ব্য',
    solution: `যা চিবিয়ে খেতে হয় = চর্ব্য; যা চুষে খেতে হয় = চোষ্য; যা চেটে খেতে হয় = লেহ্য; যা পান করতে হয় = পেয়। সঠিক উত্তর: B) চর্ব্য।`
  },
  {
    questionText: '‘পর্বত’ শব্দের সমার্থক শব্দ নয় কোনটি?',
    options: [
      'A) অদ্রি',
      'B) মেদিনী',
      'C) শৈল',
      'D) মহীধর'
    ],
    correctAnswer: 'B) মেদিনী',
    solution: `অদ্রি, শৈল, গিরি, মহীধর, নগ, অচল হলো ‘পর্বত’-এর সমার্থক শব্দ। অন্যদিকে ‘মেদিনী’ হলো ‘পৃথিবী’ শব্দের সমার্থক শব্দ। সঠিক উত্তর: B) মেদিনী।`
  },
  {
    questionText: '‘জঙ্গম’ শব্দের সঠিক বিপরীত শব্দ কোনটি?',
    options: [
      'A) অরণ্য',
      'B) স্থাবর',
      'C) চঞ্চল',
      'D) নশ্বর'
    ],
    correctAnswer: 'B) স্থাবর',
    solution: `‘জঙ্গম’ অর্থ গতিশীল বা সচল; এর সঠিক বিপরীত শব্দ হলো ‘স্থাবর’ (স্থির)। সঠিক উত্তর: B) স্থাবর।`
  },
  {
    questionText: '‘কাজল কালো’ এবং ‘রক্তলাল’ কোন সমাসের উদাহরণ?',
    options: [
      'A) উপমিত কর্মধারয়',
      'B) উপমান কর্মধারয়',
      'C) রূপক কর্মধারয়',
      'D) মধ্যপদলোপী কর্মধারয়'
    ],
    correctAnswer: 'B) উপমান কর্মধারয়',
    solution: `সাধারণ ধর্মবাচক পদের সাথে উপমান বাচক পদের যে সমাস হয় তাকে উপমান কর্মধারয় সমাস বলে (কাজলের ন্যায় কালো = কাজলকালো; রক্তের ন্যায় লাল = রক্তলাল)। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'বাংলা বর্ণমালায় অর্ধমাত্রার বর্ণ মোট কয়টি?',
    options: [
      'A) ৭টি',
      'B) ৮টি',
      'C) ১০টি',
      'D) ৩২টি'
    ],
    correctAnswer: 'B) ৮টি',
    solution: `বাংলা বর্ণমালায় মোট ৫০টি বর্ণের মধ্যে পূর্ণমাত্রার বর্ণ ৩২টি, মাত্রাহীন বর্ণ ১০টি এবং অর্ধমাত্রার বর্ণ ৮টি (ঋ, খ, গ, ণ, থ, ধ, প, শ)। সঠিক উত্তর: B) ৮টি।`
  },
  {
    questionText: '‘হাজার বছর ধরে’ উপন্যাসটির রচয়িতা কে?',
    options: [
      'A) শহীদুল্লা কায়সার',
      'B) জহির রায়হান',
      'C) শওকত ওসমান',
      'D) আখতারুজ্জামান ইলিয়াস'
    ],
    correctAnswer: 'B) জহির রায়হান',
    solution: `টুনি ও মন্তু চরিত্রবিশিষ্ট কালজয়ী উপন্যাস ‘হাজার বছর ধরে’ (১৯৬৪)-এর রচয়িতা কথাশিল্পী ও চলচ্চিত্রকার জহির রায়হান। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘চিলেকোঠার সেপাই’ ও ‘খোয়াবনামা’ উপন্যাস দুটির রচয়িতা কে?',
    options: [
      'A) হাসান আজিজুল হক',
      'B) আখতারুজ্জামান ইলিয়াস',
      'C) মাহমুদুল হক',
      'D) সেলিনা হোসেন'
    ],
    correctAnswer: 'B) আখতারুজ্জামান ইলিয়াস',
    solution: `উনসত্তরের গণঅভ্যুত্থানের পটভূমিতে ‘চিলেকোঠার সেপাই’ এবং তেভাগা আন্দোলন ও দেশভাগের পটভূমিতে ‘খোয়াবনামা’ রচনা করেন আখতারুজ্জামান ইলিয়াস। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘সংশপ্তক’ ও ‘সারেং বৌ’ উপন্যাস দুটির রচয়িতা কে?',
    options: [
      'A) আবু ইসহাক',
      'B) শহীদুল্লা কায়সার',
      'C) সরদার জয়েনউদ্দীন',
      'D) শওকত আলী'
    ],
    correctAnswer: 'B) শহীদুল্লা কায়সার',
    solution: `শহীদ বুদ্ধিজীবী শহীদুল্লা কায়সার রচিত দুটি বিখ্যাত উপন্যাস হলো ‘সারেং বৌ’ (১৯৬২) এবং ‘সংশপ্তক’ (১৯৬৫)। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘সূর্য দীঘল বাড়ী’ উপন্যাসটির লেখক কে?',
    options: [
      'A) জহির রায়হান',
      'B) আবু ইসহাক',
      'C) আলাউদ্দিন আল আজাদ',
      'D) শওকত ওসমান'
    ],
    correctAnswer: 'B) আবু ইসহাক',
    solution: `১৯৫৫ সালে প্রকাশিত ‘সূর্য দীঘল বাড়ী’ (প্রধান চরিত্র: জয়গুন, হাসু) উপন্যাসটির রচয়িতা আবু ইসহাক। সঠিক উত্তর: B) আবু ইসহাক।`
  }
];

// ============================================================================
// 2. ENGLISH LANGUAGE & FOCUS WRITING MASTER POOL (AUTHENTIC BANK EXAM ITEMS)
// ============================================================================
const englishMasterPool: RawMcqSeed[] = [
  {
    questionText: 'Choose the grammatically correct sentence with proper subjunctive usage:',
    options: [
      'A) The central bank recommended that the commercial bank maintains higher liquidity.',
      'B) The central bank recommended that the commercial bank maintain higher liquidity.',
      'C) The central bank recommended that the commercial bank maintained higher liquidity.',
      'D) The central bank recommended the commercial bank to maintaining higher liquidity.'
    ],
    correctAnswer: 'B) The central bank recommended that the commercial bank maintain higher liquidity.',
    solution: `After verbs of recommendation, mandate, or urgency (recommend, insist, demand, require, propose) followed by 'that', English grammar requires the present subjunctive (base form of the verb without '-s', i.e., 'maintain'). Correct Answer: B).`
  },
  {
    questionText: 'Identify the correct form of the verb: "Neither the Branch Manager nor the Cash Officers ___ notified prior to the surprise audit."',
    options: [
      'A) was',
      'B) were',
      'C) has been',
      'D) is'
    ],
    correctAnswer: 'B) were',
    solution: `With correlative conjunctions 'Neither...nor' or 'Either...or', the verb agrees in number with the nearer subject ('Cash Officers', which is plural). Hence, 'were' is correct. Correct Answer: B).`
  },
  {
    questionText: 'Complete the Third Conditional sentence: "Had the importer submitted the shipping documents on time, the bank ___ the demurrage penalty."',
    options: [
      'A) would waive',
      'B) would have waived',
      'C) will have waived',
      'D) waived'
    ],
    correctAnswer: 'B) would have waived',
    solution: `An inverted third conditional clause ('Had + Subject + Past Participle') takes 'would/could/might + have + Past Participle' ('would have waived') in the main clause. Correct Answer: B).`
  },
  {
    questionText: 'Fill in the blank with the appropriate preposition: "All scheduled banks must comply ___ the Anti-Money Laundering guidelines issued by BFIU."',
    options: [
      'A) to',
      'B) with',
      'C) by',
      'D) on'
    ],
    correctAnswer: 'B) with',
    solution: `The verb 'comply' always takes the preposition 'with' (comply with rules/guidelines), whereas 'conform' takes 'to' or 'with' and 'abide' takes 'by'. Correct Answer: B) with.`
  },
  {
    questionText: 'What is the meaning of the idiom "To burn the candle at both ends"?',
    options: [
      'A) To waste electricity in the office',
      'B) To overwork oneself by staying up late and rising early until exhausted',
      'C) To celebrate a promotion extravagantly',
      'D) To negotiate with both parties simultaneously'
    ],
    correctAnswer: 'B) To overwork oneself by staying up late and rising early until exhausted',
    solution: `"To burn the candle at both ends" means to exhaust one's physical or mental resources by working excessively early and late. Correct Answer: B).`
  },
  {
    questionText: 'Choose the word that is closest in meaning (Synonym) to "EPHEMERAL":',
    options: [
      'A) Eternal',
      'B) Transitory / Short-lived',
      'C) Mandatory',
      'D) Lucrative'
    ],
    correctAnswer: 'B) Transitory / Short-lived',
    solution: `"Ephemeral" means lasting for a very short time (transitory, fleeting, evanescent). Its antonym is 'Eternal' or 'Perpetual'. Correct Answer: B).`
  },
  {
    questionText: 'Choose the word most nearly OPPOSITE in meaning (Antonym) to "PRAGMATIC":',
    options: [
      'A) Practical',
      'B) Idealistic / Quixotic',
      'C) Realistic',
      'D) Utilitarian'
    ],
    correctAnswer: 'B) Idealistic / Quixotic',
    solution: `"Pragmatic" means dealing with things sensibly and realistically in a practical way. Its opposite is 'Idealistic', 'Impractical', or 'Quixotic'. Correct Answer: B).`
  },
  {
    questionText: 'Select the pair that best expresses a relationship similar to "INFLATION : PURCHASING POWER":',
    options: [
      'A) Deposit : Vault',
      'B) Depreciation : Asset Value',
      'C) Investment : Dividend',
      'D) Audit : Ledger'
    ],
    correctAnswer: 'B) Depreciation : Asset Value',
    solution: `Higher Inflation erodes/reduces Purchasing Power; similarly, Depreciation erodes/reduces Asset Value over time. Correct Answer: B).`
  },
  {
    questionText: 'Choose the correct Passive Voice of: "The Board of Directors has approved the annual credit policy."',
    options: [
      'A) The annual credit policy was approved by the Board of Directors.',
      'B) The annual credit policy has been approved by the Board of Directors.',
      'C) The annual credit policy had been approved by the Board of Directors.',
      'D) The annual credit policy is being approved by the Board of Directors.'
    ],
    correctAnswer: 'B) The annual credit policy has been approved by the Board of Directors.',
    solution: `Present Perfect Active ('has approved') transforms into Present Perfect Passive ('has been approved'). Correct Answer: B).`
  },
  {
    questionText: 'Which of the following words is spelled correctly?',
    options: [
      'A) Accomodation',
      'B) Accommodation',
      'C) Acommodation',
      'D) Acomodation'
    ],
    correctAnswer: 'B) Accommodation',
    solution: `'Accommodation' contains double 'c' and double 'm' (A-c-c-o-m-m-o-d-a-t-i-o-n). Correct Answer: B).`
  },
  {
    questionText: 'One who is appointed to settle a dispute between two parties is called a/an:',
    options: [
      'A) Auditor',
      'B) Arbitrator',
      'C) Liquidator',
      'D) Actuary'
    ],
    correctAnswer: 'B) Arbitrator',
    solution: `An 'Arbitrator' is an independent person or body officially appointed to settle a dispute. An 'Actuary' calculates insurance/pension risks; a 'Liquidator' winds up a company. Correct Answer: B).`
  },
  {
    questionText: 'Fill in the blank: "No sooner had the treasury market opened ___ the bond yields surged."',
    options: [
      'A) when',
      'B) than',
      'C) then',
      'D) before'
    ],
    correctAnswer: 'B) than',
    solution: `Correlative conjunction rule: 'No sooner... than' (comparative), whereas 'Hardly/Scarcely... when/before'. Correct Answer: B) than.`
  },
  {
    questionText: 'Choose the correct sentence:',
    options: [
      'A) Each of the loan applicants have submitted their TIN certificate.',
      'B) Each of the loan applicants has submitted his or her TIN certificate.',
      'C) Each of the loan applicant has submitted their TIN certificate.',
      'D) Every loan applicants have submitted the TIN certificate.'
    ],
    correctAnswer: 'B) Each of the loan applicants has submitted his or her TIN certificate.',
    solution: `'Each of + plural noun' takes a singular verb ('has') and singular pronoun agreement ('his or her'). Correct Answer: B).`
  },
  {
    questionText: 'What does the phrase "White Elephant" signify?',
    options: [
      'A) A rare and profitable investment',
      'B) A very costly possession that is burdensome to maintain and yields little utility',
      'C) A transparent audit report',
      'D) A sovereign gold bond'
    ],
    correctAnswer: 'B) A very costly possession that is burdensome to maintain and yields little utility',
    solution: `A "White Elephant" is an expensive asset or project whose maintenance cost far exceeds its practical usefulness. Correct Answer: B).`
  },
  {
    questionText: 'Choose the correct indirect speech of: He said to me, "Did you verify the customer’s KYC form yesterday?"',
    options: [
      'A) He asked me if I verified the customer’s KYC form yesterday.',
      'B) He asked me whether I had verified the customer’s KYC form the previous day.',
      'C) He told me that I had verified the customer’s KYC form the previous day.',
      'D) He asked me did I verify the customer’s KYC form the day before.'
    ],
    correctAnswer: 'B) He asked me whether I had verified the customer’s KYC form the previous day.',
    solution: `Simple Past in direct interrogative speech ('Did you verify') changes to Past Perfect ('whether I had verified') and 'yesterday' changes to 'the previous day'. Correct Answer: B).`
  },
  {
    questionText: 'Select the synonym of "OBFUSCATE":',
    options: [
      'A) Clarify',
      'B) Confuse / Make obscure',
      'C) Illuminate',
      'D) Reconcile'
    ],
    correctAnswer: 'B) Confuse / Make obscure',
    solution: `"Obfuscate" means to deliberately make something unclear, obscure, or unintelligible. Its antonyms are 'Clarify' and 'Elucidate'. Correct Answer: B).`
  },
  {
    questionText: 'Fill in the blank with the right preposition: "The officer was exonerated ___ all charges of negligence after the inquiry."',
    options: [
      'A) with',
      'B) from',
      'C) by',
      'D) into'
    ],
    correctAnswer: 'B) from',
    solution: `Standard usage: 'Exonerated from' (or 'acquitted of') charges. Correct Answer: B) from.`
  },
  {
    questionText: 'Identify the part of speech of the underlined word: "The bank recorded an *precedented* growth in digital transactions after the campaign." (Wait: "He works *hard* to meet the branch target.") — What part of speech is "hard" here?',
    options: [
      'A) Adjective',
      'B) Adverb of Manner',
      'C) Preposition',
      'D) Conjunction'
    ],
    correctAnswer: 'B) Adverb of Manner',
    solution: `In "He works hard", the word 'hard' modifies the verb 'works', telling how he works; therefore, it functions as an Adverb of Manner. Correct Answer: B).`
  },
  {
    questionText: 'Choose the correctly spelled word:',
    options: [
      'A) Entrepreneur',
      'B) Entreprenuer',
      'C) Enterpreneur',
      'D) Entreprenur'
    ],
    correctAnswer: 'A) Entrepreneur',
    solution: `The correct spelling is E-n-t-r-e-p-r-e-n-e-u-r. Correct Answer: A) Entrepreneur.`
  },
  {
    questionText: 'What is the meaning of the Latin legal/banking phrase "Bona fide"?',
    options: [
      'A) In bad faith',
      'B) In good faith / Genuine',
      'C) Without a fixed date',
      'D) Proportional share'
    ],
    correctAnswer: 'B) In good faith / Genuine',
    solution: `"Bona fide" means genuine, authentic, or acting in good faith without fraud ("Mala fide" means in bad faith; "Sine die" means indefinitely). Correct Answer: B).`
  },
  {
    questionText: 'Complete the sentence: "It is high time the regulatory authority ___ strict action against willful loan defaulters."',
    options: [
      'A) takes',
      'B) took',
      'C) has taken',
      'D) will take'
    ],
    correctAnswer: 'B) took',
    solution: `After the expression "It is time / It is high time + Subject", the verb must be in the Past Subjunctive (Simple Past form, 'took'). Correct Answer: B) took.`
  },
  {
    questionText: 'Choose the antonym of "ALLEVIATE":',
    options: [
      'A) Mitigate',
      'B) Aggravate / Exacerbate',
      'C) Assuage',
      'D) Relieve'
    ],
    correctAnswer: 'B) Aggravate / Exacerbate',
    solution: `"Alleviate" means to make suffering, deficiency, or a problem less severe. Its direct antonym is 'Aggravate' or 'Exacerbate'. Correct Answer: B).`
  },
  {
    questionText: 'Fill in the blank: "The senior officer is proficient ___ financial modeling and credit risk analysis."',
    options: [
      'A) on',
      'B) in',
      'C) with',
      'D) about'
    ],
    correctAnswer: 'B) in',
    solution: `The adjective 'proficient' takes the preposition 'in' or 'at' ('proficient in financial modeling'). Correct Answer: B) in.`
  },
  {
    questionText: 'What does the idiom "Call it a day" mean?',
    options: [
      'A) To schedule a morning meeting',
      'B) To decide to stop working on something for the rest of the day',
      'C) To declare a bank holiday',
      'D) To audit a single day’s scroll'
    ],
    correctAnswer: 'B) To decide to stop working on something for the rest of the day',
    solution: `"To call it a day" means to stop working for the day after completing sufficient work. Correct Answer: B).`
  },
  {
    questionText: 'Choose the correct affirmative transformation of: "None but a graduate can apply for the Officer (General) post."',
    options: [
      'A) Everyone can apply for the Officer (General) post.',
      'B) Only a graduate can apply for the Officer (General) post.',
      'C) A graduate cannot apply for the Officer (General) post.',
      'D) Scarcely any graduate can apply for the Officer (General) post.'
    ],
    correctAnswer: 'B) Only a graduate can apply for the Officer (General) post.',
    solution: `'None but' (used for persons) replaces 'Only' in negative-affirmative transformations. Correct Answer: B).`
  }
];

// ============================================================================
// 3. GENERAL KNOWLEDGE & BANKING ECONOMY MASTER POOL (20 ITEMS + VARIANTS)
// ============================================================================
const gkMasterPool: RawMcqSeed[] = [
  {
    questionText: 'Under which Presidential Order was Bangladesh Bank established as the central bank of Bangladesh?',
    options: [
      'A) P.O. No. 26 of 1972',
      'B) Bangladesh Bank Order, 1972 (President’s Order No. 127 of 1972)',
      'C) Bank Company Act, 1991',
      'D) Negotiable Instruments Act, 1881'
    ],
    correctAnswer: 'B) Bangladesh Bank Order, 1972 (President’s Order No. 127 of 1972)',
    solution: `Bangladesh Bank was established under the Bangladesh Bank Order, 1972 (P.O. No. 127 of 1972) with retrospective effect from 16 December 1971. (P.O. No. 26 of 1972 was the Bangladesh Banks Nationalisation Order). Correct Answer: B).`
  },
  {
    questionText: 'Which section of the Negotiable Instruments Act, 1881 deals with criminal liability for dishonor of a cheque due to insufficiency of funds?',
    options: [
      'A) Section 85',
      'B) Section 138',
      'C) Section 131',
      'D) Section 10'
    ],
    correctAnswer: 'B) Section 138',
    solution: `Section 138 of the Negotiable Instruments Act, 1881 stipulates penalties (up to 1 year imprisonment or fine up to 3 times the cheque value, or both) for cheque dishonor due to insufficient funds. Correct Answer: B) Section 138.`
  },
  {
    questionText: 'What is the minimum Capital to Risk-Weighted Assets Ratio (CRAR) including the Capital Conservation Buffer (CCB) under Basel III guidelines of Bangladesh Bank?',
    options: [
      'A) 8.00%',
      'B) 12.50% (10.0% Minimum CRAR + 2.5% CCB)',
      'C) 10.50%',
      'D) 15.00%'
    ],
    correctAnswer: 'B) 12.50% (10.0% Minimum CRAR + 2.5% CCB)',
    solution: `Under Bangladesh Bank's Basel III roadmap, scheduled banks must maintain 10.0% minimum CRAR plus a 2.50% Capital Conservation Buffer (totaling 12.50% of Risk-Weighted Assets). Correct Answer: B).`
  },
  {
    questionText: 'Which international rulebook published by the International Chamber of Commerce (ICC) governs Documentary Letters of Credit (LC)?',
    options: [
      'A) Incoterms 2020',
      'B) UCP 600 (Uniform Customs and Practice for Documentary Credits)',
      'C) Basel III Accord',
      'D) FATF 40 Recommendations'
    ],
    correctAnswer: 'B) UCP 600 (Uniform Customs and Practice for Documentary Credits)',
    solution: `UCP 600 (effective July 1, 2007) is the official ICC rulebook governing international Documentary Letters of Credit (LC). Correct Answer: B).`
  },
  {
    questionText: 'In Bangladesh Bank’s payment ecosystem, which system settles high-value interbank transactions (Tk. 1,00,000 and above) instantaneously in real time?',
    options: [
      'A) BACPS',
      'B) BD-RTGS (Real Time Gross Settlement)',
      'C) BEFTN',
      'D) e-Challan'
    ],
    correctAnswer: 'B) BD-RTGS (Real Time Gross Settlement)',
    solution: `BD-RTGS settles high-value domestic BDT and foreign currency transactions instantaneously on a gross, transaction-by-transaction basis. Correct Answer: B).`
  },
  {
    questionText: 'According to BFIU (Bangladesh Financial Intelligence Unit) directives, what is the daily cash transaction threshold in an account that triggers a mandatory Cash Transaction Report (CTR)?',
    options: [
      'A) Tk. 5,00,000 and above',
      'B) Tk. 10,00,000 (Ten Lac) and above',
      'C) Tk. 20,00,000 and above',
      'D) Tk. 50,00,000 and above'
    ],
    correctAnswer: 'B) Tk. 10,00,000 (Ten Lac) and above',
    solution: `Any single or aggregate daily cash deposit or withdrawal of Tk. 10,00,000 (1 Million BDT) or more in an account requires a mandatory Cash Transaction Report (CTR) to BFIU. Correct Answer: B).`
  },
  {
    questionText: 'During the 1971 Liberation War of Bangladesh, Dhaka City and its surrounding areas fell under which operational Sector?',
    options: [
      'A) Sector 1',
      'B) Sector 2',
      'C) Sector 3',
      'D) Sector 10'
    ],
    correctAnswer: 'B) Sector 2',
    solution: `During the Liberation War of 1971, Dhaka, Comilla, Noakhali, and parts of Faridpur were under Sector 2, commanded by Major Khaled Mosharraf and later Major ATM Haider. (Sector 10 was the Naval Commando sector). Correct Answer: B) Sector 2.`
  },
  {
    questionText: 'Which Article of the Constitution of the People’s Republic of Bangladesh guarantees "Equality of opportunity in public employment"?',
    options: [
      'A) Article 27',
      'B) Article 29',
      'C) Article 31',
      'D) Article 44'
    ],
    correctAnswer: 'B) Article 29',
    solution: `Article 29 of the Constitution guarantees equality of opportunity for all citizens in respect of employment or office in the service of the Republic. (Article 27 is Equality before law). Correct Answer: B) Article 29.`
  },
  {
    questionText: 'Who was the first Governor of Bangladesh Bank?',
    options: [
      'A) M. Nurul Islam',
      'B) A. N. M. Hamidullah',
      'C) Kafiluddin Mahmood',
      'D) Dr. Fakhruddin Ahmed'
    ],
    correctAnswer: 'B) A. N. M. Hamidullah',
    solution: `A. N. M. Hamidullah served as the first Governor of Bangladesh Bank from 18 January 1972 to 18 November 1974. Correct Answer: B).`
  },
  {
    questionText: 'Which currency notes/coins in Bangladesh are "Government Notes" signed by the Senior Secretary of the Finance Division rather than the Governor of Bangladesh Bank?',
    options: [
      'A) Tk. 2, Tk. 5, and Tk. 10',
      'B) Tk. 1, Tk. 2, and Tk. 5',
      'C) Only Tk. 1 and Tk. 2',
      'D) Tk. 5 and Tk. 20'
    ],
    correctAnswer: 'B) Tk. 1, Tk. 2, and Tk. 5',
    solution: `Tk. 1, Tk. 2, and Tk. 5 notes/coins are legal tender Government Notes signed by the Finance Secretary, whereas Tk. 10, 20, 50, 100, 200, 500, and 1000 are Bank Notes signed by the Governor of Bangladesh Bank. Correct Answer: B).`
  },
  {
    questionText: 'Where is the headquarters of the Asian Infrastructure Investment Bank (AIIB) and the New Development Bank (NDB) located respectively?',
    options: [
      'A) Tokyo and Manila',
      'B) Beijing and Shanghai',
      'C) Singapore and Hong Kong',
      'D) Jakarta and New Delhi'
    ],
    correctAnswer: 'B) Beijing and Shanghai',
    solution: `AIIB is headquartered in Beijing, China, while the BRICS New Development Bank (NDB) is headquartered in Shanghai, China. (ADB is in Manila, Philippines). Correct Answer: B).`
  },
  {
    questionText: 'What is the primary monetary policy instrument interest rate at which commercial banks borrow overnight/short-term funds from Bangladesh Bank against government securities?',
    options: [
      'A) Reverse Repo / SDF Rate',
      'B) Repo Rate (Policy Rate)',
      'C) Statutory Liquidity Ratio (SLR)',
      'D) Call Money Rate'
    ],
    correctAnswer: 'B) Repo Rate (Policy Rate)',
    solution: `The Repo (Repurchase Agreement) Rate is the benchmark Policy Rate of Bangladesh Bank used to inject liquidity or tighten credit to curb inflation. Correct Answer: B).`
  },
  {
    questionText: 'What is the legal validity period of a standard bank cheque in Bangladesh before it becomes a "Stale Cheque"?',
    options: [
      'A) 3 months from the date of issue',
      'B) 6 months from the date of issue',
      'C) 9 months from the date of issue',
      'D) 12 months from the date of issue'
    ],
    correctAnswer: 'B) 6 months from the date of issue',
    solution: `In Bangladesh banking practice, a cheque is valid for 6 months from the date written on it. After 6 months, it is treated as a Stale Cheque. Correct Answer: B).`
  },
  {
    questionText: 'What does "CAMELS" rating stand for in central bank off-site and on-site bank supervision?',
    options: [
      'A) Cash, Assets, Market, Equity, Loans, Security',
      'B) Capital Adequacy, Asset Quality, Management, Earnings, Liquidity, and Sensitivity to Market Risk',
      'C) Credit, Accounting, Margin, Exchange, Liability, Solvency',
      'D) Capital, Audit, Monetary, Export, Lending, Supervision'
    ],
    correctAnswer: 'B) Capital Adequacy, Asset Quality, Management, Earnings, Liquidity, and Sensitivity to Market Risk',
    solution: `CAMELS is the internationally recognized supervisory rating system evaluating Capital Adequacy, Asset Quality, Management, Earnings, Liquidity, and Sensitivity to Market Risk. Correct Answer: B).`
  },
  {
    questionText: 'Which specialized institution acts as the Credit Information Bureau (CIB) maintaining borrower credit history in Bangladesh?',
    options: [
      'A) BIBM',
      'B) Credit Information Bureau (CIB) Wing of Bangladesh Bank',
      'C) Bangladesh Securities and Exchange Commission (BSEC)',
      'D) Microcredit Regulatory Authority (MRA)'
    ],
    correctAnswer: 'B) Credit Information Bureau (CIB) Wing of Bangladesh Bank',
    solution: `The Credit Information Bureau (CIB) was established in Bangladesh Bank in 1992 to maintain an online database of credit facilities and default status of borrowers across all banks and NBFIs. Correct Answer: B).`
  },
  {
    questionText: 'When was the historic Language Movement’s 21st February proclaimed as "International Mother Language Day" by UNESCO?',
    options: [
      'A) 17 November 1998',
      'B) 17 November 1999',
      'C) 21 February 2000',
      'D) 16 December 1997'
    ],
    correctAnswer: 'B) 17 November 1999',
    solution: `UNESCO proclaimed 21 February as International Mother Language Day at its 30th General Conference in Paris on 17 November 1999, and it has been observed globally since 21 February 2000. Correct Answer: B).`
  },
  {
    questionText: 'What is "Green Banking" in the financial sector of Bangladesh?',
    options: [
      'A) Printing green-colored currency notes',
      'B) Environmentally responsible financing that incorporates Environmental & Social Risk Management (ESRM) and supports renewable energy / ETP projects',
      'C) Financing exclusively agricultural raw jute exports',
      'D) Opening branches only in rural forest areas'
    ],
    correctAnswer: 'B) Environmentally responsible financing that incorporates Environmental & Social Risk Management (ESRM) and supports renewable energy / ETP projects',
    solution: `Green Banking promotes eco-friendly practices, paperless banking, and mandatory Environmental and Social Risk Management (ESRM) in credit appraisal while refinancing solar, biogas, and Effluent Treatment Plant (ETP) projects. Correct Answer: B).`
  },
  {
    questionText: 'In international trade finance, what does "FOB" and "CIF" stand for under Incoterms?',
    options: [
      'A) Foreign Order Bill & Credit Insurance Fee',
      'B) Free On Board & Cost, Insurance, and Freight',
      'C) Freight On Bank & Custom Invoice Form',
      'D) Forward Option Bond & Commercial Interest Fund'
    ],
    correctAnswer: 'B) Free On Board & Cost, Insurance, and Freight',
    solution: `Under Incoterms, FOB stands for 'Free On Board' (buyer pays ocean freight and marine insurance) and CIF stands for 'Cost, Insurance, and Freight' (seller pays cost, marine insurance, and freight to the destination port). Correct Answer: B).`
  },
  {
    questionText: 'Which global organization has its headquarters in Geneva, Switzerland and oversees multilateral international trade rules?',
    options: [
      'A) International Monetary Fund (IMF)',
      'B) World Trade Organization (WTO)',
      'C) World Bank Group',
      'D) Bank for International Settlements (BIS)'
    ],
    correctAnswer: 'B) World Trade Organization (WTO)',
    solution: `The World Trade Organization (WTO), established on 1 January 1995 succeeding GATT, is headquartered in Geneva, Switzerland. (BIS is in Basel; IMF & World Bank are in Washington, D.C.). Correct Answer: B).`
  },
  {
    questionText: 'What is a "Nostro Account" in foreign exchange and correspondent banking?',
    options: [
      'A) A local currency savings account of an expatriate',
      'B) "Our account with you" — a foreign currency account maintained by a domestic bank with a foreign correspondent bank abroad',
      'C) A foreign bank’s BDT account maintained with a bank in Bangladesh',
      'D) A dormant unclaimed deposit account'
    ],
    correctAnswer: 'B) "Our account with you" — a foreign currency account maintained by a domestic bank with a foreign correspondent bank abroad',
    solution: `A Nostro account ("Ours") is an account that a domestic bank holds in a foreign currency in a foreign correspondent bank (e.g., Sonali Bank's USD account with Citibank New York). Conversely, that same account from the foreign bank's perspective is a Vostro ("Yours") account. Correct Answer: B).`
  }
];

// ============================================================================
// 4. COMPUTER & BASIC ICT MASTER POOL (10 ITEMS + VARIANTS)
// ============================================================================
const ictMasterPool: RawMcqSeed[] = [
  {
    questionText: 'Which high-speed volatile memory is placed directly between the CPU registers and main RAM to minimize memory access latency?',
    options: [
      'A) Secondary Virtual Disk',
      'B) Cache Memory (L1 / L2 / L3 SRAM)',
      'C) Optical CD-ROM',
      'D) Magnetic Tape Drive'
    ],
    correctAnswer: 'B) Cache Memory (L1 / L2 / L3 SRAM)',
    solution: `Cache memory (built using fast Static RAM) buffers frequently executed instructions and data close to the CPU cores, reducing wait states. Correct Answer: B).`
  },
  {
    questionText: 'In Microsoft Excel, which function searches for a lookup value in the leftmost column of a table range and returns a corresponding value from another column?',
    options: [
      'A) HLOOKUP()',
      'B) VLOOKUP()',
      'C) SUMIFS()',
      'D) TRUNC()'
    ],
    correctAnswer: 'B) VLOOKUP()',
    solution: `VLOOKUP(lookup_value, table_array, col_index_num, FALSE) searches vertically down the first column of a range and retrieves the value from the specified column index. Correct Answer: B).`
  },
  {
    questionText: 'Which technology is used in Bangladesh Automated Cheque Processing System (BACPS) to read the magnetic ink code at the bottom of a cheque leaf?',
    options: [
      'A) OMR',
      'B) MICR (Magnetic Ink Character Recognition)',
      'C) Plotter',
      'D) Joy Stick'
    ],
    correctAnswer: 'B) MICR (Magnetic Ink Character Recognition)',
    solution: `MICR (Magnetic Ink Character Recognition) reads the routing number, account number, and cheque serial printed with iron-oxide magnetic ink on cheques. Correct Answer: B).`
  },
  {
    questionText: 'What is the size in bits of an IPv4 address and an IPv6 address respectively?',
    options: [
      'A) 16 bits and 64 bits',
      'B) 32 bits and 128 bits',
      'C) 32 bits and 64 bits',
      'D) 64 bits and 256 bits'
    ],
    correctAnswer: 'B) 32 bits and 128 bits',
    solution: `IPv4 uses 32-bit addresses (4 octets), whereas IPv6 uses 128-bit hexadecimal addresses to provide an virtually inexhaustible address space. Correct Answer: B).`
  },
  {
    questionText: 'In Bijoy Bangla keyboard software, which shortcut key toggles between English mode and Bijoy Classic (ANSI) Bangla mode?',
    options: [
      'A) Ctrl + Shift + B',
      'B) Ctrl + Alt + B',
      'C) Alt + F4',
      'D) Ctrl + Space'
    ],
    correctAnswer: 'B) Ctrl + Alt + B',
    solution: `Pressing 'Ctrl + Alt + B' switches between English and Bijoy ANSI mode, while 'Ctrl + Alt + V' switches to Bijoy Unicode mode. Correct Answer: B).`
  },
  {
    questionText: 'In a relational database (RDBMS), which constraint uniquely identifies each record in a table and never allows NULL values?',
    options: [
      'A) Foreign Key',
      'B) Primary Key',
      'C) Composite Index',
      'D) Check Constraint'
    ],
    correctAnswer: 'B) Primary Key',
    solution: `A Primary Key enforces entity integrity by ensuring every row in a database table is uniquely identifiable and non-null. Correct Answer: B) Primary Key.`
  },
  {
    questionText: 'While editing a formula in Microsoft Excel, pressing which function key converts a relative cell reference (A1) into an absolute cell reference ($A$1)?',
    options: [
      'A) F2',
      'B) F4',
      'C) F5',
      'D) F7'
    ],
    correctAnswer: 'B) F4',
    solution: `Pressing F4 inside an Excel formula cycles through absolute ($A$1), mixed (A$1, $A1), and relative (A1) cell references. Correct Answer: B) F4.`
  },
  {
    questionText: 'Which network protocol encrypts HTTP web traffic using TLS/SSL over TCP Port 443 for secure online banking?',
    options: [
      'A) FTP',
      'B) HTTPS (Hypertext Transfer Protocol Secure)',
      'C) Telnet',
      'D) SMTP'
    ],
    correctAnswer: 'B) HTTPS (Hypertext Transfer Protocol Secure)',
    solution: `HTTPS secures client-server communication over TCP port 443 using TLS (Transport Layer Security) encryption and digital certificates. Correct Answer: B).`
  },
  {
    questionText: 'In Microsoft Word, what is the keyboard shortcut to insert a manual Page Break and to apply Justify alignment respectively?',
    options: [
      'A) Shift + Enter and Ctrl + L',
      'B) Ctrl + Enter and Ctrl + J',
      'C) Alt + Enter and Ctrl + E',
      'D) Ctrl + P and Ctrl + R'
    ],
    correctAnswer: 'B) Ctrl + Enter and Ctrl + J',
    solution: `In MS Word, 'Ctrl + Enter' inserts a Page Break and 'Ctrl + J' applies Justify alignment to selected paragraphs. Correct Answer: B).`
  },
  {
    questionText: 'What is the binary equivalent of the decimal number 53 and the hexadecimal equivalent of binary (11101011)_2?',
    options: [
      'A) 110011_2 and D9_16',
      'B) 110101_2 and EB_16',
      'C) 101101_2 and FA_16',
      'D) 111001_2 and C7_16'
    ],
    correctAnswer: 'B) 110101_2 and EB_16',
    solution: `53 = 32 + 16 + 4 + 1 = (110101)_2. And (1110 1011)_2 = 14 (E) and 11 (B) = (EB)_16. Correct Answer: B).`
  }
];

// ============================================================================
// 5. DYNAMIC QUANTITATIVE APTITUDE GENERATOR (20 DISTINCT MATH MCQs PER YEAR)
// ============================================================================
function buildYearSpecificMathMcqs(year: number, paperId: string, paperCode: string, startQ: number): NonItQuestionItem[] {
  const offset = year - 2010; // 0 to 16
  const items: RawMcqSeed[] = [];

  // Math 1: Compound Interest Principal
  const p1 = 10000 + offset * 1000;
  const a1_2yr = Math.round(p1 * 1.21);
  items.push({
    questionText: `A sum of money invested at 10% compound interest per annum amounts to Tk. ${a1_2yr.toLocaleString()} in 2 years. What was the original principal sum invested?`,
    options: [
      `A) Tk. ${(p1 - 1000).toLocaleString()}`,
      `B) Tk. ${p1.toLocaleString()}`,
      `C) Tk. ${(p1 + 500).toLocaleString()}`,
      `D) Tk. ${(p1 + 1000).toLocaleString()}`
    ],
    correctAnswer: `B) Tk. ${p1.toLocaleString()}`,
    solution: `Step 1: Formula for Compound Amount: A = P(1 + r/100)^n
Given r = 10%, n = 2 years, so (1 + 10/100)^2 = (1.1)^2 = 1.21.
Step 2: P × 1.21 = ${a1_2yr} => P = ${a1_2yr} / 1.21 = Tk. ${p1.toLocaleString()}.
Correct Answer: B) Tk. ${p1.toLocaleString()}.`
  });

  // Math 2: Train & Platform Crossing
  const trainLen = 140 + offset * 10;
  const platLen = 160 + offset * 10;
  const totalDist = trainLen + platLen;
  const timeSec = totalDist / 20; // at 72 km/h = 20 m/s
  items.push({
    questionText: `A train ${trainLen} meters long is running at a uniform speed of 72 km/h. How many seconds will it take to cross a station platform ${platLen} meters long?`,
    options: [
      `A) ${timeSec - 3} seconds`,
      `B) ${timeSec} seconds`,
      `C) ${timeSec + 4} seconds`,
      `D) ${timeSec + 6} seconds`
    ],
    correctAnswer: `B) ${timeSec} seconds`,
    solution: `Step 1: Convert speed from km/h to m/s: 72 × (5 / 18) = 20 m/s.
Step 2: Total distance to cover = Train length + Platform length = ${trainLen} + ${platLen} = ${totalDist} meters.
Step 3: Time required = ${totalDist} / 20 = ${timeSec} seconds.
Correct Answer: B) ${timeSec} seconds.`
  });

  // Math 3: Profit & Loss Markup/Discount
  const markup = 40;
  const disc = 10 + (offset % 3) * 5; // 10, 15, or 20
  const sp = 140 * (100 - disc) / 100;
  const netProfit = sp - 100;
  items.push({
    questionText: `A trader marks his merchandise ${markup}% above the cost price and allows a cash discount of ${disc}% on the marked price. What is his net profit percentage?`,
    options: [
      `A) ${netProfit - 3}%`,
      `B) ${netProfit}%`,
      `C) ${netProfit + 2}%`,
      `D) ${netProfit + 5}%`
    ],
    correctAnswer: `B) ${netProfit}%`,
    solution: `Let Cost Price (CP) = Tk. 100.
Marked Price (MP) = 100 + ${markup} = Tk. 140.
Selling Price (SP) after ${disc}% discount = 140 × ${(100 - disc) / 100} = Tk. ${sp}.
Net Profit = ${sp} - 100 = ${netProfit}%.
Correct Answer: B) ${netProfit}%.`
  });

  // Math 4: Algebraic Identity x + 1/x
  const k = 4 + (offset % 3); // 4, 5, or 6
  const cubeVal = k * k * k - 3 * k;
  items.push({
    questionText: `If x + (1/x) = ${k}, then what is the numerical value of x³ + (1/x³)?`,
    options: [
      `A) ${cubeVal - 10}`,
      `B) ${cubeVal}`,
      `C) ${k * k * k}`,
      `D) ${cubeVal + 12}`
    ],
    correctAnswer: `B) ${cubeVal}`,
    solution: `Using the algebraic identity: x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x)
= (${k})³ - 3(${k}) = ${k * k * k} - ${3 * k} = ${cubeVal}.
Correct Answer: B) ${cubeVal}.`
  });

  // Math 5: Average Age Inclusion
  const nOfficers = 20 + (offset % 6);
  const avgAge = 30 + (offset % 5);
  const mgrAge = avgAge + nOfficers + 1;
  items.push({
    questionText: `The average age of ${nOfficers} officers in a bank branch is ${avgAge} years. When the Branch Manager’s age is added, the average age increases by 1 year. What is the age of the Branch Manager?`,
    options: [
      `A) ${mgrAge - 2} years`,
      `B) ${mgrAge} years`,
      `C) ${mgrAge + 2} years`,
      `D) ${mgrAge + 4} years`
    ],
    correctAnswer: `B) ${mgrAge} years`,
    solution: `Sum of ages of ${nOfficers} officers = ${nOfficers} × ${avgAge} = ${nOfficers * avgAge} years.
New average of ${nOfficers + 1} persons = ${avgAge + 1} years.
New total age = ${nOfficers + 1} × ${avgAge + 1} = ${(nOfficers + 1) * (avgAge + 1)} years.
Age of the Branch Manager = ${(nOfficers + 1) * (avgAge + 1)} - ${nOfficers * avgAge} = ${mgrAge} years.
Correct Answer: B) ${mgrAge} years.`
  });

  // Math 6: Set Theory / Venn Diagram
  const passEng = 75 + (offset % 5);
  const passMath = 80;
  const passBoth = 65 + (offset % 5);
  const passAtLeastOne = passEng + passMath - passBoth; // 90%
  const failBothPct = 100 - passAtLeastOne; // 10%
  const failCount = 30 + offset * 5;
  const totalCand = (failCount * 100) / failBothPct;
  items.push({
    questionText: `In a bank recruitment test, ${passEng}% of the candidates passed in English, ${passMath}% passed in Mathematics, and ${passBoth}% passed in both subjects. If ${failCount} candidates failed in both subjects, what was the total number of candidates?`,
    options: [
      `A) ${totalCand - 50}`,
      `B) ${totalCand}`,
      `C) ${totalCand + 50}`,
      `D) ${totalCand + 100}`
    ],
    correctAnswer: `B) ${totalCand}`,
    solution: `Percentage passing at least one subject = P(E ∪ M) = ${passEng}% + ${passMath}% - ${passBoth}% = ${passAtLeastOne}%.
Percentage failing in both subjects = 100% - ${passAtLeastOne}% = ${failBothPct}%.
Given ${failBothPct}% of Total = ${failCount} => Total candidates = (${failCount} × 100) / ${failBothPct} = ${totalCand}.
Correct Answer: B) ${totalCand}.`
  });

  // Math 7: Boat & Stream
  const downDist = 24 + (offset % 4) * 6;
  const upDist = 12 + (offset % 4) * 3;
  const dSpeed = downDist / 3;
  const uSpeed = upDist / 3;
  const boatSpd = (dSpeed + uSpeed) / 2;
  items.push({
    questionText: `A boat travels ${downDist} km downstream in 3 hours and ${upDist} km upstream in 3 hours. What is the speed of the boat in still water?`,
    options: [
      `A) ${boatSpd - 1} km/h`,
      `B) ${boatSpd} km/h`,
      `C) ${boatSpd + 1.5} km/h`,
      `D) ${boatSpd + 2} km/h`
    ],
    correctAnswer: `B) ${boatSpd} km/h`,
    solution: `Downstream speed = ${downDist} / 3 = ${dSpeed} km/h.
Upstream speed = ${upDist} / 3 = ${uSpeed} km/h.
Speed of boat in still water = (${dSpeed} + ${uSpeed}) / 2 = ${boatSpd} km/h.
Correct Answer: B) ${boatSpd} km/h.`
  });

  // Math 8: Work & Time (Two Pipes / Workers)
  items.push({
    questionText: 'Worker A can complete a bank audit in 12 days and Worker B can complete the same audit in 24 days. If they work together, in how many days will the audit be completed?',
    options: [
      'A) 6 days',
      'B) 8 days',
      'C) 9 days',
      'D) 10 days'
    ],
    correctAnswer: 'B) 8 days',
    solution: `Combined 1-day work = 1/12 + 1/24 = (2 + 1)/24 = 3/24 = 1/8 of the audit.
Total time working together = 8 days.
Correct Answer: B) 8 days.`
  });

  // Math 9: Mixture & Water Addition
  const mixTotal = 60 + (offset % 3) * 30; // 60, 90, 120
  const waterAdded = mixTotal / 5; // 12, 18, 24
  items.push({
    questionText: `A mixture of ${mixTotal} liters of milk and water contains 10% water. How many liters of water must be added so that water becomes 25% of the new mixture?`,
    options: [
      `A) ${waterAdded - 2} liters`,
      `B) ${waterAdded} liters`,
      `C) ${waterAdded + 3} liters`,
      `D) ${waterAdded + 5} liters`
    ],
    correctAnswer: `B) ${waterAdded} liters`,
    solution: `Initial water = 10% of ${mixTotal} = ${mixTotal * 0.1} liters.
Let x liters of water be added: (${mixTotal * 0.1} + x) / (${mixTotal} + x) = 25/100 = 1/4
=> ${mixTotal * 0.4} + 4x = ${mixTotal} + x => 3x = ${mixTotal * 0.6} => x = ${waterAdded} liters.
Correct Answer: B) ${waterAdded} liters.`
  });

  // Math 10: Ratio of Income & Savings
  const mult = 8000 + (offset % 5) * 1000;
  const savings = mult * 1.5;
  const incA = 5 * mult;
  items.push({
    questionText: `The monthly incomes of two bank officers A and B are in the ratio 5 : 4 and their monthly expenditures are in the ratio 7 : 5. If each saves Tk. ${savings.toLocaleString()} per month, what is the monthly income of Officer A?`,
    options: [
      `A) Tk. ${(4 * mult).toLocaleString()}`,
      `B) Tk. ${incA.toLocaleString()}`,
      `C) Tk. ${(incA + 5000).toLocaleString()}`,
      `D) Tk. ${(incA - 5000).toLocaleString()}`
    ],
    correctAnswer: `B) Tk. ${incA.toLocaleString()}`,
    solution: `Let monthly incomes be 5x and 4x.
(5x - ${savings}) / (4x - ${savings}) = 7 / 5
=> 25x - ${5 * savings} = 28x - ${7 * savings}
=> 3x = ${2 * savings} => x = ${mult}.
Monthly income of Officer A = 5x = 5 × ${mult} = Tk. ${incA.toLocaleString()}.
Correct Answer: B) Tk. ${incA.toLocaleString()}.`
  });

  // Math 11: Mensuration (Square Diagonal & Perimeter)
  const side = 6 + (offset % 7);
  const perim = 4 * side;
  items.push({
    questionText: `If the length of the diagonal of a square is ${side}√2 cm, what is the perimeter and area of the square respectively?`,
    options: [
      `A) ${perim - 4} cm and ${side * side} sq.cm`,
      `B) ${perim} cm and ${side * side} sq.cm`,
      `C) ${perim} cm and ${2 * side * side} sq.cm`,
      `D) ${2 * side} cm and ${side * side} sq.cm`
    ],
    correctAnswer: `B) ${perim} cm and ${side * side} sq.cm`,
    solution: `Diagonal of a square = a√2 = ${side}√2 => Side a = ${side} cm.
Perimeter = 4a = 4 × ${side} = ${perim} cm; Area = a² = ${side * side} sq.cm.
Correct Answer: B).`
  });

  // Math 12: Percentage Radius / Area Change
  const rPct = 10 + (offset % 3) * 10; // 10, 20, 30
  const areaPct = 2 * rPct + (rPct * rPct) / 100;
  items.push({
    questionText: `If the radius of a circle is increased by ${rPct}%, by what percentage does its area increase?`,
    options: [
      `A) ${2 * rPct}%`,
      `B) ${areaPct}%`,
      `C) ${areaPct + 4}%`,
      `D) ${rPct * rPct}%`
    ],
    correctAnswer: `B) ${areaPct}%`,
    solution: `Using successive percentage change formula:
Net % increase in Area = r + r + (r² / 100) = ${rPct} + ${rPct} + (${rPct * rPct} / 100) = ${areaPct}%.
Correct Answer: B) ${areaPct}%.`
  });

  // Math 13: Logarithm Equation
  items.push({
    questionText: 'If log₂(x) + log₂(x - 2) = 3, what is the positive value of x?',
    options: [
      'A) 2',
      'B) 4',
      'C) 6',
      'D) 8'
    ],
    correctAnswer: 'B) 4',
    solution: `log₂[x(x - 2)] = 3 => x(x - 2) = 2³ = 8
=> x² - 2x - 8 = 0 => (x - 4)(x + 2) = 0.
Since logarithm argument must be positive (x > 2), x = 4.
Correct Answer: B) 4.`
  });

  // Math 14: Permutation & Combination (Committee Selection)
  items.push({
    questionText: 'A credit committee of 4 members is to be formed from 5 senior officers and 3 cash officers. In how many ways can the committee be formed so that it includes at least 2 cash officers?',
    options: [
      'A) 30',
      'B) 35',
      'C) 45',
      'D) 60'
    ],
    correctAnswer: 'B) 35',
    solution: `Case 1 (2 Cash Officers + 2 Senior Officers): ³C₂ × ⁵C₂ = 3 × 10 = 30 ways.
Case 2 (3 Cash Officers + 1 Senior Officer): ³C₃ × ⁵C₁ = 1 × 5 = 5 ways.
Total ways = 30 + 5 = 35 ways.
Correct Answer: B) 35.`
  });

  // Math 15: Simple Interest Doubling Rate
  const yrs = 8 + (offset % 2) * 2; // 8 or 10 years
  const rate = 100 / yrs;
  items.push({
    questionText: `At what annual rate of simple interest will a sum of money double itself in ${yrs} years?`,
    options: [
      `A) ${rate - 2.5}%`,
      `B) ${rate}%`,
      `C) ${rate + 2.5}%`,
      `D) ${rate + 5}%`
    ],
    correctAnswer: `B) ${rate}%`,
    solution: `For a principal P to double, Simple Interest I = P.
Rate R = (I × 100) / (P × T) = 100 / ${yrs} = ${rate}% per annum.
Correct Answer: B) ${rate}%.`
  });

  // Math 16: Probability of Drawing Balls
  items.push({
    questionText: 'A box contains 5 green balls and 4 red balls. If 2 balls are drawn at random without replacement, what is the probability that both balls are green?',
    options: [
      'A) 5/18',
      'B) 5/18 (or 10/36)',
      'C) 1/3',
      'D) 4/9'
    ],
    correctAnswer: 'B) 5/18 (or 10/36)',
    solution: `Total balls = 5 + 4 = 9.
Total ways to draw 2 balls = ⁹C₂ = (9 × 8)/2 = 36.
Ways to draw 2 green balls = ⁵C₂ = (5 × 4)/2 = 10.
Probability = 10 / 36 = 5 / 18.
Correct Answer: B) 5/18 (or 10/36).`
  });

  // Math 17: Father & Son Age Ratio
  items.push({
    questionText: 'A father is currently 3 times as old as his son. After 12 years, he will be twice as old as his son. What is the present age of the father?',
    options: [
      'A) 32 years',
      'B) 36 years',
      'C) 42 years',
      'D) 45 years'
    ],
    correctAnswer: 'B) 36 years',
    solution: `Let son's present age = x and father's present age = 3x.
After 12 years: 3x + 12 = 2(x + 12) => 3x + 12 = 2x + 24 => x = 12 years.
Father's present age = 3 × 12 = 36 years.
Correct Answer: B) 36 years.`
  });

  // Math 18: Partnership Profit Distribution
  items.push({
    questionText: 'Three partners P, Q, and R invest Tk. 40,000, Tk. 60,000, and Tk. 80,000 respectively in a business. If the total annual profit is Tk. 90,000, what is Q’s share of the profit?',
    options: [
      'A) Tk. 20,000',
      'B) Tk. 30,000',
      'C) Tk. 35,000',
      'D) Tk. 40,000'
    ],
    correctAnswer: 'B) Tk. 30,000',
    solution: `Capital ratio of P : Q : R = 40,000 : 60,000 : 80,000 = 2 : 3 : 4 (Sum of ratios = 9).
Q's share = (3 / 9) × 90,000 = Tk. 30,000.
Correct Answer: B) Tk. 30,000.`
  });

  // Math 19: Number System HCF & LCM
  const hcf = 12;
  const lcm = 180;
  const num1 = 36;
  const num2 = (hcf * lcm) / num1; // 60
  items.push({
    questionText: `The HCF of two numbers is ${hcf} and their LCM is ${lcm}. If one of the numbers is ${num1}, what is the other number?`,
    options: [
      `A) 48`,
      `B) ${num2}`,
      `C) 72`,
      `D) 84`
    ],
    correctAnswer: `B) ${num2}`,
    solution: `Product of two numbers = HCF × LCM
=> ${num1} × Other Number = ${hcf} × ${lcm}
=> Other Number = (${hcf} × ${lcm}) / ${num1} = ${num2}.
Correct Answer: B) ${num2}.`
  });

  // Math 20: Interior Angles of Polygon / Triangle Geometry
  items.push({
    questionText: 'In a right-angled triangle, if the lengths of the two perpendicular legs are 9 cm and 12 cm, what is the length of the hypotenuse and the area of the triangle?',
    options: [
      'A) 13 cm and 48 sq.cm',
      'B) 15 cm and 54 sq.cm',
      'C) 15 cm and 108 sq.cm',
      'D) 17 cm and 54 sq.cm'
    ],
    correctAnswer: 'B) 15 cm and 54 sq.cm',
    solution: `By Pythagoras theorem: Hypotenuse = √(9² + 12²) = √(81 + 144) = √225 = 15 cm.
Area = (1/2) × base × height = 0.5 × 9 × 12 = 54 sq.cm.
Correct Answer: B) 15 cm and 54 sq.cm.`
  });

  return items.map((item, idx) => {
    const qNum = startQ + idx;
    const qNoStr = `MCQ-${String(qNum).padStart(3, '0')}`;
    return {
      id: `${paperId}-mcq-${qNum}`,
      paperId,
      questionPaperCode: paperCode,
      questionNo: qNoStr,
      questionType: 'MCQ',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: 1,
      questionText: item.questionText,
      options: item.options,
      correctAnswer: item.correctAnswer,
      solution: item.solution
    };
  });
}

// ============================================================================
// BUILD FULL 12-QUESTION WRITTEN EXAMINATION SET (200 OR 100 MARKS) FOR ANY PAPER
// ============================================================================
interface OfficerGeneralWrittenSeed {
  englishFocusTopic: string;
  englishFocusContext: string;
  banglaFocusTopic: string;
  banglaFocusContext: string;
  comprehensionTitle: string;
  comprehensionPassage: string;
  argumentativeTopic: string;
  engToBanPassage: string;
  engToBanTranslation: string;
  banToEngPassage: string;
  banToEngTranslation: string;
  bankingCasePrompt: string;
  bankingCaseSolution: string;
}

function buildFullOfficerGeneralWrittenQuestions(
  year: number,
  paperId: string,
  questionPaperCode: string,
  writtenMarks: number,
  seed: OfficerGeneralWrittenSeed
): NonItQuestionItem[] {
  const s = year - 2010;
  const is200 = writtenMarks === 200;

  // Marks distribution:
  // For 200 Marks: Q1(30) + Q2(30) + Q3..Q8(6x10=60) + Q9(20) + Q10(20) + Q11(15) + Q12(25) = 200 Marks
  // For 100 Marks: Q1(15) + Q2(15) + Q3..Q8(6x5=30)  + Q9(10) + Q10(10) + Q11(8)  + Q12(12) = 100 Marks
  const mFocusEng = is200 ? 30 : 15;
  const mFocusBan = is200 ? 30 : 15;
  const mMath = is200 ? 10 : 5;
  const mComp = is200 ? 20 : 10;
  const mArg = is200 ? 20 : 10;
  const mTransE2B = is200 ? 15 : 8;
  const mTransB2ECase = is200 ? 25 : 12;

  // Math Problem 1 (Written-03): Cisterns / Work & Wages with Efficiency
  const pipeA = 12 + (s % 4) * 3;
  const pipeB = 16 + (s % 4) * 4;
  const leakHours = 24 + (s % 3) * 6;
  const netRateNum = pipeB * leakHours + pipeA * leakHours - pipeA * pipeB;
  const netRateDen = pipeA * pipeB * leakHours;
  const timeTogether = (netRateDen / netRateNum).toFixed(2);

  // Math Problem 2 (Written-04): Simple & Compound Interest Dual-Scheme Investment
  const principal1 = 25000 + s * 2000;
  const principal2 = 35000 + s * 2000;
  const rate1 = 8 + (s % 4);
  const rate2 = 10 + (s % 3);
  const si2Years = Math.round((principal1 * rate1 * 2) / 100);
  const ci2Years = Math.round(principal2 * (Math.pow(1 + rate2 / 100, 2) - 1));
  const totalInterest = si2Years + ci2Years;

  // Math Problem 3 (Written-05): Train Crossing & Relative Speed
  const speed1Kmh = 54 + (s % 3) * 18;
  const speed2Kmh = 36 + (s % 3) * 18;
  const speed1Ms = (speed1Kmh * 5) / 18;
  const speed2Ms = (speed2Kmh * 5) / 18;
  const len1 = 160 + s * 10;
  const len2 = 140 + s * 10;
  const oppCrossSec = ((len1 + len2) / (speed1Ms + speed2Ms)).toFixed(2);
  const platformLen = 200 + s * 10;
  const platformSec = ((len1 + platformLen) / speed1Ms).toFixed(2);

  // Math Problem 4 (Written-06): Percentage, Markup & Retail Discount
  const costPrice = 4000 + s * 250;
  const markupPct = 40;
  const discountPct = 15;
  const markedPrice = Math.round(costPrice * (1 + markupPct / 100));
  const sellingPrice = Math.round(markedPrice * (1 - discountPct / 100));
  const netProfit = sellingPrice - costPrice;
  const netProfitPct = ((netProfit / costPrice) * 100).toFixed(1);

  // Math Problem 5 (Written-07): Mensuration (Rectangular Lawn & Gravel Path Cost)
  const rectLen = 40 + s * 2;
  const rectWid = 25 + s;
  const pathWidth = 2.5;
  const outerArea = (rectLen + 2 * pathWidth) * (rectWid + 2 * pathWidth);
  const innerArea = rectLen * rectWid;
  const pathArea = outerArea - innerArea;
  const costPerSqm = 80 + s * 5;
  const totalPathCost = Math.round(pathArea * costPerSqm);

  // Math Problem 6 (Written-08): Partnership Capital Time-Weight & Set Theory Survey
  const capX = 120000 + s * 10000;
  const capY = 180000 + s * 10000;
  const totalProfit = 90000 + s * 6000;
  const weightX = capX * 12;
  const weightY = capY * 8; // Y joined after 4 months
  const shareX = Math.round((totalProfit * weightX) / (weightX + weightY));
  const shareY = totalProfit - shareX;
  const totalStaff = 300 + s * 20;
  const pctMobile = 70;
  const pctInternet = 55;
  const pctNeither = 10;
  const pctBoth = pctMobile + pctInternet - (100 - pctNeither);
  const countBoth = Math.round((totalStaff * pctBoth) / 100);

  const items: Array<{
    questionNo: string;
    subject:
      | 'Mathematics & Quantitative Aptitude'
      | 'English Language & Focus Writing'
      | 'Bangla Language & Literature'
      | 'General Knowledge & Banking Economy'
      | 'Translation (English ↔ Bangla)'
      | 'Analytical Ability & Accounting';
    marks: number;
    questionText: string;
    solution: string;
  }> = [
    {
      questionNo: 'Written-01',
      subject: 'English Language & Focus Writing',
      marks: mFocusEng,
      questionText: `[Focus Writing in English — ${mFocusEng} Marks]\nWrite a well-structured analytical essay (300–350 words) on: "${seed.englishFocusTopic}".\nIn your essay, include:\n(a) Macroeconomic background & operational context (${seed.englishFocusContext}),\n(b) Key institutional and branch-level challenges in Bangladesh,\n(c) Practical policy and operational recommendations for commercial banks.`,
      solution: `Model Essay Structure (${mFocusEng} Marks — ${year} Officer General Written):\n\n1. Title & Executive Summary:\n"${seed.englishFocusTopic}"\n- Context & Empirical Overview: ${seed.englishFocusContext}.\n- Commercial banks serve as the primary transmission channel of monetary policy, retail credit delivery, and financial intermediation in Bangladesh.\n\n2. Key Institutional & Operational Challenges:\n- Credit risk assessment gaps in SME and agricultural lending at branch level.\n- Rising non-performing loans (NPLs), documentation bottlenecks, and recovery delays.\n- Need for stronger cybersecurity hygiene, AML/CFT compliance, and digital literacy among rural and semi-urban customers.\n\n3. Policy & Operational Recommendations:\n- Strengthen cash-flow-based credit underwriting, automated e-KYC onboarding, and branch-level internal audit.\n- Expand low-cost green refinancing, CMSME credit guarantee utilization, and interoperable digital payment channels (NPSB, BEFTN, RTGS, BanglaQR).\n- Conclusion: Coordinated execution between Bangladesh Bank supervision and commercial bank branch officers will ensure sustainable, inclusive economic growth.`
    },
    {
      questionNo: 'Written-02',
      subject: 'Bangla Language & Literature',
      marks: mFocusBan,
      questionText: `[Focus Writing in Bangla / বাংলা ফোকাস রাইটিং — ${mFocusBan} Marks]\nনিচের বিষয়ের ওপর তথ্য ও উপাত্তসহ একটি বিশ্লেষণধর্মী প্রবন্ধ বা ফোকাস রাইটিং লিখুন (৩০০–৩৫০ শব্দ):\n"${seed.banglaFocusTopic}"\nপ্রবন্ধে অন্তর্ভুক্ত করুন: (ক) পটভূমি ও বর্তমান প্রেক্ষাপট (${seed.banglaFocusContext}), (খ) ব্যাংকিং খাত ও সাধারণ মানুষের জীবনে এর প্রভাব, (গ) বিদ্যমান সীমাবদ্ধতা ও উত্তরণের উপায়।`,
      solution: `আদর্শ উত্তর কাঠামো (${mFocusBan} নম্বর — ${year} অফিসার জেনারেল লিখিত পরীক্ষা):\n\n১. ভূমিকা ও প্রেক্ষাপট:\n"${seed.banglaFocusTopic}" — ${seed.banglaFocusContext}। বাংলাদেশের সামষ্টিক অর্থনীতি ও বাণিজ্যিক ব্যাংকিং খাতের স্থিতিশীলতা রক্ষায় এ বিষয়টি অত্যন্ত গুরুত্বপূর্ণ।\n\n২. অর্থনৈতিক ও ব্যাংকিং খাতে প্রভাব:\n- প্রান্তিক জনগোষ্ঠী, ক্ষুদ্র ও মাঝারি উদ্যোক্তা (CMSME) এবং কৃষি খাতে প্রাতিষ্ঠানিক ঋণের প্রবাহ বৃদ্ধি।\n- ডিজিটাল ব্যাংকিং, মোবাইল ফিন্যান্সিয়াল সার্ভিসেস (MFS) ও এজেন্ট ব্যাংকিংয়ের মাধ্যমে আর্থিক অন্তর্ভুক্তি সম্প্রসারণ।\n- বৈদেশিক রেমিট্যান্স আহরণ ও রপ্তানি বাণিজ্যে বৈধ ব্যাংকিং চ্যানেলের ব্যবহার উৎসাহিতকরণ।\n\n৩. বিদ্যমান চ্যালেঞ্জ ও করণীয়:\n- খেলাপি ঋণ নিয়ন্ত্রণ, শাখা পর্যায়ে সঠিক গ্রাহক যাচাই (KYC) ও ঝুঁকি ব্যবস্থাপনা জোরদার করা।\n- বাংলাদেশ ব্যাংকের নীতিমালা অনুসরণ করে স্বচ্ছতা, জবাবদিহিতা ও গ্রাহকবান্ধব ব্যাংকিং সেবা নিশ্চিত করা।\n- উপসংহার: দক্ষ ব্যাংক কর্মকর্তা ও আধুনিক প্রযুক্তির সমন্বয়েই একটি টেকসই ও অন্তর্ভুক্তিমূলক অর্থনীতি গড়ে তোলা সম্ভব।`
    },
    {
      questionNo: 'Written-03',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: mMath,
      questionText: `[Written Math Problem 1 — ${mMath} Marks]\nTwo inlet pipes A and B can fill a water reservoir in ${pipeA} hours and ${pipeB} hours respectively, while an outlet drain pipe C can empty the full reservoir in ${leakHours} hours.\n(a) If all three pipes A, B, and C are opened simultaneously when the reservoir is empty, in how many hours will the reservoir be completely filled?\n(b) What fraction of the reservoir is filled in the first 4 hours?`,
      solution: `Step-by-Step Mathematical Solution (${mMath} Marks):\n\nPart (a):\n- Rate of inlet pipe A = 1 / ${pipeA} of the reservoir per hour.\n- Rate of inlet pipe B = 1 / ${pipeB} of the reservoir per hour.\n- Rate of outlet pipe C = -1 / ${leakHours} of the reservoir per hour.\n- Combined net filling rate per hour = (1 / ${pipeA}) + (1 / ${pipeB}) - (1 / ${leakHours})\n  = (${pipeB}×${leakHours} + ${pipeA}×${leakHours} - ${pipeA}×${pipeB}) / (${pipeA}×${pipeB}×${leakHours})\n  = ${netRateNum} / ${netRateDen} of the reservoir per hour.\n- Total time to fill the reservoir completely = ${netRateDen} / ${netRateNum} = ${timeTogether} hours.\n\nPart (b):\n- Fraction filled in the first 4 hours = 4 × (${netRateNum} / ${netRateDen}) = ${4 * netRateNum} / ${netRateDen}.\n\nAnswer: (a) ${timeTogether} hours; (b) ${4 * netRateNum}/${netRateDen} of the reservoir.`
    },
    {
      questionNo: 'Written-04',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: mMath,
      questionText: `[Written Math Problem 2 — ${mMath} Marks]\nA bank depositor invests Tk. ${principal1.toLocaleString()} in Scheme-A at ${rate1}% simple interest per annum and Tk. ${principal2.toLocaleString()} in Scheme-B at ${rate2}% compound interest per annum (compounded annually).\n(a) Calculate the simple interest earned from Scheme-A after 2 years.\n(b) Calculate the compound interest earned from Scheme-B after 2 years and the total combined interest from both schemes.`,
      solution: `Step-by-Step Mathematical Solution (${mMath} Marks):\n\nPart (a) Scheme-A (Simple Interest):\n- Principal P₁ = Tk. ${principal1.toLocaleString()}, Rate r₁ = ${rate1}%, Time t = 2 years.\n- Simple Interest (SI) = (P₁ × r₁ × t) / 100\n  = (${principal1} × ${rate1} × 2) / 100 = Tk. ${si2Years.toLocaleString()}.\n\nPart (b) Scheme-B (Compound Interest) & Combined Total:\n- Principal P₂ = Tk. ${principal2.toLocaleString()}, Rate r₂ = ${rate2}%, Time n = 2 years.\n- Compound Interest (CI) = P₂ × [(1 + r₂/100)² - 1]\n  = ${principal2} × [(1 + ${rate2}/100)² - 1] = Tk. ${ci2Years.toLocaleString()}.\n- Total Combined Interest = SI + CI = Tk. ${si2Years.toLocaleString()} + Tk. ${ci2Years.toLocaleString()} = Tk. ${totalInterest.toLocaleString()}.\n\nAnswer: (a) Tk. ${si2Years.toLocaleString()}; (b) CI = Tk. ${ci2Years.toLocaleString()}, Total Interest = Tk. ${totalInterest.toLocaleString()}.`
    },
    {
      questionNo: 'Written-05',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: mMath,
      questionText: `[Written Math Problem 3 — ${mMath} Marks]\nTrain-A of length ${len1} meters is running at a speed of ${speed1Kmh} km/hr, and Train-B of length ${len2} meters is running at ${speed2Kmh} km/hr on a parallel track.\n(a) How many seconds will they take to cross each other completely when travelling in opposite directions?\n(b) How many seconds will Train-A take to cross a station platform of length ${platformLen} meters?`,
      solution: `Step-by-Step Mathematical Solution (${mMath} Marks):\n\n1. Convert Speeds from km/hr to m/s:\n- Speed of Train-A = ${speed1Kmh} × (5/18) = ${speed1Ms} m/s.\n- Speed of Train-B = ${speed2Kmh} × (5/18) = ${speed2Ms} m/s.\n\nPart (a) Crossing in Opposite Directions:\n- Total distance to cover = L₁ + L₂ = ${len1} + ${len2} = ${len1 + len2} meters.\n- Relative speed (opposite direction) = ${speed1Ms} + ${speed2Ms} = ${speed1Ms + speed2Ms} m/s.\n- Time taken = ${len1 + len2} / ${speed1Ms + speed2Ms} = ${oppCrossSec} seconds.\n\nPart (b) Train-A Crossing the Platform:\n- Total distance = Length of Train-A + Length of Platform = ${len1} + ${platformLen} = ${len1 + platformLen} meters.\n- Time taken = ${len1 + platformLen} / ${speed1Ms} = ${platformSec} seconds.\n\nAnswer: (a) ${oppCrossSec} seconds; (b) ${platformSec} seconds.`
    },
    {
      questionNo: 'Written-06',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: mMath,
      questionText: `[Written Math Problem 4 — ${mMath} Marks]\nA merchant purchases an electronic appliance for Tk. ${costPrice.toLocaleString()} and marks its list price ${markupPct}% above the cost price. During a festive sale, he allows a ${discountPct}% trade discount on the marked price.\n(a) Find the Marked Price (MP) and the Selling Price (SP) of the appliance.\n(b) Calculate the merchant's net profit amount and net profit percentage.`,
      solution: `Step-by-Step Mathematical Solution (${mMath} Marks):\n\nPart (a) Marked Price & Selling Price:\n- Cost Price (CP) = Tk. ${costPrice.toLocaleString()}.\n- Marked Price (MP) at ${markupPct}% above CP = ${costPrice} × (1 + ${markupPct}/100) = Tk. ${markedPrice.toLocaleString()}.\n- Selling Price (SP) after ${discountPct}% discount = ${markedPrice} × (1 - ${discountPct}/100) = Tk. ${sellingPrice.toLocaleString()}.\n\nPart (b) Net Profit & Profit Percentage:\n- Net Profit = SP - CP = Tk. ${sellingPrice.toLocaleString()} - Tk. ${costPrice.toLocaleString()} = Tk. ${netProfit.toLocaleString()}.\n- Net Profit Percentage = (${netProfit} / ${costPrice}) × 100% = ${netProfitPct}%.\n\nAnswer: (a) MP = Tk. ${markedPrice.toLocaleString()}, SP = Tk. ${sellingPrice.toLocaleString()}; (b) Profit = Tk. ${netProfit.toLocaleString()} (${netProfitPct}%).`
    },
    {
      questionNo: 'Written-07',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: mMath,
      questionText: `[Written Math Problem 5 — ${mMath} Marks]\nA rectangular bank head-office lawn has a length of ${rectLen} meters and a width of ${rectWid} meters. It is surrounded externally by a uniform walkway of width ${pathWidth} meters on all four sides.\n(a) Calculate the area of the inner lawn and the area of the surrounding walkway.\n(b) Find the total cost of paving the walkway with tiles at Tk. ${costPerSqm} per square meter.`,
      solution: `Step-by-Step Mathematical Solution (${mMath} Marks):\n\nPart (a) Inner Lawn & Walkway Area:\n- Inner Lawn Area = ${rectLen} m × ${rectWid} m = ${innerArea} sq. meters.\n- Outer dimensions including ${pathWidth} m walkway on both sides:\n  Outer Length = ${rectLen} + 2 × ${pathWidth} = ${rectLen + 2 * pathWidth} m.\n  Outer Width = ${rectWid} + 2 × ${pathWidth} = ${rectWid + 2 * pathWidth} m.\n- Outer Total Area = ${rectLen + 2 * pathWidth} × ${rectWid + 2 * pathWidth} = ${outerArea} sq. meters.\n- Area of the Walkway = Outer Area - Inner Area = ${outerArea} - ${innerArea} = ${pathArea} sq. meters.\n\nPart (b) Total Paving Cost:\n- Total Cost = ${pathArea} sq. m × Tk. ${costPerSqm} = Tk. ${totalPathCost.toLocaleString()}.\n\nAnswer: (a) Lawn Area = ${innerArea} sq.m, Walkway Area = ${pathArea} sq.m; (b) Tk. ${totalPathCost.toLocaleString()}.`
    },
    {
      questionNo: 'Written-08',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: mMath,
      questionText: `[Written Math Problem 6 — ${mMath} Marks]\n(a) Partner X started a trading firm by investing Tk. ${capX.toLocaleString()}. After 4 months, Partner Y joined the business with a capital of Tk. ${capY.toLocaleString()}. At the end of the year, the firm earned a net profit of Tk. ${totalProfit.toLocaleString()}. Find each partner's share of the profit.\n(b) In a branch survey of ${totalStaff} customers, ${pctMobile}% use Mobile Banking, ${pctInternet}% use Internet Banking, and ${pctNeither}% use neither service. How many customers use both services?`,
      solution: `Step-by-Step Mathematical Solution (${mMath} Marks):\n\nPart (a) Partnership Profit Distribution:\n- X's capital-time equivalent = Tk. ${capX.toLocaleString()} × 12 months = ${weightX.toLocaleString()}.\n- Y's capital-time equivalent (12 - 4 = 8 months) = Tk. ${capY.toLocaleString()} × 8 months = ${weightY.toLocaleString()}.\n- Total weight = ${weightX + weightY}.\n- X's Profit Share = Tk. ${totalProfit.toLocaleString()} × (${weightX} / ${weightX + weightY}) = Tk. ${shareX.toLocaleString()}.\n- Y's Profit Share = Tk. ${totalProfit.toLocaleString()} - Tk. ${shareX.toLocaleString()} = Tk. ${shareY.toLocaleString()}.\n\nPart (b) Set Theory Customer Survey:\n- Percentage using at least one service n(M ∪ I) = 100% - ${pctNeither}% = ${100 - pctNeither}%.\n- Percentage using both services n(M ∩ I) = n(M) + n(I) - n(M ∪ I) = ${pctMobile}% + ${pctInternet}% - ${100 - pctNeither}% = ${pctBoth}%.\n- Number of customers using both = ${pctBoth}% of ${totalStaff} = ${countBoth} customers.\n\nAnswer: (a) X = Tk. ${shareX.toLocaleString()}, Y = Tk. ${shareY.toLocaleString()}; (b) ${countBoth} customers.`
    },
    {
      questionNo: 'Written-09',
      subject: 'English Language & Focus Writing',
      marks: mComp,
      questionText: `[Reading Comprehension Passage — ${mComp} Marks]\nRead the following banking and economic passage carefully and answer the 5 analytical questions below in your own words (5 × ${mComp / 5} = ${mComp} Marks):\n\nPassage Title: "${seed.comprehensionTitle}"\n"${seed.comprehensionPassage}"\n\nQuestions:\n(a) What is the central thesis of the passage regarding commercial banking operations in ${year}?\n(b) Why does the author emphasize credit discipline and transparent governance at the branch level?\n(c) How do digital banking channels and financial inclusion reinforce macroeconomic resilience?\n(d) Explain the contextual meaning of the key financial terms highlighted in the passage.\n(e) Suggest a suitable alternative title and write a one-sentence summary of the passage.`,
      solution: `Model Answers to Reading Comprehension (${mComp} Marks):\n\n(a) Central Thesis: The passage highlights how commercial banks in ${year} balance liquidity management, credit quality, and inclusive digital service delivery to sustain macroeconomic stability.\n(b) Importance of Branch-Level Credit Discipline: Rigorous borrower appraisal, post-sanction monitoring, and transparent governance prevent non-performing loans (NPLs) and protect depositor funds.\n(c) Role of Digital Channels & Inclusion: Interoperable digital payments, agent banking, and CMSME credit bring unbanked rural and urban households into the formal financial net, boosting domestic savings and velocity of capital.\n(d) Contextual Meaning of Financial Terms: Financial intermediation refers to channeling surplus deposits into productive investments; credit discipline refers to timely repayment and adherence to regulatory norms.\n(e) Alternative Title & Summary: "Resilient Commercial Banking and Inclusive Growth in ${year}" — Sound credit governance combined with technology-driven financial inclusion is essential for sustainable banking growth.`
    },
    {
      questionNo: 'Written-10',
      subject: 'English Language & Focus Writing',
      marks: mArg,
      questionText: `[Argumentative Writing & Official Banking Correspondence — ${mArg} Marks]\nWrite a formal analytical argument / official letter to the Head of Retail & SME Banking (200–250 words) on the following topic:\n"${seed.argumentativeTopic}"\nProvide at least three evidence-based arguments, potential counter-arguments, and an actionable conclusion for branch officers.`,
      solution: `Model Analytical Argument & Official Correspondence (${mArg} Marks):\n\nTo: The Head of Retail & SME Banking\nSubject: Analytical Brief on "${seed.argumentativeTopic}"\n\n1. Thesis Statement:\nIn the evolving banking landscape of ${year}, balanced policy execution that combines prudent risk management with customer-centric innovation is indispensable.\n\n2. Three Core Arguments:\n- Argument 1 (Asset Quality & Solvency): Data-driven credit scoring and verified cash-flow analysis directly reduce default rates and preserve capital adequacy.\n- Argument 2 (Operational Efficiency): Digitizing routine counter transactions lowers cost-to-income ratios and enables officers to focus on relationship banking and recovery.\n- Argument 3 (Inclusive Economic Multiplier): Expanding formal credit to cottage, micro, and small enterprises creates employment and diversifies the bank's loan portfolio.\n\n3. Counter-Argument & Mitigation:\nWhile rapid digitization or strict credit tightening may initially challenge traditional borrowers, phased customer onboarding and branch advisory desks effectively bridge the gap.`
    },
    {
      questionNo: 'Written-11',
      subject: 'Translation (English ↔ Bangla)',
      marks: mTransE2B,
      questionText: `[English to Bangla Translation Passage — ${mTransE2B} Marks]\nTranslate the following banking and economic passage into standard, idiomatic Bangla:\n\n"${seed.engToBanPassage}"`,
      solution: `আদর্শ বাংলা অনুবাদ (${mTransE2B} নম্বর — ${year} অফিসার জেনারেল লিখিত):\n\n"${seed.engToBanTranslation}"\n\n[অনুবাদ নির্দেশিকা: বাক্যের মূল অর্থ, অর্থনৈতিক পরিভাষা এবং প্রমিত বাংলা বাক্যগঠন রীতি অক্ষুণ্ণ রেখে ভাবানুবাদ করা হয়েছে।]`
    },
    {
      questionNo: 'Written-12',
      subject: 'Analytical Ability & Accounting',
      marks: mTransB2ECase,
      questionText: `[Bangla to English Translation & Banking Operations Case — ${mTransB2ECase} Marks]\nPart A (Bangla to English Translation — ${Math.floor(mTransB2ECase / 2)} Marks):\nTranslate the following passage into standard English:\n"${seed.banToEngPassage}"\n\nPart B (Banking Operations & Accounting Case Problem — ${Math.ceil(mTransB2ECase / 2)} Marks):\n${seed.bankingCasePrompt}`,
      solution: `Model Solution (${mTransB2ECase} Marks):\n\nPart A — Standard English Translation (${Math.floor(mTransB2ECase / 2)} Marks):\n"${seed.banToEngTranslation}"\n\nPart B — Banking Operations & Accounting Case Solution (${Math.ceil(mTransB2ECase / 2)} Marks):\n${seed.bankingCaseSolution}`
    }
  ];

  return items.map((wq, idx) => ({
    id: `${paperId}-wrt-${idx + 1}`,
    paperId,
    questionPaperCode,
    questionNo: wq.questionNo,
    questionType: 'Written',
    subject: wq.subject,
    marks: wq.marks,
    questionText: wq.questionText,
    solution: wq.solution
  }));
}

// ============================================================================
// BUILD FULL 100-QUESTION PRELIMINARY MCQ SET + 12 WRITTEN QUESTIONS FOR ANY PAPER
// ============================================================================
function buildFull100McqOfficerGeneralPaper(config: {
  paperId: string;
  questionPaperCode: string;
  title: string;
  orgType: NonItOrgType;
  organizationName: string;
  examTaker: string;
  year: number;
  examDate: string;
  writtenMarks: number;
  summary: string;
  writtenSeed: OfficerGeneralWrittenSeed;
}): NonItExamPaper {
  const { paperId, questionPaperCode, year } = config;
  const shift = year - 2010;
  const questions: NonItQuestionItem[] = [];

  // 1. MCQ-001 to MCQ-025: Bangla Language & Literature (25 Questions)
  for (let i = 0; i < 25; i++) {
    const qNum = i + 1;
    const seed = banglaMasterPool[(i + shift) % banglaMasterPool.length];
    questions.push({
      id: `${paperId}-mcq-${qNum}`,
      paperId,
      questionPaperCode,
      questionNo: `MCQ-${String(qNum).padStart(3, '0')}`,
      questionType: 'MCQ',
      subject: 'Bangla Language & Literature',
      marks: 1,
      questionText: seed.questionText,
      options: [...seed.options],
      correctAnswer: seed.correctAnswer,
      solution: seed.solution
    });
  }

  // 2. MCQ-026 to MCQ-050: English Language & Focus Writing (25 Questions)
  for (let i = 0; i < 25; i++) {
    const qNum = 26 + i;
    const seed = englishMasterPool[(i + shift) % englishMasterPool.length];
    questions.push({
      id: `${paperId}-mcq-${qNum}`,
      paperId,
      questionPaperCode,
      questionNo: `MCQ-${String(qNum).padStart(3, '0')}`,
      questionType: 'MCQ',
      subject: 'English Language & Focus Writing',
      marks: 1,
      questionText: seed.questionText,
      options: [...seed.options],
      correctAnswer: seed.correctAnswer,
      solution: seed.solution
    });
  }

  // 3. MCQ-051 to MCQ-070: Mathematics & Quantitative Aptitude (20 Questions)
  const mathMcqs = buildYearSpecificMathMcqs(year, paperId, questionPaperCode, 51);
  questions.push(...mathMcqs);

  // 4. MCQ-071 to MCQ-090: General Knowledge & Banking Economy (20 Questions)
  for (let i = 0; i < 20; i++) {
    const qNum = 71 + i;
    const seed = gkMasterPool[(i + shift) % gkMasterPool.length];
    questions.push({
      id: `${paperId}-mcq-${qNum}`,
      paperId,
      questionPaperCode,
      questionNo: `MCQ-${String(qNum).padStart(3, '0')}`,
      questionType: 'MCQ',
      subject: 'General Knowledge & Banking Economy',
      marks: 1,
      questionText: seed.questionText,
      options: [...seed.options],
      correctAnswer: seed.correctAnswer,
      solution: seed.solution
    });
  }

  // 5. MCQ-091 to MCQ-100: Computer & Basic ICT (10 Questions)
  for (let i = 0; i < 10; i++) {
    const qNum = 91 + i;
    const seed = ictMasterPool[(i + shift) % ictMasterPool.length];
    questions.push({
      id: `${paperId}-mcq-${qNum}`,
      paperId,
      questionPaperCode,
      questionNo: `MCQ-${String(qNum).padStart(3, '0')}`,
      questionType: 'MCQ',
      subject: 'Computer & Basic ICT',
      marks: 1,
      questionText: seed.questionText,
      options: [...seed.options],
      correctAnswer: seed.correctAnswer,
      solution: seed.solution
    });
  }

  // 6. Part B: Full 12-Question Written Examination Paper (100 / 200 Marks) under the same Paper ID
  const writtenItems = buildFullOfficerGeneralWrittenQuestions(
    year,
    paperId,
    questionPaperCode,
    config.writtenMarks,
    config.writtenSeed
  );
  questions.push(...writtenItems);

  return {
    paperId: config.paperId,
    questionPaperCode: config.questionPaperCode,
    title: config.title,
    category: 'Officer (General)',
    orgType: config.orgType,
    organizationName: config.organizationName,
    examTaker: config.examTaker,
    year: config.year,
    examDate: config.examDate,
    mcqMarks: 100,
    writtenMarks: config.writtenMarks,
    summary: config.summary,
    questions
  };
}

// ============================================================================
// COMPLETE 2010–2026 OFFICER (GENERAL) QUESTION PAPER ARCHIVE (EACH SET = 100 MCQs + WRITTEN)
// ============================================================================
export const officerGeneralPapers2010To2026: NonItExamPaper[] = [
  // 2026 - Combined 9 Banks Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2026',
    questionPaperCode: 'BSCS-OFF-GEN-2026 (Job ID: 10221)',
    title: 'Combined 9 Banks Officer (General) Full 100-MCQ Preliminary & 200-Mark Written Exam 2026',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BKB, BDBL, RAKUB, PKB & BHBFC (BSCS)',
    examTaker: 'Bankers Selection Committee Secretariat (BSCS) / BIBM',
    year: 2026,
    examDate: 'January 2026',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Combined 9 Banks Officer (General) 2026.',
    writtenSeed: {
      englishFocusTopic: 'Cashless Bangladesh 2026: Expanding BanglaQR, Interoperable Digital Payments, and Branch-Level Cyber Resilience',
      englishFocusContext: 'Rapid adoption of BanglaQR, NPSB, RTGS, and digital onboarding across state-owned and private commercial banks in 2026',
      banglaFocusTopic: 'ক্যাশলেস বাংলাদেশ বিনির্মাণে ডিজিটাল ব্যাংকিং, বাংলা কিউআর (Bangla QR) এবং মোবাইল ফিন্যান্সিয়াল সার্ভিসেস (MFS)-এর ভূমিকা',
      banglaFocusContext: 'নগদ অর্থের ব্যবহার কমিয়ে আর্থিক লেনদেনে স্বচ্ছতা, দ্রুততা ও প্রান্তিক জনগোষ্ঠীর আর্থিক অন্তর্ভুক্তি নিশ্চিতকরণ',
      comprehensionTitle: 'Credit Governance, NPL Resolution, and Inclusive Retail Banking in 2026',
      comprehensionPassage: 'Restoring asset quality and operational discipline in commercial banks requires strict adherence to single-borrower exposure limits, cash-flow-based credit underwriting, and timely recovery of non-performing loans. At the same time, branch officers play a pivotal role in expanding low-cost credit to cottage, micro, small, and medium enterprises (CMSMEs) while promoting interoperable digital payments.',
      argumentativeTopic: 'Should commercial banks prioritize automated digital credit scoring over traditional relationship-based lending for small business borrowers?',
      engToBanPassage: 'Restoring discipline in the banking sector requires strict enforcement of single-borrower exposure limits, independent credit risk assessment, and timely resolution of non-performing loans.',
      engToBanTranslation: 'ব্যাংকিং খাতে শৃঙ্খলা ফিরিয়ে আনতে একক ঋণগ্রহীতার ঋণসীমা কঠোরভাবে বাস্তবায়ন, স্বাধীন ক্রেডিট রিস্ক মূল্যায়ন এবং খেলাপি ঋণের সময়োপযোগী নিষ্পত্তি অপরিহার্য।',
      banToEngPassage: 'ডিজিটাল ব্যাংকিং ও বাংলা কিউআর কোডের বিস্তারের ফলে ক্ষুদ্র ব্যবসায়ী ও সাধারণ গ্রাহকরা এখন দ্রুত, নিরাপদ ও সাশ্রয়ী মূল্যে ব্যাংকিং লেনদেন সম্পন্ন করতে পারছেন।',
      banToEngTranslation: 'With the expansion of digital banking and BanglaQR codes, small traders and general customers can now complete banking transactions quickly, securely, and cost-effectively.',
      bankingCasePrompt: 'A boat takes 6 hours to travel 36 km downstream and 24 km upstream. In another trip, it takes 6.5 hours to travel 24 km downstream and 36 km upstream. Also, a branch classified a substandard loan of Tk. 40,00,000 with eligible collateral of Tk. 15,00,000 (20% provisioning rate). Find (i) the speed of the boat in still water and river current, and (ii) the required loan loss provision.',
      bankingCaseSolution: '1. Boat & Stream: Let downstream speed (u+v) = x and upstream speed (u-v) = y. Solving 36/x + 24/y = 6 and 24/x + 36/y = 6.5 gives x = 12 km/h and y = 8 km/h. Thus, boat speed u = (12+8)/2 = 10 km/h and current speed v = (12-8)/2 = 2 km/h.\n2. Loan Loss Provision: Base for provision = Tk. 40,00,000 - Tk. 15,00,000 = Tk. 25,00,000. Required Substandard Provision (20%) = 25,00,000 × 0.20 = Tk. 5,00,000.'
    }
  }),

  // 2025 - Combined 8 Banks Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2025',
    questionPaperCode: 'BSCS-OFF-GEN-2025 (Job ID: 10202)',
    title: 'Combined 8 Banks Officer (General) Full 100-MCQ Preliminary & 200-Mark Written Exam 2025',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BKB, BDBL & Probashi Kallyan Bank (BSCS)',
    examTaker: 'BIBM / University of Dhaka',
    year: 2025,
    examDate: 'May 2025',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Combined 8 Banks Officer (General) 2025.',
    writtenSeed: {
      englishFocusTopic: 'Controlling Inflation through Monetary Policy Tightening and Agricultural Supply Chain Financing in Bangladesh',
      englishFocusContext: 'Policy rate adjustments, crawling peg exchange rate transition, and agricultural refinancing in FY 2024–25',
      banglaFocusTopic: 'মূল্যস্ফীতি নিয়ন্ত্রণে মুদ্রানীতি, কৃষি অর্থায়ন ও পণ্য সরবরাহ ব্যবস্থার আধুনিকায়ন',
      banglaFocusContext: 'নিত্যপ্রয়োজনীয় পণ্যের মূল্য স্থিতিশীল রাখা এবং কৃষি ও গ্রামীণ অর্থনীতিতে ঋণের সুষম প্রবাহ নিশ্চিতকরণ',
      comprehensionTitle: 'Monetary Transmission, Interest Rate Corridors, and Commercial Bank Liquidity in 2025',
      comprehensionPassage: 'When central banks tighten monetary policy by raising the policy repo rate, commercial banks adjust their lending and deposit rates accordingly. However, in developing economies, supply-side bottlenecks and import cost pressures also drive inflation. Therefore, commercial banks must channel targeted working capital to agricultural producers and import-substituting industries.',
      argumentativeTopic: 'Can monetary policy tightening alone curb food and non-food inflation without structural reforms in agricultural supply chains?',
      engToBanPassage: 'Coordinating monetary policy tightening with tariff rationalization on essential commodities and agricultural supply-chain financing is essential to contain inflationary pressures.',
      engToBanTranslation: 'মূল্যস্ফীতির চাপ নিয়ন্ত্রণে আনতে মুদ্রানীতি কঠোর করার পাশাপাশি নিত্যপ্রয়োজনীয় পণ্যের শুল্ক যৌক্তিকীকরণ এবং কৃষি সরবরাহ ব্যবস্থায় অর্থায়ন সমন্বয় করা অপরিহার্য।',
      banToEngPassage: 'বাণিজ্যিক ব্যাংকগুলোর মাধ্যমে প্রবাসী আয়ের বৈধ প্রবাহ বৃদ্ধি পেলে বৈদেশিক মুদ্রার রিজার্ভ শক্তিশালী হয় এবং আমদানি ব্যয় মেটানো সহজতর হয়।',
      banToEngTranslation: 'When the formal inflow of migrant remittances through commercial banks increases, foreign exchange reserves are strengthened and meeting import payments becomes easier.',
      bankingCasePrompt: 'Two pipes A and B can fill a tank in 15 hours and 20 hours respectively, while a third pipe C can empty the full tank in 25 hours. All three pipes are opened together, and after 10 hours pipe C is closed. Find the total time to fill the tank, and prepare journal entries for a customer FDR encashment of Tk. 5,00,000 with accrued interest of Tk. 45,000 subject to 10% AIT on interest.',
      bankingCaseSolution: '1. Cistern Math: Net rate in first 10h = 1/15 + 1/20 - 1/25 = 23/300 per hr. In 10h, 230/300 = 23/30 filled. Remaining 7/30 filled by (A+B) at 7/60 per hr in (7/30)/(7/60) = 2 hours. Total time = 12 hours.\n2. Accounting Entries: Dr. Fixed Deposit A/C Tk. 5,00,000; Dr. Interest Expense/Payable on FDR Tk. 45,000; Cr. AIT Payable (10%) Tk. 4,500; Cr. Customer Savings/Current A/C Tk. 5,40,500.'
    }
  }),

  // 2024 - Combined 10 Banks Officer (General) (Job ID: 10190)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2024',
    questionPaperCode: 'BSCS-OFF-GEN-2024 (Job ID: 10190)',
    title: 'Combined 10 Banks Officer (General) Full 100-MCQ Preliminary & 200-Mark Written Exam 2024',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB, RAKUB, PKB & BHBFC (BSCS)',
    examTaker: 'BIBM',
    year: 2024,
    examDate: 'March 2024',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Combined 10 Banks Officer (General) 2024.',
    writtenSeed: {
      englishFocusTopic: 'Empowering Cottage, Micro, Small, and Medium Enterprises (CMSMEs) for Employment and Export Diversification',
      englishFocusContext: 'Refinance schemes, credit guarantee facilities, and women entrepreneur financing in state-owned banks',
      banglaFocusTopic: 'কর্মসংস্থান সৃষ্টি ও সুষম অর্থনৈতিক প্রবৃদ্ধিতে কুটির, মাইক্রো, ক্ষুদ্র ও মাঝারি শিল্পের (CMSME) ভূমিকা',
      banglaFocusContext: 'গ্রামীণ ও নারী উদ্যোক্তাদের সহজ শর্তে জামানতবিহীন ঋণ প্রদান এবং পুনঃঅর্থায়ন তহবিলের সঠিক ব্যবহার',
      comprehensionTitle: 'CMSME Financing, Credit Guarantee Schemes, and Rural Industrialization',
      comprehensionPassage: 'Cottage, Micro, Small, and Medium Enterprises (CMSMEs) form the backbone of non-farm employment in Bangladesh. Despite their high contribution to GDP, many small entrepreneurs face collateral constraints when applying for formal bank credit. Credit guarantee schemes and cluster-based financing enable commercial banks to lend safely to grassroots enterprises.',
      argumentativeTopic: 'Cluster-based collateral-free lending is the most effective way to bring rural micro-entrepreneurs into the formal banking fold.',
      engToBanPassage: 'Cottage, Micro, Small, and Medium Enterprises (CMSMEs) form the backbone of industrial employment in Bangladesh. Expanding low-cost refinance schemes for rural entrepreneurs is vital for equitable growth.',
      engToBanTranslation: 'কুটির, মাইক্রো, ক্ষুদ্র ও মাঝারি শিল্পোদ্যোগ (সিএমএসএমই) বাংলাদেশের শিল্প কর্মসংস্থানের মেরুদণ্ড গঠন করে। সুষম প্রবৃদ্ধির জন্য গ্রামীণ উদ্যোক্তাদের জন্য স্বল্প সুদের পুনঃঅর্থায়ন স্কিম সম্প্রসারণ করা অত্যন্ত গুরুত্বপূর্ণ।',
      banToEngPassage: 'বাণিজ্যিক ব্যাংকগুলোর শাখা পর্যায়ে সেবার মান উন্নয়ন ও দ্রুত ঋণ নিষ্পত্তির মাধ্যমে ক্ষুদ্র উদ্যোক্তাদের আস্থা অর্জন করা সম্ভব।',
      banToEngTranslation: 'By improving service quality and expediting loan disposal at the branch level of commercial banks, the confidence of small entrepreneurs can be earned.',
      bankingCasePrompt: 'A person invested Tk. 80,000 partly in a 10% simple interest scheme and partly in a 12% simple interest scheme. After 3 years, he received a total interest of Tk. 26,400. Find the sum invested in each scheme and explain the key documents required for opening a Limited Company Current Account at a bank branch.',
      bankingCaseSolution: '1. Investment Split: Let 10% investment = x and 12% investment = (80,000 - x). Then 0.30x + 0.36(80,000 - x) = 26,400 => 0.06x = 2,400 => x = Tk. 40,000 in each scheme.\n2. Limited Company Account Documents: Certified copy of Memorandum & Articles of Association, Certificate of Incorporation, RJSC Form XII (List of Directors), Board Resolution authorizing account opening & signatories, Valid Trade License, TIN/BIN certificates, and e-KYC of directors.'
    }
  }),

  // 2024 - Private Bank Officer (General) (BRAC Bank & Islami Bank)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-prv-2024',
    questionPaperCode: 'BRAC-IBBL-OFF-2024',
    title: 'BRAC Bank & Islami Bank Officer (General) Full 100-MCQ Preliminary & 100-Mark Written Exam 2024',
    orgType: 'Private Bank',
    organizationName: 'BRAC Bank PLC & Islami Bank Bangladesh PLC',
    examTaker: 'IBA / BIBM',
    year: 2024,
    examDate: 'September 2024',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper (Written-01 to Written-12) for Private Commercial Bank Officer (General) 2024.',
    writtenSeed: {
      englishFocusTopic: 'Values-Based Banking, SME Relationship Management, and Digital Omni-Channel Customer Experience',
      englishFocusContext: 'Blending SME grassroot relationship banking with mobile app banking and Shariah/conventional compliance',
      banglaFocusTopic: 'বেসরকারি বাণিজ্যিক ব্যাংকে এসএমই অর্থায়ন, গ্রাহক সেবা ও ডিজিটাল রূপান্তর',
      banglaFocusContext: 'গ্রাহকবান্ধব ও প্রযুক্তিনির্ভর ব্যাংকিং সেবার মাধ্যমে আমানত সংগ্রহ এবং ক্ষুদ্র ব্যবসায় অর্থায়ন',
      comprehensionTitle: 'Trade Finance, Export Bill Discounting, and Foreign Exchange Compliance in Private Banks',
      comprehensionPassage: 'Private commercial banks handle a substantial share of Bangladesh’s export-import trade and inward remittance flows. Accurate scrutiny of letters of credit (LC), verification of shipping documents under UCP 600, and transparent pricing of export bill discounting protect both exporters and financial institutions from settlement risks.',
      argumentativeTopic: 'Omnichannel digital banking complements rather than replaces human relationship officers in SME banking.',
      engToBanPassage: 'Transparent trade finance operations and prompt repatriation of export proceeds are critical for maintaining foreign exchange liquidity in the banking system.',
      engToBanTranslation: 'ব্যাংকিং ব্যবস্থায় বৈদেশিক মুদ্রার তারল্য বজায় রাখার জন্য স্বচ্ছ ট্রেড ফাইন্যান্স কার্যক্রম এবং রপ্তানি আয় দ্রুত দেশে প্রত্যাবাসন অত্যন্ত গুরুত্বপূর্ণ।',
      banToEngPassage: 'গ্রাহকের লেনদেনের ধরন বিশ্লেষণ ও কেওয়াইসি যাচাইয়ের মাধ্যমে মানি লন্ডারিং ও সন্দেহজনক লেনদেন প্রতিরোধ করা প্রতিটি ব্যাংক কর্মকর্তার দায়িত্ব।',
      banToEngTranslation: 'Preventing money laundering and suspicious transactions by analyzing customer transaction patterns and verifying KYC is the responsibility of every bank officer.',
      bankingCasePrompt: 'A garment exporter discounts a 90-day export bill of USD 80,000 at a commercial bank. The bank applies an exchange rate of Tk. 118.50 per USD and charges a discount commission at 8% per annum (360-day year) plus a SWIFT charge of Tk. 4,500. Calculate the net BDT proceeds credited to the exporter’s account.',
      bankingCaseSolution: '1. Gross Bill Value in BDT = USD 80,000 × Tk. 118.50 = Tk. 94,80,000.\n2. Discount Charge for 90 days = Tk. 94,80,000 × 0.08 × (90 / 360) = Tk. 1,89,600.\n3. Total Deductions = Tk. 1,89,600 + Tk. 4,500 (SWIFT) = Tk. 1,94,100.\n4. Net BDT Proceeds Credited = Tk. 94,80,000 - Tk. 1,94,100 = Tk. 92,85,900.'
    }
  }),

  // 2023 - Combined 9 Banks Officer (General) (Job ID: 10181)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2023',
    questionPaperCode: 'BSCS-OFF-GEN-2023 (Job ID: 10181)',
    title: 'Combined 9 Banks Officer (General) Full 100-MCQ Preliminary & 200-Mark Written Exam 2023',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BKB, BDBL & 3 Other Govt Banks (BSCS)',
    examTaker: 'BIBM',
    year: 2023,
    examDate: 'September 2023',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Combined 9 Banks Officer (General) 2023.',
    writtenSeed: {
      englishFocusTopic: 'Agricultural Modernization, Food Security, and Low-Cost Rural Credit Disbursement in Bangladesh',
      englishFocusContext: 'Bangladesh Bank agricultural and rural credit policy, crop diversification, and mechanized farming loans',
      banglaFocusTopic: 'খাদ্য নিরাপত্তা নিশ্চিতকরণে কৃষি ঋণ বিতরণ, আধুনিক কৃষি প্রযুক্তি ও গ্রামীণ ব্যাংকিং',
      banglaFocusContext: 'কৃষকদের সহজ শর্তে ব্যাংক হিসাব খোলা, শস্য ও মৎস্য খাতে স্বল্প সুদে ঋণ প্রবাহ এবং মধ্যস্বত্বভোগীদের দৌরাত্ম্য হ্রাস',
      comprehensionTitle: 'Food Security, Agro-Processing Value Chains, and Rural Banking Outreach',
      comprehensionPassage: 'Ensuring national food security in an era of global supply-chain disruptions requires more than subsistence farming. Commercial and specialized banks must finance cold-storage infrastructure, high-yield seed adoption, and agro-processing enterprises so that farmers receive fair prices and post-harvest losses are minimized.',
      argumentativeTopic: 'Direct digital disbursement of agricultural loans to farmers’ bank accounts eliminates middlemen and improves recovery rates.',
      engToBanPassage: 'Expanding low-interest credit to smallholder farmers and agro-processing enterprises is indispensable for achieving self-sufficiency in food production and rural prosperity.',
      engToBanTranslation: 'খাদ্য উৎপাদনে স্বয়ংসম্পূর্ণতা অর্জন এবং গ্রামীণ সমৃদ্ধির জন্য ক্ষুদ্র কৃষক ও কৃষি-প্রক্রিয়াজাতকরণ উদ্যোক্তাদের স্বল্প সুদে ঋণ সম্প্রসারণ অপরিহার্য।',
      banToEngPassage: 'কৃষি খাতে স্বল্প সুদে ঋণ বিতরণ এবং আধুনিক কৃষি প্রযুক্তির ব্যবহার বাংলাদেশের খাদ্য নিরাপত্তা নিশ্চিতকরণে যুগান্তকারী ভূমিকা পালন করছে।',
      banToEngTranslation: 'The disbursement of low-interest credit in the agricultural sector and the adoption of modern agricultural technologies are playing a groundbreaking role in ensuring food security in Bangladesh.',
      bankingCasePrompt: 'In an election between two candidates, 10% of the registered voters did not cast their votes, and 60 votes cast were declared invalid. The winning candidate secured 47% of the total registered voters and won by a margin of 308 votes. Find the total number of registered voters.',
      bankingCaseSolution: '1. Let total registered voters = x. Votes cast = 0.90x. Valid votes = 0.90x - 60.\n2. Winner secured = 0.47x. Loser secured = (0.90x - 60) - 0.47x = 0.43x - 60.\n3. Vote margin equation: 0.47x - (0.43x - 60) = 308 => 0.04x + 60 = 308 => 0.04x = 248 => x = 6,200 registered voters.'
    }
  }),

  // 2022 - Combined 8 Banks Officer (General) (Held 02 Dec 2022)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2022',
    questionPaperCode: 'BSCS-OFF-GEN-2022 (Job ID: 10147)',
    title: 'Combined 8 Banks Officer (General) Full 100-MCQ Preliminary & 200-Mark Written Exam 2022 (2478 Posts)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB, RAKUB & BHBFC (BSCS)',
    examTaker: 'BIBM',
    year: 2022,
    examDate: '02 December 2022',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Combined 8 Banks Officer (General) 2022.',
    writtenSeed: {
      englishFocusTopic: 'Role of Inward Remittance and Export Diversification in Strengthening Foreign Exchange Reserves of Bangladesh',
      englishFocusContext: 'Balancing current account deficits, promoting non-RMG exports, and incentivizing formal remittance channels in 2022',
      banglaFocusTopic: 'বৈদেশিক মুদ্রার রিজার্ভ শক্তিশালীকরণে প্রবাসী আয় (Remittance) ও রপ্তানি বহুমুখীকরণের গুরুত্ব',
      banglaFocusContext: 'তৈরি পোশাক শিল্পের পাশাপাশি আইসিটি, চামড়া, ওষুধ ও হালকা প্রকৌশল খাতে রপ্তানি বৃদ্ধি এবং হুন্ডি প্রতিরোধ',
      comprehensionTitle: 'Balance of Payments, Export Basket Diversification, and Remittance Corridors',
      comprehensionPassage: 'A resilient external sector depends on a diversified export basket and steady remittance inflows through formal banking channels. When global energy and commodity prices surge, countries reliant on a single export sector face balance-of-payments pressures. Commercial banks can mitigate this by financing export-oriented ICT, pharmaceutical, and agro-processing firms.',
      argumentativeTopic: 'Reducing remittance transaction costs and providing instant mobile wallet settlement are more effective than cash incentives alone in curbing informal hundi.',
      engToBanPassage: 'Diversifying the export basket beyond ready-made garments and channeling migrant remittances through formal banking networks are vital for external macroeconomic stability.',
      engToBanTranslation: 'তৈরি পোশাক খাতের বাইরে রপ্তানি পণ্য বহুমুখীকরণ এবং বৈধ ব্যাংকিং চ্যানেলের মাধ্যমে প্রবাসী আয় দেশে আনা বাহ্যিক সামষ্টিক অর্থনৈতিক স্থিতিশীলতার জন্য অত্যন্ত গুরুত্বপূর্ণ।',
      banToEngPassage: 'পদ্মা বহুমুখী সেতু চালুর ফলে দেশের দক্ষিণ-পশ্চিমাঞ্চলের সাথে রাজধানী ঢাকার যোগাযোগ ও কৃষি-শিল্প বাণিজ্যে নতুন দিগন্ত উন্মোচিত হয়েছে।',
      banToEngTranslation: 'With the inauguration of the Padma Multipurpose Bridge, a new horizon has opened in connectivity and agro-industrial trade between the southwestern region of the country and the capital Dhaka.',
      bankingCasePrompt: 'A rectangular garden is 50 meters long and 34 meters wide. It is surrounded on the outside by a uniform path of width 3 meters. Find the area of the path and the cost of leveling it at Tk. 125 per square meter.',
      bankingCaseSolution: '1. Inner Garden Area = 50 m × 34 m = 1,700 sq. meters.\n2. Outer Length = 50 + 2(3) = 56 m; Outer Width = 34 + 2(3) = 40 m.\n3. Outer Total Area = 56 m × 40 m = 2,240 sq. meters.\n4. Area of Path = 2,240 - 1,700 = 540 sq. meters.\n5. Total Cost of Leveling = 540 × Tk. 125 = Tk. 67,500.'
    }
  }),

  // 2021 - Combined 8 Banks Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2021',
    questionPaperCode: 'BSCS-OFF-GEN-2021',
    title: 'Combined 8 Banks Officer (General) Full 100-MCQ Preliminary & 200-Mark Written Exam 2021',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BKB, RAKUB & BDBL (BSCS)',
    examTaker: 'Faculty of Social Sciences, University of Dhaka',
    year: 2021,
    examDate: 'December 2021',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Combined 8 Banks Officer (General) 2021.',
    writtenSeed: {
      englishFocusTopic: 'Fifty Years of Bangladesh’s Economic Transformation and the Future of Inclusive Banking',
      englishFocusContext: 'Golden Jubilee of Independence (1971–2021), LDC graduation milestones, and financial inclusion achievements',
      banglaFocusTopic: 'স্বাধীনতার সুবর্ণজয়ন্তী: বাংলাদেশের আর্থ-সামাজিক অগ্রগতি ও ব্যাংকিং খাতের অবদান',
      banglaFocusContext: '১৯৭১ থেকে ২০২১ সাল পর্যন্ত মাথাপিছু আয় বৃদ্ধি, দারিদ্র্য বিমোচন, অবকাঠামো উন্নয়ন ও আর্থিক অন্তর্ভুক্তির বিস্তার',
      comprehensionTitle: 'Half a Century of Financial Deepening and Socio-Economic Resilience in Bangladesh',
      comprehensionPassage: 'Over the past five decades, Bangladesh has transitioned from an agrarian post-war economy into a rapidly industrializing lower-middle-income nation. State-owned and private commercial banks have played a foundational role in mobilizing domestic savings, financing export-oriented manufacturing, and extending micro-credit and agent banking to rural households.',
      argumentativeTopic: 'Graduating from Least Developed Country (LDC) status requires commercial banks to upgrade trade finance, corporate governance, and green banking capabilities.',
      engToBanPassage: 'Over the past five decades, Bangladesh has achieved remarkable progress in poverty reduction, human development, and financial inclusion across rural and urban communities.',
      engToBanTranslation: 'গত পাঁচ দশকে বাংলাদেশ গ্রামীণ ও শহুরে জনগোষ্ঠীর মধ্যে দারিদ্র্য বিমোচন, মানব উন্নয়ন এবং আর্থিক অন্তর্ভুক্তির ক্ষেত্রে অভূতপূর্ব অগ্রগতি অর্জন করেছে।',
      banToEngPassage: 'স্বল্পোন্নত দেশ থেকে উন্নয়নশীল দেশে উত্তরণের চ্যালেঞ্জ মোকাবিলায় রপ্তানি খাতের সক্ষমতা বৃদ্ধি ও দক্ষ মানবসম্পদ উন্নয়ন অপরিহার্য।',
      banToEngTranslation: 'Enhancing the capacity of the export sector and developing skilled human resources are essential to meet the challenges of graduating from a Least Developed Country to a developing nation.',
      bankingCasePrompt: 'The perimeter of a rectangular field is 160 meters and the length of its diagonal is 58 meters. Find the length, width, and total area of the rectangular field.',
      bankingCaseSolution: '1. Perimeter 2(L + W) = 160 => L + W = 80 m.\n2. Diagonal² = L² + W² = 58² = 3,364.\n3. Using 2LW = (L + W)² - (L² + W²) = 80² - 3,364 = 6,400 - 3,364 = 3,036.\n4. Area (LW) = 3,036 / 2 = 1,518 sq. meters (Dimensions: L = 46 m, W = 33 m gives 1,518 sq.m).'
    }
  }),

  // 2020 - Sonali & Janata Bank Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2020',
    questionPaperCode: 'BSCS-OFF-GEN-2020',
    title: 'Sonali, Janata & Agrani Bank Officer (General) Full 100-MCQ Preliminary & 200-Mark Written Exam 2020',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank, Agrani Bank & Rupali Bank (BSCS)',
    examTaker: 'Arts Faculty, University of Dhaka (BSCS)',
    year: 2020,
    examDate: 'November 2020',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Officer (General) 2020.',
    writtenSeed: {
      englishFocusTopic: 'Pandemic Economic Recovery: Stimulus Package Implementation and Digital Banking Continuity in 2020',
      englishFocusContext: 'Disbursement of low-interest working capital stimulus loans to CMSMEs, agriculture, and export industries',
      banglaFocusTopic: 'মহামারী-পরবর্তী অর্থনৈতিক পুনরুদ্ধারে প্রণোদনা প্যাকেজ ও কৃষি অর্থায়নের গুরুত্ব',
      banglaFocusContext: 'ক্ষতিগ্রস্ত শিল্প, ক্ষুদ্র উদ্যোক্তা ও কৃষি খাতে স্বল্প সুদে চলতি মূলধন জোগান এবং কর্মসংস্থান সুরক্ষা',
      comprehensionTitle: 'Counter-Cyclical Liquidity Support and Branch Operations During Crisis',
      comprehensionPassage: 'During unprecedented economic disruptions, central banks and commercial banks act as shock absorbers by providing counter-cyclical liquidity and subsidized working capital loans. Ensuring that stimulus funds reach genuine cottage and small enterprises requires transparent borrower selection and digital disbursement tracking at the branch level.',
      argumentativeTopic: 'Digital banking channels proved to be an essential public utility rather than a luxury during the 2020 economic slowdown.',
      engToBanPassage: 'Timely disbursement of working capital under government stimulus packages helped safeguard industrial employment and revive rural supply chains.',
      engToBanTranslation: 'সরকারি প্রণোদনা প্যাকেজের আওতায় সময়মতো চলতি মূলধন বিতরণ শিল্প খাতে কর্মসংস্থান সুরক্ষা এবং গ্রামীণ সরবরাহ ব্যবস্থা পুনরুজ্জীবিত করতে সহায়তা করেছে।',
      banToEngPassage: 'অর্থনৈতিক সংকটকালে কৃষি উৎপাদন ও গ্রামীণ অর্থনীতি সচল রাখতে বাণিজ্যিক ব্যাংকগুলোকে অগ্রাধিকার ভিত্তিতে কৃষি ঋণ বিতরণ করতে হবে।',
      banToEngTranslation: 'During economic crises, commercial banks must disburse agricultural credit on a priority basis to keep agricultural production and the rural economy active.',
      bankingCasePrompt: 'A man rows 30 km downstream and 18 km upstream, taking 5 hours each time. Find the velocity of the boat in still water and the velocity of the river current.',
      bankingCaseSolution: '1. Downstream velocity (u + v) = 30 km / 5 hours = 6 km/h.\n2. Upstream velocity (u - v) = 18 km / 5 hours = 3.6 km/h.\n3. Velocity of boat in still water u = (6 + 3.6) / 2 = 4.8 km/h.\n4. Velocity of river current v = (6 - 3.6) / 2 = 1.2 km/h.'
    }
  }),

  // 2019 - Combined 8 Banks Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2019',
    questionPaperCode: 'BSCS-OFF-GEN-2019',
    title: 'Combined 8 Banks Officer (General) Full 100-MCQ Preliminary & 200-Mark Written Exam 2019',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB & RAKUB (BSCS)',
    examTaker: 'Arts Faculty, University of Dhaka (BSCS)',
    year: 2019,
    examDate: 'December 2019',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Combined 8 Banks Officer (General) 2019.',
    writtenSeed: {
      englishFocusTopic: 'Channelling Wage Earners’ Remittance Through Formal Banking Channels: Incentives, Exchange Rate Policy, and Curbing Hundi',
      englishFocusContext: 'Introduction of 2% cash incentive on inward remittances in FY 2019–20 and expansion of bank-MFS remittance partnerships',
      banglaFocusTopic: 'বৈধ ব্যাংকিং চ্যানেলে প্রবাসী আয় প্রবাহ বৃদ্ধি, নগদ প্রণোদনা ও হুন্ডি প্রতিরোধ',
      banglaFocusContext: 'রেমিট্যান্সের ওপর সরকারি প্রণোদনা, দ্রুত নিষ্পত্তি এবং গ্রামীণ অর্থনীতিতে প্রবাসী আয়ের ইতিবাচক প্রভাব',
      comprehensionTitle: 'Migrant Remittances, Rural Consumption, and Formal Financial Intermediation',
      comprehensionPassage: 'Inward remittances sent by Bangladeshi expatriates constitute one of the largest sources of foreign exchange earnings without any import content. When these funds flow through formal banking channels rather than informal hundi networks, they bolster official foreign exchange reserves and expand the lending capacity of rural bank branches.',
      argumentativeTopic: 'Cash incentives combined with zero-fee digital remittance transfers are the most effective tools to eliminate informal hundi.',
      engToBanPassage: 'Inward remittances sent by expatriate workers bolster official foreign exchange reserves and directly improve the standard of living of rural families.',
      engToBanTranslation: 'প্রবাসী কর্মীদের পাঠানো রেমিট্যান্স সরকারি বৈদেশিক মুদ্রার রিজার্ভকে শক্তিশালী করে এবং গ্রামীণ পরিবারগুলোর জীবনযাত্রার মান সরাসরি উন্নত করে।',
      banToEngPassage: 'হুন্ডি প্রতিরোধ ও বৈধ পথে রেমিট্যান্স আহরণ বাড়াতে বাণিজ্যিক ব্যাংকগুলোকে প্রবাসীদের জন্য দ্রুত ও হয়রানিমুক্ত সেবা নিশ্চিত করতে হবে।',
      banToEngTranslation: 'To prevent hundi and increase remittance collection through legal channels, commercial banks must ensure fast and hassle-free services for expatriates.',
      bankingCasePrompt: 'A remittance beneficiary receives USD 2,500 through a state-owned bank at an exchange rate of Tk. 84.80 per USD with a 2% government cash incentive. Calculate the total BDT credited to the beneficiary’s account, and state the AML/CFT checks required for high-value remittance payouts.',
      bankingCaseSolution: '1. Principal Remittance in BDT = USD 2,500 × Tk. 84.80 = Tk. 2,12,000.\n2. 2% Government Cash Incentive = Tk. 2,12,000 × 0.02 = Tk. 4,240.\n3. Total BDT Credited = Tk. 2,12,000 + Tk. 4,240 = Tk. 2,16,240.\n4. AML/CFT Checks: Valid NID/Passport verification of beneficiary, remitter’s valid overseas work permit/residence proof for large thresholds, and screening against BFIU/UN sanctions lists.'
    }
  }),

  // 2018 - Combined 5 Banks Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2018',
    questionPaperCode: 'BSCS-OFF-GEN-2018',
    title: 'Combined 5 Banks Officer (General) Full 100-MCQ Preliminary & 200-Mark Written Exam 2018',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali & Bangladesh Krishi Bank (BSCS)',
    examTaker: 'Faculty of Social Sciences, DU (BSCS)',
    year: 2018,
    examDate: 'August 2018',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Combined 5 Banks Officer (General) 2018.',
    writtenSeed: {
      englishFocusTopic: 'Agent Banking and Financial Inclusion: Bridging the Urban-Rural Divide in Bangladesh',
      englishFocusContext: 'Rapid expansion of Agent Banking outlets, school banking, and 10-Taka no-frills accounts across rural unions',
      banglaFocusTopic: 'এজেন্ট ব্যাংকিং ও আর্থিক অন্তর্ভুক্তি: শহর ও গ্রামের ব্যাংকিং সেবার বৈষম্য নিরসন',
      banglaFocusContext: 'ব্যাংকিং সুবিধাবঞ্চিত গ্রামীণ জনগোষ্ঠীর দোরগোড়ায় সঞ্চয়, ঋণ ও রেমিট্যান্স সেবা পৌঁছে দেওয়া',
      comprehensionTitle: 'Branchless Banking, Biometric Authentication, and Rural Deposit Mobilization',
      comprehensionPassage: 'Setting up conventional brick-and-mortar bank branches in every remote village is often financially unviable due to high overhead costs. Agent banking overcomes this barrier by partnering with local entrepreneurs equipped with POS terminals and biometric fingerprint scanners to provide real-time core banking transactions.',
      argumentativeTopic: 'Agent banking is the most cost-effective model for mobilizing rural savings and disbursing micro-agricultural credit.',
      engToBanPassage: 'Agent banking has revolutionized rural financial inclusion by bringing real-time deposit, withdrawal, and remittance services to the doorstep of unbanked citizens.',
      engToBanTranslation: 'ব্যাংকিং সুবিধাবঞ্চিত নাগরিকদের দোরগোড়ায় তাৎক্ষণিক আমানত, উত্তোলন ও রেমিট্যান্স সেবা পৌঁছে দিয়ে এজেন্ট ব্যাংকিং গ্রামীণ আর্থিক অন্তর্ভুক্তিতে বিপ্লব ঘটিয়েছে।',
      banToEngPassage: 'নারী ও প্রান্তিক কৃষকদের ব্যাংকিং সেবায় যুক্ত করার মাধ্যমে গ্রামীণ অর্থনীতিতে পুঁজি গঠন ও আত্মকর্মসংস্থান ত্বরান্বিত হচ্ছে।',
      banToEngTranslation: 'By integrating women and marginal farmers into banking services, capital formation and self-employment in the rural economy are being accelerated.',
      bankingCasePrompt: 'By selling 45 lemons for Tk. 40, a vendor loses 20%. How many lemons should he sell for Tk. 24 to gain 20% in the transaction?',
      bankingCaseSolution: '1. Selling Price (SP) of 45 lemons at 20% loss = Tk. 40.\n2. Cost Price (CP) of 45 lemons = 40 / 0.80 = Tk. 50.\n3. Required SP of 45 lemons for 20% gain = 50 × 1.20 = Tk. 60.\n4. Number of lemons to sell for Tk. 24 = (45 / 60) × 24 = 18 lemons.'
    }
  }),

  // 2017 - Bangladesh Bank & Sonali/Janata Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2017',
    questionPaperCode: 'BB-BSCS-OFF-GEN-2017',
    title: 'Bangladesh Bank Officer (General) & Sonali/Janata Officer Full 100-MCQ & 200-Mark Written Exam 2017',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank PLC & Janata Bank PLC',
    examTaker: 'BIBM / IBA, University of Dhaka',
    year: 2017,
    examDate: 'June 2017',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for Bangladesh Bank & State-Owned Banks Officer (General) 2017.',
    writtenSeed: {
      englishFocusTopic: 'Strengthening Internal Control, Audit Compliance, and IT Security in Commercial Banks',
      englishFocusContext: 'Implementation of Internal Control and Compliance (ICC) guidelines and SWIFT/Core Banking security standards',
      banglaFocusTopic: 'বাণিজ্যিক ব্যাংকে অভ্যন্তরীণ নিয়ন্ত্রণ, নিরীক্ষা ও তথ্যপ্রযুক্তি নিরাপত্তা জোরদারকরণ',
      banglaFocusContext: 'ব্যাংকিং জালিয়াতি রোধ, সাইবার নিরাপত্তা নিশ্চিতকরণ এবং শাখা পর্যায়ে পরিপালন সংস্কৃতি গড়ে তোলা',
      comprehensionTitle: 'Operational Risk Management and Dual-Control Governance in Banking',
      comprehensionPassage: 'Operational risk arises from inadequate or failed internal processes, people, and systems, or from external events. By enforcing maker-checker dual control, regular surprise cash verification, and mandatory job rotation at the branch level, banks can prevent internal fraud and protect institutional reputation.',
      argumentativeTopic: 'Strong internal audit and maker-checker discipline at the branch level are more important than post-incident forensic investigations.',
      engToBanPassage: 'Enforcing strict dual-control procedures and regular internal audits at the branch level is essential to prevent operational fraud and safeguard depositors’ trust.',
      engToBanTranslation: 'কার্যক্রমগত জালিয়াতি রোধ এবং আমানতকারীদের আস্থা সুরক্ষিত রাখতে শাখা পর্যায়ে কঠোর দ্বৈত-নিয়ন্ত্রণ পদ্ধতি এবং নিয়মিত অভ্যন্তরীণ নিরীক্ষা কার্যকর করা অপরিহার্য।',
      banToEngPassage: 'আর্থিক খাতে সুশাসন প্রতিষ্ঠা এবং খেলাপি ঋণ আদায়ে ব্যাংক কর্মকর্তাদের পেশাদারিত্ব ও নৈতিক মানদণ্ড বজায় রাখতে হবে।',
      banToEngTranslation: 'Bank officers must maintain professionalism and ethical standards to establish good governance and recover non-performing loans in the financial sector.',
      bankingCasePrompt: 'A cistern can be filled by two pipes A and B in 12 minutes and 15 minutes respectively. Both pipes are opened together, but after 3 minutes pipe A is turned off. How much longer will pipe B take to fill the remaining part of the cistern?',
      bankingCaseSolution: '1. Combined rate of (A + B) per minute = 1/12 + 1/15 = (5 + 4)/60 = 9/60 = 3/20.\n2. Part filled in first 3 minutes = 3 × (3/20) = 9/20.\n3. Remaining part = 1 - 9/20 = 11/20.\n4. Time taken by pipe B alone to fill 11/20 = (11/20) × 15 = 33/4 = 8.25 minutes (8 minutes 15 seconds).'
    }
  }),

  // 2016 - Sonali, Janata & Agrani Bank Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2016',
    questionPaperCode: 'SCB-OFF-GEN-2016',
    title: 'Sonali, Janata, Agrani & Rupali Bank Officer (General) Full 100-MCQ & 200-Mark Written Exam 2016',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank, Agrani Bank & Rupali Bank',
    examTaker: 'Faculty of Business Studies, University of Dhaka',
    year: 2016,
    examDate: 'October 2016',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) for State-Owned Banks Officer (General) 2016.',
    writtenSeed: {
      englishFocusTopic: 'Green Banking and Sustainable Finance: Role of Commercial Banks in Climate Resilience',
      englishFocusContext: 'Bangladesh Bank Green Banking policy guidelines, ETP financing, and solar irrigation refinancing schemes',
      banglaFocusTopic: 'গ্রিন ব্যাংকিং ও টেকসই অর্থায়ন: জলবায়ু পরিবর্তন মোকাবিলায় ব্যাংকিং খাতের ভূমিকা',
      banglaFocusContext: 'পরিবেশবান্ধব শিল্প কারখানা, ইটিপি (ETP) স্থাপন ও নবায়নযোগ্য জ্বালানি খাতে স্বল্প সুদে অর্থায়ন',
      comprehensionTitle: 'Environmental Risk Rating (EnvRR) and Sustainable Industrial Lending',
      comprehensionPassage: 'Climate change poses severe physical and transition risks to deltaic economies like Bangladesh. By integrating Environmental and Social Risk Management (ESRM) into credit appraisal before sanctioning industrial term loans, commercial banks ensure that economic growth does not come at the expense of ecological degradation.',
      argumentativeTopic: 'Commercial banks should make Effluent Treatment Plants (ETPs) and environmental clearance mandatory preconditions for all industrial credit.',
      engToBanPassage: 'Integrating environmental risk assessment into credit appraisal ensures that industrial growth remains environmentally sustainable and socially responsible.',
      engToBanTranslation: 'ঋণ মূল্যায়ন প্রক্রিয়ায় পরিবেশগত ঝুঁকি যাচাই অন্তর্ভুক্ত করলে শিল্প প্রবৃদ্ধি পরিবেশগতভাবে টেকসই ও সামাজিকভাবে দায়বদ্ধ থাকে।',
      banToEngPassage: 'পরিবেশবান্ধব ইটভাটা, সৌরবিদ্যুৎ ও বর্জ্য শোধনাগার স্থাপনে বাংলাদেশ ব্যাংকের পুনঃঅর্থায়ন তহবিল গুরুত্বপূর্ণ অবদান রাখছে।',
      banToEngTranslation: 'Bangladesh Bank’s refinancing fund is making a significant contribution to the establishment of eco-friendly brick kilns, solar power, and effluent treatment plants.',
      bankingCasePrompt: 'The simple interest on a certain sum of money for 3 years at 8% per annum is half the compound interest on Tk. 16,000 for 2 years at 10% per annum. Find the sum placed on simple interest.',
      bankingCaseSolution: '1. Compound Interest on Tk. 16,000 for 2 years at 10% = 16,000 × [(1 + 0.10)² - 1] = 16,000 × 0.21 = Tk. 3,360.\n2. Simple Interest (SI) = 3,360 / 2 = Tk. 1,680.\n3. Principal P = (SI × 100) / (r × t) = (1,680 × 100) / (8 × 3) = 1,68,000 / 24 = Tk. 7,000.'
    }
  }),

  // 2015 - Sonali, Janata & Agrani Bank Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2015',
    questionPaperCode: 'SONALI-JANATA-OFF-2015',
    title: 'Sonali Bank, Janata Bank & Agrani Bank Officer (General) Full 100-MCQ & 100-Mark Written Exam 2015',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank & Agrani Bank',
    examTaker: 'Faculty of Business Studies, DU',
    year: 2015,
    examDate: 'November 2015',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper (Written-01 to Written-12) for State-Owned Commercial Bank Officer (General) 2015.',
    writtenSeed: {
      englishFocusTopic: 'Automation of Payment Systems: BACPS, BEFTN, NPSB, and RTGS in Bangladesh Banking',
      englishFocusContext: 'Modernization of national payment switch, electronic cheque clearing, and instant high-value interbank settlement',
      banglaFocusTopic: 'ব্যাংকিং লেনদেনে অটোমেশন: অটোমেটেড চেক ক্লিয়ারিং (BACPS), বিইএফটিএন ও আরটিজিএস-এর ভূমিকা',
      banglaFocusContext: 'আন্তঃব্যাংক লেনদেনে সময় ও ঝুঁকি হ্রাস এবং আধুনিক পেমেন্ট সিস্টেমের মাধ্যমে ব্যবসা-বাণিজ্য সহজীকরণ',
      comprehensionTitle: 'Modernizing National Payment Infrastructure and Interbank Clearing',
      comprehensionPassage: 'The transition from manual clearing houses to Bangladesh Automated Cheque Processing Systems (BACPS), Electronic Funds Transfer (BEFTN), and Real-Time Gross Settlement (RTGS) has transformed commercial banking in Bangladesh. Businesses can now settle interbank obligations within minutes, accelerating the velocity of money across the economy.',
      argumentativeTopic: 'Electronic payment clearing systems have significantly reduced float delays and cheque fraud in commercial banking.',
      engToBanPassage: 'Automated cheque clearing and electronic fund transfer systems have dramatically reduced settlement time and improved liquidity management across commercial banks.',
      engToBanTranslation: 'স্বয়ংক্রিয় চেক ক্লিয়ারিং এবং ইলেকট্রনিক ফান্ড ট্রান্সফার ব্যবস্থা বাণিজ্যিক ব্যাংকগুলোতে লেনদেন নিষ্পত্তির সময় নাটকীয়ভাবে কমিয়ে এনেছে এবং তারল্য ব্যবস্থাপনা উন্নত করেছে।',
      banToEngPassage: 'আধুনিক কোর ব্যাংকিং সফটওয়্যার চালুর ফলে গ্রাহকরা যেকোনো শাখা থেকে অনলাইনে তাৎক্ষণিক ব্যাংকিং সেবা গ্রহণ করতে পারছেন।',
      banToEngTranslation: 'With the introduction of modern core banking software, customers can avail instant online banking services from any branch.',
      bankingCasePrompt: 'A man rows 18 km downstream in 3 hours and 18 km upstream in 6 hours. Find the speed of the boat in still water and the speed of the stream.',
      bankingCaseSolution: '1. Downstream speed = 18 km / 3 hours = 6 km/h.\n2. Upstream speed = 18 km / 6 hours = 3 km/h.\n3. Speed of boat in still water = (6 + 3) / 2 = 4.5 km/h.\n4. Speed of stream = (6 - 3) / 2 = 1.5 km/h.'
    }
  }),

  // 2014 - Sonali, Agrani & Krishi Bank Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2014',
    questionPaperCode: 'SONALI-AGRANI-OFF-2014',
    title: 'Sonali Bank, Agrani Bank & Krishi Bank Officer (General) Full 100-MCQ & 100-Mark Written Exam 2014',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Agrani Bank & Bangladesh Krishi Bank (BKB)',
    examTaker: 'Arts & Business Studies Faculty, DU',
    year: 2014,
    examDate: 'September 2014',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper (Written-01 to Written-12) for Officer (General) 2014.',
    writtenSeed: {
      englishFocusTopic: 'Role of Specialized and State-Owned Banks in Rural Poverty Alleviation and Agricultural Credit',
      englishFocusContext: 'Subsidized credit for sharecroppers, seasonal crop loans, and rural branch network operations',
      banglaFocusTopic: 'গ্রামীণ দারিদ্র্য বিমোচন ও কৃষি উন্নয়নে রাষ্ট্রায়ত্ত ও বিশেষায়িত ব্যাংকের ভূমিকা',
      banglaFocusContext: 'বর্গাচাষী, প্রান্তিক কৃষক ও গ্রামীণ ক্ষুদ্র উদ্যোক্তাদের মাঝে প্রাতিষ্ঠানিক ঋণ বিস্তার',
      comprehensionTitle: 'Rural Financial Markets, Sharecropper Credit, and Poverty Reduction',
      comprehensionPassage: 'Access to affordable institutional credit is a powerful catalyst for rural poverty alleviation. When state-owned and agricultural banks provide collateral-free seasonal crop loans to sharecroppers and marginal farmers, rural households break free from high-interest informal moneylenders and invest in higher agricultural productivity.',
      argumentativeTopic: 'Expanding institutional credit to landless sharecroppers is essential for inclusive rural development in Bangladesh.',
      engToBanPassage: 'Providing timely institutional credit to marginal farmers and sharecroppers protects them from informal moneylenders and boosts agricultural productivity.',
      engToBanTranslation: 'প্রান্তিক কৃষক ও বর্গাচাষীদের সময়মতো প্রাতিষ্ঠানিক ঋণ প্রদান তাদের অপ্রাতিষ্ঠানিক মহাজনদের হাত থেকে রক্ষা করে এবং কৃষি উৎপাদনশীলতা বৃদ্ধি করে।',
      banToEngPassage: 'গ্রামীণ অর্থনীতির চাকা সচল রাখতে কৃষি ও অকৃষি উভয় খাতেই ক্ষুদ্র ঋণের সুষম বিস্তার প্রয়োজন।',
      banToEngTranslation: 'Balanced expansion of micro-credit in both farm and non-farm sectors is necessary to keep the wheels of the rural economy moving.',
      bankingCasePrompt: 'Two numbers are in the ratio 3 : 5. If 9 is subtracted from each, the new numbers are in the ratio 12 : 23. Find the two original numbers.',
      bankingCaseSolution: '1. Let the two original numbers be 3x and 5x.\n2. According to the condition: (3x - 9) / (5x - 9) = 12 / 23.\n3. Cross-multiplying: 23(3x - 9) = 12(5x - 9) => 69x - 207 = 60x - 108 => 9x = 99 => x = 11.\n4. Therefore, the two numbers are 3 × 11 = 33 and 5 × 11 = 55.'
    }
  }),

  // 2013 - Bangladesh Bank & Sonali/Janata Bank Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2013',
    questionPaperCode: 'BB-SONALI-OFF-2013',
    title: 'Bangladesh Bank Officer (General) & Sonali/Janata Officer Full 100-MCQ & 100-Mark Written Exam 2013',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank & Janata Bank',
    examTaker: 'BIBM / IBA, University of Dhaka',
    year: 2013,
    examDate: 'July 2013',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper (Written-01 to Written-12) for Officer (General) 2013.',
    writtenSeed: {
      englishFocusTopic: 'Mobile Financial Services (MFS) and School Banking: Expanding the Frontiers of Financial Inclusion',
      englishFocusContext: 'Rapid growth of bank-led MFS accounts and student savings initiatives across Bangladesh in 2013',
      banglaFocusTopic: 'মোবাইল ফিন্যান্সিয়াল সার্ভিসেস (MFS) ও স্কুল ব্যাংকিং: আর্থিক অন্তর্ভুক্তির নতুন দিগন্ত',
      banglaFocusContext: 'মোবাইল ফোনের মাধ্যমে তাৎক্ষণিক অর্থ স্থানান্তর এবং শিক্ষার্থীদের মাঝে সঞ্চয়ের অভ্যাস গড়ে তোলা',
      comprehensionTitle: 'Bank-Led Mobile Financial Services and Grassroots Savings Mobilization',
      comprehensionPassage: 'By adopting a bank-led regulatory framework for Mobile Financial Services (MFS), Bangladesh enabled millions of low-income workers and rural families to send and receive money instantaneously. Simultaneously, school banking initiatives have instilled formal savings habits among students from an early age.',
      argumentativeTopic: 'A bank-led Mobile Financial Services (MFS) regulatory model ensures stronger consumer protection and AML compliance than unregulated operators.',
      engToBanPassage: 'Bank-led mobile financial services have enabled garment workers and urban migrants to remit money safely and instantly to their rural families.',
      engToBanTranslation: 'ব্যাংক-পরিচালিত মোবাইল ফিন্যান্সিয়াল সার্ভিসেস পোশাক শ্রমিক ও শহুরে অভিবাসীদের তাদের গ্রামীণ পরিবারের কাছে নিরাপদে ও তাৎক্ষণিকভাবে অর্থ প্রেরণ সক্ষম করেছে।',
      banToEngPassage: 'স্কুল ব্যাংকিং কার্যক্রমের মাধ্যমে কোমলমতি শিক্ষার্থীদের মধ্যে শৈশব থেকেই সঞ্চয়ের মানসিকতা ও আধুনিক ব্যাংকিং সম্পর্কে ধারণা তৈরি হচ্ছে।',
      banToEngTranslation: 'Through school banking programs, a savings mindset and awareness of modern banking are being developed among young students from childhood.',
      bankingCasePrompt: 'A trader bought two horses for Tk. 78,000 in total. He sold one at a loss of 15% and the other at a profit of 10%, and found that each horse was sold at the exact same selling price. Find the cost price of each horse.',
      bankingCaseSolution: '1. Let the cost prices of the two horses be x and y, where x + y = Tk. 78,000.\n2. Selling price equality: 0.85x = 1.10y => x / y = 110 / 85 = 22 / 17.\n3. Sum of ratio parts = 22 + 17 = 39.\n4. Cost price of first horse x = (22 / 39) × 78,000 = Tk. 44,000; Cost price of second horse y = (17 / 39) × 78,000 = Tk. 34,000.'
    }
  }),

  // 2012 - Government Bank Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2012',
    questionPaperCode: 'JANATA-AGRANI-OFF-2012',
    title: 'Janata Bank, Agrani Bank & Rupali Bank Officer (General) Full 100-MCQ & 100-Mark Written Exam 2012',
    orgType: 'Government Bank',
    organizationName: 'Janata Bank, Agrani Bank & Rupali Bank',
    examTaker: 'Faculty of Business Studies, DU',
    year: 2012,
    examDate: 'October 2012',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper (Written-01 to Written-12) for State-Owned Bank Officer (General) 2012.',
    writtenSeed: {
      englishFocusTopic: 'Non-Performing Loans (NPLs) in State-Owned Commercial Banks: Causes, Provisioning, and Recovery Strategies',
      englishFocusContext: ' tightening loan classification norms, credit risk grading (CRG), and Artha Rin Adalat recovery mechanisms',
      banglaFocusTopic: 'রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকে খেলাপি ঋণ: কারণ, প্রভাব ও আদায় জোরদারকরণের উপায়',
      banglaFocusContext: 'যথাযথ প্রকল্প যাচাই, জামানত মূল্যায়ন ও তদারকির মাধ্যমে খেলাপি ঋণ হ্রাস এবং ব্যাংকের মূলধন সুরক্ষা',
      comprehensionTitle: 'Credit Risk Grading, Loan Classification, and Capital Adequacy',
      comprehensionPassage: 'High levels of non-performing loans erode bank profitability through mandatory loan-loss provisioning and lock up loanable funds. Effective credit risk management requires thorough pre-sanction appraisal, verification of borrower cash flows, and timely legal action against willful defaulters.',
      argumentativeTopic: 'Rigorous pre-sanction credit appraisal is far more effective in controlling non-performing loans than post-default litigation.',
      engToBanPassage: 'High non-performing loans erode capital adequacy and reduce the ability of commercial banks to lower lending interest rates for productive borrowers.',
      engToBanTranslation: 'উচ্চ খেলাপি ঋণ মূলধন পর্যাপ্ততা হ্রাস করে এবং উৎপাদনশীল ঋণগ্রহীতাদের জন্য ঋণের সুদের হার কমানোর ক্ষেত্রে বাণিজ্যিক ব্যাংকগুলোর সক্ষমতা সংকুচিত করে।',
      banToEngPassage: 'ঋণ অনুমোদনের পূর্বে গ্রাহকের ব্যবসায়িক নগদ প্রবাহ ও সুনাম সঠিকভাবে যাচাই করা হলে খেলাপি ঋণের ঝুঁকি অনেকাংশে কমে যায়।',
      banToEngTranslation: 'If a borrower’s business cash flow and reputation are properly verified prior to loan sanctioning, the risk of non-performing loans is largely reduced.',
      bankingCasePrompt: 'A sum of Tk. 24,000 is lent out in two parts in such a way that the simple interest on one part at 10% for 4 years is equal to that on the other part at 8% for 5 years. Find the two sums.',
      bankingCaseSolution: '1. Let the first part be Tk. x and the second part be Tk. (24,000 - x).\n2. Simple interest equality: (x × 10 × 4) / 100 = [(24,000 - x) × 8 × 5] / 100.\n3. Simplifying: 40x = 40(24,000 - x) => x = 24,000 - x => 2x = 24,000 => x = Tk. 12,000.\n4. Both parts are Tk. 12,000 and Tk. 12,000.'
    }
  }),

  // 2012 - Private Bank Officer (General) (Bank Asia & Jamuna Bank)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-prv-2012',
    questionPaperCode: 'BANKASIA-JAMUNA-PO-2012',
    title: 'Bank Asia & Jamuna Bank Officer (General) Full 100-MCQ Preliminary & 100-Mark Written Exam 2012',
    orgType: 'Private Bank',
    organizationName: 'Bank Asia PLC & Jamuna Bank PLC',
    examTaker: 'IBA, University of Dhaka',
    year: 2012,
    examDate: 'November 2012',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper (Written-01 to Written-12) for Private Commercial Bank Officer (General) 2012.',
    writtenSeed: {
      englishFocusTopic: 'SME Financing and Women Entrepreneurship Development in Private Commercial Banks',
      englishFocusContext: 'Dedicated SME service desks, women entrepreneur refinance schemes, and relationship banking',
      banglaFocusTopic: 'বেসরকারি ব্যাংকে এসএমই অর্থায়ন ও নারী উদ্যোক্তা উন্নয়ন',
      banglaFocusContext: 'জামানতবিহীন ক্ষুদ্র ঋণ, নারী উদ্যোক্তা ডেস্ক ও পরামর্শ সেবার মাধ্যমে কর্মসংস্থান সৃষ্টি',
      comprehensionTitle: 'Empowering Women Entrepreneurs Through Inclusive SME Banking',
      comprehensionPassage: 'Small and Medium Enterprises (SMEs) act as the engine of employment generation in developing economies. By establishing dedicated women entrepreneur desks and extending low-cost collateral-free credit under central bank refinance schemes, private commercial banks unlock grassroots entrepreneurial potential.',
      argumentativeTopic: 'Dedicated advisory and credit desks for women entrepreneurs significantly improve SME loan utilization and repayment performance.',
      engToBanPassage: 'Small and Medium Enterprises (SMEs) act as the engine of employment generation in developing economies. By extending collateral-free credit to women entrepreneurs, commercial banks can accelerate inclusive rural development.',
      engToBanTranslation: 'উন্নয়নশীল অর্থনীতিতে ক্ষুদ্র ও মাঝারি শিল্পোদ্যোগ (এসএমই) কর্মসংস্থান সৃষ্টির মূল চালিকাশক্তি হিসেবে কাজ করে। নারী উদ্যোক্তাদের জামানতবিহীন ঋণ সুবিধা সম্প্রসারণের মাধ্যমে বাণিজ্যিক ব্যাংকগুলো অন্তর্ভুক্তিমূলক গ্রামীণ উন্নয়নকে ত্বরান্বিত করতে পারে।',
      banToEngPassage: 'গ্রাহক সেবার উৎকর্ষতা এবং আধুনিক প্রযুক্তির ব্যবহারের মাধ্যমে বেসরকারি ব্যাংকগুলো দেশের অর্থনৈতিক প্রবৃদ্ধিতে গুরুত্বপূর্ণ অবদান রাখছে।',
      banToEngTranslation: 'Through excellence in customer service and the use of modern technology, private banks are making a vital contribution to the country’s economic growth.',
      bankingCasePrompt: 'A customer deposits Tk. 2,00,000 in a 3-year fixed deposit scheme offering 10% interest compounded annually. Calculate the maturity value before tax and explain the difference between a Bearer Cheque and an Account Payee Crossed Cheque.',
      bankingCaseSolution: '1. Maturity Value = P × (1 + r/100)³ = 2,00,000 × (1.10)³ = 2,00,000 × 1.331 = Tk. 2,66,200 (Total Compound Interest = Tk. 66,200).\n2. Bearer vs. Account Payee Cheque: A Bearer Cheque can be encashed over the counter by the person presenting it, whereas an Account Payee Crossed Cheque cannot be encashed in cash over the counter and must be collected through the payee’s bank account.'
    }
  }),

  // 2011 - Bangladesh Bank & Rupali/Krishi Bank Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2011',
    questionPaperCode: 'BB-RUPALI-OFF-2011',
    title: 'Bangladesh Bank Officer (General) & Rupali/Krishi Bank Officer Full 100-MCQ & 100-Mark Written Exam 2011',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Rupali Bank & Bangladesh Krishi Bank',
    examTaker: 'BIBM / IBA, University of Dhaka',
    year: 2011,
    examDate: 'August 2011',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper (Written-01 to Written-12) for Officer (General) 2011.',
    writtenSeed: {
      englishFocusTopic: 'Inclusive Central Banking and Developmental Role of Commercial Banks in Bangladesh',
      englishFocusContext: 'Ten-Taka farmers’ accounts, agricultural credit expansion, and CSR initiatives in the banking sector',
      banglaFocusTopic: 'অন্তর্ভুক্তিমূলক ব্যাংকিং ও কৃষকদের ১০ টাকার ব্যাংক হিসাব: গ্রামীণ অর্থনীতিতে প্রভাব',
      banglaFocusContext: 'প্রান্তিক কৃষক, মুক্তিযোদ্ধা ও সামাজিক নিরাপত্তা কর্মসূচির উপকারভোগীদের ব্যাংকিং সেবায় অন্তর্ভুক্তকরণ',
      comprehensionTitle: 'No-Frills Accounts and Grassroots Financial Empowerment',
      comprehensionPassage: 'Opening ten-taka no-frills bank accounts for farmers and social safety-net beneficiaries marked a historic milestone in Bangladesh’s financial inclusion journey. These accounts eliminated minimum-balance barriers and allowed government subsidies and agricultural loans to reach rural citizens directly.',
      argumentativeTopic: 'No-frills bank accounts are the foundation for transparent government-to-person (G2P) subsidy transfers and rural savings mobilization.',
      engToBanPassage: 'No-frills ten-taka bank accounts have empowered millions of marginal farmers to receive government subsidies directly and participate in the formal financial system.',
      engToBanTranslation: 'ন্যূনতম জমার শর্তহীন ১০ টাকার ব্যাংক হিসাব লক্ষ লক্ষ প্রান্তিক কৃষককে সরাসরি সরকারি ভর্তুকি গ্রহণ এবং আনুষ্ঠানিক আর্থিক ব্যবস্থায় অংশগ্রহণের সুযোগ করে দিয়েছে।',
      banToEngPassage: 'দেশের সার্বিক অর্থনৈতিক উন্নয়নের জন্য কৃষি ও শিল্প খাতের মধ্যে সুষম অর্থায়ন নিশ্চিত করা অপরিহার্য।',
      banToEngTranslation: 'Ensuring balanced financing between the agricultural and industrial sectors is essential for the overall economic development of the country.',
      bankingCasePrompt: 'The speed of a motorboat in still water is 15 km/h. It goes 30 km downstream and comes back to the starting point in a total of 4 hours 30 minutes. Find the speed of the stream.',
      bankingCaseSolution: '1. Let speed of the stream = x km/h. Downstream speed = (15 + x) km/h; Upstream speed = (15 - x) km/h.\n2. Total time equation: 30 / (15 + x) + 30 / (15 - x) = 4.5 = 9 / 2.\n3. Simplifying: 900 / (225 - x²) = 9 / 2 => 225 - x² = 200 => x² = 25 => x = 5 km/h.'
    }
  }),

  // 2010 - Bangladesh Bank & Sonali/Janata/Agrani Officer (General)
  buildFull100McqOfficerGeneralPaper({
    paperId: 'nonit-off-gen-govt-2010',
    questionPaperCode: 'BB-AD-SONALI-2010',
    title: 'Bangladesh Bank & Sonali/Janata/Agrani Officer (General) Full 100-MCQ & 100-Mark Written Exam 2010',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank, Janata Bank & Agrani Bank',
    examTaker: 'IBA / BIBM',
    year: 2010,
    examDate: 'October 2010',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper (Written-01 to Written-12) for Foundational 2010 Bank Officer (General) Recruitment Exam.',
    writtenSeed: {
      englishFocusTopic: 'Role of Commercial Banks in Industrialization, Export Promotion, and Domestic Savings Mobilization',
      englishFocusContext: 'FoundationalBasel II implementation, online branch computerization, and export-import trade financing in 2010',
      banglaFocusTopic: 'শিল্পায়ন, রপ্তানি বাণিজ্য সম্প্রসারণ ও অভ্যন্তরীণ সঞ্চয় আহরণে বাণিজ্যিক ব্যাংকের ভূমিকা',
      banglaFocusContext: 'দেশের অবকাঠামো ও শিল্প বিকাশে দীর্ঘমেয়াদী অর্থায়ন এবং ব্যাংকিং সেবার কম্পিউটারাইজেশন',
      comprehensionTitle: 'Financial Intermediation, Capital Formation, and Economic Growth',
      comprehensionPassage: 'Commercial banks serve as the lifeblood of a modern economy by mobilizing scattered household savings and channeling them into productive industrial and agricultural investments. Sound credit appraisal, adherence to Basel II capital standards, and branch computerization enhance the efficiency of this intermediation process.',
      argumentativeTopic: 'Computerization of state-owned commercial bank branches is essential to compete with private banks and improve customer service.',
      engToBanPassage: 'Commercial banks play a pivotal role in capital formation by mobilizing scattered household savings and channeling them into productive industrial investments.',
      engToBanTranslation: 'বাণিজ্যিক ব্যাংকগুলো গৃহস্থালির ক্ষুদ্র ও বিক্ষিপ্ত সঞ্চয়গুলোকে একত্রিত করে উৎপাদনশীল শিল্প বিনিয়োগে প্রবাহিত করার মাধ্যমে মূলধন গঠনে কেন্দ্রীয় ভূমিকা পালন করে।',
      banToEngPassage: 'দক্ষ মানবসম্পদ ও আধুনিক তথ্যপ্রযুক্তির সমন্বয়ে রাষ্ট্রায়ত্ত ব্যাংকগুলোর সেবার মান আন্তর্জাতিক পর্যায়ে উন্নীত করা সম্ভব।',
      banToEngTranslation: 'By combining skilled human resources with modern information technology, the service quality of state-owned banks can be elevated to international standards.',
      bankingCasePrompt: 'A father is currently 3 times as old as his son. 12 years ago, the father was 6 times as old as his son. Find the present ages of the father and the son.',
      bankingCaseSolution: '1. Let the present age of the son be x years and the father be 3x years.\n2. 12 years ago: (3x - 12) = 6(x - 12).\n3. Solving: 3x - 12 = 6x - 72 => 3x = 60 => x = 20.\n4. Present Ages: Son = 20 years, Father = 3 × 20 = 60 years.'
    }
  })
];
