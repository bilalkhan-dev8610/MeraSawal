import type { Question } from './questionsData';

// Complete Geography questions for all subcategories
export const geographyQuestions: Question[] = [
  
  // ============= GEOGRAPHY - INDIAN GEOGRAPHY (Easy) =============
  {
    id: 'geo-ind-e-1',
    question: 'Which is the longest river in India?',
    options: ['Yamuna', 'Ganga', 'Godavari', 'Brahmaputra'],
    correctAnswer: 1,
    explanation: 'The Ganga is the longest river in India at 2,525 km.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },
  {
    id: 'geo-ind-e-2',
    question: 'Which state has the longest coastline in India?',
    options: ['Tamil Nadu', 'Maharashtra', 'Gujarat', 'Andhra Pradesh'],
    correctAnswer: 2,
    explanation: 'Gujarat has the longest coastline (1,600 km) in India.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },
  {
    id: 'geo-ind-e-3',
    question: 'Kanchenjunga is located in which state?',
    options: ['Uttarakhand', 'Himachal Pradesh', 'Sikkim', 'Arunachal Pradesh'],
    correctAnswer: 2,
    explanation: 'Kanchenjunga (third highest peak) is in Sikkim.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },
  {
    id: 'geo-ind-e-4',
    question: 'Which is the largest state by area in India?',
    options: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh'],
    correctAnswer: 2,
    explanation: 'Rajasthan is the largest state by area (342,239 sq km).',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },
  {
    id: 'geo-ind-e-5',
    question: 'Gateway of India is located in?',
    options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    correctAnswer: 1,
    explanation: 'Gateway of India monument is in Mumbai, Maharashtra.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },
  {
    id: 'geo-ind-e-6',
    question: 'Sundarbans is located in which state?',
    options: ['Odisha', 'West Bengal', 'Kerala', 'Gujarat'],
    correctAnswer: 1,
    explanation: 'Sundarbans mangrove forest is in West Bengal.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },
  {
    id: 'geo-ind-e-7',
    question: 'Which city is known as Pink City?',
    options: ['Jaipur', 'Jodhpur', 'Udaipur', 'Bikaner'],
    correctAnswer: 0,
    explanation: 'Jaipur is called Pink City due to its pink-colored buildings.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },
  {
    id: 'geo-ind-e-8',
    question: 'Which is the smallest state by area in India?',
    options: ['Goa', 'Sikkim', 'Tripura', 'Manipur'],
    correctAnswer: 0,
    explanation: 'Goa is the smallest state by area (3,702 sq km).',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },
  {
    id: 'geo-ind-e-9',
    question: 'Narmada river flows into which sea?',
    options: ['Bay of Bengal', 'Arabian Sea', 'Indian Ocean', 'Lakshadweep Sea'],
    correctAnswer: 1,
    explanation: 'Narmada river flows westward into Arabian Sea.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },
  {
    id: 'geo-ind-e-10',
    question: 'Which plateau is called "Deccan Plateau"?',
    options: ['Northern Plateau', 'Southern Plateau', 'Eastern Plateau', 'Western Plateau'],
    correctAnswer: 1,
    explanation: 'Deccan Plateau is in southern peninsular India.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'easy'
  },

  // ============= GEOGRAPHY - INDIAN GEOGRAPHY (Medium) =============
  {
    id: 'geo-ind-m-1',
    question: 'Western Ghats are also known as?',
    options: ['Vindhyas', 'Sahyadri', 'Aravalli', 'Satpura'],
    correctAnswer: 1,
    explanation: 'Western Ghats are called Sahyadri in Maharashtra.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },
  {
    id: 'geo-ind-m-2',
    question: 'Chilika Lake is in which state?',
    options: ['Andhra Pradesh', 'Odisha', 'West Bengal', 'Tamil Nadu'],
    correctAnswer: 1,
    explanation: 'Chilika Lake (largest coastal lagoon) is in Odisha.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },
  {
    id: 'geo-ind-m-3',
    question: 'Tropic of Cancer passes through how many Indian states?',
    options: ['6', '8', '10', '12'],
    correctAnswer: 1,
    explanation: 'Tropic of Cancer passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },
  {
    id: 'geo-ind-m-4',
    question: 'Which pass connects Srinagar to Leh?',
    options: ['Nathu La', 'Zoji La', 'Rohtang Pass', 'Khyber Pass'],
    correctAnswer: 1,
    explanation: 'Zoji La Pass connects Srinagar (Kashmir) to Leh (Ladakh).',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },
  {
    id: 'geo-ind-m-5',
    question: 'Kaveri river dispute is between which states?',
    options: ['Kerala and TN', 'Karnataka and TN', 'AP and TN', 'Karnataka and Kerala'],
    correctAnswer: 1,
    explanation: 'Kaveri water dispute is mainly between Karnataka and Tamil Nadu.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },
  {
    id: 'geo-ind-m-6',
    question: 'Hirakud Dam is built on which river?',
    options: ['Godavari', 'Krishna', 'Mahanadi', 'Narmada'],
    correctAnswer: 2,
    explanation: 'Hirakud Dam is on Mahanadi river in Odisha.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },
  {
    id: 'geo-ind-m-7',
    question: 'Silent Valley National Park is in which state?',
    options: ['Tamil Nadu', 'Karnataka', 'Kerala', 'Goa'],
    correctAnswer: 2,
    explanation: 'Silent Valley National Park is in Kerala (Western Ghats).',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },
  {
    id: 'geo-ind-m-8',
    question: 'Andaman and Nicobar Islands are separated by which channel?',
    options: ['Ten Degree Channel', 'Nine Degree Channel', 'Eight Degree Channel', 'Palk Strait'],
    correctAnswer: 0,
    explanation: 'Ten Degree Channel separates Andaman and Nicobar Islands.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },
  {
    id: 'geo-ind-m-9',
    question: 'Which soil is most suitable for cotton cultivation?',
    options: ['Alluvial', 'Black (Regur)', 'Red', 'Laterite'],
    correctAnswer: 1,
    explanation: 'Black soil (Regur soil) is ideal for cotton cultivation.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },
  {
    id: 'geo-ind-m-10',
    question: 'Brahmaputra is known by which name in Bangladesh?',
    options: ['Padma', 'Jamuna', 'Meghna', 'Surma'],
    correctAnswer: 1,
    explanation: 'Brahmaputra is called Jamuna in Bangladesh.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'medium'
  },

  // ============= GEOGRAPHY - INDIAN GEOGRAPHY (Hard) =============
  {
    id: 'geo-ind-h-1',
    question: 'Duncan Passage is between which islands?',
    options: ['Little Andaman and Car Nicobar', 'South Andaman and Little Andaman', 'Great Nicobar and Sumatra', 'North Andaman and Middle Andaman'],
    correctAnswer: 1,
    explanation: 'Duncan Passage is between South Andaman and Little Andaman.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },
  {
    id: 'geo-ind-h-2',
    question: 'Indira Point (southernmost point of India) is in?',
    options: ['Lakshadweep', 'Great Nicobar', 'Little Andaman', 'Kanyakumari'],
    correctAnswer: 1,
    explanation: 'Indira Point is at southern tip of Great Nicobar Island.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },
  {
    id: 'geo-ind-h-3',
    question: 'Which line divides India and Pakistan in Rann of Kutch?',
    options: ['Radcliffe Line', 'Durand Line', 'Sir Creek Line', 'McMahon Line'],
    correctAnswer: 2,
    explanation: 'Sir Creek is disputed boundary line in Rann of Kutch.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },
  {
    id: 'geo-ind-h-4',
    question: 'Siachen Glacier is in which mountain range?',
    options: ['Himadri', 'Karakoram', 'Pir Panjal', 'Zaskar'],
    correctAnswer: 1,
    explanation: 'Siachen Glacier is in Karakoram Range (Ladakh).',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },
  {
    id: 'geo-ind-h-5',
    question: 'Barren Island (only active volcano in India) is in?',
    options: ['Lakshadweep', 'Andaman', 'Nicobar', 'Gulf of Khambhat'],
    correctAnswer: 1,
    explanation: 'Barren Island (active volcano) is in Andaman Islands.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },
  {
    id: 'geo-ind-h-6',
    question: 'Nine Degree Channel separates which islands?',
    options: ['Lakshadweep and Minicoy', 'Andaman and Nicobar', 'Minicoy and Maldives', 'Car Nicobar and Great Nicobar'],
    correctAnswer: 0,
    explanation: 'Nine Degree Channel separates Lakshadweep and Minicoy Island.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },
  {
    id: 'geo-ind-h-7',
    question: 'Barak Valley is in which state?',
    options: ['Manipur', 'Assam', 'Mizoram', 'Tripura'],
    correctAnswer: 1,
    explanation: 'Barak Valley is in southern Assam.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },
  {
    id: 'geo-ind-h-8',
    question: 'Palghat Gap connects which states?',
    options: ['Kerala and Karnataka', 'Kerala and Tamil Nadu', 'Karnataka and Tamil Nadu', 'Goa and Karnataka'],
    correctAnswer: 1,
    explanation: 'Palghat Gap (Palakkad Gap) connects Kerala and Tamil Nadu through Western Ghats.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },
  {
    id: 'geo-ind-h-9',
    question: 'Loktak Lake (largest freshwater lake in NE India) is in?',
    options: ['Assam', 'Manipur', 'Meghalaya', 'Mizoram'],
    correctAnswer: 1,
    explanation: 'Loktak Lake is in Manipur, known for floating phumdis.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },
  {
    id: 'geo-ind-h-10',
    question: 'Standard Meridian of India (82°30\'E) passes through which state?',
    options: ['Madhya Pradesh', 'Uttar Pradesh', 'Bihar', 'Chhattisgarh'],
    correctAnswer: 1,
    explanation: 'Standard Meridian passes through Mirzapur in Uttar Pradesh.',
    categoryId: 'geography',
    subCategoryId: 'indian-geography',
    level: 'hard'
  },

  // ============= GEOGRAPHY - WORLD GEOGRAPHY (Easy) =============
  {
    id: 'geo-world-e-1',
    question: 'Largest continent is?',
    options: ['Africa', 'Asia', 'Europe', 'North America'],
    correctAnswer: 1,
    explanation: 'Asia is the largest continent by area and population.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-world-e-2',
    question: 'Largest ocean is?',
    options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    correctAnswer: 1,
    explanation: 'Pacific Ocean is the largest ocean (covers 30% of Earth).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-world-e-3',
    question: 'Mount Everest is in which country?',
    options: ['India', 'Nepal', 'China', 'Nepal-China border'],
    correctAnswer: 3,
    explanation: 'Mount Everest lies on Nepal-China (Tibet) border.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-world-e-4',
    question: 'Nile River flows through which continent?',
    options: ['Asia', 'Africa', 'Europe', 'South America'],
    correctAnswer: 1,
    explanation: 'Nile River flows through Africa (longest river).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-world-e-5',
    question: 'Sahara Desert is in which continent?',
    options: ['Asia', 'Africa', 'Australia', 'South America'],
    correctAnswer: 1,
    explanation: 'Sahara Desert is in North Africa (largest hot desert).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-world-e-6',
    question: 'Amazon rainforest is in which continent?',
    options: ['Africa', 'Asia', 'South America', 'Australia'],
    correctAnswer: 2,
    explanation: 'Amazon rainforest is in South America (largest rainforest).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-world-e-7',
    question: 'Great Wall of China is in which country?',
    options: ['Japan', 'China', 'Mongolia', 'Korea'],
    correctAnswer: 1,
    explanation: 'Great Wall of China is in China (longest wall).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-world-e-8',
    question: 'Statue of Liberty is in which city?',
    options: ['Washington DC', 'Boston', 'New York', 'Chicago'],
    correctAnswer: 2,
    explanation: 'Statue of Liberty is in New York Harbor, USA.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-world-e-9',
    question: 'Eiffel Tower is in which city?',
    options: ['London', 'Paris', 'Rome', 'Berlin'],
    correctAnswer: 1,
    explanation: 'Eiffel Tower is in Paris, France.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },
  {
    id: 'geo-world-e-10',
    question: 'Which is the smallest continent?',
    options: ['Europe', 'Antarctica', 'Australia', 'South America'],
    correctAnswer: 2,
    explanation: 'Australia is the smallest continent.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'easy'
  },

  // ============= GEOGRAPHY - WORLD GEOGRAPHY (Medium) =============
  {
    id: 'geo-world-m-1',
    question: 'Which strait separates Asia and Africa?',
    options: ['Hormuz Strait', 'Malacca Strait', 'Bab-el-Mandeb', 'Gibraltar Strait'],
    correctAnswer: 2,
    explanation: 'Bab-el-Mandeb Strait separates Yemen (Asia) and Djibouti (Africa).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },
  {
    id: 'geo-world-m-2',
    question: 'Grand Canyon is in which country?',
    options: ['Canada', 'USA', 'Mexico', 'Australia'],
    correctAnswer: 1,
    explanation: 'Grand Canyon is in Arizona, USA.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },
  {
    id: 'geo-world-m-3',
    question: 'Dead Sea is between which countries?',
    options: ['Egypt and Sudan', 'Israel and Jordan', 'Iran and Iraq', 'Turkey and Syria'],
    correctAnswer: 1,
    explanation: 'Dead Sea is between Israel and Jordan (lowest point on Earth).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },
  {
    id: 'geo-world-m-4',
    question: 'Andes Mountains are in which continent?',
    options: ['Asia', 'Africa', 'South America', 'North America'],
    correctAnswer: 2,
    explanation: 'Andes Mountains run along western South America (longest mountain range).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },
  {
    id: 'geo-world-m-5',
    question: 'Suez Canal connects which seas?',
    options: ['Red Sea and Mediterranean Sea', 'Black Sea and Caspian Sea', 'Arabian Sea and Red Sea', 'Mediterranean and Black Sea'],
    correctAnswer: 0,
    explanation: 'Suez Canal connects Red Sea and Mediterranean Sea (Egypt).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },
  {
    id: 'geo-world-m-6',
    question: 'Victoria Falls is on which river?',
    options: ['Nile', 'Congo', 'Zambezi', 'Niger'],
    correctAnswer: 2,
    explanation: 'Victoria Falls is on Zambezi River (Zambia-Zimbabwe border).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },
  {
    id: 'geo-world-m-7',
    question: 'Ring of Fire is associated with?',
    options: ['Earthquakes and volcanoes', 'Forest fires', 'Oil fields', 'Solar eclipses'],
    correctAnswer: 0,
    explanation: 'Pacific Ring of Fire is zone of earthquakes and volcanic activity.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },
  {
    id: 'geo-world-m-8',
    question: 'Lake Baikal (deepest lake) is in which country?',
    options: ['China', 'Russia', 'Mongolia', 'Kazakhstan'],
    correctAnswer: 1,
    explanation: 'Lake Baikal is in Siberia, Russia (deepest and oldest lake).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },
  {
    id: 'geo-world-m-9',
    question: 'Panama Canal connects which oceans?',
    options: ['Atlantic and Pacific', 'Pacific and Indian', 'Atlantic and Arctic', 'Indian and Arctic'],
    correctAnswer: 0,
    explanation: 'Panama Canal connects Atlantic Ocean and Pacific Ocean.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },
  {
    id: 'geo-world-m-10',
    question: 'Gobi Desert is in which countries?',
    options: ['India and Pakistan', 'Saudi Arabia and UAE', 'China and Mongolia', 'Egypt and Libya'],
    correctAnswer: 2,
    explanation: 'Gobi Desert is in northern China and southern Mongolia.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'medium'
  },

  // ============= GEOGRAPHY - WORLD GEOGRAPHY (Hard) =============
  {
    id: 'geo-world-h-1',
    question: 'Strait of Malacca connects which seas?',
    options: ['Andaman Sea and South China Sea', 'Arabian Sea and Bay of Bengal', 'Red Sea and Arabian Sea', 'Java Sea and Timor Sea'],
    correctAnswer: 0,
    explanation: 'Strait of Malacca connects Andaman Sea and South China Sea (between Malaysia and Indonesia).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },
  {
    id: 'geo-world-h-2',
    question: 'Atacama Desert (driest place on Earth) is in which country?',
    options: ['Peru', 'Chile', 'Argentina', 'Bolivia'],
    correctAnswer: 1,
    explanation: 'Atacama Desert is in northern Chile (driest non-polar desert).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },
  {
    id: 'geo-world-h-3',
    question: 'Which line divides North and South Korea?',
    options: ['17th Parallel', '38th Parallel', '49th Parallel', 'Maginot Line'],
    correctAnswer: 1,
    explanation: '38th Parallel divides North Korea and South Korea.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },
  {
    id: 'geo-world-h-4',
    question: 'Fjords are characteristic feature of which country?',
    options: ['Iceland', 'Norway', 'Finland', 'Denmark'],
    correctAnswer: 1,
    explanation: 'Norway is famous for its deep glacial fjords.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },
  {
    id: 'geo-world-h-5',
    question: 'Mekong River flows through how many countries?',
    options: ['4', '6', '8', '10'],
    correctAnswer: 1,
    explanation: 'Mekong flows through 6 countries: China, Myanmar, Laos, Thailand, Cambodia, Vietnam.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },
  {
    id: 'geo-world-h-6',
    question: 'Pampas grasslands are in which country?',
    options: ['Brazil', 'Argentina', 'Venezuela', 'Colombia'],
    correctAnswer: 1,
    explanation: 'Pampas are fertile lowland grasslands in Argentina.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },
  {
    id: 'geo-world-h-7',
    question: 'Great Barrier Reef is off the coast of?',
    options: ['New Zealand', 'Australia (Queensland)', 'Indonesia', 'Philippines'],
    correctAnswer: 1,
    explanation: 'Great Barrier Reef is off Queensland coast, Australia (largest coral reef).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },
  {
    id: 'geo-world-h-8',
    question: 'Bosphorus Strait separates which continents?',
    options: ['Asia and Africa', 'Europe and Asia', 'Europe and Africa', 'North and South America'],
    correctAnswer: 1,
    explanation: 'Bosphorus Strait in Turkey separates Europe and Asia.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },
  {
    id: 'geo-world-h-9',
    question: 'Danube River flows into which sea?',
    options: ['Black Sea', 'Caspian Sea', 'Mediterranean Sea', 'Aegean Sea'],
    correctAnswer: 0,
    explanation: 'Danube River flows into Black Sea (second longest river in Europe).',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },
  {
    id: 'geo-world-h-10',
    question: 'Machu Picchu is located in which country?',
    options: ['Ecuador', 'Peru', 'Bolivia', 'Chile'],
    correctAnswer: 1,
    explanation: 'Machu Picchu (Inca citadel) is in Peru, Andes Mountains.',
    categoryId: 'geography',
    subCategoryId: 'world-geography',
    level: 'hard'
  },

  // ============= GEOGRAPHY - PHYSICAL GEOGRAPHY (Easy) =============
  {
    id: 'geo-phy-e-1',
    question: 'Earth rotates on its axis from?',
    options: ['North to South', 'South to North', 'West to East', 'East to West'],
    correctAnswer: 2,
    explanation: 'Earth rotates from West to East (counterclockwise).',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },
  {
    id: 'geo-phy-e-2',
    question: 'How many layers does Earth have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'Earth has 3 main layers: Crust, Mantle, Core.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },
  {
    id: 'geo-phy-e-3',
    question: 'Which gas is most abundant in atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'],
    correctAnswer: 1,
    explanation: 'Nitrogen makes up 78% of Earth\'s atmosphere.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },
  {
    id: 'geo-phy-e-4',
    question: 'Earthquake waves are called?',
    options: ['Sound waves', 'Light waves', 'Seismic waves', 'Radio waves'],
    correctAnswer: 2,
    explanation: 'Seismic waves are vibrations from earthquakes.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },
  {
    id: 'geo-phy-e-5',
    question: 'Which scale measures earthquake intensity?',
    options: ['Celsius Scale', 'Richter Scale', 'Fahrenheit Scale', 'Kelvin Scale'],
    correctAnswer: 1,
    explanation: 'Richter Scale measures earthquake magnitude.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },
  {
    id: 'geo-phy-e-6',
    question: 'What causes tides in oceans?',
    options: ['Sun only', 'Moon only', 'Moon and Sun', 'Wind'],
    correctAnswer: 2,
    explanation: 'Tides are caused by gravitational pull of Moon and Sun.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },
  {
    id: 'geo-phy-e-7',
    question: 'Stalactites and stalagmites are found in?',
    options: ['Mountains', 'Caves', 'Deserts', 'Oceans'],
    correctAnswer: 1,
    explanation: 'Stalactites and stalagmites form in limestone caves.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },
  {
    id: 'geo-phy-e-8',
    question: 'Which is NOT a type of rock?',
    options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Atmospheric'],
    correctAnswer: 3,
    explanation: 'Three rock types are Igneous, Sedimentary, and Metamorphic.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },
  {
    id: 'geo-phy-e-9',
    question: 'Volcano opening is called?',
    options: ['Crater', 'Canyon', 'Valley', 'Delta'],
    correctAnswer: 0,
    explanation: 'Crater is the bowl-shaped opening at top of volcano.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },
  {
    id: 'geo-phy-e-10',
    question: 'Delta is formed at?',
    options: ['River source', 'River mouth', 'River middle', 'Waterfall'],
    correctAnswer: 1,
    explanation: 'Delta forms where river deposits sediment at its mouth.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'easy'
  },

  // ============= GEOGRAPHY - PHYSICAL GEOGRAPHY (Medium) =============
  {
    id: 'geo-phy-m-1',
    question: 'Mohorovicic discontinuity separates?',
    options: ['Crust and Mantle', 'Mantle and Core', 'Inner and Outer Core', 'Lithosphere and Asthenosphere'],
    correctAnswer: 0,
    explanation: 'Moho discontinuity separates Earth\'s crust from mantle.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-2',
    question: 'Which type of rock is granite?',
    options: ['Sedimentary', 'Igneous', 'Metamorphic', 'Organic'],
    correctAnswer: 1,
    explanation: 'Granite is an intrusive igneous rock.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-3',
    question: 'Convection currents occur in which layer?',
    options: ['Crust', 'Mantle', 'Outer Core', 'Inner Core'],
    correctAnswer: 1,
    explanation: 'Convection currents in mantle drive plate tectonics.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-4',
    question: 'Which latitude receives vertical sun rays?',
    options: ['Equator', 'Tropic of Cancer', 'Arctic Circle', 'Prime Meridian'],
    correctAnswer: 0,
    explanation: 'Equator receives vertical sun rays throughout the year.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-5',
    question: 'Isohyet is a line joining places of equal?',
    options: ['Temperature', 'Pressure', 'Rainfall', 'Altitude'],
    correctAnswer: 2,
    explanation: 'Isohyet connects places with equal rainfall.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-6',
    question: 'Spring tide occurs during?',
    options: ['New Moon only', 'Full Moon only', 'New Moon and Full Moon', 'Quarter Moon'],
    correctAnswer: 2,
    explanation: 'Spring tides occur during New Moon and Full Moon (highest tides).',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-7',
    question: 'Rift valley is formed by?',
    options: ['Erosion', 'Faulting', 'Folding', 'Deposition'],
    correctAnswer: 1,
    explanation: 'Rift valleys form when Earth\'s crust is pulled apart by faulting.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-8',
    question: 'Troposphere extends up to which height?',
    options: ['5 km', '10 km', '20 km', '50 km'],
    correctAnswer: 1,
    explanation: 'Troposphere extends up to about 10-12 km (lowest atmospheric layer).',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-9',
    question: 'What is a mesa?',
    options: ['Flat-topped hill', 'U-shaped valley', 'River island', 'Coastal lagoon'],
    correctAnswer: 0,
    explanation: 'Mesa is a flat-topped elevated landform with steep sides.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },
  {
    id: 'geo-phy-m-10',
    question: 'Laterite soil is formed in which climate?',
    options: ['Tropical', 'Temperate', 'Arctic', 'Desert'],
    correctAnswer: 0,
    explanation: 'Laterite soil forms in hot and humid tropical regions.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'medium'
  },

  // ============= GEOGRAPHY - PHYSICAL GEOGRAPHY (Hard) =============
  {
    id: 'geo-phy-h-1',
    question: 'Gutenberg discontinuity separates?',
    options: ['Crust and Mantle', 'Mantle and Outer Core', 'Outer Core and Inner Core', 'Lithosphere and Asthenosphere'],
    correctAnswer: 1,
    explanation: 'Gutenberg discontinuity separates mantle from outer core.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },
  {
    id: 'geo-phy-h-2',
    question: 'Karst topography is formed by?',
    options: ['Wind erosion', 'Glacial erosion', 'Chemical weathering of limestone', 'River deposition'],
    correctAnswer: 2,
    explanation: 'Karst topography forms by dissolution of soluble rocks like limestone.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },
  {
    id: 'geo-phy-h-3',
    question: 'Coriolis effect is maximum at?',
    options: ['Equator', 'Poles', 'Tropics', 'Mid-latitudes'],
    correctAnswer: 1,
    explanation: 'Coriolis effect is maximum at poles and zero at equator.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },
  {
    id: 'geo-phy-h-4',
    question: 'Esker is a landform created by?',
    options: ['Wind', 'Glacier', 'River', 'Sea waves'],
    correctAnswer: 1,
    explanation: 'Esker is a long ridge of sand/gravel deposited by glacial meltwater.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },
  {
    id: 'geo-phy-h-5',
    question: 'Thermocline layer is found in?',
    options: ['Atmosphere', 'Ocean', 'Lithosphere', 'Ionosphere'],
    correctAnswer: 1,
    explanation: 'Thermocline is ocean layer where temperature decreases rapidly with depth.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },
  {
    id: 'geo-phy-h-6',
    question: 'Which seismic wave cannot pass through liquid?',
    options: ['P-waves', 'S-waves', 'L-waves', 'Rayleigh waves'],
    correctAnswer: 1,
    explanation: 'S-waves (Secondary waves) cannot pass through liquid outer core.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },
  {
    id: 'geo-phy-h-7',
    question: 'Adiabatic lapse rate refers to?',
    options: ['Temperature decrease with altitude', 'Pressure increase with depth', 'Humidity variation', 'Wind speed change'],
    correctAnswer: 0,
    explanation: 'Adiabatic lapse rate is rate of temperature decrease with altitude.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },
  {
    id: 'geo-phy-h-8',
    question: 'Yardang is formed by?',
    options: ['Water erosion', 'Wind erosion', 'Glacial deposition', 'Volcanic activity'],
    correctAnswer: 1,
    explanation: 'Yardang is streamlined ridge carved by wind erosion in deserts.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },
  {
    id: 'geo-phy-h-9',
    question: 'What is a drumlin?',
    options: ['River meander', 'Glacial hill', 'Coastal dune', 'Volcanic cone'],
    correctAnswer: 1,
    explanation: 'Drumlin is elongated hill formed by glacial deposition.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },
  {
    id: 'geo-phy-h-10',
    question: 'Halocline is related to variation in?',
    options: ['Temperature', 'Salinity', 'Pressure', 'Oxygen'],
    correctAnswer: 1,
    explanation: 'Halocline is ocean layer with rapid salinity change.',
    categoryId: 'geography',
    subCategoryId: 'physical-geography',
    level: 'hard'
  },

  // ============= GEOGRAPHY - CLIMATE & ENVIRONMENT (Easy) =============
  {
    id: 'geo-cli-e-1',
    question: 'Which gas is responsible for global warming?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'],
    correctAnswer: 2,
    explanation: 'Carbon dioxide is main greenhouse gas causing global warming.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-cli-e-2',
    question: 'Ozone layer protects Earth from?',
    options: ['Rain', 'UV radiation', 'Wind', 'Earthquakes'],
    correctAnswer: 1,
    explanation: 'Ozone layer absorbs harmful ultraviolet (UV) radiation.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-cli-e-3',
    question: 'What is the main cause of acid rain?',
    options: ['Oxygen', 'CO2', 'SO2 and NOx', 'Nitrogen'],
    correctAnswer: 2,
    explanation: 'Acid rain is caused by sulfur dioxide and nitrogen oxides.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-cli-e-4',
    question: 'Which layer of atmosphere has ozone?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 1,
    explanation: 'Ozone layer is in stratosphere (15-35 km altitude).',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-cli-e-5',
    question: 'Monsoon is associated with which season in India?',
    options: ['Summer', 'Winter', 'Spring', 'Autumn'],
    correctAnswer: 0,
    explanation: 'Southwest Monsoon brings summer rains to India (June-Sept).',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-cli-e-6',
    question: 'Which is a renewable energy source?',
    options: ['Coal', 'Petroleum', 'Solar', 'Natural gas'],
    correctAnswer: 2,
    explanation: 'Solar energy is renewable and sustainable.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-cli-e-7',
    question: 'Tropical rainforests have which type of climate?',
    options: ['Hot and dry', 'Hot and wet', 'Cold and dry', 'Temperate'],
    correctAnswer: 1,
    explanation: 'Tropical rainforests have hot and wet equatorial climate.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-cli-e-8',
    question: 'El Niño affects which ocean?',
    options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    correctAnswer: 1,
    explanation: 'El Niño is warming of Pacific Ocean near equator.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-cli-e-9',
    question: 'Which is a greenhouse gas?',
    options: ['Oxygen', 'Methane', 'Nitrogen', 'Argon'],
    correctAnswer: 1,
    explanation: 'Methane is a potent greenhouse gas.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },
  {
    id: 'geo-cli-e-10',
    question: 'Kyoto Protocol is related to?',
    options: ['Trade', 'Climate change', 'Nuclear weapons', 'Human rights'],
    correctAnswer: 1,
    explanation: 'Kyoto Protocol is international treaty on climate change.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'easy'
  },

  // ============= GEOGRAPHY - CLIMATE & ENVIRONMENT (Medium) =============
  {
    id: 'geo-cli-m-1',
    question: 'Paris Agreement aims to limit global warming to?',
    options: ['1°C', '1.5°C', '2°C', '3°C'],
    correctAnswer: 1,
    explanation: 'Paris Agreement aims to limit warming to well below 2°C, preferably 1.5°C.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },
  {
    id: 'geo-cli-m-2',
    question: 'Which biome has permafrost?',
    options: ['Desert', 'Tundra', 'Savanna', 'Rainforest'],
    correctAnswer: 1,
    explanation: 'Tundra has permanently frozen subsoil (permafrost).',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },
  {
    id: 'geo-cli-m-3',
    question: 'La Niña is characterized by?',
    options: ['Warming of Pacific', 'Cooling of Pacific', 'No change', 'Atlantic warming'],
    correctAnswer: 1,
    explanation: 'La Niña is cooling of Pacific Ocean (opposite of El Niño).',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },
  {
    id: 'geo-cli-m-4',
    question: 'Montreal Protocol is related to?',
    options: ['Climate change', 'Ozone depletion', 'Biodiversity', 'Desertification'],
    correctAnswer: 1,
    explanation: 'Montreal Protocol aims to protect ozone layer by phasing out CFCs.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },
  {
    id: 'geo-cli-m-5',
    question: 'Which wind is called "Roaring Forties"?',
    options: ['Trade winds', 'Westerlies', 'Polar easterlies', 'Monsoon'],
    correctAnswer: 1,
    explanation: 'Strong Westerlies in 40-50° latitude are called Roaring Forties.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },
  {
    id: 'geo-cli-m-6',
    question: 'Albedo effect is related to?',
    options: ['Light reflection', 'Heat absorption', 'Wind speed', 'Rainfall'],
    correctAnswer: 0,
    explanation: 'Albedo is measure of how much sunlight a surface reflects.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },
  {
    id: 'geo-cli-m-7',
    question: 'Biodiversity hotspot must have at least?',
    options: ['500 endemic plants', '1,000 endemic plants', '1,500 endemic plants', '2,000 endemic plants'],
    correctAnswer: 2,
    explanation: 'Biodiversity hotspot must have at least 1,500 endemic vascular plants.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },
  {
    id: 'geo-cli-m-8',
    question: 'Jet streams are found in which layer?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 0,
    explanation: 'Jet streams are fast flowing air currents in upper troposphere.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },
  {
    id: 'geo-cli-m-9',
    question: 'Chinook is a type of?',
    options: ['Cold wind', 'Hot dry wind', 'Sea breeze', 'Monsoon'],
    correctAnswer: 1,
    explanation: 'Chinook is warm, dry föhn wind in North America.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },
  {
    id: 'geo-cli-m-10',
    question: 'Carbon sequestration means?',
    options: ['Releasing CO2', 'Storing CO2', 'Burning fossil fuels', 'Cutting forests'],
    correctAnswer: 1,
    explanation: 'Carbon sequestration is capturing and storing atmospheric CO2.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'medium'
  },

  // ============= GEOGRAPHY - CLIMATE & ENVIRONMENT (Hard) =============
  {
    id: 'geo-cli-h-1',
    question: 'IPCC stands for?',
    options: ['Indian Panel on Climate Change', 'Intergovernmental Panel on Climate Change', 'International Protocol on Climate Control', 'India Program for Climate Conservation'],
    correctAnswer: 1,
    explanation: 'IPCC is Intergovernmental Panel on Climate Change (UN body).',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },
  {
    id: 'geo-cli-h-2',
    question: 'Walker Circulation is associated with?',
    options: ['Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correctAnswer: 1,
    explanation: 'Walker Circulation is atmospheric circulation over Pacific Ocean.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },
  {
    id: 'geo-cli-h-3',
    question: 'Which gas has highest Global Warming Potential (GWP)?',
    options: ['CO2', 'CH4', 'N2O', 'SF6'],
    correctAnswer: 3,
    explanation: 'Sulfur hexafluoride (SF6) has very high GWP (23,500 times CO2).',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },
  {
    id: 'geo-cli-h-4',
    question: 'Ramsar Convention is related to?',
    options: ['Climate change', 'Wetlands', 'Desertification', 'Migratory species'],
    correctAnswer: 1,
    explanation: 'Ramsar Convention is international treaty for wetland conservation.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },
  {
    id: 'geo-cli-h-5',
    question: 'Inversion of temperature occurs in?',
    options: ['Troposphere', 'Stratosphere', 'Both A and B', 'Mesosphere'],
    correctAnswer: 2,
    explanation: 'Temperature inversion occurs in troposphere and stratosphere.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },
  {
    id: 'geo-cli-h-6',
    question: 'Which ocean current is NOT warm?',
    options: ['Gulf Stream', 'Kuroshio Current', 'Labrador Current', 'Brazil Current'],
    correctAnswer: 2,
    explanation: 'Labrador Current is cold ocean current from Arctic.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },
  {
    id: 'geo-cli-h-7',
    question: 'Phenology is study of?',
    options: ['Rainfall patterns', 'Seasonal biological phenomena', 'Ocean currents', 'Atmospheric pressure'],
    correctAnswer: 1,
    explanation: 'Phenology studies timing of seasonal biological events.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },
  {
    id: 'geo-cli-h-8',
    question: 'Anthropocene refers to?',
    options: ['Ancient era', 'Current geological age of human impact', 'Future epoch', 'Ice age'],
    correctAnswer: 1,
    explanation: 'Anthropocene is proposed epoch marking significant human impact on Earth.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },
  {
    id: 'geo-cli-h-9',
    question: 'Milankovitch cycles affect?',
    options: ['Ocean salinity', 'Earth\'s climate over millennia', 'Daily weather', 'Monsoon'],
    correctAnswer: 1,
    explanation: 'Milankovitch cycles are variations in Earth\'s orbit affecting long-term climate.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },
  {
    id: 'geo-cli-h-10',
    question: 'Thermocline disruption is caused by?',
    options: ['Eutrophication', 'El Niño', 'Deforestation', 'Acid rain'],
    correctAnswer: 1,
    explanation: 'El Niño disrupts ocean thermocline in tropical Pacific.',
    categoryId: 'geography',
    subCategoryId: 'climate-environment',
    level: 'hard'
  },

  // ============= GEOGRAPHY - MAPS & LOCATIONS (Easy) =============
  {
    id: 'geo-map-e-1',
    question: 'Lines running north to south are called?',
    options: ['Latitudes', 'Longitudes', 'Contours', 'Meridians'],
    correctAnswer: 3,
    explanation: 'Meridians (longitudes) run from North Pole to South Pole.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-map-e-2',
    question: 'Equator is at which latitude?',
    options: ['0°', '23.5°N', '66.5°N', '90°N'],
    correctAnswer: 0,
    explanation: 'Equator is at 0° latitude.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-map-e-3',
    question: 'Prime Meridian passes through?',
    options: ['Paris', 'London (Greenwich)', 'New York', 'Rome'],
    correctAnswer: 1,
    explanation: 'Prime Meridian (0° longitude) passes through Greenwich, London.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-map-e-4',
    question: 'Which direction is shown at top of map?',
    options: ['South', 'North', 'East', 'West'],
    correctAnswer: 1,
    explanation: 'Conventionally, North is at top of maps.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-map-e-5',
    question: 'International Date Line is at?',
    options: ['0°', '90°E', '180°', '90°W'],
    correctAnswer: 2,
    explanation: 'International Date Line roughly follows 180° longitude.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-map-e-6',
    question: 'Scale 1:50,000 means?',
    options: ['1 cm = 50 km', '1 cm = 50,000 cm', '1 m = 50 km', '1 cm = 50 m'],
    correctAnswer: 1,
    explanation: '1:50,000 scale means 1 cm on map = 50,000 cm (500 m) on ground.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-map-e-7',
    question: 'Arctic Circle is at which latitude?',
    options: ['23.5°N', '66.5°N', '90°N', '0°'],
    correctAnswer: 1,
    explanation: 'Arctic Circle is at 66.5°N latitude.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-map-e-8',
    question: 'Tropic of Cancer is at?',
    options: ['0°', '23.5°N', '23.5°S', '66.5°N'],
    correctAnswer: 1,
    explanation: 'Tropic of Cancer is at 23.5°N latitude.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-map-e-9',
    question: 'GPS stands for?',
    options: ['Global Phone System', 'Global Positioning System', 'Geographic Planning System', 'General Position System'],
    correctAnswer: 1,
    explanation: 'GPS is Global Positioning System using satellites.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },
  {
    id: 'geo-map-e-10',
    question: 'Blue color on map represents?',
    options: ['Mountains', 'Plains', 'Water bodies', 'Forests'],
    correctAnswer: 2,
    explanation: 'Blue color conventionally represents water bodies on maps.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'easy'
  },

  // ============= GEOGRAPHY - MAPS & LOCATIONS (Medium) =============
  {
    id: 'geo-map-m-1',
    question: 'Small scale map shows?',
    options: ['Small area with detail', 'Large area with less detail', 'Small area with less detail', 'Large area with detail'],
    correctAnswer: 1,
    explanation: 'Small scale map (e.g., 1:1,000,000) shows large area with less detail.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },
  {
    id: 'geo-map-m-2',
    question: 'Contour lines join places of equal?',
    options: ['Temperature', 'Rainfall', 'Altitude', 'Pressure'],
    correctAnswer: 2,
    explanation: 'Contour lines connect points of equal elevation/altitude.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },
  {
    id: 'geo-map-m-3',
    question: 'Mercator projection is used for?',
    options: ['World maps', 'Navigation', 'Topographic maps', 'Thematic maps'],
    correctAnswer: 1,
    explanation: 'Mercator projection is cylindrical map used for navigation.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },
  {
    id: 'geo-map-m-4',
    question: 'One degree of latitude equals approximately?',
    options: ['69 miles (111 km)', '100 miles', '50 miles', '150 km'],
    correctAnswer: 0,
    explanation: 'One degree of latitude ≈ 69 miles or 111 kilometers.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },
  {
    id: 'geo-map-m-5',
    question: 'Isobar is a line joining places of equal?',
    options: ['Temperature', 'Atmospheric pressure', 'Rainfall', 'Altitude'],
    correctAnswer: 1,
    explanation: 'Isobar connects places with equal atmospheric pressure.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },
  {
    id: 'geo-map-m-6',
    question: 'Orthophoto maps are created using?',
    options: ['Satellite images', 'Aerial photography', 'Ground survey', 'Radar'],
    correctAnswer: 1,
    explanation: 'Orthophoto maps are made from geometrically corrected aerial photos.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },
  {
    id: 'geo-map-m-7',
    question: 'Closely spaced contour lines indicate?',
    options: ['Gentle slope', 'Steep slope', 'Plain area', 'Valley'],
    correctAnswer: 1,
    explanation: 'Closely spaced contours indicate steep slope.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },
  {
    id: 'geo-map-m-8',
    question: 'GIS stands for?',
    options: ['Global Information System', 'Geographic Information System', 'General Imaging System', 'Geological Indication System'],
    correctAnswer: 1,
    explanation: 'GIS is Geographic Information System for spatial data analysis.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },
  {
    id: 'geo-map-m-9',
    question: 'Which projection shows true area?',
    options: ['Mercator', 'Equal-area projection', 'Cylindrical', 'Azimuthal'],
    correctAnswer: 1,
    explanation: 'Equal-area (equivalent) projections preserve relative sizes.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },
  {
    id: 'geo-map-m-10',
    question: 'Remote sensing uses which waves?',
    options: ['Sound waves', 'Electromagnetic waves', 'Seismic waves', 'Water waves'],
    correctAnswer: 1,
    explanation: 'Remote sensing uses electromagnetic radiation (visible, infrared, radar).',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'medium'
  },

  // ============= GEOGRAPHY - MAPS & LOCATIONS (Hard) =============
  {
    id: 'geo-map-h-1',
    question: 'Which map projection has no distortion?',
    options: ['Mercator', 'Globe only', 'Cylindrical', 'Conic'],
    correctAnswer: 1,
    explanation: 'Only a globe can show Earth without any distortion.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  },
  {
    id: 'geo-map-h-2',
    question: 'Cadastral maps show?',
    options: ['Climate zones', 'Property boundaries', 'Population density', 'Soil types'],
    correctAnswer: 1,
    explanation: 'Cadastral maps show land ownership and property boundaries.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  },
  {
    id: 'geo-map-h-3',
    question: 'Great Circle route is shortest distance on?',
    options: ['Flat map', 'Globe', 'Mercator projection', 'Topographic map'],
    correctAnswer: 1,
    explanation: 'Great Circle is shortest route between two points on a sphere.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  },
  {
    id: 'geo-map-h-4',
    question: 'LiDAR technology uses?',
    options: ['Radio waves', 'Sound waves', 'Laser pulses', 'X-rays'],
    correctAnswer: 2,
    explanation: 'LiDAR (Light Detection and Ranging) uses laser pulses for mapping.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  },
  {
    id: 'geo-map-h-5',
    question: 'Azimuthal projection is used for?',
    options: ['World maps', 'Polar regions', 'Equatorial regions', 'Ocean navigation'],
    correctAnswer: 1,
    explanation: 'Azimuthal (planar) projection is best for polar regions.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  },
  {
    id: 'geo-map-h-6',
    question: 'Topological map preserves?',
    options: ['Distance', 'Area', 'Shape', 'Connectivity'],
    correctAnswer: 3,
    explanation: 'Topological maps (like metro maps) preserve connectivity, not scale.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  },
  {
    id: 'geo-map-h-7',
    question: 'NAVSTAR is associated with?',
    options: ['GPS', 'GIS', 'Remote Sensing', 'Cartography'],
    correctAnswer: 0,
    explanation: 'NAVSTAR is the GPS satellite constellation operated by US.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  },
  {
    id: 'geo-map-h-8',
    question: 'Hypsometric tinting shows?',
    options: ['Temperature zones', 'Elevation using colors', 'Rainfall distribution', 'Population density'],
    correctAnswer: 1,
    explanation: 'Hypsometric tinting uses colors to represent elevation zones.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  },
  {
    id: 'geo-map-h-9',
    question: 'UTM (Universal Transverse Mercator) divides Earth into?',
    options: ['10 zones', '30 zones', '60 zones', '90 zones'],
    correctAnswer: 2,
    explanation: 'UTM system divides Earth into 60 zones (6° wide each).',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  },
  {
    id: 'geo-map-h-10',
    question: 'Choropleth map uses?',
    options: ['Lines', 'Shading/colors by area', 'Dots', 'Arrows'],
    correctAnswer: 1,
    explanation: 'Choropleth maps use shading/colors to show statistical data by region.',
    categoryId: 'geography',
    subCategoryId: 'maps-locations',
    level: 'hard'
  }

];
