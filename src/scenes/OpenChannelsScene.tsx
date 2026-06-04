import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHANNELS = [
  { id: 'email', name: 'Email', role: 'Professional Communication', url: 'mailto:srivathsa.m2024aids@sece.ac.in', x: 20, y: 30 },
  { id: 'linkedin', name: 'LinkedIn', role: 'Professional Network', url: 'https://www.linkedin.com/in/srivathsa-m/', x: 50, y: 60 },
  { id: 'github', name: 'GitHub', role: 'Projects and Source Code', url: 'https://github.com/srivathsa-m07', x: 80, y: 30 },
];

export const OpenChannelsScene: React.FC = () => {
  const [hoveredChannel, setHoveredChannel] = useState<string | null>(null);

  return (
    <motion.div 
      className="scene-container w-full h-full flex items-center justify-center text-[#F5F0E6] relative bg-[#0F172A]"
      initial={{ opacity: 0, filter: 'brightness(0.5)' }}
      animate={{ opacity: 1, filter: 'brightness(1)' }}
      exit={{ opacity: 0, filter: 'brightness(0.5)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute top-12 left-8 md:top-24 md:left-24 z-10 max-w-sm">
        <h2 className="font-heading text-xs tracking-[0.4em] uppercase font-bold text-[#C88A2D] mb-4">
          Open Channels
        </h2>
        <p className="font-body text-[#F5F0E6]/70 font-medium leading-relaxed text-sm mb-6">
          Engineering conversations. Product discussions. Collaboration opportunities.
        </p>
        <div className="flex items-center gap-3">
           <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981] animate-pulse" />
           <span className="font-heading text-xs tracking-[0.2em] font-bold text-[#10B981] uppercase">Status: Open To Opportunities</span>
        </div>
      </div>

      {/* Network Communication Terminal Visualization */}
      <div className="relative w-full max-w-5xl h-[60vh] mt-32 z-0">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
           {/* Central Hub Node */}
           <circle cx="50%" cy="80%" r="4" fill="#C88A2D" />
           
           {/* Connection Lines */}
           {CHANNELS.map(channel => {
             const isHovered = hoveredChannel === channel.id;
             return (
               <g key={`line-${channel.id}`}>
                 <motion.line
                   x1="50%" y1="80%"
                   x2={`${channel.x}%`} y2={`${channel.y}%`}
                   stroke={isHovered ? "#C88A2D" : "rgba(245, 240, 230, 0.1)"}
                   strokeWidth={isHovered ? 2 : 1}
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                 />
                 <AnimatePresence>
                   {isHovered && (
                     <motion.circle
                       r="3"
                       fill="#C88A2D"
                       initial={{ offsetDistance: "0%" }}
                       animate={{ offsetDistance: "100%" }}
                       transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                       style={{
                         offsetPath: `path("M ${window.innerWidth/2} ${window.innerHeight*0.6} L ${window.innerWidth * (channel.x/100)} ${window.innerHeight * (channel.y/100)}")`
                       }}
                     />
                   )}
                 </AnimatePresence>
               </g>
             );
           })}
        </svg>

        {/* Channel Nodes */}
        {CHANNELS.map((channel, i) => {
          const isHovered = hoveredChannel === channel.id;
          const isDimmed = hoveredChannel !== null && !isHovered;

          return (
            <motion.a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              key={channel.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center group"
              style={{ left: `${channel.x}%`, top: `${channel.y}%` }}
              onMouseEnter={() => setHoveredChannel(channel.id)}
              onMouseLeave={() => setHoveredChannel(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isDimmed ? 0.3 : 1,
                y: 0
              }}
              transition={{ duration: 0.4, delay: 0.8 + (i * 0.2) }}
            >
              <div className="relative mb-6">
                 <div className={`w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-500 bg-[#0F172A] z-10 relative
                    ${isHovered ? 'border-[#C88A2D] shadow-[0_0_30px_rgba(200,138,45,0.4)]' : 'border-[#F5F0E6]/20'}`}>
                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isHovered ? 'bg-[#C88A2D]' : 'bg-[#F5F0E6]/40'}`} />
                 </div>
                 
                 {/* Signal pulse rings */}
                 {isHovered && (
                   <motion.div 
                     className="absolute inset-0 rounded-full border border-[#C88A2D]/50 z-0"
                     initial={{ scale: 1, opacity: 0.8 }}
                     animate={{ scale: 2, opacity: 0 }}
                     transition={{ duration: 1.5, repeat: Infinity }}
                   />
                 )}
              </div>
              
              <div className="flex flex-col items-center bg-[#0F172A]/80 backdrop-blur-sm px-6 py-4 border border-[#F5F0E6]/10">
                <span className={`font-heading tracking-[0.2em] font-bold uppercase transition-colors duration-300 mb-2
                               ${isHovered ? 'text-[#C88A2D]' : 'text-[#F5F0E6]'}`}>
                  {channel.name}
                </span>
                <span className="font-heading text-[10px] tracking-widest text-[#F5F0E6]/50 uppercase font-bold whitespace-nowrap">
                  {channel.role}
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};
