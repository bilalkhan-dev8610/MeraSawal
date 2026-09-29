// Complete category structure for the quiz app

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface Category {
  id: string;
  name: string;
  icon: string;
  subCategories: SubCategory[];
  isSpecial?: boolean;
}

export interface SubCategory {
  id: string;
  name: string;
  parentCategoryId: string;
}

export const categories: Category[] = [
  {
    id: 'general-awareness',
    name: 'General Awareness (GK)',
    icon: '🧠',
    subCategories: [
      { id: 'static-gk', name: 'Static GK', parentCategoryId: 'general-awareness' },
      { id: 'current-affairs', name: 'Current Affairs (Last 6 Months)', parentCategoryId: 'general-awareness' },
      { id: 'important-days', name: 'Important Days & Dates', parentCategoryId: 'general-awareness' },
      { id: 'awards-honors', name: 'Awards & Honors', parentCategoryId: 'general-awareness' },
      { id: 'books-authors', name: 'Books & Authors', parentCategoryId: 'general-awareness' },
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🗺️',
    subCategories: [
      { id: 'indian-geography', name: 'Indian Geography', parentCategoryId: 'geography' },
      { id: 'world-geography', name: 'World Geography', parentCategoryId: 'geography' },
      { id: 'physical-geography', name: 'Physical Geography', parentCategoryId: 'geography' },
      { id: 'climate-environment', name: 'Climate & Environment', parentCategoryId: 'geography' },
      { id: 'maps-locations', name: 'Maps & Locations', parentCategoryId: 'geography' },
    ]
  },
  {
    id: 'history',
    name: 'History',
    icon: '🏛️',
    subCategories: [
      { id: 'ancient-history', name: 'Ancient Indian History', parentCategoryId: 'history' },
      { id: 'medieval-history', name: 'Medieval Indian History', parentCategoryId: 'history' },
      { id: 'modern-history', name: 'Modern Indian History', parentCategoryId: 'history' },
      { id: 'freedom-struggle', name: 'Freedom Struggle', parentCategoryId: 'history' },
      { id: 'world-history', name: 'World History', parentCategoryId: 'history' },
    ]
  },
  {
    id: 'indian-polity',
    name: 'Indian Polity',
    icon: '⚖️',
    subCategories: [
      { id: 'constitution-india', name: 'Constitution of India', parentCategoryId: 'indian-polity' },
      { id: 'fundamental-rights-duties', name: 'Fundamental Rights & Duties', parentCategoryId: 'indian-polity' },
      { id: 'parliament-judiciary', name: 'Parliament & Judiciary', parentCategoryId: 'indian-polity' },
      { id: 'panchayati-raj', name: 'Panchayati Raj', parentCategoryId: 'indian-polity' },
      { id: 'president-pm-governor', name: 'President, PM, Governor', parentCategoryId: 'indian-polity' },
    ]
  },
  {
    id: 'economy',
    name: 'Indian Economy',
    icon: '📊',
    subCategories: [
      { id: 'economy-basics', name: 'Economy Basics', parentCategoryId: 'economy' },
      { id: 'budget-survey', name: 'Budget & Economic Survey', parentCategoryId: 'economy' },
      { id: 'banking-finance', name: 'Banking & Finance', parentCategoryId: 'economy' },
      { id: 'inflation-gdp', name: 'Inflation, GDP & Taxes', parentCategoryId: 'economy' },
      { id: 'govt-schemes', name: 'Government Schemes', parentCategoryId: 'economy' },
    ]
  },
  {
    id: 'quant-reasoning',
    name: 'Quantitative & Reasoning',
    icon: '🧮',
    subCategories: [
      // Quantitative Aptitude
      { id: 'percentage', name: 'Percentage', parentCategoryId: 'quant-reasoning' },
      { id: 'profit-loss', name: 'Profit & Loss', parentCategoryId: 'quant-reasoning' },
      { id: 'ratio-proportion', name: 'Ratio & Proportion', parentCategoryId: 'quant-reasoning' },
      { id: 'time-work', name: 'Time & Work', parentCategoryId: 'quant-reasoning' },
      { id: 'time-speed-distance', name: 'Time, Speed & Distance', parentCategoryId: 'quant-reasoning' },
      { id: 'si-ci', name: 'SI & CI', parentCategoryId: 'quant-reasoning' },
      // Reasoning Ability
      { id: 'logical-reasoning', name: 'Logical Reasoning', parentCategoryId: 'quant-reasoning' },
      { id: 'verbal-reasoning', name: 'Verbal Reasoning', parentCategoryId: 'quant-reasoning' },
      { id: 'non-verbal-reasoning', name: 'Non-Verbal Reasoning', parentCategoryId: 'quant-reasoning' },
      { id: 'puzzles-seating', name: 'Puzzles & Seating Arrangement', parentCategoryId: 'quant-reasoning' },
      { id: 'coding-decoding', name: 'Coding-Decoding', parentCategoryId: 'quant-reasoning' },
    ]
  },
  {
    id: 'language',
    name: 'Language',
    icon: '🗣️',
    subCategories: [
      // English
      { id: 'grammar', name: 'Grammar', parentCategoryId: 'language' },
      { id: 'vocabulary', name: 'Vocabulary', parentCategoryId: 'language' },
      { id: 'synonyms-antonyms', name: 'Synonyms & Antonyms', parentCategoryId: 'language' },
      { id: 'reading-comprehension', name: 'Reading Comprehension', parentCategoryId: 'language' },
      { id: 'error-detection', name: 'Error Detection', parentCategoryId: 'language' },
      // Hindi
      { id: 'vyakaran', name: 'Vyakaran', parentCategoryId: 'language' },
      { id: 'muhavare', name: 'Muhavare & Lokoktiyan', parentCategoryId: 'language' },
      { id: 'paryayvachi', name: 'Paryayvachi & Vilom', parentCategoryId: 'language' },
      { id: 'hindi-comprehension', name: 'Comprehension (Hindi)', parentCategoryId: 'language' },
      { id: 'vakya-shuddhi', name: 'Vakya Shuddhi', parentCategoryId: 'language' },
    ]
  },
  {
    id: 'general-science',
    name: 'General Science',
    icon: '🧪',
    subCategories: [
      { id: 'physics-basic', name: 'Physics (Basic)', parentCategoryId: 'general-science' },
      { id: 'chemistry-basic', name: 'Chemistry (Basic)', parentCategoryId: 'general-science' },
      { id: 'biology-basic', name: 'Biology (Basic)', parentCategoryId: 'general-science' },
      { id: 'science-10th', name: 'General Science (10th Level)', parentCategoryId: 'general-science' },
    ]
  },
  {
    id: 'computer',
    name: 'Computer Awareness',
    icon: '💻',
    subCategories: [
      { id: 'basic-computer', name: 'Basic Computer', parentCategoryId: 'computer' },
      { id: 'ms-office', name: 'MS Office', parentCategoryId: 'computer' },
      { id: 'internet-networking', name: 'Internet & Networking', parentCategoryId: 'computer' },
      { id: 'cyber-security', name: 'Cyber Security', parentCategoryId: 'computer' },
      { id: 'ai-technology', name: 'AI & Technology Basics', parentCategoryId: 'computer' },
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '🔢',
    subCategories: [
      { id: 'arithmetic', name: 'Arithmetic', parentCategoryId: 'mathematics' },
      { id: 'algebra', name: 'Algebra', parentCategoryId: 'mathematics' },
      { id: 'geometry', name: 'Geometry', parentCategoryId: 'mathematics' },
    ]
  },
  // Special Categories included in main categories array
  {
    id: 'culture-heritage',
    name: 'Indian Culture & Heritage',
    icon: '📜',
    isSpecial: true,
    subCategories: [
      { id: 'indian-culture', name: 'Indian Culture', parentCategoryId: 'culture-heritage' },
      { id: 'world-heritage', name: 'World Heritage Sites', parentCategoryId: 'culture-heritage' },
      { id: 'art-architecture', name: 'Art & Architecture', parentCategoryId: 'culture-heritage' },
    ]
  },
  {
    id: 'environment-ecology',
    name: 'Environment & Ecology',
    icon: '🌱',
    isSpecial: true,
    subCategories: [
      { id: 'ecology-basics', name: 'Ecology Basics', parentCategoryId: 'environment-ecology' },
      { id: 'biodiversity', name: 'Biodiversity', parentCategoryId: 'environment-ecology' },
      { id: 'climate-change', name: 'Climate Change', parentCategoryId: 'environment-ecology' },
    ]
  },
  {
    id: 'space-defence',
    name: 'Space & Defence',
    icon: '🚀',
    isSpecial: true,
    subCategories: [
      { id: 'space-missions', name: 'Space Missions', parentCategoryId: 'space-defence' },
      { id: 'indian-defence', name: 'Indian Defence', parentCategoryId: 'space-defence' },
      { id: 'military-operations', name: 'Military Operations', parentCategoryId: 'space-defence' },
    ]
  },
  {
    id: 'education-pedagogy',
    name: 'Education & Pedagogy',
    icon: '📚',
    isSpecial: true,
    subCategories: [
      { id: 'teaching-methods', name: 'Teaching Methods', parentCategoryId: 'education-pedagogy' },
      { id: 'child-psychology', name: 'Child Psychology', parentCategoryId: 'education-pedagogy' },
      { id: 'education-policy', name: 'Education Policy', parentCategoryId: 'education-pedagogy' },
    ]
  },
];

// Special/Optional Categories
export const specialCategories: Category[] = categories.filter(cat => cat.isSpecial === true);

// Helper functions
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

export const getSubCategoryById = (categoryId: string, subCategoryId: string): SubCategory | undefined => {
  const category = getCategoryById(categoryId);
  return category?.subCategories.find(sub => sub.id === subCategoryId);
};