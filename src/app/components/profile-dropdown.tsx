import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';

interface ProfileDropdownProps {
  playerName: string;
  onProfileClick: () => void;
  onLogout: () => void;
}

export function ProfileDropdown({ playerName, onProfileClick, onLogout }: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-card border-2 border-border hover:border-primary rounded-xl transition-all group"
      >
        {/* Avatar with Initials */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm">
          {getInitials(playerName)}
        </div>
        
        {/* Name (hidden on mobile) */}
        <span className="hidden sm:block text-sm font-semibold text-foreground max-w-[120px] truncate">
          {playerName}
        </span>
        
        {/* Dropdown Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 sm:w-56 bg-card border-2 border-border rounded-xl shadow-2xl overflow-hidden z-50"
          >
            {/* User Info Header */}
            <div className="px-4 py-3 border-b border-border bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
              <p className="text-sm font-bold text-foreground truncate">{playerName}</p>
              <p className="text-xs text-muted-foreground">Manage your account</p>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {/* Profile Option */}
              <motion.button
                whileHover={{ backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                onClick={() => {
                  onProfileClick();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2.5 flex items-center gap-3 text-left text-sm text-foreground hover:text-primary transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Profile Settings</span>
              </motion.button>

              {/* Logout Option */}
              <motion.button
                whileHover={{ backgroundColor: 'rgba(255, 0, 100, 0.1)' }}
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2.5 flex items-center gap-3 text-left text-sm text-destructive hover:text-destructive/80 transition-colors border-t border-border"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
