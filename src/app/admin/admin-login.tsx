import { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Mail, Eye, EyeOff, Sparkles, ArrowLeft, LayoutDashboard } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
  onBackToApp?: () => void;
}

export function AdminLogin({ onLogin, onBackToApp }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Demo credentials
    setTimeout(() => {
      if (email === 'admin@quizmaster.ai' && password === 'Admin@123') {
        localStorage.setItem('adminAuth', JSON.stringify({ email, role: 'admin' }));
        onLogin();
      } else {
        setError('Invalid credentials. Use: admin@quizmaster.ai / Admin@123');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Navigation Icons */}
      <div className="fixed top-4 left-0 right-0 z-50 px-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* Back to App Button */}
        {onBackToApp && (
          <motion.button
            onClick={onBackToApp}
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-card/60 backdrop-blur-xl border-2 border-primary/30 rounded-xl shadow-lg hover:border-primary/60 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            <span className="text-sm font-semibold hidden sm:inline">Back to App</span>
          </motion.button>
        )}
        
        {/* Dashboard Icon (disabled on login page) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="ml-auto flex items-center gap-2 px-4 py-2.5 bg-card/40 backdrop-blur-xl border-2 border-border/50 rounded-xl shadow-lg opacity-50 cursor-not-allowed"
          title="Login required"
        >
          <LayoutDashboard className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-semibold hidden sm:inline text-muted-foreground">Dashboard</span>
        </motion.div>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-blue-600/20" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md"
      >
        {/* Glassmorphism Card */}
        <div className="bg-card/40 backdrop-blur-2xl border-2 border-primary/20 rounded-3xl p-8 shadow-2xl">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4 shadow-lg"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              AI Quiz Master Control Panel
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@quizmaster.ai"
                  className="w-full pl-12 pr-4 py-3 bg-card/50 border-2 border-border rounded-xl focus:border-primary outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 bg-card/50 border-2 border-border rounded-xl focus:border-primary outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Demo Credentials Info */}
            <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg text-sm">
              <p className="font-semibold mb-1">Demo Credentials:</p>
              <p className="text-muted-foreground">Email: admin@quizmaster.ai</p>
              <p className="text-muted-foreground">Password: Admin@123</p>
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Authenticating...
                </span>
              ) : (
                'Login to Dashboard'
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>© 2024 AI Quiz Master</p>
            <p className="mt-1">Secure Admin Access</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}