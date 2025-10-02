
import { ExternalLink, Github } from "lucide-react";

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
      liveLink: null
    },
    {
      title: "Trivinity Web Development Quiz App",
      description: "Built an interactive quiz application to test web development knowledge covering HTML, CSS, JavaScript, and frameworks. Implemented dynamic question generation, real-time scoring system, and detailed results analysis.",
      technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
      highlights: [
        "Dynamic question generation",
        "Real-time scoring system",
        "Modular React components with optimal UX"
      ],
      gradient: "from-blue-600 to-purple-600",
      codeLink: "https://github.com/YatindraRai002/Quiz",
      liveLink: "https://quiz-iota-two-27.vercel.app/"
    },
    {
      title: "Stock Market Prediction NIFTY 50 Index",
      description: "Developed a machine learning model using Linear Regression to predict NIFTY 50 index movements. Performed comprehensive data preprocessing, feature selection, and model evaluation.",
      technologies: ["Python", "Linear Regression", "scikit-learn", "Data Visualization"],
      highlights: [
        "Achieved high predictive accuracy (R = 0.9999)",
        "Comprehensive data preprocessing",
        "Effective visualization of actual vs. predicted prices"
      ],
      gradient: "from-orange-600 to-red-600",
      codeLink: "https://github.com/YatindraRai002/STOCK-MARKET-PREDICTION",
      liveLink: null
    },
    {
      title: "Expense Tracker",
      description: "The Expense Tracker helps you easily track your spending and manage your budget. Record expenses, categorize them, and get a clear view of your financial activity over time. Stay organized and make smarter financial decisions with a simple, user-friendly tool to monitor your finances.",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Easy expense tracking and categorization",
        "Clear financial activity overview",
        "User-friendly interface for budget management"
      ],
      gradient: "from-teal-600 to-cyan-600",
      codeLink: "https://github.com/YatindraRai002/expense-tracker",
      liveLink: "https://expense-tracker-jade-tau.vercel.app/"
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
      liveLink: "https://spotify-clone-kohl-five.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, machine learning, and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
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
