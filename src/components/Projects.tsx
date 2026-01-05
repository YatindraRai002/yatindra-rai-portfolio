
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Green AI",
      description: "Developed a U-Net-based machine learning pipeline to detect saplings and estimate survival rates from drone imagery. Implemented geospatial visualization and parallel image analysis for scalable monitoring of afforestation efforts.",
      technologies: ["Python", "PyTorch", "U-Net","Cuda", "Image Processing"],
      highlights: [
        "Achieved accurate localization of dead saplings",
        "Contributing to environmental conservation initiatives",
        "Scalable monitoring system"
      ],
      gradient: "from-green-600 to-emerald-600",
      codeLink: "https://github.com/YatindraRai002/greenaimodel",
      liveLink: null,
      emoji: "🌱"
    },
    {
      title: "AuraCare Hospital Management System",
      description: "Built a full-stack Hospital Management System using React 19, Node.js, Express.js, and MongoDB (MERN). Implemented JWT authentication, bcrypt password hashing & Role-Based Access Control for secure login (Admin/Doctor/Patient).",
      technologies: ["React", "MongoDB", "Node.js", "Express.js", "JWT", "Cloudinary"],
      highlights: [
        "Patient Portal & Admin Dashboard with responsive UI/UX",
        "AI chatbot for automatic department recommendations based on symptoms",
        "RESTful APIs with real-time notifications using Notistack & Axios interceptors"
      ],
      gradient: "from-blue-600 to-cyan-600",
      codeLink: "https://github.com/YatindraRai002/Hospital-Management-System.git",
      liveLink: null,
      emoji: "🏥"
    },
    {
      title: "NLP Fusion",
      description: "Developed a collection of NLP projects including Spam SMS detection, Fake News classification, Movie Genre multi-label classification, Sentiment Analysis of restaurant reviews, and Stock Market Sentiment Analysis. Implemented end-to-end pipelines with text preprocessing and feature engineering.",
      technologies: ["Python", "Logistic Regression", "scikit-learn", "Naive Bayes", "TF-IDF", "LSTM"],
      highlights: [
        "Achieved up to 99% accuracy across multiple NLP tasks",
        "End-to-end pipelines with advanced feature engineering",
        "Deployed models using Flask/Streamlit for real-world applicability"
      ],
      gradient: "from-purple-600 to-pink-600",
      codeLink: "https://github.com/YatindraRai002/NLP-Projects.git",
      liveLink: null,
      emoji: "🤖"
    },
    {
      title: "Kala-Kart",
      description: "AI-Powered Artisan Discovery Platform connecting 50,000+ traditional Indian artisans with customers using Google Gemini AI for natural language search. Built React/TypeScript frontend and Flask REST API backend with RAG-based conversational AI.",
      technologies: ["TypeScript", "React", "Python", "Flask", "Google Gemini AI", "Tailwind CSS", "Firebase"],
      highlights: [
        "Reduced artisan discovery time by 80% with zero-commission connections",
        "Multi-language NLP (Hindi/English) with 90% query accuracy",
        "Analytics dashboard tracking 38 craft categories across 28 states"
      ],
      gradient: "from-orange-600 to-red-600",
      codeLink: "https://github.com/YatindraRai002/Local-Artisian-AI.git",
      liveLink: null,
      emoji: "🎨"
    },
    {
      title: "Spotify Clone",
      description: "A fully functional Spotify clone that replicates the core features of the popular music streaming platform. Built with modern web technologies to provide an authentic user experience with music playback and playlist management.",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Authentic Spotify-like user interface",
        "Music playback functionality",
        "Responsive design for all devices"
      ],
      gradient: "from-emerald-600 to-green-600",
      codeLink: "https://github.com/YatindraRai002/Spotify-Clone",
      liveLink: "https://spotify-clone-kohl-five.vercel.app/",
      emoji: "🎵"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-slate-900 to-pink-900/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills in web development, machine learning, and AI. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-xl border border-purple-500/30 group-hover:border-purple-400/60 overflow-hidden transition-all duration-300 shadow-xl group-hover:shadow-2xl h-full flex flex-col">
                {/* Top accent bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6 lg:p-7 flex flex-col flex-grow">
                  {/* Header with emoji and title */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl">{project.emoji}</span>
                        <Sparkles className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-5 leading-relaxed text-sm lg:text-base flex-grow">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5 bg-slate-900/40 rounded-lg p-3 border border-purple-500/20">
                    <h4 className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-widest">Highlights</h4>
                    <ul className="space-y-1.5">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                          <span className="text-purple-400 mt-1 flex-shrink-0">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 text-xs font-medium rounded-full border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 group-hover:bg-purple-600/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/60 hover:bg-slate-600/80 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50 group/link"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/60 to-pink-600/60 hover:from-purple-600/80 hover:to-pink-600/80 text-white rounded-lg transition-all duration-300 border border-purple-500/50 hover:border-purple-400/80 group/link"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
