import React from 'react';

const Hero = () => {
  return (
    <section className="bg-amber-50 flex text-center py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Hello my name is  <span className="text-blue-600">Kajetan</span>
        </h1>
        <p className="text-lg text-gray-600">
          As a QA Engineer, I bring expertise in delivering high-quality software testing solutions through my 9-to-5 role.
          Proficient in tools and technologies such as AWS, Python, Java, JavaScript, SQL, and Jenkins, I ensure robust and efficient testing processes.
          Beyond my professional work, I’m deeply passionate about web application development, a skill I’ve honed during university and in my free time.
          I specialize in building full-stack projects using Django and React, blending creativity with technical precision to bring ideas to life.
        </p>
      </div>
    </section>
  );
};

export default Hero;
