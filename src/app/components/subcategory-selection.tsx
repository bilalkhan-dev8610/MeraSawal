import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import type { Category, SubCategory } from '@/app/data/categoriesData';

interface SubCategorySelectionProps {
  category: Category;
  onSelect: (subCategory: SubCategory) => void;
  onBack: () => void;
}

export function SubCategorySelection({ category, onSelect, onBack }: SubCategorySelectionProps) {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Fixed Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* Back Button - Fixed at Top */}
          <div className="flex justify-between items-center mb-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="px-4 py-2 bg-card border-2 border-border hover:border-primary rounded-lg flex items-center gap-2 transition-all text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Categories
            </motion.button>
          </div>
          
          {/* Category Title */}
          <div className="flex items-center gap-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {category.name}
              </h1>
              <p className="text-muted-foreground">
                Select a sub-category to continue
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sub-Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.subCategories.map((subCategory, index) => (
            <motion.button
              key={subCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(subCategory)}
              className="group relative bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-left transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {subCategory.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  20 Questions • 3 Levels
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                <motion.span
                  className="text-primary group-hover:text-primary-foreground text-xl"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}