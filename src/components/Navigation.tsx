
import { useState, useEffect } from "react";
import { Download, Menu, X, Clock } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "DURGAji@0045") {
      const link = document.createElement('a');
      link.href = '/Yatindra rai_resume.pdf';
      link.download = 'Yatindra_Rai_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShowPasswordModal(false);
      setPassword("");
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password. Please try again.");
    }
  };

  const closeModal = () => {
    setShowPasswordModal(false);
    setPassword("");
    setPasswordError("");
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-blue-500/30" : "bg-slate-900/90 backdrop-blur-sm"
      }`}>
        {/* Time Display Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4">
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
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">YR</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm tracking-wide relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={handleDownloadCV}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium shadow-sm"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 py-4 border border-blue-500/30 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleDownloadCV}
                className="flex items-center space-x-2 mx-4 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-200 w-full justify-center font-medium"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl shadow-2xl p-6 w-full max-w-md border border-blue-500/30">
            <h3 className="text-lg font-semibold text-white mb-4">Resume Access</h3>
            <p className="text-gray-300 mb-4">Please enter the password to download the resume:</p>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 text-white placeholder-gray-400"
                placeholder="Enter password"
                autoFocus
              />
              {passwordError && (
                <p className="text-red-400 text-sm mb-4">{passwordError}</p>
              )}
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Download
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-gray-300 py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
