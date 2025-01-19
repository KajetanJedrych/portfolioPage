import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'HTML', 'CSS', 'Git',
    'GitHub', 'SQL', 'Python', 'TypeScript', 'Tailwind CSS', 'AWS', 'Lambda',
  ];

  return (
    <section className="bg-white py-16 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 shadow-md text-yellow-600 font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
