import React from 'react';
import { motion } from 'framer-motion';

export const AboutScene: React.FC = () => {
  const keywordClass = "text-[#F5F0E6] hover:text-[#C88A2D] hover:drop-shadow-[0_0_10px_rgba(200,138,45,0.8)] transition-all duration-300 font-bold px-1";

  return (
    <motion.div 
      className="scene-container w-full h-full flex flex-col items-center text-[#F5F0E6] relative bg-[#0F172A] overflow-y-auto pt-[140px] pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
        
        {/* Left: Large Editorial Statement */}
        <div className="flex-1 lg:max-w-[45%] flex flex-col justify-start pt-2 border-l-2 border-[#C88A2D]/40 pl-6">
          <motion.h2 
            className="font-heading text-[9px] tracking-[0.4em] uppercase font-bold text-[#C88A2D] mb-4 md:mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Engineering Philosophy
          </motion.h2>
          
          <motion.h1 
            className="font-heading text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold leading-[1.2] text-[#F5F0E6]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            "Building systems is not just about writing code. <br/><br/>
            <span className="text-[#F5F0E6]/60 text-[clamp(1.2rem,2vw,2rem)]">It is about understanding problems, designing reliable solutions, and creating technology people can trust.</span>"
          </motion.h1>
        </div>

        {/* Right: Narrative Content */}
        <motion.div 
          className="flex-[1.5] flex flex-col gap-4 font-body text-[#F5F0E6]/80 text-[clamp(0.85rem,1vw,1rem)] leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
           <p>
             I am currently pursuing my B.Tech in Artificial Intelligence and Data Science at Sri Eshwar College of Engineering. 
             My interest in technology extends beyond learning frameworks and tools. I am deeply interested in understanding how 
             <span className={keywordClass}>Systems</span> behave, scale, and create real-world impact.
           </p>
           <p>
             Over time, that curiosity led me from learning programming fundamentals to designing complete 
             <span className={keywordClass}>Products</span>. Rather than focusing only on academic exercises, 
             I challenged myself to build systems that solve practical problems.
           </p>
           <p>
             This resulted in building GRIDFLOW, an AI-powered observability platform; HIREBRIDGE, an intelligent recruitment platform; 
             and TRACELOCK, a dependency threat intelligence platform. Through these projects I gained hands-on experience in full-stack 
             <span className={keywordClass}>Engineering</span>, backend 
             <span className={keywordClass}>Architecture</span>, real-time data pipelines, and integrating 
             <span className={keywordClass}>AI</span> models.
           </p>
           <p>
             Alongside building products, I continuously strengthen my 
             <span className={keywordClass}>Problem Solving</span> skills through competitive programming and innovation 
             competitions like ADZAP and FRESHATHON, which reinforced my ability to deliver robust solutions under pressure.
           </p>
           <p className="text-[#F5F0E6] font-bold mt-2 border-l-2 border-[#C88A2D] pl-4 py-1">
             Today my focus is simple: Build reliable systems. Solve meaningful problems. Continue growing as a software engineer capable of creating technology that scales and delivers real value.
           </p>
        </motion.div>
      </div>

      {/* Professional Differentiator */}
      <motion.div 
        className="w-full max-w-7xl px-6 md:px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
         <div className="bg-[#F5F0E6]/5 border border-[#F5F0E6]/10 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C88A2D] opacity-[0.03] blur-[40px] pointer-events-none" />
            <h3 className="font-heading text-[9px] uppercase tracking-[0.3em] font-bold text-[#C88A2D] mb-4">
              What I Enjoy Building
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
               {['Intelligent Platforms', 'Observability Systems', 'Developer Tools', 'AI Applications', 'Security Products'].map((item) => (
                 <span key={item} className="px-4 py-2 border border-[#F5F0E6]/20 text-[#F5F0E6] font-heading text-[10px] tracking-widest uppercase font-bold hover:border-[#C88A2D] hover:text-[#C88A2D] transition-colors duration-300">
                   {item}
                 </span>
               ))}
            </div>
         </div>
      </motion.div>
      
    </motion.div>
  );
};
