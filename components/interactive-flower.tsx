'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/theme-context';

interface InteractiveFlowerProps {
  imagePath: string;
  index: number;
  totalFlowers: number;
  onClick?: () => void;
}

// Seeded random function for consistent values
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function InteractiveFlower({ imagePath, index, totalFlowers, onClick }: InteractiveFlowerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldBloom, setShouldBloom] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { isWild } = useTheme();

  // Use seeded random for consistent server/client rendering
  const position = useMemo(() => {
    const seed = index * 9999;
    return {
      x: (index % 5) * 20 + seededRandom(seed) * 15,
      y: Math.floor(index / 5) * 20 + seededRandom(seed + 1) * 15,
      rotation: seededRandom(seed + 2) * 20 - 10,
      size: 120 + seededRandom(seed + 3) * 80,
    };
  }, [index]);

  // Mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  useEffect(() => {
    setIsMounted(true);
    // Seeded bloom timing for organic feel
    const bloomDelay = seededRandom(index * 7777) * 3000 + index * 100;
    const timer = setTimeout(() => setShouldBloom(true), bloomDelay);
    return () => clearTimeout(timer);
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: position.rotation }}
      animate={{
        scale: shouldBloom ? 1 : 0,
        opacity: shouldBloom ? (isHovered ? 1 : 0.7) : 0,
        rotate: isHovered ? position.rotation + 5 : position.rotation,
      }}
      whileHover={{ 
        scale: isWild ? 1.3 : 1.15, 
        zIndex: 50, 
        rotate: position.rotation + (isWild ? 15 : 5) 
      }}
      transition={{
        type: "spring",
        stiffness: isWild ? 200 : 100,
        damping: isWild ? 15 : 12,
        delay: index * 0.03,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: position.size,
        height: position.size,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="cursor-pointer"
    >
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden petal-shadow"
        animate={{
          boxShadow: isWild
            ? (isHovered
                ? '0 0 60px rgba(182, 69, 214, 0.8), 0 0 120px rgba(255, 107, 157, 0.6), 0 20px 80px rgba(198, 255, 0, 0.4)'
                : '0 0 20px rgba(182, 69, 214, 0.3), 0 10px 40px rgba(255, 107, 157, 0.2)')
            : (isHovered
                ? '0 20px 40px rgba(122, 155, 118, 0.4), 0 40px 80px rgba(155, 123, 163, 0.3)'
                : '0 4px 8px rgba(122, 155, 118, 0.2), 0 12px 24px rgba(122, 155, 118, 0.15)'),
          scale: isHovered ? (isWild ? 1.05 : 1) : 1,
          rotate: isHovered && isWild ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          rotate: {
            duration: 0.5,
            repeat: isHovered && isWild ? Infinity : 0,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src={imagePath}
          alt="Flower painting"
          fill
          sizes={`${position.size}px`}
          className="object-cover"
          priority={index < 6}
        />
        {isWild ? (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-garden-violet/40 via-garden-cyan/40 to-garden-coral/40"
            animate={{
              opacity: isHovered ? 0.6 : 0.2,
              background: isHovered 
                ? [
                    'linear-gradient(to bottom right, rgba(182, 69, 214, 0.4), rgba(0, 229, 255, 0.4), rgba(255, 107, 157, 0.4))',
                    'linear-gradient(to bottom right, rgba(255, 107, 157, 0.4), rgba(198, 255, 0, 0.4), rgba(182, 69, 214, 0.4))',
                    'linear-gradient(to bottom right, rgba(0, 229, 255, 0.4), rgba(255, 107, 157, 0.4), rgba(198, 255, 0, 0.4))',
                  ]
                : 'linear-gradient(to bottom right, rgba(182, 69, 214, 0.2), rgba(0, 229, 255, 0.2), rgba(255, 107, 157, 0.2))',
            }}
            transition={{ 
              duration: 0.3,
              background: {
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        ) : (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-garden-violet/0 via-transparent to-garden-coral/0"
            animate={{
              opacity: isHovered ? 0.3 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

