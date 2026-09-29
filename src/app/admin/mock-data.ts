import type { AdminUser, AnalyticsData, QuizQuestion, League, Winner } from './types';

// Mock Users Data
export const mockUsers: AdminUser[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    mobile: '+91-9876543210',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    registrationDate: '2024-01-15',
    quizParticipation: 45,
    leagueParticipation: 3,
    wins: 12,
    activityStatus: 'active',
    status: 'accepted',
    lastActive: '2024-02-06'
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    mobile: '+91-9876543211',
    city: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
    registrationDate: '2024-01-20',
    quizParticipation: 32,
    leagueParticipation: 2,
    wins: 8,
    activityStatus: 'active',
    status: 'accepted',
    lastActive: '2024-02-05'
  },
  {
    id: '3',
    name: 'Amit Kumar',
    email: 'amit.kumar@example.com',
    mobile: '+91-9876543212',
    city: 'Delhi',
    state: 'Delhi',
    country: 'India',
    registrationDate: '2024-01-22',
    quizParticipation: 28,
    leagueParticipation: 1,
    wins: 5,
    activityStatus: 'inactive',
    status: 'accepted',
    lastActive: '2024-01-30'
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    mobile: '+91-9876543213',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    registrationDate: '2024-01-25',
    quizParticipation: 50,
    leagueParticipation: 4,
    wins: 15,
    activityStatus: 'active',
    status: 'accepted',
    lastActive: '2024-02-06'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    mobile: '+91-9876543214',
    city: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    registrationDate: '2024-02-01',
    quizParticipation: 12,
    leagueParticipation: 1,
    wins: 3,
    activityStatus: 'active',
    status: 'accepted',
    lastActive: '2024-02-06'
  },
  {
    id: '6',
    name: 'Anjali Verma',
    email: 'anjali.verma@example.com',
    mobile: '+91-9876543215',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    country: 'India',
    registrationDate: '2024-02-03',
    quizParticipation: 8,
    leagueParticipation: 0,
    wins: 1,
    activityStatus: 'active',
    status: 'pending',
    lastActive: '2024-02-06'
  },
];

// Mock Analytics Data
export const mockAnalytics: AnalyticsData = {
  totalRegistrations: 1247,
  totalQuizAttempts: 5823,
  quizCompletionRate: 87.5,
  dropRate: 12.5,
  activeUsers: 892,
  inactiveUsers: 355,
  dailyTraffic: [
    { date: '2024-02-01', users: 145 },
    { date: '2024-02-02', users: 178 },
    { date: '2024-02-03', users: 156 },
    { date: '2024-02-04', users: 198 },
    { date: '2024-02-05', users: 223 },
    { date: '2024-02-06', users: 245 },
  ],
  weeklyTraffic: [
    { week: 'Week 1', users: 567 },
    { week: 'Week 2', users: 634 },
    { week: 'Week 3', users: 712 },
    { week: 'Week 4', users: 845 },
  ],
  monthlyTraffic: [
    { month: 'Jan', users: 2456 },
    { month: 'Feb', users: 3367 },
  ],
  categoryPerformance: [
    { category: 'General Awareness', attempts: 1234, avgScore: 15.2 },
    { category: 'Science', attempts: 987, avgScore: 14.8 },
    { category: 'History', attempts: 856, avgScore: 13.5 },
    { category: 'Mathematics', attempts: 723, avgScore: 12.9 },
    { category: 'Geography', attempts: 645, avgScore: 14.2 },
  ],
};

// Mock Questions
export const mockQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the capital of India?',
    category: 'General Awareness',
    subCategory: 'Static GK',
    options: ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'],
    correctAnswer: 1,
    difficulty: 'easy',
    status: 'active',
    aiGenerated: false,
    usageCount: 234,
    createdAt: '2024-01-10'
  },
  {
    id: 'q2',
    question: 'Who invented the telephone?',
    category: 'General Awareness',
    subCategory: 'Static GK',
    options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Benjamin Franklin'],
    correctAnswer: 1,
    difficulty: 'medium',
    status: 'active',
    aiGenerated: true,
    usageCount: 189,
    createdAt: '2024-01-15'
  },
];

// Mock Leagues
export const mockLeagues: League[] = [
  {
    id: 'l1',
    name: 'Winter Quiz Championship 2024',
    startDate: '2024-02-01',
    endDate: '2024-02-28',
    categories: ['General Awareness', 'Science', 'History'],
    status: 'live',
    participants: 456,
    completionRate: 78.5,
    winners: []
  },
  {
    id: 'l2',
    name: 'Spring Knowledge Sprint',
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    categories: ['Mathematics', 'Geography', 'Computer'],
    status: 'upcoming',
    participants: 0,
    completionRate: 0,
    winners: []
  },
  {
    id: 'l3',
    name: 'New Year Quiz Fest 2024',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    categories: ['General Awareness', 'Current Affairs'],
    status: 'completed',
    participants: 678,
    completionRate: 92.3,
    winners: ['Sneha Reddy', 'Rahul Sharma', 'Priya Patel']
  },
];

// Mock Winners
export const mockWinners: Winner[] = [
  {
    id: 'w1',
    name: 'Sneha Reddy',
    category: 'General Awareness',
    score: 20,
    rank: 1,
    date: '2024-02-05',
    certificateIssued: true,
    league: 'Winter Quiz Championship 2024'
  },
  {
    id: 'w2',
    name: 'Rahul Sharma',
    category: 'Science',
    score: 19,
    rank: 2,
    date: '2024-02-05',
    certificateIssued: true,
    league: 'Winter Quiz Championship 2024'
  },
  {
    id: 'w3',
    name: 'Priya Patel',
    category: 'History',
    score: 18,
    rank: 3,
    date: '2024-02-04',
    certificateIssued: false,
    league: 'Winter Quiz Championship 2024'
  },
];
