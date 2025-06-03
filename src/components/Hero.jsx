import React from 'react';

const Hero = () => {
  return (
    <section className=" flex text-center py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Hello my name is  <span className="text-blue-600">Kajetan</span>
        </h1>
        <p className="text-lg text-gray-600">
        I work as a QA Engineer, mainly because I haven’t (yet) come up with my brilliant million-dollar SaaS idea like all those guys on YouTube.
        I bring solid hands-on experience in Python, JavaScript, AWS, AI testing, CI/CD pipelines, Cucumber and SQL. Basically everything you need to squash bugs and keep software running smoothly.
        I’m not just about code and tests, though. I’m one of the rare QA devs who can run a half-marathon, bench press 100 kg, and play hockey — all while learning new tech on the fly.
         Ready to bring my skills, energy, and a touch of humor to your team. Let’s build something awesome together!
        </p>
      </div>
    </section>
  );
};

export default Hero;
