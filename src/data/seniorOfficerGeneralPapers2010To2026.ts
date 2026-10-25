import { NonItExamPaper, NonItQuestionItem, NonItOrgType } from './bankNonItQuestions';

interface RawMcqSeed {
  questionText: string;
  options: [string, string, string, string];
  correctAnswer: string;
  solution: string;
}

// ============================================================================
// 1. SENIOR OFFICER (GENERAL) — BANGLA LANGUAGE & LITERATURE POOL (30 ITEMS)
// ============================================================================
const soBanglaPool: RawMcqSeed[] = [
  {
    questionText: '‘মৈমনসিংহ গীতিকা’ কে সম্পাদনা করেন এবং এটি কত সালে কলকাতা বিশ্ববিদ্যালয় থেকে প্রকাশিত হয়?',
    options: [
      'A) চন্দ্রকুমার দে — ১৯২০ সালে',
      'B) ড. দীনেশচন্দ্র সেন — ১৯২৩ সালে',
      'C) হরপ্রসাদ শাস্ত্রী — ১৯১৬ সালে',
      'D) আবদুল করিম সাহিত্যবিশারদ — ১৯২৫ সালে'
    ],
    correctAnswer: 'B) ড. দীনেশচন্দ্র সেন — ১৯২৩ সালে',
    solution: `চন্দ্রকুমার দে মৈমনসিংহ গীতিকার পালাগুলো সংগ্রহ করেন এবং ড. দীনেশচন্দ্র সেনের সম্পাদনায় ১৯২৩ সালে কলকাতা বিশ্ববিদ্যালয় থেকে ‘মৈমনসিংহ গীতিকা’ প্রকাশিত হয়। এতে মহুয়া, মলুয়া, দেওয়ানা মদিনা প্রভৃতি ১০টি পালা রয়েছে। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘হ্ম’ এবং ‘জ্ঞ’ যুক্তবর্ণ দুটি যথাক্রমে কোন কোন বর্ণের সমন্বয়ে গঠিত?',
    options: [
      'A) হ + ণ এবং গ + ঞ',
      'B) হ + ম এবং জ + ঞ',
      'C) ম + হ এবং ঞ + জ',
      'D) হ + ন এবং জ + ণ'
    ],
    correctAnswer: 'B) হ + ম এবং জ + ঞ',
    solution: `‘হ্ম’ (যেমন: ব্রহ্মপুত্র, ব্রাহ্মণ) = হ্ + ম; এবং ‘জ্ঞ’ (যেমন: বিজ্ঞান, জ্ঞান) = জ্ + ঞ। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'প্রমিত বাংলা বানান রীতি অনুযায়ী নিচের কোন শব্দগুচ্ছের সবগুলো বানানই শুদ্ধ?',
    options: [
      'A) বিভীষিকা, মরীচিকা, সমীচীন',
      'B) বিভিষীকা, মরিচীকা, সমিচীন',
      'C) বিভীষীকা, মরীচিকা, সমীচিন',
      'D) বীভিষিকা, মরীচীকা, সমীচীন'
    ],
    correctAnswer: 'A) বিভীষিকা, মরীচিকা, সমীচীন',
    solution: `বিভীষিকা (ব+ই, ভ+ঈ, ষ+ই, ক+আ), মরীচিকা (ম, র+ঈ, চ+ই, ক+আ) এবং সমীচীন (স, ম+ঈ, চ+ঈ, ন) — এই তিনটি বানানই সম্পূর্ণ শুদ্ধ। সঠিক উত্তর: A)।`
  },
  {
    questionText: 'জীবনানন্দ দাশের বিখ্যাত কাব্যগ্রন্থ ‘রূপসী বাংলা’ কত সালে প্রকাশিত হয়?',
    options: [
      'A) ১৯৪২ সালে',
      'B) ১৯৫৭ সালে (মৃত্যু-পরবর্তী)',
      'C) ১৯৩৫ সালে',
      'D) ১৯৪৮ সালে'
    ],
    correctAnswer: 'B) ১৯৫৭ সালে (মৃত্যু-পরবর্তী)',
    solution: `জীবনানন্দ দাশের জীবদ্দশায় অপ্রকাশিত সনেট সংকলন ‘রূপসী বাংলা’ তাঁর মৃত্যুর পর ১৯৫৭ সালে প্রকাশিত হয় (ধূসর পাণ্ডুলিপি ১৯৩৬, বনলতা সেন ১৯৪২, মহাপৃথিবী ১৯৪৪)। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘সাত সাগরের মাঝি’ ও ‘সিরাজাম মুনীরা’ কাব্যগ্রন্থ দুটির রচয়িতা কে?',
    options: [
      'A) গোলাম মোস্তফা',
      'B) ফররুখ আহমদ',
      'C) কাজী নজরুল ইসলাম',
      'D) আহসান হাবীব'
    ],
    correctAnswer: 'B) ফররুখ আহমদ',
    solution: `ইসলামী রেনেসাঁর কবি ফররুখ আহমদ রচিত বিখ্যাত কাব্যগ্রন্থ হলো ‘সাত সাগরের মাঝি’ (১৯৪৪), ‘সিরাজাম মুনীরা’ (১৯৫২) এবং কাব্যনাট্য ‘নৌফেল ও হাতেম’। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘আগুনের পরশমণি’ ও ‘জোছনা ও জননীর গল্প’ — মুক্তিযুদ্ধভিত্তিক উপন্যাস দুটির রচয়িতা কে?',
    options: [
      'A) আনিসুল হক',
      'B) হুমায়ূন আহমেদ',
      'C) সৈয়দ শামসুল হক',
      'D) শওকত ওসমান'
    ],
    correctAnswer: 'B) হুমায়ূন আহমেদ',
    solution: `কথাশিল্পী হুমায়ূন আহমেদ রচিত দুটি কালজয়ী মুক্তিযুদ্ধভিত্তিক উপন্যাস হলো ‘আগুনের পরশমণি’ (১৯৮৬) এবং ‘জোছনা ও জননীর গল্প’ (২০০৪)। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'সেলিনা হোসেন রচিত ‘হাঙর নদী গ্রেনেড’ উপন্যাসের কেন্দ্রীয় চরিত্র কোনটি?',
    options: [
      'A) জয়গুন',
      'B) বুড়ি',
      'C) কল্যাণী',
      'D) কপিলা'
    ],
    correctAnswer: 'B) বুড়ি',
    solution: `মুক্তিযুদ্ধের পটভূমিতে সেলিনা হোসেন রচিত ‘হাঙর নদী গ্রেনেড’ (১৯৭৬) উপন্যাসের কেন্দ্রীয় চরিত্র ‘বুড়ি’, যিনি মুক্তিযোদ্ধাদের বাঁচাতে নিজের প্রতিবন্ধী সন্তান রইসকে পাকিস্তানি বাহিনীর হাতে তুলে দেন। সঠিক উত্তর: B) বুড়ি।`
  },
  {
    questionText: '‘আগুনপাখি’ উপন্যাসটির রচয়িতা কে?',
    options: [
      'A) শওকত আলী',
      'B) হাসান আজিজুল হক',
      'C) আখতারুজ্জামান ইলিয়াস',
      'D) সৈয়দ ওয়ালীউল্লাহ'
    ],
    correctAnswer: 'B) হাসান আজিজুল হক',
    solution: `দেশভাগ ও গ্রামীণ নারীর আত্মোপলব্ধির পটভূমিতে ২০০৬ সালে প্রকাশিত ‘আগুনপাখি’ উপন্যাসের রচয়িতা কথাসাহিত্যিক হাসান আজিজুল হক। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘পায়ের আওয়াজ পাওয়া যায়’ ও ‘নূরলদীনের সারাজীবন’ কাব্যনাট্য দুটির রচয়িতা কে?',
    options: [
      'A) মুনীর চৌধুরী',
      'B) সৈয়দ শামসুল হক',
      'C) সেলিম আল দীন',
      'D) আব্দুল্লাহ আল মামুন'
    ],
    correctAnswer: 'B) সৈয়দ শামসুল হক',
    solution: `সব্যসাচী লেখক সৈয়দ শামসুল হক রচিত দুটি বিখ্যাত কাব্যনাট্য হলো ‘পায়ের আওয়াজ পাওয়া যায়’ (মুক্তিযুদ্ধভিত্তিক) এবং ‘নূরলদীনের সারাজীবন’ (রংপুরের কৃষক বিদ্রোহভিত্তিক)। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘ক্রীতদাসের হাসি’ উপন্যাসটির লেখক কে এবং এর মূল উপজীব্য কী?',
    options: [
      'A) জহির রায়হান — ভাষা আন্দোলন',
      'B) শওকত ওসমান — আইয়ুব খানের সামরিক স্বৈরশাসনের রূপক প্রতিবাদ',
      'C) আবু ইসহাক — দুর্ভিক্ষ',
      'D) শহীদুল্লা কায়সার — দেশভাগ'
    ],
    correctAnswer: 'B) শওকত ওসমান — আইয়ুব খানের সামরিক স্বৈরশাসনের রূপক প্রতিবাদ',
    solution: `শওকত ওসমান ১৯৬২ সালে খলিফা হারুনর রশীদ ও ক্রীতদাস তাতারীর রূপক কাহিনীর আড়ালে পাকিস্তানের সামরিক স্বৈরশাসনের বিরুদ্ধে ‘ক্রীতদাসের হাসি’ উপন্যাসটি রচনা করেন। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘ষড়ঋতু’ শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?',
    options: [
      'A) ষড় + ঋতু',
      'B) ষট্ + ঋতু',
      'C) ষড়্ + ঋতু',
      'D) ষষ্ঠ + ঋতু'
    ],
    correctAnswer: 'B) ষট্ + ঋতু',
    solution: `ব্যঞ্জনসন্ধির নিয়মানুযায়ী বর্গীয় প্রথম বর্ণের (ট্) পর স্বরধ্বনি (ঋ) থাকলে প্রথম বর্ণের স্থলে সেই বর্গের তৃতীয় বর্ণ (ড্/ড়্) হয়: ষট্ + ঋতু = ষড়ঋতু। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘মনস্তাপ’ ও ‘নিশ্চয়’ শব্দ দুটির সঠিক সন্ধি বিচ্ছেদ কোনটি?',
    options: [
      'A) মনস + তাপ এবং নিশ + চয়',
      'B) মনঃ + তাপ এবং নিঃ + চয়',
      'C) মনো + তাপ এবং নির্ + চয়',
      'D) মন + তাপ এবং নি + চয়'
    ],
    correctAnswer: 'B) মনঃ + তাপ এবং নিঃ + চয়',
    solution: `বিসর্গ সন্ধির নিয়মে: মনঃ + তাপ = মনস্তাপ এবং নিঃ + চয় = নিশ্চয়। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘আশীর্বাদ’ ও ‘দুর্যোগ’ শব্দ দুটি কোন সন্ধির উদাহরণ?',
    options: [
      'A) স্বরসন্ধি',
      'B) বিসর্গ সন্ধি (আশীঃ + বাদ এবং দুঃ + যোগ)',
      'C) নিপাতনে সিদ্ধ ব্যঞ্জনসন্ধি',
      'D) খাঁটি বাংলা সন্ধি'
    ],
    correctAnswer: 'B) বিসর্গ সন্ধি (আশীঃ + বাদ এবং দুঃ + যোগ)',
    solution: `অ/আ ভিন্ন স্বরের পর বিসর্গ এবং তার পর ঘোষ ব্যঞ্জন থাকলে বিসর্গ স্থলে ‘র্’ (রেফ) হয়: আশীঃ + বাদ = আশীর্বাদ; দুঃ + যোগ = দুর্যোগ। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘মহাকীর্তি’ এবং ‘সিংহাসন’ যথাক্রমে কোন কোন সমাসের উদাহরণ?',
    options: [
      'A) দুটিই বহুব্রীহি সমাস',
      'B) মহাকীর্তি (মহৎ যে কীর্তি — কর্মধারয়) এবং সিংহাসন (সিংহ চিহ্নিত আসন — মধ্যপদলোপী কর্মধারয়)',
      'C) তৎপুরুষ ও দ্বিগু সমাস',
      'D) অব্যয়ীভাব ও দ্বন্দ্ব সমাস'
    ],
    correctAnswer: 'B) মহাকীর্তি (মহৎ যে কীর্তি — কর্মধারয়) এবং সিংহাসন (সিংহ চিহ্নিত আসন — মধ্যপদলোপী কর্মধারয়)',
    solution: `মহৎ যে কীর্তি = মহাকীর্তি (কর্মধারয় সমাস) এবং সিংহ চিহ্নিত আসন = সিংহাসন (মধ্যপদলোপী কর্মধারয় সমাস)। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘বৌভাত’ ও ‘স্মৃতিসৌধ’ কোন সমাসের উদাহরণ?',
    options: [
      'A) দ্বন্দ্ব সমাস',
      'B) মধ্যপদলোপী কর্মধারয় সমাস',
      'C) উপমান কর্মধারয় সমাস',
      'D) অব্যয়ীভাব সমাস'
    ],
    correctAnswer: 'B) মধ্যপদলোপী কর্মধারয় সমাস',
    solution: `বৌ পরিবেশিত ভাত = বৌভাত এবং স্মৃতি রক্ষার্থে সৌধ = স্মৃতিসৌধ — ব্যাসবাক্যের মধ্যপদ লোপ পেয়ে গঠিত হওয়ায় এগুলো মধ্যপদলোপী কর্মধারয় সমাস। সঠিক উত্তর: B)।`
  },
  {
    questionText: '“পাপে বিরত হও” এবং “সোমবার থেকে পরীক্ষা শুরু” — এখানে ‘পাপে’ ও ‘সোমবার থেকে’ কোন কারক?',
    options: [
      'A) অধিকরণ কারক',
      'B) অপাদান কারক',
      'C) করণ কারক',
      'D) কর্ম কারক'
    ],
    correctAnswer: 'B) অপাদান কারক',
    solution: `যা থেকে বিরত হওয়া, ভয় পাওয়া বা আরম্ভ হওয়া বোঝায় তা অপাদান কারক। তাই ‘পাপে’ (পাপ হতে বিরত) এবং ‘সোমবার থেকে’ (আরম্ভ কাল) উভয়ই অপাদান কারক। সঠিক উত্তর: B)।`
  },
  {
    questionText: '“ফুলে ফুলে ঘর ভরেছে” — এখানে ‘ফুলে ফুলে’ কোন কারকে কোন বিভক্তি?',
    options: [
      'A) অধিকরণে ৭মী',
      'B) করণে ৭মী বিভক্তি',
      'C) অপাদানে ৭মী',
      'D) কর্মে ৭মী'
    ],
    correctAnswer: 'B) করণে ৭মী বিভক্তি',
    solution: `কী দ্বারা ঘর ভরেছে? — ফুল দ্বারা (উপকরণ বা যন্ত্র বোঝাতে করণ কারকে ৭মী বিভক্তি)। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'ণত্ব বিধান অনুযায়ী নিচের কোন শব্দটিতে স্বভাবতই ‘ণ’ হয়েছে?',
    options: [
      'A) কৃপণ',
      'B) লবণ / চাণক্য / বাণিজ্য',
      'C) রামায়ণ',
      'D) হরিণ'
    ],
    correctAnswer: 'B) লবণ / চাণক্য / বাণিজ্য',
    solution: `ঋ, র, ষ ছাড়াও কিছু তৎসম শব্দে স্বভাবতই মূর্ধন্য-ণ হয়, যেমন: চাণক্য, মাণিক্য, গণ, বাণিজ্য, লবণ, মণ, বেণু, বীণা, কঙ্কণ, কণিকা। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘শাকসবজি’ শব্দটি কোন দুটি ভাষার শব্দের মিলনে গঠিত মিশ্র শব্দ?',
    options: [
      'A) বাংলা + ইংরেজি',
      'B) তৎসম (শাক) + ফারসি (সবজি)',
      'C) আরবি + ফারসি',
      'D) পর্তুগিজ + বাংলা'
    ],
    correctAnswer: 'B) তৎসম (শাক) + ফারসি (সবজি)',
    solution: `‘শাক’ তৎসম শব্দ এবং ‘সবজি’ ফারসি শব্দ; এ দুটির মিলনে গঠিত মিশ্র শব্দ ‘শাকসবজি’ (একইভাবে রাজা-বাদশা = তৎসম + ফারসি; হাট-বাজার = বাংলা + ফারসি)। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘তাসের ঘর’ ও ‘বালির বাঁধ’ বাগধারা দুটির অর্থ কী?',
    options: [
      'A) মজবুত দুর্গ',
      'B) ক্ষণস্থায়ী বস্তু',
      'C) তীব্র শত্রুতা',
      'D) অসম্ভব কল্পনা'
    ],
    correctAnswer: 'B) ক্ষণস্থায়ী বস্তু',
    solution: `‘তাসের ঘর’ এবং ‘বালির বাঁধ’ উভয় বাগধারারই অর্থ ক্ষণস্থায়ী বস্তু বা যা সহজেই ভেঙে যায়। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘গড্ডলিকা প্রবাহ’ বাগধারাটির সঠিক অর্থ কোনটি?',
    options: [
      'A) খরস্রোতা নদী',
      'B) অন্ধ অনুকরণ',
      'C) একগুঁয়ে স্বভাব',
      'D) বিশৃঙ্খল অবস্থা'
    ],
    correctAnswer: 'B) অন্ধ অনুকরণ',
    solution: `‘গড্ডল’ অর্থ ভেড়া। ভেড়ার পালের মতো ভালো-মন্দ বিচার না করে অন্যের দেখাদেখি চলা বা ‘অন্ধ অনুকরণ’ করাকে ‘গড্ডলিকা প্রবাহ’ বলে। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘অক্ষির সমীপে’ এবং ‘অক্ষির অগোচরে’ — এককথায় প্রকাশ করলে কী হবে?',
    options: [
      'A) প্রত্যক্ষ ও পরোক্ষ',
      'B) সমক্ষ ও পরোক্ষ',
      'C) চক্ষুষ্মান ও অন্ধ',
      'D) সাপেক্ষ ও নিরপেক্ষ'
    ],
    correctAnswer: 'B) সমক্ষ ও পরোক্ষ',
    solution: `অক্ষির সমীপে = সমক্ষ; অক্ষির সম্মুখে = প্রত্যক্ষ; অক্ষির অগোচরে = পরোক্ষ। সঠিক উত্তর: B) সমক্ষ ও পরোক্ষ।`
  },
  {
    questionText: '‘সমুদ্র’ শব্দের সমার্থক শব্দ কোনটি?',
    options: [
      'A) তটিনী',
      'B) পারাবার / রত্নাকর / অর্ণব',
      'C) শৈবালিনী',
      'D) স্রোতস্বিনী'
    ],
    correctAnswer: 'B) পারাবার / রত্নাকর / অর্ণব',
    solution: `পারাবার, রত্নাকর, অর্ণব, পয়োধি, জলধি, সিন্ধু হলো ‘সমুদ্র’-এর সমার্থক শব্দ। (তটিনী, শৈবালিনী ও স্রোতস্বিনী হলো ‘নদী’-এর সমার্থক শব্দ)। সঠিক উত্তর: B)।`
  },
  {
    questionText: '‘ঐহিক’ এবং ‘উগ্র’ শব্দ দুটির সঠিক বিপরীত শব্দ কোনটি?',
    options: [
      'A) লৌকিক ও শান্ত',
      'B) পারত্রিক ও সৌম্য',
      'C) পার্থিব ও কোমল',
      'D) স্বর্গীয় ও ধীর'
    ],
    correctAnswer: 'B) পারত্রিক ও সৌম্য',
    solution: `‘ঐহিক’ (ইহলোক সম্বন্ধীয়)-এর বিপরীত শব্দ ‘পারত্রিক’ (পরলোক সম্বন্ধীয়), এবং ‘উগ্র’-এর বিপরীত শব্দ ‘সৌম্য’। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'শরীর > শরীল — এটি ধ্বনি পরিবর্তনের কোন প্রক্রিয়ার উদাহরণ?',
    options: [
      'A) সমীভবন',
      'B) বিষমীভবন',
      'C) স্বরভক্তি',
      'D) অপিনিহিতি'
    ],
    correctAnswer: 'B) বিষমীভবন',
    solution: `দুটো সমবর্ণের একটির পরিবর্তনকে বিষমীভবন বলে (যেমন: শরীর > শরীল, লাল > নাল — এখানে দুটি ‘র’ বা ‘ল’-এর একটি পরিবর্তিত হয়েছে)। সঠিক উত্তর: B) বিষমীভবন।`
  },
  {
    questionText: '‘রাত > রাইত’ এবং ‘আজি > আইজ’ — এটি কোন ধরনের ধ্বনি পরিবর্তন?',
    options: [
      'A) অভিশ্রুতি',
      'B) অপিনিহিতি',
      'C) অসমীকরণ',
      'D) স্বরসঙ্গতি'
    ],
    correctAnswer: 'B) অপিনিহিতি',
    solution: `পরের ই-কার বা উ-কার আগে উচ্চারিত হওয়ার রীতিকে অপিনিহিতি বলে (রাত > রাইত, আজি > আইজ, সাধু > সাউধ)। সঠিক উত্তর: B) অপিনিহিতি।`
  },
  {
    questionText: '‘কৃতঘ্ন’ ও ‘কৃতজ্ঞ’ শব্দ দুটির অর্থ যথাক্রমে কী?',
    options: [
      'A) যে উপকারীর উপকার স্বীকার করে এবং যে উপকার করে না',
      'B) যে উপকারীর অপকার করে এবং যে উপকারীর উপকার স্বীকার করে',
      'C) যে উপকার ভুলে যায় এবং যে উপকার করে',
      'D) দুটিই সমার্থক শব্দ'
    ],
    correctAnswer: 'B) যে উপকারীর অপকার করে এবং যে উপকারীর উপকার স্বীকার করে',
    solution: `যে উপকারীর উপকার স্বীকার করে = কৃতজ্ঞ; যে উপকারীর উপকার স্বীকার করে না = অকৃতজ্ঞ; আর যে উপকারীর অপকার করে = কৃতঘ্ন। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'পল্লীকবি জসীমউদ্‌দীনের ‘কবর’ কবিতাটি তাঁর কোন কাব্যগ্রন্থের অন্তর্গত এবং এটি কোন ছন্দে রচিত?',
    options: [
      'A) নকশী কাঁথার মাঠ — স্বরবৃত্ত ছন্দ',
      'B) রাখালী — মাত্রাবৃত্ত ছন্দ',
      'C) সোজন বাদিয়ার ঘাট — অক্ষরবৃত্ত ছন্দ',
      'D) বালুচর — গদ্যছন্দ'
    ],
    correctAnswer: 'B) রাখালী — মাত্রাবৃত্ত ছন্দ',
    solution: `জসীমউদ্‌দীনের বিখ্যাত ‘কবর’ কবিতাটি ‘রাখালী’ (১৯২৭) কাব্যগ্রন্থের অন্তর্গত এবং এটি মাত্রাবৃত্ত ছন্দে রচিত (মোট চরণ ১১৮টি)। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের কোন উপন্যাসে ‘ছিয়াত্তরের মন্বন্তর’ ও সন্ন্যাসী বিদ্রোহের পটভূমি চিত্রিত হয়েছে এবং ‘বন্দে মাতরম্’ গানটি রয়েছে?',
    options: [
      'A) কপালকুণ্ডলা',
      'B) আনন্দমঠ',
      'C) দেবী চৌধুরাণী',
      'D) কৃষ্ণকান্তের উইল'
    ],
    correctAnswer: 'B) আনন্দমঠ',
    solution: `১৮৮২ সালে প্রকাশিত বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের ‘আনন্দমঠ’ উপন্যাসটি ১১৭৬ বঙ্গাব্দের (১৭৭০ খ্রিস্টাব্দ) ছিয়াত্তরের মন্বন্তর ও সন্ন্যাসী বিদ্রোহের পটভূমিতে রচিত। সঠিক উত্তর: B)।`
  },
  {
    questionText: 'শরৎচন্দ্র চট্টোপাধ্যায়ের কোন উপন্যাসটি ব্রিটিশ সরকার কর্তৃক বাজেয়াপ্ত হয়েছিল?',
    options: [
      'A) গৃহদাহ',
      'B) পথের দাবী',
      'C) শ্রীকান্ত',
      'D) চরিত্রহীন'
    ],
    correctAnswer: 'B) পথের দাবী',
    solution: `ব্রিটিশবিরোধী বিপ্লবী আন্দোলনের পটভূমিতে রচিত শরৎচন্দ্র চট্টোপাধ্যায়ের ‘পথের দাবী’ (১৯২৬, কেন্দ্রীয় চরিত্র: সব্যসাচী) উপন্যাসটি ব্রিটিশ সরকার বাজেয়াপ্ত করেছিল। সঠিক উত্তর: B)।`
  }
];

