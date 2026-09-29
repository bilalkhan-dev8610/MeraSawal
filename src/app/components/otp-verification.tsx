import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Smartphone, ArrowLeft, RefreshCw } from 'lucide-react';

interface OTPVerificationProps {
  mobile: string;
  isSignUp: boolean;
  onVerify: () => void;
  onBack: () => void;
}

export function OTPVerification({ mobile, isSignUp, onVerify, onBack }: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Generate OTP on mount
  useEffect(() => {
    generateOTP();
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const generateOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(newOTP);
    console.log('🔐 OTP Generated:', newOTP); // For testing
    // In production, this would send SMS via API
    alert(`Your OTP is: ${newOTP}\n(This is for testing only)`);
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split('');
    while (newOtp.length < 6) newOtp.push('');
    setOtp(newOtp);
    
    // Focus last filled input
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleVerify = () => {
    const enteredOTP = otp.join('');
    
    if (enteredOTP.length !== 6) {
      setError('Please enter complete OTP');
      return;
    }

    if (enteredOTP === generatedOTP) {
      onVerify();
    } else {
      setError('Invalid OTP. Please try again.');
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
  };

  const handleResend = () => {
    if (!canResend) return;
    generateOTP();
    setTimer(30);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    setError('');
    inputRefs.current[0]?.focus();
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
              Verify Mobile Number
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground px-2">
              Enter the 6-digit OTP sent to
            </p>
            <p className="text-primary font-semibold mt-1 text-sm sm:text-base">+91 {mobile}</p>
          </div>

          {/* OTP Input */}
          <div className="mb-4 sm:mb-6">
            <div className="flex gap-1.5 sm:gap-2 md:gap-3 justify-center mb-3 sm:mb-4" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 text-center text-xl sm:text-2xl font-bold bg-background border-2 border-primary/30 rounded-lg sm:rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  autoFocus={index === 0}
                />
              ))}
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm text-center"
              >
                {error}
              </motion.p>
            )}
          </div>

          {/* Timer & Resend */}
          <div className="text-center mb-4 sm:mb-6">
            {!canResend ? (
              <p className="text-xs sm:text-sm text-muted-foreground">
                Resend OTP in <span className="text-primary font-semibold">{timer}s</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                className="text-xs sm:text-sm text-primary hover:text-accent font-semibold flex items-center gap-1.5 sm:gap-2 mx-auto transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Resend OTP
              </button>
            )}
          </div>

          {/* Verify Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleVerify}
            disabled={otp.join('').length !== 6}
            className="w-full py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-base sm:text-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Verify & Continue
          </motion.button>

          {/* Info */}
          <p className="text-xs text-center text-muted-foreground mt-4 sm:mt-6 px-2">
            Didn't receive the code? Check your phone or try resending.
          </p>
        </div>
      </motion.div>
    </div>
  );
}