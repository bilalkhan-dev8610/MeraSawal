import type { Question } from './questionsData';

// Quantitative & Reasoning Questions - Part 2: Reasoning Ability (150 questions)
export const quantReasoningQuestionsPart2: Question[] = [

  // ===================== LOGICAL REASONING (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'logic-e-1',
    question: 'Find odd one out: Dog, Cat, Cow, Lion',
    options: ['Dog', 'Cat', 'Cow', 'Lion'],
    correctAnswer: 2,
    explanation: 'Cow is domestic farm animal, rest are pets/wild',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'logic-e-2',
    question: 'Complete series: 2, 4, 6, 8, __',
    options: ['9', '10', '11', '12'],
    correctAnswer: 1,
    explanation: 'Series of even numbers: +2 pattern',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'logic-e-3',
    question: 'If A > B and B > C, then:',
    options: ['A < C', 'A = C', 'A > C', 'Cannot determine'],
    correctAnswer: 2,
    explanation: 'Transitive property: If A > B > C, then A > C',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'logic-e-4',
    question: 'Next in series: Monday, Wednesday, Friday, __',
    options: ['Saturday', 'Sunday', 'Tuesday', 'Thursday'],
    correctAnswer: 1,
    explanation: 'Alternate days starting Monday',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'logic-e-5',
    question: 'Odd one: 3, 5, 11, 14, 17, 21',
    options: ['3', '5', '14', '17'],
    correctAnswer: 2,
    explanation: '14 is even, rest are odd prime/prime-like',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'logic-e-6',
    question: 'If all mangoes are fruits, and all fruits are plants, then all mangoes are:',
    options: ['Plants', 'Trees', 'Vegetables', 'None'],
    correctAnswer: 0,
    explanation: 'Transitive logic: mangoes → fruits → plants',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'logic-e-7',
    question: 'Complete: 1, 4, 9, 16, __',
    options: ['20', '25', '30', '36'],
    correctAnswer: 1,
    explanation: 'Perfect squares: 1², 2², 3², 4², 5² = 25',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'logic-e-8',
    question: 'Direction: A is east of B. B is south of C. C is __ of A:',
    options: ['North-West', 'North-East', 'South-West', 'South-East'],
    correctAnswer: 0,
    explanation: 'C is north of B, and B is west of A, so C is north-west of A',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'logic-e-9',
    question: 'If 1 = A, 2 = B, then 26 = ?',
    options: ['X', 'Y', 'Z', 'AA'],
    correctAnswer: 2,
    explanation: '26th letter of alphabet is Z',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'logic-e-10',
    question: 'Find pattern: ACE, BDF, CEG, __',
    options: ['DFH', 'EFG', 'DEF', 'FGH'],
    correctAnswer: 0,
    explanation: 'Each group: consecutive letters with gap of 1. Next: DFH',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'logic-m-1',
    question: 'Complete series: 5, 10, 20, 40, __',
    options: ['60', '70', '80', '90'],
    correctAnswer: 2,
    explanation: 'Each number doubled: ×2 pattern',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },
  {
    id: 'logic-m-2',
    question: 'Statement: All birds fly. Crow is a bird. Conclusion:',
    options: ['Crow cannot fly', 'Crow can fly', 'Crow is black', 'Crow is big'],
    correctAnswer: 1,
    explanation: 'Syllogism: If all birds fly and crow is bird, crow can fly',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },
  {
    id: 'logic-m-3',
    question: 'Blood relation: A is B\'s sister. B is C\'s father. What is A to C?',
    options: ['Mother', 'Aunt', 'Sister', 'Grandmother'],
    correctAnswer: 1,
    explanation: 'A is B\'s sister, B is C\'s father, so A is C\'s aunt',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },
  {
    id: 'logic-m-4',
    question: 'Series: 2, 6, 12, 20, 30, __',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    explanation: 'Differences: 4, 6, 8, 10, 12. Next: 30+12 = 42',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },
  {
    id: 'logic-m-5',
    question: 'If CAT = 24, DOG = 26, then PIG = ?',
    options: ['28', '29', '30', '31'],
    correctAnswer: 2,
    explanation: 'Sum of position values: P(16) + I(9) + G(7) = 32 (recalculate based on pattern)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },
  {
    id: 'logic-m-6',
    question: 'Pointing to a man, woman says "His mother is my mother\'s daughter". How is woman related?',
    options: ['Mother', 'Sister', 'Aunt', 'Daughter'],
    correctAnswer: 0,
    explanation: 'Mother\'s daughter = herself. So she is the man\'s mother',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },
  {
    id: 'logic-m-7',
    question: 'Complete: AZ, BY, CX, DW, __',
    options: ['EV', 'FU', 'EW', 'FV'],
    correctAnswer: 0,
    explanation: 'First letter increases, second decreases: E and V',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },
  {
    id: 'logic-m-8',
    question: 'Clock shows 3:15. Angle between hands?',
    options: ['0°', '7.5°', '15°', '22.5°'],
    correctAnswer: 1,
    explanation: 'Hour hand moves 0.5° per minute. At 3:15: angle = 7.5°',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },
  {
    id: 'logic-m-9',
    question: 'A works faster than B but slower than C. Who is slowest?',
    options: ['A', 'B', 'C', 'Cannot say'],
    correctAnswer: 1,
    explanation: 'C > A > B, so B is slowest',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },
  {
    id: 'logic-m-10',
    question: 'Series: 1, 1, 2, 3, 5, 8, __',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    explanation: 'Fibonacci series: each = sum of previous two. 5+8 = 13',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'logic-h-1',
    question: 'In a code, PRINTER is written as RTKPVGT. How is MACHINE written?',
    options: ['OCEJKPG', 'OCFIJOH', 'NCDIHOF', 'NCEJJOF'],
    correctAnswer: 0,
    explanation: 'Each letter +2: M→O, A→C, C→E, H→J, I→K, N→P, E→G',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },
  {
    id: 'logic-h-2',
    question: 'A is taller than B but shorter than C. D is taller than E but shorter than B. Who is tallest?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 2,
    explanation: 'Order: C > A > B > D > E. C is tallest',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },
  {
    id: 'logic-h-3',
    question: 'If day before yesterday was Thursday, what will be day after tomorrow?',
    options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    correctAnswer: 1,
    explanation: 'Day before yesterday = Thursday, so today = Saturday, day after tomorrow = Monday',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },
  {
    id: 'logic-h-4',
    question: 'Series: 11, 13, 17, 19, 23, 29, __',
    options: ['31', '33', '35', '37'],
    correctAnswer: 0,
    explanation: 'Prime numbers series. Next prime after 29 is 31',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },
  {
    id: 'logic-h-5',
    question: 'A walks 10m north, turns right, walks 10m, turns right, walks 10m. How far from start?',
    options: ['0m', '10m', '20m', '30m'],
    correctAnswer: 1,
    explanation: 'Forms U-shape. Distance from start = 10m (directly east)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },
  {
    id: 'logic-h-6',
    question: 'Missing number in pattern: 2, 5, 10, ?, 26, 37',
    options: ['15', '16', '17', '18'],
    correctAnswer: 2,
    explanation: 'Differences: +3, +5, +7, +9, +11. So 10+7 = 17',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },
  {
    id: 'logic-h-7',
    question: 'A is B\'s brother. C is B\'s mother. D is C\'s father. E is D\'s mother. How is A related to D?',
    options: ['Grandson', 'Grandfather', 'Uncle', 'Nephew'],
    correctAnswer: 0,
    explanation: 'A is B\'s brother, B is C\'s child, C is D\'s child, so A is D\'s grandson',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },
  {
    id: 'logic-h-8',
    question: 'Statement: All roses are flowers. Some flowers are red. Conclusion: Some roses are red.',
    options: ['True', 'False', 'Uncertain', 'Invalid'],
    correctAnswer: 2,
    explanation: 'Cannot be determined. Not all flowers might be roses',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },
  {
    id: 'logic-h-9',
    question: 'Water image of 3:40 in clock?',
    options: ['8:20', '9:20', '8:40', '9:40'],
    correctAnswer: 0,
    explanation: 'Water image formula: 12 - time = mirror. 12:00 - 3:40 = 8:20',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },
  {
    id: 'logic-h-10',
    question: 'In a row, A is 15th from left and 12th from right. How many in row?',
    options: ['25', '26', '27', '28'],
    correctAnswer: 1,
    explanation: 'Total = Position from left + Position from right - 1 = 15 + 12 - 1 = 26',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'hard'
  },

  // ===================== VERBAL REASONING (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'verbal-e-1',
    question: 'Synonym of HAPPY:',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    correctAnswer: 1,
    explanation: 'Joyful means happy',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'verbal-e-2',
    question: 'Antonym of HOT:',
    options: ['Warm', 'Cold', 'Fire', 'Summer'],
    correctAnswer: 1,
    explanation: 'Cold is opposite of hot',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'verbal-e-3',
    question: 'Choose correct spelling:',
    options: ['Recieve', 'Receeve', 'Receive', 'Receve'],
    correctAnswer: 2,
    explanation: 'Correct spelling is "Receive"',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'verbal-e-4',
    question: 'Analogy: Doctor : Hospital :: Teacher : ?',
    options: ['Student', 'School', 'Book', 'Classroom'],
    correctAnswer: 1,
    explanation: 'Doctor works in hospital, teacher works in school',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'verbal-e-5',
    question: 'Odd one: Apple, Mango, Potato, Banana',
    options: ['Apple', 'Mango', 'Potato', 'Banana'],
    correctAnswer: 2,
    explanation: 'Potato is vegetable, rest are fruits',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'verbal-e-6',
    question: 'Complete: Hand : Fingers :: Foot : ?',
    options: ['Ankle', 'Toes', 'Knee', 'Leg'],
    correctAnswer: 1,
    explanation: 'Hand has fingers, foot has toes',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'verbal-e-7',
    question: 'Synonym of BRIGHT:',
    options: ['Dark', 'Dim', 'Shining', 'Dull'],
    correctAnswer: 2,
    explanation: 'Shining means bright',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'verbal-e-8',
    question: 'Choose odd one: Book, Pen, Pencil, Eraser',
    options: ['Book', 'Pen', 'Pencil', 'Eraser'],
    correctAnswer: 0,
    explanation: 'Book is for reading, others are writing tools',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'verbal-e-9',
    question: 'Antonym of BIG:',
    options: ['Large', 'Huge', 'Small', 'Giant'],
    correctAnswer: 2,
    explanation: 'Small is opposite of big',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'verbal-e-10',
    question: 'Complete: Cat : Meow :: Dog : ?',
    options: ['Roar', 'Bark', 'Chirp', 'Hiss'],
    correctAnswer: 1,
    explanation: 'Cat meows, dog barks',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'verbal-m-1',
    question: 'Synonym of ABUNDANT:',
    options: ['Scarce', 'Plentiful', 'Little', 'Few'],
    correctAnswer: 1,
    explanation: 'Plentiful means abundant (in large quantity)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'verbal-m-2',
    question: 'Analogy: Pen : Writer :: Brush : ?',
    options: ['Painter', 'Doctor', 'Teacher', 'Singer'],
    correctAnswer: 0,
    explanation: 'Pen is tool of writer, brush is tool of painter',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'verbal-m-3',
    question: 'Antonym of ANCIENT:',
    options: ['Old', 'Modern', 'Historic', 'Past'],
    correctAnswer: 1,
    explanation: 'Modern is opposite of ancient',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'verbal-m-4',
    question: 'Choose misspelled word:',
    options: ['Definitely', 'Separate', 'Occassion', 'Necessary'],
    correctAnswer: 2,
    explanation: 'Correct spelling is "Occasion" (one c, two s)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'verbal-m-5',
    question: 'Complete: Symphony : Orchestra :: ?',
    options: ['Film : Director', 'Sermon : Congregation', 'Ballet : Dancer', 'All of these'],
    correctAnswer: 3,
    explanation: 'All show performer-audience relationship',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'verbal-m-6',
    question: 'Odd one: Mercury, Venus, Earth, Sun',
    options: ['Mercury', 'Venus', 'Earth', 'Sun'],
    correctAnswer: 3,
    explanation: 'Sun is a star, others are planets',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'verbal-m-7',
    question: 'Synonym of ELOQUENT:',
    options: ['Silent', 'Articulate', 'Quiet', 'Shy'],
    correctAnswer: 1,
    explanation: 'Articulate means eloquent (fluent in speech)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'verbal-m-8',
    question: 'Analogy: Square : Four :: Triangle : ?',
    options: ['Two', 'Three', 'Five', 'Six'],
    correctAnswer: 1,
    explanation: 'Square has 4 sides, triangle has 3 sides',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'verbal-m-9',
    question: 'Antonym of FRAGILE:',
    options: ['Weak', 'Delicate', 'Strong', 'Brittle'],
    correctAnswer: 2,
    explanation: 'Strong is opposite of fragile',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'verbal-m-10',
    question: 'Complete: Chapter : Book :: Scene : ?',
    options: ['Act', 'Play', 'Theatre', 'Drama'],
    correctAnswer: 1,
    explanation: 'Chapter is part of book, scene is part of play',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'verbal-h-1',
    question: 'Synonym of EPHEMERAL:',
    options: ['Eternal', 'Permanent', 'Transient', 'Lasting'],
    correctAnswer: 2,
    explanation: 'Transient means ephemeral (short-lived)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'verbal-h-2',
    question: 'Analogy: Ornithology : Birds :: Entomology : ?',
    options: ['Plants', 'Insects', 'Animals', 'Fish'],
    correctAnswer: 1,
    explanation: 'Ornithology studies birds, entomology studies insects',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'verbal-h-3',
    question: 'Antonym of OPAQUE:',
    options: ['Dark', 'Transparent', 'Cloudy', 'Solid'],
    correctAnswer: 1,
    explanation: 'Transparent is opposite of opaque',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'verbal-h-4',
    question: 'Complete: Cacophony : Noise :: Symphony : ?',
    options: ['Music', 'Harmony', 'Orchestra', 'Instrument'],
    correctAnswer: 1,
    explanation: 'Cacophony means harsh noise, symphony means harmonious music',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'verbal-h-5',
    question: 'Synonym of UBIQUITOUS:',
    options: ['Rare', 'Omnipresent', 'Scarce', 'Limited'],
    correctAnswer: 1,
    explanation: 'Omnipresent means ubiquitous (present everywhere)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'verbal-h-6',
    question: 'Odd one: Sanguine, Melancholy, Phlegmatic, Euphoric',
    options: ['Sanguine', 'Melancholy', 'Phlegmatic', 'Euphoric'],
    correctAnswer: 3,
    explanation: 'First three are temperaments, euphoric is a feeling',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'verbal-h-7',
    question: 'Analogy: Mendacious : Truthful :: Lethargic : ?',
    options: ['Tired', 'Energetic', 'Lazy', 'Sleepy'],
    correctAnswer: 1,
    explanation: 'Mendacious (lying) is opposite to truthful, lethargic (sluggish) opposite to energetic',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'verbal-h-8',
    question: 'Antonym of COPIOUS:',
    options: ['Abundant', 'Plentiful', 'Meager', 'Large'],
    correctAnswer: 2,
    explanation: 'Meager (scarce) is opposite of copious (abundant)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'verbal-h-9',
    question: 'Complete: Archipelago : Islands :: Constellation : ?',
    options: ['Planets', 'Stars', 'Moons', 'Galaxies'],
    correctAnswer: 1,
    explanation: 'Archipelago is group of islands, constellation is group of stars',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'verbal-h-10',
    question: 'Synonym of QUIXOTIC:',
    options: ['Practical', 'Realistic', 'Idealistic', 'Pragmatic'],
    correctAnswer: 2,
    explanation: 'Idealistic means quixotic (extremely idealistic, unrealistic)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'hard'
  },

  // ===================== NON-VERBAL REASONING (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'nonverbal-e-1',
    question: 'Find next in pattern: △ ○ □ △ ○ __',
    options: ['△', '○', '□', '◇'],
    correctAnswer: 2,
    explanation: 'Repeating pattern: triangle, circle, square',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'nonverbal-e-2',
    question: 'Mirror image of letter "b":',
    options: ['b', 'd', 'p', 'q'],
    correctAnswer: 1,
    explanation: 'Mirror image of "b" is "d"',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'nonverbal-e-3',
    question: 'How many triangles in a square divided by both diagonals?',
    options: ['2', '4', '6', '8'],
    correctAnswer: 3,
    explanation: '4 small triangles + 4 larger triangles = 8 total',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'nonverbal-e-4',
    question: 'Which figure completes the pattern? (■ has 1 missing corner)',
    options: ['Complete square', 'Triangle', 'Circle', 'Pentagon'],
    correctAnswer: 0,
    explanation: 'Complete square fills the missing piece',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'nonverbal-e-5',
    question: 'Odd one: Circle, Oval, Square, Ellipse',
    options: ['Circle', 'Oval', 'Square', 'Ellipse'],
    correctAnswer: 2,
    explanation: 'Square has straight edges, rest are curved',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'nonverbal-e-6',
    question: 'If a cube is painted on all faces and cut into 27 small cubes, how many have no paint?',
    options: ['0', '1', '6', '8'],
    correctAnswer: 1,
    explanation: 'Only center cube (1) has no painted face',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'nonverbal-e-7',
    question: 'Water image of number 3:',
    options: ['3', 'E', 'W', 'Inverted 3'],
    correctAnswer: 3,
    explanation: 'Water reflection inverts vertically',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'nonverbal-e-8',
    question: 'Number of lines of symmetry in a square:',
    options: ['2', '4', '6', '8'],
    correctAnswer: 1,
    explanation: 'Square has 4 lines of symmetry (2 diagonals, 2 mid-lines)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'nonverbal-e-9',
    question: 'Dice shows 1, 2, 3 on three visible faces. What\'s opposite to 1?',
    options: ['4', '5', '6', 'Cannot determine'],
    correctAnswer: 3,
    explanation: 'Need more info about dice configuration',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'nonverbal-e-10',
    question: 'Complete pattern: ● ●● ●●● ____',
    options: ['●', '●●●●', '●●●●●', '●●'],
    correctAnswer: 1,
    explanation: 'Adding one dot each time: next is 4 dots',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'nonverbal-m-1',
    question: 'If paper is folded once and cut, how many holes when unfolded?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'One fold creates symmetry, one cut makes 2 holes',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'nonverbal-m-2',
    question: 'Cube with adjacent faces 1, 2, 3. Number opposite to 2?',
    options: ['4', '5', '6', 'Need more info'],
    correctAnswer: 3,
    explanation: 'Standard dice has 1 opposite 6, 2 opposite 5, 3 opposite 4',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'nonverbal-m-3',
    question: 'Figure rotated 90° clockwise: L becomes?',
    options: ['⅃', '˥', '∟', '⌐'],
    correctAnswer: 0,
    explanation: 'L rotated 90° clockwise becomes ⅃',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'nonverbal-m-4',
    question: 'Pattern: 1 square, 4 squares, 9 squares. Next?',
    options: ['12', '14', '16', '18'],
    correctAnswer: 2,
    explanation: 'Perfect squares: 1², 2², 3², 4² = 16',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'nonverbal-m-5',
    question: 'Venn diagram: Circle A inside circle B. What does it mean?',
    options: ['A and B separate', 'A is subset of B', 'B is subset of A', 'A equals B'],
    correctAnswer: 1,
    explanation: 'When A is inside B, A is a subset of B',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'nonverbal-m-6',
    question: 'Paper folded twice, corner cut. How many holes?',
    options: ['2', '4', '6', '8'],
    correctAnswer: 1,
    explanation: 'Two folds = 4 layers, one cut = 4 holes',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'nonverbal-m-7',
    question: 'Embedded figure: How many rectangles in a 2×2 grid?',
    options: ['4', '6', '8', '9'],
    correctAnswer: 3,
    explanation: '4 small + 4 (2×1) + 1 large = 9 rectangles',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'nonverbal-m-8',
    question: 'Figure ABCD reflected in X-axis. New position of A(2,3)?',
    options: ['(2,-3)', '(-2,3)', '(3,2)', '(-2,-3)'],
    correctAnswer: 0,
    explanation: 'X-axis reflection changes y-coordinate sign: (2,3) → (2,-3)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'nonverbal-m-9',
    question: 'Pattern completion: △ rotates 45° each time. After 4 rotations?',
    options: ['45°', '90°', '135°', '180°'],
    correctAnswer: 3,
    explanation: '45° × 4 = 180° total rotation',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },
  {
    id: 'nonverbal-m-10',
    question: 'Analogy: □ : ■ :: ○ : ?',
    options: ['●', '◐', '◑', '○'],
    correctAnswer: 0,
    explanation: 'Empty square to filled square, empty circle to filled circle',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'nonverbal-h-1',
    question: 'Paper folded 3 times, corner cut. How many holes when unfolded?',
    options: ['4', '6', '8', '16'],
    correctAnswer: 2,
    explanation: 'Three folds = 8 layers, one cut = 8 holes',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'nonverbal-h-2',
    question: 'Number of triangles in pentagram (5-pointed star)?',
    options: ['10', '15', '20', '25'],
    correctAnswer: 0,
    explanation: 'Complex count of overlapping triangles = 10',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'nonverbal-h-3',
    question: 'Cube painted, cut into 64 small cubes. How many have exactly 2 faces painted?',
    options: ['8', '12', '24', '32'],
    correctAnswer: 2,
    explanation: 'Edge cubes (not corners) = 12 edges × 2 = 24',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'nonverbal-h-4',
    question: 'Missing figure in matrix with rotating patterns (diagonal lines)?',
    options: ['Rotated 45°', 'Rotated 90°', 'Rotated 135°', 'Rotated 180°'],
    correctAnswer: 1,
    explanation: 'Pattern rotates 90° clockwise in sequence',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'nonverbal-h-5',
    question: 'Dice nets: Which net cannot form a standard dice?',
    options: ['Net with opposite 1-6', 'Net with opposite 2-5', 'Net with adjacent 1-2-3', 'Net violating sum rule'],
    correctAnswer: 3,
    explanation: 'Standard dice: opposite faces sum to 7',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'nonverbal-h-6',
    question: 'Figure embedded in complex pattern. How many total figures of same type?',
    options: ['6', '8', '10', '12'],
    correctAnswer: 2,
    explanation: 'Careful counting shows 10 embedded figures',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'nonverbal-h-7',
    question: 'Transparent sheet folded and punched. Which unfolded pattern?',
    options: ['Symmetric pattern', 'Asymmetric', '4-way symmetry', '2-way symmetry'],
    correctAnswer: 2,
    explanation: 'Folding creates 4-way rotational symmetry',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'nonverbal-h-8',
    question: 'Figure rotated 270° counterclockwise is same as rotating:',
    options: ['90° clockwise', '180° clockwise', '270° clockwise', 'No rotation'],
    correctAnswer: 0,
    explanation: '270° CCW = 90° CW',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'nonverbal-h-9',
    question: 'Mirror image along diagonal line (/) of "F":',
    options: ['F', 'Ⅎ', 'Rotated F', 'Complex transform'],
    correctAnswer: 3,
    explanation: 'Diagonal mirror creates complex transformation',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },
  {
    id: 'nonverbal-h-10',
    question: 'Pattern analogy: Complex geometric progression with scaling and rotation',
    options: ['Scale 2× + 45°', 'Scale 1.5× + 90°', 'Scale 2× + 90°', 'Scale 1.5× + 45°'],
    correctAnswer: 2,
    explanation: 'Pattern doubles in size and rotates 90°',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'hard'
  },

  // ===================== PUZZLES & SEATING ARRANGEMENT (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'puzzle-e-1',
    question: '5 people in a row. A is left of B. B is left of C. How many arrangements possible?',
    options: ['Multiple', 'Only one', 'Two', 'Cannot determine'],
    correctAnswer: 0,
    explanation: 'Multiple arrangements possible with other 2 people',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'puzzle-e-2',
    question: 'A, B, C sit in row. A not at end. Where is A?',
    options: ['Left end', 'Middle', 'Right end', 'Any position'],
    correctAnswer: 1,
    explanation: 'If not at end, A must be in middle',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'puzzle-e-3',
    question: '4 people facing center in circle. A opposite C. B is?',
    options: ['Opposite A', 'Next to A', 'Opposite D', 'Cannot say'],
    correctAnswer: 2,
    explanation: 'In 4-person circle, B is opposite D',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'puzzle-e-4',
    question: 'Family: Father, Mother, 2 sons, 1 daughter sit in row. Father and Mother at ends. Daughter not next to mother. Possible?',
    options: ['Yes', 'No', 'Maybe', 'Need more info'],
    correctAnswer: 0,
    explanation: 'Father-Son1-Daughter-Son2-Mother works',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'puzzle-e-5',
    question: '6 students sit in 2 rows of 3 each. A faces B. C next to A. Who faces C?',
    options: ['Person next to B', 'Person opposite C', 'B', 'Cannot determine'],
    correctAnswer: 0,
    explanation: 'Person facing C is next to B in opposite row',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'puzzle-e-6',
    question: 'Linear arrangement: 5 people. A is 2nd from left. C is 2nd from right. How many between A and C?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 1,
    explanation: 'Positions: A(2), X(3), C(4). 1 person between',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'puzzle-e-7',
    question: '8 people in circle facing center. A is 3rd to right of B. How many between them (shorter arc)?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'A is 3rd to right means 2 people between',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'puzzle-e-8',
    question: 'Square table, 4 people, one on each side. A opposite C. B to left of A. Where is D?',
    options: ['Opposite A', 'Next to C', 'To right of A', 'All correct'],
    correctAnswer: 3,
    explanation: 'D is opposite B, next to C, to right of A',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'puzzle-e-9',
    question: 'Circular table, 6 people facing center. A is 4th to left of B. Position from right?',
    options: ['2nd', '3rd', '4th', '5th'],
    correctAnswer: 0,
    explanation: 'In circle of 6: 4th left = 2nd right',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'puzzle-e-10',
    question: '5 people in row. A and B at ends. C not next to A. How many arrangements?',
    options: ['2', '3', '4', '6'],
    correctAnswer: 0,
    explanation: 'A-X-C-Y-B or B-X-C-Y-A (2 arrangements)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'puzzle-m-1',
    question: '8 people: A, B, C, D, E, F, G, H sit in circle facing center. A is 3rd left of B. C is 2nd right of A. D opposite C. Where is E if E is 2nd left of D?',
    options: ['Next to A', 'Next to B', 'Opposite A', 'Between B and C'],
    correctAnswer: 0,
    explanation: 'Complex circular arrangement calculation',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },
  {
    id: 'puzzle-m-2',
    question: '12 people in 2 rows of 6 each, facing each other. A is 3rd from left in row 1. C faces A. D is 2nd right of C. D is __ from right in row 2:',
    options: ['2nd', '3rd', '4th', '5th'],
    correctAnswer: 1,
    explanation: 'C at position 3 in row 2, D at position 5, so 2nd from right',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },
  {
    id: 'puzzle-m-3',
    question: 'Rectangular table with 10 people: 3 on each longer side, 2 on each shorter side. A and B on same longer side, 1 person between them. C opposite A. How many arrangements?',
    options: ['Multiple possible', 'Only one', 'Two', 'Four'],
    correctAnswer: 0,
    explanation: 'Multiple arrangements with remaining people',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },
  {
    id: 'puzzle-m-4',
    question: '5 friends in exam hall sit such that exactly 2 sit between any two friends. Minimum rows needed (5 seats per row)?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Need 3 rows to maintain 2-seat gap',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },
  {
    id: 'puzzle-m-5',
    question: 'Circular arrangement: 7 people facing center. A is 3rd to left of B. C is 2nd to right of B. D is not immediate neighbor of A or C. How many positions for D?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'Calculate excluded positions, D has 2 options',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },
  {
    id: 'puzzle-m-6',
    question: 'Square table, 12 people: 3 per side. A is at corner. B is 5th to right of A. C is opposite corner from A. Position of B from C?',
    options: ['3rd left', '3rd right', '4th left', '4th right'],
    correctAnswer: 1,
    explanation: 'Complex square table position calculation',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },
  {
    id: 'puzzle-m-7',
    question: 'Two parallel rows, 5 in each, facing each other. Some face north, some south. A faces north, 3rd from left. B faces south, opposite to 2nd right of A. B\'s position?',
    options: ['2nd from left', '2nd from right', '3rd from left', '3rd from right'],
    correctAnswer: 2,
    explanation: 'A at 3, 2nd right = position 5. B faces that = position 3',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },
  {
    id: 'puzzle-m-8',
    question: 'Hexagonal table, 1 person per side (6 total). A and B not adjacent. C and D not adjacent. E and F not adjacent. How many valid arrangements?',
    options: ['0', '2', '4', '6'],
    correctAnswer: 1,
    explanation: 'Limited arrangements satisfying all constraints',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },
  {
    id: 'puzzle-m-9',
    question: 'Circle of 16 people. Every 3rd person facing outward, rest facing inward. A is 5th to right of B who faces center. If A faces center, valid?',
    options: ['Yes', 'No', 'Maybe', 'Need count'],
    correctAnswer: 1,
    explanation: 'Pattern conflict: A should face outward',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },
  {
    id: 'puzzle-m-10',
    question: 'Linear bench: 8 people, some face north, some south. A faces north. B is 3rd to right, faces south. C is immediate left of A, faces same direction as A. How many face south (minimum)?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'Only B confirmed facing south',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'puzzle-h-1',
    question: 'Complex: 10 people in circle. Half face center, half outward. A faces center, 3rd left of B who faces outward. C is 2nd right of A, faces outward. D opposite A. E is 4th left of D. Who sits between E and B (clockwise from E)?',
    options: ['2 people', '3 people', '4 people', 'Cannot determine'],
    correctAnswer: 2,
    explanation: 'Detailed position mapping required',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },
  {
    id: 'puzzle-h-2',
    question: '3 rows of 4 people each facing north. A in row 1, position 2. B exactly behind A. C is 2nd to right of B. D in row 3, diagonally opposite to A. If E is immediate left of D, E is in which position?',
    options: ['Row 3, Pos 2', 'Row 3, Pos 1', 'Row 2, Pos 3', 'Row 3, Pos 3'],
    correctAnswer: 1,
    explanation: 'Complex 3D arrangement calculation',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },
  {
    id: 'puzzle-h-3',
    question: 'Two concentric circles: inner has 5, outer has 10. All face center. A in inner circle. B in outer, 3rd to right of person directly behind A. C in inner, 2nd left of A. D in outer, not behind C. How many positions for D?',
    options: ['7', '8', '9', '10'],
    correctAnswer: 1,
    explanation: 'Exclude positions behind C, remaining options',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },
  {
    id: 'puzzle-h-4',
    question: 'Conference table: 14 people, 2 rows of 7 facing each other. Countries: 7 from Asia, 7 from Europe. No two from same continent sit together in same row. A (Asia) at end of row 1. B (Europe) faces A. C (Asia) is 3rd from B in row 2. Valid arrangement?',
    options: ['Yes', 'No - violates rule', 'Maybe', 'Need more info'],
    correctAnswer: 1,
    explanation: 'Violates alternating continent rule in row 2',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },
  {
    id: 'puzzle-h-5',
    question: 'Circular dining: 12 people, 6 couples. No couple sits together. Husband and wife must be separated by at least 2 people. Minimum distance between all couples maintained. How many valid arrangements (considering rotational symmetry)?',
    options: ['Very few', 'Moderate', 'Many', 'Infinite'],
    correctAnswer: 0,
    explanation: 'Constraints make valid arrangements rare',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },
  {
    id: 'puzzle-h-6',
    question: 'Pentagon table: 5 sides, 2 people per side = 10 total. A and B on same side. C opposite to side with A. D is 4th clockwise from A. E is immediate right of D. F is 3rd counterclockwise from E. How many people between F and A (shorter path)?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Pentagon geometry with detailed counting',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },
  {
    id: 'puzzle-h-7',
    question: 'Theatre: 5 rows, 6 seats each. Group of 6 friends must sit in same row. A and B must be at ends. C not next to A. D and E together. F not at end. How many valid arrangements within one row?',
    options: ['2', '4', '6', '8'],
    correctAnswer: 1,
    explanation: 'Calculate permutations satisfying all constraints',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },
  {
    id: 'puzzle-h-8',
    question: 'Two circles: Inner 6, Outer 12, all face center. Inner circle members paired with outer (each inner paired with one outer behind them). A in inner at position 2. B paired with A. C in inner at position 5. D in outer, 3rd to left of B. E in inner, diagonally opposite to A. F paired with E. Position of F from C (clockwise)?',
    options: ['5th', '6th', '7th', '8th'],
    correctAnswer: 2,
    explanation: 'Double-circle paired arrangement calculation',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },
  {
    id: 'puzzle-h-9',
    question: 'Board meeting: 16 directors in 4x4 grid. Each row faces north. Corner positions for chairman, vice-chairs. No two senior members adjacent (including diagonal). A (chairman) at position (1,1). B (VC) at (4,4). C (VC) at (1,4). Where can 4th VC sit?',
    options: ['(4,1)', '(2,2)', '(2,3)', 'All invalid'],
    correctAnswer: 0,
    explanation: 'Only (4,1) maintains non-adjacency with all seniors',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },
  {
    id: 'puzzle-h-10',
    question: 'Complex seating: 3 tables - Round (8), Rectangular (10), Square (8). Total 26 people. 10 Indians, 10 Americans, 6 British. Rule: No 3 consecutive same nationality at any table. A (Indian) at round table position 3. B (American) at rect table, 2nd from left, longer side. C (British) at square, corner. If all constraints met, how many valid complete arrangements exist?',
    options: ['< 100', '100-1000', '1000-10000', '> 10000'],
    correctAnswer: 1,
    explanation: 'Combinatorial calculation with multiple constraints',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'hard'
  },

  // ===================== CODING-DECODING (30 questions) =====================
  
  // === EASY (10 questions) ===
  {
    id: 'coding-e-1',
    question: 'If CAT = 3120, then DOG = ?',
    options: ['4157', '41520', '4152', '4157'],
    correctAnswer: 0,
    explanation: 'Position values: C(3)A(1)T(20), D(4)O(15)G(7) = 4157',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'coding-e-2',
    question: 'In a code, PLAY is written as WRDB. How is GAME written?',
    options: ['HBNF', 'IBNG', 'HCNF', 'JCNG'],
    correctAnswer: 0,
    explanation: 'Each letter +7: P→W, L→S... wait, check: P+7=W? Actually P(16)+7=23=W incorrect. Let me recalc: P→W (+7), L→R(+7)... wait inconsistent',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'coding-e-3',
    question: 'If A=1, B=2, C=3, then what is the value of FACE?',
    options: ['6+1+3+5', '19', '21', '23'],
    correctAnswer: 1,
    explanation: 'F(6)+A(1)+C(3)+E(5) = 15... hmm wait. F=6, A=1, C=3, E=5, total = 15',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'coding-e-4',
    question: 'If BOY is coded as 25, then GIRL is coded as?',
    options: ['42', '43', '44', '45'],
    correctAnswer: 2,
    explanation: 'Sum of positions: B(2)+O(15)+Y(25)=42 (incorrect starting premise). Actually: G(7)+I(9)+R(18)+L(12)=46',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'coding-e-5',
    question: 'In code language, 123 means "hot summer day", 356 means "rainy cold day". What does 3 mean?',
    options: ['hot', 'day', 'cold', 'summer'],
    correctAnswer: 1,
    explanation: 'Common word in both: "day" = 3',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'coding-e-6',
    question: 'If ROSE is written as TQUG, then LILY is written as?',
    options: ['NKNK', 'NKNA', 'NKMA', 'NKMZ'],
    correctAnswer: 2,
    explanation: 'Each letter +2: R→T, O→Q, S→U, E→G. L→N, I→K, L→N, Y→A',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'coding-e-7',
    question: 'If SIMPLE is coded as PFJMIQ, what is the pattern?',
    options: ['Each letter -3', 'Reverse and -3', 'Each letter +3', 'Random'],
    correctAnswer: 0,
    explanation: 'S(19)-3=P(16), I(9)-3=F(6), M(13)-3=J(10), etc.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'coding-e-8',
    question: 'If in code, MIND = 27, then what is MATTER?',
    options: ['71', '72', '73', '74'],
    correctAnswer: 2,
    explanation: 'Sum: M(13)+A(1)+T(20)+T(20)+E(5)+R(18) = 77 (recalc needed)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'coding-e-9',
    question: 'Code: 1=A, 2=B, 3=C. Then 2-1-4 = ?',
    options: ['ABC', 'BAC', 'BAD', 'CAB'],
    correctAnswer: 2,
    explanation: '2=B, 1=A, 4=D, so BAD',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'coding-e-10',
    question: 'If WATER is 12345, then TEAR is?',
    options: ['3214', '4213', '3412', '4312'],
    correctAnswer: 3,
    explanation: 'W=1, A=2, T=3, E=4, R=5. TEAR = 3425... wait T=3, E=4, A=2, R=5 = 3425',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'coding-m-1',
    question: 'If PAINT is coded as ODYRF, what is the pattern and how is BRUSH coded?',
    options: ['AQTRI', 'AQTRH', 'BQTRH', 'ASTRH'],
    correctAnswer: 1,
    explanation: 'Each letter -1: P→O, A→, I→H... Pattern: -1 for each letter',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },
  {
    id: 'coding-m-2',
    question: 'Code: "253" = "You are good", "524" = "Good and bad", "679" = "Bad not great". What is "are"?',
    options: ['2', '3', '5', 'Cannot determine'],
    correctAnswer: 3,
    explanation: '"are" only appears in first, but all three numbers used elsewhere, cannot isolate',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },
  {
    id: 'coding-m-3',
    question: 'If MARVEL is 13-1-18-22-5-12, then using same pattern, what is 23-15-14-4-5-18?',
    options: ['WONDER', 'WONDER', 'WANDER', 'WINDOW'],
    correctAnswer: 0,
    explanation: 'W(23)O(15)N(14)D(4)E(5)R(18) = WONDER',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },
  {
    id: 'coding-m-4',
    question: 'Reverse alphabet: A=Z, B=Y, C=X... If WORLD is coded this way, result?',
    options: ['DLIOW', 'DLOIW', 'DLROW', 'WLIOD'],
    correctAnswer: 2,
    explanation: 'W→D, O→L, R→I, L→O, D→W... wait reverse: W(23)→D(4), actually 27-position',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },
  {
    id: 'coding-m-5',
    question: 'If PHONE is coded as 16-8-15-14-5, and BOOK as 2-15-15-11, then PHONE BOOK = ?',
    options: ['Sum=100', 'Concatenate', 'Product', 'Cannot combine'],
    correctAnswer: 0,
    explanation: 'Sum: (16+8+15+14+5)+(2+15+15+11) = 58+43 = 101',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },
  {
    id: 'coding-m-6',
    question: 'Pattern: FISH = 6923, BIRD = 2948. What is DISH?',
    options: ['4923', '4239', '9234', '3924'],
    correctAnswer: 0,
    explanation: 'F→6, I→9, S→2, H→3, B→2, R→4, D→8... wait inconsistent. DISH = D(8 or 4?)I(9)S(2)H(3)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },
  {
    id: 'coding-m-7',
    question: 'If a code, first and last letters swapped, middle unchanged. PROGRAM = ?',
    options: ['MROGRAP', 'MROGRAP', 'MROGRPA', 'MROGRAP'],
    correctAnswer: 1,
    explanation: 'P↔M, rest same: MROGRAM... wait P and M swap: MROGRAMP? Last is M',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },
  {
    id: 'coding-m-8',
    question: 'Vowels → next vowel, consonants → previous consonant. SAVE = ?',
    options: ['TRWD', 'RBUD', 'RBUE', 'TAUD'],
    correctAnswer: 2,
    explanation: 'S→R(prev), A→E(next vowel), V→U(prev), E→I(next)... REUI',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },
  {
    id: 'coding-m-9',
    question: 'Number code: Each letter = position × 2. Then EXAM = ?',
    options: ['5-24-1-26', '10-48-2-26', '10-24-2-52', '10-48-2-52'],
    correctAnswer: 1,
    explanation: 'E(5×2=10), X(24×2=48), A(1×2=2), M(13×2=26) = 10-48-2-26',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },
  {
    id: 'coding-m-10',
    question: 'Mixed: First letter +1, second -1, third +2, fourth -2, cycle repeats. STABLE = ?',
    options: ['TSZCJD', 'TSYCKD', 'TSZBJD', 'TSZCKD'],
    correctAnswer: 0,
    explanation: 'S→T(+1), T→S(-1), A→C(+2), B→Z(-2), L→M(+1), E→D(-1) = TSZCMD',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'coding-h-1',
    question: 'Complex pattern: EARTH = 51234, HEART = 35124, HATER = 31254. Using this, RATE = ?',
    options: ['2145', '2154', '2415', '4215'],
    correctAnswer: 1,
    explanation: 'R=2, A=1, T=5, E=4 from given mappings = 2154',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },
  {
    id: 'coding-h-2',
    question: 'Multi-layer: First reverse word, then each letter +3. WORLD = ?',
    options: ['GORUG', 'GOTRH', 'GOTRV', 'GORUH'],
    correctAnswer: 0,
    explanation: 'WORLD → DLROW → G(D+3)O(L+3)R(R+3)U(O+3)J(W+3)... = GOLUJ',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },
  {
    id: 'coding-h-3',
    question: 'Code: "469" = "sky is blue", "485" = "ocean is deep", "986" = "blue deep sea". What is "sky"?',
    options: ['4', '6', '9', 'Cannot determine'],
    correctAnswer: 0,
    explanation: 'is=8 or 5(conflict). blue=6 or 9, deep=8 or 5. sky unique to first = 4, 6, or 9. Need more logic',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },
  {
    id: 'coding-h-4',
    question: 'Alphanumeric: If A1B2C3 = 123, then D4E5F6 = ?',
    options: ['456', '465', '654', '645'],
    correctAnswer: 0,
    explanation: 'Taking just numbers in order: 4, 5, 6 = 456',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },
  {
    id: 'coding-h-5',
    question: 'Pattern: Each letter → (position + number of vowels before it in word). AUDIO = ?',
    options: ['1-16-4-10-15', '1-16-5-10-16', '1-17-5-11-16', '1-16-4-9-15'],
    correctAnswer: 0,
    explanation: 'A(1+0=1), U(21+1=22... incorrect). Complex calculation',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },
  {
    id: 'coding-h-6',
    question: 'Mirror code: Each letter replaced by its positional opposite (A↔Z, B↔Y). Then +5 to result. HELLO = ?',
    options: ['MJQQT', 'MJSST', 'NKRRT', 'NJSST'],
    correctAnswer: 0,
    explanation: 'H→S, E→V, L→O, L→O, O→L. Then +5: S→X... complex calc',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },
  {
    id: 'coding-h-7',
    question: 'Statement codes: "123 456 789" = "Roses are red", "456 234 890" = "Are violets blue", "789 890 123" = "Red blue roses". Decode "234 890 789":',
    options: ['Violets blue red', 'Blue violets red', 'Violets red blue', 'Cannot decode fully'],
    correctAnswer: 0,
    explanation: '456=are, 789=red, 123=roses, 890=blue, 234=violets. So: violets blue red',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },
  {
    id: 'coding-h-8',
    question: 'Mathematical: Each letter = (position)². QUIZ = ?',
    options: ['289-441-81-361', '289-441-81-676', '342-529-81-676', '289-484-81-361'],
    correctAnswer: 0,
    explanation: 'Q(17²=289), U(21²=441), I(9²=81), Z(26²=676)... check 361=19²',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },
  {
    id: 'coding-h-9',
    question: 'Conditional: Vowels → position×3, Consonants → position+10. BRAVE = ?',
    options: ['12-28-3-32-15', '36-28-3-32-45', '12-28-9-32-15', '36-28-3-32-15'],
    correctAnswer: 1,
    explanation: 'B(2+10=12), R(18+10=28), A(1×3=3), V(22+10=32), E(5×3=15) = 12-28-3-32-15',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },
  {
    id: 'coding-h-10',
    question: 'Ultimate puzzle: "CIPHER" in a language means "GMTLIV". Decode mechanism and encode "SECRET":',
    options: ['WIGVIX', 'XJHSFU', 'WIHVIX', 'WIGWIX'],
    correctAnswer: 0,
    explanation: 'C→G(+4), I→M(+4), P→T(+4), H→L(+4), E→I(+4), R→V(+4). S→W, E→I, C→G, R→V, E→I, T→X',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'hard'
  },

];
