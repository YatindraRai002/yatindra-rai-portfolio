import { Terminal, Brain, Server, Layers, Wrench, Shield, MessageSquare, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguistic Core",
      skills: ["C","C++", "Python","Java"],
      icon: Terminal,
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      title: "Neural Architecture",
      skills: [
        "GenAI", 
        "LLM Fine-Tuning (LoRA)", 
        "RAG Pipelines", 
        "Multi-Agent Systems", 
        "LLM Evaluation", 
        "EEG:Representation Learning",
        "Deep Learning",
        "Machine Learning",
       "PyTorch",
        "TensorFlow"
        
      ],
      icon: Brain,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Backend Nexus",
      skills: ["FastAPI", "Python", "RESTful APIs", "PyTorch", "Uvicorn"],
      icon: Server,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      title: "Frontend Matrix",
      skills: ["Next.js", "React.js", "TailwindCSS"],
      icon: Layers,
      color: "text-pink-400",
      bg: "bg-pink-400/10"
    },
    {
      title: "AI Ecosystem",
      skills: ["Groq API", "Ollama", "Unsloth", "HuggingFace", "FAISS"],
      icon: Wrench,
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      title: "CyberOps /Tools",
      skills: ["Docker", "Git", "GitHub", "Render "],
      icon: Shield,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10"
    },
    {
      title: "Neural Plugins",
      skills: [
        "Problem-Solving",
        "Quick Learner",
        "Team Collaborator",
        "Clear Communication",
        "Analytical Thinking"
      ],
      icon: MessageSquare,
      color: "text-orange-400",
      bg: "bg-orange-400/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 border-b border-white/5 pb-12 gap-8">
           <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <div className="w-8 h-px bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Technical Schematics</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black text-white tracking-tight">
                Skill <span className="text-gray-600">Inventory</span>
              </h2>
           </div>
           <div className="hidden lg:block text-right">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-loose">
                System Latency: 0.02ms <br />
                Process Capacity: 99.9% <br />
                Build Version: 2.0.26
              </p>
           </div>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                rotateY: index % 2 === 0 ? 5 : -5,
                rotateX: 3,
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="p-6 sm:p-8 rounded-3xl lg:rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl group hover:border-primary/50 transition-all duration-500 overflow-hidden relative perspective-1000"
            >
               {/* Decorative Element */}
               <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                  <category.icon size={120} />
               </div>

               <motion.div 
                 whileHover={{ rotate: 360, scale: 1.1 }}
                 transition={{ type: "spring", stiffness: 260, damping: 20 }}
                 className={`w-12 h-12 rounded-2xl ${category.bg} ${category.color} flex items-center justify-center mb-8 border border-white/5 shadow-lg group-hover:shadow-primary/20`}
               >
                  <category.icon size={24} />
               </motion.div>

               <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {category.title}
               </h3>

               <div className="flex flex-col gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (i * 0.05) }}
                      className="flex items-center gap-3 group/skill cursor-default"
                    >
                       <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover/skill:bg-primary transition-colors" />
                       <span className="text-gray-400 text-xs font-bold uppercase tracking-widest group-hover/skill:text-white transition-colors">
                          {skill}
                       </span>
                    </motion.div>
                  ))}
               </div>

               {/* Interaction Indicator */}
               <div className="mt-12 flex justify-end">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-primary group-hover:border-primary/50 transition-all"
                  >
                     <Share2 size={12} />
                  </motion.div>
               </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Analytical Display Overlay */}
        <div className="mt-24 p-8 rounded-[32px] bg-gradient-to-r from-primary/10 to-transparent border border-white/5 flex flex-wrap gap-12 items-center justify-center lg:justify-between">
            {[
              { label: "Algorithms", val: "Elite" },
              { label: "Architecture", val: "Scalable" },
              { label: "AI Integration", val: "Native" },
              { label: "Cloud Logic", val: "Active" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 text-center">
                 <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</span>
                 <span className="text-xl font-black text-white tracking-widest uppercase">{stat.val}</span>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
