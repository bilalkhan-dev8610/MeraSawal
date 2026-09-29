import type { DifficultyLevel } from './categoriesData';
import type { Question } from './questionsData';

// Supplementary questions for missing categories/subcategories
export const supplementaryQuestions: Question[] = [
  
  // ============= GENERAL AWARENESS - CURRENT AFFAIRS (Easy) =============
  {
    id: 'ga-ca-e-1',
    question: 'Who is the current President of India (as of 2024)?',
    options: ['Ram Nath Kovind', 'Droupadi Murmu', 'Pratibha Patil', 'APJ Abdul Kalam'],
    correctAnswer: 1,
    explanation: 'Droupadi Murmu is the 15th President of India.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-2',
    question: 'Chandrayaan-3 landed on which part of Moon?',
    options: ['North Pole', 'South Pole', 'Equator', 'Far Side'],
    correctAnswer: 1,
    explanation: 'Chandrayaan-3 landed on lunar South Pole in August 2023.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-3',
    question: 'Which city hosted G20 Summit 2023?',
    options: ['Mumbai', 'New Delhi', 'Bengaluru', 'Hyderabad'],
    correctAnswer: 1,
    explanation: 'New Delhi hosted G20 Leaders Summit in September 2023.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-4',
    question: 'Who won ICC Cricket World Cup 2023?',
    options: ['India', 'Australia', 'England', 'Pakistan'],
    correctAnswer: 1,
    explanation: 'Australia won ODI World Cup 2023 in Ahmedabad.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-5',
    question: 'What is UPI?',
    options: ['Universal Payment Interface', 'Unified Payments Interface', 'United Payment India', 'Urban Payment'],
    correctAnswer: 1,
    explanation: 'UPI is Unified Payments Interface for digital payments.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-6',
    question: 'What does AI stand for?',
    options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Intelligence', 'Applied Intelligence'],
    correctAnswer: 1,
    explanation: 'AI stands for Artificial Intelligence.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-7',
    question: 'India\'s first solar mission name?',
    options: ['Surya-1', 'Aditya-L1', 'Solar-1', 'Ravi'],
    correctAnswer: 1,
    explanation: 'Aditya-L1 is India\'s first solar observation mission.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-8',
    question: 'Which app is banned in India since 2020?',
    options: ['Instagram', 'TikTok', 'YouTube', 'Snapchat'],
    correctAnswer: 1,
    explanation: 'TikTok was banned in India in June 2020.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-9',
    question: 'What is 5G?',
    options: ['5th Generation mobile network', 'Five Google', '5 Gigabyte', 'Five Government'],
    correctAnswer: 0,
    explanation: '5G is fifth generation mobile network technology.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-10',
    question: 'FIFA World Cup 2022 hosted by?',
    options: ['Brazil', 'Germany', 'Qatar', 'Russia'],
    correctAnswer: 2,
    explanation: 'Qatar hosted FIFA World Cup in 2022.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-11',
    question: 'What is ChatGPT?',
    options: ['Video game', 'AI chatbot', 'Social media', 'Search engine'],
    correctAnswer: 1,
    explanation: 'ChatGPT is AI-powered chatbot by OpenAI.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-12',
    question: 'India\'s longest metro network?',
    options: ['Mumbai', 'Delhi', 'Bengaluru', 'Kolkata'],
    correctAnswer: 1,
    explanation: 'Delhi Metro is India\'s longest metro network.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-13',
    question: 'Full form of GST?',
    options: ['General Sales Tax', 'Goods and Services Tax', 'Government Sales Tax', 'Global Service Tax'],
    correctAnswer: 1,
    explanation: 'GST is Goods and Services Tax implemented in 2017.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-14',
    question: 'Which Indian won Nobel Peace Prize 2014?',
    options: ['Narendra Modi', 'Kailash Satyarthi', 'Amartya Sen', 'Malala'],
    correctAnswer: 1,
    explanation: 'Kailash Satyarthi won for child rights work.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-15',
    question: 'What is Ayushman Bharat?',
    options: ['Education scheme', 'Health insurance', 'Employment scheme', 'Housing scheme'],
    correctAnswer: 1,
    explanation: 'Ayushman Bharat is health insurance for poor families.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-16',
    question: 'BRICS does NOT include?',
    options: ['Brazil', 'Russia', 'Indonesia', 'China'],
    correctAnswer: 2,
    explanation: 'BRICS: Brazil, Russia, India, China, South Africa.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-17',
    question: 'Chess Olympiad 2022 hosted by?',
    options: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Maharashtra'],
    correctAnswer: 1,
    explanation: '44th Chess Olympiad in Chennai, Tamil Nadu.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-18',
    question: 'European Union currency?',
    options: ['Dollar', 'Euro', 'Pound', 'Franc'],
    correctAnswer: 1,
    explanation: 'Euro (€) is official currency of EU.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-19',
    question: 'India G20 Presidency theme?',
    options: ['Unity in Diversity', 'One Earth One Family One Future', 'Digital India', 'Make in India'],
    correctAnswer: 1,
    explanation: 'Vasudhaiva Kutumbakam - One Earth One Family One Future.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },
  {
    id: 'ga-ca-e-20',
    question: 'Ram Mandir inaugurated in which year?',
    options: ['2022', '2023', '2024', '2025'],
    correctAnswer: 2,
    explanation: 'Ram Mandir in Ayodhya inaugurated in January 2024.',
    categoryId: 'general-awareness',
    subCategoryId: 'current-affairs',
    level: 'easy'
  },

  // ============= GENERAL AWARENESS - IMPORTANT DAYS (Easy) =============
  {
    id: 'ga-id-e-1',
    question: 'When is India\'s Independence Day?',
    options: ['26 January', '15 August', '2 October', '26 November'],
    correctAnswer: 1,
    explanation: 'Independence Day is celebrated on 15 August.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-2',
    question: 'When is Republic Day in India?',
    options: ['15 August', '2 October', '26 January', '14 November'],
    correctAnswer: 2,
    explanation: 'Republic Day is celebrated on 26 January.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-3',
    question: 'When is Gandhi Jayanti?',
    options: ['15 August', '2 October', '26 January', '14 November'],
    correctAnswer: 1,
    explanation: 'Gandhi Jayanti is on 2 October.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-4',
    question: 'When is International Women\'s Day?',
    options: ['8 March', '15 August', '1 May', '14 February'],
    correctAnswer: 0,
    explanation: 'International Women\'s Day is on 8 March.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-5',
    question: 'When is World Environment Day?',
    options: ['1 January', '22 April', '5 June', '21 March'],
    correctAnswer: 2,
    explanation: 'World Environment Day is on 5 June.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-6',
    question: 'When is Teacher\'s Day in India?',
    options: ['5 September', '14 November', '15 August', '2 October'],
    correctAnswer: 0,
    explanation: 'Teacher\'s Day is on 5 September.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-7',
    question: 'When is Children\'s Day in India?',
    options: ['5 September', '14 November', '26 January', '15 August'],
    correctAnswer: 1,
    explanation: 'Children\'s Day is on 14 November.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-8',
    question: 'When is International Labour Day?',
    options: ['1 May', '1 January', '15 August', '25 December'],
    correctAnswer: 0,
    explanation: 'International Labour Day is on 1 May.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-9',
    question: 'When is World Health Day?',
    options: ['7 April', '5 June', '21 March', '1 December'],
    correctAnswer: 0,
    explanation: 'World Health Day is on 7 April.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-10',
    question: 'When is International Yoga Day?',
    options: ['21 June', '15 August', '2 October', '26 January'],
    correctAnswer: 0,
    explanation: 'International Yoga Day is on 21 June.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-11',
    question: 'When is Earth Day?',
    options: ['22 April', '5 June', '21 March', '1 January'],
    correctAnswer: 0,
    explanation: 'Earth Day is on 22 April.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-12',
    question: 'When is World AIDS Day?',
    options: ['1 December', '7 April', '5 June', '21 March'],
    correctAnswer: 0,
    explanation: 'World AIDS Day is on 1 December.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-13',
    question: 'When is Human Rights Day?',
    options: ['10 December', '26 January', '15 August', '2 October'],
    correctAnswer: 0,
    explanation: 'Human Rights Day is on 10 December.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-14',
    question: 'When is National Science Day in India?',
    options: ['28 February', '15 August', '26 January', '5 September'],
    correctAnswer: 0,
    explanation: 'National Science Day is on 28 February.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-15',
    question: 'When is World Water Day?',
    options: ['22 March', '5 June', '7 April', '21 March'],
    correctAnswer: 0,
    explanation: 'World Water Day is on 22 March.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-16',
    question: 'When is International Mother Language Day?',
    options: ['21 February', '8 March', '1 May', '5 September'],
    correctAnswer: 0,
    explanation: 'International Mother Language Day is on 21 February.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-17',
    question: 'When is World No Tobacco Day?',
    options: ['31 May', '5 June', '7 April', '1 December'],
    correctAnswer: 0,
    explanation: 'World No Tobacco Day is on 31 May.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-18',
    question: 'When is International Peace Day?',
    options: ['21 September', '2 October', '26 January', '10 December'],
    correctAnswer: 0,
    explanation: 'International Day of Peace is on 21 September.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-19',
    question: 'When is World Food Day?',
    options: ['16 October', '5 June', '7 April', '1 May'],
    correctAnswer: 0,
    explanation: 'World Food Day is on 16 October.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },
  {
    id: 'ga-id-e-20',
    question: 'When is Constitution Day?',
    options: ['26 November', '26 January', '15 August', '2 October'],
    correctAnswer: 0,
    explanation: 'Constitution Day is on 26 November.',
    categoryId: 'general-awareness',
    subCategoryId: 'important-days',
    level: 'easy'
  },

  // ============= GENERAL AWARENESS - AWARDS & HONORS (Easy) =============
  {
    id: 'ga-ah-e-1',
    question: 'What is India\'s highest civilian award?',
    options: ['Padma Vibhushan', 'Bharat Ratna', 'Padma Bhushan', 'Padma Shri'],
    correctAnswer: 1,
    explanation: 'Bharat Ratna is the highest civilian award.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-2',
    question: 'Who awards the Nobel Prize?',
    options: ['UN', 'Sweden & Norway', 'USA', 'UK'],
    correctAnswer: 1,
    explanation: 'Nobel Prizes are awarded by Sweden and Norway.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-3',
    question: 'Oscar is related to which field?',
    options: ['Sports', 'Films', 'Literature', 'Science'],
    correctAnswer: 1,
    explanation: 'Oscar (Academy Award) is for films.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-4',
    question: 'Booker Prize is for which field?',
    options: ['Science', 'Literature', 'Sports', 'Music'],
    correctAnswer: 1,
    explanation: 'Booker Prize is for literature.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-5',
    question: 'Arjuna Award is for?',
    options: ['Sports', 'Literature', 'Films', 'Music'],
    correctAnswer: 0,
    explanation: 'Arjuna Award is for sports excellence.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-6',
    question: 'Grammy Award is for?',
    options: ['Films', 'Music', 'Sports', 'Literature'],
    correctAnswer: 1,
    explanation: 'Grammy Awards are for music.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-7',
    question: 'Param Vir Chakra is for?',
    options: ['Civilian bravery', 'Military bravery', 'Sports', 'Literature'],
    correctAnswer: 1,
    explanation: 'Param Vir Chakra is highest military award.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-8',
    question: 'Saraswati Samman is for?',
    options: ['Music', 'Dance', 'Literature', 'Sports'],
    correctAnswer: 2,
    explanation: 'Saraswati Samman is for literature.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-9',
    question: 'Dronacharya Award is for?',
    options: ['Athletes', 'Coaches', 'Writers', 'Musicians'],
    correctAnswer: 1,
    explanation: 'Dronacharya Award is for sports coaches.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-10',
    question: 'Dadasaheb Phalke Award is for?',
    options: ['Literature', 'Cinema', 'Music', 'Sports'],
    correctAnswer: 1,
    explanation: 'Dadasaheb Phalke Award is for cinema.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-11',
    question: 'Pulitzer Prize is from which country?',
    options: ['UK', 'USA', 'France', 'India'],
    correctAnswer: 1,
    explanation: 'Pulitzer Prize is an American award.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-12',
    question: 'Jnanpith Award is for?',
    options: ['Literature', 'Science', 'Sports', 'Music'],
    correctAnswer: 0,
    explanation: 'Jnanpith Award is for literature.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-13',
    question: 'FIFA Ballon d\'Or is for?',
    options: ['Cricket', 'Football', 'Hockey', 'Tennis'],
    correctAnswer: 1,
    explanation: 'Ballon d\'Or is for best football player.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-14',
    question: 'Padma Shri is which rank award?',
    options: ['First', 'Second', 'Third', 'Fourth'],
    correctAnswer: 3,
    explanation: 'Padma Shri is the fourth highest civilian award.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-15',
    question: 'Nobel Prize is NOT given for?',
    options: ['Physics', 'Chemistry', 'Mathematics', 'Literature'],
    correctAnswer: 2,
    explanation: 'There is no Nobel Prize for Mathematics.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-16',
    question: 'Ashoka Chakra is for?',
    options: ['Sports', 'Peacetime bravery', 'Literature', 'Music'],
    correctAnswer: 1,
    explanation: 'Ashoka Chakra is for peacetime bravery.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-17',
    question: 'Kalinga Prize is for?',
    options: ['Literature', 'Science popularization', 'Sports', 'Music'],
    correctAnswer: 1,
    explanation: 'Kalinga Prize is for science popularization.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-18',
    question: 'Ramon Magsaysay Award is from?',
    options: ['India', 'Philippines', 'China', 'Japan'],
    correctAnswer: 1,
    explanation: 'Ramon Magsaysay Award is from Philippines.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-19',
    question: 'Khel Ratna Award renamed to?',
    options: ['Arjuna Award', 'Major Dhyan Chand Khel Ratna', 'Dronacharya Award', 'Bharat Ratna'],
    correctAnswer: 1,
    explanation: 'Renamed to Major Dhyan Chand Khel Ratna Award.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },
  {
    id: 'ga-ah-e-20',
    question: 'Gandhi Peace Prize is given by?',
    options: ['UN', 'India', 'Norway', 'Sweden'],
    correctAnswer: 1,
    explanation: 'Gandhi Peace Prize is given by Government of India.',
    categoryId: 'general-awareness',
    subCategoryId: 'awards-honors',
    level: 'easy'
  },

  // ============= GENERAL AWARENESS - BOOKS & AUTHORS (Easy) =============
  {
    id: 'ga-ba-e-1',
    question: 'Who wrote "Gitanjali"?',
    options: ['Premchand', 'Rabindranath Tagore', 'R.K. Narayan', 'Mulk Raj Anand'],
    correctAnswer: 1,
    explanation: 'Rabindranath Tagore wrote Gitanjali.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-2',
    question: 'Who is the author of "Discovery of India"?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel', 'Subhas Bose'],
    correctAnswer: 1,
    explanation: 'Jawaharlal Nehru wrote Discovery of India.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-3',
    question: 'Who wrote "My Experiments with Truth"?',
    options: ['Nehru', 'Mahatma Gandhi', 'Ambedkar', 'Tilak'],
    correctAnswer: 1,
    explanation: 'Mahatma Gandhi wrote his autobiography.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-4',
    question: 'Author of "Malgudi Days"?',
    options: ['Ruskin Bond', 'R.K. Narayan', 'Premchand', 'Tagore'],
    correctAnswer: 1,
    explanation: 'R.K. Narayan wrote Malgudi Days.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-5',
    question: 'Who wrote "Wings of Fire"?',
    options: ['Narendra Modi', 'APJ Abdul Kalam', 'Rajendra Prasad', 'Zakir Hussain'],
    correctAnswer: 1,
    explanation: 'APJ Abdul Kalam wrote Wings of Fire.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-6',
    question: 'Author of "Godan"?',
    options: ['Munshi Premchand', 'Harivansh Rai Bachchan', 'Mahadevi Verma', 'Jaishankar Prasad'],
    correctAnswer: 0,
    explanation: 'Munshi Premchand wrote Godan.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-7',
    question: 'Who wrote "The God of Small Things"?',
    options: ['Arundhati Roy', 'Kiran Desai', 'Jhumpa Lahiri', 'Salman Rushdie'],
    correctAnswer: 0,
    explanation: 'Arundhati Roy wrote The God of Small Things.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-8',
    question: 'Author of "Train to Pakistan"?',
    options: ['Vikram Seth', 'Khushwant Singh', 'Amitav Ghosh', 'Shashi Tharoor'],
    correctAnswer: 1,
    explanation: 'Khushwant Singh wrote Train to Pakistan.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-9',
    question: 'Who wrote "India Wins Freedom"?',
    options: ['Nehru', 'Gandhi', 'Maulana Abul Kalam Azad', 'Patel'],
    correctAnswer: 2,
    explanation: 'Maulana Azad wrote India Wins Freedom.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-10',
    question: 'Author of "Midnight\'s Children"?',
    options: ['Vikram Seth', 'Salman Rushdie', 'Amitav Ghosh', 'V.S. Naipaul'],
    correctAnswer: 1,
    explanation: 'Salman Rushdie wrote Midnight\'s Children.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-11',
    question: 'Who wrote "The White Tiger"?',
    options: ['Chetan Bhagat', 'Aravind Adiga', 'Amish Tripathi', 'Durjoy Datta'],
    correctAnswer: 1,
    explanation: 'Aravind Adiga wrote The White Tiger.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-12',
    question: 'Author of "Anand Math"?',
    options: ['Rabindranath Tagore', 'Bankim Chandra Chatterjee', 'Sarojini Naidu', 'Premchand'],
    correctAnswer: 1,
    explanation: 'Bankim Chandra wrote Anand Math (Vande Mataram).',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-13',
    question: 'Who wrote "Five Point Someone"?',
    options: ['Amish Tripathi', 'Chetan Bhagat', 'Durjoy Datta', 'Ravinder Singh'],
    correctAnswer: 1,
    explanation: 'Chetan Bhagat wrote Five Point Someone.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-14',
    question: 'Author of "The Guide"?',
    options: ['Mulk Raj Anand', 'R.K. Narayan', 'Raja Rao', 'Kamala Das'],
    correctAnswer: 1,
    explanation: 'R.K. Narayan wrote The Guide.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-15',
    question: 'Who wrote "Ignited Minds"?',
    options: ['Narendra Modi', 'APJ Abdul Kalam', 'Manmohan Singh', 'Atal Bihari Vajpayee'],
    correctAnswer: 1,
    explanation: 'APJ Abdul Kalam wrote Ignited Minds.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-16',
    question: 'Author of "Coolie"?',
    options: ['Premchand', 'Mulk Raj Anand', 'R.K. Narayan', 'Raja Rao'],
    correctAnswer: 1,
    explanation: 'Mulk Raj Anand wrote Coolie.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-17',
    question: 'Who wrote "A Suitable Boy"?',
    options: ['Vikram Seth', 'Amitav Ghosh', 'Salman Rushdie', 'Shashi Tharoor'],
    correctAnswer: 0,
    explanation: 'Vikram Seth wrote A Suitable Boy.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-18',
    question: 'Author of "The Immortals of Meluha"?',
    options: ['Chetan Bhagat', 'Amish Tripathi', 'Ashwin Sanghi', 'Devdutt Pattanaik'],
    correctAnswer: 1,
    explanation: 'Amish Tripathi wrote Shiva Trilogy.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-19',
    question: 'Who wrote "Interpreter of Maladies"?',
    options: ['Kiran Desai', 'Jhumpa Lahiri', 'Arundhati Roy', 'Anita Desai'],
    correctAnswer: 1,
    explanation: 'Jhumpa Lahiri wrote Interpreter of Maladies.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },
  {
    id: 'ga-ba-e-20',
    question: 'Author of "Revolution 2020"?',
    options: ['Amish Tripathi', 'Chetan Bhagat', 'Ravinder Singh', 'Durjoy Datta'],
    correctAnswer: 1,
    explanation: 'Chetan Bhagat wrote Revolution 2020.',
    categoryId: 'general-awareness',
    subCategoryId: 'books-authors',
    level: 'easy'
  },

  // ============= HISTORY - ANCIENT INDIA (Easy) =============
  {
    id: 'hi-ai-e-1',
    question: 'Harappa Civilization is also known as?',
    options: ['Vedic Civilization', 'Indus Valley Civilization', 'Aryan Civilization', 'Dravidian Civilization'],
    correctAnswer: 1,
    explanation: 'Harappa is part of Indus Valley Civilization.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-2',
    question: 'Who was the founder of Maurya Empire?',
    options: ['Ashoka', 'Chandragupta Maurya', 'Bindusara', 'Samudragupta'],
    correctAnswer: 1,
    explanation: 'Chandragupta Maurya founded the Maurya Empire.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-3',
    question: 'Gautam Buddha was born in?',
    options: ['Kapilvastu', 'Varanasi', 'Pataliputra', 'Taxila'],
    correctAnswer: 0,
    explanation: 'Buddha was born in Lumbini, Kapilvastu.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-4',
    question: 'Who wrote Arthashastra?',
    options: ['Valmiki', 'Kautilya', 'Kalidasa', 'Tulsidas'],
    correctAnswer: 1,
    explanation: 'Kautilya (Chanakya) wrote Arthashastra.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-5',
    question: 'Ashoka belonged to which dynasty?',
    options: ['Gupta', 'Maurya', 'Mughal', 'Chola'],
    correctAnswer: 1,
    explanation: 'Ashoka was a Mauryan emperor.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-6',
    question: 'Vedas are how many in number?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'There are 4 Vedas: Rig, Yajur, Sama, Atharva.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-7',
    question: 'Which language was used in ancient India?',
    options: ['Hindi', 'Sanskrit', 'Tamil', 'Prakrit'],
    correctAnswer: 1,
    explanation: 'Sanskrit was the main language of ancient India.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-8',
    question: 'Nalanda University was in which state?',
    options: ['UP', 'Bihar', 'MP', 'Rajasthan'],
    correctAnswer: 1,
    explanation: 'Nalanda University was in Bihar.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-9',
    question: 'Who was the greatest king of Gupta dynasty?',
    options: ['Chandragupta I', 'Samudragupta', 'Chandragupta II', 'Kumaragupta'],
    correctAnswer: 1,
    explanation: 'Samudragupta was called Napoleon of India.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-10',
    question: 'Mahavira was the founder of?',
    options: ['Buddhism', 'Jainism', 'Sikhism', 'Hinduism'],
    correctAnswer: 1,
    explanation: 'Mahavira was the 24th Tirthankara of Jainism.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-11',
    question: 'Ajanta caves are famous for?',
    options: ['Sculptures', 'Paintings', 'Architecture', 'All of these'],
    correctAnswer: 3,
    explanation: 'Ajanta caves have Buddhist art and paintings.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-12',
    question: 'Mohenjo-Daro is located in?',
    options: ['India', 'Pakistan', 'Afghanistan', 'Nepal'],
    correctAnswer: 1,
    explanation: 'Mohenjo-Daro is in Sindh, Pakistan.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-13',
    question: 'The Iron Pillar is located in?',
    options: ['Agra', 'Delhi', 'Jaipur', 'Mumbai'],
    correctAnswer: 1,
    explanation: 'Iron Pillar is in Qutub Complex, Delhi.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-14',
    question: 'Who wrote Ramayana?',
    options: ['Valmiki', 'Vyasa', 'Kalidasa', 'Tulsidas'],
    correctAnswer: 0,
    explanation: 'Valmiki wrote the original Ramayana in Sanskrit.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-15',
    question: 'Battle of Kalinga was fought by?',
    options: ['Chandragupta', 'Ashoka', 'Bindusara', 'Samudragupta'],
    correctAnswer: 1,
    explanation: 'Ashoka fought the Battle of Kalinga.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-16',
    question: 'Mahabharata was written by?',
    options: ['Valmiki', 'Vyasa', 'Kalidasa', 'Tulsidas'],
    correctAnswer: 1,
    explanation: 'Vyasa wrote the Mahabharata.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-17',
    question: 'Taxila was an ancient center of?',
    options: ['Trade', 'Education', 'Religion', 'Administration'],
    correctAnswer: 1,
    explanation: 'Taxila was a famous education center.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-18',
    question: 'Sanchi Stupa is in which state?',
    options: ['UP', 'Bihar', 'MP', 'Maharashtra'],
    correctAnswer: 2,
    explanation: 'Sanchi Stupa is in Madhya Pradesh.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-19',
    question: 'Chola dynasty was famous for?',
    options: ['Art', 'Architecture', 'Naval power', 'All of these'],
    correctAnswer: 3,
    explanation: 'Cholas excelled in art, architecture, and navy.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },
  {
    id: 'hi-ai-e-20',
    question: 'Who invaded India in 326 BC?',
    options: ['Alexander', 'Genghis Khan', 'Timur', 'Babur'],
    correctAnswer: 0,
    explanation: 'Alexander the Great invaded India in 326 BC.',
    categoryId: 'history',
    subCategoryId: 'ancient-history',
    level: 'easy'
  },

  // ============= HISTORY - MEDIEVAL INDIA (Easy) =============
  {
    id: 'hi-mi-e-1',
    question: 'Who founded the Mughal Empire?',
    options: ['Akbar', 'Humayun', 'Babur', 'Shah Jahan'],
    correctAnswer: 2,
    explanation: 'Babur founded the Mughal Empire in 1526.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-2',
    question: 'Taj Mahal was built by?',
    options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'],
    correctAnswer: 2,
    explanation: 'Shah Jahan built Taj Mahal for Mumtaz Mahal.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-3',
    question: 'Akbar was the son of?',
    options: ['Babur', 'Humayun', 'Jahangir', 'Shah Jahan'],
    correctAnswer: 1,
    explanation: 'Akbar was the son of Humayun.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-4',
    question: 'Who was Akbar\'s court musician?',
    options: ['Birbal', 'Tansen', 'Todar Mal', 'Man Singh'],
    correctAnswer: 1,
    explanation: 'Tansen was one of the nine gems of Akbar.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-5',
    question: 'Qutub Minar was built by?',
    options: ['Akbar', 'Qutub-ud-din Aibak', 'Alauddin Khilji', 'Muhammad Ghori'],
    correctAnswer: 1,
    explanation: 'Qutub-ud-din Aibak started building Qutub Minar.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-6',
    question: 'Shivaji was the founder of?',
    options: ['Mughal Empire', 'Maratha Empire', 'Vijayanagar Empire', 'Delhi Sultanate'],
    correctAnswer: 1,
    explanation: 'Shivaji founded the Maratha Empire.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-7',
    question: 'The Battle of Panipat (1526) was between?',
    options: ['Babur and Ibrahim Lodi', 'Akbar and Hemu', 'Prithviraj and Ghori', 'None'],
    correctAnswer: 0,
    explanation: 'First Battle of Panipat: Babur vs Ibrahim Lodi.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-8',
    question: 'Humayun\'s Tomb is in?',
    options: ['Agra', 'Delhi', 'Fatehpur Sikri', 'Lahore'],
    correctAnswer: 1,
    explanation: 'Humayun\'s Tomb is in Delhi.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-9',
    question: 'Prithviraj Chauhan fought against?',
    options: ['Babur', 'Muhammad Ghori', 'Mahmud of Ghazni', 'Timur'],
    correctAnswer: 1,
    explanation: 'Prithviraj fought Muhammad Ghori.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-10',
    question: 'Rana Pratap was the ruler of?',
    options: ['Mewar', 'Marwar', 'Amber', 'Jaisalmer'],
    correctAnswer: 0,
    explanation: 'Rana Pratap ruled Mewar.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-11',
    question: 'Red Fort was built by?',
    options: ['Akbar', 'Shah Jahan', 'Aurangzeb', 'Jahangir'],
    correctAnswer: 1,
    explanation: 'Shah Jahan built Red Fort.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-12',
    question: 'Din-i-Ilahi was founded by?',
    options: ['Babur', 'Akbar', 'Aurangzeb', 'Shah Jahan'],
    correctAnswer: 1,
    explanation: 'Akbar founded Din-i-Ilahi.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-13',
    question: 'Guru Nanak founded which religion?',
    options: ['Jainism', 'Buddhism', 'Sikhism', 'Hinduism'],
    correctAnswer: 2,
    explanation: 'Guru Nanak founded Sikhism.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-14',
    question: 'Tulsidas wrote?',
    options: ['Ramcharitmanas', 'Ramayana', 'Mahabharata', 'Gita'],
    correctAnswer: 0,
    explanation: 'Tulsidas wrote Ramcharitmanas.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-15',
    question: 'Sher Shah Suri built?',
    options: ['NH1', 'Grand Trunk Road', 'East-West Corridor', 'None'],
    correctAnswer: 1,
    explanation: 'Sher Shah built Grand Trunk Road.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-16',
    question: 'Last Mughal emperor?',
    options: ['Aurangzeb', 'Shah Jahan', 'Bahadur Shah Zafar', 'Akbar II'],
    correctAnswer: 2,
    explanation: 'Bahadur Shah Zafar was the last Mughal emperor.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-17',
    question: 'Battle of Haldighati was between?',
    options: ['Akbar and Rana Pratap', 'Babur and Lodi', 'Shivaji and Aurangzeb', 'None'],
    correctAnswer: 0,
    explanation: 'Haldighati: Akbar vs Rana Pratap.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-18',
    question: 'Fatehpur Sikri was built by?',
    options: ['Babur', 'Akbar', 'Shah Jahan', 'Jahangir'],
    correctAnswer: 1,
    explanation: 'Akbar built Fatehpur Sikri.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-19',
    question: 'Jahangir married?',
    options: ['Mumtaz Mahal', 'Nur Jahan', 'Jodha Bai', 'Anarkali'],
    correctAnswer: 1,
    explanation: 'Jahangir married Nur Jahan.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },
  {
    id: 'hi-mi-e-20',
    question: 'Vijayanagar Empire was in?',
    options: ['North India', 'South India', 'East India', 'West India'],
    correctAnswer: 1,
    explanation: 'Vijayanagar was in South India.',
    categoryId: 'history',
    subCategoryId: 'medieval-history',
    level: 'easy'
  },

  // ============= COMPUTER - FUNDAMENTALS (Easy) =============
  {
    id: 'comp-fund-e-1',
    question: 'Full form of CPU?',
    options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Program Unit', 'Central Processor Unit'],
    correctAnswer: 0,
    explanation: 'CPU stands for Central Processing Unit.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-2',
    question: 'Which is an input device?',
    options: ['Monitor', 'Printer', 'Keyboard', 'Speaker'],
    correctAnswer: 2,
    explanation: 'Keyboard is an input device.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-3',
    question: 'Full form of RAM?',
    options: ['Read Access Memory', 'Random Access Memory', 'Rapid Access Memory', 'Read All Memory'],
    correctAnswer: 1,
    explanation: 'RAM is Random Access Memory.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-4',
    question: 'Which is an output device?',
    options: ['Mouse', 'Scanner', 'Monitor', 'Microphone'],
    correctAnswer: 2,
    explanation: 'Monitor is an output device.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-5',
    question: '1 GB equals?',
    options: ['1000 MB', '1024 MB', '100 MB', '512 MB'],
    correctAnswer: 1,
    explanation: '1 GB = 1024 MB.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-6',
    question: 'Full form of ROM?',
    options: ['Read Only Memory', 'Random Only Memory', 'Rapid Output Memory', 'Read Output Memory'],
    correctAnswer: 0,
    explanation: 'ROM is Read Only Memory.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-7',
    question: 'Brain of computer is?',
    options: ['RAM', 'ROM', 'CPU', 'Hard Disk'],
    correctAnswer: 2,
    explanation: 'CPU is called the brain of computer.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-8',
    question: 'Mouse is a?',
    options: ['Input device', 'Output device', 'Storage device', 'Processing device'],
    correctAnswer: 0,
    explanation: 'Mouse is an input device.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-9',
    question: 'Full form of USB?',
    options: ['Universal Serial Bus', 'Universal System Bus', 'United Serial Bus', 'United System Bus'],
    correctAnswer: 0,
    explanation: 'USB is Universal Serial Bus.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-10',
    question: 'Which is volatile memory?',
    options: ['Hard Disk', 'ROM', 'RAM', 'Pen Drive'],
    correctAnswer: 2,
    explanation: 'RAM is volatile memory (data lost when power off).',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-11',
    question: 'Smallest unit of data?',
    options: ['Bit', 'Byte', 'Nibble', 'KB'],
    correctAnswer: 0,
    explanation: 'Bit is the smallest unit of data.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-12',
    question: '1 Byte equals?',
    options: ['4 bits', '8 bits', '16 bits', '32 bits'],
    correctAnswer: 1,
    explanation: '1 Byte = 8 bits.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-13',
    question: 'Full form of BIOS?',
    options: ['Basic Input Output System', 'Binary Input Output System', 'Basic Internal Operating System', 'Binary Internal Operating System'],
    correctAnswer: 0,
    explanation: 'BIOS is Basic Input Output System.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-14',
    question: 'Printer is a?',
    options: ['Input device', 'Output device', 'Storage device', 'Processing device'],
    correctAnswer: 1,
    explanation: 'Printer is an output device.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-15',
    question: 'Which is NOT an operating system?',
    options: ['Windows', 'Linux', 'MS Word', 'macOS'],
    correctAnswer: 2,
    explanation: 'MS Word is application software, not OS.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-16',
    question: 'Full form of CD?',
    options: ['Compact Disk', 'Computer Disk', 'Central Disk', 'Common Disk'],
    correctAnswer: 0,
    explanation: 'CD is Compact Disk.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-17',
    question: 'Which is NOT storage device?',
    options: ['Hard Disk', 'Pen Drive', 'RAM', 'CD'],
    correctAnswer: 2,
    explanation: 'RAM is memory, not permanent storage.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-18',
    question: 'Scanner is a?',
    options: ['Input device', 'Output device', 'Both', 'None'],
    correctAnswer: 0,
    explanation: 'Scanner is an input device.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-19',
    question: 'Full form of HTML?',
    options: ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyper Transfer Markup Language', 'High Transfer Markup Language'],
    correctAnswer: 0,
    explanation: 'HTML is Hyper Text Markup Language.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },
  {
    id: 'comp-fund-e-20',
    question: 'Father of Computer?',
    options: ['Bill Gates', 'Charles Babbage', 'Steve Jobs', 'Tim Berners Lee'],
    correctAnswer: 1,
    explanation: 'Charles Babbage is known as Father of Computer.',
    categoryId: 'computer-awareness',
    subCategoryId: 'fundamentals',
    level: 'easy'
  },

  // ============= ECONOMY - BASIC CONCEPTS (Easy) =============
  {
    id: 'eco-basic-e-1',
    question: 'Full form of GDP?',
    options: ['Gross Domestic Product', 'General Domestic Product', 'Gross Development Product', 'General Development Product'],
    correctAnswer: 0,
    explanation: 'GDP is Gross Domestic Product.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-2',
    question: 'Currency of India?',
    options: ['Dollar', 'Rupee', 'Pound', 'Euro'],
    correctAnswer: 1,
    explanation: 'Indian currency is Rupee (₹).',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-3',
    question: 'Reserve Bank of India was established in?',
    options: ['1935', '1947', '1950', '1969'],
    correctAnswer: 0,
    explanation: 'RBI was established in 1935.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-4',
    question: 'Central Bank of India is?',
    options: ['SBI', 'RBI', 'ICICI', 'HDFC'],
    correctAnswer: 1,
    explanation: 'Reserve Bank of India is the central bank.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-5',
    question: 'Budget is presented by?',
    options: ['President', 'Prime Minister', 'Finance Minister', 'RBI Governor'],
    correctAnswer: 2,
    explanation: 'Finance Minister presents the budget.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-6',
    question: 'Full form of ATM?',
    options: ['Automated Teller Machine', 'Automatic Teller Machine', 'Any Time Money', 'All Time Money'],
    correctAnswer: 0,
    explanation: 'ATM is Automated Teller Machine.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-7',
    question: 'Inflation means?',
    options: ['Price increase', 'Price decrease', 'No change', 'None'],
    correctAnswer: 0,
    explanation: 'Inflation is general increase in prices.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-8',
    question: 'Headquarters of RBI?',
    options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    correctAnswer: 1,
    explanation: 'RBI headquarters is in Mumbai.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-9',
    question: 'Planning Commission replaced by?',
    options: ['Finance Commission', 'NITI Aayog', 'RBI', 'Election Commission'],
    correctAnswer: 1,
    explanation: 'Planning Commission replaced by NITI Aayog.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-10',
    question: 'Full form of SEBI?',
    options: ['Securities Exchange Board of India', 'Stock Exchange Board of India', 'Securities and Exchange Board of India', 'Stock and Exchange Board of India'],
    correctAnswer: 2,
    explanation: 'SEBI is Securities and Exchange Board of India.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-11',
    question: 'Indian budget presented on?',
    options: ['1 January', '1 February', '1 April', '15 August'],
    correctAnswer: 1,
    explanation: 'Budget is presented on 1 February.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-12',
    question: 'Fiscal year in India?',
    options: ['Jan-Dec', 'April-March', 'July-June', 'Oct-Sep'],
    correctAnswer: 1,
    explanation: 'Fiscal year is April to March.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-13',
    question: 'BSE located in?',
    options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    correctAnswer: 1,
    explanation: 'BSE (Bombay Stock Exchange) is in Mumbai.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-14',
    question: 'NSE stands for?',
    options: ['New Stock Exchange', 'National Stock Exchange', 'National Securities Exchange', 'New Securities Exchange'],
    correctAnswer: 1,
    explanation: 'NSE is National Stock Exchange.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-15',
    question: 'Who signs on Indian currency notes?',
    options: ['President', 'Finance Minister', 'RBI Governor', 'Prime Minister'],
    correctAnswer: 2,
    explanation: 'RBI Governor signs currency notes.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-16',
    question: 'Demonetization happened in?',
    options: ['2014', '2015', '2016', '2017'],
    correctAnswer: 2,
    explanation: 'Demonetization was on 8 November 2016.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-17',
    question: 'Full form of NPA?',
    options: ['Non-Performing Assets', 'New Performing Assets', 'Non-Payment Assets', 'New Payment Assets'],
    correctAnswer: 0,
    explanation: 'NPA is Non-Performing Assets.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-18',
    question: 'Largest bank in India?',
    options: ['ICICI', 'HDFC', 'SBI', 'PNB'],
    correctAnswer: 2,
    explanation: 'State Bank of India is the largest bank.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-19',
    question: 'Full form of FDI?',
    options: ['Foreign Direct Investment', 'Foreign Development Investment', 'Federal Direct Investment', 'Federal Development Investment'],
    correctAnswer: 0,
    explanation: 'FDI is Foreign Direct Investment.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },
  {
    id: 'eco-basic-e-20',
    question: 'GST was implemented in?',
    options: ['2015', '2016', '2017', '2018'],
    correctAnswer: 2,
    explanation: 'GST was implemented on 1 July 2017.',
    categoryId: 'economy',
    subCategoryId: 'basic-concepts',
    level: 'easy'
  },

  // ============= SCIENCE - PHYSICS (Easy) =============
  {
    id: 'sci-phy-e-1',
    question: 'SI unit of force?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctAnswer: 1,
    explanation: 'Newton is the SI unit of force.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-2',
    question: 'Speed of light is?',
    options: ['3×10^6 m/s', '3×10^8 m/s', '3×10^10 m/s', '3×10^12 m/s'],
    correctAnswer: 1,
    explanation: 'Speed of light is 3×10^8 m/s.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-3',
    question: 'SI unit of energy?',
    options: ['Newton', 'Joule', 'Watt', 'Pascal'],
    correctAnswer: 1,
    explanation: 'Joule is the SI unit of energy.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-4',
    question: 'Who discovered gravity?',
    options: ['Einstein', 'Newton', 'Galileo', 'Tesla'],
    correctAnswer: 1,
    explanation: 'Isaac Newton discovered gravity.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-5',
    question: 'SI unit of power?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctAnswer: 2,
    explanation: 'Watt is the SI unit of power.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-6',
    question: 'Acceleration due to gravity?',
    options: ['9.8 m/s²', '10 m/s²', '8 m/s²', '11 m/s²'],
    correctAnswer: 0,
    explanation: 'g = 9.8 m/s² on Earth.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-7',
    question: 'Light year measures?',
    options: ['Time', 'Distance', 'Speed', 'Mass'],
    correctAnswer: 1,
    explanation: 'Light year is a unit of distance.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-8',
    question: 'Sound cannot travel in?',
    options: ['Air', 'Water', 'Steel', 'Vacuum'],
    correctAnswer: 3,
    explanation: 'Sound cannot travel in vacuum.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-9',
    question: 'SI unit of current?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 1,
    explanation: 'Ampere is the SI unit of electric current.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-10',
    question: 'Who invented bulb?',
    options: ['Newton', 'Edison', 'Einstein', 'Tesla'],
    correctAnswer: 1,
    explanation: 'Thomas Edison invented the light bulb.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-11',
    question: 'Formula for kinetic energy?',
    options: ['mv', '1/2 mv²', 'mv²', '2mv'],
    correctAnswer: 1,
    explanation: 'KE = 1/2 mv².',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-12',
    question: 'SI unit of temperature?',
    options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Joule'],
    correctAnswer: 2,
    explanation: 'Kelvin is the SI unit of temperature.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-13',
    question: 'Normal human body temperature?',
    options: ['36°C', '37°C', '38°C', '39°C'],
    correctAnswer: 1,
    explanation: 'Normal body temperature is 37°C or 98.6°F.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-14',
    question: 'Water boils at?',
    options: ['90°C', '100°C', '110°C', '120°C'],
    correctAnswer: 1,
    explanation: 'Water boils at 100°C at normal pressure.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-15',
    question: 'Who gave theory of relativity?',
    options: ['Newton', 'Einstein', 'Galileo', 'Hawking'],
    correctAnswer: 1,
    explanation: 'Albert Einstein gave theory of relativity.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-16',
    question: 'Rainbow is formed due to?',
    options: ['Reflection', 'Refraction', 'Dispersion', 'All of these'],
    correctAnswer: 3,
    explanation: 'Rainbow forms due to reflection, refraction and dispersion.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-17',
    question: 'SI unit of frequency?',
    options: ['Newton', 'Hertz', 'Joule', 'Watt'],
    correctAnswer: 1,
    explanation: 'Hertz is the SI unit of frequency.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-18',
    question: 'Echo is due to?',
    options: ['Reflection', 'Refraction', 'Diffraction', 'Interference'],
    correctAnswer: 0,
    explanation: 'Echo is due to reflection of sound.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-19',
    question: 'Most abundant gas in atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    correctAnswer: 1,
    explanation: 'Nitrogen (78%) is most abundant in atmosphere.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-20',
    question: 'Electric bulb filament is made of?',
    options: ['Copper', 'Iron', 'Tungsten', 'Aluminum'],
    correctAnswer: 2,
    explanation: 'Tungsten is used in bulb filament.',
    categoryId: 'science',
    subCategoryId: 'physics',
    level: 'easy'
  },

  // ============= POLITY - INDIAN CONSTITUTION (Easy) =============
  {
    id: 'pol-const-e-1',
    question: 'How many fundamental rights?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'There are 6 Fundamental Rights in Indian Constitution.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-2',
    question: 'Indian Constitution came into force on?',
    options: ['15 August 1947', '26 January 1950', '26 November 1949', '2 October 1950'],
    correctAnswer: 1,
    explanation: 'Constitution came into force on 26 January 1950.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-3',
    question: 'Who is the head of Indian state?',
    options: ['Prime Minister', 'President', 'Governor', 'Chief Justice'],
    correctAnswer: 1,
    explanation: 'President is the head of state.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-4',
    question: 'Who is the head of Indian government?',
    options: ['President', 'Prime Minister', 'Chief Justice', 'Speaker'],
    correctAnswer: 1,
    explanation: 'Prime Minister is the head of government.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-5',
    question: 'President term is?',
    options: ['4 years', '5 years', '6 years', '7 years'],
    correctAnswer: 1,
    explanation: 'President serves for 5 years.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-6',
    question: 'Minimum age to become President?',
    options: ['25 years', '30 years', '35 years', '40 years'],
    correctAnswer: 2,
    explanation: 'Minimum age is 35 years.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-7',
    question: 'How many Lok Sabha seats?',
    options: ['543', '545', '550', '552'],
    correctAnswer: 1,
    explanation: 'Lok Sabha has 545 seats (543 elected + 2 nominated).',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-8',
    question: 'Rajya Sabha has maximum?',
    options: ['238', '245', '250', '260'],
    correctAnswer: 1,
    explanation: 'Rajya Sabha can have maximum 245 members.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-9',
    question: 'Who appoints Prime Minister?',
    options: ['President', 'Chief Justice', 'Speaker', 'People'],
    correctAnswer: 0,
    explanation: 'President appoints the Prime Minister.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-10',
    question: 'Minimum age to vote?',
    options: ['18 years', '21 years', '25 years', '30 years'],
    correctAnswer: 0,
    explanation: 'Minimum voting age is 18 years.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-11',
    question: 'Who can remove President?',
    options: ['Prime Minister', 'Parliament', 'Supreme Court', 'People'],
    correctAnswer: 1,
    explanation: 'Parliament can impeach the President.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-12',
    question: 'Election Commission headed by?',
    options: ['President', 'Prime Minister', 'Chief Election Commissioner', 'Chief Justice'],
    correctAnswer: 2,
    explanation: 'Chief Election Commissioner heads Election Commission.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-13',
    question: 'Right to Education is under?',
    options: ['Fundamental Right', 'Directive Principle', 'Fundamental Duty', 'None'],
    correctAnswer: 0,
    explanation: 'Article 21A makes education a Fundamental Right.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-14',
    question: 'Indian Constitution is?',
    options: ['Rigid', 'Flexible', 'Both', 'None'],
    correctAnswer: 2,
    explanation: 'Indian Constitution is both rigid and flexible.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-15',
    question: 'How many schedules in Constitution?',
    options: ['8', '10', '12', '14'],
    correctAnswer: 2,
    explanation: 'There are 12 schedules.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-16',
    question: 'Supreme Court has how many judges?',
    options: ['25', '31', '34', '40'],
    correctAnswer: 2,
    explanation: 'Supreme Court can have 34 judges including CJI.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-17',
    question: 'Who appoints Chief Justice?',
    options: ['President', 'Prime Minister', 'Parliament', 'Law Minister'],
    correctAnswer: 0,
    explanation: 'President appoints Chief Justice of India.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-18',
    question: 'Money Bill can be introduced in?',
    options: ['Lok Sabha only', 'Rajya Sabha only', 'Both', 'State Assembly'],
    correctAnswer: 0,
    explanation: 'Money Bill can be introduced only in Lok Sabha.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-19',
    question: 'Who administers oath to President?',
    options: ['Prime Minister', 'Chief Justice', 'Speaker', 'Vice President'],
    correctAnswer: 1,
    explanation: 'Chief Justice administers oath to President.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },
  {
    id: 'pol-const-e-20',
    question: 'Panchayati Raj system has how many levels?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Panchayati Raj has 3 levels: Village, Block, District.',
    categoryId: 'polity',
    subCategoryId: 'constitution',
    level: 'easy'
  },

  // ============= SCIENCE - CHEMISTRY (Easy) =============
  {
    id: 'sci-chem-e-1',
    question: 'Chemical formula of water?',
    options: ['HO', 'H2O', 'H3O', 'HO2'],
    correctAnswer: 1,
    explanation: 'Water is H2O.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-2',
    question: 'Atomic number of Hydrogen?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 0,
    explanation: 'Hydrogen has atomic number 1.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-3',
    question: 'pH of water is?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1,
    explanation: 'Pure water has pH 7 (neutral).',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-4',
    question: 'Common salt formula?',
    options: ['NaCl', 'KCl', 'CaCl2', 'MgCl2'],
    correctAnswer: 0,
    explanation: 'Common salt is NaCl (Sodium Chloride).',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-5',
    question: 'Most abundant element in universe?',
    options: ['Oxygen', 'Hydrogen', 'Carbon', 'Nitrogen'],
    correctAnswer: 1,
    explanation: 'Hydrogen is most abundant in universe.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-6',
    question: 'Acid turns blue litmus?',
    options: ['Blue', 'Red', 'Yellow', 'Green'],
    correctAnswer: 1,
    explanation: 'Acid turns blue litmus red.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-7',
    question: 'Chemical formula of carbon dioxide?',
    options: ['CO', 'CO2', 'C2O', 'C2O2'],
    correctAnswer: 1,
    explanation: 'Carbon dioxide is CO2.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-8',
    question: 'Gold chemical symbol?',
    options: ['Gd', 'Go', 'Au', 'Ag'],
    correctAnswer: 2,
    explanation: 'Gold symbol is Au (from Latin Aurum).',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-9',
    question: 'Silver chemical symbol?',
    options: ['Si', 'Sv', 'Ag', 'Sr'],
    correctAnswer: 2,
    explanation: 'Silver symbol is Ag (from Latin Argentum).',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-10',
    question: 'Oxygen percentage in air?',
    options: ['21%', '25%', '30%', '35%'],
    correctAnswer: 0,
    explanation: 'Air contains 21% oxygen.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-11',
    question: 'Nitrogen percentage in air?',
    options: ['68%', '72%', '78%', '82%'],
    correctAnswer: 2,
    explanation: 'Air contains 78% nitrogen.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-12',
    question: 'Ozone formula?',
    options: ['O', 'O2', 'O3', 'O4'],
    correctAnswer: 2,
    explanation: 'Ozone is O3.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-13',
    question: 'Iron chemical symbol?',
    options: ['Ir', 'In', 'Fe', 'Fn'],
    correctAnswer: 2,
    explanation: 'Iron symbol is Fe (from Latin Ferrum).',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-14',
    question: 'Who is father of chemistry?',
    options: ['Dalton', 'Lavoisier', 'Mendeleev', 'Rutherford'],
    correctAnswer: 1,
    explanation: 'Antoine Lavoisier is father of modern chemistry.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-15',
    question: 'Ammonia formula?',
    options: ['NH2', 'NH3', 'NH4', 'N2H'],
    correctAnswer: 1,
    explanation: 'Ammonia is NH3.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-16',
    question: 'Baking soda formula?',
    options: ['NaHCO3', 'Na2CO3', 'NaCl', 'NaOH'],
    correctAnswer: 0,
    explanation: 'Baking soda is NaHCO3 (Sodium bicarbonate).',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-17',
    question: 'Acid in stomach?',
    options: ['Sulfuric acid', 'Hydrochloric acid', 'Nitric acid', 'Acetic acid'],
    correctAnswer: 1,
    explanation: 'Stomach contains hydrochloric acid (HCl).',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-18',
    question: 'Diamond is made of?',
    options: ['Carbon', 'Silicon', 'Graphite', 'Coal'],
    correctAnswer: 0,
    explanation: 'Diamond is pure carbon.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-19',
    question: 'Rust is?',
    options: ['Iron oxide', 'Iron sulfate', 'Iron carbonate', 'Iron nitrate'],
    correctAnswer: 0,
    explanation: 'Rust is iron oxide (Fe2O3).',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-20',
    question: 'Lightest gas?',
    options: ['Oxygen', 'Nitrogen', 'Hydrogen', 'Helium'],
    correctAnswer: 2,
    explanation: 'Hydrogen is the lightest gas.',
    categoryId: 'science',
    subCategoryId: 'chemistry',
    level: 'easy'
  },

  // ============= MATHEMATICS - BASICS (Easy) =============
  {
    id: 'math-basic-e-1',
    question: '5 + 5 = ?',
    options: ['8', '9', '10', '11'],
    correctAnswer: 2,
    explanation: '5 + 5 = 10.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-2',
    question: '10 - 3 = ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1,
    explanation: '10 - 3 = 7.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-3',
    question: '6 × 7 = ?',
    options: ['40', '42', '44', '48'],
    correctAnswer: 1,
    explanation: '6 × 7 = 42.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-4',
    question: '20 ÷ 4 = ?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    explanation: '20 ÷ 4 = 5.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-5',
    question: 'Value of π (pi) approximately?',
    options: ['3.12', '3.14', '3.16', '3.18'],
    correctAnswer: 1,
    explanation: 'π ≈ 3.14.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-6',
    question: 'Square of 9?',
    options: ['72', '81', '90', '99'],
    correctAnswer: 1,
    explanation: '9² = 81.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-7',
    question: 'Sum of angles in triangle?',
    options: ['90°', '180°', '270°', '360°'],
    correctAnswer: 1,
    explanation: 'Sum of angles in triangle is 180°.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-8',
    question: 'Cube of 5?',
    options: ['100', '125', '150', '175'],
    correctAnswer: 1,
    explanation: '5³ = 125.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-9',
    question: 'Perimeter of square with side 4?',
    options: ['12', '16', '20', '24'],
    correctAnswer: 1,
    explanation: 'Perimeter = 4 × side = 4 × 4 = 16.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-10',
    question: 'Area of rectangle = ?',
    options: ['length + breadth', 'length × breadth', 'length - breadth', 'length ÷ breadth'],
    correctAnswer: 1,
    explanation: 'Area = length × breadth.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-11',
    question: '50% of 100 = ?',
    options: ['25', '50', '75', '100'],
    correctAnswer: 1,
    explanation: '50% of 100 = 50.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-12',
    question: 'How many sides in hexagon?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'Hexagon has 6 sides.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-13',
    question: 'Smallest prime number?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 2,
    explanation: '2 is the smallest prime number.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-14',
    question: '1 kilometer = ? meters',
    options: ['10', '100', '1000', '10000'],
    correctAnswer: 2,
    explanation: '1 km = 1000 meters.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-15',
    question: '12 × 12 = ?',
    options: ['124', '134', '144', '154'],
    correctAnswer: 2,
    explanation: '12 × 12 = 144.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-16',
    question: 'LCM of 3 and 4?',
    options: ['7', '12', '24', '36'],
    correctAnswer: 1,
    explanation: 'LCM of 3 and 4 is 12.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-17',
    question: 'HCF of 12 and 18?',
    options: ['2', '3', '6', '9'],
    correctAnswer: 2,
    explanation: 'HCF of 12 and 18 is 6.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-18',
    question: 'Roman numeral for 10?',
    options: ['V', 'X', 'L', 'C'],
    correctAnswer: 1,
    explanation: 'X represents 10 in Roman numerals.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-19',
    question: 'Average of 10, 20, 30?',
    options: ['15', '20', '25', '30'],
    correctAnswer: 1,
    explanation: 'Average = (10+20+30)/3 = 20.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },
  {
    id: 'math-basic-e-20',
    question: 'Decimal of 1/2?',
    options: ['0.25', '0.5', '0.75', '1.0'],
    correctAnswer: 1,
    explanation: '1/2 = 0.5.',
    categoryId: 'mathematics',
    subCategoryId: 'arithmetic',
    level: 'easy'
  },

  // ============= GEOGRAPHY - PHYSICAL GEOGRAPHY (Medium) =============
  {
    id: 'geo-phy-m-1',
    question: 'Troposphere extends up to?',
    options: ['10 km', '15 km', '20 km', '25 km'],
    correctAnswer: 0,
    explanation: 'Troposphere extends up to about 10-12 km.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-2',
    question: 'Ozone layer is in which layer?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 1,
    explanation: 'Ozone layer is in the stratosphere.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-3',
    question: 'Which ocean is deepest?',
    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    correctAnswer: 2,
    explanation: 'Pacific Ocean is the deepest (Mariana Trench).',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-4',
    question: 'Ring of Fire is associated with?',
    options: ['Earthquakes', 'Volcanoes', 'Tsunamis', 'All of these'],
    correctAnswer: 3,
    explanation: 'Ring of Fire has earthquakes, volcanoes, and tsunamis.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-5',
    question: 'Tropic of Cancer is at?',
    options: ['23.5°N', '23.5°S', '66.5°N', '66.5°S'],
    correctAnswer: 0,
    explanation: 'Tropic of Cancer is at 23.5°N.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-6',
    question: 'Largest desert in world?',
    options: ['Sahara', 'Arabian', 'Gobi', 'Antarctic'],
    correctAnswer: 3,
    explanation: 'Antarctic is the largest desert (cold desert).',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-7',
    question: 'Largest hot desert?',
    options: ['Sahara', 'Arabian', 'Kalahari', 'Thar'],
    correctAnswer: 0,
    explanation: 'Sahara is the largest hot desert.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-8',
    question: 'Which layer has auroras?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 3,
    explanation: 'Auroras occur in thermosphere.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-9',
    question: 'Equator is at?',
    options: ['0°', '23.5°', '66.5°', '90°'],
    correctAnswer: 0,
    explanation: 'Equator is at 0° latitude.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-10',
    question: 'Sargasso Sea is in which ocean?',
    options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
    correctAnswer: 1,
    explanation: 'Sargasso Sea is in Atlantic Ocean.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-11',
    question: 'Longest river in world?',
    options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correctAnswer: 1,
    explanation: 'Nile is the longest river.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-12',
    question: 'Largest river by volume?',
    options: ['Amazon', 'Nile', 'Ganges', 'Congo'],
    correctAnswer: 0,
    explanation: 'Amazon has the largest discharge.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-13',
    question: 'Mount Everest height?',
    options: ['8,848 m', '8,948 m', '9,048 m', '9,148 m'],
    correctAnswer: 0,
    explanation: 'Mount Everest is 8,848.86 meters tall.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-14',
    question: 'Largest island in world?',
    options: ['Australia', 'Greenland', 'New Guinea', 'Borneo'],
    correctAnswer: 1,
    explanation: 'Greenland is the largest island.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-15',
    question: 'Dead Sea is between?',
    options: ['Israel & Jordan', 'Egypt & Sudan', 'Iraq & Iran', 'Turkey & Syria'],
    correctAnswer: 0,
    explanation: 'Dead Sea is between Israel and Jordan.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-16',
    question: 'Which line divides Earth into Eastern & Western hemisphere?',
    options: ['Equator', 'Prime Meridian', 'Tropic of Cancer', 'Arctic Circle'],
    correctAnswer: 1,
    explanation: 'Prime Meridian (0° longitude) divides hemispheres.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-17',
    question: 'Largest waterfall in world?',
    options: ['Niagara', 'Victoria', 'Angel', 'Iguazu'],
    correctAnswer: 2,
    explanation: 'Angel Falls in Venezuela is the tallest.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-18',
    question: 'Caspian Sea is actually a?',
    options: ['Sea', 'Lake', 'River', 'Ocean'],
    correctAnswer: 1,
    explanation: 'Caspian Sea is the largest lake.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-19',
    question: 'Mediterranean climate is found in?',
    options: ['Equatorial regions', 'Coastal areas', 'Polar regions', 'Desert areas'],
    correctAnswer: 1,
    explanation: 'Mediterranean climate is in coastal areas.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-20',
    question: 'Which continent has no active volcanoes?',
    options: ['Asia', 'Europe', 'Australia', 'Africa'],
    correctAnswer: 2,
    explanation: 'Australia has no active volcanoes.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },

  // ============= SCIENCE - BIOLOGY (Easy) =============
  {
    id: 'sci-bio-e-1',
    question: 'Largest organ in human body?',
    options: ['Liver', 'Brain', 'Skin', 'Heart'],
    correctAnswer: 2,
    explanation: 'Skin is the largest organ.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-2',
    question: 'How many bones in adult human?',
    options: ['186', '196', '206', '216'],
    correctAnswer: 2,
    explanation: 'Adult human has 206 bones.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-3',
    question: 'Which blood group is universal donor?',
    options: ['A', 'B', 'AB', 'O'],
    correctAnswer: 3,
    explanation: 'O negative is universal donor.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-4',
    question: 'Powerhouse of cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
    correctAnswer: 1,
    explanation: 'Mitochondria is the powerhouse of cell.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-5',
    question: 'Human heart has how many chambers?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'Human heart has 4 chambers.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-6',
    question: 'Father of Biology?',
    options: ['Darwin', 'Aristotle', 'Mendel', 'Linnaeus'],
    correctAnswer: 1,
    explanation: 'Aristotle is known as Father of Biology.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-7',
    question: 'Plants prepare food by?',
    options: ['Respiration', 'Photosynthesis', 'Digestion', 'Transpiration'],
    correctAnswer: 1,
    explanation: 'Plants prepare food by photosynthesis.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-8',
    question: 'Chlorophyll gives plants?',
    options: ['Red color', 'Yellow color', 'Green color', 'Blue color'],
    correctAnswer: 2,
    explanation: 'Chlorophyll gives green color to plants.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-9',
    question: 'Largest gland in human body?',
    options: ['Pancreas', 'Liver', 'Thyroid', 'Pituitary'],
    correctAnswer: 1,
    explanation: 'Liver is the largest gland.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-10',
    question: 'Normal pulse rate?',
    options: ['60-80', '72-80', '80-100', '100-120'],
    correctAnswer: 1,
    explanation: 'Normal pulse rate is 72-80 beats per minute.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-11',
    question: 'Study of birds?',
    options: ['Zoology', 'Ornithology', 'Herpetology', 'Ichthyology'],
    correctAnswer: 1,
    explanation: 'Ornithology is the study of birds.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-12',
    question: 'Largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 1,
    explanation: 'Blue Whale is the largest mammal.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-13',
    question: 'National bird of India?',
    options: ['Sparrow', 'Parrot', 'Peacock', 'Eagle'],
    correctAnswer: 2,
    explanation: 'Peacock is the national bird of India.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-14',
    question: 'National animal of India?',
    options: ['Lion', 'Tiger', 'Elephant', 'Leopard'],
    correctAnswer: 1,
    explanation: 'Tiger is the national animal of India.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-15',
    question: 'White blood cells help in?',
    options: ['Digestion', 'Respiration', 'Fighting infection', 'Circulation'],
    correctAnswer: 2,
    explanation: 'WBC help fight infections.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-16',
    question: 'Red blood cells contain?',
    options: ['Hemoglobin', 'Chlorophyll', 'Melanin', 'Insulin'],
    correctAnswer: 0,
    explanation: 'RBC contain hemoglobin.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-17',
    question: 'Fastest land animal?',
    options: ['Lion', 'Cheetah', 'Leopard', 'Tiger'],
    correctAnswer: 1,
    explanation: 'Cheetah is the fastest land animal.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-18',
    question: 'Human baby has how many bones?',
    options: ['206', '270', '300', '350'],
    correctAnswer: 2,
    explanation: 'Baby has about 300 bones (many fuse later).',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-19',
    question: 'Brain part that controls balance?',
    options: ['Cerebrum', 'Cerebellum', 'Medulla', 'Hypothalamus'],
    correctAnswer: 1,
    explanation: 'Cerebellum controls balance and coordination.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-20',
    question: 'Insulin is produced by?',
    options: ['Liver', 'Pancreas', 'Kidney', 'Thyroid'],
    correctAnswer: 1,
    explanation: 'Insulin is produced by pancreas.',
    categoryId: 'science',
    subCategoryId: 'biology',
    level: 'easy'
  },

  // ============= LANGUAGE - GRAMMAR (Easy) =============
  {
    id: 'eng-gram-e-1',
    question: 'Plural of "child"?',
    options: ['Childs', 'Children', 'Childes', 'Childrens'],
    correctAnswer: 1,
    explanation: 'The plural of child is children.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-2',
    question: 'Past tense of "go"?',
    options: ['Goed', 'Went', 'Gone', 'Going'],
    correctAnswer: 1,
    explanation: 'The past tense of go is went.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-3',
    question: '"A", "An", "The" are?',
    options: ['Nouns', 'Pronouns', 'Articles', 'Verbs'],
    correctAnswer: 2,
    explanation: 'A, An, The are articles.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-4',
    question: 'Opposite of "happy"?',
    options: ['Sad', 'Angry', 'Tired', 'Sleepy'],
    correctAnswer: 0,
    explanation: 'The opposite of happy is sad.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-5',
    question: 'He/She/It/They are?',
    options: ['Nouns', 'Pronouns', 'Verbs', 'Adjectives'],
    correctAnswer: 1,
    explanation: 'He, She, It, They are pronouns.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-6',
    question: '"Beautiful" is a?',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 2,
    explanation: 'Beautiful is an adjective.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-7',
    question: '"Run" is a?',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 1,
    explanation: 'Run is a verb (action word).',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-8',
    question: 'Plural of "ox"?',
    options: ['Oxs', 'Oxes', 'Oxen', 'Oxies'],
    correctAnswer: 2,
    explanation: 'The plural of ox is oxen.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-9',
    question: 'Past tense of "eat"?',
    options: ['Eated', 'Ate', 'Eaten', 'Eating'],
    correctAnswer: 1,
    explanation: 'The past tense of eat is ate.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-10',
    question: 'Feminine of "king"?',
    options: ['Kingness', 'Queena', 'Queen', 'Kingess'],
    correctAnswer: 2,
    explanation: 'The feminine of king is queen.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-11',
    question: 'I/We/You are?',
    options: ['Nouns', 'Pronouns', 'Verbs', 'Prepositions'],
    correctAnswer: 1,
    explanation: 'I, We, You are personal pronouns.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-12',
    question: '"Quickly" is a?',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 3,
    explanation: 'Quickly is an adverb.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-13',
    question: 'Plural of "tooth"?',
    options: ['Tooths', 'Teeth', 'Toothes', 'Teeths'],
    correctAnswer: 1,
    explanation: 'The plural of tooth is teeth.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-14',
    question: 'Opposite of "big"?',
    options: ['Small', 'Tiny', 'Short', 'All of these'],
    correctAnswer: 0,
    explanation: 'The opposite of big is small.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-15',
    question: '"And", "But", "Or" are?',
    options: ['Nouns', 'Verbs', 'Conjunctions', 'Prepositions'],
    correctAnswer: 2,
    explanation: 'And, But, Or are conjunctions.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-16',
    question: 'Past tense of "write"?',
    options: ['Writed', 'Wrote', 'Written', 'Writing'],
    correctAnswer: 1,
    explanation: 'The past tense of write is wrote.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-17',
    question: 'Plural of "man"?',
    options: ['Mans', 'Men', 'Manes', 'Mens'],
    correctAnswer: 1,
    explanation: 'The plural of man is men.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-18',
    question: '"In", "On", "At" are?',
    options: ['Conjunctions', 'Prepositions', 'Interjections', 'Articles'],
    correctAnswer: 1,
    explanation: 'In, On, At are prepositions.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-19',
    question: 'Feminine of "hero"?',
    options: ['Heroine', 'Heroine', 'Heroess', 'Heroe'],
    correctAnswer: 0,
    explanation: 'The feminine of hero is heroine.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },
  {
    id: 'eng-gram-e-20',
    question: 'Past tense of "sing"?',
    options: ['Singed', 'Sang', 'Sung', 'Singing'],
    correctAnswer: 1,
    explanation: 'The past tense of sing is sang.',
    categoryId: 'language',
    subCategoryId: 'grammar',
    level: 'easy'
  },

  // ============= REASONING - VERBAL REASONING (Easy) =============
  {
    id: 'reas-verb-e-1',
    question: 'Find odd one: Dog, Cat, Lion, Table',
    options: ['Dog', 'Cat', 'Lion', 'Table'],
    correctAnswer: 3,
    explanation: 'Table is not an animal.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-2',
    question: 'Book : Pages :: Tree : ?',
    options: ['Roots', 'Leaves', 'Branches', 'All'],
    correctAnswer: 1,
    explanation: 'Book has pages, Tree has leaves.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-3',
    question: 'Which word does not belong: Apple, Banana, Carrot, Mango',
    options: ['Apple', 'Banana', 'Carrot', 'Mango'],
    correctAnswer: 2,
    explanation: 'Carrot is a vegetable, others are fruits.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-4',
    question: 'Doctor : Hospital :: Teacher : ?',
    options: ['Student', 'School', 'Book', 'Class'],
    correctAnswer: 1,
    explanation: 'Doctor works in Hospital, Teacher works in School.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-5',
    question: 'If BOOK is coded as CPPL, then DOOR is?',
    options: ['EPPS', 'EPPQ', 'DQQS', 'CPPR'],
    correctAnswer: 0,
    explanation: 'Each letter moves +1. D→E, O→P, O→P, R→S.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-6',
    question: 'Find odd: 2, 4, 6, 9',
    options: ['2', '4', '6', '9'],
    correctAnswer: 3,
    explanation: '9 is odd number, others are even.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-7',
    question: 'Pen : Write :: Knife : ?',
    options: ['Sharp', 'Cut', 'Steel', 'Kitchen'],
    correctAnswer: 1,
    explanation: 'Pen is used to write, Knife is used to cut.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-8',
    question: 'Which is different: Car, Bus, Train, Road',
    options: ['Car', 'Bus', 'Train', 'Road'],
    correctAnswer: 3,
    explanation: 'Road is not a vehicle.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-9',
    question: 'Bird : Nest :: Man : ?',
    options: ['Food', 'House', 'Clothes', 'Work'],
    correctAnswer: 1,
    explanation: 'Bird lives in Nest, Man lives in House.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-10',
    question: 'If 2 + 2 = 10, then 3 + 3 = ?',
    options: ['12', '15', '18', '20'],
    correctAnswer: 1,
    explanation: '2+2=4, pattern gives 10. So 3+3=6, pattern gives 15.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-11',
    question: 'Find odd: Red, Blue, Green, Big',
    options: ['Red', 'Blue', 'Green', 'Big'],
    correctAnswer: 3,
    explanation: 'Big is not a color.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-12',
    question: 'Water : Thirsty :: Food : ?',
    options: ['Hungry', 'Plate', 'Eat', 'Kitchen'],
    correctAnswer: 0,
    explanation: 'Water satisfies thirst, Food satisfies hunger.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-13',
    question: 'Which is different: Lion, Tiger, Elephant, Leopard',
    options: ['Lion', 'Tiger', 'Elephant', 'Leopard'],
    correctAnswer: 2,
    explanation: 'Elephant is not a cat family animal.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-14',
    question: 'Day : Night :: Hot : ?',
    options: ['Ice', 'Cold', 'Winter', 'Cool'],
    correctAnswer: 1,
    explanation: 'Day is opposite of Night, Hot is opposite of Cold.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-15',
    question: 'If CAT = 312, then DOG = ?',
    options: ['413', '415', '513', '515'],
    correctAnswer: 1,
    explanation: 'C=3, A=1, T=2. D=4, O=1, G=5 (simplified pattern).',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-16',
    question: 'Find odd: Monday, Tuesday, January, Friday',
    options: ['Monday', 'Tuesday', 'January', 'Friday'],
    correctAnswer: 2,
    explanation: 'January is a month, others are days.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-17',
    question: 'Eye : See :: Ear : ?',
    options: ['Sound', 'Hear', 'Nose', 'Listen'],
    correctAnswer: 1,
    explanation: 'Eye is used to see, Ear is used to hear.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-18',
    question: 'Which is different: Cow, Buffalo, Horse, Hen',
    options: ['Cow', 'Buffalo', 'Horse', 'Hen'],
    correctAnswer: 3,
    explanation: 'Hen is a bird, others are mammals.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-19',
    question: 'Son : Father :: Daughter : ?',
    options: ['Mother', 'Sister', 'Brother', 'Uncle'],
    correctAnswer: 0,
    explanation: 'Son relates to Father, Daughter relates to Mother.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },
  {
    id: 'reas-verb-e-20',
    question: 'Find odd: 5, 10, 15, 22',
    options: ['5', '10', '15', '22'],
    correctAnswer: 3,
    explanation: '22 is not divisible by 5.',
    categoryId: 'quant-reasoning',
    subCategoryId: 'verbal-reasoning',
    level: 'easy'
  },

  // ============= ENVIRONMENT - ECOLOGY (Easy) =============
  {
    id: 'env-eco-e-1',
    question: 'World Environment Day is on?',
    options: ['5 May', '5 June', '5 July', '5 August'],
    correctAnswer: 1,
    explanation: 'World Environment Day is on 5 June.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-2',
    question: 'Which gas causes global warming?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    correctAnswer: 2,
    explanation: 'CO2 is the main greenhouse gas.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-3',
    question: 'Ozone layer protects from?',
    options: ['Rain', 'UV rays', 'Wind', 'Sound'],
    correctAnswer: 1,
    explanation: 'Ozone layer protects from harmful UV rays.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-4',
    question: 'Trees give us?',
    options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 0,
    explanation: 'Trees release oxygen through photosynthesis.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-5',
    question: 'Which is renewable energy?',
    options: ['Coal', 'Petrol', 'Solar', 'Natural Gas'],
    correctAnswer: 2,
    explanation: 'Solar energy is renewable.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-6',
    question: 'Reduce, Reuse, Recycle is for?',
    options: ['Water conservation', 'Waste management', 'Energy saving', 'All'],
    correctAnswer: 1,
    explanation: '3Rs are waste management principles.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-7',
    question: 'Which animal is endangered?',
    options: ['Dog', 'Cat', 'Tiger', 'Cow'],
    correctAnswer: 2,
    explanation: 'Tiger is an endangered species.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-8',
    question: 'Rainwater harvesting helps in?',
    options: ['Water conservation', 'Air pollution', 'Noise pollution', 'None'],
    correctAnswer: 0,
    explanation: 'Rainwater harvesting conserves water.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-9',
    question: 'Which is biodegradable?',
    options: ['Plastic bag', 'Glass bottle', 'Paper', 'Metal can'],
    correctAnswer: 2,
    explanation: 'Paper is biodegradable.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-10',
    question: 'Planting trees helps to?',
    options: ['Increase pollution', 'Decrease pollution', 'No effect', 'Increase CO2'],
    correctAnswer: 1,
    explanation: 'Trees help reduce air pollution.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-11',
    question: 'National animal of India is?',
    options: ['Lion', 'Tiger', 'Elephant', 'Peacock'],
    correctAnswer: 1,
    explanation: 'Bengal Tiger is national animal.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-12',
    question: 'Which saves electricity?',
    options: ['LED bulb', 'Incandescent bulb', 'Both same', 'None'],
    correctAnswer: 0,
    explanation: 'LED bulbs consume less electricity.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-13',
    question: 'Chipko Movement was for?',
    options: ['Water conservation', 'Forest conservation', 'Wildlife protection', 'Air quality'],
    correctAnswer: 1,
    explanation: 'Chipko Movement protected forests.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-14',
    question: 'Which is non-renewable?',
    options: ['Solar', 'Wind', 'Coal', 'Hydro'],
    correctAnswer: 2,
    explanation: 'Coal is a non-renewable resource.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-15',
    question: 'Ganga Action Plan aims to?',
    options: ['Clean Ganga river', 'Build dams', 'Generate power', 'Fishing'],
    correctAnswer: 0,
    explanation: 'Ganga Action Plan cleans the river.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-16',
    question: 'Food chain starts with?',
    options: ['Carnivores', 'Herbivores', 'Producers', 'Decomposers'],
    correctAnswer: 2,
    explanation: 'Food chain starts with producers (plants).',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-17',
    question: 'Which layer has ozone?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 1,
    explanation: 'Ozone layer is in stratosphere.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-18',
    question: 'Sundarbans is famous for?',
    options: ['Desert', 'Mangrove forest', 'Mountains', 'Plains'],
    correctAnswer: 1,
    explanation: 'Sundarbans has mangrove forests.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-19',
    question: 'Which causes acid rain?',
    options: ['Oxygen', 'SO2 and NOx', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 1,
    explanation: 'SO2 and NOx gases cause acid rain.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },
  {
    id: 'env-eco-e-20',
    question: 'Project Tiger started in?',
    options: ['1973', '1975', '1980', '1985'],
    correctAnswer: 0,
    explanation: 'Project Tiger was launched in 1973.',
    categoryId: 'environment-ecology',
    subCategoryId: 'ecology-basics',
    level: 'easy'
  },

  // ============= EDUCATION & PEDAGOGY - TEACHING METHODS (Easy) =============
  {
    id: 'teach-meth-e-1',
    question: 'Which is a learner-centered method?',
    options: ['Lecture', 'Discussion', 'Dictation', 'Reading'],
    correctAnswer: 1,
    explanation: 'Discussion method is learner-centered.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-2',
    question: 'Demonstration method is best for?',
    options: ['Theory', 'Practical skills', 'Reading', 'Writing'],
    correctAnswer: 1,
    explanation: 'Demonstration teaches practical skills.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-3',
    question: 'Father of Modern Education?',
    options: ['Dewey', 'Rousseau', 'Pestalozzi', 'Froebel'],
    correctAnswer: 0,
    explanation: 'John Dewey is called Father of Modern Education.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-4',
    question: 'Best method for large class?',
    options: ['Lecture', 'Discussion', 'Project', 'Experiment'],
    correctAnswer: 0,
    explanation: 'Lecture method suits large classes.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-5',
    question: 'Which promotes critical thinking?',
    options: ['Rote learning', 'Questioning', 'Copying', 'Listening'],
    correctAnswer: 1,
    explanation: 'Questioning develops critical thinking.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-6',
    question: 'Visual aids help in?',
    options: ['Better understanding', 'Wasting time', 'Confusion', 'None'],
    correctAnswer: 0,
    explanation: 'Visual aids enhance understanding.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-7',
    question: 'Role play is a type of?',
    options: ['Active learning', 'Passive learning', 'Rote learning', 'None'],
    correctAnswer: 0,
    explanation: 'Role play is active learning method.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-8',
    question: 'Which is teacher-centered?',
    options: ['Discussion', 'Lecture', 'Group work', 'Project'],
    correctAnswer: 1,
    explanation: 'Lecture method is teacher-centered.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-9',
    question: 'Brainstorming encourages?',
    options: ['Silence', 'Creativity', 'Copying', 'Sleeping'],
    correctAnswer: 1,
    explanation: 'Brainstorming develops creativity.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-10',
    question: 'Best way to motivate students?',
    options: ['Punishment', 'Praise & encouragement', 'Ignoring', 'Scolding'],
    correctAnswer: 1,
    explanation: 'Praise and encouragement motivate students.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-11',
    question: 'Blackboard is a type of?',
    options: ['Audio aid', 'Visual aid', 'Digital aid', 'None'],
    correctAnswer: 1,
    explanation: 'Blackboard is a visual aid.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-12',
    question: 'Lesson plan helps to?',
    options: ['Waste time', 'Organize teaching', 'Confuse students', 'None'],
    correctAnswer: 1,
    explanation: 'Lesson plan organizes teaching systematically.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-13',
    question: 'Which develops problem-solving?',
    options: ['Lecture', 'Project method', 'Dictation', 'Reading'],
    correctAnswer: 1,
    explanation: 'Project method develops problem-solving skills.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-14',
    question: 'Homework is for?',
    options: ['Punishment', 'Practice & revision', 'Time pass', 'None'],
    correctAnswer: 1,
    explanation: 'Homework provides practice and revision.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-15',
    question: 'Good teacher should be?',
    options: ['Strict only', 'Friendly & knowledgeable', 'Silent', 'Angry'],
    correctAnswer: 1,
    explanation: 'Good teacher is friendly and knowledgeable.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-16',
    question: 'Field trip is useful for?',
    options: ['Enjoyment only', 'Practical knowledge', 'Wasting time', 'None'],
    correctAnswer: 1,
    explanation: 'Field trips provide practical knowledge.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-17',
    question: 'Class discussion promotes?',
    options: ['Silence', 'Communication skills', 'Sleeping', 'Fighting'],
    correctAnswer: 1,
    explanation: 'Discussions develop communication skills.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-18',
    question: 'Which is best for science teaching?',
    options: ['Only lecture', 'Experiment & demonstration', 'Only reading', 'Only writing'],
    correctAnswer: 1,
    explanation: 'Experiments and demonstrations are best for science.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-19',
    question: 'Individual differences mean?',
    options: ['All same', 'Students differ in abilities', 'All intelligent', 'None'],
    correctAnswer: 1,
    explanation: 'Students have different abilities and learning styles.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },
  {
    id: 'teach-meth-e-20',
    question: 'Which helps slow learners?',
    options: ['Punishment', 'Extra practice & patience', 'Ignoring', 'Scolding'],
    correctAnswer: 1,
    explanation: 'Extra practice and patience help slow learners.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'teaching-methods',
    level: 'easy'
  },

  // ============= EDUCATION & PEDAGOGY - CHILD PSYCHOLOGY (Easy) =============
  {
    id: 'edu-child-e-1',
    question: 'Father of Child Psychology?',
    options: ['Freud', 'Piaget', 'Skinner', 'Vygotsky'],
    correctAnswer: 1,
    explanation: 'Jean Piaget is Father of Child Psychology.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-2',
    question: 'How many stages in Piaget theory?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'Piaget proposed 4 stages of cognitive development.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-3',
    question: 'Age of sensorimotor stage?',
    options: ['0-2 years', '2-7 years', '7-11 years', '11+ years'],
    correctAnswer: 0,
    explanation: 'Sensorimotor stage is 0-2 years.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-4',
    question: 'Which affects child development?',
    options: ['Heredity', 'Environment', 'Both', 'None'],
    correctAnswer: 2,
    explanation: 'Both heredity and environment affect development.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-5',
    question: 'Play is important for?',
    options: ['Time pass', 'Physical & mental development', 'Wasting time', 'None'],
    correctAnswer: 1,
    explanation: 'Play aids physical and mental development.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-6',
    question: 'Critical period for language?',
    options: ['0-5 years', '5-10 years', '10-15 years', 'Any time'],
    correctAnswer: 0,
    explanation: 'Early years (0-5) are critical for language.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-7',
    question: 'Motor skills develop through?',
    options: ['Only heredity', 'Practice & maturation', 'Magic', 'None'],
    correctAnswer: 1,
    explanation: 'Motor skills develop through practice and maturation.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-8',
    question: 'Who gave theory of moral development?',
    options: ['Piaget', 'Kohlberg', 'Vygotsky', 'Erikson'],
    correctAnswer: 1,
    explanation: 'Kohlberg gave theory of moral development.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-9',
    question: 'Socialization starts from?',
    options: ['School', 'Family', 'Friends', 'Society'],
    correctAnswer: 1,
    explanation: 'Socialization begins in the family.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-10',
    question: 'Which is physical development?',
    options: ['Thinking', 'Height & weight', 'Emotions', 'Language'],
    correctAnswer: 1,
    explanation: 'Height and weight indicate physical development.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-11',
    question: 'Concrete operational stage age?',
    options: ['0-2 years', '2-7 years', '7-11 years', '11+ years'],
    correctAnswer: 2,
    explanation: 'Concrete operational stage is 7-11 years.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-12',
    question: 'Adolescence age is?',
    options: ['5-10 years', '10-15 years', '12-18 years', '18-25 years'],
    correctAnswer: 2,
    explanation: 'Adolescence typically is 12-18 years.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-13',
    question: 'Who gave theory of psychosocial development?',
    options: ['Freud', 'Piaget', 'Erikson', 'Skinner'],
    correctAnswer: 2,
    explanation: 'Erikson gave psychosocial development theory.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-14',
    question: 'Attention span is longest in?',
    options: ['Infancy', 'Childhood', 'Adolescence', 'Adulthood'],
    correctAnswer: 3,
    explanation: 'Attention span increases with age.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-15',
    question: 'Which is NOT a learning disability?',
    options: ['Dyslexia', 'Dyscalculia', 'Dysgraphia', 'Diabetes'],
    correctAnswer: 3,
    explanation: 'Diabetes is not a learning disability.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-16',
    question: 'Gifted children need?',
    options: ['Punishment', 'Special enrichment programs', 'Ignoring', 'None'],
    correctAnswer: 1,
    explanation: 'Gifted children benefit from enrichment programs.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-17',
    question: 'Observation is useful for?',
    options: ['Time pass', 'Understanding child behavior', 'Punishment', 'None'],
    correctAnswer: 1,
    explanation: 'Observation helps understand child behavior.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-18',
    question: 'Zone of Proximal Development was given by?',
    options: ['Piaget', 'Vygotsky', 'Bruner', 'Dewey'],
    correctAnswer: 1,
    explanation: 'Vygotsky proposed Zone of Proximal Development.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-19',
    question: 'Positive reinforcement increases?',
    options: ['Bad behavior', 'Good behavior', 'Confusion', 'None'],
    correctAnswer: 1,
    explanation: 'Positive reinforcement strengthens good behavior.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },
  {
    id: 'edu-child-e-20',
    question: 'Which is emotional development?',
    options: ['Height', 'Expressing feelings', 'Reading', 'Writing'],
    correctAnswer: 1,
    explanation: 'Emotional development involves expressing feelings.',
    categoryId: 'education-pedagogy',
    subCategoryId: 'child-psychology',
    level: 'easy'
  },

];