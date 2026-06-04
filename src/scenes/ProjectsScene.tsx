import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LINKS } from '../config/links';

const PROJECTS = [
  {
    id: 'GRIDFLOW',
    title: 'GRIDFLOW',
    subtitle: 'AI-Powered Observability SaaS Platform',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Docker'],
    sections: {
      Overview: 'Organizations lack centralized visibility into distributed infrastructure, leading to delayed incident response and fragmented telemetry.',
      Problem: 'Debugging microservices across multiple clusters is extremely inefficient without a unified topology view.',
      WhyItMatters: 'System downtime costs enterprise businesses thousands of dollars per minute. Real-time observability is mission-critical.',
      Solution: 'A multi-tenant observability SaaS platform enabling intelligent agent deployment and centralized health visualization.',
      Architecture: 'Distributed agent network sending real-time telemetry over WebSockets to a Node.js orchestration layer, stored in MongoDB for AI analysis.',
      KeyFeatures: 'Secure provisioning, JWT authentication, organization isolation, AI-powered incident intelligence, real-time alerting.',
      Challenges: 'Handling high-throughput WebSocket events without dropping telemetry packets while maintaining low latency.',
      Impact: 'Reduced incident detection time and provided a unified topology view for enterprise architectures.'
    },
    color: '#8B5CF6',
    workflow: ['Agents', 'Telemetry Collection', 'Processing Layer', 'AI Analysis', 'Dashboards', 'Incident Intelligence'],
    links: { live: LINKS.GRIDFLOW_LIVE, github: LINKS.GRIDFLOW_GITHUB }
  },
  {
    id: 'HIREBRIDGE',
    title: 'HIREBRIDGE',
    subtitle: 'AI-Powered Recruitment Platform',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    sections: {
      Overview: 'Manual recruitment pipelines suffer from extreme inefficiency and biased candidate ranking.',
      Problem: 'HR teams spend hundreds of hours manually screening resumes that do not match the job requirements.',
      WhyItMatters: 'Finding the right talent quickly is the biggest competitive advantage for any technology company.',
      Solution: 'An AI-driven platform automating resume parsing, ATS scoring, and candidate filtering.',
      Architecture: 'React frontend interfacing with an Express backend, utilizing NLP libraries for resume parsing and MongoDB for pipeline state management.',
      KeyFeatures: 'ATS scoring, eligibility filtering, candidate ranking, recruiter workflows, student portals, interview scheduling.',
      Challenges: 'Extracting clean text data from varying PDF and DOCX resume formats accurately.',
      Impact: 'Accelerated hiring timelines and provided objective, AI-driven hiring insights.'
    },
    color: '#10B981',
    workflow: ['Resume Upload', 'Resume Parsing', 'ATS Scoring', 'Eligibility Filtering', 'Candidate Ranking', 'Interview Pipeline'],
    links: { live: LINKS.HIREBRIDGE_LIVE, github: LINKS.HIREBRIDGE_GITHUB }
  },
  {
    id: 'TRACELOCK',
    title: 'TRACELOCK',
    subtitle: 'Dependency Threat Intelligence Platform',
    stack: ['React', 'TypeScript', 'Node.js', 'Fastify', 'PostgreSQL', 'Prisma'],
    sections: {
      Overview: 'Software supply chains are increasingly vulnerable to deeply nested dependency exploits.',
      Problem: 'Developers rarely audit the hundreds of transitive dependencies installed via NPM or PyPI.',
      WhyItMatters: 'Supply chain attacks can compromise entire production networks through a single malicious package update.',
      Solution: 'A platform that scans package manifests and lockfiles to perform attack-path analysis and visualize risks.',
      Architecture: 'Fastify high-throughput API analyzing dependency graphs, correlating with OSV vulnerability databases, backed by PostgreSQL.',
      KeyFeatures: 'Dependency scan, OSV vulnerability detection, attack-path analysis, enterprise-grade dashboards.',
      Challenges: 'Recursively parsing massive dependency trees efficiently without timing out the API response.',
      Impact: 'Prevented supply chain exploits by identifying nested risks before deployment.'
    },
    color: '#C88A2D',
    workflow: ['Package Scan', 'Dependency Analysis', 'Vulnerability Detection', 'Attack Path Discovery', 'Risk Intelligence', 'Security Dashboard'],
    links: { live: LINKS.TRACELOCK_LIVE, github: LINKS.TRACELOCK_GITHUB }
  }
];

