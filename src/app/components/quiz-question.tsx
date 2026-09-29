import { motion } from 'motion/react';
import { Check, X, SkipForward, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { Question } from '@/app/data/questionsData';
import { ExplanationModal } from '@/app/components/explanation-modal';
import { QuizTimer } from '@/app/components/quiz-timer';
import { playCorrectSound, playWrongSound } from '@/app/utils/audioUtils';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  isAnswered: boolean;
  onAnswerSelect: (index: number) => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
  onSkipQuestion: () => void;
  onTimeUp: () => void;
  onQuitQuiz: () => void;
  questionNumber: number;
  totalQuestions: number;
  canGoPrevious: boolean;
}

export function QuizQuestion({
  question,
  selectedAnswer,
  isAnswered,
  onAnswerSelect,
  onNextQuestion,
  onPreviousQuestion,
  onSkipQuestion,
  onTimeUp,
  onQuitQuiz,
  questionNumber,
  totalQuestions,
  canGoPrevious
}: QuizQuestionProps) {
  const [showExplanation, setShowExplanation] = useState(false);
  const [wasWrong, setWasWrong] = useState(false);

  const handleAnswerSelect = (index: number) => {
    const isCorrect = index === question.correctAnswer;
    
    // Play sound based on correct/wrong answer
    if (isCorrect) {
      playCorrectSound();
    } else {
      playWrongSound();
      setWasWrong(true);
      setShowExplanation(true);
    }
    
    onAnswerSelect(index);
  };

  const closeExplanation = () => {
    setShowExplanation(false);
    setWasWrong(false);
    // Move to next question after modal closes
    onNextQuestion();
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      {/* Question Number Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border-2 border-primary rounded-full">
            <span className="text-xs sm:text-sm font-bold text-primary whitespace-nowrap">
              Q {questionNumber}/{totalQuestions}
            </span>
          </div>
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 border-2 border-accent rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-accent capitalize whitespace-nowrap">
              {question.level}
            </span>
          </div>
        </div>
      </div>

      {/* Quiz Timer */}
      <QuizTimer
        duration={30}
        onTimeUp={onTimeUp}
        isPaused={isAnswered}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border-2 border-primary/30 rounded-xl p-6 md:p-8 shadow-lg shadow-primary/10"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-foreground">
          {question.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showCorrect = isAnswered && isCorrect;
            const showIncorrect = isAnswered && isSelected && !isCorrect;

            return (
              <motion.button
                key={index}
                whileHover={!isAnswered ? { scale: 1.02, x: 4 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`
                  relative p-6 rounded-xl border-2 text-left transition-all duration-300
                  ${!isAnswered && 'hover:border-primary hover:bg-primary/5'}
                  ${isSelected && !isAnswered && 'border-accent bg-accent/10'}
                  ${showCorrect && 'border-primary bg-primary/20 animate-pulse'}
                  ${showIncorrect && 'border-destructive bg-destructive/20'}
                  ${!isSelected && !showCorrect && 'border-border bg-card'}
                  disabled:cursor-not-allowed
                `}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-foreground flex-1">{option}</span>
                  
                  {showCorrect && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </motion.div>
                  )}

                  {showIncorrect && (
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
                        <X className="w-5 h-5 text-destructive-foreground" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Glowing effect for correct answer */}
                {showCorrect && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Explanation Modal */}
      <ExplanationModal
        isOpen={showExplanation}
        explanation={question.explanation}
        correctAnswer={question.options[question.correctAnswer]}
        onClose={closeExplanation}
      />

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPreviousQuestion}
          disabled={!canGoPrevious}
          className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-card border-2 border-border hover:border-accent rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Previous</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSkipQuestion}
          className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-accent/10 border-2 border-accent hover:bg-accent/20 rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <SkipForward className="w-5 h-5" />
          Skip
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNextQuestion}
          disabled={questionNumber === totalQuestions}
          className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-primary border-2 border-primary hover:bg-primary/80 text-primary-foreground rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}