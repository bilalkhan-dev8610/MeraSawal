import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Trophy, ArrowLeft, MapPin, Map, Globe, Crown, Medal, Award, TrendingUp, Target, Zap, ChevronDown } from 'lucide-react';
import type { LeaderboardEntry } from '@/app/App';
import { categories } from '@/app/data/categoriesData';

interface DashboardProps {
  entries: LeaderboardEntry[];
  onBack: () => void;
  playerName: string;
}

type RankingLevel = 'city' | 'state' | 'national';

// Format time in seconds to readable string
const formatTime = (seconds: number | undefined): string => {
  if (!seconds) return 'N/A';
  
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  
  if (mins === 0) {
    return `${secs}s`;
  }
  return `${mins}m ${secs}s`;
};

// Format timestamp to readable date and time
const formatDateTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  const isToday = date.toDateString() === today.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();
  
  const timeStr = date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  
  if (isToday) {
    return `Today at ${timeStr}`;
  } else if (isYesterday) {
    return `Yesterday at ${timeStr}`;
  } else {
    const dateStr = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    });
    return `${dateStr} at ${timeStr}`;
  }
};

export function Dashboard({ entries, onBack, playerName }: DashboardProps) {
  const [selectedLevel, setSelectedLevel] = useState<RankingLevel>('city');
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);

  // Group entries by location and category
  const getRankingsByLevel = (level: RankingLevel) => {
    let filteredEntries = [...entries];

    // Filter based on level
    if (level === 'city') {
      // Group by city - for demo, we'll show all but in production filter by user's city
      filteredEntries = entries.filter(e => e.city);
    } else if (level === 'state') {
      // Group by state
      filteredEntries = entries.filter(e => e.state);
    }
    // National shows all

    return filteredEntries
      .sort((a, b) => b.score - a.score || a.timestamp - b.timestamp)
      .slice(0, 30); // Show top 30
  };

  const rankings = getRankingsByLevel(selectedLevel);

  // Get category-wise performance
  const getCategoryStats = () => {
    const stats: Record<string, { total: number; avg: number; best: number }> = {};
    
    categories.forEach(cat => {
      const categoryEntries = entries.filter(e => e.category === cat.name);
      if (categoryEntries.length > 0) {
        const total = categoryEntries.length;
        const scores = categoryEntries.map(e => e.score);
        const avg = scores.reduce((a, b) => a + b, 0) / total;
        const best = Math.max(...scores);
        stats[cat.id] = { total, avg: Math.round(avg), best };
      }
    });
    
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-10 h-10 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Dashboard
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

      {/* Category Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        {/* All Categories Performance */}
        <button
          onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
          className="w-full flex items-center justify-between p-4 bg-card border-2 border-border rounded-lg hover:border-primary transition-all md:pointer-events-none md:cursor-default"
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-accent" />
            Category-wise Performance
          </h2>
          <motion.div
            animate={{ rotate: isCategoryExpanded ? 180 : 0 }}
            className="md:hidden"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </button>

        {/* All Categories Accordion Content */}
        <motion.div
          initial={false}
          animate={{
            height: isCategoryExpanded ? 'auto' : 0,
            opacity: isCategoryExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden md:!h-auto md:!opacity-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {categories.map((cat, index) => {
              const stats = categoryStats[cat.id];
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border-2 border-border rounded-lg p-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl sm:text-3xl">{cat.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xs sm:text-sm">{cat.name}</h3>
                    </div>
                  </div>
                  {stats ? (
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xs text-muted-foreground">Attempts</div>
                        <div className="text-base sm:text-lg font-bold text-primary">{stats.total}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Avg</div>
                        <div className="text-base sm:text-lg font-bold text-accent">{stats.avg}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Best</div>
                        <div className="text-base sm:text-lg font-bold text-secondary">{stats.best}</div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground text-center py-2">
                      No attempts yet
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Ranking Levels Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 bg-card border-2 border-border rounded-lg p-2">
          <button
            onClick={() => setSelectedLevel('city')}
            className={`flex-1 px-4 py-3 rounded-lg transition-all flex flex-col items-center justify-center gap-1 ${
              selectedLevel === 'city'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-primary/10'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-xs sm:text-sm whitespace-nowrap">City Level</span>
            {/* Show rank for City level - ALWAYS calculate */}
            {(() => {
              const currentUserData = localStorage.getItem('currentUser');
              if (currentUserData) {
                const currentUser = JSON.parse(currentUserData);
                const cityRankings = getRankingsByLevel('city');
                const userRankIndex = cityRankings.findIndex(e => e.name === currentUser.name);
                if (userRankIndex !== -1) {
                  return (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                      selectedLevel === 'city' 
                        ? 'bg-primary-foreground/20' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      Rank #{userRankIndex + 1}
                    </span>
                  );
                }
              }
              return null;
            })()}
          </button>
          <button
            onClick={() => setSelectedLevel('state')}
            className={`flex-1 px-4 py-3 rounded-lg transition-all flex flex-col items-center justify-center gap-1 ${
              selectedLevel === 'state'
                ? 'bg-accent text-accent-foreground'
                : 'hover:bg-accent/10'
            }`}
          >
            <Map className="w-4 h-4" />
            <span className="text-xs sm:text-sm whitespace-nowrap">State Level</span>
            {/* Show rank for State level - ALWAYS calculate */}
            {(() => {
              const currentUserData = localStorage.getItem('currentUser');
              if (currentUserData) {
                const currentUser = JSON.parse(currentUserData);
                const stateRankings = getRankingsByLevel('state');
                const userRankIndex = stateRankings.findIndex(e => e.name === currentUser.name);
                if (userRankIndex !== -1) {
                  return (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                      selectedLevel === 'state' 
                        ? 'bg-accent-foreground/20' 
                        : 'bg-accent/20 text-accent'
                    }`}>
                      Rank #{userRankIndex + 1}
                    </span>
                  );
                }
              }
              return null;
            })()}
          </button>
          <button
            onClick={() => setSelectedLevel('national')}
            className={`flex-1 px-4 py-3 rounded-lg transition-all flex flex-col items-center justify-center gap-1 ${
              selectedLevel === 'national'
                ? 'bg-secondary text-secondary-foreground'
                : 'hover:bg-secondary/10'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs sm:text-sm whitespace-nowrap">National</span>
            {/* Show rank for National level - ALWAYS calculate */}
            {(() => {
              const currentUserData = localStorage.getItem('currentUser');
              if (currentUserData) {
                const currentUser = JSON.parse(currentUserData);
                const nationalRankings = getRankingsByLevel('national');
                const userRankIndex = nationalRankings.findIndex(e => e.name === currentUser.name);
                if (userRankIndex !== -1) {
                  return (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                      selectedLevel === 'national' 
                        ? 'bg-secondary-foreground/20' 
                        : 'bg-secondary/20 text-secondary'
                    }`}>
                      Rank #{userRankIndex + 1}
                    </span>
                  );
                }
              }
              return null;
            })()}
          </button>
        </div>
      </div>

      {/* Rankings List */}
      <motion.div
        key={selectedLevel}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-card border-2 border-border rounded-xl p-[5px] sm:p-6"
      >
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-primary" />
          {selectedLevel === 'city' && 'City Level Rankings'}
          {selectedLevel === 'state' && 'State Level Rankings'}
          {selectedLevel === 'national' && 'National Rankings'}
        </h2>

        {rankings.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Trophy className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p>No rankings available yet</p>
            <p className="text-sm mt-2">Be the first to play and get on the leaderboard!</p>
          </div>
        ) : (
          <>
            {/* Current User Rank Summary */}
            {(() => {
              const currentUserData = localStorage.getItem('currentUser');
              if (currentUserData) {
                const currentUser = JSON.parse(currentUserData);
                const userRankIndex = rankings.findIndex(e => e.name === currentUser.name);
                
                if (userRankIndex !== -1) {
                  const userRank = userRankIndex + 1;
                  const userEntry = rankings[userRankIndex];
                  
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary rounded-lg"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            #{userRank}
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Your Current Rank</div>
                            <div className="font-bold text-lg">
                              {userRank === 1 && '🥇 1st Place'}
                              {userRank === 2 && '🥈 2nd Place'}
                              {userRank === 3 && '🥉 3rd Place'}
                              {userRank > 3 && `Rank #${userRank}`}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">{userEntry.score}</div>
                          <div className="text-xs text-muted-foreground">Your Score</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }
              }
              return null;
            })()}

            {/* Rankings List */}
            <div className="space-y-2">
              {rankings.map((entry, index) => {
                const rank = index + 1;
                const isTop3 = rank <= 3;
                const medalColors = {
                  1: 'from-yellow-500 to-yellow-600',
                  2: 'from-gray-400 to-gray-500',
                  3: 'from-orange-600 to-orange-700'
                };
                
                const category = categories.find(c => c.id === entry.category);
                
                // Check if this is the current user
                const currentUserData = localStorage.getItem('currentUser');
                const isCurrentUser = currentUserData ? JSON.parse(currentUserData).name === entry.name : false;

                return (
                  <motion.div
                    key={`${entry.name}-${entry.timestamp}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className={`p-4 sm:p-5 rounded-xl border-2 transition-all ${
                      isCurrentUser
                        ? 'border-primary bg-gradient-to-r from-primary/20 to-accent/10 shadow-lg scale-[1.02]'
                        : isTop3
                        ? 'border-primary bg-gradient-to-r from-primary/10 to-transparent'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Left: Rank Icon with Badge */}
                      <div className="flex flex-col items-center gap-2">
                        <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl ${
                          isTop3
                            ? `bg-gradient-to-br ${medalColors[rank as keyof typeof medalColors]} text-white shadow-lg`
                            : 'bg-card border-2 border-border'
                        }`}>
                          {isTop3 ? '🏆' : `#${rank}`}
                        </div>
                      </div>

                      {/* Middle: Player Info & Details */}
                      <div className="flex-1 min-w-0">
                        {/* Name */}
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-base sm:text-lg truncate">
                            {entry.name}
                          </h3>
                          {isCurrentUser && (
                            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full font-semibold">
                              YOU
                            </span>
                          )}
                        </div>

                        {/* Category & Location */}
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                          {category && (
                            <div className="flex items-center gap-1.5 bg-card/50 px-2 py-1 rounded-md border border-border">
                              <span className="text-base">{category.icon}</span>
                              <span className="font-medium">{category.name}</span>
                            </div>
                          )}
                          {entry.city && (
                            <div className="flex items-center gap-1.5 bg-card/50 px-2 py-1 rounded-md border border-border">
                              <span>📍</span>
                              <span>{entry.city}</span>
                            </div>
                          )}
                          {entry.state && selectedLevel !== 'city' && (
                            <div className="flex items-center gap-1.5 bg-card/50 px-2 py-1 rounded-md border border-border">
                              <span>🗺️</span>
                              <span>{entry.state}</span>
                            </div>
                          )}
                        </div>

                        {/* Date, Time & Duration */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                          <div className="flex items-center gap-1.5">
                            <span>📅</span>
                            <span>{formatDateTime(entry.timestamp)}</span>
                          </div>
                          {entry.timeTaken && (
                            <>
                              <span>•</span>
                              <div className="flex items-center gap-1.5">
                                <span>⏱️</span>
                                <span className="font-medium text-accent">
                                  {formatTime(entry.timeTaken)}
                                </span>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Questions Breakdown */}
                        {entry.result && (
                          <div className="flex items-center gap-3 text-xs">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              <span className="text-muted-foreground">Correct:</span>
                              <span className="font-bold text-green-600 dark:text-green-400">{entry.result.correct}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <span className="text-muted-foreground">Wrong:</span>
                              <span className="font-bold text-red-600 dark:text-red-400">{entry.result.wrong}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                              <span className="text-muted-foreground">Skipped:</span>
                              <span className="font-bold text-gray-600 dark:text-gray-400">{entry.result.unattempted}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right: Score */}
                      <div className="flex-shrink-0 text-right">
                        <div className={`text-3xl sm:text-4xl font-bold ${
                          rank === 1 ? 'text-yellow-600 dark:text-yellow-400' :
                          rank === 2 ? 'text-gray-600 dark:text-gray-400' :
                          rank === 3 ? 'text-orange-600 dark:text-orange-400' :
                          'text-primary'
                        }`}>
                          {entry.score}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">/ 20</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {Math.round((entry.score / 20) * 100)}%
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}