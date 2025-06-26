
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "C", "JAVA", "PYTHON", "HTML", "CSS"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Libraries/Frameworks",
      skills: ["JavaScript", "React", "Tailwind CSS", "Scikit-learn", "PyTorch", "Matplotlib", "Seaborn"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Tools / Platforms",
      skills: ["Git", "TensorFlow", "VS Code", "Jupyter Notebook"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Databases",
      skills: ["MongoDB"],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-xl border border-gray-200 p-4 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden bg-white rounded-lg p-2 sm:p-3 text-center transition-all duration-300 hover:bg-gray-100 cursor-pointer border border-gray-200 hover:border-gray-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-xs sm:text-sm font-medium relative z-10">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6 sm:mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { skill: "React", level: 90, color: "bg-blue-500" },
              { skill: "Python", level: 85, color: "bg-green-500" },
              { skill: "Machine Learning", level: 80, color: "bg-purple-500" },
              { skill: "JavaScript", level: 88, color: "bg-yellow-500" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-800 font-medium text-sm sm:text-base">{item.skill}</span>
                  <span className="text-gray-600 text-xs sm:text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
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
