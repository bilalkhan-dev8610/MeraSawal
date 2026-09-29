import { motion, AnimatePresence } from 'motion/react';
import { X, Lightbulb } from 'lucide-react';

interface ExplanationModalProps {
  isOpen: boolean;
  explanation: string;
  correctAnswer: string;
  onClose: () => void;
}

export function ExplanationModal({
  isOpen,
  explanation,
  correctAnswer,
  onClose
}: ExplanationModalProps) {
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-50"
          >
            <div className="bg-gradient-to-br from-card via-card/95 to-destructive/5 border-2 border-destructive/40 rounded-3xl shadow-2xl shadow-destructive/20 overflow-hidden backdrop-blur-xl">
              {/* Animated Header Background */}
              <div className="relative bg-gradient-to-r from-destructive/20 via-orange-500/10 to-transparent p-6 border-b-2 border-destructive/30 overflow-hidden">
                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-destructive/10 via-orange-500/5 to-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                />

                {/* Header Content */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 flex items-center justify-center shadow-lg shadow-orange-500/30"
                    >
                      <Lightbulb className="w-6 h-6 text-white" fill="white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground">
                        Oops! Not quite right 🤔
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Let's learn the correct answer together!
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-background/50 hover:bg-destructive/20 flex items-center justify-center transition-all"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                {/* Correct Answer */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent border-2 border-green-500/30 rounded-2xl p-4 overflow-hidden"
                >
                  {/* Animated shine */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent"
                    animate={{
                      x: ['-200%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut'
                    }}
                  />
                  
                  <div className="relative z-10 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-green-500/30">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-green-600 dark:text-green-400 font-bold mb-2">
                        ✨ CORRECT ANSWER
                      </p>
                      <p className="text-foreground font-semibold text-base leading-relaxed">
                        {correctAnswer}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Explanation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-4 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full" />
                    <p className="text-xs text-primary font-bold tracking-wide">
                      💡 EXPLANATION
                    </p>
                  </div>
                  <p className="text-foreground/90 leading-relaxed text-sm pl-3">
                    {explanation}
                  </p>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-6 pt-0"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
                >
                  Got It! Let's Continue 🚀
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}