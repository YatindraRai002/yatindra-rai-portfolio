
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative bg-gradient-to-br from-slate-800 to-purple-800">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate Web Developer with a strong enthusiasm for AI and Machine Learning. I 
              enjoy building user-friendly, scalable web applications and am always exploring how 
              intelligent systems can make digital experiences smarter.
            </p>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Beyond technical skills, I take pride in being both a dependable team player and a confident team leader—someone 
              who believes in collaboration, clear communication, and getting things done together. 
              Whether I'm writing clean code or brainstorming innovative solutions.
            </p>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-500/30 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-blue-400 font-medium text-sm sm:text-base">S.R.M INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
                <p className="text-gray-300 text-sm sm:text-base">Computer Science B.tech</p>
                <p className="text-gray-400 text-sm">Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">6+</div>
              <div className="text-blue-400 text-sm sm:text-base font-medium">Projects Completed</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-purple-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-purple-400 text-sm sm:text-base font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
