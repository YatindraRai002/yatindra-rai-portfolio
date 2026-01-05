
import { Zap, Code2, Package, Database } from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "C", "JAVA", "PYTHON", "HTML", "CSS"],
      color: "from-blue-500 to-purple-500",
      icon: Code2
    },
    {
      title: "Libraries/Frameworks",
      skills: ["JavaScript", "React", "Tailwind CSS", "Scikit-learn", "PyTorch", "Matplotlib", "Seaborn"],
      color: "from-purple-500 to-indigo-500",
      icon: Package
    },
    {
      title: "Tools / Platforms",
      skills: ["Git", "TensorFlow", "VS Code", "Jupyter Notebook"],
      color: "from-indigo-500 to-blue-500",
      icon: Zap
    },
    {
      title: "Databases",
      skills: ["MongoDB"],
      color: "from-green-500 to-teal-500",
      icon: Database
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6 animate-gradient-x"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and the tools I use to bring innovative ideas to life.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated gradient border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 blur-sm rounded-xl transition-all duration-500 animate-gradient-x`}></div>
                
                <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-xl border border-blue-500/30 group-hover:border-blue-400/60 p-6 lg:p-8 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className={`p-2.5 bg-gradient-to-r ${category.color} rounded-lg transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group/skill relative overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg p-3 sm:p-4 text-center transition-all duration-500 hover:from-slate-600/60 hover:to-slate-700/60 cursor-pointer border border-slate-600/50 hover:border-blue-500/50 hover:scale-110 transform hover:rotate-2 hover:shadow-lg"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-15 transition-opacity duration-500`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 ${hoveredSkill === skill ? 'opacity-10' : ''} transition-opacity duration-500 blur-xl`}></div>
                        <span className="text-gray-200 group-hover/skill:text-white transition-all duration-500 text-xs sm:text-sm font-semibold relative z-10 group-hover/skill:scale-110 inline-block">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Stats */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {[
            { number: "25+", label: "Technologies", icon: "💻" },
            { number: "5+", label: "Major Projects", icon: "🚀" },
            { number: "4", label: "Categories", icon: "📊" },
            { number: "∞", label: "Learning", icon: "📚" }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-lg p-4 lg:p-6 border border-blue-500/30 group-hover:border-purple-400/60 text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 animate-fade-in cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="text-3xl mb-2 transform group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.number}
              </div>
              <p className="text-gray-300 text-sm lg:text-base font-medium group-hover:text-white transition-colors duration-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
