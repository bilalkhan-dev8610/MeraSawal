import { motion } from 'motion/react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Activity, Users } from 'lucide-react';
import { mockAnalytics } from '../mock-data';

const COLORS = ['#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444', '#10b981'];

export function AnalyticsInsights() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Completion Rate', value: `${mockAnalytics.quizCompletionRate}%`, trend: '+5.3%', up: true },
          { label: 'Drop Rate', value: `${mockAnalytics.dropRate}%`, trend: '-2.1%', up: false },
          { label: 'Active Users', value: mockAnalytics.activeUsers, trend: '+12%', up: true },
          { label: 'Total Attempts', value: mockAnalytics.totalQuizAttempts, trend: '+23%', up: true },
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-4"
          >
            <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
            <p className="text-2xl font-bold mb-2">{metric.value}</p>
            <div className={`flex items-center gap-1 text-sm ${metric.up ? 'text-green-500' : 'text-red-500'}`}>
              {metric.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span>{metric.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Weekly Traffic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
      >
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          Weekly Traffic
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockAnalytics.weeklyTraffic}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="week" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1a1a',
                border: '2px solid #8b5cf6',
                borderRadius: '12px'
              }}
            />
            <Bar dataKey="users" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Monthly Comparison */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
      >
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Monthly Growth
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockAnalytics.monthlyTraffic}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1a1a',
                border: '2px solid #8b5cf6',
                borderRadius: '12px'
              }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ fill: '#06b6d4', r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
