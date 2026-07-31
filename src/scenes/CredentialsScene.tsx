import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LINKS } from '../config/links';

interface Credential {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

const CREDENTIALS: Credential[] = [
  { id: 'design-thinking', name: 'Design Thinking - A Primer (Elite, Top 5%)', issuer: 'NPTEL', date: '2026', url: LINKS.CERT_DESIGN_THINKING },
  { id: 'mastering-dsa', name: 'Mastering Data Structures & Algorithms using C and C++', issuer: 'Udemy', date: '2025', url: LINKS.CERT_DSA },
  { id: 'java-programmer', name: 'The Complete Java Programmer: From Scratch to Advanced', issuer: 'Udemy', date: '2025', url: LINKS.CERT_JAVA },
  { id: 'c-iitb', name: 'C Programming', issuer: 'IIT Bombay', date: '2024', url: LINKS.CERT_C },
  { id: 'cpp-iitb', name: 'C++ Programming', issuer: 'IIT Bombay', date: '2024', url: LINKS.CERT_CPP }
];

export const CredentialsScene: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Credential | null>(null);

  return (
    <motion.div 
      className="scene-container w-full h-full flex flex-col justify-center items-center text-[#F5F0E6] relative bg-[#0F172A] overflow-y-auto pt-24 pb-16"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="z-10 w-full max-w-7xl px-8 md:px-12 pb-24 h-full">
        <motion.h2 
          className="font-heading text-xs tracking-[0.4em] uppercase font-bold mb-4 text-center text-[#C88A2D]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Certification Archive
        </motion.h2>
        <motion.h1
          className="font-heading text-[clamp(1.75rem,3.5vw,3rem)] font-bold mb-10 text-center text-[#F5F0E6]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AUTHENTICATED RECORDS
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pb-16">
          {CREDENTIALS.map((cert, i) => (
            <motion.div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="relative aspect-[4/3] min-h-[220px] bg-[#0F172A] flex flex-col items-center justify-center cursor-pointer group"
              style={{ perspective: 1000 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1), duration: 0.8 }}
            >
               {/* 3D Frame and Tilt Effect on Hover */}
               <div className="absolute inset-0 border-[8px] border-[#0F172A] shadow-[0_15px_30px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,1)] transition-transform duration-700 ease-out group-hover:rotate-x-[5deg] group-hover:rotate-y-[-5deg] group-hover:scale-105 z-10 pointer-events-none" />
               
               {/* Certificate Paper */}
               <div className="absolute inset-3 bg-[#F5F0E6] border-[4px] border-double border-[#0F172A]/20 transition-all duration-700 ease-out group-hover:rotate-x-[5deg] group-hover:rotate-y-[-5deg] group-hover:scale-105 shadow-inner overflow-hidden flex flex-col items-center justify-center p-6 text-center z-0">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E')] pointer-events-none" />
                  
                  {/* Seal Glow */}
                  <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-[#C88A2D]/20 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border-2 border-dashed border-[#C88A2D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
                     <span className="text-[#C88A2D] text-[8px] font-heading font-bold uppercase rotate-45">SEAL</span>
                  </div>

                  <h3 className="font-heading text-xs md:text-sm font-bold text-[#0F172A] mb-3 leading-snug line-clamp-4">{cert.name}</h3>
                  <div className="flex flex-col gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    <span className="font-heading text-[9px] font-bold tracking-widest text-[#C88A2D] uppercase">{cert.issuer}</span>
                    <span className="font-heading text-[9px] font-bold tracking-widest text-[#0F172A]/50 uppercase">{cert.date}</span>
                  </div>
               </div>
               
               {/* Hover lighting */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Cinematic View */}
      <AnimatePresence>
        {activeCert && (
          <motion.div 
            className="fixed inset-0 z-[200] bg-[#0F172A]/95 flex flex-col items-center justify-center p-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
             <div className="w-full max-w-4xl bg-[#F5F0E6] relative shadow-[0_0_100px_rgba(200,138,45,0.2)] p-12 md:p-20 flex flex-col items-center justify-center border-[12px] border-double border-[#0F172A]/10 text-[#0F172A]"
                  style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E')"
                  }}>
                
                <button 
                  onClick={() => setActiveCert(null)}
                  className="absolute top-8 right-8 text-[#0F172A]/60 hover:text-[#C88A2D] transition-colors font-heading font-bold tracking-widest text-xs uppercase flex items-center gap-2"
                >
                  <span className="w-4 h-[1px] bg-current" />
                  Close Archive
                </button>
                
                <div className="w-16 h-16 border-2 border-[#0F172A]/20 rounded-full flex items-center justify-center mb-12 relative overflow-hidden">
                   <div className="w-8 h-8 border border-[#0F172A]/30 rotate-45" />
                   <div className="absolute inset-0 bg-[#C88A2D]/10" />
                </div>

                <h1 className="font-heading text-[clamp(1.5rem,3vw,3rem)] text-center font-bold mb-10 text-[#0F172A] leading-tight max-w-2xl">{activeCert.name}</h1>
                
                <div className="flex flex-col items-center gap-4 mb-16 border-t border-[#0F172A]/10 pt-8 w-full max-w-md">
                  <p className="font-heading text-sm tracking-[0.2em] text-[#0F172A]/80 uppercase font-bold text-center">Issued By: {activeCert.issuer}</p>
                  <p className="font-heading text-xs tracking-[0.2em] text-[#0F172A]/50 uppercase font-bold text-center">Date of Issue: {activeCert.date}</p>
                </div>
                
                {activeCert.url === '#' ? (
                   <span className="px-10 py-5 bg-[#0F172A]/40 text-[#F5F0E6]/30 font-heading text-sm font-bold tracking-widest uppercase cursor-not-allowed select-none border border-[#F5F0E6]/10">
                     Certificate Not Added
                   </span>
                 ) : (
                   <a href={activeCert.url} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#0F172A] text-[#F5F0E6] font-heading text-sm font-bold tracking-widest uppercase hover:bg-[#C88A2D] transition-colors shadow-2xl relative overflow-hidden group">
                     <span className="relative z-10">View Authenticated Record</span>
                     <div className="absolute inset-0 bg-[#C88A2D] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
                   </a>
                 )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