// ============================================================================
// 2. SENIOR OFFICER (GENERAL) — ENGLISH LANGUAGE & FOCUS WRITING POOL (28 ITEMS)
// ============================================================================
const soEnglishPool: RawMcqSeed[] = [
  {
    questionText: 'What does the idiom "To throw in the towel" mean in business and competitive contexts?',
    options: [
      'A) To initiate a hostile takeover',
      'B) To admit defeat or give up on a difficult endeavor',
      'C) To delegate responsibility to a subordinate',
      'D) To celebrate a decisive victory'
    ],
    correctAnswer: 'B) To admit defeat or give up on a difficult endeavor',
    solution: `Originating from boxing (where a cornerman throws a towel into the ring to stop the fight), "to throw in the towel" means to admit defeat, surrender, or quit. Correct Answer: B).`
  },
  {
    questionText: 'What is the meaning of the phrase "To raise the bar"?',
    options: [
      'A) To restrict legal entry into a profession',
      'B) To set higher standards or expectations of quality and performance',
      'C) To increase import tariff barriers',
      'D) To delay project completion'
    ],
    correctAnswer: 'B) To set higher standards or expectations of quality and performance',
    solution: `"To raise the bar" means to establish a higher standard of excellence or performance that others must now meet. Correct Answer: B).`
  },
  {
    questionText: 'Choose the best meaning of the word "FLUX" in the sentence: "Global foreign exchange markets remain in a state of constant flux."',
    options: [
      'A) Stagnation',
      'B) Continuous change or instability',
      'C) Equilibrium',
      'D)Surplus liquidity'
    ],
    correctAnswer: 'B) Continuous change or instability',
    solution: `"Flux" refers to continuous change, fluctuation, or movement ("in a state of flux"). Its antonym is stability or equilibrium. Correct Answer: B).`
  },
  {
    questionText: 'Choose the grammatically correct sentence demonstrating proper negative inversion:',
    options: [
      'A) Seldom the central bank has intervened so decisively in the money market.',
      'B) Seldom has the central bank intervened so decisively in the money market.',
      'C) Seldom the central bank intervened so decisively in the money market.',
      'D) Seldom did the central bank has intervened in the money market.'
    ],
    correctAnswer: 'B) Seldom has the central bank intervened so decisively in the money market.',
    solution: `When a sentence begins with a negative or restrictive adverb (Seldom, Rarely, Never, Scarcely, Not only), subject-auxiliary inversion is required: 'Seldom + Auxiliary (has) + Subject (the central bank) + Past Participle (intervened)'. Correct Answer: B).`
  },
  {
    questionText: 'Identify the sentence free from a "Dangling Modifier":',
    options: [
      'A) Auditing the branch ledger, several discrepancies were discovered by the team.',
      'B) While auditing the branch ledger, the inspection team discovered several discrepancies.',
      'C) Having audited the branch ledger, the discrepancies were immediately rectified.',
      'D) To audit the branch ledger accurately, the vouchers must be sorted by the computer.'
    ],
    correctAnswer: 'B) While auditing the branch ledger, the inspection team discovered several discrepancies.',
    solution: `A introductory participial phrase ("While auditing the branch ledger") must logically modify the subject immediately following the comma ("the inspection team", not "discrepancies"). Correct Answer: B).`
  },
  {
    questionText: 'Choose the word closest in meaning (Synonym) to "EQUIVOCAL":',
    options: [
      'A) Transparent',
      'B) Ambiguous / Open to more than one interpretation',
      'C) Unanimous',
      'D) Dogmatic'
    ],
    correctAnswer: 'B) Ambiguous / Open to more than one interpretation',
    solution: `"Equivocal" means ambiguous, evasive, or open to multiple interpretations. Its antonym is 'Unequivocal' (clear, unambiguous). Correct Answer: B).`
  },
  {
    questionText: 'Choose the word most nearly OPPOSITE in meaning (Antonym) to "OSTENTATIOUS":',
    options: [
      'A) Flamboyant',
      'B) Modest / Unpretentious / Restrained',
      'C) Pretentious',
      'D) Extravagant'
    ],
    correctAnswer: 'B) Modest / Unpretentious / Restrained',
    solution: `"Ostentatious" means characterized by vulgar or pretentious display designed to impress. Its exact antonym is 'Modest', 'Unpretentious', or 'Restrained'. Correct Answer: B).`
  },
  {
    questionText: 'Select the pair that best expresses a relationship similar to "SOLVENT : BANKRUPTCY":',
    options: [
      'A)Profitable : Dividend',
      'B) Resilient : Collapse',
      'C) Liquid : Cash',
      'D) Audited : Fraud'
    ],
    correctAnswer: 'B) Resilient : Collapse',
    solution: `A 'Solvent' institution is resistant to / avoids 'Bankruptcy'; similarly, a 'Resilient' system is resistant to / avoids 'Collapse'. Correct Answer: B).`
  },
  {
    questionText: 'Fill in the blank with the appropriate preposition: "The new sovereign bond issue is tantamount ___ a restructuring of short-term treasury debt."',
    options: [
      'A) with',
      'B) to',
      'C) for',
      'D) of'
    ],
    correctAnswer: 'B) to',
    solution: `The adjective 'tantamount' (meaning equivalent in seriousness or effect) is always followed by the preposition 'to' ("tantamount to"). Correct Answer: B) to.`
  },
  {
    questionText: 'Choose the correct verb agreement: "The Governor, along with the Deputy Governors and Executive Directors, ___ scheduled to attend the monetary policy briefing."',
    options: [
      'A) are',
      'B) is',
      'C) were',
      'D) have been'
    ],
    correctAnswer: 'B) is',
    solution: `When a singular subject ("The Governor") is followed by parenthetical phrases introduced by 'along with', 'together with', 'as well as', or 'accompanied by', the verb remains singular ('is'). Correct Answer: B).`
  },
  {
    questionText: 'What does "To play devil’s advocate" mean?',
    options: [
      'A) To defend an illegal financial transaction',
      'B) To argue against an idea or take a contrary position for the sake of testing the argument’s validity',
      'C) To manipulate audit evidence',
      'D) To file a malicious lawsuit'
    ],
    correctAnswer: 'B) To argue against an idea or take a contrary position for the sake of testing the argument’s validity',
    solution: `Playing "devil's advocate" means expressing a contentious or opposing opinion in order to provoke debate and test the strength of the original proposal. Correct Answer: B).`
  },
  {
    questionText: 'What is the meaning of the literary and general idiom "Swan song"?',
    options: [
      'A) An opening ceremony speech',
      'B) A person’s final public performance, gesture, or professional appearance before retirement',
      'C) A melodious folk ballad',
      'D) A premature celebration'
    ],
    correctAnswer: 'B) A person’s final public performance, gesture, or professional appearance before retirement',
    solution: `"Swan song" refers to the final performance, achievement, or farewell act of a person's career before retiring or ending tenure. Correct Answer: B).`
  },
  {
    questionText: 'Which of the following sentences maintains proper "Parallelism" (Parallel Structure)?',
    options: [
      'A) The credit analyst is responsible for assessing risk, financial statement verification, and to prepare memos.',
      'B) The credit analyst is responsible for assessing risk, verifying financial statements, and preparing credit memos.',
      'C) The credit analyst is responsible to assess risk, verifying statements, and credit memo preparation.',
      'D) Assessing risk, financial statement verification, and to prepare memos are the analyst’s duties.'
    ],
    correctAnswer: 'B) The credit analyst is responsible for assessing risk, verifying financial statements, and preparing credit memos.',
    solution: `Parallel structure requires coordinate items in a series to share the same grammatical form: three gerund phrases ('assessing...', 'verifying...', and 'preparing...'). Correct Answer: B).`
  },
  {
    questionText: 'Choose the correctly spelled word:',
    options: [
      'A) Supercede',
      'B) Supersede',
      'C) Superceed',
      'D) Suparsede'
    ],
    correctAnswer: 'B) Supersede',
    solution: `'Supersede' is the only word in English ending in '-sede' (derived from Latin 'supersedere' meaning 'to sit above'). Correct Answer: B) Supersede.`
  },
  {
    questionText: 'Choose the synonym of "AMELIORATE":',
    options: [
      'A) Deteriorate',
      'B) Improve / Make better',
      'C) Stagnate',
      'D) Obliterate'
    ],
    correctAnswer: 'B) Improve / Make better',
    solution: `"Ameliorate" means to make something bad or unsatisfactory better or more tolerable. Correct Answer: B).`
  },
  {
    questionText: 'Fill in the blank: "Had I known about the liquidity crunch earlier, I ___ a larger contingency buffer."',
    options: [
      'A) would maintain',
      'B) would have maintained',
      'C) will maintain',
      'D) had maintained'
    ],
    correctAnswer: 'B) would have maintained',
    solution: `Third conditional with inverted 'if'-clause ('Had I known...' = 'If I had known...') requires 'would have + past participle' in the result clause. Correct Answer: B).`
  },
  {
    questionText: 'Who wrote the famous tragedy "Macbeth" and the comedy "The Merchant of Venice"?',
    options: [
      'A) Christopher Marlowe',
      'B) William Shakespeare',
      'C) George Bernard Shaw',
      'D) John Milton'
    ],
    correctAnswer: 'B) William Shakespeare',
    solution: `William Shakespeare wrote both the tragedy 'Macbeth' and the comedy/tragicomedy 'The Merchant of Venice' (featuring Shylock, Antonio, and Portia). Correct Answer: B).`
  },
  {
    questionText: 'Who is the author of the famous Romantic poem "Ode to the West Wind" and the line "If Winter comes, can Spring be far behind?"',
    options: [
      'A) John Keats',
      'B) Percy Bysshe Shelley (P. B. Shelley)',
      'C) William Wordsworth',
      'D) Lord Byron'
    ],
    correctAnswer: 'B) Percy Bysshe Shelley (P. B. Shelley)',
    solution: `P. B. Shelley wrote 'Ode to the West Wind' (1819), which concludes with the iconic rhetorical question: "If Winter comes, can Spring be far behind?". Correct Answer: B).`
  },
  {
    questionText: 'What is a "Sinecure"?',
    options: [
      'A) A high-risk treasury derivative',
      'B) An office or position that provides salary or status but requires little or no actual work',
      'C) A mandatory central bank audit',
      'D) A diplomatic treaty'
    ],
    correctAnswer: 'B) An office or position that provides salary or status but requires little or no actual work',
    solution: `A 'Sinecure' is a position requiring little or no work but giving the holder status or financial benefit. Correct Answer: B).`
  },
  {
    questionText: 'Fill in the blank with the right preposition: "The bank’s board refrained ___ declaring a cash dividend this fiscal year to bolster Tier-1 capital."',
    options: [
      'A) to',
      'B) from',
      'C) with',
      'D) against'
    ],
    correctAnswer: 'B) from',
    solution: `The verbs 'refrain', 'abstain', and 'desist' take the preposition 'from' + gerund ('refrained from declaring'). Correct Answer: B) from.`
  },
  {
    questionText: 'Choose the correct Passive Voice of: "People know that Bangladesh Bank regulates the money supply."',
    options: [
      'A) Bangladesh Bank is known to regulate the money supply.',
      'B) Bangladesh Bank was known to regulate the money supply.',
      'C) The money supply is known by people to regulate Bangladesh Bank.',
      'D) It was known that Bangladesh Bank regulates the money supply.'
    ],
    correctAnswer: 'A) Bangladesh Bank is known to regulate the money supply.',
    solution: `'People know that X does Y' transforms into 'X is known to do Y' (or 'It is known that X does Y'). Note that 'known' takes 'to', not 'by'. Correct Answer: A).`
  },
  {
    questionText: 'Select the antonym of "CAPRICIOUS":',
    options: [
      'A) Fickle',
      'B) Steadfast / Consistent / Predictable',
      'C) Whimsical',
      'D) Mercurial'
    ],
    correctAnswer: 'B) Steadfast / Consistent / Predictable',
    solution: `"Capricious" means given to sudden and unaccountable changes of mood or behavior (fickle, mercurial). Its antonym is 'Steadfast', 'Consistent', or 'Stable'. Correct Answer: B).`
  },
  {
    questionText: 'Identify the meaning of the foreign phrase "Sub judice":',
    options: [
      'A) Beyond legal authority',
      'B) Under judicial consideration and therefore prohibited from public discussion elsewhere',
      'C) By virtue of one’s office',
      'D) With retrospective effect'
    ],
    correctAnswer: 'B) Under judicial consideration and therefore prohibited from public discussion elsewhere',
    solution: `'Sub judice' means currently under trial or being considered by a judge/court. ('Ultra vires' means beyond legal power; 'Ex officio' means by virtue of office). Correct Answer: B).`
  },
  {
    questionText: 'Choose the correct sentence:',
    options: [
      'A) Scarcely had the circular been issued than the call money rate dropped.',
      'B) Scarcely had the circular been issued when the call money rate dropped.',
      'C) Scarcely the circular had been issued when the call money rate dropped.',
      'D) Scarcely had the circular been issued then the call money rate dropped.'
    ],
    correctAnswer: 'B) Scarcely had the circular been issued when the call money rate dropped.',
    solution: `'Scarcely / Hardly + had + Subject + Past Participle' pairs with 'when' (or 'before'), whereas 'No sooner' pairs with 'than'. Correct Answer: B).`
  },
  {
    questionText: 'Which word means "extremely attentive to accuracy and detail"?',
    options: [
      'A) Negligent',
      'B) Meticulous / Fastidious',
      'C) Cursory',
      'D) Perfunctory'
    ],
    correctAnswer: 'B) Meticulous / Fastidious',
    solution: `'Meticulous' (and 'Fastidious' / 'Scrupulous') means showing great attention to detail; very careful and precise. ('Cursory' and 'Perfunctory' mean hasty and superficial). Correct Answer: B).`
  }
];

// ============================================================================
// 3. SENIOR OFFICER (GENERAL) — GENERAL KNOWLEDGE & BANKING ECONOMY POOL (24 ITEMS)
// ============================================================================
const soGkPool: RawMcqSeed[] = [
  {
    questionText: 'What is the maximum "Single Borrower Exposure Limit" (funded + non-funded) for a commercial bank in Bangladesh as a percentage of its Tier-1 / eligible capital under Bangladesh Bank regulations?',
    options: [
      'A) 10% of Total Capital',
      'B) 25% of Capital (with funded exposure capped at 15%)',
      'C) 50% of Paid-up Capital',
      'D) 40% of Total Deposits'
    ],
    correctAnswer: 'B) 25% of Capital (with funded exposure capped at 15%)',
    solution: `Under Bangladesh Bank BRPD directives on Single Borrower Exposure Limit, aggregate exposure to a single person/counterparty or group cannot exceed 25% of the bank's capital, within which funded credit facilities cannot exceed 15%. Correct Answer: B).`
  },
  {
    questionText: 'Under the Prompt Corrective Action (PCA) framework introduced by Bangladesh Bank, which key financial indicators trigger supervisory intervention on weak scheduled banks?',
    options: [
      'A) Number of ATM booths and branch locations',
      'B) CRAR (Capital to Risk-Weighted Assets Ratio), Tier-1 Capital Ratio, Net NPL Ratio, and Return on Assets (ROA)',
      'C) Corporate Social Responsibility (CSR) budget only',
      'D) Total number of employees'
    ],
    correctAnswer: 'B) CRAR (Capital to Risk-Weighted Assets Ratio), Tier-1 Capital Ratio, Net NPL Ratio, and Return on Assets (ROA)',
    solution: `Bangladesh Bank's PCA framework categorizes banks based on Capital Adequacy (CRAR, CET-1), Asset Quality (Net Non-Performing Loans), and Profitability/Management indicators to enforce early corrective restrictions. Correct Answer: B).`
  },
  {
    questionText: 'Which exchange rate mechanism was introduced by Bangladesh Bank in 2024 before moving toward a more flexible market-driven exchange rate band?',
    options: [
      'A) Bretton Woods Gold Peg',
      'B) Crawling Peg Exchange Rate System (with Crawling Peg Mid-Rate, CPMR)',
      'C) Fixed Sterling Parity',
      'D) Multiple Exchange Rate Auction'
    ],
    correctAnswer: 'B) Crawling Peg Exchange Rate System (with Crawling Peg Mid-Rate, CPMR)',
    solution: `Bangladesh Bank introduced the Crawling Peg system anchored around a Crawling Peg Mid-Rate (CPMR) to allow gradual, predictable exchange rate adjustments within a corridor. Correct Answer: B).`
  },
  {
    questionText: 'In the IMF’s Special Drawing Rights (SDR) currency basket, which five currencies are currently included?',
    options: [
      'A) USD, EUR, GBP, JPY, and CHF (Swiss Franc)',
      'B) US Dollar (USD), Euro (EUR), Chinese Renminbi (CNY), Japanese Yen (JPY), and British Pound (GBP)',
      'C) USD, EUR, CAD, AUD, and GBP',
      'D) USD, EUR, INR, CNY, and RUB'
    ],
    correctAnswer: 'B) US Dollar (USD), Euro (EUR), Chinese Renminbi (CNY), Japanese Yen (JPY), and British Pound (GBP)',
    solution: `The IMF SDR basket consists of five currencies: USD, EUR, Chinese Yuan/Renminbi (added in October 2016), JPY, and GBP. Correct Answer: B).`
  },
  {
    questionText: 'Under UCP 600 (Article 14b), what is the maximum number of banking days available to an issuing bank or confirming bank to examine Letter of Credit (LC) documents and determine compliance?',
    options: [
      'A) 3 banking days following presentation',
      'B) 5 banking days following the day of presentation',
      'C) 7 calendar days',
      'D) 10 business days'
    ],
    correctAnswer: 'B) 5 banking days following the day of presentation',
    solution: `Article 14(b) of UCP 600 grants a maximum of 5 banking days following the day of presentation to examine documents and decide whether to honor or refuse them. Correct Answer: B).`
  },
  {
    questionText: 'What is the difference between "Repo Rate" and "Standing Deposit Facility (SDF / Reverse Repo) Rate" in Bangladesh Bank’s monetary policy corridor?',
    options: [
      'A) Repo absorbs liquidity while SDF injects liquidity',
      'B) Repo Rate injects short-term liquidity into banks against securities, whereas SDF (Reverse Repo) absorbs excess liquidity from banks',
      'C) Both are used exclusively for foreign currency swaps',
      'D) Repo applies only to NBFIs'
    ],
    correctAnswer: 'B) Repo Rate injects short-term liquidity into banks against securities, whereas SDF (Reverse Repo) absorbs excess liquidity from banks',
    solution: `Repo (Repurchase Agreement) is the policy rate at which commercial banks borrow funds from Bangladesh Bank (injecting liquidity), while Reverse Repo / SDF is the floor rate at which banks deposit surplus funds with the central bank. Correct Answer: B).`
  },
  {
    questionText: 'Which institution of the World Bank Group provides interest-free loans (credits) and grants to the world’s poorest developing countries?',
    options: [
      'A) IBRD (International Bank for Reconstruction and Development)',
      'B) IDA (International Development Association)',
      'C) IFC (International Finance Corporation)',
      'D) MIGA (Multilateral Investment Guarantee Agency)'
    ],
    correctAnswer: 'B) IDA (International Development Association)',
    solution: `IDA (established in 1960), known as the soft-loan window of the World Bank, provides concessional zero- or low-interest credits and grants to low-income countries. (IFC finances the private sector; MIGA provides political risk insurance). Correct Answer: B).`
  },
  {
    questionText: 'When was the historic "Mujibnagar Government" (Provisional Government of the People’s Republic of Bangladesh) formed and sworn in during 1971?',
    options: [
      'A) Formed on 26 March 1971 and sworn in on 10 April 1971',
      'B) Formed on 10 April 1971 and sworn in on 17 April 1971 at Baidyanathtala (Mujibnagar), Meherpur',
      'C) Formed on 14 April 1971 and sworn in on 20 April 1971',
      'D) Formed on 7 March 1971 and sworn in on 17 April 1971'
    ],
    correctAnswer: 'B) Formed on 10 April 1971 and sworn in on 17 April 1971 at Baidyanathtala (Mujibnagar), Meherpur',
    solution: `The Provisional Government of Bangladesh was formed on 10 April 1971 (along with the Proclamation of Independence) and took its formal oath on 17 April 1971 at Baidyanathtalamango grove in Meherpur district. Correct Answer: B).`
  },
  {
    questionText: 'Which Article of the Constitution of Bangladesh deals with the "Annual Financial Statement" (National Budget)?',
    options: [
      'A) Article 81',
      'B) Article 87',
      'C) Article 118',
      'D) Article 142'
    ],
    correctAnswer: 'B) Article 87',
    solution: `Article 87 of the Constitution of the People's Republic of Bangladesh stipulates that in respect of every financial year, a statement of estimated receipts and expenditure of the Government ("Annual Financial Statement") shall be laid before Parliament. Correct Answer: B) Article 87.`
  },
  {
    questionText: 'What is "Treasury Bill (T-Bill)" vs. "Bangladesh Government Treasury Bond (BGTB)" in the government securities market?',
    options: [
      'A) T-Bills are long-term (5–20 years) while BGTBs are short-term (<1 year)',
      'B) T-Bills are short-term discount instruments (91-day, 182-day, 364-day), whereas BGTBs are long-term coupon-bearing bonds (2, 5, 10, 15, and 20 years)',
      'C) T-Bills are issued by private corporations',
      'D) BGTBs do not pay any coupon interest'
    ],
    correctAnswer: 'B) T-Bills are short-term discount instruments (91-day, 182-day, 364-day), whereas BGTBs are long-term coupon-bearing bonds (2, 5, 10, 15, and 20 years)',
    solution: `Treasury Bills (91, 182, and 364 days) are short-term zero-coupon money market instruments issued at a discount, whereas BGTBs (2, 5, 10, 15, and 20 years) are long-term capital market bonds paying half-yearly coupon interest. Correct Answer: B).`
  },
  {
    questionText: 'Where is the headquarters of the Bank for International Settlements (BIS), which hosts the Basel Committee on Banking Supervision (BCBS)?',
    options: [
      'A) Geneva, Switzerland',
      'B) Basel, Switzerland',
      'C) Frankfurt, Germany',
      'D) Brussels, Belgium'
    ],
    correctAnswer: 'B) Basel, Switzerland',
    solution: `Established in 1930, the Bank for International Settlements (BIS) — the "central bank for central banks" — is headquartered in Basel, Switzerland. Correct Answer: B).`
  },
  {
    questionText: 'In banking law, what is the legal relationship between a Banker and a Customer when the customer rents a Safe Deposit Locker at a bank branch?',
    options: [
      'A) Debtor and Creditor',
      'B) Lessor (Bailor / Licensor) and Lessee (Bailee / Licensee)',
      'C) Trustee and Beneficiary',
      'D) Principal and Agent'
    ],
    correctAnswer: 'B) Lessor (Bailor / Licensor) and Lessee (Bailee / Licensee)',
    solution: `For deposits, the relationship is Debtor (Bank) and Creditor (Customer). However, when renting a safe deposit locker, the relationship is that of Lessor/Licensor (Bank) and Lessee/Licensee (Customer). Correct Answer: B).`
  },
  {
    questionText: 'What is "Bancassurance" recently introduced by Bangladesh Bank and IDRA?',
    options: [
      'A) Deposit insurance up to Tk. 2,00,000 for bank depositors',
      'B) Distribution and sale of life and non-life insurance policies by commercial banks as corporate agents of insurance companies',
      'C) Reinsurance of export credit guarantees',
      'D) Mandatory health insurance for bank employees only'
    ],
    correctAnswer: 'B) Distribution and sale of life and non-life insurance policies by commercial banks as corporate agents of insurance companies',
    solution: `Bancassurance allows scheduled commercial banks (authorized by Bangladesh Bank and licensed by IDRA as corporate agents) to sell insurance products to their customers through bank branch networks. Correct Answer: B).`
  },
  {
    questionText: 'What does "Tier-1 Capital" (Going-Concern Capital) primarily consist of under Basel III?',
    options: [
      'A) Subordinated debt and general loan loss provisions',
      'B) Common Equity Tier-1 (CET-1: Paid-up Capital, Statutory Reserves, Retained Earnings) plus Additional Tier-1 (AT-1) Perpetual Bonds',
      'C) Short-term interbank call money',
      'D) Revaluation reserves of fixed assets only'
    ],
    correctAnswer: 'B) Common Equity Tier-1 (CET-1: Paid-up Capital, Statutory Reserves, Retained Earnings) plus Additional Tier-1 (AT-1) Perpetual Bonds',
    solution: `Under Basel III, Tier-1 Capital is Going-Concern Capital (composed of CET-1 core equity and AT-1 perpetual instruments) capable of absorbing losses while the bank remains solvent. Tier-2 is Gone-Concern Capital. Correct Answer: B).`
  },
  {
    questionText: 'Which global body sets international standards for Anti-Money Laundering and Combating the Financing of Terrorism (AML/CFT)?',
    options: [
      'A) INTERPOL',
      'B) FATF (Financial Action Task Force)',
      'C) IOSCO',
      'D) UNCTAD'
    ],
    correctAnswer: 'B) FATF (Financial Action Task Force)',
    solution: `The Financial Action Task Force (FATF), headquartered in Paris and established by the G7 in 1989, sets the international AML/CFT standards (40 Recommendations). Correct Answer: B).`
  },
  {
    questionText: 'In Bangladesh’s Foreign Exchange regulations, what is an "RFCD" account and an "NFCD" account?',
    options: [
      'A) Rural Farmers Credit Deposit & National Fixed Currency Deposit',
      'B) Resident Foreign Currency Deposit & Non-Resident Foreign Currency Deposit',
      'C) Regional Fund Clearing Account & National Fund Clearing Account',
      'D) Retail Foreign Credit Account & Net Foreign Currency Account'
    ],
    correctAnswer: 'B) Resident Foreign Currency Deposit & Non-Resident Foreign Currency Deposit',
    solution: `RFCD stands for Resident Foreign Currency Deposit (opened by residents returning from abroad with foreign currency) and NFCD stands for Non-Resident Foreign Currency Deposit (opened by expatriate Bangladeshis). Correct Answer: B).`
  },
  {
    questionText: 'What is "Stagflation" in macroeconomics?',
    options: [
      'A) Rapid GDP growth accompanied by zero inflation',
      'B) Persistent high inflation combined with high unemployment and stagnant economic growth',
      'C) A continuous fall in the general price level',
      'D) Hyperinflation caused solely by gold discoveries'
    ],
    correctAnswer: 'B) Persistent high inflation combined with high unemployment and stagnant economic growth',
    solution: `Stagflation (stagnation + inflation) is an economic condition characterized by slow/stagnant economic output, high unemployment, and rising inflation simultaneously (often triggered by adverse supply shocks). Correct Answer: B).`
  },
  {
    questionText: 'Which sea port is being developed in Cox’s Bazar (Maheshkhali) as Bangladesh’s first deep-sea port?',
    options: [
      'A) Payra Port',
      'B) Matarbari Deep Sea Port',
      'C) Mongla Port',
      'D) Patenga Container Terminal'
    ],
    correctAnswer: 'B) Matarbari Deep Sea Port',
    solution: `Matarbari Deep Sea Port at Maheshkhali Upazila in Cox's Bazar (built with JICA assistance) is Bangladesh's first deep-sea port capable of berthing large mother vessels with a draft of 16+ meters. Correct Answer: B).`
  },
  {
    questionText: 'What is the Phillips Curve in macroeconomic theory?',
    options: [
      'A) Relationship between tax rates and tax revenue',
      'B) Short-run inverse relationship between the rate of unemployment and the rate of inflation',
      'C) Measure of income inequality in a population',
      'D) Relationship between GDP growth and environmental pollution'
    ],
    correctAnswer: 'B) Short-run inverse relationship between the rate of unemployment and the rate of inflation',
    solution: `The Phillips Curve illustrates the short-run inverse trade-off between inflation and unemployment. (Tax rate vs. revenue is the Laffer Curve; income inequality is the Lorenz Curve). Correct Answer: B).`
  },
  {
    questionText: 'What does the "Gini Coefficient" measure in development economics?',
    options: [
      'A) Foreign exchange volatility',
      'B) Income or wealth inequality within a nation (ranging from 0 for perfect equality to 1 for perfect inequality)',
      'C) Central bank capital adequacy',
      'D) Purchasing Power Parity (PPP)'
    ],
    correctAnswer: 'B) Income or wealth inequality within a nation (ranging from 0 for perfect equality to 1 for perfect inequality)',
    solution: `Derived from the Lorenz Curve by Corrado Gini, the Gini Coefficient measures income or wealth inequality on a scale from 0 (complete equality) to 1 (complete inequality). Correct Answer: B).`
  }
];

