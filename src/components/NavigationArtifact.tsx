import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SceneId } from '../types/navigation';

interface Props {
  currentScene: SceneId;
  onSceneChange: (scene: SceneId) => void;
}

const LABELS: { id: SceneId; label: string; angle: number }[] = [
  { id: 'STORY', label: 'ENGINEERING PHILOSOPHY', angle: -180 },
  { id: 'SYSTEMS', label: 'FEATURED SYSTEMS', angle: -150 },
  { id: 'ENGINEERING_DNA', label: 'TECHNOLOGY ECOSYSTEM', angle: -120 },
  { id: 'PROOF_OF_PRACTICE', label: 'CODING PROFILES', angle: -90 },
  { id: 'RECOGNITION', label: 'ACHIEVEMENTS', angle: -60 },
  { id: 'CREDENTIALS', label: 'CERTIFICATIONS', angle: -30 },
  { id: 'OPEN_CHANNELS', label: 'CONNECT', angle: 0 },
];

export const NavigationArtifact: React.FC<Props> = ({ currentScene, onSceneChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [onboardingState, setOnboardingState] = useState<'initial' | 'opening' | 'finished'>('initial');
  const containerRef = useRef<HTMLDivElement>(null);

  // Discoverability Onboarding Sequence (Auto open/close)
  useEffect(() => {
    // Wait 1 second, then open
    const openTimer = setTimeout(() => {
      setIsOpen(true);
      setOnboardingState('opening');
    }, 1000);

    // Hold open for 2.5 seconds, then close
    const closeTimer = setTimeout(() => {
      setIsOpen(false);
      setOnboardingState('finished');
    }, 3500);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  const springConfig = { type: "spring" as const, stiffness: 60, damping: 20, mass: 1.5 };

  return (
    <div 
      className="fixed inset-4 pointer-events-none z-[100] overflow-hidden"
      ref={containerRef}
    >
      <motion.div
        drag
        dragConstraints={containerRef}
        dragElastic={0.1}
        dragMomentum={false}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 pointer-events-auto flex items-center justify-center"
        initial={false}
        animate={{ width: isOpen ? 600 : 160, height: isOpen ? 600 : 160 }}
        transition={springConfig}
      >
        
        {/* Permanent Micro-Label above artifact */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-2">
           <span className="font-heading text-[10px] tracking-[0.4em] font-bold text-[#F5F0E6]/60 uppercase whitespace-nowrap drop-shadow-md">
             EXPLORE PORTFOLIO
           </span>
           <div className="w-[1px] h-4 bg-[#C88A2D]/40" />
        </div>

        {/* Onboarding Helper Text (Only shown during auto-open) */}
        <AnimatePresence>
          {onboardingState === 'opening' && isOpen && (
            <motion.div 
              className="absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-4 py-2 bg-[#0F172A]/90 border border-[#C88A2D]/40 rounded-sm shadow-[0_0_15px_rgba(200,138,45,0.3)]">
                <span className="font-heading text-xs tracking-widest text-[#C88A2D] uppercase font-bold whitespace-nowrap">
                  Navigate Portfolio
                </span>
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#C88A2D]/40 mt-[-1px]" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Outer Mechanical Ring (Grows when open) */}
        <motion.div
          className="absolute w-[22rem] h-[22rem] rounded-full shadow-2xl pointer-events-none"
          initial={false}
          animate={{ 
            scale: isOpen ? 1.6 : 1,
            rotate: isOpen ? 90 : 0,
            opacity: isOpen ? 1 : 0,
            boxShadow: isOpen ? '0 0 80px rgba(200, 138, 45, 0.1)' : '0 0 0px rgba(0,0,0,0)'
          }}
          transition={springConfig}
        >
           <div className="absolute inset-0 rounded-full border border-[#C88A2D]/30 shadow-[inset_0_0_20px_rgba(200,138,45,0.1)]" />
           <div className="absolute inset-2 rounded-full border border-[#C88A2D]/10 border-dashed" />
           <div className="absolute inset-4 rounded-full border border-[#F5F0E6]/5" />
           
           <div 
             className="absolute inset-0 rounded-full mix-blend-overlay opacity-30"
             style={{
               backgroundImage: 'repeating-conic-gradient(from 0deg, transparent 0deg 5deg, rgba(200,138,45,0.2) 5deg 10deg)',
             }}
           />
        </motion.div>

        {/* Emergent Labels */}
        <AnimatePresence>
          {isOpen && LABELS.map((item, index) => {
            const radius = 240; 
            const rad = (item.angle * Math.PI) / 180;
            const x = Math.sin(rad) * radius;
            const y = -Math.cos(rad) * radius;

            const isActive = currentScene === item.id;

            return (
              <motion.button
                key={item.id}
                className={`absolute flex items-center justify-center group font-heading tracking-[0.2em] text-xs font-bold transition-colors duration-300 w-56
                           ${isActive ? 'text-[#C88A2D] drop-shadow-[0_0_15px_rgba(200,138,45,0.8)] scale-105' : 'text-[#F5F0E6]/60 hover:text-[#F5F0E6]'}`}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                animate={{ x, y, opacity: 1, scale: 1 }}
                exit={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                transition={{ ...springConfig, delay: index * 0.04 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onSceneChange(item.id);
                  setIsOpen(false);
                  setOnboardingState('finished');
                }}
              >
                <div className="flex flex-col items-center">
                   <motion.div 
                     className={`w-[1px] h-10 mb-4 ${isActive ? 'bg-[#C88A2D]' : 'bg-[#F5F0E6]/20 group-hover:bg-[#F5F0E6]/80'}`}
                     initial={{ height: 0 }}
                     animate={{ height: 40 }}
                     transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                   />
                   <span className="text-center">{item.label}</span>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>

        {/* Main interactive area */}
        <motion.div
          onClick={() => {
            setIsOpen(!isOpen);
            setOnboardingState('finished');
          }}
          className="absolute w-36 h-36 rounded-full z-10 flex items-center justify-center cursor-pointer outline-none group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: isOpen 
              ? '0 30px 60px rgba(15, 23, 42, 0.8), inset 0 0 30px rgba(200, 138, 45, 0.5)' 
              : '0 15px 40px rgba(15, 23, 42, 0.7), inset 0 0 15px rgba(200, 138, 45, 0.3)'
          }}
          transition={{ duration: 0.8 }}
        >
          {/* Base Layer */}
          <div className="absolute inset-0 rounded-full bg-[#0F172A] border-[4px] border-[#C88A2D]/60 overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] group-hover:border-[#C88A2D] transition-colors duration-500">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
          </div>

          {/* Inner Geometric Gear */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-[#C88A2D]/40 pointer-events-none group-hover:border-[#C88A2D]/80 transition-colors duration-500"
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={springConfig}
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(200, 138, 45, 0.15), transparent 30deg, rgba(200, 138, 45, 0.15) 60deg, transparent 90deg, rgba(200, 138, 45, 0.15) 120deg, transparent 150deg, rgba(200, 138, 45, 0.15) 180deg, transparent 210deg, rgba(200, 138, 45, 0.15) 240deg, transparent 270deg, rgba(200, 138, 45, 0.15) 300deg, transparent 330deg)',
            }}
          >
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <div 
                key={deg} 
                className="absolute top-0 left-1/2 w-[1px] h-full bg-[#C88A2D]/40 group-hover:bg-[#C88A2D]/70 transition-colors duration-500"
                style={{ transform: `translateX(-50%) rotate(${deg}deg)` }}
              />
            ))}
            <div className="absolute inset-6 rounded-full border border-[#C88A2D]/30 group-hover:border-[#C88A2D]/60 transition-colors duration-500" />
            <div className="absolute inset-10 rounded-full border border-[#F5F0E6]/10" />
          </motion.div>

          {/* Center Core */}
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-[#0F172A] border-[2px] border-[#C88A2D] flex items-center justify-center overflow-hidden z-20 pointer-events-none group-hover:shadow-[0_0_30px_rgba(200,138,45,0.6)] transition-shadow duration-500"
            animate={{ 
              scale: isOpen ? 0.7 : 1,
              boxShadow: isOpen 
                ? 'inset 0 0 20px rgba(15,23,42,0.9), 0 0 40px rgba(200,138,45,0.8)' 
                : 'inset 0 0 20px rgba(200,138,45,0.4), 0 0 25px rgba(200,138,45,0.5)'
            }}
            transition={springConfig}
          >
             <motion.div 
               className="w-4 h-4 bg-[#C88A2D] rotate-45 shadow-[0_0_15px_#C88A2D] group-hover:scale-110 transition-transform duration-500"
               animate={{ rotate: isOpen ? 225 : [45, 55, 45] }}
               transition={{ duration: isOpen ? 1 : 4, repeat: isOpen ? 0 : Infinity, ease: "easeInOut" }}
             />
          </motion.div>

          {/* Hover Tooltip (Shown on hover when closed and onboarding is finished) */}
          <AnimatePresence>
            {!isOpen && onboardingState === 'finished' && (
              <motion.div 
                className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col items-center"
              >
                 <div className="px-3 py-1.5 bg-[#0F172A] border border-[#C88A2D]/30 shadow-lg text-[10px] text-[#C88A2D] uppercase tracking-widest font-heading font-bold whitespace-nowrap">
                   Navigate Portfolio
                 </div>
                 <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#C88A2D]/30 mt-[-1px]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Idle breathing/glow effect */}
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-[#C88A2D]/30 pointer-events-none group-hover:border-[#C88A2D]/60 transition-colors duration-500"
            animate={{ scale: isOpen ? 1 : [1, 1.2, 1], opacity: isOpen ? 0 : [0.2, 0.6, 0.2] }}
            transition={{ duration: 4, repeat: isOpen ? 0 : Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
