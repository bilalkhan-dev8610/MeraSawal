import type { Question } from './questionsData';

// Language Questions - All Subcategories (300 questions total)
// English: Grammar, Vocabulary, Synonyms & Antonyms, Reading Comprehension, Error Detection
// Hindi: Vyakaran, Muhavare & Lokoktiyan, Paryayvachi & Vilom, Comprehension, Vakya Shuddhi

export const languageQuestions: Question[] = [
  
  // ===================== GRAMMAR (English) - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'grammar-e-1',
    question: 'Choose the correct article: ___ apple a day keeps the doctor away.',
    options: ['A', 'An', 'The', 'No article'],
    correctAnswer: 1,
    explanation: '"An" is used before words starting with vowel sounds',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'grammar-e-2',
    question: 'Identify the noun: "The cat sleeps on the mat."',
    options: ['sleeps', 'cat', 'on', 'the'],
    correctAnswer: 1,
    explanation: '"Cat" is a noun (name of an animal)',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'grammar-e-3',
    question: 'Which is the correct plural of "child"?',
    options: ['childs', 'childes', 'children', 'childrens'],
    correctAnswer: 2,
    explanation: 'The plural of "child" is "children" (irregular plural)',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'grammar-e-4',
    question: 'Fill in: He ___ to school every day.',
    options: ['go', 'goes', 'going', 'gone'],
    correctAnswer: 1,
    explanation: 'For third person singular (He), we use "goes"',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'grammar-e-5',
    question: 'Choose the correct preposition: She is good ___ mathematics.',
    options: ['in', 'at', 'on', 'for'],
    correctAnswer: 1,
    explanation: 'We use "at" with subjects and skills',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'grammar-e-6',
    question: 'Identify the verb: "They play football."',
    options: ['They', 'play', 'football', 'None'],
    correctAnswer: 1,
    explanation: '"Play" is an action verb',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'grammar-e-7',
    question: 'Which sentence is correct?',
    options: ['She don\'t like tea', 'She doesn\'t like tea', 'She doesn\'t likes tea', 'She don\'t likes tea'],
    correctAnswer: 1,
    explanation: 'For third person singular negative, use "doesn\'t" + base verb',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'grammar-e-8',
    question: 'Choose the correct pronoun: ___ is my friend.',
    options: ['Him', 'He', 'His', 'Himself'],
    correctAnswer: 1,
    explanation: '"He" is the subject pronoun',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'grammar-e-9',
    question: 'What is the past tense of "eat"?',
    options: ['eated', 'ate', 'eaten', 'eating'],
    correctAnswer: 1,
    explanation: 'The past tense of "eat" is "ate"',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'grammar-e-10',
    question: 'Identify the adjective: "The beautiful flower bloomed."',
    options: ['The', 'beautiful', 'flower', 'bloomed'],
    correctAnswer: 1,
    explanation: '"Beautiful" describes the flower (adjective)',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'grammar-m-1',
    question: 'Choose the correct tense: By next year, I ___ here for 5 years.',
    options: ['will work', 'will be working', 'will have worked', 'will have been working'],
    correctAnswer: 3,
    explanation: 'Future perfect continuous for action continuing until a point in future',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },
  {
    id: 'grammar-m-2',
    question: 'Identify the type: "Although it was raining, we went out."',
    options: ['Simple sentence', 'Compound sentence', 'Complex sentence', 'Compound-complex'],
    correctAnswer: 2,
    explanation: 'Contains one independent and one dependent clause (complex)',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },
  {
    id: 'grammar-m-3',
    question: 'Choose correct: Neither of the boys ___ present.',
    options: ['is', 'are', 'were', 'been'],
    correctAnswer: 0,
    explanation: '"Neither" is singular, takes singular verb "is"',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },
  {
    id: 'grammar-m-4',
    question: 'Convert to passive: "She is writing a letter."',
    options: ['A letter is written by her', 'A letter is being written by her', 'A letter was being written by her', 'A letter has been written by her'],
    correctAnswer: 1,
    explanation: 'Present continuous passive: is/are being + V3',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },
  {
    id: 'grammar-m-5',
    question: 'Choose the correct conditional: If I ___ you, I would study harder.',
    options: ['am', 'was', 'were', 'be'],
    correctAnswer: 2,
    explanation: 'Second conditional uses "were" for all subjects',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },
  {
    id: 'grammar-m-6',
    question: 'Identify the clause: "The book [that I bought] was expensive."',
    options: ['Noun clause', 'Adjective clause', 'Adverb clause', 'Independent clause'],
    correctAnswer: 1,
    explanation: 'Relative clause modifying "book" (adjective clause)',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },
  {
    id: 'grammar-m-7',
    question: 'Choose correct: He has been working here ___ 2010.',
    options: ['for', 'since', 'from', 'till'],
    correctAnswer: 1,
    explanation: '"Since" is used with specific point in time',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },
  {
    id: 'grammar-m-8',
    question: 'Which is correct reported speech? He said, "I am tired."',
    options: ['He said that he is tired', 'He said that he was tired', 'He said that he will be tired', 'He said that he has been tired'],
    correctAnswer: 1,
    explanation: 'Present tense changes to past in reported speech',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },
  {
    id: 'grammar-m-9',
    question: 'Choose the gerund: "Swimming is good exercise."',
    options: ['Swimming', 'is', 'good', 'exercise'],
    correctAnswer: 0,
    explanation: '"Swimming" acts as a noun (gerund)',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },
  {
    id: 'grammar-m-10',
    question: 'Identify error: "One of my friend are coming."',
    options: ['friend', 'are', 'coming', 'No error'],
    correctAnswer: 1,
    explanation: '"One of" takes singular verb "is", also "friends" (plural)',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'grammar-h-1',
    question: 'Choose correct: Scarcely ___ the door when the phone rang.',
    options: ['did I open', 'I had opened', 'had I opened', 'I opened'],
    correctAnswer: 2,
    explanation: 'Inversion with negative adverb "scarcely": auxiliary + subject',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },
  {
    id: 'grammar-h-2',
    question: 'Identify the mood: "Long live the king!"',
    options: ['Indicative', 'Imperative', 'Subjunctive', 'Interrogative'],
    correctAnswer: 2,
    explanation: 'Subjunctive mood expresses wishes or hypothetical situations',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },
  {
    id: 'grammar-h-3',
    question: 'Choose correct: It is essential that he ___ present at the meeting.',
    options: ['is', 'be', 'will be', 'would be'],
    correctAnswer: 1,
    explanation: 'Subjunctive "be" after expressions of necessity',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },
  {
    id: 'grammar-h-4',
    question: 'Convert: "Who broke the window?" (Passive)',
    options: ['By whom was the window broken?', 'By who was the window broken?', 'The window was broken by whom?', 'Whom broke the window?'],
    correctAnswer: 0,
    explanation: 'Interrogative passive uses "by whom"',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },
  {
    id: 'grammar-h-5',
    question: 'Identify the function: "The book on the table is mine." [on the table]',
    options: ['Noun phrase', 'Adjective phrase', 'Adverb phrase', 'Verb phrase'],
    correctAnswer: 1,
    explanation: 'Prepositional phrase modifying "book" (adjective function)',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },
  {
    id: 'grammar-h-6',
    question: 'Choose correct: I would rather you ___ not told him.',
    options: ['have', 'had', 'has', 'having'],
    correctAnswer: 1,
    explanation: '"Would rather" + past perfect for past situations',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },
  {
    id: 'grammar-h-7',
    question: 'Identify: "What a beautiful day it is!" - Type of sentence?',
    options: ['Declarative', 'Interrogative', 'Exclamatory', 'Imperative'],
    correctAnswer: 2,
    explanation: 'Exclamatory sentence expresses strong emotion',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },
  {
    id: 'grammar-h-8',
    question: 'Choose correct: No sooner ___ I reached home than it started raining.',
    options: ['did', 'had', 'have', 'do'],
    correctAnswer: 1,
    explanation: '"No sooner" requires past perfect + inversion',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },
  {
    id: 'grammar-h-9',
    question: 'Identify the participle: "Having finished his work, he went home."',
    options: ['Perfect participle', 'Present participle', 'Past participle', 'Gerund'],
    correctAnswer: 0,
    explanation: '"Having finished" is perfect participle (having + V3)',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },
  {
    id: 'grammar-h-10',
    question: 'Choose correct: The number of students ___ increasing every year.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: '"The number" (singular concept) takes singular verb',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'hard'
  },

  // ===================== VOCABULARY (English) - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'vocab-e-1',
    question: 'Meaning of "Happy":',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    correctAnswer: 1,
    explanation: 'Happy means feeling joy or pleasure',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'vocab-e-2',
    question: 'Choose the word: A person who flies an airplane:',
    options: ['Driver', 'Pilot', 'Captain', 'Navigator'],
    correctAnswer: 1,
    explanation: 'Pilot is the person who operates an aircraft',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'vocab-e-3',
    question: 'What does "Begin" mean?',
    options: ['End', 'Start', 'Stop', 'Finish'],
    correctAnswer: 1,
    explanation: 'Begin means to start something',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'vocab-e-4',
    question: 'A place where books are kept:',
    options: ['Museum', 'Library', 'Gallery', 'Archive'],
    correctAnswer: 1,
    explanation: 'Library is a place for keeping books',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'vocab-e-5',
    question: 'Meaning of "Big":',
    options: ['Small', 'Large', 'Tiny', 'Little'],
    correctAnswer: 1,
    explanation: 'Big means large in size',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'vocab-e-6',
    question: 'A person who treats sick people:',
    options: ['Teacher', 'Engineer', 'Doctor', 'Lawyer'],
    correctAnswer: 2,
    explanation: 'Doctor is a medical professional who treats patients',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'vocab-e-7',
    question: 'What does "Quick" mean?',
    options: ['Slow', 'Fast', 'Steady', 'Careful'],
    correctAnswer: 1,
    explanation: 'Quick means fast or rapid',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'vocab-e-8',
    question: 'A meal eaten in the morning:',
    options: ['Lunch', 'Dinner', 'Breakfast', 'Snack'],
    correctAnswer: 2,
    explanation: 'Breakfast is the first meal of the day',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'vocab-e-9',
    question: 'Meaning of "Cold":',
    options: ['Hot', 'Warm', 'Cool', 'Chilly'],
    correctAnswer: 3,
    explanation: 'Cold means having low temperature',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'vocab-e-10',
    question: 'A vehicle that runs on tracks:',
    options: ['Car', 'Bus', 'Train', 'Truck'],
    correctAnswer: 2,
    explanation: 'Train is a rail transport vehicle',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'vocab-m-1',
    question: 'Meaning of "Abundant":',
    options: ['Scarce', 'Plentiful', 'Limited', 'Few'],
    correctAnswer: 1,
    explanation: 'Abundant means existing in large quantities',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },
  {
    id: 'vocab-m-2',
    question: 'One word for "A person who studies stars":',
    options: ['Geologist', 'Astronomer', 'Astrologer', 'Biologist'],
    correctAnswer: 1,
    explanation: 'Astronomer is a scientist who studies celestial objects',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },
  {
    id: 'vocab-m-3',
    question: 'Meaning of "Diligent":',
    options: ['Lazy', 'Hardworking', 'Careless', 'Slow'],
    correctAnswer: 1,
    explanation: 'Diligent means showing care and effort',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },
  {
    id: 'vocab-m-4',
    question: 'A government ruled by the people:',
    options: ['Monarchy', 'Democracy', 'Dictatorship', 'Oligarchy'],
    correctAnswer: 1,
    explanation: 'Democracy is rule by the people',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },
  {
    id: 'vocab-m-5',
    question: 'What does "Courage" mean?',
    options: ['Fear', 'Bravery', 'Cowardice', 'Weakness'],
    correctAnswer: 1,
    explanation: 'Courage means bravery in facing danger',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },
  {
    id: 'vocab-m-6',
    question: 'One word: "A place where aircraft take off and land":',
    options: ['Station', 'Airport', 'Port', 'Terminal'],
    correctAnswer: 1,
    explanation: 'Airport is designed for aircraft operations',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },
  {
    id: 'vocab-m-7',
    question: 'Meaning of "Ancient":',
    options: ['New', 'Modern', 'Old', 'Recent'],
    correctAnswer: 2,
    explanation: 'Ancient means belonging to the distant past',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },
  {
    id: 'vocab-m-8',
    question: 'A person who writes books:',
    options: ['Author', 'Editor', 'Publisher', 'Printer'],
    correctAnswer: 0,
    explanation: 'Author is a person who writes literary works',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },
  {
    id: 'vocab-m-9',
    question: 'What does "Fragile" mean?',
    options: ['Strong', 'Delicate', 'Tough', 'Durable'],
    correctAnswer: 1,
    explanation: 'Fragile means easily broken or damaged',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },
  {
    id: 'vocab-m-10',
    question: 'One word for "Killing of a king":',
    options: ['Homicide', 'Genocide', 'Regicide', 'Suicide'],
    correctAnswer: 2,
    explanation: 'Regicide is the act of killing a king',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'vocab-h-1',
    question: 'Meaning of "Ephemeral":',
    options: ['Permanent', 'Eternal', 'Short-lived', 'Lasting'],
    correctAnswer: 2,
    explanation: 'Ephemeral means lasting for a very short time',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },
  {
    id: 'vocab-h-2',
    question: 'One word: "A person who hates mankind":',
    options: ['Philanthropist', 'Misanthrope', 'Misogynist', 'Optimist'],
    correctAnswer: 1,
    explanation: 'Misanthrope is a person who dislikes humankind',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },
  {
    id: 'vocab-h-3',
    question: 'Meaning of "Ubiquitous":',
    options: ['Rare', 'Omnipresent', 'Scarce', 'Unique'],
    correctAnswer: 1,
    explanation: 'Ubiquitous means present everywhere',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },
  {
    id: 'vocab-h-4',
    question: 'One word for "Study of insects":',
    options: ['Ornithology', 'Entomology', 'Etymology', 'Anthropology'],
    correctAnswer: 1,
    explanation: 'Entomology is the scientific study of insects',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },
  {
    id: 'vocab-h-5',
    question: 'What does "Cacophony" mean?',
    options: ['Harmony', 'Melody', 'Harsh noise', 'Silence'],
    correctAnswer: 2,
    explanation: 'Cacophony is a harsh, discordant mixture of sounds',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },
  {
    id: 'vocab-h-6',
    question: 'One word: "A government by the wealthy":',
    options: ['Democracy', 'Plutocracy', 'Aristocracy', 'Meritocracy'],
    correctAnswer: 1,
    explanation: 'Plutocracy is rule by the wealthy',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },
  {
    id: 'vocab-h-7',
    question: 'Meaning of "Altruistic":',
    options: ['Selfish', 'Self-centered', 'Selfless', 'Greedy'],
    correctAnswer: 2,
    explanation: 'Altruistic means showing selfless concern for others',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },
  {
    id: 'vocab-h-8',
    question: 'One word for "Fear of confined spaces":',
    options: ['Acrophobia', 'Claustrophobia', 'Agoraphobia', 'Hydrophobia'],
    correctAnswer: 1,
    explanation: 'Claustrophobia is fear of enclosed spaces',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },
  {
    id: 'vocab-h-9',
    question: 'What does "Quixotic" mean?',
    options: ['Practical', 'Realistic', 'Idealistic', 'Pragmatic'],
    correctAnswer: 2,
    explanation: 'Quixotic means extremely idealistic and unrealistic',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },
  {
    id: 'vocab-h-10',
    question: 'One word for "A group of islands":',
    options: ['Peninsula', 'Archipelago', 'Isthmus', 'Atoll'],
    correctAnswer: 1,
    explanation: 'Archipelago is a chain or group of islands',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'hard'
  },

  // ===================== SYNONYMS & ANTONYMS (English) - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'syn-ant-e-1',
    question: 'Synonym of "Happy":',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    correctAnswer: 1,
    explanation: 'Joyful is a synonym of happy',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'syn-ant-e-2',
    question: 'Antonym of "Hot":',
    options: ['Warm', 'Cold', 'Cool', 'Boiling'],
    correctAnswer: 1,
    explanation: 'Cold is the opposite of hot',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'syn-ant-e-3',
    question: 'Synonym of "Big":',
    options: ['Small', 'Large', 'Tiny', 'Little'],
    correctAnswer: 1,
    explanation: 'Large is a synonym of big',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'syn-ant-e-4',
    question: 'Antonym of "Good":',
    options: ['Better', 'Best', 'Bad', 'Great'],
    correctAnswer: 2,
    explanation: 'Bad is the opposite of good',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'syn-ant-e-5',
    question: 'Synonym of "Quick":',
    options: ['Slow', 'Fast', 'Steady', 'Lazy'],
    correctAnswer: 1,
    explanation: 'Fast is a synonym of quick',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'syn-ant-e-6',
    question: 'Antonym of "Light":',
    options: ['Bright', 'Dark', 'Dim', 'Shine'],
    correctAnswer: 1,
    explanation: 'Dark is the opposite of light',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'syn-ant-e-7',
    question: 'Synonym of "Start":',
    options: ['End', 'Begin', 'Finish', 'Stop'],
    correctAnswer: 1,
    explanation: 'Begin is a synonym of start',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'syn-ant-e-8',
    question: 'Antonym of "Strong":',
    options: ['Powerful', 'Weak', 'Tough', 'Hard'],
    correctAnswer: 1,
    explanation: 'Weak is the opposite of strong',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'syn-ant-e-9',
    question: 'Synonym of "Smart":',
    options: ['Dumb', 'Intelligent', 'Foolish', 'Stupid'],
    correctAnswer: 1,
    explanation: 'Intelligent is a synonym of smart',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'syn-ant-e-10',
    question: 'Antonym of "Easy":',
    options: ['Simple', 'Difficult', 'Hard', 'Tough'],
    correctAnswer: 1,
    explanation: 'Difficult is the opposite of easy',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'syn-ant-m-1',
    question: 'Synonym of "Brave":',
    options: ['Coward', 'Courageous', 'Fearful', 'Timid'],
    correctAnswer: 1,
    explanation: 'Courageous is a synonym of brave',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },
  {
    id: 'syn-ant-m-2',
    question: 'Antonym of "Ancient":',
    options: ['Old', 'Modern', 'Historic', 'Past'],
    correctAnswer: 1,
    explanation: 'Modern is the opposite of ancient',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },
  {
    id: 'syn-ant-m-3',
    question: 'Synonym of "Wealthy":',
    options: ['Poor', 'Rich', 'Needy', 'Broke'],
    correctAnswer: 1,
    explanation: 'Rich is a synonym of wealthy',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },
  {
    id: 'syn-ant-m-4',
    question: 'Antonym of "Accept":',
    options: ['Receive', 'Take', 'Reject', 'Admit'],
    correctAnswer: 2,
    explanation: 'Reject is the opposite of accept',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },
  {
    id: 'syn-ant-m-5',
    question: 'Synonym of "Genuine":',
    options: ['Fake', 'Authentic', 'False', 'Artificial'],
    correctAnswer: 1,
    explanation: 'Authentic is a synonym of genuine',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },
  {
    id: 'syn-ant-m-6',
    question: 'Antonym of "Optimistic":',
    options: ['Hopeful', 'Positive', 'Pessimistic', 'Cheerful'],
    correctAnswer: 2,
    explanation: 'Pessimistic is the opposite of optimistic',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },
  {
    id: 'syn-ant-m-7',
    question: 'Synonym of "Innocent":',
    options: ['Guilty', 'Blameless', 'Criminal', 'Wrong'],
    correctAnswer: 1,
    explanation: 'Blameless is a synonym of innocent',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },
  {
    id: 'syn-ant-m-8',
    question: 'Antonym of "Generous":',
    options: ['Kind', 'Giving', 'Selfish', 'Charitable'],
    correctAnswer: 2,
    explanation: 'Selfish is the opposite of generous',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },
  {
    id: 'syn-ant-m-9',
    question: 'Synonym of "Famous":',
    options: ['Unknown', 'Renowned', 'Ordinary', 'Common'],
    correctAnswer: 1,
    explanation: 'Renowned is a synonym of famous',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },
  {
    id: 'syn-ant-m-10',
    question: 'Antonym of "Expand":',
    options: ['Grow', 'Increase', 'Contract', 'Enlarge'],
    correctAnswer: 2,
    explanation: 'Contract is the opposite of expand',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'syn-ant-h-1',
    question: 'Synonym of "Magnanimous":',
    options: ['Petty', 'Generous', 'Selfish', 'Narrow-minded'],
    correctAnswer: 1,
    explanation: 'Generous is a synonym of magnanimous (noble and generous)',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },
  {
    id: 'syn-ant-h-2',
    question: 'Antonym of "Opaque":',
    options: ['Dark', 'Transparent', 'Cloudy', 'Obscure'],
    correctAnswer: 1,
    explanation: 'Transparent is the opposite of opaque',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },
  {
    id: 'syn-ant-h-3',
    question: 'Synonym of "Ephemeral":',
    options: ['Permanent', 'Transient', 'Eternal', 'Lasting'],
    correctAnswer: 1,
    explanation: 'Transient is a synonym of ephemeral (short-lived)',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },
  {
    id: 'syn-ant-h-4',
    question: 'Antonym of "Ameliorate":',
    options: ['Improve', 'Better', 'Worsen', 'Enhance'],
    correctAnswer: 2,
    explanation: 'Worsen is the opposite of ameliorate (improve)',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },
  {
    id: 'syn-ant-h-5',
    question: 'Synonym of "Verbose":',
    options: ['Concise', 'Brief', 'Wordy', 'Short'],
    correctAnswer: 2,
    explanation: 'Wordy is a synonym of verbose (using too many words)',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },
  {
    id: 'syn-ant-h-6',
    question: 'Antonym of "Adroit":',
    options: ['Skillful', 'Clumsy', 'Clever', 'Deft'],
    correctAnswer: 1,
    explanation: 'Clumsy is the opposite of adroit (skillful)',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },
  {
    id: 'syn-ant-h-7',
    question: 'Synonym of "Copious":',
    options: ['Scarce', 'Abundant', 'Meager', 'Limited'],
    correctAnswer: 1,
    explanation: 'Abundant is a synonym of copious (plentiful)',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },
  {
    id: 'syn-ant-h-8',
    question: 'Antonym of "Loquacious":',
    options: ['Talkative', 'Chatty', 'Taciturn', 'Garrulous'],
    correctAnswer: 2,
    explanation: 'Taciturn (silent) is the opposite of loquacious (talkative)',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },
  {
    id: 'syn-ant-h-9',
    question: 'Synonym of "Gregarious":',
    options: ['Solitary', 'Sociable', 'Introverted', 'Withdrawn'],
    correctAnswer: 1,
    explanation: 'Sociable is a synonym of gregarious (fond of company)',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },
  {
    id: 'syn-ant-h-10',
    question: 'Antonym of "Benign":',
    options: ['Kind', 'Gentle', 'Malicious', 'Harmless'],
    correctAnswer: 2,
    explanation: 'Malicious is the opposite of benign (kind, gentle)',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'hard'
  },

  // ===================== READING COMPREHENSION (English) - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'rc-e-1',
    question: 'Passage: "The sun rises in the east and sets in the west. It provides light and warmth." - The sun rises in which direction?',
    options: ['North', 'South', 'East', 'West'],
    correctAnswer: 2,
    explanation: 'The passage clearly states sun rises in the east',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'rc-e-2',
    question: 'Passage: "Dogs are loyal animals. They protect homes and are good companions." - What quality is mentioned?',
    options: ['Laziness', 'Loyalty', 'Aggression', 'Fear'],
    correctAnswer: 1,
    explanation: 'The passage states dogs are loyal',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'rc-e-3',
    question: 'Passage: "Water is essential for life. Every living being needs water to survive." - What is essential for life?',
    options: ['Food', 'Water', 'Air', 'Shelter'],
    correctAnswer: 1,
    explanation: 'The passage mentions water is essential for life',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'rc-e-4',
    question: 'Passage: "Books are our best friends. They give us knowledge." - Books are compared to:',
    options: ['Teachers', 'Friends', 'Parents', 'Guides'],
    correctAnswer: 1,
    explanation: 'The passage calls books our best friends',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'rc-e-5',
    question: 'Passage: "The earth revolves around the sun. It takes 365 days." - How many days does earth take?',
    options: ['100', '200', '365', '500'],
    correctAnswer: 2,
    explanation: 'The passage states it takes 365 days',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'rc-e-6',
    question: 'Passage: "Rain is important for crops. Farmers depend on rain for their fields." - Who depends on rain?',
    options: ['Teachers', 'Doctors', 'Farmers', 'Engineers'],
    correctAnswer: 2,
    explanation: 'The passage mentions farmers depend on rain',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'rc-e-7',
    question: 'Passage: "Exercise keeps us healthy. We should exercise daily." - What keeps us healthy?',
    options: ['Sleeping', 'Eating', 'Exercise', 'Working'],
    correctAnswer: 2,
    explanation: 'The passage states exercise keeps us healthy',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'rc-e-8',
    question: 'Passage: "Trees give us oxygen. They also provide shade." - What do trees give?',
    options: ['Food', 'Water', 'Oxygen', 'Money'],
    correctAnswer: 2,
    explanation: 'The passage mentions trees give us oxygen',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'rc-e-9',
    question: 'Passage: "Honesty is the best policy. We should always speak truth." - What is the best policy?',
    options: ['Lying', 'Honesty', 'Stealing', 'Cheating'],
    correctAnswer: 1,
    explanation: 'The passage states honesty is the best policy',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'rc-e-10',
    question: 'Passage: "Birds can fly in the sky. They have wings." - What helps birds fly?',
    options: ['Legs', 'Wings', 'Tail', 'Beak'],
    correctAnswer: 1,
    explanation: 'The passage mentions birds have wings to fly',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'rc-m-1',
    question: 'Passage: "Education is the foundation of progress. It empowers individuals and transforms societies." - Main idea?',
    options: ['Education is expensive', 'Education brings progress', 'Education is difficult', 'Education needs teachers'],
    correctAnswer: 1,
    explanation: 'The passage emphasizes education as foundation of progress',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },
  {
    id: 'rc-m-2',
    question: 'Passage: "Technology has changed how we communicate. Social media connects people globally but reduces face-to-face interaction." - What is the effect?',
    options: ['Only positive', 'Only negative', 'Both positive and negative', 'No effect'],
    correctAnswer: 2,
    explanation: 'The passage shows both benefits (connection) and drawbacks (reduced face interaction)',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },
  {
    id: 'rc-m-3',
    question: 'Passage: "Climate change is a global concern. Rising temperatures affect weather patterns and ecosystems." - What does NOT fit?',
    options: ['It affects weather', 'It\'s a global issue', 'It\'s a local problem', 'Temperatures are rising'],
    correctAnswer: 2,
    explanation: 'Passage says it\'s global, not local',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },
  {
    id: 'rc-m-4',
    question: 'Passage: "Reading develops imagination and improves vocabulary. It\'s a habit everyone should cultivate." - Author\'s tone?',
    options: ['Critical', 'Encouraging', 'Neutral', 'Pessimistic'],
    correctAnswer: 1,
    explanation: 'The author encourages reading as a beneficial habit',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },
  {
    id: 'rc-m-5',
    question: 'Passage: "Pollution affects air quality and health. Industries and vehicles are major contributors." - What can be inferred?',
    options: ['Pollution has no solution', 'Controlling industries/vehicles can reduce pollution', 'Only vehicles pollute', 'Pollution is natural'],
    correctAnswer: 1,
    explanation: 'Since industries and vehicles are major contributors, controlling them would help',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },
  {
    id: 'rc-m-6',
    question: 'Passage: "Democracy requires informed citizens. Media plays crucial role in educating public." - What is implied?',
    options: ['Democracy doesn\'t need media', 'Media is unimportant', 'Informed citizens strengthen democracy', 'Citizens don\'t need information'],
    correctAnswer: 2,
    explanation: 'Passage implies informed citizens are vital for democracy',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },
  {
    id: 'rc-m-7',
    question: 'Passage: "Yoga improves physical and mental health. Regular practice reduces stress and increases flexibility." - Main benefit?',
    options: ['Only physical', 'Only mental', 'Both physical and mental', 'Neither'],
    correctAnswer: 2,
    explanation: 'Passage mentions both physical (flexibility) and mental (stress reduction) benefits',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },
  {
    id: 'rc-m-8',
    question: 'Passage: "Entrepreneurship drives innovation. It creates jobs and economic opportunities." - Purpose of passage?',
    options: ['To discourage business', 'To highlight benefits of entrepreneurship', 'To criticize entrepreneurs', 'To discuss problems'],
    correctAnswer: 1,
    explanation: 'Passage positively presents benefits of entrepreneurship',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },
  {
    id: 'rc-m-9',
    question: 'Passage: "Historical monuments tell stories of past civilizations. Preserving them is our responsibility." - Author suggests?',
    options: ['Destroy monuments', 'Ignore history', 'Preserve monuments', 'Build new monuments'],
    correctAnswer: 2,
    explanation: 'Author emphasizes preservation as a responsibility',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },
  {
    id: 'rc-m-10',
    question: 'Passage: "Teamwork achieves more than individual effort. Collaboration brings diverse perspectives." - What is emphasized?',
    options: ['Individual work', 'Competition', 'Collaboration', 'Isolation'],
    correctAnswer: 2,
    explanation: 'Passage emphasizes benefits of teamwork and collaboration',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'rc-h-1',
    question: 'Passage: "Artificial Intelligence promises efficiency but raises ethical concerns about job displacement and privacy. Balancing innovation with human welfare is crucial." - Central dilemma?',
    options: ['AI is useless', 'AI has only benefits', 'Balancing AI benefits with ethical concerns', 'AI should be banned'],
    correctAnswer: 2,
    explanation: 'Passage presents tension between AI benefits and ethical concerns',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },
  {
    id: 'rc-h-2',
    question: 'Passage: "Globalization interconnects economies but widens inequality. While some prosper, others struggle with cultural erosion and economic marginalization." - Author\'s stance?',
    options: ['Strongly pro-globalization', 'Strongly anti-globalization', 'Presents balanced view', 'Neutral and factual'],
    correctAnswer: 2,
    explanation: 'Author presents both positive (interconnection) and negative (inequality) aspects',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },
  {
    id: 'rc-h-3',
    question: 'Passage: "Scientific progress depends on questioning established beliefs. Paradigm shifts occur when evidence challenges prevailing theories." - What is implied?',
    options: ['Never question science', 'Science is absolute', 'Skepticism drives scientific advancement', 'Theories never change'],
    correctAnswer: 2,
    explanation: 'Passage implies questioning and challenging leads to progress',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },
  {
    id: 'rc-h-4',
    question: 'Passage: "Art reflects society\'s values and anxieties. Contemporary art often critiques consumerism and environmental degradation." - Function of contemporary art?',
    options: ['Pure decoration', 'Social commentary', 'Entertainment only', 'Apolitical expression'],
    correctAnswer: 1,
    explanation: 'Passage indicates art critiques societal issues (social commentary)',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },
  {
    id: 'rc-h-5',
    question: 'Passage: "Linguistic diversity preserves unique worldviews. Each language loss diminishes humanity\'s collective intellectual heritage." - What can be concluded?',
    options: ['Languages are unimportant', 'One language is enough', 'Language preservation is culturally significant', 'All languages are same'],
    correctAnswer: 2,
    explanation: 'Passage values linguistic diversity as intellectual heritage',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },
  {
    id: 'rc-h-6',
    question: 'Passage: "Post-truth era blurs fact and opinion. Social media algorithms create echo chambers, reinforcing biases rather than fostering critical thinking." - Primary concern?',
    options: ['Social media is good', 'Information ecosystem undermines truth', 'People are more informed', 'No problem exists'],
    correctAnswer: 1,
    explanation: 'Passage warns about erosion of truth and critical thinking',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },
  {
    id: 'rc-h-7',
    question: 'Passage: "Minimalism challenges consumerist culture. By valuing experiences over possessions, it questions economic models dependent on perpetual growth." - Minimalism represents?',
    options: ['Economic philosophy', 'Counter-cultural movement', 'Marketing strategy', 'Religious practice'],
    correctAnswer: 1,
    explanation: 'Passage frames minimalism as challenging dominant consumer culture',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },
  {
    id: 'rc-h-8',
    question: 'Passage: "Quantum mechanics defies intuition. Particles exist in superposition until observed, suggesting reality itself may be observer-dependent." - Implication?',
    options: ['Physics is simple', 'Reality is objective and fixed', 'Observation affects physical reality', 'Quantum mechanics is wrong'],
    correctAnswer: 2,
    explanation: 'Passage suggests observation plays role in determining reality',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },
  {
    id: 'rc-h-9',
    question: 'Passage: "Intersectionality reveals how systems of oppression overlap. Understanding multiple identities is crucial for effective social justice." - Main argument?',
    options: ['Single-issue activism sufficient', 'Oppression is uniform', 'Multiple identities create complex discrimination', 'Identity doesn\'t matter'],
    correctAnswer: 2,
    explanation: 'Passage argues for understanding overlapping forms of discrimination',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },
  {
    id: 'rc-h-10',
    question: 'Passage: "Stoic philosophy advocates emotional resilience through acceptance. By distinguishing what we control from what we don\'t, anxiety diminishes." - Core teaching?',
    options: ['Suppress all emotions', 'Focus on controllable factors', 'Everything is controllable', 'Nothing matters'],
    correctAnswer: 1,
    explanation: 'Stoicism teaches focusing on what\'s within one\'s control',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'hard'
  },

  // ===================== ERROR DETECTION (English) - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'error-e-1',
    question: 'Find error: "He go to school every day."',
    options: ['He', 'go', 'to', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "goes" for third person singular',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'error-e-2',
    question: 'Find error: "She is more taller than her sister."',
    options: ['more taller', 'than', 'her', 'No error'],
    correctAnswer: 0,
    explanation: 'Should be "taller" (remove "more")',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'error-e-3',
    question: 'Find error: "I have two brother."',
    options: ['have', 'two', 'brother', 'No error'],
    correctAnswer: 2,
    explanation: 'Should be "brothers" (plural)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'error-e-4',
    question: 'Find error: "She don\'t like tea."',
    options: ['She', 'don\'t', 'like', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "doesn\'t" for third person',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'error-e-5',
    question: 'Find error: "This is a apple."',
    options: ['This', 'a', 'apple', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "an" before vowel sound',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'error-e-6',
    question: 'Find error: "They was playing cricket."',
    options: ['They', 'was', 'playing', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "were" for plural subject',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'error-e-7',
    question: 'Find error: "I am liking this movie."',
    options: ['am liking', 'this', 'movie', 'No error'],
    correctAnswer: 0,
    explanation: 'Stative verbs don\'t use continuous: "I like"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'error-e-8',
    question: 'Find error: "He can sings well."',
    options: ['can', 'sings', 'well', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "sing" (base form after modal)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'error-e-9',
    question: 'Find error: "Me and my friend went out."',
    options: ['Me', 'my friend', 'went', 'No error'],
    correctAnswer: 0,
    explanation: 'Should be "My friend and I"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'error-e-10',
    question: 'Find error: "She is married with him."',
    options: ['is', 'married', 'with', 'No error'],
    correctAnswer: 2,
    explanation: 'Should be "married to"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'error-m-1',
    question: 'Find error: "Neither of the students have completed their homework."',
    options: ['Neither', 'have', 'their', 'No error'],
    correctAnswer: 1,
    explanation: '"Neither" is singular: should be "has"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },
  {
    id: 'error-m-2',
    question: 'Find error: "He told me that he has finished his work yesterday."',
    options: ['told', 'has finished', 'yesterday', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "had finished" (past perfect for earlier past action)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },
  {
    id: 'error-m-3',
    question: 'Find error: "The number of accidents have increased this year."',
    options: ['number', 'have', 'increased', 'No error'],
    correctAnswer: 1,
    explanation: '"The number" is singular: should be "has"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },
  {
    id: 'error-m-4',
    question: 'Find error: "She is senior than me."',
    options: ['is', 'senior than', 'me', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "senior to" (not comparative)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },
  {
    id: 'error-m-5',
    question: 'Find error: "Each of the boys have their own book."',
    options: ['Each', 'have', 'their', 'No error'],
    correctAnswer: 1,
    explanation: '"Each" is singular: should be "has his"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },
  {
    id: 'error-m-6',
    question: 'Find error: "I am working here since 2010."',
    options: ['am working', 'here', 'since', 'No error'],
    correctAnswer: 0,
    explanation: 'Should be "have been working" (present perfect continuous)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },
  {
    id: 'error-m-7',
    question: 'Find error: "He made me to do it."',
    options: ['made', 'to do', 'it', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "made me do" (no "to" after "make")',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },
  {
    id: 'error-m-8',
    question: 'Find error: "One should do his duty."',
    options: ['One', 'should do', 'his', 'No error'],
    correctAnswer: 3,
    explanation: 'No error: "one...his" is acceptable in formal English',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },
  {
    id: 'error-m-9',
    question: 'Find error: "She is addicted of smoking."',
    options: ['is', 'addicted of', 'smoking', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "addicted to"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },
  {
    id: 'error-m-10',
    question: 'Find error: "Despite of working hard, he failed."',
    options: ['Despite of', 'working', 'failed', 'No error'],
    correctAnswer: 0,
    explanation: 'Should be "Despite" or "In spite of"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'error-h-1',
    question: 'Find error: "Scarcely he had entered when the bell rang."',
    options: ['Scarcely', 'he had', 'entered', 'No error'],
    correctAnswer: 1,
    explanation: 'Inversion required: "Scarcely had he entered"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },
  {
    id: 'error-h-2',
    question: 'Find error: "The man to who I spoke was helpful."',
    options: ['to', 'who', 'was', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "whom" (object form)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },
  {
    id: 'error-h-3',
    question: 'Find error: "It is high time we leave this place."',
    options: ['high time', 'we leave', 'this place', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "we left" (past tense after "high time")',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },
  {
    id: 'error-h-4',
    question: 'Find error: "I would rather you did not told him."',
    options: ['would rather', 'did not told', 'him', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "had not told" (past perfect)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },
  {
    id: 'error-h-5',
    question: 'Find error: "No sooner I reached home than it started raining."',
    options: ['No sooner', 'I reached', 'started', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "had I reached" (inversion + past perfect)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },
  {
    id: 'error-h-6',
    question: 'Find error: "Had I known this, I will not have come."',
    options: ['Had I known', 'will not have', 'come', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "would not have come" (conditional perfect)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },
  {
    id: 'error-h-7',
    question: 'Find error: "The police has arrested the thief."',
    options: ['police', 'has', 'arrested', 'No error'],
    correctAnswer: 1,
    explanation: '"Police" is plural: should be "have"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },
  {
    id: 'error-h-8',
    question: 'Find error: "He behaves as if he was the owner."',
    options: ['behaves', 'as if', 'was', 'No error'],
    correctAnswer: 2,
    explanation: 'Should be "were" (subjunctive mood)',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },
  {
    id: 'error-h-9',
    question: 'Find error: "Bread and butter are my breakfast."',
    options: ['Bread and butter', 'are', 'my', 'No error'],
    correctAnswer: 1,
    explanation: '"Bread and butter" (single dish): should be "is"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },
  {
    id: 'error-h-10',
    question: 'Find error: "Neither the teacher nor the students was present."',
    options: ['Neither', 'nor', 'was', 'No error'],
    correctAnswer: 2,
    explanation: 'Verb agrees with nearest subject (students): should be "were"',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'hard'
  },

];
