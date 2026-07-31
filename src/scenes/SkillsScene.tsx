import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['Programming', 'Frontend', 'Backend', 'Databases', 'Tools'] as const;
type Category = typeof CATEGORIES[number];

interface Skill {
  name: string;
  category: Category;
  relatedTech: string[];
  projects: string[];
}

const SKILLS: Skill[] = [
  { name: 'Java', category: 'Programming', relatedTech: [], projects: [] },
  { name: 'C++', category: 'Programming', relatedTech: [], projects: [] },
  { name: 'Python', category: 'Programming', relatedTech: ['MongoDB'], projects: [] },
  { name: 'JavaScript', category: 'Programming', relatedTech: ['React', 'Node.js', 'TypeScript'], projects: ['GRIDFLOW', 'HIREBRIDGE'] },
  { name: 'TypeScript', category: 'Programming', relatedTech: ['React', 'Node.js', 'Express', 'Fastify'], projects: ['GRIDFLOW', 'HIREBRIDGE', 'TRACELOCK'] },
  { name: 'SQL', category: 'Programming', relatedTech: ['MySQL', 'PostgreSQL'], projects: [] },

  { name: 'React', category: 'Frontend', relatedTech: ['TypeScript', 'Tailwind', 'Next.js'], projects: ['GRIDFLOW', 'HIREBRIDGE', 'TRACELOCK'] },
  { name: 'Next.js', category: 'Frontend', relatedTech: ['React', 'TypeScript'], projects: [] },
  { name: 'HTML', category: 'Frontend', relatedTech: ['CSS', 'React'], projects: [] },
  { name: 'CSS', category: 'Frontend', relatedTech: ['HTML', 'Tailwind'], projects: [] },
  { name: 'Tailwind', category: 'Frontend', relatedTech: ['React', 'CSS'], projects: ['GRIDFLOW', 'HIREBRIDGE', 'TRACELOCK'] },

  { name: 'Node.js', category: 'Backend', relatedTech: ['Express', 'Fastify', 'Socket.IO', 'TypeScript'], projects: ['GRIDFLOW', 'HIREBRIDGE', 'TRACELOCK'] },
  { name: 'Express', category: 'Backend', relatedTech: ['Node.js', 'MongoDB'], projects: ['GRIDFLOW', 'HIREBRIDGE'] },
  { name: 'Nest.js', category: 'Backend', relatedTech: ['Node.js', 'TypeScript'], projects: [] },
  { name: 'Fastify', category: 'Backend', relatedTech: ['Node.js', 'PostgreSQL'], projects: ['TRACELOCK'] },
  { name: 'REST APIs', category: 'Backend', relatedTech: ['Express', 'Fastify', 'Node.js'], projects: ['GRIDFLOW', 'HIREBRIDGE', 'TRACELOCK'] },
  { name: 'Socket.IO', category: 'Backend', relatedTech: ['Node.js', 'React'], projects: ['GRIDFLOW', 'HIREBRIDGE'] },

  { name: 'MongoDB', category: 'Databases', relatedTech: ['Express', 'Node.js'], projects: ['GRIDFLOW', 'HIREBRIDGE'] },
  { name: 'PostgreSQL', category: 'Databases', relatedTech: ['Fastify'], projects: ['TRACELOCK'] },
  { name: 'MySQL', category: 'Databases', relatedTech: ['SQL'], projects: [] },
  { name: 'Supabase', category: 'Databases', relatedTech: ['PostgreSQL'], projects: [] },
  { name: 'Prisma ORM', category: 'Databases', relatedTech: ['PostgreSQL', 'MySQL'], projects: [] },

  { name: 'Docker', category: 'Tools', relatedTech: ['Node.js'], projects: ['GRIDFLOW'] },
  { name: 'Git', category: 'Tools', relatedTech: ['GitHub'], projects: [] },
  { name: 'GitHub', category: 'Tools', relatedTech: ['Git'], projects: [] },
  { name: 'CI/CD', category: 'Tools', relatedTech: ['GitHub', 'Docker'], projects: [] },
  { name: 'Vercel', category: 'Tools', relatedTech: ['Next.js', 'React'], projects: ['GRIDFLOW'] },
  { name: 'Postman', category: 'Tools', relatedTech: ['Express', 'Fastify'], projects: [] },
];

