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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                Yatindra Rai
              </span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-gray-300 mb-8 h-12">
              <span className="inline-block">
                {displayText}
                <span className="animate-pulse text-purple-400">|</span>
              </span>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              Passionate about creating innovative web experiences and exploring the fascinating world of AI and Machine Learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a
                href="https://github.com/YatindraRai002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/yatindra-rai-6a3181324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:shadow-purple-400/30 group-hover:border-pink-400">
                <img
                  src="/lovable-uploads/a4c5b697-fb03-4d6a-b15e-bd3e701ae34b.png"
                  alt="Yatindra Rai"
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
