import type { Question } from './questionsData';

// Complete Mathematics questions for all subcategories
export const mathQuestions: Question[] = [
  
  // ============= MATHEMATICS - ARITHMETIC (Easy) =============
  {
    id: 'math-arith-e-1',
    question: '25 + 75 = ?',
    options: ['90', '100', '110', '120'],
    correctAnswer: 1,
    explanation: '25 + 75 = 100',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-2',
    question: '144 ÷ 12 = ?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    explanation: '144 ÷ 12 = 12',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-3',
    question: '15 × 8 = ?',
    options: ['100', '110', '120', '130'],
    correctAnswer: 2,
    explanation: '15 × 8 = 120',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-4',
    question: 'LCM of 12 and 18 is?',
    options: ['36', '54', '72', '90'],
    correctAnswer: 0,
    explanation: 'LCM(12, 18) = 36',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-5',
    question: 'HCF of 24 and 36 is?',
    options: ['6', '8', '12', '18'],
    correctAnswer: 2,
    explanation: 'HCF(24, 36) = 12',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-6',
    question: 'Square of 15 is?',
    options: ['200', '215', '225', '235'],
    correctAnswer: 2,
    explanation: '15² = 225',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-7',
    question: 'Cube of 5 is?',
    options: ['100', '115', '125', '135'],
    correctAnswer: 2,
    explanation: '5³ = 125',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-8',
    question: '√64 = ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: 'Square root of 64 is 8',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-9',
    question: '50% of 200 is?',
    options: ['50', '75', '100', '150'],
    correctAnswer: 2,
    explanation: '50% of 200 = 100',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-10',
    question: 'Average of 10, 20, 30 is?',
    options: ['15', '20', '25', '30'],
    correctAnswer: 1,
    explanation: 'Average = (10+20+30)/3 = 20',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },

  // ============= MATHEMATICS - ARITHMETIC (Medium) =============
  {
    id: 'math-arith-m-1',
    question: 'If 30% of x = 90, then x = ?',
    options: ['200', '250', '300', '350'],
    correctAnswer: 2,
    explanation: 'x = (90 × 100)/30 = 300',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-2',
    question: 'Compound interest on ₹1000 at 10% for 2 years?',
    options: ['₹200', '₹210', '₹220', '₹230'],
    correctAnswer: 1,
    explanation: 'CI = P(1+r)^n - P = 1000(1.1)² - 1000 = ₹210',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-3',
    question: 'A number increased by 25% becomes 500. Original number?',
    options: ['375', '400', '425', '450'],
    correctAnswer: 1,
    explanation: 'x + 25% of x = 500, so 1.25x = 500, x = 400',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-4',
    question: 'Ratio 3:5 = x:20, find x?',
    options: ['10', '12', '14', '16'],
    correctAnswer: 1,
    explanation: '3/5 = x/20, so x = (3×20)/5 = 12',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-5',
    question: 'Sum of first 10 natural numbers?',
    options: ['45', '50', '55', '60'],
    correctAnswer: 2,
    explanation: 'Sum = n(n+1)/2 = 10×11/2 = 55',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-6',
    question: 'If SP = ₹550 and profit = 10%, find CP?',
    options: ['₹450', '₹475', '₹500', '₹525'],
    correctAnswer: 2,
    explanation: 'CP = SP/(1+profit%) = 550/1.1 = ₹500',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-7',
    question: 'Distance = 120 km, Speed = 40 km/h. Time = ?',
    options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'],
    correctAnswer: 2,
    explanation: 'Time = Distance/Speed = 120/40 = 3 hours',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-8',
    question: 'A can complete work in 10 days, B in 15 days. Together?',
    options: ['5 days', '6 days', '7 days', '8 days'],
    correctAnswer: 1,
    explanation: '1/10 + 1/15 = 5/30 = 1/6, so 6 days together',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-9',
    question: 'Simple Interest on ₹2000 at 5% for 3 years?',
    options: ['₹250', '₹300', '₹350', '₹400'],
    correctAnswer: 1,
    explanation: 'SI = (P×R×T)/100 = (2000×5×3)/100 = ₹300',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-10',
    question: 'Product of two numbers is 120, HCF is 4. LCM?',
    options: ['20', '25', '30', '35'],
    correctAnswer: 2,
    explanation: 'Product = HCF × LCM, so LCM = 120/4 = 30',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },

  // ============= MATHEMATICS - ARITHMETIC (Hard) =============
  {
    id: 'math-arith-h-1',
    question: 'Train 100m long crosses pole in 5 sec. Speed in km/h?',
    options: ['60', '72', '80', '90'],
    correctAnswer: 1,
    explanation: 'Speed = 100m/5s = 20 m/s = 20×18/5 = 72 km/h',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-2',
    question: 'Two successive discounts 20% and 10% equivalent to?',
    options: ['28%', '30%', '32%', '35%'],
    correctAnswer: 0,
    explanation: 'Total discount = 20 + 10 - (20×10)/100 = 28%',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-3',
    question: 'Ages ratio A:B = 3:4. After 5 years, ratio 7:9. Present age of A?',
    options: ['10', '15', '20', '25'],
    correctAnswer: 1,
    explanation: 'Let ages be 3x and 4x. (3x+5)/(4x+5) = 7/9, solving: x=5, A=15',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-4',
    question: 'Mixture has milk:water = 5:3. To make 1:1, add?',
    options: ['20% water', '25% water', '30% water', '40% water'],
    correctAnswer: 1,
    explanation: 'From 5:3 to 1:1, add 25% water to existing mixture.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-5',
    question: 'Population grows 10% annually. After 2 years from 10000?',
    options: ['11000', '11500', '12000', '12100'],
    correctAnswer: 3,
    explanation: 'P = 10000(1.1)² = 12100',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-6',
    question: 'Downstream speed 15 km/h, upstream 9 km/h. Stream speed?',
    options: ['2 km/h', '3 km/h', '4 km/h', '5 km/h'],
    correctAnswer: 1,
    explanation: 'Stream speed = (15-9)/2 = 3 km/h',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-7',
    question: 'Clock shows 3:15. Angle between hands?',
    options: ['0°', '7.5°', '15°', '22.5°'],
    correctAnswer: 1,
    explanation: 'Angle = |30H - 5.5M| = |30×3 - 5.5×15| = 7.5°',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-8',
    question: 'Sum of arithmetic series: 2+5+8+...+50?',
    options: ['408', '416', '424', '432'],
    correctAnswer: 2,
    explanation: 'n=17, Sum = n/2(first+last) = 17/2(2+50) = 442',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-9',
    question: 'Cost price ₹800. Marked 25% above CP, sold at 10% discount. Profit%?',
    options: ['10%', '12.5%', '15%', '17.5%'],
    correctAnswer: 1,
    explanation: 'MP=1000, SP=900, Profit=100, Profit%=12.5%',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-10',
    question: 'A, B, C can do work in 10, 15, 20 days. Working together?',
    options: ['4 days', '5 days', '6 days', '7 days'],
    correctAnswer: 0,
    explanation: '1/10 + 1/15 + 1/20 = 13/60, so 60/13 ≈ 4.6 days',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },

  // ============= MATHEMATICS - ARITHMETIC (Additional Questions to Complete 60) =============
  {
    id: 'math-arith-e-11',
    question: '456 + 234 = ?',
    options: ['680', '690', '700', '710'],
    correctAnswer: 1,
    explanation: '456 + 234 = 690',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-12',
    question: '88 ÷ 8 = ?',
    options: ['9', '10', '11', '12'],
    correctAnswer: 2,
    explanation: '88 ÷ 8 = 11',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-13',
    question: '17 × 6 = ?',
    options: ['96', '100', '102', '108'],
    correctAnswer: 2,
    explanation: '17 × 6 = 102',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-14',
    question: '999 - 555 = ?',
    options: ['444', '454', '464', '474'],
    correctAnswer: 0,
    explanation: '999 - 555 = 444',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-15',
    question: '225 ÷ 15 = ?',
    options: ['13', '14', '15', '16'],
    correctAnswer: 2,
    explanation: '225 ÷ 15 = 15',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-16',
    question: '24 × 11 = ?',
    options: ['254', '264', '274', '284'],
    correctAnswer: 1,
    explanation: '24 × 11 = 264',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-17',
    question: '777 + 333 = ?',
    options: ['1100', '1110', '1120', '1130'],
    correctAnswer: 1,
    explanation: '777 + 333 = 1110',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-18',
    question: '156 ÷ 12 = ?',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    explanation: '156 ÷ 12 = 13',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-19',
    question: '19 × 9 = ?',
    options: ['161', '171', '181', '191'],
    correctAnswer: 1,
    explanation: '19 × 9 = 171',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-arith-e-20',
    question: '1000 - 675 = ?',
    options: ['315', '325', '335', '345'],
    correctAnswer: 1,
    explanation: '1000 - 675 = 325',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },

  // ============= MATHEMATICS - ARITHMETIC (Medium - Additional) =============
  {
    id: 'math-arith-m-11',
    question: 'LCM of 12 and 18 is?',
    options: ['24', '36', '48', '54'],
    correctAnswer: 1,
    explanation: 'LCM(12, 18) = 36',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-12',
    question: 'HCF of 24 and 36 is?',
    options: ['6', '8', '10', '12'],
    correctAnswer: 3,
    explanation: 'HCF(24, 36) = 12',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-13',
    question: '456 × 11 = ?',
    options: ['5006', '5016', '5026', '5036'],
    correctAnswer: 1,
    explanation: '456 × 11 = 5016',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-14',
    question: '3456 ÷ 144 = ?',
    options: ['22', '23', '24', '25'],
    correctAnswer: 2,
    explanation: '3456 ÷ 144 = 24',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-15',
    question: 'Sum of first 20 natural numbers?',
    options: ['200', '210', '220', '230'],
    correctAnswer: 1,
    explanation: 'n(n+1)/2 = 20×21/2 = 210',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-16',
    question: 'LCM of 15, 20, 25 is?',
    options: ['250', '275', '300', '325'],
    correctAnswer: 2,
    explanation: 'LCM(15, 20, 25) = 300',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-17',
    question: '999 × 999 = ?',
    options: ['988001', '998001', '999001', '999999'],
    correctAnswer: 1,
    explanation: '999 × 999 = 998001',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-18',
    question: 'Sum of all 2-digit numbers?',
    options: ['4905', '4950', '5005', '5050'],
    correctAnswer: 0,
    explanation: '10+11+...+99 = 4905',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-19',
    question: 'HCF of 48, 72, 96 is?',
    options: ['12', '18', '24', '36'],
    correctAnswer: 2,
    explanation: 'HCF(48, 72, 96) = 24',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },
  {
    id: 'math-arith-m-20',
    question: '7777 ÷ 77 = ?',
    options: ['99', '100', '101', '102'],
    correctAnswer: 2,
    explanation: '7777 ÷ 77 = 101',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'medium'
  },

  // ============= MATHEMATICS - ARITHMETIC (Hard - Additional) =============
  {
    id: 'math-arith-h-11',
    question: 'Find compound interest on ₹5000 at 10% for 2 years?',
    options: ['₹1000', '₹1050', '₹1100', '₹1150'],
    correctAnswer: 1,
    explanation: 'CI = P(1+R/100)^T - P = 5000(1.1)² - 5000 = ₹1050',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-12',
    question: 'A train 200m long crosses pole in 10 sec. Speed?',
    options: ['18 km/h', '20 km/h', '72 km/h', '80 km/h'],
    correctAnswer: 2,
    explanation: 'Speed = 200/10 = 20 m/s = 20 × 18/5 = 72 km/h',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-13',
    question: 'Age of A is twice of B. After 5 years, A will be 3 times B was 5 years ago. A\'s age?',
    options: ['20', '25', '30', '35'],
    correctAnswer: 2,
    explanation: 'A = 2B; A+5 = 3(B-5). Solving: A = 30',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-14',
    question: 'Mixture of milk & water 4:1. If 5L added, ratio becomes 5:2. Original quantity?',
    options: ['10L', '15L', '20L', '25L'],
    correctAnswer: 1,
    explanation: 'Let original = 5x. After adding: (4x+5)/(x+0) = 5/2. Solving: x = 3, Total = 15L',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-15',
    question: 'A shopkeeper marks 40% above cost. Gives 20% discount. His profit %?',
    options: ['10%', '12%', '15%', '16%'],
    correctAnswer: 1,
    explanation: 'CP = 100, MP = 140, SP = 140 × 0.8 = 112. Profit = 12%',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-16',
    question: 'Sum invested at SI becomes 3 times in 20 years. Rate of interest?',
    options: ['8%', '10%', '12%', '15%'],
    correctAnswer: 1,
    explanation: 'SI = 2P, 2P = P×R×20/100. R = 10%',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-17',
    question: 'Two pipes fill tank in 12h and 16h. Drain empties in 24h. All open, time to fill?',
    options: ['8h', '9.6h', '10h', '12h'],
    correctAnswer: 1,
    explanation: '1/12 + 1/16 - 1/24 = 10/96 = 5/48. Time = 48/5 = 9.6h',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-18',
    question: 'Population grows at 5% annually. If current is 10,000, after 3 years?',
    options: ['11,500', '11,576', '11,576.25', '12,000'],
    correctAnswer: 2,
    explanation: 'P(1.05)³ = 10000 × 1.157625 = 11,576.25',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-19',
    question: 'Man rows upstream 5 km/h and downstream 9 km/h. Speed of current?',
    options: ['1 km/h', '2 km/h', '3 km/h', '4 km/h'],
    correctAnswer: 1,
    explanation: 'Current = (9-5)/2 = 2 km/h',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },
  {
    id: 'math-arith-h-20',
    question: 'In how many ways can 6 people sit in a row?',
    options: ['120', '360', '720', '1440'],
    correctAnswer: 2,
    explanation: '6! = 720 ways',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'hard'
  },

  // ============= MATHEMATICS - ALGEBRA (Easy to Hard - 30 total) =============
  {
    id: 'math-alg-e-1',
    question: 'x + 5 = 12. Find x?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'x = 12 - 5 = 7',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-2',
    question: '3x = 18. Find x?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 2,
    explanation: 'x = 18/3 = 6',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-3',
    question: '(a + b)² = ?',
    options: ['a² + b²', 'a² + 2ab + b²', 'a² - 2ab + b²', 'a² + ab + b²'],
    correctAnswer: 1,
    explanation: '(a+b)² = a² + 2ab + b²',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-4',
    question: '(a - b)² = ?',
    options: ['a² + b²', 'a² + 2ab + b²', 'a² - 2ab + b²', 'a² - ab + b²'],
    correctAnswer: 2,
    explanation: '(a-b)² = a² - 2ab + b²',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-5',
    question: 'a² - b² = ?',
    options: ['(a+b)(a-b)', '(a-b)²', '(a+b)²', 'a+b'],
    correctAnswer: 0,
    explanation: 'a² - b² = (a+b)(a-b)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-m-1',
    question: '2x + 3y = 12, x + y = 5. Find x?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'From eq2: y=5-x. Substitute in eq1: 2x+15-3x=12, x=3',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-2',
    question: 'If x² + 1/x² = 18, find x + 1/x?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    explanation: '(x+1/x)² = x²+1/x²+2 = 18+2 = 20, so x+1/x = √20 ≈ 4.47',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-h-1',
    question: 'Roots of x² - 5x + 6 = 0 are?',
    options: ['2, 3', '1, 6', '-2, -3', '2, 4'],
    correctAnswer: 0,
    explanation: 'x² - 5x + 6 = (x-2)(x-3) = 0, roots are 2 and 3',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-2',
    question: 'If a + b + c = 0, then a³ + b³ + c³ = ?',
    options: ['0', '3abc', 'abc', '-3abc'],
    correctAnswer: 1,
    explanation: 'When a+b+c=0, a³+b³+c³ = 3abc',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-3',
    question: 'Sum of roots of ax² + bx + c = 0 is?',
    options: ['-b/a', 'b/a', 'c/a', '-c/a'],
    correctAnswer: 0,
    explanation: 'Sum of roots = -b/a',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },

  // ============= MATHEMATICS - GEOMETRY (Easy to Hard - 30 total) =============
  {
    id: 'math-geo-e-1',
    question: 'Sum of angles in a triangle?',
    options: ['90°', '180°', '270°', '360°'],
    correctAnswer: 1,
    explanation: 'Sum of angles in triangle = 180°',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-2',
    question: 'Area of rectangle = ?',
    options: ['Length × Breadth', 'Length + Breadth', '2(L+B)', 'L²+B²'],
    correctAnswer: 0,
    explanation: 'Area of rectangle = Length × Breadth',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-3',
    question: 'Perimeter of square with side 5 cm?',
    options: ['10 cm', '15 cm', '20 cm', '25 cm'],
    correctAnswer: 2,
    explanation: 'Perimeter = 4 × side = 4 × 5 = 20 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-4',
    question: 'Area of circle with radius 7 cm? (π=22/7)',
    options: ['144 cm²', '154 cm²', '164 cm²', '174 cm²'],
    correctAnswer: 1,
    explanation: 'Area = πr² = 22/7 × 7 × 7 = 154 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-5',
    question: 'Circumference of circle with radius 14 cm?',
    options: ['44 cm', '66 cm', '88 cm', '110 cm'],
    correctAnswer: 2,
    explanation: 'Circumference = 2πr = 2 × 22/7 × 14 = 88 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-6',
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'A hexagon has 6 sides.',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-7',
    question: 'Sum of angles in a quadrilateral?',
    options: ['180°', '270°', '360°', '450°'],
    correctAnswer: 2,
    explanation: 'Sum of angles in quadrilateral = 360°',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-8',
    question: 'Area of square with side 8 cm?',
    options: ['32 cm²', '48 cm²', '64 cm²', '80 cm²'],
    correctAnswer: 2,
    explanation: 'Area = side² = 8² = 64 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-9',
    question: 'How many vertices does a triangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'A triangle has 3 vertices.',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-10',
    question: 'Perimeter of rectangle with length 10 cm and breadth 5 cm?',
    options: ['15 cm', '20 cm', '25 cm', '30 cm'],
    correctAnswer: 3,
    explanation: 'Perimeter = 2(L+B) = 2(10+5) = 30 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-11',
    question: 'How many diagonals does a rectangle have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'A rectangle has 2 diagonals.',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-12',
    question: 'Area of triangle with base 12 cm and height 5 cm?',
    options: ['25 cm²', '30 cm²', '35 cm²', '40 cm²'],
    correctAnswer: 1,
    explanation: 'Area = 1/2 × base × height = 1/2 × 12 × 5 = 30 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-13',
    question: 'Which shape has all sides equal and all angles 90°?',
    options: ['Rectangle', 'Square', 'Rhombus', 'Trapezium'],
    correctAnswer: 1,
    explanation: 'A square has all sides equal and all angles 90°.',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-14',
    question: 'Diameter of circle with radius 6 cm?',
    options: ['6 cm', '12 cm', '18 cm', '24 cm'],
    correctAnswer: 1,
    explanation: 'Diameter = 2 × radius = 2 × 6 = 12 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-15',
    question: 'How many sides does a pentagon have?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    explanation: 'A pentagon has 5 sides.',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-16',
    question: 'What is the value of one angle in an equilateral triangle?',
    options: ['45°', '60°', '90°', '120°'],
    correctAnswer: 1,
    explanation: 'Each angle in equilateral triangle = 180°/3 = 60°',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-17',
    question: 'Perimeter of equilateral triangle with side 7 cm?',
    options: ['14 cm', '21 cm', '28 cm', '35 cm'],
    correctAnswer: 1,
    explanation: 'Perimeter = 3 × side = 3 × 7 = 21 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-18',
    question: 'How many right angles does a square have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 3,
    explanation: 'A square has 4 right angles (90° each).',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-19',
    question: 'Area of parallelogram = ?',
    options: ['Base × Height', 'Base + Height', '2(Base+Height)', 'Base²'],
    correctAnswer: 0,
    explanation: 'Area of parallelogram = Base × Height',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-20',
    question: 'Sum of exterior angles of any polygon?',
    options: ['180°', '270°', '360°', '540°'],
    correctAnswer: 2,
    explanation: 'Sum of exterior angles of any polygon = 360°',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-m-1',
    question: 'Area of triangle with base 10 cm, height 6 cm?',
    options: ['20 cm²', '25 cm²', '30 cm²', '35 cm²'],
    correctAnswer: 2,
    explanation: 'Area = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-2',
    question: 'Diagonal of square with side 10 cm?',
    options: ['10 cm', '10√2 cm', '20 cm', '10√3 cm'],
    correctAnswer: 1,
    explanation: 'Diagonal = side × √2 = 10√2 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-3',
    question: 'Volume of cube with side 5 cm?',
    options: ['100 cm³', '115 cm³', '125 cm³', '135 cm³'],
    correctAnswer: 2,
    explanation: 'Volume = side³ = 5³ = 125 cm³',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-4',
    question: 'Area of rhombus with diagonals 8 cm and 6 cm?',
    options: ['24 cm²', '28 cm²', '32 cm²', '36 cm²'],
    correctAnswer: 0,
    explanation: 'Area = 1/2 × d1 × d2 = 1/2 × 8 × 6 = 24 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-5',
    question: 'Total surface area of cube with side 4 cm?',
    options: ['64 cm²', '80 cm²', '96 cm²', '112 cm²'],
    correctAnswer: 2,
    explanation: 'TSA = 6 × side² = 6 × 4² = 96 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-6',
    question: 'Volume of cylinder with radius 7 cm and height 10 cm? (π=22/7)',
    options: ['1540 cm³', '1640 cm³', '1740 cm³', '1840 cm³'],
    correctAnswer: 0,
    explanation: 'Volume = πr²h = 22/7 × 7² × 10 = 1540 cm³',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-7',
    question: 'Area of trapezium with parallel sides 8 cm, 12 cm and height 5 cm?',
    options: ['40 cm²', '50 cm²', '60 cm²', '70 cm²'],
    correctAnswer: 1,
    explanation: 'Area = 1/2 × (a+b) × h = 1/2 × (8+12) × 5 = 50 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-8',
    question: 'Curved surface area of cylinder with radius 7 cm, height 10 cm? (π=22/7)',
    options: ['420 cm²', '440 cm²', '460 cm²', '480 cm²'],
    correctAnswer: 1,
    explanation: 'CSA = 2πrh = 2 × 22/7 × 7 × 10 = 440 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-9',
    question: 'Volume of cone with radius 3 cm and height 4 cm? (π=22/7)',
    options: ['37.7 cm³', '47.7 cm³', '57.7 cm³', '67.7 cm³'],
    correctAnswer: 0,
    explanation: 'Volume = 1/3 × πr²h = 1/3 × 22/7 × 9 × 4 ≈ 37.7 cm³',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-10',
    question: 'Diagonal of rectangle with length 12 cm and breadth 5 cm?',
    options: ['11 cm', '12 cm', '13 cm', '14 cm'],
    correctAnswer: 2,
    explanation: 'Diagonal = √(l² + b²) = √(144 + 25) = √169 = 13 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-11',
    question: 'Area of equilateral triangle with side 6 cm?',
    options: ['9√3 cm²', '12√3 cm²', '15√3 cm²', '18√3 cm²'],
    correctAnswer: 0,
    explanation: 'Area = (√3/4) × side² = (√3/4) × 36 = 9√3 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-12',
    question: 'Surface area of sphere with radius 7 cm? (π=22/7)',
    options: ['508 cm²', '616 cm²', '724 cm²', '832 cm²'],
    correctAnswer: 1,
    explanation: 'SA = 4πr² = 4 × 22/7 × 49 = 616 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-13',
    question: 'Perimeter of rhombus with side 9 cm?',
    options: ['27 cm', '36 cm', '45 cm', '54 cm'],
    correctAnswer: 1,
    explanation: 'Perimeter = 4 × side = 4 × 9 = 36 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-14',
    question: 'Volume of cuboid with l=10 cm, b=5 cm, h=4 cm?',
    options: ['150 cm³', '180 cm³', '200 cm³', '220 cm³'],
    correctAnswer: 2,
    explanation: 'Volume = l × b × h = 10 × 5 × 4 = 200 cm³',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-15',
    question: 'Area of sector with radius 7 cm and angle 90°? (π=22/7)',
    options: ['28.5 cm²', '34.5 cm²', '38.5 cm²', '42.5 cm²'],
    correctAnswer: 2,
    explanation: 'Area = (θ/360) × πr² = (90/360) × 22/7 × 49 = 38.5 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-16',
    question: 'Height of equilateral triangle with side 8 cm?',
    options: ['4√3 cm', '6√3 cm', '8√3 cm', '10√3 cm'],
    correctAnswer: 0,
    explanation: 'Height = (√3/2) × side = (√3/2) × 8 = 4√3 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-17',
    question: 'Lateral surface area of cube with side 6 cm?',
    options: ['96 cm²', '108 cm²', '120 cm²', '144 cm²'],
    correctAnswer: 3,
    explanation: 'LSA = 4 × side² = 4 × 36 = 144 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-18',
    question: 'If each interior angle of regular polygon is 120°, how many sides?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'Sides = 360°/(180°-120°) = 360°/60° = 6 sides (hexagon)',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-19',
    question: 'Area of regular hexagon with side 4 cm?',
    options: ['24√3 cm²', '36√3 cm²', '48√3 cm²', '54√3 cm²'],
    correctAnswer: 0,
    explanation: 'Area = (3√3/2) × side² = (3√3/2) × 16 = 24√3 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-m-20',
    question: 'Volume of hemisphere with radius 6 cm? (π=22/7)',
    options: ['402.9 cm³', '452.4 cm³', '502.9 cm³', '552.4 cm³'],
    correctAnswer: 1,
    explanation: 'Volume = 2/3 × πr³ = 2/3 × 22/7 × 216 ≈ 452.4 cm³',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'medium'
  },
  {
    id: 'math-geo-h-1',
    question: 'Pythagoras theorem: a² + b² = ?',
    options: ['c', 'c²', '2c', 'c³'],
    correctAnswer: 1,
    explanation: 'In right triangle: a² + b² = c² (hypotenuse)',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-2',
    question: 'Volume of sphere with radius 3 cm? (π=22/7)',
    options: ['113 cm³', '123 cm³', '133 cm³', '143 cm³'],
    correctAnswer: 0,
    explanation: 'Volume = 4/3πr³ = 4/3 × 22/7 × 27 ≈ 113 cm³',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-3',
    question: 'In right triangle, if sides are 5 cm and 12 cm, hypotenuse?',
    options: ['11 cm', '12 cm', '13 cm', '14 cm'],
    correctAnswer: 2,
    explanation: 'Hypotenuse = √(5² + 12²) = √(25 + 144) = √169 = 13 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-4',
    question: 'Area of circle inscribed in square with side 14 cm? (π=22/7)',
    options: ['154 cm²', '164 cm²', '174 cm²', '184 cm²'],
    correctAnswer: 0,
    explanation: 'Radius = 7 cm, Area = πr² = 22/7 × 49 = 154 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-5',
    question: 'Volume of cone with slant height 13 cm and radius 5 cm? (π=22/7)',
    options: ['314 cm³', '324 cm³', '334 cm³', '344 cm³'],
    correctAnswer: 0,
    explanation: 'h = √(13² - 5²) = 12 cm, Volume = 1/3πr²h = 1/3 × 22/7 × 25 × 12 = 314 cm³',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-6',
    question: 'Sum of interior angles of octagon?',
    options: ['900°', '1080°', '1260°', '1440°'],
    correctAnswer: 1,
    explanation: 'Sum = (n-2) × 180° = (8-2) × 180° = 1080°',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-7',
    question: 'Ratio of areas of two similar triangles is 16:25. Ratio of sides?',
    options: ['2:3', '3:4', '4:5', '5:6'],
    correctAnswer: 2,
    explanation: 'Ratio of sides = √(16:25) = 4:5',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-8',
    question: 'Curved surface area of cone with radius 5 cm, height 12 cm? (π=22/7)',
    options: ['204 cm²', '214 cm²', '224 cm²', '234 cm²'],
    correctAnswer: 0,
    explanation: 'l = √(5² + 12²) = 13 cm, CSA = πrl = 22/7 × 5 × 13 ≈ 204 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-9',
    question: 'Area of regular pentagon with side 6 cm and apothem 4.13 cm?',
    options: ['61.95 cm²', '71.95 cm²', '81.95 cm²', '91.95 cm²'],
    correctAnswer: 0,
    explanation: 'Area = 1/2 × perimeter × apothem = 1/2 × 30 × 4.13 = 61.95 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-10',
    question: 'Volume of frustum with radii 7 cm, 4 cm and height 3 cm? (π=22/7)',
    options: ['308 cm³', '318 cm³', '328 cm³', '338 cm³'],
    correctAnswer: 2,
    explanation: 'V = 1/3πh(r1² + r2² + r1×r2) = 1/3 × 22/7 × 3(49 + 16 + 28) = 328 cm³',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-11',
    question: 'Distance between points (3,4) and (6,8) in coordinate plane?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    explanation: 'Distance = √[(6-3)² + (8-4)²] = √(9 + 16) = √25 = 5',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-12',
    question: 'Area of triangle with vertices (0,0), (4,0), (0,3)?',
    options: ['4 sq units', '5 sq units', '6 sq units', '7 sq units'],
    correctAnswer: 2,
    explanation: 'Area = 1/2 × base × height = 1/2 × 4 × 3 = 6 sq units',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-13',
    question: 'Angle subtended by diameter at circumference of circle?',
    options: ['45°', '60°', '90°', '180°'],
    correctAnswer: 2,
    explanation: 'Angle in a semicircle is always 90° (Thales theorem)',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-14',
    question: 'Length of tangent from point 13 cm from center to circle of radius 5 cm?',
    options: ['10 cm', '11 cm', '12 cm', '13 cm'],
    correctAnswer: 2,
    explanation: 'Tangent = √(distance² - radius²) = √(169 - 25) = √144 = 12 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-15',
    question: 'Total surface area of hollow cylinder (outer radius 8 cm, inner 6 cm, height 10 cm)?',
    options: ['880 cm²', '904 cm²', '928 cm²', '952 cm²'],
    correctAnswer: 1,
    explanation: 'TSA = 2π(R+r)(h+R-r) = 2 × 22/7 × 14 × 12 ≈ 904 cm² (approximately)',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-16',
    question: 'Midpoint of line joining points (2,3) and (8,11)?',
    options: ['(4,6)', '(5,7)', '(6,8)', '(7,9)'],
    correctAnswer: 1,
    explanation: 'Midpoint = ((x1+x2)/2, (y1+y2)/2) = ((2+8)/2, (3+11)/2) = (5,7)',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-17',
    question: 'Area of quadrilateral with diagonals 10 cm and 12 cm intersecting at 90°?',
    options: ['50 cm²', '60 cm²', '70 cm²', '80 cm²'],
    correctAnswer: 1,
    explanation: 'Area = 1/2 × d1 × d2 = 1/2 × 10 × 12 = 60 cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-18',
    question: 'Volume of pyramid with square base 10 cm side and height 12 cm?',
    options: ['300 cm³', '350 cm³', '400 cm³', '450 cm³'],
    correctAnswer: 2,
    explanation: 'Volume = 1/3 × base area × height = 1/3 × 100 × 12 = 400 cm³',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-19',
    question: 'If diagonal of cube is 10√3 cm, find its edge?',
    options: ['8 cm', '9 cm', '10 cm', '11 cm'],
    correctAnswer: 2,
    explanation: 'Diagonal = √3 × edge, so edge = 10√3/√3 = 10 cm',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  },
  {
    id: 'math-geo-h-20',
    question: 'Area of largest circle that can be inscribed in right triangle with sides 3,4,5 cm?',
    options: ['π cm²', '2π cm²', '3π cm²', '4π cm²'],
    correctAnswer: 0,
    explanation: 'Radius = (a+b-c)/2 = (3+4-5)/2 = 1 cm, Area = πr² = π cm²',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'hard'
  }
];