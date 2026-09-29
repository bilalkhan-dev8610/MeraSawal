// Quick script to check question counts across all categories
const fs = require('fs');

// Read all question files and count
const categories = [
  { name: 'General Knowledge', file: './src/app/data/gkQuestionsTemp.ts', id: 'general-knowledge' },
  { name: 'Geography', file: './src/app/data/geographyQuestionsTemp.ts', id: 'geography' },
  { name: 'History', file: './src/app/data/historyQuestionsTemp.ts', id: 'history' },
  { name: 'Polity', file: './src/app/data/polityQuestionsTemp.ts', id: 'polity' },
  { name: 'Economy', file: './src/app/data/economyQuestionsTemp.ts', id: 'economy' },
  { name: 'Quantitative Reasoning', file: './src/app/data/quantReasoningQuestions.ts', id: 'quantitative-reasoning' },
  { name: 'Language', file: './src/app/data/languageQuestions.ts', id: 'language' },
  { name: 'Science', file: './src/app/data/scienceQuestionsTemp.ts', id: 'science' },
  { name: 'Computer', file: './src/app/data/computerQuestionsTemp.ts', id: 'computer' },
  { name: 'Mathematics', file: './src/app/data/mathQuestionsTemp.ts', id: 'mathematics' },
  { name: 'Education & Pedagogy', file: './src/app/data/educationPedagogyQuestions.ts', id: 'education-pedagogy' },
  { name: 'Space & Defence', file: './src/app/data/spaceDefenceQuestions.ts', id: 'space-defence' },
  { name: 'Environment & Ecology', file: './src/app/data/environmentEcologyQuestions.ts', id: 'environment-ecology' },
  { name: 'Indian Culture & Heritage', file: './src/app/data/indianCultureHeritageQuestions.ts', id: 'indian-culture-heritage' },
];

console.log('\n📊 QUESTION COUNT ANALYSIS\n');
console.log('='.repeat(80));

categories.forEach(cat => {
  try {
    const content = fs.readFileSync(cat.file, 'utf8');
    
    // Count questions by level
    const easyMatches = content.match(/level:\s*['"]easy['"]/g);
    const mediumMatches = content.match(/level:\s*['"]medium['"]/g);
    const hardMatches = content.match(/level:\s*['"]hard['"]/g);
    
    const easyCount = easyMatches ? easyMatches.length : 0;
    const mediumCount = mediumMatches ? mediumMatches.length : 0;
    const hardCount = hardMatches ? hardMatches.length : 0;
    const total = easyCount + mediumCount + hardCount;
    
    console.log(`\n📚 ${cat.name}`);
    console.log(`   Easy: ${easyCount} | Medium: ${mediumCount} | Hard: ${hardCount} | Total: ${total}`);
    
    // Check for issues
    if (easyCount < 20 || mediumCount < 20 || hardCount < 20) {
      console.log(`   ⚠️  ISSUE: Need ${20 - easyCount} Easy, ${20 - mediumCount} Medium, ${20 - hardCount} Hard`);
    } else {
      console.log(`   ✅ All levels complete (20+ each)`);
    }
  } catch (err) {
    console.log(`\n📚 ${cat.name}`);
    console.log(`   ❌ File not found or error: ${err.message}`);
  }
});

console.log('\n' + '='.repeat(80) + '\n');
