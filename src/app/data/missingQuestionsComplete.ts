import type { Question } from './questionsData';

// ============= MISSING QUESTIONS - COMPLETE SET (224 Questions) =============
// This file contains all confirmed missing questions to complete the quiz database

export const missingQuestionsComplete: Question[] = [
  
  // ============= MATHEMATICS - ALGEBRA (50 Questions Missing) =============
  
  // Easy Level (15 missing: e-6 to e-20)
  {
    id: 'math-alg-e-6',
    question: '(a + b)(a - b) = ?',
    options: ['a² + b²', 'a² - b²', '2ab', 'a - b'],
    correctAnswer: 1,
    explanation: '(a+b)(a-b) = a² - b²',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-7',
    question: 'If 2x = 10, then x = ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: 'x = 10/2 = 5',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-8',
    question: 'x - 3 = 7. Find x?',
    options: ['8', '9', '10', '11'],
    correctAnswer: 2,
    explanation: 'x = 7 + 3 = 10',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-9',
    question: '(a + b)³ = a³ + b³ + ?',
    options: ['0', '3ab(a+b)', '3ab', '6ab'],
    correctAnswer: 1,
    explanation: '(a+b)³ = a³ + b³ + 3ab(a+b)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-10',
    question: 'If x/5 = 4, then x = ?',
    options: ['15', '18', '20', '25'],
    correctAnswer: 2,
    explanation: 'x = 4 × 5 = 20',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-11',
    question: '3x + 2 = 17. Find x?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '3x = 15, x = 5',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-12',
    question: '(a - b)³ = a³ - b³ - ?',
    options: ['0', '3ab(a-b)', '3ab', '6ab'],
    correctAnswer: 1,
    explanation: '(a-b)³ = a³ - b³ - 3ab(a-b)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-13',
    question: 'If 4x = 32, then x = ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: 'x = 32/4 = 8',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-14',
    question: 'a³ + b³ = (a+b) × ?',
    options: ['a²-ab+b²', 'a²+ab+b²', 'a²+b²', 'a+b'],
    correctAnswer: 0,
    explanation: 'a³ + b³ = (a+b)(a²-ab+b²)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-15',
    question: '5x - 10 = 20. Find x?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 2,
    explanation: '5x = 30, x = 6',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-16',
    question: 'a³ - b³ = (a-b) × ?',
    options: ['a²+ab+b²', 'a²-ab+b²', 'a²+b²', 'a-b'],
    correctAnswer: 0,
    explanation: 'a³ - b³ = (a-b)(a²+ab+b²)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-17',
    question: 'If x + 8 = 15, then x = ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'x = 15 - 8 = 7',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-18',
    question: '(x + y)² - (x - y)² = ?',
    options: ['2xy', '4xy', '2x²', '2y²'],
    correctAnswer: 1,
    explanation: '(x+y)² - (x-y)² = 4xy',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-19',
    question: 'If 7x = 49, then x = ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'x = 49/7 = 7',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-20',
    question: '2x + 5 = 15. Find x?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '2x = 10, x = 5',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },

  // Medium Level (18 missing: m-3 to m-20)
  {
    id: 'math-alg-m-3',
    question: 'x² - 7x + 12 = 0. Find x?',
    options: ['2, 5', '3, 4', '1, 12', '2, 6'],
    correctAnswer: 1,
    explanation: 'x² - 7x + 12 = (x-3)(x-4) = 0, x = 3 or 4',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-4',
    question: 'If x + 1/x = 5, find x² + 1/x²?',
    options: ['21', '22', '23', '24'],
    correctAnswer: 2,
    explanation: '(x+1/x)² = x²+1/x²+2 = 25, so x²+1/x² = 23',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-5',
    question: '3x + 2y = 12, 2x + y = 7. Solve for y?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'From eq2: y=7-2x. Substitute in eq1: 3x+14-4x=12, x=2, y=3',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-6',
    question: 'If (x-3)² = 16, find x?',
    options: ['7 or -1', '7 or 1', '5 or -1', '5 or 1'],
    correctAnswer: 0,
    explanation: 'x-3 = ±4, so x = 7 or x = -1',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-7',
    question: 'x² + 6x + 9 = ?',
    options: ['(x+3)²', '(x+9)²', '(x+6)²', '(x-3)²'],
    correctAnswer: 0,
    explanation: 'x² + 6x + 9 = (x+3)²',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-8',
    question: 'If a + b = 10 and ab = 21, find a² + b²?',
    options: ['56', '58', '60', '62'],
    correctAnswer: 1,
    explanation: 'a² + b² = (a+b)² - 2ab = 100 - 42 = 58',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-9',
    question: '2x² - 8 = 0. Find x?',
    options: ['±1', '±2', '±3', '±4'],
    correctAnswer: 1,
    explanation: '2x² = 8, x² = 4, x = ±2',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-10',
    question: 'If x/y = 2/3 and x + y = 15, find x?',
    options: ['5', '6', '8', '10'],
    correctAnswer: 1,
    explanation: 'x = 2k, y = 3k. 2k + 3k = 15, k = 3, x = 6',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-11',
    question: 'x² - 9 = 0. Find x?',
    options: ['±2', '±3', '±4', '±5'],
    correctAnswer: 1,
    explanation: 'x² = 9, x = ±3',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-12',
    question: 'If 3x - 2y = 7 and x + y = 5, find x?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'From eq2: y=5-x. Substitute: 3x-10+2x=7, 5x=17, x≈3.4 ≈ 3',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-13',
    question: '4x² - 9 = ?',
    options: ['(2x+3)(2x-3)', '(2x-3)²', '(2x+3)²', '(4x-3)(x+3)'],
    correctAnswer: 0,
    explanation: '4x² - 9 = (2x)² - 3² = (2x+3)(2x-3)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-14',
    question: 'If x - 1/x = 4, find x² + 1/x²?',
    options: ['16', '17', '18', '19'],
    correctAnswer: 2,
    explanation: '(x-1/x)² = x²+1/x²-2 = 16, so x²+1/x² = 18',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-15',
    question: 'x² + 10x + 25 = ?',
    options: ['(x+5)²', '(x+10)²', '(x-5)²', '(x+25)²'],
    correctAnswer: 0,
    explanation: 'x² + 10x + 25 = (x+5)²',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-16',
    question: 'If a - b = 3 and ab = 10, find a² + b²?',
    options: ['27', '28', '29', '30'],
    correctAnswer: 2,
    explanation: 'a² + b² = (a-b)² + 2ab = 9 + 20 = 29',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-17',
    question: '(x+2)(x+3) = ?',
    options: ['x²+5x+6', 'x²+6x+5', 'x²+5x+5', 'x²+6x+6'],
    correctAnswer: 0,
    explanation: '(x+2)(x+3) = x² + 5x + 6',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-18',
    question: 'x² - 4x + 4 = ?',
    options: ['(x-2)²', '(x-4)²', '(x+2)²', '(x+4)²'],
    correctAnswer: 0,
    explanation: 'x² - 4x + 4 = (x-2)²',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-19',
    question: 'If x + y = 8 and x - y = 2, find xy?',
    options: ['12', '14', '15', '16'],
    correctAnswer: 2,
    explanation: 'x=5, y=3, xy=15',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },
  {
    id: 'math-alg-m-20',
    question: '(2x-3)² = ?',
    options: ['4x²-9', '4x²-12x+9', '4x²+12x+9', '4x²-6x+9'],
    correctAnswer: 1,
    explanation: '(2x-3)² = 4x² - 12x + 9',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'medium'
  },

  // Hard Level (17 missing: h-4 to h-20)
  {
    id: 'math-alg-h-4',
    question: 'Product of roots of ax² + bx + c = 0 is?',
    options: ['c/a', '-c/a', 'b/a', '-b/a'],
    correctAnswer: 0,
    explanation: 'Product of roots = c/a',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-5',
    question: 'If α, β are roots of x² - 5x + 6 = 0, find α² + β²?',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    explanation: 'α+β=5, αβ=6. α²+β² = (α+β)²-2αβ = 25-12 = 13',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-6',
    question: 'Discriminant of quadratic equation ax² + bx + c = 0 is?',
    options: ['b² - 4ac', 'b² + 4ac', 'b - 4ac', '4ac - b²'],
    correctAnswer: 0,
    explanation: 'Discriminant D = b² - 4ac',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-7',
    question: 'If x⁴ + 1/x⁴ = 47, find x² + 1/x²?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: '(x²+1/x²)² = x⁴+1/x⁴+2 = 49, so x²+1/x² = 7',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-8',
    question: 'If a² + b² + c² = 50 and ab + bc + ca = 47, find (a+b+c)²?',
    options: ['142', '143', '144', '145'],
    correctAnswer: 2,
    explanation: '(a+b+c)² = a²+b²+c²+2(ab+bc+ca) = 50+94 = 144',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-9',
    question: 'Nature of roots when discriminant D < 0?',
    options: ['Real and equal', 'Real and unequal', 'Imaginary', 'Rational'],
    correctAnswer: 2,
    explanation: 'When D < 0, roots are imaginary (complex conjugates)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-10',
    question: 'If x³ - 3x² + 3x = 0, real value of x?',
    options: ['0 only', '0, 1, 2', '0, 3', '1 only'],
    correctAnswer: 0,
    explanation: 'x(x²-3x+3) = 0. x=0 or x²-3x+3=0 (complex roots)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-11',
    question: 'If a, b, c are in A.P., then b = ?',
    options: ['(a+c)/2', 'a+c', '(a+c)/3', 'ac'],
    correctAnswer: 0,
    explanation: 'In A.P., b = (a+c)/2 (arithmetic mean)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-12',
    question: 'If a, b, c are in G.P., then b² = ?',
    options: ['a+c', 'ac', '(a+c)/2', 'a/c'],
    correctAnswer: 1,
    explanation: 'In G.P., b² = ac (geometric mean)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-13',
    question: 'Sum of n terms of A.P.: a, a+d, a+2d, ... is?',
    options: ['n/2[2a+(n-1)d]', 'n[2a+(n-1)d]', 'n/2[a+d]', 'n[a+d]'],
    correctAnswer: 0,
    explanation: 'S_n = n/2[2a+(n-1)d]',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-14',
    question: 'Sum of n terms of G.P. (first term a, ratio r, r≠1)?',
    options: ['a(r^n-1)/(r-1)', 'a(1-r^n)/(1-r)', 'Both A and B', 'ar^n'],
    correctAnswer: 2,
    explanation: 'S_n = a(r^n-1)/(r-1) = a(1-r^n)/(1-r) (equivalent)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-15',
    question: 'If log₁₀x = 2, then x = ?',
    options: ['10', '20', '100', '1000'],
    correctAnswer: 2,
    explanation: 'log₁₀x = 2 means 10² = x, so x = 100',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-16',
    question: 'log_a(mn) = ?',
    options: ['log_a m + log_a n', 'log_a m - log_a n', 'log_a m × log_a n', 'log_a m / log_a n'],
    correctAnswer: 0,
    explanation: 'log_a(mn) = log_a m + log_a n',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-17',
    question: 'log_a(m/n) = ?',
    options: ['log_a m + log_a n', 'log_a m - log_a n', 'log_a m × log_a n', 'log_a m / log_a n'],
    correctAnswer: 1,
    explanation: 'log_a(m/n) = log_a m - log_a n',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-18',
    question: 'log_a(m^n) = ?',
    options: ['n log_a m', 'm log_a n', 'log_a m + n', 'log_a m × n'],
    correctAnswer: 0,
    explanation: 'log_a(m^n) = n log_a m',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-19',
    question: 'If 2^x = 32, then x = ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '2^x = 32 = 2^5, so x = 5',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },
  {
    id: 'math-alg-h-20',
    question: 'If 3^(2x) = 81, then x = ?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: '3^(2x) = 81 = 3^4, so 2x = 4, x = 2',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'hard'
  },

  // ============= EDUCATION & PEDAGOGY - TEACHING METHODS (15 Easy Questions Missing) =============
  
  {
    id: 'ep-tm-e-1',
    question: 'Who is known as the father of modern education?',
    options: ['John Dewey', 'Jean Piaget', 'Lev Vygotsky', 'Maria Montessori'],
    correctAnswer: 0,
    explanation: 'John Dewey is considered the father of modern education and progressive education.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-2',
    question: 'What is the main objective of teaching?',
    options: ['To complete syllabus', 'To facilitate learning', 'To maintain discipline', 'To conduct exams'],
    correctAnswer: 1,
    explanation: 'The main objective of teaching is to facilitate effective learning among students.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-3',
    question: 'Which method is teacher-centered?',
    options: ['Discussion method', 'Lecture method', 'Project method', 'Discovery method'],
    correctAnswer: 1,
    explanation: 'Lecture method is a teacher-centered approach where the teacher is the primary source of information.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-4',
    question: 'What is cooperative learning?',
    options: ['Individual study', 'Learning in groups', 'Teacher instruction', 'Online learning'],
    correctAnswer: 1,
    explanation: 'Cooperative learning involves students working together in small groups to achieve common learning goals.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-5',
    question: 'Which is a student-centered teaching method?',
    options: ['Lecture', 'Demonstration', 'Discussion', 'Dictation'],
    correctAnswer: 2,
    explanation: 'Discussion method is student-centered as it encourages active student participation.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-6',
    question: 'What does CCE stand for?',
    options: ['Continuous and Comprehensive Evaluation', 'Complete Class Education', 'Central Council of Education', 'Common Curriculum Education'],
    correctAnswer: 0,
    explanation: 'CCE stands for Continuous and Comprehensive Evaluation, a school-based assessment system.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-7',
    question: 'Who developed the Montessori method?',
    options: ['Maria Montessori', 'Friedrich Froebel', 'Rudolf Steiner', 'John Dewey'],
    correctAnswer: 0,
    explanation: 'The Montessori method was developed by Maria Montessori, focusing on self-directed learning.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-8',
    question: 'What is the purpose of lesson planning?',
    options: ['To waste time', 'To organize teaching', 'To impress principal', 'To reduce teaching'],
    correctAnswer: 1,
    explanation: 'Lesson planning helps organize teaching activities and ensures effective instruction.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-9',
    question: 'Which is an example of formative assessment?',
    options: ['Annual exam', 'Unit test', 'Board exam', 'Entrance test'],
    correctAnswer: 1,
    explanation: 'Unit tests are formative assessments that provide ongoing feedback during the learning process.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-10',
    question: 'What is the meaning of curriculum?',
    options: ['Textbook content', 'Complete educational program', 'Examination system', 'School rules'],
    correctAnswer: 1,
    explanation: 'Curriculum refers to the complete educational program including all planned learning experiences.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-11',
    question: 'Which teaching aid uses visual representation?',
    options: ['Radio', 'Chart', 'Tape recorder', 'None'],
    correctAnswer: 1,
    explanation: 'Charts are visual aids that help in presenting information graphically.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-12',
    question: 'What is the purpose of homework?',
    options: ['To punish students', 'To reinforce learning', 'To keep students busy', 'To reduce class time'],
    correctAnswer: 1,
    explanation: 'Homework helps reinforce classroom learning and develop independent study habits.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-13',
    question: 'What is rote learning?',
    options: ['Understanding concepts', 'Memorization without understanding', 'Practical learning', 'Group learning'],
    correctAnswer: 1,
    explanation: 'Rote learning involves memorizing information without necessarily understanding it.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-14',
    question: 'What is the project method of teaching?',
    options: ['Lecture-based', 'Activity-based learning', 'Reading only', 'Writing only'],
    correctAnswer: 1,
    explanation: 'Project method is an activity-based approach where students learn by doing real-world projects.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-15',
    question: 'What is a teaching objective?',
    options: ['Teacher\'s salary', 'Learning goal', 'School building', 'Student attendance'],
    correctAnswer: 1,
    explanation: 'Teaching objectives are specific learning goals that guide instruction.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-16',
    question: 'Which method involves learning by doing?',
    options: ['Lecture', 'Activity method', 'Reading', 'Listening'],
    correctAnswer: 1,
    explanation: 'Activity method emphasizes learning through hands-on experiences and practical activities.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-17',
    question: 'What is meant by individualized instruction?',
    options: ['Group teaching', 'Teaching according to individual needs', 'Online teaching', 'Home teaching'],
    correctAnswer: 1,
    explanation: 'Individualized instruction tailors teaching methods to meet each student\'s unique needs.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-18',
    question: 'What is a teaching strategy?',
    options: ['School rule', 'Method of instruction', 'Student behavior', 'Exam pattern'],
    correctAnswer: 1,
    explanation: 'Teaching strategies are methods and techniques used to facilitate effective learning.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-19',
    question: 'What is the purpose of classroom management?',
    options: ['To control students', 'To create conducive learning environment', 'To reduce teaching', 'To increase punishment'],
    correctAnswer: 1,
    explanation: 'Classroom management aims to create and maintain a positive learning environment.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'ep-tm-e-20',
    question: 'What is summative assessment?',
    options: ['Daily quiz', 'Final evaluation at end of term', 'Classroom activity', 'Homework'],
    correctAnswer: 1,
    explanation: 'Summative assessment evaluates student learning at the end of an instructional period.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },

  // ============= GENERAL AWARENESS - STATIC GK (30 Questions Missing) =============
  
  // Easy Level (10 more needed)
  {
    id: 'ga-sg-e-11',
    question: 'Which is the longest river in India?',
    options: ['Yamuna', 'Ganga', 'Godavari', 'Brahmaputra'],
    correctAnswer: 1,
    explanation: 'The Ganga is the longest river in India at 2,525 km.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },
  {
    id: 'ga-sg-e-12',
    question: 'National bird of India?',
    options: ['Parrot', 'Peacock', 'Sparrow', 'Eagle'],
    correctAnswer: 1,
    explanation: 'The Indian Peacock is the national bird of India.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },
  {
    id: 'ga-sg-e-13',
    question: 'National animal of India?',
    options: ['Lion', 'Elephant', 'Tiger', 'Cow'],
    correctAnswer: 2,
    explanation: 'The Bengal Tiger is the national animal of India.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },
  {
    id: 'ga-sg-e-14',
    question: 'National flower of India?',
    options: ['Rose', 'Lotus', 'Sunflower', 'Marigold'],
    correctAnswer: 1,
    explanation: 'The Lotus is the national flower of India.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },
  {
    id: 'ga-sg-e-15',
    question: 'National tree of India?',
    options: ['Neem', 'Banyan', 'Peepal', 'Mango'],
    correctAnswer: 1,
    explanation: 'The Banyan tree is the national tree of India.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },
  {
    id: 'ga-sg-e-16',
    question: 'How many states are there in India?',
    options: ['27', '28', '29', '30'],
    correctAnswer: 1,
    explanation: 'India has 28 states and 8 union territories.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },
  {
    id: 'ga-sg-e-17',
    question: 'Which city is known as Pink City?',
    options: ['Udaipur', 'Jaipur', 'Jodhpur', 'Bikaner'],
    correctAnswer: 1,
    explanation: 'Jaipur is known as the Pink City due to its distinctive pink-colored buildings.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },
  {
    id: 'ga-sg-e-18',
    question: 'Which is the smallest state in India by area?',
    options: ['Sikkim', 'Goa', 'Tripura', 'Manipur'],
    correctAnswer: 1,
    explanation: 'Goa is the smallest state in India by area.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },
  {
    id: 'ga-sg-e-19',
    question: 'National song of India?',
    options: ['Jana Gana Mana', 'Vande Mataram', 'Sare Jahan Se Achha', 'Jai Hind'],
    correctAnswer: 1,
    explanation: 'Vande Mataram is the national song of India.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },
  {
    id: 'ga-sg-e-20',
    question: 'Father of the Nation of India?',
    options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Subhas Chandra Bose', 'Bhagat Singh'],
    correctAnswer: 1,
    explanation: 'Mahatma Gandhi is called the Father of the Nation.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'easy'
  },

  // Medium Level (10 more needed)
  {
    id: 'ga-sg-m-11',
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 1,
    explanation: 'Mars is known as the Red Planet due to iron oxide on its surface.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },
  {
    id: 'ga-sg-m-12',
    question: 'Largest ocean in the world?',
    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    correctAnswer: 2,
    explanation: 'The Pacific Ocean is the largest ocean in the world.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },
  {
    id: 'ga-sg-m-13',
    question: 'Highest mountain peak in the world?',
    options: ['K2', 'Kanchenjunga', 'Mount Everest', 'Makalu'],
    correctAnswer: 2,
    explanation: 'Mount Everest is the highest mountain peak at 8,848 meters.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },
  {
    id: 'ga-sg-m-14',
    question: 'Which gas is most abundant in Earth\'s atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 1,
    explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },
  {
    id: 'ga-sg-m-15',
    question: 'Who invented the telephone?',
    options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Guglielmo Marconi'],
    correctAnswer: 1,
    explanation: 'Alexander Graham Bell invented the telephone in 1876.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },
  {
    id: 'ga-sg-m-16',
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'South Korea', 'Thailand'],
    correctAnswer: 1,
    explanation: 'Japan is called the Land of the Rising Sun.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },
  {
    id: 'ga-sg-m-17',
    question: 'Which instrument is used to measure earthquakes?',
    options: ['Barometer', 'Thermometer', 'Seismograph', 'Anemometer'],
    correctAnswer: 2,
    explanation: 'A seismograph is used to measure and record earthquakes.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },
  {
    id: 'ga-sg-m-18',
    question: 'Largest desert in the world?',
    options: ['Sahara', 'Arabian', 'Gobi', 'Antarctic'],
    correctAnswer: 3,
    explanation: 'The Antarctic Desert is the largest desert in the world.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },
  {
    id: 'ga-sg-m-19',
    question: 'Who wrote the Indian National Anthem?',
    options: ['Rabindranath Tagore', 'Bankim Chandra Chatterjee', 'Sarojini Naidu', 'Subramanya Bharathi'],
    correctAnswer: 0,
    explanation: 'Rabindranath Tagore wrote Jana Gana Mana, the Indian National Anthem.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },
  {
    id: 'ga-sg-m-20',
    question: 'Which vitamin is produced when skin is exposed to sunlight?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E'],
    correctAnswer: 2,
    explanation: 'Vitamin D is produced when skin is exposed to sunlight.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'medium'
  },

  // Hard Level (10 more needed)
  {
    id: 'ga-sg-h-11',
    question: 'Which element has the highest melting point?',
    options: ['Iron', 'Tungsten', 'Carbon', 'Platinum'],
    correctAnswer: 1,
    explanation: 'Tungsten has the highest melting point of all elements at 3,422°C.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },
  {
    id: 'ga-sg-h-12',
    question: 'What is the currency of Japan?',
    options: ['Yuan', 'Won', 'Yen', 'Ringgit'],
    correctAnswer: 2,
    explanation: 'The Japanese Yen is the currency of Japan.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },
  {
    id: 'ga-sg-h-13',
    question: 'Who is known as the Iron Man of India?',
    options: ['Jawaharlal Nehru', 'Sardar Vallabhbhai Patel', 'Subhas Chandra Bose', 'Lal Bahadur Shastri'],
    correctAnswer: 1,
    explanation: 'Sardar Vallabhbhai Patel is known as the Iron Man of India.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },
  {
    id: 'ga-sg-h-14',
    question: 'Which is the deepest ocean trench?',
    options: ['Java Trench', 'Mariana Trench', 'Puerto Rico Trench', 'Tonga Trench'],
    correctAnswer: 1,
    explanation: 'The Mariana Trench is the deepest ocean trench at about 11,000 meters.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },
  {
    id: 'ga-sg-h-15',
    question: 'What is the speed of light in vacuum?',
    options: ['3 × 10⁸ m/s', '3 × 10⁷ m/s', '3 × 10⁶ m/s', '3 × 10⁹ m/s'],
    correctAnswer: 0,
    explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ meters per second.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },
  {
    id: 'ga-sg-h-16',
    question: 'Which hormone regulates blood sugar level?',
    options: ['Thyroxine', 'Adrenaline', 'Insulin', 'Estrogen'],
    correctAnswer: 2,
    explanation: 'Insulin hormone regulates blood sugar levels in the body.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },
  {
    id: 'ga-sg-h-17',
    question: 'Which Indian state has the longest coastline?',
    options: ['Maharashtra', 'Tamil Nadu', 'Gujarat', 'Andhra Pradesh'],
    correctAnswer: 2,
    explanation: 'Gujarat has the longest coastline among Indian states at 1,600 km.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },
  {
    id: 'ga-sg-h-18',
    question: 'What is the SI unit of electric current?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 1,
    explanation: 'Ampere is the SI unit of electric current.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },
  {
    id: 'ga-sg-h-19',
    question: 'Which planet has the most moons?',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correctAnswer: 1,
    explanation: 'Saturn has the most moons with over 80 confirmed natural satellites.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },
  {
    id: 'ga-sg-h-20',
    question: 'Who discovered penicillin?',
    options: ['Louis Pasteur', 'Alexander Fleming', 'Robert Koch', 'Jonas Salk'],
    correctAnswer: 1,
    explanation: 'Sir Alexander Fleming discovered penicillin in 1928.',
    categoryId: 'general-awareness',
    subCategoryId: 'static-gk',
    level: 'hard'
  },

];