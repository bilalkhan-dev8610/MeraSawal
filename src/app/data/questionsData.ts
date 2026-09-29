import type { DifficultyLevel } from './categoriesData';
import { supplementaryQuestions } from './supplementaryQuestions';
import { additionalQuestions } from './additionalQuestions';
import { educationPedagogyQuestions } from './educationPedagogyQuestions';
import { spaceDefenceQuestions } from './spaceDefenceQuestions';
import { environmentEcologyQuestions } from './environmentEcologyQuestions';
import { indianCultureHeritageQuestions } from './indianCultureHeritageQuestions';
import { gkQuestions } from './gkQuestionsTemp';
import { geographyQuestions } from './geographyQuestionsTemp';
import { historyQuestions } from './historyQuestionsTemp';
import { polityQuestions } from './polityQuestionsTemp';
import { economyQuestions } from './economyQuestionsTemp';
import { quantReasoningQuestions } from './quantReasoningQuestions';
import { quantReasoningQuestionsPart2 } from './quantReasoningQuestionspart2';
import { languageQuestions } from './languageQuestions';
import { languageQuestionsPart2 } from './languageQuestionsPart2';
import { scienceQuestions } from './scienceQuestionsTemp';
import { computerQuestions } from './computerQuestionsTemp';
import { mathQuestions } from './mathQuestionsTemp';
import { missingQuestionsComplete } from './missingQuestionsComplete';
import { missingGKQuestions } from './missingGKQuestions';
import { missingGKQuestions2 } from './missingGKQuestions2';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  categoryId: string;
  subCategoryId: string;
  level: DifficultyLevel;
}

// Comprehensive question bank with actual questions for all 13 categories
export const questionBank: Question[] = [
  // Main category questions
  ...gkQuestions,
  ...geographyQuestions,
  ...historyQuestions,
  ...polityQuestions,
  ...economyQuestions,
  ...quantReasoningQuestions,
  ...quantReasoningQuestionsPart2,
  ...languageQuestions,
  ...languageQuestionsPart2,
  ...scienceQuestions,
  ...computerQuestions,
  ...mathQuestions,
  
  // Merge supplementary questions
  ...supplementaryQuestions,
  
  // Merge additional questions
  ...additionalQuestions,
  
  // Merge Education & Pedagogy questions (all levels for all 3 subcategories)
  ...educationPedagogyQuestions,

  // Merge Space Defence questions
  ...spaceDefenceQuestions,

  // Merge Environment & Ecology questions
  ...environmentEcologyQuestions,

  // Merge Indian Culture & Heritage questions
  ...indianCultureHeritageQuestions,

  // Merge missing questions
  ...missingQuestionsComplete,
  ...missingGKQuestions,
  ...missingGKQuestions2

];

// Helper function to get questions by category, subcategory and level
export function getQuestions(
  categoryId: string,
  subCategoryId: string,
  level: DifficultyLevel,
  count: number = 20
): Question[] {
  const filtered = questionBank.filter(
    q => q.categoryId === categoryId &&
         q.subCategoryId === subCategoryId &&
         q.level === level
  );

  // Shuffle and return requested number of questions
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}