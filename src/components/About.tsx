
import { Award, Target, Users } from "lucide-react";

const About = () => {
  const stats = [
    { value: "6+", label: "Projects Completed", icon: Target },
    { value: "5+", label: "Technologies Mastered", icon: Award },
    { value: "100%", label: "Dedication & Focus", icon: Users }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-slate-900 to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate developer focused on creating exceptional digital experiences and solving real-world problems with code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="group">
              <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                I'm a passionate <span className="font-semibold text-blue-400">Web Developer</span> with a strong enthusiasm for <span className="font-semibold text-purple-400">AI and Machine Learning</span>. I enjoy building user-friendly, scalable web applications and am always exploring how intelligent systems can make digital experiences smarter and more intuitive.
              </p>
            </div>
            
            <div className="group">
              <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                Beyond technical skills, I take pride in being both a <span className="font-semibold text-blue-400">dependable team player</span> and a <span className="font-semibold text-purple-400">confident team leader</span>—someone who believes in collaboration, clear communication, and achieving excellence together. I'm committed to writing clean, maintainable code and continuously learning new technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-xl border border-blue-500/40 hover:border-blue-400/60 p-6 lg:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Award className="text-blue-400" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-white font-semibold text-lg">S.R.M Institute of Science and Technology</p>
                  <p className="text-blue-300 font-medium">B.Tech in Computer Science</p>
                </div>
                <p className="text-gray-400 flex items-center gap-2">
                  📍 Chennai, Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-xl border border-blue-500/40 hover:border-blue-400/60 p-6 lg:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all duration-300">
                      <Icon className="text-blue-400 group-hover:text-blue-300" size={32} />
                    </div>
                    <div>
                      <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text group-hover:from-blue-300 group-hover:to-purple-300 transition-all">
                        {stat.value}
                      </div>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors mt-1">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white mb-6">What Drives Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
              <h4 className="text-lg font-semibold text-white mb-2">Innovation</h4>
              <p className="text-gray-400">Constantly exploring new technologies and creative solutions to build better digital products.</p>
            </div>
            <div className="group">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
              <h4 className="text-lg font-semibold text-white mb-2">Excellence</h4>
              <p className="text-gray-400">Committed to delivering high-quality code, maintainability, and exceptional user experiences.</p>
            </div>
            <div className="group">
              <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
              <h4 className="text-lg font-semibold text-white mb-2">Growth</h4>
              <p className="text-gray-400">Always learning, adapting, and pushing boundaries to become a better developer and person.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