export const SkillsScene: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeSkill = SKILLS.find(s => s.name === hoveredSkill);
  
  const isRelated = (skillName: string) => {
    if (!activeSkill) return false;
    return activeSkill.name === skillName || activeSkill.relatedTech.includes(skillName);
  };

  return (
    <motion.div 
      className="scene-container w-full h-full flex flex-col items-center justify-center text-[#F5F0E6] relative bg-[#0F172A] overflow-y-auto pt-32 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      
      {/* Dynamic Background Network Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#F5F0E6" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="z-10 w-full max-w-7xl px-8 flex flex-col items-center">
        <motion.h2 
          className="font-heading text-xs tracking-[0.4em] uppercase font-bold text-[#C88A2D] mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Technology Ecosystem
        </motion.h2>
        <motion.h1 
          className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-bold mb-16 text-center text-[#F5F0E6] leading-none tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          CONSTELLATION
        </motion.h1>

        {/* Constellation Canvas */}
        <div className="relative w-full flex flex-col gap-12 md:gap-20 max-w-5xl">
          {CATEGORIES.map((category) => (
            <div key={category} className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full border-t border-[#F5F0E6]/10 pt-8">
               <div className="w-full md:w-48 flex items-center md:items-start gap-4 flex-shrink-0">
                  <div className="w-8 h-[1px] bg-[#C88A2D] mt-2 hidden md:block" />
                  <h3 className="font-heading text-xs tracking-widest uppercase font-bold text-[#C88A2D]">{category}</h3>
               </div>
               
               <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 w-full relative">
                  {SKILLS.filter(s => s.category === category).map((skill) => {
                    const active = hoveredSkill === skill.name;
                    const related = isRelated(skill.name);
                    const dimmed = hoveredSkill !== null && !related && !active;

                    return (
                      <motion.div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`relative px-6 py-3 border border-[#F5F0E6]/20 bg-[#0F172A] cursor-crosshair transition-all duration-300
                                   ${active ? 'border-[#C88A2D] bg-[#C88A2D]/10 shadow-[0_0_20px_rgba(200,138,45,0.4)] z-20 scale-105' : ''}
                                   ${related && !active ? 'border-[#F5F0E6]/60 bg-[#F5F0E6]/5 z-10 scale-100' : ''}
                                   ${dimmed ? 'opacity-20 scale-95 border-[#F5F0E6]/5' : ''}
                                   ${hoveredSkill === null ? 'hover:border-[#C88A2D]/50' : ''}`}
                      >
                         <span className={`font-heading text-xs md:text-sm tracking-widest uppercase font-bold transition-colors
                                        ${active ? 'text-[#C88A2D]' : 'text-[#F5F0E6]'}
                                        ${related && !active ? 'text-[#F5F0E6]' : ''}
                                        ${dimmed ? 'text-[#F5F0E6]/40' : ''}`}>
                           {skill.name}
                         </span>
                         
                         {/* Connection Node Dot */}
                         <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-colors
                                        ${active || related ? 'bg-[#C88A2D] shadow-[0_0_8px_#C88A2D]' : 'bg-[#F5F0E6]/20'}`} />
                      </motion.div>
                    );
                  })}
               </div>
            </div>
          ))}
        </div>

        {/* Project Highlight HUD */}
        <AnimatePresence>
          {activeSkill && activeSkill.projects.length > 0 && (
            <motion.div 
              className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[150] bg-[#0F172A]/90 backdrop-blur-md border border-[#C88A2D]/50 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(200,138,45,0.2)] px-8 py-4 flex flex-col items-center pointer-events-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <span className="font-heading text-[9px] tracking-widest uppercase text-[#F5F0E6]/60 mb-2 font-bold">
                Powers these systems
              </span>
              <div className="flex gap-4">
                {activeSkill.projects.map(proj => (
                  <span key={proj} className="font-heading text-xs md:text-sm tracking-[0.2em] font-bold text-[#C88A2D]">
                    {proj}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
