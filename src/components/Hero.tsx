import { useState, useEffect } from "react";
import { Github, Linkedin, ChevronDown, Rocket, Cpu, Sparkles, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "AI/ML Engineer",
    "Neural Architect", 
    "Data Scientist",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">System Ready: AI Core Active</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-white">
              Innovating the <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-gradient-x">
                Digital Frontier
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 text-xl sm:text-2xl text-gray-400 font-medium mb-8">
              <span className="opacity-50 tracking-widest text-sm uppercase">I am a</span>
              <div className="relative inline-flex min-w-[200px]">
                <span className="text-white font-bold tracking-tight">{displayText}</span>
                <span className="w-1 h-8 bg-primary ml-1 animate-pulse" />
              </div>
            </div>

            <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Expertise in crafting sophisticated neural architectures and immersive digital experiences. Bridging the gap between 
              <span className="text-white font-semibold"> data intelligence </span> and <span className="text-white font-semibold"> human-centric design</span>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-2xl flex items-center gap-3"
              >
                Explore Workspace
                <Rocket size={16} />
              </motion.a>
              
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, link: "https://github.com/YatindraRai002" },
                  { icon: Linkedin, link: "https://www.linkedin.com/in/yatindra-rai-6a3181324/" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                    href={social.link}
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-2xl text-white/50 hover:text-white transition-colors backdrop-blur-md"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Rotating Rings */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[450px] h-[450px] border border-white/5 rounded-full animate-rotate-slow" />
              <div className="absolute w-[350px] h-[350px] border border-primary/20 rounded-full animate-rotate-slow [animation-direction:reverse]" />
              <div className="absolute w-[250px] h-[250px] border border-white/5 rounded-full animate-rotate-slow" />
            </div>

            {/* Central Node */}
            <div className="relative w-80 h-80">
               <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
               <motion.div 
                 animate={{ 
                   y: [0, -20, 0],
                   rotate: [0, 5, 0]
                 }}
                 transition={{ 
                   duration: 6, 
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
                 className="relative w-full h-full p-4 rounded-[40px] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl flex items-center justify-center group"
               >
                 <img
                   src="/lovable-uploads/a4c5b697-fb03-4d6a-b15e-bd3e701ae34b.png"
                   alt="Profile"
                   className="w-full h-full object-cover rounded-[32px] grayscale group-hover:grayscale-0 transition-all duration-700"
                 />
                 
                 {/* Floating Badges */}
                 <div className="absolute -top-6 -right-6 w-20 h-20 bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-primary shadow-xl animate-float">
                   <BrainCircuit size={32} />
                 </div>
                 <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 shadow-xl animate-float delay-1000">
                   <Cpu size={24} />
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Initiate Scroll Sequence</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/10 rounded-full p-1 flex justify-center"
        >
          <div className="w-1 h-2 bg-primary rounded-full mt-1" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
