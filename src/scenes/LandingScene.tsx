import React from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../config/links';

export const LandingScene: React.FC = () => {
  return (
    <motion.div 
      className="scene-container flex flex-col w-full h-full relative overflow-y-auto overflow-x-hidden pt-[120px] pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 
        Safe zone offset applied via pt-[120px] above.
        Reduced flex-1 gaps and padding to prevent viewport clipping.
      */}
      <div className="flex flex-col md:flex-row w-full max-w-[1440px] mx-auto px-6 md:px-12 flex-1 justify-center items-center gap-8 md:gap-12">
        
        {/* Left Content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[#C88A2D] font-heading tracking-[0.3em] text-[clamp(0.5rem,0.8vw,0.65rem)] uppercase mb-3 font-bold flex items-center gap-4">
              <span className="w-6 h-[1px] bg-[#C88A2D]"></span>
              Full Stack Engineer
            </h2>
            
            {/* Reduced h1 clamp */}
            <h1 className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-none mb-4 text-[#F5F0E6] drop-shadow-lg font-bold tracking-tight">
              SRIVATHSA M
            </h1>
            
            <p className="text-[#C88A2D] font-heading text-[clamp(0.9rem,1.5vw,1.2rem)] italic mb-4 max-w-2xl leading-snug font-medium">
              Engineering Intelligent Systems.<br/> 
              Building Real Products.<br/> 
              Creating Meaningful Impact.
            </p>

            <p className="font-body text-[#F5F0E6]/80 text-[clamp(0.75rem,0.9vw,0.9rem)] max-w-lg leading-relaxed mb-6">
              Specialized in architecting AI-powered platforms, observability systems, recruitment intelligence products, and dependency threat intelligence tooling.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 max-w-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-[#F5F0E6]/10 pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-[#F5F0E6]/40 text-[9px] tracking-widest uppercase font-bold">Location</span>
                <span className="text-[#F5F0E6] font-body text-[10px] md:text-xs font-semibold">Tamil Nadu, India</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#F5F0E6]/40 text-[9px] tracking-widest uppercase font-bold">Education</span>
                <span className="text-[#F5F0E6] font-body text-[10px] md:text-xs font-semibold">Sri Eshwar College of Engineering</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#F5F0E6]/40 text-[9px] tracking-widest uppercase font-bold">Availability</span>
                <span className="text-[#10B981] font-body text-[10px] md:text-xs font-bold flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></span>
                  Open To Opportunities
                </span>
              </div>
            </div>

            {/* Resume Buttons */}
            <div className="flex gap-4 mt-2">
              <a href={LINKS.RESUME_VIEW} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#C88A2D] bg-[#C88A2D]/10 hover:bg-[#C88A2D] text-[#F5F0E6] hover:text-[#0F172A] transition-colors duration-300 font-heading text-[9px] tracking-widest uppercase font-bold text-center">
                View Resume
              </a>
              <a href={LINKS.RESUME_DOWNLOAD} download className="px-5 py-2.5 border border-[#F5F0E6]/20 hover:border-[#F5F0E6]/60 text-[#F5F0E6]/80 hover:text-[#F5F0E6] transition-colors duration-300 font-heading text-[9px] tracking-widest uppercase font-bold text-center">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Portrait */}
        <div className="w-full md:w-[35%] relative z-0 flex items-center justify-center p-8 mt-8 md:mt-0">
          {/* Reduced portrait scale */}
          <motion.div 
            className="w-full max-w-[220px] aspect-[3/4] relative origin-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-3 -right-3 bottom-6 -left-2 border border-[#C88A2D]/30 z-0 pointer-events-none" />
            <div className="absolute top-6 -right-2 bottom-3 -left-3 border border-[#C88A2D]/10 z-0 pointer-events-none bg-[#0F172A]/50" />
            
            <div className="absolute inset-0 bg-[#0F172A] z-10 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <div className="w-full h-full relative mix-blend-luminosity opacity-90 transition-all duration-1000 ease-in-out bg-[#0F172A] group hover:mix-blend-normal">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] via-transparent to-[#C88A2D]/20 z-20 mix-blend-screen" />
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0F172A] to-transparent z-20" />
                 <div className="absolute inset-x-4 bottom-0 top-12 bg-[#F5F0E6]/5 rounded-t-sm opacity-60 transition-all duration-1000 group-hover:opacity-100" />
                 
                 <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C88A2D] z-30" />
                 <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#C88A2D]/60 z-30" />
                 <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#C88A2D]/60 z-30" />
                 <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C88A2D] z-30" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Engineering Snapshot */}
      <motion.div 
        className="w-full border-t border-b border-[#F5F0E6]/10 bg-[#0F172A]/80 backdrop-blur-md mt-10 z-20 py-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-x-auto no-scrollbar">
           
           <div className="flex items-center gap-3 min-w-max">
             <div className="w-6 h-[1px] bg-[#C88A2D]"></div>
             <span className="font-heading text-[9px] tracking-[0.3em] uppercase text-[#C88A2D] font-bold">Engineering Snapshot</span>
           </div>

           <div className="flex justify-between flex-1 gap-6 min-w-max">
             <div className="flex flex-col items-center md:items-start">
               <span className="font-heading text-lg font-bold text-[#F5F0E6]">3</span>
               <span className="font-heading text-[8px] tracking-widest text-[#F5F0E6]/60 uppercase">Production Projects</span>
             </div>
             <div className="flex flex-col items-center md:items-start">
               <span className="font-heading text-lg font-bold text-[#F5F0E6]">1035+</span>
               <span className="font-heading text-[8px] tracking-widest text-[#F5F0E6]/60 uppercase">SkillRack</span>
             </div>
             <div className="flex flex-col items-center md:items-start">
               <span className="font-heading text-lg font-bold text-[#F5F0E6]">280+</span>
               <span className="font-heading text-[8px] tracking-widest text-[#F5F0E6]/60 uppercase">LeetCode</span>
             </div>
             <div className="flex flex-col items-center md:items-start">
               <span className="font-heading text-lg font-bold text-[#F5F0E6]">275+</span>
               <span className="font-heading text-[8px] tracking-widest text-[#F5F0E6]/60 uppercase">CodeChef</span>
             </div>
             <div className="flex flex-col items-center md:items-start">
               <span className="font-heading text-lg font-bold text-[#F5F0E6]">5</span>
               <span className="font-heading text-[8px] tracking-widest text-[#F5F0E6]/60 uppercase">Certifications</span>
             </div>
             <div className="flex flex-col items-center md:items-start">
               <span className="font-heading text-lg font-bold text-[#F5F0E6]">2</span>
               <span className="font-heading text-[8px] tracking-widest text-[#F5F0E6]/60 uppercase">Achievements</span>
             </div>
           </div>
           
        </div>
      </motion.div>

    </motion.div>
  );
};
