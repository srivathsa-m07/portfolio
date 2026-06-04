import React from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../config/links';

const PROFILES = [
  {
    name: 'SkillRack',
    statistic: '1035+',
    subtext: 'Problems Solved',
    url: LINKS.SKILLRACK
  },
  {
    name: 'LeetCode',
    statistic: '280+',
    subtext: 'Problems Solved',
    url: LINKS.LEETCODE
  },
  {
    name: 'CodeChef',
    statistic: '275+',
    subtext: 'Problems Solved',
    url: LINKS.CODECHEF
  },
  {
    name: 'HackerRank',
    statistic: 'Python 3★',
    subtext: 'C++ 3★ | SQL 2★ | Java 2★',
    url: LINKS.HACKERRANK
  }
];

export const ProofScene: React.FC = () => {
  return (
    <motion.div 
      className="scene-container w-full h-full flex flex-col items-center justify-center text-[#F5F0E6] relative bg-[#0F172A] overflow-y-auto pt-32 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="z-10 w-full max-w-6xl px-8 md:px-16 flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            className="font-heading text-xs tracking-[0.4em] uppercase font-bold text-[#C88A2D] mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Coding Profiles
          </motion.h2>
          <motion.h1 
            className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-bold leading-none text-[#F5F0E6]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            PROOF OF PRACTICE
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {PROFILES.map((profile, i) => (
            <motion.div
              key={profile.name}
              className="bg-[#0F172A] border border-[#F5F0E6]/10 p-8 md:p-12 relative overflow-hidden group flex flex-col justify-between min-h-[240px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1), duration: 0.8 }}
            >
               {/* Hover Texture Glow */}
               <div className="absolute inset-0 bg-[#C88A2D] opacity-0 group-hover:opacity-[0.05] blur-[40px] transition-opacity duration-700 pointer-events-none" />
               <div className="absolute top-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-10 mix-blend-overlay pointer-events-none" />

               <div className="relative z-10 flex flex-col gap-2">
                 <h3 className="font-heading text-lg md:text-xl font-bold tracking-widest uppercase text-[#F5F0E6]/50 group-hover:text-[#F5F0E6] transition-colors">
                   {profile.name}
                 </h3>
                 <div className="flex flex-col">
                    <span className="font-heading text-3xl md:text-4xl font-bold text-[#C88A2D] mt-4 mb-2">
                      {profile.statistic}
                    </span>
                    <span className="font-heading text-[10px] md:text-xs tracking-widest uppercase font-bold text-[#F5F0E6]/70">
                      {profile.subtext}
                    </span>
                 </div>
               </div>

               <div className="relative z-10 mt-8">
                   {profile.url === '#' ? (
                     <span className="inline-flex items-center gap-4 text-[#F5F0E6]/30 cursor-not-allowed select-none">
                       <span className="font-heading text-[10px] md:text-xs tracking-widest uppercase font-bold">Visit Profile</span>
                       <div className="w-8 h-[1px] bg-current" />
                     </span>
                   ) : (
                     <a href={profile.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-[#F5F0E6]/80 hover:text-[#C88A2D] transition-colors group/btn">
                       <span className="font-heading text-[10px] md:text-xs tracking-widest uppercase font-bold">Visit Profile</span>
                       <div className="w-8 h-[1px] bg-current transform origin-left transition-transform group-hover/btn:scale-x-150" />
                     </a>
                   )}
                </div>
               
               {/* Decorative border accent */}
               <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C88A2D]/0 group-hover:border-[#C88A2D]/60 transition-colors duration-500 m-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
