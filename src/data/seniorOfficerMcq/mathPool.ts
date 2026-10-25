import { McqQuestionDef } from './types';

export const mathQuestionsPool: McqQuestionDef[] = [
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A bank deposit of Tk. 50,000 earns compound interest compounded annually at 10% per annum. What is the total interest earned at the end of 3 years?',
    options: [
      'A) Tk. 15,000',
      'B) Tk. 16,550',
      'C) Tk. 17,200',
      'D) Tk. 16,000'
    ],
    correctOption: 1,
    solution: 'Compound Amount A = P(1 + r)ⁿ = 50,000 × (1.10)³ = 50,000 × 1.331 = Tk. 66,550. Total Compound Interest = A - P = 66,550 - 50,000 = Tk. 16,550.',
    tags: ['Math', 'Compound Interest', 'Commercial Math', 'Banking Aptitude'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'If the difference between Compound Interest and Simple Interest on a certain sum of money for 2 years at 8% per annum is Tk. 128, find the principal sum.',
    options: [
      'A) Tk. 18,000',
      'B) Tk. 20,000',
      'C) Tk. 24,000',
      'D) Tk. 25,000'
    ],
    correctOption: 1,
    solution: 'The formula for the difference between CI and SI for 2 years is: Difference = P × (r / 100)². Here, 128 = P × (8 / 100)² = P × (64 / 10,000) => P = (128 × 10,000) / 64 = 2 × 10,000 = Tk. 20,000.',
    tags: ['Math', 'CI vs SI', 'Principal Calculation', 'Formulas'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A merchant sells an electronic server at a 20% profit. If the cost price was 10% less and the selling price was Tk. 1,000 less, he would have gained 25%. What is the cost price of the server?',
    options: [
      'A) Tk. 13,333.33',
      'B) Tk. 12,000',
      'C) Tk. 15,000',
      'D) Tk. 14,000'
    ],
    correctOption: 0,
    solution: 'Let Cost Price = C. Original SP₁ = 1.20C. New CP₂ = 0.90C. New SP₂ = 1.20C - 1,000. With 25% gain: SP₂ = 1.25 × CP₂ => 1.20C - 1,000 = 1.25 × 0.90C = 1.125C. 0.075C = 1,000 => C = 1,000 / 0.075 = Tk. 13,333.33.',
    tags: ['Math', 'Profit and Loss', 'Algebra', 'Commercial Math'],
    difficulty: 'Hard'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'Pipe A can fill a tank in 12 hours, and Pipe B can fill it in 15 hours. If both pipes are opened together, how many hours will it take to fill the tank?',
    options: [
      'A) 6 hours 40 minutes (6.67 hours)',
      'B) 7 hours',
      'C) 5 hours 30 minutes',
      'D) 8 hours'
    ],
    correctOption: 0,
    solution: 'Pipe A rate = 1/12 per hour, Pipe B rate = 1/15 per hour. Combined rate = 1/12 + 1/15 = (5 + 4)/60 = 9/60 = 3/20. Total time required = 20/3 hours = 6 hours and (2/3 × 60) = 6 hours 40 minutes.',
    tags: ['Math', 'Pipes and Cisterns', 'Time and Work'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A train 180 meters long is traveling at 72 km/h. How many seconds will it take to completely cross an electric pole on the platform?',
    options: [
      'A) 7.5 seconds',
      'B) 9 seconds',
      'C) 10 seconds',
      'D) 12 seconds'
    ],
    correctOption: 1,
    solution: 'Speed in m/s = 72 × (5 / 18) = 20 m/s. To cross a stationary pole, the train must cover its own length of 180 meters. Time = Distance / Speed = 180 / 20 = 9 seconds.',
    tags: ['Math', 'Speed and Distance', 'Trains', 'Unit Conversion'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A boat travels 24 km downstream in 2 hours and takes 4 hours to return the same distance upstream. What is the speed of the water current in km/h?',
    options: [
      'A) 2 km/h',
      'B) 3 km/h',
      'C) 4 km/h',
      'D) 1.5 km/h'
    ],
    correctOption: 1,
    solution: 'Downstream speed (u + v) = 24 / 2 = 12 km/h. Upstream speed (u - v) = 24 / 4 = 6 km/h. Speed of current v = (Downstream - Upstream) / 2 = (12 - 6) / 2 = 3 km/h.',
    tags: ['Math', 'Boats and Streams', 'Relative Speed'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'In how many different ways can the letters of the word "DATABASE" be arranged?',
    options: [
      'A) 40,320',
      'B) 6,720',
      'C) 5,040',
      'D) 10,080'
    ],
    correctOption: 1,
    solution: 'The word "DATABASE" contains 8 letters in total, with letter "A" repeating 3 times (D, A, T, A, B, A, S, E). Total arrangements = 8! / 3! = 40,320 / 6 = 6,720 ways.',
    tags: ['Math', 'Permutation', 'Combinatorics', 'Factorials'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A bag contains 5 red balls, 4 blue balls, and 3 green balls. If two balls are drawn at random without replacement, what is the probability that both balls are red?',
    options: [
      'A) 5/33',
      'B) 5/36',
      'C) 1/6',
      'D) 2/11'
    ],
    correctOption: 0,
    solution: 'Total balls = 5 + 4 + 3 = 12. Favorable ways of choosing 2 red balls = 5C2 = (5 × 4) / 2 = 10. Total possible ways of choosing 2 balls = 12C2 = (12 × 11) / 2 = 66. Probability = 10 / 66 = 5 / 33.',
    tags: ['Math', 'Probability', 'Combinations'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'If log₁₀(x) + log₁₀(x - 3) = 1, what is the valid value of x?',
    options: [
      'A) 5',
      'B) -2',
      'C) 6',
      'D) 4'
    ],
    correctOption: 0,
    solution: 'Using log properties: log₁₀(x(x - 3)) = 1 => x(x - 3) = 10¹ => x² - 3x - 10 = 0. Factoring: (x - 5)(x + 2) = 0 => x = 5 or x = -2. Since the logarithm of a negative number is undefined in real numbers, x must be 5.',
    tags: ['Math', 'Logarithms', 'Algebra', 'Quadratic Equations'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The ratio of the areas of two similar triangles is 49:64. What is the ratio of their corresponding altitudes?',
    options: [
      'A) 49:64',
      'B) 7:8',
      'C) 343:512',
      'D) 14:16'
    ],
    correctOption: 1,
    solution: 'The ratio of the areas of two similar triangles equals the square of the ratio of their corresponding linear dimensions (sides, medians, or altitudes). Therefore, Altitude Ratio = √(49 / 64) = 7:8.',
    tags: ['Math', 'Geometry', 'Triangles', 'Similar Figures'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The average age of a committee of 8 members is 40 years. A member aged 55 retires and a new member joins, reducing the average age by 1 year. What is the age of the new member?',
    options: [
      'A) 45 years',
      'B) 47 years',
      'C) 48 years',
      'D) 50 years'
    ],
    correctOption: 1,
    solution: 'Original sum of ages = 8 × 40 = 320. New average = 40 - 1 = 39 years. New sum of ages = 8 × 39 = 312 years. Age of new member = 312 - (320 - 55) = 312 - 265 = 47 years.',
    tags: ['Math', 'Averages', 'Aptitude'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'Find the greatest number that will divide 148, 246, and 623 leaving remainders 4, 6, and 11 respectively.',
    options: [
      'A) 12',
      'B) 14',
      'C) 16',
      'D) 18'
    ],
    correctOption: 0,
    solution: 'The numbers that must be divided exactly without remainder are 148 - 4 = 144, 246 - 6 = 240, and 623 - 11 = 612. HCF(144, 240, 612) = 12. Thus, 12 is the greatest required divisor.',
    tags: ['Math', 'HCF and LCM', 'Number Theory'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'In a 60-liter mixture of milk and water, the ratio of milk to water is 2:1. How many liters of water must be added to make the ratio 1:2?',
    options: [
      'A) 40 liters',
      'B) 50 liters',
      'C) 60 liters',
      'D) 80 liters'
    ],
    correctOption: 2,
    solution: 'Milk = (2/3) × 60 = 40 liters; Water = (1/3) × 60 = 20 liters. To make the ratio 1:2, milk remains 40 liters and represents 1 part, so water must be 40 × 2 = 80 liters. Water to be added = 80 - 20 = 60 liters.',
    tags: ['Math', 'Ratios', 'Mixtures', 'Arithmetic'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A and B together can do a piece of work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can all three working together complete the work?',
    options: [
      'A) 8 days',
      'B) 10 days',
      'C) 12 days',
      'D) 14 days'
    ],
    correctOption: 1,
    solution: '2(A + B + C)\'s daily work = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5. (A + B + C)\'s 1-day work = 1/10. Hence, together they finish the work in 10 days.',
    tags: ['Math', 'Time and Work', 'Aptitude'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'If x + 1/x = 4, what is the value of x² + 1/x²?',
    options: [
      'A) 14',
      'B) 16',
      'C) 18',
      'D) 12'
    ],
    correctOption: 0,
    solution: 'Squaring both sides: (x + 1/x)² = 4² => x² + 2 + 1/x² = 16 => x² + 1/x² = 16 - 2 = 14.',
    tags: ['Math', 'Algebra', 'Identities'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'Two numbers are in the ratio 3:4. If their Least Common Multiple (LCM) is 180, what is the smaller of the two numbers?',
    options: [
      'A) 36',
      'B) 45',
      'C) 60',
      'D) 40'
    ],
    correctOption: 1,
    solution: 'Let the numbers be 3x and 4x. Their LCM is 12x. Given 12x = 180 => x = 15. The smaller number is 3 × 15 = 45, and the larger is 4 × 15 = 60.',
    tags: ['Math', 'HCF and LCM', 'Ratios'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A vendor buys 11 pens for Tk. 10 and sells 10 pens for Tk. 11. What is his percentage profit?',
    options: [
      'A) 11%',
      'B) 21%',
      'C) 20%',
      'D) 25%'
    ],
    correctOption: 1,
    solution: 'Cost of 1 pen = 10/11 Tk. Selling price of 1 pen = 11/10 Tk. Profit per pen = 11/10 - 10/11 = (121 - 100)/110 = 21/110 Tk. Profit % = (Profit / CP) × 100 = [(21/110) / (10/11)] × 100 = (21/110) × (11/10) × 100 = 21%.',
    tags: ['Math', 'Profit and Loss', 'Commercial Math'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'In an examination, 70% of candidates passed in English, 80% passed in Mathematics, and 10% failed in both subjects. If 144 candidates passed in both subjects, find the total number of candidates who appeared.',
    options: [
      'A) 200',
      'B) 240',
      'C) 250',
      'D) 300'
    ],
    correctOption: 1,
    solution: 'Percentage failed in English = 30%, in Math = 20%, in both = 10%. Percentage failed in at least one subject = 30 + 20 - 10 = 40%. Percentage passed in both subjects = 100 - 40 = 60%. Given 60% of Total = 144 => Total = (144 × 100) / 60 = 240 candidates.',
    tags: ['Math', 'Sets', 'Percentages', 'Venn Diagrams'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'At what rate of simple interest per annum will a sum of money double itself in 8 years?',
    options: [
      'A) 10%',
      'B) 12.5%',
      'C) 15%',
      'D) 8%'
    ],
    correctOption: 1,
    solution: 'For the sum to double, Interest I = Principal P. Using I = (P × r × t) / 100 => P = (P × r × 8) / 100 => 8r = 100 => r = 12.5% per annum.',
    tags: ['Math', 'Simple Interest', 'Banking Math'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'What is the angle between the hour hand and the minute hand of a clock at 3:30?',
    options: [
      'A) 70°',
      'B) 75°',
      'C) 80°',
      'D) 90°'
    ],
    correctOption: 1,
    solution: 'Angle formula: |30H - (11/2)M| = |30(3) - (11/2)(30)| = |90 - 165| = |-75°| = 75°.',
    tags: ['Math', 'Clock Problems', 'Angles'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The area of a circle is 154 cm². What is the perimeter (circumference) of the circle? (Take π = 22/7)',
    options: [
      'A) 44 cm',
      'B) 88 cm',
      'C) 42 cm',
      'D) 22 cm'
    ],
    correctOption: 0,
    solution: 'Area = π r² = 154 => (22/7) r² = 154 => r² = 49 => r = 7 cm. Circumference = 2 π r = 2 × (22/7) × 7 = 44 cm.',
    tags: ['Math', 'Geometry', 'Circle', 'Mensuration'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'In how many different ways can 6 bank executives be seated around a circular conference table?',
    options: [
      'A) 720 ways',
      'B) 120 ways',
      'C) 60 ways',
      'D) 24 ways'
    ],
    correctOption: 1,
    solution: 'The number of circular permutations of n distinct objects is (n - 1)!. For 6 people, arrangements = (6 - 1)! = 5! = 5 × 4 × 3 × 2 × 1 = 120 ways.',
    tags: ['Math', 'Circular Permutation', 'Combinatorics'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A card is drawn from a well-shuffled pack of 52 playing cards. What is the probability that the card drawn is either a King or a Heart?',
    options: [
      'A) 4/13',
      'B) 17/52',
      'C) 1/4',
      'D) 3/13'
    ],
    correctOption: 0,
    solution: 'Total cards = 52. Number of Kings = 4. Number of Hearts = 13. King of Hearts is common to both = 1 card. Favorable cards = 4 + 13 - 1 = 16 cards. Probability = 16 / 52 = 4 / 13.',
    tags: ['Math', 'Probability', 'Cards'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The length of the diagonal of a square plot is 10 meters. What is the area of the square in square meters?',
    options: [
      'A) 100 sq m',
      'B) 50 sq m',
      'C) 25 sq m',
      'D) 75 sq m'
    ],
    correctOption: 1,
    solution: 'Area of a square = (diagonal)² / 2 = 10² / 2 = 100 / 2 = 50 square meters.',
    tags: ['Math', 'Geometry', 'Square', 'Area'],
    difficulty: 'Easy'
  }
];
