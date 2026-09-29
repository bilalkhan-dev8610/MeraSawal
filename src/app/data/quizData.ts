export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export type Category = 'quran' | 'general' | 'mathematics' | 'islamic' | 'english';

export interface CategoryInfo {
  id: Category;
  name: string;
  icon: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'quran',
    name: 'Quran Questions',
    icon: '📖',
    description: 'Test your knowledge of the Holy Quran'
  },
  {
    id: 'general',
    name: 'General Knowledge',
    icon: '🌍',
    description: 'World facts, history, and current affairs'
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '🔢',
    description: 'Numbers, equations, and problem solving'
  },
  {
    id: 'islamic',
    name: 'Islamic Questions',
    icon: '🕌',
    description: 'Islamic history, culture, and teachings'
  },
  {
    id: 'english',
    name: 'English',
    icon: '📚',
    description: 'Grammar, vocabulary, and comprehension'
  }
];

export const quizQuestionsByCategory: Record<Category, Question[]> = {
  quran: [
    { id: 1, question: "How many Surahs are there in the Quran?", options: ["114", "110", "120", "100"], correctAnswer: 0, explanation: "The Holy Quran contains 114 Surahs (chapters), starting with Al-Fatiha and ending with An-Nas." },
    { id: 2, question: "What is the first Surah in the Quran?", options: ["Al-Baqarah", "Al-Fatiha", "Al-Ikhlas", "An-Nas"], correctAnswer: 1, explanation: "Al-Fatiha (The Opening) is the first Surah of the Quran and is recited in every unit of prayer." },
    { id: 3, question: "Which Surah is known as the heart of the Quran?", options: ["Al-Fatiha", "Yasin", "Al-Mulk", "Ar-Rahman"], correctAnswer: 1, explanation: "Surah Yasin is often called the heart of the Quran due to its importance and spiritual significance." },
    { id: 4, question: "How many verses (Ayahs) are in the Quran approximately?", options: ["5,000", "6,236", "7,000", "8,000"], correctAnswer: 1, explanation: "The Quran contains approximately 6,236 verses (Ayahs), though the exact count varies slightly by counting method." },
    { id: 5, question: "In which language was the Quran revealed?", options: ["Urdu", "Persian", "Arabic", "Hebrew"], correctAnswer: 2, explanation: "The Quran was revealed in Arabic to Prophet Muhammad (PBUH) over 23 years." },
    { id: 6, question: "Which Surah does not begin with Bismillah?", options: ["At-Tawbah", "Al-Fatiha", "Al-Ikhlas", "Al-Mulk"], correctAnswer: 0, explanation: "Surah At-Tawbah (The Repentance) is the only Surah that does not begin with Bismillah (In the name of Allah)." },
    { id: 7, question: "How many times is Prophet Muhammad (PBUH) mentioned by name in the Quran?", options: ["2 times", "4 times", "7 times", "10 times"], correctAnswer: 1, explanation: "Prophet Muhammad (PBUH) is mentioned by name 4 times in the Quran." },
    { id: 8, question: "What is the longest Surah in the Quran?", options: ["Al-Fatiha", "Al-Baqarah", "Yasin", "Al-Mulk"], correctAnswer: 1, explanation: "Surah Al-Baqarah (The Cow) is the longest Surah with 286 verses." },
    { id: 9, question: "What is the shortest Surah in the Quran?", options: ["Al-Ikhlas", "Al-Kawthar", "An-Nasr", "Al-Asr"], correctAnswer: 1, explanation: "Surah Al-Kawthar is the shortest Surah with only 3 verses." },
    { id: 10, question: "Which angel revealed the Quran to Prophet Muhammad?", options: ["Israfil", "Mikail", "Jibreel (Gabriel)", "Izrail"], correctAnswer: 2, explanation: "Angel Jibreel (Gabriel) was sent by Allah to reveal the Quran to Prophet Muhammad (PBUH)." },
    { id: 11, question: "In which city was the Quran first revealed?", options: ["Madinah", "Makkah", "Jerusalem", "Damascus"], correctAnswer: 1, explanation: "The first revelation came in the cave of Hira near Makkah." },
    { id: 12, question: "Which Surah is recited for protection?", options: ["Al-Mulk", "Al-Fatiha", "Al-Ikhlas", "Al-Falaq"], correctAnswer: 3, explanation: "Al-Falaq and An-Nas are known as Al-Mu'awwidhatayn (the two seeking refuge) and are recited for protection." },
    { id: 13, question: "How many Juz (parts) is the Quran divided into?", options: ["20", "25", "30", "40"], correctAnswer: 2, explanation: "The Quran is divided into 30 Juz (parts) for easier recitation and memorization." },
    { id: 14, question: "Which Surah mentions the Battle of Badr?", options: ["Al-Anfal", "At-Tawbah", "Al-Imran", "Al-Ahzab"], correctAnswer: 0, explanation: "Surah Al-Anfal discusses the Battle of Badr and its lessons." },
    { id: 15, question: "What is the night called when the Quran was first revealed?", options: ["Laylat al-Miraj", "Laylat al-Qadr", "Laylat al-Isra", "Laylat al-Bara'ah"], correctAnswer: 1, explanation: "Laylat al-Qadr (Night of Power) is when the first verses of the Quran were revealed." },
    { id: 16, question: "Which Surah is named after a woman?", options: ["Maryam", "Fatimah", "Aisha", "Khadijah"], correctAnswer: 0, explanation: "Surah Maryam is named after Mary, the mother of Prophet Isa (Jesus)." },
    { id: 17, question: "Which Surah contains the Ayat al-Kursi?", options: ["Al-Fatiha", "Al-Baqarah", "Al-Imran", "An-Nisa"], correctAnswer: 1, explanation: "Ayat al-Kursi (The Throne Verse) is found in Surah Al-Baqarah, verse 255." },
    { id: 18, question: "How many Prophets are mentioned in the Quran?", options: ["15", "20", "25", "30"], correctAnswer: 2, explanation: "25 Prophets are mentioned by name in the Quran." },
    { id: 19, question: "Which Surah talks about the story of Prophet Yusuf (Joseph)?", options: ["Yusuf", "Ibrahim", "Musa", "Nuh"], correctAnswer: 0, explanation: "Surah Yusuf is dedicated to the beautiful story of Prophet Yusuf (Joseph)." },
    { id: 20, question: "What is the last complete Surah revealed?", options: ["An-Nasr", "Al-Fatiha", "Al-Ikhlas", "Al-Kawthar"], correctAnswer: 0, explanation: "Surah An-Nasr (The Victory) is considered the last complete Surah revealed." }
  ],
  
  general: [
    { id: 1, question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correctAnswer: 2, explanation: "Paris is the capital and largest city of France, known for the Eiffel Tower and rich history." },
    { id: 2, question: "How many continents are there in the world?", options: ["5", "6", "7", "8"], correctAnswer: 2, explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia." },
    { id: 3, question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], correctAnswer: 1, explanation: "Leonardo da Vinci painted the Mona Lisa in the early 16th century." },
    { id: 4, question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correctAnswer: 3, explanation: "The Pacific Ocean is the largest and deepest ocean, covering more than 30% of Earth's surface." },
    { id: 5, question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correctAnswer: 2, explanation: "World War II ended in 1945 with the surrender of Germany and Japan." },
    { id: 6, question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correctAnswer: 1, explanation: "Vatican City is the smallest country in the world with an area of about 0.44 km²." },
    { id: 7, question: "Who invented the telephone?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"], correctAnswer: 2, explanation: "Alexander Graham Bell is credited with inventing the telephone in 1876." },
    { id: 8, question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correctAnswer: 2, explanation: "Diamond is the hardest natural substance on Earth." },
    { id: 9, question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], correctAnswer: 2, explanation: "A rainbow has 7 colors: Red, Orange, Yellow, Green, Blue, Indigo, and Violet." },
    { id: 10, question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], correctAnswer: 1, explanation: "Jupiter is the largest planet in our solar system." },
    { id: 11, question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correctAnswer: 1, explanation: "William Shakespeare wrote the famous tragedy 'Romeo and Juliet'." },
    { id: 12, question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], correctAnswer: 2, explanation: "The Yen is the official currency of Japan." },
    { id: 13, question: "How many days are in a leap year?", options: ["364", "365", "366", "367"], correctAnswer: 2, explanation: "A leap year has 366 days, with an extra day added to February." },
    { id: 14, question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], correctAnswer: 0, explanation: "The speed of light in a vacuum is approximately 300,000 kilometers per second." },
    { id: 15, question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], correctAnswer: 1, explanation: "Neil Armstrong was the first person to walk on the moon on July 20, 1969." },
    { id: 16, question: "What is the largest mammal in the world?", options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correctAnswer: 1, explanation: "The Blue Whale is the largest mammal, reaching lengths of up to 30 meters." },
    { id: 17, question: "In which country are the pyramids of Giza located?", options: ["Iraq", "Egypt", "Sudan", "Libya"], correctAnswer: 1, explanation: "The pyramids of Giza are located in Egypt, near Cairo." },
    { id: 18, question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: 1, explanation: "Water boils at 100°C (212°F) at sea level." },
    { id: 19, question: "How many bones are in the adult human body?", options: ["186", "206", "226", "246"], correctAnswer: 1, explanation: "An adult human body has 206 bones." },
    { id: 20, question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correctAnswer: 2, explanation: "Canberra is the capital of Australia, though Sydney and Melbourne are larger cities." }
  ],
  
  mathematics: [
    { id: 1, question: "What is 15 + 27?", options: ["40", "42", "44", "46"], correctAnswer: 1, explanation: "15 + 27 = 42" },
    { id: 2, question: "What is 8 × 7?", options: ["54", "56", "58", "60"], correctAnswer: 1, explanation: "8 × 7 = 56" },
    { id: 3, question: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: 2, explanation: "The square root of 144 is 12 because 12 × 12 = 144" },
    { id: 4, question: "What is 100 ÷ 4?", options: ["20", "25", "30", "35"], correctAnswer: 1, explanation: "100 ÷ 4 = 25" },
    { id: 5, question: "What is 5²?", options: ["10", "15", "20", "25"], correctAnswer: 3, explanation: "5² = 5 × 5 = 25" },
    { id: 6, question: "What is 50% of 200?", options: ["50", "75", "100", "125"], correctAnswer: 2, explanation: "50% of 200 = (50/100) × 200 = 100" },
    { id: 7, question: "What is the value of π (pi) approximately?", options: ["2.14", "3.14", "4.14", "5.14"], correctAnswer: 1, explanation: "The value of π is approximately 3.14159..." },
    { id: 8, question: "What is 12 - 5 + 8?", options: ["13", "14", "15", "16"], correctAnswer: 2, explanation: "12 - 5 + 8 = 7 + 8 = 15" },
    { id: 9, question: "How many sides does a hexagon have?", options: ["4", "5", "6", "7"], correctAnswer: 2, explanation: "A hexagon has 6 sides." },
    { id: 10, question: "What is 9 × 9?", options: ["72", "78", "81", "84"], correctAnswer: 2, explanation: "9 × 9 = 81" },
    { id: 11, question: "What is ½ of 50?", options: ["20", "25", "30", "35"], correctAnswer: 1, explanation: "½ of 50 = 50 ÷ 2 = 25" },
    { id: 12, question: "What is 7 + 8 - 3?", options: ["10", "11", "12", "13"], correctAnswer: 2, explanation: "7 + 8 - 3 = 15 - 3 = 12" },
    { id: 13, question: "How many degrees are in a right angle?", options: ["45", "60", "90", "180"], correctAnswer: 2, explanation: "A right angle measures 90 degrees." },
    { id: 14, question: "What is 6 × 6?", options: ["30", "32", "34", "36"], correctAnswer: 3, explanation: "6 × 6 = 36" },
    { id: 15, question: "What is 20% of 100?", options: ["10", "15", "20", "25"], correctAnswer: 2, explanation: "20% of 100 = (20/100) × 100 = 20" },
    { id: 16, question: "What is 3³ (3 cubed)?", options: ["6", "9", "18", "27"], correctAnswer: 3, explanation: "3³ = 3 × 3 × 3 = 27" },
    { id: 17, question: "How many millimeters are in 1 centimeter?", options: ["5", "10", "15", "20"], correctAnswer: 1, explanation: "1 centimeter = 10 millimeters" },
    { id: 18, question: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "The sum of all angles in a triangle is always 180 degrees." },
    { id: 19, question: "What is 15 × 4?", options: ["50", "55", "60", "65"], correctAnswer: 2, explanation: "15 × 4 = 60" },
    { id: 20, question: "What is ¼ of 80?", options: ["15", "20", "25", "30"], correctAnswer: 1, explanation: "¼ of 80 = 80 ÷ 4 = 20" }
  ],
  
  islamic: [
    { id: 1, question: "How many pillars of Islam are there?", options: ["3", "4", "5", "6"], correctAnswer: 2, explanation: "There are 5 pillars of Islam: Shahada, Salah, Zakat, Sawm, and Hajj." },
    { id: 2, question: "What is the first pillar of Islam?", options: ["Prayer", "Fasting", "Shahada (Faith)", "Charity"], correctAnswer: 2, explanation: "Shahada (declaration of faith) is the first pillar of Islam." },
    { id: 3, question: "How many times do Muslims pray daily?", options: ["3", "4", "5", "6"], correctAnswer: 2, explanation: "Muslims perform 5 daily prayers: Fajr, Dhuhr, Asr, Maghrib, and Isha." },
    { id: 4, question: "In which month do Muslims fast?", options: ["Shawwal", "Ramadan", "Muharram", "Rajab"], correctAnswer: 1, explanation: "Muslims fast during the month of Ramadan, the 9th month of the Islamic calendar." },
    { id: 5, question: "What is the pilgrimage to Makkah called?", options: ["Umrah", "Hajj", "Ziyarah", "Tawaf"], correctAnswer: 1, explanation: "Hajj is the annual pilgrimage to Makkah, one of the five pillars of Islam." },
    { id: 6, question: "Who was the first Prophet in Islam?", options: ["Prophet Muhammad", "Prophet Ibrahim", "Prophet Adam", "Prophet Nuh"], correctAnswer: 2, explanation: "Prophet Adam (peace be upon him) was the first Prophet and the first human being." },
    { id: 7, question: "What is Zakat?", options: ["Prayer", "Fasting", "Charity", "Pilgrimage"], correctAnswer: 2, explanation: "Zakat is obligatory charity given to the poor, one of the five pillars of Islam." },
    { id: 8, question: "What is the Islamic greeting?", options: ["Hello", "As-Salamu Alaykum", "Good morning", "Namaste"], correctAnswer: 1, explanation: "As-Salamu Alaykum (Peace be upon you) is the Islamic greeting." },
    { id: 9, question: "Which direction do Muslims face when praying?", options: ["East", "West", "Towards Kaaba", "North"], correctAnswer: 2, explanation: "Muslims face towards the Kaaba in Makkah when praying, known as the Qibla." },
    { id: 10, question: "Who was the last Prophet in Islam?", options: ["Prophet Isa", "Prophet Musa", "Prophet Muhammad", "Prophet Ibrahim"], correctAnswer: 2, explanation: "Prophet Muhammad (peace be upon him) is the last and final Prophet in Islam." },
    { id: 11, question: "What is the Islamic holy book called?", options: ["Bible", "Torah", "Quran", "Vedas"], correctAnswer: 2, explanation: "The Quran is the holy book of Islam, revealed to Prophet Muhammad." },
    { id: 12, question: "What is the night journey of Prophet Muhammad called?", options: ["Hijrah", "Isra and Miraj", "Laylat al-Qadr", "Eid"], correctAnswer: 1, explanation: "Isra and Miraj refers to the night journey of Prophet Muhammad from Makkah to Jerusalem and ascension to heaven." },
    { id: 13, question: "How many chapters (Surahs) are in the Quran?", options: ["100", "110", "114", "120"], correctAnswer: 2, explanation: "The Quran contains 114 Surahs (chapters)." },
    { id: 14, question: "What is the first month of the Islamic calendar?", options: ["Ramadan", "Muharram", "Shawwal", "Rajab"], correctAnswer: 1, explanation: "Muharram is the first month of the Islamic lunar calendar." },
    { id: 15, question: "What does 'Eid al-Fitr' celebrate?", options: ["End of Ramadan", "Sacrifice", "New Year", "Prophet's birth"], correctAnswer: 0, explanation: "Eid al-Fitr celebrates the end of the fasting month of Ramadan." },
    { id: 16, question: "Who was Prophet Muhammad's first wife?", options: ["Aisha", "Khadijah", "Fatimah", "Hafsa"], correctAnswer: 1, explanation: "Khadijah bint Khuwaylid was the first wife of Prophet Muhammad and the first person to accept Islam." },
    { id: 17, question: "What is the Islamic declaration of faith called?", options: ["Salah", "Shahada", "Zakat", "Sawm"], correctAnswer: 1, explanation: "Shahada is the Islamic declaration of faith: 'There is no god but Allah, and Muhammad is His messenger.'" },
    { id: 18, question: "What is the holiest city in Islam?", options: ["Medina", "Jerusalem", "Makkah", "Cairo"], correctAnswer: 2, explanation: "Makkah is the holiest city in Islam, home to the Kaaba." },
    { id: 19, question: "What is Eid al-Adha also known as?", options: ["Festival of Breaking Fast", "Festival of Sacrifice", "Festival of Lights", "New Year"], correctAnswer: 1, explanation: "Eid al-Adha is the Festival of Sacrifice, commemorating Prophet Ibrahim's willingness to sacrifice his son." },
    { id: 20, question: "What is the migration of Prophet Muhammad from Makkah to Madinah called?", options: ["Hajj", "Hijrah", "Isra", "Umrah"], correctAnswer: 1, explanation: "Hijrah refers to the migration of Prophet Muhammad from Makkah to Madinah in 622 CE, marking the start of the Islamic calendar." }
  ],
  
  english: [
    { id: 1, question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Childer"], correctAnswer: 1, explanation: "'Children' is the correct plural form of 'child'." },
    { id: 2, question: "Which is the correct spelling?", options: ["Recieve", "Receive", "Receeve", "Receve"], correctAnswer: 1, explanation: "The correct spelling is 'Receive' (i before e, except after c)." },
    { id: 3, question: "What is a synonym for 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], correctAnswer: 1, explanation: "'Joyful' is a synonym (similar meaning) for 'happy'." },
    { id: 4, question: "What is the past tense of 'go'?", options: ["Goed", "Gone", "Went", "Going"], correctAnswer: 2, explanation: "'Went' is the simple past tense of 'go'." },
    { id: 5, question: "Which word is a noun?", options: ["Run", "Quickly", "Beautiful", "Book"], correctAnswer: 3, explanation: "'Book' is a noun (a thing/object). Run can be noun or verb, but primarily used as verb." },
    { id: 6, question: "What is an antonym for 'hot'?", options: ["Warm", "Cold", "Cool", "Freezing"], correctAnswer: 1, explanation: "'Cold' is the direct antonym (opposite) of 'hot'." },
    { id: 7, question: "Which sentence is grammatically correct?", options: ["She don't like ice cream", "She doesn't like ice cream", "She not like ice cream", "She doesn't likes ice cream"], correctAnswer: 1, explanation: "'She doesn't like ice cream' is grammatically correct (doesn't = does not)." },
    { id: 8, question: "What is the superlative form of 'good'?", options: ["Gooder", "Goodest", "Better", "Best"], correctAnswer: 3, explanation: "'Best' is the superlative form of 'good' (good → better → best)." },
    { id: 9, question: "What type of word is 'quickly'?", options: ["Noun", "Verb", "Adjective", "Adverb"], correctAnswer: 3, explanation: "'Quickly' is an adverb, describing how an action is done." },
    { id: 10, question: "Which is the correct contraction of 'I am'?", options: ["I'm", "Im", "I'am", "Iam"], correctAnswer: 0, explanation: "'I'm' is the correct contraction of 'I am'." },
    { id: 11, question: "What is the plural of 'mouse'?", options: ["Mouses", "Mice", "Mooses", "Mouse"], correctAnswer: 1, explanation: "'Mice' is the correct plural form of 'mouse'." },
    { id: 12, question: "Which word is an adjective?", options: ["Run", "Beautiful", "Quickly", "Happiness"], correctAnswer: 1, explanation: "'Beautiful' is an adjective, describing a noun." },
    { id: 13, question: "What is the comparative form of 'bad'?", options: ["Badder", "Baddest", "Worse", "Worst"], correctAnswer: 2, explanation: "'Worse' is the comparative form of 'bad' (bad → worse → worst)." },
    { id: 14, question: "Which sentence uses correct punctuation?", options: ["How are you", "How are you.", "How are you?", "How are you!"], correctAnswer: 2, explanation: "Questions should end with a question mark (?), so 'How are you?' is correct." },
    { id: 15, question: "What is the past tense of 'eat'?", options: ["Eated", "Ate", "Eaten", "Eating"], correctAnswer: 1, explanation: "'Ate' is the simple past tense of 'eat'." },
    { id: 16, question: "Which is a proper noun?", options: ["city", "London", "building", "country"], correctAnswer: 1, explanation: "'London' is a proper noun (specific name), while others are common nouns." },
    { id: 17, question: "What is a homophone of 'write'?", options: ["Wrong", "Right", "Bright", "White"], correctAnswer: 1, explanation: "'Right' is a homophone of 'write' (sounds the same but different meaning and spelling)." },
    { id: 18, question: "Which sentence is in passive voice?", options: ["I wrote a letter", "The letter was written by me", "I am writing a letter", "I will write a letter"], correctAnswer: 1, explanation: "'The letter was written by me' is in passive voice (subject receives the action)." },
    { id: 19, question: "What does 'prefix' mean?", options: ["End of a word", "Beginning of a word", "Middle of a word", "Synonym"], correctAnswer: 1, explanation: "A prefix is added to the beginning of a word (e.g., 'un-' in 'unhappy')." },
    { id: 20, question: "Which is correct: 'Their', 'There', or 'They're' in: '_____ going to the park'?", options: ["Their", "There", "They're", "All correct"], correctAnswer: 2, explanation: "'They're' (They are) is correct: 'They're going to the park.'" }
  ]
};

// Helper function to get questions by category
export function getQuestionsByCategory(category: Category): Question[] {
  return quizQuestionsByCategory[category] || [];
}
