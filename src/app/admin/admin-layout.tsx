import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileQuestion,
  Sparkles,
  Trophy,
  Target,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Shield,
  ChevronRight,
  Calendar
} from 'lucide-react';

export type AdminTab = 
  | 'dashboard' 
  | 'users' 
  | 'analytics' 
  | 'questions' 
  | 'ai-generator' 
  | 'winners' 
  | 'leagues'
  | 'events'
  | 'notifications' 
  | 'settings';

interface AdminLayoutProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  onLogout: () => void;
  children: React.ReactNode;
}

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard Overview', color: 'text-blue-500' },
  { id: 'users', icon: Users, label: 'User Management', color: 'text-green-500' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics & Insights', color: 'text-purple-500' },
  { id: 'questions', icon: FileQuestion, label: 'Quiz Content', color: 'text-orange-500' },
  { id: 'ai-generator', icon: Sparkles, label: 'AI Question Generator', color: 'text-pink-500' },
  { id: 'winners', icon: Trophy, label: 'Winners & Rankings', color: 'text-yellow-500' },
  { id: 'leagues', icon: Target, label: 'League Management', color: 'text-cyan-500' },
  { id: 'events', icon: Calendar, label: 'Events', color: 'text-indigo-500' },
  { id: 'notifications', icon: Bell, label: 'Notifications', color: 'text-red-500' },
  { id: 'settings', icon: Settings, label: 'Settings', color: 'text-gray-500' },
] as const;

export function AdminLayout({ activeTab, onTabChange, onLogout, children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-[9999] lg:hidden p-2 bg-card border-2 border-primary rounded-lg shadow-lg"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-card/40 backdrop-blur-2xl border-r-2 border-primary/20 z-40 overflow-y-auto transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">AI Quiz Master</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id as AdminTab);
                  setIsSidebarOpen(false);
                }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary shadow-lg'
                    : 'hover:bg-card border-2 border-transparent'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : item.color}`} />
                <span className={`flex-1 text-left text-sm font-medium ${isActive ? 'text-primary' : ''}`}>
                  {item.label}
                </span>
                {isActive && <ChevronRight className="w-4 h-4 text-primary" />}
              </motion.button>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card/50">
          <motion.button
            onClick={onLogout}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-all border-2 border-red-500/30"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </motion.button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-card/40 backdrop-blur-2xl border-b-2 border-border px-4 lg:px-8 py-4 pt-[30px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg border border-primary/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Admin Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}