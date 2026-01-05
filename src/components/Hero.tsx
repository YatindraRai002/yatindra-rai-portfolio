
import { useState, useEffect } from "react";
import { Github, Linkedin, ChevronDown, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const texts = [
    "Frontend Developer",
    "AI Enthusiast", 
    "Full Stack Developer",
    "Problem Solver"
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className={`text-center lg:text-left order-2 lg:order-1 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="text-white block">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Yatindra Rai
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 lg:mb-8 h-10 lg:h-12 flex items-center justify-center lg:justify-start">
              <span className="inline-block">
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">{displayText}</span>
                <span className="animate-pulse text-blue-400 ml-1">|</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating innovative web experiences and exploring the fascinating world of AI and Machine Learning. Let's build something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center inline-flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="bg-slate-800/60 hover:bg-slate-700/60 text-white px-8 py-4 rounded-lg font-semibold border-2 border-blue-500/40 hover:border-blue-400/60 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center backdrop-blur-sm"
              >
                View My Work
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/YatindraRai002"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-slate-800/60 rounded-lg flex items-center justify-center hover:bg-slate-700/60 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50 transform hover:scale-110"
              >
                <Github size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/yatindra-rai-6a3181324/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-slate-800/60 rounded-lg flex items-center justify-center hover:bg-slate-700/60 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50 transform hover:scale-110"
              >
                <Linkedin size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </div>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end order-1 lg:order-2 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="relative group">
              {/* Animated glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl scale-125 group-hover:scale-135 transition-transform duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-56 sm:w-64 md:w-80 lg:w-96 h-56 sm:h-64 md:h-80 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/40 group-hover:border-blue-400/70 transition-all duration-500 relative z-10 shadow-2xl group-hover:shadow-3xl">
                <img
                  src="/lovable-uploads/a4c5b697-fb03-4d6a-b15e-bd3e701ae34b.png"
                  alt="Yatindra Rai"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
        <div className="animate-bounce">
          <ChevronDown className="text-gray-400 hover:text-gray-200 transition-colors" size={28} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
