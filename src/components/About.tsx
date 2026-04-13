import { Award, Target, Users, Binary, Cpu, Network, Sparkles, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { value: "12+", label: "Neural Models", icon: Binary, color: "text-blue-400" },
    { value: "08+", label: "Web Ecosystems", icon: Cpu, color: "text-primary" },
    { value: "100%", label: "System Accuracy", icon: Target, color: "text-pink-400" }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6"
          >
            <Network size={14} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Identity Terminal</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 text-center tracking-tight"
          >
            Decoding My <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Digital Soul</span>
          </motion.h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Binary size={80} />
               </div>
               
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <Sparkles className="text-primary" size={24} />
                 The Mission
               </h3>
               
               <p className="text-gray-400 text-lg leading-relaxed mb-6">
                 I am a <span className="text-white font-bold">Neural Architect</span> and <span className="text-white font-bold">Full-Stack Explorer</span> currently navigating the intersection of artificial intelligence and high-performance web systems. 
                 My journey is fueled by a desire to build <span className="text-primary italic">autonomous experiences</span> that learn, adapt, and empower users.
               </p>
               
               <p className="text-gray-400 text-lg leading-relaxed">
                 Beyond the syntax, I orchestrate complex data flows and design seamless interfaces. I believe that the future of the web lies in its ability to 
                 anticipate human needs through <span className="text-white font-medium uppercase tracking-tighter">Intelligent Design</span>.
               </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-primary/30 transition-colors"
            >
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <BookOpen className="text-blue-400" size={24} />
                 Background Logic
               </h3>
               
               <div className="flex flex-col sm:flex-row gap-6 items-center">
                 <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Award size={40} />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-white leading-tight">S.R.M Institute of Science and Technology</h4>
                    <p className="text-primary font-black text-xs uppercase tracking-widest mt-1">B.Tech in Computer Science</p>
                    <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                       <Target size={14} />
                       <span>Chennai, India • Class of 2024</span>
                    </div>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Stats & Core Values */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-6 group hover:bg-white/10 transition-all cursor-default"
                >
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <stat.icon size={28} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white tracking-widest">{stat.value}</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-primary/20 via-transparent to-blue-500/10 border border-white/10 backdrop-blur-3xl relative overflow-hidden"
            >
               <h4 className="text-white font-bold mb-4 uppercase tracking-[0.2em] text-xs">Operational DNA</h4>
               <ul className="space-y-4">
                 {[
                   { t: "Deep Synthesis", d: "Merging AI with React Ecosystems" },
                   { t: "Quantum UI", d: "Ultra-responsive, glassmorphic interfaces" },
                   { t: "Neural Flow", d: "Optimized data processing pipelines" }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4">
                      <div className="w-1 h-auto bg-primary rounded-full self-stretch" />
                      <div>
                         <div className="text-white font-bold text-sm">{item.t}</div>
                         <div className="text-gray-500 text-xs">{item.d}</div>
                      </div>
                   </li>
                 ))}
               </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