export const ProjectsScene: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (activeProject) {
      setContentVisible(false);
      // Ensure architecture assembles FIRST before content appears
      const timer = setTimeout(() => setContentVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [activeProject]);

  return (
    <motion.div 
      className="scene-container w-full h-full text-[#F5F0E6] flex bg-[#0F172A] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      <div className="w-full h-full flex flex-col lg:flex-row px-4 md:px-12 py-20 lg:py-12 gap-4 md:gap-6 z-10 pt-40 lg:pt-32 overflow-y-auto lg:overflow-hidden">
        
        {PROJECTS.map((project) => {
          const isHovered = hoveredProject === project.id;
          const isAnyHovered = hoveredProject !== null;
          const isFaded = isAnyHovered && !isHovered;

          return (
            <motion.div
              key={project.id}
              className="relative w-full lg:flex-1 h-[60vh] lg:h-full border border-[#F5F0E6]/10 overflow-hidden cursor-pointer group flex-shrink-0"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setActiveProject(project)}
              animate={{
                flex: isHovered ? (window.innerWidth > 1024 ? 1.8 : 1) : 1,
                opacity: isFaded ? 0.3 : 1,
                borderColor: isHovered ? `${project.color}80` : 'rgba(245, 240, 230, 0.1)',
                filter: isFaded ? 'grayscale(100%) blur(4px)' : 'grayscale(100%) blur(0px)',
              }}
              whileHover={{ filter: 'grayscale(0%) blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Default monochrome overlay vs hover color */}
              <div className="absolute inset-0 bg-[#0F172A] z-10 pointer-events-none" />

              <motion.div 
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{ opacity: isHovered ? 0.8 : 0.0 }}
                style={{ background: `linear-gradient(to top, ${project.color}, transparent)` }}
                transition={{ duration: 0.8 }}
              />

              {/* Animated workflows on hover */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      className="absolute inset-0 flex flex-col justify-start items-start p-8 md:p-12 pt-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {project.workflow.map((step, index) => (
                        <div key={index} className="flex items-center gap-4 mb-4">
                           <motion.div 
                             className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
                             style={{ backgroundColor: project.color, color: project.color }}
                             initial={{ scale: 0 }}
                             animate={{ scale: [0, 1.5, 1] }}
                             transition={{ delay: index * 0.15, duration: 0.5 }}
                           />
                           <motion.span 
                             className="font-heading text-[10px] md:text-xs tracking-widest uppercase font-bold text-[#F5F0E6] bg-[#0F172A]/50 px-2 py-1 rounded-sm"
                             initial={{ x: -20, opacity: 0 }}
                             animate={{ x: 0, opacity: 1 }}
                             transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
                           >
                             {step}
                           </motion.span>
                           
                           {index < project.workflow.length - 1 && (
                             <motion.div 
                               className="absolute w-[1px] h-8 ml-1 mt-6"
                               style={{ backgroundColor: `${project.color}40` }}
                               initial={{ height: 0 }}
                               animate={{ height: 24 }}
                               transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                             >
                                <motion.div 
                                  className="w-full h-1/2"
                                  style={{ backgroundColor: project.color }}
                                  animate={{ y: [0, 24] }}
                                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                />
                             </motion.div>
                           )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent">
                <motion.div
                  animate={{ y: isHovered ? -10 : 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="font-heading tracking-[0.2em] text-[10px] md:text-xs font-bold mb-3 md:mb-4 uppercase text-[#F5F0E6]/50">
                    {project.subtitle}
                  </h3>
                  
                  <h2 className="font-heading text-[clamp(2rem,4vw,4rem)] font-bold mb-4 tracking-tight leading-none text-[#F5F0E6]">
                    {project.title}
                  </h2>
                  
                  <motion.div 
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isHovered ? 'auto' : 0, 
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? '1rem' : '0rem'
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-4 mt-4 text-[#F5F0E6]/80 hover:text-[#C88A2D] transition-colors" style={{ color: isHovered ? project.color : '' }}>
                      <span className="w-12 h-[1px] bg-current shadow-[0_0_5px_currentColor]"></span>
                      <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Open Chamber</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-[0.02]">
        <h1 className="font-heading text-[clamp(4rem,15vw,15rem)] font-bold leading-none select-none text-[#F5F0E6]">
          SYSTEMS
        </h1>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="fixed inset-0 z-[200] bg-[#0F172A] flex flex-col md:flex-row overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveProject(null);
                setContentVisible(false);
              }}
              className="absolute top-8 right-8 text-[#F5F0E6]/60 hover:text-[#C88A2D] font-heading tracking-widest text-[10px] md:text-xs uppercase z-[250] flex items-center gap-4 transition-colors bg-[#0F172A]/80 px-4 py-2 border border-[#F5F0E6]/10"
            >
              <span>Close Chamber</span>
              <div className="w-8 h-[1px] bg-current" />
            </button>

            {/* Left: Sticky Architecture Canvas */}
            <div className="w-full md:w-[45%] h-[40vh] md:h-full relative border-b md:border-r border-[#F5F0E6]/10 bg-[#0F172A] flex items-center justify-center p-8 md:p-16 overflow-hidden">
               {/* Grid Background */}
               <motion.div 
                 className="absolute inset-0 opacity-20"
                 initial={{ scale: 1.5, opacity: 0, rotateX: 60 }}
                 animate={{ scale: 1, opacity: 0.2, rotateX: 0 }}
                 transition={{ duration: 1.5, ease: 'easeOut' }}
                 style={{
                   backgroundImage: `linear-gradient(${activeProject.color} 1px, transparent 1px), linear-gradient(90deg, ${activeProject.color} 1px, transparent 1px)`,
                   backgroundSize: '80px 80px',
                   perspective: '1000px'
                 }}
               />
               
               {/* Visual Nodes & Flow */}
               <div className="relative z-10 w-full max-w-sm flex flex-col gap-6">
                 <h3 className="font-heading text-[10px] tracking-widest uppercase text-[#F5F0E6]/50 mb-4 font-bold border-b border-[#F5F0E6]/10 pb-2">
                   System Flow Visualization
                 </h3>
                 
                 {activeProject.workflow.map((node, index) => (
                   <motion.div 
                     key={node}
                     className="flex items-center gap-6 relative"
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: index * 0.2, duration: 0.8 }}
                   >
                     {/* Connecting Line */}
                     {index !== activeProject.workflow.length - 1 && (
                       <div className="absolute left-[11px] top-8 bottom-[-24px] w-[2px] bg-[#F5F0E6]/10 z-0 overflow-hidden">
                          <motion.div 
                            className="w-full h-10" 
                            style={{ backgroundColor: activeProject.color }}
                            animate={{ y: [-40, 100] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                          />
                       </div>
                     )}
                     
                     <div className="w-6 h-6 rounded-sm border flex items-center justify-center z-10 bg-[#0F172A]"
                          style={{ borderColor: activeProject.color }}>
                        <motion.div 
                          className="w-2 h-2"
                          style={{ backgroundColor: activeProject.color }}
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                     </div>
                     <span className="font-heading text-xs md:text-sm tracking-widest uppercase font-bold text-[#F5F0E6] drop-shadow-lg">
                       {node}
                     </span>
                   </motion.div>
                 ))}
               </div>
            </div>

            {/* Right: Scrolling Content */}
            <div className="w-full md:w-[55%] h-[60vh] md:h-full overflow-y-auto px-8 md:px-24 py-16 md:py-32 bg-[#0F172A] relative">
              <AnimatePresence>
                {contentVisible && (
                  <motion.div 
                    className="flex flex-col max-w-3xl pb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  >
                     <div className="mb-16">
                        <h4 className="font-heading text-xs tracking-[0.3em] uppercase mb-4 font-bold" style={{ color: activeProject.color }}>{activeProject.subtitle}</h4>
                        <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#F5F0E6] mb-8 leading-none tracking-tight">{activeProject.title}</h2>
                        
                        {/* Links */}
                         <div className="flex gap-4">
                            {activeProject.links.live === '#' ? (
                              <span className="px-6 py-3 border border-[#F5F0E6]/10 bg-[#F5F0E6]/5 text-[#F5F0E6]/30 font-heading text-[10px] md:text-xs tracking-widest uppercase font-bold cursor-not-allowed select-none">
                                Coming Soon
                              </span>
                            ) : (
                              <a href={activeProject.links.live} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-[#F5F0E6]/20 bg-[#F5F0E6]/5 hover:bg-[#F5F0E6]/10 hover:border-[#F5F0E6]/40 text-[#F5F0E6] font-heading text-[10px] md:text-xs tracking-widest uppercase font-bold transition-all">
                                Live Platform
                              </a>
                            )}
                            {activeProject.links.github === '#' ? (
                              <span className="px-6 py-3 border border-[#F5F0E6]/10 text-[#F5F0E6]/30 font-heading text-[10px] md:text-xs tracking-widest uppercase font-bold cursor-not-allowed select-none">
                                Coming Soon
                              </span>
                            ) : (
                              <a href={activeProject.links.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-[#F5F0E6]/20 text-[#F5F0E6]/60 hover:text-[#F5F0E6] font-heading text-[10px] md:text-xs tracking-widest uppercase font-bold transition-all">
                                GitHub
                              </a>
                            )}
                         </div>
                     </div>

                     <div className="flex flex-col gap-12 font-body text-[#F5F0E6]/80 text-[clamp(0.9rem,1.2vw,1.1rem)] leading-relaxed font-medium">
                        
                        <div className="flex flex-col gap-3">
                           <h3 className="font-heading text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5F0E6]/40">Overview</h3>
                           <p>{activeProject.sections.Overview}</p>
                        </div>
                        
                        <div className="flex flex-col gap-3 border-l-2 pl-6" style={{ borderColor: `${activeProject.color}80` }}>
                           <h3 className="font-heading text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: activeProject.color }}>Problem</h3>
                           <p className="text-[#F5F0E6]">{activeProject.sections.Problem}</p>
                        </div>

                        <div className="flex flex-col gap-3 border-l-2 border-[#C88A2D]/80 pl-6">
                           <h3 className="font-heading text-[10px] uppercase tracking-[0.2em] font-bold text-[#C88A2D]">Why It Matters</h3>
                           <p className="text-[#F5F0E6]">{activeProject.sections.WhyItMatters}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                           <h3 className="font-heading text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5F0E6]/40">Solution</h3>
                           <p>{activeProject.sections.Solution}</p>
                        </div>

                        <div className="bg-[#F5F0E6]/5 border border-[#F5F0E6]/10 p-8 md:p-12 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.05] blur-[40px]" style={{ backgroundColor: activeProject.color }} />
                           
                           <div className="mb-8">
                              <h3 className="font-heading text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5F0E6]/40 mb-3 border-b border-[#F5F0E6]/10 pb-3">Architecture & Tech Stack</h3>
                              <p className="mb-4">{activeProject.sections.Architecture}</p>
                              <div className="flex flex-wrap gap-2">
                                {activeProject.stack.map(tech => (
                                  <span key={tech} className="px-2 py-1 bg-[#0F172A] border border-[#F5F0E6]/20 text-[#F5F0E6] text-[10px] tracking-widest uppercase font-heading font-bold">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                           </div>
                           
                           <div className="mb-8">
                              <h3 className="font-heading text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5F0E6]/40 mb-3 border-b border-[#F5F0E6]/10 pb-3">Key Features</h3>
                              <p>{activeProject.sections.KeyFeatures}</p>
                           </div>

                           <div>
                              <h3 className="font-heading text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5F0E6]/40 mb-3 border-b border-[#F5F0E6]/10 pb-3">Engineering Challenges</h3>
                              <p>{activeProject.sections.Challenges}</p>
                           </div>
                        </div>

                        <div className="flex flex-col gap-3">
                           <h3 className="font-heading text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5F0E6]/40">Impact</h3>
                           <p className="text-[#F5F0E6] font-bold text-[clamp(1rem,1.5vw,1.3rem)]">{activeProject.sections.Impact}</p>
                        </div>

                     </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};
