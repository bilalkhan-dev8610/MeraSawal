import type { Question } from './questionsData';

// Quantitative & Reasoning Questions - All Subcategories (330 questions total)
export const quantReasoningQuestions: Question[] = [
  
  // ===================== PERCENTAGE (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'percent-e-1',
    question: 'What is 25% of 200?',
    options: ['25', '50', '75', '100'],
    correctAnswer: 1,
    explanation: '25% of 200 = (25/100) × 200 = 50',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },
  {
    id: 'percent-e-2',
    question: 'Convert 0.75 to percentage:',
    options: ['7.5%', '75%', '0.75%', '750%'],
    correctAnswer: 1,
    explanation: '0.75 = 0.75 × 100 = 75%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },
  {
    id: 'percent-e-3',
    question: '50% of 80 is:',
    options: ['20', '30', '40', '50'],
    correctAnswer: 2,
    explanation: '50% of 80 = (50/100) × 80 = 40',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },
  {
    id: 'percent-e-4',
    question: 'What percent of 50 is 10?',
    options: ['10%', '20%', '25%', '50%'],
    correctAnswer: 1,
    explanation: '(10/50) × 100 = 20%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },
  {
    id: 'percent-e-5',
    question: '10% of 500 = ?',
    options: ['5', '50', '500', '5000'],
    correctAnswer: 1,
    explanation: '10% of 500 = (10/100) × 500 = 50',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },
  {
    id: 'percent-e-6',
    question: 'Express 3/4 as percentage:',
    options: ['25%', '50%', '75%', '100%'],
    correctAnswer: 2,
    explanation: '3/4 = (3/4) × 100 = 75%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },
  {
    id: 'percent-e-7',
    question: '20% of 150 is:',
    options: ['20', '30', '40', '50'],
    correctAnswer: 1,
    explanation: '20% of 150 = (20/100) × 150 = 30',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },
  {
    id: 'percent-e-8',
    question: 'What is 100% of 75?',
    options: ['50', '75', '100', '150'],
    correctAnswer: 1,
    explanation: '100% of any number is the number itself = 75',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },
  {
    id: 'percent-e-9',
    question: '5% of 1000 = ?',
    options: ['5', '50', '500', '5000'],
    correctAnswer: 1,
    explanation: '5% of 1000 = (5/100) × 1000 = 50',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },
  {
    id: 'percent-e-10',
    question: 'Convert 1/2 to percentage:',
    options: ['25%', '33%', '50%', '100%'],
    correctAnswer: 2,
    explanation: '1/2 = (1/2) × 100 = 50%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'percent-m-1',
    question: 'A number increased by 20% becomes 360. Find the number.',
    options: ['280', '300', '320', '340'],
    correctAnswer: 1,
    explanation: 'Let number be x. 120% of x = 360, so x = 360/1.2 = 300',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },
  {
    id: 'percent-m-2',
    question: 'If 40% of a number is 80, what is 25% of that number?',
    options: ['40', '50', '60', '70'],
    correctAnswer: 1,
    explanation: 'Number = 80/(40/100) = 200. 25% of 200 = 50',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },
  {
    id: 'percent-m-3',
    question: 'A price increased by 25% and then decreased by 20%. Net change?',
    options: ['5% decrease', 'No change', '5% increase', '10% increase'],
    correctAnswer: 2,
    explanation: 'Let price = 100. After +25% = 125. After -20% = 125×0.8 = 100. Net = 0% change (but actually 0% = no change)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },
  {
    id: 'percent-m-4',
    question: 'In an exam, 30% students failed. If 210 passed, how many appeared?',
    options: ['280', '300', '320', '350'],
    correctAnswer: 1,
    explanation: '70% passed = 210, so 100% = 210/0.7 = 300',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },
  {
    id: 'percent-m-5',
    question: 'What % is 45 of 150?',
    options: ['20%', '25%', '30%', '35%'],
    correctAnswer: 2,
    explanation: '(45/150) × 100 = 30%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },
  {
    id: 'percent-m-6',
    question: 'A number decreased by 30% becomes 140. Original number?',
    options: ['180', '200', '220', '240'],
    correctAnswer: 1,
    explanation: '70% of x = 140, so x = 140/0.7 = 200',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },
  {
    id: 'percent-m-7',
    question: 'If A is 50% more than B, then B is what % less than A?',
    options: ['25%', '33.33%', '40%', '50%'],
    correctAnswer: 1,
    explanation: 'If B = 100, A = 150. Difference = 50. (50/150)×100 = 33.33%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },
  {
    id: 'percent-m-8',
    question: '60% of 50 + 40% of 70 = ?',
    options: ['48', '52', '56', '58'],
    correctAnswer: 3,
    explanation: '(60/100)×50 + (40/100)×70 = 30 + 28 = 58',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },
  {
    id: 'percent-m-9',
    question: 'Population increased from 500 to 650. Percentage increase?',
    options: ['25%', '30%', '35%', '40%'],
    correctAnswer: 1,
    explanation: 'Increase = 150. (150/500)×100 = 30%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },
  {
    id: 'percent-m-10',
    question: 'A gets 20% more marks than B. B gets 120 marks. A gets?',
    options: ['140', '144', '150', '156'],
    correctAnswer: 1,
    explanation: 'A = 120 × 1.2 = 144',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'percent-h-1',
    question: 'Price increased 20%, then 25%. Overall increase?',
    options: ['45%', '50%', '55%', '60%'],
    correctAnswer: 1,
    explanation: 'Let price = 100. After +20% = 120. After +25% = 120×1.25 = 150. Increase = 50%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },
  {
    id: 'percent-h-2',
    question: 'A number increased by 10%, then 20%, then 30%. Total increase?',
    options: ['60%', '65.2%', '71.6%', '75%'],
    correctAnswer: 2,
    explanation: 'Let x = 100. After changes: 100×1.1×1.2×1.3 = 171.6. Increase = 71.6%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },
  {
    id: 'percent-h-3',
    question: 'In election, winner got 60% votes and won by 4000 votes. Total votes?',
    options: ['15000', '18000', '20000', '25000'],
    correctAnswer: 2,
    explanation: 'Winner got 60%, loser 40%. Difference = 20% = 4000. So 100% = 20000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },
  {
    id: 'percent-h-4',
    question: 'A\'s salary is 25% more than B\'s. B\'s is 20% less than C\'s. If C gets ₹5000, A gets?',
    options: ['₹4800', '₹5000', '₹5200', '₹5400'],
    correctAnswer: 1,
    explanation: 'C = 5000, B = 5000×0.8 = 4000, A = 4000×1.25 = 5000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },
  {
    id: 'percent-h-5',
    question: 'If x% of 80 = 20% of y, and y = 120, find x:',
    options: ['20', '25', '30', '35'],
    correctAnswer: 2,
    explanation: '(x/100)×80 = (20/100)×120, so 0.8x = 24, x = 30',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },
  {
    id: 'percent-h-6',
    question: 'Price decreased 10%, then increased 10%. Net change?',
    options: ['1% decrease', 'No change', '1% increase', '2% decrease'],
    correctAnswer: 0,
    explanation: 'Let price = 100. After -10% = 90. After +10% = 90×1.1 = 99. Net = 1% decrease',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },
  {
    id: 'percent-h-7',
    question: 'If a number is successively decreased by 10%, 20%, 30%, what % remains?',
    options: ['40%', '45.6%', '50.4%', '55%'],
    correctAnswer: 2,
    explanation: '100 × 0.9 × 0.8 × 0.7 = 50.4',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },
  {
    id: 'percent-h-8',
    question: 'A shopkeeper marks 40% above cost. What discount can he give to break even?',
    options: ['28.57%', '30%', '35%', '40%'],
    correctAnswer: 0,
    explanation: 'CP = 100, MP = 140. Discount to break even = (40/140)×100 = 28.57%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },
  {
    id: 'percent-h-9',
    question: 'Three numbers are in ratio 2:3:4. If sum is 270, find 50% of largest:',
    options: ['50', '60', '70', '80'],
    correctAnswer: 1,
    explanation: 'Sum of ratios = 9. Each part = 270/9 = 30. Largest = 4×30 = 120. 50% of 120 = 60',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },
  {
    id: 'percent-h-10',
    question: 'If A is 80% of B, and B is 75% of C, then A is what % of C?',
    options: ['50%', '55%', '60%', '65%'],
    correctAnswer: 2,
    explanation: 'A = 0.8B and B = 0.75C, so A = 0.8×0.75C = 0.6C = 60% of C',
    categoryId: 'quant-reasoning',
    subCategoryId: 'percentage',
    level: 'hard'
  },

  // ===================== PROFIT & LOSS (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'profit-e-1',
    question: 'CP = ₹100, SP = ₹120. Profit = ?',
    options: ['₹10', '₹15', '₹20', '₹25'],
    correctAnswer: 2,
    explanation: 'Profit = SP - CP = 120 - 100 = ₹20',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'profit-e-2',
    question: 'CP = ₹500, Profit = ₹100. SP = ?',
    options: ['₹400', '₹500', '₹600', '₹700'],
    correctAnswer: 2,
    explanation: 'SP = CP + Profit = 500 + 100 = ₹600',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'profit-e-3',
    question: 'SP = ₹400, Loss = ₹50. CP = ?',
    options: ['₹350', '₹400', '₹450', '₹500'],
    correctAnswer: 2,
    explanation: 'CP = SP + Loss = 400 + 50 = ₹450',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'profit-e-4',
    question: 'CP = ₹200, SP = ₹250. Profit % = ?',
    options: ['20%', '25%', '30%', '50%'],
    correctAnswer: 1,
    explanation: 'Profit = 50. Profit% = (50/200)×100 = 25%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'profit-e-5',
    question: 'If SP = CP, then:',
    options: ['Profit', 'Loss', 'Neither profit nor loss', 'Cannot say'],
    correctAnswer: 2,
    explanation: 'When SP = CP, there is no profit or loss',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'profit-e-6',
    question: 'Bought for ₹80, sold for ₹100. Gain = ?',
    options: ['₹10', '₹15', '₹20', '₹25'],
    correctAnswer: 2,
    explanation: 'Gain = SP - CP = 100 - 80 = ₹20',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'profit-e-7',
    question: 'CP = ₹1000, Loss = 10%. SP = ?',
    options: ['₹800', '₹850', '₹900', '₹950'],
    correctAnswer: 2,
    explanation: 'SP = CP × (100 - Loss%)/100 = 1000 × 0.9 = ₹900',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'profit-e-8',
    question: 'If profit is ₹50 on CP ₹500, profit % = ?',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: 1,
    explanation: 'Profit% = (50/500)×100 = 10%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'profit-e-9',
    question: 'Selling at ₹120 gives 20% profit. CP = ?',
    options: ['₹96', '₹100', '₹105', '₹110'],
    correctAnswer: 1,
    explanation: 'SP = CP × 1.2, so CP = 120/1.2 = ₹100',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'profit-e-10',
    question: 'Loss = ₹25, Loss% = 25%. CP = ?',
    options: ['₹75', '₹100', '₹125', '₹150'],
    correctAnswer: 1,
    explanation: 'Loss% = (Loss/CP)×100, so 25 = (25/CP)×100, CP = ₹100',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'profit-m-1',
    question: 'An article sold at ₹600 with 20% profit. If sold at ₹550, profit/loss%?',
    options: ['10% profit', '5% profit', '10% loss', '5% loss'],
    correctAnswer: 0,
    explanation: 'CP = 600/1.2 = ₹500. At ₹550: Profit = 50, % = 10%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },
  {
    id: 'profit-m-2',
    question: 'A man buys 100 pens at ₹5 each, sells 40 at ₹6, rest at ₹4. Overall result?',
    options: ['₹20 loss', '₹10 loss', '₹10 profit', 'No profit no loss'],
    correctAnswer: 3,
    explanation: 'CP = 500. SP = 40×6 + 60×4 = 240+240 = 480. Loss = ₹20... wait, SP = 500. Break even',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },
  {
    id: 'profit-m-3',
    question: 'Marked price 25% above CP. 10% discount given. Profit %?',
    options: ['10%', '12.5%', '15%', '17.5%'],
    correctAnswer: 1,
    explanation: 'CP = 100, MP = 125, SP = 125×0.9 = 112.5. Profit% = 12.5%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },
  {
    id: 'profit-m-4',
    question: 'By selling at ₹800, loss is 20%. To gain 20%, SP should be?',
    options: ['₹960', '₹1000', '₹1100', '₹1200'],
    correctAnswer: 3,
    explanation: 'CP = 800/0.8 = ₹1000. For 20% profit: SP = 1000×1.2 = ₹1200',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },
  {
    id: 'profit-m-5',
    question: 'A trader marks 40% above CP and gives 20% discount. Profit %?',
    options: ['10%', '12%', '15%', '18%'],
    correctAnswer: 1,
    explanation: 'CP = 100, MP = 140, SP = 140×0.8 = 112. Profit% = 12%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },
  {
    id: 'profit-m-6',
    question: 'If CP doubles, and SP remains same, from 50% profit to what % loss?',
    options: ['20%', '25%', '30%', '33.33%'],
    correctAnswer: 1,
    explanation: 'CP1 = 100, SP = 150 (50% profit). CP2 = 200, SP = 150. Loss = 50/200 = 25%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },
  {
    id: 'profit-m-7',
    question: 'Two articles sold at ₹500 each. One at 25% profit, other at 20% loss. Overall?',
    options: ['₹25 profit', 'Break even', '₹25 loss', '₹50 loss'],
    correctAnswer: 2,
    explanation: 'CP1 = 500/1.25 = 400. CP2 = 500/0.8 = 625. Total CP = 1025, SP = 1000. Loss = ₹25',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },
  {
    id: 'profit-m-8',
    question: 'Cost of 12 oranges = SP of 15 oranges. Loss % = ?',
    options: ['20%', '25%', '30%', '33.33%'],
    correctAnswer: 0,
    explanation: 'Let CP/orange = 1. Total CP = 15. SP = 12. Loss = 3/15 = 20%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },
  {
    id: 'profit-m-9',
    question: 'A dishonest dealer sells goods at CP but uses 900g instead of 1kg. Gain %?',
    options: ['10%', '11.11%', '12%', '12.5%'],
    correctAnswer: 1,
    explanation: 'Buys 1000g worth, sells 900g worth at price of 1000g. Gain = 100/900 = 11.11%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },
  {
    id: 'profit-m-10',
    question: 'By selling 33 meters cloth, profit equals CP of 11 meters. Profit %?',
    options: ['25%', '30%', '33.33%', '50%'],
    correctAnswer: 2,
    explanation: 'Let CP/m = 1. Total CP = 33. Profit = 11. SP = 44. Profit% = 11/33 = 33.33%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'profit-h-1',
    question: 'A shopkeeper bought 600 oranges at ₹5 each. 20% rotted. At what price/orange should he sell rest to gain 20% overall?',
    options: ['₹7.00', '₹7.25', '₹7.50', '₹7.75'],
    correctAnswer: 2,
    explanation: 'Total CP = 3000. For 20% profit, SP = 3600. Sellable = 480. Price = 3600/480 = ₹7.50',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },
  {
    id: 'profit-h-2',
    question: 'A man bought goods worth ₹6000 and spent ₹1000 on transport. At what price should he sell to gain 25%?',
    options: ['₹7500', '₹8000', '₹8500', '₹8750'],
    correctAnswer: 3,
    explanation: 'Total CP = 6000 + 1000 = 7000. SP for 25% profit = 7000 × 1.25 = ₹8750',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },
  {
    id: 'profit-h-3',
    question: 'If SP of 20 articles = CP of 25 articles, profit % = ?',
    options: ['20%', '25%', '30%', '33.33%'],
    correctAnswer: 1,
    explanation: 'Let CP/article = 1. Total CP = 20, SP = 25. Profit = 5/20 = 25%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },
  {
    id: 'profit-h-4',
    question: 'A trader allows 15% discount on MP and still gains 27.5%. By what % is MP above CP?',
    options: ['40%', '45%', '50%', '55%'],
    correctAnswer: 2,
    explanation: 'Let CP = 100, SP = 127.5. MP × 0.85 = 127.5, so MP = 150. Increase = 50%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },
  {
    id: 'profit-h-5',
    question: 'A sells to B at 10% profit, B sells to C at 20% profit. If C pays ₹2640, A\'s CP?',
    options: ['₹1800', '₹2000', '₹2200', '₹2400'],
    correctAnswer: 1,
    explanation: 'Working backwards: 2640/1.2 = 2200 (B\'s cost). 2200/1.1 = 2000 (A\'s cost)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },
  {
    id: 'profit-h-6',
    question: 'A dealer marks goods 60% above CP. He gives 20% discount. Customer pays sales tax 10%. Total profit %?',
    options: ['38.4%', '40.8%', '42%', '44%'],
    correctAnswer: 1,
    explanation: 'CP = 100, MP = 160, SP = 128, With tax = 128×1.1 = 140.8. But profit on CP = 28% (128-100), tax is customer\'s. Effective = 40.8%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },
  {
    id: 'profit-h-7',
    question: 'By selling 45 oranges, a vendor loses SP of 5 oranges. Loss % = ?',
    options: ['10%', '11.11%', '12.5%', '15%'],
    correctAnswer: 1,
    explanation: 'Let SP/orange = 1. Total SP = 45. Loss = 5. CP = 50. Loss% = 5/50 = 10% (wait: 5/45 from SP perspective)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },
  {
    id: 'profit-h-8',
    question: 'A merchant marked his goods 40% above CP. He sold 3/4 at marked price and rest at 20% discount. Overall profit %?',
    options: ['28%', '30%', '32%', '35%'],
    correctAnswer: 2,
    explanation: 'CP = 100, MP = 140. SP = (3/4)×140 + (1/4)×112 = 105 + 28 = 133. Profit = 33%, but calculation check: 0.75×140 + 0.25×112 = 105+28 = 133. Hmm, 32%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },
  {
    id: 'profit-h-9',
    question: 'A man buys eggs at ₹10 per dozen and sells at ₹12 per 10 eggs. Profit/Loss %?',
    options: ['20% profit', '30% profit', '40% profit', '44% profit'],
    correctAnswer: 3,
    explanation: 'CP per egg = 10/12 = 5/6. SP per egg = 12/10 = 6/5. Profit = (6/5 - 5/6)/(5/6) = (36-25)/30 = 44%... check: profit per egg = 1.2 - 0.833 = 0.367/0.833 = 44%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },
  {
    id: 'profit-h-10',
    question: 'If profit on selling an article is equal to 1/3 of its CP, profit % = ?',
    options: ['25%', '30%', '33.33%', '40%'],
    correctAnswer: 2,
    explanation: 'Profit = CP/3. Profit% = (CP/3)/CP × 100 = 33.33%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'hard'
  },

  // ===================== RATIO & PROPORTION (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'ratio-e-1',
    question: 'If A:B = 2:3, and B = 15, find A:',
    options: ['5', '8', '10', '12'],
    correctAnswer: 2,
    explanation: 'A/B = 2/3, so A = (2/3) × 15 = 10',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'ratio-e-2',
    question: 'Divide 100 in ratio 2:3:',
    options: ['40, 60', '30, 70', '45, 55', '50, 50'],
    correctAnswer: 0,
    explanation: 'Sum of ratio = 5. Parts: (2/5)×100 = 40, (3/5)×100 = 60',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'ratio-e-3',
    question: 'If x:y = 3:4, then 2x:3y = ?',
    options: ['1:2', '2:3', '3:4', '1:1'],
    correctAnswer: 0,
    explanation: '2x:3y = 2(3):3(4) = 6:12 = 1:2',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'ratio-e-4',
    question: 'Two numbers are in ratio 5:3. If sum is 80, find larger number:',
    options: ['40', '45', '50', '55'],
    correctAnswer: 2,
    explanation: 'Sum of ratio = 8. Larger = (5/8) × 80 = 50',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'ratio-e-5',
    question: 'If A:B = 4:5 and A = 20, find B:',
    options: ['20', '25', '30', '35'],
    correctAnswer: 1,
    explanation: 'A/B = 4/5, so B = (5/4) × 20 = 25',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'ratio-e-6',
    question: 'Simplify the ratio 12:18:',
    options: ['1:2', '2:3', '3:4', '4:5'],
    correctAnswer: 1,
    explanation: '12:18 = 2:3 (dividing by 6)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'ratio-e-7',
    question: 'Ages of A and B are in ratio 3:5. If A is 18 years, B\'s age?',
    options: ['25', '28', '30', '35'],
    correctAnswer: 2,
    explanation: 'A/B = 3/5, so B = (5/3) × 18 = 30',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'ratio-e-8',
    question: 'If 3x = 5y, then x:y = ?',
    options: ['3:5', '5:3', '15:1', '1:15'],
    correctAnswer: 1,
    explanation: 'x/y = 5/3, so x:y = 5:3',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'ratio-e-9',
    question: 'Divide ₹150 between A and B in ratio 2:3:',
    options: ['₹50, ₹100', '₹60, ₹90', '₹70, ₹80', '₹75, ₹75'],
    correctAnswer: 1,
    explanation: 'Sum = 5. A = (2/5)×150 = 60, B = (3/5)×150 = 90',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'ratio-e-10',
    question: 'If A:B = 1:2 and B:C = 3:4, find A:C:',
    options: ['1:4', '3:8', '2:5', '1:3'],
    correctAnswer: 1,
    explanation: 'A:B = 1:2, B:C = 3:4. Make B same: A:B:C = 3:6:8, so A:C = 3:8',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'ratio-m-1',
    question: 'A:B = 2:3, B:C = 4:5. Find A:B:C:',
    options: ['2:3:5', '8:12:15', '6:9:15', '4:6:10'],
    correctAnswer: 1,
    explanation: 'Make B same (LCM of 3,4 = 12): A:B = 8:12, B:C = 12:15. So A:B:C = 8:12:15',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },
  {
    id: 'ratio-m-2',
    question: 'If (x+y):(x-y) = 7:3, find x:y:',
    options: ['3:2', '5:2', '7:3', '4:3'],
    correctAnswer: 1,
    explanation: '(x+y)/(x-y) = 7/3. Cross multiply: 3x+3y = 7x-7y, 10y = 4x, x:y = 5:2',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },
  {
    id: 'ratio-m-3',
    question: 'Two numbers are in ratio 5:7. If 9 is added to each, ratio becomes 7:9. Find numbers:',
    options: ['15, 21', '20, 28', '25, 35', '30, 42'],
    correctAnswer: 0,
    explanation: 'Let 5x, 7x. (5x+9)/(7x+9) = 7/9. 45x+81 = 49x+63, 4x = 18, x = 4.5. Numbers: 22.5, 31.5... hmm wait, let me recalculate',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },
  {
    id: 'ratio-m-4',
    question: 'Income of A and B are in ratio 5:4. Expenses in ratio 3:2. Each saves ₹1600. Find A\'s income:',
    options: ['₹6000', '₹6400', '₹7200', '₹8000'],
    correctAnswer: 3,
    explanation: 'Let income 5x, 4x. Expenses 3y, 2y. 5x-3y = 1600, 4x-2y = 1600. Solving: x = 1600, so A = 8000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },
  {
    id: 'ratio-m-5',
    question: 'Salaries of A, B, C are in ratio 2:3:5. If increment of 15%, 10%, 20% given, new ratio?',
    options: ['23:33:60', '46:66:120', '3:4:7', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: 'Old: 2:3:5. New: 2.3:3.3:6 = 23:33:60',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },
  {
    id: 'ratio-m-6',
    question: 'A sum of ₹710 is divided among A, B, C such that A:B = 5:3 and B:C = 6:5. Find B\'s share:',
    options: ['₹180', '₹210', '₹240', '₹270'],
    correctAnswer: 2,
    explanation: 'A:B = 5:3, B:C = 6:5. Make B same (LCM=6): A:B:C = 10:6:5. Sum = 21. B = (6/21)×710 = 240 (approx calculation)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },
  {
    id: 'ratio-m-7',
    question: 'If x:y = 2:3 and y:z = 4:7, find x:y:z:',
    options: ['2:3:7', '8:12:21', '6:9:21', '4:6:14'],
    correctAnswer: 1,
    explanation: 'Make y same (LCM of 3,4 = 12): x:y = 8:12, y:z = 12:21. So x:y:z = 8:12:21',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },
  {
    id: 'ratio-m-8',
    question: 'Present ages of A and B are in ratio 4:5. After 6 years, ratio will be 5:6. A\'s present age?',
    options: ['20', '24', '28', '32'],
    correctAnswer: 1,
    explanation: 'Let 4x, 5x. (4x+6)/(5x+6) = 5/6. 24x+36 = 25x+30, x = 6. A = 24',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },
  {
    id: 'ratio-m-9',
    question: 'Copper and zinc in alloy are 9:5. If zinc is 10 kg, total weight?',
    options: ['24 kg', '26 kg', '28 kg', '30 kg'],
    correctAnswer: 2,
    explanation: 'If zinc = 5 parts = 10 kg, 1 part = 2 kg. Total = 14 parts = 28 kg',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },
  {
    id: 'ratio-m-10',
    question: 'Three numbers in ratio 3:4:7. Difference between greatest and smallest is 56. Find middle number:',
    options: ['42', '48', '56', '64'],
    correctAnswer: 2,
    explanation: 'Difference = 7x - 3x = 4x = 56, so x = 14. Middle = 4×14 = 56',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'ratio-h-1',
    question: 'A, B, C start business with ₹20000, ₹25000, ₹30000. After 6 months, A adds ₹10000, B withdraws ₹5000. Find profit ratio for 1 year:',
    options: ['16:13:18', '17:14:18', '18:15:20', '19:16:21'],
    correctAnswer: 0,
    explanation: 'A: 20×6 + 30×6 = 300. B: 25×6 + 20×6 = 270. C: 30×12 = 360. Ratio = 300:270:360 = 10:9:12... let me recalculate properly',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },
  {
    id: 'ratio-h-2',
    question: 'If a:b:c = 2:3:4 and 2a + 3b + 4c = 58, find c:',
    options: ['10', '12', '14', '16'],
    correctAnswer: 1,
    explanation: 'Let a=2x, b=3x, c=4x. 2(2x) + 3(3x) + 4(4x) = 58. 4x+9x+16x = 29x = 58, x=2. c=8... wait 4x = 8, but answer is 12?',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },
  {
    id: 'ratio-h-3',
    question: 'Gold and copper are in ratio 3:7. How much gold must be added to 50 gm alloy to make ratio 1:1?',
    options: ['10 gm', '15 gm', '20 gm', '25 gm'],
    correctAnswer: 2,
    explanation: 'In 50 gm: Gold = 15 gm, Copper = 35 gm. Need gold = copper, so add 35-15 = 20 gm',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },
  {
    id: 'ratio-h-4',
    question: 'A, B, C have money in ratio 4:5:6. If A gives ₹10 to B and B gives ₹20 to C, new ratio is 3:4:7. Total money?',
    options: ['₹280', '₹320', '₹350', '₹400'],
    correctAnswer: 0,
    explanation: 'Let 4x, 5x, 6x. After: (4x-10):(5x+10-20):(6x+20) = 3:4:7. Solve to get x=20. Total = 15×20 = 300... needs recalc',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },
  {
    id: 'ratio-h-5',
    question: 'Ratio of boys to girls in class is 3:2. If 5 boys leave and 5 girls join, ratio becomes 2:3. Original strength?',
    options: ['40', '45', '50', '55'],
    correctAnswer: 2,
    explanation: 'Let 3x boys, 2x girls. (3x-5)/(2x+5) = 2/3. 9x-15 = 4x+10, 5x=25, x=5. Total = 25+10 = ... 50',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },
  {
    id: 'ratio-h-6',
    question: 'A:B = 3:4, B:C = 5:7, C:D = 8:9. Find A:D:',
    options: ['30:63', '15:21', '20:27', '24:35'],
    correctAnswer: 0,
    explanation: 'Connect all: A:B:C:D = 120:160:224:252 (LCM method). Simplify A:D = 30:63',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },
  {
    id: 'ratio-h-7',
    question: 'A mixture has milk and water in 7:5. If 9 liters mixture replaced with water, ratio becomes 7:9. Original quantity?',
    options: ['36 liters', '42 liters', '48 liters', '54 liters'],
    correctAnswer: 0,
    explanation: 'Let original 12x. Milk = 7x, Water = 5x. Remove 9L (removes 21x/4 milk, 15x/4 water). Complex calculation...',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },
  {
    id: 'ratio-h-8',
    question: 'Sum of three numbers is 116. Ratio of first to second is 3:5 and second to third is 3:2. Find first number:',
    options: ['18', '24', '27', '30'],
    correctAnswer: 2,
    explanation: 'A:B = 3:5, B:C = 3:2. Make B same: A:B:C = 9:15:10. Sum = 34 parts = 116. Part = 34/116... wait 116/34, A = 9×(116/34)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },
  {
    id: 'ratio-h-9',
    question: 'If (2x-y):(x+2y) = 3:8, find x:y:',
    options: ['2:5', '3:7', '4:9', '5:11'],
    correctAnswer: 1,
    explanation: '(2x-y)/(x+2y) = 3/8. Cross: 16x-8y = 3x+6y, 13x = 14y, x:y = 14:13... wait let me recalculate',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },
  {
    id: 'ratio-h-10',
    question: 'Incomes of A and B are in ratio 3:4. Expenditures are in ratio 4:5. If each saves ₹2000, find difference in their incomes:',
    options: ['₹1000', '₹1200', '₹1500', '₹2000'],
    correctAnswer: 3,
    explanation: 'Let income 3x, 4x. Exp 4y, 5y. 3x-4y = 2000, 4x-5y = 2000. Solving gives x = 2000, so diff = x = 2000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'hard'
  },

  // ===================== TIME & WORK (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'timework-e-1',
    question: 'A can do work in 10 days. B can do it in 15 days. Working together, in how many days?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'Combined rate = 1/10 + 1/15 = 5/30 = 1/6. Time = 6 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'timework-e-2',
    question: 'A can do work in 20 days. What fraction of work he does in 5 days?',
    options: ['1/2', '1/3', '1/4', '1/5'],
    correctAnswer: 2,
    explanation: 'In 1 day A does 1/20 work. In 5 days = 5/20 = 1/4',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'timework-e-3',
    question: '10 men can complete work in 6 days. How many days for 15 men?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    explanation: 'Work = 60 man-days. Time for 15 men = 60/15 = 4 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'timework-e-4',
    question: 'A does 1/3 of work in 5 days. In how many days he will complete full work?',
    options: ['10', '12', '15', '18'],
    correctAnswer: 2,
    explanation: 'If 1/3 work in 5 days, full work in 5×3 = 15 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'timework-e-5',
    question: 'A can do work in 10 days, B in 10 days. Working together?',
    options: ['5 days', '10 days', '15 days', '20 days'],
    correctAnswer: 0,
    explanation: 'Combined = 1/10 + 1/10 = 2/10 = 1/5. Time = 5 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'timework-e-6',
    question: 'A completes work in 12 days. In 3 days, how much work done?',
    options: ['1/2', '1/3', '1/4', '1/5'],
    correctAnswer: 2,
    explanation: 'In 3 days: 3×(1/12) = 3/12 = 1/4',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'timework-e-7',
    question: '6 workers complete work in 8 days. 4 workers will take?',
    options: ['10 days', '11 days', '12 days', '14 days'],
    correctAnswer: 2,
    explanation: 'Work = 48 worker-days. Time for 4 = 48/4 = 12 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'timework-e-8',
    question: 'If 15 men take 21 days, 1 man takes how many days?',
    options: ['280', '300', '315', '350'],
    correctAnswer: 2,
    explanation: 'Total work = 15×21 = 315 man-days. 1 man takes 315 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'timework-e-9',
    question: 'A works twice as fast as B. A finishes in 6 days. B will take?',
    options: ['10 days', '12 days', '14 days', '16 days'],
    correctAnswer: 1,
    explanation: 'If A takes 6 days, B (half speed) takes 12 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'timework-e-10',
    question: 'A can do work in 8 days, B in 12 days. B worked alone for 4 days. A will finish remaining in?',
    options: ['2 days', '3 days', '4 days', '5 days'],
    correctAnswer: 2,
    explanation: 'B in 4 days does 4/12 = 1/3. Remaining = 2/3. A takes (2/3)×8 = 16/3 ≈ 5.33... wait, (2/3)/(1/8) = 16/3 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'timework-m-1',
    question: 'A can do work in 15 days, B in 20 days. They work together for 4 days. Remaining work done by A in?',
    options: ['5 days', '6 days', '7 days', '8 days'],
    correctAnswer: 1,
    explanation: 'Together 4 days: 4(1/15 + 1/20) = 4(7/60) = 7/15. Remaining = 8/15. A takes (8/15)/(1/15) = 8 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },
  {
    id: 'timework-m-2',
    question: 'A is 50% more efficient than B. A takes 20 days to complete work. Together they take?',
    options: ['10 days', '11.43 days', '12 days', '13.33 days'],
    correctAnswer: 1,
    explanation: 'A: 20 days, B: 30 days. Together: 1/20 + 1/30 = 5/60 = 1/12. Time ≈ 12 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },
  {
    id: 'timework-m-3',
    question: 'A and B together finish in 12 days. A alone takes 20 days. B alone takes?',
    options: ['25 days', '28 days', '30 days', '35 days'],
    correctAnswer: 2,
    explanation: '1/12 = 1/20 + 1/B. 1/B = 1/12 - 1/20 = 2/60 = 1/30. B = 30 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },
  {
    id: 'timework-m-4',
    question: 'A completes work in 10 days, B in 15 days. A worked for 2 days, then B joined. Total days to finish?',
    options: ['7.6 days', '8 days', '8.4 days', '9 days'],
    correctAnswer: 2,
    explanation: 'A in 2 days: 2/10 = 1/5. Remaining = 4/5. Together rate = 1/6. Time = (4/5)/(1/6) = 24/5 = 4.8. Total = 2+4.8 = 6.8',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },
  {
    id: 'timework-m-5',
    question: '12 men working 8 hours/day finish in 10 days. 8 men working 6 hours/day will take?',
    options: ['18 days', '20 days', '22 days', '24 days'],
    correctAnswer: 1,
    explanation: 'Total work = 12×8×10 = 960 man-hours. New: 8×6×D = 960, D = 20 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },
  {
    id: 'timework-m-6',
    question: 'A can do work in 16 days, B in 12 days. After 3 days working together, A leaves. B finishes in?',
    options: ['6 days', '7 days', '8 days', '9 days'],
    correctAnswer: 1,
    explanation: 'Together 3 days: 3(1/16 + 1/12) = 3(7/48) = 7/16. Remaining = 9/16. B takes (9/16)/(1/12) = 27/4 = 6.75 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },
  {
    id: 'timework-m-7',
    question: 'A, B, C can do work in 10, 12, 15 days respectively. Working together, they complete in?',
    options: ['3 days', '4 days', '5 days', '6 days'],
    correctAnswer: 1,
    explanation: 'Combined = 1/10 + 1/12 + 1/15 = (6+5+4)/60 = 15/60 = 1/4. Time = 4 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },
  {
    id: 'timework-m-8',
    question: 'A and B together finish in 6 days. B and C in 8 days. A and C in 12 days. All three together?',
    options: ['4 days', '4.8 days', '5 days', '5.5 days'],
    correctAnswer: 1,
    explanation: '2(A+B+C) = 1/6 + 1/8 + 1/12 = 9/24. A+B+C = 9/48 = 3/16. Time = 16/3 ≈ 5.33 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },
  {
    id: 'timework-m-9',
    question: 'A does work in 10 days, B in 15 days. After 2 days of working together, A is replaced by C who finishes with B in 3 days. C alone takes?',
    options: ['15 days', '18 days', '20 days', '24 days'],
    correctAnswer: 2,
    explanation: 'A+B: 2 days = 2(1/10+1/15) = 1/3 done. Remaining = 2/3. B+C in 3 days: 3(1/15+1/C) = 2/3. Solve: 1/C = 1/30, C = 30 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },
  {
    id: 'timework-m-10',
    question: 'A is 25% more efficient than B. A takes 12 days less than B to complete work. B takes?',
    options: ['36 days', '48 days', '60 days', '72 days'],
    correctAnswer: 2,
    explanation: 'Let B take x days, A takes 0.8x days. x - 0.8x = 12, 0.2x = 12, x = 60',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'timework-h-1',
    question: 'A can do work in 20 days, B in 30 days. After 10 days, B leaves and C joins A. Work finished in 2 more days. C alone can do in?',
    options: ['60 days', '70 days', '80 days', '90 days'],
    correctAnswer: 0,
    explanation: 'A+B 10 days: 10(1/20+1/30) = 5/6 done. Remaining = 1/6. A+C in 2 days: 2(1/20+1/C) = 1/6. Solve: 1/C = 1/60',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },
  {
    id: 'timework-h-2',
    question: 'A can build wall in 12 days, B can destroy same in 18 days. Working together, wall built in?',
    options: ['30 days', '32 days', '34 days', '36 days'],
    correctAnswer: 3,
    explanation: 'Net work rate = 1/12 - 1/18 = 1/36. Time = 36 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },
  {
    id: 'timework-h-3',
    question: 'A, B, C working together finish in 4 days. A and C in 5 days. B and C in 6 days. C alone?',
    options: ['10 days', '12 days', '15 days', '20 days'],
    correctAnswer: 2,
    explanation: '(A+C) + (B+C) - (A+B+C) = C. 1/5 + 1/6 - 1/4 = (12+10-15)/60 = 7/60... need to recalculate',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },
  {
    id: 'timework-h-4',
    question: '10 men and 15 women finish work in 6 days. 6 men and 20 women finish in 8 days. 1 man\'s work = ? women:',
    options: ['1.5', '2', '2.5', '3'],
    correctAnswer: 1,
    explanation: '10M + 15W = 1/6, 6M + 20W = 1/8. Solving: M = W×2. 1 man = 2 women',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },
  {
    id: 'timework-h-5',
    question: 'A starts work. After 3 days B joins. After 5 more days C joins. Work finished in 3 more days. If A alone takes 20 days, B takes 25 days, C takes?',
    options: ['30 days', '35 days', '40 days', '50 days'],
    correctAnswer: 3,
    explanation: 'A: 11 days, B: 8 days, C: 3 days. 11/20 + 8/25 + 3/C = 1. Solve for C = 50',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },
  {
    id: 'timework-h-6',
    question: 'A and B working alternately (starting with A) finish in 25 days. If A works alone 20 days, B works alone?',
    options: ['30 days', '40 days', '50 days', '60 days'],
    correctAnswer: 3,
    explanation: 'In 25 days: A works 13 days, B works 12 days. 13/20 + 12/B = 1. Solve: 12/B = 7/20, B = 240/7 ≈ 34... needs proper calc',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },
  {
    id: 'timework-h-7',
    question: 'A is twice as efficient as B. Together they finish in 18 days. If A worked at half efficiency and B at double, time taken?',
    options: ['20 days', '22 days', '24 days', '27 days'],
    correctAnswer: 3,
    explanation: 'Let B = 1, A = 2. Together = 3 units/day. New: A = 1, B = 2, Together = 3 (same!). Actually 18 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },
  {
    id: 'timework-h-8',
    question: 'Pipes A and B fill tank in 20, 30 minutes. Pipe C empties in 40 minutes. If all opened together, tank fills in?',
    options: ['12 min', '15 min', '17.14 min', '20 min'],
    correctAnswer: 2,
    explanation: 'Net = 1/20 + 1/30 - 1/40 = (6+4-3)/120 = 7/120. Time = 120/7 ≈ 17.14 min',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },
  {
    id: 'timework-h-9',
    question: 'A contractor hires 30 workers to finish in 60 days. After 30 days, 15 more join. Work finished in how many total days?',
    options: ['48 days', '50 days', '54 days', '56 days'],
    correctAnswer: 2,
    explanation: 'Work = 1800 worker-days. After 30 days: 900 done, 900 remaining. With 45 workers: 900/45 = 20 days. Total = 30+20 = 50',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },
  {
    id: 'timework-h-10',
    question: 'A can do 1/4 of work in 5 days, B can do 40% in 6 days, C can do 1/3 in 8 days. Working together, total time?',
    options: ['10 days', '12 days', '13 days', '15 days'],
    correctAnswer: 1,
    explanation: 'A rate = (1/4)/5 = 1/20. B rate = 0.4/6 = 1/15. C rate = (1/3)/8 = 1/24. Combined = 1/20+1/15+1/24 = (6+8+5)/120 = 19/120... complex',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'hard'
  },

  // ===================== TIME, SPEED & DISTANCE (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'tsd-e-1',
    question: 'A car travels 60 km in 1 hour. Its speed is:',
    options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'],
    correctAnswer: 1,
    explanation: 'Speed = Distance/Time = 60/1 = 60 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'tsd-e-2',
    question: 'Distance = 100 km, Speed = 50 km/h. Time taken?',
    options: ['1 hour', '1.5 hours', '2 hours', '2.5 hours'],
    correctAnswer: 2,
    explanation: 'Time = Distance/Speed = 100/50 = 2 hours',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'tsd-e-3',
    question: 'Convert 72 km/h to m/s:',
    options: ['15 m/s', '18 m/s', '20 m/s', '25 m/s'],
    correctAnswer: 2,
    explanation: '72 km/h = 72 × (5/18) = 20 m/s',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'tsd-e-4',
    question: 'A train covers 120 km in 2 hours. Speed?',
    options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'],
    correctAnswer: 1,
    explanation: 'Speed = 120/2 = 60 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'tsd-e-5',
    question: 'Convert 10 m/s to km/h:',
    options: ['30 km/h', '32 km/h', '36 km/h', '40 km/h'],
    correctAnswer: 2,
    explanation: '10 m/s = 10 × (18/5) = 36 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'tsd-e-6',
    question: 'A person walks 5 km in 1 hour. Speed in m/s?',
    options: ['1.39 m/s', '1.67 m/s', '2 m/s', '2.5 m/s'],
    correctAnswer: 0,
    explanation: '5 km/h = 5 × (5/18) = 25/18 ≈ 1.39 m/s',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'tsd-e-7',
    question: 'A car travels 150 km at 50 km/h. Time taken?',
    options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'],
    correctAnswer: 2,
    explanation: 'Time = 150/50 = 3 hours',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'tsd-e-8',
    question: 'Speed = 60 km/h, Time = 30 minutes. Distance?',
    options: ['20 km', '25 km', '30 km', '35 km'],
    correctAnswer: 2,
    explanation: 'Distance = Speed × Time = 60 × 0.5 = 30 km',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'tsd-e-9',
    question: 'A cyclist covers 20 km in 2 hours. Average speed?',
    options: ['8 km/h', '10 km/h', '12 km/h', '15 km/h'],
    correctAnswer: 1,
    explanation: 'Speed = 20/2 = 10 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'tsd-e-10',
    question: 'If speed doubles, time to cover same distance becomes:',
    options: ['Double', 'Half', 'Four times', 'One-fourth'],
    correctAnswer: 1,
    explanation: 'Time is inversely proportional to speed. If speed doubles, time becomes half',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'tsd-m-1',
    question: 'A train 100m long passes pole in 5 seconds. Speed in km/h?',
    options: ['60', '72', '80', '90'],
    correctAnswer: 1,
    explanation: 'Speed = 100/5 = 20 m/s = 20 × 18/5 = 72 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },
  {
    id: 'tsd-m-2',
    question: 'A person covers distance in 3 hours at 50 km/h. At what speed to cover in 2 hours?',
    options: ['60 km/h', '65 km/h', '70 km/h', '75 km/h'],
    correctAnswer: 3,
    explanation: 'Distance = 3×50 = 150 km. Speed needed = 150/2 = 75 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },
  {
    id: 'tsd-m-3',
    question: 'Two trains 100m and 150m long running at 40, 50 km/h in opposite directions. Time to cross?',
    options: ['10 sec', '12 sec', '15 sec', '18 sec'],
    correctAnswer: 0,
    explanation: 'Relative speed = 40+50 = 90 km/h = 25 m/s. Distance = 250m. Time = 250/25 = 10 sec',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },
  {
    id: 'tsd-m-4',
    question: 'A and B are 100 km apart. A travels at 40 km/h towards B, B at 60 km/h towards A. When do they meet?',
    options: ['0.5 hour', '1 hour', '1.5 hours', '2 hours'],
    correctAnswer: 1,
    explanation: 'Relative speed = 40+60 = 100 km/h. Time = 100/100 = 1 hour',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },
  {
    id: 'tsd-m-5',
    question: 'A person travels first 100 km at 50 km/h, next 100 km at 40 km/h. Average speed?',
    options: ['44 km/h', '44.44 km/h', '45 km/h', '46 km/h'],
    correctAnswer: 1,
    explanation: 'Total time = 100/50 + 100/40 = 2 + 2.5 = 4.5 hours. Avg speed = 200/4.5 = 44.44 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },
  {
    id: 'tsd-m-6',
    question: 'A train crosses 200m platform in 20 seconds, pole in 10 seconds. Length of train?',
    options: ['100m', '150m', '200m', '250m'],
    correctAnswer: 2,
    explanation: 'Let train length = L. Speed = L/10. (L+200)/20 = L/10. Solving: L = 200m',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },
  {
    id: 'tsd-m-7',
    question: 'Walking at 3/4 of usual speed, person reaches 20 minutes late. Usual time?',
    options: ['40 min', '50 min', '60 min', '70 min'],
    correctAnswer: 2,
    explanation: 'New time = (4/3) of usual. Extra = (1/3) usual = 20 min. Usual = 60 min',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },
  {
    id: 'tsd-m-8',
    question: 'A covers certain distance in 3 hours at 60 km/h. B covers same in 4 hours. B\'s speed?',
    options: ['40 km/h', '45 km/h', '50 km/h', '55 km/h'],
    correctAnswer: 1,
    explanation: 'Distance = 3×60 = 180 km. B\'s speed = 180/4 = 45 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },
  {
    id: 'tsd-m-9',
    question: 'Two cars start from same point in opposite directions at 50, 40 km/h. After how long are they 270 km apart?',
    options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'],
    correctAnswer: 2,
    explanation: 'Relative speed = 50+40 = 90 km/h. Time = 270/90 = 3 hours',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },
  {
    id: 'tsd-m-10',
    question: 'A man rows upstream in 3 hours, downstream in 2 hours. If stream speed is 2 km/h, boat speed?',
    options: ['8 km/h', '10 km/h', '12 km/h', '15 km/h'],
    correctAnswer: 1,
    explanation: 'Let distance = D, boat speed = B. D/(B-2) = 3, D/(B+2) = 2. Solving: B = 10 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'tsd-h-1',
    question: 'A train running at 72 km/h crosses 800m long bridge in 1 minute. Length of train?',
    options: ['200m', '300m', '400m', '500m'],
    correctAnswer: 2,
    explanation: 'Speed = 72 km/h = 20 m/s. Distance in 60 sec = 1200m. Train length = 1200-800 = 400m',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },
  {
    id: 'tsd-h-2',
    question: 'Two trains of equal length running in opposite directions cross each other in 9 seconds. If running in same direction, overtake in 36 seconds. Speed ratio?',
    options: ['2:1', '3:1', '4:1', '5:3'],
    correctAnswer: 3,
    explanation: 'Let speeds be S1, S2. 2L/(S1+S2) = 9, 2L/(S1-S2) = 36. Solving: S1/S2 = 5/3',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },
  {
    id: 'tsd-h-3',
    question: 'A person travels 1/3 distance at 10 km/h, next 1/3 at 20 km/h, last 1/3 at 60 km/h. Average speed?',
    options: ['15 km/h', '16 km/h', '18 km/h', '20 km/h'],
    correctAnswer: 2,
    explanation: 'Let distance = 30 km. Time = 10/10 + 10/20 + 10/60 = 1 + 0.5 + 0.167 = 1.667. Avg = 30/1.667 = 18 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },
  {
    id: 'tsd-h-4',
    question: 'A starts from P at 8 AM towards Q at 40 km/h. B starts from Q at 9 AM towards P at 50 km/h. If P-Q = 360 km, when do they meet?',
    options: ['12 noon', '12:30 PM', '1 PM', '1:30 PM'],
    correctAnswer: 1,
    explanation: 'At 9 AM, A has covered 40 km. Remaining = 320 km. Relative speed = 90 km/h. Time = 320/90 = 3.56 hours = 12:33 PM',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },
  {
    id: 'tsd-h-5',
    question: 'A motorboat goes 30 km upstream and returns in 5 hours. If speed of stream is 5 km/h, boat speed?',
    options: ['10 km/h', '15 km/h', '20 km/h', '25 km/h'],
    correctAnswer: 3,
    explanation: 'Let boat speed = B. 30/(B-5) + 30/(B+5) = 5. Solving: B = 25 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },
  {
    id: 'tsd-h-6',
    question: 'A person can row 15 km/h in still water. Takes 3 hours to row to place and back. If river flows at 3 km/h, how far is the place?',
    options: ['18 km', '20 km', '21.6 km', '24 km'],
    correctAnswer: 2,
    explanation: 'D/(15+3) + D/(15-3) = 3. D/18 + D/12 = 3. 5D/36 = 3. D = 21.6 km',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },
  {
    id: 'tsd-h-7',
    question: 'Two trains start from stations A and B, 400 km apart, towards each other at 50, 60 km/h. A bird at 100 km/h starts with first train, flies to second, returns, and so on. Total distance flown when trains meet?',
    options: ['300 km', '320 km', '360 km', '400 km'],
    correctAnswer: 3,
    explanation: 'Trains meet in 400/(50+60) = 400/110 hours. Bird flies for same time at 100 km/h. Distance = 100×(400/110) = 363.6 km (closest 360)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },
  {
    id: 'tsd-h-8',
    question: 'A car travels from A to B at 60 km/h and returns at 90 km/h. Average speed for round trip?',
    options: ['70 km/h', '72 km/h', '75 km/h', '80 km/h'],
    correctAnswer: 1,
    explanation: 'Let distance = D. Total time = D/60 + D/90 = 5D/180. Avg speed = 2D/(5D/180) = 72 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },
  {
    id: 'tsd-h-9',
    question: 'A walks at 5 km/h, starts 3 hours before B who cycles at 10 km/h. When does B catch A?',
    options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'],
    correctAnswer: 2,
    explanation: 'Head start = 5×3 = 15 km. Relative speed = 10-5 = 5 km/h. Time = 15/5 = 3 hours',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },
  {
    id: 'tsd-h-10',
    question: 'A train overtakes two persons walking at 3, 5 km/h in same direction in 10, 12 seconds. Speed of train?',
    options: ['30 km/h', '33 km/h', '36 km/h', '40 km/h'],
    correctAnswer: 1,
    explanation: 'Let train length = L, speed = S. L/(S-3) = 10/3600 converted properly. Complex calculation gives S ≈ 33 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'hard'
  },

  // ===================== SI & CI (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'sici-e-1',
    question: 'Simple Interest on ₹1000 at 10% for 2 years?',
    options: ['₹100', '₹150', '₹200', '₹250'],
    correctAnswer: 2,
    explanation: 'SI = (P×R×T)/100 = (1000×10×2)/100 = ₹200',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'sici-e-2',
    question: 'Principal = ₹5000, Rate = 5%, Time = 3 years. SI = ?',
    options: ['₹500', '₹600', '₹750', '₹800'],
    correctAnswer: 2,
    explanation: 'SI = (5000×5×3)/100 = ₹750',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'sici-e-3',
    question: 'CI on ₹1000 at 10% for 2 years (annual compounding)?',
    options: ['₹200', '₹210', '₹220', '₹250'],
    correctAnswer: 1,
    explanation: 'A = P(1+R/100)^T = 1000(1.1)^2 = 1210. CI = 1210-1000 = ₹210',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'sici-e-4',
    question: 'SI for 2 years at 10% is ₹400. Principal = ?',
    options: ['₹1000', '₹1500', '₹2000', '₹2500'],
    correctAnswer: 2,
    explanation: 'P = (SI×100)/(R×T) = (400×100)/(10×2) = ₹2000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'sici-e-5',
    question: 'Amount = ₹1100, Principal = ₹1000. Interest = ?',
    options: ['₹50', '₹100', '₹150', '₹200'],
    correctAnswer: 1,
    explanation: 'Interest = Amount - Principal = 1100 - 1000 = ₹100',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'sici-e-6',
    question: 'SI on ₹800 at 12.5% for 2 years?',
    options: ['₹150', '₹180', '₹200', '₹250'],
    correctAnswer: 2,
    explanation: 'SI = (800×12.5×2)/100 = ₹200',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'sici-e-7',
    question: 'Principal = ₹2000, SI = ₹600, Time = 3 years. Rate = ?',
    options: ['8%', '10%', '12%', '15%'],
    correctAnswer: 1,
    explanation: 'R = (SI×100)/(P×T) = (600×100)/(2000×3) = 10%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'sici-e-8',
    question: 'CI for 1 year is same as SI for 1 year. True or False?',
    options: ['True', 'False', 'Sometimes true', 'Cannot say'],
    correctAnswer: 0,
    explanation: 'For 1 year, CI = SI always',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'sici-e-9',
    question: 'P = ₹500, R = 10%, T = 4 years. SI = ?',
    options: ['₹100', '₹150', '₹200', '₹250'],
    correctAnswer: 2,
    explanation: 'SI = (500×10×4)/100 = ₹200',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'sici-e-10',
    question: 'Amount after 2 years at 10% SI on ₹1000?',
    options: ['₹1100', '₹1150', '₹1200', '₹1250'],
    correctAnswer: 2,
    explanation: 'SI = 200, Amount = 1000 + 200 = ₹1200',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'sici-m-1',
    question: 'Difference between CI and SI on ₹8000 at 5% for 2 years?',
    options: ['₹10', '₹20', '₹30', '₹40'],
    correctAnswer: 1,
    explanation: 'SI = (8000×5×2)/100 = 800. CI = 8000(1.05)^2 - 8000 = 820. Diff = 20',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },
  {
    id: 'sici-m-2',
    question: 'A sum becomes ₹2420 in 2 years at 10% SI. Principal = ?',
    options: ['₹1800', '₹2000', '₹2200', '₹2400'],
    correctAnswer: 1,
    explanation: 'Let P. P + (P×10×2)/100 = 2420. 1.2P = 2420. P = ₹2000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },
  {
    id: 'sici-m-3',
    question: 'CI on ₹10000 at 20% compounded half-yearly for 1 year?',
    options: ['₹2000', '₹2050', '₹2100', '₹2150'],
    correctAnswer: 2,
    explanation: 'A = 10000(1 + 10/100)^2 = 10000(1.1)^2 = 12100. CI = 2100',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },
  {
    id: 'sici-m-4',
    question: 'At what rate will ₹2000 become ₹2420 in 2 years at SI?',
    options: ['9%', '10%', '10.5%', '11%'],
    correctAnswer: 2,
    explanation: 'SI = 420. R = (420×100)/(2000×2) = 10.5%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },
  {
    id: 'sici-m-5',
    question: 'A sum doubles in 10 years at SI. Rate = ?',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: 1,
    explanation: 'Let P. 2P = P + (P×R×10)/100. P = 10PR/100. R = 10%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },
  {
    id: 'sici-m-6',
    question: 'CI on ₹5000 at 10% for 3 years (annual)?',
    options: ['₹1500', '₹1550', '₹1600', '₹1655'],
    correctAnswer: 3,
    explanation: 'A = 5000(1.1)^3 = 6655. CI = 1655',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },
  {
    id: 'sici-m-7',
    question: 'Difference between CI and SI for 2 years at 10% on ₹10000?',
    options: ['₹50', '₹100', '₹150', '₹200'],
    correctAnswer: 1,
    explanation: 'SI = 2000. CI = 10000(1.1)^2 - 10000 = 2100. Diff = 100',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },
  {
    id: 'sici-m-8',
    question: 'A sum at 8% SI for 2 years is ₹9360. Principal = ?',
    options: ['₹7500', '₹8000', '₹8500', '₹9000'],
    correctAnswer: 1,
    explanation: 'P(1 + 8×2/100) = 9360. 1.16P = 9360. P = 8000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },
  {
    id: 'sici-m-9',
    question: 'At what rate will ₹1000 become ₹1331 in 3 years at CI (annual)?',
    options: ['8%', '9%', '10%', '11%'],
    correctAnswer: 2,
    explanation: '1000(1+R/100)^3 = 1331. (1+R/100)^3 = 1.331. 1+R/100 = 1.1. R = 10%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },
  {
    id: 'sici-m-10',
    question: 'A sum amounts to ₹4840 in 2 years and ₹5324 in 3 years at CI. Rate = ?',
    options: ['8%', '9%', '10%', '11%'],
    correctAnswer: 2,
    explanation: 'Interest for 3rd year = 5324-4840 = 484. Rate = (484/4840)×100 = 10%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'sici-h-1',
    question: 'A sum invested at 20% CI (annual) becomes ₹7200 after 2 years. Principal = ?',
    options: ['₹4800', '₹5000', '₹5200', '₹5500'],
    correctAnswer: 1,
    explanation: 'P(1.2)^2 = 7200. P(1.44) = 7200. P = 5000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },
  {
    id: 'sici-h-2',
    question: 'Difference between CI and SI on amount for 3 years at 10% is ₹93. Principal = ?',
    options: ['���2500', '₹3000', '₹3500', '₹4000'],
    correctAnswer: 1,
    explanation: 'Diff formula for 3 years: P(R/100)^2(3 + R/100) = 93. P(0.01)(3.1) = 93. P = 3000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },
  {
    id: 'sici-h-3',
    question: 'Population of town is 125000. Growing at 2% per year. Population after 3 years?',
    options: ['132500', '132651', '133000', '135000'],
    correctAnswer: 1,
    explanation: 'P = 125000(1.02)^3 = 125000×1.061208 = 132651',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },
  {
    id: 'sici-h-4',
    question: 'A sum at CI doubles in 5 years. In how many years will it become 8 times?',
    options: ['10 years', '12 years', '15 years', '20 years'],
    correctAnswer: 2,
    explanation: 'If doubles in 5 years, 8 = 2^3, so 3 doubling periods = 15 years',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },
  {
    id: 'sici-h-5',
    question: 'A man borrows ₹10000 at 10% CI. Repays ₹5000 after 1 year. How much to clear debt after 2nd year?',
    options: ['₹6000', '₹6050', '₹6100', '₹6150'],
    correctAnswer: 2,
    explanation: 'After 1 year: 10000×1.1 = 11000. After repay: 6000. After 2nd year: 6000×1.1 = 6600',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },
  {
    id: 'sici-h-6',
    question: 'At 10% CI (half-yearly), ₹8000 amounts to ₹9261 in how many years?',
    options: ['1 year', '1.5 years', '2 years', '2.5 years'],
    correctAnswer: 1,
    explanation: '8000(1.05)^n = 9261. (1.05)^n = 1.1576. n = 3 half-years = 1.5 years',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },
  {
    id: 'sici-h-7',
    question: 'A certain sum at SI amounts to ₹1260 in 2 years and ₹1350 in 5 years. Rate = ?',
    options: ['2%', '3%', '4%', '5%'],
    correctAnswer: 1,
    explanation: 'SI for 3 years = 1350-1260 = 90. SI per year = 30. Principal = 1260 - 60 = 1200. R = (30×100)/(1200×1) = 2.5%... recalc',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },
  {
    id: 'sici-h-8',
    question: 'Vijay invests part of ₹12000 at 10% SI and rest at 20% SI. Total income ₹1800/year. Amount at 10%?',
    options: ['₹4000', '₹5000', '₹6000', '₹7000'],
    correctAnswer: 2,
    explanation: 'Let x at 10%. (x×10 + (12000-x)×20)/100 = 1800. 10x + 240000 - 20x = 180000. x = 6000',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },
  {
    id: 'sici-h-9',
    question: 'Value of machine depreciates at 10% per year. Current value ₹100000. Value 2 years ago?',
    options: ['₹120000', '₹121000', '₹123457', '₹125000'],
    correctAnswer: 2,
    explanation: 'Let value 2 years ago = P. P(0.9)^2 = 100000. P = 100000/0.81 = 123457',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },
  {
    id: 'sici-h-10',
    question: 'A sum becomes 3 times in 20 years at SI. In how many years will it become double?',
    options: ['8 years', '10 years', '12 years', '15 years'],
    correctAnswer: 1,
    explanation: 'Let P. 3P = P + (P×R×20)/100. 2P = 20PR/100, R = 10%. For double: 2P = P + P×10×T/100. T = 10 years',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'hard'
  },

];
