import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Skills />
        <WorkExperience />
      </main>
    </div>
  );
};

export default App;