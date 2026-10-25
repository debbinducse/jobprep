import { ApMcqQuestionDef } from './types';

export const apMathQuestionsPool: ApMcqQuestionDef[] = [
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A government IT department purchases software licenses worth Tk. 120,000. If the value of the software depreciates at a rate of 10% per annum compound depreciation, what will be its book value after 2 years?',
    options: [
      'A) Tk. 96,000',
      'B) Tk. 97,200',
      'C) Tk. 100,000',
      'D) Tk. 98,400'
    ],
    correctOption: 1,
    solution: 'Depreciated Value = P × (1 - r)ⁿ = 120,000 × (1 - 0.10)² = 120,000 × (0.90)² = 120,000 × 0.81 = Tk. 97,200.',
    tags: ['Math', 'Compound Depreciation', 'Commercial Math', 'Aptitude'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'Two software developers, Arif and Bablu, working together can complete an API integration module in 12 days. If Arif alone can complete it in 20 days, how many days will Bablu alone take to finish the module?',
    options: [
      'A) 25 days',
      'B) 30 days',
      'C) 32 days',
      'D) 36 days'
    ],
    correctOption: 1,
    solution: 'Combined rate = 1/12 per day. Arif\'s rate = 1/20 per day. Bablu\'s rate = 1/12 - 1/20 = (5 - 3) / 60 = 2 / 60 = 1 / 30 per day. Therefore, Bablu alone takes 30 days.',
    tags: ['Math', 'Time and Work', 'Aptitude'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A train 150 meters long travelling at a uniform speed of 54 km/h passes a railway bridge in 20 seconds. What is the length of the railway bridge?',
    options: [
      'A) 120 meters',
      'B) 150 meters',
      'C) 180 meters',
      'D) 200 meters'
    ],
    correctOption: 1,
    solution: 'Speed in m/s = 54 × (5 / 18) = 15 m/s. Total distance covered in 20 s = Speed × Time = 15 × 20 = 300 meters. Total distance = Train Length + Bridge Length => 300 = 150 + Bridge Length => Bridge Length = 300 - 150 = 150 meters.',
    tags: ['Math', 'Speed and Distance', 'Trains'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'In how many different ways can a panel of 5 software engineers be selected from a pool of 8 frontend developers and 6 backend developers such that the panel contains exactly 3 frontend and 2 backend developers?',
    options: [
      'A) 560 ways',
      'B) 840 ways',
      'C) 672 ways',
      'D) 720 ways'
    ],
    correctOption: 1,
    solution: 'Selection ways = 8C3 × 6C2. 8C3 = (8 × 7 × 6) / (3 × 2 × 1) = 56. 6C2 = (6 × 5) / (2 × 1) = 15. Total ways = 56 × 15 = 840 ways.',
    tags: ['Math', 'Combinations', 'Probability', 'Factorials'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'If the roots of the quadratic equation x² - kx + 16 = 0 are equal, what are the possible values of k?',
    options: [
      'A) ±4',
      'B) ±8',
      'C) ±16',
      'D) ±2'
    ],
    correctOption: 1,
    solution: 'For equal real roots, the discriminant must be zero: D = b² - 4ac = 0 => (-k)² - 4(1)(16) = 0 => k² - 64 = 0 => k² = 64 => k = ±8.',
    tags: ['Math', 'Algebra', 'Quadratic Equations', 'Discriminant'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A fair six-sided die is rolled twice. What is the probability that the sum of the numbers appearing on top is equal to 8?',
    options: [
      'A) 5/36',
      'B) 1/6',
      'C) 7/36',
      'D) 1/9'
    ],
    correctOption: 0,
    solution: 'Total sample space outcomes = 6 × 6 = 36. Outcomes with sum = 8 are: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2) => exactly 5 favorable outcomes. Probability = 5/36.',
    tags: ['Math', 'Probability', 'Dice'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The ratio of the radius of two cylindrical data storage containers is 2:3, and the ratio of their heights is 5:4. What is the ratio of their volumes?',
    options: [
      'A) 5:9',
      'B) 10:12',
      'C) 20:27',
      'D) 4:9'
    ],
    correctOption: 0,
    solution: 'Volume of cylinder V = π r² h. Ratio V1 / V2 = (r1 / r2)² × (h1 / h2) = (2 / 3)² × (5 / 4) = (4 / 9) × (5 / 4) = 5 / 9 (or 5:9).',
    tags: ['Math', 'Geometry', 'Mensuration', 'Cylinders'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'Find the sum of the first 20 terms of the arithmetic progression (AP): 3, 7, 11, 15, ...',
    options: [
      'A) 780',
      'B) 820',
      'C) 840',
      'D) 800'
    ],
    correctOption: 1,
    solution: 'First term a = 3, common difference d = 7 - 3 = 4, n = 20. Sum Sn = (n / 2) × [2a + (n - 1)d] = (20 / 2) × [2(3) + (19 × 4)] = 10 × [6 + 76] = 10 × 82 = 820.',
    tags: ['Math', 'Arithmetic Progression', 'Sequences and Series'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A shopkeeper marks an IT accessory 40% above the cost price and allows a cash discount of 15% on the marked price. What is his net gain percentage?',
    options: [
      'A) 19%',
      'B) 20%',
      'C) 22%',
      'D) 25%'
    ],
    correctOption: 0,
    solution: 'Let Cost Price CP = 100. Marked Price MP = 140. Selling Price SP = 140 × (1 - 0.15) = 140 × 0.85 = 119. Net gain = 119 - 100 = 19%.',
    tags: ['Math', 'Profit and Loss', 'Discount', 'Percentages'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'What is the value of log₂(64) + log₃(81) - log₅(125)?',
    options: [
      'A) 5',
      'B) 7',
      'C) 8',
      'D) 6'
    ],
    correctOption: 1,
    solution: 'log₂(64) = log₂(2⁶) = 6. log₃(81) = log₃(3⁴) = 4. log₅(125) = log₅(5³) = 3. Expression = 6 + 4 - 3 = 7.',
    tags: ['Math', 'Logarithms', 'Algebra'],
    difficulty: 'Easy'
  }
];
