import type { Question } from './questionsData';

// Complete Economy questions for all subcategories
export const economyQuestions: Question[] = [
  
  // ============= ECONOMY - ECONOMY BASICS (Easy) =============
  {
    id: 'eco-basic-e-1',
    question: 'GDP stands for?',
    options: ['Gross Domestic Product', 'General Domestic Product', 'Gross Development Plan', 'General Development Product'],
    correctAnswer: 0,
    explanation: 'GDP is Gross Domestic Product - total value of goods and services.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-2',
    question: 'Currency of India is?',
    options: ['Dollar', 'Rupee', 'Pound', 'Yen'],
    correctAnswer: 1,
    explanation: 'Indian Rupee (₹) is the official currency.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-3',
    question: 'RBI stands for?',
    options: ['Reserve Bank of India', 'Regional Bank of India', 'Royal Bank of India', 'Retail Bank of India'],
    correctAnswer: 0,
    explanation: 'RBI is Reserve Bank of India - central bank established in 1935.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-4',
    question: 'Which sector is known as primary sector?',
    options: ['Manufacturing', 'Agriculture', 'Services', 'Technology'],
    correctAnswer: 1,
    explanation: 'Primary sector includes agriculture, mining, forestry, fishing.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-5',
    question: 'Indian economy is a?',
    options: ['Developed economy', 'Developing economy', 'Least developed', 'Underdeveloped'],
    correctAnswer: 1,
    explanation: 'India is classified as a developing/emerging economy.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-6',
    question: 'GST stands for?',
    options: ['General Sales Tax', 'Goods and Services Tax', 'Government Service Tax', 'Global Sales Tax'],
    correctAnswer: 1,
    explanation: 'GST is Goods and Services Tax implemented in July 2017.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-7',
    question: 'Which is the largest employer sector in India?',
    options: ['Manufacturing', 'IT', 'Agriculture', 'Services'],
    correctAnswer: 2,
    explanation: 'Agriculture sector employs majority of Indian workforce.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-8',
    question: 'FDI stands for?',
    options: ['Foreign Direct Investment', 'Financial Development Index', 'Fixed Deposit Investment', 'Foreign Development Initiative'],
    correctAnswer: 0,
    explanation: 'FDI is Foreign Direct Investment from other countries.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-9',
    question: 'Monetary policy is controlled by?',
    options: ['Finance Ministry', 'RBI', 'NITI Aayog', 'Parliament'],
    correctAnswer: 1,
    explanation: 'Reserve Bank of India controls monetary policy.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-10',
    question: 'Which tax is levied by central government?',
    options: ['Property tax', 'Income tax', 'Professional tax', 'Entertainment tax'],
    correctAnswer: 1,
    explanation: 'Income tax is a direct tax collected by central government.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'easy'
  },

  // ============= ECONOMY - ECONOMY BASICS (Medium) =============
  {
    id: 'eco-basic-m-1',
    question: 'Base year for calculating GDP in India is?',
    options: ['2004-05', '2011-12', '2015-16', '2017-18'],
    correctAnswer: 1,
    explanation: 'Base year for GDP calculation is 2011-12.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },
  {
    id: 'eco-basic-m-2',
    question: 'Fiscal policy is formulated by?',
    options: ['RBI', 'Finance Ministry', 'Planning Commission', 'NITI Aayog'],
    correctAnswer: 1,
    explanation: 'Finance Ministry formulates fiscal policy (taxation, expenditure).',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },
  {
    id: 'eco-basic-m-3',
    question: 'Devaluation means?',
    options: ['Increase in currency value', 'Decrease in currency value', 'No change', 'Currency replacement'],
    correctAnswer: 1,
    explanation: 'Devaluation is deliberate reduction of currency value relative to foreign currency.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },
  {
    id: 'eco-basic-m-4',
    question: 'Mixed economy means?',
    options: ['Only private sector', 'Only public sector', 'Both public and private sector', 'Foreign investment'],
    correctAnswer: 2,
    explanation: 'Mixed economy has both public and private sector participation.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },
  {
    id: 'eco-basic-m-5',
    question: 'Disinvestment means?',
    options: ['Government buying shares', 'Government selling shares in PSUs', 'Foreign investment', 'Tax reduction'],
    correctAnswer: 1,
    explanation: 'Disinvestment is selling government stake in public sector enterprises.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },
  {
    id: 'eco-basic-m-6',
    question: 'Per capita income means?',
    options: ['Total income', 'Average income per person', 'National income', 'GDP'],
    correctAnswer: 1,
    explanation: 'Per capita income is average income per person (GDP/Population).',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },
  {
    id: 'eco-basic-m-7',
    question: 'WTO stands for?',
    options: ['World Trade Organization', 'World Tourism Organization', 'World Tax Organization', 'World Transport Organization'],
    correctAnswer: 0,
    explanation: 'WTO is World Trade Organization regulating international trade.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },
  {
    id: 'eco-basic-m-8',
    question: 'Capital account convertibility means?',
    options: ['Trade freedom', 'Investment freedom across borders', 'Currency exchange', 'Tax freedom'],
    correctAnswer: 1,
    explanation: 'Capital account convertibility allows free movement of capital across countries.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },
  {
    id: 'eco-basic-m-9',
    question: 'Green Revolution is associated with?',
    options: ['Forestry', 'Agriculture productivity', 'Environmental protection', 'Industrial growth'],
    correctAnswer: 1,
    explanation: 'Green Revolution increased agricultural productivity using HYV seeds.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },
  {
    id: 'eco-basic-m-10',
    question: 'LPG reforms (1991) stand for?',
    options: ['Land, Property, Growth', 'Liberalization, Privatization, Globalization', 'Loan, Payment, GDP', 'Local, Private, Global'],
    correctAnswer: 1,
    explanation: 'LPG reforms (1991) were Liberalization, Privatization, Globalization.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'medium'
  },

  // ============= ECONOMY - ECONOMY BASICS (Hard) =============
  {
    id: 'eco-basic-h-1',
    question: 'GNP differs from GDP by?',
    options: ['Depreciation', 'Net factor income from abroad', 'Indirect taxes', 'Subsidies'],
    correctAnswer: 1,
    explanation: 'GNP = GDP + Net factor income from abroad.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },
  {
    id: 'eco-basic-h-2',
    question: 'FRBM Act stands for?',
    options: ['Financial Responsibility and Budget Management', 'Fiscal Responsibility and Budget Management', 'Foreign Reserve Budget Management', 'Federal Reserve Budget Management'],
    correctAnswer: 1,
    explanation: 'FRBM Act (2003) aims at fiscal discipline and reduction of fiscal deficit.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },
  {
    id: 'eco-basic-h-3',
    question: 'Lorenz curve measures?',
    options: ['Economic growth', 'Income inequality', 'Poverty', 'Unemployment'],
    correctAnswer: 1,
    explanation: 'Lorenz curve graphically represents income distribution and inequality.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },
  {
    id: 'eco-basic-h-4',
    question: 'Phillips curve shows relationship between?',
    options: ['Inflation and unemployment', 'Growth and development', 'Supply and demand', 'Income and consumption'],
    correctAnswer: 0,
    explanation: 'Phillips curve shows inverse relationship between inflation and unemployment.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },
  {
    id: 'eco-basic-h-5',
    question: 'Laffer curve is related to?',
    options: ['Taxation and revenue', 'Inflation', 'Unemployment', 'GDP growth'],
    correctAnswer: 0,
    explanation: 'Laffer curve shows relationship between tax rates and tax revenue.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },
  {
    id: 'eco-basic-h-6',
    question: 'Marginal propensity to consume (MPC) is?',
    options: ['Total consumption', 'Change in consumption/Change in income', 'Average consumption', 'Savings rate'],
    correctAnswer: 1,
    explanation: 'MPC = Change in consumption / Change in income (Keynesian concept).',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },
  {
    id: 'eco-basic-h-7',
    question: 'Repo rate is the rate at which?',
    options: ['Banks lend to public', 'RBI lends to banks', 'Banks lend to each other', 'Government borrows'],
    correctAnswer: 1,
    explanation: 'Repo rate is rate at which RBI lends to commercial banks.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },
  {
    id: 'eco-basic-h-8',
    question: 'Gini coefficient measures?',
    options: ['Economic growth', 'Income inequality', 'Inflation', 'Poverty'],
    correctAnswer: 1,
    explanation: 'Gini coefficient (0-1) measures income inequality (0=perfect equality, 1=perfect inequality).',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },
  {
    id: 'eco-basic-h-9',
    question: 'Crowding out effect refers to?',
    options: ['Private investment displaced by public spending', 'Inflation', 'Unemployment', 'Depreciation'],
    correctAnswer: 0,
    explanation: 'Crowding out is when government borrowing reduces private investment.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },
  {
    id: 'eco-basic-h-10',
    question: 'Mundell-Fleming model deals with?',
    options: ['Closed economy', 'Open economy macroeconomics', 'Microeconomics', 'Labor economics'],
    correctAnswer: 1,
    explanation: 'Mundell-Fleming model extends IS-LM model to open economy.',
    categoryId: 'economy',
    subCategoryId: 'economy-basics',
    level: 'hard'
  },

  // ============= ECONOMY - BUDGET & ECONOMIC SURVEY (Easy) =============
  {
    id: 'eco-budget-e-1',
    question: 'Union Budget is presented by?',
    options: ['President', 'Prime Minister', 'Finance Minister', 'RBI Governor'],
    correctAnswer: 2,
    explanation: 'Finance Minister presents Union Budget in Parliament.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-2',
    question: 'Budget is usually presented in which month?',
    options: ['January', 'February', 'March', 'April'],
    correctAnswer: 1,
    explanation: 'Union Budget is usually presented on February 1.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-3',
    question: 'Fiscal year in India runs from?',
    options: ['Jan 1 to Dec 31', 'April 1 to March 31', 'July 1 to June 30', 'Oct 1 to Sep 30'],
    correctAnswer: 1,
    explanation: 'Indian fiscal year is April 1 to March 31.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-4',
    question: 'Budget has how many parts?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'Budget has 2 parts: Revenue Budget and Capital Budget.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-5',
    question: 'Economic Survey is presented?',
    options: ['Before Budget', 'After Budget', 'With Budget', 'Not presented'],
    correctAnswer: 0,
    explanation: 'Economic Survey is presented a day before Union Budget.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-6',
    question: 'Vote on Account allows government to?',
    options: ['Spend for full year', 'Spend for few months', 'Borrow money', 'Print currency'],
    correctAnswer: 1,
    explanation: 'Vote on Account allows spending for 2-4 months till new government presents full budget.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-7',
    question: 'Deficit budget means?',
    options: ['Income > Expenditure', 'Income = Expenditure', 'Income < Expenditure', 'No income'],
    correctAnswer: 2,
    explanation: 'Deficit budget has expenditure exceeding revenue.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-8',
    question: 'Railway Budget was merged with Union Budget in?',
    options: ['2014', '2015', '2016', '2017'],
    correctAnswer: 3,
    explanation: 'Railway Budget merged with Union Budget in 2017.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-9',
    question: 'Which is a direct tax?',
    options: ['GST', 'Customs duty', 'Income tax', 'Excise duty'],
    correctAnswer: 2,
    explanation: 'Income tax is a direct tax paid directly by individuals/companies.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },
  {
    id: 'eco-budget-e-10',
    question: 'Interim Budget is presented?',
    options: ['Every year', 'During election year', 'Every 5 years', 'Never'],
    correctAnswer: 1,
    explanation: 'Interim Budget is presented in election year before new government.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'easy'
  },

  // ============= ECONOMY - BUDGET & ECONOMIC SURVEY (Medium) =============
  {
    id: 'eco-budget-m-1',
    question: 'Fiscal deficit is?',
    options: ['Revenue - Expenditure', 'Total Expenditure - Total Revenue (excluding borrowings)', 'Exports - Imports', 'Savings - Investment'],
    correctAnswer: 1,
    explanation: 'Fiscal Deficit = Total Expenditure - Total Revenue (excluding borrowings).',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },
  {
    id: 'eco-budget-m-2',
    question: 'Revenue deficit is?',
    options: ['Revenue Receipts - Revenue Expenditure', 'Capital Receipts - Capital Expenditure', 'Total income - Total expenditure', 'None'],
    correctAnswer: 0,
    explanation: 'Revenue Deficit = Revenue Expenditure - Revenue Receipts.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },
  {
    id: 'eco-budget-m-3',
    question: 'Primary deficit is?',
    options: ['Fiscal deficit', 'Fiscal deficit - Interest payments', 'Revenue deficit', 'Budget deficit'],
    correctAnswer: 1,
    explanation: 'Primary Deficit = Fiscal Deficit - Interest Payments.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },
  {
    id: 'eco-budget-m-4',
    question: 'Consolidated Fund of India can be spent?',
    options: ['By President', 'With Parliament approval', 'By RBI', 'By Finance Ministry'],
    correctAnswer: 1,
    explanation: 'Money from Consolidated Fund can be withdrawn only with Parliament approval.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },
  {
    id: 'eco-budget-m-5',
    question: 'Contingency Fund is operated by?',
    options: ['Parliament', 'President', 'Finance Minister', 'RBI'],
    correctAnswer: 1,
    explanation: 'Contingency Fund is at disposal of President for unforeseen expenses.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },
  {
    id: 'eco-budget-m-6',
    question: 'Public Account holds?',
    options: ['Tax revenue', 'Money received in trust', 'Foreign aid', 'Loans'],
    correctAnswer: 1,
    explanation: 'Public Account holds money received in trust (provident funds, deposits).',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },
  {
    id: 'eco-budget-m-7',
    question: 'Cut motion is moved in?',
    options: ['Rajya Sabha', 'Lok Sabha', 'Both houses', 'None'],
    correctAnswer: 1,
    explanation: 'Cut motions to reduce demand for grants are moved in Lok Sabha.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },
  {
    id: 'eco-budget-m-8',
    question: 'Plan expenditure was merged with?',
    options: ['Revenue expenditure', 'Non-plan expenditure', 'Capital expenditure', 'Not merged'],
    correctAnswer: 1,
    explanation: 'Plan and Non-plan classification ended in 2017 budget.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },
  {
    id: 'eco-budget-m-9',
    question: 'Effective revenue deficit excludes?',
    options: ['All revenue deficit', 'Grants for capital assets', 'Interest payments', 'Subsidies'],
    correctAnswer: 1,
    explanation: 'Effective Revenue Deficit = Revenue Deficit - Grants for capital assets.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },
  {
    id: 'eco-budget-m-10',
    question: 'Gender Budget was introduced in?',
    options: ['2000', '2005', '2010', '2015'],
    correctAnswer: 1,
    explanation: 'Gender Budget statement introduced in 2005-06 budget.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'medium'
  },

  // ============= ECONOMY - BUDGET & ECONOMIC SURVEY (Hard) =============
  {
    id: 'eco-budget-h-1',
    question: 'Which Article deals with Consolidated Fund?',
    options: ['Article 112', 'Article 266', 'Article 280', 'Article 360'],
    correctAnswer: 1,
    explanation: 'Article 266 deals with Consolidated Fund, Contingency Fund, Public Account.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },
  {
    id: 'eco-budget-h-2',
    question: 'Budget presentation was advanced to Feb 1 in?',
    options: ['2015', '2016', '2017', '2018'],
    correctAnswer: 2,
    explanation: 'Budget date changed from last day of February to Feb 1 in 2017.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },
  {
    id: 'eco-budget-h-3',
    question: 'FRBM Act targets fiscal deficit at what % of GDP?',
    options: ['2%', '3%', '4%', '5%'],
    correctAnswer: 1,
    explanation: 'FRBM Act targets fiscal deficit at 3% of GDP.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },
  {
    id: 'eco-budget-h-4',
    question: 'Outcome Budget was introduced in which year?',
    options: ['2003', '2005', '2007', '2010'],
    correctAnswer: 2,
    explanation: 'Outcome Budget introduced in 2005-06 to measure performance.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },
  {
    id: 'eco-budget-h-5',
    question: 'Performance Budget focuses on?',
    options: ['Revenue', 'Physical targets and achievements', 'Deficits', 'Loans'],
    correctAnswer: 1,
    explanation: 'Performance Budget shows physical targets and actual achievements.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },
  {
    id: 'eco-budget-h-6',
    question: 'Guillotine in budget context means?',
    options: ['Cut motion', 'All pending demands passed together', 'Budget rejection', 'Vote on account'],
    correctAnswer: 1,
    explanation: 'Guillotine is when all outstanding demands are put to vote together.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },
  {
    id: 'eco-budget-h-7',
    question: 'Monetized deficit refers to?',
    options: ['Fiscal deficit', 'RBI lending to government', 'Revenue deficit', 'Primary deficit'],
    correctAnswer: 1,
    explanation: 'Monetized deficit is government borrowing from RBI (discontinued in 1997).',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },
  {
    id: 'eco-budget-h-8',
    question: 'Zero-based budgeting was introduced by?',
    options: ['Indira Gandhi', 'Rajiv Gandhi', 'P.V. Narasimha Rao', 'Atal Bihari Vajpayee'],
    correctAnswer: 1,
    explanation: 'Zero-based budgeting introduced during Rajiv Gandhi government (1986).',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },
  {
    id: 'eco-budget-h-9',
    question: 'Charged expenditure does NOT require?',
    options: ['President approval', 'Parliament voting', 'Finance Minister approval', 'CAG audit'],
    correctAnswer: 1,
    explanation: 'Charged expenditure (salaries of President, judges) not voted by Parliament.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },
  {
    id: 'eco-budget-h-10',
    question: 'Which committee reviews FRBM Act periodically?',
    options: ['Finance Commission', 'FRBM Review Committee', 'Planning Commission', 'NITI Aayog'],
    correctAnswer: 1,
    explanation: 'FRBM Review Committee (NK Singh Committee 2017) reviews fiscal targets.',
    categoryId: 'economy',
    subCategoryId: 'budget-survey',
    level: 'hard'
  },

  // ============= ECONOMY - BANKING & FINANCE (Easy) =============
  {
    id: 'eco-bank-e-1',
    question: 'RBI was established in?',
    options: ['1930', '1935', '1947', '1950'],
    correctAnswer: 1,
    explanation: 'Reserve Bank of India was established on April 1, 1935.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-2',
    question: 'Headquarters of RBI is in?',
    options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    correctAnswer: 1,
    explanation: 'RBI headquarters is in Mumbai.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-3',
    question: 'NABARD stands for?',
    options: ['National Bank for Agriculture and Rural Development', 'National Board for Agriculture', 'New Agricultural Bank', 'None'],
    correctAnswer: 0,
    explanation: 'NABARD is National Bank for Agriculture and Rural Development.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-4',
    question: 'Savings account interest is calculated on?',
    options: ['Monthly basis', 'Quarterly basis', 'Daily basis', 'Yearly basis'],
    correctAnswer: 2,
    explanation: 'Savings account interest is calculated on daily balance.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-5',
    question: 'ATM stands for?',
    options: ['Automatic Teller Machine', 'Automated Transfer Machine', 'Any Time Money', 'All Time Machine'],
    correctAnswer: 0,
    explanation: 'ATM is Automated Teller Machine for cash withdrawal.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-6',
    question: 'First bank in India was?',
    options: ['State Bank of India', 'Bank of Hindustan', 'Reserve Bank', 'Punjab National Bank'],
    correctAnswer: 1,
    explanation: 'Bank of Hindustan (1770) was first bank, followed by General Bank of India (1786).',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-7',
    question: 'KYC stands for?',
    options: ['Know Your Customer', 'Keep Your Cash', 'Know Your Credit', 'None'],
    correctAnswer: 0,
    explanation: 'KYC is Know Your Customer - identity verification process.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-8',
    question: 'Cheque is valid for?',
    options: ['1 month', '3 months', '6 months', '1 year'],
    correctAnswer: 1,
    explanation: 'Cheque is valid for 3 months from date of issue.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-9',
    question: 'NEFT stands for?',
    options: ['National Electronic Funds Transfer', 'New Electronic Fund Transfer', 'National Easy Fund Transfer', 'None'],
    correctAnswer: 0,
    explanation: 'NEFT is National Electronic Funds Transfer for online money transfer.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },
  {
    id: 'eco-bank-e-10',
    question: 'Minimum balance in savings account varies by?',
    options: ['Customer age', 'Bank type', 'Account type', 'All of these'],
    correctAnswer: 3,
    explanation: 'Minimum balance depends on bank, branch location, and account type.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'easy'
  },

  // ============= ECONOMY - BANKING & FINANCE (Medium) =============
  {
    id: 'eco-bank-m-1',
    question: 'Bank nationalization first happened in?',
    options: ['1947', '1955', '1969', '1980'],
    correctAnswer: 2,
    explanation: '14 banks nationalized in 1969, 6 more in 1980.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },
  {
    id: 'eco-bank-m-2',
    question: 'CRR stands for?',
    options: ['Cash Reserve Ratio', 'Credit Reserve Ratio', 'Current Reserve Ratio', 'Central Reserve Ratio'],
    correctAnswer: 0,
    explanation: 'CRR is Cash Reserve Ratio - cash banks must maintain with RBI.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },
  {
    id: 'eco-bank-m-3',
    question: 'SLR stands for?',
    options: ['Statutory Liquidity Ratio', 'Standard Liquidity Ratio', 'Special Liquidity Ratio', 'State Liquidity Ratio'],
    correctAnswer: 0,
    explanation: 'SLR is Statutory Liquidity Ratio - liquid assets banks must maintain.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },
  {
    id: 'eco-bank-m-4',
    question: 'RTGS minimum amount is?',
    options: ['₹1 lakh', '₹2 lakhs', '₹5 lakhs', 'No minimum'],
    correctAnswer: 3,
    explanation: 'RTGS has no minimum limit now (earlier ₹2 lakhs).',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },
  {
    id: 'eco-bank-m-5',
    question: 'DICGC insures deposits up to?',
    options: ['₹1 lakh', '₹2 lakhs', '₹5 lakhs', '₹10 lakhs'],
    correctAnswer: 2,
    explanation: 'Deposit Insurance and Credit Guarantee Corporation insures up to ₹5 lakhs.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },
  {
    id: 'eco-bank-m-6',
    question: 'Priority sector lending target for banks is?',
    options: ['30%', '35%', '40%', '45%'],
    correctAnswer: 2,
    explanation: 'Banks must lend 40% of ANBC to priority sectors.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },
  {
    id: 'eco-bank-m-7',
    question: 'NPA (Non-Performing Asset) is loan unpaid for?',
    options: ['30 days', '60 days', '90 days', '180 days'],
    correctAnswer: 2,
    explanation: 'NPA is loan with overdue principal/interest for 90+ days.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },
  {
    id: 'eco-bank-m-8',
    question: 'MUDRA Bank focuses on?',
    options: ['Large industries', 'Micro and small enterprises', 'Agriculture', 'Export'],
    correctAnswer: 1,
    explanation: 'MUDRA (Micro Units Development & Refinance Agency) funds micro-enterprises.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },
  {
    id: 'eco-bank-m-9',
    question: 'Basel norms are related to?',
    options: ['Banking regulations', 'Trade', 'Currency', 'Taxation'],
    correctAnswer: 0,
    explanation: 'Basel norms set capital adequacy standards for banks.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },
  {
    id: 'eco-bank-m-10',
    question: 'Payment Banks can accept deposits up to?',
    options: ['₹50,000', '₹1 lakh', '₹2 lakhs', '₹5 lakhs'],
    correctAnswer: 1,
    explanation: 'Payment Banks can accept maximum ₹1 lakh per customer.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'medium'
  },

  // ============= ECONOMY - BANKING & FINANCE (Hard) =============
  {
    id: 'eco-bank-h-1',
    question: 'Narasimham Committee dealt with?',
    options: ['Tax reforms', 'Banking sector reforms', 'Agricultural reforms', 'Industrial reforms'],
    correctAnswer: 1,
    explanation: 'Narasimham Committee (1991, 1998) recommended banking sector reforms.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },
  {
    id: 'eco-bank-h-2',
    question: 'Capital to Risk Weighted Assets Ratio (CRAR) should be minimum?',
    options: ['6%', '9%', '12%', '15%'],
    correctAnswer: 1,
    explanation: 'CRAR (Capital Adequacy Ratio) minimum is 9% in India as per Basel norms.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },
  {
    id: 'eco-bank-h-3',
    question: 'Prompt Corrective Action (PCA) framework is for?',
    options: ['Profitable banks', 'Weak banks', 'All banks', 'Foreign banks'],
    correctAnswer: 1,
    explanation: 'PCA framework monitors weak banks with capital/NPA issues.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },
  {
    id: 'eco-bank-h-4',
    question: 'Which committee recommended Small Finance Banks?',
    options: ['Nachiket Mor', 'Narasimham', 'Y.H. Malegam', 'Urjit Patel'],
    correctAnswer: 0,
    explanation: 'Nachiket Mor Committee (2014) recommended Small Finance Banks.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },
  {
    id: 'eco-bank-h-5',
    question: 'LAF (Liquidity Adjustment Facility) corridor consists of?',
    options: ['Repo and Reverse Repo', 'CRR and SLR', 'MSF and Bank Rate', 'None'],
    correctAnswer: 0,
    explanation: 'LAF corridor is between Repo Rate (lower) and Reverse Repo Rate (upper).',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },
  {
    id: 'eco-bank-h-6',
    question: 'Marginal Standing Facility (MSF) is?',
    options: ['Below Repo rate', 'Above Repo rate', 'Equal to Repo', 'Below Reverse Repo'],
    correctAnswer: 1,
    explanation: 'MSF is emergency borrowing facility at rate above Repo Rate.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },
  {
    id: 'eco-bank-h-7',
    question: 'IBC (Insolvency and Bankruptcy Code) enacted in?',
    options: ['2014', '2015', '2016', '2017'],
    correctAnswer: 2,
    explanation: 'Insolvency and Bankruptcy Code enacted in 2016.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },
  {
    id: 'eco-bank-h-8',
    question: 'Bad Bank concept was recommended by?',
    options: ['Narasimham Committee', 'P.J. Nayak Committee', 'Urjit Patel Committee', 'Y.V. Reddy'],
    correctAnswer: 1,
    explanation: 'P.J. Nayak Committee recommended bad bank for stressed assets.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },
  {
    id: 'eco-bank-h-9',
    question: 'Which Act governs RBI?',
    options: ['Banking Regulation Act', 'RBI Act 1934', 'Companies Act', 'SEBI Act'],
    correctAnswer: 1,
    explanation: 'RBI is governed by Reserve Bank of India Act, 1934.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },
  {
    id: 'eco-bank-h-10',
    question: 'Differential voting rights shares were allowed by?',
    options: ['Companies Act 1956', 'Companies Act 2013', 'SEBI', 'RBI'],
    correctAnswer: 1,
    explanation: 'Companies Act 2013 allows DVR shares with differential voting rights.',
    categoryId: 'economy',
    subCategoryId: 'banking-finance',
    level: 'hard'
  },

  // ============= ECONOMY - INFLATION, GDP & TAXES (Easy) =============
  {
    id: 'eco-inf-e-1',
    question: 'Inflation means?',
    options: ['Decrease in prices', 'Increase in prices', 'Stable prices', 'No change'],
    correctAnswer: 1,
    explanation: 'Inflation is sustained increase in general price level.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-2',
    question: 'WPI stands for?',
    options: ['Wholesale Price Index', 'World Price Index', 'Weekly Price Index', 'Weighted Price Index'],
    correctAnswer: 0,
    explanation: 'WPI is Wholesale Price Index measuring inflation at wholesale level.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-3',
    question: 'CPI stands for?',
    options: ['Consumer Price Index', 'Central Price Index', 'Common Price Index', 'Current Price Index'],
    correctAnswer: 0,
    explanation: 'CPI is Consumer Price Index measuring retail inflation.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-4',
    question: 'GST was implemented in?',
    options: ['2015', '2016', '2017', '2018'],
    correctAnswer: 2,
    explanation: 'GST (Goods and Services Tax) implemented on July 1, 2017.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-5',
    question: 'How many GST slabs are there?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: 'GST has 5 slabs: 0%, 5%, 12%, 18%, 28%.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-6',
    question: 'Deflation means?',
    options: ['Increase in prices', 'Decrease in prices', 'Stable prices', 'High inflation'],
    correctAnswer: 1,
    explanation: 'Deflation is sustained decrease in general price level.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-7',
    question: 'GDP at current prices is called?',
    options: ['Real GDP', 'Nominal GDP', 'Potential GDP', 'Per capita GDP'],
    correctAnswer: 1,
    explanation: 'Nominal GDP is at current market prices (not adjusted for inflation).',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-8',
    question: 'Direct tax is paid?',
    options: ['By buyer', 'Directly to government', 'Through seller', 'Not paid'],
    correctAnswer: 1,
    explanation: 'Direct tax (income tax, corporate tax) paid directly to government.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-9',
    question: 'Which is an indirect tax?',
    options: ['Income tax', 'Wealth tax', 'GST', 'Corporate tax'],
    correctAnswer: 2,
    explanation: 'GST is indirect tax collected by seller from buyer.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },
  {
    id: 'eco-inf-e-10',
    question: 'RBI controls inflation through?',
    options: ['Fiscal policy', 'Monetary policy', 'Trade policy', 'Industrial policy'],
    correctAnswer: 1,
    explanation: 'RBI uses monetary policy tools (repo rate, CRR) to control inflation.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'easy'
  },

  // ============= ECONOMY - INFLATION, GDP & TAXES (Medium/Hard) =============
  {
    id: 'eco-inf-m-1',
    question: 'Core inflation excludes?',
    options: ['Food items', 'Food and fuel', 'All items', 'Housing'],
    correctAnswer: 1,
    explanation: 'Core inflation excludes volatile food and fuel prices.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'medium'
  },
  {
    id: 'eco-inf-m-2',
    question: 'Stagflation means?',
    options: ['High inflation + High growth', 'High inflation + Low growth', 'Low inflation + Low growth', 'Deflation'],
    correctAnswer: 1,
    explanation: 'Stagflation is high inflation with economic stagnation (low growth).',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'medium'
  },
  {
    id: 'eco-inf-m-3',
    question: 'Real GDP is adjusted for?',
    options: ['Population', 'Inflation', 'Taxes', 'Subsidies'],
    correctAnswer: 1,
    explanation: 'Real GDP is inflation-adjusted (at constant prices).',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'medium'
  },
  {
    id: 'eco-inf-m-4',
    question: 'GDP deflator measures?',
    options: ['Inflation', 'Deflation', 'Growth', 'Employment'],
    correctAnswer: 0,
    explanation: 'GDP deflator = (Nominal GDP/Real GDP) × 100, measures overall inflation.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'medium'
  },
  {
    id: 'eco-inf-m-5',
    question: 'Laffer curve relates to?',
    options: ['Tax rates and revenue', 'Inflation', 'GDP', 'Employment'],
    correctAnswer: 0,
    explanation: 'Laffer curve shows tax revenue first increases then decreases with tax rate.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'hard'
  },
  {
    id: 'eco-inf-m-6',
    question: 'Green GDP accounts for?',
    options: ['Agricultural output', 'Environmental degradation', 'Forest cover', 'Renewable energy'],
    correctAnswer: 1,
    explanation: 'Green GDP adjusts for environmental costs and resource depletion.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'hard'
  },
  {
    id: 'eco-inf-m-7',
    question: 'Purchasing Power Parity (PPP) measures?',
    options: ['Exchange rate', 'Real purchasing power', 'Inflation', 'GDP'],
    correctAnswer: 1,
    explanation: 'PPP adjusts income for cost of living differences across countries.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'hard'
  },
  {
    id: 'eco-inf-m-8',
    question: 'Harmonized System of Nomenclature (HSN) code is used in?',
    options: ['Income tax', 'GST', 'Customs duty', 'Both B and C'],
    correctAnswer: 3,
    explanation: 'HSN code classifies goods for GST and customs duty.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'hard'
  },
  {
    id: 'eco-inf-m-9',
    question: 'Tax buoyancy is?',
    options: ['Tax revenue/GDP', '% change in tax revenue / % change in GDP', 'Total tax', 'Tax rate'],
    correctAnswer: 1,
    explanation: 'Tax buoyancy = % change in tax revenue / % change in GDP.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'hard'
  },
  {
    id: 'eco-inf-m-10',
    question: 'Black money law (2015) allows?',
    options: ['Complete amnesty', 'One-time compliance', 'No penalty', 'Tax exemption'],
    correctAnswer: 1,
    explanation: 'Black Money Act 2015 provides one-time compliance window.',
    categoryId: 'economy',
    subCategoryId: 'inflation-gdp',
    level: 'hard'
  },

  // ============= ECONOMY - GOVERNMENT SCHEMES (Easy to Hard) =============
  {
    id: 'eco-scheme-e-1',
    question: 'PM-KISAN scheme provides?',
    options: ['₹4000/year', '₹6000/year', '₹8000/year', '₹10000/year'],
    correctAnswer: 1,
    explanation: 'PM-KISAN provides ₹6000 per year to farmers in 3 installments.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-2',
    question: 'Ayushman Bharat provides health cover of?',
    options: ['₹1 lakh', '₹3 lakhs', '₹5 lakhs', '₹10 lakhs'],
    correctAnswer: 2,
    explanation: 'Ayushman Bharat (PM-JAY) provides ₹5 lakh health insurance.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-3',
    question: 'Beti Bachao Beti Padhao aims to?',
    options: ['Girl education', 'Women empowerment', 'Save girl child', 'All of these'],
    correctAnswer: 3,
    explanation: 'BBBP focuses on girl child survival, protection, and education.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-4',
    question: 'Make in India campaign was launched in?',
    options: ['2013', '2014', '2015', '2016'],
    correctAnswer: 1,
    explanation: 'Make in India launched on September 25, 2014.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-e-5',
    question: 'Swachh Bharat Mission was launched in?',
    options: ['2013', '2014', '2015', '2016'],
    correctAnswer: 1,
    explanation: 'Swachh Bharat Abhiyan launched on October 2, 2014.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'easy'
  },
  {
    id: 'eco-scheme-m-1',
    question: 'MGNREGA guarantees how many days of employment?',
    options: ['50 days', '100 days', '150 days', '200 days'],
    correctAnswer: 1,
    explanation: 'MGNREGA guarantees 100 days of wage employment per year.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'medium'
  },
  {
    id: 'eco-scheme-m-2',
    question: 'Atal Pension Yojana provides pension to?',
    options: ['Government employees', 'Unorganized sector workers', 'Senior citizens', 'All citizens'],
    correctAnswer: 1,
    explanation: 'APY provides pension security to unorganized sector workers.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'medium'
  },
  {
    id: 'eco-scheme-m-3',
    question: 'Pradhan Mantri Awas Yojana aims for?',
    options: ['Rural housing', 'Urban housing', 'Both rural and urban', 'None'],
    correctAnswer: 2,
    explanation: 'PMAY has two components: PMAY-Gramin and PMAY-Urban.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'medium'
  },
  {
    id: 'eco-scheme-m-4',
    question: 'Stand Up India scheme provides loan for?',
    options: ['Students', 'SC/ST/Women entrepreneurs', 'Farmers', 'Exporters'],
    correctAnswer: 1,
    explanation: 'Stand Up India provides loans to SC/ST and women entrepreneurs.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'medium'
  },
  {
    id: 'eco-scheme-m-5',
    question: 'National Solar Mission targets?',
    options: ['50 GW', '100 GW', '175 GW', '200 GW'],
    correctAnswer: 1,
    explanation: 'National Solar Mission (Jawaharlal Nehru) targets 100 GW by 2022.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'medium'
  },
  {
    id: 'eco-scheme-h-1',
    question: 'UDAY scheme is related to?',
    options: ['Skill development', 'Power sector', 'Education', 'Healthcare'],
    correctAnswer: 1,
    explanation: 'UDAY (Ujwal DISCOM Assurance Yojana) for power distribution companies.',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'hard'
  },
  {
    id: 'eco-scheme-h-2',
    question: 'FAME scheme promotes?',
    options: ['Agriculture', 'Electric vehicles', 'Tourism', 'Exports'],
    correctAnswer: 1,
    explanation: 'FAME (Faster Adoption of Manufacturing of Electric Vehicles).',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'hard'
  },
  {
    id: 'eco-scheme-h-3',
    question: 'AMRUT mission focuses on?',
    options: ['Rural areas', 'Urban infrastructure', 'Tribal areas', 'Hill areas'],
    correctAnswer: 1,
    explanation: 'AMRUT (Atal Mission for Rejuvenation and Urban Transformation).',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'hard'
  },
  {
    id: 'eco-scheme-h-4',
    question: 'HRIDAY scheme is for?',
    options: ['Healthcare', 'Heritage cities', 'Housing', 'Highways'],
    correctAnswer: 1,
    explanation: 'HRIDAY (Heritage City Development and Augmentation Yojana).',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'hard'
  },
  {
    id: 'eco-scheme-h-5',
    question: 'SAMPADA scheme relates to?',
    options: ['Food processing', 'Digital India', 'Education', 'Defense'],
    correctAnswer: 0,
    explanation: 'SAMPADA (Scheme for Agro-Marine Processing and Development of Agro-Processing Clusters).',
    categoryId: 'economy',
    subCategoryId: 'govt-schemes',
    level: 'hard'
  }

];