import { motion } from 'motion/react';
import { Trophy, Medal, Award, ArrowLeft, Crown, Clock } from 'lucide-react';
import type { LeaderboardEntry } from '@/app/App';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  onBack: () => void;
  playerName: string;
}

// Format time in seconds to readable string
const formatTime = (seconds: number | undefined): string => {
  if (!seconds) return 'N/A';
  
  const mins = Math.floor(seconds / 60);
  const secs = (seconds % 60).toFixed(2); // Decimal format with milliseconds
  
  if (mins === 0) {
    return `${secs}s`;
  }
  return `${mins}m ${secs}s`;
};

export function Leaderboard({ entries, onBack, playerName }: LeaderboardProps) {
  const getMedalIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Crown className="w-6 h-6 text-[#FFD700]" />;
      case 1:
        return <Medal className="w-6 h-6 text-[#C0C0C0]" />;
      case 2:
        return <Award className="w-6 h-6 text-[#CD7F32]" />;
      default:
        return null;
    }
  };

  const getMedalColor = (position: number) => {
    switch (position) {
      case 0:
        return 'from-[#FFD700]/20 to-transparent border-[#FFD700]/50';
      case 1:
        return 'from-[#C0C0C0]/20 to-transparent border-[#C0C0C0]/50';
      case 2:
        return 'from-[#CD7F32]/20 to-transparent border-[#CD7F32]/50';
      default:
        return 'from-card to-transparent border-border';
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <motion.div
      key="leaderboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto py-8"
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-10 h-10 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Leaderboard
          </h1>
        </div>
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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Trophy className="w-20 h-20 text-primary animate-pulse" />
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          LEADERBOARD
        </h2>
        <p className="text-muted-foreground mt-2">Top 10 Quiz Masters</p>
      </motion.div>

      <div className="space-y-3">
        {entries.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card border-2 border-border rounded-xl p-12 text-center"
          >
            <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              No scores yet. Be the first to take the quiz!
            </p>
          </motion.div>
        ) : (
          entries.map((entry, index) => (
            <motion.div
              key={`${entry.name}-${entry.timestamp}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 4 }}
              className={`
                bg-gradient-to-r ${getMedalColor(index)}
                border-2 rounded-xl p-4 sm:p-6
                transition-all duration-300
                ${index < 3 ? 'shadow-lg' : ''}
              `}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Left Side - Medal Icon Only for Top 3 */}
                {index < 3 && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                      >
                        {getMedalIcon(index)}
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Middle Section - Name, Category, Date */}
                <div className="flex-1 min-w-0">
                  {/* Name */}
                  <div className="font-bold text-base sm:text-lg text-foreground truncate mb-1">
                    {entry.name}
                  </div>
                  
                  {/* Category - Subcategory - Level */}
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">
                    <span className="font-medium">{entry.category}</span>
                    <span className="mx-1">•</span>
                    <span>{entry.subCategory}</span>
                    <span className="mx-1">•</span>
                    <span className="capitalize">{entry.level}</span>
                  </div>
                  
                  {/* Date and Time - Below Category */}
                  <div className="text-xs text-muted-foreground/80">
                    📅 {formatDate(entry.timestamp)}
                  </div>
                </div>

                {/* Right Section - Score Only */}
                <div className="flex-shrink-0 flex flex-col items-end justify-center">
                  {/* Score */}
                  <div className={`
                    px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-bold text-lg sm:text-xl
                    ${index === 0 ? 'bg-primary/20 text-primary' : ''}
                    ${index === 1 ? 'bg-accent/20 text-accent' : ''}
                    ${index === 2 ? 'bg-secondary/20 text-secondary' : ''}
                    ${index > 2 ? 'bg-card text-foreground' : ''}
                  `}>
                    {entry.score}/20
                  </div>
                  
                  {/* Percentage */}
                  <div className="text-xs text-muted-foreground mt-1">
                    {Math.round((entry.score / 20) * 100)}%
                  </div>
                  
                  {/* Completion Time */}
                  {entry.timeTaken && (
                    <div className="text-xs text-accent font-bold flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{formatTime(entry.timeTaken)}</span>
                      
                      {/* Question Breakdown - Desktop Only */}
                      <span className="hidden md:inline-flex items-center gap-1.5 ml-2 text-muted-foreground font-normal">
                        <span className="text-green-500">✓ {entry.result.correct}</span>
                        <span className="text-red-500">✗ {entry.result.wrong}</span>
                        <span className="text-gray-400">○ {entry.result.unattempted}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Special effects for top 3 */}
              {index < 3 && (
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  style={{
                    background: `radial-gradient(circle at ${30 + index * 20}% 50%, ${
                      index === 0 ? 'rgba(255, 215, 0, 0.1)' :
                      index === 1 ? 'rgba(192, 192, 192, 0.1)' :
                      'rgba(205, 127, 50, 0.1)'
                    }, transparent 70%)`
                  }}
                />
              )}
            </motion.div>
          ))
        )}
      </div>

      {entries.length > 0 && entries.length < 10 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: entries.length * 0.1 + 0.5 }}
          className="text-center text-muted-foreground mt-8"
        >
          {10 - entries.length} more spot{10 - entries.length !== 1 ? 's' : ''} available!
        </motion.p>
      )}
    </motion.div>
  );
}