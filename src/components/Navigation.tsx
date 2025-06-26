
import { useState, useEffect } from "react";
import { Download, Menu, X, Clock } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/cdd5f0b4-b29f-4783-a8bf-5a33ec1776d1.png';
    link.download = 'Yatindra_Rai_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-purple-500/30" : "bg-slate-900/80 backdrop-blur-sm"
    }`}>
      {/* Time Display Bar */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-1 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-end">
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <Clock size={14} />
            <span>{currentTime.toLocaleTimeString()}</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">{currentTime.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative group">
              <img
                src="/lovable-uploads/a4c5b697-fb03-4d6a-b15e-bd3e701ae34b.png"
                alt="Yatindra Rai"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-blue-400 object-cover transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:rotate-6 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-blue-400/50"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Yatindra Rai
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group text-sm lg:text-base font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 py-4 border border-purple-500/30 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-slate-700/50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 mx-4 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 w-full justify-center"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
