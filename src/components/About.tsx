
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Web Developer with a strong enthusiasm for AI and Machine Learning. I 
              enjoy building user-friendly, scalable web applications and am always exploring how 
              intelligent systems can make digital experiences smarter.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond technical skills, I take pride in being both a dependable team player and a confident team leader—someone 
              who believes in collaboration, clear communication, and getting things done together. 
              Whether I'm writing clean code or brainstorming innovative solutions.
            </p>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-purple-400 font-medium">S.R.M INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
                <p className="text-gray-300">Computer Science B.tech</p>
                <p className="text-gray-400">Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 transform transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-purple-400">Projects Completed</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-pink-500/20 transform transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-pink-400">Technologies</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 transform transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-400">Dedication</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 transform transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-400">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
