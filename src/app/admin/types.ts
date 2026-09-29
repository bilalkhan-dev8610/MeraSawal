export interface AdminUser {
  id: string;
  name: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  country: string;
  registrationDate: string;
  quizParticipation: number;
  leagueParticipation: number;
  wins: number;
  activityStatus: 'active' | 'inactive';
  status: 'accepted' | 'pending' | 'rejected';
  lastActive: string;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  category: string;
  subCategory: string;
  score: number;
  totalQuestions: number;
  completionRate: number;
  date: string;
  timeTaken: number;
}

export interface AnalyticsData {
  totalRegistrations: number;
  totalQuizAttempts: number;
  quizCompletionRate: number;
  dropRate: number;
  activeUsers: number;
  inactiveUsers: number;
  dailyTraffic: { date: string; users: number }[];
  weeklyTraffic: { week: string; users: number }[];
  monthlyTraffic: { month: string; users: number }[];
  categoryPerformance: { category: string; attempts: number; avgScore: number }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  category: string;
  subCategory: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'active' | 'draft';
  aiGenerated: boolean;
  usageCount: number;
  createdAt: string;
}

export interface League {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  categories: string[];
  status: 'upcoming' | 'live' | 'completed';
  participants: number;
  completionRate: number;
  winners: string[];
}

export interface Winner {
  id: string;
  name: string;
  category: string;
  score: number;
  rank: number;
  date: string;
  certificateIssued: boolean;
  league?: string;
}