// ============================================================================
// 4. SENIOR OFFICER (GENERAL) — COMPUTER & BASIC ICT POOL (12 ITEMS)
// ============================================================================
const soIctPool: RawMcqSeed[] = [
  {
    questionText: 'In database transaction processing (such as a Core Banking fund transfer), what does the acronym "ACID" stand for?',
    options: [
      'A) Access, Control, Indexing, Durability',
      'B) Atomicity, Consistency, Isolation, Durability',
      'C) Automated, Centralized, Integrated, Distributed',
      'D) Array, Cache, Instruction, Disk'
    ],
    correctAnswer: 'B) Atomicity, Consistency, Isolation, Durability',
    solution: `ACID properties guarantee reliable database transactions: Atomicity (all-or-nothing), Consistency (valid state transitions), Isolation (concurrent transactions do not interfere), and Durability (committed changes persist). Correct Answer: B).`
  },
  {
    questionText: 'Which layer of the 7-layer OSI Reference Model is responsible for end-to-end logical IP addressing and packet routing across networks?',
    options: [
      'A) Layer 2 — Data Link Layer',
      'B) Layer 3 — Network Layer',
      'C) Layer 4 — Transport Layer',
      'D) Layer 7 — Application Layer'
    ],
    correctAnswer: 'B) Layer 3 — Network Layer',
    solution: `The Network Layer (Layer 3) handles logical IP addressing (IPv4/IPv6) and packet routing via routers. (Layer 2 handles MAC frames; Layer 4 handles TCP/UDP segments). Correct Answer: B).`
  },
  {
    questionText: 'In Microsoft Excel, which financial function calculates the periodic loan installment payment based on a constant interest rate and constant payment schedule?',
    options: [
      'A) =VLOOKUP()',
      'B) =PMT(rate, nper, pv)',
      'C) =CONCATENATE()',
      'D) =COUNTIFS()'
    ],
    correctAnswer: 'B) =PMT(rate, nper, pv)',
    solution: `The Excel financial function =PMT(rate, nper, pv, [fv], [type]) calculates the periodic EMI/installment for a loan given the interest rate, number of periods, and principal present value. Correct Answer: B).`
  },
  {
    questionText: 'What is the 8-bit 2’s complement representation of the negative decimal integer -18?',
    options: [
      'A) 10010010',
      'B) 11101110',
      'C) 11101101',
      'D) 00010010'
    ],
    correctAnswer: 'B) 11101110',
    solution: `+18 in 8-bit binary = 00010010.
1's complement (invert bits) = 11101101.
2's complement (add 1) = 11101101 + 1 = 11101110. Correct Answer: B).`
  },
  {
    questionText: 'In asymmetric (Public Key) cryptography used for digital signatures in banking, which key is used by the sender to sign a message and which key is used by the recipient to verify the signature?',
    options: [
      'A) Signed with Recipient’s Public Key and verified with Sender’s Private Key',
      'B) Signed with Sender’s Private Key and verified with Sender’s Public Key',
      'C) Signed and verified with the same symmetric DES key',
      'D) Signed with MAC address and verified with IP address'
    ],
    correctAnswer: 'B) Signed with Sender’s Private Key and verified with Sender’s Public Key',
    solution: `For a Digital Signature (authentication & non-repudiation), the sender signs the hash with their own Private Key, and any recipient can verify its authenticity using the sender's Public Key. Correct Answer: B).`
  },
  {
    questionText: 'Which SQL JOIN returns all records from the left table (e.g., Customers) and the matched records from the right table (e.g., Loans), returning NULL on the right side when there is no match?',
    options: [
      'A) INNER JOIN',
      'B) LEFT OUTER JOIN (LEFT JOIN)',
      'C) CROSS JOIN',
      'D) RIGHT OUTER JOIN'
    ],
    correctAnswer: 'B) LEFT OUTER JOIN (LEFT JOIN)',
    solution: `A LEFT OUTER JOIN retains all rows from the left table regardless of whether a matching foreign key exists in the right table. Correct Answer: B).`
  },
  {
    questionText: 'In Cloud Computing architecture, which service model provides virtualized hardware, storage, and networking while the bank’s IT team manages the OS, middleware, and Core Banking application?',
    options: [
      'A) SaaS (Software as a Service)',
      'B) IaaS (Infrastructure as a Service)',
      'C)PaaS (Platform as a Service)',
      'D) FaaS (Function as a Service)'
    ],
    correctAnswer: 'B) IaaS (Infrastructure as a Service)',
    solution: `IaaS provides fundamental compute, network, and storage infrastructure on demand, leaving the operating system, database, and application stack under the customer's control. Correct Answer: B).`
  },
  {
    questionText: 'Which CPU register holds the memory address of the NEXT instruction to be fetched and executed from main memory?',
    options: [
      'A) Accumulator (AC)',
      'B) Program Counter (PC) / Instruction Pointer (IP)',
      'C) Instruction Register (IR)',
      'D) Status Flag Register'
    ],
    correctAnswer: 'B) Program Counter (PC) / Instruction Pointer (IP)',
    solution: `The Program Counter (PC) keeps track of execution flow by storing the memory address of the next instruction to be fetched, whereas the Instruction Register (IR) holds the instruction currently being decoded. Correct Answer: B).`
  },
  {
    questionText: 'What is "Phishing" in banking cybersecurity?',
    options: [
      'A) Overloading a server with ICMP echo requests',
      'B) Social engineering attack using deceptive emails/websites impersonating a legitimate bank to steal user credentials and OTPs',
      'C) Hardware disk sector corruption',
      'D) Defragmenting an SSD'
    ],
    correctAnswer: 'B) Social engineering attack using deceptive emails/websites impersonating a legitimate bank to steal user credentials and OTPs',
    solution: `Phishing is a social engineering attack where attackers masquerade as a trusted entity (such as a bank or MFS provider) to trick victims into revealing passwords, PINs, or OTPs. Correct Answer: B).`
  },
  {
    questionText: 'Which DNS record maps a domain name (e.g., www.bb.org.bd) to a 32-bit IPv4 address and a 128-bit IPv6 address respectively?',
    options: [
      'A) MX Record and TXT Record',
      'B) A Record and AAAA Record',
      'C) CNAME Record and PTR Record',
      'D) NS Record and SOA Record'
    ],
    correctAnswer: 'B) A Record and AAAA Record',
    solution: `In DNS, an 'A' (Address) record maps a hostname to a 32-bit IPv4 address, whereas an 'AAAA' (Quad-A) record maps a hostname to a 128-bit IPv6 address. Correct Answer: B).`
  }
];

