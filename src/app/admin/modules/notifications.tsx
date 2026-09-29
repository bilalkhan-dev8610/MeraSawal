import { useState } from 'react';
import { motion } from 'motion/react';
import { Bell, Send, Users, Megaphone } from 'lucide-react';

export function Notifications() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [targetAudience, setTargetAudience] = useState('all');

  const handleSend = () => {
    alert(`Notification sent to ${targetAudience}`);
    setTitle('');
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-7 h-7 text-red-500" />
        <h2 className="text-2xl font-bold">Notifications & Announcements</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Notification Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter notification title..."
              className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message..."
              rows={5}
              className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Target Audience</label>
            <select
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
            >
              <option value="all">All Users</option>
              <option value="active">Active Users Only</option>
              <option value="inactive">Inactive Users</option>
              <option value="winners">Winners</option>
            </select>
          </div>

          <button
            onClick={handleSend}
            disabled={!title || !message}
            className="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
          >
            <Send className="w-5 h-5" />
            Send Notification
          </button>
        </div>
      </motion.div>

      {/* Recent Notifications */}
      <div className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4">Recent Notifications</h3>
        <div className="space-y-3">
          {[
            { title: 'New League Started', message: 'Winter Championship 2024 is now live!', date: '2024-02-06' },
            { title: 'Maintenance Notice', message: 'System will be down for maintenance on Sunday', date: '2024-02-05' },
          ].map((notif, i) => (
            <div key={i} className="p-4 bg-card/50 border border-border rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold mb-1">{notif.title}</p>
                  <p className="text-sm text-muted-foreground">{notif.message}</p>
                </div>
                <span className="text-xs text-muted-foreground">{notif.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
