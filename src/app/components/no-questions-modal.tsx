import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X } from 'lucide-react';

interface NoQuestionsModalProps {
  isOpen: boolean;
  categoryName: string;
  subCategoryName: string;
  level: string;
  onClose: () => void;
}

export function NoQuestionsModal({
  isOpen,
  categoryName,
  subCategoryName,
  level,
  onClose
}: NoQuestionsModalProps) {
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-card via-card/95 to-orange-500/5 border-2 border-orange-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl shadow-orange-500/20 relative overflow-hidden backdrop-blur-xl"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-destructive/5"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{ backgroundSize: '200% 200%' }}
              />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/50 hover:bg-orange-500/20 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </motion.button>

              {/* Warning Icon */}
              <div className="relative z-10 flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                  className="relative"
                >
                  {/* Pulsing rings */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-xl"
                  />

                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 border-2 border-orange-400/50 flex items-center justify-center shadow-lg shadow-orange-500/50">
                    <AlertTriangle className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                </motion.div>
              </div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 text-2xl font-bold text-center mb-2 text-foreground"
              >
                Oops! No Questions Found 😕
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="relative z-10 text-center text-muted-foreground text-sm mb-6"
              >
                This combination doesn't have questions yet
              </motion.p>

              {/* Details Cards */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 space-y-3 mb-6"
              >
                <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-lg p-3">
                  <p className="text-xs text-primary font-bold mb-1">📚 CATEGORY</p>
                  <p className="text-base font-semibold text-foreground">{categoryName}</p>
                </div>
                <div className="bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent rounded-lg p-3">
                  <p className="text-xs text-accent font-bold mb-1">📑 SUB-CATEGORY</p>
                  <p className="text-base font-semibold text-foreground">{subCategoryName}</p>
                </div>
                <div className="bg-gradient-to-r from-secondary/10 to-transparent border-l-4 border-secondary rounded-lg p-3">
                  <p className="text-xs text-secondary font-bold mb-1">⭐ LEVEL</p>
                  <p className="text-base font-semibold text-foreground capitalize">{level}</p>
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="relative z-10 w-full py-3.5 bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
              >
                Try Another Combination 🔄
              </motion.button>

              {/* Floating particles */}
              <motion.div
                className="absolute top-8 left-8 w-2 h-2 bg-orange-500/30 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute top-12 right-12 w-3 h-3 bg-primary/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute bottom-12 left-16 w-2 h-2 bg-accent/30 rounded-full"
                animate={{
                  y: [0, -10, 0],
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