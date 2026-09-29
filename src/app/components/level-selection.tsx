import { motion } from 'motion/react';
import { ArrowLeft, Zap, TrendingUp, Flame } from 'lucide-react';
import type { DifficultyLevel, SubCategory } from '@/app/data/categoriesData';

interface LevelSelectionProps {
  subCategory: SubCategory;
  categoryName: string;
  categoryIcon: string;
  onSelect: (level: DifficultyLevel) => void;
  onBack: () => void;
}

const levels: Array<{
  id: DifficultyLevel;
  name: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
}> = [
  {
    id: 'easy',
    name: 'Easy',
    description: 'Direct facts and basic concepts',
    icon: Zap,
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-green-500/5'
  },
  {
    id: 'medium',
    name: 'Medium',
    description: 'Conceptual understanding required',
    icon: TrendingUp,
    color: 'text-yellow-400',
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    id: 'hard',
    name: 'Hard',
    description: 'Exam-level tricky questions',
    icon: Flame,
    color: 'text-red-400',
    gradient: 'from-red-500/20 to-red-500/5'
  }
];

export function LevelSelection({ 
  subCategory, 
  categoryName, 
  categoryIcon, 
  onSelect, 
  onBack 
}: LevelSelectionProps) {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
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
              Back to Sub-Categories
            </motion.button>
          </div>
          
          {/* Category Info Card */}
          <div className="bg-card border-2 border-border rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{categoryIcon}</span>
              <div>
                <p className="text-sm text-muted-foreground">{categoryName}</p>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {subCategory.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Choose Your Difficulty Level
            </h2>
            <p className="text-muted-foreground">
              20 Questions • 30 Seconds Each • 10 Minutes Total
            </p>
          </div>
        </motion.div>

        {/* Levels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <motion.button
                key={level.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelect(level.id)}
                className="group relative bg-card border-2 border-border hover:border-primary rounded-2xl p-8 text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${level.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 flex justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${level.color}`} />
                    </div>
                  </motion.div>

                  {/* Level name */}
                  <h3 className={`text-2xl font-bold mb-2 ${level.color}`}>
                    {level.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {level.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>✓ 20 Questions</div>
                    <div>⏱️ 30 sec each</div>
                    <div>🎯 Best for {level.name.toLowerCase()} level</div>
                  </div>

                  {/* Start button */}
                  <motion.div
                    className="mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Start Quiz
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-accent/10 border border-accent/30 rounded-xl p-4 text-center"
        >
          <p className="text-sm text-muted-foreground">
            ⏳ <strong>Timer Rule:</strong> Each question has 30 seconds. Auto-skip if time expires.
          </p>
        </motion.div>
      </div>
    </div>
  );
}