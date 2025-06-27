
const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer focused on creating exceptional digital experiences
          </p>
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

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-white font-medium">S.R.M INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
                <p className="text-gray-300">Computer Science B.tech</p>
                <p className="text-gray-400">Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">6+</div>
              <div className="text-gray-300 font-medium">Projects Completed</div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-300 font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
