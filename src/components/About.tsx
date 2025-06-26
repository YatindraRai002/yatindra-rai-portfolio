
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I'm a passionate Web Developer with a strong enthusiasm for AI and Machine Learning. I 
              enjoy building user-friendly, scalable web applications and am always exploring how 
              intelligent systems can make digital experiences smarter.
            </p>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Beyond technical skills, I take pride in being both a dependable team player and a confident team leader—someone 
              who believes in collaboration, clear communication, and getting things done together. 
              Whether I'm writing clean code or brainstorming innovative solutions.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-blue-600 font-medium text-sm sm:text-base">S.R.M INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
                <p className="text-gray-700 text-sm sm:text-base">Computer Science B.tech</p>
                <p className="text-gray-600 text-sm">Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">6+</div>
              <div className="text-blue-600 text-sm sm:text-base font-medium">Projects Completed</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-purple-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">5+</div>
              <div className="text-purple-600 text-sm sm:text-base font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
