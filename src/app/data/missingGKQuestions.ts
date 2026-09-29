import type { Question } from './questionsData';

// ============= MISSING GK QUESTIONS (129 Questions) =============
// Current Affairs, Important Days, Awards & Honors, Books & Authors

export const missingGKQuestions: Question[] = [
  
  // ============= CURRENT AFFAIRS (40 Questions) =============
  
  // Easy (15 questions)
  {
    id: 'ga-ca-e-21',
    question: 'Who is the current Prime Minister of India (2024)?',
    options: ['Manmohan Singh', 'Narendra Modi', 'Rahul Gandhi', 'Amit Shah'],
    correctAnswer: 1,
    explanation: 'Narendra Modi is the Prime Minister of India since 2014.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-22',
    question: 'G20 Summit 2023 was hosted by which country?',
    options: ['USA', 'China', 'India', 'Japan'],
    correctAnswer: 2,
    explanation: 'India hosted the G20 Summit in 2023 in New Delhi.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-23',
    question: 'What is India\'s rank in 2024 Olympics medal tally?',
    options: ['Top 10', 'Top 20', 'Top 30', 'Top 50'],
    correctAnswer: 3,
    explanation: 'India typically ranks in top 50 in Olympics medal tally.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-24',
    question: 'Which Indian city is hosting the 2036 Olympics bid?',
    options: ['Mumbai', 'Delhi', 'Ahmedabad', 'Multiple cities'],
    correctAnswer: 3,
    explanation: 'India is bidding to host 2036 Olympics across multiple cities.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-25',
    question: 'India\'s new Parliament building was inaugurated in?',
    options: ['2021', '2022', '2023', '2024'],
    correctAnswer: 2,
    explanation: 'The new Parliament building was inaugurated in May 2023.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-26',
    question: 'What is the name of India\'s UPI system?',
    options: ['BharatPay', 'IndiaUPI', 'Unified Payments Interface', 'DigiPay'],
    correctAnswer: 2,
    explanation: 'UPI stands for Unified Payments Interface.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-27',
    question: 'India became world\'s most populous country in?',
    options: ['2020', '2021', '2022', '2023'],
    correctAnswer: 3,
    explanation: 'India surpassed China as most populous country in 2023.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-28',
    question: 'Which Indian state recently banned plastic completely?',
    options: ['Kerala', 'Maharashtra', 'Multiple states', 'None'],
    correctAnswer: 2,
    explanation: 'Multiple Indian states have banned single-use plastics.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-29',
    question: 'India\'s digital rupee is known as?',
    options: ['e-Rupee', 'Digital INR', 'Crypto Rupee', 'Virtual Rupee'],
    correctAnswer: 0,
    explanation: 'India\'s digital currency is called e-Rupee or e₹.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-30',
    question: 'Which space mission made India 4th country to land on Moon?',
    options: ['Chandrayaan-1', 'Chandrayaan-2', 'Chandrayaan-3', 'Gaganyaan'],
    correctAnswer: 2,
    explanation: 'Chandrayaan-3 successfully landed on Moon in August 2023.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-31',
    question: 'India\'s first bullet train project is between?',
    options: ['Delhi-Mumbai', 'Mumbai-Ahmedabad', 'Delhi-Kolkata', 'Chennai-Bangalore'],
    correctAnswer: 1,
    explanation: 'Mumbai-Ahmedabad bullet train is India\'s first high-speed rail project.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-32',
    question: 'What is Ayushman Bharat scheme?',
    options: ['Education scheme', 'Health insurance scheme', 'Employment scheme', 'Housing scheme'],
    correctAnswer: 1,
    explanation: 'Ayushman Bharat is world\'s largest health insurance scheme.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-33',
    question: 'India\'s rank in global GDP (2024)?',
    options: ['3rd', '4th', '5th', '6th'],
    correctAnswer: 2,
    explanation: 'India is the 5th largest economy by nominal GDP.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-34',
    question: 'Which Indian became Twitter (X) CEO?',
    options: ['Sundar Pichai', 'Satya Nadella', 'Parag Agrawal', 'Shantanu Narayen'],
    correctAnswer: 2,
    explanation: 'Parag Agrawal became Twitter CEO in 2021 (later replaced).',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-35',
    question: 'India hosted which major cricket tournament in 2023?',
    options: ['T20 World Cup', 'ODI World Cup', 'IPL', 'Champions Trophy'],
    correctAnswer: 1,
    explanation: 'India hosted the ICC ODI World Cup in 2023.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },

  // Medium (13 questions)
  {
    id: 'ga-ca-m-21',
    question: 'What is India\'s target year for net-zero emissions?',
    options: ['2047', '2050', '2060', '2070'],
    correctAnswer: 3,
    explanation: 'India has pledged to achieve net-zero emissions by 2070.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-22',
    question: 'India\'s space station name announced?',
    options: ['Gaganyaan', 'Bharatiya Antariksh Station', 'Indian Space Station', 'Akash Station'],
    correctAnswer: 1,
    explanation: 'India announced plans for Bharatiya Antariksh Station.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-23',
    question: 'Which bank became India\'s most valuable company in 2023?',
    options: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'],
    correctAnswer: 1,
    explanation: 'HDFC Bank became India\'s most valuable company after merger.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-24',
    question: 'India\'s semiconductor manufacturing hub announced in?',
    options: ['Gujarat', 'Tamil Nadu', 'Karnataka', 'Multiple states'],
    correctAnswer: 3,
    explanation: 'Multiple states announced semiconductor manufacturing projects.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-25',
    question: 'India\'s rank in renewable energy capacity (2024)?',
    options: ['1st', '2nd', '3rd', '4th'],
    correctAnswer: 3,
    explanation: 'India ranks 4th globally in renewable energy installed capacity.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-26',
    question: 'What is PM-KISAN scheme?',
    options: ['Health scheme', 'Education scheme', 'Direct income support to farmers', 'Loan waiver'],
    correctAnswer: 2,
    explanation: 'PM-KISAN provides ₹6,000 annual income support to farmers.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-27',
    question: 'India\'s first indigenous aircraft carrier name?',
    options: ['INS Vikrant', 'INS Vikramaditya', 'INS Arihant', 'INS Virat'],
    correctAnswer: 0,
    explanation: 'INS Vikrant is India\'s first indigenously built aircraft carrier.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-28',
    question: 'National Education Policy was introduced in?',
    options: ['2019', '2020', '2021', '2022'],
    correctAnswer: 1,
    explanation: 'National Education Policy (NEP) 2020 was introduced.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-29',
    question: 'India\'s GDP growth rate in 2023-24?',
    options: ['5-6%', '6-7%', '7-8%', '8-9%'],
    correctAnswer: 2,
    explanation: 'India\'s GDP grew around 7-8% in 2023-24.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-30',
    question: 'Which Indian city has highest metro rail network?',
    options: ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata'],
    correctAnswer: 0,
    explanation: 'Delhi has the largest metro rail network in India.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-31',
    question: 'India\'s solar energy target by 2030?',
    options: ['100 GW', '200 GW', '300 GW', '500 GW'],
    correctAnswer: 3,
    explanation: 'India aims to achieve 500 GW renewable capacity by 2030.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-32',
    question: 'India\'s first High-Speed Rail Corporation formed in?',
    options: ['2014', '2015', '2016', '2017'],
    correctAnswer: 2,
    explanation: 'National High Speed Rail Corporation was formed in 2016.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },
  {
    id: 'ga-ca-m-33',
    question: 'Startup India initiative launched in?',
    options: ['2014', '2015', '2016', '2017'],
    correctAnswer: 2,
    explanation: 'Startup India was launched in January 2016.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'medium'
  },

  // Hard (12 questions)
  {
    id: 'ga-ca-h-21',
    question: 'India\'s maiden solar mission name?',
    options: ['Surya-1', 'Aditya-L1', 'Solar Probe', 'Helios'],
    correctAnswer: 1,
    explanation: 'Aditya-L1 is India\'s first solar observation mission.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-22',
    question: 'India\'s rank in Global Innovation Index 2023?',
    options: ['35-40', '40-45', '45-50', '50-55'],
    correctAnswer: 1,
    explanation: 'India ranked 40th in Global Innovation Index 2023.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-23',
    question: 'What is the corpus of National Infrastructure Pipeline?',
    options: ['₹50 lakh crore', '₹75 lakh crore', '₹100 lakh crore', '₹111 lakh crore'],
    correctAnswer: 3,
    explanation: 'National Infrastructure Pipeline has ₹111 lakh crore corpus.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-24',
    question: 'India\'s first indigenously developed vaccine for COVID-19?',
    options: ['Covaxin', 'Covishield', 'Sputnik V', 'ZyCoV-D'],
    correctAnswer: 0,
    explanation: 'Covaxin was India\'s first indigenous COVID-19 vaccine.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-25',
    question: 'India\'s rank in Ease of Doing Business 2020?',
    options: ['53', '63', '73', '83'],
    correctAnswer: 1,
    explanation: 'India ranked 63rd in Ease of Doing Business 2020.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-26',
    question: 'Which article was repealed for Jammu & Kashmir in 2019?',
    options: ['Article 356', 'Article 370', 'Article 371', 'Article 377'],
    correctAnswer: 1,
    explanation: 'Article 370 was repealed in August 2019.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-27',
    question: 'India\'s first water metro project location?',
    options: ['Mumbai', 'Kochi', 'Kolkata', 'Guwahati'],
    correctAnswer: 1,
    explanation: 'Kochi launched India\'s first water metro in 2023.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-28',
    question: 'GST implementation year in India?',
    options: ['2015', '2016', '2017', '2018'],
    correctAnswer: 2,
    explanation: 'GST was implemented on July 1, 2017.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-29',
    question: 'Insolvency and Bankruptcy Code enacted in?',
    options: ['2014', '2015', '2016', '2017'],
    correctAnswer: 2,
    explanation: 'IBC was enacted in 2016.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-30',
    question: 'India\'s rank in Global Hunger Index 2023?',
    options: ['101', '107', '111', '121'],
    correctAnswer: 2,
    explanation: 'India ranked 111th out of 125 countries in GHI 2023.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-31',
    question: 'Production Linked Incentive scheme budget?',
    options: ['₹1 lakh crore', '₹1.5 lakh crore', '₹1.97 lakh crore', '₹2.5 lakh crore'],
    correctAnswer: 2,
    explanation: 'PLI scheme has an outlay of ₹1.97 lakh crore.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },
  {
    id: 'ga-ca-h-32',
    question: 'India\'s first indigenous regional jet?',
    options: ['Saras', 'NAL Saras', 'Tejas', 'Regional Transport Aircraft'],
    correctAnswer: 3,
    explanation: 'India is developing Regional Transport Aircraft (RTA).',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'hard'
  },

  // ============= IMPORTANT DAYS (30 Questions) =============
  
  // Easy (10 questions)
  {
    id: 'ga-id-e-11',
    question: 'When is Independence Day celebrated in India?',
    options: ['26 January', '15 August', '2 October', '14 November'],
    correctAnswer: 1,
    explanation: 'Independence Day is celebrated on 15 August.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-12',
    question: 'When is Republic Day celebrated?',
    options: ['26 January', '15 August', '2 October', '5 September'],
    correctAnswer: 0,
    explanation: 'Republic Day is celebrated on 26 January.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-13',
    question: 'Gandhi Jayanti is observed on?',
    options: ['30 January', '2 October', '14 November', '15 August'],
    correctAnswer: 1,
    explanation: 'Gandhi Jayanti is celebrated on 2 October (Gandhi\'s birthday).',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-14',
    question: 'World Environment Day is on?',
    options: ['5 June', '22 April', '21 March', '16 September'],
    correctAnswer: 0,
    explanation: 'World Environment Day is celebrated on 5 June.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-15',
    question: 'Teacher\'s Day in India is celebrated on?',
    options: ['14 November', '5 September', '2 October', '15 August'],
    correctAnswer: 1,
    explanation: 'Teacher\'s Day is celebrated on 5 September (Dr. Radhakrishnan\'s birthday).',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-16',
    question: 'Children\'s Day in India is on?',
    options: ['14 November', '5 September', '26 January', '15 August'],
    correctAnswer: 0,
    explanation: 'Children\'s Day is celebrated on 14 November (Nehru\'s birthday).',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-17',
    question: 'International Women\'s Day is on?',
    options: ['8 March', '19 November', '11 October', '10 December'],
    correctAnswer: 0,
    explanation: 'International Women\'s Day is celebrated on 8 March.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-18',
    question: 'World Health Day is observed on?',
    options: ['7 April', '21 June', '1 December', '24 March'],
    correctAnswer: 0,
    explanation: 'World Health Day is celebrated on 7 April.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-19',
    question: 'International Yoga Day is on?',
    options: ['21 June', '7 April', '5 June', '14 November'],
    correctAnswer: 0,
    explanation: 'International Yoga Day is celebrated on 21 June.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-20',
    question: 'World AIDS Day is on?',
    options: ['1 December', '7 April', '24 March', '20 November'],
    correctAnswer: 0,
    explanation: 'World AIDS Day is observed on 1 December.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },

  // Medium (10 questions)
  {
    id: 'ga-id-m-11',
    question: 'National Science Day is celebrated on?',
    options: ['28 February', '15 August', '26 January', '2 October'],
    correctAnswer: 0,
    explanation: 'National Science Day is celebrated on 28 February.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },
  {
    id: 'ga-id-m-12',
    question: 'World Press Freedom Day is on?',
    options: ['3 May', '5 June', '10 December', '24 October'],
    correctAnswer: 0,
    explanation: 'World Press Freedom Day is observed on 3 May.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },
  {
    id: 'ga-id-m-13',
    question: 'International Day of Peace is on?',
    options: ['21 September', '24 October', '10 December', '20 November'],
    correctAnswer: 0,
    explanation: 'International Day of Peace is celebrated on 21 September.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },
  {
    id: 'ga-id-m-14',
    question: 'World Water Day is observed on?',
    options: ['22 March', '5 June', '7 April', '21 June'],
    correctAnswer: 0,
    explanation: 'World Water Day is celebrated on 22 March.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },
  {
    id: 'ga-id-m-15',
    question: 'Earth Day is celebrated on?',
    options: ['22 April', '5 June', '21 March', '16 September'],
    correctAnswer: 0,
    explanation: 'Earth Day is observed on 22 April.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },
  {
    id: 'ga-id-m-16',
    question: 'National Unity Day (Rashtriya Ekta Diwas) is on?',
    options: ['31 October', '2 October', '14 November', '26 January'],
    correctAnswer: 0,
    explanation: 'National Unity Day is celebrated on 31 October (Sardar Patel\'s birthday).',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },
  {
    id: 'ga-id-m-17',
    question: 'World Food Day is on?',
    options: ['16 October', '5 June', '7 April', '1 May'],
    correctAnswer: 0,
    explanation: 'World Food Day is celebrated on 16 October.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },
  {
    id: 'ga-id-m-18',
    question: 'International Literacy Day is on?',
    options: ['8 September', '5 September', '14 November', '11 October'],
    correctAnswer: 0,
    explanation: 'International Literacy Day is observed on 8 September.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },
  {
    id: 'ga-id-m-19',
    question: 'World Population Day is on?',
    options: ['11 July', '5 June', '21 June', '7 April'],
    correctAnswer: 0,
    explanation: 'World Population Day is observed on 11 July.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },
  {
    id: 'ga-id-m-20',
    question: 'World Human Rights Day is on?',
    options: ['10 December', '24 October', '20 November', '21 September'],
    correctAnswer: 0,
    explanation: 'World Human Rights Day is celebrated on 10 December.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'medium'
  },

  // Hard (10 questions)
  {
    id: 'ga-id-h-11',
    question: 'National Sports Day in India is on?',
    options: ['29 August', '14 November', '5 September', '2 October'],
    correctAnswer: 0,
    explanation: 'National Sports Day is celebrated on 29 August (Major Dhyan Chand\'s birthday).',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },
  {
    id: 'ga-id-h-12',
    question: 'World Tuberculosis Day is on?',
    options: ['24 March', '7 April', '1 December', '20 November'],
    correctAnswer: 0,
    explanation: 'World Tuberculosis Day is observed on 24 March.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },
  {
    id: 'ga-id-h-13',
    question: 'International Day for Biological Diversity is on?',
    options: ['22 May', '5 June', '21 March', '16 September'],
    correctAnswer: 0,
    explanation: 'International Day for Biological Diversity is observed on 22 May.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },
  {
    id: 'ga-id-h-14',
    question: 'World Meteorological Day is on?',
    options: ['23 March', '22 April', '5 June', '7 April'],
    correctAnswer: 0,
    explanation: 'World Meteorological Day is celebrated on 23 March.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },
  {
    id: 'ga-id-h-15',
    question: 'National Maritime Day in India is on?',
    options: ['5 April', '5 June', '7 April', '21 June'],
    correctAnswer: 0,
    explanation: 'National Maritime Day is celebrated on 5 April.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },
  {
    id: 'ga-id-h-16',
    question: 'World Red Cross Day is on?',
    options: ['8 May', '7 April', '1 December', '24 October'],
    correctAnswer: 0,
    explanation: 'World Red Cross Day is observed on 8 May.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },
  {
    id: 'ga-id-h-17',
    question: 'World Standards Day is on?',
    options: ['14 October', '16 October', '24 October', '10 December'],
    correctAnswer: 0,
    explanation: 'World Standards Day is celebrated on 14 October.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },
  {
    id: 'ga-id-h-18',
    question: 'World Diabetes Day is on?',
    options: ['14 November', '1 December', '7 April', '24 March'],
    correctAnswer: 0,
    explanation: 'World Diabetes Day is observed on 14 November.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },
  {
    id: 'ga-id-h-19',
    question: 'World Cancer Day is on?',
    options: ['4 February', '7 April', '1 December', '24 March'],
    correctAnswer: 0,
    explanation: 'World Cancer Day is observed on 4 February.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },
  {
    id: 'ga-id-h-20',
    question: 'International Mother Language Day is on?',
    options: ['21 February', '8 March', '5 September', '14 November'],
    correctAnswer: 0,
    explanation: 'International Mother Language Day is celebrated on 21 February.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'hard'
  },

];
