
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
    link.href = 'https://github.com/YatindraRai002/yatindra-rai-portfolio/blob/main/Yatindra%20rai_resume.pdf';
    link.download = 'Yatindra_Rai_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-white/90 backdrop-blur-sm"
    }`}>
      {/* Time Display Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-end">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium">
            <Clock size={14} />
            <span>{currentTime.toLocaleTimeString()}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">{currentTime.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">YR</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium text-sm tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 transition-colors duration-200 p-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 py-4 border border-gray-200 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-gray-50 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 mx-4 mt-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-all duration-200 w-full justify-center font-medium"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
