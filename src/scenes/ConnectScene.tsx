import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../config/links';

export const ConnectScene: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputClass = "w-full bg-[#0F172A] border-b-2 outline-none font-body text-[#F5F0E6] py-3 px-2 transition-all duration-300 placeholder-[#F5F0E6]/30";
  const getBorderColor = (field: string) => focusedField === field ? 'border-[#C88A2D]' : 'border-[#F5F0E6]/20';

  return (
    <motion.div 
      className="scene-container w-full h-full flex flex-col items-center justify-center text-[#F5F0E6] relative bg-[#0F172A] overflow-y-auto pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="z-10 w-full max-w-7xl px-8 md:px-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* Left Side: Contact Details */}
        <motion.div 
          className="flex-1 flex flex-col pt-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
           <h2 className="font-heading text-xs tracking-[0.4em] uppercase font-bold text-[#C88A2D] mb-4">
             Let's Connect
           </h2>
           <h1 className="font-heading text-[clamp(2.5rem,4vw,4rem)] font-bold leading-[1.1] text-[#F5F0E6] mb-8">
             CONNECT
           </h1>
           <p className="font-body text-[#F5F0E6]/70 text-lg leading-relaxed max-w-md mb-12">
             Open for internships, software engineering opportunities, collaboration, and technical discussions. Feel free to reach out.
           </p>

           <div className="flex flex-col gap-6 font-heading tracking-widest text-xs uppercase font-bold text-[#F5F0E6]">
             <a href={LINKS.EMAIL} className="flex items-center gap-6 group">
               <span className="w-8 h-[1px] bg-[#C88A2D]/40 group-hover:bg-[#C88A2D] group-hover:w-12 transition-all duration-300" />
               <span className="text-[#F5F0E6]/50 w-20">Email</span>
               <span className="group-hover:text-[#C88A2D] transition-colors">{LINKS.EMAIL.replace('mailto:', '')}</span>
             </a>
             <a href={LINKS.PHONE} className="flex items-center gap-6 group">
               <span className="w-8 h-[1px] bg-[#C88A2D]/40 group-hover:bg-[#C88A2D] group-hover:w-12 transition-all duration-300" />
               <span className="text-[#F5F0E6]/50 w-20">Phone</span>
               <span className="group-hover:text-[#C88A2D] transition-colors">{LINKS.PHONE.replace('tel:', '')}</span>
             </a>
             <a href={LINKS.LINKEDIN_MAIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
               <span className="w-8 h-[1px] bg-[#C88A2D]/40 group-hover:bg-[#C88A2D] group-hover:w-12 transition-all duration-300" />
               <span className="text-[#F5F0E6]/50 w-20">LinkedIn</span>
               <span className="group-hover:text-[#C88A2D] transition-colors">linkedin.com/in/srivathsam</span>
             </a>
             <a href={LINKS.GITHUB_MAIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
               <span className="w-8 h-[1px] bg-[#C88A2D]/40 group-hover:bg-[#C88A2D] group-hover:w-12 transition-all duration-300" />
               <span className="text-[#F5F0E6]/50 w-20">GitHub</span>
               <span className="group-hover:text-[#C88A2D] transition-colors">github.com/srivathsa</span>
             </a>
             <div className="flex items-center gap-6 group">
               <span className="w-8 h-[1px] bg-[#C88A2D]/40 group-hover:bg-[#C88A2D] group-hover:w-12 transition-all duration-300" />
               <span className="text-[#F5F0E6]/50 w-20">Location</span>
               <span className="group-hover:text-[#C88A2D] transition-colors">Tamil Nadu, India</span>
             </div>
             <div className="flex gap-4 mt-4 border-t border-[#F5F0E6]/10 pt-6">
               <a href={LINKS.RESUME_VIEW} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#C88A2D] bg-[#C88A2D]/10 hover:bg-[#C88A2D] text-[#F5F0E6] hover:text-[#0F172A] transition-colors duration-300 font-heading text-[9px] tracking-widest uppercase font-bold text-center">
                 View Resume
               </a>
               <a href={LINKS.RESUME_DOWNLOAD} download className="px-5 py-2.5 border border-[#F5F0E6]/20 hover:border-[#F5F0E6]/60 text-[#F5F0E6]/80 hover:text-[#F5F0E6] transition-colors duration-300 font-heading text-[9px] tracking-widest uppercase font-bold text-center">
                 Download Resume
               </a>
             </div>
           </div>
        </motion.div>

        {/* Right Side: Contact Form UI */}
        <motion.div 
          className="flex-1 bg-[#F5F0E6]/5 border border-[#F5F0E6]/10 p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C88A2D] opacity-[0.03] blur-[40px] pointer-events-none" />
          
          <form className="relative z-10 flex flex-col gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
             
             <div className="flex flex-col md:flex-row gap-8">
               <div className="flex-1 relative">
                 <input 
                   type="text" 
                   placeholder="Name" 
                   className={`${inputClass} ${getBorderColor('name')}`}
                   onFocus={() => setFocusedField('name')}
                   onBlur={() => setFocusedField(null)}
                 />
               </div>
               <div className="flex-1 relative">
                 <input 
                   type="email" 
                   placeholder="Email" 
                   className={`${inputClass} ${getBorderColor('email')}`}
                   onFocus={() => setFocusedField('email')}
                   onBlur={() => setFocusedField(null)}
                 />
               </div>
             </div>

             <div className="w-full relative">
               <input 
                 type="text" 
                 placeholder="Subject" 
                 className={`${inputClass} ${getBorderColor('subject')}`}
                 onFocus={() => setFocusedField('subject')}
                 onBlur={() => setFocusedField(null)}
               />
             </div>

             <div className="w-full relative h-32">
               <textarea 
                 placeholder="Message" 
                 className={`${inputClass} h-full resize-none ${getBorderColor('message')}`}
                 onFocus={() => setFocusedField('message')}
                 onBlur={() => setFocusedField(null)}
               />
             </div>

             <button 
               className="mt-4 px-8 py-4 border border-[#C88A2D] bg-[#0F172A] text-[#C88A2D] hover:bg-[#C88A2D] hover:text-[#0F172A] transition-all duration-300 font-heading text-xs tracking-widest uppercase font-bold self-start group flex items-center gap-4 shadow-[0_0_15px_rgba(200,138,45,0.1)] hover:shadow-[0_0_20px_rgba(200,138,45,0.3)]"
             >
               <span>Send Message</span>
               <div className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-300" />
             </button>
          </form>

        </motion.div>

      </div>
    </motion.div>
  );
};
