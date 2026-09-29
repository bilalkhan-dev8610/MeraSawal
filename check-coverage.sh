#!/bin/bash
# Quick audit of question coverage

echo "=== CHECKING QUESTION COVERAGE ==="
echo ""

# List of all subcategories to check
subcategories=(
  "static-gk" "current-affairs" "important-days" "awards-honors" "books-authors"
  "indian-geography" "world-geography" "physical-geography" "climate-environment" "maps-locations"
  "ancient-history" "medieval-history" "modern-history" "freedom-struggle" "world-history"
  "constitution" "fundamental-rights" "parliament-judiciary" "panchayati-raj" "president-pm"
  "economy-basics" "budget-survey" "banking-finance" "inflation-gdp" "govt-schemes"
  "percentage" "profit-loss" "ratio-proportion" "time-work" "time-speed-distance" "si-ci"
  "logical-reasoning" "verbal-reasoning" "non-verbal-reasoning" "puzzles-seating" "coding-decoding"
  "grammar" "vocabulary" "synonyms-antonyms" "reading-comprehension" "error-detection"
  "vyakaran" "muhavare" "paryayvachi" "hindi-comprehension" "vakya-shuddhi"
  "physics-basic" "chemistry-basic" "biology-basic" "science-10th"
  "basic-computer" "ms-office" "internet-networking" "cyber-security" "ai-technology"
  "arithmetic" "algebra" "geometry"
  "indian-culture" "world-heritage" "art-architecture"
  "ecology-basics" "biodiversity" "climate-change"
  "space-missions" "indian-defence" "military-operations"
  "teaching-methods" "child-psychology" "education-policy"
)

empty=0
filled=0

for subcat in "${subcategories[@]}"; do
  count=$(grep -c "subCategoryId: '$subcat'" src/app/data/*.ts 2>/dev/null || echo "0")
  if [ "$count" -gt "0" ]; then
    echo "✅ $subcat: $count questions"
    ((filled++))
  else
    echo "❌ $subcat: EMPTY"
    ((empty++))
  fi
done

echo ""
echo "=== SUMMARY ==="
echo "Total Subcategories: ${#subcategories[@]}"
echo "Filled: $filled"
echo "Empty: $empty"
echo ""
echo "Total Questions:"
grep -c "id: '" src/app/data/questionsData.ts src/app/data/supplementaryQuestions.ts src/app/data/additionalQuestions.ts 2>/dev/null || echo "Error counting"
