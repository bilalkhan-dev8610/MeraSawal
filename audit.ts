// Temporary audit script to check question coverage
import { categories } from './src/app/data/categoriesData';
import { questionBank } from './src/app/data/questionsData';
import { supplementaryQuestions } from './src/app/data/supplementaryQuestions';
import { additionalQuestions } from './src/app/data/additionalQuestions';

const allQuestions = [...questionBank, ...supplementaryQuestions, ...additionalQuestions];

// Count questions per subcategory
const subcategoryCount: Record<string, number> = {};

allQuestions.forEach(q => {
  const key = `${q.categoryId}::${q.subCategoryId}`;
  subcategoryCount[key] = (subcategoryCount[key] || 0) + 1;
});

// Check all subcategories
let totalSubcategories = 0;
let filledSubcategories = 0;
let emptySubcategories: string[] = [];

categories.forEach(category => {
  category.subCategories.forEach(subCat => {
    totalSubcategories++;
    const key = `${category.id}::${subCat.id}`;
    const count = subcategoryCount[key] || 0;
    
    if (count > 0) {
      filledSubcategories++;
      console.log(`✅ ${category.name} → ${subCat.name}: ${count} questions`);
    } else {
      emptySubcategories.push(`❌ ${category.name} → ${subCat.name}`);
    }
  });
});

console.log('\n=== EMPTY SUBCATEGORIES ===');
emptySubcategories.forEach(item => console.log(item));

console.log(`\n=== SUMMARY ===`);
console.log(`Total Subcategories: ${totalSubcategories}`);
console.log(`Filled: ${filledSubcategories}`);
console.log(`Empty: ${emptySubcategories.length}`);
console.log(`Total Questions: ${allQuestions.length}`);
