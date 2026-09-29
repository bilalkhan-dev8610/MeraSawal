import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X, ArrowLeft, LogOut } from 'lucide-react';

interface QuitConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function QuitConfirmationModal({ isOpen, onClose, onConfirm }: QuitConfirmationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border-2 border-border rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-primary/10 opacity-50"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ rotate: -10, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-full flex items-center justify-center border-2 border-destructive/30"
                >
                  <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-destructive" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 text-foreground"
                >
                  Quit Quiz? 🥺
                </motion.h3>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm sm:text-base text-center text-muted-foreground mb-6 sm:mb-8"
                >
                  Your progress will be lost! Are you sure you want to leave?
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                >
                  {/* Continue Quiz Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="w-full sm:w-[240px] px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Continue Quiz
                  </motion.button>

                  {/* Quit Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onConfirm}
                    className="w-full sm:w-[240px] px-4 sm:px-6 py-3 sm:py-3.5 bg-card border-2 border-destructive/50 hover:bg-destructive/10 text-destructive font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                    Quit
                  </motion.button>
                </motion.div>
              </div>

              {/* Floating particles */}
              <motion.div
                className="absolute top-4 left-4 w-2 h-2 bg-destructive/30 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute top-8 right-8 w-3 h-3 bg-primary/30 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute bottom-6 left-12 w-2 h-2 bg-accent/30 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}