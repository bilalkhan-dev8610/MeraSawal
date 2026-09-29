import type { Question } from './questionsData';

// Language Questions - Part 2: Hindi (150 questions)
// Vyakaran, Muhavare & Lokoktiyan, Paryayvachi & Vilom, Comprehension, Vakya Shuddhi

export const languageQuestionsPart2: Question[] = [

  // ===================== VYAKARAN (Hindi Grammar) - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'vyakaran-e-1',
    question: '"राम" किस संज्ञा का उदाहरण है?',
    options: ['जातिवाचक', 'व्यक्तिवाचक', 'भाववाचक', 'समूहवाचक'],
    correctAnswer: 1,
    explanation: '"राम" व्यक्तिवाचक संज्ञा है क्योंकि यह किसी विशेष व्यक्ति का नाम है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'vyakaran-e-2',
    question: 'सर्वनाम की पहचान कीजिए: "वह स्कूल जाता है।"',
    options: ['स्कूल', 'वह', 'जाता', 'है'],
    correctAnswer: 1,
    explanation: '"वह" सर्वनाम है जो संज्ञा के स्थान पर प्रयुक्त होता है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'vyakaran-e-3',
    question: '"सुंदर" किस प्रकार का शब्द है?',
    options: ['संज्ञा', 'सर्वनाम', 'विशेषण', 'क्रिया'],
    correctAnswer: 2,
    explanation: '"सुंदर" विशेषण है जो संज्ञा की विशेषता बताता है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'vyakaran-e-4',
    question: 'बहुवचन बनाइए: "लड़का"',
    options: ['लड़काएँ', 'लड़कों', 'लड़के', 'लड़कियाँ'],
    correctAnswer: 2,
    explanation: '"लड़का" का बहुवचन "लड़के" है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'vyakaran-e-5',
    question: 'क्रिया पहचानिए: "पक्षी उड़ता है।"',
    options: ['पक्षी', 'उड़ता', 'है', 'उड़ता है'],
    correctAnswer: 3,
    explanation: '"उड़ता है" पूर्ण क्रिया है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'vyakaran-e-6',
    question: '"में, पर, से" किस प्रकार के शब्द हैं?',
    options: ['संज्ञा', 'सर्वनाम', 'कारक चिह्न', 'क्रिया'],
    correctAnswer: 2,
    explanation: 'ये कारक चिह्न/परसर्ग हैं',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'vyakaran-e-7',
    question: 'स्त्रीलिंग बनाइए: "राजा"',
    options: ['रानी', 'राजिन', 'राज्ञी', 'राजकुमारी'],
    correctAnswer: 0,
    explanation: '"राजा" का स्त्रीलिंग "रानी" है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'vyakaran-e-8',
    question: '"अ, आ, इ, ई" क्या हैं?',
    options: ['व्यंजन', 'स्वर', 'संयुक्त वर्ण', 'अक्षर'],
    correctAnswer: 1,
    explanation: 'ये स्वर हैं',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'vyakaran-e-9',
    question: 'विलोम शब्द: "दिन"',
    options: ['रात', 'सुबह', 'शाम', 'प्रातः'],
    correctAnswer: 0,
    explanation: '"दिन" का विलोम "रात" है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },
  {
    id: 'vyakaran-e-10',
    question: 'वचन बदलिए: "गाय"',
    options: ['गाएँ', 'गायों', 'गायें', 'गाइयाँ'],
    correctAnswer: 0,
    explanation: '"गाय" का बहुवचन "गाएँ" है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'vyakaran-m-1',
    question: '"राम ने रावण को मारा।" कौन सा कारक है "को"?',
    options: ['कर्ता कारक', 'कर्म कारक', 'करण कारक', 'संप्रदान कारक'],
    correctAnswer: 1,
    explanation: '"को" कर्म कारक का चिह्न है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },
  {
    id: 'vyakaran-m-2',
    question: '"चलना" से भाववाचक संज्ञा बनाइए:',
    options: ['चाल', 'चलाना', 'चालक', 'चलित'],
    correctAnswer: 0,
    explanation: '"चलना" से "चाल" भाववाचक संज्ञा बनती है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },
  {
    id: 'vyakaran-m-3',
    question: 'समास पहचानिए: "राजपुत्र"',
    options: ['तत्पुरुष', 'द्वंद्व', 'कर्मधारय', 'बहुव्रीहि'],
    correctAnswer: 0,
    explanation: '"राजपुत्र" = राजा का पुत्र (तत्पुरुष समास)',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },
  {
    id: 'vyakaran-m-4',
    question: 'काल पहचानिए: "वह पढ़ रहा था।"',
    options: ['वर्तमान काल', 'भूतकाल', 'भविष्यत काल', 'संदिग्ध भूत'],
    correctAnswer: 1,
    explanation: '"था" से पता चलता है कि यह भूतकाल है (अपूर्ण भूत)',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },
  {
    id: 'vyakaran-m-5',
    question: 'वाच्य बदलिए (कर्तृवाच्य से कर्मवाच्य): "राम ने पत्र लिखा।"',
    options: ['राम द्वारा पत्र लिखा गया।', 'पत्र लिखा गया राम ने।', 'राम से पत्र लिखा।', 'पत्र राम ने लिखा।'],
    correctAnswer: 0,
    explanation: 'कर्मवाच्य: "राम द्वारा पत्र लिखा गया"',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },
  {
    id: 'vyakaran-m-6',
    question: 'सही संधि चुनिए: "सूर्य + उदय"',
    options: ['सूर्युदय', 'सूर्योदय', 'सूरोदय', 'सूर्यउदय'],
    correctAnswer: 1,
    explanation: 'य् + उ = यो (संधि): सूर्योदय',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },
  {
    id: 'vyakaran-m-7',
    question: 'विशेषण की श्रेणी: "सबसे सुंदर"',
    options: ['मूलावस्था', 'उत्तरावस्था', 'उत्तमावस्था', 'श्रेष्ठावस्था'],
    correctAnswer: 2,
    explanation: '"सबसे" से उत्तमावस्था का बोध',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },
  {
    id: 'vyakaran-m-8',
    question: 'क्रिया विशेषण पहचानिए: "वह धीरे-धीरे चलता है।"',
    options: ['वह', 'धीरे-धीरे', 'चलता', 'है'],
    correctAnswer: 1,
    explanation: '"धीरे-धीरे" क्रिया की विशेषता बताता है (क्रिया विशेषण)',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },
  {
    id: 'vyakaran-m-9',
    question: 'शब्द रचना: "पुस्तक + आलय"',
    options: ['पुस्तकालय', 'पुस्तकआलय', 'पुस्तकालये', 'पुस्तकाल'],
    correctAnswer: 0,
    explanation: 'संधि करने पर "पुस्तकालय" बनता है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },
  {
    id: 'vyakaran-m-10',
    question: 'अलंकार पहचानिए: "चरण-कमल"',
    options: ['उपमा', 'रूपक', 'उत्प्रेक्षा', 'यमक'],
    correctAnswer: 1,
    explanation: 'चरणों को कमल कहना (रूपक अलंकार)',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'vyakaran-h-1',
    question: 'समास विग्रह कीजिए: "नीलकमल"',
    options: ['नीला है जो कमल', 'नील का कमल', 'नीला और कमल', 'नीले में कमल'],
    correctAnswer: 0,
    explanation: 'कर्मधारय समास: नीला है जो कमल',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },
  {
    id: 'vyakaran-h-2',
    question: 'संधि विच्छेद: "महोत्सव"',
    options: ['महा + उत्सव', 'महो + त्सव', 'मह + उत्सव', 'महा + ओत्सव'],
    correctAnswer: 0,
    explanation: 'आ + उ = ओ (संधि): महा + उत्सव',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },
  {
    id: 'vyakaran-h-3',
    question: 'छंद पहचानिए: "कारक की कुण्डली से निकली... (16 मात्राएँ)"',
    options: ['दोहा', 'चौपाई', 'रोला', 'सोरठा'],
    correctAnswer: 1,
    explanation: 'प्रत्येक चरण में 16 मात्राएँ = चौपाई',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },
  {
    id: 'vyakaran-h-4',
    question: 'तत्सम शब्द चुनिए:',
    options: ['चाँद', 'सूर्य', 'दूध', 'आग'],
    correctAnswer: 1,
    explanation: '"सूर्य" तत्सम है, बाकी तद्भव',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },
  {
    id: 'vyakaran-h-5',
    question: 'अशुद्ध वाक्य है:',
    options: ['मैं गाना गाता हूँ।', 'वे लोग आए।', 'मैंने खाना खाया।', 'उसने से कहा।'],
    correctAnswer: 3,
    explanation: '"उसने से" गलत है, सही होगा "उसने कहा" या "उससे कहा"',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },
  {
    id: 'vyakaran-h-6',
    question: 'रस पहचानिए: "हँसी-मजाक, विनोद"',
    options: ['शृंगार रस', 'हास्य रस', 'वीर रस', 'करुण रस'],
    correctAnswer: 1,
    explanation: 'हँसी-मजाक हास्य रस का स्थायी भाव है',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },
  {
    id: 'vyakaran-h-7',
    question: 'बहुव्रीहि समास का उदाहरण:',
    options: ['राजपुत्र', 'नीलकमल', 'चक्रपाणि', 'रसोईघर'],
    correctAnswer: 2,
    explanation: '"चक्रपाणि" = चक्र है पाणि में जिसके (विष्णु)',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },
  {
    id: 'vyakaran-h-8',
    question: 'विच्छेदित कीजिए: "दिग्गज"',
    options: ['दिक् + गज', 'दिग + गज', 'दि + ग्गज', 'दिग् + गज'],
    correctAnswer: 0,
    explanation: 'क् + ग = ग्ग (संधि): दिक् + गज',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },
  {
    id: 'vyakaran-h-9',
    question: 'पद परिचय: "राम" (वाक्य: राम ने रावण को मारा)',
    options: ['संज्ञा, एकवचन, पुल्लिंग, कर्म कारक', 'संज्ञा, एकवचन, पुल्लिंग, कर्ता कारक', 'सर्वनाम, एकवचन', 'विशेषण'],
    correctAnswer: 1,
    explanation: '"राम ने" = कर्ता कारक, एकवचन, पुल्लिंग',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },
  {
    id: 'vyakaran-h-10',
    question: 'उपसर्ग-प्रत्यय: "अनुचित" में उपसर्ग कौन सा है?',
    options: ['अन', 'अनु', 'अ', 'अन्'],
    correctAnswer: 1,
    explanation: '"अनु" उपसर्ग + "चित" = अनुचित',
    categoryId: 'language',
    subCategoryId: 'vyakaran',
    level: 'hard'
  },

  // ===================== MUHAVARE & LOKOKTIYAN (Hindi Idioms) - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'muhavare-e-1',
    question: '"अपना हाथ जगन्नाथ" मुहावरे का अर्थ:',
    options: ['दूसरों पर निर्भर रहना', 'अपना काम खुद करना', 'मंदिर जाना', 'हाथ तोड़ना'],
    correctAnswer: 1,
    explanation: 'अपना काम स्वयं करना ही सबसे अच्छा है',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'muhavare-e-2',
    question: '"आँखें चार होना" का अर्थ:',
    options: ['लड़ाई करना', 'प्रेम होना', 'देखना', 'अंधा होना'],
    correctAnswer: 1,
    explanation: 'आपस में प्रेम होना या मिलना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'muhavare-e-3',
    question: '"हाथ पर हाथ धरे बैठना" अर्थ:',
    options: ['काम करना', 'निकम्मा बैठना', 'योग करना', 'लड़ना'],
    correctAnswer: 1,
    explanation: 'बिना कुछ काम किए बैठे रहना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'muhavare-e-4',
    question: '"नाक में दम करना" का मतलब:',
    options: ['सांस लेना', 'परेशान करना', 'नाक बंद करना', 'सूंघना'],
    correctAnswer: 1,
    explanation: 'बहुत परेशान करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'muhavare-e-5',
    question: '"मुँह में पानी आना" अर्थ:',
    options: ['प्यास लगना', 'खाने की इच्छा होना', 'पानी पीना', 'रोना'],
    correctAnswer: 1,
    explanation: 'किसी वस्तु को पाने की तीव्र इच्छा होना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'muhavare-e-6',
    question: '"टाँग अड़ाना" का अर्थ:',
    options: ['बाधा डालना', 'पैर तोड़ना', 'बैठना', 'चलना'],
    correctAnswer: 0,
    explanation: 'किसी के काम में बाधा डालना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'muhavare-e-7',
    question: '"पेट में चूहे कूदना" मतलब:',
    options: ['बीमार होना', 'बहुत भूख लगना', 'डर लगना', 'खुश होना'],
    correctAnswer: 1,
    explanation: 'बहुत तेज भूख लगना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'muhavare-e-8',
    question: '"सिर पर चढ़ना" अर्थ:',
    options: ['ऊपर जाना', 'जिद करना/अकड़ दिखाना', 'नीचे उतरना', 'गुस्सा होना'],
    correctAnswer: 1,
    explanation: 'किसी के साथ ज्यादा मुक्त हो जाना या जिद करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'muhavare-e-9',
    question: '"आसमान से बातें करना" मतलब:',
    options: ['उड़ना', 'बहुत ऊँचा होना', 'बातचीत करना', 'सोना'],
    correctAnswer: 1,
    explanation: 'बहुत ऊँचा होना या बहुत प्रगति करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },
  {
    id: 'muhavare-e-10',
    question: '"दाँत खट्टे करना" का अर्थ:',
    options: ['दाँत तोड़ना', 'हरा देना', 'खाना खाना', 'मीठा खाना'],
    correctAnswer: 1,
    explanation: 'पराजित करना या हरा देना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'muhavare-m-1',
    question: '"अक्ल का दुश्मन" मुहावरे का अर्थ:',
    options: ['बुद्धिमान', 'मूर्ख', 'शत्रु', 'मित्र'],
    correctAnswer: 1,
    explanation: 'बहुत मूर्ख व्यक्ति',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },
  {
    id: 'muhavare-m-2',
    question: '"आँखों में धूल झोंकना" का मतलब:',
    options: ['अंधा करना', 'धोखा देना', 'लड़ना', 'आँख बंद करना'],
    correctAnswer: 1,
    explanation: 'किसी को धोखा देना या चकमा देना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },
  {
    id: 'muhavare-m-3',
    question: '"कान भरना" अर्थ:',
    options: ['बहरा होना', 'चुगली करना', 'सुनना', 'कान बंद करना'],
    correctAnswer: 1,
    explanation: 'किसी के खिलाफ चुगली करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },
  {
    id: 'muhavare-m-4',
    question: '"गाल बजाना" का अर्थ:',
    options: ['डींग हांकना', 'गाना गाना', 'मारना', 'खाना'],
    correctAnswer: 0,
    explanation: 'शेखी बघारना या बढ़-चढ़कर बोलना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },
  {
    id: 'muhavare-m-5',
    question: '"छठी का दूध याद आना" मतलब:',
    options: ['मां याद आना', 'बुरी हालत होना', 'दूध पीना', 'बचपन याद आना'],
    correctAnswer: 1,
    explanation: 'बहुत बुरी स्थिति में पड़ जाना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },
  {
    id: 'muhavare-m-6',
    question: '"तिल का ताड़ बनाना" अर्थ:',
    options: ['छोटी बात को बढ़ा-चढ़ाकर कहना', 'पेड़ लगाना', 'बड़ा करना', 'गलत बात कहना'],
    correctAnswer: 0,
    explanation: 'छोटी बात को बहुत बड़ा बना देना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },
  {
    id: 'muhavare-m-7',
    question: '"नौ दो ग्यारह होना" का मतलब:',
    options: ['गणित करना', 'भाग जाना', 'हिसाब लगाना', 'पढ़ना'],
    correctAnswer: 1,
    explanation: 'भाग जाना या गायब हो जाना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },
  {
    id: 'muhavare-m-8',
    question: '"पानी-पानी होना" अर्थ:',
    options: ['पानी में गिरना', 'बहुत शर्मिंदा होना', 'नहाना', 'रोना'],
    correctAnswer: 1,
    explanation: 'बहुत लज्जित होना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },
  {
    id: 'muhavare-m-9',
    question: '"मुँह की खाना" का अर्थ:',
    options: ['खाना खाना', 'हार जाना', 'बोलना', 'जीतना'],
    correctAnswer: 1,
    explanation: 'बुरी तरह हार जाना या पराजय स्वीकार करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },
  {
    id: 'muhavare-m-10',
    question: '"लोहे के चने चबाना" मतलब:',
    options: ['लोहा खाना', 'बहुत मुश्किल काम करना', 'दाँत तोड़ना', 'खाना बनाना'],
    correctAnswer: 1,
    explanation: 'बहुत कठिन परिश्रम करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'muhavare-h-1',
    question: '"अंधे की लाठी" लोकोक्ति का अर्थ:',
    options: ['अंधे को सहारा', 'एकमात्र सहारा', 'छड़ी', 'कमजोर'],
    correctAnswer: 1,
    explanation: 'एकमात्र सहारा या भरोसा',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },
  {
    id: 'muhavare-h-2',
    question: '"ऊँट के मुँह में जीरा" का अर्थ:',
    options: ['बहुत थोड़ा', 'आवश्यकता से बहुत कम', 'ऊँट का भोजन', 'मसाला डालना'],
    correctAnswer: 1,
    explanation: 'जरूरत के अनुपात में बहुत कम',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },
  {
    id: 'muhavare-h-3',
    question: '"एक तो चोर ऊपर से सीनाजोरी" मतलब:',
    options: ['चोर पकड़ना', 'गलती करके भी अकड़ दिखाना', 'शक्तिशाली होना', 'बहादुर होना'],
    correctAnswer: 1,
    explanation: 'दोष करने के बाद भी उद्दंडता दिखाना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },
  {
    id: 'muhavare-h-4',
    question: '"कोयले की दलाली में हाथ काले" अर्थ:',
    options: ['कोयला बेचना', 'बुरी संगत का बुरा प्रभाव', 'हाथ गंदे होना', 'काम करना'],
    correctAnswer: 1,
    explanation: 'बुरे काम में लगने से बदनामी होना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },
  {
    id: 'muhavare-h-5',
    question: '"जिसकी लाठी उसकी भैंस" लोकोक्ति का भाव:',
    options: ['शक्तिशाली की जीत', 'पशुपालन', 'न्याय', 'समानता'],
    correctAnswer: 0,
    explanation: 'बलवान की ही विजय होती है',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },
  {
    id: 'muhavare-h-6',
    question: '"नाच न जाने आँगन टेढ़ा" का अर्थ:',
    options: ['नाचना नहीं आता', 'अपनी कमी छिपाना', 'आँगन टेढ़ा है', 'बहाना बनाना'],
    correctAnswer: 1,
    explanation: 'अपनी अयोग्यता छिपाने के लिए बहाने बनाना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },
  {
    id: 'muhavare-h-7',
    question: '"बंदर क्या जाने अदरक का स्वाद" मतलब:',
    options: ['बंदर मूर्ख है', 'मूर्ख व्यक्ति गुण नहीं पहचानता', 'अदरक कड़वा है', 'जानवर नहीं जानते'],
    correctAnswer: 1,
    explanation: 'मूर्ख व्यक्ति अच्छी चीज की कद्र नहीं कर सकता',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },
  {
    id: 'muhavare-h-8',
    question: '"साँप निकल गया लकीर पीटते रहे" अर्थ:',
    options: ['सांप मारना', 'मौका चूक जाना', 'लकीर खींचना', 'समय बरबाद करना'],
    correctAnswer: 1,
    explanation: 'मौका हाथ से निकल जाने के बाद बेकार की बातें करना',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },
  {
    id: 'muhavare-h-9',
    question: '"हाथी के दाँत दिखाने के और खाने के और" का भाव:',
    options: ['हाथी के दाँत', 'दिखावा और वास्तविकता अलग', 'झूठ बोलना', 'धोखा देना'],
    correctAnswer: 1,
    explanation: 'बाहरी रूप और वास्तविकता में अंतर',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },
  {
    id: 'muhavare-h-10',
    question: '"अब पछताए होत क्या जब चिड़िया चुग गई खेत" अर्थ:',
    options: ['पछतावा करना', 'समय बीतने के बाद पछताना बेकार', 'खेत की रखवाली', 'चिड़िया भगाना'],
    correctAnswer: 1,
    explanation: 'नुकसान हो जाने के बाद पछताना व्यर्थ है',
    categoryId: 'language',
    subCategoryId: 'muhavare',
    level: 'hard'
  },

  // ===================== PARYAYVACHI & VILOM (Hindi Synonyms & Antonyms) - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'paryay-e-1',
    question: '"सूर्य" का पर्यायवाची:',
    options: ['चंद्र', 'दिनकर', 'तारा', 'ग्रह'],
    correctAnswer: 1,
    explanation: '"दिनकर" सूर्य का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'paryay-e-2',
    question: '"रात" का विलोम:',
    options: ['दिन', 'शाम', 'सुबह', 'संध्या'],
    correctAnswer: 0,
    explanation: '"दिन" रात का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'paryay-e-3',
    question: '"पुस्तक" का पर्यायवाची:',
    options: ['किताब', 'कलम', 'कागज', 'पन्ना'],
    correctAnswer: 0,
    explanation: '"किताब" पुस्तक का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'paryay-e-4',
    question: '"सुख" का विलोम:',
    options: ['दुःख', 'खुशी', 'हर्ष', 'मंगल'],
    correctAnswer: 0,
    explanation: '"दुःख" सुख का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'paryay-e-5',
    question: '"पानी" का पर्यायवाची:',
    options: ['अग्नि', 'जल', 'वायु', 'आकाश'],
    correctAnswer: 1,
    explanation: '"जल" पानी का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'paryay-e-6',
    question: '"प्रकाश" का विलोम:',
    options: ['अंधकार', 'रोशनी', 'चमक', 'दीप'],
    correctAnswer: 0,
    explanation: '"अंधकार" प्रकाश का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'paryay-e-7',
    question: '"माता" का पर्यायवाची:',
    options: ['पिता', 'माँ', 'भाई', 'बहन'],
    correctAnswer: 1,
    explanation: '"माँ" माता का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'paryay-e-8',
    question: '"आरंभ" का विलोम:',
    options: ['शुरू', 'अंत', 'प्रारंभ', 'आदि'],
    correctAnswer: 1,
    explanation: '"अंत" आरंभ का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'paryay-e-9',
    question: '"फूल" का पर्यायवाची:',
    options: ['पत्ता', 'पुष्प', 'फल', 'वृक्ष'],
    correctAnswer: 1,
    explanation: '"पुष्प" फूल का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },
  {
    id: 'paryay-e-10',
    question: '"ऊपर" का विलोम:',
    options: ['नीचे', 'ऊँचा', 'ऊपरी', 'शिखर'],
    correctAnswer: 0,
    explanation: '"नीचे" ऊपर का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'paryay-m-1',
    question: '"समुद्र" का पर्यायवाची:',
    options: ['नदी', 'सागर', 'झील', 'तालाब'],
    correctAnswer: 1,
    explanation: '"सागर" समुद्र का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },
  {
    id: 'paryay-m-2',
    question: '"विजय" का विलोम:',
    options: ['हार', 'पराजय', 'दोनों सही', 'कोई नहीं'],
    correctAnswer: 2,
    explanation: '"हार" और "पराजय" दोनों विजय के विलोम हैं',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },
  {
    id: 'paryay-m-3',
    question: '"धरती" का पर्यायवाची:',
    options: ['आकाश', 'पृथ्वी', 'पाताल', 'वायु'],
    correctAnswer: 1,
    explanation: '"पृथ्वी" धरती का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },
  {
    id: 'paryay-m-4',
    question: '"आशा" का विलोम:',
    options: ['निराशा', 'उम्मीद', 'भरोसा', 'विश्वास'],
    correctAnswer: 0,
    explanation: '"निराशा" आशा का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },
  {
    id: 'paryay-m-5',
    question: '"अग्नि" का पर्यायवाची:',
    options: ['जल', 'आग', 'वायु', 'धूम'],
    correctAnswer: 1,
    explanation: '"आग" अग्नि का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },
  {
    id: 'paryay-m-6',
    question: '"सत्य" का विलोम:',
    options: ['असत्य', 'झूठ', 'मिथ्या', 'सभी सही'],
    correctAnswer: 3,
    explanation: 'असत्य, झूठ और मिथ्या तीनों सत्य के विलोम हैं',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },
  {
    id: 'paryay-m-7',
    question: '"गुरु" का पर्यायवाची:',
    options: ['शिष्य', 'आचार्य', 'छात्र', 'मित्र'],
    correctAnswer: 1,
    explanation: '"आचार्य" गुरु का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },
  {
    id: 'paryay-m-8',
    question: '"सम्मान" का विलोम:',
    options: ['आदर', 'अपमान', 'इज्जत', 'मान'],
    correctAnswer: 1,
    explanation: '"अपमान" सम्मान का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },
  {
    id: 'paryay-m-9',
    question: '"पक्षी" का पर्यायवाची:',
    options: ['पशु', 'पंछी', 'मछली', 'कीट'],
    correctAnswer: 1,
    explanation: '"पंछी" पक्षी का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },
  {
    id: 'paryay-m-10',
    question: '"उन्नति" का विलोम:',
    options: ['प्रगति', 'अवनति', 'विकास', 'उत्थान'],
    correctAnswer: 1,
    explanation: '"अवनति" उन्नति का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'paryay-h-1',
    question: '"कमल" के पर्यायवाची में गलत शब्द:',
    options: ['पंकज', 'नीरज', 'सरोज', 'वारिज'],
    correctAnswer: 3,
    explanation: '"वारिज" बादल का पर्याय है, कमल का नहीं',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },
  {
    id: 'paryay-h-2',
    question: '"आर्द्र" का विलोम:',
    options: ['शुष्क', 'गीला', 'नम', 'तर'],
    correctAnswer: 0,
    explanation: '"शुष्क" (सूखा) आर्द्र (गीला) का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },
  {
    id: 'paryay-h-3',
    question: '"इंद्र" का पर्यायवाची नहीं है:',
    options: ['सुरेश', 'शचीपति', 'वासव', 'मरुत'],
    correctAnswer: 3,
    explanation: '"मरुत" वायु/पवन का पर्याय है, इंद्र का नहीं',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },
  {
    id: 'paryay-h-4',
    question: '"अनुराग" का विलोम:',
    options: ['प्रेम', 'विराग', 'स्नेह', 'प्रीति'],
    correctAnswer: 1,
    explanation: '"विराग" (वैराग्य) अनुराग का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },
  {
    id: 'paryay-h-5',
    question: '"सरस्वती" का पर्यायवाची:',
    options: ['लक्ष्मी', 'वीणापाणि', 'पार्वती', 'दुर्गा'],
    correctAnswer: 1,
    explanation: '"वीणापाणि" सरस्वती का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },
  {
    id: 'paryay-h-6',
    question: '"अल्प" का विलोम:',
    options: ['थोड़ा', 'अधिक', 'कम', 'न्यून'],
    correctAnswer: 1,
    explanation: '"अधिक" (बहुत/ज्यादा) अल्प (थोड़ा) का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },
  {
    id: 'paryay-h-7',
    question: '"कृपाण" का पर्यायवाची:',
    options: ['धनुष', 'खड्ग', 'बाण', 'गदा'],
    correctAnswer: 1,
    explanation: '"खड्ग" (तलवार) कृपाण का पर्यायवाची है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },
  {
    id: 'paryay-h-8',
    question: '"स्वीकार" का विलोम:',
    options: ['मान्य', 'अस्वीकार', 'ग्राह्य', 'स्वीकृति'],
    correctAnswer: 1,
    explanation: '"अस्वीकार" (अमान्य) स्वीकार का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },
  {
    id: 'paryay-h-9',
    question: '"अश्व" का पर्यायवाची नहीं है:',
    options: ['घोड़ा', 'हय', 'तुरंग', 'गज'],
    correctAnswer: 3,
    explanation: '"गज" हाथी का पर्याय है, घोड़े का नहीं',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },
  {
    id: 'paryay-h-10',
    question: '"अनुकूल" का विलोम:',
    options: ['प्रतिकूल', 'सहायक', 'लाभदायक', 'हितकर'],
    correctAnswer: 0,
    explanation: '"प्रतिकूल" (विपरीत) अनुकूल (अनुरूप) का विलोम है',
    categoryId: 'language',
    subCategoryId: 'paryayvachi',
    level: 'hard'
  },

  // ===================== HINDI COMPREHENSION - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'hindi-comp-e-1',
    question: 'गद्यांश: "सूर्य पूर्व में उगता है और पश्चिम में अस्त होता है।" - सूर्य किस दिशा में उगता है?',
    options: ['उत्तर', 'दक्षिण', 'पूर्व', 'पश्चिम'],
    correctAnswer: 2,
    explanation: 'गद्यांश में स्पष्ट है कि सूर्य पूर्व में उगता है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'hindi-comp-e-2',
    question: 'गद्यांश: "गाय हमारी माता है। वह हमें दूध देती है।" - गाय क्या देती है?',
    options: ['पानी', 'दूध', 'घी', 'दही'],
    correctAnswer: 1,
    explanation: 'गद्यांश के अनुसार गाय दूध देती है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'hindi-comp-e-3',
    question: 'गद्यांश: "पेड़ हमें फल देते हैं। वे छाया भी देते हैं।" - पेड़ क्या देते हैं?',
    options: ['केवल फल', 'केवल छाया', 'फल और छाया दोनों', 'कुछ नहीं'],
    correctAnswer: 2,
    explanation: 'गद्यांश में बताया गया है कि पेड़ फल और छाया दोनों देते हैं',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'hindi-comp-e-4',
    question: 'गद्यांश: "विद्यार्थी को परिश्रम करना चाहिए।" - किसे परिश्रम करना चाहिए?',
    options: ['शिक्षक', 'विद्यार्थी', 'किसान', 'मजदूर'],
    correctAnswer: 1,
    explanation: 'गद्यांश में विद्यार्थी को परिश्रम करने को कहा गया है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'hindi-comp-e-5',
    question: 'गद्यांश: "सत्य बोलना हमारा धर्म है।" - हमारा धर्म क्या है?',
    options: ['झूठ बोलना', 'सत्य बोलना', 'चुप रहना', 'लड़ना'],
    correctAnswer: 1,
    explanation: 'गद्यांश के अनुसार सत्य बोलना हमारा धर्म है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'hindi-comp-e-6',
    question: 'गद्यांश: "स्वच्छता स्वास्थ्य के लिए जरूरी है।" - किसके लिए स्वच्छता जरूरी है?',
    options: ['धन', 'स्वास्थ्य', 'शिक्षा', 'नौकरी'],
    correctAnswer: 1,
    explanation: 'गद्यांश में बताया गया है कि स्वास्थ्य के लिए स्वच्छता जरूरी है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'hindi-comp-e-7',
    question: 'गद्यांश: "समय बहुत कीमती है। इसे बर्बाद न करें।" - क्या कीमती है?',
    options: ['धन', 'समय', 'पुस्तक', 'शिक्षा'],
    correctAnswer: 1,
    explanation: 'गद्यांश में समय को कीमती बताया गया है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'hindi-comp-e-8',
    question: 'गद्यांश: "बड़ों का आदर करना चाहिए।" - किसका आदर करना चाहिए?',
    options: ['छोटों का', 'बड़ों का', 'मित्रों का', 'शत्रुओं का'],
    correctAnswer: 1,
    explanation: 'गद्यांश में बड़ों का आदर करने को कहा गया है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'hindi-comp-e-9',
    question: 'गद्यांश: "व्यायाम शरीर को स्वस्थ रखता है।" - व्यायाम क्या करता है?',
    options: ['बीमार करता है', 'स्वस्थ रखता है', 'थकाता है', 'सुलाता है'],
    correctAnswer: 1,
    explanation: 'गद्यांश के अनुसार व्यायाम शरीर को स्वस्थ रखता है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },
  {
    id: 'hindi-comp-e-10',
    question: 'गद्यांश: "मेहनत का फल मीठा होता है।" - क्या मीठा होता है?',
    options: ['आलस्य', 'मेहनत का फल', 'नींद', 'खेल'],
    correctAnswer: 1,
    explanation: 'गद्यांश में मेहनत के फल को मीठा बताया गया है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'hindi-comp-m-1',
    question: 'गद्यांश: "शिक्षा मनुष्य को सभ्य बनाती है। यह समाज की उन्नति का आधार है।" - मुख्य विचार?',
    options: ['शिक्षा महंगी है', 'शिक्षा जरूरी नहीं', 'शिक्षा सभ्यता और उन्नति का आधार', 'शिक्षा कठिन है'],
    correctAnswer: 2,
    explanation: 'गद्यांश शिक्षा को सभ्यता और समाज की उन्नति का आधार बताता है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },
  {
    id: 'hindi-comp-m-2',
    question: 'गद्यांश: "वृक्षों से पर्यावरण शुद्ध रहता है। हमें अधिक से अधिक पेड़ लगाने चाहिए।" - लेखक का सुझाव?',
    options: ['पेड़ काटो', 'पेड़ लगाओ', 'पेड़ों की चिंता मत करो', 'पेड़ बेचो'],
    correctAnswer: 1,
    explanation: 'लेखक अधिक से अधिक पेड़ लगाने का सुझाव देता है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },
  {
    id: 'hindi-comp-m-3',
    question: 'गद्यांश: "योग से मन और शरीर दोनों स्वस्थ रहते हैं। प्रतिदिन योग करना चाहिए।" - योग का लाभ?',
    options: ['केवल शरीर को', 'केवल मन को', 'मन और शरीर दोनों को', 'किसी को नहीं'],
    correctAnswer: 2,
    explanation: 'गद्यांश में बताया गया है कि योग से मन और शरीर दोनों लाभान्वित होते हैं',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },
  {
    id: 'hindi-comp-m-4',
    question: 'गद्यांश: "प्रदूषण हमारे स्वास्थ्य के लिए हानिकारक है। इसे रोकना जरूरी है।" - लेखक का स्वर?',
    options: ['उदासीन', 'चेतावनीपूर्ण', 'हास्यपूर्ण', 'उदास'],
    correctAnswer: 1,
    explanation: 'लेखक प्रदूषण के खतरे के बारे में चेतावनी दे रहा है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },
  {
    id: 'hindi-comp-m-5',
    question: 'गद्यांश: "संगीत कला की एक मधुर विधा है। यह मन को शांति देता है।" - संगीत क्या है?',
    options: ['शोर', 'मधुर कला', 'व्यर्थ', 'केवल मनोरंजन'],
    correctAnswer: 1,
    explanation: 'गद्यांश में संगीत को मधुर कला विधा बताया गया है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },
  {
    id: 'hindi-comp-m-6',
    question: 'गद्यांश: "पुस्तकें ज्ञान का भंडार हैं। इनसे हमें बहुत कुछ सीखने को मिलता है।" - पुस्तकों की तुलना किससे?',
    options: ['खजाने से', 'ज्ञान के भंडार से', 'मित्र से', 'शिक्षक से'],
    correctAnswer: 1,
    explanation: 'पुस्तकों को ज्ञान का भंडार बताया गया है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },
  {
    id: 'hindi-comp-m-7',
    question: 'गद्यांश: "अनुशासन जीवन में सफलता की कुंजी है। हर व्यक्ति को अनुशासित रहना चाहिए।" - सफलता की कुंजी?',
    options: ['धन', 'अनुशासन', 'भाग्य', 'रूप'],
    correctAnswer: 1,
    explanation: 'गद्यांश में अनुशासन को सफलता की कुंजी बताया गया है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },
  {
    id: 'hindi-comp-m-8',
    question: 'गद्यांश: "देश की सेवा सबसे बड़ा धर्म है। हमें देशभक्त होना चाहिए।" - सबसे बड़ा धर्म?',
    options: ['स्वार्थ', 'देश सेवा', 'धन कमाना', 'विदेश जाना'],
    correctAnswer: 1,
    explanation: 'गद्यांश में देश की सेवा को सबसे बड़ा धर्म बताया गया है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },
  {
    id: 'hindi-comp-m-9',
    question: 'गद्यांश: "मित्रता में विश्वास सबसे जरूरी है। सच्चे मित्र दुःख-सुख में साथ देते हैं।" - सच्ची मित्रता की पहचान?',
    options: ['धन देना', 'हर स्थिति में साथ', 'केवल सुख में साथ', 'झूठ बोलना'],
    correctAnswer: 1,
    explanation: 'सच्चे मित्र दुःख-सुख दोनों में साथ देते हैं',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },
  {
    id: 'hindi-comp-m-10',
    question: 'गद्यांश: "परोपकार मनुष्य का सबसे बड़ा गुण है। दूसरों की मदद करने से आंतरिक शांति मिलती है।" - परोपकार का लाभ?',
    options: ['धन', 'प्रसिद्धि', 'आंतरिक शांति', 'शक्ति'],
    correctAnswer: 2,
    explanation: 'गद्यांश में परोपकार से आंतरिक शांति मिलने की बात कही गई है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'hindi-comp-h-1',
    question: 'गद्यांश: "भारतीय संस्कृति विविधता में एकता का प्रतीक है। यहाँ अनेक धर्म, भाषाएँ और परंपराएँ एक साथ फलती-फूलती हैं।" - मुख्य संदेश?',
    options: ['विविधता बुरी है', 'एकता में विविधता', 'विविधता में एकता', 'कोई एकता नहीं'],
    correctAnswer: 2,
    explanation: 'भारतीय संस्कृति विविधता में एकता का उदाहरण है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },
  {
    id: 'hindi-comp-h-2',
    question: 'गद्यांश: "विज्ञान ने मानव जीवन को सुविधाजनक बनाया है लेकिन प्रकृति से दूर भी कर दिया है। संतुलन जरूरी है।" - लेखक का दृष्टिकोण?',
    options: ['विज्ञान विरोधी', 'संतुलित', 'पूर्णतः प्रो-विज्ञान', 'प्रकृति विरोधी'],
    correctAnswer: 1,
    explanation: 'लेखक विज्ञान और प्रकृति में संतुलन की बात करता है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },
  {
    id: 'hindi-comp-h-3',
    question: 'गद्यांश: "साहित्य समाज का दर्पण है। यह युग की विचारधाराओं और समस्याओं को प्रतिबिंबित करता है।" - साहित्य की भूमिका?',
    options: ['मनोरंजन मात्र', 'समाज को प्रतिबिंबित करना', 'भाषा सिखाना', 'इतिहास लिखना'],
    correctAnswer: 1,
    explanation: 'साहित्य समाज और युग को दर्शाता है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },
  {
    id: 'hindi-comp-h-4',
    question: 'गद्यांश: "लोकतंत्र केवल मत देने का अधिकार नहीं, बल्कि जागरूक नागरिकता की मांग करता है।" - लोकतंत्र के लिए जरूरी?',
    options: ['केवल मतदान', 'केवल अधिकार', 'जागरूक नागरिकता', 'धन'],
    correctAnswer: 2,
    explanation: 'लोकतंत्र के लिए जागरूक नागरिक होना आवश्यक है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },
  {
    id: 'hindi-comp-h-5',
    question: 'गद्यांश: "वैश्वीकरण ने दुनिया को जोड़ा है पर स्थानीय संस्कृतियों को खतरा भी है। अपनी जड़ों से जुड़े रहना जरूरी है।" - लेखक की चिंता?',
    options: ['वैश्वीकरण नहीं चाहिए', 'स्थानीय संस्कृति का संरक्षण', 'विदेशी संस्कृति चाहिए', 'कोई चिंता नहीं'],
    correctAnswer: 1,
    explanation: 'लेखक स्थानीय संस्कृति के संरक्षण की बात कर रहा है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },
  {
    id: 'hindi-comp-h-6',
    question: 'गद्यांश: "कर्म ही पूजा है। निष्काम भाव से किया गया कार्य सबसे उत्तम है।" - गीता का संदेश?',
    options: ['कर्म न करो', 'फल की इच्छा से कर्म करो', 'निष्काम कर्म', 'आलस्य'],
    correctAnswer: 2,
    explanation: 'बिना फल की इच्छा के कर्म करना सर्वश्रेष्ठ है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },
  {
    id: 'hindi-comp-h-7',
    question: 'गद्यांश: "नारी शक्ति के बिना समाज अधूरा है। महिला सशक्तिकरण राष्ट्र के विकास की कुंजी है।" - मुख्य विषय?',
    options: ['महिला विरोध', 'महिला सशक्तिकरण', 'लैंगिक भेद', 'परंपरा'],
    correctAnswer: 1,
    explanation: 'गद्यांश महिला सशक्तिकरण को राष्ट्रीय विकास से जोड़ता है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },
  {
    id: 'hindi-comp-h-8',
    question: 'गद्यांश: "मौन भी एक भाषा है। कभी-कभी शब्दों से ज्यादा मौन कहता है।" - लेखक का आशय?',
    options: ['बोलो मत', 'मौन शक्तिशाली हो सकता है', 'शब्द व्यर्थ हैं', 'चुप रहो'],
    correctAnswer: 1,
    explanation: 'मौन भी एक प्रभावशाली अभिव्यक्ति है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },
  {
    id: 'hindi-comp-h-9',
    question: 'गद्यांश: "परंपरा और आधुनिकता में संघर्ष नहीं, संवाद होना चाहिए। दोनों एक-दूसरे के पूरक हो सकते हैं।" - लेखक का मानना?',
    options: ['परंपरा छोड़ो', 'आधुनिकता बुरी है', 'दोनों में सामंजस्य', 'संघर्ष जरूरी'],
    correctAnswer: 2,
    explanation: 'परंपरा और आधुनिकता में संवाद और सामंजस्य संभव है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },
  {
    id: 'hindi-comp-h-10',
    question: 'गद्यांश: "सत्याग्रह हिंसा का विरोध अहिंसा से करना है। यह शक्ति का नहीं, सत्य का बल है।" - सत्याग्रह क्या है?',
    options: ['हिंसक आंदोलन', 'अहिंसक प्रतिरोध', 'कायरता', 'भागना'],
    correctAnswer: 1,
    explanation: 'सत्याग्रह अहिंसक तरीके से सत्य के लिए संघर्ष है',
    categoryId: 'language',
    subCategoryId: 'hindi-comprehension',
    level: 'hard'
  },

  // ===================== VAKYA SHUDDHI (Hindi Sentence Correction) - 30 questions =====================
  
  // === EASY (10 questions) ===
  {
    id: 'vakya-e-1',
    question: 'अशुद्ध वाक्य: "मैं बाजार को गया।" सही वाक्य:',
    options: ['मैं बाजार जाता हूँ।', 'मैं बाजार गया।', 'मैं बाजार को जाता।', 'मैं को बाजार गया।'],
    correctAnswer: 1,
    explanation: '"को" का प्रयोग गलत है। सही: "मैं बाजार गया"',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'vakya-e-2',
    question: 'शुद्ध वाक्य चुनिए:',
    options: ['वह कल आएगा।', 'वह कल को आएगा।', 'वह कल आएगी।', 'वह आएगा कल को।'],
    correctAnswer: 0,
    explanation: '"वह कल आएगा" सही है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'vakya-e-3',
    question: 'अशुद्ध वाक्य: "मेरे को किताब चाहिए।" सही रूप:',
    options: ['मुझे किताब चाहिए।', 'मेरे को किताब चाहिए।', 'मेरा किताब चाहिए।', 'मैं किताब चाहिए।'],
    correctAnswer: 0,
    explanation: 'सही: "मुझे किताब चाहिए"',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'vakya-e-4',
    question: 'शुद्ध वाक्य है:',
    options: ['सीता गाना गाती है।', 'सीता गाना गाता है।', 'सीता गाने गाती है।', 'सीता गाती है गाना।'],
    correctAnswer: 0,
    explanation: '"सीता गाना गाती है" शुद्ध है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'vakya-e-5',
    question: 'अशुद्ध वाक्य: "दो किताबें हैं।" में त्रुटि:',
    options: ['कोई त्रुटि नहीं', 'दो किताबें है।', 'दो किताब हैं।', 'दो किताबों हैं।'],
    correctAnswer: 0,
    explanation: 'वाक्य शुद्ध है - कोई त्रुटि नहीं',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'vakya-e-6',
    question: 'सही वाक्य:',
    options: ['वह पानी पी रहा है।', 'वह पानी पीया रहा है।', 'वह पानी पीता रहा है।', 'वह पानी पीया है।'],
    correctAnswer: 0,
    explanation: '"वह पानी पी रहा है" शुद्ध है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'vakya-e-7',
    question: 'अशुद्ध वाक्य: "राम और मैं मित्र हैं।" में त्रुटि:',
    options: ['कोई त्रुटि नहीं', 'मैं और राम मित्र हैं।', 'राम मैं मित्र हैं।', 'राम या मैं मित्र हैं।'],
    correctAnswer: 0,
    explanation: 'वाक्य शुद्ध है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'vakya-e-8',
    question: 'सही वाक्य चुनिए:',
    options: ['मुझे भूख लगी है।', 'मुझको भूख लगी है।', 'मेरे को भूख लगी है।', 'मैं भूख लगी है।'],
    correctAnswer: 0,
    explanation: '"मुझे भूख लगी है" शुद्ध है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'vakya-e-9',
    question: 'अशुद्ध वाक्य: "वह रोज दूध पीता है।" में त्रुटि:',
    options: ['कोई त्रुटि नहीं', 'वह रोज दूध पीती है।', 'वह दूध पीता है रोज।', 'वह रोजाना दूध पीते हैं।'],
    correctAnswer: 0,
    explanation: 'वाक्य शुद्ध है (यदि वह पुल्लिंग है)',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },
  {
    id: 'vakya-e-10',
    question: 'शुद्ध वाक्य:',
    options: ['बच्चे खेल रहे हैं।', 'बच्चा खेल रहे हैं।', 'बच्चे खेल रहा है।', 'बच्चों खेल रहे हैं।'],
    correctAnswer: 0,
    explanation: '"बच्चे खेल रहे हैं" शुद्ध है (बहुवचन)',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'easy'
  },

  // === MEDIUM (10 questions) ===
  {
    id: 'vakya-m-1',
    question: 'अशुद्ध वाक्य: "उसने से कहा।" सही रूप:',
    options: ['उसने कहा।', 'उससे कहा।', 'उसको कहा।', 'दोनों 1 और 2 सही'],
    correctAnswer: 3,
    explanation: '"उसने कहा" या "उससे कहा" दोनों सही हैं (संदर्भ अनुसार)',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },
  {
    id: 'vakya-m-2',
    question: 'शुद्ध वाक्य चुनिए:',
    options: ['मैंने आपसे निवेदन किया।', 'मैंने आपको निवेदन किया।', 'मैंने आपका निवेदन किया।', 'मैं आपसे निवेदन किया।'],
    correctAnswer: 0,
    explanation: '"निवेदन" के साथ "से" प्रयोग होता है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },
  {
    id: 'vakya-m-3',
    question: 'अशुद्ध वाक्य: "वह बहुत सुंदर लड़का है।" में त्रुटि:',
    options: ['कोई त्रुटि नहीं', 'बहुत सुन्दर', 'सुंदर बहुत', 'लड़का सुंदर'],
    correctAnswer: 0,
    explanation: 'वाक्य शुद्ध है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },
  {
    id: 'vakya-m-4',
    question: 'सही वाक्य:',
    options: ['श्याम ने राम को पीटा।', 'श्याम ने राम से पीटा।', 'श्याम राम को पीटा।', 'श्याम ने राम पीटा।'],
    correctAnswer: 0,
    explanation: '"ने" के साथ "को" (कर्म कारक) सही है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },
  {
    id: 'vakya-m-5',
    question: 'अशुद्ध वाक्य: "मैं गाना गाऊंगा।" सही है या गलत?',
    options: ['सही है', 'गलत - मैं गाना गाउंगा', 'गलत - मैं गाया गाऊंगा', 'गलत - मैं गाऊंगा गाना'],
    correctAnswer: 0,
    explanation: 'वाक्य शुद्ध है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },
  {
    id: 'vakya-m-6',
    question: 'शुद्ध वाक्य:',
    options: ['उसके पास दो गायें हैं।', 'उसके पास दो गाय हैं।', 'उसके पास दो गायों हैं।', 'उसके पास गाय दो हैं।'],
    correctAnswer: 0,
    explanation: '"गायें" सही बहुवचन है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },
  {
    id: 'vakya-m-7',
    question: 'अशुद्ध वाक्य: "कृपया मुझ पर दया करें।" सही रूप:',
    options: ['कृपया मुझ पर दया करो।', 'कृपया मुझ पर दया कीजिए।', 'मुझ पर दया कीजिए।', 'दोनों 2 और 3 सही'],
    correctAnswer: 3,
    explanation: '"कृपया" और "कीजिए" साथ नहीं आते ("कृपया" स्वयं विनम्र निवेदन है)',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },
  {
    id: 'vakya-m-8',
    question: 'सही वाक्य चुनिए:',
    options: ['वह धीरे-धीरे चलती है।', 'वह धीरे-धीरे चलते हैं।', 'वह धीरे धीरे चलती है।', 'वह धीरे धीरे चलता है।'],
    correctAnswer: 0,
    explanation: '"धीरे-धीरे" (हाइफन के साथ) और स्त्रीलिंग "चलती" सही है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },
  {
    id: 'vakya-m-9',
    question: 'अशुद्ध वाक्य: "मैं स्कूल जा रहा हूँ।" में त्रुटि:',
    options: ['कोई त्रुटि नहीं', 'मैं स्कूल को जा रहा हूँ।', 'मैं स्कूल जाता हूँ।', 'मैं जा रहा हूँ स्कूल।'],
    correctAnswer: 0,
    explanation: 'वाक्य शुद्ध है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },
  {
    id: 'vakya-m-10',
    question: 'शुद्ध वाक्य:',
    options: ['यह मेरी पुस्तक है।', 'यह मेरा पुस्तक है।', 'यह मेरी पुस्तकें हैं।', 'यह मेरे पुस्तक है।'],
    correctAnswer: 0,
    explanation: '"मेरी" (स्त्रीलिंग) पुस्तक के साथ सही है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'medium'
  },

  // === HARD (10 questions) ===
  {
    id: 'vakya-h-1',
    question: 'अशुद्ध वाक्य: "आप अपने आपको समझते हैं कौन?" सही रूप:',
    options: ['आप अपने को समझते हैं कौन?', 'आप खुद को क्या समझते हैं?', 'आप अपने आप को क्या समझते हैं?', 'सभी सही'],
    correctAnswer: 2,
    explanation: 'प्रश्नवाचक में "क्या" होना चाहिए',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },
  {
    id: 'vakya-h-2',
    question: 'शुद्ध वाक्य:',
    options: ['वह अपने भाई से मिलने के लिए गया।', 'वह अपने भाई से मिलने को गया।', 'वह अपना भाई से मिलने गया।', 'वह अपने भाई मिलने गया।'],
    correctAnswer: 0,
    explanation: '"मिलने के लिए" सही प्रयोग है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },
  {
    id: 'vakya-h-3',
    question: 'अशुद्ध वाक्य पहचानिए:',
    options: ['उन्होंने स्वागत किया।', 'उसने मुझे बुलाया।', 'मैंने खाना खाया।', 'मैं स्कूल गया।'],
    correctAnswer: 3,
    explanation: '"मैं स्कूल गया" शुद्ध है यदि सहज भूत है (सकर्मक में "ने" चाहिए)',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },
  {
    id: 'vakya-h-4',
    question: 'सही वाक्य चुनिए:',
    options: ['छात्रों ने शिक्षक का अभिवादन किया।', 'छात्रों ने शिक्षक को अभिवादन किया।', 'छात्रों ने शिक्षक से अभिवादन किया।', 'छात्र शिक्षक का अभिवादन किया।'],
    correctAnswer: 0,
    explanation: '"अभिवादन किया" के साथ "का" प्रयोग होता है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },
  {
    id: 'vakya-h-5',
    question: 'अशुद्ध वाक्य: "इसमें कोई संदेह की बात नहीं।" सही रूप:',
    options: ['इसमें संदेह की कोई बात नहीं।', 'इसमें कोई संदेह नहीं।', 'इसमें संदेह नहीं की बात।', 'इसमें बात नहीं संदेह की।'],
    correctAnswer: 1,
    explanation: 'सरल और शुद्ध: "इसमें कोई संदेह नहीं"',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },
  {
    id: 'vakya-h-6',
    question: 'शुद्ध वाक्य:',
    options: ['वह अपने मित्र से गले मिला।', 'वह अपने मित्र को गले मिला।', 'वह अपने मित्र से गले लगा।', 'दोनों 1 और 3 सही'],
    correctAnswer: 3,
    explanation: '"गले मिलना" और "गले लगाना" दोनों सही हैं',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },
  {
    id: 'vakya-h-7',
    question: 'अशुद्ध वाक्य: "मुझे यह बात मालूम थी।" में त्रुटि:',
    options: ['कोई त्रुटि नहीं', 'मुझे यह बात पता थी।', 'मुझे मालूम था यह बात।', 'मुझे ज्ञात थी यह बात।'],
    correctAnswer: 0,
    explanation: 'वाक्य शुद्ध है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },
  {
    id: 'vakya-h-8',
    question: 'सही वाक्य चुनिए:',
    options: ['वह बड़े आदर से बोला।', 'वह बड़े आदर से बोले।', 'उसने बड़े आदर से कहा।', 'वह आदर से बड़े बोला।'],
    correctAnswer: 2,
    explanation: 'सकर्मक क्रिया के साथ "ने" आवश्यक',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },
  {
    id: 'vakya-h-9',
    question: 'अशुद्ध वाक्य: "अध्यापक ने छात्रों को समझाया।" सही है या गलत?',
    options: ['सही है', 'गलत - अध्यापक छात्रों को समझाया', 'गलत - अध्यापक ने छात्रों समझाया', 'गलत - अध्यापक ने समझाया छात्रों को'],
    correctAnswer: 0,
    explanation: 'वाक्य शुद्ध है',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },
  {
    id: 'vakya-h-10',
    question: 'शुद्ध वाक्य:',
    options: ['उसे भूख लगी है।', 'उसको भूख लगी है।', 'उसने भूख लगी है।', 'दोनों 1 और 2 सही'],
    correctAnswer: 3,
    explanation: '"उसे" और "उसको" दोनों सही हैं, पर "उसे" अधिक प्रचलित',
    categoryId: 'language',
    subCategoryId: 'vakya-shuddhi',
    level: 'hard'
  },

];
