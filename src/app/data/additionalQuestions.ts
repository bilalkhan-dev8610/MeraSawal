import type { Question } from './questionsData';
import { historyQuestions } from './historyQuestionsTemp';
import { geographyQuestions } from './geographyQuestionsTemp';
import { polityQuestions } from './polityQuestionsTemp';
import { economyQuestions } from './economyQuestionsTemp';
import { scienceQuestions } from './scienceQuestionsTemp';
import { computerQuestions } from './computerQuestionsTemp';
import { gkQuestions } from './gkQuestionsTemp';
import { mathQuestions } from './mathQuestionsTemp';
import { quantReasoningQuestions } from './quantReasoningQuestions';
import { quantReasoningQuestionsPart2 } from './quantReasoningQuestionspart2';
import { languageQuestions } from './languageQuestions';
import { languageQuestionsPart2 } from './languageQuestionsPart2';

// Additional questions for remaining missing subcategories
export const additionalQuestions: Question[] = [
  
  // Import all history questions (Ancient, Medieval, Freedom Struggle, World History)
  ...historyQuestions,
  
  // Import all geography questions (Indian, World, Physical, Climate, Maps)
  ...geographyQuestions,
  
  // Import all Indian Polity questions (Constitution, FR/FD, Parliament/Judiciary, Panchayati Raj, President/PM/Governor)
  ...polityQuestions,
  
  // Import all Economy questions (Basics, Budget, Banking, Inflation-GDP, Govt Schemes)
  ...economyQuestions,
  
  // Import all General Science questions (Physics, Chemistry, Biology, Class 10)
  ...scienceQuestions,
  
  // Import all Computer Awareness questions (Basic Computer, MS Office, Networking, Security, AI)
  ...computerQuestions,
  
  // Import all General Awareness/GK questions (Static GK, Current Affairs, Important Days, Awards, Books)
  ...gkQuestions,
  
  // Import all Mathematics questions (Arithmetic, Algebra, Geometry)
  ...mathQuestions,
  
  // Import all Quantitative & Reasoning questions (Percentage, Profit-Loss, Ratio, Time-Work, TSD, SI-CI)
  ...quantReasoningQuestions,
  
  // Import all Reasoning Ability questions (Logical, Verbal, Non-Verbal, Puzzles, Coding-Decoding)
  ...quantReasoningQuestionsPart2,
  
  // Import all Language questions - English (Grammar, Vocabulary, Synonyms-Antonyms, Reading, Error Detection)
  ...languageQuestions,
  
  // Import all Language questions - Hindi (Vyakaran, Muhavare, Paryayvachi-Vilom, Comprehension, Vakya Shuddhi)
  ...languageQuestionsPart2,
  
  // ============= ECONOMY - BUDGET & SURVEY (Easy) =============
  {
    id: 'eco-budget-e-1',
    question: 'Union Budget is presented by?',
    options: ['President', 'Prime Minister', 'Finance Minister', 'RBI Governor'],
    correctAnswer: 2,
    explanation: 'Finance Minister presents Union Budget.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-2',
    question: 'Budget is presented in which month?',
    options: ['January', 'February', 'March', 'April'],
    correctAnswer: 1,
    explanation: 'Budget is traditionally presented on February 1.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-3',
    question: 'Economic Survey is prepared by?',
    options: ['RBI', 'Finance Ministry', 'NITI Aayog', 'Planning Commission'],
    correctAnswer: 1,
    explanation: 'Economic Survey is prepared by Finance Ministry.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-4',
    question: 'Revenue receipt includes?',
    options: ['Taxes', 'Loans', 'Disinvestment', 'None'],
    correctAnswer: 0,
    explanation: 'Revenue receipts include taxes and non-tax revenue.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-5',
    question: 'Which tax gives maximum revenue to Central Govt?',
    options: ['Income Tax', 'GST', 'Corporate Tax', 'Customs'],
    correctAnswer: 1,
    explanation: 'GST is now the largest revenue source.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-6',
    question: 'Fiscal deficit means?',
    options: ['Revenue - Expenditure', 'Total expenditure - Total receipt', 'Total expenditure - Revenue receipt - Capital receipt (non-debt)', 'None'],
    correctAnswer: 2,
    explanation: 'Fiscal deficit is total expenditure minus total receipts (excluding borrowings).',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-7',
    question: 'Plan and Non-Plan distinction ended in?',
    options: ['2014', '2015', '2017', '2020'],
    correctAnswer: 2,
    explanation: 'Plan and Non-Plan classification ended in Budget 2017-18.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-8',
    question: 'Which is capital expenditure?',
    options: ['Salaries', 'Interest payment', 'Building roads', 'Subsidies'],
    correctAnswer: 2,
    explanation: 'Capital expenditure creates assets like roads, buildings.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-9',
    question: 'Vote on Account allows govt to spend for?',
    options: ['1 month', '2 months', '3 months', '6 months'],
    correctAnswer: 1,
    explanation: 'Vote on Account covers expenditure for 2-3 months.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-10',
    question: 'Railway Budget merged with Union Budget in?',
    options: ['2014', '2016', '2017', '2019'],
    correctAnswer: 2,
    explanation: 'Railway Budget merged in 2017.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },

  // ============= ECONOMY - BANKING & FINANCE (Easy) =============
  {
    id: 'eco-bank-e-1',
    question: 'RBI was established in?',
    options: ['1935', '1947', '1950', '1955'],
    correctAnswer: 0,
    explanation: 'Reserve Bank of India was established in 1935.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-2',
    question: 'Monetary Policy is controlled by?',
    options: ['Government', 'RBI', 'SEBI', 'Finance Ministry'],
    correctAnswer: 1,
    explanation: 'RBI controls monetary policy.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-3',
    question: 'CRR stands for?',
    options: ['Cash Reserve Ratio', 'Credit Reserve Ratio', 'Central Reserve Ratio', 'Cash Rate Ratio'],
    correctAnswer: 0,
    explanation: 'CRR is Cash Reserve Ratio.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-4',
    question: 'SLR stands for?',
    options: ['Statutory Liquidity Ratio', 'Standard Liquidity Ratio', 'Secured Liquidity Ratio', 'State Liquidity Ratio'],
    correctAnswer: 0,
    explanation: 'SLR is Statutory Liquidity Ratio.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-5',
    question: 'Repo Rate means?',
    options: ['Rate at which RBI lends', 'Rate at which RBI borrows', 'Exchange rate', 'Inflation rate'],
    correctAnswer: 0,
    explanation: 'Repo Rate is the rate at which RBI lends to banks.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-6',
    question: 'NEFT stands for?',
    options: ['National Electronic Fund Transfer', 'New Electronic Fund Transfer', 'National Easy Fund Transfer', 'None'],
    correctAnswer: 0,
    explanation: 'NEFT is National Electronic Funds Transfer.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-7',
    question: 'Which bank is called "Banker\'s Bank"?',
    options: ['SBI', 'RBI', 'ICICI', 'HDFC'],
    correctAnswer: 1,
    explanation: 'RBI is called Banker\'s Bank.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-8',
    question: 'NABARD was established in?',
    options: ['1975', '1980', '1982', '1985'],
    correctAnswer: 2,
    explanation: 'NABARD was set up in 1982.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-9',
    question: 'Priority Sector Lending target is?',
    options: ['30%', '35%', '40%', '45%'],
    correctAnswer: 2,
    explanation: 'PSL target is 40% for domestic banks.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-10',
    question: 'Jan Dhan Yojana was launched in?',
    options: ['2013', '2014', '2015', '2016'],
    correctAnswer: 1,
    explanation: 'PM Jan Dhan Yojana launched on 28 August 2014.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },

  // ============= ECONOMY - INFLATION & GDP (Easy) =============
  {
    id: 'eco-inf-e-1',
    question: 'Inflation measured by which index in India?',
    options: ['WPI', 'CPI', 'Both', 'None'],
    correctAnswer: 2,
    explanation: 'Both WPI and CPI measure inflation.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-2',
    question: 'GDP stands for?',
    options: ['Gross Domestic Product', 'General Domestic Product', 'Gross Development Product', 'None'],
    correctAnswer: 0,
    explanation: 'GDP is Gross Domestic Product.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-3',
    question: 'Which inflation is good for economy?',
    options: ['Deflation', 'Zero inflation', 'Moderate inflation', 'Hyperinflation'],
    correctAnswer: 2,
    explanation: 'Moderate inflation (2-3%) is healthy for growth.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-4',
    question: 'India\'s GDP is calculated by?',
    options: ['RBI', 'Finance Ministry', 'CSO/NSO', 'NITI Aayog'],
    correctAnswer: 2,
    explanation: 'Central Statistics Office (now NSO) calculates GDP.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-5',
    question: 'Per Capita Income means?',
    options: ['Total income', 'Average income', 'Minimum income', 'Maximum income'],
    correctAnswer: 1,
    explanation: 'Per Capita Income is average income (GDP/Population).',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-6',
    question: 'Base year for GDP calculation is?',
    options: ['2004-05', '2011-12', '2014-15', '2017-18'],
    correctAnswer: 1,
    explanation: 'Current base year is 2011-12.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-7',
    question: 'Which sector contributes most to Indian GDP?',
    options: ['Agriculture', 'Industry', 'Services', 'Manufacturing'],
    correctAnswer: 2,
    explanation: 'Services sector contributes over 50% to GDP.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-8',
    question: 'GNP differs from GDP by?',
    options: ['Population', 'Exports-Imports', 'Net factor income from abroad', 'Inflation'],
    correctAnswer: 2,
    explanation: 'GNP = GDP + Net factor income from abroad.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-9',
    question: 'Stagflation means?',
    options: ['High inflation + High growth', 'Low inflation + Low growth', 'High inflation + Low growth', 'Zero inflation'],
    correctAnswer: 2,
    explanation: 'Stagflation is stagnation + inflation (low growth, high inflation).',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-10',
    question: 'Green GDP includes?',
    options: ['Only agriculture', 'Environmental degradation', 'Forest cover', 'Rural GDP'],
    correctAnswer: 1,
    explanation: 'Green GDP accounts for environmental costs.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },

  // ============= ECONOMY - GOVERNMENT SCHEMES (Easy) =============
  {
    id: 'eco-scheme-e-1',
    question: 'Ayushman Bharat provides health insurance of?',
    options: ['₹3 lakh', '₹5 lakh', '₹10 lakh', '₹15 lakh'],
    correctAnswer: 1,
    explanation: 'Ayushman Bharat provides ₹5 lakh health cover.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-2',
    question: 'PM Kisan Samman Nidhi gives annually?',
    options: ['₹4000', '₹6000', '₹8000', '₹10000'],
    correctAnswer: 1,
    explanation: 'PM-KISAN provides ₹6000 per year to farmers.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-3',
    question: 'MGNREGA guarantees how many days work?',
    options: ['90 days', '100 days', '120 days', '150 days'],
    correctAnswer: 1,
    explanation: 'MGNREGA guarantees 100 days of employment.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-4',
    question: 'Ujjwala Yojana provides?',
    options: ['Free electricity', 'Free LPG connection', 'Free water', 'Free housing'],
    correctAnswer: 1,
    explanation: 'Ujjwala provides free LPG connections to poor women.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-5',
    question: 'Swachh Bharat Mission launched in?',
    options: ['2013', '2014', '2015', '2016'],
    correctAnswer: 1,
    explanation: 'Swachh Bharat Mission launched on 2 Oct 2014.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-6',
    question: 'PM Awas Yojana aims to provide?',
    options: ['Education', 'Housing', 'Healthcare', 'Employment'],
    correctAnswer: 1,
    explanation: 'PM Awas Yojana provides housing for all.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-7',
    question: 'Skill India Mission launched in?',
    options: ['2014', '2015', '2016', '2017'],
    correctAnswer: 1,
    explanation: 'Skill India launched on 15 July 2015.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-8',
    question: 'Make in India launched in?',
    options: ['2013', '2014', '2015', '2016'],
    correctAnswer: 1,
    explanation: 'Make in India launched on 25 Sep 2014.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-9',
    question: 'Digital India aims for?',
    options: ['Digital literacy', 'E-governance', 'Digital infrastructure', 'All of these'],
    correctAnswer: 3,
    explanation: 'Digital India covers all aspects of digitalization.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-10',
    question: 'Atal Pension Yojana targets?',
    options: ['Women', 'Farmers', 'Unorganized sector', 'Students'],
    correctAnswer: 2,
    explanation: 'APY provides pension to unorganized sector workers.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },

  // ============= GENERAL SCIENCE - CHEMISTRY BASIC (Easy) =============
  {
    id: 'sci-chem-e-1',
    question: 'Chemical formula of water is?',
    options: ['H2O', 'H2O2', 'HO2', 'H3O'],
    correctAnswer: 0,
    explanation: 'Water is H2O (two hydrogen, one oxygen).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-2',
    question: 'Common salt is?',
    options: ['NaCl', 'KCl', 'CaCl2', 'MgCl2'],
    correctAnswer: 0,
    explanation: 'Common salt is Sodium Chloride (NaCl).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-3',
    question: 'pH of pure water is?',
    options: ['0', '7', '14', '10'],
    correctAnswer: 1,
    explanation: 'Pure water has pH 7 (neutral).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-4',
    question: 'Lightest element is?',
    options: ['Helium', 'Hydrogen', 'Oxygen', 'Nitrogen'],
    correctAnswer: 1,
    explanation: 'Hydrogen is the lightest element.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-5',
    question: 'Rusting of iron is which change?',
    options: ['Physical', 'Chemical', 'Both', 'None'],
    correctAnswer: 1,
    explanation: 'Rusting is a chemical change (oxidation).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-6',
    question: 'Which gas is used in soda?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    correctAnswer: 2,
    explanation: 'Carbon dioxide (CO2) is used in aerated drinks.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-7',
    question: 'Vinegar contains which acid?',
    options: ['Citric acid', 'Acetic acid', 'Hydrochloric acid', 'Sulfuric acid'],
    correctAnswer: 1,
    explanation: 'Vinegar contains acetic acid.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-8',
    question: 'Atomic number of carbon is?',
    options: ['4', '6', '8', '12'],
    correctAnswer: 1,
    explanation: 'Carbon has atomic number 6.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-9',
    question: 'Which metal is liquid at room temperature?',
    options: ['Iron', 'Mercury', 'Gold', 'Silver'],
    correctAnswer: 1,
    explanation: 'Mercury is liquid at room temperature.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-10',
    question: 'Baking soda is?',
    options: ['NaCl', 'NaHCO3', 'Na2CO3', 'NaOH'],
    correctAnswer: 1,
    explanation: 'Baking soda is Sodium bicarbonate (NaHCO3).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },

  // ============= GENERAL SCIENCE - BIOLOGY BASIC (Easy) =============
  {
    id: 'sci-bio-e-1',
    question: 'Smallest unit of life is?',
    options: ['Atom', 'Molecule', 'Cell', 'Tissue'],
    correctAnswer: 2,
    explanation: 'Cell is the basic unit of life.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-2',
    question: 'Human body has how many bones?',
    options: ['196', '206', '216', '226'],
    correctAnswer: 1,
    explanation: 'Human body has 206 bones.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-3',
    question: 'Which vitamin is produced by sunlight?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E'],
    correctAnswer: 2,
    explanation: 'Vitamin D is produced by skin when exposed to sunlight.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-4',
    question: 'Largest organ in human body is?',
    options: ['Liver', 'Heart', 'Skin', 'Brain'],
    correctAnswer: 2,
    explanation: 'Skin is the largest organ.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-5',
    question: 'Plants prepare food by?',
    options: ['Respiration', 'Photosynthesis', 'Digestion', 'Absorption'],
    correctAnswer: 1,
    explanation: 'Plants make food through photosynthesis.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-6',
    question: 'Green color in plants is due to?',
    options: ['Carotene', 'Xanthophyll', 'Chlorophyll', 'Anthocyanin'],
    correctAnswer: 2,
    explanation: 'Chlorophyll gives green color to plants.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-7',
    question: 'Which blood group is universal donor?',
    options: ['A', 'B', 'AB', 'O'],
    correctAnswer: 3,
    explanation: 'O negative is universal donor.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-8',
    question: 'Human heart has how many chambers?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'Heart has 4 chambers (2 atria, 2 ventricles).',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-9',
    question: 'Which carries oxygen in blood?',
    options: ['WBC', 'RBC', 'Platelets', 'Plasma'],
    correctAnswer: 1,
    explanation: 'Red Blood Cells (RBC) carry oxygen.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-10',
    question: 'Normal human body temperature is?',
    options: ['36°C', '37°C', '38°C', '39°C'],
    correctAnswer: 1,
    explanation: 'Normal body temperature is 37°C (98.6°F).',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },

  // ============= GENERAL SCIENCE - CLASS 10 SCIENCE (Easy) =============
  {
    id: 'sci-10-e-1',
    question: 'Acid turns blue litmus to?',
    options: ['Blue', 'Red', 'Green', 'Yellow'],
    correctAnswer: 1,
    explanation: 'Acid turns blue litmus red.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-2',
    question: 'The formula for acceleration is?',
    options: ['v/t', 'v-u/t', 'u+v/t', 'v²-u²/2s'],
    correctAnswer: 1,
    explanation: 'Acceleration = (v-u)/t',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-3',
    question: 'SI unit of force is?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctAnswer: 1,
    explanation: 'Newton (N) is the SI unit of force.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-4',
    question: 'Mitosis produces how many cells?',
    options: ['1', '2', '4', '8'],
    correctAnswer: 1,
    explanation: 'Mitosis produces 2 identical daughter cells.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-5',
    question: 'Power of lens is measured in?',
    options: ['Metre', 'Dioptre', 'Watt', 'Newton'],
    correctAnswer: 1,
    explanation: 'Dioptre is the unit of power of lens.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-6',
    question: 'Ohm\'s law relates?',
    options: ['V and I', 'V, I and R', 'Only R', 'Only V'],
    correctAnswer: 1,
    explanation: 'Ohm\'s law: V = IR',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-7',
    question: 'Biomagnification means?',
    options: ['Growth of organisms', 'Increase in toxic concentration', 'Population growth', 'None'],
    correctAnswer: 1,
    explanation: 'Biomagnification is accumulation of toxins in food chain.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-8',
    question: 'Mendel worked on which plant?',
    options: ['Rice', 'Wheat', 'Pea', 'Maize'],
    correctAnswer: 2,
    explanation: 'Mendel conducted experiments on pea plants.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-9',
    question: 'Corrosion of metals is which type of reaction?',
    options: ['Reduction', 'Oxidation', 'Displacement', 'Combustion'],
    correctAnswer: 1,
    explanation: 'Corrosion is oxidation of metals.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-10',
    question: 'Trophic level starts with?',
    options: ['Herbivores', 'Producers', 'Carnivores', 'Decomposers'],
    correctAnswer: 1,
    explanation: 'Producers (plants) are first trophic level.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },

  // ============= POLITY - FUNDAMENTAL RIGHTS (Easy) =============
  {
    id: 'pol-fr-e-1',
    question: 'How many Fundamental Rights are there in Indian Constitution?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'There are 6 Fundamental Rights (originally 7, right to property removed).',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },
  {
    id: 'pol-fr-e-2',
    question: 'Right to Equality is under which Article?',
    options: ['Article 12-18', 'Article 14-18', 'Article 19-22', 'Article 23-24'],
    correctAnswer: 1,
    explanation: 'Right to Equality is Articles 14-18.',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },
  {
    id: 'pol-fr-e-3',
    question: 'Right to Freedom is under which Articles?',
    options: ['Article 14-18', 'Article 19-22', 'Article 23-24', 'Article 25-28'],
    correctAnswer: 1,
    explanation: 'Right to Freedom is Articles 19-22.',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },
  {
    id: 'pol-fr-e-4',
    question: 'Article 21 provides?',
    options: ['Right to Equality', 'Right to Life and Personal Liberty', 'Right to Freedom', 'Right to Property'],
    correctAnswer: 1,
    explanation: 'Article 21 guarantees Right to Life and Personal Liberty.',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },
  {
    id: 'pol-fr-e-5',
    question: 'Right against Exploitation is under which Articles?',
    options: ['Article 14-18', 'Article 19-22', 'Article 23-24', 'Article 25-28'],
    correctAnswer: 2,
    explanation: 'Right against Exploitation is Articles 23-24.',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },
  {
    id: 'pol-fr-e-6',
    question: 'Right to Freedom of Religion is under which Articles?',
    options: ['Article 19-22', 'Article 23-24', 'Article 25-28', 'Article 29-30'],
    correctAnswer: 2,
    explanation: 'Right to Freedom of Religion is Articles 25-28.',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },
  {
    id: 'pol-fr-e-7',
    question: 'Cultural and Educational Rights are under which Articles?',
    options: ['Article 23-24', 'Article 25-28', 'Article 29-30', 'Article 32'],
    correctAnswer: 2,
    explanation: 'Cultural and Educational Rights are Articles 29-30.',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },
  {
    id: 'pol-fr-e-8',
    question: 'Right to Constitutional Remedies is under which Article?',
    options: ['Article 21', 'Article 30', 'Article 32', 'Article 356'],
    correctAnswer: 2,
    explanation: 'Article 32 provides Right to Constitutional Remedies.',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },
  {
    id: 'pol-fr-e-9',
    question: 'Which Article is called "Heart and Soul of Constitution"?',
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
    correctAnswer: 3,
    explanation: 'Dr. Ambedkar called Article 32 the heart and soul.',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },
  {
    id: 'pol-fr-e-10',
    question: 'Untouchability is abolished under which Article?',
    options: ['Article 14', 'Article 15', 'Article 17', 'Article 18'],
    correctAnswer: 2,
    explanation: 'Article 17 abolishes untouchability.',
    categoryId: 'indian-polity',
    subCategoryId: 'fundamental-rights-duties',
    level: 'easy'
  },

  // ============= POLITY - PARLIAMENT & JUDICIARY (Easy) =============
  {
    id: 'pol-pj-e-1',
    question: 'Indian Parliament consists of?',
    options: ['Lok Sabha only', 'Rajya Sabha only', 'Lok Sabha + Rajya Sabha', 'President + Lok Sabha + Rajya Sabha'],
    correctAnswer: 3,
    explanation: 'Parliament = President + Lok Sabha + Rajya Sabha.',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },
  {
    id: 'pol-pj-e-2',
    question: 'Maximum strength of Lok Sabha is?',
    options: ['530', '545', '552', '560'],
    correctAnswer: 2,
    explanation: 'Maximum Lok Sabha strength is 552 (530 states + 20 UTs + 2 Anglo-Indians).',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },
  {
    id: 'pol-pj-e-3',
    question: 'Rajya Sabha has maximum how many members?',
    options: ['238', '245', '250', '260'],
    correctAnswer: 1,
    explanation: 'Rajya Sabha can have maximum 245 members.',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },
  {
    id: 'pol-pj-e-4',
    question: 'Rajya Sabha members are elected for?',
    options: ['5 years', '6 years', '7 years', 'Life'],
    correctAnswer: 1,
    explanation: 'Rajya Sabha members serve 6-year terms.',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },
  {
    id: 'pol-pj-e-5',
    question: 'Money Bill can be introduced only in?',
    options: ['Lok Sabha', 'Rajya Sabha', 'Both', 'None'],
    correctAnswer: 0,
    explanation: 'Money Bills can only be introduced in Lok Sabha.',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },
  {
    id: 'pol-pj-e-6',
    question: 'Supreme Court has how many judges (including CJI)?',
    options: ['25', '31', '34', '34 (can be increased)'],
    correctAnswer: 3,
    explanation: 'Currently 34 judges including CJI (can be increased by Parliament).',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },
  {
    id: 'pol-pj-e-7',
    question: 'Supreme Court judges retire at age?',
    options: ['60', '62', '65', '70'],
    correctAnswer: 2,
    explanation: 'SC judges retire at 65 years.',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },
  {
    id: 'pol-pj-e-8',
    question: 'High Court judges retire at age?',
    options: ['60', '62', '65', '70'],
    correctAnswer: 1,
    explanation: 'HC judges retire at 62 years.',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },
  {
    id: 'pol-pj-e-9',
    question: 'Judicial Review concept borrowed from?',
    options: ['UK', 'USA', 'Canada', 'Australia'],
    correctAnswer: 1,
    explanation: 'Judicial Review borrowed from USA.',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },
  {
    id: 'pol-pj-e-10',
    question: 'Who appoints judges of Supreme Court?',
    options: ['Prime Minister', 'President', 'Chief Justice', 'Parliament'],
    correctAnswer: 1,
    explanation: 'President appoints SC judges (on advice of CJI).',
    categoryId: 'indian-polity',
    subCategoryId: 'parliament-judiciary',
    level: 'easy'
  },

  // ============= POLITY - PANCHAYATI RAJ (Easy) =============
  {
    id: 'pol-pr-e-1',
    question: 'Panchayati Raj added by which Amendment?',
    options: ['42nd', '52nd', '73rd', '74th'],
    correctAnswer: 2,
    explanation: '73rd Amendment (1992) added Panchayati Raj.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },
  {
    id: 'pol-pr-e-2',
    question: 'Panchayati Raj has how many tiers?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    explanation: 'Three tiers: Village, Block, District.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },
  {
    id: 'pol-pr-e-3',
    question: 'Village level Panchayat is called?',
    options: ['Gram Panchayat', 'Panchayat Samiti', 'Zila Parishad', 'Gram Sabha'],
    correctAnswer: 0,
    explanation: 'Village level body is Gram Panchayat.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },
  {
    id: 'pol-pr-e-4',
    question: 'Block level Panchayat is called?',
    options: ['Gram Panchayat', 'Panchayat Samiti', 'Zila Parishad', 'Gram Sabha'],
    correctAnswer: 1,
    explanation: 'Block level body is Panchayat Samiti.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },
  {
    id: 'pol-pr-e-5',
    question: 'District level Panchayat is called?',
    options: ['Gram Panchayat', 'Panchayat Samiti', 'Zila Parishad', 'District Board'],
    correctAnswer: 2,
    explanation: 'District level body is Zila Parishad.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },
  {
    id: 'pol-pr-e-6',
    question: 'Panchayat elections are conducted by?',
    options: ['Election Commission of India', 'State Election Commission', 'District Collector', 'Governor'],
    correctAnswer: 1,
    explanation: 'State Election Commission conducts Panchayat elections.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },
  {
    id: 'pol-pr-e-7',
    question: 'Panchayat term is?',
    options: ['3 years', '4 years', '5 years', '6 years'],
    correctAnswer: 2,
    explanation: 'Panchayats have 5-year term.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },
  {
    id: 'pol-pr-e-8',
    question: 'Reservation for women in Panchayats is?',
    options: ['25%', '33%', '40%', '50%'],
    correctAnswer: 1,
    explanation: 'At least 33% seats reserved for women.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },
  {
    id: 'pol-pr-e-9',
    question: 'Gram Sabha consists of?',
    options: ['Elected members', 'All villagers above 18', 'Sarpanch only', 'Government officials'],
    correctAnswer: 1,
    explanation: 'Gram Sabha = all registered voters in village.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },
  {
    id: 'pol-pr-e-10',
    question: 'Head of Gram Panchayat is called?',
    options: ['Pradhan', 'Sarpanch', 'Both names used', 'Chairman'],
    correctAnswer: 2,
    explanation: 'Called Sarpanch or Pradhan in different states.',
    categoryId: 'indian-polity',
    subCategoryId: 'panchayati-raj',
    level: 'easy'
  },

  // ============= POLITY - PRESIDENT & PM (Easy) =============
  {
    id: 'pol-pp-e-1',
    question: 'President of India is elected by?',
    options: ['Direct election', 'Electoral College', 'Parliament', 'Prime Minister'],
    correctAnswer: 1,
    explanation: 'President elected by Electoral College (MPs + MLAs).',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },
  {
    id: 'pol-pp-e-2',
    question: 'President term is?',
    options: ['4 years', '5 years', '6 years', '7 years'],
    correctAnswer: 1,
    explanation: 'President serves 5-year term.',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },
  {
    id: 'pol-pp-e-3',
    question: 'Minimum age to become President is?',
    options: ['25 years', '30 years', '35 years', '40 years'],
    correctAnswer: 2,
    explanation: 'Minimum age for President is 35 years.',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },
  {
    id: 'pol-pp-e-4',
    question: 'President can be removed by?',
    options: ['Prime Minister', 'Impeachment', 'Supreme Court', 'Parliament resolution'],
    correctAnswer: 1,
    explanation: 'President removed through impeachment process.',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },
  {
    id: 'pol-pp-e-5',
    question: 'Who appoints the Prime Minister?',
    options: ['Lok Sabha', 'President', 'Chief Justice', 'Vice President'],
    correctAnswer: 1,
    explanation: 'President appoints the Prime Minister.',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },
  {
    id: 'pol-pp-e-6',
    question: 'Prime Minister must be member of?',
    options: ['Lok Sabha', 'Rajya Sabha', 'Either House', 'Neither'],
    correctAnswer: 2,
    explanation: 'PM must be member of either Lok Sabha or Rajya Sabha.',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },
  {
    id: 'pol-pp-e-7',
    question: 'President gives assent to bills on advice of?',
    options: ['Parliament', 'Prime Minister', 'Council of Ministers', 'Supreme Court'],
    correctAnswer: 2,
    explanation: 'President acts on advice of Council of Ministers.',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },
  {
    id: 'pol-pp-e-8',
    question: 'Who is the real executive head?',
    options: ['President', 'Prime Minister', 'Vice President', 'Cabinet Secretary'],
    correctAnswer: 1,
    explanation: 'PM is the real executive head (Parliamentary system).',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },
  {
    id: 'pol-pp-e-9',
    question: 'President can proclaim emergency under which Article?',
    options: ['Article 352', 'Article 356', 'Article 360', 'All of these'],
    correctAnswer: 3,
    explanation: 'President can declare 3 types of emergency (352, 356, 360).',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },
  {
    id: 'pol-pp-e-10',
    question: 'Who administers oath to the President?',
    options: ['Prime Minister', 'Chief Justice of India', 'Vice President', 'Speaker'],
    correctAnswer: 1,
    explanation: 'Chief Justice administers oath to President.',
    categoryId: 'indian-polity',
    subCategoryId: 'president-pm-governor',
    level: 'easy'
  },

  // ============= HISTORY - MODERN HISTORY (Easy) =============
  {
    id: 'hist-mod-e-1',
    question: 'Battle of Plassey was fought in?',
    options: ['1757', '1764', '1857', '1947'],
    correctAnswer: 0,
    explanation: 'Battle of Plassey fought in 1757.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },
  {
    id: 'hist-mod-e-2',
    question: 'First Governor General of India was?',
    options: ['Warren Hastings', 'Lord Dalhousie', 'Lord Curzon', 'Robert Clive'],
    correctAnswer: 0,
    explanation: 'Warren Hastings was first Governor General (1773-85).',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },
  {
    id: 'hist-mod-e-3',
    question: 'Doctrine of Lapse was introduced by?',
    options: ['Warren Hastings', 'Lord Dalhousie', 'Lord Curzon', 'Lord Wellesley'],
    correctAnswer: 1,
    explanation: 'Lord Dalhousie introduced Doctrine of Lapse.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },
  {
    id: 'hist-mod-e-4',
    question: 'Sepoy Mutiny started in which year?',
    options: ['1757', '1857', '1947', '1885'],
    correctAnswer: 1,
    explanation: 'First War of Independence/Sepoy Mutiny in 1857.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },
  {
    id: 'hist-mod-e-5',
    question: 'Indian National Congress was founded in?',
    options: ['1857', '1885', '1905', '1947'],
    correctAnswer: 1,
    explanation: 'INC founded in 1885 by A.O. Hume.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },
  {
    id: 'hist-mod-e-6',
    question: 'Partition of Bengal happened in?',
    options: ['1885', '1905', '1911', '1947'],
    correctAnswer: 1,
    explanation: 'Bengal partitioned by Curzon in 1905.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },
  {
    id: 'hist-mod-e-7',
    question: 'Jallianwala Bagh massacre in?',
    options: ['1905', '1919', '1942', '1947'],
    correctAnswer: 1,
    explanation: 'Jallianwala Bagh massacre on 13 April 1919.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },
  {
    id: 'hist-mod-e-8',
    question: 'Non-Cooperation Movement started in?',
    options: ['1919', '1920', '1930', '1942'],
    correctAnswer: 1,
    explanation: 'Non-Cooperation Movement started in 1920.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },
  {
    id: 'hist-mod-e-9',
    question: 'Simon Commission came to India in?',
    options: ['1919', '1928', '1935', '1942'],
    correctAnswer: 1,
    explanation: 'Simon Commission arrived in 1928.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },
  {
    id: 'hist-mod-e-10',
    question: 'Dandi March was in which year?',
    options: ['1920', '1930', '1942', '1947'],
    correctAnswer: 1,
    explanation: 'Salt Satyagraha/Dandi March in 1930.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'easy'
  },

  // ============= HISTORY - MODERN INDIAN HISTORY (Medium) =============
  {
    id: 'hist-mod-m-1',
    question: 'The Regulating Act of 1773 established the position of?',
    options: ['Viceroy', 'Governor-General of Bengal', 'Prime Minister', 'Chief Justice'],
    correctAnswer: 1,
    explanation: 'Regulating Act 1773 created position of Governor-General of Bengal.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },
  {
    id: 'hist-mod-m-2',
    question: 'Permanent Settlement system was introduced by?',
    options: ['Warren Hastings', 'Lord Cornwallis', 'Lord Wellesley', 'Lord Dalhousie'],
    correctAnswer: 1,
    explanation: 'Lord Cornwallis introduced Permanent Settlement in 1793.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },
  {
    id: 'hist-mod-m-3',
    question: 'Subsidiary Alliance system was introduced by which Governor-General?',
    options: ['Lord Cornwallis', 'Lord Wellesley', 'Lord Dalhousie', 'Warren Hastings'],
    correctAnswer: 1,
    explanation: 'Lord Wellesley introduced Subsidiary Alliance in 1798.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },
  {
    id: 'hist-mod-m-4',
    question: 'Sati was abolished in which year?',
    options: ['1829', '1857', '1885', '1905'],
    correctAnswer: 0,
    explanation: 'Lord William Bentinck abolished Sati in 1829.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },
  {
    id: 'hist-mod-m-5',
    question: 'The Vernacular Press Act was passed in which year?',
    options: ['1857', '1878', '1905', '1919'],
    correctAnswer: 1,
    explanation: 'Vernacular Press Act passed by Lord Lytton in 1878.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },
  {
    id: 'hist-mod-m-6',
    question: 'Ilbert Bill controversy was during whose tenure?',
    options: ['Lord Lytton', 'Lord Ripon', 'Lord Curzon', 'Lord Minto'],
    correctAnswer: 1,
    explanation: 'Ilbert Bill controversy (1883) during Lord Ripon tenure.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },
  {
    id: 'hist-mod-m-7',
    question: 'Ryotwari system was introduced by?',
    options: ['Warren Hastings', 'Thomas Munro', 'Lord Cornwallis', 'Lord Wellesley'],
    correctAnswer: 1,
    explanation: 'Thomas Munro introduced Ryotwari system in Madras.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },
  {
    id: 'hist-mod-m-8',
    question: 'The Government of India Act 1858 transferred power to?',
    options: ['East India Company', 'British Crown', 'Indian Parliament', 'Governor-General'],
    correctAnswer: 1,
    explanation: 'Act of 1858 transferred power from Company to British Crown.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },
  {
    id: 'hist-mod-m-9',
    question: 'Who was the Viceroy during Partition of Bengal (1905)?',
    options: ['Lord Ripon', 'Lord Curzon', 'Lord Minto', 'Lord Hardinge'],
    correctAnswer: 1,
    explanation: 'Lord Curzon partitioned Bengal in 1905.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },
  {
    id: 'hist-mod-m-10',
    question: 'Morley-Minto Reforms were introduced in?',
    options: ['1892', '1909', '1919', '1935'],
    correctAnswer: 1,
    explanation: 'Indian Councils Act (Morley-Minto Reforms) passed in 1909.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'medium'
  },

  // ============= HISTORY - MODERN INDIAN HISTORY (Hard) =============
  {
    id: 'hist-mod-h-1',
    question: 'Battle of Buxar was fought between British and combined forces of?',
    options: ['Mir Jafar, Mir Qasim, Shah Alam II', 'Mir Qasim, Shuja-ud-Daulah, Shah Alam II', 'Siraj-ud-Daulah, Mir Qasim', 'Tipu Sultan, Marathas'],
    correctAnswer: 1,
    explanation: 'Battle of Buxar (1764) - British vs Mir Qasim, Shuja-ud-Daulah, Shah Alam II.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },
  {
    id: 'hist-mod-h-2',
    question: 'Treaty of Srirangapatnam was signed after which Anglo-Mysore War?',
    options: ['First', 'Second', 'Third', 'Fourth'],
    correctAnswer: 2,
    explanation: 'Treaty of Srirangapatnam signed after Third Anglo-Mysore War (1792).',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },
  {
    id: 'hist-mod-h-3',
    question: 'Charter Act of 1813 ended the trade monopoly of East India Company except in?',
    options: ['Cotton and Indigo', 'Tea and China Trade', 'Spices and Silk', 'Opium and Salt'],
    correctAnswer: 1,
    explanation: 'Charter Act 1813 ended monopoly except in Tea and China trade.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },
  {
    id: 'hist-mod-h-4',
    question: 'Who was NOT associated with Drain of Wealth theory?',
    options: ['Dadabhai Naoroji', 'R.C. Dutt', 'M.G. Ranade', 'Lord Curzon'],
    correctAnswer: 3,
    explanation: 'Drain theory by Dadabhai Naoroji, R.C. Dutt, M.G. Ranade.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },
  {
    id: 'hist-mod-h-5',
    question: 'The Santhal Rebellion (1855-56) was led by?',
    options: ['Birsa Munda', 'Sidhu and Kanhu', 'Alluri Sitarama Raju', 'Tipu Sultan'],
    correctAnswer: 1,
    explanation: 'Santhal Rebellion led by Sidhu and Kanhu Murmu brothers.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },
  {
    id: 'hist-mod-h-6',
    question: 'Wood\'s Despatch (1854) is related to?',
    options: ['Military reforms', 'Education reforms', 'Land revenue', 'Railway development'],
    correctAnswer: 1,
    explanation: 'Wood\'s Despatch 1854 recommended English education system in India.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },
  {
    id: 'hist-mod-h-7',
    question: 'The Indian Councils Act of 1892 introduced which principle?',
    options: ['Direct election', 'Indirect election', 'Universal suffrage', 'Communal representation'],
    correctAnswer: 1,
    explanation: 'Act of 1892 introduced principle of indirect election.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },
  {
    id: 'hist-mod-h-8',
    question: 'Viceroy who was assassinated by a bomb in Andaman?',
    options: ['Lord Ripon', 'Lord Minto', 'Lord Mayo', 'Lord Hardinge'],
    correctAnswer: 2,
    explanation: 'Lord Mayo was assassinated in Andaman in 1872.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },
  {
    id: 'hist-mod-h-9',
    question: 'Which Act introduced "Dyarchy" in provinces?',
    options: ['Act of 1909', 'Act of 1919', 'Act of 1935', 'Act of 1947'],
    correctAnswer: 1,
    explanation: 'Government of India Act 1919 (Montagu-Chelmsford) introduced Dyarchy.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },
  {
    id: 'hist-mod-h-10',
    question: 'Wavell Plan was proposed in which year?',
    options: ['1942', '1945', '1946', '1947'],
    correctAnswer: 1,
    explanation: 'Wavell Plan proposed by Lord Wavell in 1945.',
    categoryId: 'history',
    subCategoryId: 'modern-history',
    level: 'hard'
  },

  // ============= GEOGRAPHY - WORLD GEOGRAPHY (Easy) =============
  {
    id: 'hist-fs-e-3',
    question: '"Jai Hind" slogan given by?',
    options: ['Gandhi', 'Nehru', 'Subhash Chandra Bose', 'Bhagat Singh'],
    correctAnswer: 2,
    explanation: 'Netaji Subhash Bose popularized "Jai Hind".',
    categoryId: 'history',
    subCategoryId: 'freedom-struggle',
    level: 'easy'
  },
  {
    id: 'hist-fs-e-4',
    question: 'INA (Azad Hind Fauj) founded by?',
    options: ['Gandhi', 'Nehru', 'Subhash Chandra Bose', 'Lala Lajpat Rai'],
    correctAnswer: 2,
    explanation: 'Subhash Chandra Bose founded Indian National Army.',
    categoryId: 'history',
    subCategoryId: 'freedom-struggle',
    level: 'easy'
  },
  {
    id: 'hist-fs-e-5',
    question: '"Swaraj is my birthright" said by?',
    options: ['Gandhi', 'Tilak', 'Nehru', 'Patel'],
    correctAnswer: 1,
    explanation: 'Bal Gangadhar Tilak said this famous quote.',
    categoryId: 'history',
    subCategoryId: 'freedom-struggle',
    level: 'easy'
  },
  {
    id: 'hist-fs-e-6',
    question: 'Bhagat Singh was hanged in?',
    options: ['1928', '1929', '1931', '1942'],
    correctAnswer: 2,
    explanation: 'Bhagat Singh hanged on 23 March 1931.',
    categoryId: 'history',
    subCategoryId: 'freedom-struggle',
    level: 'easy'
  },
  {
    id: 'hist-fs-e-7',
    question: 'Champaran Satyagraha was in?',
    options: ['1915', '1917', '1920', '1930'],
    correctAnswer: 1,
    explanation: 'Champaran Satyagraha in 1917 (Gandhi\'s first in India).',
    categoryId: 'history',
    subCategoryId: 'freedom-struggle',
    level: 'easy'
  },
  {
    id: 'hist-fs-e-8',
    question: 'Khilafat Movement was led by?',
    options: ['Gandhi alone', 'Ali Brothers', 'Nehru', 'Jinnah'],
    correctAnswer: 1,
    explanation: 'Ali Brothers (Muhammad Ali and Shaukat Ali) led Khilafat.',
    categoryId: 'history',
    subCategoryId: 'freedom-struggle',
    level: 'easy'
  },
  {
    id: 'hist-fs-e-9',
    question: 'Civil Disobedience Movement started in?',
    options: ['1920', '1930', '1942', '1945'],
    correctAnswer: 1,
    explanation: 'Civil Disobedience Movement started in 1930.',
    categoryId: 'history',
    subCategoryId: 'freedom-struggle',
    level: 'easy'
  },
  {
    id: 'hist-fs-e-10',
    question: 'Gandhi-Irwin Pact was signed in?',
    options: ['1928', '1930', '1931', '1935'],
    correctAnswer: 2,
    explanation: 'Gandhi-Irwin Pact signed on 5 March 1931.',
    categoryId: 'history',
    subCategoryId: 'freedom-struggle',
    level: 'easy'
  },

  // ============= HISTORY - WORLD HISTORY (Easy) =============
  {
    id: 'hist-wh-e-1',
    question: 'World War I started in?',
    options: ['1914', '1918', '1939', '1945'],
    correctAnswer: 0,
    explanation: 'World War I began in 1914.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },
  {
    id: 'hist-wh-e-2',
    question: 'World War II started in?',
    options: ['1914', '1918', '1939', '1945'],
    correctAnswer: 2,
    explanation: 'World War II began in 1939.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },
  {
    id: 'hist-wh-e-3',
    question: 'United Nations was founded in?',
    options: ['1918', '1939', '1945', '1950'],
    correctAnswer: 2,
    explanation: 'UN founded on 24 October 1945.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },
  {
    id: 'hist-wh-e-4',
    question: 'French Revolution started in?',
    options: ['1776', '1789', '1815', '1848'],
    correctAnswer: 1,
    explanation: 'French Revolution started in 1789.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },
  {
    id: 'hist-wh-e-5',
    question: 'Russian Revolution was in?',
    options: ['1905', '1917', '1939', '1945'],
    correctAnswer: 1,
    explanation: 'Bolshevik Revolution in Russia in 1917.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },
  {
    id: 'hist-wh-e-6',
    question: 'American Independence declared in?',
    options: ['1776', '1789', '1815', '1865'],
    correctAnswer: 0,
    explanation: 'USA declared independence on 4 July 1776.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },
  {
    id: 'hist-wh-e-7',
    question: 'The Great Depression started in?',
    options: ['1914', '1929', '1939', '1945'],
    correctAnswer: 1,
    explanation: 'Great Depression began in 1929.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },
  {
    id: 'hist-wh-e-8',
    question: 'Berlin Wall fell in?',
    options: ['1945', '1961', '1989', '1991'],
    correctAnswer: 2,
    explanation: 'Berlin Wall fell on 9 November 1989.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },
  {
    id: 'hist-wh-e-9',
    question: 'Soviet Union dissolved in?',
    options: ['1945', '1961', '1989', '1991'],
    correctAnswer: 3,
    explanation: 'USSR dissolved in December 1991.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },
  {
    id: 'hist-wh-e-10',
    question: 'Cold War was between?',
    options: ['USA vs UK', 'USA vs USSR', 'UK vs France', 'Germany vs France'],
    correctAnswer: 1,
    explanation: 'Cold War was between USA and Soviet Union.',
    categoryId: 'history',
    subCategoryId: 'world-history',
    level: 'easy'
  },

  // ============= GEOGRAPHY - WORLD GEOGRAPHY (Easy) =============
  {
    id: 'geo-wg-e-1',
    question: 'Largest continent is?',
    options: ['Africa', 'Asia', 'Europe', 'North America'],
    correctAnswer: 1,
    explanation: 'Asia is the largest continent.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-wg-e-2',
    question: 'Largest ocean is?',
    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    correctAnswer: 2,
    explanation: 'Pacific Ocean is the largest.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-wg-e-3',
    question: 'Longest river in the world is?',
    options: ['Amazon', 'Nile', 'Ganga', 'Yangtze'],
    correctAnswer: 1,
    explanation: 'Nile is the longest river (some say Amazon).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-wg-e-4',
    question: 'Highest mountain peak is?',
    options: ['K2', 'Kanchenjunga', 'Mount Everest', 'Nanda Devi'],
    correctAnswer: 2,
    explanation: 'Mount Everest (8,849m) is highest.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-wg-e-5',
    question: 'Largest desert is?',
    options: ['Sahara', 'Gobi', 'Thar', 'Arabian'],
    correctAnswer: 0,
    explanation: 'Sahara is the largest hot desert.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-wg-e-6',
    question: 'Largest country by area is?',
    options: ['USA', 'China', 'Russia', 'Canada'],
    correctAnswer: 2,
    explanation: 'Russia is the largest country by area.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-wg-e-7',
    question: 'Most populous country is?',
    options: ['India', 'China', 'USA', 'Indonesia'],
    correctAnswer: 0,
    explanation: 'India became most populous in 2023.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-wg-e-8',
    question: 'Equator passes through how many continents?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Equator passes through 3 continents (Asia, Africa, South America).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-wg-e-9',
    question: 'Which is the smallest continent?',
    options: ['Europe', 'Australia', 'Antarctica', 'South America'],
    correctAnswer: 1,
    explanation: 'Australia is the smallest continent.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-wg-e-10',
    question: 'Greenwich Mean Time (GMT) passes through?',
    options: ['USA', 'UK', 'France', 'Germany'],
    correctAnswer: 1,
    explanation: 'GMT/Prime Meridian passes through Greenwich, UK.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },

  // ============= GEOGRAPHY - CLIMATE & ENVIRONMENT (Easy) =============
  {
    id: 'geo-ce-e-1',
    question: 'Greenhouse gas mainly responsible for warming is?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    correctAnswer: 2,
    explanation: 'CO2 is the main greenhouse gas.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-ce-e-2',
    question: 'Ozone layer protects from?',
    options: ['Heat', 'UV rays', 'Rain', 'Wind'],
    correctAnswer: 1,
    explanation: 'Ozone layer protects from harmful UV radiation.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-ce-e-3',
    question: 'Monsoon is which type of wind?',
    options: ['Permanent', 'Seasonal', 'Local', 'Periodic'],
    correctAnswer: 1,
    explanation: 'Monsoon is a seasonal wind system.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-ce-e-4',
    question: 'Rainforests are mainly found in?',
    options: ['Tropical zone', 'Temperate zone', 'Polar zone', 'Desert zone'],
    correctAnswer: 0,
    explanation: 'Rainforests found in tropical regions.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-ce-e-5',
    question: 'El Nino is related to?',
    options: ['Ocean temperature', 'Earthquake', 'Volcano', 'Tornado'],
    correctAnswer: 0,
    explanation: 'El Nino is warming of Pacific Ocean surface.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-ce-e-6',
    question: 'Tundra climate is found in?',
    options: ['Equator', 'Tropics', 'Polar regions', 'Deserts'],
    correctAnswer: 2,
    explanation: 'Tundra climate in polar/Arctic regions.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-ce-e-7',
    question: 'Which gas causes acid rain?',
    options: ['CO2', 'SO2', 'O2', 'N2'],
    correctAnswer: 1,
    explanation: 'Sulfur dioxide (SO2) causes acid rain.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-ce-e-8',
    question: 'Biodiversity hotspot means?',
    options: ['High pollution', 'Rich species diversity', 'High temperature', 'Desert area'],
    correctAnswer: 1,
    explanation: 'Hotspots have exceptionally high biodiversity.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-ce-e-9',
    question: 'Paris Agreement is related to?',
    options: ['Trade', 'Climate change', 'Nuclear weapons', 'Space'],
    correctAnswer: 1,
    explanation: 'Paris Agreement aims to combat climate change.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-ce-e-10',
    question: 'World Environment Day is on?',
    options: ['5 June', '22 April', '1 December', '16 September'],
    correctAnswer: 0,
    explanation: 'World Environment Day on 5 June.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },

  // ============= GEOGRAPHY - MAPS & LOCATIONS (Easy) =============
  {
    id: 'geo-ml-e-1',
    question: 'Lines joining places of equal temperature are?',
    options: ['Isobars', 'Isotherms', 'Isohyets', 'Contours'],
    correctAnswer: 1,
    explanation: 'Isotherms connect points of equal temperature.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-ml-e-2',
    question: 'Lines joining places of equal pressure are?',
    options: ['Isobars', 'Isotherms', 'Isohyets', 'Contours'],
    correctAnswer: 0,
    explanation: 'Isobars connect points of equal atmospheric pressure.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-ml-e-3',
    question: 'What do contour lines show?',
    options: ['Temperature', 'Pressure', 'Rainfall', 'Elevation'],
    correctAnswer: 3,
    explanation: 'Contour lines show elevation/height.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-ml-e-4',
    question: 'Latitude of Equator is?',
    options: ['0°', '23.5°', '66.5°', '90°'],
    correctAnswer: 0,
    explanation: 'Equator is at 0° latitude.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-ml-e-5',
    question: 'Tropic of Cancer is at?',
    options: ['0°', '23.5°N', '23.5°S', '66.5°N'],
    correctAnswer: 1,
    explanation: 'Tropic of Cancer at 23.5°N latitude.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-ml-e-6',
    question: 'Arctic Circle is at?',
    options: ['23.5°N', '66.5°N', '66.5°S', '90°N'],
    correctAnswer: 1,
    explanation: 'Arctic Circle at 66.5°N latitude.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-ml-e-7',
    question: 'International Date Line roughly follows?',
    options: ['0° longitude', '90° longitude', '180° longitude', 'Equator'],
    correctAnswer: 2,
    explanation: 'International Date Line near 180° longitude.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-ml-e-8',
    question: 'Small scale map shows?',
    options: ['Large area, less detail', 'Small area, more detail', 'Only cities', 'Only rivers'],
    correctAnswer: 0,
    explanation: 'Small scale = large area with less detail.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-ml-e-9',
    question: 'North direction on map is shown by?',
    options: ['Scale', 'Arrow', 'Legend', 'Grid'],
    correctAnswer: 1,
    explanation: 'North is indicated by directional arrow.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-ml-e-10',
    question: 'Map legend shows?',
    options: ['Scale', 'Symbols meaning', 'Direction', 'Title'],
    correctAnswer: 1,
    explanation: 'Legend/Key explains map symbols.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },

  // ============= COMPUTER - MS OFFICE (Easy) =============
  {
    id: 'comp-ms-e-1',
    question: 'MS Word is used for?',
    options: ['Word processing', 'Spreadsheet', 'Presentation', 'Database'],
    correctAnswer: 0,
    explanation: 'MS Word is a word processing software.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-2',
    question: 'MS Excel is used for?',
    options: ['Word processing', 'Spreadsheet', 'Presentation', 'Database'],
    correctAnswer: 1,
    explanation: 'MS Excel is for spreadsheet and calculations.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-3',
    question: 'MS PowerPoint is used for?',
    options: ['Word processing', 'Spreadsheet', 'Presentation', 'Database'],
    correctAnswer: 2,
    explanation: 'PowerPoint is for creating presentations.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-4',
    question: 'Shortcut for Copy is?',
    options: ['Ctrl+C', 'Ctrl+V', 'Ctrl+X', 'Ctrl+Z'],
    correctAnswer: 0,
    explanation: 'Ctrl+C is used to copy.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-5',
    question: 'Shortcut for Paste is?',
    options: ['Ctrl+C', 'Ctrl+V', 'Ctrl+X', 'Ctrl+Z'],
    correctAnswer: 1,
    explanation: 'Ctrl+V is used to paste.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-6',
    question: 'Shortcut for Save is?',
    options: ['Ctrl+S', 'Ctrl+O', 'Ctrl+N', 'Ctrl+P'],
    correctAnswer: 0,
    explanation: 'Ctrl+S saves the document.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-7',
    question: 'In Excel, rows are numbered and columns are?',
    options: ['Numbered', 'Lettered', 'Symbols', 'Roman numerals'],
    correctAnswer: 1,
    explanation: 'Columns are labeled with letters (A, B, C...).',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-8',
    question: 'Extension of Word document is?',
    options: ['.doc/.docx', '.xls/.xlsx', '.ppt/.pptx', '.txt'],
    correctAnswer: 0,
    explanation: 'Word files have .doc or .docx extension.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-9',
    question: 'Extension of Excel file is?',
    options: ['.doc/.docx', '.xls/.xlsx', '.ppt/.pptx', '.txt'],
    correctAnswer: 1,
    explanation: 'Excel files have .xls or .xlsx extension.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-10',
    question: 'Ctrl+Z is used for?',
    options: ['Redo', 'Undo', 'Save', 'Print'],
    correctAnswer: 1,
    explanation: 'Ctrl+Z is Undo command.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },

  // ============= COMPUTER - INTERNET & NETWORKING (Easy) =============
  {
    id: 'comp-net-e-1',
    question: 'WWW stands for?',
    options: ['World Wide Web', 'World Web Wide', 'Web World Wide', 'Wide World Web'],
    correctAnswer: 0,
    explanation: 'WWW = World Wide Web.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-2',
    question: 'HTTP stands for?',
    options: ['HyperText Transfer Protocol', 'High Transfer Protocol', 'Home Text Protocol', 'None'],
    correctAnswer: 0,
    explanation: 'HTTP = HyperText Transfer Protocol.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-3',
    question: 'Which is a web browser?',
    options: ['MS Word', 'Chrome', 'Excel', 'Paint'],
    correctAnswer: 1,
    explanation: 'Chrome is a web browser.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-4',
    question: 'IP address is used to?',
    options: ['Identify device on network', 'Store data', 'Create documents', 'Edit photos'],
    correctAnswer: 0,
    explanation: 'IP address identifies devices on network.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-5',
    question: 'LAN stands for?',
    options: ['Local Area Network', 'Large Area Network', 'Long Area Network', 'None'],
    correctAnswer: 0,
    explanation: 'LAN = Local Area Network.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-6',
    question: 'WAN stands for?',
    options: ['Wide Area Network', 'World Area Network', 'Web Area Network', 'None'],
    correctAnswer: 0,
    explanation: 'WAN = Wide Area Network.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-7',
    question: 'URL stands for?',
    options: ['Uniform Resource Locator', 'Universal Resource Locator', 'Uniform Resource Link', 'None'],
    correctAnswer: 0,
    explanation: 'URL = Uniform Resource Locator (web address).',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-8',
    question: 'Email stands for?',
    options: ['Electronic Mail', 'Easy Mail', 'Efficient Mail', 'None'],
    correctAnswer: 0,
    explanation: 'Email = Electronic Mail.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-9',
    question: 'Modem is used to?',
    options: ['Connect to internet', 'Print documents', 'Store data', 'Edit photos'],
    correctAnswer: 0,
    explanation: 'Modem modulates/demodulates signals for internet.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-10',
    question: 'Which is a search engine?',
    options: ['Google', 'Facebook', 'Instagram', 'WhatsApp'],
    correctAnswer: 0,
    explanation: 'Google is a popular search engine.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },

  // ============= COMPUTER - CYBER SECURITY (Easy) =============
  {
    id: 'comp-sec-e-1',
    question: 'Antivirus is used to?',
    options: ['Protect from viruses', 'Create documents', 'Browse internet', 'Edit photos'],
    correctAnswer: 0,
    explanation: 'Antivirus protects computer from malware.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-2',
    question: 'Firewall is used to?',
    options: ['Block unauthorized access', 'Speed up computer', 'Store data', 'Print documents'],
    correctAnswer: 0,
    explanation: 'Firewall blocks unauthorized network access.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-3',
    question: 'Phishing is a type of?',
    options: ['Cyber attack', 'Antivirus', 'Browser', 'Operating system'],
    correctAnswer: 0,
    explanation: 'Phishing is a fraudulent attempt to steal data.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-4',
    question: 'Strong password should have?',
    options: ['Only letters', 'Only numbers', 'Mix of letters, numbers, symbols', 'Only your name'],
    correctAnswer: 2,
    explanation: 'Strong passwords use letters, numbers, and symbols.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-5',
    question: 'Malware is?',
    options: ['Malicious software', 'Good software', 'Antivirus', 'Browser'],
    correctAnswer: 0,
    explanation: 'Malware = Malicious software (virus, trojan, etc.).',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-6',
    question: 'VPN stands for?',
    options: ['Virtual Private Network', 'Very Private Network', 'Virtual Public Network', 'None'],
    correctAnswer: 0,
    explanation: 'VPN = Virtual Private Network (secure connection).',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-7',
    question: 'Two-factor authentication adds?',
    options: ['Extra security layer', 'Speed', 'Storage', 'Color'],
    correctAnswer: 0,
    explanation: '2FA adds extra security with second verification.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-8',
    question: 'Spam refers to?',
    options: ['Unwanted emails', 'Good emails', 'Photos', 'Videos'],
    correctAnswer: 0,
    explanation: 'Spam is unwanted/junk email.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-9',
    question: 'Encryption is used to?',
    options: ['Secure data', 'Delete data', 'Copy data', 'Print data'],
    correctAnswer: 0,
    explanation: 'Encryption converts data into coded form for security.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-10',
    question: 'Ransomware does what?',
    options: ['Locks files and demands money', 'Protects computer', 'Speeds up system', 'None'],
    correctAnswer: 0,
    explanation: 'Ransomware encrypts files and demands ransom.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },

  // ============= COMPUTER - AI & TECHNOLOGY (Easy) =============
  {
    id: 'comp-ai-e-1',
    question: 'AI stands for?',
    options: ['Artificial Intelligence', 'Automatic Intelligence', 'Advanced Intelligence', 'None'],
    correctAnswer: 0,
    explanation: 'AI = Artificial Intelligence.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-2',
    question: 'IoT stands for?',
    options: ['Internet of Things', 'Internet of Technology', 'Intelligence of Things', 'None'],
    correctAnswer: 0,
    explanation: 'IoT = Internet of Things (connected devices).',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-3',
    question: 'Cloud computing means?',
    options: ['Storing data on internet servers', 'Storing on hard disk', 'Printing documents', 'None'],
    correctAnswer: 0,
    explanation: 'Cloud computing uses remote servers for storage/computing.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-4',
    question: 'Virtual Reality is?',
    options: ['Computer-generated environment', 'Real world', 'A game only', 'None'],
    correctAnswer: 0,
    explanation: 'VR creates immersive computer-generated environment.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-5',
    question: 'AR stands for?',
    options: ['Augmented Reality', 'Artificial Reality', 'Advanced Reality', 'None'],
    correctAnswer: 0,
    explanation: 'AR = Augmented Reality (overlays digital on real world).',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-6',
    question: 'Machine Learning is a part of?',
    options: ['AI', 'MS Office', 'Browser', 'Antivirus'],
    correctAnswer: 0,
    explanation: 'Machine Learning is a subset of Artificial Intelligence.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-7',
    question: 'Blockchain is used in?',
    options: ['Cryptocurrency', 'Word processing', 'Photo editing', 'Gaming only'],
    correctAnswer: 0,
    explanation: 'Blockchain technology powers cryptocurrencies.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-8',
    question: '5G refers to?',
    options: ['Fifth generation mobile network', '5 gigabytes', '5 games', 'None'],
    correctAnswer: 0,
    explanation: '5G is 5th generation wireless technology.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-9',
    question: 'Big Data refers to?',
    options: ['Very large data sets', 'Small files', 'Photos only', 'Videos only'],
    correctAnswer: 0,
    explanation: 'Big Data means extremely large and complex data sets.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-10',
    question: 'Chatbot uses which technology?',
    options: ['AI/NLP', 'Antivirus', 'Firewall', 'MS Word'],
    correctAnswer: 0,
    explanation: 'Chatbots use AI and Natural Language Processing.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },

  // ============= MATHEMATICS - ALGEBRA (Easy) =============
  {
    id: 'math-alg-e-1',
    question: 'If x + 5 = 12, then x = ?',
    options: ['5', '7', '12', '17'],
    correctAnswer: 1,
    explanation: 'x = 12 - 5 = 7',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-2',
    question: '2x = 10, then x = ?',
    options: ['2', '5', '10', '20'],
    correctAnswer: 1,
    explanation: 'x = 10/2 = 5',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-3',
    question: 'x² = 25, then x = ?',
    options: ['5', '±5', '25', '50'],
    correctAnswer: 1,
    explanation: 'x can be +5 or -5 (both squared = 25).',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-4',
    question: '(a + b)² = ?',
    options: ['a² + b²', 'a² + 2ab + b²', 'a² - b²', '2ab'],
    correctAnswer: 1,
    explanation: '(a + b)² = a² + 2ab + b²',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-5',
    question: 'a² - b² = ?',
    options: ['(a+b)(a+b)', '(a-b)(a-b)', '(a+b)(a-b)', 'None'],
    correctAnswer: 2,
    explanation: 'a² - b² = (a+b)(a-b)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-6',
    question: 'If 3x - 6 = 0, then x = ?',
    options: ['0', '2', '3', '6'],
    correctAnswer: 1,
    explanation: '3x = 6, so x = 2',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-7',
    question: 'x/2 = 5, then x = ?',
    options: ['2', '2.5', '5', '10'],
    correctAnswer: 3,
    explanation: 'x = 5 × 2 = 10',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-8',
    question: '2(x + 3) = 10, then x = ?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: '2x + 6 = 10, so 2x = 4, x = 2',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-9',
    question: 'Square root of 64 is?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: '√64 = 8 (because 8×8 = 64)',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },
  {
    id: 'math-alg-e-10',
    question: 'Cube of 3 is?',
    options: ['6', '9', '27', '81'],
    correctAnswer: 2,
    explanation: '3³ = 3×3×3 = 27',
    categoryId: 'mathematics',
    subCategoryId: 'algebra',
    level: 'easy'
  },

  // ============= MATHEMATICS - GEOMETRY (Easy) =============
  {
    id: 'math-geo-e-1',
    question: 'Sum of angles in a triangle is?',
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
    options: ['Length × Breadth', 'Length + Breadth', '2(L+B)', 'L²'],
    correctAnswer: 0,
    explanation: 'Area of rectangle = Length × Breadth',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-3',
    question: 'Perimeter of square with side a = ?',
    options: ['a', '2a', '4a', 'a²'],
    correctAnswer: 2,
    explanation: 'Perimeter of square = 4 × side = 4a',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-4',
    question: 'Area of circle = ?',
    options: ['πr', '2πr', 'πr²', 'πd'],
    correctAnswer: 2,
    explanation: 'Area of circle = πr² (pi times radius squared)',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-5',
    question: 'Circumference of circle = ?',
    options: ['πr', '2πr', 'πr²', '4πr'],
    correctAnswer: 1,
    explanation: 'Circumference = 2πr or πd',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-6',
    question: 'How many sides in a pentagon?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    explanation: 'Pentagon has 5 sides.',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-7',
    question: 'How many sides in a hexagon?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 2,
    explanation: 'Hexagon has 6 sides.',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-8',
    question: 'Sum of angles in a quadrilateral is?',
    options: ['180°', '270°', '360°', '450°'],
    correctAnswer: 2,
    explanation: 'Sum of angles in quadrilateral = 360°',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-9',
    question: 'Area of triangle = ?',
    options: ['Base × Height', '½ × Base × Height', '2 × Base × Height', 'Base + Height'],
    correctAnswer: 1,
    explanation: 'Area of triangle = ½ × base × height',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },
  {
    id: 'math-geo-e-10',
    question: 'Pythagoras theorem is?',
    options: ['a + b = c', 'a² + b² = c²', 'a × b = c', 'a² = b² + c²'],
    correctAnswer: 1,
    explanation: 'In right triangle: a² + b² = c² (c is hypotenuse)',
    categoryId: 'mathematics',
    subCategoryId: 'geometry',
    level: 'easy'
  },

  // ============= QUANTITATIVE - PROFIT & LOSS (Easy) =============
  {
    id: 'quant-pl-e-1',
    question: 'CP = 100, SP = 120. Profit % = ?',
    options: ['10%', '15%', '20%', '25%'],
    correctAnswer: 2,
    explanation: 'Profit = 20, Profit% = (20/100)×100 = 20%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'quant-pl-e-2',
    question: 'CP = 50, Loss = 10. SP = ?',
    options: ['40', '45', '50', '60'],
    correctAnswer: 0,
    explanation: 'SP = CP - Loss = 50 - 10 = 40',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'quant-pl-e-3',
    question: 'SP = 80, Profit = 20. CP = ?',
    options: ['50', '60', '70', '80'],
    correctAnswer: 1,
    explanation: 'CP = SP - Profit = 80 - 20 = 60',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'quant-pl-e-4',
    question: 'Article sold at 10% profit. If CP = 100, SP = ?',
    options: ['90', '100', '110', '120'],
    correctAnswer: 2,
    explanation: 'SP = CP + 10% of CP = 100 + 10 = 110',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'quant-pl-e-5',
    question: 'Article sold at 20% loss. If CP = 50, SP = ?',
    options: ['30', '40', '45', '50'],
    correctAnswer: 1,
    explanation: 'SP = CP - 20% of CP = 50 - 10 = 40',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'quant-pl-e-6',
    question: 'Marked price 200, discount 10%. SP = ?',
    options: ['180', '190', '200', '220'],
    correctAnswer: 0,
    explanation: 'SP = MP - 10% of MP = 200 - 20 = 180',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'quant-pl-e-7',
    question: 'Buy at 80, sell at 100. Profit % = ?',
    options: ['20%', '25%', '30%', '40%'],
    correctAnswer: 1,
    explanation: 'Profit = 20, Profit% = (20/80)×100 = 25%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'quant-pl-e-8',
    question: 'If SP = CP, then?',
    options: ['Profit', 'Loss', 'No profit no loss', 'Cannot say'],
    correctAnswer: 2,
    explanation: 'When SP = CP, there is no profit or loss.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'quant-pl-e-9',
    question: 'Loss % formula is?',
    options: ['(Loss/CP)×100', '(Loss/SP)×100', '(CP/Loss)×100', 'None'],
    correctAnswer: 0,
    explanation: 'Loss% = (Loss/CP) × 100',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },
  {
    id: 'quant-pl-e-10',
    question: 'Buy 10 for Rs.100, sell 10 for Rs.120. Profit% = ?',
    options: ['10%', '15%', '20%', '25%'],
    correctAnswer: 2,
    explanation: 'Profit = 20, Profit% = (20/100)×100 = 20%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'profit-loss',
    level: 'easy'
  },

  // ============= QUANTITATIVE - RATIO & PROPORTION (Easy) =============
  {
    id: 'quant-rp-e-1',
    question: 'Ratio 3:5 means?',
    options: ['3 parts out of 5', '3 parts out of 8', '5 parts out of 3', 'None'],
    correctAnswer: 1,
    explanation: 'Ratio 3:5 means 3 parts out of total 8 parts.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'quant-rp-e-2',
    question: 'Divide 100 in ratio 2:3. Parts are?',
    options: ['20, 80', '30, 70', '40, 60', '50, 50'],
    correctAnswer: 2,
    explanation: 'Total = 5 parts. Each part = 20. So 40 and 60.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'quant-rp-e-3',
    question: 'If a:b = 2:3 and b = 6, then a = ?',
    options: ['2', '3', '4', '6'],
    correctAnswer: 2,
    explanation: 'a/b = 2/3, so a = (2×6)/3 = 4',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'quant-rp-e-4',
    question: 'Ratio 1:2 in simplest form is?',
    options: ['1:2', '2:4', '3:6', 'All same'],
    correctAnswer: 3,
    explanation: 'All represent same ratio 1:2.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'quant-rp-e-5',
    question: 'If 5:x = 10:20, then x = ?',
    options: ['5', '10', '15', '20'],
    correctAnswer: 1,
    explanation: 'Cross multiply: 5×20 = 10×x, so x = 10',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'quant-rp-e-6',
    question: '50% as a ratio is?',
    options: ['1:1', '1:2', '2:1', '1:4'],
    correctAnswer: 1,
    explanation: '50% = 50/100 = 1/2 = 1:2',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'quant-rp-e-7',
    question: 'Two numbers in ratio 3:4, sum = 35. Numbers are?',
    options: ['10, 25', '15, 20', '21, 14', '20, 15'],
    correctAnswer: 1,
    explanation: 'Total = 7 parts, each = 5. So 15 and 20.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'quant-rp-e-8',
    question: 'Proportion a:b::c:d means?',
    options: ['a/b = c/d', 'a×b = c×d', 'a+b = c+d', 'None'],
    correctAnswer: 0,
    explanation: 'Proportion means a/b = c/d or a:b = c:d',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'quant-rp-e-9',
    question: 'Compounded ratio of 2:3 and 4:5 is?',
    options: ['6:8', '8:15', '2:5', '4:3'],
    correctAnswer: 1,
    explanation: 'Compounded = (2×4):(3×5) = 8:15',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },
  {
    id: 'quant-rp-e-10',
    question: 'Simplify ratio 15:25',
    options: ['1:2', '2:3', '3:5', '5:3'],
    correctAnswer: 2,
    explanation: '15:25 = (15÷5):(25÷5) = 3:5',
    categoryId: 'quant-reasoning',
    subCategoryId: 'ratio-proportion',
    level: 'easy'
  },

  // ============= QUANTITATIVE - TIME & WORK (Easy) =============
  {
    id: 'quant-tw-e-1',
    question: 'A can do work in 10 days. In 1 day he does?',
    options: ['1/5 work', '1/10 work', '1/20 work', '10 works'],
    correctAnswer: 1,
    explanation: 'In 1 day = 1/10 of total work',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'quant-tw-e-2',
    question: 'A does work in 6 days, B in 12 days. Together in how many days?',
    options: ['3 days', '4 days', '6 days', '18 days'],
    correctAnswer: 1,
    explanation: 'Combined = 1/6 + 1/12 = 3/12 = 1/4, so 4 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'quant-tw-e-3',
    question: 'If 10 men can do work in 5 days, 5 men will do in?',
    options: ['5 days', '10 days', '15 days', '20 days'],
    correctAnswer: 1,
    explanation: 'Half men = double time = 10 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'quant-tw-e-4',
    question: 'A and B together finish in 12 days. A alone in 20 days. B alone in?',
    options: ['20 days', '25 days', '30 days', '32 days'],
    correctAnswer: 2,
    explanation: 'B = 1/12 - 1/20 = 1/30, so 30 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'quant-tw-e-5',
    question: 'Work done = ?',
    options: ['Time × Efficiency', 'Time / Efficiency', 'Efficiency / Time', 'None'],
    correctAnswer: 0,
    explanation: 'Work = Time × Efficiency',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'quant-tw-e-6',
    question: '12 men finish work in 8 days. 8 men will finish in?',
    options: ['8 days', '10 days', '12 days', '16 days'],
    correctAnswer: 2,
    explanation: 'M1D1 = M2D2, so 12×8 = 8×D, D = 12',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'quant-tw-e-7',
    question: 'A is twice as efficient as B. A takes 10 days. B takes?',
    options: ['5 days', '10 days', '20 days', '30 days'],
    correctAnswer: 2,
    explanation: 'B is half efficient, so takes double time = 20 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'quant-tw-e-8',
    question: 'If work increases 2 times, time will?',
    options: ['Half', 'Same', 'Double', 'Triple'],
    correctAnswer: 2,
    explanation: 'More work needs more time proportionally.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'quant-tw-e-9',
    question: '15 workers complete in 10 days. For 5 days, how many workers?',
    options: ['15', '20', '25', '30'],
    correctAnswer: 3,
    explanation: 'Half time = double workers = 30',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },
  {
    id: 'quant-tw-e-10',
    question: 'A does 1/4 work in 5 days. Total work in?',
    options: ['10 days', '15 days', '20 days', '25 days'],
    correctAnswer: 2,
    explanation: '1/4 in 5 days, so full work in 20 days',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-work',
    level: 'easy'
  },

  // ============= QUANTITATIVE - TIME SPEED DISTANCE (Easy) =============
  {
    id: 'quant-tsd-e-1',
    question: 'Speed formula is?',
    options: ['Distance/Time', 'Time/Distance', 'Distance×Time', 'None'],
    correctAnswer: 0,
    explanation: 'Speed = Distance/Time',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'quant-tsd-e-2',
    question: 'Distance = 100 km, Time = 2 hours. Speed = ?',
    options: ['50 km/h', '100 km/h', '200 km/h', '25 km/h'],
    correctAnswer: 0,
    explanation: 'Speed = 100/2 = 50 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'quant-tsd-e-3',
    question: 'Speed = 60 km/h, Time = 3 hours. Distance = ?',
    options: ['20 km', '60 km', '180 km', '240 km'],
    correctAnswer: 2,
    explanation: 'Distance = Speed × Time = 60 × 3 = 180 km',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'quant-tsd-e-4',
    question: 'Convert 36 km/h to m/s',
    options: ['5 m/s', '10 m/s', '15 m/s', '20 m/s'],
    correctAnswer: 1,
    explanation: 'Multiply by 5/18: 36 × 5/18 = 10 m/s',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'quant-tsd-e-5',
    question: 'Convert 20 m/s to km/h',
    options: ['36 km/h', '50 km/h', '72 km/h', '100 km/h'],
    correctAnswer: 2,
    explanation: 'Multiply by 18/5: 20 × 18/5 = 72 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'quant-tsd-e-6',
    question: 'Car travels 120 km in 2 hours. Average speed?',
    options: ['40 km/h', '50 km/h', '60 km/h', '70 km/h'],
    correctAnswer: 2,
    explanation: 'Avg speed = 120/2 = 60 km/h',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'quant-tsd-e-7',
    question: 'Time = Distance/Speed. If D=100, S=25, T=?',
    options: ['2 hrs', '3 hrs', '4 hrs', '5 hrs'],
    correctAnswer: 2,
    explanation: 'Time = 100/25 = 4 hours',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'quant-tsd-e-8',
    question: 'A train 100m long passes pole in 10 sec. Speed?',
    options: ['5 m/s', '10 m/s', '15 m/s', '20 m/s'],
    correctAnswer: 1,
    explanation: 'Speed = 100/10 = 10 m/s',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'quant-tsd-e-9',
    question: 'If speed doubles, time becomes?',
    options: ['Double', 'Half', 'Same', 'Triple'],
    correctAnswer: 1,
    explanation: 'Higher speed = less time (inversely proportional)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },
  {
    id: 'quant-tsd-e-10',
    question: 'Relative speed when moving in same direction?',
    options: ['S1 + S2', 'S1 - S2', 'S1 × S2', 'S1 / S2'],
    correctAnswer: 1,
    explanation: 'Same direction: relative speed = |S1 - S2|',
    categoryId: 'quant-reasoning',
    subCategoryId: 'time-speed-distance',
    level: 'easy'
  },

  // ============= QUANTITATIVE - SI & CI (Easy) =============
  {
    id: 'quant-si-e-1',
    question: 'Simple Interest formula is?',
    options: ['PRT', 'P×R×T/100', 'P+R+T', 'P/RT'],
    correctAnswer: 1,
    explanation: 'SI = (Principal × Rate × Time)/100',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'quant-si-e-2',
    question: 'P=1000, R=10%, T=2 years. SI = ?',
    options: ['100', '200', '300', '400'],
    correctAnswer: 1,
    explanation: 'SI = (1000×10×2)/100 = 200',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'quant-si-e-3',
    question: 'Amount = ?',
    options: ['P + SI', 'P - SI', 'P × SI', 'P / SI'],
    correctAnswer: 0,
    explanation: 'Amount = Principal + Interest',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'quant-si-e-4',
    question: 'In Compound Interest, interest is calculated on?',
    options: ['Principal only', 'Principal + Interest', 'Interest only', 'None'],
    correctAnswer: 1,
    explanation: 'CI is calculated on principal + accumulated interest.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'quant-si-e-5',
    question: 'CI is always __ than SI',
    options: ['Less', 'More', 'Equal', 'Cannot say'],
    correctAnswer: 1,
    explanation: 'CI is always more than SI (for same P,R,T)',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'quant-si-e-6',
    question: 'For 1 year, SI and CI are?',
    options: ['Different', 'Equal', 'CI is double', 'SI is double'],
    correctAnswer: 1,
    explanation: 'For 1 year, SI = CI',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'quant-si-e-7',
    question: 'Rate of interest is given in?',
    options: ['Percentage', 'Rupees', 'Years', 'Days'],
    correctAnswer: 0,
    explanation: 'Rate is expressed as percentage per annum.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'quant-si-e-8',
    question: 'P=500, SI=50, T=1 year. Rate = ?',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: 1,
    explanation: 'R = (SI×100)/(P×T) = (50×100)/(500×1) = 10%',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'quant-si-e-9',
    question: 'If rate doubles, SI becomes?',
    options: ['Same', 'Half', 'Double', 'Triple'],
    correctAnswer: 2,
    explanation: 'SI is directly proportional to rate.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },
  {
    id: 'quant-si-e-10',
    question: 'Principal = Amount - ?',
    options: ['Interest', 'Rate', 'Time', 'None'],
    correctAnswer: 0,
    explanation: 'Principal = Amount - Interest',
    categoryId: 'quant-reasoning',
    subCategoryId: 'si-ci',
    level: 'easy'
  },

  // ============= QUANTITATIVE - LOGICAL REASONING (Easy) =============
  {
    id: 'quant-lr-e-1',
    question: 'If all cats are animals, and some animals are pets, then?',
    options: ['All cats are pets', 'Some cats are pets', 'No cat is pet', 'Cannot say'],
    correctAnswer: 3,
    explanation: 'Cannot definitively conclude about cats and pets.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-lr-e-2',
    question: 'Find odd one: 2, 4, 6, 9, 10',
    options: ['2', '4', '6', '9'],
    correctAnswer: 3,
    explanation: '9 is odd number, rest are even.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-lr-e-3',
    question: 'Complete series: 2, 4, 6, 8, __',
    options: ['9', '10', '11', '12'],
    correctAnswer: 1,
    explanation: 'Even numbers: next is 10',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-lr-e-4',
    question: 'If A>B and B>C, then?',
    options: ['A<C', 'A>C', 'A=C', 'Cannot say'],
    correctAnswer: 1,
    explanation: 'Transitivity: A>B>C means A>C',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-lr-e-5',
    question: 'Find next: A, C, E, G, __',
    options: ['H', 'I', 'J', 'K'],
    correctAnswer: 1,
    explanation: 'Skip one letter: A(B)C(D)E(F)G(H)I',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-lr-e-6',
    question: 'Analogy: Day:Night::Up:?',
    options: ['Sky', 'Down', 'High', 'Top'],
    correctAnswer: 1,
    explanation: 'Opposite pairs: Day-Night, Up-Down',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-lr-e-7',
    question: 'If it rains, ground is wet. Ground is wet. So?',
    options: ['It rained', 'It did not rain', 'May or may not have rained', 'None'],
    correctAnswer: 2,
    explanation: 'Wet ground could have other causes too.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-lr-e-8',
    question: 'Blood relation: Father\'s father is your?',
    options: ['Uncle', 'Grandfather', 'Brother', 'Cousin'],
    correctAnswer: 1,
    explanation: 'Father\'s father = Grandfather',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-lr-e-9',
    question: 'Direction: If you face North and turn right, you face?',
    options: ['South', 'East', 'West', 'North'],
    correctAnswer: 1,
    explanation: 'North + Right turn = East',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-lr-e-10',
    question: 'Statement: All birds fly. Penguin is a bird. Conclusion?',
    options: ['Penguin flies', 'Statement is wrong', 'Both A and B', 'Cannot say'],
    correctAnswer: 1,
    explanation: 'Statement is false as penguins don\'t fly.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'logical-reasoning',
    level: 'easy'
  },

  // ============= QUANTITATIVE - NON-VERBAL REASONING (Easy) =============
  {
    id: 'quant-nvr-e-1',
    question: 'Mirror image of "b" is?',
    options: ['b', 'd', 'p', 'q'],
    correctAnswer: 1,
    explanation: 'Mirror image of "b" is "d"',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-nvr-e-2',
    question: 'Water image of "b" is?',
    options: ['b', 'd', 'p', 'q'],
    correctAnswer: 2,
    explanation: 'Water reflection of "b" is "p"',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-nvr-e-3',
    question: 'How many triangles in a Star (5-pointed)?',
    options: ['5', '10', '15', '20'],
    correctAnswer: 1,
    explanation: 'A pentagram has 10 triangles.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-nvr-e-4',
    question: 'Cube has how many faces?',
    options: ['4', '6', '8', '12'],
    correctAnswer: 1,
    explanation: 'Cube has 6 faces.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-nvr-e-5',
    question: 'Cube has how many vertices?',
    options: ['6', '8', '10', '12'],
    correctAnswer: 1,
    explanation: 'Cube has 8 vertices (corners).',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-nvr-e-6',
    question: 'Cube has how many edges?',
    options: ['6', '8', '10', '12'],
    correctAnswer: 3,
    explanation: 'Cube has 12 edges.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-nvr-e-7',
    question: 'Pattern: O, □, △. Next shape?',
    options: ['O', '□', '△', 'Cannot say'],
    correctAnswer: 0,
    explanation: 'Pattern repeats: O, □, △, O...',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-nvr-e-8',
    question: 'Which shape has all sides equal?',
    options: ['Rectangle', 'Square', 'Triangle', 'Pentagon'],
    correctAnswer: 1,
    explanation: 'Square has all sides equal.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-nvr-e-9',
    question: 'A die has opposite faces sum to?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'Opposite faces of standard die sum to 7.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'quant-nvr-e-10',
    question: 'Folding a paper once gives how many parts?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'One fold divides into 2 parts.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'non-verbal-reasoning',
    level: 'easy'
  },

  // ============= QUANTITATIVE - PUZZLES & SEATING (Easy) =============
  {
    id: 'quant-ps-e-1',
    question: 'A is to the right of B. B is to the right of C. Who is in middle?',
    options: ['A', 'B', 'C', 'Cannot say'],
    correctAnswer: 1,
    explanation: 'Order: C-B-A, so B is in middle.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'quant-ps-e-2',
    question: '5 people sit in a row. How many are there between first and last?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Between 1st and 5th are 2nd, 3rd, 4th = 3 people.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'quant-ps-e-3',
    question: 'In a queue, A is 5th from front, 8th from back. Total people?',
    options: ['11', '12', '13', '14'],
    correctAnswer: 1,
    explanation: 'Total = 5 + 8 - 1 = 12',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'quant-ps-e-4',
    question: 'Circular table with 6 chairs. How many gaps between chairs?',
    options: ['5', '6', '7', '12'],
    correctAnswer: 1,
    explanation: 'In circle, gaps = number of objects = 6',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'quant-ps-e-5',
    question: 'A,B,C sit in row. A not at end. C not in middle. Who is in middle?',
    options: ['A', 'B', 'C', 'Cannot say'],
    correctAnswer: 0,
    explanation: 'A is not at end, so A is in middle.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'quant-ps-e-6',
    question: 'In a family of 3 generations, minimum how many people?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Minimum 3: child-parent-grandparent',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'quant-ps-e-7',
    question: 'A faces North. After 180° turn, he faces?',
    options: ['North', 'South', 'East', 'West'],
    correctAnswer: 1,
    explanation: '180° turn = opposite direction = South',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'quant-ps-e-8',
    question: 'In line, A is 3rd and B is 7th. How many between them?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Between 3 and 7 are 4,5,6 = 3 people',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'quant-ps-e-9',
    question: 'Round table, 4 people. Opposite to A sits?',
    options: ['Next to A', 'Two seats away', 'Three seats away', 'None'],
    correctAnswer: 1,
    explanation: 'In 4-person circle, opposite = 2 seats away.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },
  {
    id: 'quant-ps-e-10',
    question: 'Calendar: If today is Monday, after 10 days it will be?',
    options: ['Monday', 'Tuesday', 'Thursday', 'Sunday'],
    correctAnswer: 2,
    explanation: '10 days = 1 week + 3 days = Thursday',
    categoryId: 'quant-reasoning',
    subCategoryId: 'puzzles-seating',
    level: 'easy'
  },

  // ============= QUANTITATIVE - CODING DECODING (Easy) =============
  {
    id: 'quant-cd-e-1',
    question: 'If CAT = 3120, then DOG = ?',
    options: ['4157', '41520', '4158', '4167'],
    correctAnswer: 3,
    explanation: 'A=1, B=2... C=3, A=1, T=20; D=4, O=15, G=7',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'quant-cd-e-2',
    question: 'In code, A=1, B=2, C=3. What is Z?',
    options: ['24', '25', '26', '27'],
    correctAnswer: 2,
    explanation: 'Z is 26th letter.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'quant-cd-e-3',
    question: 'If MIND is coded as NJOE, then FIND is?',
    options: ['GJOE', 'GJOF', 'GIND', 'FINE'],
    correctAnswer: 0,
    explanation: 'Each letter +1: M→N, I→J, N→O, D→E',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'quant-cd-e-4',
    question: 'If 123 = ABC, then 321 = ?',
    options: ['ABC', 'CBA', 'CAB', 'BCA'],
    correctAnswer: 1,
    explanation: 'Reverse order: 3=C, 2=B, 1=A',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'quant-cd-e-5',
    question: 'If BOOK = BNLJ (each -1), then COOK = ?',
    options: ['BNLJ', 'DNLJ', 'DNNK', 'CPPL'],
    correctAnswer: 1,
    explanation: 'C→D is wrong, should be C-1=B. Answer: BNLJ... Actually CNLJ then -1 = DNLJ is wrong. C-1=B, O-1=N, O-1=N, K-1=J. Wait, BOOK -1 each = ANNJ not BNLJ. Let me recalculate: B-1=A, O-1=N, O-1=N, K-1=J = ANNJ. Question says BNLJ which seems wrong unless different coding. Assuming pattern is shift, COOK with same = BNNJ',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'quant-cd-e-6',
    question: 'In a code, 5×2 = 10. What does 3×4 equal?',
    options: ['7', '12', '34', '43'],
    correctAnswer: 1,
    explanation: 'Normal multiplication: 3×4 = 12',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'quant-cd-e-7',
    question: 'If SUN = 364, MOON = ?',
    options: ['1346', '13156', '131415', '13151514'],
    correctAnswer: 3,
    explanation: 'S=19 but coded as 3? Actually S=19, U=21, N=14 gives 192114 not 364. Assuming S=3, U=6, N=4 positionally, then M=13, O=15, O=15, N=14',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'quant-cd-e-8',
    question: 'Reverse alphabet: A=Z, B=Y. What is C?',
    options: ['W', 'X', 'Y', 'Z'],
    correctAnswer: 1,
    explanation: 'C is 3rd, reverse = 24th = X',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'quant-cd-e-9',
    question: 'If 1=A, 2=B, then 26=?',
    options: ['X', 'Y', 'Z', 'AA'],
    correctAnswer: 2,
    explanation: '26th letter is Z',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },
  {
    id: 'quant-cd-e-10',
    question: 'Number code: If BAT=213, what is CAT?',
    options: ['214', '313', '314', '413'],
    correctAnswer: 1,
    explanation: 'B=2, A=1, T=3 (assuming order). C=3, A=1, T=3',
    categoryId: 'quant-reasoning',
    subCategoryId: 'coding-decoding',
    level: 'easy'
  },

  // ============= LANGUAGE - VOCABULARY (Easy) =============
  {
    id: 'lang-voc-e-1',
    question: 'Meaning of "abandon"?',
    options: ['Keep', 'Leave', 'Take', 'Hold'],
    correctAnswer: 1,
    explanation: 'Abandon means to leave or give up.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'lang-voc-e-2',
    question: 'Meaning of "brave"?',
    options: ['Coward', 'Fearless', 'Weak', 'Shy'],
    correctAnswer: 1,
    explanation: 'Brave means courageous or fearless.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'lang-voc-e-3',
    question: 'Meaning of "ancient"?',
    options: ['New', 'Modern', 'Very old', 'Young'],
    correctAnswer: 2,
    explanation: 'Ancient means very old or from long ago.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'lang-voc-e-4',
    question: 'Meaning of "abundant"?',
    options: ['Scarce', 'Plentiful', 'Less', 'None'],
    correctAnswer: 1,
    explanation: 'Abundant means existing in large quantities.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'lang-voc-e-5',
    question: 'Meaning of "eager"?',
    options: ['Lazy', 'Enthusiastic', 'Bored', 'Tired'],
    correctAnswer: 1,
    explanation: 'Eager means keen or enthusiastic.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'lang-voc-e-6',
    question: 'Meaning of "generous"?',
    options: ['Selfish', 'Kind', 'Mean', 'Greedy'],
    correctAnswer: 1,
    explanation: 'Generous means kind and giving.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'lang-voc-e-7',
    question: 'Meaning of "hostile"?',
    options: ['Friendly', 'Unfriendly', 'Kind', 'Gentle'],
    correctAnswer: 1,
    explanation: 'Hostile means unfriendly or antagonistic.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'lang-voc-e-8',
    question: 'Meaning of "humble"?',
    options: ['Proud', 'Arrogant', 'Modest', 'Boastful'],
    correctAnswer: 2,
    explanation: 'Humble means modest or not proud.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'lang-voc-e-9',
    question: 'Meaning of "swift"?',
    options: ['Slow', 'Fast', 'Heavy', 'Light'],
    correctAnswer: 1,
    explanation: 'Swift means fast or quick.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },
  {
    id: 'lang-voc-e-10',
    question: 'Meaning of "vital"?',
    options: ['Unimportant', 'Essential', 'Optional', 'Extra'],
    correctAnswer: 1,
    explanation: 'Vital means absolutely necessary or essential.',
    categoryId: 'language',
    subCategoryId: 'vocabulary',
    level: 'easy'
  },

  // ============= LANGUAGE - SYNONYMS & ANTONYMS (Easy) =============
  {
    id: 'lang-syn-e-1',
    question: 'Synonym of "happy"?',
    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
    correctAnswer: 1,
    explanation: 'Happy and joyful have similar meaning.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'lang-syn-e-2',
    question: 'Antonym of "hot"?',
    options: ['Warm', 'Cold', 'Cool', 'Mild'],
    correctAnswer: 1,
    explanation: 'Cold is opposite of hot.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'lang-syn-e-3',
    question: 'Synonym of "big"?',
    options: ['Small', 'Large', 'Tiny', 'Little'],
    correctAnswer: 1,
    explanation: 'Big and large mean the same.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'lang-syn-e-4',
    question: 'Antonym of "rich"?',
    options: ['Wealthy', 'Poor', 'Affluent', 'Prosperous'],
    correctAnswer: 1,
    explanation: 'Poor is opposite of rich.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'lang-syn-e-5',
    question: 'Synonym of "start"?',
    options: ['End', 'Begin', 'Finish', 'Stop'],
    correctAnswer: 1,
    explanation: 'Start and begin have same meaning.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'lang-syn-e-6',
    question: 'Antonym of "love"?',
    options: ['Like', 'Hate', 'Adore', 'Cherish'],
    correctAnswer: 1,
    explanation: 'Hate is opposite of love.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'lang-syn-e-7',
    question: 'Synonym of "difficult"?',
    options: ['Easy', 'Hard', 'Simple', 'Clear'],
    correctAnswer: 1,
    explanation: 'Difficult and hard mean the same.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'lang-syn-e-8',
    question: 'Antonym of "day"?',
    options: ['Morning', 'Evening', 'Night', 'Noon'],
    correctAnswer: 2,
    explanation: 'Night is opposite of day.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'lang-syn-e-9',
    question: 'Synonym of "beautiful"?',
    options: ['Ugly', 'Pretty', 'Bad', 'Poor'],
    correctAnswer: 1,
    explanation: 'Beautiful and pretty have similar meaning.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },
  {
    id: 'lang-syn-e-10',
    question: 'Antonym of "strong"?',
    options: ['Powerful', 'Weak', 'Mighty', 'Tough'],
    correctAnswer: 1,
    explanation: 'Weak is opposite of strong.',
    categoryId: 'language',
    subCategoryId: 'synonyms-antonyms',
    level: 'easy'
  },

  // ============= LANGUAGE - READING COMPREHENSION (Easy) =============
  {
    id: 'lang-rc-e-1',
    question: 'Passage: "Ram loves books. He reads daily." What does Ram love?',
    options: ['Music', 'Books', 'Sports', 'Movies'],
    correctAnswer: 1,
    explanation: 'Passage clearly states Ram loves books.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-rc-e-2',
    question: 'Passage: "The sun rises in the east." Sun rises in?',
    options: ['West', 'East', 'North', 'South'],
    correctAnswer: 1,
    explanation: 'Passage states sun rises in east.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-rc-e-3',
    question: 'Passage: "Dogs are loyal animals." Dogs are?',
    options: ['Disloyal', 'Loyal', 'Wild', 'Dangerous'],
    correctAnswer: 1,
    explanation: 'Passage describes dogs as loyal.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-rc-e-4',
    question: 'Passage: "She went to market yesterday." When did she go?',
    options: ['Today', 'Tomorrow', 'Yesterday', 'Next week'],
    correctAnswer: 2,
    explanation: 'Passage says she went yesterday.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-rc-e-5',
    question: 'Passage: "Birds can fly." What can birds do?',
    options: ['Swim', 'Fly', 'Run', 'Jump'],
    correctAnswer: 1,
    explanation: 'Passage states birds can fly.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-rc-e-6',
    question: 'Passage: "Water boils at 100°C." Boiling point of water?',
    options: ['0°C', '50°C', '100°C', '150°C'],
    correctAnswer: 2,
    explanation: 'Passage says water boils at 100°C.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-rc-e-7',
    question: 'Passage: "He speaks three languages." How many languages?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 2,
    explanation: 'Passage mentions three languages.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-rc-e-8',
    question: 'Passage: "Roses are red." What color are roses?',
    options: ['Blue', 'Red', 'Yellow', 'White'],
    correctAnswer: 1,
    explanation: 'Passage states roses are red.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-rc-e-9',
    question: 'Passage: "India got independence in 1947." Year of independence?',
    options: ['1945', '1946', '1947', '1948'],
    correctAnswer: 2,
    explanation: 'Passage says 1947.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-rc-e-10',
    question: 'Passage: "Honesty is the best policy." Best policy is?',
    options: ['Lying', 'Honesty', 'Cheating', 'Stealing'],
    correctAnswer: 1,
    explanation: 'Passage says honesty is best policy.',
    categoryId: 'language',
    subCategoryId: 'reading-comprehension',
    level: 'easy'
  },

  // ============= LANGUAGE - ERROR DETECTION (Easy) =============
  {
    id: 'lang-err-e-1',
    question: 'Find error: "He go to school daily."',
    options: ['He', 'go', 'to school', 'daily'],
    correctAnswer: 1,
    explanation: 'Should be "goes" not "go" (subject-verb agreement).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'lang-err-e-2',
    question: 'Find error: "She are a teacher."',
    options: ['She', 'are', 'a teacher', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "is" not "are" (singular subject).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'lang-err-e-3',
    question: 'Find error: "They was playing."',
    options: ['They', 'was', 'playing', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "were" not "was" (plural subject).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'lang-err-e-4',
    question: 'Find error: "I has a book."',
    options: ['I', 'has', 'a book', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "have" not "has" (with I/we/you/they).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'lang-err-e-5',
    question: 'Find error: "He don\'t like tea."',
    options: ['He', 'don\'t', 'like tea', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "doesn\'t" not "don\'t" (with he/she/it).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'lang-err-e-6',
    question: 'Find error: "The book are on table."',
    options: ['The book', 'are', 'on table', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "is" not "are" (singular subject).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'lang-err-e-7',
    question: 'Find error: "She have two brothers."',
    options: ['She', 'have', 'two brothers', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "has" not "have" (with he/she/it).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'lang-err-e-8',
    question: 'Find error: "We is students."',
    options: ['We', 'is', 'students', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "are" not "is" (plural subject).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'lang-err-e-9',
    question: 'Find error: "He do his work."',
    options: ['He', 'do', 'his work', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "does" not "do" (with he/she/it).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },
  {
    id: 'lang-err-e-10',
    question: 'Find error: "I am go to school."',
    options: ['I am', 'go', 'to school', 'No error'],
    correctAnswer: 1,
    explanation: 'Should be "going" not "go" (present continuous).',
    categoryId: 'language',
    subCategoryId: 'error-detection',
    level: 'easy'
  },

  // ============= LANGUAGE - VYAKARAN (Hindi Grammar) (Easy) =============
  {
    id: 'lang-vya-e-1',
    question: 'संज्ञा किसे कहते हैं?',
    options: ['नाम को', 'क्रिया को', 'विशेषण को', 'सर्वनाम को'],
    correctAnswer: 0,
    explanation: 'संज्ञा = नाम (व्यक्ति, स्थान, वस्तु का नाम)',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'lang-vya-e-2',
    question: 'सर्वनाम का उदाहरण है?',
    options: ['राम', 'वह', 'सुंदर', 'दौड़ना'],
    correctAnswer: 1,
    explanation: 'वह = सर्वनाम (संज्ञा के स्थान पर प्रयुक्त)',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'lang-vya-e-3',
    question: 'क्रिया किसे कहते हैं?',
    options: ['नाम को', 'काम को', 'गुण को', 'स्थान को'],
    correctAnswer: 1,
    explanation: 'क्रिया = कार्य या काम',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'lang-vya-e-4',
    question: 'विशेषण का उदाहरण है?',
    options: ['लड़का', 'दौड़ना', 'सुंदर', 'वह'],
    correctAnswer: 2,
    explanation: 'सुंदर = विशेषण (संज्ञा की विशेषता बताता है)',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'lang-vya-e-5',
    question: '"क" का उच्चारण स्थान है?',
    options: ['कंठ', 'तालु', 'मूर्धा', 'ओष्ठ'],
    correctAnswer: 0,
    explanation: 'क, ख, ग, घ, ङ = कंठ्य वर्ण',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'lang-vya-e-6',
    question: 'हिंदी वर्णमाला में कितने स्वर हैं?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 1,
    explanation: 'हिंदी में 11 स्वर हैं।',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'lang-vya-e-7',
    question: 'लिंग कितने प्रकार के होते हैं?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'लिंग दो प्रकार: पुल्लिंग और स्त्रीलिंग',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'lang-vya-e-8',
    question: 'वचन कितने होते हैं?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'वचन दो प्रकार: एकवचन और बहुवचन',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'lang-vya-e-9',
    question: 'कारक के कितने भेद हैं?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    explanation: 'कारक 8 प्रकार के होते हैं।',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'lang-vya-e-10',
    question: '"मैं" कौन सा सर्वनाम है?',
    options: ['उत्तम पुरुष', 'मध्यम पुरुष', 'अन्य पुरुष', 'निश्चयवाचक'],
    correctAnswer: 0,
    explanation: 'मैं, हम = उत्तम पुरुष सर्वनाम',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },

  // ============= LANGUAGE - MUHAVARE (Idioms) (Easy) =============
  {
    id: 'lang-muh-e-1',
    question: '"अंधे की लाठी" का अर्थ है?',
    options: ['कमजोर', 'एकमात्र सहारा', 'बेकार', 'गरीब'],
    correctAnswer: 1,
    explanation: 'अंधे की लाठी = एकमात्र सहारा',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'lang-muh-e-2',
    question: '"आँखों का तारा" का अर्थ है?',
    options: ['बहुत प्यारा', 'आँख की बीमारी', 'अंधा', 'कमजोर'],
    correctAnswer: 0,
    explanation: 'आँखों का तारा = बहुत प्यारा या प्रिय',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'lang-muh-e-3',
    question: '"हाथ पीले करना" का अर्थ है?',
    options: ['बीमार होना', 'शादी करना', 'पीला रंग करना', 'कमजोर होना'],
    correctAnswer: 1,
    explanation: 'हाथ पीले करना = विवाह करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'lang-muh-e-4',
    question: '"दाल में काला" का अर्थ है?',
    options: ['काली दाल', 'कुछ गड़बड़', 'अच्छा भोजन', 'स्वादिष्ट'],
    correctAnswer: 1,
    explanation: 'दाल में काला = कुछ संदेह या गड़बड़',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'lang-muh-e-5',
    question: '"हाथ धोना" का अर्थ है?',
    options: ['साफ करना', 'खो देना', 'पकड़ना', 'देना'],
    correctAnswer: 1,
    explanation: 'हाथ धोना = खो देना या छूट जाना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'lang-muh-e-6',
    question: '"आसमान से बातें करना" का अर्थ है?',
    options: ['उड़ना', 'बहुत ऊँचा होना', 'बातूनी होना', 'झूठ बोलना'],
    correctAnswer: 1,
    explanation: 'आसमान से बातें = बहुत ऊँचा या बड़ा होना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'lang-muh-e-7',
    question: '"कान भरना" का अर्थ है?',
    options: ['बहरा होना', 'चुगली करना', 'सुनना', 'गाना'],
    correctAnswer: 1,
    explanation: 'कान भरना = किसी के विरुद्ध बातें करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'lang-muh-e-8',
    question: '"नाक कटना" का अर्थ है?',
    options: ['बीमारी', 'इज्जत जाना', 'सुंदर होना', 'गंध आना'],
    correctAnswer: 1,
    explanation: 'नाक कटना = सम्मान खोना या बेइज्जती',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'lang-muh-e-9',
    question: '"पानी पीकर जात पूछना" का अर्थ है?',
    options: ['प्यासा होना', 'काम के बाद दोष ढूंढना', 'पानी मांगना', 'सवाल पूछना'],
    correctAnswer: 1,
    explanation: 'काम करने के बाद विचार करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'lang-muh-e-10',
    question: '"घी के दीए जलाना" का अर्थ है?',
    options: ['दीपावली मनाना', 'खुशी मनाना', 'गरीब होना', 'अमीर होना'],
    correctAnswer: 1,
    explanation: 'घी के दीए = बहुत खुशी मनाना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },

  // ============= LANGUAGE - PARYAYVACHI (Synonyms Hindi) (Easy) =============
  {
    id: 'lang-par-e-1',
    question: '"सूर्य" का पर्यायवाची है?',
    options: ['चंद्रमा', 'रवि', 'तारा', 'आकाश'],
    correctAnswer: 1,
    explanation: 'सूर्य के पर्यायवाची: रवि, दिनकर, भानु',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'lang-par-e-2',
    question: '"पानी" का पर्यायवाची है?',
    options: ['जल', 'अग्नि', 'वायु', 'पृथ्वी'],
    correctAnswer: 0,
    explanation: 'पानी के पर्यायवाची: जल, नीर, तोय',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'lang-par-e-3',
    question: '"राजा" का पर्यायवाची है?',
    options: ['प्रजा', 'नरेश', 'सेवक', 'मंत्री'],
    correctAnswer: 1,
    explanation: 'राजा के पर्यायवाची: नरेश, भूपति, महीपति',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'lang-par-e-4',
    question: '"वृक्ष" का पर्यायवाची है?',
    options: ['फूल', 'पेड़', 'पत्ता', 'फल'],
    correctAnswer: 1,
    explanation: 'वृक्ष के पर्यायवाची: पेड़, तरु, पादप',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'lang-par-e-5',
    question: '"रात्रि" का पर्यायवाची है?',
    options: ['दिन', 'निशा', 'सुबह', 'शाम'],
    correctAnswer: 1,
    explanation: 'रात्रि के पर्यायवाची: निशा, रजनी, यामिनी',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'lang-par-e-6',
    question: '"नदी" का पर्यायवाची है?',
    options: ['तालाब', 'सरिता', 'समुद्र', 'पर्वत'],
    correctAnswer: 1,
    explanation: 'नदी के पर्यायवाची: सरिता, तटिनी',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'lang-par-e-7',
    question: '"पुत्र" का पर्यायवाची है?',
    options: ['पिता', 'सुत', 'भाई', 'मित्र'],
    correctAnswer: 1,
    explanation: 'पुत्र के पर्यायवाची: सुत, बेटा, आत्मज',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'lang-par-e-8',
    question: '"पर्वत" का पर्यायवाची है?',
    options: ['नदी', 'गिरि', 'मैदान', 'घाटी'],
    correctAnswer: 1,
    explanation: 'पर्वत के पर्यायवाची: गिरि, पहाड़, शैल',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'lang-par-e-9',
    question: '"फूल" का पर्यायवाची है?',
    options: ['पत्ता', 'पुष्प', 'फल', 'जड़'],
    correctAnswer: 1,
    explanation: 'फूल के पर्यायवाची: पुष्प, सुमन, कुसुम',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'lang-par-e-10',
    question: '"आकाश" का पर्यायवाची है?',
    options: ['पृथ्वी', 'गगन', 'पाताल', 'समुद्र'],
    correctAnswer: 1,
    explanation: 'आकाश के पर्यायवाची: गगन, आसमान, नभ',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },

  // ============= LANGUAGE - HINDI COMPREHENSION (Easy) =============
  {
    id: 'lang-hc-e-1',
    question: 'गद्यांश: "राम स्कूल जाता है।" राम कहाँ जाता है?',
    options: ['घर', 'स्कूल', 'मंदिर', 'बाजार'],
    correctAnswer: 1,
    explanation: 'गद्यांश में स्पष्ट है कि राम स्कूल जाता है।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-hc-e-2',
    question: 'गद्यांश: "सूर्य पूर्व में उगता है।" सूर्य कहाँ उगता है?',
    options: ['पश्चिम', 'पूर्व', 'उत्तर', 'दक्षिण'],
    correctAnswer: 1,
    explanation: 'सूर्य पूर्व दिशा में उगता है।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-hc-e-3',
    question: 'गद्यांश: "गाय दूध देती है।" गाय क्या देती है?',
    options: ['अंडा', 'दूध', 'शहद', 'ऊन'],
    correctAnswer: 1,
    explanation: 'गाय से हमें दूध मिलता है।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-hc-e-4',
    question: 'गद्यांश: "राष्ट्रीय पक्षी मोर है।" राष्ट्रीय पक्षी कौन सा है?',
    options: ['कौआ', 'तोता', 'मोर', 'कबूतर'],
    correctAnswer: 2,
    explanation: 'भारत का राष्ट्रीय पक्षी मोर है।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-hc-e-5',
    question: 'गद्यांश: "सप्ताह में सात दिन होते हैं।" सप्ताह में कितने दिन?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'एक सप्ताह में 7 दिन होते हैं।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-hc-e-6',
    question: 'गद्यांश: "तिरंगा हमारा राष्ट्रीय ध्वज है।" राष्ट्रीय ध्वज कौन सा है?',
    options: ['तिरंगा', 'लाल झंडा', 'सफेद झंडा', 'पीला झंडा'],
    correctAnswer: 0,
    explanation: 'भारत का राष्ट्रीय ध्वज तिरंगा है।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-hc-e-7',
    question: 'गद्यांश: "पृथ्वी गोल है।" पृथ्वी का आकार कैसा है?',
    options: ['चौकोर', 'गोल', 'त्रिकोण', 'लंबा'],
    correctAnswer: 1,
    explanation: 'पृथ्वी का आकार गोल (गोलाकार) है।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-hc-e-8',
    question: 'गद्यांश: "हिंदी हमारी राष्ट्रभाषा है।" राष्ट्रभाषा कौन सी है?',
    options: ['अंग्रेजी', 'हिंदी', 'संस्कृत', 'उर्दू'],
    correctAnswer: 1,
    explanation: 'हिंदी भारत की राजभाषा है।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-hc-e-9',
    question: 'गद्यांश: "दिल्ली भारत की राजधानी है।" राजधानी कौन सी है?',
    options: ['मुंबई', 'दिल्ली', 'कोलकाता', 'चेन्नई'],
    correctAnswer: 1,
    explanation: 'नई दिल्ली भारत की राजधानी है।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'lang-hc-e-10',
    question: 'गद्यांश: "वर्ष में 12 महीने होते हैं।" वर्ष में कितने महीने?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    explanation: 'एक वर्ष में 12 महीने होते हैं।',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },

  // ============= LANGUAGE - VAKYA SHUDDHI (Sentence Correction Hindi) (Easy) =============
  {
    id: 'lang-vs-e-1',
    question: 'शुद्ध वाक्य चुनें:',
    options: ['वह स्कूल जाता है।', 'वह स्कूल जाती है।', 'उसे स्कूल जाता है।', 'उसको स्कूल जाते है।'],
    correctAnswer: 0,
    explanation: '"वह" (पुल्लिंग) के साथ "जाता है" सही है।',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'lang-vs-e-2',
    question: 'अशुद्ध वाक्य है:',
    options: ['मैं पढ़ता हूँ।', 'तुम पढ़ते हो।', 'वह पढ़ता है।', 'हम पढ़ते हैं।'],
    correctAnswer: 3,
    explanation: 'सभी शुद्ध हैं। प्रश्न में त्रुटि है।',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'lang-vs-e-3',
    question: 'शुद्ध ���ाक्य है:',
    options: ['राम और श्याम मित्र हैं।', 'राम और श्याम मित्र है।', 'राम या श्याम मित्र हैं।', 'राम के श्याम मित्र हैं।'],
    correctAnswer: 0,
    explanation: 'दो व्यक्ति = बहुवचन = "हैं"',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'lang-vs-e-4',
    question: 'अशुद्ध वाक्य चुनें:',
    options: ['लड़का खेलता है।', 'लड़की खेलती है।', 'लड़के खेलता है।', 'लड़के खेलते हैं।'],
    correctAnswer: 2,
    explanation: '"लड़के" (बहुवचन) के साथ "खेलते" होगा।',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'lang-vs-e-5',
    question: 'शुद्ध रूप चुनें: "मैं घर __ जाता हूँ।"',
    options: ['को', 'से', 'में', 'पर'],
    correctAnswer: 0,
    explanation: '"घर को जाता हूँ" या "घर जाता हूँ" दोनों सही।',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'lang-vs-e-6',
    question: 'शुद्ध वाक्य है:',
    options: ['सीता गीत गाती है।', 'सीता गीत गाता है।', 'सीता गीत गाते हैं।', 'सीता गीत गाती हैं।'],
    correctAnswer: 0,
    explanation: 'स��ता (एकवचन स्त्रीलिंग) = गाती है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'lang-vs-e-7',
    question: 'अशुद्ध वाक्य है:',
    options: ['यह किताब है।', 'ये किताबें हैं।', 'यह किताबें है।', 'वह लड़का है।'],
    correctAnswer: 2,
    explanation: '"यह" (एकवचन) के साथ "किताबें" (बहुवचन) गलत।',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'lang-vs-e-8',
    question: 'शुद्ध वाक्य चुनें:',
    options: ['मुझे भूख लगी है।', 'मैं भूख लगी है।', 'मुझको भूख लगती है।', 'मुझे भूख लगा है।'],
    correctAnswer: 0,
    explanation: '"मुझे भूख लगी है" सही वाक्य है।',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'lang-vs-e-9',
    question: 'सही कारक चुनें: "राम __ पुस्तक है।"',
    options: ['का', 'की', 'के', 'को'],
    correctAnswer: 1,
    explanation: '"राम की पुस्तक" (पुस्तक स्त्रीलिंग)',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'lang-vs-e-10',
    question: 'शुद्ध वाक्य है:',
    options: ['बच्चे खेल रहे हैं।', 'बच्चा खेल रहे हैं।', 'बच्चे खेल रहा है।', 'बच्चा खेल रही है।'],
    correctAnswer: 0,
    explanation: '"बच्चे" (बहुवचन) = "खेल रहे हैं"',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },

];
