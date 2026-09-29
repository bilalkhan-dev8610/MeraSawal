import { motion } from 'motion/react';
import { ChevronDown, User } from 'lucide-react';
import { useState } from 'react';

interface UserHeaderProps {
  playerName: string;
  playerCity: string;
  playerState: string;
  playerPhoto: string;
  onProfileClick: () => void;
  onLogout: () => void;
}

export function UserHeader({
  playerName,
  playerCity,
  playerState,
  playerPhoto,
  onProfileClick,
  onLogout,
}: UserHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = playerCity && playerState 
    ? `${playerCity}, ${playerState}` 
    : playerCity || playerState || 'India';

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Left Side - User Info */}
          <motion.div 
            className="flex flex-col gap-0.5"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-xs sm:text-sm text-primary/60 font-medium">
              Welcome Back! 👋
            </span>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-foreground leading-tight">
              {playerName}
            </h2>
            <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {location}
            </span>
          </motion.div>

          {/* Right Side - Profile Photo + Dropdown */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <motion.button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/30 hover:border-primary/50 rounded-full pl-2 pr-3 sm:pr-4 py-1.5 sm:py-2 transition-all duration-300 shadow-lg shadow-primary/10"
            >
              {/* Profile Photo */}
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-primary/50 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {playerPhoto ? (
                    <img 
                      src={playerPhoto} 
                      alt={playerName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  )}
                </div>
                {/* Online Status Indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full border-2 border-background animate-pulse" />
              </div>

              {/* Dropdown Arrow - Hidden on very small screens */}
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="hidden sm:block"
              >
                <ChevronDown className="w-4 h-4 text-primary" />
              </motion.div>
            </motion.button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <>
                {/* Backdrop to close dropdown */}
                <div 
                  className="fixed inset-0 z-40"
                  onClick={() => setIsDropdownOpen(false)}
                />
                
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 sm:w-64 bg-background/95 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden z-50"
                >
                  {/* User Info in Dropdown */}
                  <div className="p-4 border-b border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        {playerPhoto ? (
                          <img 
                            src={playerPhoto} 
                            alt={playerName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-bold text-foreground truncate">{playerName}</span>
                        <span className="text-xs text-muted-foreground truncate">{location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onProfileClick();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">My Profile</span>
                        <span className="text-xs text-muted-foreground">View & edit details</span>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                        <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">Logout</span>
                        <span className="text-xs text-muted-foreground">Sign out</span>
                      </div>
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}