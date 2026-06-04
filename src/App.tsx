import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavigationArtifact } from './components/NavigationArtifact';
import { LandingScene } from './scenes/LandingScene';
import { ProjectsScene } from './scenes/ProjectsScene';
import { AboutScene } from './scenes/AboutScene';
import { SkillsScene } from './scenes/SkillsScene';
import { ProofScene } from './scenes/ProofScene';
import { AchievementsScene } from './scenes/AchievementsScene';
import { CredentialsScene } from './scenes/CredentialsScene';
import { ConnectScene } from './scenes/ConnectScene';
import './index.css';

import type { SceneId } from './types/navigation';

function App() {
  const [currentScene, setCurrentScene] = useState<SceneId>('LANDING');

  const renderScene = () => {
    switch (currentScene) {
      case 'LANDING':
        return <LandingScene key="landing" />;
      case 'STORY':
        return <AboutScene key="about" />;
      case 'SYSTEMS':
        return <ProjectsScene key="projects" />;
      case 'ENGINEERING_DNA':
        return <SkillsScene key="skills" />;
      case 'PROOF_OF_PRACTICE':
        return <ProofScene key="proof" />;
      case 'RECOGNITION':
        return <AchievementsScene key="achievements" />;
      case 'CREDENTIALS':
        return <CredentialsScene key="credentials" />;
      case 'OPEN_CHANNELS':
        return <ConnectScene key="connect" />;
      default:
        return <LandingScene key="landing" />;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0F172A]">
      
      {/* Global Grain & Texture Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      {/* Global Brand Anchor (Top Left) */}
      <motion.button
        className="absolute top-8 left-8 md:top-12 md:left-12 z-[150] flex flex-col items-start group outline-none cursor-pointer"
        onClick={() => setCurrentScene('LANDING')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
         <span className="font-heading text-lg md:text-xl font-bold tracking-widest text-[#F5F0E6] group-hover:text-[#C88A2D] transition-colors duration-300 drop-shadow-md">
           SRIVATHSA M
         </span>
         <span className="font-heading text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#F5F0E6]/60 group-hover:text-[#C88A2D]/80 transition-colors duration-300 mt-1">
           Full Stack Engineer
         </span>
      </motion.button>

      {/* Cinematic Scene Transition Container */}
      <AnimatePresence mode="wait">
        {renderScene()}
      </AnimatePresence>

      {/* Global Navigation Artifact */}
      <NavigationArtifact 
        currentScene={currentScene} 
        onSceneChange={setCurrentScene} 
      />
    </div>
  );
}

export default App;
