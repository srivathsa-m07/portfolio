import React from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../config/links';

const ACHIEVEMENTS = [
  {
    title: 'FRESHATHON 2025',
    prize: 'Third Prize',
    description: 'Awarded Third Prize at Project Expo 3.0 for an innovative solution focusing on real-world applicability and technical robustness.',
    year: '2025',
    proof: LINKS.FRESHATHON_PROOF
  },
  {
    title: 'Smart India Hackathon (SIH)',
    prize: 'Top 50 College Teams',
    description: 'Selected among the Top 50 college teams to represent Sri Eshwar College of Engineering at the Smart India Hackathon.',
    year: '2025',
    proof: LINKS.SIH_PROOF
  },
  {
    title: 'VORTEXA National Hackathon',
    prize: 'Finalist',
    description: 'Reached the finals of the VORTEXA National Hackathon hosted by HackHere.',
    year: '2026',
    proof: LINKS.VORTEXA_PROOF
  }
];

export const AchievementsScene: React.FC = () => {
  return (
    <motion.div 
      className="scene-container w-full h-full flex flex-col items-center justify-center text-[#F5F0E6] relative bg-[#0F172A] overflow-y-auto pt-32 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="z-10 w-full max-w-5xl px-8 md:px-12">
        <motion.h2 
          className="font-heading text-xs tracking-[0.4em] uppercase font-bold text-[#C88A2D] mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Competitive Recognition
        </motion.h2>
        <motion.h1 
          className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-bold mb-24 text-center text-[#F5F0E6] leading-none tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ACHIEVEMENTS
        </motion.h1>

        {/* Premium Timeline */}
        <div className="relative w-full flex flex-col gap-24 py-8">
           {/* Center Timeline Axis */}
           <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#F5F0E6]/10 md:-translate-x-1/2 z-0" />
           <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C88A2D]/40 to-transparent md:-translate-x-1/2 z-0 opacity-50" />

           {ACHIEVEMENTS.map((item, index) => {
             const isEven = index % 2 === 0;

             return (
               <motion.div 
                 key={item.title}
                 className={`relative z-10 flex flex-col md:flex-row items-start md:items-center w-full gap-8 md:gap-16
                            ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 + (index * 0.2), duration: 0.8, ease: 'easeOut' }}
               >
                 {/* Timeline Node */}
                 <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-[#0F172A] border-[4px] border-[#0F172A] rounded-full flex items-center justify-center z-20 md:-translate-x-1/2 mt-0 md:mt-0 shadow-[0_0_20px_rgba(200,138,45,0.2)]">
                    <div className="w-4 h-4 bg-[#C88A2D] rounded-full shadow-[0_0_15px_#C88A2D]" />
                 </div>

                 {/* Content Node */}
                 <div className={`w-full md:w-1/2 flex flex-col pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:items-start md:text-left'}`}>
                    <span className="font-heading text-[10px] tracking-widest text-[#F5F0E6]/40 font-bold uppercase mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#F5F0E6] mb-1">
                      {item.title}
                    </h3>
                    <h4 className="font-heading text-xs md:text-sm tracking-[0.2em] font-bold text-[#C88A2D] uppercase mb-4">
                      {item.prize}
                    </h4>
                    <p className="font-body text-[#F5F0E6]/70 text-sm leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                    <div className="mt-4">
                      {item.proof === '#' ? (
                        <span className="inline-flex items-center gap-3 text-[#F5F0E6]/30 cursor-not-allowed select-none font-heading text-[10px] tracking-widest uppercase font-bold">
                          <span className="w-6 h-[1px] bg-current" />
                          View Proof
                        </span>
                      ) : (
                        <a href={item.proof} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#F5F0E6]/60 hover:text-[#C88A2D] transition-colors font-heading text-[10px] tracking-widest uppercase font-bold group/proof">
                          <span className="w-6 h-[1px] bg-current transform origin-left transition-transform group-hover/proof:scale-x-150" />
                          View Proof
                        </a>
                      )}
                    </div>
                 </div>
               </motion.div>
             );
           })}
        </div>
      </div>
    </motion.div>
  );
};
