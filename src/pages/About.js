import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';


const App = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-amber-50 to-amber-100">
      <main>
        <Hero />
        <Skills />
        <WorkExperience />
      </main>
    </div>
  );
};

export default App;