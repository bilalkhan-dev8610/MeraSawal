import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

interface QuizTimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
  isPaused?: boolean;
}

export function QuizTimer({ duration, onTimeUp, isPaused = false }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const hasCalledTimeUp = useRef(false);

  useEffect(() => {
    setTimeLeft(duration);
    hasCalledTimeUp.current = false;
  }, [duration]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Call onTimeUp when time reaches 0
  useEffect(() => {
    if (timeLeft === 0 && !hasCalledTimeUp.current) {
      hasCalledTimeUp.current = true;
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  const percentage = (timeLeft / duration) * 100;
  const isLowTime = timeLeft <= 10;
  const isCritical = timeLeft <= 5;

  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Timer display */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className={`w-4 h-4 sm:w-5 sm:h-5 ${isCritical ? 'text-destructive' : isLowTime ? 'text-yellow-400' : 'text-primary'}`} />
          <span className="text-xs sm:text-sm text-muted-foreground">Time</span>
        </div>
        <motion.div
          key={timeLeft}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className={`text-xl sm:text-2xl font-bold ${
            isCritical ? 'text-destructive' : isLowTime ? 'text-yellow-400' : 'text-foreground'
          }`}
        >
          {timeLeft}s
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 sm:h-3 bg-card rounded-full overflow-hidden border-2 border-border">
        <motion.div
          className={`h-full ${
            isCritical
              ? 'bg-gradient-to-r from-destructive to-destructive/70'
              : isLowTime
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-300'
              : 'bg-gradient-to-r from-primary via-accent to-secondary'
          }`}
          initial={{ width: '100%' }}
          animate={{ 
            width: `${percentage}%`,
            ...(isCritical && {
              opacity: [1, 0.7, 1],
            })
          }}
          transition={{ 
            width: { duration: 0.3 },
            ...(isCritical && {
              opacity: { duration: 0.5, repeat: Infinity }
            })
          }}
        />
        
        {/* Pulse effect when time is low */}
        {isLowTime && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </div>

      {/* Warning text */}
      {isLowTime && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-xs text-center font-semibold ${
            isCritical ? 'text-destructive' : 'text-yellow-400'
          }`}
        >
          {isCritical ? '⚠️ Time Almost Up!' : '⏰ Hurry Up!'}
        </motion.p>
      )}
    </div>
  );
}