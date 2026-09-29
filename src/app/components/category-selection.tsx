import { motion } from 'motion/react';
import { Brain, ArrowLeft, Sparkles } from 'lucide-react';
import { categories, specialCategories, type Category } from '@/app/data/categoriesData';

interface CategorySelectionProps {
  onSelectCategory: (category: Category) => void;
  onBack: () => void;
}

export function CategorySelection({ onSelectCategory, onBack }: CategorySelectionProps) {
  return (
    <div className="min-h-screen bg-background p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Fixed Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          {/* Back Button - Fixed at Top */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="px-4 py-2 bg-card border-2 border-border hover:border-primary rounded-lg flex items-center gap-2 transition-all text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </motion.button>
          </div>

          {/* Title Section */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Brain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Select Category
              </h1>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Choose your category and start learning
            </p>
          </div>
        </motion.div>

        {/* Main Categories */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Main Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectCategory(category)}
                className="group relative bg-card border-2 border-border hover:border-primary rounded-2xl p-6 text-left transition-all duration-300 shadow-lg hover:shadow-primary/20 overflow-hidden"
              >
                {/* Glowing effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.subCategories.length} Sub-Categories Available
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                      20 Questions
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">3 Levels</span>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                  <motion.span
                    className="text-primary group-hover:text-primary-foreground text-xl font-bold"
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
    </div>
  );
}