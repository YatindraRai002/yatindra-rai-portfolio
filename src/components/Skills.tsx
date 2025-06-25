
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "C", "JAVA", "PYTHON", "HTML", "CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Libraries/Frameworks",
      skills: ["JavaScript", "React", "Tailwind CSS", "Scikit-learn", "PyTorch", "Matplotlib", "Seaborn"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Tools / Platforms",
      skills: ["Git", "TensorFlow", "VS Code", "Jupyter Notebook"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Databases",
      skills: ["MongoDB"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden bg-slate-700/50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-slate-700 cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium relative z-10">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "React", level: 90, color: "bg-blue-500" },
              { skill: "Python", level: 85, color: "bg-green-500" },
              { skill: "Machine Learning", level: 80, color: "bg-purple-500" },
              { skill: "JavaScript", level: 88, color: "bg-yellow-500" }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-gray-400 text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
