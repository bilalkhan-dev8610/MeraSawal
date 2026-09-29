import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Brain, Trophy, Zap, Sparkles, User, LayoutDashboard, X, Shield } from 'lucide-react';
import { CategorySelection, type Category } from '@/app/components/category-selection';
import { SubCategorySelection, type SubCategory } from '@/app/components/subcategory-selection';
import { LevelSelection, type DifficultyLevel } from '@/app/components/level-selection';
import { QuizQuestion } from '@/app/components/quiz-question';
import { FinalScore } from '@/app/components/final-score';
import { Leaderboard } from '@/app/components/leaderboard';
import { Dashboard } from '@/app/components/dashboard';
import { QuitConfirmationModal } from '@/app/components/quit-confirmation-modal';
import { NoQuestionsModal } from '@/app/components/no-questions-modal';
import { initializeVoices } from '@/app/utils/audioUtils';
import { UserHeader } from '@/app/components/user-header';
import { Profile } from '@/app/components/profile';
import { Login } from '@/app/components/login';
import { OTPVerification } from '@/app/components/otp-verification';
import { MobileEntry } from '@/app/components/mobile-entry';
import { CompleteProfile } from '@/app/components/complete-profile';
import { getQuestions, type Question } from '@/app/data/questionsData';
import { AdminApp } from '@/app/admin/admin-app';

export interface QuizResult {
  correct: number;
  wrong: number;
  unattempted: number;
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  timestamp: number;
  category: string;
  subCategory: string;
  level: DifficultyLevel;
  city?: string;
  state?: string;
  result: QuizResult;
  timeTaken?: number; // in seconds
}

type Screen = 'welcome' | 'login' | 'signup' | 'mobileEntry' | 'otp' | 'completeProfile' | 'category' | 'subcategory' | 'level' | 'quiz' | 'results' | 'leaderboard' | 'dashboard' | 'profile' | 'admin';

