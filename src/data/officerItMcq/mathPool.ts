import { OfficerMcqQuestionDef } from './types';

export const officerMathQuestionsPool: OfficerMcqQuestionDef[] = [
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A bank customer opens a fixed deposit with Tk. 20,000 at a simple interest rate of 6% per annum. What will be the total interest earned after 4 years?',
    options: [
      'A) Tk. 4,200',
      'B) Tk. 4,800',
      'C) Tk. 5,000',
      'D) Tk. 4,500'
    ],
    correctOption: 1,
    solution: 'Simple Interest I = (P × r × t) / 100 = (20,000 × 6 × 4) / 100 = 200 × 24 = Tk. 4,800.',
    tags: ['Math', 'Simple Interest', 'Banking Aptitude', 'Commercial Math'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'An item is purchased for Tk. 800 and sold for Tk. 1,000. What is the percentage profit earned on the cost price?',
    options: [
      'A) 20%',
      'B) 25%',
      'C) 30%',
      'D) 15%'
    ],
    correctOption: 1,
    solution: 'Profit = Selling Price - Cost Price = 1,000 - 800 = Tk. 200. Profit % = (Profit / Cost Price) × 100 = (200 / 800) × 100 = 25%.',
    tags: ['Math', 'Profit and Loss', 'Percentages'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A and B invest in a joint business in the ratio 3:5. If the total annual profit is Tk. 96,000, what is B’s share of the profit?',
    options: [
      'A) Tk. 36,000',
      'B) Tk. 60,000',
      'C) Tk. 48,000',
      'D) Tk. 54,000'
    ],
    correctOption: 1,
    solution: 'Sum of ratio parts = 3 + 5 = 8. B’s share = (5 / 8) × 96,000 = 5 × 12,000 = Tk. 60,000.',
    tags: ['Math', 'Ratio and Proportion', 'Partnership'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'If 15 bank IT technicians can set up 150 computer terminals in 6 days, how many terminals can 10 technicians set up in 9 days at the same working rate?',
    options: [
      'A) 120 terminals',
      'B) 150 terminals',
      'C) 160 terminals',
      'D) 180 terminals'
    ],
    correctOption: 1,
    solution: 'Using the work formula (M1 × D1) / W1 = (M2 × D2) / W2: (15 × 6) / 150 = (10 × 9) / W2 => 90 / 150 = 90 / W2 => W2 = 150 terminals.',
    tags: ['Math', 'Time and Work', 'Unitary Method'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A car travels a distance of 180 km in 3 hours. If its speed is increased by 15 km/h, how much time will it take to travel the same distance?',
    options: [
      'A) 2 hours',
      'B) 2 hours 24 minutes (2.4 hours)',
      'C) 2 hours 30 minutes',
      'D) 2 hours 15 minutes'
    ],
    correctOption: 1,
    solution: 'Initial speed = 180 / 3 = 60 km/h. New speed = 60 + 15 = 75 km/h. Time taken = Distance / Speed = 180 / 75 = 12 / 5 = 2.4 hours = 2 hours and (0.4 × 60) = 2 hours 24 minutes.',
    tags: ['Math', 'Speed and Distance', 'Time'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The perimeter of a rectangular IT server room is 56 meters. If its length is 16 meters, what is its floor area in square meters?',
    options: [
      'A) 192 sq m',
      'B) 180 sq m',
      'C) 210 sq m',
      'D) 176 sq m'
    ],
    correctOption: 0,
    solution: 'Perimeter P = 2 × (Length + Width) => 56 = 2 × (16 + Width) => 16 + Width = 28 => Width = 12 meters. Area = Length × Width = 16 × 12 = 192 sq meters.',
    tags: ['Math', 'Geometry', 'Perimeter and Area', 'Mensuration'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'If 3x + 5 = 26, what is the value of 5x - 7?',
    options: [
      'A) 21',
      'B) 28',
      'C) 35',
      'D) 18'
    ],
    correctOption: 1,
    solution: '3x + 5 = 26 => 3x = 21 => x = 7. Substituting x = 7: 5x - 7 = 5(7) - 7 = 35 - 7 = 28.',
    tags: ['Math', 'Algebra', 'Linear Equations'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The average salary of 5 IT officers in a bank branch is Tk. 45,000. When a Senior Officer IT is included, the average salary becomes Tk. 48,000. What is the salary of the Senior Officer?',
    options: [
      'A) Tk. 58,000',
      'B) Tk. 63,000',
      'C) Tk. 60,000',
      'D) Tk. 65,000'
    ],
    correctOption: 1,
    solution: 'Total salary of 5 officers = 5 × 45,000 = Tk. 225,000. Total salary of 6 staff = 6 × 48,000 = Tk. 288,000. Senior Officer salary = 288,000 - 225,000 = Tk. 63,000.',
    tags: ['Math', 'Averages', 'Arithmetic'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'What is the value of 2⁴ × 2³ ÷ 2⁵?',
    options: [
      'A) 2',
      'B) 4',
      'C) 8',
      'D) 16'
    ],
    correctOption: 1,
    solution: 'Using exponent laws: 2^(4 + 3 - 5) = 2^(7 - 5) = 2² = 4.',
    tags: ['Math', 'Exponents', 'Algebra'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A single discount equivalent to two successive discounts of 20% and 10% is equal to:',
    options: [
      'A) 30%',
      'B) 28%',
      'C) 26%',
      'D) 25%'
    ],
    correctOption: 1,
    solution: 'Equivalent discount formula: d = d1 + d2 - (d1 × d2) / 100 = 20 + 10 - (20 × 10) / 100 = 30 - 2 = 28%.',
    tags: ['Math', 'Successive Discounts', 'Commercial Math'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A sum of Tk. 12,500 amounts to Tk. 15,500 in 4 years at simple interest. What is the rate of interest per annum?',
    options: [
      'A) 5%',
      'B) 6%',
      'C) 7%',
      'D) 8%'
    ],
    correctOption: 1,
    solution: 'Interest I = 15,500 - 12,500 = Tk. 3,000. Rate r = (I × 100) / (P × t) = (3,000 × 100) / (12,500 × 4) = 300,000 / 50,000 = 6%.',
    tags: ['Math', 'Simple Interest', 'Banking Aptitude'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'If 12 men or 18 women can harvest a field in 14 days, in how many days can 8 men and 16 women harvest the same field?',
    options: [
      'A) 8 days',
      'B) 9 days',
      'C) 10 days',
      'D) 12 days'
    ],
    correctOption: 1,
    solution: '12 Men = 18 Women => 1 Man = 1.5 Women. 8 Men = 8 × 1.5 = 12 Women. Total women = 12 + 16 = 28 Women. Using M1 × D1 = M2 × D2: 18 × 14 = 28 × D2 => D2 = (18 × 14) / 28 = 18 / 2 = 9 days.',
    tags: ['Math', 'Time and Work', 'Men and Women'],
    difficulty: 'Medium'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'What is the compound interest on Tk. 10,000 for 2 years at 10% per annum, compounded annually?',
    options: [
      'A) Tk. 2,000',
      'B) Tk. 2,100',
      'C) Tk. 2,200',
      'D) Tk. 1,900'
    ],
    correctOption: 1,
    solution: 'Amount A = 10,000 × (1.10)² = 10,000 × 1.21 = Tk. 12,100. CI = 12,100 - 10,000 = Tk. 2,100.',
    tags: ['Math', 'Compound Interest', 'Banking Math'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The ratio of boys to girls in a computer training class is 4:5. If there are 36 boys, what is the total number of students in the class?',
    options: [
      'A) 72',
      'B) 81',
      'C) 90',
      'D) 85'
    ],
    correctOption: 1,
    solution: '4 parts = 36 => 1 part = 9. Girls = 5 × 9 = 45. Total students = 36 + 45 = 81.',
    tags: ['Math', 'Ratios', 'Proportions'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A train 240 meters long crosses a platform 160 meters long in 20 seconds. What is the speed of the train in km/h?',
    options: [
      'A) 60 km/h',
      'B) 72 km/h',
      'C) 80 km/h',
      'D) 54 km/h'
    ],
    correctOption: 1,
    solution: 'Total distance = 240 + 160 = 400 meters. Speed in m/s = 400 / 20 = 20 m/s. Speed in km/h = 20 × (18 / 5) = 72 km/h.',
    tags: ['Math', 'Speed and Distance', 'Trains'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'If a worker’s monthly salary is increased by 20% and then decreased by 20%, what is the net percentage change in his salary?',
    options: [
      'A) 0% (no change)',
      'B) 4% decrease',
      'C) 4% increase',
      'D) 2% decrease'
    ],
    correctOption: 1,
    solution: 'Let initial salary = 100. After 20% increase: 120. After 20% decrease: 120 × 0.80 = 96. Net change = 96 - 100 = 4% decrease.',
    tags: ['Math', 'Percentages', 'Successive Change'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The average of 5 consecutive odd integers is 25. What is the smallest of these numbers?',
    options: [
      'A) 21',
      'B) 23',
      'C) 19',
      'D) 25'
    ],
    correctOption: 0,
    solution: 'The average of 5 consecutive odd numbers is the middle number (the 3rd number), which is 25. The numbers are 21, 23, 25, 27, 29. The smallest number is 21.',
    tags: ['Math', 'Averages', 'Odd Integers'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'What is the Highest Common Factor (HCF) of 36, 54, and 90?',
    options: [
      'A) 9',
      'B) 18',
      'C) 27',
      'D) 12'
    ],
    correctOption: 1,
    solution: '36 = 18 × 2, 54 = 18 × 3, 90 = 18 × 5. The greatest common factor dividing all three numbers is 18.',
    tags: ['Math', 'HCF and LCM', 'Number Theory'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'The price of an office chair is Tk. 2,400 after a 20% discount. What was the original list price of the chair?',
    options: [
      'A) Tk. 2,800',
      'B) Tk. 3,000',
      'C) Tk. 3,200',
      'D) Tk. 2,900'
    ],
    correctOption: 1,
    solution: 'Discounted price = 80% of List Price => 0.80 × List Price = 2,400 => List Price = 2,400 / 0.80 = Tk. 3,000.',
    tags: ['Math', 'Discount', 'Commercial Math'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'If 2^(x - 1) = 32, what is the value of x?',
    options: [
      'A) 5',
      'B) 6',
      'C) 7',
      'D) 4'
    ],
    correctOption: 1,
    solution: '32 = 2⁵. So 2^(x - 1) = 2⁵ => x - 1 = 5 => x = 6.',
    tags: ['Math', 'Exponents', 'Algebra'],
    difficulty: 'Easy'
  },
  {
    topicCategory: 'Non-Technical & Language',
    questionText: 'A pipe can empty a cistern in 8 hours. If the cistern is full and a second pipe fills it at 3 liters per minute, and both pipes together empty it in 12 hours, find the capacity of the cistern.',
    options: [
      'A) 3,600 liters',
      'B) 4,320 liters',
      'C) 5,400 liters',
      'D) 4,800 liters'
    ],
    correctOption: 1,
    solution: 'Emptying pipe rate = -1/8 per hour. Net rate = -1/12 per hour. Inflow pipe rate = -1/12 - (-1/8) = -1/12 + 1/8 = 1/24 per hour. Time for inflow pipe alone = 24 hours. Rate = 3 L/min = 180 L/hour. Capacity = 24 × 180 = 4,320 liters.',
    tags: ['Math', 'Pipes and Cisterns', 'Time and Work'],
    difficulty: 'Hard'
  }
];
