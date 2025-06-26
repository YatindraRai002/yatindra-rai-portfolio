
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
              <span className="text-gray-800">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                Yatindra Rai
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-6 lg:mb-8 h-10 lg:h-12">
              <span className="inline-block">
                {displayText}
                <span className="animate-pulse text-blue-500">|</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating innovative web experiences and exploring the fascinating world of AI and Machine Learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                View My Work
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mt-6 lg:mt-8">
              <a
                href="https://github.com/YatindraRai002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/yatindra-rai-6a3181324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 rounded-full overflow-hidden border-4 border-blue-300 transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:shadow-blue-400/30 group-hover:border-purple-400">
                <img
                  src="/lovable-uploads/a4c5b697-fb03-4d6a-b15e-bd3e701ae34b.png"
                  alt="Yatindra Rai"
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-500" size={28} />
      </div>
    </section>
  );
};

export default Hero;
