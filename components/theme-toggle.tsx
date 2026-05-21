'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/theme-context';

export default function ThemeToggle() {
  const { theme, toggleTheme, isWild } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-garden-midnight/90 backdrop-blur-md border-2 border-garden-violet/50 hover:border-garden-violet shadow-lg transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      aria-label={`Switch to ${isWild ? 'elegant' : 'wild'} theme`}
    >
      {/* Icon/Emoji indicator */}
      <motion.div
        animate={{ rotate: isWild ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="text-2xl"
      >
        {isWild ? '🌙' : '☀️'}
      </motion.div>
      
      {/* Theme label */}
      <span className="font-serif text-sm text-garden-cream hidden sm:inline-block">
        {isWild ? 'Wild Garden' : 'Elegant Garden'}
      </span>
      
      {/* Toggle indicator */}
      <motion.div
        className="relative w-12 h-6 rounded-full bg-garden-midnight border border-garden-violet/50"
        style={{ minWidth: '3rem' }}
      >
        <motion.div
          className="absolute top-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-garden-violet to-garden-coral shadow-lg"
          animate={{
            x: isWild ? 22 : 2,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        />
      </motion.div>
    </motion.button>
  );
}

