import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Brain, Mail, Phone, Lock, User, MapPin, ArrowLeft, LogIn, UserPlus, Zap } from 'lucide-react';

interface LoginProps {
  onLogin: (userData: {
    name: string;
    email: string;
    mobile: string;
    city: string;
    state: string;
    photo?: string;
  }) => void;
  onBack: () => void;
}

// Demo Account Credentials
const DEMO_ACCOUNT = {
  name: 'Demo User',
  email: 'demo@quiz.com',
  mobile: '9876543210',
  city: 'Mumbai',
  state: 'Maharashtra',
  password: 'demo123'
};

export function Login({ onLogin, onBack }: LoginProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    state: '',
    password: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Initialize demo account in localStorage on component mount
  useEffect(() => {
    const savedDemo = localStorage.getItem('quizUserCredentials');
    if (!savedDemo) {
      // Pre-save demo account
      localStorage.setItem('quizUserCredentials', JSON.stringify(DEMO_ACCOUNT));
    }
  }, []);

  const useDemoAccount = () => {
    setFormData({
      name: DEMO_ACCOUNT.name,
      email: DEMO_ACCOUNT.email,
      mobile: DEMO_ACCOUNT.mobile,
      city: DEMO_ACCOUNT.city,
      state: DEMO_ACCOUNT.state,
      password: DEMO_ACCOUNT.password
    });
    setErrors({});
    setIsSignUp(false); // Switch to login mode
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Mobile validation
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Invalid mobile number (10 digits required)';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // For Sign Up, validate additional fields
    if (isSignUp) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.city.trim()) {
        newErrors.city = 'City is required';
      }
      if (!formData.state.trim()) {
        newErrors.state = 'State is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (isSignUp) {
      // Sign Up Flow
      const userData = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        city: formData.city,
        state: formData.state
      };

      // Save user credentials (mock - in real app, this would be backend)
      localStorage.setItem('quizUserCredentials', JSON.stringify({
        ...userData,
        password: formData.password
      }));

      onLogin(userData);
    } else {
      // Login Flow
      const savedCredentials = localStorage.getItem('quizUserCredentials');
      
      if (!savedCredentials) {
        setErrors({ form: 'No account found. Please sign up first.' });
        return;
      }

      const credentials = JSON.parse(savedCredentials);

      // Verify credentials
      if (
        credentials.email === formData.email &&
        credentials.mobile === formData.mobile &&
        credentials.password === formData.password
      ) {
        onLogin({
          name: credentials.name,
          email: credentials.email,
          mobile: credentials.mobile,
          city: credentials.city,
          state: credentials.state
        });
      } else {
        setErrors({ form: 'Invalid credentials. Please check your email, mobile, and password.' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 flex items-center justify-center p-2 sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-card/80 backdrop-blur-xl border-2 border-primary/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mb-4 sm:mb-6 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {/* Header */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-center mb-4 sm:mb-6"
            >
              <Brain className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 text-primary" />
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent px-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground px-2">
                {isSignUp ? 'Sign up to start your quiz journey' : 'Login to continue your quiz journey'}
              </p>
            </motion.div>
          </div>

          {/* Login/SignUp Form */}
          <div className="bg-card border-2 border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Form Error */}
              {errors.form && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-destructive/10 border border-destructive/30 rounded-xl p-3 text-sm text-destructive"
                >
                  {errors.form}
                </motion.div>
              )}

              {/* Name (Sign Up Only) */}
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className={`w-full pl-11 pr-4 py-3 bg-background border-2 ${
                        errors.name ? 'border-destructive' : 'border-border'
                      } rounded-xl focus:border-primary focus:outline-none text-foreground text-sm transition-all`}
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className={`w-full pl-11 pr-4 py-3 bg-background border-2 ${
                      errors.email ? 'border-destructive' : 'border-border'
                    } rounded-xl focus:border-primary focus:outline-none text-foreground text-sm transition-all`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile number"
                    className={`w-full pl-11 pr-4 py-3 bg-background border-2 ${
                      errors.mobile ? 'border-destructive' : 'border-border'
                    } rounded-xl focus:border-primary focus:outline-none text-foreground text-sm transition-all`}
                  />
                </div>
                {errors.mobile && <p className="mt-1 text-xs text-destructive">{errors.mobile}</p>}
              </div>

              {/* City & State (Sign Up Only) */}
              {isSignUp && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      City *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="City"
                        className={`w-full pl-10 pr-3 py-3 bg-background border-2 ${
                          errors.city ? 'border-destructive' : 'border-border'
                        } rounded-xl focus:border-primary focus:outline-none text-foreground text-sm transition-all`}
                      />
                    </div>
                    {errors.city && <p className="mt-1 text-xs text-destructive">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="State"
                      className={`w-full px-3 py-3 bg-background border-2 ${
                        errors.state ? 'border-destructive' : 'border-border'
                      } rounded-xl focus:border-primary focus:outline-none text-foreground text-sm transition-all`}
                    />
                    {errors.state && <p className="mt-1 text-xs text-destructive">{errors.state}</p>}
                  </div>
                </div>
              )}

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter password (min 6 characters)"
                    className={`w-full pl-11 pr-4 py-3 bg-background border-2 ${
                      errors.password ? 'border-destructive' : 'border-border'
                    } rounded-xl focus:border-primary focus:outline-none text-foreground text-sm transition-all`}
                  />
                </div>
                {errors.password && <p className="mt-1 text-xs text-destructive">{errors.password}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
              >
                {isSignUp ? (
                  <>
                    <UserPlus className="w-5 h-5" />
                    Sign Up
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Login
                  </>
                )}
              </motion.button>

              {/* Demo Account Button (Login Mode Only) */}
              {!isSignUp && (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={useDemoAccount}
                  className="w-full px-6 py-3 bg-accent/20 border-2 border-accent text-accent font-semibold rounded-xl hover:bg-accent/30 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Use Demo Account
                </motion.button>
              )}
            </form>

            {/* Demo Credentials Info */}
            {!isSignUp && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-accent/10 border border-accent/30 rounded-xl p-3 text-xs"
              >
                <p className="font-semibold text-accent mb-1">📝 Demo Credentials:</p>
                <div className="text-muted-foreground space-y-0.5">
                  <p>Email: <span className="text-foreground font-mono">demo@quiz.com</span></p>
                  <p>Mobile: <span className="text-foreground font-mono">9876543210</span></p>
                  <p>Password: <span className="text-foreground font-mono">demo123</span></p>
                </div>
              </motion.div>
            )}

            {/* Toggle Login/SignUp */}
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrors({});
                }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isSignUp ? (
                  <>
                    Already have an account?{' '}
                    <span className="font-semibold text-primary">Login</span>
                  </>
                ) : (
                  <>
                    Don't have an account?{' '}
                    <span className="font-semibold text-primary">Sign Up</span>
                  </>
                )}
              </button>
            </div>

            {/* Info Note */}
            <div className="mt-6 bg-primary/10 border border-primary/30 rounded-xl p-3 text-xs text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-primary">ℹ️</span>
                <span>
                  This is a demo app. Your credentials are stored locally in your browser for
                  demonstration purposes only.
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}