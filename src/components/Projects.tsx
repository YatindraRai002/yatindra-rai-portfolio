import { ExternalLink, Github, Sparkles, Layout, Database, Blocks, Video, Shield, Cpu, Zap, Mic, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "SynapseVideo",
      description: "Multi modal video understanding platform. RAG based search across transcripts and visual frames using Whisper ASR and CLIP embeddings.",
      technologies: ["FastAPI", "Whisper", "CLIP", "Qdrant", "Next.js"],
      status: "Operational",
      gradient: "from-indigo-500/20 to-purple-500/20",
      codeLink: "https://github.com/YatindraRai002/SynapseVideo-Multi-Modal-Video-Understanding-Platform.git",
      liveLink: null,
      icon: Video
    },
    {
      title: "VeraciRAG",
      description: "Truth verified multi-agent RAG system with Guardian -->Generator --> Evaluator loops. Fully local, zero API cost pipeline achieving 89% accuracy.",
      technologies: ["Ollama", "ChromaDB", "BERT", "FAISS", "Python"],
      status: "Verified",
      gradient: "from-cyan-500/20 to-indigo-500/20",
      codeLink: "https://github.com/YatindraRai002/VeraciRAG.git",
      liveLink: null,
      icon: Shield
    },
    {
      title: "NicheForge",
      description: "Automated end to end LLM fine tuning ecosystem. Streamlining synthetic dataset generation, LoRA training via Unsloth, and multi-backend inference.",
      technologies: ["Unsloth", "Llama 3", "Groq", "FastAPI", "React"],
      status: "Stable",
      gradient: "from-amber-500/20 to-orange-500/20",
      codeLink: "https://github.com/YatindraRai002/NicheForge.git",
      liveLink: "https://nicheforge-1.onrender.com/",
      icon: Cpu
    },
    {
      title: "IntelliRoute-AI",
      description: "Intelligent inference router directing prompts to local LLMs or frontier APIs based on complexity. Optimized inference costs by 85% with an event-driven architecture.",
      technologies: ["FastAPI", "Kafka", "Redis", "Ollama", "Docker"],
      status: "Active",
      gradient: "from-orange-500/20 to-red-500/20",
      codeLink: "https://github.com/YatindraRai002/IntelliRoute-AI.git",
      liveLink: null,
      icon: Zap
    },
    {
      title: "RecallVision",
      description: "Voice first AI assistant integrating Whisper based ASR with a RAG pipeline. Modular microservices architecture for real time multilingual querying and intelligent generation.",
      technologies: ["FastAPI", "Whisper", "FAISS", "Llama 3.1", "Streamlit"],
      status: "Deployed",
      gradient: "from-indigo-500/20 to-blue-500/20",
      codeLink: "https://github.com/YatindraRai002/RacallVision.git",
      liveLink: null,
      icon: Mic
    },
    {
      title: "FlowForge-AI",
      description: "Enterprise grade multi agent AI system for autonomous marketing campaigns. Orchestrating specialized agents with real time SSE streaming and Groq powered inference.",
      technologies: ["FastAPI", "Groq", "Multi-Agent", "SSE", "React 19"],
      status: "Stable",
      gradient: "from-purple-500/20 to-indigo-500/20",
      codeLink: "https://github.com/YatindraRai002/FlowForge-AI.git",
      liveLink: "https://flowforge-ai.onrender.com/",
      icon: Workflow
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6 flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Project Archives // Active</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black text-white text-center mb-6 tracking-tight">
            Advanced <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Deployment Units</span>
          </h2>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Selection of high-impact engineering modules</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              {/* Card Backdrop */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/10 group-hover:border-primary/50 transition-colors duration-500" />

              {/* Content */}
              <div className="relative p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 text-white shrink-0 group-hover:scale-110 transition-transform`}>
                    <project.icon size={24} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {project.status}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded-md text-gray-500">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ y: -2 }}
                    href={project.codeLink}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[10px] font-black uppercase tracking-widest transition-all"
                  >
                    <Github size={14} />
                    Source
                  </motion.a>
                  {project.liveLink && (
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={project.liveLink}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(139,92,246,0.3)] transition-all"
                    >
                      <ExternalLink size={14} />
                      Live Hub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
