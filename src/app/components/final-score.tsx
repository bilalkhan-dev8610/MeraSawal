import { motion } from 'motion/react';
import { Trophy, RotateCcw, Award, Target, Zap, CheckCircle, XCircle, Clock, LayoutDashboard } from 'lucide-react';
import type { QuizResult } from '@/app/App';
import type { DifficultyLevel } from '@/app/data/categoriesData';

interface FinalScoreProps {
  playerName: string;
  score: number;
  total: number;
  result: QuizResult;
  categoryName: string;
  level: DifficultyLevel;
  onPlayAgain: () => void;
  onViewLeaderboard: () => void;
  onViewDashboard: () => void;
}

export function FinalScore({
  playerName,
  score,
  total,
  result,
  categoryName,
  level,
  onPlayAgain,
  onViewLeaderboard,
  onViewDashboard
}: FinalScoreProps) {
  const percentage = (score / total) * 100;
  
  const getMessage = () => {
    if (percentage === 100) return "PERFECT SCORE!";
    if (percentage >= 80) return "EXCELLENT!";
    if (percentage >= 60) return "GREAT JOB!";
    if (percentage >= 40) return "GOOD EFFORT!";
    return "KEEP TRYING!";
  };

  const getEmoji = () => {
    if (percentage === 100) return "🏆";
    if (percentage >= 80) return "🎯";
    if (percentage >= 60) return "⭐";
    if (percentage >= 40) return "👍";
    return "💪";
  };

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="relative inline-block">
          <Award className="w-32 h-32 text-primary animate-pulse" />
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
      >
        {getMessage()} {getEmoji()}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-3xl mb-2 text-foreground"
      >
        Great Job, <span className="text-primary font-bold">{playerName}</span>!
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-lg text-muted-foreground mb-8"
      >
        {categoryName} • <span className="capitalize">{level}</span> Level
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12 mb-8 shadow-lg shadow-primary/10 w-full"
      >
        {/* Main Score */}
        <div className="mb-8 pb-6 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-accent" />
              <span className="text-muted-foreground">Your Score</span>
            </div>
            <span className="text-4xl font-bold text-primary">
              {score}/{total}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-secondary" />
              <span className="text-muted-foreground">Accuracy</span>
            </div>
            <span className="text-4xl font-bold text-accent">
              {percentage.toFixed(0)}%
            </span>
          </div>

          {/* Animated progress bar */}
          <div className="mt-6">
            <div className="h-4 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-primary/10 border border-primary/30 rounded-xl p-4"
          >
            <CheckCircle className="w-8 h-8 text-primary mb-2 mx-auto" />
            <div className="text-3xl font-bold text-primary mb-1">{result.correct}</div>
            <div className="text-sm text-muted-foreground">Correct</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-destructive/10 border border-destructive/30 rounded-xl p-4"
          >
            <XCircle className="w-8 h-8 text-destructive mb-2 mx-auto" />
            <div className="text-3xl font-bold text-destructive mb-1">{result.wrong}</div>
            <div className="text-sm text-muted-foreground">Wrong</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4"
          >
            <Clock className="w-8 h-8 text-yellow-500 mb-2 mx-auto" />
            <div className="text-3xl font-bold text-yellow-500 mb-1">{result.unattempted}</div>
            <div className="text-sm text-muted-foreground">Unattempted</div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 w-full"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlayAgain}
          className="flex-1 px-8 py-4 bg-card border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          PLAY AGAIN
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onViewLeaderboard}
          className="flex-1 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
        >
          <Trophy className="w-5 h-5" />
          LEADERBOARD
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onViewDashboard}
          className="flex-1 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
        >
          <LayoutDashboard className="w-5 h-5 relative z-10" />
          <span className="relative z-10">DASHBOARD</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
