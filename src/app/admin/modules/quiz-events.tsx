import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Trophy, Users, Filter, Search, TrendingUp } from 'lucide-react';

interface QuizEvent {
  id: string;
  title: string;
  date: string;
  year: number;
  category: string;
  participants: number;
  winner: string;
  prize: string;
  status: 'completed' | 'upcoming' | 'ongoing';
}

const mockEvents: QuizEvent[] = [
  {
    id: 'evt1',
    title: 'Republic Day Special Quiz 2026',
    date: '2026-01-26',
    year: 2026,
    category: 'General Awareness',
    participants: 15420,
    winner: 'Rahul Sharma',
    prize: '₹50,000',
    status: 'completed'
  },
  {
    id: 'evt2',
    title: 'Science & Tech Mega Quiz',
    date: '2025-12-15',
    year: 2025,
    category: 'Science & Technology',
    participants: 12350,
    winner: 'Priya Verma',
    prize: '₹30,000',
    status: 'completed'
  },
  {
    id: 'evt3',
    title: 'Independence Day Quiz Championship',
    date: '2025-08-15',
    year: 2025,
    category: 'History & Geography',
    participants: 18900,
    winner: 'Amit Kumar',
    prize: '₹1,00,000',
    status: 'completed'
  },
  {
    id: 'evt4',
    title: 'Cricket World Cup Special',
    date: '2025-06-20',
    year: 2025,
    category: 'Sports',
    participants: 22000,
    winner: 'Neha Patel',
    prize: '₹75,000',
    status: 'completed'
  },
  {
    id: 'evt5',
    title: 'Mathematics Olympiad Quiz',
    date: '2025-03-14',
    year: 2025,
    category: 'Mathematics',
    participants: 8500,
    winner: 'Vikram Singh',
    prize: '₹40,000',
    status: 'completed'
  },
  {
    id: 'evt6',
    title: 'Bollywood Bonanza Quiz',
    date: '2025-01-01',
    year: 2025,
    category: 'Entertainment',
    participants: 19500,
    winner: 'Sneha Reddy',
    prize: '₹60,000',
    status: 'completed'
  },
  {
    id: 'evt7',
    title: 'Budget 2024 Special Quiz',
    date: '2024-02-01',
    year: 2024,
    category: 'Business & Economy',
    participants: 11200,
    winner: 'Arun Mehta',
    prize: '₹35,000',
    status: 'completed'
  },
  {
    id: 'evt8',
    title: 'Environment Day Quiz Challenge',
    date: '2024-06-05',
    year: 2024,
    category: 'Environment & Nature',
    participants: 14800,
    winner: 'Kavita Joshi',
    prize: '₹45,000',
    status: 'completed'
  },
  {
    id: 'evt9',
    title: 'Tech Innovation Summit Quiz',
    date: '2024-09-10',
    year: 2024,
    category: 'Tech & Innovation',
    participants: 16700,
    winner: 'Rohan Gupta',
    prize: '₹55,000',
    status: 'completed'
  },
  {
    id: 'evt10',
    title: 'Constitution Day Quiz',
    date: '2024-11-26',
    year: 2024,
    category: 'Legal & Constitution',
    participants: 9800,
    winner: 'Deepak Rao',
    prize: '₹50,000',
    status: 'completed'
  },
  {
    id: 'evt11',
    title: 'New Year Mega Quiz 2024',
    date: '2024-01-01',
    year: 2024,
    category: 'General Awareness',
    participants: 25000,
    winner: 'Anjali Desai',
    prize: '₹1,50,000',
    status: 'completed'
  },
  {
    id: 'evt12',
    title: 'Diwali Special Quiz Festival',
    date: '2023-11-12',
    year: 2023,
    category: 'Culture & Society',
    participants: 21500,
    winner: 'Sanjay Iyer',
    prize: '₹80,000',
    status: 'completed'
  },
];

export function QuizEvents() {
  const [events, setEvents] = useState<QuizEvent[]>(mockEvents);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique years and categories
  const years = Array.from(new Set(events.map(e => e.year))).sort((a, b) => b - a);
  const categories = Array.from(new Set(events.map(e => e.category))).sort();

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.winner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === 'all' || event.year.toString() === selectedYear;
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesYear && matchesCategory;
  });

  // Stats
  const totalParticipants = events.reduce((sum, e) => sum + e.participants, 0);
  const totalPrize = events.reduce((sum, e) => {
    const prize = parseInt(e.prize.replace(/[₹,]/g, ''));
    return sum + prize;
  }, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Quiz Events History</h2>
          <p className="text-muted-foreground">Complete timeline of all quiz events</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Events', value: events.length, icon: Calendar, color: 'text-blue-500' },
          { label: 'Total Participants', value: totalParticipants.toLocaleString(), icon: Users, color: 'text-green-500' },
          { label: 'Total Prize Money', value: `₹${(totalPrize / 100000).toFixed(1)}L`, icon: Trophy, color: 'text-yellow-500' },
          { label: 'Categories', value: categories.length, icon: TrendingUp, color: 'text-purple-500' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="font-bold">Filters</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search events or winners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
            />
          </div>

          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
          >
            <option value="all">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Active Filters Display */}
        {(selectedYear !== 'all' || selectedCategory !== 'all' || searchQuery) && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Active Filters:</span>
            {selectedYear !== 'all' && (
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                Year: {selectedYear}
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                {selectedCategory}
              </span>
            )}
            {searchQuery && (
              <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm font-semibold">
                Search: "{searchQuery}"
              </span>
            )}
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedYear('all');
                setSelectedCategory('all');
              }}
              className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-sm font-semibold hover:bg-red-500/30"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing <span className="text-primary font-bold">{filteredEvents.length}</span> of <span className="font-bold">{events.length}</span> events
        </p>
      </div>

      {/* Events Timeline */}
      <div className="space-y-4">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6 hover:border-primary transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Event Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-semibold">
                    {event.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.participants.toLocaleString()} participants</span>
                  </div>
                </div>
              </div>

              {/* Category & Year */}
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-xl font-semibold text-sm">
                  {event.category}
                </span>
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-xl font-semibold text-sm">
                  {event.year}
                </span>
              </div>

              {/* Winner & Prize */}
              <div className="flex items-center gap-4 lg:min-w-[300px]">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Winner</p>
                  <p className="font-bold flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    {event.winner}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">Prize</p>
                  <p className="text-xl font-bold text-green-500">{event.prize}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-12 text-center"
        >
          <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-bold mb-2">No Events Found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or search query</p>
        </motion.div>
      )}
    </div>
  );
}
