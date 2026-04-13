import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

const LoadingScreen = () => (
  <div className="fixed inset-0 z-[1000] bg-background flex flex-col items-center justify-center gap-6">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
      <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
    <div className="flex flex-col items-center gap-2">
      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary animate-pulse">Initializing Systems</span>
      <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-primary"
        />
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#050510] text-foreground selection:bg-primary/30 selection:text-white overflow-hidden">
      {/* Universal Background */}
      <ParticleBackground />
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />

      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }}
        >
          <Hero />
          
          <div className="space-y-0">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <About />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Projects />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Skills />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Contact />
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Futuristic Footer */}
      <footer className="relative z-10 py-12 sm:py-20 border-t border-white/5 bg-background/50 backdrop-blur-3xl">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/20 flex items-center justify-center text-primary font-black text-xs">
              YR
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Neural Portfolio // 2026</span>
          </div>
          
          <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] text-center max-w-md leading-relaxed px-4 sm:px-0">
            Architecting the neural fabric of the next generation. <br />
            Engineered with precision, powered by imagination.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-widest">Privacy Protocol</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-widest">System Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
