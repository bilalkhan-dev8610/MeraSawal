import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Plus, Calendar, Users, TrendingUp, X, Trophy, Tag } from 'lucide-react';
import { mockLeagues } from '../mock-data';

interface NewLeague {
  name: string;
  startDate: string;
  endDate: string;
  categories: string[];
  prizePool: string;
  description: string;
  maxParticipants: string;
}

const CATEGORIES = [
  'General Awareness',
  'Science & Technology',
  'History & Geography',
  'Mathematics',
  'Sports',
  'Entertainment',
  'Business & Economy',
  'Politics & Current Affairs',
  'Literature & Arts',
  'Environment & Nature',
  'Health & Medicine',
  'Tech & Innovation',
  'Culture & Society',
  'Legal & Constitution'
];

export function Leagues() {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [newLeague, setNewLeague] = useState<NewLeague>({
    name: '',
    startDate: '',
    endDate: '',
    categories: [],
    prizePool: '',
    description: '',
    maxParticipants: ''
  });

  const handleCategoryToggle = (category: string) => {
    setNewLeague(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleCreateLeague = () => {
    // Validation
    if (!newLeague.name || !newLeague.startDate || !newLeague.endDate || 
        newLeague.categories.length === 0 || !newLeague.prizePool) {
      alert('Please fill all required fields');
      return;
    }

    // Here you would typically send data to backend
    console.log('Creating league:', newLeague);
    
    // Reset form and close popup
    setNewLeague({
      name: '',
      startDate: '',
      endDate: '',
      categories: [],
      prizePool: '',
      description: '',
      maxParticipants: ''
    });
    setShowCreatePopup(false);
    setShowSuccessPopup(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 whitespace-nowrap">
          <Target className="w-7 h-7 text-cyan-500" />
          League Management
        </h2>
        <button 
          onClick={() => setShowCreatePopup(true)}
          className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform whitespace-nowrap self-end"
        >
          <Plus className="w-4 h-4" />
          Create League
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockLeagues.map((league, index) => (
          <motion.div
            key={league.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">{league.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                league.status === 'live' ? 'bg-green-500/20 text-green-500' :
                league.status === 'upcoming' ? 'bg-blue-500/20 text-blue-500' :
                'bg-gray-500/20 text-gray-500'
              }`}>
                {league.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>{league.startDate} - {league.endDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span>{league.participants} Participants</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <span>{league.completionRate}% Completion Rate</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Categories:</p>
              <div className="flex flex-wrap gap-2">
                {league.categories.map((cat) => (
                  <span key={cat} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Create League Popup */}
      <AnimatePresence>
        {showCreatePopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreatePopup(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Popup Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-2xl border-2 border-primary/30 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-primary/20">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-xl border-b-2 border-primary/30 px-6 py-3 flex items-center justify-between gap-4 overflow-hidden z-10">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 overflow-hidden">
                      <h3 className="text-2xl font-bold truncate">Create New League</h3>
                      <p className="text-sm text-muted-foreground whitespace-nowrap truncate">Set up a new quiz league competition</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCreatePopup(false)}
                    className="p-2 hover:bg-red-500/20 rounded-xl transition-colors group flex-shrink-0"
                  >
                    <X className="w-6 h-6 text-muted-foreground group-hover:text-red-500" />
                  </button>
                </div>

                {/* Form Content */}
                <div className="p-6 space-y-6">
                  {/* League Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      League Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={newLeague.name}
                      onChange={(e) => setNewLeague({ ...newLeague, name: e.target.value })}
                      placeholder="e.g., Summer Quiz Championship 2026"
                      className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  {/* Date Range */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Start Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={newLeague.startDate}
                        onChange={(e) => setNewLeague({ ...newLeague, startDate: e.target.value })}
                        className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        End Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={newLeague.endDate}
                        onChange={(e) => setNewLeague({ ...newLeague, endDate: e.target.value })}
                        className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Prize Pool & Max Participants */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        Prize Pool <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={newLeague.prizePool}
                        onChange={(e) => setNewLeague({ ...newLeague, prizePool: e.target.value })}
                        placeholder="e.g., ₹1,00,000"
                        className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Max Participants
                      </label>
                      <input
                        type="number"
                        value={newLeague.maxParticipants}
                        onChange={(e) => setNewLeague({ ...newLeague, maxParticipants: e.target.value })}
                        placeholder="e.g., 10000"
                        className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Description
                    </label>
                    <textarea
                      value={newLeague.description}
                      onChange={(e) => setNewLeague({ ...newLeague, description: e.target.value })}
                      placeholder="Enter league description..."
                      rows={3}
                      className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Categories Selection */}
                  <div>
                    <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      Select Categories <span className="text-red-500">*</span>
                      <span className="text-xs text-muted-foreground font-normal">
                        ({newLeague.categories.length} selected)
                      </span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-60 overflow-y-auto p-3 bg-card/50 rounded-xl border-2 border-border">
                      {CATEGORIES.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleCategoryToggle(category)}
                          className={`p-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                            newLeague.categories.includes(category)
                              ? 'bg-primary/20 border-primary text-primary'
                              : 'bg-card border-border hover:border-primary/50'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selected Categories Display */}
                  {newLeague.categories.length > 0 && (
                    <div className="p-4 bg-primary/10 border-2 border-primary/30 rounded-xl">
                      <p className="text-sm font-semibold mb-2 text-primary">Selected Categories:</p>
                      <div className="flex flex-wrap gap-2">
                        {newLeague.categories.map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold flex items-center gap-2"
                          >
                            {cat}
                            <button
                              onClick={() => handleCategoryToggle(cat)}
                              className="hover:bg-red-500/20 rounded-full p-0.5"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="sticky bottom-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-xl border-t-2 border-primary/30 px-6 py-3 flex flex-nowrap gap-3 z-10">
                  <button
                    onClick={() => setShowCreatePopup(false)}
                    className="flex-1 px-6 py-3 bg-card border-2 border-border rounded-xl font-semibold hover:border-red-500/50 hover:text-red-500 transition-colors whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateLeague}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/30 whitespace-nowrap"
                  >
                    Create League
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessPopup(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />

            {/* Success Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-card border-2 border-primary/30 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl shadow-primary/30">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between p-6 border-b-2 border-border">
                  <h3 className="text-xl font-bold text-foreground">Success</h3>
                  <button
                    onClick={() => setShowSuccessPopup(false)}
                    className="p-1 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                {/* Success Icon and Message */}
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50"
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="w-10 h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <motion.path d="M20 6L9 17l-5-5" />
                    </motion.svg>
                  </motion.div>

                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl font-bold text-foreground mb-3"
                  >
                    League created successfully!
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-muted-foreground"
                  >
                    Your new quiz league has been created and is now ready for participants to join.
                  </motion.p>
                </div>

                {/* OK Button */}
                <div className="p-6 border-t-2 border-border">
                  <button
                    onClick={() => setShowSuccessPopup(false)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/30"
                  >
                    OK
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}