// ============================================================================
// 5. SENIOR OFFICER (GENERAL) — DYNAMIC QUANTITATIVE APTITUDE GENERATOR (20 ITEMS/YEAR)
// ============================================================================
function buildSeniorOfficerMathMcqs(year: number, paperId: string, paperCode: string, startQ: number): NonItQuestionItem[] {
  const offset = year - 2010; // 0 to 16
  const items: RawMcqSeed[] = [];

  // 1. Difference between CI and SI for 2 years
  const principal1 = 20000 + offset * 2000;
  const rate1 = 10;
  const diff1 = Math.round(principal1 * (rate1 / 100) * (rate1 / 100));
  items.push({
    questionText: `If the difference between Compound Interest and Simple Interest on a certain sum of money for 2 years at ${rate1}% per annum is Tk. ${diff1.toLocaleString()}, what is the principal sum?`,
    options: [
      `A) Tk. ${(principal1 - 2000).toLocaleString()}`,
      `B) Tk. ${principal1.toLocaleString()}`,
      `C) Tk. ${(principal1 + 2000).toLocaleString()}`,
      `D) Tk. ${(principal1 + 4000).toLocaleString()}`
    ],
    correctAnswer: `B) Tk. ${principal1.toLocaleString()}`,
    solution: `For 2 years, the difference between Compound Interest (CI) and Simple Interest (SI) is:
CI - SI = P × (r / 100)²
=> ${diff1} = P × (10 / 100)² = P × 0.01
=> P = ${diff1} × 100 = Tk. ${principal1.toLocaleString()}.
Correct Answer: B) Tk. ${principal1.toLocaleString()}.`
  });

  // 2. Two Trains Running in Opposite Directions
  const lenA = 130 + offset * 5;
  const lenB = 170 + offset * 5;
  const sumLen = lenA + lenB; // 300 + 10*offset
  const relSpeedKmh = 90; // 50 km/h + 40 km/h = 90 km/h = 25 m/s
  const crossSec = sumLen / 25;
  items.push({
    questionText: `Two trains of lengths ${lenA} meters and ${lenB} meters are running in opposite directions on parallel tracks at speeds of 50 km/h and 40 km/h respectively. In how many seconds will they completely cross each other?`,
    options: [
      `A) ${(crossSec - 2).toFixed(1)} seconds`,
      `B) ${crossSec.toFixed(1)} seconds`,
      `C) ${(crossSec + 2).toFixed(1)} seconds`,
      `D) ${(crossSec + 4).toFixed(1)} seconds`
    ],
    correctAnswer: `B) ${crossSec.toFixed(1)} seconds`,
    solution: `Relative speed in opposite directions = 50 + 40 = 90 km/h = 90 × (5/18) = 25 m/s.
Total distance to cover = ${lenA} + ${lenB} = ${sumLen} meters.
Time taken = ${sumLen} / 25 = ${crossSec.toFixed(1)} seconds.
Correct Answer: B).`
  });

  // 3. Cistern with Inlet & Leak
  items.push({
    questionText: 'A pump can fill a water tank in 4 hours. Because of a leak at the bottom of the tank, it took 5 hours to fill the tank. In how many hours can the leak alone empty the completely full tank?',
    options: [
      'A) 15 hours',
      'B) 20 hours',
      'C) 24 hours',
      'D) 18 hours'
    ],
    correctAnswer: 'B) 20 hours',
    solution: `Pump's filling rate = 1/4 per hour.
Net filling rate with leak = 1/5 per hour.
Leak's emptying rate = 1/4 - 1/5 = (5 - 4)/20 = 1/20 per hour.
Therefore, the leak alone will empty the full tank in 20 hours.
Correct Answer: B) 20 hours.`
  });

  // 4. Algebraic Identity x^2 + 1/x^2 and x^4 + 1/x^4
  const m = 3 + (offset % 3); // 3, 4, or 5
  const sq = m * m - 2;
  const fourth = sq * sq - 2;
  items.push({
    questionText: `If x + (1/x) = ${m}, what is the value of x⁴ + (1/x⁴)?`,
    options: [
      `A) ${fourth - 4}`,
      `B) ${fourth}`,
      `C) ${sq * sq}`,
      `D) ${fourth + 2}`
    ],
    correctAnswer: `B) ${fourth}`,
    solution: `Step 1: x² + 1/x² = (x + 1/x)² - 2 = ${m}² - 2 = ${sq}.
Step 2: x⁴ + 1/x⁴ = (x² + 1/x²)² - 2 = ${sq}² - 2 = ${fourth}.
Correct Answer: B) ${fourth}.`
  });

  // 5. Work & Efficiency Ratio
  const bDays = 18 + (offset % 4) * 3; // 18, 21, 24, 27
  const togetherDays = (2 * bDays) / 3 / 1; // Wait: if A is twice as efficient as B, A+B = 3B, so time = bDays / 3
  items.push({
    questionText: `Officer A is twice as efficient as Officer B in auditing loan files. If Officer B alone takes ${bDays} days to complete an audit batch, in how many days can A and B working together finish the batch?`,
    options: [
      `A) ${bDays / 3 - 1} days`,
      `B) ${bDays / 3} days`,
      `C) ${bDays / 2} days`,
      `D) ${bDays / 3 + 2} days`
    ],
    correctAnswer: `B) ${bDays / 3} days`,
    solution: `Since A is twice as efficient as B, A's 1-day work = 2 × (B's 1-day work).
Combined 1-day work of (A + B) = 3 × (B's 1-day work) = 3 / ${bDays} = 1 / ${bDays / 3}.
Therefore, working together they finish the batch in ${bDays / 3} days.
Correct Answer: B) ${bDays / 3} days.`
  });

  // 6. Dishonest Dealer / False Weight or Successive Discounts
  items.push({
    questionText: 'What is the single equivalent discount rate for two successive commercial discounts of 20% and 10%?',
    options: [
      'A) 30%',
      'B) 28%',
      'C) 26%',
      'D) 25%'
    ],
    correctAnswer: 'B) 28%',
    solution: `Single equivalent discount = [a + b - (ab / 100)]% = [20 + 10 - (200 / 100)]% = 30 - 2 = 28%.
Correct Answer: B) 28%.`
  });

  // 7. Mixture Replacement (Repeated Dilution)
  items.push({
    questionText: 'A vessel contains 80 liters of pure acid. 8 liters of acid are drawn out and replaced with water. This process is repeated once more (total 2 times). How much pure acid is now left in the vessel?',
    options: [
      'A) 64.0 liters',
      'B) 64.8 liters',
      'C) 65.6 liters',
      'D) 62.4 liters'
    ],
    correctAnswer: 'B) 64.8 liters',
    solution: `Using the repeated replacement formula:
Remaining Pure Acid = Initial × [1 - (drawn / Initial)]^n
= 80 × [1 - (8 / 80)]² = 80 × (0.9)² = 80 × 0.81 = 64.8 liters.
Correct Answer: B) 64.8 liters.`
  });

  // 8. Geometry: Ladder Against Wall
  items.push({
    questionText: 'A 25-meter long ladder is placed against a vertical bank building wall such that the foot of the ladder is 7 meters away from the base of the wall. How high up the wall does the top of the ladder reach?',
    options: [
      'A) 20 meters',
      'B) 24 meters',
      'C) 22 meters',
      'D) 18 meters'
    ],
    correctAnswer: 'B) 24 meters',
    solution: `By the Pythagorean theorem:
Height² + Base² = Hypotenuse²
Height = √(25² - 7²) = √(625 - 49) = √576 = 24 meters.
Correct Answer: B) 24 meters.`
  });

  // 9. Quadratic Equation Sum & Product of Roots
  const sumR = 9 + (offset % 5);
  const prodR = 20 + (offset % 5);
  items.push({
    questionText: `If α and β are the roots of the quadratic equation x² - ${sumR}x + ${prodR} = 0, what is the value of (1/α) + (1/β)?`,
    options: [
      `A) ${prodR}/${sumR}`,
      `B) ${sumR}/${prodR}`,
      `C) -${sumR}/${prodR}`,
      `D) ${sumR + prodR}/${prodR}`
    ],
    correctAnswer: `B) ${sumR}/${prodR}`,
    solution: `For x² - ${sumR}x + ${prodR} = 0:
Sum of roots (α + β) = ${sumR}, and Product of roots (αβ) = ${prodR}.
Therefore, (1/α) + (1/β) = (α + β) / (αβ) = ${sumR}/${prodR}.
Correct Answer: B).`
  });

  // 10. Permutation of Word Letters
  items.push({
    questionText: 'In how many distinct ways can the letters of the word "BANKER" be arranged so that the vowels (A, E) always stay together?',
    options: [
      'A) 120',
      'B) 240',
      'C) 360',
      'D) 720'
    ],
    correctAnswer: 'B) 240',
    solution: `"BANKER" has 6 distinct letters: 4 consonants (B, N, K, R) and 2 vowels (A, E).
Treat the 2 vowels (AE) as a single unit: we have 4 + 1 = 5 units, which can be arranged in 5! = 120 ways.
The 2 vowels can be arranged internally in 2! = 2 ways.
Total arrangements = 120 × 2 = 240 ways.
Correct Answer: B) 240.`
  });

  // 11. Probability of At Least One Selection
  items.push({
    questionText: 'The probability that Applicant X passes the bank viva is 2/3, and the probability that Applicant Y passes the viva is 3/4. Assuming independent events, what is the probability that at least one of them passes?',
    options: [
      'A) 1/2',
      'B) 11/12',
      'C) 5/6',
      'D) 7/12'
    ],
    correctAnswer: 'B) 11/12',
    solution: `P(X fails) = 1 - 2/3 = 1/3; P(Y fails) = 1 - 3/4 = 1/4.
P(Both fail) = (1/3) × (1/4) = 1/12.
P(At least one passes) = 1 - P(Both fail) = 1 - 1/12 = 11/12.
Correct Answer: B) 11/12.`
  });

  // 12. Boat Round-Trip Time
  const boatU = 10;
  const streamV = 2;
  const distD = 24 + (offset % 3) * 12; // 24, 36, 48
  const totalHrs = distD / (boatU + streamV) + distD / (boatU - streamV);
  items.push({
    questionText: `A motorboat whose speed in still water is 10 km/h goes ${distD} km downstream and returns to the starting point in a river with a current of 2 km/h. What is the total time taken for the round trip?`,
    options: [
      `A) ${totalHrs - 1} hours`,
      `B) ${totalHrs} hours`,
      `C) ${totalHrs + 1.5} hours`,
      `D) ${totalHrs + 2} hours`
    ],
    correctAnswer: `B) ${totalHrs} hours`,
    solution: `Downstream speed = 10 + 2 = 12 km/h; Upstream speed = 10 - 2 = 8 km/h.
Time downstream = ${distD} / 12 = ${distD / 12} hours.
Time upstream = ${distD} / 8 = ${distD / 8} hours.
Total round-trip time = ${distD / 12} + ${distD / 8} = ${totalHrs} hours.
Correct Answer: B) ${totalHrs} hours.`
  });

  // 13. Arithmetic Progression Sum
  items.push({
    questionText: 'What is the sum of the first 30 natural numbers (1 + 2 + 3 + ... + 30)?',
    options: [
      'A) 450',
      'B) 465',
      'C) 480',
      'D) 435'
    ],
    correctAnswer: 'B) 465',
    solution: `Using the formula S_n = n(n + 1) / 2:
S_30 = (30 × 31) / 2 = 15 × 31 = 465.
Correct Answer: B) 465.`
  });

  // 14. Surds & Exponents
  items.push({
    questionText: 'If 2^(2x - 1) = 1 / 8^(x - 3), what is the value of x?',
    options: [
      'A) 1',
      'B) 2',
      'C) 3',
      'D) 4'
    ],
    correctAnswer: 'B) 2',
    solution: `1 / 8^(x - 3) = 8^(3 - x) = (2³)^(3 - x) = 2^(9 - 3x).
Equating exponents of base 2:
2x - 1 = 9 - 3x => 5x = 10 => x = 2.
Correct Answer: B) 2.`
  });

  // 15. Mensuration: Cylinder Volume / Circle Circumference
  items.push({
    questionText: 'If the circumference of a circular park is 88 meters (taking π = 22/7), what is the area of the park?',
    options: [
      'A) 584 sq. meters',
      'B) 616 sq. meters',
      'C) 640 sq. meters',
      'D) 528 sq. meters'
    ],
    correctAnswer: 'B) 616 sq. meters',
    solution: `Circumference 2πr = 88 => 2 × (22/7) × r = 88 => r = 14 meters.
Area = πr² = (22/7) × 14 × 14 = 22 × 28 = 616 sq. meters.
Correct Answer: B) 616 sq. meters.`
  });

  // 16. Salary Tax & Savings Percentage
  const netSave = 18000 + offset * 1000;
  const totalSal = netSave * 5; // 20% saved
  items.push({
    questionText: `A Senior Officer spends 50% of his monthly income on family maintenance, 20% on house rent, and 10% on tax and provident fund. If he saves the remaining Tk. ${netSave.toLocaleString()} each month, what is his gross monthly income?`,
    options: [
      `A) Tk. ${(totalSal - 5000).toLocaleString()}`,
      `B) Tk. ${totalSal.toLocaleString()}`,
      `C) Tk. ${(totalSal + 5000).toLocaleString()}`,
      `D) Tk. ${(totalSal + 10000).toLocaleString()}`
    ],
    correctAnswer: `B) Tk. ${totalSal.toLocaleString()}`,
    solution: `Total percentage spent = 50% + 20% + 10% = 80%.
Remaining savings = 100% - 80% = 20%.
Given 20% of Income = Tk. ${netSave.toLocaleString()} => Gross Monthly Income = ${netSave.toLocaleString()} × 5 = Tk. ${totalSal.toLocaleString()}.
Correct Answer: B).`
  });

  // 17. Analytical Seating / Ranking Puzzle
  const totalRow = 45 + (offset % 6);
  const rankTop = 14;
  const rankBot = totalRow - rankTop + 1;
  items.push({
    questionText: `In a merit list of ${totalRow} shortlisted Senior Officer candidates, Farhan ranks ${rankTop}th from the top. What is his rank from the bottom?`,
    options: [
      `A) ${rankBot - 1}th`,
      `B) ${rankBot}th`,
      `C) ${rankBot + 1}th`,
      `D) ${rankBot + 2}th`
    ],
    correctAnswer: `B) ${rankBot}th`,
    solution: `Rank from bottom = (Total candidates - Rank from top) + 1
= (${totalRow} - ${rankTop}) + 1 = ${rankBot}th.
Correct Answer: B) ${rankBot}th.`
  });

  // 18. Clock Angle Math
  items.push({
    questionText: 'What is the acute angle between the hour hand and the minute hand of a clock at 4:20 PM?',
    options: [
      'A) 0°',
      'B) 10°',
      'C) 15°',
      'D) 20°'
    ],
    correctAnswer: 'B) 10°',
    solution: `Angle formula = |30H - 5.5M|
At H = 4, M = 20:
Angle = |30(4) - 5.5(20)| = |120 - 110| = 10°.
Correct Answer: B) 10°.`
  });

  // 19. Cost Price vs Selling Price Ratio
  items.push({
    questionText: 'If the cost price of 25 treasury bonds is equal to the selling price of 20 treasury bonds, what is the profit percentage?',
    options: [
      'A) 20%',
      'B) 25%',
      'C) 30%',
      'D) 15%'
    ],
    correctAnswer: 'B) 25%',
    solution: `25 × CP = 20 × SP => SP / CP = 25 / 20 = 5 / 4.
Profit % = [(5 - 4) / 4] × 100% = 25%.
Correct Answer: B) 25%.`
  });

  // 20. Coordinate Geometry Distance
  items.push({
    questionText: 'What is the straight-line distance between the points A(-2, 3) and B(4, -5) in the Cartesian plane?',
    options: [
      'A) 8 units',
      'B) 10 units',
      'C) 12 units',
      'D) 14 units'
    ],
    correctAnswer: 'B) 10 units',
    solution: `Distance d = √[(x₂ - x₁)² + (y₂ - y₁)²]
= √[(4 - (-2))² + (-5 - 3)²] = √[6² + (-8)²] = √(36 + 64) = √100 = 10 units.
Correct Answer: B) 10 units.`
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
// 6. SENIOR OFFICER (GENERAL) — FULL 12-QUESTION WRITTEN PAPER BUILDER (2010–2026)
// ============================================================================
interface WrittenSeedOverride {
  englishFocusTopic: string;
  englishFocusSolution: string;
  banglaFocusTopic: string;
  banglaFocusSolution: string;
  customMath1Question: string;
  customMath1Solution: string;
  argumentativeTopic: string;
  argumentativeSolution: string;
  engToBanPassage: string;
  engToBanSolution: string;
  banToEngPassage: string;
  banToEngSolution: string;
  bankingCaseQuestion: string;
  bankingCaseSolution: string;
}

const comprehensionPassagesPool = [
  {
    passage: `Read the following passage carefully and answer the 5 analytical questions below:
"Central banks across emerging markets face a delicate policy trilemma when domestic inflation is driven simultaneously by global supply-chain shocks, currency depreciation, and fiscal deficits. Traditional monetary tightening—executed through successive hikes in the policy repo rate and stricter open market operations—primarily targets aggregate demand by raising the cost of commercial credit. However, in economies where food and imported energy constitute a major share of the consumer basket, interest rate hikes alone may prove insufficient unless complemented by exchange rate flexibility, prudent fiscal consolidation, and structural reforms in domestic agricultural supply chains. Furthermore, when commercial banks burden their balance sheets with high non-performing loans (NPLs), the monetary transmission mechanism weakens significantly, as distressed banks become risk-averse and reluctant to pass policy signals efficiently to productive small and medium enterprises (SMEs)."`,
    qAndA: `Questions:
(a) Why is traditional monetary tightening alone often insufficient to curb inflation in emerging economies? (4 Marks)
(b) How does a high ratio of Non-Performing Loans (NPLs) impair the monetary transmission mechanism? (4 Marks)
(c) What complementary fiscal and structural measures must accompany monetary policy to stabilize prices? (4 Marks)
(d) Explain the phrase "policy trilemma" in the context of the passage. (4 Marks)
(e) Suggest a suitable title for the passage and summarize its core message in two sentences. (4 Marks)

Model Solutions:
(a) Traditional monetary tightening primarily restricts aggregate demand by raising borrowing costs, which cannot directly resolve supply-side bottlenecks such as imported energy costs, currency depreciation, or food market syndication.
(b) High NPLs erode bank capital and liquidity, making commercial banks risk-averse and unresponsive to central bank rate signals, thereby starving productive SMEs of credit.
(c) Monetary tightening must be supported by market-aligned exchange rate flexibility, fiscal deficit reduction, and agricultural supply-chain modernization.
(d) The "policy trilemma" refers to the simultaneous challenge of controlling inflation, stabilizing the exchange rate, and sustaining economic growth without triggering credit stagnation.
(e) Title: "Limits of Monetary Transmission and Inflation Management in Emerging Markets."
Summary: Controlling supply-driven inflation requires a coordinated blend of monetary discipline, fiscal prudence, and supply-chain reform. Without resolving banking sector NPLs, central bank policy rates cannot effectively transmit across the real economy.`
  },
  {
    passage: `Read the following passage carefully and answer the 5 analytical questions below:
"Financial inclusion has evolved far beyond the mere opening of basic no-frills bank accounts. In the era of interoperable digital payment ecosystems, mobile financial services (MFS), and agent banking networks, true inclusion is measured by whether unbanked rural households, women entrepreneurs, and cottage micro-enterprises can access affordable working capital, micro-insurance, and formal remittance channels. While digital onboarding via electronic Know Your Customer (e-KYC) has dramatically lowered customer acquisition costs for commercial banks, it has also introduced complex operational and cybersecurity risks. Digital fraud, social engineering, and algorithmic bias in automated credit scoring require robust regulatory guardrails, real-time transaction monitoring, and widespread financial literacy campaigns so that technological innovation strengthens public trust rather than widening the digital divide."`,
    qAndA: `Questions:
(a) How has the definition of "financial inclusion" evolved in the modern banking era? (4 Marks)
(b) What role has e-KYC played in expanding banking services to rural and underserved populations? (4 Marks)
(c) Identify the major risks associated with rapid digital banking expansion mentioned in the passage. (4 Marks)
(d) Why is financial literacy essential alongside regulatory guardrails in digital finance? (4 Marks)
(e) Provide an appropriate title for the passage and write a brief thematic synthesis. (4 Marks)

Model Solutions:
(a) Financial inclusion has shifted from simply opening basic deposit accounts to ensuring active access to affordable credit, interoperable payments, micro-insurance, and formal remittances for marginalized groups.
(b) Electronic Know Your Customer (e-KYC) has streamlined identity verification and significantly reduced customer acquisition costs, enabling rapid onboarding via MFS and agent banking outlets.
(c) Key risks include cybersecurity breaches, digital payment fraud, social engineering (phishing/OTP theft), and potential exclusion from automated credit scoring.
(d) Regulatory compliance alone cannot prevent end-user social engineering; financial literacy empowers customers to safeguard their credentials and use digital tools responsibly.
(e) Title: "Digital Financial Inclusion: Balancing Innovation, Access, and Cybersecurity."
Synthesis: Digital platforms like MFS and agent banking have transformed rural financial access through low-cost e-KYC onboarding. However, sustainable inclusion requires strong cybersecurity governance and consumer financial literacy to protect vulnerable users.`
  },
  {
    passage: `Read the following passage carefully and answer the 5 analytical questions below:
"Climate change poses both physical risks and transition risks to the stability of the global financial system. For low-lying deltaic economies like Bangladesh, physical risks manifest as extreme weather events, salinity intrusion, and river erosion that destroy agricultural collateral and disrupt industrial supply chains, directly increasing credit default probabilities for commercial banks. Transition risks arise as global export markets enforce stricter carbon border adjustments and environmental, social, and governance (ESG) compliance standards on manufacturing sectors such as ready-made garments (RMG) and leather. By integrating Environmental and Social Risk Management (ESRM) into credit appraisal and channeling central bank refinance schemes toward renewable energy and effluent treatment plants (ETPs), banks can transform climate vulnerability into a catalyst for green industrial modernization."`,
    qAndA: `Questions:
(a) Distinguish between "physical risks" and "transition risks" of climate change for the banking sector. (4 Marks)
(b) How do environmental disasters directly affect the asset quality of commercial banks? (4 Marks)
(c) Why is ESG compliance critical for Bangladesh’s export-oriented industries? (4 Marks)
(d) How can commercial banks mitigate climate-related credit risks according to the passage? (4 Marks)
(e) Give a suitable title to the passage and state its central thesis in your own words. (4 Marks)

Model Solutions:
(a) Physical risks involve direct damage from floods, cyclones, and salinity to physical assets and crops, whereas transition risks stem from global regulatory shifts toward low-carbon and ESG-compliant production.
(b) Natural disasters destroy borrowers' productive assets, inventories, and mortgaged collateral, impairing their repayment capacity and increasing bank Non-Performing Loans (NPLs).
(c) Global buyers and markets increasingly mandate carbon footprint disclosures and ESG compliance, making green manufacturing essential to retain export competitiveness in RMG and leather.
(d) Banks can mitigate risks by embedding ESRM ratings in loan appraisal and utilizing green refinance facilities for solar energy, energy efficiency, and ETPs.
(e) Title: "Climate Risk and Sustainable Finance in Deltaic Economies."
Central Thesis: Climate change directly impacts bank solvency through physical asset destruction and global green trade regulations. Proactive integration of ESRM and green financing enables banks to safeguard asset quality while driving sustainable industrial growth.`
  }
];

function buildFullSeniorOfficerWrittenQuestions(
  year: number,
  writtenMarks: number,
  seed: WrittenSeedOverride
): Array<{
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
}> {
  const scale = writtenMarks === 100 ? 0.5 : 1;
  const m = (base200: number) => Math.round(base200 * scale);
  const offset = year - 2010; // 0 to 16

  // Dynamic Math 2: Simple vs Compound Interest & Partnership Capital
  const pLoan = 100000 + offset * 10000;
  const siTwoYr = pLoan * 0.10 * 2;
  const ciHalfYr = Number((pLoan * (Math.pow(1.05, 4) - 1)).toFixed(2));
  const netGain = Number((ciHalfYr - siTwoYr).toFixed(2));

  // Dynamic Math 3: Boats & Streams + Train Overtaking
  const stillSpeed = 12 + (offset % 4) * 2; // 12, 14, 16, 18
  const streamSpeed = 4;
  const riverDist = ((stillSpeed + streamSpeed) * (stillSpeed - streamSpeed)) / 2;
  const totalRiverHrs = Number(
    (riverDist / (stillSpeed + streamSpeed) + riverDist / (stillSpeed - streamSpeed)).toFixed(2)
  );

  // Dynamic Math 4: Mixture & Alligation + Profit/Loss Markup
  const totalSugarKg = 800 + offset * 50;
  const qtyAt18 = Math.round((3 / 5) * totalSugarKg);
  const qtyAt8 = totalSugarKg - qtyAt18;

  // Dynamic Math 5: Mensuration (Rectangular Lawn with Path)
  const lawnLen = 50 + (offset % 5) * 10;
  const lawnWid = 30 + (offset % 5) * 10;
  const pathW = 4;
  const pathArea = (lawnLen + 2 * pathW) * (lawnWid + 2 * pathW) - lawnLen * lawnWid;
  const turfCost = pathArea * 25;

  // Dynamic Math 6: Survey Venn Diagram + Probability
  const totalCust = 500 + offset * 20;
  const useMfs = Math.round(totalCust * 0.65);
  const useIb = Math.round(totalCust * 0.55);
  const useNone = Math.round(totalCust * 0.10);
  const useAtLeastOne = totalCust - useNone;
  const useBoth = useMfs + useIb - useAtLeastOne;
  const useMfsOnly = useMfs - useBoth;

  const comp = comprehensionPassagesPool[offset % comprehensionPassagesPool.length];

  return [
    // Written-01: English Focus Writing (30 / 15 Marks)
    {
      questionNo: 'Written-01',
      subject: 'English Language & Focus Writing',
      marks: m(30),
      questionText: `[Focus Writing in English — ${m(30)} Marks]\nWrite a comprehensive analytical essay with data, policy arguments, and institutional recommendations on:\n"${seed.englishFocusTopic}"`,
      solution: seed.englishFocusSolution
    },

    // Written-02: Bangla Focus Writing (30 / 15 Marks)
    {
      questionNo: 'Written-02',
      subject: 'Bangla Language & Literature',
      marks: m(30),
      questionText: `[ফোকাস রাইটিং (বাংলা) — ${m(30)} নম্বর]\nতথ্য-উপাত্ত, অর্থনৈতিক বিশ্লেষণ এবং নীতিগত সুপারিশসহ একটি পূর্ণাঙ্গ বিশ্লেষণাত্মক প্রবন্ধ লিখুন:\n"${seed.banglaFocusTopic}"`,
      solution: seed.banglaFocusSolution
    },

    // Written-03: Written Math 1 — Pipes, Cisterns & Work-Time (10 / 5 Marks)
    {
      questionNo: 'Written-03',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: m(10),
      questionText: `[Written Mathematics Problem 1 — Work, Time & Cisterns (${m(10)} Marks)]\n${seed.customMath1Question}`,
      solution: seed.customMath1Solution
    },

    // Written-04: Written Math 2 — Simple & Compound Interest Arbitrage (10 / 5 Marks)
    {
      questionNo: 'Written-04',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: m(10),
      questionText: `[Written Mathematics Problem 2 — Simple vs. Compound Interest (${m(10)} Marks)]\nAn investor borrows Tk. ${pLoan.toLocaleString()} from a bank at 10% simple interest per annum for 2 years. He immediately invests the entire sum in a corporate bond paying 10% compound interest per annum, compounded half-yearly. Calculate the investor's net financial gain after 2 years after repaying the bank loan.`,
      solution: `Step-by-Step Mathematical Solution:
1. Calculation of Simple Interest Payable to the Bank:
   Principal (P) = Tk. ${pLoan.toLocaleString()}
   Rate of Simple Interest (r) = 10% p.a., Time (t) = 2 years
   Simple Interest (SI) = (P × r × t) / 100
   = (${pLoan.toLocaleString()} × 10 × 2) / 100 = Tk. ${siTwoYr.toLocaleString()}.

2. Calculation of Compound Interest Earned (Compounded Half-Yearly):
   Half-yearly interest rate = 10% / 2 = 5% = 0.05 per half-year
   Total number of compounding periods in 2 years (n) = 2 × 2 = 4 half-years
   Compound Amount (A) = P × (1 + 0.05)⁴
   = ${pLoan.toLocaleString()} × 1.21550625 = Tk. ${(pLoan + ciHalfYr).toLocaleString()}
   Compound Interest (CI) = A - P = Tk. ${ciHalfYr.toLocaleString()}.

3. Net Financial Gain at the End of 2 Years:
   Net Gain = CI - SI = ${ciHalfYr.toLocaleString()} - ${siTwoYr.toLocaleString()} = Tk. ${netGain.toLocaleString()}.
   Answer: Tk. ${netGain.toLocaleString()}.`
    },

    // Written-05: Written Math 3 — Boats & Streams Round Trip & Relative Speed (10 / 5 Marks)
    {
      questionNo: 'Written-05',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: m(10),
      questionText: `[Written Mathematics Problem 3 — Boats & Streams (${m(10)} Marks)]\nThe speed of a motorboat in still water is ${stillSpeed} km/h and the speed of the river current is ${streamSpeed} km/h. The boat travels from Port A to Port B downstream and returns to Port A upstream in a total of ${totalRiverHrs} hours. Find the distance between Port A and Port B, and the average speed of the boat for the entire round trip.`,
      solution: `Step-by-Step Mathematical Solution:
1. Let the distance between Port A and Port B be x km.
2. Downstream speed (with the current) = u + v = ${stillSpeed} + ${streamSpeed} = ${stillSpeed + streamSpeed} km/h.
3. Upstream speed (against the current) = u - v = ${stillSpeed} - ${streamSpeed} = ${stillSpeed - streamSpeed} km/h.
4. According to the problem, Total Time = Downstream Time + Upstream Time:
   x / ${stillSpeed + streamSpeed} + x / ${stillSpeed - streamSpeed} = ${totalRiverHrs}
   => x × [(${stillSpeed - streamSpeed} + ${stillSpeed + streamSpeed}) / (${(stillSpeed + streamSpeed) * (stillSpeed - streamSpeed)})] = ${totalRiverHrs}
   => x × [${2 * stillSpeed} / ${(stillSpeed + streamSpeed) * (stillSpeed - streamSpeed)}] = ${totalRiverHrs}
   => x = ${riverDist} km.
5. Average Speed for the entire round trip:
   Total Distance / Total Time = (2 × ${riverDist}) / ${totalRiverHrs} = ${Number(((2 * riverDist) / totalRiverHrs).toFixed(2))} km/h.
   Answer: Distance = ${riverDist} km; Average Speed = ${Number(((stillSpeed * stillSpeed - streamSpeed * streamSpeed) / stillSpeed).toFixed(2))} km/h.`
    },

    // Written-06: Written Math 4 — Rule of Alligation & Profit/Loss (10 / 5 Marks)
    {
      questionNo: 'Written-06',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: m(10),
      questionText: `[Written Mathematics Problem 4 — Mixture, Alligation & Profit-Loss (${m(10)} Marks)]\nA wholesale merchant has ${totalSugarKg} kg of sugar. He sells a part of it at 8% profit and the remaining part at 18% profit. On the whole consignment, he makes an overall profit of 14%. Find the exact quantity of sugar sold at 8% profit and at 18% profit using both algebraic equations and the Rule of Alligation.`,
      solution: `Step-by-Step Mathematical Solution:
Method 1 (Algebraic Equation):
1. Let the quantity of sugar sold at 18% profit be x kg.
   Then the quantity sold at 8% profit is (${totalSugarKg} - x) kg.
2. Equating total profit percentage:
   0.18x + 0.08(${totalSugarKg} - x) = 0.14 × ${totalSugarKg}
   => 0.18x + ${0.08 * totalSugarKg} - 0.08x = ${0.14 * totalSugarKg}
   => 0.10x = ${(0.14 - 0.08) * totalSugarKg}
   => x = ${qtyAt18} kg (sold at 18% profit).
3. Quantity sold at 8% profit = ${totalSugarKg} - ${qtyAt18} = ${qtyAt8} kg.

Method 2 (Rule of Alligation):
1. Cheaper profit rate = 8%, Dearer profit rate = 18%, Mean profit rate = 14%.
2. Ratio of (Quantity at 8%) : (Quantity at 18%) = (18 - 14) : (14 - 8) = 4 : 6 = 2 : 3.
3. Quantity at 8% = (2/5) × ${totalSugarKg} = ${qtyAt8} kg; Quantity at 18% = (3/5) × ${totalSugarKg} = ${qtyAt18} kg.
   Answer: ${qtyAt8} kg at 8% profit and ${qtyAt18} kg at 18% profit.`
    },

    // Written-07: Written Math 5 — Mensuration & Geometry (10 / 5 Marks)
    {
      questionNo: 'Written-07',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: m(10),
      questionText: `[Written Mathematics Problem 5 — Mensuration & Geometry (${m(10)} Marks)]\nA rectangular bank head-office courtyard has a length of ${lawnLen} meters and a breadth of ${lawnWid} meters. It is surrounded externally by a uniform pedestrian walkway of width ${pathW} meters on all four sides. Find: (i) the area of the pedestrian walkway, and (ii) the total cost of paving the walkway with tiles at Tk. 25 per square meter.`,
      solution: `Step-by-Step Mathematical Solution:
1. Inner dimensions of the courtyard:
   Length (L) = ${lawnLen} m, Breadth (B) = ${lawnWid} m
   Inner Area = L × B = ${lawnLen} × ${lawnWid} = ${(lawnLen * lawnWid).toLocaleString()} sq. meters.

2. Outer dimensions including the ${pathW}-meter uniform walkway on both sides:
   Outer Length (L') = ${lawnLen} + 2(${pathW}) = ${lawnLen + 2 * pathW} m
   Outer Breadth (B') = ${lawnWid} + 2(${pathW}) = ${lawnWid + 2 * pathW} m
   Outer Area = L' × B' = ${lawnLen + 2 * pathW} × ${lawnWid + 2 * pathW} = ${((lawnLen + 2 * pathW) * (lawnWid + 2 * pathW)).toLocaleString()} sq. meters.

3. Area of the Pedestrian Walkway:
   Walkway Area = Outer Area - Inner Area
   = ${((lawnLen + 2 * pathW) * (lawnWid + 2 * pathW)).toLocaleString()} - ${(lawnLen * lawnWid).toLocaleString()} = ${pathArea.toLocaleString()} sq. meters.

4. Total Cost of Paving at Tk. 25 per sq. meter:
   Total Cost = ${pathArea.toLocaleString()} × 25 = Tk. ${turfCost.toLocaleString()}.
   Answer: (i) ${pathArea.toLocaleString()} sq. m; (ii) Tk. ${turfCost.toLocaleString()}.`
    },

    // Written-08: Written Math 6 — Set Theory Venn Diagram & Probability (10 / 5 Marks)
    {
      questionNo: 'Written-08',
      subject: 'Mathematics & Quantitative Aptitude',
      marks: m(10),
      questionText: `[Written Mathematics Problem 6 — Set Theory & Probability (${m(10)} Marks)]\nIn a survey of ${totalCust} retail banking customers, ${useMfs} customers use Mobile Financial Services (MFS), ${useIb} customers use Internet Banking (i-Banking), and ${useNone} customers use neither of the two digital channels. Find: (i) how many customers use both MFS and Internet Banking, (ii) how many customers use MFS only, and (iii) the probability that a randomly chosen customer from the survey uses both services.`,
      solution: `Step-by-Step Mathematical Solution:
1. Let U be the universal set of surveyed customers, M be the set of MFS users, and I be the set of Internet Banking users.
   Given: n(U) = ${totalCust}, n(M) = ${useMfs}, n(I) = ${useIb}, and n(M ∪ I)' = ${useNone}.

2. Customers using at least one digital service:
   n(M ∪ I) = n(U) - n(M ∪ I)' = ${totalCust} - ${useNone} = ${useAtLeastOne}.

3. Using the Principle of Inclusion-Exclusion:
   n(M ∪ I) = n(M) + n(I) - n(M ∩ I)
   => ${useAtLeastOne} = ${useMfs} + ${useIb} - n(M ∩ I)
   => n(M ∩ I) = ${useMfs + useIb} - ${useAtLeastOne} = ${useBoth} customers (use both services).

4. Customers using MFS only:
   n(M only) = n(M) - n(M ∩ I) = ${useMfs} - ${useBoth} = ${useMfsOnly} customers.

5. Probability of selecting a customer who uses both services:
   P(M ∩ I) = n(M ∩ I) / n(U) = ${useBoth} / ${totalCust} = ${(useBoth / totalCust).toFixed(2)} (or ${Math.round((useBoth / totalCust) * 100)}%).
   Answer: (i) ${useBoth}; (ii) ${useMfsOnly}; (iii) ${(useBoth / totalCust).toFixed(2)}.`
    },

    // Written-09: Reading Comprehension Passage with 5 Questions (20 / 10 Marks)
    {
      questionNo: 'Written-09',
      subject: 'English Language & Focus Writing',
      marks: m(20),
      questionText: `[Reading Comprehension — ${m(20)} Marks (5 Questions × ${m(4)} Marks)]\n${comp.passage}`,
      solution: comp.qAndA
    },

    // Written-10: Argumentative Writing / Critical Policy Analysis (20 / 10 Marks)
    {
      questionNo: 'Written-10',
      subject: 'English Language & Focus Writing',
      marks: m(20),
      questionText: `[Argumentative & Critical Policy Writing — ${m(20)} Marks]\n${seed.argumentativeTopic}`,
      solution: seed.argumentativeSolution
    },

    // Written-11: English to Bangla Translation Passage (15 / 8 Marks)
    {
      questionNo: 'Written-11',
      subject: 'Translation (English ↔ Bangla)',
      marks: writtenMarks === 100 ? 8 : 15,
      questionText: `[English to Bangla Translation — ${writtenMarks === 100 ? 8 : 15} Marks]\nTranslate the following passage into standard, idiomatic Bangla:\n"${seed.engToBanPassage}"`,
      solution: `Model Bangla Translation:\n"${seed.engToBanSolution}"`
    },

    // Written-12: Bangla to English Translation + Banking/Accounting Case (25 / 12 Marks)
    {
      questionNo: 'Written-12',
      subject: 'Analytical Ability & Accounting',
      marks: writtenMarks === 100 ? 12 : 25,
      questionText: `[Part I: Bangla to English Translation & Part II: Banking / Accounting Case — ${writtenMarks === 100 ? 12 : 25} Marks]\n(a) Translate into formal English:\n"${seed.banToEngPassage}"\n\n(b) Banking & Accounting Analytical Problem:\n${seed.bankingCaseQuestion}`,
      solution: `Part (a) Model English Translation:\n"${seed.banToEngSolution}"\n\nPart (b) Banking & Accounting Solution:\n${seed.bankingCaseSolution}`
    }
  ];
}

// ============================================================================
// BUILD FULL 100-QUESTION PRELIMINARY MCQ SET + 12-QUESTION WRITTEN PAPER FOR SENIOR OFFICER
// ============================================================================
function buildFull100McqSeniorOfficerPaper(config: {
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
  writtenSeed: WrittenSeedOverride;
}): NonItExamPaper {
  const { paperId, questionPaperCode, year } = config;
  const shift = year - 2010;
  const questions: NonItQuestionItem[] = [];

  // 1. MCQ-001 to MCQ-025: Bangla Language & Literature (25 Questions)
  for (let i = 0; i < 25; i++) {
    const qNum = i + 1;
    const seed = soBanglaPool[(i + shift) % soBanglaPool.length];
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
    const seed = soEnglishPool[(i + shift) % soEnglishPool.length];
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
  const mathMcqs = buildSeniorOfficerMathMcqs(year, paperId, questionPaperCode, 51);
  questions.push(...mathMcqs);

  // 4. MCQ-071 to MCQ-090: General Knowledge & Banking Economy (20 Questions)
  for (let i = 0; i < 20; i++) {
    const qNum = 71 + i;
    const seed = soGkPool[(i + shift) % soGkPool.length];
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
    const seed = soIctPool[(i + shift) % soIctPool.length];
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

  // 6. Part B: Full 12-Question Written Examination Set under the same Paper ID
  const fullWrittenList = buildFullSeniorOfficerWrittenQuestions(
    config.year,
    config.writtenMarks,
    config.writtenSeed
  );
  fullWrittenList.forEach((wq, idx) => {
    questions.push({
      id: `${paperId}-wrt-${idx + 1}`,
      paperId,
      questionPaperCode,
      questionNo: wq.questionNo,
      questionType: 'Written',
      subject: wq.subject,
      marks: wq.marks,
      questionText: wq.questionText,
      solution: wq.solution
    });
  });

  return {
    paperId: config.paperId,
    questionPaperCode: config.questionPaperCode,
    title: config.title,
    category: 'Senior Officer (General)',
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
// COMPLETE 2010–2026 SENIOR OFFICER (GENERAL) QUESTION PAPER ARCHIVE
// EACH SET = 100 PRELIMINARY MCQs (100 MARKS) + 12 WRITTEN QUESTIONS (200/100 MARKS)
// ============================================================================
export const seniorOfficerGeneralPapers2010To2026: NonItExamPaper[] = [
  // 2026 - Combined 10 Banks Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2026',
    questionPaperCode: 'BSCS-SO-GEN-2026 (Job ID: 10220)',
    title: 'Combined 10 Banks Senior Officer (General) Full 100-MCQ & 12-Written Exam 2026',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB & 4 Other Govt Banks (BSCS)',
    examTaker: 'BIBM / Faculty of Business Studies, DU',
    year: 2026,
    examDate: 'January 2026',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper (Written-01 to Written-12) under Job ID 10220.',
    writtenSeed: {
      englishFocusTopic: 'Non-Performing Loans (NPLs), Asset Quality Review (AQR), and Corporate Governance Reform in the Banking Sector of Bangladesh: Challenges and Policy Roadmap.',
      englishFocusSolution: `Model Focus Writing Outline & Essay (30 Marks):
1. Executive Introduction: Definition of Non-Performing Loans (Substandard, Doubtful, and Bad/Loss under international Basel III / IMF 90-day past-due norms) and current NPL trajectory in state-owned and private commercial banks.
2. Structural Root Causes: Weak credit risk grading (CRG), related-party lending, inadequate collateral valuation, willful default culture, and prolonged litigation in Artha Rin Adalat.
3. Macroeconomic Consequences: Erosion of Capital to Risk-Weighted Assets Ratio (CRAR), high provisioning burden, reduced credit availability for productive SMEs, and wider interest rate spreads.
4. Regulatory & Policy Roadmap:
   - Strict enforcement of Bangladesh Bank's Prompt Corrective Action (PCA) framework and independent Asset Quality Reviews (AQR).
   - Restructuring bank boards with qualified independent directors and separating ownership from management.
   - Establishing specialized Asset Management Companies (AMCs) and fast-track commercial debt recovery tribunals.`,
      banglaFocusTopic: 'ব্যাংকিং খাতে সুশাসন প্রতিষ্ঠা, খেলাপি ঋণ হ্রাস এবং আমানতকারীদের আস্থা সুরক্ষায় কেন্দ্রীয় ব্যাংকের ভূমিকা।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. ভূমিকা: দেশের অর্থনৈতিক প্রবৃদ্ধি ও আর্থিক স্থিতিশীলতার মূল ভিত্তি হলো একটি সুশৃঙ্খল ও সুশাসিত ব্যাংকিং খাত।
২. খেলাপি ঋণের কারণ ও প্রভাব: যথাযথ যাচাই-বাছাই ছাড়া ঋণ অনুমোদন, ইচ্ছাকৃত খেলাপি প্রবণতা এবং জামানত অতিমূল্যায়নের ফলে ব্যাংকের মূলধন ঘাটতি ও তারল্য সংকট সৃষ্টি হয়।
৩. কেন্দ্রীয় ব্যাংকের সংস্কার পদক্ষেপ: প্রম্পট কারেক্টিভ অ্যাকশন (PCA) ফ্রেমওয়ার্ক বাস্তবায়ন, স্বতন্ত্র পরিচালক নিয়োগ, একক গ্রাহক ঋণসীমা (Single Borrower Exposure Limit) কঠোরভাবে পরিপালন এবং ফরেনসিক অডিট পরিচালনা।
৪. উপসংহার: স্বচ্ছ ঋণ সংস্কৃতি ও জবাবদিহিতা নিশ্চিত করা গেলে আমানতকারীদের আস্থা ও বিনিয়োগ প্রবাহ টেকসই হবে।`,
      customMath1Question: 'Two pipes A and B can fill a reservoir in 24 minutes and 32 minutes respectively. Both pipes are opened together, but after how many minutes should pipe B be closed so that the reservoir is completely full in 18 minutes?',
      customMath1Solution: `Step-by-Step Solution:
1. Pipe A runs continuously for the entire 18 minutes.
   Part of reservoir filled by Pipe A in 18 minutes = 18 / 24 = 3/4.
2. Remaining part of the reservoir to be filled by Pipe B = 1 - 3/4 = 1/4.
3. Since Pipe B can fill the whole reservoir in 32 minutes, time taken by Pipe B to fill 1/4 of the reservoir:
   Time = (1/4) × 32 = 8 minutes.
   Answer: Pipe B should be closed after 8 minutes.`,
      argumentativeTopic: '"Raising the policy interest rate (Repo Rate) is a necessary condition, but not a sufficient one, for taming supply-side food inflation in Bangladesh." — Critically evaluate this statement with empirical arguments.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
1. Thesis Statement: While monetary tightening via Repo rate hikes curbs excess credit demand and anchors inflation expectations, food inflation in Bangladesh is heavily influenced by supply-chain distortions, import costs, and market intermediaries.
2. Role of Monetary Policy (Necessary Condition): Raising the Repo rate increases commercial lending rates, restrains speculative inventory hoarding, and supports exchange rate stability.
3. Supply-Side Realities (Why Not Sufficient Alone): Agricultural middlemen syndicates, transport extortion, cold-storage bottlenecks, and tariff structures on essential commodities require fiscal and administrative coordination alongside monetary discipline.`,
      engToBanPassage: 'Monetary policy alone cannot contain food and supply-side inflation unless structural bottlenecks in agricultural supply chains, import letter of credit (LC) settlement, and market competition are addressed simultaneously. A resilient financial sector requires transparent corporate governance, rigorous credit risk appraisal, and strict enforcement of capital adequacy standards.',
      engToBanSolution: 'কৃষি সরবরাহ শৃঙ্খলের কাঠামোগত প্রতিবন্ধকতা, আমদানি ঋণপত্র (এলসি) নিষ্পত্তি এবং বাজার প্রতিযোগিতার সমস্যাগুলো একই সাথে সমাধান করা না হলে কেবল মুদ্রানীতির মাধ্যমে খাদ্য ও সরবরাহ-জনিত মূল্যস্ফীতি নিয়ন্ত্রণ করা সম্ভব নয়। একটি টেকসই আর্থিক খাতের জন্য স্বচ্ছ কর্পোরেট সুশাসন, কঠোর ঋণ ঝুঁকি মূল্যায়ন এবং মূলধন পর্যাপ্ততা মানদণ্ডের কঠোর প্রয়োগ অপরিহার্য।',
      banToEngPassage: 'বৈদেশিক মুদ্রার রিজার্ভ স্থিতিশীল রাখতে বৈধ ব্যাংকিং চ্যানেলে প্রবাসী আয় প্রবাহ বৃদ্ধি এবং রপ্তানি খাতের বহুমুখীকরণ অত্যন্ত জরুরি। তৈরি পোশাক শিল্পের পাশাপাশি তথ্যপ্রযুক্তি, ওষুধ, চামড়া ও কৃষি প্রক্রিয়াজাতকরণ শিল্পে রপ্তানি সম্প্রসারিত হলে বৈদেশিক বাণিজ্যের ভারসাম্য আরও সুদৃঢ় হবে।',
      banToEngSolution: 'To stabilize foreign exchange reserves, increasing remittance inflows through formal banking channels and diversifying the export basket are imperative. Alongside the ready-made garment sector, expanding exports in information technology, pharmaceuticals, leather, and agro-processing industries will further strengthen the balance of trade.',
      bankingCaseQuestion: 'Define the components of CAMELS rating used by Bangladesh Bank for off-site and on-site bank supervision, and explain how Prompt Corrective Action (PCA) triggers restrictions on undercapitalized banks.',
      bankingCaseSolution: `1. CAMELS Components:
   - C: Capital Adequacy (CRAR >= 12.5% with CCB under Basel III)
   - A: Asset Quality (Gross & Net NPL ratios, provisioning coverage)
   - M: Management Soundness (Corporate governance, internal audit, cost-to-income ratio)
   - E: Earnings & Profitability (ROA, ROE, Net Interest Margin)
   - L: Liquidity (CRR, SLR, Advance-to-Deposit Ratio, LCR & NSFR)
   - S: Sensitivity to Market Risk (Foreign exchange risk, interest rate risk, equity risk).
2. PCA Triggers: When a bank breaches CRAR or Net NPL thresholds, Bangladesh Bank restricts dividend distribution, caps high-risk lending growth, and mandates time-bound capital restoration plans.`
    }
  }),

  // 2026 - Private Bank Senior Officer / MTO (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-prv-2026',
    questionPaperCode: 'DBBL-MTO-SO-2026',
    title: 'Dutch-Bangla Bank & Eastern Bank Senior Officer / MTO (General) Full 100-MCQ & 12-Written Exam 2026',
    orgType: 'Private Bank',
    organizationName: 'Dutch-Bangla Bank PLC (DBBL) & Eastern Bank PLC (EBL)',
    examTaker: 'IBA, University of Dhaka / BIBM',
    year: 2026,
    examDate: 'February 2026',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper for Private Bank Management Trainee / Senior Officer (General) 2026.',
    writtenSeed: {
      englishFocusTopic: 'The Rise of AI-Driven Credit Scoring, Open Banking APIs, and Digital Transformation in Private Commercial Banks of Bangladesh.',
      englishFocusSolution: `Model Essay Summary (15 Marks):
1. Transition from brick-and-mortar branch banking to omnichannel digital banking and Open Banking API integration.
2. Application of machine learning in alternative credit scoring for SME and retail borrowers using cash-flow and MFS transaction histories.
3. Managing operational resilience, data privacy, and ISO 27001 / PCI-DSS security standards.`,
      banglaFocusTopic: 'ক্যাশলেস বাংলাদেশ বিনির্মাণে মোবাইল ফিন্যান্সিয়াল সার্ভিসেস (MFS), বাংলা কিউআর (Bangla QR) এবং ডিজিটাল ব্যাংকের সম্ভাবনা।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (১৫ নম্বর):
১. নগদ লেনদেনের ঝুঁকি ও ব্যয় কমিয়ে আন্তঃব্যাংক ডিজিটাল লেনদেন (বিনিময় ও বাংলা কিউআর) সম্প্রসারণ।
২. প্রান্তিক ক্ষুদ্র ব্যবসায়ী ও গ্রামীণ জনগোষ্ঠীকে আনুষ্ঠানিক ব্যাংকিং সেবায় অন্তর্ভুক্তকরণ।
৩. সাইবার নিরাপত্তা ও গ্রাহক সচেতনতা বৃদ্ধি।`,
      customMath1Question: 'Pipe A can fill a tank in 16 hours and Pipe B can fill it in 24 hours, while outlet Pipe C can empty the full tank in 48 hours. If all three pipes are opened together, in how many hours will the empty tank be completely filled?',
      customMath1Solution: `Step-by-Step Solution:
1. Net 1-hour filling rate = 1/16 + 1/24 - 1/48 = (3 + 2 - 1) / 48 = 4 / 48 = 1 / 12.
2. Therefore, the tank will be completely filled in 12 hours.`,
      argumentativeTopic: '"Physical bank branches will become obsolete within the next decade due to mobile banking apps and AI virtual assistants." — Argue for or against this proposition.',
      argumentativeSolution: `Model Argumentative Response (10 Marks):
While routine teller transactions have migrated to mobile apps and ATMs, physical branches are evolving into advisory hubs for complex corporate syndication, trade finance (LCs), wealth management, and SME relationship banking rather than disappearing altogether.`,
      engToBanPassage: 'Customer-centric innovation and prudent risk management are the twin pillars of sustainable private banking. Banks that invest in digital literacy and transparent fee structures build lasting trust with retail and corporate clients alike.',
      engToBanSolution: 'গ্রাহক-কেন্দ্রিক উদ্ভাবন এবং বিচক্ষণ ঝুঁকি ব্যবস্থাপনা হলো টেকসই বেসরকারি ব্যাংকিংয়ের দুটি মূল স্তম্ভ। যেসব ব্যাংক ডিজিটাল সাক্ষরতা এবং স্বচ্ছ ফি কাঠামোতে বিনিয়োগ করে, তারা খুচরা ও কর্পোরেট উভয় গ্রাহকদের সাথেই দীর্ঘস্থায়ী আস্থার সম্পর্ক গড়ে তোলে।',
      banToEngPassage: 'বেসরকারি বাণিজ্যিক ব্যাংকগুলো ক্ষুদ্র ও মাঝারি শিল্পে (এসএমই) অর্থায়নের মাধ্যমে কর্মসংস্থান সৃষ্টি এবং নারীর অর্থনৈতিক ক্ষমতায়নে গুরুত্বপূর্ণ অবদান রাখছে।',
      banToEngSolution: 'Private commercial banks are making significant contributions to job creation and women’s economic empowerment by financing small and medium enterprises (SMEs).',
      bankingCaseQuestion: 'Prepare a Bank Reconciliation Statement as of 31st December from: (i) Balance as per Cash Book Tk. 84,500; (ii) Unpresented cheques Tk. 18,000; (iii) Direct customer remittance Tk. 12,400; (iv) Bank charges & LC commission Tk. 3,000; (v) Dishonored cheque Tk. 6,500.',
      bankingCaseSolution: `Bank Reconciliation Statement as of 31st December:
1. Debit Balance as per Cash Book = Tk. 84,500
2. Add: Unpresented cheques (18,000) + Direct customer deposit (12,400) = +Tk. 30,400 (Subtotal = Tk. 1,14,900)
3. Less: Bank charges & LC commission (3,000) + Dishonored cheque (6,500) = -Tk. 9,500
4. Credit Balance as per Bank Statement (Pass Book) = Tk. 1,05,400.`
    }
  }),

  // 2025 - Combined 9 Banks Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2025',
    questionPaperCode: 'BSCS-SO-GEN-2025 (Job ID: 10201)',
    title: 'Combined 9 Banks Senior Officer (General) Full 100-MCQ & 12-Written Exam 2025',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB, RAKUB & BHBFC (BSCS)',
    examTaker: 'BIBM',
    year: 2025,
    examDate: 'April 2025',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Combined 9 Banks Senior Officer (General) 2025.',
    writtenSeed: {
      englishFocusTopic: 'Exchange Rate Flexibility, Crawling Peg Mechanism, and Balance of Payments (BoP) Stability in Bangladesh.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Overview of Bangladesh's Balance of Payments (Current Account vs. Financial Account) and transition from fixed bands to the Crawling Peg Mid-Rate (CPMR) system.
2. Impact of exchange rate alignment on formal remittance inflows, export competitiveness, and import rationalization.
3. Rebuilding Net International Reserves (NIR) through IMF BPM6 compliance, export repatriation enforcement, and FDI facilitation.`,
      banglaFocusTopic: 'বৈদেশিক মুদ্রার রিজার্ভ স্থিতিশীলকরণে প্রবাসী আয় (Remittance) এবং রপ্তানি বহুমুখীকরণের গুরুত্ব।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. বৈদেশিক মুদ্রার রিজার্ভের গুরুত্ব: আমদানি ব্যয় মেটানো, বৈদেশিক ঋণ পরিশোধ এবং টাকার বিনিময় হার স্থিতিশীল রাখা।
২. রেমিট্যান্স প্রবাহ বৃদ্ধির কৌশল: হুন্ডি দমন, ডিজিটাল রেমিট্যান্স চ্যানেল সহজীকরণ, প্রবাসীদের প্রণোদনা ও দক্ষ জনশক্তি রপ্তানি।
৩. রপ্তানি বহুমুখীকরণ: তৈরি পোশাকের বাইরে আইসিটি, ওষুধ, চামড়াজাত পণ্য, পাট ও কৃষি প্রক্রিয়াজাত পণ্যের বিশ্ববাজার সম্প্রসারণ।`,
      customMath1Question: 'A cistern has two inlet pipes A and B that can fill it in 12 hours and 15 hours respectively, and an outlet pipe C that can empty the full cistern in 20 hours. If all three pipes are opened simultaneously, in how many hours will the empty cistern be completely filled?',
      customMath1Solution: `Step-by-Step Solution:
1. 1-hour filling work of Pipe A = 1/12; Pipe B = 1/15.
2. 1-hour emptying work of Pipe C = 1/20.
3. Net 1-hour filling work when all three are open = 1/12 + 1/15 - 1/20 = (5 + 4 - 3) / 60 = 6 / 60 = 1/10.
4. Total time to fill the cistern = 10 hours.`,
      argumentativeTopic: '"Export subsidies should be replaced by productivity-linked technological incentives as Bangladesh graduates from LDC status in 2026." — Discuss critically.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
Under WTO Agreement on Subsidies and Countervailing Measures (SCM), direct cash subsidies on exports are prohibited post-LDC graduation. Transitioning toward green factory upgrades, R&D grants, port logistics efficiency, and skill development ensures WTO-compliant global competitiveness.`,
      engToBanPassage: 'A market-determined exchange rate eliminates the premium between official banking channels and informal markets, thereby encouraging expatriate workers to remit their hard-earned foreign currency through scheduled banks.',
      engToBanSolution: 'বাজার-ভিত্তিক বিনিময় হার আনুষ্ঠানিক ব্যাংকিং চ্যানেল এবং অনানুষ্ঠানিক বাজারের মধ্যকার ব্যবধান দূর করে, যা প্রবাসী কর্মীদের তাদের কষ্টার্জিত বৈদেশিক মুদ্রা তফসিলি ব্যাংকের মাধ্যমে দেশে পাঠাতে উৎসাহিত করে।',
      banToEngPassage: 'মুদ্রাস্ফীতি নিয়ন্ত্রণে মুদ্রানীতি ও রাজস্বনীতির মধ্যে কার্যকর সমন্বয় প্রয়োজন। কেন্দ্রীয় ব্যাংকের নীতি সুদহার বৃদ্ধির পাশাপাশি নিত্যপ্রয়োজনীয় পণ্যের সরবরাহ শৃঙ্খল নিরবচ্ছিন্ন রাখা আবশ্যক।',
      banToEngSolution: 'Effective coordination between monetary policy and fiscal policy is essential to control inflation. Alongside raising the central bank’s policy interest rate, maintaining an uninterrupted supply chain for essential commodities is imperative.',
      bankingCaseQuestion: 'Distinguish between Sight LC and Usance (Deferred) LC under UCP 600, and explain the role of Back-to-Back LC in Bangladesh’s Ready-Made Garments (RMG) export trade.',
      bankingCaseSolution: `1. Sight LC vs. Usance LC: Under a Sight LC, the issuing/negotiating bank pays immediately upon presentation of compliant shipping documents (within 5 banking days under UCP 600 Art. 14b). Under a Usance LC, payment is made at a stipulated future maturity date (e.g., 90 or 120 days after sight/shipment).
2. Back-to-Back LC in RMG: Export-oriented RMG manufacturers use the Master Export LC received from foreign buyers as collateral to open an inland/import Back-to-Back LC to procure raw materials (fabrics, yarn, accessories) without tying up upfront working capital.`
    }
  }),

  // 2024 - Combined 10 Banks Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2024',
    questionPaperCode: 'BSCS-SO-GEN-2024 (Job ID: 10189)',
    title: 'Combined 10 Banks Senior Officer (General) Full 100-MCQ & 12-Written Exam 2024',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB, RAKUB, PKB & BHBFC (BSCS)',
    examTaker: 'BIBM',
    year: 2024,
    examDate: 'March 2024',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Combined 10 Banks Senior Officer (General) 2024.',
    writtenSeed: {
      englishFocusTopic: 'Transition from SMART (Six-Month Moving Average Rate of Treasury Bills) to Market-Based Interest Rates and Its Impact on Private Sector Credit Growth.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Historical evolution from the 9%–6% interest rate cap to the SMART reference rate and finally to a fully market-driven interest rate regime in May 2024.
2. Impact on bank Net Interest Margins (NIM), deposit mobilization, and bond market yield curves.
3. Safeguarding cottage, micro, small, and medium enterprises (CMSMEs) through targeted refinance windows during high-interest cycles.`,
      banglaFocusTopic: 'স্মার্ট ও ক্যাশলেস অর্থনীতি বিনির্মাণে ডিজিটাল ব্যাংকিং, ফিনটেক এবং সাইবার নিরাপত্তার গুরুত্ব।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. ডিজিটাল ব্যাংকিংয়ের প্রসার: ইন্টারনেট ব্যাংকিং, মোবাইল অ্যাপ, আরটিজিএস (RTGS), বিইএফটিএন (BEFTN) এবং এনপিএসবি (NPSB)-এর মাধ্যমে তাৎক্ষণিক লেনদেন।
২. ক্যাশলেস সমাজের সুবিধা: জাল নোট ও কালো টাকার বিস্তার রোধ, রাজস্ব আহরণ বৃদ্ধি এবং লেনদেনে স্বচ্ছতা।
৩. সাইবার নিরাপত্তা চ্যালেঞ্জ: টু-ফ্যাক্টর অথেনটিকেশন (2FA), ফায়ারওয়াল, সক (SOC) ও গ্রাহক সচেতনতা।`,
      customMath1Question: 'Two vessels A and B contain mixtures of acid and water in the ratio 5 : 3 and 2 : 3 respectively. In what ratio should the liquids from both vessels be mixed so that the new mixture contains half acid and half water (1 : 1)?',
      customMath1Solution: `Step-by-Step Solution:
1. Concentration of acid in Vessel A = 5 / (5 + 3) = 5/8.
2. Concentration of acid in Vessel B = 2 / (2 + 3) = 2/5.
3. Desired concentration of acid in the final mixture = 1 / (1 + 1) = 1/2.
4. Applying the Rule of Alligation:
   Quantity from A : Quantity from B = |1/2 - 2/5| : |5/8 - 1/2| = (1/10) : (1/8) = 8 : 10 = 4 : 5.
   Answer: 4 : 5.`,
      argumentativeTopic: '"Interest rate caps protect borrowers in the short run but distort credit allocation and penalize savers in the long run." — Evaluate this statement.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
Artificial interest rate ceilings (such as the 9% lending cap) compress deposit rates below inflation, resulting in negative real returns for savers and discouraging formal deposit growth. Furthermore, banks ration credit away from higher-risk SMEs toward large corporate groups. Market-driven rates restore price discovery in the credit market.`,
      engToBanPassage: 'When real interest rates on bank deposits turn negative due to persistent inflation, household savings tend to shift toward unproductive real estate or gold, weakening the liquidity base of the banking system.',
      engToBanSolution: 'দীর্ঘস্থায়ী মূল্যস্ফীতির কারণে যখন ব্যাংক আমানতের প্রকৃত সুদের হার ঋণাত্মক হয়ে পড়ে, তখন পারিবারিক সঞ্চয় অনুৎপাদনশীল আবাসন বা স্বর্ণের দিকে ধাবিত হয়, যা ব্যাংকিং ব্যবস্থার তারল্য ভিত্তিকে দুর্বল করে তোলে।',
      banToEngPassage: 'ক্ষুদ্র ও মাঝারি শিল্প (এসএমই) বাংলাদেশের অর্থনীতির প্রাণশক্তি। জামানতবিহীন ঋণ ও নারী উদ্যোক্তাদের জন্য স্বল্প সুদে পুনঃঅর্থায়ন তহবিল সম্প্রসারণ করা হলে গ্রামীণ অর্থনীতি আরও গতিশীল হবে।',
      banToEngSolution: 'Small and Medium Enterprises (SMEs) are the lifeblood of Bangladesh’s economy. Expanding collateral-free loans and low-interest refinancing funds for women entrepreneurs will make the rural economy more dynamic.',
      bankingCaseQuestion: 'Explain the working mechanism of Bangladesh Automated Clearing House (BACH), including BACPS (High Value vs. Regular Value cheques) and BEFTN, and contrast them with RTGS.',
      bankingCaseSolution: `1. BACPS (Bangladesh Automated Cheque Processing System): Uses Cheque Imaging and Truncation (CIT) technology. High Value (HV) cheques (>= Tk. 5,00,000) clear on the same day (T+0), while Regular Value (RV) cheques clear on the next business day (T+1).
2. BEFTN (Bangladesh Electronic Funds Transfer Network): Batch-based electronic credit/debit transfer system for payroll, dividends, and utility bills.
3. RTGS (Real-Time Gross Settlement): Instantaneous, transaction-by-transaction settlement for high-value interbank transfers (>= Tk. 1,00,000) in real time.`
    }
  }),

  // 2023 - Bangladesh Bank AD & Combined 9 Banks Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2023',
    questionPaperCode: 'BB-AD-SO-GEN-2023 (Job ID: 10180)',
    title: 'Bangladesh Bank AD (General) & Combined 9 Banks Senior Officer Full 100-MCQ & 12-Written Exam 2023',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank & Combined 9 Govt Banks (BSCS)',
    examTaker: 'BIBM / IBA, University of Dhaka',
    year: 2023,
    examDate: 'October 2023',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Senior Officer / Assistant Director (General) 2023.',
    writtenSeed: {
      englishFocusTopic: 'Global Geopolitical Supply-Chain Disruptions, Imported Inflation, and Monetary-Fiscal Policy Coordination in Bangladesh.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Transmission of global energy, fertilizer, and food price shocks into Bangladesh's domestic price level and trade deficit.
2. Transition from monetary aggregate (M2) targeting to an Interest Rate Corridor (IRC) framework anchored by the Policy Repo Rate, SLF, and SDF.
3. Fiscal austerity on non-priority projects, domestic revenue mobilization (Tax-to-GDP ratio), and targeted social safety nets.`,
      banglaFocusTopic: 'বৈশ্বিক অর্থনৈতিক মন্দা ও মূল্যস্ফীতির অভিঘাত মোকাবিলায় বাংলাদেশের কৃষি ও খাদ্য নিরাপত্তার গুরুত্ব।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. বৈশ্বিক সাপ্লাই চেইন সংকট ও খাদ্য নিরাপত্তার ঝুঁকি।
২. কৃষি খাতে স্বল্প সুদে ঋণ বিতরণ, উন্নত বীজ ও সেচ প্রযুক্তিতে ভর্তুকি এবং কৃষিপণ্য সংরক্ষণাগার নির্মাণ।
৩. মধ্যস্বত্বভোগীদের দৌরাত্ম্য হ্রাস ও কৃষকের ন্যায্যমূল্য নিশ্চিতকরণে কৃষি বিপণন সংস্কার।`,
      customMath1Question: 'A tank has three pipes A, B, and C. Pipes A and B can fill the tank in 6 hours and 8 hours respectively, while Pipe C can empty the full tank in 12 hours. If pipes A and B are opened for 2 hours and then Pipe C is also opened, how much total time will it take to fill the tank completely?',
      customMath1Solution: `Step-by-Step Solution:
1. Part filled by (A + B) in first 2 hours = 2 × (1/6 + 1/8) = 2 × (7/24) = 7/12.
2. Remaining part to be filled = 1 - 7/12 = 5/12.
3. Net filling rate when all three (A + B - C) are open = 1/6 + 1/8 - 1/12 = (4 + 3 - 2) / 24 = 5/24 per hour.
4. Time to fill remaining 5/12 part = (5/12) ÷ (5/24) = 2 hours.
5. Total time = 2 + 2 = 4 hours.`,
      argumentativeTopic: '"Bancassurance will revolutionize insurance penetration and fee-based income for commercial banks in Bangladesh." — Discuss opportunities and regulatory safeguards.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
Bancassurance enables commercial banks to leverage their nationwide branch networks and customer trust to distribute life and non-life insurance policies, boosting non-interest fee income. However, strict IDRA and Bangladesh Bank safeguards against mis-selling and forced bundling with loans are vital.`,
      engToBanPassage: 'Central banks around the world have adopted an interest rate corridor system to enhance the precision of monetary policy transmission and stabilize short-term interbank call money rates.',
      engToBanSolution: 'মুদ্রানীতি সঞ্চালনের নির্ভুলতা বৃদ্ধি এবং স্বল্পমেয়াদি আন্তঃব্যাংক কলমানি হার স্থিতিশীল করার লক্ষ্যে বিশ্বের কেন্দ্রীয় ব্যাংকগুলো সুদের হার করিডোর (Interest Rate Corridor) ব্যবস্থা গ্রহণ করেছে।',
      banToEngPassage: 'আর্থিক অন্তর্ভুক্তির মাধ্যমে গ্রামীণ নারী, ক্ষুদ্র কৃষক ও প্রান্তিক উদ্যোক্তাদের আনুষ্ঠানিক ব্যাংকিং সেবার আওতায় আনা সম্ভব হয়েছে, যা দারিদ্র্য বিমোচনে প্রত্যক্ষ ভূমিকা রাখছে।',
      banToEngSolution: 'Through financial inclusion, rural women, smallholder farmers, and marginal entrepreneurs have been brought under formal banking services, playing a direct role in poverty alleviation.',
      bankingCaseQuestion: 'Explain how Repo Rate, Reverse Repo Rate (SDF), Cash Reserve Ratio (CRR), and Statutory Liquidity Ratio (SLR) function as instruments of monetary policy in Bangladesh.',
      bankingCaseSolution: `1. Repo Rate: Policy rate at which scheduled banks borrow short-term liquidity from Bangladesh Bank against government securities; raising it tightens credit.
2. Reverse Repo / SDF: Floor rate of the corridor absorbing excess liquidity from commercial banks.
3. CRR (4.0% bi-weekly average, min 3.5% daily): Mandatory cash reserve kept with Bangladesh Bank in Taka.
4. SLR (13% for conventional banks, 5.5% for Islamic banks): Statutory liquid assets held in cash, gold, and unencumbered government securities (T-Bills/BGTBs).`
    }
  }),

  // 2022 - Combined 8 Banks Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2022',
    questionPaperCode: 'BSCS-SO-GEN-2022 (Job ID: 10146)',
    title: 'Combined 8 Banks Senior Officer (General) Full 100-MCQ & 12-Written Exam 2022',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB & Probashi Kallyan Bank (BSCS)',
    examTaker: 'BIBM',
    year: 2022,
    examDate: 'November 2022',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Combined 8 Banks Senior Officer (General) 2022.',
    writtenSeed: {
      englishFocusTopic: 'Mega Infrastructure Projects (Padma Multipurpose Bridge, Metro Rail, Matarbari Deep Sea Port) and Their Multiplier Effect on Bangladesh’s GDP and Regional Trade.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Direct connectivity of 21 southwestern districts via the Padma Bridge, reducing transit times and logistics costs for agricultural and industrial goods.
2. Urban productivity gains from Dhaka Mass Rapid Transit (MRT Line-6) and maritime trade capacity expansion via Matarbari Deep Sea Port.
3. Role of commercial banks in financing industrial clusters, agro-processing zones, and SMEs along new economic corridors.`,
      banglaFocusTopic: 'পদ্মা বহুমুখী সেতু ও মেগা প্রকল্পসমূহ: বাংলাদেশের দক্ষিণ-পশ্চিমাঞ্চলের শিল্পায়ন ও অর্থনৈতিক রূপান্তর।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. নিজস্ব অর্থায়নে পদ্মা সেতু নির্মাণ ও জাতীয় সক্ষমতার প্রতীক।
২. মোংলা বন্দর ও বেনাপোল স্থলবন্দরের সাথে রাজধানী ঢাকার দ্রুত যোগাযোগ স্থাপন এবং জিডিপি প্রবৃদ্ধিতে ১.২৩% অতিরিক্ত অবদান।
৩. দক্ষিণ-পশ্চিমাঞ্চলে কৃষিভিত্তিক শিল্প, হিমাগার ও এসএমই ক্লাস্টার গড়ে তুলতে ব্যাংক ঋণের সম্প্রসারণ।`,
      customMath1Question: 'A can complete a piece of work in 15 days and B can complete the same work in 20 days. They work together for 4 days and then A leaves. In how many more days will B alone finish the remaining work?',
      customMath1Solution: `Step-by-Step Solution:
1. Combined 1-day work of (A + B) = 1/15 + 1/20 = (4 + 3) / 60 = 7/60.
2. Work done by (A + B) in 4 days = 4 × (7/60) = 28/60 = 7/15.
3. Remaining work = 1 - 7/15 = 8/15.
4. Time taken by B alone to finish 8/15 work = (8/15) × 20 = 32/3 = 10⅔ days (10 days 16 hours).`,
      argumentativeTopic: '"Trade-Based Money Laundering (TBML) through over-invoicing and under-invoicing is the single largest threat to Bangladesh’s foreign exchange reserves." — Analyze critically.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
TBML manipulates international trade invoices to illicitly transfer capital abroad. Over-invoicing capital machinery imports and under-invoicing export shipments drain foreign exchange reserves. Real-time customs-bank data integration, international price verification databases, and BFIU trade surveillance are critical countermeasures.`,
      engToBanPassage: 'Mega infrastructure projects generate long-term economic returns only when complemented by reliable energy supply, streamlined customs clearance, and investment-friendly regulatory policies.',
      engToBanSolution: 'মেগা অবকাঠামো প্রকল্পগুলো কেবল তখনই দীর্ঘমেয়াদি অর্থনৈতিক সুফল বয়ে আনে যখন সেগুলোর পাশাপাশি নির্ভরযোগ্য জ্বালানি সরবরাহ, সহজীকৃত শুল্ক ছাড়পত্র এবং বিনিয়োগ-বান্ধব নিয়ন্ত্রক নীতিমালা নিশ্চিত করা হয়।',
      banToEngPassage: 'আন্তর্জাতিক বাণিজ্যের আড়ালে অর্থ পাচার (Trade-Based Money Laundering) রোধ করতে আমদানি ও রপ্তানি পণ্যের প্রকৃত বাজারমূল্য যাচাই করা অত্যন্ত জরুরি।',
      banToEngSolution: 'To prevent trade-based money laundering under the guise of international trade, verifying the actual market prices of imported and exported goods is extremely urgent.',
      bankingCaseQuestion: 'What is Trade-Based Money Laundering (TBML)? Explain the red-flag indicators of Over-Invoicing, Under-Invoicing, Multiple Invoicing, and Phantom Shipping under BFIU guidelines.',
      bankingCaseSolution: `1. Over-Invoicing of Imports: Importer declares a price higher than fair market value to siphon excess foreign currency abroad.
2. Under-Invoicing of Exports: Exporter invoices goods below market value so the foreign buyer settles the difference in an offshore account.
3. Multiple Invoicing & Phantom Shipping: Issuing multiple payment instructions for the same shipment or falsifying Bills of Lading without actual physical shipment.
4. Bank Controls: Vessel tracking (IMB check), global commodity price benchmarking, and strict KYC/EDD on beneficial owners.`
    }
  }),

  // 2021 - Combined 7 Banks Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2021',
    questionPaperCode: 'BSCS-SO-GEN-2021',
    title: 'Combined 7 Banks Senior Officer (General) Full 100-MCQ & 12-Written Exam 2021',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BKB, RAKUB & BDBL (BSCS)',
    examTaker: 'Faculty of Social Sciences, DU / BIBM',
    year: 2021,
    examDate: 'November 2021',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Combined 7 Banks Senior Officer (General) 2021.',
    writtenSeed: {
      englishFocusTopic: 'Post-COVID-19 Economic Recovery, Stimulus Package Implementation, and CMSME Resilience in Bangladesh.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Design and disbursement of Bangladesh Bank's low-interest credit stimulus packages for export industries, agriculture, and CMSMEs.
2. Overcoming disbursement bottlenecks for cottage and micro-enterprises lacking formal collateral or audited financial statements.
3. Preventing stimulus loans from turning into new Non-Performing Loans through cash-flow monitoring.`,
      banglaFocusTopic: 'সুবর্ণজয়ন্তীতে বাংলাদেশের অর্থনৈতিক অর্জন, দারিদ্র্য বিমোচন এবং স্বল্পোন্নত দেশ (LDC) থেকে উত্তরণের চ্যালেঞ্জ।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. স্বাধীনতার ৫০ বছরে মাথাপিছু আয় বৃদ্ধি, দারিদ্র্য হ্রাস, খাদ্যে স্বয়ংসম্পূর্ণতা ও সামাজিক সূচকে অগ্রগতি।
২. জাতিসংঘের সিডিপি (CDP) কর্তৃক এলডিসি উত্তরণের তিনটি সূচকে (GNI per capita, HAI, EVI) বাংলাদেশের সাফল্য।
৩. ২০২৬-পরবর্তী শুল্কমুক্ত বাজার সুবিধা (DFQF) হারানোর চ্যালেঞ্জ মোকাবিলায় জিএসপি প্লাস (GSP+) ও মুক্ত বাণিজ্য চুক্তি (FTA) স্বাক্ষর।`,
      customMath1Question: 'A contractor undertook to finish a road construction project in 120 days and employed 100 men. After 45 days, he found that only 1/4 of the work was completed. How many additional men must he employ to finish the work on time?',
      customMath1Solution: `Step-by-Step Solution:
1. In 45 days, 100 men completed 1/4 of the work.
2. Remaining work = 1 - 1/4 = 3/4 (which is 3 times the work already done).
3. Remaining time = 120 - 45 = 75 days.
4. Using the work-equivalence formula (M₁ × D₁) / W₁ = (M₂ × D₂) / W₂:
   (100 × 45) / (1/4) = (M₂ × 75) / (3/4)
   => 4,500 × 3 = 75 × M₂ => M₂ = 13,500 / 75 = 180 men.
5. Additional men required = 180 - 100 = 80 men.`,
      argumentativeTopic: '"Credit guarantee schemes (CGS) are more effective than interest rate subsidies in expanding bank credit to small and micro entrepreneurs." — Discuss.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
Banks hesitate to lend to micro-entrepreneurs primarily due to credit default risk and lack of immovable collateral, not merely because of interest rates. Bangladesh Bank's Credit Guarantee Scheme (CGS) shares the default risk with lending banks, directly unlocking collateral-free financing for CMSMEs.`,
      engToBanPassage: 'Inclusive economic recovery requires that stimulus funds reach grassroots cottage, micro, and small enterprises that generate the majority of non-farm employment in rural Bangladesh.',
      engToBanSolution: 'অন্তর্ভুক্তিমূলক অর্থনৈতিক পুনরুদ্ধারের জন্য প্রয়োজন প্রণোদনা তহবিল যেন তৃণমূল পর্যায়ের কুটির, মাইক্রো ও ক্ষুদ্র শিল্পোদ্যোক্তাদের কাছে পৌঁছায়, যারা গ্রামীণ বাংলাদেশের সিংহভাগ অ-কৃষি কর্মসংস্থান সৃষ্টি করে।',
      banToEngPassage: 'স্বাধীনতার সুবর্ণজয়ন্তীতে বাংলাদেশ একটি কৃষিপ্রধান অর্থনীতি থেকে দ্রুত বর্ধনশীল শিল্প ও সেবা-নির্ভর অর্থনীতিতে রূপান্তরিত হয়েছে।',
      banToEngSolution: 'At the Golden Jubilee of Independence, Bangladesh has transformed from an agrarian economy into a rapidly growing industry- and service-driven economy.',
      bankingCaseQuestion: 'Compare the three pillars of Basel III with Basel II, and compute the Capital to Risk-Weighted Assets Ratio (CRAR) of a bank with Tier-1 Capital = Tk. 1,800 Cr, Tier-2 Capital = Tk. 450 Cr, and Total Risk-Weighted Assets (RWA) = Tk. 18,000 Cr.',
      bankingCaseSolution: `1. Three Pillars of Basel III: Pillar 1 (Minimum Capital Requirements + Capital Conservation Buffer 2.5% + Leverage Ratio 3%), Pillar 2 (Supervisory Review Process - ICAAP), Pillar 3 (Market Discipline & Disclosures), plus Liquidity Standards (LCR >= 100% & NSFR > 100%).
2. CRAR Calculation:
   Total Regulatory Capital = Tier-1 (1,800) + Tier-2 (450) = Tk. 2,250 Crore.
   CRAR = (Total Capital / RWA) × 100% = (2,250 / 18,000) × 100% = 12.50% (Meets the 12.50% minimum requirement including CCB).`
    }
  }),

  // 2020 - Sonali, Janata & Agrani Bank Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2020',
    questionPaperCode: 'BSCS-SO-GEN-2020',
    title: 'Combined Banks & Bangladesh Bank AD / Senior Officer (General) Full 100-MCQ & 12-Written Exam 2020',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank, Janata Bank & Agrani Bank (BSCS)',
    examTaker: 'BIBM',
    year: 2020,
    examDate: 'October 2020',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Senior Officer (General) 2020.',
    writtenSeed: {
      englishFocusTopic: 'Agent Banking and Mobile Financial Services (MFS) as Catalysts for Rural Financial Inclusion and Women’s Economic Empowerment.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Rapid expansion of Agent Banking outlets in union and village markets, bringing full-service banking (deposits, inward foreign remittances, micro-credits) at low overhead cost.
2. Bridging the gender gap in financial access by enabling rural women to save and transact securely near home.
3. Transforming agent outlets from remittance cash-out points into SME credit and agricultural financing hubs.`,
      banglaFocusTopic: 'গ্রামীণ অর্থনীতির চাকা সচল রাখতে এজেন্ট ব্যাংকিং এবং কৃষি ও পল্লী ঋণের ভূমিকা।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. ব্যাংকিং সুবিধাবঞ্চিত প্রত্যন্ত অঞ্চলে কম খরচে পূর্ণাঙ্গ ব্যাংকিং সেবা পৌঁছাতে এজেন্ট ব্যাংকিংয়ের সাফল্য।
২. প্রবাসীদের পাঠানো রেমিট্যান্স দ্রুত ও নিরাপদে গ্রামীণ পরিবারের হাতে পৌঁছে দেওয়া।
৩. শস্য, মৎস্য ও প্রাণিসম্পদ খাতে স্বল্প সুদে কৃষি ঋণ বিতরণ এবং গ্রামীণ কর্মসংস্থান সৃষ্টি।`,
      customMath1Question: 'Three partners A, B, and C start a business. Twice A’s capital is equal to thrice B’s capital, and B’s capital is four times C’s capital. Out of a total annual profit of Tk. 1,65,000, find each partner’s share of the profit.',
      customMath1Solution: `Step-by-Step Solution:
1. Let C's capital = x. Then B's capital = 4x.
2. Given 2A = 3B => 2A = 3(4x) = 12x => A's capital = 6x.
3. Ratio of capitals A : B : C = 6x : 4x : x = 6 : 4 : 1 (Sum of ratio terms = 11).
4. A's share = (6/11) × 1,65,000 = Tk. 90,000;
   B's share = (4/11) × 1,65,000 = Tk. 60,000;
   C's share = (1/11) × 1,65,000 = Tk. 15,000.`,
      argumentativeTopic: '"Single-digit lending rates (9% cap) can stimulate industrial investment only if non-performing loans and operational inefficiencies are simultaneously reduced." — Discuss.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
Mandating a 9% lending cap narrows net interest margins. Banks with high cost of funds caused by high NPL provisioning cannot profitably lend at 9% without squeezing depositors or cutting SME credit. Lowering NPLs and automating operations are prerequisites for sustainable low lending rates.`,
      engToBanPassage: 'Agent banking has bridged the gap between urban financial institutions and rural savers by mobilizing substantial deposits and channeling formal remittances directly to village households.',
      engToBanSolution: 'উল্লেখযোগ্য পরিমাণ আমানত সংগ্রহ এবং আনুষ্ঠানিক রেমিট্যান্স সরাসরি গ্রামীণ পরিবারগুলোর কাছে পৌঁছে দেওয়ার মাধ্যমে এজেন্ট ব্যাংকিং শহুরে আর্থিক প্রতিষ্ঠান এবং গ্রামীণ সঞ্চয়কারীদের মধ্যকার ব্যবধান ঘুচিয়েছে।',
      banToEngPassage: 'একটি দেশের সুষম অর্থনৈতিক উন্নয়নের জন্য শহর ও গ্রামের মধ্যকার আয় বৈষম্য কমিয়ে আনা এবং গ্রামীণ অবকাঠামোতে বিনিয়োগ বাড়ানো অপরিহার্য।',
      banToEngSolution: 'For balanced economic development of a country, reducing income inequality between urban and rural areas and increasing investment in rural infrastructure are essential.',
      bankingCaseQuestion: 'Define Net Present Value (NPV), Internal Rate of Return (IRR), and Debt Service Coverage Ratio (DSCR) used in corporate project finance appraisal by commercial banks.',
      bankingCaseSolution: `1. Net Present Value (NPV): Sum of discounted present values of future net cash inflows minus initial capital outlay: NPV = Σ [CF_t / (1 + r)^t] - C_0. A project is viable if NPV > 0.
2. Internal Rate of Return (IRR): The discount rate at which NPV = 0. Viable if IRR > Cost of Capital (WACC).
3. Debt Service Coverage Ratio (DSCR): (Net Operating Income / Total Debt Service including Principal + Interest). Banks typically require DSCR >= 1.25x to ensure comfortable loan repayment buffer.`
    }
  }),

  // 2019 - Combined 8 Banks Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2019',
    questionPaperCode: 'BSCS-SO-GEN-2019',
    title: 'Combined 8 Banks Senior Officer (General) Full 100-MCQ & 12-Written Exam 2019',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB, RAKUB & BHBFC (BSCS)',
    examTaker: 'BIBM / University of Dhaka',
    year: 2019,
    examDate: 'September 2019',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Combined 8 Banks Senior Officer (General) 2019.',
    writtenSeed: {
      englishFocusTopic: 'Blue Economy in the Bay of Bengal: Unlocking Maritime Resources, Deep-Sea Fishing, Offshore Energy, and Port-Led Industrialization in Bangladesh.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Sovereign maritime boundary settlement over 118,813 sq. km in the Bay of Bengal and its economic potential.
2. Key Blue Economy sectors: Sustainable marine fisheries, offshore oil/gas exploration, coastal shipping, shipbuilding, and marine biotechnology.
3. Role of state-owned and private banks in long-term maritime project financing and blue bonds.`,
      banglaFocusTopic: 'সুনীল অর্থনীতি (Blue Economy): বঙ্গোপসাগরের সামুদ্রিক সম্পদ আহরণ ও বাংলাদেশের অর্থনৈতিক সম্ভাবনা।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. সমুদ্রসীমা বিজয়ের পর ১,১৮,৮১৩ বর্গকিলোমিটার সমুদ্র অঞ্চলে বাংলাদেশের সার্বভৌম অধিকার প্রতিষ্ঠা।
২. গভীর সমুদ্রের মৎস্য সম্পদ, খনিজ ও গ্যাস অনুসন্ধান, জাহাজ নির্মাণ শিল্প এবং সমুদ্রবন্দর-কেন্দ্রিক বাণিজ্য সম্প্রসারণ।
৩. সামুদ্রিক পরিবেশ রক্ষা ও দীর্ঘমেয়াদি অবকাঠামো অর্থায়নে ব্যাংকিং খাতের অংশগ্রহণ।`,
      customMath1Question: 'A train overtakes two persons who are walking in the same direction in which the train is going, at the rate of 2 km/h and 4 km/h, and passes them completely in 9 seconds and 10 seconds respectively. Find the length and speed of the train.',
      customMath1Solution: `Step-by-Step Solution:
1. Let the speed of the train be u km/h and its length be L km.
2. Relative speed with respect to first person = (u - 2) km/h; second person = (u - 4) km/h.
3. Distance covered in passing either person equals the length of the train (L):
   (u - 2) × (9 / 3600) = (u - 4) × (10 / 3600)
   => 9u - 18 = 10u - 40 => u = 22 km/h (Speed of the train).
4. Length of the train L = (22 - 2) km/h × (5/18 m/s) × 9 s = 20 × (5/2) = 50 meters.`,
      argumentativeTopic: '"Foreign Direct Investment (FDI) in Special Economic Zones (SEZs) is more critical for technology transfer and export diversification than short-term foreign portfolio loans." — Discuss.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
Unlike volatile portfolio flows or commercial debt, greenfield FDI in Bangladesh's 100 Special Economic Zones brings non-debt-creating capital, managerial expertise, global value-chain integration, and advanced manufacturing technology.`,
      engToBanPassage: 'Sustainable utilization of marine resources in the Bay of Bengal can open a new frontier of economic growth through deep-sea fishing, coastal tourism, and maritime logistics.',
      engToBanSolution: 'বঙ্গোপসাগরের সামুদ্রিক সম্পদের টেকসই ব্যবহার গভীর সমুদ্রে মৎস্য আহরণ, উপকূলীয় পর্যটন এবং সামুদ্রিক লজিস্টিকসের মাধ্যমে অর্থনৈতিক প্রবৃদ্ধির এক নতুন দিগন্ত উন্মোচন করতে পারে।',
      banToEngPassage: 'দেশে বিশেষ অর্থনৈতিক অঞ্চল (SEZ) প্রতিষ্ঠার মাধ্যমে দেশি-বিদেশি বিনিয়োগ আকর্ষণ এবং পরিকল্পিত শিল্পায়ন ত্বরান্বিত করার উদ্যোগ নেওয়া হয়েছে।',
      banToEngSolution: 'Initiatives have been taken to attract domestic and foreign investment and accelerate planned industrialization by establishing Special Economic Zones (SEZs) across the country.',
      bankingCaseQuestion: 'Explain the classification stages of loans and advances (Standard, SMA, Substandard, Doubtful, Bad/Loss) and their required provisioning rates under Bangladesh Bank regulations.',
      bankingCaseSolution: `1. Unclassified Loans:
   - Standard: 1% general provision (0.25% for CMSME, 2% for consumer finance)
   - Special Mention Account (SMA): Overdue before becoming Substandard.
2. Classified (Non-Performing) Loans:
   - Substandard (SS): 20% specific provision on base for provision
   - Doubtful (DF): 50% specific provision on base for provision
   - Bad / Loss (B/L): 100% specific provision on base for provision (after deducting eligible collateral value).`
    }
  }),

  // 2018 - Combined 8 Banks Senior Officer (General) (1663 Posts)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2018',
    questionPaperCode: 'BSCS-SO-8BANK-2018',
    title: 'Combined 8 Banks Senior Officer (General) Full 100-MCQ & 12-Written Exam 2018 (1663 Posts)',
    orgType: 'Government Bank',
    organizationName: 'Sonali, Janata, Agrani, Rupali, BDBL, BKB, RAKUB & BHBFC',
    examTaker: 'BIBM / BSCS',
    year: 2018,
    examDate: 'May 2018',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Combined 8 Banks Senior Officer (General) 2018.',
    writtenSeed: {
      englishFocusTopic: 'Demographic Dividend, Youth Unemployment, and the Role of Commercial Banks in Financing Start-ups and Skill-Based Entrepreneurship.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Bangladesh's demographic window of opportunity with over 65% of the population in the working-age group (15–64 years).
2. Bridging the skill mismatch between university graduates and Fourth Industrial Revolution (4IR) industry demands.
3. Expanding Bangladesh Bank's Start-up Fund, venture capital financing, and collateral-free IT/agro-entrepreneurship credit.`,
      banglaFocusTopic: 'জনমিতিক লভ্যাংশ (Demographic Dividend) কাজে লাগাতে দক্ষ মানবসম্পদ উন্নয়ন ও তরুণ উদ্যোক্তা তৈরিতে ব্যাংকের ভূমিকা।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. কর্মক্ষম জনসংখ্যার আধিক্য ও জনমিতিক লভ্যাংশের ধারণা।
২. কারিগরি ও বৃত্তিমূলক শিক্ষা, আইসিটি ফ্রিল্যান্সিং এবং স্টার্ট-আপ সংস্কৃতি গড়ে তোলা।
৩. তরুণ উদ্যোক্তাদের জন্য সিঙ্গেল ডিজিট সুদে স্টার্ট-আপ ফান্ড ও জামানতবিহীন ঋণ সুবিধা।`,
      customMath1Question: 'A and B can do a piece of work in 18 days; B and C can do it in 24 days; A and C can do it in 36 days. In how many days can A, B, and C finish it working all together, and in how many days can A alone finish the work?',
      customMath1Solution: `Step-by-Step Solution:
1. 1-day work of (A+B) = 1/18; (B+C) = 1/24; (A+C) = 1/36.
2. Adding all three: 2(A + B + C)'s 1-day work = 1/18 + 1/24 + 1/36 = (4 + 3 + 2) / 72 = 9 / 72 = 1/8.
3. Therefore, (A + B + C)'s 1-day work = 1/16 => Together they finish in 16 days.
4. A's 1-day work = (A + B + C) - (B + C) = 1/16 - 1/24 = (3 - 2) / 48 = 1/48 => A alone finishes in 48 days.`,
      argumentativeTopic: '"Automation and Artificial Intelligence in banking will create more high-skill analytical jobs than the routine clerical jobs they displace." — Discuss.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
While core banking automation reduces manual ledger entry and teller workloads, it generates strong demand for credit analysts, cybersecurity specialists, data scientists, compliance officers, and SME relationship managers.`,
      engToBanPassage: 'A nation can reap the benefits of its demographic dividend only if it invests heavily in technical education, healthcare, and entrepreneurial credit for its youth.',
      engToBanSolution: 'একটি জাতি তার জনমিতিক লভ্যাংশের সুফল কেবল তখনই ভোগ করতে পারে যদি সে তার তরুণ প্রজন্মের কারিগরি শিক্ষা, স্বাস্থ্যসেবা এবং উদ্যোক্তা ঋণের পেছনে ব্যাপক বিনিয়োগ করে।',
      banToEngPassage: 'চতুর্থ শিল্প বিপ্লবের চ্যালেঞ্জ মোকাবিলায় আমাদের শিক্ষাব্যবস্থাকে কর্মমুখী ও প্রযুক্তিনির্ভর করে গড়ে তোলার কোনো বিকল্প নেই।',
      banToEngSolution: 'To meet the challenges of the Fourth Industrial Revolution, there is no alternative to making our education system employment-oriented and technology-driven.',
      bankingCaseQuestion: 'Explain the legal differences between a Cheque and a Bill of Exchange under the Negotiable Instruments Act, 1881, and state the grounds on which a banker is justified in dishonoring a customer’s cheque.',
      bankingCaseSolution: `1. Cheque vs. Bill of Exchange: A Cheque (Section 6) is always drawn on a specified scheduled banker and is payable on demand without days of grace. A Bill of Exchange (Section 5) can be drawn on any person/entity, may be payable on demand or after a fixed tenor, and requires acceptance when usance.
2. Valid Grounds for Dishonor: Insufficient funds, stale cheque (>6 months old), post-dated cheque presented early, payment stopped by drawer, notice of customer's death/insolvency/lunacy, garnishee order by court, or material alteration/signature mismatch.`
    }
  }),

  // 2017 - Bangladesh Bank AD & Sonali/Janata Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2017',
    questionPaperCode: 'BB-AD-SO-2017',
    title: 'Bangladesh Bank AD (General) & Sonali/Janata Senior Officer Full 100-MCQ & 12-Written Exam 2017',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank & Janata Bank',
    examTaker: 'IBA, University of Dhaka / BIBM',
    year: 2017,
    examDate: 'May 2017',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Bangladesh Bank AD & Senior Officer (General) 2017.',
    writtenSeed: {
      englishFocusTopic: 'Cybersecurity in Financial Institutions, SWIFT Payment Network Security, and IT Governance in Commercial Banks.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Lessons from global financial cyber heists and the imperative of securing SWIFT Alliance Access, Core Banking Systems (CBS), and RTGS endpoints.
2. Implementation of Bangladesh Bank's ICT Security Guidelines: Network segmentation, 24/7 Security Operations Center (SOC), multi-factor authentication, and regular VAPT audits.
3. Cultivating a zero-trust security culture among bank officers.`,
      banglaFocusTopic: 'ব্যাংকিং খাতে তথ্যপ্রযুক্তির ব্যবহার, অনলাইন ব্যাংকিংয়ের ঝুঁকি এবং সাইবার নিরাপত্তা জোরদারকরণ।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. কোর ব্যাংকিং সফটওয়্যার (CBS) ও অনলাইন পেমেন্ট সিস্টেমের মাধ্যমে ব্যাংকিং সেবার আধুনিকায়ন।
২. ম্যালওয়্যার, ফিশিং, র‍্যানসমওয়্যার এবং সুইফট (SWIFT) নেটওয়ার্ক জালিয়াতির ঝুঁকি।
৩. আইসিটি সিকিউরিটি পলিসি বাস্তবায়ন, নিয়মিত আইটি অডিট এবং দক্ষ সাইবার নিরাপত্তা টিম গঠন।`,
      customMath1Question: 'A tank can be filled by pipe A in 5 hours and by pipe B in 6 hours. Pipe C can empty the full tank in 12 hours. If all three pipes are opened together for 2 hours and then pipe C is closed, how much additional time will pipes A and B take to fill the remaining part of the tank?',
      customMath1Solution: `Step-by-Step Solution:
1. Net 1-hour filling rate of (A + B - C) = 1/5 + 1/6 - 1/12 = (12 + 10 - 5) / 60 = 17/60.
2. Part filled in the first 2 hours = 2 × (17/60) = 17/30.
3. Remaining part of the tank = 1 - 17/30 = 13/30.
4. Combined 1-hour rate of (A + B) after C is closed = 1/5 + 1/6 = 11/30.
5. Additional time required = (13/30) ÷ (11/30) = 13/11 hours = 1 hour 10 minutes 54.5 seconds.`,
      argumentativeTopic: '"Technological defenses like firewalls are useless if bank employees are not trained against social engineering and phishing attacks." — Evaluate.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
In cybersecurity, human error is frequently the weakest link. Most sophisticated advanced persistent threats (APTs) begin with a spear-phishing email or compromised credential. Therefore, mandatory employee security drills and strict dual-authorization workflows are as vital as hardware firewalls.`,
      engToBanPassage: 'Cybersecurity is no longer solely the responsibility of the IT department; it is a core board-level governance priority for every modern financial institution.',
      engToBanSolution: 'সাইবার নিরাপত্তা এখন আর কেবল আইটি বিভাগের একক দায়িত্ব নয়; এটি প্রতিটি আধুনিক আর্থিক প্রতিষ্ঠানের পরিচালনা পর্ষদ পর্যায়ের একটি মূল সুশাসন অগ্রাধিকার।',
      banToEngPassage: 'আর্থিক খাতে সাইবার হামলা প্রতিরোধে শক্তিশালী প্রযুক্তিগত সুরক্ষার পাশাপাশি কর্মকর্তা-কর্মচারীদের সচেতনতা ও দক্ষতা বৃদ্ধি অপরিহার্য।',
      banToEngSolution: 'To prevent cyberattacks in the financial sector, alongside strong technological protection, increasing the awareness and competence of officers and employees is essential.',
      bankingCaseQuestion: 'Explain the three stages of Money Laundering (Placement, Layering, Integration) and outline the core obligations of a Branch Anti-Money Laundering Compliance Officer (BAMLCO).',
      bankingCaseSolution: `1. Three Stages of Money Laundering:
   - Placement: Introducing illicit cash into the formal financial system (e.g., smurfing/structuring deposits below threshold).
   - Layering: Conducting complex wire transfers, shell company transactions, or trade invoices to obscure the audit trail.
   - Integration: Re-entering laundered funds into the legitimate economy as clean assets (real estate, luxury ventures).
2. BAMLCO Obligations: Ensure complete KYC & CDD/EDD at account opening, monitor Cash Transaction Reports (CTR >= Tk. 10 Lakh in a day), identify Suspicious Transaction Reports (STR), and report to CAMLCO/BFIU.`
    }
  }),

  // 2016 - Government Bank Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2016',
    questionPaperCode: 'BB-SCB-SO-2016',
    title: 'Bangladesh Bank AD & Sonali/Janata/Agrani Senior Officer (General) Full 100-MCQ & 12-Written Exam 2016',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank, Janata Bank & Agrani Bank',
    examTaker: 'IBA / BIBM',
    year: 2016,
    examDate: 'July 2016',
    writtenMarks: 200,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 200-Mark Written Paper for Senior Officer (General) 2016.',
    writtenSeed: {
      englishFocusTopic: 'Sustainable Development Goals (SDGs 2030) and the Role of Inclusive & Green Banking in Eradicating Poverty and Climate Vulnerability in Bangladesh.',
      englishFocusSolution: `Model Focus Writing Essay (30 Marks):
1. Transition from the Millennium Development Goals (MDGs) to the 17 UN Sustainable Development Goals (SDGs 2016–2030).
2. Aligning bank credit policies with SDG-1 (No Poverty), SDG-5 (Gender Equality), SDG-8 (Decent Work & Economic Growth), and SDG-13 (Climate Action).
3. Mobilizing green bonds, CSR allocations, and agricultural refinance schemes.`,
      banglaFocusTopic: 'টেকসই উন্নয়ন অভীষ্ট (SDGs) অর্জনে অন্তর্ভুক্তিমূলক ব্যাংকিং এবং দারিদ্র্য বিমোচন কৌশল।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (৩০ নম্বর):
১. সহস্রাব্দ উন্নয়ন লক্ষ্যমাত্রা (MDGs) অর্জনে বাংলাদেশের সাফল্য এবং ২০৩০ সালের মধ্যে এসডিজি বাস্তবায়নের রূপরেখা।
২. ক্ষুদ্র ঋণ, বর্গাচাষী ঋণ, ১০ টাকার ব্যাংক হিসাব এবং নারী উদ্যোক্তা অর্থায়নের মাধ্যমে দারিদ্র্য ও বৈষম্য হ্রাস।
৩. পরিবেশবান্ধব শিল্পায়ন ও গ্রিন ব্যাংকিং।`,
      customMath1Question: 'A sum of money is divided among A, B, C, and D in the ratio 3 : 4 : 9 : 10. If the share of C is Tk. 25,800 more than the share of B, what is the total amount of money of A and D together?',
      customMath1Solution: `Step-by-Step Solution:
1. Let the shares of A, B, C, and D be 3x, 4x, 9x, and 10x respectively.
2. Given: Share of C - Share of B = Tk. 25,800
   => 9x - 4x = 25,800 => 5x = 25,800 => x = Tk. 5,160.
3. Combined share of A and D = 3x + 10x = 13x = 13 × 5,160 = Tk. 67,080.`,
      argumentativeTopic: '"Economic growth measured solely by GDP is meaningless if income inequality (Gini coefficient) continues to widen." — Discuss in the context of developing nations.',
      argumentativeSolution: `Model Argumentative Essay (20 Marks):
Aggregate GDP growth can mask severe wealth concentration. Without progressive direct taxation, universal quality education, rural healthcare, and SME credit access, high GDP growth fails to translate into broad-based human development.`,
      engToBanPassage: 'Achieving the Sustainable Development Goals by 2030 requires a strong partnership between the public sector, commercial banks, and civil society organizations.',
      engToBanSolution: '২০৩০ সালের মধ্যে টেকসই উন্নয়ন অভীষ্ট অর্জন করতে হলে সরকারি খাত, বাণিজ্যিক ব্যাংক এবং সুশীল সমাজ সংস্থাগুলোর মধ্যে একটি শক্তিশালী অংশীদারিত্ব প্রয়োজন।',
      banToEngPassage: 'জলবায়ু পরিবর্তনের বিরূপ প্রভাব মোকাবিলায় পরিবেশবান্ধব প্রযুক্তি এবং নবায়নযোগ্য জ্বালানি খাতে ব্যাংকগুলোর বিনিয়োগ বৃদ্ধি করা একান্ত প্রয়োজন।',
      banToEngSolution: 'To combat the adverse impacts of climate change, increasing bank investments in eco-friendly technologies and the renewable energy sector is urgently needed.',
      bankingCaseQuestion: 'Distinguish between Lien, Pledge, Hypothecation, and Mortgage as modes of charging securities for bank advances.',
      bankingCaseSolution: `1. Lien: Right of a creditor/banker to retain possession of goods/securities owned by the debtor until a debt is paid (Banker's General Lien acts as an implied pledge).
2. Pledge (Bailment of goods): Movable goods are physically delivered into the bank's custody/godown under key and lock while ownership remains with the borrower.
3. Hypothecation: Equitable charge over movable assets (inventory/machinery/vehicles) where both ownership and physical possession remain with the borrower under a Letter of Hypothecation.
4. Mortgage (Transfer of Property Act): Transfer of an interest in specific immovable property (land/building) to secure a loan.`
    }
  }),

  // 2016 - Private Bank Senior Officer / MTO (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-prv-2016',
    questionPaperCode: 'EBL-MTB-MTO-2016',
    title: 'Eastern Bank & Mutual Trust Bank Senior Officer / MTO Full 100-MCQ & 12-Written Exam 2016',
    orgType: 'Private Bank',
    organizationName: 'Eastern Bank PLC & Mutual Trust Bank PLC',
    examTaker: 'IBA, University of Dhaka',
    year: 2016,
    examDate: 'September 2016',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper for Private Bank Senior Officer / MTO (General) 2016.',
    writtenSeed: {
      englishFocusTopic: 'Corporate Social Responsibility (CSR) and Sustainable Brand Equity in Private Commercial Banking.',
      englishFocusSolution: `Model Essay Summary (15 Marks):
1. Strategic CSR beyond charity: Investing in healthcare, underprivileged scholarships, disaster relief, and climate adaptation.
2. How ethical banking practices and CSR strengthen depositor loyalty and long-term shareholder value.`,
      banglaFocusTopic: 'বেসরকারি ব্যাংকের সামাজিক দায়বদ্ধতা (CSR): শিক্ষা, স্বাস্থ্য ও দুর্যোগ ব্যবস্থাপনায় অবদান।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (১৫ নম্বর):
১. মুনাফা অর্জনের পাশাপাশি সমাজের কল্যাণে সিএসআর তহবিলের সদ্ব্যবহার।
২. মেধাবী দরিদ্র শিক্ষার্থীদের বৃত্তি প্রদান, গ্রামীণ স্বাস্থ্যসেবা ও সবুজ বনায়ন।`,
      customMath1Question: 'Working 8 hours a day, 12 banking officers can audit 240 loan files in 5 days. How many loan files can 15 officers audit in 6 days if they work 10 hours a day?',
      customMath1Solution: `Step-by-Step Solution:
1. Using the chain rule formula: W₂ / W₁ = (M₂ × D₂ × H₂) / (M₁ × D₁ × H₁)
2. W₂ / 240 = (15 × 6 × 10) / (12 × 5 × 8) = 900 / 480 = 15 / 8.
3. W₂ = 240 × (15 / 8) = 30 × 15 = 450 loan files.`,
      argumentativeTopic: '"Relationship banking and personalized advisory services remain the key differentiator for corporate clients in an era of standardized digital banking products." — Discuss.',
      argumentativeSolution: `Model Argumentative Response (10 Marks):
Corporate treasurers require structured trade finance, syndicated term loans, and foreign exchange hedging tailored to their cash-flow cycles—services that depend heavily on skilled Relationship Managers (RMs).`,
      engToBanPassage: 'Sound credit risk assessment requires looking beyond historical financial statements to evaluate industry competitiveness, management integrity, and working capital cycles.',
      engToBanSolution: 'সঠিক ঋণ ঝুঁকি মূল্যায়নের জন্য কেবল অতীতের আর্থিক বিবরণীর ওপর নির্ভর না করে শিল্পের প্রতিযোগিতা সক্ষমতা, ব্যবস্থাপনার সততা এবং চলতি মূলধন চক্র মূল্যায়ন করা প্রয়োজন।',
      banToEngPassage: 'গ্রাহক সেবার মান উন্নয়ন এবং দ্রুত ঋণ প্রক্রিয়াকরণের মাধ্যমে বেসরকারি ব্যাংকগুলো দেশের ব্যবসা-বাণিজ্য সম্প্রসারণে অগ্রণী ভূমিকা পালন করছে।',
      banToEngSolution: 'By improving customer service quality and accelerating loan processing, private banks are playing a pioneering role in expanding trade and commerce in the country.',
      bankingCaseQuestion: 'What are the "5 Cs of Credit" and the 6 components of Credit Risk Grading (CRG) used by commercial bank relationship managers when evaluating a corporate loan proposal?',
      bankingCaseSolution: `1. The 5 Cs of Credit: Character (borrower integrity & CIB track record), Capacity (operating cash flow & DSCR), Capital (net worth & debt-equity ratio), Collateral (security coverage), and Conditions (macroeconomic & industry trends).
2. Key CRG Parameters: Financial Risk (leverage, liquidity, profitability, coverage), Business/Industry Risk, Management Risk, Security Risk, Relationship Risk, and Environmental/Compliance Risk.`
    }
  }),

  // 2015 - Sonali, Janata, Agrani & Rupali Bank Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2015',
    questionPaperCode: 'SCB-SO-GEN-2015',
    title: 'Sonali, Janata, Agrani & Rupali Bank Senior Officer (General) Full 100-MCQ & 12-Written Exam 2015',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank, Agrani Bank & Rupali Bank',
    examTaker: 'Faculty of Business Studies, DU',
    year: 2015,
    examDate: 'August 2015',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper for State-Owned Banks Senior Officer (General) 2015.',
    writtenSeed: {
      englishFocusTopic: 'Bangladesh’s Graduation to Lower-Middle-Income Country Status (World Bank Classification) and the Path Toward Upper-Middle-Income Growth.',
      englishFocusSolution: `Model Focus Writing Essay (15 Marks):
1. Crossing the World Bank's Gross National Income (GNI) per capita threshold through sustained 6.5%+ GDP growth, RMG exports, and remittance inflows.
2. Overcoming infrastructure deficits in power, port logistics, and capital markets to raise the investment-to-GDP ratio.`,
      banglaFocusTopic: 'নিম্ন-মধ্যম আয়ের দেশে বাংলাদেশের উন্নীত হওয়া: সম্ভাবনা, বিনিয়োগ পরিবেশ ও ব্যাংকিং খাতের করণীয়।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (১৫ নম্বর):
১. বিশ্বব্যাংকের মানদণ্ডে মাথাপিছু জাতীয় আয় বৃদ্ধির স্বীকৃতি।
২. উৎপাদনশীল শিল্প ও অবকাঠামো খাতে দীর্ঘমেয়াদি অর্থায়ন বৃদ্ধি এবং খেলাপি ঋণ নিয়ন্ত্রণ।`,
      customMath1Question: 'Pipe A can fill an empty cistern in 20 minutes and Pipe B can fill it in 30 minutes, while a drain pipe C can empty the full cistern in 15 minutes. If pipes A, B, and C are opened successively for 1 minute each in that order, how soon will the cistern be filled?',
      customMath1Solution: `Step-by-Step Solution:
1. Net work in 1 cycle of 3 minutes (A then B then C) = 1/20 + 1/30 - 1/15 = (3 + 2 - 4) / 60 = 1/60.
2. In 55 cycles (55 × 3 = 165 minutes), part filled = 55/60 = 11/12.
3. Remaining part = 1 - 11/12 = 1/12 = 5/60.
4. In the 166th minute, Pipe A fills 1/20 = 3/60 (Total filled = 58/60).
5. In the 167th minute, Pipe B fills 1/30 = 2/60 (Total filled = 60/60 = 1, completely full!).
   Answer: 167 minutes (2 hours 47 minutes).`,
      argumentativeTopic: '"State-Owned Commercial Banks (SOCBs) should be evaluated not solely on net profit, but also on their socio-economic developmental services." — Discuss both sides.',
      argumentativeSolution: `Model Argumentative Essay (10 Marks):
While SOCBs carry out critical public mandates (distributing social safety-net allowances, treasury operations, agricultural credit at concessional rates), public service obligations must not be used as an excuse for poor credit appraisal or high corporate NPLs.`,
      engToBanPassage: 'Achieving lower-middle-income status is a historic milestone for Bangladesh, reflecting decades of resilience in agriculture, garment exports, and human development.',
      engToBanSolution: 'নিম্ন-মধ্যম আয়ের দেশের মর্যাদা অর্জন বাংলাদেশের জন্য একটি ঐতিহাসিক মাইলফলক, যা কৃষি, তৈরি পোশাক রপ্তানি এবং মানব উন্নয়নে কয়েক দশকের সক্ষমতার প্রতিফলন ঘটায়।',
      banToEngPassage: 'রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকগুলো দেশের প্রত্যন্ত অঞ্চলে সরকারি ভাতা বিতরণ এবং কৃষি ঋণ পৌঁছে দেওয়ার ক্ষেত্রে অনন্য ভূমিকা পালন করে।',
      banToEngSolution: 'State-owned commercial banks play a unique role in distributing government allowances and delivering agricultural credit to remote regions of the country.',
      bankingCaseQuestion: 'Prepare a Trial Balance and explain the difference between Capital Expenditure and Revenue Expenditure in bank branch accounting.',
      bankingCaseSolution: `1. Capital Expenditure vs. Revenue Expenditure: Capital expenditure acquires long-term fixed assets (vaults, ATM machines, core banking servers, land/building) that yield benefits over multiple accounting periods and appear on the Balance Sheet. Revenue expenditure incurs recurring operational costs (salaries, branch rent, deposit interest, stationery) charged directly to the Profit & Loss Account.
2. Trial Balance Principle: Debit balances (Assets, Expenses, Drawings) must equal Credit balances (Liabilities, Equity, Revenues/Incomes).`
    }
  }),

  // 2014 - Sonali, Janata & Agrani Bank Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2014',
    questionPaperCode: 'SONALI-JANATA-SO-2014',
    title: 'Sonali Bank, Janata Bank & Agrani Bank Senior Officer (General) Full 100-MCQ & 12-Written Exam 2014',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank & Agrani Bank',
    examTaker: 'Faculty of Business Studies, DU / BIBM',
    year: 2014,
    examDate: 'November 2014',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper for Senior Officer (General) 2014.',
    writtenSeed: {
      englishFocusTopic: 'Mobile Financial Services (MFS) and Electronic Payment Systems: Transforming Domestic Remittances and Rural Commerce in Bangladesh.',
      englishFocusSolution: `Model Focus Writing Essay (15 Marks):
1. Rapid adoption of bank-led Mobile Financial Services across urban garment workers and rural recipient households.
2. Reduction of informal courier costs and time delays in domestic money transfers.
3. Strengthening KYC verification and agent liquidity management.`,
      banglaFocusTopic: 'মোবাইল ব্যাংকিং ও ইলেকট্রনিক পেমেন্ট সিস্টেম: অভ্যন্তরীণ অর্থ প্রবাহ ও গ্রামীণ অর্থনীতিতে বিপ্লব।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (১৫ নম্বর):
১. ব্যাংক-নেতৃত্বাধীন মোবাইল ফিন্যান্সিয়াল সার্ভিসেস (MFS) মডেলের প্রবর্তন।
২. শহর থেকে গ্রামে দ্রুত ও নিরাপদে অর্থ প্রেরণ এবং ক্ষুদ্র ব্যবসায়িক লেনদেন সহজীকরণ।`,
      customMath1Question: 'The length of a rectangular plot is 20 meters more than its breadth. If the cost of fencing the plot at Tk. 26.50 per meter is Tk. 5,300, what is the length, breadth, and area of the plot?',
      customMath1Solution: `Step-by-Step Solution:
1. Perimeter of the rectangular plot = Total Fencing Cost / Rate per meter = 5,300 / 26.50 = 200 meters.
2. Let breadth = B meters; then length L = (B + 20) meters.
3. Perimeter 2(L + B) = 200 => (B + 20) + B = 100 => 2B = 80 => Breadth B = 40 meters, Length L = 60 meters.
4. Area of the plot = 60 × 40 = 2,400 sq. meters.`,
      argumentativeTopic: '"Bank-led MFS models provide stronger regulatory oversight and depositor protection than unregulated telecom-led wallets." — Discuss.',
      argumentativeSolution: `Model Argumentative Essay (10 Marks):
Bangladesh Bank mandated the bank-led MFS model so that customer e-money balances are backed 100% by trust-cum-settlement accounts in scheduled commercial banks, ensuring prudential AML/CFT oversight and systemic stability.`,
      engToBanPassage: 'Mobile financial services have empowered millions of low-income workers to send money instantly to their families in villages without losing working hours at physical bank branches.',
      engToBanSolution: 'মোবাইল ফিন্যান্সিয়াল সার্ভিসেস লক্ষ লক্ষ স্বল্প-আয়ের কর্মীকে ব্যাংকের শাখায় কর্মঘণ্টা নষ্ট না করে তাৎক্ষণিকভাবে গ্রামের পরিবারের কাছে টাকা পাঠানোর ক্ষমতা দিয়েছে।',
      banToEngPassage: 'অভ্যন্তরীণ রেমিট্যান্স প্রবাহের কারণে গ্রামীণ পর্যায়ে ভোগ্যপণ্যের চাহিদা বৃদ্ধি পেয়েছে এবং ক্ষুদ্র ব্যবসার প্রসার ঘটেছে।',
      banToEngSolution: 'Due to domestic remittance inflows, demand for consumer goods at the rural level has increased and small businesses have expanded.',
      bankingCaseQuestion: 'Explain the concepts of "Holder" and "Holder in Due Course" under the Negotiable Instruments Act, 1881, and the legal effect of Crossing a Cheque (General vs. Special Crossing).',
      bankingCaseSolution: `1. Holder vs. Holder in Due Course (Sections 8 & 9): A Holder in Due Course acquires a negotiable instrument in good faith, for valuable consideration, and before maturity without notice of any defect in the transferor's title, thereby obtaining a title free from prior defects.
2. Crossing of Cheques (Sections 123–131): Directs the paying bank to pay only through a banker and never in cash across the counter. General Crossing has two parallel transverse lines ("& Co." / "Account Payee"); Special Crossing specifies the name of a particular collecting bank.`
    }
  }),

  // 2013 - Sonali, Janata & Agrani Bank Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2013',
    questionPaperCode: 'SONALI-JANATA-SO-2013',
    title: 'Sonali, Janata & Agrani Bank Senior Officer (General) Full 100-MCQ & 12-Written Exam 2013',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank & Agrani Bank',
    examTaker: 'Faculty of Business Studies, DU',
    year: 2013,
    examDate: 'September 2013',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper for Senior Officer (General) 2013.',
    writtenSeed: {
      englishFocusTopic: 'Green Banking and Sustainable Finance in Bangladesh: Role of Commercial Banks in Climate Resilience and Environmental Risk Management.',
      englishFocusSolution: `Model Focus Writing Essay (15 Marks):
1. Bangladesh Bank's pioneering 3-phase Green Banking Policy Guidelines for scheduled banks.
2. Mandatory Environmental Risk Rating (EnvRR) in industrial project appraisal and financing of Effluent Treatment Plants (ETPs), solar irrigation, and energy-efficient brick kilns (HHK).
3. In-house green office management and paperless banking.`,
      banglaFocusTopic: 'গ্রিন ব্যাংকিং (সবুজ ব্যাংকিং) ও পরিবেশবান্ধব অর্থায়ন: জলবায়ু পরিবর্তন মোকাবিলায় ব্যাংকিং খাতের ভূমিকা।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (১৫ নম্বর):
১. গ্রিন ব্যাংকিংয়ের ধারণা: ব্যাংকিং কার্যক্রমে কার্বন নিঃসরণ হ্রাস এবং পরিবেশবান্ধব শিল্পে অর্থায়ন।
২. ইটিপি (ETP), সৌরবিদ্যুৎ, বায়োগ্যাস ও পরিবেশবান্ধব ইটভাটায় বাংলাদেশ ব্যাংকের পুনঃঅর্থায়ন তহবিল।`,
      customMath1Question: 'Two taps A and B can fill a water tank in 30 minutes and 40 minutes respectively, while a third tap C can empty the tank at the rate of 50 liters per minute. If all three taps are opened together, the empty tank is filled in 60 minutes. Find the total capacity of the tank in liters.',
      customMath1Solution: `Step-by-Step Solution:
1. Combined filling rate of (A + B) = 1/30 + 1/40 = 7/120 of the tank per minute.
2. Net filling rate of (A + B - C) = 1/60 of the tank per minute.
3. Therefore, emptying rate of tap C alone = 7/120 - 1/60 = 5/120 = 1/24 of the tank per minute.
4. Tap C alone can empty the full tank in 24 minutes.
5. Since C empties 50 liters per minute, total capacity of the tank = 24 × 50 = 1,200 liters.`,
      argumentativeTopic: '"Industrialization at the cost of river pollution and ecological destruction creates hidden long-term economic liabilities that far outweigh short-term export gains." — Discuss.',
      argumentativeSolution: `Model Argumentative Essay (10 Marks):
Unchecked industrial effluent destroys river ecosystems, agricultural productivity, and public health, and invites international buyer boycotts. Enforcing mandatory ETP financing through Green Banking protects both the environment and long-term export sustainability.`,
      engToBanPassage: 'Green banking requires financial institutions to assess the environmental impact of every industrial project before sanctioning term loans.',
      engToBanSolution: 'গ্রিন ব্যাংকিংয়ের আওতায় আর্থিক প্রতিষ্ঠানগুলোকে মেয়াদি ঋণ অনুমোদনের পূর্বে প্রতিটি শিল্প প্রকল্পের পরিবেশগত প্রভাব মূল্যায়ন করতে হয়।',
      banToEngPassage: 'শিল্প কারখানায় বর্জ্য শোধনাগার (ETP) স্থাপন বাধ্যতামূলক করার ফলে নদী দূষণ রোধ ও টেকসই শিল্পায়ন নিশ্চিত করা সহজতর হয়েছে।',
      banToEngSolution: 'Making the installation of Effluent Treatment Plants (ETPs) mandatory in industrial factories has facilitated the prevention of river pollution and ensured sustainable industrialization.',
      bankingCaseQuestion: 'Explain the Six Core Risks in Banking identified by Bangladesh Bank for Core Risk Management Guidelines.',
      bankingCaseSolution: `Bangladesh Bank's Six Core Risk Management Guidelines cover:
1. Credit Risk Management (CRM)
2. Asset-Liability Management (ALM — liquidity & interest rate risk)
3. Foreign Exchange Risk Management (FXRM)
4. Internal Control and Compliance (ICC) Risk Management
5. Anti-Money Laundering (AML/CFT) Risk Management
6. Information and Communication Technology (ICT) Security Risk Management.`
    }
  }),

  // 2012 - Sonali, Janata, Agrani & Rupali Bank Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2012',
    questionPaperCode: 'SCB-SO-GEN-2012',
    title: 'Sonali, Janata, Agrani & Rupali Bank Senior Officer (General) Full 100-MCQ & 12-Written Exam 2012',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank, Agrani Bank & Rupali Bank',
    examTaker: 'Faculty of Business Studies, DU',
    year: 2012,
    examDate: 'August 2012',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper for Senior Officer (General) 2012.',
    writtenSeed: {
      englishFocusTopic: 'Internal Control and Compliance (ICC), Audit Independence, and Preventing Trade Finance Fraud in State-Owned Commercial Banks.',
      englishFocusSolution: `Model Focus Writing Essay (15 Marks):
1. Importance of segregating front-office credit origination, middle-office risk assessment, and back-office settlement.
2. Strengthening Internal Control and Compliance (ICC) departments to prevent inland bill purchase (IBP) and accommodation bill frauds.
3. Real-time reconciliation of inter-branch General Ledger (GL) accounts via Core Banking Software.`,
      banglaFocusTopic: 'ব্যাংকিং খাতে অভ্যন্তরীণ নিয়ন্ত্রণ ও পরিপালন (Internal Control & Compliance) এবং জালিয়াতি প্রতিরোধের উপায়।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (১৫ নম্বর):
১. অভ্যন্তরীণ অডিট ও পরিপালন বিভাগের স্বাধীনতা নিশ্চিতকরণ।
২. স্বীকৃত বিল (Accepted Bills) ও ঋণপত্র লেনদেনে দ্বৈত যাচাইকরণ এবং কোর ব্যাংকিং অটোমেশন।`,
      customMath1Question: 'A sum of money invested at simple interest amounts to Tk. 10,400 in 3 years and Tk. 12,000 in 5 years. Find the principal sum and the annual rate of interest.',
      customMath1Solution: `Step-by-Step Solution:
1. Simple Interest for (5 - 3) = 2 years = 12,000 - 10,400 = Tk. 1,600.
2. Simple Interest for 1 year = 1,600 / 2 = Tk. 800; Interest for 3 years = 800 × 3 = Tk. 2,400.
3. Principal Sum (P) = Amount in 3 years - Interest for 3 years = 10,400 - 2,400 = Tk. 8,000.
4. Annual Rate of Interest (r) = (800 / 8,000) × 100% = 10% per annum.`,
      argumentativeTopic: '"Strong internal audit and maker-checker controls are the most effective defense against insider fraud in commercial bank branches." — Discuss.',
      argumentativeSolution: `Model Argumentative Essay (10 Marks):
Major banking irregularities occur when branch managers override dual-control (maker-checker) procedures on inland bills and guarantees. Independent ICC reporting directly to the Board Audit Committee eliminates conflicts of interest.`,
      engToBanPassage: 'Effective internal control requires that no single officer is permitted to initiate, authorize, and record a financial transaction from beginning to end.',
      engToBanSolution: 'কার্যকর অভ্যন্তরীণ নিয়ন্ত্রণের জন্য প্রয়োজন যেন কোনো একক কর্মকর্তাকে শুরু থেকে শেষ পর্যন্ত একটি আর্থিক লেনদেন সূচনা, অনুমোদন এবং লিপিবদ্ধ করার অনুমতি না দেওয়া হয়।',
      banToEngPassage: 'ব্যাংকের প্রতিটি শাখায় নিয়মিত অভ্যন্তরীণ নিরীক্ষা ও ঝুঁকিভিত্তিক তদারকি জোরদার করা হলে আর্থিক অনিয়ম ও জালিয়াতি রোধ করা সম্ভব।',
      banToEngSolution: 'If regular internal audits and risk-based supervision are strengthened in every bank branch, financial irregularities and fraud can be prevented.',
      bankingCaseQuestion: 'Explain the accounting treatment of Bad Debts, Provision for Doubtful Debts, and Interest Suspense Account in commercial bank financial statements.',
      bankingCaseSolution: `1. Interest Suspense Account: Accrued interest on classified (Substandard, Doubtful, Bad/Loss) loans cannot be credited to the Income Statement; it must be credited to the Interest Suspense Account until realized in cash.
2. Provision for Classified Loans: Charged against Profit & Loss Account and held as a liability/contra-asset reserve to absorb expected credit losses.`
    }
  }),

  // 2011 - Bangladesh Bank AD & Sonali/Janata Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2011',
    questionPaperCode: 'BB-SCB-SO-2011',
    title: 'Bangladesh Bank AD (General) & Sonali/Janata Senior Officer Full 100-MCQ & 12-Written Exam 2011',
    orgType: 'Government Bank',
    organizationName: 'Bangladesh Bank, Sonali Bank & Janata Bank',
    examTaker: 'IBA, University of Dhaka / BIBM',
    year: 2011,
    examDate: 'October 2011',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper for Senior Officer (General) 2011.',
    writtenSeed: {
      englishFocusTopic: 'Capital Market Stability, Merchant Banking Regulations, and Commercial Bank Exposure Limits in the Stock Market of Bangladesh.',
      englishFocusSolution: `Model Focus Writing Essay (15 Marks):
1. Lessons from the 2010–2011 stock market volatility and excessive commercial bank exposure to equities.
2. Regulatory reforms under the Bank Company Act (Section 26Kha): Limiting capital market exposure to 25% of prescribed capital components on a solo basis (50% consolidated) at cost price.
3. Developing a vibrant corporate bond market for long-term industrial financing.`,
      banglaFocusTopic: 'পুঁজিবাজারের স্থিতিশীলতা রক্ষা, ক্ষুদ্র বিনিয়োগকারীদের স্বার্থ সুরক্ষা এবং ব্যাংকগুলোর পুঁজিবাজার বিনিয়োগ সীমা।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (১৫ নম্বর):
১. পুঁজিবাজার ও মুদ্রাবাজারের পারস্পরিক সম্পর্ক।
২. ব্যাংক কোম্পানি আইনের মাধ্যমে তফসিলি ব্যাংকের পুঁজিবাজার বিনিয়োগ সীমা নির্ধারণ এবং মার্চেন্ট ব্যাংক সাবসিডিয়ারি গঠন।`,
      customMath1Question: 'The average monthly salary of 20 employees in an organization is Tk. 15,000. If the Manager’s salary is added, the average salary increases by Tk. 1,000. What is the Manager’s monthly salary?',
      customMath1Solution: `Step-by-Step Solution:
1. Total monthly salary of 20 employees = 20 × 15,000 = Tk. 3,00,000.
2. New average salary of 21 persons (20 employees + 1 Manager) = 15,000 + 1,000 = Tk. 16,000.
3. Total monthly salary of 21 persons = 21 × 16,000 = Tk. 3,36,000.
4. Manager's monthly salary = 3,36,000 - 3,00,000 = Tk. 36,000.`,
      argumentativeTopic: '"Commercial banks should focus on working capital finance while long-term industrial project finance should be raised through the capital market." — Discuss.',
      argumentativeSolution: `Model Argumentative Essay (10 Marks):
Commercial bank deposits are predominantly short- to medium-term (1–3 years). Financing 10–15 year industrial projects with short-term deposits creates severe Asset-Liability Maturity Mismatch. Deepening the corporate bond and equity market resolves this structural vulnerability.`,
      engToBanPassage: 'A well-regulated capital market mobilizes long-term savings from the public and channels them into productive industrial infrastructure, reducing over-reliance on bank loans.',
      engToBanSolution: 'একটি সুনিয়ন্ত্রিত পুঁজিবাজার জনগণের কাছ থেকে দীর্ঘমেয়াদি সঞ্চয় সংগ্রহ করে এবং তা উৎপাদনশীল শিল্প অবকাঠামোতে প্রবাহিত করে, যা ব্যাংক ঋণের ওপর অতি-নির্ভরশীলতা কমায়।',
      banToEngPassage: 'মুদ্রাবাজার ও পুঁজিবাজারের সুষম বিকাশ ছাড়া কোনো দেশের দীর্ঘমেয়াদি শিল্পায়ন ও টেকসই অর্থনৈতিক প্রবৃদ্ধি সম্ভব নয়।',
      banToEngSolution: 'Without the balanced development of both the money market and the capital market, long-term industrialization and sustainable economic growth of any country are not possible.',
      bankingCaseQuestion: 'Distinguish between Money Market and Capital Market instruments in Bangladesh, and explain how Advance-to-Deposit Ratio (ADR) regulates credit expansion.',
      bankingCaseSolution: `1. Money Market vs. Capital Market: Money market deals in short-term high-liquidity instruments maturing within 1 year (Call Money, Repo, 91/182/364-day T-Bills, Commercial Paper) regulated by Bangladesh Bank. Capital market deals in long-term equity and debt securities (>1 year: Shares, Debentures, 2–20 year BGTBs, Mutual Funds) regulated by BSEC.
2. Advance-to-Deposit Ratio (ADR): Caps the maximum percentage of deposits a bank can lend out (e.g., 87% for conventional banks, 92% for Islamic banks as Investment-Deposit Ratio) to prevent liquidity crunches.`
    }
  }),

  // 2010 - Sonali, Janata & Agrani Bank Senior Officer (General)
  buildFull100McqSeniorOfficerPaper({
    paperId: 'nonit-so-gen-govt-2010',
    questionPaperCode: 'SONALI-JANATA-SO-2010',
    title: 'Sonali Bank, Janata Bank & Agrani Bank Senior Officer (General) Full 100-MCQ & 12-Written Exam 2010',
    orgType: 'Government Bank',
    organizationName: 'Sonali Bank, Janata Bank & Agrani Bank',
    examTaker: 'IBA / Faculty of Business Studies, DU',
    year: 2010,
    examDate: 'September 2010',
    writtenMarks: 100,
    summary: 'Complete 100-Question Preliminary MCQ Set (MCQ-001 to MCQ-100) and Full 12-Question 100-Mark Written Paper for Foundational 2010 State-Owned Banks Senior Officer (General) Recruitment Exam.',
    writtenSeed: {
      englishFocusTopic: 'Financial Inclusion of Farmers and Marginalized Citizens: The Impact of 10-Taka No-Frills Bank Accounts and Agricultural Refinance Schemes in Bangladesh.',
      englishFocusSolution: `Model Focus Writing Essay (15 Marks):
1. Bangladesh Bank's historic directive in 2010 enabling farmers, freedom fighters, garment workers, and social safety-net beneficiaries to open no-frills bank accounts with just Tk. 10.
2. Eliminating middlemen in government fertilizer/diesel subsidy distribution and cultivating a rural savings habit.
3. Expanding mandatory agricultural and rural credit targets across all scheduled banks.`,
      banglaFocusTopic: 'কৃষকদের জন্য ১০ টাকার ব্যাংক হিসাব, আর্থিক অন্তর্ভুক্তি এবং গ্রামীণ অর্থনীতির ক্ষমতায়ন।',
      banglaFocusSolution: `মডেল ফোকাস রাইটিং উত্তর (১৫ নম্বর):
১. ২০১০ সালে বাংলাদেশ ব্যাংকের উদ্যোগে কৃষক ও প্রান্তিক জনগোষ্ঠীর জন্য মাত্র ১০ টাকায় ব্যাংক হিসাব খোলার যুগান্তকারী পদক্ষেপ।
২. সরকারি ভর্তুকি, বয়স্ক ভাতা ও কৃষি ঋণ সরাসরি সুবিধাভোগীদের ব্যাংক হিসাবে প্রেরণ এবং মধ্যস্বত্বভোগী বিলোপ।`,
      customMath1Question: 'A man bought a horse and a carriage for Tk. 30,000. He sold the horse at a gain of 20% and the carriage at a loss of 10%, thereby gaining 2% on the whole transaction. Find the cost price of the horse and the carriage.',
      customMath1Solution: `Step-by-Step Solution:
1. Let the cost price of the horse be Tk. x; then the cost price of the carriage is Tk. (30,000 - x).
2. Total net profit = 2% of 30,000 = Tk. 600.
3. Setting up the profit-loss equation:
   0.20x - 0.10(30,000 - x) = 600
   => 0.20x - 3,000 + 0.10x = 600
   => 0.30x = 3,600 => x = Tk. 12,000 (Cost price of the horse).
4. Cost price of the carriage = 30,000 - 12,000 = Tk. 18,000.`,
      argumentativeTopic: '"Bringing unbanked smallholder farmers into the formal banking net is not charity—it is a profitable and stabilizing strategy for commercial banks." — Discuss.',
      argumentativeSolution: `Model Argumentative Essay (10 Marks):
Low-cost rural deposits mobilized through millions of no-frills accounts provide stable retail funding for banks, while small agricultural loans exhibit high recovery rates when linked to harvest cycles and rural extension services.`,
      engToBanPassage: 'By allowing farmers to open bank accounts with only ten Taka, Bangladesh Bank pioneered a global model of developmental central banking and grassroots financial inclusion.',
      engToBanSolution: 'কৃষকদের মাত্র দশ টাকায় ব্যাংক হিসাব খোলার সুযোগ করে দেওয়ার মাধ্যমে বাংলাদেশ ব্যাংক উন্নয়নমূলক কেন্দ্রীয় ব্যাংকিং এবং তৃণমূল পর্যায়ের আর্থিক অন্তর্ভুক্তির একটি বৈশ্বিক মডেল প্রবর্তন করেছে।',
      banToEngPassage: 'কৃষি বাংলাদেশের অর্থনীতির মূল চালিকাশক্তি। কৃষকদের সহজ শর্তে ও স্বল্প সুদে কৃষি ঋণ প্রদান করা হলে দেশের খাদ্য নিরাপত্তা চিরস্থায়ী হবে।',
      banToEngSolution: 'Agriculture is the main driving force of Bangladesh’s economy. Providing agricultural loans to farmers on easy terms and at low interest rates will make the country’s food security permanent.',
      bankingCaseQuestion: 'Define the primary functions of a Central Bank (Bangladesh Bank) under the Bangladesh Bank Order, 1972 (P.O. No. 127 of 1972).',
      bankingCaseSolution: `Under the Bangladesh Bank Order, 1972, the core functions of Bangladesh Bank are:
1. Formulating and implementing Monetary and Credit Policy to maintain price stability and support economic growth.
2. Sole Monopoly of Note Issue (Tk. 10 and above; Tk. 1, 2, and 5 are Government currency notes/coins issued by the Ministry of Finance).
3. Banker to the Government and Advisor on macroeconomic/debt management.
4. Banker's Bank and Lender of Last Resort for scheduled commercial banks.
5. Custodian and Manager of Foreign Exchange Reserves and Exchange Rate Policy.`
    }
  })
];

