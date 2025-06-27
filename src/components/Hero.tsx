
import { useState, useEffect } from "react";
import { Github, Linkedin, ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Frontend Developer",
    "AI Enthusiast", 
    "Coder"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Yatindra Rai
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 lg:mb-8 h-10 lg:h-12">
              <span className="inline-block">
                {displayText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating innovative web experiences and exploring the fascinating world of AI and Machine Learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="bg-slate-800/50 hover:bg-slate-700/50 text-white px-6 py-3 rounded-lg font-medium border border-blue-500/30 transition-all duration-200 shadow-sm hover:shadow-md text-center backdrop-blur-sm"
              >
                View My Work
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mt-6 lg:mt-8">
              <a
                href="https://github.com/YatindraRai002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Github size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/yatindra-rai-6a3181324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Light glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl scale-110"></div>
              <div className="w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 relative z-10">
                <img
                  src="/lovable-uploads/a4c5b697-fb03-4d6a-b15e-bd3e701ae34b.png"
                  alt="Yatindra Rai"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="text-gray-300" size={28} />
      </div>
    </section>
  );
};

export default Hero;
