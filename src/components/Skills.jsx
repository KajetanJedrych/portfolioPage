import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'js.svg' },
    { name: 'React', icon: 'logo512.png' },
    { name: 'Next.js', icon: 'nextjs-icon.svg' },
    { name: 'GitHub', icon: 'github.png' },
    { name: 'HTML', icon: 'html-5-logo.svg' },
    { name: 'CSS', icon: 'CSS3_logo.svg' },
    { name: 'Tailwind CSS', icon: 'Tailwind_CSS_Logo.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'SQL', icon: 'sql.png' },
    { name: 'Python', icon: 'Python-logo-notext.svg' },
    { name: 'Django', icon: 'django.svg' },
    { name: 'Azure', icon: 'Amazon_Web_Services_Logo.svg' },
    { name: 'Cucumber', icon: 'cucumber.svg' },
    { name: 'Playwright', icon: 'playwright-logo.svg' },
    { name: 'Selenium', icon: 'selenium-svgrepo-com.svg' },
    { name: 'Jenkins', icon: 'jenkins.png' },
    { name: 'Snowflake', icon: 'snowflake.png' },
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br from-amber-50 to-amber-100">
                <div className="relative w-16 h-16 mb-4 transform transition-transform duration-300 group-hover:rotate-6">
                  <img
                    src={`${process.env.PUBLIC_URL}/${skill.icon}`}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {skill.name}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-200/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;