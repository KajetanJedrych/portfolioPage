import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'js.svg' },
    { name: 'React', icon: 'logo512.png' },
    { name: 'GitHub', icon: 'github.png' },
    { name: 'HTML', icon: 'html-5-logo.svg' },
    { name: 'CSS', icon: 'CSS3_logo.svg' },
    { name: 'Tailwind CSS', icon: 'Tailwind_CSS_Logo.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'SQL', icon: 'sql.png' },
    { name: 'Python', icon: 'Python-logo-notext.svg' },
    { name: 'Django', icon: 'django.png' },
    { name: 'Azure', icon: 'Amazon_Web_Services_Logo.svg' },
    { name: 'Cucumber', icon: 'cucumber.svg' },
    { name: 'Playwright', icon: 'playwright-logo.svg' },
    { name: 'Selenium', icon: 'selenium-svgrepo-com.svg' },
    { name: 'Jenkins', icon: 'jenkins.png' },
    { name: 'Snowflake', icon: 'snowflake.png' },
  ];

  return (
    <section className="bg-amber-50 py-16 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-left mb-8">My Skills</h2>
        <div className="grid grid-cols-4 gap-8 md:grid-cols-5 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-yellow-100 to-amber-50 shadow-lg"
            >
              <img
                src={`${process.env.PUBLIC_URL}/${skill.icon}`}
                alt={skill.name}
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