interface UserAuth {
  email: string;
  mobile: string;
  name: string;
  city: string;
  state: string;
  isLoggedIn: boolean;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pendingUserData, setPendingUserData] = useState<{
    name: string;
    email: string;
    mobile: string;
    city: string;
    state: string;
    photo?: string;
  } | null>(null);
  const [userAuth, setUserAuth] = useState<UserAuth>({
    email: '',
    mobile: '',
    name: '',
    city: '',
    state: '',
    isLoggedIn: false
  });
  const [playerName, setPlayerName] = useState('');
  const [playerCity, setPlayerCity] = useState('');
  const [playerState, setPlayerState] = useState('');
  const [playerPhoto, setPlayerPhoto] = useState('');
  const [pendingMobile, setPendingMobile] = useState('');
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | null>(null);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult>({
    correct: 0,
    wrong: 0,
    unattempted: 0
  });
  
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [showNoQuestionsModal, setShowNoQuestionsModal] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);

  // Load leaderboard from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quizLeaderboard');
    if (saved) {
      setLeaderboard(JSON.parse(saved));
    }
    
    // Load saved user info
    const savedUserInfo = localStorage.getItem('quizUserInfo');
    if (savedUserInfo) {
      const userInfo = JSON.parse(savedUserInfo);
      setPlayerName(userInfo.name || '');
      setPlayerCity(userInfo.city || '');
      setPlayerState(userInfo.state || '');
      setPlayerPhoto(userInfo.photo || '');
    }
    
    // Initialize voice synthesis
    initializeVoices();
  }, []);

  const handleCategorySelect = (category: Category) => {
    // Save user info to localStorage
    const userInfo = {
      name: playerName,
      city: playerCity,
      state: playerState,
      photo: playerPhoto
    };
    localStorage.setItem('quizUserInfo', JSON.stringify(userInfo));
    
    setSelectedCategory(category);
    setScreen('subcategory');
  };

  const handleSubCategorySelect = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory);
    setScreen('level');
  };

  const handleLevelSelect = (level: DifficultyLevel) => {
    setSelectedLevel(level);
    
    // Get questions for this category, subcategory, and level
    const questions = getQuestions(
      selectedCategory!.id,
      selectedSubCategory!.id,
      level
    );
    
    // Debug: Log the selected options and questions found
    console.log('🎯 Selected:', {
      category: selectedCategory!.id,
      subCategory: selectedSubCategory!.id,
      level: level,
      questionsFound: questions.length
    });
    
    // Check if questions are available
    if (questions.length === 0) {
      // Show modal instead of alert
      setShowNoQuestionsModal(true);
      return;
    }
    
    setQuizQuestions(questions);
    setCurrentQuestion(0);
    setUserAnswers(new Array(questions.length).fill(null));
    setQuizResult({ correct: 0, wrong: 0, unattempted: 0 });
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScreen('quiz');
    setQuizStartTime(Date.now());
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    // Update userAnswers array to track the selected answer
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);

    const isCorrect = answerIndex === quizQuestions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setQuizResult(prev => ({ ...prev, correct: prev.correct + 1 }));
      
      // Only auto-advance for correct answers
      setTimeout(() => {
        if (currentQuestion < quizQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
        } else {
          finishQuiz({ ...quizResult, correct: quizResult.correct + 1 });
        }
      }, 1500);
    } else {
      setQuizResult(prev => ({ ...prev, wrong: prev.wrong + 1 }));
    }
    // For wrong answers, don't auto-advance - wait for modal to close
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1]);
      setIsAnswered(userAnswers[currentQuestion + 1] !== null);
    } else {
      calculateFinalResult();
      finishQuiz(quizResult);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1]);
      setIsAnswered(userAnswers[currentQuestion - 1] !== null);
    }
  };

  const handleSkipQuestion = () => {
    // Save current state as skipped (null)
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = null;
    setUserAnswers(newAnswers);
    
    // Move to next question
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1]);
      setIsAnswered(userAnswers[currentQuestion + 1] !== null);
    } else {
      calculateFinalResult();
      finishQuiz(quizResult);
    }
  };

  const calculateFinalResult = () => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === null) {
        unattempted++;
      } else if (answer === quizQuestions[index].correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });

    setQuizResult({ correct, wrong, unattempted });
  };

  const handleTimeUp = () => {
    if (isAnswered) return; // Already answered
    
    // Mark as unattempted and move to next
    setQuizResult(prev => ({ ...prev, unattempted: prev.unattempted + 1 }));
    setIsAnswered(true);
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        finishQuiz({ ...quizResult, unattempted: quizResult.unattempted + 1 });
      }
    }, 1000);
  };

  const finishQuiz = (finalResult: QuizResult) => {
    // Trigger confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: ReturnType<typeof setInterval> = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    // Save to leaderboard
    const newEntry: LeaderboardEntry = {
      name: playerName,
      score: finalResult.correct,
      timestamp: Date.now(),
      category: selectedCategory!.name,
      subCategory: selectedSubCategory!.name,
      level: selectedLevel!,
      city: playerCity || undefined,
      state: playerState || undefined,
      result: finalResult,
      timeTaken: (Date.now() - quizStartTime) / 1000 // in seconds
    };

    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score || a.timestamp - b.timestamp);

    setLeaderboard(updatedLeaderboard);
    localStorage.setItem('quizLeaderboard', JSON.stringify(updatedLeaderboard));

    setScreen('results');
  };

  const restartQuiz = () => {
    setScreen('welcome');
    setPlayerName('');
    setPlayerCity('');
    setPlayerState('');
    setPlayerPhoto('');
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setQuizResult({ correct: 0, wrong: 0, unattempted: 0 });
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const quitQuiz = () => {
    setShowQuitModal(true);
  };

  const startNewQuiz = () => {
    setScreen('category');
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setQuizResult({ correct: 0, wrong: 0, unattempted: 0 });
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      {/* User Header - Top Bar (Only on welcome screen when logged in) */}
      {playerName && screen === 'welcome' && (
        <UserHeader
          playerName={playerName}
          playerCity={playerCity}
          playerState={playerState}
          playerPhoto={playerPhoto}
          onProfileClick={() => setScreen('profile')}
          onLogout={() => {
            // Clear all user data
            setPlayerName('');
            setPlayerCity('');
            setPlayerState('');
            setPlayerPhoto('');
            localStorage.removeItem('quizUserInfo');
            localStorage.removeItem('quizUserCredentials');
            setScreen('welcome');
          }}
        />
      )}

      {/* Floating Admin Access Button */}
      {screen === 'welcome' && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setScreen('admin')}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm"
          title="Admin Panel"
        >
          <Shield className="w-6 h-6" />
        </motion.button>
      )}
      
      <div className={`container mx-auto px-4 relative z-10 ${playerName && screen === 'welcome' ? 'pt-24 sm:pt-28 pb-8' : 'py-8'}`}>
        <AnimatePresence mode="wait">
          {/* Welcome Screen */}
          {screen === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto text-center space-y-8 sm:space-y-12 px-4 py-8"
            >
              {/* Hero Section with Enhanced Design */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="relative"
              >
                {/* Floating Icons Animation */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-0 left-1/4 text-primary/30"
                  >
                    <Zap className="w-8 h-8" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-0 right-1/4 text-accent/30"
                  >
                    <Sparkles className="w-8 h-8" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute bottom-0 left-1/3 text-secondary/30"
                  >
                    <Trophy className="w-8 h-8" />
                  </motion.div>
                </div>

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0, 255, 136, 0.2)",
                      "0 0 40px rgba(0, 217, 255, 0.3)",
                      "0 0 20px rgba(255, 0, 255, 0.2)",
                      "0 0 20px rgba(0, 255, 136, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block rounded-full p-6 sm:p-8 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 backdrop-blur-sm border-2 border-primary/30"
                >
                  <Brain className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                      AI Quiz Master
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                    Test your knowledge with <span className="text-primary font-semibold">2,500+ questions</span> across <span className="text-accent font-semibold">13 categories</span>
                    <br className="hidden sm:block" />
                    <span className="text-sm md:text-base block mt-2">
                      🎯 Real-time Rankings • 🏆 Compete with Others • ⚡ Instant Results
                    </span>
                  </p>
                </motion.div>
              </motion.div>

              {/* Main CTA Button - Right after description */}
              {playerName ? (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px rgba(0, 255, 136, 0.4)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setScreen('category')}
                  className="relative w-full max-w-lg mx-auto px-8 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold rounded-2xl shadow-2xl text-lg sm:text-xl overflow-hidden group mb-10"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-1000, 1000] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-4 border-white/50"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform" />
                    Start Your Quiz
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              ) : (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px rgba(0, 255, 136, 0.4)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setIsSignUpMode(true);
                    setScreen('mobileEntry');
                  }}
                  className="relative w-full max-w-lg mx-auto px-8 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-primary via-accent to-secondary text-white font-bold rounded-2xl shadow-2xl text-lg sm:text-xl overflow-hidden group mb-10"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-1000, 1000] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-4 border-white/50"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                    <span className="text-base sm:text-lg md:text-xl">Get Started Free</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              )}

              {/* Enhanced Stats Cards with Glass Effect */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative bg-gradient-to-br from-primary/15 via-primary/10 to-transparent backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-6 sm:p-8 group cursor-pointer"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2">13+</div>
                  <div className="text-sm sm:text-base text-foreground/70 font-medium">Categories</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative bg-gradient-to-br from-accent/15 via-accent/10 to-transparent backdrop-blur-xl border-2 border-accent/30 rounded-2xl p-6 sm:p-8 group cursor-pointer"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent mb-2">2500+</div>
                  <div className="text-sm sm:text-base text-foreground/70 font-medium">Questions</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative bg-gradient-to-br from-secondary/15 via-secondary/10 to-transparent backdrop-blur-xl border-2 border-secondary/30 rounded-2xl p-6 sm:p-8 group cursor-pointer"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary mb-2">3</div>
                  <div className="text-sm sm:text-base text-foreground/70 font-medium">Difficulty Levels</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/10 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-6 sm:p-8 group cursor-pointer"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">20</div>
                  <div className="text-sm sm:text-base text-foreground/70 font-medium">Qs per Quiz</div>
                </motion.div>
              </div>

              {/* Show user info if logged in, otherwise show login prompt */}
              {playerName ? (
                <>
                  {/* Leaderboard & Dashboard - Only for logged in users */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setScreen('leaderboard')}
                      className="flex-1 px-4 sm:px-6 py-3 bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 hover:border-accent rounded-xl transition-all text-sm sm:text-base backdrop-blur-sm group"
                    >
                      <Trophy className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2 text-accent group-hover:scale-110 transition-transform" />
                      Leaderboard
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setScreen('dashboard')}
                      className="flex-1 px-4 sm:px-6 py-3 bg-gradient-to-br from-card to-card/50 border-2 border-secondary/30 hover:border-secondary rounded-xl transition-all text-sm sm:text-base backdrop-blur-sm group"
                    >
                      <LayoutDashboard className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2 text-secondary group-hover:scale-110 transition-transform" />
                      Dashboard
                    </motion.button>
                  </div>
                </>
              ) : (
                <>
                  {/* Feature Cards for Non-Logged In Users */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 136, 0.5)" }}
                      className="bg-gradient-to-br from-primary/5 to-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                        <Brain className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg mb-2">13+ Categories</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">From General Knowledge to Advanced Topics</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(0, 217, 255, 0.5)" }}
                      className="bg-gradient-to-br from-accent/5 to-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                        <Trophy className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg mb-2">Compete & Win</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">City, State & National level rankings</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(255, 0, 255, 0.5)" }}
                      className="bg-gradient-to-br from-secondary/5 to-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                        <Zap className="w-7 h-7 text-secondary" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg mb-2">Real-time Voice</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Interactive audio feedback system</p>
                    </motion.div>
                  </div>

                  {/* Trust Badges */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground/70 pt-4"
                  >
                    <span className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
                      <span className="text-primary">✨</span> 100% Free Forever
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
                      <span className="text-accent">🔒</span> No Credit Card
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
                      <span className="text-secondary">⚡</span> Start in Seconds
                    </span>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}

          {/* Login Screen */}
          {screen === 'login' && (
            <Login
              onLogin={(userData) => {
                // Instead of directly logging in, go to OTP verification
                setPendingUserData(userData);
                setScreen('otp');
              }}
              onBack={() => setScreen('welcome')}
            />
          )}

          {/* Mobile Entry Screen */}
          {screen === 'mobileEntry' && (
            <MobileEntry
              onSendOTP={(mobile) => {
                setPendingMobile(mobile);
                setScreen('otp');
              }}
              onBack={() => {
                // Toggle between signup and login modes
                setIsSignUpMode(!isSignUpMode);
                if (!isSignUpMode) {
                  // If switching to signup mode, stay on mobileEntry
                  // Otherwise go back to welcome
                  setScreen('welcome');
                }
              }}
              isSignUp={isSignUpMode}
            />
          )}

          {/* OTP Verification Screen */}
          {screen === 'otp' && pendingMobile && (
            <OTPVerification
              mobile={pendingMobile}
              isSignUp={isSignUpMode}
              onVerify={() => {
                if (isSignUpMode) {
                  // After OTP verified in signup mode, go to complete profile
                  setScreen('completeProfile');
                } else {
                  // For login, load user data and redirect to welcome
                  const savedCredentials = localStorage.getItem('quizUserCredentials');
                  if (savedCredentials) {
                    const credentials = JSON.parse(savedCredentials);
                    setPlayerName(credentials.name);
                    setPlayerCity(credentials.city);
                    setPlayerState(credentials.state);
                    setPlayerPhoto(credentials.photo || '');
                    
                    // Save to userInfo as well
                    localStorage.setItem('quizUserInfo', JSON.stringify({
                      name: credentials.name,
                      email: credentials.email,
                      mobile: credentials.mobile,
                      city: credentials.city,
                      state: credentials.state,
                      photo: credentials.photo || ''
                    }));
                  }
                  setPendingMobile('');
                  setScreen('welcome');
                }
              }}
              onBack={() => {
                setPendingMobile('');
                setScreen('mobileEntry');
              }}
            />
          )}

          {/* Complete Profile Screen (Signup Only) */}
          {screen === 'completeProfile' && pendingMobile && (
            <CompleteProfile
              mobile={pendingMobile}
              onComplete={(userData) => {
                // Save credentials
                localStorage.setItem('quizUserCredentials', JSON.stringify(userData));
                
                // Save user info
                localStorage.setItem('quizUserInfo', JSON.stringify({
                  name: userData.name,
                  email: userData.email,
                  mobile: userData.mobile,
                  city: userData.city,
                  state: userData.state
                }));

                // Set player data
                setPlayerName(userData.name);
                setPlayerCity(userData.city);
                setPlayerState(userData.state);
                setPlayerPhoto('');
                
                // Clear pending data
                setPendingMobile('');
                setIsSignUpMode(false);
                
                // Redirect to welcome
                setScreen('welcome');
              }}
            />
          )}

          {/* Category Selection */}
          {screen === 'category' && (
            <CategorySelection
              onSelectCategory={handleCategorySelect}
              onBack={() => setScreen('welcome')}
            />
          )}

          {/* Sub-Category Selection */}
          {screen === 'subcategory' && selectedCategory && (
            <SubCategorySelection
              category={selectedCategory}
              onSelect={handleSubCategorySelect}
              onBack={() => setScreen('category')}
            />
          )}

          {/* Level Selection */}
          {screen === 'level' && selectedSubCategory && selectedCategory && (
            <LevelSelection
              subCategory={selectedSubCategory}
              categoryName={selectedCategory.name}
              categoryIcon={selectedCategory.icon}
              onSelect={handleLevelSelect}
              onBack={() => setScreen('subcategory')}
            />
          )}

          {/* Quiz Screen */}
          {screen === 'quiz' && quizQuestions.length > 0 && (
            <div key="quiz" className="max-w-4xl mx-auto relative">
              {/* Subtle Close Button - Top Right */}
              <button
                onClick={quitQuiz}
                className="absolute -top-4 sm:top-0 right-0 sm:right-2 p-2 text-muted-foreground/40 hover:text-destructive/60 transition-colors group z-10"
                title="Quit Quiz"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              </button>

              <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pr-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {selectedCategory?.icon} {selectedCategory?.name}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {selectedSubCategory?.name} • {selectedLevel}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    {quizResult.correct}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Score</div>
                </div>
              </div>

              <QuizQuestion
                question={quizQuestions[currentQuestion]}
                selectedAnswer={selectedAnswer}
                isAnswered={isAnswered}
                onAnswerSelect={handleAnswerSelect}
                onNextQuestion={handleNextQuestion}
                onPreviousQuestion={handlePreviousQuestion}
                onSkipQuestion={handleSkipQuestion}
                onTimeUp={handleTimeUp}
                onQuitQuiz={quitQuiz}
                questionNumber={currentQuestion + 1}
                totalQuestions={quizQuestions.length}
                canGoPrevious={currentQuestion > 0}
              />
            </div>
          )}

          {/* Results Screen */}
          {screen === 'results' && (
            <FinalScore
              score={quizResult.correct}
              total={quizQuestions.length}
              result={quizResult}
              onPlayAgain={startNewQuiz}
              onViewLeaderboard={() => setScreen('leaderboard')}
              onViewDashboard={() => setScreen('dashboard')}
              playerName={playerName}
              categoryName={`${selectedCategory?.name} - ${selectedSubCategory?.name}`}
              level={selectedLevel!}
            />
          )}

          {/* Leaderboard Screen */}
          {screen === 'leaderboard' && (
            <Leaderboard
              entries={leaderboard}
              onBack={() => setScreen('welcome')}
              playerName={playerName}
            />
          )}

          {/* Dashboard Screen */}
          {screen === 'dashboard' && (
            <Dashboard
              entries={leaderboard}
              onBack={() => setScreen('welcome')}
              playerName={playerName}
            />
          )}

          {/* Profile Screen */}
          {screen === 'profile' && (
            <Profile
              playerName={playerName}
              playerCity={playerCity}
              playerState={playerState}
              playerPhoto={playerPhoto}
              onBack={() => setScreen('welcome')}
              onSave={(data) => {
                setPlayerName(data.name);
                setPlayerCity(data.city);
                setPlayerState(data.state);
                setPlayerPhoto(data.photo);
                // Save to localStorage
                localStorage.setItem('quizUserInfo', JSON.stringify(data));
              }}
            />
          )}

          {/* Admin Screen */}
          {screen === 'admin' && (
            <AdminApp onBackToApp={() => setScreen('welcome')} />
          )}
        </AnimatePresence>
      </div>
      {showQuitModal && (
        <QuitConfirmationModal
          isOpen={showQuitModal}
          onClose={() => setShowQuitModal(false)}
          onConfirm={() => {
            setScreen('welcome');
            setSelectedCategory(null);
            setSelectedSubCategory(null);
            setSelectedLevel(null);
            setCurrentQuestion(0);
            setQuizResult({ correct: 0, wrong: 0, unattempted: 0 });
            setSelectedAnswer(null);
            setIsAnswered(false);
            setShowQuitModal(false);
          }}
        />
      )}
      {showNoQuestionsModal && selectedCategory && selectedSubCategory && selectedLevel && (
        <NoQuestionsModal
          isOpen={showNoQuestionsModal}
          categoryName={selectedCategory.name}
          subCategoryName={selectedSubCategory.name}
          level={selectedLevel}
          onClose={() => setShowNoQuestionsModal(false)}
        />
      )}
    </div>
  );
}