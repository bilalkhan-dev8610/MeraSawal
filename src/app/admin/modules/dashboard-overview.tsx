import { motion } from 'motion/react';
import { Users, FileQuestion, Trophy, TrendingUp, Activity, Award, Target, Zap, Sparkles } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockAnalytics } from '../mock-data';

const COLORS = ['#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444', '#10b981'];

export function DashboardOverview() {
  const stats = [
    {
      icon: Users,
      label: 'Total Registrations',
      value: mockAnalytics.totalRegistrations.toLocaleString(),
      change: '+12.5%',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-500'
    },
    {
      icon: FileQuestion,
      label: 'Total Quiz Attempts',
      value: mockAnalytics.totalQuizAttempts.toLocaleString(),
      change: '+23.8%',
      color: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-500'
    },
    {
      icon: Activity,
      label: 'Active Users',
      value: mockAnalytics.activeUsers.toLocaleString(),
      change: '+8.2%',
      color: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-500'
    },
    {
      icon: Trophy,
      label: 'Completion Rate',
      value: `${mockAnalytics.quizCompletionRate}%`,
      change: '+5.3%',
      color: 'from-yellow-500 to-orange-500',
      iconBg: 'bg-yellow-500/20',
      iconColor: 'text-yellow-500'
    },
  ];

  const activeInactiveData = [
    { name: 'Active Users', value: mockAnalytics.activeUsers },
    { name: 'Inactive Users', value: mockAnalytics.inactiveUsers },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl p-6 border-2 border-primary/30"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">Welcome back, Admin!</h1>
            <p className="text-muted-foreground">Here's what's happening with your quiz platform today.</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.iconBg} p-3 rounded-xl`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-lg">Daily Traffic Trend</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockAnalytics.dailyTraffic}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#888" fontSize={12} />
              <YAxis stroke="#888" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '2px solid #8b5cf6',
                  borderRadius: '12px',
                  padding: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Active vs Inactive Users */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-lg">User Activity Status</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={activeInactiveData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {activeInactiveData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '2px solid #8b5cf6',
                  borderRadius: '12px'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Category Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-2xl p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-lg">Category Performance</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockAnalytics.categoryPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="category" stroke="#888" fontSize={12} angle={-15} textAnchor="end" height={80} />
            <YAxis stroke="#888" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1a1a1a', 
                border: '2px solid #8b5cf6',
                borderRadius: '12px'
              }} 
            />
            <Legend />
            <Bar dataKey="attempts" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            <Bar dataKey="avgScore" fill="#06b6d4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Users, label: 'View All Users', color: 'from-blue-500 to-cyan-500' },
          { icon: FileQuestion, label: 'Manage Questions', color: 'from-purple-500 to-pink-500' },
          { icon: Sparkles, label: 'Generate AI Questions', color: 'from-pink-500 to-rose-500' },
          { icon: Trophy, label: 'View Winners', color: 'from-yellow-500 to-orange-500' },
        ].map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${action.color} text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all`}
            >
              <Icon className="w-6 h-6 mb-2" />
              <p className="font-semibold text-sm">{action.label}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}