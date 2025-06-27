
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate developer focused on creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a passionate Web Developer with a strong enthusiasm for AI and Machine Learning. I 
              enjoy building user-friendly, scalable web applications and am always exploring how 
              intelligent systems can make digital experiences smarter.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              Beyond technical skills, I take pride in being both a dependable team player and a confident team leader—someone 
              who believes in collaboration, clear communication, and getting things done together. 
              Whether I'm writing clean code or brainstorming innovative solutions.
            </p>

            <div className="professional-card p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-slate-900 font-medium">S.R.M INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
                <p className="text-slate-700">Computer Science B.tech</p>
                <p className="text-slate-600">Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="professional-card p-6 text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">6+</div>
              <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
            
            <div className="professional-card p-6 text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">5+</div>
              <div className="text-slate-600 font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
