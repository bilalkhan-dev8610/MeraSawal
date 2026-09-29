import { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, ArrowLeft, Send } from 'lucide-react';

interface MobileEntryProps {
  onSendOTP: (mobile: string) => void;
  onBack: () => void;
  isSignUp: boolean;
}

export function MobileEntry({ onSendOTP, onBack, isSignUp }: MobileEntryProps) {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const validateMobile = (number: string) => {
    const cleaned = number.replace(/\s/g, '');
    return /^[0-9]{10}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cleaned = mobile.replace(/\s/g, '');
    
    if (!validateMobile(cleaned)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    if (!isSignUp) {
      // Check if user exists for login
      const savedCredentials = localStorage.getItem('quizUserCredentials');
      if (!savedCredentials) {
        setError('No account found with this number. Please sign up first.');
        return;
      }
      
      const credentials = JSON.parse(savedCredentials);
      if (credentials.mobile !== cleaned) {
        setError('No account found with this number. Please sign up first.');
        return;
      }
    }

    setError('');
    onSendOTP(cleaned);
  };

  const handleMobileChange = (value: string) => {
    // Only allow digits and spaces
    const cleaned = value.replace(/[^\d\s]/g, '');
    setMobile(cleaned);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 flex items-center justify-center p-2 sm:p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
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
          <div className="text-center mb-6 sm:mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            >
              <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2 px-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground px-2">
              {isSignUp 
                ? 'Enter your mobile number to get started' 
                : 'Enter your mobile number to login'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Mobile Number Input */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 px-1">
                Mobile Number *
              </label>
              <div className="relative">
                <div className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-semibold">+91</span>
                  <span className="text-border">|</span>
                </div>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => handleMobileChange(e.target.value)}
                  placeholder="9876543210"
                  maxLength={10}
                  className={`w-full pl-20 sm:pl-24 pr-3 sm:pr-4 py-3 sm:py-4 bg-background border-2 ${
                    error ? 'border-destructive' : 'border-border'
                  } rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-base sm:text-lg font-semibold transition-all`}
                  autoFocus
                />
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-destructive px-1"
                >
                  {error}
                </motion.p>
              )}
            </div>

            {/* Send OTP Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={mobile.replace(/\s/g, '').length !== 10}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-base sm:text-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              Send OTP
            </motion.button>

            {/* Demo Account Helper (Only for Login) */}
            {!isSignUp && (
              <div className="mt-3 sm:mt-4 bg-accent/10 border border-accent/30 rounded-xl p-2.5 sm:p-3 text-xs">
                <p className="font-semibold text-accent mb-1">📝 Demo Account:</p>
                <div className="text-muted-foreground">
                  <p>Mobile: <span className="text-foreground font-mono">9876543210</span></p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    Click "Send OTP" to receive verification code
                  </p>
                </div>
              </div>
            )}

            {/* Toggle Signup/Login */}
            <div className="text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">
                {isSignUp ? (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={onBack}
                      className="text-primary font-semibold hover:underline"
                    >
                      Login instead
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account?{' '}
                    <button
                      onClick={onBack}
                      className="text-primary font-semibold hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </p>
            </div>
          </form>

          {/* Info */}
          <div className="mt-4 sm:mt-6 bg-primary/10 border border-primary/30 rounded-xl p-2.5 sm:p-3 text-xs text-muted-foreground">
            <p className="flex items-start gap-1.5 sm:gap-2">
              <span className="text-primary text-sm">🔒</span>
              <span>
                We will send a 6-digit OTP to verify your mobile number. 
                Standard SMS rates may apply.
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}