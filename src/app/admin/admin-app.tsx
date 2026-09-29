import { useState, useEffect } from 'react';
import { AdminLogin } from './admin-login';
import { AdminLayout, type AdminTab } from './admin-layout';
import { DashboardOverview } from './modules/dashboard-overview';
import { UserManagement } from './modules/user-management';
import { AnalyticsInsights } from './modules/analytics-insights';
import { QuizContent } from './modules/quiz-content';
import { AIGenerator } from './modules/ai-generator';
import { Winners } from './modules/winners';
import { Leagues } from './modules/leagues';
import { QuizEvents } from './modules/quiz-events';
import { Notifications } from './modules/notifications';
import { Settings } from './modules/settings';

interface AdminAppProps {
  onBackToApp?: () => void;
}

export function AdminApp({ onBackToApp }: AdminAppProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  useEffect(() => {
    // Check if admin is already authenticated
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setActiveTab('dashboard');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} onBackToApp={onBackToApp} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'users':
        return <UserManagement />;
      case 'analytics':
        return <AnalyticsInsights />;
      case 'questions':
        return <QuizContent />;
      case 'ai-generator':
        return <AIGenerator />;
      case 'winners':
        return <Winners />;
      case 'leagues':
        return <Leagues />;
      case 'events':
        return <QuizEvents />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <AdminLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onLogout={handleLogout}
    >
      {renderContent()}
    </AdminLayout>
  );
}